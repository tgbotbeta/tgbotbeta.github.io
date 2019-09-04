(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['chat_log'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "\n<div style=\"margin-bottom: 10px\">\n <div style=\"font-size: 12px; font-weight: bold; color: #2381CC\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.message : depth0)) != null ? stack1.from : stack1)) != null ? stack1.first_name : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.message : depth0)) != null ? stack1.from : stack1)) != null ? stack1.last_name : stack1), depth0))
    + ":</div>\n <div style=\"font-size: 14px;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.message : depth0)) != null ? stack1.text : stack1), depth0))
    + "</div>\n</div>\n\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.messages : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();