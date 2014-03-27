//Author: Thileepan Sivanandham
//Email: sktgthill@gmail.com

function loadMainPage()
{
	var html = '';
	html += '<div class="row"><div class="col-xs-12"><p class="lead redColor">Welcome to TEDI INDIA!</p><p>TediIndia.com is the global innovation company that never stops inventing because we are passionate about making progress possible.</p></div></div>';
	html += '<div class="row">';
		html += '<div class="col-xs-6 col-md-6" align="center">';			
			//html += '<div class="square-box" onclick="loadHomePage();"><div class="square-content"><div><span class="glyphicon glyphicon-home"></span></div></div></div><BR>';
			//html += '<div class="square-box" onclick="loadProductListPage();"><div class="square-content"><div><span class="glyphicon glyphicon-shopping-cart"></span></div></div></div><BR>';
			html += '<button type="button" class="btn btn-danger btn-lg" onclick="loadHomePage();"><span class="glyphicon glyphicon-home"></span></button><BR><BR>';
			html += '<button type="button" class="btn btn-danger btn-lg" onclick="loadProductListPage();"><span class="glyphicon glyphicon-shopping-cart"></span></button>';
		html += '</div>';
		html += '<div class="col-xs-6 col-md-6" align="center">';			
			//html += '<div class="square-box" onclick="loadAboutPage();"><div class="square-content"><div><span class="glyphicon glyphicon-info-sign"></span></div></div></div><BR>';
			//html += '<div class="square-box" onclick="loadContactPage();"><div class="square-content"><div><button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-earphone"></span></button></div></div></div><BR>';
			html += '<button type="button" class="btn btn-danger btn-lg" onclick="loadAboutPage();"><span class="glyphicon glyphicon-info-sign"></span></button><BR><BR>';
			html += '<button type="button" class="btn btn-danger btn-lg" onclick="loadContactPage();"><span class="glyphicon glyphicon-earphone"></span></button>';
		html += '</div>';
	html += '</div><BR>';
/*
	html += '<div class="row">';
		html += '<div class="col-xs-6 col-md-6" align="center">';
			html += '<button type="button" class="btn btn-lg btn-danger" onclick="loadProductListPage();">&nbsp;Products&nbsp;</button>';
		html += '</div>';
		html += '<div class="col-xs-6 col-md-6" align="center">';
			html += '<button type="button" class="btn btn-lg btn-danger" onclick="loadContactPage();">Contact Us</button>';
		html += '</div>';
	html += '</div>';
*/

	document.getElementById('backButton').style.display = 'none';
	document.getElementById('hiddenCurrentPageID').value = 0;
	document.getElementById('pageContent').innerHTML = html;
}

function goBack()
{
	var productID = -1;
	var currentPage = document.getElementById('hiddenCurrentPageID').value;
	if(currentPage == 1 || currentPage == 2 || currentPage == 3 || currentPage == 4 || currentPage == 5) {
		loadMainPage();
	} else if(currentPage == 6) {
		loadProductListPage();
	}
}

function loadHomePage()
{
	var html = '';
	html += '<div class="row"><div class="col-xs-12"><p class="lead redColor">Welcome to TEDI INDIA!</p></div></div>';
	html += '<p>TediIndia.com is the global innovation company that never stops inventing because we are passionate about making progress possible.<BR>Our Company is the global innovation company that never stops inventing because we are passionate about making progress possible.<BR><BR>Our people capture the spark of new ideas and transform them into thousands of ingenious products and practical applications that help make people\'s lives better.</p></div></div>';

	document.getElementById('backButton').style.display = '';
	document.getElementById('hiddenCurrentPageID').value = 1;
	document.getElementById('pageContent').innerHTML = html;
}

function loadAboutPage()
{
	var html = '';
	html += '<div class="row"><div class="col-xs-12"><p class="lead redColor">About TEDI INDIA!</p></div></div>';
	html += '<b>PROFILE</b><BR><BR>';
	html += '2009 - Ventured for Trading Business with Dealers of 3M Retro Reflective Tapes and Distributor of Speed Governors Products<BR>';
	html += '2012 - Started Distribution of Vehicle Conspicuity(Traffic safety system Division), in the name of "Shri Sabareesh Enterprises" in 2012<BR>';
	html += '2013 - Started Manufacture of IND Number Plates and Embossing & Hot Stamping Machines<BR>';
	html += '2013 - Started Marketing of Car care products in the Brand Name Of TEDI<BR><BR>';

	html += '<b>History of Company</b><BR><BR>The Company was started by Mr.Elumalai,Bsc. S.Sundar In the year 2012, the company forayed into trading business by taking the distributorship of building products division of 3M India Ltd under the name of new partnership firm \'Shri Sabareesh Enterprises\'.<BR><BR>The company handled the products from the IND Number Plates, TEDI Car care Products, Vehicle Conspicuity of 3M, AFT of 3M, Speed Govenors (Mercyda & craysol). IND Number Plates.<BR>';

	document.getElementById('backButton').style.display = '';
	document.getElementById('hiddenCurrentPageID').value = 2;
	document.getElementById('pageContent').innerHTML = html;
}

function loadProductListPage()
{
	var html = '';
	html += '<div class="row"><div class="col-xs-12"><p class="lead redColor">Our Products</p></div></div>';
	html += '<div class="row">';
		html += '<div class="col-xs-12" align="center">';
		/*
			html += '<div class="circle-text" onclick="loadHomePage();"><div><small>IND Number Plate</small></div></div>';
			html += '<div class="circle-text" onclick="loadAboutPage();"><div><small>Traffic Safety Systems</small></div></div>';
			html += '<div class="circle-text" onclick="loadProductListPage();"><div><small>Reflective Sign Boards & Sheets</small></div></div>';
			html += '<div class="circle-text" onclick="loadClientsPage();"><div><small>Car Polishing products</small></div></div>';
			html += '<div class="circle-text" onclick="loadContactPage();"><div><small>Sun Control Film</small></div></div>';
			html += '<div class="circle-text" onclick="loadContactPage();"><div><small>Vehicle and Specialty Markings</small></div></div>';
			html += '<div class="circle-text" onclick="loadContactPage();"><div><small>Acrylic Foam Tape</small></div></div>';
		*/
			html += '<div class="list-group">';
				html += '<a href="#" class="list-group-item" onclick="loadProductsPage(1);">IND Number Plate</a>';
				html += '<a href="#" class="list-group-item">Traffic Safety Systems</a>';
				html += '<a href="#" class="list-group-item">Reflective Sign Boards & Sheets</a>';
				html += '<a href="#" class="list-group-item">Car Polishing products</a>';
				html += '<a href="#" class="list-group-item">Sun Control Film</a>';
				html += '<a href="#" class="list-group-item">Vehicle and Specialty Markings</a>';
				html += '<a href="#" class="list-group-item">Acrylic Foam Tape</a>';
			html += '</div>';

		html += '</div>';
	html += '</div>';

	document.getElementById('backButton').style.display = '';
	document.getElementById('hiddenCurrentPageID').value = 3;
	document.getElementById('pageContent').innerHTML = html;
}

function loadProductsPage(productID)
{
	var html = '';
	if(productID == 1)
	{
		html += '<div class="row"><div class="col-xs-12"><p class="lead redColor">IND Number Plate</p></div></div>';
		html += '<div class="row"><div class="col-xs-12"><p>Windshield The professional aluminium based vehicle number plate manufacturer in south India. We are the manufactures of BLANK NUMBER PLATES, IND NUMBER PLATES, ALUMINIUM EMBOSSED NUMBER PLATES, MACHINES, HOT STAMPING FOILS, HOT STAMPING MACHINE, hYDRAULIC PRESS, CLAPPER DIES etc.</p></div></div>';
		html += '<div class="row">';
			html += '<div class="col-xs-12">';
				html += '<p>HSRP FORM AND MANNER OF DISPLAY OF REGISTRATION MARKS ON THE MOTOR VEHICLES (AS PER PROVISIONS U/S 50 CMVR, 1989) :</p>';
			html += '</div>';
		html += '</div>';

		html += '<div class="row">';
			html += '<div class="col-xs-12">';
				html += '<ul>';
					html += '<li>The plate shall be a solid unit made of 1.0 mm aluminum conforming to DIN 1745 / DIN 1783 or ISO 7591.</li><BR>';
					html += '<li>Border edges and corners of the plate shall be rounded to avoid injuries to the extent of approx.10 mm and the plates must have an embossed border.</li><BR>';
					html += '<li>The plate has to be suitable for hot stamping and reflective sheet has to be guaranteed for imperishable nature for minimum five years. The first colour of legend and border should be done by hot stamping.</li><BR>';
					html += '<li>The plate should bear the letters "IND" in blue colour on the extreme left centre of the plate. The letter should be one fourth of the size of letters mentioned in rule 51 and should be buried into the foil or applied by Hot stamping and should be an integral part of the plate.</li><BR>';
					html += '<li>Each plate shall be protected against counterfeiting by applying chromium- based hologram, applied by hot stamping. Stickers and labels are not permitted.</li><BR>';
					html += '<li>The plate shall bear a permanent consecutive identification number of minimum seven digits, to be laser branded into the reflective sheeting and hot stamping film shall bear a verification inscription.</li><BR>';
				html += '</ul>';
			html += '</div>';
		html += '</div>';
		document.getElementById('hiddenCurrentPageID').value = 6;
	}
	else if(productID == 2)
	{
		html += '<p class="lead redColor">Traffic Safety Systems</p>';
	}
	else if(productID == 3)
	{
		html += '<p class="lead redColor">Reflective Sign Boards & Sheets</p>';
	}
	else if(productID == 4)
	{
		html += '<p class="lead redColor">Car Polishing products</p>';
	}
	else if(productID == 5)
	{
		html += '<p class="lead redColor">Sun Control Film</p>';
	}
	else if(productID == 6)
	{
		html += '<p class="lead redColor">Vehicle and Specialty Markings</p>';
	}
	else if(productID == 7)
	{
		html += '<p class="lead redColor">Acrylic Foam Tape</p>';
	}

	document.getElementById('pageContent').innerHTML = html;
}

function loadClientsPage()
{
	var html = '';
	html += '<div align="center"><b>Yet to be Updated!</b></div>';

	document.getElementById('backButton').style.display = '';
	document.getElementById('hiddenCurrentPageID').value = 4;
	document.getElementById('pageContent').innerHTML = html;
}

function loadContactPage()
{
	var html = '';
	html += '<div class="row">';
		html += '<div class="col-xs-12">';
			html += '<address>';
				html += '<strong>TediIndia</strong><BR>';
				html += 'No 64/70 R E Appartment<BR>';
				html += 'Arya Gowda Road, West Mambalam<BR>';
				html += 'Chennai - 600033<BR>';
				html += 'Phone: +1 800 603 6035<BR>';
				html += 'Email: info@tediindia.com<BR><BR>';
				html += '<a href="tel:+1 800 603 6035"><button type="button" class="btn btn-success btn-sm"><span class="glyphicon glyphicon-earphone"></span>&nbsp;Call</button></a>&nbsp;';
				html += '<a href="mailto:info@tediindia.com"><button type="button" class="btn btn-success btn-sm"><span class="glyphicon glyphicon-envelope"></span>&nbsp;Email</button></a>';
			html += '</address>';
		html += '</div>';
	html += '</div>';

	document.getElementById('backButton').style.display = '';
	document.getElementById('hiddenCurrentPageID').value = 5;
	document.getElementById('pageContent').innerHTML = html;
}