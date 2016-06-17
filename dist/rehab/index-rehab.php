<!DOCTYPE html>
<html lang="en">
    <?php include '../components/head.php'; ?>
    <body>
        <header class="rehab">
            <?php include '../rehab-components/header.php'; ?>
        </header>

        <?php include '../rehab-components/slider.php'; ?>
        <?php include '../rehab-components/contact-line.php'; ?>
        <?php include '../rehab-components/info-line.php'; ?>
        
        <main>
        <section id="home" class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-9">
                    <?php include '../rehab-components/result.php'; ?>    
                    <?php include '../rehab-components/history.php'; ?>    
                    <?php include '../rehab-components/how-it-works.php'; ?>    
                    <?php include '../rehab-components/course.php'; ?>    
                    </div>
                    <div class="col-md-3">
                    <?php include '../rehab-components/sidebar-reviews.php'; ?>            
                    </div>
                </div>
            </div>        
        </section> 
        </main>

        <?php include '../components/footer.php'; ?>
        <?php include '../components/popup-form.php'; ?>
        <!--[if lt IE 9]>
        <script src="libs/html5shiv/es5-shim.min.js"></script>
        <script src="libs/html5shiv/html5shiv.min.js"></script>
        <script src="libs/html5shiv/html5shiv-printshiv.min.js"></script>
        <script src="libs/respond/respond.min.js"></script>
        <![endif]-->

        <!-- Load Scripts Start -->
        <script src="../js/jquery-2.2.0.min.js"></script>
        <script src="../js/plagin.min.js"></script>
        <script src="js/common.min.js"></script>
        <!-- Load Scripts End -->
    </body>
</html>