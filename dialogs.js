window.dialog = function(title, content) {
  if ($("#dialog").is(":visible")) {
    $("#dialog").html(content);
    $("span.ui-dialog-title").html(title);
  } else {
    $("#dialog").remove();
    $("body").append("<div id=\"dialog\" title=\"" + title + "\">\n" + content + "</div>");
    $("#dialog").dialog({width: 500});
  }
}

window.explain = function(id) {
  var div = $("#html-" + id);
  if (div.length != 0) {
    var header = div.find("h2");
    var title = header.html();
    var description = "";
    header.siblings().each(function(index) {
      description = description + $(this).clone().wrap("<p>").parent().html();
    });
    dialog(title, description);
  }
  return true;
}
