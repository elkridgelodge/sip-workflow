Package.describe({
  summary: "Sip Checkout Data",
  name: "sip-checkout-data",
  version: "0.1.2",
  documentation: "README.md"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.2.1");

  // reaction core
  api.use("reactioncommerce:core@0.12.0");

  // load fixture data
  api.addFiles("server/load.js", "server");

  // Private fixture data
  api.addAssets("private/data/Products.json", "server");
  api.addAssets("private/data/Shops.json", "server");
  api.addAssets("private/data/Tags.json", "server");
});
