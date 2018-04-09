// article list html
function readArticlesTemplate(data, keywords){
 
    var read_articles_html="";
 
    // search products form
    read_articles_html+="<form id='search-article-form' action='#' method='post'>";
    read_articles_html+="<div class='input-group pull-left w-30-pct'>";
 
        read_articles_html+="<input type='text' value=\"" + keywords + "\" name='keywords' class='form-control article-search-keywords' placeholder='Search products...' />";
 
        read_articles_html+="<span class='input-group-btn'>";
            read_articles_html+="<button type='submit' class='btn btn-default' type='button'>";
               read_articles_html+="<span class='glyphicon glyphicon-search'></span>";
            read_articles_html+="</button>";
        read_articles_html+="</span>";
 
    read_articles_html+="</div>";
    read_articles_html+="</form>";
 
    // when clicked, it will load the create article form
    read_articles_html+="<div id='create-article' class='btn btn-primary pull-right m-b-15px create-article-button'>";
        read_articles_html+="<span class='glyphicon glyphicon-plus'></span> Create Article";
    read_articles_html+="</div>";
 
    // start table
    read_articles_html+="<table class='table table-bordered table-hover'>";
 
        // creating our table heading
        read_articles_html+="<tr>";
            read_articles_html+="<th class='w-25-pct'>Id</th>";
            read_articles_html+="<th class='w-10-pct'>Title</th>";
            read_articles_html+="<th class='w-15-pct'>Body</th>";
            read_articles_html+="<th class='w-15-pct'>Created</th>";
            read_articles_html+="<th class='w-25-pct text-align-center'>Action</th>";
        read_articles_html+="</tr>";

        console.log(data)
 console.log(data.details[0]);
    // loop through returned list of data
    $.each(data.details, function(key, val) {

    
        // creating new table row per record
        read_articles_html+="<tr>";
 
            read_articles_html+="<td>" + val.id + "</td>";
            read_articles_html+="<td>" + val.title + "</td>";
            read_articles_html+="<td>" + val.body + "</td>";
            read_articles_html+="<td>" + val.created + "</td>";

 
            // 'action' buttons
            read_articles_html+="<td>";
                // read article button
                read_articles_html+="<button class='btn btn-primary m-r-10px read-one-article-button' data-id='" + val.id + "'>";
                    read_articles_html+="<span class='glyphicon glyphicon-eye-open'></span> Read";
                read_articles_html+="</button>";
 
                // edit button
                read_articles_html+="<button class='btn btn-info m-r-10px update-article-button' data-id='" + val.id + "'>";
                    read_articles_html+="<span class='glyphicon glyphicon-edit'></span> Edit";
                read_articles_html+="</button>";
 
                // delete button
                read_articles_html+="<button class='btn btn-danger delete-article-button' data-id='" + val.id + "'>";
                    read_articles_html+="<span class='glyphicon glyphicon-remove'></span> Delete";
                read_articles_html+="</button>";
            read_articles_html+="</td>";
 
        read_articles_html+="</tr>";
 
    });
 
    // end table
    read_articles_html+="</table>";

        // inject to 'page-content' of our app
    $("#page-content").html(read_articles_html);

}