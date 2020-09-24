<?php

namespace Skydiver\NovaUpdateCard\Http\Controllers;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Skydiver\NovaUpdateCard\Version;
use Laravel\Nova\Nova;
use PHPHtmlParser\Dom;

class UpdateController
{
    public function laravelCheck()
    {
        $versions = Cache::remember('laravel-update-card', 3600, function () {
            $request = Http::get('https://packagist.org/p/laravel/framework.json');
            $response = $request->json();
            $versions = $response['packages']['laravel/framework'];
            return collect($versions)->keys()->toArray();
        });

        $current = app()->version();
        $latest = Version::latest($versions);

        return [
            'current_version' => $current,
            'latest_version' => $latest,
            'update_available' => version_compare($current, $latest, '<')
        ];
    }

    public function novaCheck()
    {

        $current = Nova::version();

        $latest = Cache::remember('nova-update-card', 3600, function () {
            $dom = new Dom;
            $dom->loadFromUrl('https://nova.laravel.com/releases');
            $url = $dom->find('.list-reset li')[0]->find('a')[0]->getAttribute('href');
            $url_array = explode('/', $url);
            return end($url_array);
        });

        return [
            'current_version' => $current,
            'latest_version' => $latest,
            'update_available' => version_compare($current, $latest, '<')
        ];
    }

}
