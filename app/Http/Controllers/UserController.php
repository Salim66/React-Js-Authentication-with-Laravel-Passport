<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * @access public
     * @route /api/user
     * @method GET
     */
    public function user(){
        return Auth::user();
    }
}
