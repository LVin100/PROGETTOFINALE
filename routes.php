<?php

return $routes = [
    'GET' => [
        'products'=>'ProductsController@read',
        'product'=>"ProductsController@readOne",
        'user'=>'UsersController@read',
    ],
    'POST' => [
        'product'=>'ProductsController@create',
        'user'=>'UsersController@read',
        'registration'=>'UsersController@create',
        'sale'=>"SalesController@read",
        'usersProducts'=>'ProductsController@readUsersProducts'
    ],
    'PUT' => [
        'updateProduct'=>'ProductsController@update',
        'sale'=>'SalesController@create',
    ],
    'DELETE' => [
        'sale'=>"SalesController@delete", 
    ]
];