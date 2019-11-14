<?php

namespace Skydiver\UpdateCard\Http\Controllers;

use Illuminate\Support\Facades\Cache;
use Packagist\Api\Client;
use Skydiver\UpdateCard\Version;

class UpdateController
{
    public function check()
    {

        $versions = Cache::remember('update-card', 3600, function () {
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
}