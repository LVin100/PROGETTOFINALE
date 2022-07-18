<?php

class User
{
    protected $pdo;

    function __construct($pdo)
    {
        $this->pdo = $pdo;
    }
    function read($email, $password)
    {

        $sql = '
            SELECT id, first_name, last_name, email, password
            FROM users
            WHERE email= \'' . $email . '\' AND password= \'' . $password . '\'';

        $st = $this->pdo->openConnection()->prepare($sql);
        $st->execute();
        if ($st->execute()) {
            return  $st->fetch(PDO::FETCH_ASSOC);
        }
    }
    function create(array $data)
    {
        $sql = "
        INSERT INTO users(
            first_name, last_name, email, password)
        VALUES(
            :first_name, :last_name, :email, :password);";
        $st = $this->pdo->getConnection()->prepare($sql);
        $params = array(
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'email' => $data['email'],
            'password' => $data['password']
        );
        if ($st->execute($params)) {
            return true;
        }
    }
}
