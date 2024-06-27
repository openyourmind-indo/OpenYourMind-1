<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'phone_number' => 'required|string|max:15',
                'birth_date' => 'required|date',
                'password' => 'required|string|min:8|confirmed',
            ]);
    
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }
            
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'phone_number' => $request->phone_number,
                'birth_date' => $request->birth_date,
                'password' => Hash::make($request->password),
            ]); 

            $token = JWTAuth::fromUser($user);

            return response()->json(['message' => 'User registered successfully', compact('token')], 201);
        } catch (\Exception $e) {
            \Log::error('Registration Error: '.$e->getMessage());
            return response()->json(['error' => 'Something went wrong. Please try again.'], 500);
        }
    }

    public function login(Request $request)
    {
        try {
            Log::info('Login attempt', ['email' => $request->email]);

            $request->validate([
                'email' => 'required|email',
                'password' => 'required'
            ]);

            $user = User::where('email', $request->email)->first();

            if ($user) {
                Log::info('User found', ['email' => $request->email]);

                if (Hash::check($request->password, $user->password)) {
                    Log::info('Password check passed', ['email' => $request->email]);

                    $token = JWTAuth::fromUser($user);
                    Log::info('Token created', ['token' => $token]);

                    return response()->json(['token' => $token], 200);
                } else {
                    Log::warning('Password check failed', ['email' => $request->email]);
                    return response()->json(['error' => 'Unauthorized'], 401);
                }
            } else {
                Log::warning('User not found', ['email' => $request->email]);
                return response()->json(['error' => 'Unauthorized'], 401);
            }
        } catch (\Exception $e) {
            Log::error('Login error', [
                'email' => $request->email,
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            return response()->json(['error' => 'Server error'], 500);
        }
    }

    public function logout(Request $request)
    {
        try {
            Log::info('Logout attempt', ['user_id' => $request->user()->id]);

            JWTAuth::invalidate(JWTAuth::getToken());

            Log::info('User logged out', ['user_id' => $request->user()->id]);
            return response()->json(['message' => 'Logged out successfully'], 200);
        } catch (\Exception $e) {
            Log::error('Logout error', [
                'user_id' => $request->user()->id,
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            return response()->json(['error' => 'Server error'], 500);
        }
    }

    public function getUser(Request $request){
    try {
        // Assuming the user is authenticated and you are using JWT
        $user = auth()->user();
        return response()->json(['user' => $user]);
    } catch (\Exception $e) {
        return response()->json(['message' => 'User not found'], 404);
    }
}

   }
