import{j as e}from"./jsx-runtime-CDt2p4po.js";import{l as o,d as T}from"./styled-components.browser.esm-Byilhkxn.js";import{B as n}from"./Box-C_K3nAud.js";import{T as r}from"./Typography-CzMVeEUw.js";import"./index-GiUgBvb1.js";import"./propFilters-BGSNtaQt.js";const f=a=>o`
  color: ${({theme:l})=>{switch(a){case"light":return l.colors.gray.light;case"medium":return l.colors.gray.base;case"dark":return l.colors.gray.dark;default:return l.colors.gray.light}}};
`,j=a=>{switch(a){case"thin":return"1px";case"medium":return"2px";case"thick":return"4px";default:return"1px"}},ee=T.div`
  ${({orientation:a="horizontal",thickness:l="thin",color:d="light",style:u="solid",length:t})=>{const s=j(l);return a==="horizontal"?o`
        width: ${t?typeof t=="number"?`${t}px`:t:"100%"};
        height: ${s};
        border-top: ${s} ${u} currentColor;
        ${f(d)}
      `:o`
        width: ${s};
        height: ${t?typeof t=="number"?`${t}px`:t:"100%"};
        border-left: ${s} ${u} currentColor;
        ${f(d)}
      `}}
  
  ${({margin:a,theme:l})=>a&&o`
    margin: ${l.spacing[a]};
  `}
`,ae=T.div`
  display: flex;
  align-items: center;
  width: 100%;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: ${({thickness:a})=>j(a)};
    border-top: ${({thickness:a})=>j(a)} ${({style:a="solid"})=>a} currentColor;
    ${({color:a})=>f(a)}
  }
  
  ${({labelPosition:a="center"})=>a==="left"?o`
        &::before {
          flex: 0;
          margin-right: ${({theme:l})=>l.spacing[4]};
          width: ${({theme:l})=>l.spacing[4]};
        }
      `:a==="right"?o`
        &::after {
          flex: 0;
          margin-left: ${({theme:l})=>l.spacing[4]};
          width: ${({theme:l})=>l.spacing[4]};
        }
      `:o`
        &::before {
          margin-right: ${({theme:l})=>l.spacing[4]};
        }
        &::after {
          margin-left: ${({theme:l})=>l.spacing[4]};
        }
      `}
  
  ${({margin:a,theme:l})=>a&&o`
    margin: ${l.spacing[a]};
  `}
`,re=T.span`
  color: ${({theme:a})=>a.colors.foundation.white};
  font-family: ${({theme:a})=>a.typography.fonts.body};
  font-size: ${({theme:a})=>a.typography.fontSizes.sm};
  font-weight: ${({theme:a})=>a.typography.fontWeights.medium};
  white-space: nowrap;
`,i=({label:a,labelPosition:l="center",orientation:d="horizontal",thickness:u="thin",color:t="light",style:s="solid",margin:D,length:Z,className:k,...C})=>a&&d==="horizontal"?e.jsx(ae,{className:k,labelPosition:l,thickness:u,color:t,style:s,margin:D,...C,children:e.jsx(re,{children:a})}):e.jsx(ee,{className:k,orientation:d,thickness:u,color:t,style:s,margin:D,length:Z,...C});try{i.displayName="Divider",i.__docgenInfo={description:"",displayName:"Divider",props:{orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},thickness:{defaultValue:{value:"thin"},description:"",name:"thickness",required:!1,type:{name:"enum",value:[{value:'"thin"'},{value:'"medium"'},{value:'"thick"'}]}},color:{defaultValue:{value:"light"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"light"'},{value:'"dark"'}]}},style:{defaultValue:{value:"solid"},description:"",name:"style",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'},{value:'"dotted"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelPosition:{defaultValue:{value:"center"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},length:{defaultValue:null,description:"",name:"length",required:!1,type:{name:"string | number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"style"'},{value:'"search"'},{value:'"stop"'},{value:'"menu"'},{value:'"image"'},{value:'"label"'},{value:'"center"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}}}catch{}const de={title:"Foundation/Divider",component:i,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},thickness:{control:{type:"select"},options:["thin","medium","thick"]},color:{control:{type:"select"},options:["light","medium","dark"]},style:{control:{type:"select"},options:["solid","dashed","dotted"]},labelPosition:{control:{type:"select"},options:["left","center","right"]}}},v={args:{orientation:"horizontal",thickness:"thin",color:"light"},render:a=>e.jsxs(n,{p:"md",children:[e.jsx(r,{variant:"body",mb:"md",children:"Content above divider"}),e.jsx(i,{...a}),e.jsx(r,{variant:"body",mt:"md",children:"Content below divider"})]})},c={args:{orientation:"vertical",thickness:"thin",color:"light",length:"100px"},render:a=>e.jsxs(n,{display:"flex",alignItems:"center",gap:"md",p:"md",height:"120px",children:[e.jsx(r,{variant:"body",children:"Left content"}),e.jsx(i,{...a}),e.jsx(r,{variant:"body",children:"Right content"})]})},p={render:()=>e.jsxs(n,{p:"md",children:[e.jsx(r,{variant:"body",mb:"md",children:"Section above"}),e.jsx(i,{label:"OR"}),e.jsx(r,{variant:"body",mt:"md",children:"Section below"})]})},m={render:()=>e.jsxs(n,{p:"md",display:"flex",flexDirection:"column",gap:"xl",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"body",mb:"md",children:"Left positioned label"}),e.jsx(i,{label:"Left",labelPosition:"left"}),e.jsx(r,{variant:"body",mt:"md",children:"Content below"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"body",mb:"md",children:"Center positioned label"}),e.jsx(i,{label:"Center",labelPosition:"center"}),e.jsx(r,{variant:"body",mt:"md",children:"Content below"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"body",mb:"md",children:"Right positioned label"}),e.jsx(i,{label:"Right",labelPosition:"right"}),e.jsx(r,{variant:"body",mt:"md",children:"Content below"})]})]})},h={render:()=>e.jsxs(n,{p:"md",display:"flex",flexDirection:"column",gap:"lg",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Thin (1px)"}),e.jsx(i,{thickness:"thin"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Medium (2px)"}),e.jsx(i,{thickness:"medium"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Thick (4px)"}),e.jsx(i,{thickness:"thick"})]})]})},y={render:()=>e.jsxs(n,{p:"md",display:"flex",flexDirection:"column",gap:"lg",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Light"}),e.jsx(i,{color:"light"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Medium"}),e.jsx(i,{color:"medium"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Dark"}),e.jsx(i,{color:"dark"})]})]})},g={render:()=>e.jsxs(n,{p:"md",display:"flex",flexDirection:"column",gap:"lg",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Solid"}),e.jsx(i,{style:"solid",thickness:"medium"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Dashed"}),e.jsx(i,{style:"dashed",thickness:"medium"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Dotted"}),e.jsx(i,{style:"dotted",thickness:"thick"})]})]})},x={render:()=>e.jsxs(n,{p:"md",children:[e.jsx(r,{variant:"body",children:"Content with no margin"}),e.jsx(i,{}),e.jsx(r,{variant:"body",children:"More content"}),e.jsxs(n,{mt:"xl",children:[e.jsx(r,{variant:"body",children:"Content with medium margin"}),e.jsx(i,{margin:"md"}),e.jsx(r,{variant:"body",children:"More content"})]}),e.jsxs(n,{mt:"xl",children:[e.jsx(r,{variant:"body",children:"Content with large margin"}),e.jsx(i,{margin:"xl"}),e.jsx(r,{variant:"body",children:"More content"})]})]})},b={render:()=>e.jsxs(n,{display:"flex",alignItems:"center",gap:"md",p:"md",children:[e.jsx(n,{height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:e.jsx(r,{variant:"body",children:"Tall content on left"})}),e.jsx(i,{orientation:"vertical",length:"200px"}),e.jsx(n,{height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:e.jsx(r,{variant:"body",children:"Tall content on right"})})]})};var w,$,B;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    thickness: 'thin',
    color: 'light'
  },
  render: args => <Box p="md">\r
      <Typography variant="body" mb="md">Content above divider</Typography>\r
      <Divider {...args} />\r
      <Typography variant="body" mt="md">Content below divider</Typography>\r
    </Box>
}`,...(B=($=v.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var S,L,M;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    thickness: 'thin',
    color: 'light',
    length: '100px'
  },
  render: args => <Box display="flex" alignItems="center" gap="md" p="md" height="120px">\r
      <Typography variant="body">Left content</Typography>\r
      <Divider {...args} />\r
      <Typography variant="body">Right content</Typography>\r
    </Box>
}`,...(M=(L=c.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var V,z,P;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Box p="md">\r
      <Typography variant="body" mb="md">Section above</Typography>\r
      <Divider label="OR" />\r
      <Typography variant="body" mt="md">Section below</Typography>\r
    </Box>
}`,...(P=(z=p.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var q,I,R;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Box p="md" display="flex" flexDirection="column" gap="xl">\r
      <div>\r
        <Typography variant="body" mb="md">Left positioned label</Typography>\r
        <Divider label="Left" labelPosition="left" />\r
        <Typography variant="body" mt="md">Content below</Typography>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="md">Center positioned label</Typography>\r
        <Divider label="Center" labelPosition="center" />\r
        <Typography variant="body" mt="md">Content below</Typography>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="md">Right positioned label</Typography>\r
        <Divider label="Right" labelPosition="right" />\r
        <Typography variant="body" mt="md">Content below</Typography>\r
      </div>\r
    </Box>
}`,...(R=(I=m.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var _,W,F;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Box p="md" display="flex" flexDirection="column" gap="lg">\r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Thin (1px)</Typography>\r
        <Divider thickness="thin" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Medium (2px)</Typography>\r
        <Divider thickness="medium" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Thick (4px)</Typography>\r
        <Divider thickness="thick" />\r
      </div>\r
    </Box>
}`,...(F=(W=h.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var O,G,H;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Box p="md" display="flex" flexDirection="column" gap="lg">\r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Light</Typography>\r
        <Divider color="light" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Medium</Typography>\r
        <Divider color="medium" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Dark</Typography>\r
        <Divider color="dark" />\r
      </div>\r
    </Box>
}`,...(H=(G=y.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var N,E,A;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Box p="md" display="flex" flexDirection="column" gap="lg">\r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Solid</Typography>\r
        <Divider style="solid" thickness="medium" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Dashed</Typography>\r
        <Divider style="dashed" thickness="medium" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Dotted</Typography>\r
        <Divider style="dotted" thickness="thick" />\r
      </div>\r
    </Box>
}`,...(A=(E=g.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Box p="md">\r
      <Typography variant="body">Content with no margin</Typography>\r
      <Divider />\r
      <Typography variant="body">More content</Typography>\r
      \r
      <Box mt="xl">\r
        <Typography variant="body">Content with medium margin</Typography>\r
        <Divider margin="md" />\r
        <Typography variant="body">More content</Typography>\r
      </Box>\r
      \r
      <Box mt="xl">\r
        <Typography variant="body">Content with large margin</Typography>\r
        <Divider margin="xl" />\r
        <Typography variant="body">More content</Typography>\r
      </Box>\r
    </Box>
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Box display="flex" alignItems="center" gap="md" p="md">\r
      <Box height="200px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">\r
        <Typography variant="body">Tall content on left</Typography>\r
      </Box>\r
      \r
      <Divider orientation="vertical" length="200px" />\r
      \r
      <Box height="200px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">\r
        <Typography variant="body">Tall content on right</Typography>\r
      </Box>\r
    </Box>
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const ue=["Horizontal","Vertical","WithLabel","LabelPositions","Thickness","Colors","Styles","WithSpacing","VerticalWithHeight"];export{y as Colors,v as Horizontal,m as LabelPositions,g as Styles,h as Thickness,c as Vertical,b as VerticalWithHeight,p as WithLabel,x as WithSpacing,ue as __namedExportsOrder,de as default};
