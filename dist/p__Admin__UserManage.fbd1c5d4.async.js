(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[210],{32070:function(){},61004:function(L,T,e){"use strict";e.r(T),e.d(T,{default:function(){return X},waitTime:function(){return W},waitTimePromise:function(){return k}});var y=e(11849),b=e(71153),S=e(60331),R=e(12968),I=e(20352),f=e(39428),o=e(3182),p=e(28991),g=e(81253),i=e(59250),d=e(13013),U=e(57663),O=e(71577),B=e(30887),m=e(28682),N=e(84305),h=e(39559),Z=e(57254),P=e(44545),F=e(94184),A=e.n(F),u=e(67294),q=e(32070),z=["key","name"],G=function(n){var t=n.children,a=n.menus,r=n.onSelect,l=n.className,s=n.style,D=(0,u.useContext)(h.ZP.ConfigContext),c=D.getPrefixCls,j=c("pro-table-dropdown"),K=u.createElement(m.Z,{onClick:function(x){return r&&r(x.key)}},a==null?void 0:a.map(function(E){return u.createElement(m.Z.Item,{key:E.key},E.name)}));return u.createElement(d.Z,{overlay:K,className:A()(j,l)},u.createElement(O.Z,{style:s},t," ",u.createElement(Z.Z,null)))},M=function(n){var t=n.className,a=n.style,r=n.onSelect,l=n.menus,s=l===void 0?[]:l,D=n.children,c=(0,u.useContext)(h.ZP.ConfigContext),j=c.getPrefixCls,K=j("pro-table-dropdown"),E=u.createElement(m.Z,{onClick:function(w){r==null||r(w.key)},items:s.map(function(x){var w=x.key,Y=x.name,$=(0,g.Z)(x,z);return(0,p.Z)((0,p.Z)({key:w},$),{},{title:$.title,label:Y})})});return u.createElement(d.Z,{overlay:E,className:A()(K,t)},u.createElement("a",{style:a},D||u.createElement(P.Z,null)))};M.Button=G;var H=M,J=e(37905),Q=e(93387),C=e(85893),k=function(){var v=(0,o.Z)((0,f.Z)().mark(function n(){var t,a=arguments;return(0,f.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return t=a.length>0&&a[0]!==void 0?a[0]:100,l.abrupt("return",new Promise(function(s){setTimeout(function(){s(!0)},t)}));case 2:case"end":return l.stop()}},n)}));return function(){return v.apply(this,arguments)}}(),W=function(){var v=(0,o.Z)((0,f.Z)().mark(function n(){var t,a=arguments;return(0,f.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return t=a.length>0&&a[0]!==void 0?a[0]:100,l.next=3,k(t);case 3:case"end":return l.stop()}},n)}));return function(){return v.apply(this,arguments)}}(),V=[{dataIndex:"id ",valueType:"indexBorder"},{title:"\u7528\u6237\u540D",dataIndex:"username",copyable:!0},{title:"\u7528\u6237\u8D26\u6237",dataIndex:"userAccount",copyable:!0},{title:"\u5934\u50CF",dataIndex:"avatarUrl",search:!1,render:function(n,t){return(0,C.jsx)(I.Z,{width:48,height:48,src:t.avatarUrl,alt:"Avatar",fallback:"https://gravatar.com/avatar/631aade200ee3144611c321eb56781e5?s=400&d=mp&r=x;"})},copyable:!0},{title:"\u6027\u522B",dataIndex:"gender",valueType:"select",valueEnum:{0:{text:"\u5973"},1:{text:"\u7537"}}},{title:"\u7535\u8BDD",dataIndex:"phone",copyable:!0},{title:"\u90AE\u4EF6",dataIndex:"email",copyable:!0},{title:"\u72B6\u6001",dataIndex:"userStatus",valueType:"select",render:function(n,t){var a=t.userStatus===0?"green":"red",r=t.userStatus===0?"\u6B63\u5E38":"\u51BB\u7ED3";return(0,C.jsx)(S.Z,{color:a,children:r})}},{title:"\u89D2\u8272",dataIndex:"userRole",valueType:"select",valueEnum:{0:{text:"\u666E\u901A\u7528\u6237",status:"Default"},1:{text:"\u7BA1\u7406\u5458",status:"Success"}}},{title:"\u7528\u6237\u7F16\u53F7",dataIndex:"netId"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",valueType:"date"},{title:"\u64CD\u4F5C",valueType:"option",key:"option",render:function(n,t,a,r){return[(0,C.jsx)("a",{onClick:function(){var s;r==null||(s=r.startEditable)===null||s===void 0||s.call(r,t.id)},children:"\u7F16\u8F91"},"editable"),(0,C.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",children:"\u67E5\u770B"},"view"),(0,C.jsx)(H,{onSelect:function(){return r==null?void 0:r.reload()},menus:[{key:"copy",name:"\u590D\u5236"},{key:"delete",name:"\u5220\u9664"}]},"actionGroup")]}}],X=function(){var v=(0,u.useRef)();return(0,C.jsx)(J.Z,{columns:V,actionRef:v,cardBordered:!0,request:(0,o.Z)((0,f.Z)().mark(function n(){var t,a,r,l,s=arguments;return(0,f.Z)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=s.length>0&&s[0]!==void 0?s[0]:{},a=s.length>1?s[1]:void 0,r=s.length>2?s[2]:void 0,c.next=5,W(2e3);case 5:return c.next=7,(0,Q.pz)();case 7:return l=c.sent,c.abrupt("return",{data:l});case 9:case"end":return c.stop()}},n)})),editable:{type:"multiple"},columnsState:{persistenceKey:"pro-table-singe-demos",persistenceType:"localStorage",onChange:function(t){}},rowKey:"id",search:{labelWidth:"auto"},options:{setting:{listsHeight:400}},form:{syncToUrl:function(t,a){return a==="get"?(0,y.Z)((0,y.Z)({},t),{},{created_at:[t.startTime,t.endTime]}):t}},pagination:{pageSize:5,onChange:function(t){}},dateFormatter:"string",headerTitle:"\u9AD8\u7EA7\u8868\u683C"})}},34952:function(L,T,e){"use strict";var y=e(22122),b=e(15105),S=e(67294),R=function(o,p){var g={};for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&p.indexOf(i)<0&&(g[i]=o[i]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,i=Object.getOwnPropertySymbols(o);d<i.length;d++)p.indexOf(i[d])<0&&Object.prototype.propertyIsEnumerable.call(o,i[d])&&(g[i[d]]=o[i[d]]);return g},I={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},f=S.forwardRef(function(o,p){var g=function(h){var Z=h.keyCode;Z===b.Z.ENTER&&h.preventDefault()},i=function(h){var Z=h.keyCode,P=o.onClick;Z===b.Z.ENTER&&P&&P()},d=o.style,U=o.noStyle,O=o.disabled,B=R(o,["style","noStyle","disabled"]),m={};return U||(m=(0,y.Z)({},I)),O&&(m.pointerEvents="none"),m=(0,y.Z)((0,y.Z)({},m),d),S.createElement("div",(0,y.Z)({role:"button",tabIndex:0,ref:p},B,{onKeyDown:g,onKeyUp:i,style:m}))});T.Z=f}}]);
