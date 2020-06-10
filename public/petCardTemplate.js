(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['petCardTemplate'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"pet-card\">\n    <div class=\"pet-name\">\n        <h3 class=\"pet-name\"><a href=\"/pets/"
    + alias4(((helper = (helper = lookupProperty(helpers,"petName") || (depth0 != null ? lookupProperty(depth0,"petName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"petName","hash":{},"data":data,"loc":{"start":{"line":3,"column":44},"end":{"line":3,"column":55}}}) : helper)))
    + "\" , class=\"pet-profile-link\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"petName") || (depth0 != null ? lookupProperty(depth0,"petName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"petName","hash":{},"data":data,"loc":{"start":{"line":3,"column":84},"end":{"line":3,"column":95}}}) : helper)))
    + "</a></h3>\n    </div>\n\n    <article class=\"pet-profile\">\n        <div class=\"profile-image\">\n            <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"profilePic") || (depth0 != null ? lookupProperty(depth0,"profilePic") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"profilePic","hash":{},"data":data,"loc":{"start":{"line":8,"column":21},"end":{"line":8,"column":35}}}) : helper)))
    + " alt=\"Picture of small dog\" class=\"pet-card-image\" />\n        </div>\n\n    </article>\n</div>";
},"useData":true});
})();