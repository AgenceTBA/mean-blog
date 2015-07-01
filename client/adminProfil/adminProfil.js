<html>
	<head>
		<meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
	    <title>Accueil</title>
	
	    <!-- Bootstrap -->
	    <link href="css/bootstrap.min.css" rel="stylesheet">
	
	    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	    <!--[if lt IE 9]>
	      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	    <![endif]-->
	    
	    <link rel="stylesheet" href="css/style.css" />
	</head>
	
	
	<body>
		<div class="page-header">
			<a href="accueil.html"><img id="logo_header" src="logo.png" alt="Agence TBA" /></a>
			<ul class="nav nav-pills on_right" role="tablist">
				<li role="presentation"><a href="accueil.html">Accueil</a></li>
				<li role="presentation" class="active"><a href="profil.html">Profil</a></li>
				<li role="presentation"><a href="admin.html">Admin</a></li>
				<li role="presentation"><a href="connexion.html">Déconnexion</a></li>
			</ul>
		</div>
		
		
		<div class="panel panel-default padding profil">
			<form>
				<img src="images/hemach_y.jpeg" class="img_profil" border=0/>
				<span id="imageButton">
						<a class="btn btn-warning btn-sm buttonCenter" border=0 onclick="showInput('image')">Edit</a>
				</span>
				<span id="imageInput">
					<input id="input-1a" type="file" class="file" data-show-preview="false">
				</span>
				<table class="table table-hover">
					<tr>
						<td>Nom :</td>
						<td>Hemachandra</td>
						<td>
							<span id="lastnameButton">
							<a class="btn btn-warning btn-sm" onclick="showInput('lastname')">Edit</a>
							</span>
							<span id="lastnameInput">
								<input type="text" class="form-control" id="exampleInputText" value="Hemachandra">
							</span>
						</td>
					</tr>
					<tr>
						<td>Prénom :</td>
						<td>Théophile</td>
						<td>
							<span id="firstnameButton">
							<a class="btn btn-warning btn-sm" onclick="showInput('firstname')">Edit</a>
							</span>
							<span id="firstnameInput">
								<input type="text" class="form-control" id="exampleInputText" value="Théophile">
							</span>
						</td>
					</tr>
					<tr>
						<td>Mail :</td>
						<td>theodu60raiii@tavu.fr</td>
						<td>
							<span id="emailButton">
							<a class="btn btn-warning btn-sm" onclick="showInput('email')">Edit</a>
							</span>
							<span id="emailInput">
								<input type="text" class="form-control" id="exampleInputText" value="theodu60raiii@tavu.fr">
							</span>
						</td>
					</tr>
					<tr>
						<td colspan="3" align="center">
							<button type="submit" class="btn btn-primary">Valider</button>
						</td>
					</tr>
				</table>
			</form>
		</div>
		
		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	    <!-- Include all compiled plugins (below), or include individual files as needed -->
	    <script src="js/bootstrap.min.js"></script>
	    
	    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet">
		<link href="css/fileinput.min.css" media="all" rel="stylesheet" type="text/css" />
		<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
		<script src="js/fileinput.min.js"></script>
		<!-- bootstrap.js below is only needed if you wish to the feature of viewing details
		     of text file preview via modal dialog -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js" type="text/javascript"></script>
		<!-- optionally if you need translation for your language then include 
		    locale file as mentioned below -->
		<script src="js/fileinput_locale_<lang>.js"></script>
		<script type="text/javascript">
			function showInput(id) {
				document.getElementById(id+'Button').style.display = 'none';
				document.getElementById(id+'Input').style.display = 'block';
			}
		</script>
	</body>
</html>