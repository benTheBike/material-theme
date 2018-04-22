var tagsHidden;
var categoriesHidden;

$(document).ready(function() {
    console.log("Page loaded");

    // To avoid flickering and to make toggling easier
    $("#tags-list").hide();
    $("#categories-list").hide();
    $("#tags-list").css("visibility", "visible");
    $("#categories-list").css("visibility", "visible");
    
    tagsHidden = true;
    categoriesHidden = true;

    // Initialize syntax highlighting
    $(".highlight").each(function(i, codeblock) {
        hljs.highlightBlock(codeblock);
        console.log("Highlighted codeblock #" + i);
    });
});

function showTags() {
    if (tagsHidden) {
        $("#tags-list").show("fast");
        tagsHidden = false;
    } else {
        $("#tags-list").hide("fast");
        tagsHidden = true;
    }
}

function showCategories() {
    if (categoriesHidden) {
        $("#categories-list").show("fast");
        categoriesHidden = false;
    } else {
        $("#categories-list").hide("fast");
        categoriesHidden = true;
    }
}

function copyLink() {
    // @TODO: add a copy link to clipboard in _partials/share.ejs
}