<?php
/**
 * Created by PhpStorm.
 * User: Leiviton
 * Date: 25/08/2017
 * Time: 12:35
 */

namespace App\Observers;

use App\Restaurant;

class RestaurantObserver
{
    use UploadObserverTrait;
    protected $field = 'photo';
    protected $path = 'restaurante/';
    public function creating(Restaurant $model)
    {
        $this->sendFile($model);
    }
    public function deleting(Restaurant $model)
    {
        $this->removeFile($model);
    }
    public function updating(Restaurant $model)
    {
        $this->updateFile($model);
    }
}