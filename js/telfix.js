/*!
 * Telnumlinker plugin jQuery
 * Version 1.2 (11-SEP-2013)
 * @requires jQuery v1.6 or later
 * Examples at: http://www.claridgesbeautyandtanning.co.uk
 * Copyright (c) 2013 Richard Calvert
 * Licensed under the GPL2 license
 *
 */
 
jQuery(document).ready(function() {


/*

Having established that the visitor has a mobile browser... (in telnumlinker.php)
Any element with a class of .mobile_tel will have a link to it's contents wrapped around it.

eg:

Dial this number: <span class="mobile_tel">0208 555 555</span>

will be output as...

Dial this number: <a href="tel:0208 555 555"><span class="mobile_tel">0208 555 555</span></a>

*/


		jQuery('.mobile_tel').wrap(function() {
		return '<a href="' +'tel:' + jQuery(this).text() + '" />';
		});
	

}); // end ready

