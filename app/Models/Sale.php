<?php

class Sale
{
    protected $pdo;

    function __construct($pdo)
    {
        $this->pdo = $pdo;
    }

    function create(array $data)
    {
       /* echo(print_r($data,true));
        exit;*/
        $sql = "
        INSERT INTO sales(
            id_product, id_seller, id_buyer, quantity)
        VALUES(
            :id_product, :id_seller, :id_buyer, :quantity);";
        $st = $this->pdo->getConnection()->prepare($sql);
        $params = array(
            'id_product' => $data['id_product'],
            'id_seller' => $data['id_seller'],
            'id_buyer' => $data['id_buyer'],
            'quantity' => $data['quantity'],
        );
        if ($st->execute($params)) {
            return true;
        }
    }

    function read($id)
    {
        $sql = '
            SELECT id_vendita, id_buyer,id_product , quantity ,id_seller
            FROM sales where id_buyer=\'' . $id . '\'';

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


    function delete($data)
    {
        $sql = "DELETE FROM sales WHERE id_vendita = :id_vendita";

        $st = $this->pdo->getConnection()->prepare($sql);
        $params = array('id_vendita' => $data['id_vendita']);
        if ($st->execute($params)) {
            return true;
        }
    }
}
