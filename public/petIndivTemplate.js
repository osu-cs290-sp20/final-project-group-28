(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['petIndivTemplate'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"pet-name\">\n    <h2 id=\"pet-name-text\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"petName") || (depth0 != null ? lookupProperty(depth0,"petName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"petName","hash":{},"data":data,"loc":{"start":{"line":2,"column":27},"end":{"line":2,"column":38}}}) : helper)))
    + "</h2>\n</div>\n<p>\n<button type=\"button\" class=\"adopt-pet-button\" id=\"adopt-pet-button\">Adopt This Pet!</button>\n</p>\n<article class=\"pet-profile\">\n    <div class=\"profile-image\">\n        <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"profilePic") || (depth0 != null ? lookupProperty(depth0,"profilePic") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"profilePic","hash":{},"data":data,"loc":{"start":{"line":9,"column":17},"end":{"line":9,"column":31}}}) : helper)))
    + " alt=\"Picture of small dog\" class=\"pet-image\"/>\n    </div>\n\n  <div class=\"pet-info-wrapper\">\n    <div class=\"pet-info\">\n        <p class=\"info-title\">\n            Species: \n        </p>\n\n        <p class=\"info-text\">\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"species") || (depth0 != null ? lookupProperty(depth0,"species") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"species","hash":{},"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":19,"column":23}}}) : helper)))
    + "\n        </p>\n\n    </div>\n\n    <div class=\"pet-info\">\n        <p class=\"info-title\">\n            Breed: \n        </p>\n\n        <p class=\"info-text\">\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"breed") || (depth0 != null ? lookupProperty(depth0,"breed") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"breed","hash":{},"data":data,"loc":{"start":{"line":30,"column":12},"end":{"line":30,"column":21}}}) : helper)))
    + "\n        </p>\n\n    </div>\n\n    <div class=\"pet-info\">\n        <p class=\"info-title\">\n            Favorite Toy:\n        </p>\n\n        <p class=\"info-text\">\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"favToy") || (depth0 != null ? lookupProperty(depth0,"favToy") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"favToy","hash":{},"data":data,"loc":{"start":{"line":41,"column":12},"end":{"line":41,"column":22}}}) : helper)))
    + "\n        </p>\n\n    </div>\n    </div>\n    <div class=\"pet-info-wrapper\">\n    <div class=\"pet-info\">\n        <p class=\"info-title\">\n            Bio: \n        </p>\n\n        <p class=\"info-text\">\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"bio") || (depth0 != null ? lookupProperty(depth0,"bio") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bio","hash":{},"data":data,"loc":{"start":{"line":53,"column":12},"end":{"line":53,"column":19}}}) : helper)))
    + "\n        </p>\n\n    </div>\n    </div>\n\n</article>\n";
},"useData":true});
})();