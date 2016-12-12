<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// API Group Routes
Route::group(['prefix' => 'api/v1'], function () {

    /*
     * Guest area
     */



    /*
     * Authenticated area
     */

    Route::group(['middleware' => 'auth:api'], function () {

        Route::get('user', function (Request $request) {
            return $request->user();
        });
    });

});
