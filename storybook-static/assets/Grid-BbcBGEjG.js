import{j as m}from"./jsx-runtime-CDt2p4po.js";import{l,d as p}from"./styled-components.browser.esm-Byilhkxn.js";import{c as f}from"./propFilters-BGSNtaQt.js";const v={"holy-grail":{areas:`
      "header header header"
      "nav main aside"  
      "footer footer footer"
    `,columns:"200px 1fr 200px",rows:"auto 1fr auto"},sidebar:{areas:`
      "sidebar main"
    `,columns:"250px 1fr",rows:"1fr"},dashboard:{areas:`
      "header header"
      "sidebar main"
    `,columns:"280px 1fr",rows:"auto 1fr"},cards:{columns:"repeat(auto-fit, minmax(250px, 1fr))",gap:4},masonry:{columns:"repeat(auto-fit, minmax(250px, 1fr))",gap:4}},r=e=>typeof e=="number"?`repeat(${e}, 1fr)`:e,t=(e,a)=>l`
  @media (min-width: ${a}) {
    grid-template-columns: ${r(e)};
  }
`,c=e=>typeof e=="string"?l`grid-template-areas: ${e.replace(/\s+/g," ").trim()};`:l`
    ${e.xs&&l`grid-template-areas: ${e.xs.replace(/\s+/g," ").trim()};`}
    ${e.sm&&l`
      @media (min-width: ${({theme:a})=>a.breakpoints.sm}) {
        grid-template-areas: ${e.sm.replace(/\s+/g," ").trim()};
      }
    `}
    ${e.md&&l`
      @media (min-width: ${({theme:a})=>a.breakpoints.md}) {
        grid-template-areas: ${e.md.replace(/\s+/g," ").trim()};
      }
    `}
    ${e.lg&&l`
      @media (min-width: ${({theme:a})=>a.breakpoints.lg}) {
        grid-template-areas: ${e.lg.replace(/\s+/g," ").trim()};
      }
    `}
    ${e.xl&&l`
      @media (min-width: ${({theme:a})=>a.breakpoints.xl}) {
        grid-template-areas: ${e.xl.replace(/\s+/g," ").trim()};
      }
    `}
  `,s=e=>e.map(a=>`[${a}] 1fr`).join(" "),n=(e,a,i)=>{const u=e==null?void 0:e[a];return u?l`
    @media (min-width: ${i.breakpoints[a]}) {
      ${u.columns&&l`grid-template-columns: ${r(u.columns)};`}
      ${u.rows&&l`grid-template-rows: ${typeof u.rows=="number"?`repeat(${u.rows}, 1fr)`:u.rows};`}
      ${u.gap&&l`gap: ${i.spacing[u.gap]};`}
      ${u.areas&&l`grid-template-areas: ${u.areas.replace(/\s+/g," ").trim()};`}
    }
  `:""},g=p.div.withConfig({shouldForwardProp:f(["columns","rows","gap","columnGap","rowGap","areas","columnLines","rowLines","pattern","masonry","masonryRows","xs","sm","md","lg","xl","responsive","justifyItems","alignItems","justifyContent","alignContent","autoFit","autoFill","minColumnWidth"])})`
  display: grid;
  
  ${({columns:e})=>e&&l`
    grid-template-columns: ${r(e)};
  `}
  
  ${({rows:e})=>e&&l`
    grid-template-rows: ${typeof e=="number"?`repeat(${e}, 1fr)`:e};
  `}
  
  ${({gap:e,theme:a})=>e&&l`
    gap: ${a.spacing[e]};
  `}
  
  ${({columnGap:e,theme:a})=>e&&l`
    column-gap: ${a.spacing[e]};
  `}
  
  ${({rowGap:e,theme:a})=>e&&l`
    row-gap: ${a.spacing[e]};
  `}
  
  /* Named grid areas */
  ${({areas:e})=>e&&c(e)}
  
  /* Named grid lines */
  ${({columnLines:e})=>e&&l`
    grid-template-columns: ${s(e)};
  `}
  
  ${({rowLines:e})=>e&&l`
    grid-template-rows: ${s(e)};
  `}
  
  /* Predefined patterns */
  ${({pattern:e,theme:a})=>e&&l`
    ${v[e].areas&&l`
      grid-template-areas: ${v[e].areas.replace(/\s+/g," ").trim()};
    `}
    ${v[e].columns&&l`
      grid-template-columns: ${v[e].columns};
    `}
    ${v[e].rows&&l`
      grid-template-rows: ${v[e].rows};
    `}
    ${v[e].gap&&l`
      gap: ${a.spacing[v[e].gap]};
    `}
  `}
  
  /* Masonry layout */
  ${({masonry:e,masonryRows:a})=>e&&l`
    grid-template-rows: repeat(${a||"auto-fit"}, min-content);
    grid-auto-flow: column;
    
    /* Fallback for browsers that don't support masonry */
    @supports not (grid-template-rows: masonry) {
      display: grid;
      grid-template-rows: repeat(${a||4}, min-content);
    }
    
    /* Future masonry support */
    @supports (grid-template-rows: masonry) {
      grid-template-rows: masonry;
    }
  `}
  
  ${({autoFit:e,minColumnWidth:a})=>e&&a&&l`
    grid-template-columns: repeat(auto-fit, minmax(${a}, 1fr));
  `}
  
  ${({autoFill:e,minColumnWidth:a})=>e&&a&&l`
    grid-template-columns: repeat(auto-fill, minmax(${a}, 1fr));
  `}
  
  ${({justifyItems:e})=>e&&l`
    justify-items: ${e};
  `}
  
  ${({alignItems:e})=>e&&l`
    align-items: ${e};
  `}
  
  ${({justifyContent:e})=>e&&l`
    justify-content: ${e};
  `}
  
  ${({alignContent:e})=>e&&l`
    align-content: ${e};
  `}
  
  ${({width:e})=>e&&l`
    width: ${typeof e=="number"?`${e}px`:e};
  `}
  
  ${({height:e})=>e&&l`
    height: ${typeof e=="number"?`${e}px`:e};
  `}
  
  ${({minHeight:e})=>e&&l`
    min-height: ${typeof e=="number"?`${e}px`:e};
  `}
  
  ${({m:e,theme:a})=>e&&l`margin: ${a.spacing[e]};`}
  ${({mt:e,theme:a})=>e&&l`margin-top: ${a.spacing[e]};`}
  ${({mr:e,theme:a})=>e&&l`margin-right: ${a.spacing[e]};`}
  ${({mb:e,theme:a})=>e&&l`margin-bottom: ${a.spacing[e]};`}
  ${({ml:e,theme:a})=>e&&l`margin-left: ${a.spacing[e]};`}
  ${({mx:e,theme:a})=>e&&l`margin-left: ${a.spacing[e]}; margin-right: ${a.spacing[e]};`}
  ${({my:e,theme:a})=>e&&l`margin-top: ${a.spacing[e]}; margin-bottom: ${a.spacing[e]};`}
  
  ${({p:e,theme:a})=>e&&l`padding: ${a.spacing[e]};`}
  ${({pt:e,theme:a})=>e&&l`padding-top: ${a.spacing[e]};`}
  ${({pr:e,theme:a})=>e&&l`padding-right: ${a.spacing[e]};`}
  ${({pb:e,theme:a})=>e&&l`padding-bottom: ${a.spacing[e]};`}
  ${({pl:e,theme:a})=>e&&l`padding-left: ${a.spacing[e]};`}
  ${({px:e,theme:a})=>e&&l`padding-left: ${a.spacing[e]}; padding-right: ${a.spacing[e]};`}
  ${({py:e,theme:a})=>e&&l`padding-top: ${a.spacing[e]}; padding-bottom: ${a.spacing[e]};`}
  
  // Legacy responsive breakpoints
  ${({xs:e,theme:a})=>e&&t(e,a.breakpoints.xs)}
  ${({sm:e,theme:a})=>e&&t(e,a.breakpoints.sm)}
  ${({md:e,theme:a})=>e&&t(e,a.breakpoints.md)}
  ${({lg:e,theme:a})=>e&&t(e,a.breakpoints.lg)}
  ${({xl:e,theme:a})=>e&&t(e,a.breakpoints.xl)}
  
  // Enhanced responsive props
  ${({responsive:e,theme:a})=>e&&l`
    ${n(e,"xs",a)}
    ${n(e,"sm",a)}
    ${n(e,"md",a)}
    ${n(e,"lg",a)}
    ${n(e,"xl",a)}
  `}
`,$=p.div.withConfig({shouldForwardProp:f(["area","column","row","columnSpan","rowSpan","columnStart","columnEnd","rowStart","rowEnd","justifySelf","alignSelf"])})`
  ${({area:e})=>e&&l`
    grid-area: ${e};
  `}
  
  ${({column:e})=>e&&l`
    grid-column: ${e};
  `}
  
  ${({row:e})=>e&&l`
    grid-row: ${e};
  `}
  
  ${({columnSpan:e})=>e&&l`
    grid-column: span ${e};
  `}
  
  ${({rowSpan:e})=>e&&l`
    grid-row: span ${e};
  `}
  
  ${({columnStart:e,columnEnd:a})=>(e||a)&&l`
    grid-column: ${e||"auto"} / ${a||"auto"};
  `}
  
  ${({rowStart:e,rowEnd:a})=>(e||a)&&l`
    grid-row: ${e||"auto"} / ${a||"auto"};
  `}
  
  ${({justifySelf:e})=>e&&l`
    justify-self: ${e};
  `}
  
  ${({alignSelf:e})=>e&&l`
    align-self: ${e};
  `}
`,d=({children:e,...a})=>m.jsx(g,{...a,children:e}),o=({children:e,...a})=>m.jsx($,{...a,children:e});try{d.displayName="Grid",d.__docgenInfo={description:"",displayName:"Grid",props:{columns:{defaultValue:null,description:"",name:"columns",required:!1,type:{name:"string | number"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"string | number"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},areas:{defaultValue:null,description:"",name:"areas",required:!1,type:{name:"ResponsiveValue<string>"}},columnLines:{defaultValue:null,description:"",name:"columnLines",required:!1,type:{name:"string[]"}},rowLines:{defaultValue:null,description:"",name:"rowLines",required:!1,type:{name:"string[]"}},pattern:{defaultValue:null,description:"",name:"pattern",required:!1,type:{name:"enum",value:[{value:'"masonry"'},{value:'"sidebar"'},{value:'"holy-grail"'},{value:'"dashboard"'},{value:'"cards"'}]}},masonry:{defaultValue:null,description:"",name:"masonry",required:!1,type:{name:"boolean"}},masonryRows:{defaultValue:null,description:"",name:"masonryRows",required:!1,type:{name:"number"}},xs:{defaultValue:null,description:"",name:"xs",required:!1,type:{name:"string | number"}},sm:{defaultValue:null,description:"",name:"sm",required:!1,type:{name:"string | number"}},md:{defaultValue:null,description:"",name:"md",required:!1,type:{name:"string | number"}},lg:{defaultValue:null,description:"",name:"lg",required:!1,type:{name:"string | number"}},xl:{defaultValue:null,description:"",name:"xl",required:!1,type:{name:"string | number"}},responsive:{defaultValue:null,description:"",name:"responsive",required:!1,type:{name:'{ xs?: Partial<Pick<GridProps, "gap" | "rows" | "columns" | "areas">>; sm?: Partial<Pick<GridProps, "gap" | "rows" | "columns" | "areas">>; md?: Partial<...> | undefined; lg?: Partial<...> | undefined; xl?: Partial<...> | undefined; } | undefined'}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"stretch"'},{value:'"start"'},{value:'"end"'}]}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"stretch"'},{value:'"start"'},{value:'"end"'}]}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"stretch"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'},{value:'"start"'},{value:'"end"'}]}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"stretch"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'},{value:'"start"'},{value:'"end"'}]}},autoFit:{defaultValue:null,description:"",name:"autoFit",required:!1,type:{name:"boolean"}},autoFill:{defaultValue:null,description:"",name:"autoFill",required:!1,type:{name:"boolean"}},minColumnWidth:{defaultValue:null,description:"",name:"minColumnWidth",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string | number"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"style"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"caption"'},{value:'"center"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"search"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}}}catch{}try{o.displayName="GridItem",o.__docgenInfo={description:"",displayName:"GridItem",props:{area:{defaultValue:null,description:"",name:"area",required:!1,type:{name:"string"}},column:{defaultValue:null,description:"",name:"column",required:!1,type:{name:"string | number"}},row:{defaultValue:null,description:"",name:"row",required:!1,type:{name:"string | number"}},columnSpan:{defaultValue:null,description:"",name:"columnSpan",required:!1,type:{name:"number"}},rowSpan:{defaultValue:null,description:"",name:"rowSpan",required:!1,type:{name:"number"}},columnStart:{defaultValue:null,description:"",name:"columnStart",required:!1,type:{name:"string | number"}},columnEnd:{defaultValue:null,description:"",name:"columnEnd",required:!1,type:{name:"string | number"}},rowStart:{defaultValue:null,description:"",name:"rowStart",required:!1,type:{name:"string | number"}},rowEnd:{defaultValue:null,description:"",name:"rowEnd",required:!1,type:{name:"string | number"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"stretch"'},{value:'"start"'},{value:'"end"'}]}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"stretch"'},{value:'"start"'},{value:'"end"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"style"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"caption"'},{value:'"center"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"search"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}}}catch{}export{d as G,o as a};
