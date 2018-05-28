<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MenuItems extends Model
{
    protected $fillable= ['name','path','parentId'];
}
