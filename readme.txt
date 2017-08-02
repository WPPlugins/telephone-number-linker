=== Telephone Number Linker ===
Contributors: stoatoffear
Donate link: http://www.gravitydesign.co.uk/paypal
Tags: mobile telephony, mobile device, telephone, phone, smartphone, mobile, apps, dial

Requires at least: 3.0
Tested up to: 3.6
Stable tag: 1.2
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

== Description ==
Some mobile devices make numbers clickable by default - but not all do. You want your phone numbers to be clickable for mobile phone users don't you? They click the number and it dials it for them! great! But when desktop users click it - they normally get an error, and that makes your site look stupid. This plugin prevents that error - improving user experience for your desktop visitors and mobile device users.

= Telephone Number Linker Features =

Uses up-to-date list of browsers to detect that the visitor is using a mobile device.
Alternatively uses wp_is_mobile() Wordpress feature
In that case loads a jQuery script to enclose the telephone number in a link.
Or uses shortcode to add HTML via PHP

= About the Author =

Stoatoffear is mostly a graphic and fine artist but likes to keep up to date with web technology.
Please visit www.gravitydesign.co.uk for your web and graphic design needs.
Visit www.richardcalvert.com for fine art.

== Installation ==

= WordPress 3.0 and Above =

1. Upload to the `/wp-content/plugins` directory
2. Activate
3. Use shortcode `[telnumlink]` to enclose your phone number eg: `[telnumlink]123456789[/telnumlink]`
4. Or use shortcode to enclose HTML eg: `[telnumlink "123456789"]<p>Call us today!</p><img src="phone.jpg"/>[/telnumlink]`
5. Alternatively a CSS class of mobile_tel to any element you want to become available as a clickable link for mobile devices.
6. Using shortcode is better.

You can use the shortcode like this:

Dial this number: `[telnumlink]0208 555 555[/telnumlink]`

And mobiles will output a clickable number:

Dial this number: `<a href="tel:0208 555 555">0208 555 555</a>`

Desktops will output just the text:

Dial this number: 0208 555 555

----

You can also enclose any text (or HTML) in shortcode and make it into a telephone link.
Add the number in double quote marks inside the opening shortcode tag:

`[telnumlink "0208 555 555"]Dial this number now to get through to one of our operators: 0208 555 555[/telnumlink]`

Mobiles will output a link:

`a href="tel:0208 555 555">Dial this number now to get through to one of our operators: 0208 555 555</a>`

Desktops will output no link:

Dial this number now to get through to one of our operators: 0208 555 555

----

Using a CSS class:

If you want to use a CSS class to create a link - in your Wordpress edit page you might enter:

Dial this number: `<span class="mobile_tel">0208 555 555</span>`

And where a mobile browser is detected this will be output as a link…

Dial this number: `<a href="tel:0208 555 555"><span class="mobile_tel">0208 555 555</span></a>`

Desktops will output a span with no link:

Dial this number: `<span class="mobile_tel">0208 555 555</span>`


Feel free to suggest changes / improvements to this plugin.

== Changelog ==

= 1.2 =
* Added shortcode capability.
* Include new way to detect mobile devices - wp_is_mobile() - my original method seems more thorough so I'm not sure which is best.

== Upgrade Notice ==

= 1.2 =
Upgrade to start using shortcodes `[telnumlink]mynumber[/telnumlink]`

= 1.1 =
* Fixed problem with javascript not being loaded in some cases.
* Improved effectiveness of the way a mobile device is detected.

== Upgrade Notice ==

= 1.1 =
Fixes a bug where Javascript wasn't loading in some cases. Upgrade immediately.

== Demo ==

See this plugin in action at http://www.claridgesbeautyandtanning.co.uk