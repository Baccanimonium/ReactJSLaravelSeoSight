<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StudioCases extends Model
{
    public function categories()
    {
        return $this->belongsToMany('App\Categories');
    }
    public function testimonials()
    {
        return $this->morphMany('App\Testimonials', 'testimonialsTable');
    }
}
