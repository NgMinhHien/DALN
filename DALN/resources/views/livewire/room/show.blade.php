<section class="mt-28 mb-10">
    <div class="container px-8 mx-auto grid lg:grid-cols-12 gap-10">
        <main class="w-full space-y-6 lg:col-span-8">
            <div class="aspect-[16/9] overflow-hidden rounded-tl-2xl rounded-br-2xl relative z-10">
                <img src="{{ asset('storage/' . $room->image) }}" class="w-full block hover:scale-110 transition-all duration-300" alt="{{ trans_content($room, 'name') }}">
            </div>
            <div class="bg-gray-200 text-sm text-gray-600 flex gap-x-4 gap-y-2 justify-center rounded-tr-lg rounded-bl-lg py-2 px-4">
                <div class="flex items-center gap-1 text-gray-800">
                    <i class='bx bx-show'></i>
                    <span class="text-sm capitalize">{{ $room->views }}</span>
                </div>
                <div class="flex items-center gap-1 text-gray-800">
                    <i class='bx bx-star'></i>
                    <span class="text-sm capitalize">{{ $room->rate }}</span>
                </div>
                <div class="flex items-center gap-1 text-gray-800">
                    <i class='bx bx-chat'></i>
                    <span class="text-sm capitalize">{{ $room->reviews->count() }}</span>
                </div>
                <div class="flex items-center gap-1 text-gray-800">
                    <i class='bx bx-money'></i>
                    <span class="text-sm capitalize">${{ $room->price }}/{{ __('common.night') }}</span>
                </div>
            </div>
            <div class="prose sm:prose-base prose max-w-none prose-img:rounded-tr-xl prose-img:rounded-bl-xl prose-img:w-full">
                <h1>{{ trans_content($room, 'name') }}</h1>
                <blockquote>
                    {{ trans_content($room, 'description') }}
                </blockquote>
                {!! trans_content($room, 'explanation') !!}
                <h2>{{ __('room.facilities_obtained') }}</h2>
                <ul>
                    @foreach ($room->facilities as $roomFacility)
                        <li><a href="#{{ $roomFacility->facility->name }}">{{ $roomFacility->facility->name }}</a></li>
                    @endforeach
                </ul>
                @forelse ($room->facilities as $roomFacility)
                    <h3 id="{{ $roomFacility->facility->name }}" class="scroll-mt-20">{{ $roomFacility->facility->name }}</h3>
                    <div class="aspect-[16/9] overflow-hidden rounded-tl-2xl rounded-br-2xl relative z-10 not-prose">
                        <img src="{{ asset('storage/' . $roomFacility->facility->image) }}" class="w-full block hover:scale-110 transition-all duration-300" alt="{{ $roomFacility->facility->name }}">
                    </div>
                    <blockquote>
                        {{ $roomFacility->facility->description }}
                    </blockquote>
                    {!! $roomFacility->facility->explanation !!}
                @empty
                    <p>{{ __('room.no_special_facilities') }}</p>
                @endforelse
            </div>
        </main>
        <aside class="relative lg:col-span-4 space-y-4">
            <div class="space-y-2">
                <h2 class="text-2xl text-gray-800 font-bold">{{ __('room.reservation') }}</h2>
                <p class="tracking-wide text-gray-600 sm:text-base text-sm">
                    {{ __('room.interested_in_room') }}<span class="font-bold">{{ $room->availableRoomsCount() }} {{ __('room.rooms_available') }}</span>
                </p>
            </div>
            <hr>
            @auth
                @if (auth()->user()->hasVerifiedEmail())
                    @if (!auth()->user()->hasRole('user'))
                        <div x-data="{ open: false }">
                            <div class="grid gap-4">
                                <div class="grid lg:grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div class="form-control">
                                        <label for="check_in" class="label">{{ __('home.check_in') }}</label>
                                        <input class="w-full input" type="date" name="check_in" id="check_in"/>
                                    </div>
                                    <div class="form-control">
                                        <label for="check_out" class="label">{{ __('home.check_out') }}</label>
                                        <input class="w-full input" type="date" name="check_out" id="check_out"/>
                                    </div>
                                </div>
                                <div class="form-control">
                                    <label for="total_rooms" class="label">{{ __('room.total_rooms') }}</label>
                                    <input class="w-full input" type="number" name="total_rooms" id="total_rooms"/>
                                </div>
                                <button x-on:click="open = true" class="btn">{{ __('room.booking') }}</button>
                            </div>
                            <div x-show="open" style="display: none" x-on:keydown.escape.prevent.stop="open = false" role="dialog" aria-modal="true" x-id="['modal-title']" :aria-labelledby="$id('modal-title')" class="fixed inset-0 overflow-y-auto z-50">
                                <div x-show="open" x-transition.duration.300ms.opacity class="fixed inset-0 bg-black/50"></div>
                                <div x-show="open" x-transition.duration.300ms x-on:click="open = false" class="relative min-h-screen flex items-center justify-center p-4">
                                    <div x-on:click.stop x-trap.noscroll.inert="open" class="relative max-w-md w-full bg-white rounded-xl p-10 overflow-y-auto space-y-4 text-center">
                                        <i class='bx bx-info-circle text-8xl text-blue-600'></i>
                                        <h2 class="text-3xl font-bold text-gray-800" :id="$id('modal-title')">{{ __('room.you_cant_do_it') }}</h2>
                                        <p class="tracking-wide text-gray-600 sm:text-base text-sm">
                                            {{ __('room.role_not_user') }}
                                        </p>
                                        <div class="flex space-x-2 justify-center">
                                            <button type="button" x-on:click="open = false" class="btn">
                                                {{ __('room.oh_okay') }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @else
                        <form action="#" method="POST" wire:submit.prevent='reservation' class="grid gap-4">
                            <div class="grid lg:grid-cols-1 sm:grid-cols-2 gap-4">
                                <div class="form-control">
                                    <label for="check_in" class="label">{{ __('home.check_in') }}</label>
                                    <input class="w-full input" type="date" name="check_in" min="{{ $minCheckIn }}" wire:change="setCheckIn" wire:model='check_in' id="check_in"/>
                                    @error('check_in')
                                        <span class="invalid">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="form-control">
                                    <label for="check_out" class="label">{{ __('home.check_out') }}</label>
                                    <input class="w-full input" type="date" name="check_out" min="{{ $minCheckOut }}" wire:change="setCheckOut" wire:model='check_out' id="check_out"/>
                                    @error('check_out')
                                        <span class="invalid">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                            <div class="form-control">
                                <label for="total_rooms" class="label">{{ __('room.total_rooms') }}</label>
                                <input class="w-full input" type="number" name="total_rooms" min="1" max="{{ $room->total_rooms }}" wire:keyup='setPrice' wire:model="total_rooms" id="total_rooms"/>
                                @error('total_rooms')
                                    <span class="invalid">{{ $message }}</span>
                                @enderror
                            </div>
                            @if ($check_in && $check_out && $total_rooms)
                                <p class="tracking-wide text-gray-600 sm:text-base text-sm">{{ __('room.total_price_stay', ['days' => $totalDays, 'count' => $total_rooms, 'room' => trans_content($room, 'name'), 'price' => '$' . $totalPrice]) }}</p>
                            @endif
                            <button class="btn">{{ __('common.confirm') }}</button>
                        </form>
                        <div x-data="{ open: false }">
                            <div x-show="open" @reservation:created.window="open = true" style="display: none" x-on:keydown.escape.prevent.stop="open = false" role="dialog" aria-modal="true" x-id="['modal-title']" :aria-labelledby="$id('modal-title')" class="fixed inset-0 overflow-y-auto z-50">
                                <div x-show="open" x-transition.duration.300ms.opacity class="fixed inset-0 bg-black/50"></div>
                                <div x-show="open" x-transition.duration.300ms x-on:click="open = false" class="relative min-h-screen flex items-center justify-center p-4">
                                    <div x-on:click.stop x-trap.noscroll.inert="open" class="relative max-w-md w-full bg-white rounded-xl p-10 overflow-y-auto space-y-4">
                                        <div class="text-center space-y-4">
                                            <i class='bx bx-check-circle text-8xl text-green-600'></i>
                                            <h2 class="text-3xl font-bold text-gray-800" :id="$id('modal-title')">{{ __('room.reservation_success') }}</h2>
                                            <p class="tracking-wide text-gray-600 sm:text-base text-sm">
                                                {{ __('room.reservation_success_msg') }}
                                            </p>
                                        </div>
                                        <div class="flex space-x-2 justify-center">
                                            <a href="{{ route('dashboard.user.reservations.index') }}" class="btn">
                                                {{ __('room.view_reservations') }}
                                            </a>
                                            <button type="button" x-on:click="open = false" class="btn btn-outline">
                                                {{ __('facility.okay') }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endif
                @else
                    <div x-data="{ open: false }">
                        <div class="grid gap-4">
                            <div class="grid lg:grid-cols-1 sm:grid-cols-2 gap-4">
                                <div class="form-control">
                                    <label for="check_in" class="label">{{ __('Check In') }}</label>
                                    <input class="w-full input" type="date" name="check_in" id="check_in"/>
                                </div>
                                <div class="form-control">
                                    <label for="check_out" class="label">{{ __('Check Out') }}</label>
                                    <input class="w-full input" type="date" name="check_out" id="check_out"/>
                                </div>
                            </div>
                            <div class="form-control">
                                <label for="total_rooms" class="label">{{ __('Total Rooms') }}</label>
                                <input class="w-full input" type="number" name="total_rooms" id="total_rooms"/>
                            </div>
                            <button x-on:click="open = true" class="btn">{{ __('Booking') }}</button>
                        </div>
                        <div x-show="open" style="display: none" x-on:keydown.escape.prevent.stop="open = false" role="dialog" aria-modal="true" x-id="['modal-title']" :aria-labelledby="$id('modal-title')" class="fixed inset-0 overflow-y-auto z-50">
                            <div x-show="open" x-transition.duration.300ms.opacity class="fixed inset-0 bg-black/50"></div>
                            <div x-show="open" x-transition.duration.300ms x-on:click="open = false" class="relative min-h-screen flex items-center justify-center p-4">
                                <div x-on:click.stop x-trap.noscroll.inert="open" class="relative max-w-md w-full bg-white rounded-xl p-10 overflow-y-auto space-y-4 text-center">
                                    <i class='bx bx-info-circle text-8xl text-blue-600'></i>
                                    <h2 class="text-3xl font-bold text-gray-800" :id="$id('modal-title')">Email Verification First</h2>
                                    <p class="tracking-wide text-gray-600 sm:text-base text-sm">
                                        You must verify your email first after logging in!
                                    </p>
                                    <div class="flex space-x-2 justify-center">
                                        <a href="{{ route('verification.notice') }}" class="btn">
                                            Verification
                                        </a>
                                        <button type="button" x-on:click="open = false" class="btn btn-outline">
                                            Later
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endif
            @else
                <div x-data="{ open: false }">
                    <div class="grid gap-4">
                        <div class="grid lg:grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="form-control">
                                <label for="check_in" class="label">{{ __('Check In') }}</label>
                                <input class="w-full input" type="date" name="check_in" id="check_in"/>
                            </div>
                            <div class="form-control">
                                <label for="check_out" class="label">{{ __('Check Out') }}</label>
                                <input class="w-full input" type="date" name="check_out" id="check_out"/>
                            </div>
                        </div>
                        <div class="form-control">
                            <label for="total_rooms" class="label">{{ __('Total Rooms') }}</label>
                            <input class="w-full input" type="number" name="total_rooms" id="total_rooms"/>
                        </div>
                        <button x-on:click="open = true" class="btn">{{ __('Booking') }}</button>
                    </div>
                    <div x-show="open" style="display: none" x-on:keydown.escape.prevent.stop="open = false" role="dialog" aria-modal="true" x-id="['modal-title']" :aria-labelledby="$id('modal-title')" class="fixed inset-0 overflow-y-auto z-50">
                        <div x-show="open" x-transition.duration.300ms.opacity class="fixed inset-0 bg-black/50"></div>
                        <div x-show="open" x-transition.duration.300ms x-on:click="open = false" class="relative min-h-screen flex items-center justify-center p-4">
                            <div x-on:click.stop x-trap.noscroll.inert="open" class="relative max-w-md w-full bg-white rounded-xl p-10 overflow-y-auto space-y-4 text-center">
                                <i class='bx bx-info-circle text-8xl text-blue-600'></i>
                                <h2 class="text-3xl font-bold text-gray-800" :id="$id('modal-title')">Must Login First</h2>
                                <p class="tracking-wide text-gray-600 sm:text-base text-sm">
                                    You must login first before making a reservation!
                                </p>
                                <div class="flex space-x-2 justify-center">
                                    <a href="{{ route('login') }}" class="btn">
                                        Login
                                    </a>
                                    <button type="button" x-on:click="open = false" class="btn btn-outline">
                                        Later
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            @endauth
        </aside>
        <div class="space-y-4 lg:col-span-8 border-t pt-10">
            <h2 class="text-2xl text-gray-800 font-bold">{{ __('Reviews') }}</h2>
            <div class="space-y-6">
                @forelse ($reviews as $review)
                    <div class="bg-gray-100 p-6 rounded-tr-xl rounded-bl-xl space-y-2">
                        <div>
                            @for ($i=1; $i <= $review->star; $i++)
                                <i class="bx bx-star text-lg text-orange-500"></i>
                            @endfor
                        </div>
                        <p class="tracking-wide text-gray-800 sm:text-base text-sm">
                            "{!! nl2br($review->message) !!}"
                        </p>
                        <div class="flex items-center gap-2">
                            <img class="w-10 h-10 rounded-tr-xl rounded-bl-xl" src="{{ asset('storage/' . $review->user->avatar) }}" alt="">
                            <p class="font-bold text-gray-600 text-sm">
                                {{ $review->user->name }}
                            </p>
                        </div>
                    </div>
                @empty
                    <p class="text-gray-600 tracking-wide sm:text-base text-sm">Be the first to review this room!</p>
                @endforelse
            </div>
            @if (count($reviews->where('user_id', auth()->id())))
                <livewire:room.review.edit :review="$reviews->firstWhere('user_id', auth()->id())" :room="$room" />
            @else
                <livewire:room.review.create :room="$room" />
            @endif
        </div>
    </div>
    <div x-data="{ open: false }">
        <div x-show="open" @review:created.window="open = true" @review:edited.window="open = true" style="display: none" x-on:keydown.escape.prevent.stop="open = false" role="dialog" aria-modal="true" x-id="['modal-title']" :aria-labelledby="$id('modal-title')" class="fixed inset-0 overflow-y-auto z-50">
            <div x-show="open" x-transition.duration.300ms.opacity class="fixed inset-0 bg-black/50"></div>
            <div x-show="open" x-transition.duration.300ms x-on:click="open = false" class="relative min-h-screen flex items-center justify-center p-4">
                <div x-on:click.stop x-trap.noscroll.inert="open" class="relative max-w-md w-full bg-white rounded-xl p-10 overflow-y-auto space-y-4">
                    <div class="text-center space-y-4">
                        <i class='bx bx-check-circle text-8xl text-green-600'></i>
                        <h2 class="text-3xl font-bold text-gray-800" :id="$id('modal-title')">Review Successfully</h2>
                        <p class="tracking-wide text-gray-600 sm:text-base text-sm">Your review has been successfully submitted! Thank you for your review!</p>
                    </div>
                    <div class="flex space-x-2 justify-center">
                        <button type="button" x-on:click="open = false" class="btn">
                            Okay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>