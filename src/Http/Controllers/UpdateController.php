<?php

namespace Skydiver\NovaUpdateCard\Http\Controllers;

use Illuminate\Support\Facades\Cache;
use Packagist\Api\Client;
use Skydiver\NovaUpdateCard\Version;
use Laravel\Nova\Nova;
use PHPHtmlParser\Dom;

class UpdateController
{
    public function laravelCheck()
    {

        $versions = Cache::remember('laravel-update-card', 3600, function () {
            $client = new Client();
            $package = $client->get('laravel/framework');
            return array_map(function ($version) {
                return $version->getVersion();
            }, $package->getVersions());
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
