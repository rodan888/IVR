<!DOCTYPE html>
<html lang="en">
    <?php include 'components/head.php';  
    $base_url = 'http://dev.wolff.jaya-test.com/ivr/';
     ?>

    <body>    
        <header>
            <?php include 'components/header.php'; ?>
        </header>

        <?php include 'components/slider.php'; ?>
        <?php include 'components/contact-line.php'; ?>
        <?php include 'components/method-home.php'; ?>
        
        <main>
        <section id="home" class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-9">
                    <?php include 'components/backbone.php'; ?>    
                    <?php include 'components/special-offer.php'; ?>    
                    <?php include 'components/news.php'; ?>    
                    </div>
                    <div class="col-md-3">
                    <?php include 'components/sidebar-reviews.php'; ?>            
                    </div>
                </div>
            </div>        
        </section> 
        </main>

        <?php include 'components/footer.php'; ?>
        <?php include 'components/popup-form.php'; ?>
        <!--[if lt IE 9]>
        <script src="libs/html5shiv/es5-shim.min.js"></script>
        <script src="libs/html5shiv/html5shiv.min.js"></script>
        <script src="libs/html5shiv/html5shiv-printshiv.min.js"></script>
        <script src="libs/respond/respond.min.js"></script>
        <![endif]-->

        <!-- Load Scripts Start -->
        <script src="js/jquery-2.2.0.min.js"></script>
        <script src="js/plagin.min.js"></script>
        <script src="js/common.min.js"></script>
        <!-- Load Scripts End -->
    </body>
</html>