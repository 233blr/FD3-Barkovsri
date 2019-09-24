var ShopBlock = React.createClass({

  displayName: 'ShopBlock',

  getDefaultProps: function() {
    return { shopLogo: "Default Name" }
  },

  render: function() {

    var itemsCode=[];
    this.props.catalog.forEach(function(item) {
      var itemCode=React.DOM.div({key:item.id,className:'Item'},
          React.DOM.h4({className:'ItemTitle'},item.title),
          React.DOM.p({className:'ItemPrice'},'цена : ',item.price),
          React.DOM.img({className:'ItemImage', src:(item.url)}),
          React.DOM.p({className:'ItemBalance'},'остаток : ',item.balance),
        );
      itemsCode.push(itemCode);
})
    return React.DOM.div( {className:'ShopBlock'}, 
      React.DOM.div( {className:'Nomination'}, this.props.shopLogo),
      React.DOM.div( {className:'Items'}, itemsCode),
    );
  },

});