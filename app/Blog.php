<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    public function testimonials()
    {
        return $this->morphMany('App\Testimonials', 'testimonialsTable');
    }
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
