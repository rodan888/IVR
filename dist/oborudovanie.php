<!DOCTYPE html>
<html lang="en">
<?php include 'components/head.php'; ?>
<body>
    <header>
        <?php include 'rehab-components/header.php'; ?>
    </header>
    <?php include 'rehab-components/top-banner.php'; ?> 
    <?php include 'rehab-components/breadcrumb.php'; ?> 

    <main>
        <section>
            <div class="container">
                <div class="row">
                    <?php include 'rehab-components/kak-rabotaet-cont.php'; ?>
                    <?php include 'rehab-components/side-nav.php'; ?>   
                </div>                
            </div>            
        </section>
        <section class="mb6">
            <div class="container">
                <div class="row">
                    <?php include 'rehab-components/equipment-advan.php' ?>           
                    <?php include 'rehab-components/oborud-list.php' ?>           
                   
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