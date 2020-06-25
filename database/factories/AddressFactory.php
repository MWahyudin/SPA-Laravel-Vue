<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Address;
use App\Customer;
use App\Model;
use Faker\Generator as Faker;

$factory->define(Address::class, function (Faker $faker) {
    return [
        'customer_id' => function(){
          return Customer::all()->random(); 
        },
        'city' => $faker->city,
        'country' => $faker->country,
        'created_at' => now(),
        
    ];
});