<div x-data="{ open: false }" class="relative">
    {{-- Language Switcher Button --}}
    <button @click="open = !open" 
            @click.away="open = false"
            class="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none transition">
        <span class="text-lg">
            @if(app()->getLocale() == 'vi')
                🇻🇳
            @else
                🇬🇧
            @endif
        </span>
        <span>{{ app()->getLocale() == 'vi' ? 'VI' : 'EN' }}</span>
        <svg class="w-4 h-4 transition-transform" :class="{'rotate-180': open}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
    </button>

    {{-- Dropdown Menu --}}
    <div x-show="open" 
         x-transition
         class="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
        
        {{-- Vietnamese Option --}}
        <a href="{{ route('language.switch', 'vi') }}" 
           class="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 transition {{ app()->getLocale() == 'vi' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700' }}">
            <span class="text-lg">🇻🇳</span>
            <span>Tiếng Việt</span>
            @if(app()->getLocale() == 'vi')
                <svg class="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            @endif
        </a>

        {{-- English Option --}}
        <a href="{{ route('language.switch', 'en') }}" 
           class="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 transition {{ app()->getLocale() == 'en' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700' }}">
            <span class="text-lg">🇬🇧</span>
            <span>English</span>
            @if(app()->getLocale() == 'en')
                <svg class="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
            @endif
        </a>
    </div>
</div>
