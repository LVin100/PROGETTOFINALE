<?php

class APIRequest
{
    protected
        $method,
        $path,
        $body;

    function getMethod()
    {
        return $this->method;
    }

    function getPath()
    {
        return $this->path;
    }

    function getBody()
    {
        return $this->body;
    }

    function decodeHttpRequest()
    {
        $this->method = $_SERVER['REQUEST_METHOD'];
        $uri = explode('?', $_SERVER['REQUEST_URI']);
        $this->path = trim($uri[0], '/');
        $this->body = json_decode(file_get_contents('php://input'), true);
    }
}
