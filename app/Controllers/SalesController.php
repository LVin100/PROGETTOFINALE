<?php

class SalesController
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

        $sales = new Sale($db);
        $recordset = $sales->read($data['id_buyer']);

        if ($recordset !== false) {
            //array_push($recordset, http_response_code(200));
            echo json_encode($recordset);
            return http_response_code(200);
        } else {
            http_response_code(404);
            echo json_encode(array("message" => "No products found."));
        }
    }

    public function create()
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: PUT");
        header("Access-Control-Max-Age: 3600");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

        include_once('core/bootstrap.php');

        $request = new APIRequest;
        $request->decodeHttpRequest();
        $data = $request->getBody();

        /*        echo(print_r($data,true));
        exit;*/

        $db = new db();
        $db->openConnection();
        $sale = new Sale($db);

        $isOk = true;
        foreach ($data as $ordine) {

            if (
                empty($ordine['id_buyer']) ||
                empty($ordine['id_seller']) ||
                empty($ordine['id_product']) ||
                empty($ordine['quantity'])
            ) {
                http_response_code(400);
                echo json_encode(array("message" => "Missing data: " . print_r($ordine, true)));
                exit;
            }

            if (! $sale->create($ordine)) {
                $isOk = false;
                break;
            }
        }

        if (false === $isOk) {
            http_response_code(503);
            echo json_encode(array("message" => "Cannot add sale"));
            exit;
        }

        http_response_code(201);
        echo json_encode(array("message" => "Sale added successfully"));
        exit;
    }

    function delete()
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: DELETE");
        header("Access-Control-Max-Age: 3600");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


        include_once 'core/bootstrap.php';

        $request = new APIRequest;
        $request->decodeHttpRequest();
        $data = $request->getBody();

        $db = new db();
        $db->openConnection();

        $sale = new Sale($db);

        if ($sale->delete($data)) {
            http_response_code(200);
            echo json_encode(array("message" => "order deleted"));
        } else {
            http_response_code(503);
            echo json_encode(array("message" => "Cannot delete the order"));
        }
    }
}
