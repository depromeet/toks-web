try{
var oe=Object.create;var w=Object.defineProperty;var ae=Object.getOwnPropertyDescriptor;var ie=Object.getOwnPropertyNames;var se=Object.getPrototypeOf,le=Object.prototype.hasOwnProperty;var x=(e,t)=>()=>(e&&(t=e(e=0)),t);var T=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ue=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ie(t))!le.call(e,n)&&n!==r&&w(e,n,{get:()=>t[n],enumerable:!(o=ae(t,n))||o.enumerable});return e};var N=(e,t,r)=>(r=e!=null?oe(se(e)):{},ue(t||!e||!e.__esModule?w(r,"default",{value:e,enumerable:!0}):r,e));var a=x(()=>{});var m,i=x(()=>{m={NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}});var s=x(()=>{});var D=T(I=>{"use strict";a();i();s();Object.defineProperty(I,"__esModule",{value:!0});I.dedent=void 0;function H(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var o=Array.from(typeof e=="string"?[e]:e);o[o.length-1]=o[o.length-1].replace(/\r?\n([\t ]*)$/,"");var n=o.reduce(function(d,c){var h=c.match(/\n([\t ]+|(?!\s).)/g);return h?d.concat(h.map(function(b){var p,E;return(E=(p=b.match(/[\t ]/g))===null||p===void 0?void 0:p.length)!==null&&E!==void 0?E:0})):d},[]);if(n.length){var l=new RegExp(`
[	 ]{`+Math.min.apply(Math,n)+"}","g");o=o.map(function(d){return d.replace(l,`
`)})}o[0]=o[0].replace(/^\r?\n/,"");var u=o[0];return t.forEach(function(d,c){var h=u.match(/(?:^|\n)( *)$/),b=h?h[1]:"",p=d;typeof d=="string"&&d.includes(`
`)&&(p=String(d).split(`
`).map(function(E,ne){return ne===0?E:""+b+E}).join(`
`)),u+=p+o[c+1]}),u}I.dedent=H;I.default=H});var U=T((er,W)=>{a();i();s();function _(){return this.list=[],this.lastItem=void 0,this.size=0,this}_.prototype.get=function(e){var t;if(this.lastItem&&this.isEqual(this.lastItem.key,e))return this.lastItem.val;if(t=this.indexOf(e),t>=0)return this.lastItem=this.list[t],this.list[t].val};_.prototype.set=function(e,t){var r;return this.lastItem&&this.isEqual(this.lastItem.key,e)?(this.lastItem.val=t,this):(r=this.indexOf(e),r>=0?(this.lastItem=this.list[r],this.list[r].val=t,this):(this.lastItem={key:e,val:t},this.list.push(this.lastItem),this.size++,this))};_.prototype.delete=function(e){var t;if(this.lastItem&&this.isEqual(this.lastItem.key,e)&&(this.lastItem=void 0),t=this.indexOf(e),t>=0)return this.size--,this.list.splice(t,1)[0]};_.prototype.has=function(e){var t;return this.lastItem&&this.isEqual(this.lastItem.key,e)?!0:(t=this.indexOf(e),t>=0?(this.lastItem=this.list[t],!0):!1)};_.prototype.forEach=function(e,t){var r;for(r=0;r<this.size;r++)e.call(t||this,this.list[r].val,this.list[r].key,this)};_.prototype.indexOf=function(e){var t;for(t=0;t<this.size;t++)if(this.isEqual(this.list[t].key,e))return t;return-1};_.prototype.isEqual=function(e,t){return e===t||e!==e&&t!==t};W.exports=_});var j=T((or,V)=>{a();i();s();V.exports=function(e){if(typeof Map!="function"||e){var t=U();return new t}else return new Map}});var Q=T((lr,J)=>{a();i();s();var Z=j();J.exports=function(e){var t=new Z(m.FORCE_SIMILAR_INSTEAD_OF_MAP==="true"),r=[];return function(o){var n=function(){var l=t,u,d,c=arguments.length-1,h=Array(c+1),b=!0,p;if((n.numArgs||n.numArgs===0)&&n.numArgs!==c+1)throw new Error("Memoizerific functions should always be called with the same number of arguments");for(p=0;p<c;p++){if(h[p]={cacheItem:l,arg:arguments[p]},l.has(arguments[p])){l=l.get(arguments[p]);continue}b=!1,u=new Z(m.FORCE_SIMILAR_INSTEAD_OF_MAP==="true"),l.set(arguments[p],u),l=u}return b&&(l.has(arguments[c])?d=l.get(arguments[c]):b=!1),b||(d=o.apply(null,arguments),l.set(arguments[c],d)),e>0&&(h[c]={cacheItem:l,arg:arguments[c]},b?de(r,h):r.push(h),r.length>e&&me(r.shift())),n.wasMemoized=b,n.numArgs=c+1,d};return n.limit=e,n.wasMemoized=!1,n.cache=t,n.lru=r,n}};function de(e,t){var r=e.length,o=t.length,n,l,u;for(l=0;l<r;l++){for(n=!0,u=0;u<o;u++)if(!pe(e[l][u].arg,t[u].arg)){n=!1;break}if(n)break}e.push(e.splice(l,1)[0])}function me(e){var t=e.length,r=e[t-1],o,n;for(r.cacheItem.delete(r.arg),n=t-2;n>=0&&(r=e[n],o=r.cacheItem.get(r.arg),!o||!o.size);n--)r.cacheItem.delete(r.arg)}function pe(e,t){return e===t||e!==e&&t!==t}});a();i();s();a();i();s();a();i();s();a();i();s();a();i();s();var G=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof window<"u"?e=window:typeof self<"u"?e=self:e={},e})();var F=N(D(),1);a();i();s();var Le=__STORYBOOKCLIENTLOGGER__,{deprecate:Pe,logger:O,once:we,pretty:Ne}=__STORYBOOKCLIENTLOGGER__;var v="storybook/background",S="backgrounds",ze={UPDATE:`${v}/update`},{document:qe,window:$e}=G;var z=(e,t=[],r)=>{if(e==="transparent")return"transparent";if(t.find(n=>n.value===e))return e;let o=t.find(n=>n.name===r);if(o)return o.value;if(r){let n=t.map(l=>l.name).join(", ");O.warn(F.dedent`
        Backgrounds Addon: could not find the default color "${r}".
        These are the available colors for your story based on your configuration:
        ${n}.
      `)}return"transparent"};a();i();s();var f=__REACT__,{Children:Ze,Component:Je,Fragment:k,Profiler:Qe,PureComponent:Xe,StrictMode:et,Suspense:tt,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:rt,cloneElement:nt,createContext:ot,createElement:at,createFactory:it,createRef:st,forwardRef:lt,isValidElement:ut,lazy:ct,memo:C,useCallback:K,useContext:dt,useDebugValue:mt,useEffect:pt,useImperativeHandle:ft,useLayoutEffect:ht,useMemo:Y,useReducer:gt,useRef:yt,useState:q,version:bt}=__REACT__;a();i();s();var Tt=__STORYBOOKAPI__,{ActiveTabs:Ot,Consumer:vt,ManagerContext:kt,Provider:Ct,addons:L,combineParameters:At,controlOrMetaKey:Bt,controlOrMetaSymbol:Mt,eventMatchesShortcut:Rt,eventToShortcut:xt,isMacLike:Lt,isShortcutTaken:Pt,keyToSymbol:wt,merge:Nt,mockChannel:Gt,optionOrAltSymbol:Ht,shortcutMatchesShortcut:Dt,shortcutToHumanString:Ft,types:$,useAddonState:zt,useArgTypes:Kt,useArgs:Yt,useChannel:qt,useGlobalTypes:$t,useGlobals:A,useParameter:B,useSharedState:Wt,useStoryPrepared:Ut,useStorybookApi:Vt,useStorybookState:jt}=__STORYBOOKAPI__;var P=N(Q(),1);a();i();s();var mr=__STORYBOOKCOMPONENTS__,{A:pr,ActionBar:fr,AddonPanel:hr,Badge:gr,Bar:yr,Blockquote:br,Button:Sr,Code:_r,DL:Er,Div:Ir,DocumentWrapper:Tr,ErrorFormatter:Or,FlexBar:vr,Form:kr,H1:Cr,H2:Ar,H3:Br,H4:Mr,H5:Rr,H6:xr,HR:Lr,IconButton:M,IconButtonSkeleton:Pr,Icons:R,Img:wr,LI:Nr,Link:Gr,ListItem:Hr,Loader:Dr,OL:Fr,P:zr,Placeholder:Kr,Pre:Yr,ResetWrapper:qr,ScrollArea:$r,Separator:Wr,Spaced:Ur,Span:Vr,StorybookIcon:jr,StorybookLogo:Zr,Symbols:Jr,SyntaxHighlighter:Qr,TT:Xr,TabBar:en,TabButton:tn,TabWrapper:rn,Table:nn,Tabs:on,TabsState:an,TooltipLinkList:X,TooltipMessage:sn,TooltipNote:ln,UL:un,WithTooltip:ee,WithTooltipPure:cn,Zoom:dn,codeCommon:mn,components:pn,createCopyToClipboardFunction:fn,getStoryHref:hn,icons:gn,interleaveSeparators:yn,nameSpaceClassNames:bn,resetComponents:Sn,withReset:_n}=__STORYBOOKCOMPONENTS__;a();i();s();var vn=__STORYBOOKTHEMING__,{CacheProvider:kn,ClassNames:Cn,Global:An,ThemeProvider:Bn,background:Mn,color:Rn,convert:xn,create:Ln,createCache:Pn,createGlobal:wn,createReset:Nn,css:Gn,darken:Hn,ensure:Dn,ignoreSsrWarning:Fn,isPropValid:zn,jsx:Kn,keyframes:Yn,lighten:qn,styled:te,themes:$n,typography:Wn,useTheme:Un,withTheme:Vn}=__STORYBOOKTHEMING__;var fe=te.span(({background:e})=>({borderRadius:"1rem",display:"block",height:"1rem",width:"1rem",background:e}),({theme:e})=>({boxShadow:`${e.appBorderColor} 0 0 0 1px inset`})),re=(0,P.default)(1e3)((e,t,r,o,n,l)=>({id:e||t,title:t,onClick:()=>{n({selected:r,name:t})},value:r,right:o?f.createElement(fe,{background:r}):void 0,active:l})),he=(0,P.default)(10)((e,t,r)=>{let o=e.map(({name:n,value:l})=>re(null,n,l,!0,r,l===t));return t!=="transparent"?[re("reset","Clear background","transparent",null,r,!1),...o]:o}),ge={default:null,disable:!0,values:[]},ye=C(function(){let e=B(S,ge),[t,r]=q(!1),[o,n]=A(),l=o[S]?.value,u=Y(()=>z(l,e.values,e.default),[e,l]);Array.isArray(e)&&O.warn("Addon Backgrounds api has changed in Storybook 6.0. Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md");let d=K(c=>{n({[S]:{...o[S],value:c}})},[e,o,n]);return e.disable?null:f.createElement(k,null,f.createElement(ee,{placement:"top",closeOnOutsideClick:!0,tooltip:({onHide:c})=>f.createElement(X,{links:he(e.values,u,({selected:h})=>{u!==h&&d(h),c()})}),onVisibleChange:r},f.createElement(M,{key:"background",title:"Change the background of the preview",active:u!=="transparent"||t},f.createElement(R,{icon:"photo"}))))}),be=C(function(){let[e,t]=A(),{grid:r}=B(S,{grid:{disable:!1}});if(r?.disable)return null;let o=e[S]?.grid||!1;return f.createElement(M,{key:"background",active:o,title:"Apply a grid to the preview",onClick:()=>t({[S]:{...e[S],grid:!o}})},f.createElement(R,{icon:"grid"}))});L.register(v,()=>{L.add(v,{title:"Backgrounds",id:"backgrounds",type:$.TOOL,match:({viewMode:e})=>!!(e&&e.match(/^(story|docs)$/)),render:()=>f.createElement(k,null,f.createElement(ye,null),f.createElement(be,null))})});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.mjs.map
