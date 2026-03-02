<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VietnameseContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Update Rooms với nội dung tiếng Việt
        DB::table('rooms')->where('code', 'FAM')->update([
            'name_vi' => 'Phòng Gia đình',
            'description_vi' => 'Phòng lý tưởng cho kỳ nghỉ cùng gia đình',
            'explanation_vi' => '<p>Phòng gia đình của chúng tôi được thiết kế rộng rãi và thoải mái, hoàn hảo cho những gia đình muốn có kỳ nghỉ thư giãn. Với không gian đầy đủ tiện nghi và trang bị hiện đại, phòng mang đến trải nghiệm nghỉ dưỡng tuyệt vời.</p>'
        ]);

        DB::table('rooms')->where('code', 'JNR')->update([
            'name_vi' => 'Phòng Junior Suite',
            'description_vi' => 'Phòng đi kèm tủ quần áo lớn và phòng khách',
            'explanation_vi' => '<p>Junior Suite là sự kết hợp hoàn hảo giữa sang trọng và tiện nghi. Phòng bao gồm khu vực phòng ngủ riêng biệt và phòng khách rộng rãi, tủ quần áo lớn cho không gian lưu trữ thoải mái.</p>'
        ]);

        DB::table('rooms')->where('code', 'CNT')->update([
            'name_vi' => 'Phòng Kết nối',
            'description_vi' => 'Phòng phù hợp cho nhóm với phòng ngủ riêng',
            'explanation_vi' => '<p>Phòng kết nối lý tưởng cho các nhóm bạn hoặc gia đình lớn. Với phòng ngủ riêng biệt nhưng vẫn kết nối với nhau, mang lại sự riêng tư và thuận tiện cho mọi thành viên.</p>'
        ]);

        // Update Facilities với nội dung tiếng Việt
        DB::table('facilities')->where('code', 'BR')->update([
            'name_vi' => 'Phòng tắm',
            'description_vi' => 'Tắm rửa sạch sẽ trong phòng tắm riêng được trang bị đầy đủ',
            'explanation_vi' => '<p>Phòng tắm riêng của chúng tôi được trang bị đầy đủ tiện nghi cao cấp, đảm bảo sự sạch sẽ và thoải mái tối đa cho khách lưu trú.</p>'
        ]);

        DB::table('facilities')->where('code', 'CF')->update([
            'name_vi' => 'Quán cà phê',
            'description_vi' => 'Nghỉ ngơi bằng cách ngắm nhìn khung cảnh đẹp',
            'explanation_vi' => '<p>Quán cà phê của khách sạn mang đến không gian thư giãn lý tưởng với tầm nhìn tuyệt đẹp, nơi bạn có thể thưởng thức các loại đồ uống cao cấp.</p>'
        ]);

        DB::table('facilities')->where('code', 'SP')->update([
            'name_vi' => 'Hồ bơi',
            'description_vi' => 'Bơi trong hồ bơi riêng cùng bạn bè!',
            'explanation_vi' => '<p>Hồ bơi riêng biệt của chúng tôi mang đến trải nghiệm thư giãn tuyệt vời, nơi bạn có thể tận hưởng thời gian vui vẻ cùng gia đình và bạn bè.</p>'
        ]);

        DB::table('facilities')->where('code', 'KT')->update([
            'name_vi' => 'Nhà bếp',
            'description_vi' => 'Bạn muốn có nhà bếp riêng trong phòng?',
            'explanation_vi' => '<p>Phòng được trang bị nhà bếp riêng với đầy đủ dụng cụ nấu nướng, giúp bạn có thể tự do chuẩn bị các bữa ăn theo ý muốn.</p>'
        ]);

        DB::table('facilities')->where('code', 'LB')->update([
            'name_vi' => 'Thư viện',
            'description_vi' => 'Đọc sách miễn phí thoải mái',
            'explanation_vi' => '<p>Thư viện của khách sạn cung cấp không gian yên tĩnh với bộ sưu tập sách phong phú, lý tưởng cho những ai yêu thích đọc sách.</p>'
        ]);

        DB::table('facilities')->where('code', 'LR')->update([
            'name_vi' => 'Phòng khách',
            'description_vi' => 'Chào đón bạn bè đến phòng khách của khách sạn',
            'explanation_vi' => '<p>Phòng khách rộng rãi và sang trọng, nơi lý tưởng để gặp gỡ bạn bè và người thân trong không gian thoải mái.</p>'
        ]);

        DB::table('facilities')->where('code', 'MP')->update([
            'name_vi' => 'Chợ',
            'description_vi' => 'Mua sắm dễ dàng tại chợ của chúng tôi',
            'explanation_vi' => '<p>Chợ trong khách sạn cung cấp đầy đủ các sản phẩm thiết yếu và đặc sản địa phương, phục vụ mọi nhu cầu mua sắm của bạn.</p>'
        ]);

        // Update About với nội dung tiếng Việt
        DB::table('abouts')->where('id', 1)->update([
            'title_vi' => 'Bắt đầu từ những người đi du lịch',
            'text_vi' => 'Khách sạn cung cấp chỗ ở với trung tâm thể dục, bãi đậu xe riêng miễn phí, phòng chờ chung và sân hiên. Khách sạn 4 sao này cung cấp dịch vụ phòng và dịch vụ nhà trông trẻ. Chỗ ở cung cấp quầy lễ tân 24 giờ, dịch vụ đưa đón sân bay, bếp chung và Wi-Fi miễn phí trong tất cả các khu vực.'
        ]);

        $this->command->info('Dữ liệu tiếng Việt đã được thêm thành công!');
    }
}
