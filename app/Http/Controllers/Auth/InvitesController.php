<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Invite;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Mail\SendEmailInvitation;
use Illuminate\Support\Facades\Mail;

class InvitesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function store(Request $request) {
        $data = $request->except('_token');
        //валидируем поле email: поле обязательное, с проверкой синтаксиса email,
        //к тому же уникальное по таблицам invites и users (столбец email)
        $this->validator($data)->validate();
        //создадим новый инвайт и заполним поля email и id отправителя
        $user =Auth::user();
        $data['parent_user_id'] = $user->id;
        $inviteData=$this->create($data);
        $postData = [
            'email' => $data['email'],
            'code' => $inviteData['code'],
            'name'=> $user['name'],
            'message'=>$data['message']
        ];
        $this->sendInvitation($postData);
        return response()->json('Successfully sending new invitation');
    }
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'email' => 'required|email|unique:invites,email|unique:users,email'
        ]);
    }
    protected function create(array $data)
    {
        return Invite::create([
            'email' => $data['email'],
            'parent_user_id' => $data['parent_user_id']
        ]);
    }
    protected function sendInvitation($data)
    {
        Mail::to($data['email'])->send(new SendEmailInvitation($data));
        return true;
    }


}
