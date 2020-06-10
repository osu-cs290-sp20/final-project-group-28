(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['petIndivTemplate'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"pet-name\">\r\n    <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"petName") || (depth0 != null ? lookupProperty(depth0,"petName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"petName","hash":{},"data":data,"loc":{"start":{"line":2,"column":8},"end":{"line":2,"column":19}}}) : helper)))
    + "</h2>\r\n</div>\r\n\r\n<article class=\"pet-profile\">\r\n    <div class=\"profile-image\">\r\n        <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"profilePic") || (depth0 != null ? lookupProperty(depth0,"profilePic") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"profilePic","hash":{},"data":data,"loc":{"start":{"line":7,"column":17},"end":{"line":7,"column":31}}}) : helper)))
    + " alt=\"Picture of small dog\" class=\"pet-image\"/>\r\n    </div>\r\n\r\n  <div class=\"pet-info-wrapper\">\r\n    <div class=\"pet-info\">\r\n        <p class=\"info-title\">\r\n            Species: \r\n        </p>\r\n\r\n        <p class=\"info-text\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"species") || (depth0 != null ? lookupProperty(depth0,"species") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"species","hash":{},"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":17,"column":23}}}) : helper)))
    + "\r\n        </p>\r\n\r\n    </div>\r\n\r\n    <div class=\"pet-info\">\r\n        <p class=\"info-title\">\r\n            Breed: \r\n        </p>\r\n\r\n        <p class=\"info-text\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"breed") || (depth0 != null ? lookupProperty(depth0,"breed") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"breed","hash":{},"data":data,"loc":{"start":{"line":28,"column":12},"end":{"line":28,"column":21}}}) : helper)))
    + "\r\n        </p>\r\n\r\n    </div>\r\n\r\n    <div class=\"pet-info\">\r\n        <p class=\"info-title\">\r\n            Favorite Toy:\r\n        </p>\r\n\r\n        <p class=\"info-text\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"favToy") || (depth0 != null ? lookupProperty(depth0,"favToy") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"favToy","hash":{},"data":data,"loc":{"start":{"line":39,"column":12},"end":{"line":39,"column":22}}}) : helper)))
    + "\r\n        </p>\r\n\r\n    </div>\r\n    </div>\r\n    <div class=\"pet-info-wrapper\">\r\n    <div class=\"pet-info\">\r\n        <p class=\"info-title\">\r\n            Bio: \r\n        </p>\r\n\r\n        <p class=\"info-text\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"bio") || (depth0 != null ? lookupProperty(depth0,"bio") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bio","hash":{},"data":data,"loc":{"start":{"line":51,"column":12},"end":{"line":51,"column":19}}}) : helper)))
    + "\r\n        </p>\r\n\r\n    </div>\r\n    </div>\r\n\r\n</article>\r\n";
},"useData":true});
})();