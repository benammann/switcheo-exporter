(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e){e.exports={name:"switcheo-exporter",version:"1.2.1",private:!1,homepage:"https://benammann.github.io/switcheo-exporter",license:"MIT",dependencies:{"@cityofzion/neon-js":"^4.3.1","@material-ui/core":"^3.7.0","@material-ui/icons":"^3.0.1","connected-react-router":"^6.0.0","gh-pages":"^2.0.1",history:"^4.7.2","immutability-helper":"^2.9.0",moment:"^2.23.0","mui-datatables":"^2.0.0-beta-41",react:"^16.6.3","react-dom":"^16.6.3","react-redux":"^6.0.0","react-router":"latest","react-router-dom":"^4.3.1","react-scripts":"2.1.1",redux:"^4.0.1","redux-thunk":"^2.3.0","wallet-address-validator":"^0.2.4"},scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test",eject:"react-scripts eject",predeploy:"npm run build",deploy:"gh-pages -d build"},eslintConfig:{extends:"react-app"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}},187:function(e,t,n){e.exports=n(422)},422:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(25),s=n.n(o),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function c(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var l,u=n(30),d=n(86),p=n(78),h=n(52),f=n(27),m=n(15),g=Object(m.c)({contracts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"switcheo/fetch_contracts":return t.contracts;default:return e}},tokens:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"switcheo/fetch_tokens":return t.tokens;default:return e}},network:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"api";switch((arguments.length>1?arguments[1]:void 0).type){case"switcheo/toggle_network":return"api"===e?"test-api":"api";default:return e}},tickers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"switcheo/fetch_tickers":return t.tickers;default:return e}}}),y=Object(m.c)({error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{show:!1,message:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"layout/raise_error":return{show:!0,message:t.message||"missing error message in reducer"};case"layout/hide_error":return{show:!1,message:""};default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"layout/set_loading":return!0;case"layout/unset_loading":return!1;default:return e}}}),v={address:"",addressHashed:"",addressType:""},b=Object(m.c)({history:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"address/fetch_history":return t.history;default:return e}},orders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"address/fetch_orders":return t.orders;default:return e}},address:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"address/set":return{address:t.address,addressHashed:t.addressHashed,addressType:t.addressType};case"address/reset":return v;default:return e}}}),w=n(175),k=Object(f.a)(),O=Object(m.e)((l=k,Object(m.c)({router:Object(h.connectRouter)(l),switcheo:g,layout:y,address:b})),Object(m.d)(Object(m.a)(Object(h.routerMiddleware)(k),w.a))),E=n(26),j=n(20),_=n(21),x=n(23),C=n(22),T=n(24),N=function(){return function(e){return e({type:"layout/hide_error"})}},A=n(34),S=n.n(A),H=n(89),M=n.n(H),D=n(93),F=n.n(D),L=n(92),I=n.n(L),P=n(90),W=n.n(P),U=n(29),R=n.n(U),B=function(e){function t(){return Object(j.a)(this,t),Object(x.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(M.a,{open:this.props.layout.error.show,onClose:this.props.hideError,"aria-labelledby":"error-dialog"},a.a.createElement(W.a,{id:"error-dialog"},"Error"),a.a.createElement(I.a,null,a.a.createElement(R.a,{component:"b"},this.props.layout.error.message)),a.a.createElement(F.a,null,a.a.createElement(S.a,{onClick:this.props.hideError,color:"primary",variant:"outlined"},"Close"))),this.props.children)}}]),t}(r.Component),J=Object(u.connect)(function(e){return Object(E.a)({},e)},function(e){return Object(m.b)({hideError:N},e)})(B),V=n(88),Q=n(176),Y=n.n(Q),$=n(96),G=n.n($),q=n(79),z=n.n(q),K=n(47),X=n.n(K),Z=n(80),ee=n.n(Z),te=n(46),ne=n.n(te),re=n(5),ae=n.n(re),oe=n(98),se=n.n(oe),ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return se.a.validate(e,"NEO")?"NEO":se.a.validate(e,"ETH")?"ETH":se.a.validate(e,"QTUM")?"QTUM":""},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""!==ie(e)},le=function(){return function(e){return e({type:"address/reset"})}},ue=function(){return function(e){var t=localStorage.getItem("address/history");t?t=JSON.parse(t):(localStorage.setItem("address/history","[]"),t=[]),e({type:"address/fetch_history",history:t})}},de=n(116),pe=n.n(de),he=n(117),fe=n.n(he),me=n(118),ge=n.n(me),ye=n(50),ve=function(e){function t(){var e,n;Object(j.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(n=Object(x.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(o)))).onAddressClick=function(e){n.closeDialog(),n.props.onAddressClick&&n.props.onAddressClick(e)},n.closeDialog=function(){n.setState({open:!1})},n.renderButton=function(){if(n.props.address.history.length)return a.a.createElement(S.a,{style:{width:"100%"},color:"primary",onClick:function(){n.setState({open:!0})}},"Show History")},n.removeAll=function(){localStorage.removeItem("address/history"),n.props.fetchAddressHistory(),n.closeDialog()},n.state={open:!1},n}return Object(T.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,this.renderButton(),a.a.createElement(M.a,{open:this.state.open,onClose:this.closeDialog,"aria-labelledby":"addr-history-title"},a.a.createElement(W.a,{id:"addr-history-title"},"Address History"),a.a.createElement(I.a,null,a.a.createElement(pe.a,null,this.props.address.history.slice(0,5).map(function(t,n){return a.a.createElement(fe.a,{key:n,button:!0,onClick:function(){e.onAddressClick(t)}},a.a.createElement(ge.a,null,t))}))),a.a.createElement(F.a,null,a.a.createElement(S.a,{onClick:this.removeAll},"Delete History"),a.a.createElement(S.a,{onClick:this.closeDialog,color:"primary",variant:"outlined"},"Close"))))}}]),t}(r.Component),be=Object(ye.a)(function(e){return Object(E.a)({},e)},function(e){return Object(m.b)({fetchAddressHistory:ue},e)})(ve),we=n(94),ke=n.n(we),Oe=n(95),Ee=n.n(Oe),je=n(177),_e=n.n(je),xe=n(91),Ce=n.n(xe),Te=n(178),Ne=n.n(Te),Ae=n(123),Se=function(e){function t(){return Object(j.a)(this,t),Object(x.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{align:"center",className:this.props.classes.links},a.a.createElement(ke.a,{title:"Go to switcheo.exchange"},a.a.createElement(Ee.a,{onClick:function(){window.open("https://switcheo.exchange/","_blank")}},a.a.createElement(_e.a,null))),a.a.createElement(ke.a,{title:"Open github project"},a.a.createElement(Ee.a,{onClick:function(){window.open("https://github.com/benammann/switcheo-exporter","_blank")}},a.a.createElement(Ne.a,null)))),a.a.createElement("div",{align:"center",className:this.props.classes.ghPages},a.a.createElement(Ce.a,null,"Hosted at"),a.a.createElement("a",{href:"https://pages.github.com/",target:"_blank"},a.a.createElement("img",{src:"./gh_pages.svg",alt:"github pages",style:{width:"30%",height:"auto"}}))),a.a.createElement("div",{align:"center",className:this.props.classes.ghPages},a.a.createElement(Ce.a,{style:{position:"absolute",top:5,right:5,color:"gray"}},Ae.name," v",Ae.version)))}}]),t}(r.Component),He=ae()(function(e){return{links:{paddingTop:10},ghPages:{paddingTop:20}}})(Se),Me=function(e){function t(){var e,n;Object(j.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(x.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(a)))).handleAddressChange=function(e){n.setState(Y()(n.state,{address:{$set:e},isValid:{$set:ce(e)}}))},n.loadTrades=function(e){e.preventDefault(),n.state.isValid&&n.props.history.push("/address/".concat(n.state.address))},n.state={address:"",isValid:!1},n}return Object(T.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchAddressHistory(),this.props.resetAddress(),document.title="Switcheo Exporter"}},{key:"render",value:function(){var e=this;return a.a.createElement("main",{className:this.props.classes.main},a.a.createElement(G.a,null),a.a.createElement(ne.a,{className:this.props.classes.paper},a.a.createElement("img",{src:"./switcheonetwork_logo.svg",alt:"Switcheo Network Logo"}),a.a.createElement(R.a,{component:"h1",variant:"h6"},"Trades Exporter"),a.a.createElement("div",{className:this.props.classes.form},a.a.createElement("form",{onSubmit:this.loadTrades},a.a.createElement(z.a,{margin:"normal",required:!0,fullWidth:!0},a.a.createElement(ee.a,{htmlFor:"public_address"},"Public Address"),a.a.createElement(X.a,{id:"public_address",name:"public_address",autoFocus:!0,onChange:function(t){return e.handleAddressChange(t.target.value)},value:this.state.address,autoComplete:"off"})),a.a.createElement(S.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:this.props.classes.submit,disabled:!this.state.isValid},"Load Trades")))),a.a.createElement("div",{className:this.props.classes.form},a.a.createElement(be,{onAddressClick:this.handleAddressChange})),a.a.createElement(He,null))}}]),t}(r.Component),De=Object(u.connect)(function(e){return Object(E.a)({},e)},function(e){return Object(m.b)({resetAddress:le,fetchAddressHistory:ue},e)})(ae()(function(e){return{main:Object(V.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:"100%",maxWidth:"400px",marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},addressHistory:{marginTop:8*e.spacing.unit},errorDialog:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px"),backgroundColor:"red"},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(Me)),Fe=function(e){return function(t,n){var r="https://".concat(n().switcheo.network,".switcheo.network/v2/exchange/contracts");fetch(r).then(function(e){return e.json()}).then(function(n){if(t({type:"switcheo/fetch_contracts",contracts:n}),e)return e()}).catch(function(e){t({type:"layout/raise_error",message:e.message})})}},Le=function(e){return function(t,n){var r="https://".concat(n().switcheo.network,".switcheo.network/v2/exchange/tokens");fetch(r).then(function(e){return e.json()}).then(function(n){if(t({type:"switcheo/fetch_tokens",tokens:n}),e)return e()}).catch(function(e){t({type:"layout/raise_error",message:e.message})})}},Ie=n(97),Pe=n(38),We=n.n(Pe),Ue=n(62),Re=n(99),Be=n(179),Je=n.n(Be),Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(t,n){var r=n().address.address,a=r.addressHashed,o=r.addressType;if(a&&o){var s=n().switcheo.contracts[o],i=n().switcheo.network;s?Ye(a,Object.values(s),i).then(function(r){r=function(e,t,n,r){var a=[],o=!0,s=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var u=c.value,d=u.fills,p=u.makes,h=!0,f=!1,m=void 0;try{for(var g,y=d.keys()[Symbol.iterator]();!(h=(g=y.next()).done);h=!0)d[g.value].is_make=!1}catch(A){f=!0,m=A}finally{try{h||null==y.return||y.return()}finally{if(f)throw m}}var v=!0,b=!1,w=void 0;try{for(var k,O=p.keys()[Symbol.iterator]();!(v=(k=O.next()).done);v=!0)p[k.value].is_make=!0}catch(A){b=!0,w=A}finally{try{v||null==O.return||O.return()}finally{if(b)throw w}}var E=[].concat.apply([],[d,p]),j=!0,_=!1,x=void 0;try{for(var C,T=function(){var e=C.value;if(!u.blockchain)return"continue";var o=u.blockchain.toUpperCase();if("NEO"===o||"ETH"===o||"QTUM"===o){var s=u.address,i=u.contract_hash,c=u.pair,l=u.side,d=e.created_at,p=e.price,h=e.filled_amount,f=e.want_amount,m=e.fee_amount,g=e.fee_asset_id,y=e.status,v=e.fill_amount;v||(v=h);var b=new Date(Date.parse(d)),w=Je()(b).format("YYYY-MM-DD HH:mm:ss"),k="NEO"===o?Ie.wallet.getAddressFromScriptHash(s):s,O=Object.keys(n[o]).find(function(e){return n[o][e]===i}),E=c.replace("_","/"),j=l.toUpperCase(),_=parseFloat(p).toFixed(8),x=c.split("_"),T=x[0],N=void 0===t[T]?8:t[x[0].toUpperCase()].decimals,A=0;if("cancelled"===y){var S=A=parseFloat(f)/Math.pow(10,N);A=S/p}else A=parseFloat(v)/Math.pow(10,N),"buy"===l&&(A/=p);var H="-",M=0,D=r&&r[x[0]]&&r[x[0]][x[1]]?r[x[0]][x[1]]:"Not Listed",F="Not Listed"!==D?(parseFloat(D).toFixed(8)/_*100-100).toFixed(2):"--,--";if("SELL"===j&&F>0&&(F*=-1),F="".concat(F,"%"),!e.is_make)if(H=Object.keys(t).find(function(e){return t[e].hash===g})){var L=t[H].decimals;M=parseFloat(m)/Math.pow(10,L)}else H=T,M=parseFloat(m)/Math.pow(10,8);var I=Number(parseFloat(_*A)).toFixed(8);A||0===A||"failed"!==y||(A=0,I=0),a.push([w,k,o,O,E,j,A,_,D,F,H,M,I,y])}},N=E[Symbol.iterator]();!(j=(C=N.next()).done);j=!0)T()}catch(A){_=!0,x=A}finally{try{j||null==N.return||N.return()}finally{if(_)throw x}}}}catch(A){s=!0,i=A}finally{try{o||null==l.return||l.return()}finally{if(s)throw i}}return a}(r=[].concat.apply([],r),n().switcheo.tokens,n().switcheo.contracts,n().switcheo.tickers),t({type:"address/fetch_orders",orders:r}),e&&t(function(e){return e({type:"layout/unset_loading"})})}).catch(function(n){console.log(n),t({type:"layout/raise_error",message:"Could not fetch orders: ".concat(n.message)}),e&&t(function(e){return e({type:"layout/unset_loading"})}),k.push("/")}):(t({type:"layout/raise_error",message:"Could not fetch orders: No contracts available for ".concat(o)}),e&&t(function(e){return e({type:"layout/unset_loading"})}),k.push("/"))}else t({type:"layout/raise_error",message:"Could not fetch orders: No address is given"}),e&&t(function(e){return e({type:"layout/unset_loading"})}),k.push("/")}},Qe=function(){var e=Object(Re.a)(We.a.mark(function e(t,n,r){var a,o,s,i,c,l;return We.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=200,o=!0,s="",i=[];case 4:if(!o){e.next=22;break}return c="https://".concat(r,".switcheo.network/v2/orders?address=").concat(t,"&contract_hash=").concat(n,"&limit=").concat(a),s&&(c+="&before_id=".concat(s)),e.next=9,fetch(c).then(function(e){return e.json()});case 9:if(!(l=e.sent).length){e.next=19;break}if(i=Object(Ue.a)(i).concat(Object(Ue.a)(l)),l.length!==a){e.next=16;break}s=l[l.length-1].id,e.next=17;break;case 16:return e.abrupt("return",i);case 17:e.next=20;break;case 19:return e.abrupt("return",i);case 20:e.next=4;break;case 22:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}(),Ye=function(){var e=Object(Re.a)(We.a.mark(function e(t,n,r){return We.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(n.map(function(){var e=Object(Re.a)(We.a.mark(function e(n){return We.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Qe(t,n,r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())));case 1:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}(),$e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(t){t(function(e){return function(t){if(localStorage.getItem("address/history")){var n=JSON.parse(localStorage.getItem("address/history")).filter(function(t){return t!==e});localStorage.setItem("address/history",JSON.stringify(n)),t({type:"address/remove_from_history",history:n})}}}(e));var n=localStorage.getItem("address/history");n=n?JSON.parse(n):[];var r=[e].concat(Object(Ue.a)(n));localStorage.setItem("address/history",JSON.stringify(r)),t({type:"address/add_to_history",history:r})}},Ge=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){ce(e)?(n({type:"address/set",address:e,addressHashed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=ie(e);return"NEO"===t?Ie.wallet.getScriptHashFromAddress(e):e.toLowerCase()}(e),addressType:ie(e)}),t&&(n(function(e){return e({type:"layout/set_loading"})}),n(Fe(function(){n(Le(function(){var t;n((t=function(){n($e(e)),n(Ve(!0))},function(e,n){var r="https://".concat(n().switcheo.network,".switcheo.network/v2/tickers/last_price");fetch(r).then(function(e){return e.json()}).then(function(n){if(e({type:"switcheo/fetch_tickers",tickers:n}),t)return t()}).catch(function(n){if(e({type:"layout/raise_error",message:n.message}),t)return t()})}))}))})))):(n({type:"layout/raise_error",message:"Please enter a valid NEO, ETH or QTUM address"}),k.push("/"))}},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(t){return t({type:"layout/raise_error",message:e})}},ze=n(180),Ke=n.n(ze),Xe=function(e){function t(){return Object(j.a)(this,t),Object(x.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{align:"center",style:{padding:100}},a.a.createElement(Ke.a,null))}}]),t}(r.Component),Ze=n(87),et=n(181),tt=n.n(et),nt=n(61),rt=n.n(nt),at=n(81),ot=n.n(at),st=n(32),it=n(120),ct=n.n(it),lt=n(121),ut=n.n(lt),dt=n(184),pt=n.n(dt),ht=n(183),ft=n.n(ht),mt=n(182),gt=n.n(mt),yt=function(){return function(e,t){e(Fe()),e(Le()),e({type:"switcheo/toggle_network"}),t().address.address.address&&e(Ge(t().address.address.address,!0))}},vt=function(e){function t(){var e,n;Object(j.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(x.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(a)))).navigateHome=function(){n.props.history.push("/")},n}return Object(T.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(G.a,null),a.a.createElement(tt.a,{position:"static",color:"default",className:this.props.classes.appBar},a.a.createElement(ot.a,null,a.a.createElement("div",null,a.a.createElement(rt.a,{onClick:this.navigateHome},a.a.createElement(gt.a,null))),a.a.createElement(ft.a,{xsDown:!0},a.a.createElement(R.a,{variant:"h6",noWrap:!0},this.props.address.address.address)),a.a.createElement("div",{className:this.props.classes.pageTitle}),a.a.createElement(ct.a,{row:!0},a.a.createElement(ut.a,{control:a.a.createElement(pt.a,{color:"primary",onChange:this.props.toggleNetwork,disabled:this.props.layout.loading,checked:"api"===this.props.switcheo.network}),label:"api"===this.props.switcheo.network?"MainNet":"TestNet"})))),a.a.createElement("div",{className:this.props.classes.content},this.props.children))}}]),t}(r.Component),bt=Object(Ze.a)(Object(ye.a)(function(e){return Object(E.a)({},e)},function(e){return Object(m.b)({toggleNetwork:yt},e)})(Object(st.withStyles)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},appBar:{position:"relative"},pageTitle:{flex:1},content:{padding:10}}})(vt))),wt=n(185),kt=n.n(wt),Ot=n(186),Et=n.n(Ot),jt=Object(st.createMuiTheme)({palette:{type:"dark",primary:Et.a},typography:{useNextVariants:!0}}),_t=Object(st.createMuiTheme)({typography:{useNextVariants:!0}}),xt=[{name:"Order Date",options:{filter:!1}},{name:"Address",options:{display:"false",filter:!1}},{name:"Blockchain",options:{display:"false",filter:!1}},{name:"Contract Version",options:{display:"false"}},{name:"Market"},{name:"Type"},{name:"Amount",options:{filter:!1}},{name:"Order Price",options:{filter:!1}},{name:"Current Price",options:{filter:!1}},{name:"Gains",options:{display:"false",filter:!1}},{name:"Fee Token",options:{display:"false"}},{name:"Fee Amount",options:{display:"false",filter:!1}},{name:"Total",options:{filter:!1}},{name:"Status"}],Ct={selectableRows:!1,print:!1,responsive:"scroll",textLabels:{body:{noMatch:"Can't find any trades"}}},Tt=function(e){function t(){return Object(j.a)(this,t),Object(x.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return a.a.createElement(st.MuiThemeProvider,{theme:_t},a.a.createElement(kt.a,{title:"Trade History",data:this.props.address.orders||[],columns:xt,options:Object(E.a)({},Ct,{downloadOptions:{filename:"switcheonetwork_".concat(this.props.address.address.address.addressType,"_").concat(this.props.address.address.address)}})}))}}]),t}(r.Component),Nt=Object(u.connect)(function(e){return Object(E.a)({},e)},function(e){return Object(m.b)({},e)})(Tt),At=function(e){function t(){var e,n;Object(j.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(n=Object(x.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(o)))).renderOrdersTable=function(){return n.props.layout.loading?a.a.createElement(Xe,null):a.a.createElement(Nt,null)},n}return Object(T.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.address;this.props.setAddress(e,!0),document.title="List of trades - ".concat(e)}},{key:"render",value:function(){return a.a.createElement(bt,null,this.renderOrdersTable())}}]),t}(r.Component),St=Object(u.connect)(function(e){return Object(E.a)({},e)},function(e){return Object(m.b)({fetchContracts:Fe,fetchTokens:Le,setAddress:Ge,raiseError:qe,fetchOrders:Ve},e)})(At),Ht=n(119),Mt=n.n(Ht);s.a.render(a.a.createElement(u.Provider,{store:O},a.a.createElement(h.ConnectedRouter,{history:k},a.a.createElement(Mt.a,{theme:jt},a.a.createElement(d.a,null,a.a.createElement(J,null,a.a.createElement(p.a,{exact:!0,path:"/",component:De}),a.a.createElement(p.a,{path:"/address/:address",component:St})))))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/switcheo-exporter",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/switcheo-exporter","/service-worker.js");i?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):c(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):c(t,e)})}}()}},[[187,2,1]]]);
//# sourceMappingURL=main.650fad2c.chunk.js.map