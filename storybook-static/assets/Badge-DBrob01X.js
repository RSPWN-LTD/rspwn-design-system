import{j as i}from"./jsx-runtime-CDt2p4po.js";import{l as o,d as s}from"./styled-components.browser.esm-Byilhkxn.js";const c=(l,a)=>({gray:{solid:o`
        background-color: ${({theme:e})=>e.colors.gray.dark};
        color: ${({theme:e})=>e.colors.foundation.white};
        border-color: ${({theme:e})=>e.colors.gray.dark};
      `,outline:o`
        background-color: transparent;
        color: ${({theme:e})=>e.colors.gray.light};
        border-color: ${({theme:e})=>e.colors.gray.light};
      `,subtle:o`
        background-color: ${({theme:e})=>e.colors.gray.dark}20;
        color: ${({theme:e})=>e.colors.gray.light};
        border-color: transparent;
      `},blue:{solid:o`
        background-color: ${({theme:e})=>e.colors.innovation.primaryBlue};
        color: ${({theme:e})=>e.colors.foundation.white};
        border-color: ${({theme:e})=>e.colors.innovation.primaryBlue};
      `,outline:o`
        background-color: transparent;
        color: ${({theme:e})=>e.colors.innovation.primaryBlue};
        border-color: ${({theme:e})=>e.colors.innovation.primaryBlue};
      `,subtle:o`
        background-color: ${({theme:e})=>e.colors.innovation.primaryBlue}20;
        color: ${({theme:e})=>e.colors.innovation.primaryBlue};
        border-color: transparent;
      `},purple:{solid:o`
        background-color: ${({theme:e})=>e.colors.innovation.secondaryPurple};
        color: ${({theme:e})=>e.colors.foundation.white};
        border-color: ${({theme:e})=>e.colors.innovation.secondaryPurple};
      `,outline:o`
        background-color: transparent;
        color: ${({theme:e})=>e.colors.innovation.secondaryPurple};
        border-color: ${({theme:e})=>e.colors.innovation.secondaryPurple};
      `,subtle:o`
        background-color: ${({theme:e})=>e.colors.innovation.secondaryPurple}20;
        color: ${({theme:e})=>e.colors.innovation.secondaryPurple};
        border-color: transparent;
      `},success:{solid:o`
        background-color: #22c55e;
        color: ${({theme:e})=>e.colors.foundation.white};
        border-color: #22c55e;
      `,outline:o`
        background-color: transparent;
        color: #22c55e;
        border-color: #22c55e;
      `,subtle:o`
        background-color: #22c55e20;
        color: #22c55e;
        border-color: transparent;
      `},warning:{solid:o`
        background-color: #f59e0b;
        color: ${({theme:e})=>e.colors.foundation.white};
        border-color: #f59e0b;
      `,outline:o`
        background-color: transparent;
        color: #f59e0b;
        border-color: #f59e0b;
      `,subtle:o`
        background-color: #f59e0b20;
        color: #f59e0b;
        border-color: transparent;
      `},error:{solid:o`
        background-color: #ef4444;
        color: ${({theme:e})=>e.colors.foundation.white};
        border-color: #ef4444;
      `,outline:o`
        background-color: transparent;
        color: #ef4444;
        border-color: #ef4444;
      `,subtle:o`
        background-color: #ef444420;
        color: #ef4444;
        border-color: transparent;
      `}})[l||"gray"][a||"solid"],d=l=>{switch(l){case"sm":return o`
        font-size: ${({theme:a})=>a.typography.fontSizes.xs};
        padding: ${({theme:a})=>a.spacing[1]} ${({theme:a})=>a.spacing[2]};
        min-height: 20px;
      `;case"lg":return o`
        font-size: ${({theme:a})=>a.typography.fontSizes.sm};
        padding: ${({theme:a})=>a.spacing[2]} ${({theme:a})=>a.spacing[3]};
        min-height: 32px;
      `;default:return o`
        font-size: ${({theme:a})=>a.typography.fontSizes.xs};
        padding: ${({theme:a})=>a.spacing[1]} ${({theme:a})=>a.spacing[3]};
        min-height: 24px;
      `}},p=s.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:l})=>l.typography.fonts.body};
  font-weight: ${({theme:l})=>l.typography.fontWeights.medium};
  line-height: 1;
  white-space: nowrap;
  border-radius: ${({theme:l})=>l.radius.full};
  border: 1px solid;
  transition: all ${({theme:l})=>l.durations.fast} ${({theme:l})=>l.easings.easeInOut};
  
  ${({size:l})=>d(l)}
  ${({color:l,variant:a})=>c(l,a)}
  
  ${({dot:l})=>l&&o`
    width: 8px;
    height: 8px;
    min-height: 8px;
    padding: 0;
    border-radius: ${({theme:a})=>a.radius.full};
  `}
`,n=({children:l,variant:a="solid",size:r="md",color:e="gray",dot:u=!1,className:t,...v})=>i.jsx(p,{className:t,variant:a,size:r,color:e,dot:u,...v,children:!u&&l});try{n.displayName="Badge",n.__docgenInfo={description:"",displayName:"Badge",props:{variant:{defaultValue:{value:"solid"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"outline"'},{value:'"subtle"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},color:{defaultValue:{value:"gray"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"gray"'},{value:'"blue"'},{value:'"purple"'},{value:'"success"'},{value:'"warning"'}]}},dot:{defaultValue:{value:"false"},description:"",name:"dot",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"style"'},{value:'"search"'},{value:'"stop"'},{value:'"menu"'},{value:'"image"'},{value:'"text"'},{value:'"title"'},{value:'"p"'},{value:'"center"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"switch"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}}}catch{}export{n as B};
