<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ClientsCompany extends Model
{
    protected $table = 'clients_companies';
    public function users()
    {
        return $this->hasMany('App\User');
    }
}
