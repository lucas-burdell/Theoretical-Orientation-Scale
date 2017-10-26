(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['question'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"questiondiv\" id=\"question"
    + alias4(((helper = (helper = helpers.question_number || (depth0 != null ? depth0.question_number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question_number","hash":{},"data":data}) : helper)))
    + "\">\r\n<h4><strong>"
    + alias4(((helper = (helper = helpers.question_title || (depth0 != null ? depth0.question_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question_title","hash":{},"data":data}) : helper)))
    + "</strong></h4>\r\n<p class=\"text\">"
    + alias4(((helper = (helper = helpers.question_text || (depth0 != null ? depth0.question_text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question_text","hash":{},"data":data}) : helper)))
    + "</p>\r\n<div class=\"questiondiv2\" id=\"question"
    + alias4(((helper = (helper = helpers.question_number || (depth0 != null ? depth0.question_number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question_number","hash":{},"data":data}) : helper)))
    + "buttons\">\r\n<a class=\"btn btn-default\" id=\"question"
    + alias4(((helper = (helper = helpers.question_number || (depth0 != null ? depth0.question_number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question_number","hash":{},"data":data}) : helper)))
    + "-option1\">strongly disagree</a>\r\n<a class=\"btn btn-default\" id=\"question"
    + alias4(((helper = (helper = helpers.question_number || (depth0 != null ? depth0.question_number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question_number","hash":{},"data":data}) : helper)))
    + "-option2\">disagree</a>\r\n<a class=\"btn btn-default\"  id=\"question"
    + alias4(((helper = (helper = helpers.question_number || (depth0 != null ? depth0.question_number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question_number","hash":{},"data":data}) : helper)))
    + "-option3\">slightly disagree</a>\r\n<a class=\"btn btn-default\"  id=\"question"
    + alias4(((helper = (helper = helpers.question_number || (depth0 != null ? depth0.question_number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question_number","hash":{},"data":data}) : helper)))
    + "-option4\">neutral</a>\r\n<a class=\"btn btn-default\"  id=\"question"
    + alias4(((helper = (helper = helpers.question_number || (depth0 != null ? depth0.question_number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question_number","hash":{},"data":data}) : helper)))
    + "-option5\">slightly agree</a>\r\n<a class=\"btn btn-default\" id=\"question"
    + alias4(((helper = (helper = helpers.question_number || (depth0 != null ? depth0.question_number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question_number","hash":{},"data":data}) : helper)))
    + "-option6\">agree</a>\r\n<a class=\"btn btn-default\" id=\"question"
    + alias4(((helper = (helper = helpers.question_number || (depth0 != null ? depth0.question_number : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"question_number","hash":{},"data":data}) : helper)))
    + "-option7\">strongly agree</a>\r\n</div>\r\n</div>";
},"useData":true});
})();