(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['petCardTemplate'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"pet-name\">\n    <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"petName") || (depth0 != null ? lookupProperty(depth0,"petName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"petName","hash":{},"data":data,"loc":{"start":{"line":2,"column":8},"end":{"line":2,"column":19}}}) : helper)))
    + "</h2>\n</div>\n\n<article class=\"pet-profile\">\n    <div class=\"profile-image\">\n        <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"profilePic") || (depth0 != null ? lookupProperty(depth0,"profilePic") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"profilePic","hash":{},"data":data,"loc":{"start":{"line":7,"column":17},"end":{"line":7,"column":31}}}) : helper)))
    + "/>\n    </div>\n\n</article>\n";
},"useData":true});
})();