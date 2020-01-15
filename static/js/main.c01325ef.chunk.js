(this.webpackJsonpchannelfinder=this.webpackJsonpchannelfinder||[]).push([[0],{20:function(e,a,t){e.exports={ZipLookupContainer:"ZipLookupContainer_ZipLookupContainer__1gXDj",ZipLookup:"ZipLookupContainer_ZipLookup__2GsPv",Container:"ZipLookupContainer_Container__34eRc",Info:"ZipLookupContainer_Info__1IXs3",Zipcode:"ZipLookupContainer_Zipcode__1HKnI",Error:"ZipLookupContainer_Error__3Xmyr"}},21:function(e,a,t){e.exports={card:"FuboChannel_card__2twmE",local:"FuboChannel_local__1dxTr",media:"FuboChannel_media__1LRTr",cardContent:"FuboChannel_cardContent__3wTMo",description:"FuboChannel_description__1vtUu"}},41:function(e,a,t){e.exports={Header:"Header_Header__ua9TO"}},42:function(e,a,t){e.exports=t.p+"static/media/fubotv.327651b3.svg"},43:function(e,a,t){e.exports={ZipLookupBox:"ZipLookupBox_ZipLookupBox__2j28D"}},44:function(e,a,t){e.exports={ZipLookupBtn:"ZipLookupBtn_ZipLookupBtn__3uZOM"}},47:function(e,a,t){e.exports={FuboPlansContainer:"FuboPlansContainer_FuboPlansContainer__2oHAS"}},48:function(e,a,t){e.exports={loader:"Loader_loader__eEDAy",load2:"Loader_load2__166ky"}},49:function(e,a,t){e.exports={Footer:"Footer_Footer__3HuPg"}},50:function(e,a,t){e.exports=t.p+"static/media/github.bef99f4f.svg"},51:function(e,a,t){e.exports=t.p+"static/media/sourcecode.da9c79e2.svg"},56:function(e,a,t){e.exports=t(85)},61:function(e,a,t){},62:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(14),l=t.n(r),c=(t(61),t(15)),i=t(9),s=t(16),u=t(17),p=t(18),d=(t(62),t(41)),m=t.n(d),h=t(42),f=t.n(h),_=function(){return o.a.createElement("header",{className:m.a.Header},o.a.createElement("img",{src:f.a,alt:"Fubo-TV-Logo"}))},b=t(20),E=t.n(b),C=t(43),v=t.n(C),g=function(e){return o.a.createElement("div",{className:v.a.ZipLookupBox},o.a.createElement("input",Object.assign({},e,{type:"text",name:"postal-lookup"})))},O=t(44),k=t.n(O),L=function(e){return o.a.createElement("div",{className:k.a.ZipLookupBtn},o.a.createElement("button",e,"GO"))},P=t(11),F=t(46),N=t.n(F),j=function(){return{type:"CHANGE_TAB_VALUE_START"}},y=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={postalCode:"",show:!1,isValid:!0},t.isValidZipHandler=function(e){return/^\d{5}(-\d{4})?$/.test(e)},t.zipLookupHandler=function(e){t.setState({postalCode:e.target.value})},t.zipFetchHandler=function(){t.isValidZipHandler(t.state.postalCode)?(t.props.onFetchFuboPlans(t.state.postalCode),t.setState((function(e){return{show:!e.show,isValid:!0}}))):t.setState({isValid:!1})},t.handleKeyPress=function(e){t.isValidZipHandler(t.state.postalCode)?"Enter"===e.key&&(t.props.onFetchFuboPlans(t.state.postalCode),t.setState((function(e){return{show:!e.show,isValid:!0}}))):t.setState({isValid:!1})},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:E.a.Container},o.a.createElement("p",{className:E.a.Info},"Please enter a zip code to search for available plans and channels."),o.a.createElement("div",{className:E.a.ZipLookupContainer},o.a.createElement("p",{className:E.a.Zipcode},"ZIPCODE"),o.a.createElement("div",{className:E.a.ZipLookup},o.a.createElement(g,{placeholder:"000000",value:this.state.postalCode,onChange:this.zipLookupHandler,onKeyPress:this.handleKeyPress}),o.a.createElement(L,{onClick:this.zipFetchHandler})),this.state.isValid?null:o.a.createElement("p",{className:E.a.Error},"Please enter a valid zipcode")),o.a.createElement("p",{className:E.a.Info},"Here are the plans and channels available in postal code ",this.state.postalCode))}}]),a}(n.Component),w=Object(P.b)(null,(function(e){return{onFetchFuboPlans:function(a){return e(function(e){return function(a){a({type:"FETCH_FUBO_PLANS_START"}),N.a.get("https://cors-anywhere.herokuapp.com/https://api.fubo.tv/plans/v1/location?homePostalCode=".concat(e,"&currentPostalCode=").concat(e,"&countrySlug=USA")).then((function(e){a({type:"FETCH_FUBO_PLANS_SUCCESS",fuboPlanData:e.data})})).catch((function(e){console.log(e),a(function(e){return{type:"FETCH_FUBO_PLANS_FAIL",err:e}}(e))}))}}(a))}}}))(y),A=t(47),S=t.n(A),Z=t(21),H=t.n(Z),T=function(e){return o.a.createElement("div",{className:H.a.card},o.a.createElement("div",{className:H.a.media},e.local?o.a.createElement("span",{className:H.a.local},"LOCAL"):null,o.a.createElement("img",{src:e.img,alt:"TV-Provider"})),o.a.createElement("div",{className:H.a.cardContent},o.a.createElement("p",{color:"inherit",className:H.a.channelName},e.channelname),o.a.createElement("p",{className:H.a.callsign},e.callsign)),o.a.createElement("div",{className:H.a.description},o.a.createElement("span",null,e.description)))},x=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:S.a.FuboPlansContainer},this.props.fuboPlans.data[this.props.value].default_package.channels.map((function(e,a){return o.a.createElement(T,{description:e.meta.description||"No Description.",key:a,local:e.tags.includes("local"),img:e.meta.networkLogoOnDarkUrl,channelname:e.meta.networkName,callsign:e.meta.callSign})})))}}]),a}(n.Component),B=Object(P.b)((function(e){return{fuboPlans:e.fuboPlan.fuboPlanData,value:e.fuboPlan.value}}))(x),V=t(101),U=t(104),D=t(103),I=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={value:0},t.handleChange=function(e,a){t.setState({value:a}),t.props.onChangeValue(a)},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(V.a,{style:{backgroundColor:"#3a3e3f"},square:!0},o.a.createElement(U.a,{value:this.state.value,indicatorColor:"secondary",textColor:"secondary",onChange:this.handleChange,"aria-label":"disabled tabs example"},o.a.createElement(D.a,{label:"Basic"}),o.a.createElement(D.a,{label:"Latino"}),o.a.createElement(D.a,{label:"Latino Quarterly"})))}}]),a}(n.Component),z=Object(P.b)(null,(function(e){return{onChangeValue:function(a){return e(function(e){return function(a){a(j),a(function(e){return{type:"CHANGE_TAB_VALUE",value:e}}(e))}}(a))}}}))(I),M=t(48),R=t.n(M),G=function(){return o.a.createElement("div",{className:R.a.loader})},X=t(49),K=t.n(X),J=t(50),W=t.n(J),$=t(51),q=t.n($),Q=function(){return o.a.createElement("footer",{className:K.a.Footer},o.a.createElement("p",null,"Created by Mark Ammari"),o.a.createElement("div",null,o.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/Mark-Ammari"},o.a.createElement("img",{src:W.a,alt:"github"})),o.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/Mark-Ammari/channelfinder"},o.a.createElement("img",{src:q.a,alt:"source-code"}))))},Y=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(_,null),o.a.createElement(w,null),o.a.createElement(z,null),this.props.loading?o.a.createElement(G,null):null,this.props.show?o.a.createElement(B,null):null,o.a.createElement("div",{className:"Separate"}),o.a.createElement(Q,null))}}]),a}(n.Component),ee=Object(P.b)((function(e){return{fuboPlans:e.fuboPlan.fuboPlanData,show:e.fuboPlan.show,loading:e.fuboPlan.loading}}))(Y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=t(23),te=t(52),ne=t(27),oe={loading:!1,fuboPlanData:{},show:!1,value:0},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_FUBO_PLANS_START":return Object(ne.a)({},e,{loading:!0,show:!1});case"FETCH_FUBO_PLANS_SUCCESS":return Object(ne.a)({},e,{loading:!1,fuboPlanData:a.fuboPlanData,show:!0});case"FETCH_FUBO_PLANS_FAIL":return Object(ne.a)({},e,{loading:!1,show:!1});case"CHANGE_TAB_VALUE":return Object(ne.a)({},e,{value:a.value});default:return e}},le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ae.d,ce=Object(ae.c)({fuboPlan:re}),ie=Object(ae.e)(ce,le(Object(ae.a)(te.a)));l.a.render(o.a.createElement(P.a,{store:ie},o.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[56,1,2]]]);
//# sourceMappingURL=main.c01325ef.chunk.js.map