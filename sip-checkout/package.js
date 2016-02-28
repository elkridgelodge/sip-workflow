Package.describe({
  summary: "Sip Checkout",
  name: "sip-checkout",
  version: "1.0.0",
  documentation: "README.md"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.2.1");

  // meteor base packages
  api.use("meteor-base");
  api.use("mongo");
  api.use("ecmascript");
  api.use("es5-shim");
  api.use("blaze-html-templates");
  api.use("session");
  api.use("jquery");
  api.use("tracker");

  // meteor add-on packages
  api.use("underscore");
  api.use("logging");
  api.use("reload");
  api.use("random");
  api.use("ejson");
  api.use("check");
  api.use("http");
  api.use("reactive-var");
  api.use("reactive-dict");

  // community packages
  api.use("reactioncommerce:core@0.12.0");
  api.use("ongoworks:bunyan-logger@2.5.0");

  // cart common workflow methods
  api.addFiles("common/methods/workflow.js");
  api.addFiles("common/methods/cart.js");

  // template helpers
  api.addFiles("client/helpers/cart.js", "client");

  // Cart Templates
  api.addFiles("client/templates/cart/cartDrawer/cartDrawer.html", "client");
  api.addFiles("client/templates/cart/cartDrawer/cartDrawer.js", "client");

  api.addFiles("client/templates/cart/cartDrawer/cartItems/cartItems.html", "client");
  api.addFiles("client/templates/cart/cartDrawer/cartItems/cartItems.js", "client");

  api.addFiles("client/templates/cart/cartDrawer/cartSubTotals/cartSubTotals.html", "client");
  api.addFiles("client/templates/cart/cartDrawer/cartSubTotals/cartSubTotals.js", "client");

  api.addFiles("client/templates/cart/cartIcon/cartIcon.html", "client");
  api.addFiles("client/templates/cart/cartIcon/cartIcon.js", "client");

  api.addFiles("client/templates/cart/cartPanel/cartPanel.html", "client");
  api.addFiles("client/templates/cart/cartPanel/cartPanel.js", "client");

  api.addFiles("client/templates/cart/checkout/checkout.html", "client");
  api.addFiles("client/templates/cart/checkout/checkout.js", "client");

  api.addFiles("client/templates/cart/checkout/header/header.html", "client");

  api.addFiles("client/templates/cart/checkout/login/login.html", "client");
  api.addFiles("client/templates/cart/checkout/login/login.js", "client");

  api.addFiles("client/templates/cart/checkout/progressBar/progressBar.html", "client");
  api.addFiles("client/templates/cart/checkout/progressBar/progressBar.js", "client");

  api.addFiles("client/templates/cart/checkout/review/review.html", "client");
  api.addFiles("client/templates/cart/checkout/review/review.js", "client");

  api.addFiles("client/templates/cart/checkout/payment/payment.html", "client");
  api.addFiles("client/templates/cart/checkout/payment/methods/cards.html", "client");
  api.addFiles("client/templates/cart/checkout/payment/methods/cards.js", "client");

  api.addFiles("client/templates/cart/checkout/completed/completed.html", "client");
  api.addFiles("client/templates/cart/checkout/completed/completed.js", "client");

  api.addFiles("client/templates/cart/checkout/shipping/shipping.html", "client");
  api.addFiles("client/templates/cart/checkout/shipping/shipping.js", "client");

  api.addFiles("client/templates/cart/checkout/addressBook/addressBook.html", "client");
  api.addFiles("client/templates/cart/checkout/addressBook/addressBook.js", "client");

  // register package
  api.addFiles("server/register.js", "server");
  // api.addFiles("server/logger.js", "server");


/**
**/

  // making basic sip form work
  api.use("reactive-var");
  api.imply("reactive-var");
  api.use("zardak:soap");
  api.use("http");
  api.imply("http");
  api.use("peerlibrary:xml2js");
  api.imply("peerlibrary:xml2js");
  api.use("mizzao:user-status");
  api.use("mizzao:accounts-testing");

  api.use("cunneen:json-editor")

  api.use("fortawesome:fontawesome")
  api.use("matthew:foundation5-sass")

//  api.addFiles("server/load.js", "server")
//  api.addFiles("server/register.js", "server");
//  api.addAssets("private/data/Products.json", "server")
//  api.addAssets("private/data/Shops.json", "server")
//  api.addAssets("private/data/Tags.json", "server")

  // admin
  api.addFiles("client/admin/admin.html", "client")

  // checkout workflow
  api.addFiles("client/firstinfo.html", "client")
  api.addFiles("client/firstinfo.js", "client")
  api.addFiles("client/nextbutton.html", "client")
  api.addFiles("client/nextbutton.js", "client")
  api.addFiles("client/payment.html", "client")
  api.addFiles("client/progressBar.html", "client")
  api.addFiles("client/progressBar.js", "client")
  api.addFiles("client/review.html", "client")
  api.addFiles("client/review.js", "client")
  api.addFiles("client/secondinfo.html", "client")
  api.addFiles("client/secondinfo.js", "client")
  api.addFiles("client/sipCartCheckout.html", "client")
  api.addFiles("client/sipCartCheckout.js", "client")

  api.addFiles("client/template-overrides.js", "client")

//  api.addFiles("common/router.js", ["client", "server"])
  api.addFiles("server/sipserver.js", "server")

  // call center
  api.addFiles("client/admin/callcenter/jsoninspector.html", "client")
  api.addFiles("client/admin/callcenter/jsoninspector.js", "client")
  api.addFiles("client/admin/callcenter/callcenterdashboard.html", "client")
  api.addFiles("client/admin/callcenter/callcenterdashboard.js", "client")
  api.addFiles("client/admin/callcenter/callcenteridle.js", "client")
  api.addFiles("server/pubperm.js", "server")
//  api.addFiles("client/main.scss", "client")
});


/**
**/


