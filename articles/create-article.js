$(document).ready(function(){

$(document).on('click','.create-article-button',function(){
	var create_article_html="";

	create_article_html+="<form id='create-article-form' action='#' method='post' border='0'>";
		create_article_html+="<table class='table table-hover table-responsive table-bordered'>";

			create_article_html+="<tr>";
				create_article_html+="<td>Title</td>";
				create_article_html+="<td><input type='text' name='title' class='form-control' required /></td>";
			create_article_html+="</tr>";

			create_article_html+="<tr>";
				create_article_html+="<td>Body</td>";
				create_article_html+="<td><input type='text' name='body' class='form-control' required /></td>";
			create_article_html+="</tr>";

			create_article_html+="<tr>";
				create_article_html+="<td></td>";
				create_article_html+="<td>";
				create_article_html+="<button type='submit' class='btn btn-info'>";
					create_article_html+="<span class='glyphicon glyphicon-plus'></span>Create Article";
				create_article_html+="</button>";
				create_article_html+="</td>";
			create_article_html+="</tr>";

		create_article_html+="</table>";
	create_article_html+="</form>";

	$("#page-content").html(create_article_html);
	changePageTitle("Create an Article");
});

    // will run if create product form was submitted
$(document).on('submit', '#create-article-form', function(){
    
var form = $("#create-article-form");

    // get form data
var form_data=JSON.stringify(form.serializeObject());
//console.log(form_data);
 console.log(JSON.parse(form_data));

//submit form data to api
$.ajax({
    url: "http://localhost/ArticlesApi/article/create.php",
    type : "POST",
    contentType : 'application/json',
    data : form_data,
    success : function(result) {
        // product was created, go back to products list
        showProducts();
    },
    error: function(xhr, resp, text) {
        // show error to console
        console.log(xhr, resp, text);
    }
});
 // $(this).preventDefault();
 return false;
});
});