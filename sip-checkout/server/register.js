ReactionCore.registerPackage({
  label: "Sip Checkout",
  name: "sip-checkout",
  icon: "fa fa-shopping-cart",
  autoEnable: true,
  settings: {
    name: "Sip Checkout"
  },
  registry: [{
    route: "/cart/checkout",
    name: "cart/checkout",
    workflow: "sipCartWorkflow",
    label: "Checkout",
    template: "sipCartCheckout"
  }, {
    route: "/cart/completed/:_id?",
    name: "cart/completed",
    template: "cartCompleted",
    workflow: "sipCartWorkflow"
  }],
  layout: [{
    layout: "coreLayout",
    workflow: "sipCartWorkflow",
    collection: "Cart",
    theme: "default",
    enabled: true,
    structure: {
      template: "sipCartCheckout",
      layoutHeader: "checkoutHeader",
      layoutFooter: "",
      notFound: "notFound",
      dashboardHeader: "",
      dashboardControls: "dashboardControls",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    }
  }, {
    template: "firstinfo",
    label: "Give Info",
    workflow: "sipCartWorkflow",
    container: "checkout-steps-main",
    audience: ["guest", "anonymous"],
    priority: 1,
    position: "1"
  }, {
    template: "secondinfo",
    label: "Receive Goodies",
    workflow: "sipCartWorkflow",
    container: "checkout-steps-main",
    audience: ["guest", "anonymous"],
    priority: 2,
    position: "2"
  }, {
    template: "checkoutReview",
    label: "Review Payment",
    workflow: "sipCartWorkflow",
    container: "checkout-steps-side",
    audience: ["guest", "anonymous"],
    priority: 3,
    position: "3"
  }, {
    template: "checkoutPayment",
    label: "Complete",
    workflow: "sipCartWorkflow",
    container: "checkout-steps-side",
    audience: ["guest", "anonymous"],
    priority: 4,
    position: "4"
  }]
});
