<?php

namespace Skydiver\UpdateCard\Tests;

class UpdateControllerTest extends TestCase
{
    /** @test */
    public function it_returns_version_information()
    {
        $content = $this
            ->get('nova-vendor/skydiver/update-card/check')
            ->getContent();

        $versionInfo = json_decode($content, true);

        $this->assertSame(app()->version(), $versionInfo['current_version']);
    }
}