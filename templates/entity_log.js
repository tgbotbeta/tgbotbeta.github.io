(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['entity_log'] = template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),blockParams[0][0],{"name":"each","hash":{},"fn":container.program(2, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "	\n	<div style=\"padding: 10px; border-bottom: 1px solid #CCC\">\n	 <div>\n	 	<span style=\"font-size: 14px; font-weight: bold; color: #666; font-size: 14px\">Entity:</span> \n	 	<span style=\"font-style: italic; color: #333; font-weight: bold; font-size: 16px; \">"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.name : stack1), depth0))
    + "</span></div>\n	 <div style=\"font-size: 14px;\"><span style=\"font-weight: bold; color: #666;\"\">Type</span>: "
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.type : stack1), depth0))
    + "</div>\n	</div>\n\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.entities : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"useData":true,"useBlockParams":true});
})();