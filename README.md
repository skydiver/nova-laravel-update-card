# Nova Laravel Update Card

[![Latest Version on Packagist](https://img.shields.io/packagist/v/skydiver/nova-update-card.svg?style=flat-square)](https://packagist.org/packages/skydiver/nova-update-card)
[![Total Downloads](https://img.shields.io/packagist/dt/skydiver/nova-update-card.svg?style=flat-square)](https://packagist.org/packages/skydiver/nova-update-card)

Check if you're running the latest versions of Laravel or Nova right from your dashboard.

> This is a fork of Nova [Laravel Update Card](https://github.com/beyondcode/nova-laravel-update-card). All the credits goes to original authors.

![tinker screenshot](https://github.com/skydiver/nova-update-card/raw/master/screenshot.png)

## Installation

You can install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require skydiver/nova-update-card
```

Next up, you must register the card with Nova. This is typically done in the `cards` method of the `NovaServiceProvider`.

```php
// in app/Providers/NovaServiceProvder.php

// ...
public function cards()
{
    return [
        // ...
        (new \Skydiver\NovaUpdateCard\LaravelUpdateCard)->width('1/2'),
        (new \Skydiver\NovaUpdateCard\NovaUpdateCard)->width('1/2'),
    ];
}
```

## Usage

Just visit your Nova dashboard and you'll get information about your installed Laravel and Nova versions.

## Credits

[Laravel Update Card](https://github.com/beyondcode/nova-laravel-update-card)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
