<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ForgotController;
use App\Http\Controllers\ResetController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Login Route
Route::post('/login', [AuthController::class, 'login']);
// Register Route
Route::post('/register', [AuthController::class, 'register']);
// Forgot Password Route
Route::post('/forget-password', [ForgotController::class, 'forgetPassword']);
// Reset Password Route
Route::post('/reset-password', [ResetController::class, 'resetPassword']);
// Current Authenticate User Route
Route::get('/user', [UserController::class, 'user'])->middleware('auth:api');
