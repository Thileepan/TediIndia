//Author: Thileepan Sivanandham
//Email: sktgthill@gmail.com

function loadMainPage()
{
	var html = '';
	html += '<div class="row"><div class="col-xs-12"><p class="lead redColor">Welcome to TEDI INDIA!</p></div></div>';
	html += '<div class="row">';
		html += '<div class="col-xs-6 col-md-6" align="center">';			
			//html += '<div class="square-box" onclick="loadHomePage();"><div class="square-content"><div><span class="glyphicon glyphicon-home"></span></div></div></div><BR>';
			//html += '<div class="square-box" onclick="loadProductListPage();"><div class="square-content"><div><span class="glyphicon glyphicon-shopping-cart"></span></div></div></div><BR>';
			html += '<button type="button" class="btn btn-danger btn-lg" style="width:75px;height:75px;" onclick="loadHomePage();"><span class="glyphicon glyphicon-home"></span></button><BR><BR>';
			html += '<button type="button" class="btn btn-danger btn-lg" style="width:75px;height:75px;" onclick="loadProductListPage();"><span class="glyphicon glyphicon-shopping-cart"></span></button>';
		html += '</div>';
		html += '<div class="col-xs-6 col-md-6" align="center">';
			//html += '<div class="square-box" onclick="loadAboutPage();"><div class="square-content"><div><span class="glyphicon glyphicon-info-sign"></span></div></div></div><BR>';
			//html += '<div class="square-box" onclick="loadContactPage();"><div class="square-content"><div><button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-earphone"></span></button></div></div></div><BR>';
			html += '<button type="button" class="btn btn-danger btn-lg" style="width:75px;height:75px;" onclick="loadAboutPage();"><span class="glyphicon glyphicon-info-sign"></span></button><BR><BR>';
			html += '<button type="button" class="btn btn-danger btn-lg" style="width:75px;height:75px;" onclick="loadContactPage();"><span class="glyphicon glyphicon-earphone"></span></button>';
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
				html += '<a href="#" class="list-group-item" onclick="loadProductsPage(2);">Traffic Safety Systems</a>';
				html += '<a href="#" class="list-group-item" onclick="loadProductsPage(3);">Reflective Sign Boards & Sheets</a>';
				html += '<a href="#" class="list-group-item" onclick="loadProductsPage(4);">Car Polishing products</a>';
				html += '<a href="#" class="list-group-item" onclick="loadProductsPage(5);">Sun Control Film</a>';
				html += '<a href="#" class="list-group-item" onclick="loadProductsPage(6);">Vehicle and Specialty Markings</a>';
				html += '<a href="#" class="list-group-item" onclick="loadProductsPage(7);">Acrylic Foam Tape</a>';
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
	document.getElementById('hiddenCurrentPageID').value = 6;
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
	}
	else if(productID == 2)
	{
		html += '<p class="lead redColor">Traffic Safety Systems</p>';
		
	}
	else if(productID == 3)
	{
		html += '<div class="row"><div class="col-xs-12"><p class="lead redColor">Reflective Sign Boards & Sheets</p></div></div>';
		
		html += '<div class="row">';
			html += '<div class="col-xs-12">';
				html += '<p>3M&#8482; Diamond Grade&#8482; Reflective Sheeting is state-of-the-art sheeting used for traffic control and guidance signs and devices. This highly reflective, durable, and visible sheeting meets a wide variety of sign visibility needs in all light and weather conditions and outperforms the competition when it really counts.</p>';
				
				html += '<p><b>3M&#8482; Diamond Grade&#8482; DG<sup>3</sup> Reflective Sheeting</b></p>';
				html += '<p>3M&#8482; Diamond Grade&#8482; DG<sup>3</sup> Reflective Sheeting is the first-of-its-kind to meet the ASTM Type XI spec This State-of-the-art, full cube prismatic reflective sheeting ensures optimal performance at all sight distances. The optical elements of the DG<sup>3</sup> sheeting series return almost 60% of available light to road users - nearly twice the reflectivity when compared to conventional prismatic sheeting.</p>';
				html += '<ul>';
					html += '<li>Ideal for short, medium and long sight distances</li><BR>';
					html += '<li>Best suited for disadvantaged sign placement locations such as overhead or left shoulder</li><BR>';
					html += '<li>Provides level of luminance needed by older road users</li><BR>';
					html += '<li>Accommodates drivers of large vehicles</li><BR>';
					html += '<li>Lower life-cycle costs</li><BR>';					
				html += '</ul>';
				
				html += '<p><b>Available Colours:</b></p>';
				html += '<p>3M&#8482; Diamond Grade&#8482; DG<sup>3</sup> Reflective Sheeting is available in Orange, White, Yellow, Red, Blue, Green, Brown</p><BR>';
				
				html += '<p><b>3M&#8482; Diamond Grade&#8482; DG<sup>3</sup> Fluorescent Reflective Sheeting</b></p>';
				html += '<p>3M&#8482; Diamond Grade&#8482; DG<sup>3</sup> Fluorescent Reflective Sheeting leverages full-cube prismatic and fluorescent technology to provide excellent visibility at dawn, dusk and during inclement weather.</p><BR>';
				html += '<ul>';
					html += '<li>Ideal for short, medium and long sight distances</li><BR>';
					html += '<li>Best suited for disadvantaged sign placement locations such as overhead or left shoulder</li><BR>';
					html += '<li>Provides level of luminance needed by older road users</li><BR>';
					html += '<li>Accommodates drivers of large vehicles</li><BR>';
					html += '<li>Lower life-cycle costs</li><BR>';					
				html += '</ul>';
				
				html += '<p><b>Available Colours:</b></p>';
				html += '<p>3M&#8482; Diamond Grade&#8482; DG<sup>3</sup> Reflective Sheeting is available in Orange, White, Yellow, Red, Blue, Green, Brown</p><BR>';
				
				html += '<p><b>Advantage:</b></p>';
				html += '<ul>';
					html += '<li>Ideal for short, medium and long sight distances</li><BR>';
					html += '<li>Best suited for disadvantaged sign placement locations such as overhead or left shoulder</li><BR>';
					html += '<li>High visibility in various conditions - daytime, night, twilight and inclement weather </li><BR>';
					html += '<li>Excellent visibility at wide entrance and observation angles</li><BR>';
					html += '<li>Conform to all colour specifications for traffic control signs and devices.</li><BR>';	
				html += '</ul>';
				
				html += '<p><b>3M&#8482; Diamond Grade&#8482; DG<sup>3</sup> Fluorescent Yellow Green Sheeting 4083</b></p>';
				html += '<p>3M&#8482; Diamond Grade&#8482; DG<sup>3</sup> Fluorescent Yellow Green Sheeting 4083 is fluorescent yellow-green full-cube prismatic reflective sheeting with pressure sensitive adhesive.</p>';
				html += '<p>High visibility in various conditions - daytime, night, twilight and inclement weather, and excellent visibility at wide entrance and observation angles, makes the DG<sup>3</sup> Fluorescent Yellow Green Sheeting 4083 ideal for non-motorized traffic warning signs.</p><BR>';

				html += '<p><b>3M&#8482; Diamond Grade&#8482; DG<sup>3</sup> Fluorescent Yellow Sheeting 4081</b></p>';
				html += '3M&#8482; Diamond Grade&#8482; DG<sup>3</sup> Fluorescent Yellow Sheeting 4081 is a fluorescent yellow full-cube prismatic reflective sheeting with pressure sensitive adhesive.';
				html += '<p>High visibility in various conditions - daytime, night, twilight and inclement weather, and excellent visibility at wide entrance and observation angles, makes the Fluorescent Yellow Sheeting 4081 conform to all color specifications for yellow traffic control signs and devices.</p><BR>';
			html += '</div>';
		html += '</div>';
	}
	else if(productID == 4)
	{
		html += '<div class="row"><div class="col-xs-12"><p class="lead redColor">Car Polishing products</p></div></div>';
		html += '<div class="row">';
			html += '<div class="col-xs-12">';
				html += '<p><b>Windshield Washer</b></p>';
				html += '<p>Windshield Washer removes stains of dirt, greasy and oily substances and thereby makes Windshield more shiny and glossy. Its unique preparation lessens any irritation during application.<BR></p>';
				html += '<p><b>Directions for use:</b></p>';
				html += '<p>Pour the content into the windshield wiper reservoir. Add required quantity of clean water to the reservoir. Shake well before use.<BR></p>';
				html += '<p><b>Cautions</b></p>';
				html += '<p>Keep it in a cool place and away from children. Avoid its contact with eyes and broken skin.If contact occurs wash with plenty of water and consult a doctor.<BR></p>';
				html += '<HR>';

				html += '<p><b>Car Shampoo</b></p>';
				html += '<p>Car Shampoo removes stains of dirt, greasy and oily substances and thereby makes surfaces more shiny and glossy. Its unique preparation lessens any irritation during application<BR></p>';
				html += '<p><b>Directions for use:</b></p>';
				html += '<p>Use a measuring bucket for optimum usage. Dilute it in 1:10 ratio with water. Gently apply by a soaked sponge on surfaces or can use soap gun for application. Spray water jet on applied surfaces in optimum pressure and use micro fibre cloth for fine wiping. For external use only and dilution is needed. Shake well before use.<BR></p>';
				html += '<p><b>Cautions</b></p>';
				html += '<p>Keep it in a cool place and away from children. Avoid its contact with eyes and broken skin.If contact occurs wash with plenty of water and consult a doctor.<BR></p>';
				html += '<HR>';

				html += '<p><b>Vinyl & plastic Dresser</b></p>';
				html += '<p>Vinyl & plastic Dresser makes vinyl and plastic surfaces more shiny and glossy. Water based preparation avoids any corrosion by dresser application. It helps for finished look for all after sale services of all automobiles.<BR></p>';
				html += '<p><b>Directions for use:</b></p>';
				html += '<p>Use a fine spray bottle for optimum usage. Spray on rubber and vinyl surfaces and gently wipe by a sponge. When spraying is not applicable, spray on sponge and then apply on the surfaces. For external use only and no dilution is needed. Shake well before use.<BR></p>';
				html += '<p><b>Cautions</b></p>';
				html += '<p>Keep it in a cool place and away from children. Avoid its contact with eyes and broken skin.If contact occurs wash with plenty of water and consult a doctor.<BR></p>';
				html += '<HR>';

				html += '<p><b>Glass cleaner</b></p>';
				html += '<p>Glass cleaner removes stains of dirt, greasy and oily substances and thereby makes glass surfaces more shiny and glossy. Its unique preparation lessens any irritation during application. It helps for finished and clean look for all after sale services on glass surfaces.<BR></p>';
				html += '<p><b>Directions for use:</b></p>';
				html += '<p>Use a fine spray bottle for optimum usage. Spray on glass surfaces and gently wipe by a micro fibre cloth. For external use only and no dilution is needed. Shake well before use.<BR></p>';
				html += '<p><b>Cautions</b></p>';
				html += '<p>Keep it in a cool place and away from children. Avoid its contact with eyes and broken skin.If contact occurs wash with plenty of water and consult a doctor.<BR></p>';
				html += '<HR>';

				html += '<p><b>Interior cleaner</b></p>';
				html += '<p>Interior cleaner removes stains of dirt, greasy and oily substances from car Upholstery, vinyl & plastic surfaces. Its unique preparation lessens any irritation during application.<BR></p>';
				html += '<p><b>Directions for use:</b></p>';
				html += '<p>Use a measuring bucket for optimum usage. Diluteit in 1: 10 ratio with water. Gently spray & brush up the area. Use absorbing cloth for ?ne wiping. For external use only and dilution is needed. Shake well before use.<BR></p>';
				html += '<p><b>Cautions</b></p>';
				html += '<p>Keep it in a cool place and away from children. Avoid its contact with eyes and broken skin.If contact occurs wash with plenty of water and consult a doctor.<BR></p>';
				html += '<HR>';

				html += '<p><b>Tyre Dresser</b></p>';
				html += '<p>Tyre Dresser makes rubber and vinyl surfaces more shiny and glossy. Water based preparation avoids any corrosion by dresser application.It helps for finished look for all after sale services of all type automobiles.<BR></p>';
				html += '<p><b>Directions for use:</b></p>';
				html += '<p>Use a fine spray bottle for optimum usage. Spray on rubber and vinyl surfaces and gently wipe by a sponge. When spraying is not applicable, spray on sponge and then apply on the surfaces. For external use only and no dilution is needed. Shake well before use.<BR></p>';
				html += '<p><b>Cautions</b></p>';
				html += '<p>Keep it in a cool place and away from children. Avoid its contact with eyes and broken skin.If contact occurs wash with plenty of water and consult a doctor.<BR></p>';
				html += '<HR>';
			html += '</div>';
		html += '</div>';
	}
	else if(productID == 5)
	{
		html += '<div class="row"><div class="col-xs-12"><p class="lead redColor">Sun Control Film</p></div></div>';
		html += '<div class="row">';
			html += '<div class="col-xs-12">';
				html += '<ul>';
					html += '<li>Inventor and original patent holder of sun control films</li><BR>';
					html += '<li>Over 40 years of Research & Development</li><BR>';
					html += '<li>Special UV barrier that blocks up to 99% of UV rays</li><BR>';
					html += '<li>Specially developed Adhesive Technology</li><BR>';
					html += '<li>Selective Wavelength Technology for better cooling</li><BR>';
					html += '<li>Scratch Resistance Coating</li><BR>';
					html += '<li>Distinctive 3M branding on the film</li><BR>';
				html += '</ul>';

				html += '<p><b>3M Crystalline Automotive Films</b></p>';
				html += '<p><b>The only Sun Control Film with Multilayer Nanotechnology</b></p>';
				html += '<p>Superior in quality, the new 3M&#8482; Crystalline Automotive Films are innovative, high-technology films that represent a clear breakthrough in automotive solar protection. Developed in our world-leading laboratories, 3M&#8482; Crystalline Automotive Films is the only sun control film produced using Multilayer Nanotechnology, the same advanced technology used to improve the brightness in flat panel LCD televisions.</p>';

				html += '<p><b>Multilayer Nanotechnology for Advanced Sun Control</b></p>';
				html += '<p>Nanotechnology works with materials over a thousand times smaller than the width of a hair. 3M\'s Multilayer Nanotechnology enables the production of patented sun control films with hundreds of layers of polymer that is less than the thickness of a Post-it Note. This advanced technology gives 3M&#8482; Crystalline Automotive Films the ability to reflect up to 97% of the sun\'s infrared radiation with high Visible Light Transmission. Making it the most advanced range of sun control films, with far superior features than any other.</p>';
				html += '<table class="table table-bordered">';
					html += '<tr>';
						html += '<td></td>';
						html += '<td><b>CR40</b></td>';
						html += '<td><b>CR50</b></td>';
						html += '<td><b>CR70</b></td>';
					html += '</tr>';
					html += '<tr>';
						html += '<td><b>Visible Light Transmitted</b></td>';
						html += '<td>39%</td>';
						html += '<td>50%</td>';
						html += '<td>70%</td>';
					html += '</tr>';
					html += '<tr>';
						html += '<td><b>Total Solar Energy Selected</b></td>';
						html += '<td>59%</td>';
						html += '<td>56%</td>';
						html += '<td>50%</td>';
					html += '</tr>';
					html += '<tr>';
						html += '<td><b>On Angle*</b></td>';
						html += '<td>66%</td>';
						html += '<td>63%</td>';
						html += '<td>59%</td>';
					html += '</tr>';
					html += '<tr>';
						html += '<td><b>Infrared Rejected**</b></td>';
						html += '<td>97%</td>';
						html += '<td>97%</td>';
						html += '<td>97%</td>';
					html += '</tr>';
					html += '<tr>';
						html += '<td><b>Visible Light Reflection Interior</b></td>';
						html += '<td>6%</td>';
						html += '<td>7%</td>';
						html += '<td>9%</td>';
					html += '</tr>';
					html += '<tr>';
						html += '<td><b>Visible Light Reflection Exterior</b></td>';
						html += '<td>7%</td>';
						html += '<td>8%</td>';
						html += '<td>9%</td>';
					html += '</tr>';
					html += '<tr>';
						html += '<td><b>UV Rejected</b></td>';
						html += '<td>99.9%</td>';
						html += '<td>99.9%</td>';
						html += '<td>99.9%</td>';
					html += '</tr>';
					html += '<tr>';
						html += '<td><b>Glare Reduction</b></td>';
						html += '<td>56%</td>';
						html += '<td>43%</td>';
						html += '<td>23%</td>';
					html += '</tr>';
				html += '</table>';
				html += '<p>* TSER On Angle calculated at 60 Degrees<BR>** IR for wave length range of 900 - 1000&#181;m</p>';

				html += '<p><b>The 3M range also includes films ideal for front windscreen application. Ask your dealer for a 3M&#8482; Automotive Film selection guide.</b></p>';
				html += '<p><b>Features:</b></p>';
				html += '<ul>';
					html += '<li>Breakthrough Multilayer Nanotechnology for advanced comfort, style and safety</li><BR>';
					html += '<li>Enhanced heat and UV protection - protects against sunburn, premature aging and skin cancer</li><BR>';
					html += '<li>Less reflectivity than traditional glass ensuring reduced glare and better visibility</li><BR>';
					html += '<li>Protects car interiors from fading and deterioration</li><BR>';
					html += '<li>Reduces the possibility of glass shattering</li><BR>';
					html += '<li>Metal - free design - zero electronic interference with mobile phones, GPS, and radio reception</li><BR>';
				html += '</ul>';

				html += '<p><b>3M Automotive Films</b></p>';
				html += '<p><b>CS Series</b></p>';
				html += '<p>Premium Colour Stable sun control films with unique solar-absorbing technology that hold their colour and are high on heat rejection</p>';
				html += '<table class="table table-bordered">';
					html += '<tr>';
						html += '<td></td>';
						html += '<td><b>Total Solar Energy Rejected</b></td>';
						html += '<td><b>Visible Light Transmi ssion</b></td>';
						html += '<td><b>UV reduction</b></td>';						
					html += '</tr>';
					html += '<tr>';
						html += '<td><b>Colour-Stable CS 5</b></td>';
						html += '<td>58%</td>';
						html += '<td>8%</td>';
						html += '<td>99%</td>';
					html += '</tr>';
					html += '<tr>';
						html += '<td><b>Colour-Stable CS 20</b></td>';
						html += '<td>52%</td>';
						html += '<td>16%</td>';
						html += '<td>99%</td>';
					html += '</tr>';
					html += '<tr>';
						html += '<td><b>Colour-Stable CS 35</b></td>';
						html += '<td>39%</td>';
						html += '<td>38%</td>';
						html += '<td>99%</td>';
					html += '</tr>';
					html += '<tr>';
						html += '<td><b>Colour-Stable CS 50</b></td>';
						html += '<td>33%</td>';
						html += '<td>51%</td>';
						html += '<td>99%</td>';
					html += '</tr>';
				html += '</table>';
				html += '<p><b>Features:</b></p>';
				html += '<ul>';
					html += '<li>Exceptional long-lasting colour consistency</li><BR>';
					html += '<li>Neutral black appearance</li><BR>';
					html += '<li>Excellent heat rejection</li><BR>';
					html += '<li>Low reflection</li><BR>';
					html += '<li>Superior optical clarity</li><BR>';
					html += '<li>Scratch resistance coating</li><BR>';
					html += '<li>Shatter resistance</li><BR>';
					html += '<li>Maximum UV protection</li><BR>';
					html += '<li>Metal-free transmission</li><BR>';
					html += '<li>Zero interference with satellite signals</li><BR>';
				html += '</ul>';

				html += '<p><b>RE Series</b></p>';
				html += '<p>Premium line of metallised films that effectively controls the sun and enhances your vehicle\'s appearance.</p>';
				html += '<table class="table table-bordered">';
					html += '<tr>';
						html += '<td></td>';
						html += '<td><b>Total Solar Energy Rejected</b></td>';
						html += '<td><b>Visible Light Transmi ssion</b></td>';
						html += '<td><b>UV reduction</b></td>';						
					html += '</tr>';
					html += '<tr>';
						html += '<td><b>RE 35</b></td>';
						html += '<td>56%</td>';
						html += '<td>37%</td>';
						html += '<td>99%</td>';
					html += '</tr>';
					html += '<tr>';
						html += '<td><b>RE 50</b></td>';
						html += '<td>43%</td>';
						html += '<td>51%</td>';
						html += '<td>99%</td>';
					html += '</tr>';
					html += '<tr>';
						html += '<td><b>RE 70</b></td>';
						html += '<td>34%</td>';
						html += '<td>70%</td>';
						html += '<td>98%</td>';
					html += '</tr>';
				html += '</table>';
				html += '<p><b>Features:</b></p>';
				html += '<ul>';
					html += '<li>Exceptional heat rejection</li><BR>';
					html += '<li>Superior optical clarity</li><BR>';
					html += '<li>Shatter resistance</li><BR>';
					html += '<li>Maximum UV protection</li><BR>';
					html += '<li>Scratch resistance coating</li><BR>';
					html += '<li>Excellent colour stability</li><BR>';					
				html += '</ul>';

				html += '<p><b>SP Series</b></p>';
				html += '<p>Premium line of metallised films that effectively controls the sun and enhances your vehicle\'s appearance.</p>';
				html += '<p>Non-reflective films with great shine and exceptional value.</p>';
				html += '<table class="table table-bordered">';
					html += '<tr>';
						html += '<td></td>';
						html += '<td><b>Total Solar Energy Rejected</b></td>';
						html += '<td><b>Visible Light Transmi ssion</b></td>';
						html += '<td><b>UV reduction</b></td>';						
					html += '</tr>';
					html += '<tr>';
						html += '<td><b>Colour-Stable SP 5</b></td>';
						html += '<td>42%</td>';
						html += '<td>5%</td>';
						html += '<td>98%</td>';
					html += '</tr>';
					html += '<tr>';
						html += '<td><b>Colour-Stable SP 20</b></td>';
						html += '<td>39%</td>';
						html += '<td>16%</td>';
						html += '<td>98%</td>';
					html += '</tr>';
					html += '<tr>';
						html += '<td><b>Colour-Stable SP 35</b></td>';
						html += '<td>33%</td>';
						html += '<td>33%</td>';
						html += '<td>98%</td>';
					html += '</tr>';
					html += '<tr>';
						html += '<td><b>Colour-Stable SP 50</b></td>';
						html += '<td>29%</td>';
						html += '<td>52%</td>';
						html += '<td>98%</td>';
					html += '</tr>';
					html += '<tr>';
						html += '<td><b>Colour-Stable SP 70</b></td>';
						html += '<td>23%</td>';
						html += '<td>72%</td>';
						html += '<td>98%</td>';
					html += '</tr>';
				html += '</table>';
				html += '<p><b>Features:</b></p>';
				html += '<ul>';
					html += '<li>Good heat rejection</li><BR>';
					html += '<li>Shatter resistance</li><BR>';
					html += '<li>Maximum UV protection</li><BR>';
					html += '<li>Metal-free transmission</li><BR>';
					html += '<li>Zero interference with satellite signals</li><BR>';
					html += '<li>Low reflection</li><BR>';					
				html += '</ul>';

			html += '</div>';
		html += '</div>';
	}
	else if(productID == 6)
	{
		html += '<div class="row"><div class="col-xs-12"><p class="lead redColor">Vehicle and Specialty Markings</p></div></div>';
		html += '<div class="row">';
			html += '<div class="col-xs-12">';
			html += '</div>';
		html += '</div>';
	}
	else if(productID == 7)
	{
		html += '<div class="row"><div class="col-xs-12"><p class="lead redColor">Acrylic Foam Tape</p></div></div>';
		html += '<div class="row">';
			html += '<div class="col-xs-12">';
			html += '</div>';
		html += '</div>';
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