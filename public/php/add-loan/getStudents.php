<?php
  header('Content-Type: application/json');

  $PROJECT_NAME = "/prestamos";
  $INC_DIR = $_SERVER["DOCUMENT_ROOT"] . $PROJECT_NAME ."/public/php/";
  require_once($INC_DIR.'connection.php');

  $database = new Connection();
  $db = $database->open(); 

  try {
    $sql = "SELECT alumno.* FROM alumno INNER JOIN prestamo ON prestamo.id_alumno = alumno.matricula WHERE prestamo.is_active=1";
    $data = $db->query($sql);
    $activos = $data -> fetchAll();

    $sql = "SELECT * FROM alumno";
    $data = $db->query($sql);
    $todos = $data -> fetchAll();

    $libres = NULL;
    if (sizeof($activos) > 0) {
      $diff = array_diff(array_map('serialize', $todos), array_map('serialize', $activos));
      $libres = array_map('unserialize', $diff);

    } else {
      $libres = $todos;
    }
  } catch(PDOException $e) {
    $todos = false;
  }

  if (is_null($libres)) {
    $response = ['success' => false, 'error' => 'Algo salió mal'];
    echo json_encode($response);
    die;
  }

  $response = ['success' => true, 'students' => array_flatten($libres)];
  echo json_encode($response);
  die;

  function array_flatten($array) { 
    $arr = array();
    foreach ($array as $key => $value) { 
      array_push($arr, $value);
    } 

    return $arr; 
  }
?>
