"use strict";(self.webpackChunktoks_web=self.webpackChunktoks_web||[]).push([[454],{"./src/stories/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Tooltip_stories,기본_Tooltip:()=>기본_Tooltip});var defineProperty=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),Text=__webpack_require__("./src/common/components/Text/index.tsx"),__jsx=react.createElement;function TooltipContent(_ref){var message=_ref.message,position=_ref.position;return __jsx("div",{style:{left:position.left,top:position.top},className:"z-9999 absolute -ml-6px rounded-8px bg-gray-90 px-16px py-6px"},__jsx(Text.x,{typo:"body",color:"white"},message),__jsx("div",{className:"absolute -top-10px left-40px  h-0 w-0 border-x-5px border-b-10px border-x-transparent border-b-gray-90 "}))}TooltipContent.displayName="TooltipContent",TooltipContent.__docgenInfo={description:"",methods:[],displayName:"TooltipContent",props:{message:{required:!0,tsType:{name:"string"},description:""},position:{required:!0,tsType:{name:"PositionType"},description:""}}};try{TooltipContent.displayName="TooltipContent",TooltipContent.__docgenInfo={description:"",displayName:"TooltipContent",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"PositionType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/Tooltip/TooltipContent.tsx#TooltipContent"]={docgenInfo:TooltipContent.__docgenInfo,name:"TooltipContent",path:"src/common/components/Tooltip/TooltipContent.tsx#TooltipContent"})}catch(__react_docgen_typescript_loader_error){}var react_dom=__webpack_require__("./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),TooltipPortal=function TooltipPortal(_ref){var children=_ref.children,portalRoot=document.getElementById("portal");return portalRoot?(0,react_dom.createPortal)(children,portalRoot):null};try{TooltipPortal.displayName="TooltipPortal",TooltipPortal.__docgenInfo={description:"",displayName:"TooltipPortal",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/Tooltip/TooltipPortal.tsx#TooltipPortal"]={docgenInfo:TooltipPortal.__docgenInfo,name:"TooltipPortal",path:"src/common/components/Tooltip/TooltipPortal.tsx#TooltipPortal"})}catch(__react_docgen_typescript_loader_error){}var _기본_Tooltip$parameter,_기본_Tooltip$parameter2,Tooltip_jsx=react.createElement;function Tooltip(_ref){var _position$current,_position$current2,children=_ref.children,message=_ref.message,_ref$isVisibleTooltip=_ref.isVisibleTooltip,isVisibleTooltip=void 0===_ref$isVisibleTooltip||_ref$isVisibleTooltip,ref=(0,react.useRef)(null),_useState=(0,react.useState)(!1),show=_useState[0],setShow=_useState[1],position=(0,react.useRef)(null),handleToggleTooltip=function handleToggleTooltip(isShow){position.current=function getTooltipPosition(ref){var _ref$current,_ref$current$clientHe,_ref$current2,_ref$current$clientWi,_ref$current3,gap=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,_ref=(null===(_ref$current=ref.current)||void 0===_ref$current?void 0:_ref$current.getBoundingClientRect())||{left:0,top:0},tooltipLeft=_ref.left,tooltipTop=_ref.top,tooltipContentHeight=null!==(_ref$current$clientHe=null===(_ref$current2=ref.current)||void 0===_ref$current2?void 0:_ref$current2.clientHeight)&&void 0!==_ref$current$clientHe?_ref$current$clientHe:0;return{left:tooltipLeft+(null!==(_ref$current$clientWi=null===(_ref$current3=ref.current)||void 0===_ref$current3?void 0:_ref$current3.clientWidth)&&void 0!==_ref$current$clientWi?_ref$current$clientWi:0)/2-40,top:tooltipTop+tooltipContentHeight+5+gap}}(ref),setShow(isShow)};return Tooltip_jsx("span",{onFocus:function onFocus(){return handleToggleTooltip(!0)},onMouseLeave:function onMouseLeave(){return handleToggleTooltip(!1)},onMouseOver:function onMouseOver(){return handleToggleTooltip(!0)},ref,style:{display:"inline-block",minWidth:0,position:"relative"}},children,show&&isVisibleTooltip&&Tooltip_jsx(TooltipPortal,null,Tooltip_jsx(TooltipContent,{message,position:{left:null===(_position$current=position.current)||void 0===_position$current?void 0:_position$current.left,top:null===(_position$current2=position.current)||void 0===_position$current2?void 0:_position$current2.top}})))}Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{isVisibleTooltip:{defaultValue:{value:"true",computed:!1},required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},message:{required:!0,tsType:{name:"string"},description:""}}};try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},isVisibleTooltip:{defaultValue:{value:"true"},description:"",name:"isVisibleTooltip",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/common/components/Tooltip/index.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/common/components/Tooltip/index.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}var Tooltip_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Tooltip_stories={title:"Common/Tooltip",component:Tooltip,tags:["autodocs"]};var 기본_Tooltip={render:function render(){return Tooltip_stories_jsx(Tooltip,{message:"관심있는 카테고리",isVisibleTooltip:!0},Tooltip_stories_jsx(Text.x,{typo:"headingL",color:"success"},"Tooltip"))}};기본_Tooltip.parameters=_objectSpread(_objectSpread({},기본_Tooltip.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_기본_Tooltip$parameter=기본_Tooltip.parameters)||void 0===_기본_Tooltip$parameter?void 0:_기본_Tooltip$parameter.docs),{},{source:_objectSpread({originalSource:'{\n  render: () => {\n    return <Tooltip message="관심있는 카테고리" isVisibleTooltip={true}>\n        <Text typo="headingL" color="success">\n          Tooltip\n        </Text>\n      </Tooltip>;\n  }\n}'},null===(_기본_Tooltip$parameter2=기본_Tooltip.parameters)||void 0===_기본_Tooltip$parameter2||null===(_기본_Tooltip$parameter2=_기본_Tooltip$parameter2.docs)||void 0===_기본_Tooltip$parameter2?void 0:_기본_Tooltip$parameter2.source)})})}}]);