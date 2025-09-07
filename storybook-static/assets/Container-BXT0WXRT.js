import{j as x}from"./jsx-runtime-CDt2p4po.js";import{l as v,d as V}from"./styled-components.browser.esm-Byilhkxn.js";import{B as q}from"./Box-COihqxSe.js";import{c as $}from"./propFilters-BGSNtaQt.js";const w=e=>{switch(e){case"sm":return"640px";case"md":return"768px";case"lg":return"1024px";case"xl":return"1280px";case"2xl":return"1536px";case"full":return"100%";default:return"1280px"}},k=e=>{switch(e){case"prose":return"65ch";case"narrow":return"48rem";case"wide":return"96rem";case"fluid":return"100%";default:return"1280px"}},n=(e,l)=>e?typeof e=="string"||typeof e=="number"?v`${l}: ${({theme:a})=>a.spacing[e]};`:v`
    ${e.xs&&v`${l}: ${({theme:a})=>a.spacing[e.xs]};`}
    ${e.sm&&v`
      @media (min-width: ${({theme:a})=>a.breakpoints.sm}) {
        ${l}: ${({theme:a})=>a.spacing[e.sm]};
      }
    `}
    ${e.md&&v`
      @media (min-width: ${({theme:a})=>a.breakpoints.md}) {
        ${l}: ${({theme:a})=>a.spacing[e.md]};
      }
    `}
    ${e.lg&&v`
      @media (min-width: ${({theme:a})=>a.breakpoints.lg}) {
        ${l}: ${({theme:a})=>a.spacing[e.lg]};
      }
    `}
    ${e.xl&&v`
      @media (min-width: ${({theme:a})=>a.breakpoints.xl}) {
        ${l}: ${({theme:a})=>a.spacing[e.xl]};
      }
    `}
  `:"",t=(e,l)=>e?v`
    @media (min-width: ${l}) {
      ${e.paddingX&&v`
        padding-left: ${({theme:a})=>a.spacing[e.paddingX]};
        padding-right: ${({theme:a})=>a.spacing[e.paddingX]};
      `}
      ${e.paddingY&&v`
        padding-top: ${({theme:a})=>a.spacing[e.paddingY]};
        padding-bottom: ${({theme:a})=>a.spacing[e.paddingY]};
      `}
    }
  `:"",C=V(q).withConfig({shouldForwardProp:$(["size","variant","maxWidth","minWidth","paddingX","paddingY","xs","sm","md","lg","xl","disableGutters","gutters","centerContent"])})`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  
  /* Max width - variant takes precedence over size */
  max-width: ${({variant:e,size:l,maxWidth:a})=>a?typeof a=="number"?`${a}px`:a:e?k(e):w(l)};
  
  /* Min width */
  ${({minWidth:e})=>e&&v`
    min-width: ${typeof e=="number"?`${e}px`:e};
  `}
  
  /* Default gutters (can be overridden) */
  ${({disableGutters:e,gutters:l,paddingX:a})=>e?"":l?v`
        ${n(l,"padding-left")}
        ${n(l,"padding-right")}
      `:a?v`
        ${n(a,"padding-left")}
        ${n(a,"padding-right")}
      `:v`
      padding-left: ${({theme:u})=>u.spacing[4]};
      padding-right: ${({theme:u})=>u.spacing[4]};
      
      @media (min-width: ${({theme:u})=>u.breakpoints.sm}) {
        padding-left: ${({theme:u})=>u.spacing[6]};
        padding-right: ${({theme:u})=>u.spacing[6]};
      }

      @media (min-width: ${({theme:u})=>u.breakpoints.lg}) {
        padding-left: ${({theme:u})=>u.spacing[8]};
        padding-right: ${({theme:u})=>u.spacing[8]};
      }
    `}
  
  /* Responsive paddingY */
  ${({paddingY:e})=>e&&v`
    ${n(e,"padding-top")}
    ${n(e,"padding-bottom")}
  `}
  
  /* Breakpoint-specific padding */
  ${({xs:e,theme:l})=>e&&t(e,l.breakpoints.xs)}
  ${({sm:e,theme:l})=>e&&t(e,l.breakpoints.sm)}
  ${({md:e,theme:l})=>e&&t(e,l.breakpoints.md)}
  ${({lg:e,theme:l})=>e&&t(e,l.breakpoints.lg)}
  ${({xl:e,theme:l})=>e&&t(e,l.breakpoints.xl)}
  
  /* Center content */
  ${({centerContent:e})=>e&&v`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}
`,i=({size:e="xl",centerContent:l=!1,variant:a,maxWidth:u,minWidth:r,paddingX:d,paddingY:s,xs:m,sm:p,md:o,lg:f,xl:c,disableGutters:g=!1,gutters:b,children:y,...h})=>x.jsx(C,{size:e,variant:a,maxWidth:u,minWidth:r,paddingX:d,paddingY:s,xs:m,sm:p,md:o,lg:f,xl:c,disableGutters:g,gutters:b,centerContent:l,...h,children:y});try{i.displayName="Container",i.__docgenInfo={description:"",displayName:"Container",props:{size:{defaultValue:{value:"xl"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"full"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"wide"'},{value:'"prose"'},{value:'"narrow"'},{value:'"fluid"'}]}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string | number"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string | number"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ResponsivePaddingValue"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ResponsivePaddingValue"}},xs:{defaultValue:null,description:"",name:"xs",required:!1,type:{name:"BreakpointPadding"}},sm:{defaultValue:null,description:"",name:"sm",required:!1,type:{name:"BreakpointPadding"}},md:{defaultValue:null,description:"",name:"md",required:!1,type:{name:"BreakpointPadding"}},lg:{defaultValue:null,description:"",name:"lg",required:!1,type:{name:"BreakpointPadding"}},xl:{defaultValue:null,description:"",name:"xl",required:!1,type:{name:"BreakpointPadding"}},disableGutters:{defaultValue:{value:"false"},description:"",name:"disableGutters",required:!1,type:{name:"boolean"}},gutters:{defaultValue:null,description:"",name:"gutters",required:!1,type:{name:"ResponsivePaddingValue"}},centerContent:{defaultValue:{value:"false"},description:"",name:"centerContent",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"style"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"caption"'},{value:'"center"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"search"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"string | number"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"string | number"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"flex"'},{value:'"block"'},{value:'"inline"'},{value:'"inline-block"'},{value:'"inline-flex"'},{value:'"grid"'},{value:'"inline-grid"'},{value:'"none"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string | number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"blue"'},{value:'"purple"'},{value:'"black"'},{value:'"dark"'},{value:'"gray"'},{value:'"light"'}]}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"none"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"full"'}]}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"static"'},{value:'"relative"'},{value:'"absolute"'},{value:'"fixed"'},{value:'"sticky"'}]}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"string | number"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"string | number"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string | number"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"stretch"'},{value:'"baseline"'}]}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'}]}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"row-reverse"'},{value:'"column"'},{value:'"column-reverse"'}]}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:'"nowrap"'},{value:'"wrap"'},{value:'"wrap-reverse"'}]}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},gridTemplateColumns:{defaultValue:null,description:"",name:"gridTemplateColumns",required:!1,type:{name:"string"}},gridTemplateRows:{defaultValue:null,description:"",name:"gridTemplateRows",required:!1,type:{name:"string"}},gridGap:{defaultValue:null,description:"",name:"gridGap",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"enum",value:[{value:'"visible"'},{value:'"hidden"'},{value:'"scroll"'},{value:'"auto"'}]}},cursor:{defaultValue:null,description:"",name:"cursor",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"pointer"'},{value:'"default"'},{value:'"grab"'},{value:'"grabbing"'},{value:'"not-allowed"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}export{i as C};
