<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Raily') }}</title>
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        @vite(['resources/css/app.css', 'resources/js/app.js'])

        <meta content="Raily® - Meets on the move. The ultimate AI-driven social travel hub. Unleash the traveler in you with an AI-guided concierge designed to provide personalized bookings, while augmented reality and gamification turn your journey into a magical one. It&#x27;s not just an app - it&#x27;s a companion! Raily®. Connect, Travel, Friends." name="description"/>
        <meta content="Raily - Meets on the Move" property="og:title"/>
        <meta content="Raily® - Meets on the move. The ultimate AI-driven social travel hub. Unleash the traveler in you with an AI-guided concierge designed to provide personalized bookings, while augmented reality and gamification turn your journey into a magical one. It&#x27;s not just an app - it&#x27;s a companion! Raily®. Connect, Travel, Friends." property="og:description"/>
        <meta content="{{ asset('assets/files/og.jpg') }}" property="og:image"/>
        <meta content="Raily - Meets on the Move" property="twitter:title"/>
        <meta content="Raily® - Meets on the move. The ultimate AI-driven social travel hub. Unleash the traveler in you with an AI-guided concierge designed to provide personalized bookings, while augmented reality and gamification turn your journey into a magical one. It&#x27;s not just an app - it&#x27;s a companion! Raily®. Connect, Travel, Friends." property="twitter:description"/>
        <meta content="{{ asset('assets/files/og.jpg') }}" property="twitter:image"/>
        <meta property="og:type" content="website"/>
        <meta content="summary_large_image" name="twitter:card"/>
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
        <link rel="stylesheet" href="{{ asset('assets/css/webflow.min.css') }}" type="text/css"/>

        <link href="https://cdn.prod.website-files.com/64aceaf9cb10fc1c8e4efdbc/64ad5758771455690c6cd002_favicon-32x32.png" rel="shortcut icon" type="image/x-icon"/>
        <link href="https://cdn.prod.website-files.com/64aceaf9cb10fc1c8e4efdbc/64ad57b8cfe4b6d03ca2342c_111.png" rel="apple-touch-icon"/>

        <!-- Chat styles -->
        <link rel="preload" href="{{ asset('assets/css/embed.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
        <!-- Video Player Styles -->
        <link rel="preload" href="{{ asset('files/video-js.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">

        <link rel="stylesheet" href="{{ asset('assets/css/controls.css') }}" type="text/css"/>
        <link rel="stylesheet" href="{{ asset('assets/css/customized.css') }}" type="text/css"/>

        <link rel="stylesheet" href="{{ asset('assets/css/mystyles.css') }}" type="text/css"/>

        <!-- swiper -->
        <link rel="stylesheet" href="{{ asset('assets/npm/swiper@11/swiper-bundle.min.css') }}">

        @livewireStyles
    </head>

    <body class="body">
        <div class="page-wrapper">
            @include('includes.navbar')

            <main class="main-wrapper">
                {{ $slot }}
            </main>
        </div>

        @include('includes.footer')

        @livewireScripts

        <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=64aceaf9cb10fc1c8e4efdbc" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script async id="ask-raily-script" data-src="https://embed.mottle.com/embed.js"></script>

        <script defer src="{{ asset('assets/js/SmoothScroll.min.js') }}" integrity="sha256-huW7yWl7tNfP7lGk46XE+Sp0nCotjzYodhVKlwaNeco=" crossorigin="anonymous"></script>

        <script src="{{ asset('assets/js/widget.js') }}" type="text/javascript"></script>
        <script src="{{ asset('assets/js/webflow.js') }}" type="text/javascript"></script>
        <script src="{{ asset('assets/js/avatars.js') }}" type="text/javascript"></script>
        <script src="{{ asset('assets/js/avatarsPro.js') }}" type="text/javascript"></script>
        <script src="{{ asset('assets/js/platform.js') }}" type="text/javascript"></script>
        <script src="{{ asset('assets/js/collector.js') }}" type="text/javascript"></script>
        <script src="{{ asset('assets/js/webfont.js') }}" type="text/javascript"></script>

        <script src="{{ asset('assets/js/jquery-3.5.1.min.js') }}" type="text/javascript"></script>

        <script src="{{ asset('assets/npm/swiper@11/swiper-bundle.min.js') }}" type="text/javascript"></script>
        <script src="{{ asset('assets/npm/video-playlist/videojs-playlist.min.js') }}" type="text/javascript"></script>
        <script src="{{ asset('files/video.min.js') }}" ></script>
    </body>
</html>
