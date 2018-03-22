$(document).ready(function(){

	//respond to update article button click
	$(document).on("click",".update-article-button", function(){

	// get product id
	var id = $(this).attr('data-id');

	//read the article
	$.getJSON("http://localhost/ArticlesApi/article/read-one.php?id=" + id, function(data){
		var title = data.title;
		var body = data.body;

		var update_article_html = "";

		//Read all articles button

		update_article_html += "<div id='read-articles' class='btn btn-primary pull-right m-b-15px read-articles-button'>";
        update_article_html += "<span class='glyphicon glyphicon-list'></span> Read Articles";
        update_article_html += "</div>";

        //form
        update_article_html += "<form id='update-article-form' action='#' method='post' border='0'>";

        	update_article_html += "<table class='table table-responsive table-bordered table-hover'>";

        		update_article_html += "<tr>";
        			update_article_html += "<td>Title</td>";
        			update_article_html += "<td>";
        				update_article_html += "<input type='text' class='form-control' value=\"" + title + "\" name='title' required/>";
        			update_article_html += "</td>";
        		update_article_html += "</tr>";

        		update_article_html += "<tr>";
        			update_article_html += "<td>Body</td>";
        			update_article_html += "<td>";
        				update_article_html += "<input type='text' class='form-control' value=\"" + body + "\" name='body' required/>";
        			update_article_html += "</td>";
        		update_article_html += "</tr>";

        		update_article_html += "<tr>";
        			update_article_html += "<td></td>";
        			update_article_html += "<td>";
        				update_article_html += "<button type='submit' class='btn btn-info'>";
        					update_article_html += "<span class='glyphicon glyphicon-edit'> Update Article";
        				update_article_html += "</button>";
        			update_article_html += "</td>";
        		update_article_html += "</tr>";

        	update_article_html += "</table>";

        update_article_html += "</form>";

        $("#page-content").html(update_article_html);
        changePageTitle("Update Article");
	});
	});

	$(document).on('submit','#update-article-form', function(){
        var form = $("#update-article-form");

		//get form data
		var form_data = JSON.stringify(form.serializeObject());
        alert(form_data);

		//submit form data to api
		// $.ajax({
		// 	url : "http://localhost/ArticlesApi/article/update.php",
		// 	type : "post",
		// 	contentType : "application/json",
		// 	data : form_data,

		// 	success : function(result){
		// 		showArticles();
		// 	},
		// 	error: function(xhr, resp, text) {
  //       	// show error to console
  //       		console.log(xhr, resp, text);
  //   		}
		// });
		// return false;
	});

});