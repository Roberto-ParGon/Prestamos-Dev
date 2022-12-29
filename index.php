<!DOCTYPE html>

<?php
session_start();
include_once('./public/php/connection.php');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $database = new Connection();
    $db = $database->open();
    
    try{
        
        $username = $_POST["username"];
        $contra = $_POST["contra"];
        
        $_GRABAR_SQL = "SELECT id, nombre, apellido, nickname, is_admin FROM usuario WHERE nickname = '$username' AND contrasena = '$contra'";

        $data = $db->query( $_GRABAR_SQL);  
        $hi = $data -> fetchAll();

        if(empty($username) || empty($contra)) {
            $_SESSION['message'] = "No dejes campos vacios";
        }else if($hi){
            $_SESSION['id'] = $hi[0]['id'];
            $_SESSION['nombre'] = $hi[0]['nombre'];
            $_SESSION['apellido'] = $hi[0]['apellido'];
            $_SESSION['nickname'] = $hi[0]['nickname'];
            $_SESSION['is_admin'] = $hi[0]['is_admin'];

            header("location: home.php");
        }else{
            $_SESSION['message'] = "Contraseña y/o usuario incorrectos";
        }

    }catch(PDOException $e){
        $_SESSION['message'] = "Algo salió mal al conectarse con la base de datos";
    }

    $database->close();
}

?>

<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Préstamos de dispositivos UV</title>
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">

    
    <link rel="stylesheet" type="text/css" href="public/css/reset.css">
    <link rel="stylesheet" type="text/css" href="public/css/lista-prestamos/lista-prestamos.css">
    <link rel="stylesheet" type="text/css" href="public/css/mod-dispositivos/mod-dispositivos.css">

    <style type="text/css">
    </style>
</head>

<body>

    <section class="hero is-fullheight">
      <div class="hero-body has-text-centered">
        <div class="login">
          <div>
              <img id='logo' src="./images/uv.png">
          </div>
          <form method="POST" action="">
            <div class="field">
              <div class="control">
                <input name="username" class="input is-medium is-rounded" type="text" placeholder="Introduzca su usuario" autocomplete="username" required />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input name="contra" class="input is-medium is-rounded" type="password" placeholder="Introduzca su contraseña" autocomplete="current-password" required />
              </div>
            </div>
            <br />
            <button class="button is-block is-fullwidth is-primary is-medium is-rounded" type="submit">
              Login
            </button>
          </form>
          <br>
        </div>
      </div>
    </section>

</div>
  <!-- Modal -->
  <?php 
      if(isset($_SESSION['message'])){
          ?>
            <!-- Intento de modal -->
            <div class="modal is-active">
              <div class="modal-background"></div>
              <div class="modal-content">
                <header class="modal-card-head">
                  <p class="modal-card-title">Alerta</p>
                  <button class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                  <?php echo $_SESSION['message']; ?>
                </section>
                <footer class="modal-card-foot">
                  <?php 
                    if(isset($_SESSION['success'])){
                      ?>
                        <button class="button is-success">Aceptar</button>
                      <?php
                      unset($_SESSION['success']);
                    } else {
                      ?>
                        <button class="button is-danger">Cerrar</button>
                      <?php
                    }
                  ?>
                </footer>
              </div>
              <button class="modal-close is-large" aria-label="close"></button>
            </div>
          <?php

          unset($_SESSION['message']);
      }
  ?>

  <!-- Modal Script -->
  <script type="text/javascript">
    document.addEventListener('DOMContentLoaded', () => {
      // Functions to open and close a modal
      function openModal($el) {
        $el.classList.add('is-active');
      }

      function closeModal($el) {
        $el.classList.remove('is-active');
      }

      function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
          closeModal($modal);
        });
      }

      // Add a click event on buttons to open a specific modal
      (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);

        $trigger.addEventListener('click', () => {
          openModal($target);
        });
      });

      // Add a click event on various child elements to close the parent modal
      (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', () => {
          closeModal($target);
        });
      });

      // Add a keyboard event to close all modals
      document.addEventListener('keydown', (event) => {
        const e = event || window.event;

        if (e.keyCode === 27) { // Escape key
          closeAllModals();
        }
      });
    });
  </script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</body>
</html>
