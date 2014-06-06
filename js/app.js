//Author: Thileepan Sivanandham
//Email: sktgthill@gmail.com

function loadMainPage()
{
	var html = '';
	html += '<div class="row"><div class="col-xs-12"><p class="lead redColor">Welcome to TEDI INDIA!</p></div></div>';
	html += '<div class="row">';
		html += '<div class="col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1" align="center">';
			//html += '<div class="rectangle-box" onclick="loadHomePage();"><div class="rectangle-content"><div><span class="glyphicon glyphicon-home"></span></div></div></div><BR>';
			html += '<div class="panel panel-default curHand" style="background-color:#D43400;color:white;" onclick="loadProductsPage(1, 2);"><div class="panel-body">IND Number Plates</div></div>';
			html += '<div class="panel panel-default curHand" style="background-color:#D43400;color:white;" onclick="loadProductsPage(6, 2);"><div class="panel-body">Vehicle Conspicuity Tapes</div></div>';
			html += '<div class="panel panel-default curHand" style="background-color:#D43400;color:white;" onclick="loadProductsPage(3, 2);"><div class="panel-body">Reflective Sign Boards</div></div>';
			html += '<div class="panel panel-default curHand" style="background-color:#D43400;color:white;" onclick="loadProductsPage(4, 2);"><div class="panel-body">Car Polish Products</div></div>';
			html += '<div class="panel panel-default curHand" style="background-color:#D43400;color:white;" onclick="loadProductsPage(7, 2);"><div class="panel-body">AFT Tapes</div></div>';
			//html += '<div class="rectangle-box" onclick="loadProductListPage();"><div class="rectangle-content"><div><span class="glyphicon glyphicon-shopping-cart"></span></div></div></div><BR>';
			/*
			html += '<button type="button" class="btn btn-danger btn-lg" style="width:75px;height:75px;" onclick="loadHomePage();"><span class="glyphicon glyphicon-home"></span></button><BR><span style="color:grey">Home</span><BR><BR>';
			html += '<button type="button" class="btn btn-danger btn-lg" style="width:75px;height:75px;" onclick="loadProductListPage();"><span class="glyphicon glyphicon-shopping-cart"></span></button><BR><span style="color:grey">Products</span>';
			*/
		html += '</div>';
		/*
		html += '<div>';
			html += '<div class="col-xs-12 col-md-12" align="center">';
				html += '<div class="rectangle-box" onclick="loadProductListPage();"><div class="rectangle-content"><div><span class="glyphicon glyphicon-shopping-cart"></span></div></div></div><BR>';
			html += '</div>';
		html += '</div>';
		html += '<div class="col-xs-6 col-md-6" align="center">';
			//html += '<div class="square-box" onclick="loadAboutPage();"><div class="square-content"><div><span class="glyphicon glyphicon-info-sign"></span></div></div></div><BR>';
			//html += '<div class="square-box" onclick="loadContactPage();"><div class="square-content"><div><button type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-earphone"></span></button></div></div></div><BR>';
			html += '<button type="button" class="btn btn-danger btn-lg" style="width:75px;height:75px;" onclick="loadAboutPage();"><span class="glyphicon glyphicon-info-sign"></span></button><BR><span style="color:grey">About Us</span><BR><BR>';
			html += '<button type="button" class="btn btn-danger btn-lg" style="width:75px;height:75px;" onclick="loadContactPage();"><span class="glyphicon glyphicon-earphone"></span></button><BR><span style="color:grey">Contact Us</span>';
		html += '</div>';
		*/
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
	if(currentPage == 1 || currentPage == 2 || currentPage == 3 || currentPage == 4 || currentPage == 5 || currentPage == 7) {
		loadMainPage();
	} else if(currentPage == 6) {
		loadProductListPage();
	} else if(currentPage == 8) {
		loadContactPage();
	}
}

function loadHomePage()
{
	var html = '';
	html += '<div class="row"><div class="col-xs-12"><p class="lead redColor">Welcome to TEDI INDIA!</p></div></div>';
	html += '<p align="center" onclick="window.open(\'images/web/page1-img4.jpg\', \'_system\', \' \');"><img class="img-responsive" src="images/web/page1-img4.jpg" /></p>';
	html += '<p>TediIndia.com is the global innovation company that never stops inventing because we are passionate about making progress possible.<BR><BR>Our people capture the spark of new ideas and transform them into thousands of ingenious products and practical applications that help make people\'s lives better.</p></div></div>';

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
				html += '<a href="#" class="list-group-item" onclick="loadProductsPage(1, 1);">IND Number Plate</a>';
				html += '<a href="#" class="list-group-item" onclick="loadProductsPage(6, 1);">Vehicle Conspicuity Tapes</a>';
				html += '<a href="#" class="list-group-item" onclick="loadProductsPage(3, 1);">Reflective Sign Boards & Sheets</a>';
				html += '<a href="#" class="list-group-item" onclick="loadProductsPage(4, 1);">Car Polishing products</a>';
				html += '<a href="#" class="list-group-item" onclick="loadProductsPage(7, 1);">Acrylic Foam Tapes</a>';
				html += '<a href="#" class="list-group-item" onclick="loadProductsPage(5, 1);">Sun Control Film</a>';
				html += '<a href="#" class="list-group-item" onclick="loadProductsPage(2, 1);">Traffic Safety Systems</a>';
			html += '</div>';

		html += '</div>';
	html += '</div>';

	document.getElementById('backButton').style.display = '';
	document.getElementById('hiddenCurrentPageID').value = 3;
	document.getElementById('pageContent').innerHTML = html;
}

function loadProductsPage(productID, fromReq)
{
	var html = '';
	document.getElementById('backButton').style.display = '';
	if(fromReq == 1) {
		document.getElementById('hiddenCurrentPageID').value = 6;
	} else {
		document.getElementById('hiddenCurrentPageID').value = 7;
	}

	var pageID = 9;
	if(productID == 1)
	{
		html += '<div class="row"><div class="col-xs-12"><p class="lead redColor">IND Number Plate</p></div></div>';
		html += '<div class="row"><div class="col-xs-12" align="center"><button class="btn btn-info" onclick="loadContactForm('+productID+');">Enquiry Product</button></div></div><BR>';
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
				html += '<p align="center"><img class="img-responsive" src="images/web/numPlate.jpg" /></p>';
				html += '<p>The size of the plate for different categories of vehicles shall be :</p>';
				html += '<ul>';
					html += '<li>For two and three - wheelers 200 x 100 mm</li><BR>';
					html += '<li>For Light Motor Vehicles / Passenger Cars 340 x 200 mm / 500 x 120 mm</li><BR>';
					html += '<li>For medium commercial vehicles, heavy commercial vehicles and Trailer / Combination 340 x 200 mm</li><BR>';
					html += '<li>In the case of motor cycles, the registration marks in the front shall be displayed parallel to the handle bar or on any part of the vehicle including mudguard facing the front instead of, on a plate in line with the axis of the vehicle.</li><BR>';
					html += '<li>The registration mark exhibited at the rear of a transport vehicle shall be affixed to the vehicle on the right hand side at a distance not exceeding 1 mtr from the ground. The registration mark shall also be painted on the right and left side on the body of the vehicle in the case of a transport vehicle.</li><BR>';
					html += '<li>The letters of the registration marks shall be in English and the figures shall be in Arabic numerals and the letters and figures shall be embossed and hot stamped and shall be shown : 1. In black colour on yellow background , in case of transport vehicles 2. In black colour on white background </li><BR>';
					html += '<li>The registration mark shall be in two lines, the State code and registering authority code forming the first line and the rest forming the second line, one below the other. In models of vehicles, having no sufficient provision at the rear to exhibit the registration mark in two lines, it shall be sufficient if in such vehicles registration mark is exhibited in a single line.</li><BR>';
					html += '<li>The registration mark on a light motor vehicle may be in the centre with illumination.</li><BR>';
					html += '<p>The plate shall be a solid unit made of 1.0 mm aluminium conforming to DIN 1745/DIN 1783 or ISO 7591. Border edges and corners of the plate shall be rounded to avoid injuries to the extent of approx.10 mm and the plates must have an embossed border. The plate shall be suitable for hot stamping and the reflective sheet has to be guaranteed for imperishable nature for minimum of five years. Some of the other features are explained below in detail:</p>';
					html += '<p><b>Number Plate Fonts</b></p>';
					html += '<p align="center"><img class="img-responsive" src="images/web/fonts.png" /></p>';
					html += '<p><b>Reflective Features</b></p>';
					html += '<p>One of the significant safety feature of the High Security License Plates is reflectivity. High Security License Plates will have a high quality retro reflective sheeting which is laminated and embossed. This sheeting provides excellent conspicuity during day time and offer high reflectivity in the night. By virtue of reflective sheeting the vehicle is visible from a minimum difference of 200 meters in night irrespective of the working of its tail lamps etc.</p>';
					html += '<p>For over 40 years, worldwide, it has been proved that application and usage of Retro Reflective sheeting on vehicle License Plates reduces the accidents and loss of life significantly. This feature is particularly essential in India, given the fact that lack of visibility is one of the highest causes of fatal accidents.</p>';
					html += '<p><b>Chromium based hologram</b></p>';
					html += '<p>Holograms are well known security features of our daily life. Hot-stamping of chromium based hologram makes it possible for a license plate to withstand the inclemency of the weather for many years, The hologram shall carry the image of "CHAKRA" as notified by the Govt. of India. Being hot stamped with high pressure at 220 degree Celsius, this hologram cannot be tampered with or removed or replaced. Holograms on number plates are easily visible with naked eyes so that they give a direct hint about possible fraud if they are missing or destroyed/tampered with.</p>';
					html += '<p align="center"><img class="img-responsive" src="images/web/indHolo.jpg" /></p>';
					html += '<p><b>Security inscript</b></p>';
					html += '<p>The security inscription shall incorporate the following features:</p>';
					html += '<ul>';
						html += '<li>The type of colour or ink which is used for the inscription is based on a Pearl Pigment Colour. Verification of the use of this kind of colour can be made as follows:</li><BR>';
						html += '<li>By changing the visual direction between the license plate and the viewer (under day light) there can be seen a change in intensity of the colour. This change is also related to the intensity of the external illumination of the license plate. This property shall avoid copying such kind of product by using a simple print.</li><BR>';
					html += '</ul>';
					html += '<p><b>Laser etched 9 digit alpha numeric code</b></p>';
					html += '<p>This is engraved on the left hand side just below the words IND with laser. This is a sequential identification of individual license plates across the country. It acts as a watermark and cannot be erased. On the basis of this laser code, complete details of the vehicle can be easily obtained from the records of HSRP supplier/RTO </p>';
					html += '<p><b>Third licence plate sticker on wind screen</b></p>';
					html += '<p>This is a self-destructive self-adhesive sticker pasted on wind screens. It contains all information pertaining to a vehicle\'s registration. This serves the purpose of double secure identification mark of a vehicle. </p>';
					html += '<p><b>Sanp lock</b></p>';
					html += '<p>The snap lock is the external fastening device used as normal bolting procedure for the License Plate to the vehicle body. This device prevents removal and reusability of the License Plate from the vehicle. Also any tampering with the snap lock is easily detectable by naked eye, making it easy for the law enforcing agencies to detect any abnormality in the License Plate.</p>';
				html += '</ul>';
			html += '</div>';
		html += '</div>';
		html += '<div class="row"><div class="col-xs-12" align="center"><button class="btn btn-info" onclick="loadContactForm('+productID+');">Enquiry Product</button></div></div><BR><BR>';
	}
	else if(productID == 2)
	{
		html += '<div class="row"><div class="col-xs-12"><p class="lead redColor">Traffic Safety Systems</p></div></div>';
		html += '<div class="row"><div class="col-xs-12" align="center"><button class="btn btn-info" onclick="loadContactForm('+productID+');">Enquiry Product</button></div></div><BR>';
		html += '<div class="row">';
			html += '<div class="col-xs-12">';
				html += '<p>Road authorities have to contend with several challenges like rapidly growing vehicular traffic, challenging road & driving conditions and increased safety hazards. For over 60 years, 3M has pioneered the use of retro reflective technology in road safety and traffic management solutions to ensure safe, orderly and efficient movement of all road users and vehicles.</p>';
				html += '<p align="center"><img class="img-responsive" src="images/web/saferoad.jpg" /></p>';
				html += '<p>3M Traffic Safety Systems - High performance materials, systems and services to effectively serve motorists in today\'s challenging driving conditions.</p>';
				html += '<p><b>Road Safety:</b></p>';
				html += '<p>Superior in quality, the new 3M&#8482; Crystalline Automotive Films are innovative, high-technology films that represent a clear breakthrough in automotive solar protection. Developed in our world-leading laboratories, 3M&#8482; Crystalline Automotive Films is the only sun control film produced using Multilayer Nanotechnology, the same advanced technology used to improve the brightness in flat panel LCD televisions.</p>';
				html += '<p><b>Issues & Solutions:</b></p>';
				html += '<p>Some of the major issues affecting road safety, especially during nights and inclement weather conditions are</p>';
				html += '<ul>';
					html += '<li>Minimal visual cues and poor visibility</li><BR>';
					html += '<li>Less time to react due to higher vehicle speeds</li><BR>';
				html += '</ul>';
				html += '<p>3M offers wide range of high-performance retro reflective signing and pavement marking solutions for improved traffic management as well as enhanced motorist, pedestrian and occupational safety</p>';
				html += '<p>Retro reflective solutions from 3M effectively address the safety challenges faced by road authorities in various scenarios:</p>';
				html += '<ul>';
					html += '<li>Highways</li><BR>';
					html += '<li>Cities</li><BR>';
					html += '<li>Airports</li><BR>';
				html += '</ul>';
				html += '<p><b>Vehicle Safety:</b></p>';
				html += '<p>According to the World Health Organization, India and other countries in Asia will witness a staggering 65% increase in vehicle population by 2020. While India is home to just 1% of the global vehicle population, the country accounts for 10% of road accidents worldwide - a telling statistic on the vehicle safety quotient.</p>';
				html += '<p>Over 33% of all vehicular accidents occur at night while only 20% of all vehicular traffic travels after nightfall. What\'s more, traffic death rates are three times greater at night than during the day.</p>';
				html += '<p><b>Why vehicle safety?</b></p>';
				html += '<p>While India is home to just 1% of the global vehicle population, the country accounts for 10% of road accidents worldwide. Major portion of these vehicular accidents, especially the fatal ones, occur at night.</p>';
				html += '<p><b>Major factors that affect vehicle safety</b></p>';
				html += '<p>3M&#8482; offers high visibility conspicuity sheeting solutions which can be applied on wide variety of vehicles to significantly enhance their night time visibility.</p>';
				html += '<p align="center"><img class="img-responsive" src="images/web/3msafety.jpg" /></p>';
				html += '<p><b>Benefits:</b></p>';
				html += '<ul>';
					html += '<li>A marked vehicle is recognized faster than an unmarked vehicle</li><BR>';
					html += '<li>Increased reaction time for driver to maneuver vehicle to safety</li><BR>';
					html += '<li>Enhanced assessment of parked and slow moving vehicles from a distance</li><BR>';
					html += '<li>Fewer accidents and improved safety for people and goods on board</li><BR>';
				html += '</ul>';
				html += '<p><b>Applications:</b></p>';
				html += '<ul>';
					html += '<li>Buses</li><BR>';
					html += '<li>Trucks</li><BR>';
					html += '<li>Tankers</li><BR>';
					html += '<li>Emergency Vehicles</li><BR>';
					html += '<li>Construction Equipments</li><BR>';
					html += '<li>Railways</li><BR>';
				html += '</ul>';
				html += '<p class="lead redColor">Related Segments</p>';
				html += '<p>Superior in quality, the new 3M&#8482; Crystalline Automotive Films are innovative, high-technology films that represent a clear breakthrough in automotive solar protection. Developed in our world-leading laboratories, 3M&#8482; Crystalline Automotive Films is the only sun control film produced using Multilayer Nanotechnology, the same advanced technology used to improve the brightness in flat panel LCD televisions.</p>';
				html += '<p><b>Railways:</b></p>';
				html += '<p>Railways constitute the lifeline of the nation, ferrying people and goods. The wide range of high visibility signs & markings from 3M are low-cost safety improvements with a high benefit-to-cost ratio in terms of crash prevention and averting fatalities and injuries at rail crossings.</p>';
				html += '<p><b>Petroleum:</b></p>';
				html += '<p>The petroleum sector demands exceptionally high levels of safety and visibility for installations, vehicles and personnel.</p>';
				html += '<p>The extensive range of conspicuity solutions from 3M&#8482; for vehicle marking ensure exemplary visibility and enhanced safety of fleet and people at all times. Similarly, 3M&#8482; retro reflective sheeting solutions are used in producing world-class energy-efficient retro reflective high-mast signs which provide extraordinary long distance visibility to outlets during nights at much lower life cycle costs</p>';
				html += '<p><b>Tourism:</b></p>';
				html += '<p>Tourist circuits in India usually have special themes and portray the religious, creative and cultural evolution of the respective people and regions</p>';
				html += '<p>3M\'s retro reflective sheeting solutions are extensively used to develop creative and thematic way-finding sign solutions which help facilitate safe, comfortable and informed travel which in turn enable the growth of tourism.</p>';
			html += '</div>';
		html += '</div>';
		html += '<div class="row"><div class="col-xs-12" align="center"><button class="btn btn-info" onclick="loadContactForm('+productID+');">Enquiry Product</button></div></div><BR><BR>';
	}
	else if(productID == 3)
	{
		html += '<div class="row"><div class="col-xs-12"><p class="lead redColor">Reflective Sign Boards & Sheets</p></div></div>';
		html += '<div class="row"><div class="col-xs-12" align="center"><button class="btn btn-info" onclick="loadContactForm('+productID+');">Enquiry Product</button></div></div><BR>';
		html += '<div class="row">';
			html += '<div class="col-xs-12">';
				html += '<p>3M&#8482; Diamond Grade&#8482; Reflective Sheeting is state-of-the-art sheeting used for traffic control and guidance signs and devices. This highly reflective, durable, and visible sheeting meets a wide variety of sign visibility needs in all light and weather conditions and outperforms the competition when it really counts.</p>';				
				html += '<p><b>3M&#8482; Diamond Grade&#8482; DG<sup>3</sup> Reflective Sheeting</b></p>';
				html += '<p align="center"><img class="img-responsive" src="images/web/3M_Reflective.jpg" /></p>';
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
				html += '<p align="center"><img class="img-responsive" src="images/web/reflectiveColors.jpg" /></p>';
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
				html += '<p align="center"><img class="img-responsive" src="images/web/YellowGreen.jpg" /></p>';
				html += '<p>3M&#8482; Diamond Grade&#8482; DG<sup>3</sup> Fluorescent Yellow Green Sheeting 4083 is fluorescent yellow-green full-cube prismatic reflective sheeting with pressure sensitive adhesive.</p>';
				html += '<p>High visibility in various conditions - daytime, night, twilight and inclement weather, and excellent visibility at wide entrance and observation angles, makes the DG<sup>3</sup> Fluorescent Yellow Green Sheeting 4083 ideal for non-motorized traffic warning signs.</p><BR>';

				html += '<p><b>3M&#8482; Diamond Grade&#8482; DG<sup>3</sup> Fluorescent Yellow Sheeting 4081</b></p>';
				html += '<p align="center"><img class="img-responsive" src="images/web/Yellow.jpg" /></p>';
				html += '3M&#8482; Diamond Grade&#8482; DG<sup>3</sup> Fluorescent Yellow Sheeting 4081 is a fluorescent yellow full-cube prismatic reflective sheeting with pressure sensitive adhesive.';
				html += '<p>High visibility in various conditions - daytime, night, twilight and inclement weather, and excellent visibility at wide entrance and observation angles, makes the Fluorescent Yellow Sheeting 4081 conform to all color specifications for yellow traffic control signs and devices.</p><BR>';
			html += '</div>';
		html += '</div>';
		html += '<div class="row"><div class="col-xs-12" align="center"><button class="btn btn-info" onclick="loadContactForm('+productID+');">Enquiry Product</button></div></div><BR><BR>';
	}
	else if(productID == 4)
	{
		html += '<div class="row"><div class="col-xs-12"><p class="lead redColor">Car Polishing products</p></div></div>';
		html += '<div class="row"><div class="col-xs-12" align="center"><button class="btn btn-info" onclick="loadContactForm('+productID+');">Enquiry Product</button></div></div><BR>';
		html += '<div class="row">';
			html += '<div class="col-xs-12">';
				html += '<p><b>Windshield Washer</b></p>';
				html += '<p>Windshield Washer removes stains of dirt, greasy and oily substances and thereby makes Windshield more shiny and glossy. Its unique preparation lessens any irritation during application.<BR></p>';
				html += '<p align="center"><img class="img-responsive" src="http://www.tediindia.com/images/ww1.jpg" /></p>';
				html += '<p><b>Directions for use:</b></p>';
				html += '<p>Pour the content into the windshield wiper reservoir. Add required quantity of clean water to the reservoir. Shake well before use.<BR></p>';
				html += '<p><b>Cautions</b></p>';
				html += '<p>Keep it in a cool place and away from children. Avoid its contact with eyes and broken skin.If contact occurs wash with plenty of water and consult a doctor.<BR></p>';
				html += '<HR>';

				html += '<p><b>Car Shampoo</b></p>';
				html += '<p>Car Shampoo removes stains of dirt, greasy and oily substances and thereby makes surfaces more shiny and glossy. Its unique preparation lessens any irritation during application<BR></p>';
				html += '<p align="center"><img class="img-responsive" src="images/web/carshampoo.jpg" /></p>';
				html += '<p><b>Directions for use:</b></p>';
				html += '<p>Use a measuring bucket for optimum usage. Dilute it in 1:10 ratio with water. Gently apply by a soaked sponge on surfaces or can use soap gun for application. Spray water jet on applied surfaces in optimum pressure and use micro fibre cloth for fine wiping. For external use only and dilution is needed. Shake well before use.<BR></p>';
				html += '<p><b>Cautions</b></p>';
				html += '<p>Keep it in a cool place and away from children. Avoid its contact with eyes and broken skin.If contact occurs wash with plenty of water and consult a doctor.<BR></p>';
				html += '<HR>';

				html += '<p><b>Vinyl & plastic Dresser</b></p>';
				html += '<p>Vinyl & plastic Dresser makes vinyl and plastic surfaces more shiny and glossy. Water based preparation avoids any corrosion by dresser application. It helps for finished look for all after sale services of all automobiles.<BR></p>';
				html += '<p align="center"><img class="img-responsive" src="http://www.tediindia.com/images/car-interior1.jpg" /></p>';
				html += '<p><b>Directions for use:</b></p>';
				html += '<p>Use a fine spray bottle for optimum usage. Spray on rubber and vinyl surfaces and gently wipe by a sponge. When spraying is not applicable, spray on sponge and then apply on the surfaces. For external use only and no dilution is needed. Shake well before use.<BR></p>';
				html += '<p><b>Cautions</b></p>';
				html += '<p>Keep it in a cool place and away from children. Avoid its contact with eyes and broken skin.If contact occurs wash with plenty of water and consult a doctor.<BR></p>';
				html += '<HR>';

				html += '<p><b>Glass cleaner</b></p>';
				html += '<p>Glass cleaner removes stains of dirt, greasy and oily substances and thereby makes glass surfaces more shiny and glossy. Its unique preparation lessens any irritation during application. It helps for finished and clean look for all after sale services on glass surfaces.<BR></p>';
				html += '<p align="center"><img class="img-responsive" src="images/web/glasscleaner.jpg" /></p>';
				html += '<p><b>Directions for use:</b></p>';
				html += '<p>Use a fine spray bottle for optimum usage. Spray on glass surfaces and gently wipe by a micro fibre cloth. For external use only and no dilution is needed. Shake well before use.<BR></p>';
				html += '<p><b>Cautions</b></p>';
				html += '<p>Keep it in a cool place and away from children. Avoid its contact with eyes and broken skin.If contact occurs wash with plenty of water and consult a doctor.<BR></p>';
				html += '<HR>';

				html += '<p><b>Interior cleaner</b></p>';
				html += '<p>Interior cleaner removes stains of dirt, greasy and oily substances from car Upholstery, vinyl & plastic surfaces. Its unique preparation lessens any irritation during application.<BR></p>';
				html += '<p align="center"><img class="img-responsive" src="http://www.tediindia.com/images/interior1.jpg" /></p>';
				html += '<p><b>Directions for use:</b></p>';
				html += '<p>Use a measuring bucket for optimum usage. Diluteit in 1: 10 ratio with water. Gently spray & brush up the area. Use absorbing cloth for ?ne wiping. For external use only and dilution is needed. Shake well before use.<BR></p>';
				html += '<p><b>Cautions</b></p>';
				html += '<p>Keep it in a cool place and away from children. Avoid its contact with eyes and broken skin.If contact occurs wash with plenty of water and consult a doctor.<BR></p>';
				html += '<HR>';

				html += '<p><b>Tyre Dresser</b></p>';
				html += '<p>Tyre Dresser makes rubber and vinyl surfaces more shiny and glossy. Water based preparation avoids any corrosion by dresser application.It helps for finished look for all after sale services of all type automobiles.<BR></p>';
				html += '<p align="center"><img class="img-responsive" src="http://www.tediindia.com/images/tyreDresser1.jpg" /></p>';
				html += '<p><b>Directions for use:</b></p>';
				html += '<p>Use a fine spray bottle for optimum usage. Spray on rubber and vinyl surfaces and gently wipe by a sponge. When spraying is not applicable, spray on sponge and then apply on the surfaces. For external use only and no dilution is needed. Shake well before use.<BR></p>';
				html += '<p><b>Cautions</b></p>';
				html += '<p>Keep it in a cool place and away from children. Avoid its contact with eyes and broken skin.If contact occurs wash with plenty of water and consult a doctor.<BR></p>';
				html += '<HR>';
			html += '</div>';
		html += '</div>';
		html += '<div class="row"><div class="col-xs-12" align="center"><button class="btn btn-info" onclick="loadContactForm('+productID+');">Enquiry Product</button></div></div><BR><BR>';
	}
	else if(productID == 5)
	{
		html += '<div class="row"><div class="col-xs-12"><p class="lead redColor">Sun Control Film</p></div></div>';
		html += '<div class="row"><div class="col-xs-12" align="center"><button class="btn btn-info" onclick="loadContactForm('+productID+');">Enquiry Product</button></div></div><BR>';
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
				html += '<p align="center"><img class="img-responsive" src="images/web/3mcrystal.bmp" /></p>';
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
				html += '<p align="center"><img class="img-responsive" src="images/web/3mautomative.jpg" /></p>';
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
		html += '<div class="row"><div class="col-xs-12" align="center"><button class="btn btn-info" onclick="loadContactForm('+productID+');">Enquiry Product</button></div></div><BR><BR>';
	}
	else if(productID == 6)
	{
		html += '<div class="row"><div class="col-xs-12"><p class="lead redColor">Vehicle and Specialty Markings</p></div></div>';
		html += '<div class="row"><div class="col-xs-12" align="center"><button class="btn btn-info" onclick="loadContactForm('+productID+');">Enquiry Product</button></div></div><BR>';
		html += '<div class="row">';
			html += '<div class="col-xs-12">';
				html += '<p><b>3M&#8482; Conspicuity Markings for Truck and Trailers</b></p>';
				html += '<p>3M&#8482; Diamond Grade&#8482; Conspicuity Tape is six times brighter than conventional markings. It is the ideal truck tape to use to meet the DOT regulation. 3M\'s DOT reflective tape is highly durable and non-corroding.</p>';
				html += '<p align="center"><img class="img-responsive" src="images/web/truck2.jpg" /></p>';
				html += '<p><b>Benefits:</b></p>';
				html += '<ul>';
					html += '<li>3M\'s DOT tape is certified and guaranteed to meet and exceed NHTSA requirements</li><BR>';
					html += '<li>Durable - resists weather, dirt and aging</li><BR>';
					html += '<li>Aggressive adhesive</li><BR>';
					html += '<li>Non-corroding</li><BR>';
					html += '<li>Available in two product constructions</li><BR>';
					html += '<li>Series 983 - strong and durable for easy application to smooth surfaces</li><BR>';
					html += '<li>Series 963 - new thin, flexible prismatic for smooth surfaces, and around rivets and corners</li><BR>';
				html += '</ul>';
				html += '<p><b>Suggested Use:</b></p>';
				html += '<ul>';
					html += '<li>Trucks and trailers</li><BR>';
					html += '<li>Waste management</li><BR>';
					html += '<li>Vehicles and bins</li><BR>';
					html += '<li>Utility vehicles</li><BR>';
					html += '<li>Work vehicles</li><BR>';
					html += '<li>Recreational trailers</li><BR>';					
				html += '</ul>';
				html += '<p><b>3M&#8482; Conspicuity Markings for Railcar</b></p>';
				html += '<p>3M&#8482; Diamond Grade&#8482; Rail Car Markings meet and exceed FRA-224 specifications. With superior polycarbonate construction and low-temperature adhesive, these markings are easy to apply, bright and reflect at angles up to 90 degrees.</p>';
				html += '<p align="center"><img class="img-responsive" src="images/web/rail_markings.jpg" /></p>';
				html += '<p><b>Benefits:</b></p>';
				html += '<ul>';
					html += '<li>FRA 224 compliant - vivid yellows and bright whites</li><BR>';
					html += '<li>Durable - resists weather, dirt and aging</li><BR>';
					html += '<li>Aggressive adhesive - adheres to most surfaces</li><BR>';
					html += '<li>Superior customer and technical support</li><BR>';
					html += '<li>Industry-leading warranties</li><BR>';
					html += '<li>Reflects at angles up to 90 degrees</li><BR>';
					html += '<li>Available in two product constructions</li><BR>';
					html += '<li>Superior polycarbonate for smooth surfaces</li><BR>';
					html += '<li>New flexible prismatic for smooth surfaces, and around rivets and corners</li><BR>';
				html += '</ul>';
				html += '<p><b>Suggested Use:</b></p>';
				html += '<ul>';
					html += '<li>Rail car and locomotive markings to meet FRA requirements</li><BR>';							
				html += '</ul>';
				html += '<p><b>3M&#8482; Conspicuity Markings for School Bus</b></p>';
				html += '<p>3M&#8482; Diamond Grade&#8482; Conspicuity Markings for school buses are highly reflective, durable and colorfast and are used to improve the visibility of school buses to approaching drivers.</p>';
				html += '<p align="center"><img class="img-responsive" src="images/web/School.jpg" /></p>';
				html += '<p><b>Benefits:</b></p>';
				html += '<ul>';
					html += '<li>FMVSS and CSA D250 compliant - bright yellow and vivid yellow markings</li><BR>';
					html += '<li>Durable - resists weather, dirt and aging</li><BR>';
					html += '<li>Aggressive adhesive</li><BR>';
					html += '<li>Non-corroding</li><BR>';
					html += '<li>Available in two product constructions</li><BR>';
					html += '<li>Series 983 - strong and durable for smooth surfaces, available in fluorescent yellow for 24-hour visibility</li><BR>';
					html += '<li>Series 973 - new flexible prismatic for around and over rivets and corners </li><BR>';			
				html += '</ul>';
				html += '<p><b>Suggested Use:</b></p>';
				html += '<ul>';
					html += '<li>Stop arms</li><BR>';
					html += '<li>Bumpers</li><BR>';
					html += '<li>Belt line</li><BR>';
					html += '<li>Rear perimeter area</li><BR>';
				html += '</ul>';
				html += '<p><b>3M&#8482; Conspicuity Markings for Marine</b></p>';
				html += '<p>Enhance the visibility of navigational buoys, channel makers, and dayboards with 3M\'s USCGFP Prismatic Sheeting. For long distance visibility during the day or night.</p>';
				html += '<p align="center"><img class="img-responsive" src="images/web/Marine.jpg" /></p>';
				html += '<p><b>3M&#8482; Reflective Markings for Emergency Vehicles</b></p>';
				html += '<p>3M&#8482; Diamond Grade&#8482; Reflective materials exceed NFPA 1901 standard.</p>';
				html += '<p align="center"><img class="img-responsive" src="images/web/actambulance.jpg" /></p>';
				html += '<p><b>NFPA 1901 Standard:</b></p>';
				html += '<ul>';
					html += '<li>To increase highway visibility, at least 50 percent of the rear-facing vertical surface must be covered with 6-inch reflective red and yellow, fluorescent yellow, or fluorescent yellow-green material. The markings must be in a chevron pattern sloping downward from the center of the vehicle at a 45-degree angle.</li><BR>';
					html += '<li>Series 983 Rigid for easy application</li><BR>';
					html += '<li>Series 973 flexible for around corners - bumpers</li><BR>';					
				html += '</ul>';
				html += '<p><b>Suggested Use:</b></p>';
				html += '<ul>';
					html += '<li>Stop arms</li><BR>';
					html += '<li>Bumpers</li><BR>';
					html += '<li>Belt line</li><BR>';
					html += '<li>Rear perimeter area</li><BR>';
				html += '</ul>';
				html += '<p><b>3M&#8482; Emergency and Egress Markings</b></p>';
				html += '<p>Photoluminescent material is a high performance, luminous film used for production of glow-in-the-dark signs in emergency exits and stairwells in buildings, ships, ferries and railcars. Their superior luminosity, high conformability and long-term durability make them an ideal solution for your safety needs.</p>';
				html += '<p align="center"><img class="img-responsive" src="images/web/Egress.jpg" /></p>';
			html += '</div>';
		html += '</div>';
		html += '<div class="row"><div class="col-xs-12" align="center"><button class="btn btn-info" onclick="loadContactForm('+productID+');">Enquiry Product</button></div></div><BR><BR>';
	}
	else if(productID == 7)
	{
		html += '<div class="row"><div class="col-xs-12"><p class="lead redColor">Acrylic Foam Tape</p></div></div>';
		html += '<div class="row"><div class="col-xs-12" align="center"><button class="btn btn-info" onclick="loadContactForm('+productID+');">Enquiry Product</button></div></div><BR>';
		html += '<div class="row">';
			html += '<div class="col-xs-12">';
				html += '<p><b>3M&#8482; Pressure Sensitive Acrylic Foam Tape 5344, Gray, 1.14 mm</b></p>';
				html += '<p>3M&#8482; Pressure Sensitive Acrylic Foam Tape 5344 is a 1.14 mm (0.045 in) thick, gray, double-coated acrylic foam tape commonly used for the attachment of automotive exterior trim parts such as body side moldings.</p>';
				html += '<p align="center"><img class="img-responsive" src="images/web/AFT1.jpg" /></p>';
				html += '<ul>';
					html += '<li>Unique foam core that provides stress relaxation when high application loads are encountered, while maintaining tight bond-line aesthetics under normal conditions.</li><BR>';
					html += '<li>Bonds to a variety of automotive substrates.</li><BR>';
					html += '<li>Provides high final adhesion and peel strength.</li><BR>';
				html += '</ul>';
				html += '<p><b>Key Attributes</b></p>';
				html += '<p>3M AFT 5344 is a medium density foam tape providing a balance of conformability and strength. The acrylic foam core has unique viscoelastic properties that allow it to elongate and relax when put under a load, thereby minimizing stress on the adhesive bond line. 3M AFT 5344 has AR-7 adhesive on the liner side of the product for bonding to automotive paint surfaces, and DS-4 adhesive on the nonlinear side of this product for bonding to the exterior trim part. Since product performance will depend on actual conditions within a specific application, it is essential that the user evaluate the 3M product to determine whether it is fit for a particular material purpose and suitable for the user\'s method of application.</p>';

				html += '<p><b>3M&#8482; Pressure Sensitive Acrylic Foam Tape 5356, Gray, 1.52 mm</b></p>';
				html += '<p>3M&#8482; Pressure Sensitive Acrylic Foam Tape 5356 is a 1.52 mm (0.060 in) thick, gray, double-coated acrylic foam tape used for the attachment of a variety of automotive exterior trim parts.</p>';
				html += '<p align="center"><img class="img-responsive" src="images/web/AFT.jpg" /></p>';
				html += '<ul>';
					html += '<li>Unique foam core that provides stress relaxation when high application loads are encountered, while maintaining tight bond-line aesthetics under normal conditions</li><BR>';
					html += '<li>Bonds to a variety of automotive substrates</li><BR>';
					html += '<li>Provides high final adhesion and peel strength</li><BR>';
				html += '</ul>';
				html += '<p><b>Key Attributes</b></p>';
				html += '<p>3M AFT 5356 is thicker than other acrylic foam tapes and is used where there is greater mismatch between the trim part and the sheet metal of the vehicle. Typical applications for 3M AFT 5356 include attachment of body side moldings, claddings, roof ditch moldings, wheel flares, and tailgate appliques. The acrylic foam core has unique viscoelastic properties that allow it to elongate and relax when put under load, thereby minimizing stress on the adhesive bond line. 3M AFT 5356 has AR-7 adhesive on both sides of the product for a high level of adhesion to both the automotive paint and the exterior trim part. Since product performance will depend on actual conditions within a specific application, it is essential that the user evaluate the 3M product to determine whether it is fit for a particular material purpose and suitable for the user\'s method of application.</p>';
			html += '</div>';
		html += '</div>';
		html += '<div class="row"><div class="col-xs-12" align="center"><button class="btn btn-info" onclick="loadContactForm('+productID+');">Enquiry Product</button></div></div><BR><BR>';
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
				html += '<a href="tel:+1 800 603 6035"><button type="button" class="btn btn-success btn-md"><span class="glyphicon glyphicon-earphone"></span>&nbsp;Call</button></a>&nbsp;';
				html += '<a href="#" onclick="loadContactForm(-1);"><button type="button" class="btn btn-success btn-md"><span class="glyphicon glyphicon-envelope"></span>&nbsp;Email</button></a>';
			html += '</address>';
		html += '</div>';		
	html += '</div>';

	document.getElementById('backButton').style.display = '';
	document.getElementById('hiddenCurrentPageID').value = 5;
	document.getElementById('pageContent').innerHTML = html;
}

function loadContactForm(productID)
{
	var html = '';
	html += '<div class="row">';
		html += '<div class="col-xs-12">';
			html += '<form role="form">';
			  html += '<div class="form-group">';
				html += '<label for="inputName">Name</label>';
				html += '<input type="text" class="form-control" id="inputName" placeholder="Name">';
			  html += '</div>';
			  html += '<div class="form-group">';
				html += '<label for="inputEmail">Email</label>';
				html += '<input type="email" class="form-control" id="inputEmail" placeholder="Email">';
			  html += '</div>';
			  html += '<div class="form-group">';
				html += '<label for="inputMobile">Contact Number</label>';
				html += '<input type="text" class="form-control" id="inputMobile" placeholder="Contact Number">';
			  html += '</div>';
			  html += '<div class="form-group">';
				html += '<label for="inputProducts">Select Products</label>';
				html += '<select id="inputProducts" class="form-control" onchange="selectSubProducts();">';
					html += '<option value="-1">Select Product</option>';
					html += '<option value="1">IND Number Plate</option>';
					html += '<option value="6">Vehicle Conspicuity Tapes</option>';
					html += '<option value="3">Reflective Sign Boards & Sheets</option>';
					html += '<option value="4">Car Polishing products</option>';
					html += '<option value="7">Acrylic Foam Tapes</option>';
					html += '<option value="5">Sun Control Film</option>';
					html += '<option value="2">Traffic Safety Systems</option>';
				html += '</select>';
			  html += '</div>';
			  html += '<div class="form-group" id="divSubProducts" style="display:none">';
				html += '<label for="inputSubProducts" id="labelSubProducts">Select Types</label>';
				html += '<select id="inputSubProducts" class="form-control" multiple>';
				html += '</select>';
			  html += '</div>';
			  html += '<div class="form-group">';
				html += '<label for="inputQty">Quantity</label>';
				html += '<input type="text" class="form-control" id="inputQty" placeholder="Quantity">';
			  html += '</div>';
			  html += '<div class="form-group">';
				html += '<label for="inputMessage">Message</label>';
				html += '<textarea id="inputMessage" placeholder="Message" class="form-control"></textarea>';
			  html += '</div>';
			  html += '<button type="button" class="btn btn-success" onclick="sendEmail();">Send</button>';
			html += '</form>';
		html += '</div>';
	html += '</div>';

	document.getElementById('backButton').style.display = '';
	document.getElementById('hiddenCurrentPageID').value = 8;
	document.getElementById('pageContent').innerHTML = html;

	if(productID > 0) {
		for(i=1; i<=7; i++)
		{
			if(document.getElementById('inputProducts').options[i].value == productID)
			{
				document.getElementById('inputProducts').selectedIndex = i;
				selectSubProducts();
			}
		}
	}
}

function selectSubProducts()
{
	var subProducts;
	var index = document.getElementById('inputProducts').selectedIndex;
	var productID = document.getElementById('inputProducts').options[index].value;
	document.getElementById('divSubProducts').style.display = '';
	if(productID == 1) {
		subProducts = Array('Bike IND', 'Bike IND Blue', 'Car IND', 'Car IND Blue');
	} else if(productID == 6) {
		subProducts = Array('2" Red', '2" White', '2" Yellow', '1" Red', '1" White');
	} else if(productID == 3) {
		subProducts = Array('White', 'Yellow', 'Red', 'Orange', 'Blue', 'Green');
	} else if(productID == 4) {
		subProducts = Array('Tyre Polish - 100 ml', 'Tyre Polish - 200 ml', 'Car Shampoo - 100 ml', 'Car Shampoo - 200 ml', 'Vinyal and Plastic Dresses - 100 ml', 'Vinyal and Plastic Dresses - 200 ml', 'All Purpose Cleaner - 100 ml', 'All Purpose Cleaner - 200 ml', 'Glass Cleaner - 100 ml', 'Glass Cleaner - 200 ml', 'Windscreen washer - 350 ml');
	} else if(productID == 7) {
		subProducts = Array('12mm x 4mm', '24mm x 4mm', '12mm x 10 mm', '24mm x 10 mm');
	} else {
		document.getElementById('divSubProducts').style.display = 'none';
		return false;
	}	
	
	document.getElementById('inputSubProducts').options.length = 0;
	for (var i = 0; i<subProducts.length; i++){
		var opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = subProducts[i];
		document.getElementById('inputSubProducts').appendChild(opt);
	}
}

function sendEmail()
{
	var name = document.getElementById('inputName').value;
	if(name == "") {
		alert("Name can't be empty");
		document.getElementById('inputName').focus();
		return false;
	}
	var email = document.getElementById('inputEmail').value;
	if(email == "") {
		alert("Email can't be empty");
		document.getElementById('inputEmail').focus();
		return false;
	}
	var mobile = document.getElementById('inputMobile').value;
	if(email == "") {
		alert("Mobile number can't be empty");
		document.getElementById('inputMobile').focus();
		return false;
	}
	var index = document.getElementById('inputProducts').selectedIndex;
	if(index == 0) {
		alert('Please select the product');
		return false;
	}
	var productID = document.getElementById('inputProducts').options[index].value;
	var productName = document.getElementById('inputProducts').options[index].text;
	var qty = document.getElementById('inputQty').value;
	var message = "Name: " + name + "%0D%0A";
	message += "Email: " + email + "%0D%0A";
	message += "Contact No. " + mobile + "%0D%0A";
	message += "Product: " + productName + "%0D%0A";
	if(productID == 1 || productID == 3 || productID == 4 || productID == 6 || productID == 7) {
		//var index = document.getElementById('inputSubProducts').selectedIndex;
		oSelect=document.getElementById("inputSubProducts");
		var count=0;
		var type = "";
		for(var i=0;i<oSelect.options.length;i++){
		   if(oSelect.options[i].selected)
			{
				 count++;
				if(type != "") {
					type += ", ";
				}
			   type += document.getElementById('inputSubProducts').options[i].text;
			}
		 }
		if(count < 1) {
			alert('Must select at least one type');
			return false;
		}
		//var type = document.getElementById('inputSubProducts').options[index].text;
		message += "Types: " + type + "%0D%0A";
		message += "Quantity: " + qty + "%0D%0A";
	}
	var msg = document.getElementById('inputMessage').value;
	if(msg == "") {
		alert("Message can't be empty");
		document.getElementById('inputMessage').focus();
		return false;
	}
	message += "Message: " + msg + "%0D%0A";
	document.location.href = "mailto:info@tediindia.com,sktgthill@gmail.com?subject=Enquiry through website&body="+message;
}