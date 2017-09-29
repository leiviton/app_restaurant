<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\Restaurant;
use App\Observers\RestaurantObserver;
use App\RestaurantPhoto;
use App\Observers\RestaurantPhotoObserver;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Restaurant::observe(RestaurantObserver::class);
        RestaurantPhoto::observe(RestaurantPhotoObserver::class);
    }
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
