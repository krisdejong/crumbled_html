<?php
    $title = "Home";
    $body_class = "home";
    include('includes/header.php');
?>
<header class="header">
    
        <figure class="header--background" style="background-image: url('http://www.balticblues-events.com/sites/default/files/images/ideas/photos/32-Live-Cooking1.jpg');"></figure>

        <div class="header--title">
            <div class="l-container is-slim">
                <div class="logo-large">
                    <a href="/raw/index.php"><svg><use xlink:href="#logo" /></svg></a>
                </div>
                <h1>WHOLE COOKBOOKS & SINGLE RECIPES</h1>
            </div>
        </div>
        
        <div class="header--content">
            <div class="l-single">
                <p class="is-lead">Met Crumble raadpleeg, verzamel en koop je hele kookboeken en losse recepten op een eenvoudige manier.</p>

                <a class="button is-large">Aanmelden voor crumbled</a>

            </div>
        </div>
    </div>
</header>

<div class="l-wrapper has-tint">
    <div class="l-container">
        <h2 class="text-center">Zo werkt Crumbled</h2>
        <ol class="steps">
            <li>
                <figure class="steps--image" style="background-image: url('../images/cover4.png');"></figure> 
                <p>Zoek hele kookboeken of losse recepten op crumbled.nl</p>
            </li>
            <li>
                <figure class="steps--image" style="background-image: url('../images/cover4.png');"></figure>  
                <p>Stel een menu of verzameling van jouw favoriete recepten samen in jouw persoonlijke omgeving.</p>
            </li>
            <li>
                <figure class="steps--image" style="background-image: url('../images/cover4.png');"></figure> 
                <p>Download je recept of kookboek naar keuze in hoge resolutie zodra je het wil gaan koken.</p>
            </li>
        </ol>
    </div>
</div>
<nav class="navigation-topbar-wrapper">    
    <div class="navigation-topbar">

        <div class="logo">
            <a href="/raw/index.php"><svg><use xlink:href="#logo-small" /></svg></a>
        </div>
        <div id="search" class="search">
            <form>
                <input type="search" placeholder="Zoek op boektitel, recept, gerecht, ingrediënt, seizoen en meer..." />
            </form>
        </div>
        <ul class="navigation-topbar--menu-list">
            <li>
                <a id="toggle-navigation-mobile">
                    <div class="toggle">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                    <div class="toggle--message">Menu</div>
                </a>
            </li>
            <li><a class="button" href="#">Aanmelden</a></li>
            <li><a class="button" href="#">Inloggen</a></li>
        </ul>
    </div>

</nav>

<div class="l-container">
    <ul class="l-grid">
        <li class="category-image is-small">
            <a href="category.php">
                <figure class="" style="background-image: url('http://www.balticblues-events.com/sites/default/files/images/ideas/photos/32-Live-Cooking1.jpg');"></figure>
                <h2>BBQ</h2>
            </a>
        </li>
        <li class="category-image is-small">
            <a href="category.php">
                <figure class="" style="background-image: url('http://www.balticblues-events.com/sites/default/files/images/ideas/photos/32-Live-Cooking1.jpg');"></figure>
                <h2>Moestuinen</h2>
            </a>
        </li>
        <li class="category-image is-small">
            <a href="category.php">
                <figure class="" style="background-image: url('http://www.balticblues-events.com/sites/default/files/images/ideas/photos/32-Live-Cooking1.jpg');"></figure>
                <h2>Meatless monday</h2>
            </a>
        </li>
        <li class="category-image is-small">
            <a href="category.php">
                <figure class="" style="background-image: url('http://www.balticblues-events.com/sites/default/files/images/ideas/photos/32-Live-Cooking1.jpg');"></figure>
                <h2>Fout zout</h2>
            </a>
        </li>
    </ul>   

    <ul class="l-grid-huge">
        <li>
            <div class="panel">
                <figure class="panel--image">
                    <img src="../images/cover4.png" />
                </figure> 
                <div class="panel--content">
                    <h2 class="panel--title">TITEL RECEPT</h2>
                    <p class="has-no-spacing">Uit <a href="">Naam boek</a></p>
                </div>
                <ul class="panel--actions">
                    <li><i class="panel--actions--icon"></i><a href="">12</a></li>
                    <li><i class="panel--actions--icon"></i><a href="">12</a></li>
                    <li><i class="panel--actions--icon"></i><a href="">12</a></li>
                </ul>

                <div class="panel--content">
                    <p class="has-no-spacing">Hier evt. een comment door een gebruiker over dit boek.</p>
                </div>
            </div>
        </li>
    </ul>      
</div>

<?php include('includes/footer.php'); ?>

 
 
 
 


