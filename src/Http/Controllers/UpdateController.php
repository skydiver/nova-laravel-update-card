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
            $data = $dom->find('#app')->getAttribute('data-page');
            $data = json_decode(html_entity_decode($data));
            return $data->props->releases[0]->version;
        });

        return [
            'current_version' => $current,
            'latest_version' => $latest,
            'update_available' => version_compare($current, $latest, '<')
        ];
    }

}
