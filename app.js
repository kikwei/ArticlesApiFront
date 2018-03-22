$(document).ready(function(){
	app_html="";

	app_html += "<div class='container'>";

		app_html += "<div class='page-header'>";
			app_html += "<h3 class='page-title'>Articles</h3>";
		app_html += "</div>";


		// this is where the contents will be shown.
        app_html+="<div id='page-content'></div>";

	app_html +="</div>";

	$('#app').html(app_html);

});


// change page title
function changePageTitle(page_title){
 
    // change page title
    $('.page-title').text(page_title);
 
    // change title tag
    document.title=page_title;
}