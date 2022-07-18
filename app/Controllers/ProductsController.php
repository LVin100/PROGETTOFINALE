<?php

class ProductsController
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

        $db = new db();
        $db->openConnection();

        $products = new Product($db);
        $recordset = $products->read();

        if ($recordset !== false) {
            http_response_code(200);
            echo json_encode($recordset);
        } else {
            http_response_code(404);
            echo json_encode(array("message" => "No products found."));
        }
    }

    public function readOne()
    {

        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: GET");
        header("Access-Control-Max-Age: 3600");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

        include_once('core/bootstrap.php');

        $id = $_GET["id"];

        $request = new APIRequest;
        $request->decodeHttpRequest();

        $db = new db();
        $db->openConnection();

        $products = new Product($db);

        $recordset = $products->readOne($id);

        if ($recordset !== false) {
            http_response_code(201);
            echo json_encode($recordset);
        } else {
            http_response_code(404);
            echo json_encode(array("message" => "No products found"));
        }
    }


    public function create()
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

        $product = new Product($db);

        if (
            !empty($data['name']) &&
            !empty($data['kg']) &&
            !empty($data['quantity']) &&
            !empty($data['cost']) &&
            !empty($data['id_seller'])
        ) {
            if ($product->create($data)) {
                http_response_code(201);
                echo json_encode(array("message" => "Product added succesfully."));
            } else {
                http_response_code(503);
                echo json_encode(array("message" => "Cannot add product"));
            }
        } else {
            http_response_code(400);
            echo json_encode(array("message" => "Missing data"));
        }
    }

    function update()
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: PUT");
        header("Access-Control-Max-Age: 3600");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

        include_once 'core/bootstrap.php';

        $request = new APIRequest;
        $request->decodeHttpRequest();
        $data = $request->getBody();

        $db = new db();
        $db->openConnection();

        $product = new Product($db);

        if (
            !empty($data['name']) &&
            !empty($data['kg']) &&
            !empty($data['quantity']) &&
            !empty($data['cost'])
        ) {
            if ($product->update($data)) {
                http_response_code(200);
                echo json_encode(array("message" => "Product updated."));
            } else {
                http_response_code(503);
                echo json_encode(array("message" => "Cannot update product."));
            }
        } else {
            http_response_code(400);
            echo json_encode(array("message" => "Missing data."));
        }
    }



    public function readUsersProducts()
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Max-Age: 3600");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

        include_once('core/bootstrap.php');

        $request = new APIRequest;
        $request->decodeHttpRequest();
        $data = $request->getBody();


        $db = new db();
        $db->openConnection();

        $products = new Product($db);
        $recordset = $products->usersProducts($data['id_seller']);

        if ($recordset !== false) {

            echo json_encode($recordset);
            return http_response_code(200);
        } else {
            http_response_code(404);
            echo json_encode(array("message" => "No products found."));
        }
    }
}
