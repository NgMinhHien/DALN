<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script defer src="{{ asset('js/app.js')  }}"></script>
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
    <title>{{ $title }}</title>
    <livewire:styles />
</head>
<body class="font-['Quicksand']">
    <div class="relative overflow-x-hidden min-h-screen flex flex-col justify-between">
        <x-nav />

       {{ $slot }}
        
        <footer class="py-8 border-t border-gray-200">
            <div class="container px-10 mx-auto grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-10">
                <div class="space-y-2">
                    <span class="uppercase tracking-widest text-gray-800 font-bold font-['poppins']">{{ __('home.help') }}</span>
                    <div class="flex flex-col space-y-2">
                        <a class="text-sm text-gray-600 hover:underline" href="#">{{ __('home.help_center') }}</a>
                        <a class="text-sm text-gray-600 hover:underline" href="#">{{ __('home.faq') }}</a>
                        <a class="text-sm text-gray-600 hover:underline" href="#">{{ __('home.privacy_policy') }}</a>
                        <a class="text-sm text-gray-600 hover:underline" href="#">{{ __('home.cookie_policy') }}</a>
                        <a class="text-sm text-gray-600 hover:underline" href="#">{{ __('home.terms_of_use') }}</a>
                    </div>
                </div>
                <div class="space-y-2">
                    <span class="uppercase tracking-widest text-gray-800 font-bold font-['poppins']">{{ __('common.rooms') }}</span>
                    <div class="flex flex-col space-y-2">
                        <a class="text-sm text-gray-600 hover:underline" href="#">{{ __('home.type') }}</a>
                        <a class="text-sm text-gray-600 hover:underline" href="#">{{ __('common.facilities') }}</a>
                    </div>
                </div>
                <div class="space-y-2">
                    <span class="uppercase tracking-widest text-gray-800 font-bold font-['poppins']">{{ __('common.about') }}</span>
                    <div class="flex flex-col space-y-2">
                        <a class="text-sm text-gray-600 hover:underline" href="#">{{ __('home.hotel_hebat') }}</a>
                        <a class="text-sm text-gray-600 hover:underline" href="#">{{ __('home.articles') }}</a>
                        <a class="text-sm text-gray-600 hover:underline" href="#">{{ __('home.press') }}</a>
                    </div>
                </div>
                <div class="space-y-2">
                    <span class="uppercase tracking-widest text-gray-800 font-bold font-['poppins']">{{ __('home.partner') }}</span>
                    <div class="flex flex-col space-y-2">
                        <a class="text-sm text-gray-600 hover:underline" href="#">{{ __('home.job_vacancy') }}</a>
                        <a class="text-sm text-gray-600 hover:underline" href="#">{{ __('home.advertise') }}</a>
                        <a class="text-sm text-gray-600 hover:underline" href="#">{{ __('home.affiliation') }}</a>
                    </div>
                </div>
                <div class="space-y-2">
                    <span class="uppercase tracking-widest text-gray-800 font-bold font-['poppins']">{{ __('home.download_app') }}</span>
                    <div class="flex flex-col space-y-2">
                        <a class="text-sm text-gray-600 hover:underline" href="#">{{ __('home.for_android') }}</a>
                        <a class="text-sm text-gray-600 hover:underline" href="#">{{ __('home.for_ios') }}</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    <livewire:scripts />
</body>
</html>