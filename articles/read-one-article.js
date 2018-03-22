$(document).ready(function(){

$(document).on('click', '.read-one-article-button', function(){

	        // get article id
var id = $(this).attr('data-id');


   // read article record based on given ID
$.getJSON("http://localhost/ArticlesApi/article/read-one.php?id=" +  id, function(data){
    

    // start html
var read_one_article_html="";
 
// when clicked, it will show the article's list
read_one_article_html+="<div id='read-articles' class='btn btn-primary pull-right m-b-15px read-articles-button'>";
    read_one_article_html+="<span class='glyphicon glyphicon-list'></span> Read Articles";
read_one_article_html+="</div>";

// article data will be shown in this table
read_one_article_html+="<table class='table table-bordered table-hover'>";
 
    // article name
    read_one_article_html+="<tr>";
        read_one_article_html+="<td class='w-30-pct'>Id</td>";
        read_one_article_html+="<td class='w-70-pct'>" + data.id + "</td>";
    read_one_article_html+="</tr>";
 
    // article price
    read_one_article_html+="<tr>";
        read_one_article_html+="<td>Title</td>";
        read_one_article_html+="<td>" + data.title + "</td>";
    read_one_article_html+="</tr>";
 
    // article description
    read_one_article_html+="<tr>";
        read_one_article_html+="<td>Body</td>";
        read_one_article_html+="<td>" + data.body + "</td>";
    read_one_article_html+="</tr>";
 
    // article category name
    read_one_article_html+="<tr>";
        read_one_article_html+="<td>Created At</td>";
        read_one_article_html+="<td>" + data.created + "</td>";
    read_one_article_html+="</tr>";
 
read_one_article_html+="</table>";

// inject html to 'page-content' of our app
$("#page-content").html(read_one_article_html);
 
// chage page title
changePageTitle("Read Single Article");
});

    });
});