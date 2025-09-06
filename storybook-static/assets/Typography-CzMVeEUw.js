import{j as d}from"./jsx-runtime-CDt2p4po.js";import{l,d as c}from"./styled-components.browser.esm-Byilhkxn.js";import{p as $}from"./propFilters-BGSNtaQt.js";const b=a=>{switch(a){case"brand":return l`
        font-family: ${({theme:e})=>e.typography.fonts.brand};
        font-size: ${({theme:e})=>e.typography.fontSizes["4xl"]};
        font-weight: ${({theme:e})=>e.typography.fontWeights.normal};
        line-height: ${({theme:e})=>e.typography.lineHeights.tight};
        letter-spacing: ${({theme:e})=>e.typography.letterSpacing.tight};
        text-transform: uppercase;
      `;case"h1":return l`
        font-family: ${({theme:e})=>e.typography.fonts.body};
        font-size: ${({theme:e})=>e.typography.fontSizes["3xl"]};
        font-weight: ${({theme:e})=>e.typography.fontWeights.bold};
        line-height: ${({theme:e})=>e.typography.lineHeights.tight};
      `;case"h2":return l`
        font-family: ${({theme:e})=>e.typography.fonts.body};
        font-size: ${({theme:e})=>e.typography.fontSizes["2xl"]};
        font-weight: ${({theme:e})=>e.typography.fontWeights.bold};
        line-height: ${({theme:e})=>e.typography.lineHeights.tight};
      `;case"h3":return l`
        font-family: ${({theme:e})=>e.typography.fonts.body};
        font-size: ${({theme:e})=>e.typography.fontSizes.xl};
        font-weight: ${({theme:e})=>e.typography.fontWeights.semibold};
        line-height: ${({theme:e})=>e.typography.lineHeights.snug};
      `;case"h4":return l`
        font-family: ${({theme:e})=>e.typography.fonts.body};
        font-size: ${({theme:e})=>e.typography.fontSizes.lg};
        font-weight: ${({theme:e})=>e.typography.fontWeights.semibold};
        line-height: ${({theme:e})=>e.typography.lineHeights.snug};
      `;case"h5":return l`
        font-family: ${({theme:e})=>e.typography.fonts.body};
        font-size: ${({theme:e})=>e.typography.fontSizes.base};
        font-weight: ${({theme:e})=>e.typography.fontWeights.semibold};
        line-height: ${({theme:e})=>e.typography.lineHeights.normal};
      `;case"h6":return l`
        font-family: ${({theme:e})=>e.typography.fonts.body};
        font-size: ${({theme:e})=>e.typography.fontSizes.sm};
        font-weight: ${({theme:e})=>e.typography.fontWeights.semibold};
        line-height: ${({theme:e})=>e.typography.lineHeights.normal};
        text-transform: uppercase;
        letter-spacing: ${({theme:e})=>e.typography.letterSpacing.wide};
      `;case"body2":return l`
        font-family: ${({theme:e})=>e.typography.fonts.body};
        font-size: ${({theme:e})=>e.typography.fontSizes.sm};
        font-weight: ${({theme:e})=>e.typography.fontWeights.normal};
        line-height: ${({theme:e})=>e.typography.lineHeights.normal};
      `;case"caption":return l`
        font-family: ${({theme:e})=>e.typography.fonts.body};
        font-size: ${({theme:e})=>e.typography.fontSizes.xs};
        font-weight: ${({theme:e})=>e.typography.fontWeights.normal};
        line-height: ${({theme:e})=>e.typography.lineHeights.normal};
      `;case"overline":return l`
        font-family: ${({theme:e})=>e.typography.fonts.body};
        font-size: ${({theme:e})=>e.typography.fontSizes.xs};
        font-weight: ${({theme:e})=>e.typography.fontWeights.semibold};
        line-height: ${({theme:e})=>e.typography.lineHeights.normal};
        text-transform: uppercase;
        letter-spacing: ${({theme:e})=>e.typography.letterSpacing.wider};
      `;default:return l`
        font-family: ${({theme:e})=>e.typography.fonts.body};
        font-size: ${({theme:e})=>e.typography.fontSizes.base};
        font-weight: ${({theme:e})=>e.typography.fontWeights.normal};
        line-height: ${({theme:e})=>e.typography.lineHeights.normal};
      `}},w=a=>{switch(a){case"secondary":return l`color: ${({theme:e})=>e.colors.text.secondary};`;case"muted":return l`color: ${({theme:e})=>e.colors.text.muted};`;case"white":return l`color: ${({theme:e})=>e.colors.foundation.white};`;case"blue":return l`color: ${({theme:e})=>e.colors.innovation.primaryBlue};`;case"purple":return l`color: ${({theme:e})=>e.colors.innovation.secondaryPurple};`;default:return l`color: ${({theme:e})=>e.colors.text.primary};`}},x=c.p.withConfig({shouldForwardProp:$.typography})`
  margin: 0;
  ${({variant:a})=>b(a)}
  ${({color:a})=>w(a)}
  text-align: ${({align:a})=>a||"left"};
  
  ${({mb:a,theme:e})=>a&&l`margin-bottom: ${e.spacing[a]};`}
  ${({mt:a,theme:e})=>a&&l`margin-top: ${e.spacing[a]};`}
  ${({mr:a,theme:e})=>a&&l`margin-right: ${e.spacing[a]};`}
  ${({ml:a,theme:e})=>a&&l`margin-left: ${e.spacing[a]};`}
  ${({mx:a,theme:e})=>a&&l`margin-left: ${e.spacing[a]}; margin-right: ${e.spacing[a]};`}
  ${({my:a,theme:e})=>a&&l`margin-top: ${e.spacing[a]}; margin-bottom: ${e.spacing[a]};`}
`,u=({variant:a="body1",color:e="primary",align:t="left",children:v,as:o,className:n,style:r,mb:i,mt:p,mr:s,ml:y,mx:g,my:f,...h})=>{const m=a==="brand"?"h1":a.startsWith("h")?a:a==="caption"||a==="overline"?"span":"p";return d.jsx(x,{as:o||m,variant:a,color:e,align:t,className:n,style:r,mb:i,mt:p,mr:s,ml:y,mx:g,my:f,...h,children:v})};try{u.displayName="Typography",u.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:{value:"body1"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"brand"'},{value:'"caption"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"body1"'},{value:'"body2"'},{value:'"overline"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"muted"'},{value:'"white"'},{value:'"blue"'},{value:'"purple"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"style"'},{value:'"search"'},{value:'"stop"'},{value:'"menu"'},{value:'"image"'},{value:'"label"'},{value:'"center"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}}}}}catch{}export{u as T};
