(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,n,t){e.exports=t(38)},24:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(7),i=t.n(l),c=(t(24),t(1)),o=t(2),u=t(3),s={1:1,0:0,2:-1},m="not_started",f="mode_selected",p="in_progress",d="started",b="over",h={AI:"difficult",Friend:"Friend"},v=t(14),x=function e(n){var t=this;Object(v.a)(this,e),this.makeMove=function(e,n){null===t.grid[e]&&(t.grid[e]=n)},this.getEmptySquares=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.grid,n=[];return e.forEach(function(e,t){null===e&&n.push(t)}),n},this.isEmpty=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.grid;return t.getEmptySquares(e).length===Math.pow(3,2)},this.getWinner=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.grid,n=null;return[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].forEach(function(a,r){null!==e[a[0]]&&e[a[0]]===e[a[1]]&&e[a[0]]===e[a[2]]?(n=e[a[0]],t.winningIndex=r):null===n&&0===t.getEmptySquares(e).length&&(n=0,t.winningIndex=null)}),n},this.getStrikethroughStyles=function(){switch(t.winningIndex){case 0:return"\n          transform: none;\n          top: 41px;\n          left: 15px;\n          width: ".concat(285,"px;\n        ");case 1:return"\n          transform: none;\n          top: 140px;\n          left: 15px;\n          width: ".concat(285,"px;\n        ");case 2:return"\n          transform: none;\n          top: 242px;\n          left: 15px;\n          width: ".concat(285,"px;\n        ");case 3:return"\n          transform: rotate(90deg);\n          top: 145px;\n          left: -86px;\n          width: ".concat(285,"px;\n        ");case 4:return"\n          transform: rotate(90deg);\n          top: 145px;\n          left: 15px;\n          width: ".concat(285,"px;\n        ");case 5:return"\n          transform: rotate(90deg);\n          top: 145px;\n          left: 115px;\n          width: ".concat(285,"px;\n        ");case 6:return"\n          transform: rotate(45deg);\n          top: 145px;\n          left: -44px;\n          width: ".concat(400,"px;\n        ");case 7:return"\n          transform: rotate(-45deg);\n          top: 145px;\n          left: -46px;\n          width: ".concat(400,"px;\n        ");default:return null}},this.clone=function(){return new e(t.grid.concat())},this.grid=n||new Array(Math.pow(3,2)).fill(null),this.winningIndex=null},y=function(e){return 1===e?2:1},g=function(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1))+e},E=function e(n,t){var a,r=s[String(t)],l=-1,i=null;if(null!==n.getWinner())return[s[n.getWinner()],0];var c=!0,o=!1,u=void 0;try{for(var m,f=n.getEmptySquares()[Symbol.iterator]();!(c=(m=f.next()).done);c=!0){var p=m.value,d=n.clone();d.makeMove(p,t),(a=r*e(d,y(t))[0])>=l&&(l=a,i=p)}}catch(b){o=!0,u=b}finally{try{c||null==f.return||f.return()}finally{if(o)throw u}}return[r*l,i]},w=t(4),O=t.n(w);function j(){var e=Object(c.a)(["\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  border: 2px solid #41403e;\n"]);return j=function(){return e},e}var k=Object(o.a)(j());function _(){var e=Object(c.a)(["\n  font-size: 16px;\n"]);return _=function(){return e},e}function N(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex: 0 0 auto;\n  width: 100%;\n"]);return N=function(){return e},e}function S(){var e=Object(c.a)(["\n  flex: 1 1 auto;\n  text-align: center;\n"]);return S=function(){return e},e}function C(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  font-size: 24px;\n  font-weight: bold;\n  text-transform: uppercase;\n"]);return C=function(){return e},e}function F(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 24px;\n  background-color: #fff;\n  max-height: 100%;\n  height: 100%;\n  align-items: center;\n  backface-visibility: hidden;\n  padding: 1.25rem;\n  ",";\n"]);return F=function(){return e},e}function I(){var e=Object(c.a)(["\n  height: 300px;\n  position: relative;\n  margin: 0 auto;\n  top: 10%;\n  right: auto;\n  bottom: auto;\n  width: 320px;\n  outline: none;\n  display: flex;\n  flex-direction: column;\n"]);return I=function(){return e},e}var M={overlay:{backgroundColor:"rgba(0,0,0, 0.6)"}},P=function(e){var n=e.isOpen,t=e.close,a=e.startNewGame,l=e.winner;return r.a.createElement(q,{isOpen:n,onRequestClose:t,style:M,ariaHideApp:!1},r.a.createElement(A,null,r.a.createElement(T,null,"Game over"),r.a.createElement(X,null,l),r.a.createElement(W,null,r.a.createElement(z,{onClick:t},"Close"),r.a.createElement(z,{onClick:a},"Start over"))))},q=Object(o.b)(O.a)(I()),A=o.b.div(F(),k),T=o.b.p(C()),X=o.b.p(S());X.displayName="ModalContent";var W=o.b.div(N()),z=o.b.button(_());function G(){var e=Object(c.a)(["\n  position: absolute;\n  ","\n  background-color: indianred;\n  height: 5px;\n  width: ",";\n"]);return G=function(){return e},e}function B(){var e=Object(c.a)([""]);return B=function(){return e},e}function J(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 30px;\n"]);return J=function(){return e},e}function H(){var e=Object(c.a)([""]);return H=function(){return e},e}function R(){var e=Object(c.a)(["\n  display: flex;\n  width: 150px;\n  justify-content: space-between;\n"]);return R=function(){return e},e}function $(){var e=Object(c.a)(["\n  font-size: 68px;\n"]);return $=function(){return e},e}function D(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ","px;\n  height: ","px;\n  ",";\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return D=function(){return e},e}function K(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  width: ",";\n  flex-flow: wrap;\n  position: relative;\n"]);return K=function(){return e},e}var L=new Array(Math.pow(3,2)).fill(null),Q=new x,U=0,V=0,Y=!1,Z=o.b.div(K(),function(e){var n=e.dims;return"".concat(105*n,"px")}),ee=o.b.div(D(),100,100,k);ee.displayName="Square";var ne=o.b.div($()),te=o.b.div(R()),ae=o.b.div(H()),re=o.b.div(J()),le=o.b.p(B()),ie=o.b.div(G(),function(e){return e.styles},function(e){return!e.styles&&"0px"}),ce=function(e){var n=e.squares,t=void 0===n?L:n,l=Object(a.useState)({human:null,computer:null,Friend:null}),i=Object(u.a)(l,2),c=i[0],o=i[1],s=Object(a.useState)(m),v=Object(u.a)(s,2),w=v[0],O=v[1],j=Object(a.useState)(t),k=Object(u.a)(j,2),_=k[0],N=k[1],S=Object(a.useState)(null),C=Object(u.a)(S,2),F=C[0],I=C[1],M=Object(a.useState)(null),q=Object(u.a)(M,2),A=q[0],T=q[1],X=Object(a.useState)(!1),W=Object(u.a)(X,2),z=W[0],G=W[1],B=Object(a.useState)("Friend"),J=Object(u.a)(B,2),H=J[0],R=J[1],$=Object(a.useState)({player_1:""}),D=Object(u.a)($,2),K=D[0],ce=D[1],oe=Object(a.useState)({player_2:""}),ue=Object(u.a)(oe,2),se=ue[0],me=ue[1];Object(a.useEffect)(function(){var e=Q.getWinner(_);null!==e&&w!==b&&function(e){var n;switch(e){case 1:n="Player X wins!";break;case 2:n="Player O wins!";break;case 0:default:n="It's a draw"}O(b),I(n),setTimeout(function(){return G(!0)},300)}(e)},[w,_,A]);var fe=Object(a.useCallback)(function(e,n){n&&w===p&&N(function(t){var a=t.concat();return a[e]=n,a})},[w]),pe=Object(a.useCallback)(function(){var e,n=new x(_.concat()),t=n.getEmptySquares(_);switch(H){case h.easy:do{e=g(0,8)}while(!t.includes(e));break;case h.medium:if(!n.isEmpty(_)&&Math.random()<.5)e=E(n,c.computer)[1];else do{e=g(0,8)}while(!t.includes(e));break;case h.difficult:default:e=n.isEmpty(_)?g(0,8):E(n,c.computer)[1]}_[e]||(fe(e,c.computer),T(c.human))},[fe,_,c,H]);Object(a.useEffect)(function(){var e;return null!==A&&A===c.computer&&w!==b&&(e=setTimeout(function(){pe()},500)),function(){return e&&clearTimeout(e)}},[A,pe,c.computer,w]);var de=function(e){Y=2===e,"Friend"!==H?(o({human:e,computer:y(e)}),me({player_2:"AI"})):(o({human:e,Friend:y(e)}),me({player_2:""})),O(d),T(1)},be=function(e){R(e.target.value),O(f)};return w===m?r.a.createElement(ae,null,r.a.createElement("h2",null,"Tic Tac Toe"),r.a.createElement("span",{id:"x",className:"header-x-image"},"X"),r.a.createElement("div",{className:"outer header-image"},r.a.createElement("div",{className:"inner"},"\xa0")),r.a.createElement(re,null,r.a.createElement(le,null,r.a.createElement("strong",null,"Choose you play mode")),Object.keys(h).map(function(e){var n=h[e];return r.a.createElement("button",{id:e,onClick:be,key:n,value:n},e)}))):w===f?r.a.createElement(re,null,r.a.createElement(le,null,r.a.createElement("strong",null,"Pick your side")),r.a.createElement(te,null,r.a.createElement("button",{id:"X",onClick:function(){return de(1)}},r.a.createElement("span",{id:"x",className:"header-x-image-box"},"X")),r.a.createElement("p",{id:"or"},"or"),r.a.createElement("button",{id:"O",onClick:function(){return de(2)}},r.a.createElement("div",{className:"outer-box"},r.a.createElement("div",{className:"inner-box"},"\xa0")," ")," "))):w===d?r.a.createElement("form",{className:"showFormPlayerInput"},r.a.createElement("label",null,"Player 1:",r.a.createElement("input",{type:"text",id:"player_1",name:"player_1",placeholder:"Player X...",onChange:function(e){var n=e.target.value;ce({player_1:n})}})),r.a.createElement("label",null,"Player 2:",r.a.createElement("input",{type:"text",id:"player_2",name:"player_2",placeholder:"AI"===se.player_2?"AI":"player O...",disabled:"AI"===se.player_2,onChange:function(e){var n=e.target.value;me({player_2:n})}})),r.a.createElement("button",{type:"button",onClick:function(){""!==K.player_1&&""!==se.player_2&&O(p),T(1)}},"Continue")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Tic Tac Toe"),r.a.createElement("ul",{className:"matchPlayers"},r.a.createElement("li",{className:"home_player"},K.player_1),r.a.createElement("li",{className:"rival_player"},se.player_2)),r.a.createElement("ul",{className:"matchPlayers"},Y?r.a.createElement(r.a.Fragment,null," ",r.a.createElement("li",{className:"home_player"},V),r.a.createElement("li",{className:"rival_player"},U)):r.a.createElement(r.a.Fragment,null," ",r.a.createElement("li",{className:"home_player"},U),r.a.createElement("li",{className:"rival_player"},V)," ")),r.a.createElement(Z,{dims:3},_.map(function(e,n){var t=null!==e;return r.a.createElement(ee,{"data-testid":"square_".concat(n),key:n,onClick:function(){return function(e){"Friend"!==H?_[e]||A!==c.human||(fe(e,c.human),T(c.computer)):_[e]||A!==c.human?_[e]||A!==c.Friend||(fe(e,c.Friend),T(c.human)):(fe(e,c.human),T(c.Friend))}(n)}},t&&r.a.createElement(ne,null,1===e?r.a.createElement("span",{id:"x",className:"header-x-image-board"},"X"):r.a.createElement("div",{className:"outer"},r.a.createElement("div",{className:"inner"},"\xa0"))))}),r.a.createElement(ie,{styles:w===b&&Q.getStrikethroughStyles()}),r.a.createElement(P,{isOpen:z,winner:F,close:function(){"Player X wins!"===F&&(U+=1),"Player O wins!"===F&&(V+=1),O(p),N(L),G(!1)},startNewGame:function(){U=0,V=0,O(m),N(L),G(!1)}})))};t(37);function oe(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  flex: 0 0 auto;\n"]);return oe=function(){return e},e}function ue(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex: 1 0 auto;\n"]);return ue=function(){return e},e}var se=o.b.main(ue()),me=o.b.footer(oe()),fe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(se,null,r.a.createElement(ce,null)),r.a.createElement(me,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));O.a.setAppElement("#root"),i.a.render(r.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.da8b3827.chunk.js.map