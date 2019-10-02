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
        React.DOM.td({ className: "ItemPrice" }, "цена : ", item.price),
        React.DOM.td({ className: "ItemImage" }, "url : ", item.url),
        React.DOM.td({ className: "ItemBalance" }, "остаток : ", item.balance)
      );
      itemsCode.push(itemCode);
    });
    return React.DOM.div(
      { className: "ShopBlock" },
      React.DOM.div({ className: "Nomination" }, this.props.shopLogo),
      React.DOM.tbody({ className: "Items" }, itemsCode)
    );
  }
});
