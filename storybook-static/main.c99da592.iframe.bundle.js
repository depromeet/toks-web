(self.webpackChunktoks_web=self.webpackChunktoks_web||[]).push([[179],{"./node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs":(t,e,o)=>{"use strict";var n=(t=>o("./node_modules/@storybook/addon-docs/dist sync recursive"))(0)},"./node_modules/@storybook/addon-docs/dist sync recursive":t=>{function e(t){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id="./node_modules/@storybook/addon-docs/dist sync recursive",t.exports=e},"./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs":(t,e,o)=>{"use strict";let n;o.r(e),o.d(e,{argsEnhancers:()=>O});var r="actions",i="storybook/actions",l=`${i}/panel`,s=`${i}/action-event`,a=`${i}/action-clear`,d="$___storybook.isCyclic";let u="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),p={randomUUID:u},c=new Uint8Array(16);function f(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(c)}let m=[];for(let t=0;t<256;++t)m.push((t+256).toString(16).slice(1));function b(t,e=0){return(m[t[e+0]]+m[t[e+1]]+m[t[e+2]]+m[t[e+3]]+"-"+m[t[e+4]]+m[t[e+5]]+"-"+m[t[e+6]]+m[t[e+7]]+"-"+m[t[e+8]]+m[t[e+9]]+"-"+m[t[e+10]]+m[t[e+11]]+m[t[e+12]]+m[t[e+13]]+m[t[e+14]]+m[t[e+15]]).toLowerCase()}function g(t,e,o){if(p.randomUUID&&!e&&!t)return p.randomUUID();t=t||{};let n=t.random||(t.rng||f)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){o=o||0;for(let t=0;t<16;++t)e[o+t]=n[t];return e}return b(n)}var y=o("@storybook/preview-api"),x={depth:10,clearOnStoryChange:!0,limit:50},h=(t={})=>{Object.assign(x,t)},$=(t,e)=>{let o=Object.getPrototypeOf(t);return!o||e(o)?o:$(o,e)},v=t=>!!("object"==typeof t&&t&&$(t,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&"function"==typeof t.persist),w=t=>{if(v(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let o=Object.getOwnPropertyDescriptor(e,"view"),n=o?.value;return"object"==typeof n&&"Window"===n?.constructor.name&&Object.defineProperty(e,"view",{...o,value:Object.create(n.constructor.prototype)}),e}return t};function _(t,e={}){let o={...x,...e},n=function(...e){let n=y.addons.getChannel(),r=g(),i=e.map(w),l={id:r,count:0,data:{name:t,args:e.length>1?i:i[0]},options:{...o,maxDepth:5+(o.depth||3),allowFunction:o.allowFunction||!1}};n.emit(s,l)};return n.isAction=!0,n}var k=(t,e)=>typeof e[t]>"u"&&!(t in e),O=[t=>{let{initialArgs:e,argTypes:o,parameters:{actions:n}}=t;return n?.disable||!o?{}:Object.entries(o).filter(([t,e])=>!!e.action).reduce((t,[o,n])=>(k(o,e)&&(t[o]=_("string"==typeof n.action?n.action:o)),t),{})},t=>{let{initialArgs:e,argTypes:o,parameters:{actions:n}}=t;if(!n||n.disable||!n.argTypesRegex||!o)return{};let r=new RegExp(n.argTypesRegex);return Object.entries(o).filter(([t])=>!!r.test(t)).reduce((t,[o,n])=>(k(o,e)&&(t[o]=_(o)),t),{})}]},"./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs":(t,e,o)=>{"use strict";o.r(e),o.d(e,{decorators:()=>y,globals:()=>h,parameters:()=>x});var n=o("./node_modules/@storybook/global/dist/index.mjs"),r=o("./node_modules/ts-dedent/esm/index.js"),i=o("@storybook/client-logger"),l="backgrounds",s={UPDATE:"storybook/background/update"},{document:a,window:d}=n.global,u=()=>d.matchMedia("(prefers-reduced-motion: reduce)").matches,p=(t,e=[],o)=>{if("transparent"===t)return"transparent";if(e.find(e=>e.value===t))return t;let n=e.find(t=>t.name===o);if(n)return n.value;if(o){let t=e.map(t=>t.name).join(", ");i.logger.warn(r.Z`
        Backgrounds Addon: could not find the default color "${o}".
        These are the available colors for your story based on your configuration:
        ${t}.
      `)}return"transparent"},c=t=>{(Array.isArray(t)?t:[t]).forEach(f)},f=t=>{let e=a.getElementById(t);e&&e.parentElement.removeChild(e)},m=(t,e)=>{let o=a.getElementById(t);if(o)o.innerHTML!==e&&(o.innerHTML=e);else{let o=a.createElement("style");o.setAttribute("id",t),o.innerHTML=e,a.head.appendChild(o)}},b=(t,e,o)=>{let n=a.getElementById(t);if(n)n.innerHTML!==e&&(n.innerHTML=e);else{let n=a.createElement("style");n.setAttribute("id",t),n.innerHTML=e;let r=`addon-backgrounds-grid${o?`-docs-${o}`:""}`,i=a.getElementById(r);i?i.parentElement.insertBefore(n,i):a.head.appendChild(n)}},g=o("@storybook/preview-api"),y=[(t,e)=>{let{globals:o,parameters:n}=e,r=n[l].grid,i=o[l]?.grid===!0&&!0!==r.disable,{cellAmount:s,cellSize:a,opacity:d}=r,u="docs"===e.viewMode,p=void 0===n.layout||"padded"===n.layout?16:0,f=r.offsetX??(u?20:p),b=r.offsetY??(u?20:p),y=(0,g.useMemo)(()=>`
      ${"docs"===e.viewMode?`#anchor--${e.id} .docs-story`:".sb-show-main"} {
        background-size: ${a*s}px ${a*s}px, ${a*s}px ${a*s}px, ${a}px ${a}px, ${a}px ${a}px !important;
        background-position: ${f}px ${b}px, ${f}px ${b}px, ${f}px ${b}px, ${f}px ${b}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${d}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${d}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${d/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${d/2}) 1px, transparent 1px) !important;
      }
    `,[a]);return(0,g.useEffect)(()=>{let t="docs"===e.viewMode?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!i){c(t);return}m(t,y)},[i,y,e]),t()},(t,e)=>{let{globals:o,parameters:n}=e,r=o[l]?.value,i=n[l],s=(0,g.useMemo)(()=>i.disable?"transparent":p(r,i.values,i.default),[i,r]),a=(0,g.useMemo)(()=>s&&"transparent"!==s,[s]),d="docs"===e.viewMode?`#anchor--${e.id} .docs-story`:".sb-show-main",f=(0,g.useMemo)(()=>`
      ${d} {
        background: ${s} !important;
        ${u()?"":"transition: background-color 0.3s;"}
      }
    `,[s,d]);return(0,g.useEffect)(()=>{let t="docs"===e.viewMode?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!a){c(t);return}b(t,f,"docs"===e.viewMode?e.id:null)},[a,f,e]),t()}],x={[l]:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},h={[l]:null}},"./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs":(t,e,o)=>{"use strict";o.r(e),o.d(e,{parameters:()=>r});var n=o("./node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs"),r={docs:{renderer:async()=>{let{DocsRenderer:t}=await o.e(506).then(o.bind(o,"./node_modules/@storybook/addon-docs/dist/DocsRenderer-7FRJXR4N.mjs"));return new t}}}},"./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs":(t,e,o)=>{"use strict";o.r(e),o.d(e,{highlightObject:()=>c,highlightStyle:()=>p});var n="storybook/highlight",r="storybookHighlight",i=`${n}/add`,l=`${n}/reset`,s=o("./node_modules/@storybook/global/dist/index.mjs"),a=o("@storybook/preview-api"),d=o("@storybook/core-events"),{document:u}=s.global,p=(t="#FF4785",e="dashed")=>`
  outline: 2px ${e} ${t};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,c=t=>({outline:`2px dashed ${t}`,outlineOffset:2,boxShadow:"0 0 0 6px rgba(255,255,255,0.6)"}),f=a.addons.getChannel(),m=t=>{let e=r;b();let o=Array.from(new Set(t.elements)),n=u.createElement("style");n.setAttribute("id",e),n.innerHTML=o.map(e=>`${e}{
          ${p(t.color,t.style)}
         }`).join(" "),u.head.appendChild(n)},b=()=>{let t=r,e=u.getElementById(t);e&&e.parentNode.removeChild(e)};f.on(d.STORY_CHANGED,b),f.on(l,b),f.on(i,m)},"./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs":(t,e,o)=>{"use strict";o.r(e),o.d(e,{decorators:()=>X,globals:()=>W});var n="storybook/measure-addon",r=`${n}/tool`,i="measureEnabled",l={RESULT:`${n}/result`,REQUEST:`${n}/request`,CLEAR:`${n}/clear`},s=o("@storybook/preview-api"),a=o("./node_modules/@storybook/global/dist/index.mjs");function d(){let t=a.global.document.documentElement,e=Math.max(t.scrollHeight,t.offsetHeight);return{width:Math.max(t.scrollWidth,t.offsetWidth),height:e}}function u(){let t=a.global.document.createElement("canvas");t.id="storybook-addon-measure";let e=t.getContext("2d"),{width:o,height:n}=d();return p(t,e,{width:o,height:n}),t.style.position="absolute",t.style.left="0",t.style.top="0",t.style.zIndex="2147483647",t.style.pointerEvents="none",a.global.document.body.appendChild(t),{canvas:t,context:e,width:o,height:n}}function p(t,e,{width:o,height:n}){t.style.width=`${o}px`,t.style.height=`${n}px`;let r=a.global.window.devicePixelRatio;t.width=Math.floor(o*r),t.height=Math.floor(n*r),e.scale(r,r)}var c={};function f(){c.canvas||(c=u())}function m(){c.context&&c.context.clearRect(0,0,c.width,c.height)}function b(t){m(),t(c.context)}function g(){p(c.canvas,c.context,{width:0,height:0});let{width:t,height:e}=d();p(c.canvas,c.context,{width:t,height:e}),c.width=t,c.height=e}function y(){c.canvas&&(m(),c.canvas.parentNode.removeChild(c.canvas),c={})}var x={margin:"#f6b26b",border:"#ffe599",padding:"#93c47d",content:"#6fa8dc",text:"#232020"},h=6;function $(t,{x:e,y:o,w:n,h:r,r:i}){e-=n/2,o-=r/2,n<2*i&&(i=n/2),r<2*i&&(i=r/2),t.beginPath(),t.moveTo(e+i,o),t.arcTo(e+n,o,e+n,o+r,i),t.arcTo(e+n,o+r,e,o+r,i),t.arcTo(e,o+r,e,o,i),t.arcTo(e,o,e+n,o,i),t.closePath()}function v(t,{padding:e,border:o,width:n,height:r,top:i,left:l}){let s=n-o.left-o.right-e.left-e.right,a=r-e.top-e.bottom-o.top-o.bottom,d=l+o.left+e.left,u=i+o.top+e.top;return"top"===t?d+=s/2:"right"===t?(d+=s,u+=a/2):"bottom"===t?(d+=s/2,u+=a):"left"===t?u+=a/2:"center"===t&&(d+=s/2,u+=a/2),{x:d,y:u}}function w(t,e,{margin:o,border:n,padding:r},i,l){let s=t=>0,a=0,d=0,u=l?1:.5,p=l?2*i:0;return"padding"===t?s=t=>r[t]*u+p:"border"===t?s=t=>r[t]+n[t]*u+p:"margin"===t&&(s=t=>r[t]+n[t]+o[t]*u+p),"top"===e?d=-s("top"):"right"===e?a=s("right"):"bottom"===e?d=s("bottom"):"left"===e&&(a=-s("left")),{offsetX:a,offsetY:d}}function _(t,e){return Math.abs(t.x-e.x)<Math.abs(t.w+e.w)/2&&Math.abs(t.y-e.y)<Math.abs(t.h+e.h)/2}function k(t,e,o){return"top"===t?e.y=o.y-o.h-h:"right"===t?e.x=o.x+o.w/2+h+e.w/2:"bottom"===t?e.y=o.y+o.h+h:"left"===t&&(e.x=o.x-o.w/2-h-e.w/2),{x:e.x,y:e.y}}function O(t,e,{x:o,y:n,w:r,h:i},l){return $(t,{x:o,y:n,w:r,h:i,r:3}),t.fillStyle=`${x[e]}dd`,t.fill(),t.strokeStyle=x[e],t.stroke(),t.fillStyle=x.text,t.fillText(l,o,n),$(t,{x:o,y:n,w:r,h:i,r:3}),t.fillStyle=`${x[e]}dd`,t.fill(),t.strokeStyle=x[e],t.stroke(),t.fillStyle=x.text,t.fillText(l,o,n),{x:o,y:n,w:r,h:i}}function E(t,e){t.font="600 12px monospace",t.textBaseline="middle",t.textAlign="center";let o=t.measureText(e),n=o.actualBoundingBoxAscent+o.actualBoundingBoxDescent;return{w:o.width+2*h,h:n+2*h}}function j(t,e,{type:o,position:n="center",text:r},i,l=!1){let{x:s,y:a}=v(n,e),{offsetX:d,offsetY:u}=w(o,n,e,h+1,l);s+=d,a+=u;let{w:p,h:c}=E(t,r);if(i&&_({x:s,y:a,w:p,h:c},i)){let t=k(n,{x:s,y:a,w:p,h:c},i);s=t.x,a=t.y}return O(t,o,{x:s,y:a,w:p,h:c},r)}function C(t,{w:e,h:o}){return{offsetX:("left"===t.x?-1:1)*(.5*e+h),offsetY:("top"===t.y?-1:1)*(.5*o+h)}}function S(t,e,{type:o,text:n}){let{floatingAlignment:r,extremities:i}=e,l=i[r.x],s=i[r.y],{w:a,h:d}=E(t,n),{offsetX:u,offsetY:p}=C(r,{w:a,h:d});return O(t,o,{x:l+=u,y:s+=p,w:a,h:d},n)}function R(t,e,o,n){let r=[];o.forEach((o,i)=>{let l=n&&"center"===o.position?S(t,e,o):j(t,e,o,r[i-1],n);r[i]=l})}function A(t,e,o,n){let r=o.reduce((t,e)=>(Object.prototype.hasOwnProperty.call(t,e.position)||(t[e.position]=[]),t[e.position].push(e),t),{});r.top&&R(t,e,r.top,n),r.right&&R(t,e,r.right,n),r.bottom&&R(t,e,r.bottom,n),r.left&&R(t,e,r.left,n),r.center&&R(t,e,r.center,n)}var T={margin:"#f6b26ba8",border:"#ffe599a8",padding:"#93c47d8c",content:"#6fa8dca8"},M=30;function L(t){return parseInt(t.replace("px",""),10)}function N(t){return Number.isInteger(t)?t:t.toFixed(2)}function U(t){return t.filter(t=>0!==t.text&&"0"!==t.text)}function P(t){let e={top:a.global.window.scrollY,bottom:a.global.window.scrollY+a.global.window.innerHeight,left:a.global.window.scrollX,right:a.global.window.scrollX+a.global.window.innerWidth},o={top:Math.abs(e.top-t.top),bottom:Math.abs(e.bottom-t.bottom),left:Math.abs(e.left-t.left),right:Math.abs(e.right-t.right)};return{x:o.left>o.right?"left":"right",y:o.top>o.bottom?"top":"bottom"}}function B(t){let e=a.global.getComputedStyle(t),{top:o,left:n,right:r,bottom:i,width:l,height:s}=t.getBoundingClientRect(),{marginTop:d,marginBottom:u,marginLeft:p,marginRight:c,paddingTop:f,paddingBottom:m,paddingLeft:b,paddingRight:g,borderBottomWidth:y,borderTopWidth:x,borderLeftWidth:h,borderRightWidth:$}=e;o+=a.global.window.scrollY,n+=a.global.window.scrollX,i+=a.global.window.scrollY,r+=a.global.window.scrollX;let v={top:L(d),bottom:L(u),left:L(p),right:L(c)},w={top:L(f),bottom:L(m),left:L(b),right:L(g)},_={top:L(x),bottom:L(y),left:L(h),right:L($)},k={top:o-v.top,bottom:i+v.bottom,left:n-v.left,right:r+v.right};return{margin:v,padding:w,border:_,top:o,left:n,bottom:i,right:r,width:l,height:s,extremities:k,floatingAlignment:P(k)}}function D(t,{margin:e,width:o,height:n,top:r,left:i,bottom:l,right:s}){let a=n+e.bottom+e.top;return t.fillStyle=T.margin,t.fillRect(i,r-e.top,o,e.top),t.fillRect(s,r-e.top,e.right,a),t.fillRect(i,l,o,e.bottom),t.fillRect(i-e.left,r-e.top,e.left,a),U([{type:"margin",text:N(e.top),position:"top"},{type:"margin",text:N(e.right),position:"right"},{type:"margin",text:N(e.bottom),position:"bottom"},{type:"margin",text:N(e.left),position:"left"}])}function I(t,{padding:e,border:o,width:n,height:r,top:i,left:l,bottom:s,right:a}){let d=n-o.left-o.right,u=r-e.top-e.bottom-o.top-o.bottom;return t.fillStyle=T.padding,t.fillRect(l+o.left,i+o.top,d,e.top),t.fillRect(a-e.right-o.right,i+e.top+o.top,e.right,u),t.fillRect(l+o.left,s-e.bottom-o.bottom,d,e.bottom),t.fillRect(l+o.left,i+e.top+o.top,e.left,u),U([{type:"padding",text:e.top,position:"top"},{type:"padding",text:e.right,position:"right"},{type:"padding",text:e.bottom,position:"bottom"},{type:"padding",text:e.left,position:"left"}])}function Y(t,{border:e,width:o,height:n,top:r,left:i,bottom:l,right:s}){let a=n-e.top-e.bottom;return t.fillStyle=T.border,t.fillRect(i,r,o,e.top),t.fillRect(i,l-e.bottom,o,e.bottom),t.fillRect(i,r+e.top,e.left,a),t.fillRect(s-e.right,r+e.top,e.right,a),U([{type:"border",text:e.top,position:"top"},{type:"border",text:e.right,position:"right"},{type:"border",text:e.bottom,position:"bottom"},{type:"border",text:e.left,position:"left"}])}function H(t,{padding:e,border:o,width:n,height:r,top:i,left:l}){let s=n-o.left-o.right-e.left-e.right,a=r-e.top-e.bottom-o.top-o.bottom;return t.fillStyle=T.content,t.fillRect(l+o.left+e.left,i+o.top+e.top,s,a),[{type:"content",position:"center",text:`${N(s)} x ${N(a)}`}]}function F(t){return e=>{if(t&&e){let o=B(t),n=D(e,o),r=I(e,o),i=Y(e,o),l=H(e,o),s=o.width<=3*M||o.height<=M;A(e,o,[...l,...r,...i,...n],s)}}}function z(t){b(F(t))}var q=(t,e)=>{let o=a.global.document.elementFromPoint(t,e),n=o=>{if(o&&o.shadowRoot){let r=o.shadowRoot.elementFromPoint(t,e);return o.isEqualNode(r)?o:r.shadowRoot?n(r):r}return o};return n(o)||o},K={x:0,y:0};function V(t,e){z(q(t,e))}var X=[(t,e)=>{let{measureEnabled:o}=e.globals;return(0,s.useEffect)(()=>{let t=t=>{window.requestAnimationFrame(()=>{t.stopPropagation(),K.x=t.clientX,K.y=t.clientY})};return document.addEventListener("pointermove",t),()=>{document.removeEventListener("pointermove",t)}},[]),(0,s.useEffect)(()=>{let t=t=>{window.requestAnimationFrame(()=>{t.stopPropagation(),V(t.clientX,t.clientY)})},e=()=>{window.requestAnimationFrame(()=>{g()})};return o&&(document.addEventListener("pointerover",t),f(),window.addEventListener("resize",e),V(K.x,K.y)),()=>{window.removeEventListener("resize",e),y()}},[o]),t()}],W={[i]:!1}},"./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs":(t,e,o)=>{"use strict";o.r(e),o.d(e,{decorators:()=>c,globals:()=>f});var n="storybook/outline",r="outline",i=o("@storybook/preview-api"),l=o("./node_modules/@storybook/global/dist/index.mjs"),s=o("./node_modules/ts-dedent/esm/index.js"),a=t=>{(Array.isArray(t)?t:[t]).forEach(d)},d=t=>{let e="string"==typeof t?t:t.join(""),o=l.global.document.getElementById(e);o&&o.parentElement&&o.parentElement.removeChild(o)},u=(t,e)=>{let o=l.global.document.getElementById(t);if(o)o.innerHTML!==e&&(o.innerHTML=e);else{let o=l.global.document.createElement("style");o.setAttribute("id",t),o.innerHTML=e,l.global.document.head.appendChild(o)}};function p(t){return s.Z`
    ${t} body {
      outline: 1px solid #2980b9 !important;
    }

    ${t} article {
      outline: 1px solid #3498db !important;
    }

    ${t} nav {
      outline: 1px solid #0088c3 !important;
    }

    ${t} aside {
      outline: 1px solid #33a0ce !important;
    }

    ${t} section {
      outline: 1px solid #66b8da !important;
    }

    ${t} header {
      outline: 1px solid #99cfe7 !important;
    }

    ${t} footer {
      outline: 1px solid #cce7f3 !important;
    }

    ${t} h1 {
      outline: 1px solid #162544 !important;
    }

    ${t} h2 {
      outline: 1px solid #314e6e !important;
    }

    ${t} h3 {
      outline: 1px solid #3e5e85 !important;
    }

    ${t} h4 {
      outline: 1px solid #449baf !important;
    }

    ${t} h5 {
      outline: 1px solid #c7d1cb !important;
    }

    ${t} h6 {
      outline: 1px solid #4371d0 !important;
    }

    ${t} main {
      outline: 1px solid #2f4f90 !important;
    }

    ${t} address {
      outline: 1px solid #1a2c51 !important;
    }

    ${t} div {
      outline: 1px solid #036cdb !important;
    }

    ${t} p {
      outline: 1px solid #ac050b !important;
    }

    ${t} hr {
      outline: 1px solid #ff063f !important;
    }

    ${t} pre {
      outline: 1px solid #850440 !important;
    }

    ${t} blockquote {
      outline: 1px solid #f1b8e7 !important;
    }

    ${t} ol {
      outline: 1px solid #ff050c !important;
    }

    ${t} ul {
      outline: 1px solid #d90416 !important;
    }

    ${t} li {
      outline: 1px solid #d90416 !important;
    }

    ${t} dl {
      outline: 1px solid #fd3427 !important;
    }

    ${t} dt {
      outline: 1px solid #ff0043 !important;
    }

    ${t} dd {
      outline: 1px solid #e80174 !important;
    }

    ${t} figure {
      outline: 1px solid #ff00bb !important;
    }

    ${t} figcaption {
      outline: 1px solid #bf0032 !important;
    }

    ${t} table {
      outline: 1px solid #00cc99 !important;
    }

    ${t} caption {
      outline: 1px solid #37ffc4 !important;
    }

    ${t} thead {
      outline: 1px solid #98daca !important;
    }

    ${t} tbody {
      outline: 1px solid #64a7a0 !important;
    }

    ${t} tfoot {
      outline: 1px solid #22746b !important;
    }

    ${t} tr {
      outline: 1px solid #86c0b2 !important;
    }

    ${t} th {
      outline: 1px solid #a1e7d6 !important;
    }

    ${t} td {
      outline: 1px solid #3f5a54 !important;
    }

    ${t} col {
      outline: 1px solid #6c9a8f !important;
    }

    ${t} colgroup {
      outline: 1px solid #6c9a9d !important;
    }

    ${t} button {
      outline: 1px solid #da8301 !important;
    }

    ${t} datalist {
      outline: 1px solid #c06000 !important;
    }

    ${t} fieldset {
      outline: 1px solid #d95100 !important;
    }

    ${t} form {
      outline: 1px solid #d23600 !important;
    }

    ${t} input {
      outline: 1px solid #fca600 !important;
    }

    ${t} keygen {
      outline: 1px solid #b31e00 !important;
    }

    ${t} label {
      outline: 1px solid #ee8900 !important;
    }

    ${t} legend {
      outline: 1px solid #de6d00 !important;
    }

    ${t} meter {
      outline: 1px solid #e8630c !important;
    }

    ${t} optgroup {
      outline: 1px solid #b33600 !important;
    }

    ${t} option {
      outline: 1px solid #ff8a00 !important;
    }

    ${t} output {
      outline: 1px solid #ff9619 !important;
    }

    ${t} progress {
      outline: 1px solid #e57c00 !important;
    }

    ${t} select {
      outline: 1px solid #e26e0f !important;
    }

    ${t} textarea {
      outline: 1px solid #cc5400 !important;
    }

    ${t} details {
      outline: 1px solid #33848f !important;
    }

    ${t} summary {
      outline: 1px solid #60a1a6 !important;
    }

    ${t} command {
      outline: 1px solid #438da1 !important;
    }

    ${t} menu {
      outline: 1px solid #449da6 !important;
    }

    ${t} del {
      outline: 1px solid #bf0000 !important;
    }

    ${t} ins {
      outline: 1px solid #400000 !important;
    }

    ${t} img {
      outline: 1px solid #22746b !important;
    }

    ${t} iframe {
      outline: 1px solid #64a7a0 !important;
    }

    ${t} embed {
      outline: 1px solid #98daca !important;
    }

    ${t} object {
      outline: 1px solid #00cc99 !important;
    }

    ${t} param {
      outline: 1px solid #37ffc4 !important;
    }

    ${t} video {
      outline: 1px solid #6ee866 !important;
    }

    ${t} audio {
      outline: 1px solid #027353 !important;
    }

    ${t} source {
      outline: 1px solid #012426 !important;
    }

    ${t} canvas {
      outline: 1px solid #a2f570 !important;
    }

    ${t} track {
      outline: 1px solid #59a600 !important;
    }

    ${t} map {
      outline: 1px solid #7be500 !important;
    }

    ${t} area {
      outline: 1px solid #305900 !important;
    }

    ${t} a {
      outline: 1px solid #ff62ab !important;
    }

    ${t} em {
      outline: 1px solid #800b41 !important;
    }

    ${t} strong {
      outline: 1px solid #ff1583 !important;
    }

    ${t} i {
      outline: 1px solid #803156 !important;
    }

    ${t} b {
      outline: 1px solid #cc1169 !important;
    }

    ${t} u {
      outline: 1px solid #ff0430 !important;
    }

    ${t} s {
      outline: 1px solid #f805e3 !important;
    }

    ${t} small {
      outline: 1px solid #d107b2 !important;
    }

    ${t} abbr {
      outline: 1px solid #4a0263 !important;
    }

    ${t} q {
      outline: 1px solid #240018 !important;
    }

    ${t} cite {
      outline: 1px solid #64003c !important;
    }

    ${t} dfn {
      outline: 1px solid #b4005a !important;
    }

    ${t} sub {
      outline: 1px solid #dba0c8 !important;
    }

    ${t} sup {
      outline: 1px solid #cc0256 !important;
    }

    ${t} time {
      outline: 1px solid #d6606d !important;
    }

    ${t} code {
      outline: 1px solid #e04251 !important;
    }

    ${t} kbd {
      outline: 1px solid #5e001f !important;
    }

    ${t} samp {
      outline: 1px solid #9c0033 !important;
    }

    ${t} var {
      outline: 1px solid #d90047 !important;
    }

    ${t} mark {
      outline: 1px solid #ff0053 !important;
    }

    ${t} bdi {
      outline: 1px solid #bf3668 !important;
    }

    ${t} bdo {
      outline: 1px solid #6f1400 !important;
    }

    ${t} ruby {
      outline: 1px solid #ff7b93 !important;
    }

    ${t} rt {
      outline: 1px solid #ff2f54 !important;
    }

    ${t} rp {
      outline: 1px solid #803e49 !important;
    }

    ${t} span {
      outline: 1px solid #cc2643 !important;
    }

    ${t} br {
      outline: 1px solid #db687d !important;
    }

    ${t} wbr {
      outline: 1px solid #db175b !important;
    }`}var c=[(t,e)=>{let{globals:o}=e,n=[!0,"true"].includes(o[r]),l="docs"===e.viewMode,s=(0,i.useMemo)(()=>p(l?`#anchor--${e.id} .docs-story`:".sb-show-main"),[e]);return(0,i.useEffect)(()=>{let t=l?`addon-outline-docs-${e.id}`:"addon-outline";return n?u(t,s):a(t),()=>{a(t)}},[n,s,e]),t()}],f={[r]:!1}},"./node_modules/@storybook/addon-links/dist/preview.mjs":(t,e,o)=>{"use strict";o.r(e),o.d(e,{decorators:()=>v});var n="storybook/links",r="links",i={NAVIGATE:`${n}/navigate`,REQUEST:`${n}/request`,RECEIVE:`${n}/receive`},l=o("./node_modules/@storybook/global/dist/index.mjs"),s=o("@storybook/preview-api"),a=o("@storybook/core-events"),d=o("./node_modules/@storybook/csf/dist/index.mjs"),{document:u,HTMLElement:p}=l.global;function c(t){let e={},o=("?"===t[0]?t.substring(1):t).split("&").filter(Boolean);for(let t=0;t<o.length;t++){let n=o[t].split("=");e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]||"")}return e}var f=t=>s.addons.getChannel().emit(a.SELECT_STORY,t),m=(t,e)=>new Promise(o=>{let{location:n}=u;o(`${n.origin+n.pathname.replace(/iframe\.html$/,"")}?${Object.entries({path:`/story/${toId(t||[].concat(c(n.search).id)[0].split("--",2)[0],e)}`}).map(t=>`${t[0]}=${t[1]}`).join("&")}`)}),b=t=>e=>"function"==typeof e?e(...t):e,g=(t,e)=>(...o)=>{let n=b(o),r=n(t),i=!!e&&n(e);r?.match(/--/)&&!i?f({storyId:r}):i&&r?f({kind:r,story:i}):r?f({kind:r}):i&&f({story:i})},y=t=>{let{target:e}=t;if(!(e instanceof p))return;let{sbKind:o,sbStory:n}=e.dataset;(o||n)&&(t.preventDefault(),f({kind:o,story:n}))},x=!1,h=()=>{x||(x=!0,u.addEventListener("click",y))},$=()=>{x&&(x=!1,u.removeEventListener("click",y))},v=[(0,s.makeDecorator)({name:"withLinks",parameterName:r,wrapper:(t,e)=>(h(),s.addons.getChannel().once(a.STORY_CHANGED,$),t(e))})]},"./node_modules/@storybook/csf/dist/index.mjs":(t,e,o)=>{"use strict";o.d(e,{Nw:()=>b,fo:()=>m});var n=Object.create,r=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,d=(t,e,o,n)=>{if(e&&"object"==typeof e||"function"==typeof e)for(let s of l(e))a.call(t,s)||s===o||r(t,s,{get:()=>e[s],enumerable:!(n=i(e,s))||n.enumerable});return t};function u(t){return t.replace(/_/g," ").replace(/-/g," ").replace(/\./g," ").replace(/([^\n])([A-Z])([a-z])/g,(t,e,o,n)=>`${e} ${o}${n}`).replace(/([a-z])([A-Z])/g,(t,e,o)=>`${e} ${o}`).replace(/([a-z])([0-9])/gi,(t,e,o)=>`${e} ${o}`).replace(/([0-9])([a-z])/gi,(t,e,o)=>`${e} ${o}`).replace(/(\s|^)(\w)/g,(t,e,o)=>`${e}${o.toUpperCase()}`).replace(/ +/g," ").trim()}var p=((t,e,o)=>(o=null!=t?n(s(t)):{},d(!e&&t&&t.__esModule?o:r(o,"default",{value:t,enumerable:!0}),t)))(((t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports))(t=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isEqual=function(){var t=Object.prototype.toString,e=Object.getPrototypeOf,o=Object.getOwnPropertySymbols?function(t){return Object.keys(t).concat(Object.getOwnPropertySymbols(t))}:Object.keys;return function(n,r){return function n(r,i,l){var s,a,d,u=t.call(r),p=t.call(i);if(r===i)return!0;if(null==r||null==i)return!1;if(l.indexOf(r)>-1&&l.indexOf(i)>-1)return!0;if(l.push(r,i),u!=p||(s=o(r),a=o(i),s.length!=a.length||s.some(function(t){return!n(r[t],i[t],l)})))return!1;switch(u.slice(8,-1)){case"Symbol":return r.valueOf()==i.valueOf();case"Date":case"Number":return+r==+i||+r!=+r&&+i!=+i;case"RegExp":case"Function":case"String":case"Boolean":return""+r==""+i;case"Set":case"Map":s=r.entries(),a=i.entries();do if(!n((d=s.next()).value,a.next().value,l))return!1;while(!d.done)return!0;case"ArrayBuffer":r=new Uint8Array(r),i=new Uint8Array(i);case"DataView":r=new Uint8Array(r.buffer),i=new Uint8Array(i.buffer);case"Float32Array":case"Float64Array":case"Int8Array":case"Int16Array":case"Int32Array":case"Uint8Array":case"Uint16Array":case"Uint32Array":case"Uint8ClampedArray":case"Arguments":case"Array":if(r.length!=i.length)return!1;for(d=0;d<r.length;d++)if((d in r||d in i)&&(d in r!=d in i||!n(r[d],i[d],l)))return!1;return!0;case"Object":return n(e(r),e(i),l);default:return!1}}(n,r,[])}}()})()),c=t=>t.map(t=>"u">typeof t).filter(Boolean).length,f=(t,e)=>{let{exists:o,eq:n,neq:r,truthy:i}=t;if(c([o,n,r,i])>1)throw Error(`Invalid conditional test ${JSON.stringify({exists:o,eq:n,neq:r})}`);if("u">typeof n)return(0,p.isEqual)(e,n);if("u">typeof r)return!(0,p.isEqual)(e,r);if("u">typeof o){let t="u">typeof e;return o?t:!t}return typeof i>"u"||i?!!e:!e},m=(t,e,o)=>{if(!t.if)return!0;let{arg:n,global:r}=t.if;if(1!==c([n,r]))throw Error(`Invalid conditional value ${JSON.stringify({arg:n,global:r})}`);let i=n?e[n]:o[r];return f(t.if,i)},b=t=>t.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"-").replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),g=(t,e)=>{let o=b(t);if(""===o)throw Error(`Invalid ${e} '${t}', must include alphanumeric characters`);return o},y=(t,e)=>`${g(t,"kind")}${e?`--${g(e,"name")}`:""}`,x=t=>u(t),h=(t,{rootSeparator:e,groupSeparator:o})=>{let[n,r]=t.split(e,2),i=(r||t).split(o).filter(t=>!!t);return{root:r?n:null,groups:i}}},"./node_modules/@storybook/global/dist/index.mjs":(t,e,o)=>{"use strict";o.d(e,{global:()=>n});var n=(()=>"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:void 0!==o.g?o.g:"undefined"!=typeof self?self:{})()},"./.storybook/preview.ts":(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>r});var n={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}};let r=n},"./storybook-config-entry.js":(t,e,o)=>{"use strict";var n=o("./node_modules/@storybook/global/dist/index.mjs"),r=o("@storybook/preview-api");let i=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,l=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__;function s(t,e,o,n,r,i,l){try{var s=t[i](l),a=s.value}catch(t){o(t);return}s.done?e(a):Promise.resolve(a).then(n,r)}function a(t){return function(){var e=this,o=arguments;return new Promise(function(n,r){var i=t.apply(e,o);function l(t){s(i,n,r,l,a,"next",t)}function a(t){s(i,n,r,l,a,"throw",t)}l(void 0)})}}function d(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}function u(t,e){var o,n,r,i,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(o)throw TypeError("Generator is already executing.");for(;l;)try{if(o=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,n=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(r=(r=l.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){l.label=i[1];break}if(6===i[0]&&l.label<r[1]){l.label=r[1],r=i;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(i);break}r[2]&&l.ops.pop(),l.trys.pop();continue}i=e.call(t,l)}catch(t){i=[6,t],n=0}finally{o=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function p(t){var e="function"==typeof Symbol&&Symbol.iterator,o=e&&t[e],n=0;if(o)return o.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var c=function(t){return t()},f=[function(){var t=a(function(t){var e;return u(this,function(n){return/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(t)?(e=t.substring(6),[2,o("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+e)]):[2]})});return function(e){return t.apply(this,arguments)}}(),function(){var t=a(function(t){var e;return u(this,function(n){return/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(t)?(e=t.substring(6),[2,o("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+e)]):[2]})});return function(e){return t.apply(this,arguments)}}()];function m(t){return b.apply(this,arguments)}function b(){return(b=a(function(t){var e,o,n;return u(this,function(r){switch(r.label){case 0:e=function(e){var o;return u(this,function(n){switch(n.label){case 0:return[4,c(function(){return f[e](t)})];case 1:if(o=n.sent())return[2,{v:o}];return[2]}})},o=0,r.label=1;case 1:if(!(o<f.length))return[3,4];return[5,p(e(o))];case 2:if("object"===d(n=r.sent()))return[2,n.v];r.label=3;case 3:return o++,[3,1];case 4:return[2]}})})).apply(this,arguments)}var g=n.global.SERVER_CHANNEL_URL,y=function(){return(0,r.composeConfigs)([o("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),o("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),o("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),o("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),o("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),o("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),o("./node_modules/@storybook/addon-links/dist/preview.mjs"),o("./.storybook/preview.ts")])},x=(0,i.createChannel)({page:"preview"});if(r.addons.setChannel(x),g){var h=(0,l.createChannel)({url:g});r.addons.setServerChannel(h),window.__STORYBOOK_SERVER_CHANNEL__=h}var $=new r.PreviewWeb;window.__STORYBOOK_PREVIEW__=$,window.__STORYBOOK_STORY_STORE__=$.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=x,window.__STORYBOOK_CLIENT_API__=new r.ClientApi({storyStore:$.storyStore}),$.initialize({importFn:m,getProjectAnnotations:y})},"./node_modules/ts-dedent/esm/index.js":(t,e,o)=>{"use strict";function n(t){for(var e=[],o=1;o<arguments.length;o++)e[o-1]=arguments[o];var n=Array.from("string"==typeof t?[t]:t);n[n.length-1]=n[n.length-1].replace(/\r?\n([\t ]*)$/,"");var r=n.reduce(function(t,e){var o=e.match(/\n([\t ]+|(?!\s).)/g);return o?t.concat(o.map(function(t){var e,o;return null!==(o=null===(e=t.match(/[\t ]/g))||void 0===e?void 0:e.length)&&void 0!==o?o:0})):t},[]);if(r.length){var i=RegExp("\n[	 ]{"+Math.min.apply(Math,r)+"}","g");n=n.map(function(t){return t.replace(i,"\n")})}n[0]=n[0].replace(/^\r?\n/,"");var l=n[0];return e.forEach(function(t,e){var o=l.match(/(?:^|\n)( *)$/),r=o?o[1]:"",i=t;"string"==typeof t&&t.includes("\n")&&(i=String(t).split("\n").map(function(t,e){return 0===e?t:""+r+t}).join("\n")),l+=i+n[e+1]}),l}o.d(e,{C:()=>r,Z:()=>n});let r=n},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":t=>{function e(t){return Promise.resolve().then(()=>{var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}e.keys=()=>[],e.resolve=e,e.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",t.exports=e},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(t,e,o)=>{var n={"./components/hello/index.stories":["./src/components/hello/index.stories.tsx",307],"./components/hello/index.stories.tsx":["./src/components/hello/index.stories.tsx",307]};function r(t){if(!o.o(n,t))return Promise.resolve().then(()=>{var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=n[t],r=e[0];return o.e(e[1]).then(()=>o(r))}r.keys=()=>Object.keys(n),r.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",t.exports=r},"@storybook/channels":t=>{"use strict";t.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":t=>{"use strict";t.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":t=>{"use strict";t.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/preview-api":t=>{"use strict";t.exports=__STORYBOOK_MODULE_PREVIEW_API__}},t=>{var e=(e=>t(t.s=e))("./storybook-config-entry.js")}]);