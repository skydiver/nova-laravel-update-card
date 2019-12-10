<?php

namespace Skydiver\NovaUpdateCard\Http\Controllers;

use Illuminate\Support\Facades\Cache;
use Packagist\Api\Client;
use Skydiver\NovaUpdateCard\Version;
use Laravel\Nova\Nova;

class UpdateController
{
    public function laravelCheck()
    {

        $versions = Cache::remember('nova-update-card', 3600, function () {
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
        return [
            'current_version' => Nova::version(),
            'latest_version' => 2,
            'update_available' => true
        ];
    }

}
