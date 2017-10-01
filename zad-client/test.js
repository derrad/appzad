console.log("Test prenosa");
// "../node_modules/bootstrap/dist/css/bootstrap.min.css" ,


<nav class="navbar navbar-m2p sidebar" role="navigation">
<div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">
            OMLADINSKA ZADRUGA
        </a>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
        <ul class="nav navbar-nav">
            <!-- Dashboard -->
            <li class="active open">
                <!-- <li *ngIf="authService.loggedIn()" [routerLinkActive]="['active']" 
                [routerLinkActiveOptions] = "{exact:true}"><a [routerLink]="['/dashboard']">Dashboard</a></li> -->

               <a [routerLink]="['/dashboard']">
                  <span class="pull-right hidden-xs showopacity glyphicon material-icons">av_timer</span> Dashboard
              </a>

            </li>
            <!-- Banner -->
            <li class="">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <span class="menu-icon pull-right hidden-xs showopacity glyphicon material-icons">burst_mode</span>
                    Banners <span class="caret"></span>
                </a>
                <ul class="dropdown-menu forAnimate" role="menu">
                    <li><a href="#"><i class="material-icons">add</i> Add</a></li>
                    <li><a href="#"><i class="material-icons">sort</i> List</a></li>
                </ul>
            </li>
            <li class="separator">Content</li>
            <!-- Page -->
            <li class="">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <span class="menu-icon pull-right hidden-xs showopacity glyphicon material-icons">description</span>
                    Pages <span class="caret"></span>
                </a>
                <ul class="dropdown-menu forAnimate" role="menu">
                    <li><a href="#"><i class="material-icons">add</i> Add</a></li>
                    <li><a href="#"><i class="material-icons">sort</i> List</a></li>
                </ul>
            </li>
            <!-- Blog -->
            <li class="">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <span class="menu-icon pull-right hidden-xs showopacity glyphicon material-icons">chat_bubble_outline</span>
                    Blog <span class="caret"></span>
                </a>
                <ul class="dropdown-menu forAnimate" role="menu">
                    <li><a href="#"><i class="material-icons">add</i> Add</a></li>
                    <li><a href="#"><i class="material-icons">sort</i> List</a></li>
                </ul>
            </li>
            <!-- Tags -->
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <span style="font-size:16px;" class="pull-right hidden-xs showopacity glyphicon material-icons">label</span>
                    Tags <span class="caret"></span>
                </a>
                <ul class="dropdown-menu forAnimate" role="menu">
                    <li><a href="#"> <i class="material-icons">add</i> Add</a></li>
                    <li><a href="#"> <i class="material-icons">sort</i> List</a></li>
                </ul>
            </li>
            <li class="separator">System</li>
            <!-- Users -->
            <li class="#">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <span class="menu-icon pull-right hidden-xs showopacity glyphicon material-icons">group</span>
                    Users <span class="caret"></span>
                </a>
                <ul class="dropdown-menu forAnimate" role="menu">
                    <li><a href="#"><i class="material-icons">add</i> Add</a></li>
                    <li><a href="#"><i class="material-icons">sort</i> List</a></li>
                </ul>
            </li>
            <!-- Exit -->
            <li>
                <a href="#">
                    <span class="menu-icon pull-right hidden-xs showopacity glyphicon material-icons">exit_to_app</span> Exit
                </a>
            </li>
        </ul>
    </div>
</div>
</nav>
