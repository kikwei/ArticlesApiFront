$(document).ready(function(){

	showArticlesPage();

});

$(document).on('click','.read-articles-button',function(){
	showArticlesPage();
});


function showArticlesPage()
{
	var json_url ="http://localhost/ArticlesApi/article/read.php";

	$.getJSON(json_url,function(data){
		        // html for listing products
        readArticlesTemplate(data,"");

                // chage page title
        changePageTitle("Read the Fucking Articles");
	});
}