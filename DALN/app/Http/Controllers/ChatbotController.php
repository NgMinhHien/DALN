<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ChatbotController extends Controller
{
    private $apiKey;
    // Danh sách model dự phòng, sẽ thử lần lượt nếu model đầu bị quota
    private $models = [
        'gemini-2.0-flash',
        'gemini-2.0-flash-lite',
    ];

    public function __construct()
    {
        $this->apiKey = env('GEMINI_API_KEY');
    }
    public function index()
    {
        return view('chatbot');
    }
    public function sendMessage(Request $request)
    {
        $userMessage = trim($request->input('message'));

        if (empty($userMessage)) {
            return response()->json(['message' => 'Vui lòng nhập tin nhắn.']);
        }

        // 🎯 Bối cảnh chatbot quản lý khách sạn (rút gọn để tiết kiệm token)
        $context = "Bạn là Phenikaa Hotel AI, trợ lý khách sạn Phenikaa Hotel. Trả lời tiếng Việt, ngắn gọn, lịch sự.
Thông tin: Check-in 14:00, Check-out 12:00. Standard 800.000đ, Deluxe 1.200.000đ. Dịch vụ: nhà hàng, hồ bơi, spa, gym, giặt ủi, đưa đón sân bay. Hủy phòng trước 24h không mất phí. Địa chỉ: 123 Đường Biển Xanh, Q.1, TP.HCM. Liên hệ lễ tân: 012-345-6789.
Chỉ trả lời câu hỏi liên quan khách sạn và du lịch.";

        // 🚀 Thử từng model, nếu bị quota thì thử model tiếp theo
        foreach ($this->models as $model) {
            try {
                $response = Http::withoutVerifying()->timeout(50)
                    ->withHeaders([
                        'Content-Type' => 'application/json',
                        'X-goog-api-key' => $this->apiKey,
                    ])
                    ->post("https://generativelanguage.googleapis.com/v1beta/models/{$model}:generateContent", [
                        'contents' => [
                            [
                                'parts' => [['text' => $context . "\n\nUser: " . $userMessage]]
                            ]
                        ],
                    ]);

                $data = $response->json();

                // Nếu bị quota exceeded (429), thử model tiếp theo
                if (isset($data['error']) && $data['error']['code'] == 429) {
                    Log::warning("Gemini model {$model} quota exceeded, trying next model...");
                    continue;
                }

                Log::info("Gemini Hotel AI response (model: {$model}): ", $data);

                // 🧠 Lấy phản hồi từ API
                $botResponse = $data['candidates'][0]['content']['parts'][0]['text'] ?? null;

                if ($botResponse) {
                    return response()->json(['message' => $botResponse]);
                }

            } catch (\Exception $e) {
                Log::error("Hotel Chatbot Error (model: {$model}): " . $e->getMessage());
                continue;
            }
        }

        // Nếu tất cả model đều thất bại, trả về phản hồi mặc định thông minh
        return $this->fallbackResponse($userMessage);
    }

    /**
     * Phản hồi dự phòng khi API không khả dụng
     */
    private function fallbackResponse(string $message): \Illuminate\Http\JsonResponse
    {
        $message = mb_strtolower($message);
        $responses = [
            'giá' => 'Giá phòng tham khảo: Standard 800.000đ/đêm, Deluxe 1.200.000đ/đêm. Liên hệ lễ tân 012-345-6789 để biết thêm chi tiết.',
            'phòng' => 'Chúng tôi có phòng Standard và Deluxe. Vui lòng liên hệ lễ tân 012-345-6789 để kiểm tra phòng trống.',
            'check-in' => 'Giờ nhận phòng (check-in): 14:00. Giờ trả phòng (check-out): 12:00.',
            'check-out' => 'Giờ nhận phòng (check-in): 14:00. Giờ trả phòng (check-out): 12:00.',
            'nhận phòng' => 'Giờ nhận phòng (check-in): 14:00. Giờ trả phòng (check-out): 12:00.',
            'trả phòng' => 'Giờ nhận phòng (check-in): 14:00. Giờ trả phòng (check-out): 12:00.',
            'hủy' => 'Chính sách hủy phòng: Hủy trước 24h kể từ ngày đặt sẽ không mất phí.',
            'dịch vụ' => 'Khách sạn có: nhà hàng, hồ bơi, spa, gym, giặt ủi, đưa đón sân bay. Hoạt động 6h00–21h00.',
            'hồ bơi' => 'Có hồ bơi, hoạt động từ 6h00–21h00.',
            'spa' => 'Có dịch vụ spa, hoạt động từ 6h00–21h00.',
            'sân bay' => 'Có dịch vụ đưa đón sân bay, cần đặt trước 24h. Liên hệ 012-345-6789.',
            'địa chỉ' => 'Địa chỉ: 123 Đường Biển Xanh, Q.1, TP.HCM.',
            'vị trí' => 'Địa chỉ: 123 Đường Biển Xanh, Q.1, TP.HCM.',
            'liên hệ' => 'Liên hệ lễ tân qua số điện thoại: 012-345-6789.',
            'đặt phòng' => 'Để đặt phòng, vui lòng truy cập trang chủ hoặc liên hệ lễ tân 012-345-6789.',
            'xin chào' => 'Xin chào! Tôi là Phenikaa Hotel AI. Tôi có thể giúp bạn về đặt phòng, giá phòng, dịch vụ khách sạn. Bạn cần hỗ trợ gì?',
            'hi' => 'Xin chào! Tôi là Phenikaa Hotel AI. Tôi có thể giúp bạn về đặt phòng, giá phòng, dịch vụ khách sạn. Bạn cần hỗ trợ gì?',
            'hello' => 'Xin chào! Tôi là Phenikaa Hotel AI. Tôi có thể giúp bạn về đặt phòng, giá phòng, dịch vụ khách sạn. Bạn cần hỗ trợ gì?',
        ];

        foreach ($responses as $keyword => $reply) {
            if (str_contains($message, $keyword)) {
                return response()->json(['message' => $reply]);
            }
        }

        return response()->json([
            'message' => 'Xin chào! Tôi có thể giúp bạn về: đặt phòng, giá phòng, dịch vụ (hồ bơi, spa, gym...), giờ check-in/out, địa chỉ khách sạn. Bạn muốn hỏi về vấn đề gì?'
        ]);
    }
}
