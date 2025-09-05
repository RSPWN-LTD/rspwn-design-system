import{j as a}from"./jsx-runtime-CDt2p4po.js";import{l as r,d as N}from"./styled-components.browser.esm-Byilhkxn.js";import{B as T}from"./Box-D0rAd6Cs.js";import"./index-GiUgBvb1.js";const W=e=>typeof e=="number"?`repeat(${e}, 1fr)`:e,i=(e,l)=>r`
  @media (min-width: ${l}) {
    grid-template-columns: ${W(e)};
  }
`,O=N.div`
  display: grid;
  
  ${({columns:e})=>e&&r`
    grid-template-columns: ${W(e)};
  `}
  
  ${({rows:e})=>e&&r`
    grid-template-rows: ${typeof e=="number"?`repeat(${e}, 1fr)`:e};
  `}
  
  ${({gap:e,theme:l})=>e&&r`
    gap: ${l.spacing[e]};
  `}
  
  ${({columnGap:e,theme:l})=>e&&r`
    column-gap: ${l.spacing[e]};
  `}
  
  ${({rowGap:e,theme:l})=>e&&r`
    row-gap: ${l.spacing[e]};
  `}
  
  ${({autoFit:e,minColumnWidth:l})=>e&&l&&r`
    grid-template-columns: repeat(auto-fit, minmax(${l}, 1fr));
  `}
  
  ${({autoFill:e,minColumnWidth:l})=>e&&l&&r`
    grid-template-columns: repeat(auto-fill, minmax(${l}, 1fr));
  `}
  
  ${({justifyItems:e})=>e&&r`
    justify-items: ${e};
  `}
  
  ${({alignItems:e})=>e&&r`
    align-items: ${e};
  `}
  
  ${({justifyContent:e})=>e&&r`
    justify-content: ${e};
  `}
  
  ${({alignContent:e})=>e&&r`
    align-content: ${e};
  `}
  
  ${({width:e})=>e&&r`
    width: ${typeof e=="number"?`${e}px`:e};
  `}
  
  ${({height:e})=>e&&r`
    height: ${typeof e=="number"?`${e}px`:e};
  `}
  
  ${({minHeight:e})=>e&&r`
    min-height: ${typeof e=="number"?`${e}px`:e};
  `}
  
  ${({m:e,theme:l})=>e&&r`margin: ${l.spacing[e]};`}
  ${({mt:e,theme:l})=>e&&r`margin-top: ${l.spacing[e]};`}
  ${({mr:e,theme:l})=>e&&r`margin-right: ${l.spacing[e]};`}
  ${({mb:e,theme:l})=>e&&r`margin-bottom: ${l.spacing[e]};`}
  ${({ml:e,theme:l})=>e&&r`margin-left: ${l.spacing[e]};`}
  ${({mx:e,theme:l})=>e&&r`margin-left: ${l.spacing[e]}; margin-right: ${l.spacing[e]};`}
  ${({my:e,theme:l})=>e&&r`margin-top: ${l.spacing[e]}; margin-bottom: ${l.spacing[e]};`}
  
  ${({p:e,theme:l})=>e&&r`padding: ${l.spacing[e]};`}
  ${({pt:e,theme:l})=>e&&r`padding-top: ${l.spacing[e]};`}
  ${({pr:e,theme:l})=>e&&r`padding-right: ${l.spacing[e]};`}
  ${({pb:e,theme:l})=>e&&r`padding-bottom: ${l.spacing[e]};`}
  ${({pl:e,theme:l})=>e&&r`padding-left: ${l.spacing[e]};`}
  ${({px:e,theme:l})=>e&&r`padding-left: ${l.spacing[e]}; padding-right: ${l.spacing[e]};`}
  ${({py:e,theme:l})=>e&&r`padding-top: ${l.spacing[e]}; padding-bottom: ${l.spacing[e]};`}
  
  // Responsive breakpoints
  ${({xs:e,theme:l})=>e&&i(e,l.breakpoints.xs)}
  ${({sm:e,theme:l})=>e&&i(e,l.breakpoints.sm)}
  ${({md:e,theme:l})=>e&&i(e,l.breakpoints.md)}
  ${({lg:e,theme:l})=>e&&i(e,l.breakpoints.lg)}
  ${({xl:e,theme:l})=>e&&i(e,l.breakpoints.xl)}
`,t=({children:e,...l})=>a.jsx(O,{...l,children:e});try{t.displayName="Grid",t.__docgenInfo={description:"",displayName:"Grid",props:{columns:{defaultValue:null,description:"",name:"columns",required:!1,type:{name:"string | number"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"string | number"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},xs:{defaultValue:null,description:"",name:"xs",required:!1,type:{name:"string | number"}},sm:{defaultValue:null,description:"",name:"sm",required:!1,type:{name:"string | number"}},md:{defaultValue:null,description:"",name:"md",required:!1,type:{name:"string | number"}},lg:{defaultValue:null,description:"",name:"lg",required:!1,type:{name:"string | number"}},xl:{defaultValue:null,description:"",name:"xl",required:!1,type:{name:"string | number"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'},{value:'"center"'},{value:'"stretch"'}]}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'},{value:'"center"'},{value:'"stretch"'}]}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'},{value:'"center"'},{value:'"stretch"'},{value:'"space-around"'},{value:'"space-between"'},{value:'"space-evenly"'}]}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'},{value:'"center"'},{value:'"stretch"'},{value:'"space-around"'},{value:'"space-between"'},{value:'"space-evenly"'}]}},autoFit:{defaultValue:null,description:"",name:"autoFit",required:!1,type:{name:"boolean"}},autoFill:{defaultValue:null,description:"",name:"autoFill",required:!1,type:{name:"boolean"}},minColumnWidth:{defaultValue:null,description:"",name:"minColumnWidth",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string | number"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"style"'},{value:'"search"'},{value:'"stop"'},{value:'"menu"'},{value:'"image"'},{value:'"text"'},{value:'"title"'},{value:'"p"'},{value:'"center"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"switch"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}}}catch{}const K={title:"Foundation/Grid",component:t,parameters:{layout:"padded"},tags:["autodocs"]},u=({children:e,...l})=>a.jsx(T,{bg:"dark",p:"md",borderRadius:"sm",display:"flex",alignItems:"center",justifyContent:"center",...l,children:a.jsx("span",{style:{color:"#FFFFFF",fontFamily:"Inter, sans-serif"},children:e})}),n={args:{columns:3,gap:"md"},render:e=>a.jsxs(t,{...e,children:[a.jsx(u,{children:"Item 1"}),a.jsx(u,{children:"Item 2"}),a.jsx(u,{children:"Item 3"}),a.jsx(u,{children:"Item 4"}),a.jsx(u,{children:"Item 5"}),a.jsx(u,{children:"Item 6"})]})},v={render:()=>a.jsxs(t,{columns:1,sm:2,md:3,lg:4,gap:"md",children:[a.jsx(u,{children:"Responsive 1"}),a.jsx(u,{children:"Responsive 2"}),a.jsx(u,{children:"Responsive 3"}),a.jsx(u,{children:"Responsive 4"}),a.jsx(u,{children:"Responsive 5"}),a.jsx(u,{children:"Responsive 6"}),a.jsx(u,{children:"Responsive 7"}),a.jsx(u,{children:"Responsive 8"})]})},s={render:()=>a.jsxs(t,{autoFit:!0,minColumnWidth:"200px",gap:"md",children:[a.jsx(u,{children:"Auto-fit 1"}),a.jsx(u,{children:"Auto-fit 2"}),a.jsx(u,{children:"Auto-fit 3"}),a.jsx(u,{children:"Auto-fit 4"}),a.jsx(u,{children:"Auto-fit 5"})]})},d={render:()=>a.jsxs(t,{autoFill:!0,minColumnWidth:"150px",gap:"sm",children:[a.jsx(u,{children:"Auto-fill 1"}),a.jsx(u,{children:"Auto-fill 2"}),a.jsx(u,{children:"Auto-fill 3"})]})},m={render:()=>a.jsxs(t,{columns:"1fr 2fr 1fr",gap:"md",children:[a.jsx(u,{children:"Sidebar"}),a.jsx(u,{children:"Main Content"}),a.jsx(u,{children:"Sidebar"})]})},o={render:()=>a.jsxs(t,{columns:3,rows:2,gap:"md",height:"300px",children:[a.jsx(u,{children:"1"}),a.jsx(u,{children:"2"}),a.jsx(u,{children:"3"}),a.jsx(u,{children:"4"}),a.jsx(u,{children:"5"}),a.jsx(u,{children:"6"})]})},c={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[a.jsxs("div",{children:[a.jsx("h3",{style:{color:"#FFFFFF",marginBottom:"1rem",fontFamily:"Inter, sans-serif"},children:"Small Gap"}),a.jsxs(t,{columns:3,gap:"xs",children:[a.jsx(u,{children:"1"}),a.jsx(u,{children:"2"}),a.jsx(u,{children:"3"})]})]}),a.jsxs("div",{children:[a.jsx("h3",{style:{color:"#FFFFFF",marginBottom:"1rem",fontFamily:"Inter, sans-serif"},children:"Medium Gap"}),a.jsxs(t,{columns:3,gap:"md",children:[a.jsx(u,{children:"1"}),a.jsx(u,{children:"2"}),a.jsx(u,{children:"3"})]})]}),a.jsxs("div",{children:[a.jsx("h3",{style:{color:"#FFFFFF",marginBottom:"1rem",fontFamily:"Inter, sans-serif"},children:"Large Gap"}),a.jsxs(t,{columns:3,gap:"xl",children:[a.jsx(u,{children:"1"}),a.jsx(u,{children:"2"}),a.jsx(u,{children:"3"})]})]})]})},p={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[a.jsxs("div",{children:[a.jsx("h3",{style:{color:"#FFFFFF",marginBottom:"1rem",fontFamily:"Inter, sans-serif"},children:"Center Items"}),a.jsxs(t,{columns:3,gap:"md",height:"200px",justifyItems:"center",alignItems:"center",style:{border:"1px solid #4A4A4A"},children:[a.jsx(u,{children:"Center"}),a.jsx(u,{children:"Center"}),a.jsx(u,{children:"Center"})]})]}),a.jsxs("div",{children:[a.jsx("h3",{style:{color:"#FFFFFF",marginBottom:"1rem",fontFamily:"Inter, sans-serif"},children:"Stretch Items"}),a.jsxs(t,{columns:3,gap:"md",height:"200px",justifyItems:"stretch",alignItems:"stretch",style:{border:"1px solid #4A4A4A"},children:[a.jsx(u,{children:"Stretch"}),a.jsx(u,{children:"Stretch"}),a.jsx(u,{children:"Stretch"})]})]})]})};var f,g,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    columns: 3,
    gap: 'md'
  },
  render: args => <Grid {...args}>\r
      <GridItem>Item 1</GridItem>\r
      <GridItem>Item 2</GridItem>\r
      <GridItem>Item 3</GridItem>\r
      <GridItem>Item 4</GridItem>\r
      <GridItem>Item 5</GridItem>\r
      <GridItem>Item 6</GridItem>\r
    </Grid>
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var G,I,x;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Grid columns={1} sm={2} md={3} lg={4} gap="md">\r
      <GridItem>Responsive 1</GridItem>\r
      <GridItem>Responsive 2</GridItem>\r
      <GridItem>Responsive 3</GridItem>\r
      <GridItem>Responsive 4</GridItem>\r
      <GridItem>Responsive 5</GridItem>\r
      <GridItem>Responsive 6</GridItem>\r
      <GridItem>Responsive 7</GridItem>\r
      <GridItem>Responsive 8</GridItem>\r
    </Grid>
}`,...(x=(I=v.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var y,F,j;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Grid autoFit minColumnWidth="200px" gap="md">\r
      <GridItem>Auto-fit 1</GridItem>\r
      <GridItem>Auto-fit 2</GridItem>\r
      <GridItem>Auto-fit 3</GridItem>\r
      <GridItem>Auto-fit 4</GridItem>\r
      <GridItem>Auto-fit 5</GridItem>\r
    </Grid>
}`,...(j=(F=s.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var $,b,q;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Grid autoFill minColumnWidth="150px" gap="sm">\r
      <GridItem>Auto-fill 1</GridItem>\r
      <GridItem>Auto-fill 2</GridItem>\r
      <GridItem>Auto-fill 3</GridItem>\r
    </Grid>
}`,...(q=(b=d.parameters)==null?void 0:b.docs)==null?void 0:q.source}}};var A,V,C;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Grid columns="1fr 2fr 1fr" gap="md">\r
      <GridItem>Sidebar</GridItem>\r
      <GridItem>Main Content</GridItem>\r
      <GridItem>Sidebar</GridItem>\r
    </Grid>
}`,...(C=(V=m.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var S,R,B;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Grid columns={3} rows={2} gap="md" height="300px">\r
      <GridItem>1</GridItem>\r
      <GridItem>2</GridItem>\r
      <GridItem>3</GridItem>\r
      <GridItem>4</GridItem>\r
      <GridItem>5</GridItem>\r
      <GridItem>6</GridItem>\r
    </Grid>
}`,...(B=(R=o.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var k,w,M;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
      <div>\r
        <h3 style={{
        color: '#FFFFFF',
        marginBottom: '1rem',
        fontFamily: 'Inter, sans-serif'
      }}>Small Gap</h3>\r
        <Grid columns={3} gap="xs">\r
          <GridItem>1</GridItem>\r
          <GridItem>2</GridItem>\r
          <GridItem>3</GridItem>\r
        </Grid>\r
      </div>\r
      \r
      <div>\r
        <h3 style={{
        color: '#FFFFFF',
        marginBottom: '1rem',
        fontFamily: 'Inter, sans-serif'
      }}>Medium Gap</h3>\r
        <Grid columns={3} gap="md">\r
          <GridItem>1</GridItem>\r
          <GridItem>2</GridItem>\r
          <GridItem>3</GridItem>\r
        </Grid>\r
      </div>\r
      \r
      <div>\r
        <h3 style={{
        color: '#FFFFFF',
        marginBottom: '1rem',
        fontFamily: 'Inter, sans-serif'
      }}>Large Gap</h3>\r
        <Grid columns={3} gap="xl">\r
          <GridItem>1</GridItem>\r
          <GridItem>2</GridItem>\r
          <GridItem>3</GridItem>\r
        </Grid>\r
      </div>\r
    </div>
}`,...(M=(w=c.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var D,_,L;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
      <div>\r
        <h3 style={{
        color: '#FFFFFF',
        marginBottom: '1rem',
        fontFamily: 'Inter, sans-serif'
      }}>Center Items</h3>\r
        <Grid columns={3} gap="md" height="200px" justifyItems="center" alignItems="center" style={{
        border: '1px solid #4A4A4A'
      }}>\r
          <GridItem>Center</GridItem>\r
          <GridItem>Center</GridItem>\r
          <GridItem>Center</GridItem>\r
        </Grid>\r
      </div>\r
      \r
      <div>\r
        <h3 style={{
        color: '#FFFFFF',
        marginBottom: '1rem',
        fontFamily: 'Inter, sans-serif'
      }}>Stretch Items</h3>\r
        <Grid columns={3} gap="md" height="200px" justifyItems="stretch" alignItems="stretch" style={{
        border: '1px solid #4A4A4A'
      }}>\r
          <GridItem>Stretch</GridItem>\r
          <GridItem>Stretch</GridItem>\r
          <GridItem>Stretch</GridItem>\r
        </Grid>\r
      </div>\r
    </div>
}`,...(L=(_=p.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const Q=["Basic","Responsive","AutoFit","AutoFill","CustomColumns","WithRowsAndColumns","DifferentGaps","Alignment"];export{p as Alignment,d as AutoFill,s as AutoFit,n as Basic,m as CustomColumns,c as DifferentGaps,v as Responsive,o as WithRowsAndColumns,Q as __namedExportsOrder,K as default};
