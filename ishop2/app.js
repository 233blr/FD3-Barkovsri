var ShopBlock = React.createClass({
  displayName: "ShopBlock",

  getDefaultProps: function() {
    return { shopLogo: "Default Name" };
  },

  render: function() {
    var itemsCode = [];
    this.props.catalog.forEach(function(item) {
      var itemCode = React.DOM.tr(
        { key: item.id, className: "Item" },
        React.DOM.td({ className: "ItemTitle" }, item.title),
        React.DOM.td({ className: "ItemPrice" }, item.price),
        React.DOM.td({ className: "ItemImage" }, item.url),
        React.DOM.td({ className: "ItemBalance" }, item.balance)
      );
      itemsCode.push(itemCode);
    });
    return React.DOM.table(
      { className: "ShopBlock" },
      React.DOM.tr({ className: "Nomination" }, this.props.shopLogo),
      React.DOM.tbody({ className: "Items" }, itemsCode)
    );
  }
});
