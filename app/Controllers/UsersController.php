<?php

class UsersController
{

    public function read()
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: GET");
        header("Access-Control-Max-Age: 3600");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

        include_once('core/bootstrap.php');

        $request = new APIRequest;
        $request->decodeHttpRequest();
        $data = $request->getBody();


        $db = new db();
        $db->openConnection();

        $user = new User($db);
        $recordset = $user->read($data["email"], $data["password"]);

        if ($recordset !== false) {
            array_push($recordset, http_response_code(200));
            echo json_encode($recordset);
            return http_response_code(200);
        } else {
            http_response_code(404);
            echo json_encode(array("message" => "No products found."));
        }
    }


    function create()
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Max-Age: 3600");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

        include_once 'core/bootstrap.php';

        $request = new APIRequest;
        $request->decodeHttpRequest();
        $data = $request->getBody();

        $db = new db();
        $db->openConnection();
        $product = new User($db);

        if (
            !empty($data['first_name']) &&
            !empty($data['last_name']) &&
            !empty($data['email']) &&
            !empty($data['password'])
        ) {
            if ($product->create($data)) {
                http_response_code(201);
                echo json_encode(array("message" => "User added successfully"));
            } else {
                http_response_code(503);
                echo json_encode(array("message" => "Cannot add user"));
            }
        } else {
            http_response_code(400);
            echo json_encode(array("message" => "Missing data"));
        }
    }
}
