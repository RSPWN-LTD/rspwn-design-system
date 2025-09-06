import{j as e}from"./jsx-runtime-CDt2p4po.js";import{l as t,d}from"./styled-components.browser.esm-Byilhkxn.js";import{B as s}from"./Box-C_K3nAud.js";import{T as r}from"./Typography-CzMVeEUw.js";import{B as k}from"./Button-BiPpMuqh.js";import"./index-GiUgBvb1.js";import"./propFilters-BGSNtaQt.js";const B=l=>{switch(l){case"elevated":return t`
        background-color: ${({theme:a})=>a.colors.gray.base};
        border: 1px solid ${({theme:a})=>a.colors.gray.light};
        box-shadow: ${({theme:a})=>a.shadows.lg};
      `;case"outlined":return t`
        background-color: transparent;
        border: 1px solid ${({theme:a})=>a.colors.gray.light};
      `;case"filled":return t`
        background-color: ${({theme:a})=>a.colors.gray.light};
        border: 1px solid ${({theme:a})=>a.colors.gray.light};
      `;default:return t`
        background-color: ${({theme:a})=>a.colors.gray.base};
        border: 1px solid ${({theme:a})=>a.colors.gray.light};
        box-shadow: ${({theme:a})=>a.shadows.base};
      `}},$=d(s).withConfig({shouldForwardProp:l=>!["variant","hoverable","clickable"].includes(l)})`
  border-radius: ${({theme:l})=>l.radius.lg};
  transition: all ${({theme:l})=>l.durations.normal} ${({theme:l})=>l.easings.easeOut};
  
  ${({variant:l})=>B(l)}
  
  ${({hoverable:l})=>l&&t`
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${({theme:a})=>a.shadows.xl};
      border-color: ${({theme:a})=>a.colors.innovation.primaryBlue}40;
    }
  `}
  
  ${({clickable:l})=>l&&t`
    cursor: pointer;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${({theme:a})=>a.shadows.xl};
      border-color: ${({theme:a})=>a.colors.innovation.primaryBlue}40;
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: ${({theme:a})=>a.shadows.base};
    }
  `}
`,F=d(s)`
  border-bottom: 1px solid ${({theme:l})=>l.colors.gray.light};
`,H=d(s)``,W=d(s)`
  border-top: 1px solid ${({theme:l})=>l.colors.gray.light};
`,u=({variant:l="default",hoverable:a=!1,clickable:q=!1,children:w,p:j=6,..._})=>e.jsx($,{variant:l,hoverable:a,clickable:q,p:j,..._,children:w});u.Header=F;u.Content=H;u.Footer=W;try{u.displayName="Card",u.__docgenInfo={description:"",displayName:"Card",props:{variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"filled"'},{value:'"outlined"'},{value:'"elevated"'}]}},hoverable:{defaultValue:{value:"false"},description:"",name:"hoverable",required:!1,type:{name:"boolean"}},clickable:{defaultValue:{value:"false"},description:"",name:"clickable",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"style"'},{value:'"search"'},{value:'"stop"'},{value:'"menu"'},{value:'"image"'},{value:'"label"'},{value:'"center"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"string | number"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"string | number"}},p:{defaultValue:{value:"6"},description:"",name:"p",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"stretch"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'}]}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"space-around"'},{value:'"space-between"'},{value:'"space-evenly"'},{value:'"flex-start"'},{value:'"flex-end"'}]}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string | number"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"grid"'},{value:'"none"'},{value:'"inline"'},{value:'"flex"'},{value:'"block"'},{value:'"inline-block"'},{value:'"inline-flex"'},{value:'"inline-grid"'}]}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string | number"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string | number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"base"'},{value:'"none"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"full"'}]}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"static"'},{value:'"relative"'},{value:'"absolute"'},{value:'"sticky"'}]}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"string | number"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"string | number"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string | number"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"row-reverse"'},{value:'"column"'},{value:'"column-reverse"'}]}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},gridTemplateColumns:{defaultValue:null,description:"",name:"gridTemplateColumns",required:!1,type:{name:"string"}},gridTemplateRows:{defaultValue:null,description:"",name:"gridTemplateRows",required:!1,type:{name:"string"}},gridGap:{defaultValue:null,description:"",name:"gridGap",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"enum",value:[{value:'"hidden"'},{value:'"visible"'},{value:'"scroll"'},{value:'"auto"'}]}},cursor:{defaultValue:null,description:"",name:"cursor",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"default"'},{value:'"pointer"'},{value:'"grab"'},{value:'"grabbing"'},{value:'"not-allowed"'}]}}}}}catch{}try{u.Header.displayName="Card.Header",u.Header.__docgenInfo={description:"",displayName:"Card.Header",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.Content.displayName="Card.Content",u.Content.__docgenInfo={description:"",displayName:"Card.Content",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{u.Footer.displayName="Card.Footer",u.Footer.__docgenInfo={description:"",displayName:"Card.Footer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const z={title:"UI/Card",component:u,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","elevated","outlined","filled"]},hoverable:{control:{type:"boolean"}},clickable:{control:{type:"boolean"}}}},n={args:{children:e.jsxs("div",{children:[e.jsx(r,{variant:"h4",style:{marginBottom:"1rem"},children:"Card Title"}),e.jsx(r,{variant:"body2",color:"secondary",children:"This is a default card with some sample content. Cards are flexible containers that can hold any content."})]}),variant:"default"}},v={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"1rem"},children:[e.jsxs(u,{variant:"default",children:[e.jsx(r,{variant:"h5",style:{marginBottom:"0.5rem"},children:"Default"}),e.jsx(r,{variant:"body2",color:"secondary",children:"Default card with subtle shadow"})]}),e.jsxs(u,{variant:"elevated",children:[e.jsx(r,{variant:"h5",style:{marginBottom:"0.5rem"},children:"Elevated"}),e.jsx(r,{variant:"body2",color:"secondary",children:"Elevated card with prominent shadow"})]}),e.jsxs(u,{variant:"outlined",children:[e.jsx(r,{variant:"h5",style:{marginBottom:"0.5rem"},children:"Outlined"}),e.jsx(r,{variant:"body2",color:"secondary",children:"Outlined card with border"})]}),e.jsxs(u,{variant:"filled",children:[e.jsx(r,{variant:"h5",style:{marginBottom:"0.5rem"},children:"Filled"}),e.jsx(r,{variant:"body2",color:"secondary",children:"Filled card with background"})]})]})},o={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"1rem"},children:[e.jsxs(u,{hoverable:!0,children:[e.jsx(r,{variant:"h5",style:{marginBottom:"0.5rem"},children:"Hoverable"}),e.jsx(r,{variant:"body2",color:"secondary",children:"This card has hover effects"})]}),e.jsxs(u,{clickable:!0,onClick:()=>alert("Card clicked!"),children:[e.jsx(r,{variant:"h5",style:{marginBottom:"0.5rem"},children:"Clickable"}),e.jsx(r,{variant:"body2",color:"secondary",children:"This card is clickable"})]})]})},i={render:()=>e.jsxs(u,{style:{maxWidth:"400px"},children:[e.jsx(u.Header,{p:"6",pb:"4",children:e.jsx(r,{variant:"h4",children:"Product Card"})}),e.jsxs(u.Content,{p:"6",py:"4",children:[e.jsx(r,{variant:"body2",color:"secondary",style:{marginBottom:"1rem"},children:"This is a more complex card example with header, content, and footer sections."}),e.jsx(r,{variant:"body2",color:"secondary",children:"You can organize content using the Card.Header, Card.Content, and Card.Footer components."})]}),e.jsxs(u.Footer,{p:"6",pt:"4",display:"flex",justifyContent:"space-between",alignItems:"center",children:[e.jsx(r,{variant:"caption",color:"muted",children:"$99.99"}),e.jsx(k,{size:"sm",children:"Add to Cart"})]})]})};var p,m,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <div>\r
        <Typography variant="h4" style={{
        marginBottom: '1rem'
      }}>\r
          Card Title\r
        </Typography>\r
        <Typography variant="body2" color="secondary">\r
          This is a default card with some sample content. Cards are flexible containers that can hold any content.\r
        </Typography>\r
      </div>,
    variant: 'default'
  }
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var y,f,h;v.parameters={...v.parameters,docs:{...(y=v.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem'
  }}>\r
      <Card variant="default">\r
        <Typography variant="h5" style={{
        marginBottom: '0.5rem'
      }}>Default</Typography>\r
        <Typography variant="body2" color="secondary">\r
          Default card with subtle shadow\r
        </Typography>\r
      </Card>\r
      <Card variant="elevated">\r
        <Typography variant="h5" style={{
        marginBottom: '0.5rem'
      }}>Elevated</Typography>\r
        <Typography variant="body2" color="secondary">\r
          Elevated card with prominent shadow\r
        </Typography>\r
      </Card>\r
      <Card variant="outlined">\r
        <Typography variant="h5" style={{
        marginBottom: '0.5rem'
      }}>Outlined</Typography>\r
        <Typography variant="body2" color="secondary">\r
          Outlined card with border\r
        </Typography>\r
      </Card>\r
      <Card variant="filled">\r
        <Typography variant="h5" style={{
        marginBottom: '0.5rem'
      }}>Filled</Typography>\r
        <Typography variant="body2" color="secondary">\r
          Filled card with background\r
        </Typography>\r
      </Card>\r
    </div>
}`,...(h=(f=v.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,b,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem'
  }}>\r
      <Card hoverable>\r
        <Typography variant="h5" style={{
        marginBottom: '0.5rem'
      }}>Hoverable</Typography>\r
        <Typography variant="body2" color="secondary">\r
          This card has hover effects\r
        </Typography>\r
      </Card>\r
      <Card clickable onClick={() => alert('Card clicked!')}>\r
        <Typography variant="h5" style={{
        marginBottom: '0.5rem'
      }}>Clickable</Typography>\r
        <Typography variant="body2" color="secondary">\r
          This card is clickable\r
        </Typography>\r
      </Card>\r
    </div>
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var C,T,V;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Card style={{
    maxWidth: '400px'
  }}>\r
      <Card.Header p="6" pb="4">\r
        <Typography variant="h4">Product Card</Typography>\r
      </Card.Header>\r
      <Card.Content p="6" py="4">\r
        <Typography variant="body2" color="secondary" style={{
        marginBottom: '1rem'
      }}>\r
          This is a more complex card example with header, content, and footer sections.\r
        </Typography>\r
        <Typography variant="body2" color="secondary">\r
          You can organize content using the Card.Header, Card.Content, and Card.Footer components.\r
        </Typography>\r
      </Card.Content>\r
      <Card.Footer p="6" pt="4" display="flex" justifyContent="space-between" alignItems="center">\r
        <Typography variant="caption" color="muted">$99.99</Typography>\r
        <Button size="sm">Add to Cart</Button>\r
      </Card.Footer>\r
    </Card>
}`,...(V=(T=i.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};const E=["Default","Variants","Interactive","WithContent"];export{n as Default,o as Interactive,v as Variants,i as WithContent,E as __namedExportsOrder,z as default};
