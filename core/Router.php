<?php

include_once './app/Controllers/ProductsController.php';
include_once './app/Controllers/UsersController.php';
include_once './app/Controllers/SalesController.php';


class Router
{
    protected $routes;

    function load($routes)
    {
        $this->routes = $routes;
    }

    public function direct($uri, $requestType)
    {

        $nuri = explode("/", $uri);
        $uri = $nuri[1];
        if (array_key_exists($uri, $this->routes[$requestType])) {
            return $this->callAction(
                ...explode('@', $this->routes[$requestType][$uri])
            );
        }


        throw new Exception('No route defined for this URI.');
    }

    protected function callAction($controller, $action)
    {
        $controller = new $controller;

        if (!method_exists($controller, $action)) {
            throw new Exception(
                "{$controller} does not respond to the {$action} action."
            );
        }

        return $controller->$action();
    }
}
