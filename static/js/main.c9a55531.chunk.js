(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(6),c=n.n(a),s=n(1),u=n(2),i=n(4),l=n(3),d=(n(12),function(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}),f=function(){return d().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)}))},m=function(){return d().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},p=(n(13),function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.goods;return r.a.createElement("ul",{className:"GoodList"},t.map((function(t){return r.a.createElement("li",{className:"GoodList__item",key:t.id,style:{color:t.color}},t.name)})))}}]),n}(r.a.PureComponent)),h=function(t){var e=t.setGoods,n=t.text;return r.a.createElement("button",{className:"App__button",type:"button",onClick:e},n)},b=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={goods:[]},t.setGoods=function(e){e().then((function(e){t.setState({goods:e})}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.state.goods;return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(h,{text:"All",setGoods:function(){return t.setGoods(d)}}),r.a.createElement(h,{text:"5 First",setGoods:function(){return t.setGoods(f)}}),r.a.createElement(h,{text:"Red",setGoods:function(){return t.setGoods(m)}})),r.a.createElement(p,{goods:e}))}}]),n}(r.a.Component);c.a.render(r.a.createElement(b,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.c9a55531.chunk.js.map