<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    public function studioCases()
    {
        return $this->belongsToMany('App\StudioCases');
    }
}
