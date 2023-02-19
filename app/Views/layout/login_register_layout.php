<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <?php if($_SERVER['REQUEST_URI'] == '/' || $_SERVER['REQUEST_URI'] == '/studentLogin'):?>
         <title>Login - LMS</title>
      <?php else:?>
         <title>Register - LMS</title>
      <?php endif;?>
      <link rel="icon" type="image/png" href="<?= base_url('img/bwc.png') ?>">
      <link href="<?= base_url('css/styles.css')?>" rel="stylesheet" />
      <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
      <link href="<?= base_url('css/login_register_layout.css')?>" rel="stylesheet" />
   </head>
   <body>

      <!-- MAIN CONTENT -->
      <section class="content">
         <?= $this->renderSection("content"); ?>
      </section>
      <!-- /.MAIN CONTENT -->

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
      <script src="js/scripts.js"></script>
   </body>
</html>
