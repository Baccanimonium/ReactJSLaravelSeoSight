<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
use App\User;
use App\Invite;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Carbon\Carbon;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('registered');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255|unique:users',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            'clients_company_id' => 'required',
            'avatar' => 'required|string',
            'code' => 'required|string',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'clients_company_id' => $data['clients_company_id'],
            'avatar' => $data['avatar'],
            'invite_id' => $data['invite_id'],
        ]);
    }
    public function register(Request $request)
    {
        $data = $request->except('_token');
        $this->validator($data)->validate();
        $code = $request->only('code');
        $invite = Invite::getInviteByCode($code);
        if (!$invite) {
            return  abort(403,'Your register token has been already use');
        }
        $data['invite_id'] = $invite->id;
        event(new Registered($user = $this->create($data)));
        $invite->claimed = Carbon::now();
        $invite->child_user_id = $user->id;
        $invite->save();
        $this->guard()->login($user);
        return $this->registered($request, $user)
            ?: redirect($this->redirectPath());

    }

    protected function registered(Request $request)
    {
        $currentUser = Auth::user();
        return response()->json($currentUser);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */

}
