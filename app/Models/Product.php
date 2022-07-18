<?php

class Product
{
    protected $pdo;

    function __construct($pdo)
    {
        $this->pdo = $pdo;
    }

    function read()
    {
        $sql = "
            SELECT id, name, kg, id_seller, cost, quantity
            FROM products; ";

        $st = $this->pdo->openConnection()->prepare($sql);
        $st->execute();
        if ($st->execute()) {
            $rows = array();
            while (($row = $st->fetch(PDO::FETCH_ASSOC)) !== false) {
                $rows[] = $row;
            }
            return $rows;
        } else {
            return false;
        }
    }

    function readOne($id)
    {
        $sql = "
            SELECT id, name, kg, cost, id_seller , quantity
            FROM products
            WHERE id= " . $id;
        $st = $this->pdo->openConnection()->prepare($sql);
        $st->execute();
        if ($st->execute()) {
            return  $st->fetch(PDO::FETCH_ASSOC);
        }
    }

    function create(array $data)
    {
        $sql = "
        INSERT INTO products (
            name, kg, cost, id_seller, quantity)
            VALUES(
                :name, :kg, :cost, :id_seller, :quantity);";
        $st = $this->pdo->getConnection()->prepare($sql);
        $params = array(
            'name' => $data['name'],
            'kg' => $data['kg'],
            'cost' => $data['cost'],
            'id_seller' => $data['id_seller'],
            'quantity' => $data['quantity']
        );
        if ($st->execute($params)) {
            return true;
        }
    }

    function update(array $data)
    {
        $sql = "
        UPDATE products
        SET name= :name, kg= :kg, cost= :cost, quantity= :quantity
        WHERE id = :id;";

        $st = $this->pdo->getConnection()->prepare($sql);
        $params = array(
            'id' => $data['id'],
            'name' => $data['name'],
            'kg' => $data['kg'],
            'cost' => $data['cost'],
            'quantity' => $data['quantity']
        );
        if ($st->execute($params)) {
            return true;
        }
    }


    function UsersProducts($id_seller)
    {
        $sql = '
            SELECT id, name,kg , cost ,quantity, id_seller
            FROM products where id_seller=\'' . $id_seller . '\'';

        $st = $this->pdo->openConnection()->prepare($sql);
        $st->execute();
        if ($st->execute()) {
            $rows = array();
            while (($row = $st->fetch(PDO::FETCH_ASSOC)) !== false) {
                $rows[] = $row;
            }
            return $rows;
        } else {
            return false;
        }
    }
}
