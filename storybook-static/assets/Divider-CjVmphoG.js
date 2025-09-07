import{j as i}from"./jsx-runtime-CDt2p4po.js";import{l as u,d as s}from"./styled-components.browser.esm-Byilhkxn.js";import{c as m}from"./propFilters-BGSNtaQt.js";const n=e=>u`
  color: ${({theme:a})=>{switch(e){case"light":return a.colors.gray.light;case"medium":return a.colors.gray.base;case"dark":return a.colors.gray.dark;default:return a.colors.gray.light}}};
`,o=e=>{switch(e){case"thin":return"1px";case"medium":return"2px";case"thick":return"4px";default:return"1px"}},g=s.div.withConfig({shouldForwardProp:m(["orientation","thickness","color","variant","length","margin"])})`
  ${({$orientation:e="horizontal",$thickness:a="thin",$color:v="light",$variant:r="solid",$length:l})=>{const t=o(a);return e==="horizontal"?u`
        width: ${l?typeof l=="number"?`${l}px`:l:"100%"};
        height: ${t};
        border-top: ${t} ${r} currentColor;
        ${n(v)}
      `:u`
        width: ${t};
        height: ${l?typeof l=="number"?`${l}px`:l:"100%"};
        border-left: ${t} ${r} currentColor;
        ${n(v)}
      `}}
  
  ${({$margin:e,theme:a})=>e&&u`
    margin: ${a.spacing[e]};
  `}
`,b=s.div.withConfig({shouldForwardProp:m(["thickness","color","variant","labelPosition","margin"])})`
  display: flex;
  align-items: center;
  width: 100%;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: ${({$thickness:e})=>o(e)};
    border-top: ${({$thickness:e})=>o(e)} ${({$variant:e="solid"})=>e} currentColor;
    ${({$color:e})=>n(e)}
  }
  
  ${({$labelPosition:e="center"})=>e==="left"?u`
        &::before {
          flex: 0;
          margin-right: ${({theme:a})=>a.spacing[4]};
          width: ${({theme:a})=>a.spacing[4]};
        }
      `:e==="right"?u`
        &::after {
          flex: 0;
          margin-left: ${({theme:a})=>a.spacing[4]};
          width: ${({theme:a})=>a.spacing[4]};
        }
      `:u`
        &::before {
          margin-right: ${({theme:a})=>a.spacing[4]};
        }
        &::after {
          margin-left: ${({theme:a})=>a.spacing[4]};
        }
      `}
  
  ${({$margin:e,theme:a})=>e&&u`
    margin: ${a.spacing[e]};
  `}
`,y=s.span`
  color: ${({theme:e})=>e.colors.foundation.white};
  font-family: ${({theme:e})=>e.typography.fonts.body};
  font-size: ${({theme:e})=>e.typography.fontSizes.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeights.medium};
  white-space: nowrap;
`,f=({label:e,labelPosition:a="center",orientation:v="horizontal",thickness:r="thin",color:l="light",variant:t="solid",margin:d,length:h,className:c,...p})=>e&&v==="horizontal"?i.jsx(b,{className:c,$labelPosition:a,$thickness:r,$color:l,$variant:t,$margin:d,...p,children:i.jsx(y,{children:e})}):i.jsx(g,{className:c,$orientation:v,$thickness:r,$color:l,$variant:t,$margin:d,$length:h,...p});try{f.displayName="Divider",f.__docgenInfo={description:"",displayName:"Divider",props:{orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},thickness:{defaultValue:{value:"thin"},description:"",name:"thickness",required:!1,type:{name:"enum",value:[{value:'"thin"'},{value:'"medium"'},{value:'"thick"'}]}},color:{defaultValue:{value:"light"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"medium"'}]}},variant:{defaultValue:{value:"solid"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'},{value:'"dotted"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelPosition:{defaultValue:{value:"center"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},length:{defaultValue:null,description:"",name:"length",required:!1,type:{name:"string | number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"style"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"caption"'},{value:'"center"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"search"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}}}catch{}export{f as D};
