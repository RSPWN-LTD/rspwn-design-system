import{j as e}from"./jsx-runtime-CDt2p4po.js";import{l as o,d as oe}from"./styled-components.browser.esm-Byilhkxn.js";import{B as s}from"./Box-COihqxSe.js";import{C as ce}from"./Container-BXT0WXRT.js";import{c as se}from"./propFilters-BGSNtaQt.js";import{T as r}from"./Typography-u4LxpgYF.js";import{S as t}from"./Stack-DrhX4xxp.js";import{G as d}from"./Grid-BbcBGEjG.js";import"./index-GiUgBvb1.js";import"./Flex-DuvPXp7m.js";import"./Divider-CjVmphoG.js";const de={default:{paddingY:{xs:8,lg:12},background:"transparent"},hero:{paddingY:{xs:16,lg:24},minHeight:"100vh",background:"dark"},feature:{paddingY:{xs:12,lg:20},background:"subtle"},content:{paddingY:{xs:8,lg:12},background:"transparent"},footer:{paddingY:{xs:8,lg:10},background:"dark",bordered:"top"}},ue=a=>{switch(a){case"subtle":return o`background-color: ${({theme:i})=>i.colors.gray.light};`;case"accent":return o`background-color: ${({theme:i})=>i.colors.innovation.primaryBlue};`;case"dark":return o`background-color: ${({theme:i})=>i.colors.gray.dark};`;case"transparent":return o`background-color: transparent;`;default:return o`background-color: ${({theme:i})=>i.colors.foundation.white};`}},ge=a=>{if(!a)return"";const i=o`1px solid ${({theme:l})=>l.colors.gray.base}`;switch(a){case"top":return o`border-top: ${i};`;case"bottom":return o`border-bottom: ${i};`;case"both":return o`
        border-top: ${i};
        border-bottom: ${i};
      `;default:return o`
        border-top: ${i};
        border-bottom: ${i};
      `}},g=(a,i)=>a?typeof a=="string"||typeof a=="number"?o`${i}: ${({theme:l})=>l.spacing[a]};`:o`
    ${a.xs&&o`${i}: ${({theme:l})=>l.spacing[a.xs]};`}
    ${a.sm&&o`
      @media (min-width: ${({theme:l})=>l.breakpoints.sm}) {
        ${i}: ${({theme:l})=>l.spacing[a.sm]};
      }
    `}
    ${a.md&&o`
      @media (min-width: ${({theme:l})=>l.breakpoints.md}) {
        ${i}: ${({theme:l})=>l.spacing[a.md]};
      }
    `}
    ${a.lg&&o`
      @media (min-width: ${({theme:l})=>l.breakpoints.lg}) {
        ${i}: ${({theme:l})=>l.spacing[a.lg]};
      }
    `}
    ${a.xl&&o`
      @media (min-width: ${({theme:l})=>l.breakpoints.xl}) {
        ${i}: ${({theme:l})=>l.spacing[a.xl]};
      }
    `}
  `:"",pe=a=>{switch(a){case"screen":return o`min-height: 100vh;`;case"auto":return o`min-height: auto;`;default:return a?o`min-height: ${a};`:""}},he=oe(s).withConfig({shouldForwardProp:se(["variant","container","paddingY","marginY","background","bordered","minHeight"])})`
  width: 100%;
  
  /* Background */
  ${({background:a})=>ue(a)}
  
  /* Borders */
  ${({bordered:a})=>ge(a)}
  
  /* Min height */
  ${({minHeight:a})=>pe(a)}
  
  /* Responsive paddingY */
  ${({paddingY:a})=>a&&o`
    ${g(a,"padding-top")}
    ${g(a,"padding-bottom")}
  `}
  
  /* Responsive marginY */
  ${({marginY:a})=>a&&o`
    ${g(a,"margin-top")}
    ${g(a,"margin-bottom")}
  `}
`,n=({as:a="section",variant:i="default",container:l=!1,paddingY:X,marginY:K,background:Q,bordered:Z,minHeight:ee,children:k,...re})=>{const u=de[i],ae=X??u.paddingY,ne=Q??u.background,te=Z??u.bordered,le=ee??u.minHeight,ie=l?e.jsx(ce,{size:typeof l=="boolean"?"xl":l,variant:typeof l=="string"&&["prose","narrow","wide","fluid"].includes(l)?l:void 0,children:k}):k;return e.jsx(he,{as:a,variant:i,paddingY:ae,marginY:K,background:ne,bordered:te,minHeight:le,...re,children:ie})};try{n.displayName="Section",n.__docgenInfo={description:"",displayName:"Section",props:{as:{defaultValue:{value:"section"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"aside"'},{value:'"footer"'},{value:'"header"'},{value:'"main"'},{value:'"section"'}]}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"footer"'},{value:'"default"'},{value:'"content"'},{value:'"hero"'},{value:'"feature"'}]}},container:{defaultValue:{value:"false"},description:"",name:"container",required:!1,type:{name:'boolean | "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "default" | "wide" | "prose" | "narrow" | "fluid"'}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ResponsivePaddingValue"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"ResponsivePaddingValue"}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"default"'},{value:'"subtle"'},{value:'"accent"'},{value:'"transparent"'}]}},bordered:{defaultValue:null,description:"",name:"bordered",required:!1,type:{name:'boolean | "top" | "bottom" | "both"'}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"string | number"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"string | number"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"flex"'},{value:'"block"'},{value:'"inline"'},{value:'"inline-block"'},{value:'"inline-flex"'},{value:'"grid"'},{value:'"inline-grid"'},{value:'"none"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string | number"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string | number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"blue"'},{value:'"purple"'},{value:'"black"'},{value:'"dark"'},{value:'"gray"'},{value:'"light"'}]}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"none"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"full"'}]}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"static"'},{value:'"relative"'},{value:'"absolute"'},{value:'"fixed"'},{value:'"sticky"'}]}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"string | number"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"string | number"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string | number"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"stretch"'},{value:'"baseline"'}]}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'}]}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"row-reverse"'},{value:'"column"'},{value:'"column-reverse"'}]}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"enum",value:[{value:'"nowrap"'},{value:'"wrap"'},{value:'"wrap-reverse"'}]}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},gridTemplateColumns:{defaultValue:null,description:"",name:"gridTemplateColumns",required:!1,type:{name:"string"}},gridTemplateRows:{defaultValue:null,description:"",name:"gridTemplateRows",required:!1,type:{name:"string"}},gridGap:{defaultValue:null,description:"",name:"gridGap",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"56"},{value:"64"}]}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"enum",value:[{value:'"visible"'},{value:'"hidden"'},{value:'"scroll"'},{value:'"auto"'}]}},cursor:{defaultValue:null,description:"",name:"cursor",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"pointer"'},{value:'"default"'},{value:'"grab"'},{value:'"grabbing"'},{value:'"not-allowed"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const we={title:"Foundation/Section",component:n,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{as:{control:{type:"select"},options:["section","header","main","aside","footer","article"]},variant:{control:{type:"select"},options:["default","hero","feature","content","footer"]},background:{control:{type:"select"},options:["default","subtle","accent","dark","transparent"]},bordered:{control:{type:"select"},options:[!1,!0,"top","bottom","both"]},minHeight:{control:{type:"select"},options:["auto","screen","400px","600px"]},container:{control:{type:"select"},options:[!1,!0,"sm","md","lg","xl","2xl","prose","narrow","wide","fluid"]}}},c=({children:a,height:i="auto"})=>e.jsx(s,{bg:"blue",p:"6",borderRadius:"md",height:i,display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(r,{color:"white",align:"center",children:a})}),p={args:{variant:"default",container:!0},render:a=>e.jsx(n,{...a,children:e.jsx(c,{children:"Default Section - Basic section with standard padding and transparent background"})})},h={render:()=>e.jsxs("div",{children:[e.jsx(n,{variant:"hero",container:"xl",children:e.jsxs(s,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",children:[e.jsx(r,{variant:"h1",color:"white",mb:"4",children:"Hero Section"}),e.jsx(r,{color:"gray.light",mb:"6",maxWidth:"600px",children:"Full-height hero section with dark background, perfect for landing page headers. Features large padding and center-aligned content."}),e.jsx(s,{bg:"blue",p:"4",borderRadius:"base",minWidth:"160px",children:e.jsx(r,{color:"white",fontWeight:"medium",align:"center",children:"Call to Action"})})]})}),e.jsx(n,{variant:"feature",container:"lg",children:e.jsxs(t,{spacing:"8",align:"center",children:[e.jsx(r,{variant:"h2",align:"center",color:"dark",children:"Feature Section"}),e.jsx(r,{align:"center",color:"gray.dark",maxWidth:"600px",children:"Feature section with subtle background, ideal for showcasing key features and benefits."}),e.jsxs(d,{columns:{xs:1,md:3},gap:"6",width:"100%",children:[e.jsx(c,{children:"Feature 1"}),e.jsx(c,{children:"Feature 2"}),e.jsx(c,{children:"Feature 3"})]})]})}),e.jsx(n,{variant:"content",container:"prose",children:e.jsxs(t,{spacing:"6",children:[e.jsx(r,{variant:"h2",color:"dark",children:"Content Section"}),e.jsx(r,{color:"gray.dark",children:"Content section optimized for readability with prose container width. Perfect for articles, blog posts, and text-heavy content."}),e.jsx(r,{color:"gray.dark",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e.jsx(n,{variant:"footer",container:"xl",children:e.jsxs(d,{columns:{xs:1,md:4},gap:"8",children:[e.jsxs(t,{spacing:"4",children:[e.jsx(r,{variant:"h5",color:"white",children:"Company"}),e.jsxs(t,{spacing:"2",children:[e.jsx(r,{color:"gray.light",children:"About"}),e.jsx(r,{color:"gray.light",children:"Careers"}),e.jsx(r,{color:"gray.light",children:"Contact"})]})]}),e.jsxs(t,{spacing:"4",children:[e.jsx(r,{variant:"h5",color:"white",children:"Product"}),e.jsxs(t,{spacing:"2",children:[e.jsx(r,{color:"gray.light",children:"Features"}),e.jsx(r,{color:"gray.light",children:"Pricing"}),e.jsx(r,{color:"gray.light",children:"Support"})]})]}),e.jsxs(t,{spacing:"4",children:[e.jsx(r,{variant:"h5",color:"white",children:"Resources"}),e.jsxs(t,{spacing:"2",children:[e.jsx(r,{color:"gray.light",children:"Documentation"}),e.jsx(r,{color:"gray.light",children:"Blog"}),e.jsx(r,{color:"gray.light",children:"Community"})]})]}),e.jsxs(t,{spacing:"4",children:[e.jsx(r,{variant:"h5",color:"white",children:"Legal"}),e.jsxs(t,{spacing:"2",children:[e.jsx(r,{color:"gray.light",children:"Privacy"}),e.jsx(r,{color:"gray.light",children:"Terms"}),e.jsx(r,{color:"gray.light",children:"Security"})]})]})]})})]})},y={render:()=>e.jsxs("div",{children:[e.jsx(n,{as:"header",variant:"default",container:"xl",background:"dark",children:e.jsxs(s,{display:"flex",justifyContent:"between",alignItems:"center",py:"4",children:[e.jsx(r,{variant:"h4",color:"white",children:"RSPWN"}),e.jsxs(s,{display:"flex",gap:"6",children:[e.jsx(r,{color:"gray.light",children:"Home"}),e.jsx(r,{color:"gray.light",children:"About"}),e.jsx(r,{color:"gray.light",children:"Contact"})]})]})}),e.jsx(n,{as:"main",variant:"content",container:"lg",children:e.jsx(c,{height:"300px",children:"Main Content Area - Uses semantic <main> element"})}),e.jsx(n,{as:"aside",variant:"feature",container:"narrow",children:e.jsx(c,{height:"200px",children:"Sidebar Content - Uses semantic <aside> element"})}),e.jsx(n,{as:"footer",variant:"footer",container:"xl",children:e.jsx(r,{color:"gray.light",align:"center",children:"© 2024 RSPWN. All rights reserved. - Uses semantic <footer> element"})})]})},v={render:()=>e.jsxs(t,{spacing:"0",children:[e.jsx(n,{background:"default",paddingY:"8",container:"lg",children:e.jsx(c,{children:"Default Background (White)"})}),e.jsx(n,{background:"subtle",paddingY:"8",container:"lg",children:e.jsx(s,{bg:"dark",p:"6",borderRadius:"md",display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(r,{color:"white",align:"center",children:"Subtle Background (Light Gray)"})})}),e.jsx(n,{background:"dark",paddingY:"8",container:"lg",children:e.jsx(c,{children:"Dark Background"})}),e.jsx(n,{background:"accent",paddingY:"8",container:"lg",children:e.jsx(s,{bg:"white",p:"6",borderRadius:"md",display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(r,{color:"dark",align:"center",children:"Accent Background (Blue)"})})}),e.jsx(n,{background:"transparent",paddingY:"8",container:"lg",style:{backgroundColor:"#f0f0f0"},children:e.jsx(c,{children:"Transparent Background"})})]})},m={render:()=>e.jsxs(t,{spacing:"0",children:[e.jsx(n,{paddingY:"6",container:"lg",bordered:"top",children:e.jsx(c,{children:"Top Border Only"})}),e.jsx(n,{paddingY:"6",container:"lg",bordered:"bottom",children:e.jsx(c,{children:"Bottom Border Only"})}),e.jsx(n,{paddingY:"6",container:"lg",bordered:"both",children:e.jsx(c,{children:"Top and Bottom Borders"})}),e.jsx(n,{paddingY:"6",container:"lg",bordered:!0,children:e.jsx(c,{children:"Boolean Border (Both)"})})]})},x={render:()=>e.jsxs(t,{spacing:"8",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"h3",mb:"4",align:"center",color:"dark",children:"Container Integration"}),e.jsx(n,{paddingY:"6",background:"subtle",children:e.jsx(c,{children:"No Container - Full Width"})})]}),e.jsx(n,{paddingY:"6",container:"sm",background:"subtle",children:e.jsx(c,{children:"Small Container (640px)"})}),e.jsx(n,{paddingY:"6",container:"lg",background:"subtle",children:e.jsx(c,{children:"Large Container (1024px)"})}),e.jsx(n,{paddingY:"6",container:"prose",background:"subtle",children:e.jsx(s,{bg:"dark",p:"6",borderRadius:"md",children:e.jsx(r,{color:"white",children:"Prose Container (65ch) - Optimized for reading. This text demonstrates the optimal line length for readability. The prose container ensures text doesn't get too wide, making it easier to read long-form content."})})}),e.jsx(n,{paddingY:"6",container:"wide",background:"subtle",children:e.jsx(c,{children:"Wide Container (1536px) - Great for dashboards"})})]})},f={render:()=>e.jsxs(t,{spacing:"6",children:[e.jsx(n,{paddingY:{xs:"4",md:"8",lg:"16"},container:"lg",background:"subtle",children:e.jsxs(c,{children:["Responsive Vertical Padding",e.jsx("br",{}),"XS: 16px, MD: 32px, LG: 64px"]})}),e.jsx(n,{paddingY:"12",marginY:{xs:"4",lg:"8"},container:"lg",background:"dark",children:e.jsxs(c,{children:["Fixed Padding with Responsive Margin",e.jsx("br",{}),"Padding: 48px, Margin: 16px → 32px"]})})]})},b={render:()=>e.jsxs(t,{spacing:"0",children:[e.jsx(n,{minHeight:"screen",background:"dark",container:"xl",children:e.jsxs(s,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",children:[e.jsx(r,{variant:"h1",color:"white",mb:"4",children:"Full Screen Height"}),e.jsx(r,{color:"gray.light",align:"center",children:'This section uses minHeight="screen" to fill the viewport height'})]})}),e.jsx(n,{minHeight:"400px",background:"subtle",container:"lg",children:e.jsx(s,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",children:e.jsx(c,{children:"Fixed Height (400px)"})})})]})},j={render:()=>e.jsxs("div",{children:[e.jsx(n,{variant:"hero",container:"xl",children:e.jsxs(s,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",children:[e.jsx(r,{variant:"h1",color:"white",mb:"6",style:{fontSize:"3.5rem"},children:"Welcome to RSPWN"}),e.jsx(r,{color:"gray.light",mb:"8",maxWidth:"600px",variant:"h5",children:"The ultimate gaming platform designed for professionals and enthusiasts alike. Experience next-generation gaming with our cutting-edge technology."}),e.jsxs(t,{direction:"horizontal",spacing:"4",align:"center",children:[e.jsx(s,{bg:"blue",p:"4",borderRadius:"base",minWidth:"160px",children:e.jsx(r,{color:"white",fontWeight:"medium",align:"center",children:"Get Started"})}),e.jsx(s,{border:"1px solid",borderColor:"gray.base",p:"4",borderRadius:"base",minWidth:"160px",children:e.jsx(r,{color:"gray.light",fontWeight:"medium",align:"center",children:"Learn More"})})]})]})}),e.jsx(n,{variant:"feature",container:"xl",children:e.jsxs(t,{spacing:"12",align:"center",children:[e.jsxs(t,{spacing:"4",align:"center",maxWidth:"800px",children:[e.jsx(r,{variant:"h2",align:"center",color:"dark",children:"Everything You Need"}),e.jsx(r,{align:"center",color:"gray.dark",variant:"body1",children:"Comprehensive tools and features designed to elevate your gaming experience to professional levels with industry-leading performance."})]}),e.jsxs(d,{columns:{xs:1,md:3},gap:"8",children:[e.jsxs(t,{spacing:"4",align:"center",children:[e.jsx(s,{bg:"blue",p:"4",borderRadius:"full",width:"80px",height:"80px",display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(r,{color:"white",variant:"h3",children:"⚡"})}),e.jsx(r,{variant:"h4",color:"dark",align:"center",children:"Lightning Fast"}),e.jsx(r,{color:"gray.dark",align:"center",children:"Ultra-low latency gaming with optimized performance for competitive play."})]}),e.jsxs(t,{spacing:"4",align:"center",children:[e.jsx(s,{bg:"purple",p:"4",borderRadius:"full",width:"80px",height:"80px",display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(r,{color:"white",variant:"h3",children:"🎯"})}),e.jsx(r,{variant:"h4",color:"dark",align:"center",children:"Precision Control"}),e.jsx(r,{color:"gray.dark",align:"center",children:"Advanced input systems and customizable controls for every gaming style."})]}),e.jsxs(t,{spacing:"4",align:"center",children:[e.jsx(s,{bg:"gray.dark",p:"4",borderRadius:"full",width:"80px",height:"80px",display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(r,{color:"white",variant:"h3",children:"🛡️"})}),e.jsx(r,{variant:"h4",color:"dark",align:"center",children:"Secure Platform"}),e.jsx(r,{color:"gray.dark",align:"center",children:"Enterprise-grade security with advanced anti-cheat and data protection."})]})]})]})}),e.jsx(n,{paddingY:"16",background:"dark",container:"xl",children:e.jsxs(d,{columns:{xs:1,sm:2,lg:4},gap:"8",children:[e.jsxs(t,{spacing:"2",align:"center",children:[e.jsx(r,{variant:"h1",color:"blue",fontWeight:"bold",children:"1M+"}),e.jsx(r,{color:"gray.light",align:"center",children:"Active Players"})]}),e.jsxs(t,{spacing:"2",align:"center",children:[e.jsx(r,{variant:"h1",color:"blue",fontWeight:"bold",children:"99.9%"}),e.jsx(r,{color:"gray.light",align:"center",children:"Uptime"})]}),e.jsxs(t,{spacing:"2",align:"center",children:[e.jsx(r,{variant:"h1",color:"blue",fontWeight:"bold",children:"50+"}),e.jsx(r,{color:"gray.light",align:"center",children:"Game Titles"})]}),e.jsxs(t,{spacing:"2",align:"center",children:[e.jsx(r,{variant:"h1",color:"blue",fontWeight:"bold",children:"24/7"}),e.jsx(r,{color:"gray.light",align:"center",children:"Support"})]})]})}),e.jsx(n,{paddingY:"20",background:"subtle",container:"narrow",children:e.jsxs(t,{spacing:"8",align:"center",children:[e.jsx(r,{variant:"h2",align:"center",color:"dark",children:"Ready to Level Up?"}),e.jsx(r,{align:"center",color:"gray.dark",maxWidth:"500px",children:"Join millions of gamers already using RSPWN to dominate the competition. Start your journey today with our free tier."}),e.jsx(s,{bg:"blue",p:"5",borderRadius:"base",minWidth:"200px",children:e.jsx(r,{color:"white",fontWeight:"medium",align:"center",variant:"h5",children:"Start Free Trial"})})]})}),e.jsx(n,{variant:"footer",container:"xl",children:e.jsxs(t,{spacing:"8",children:[e.jsxs(d,{columns:{xs:1,sm:2,lg:4},gap:"8",children:[e.jsxs(t,{spacing:"4",children:[e.jsx(r,{variant:"h4",color:"white",children:"RSPWN"}),e.jsx(r,{color:"gray.light",children:"The ultimate gaming platform for professionals and enthusiasts."})]}),e.jsxs(t,{spacing:"4",children:[e.jsx(r,{variant:"h5",color:"white",children:"Product"}),e.jsxs(t,{spacing:"2",children:[e.jsx(r,{color:"gray.light",children:"Features"}),e.jsx(r,{color:"gray.light",children:"Pricing"}),e.jsx(r,{color:"gray.light",children:"API"})]})]}),e.jsxs(t,{spacing:"4",children:[e.jsx(r,{variant:"h5",color:"white",children:"Support"}),e.jsxs(t,{spacing:"2",children:[e.jsx(r,{color:"gray.light",children:"Documentation"}),e.jsx(r,{color:"gray.light",children:"Help Center"}),e.jsx(r,{color:"gray.light",children:"Contact"})]})]}),e.jsxs(t,{spacing:"4",children:[e.jsx(r,{variant:"h5",color:"white",children:"Company"}),e.jsxs(t,{spacing:"2",children:[e.jsx(r,{color:"gray.light",children:"About"}),e.jsx(r,{color:"gray.light",children:"Careers"}),e.jsx(r,{color:"gray.light",children:"News"})]})]})]}),e.jsx(s,{borderTop:"1px solid",borderColor:"gray.base",pt:"6",children:e.jsx(r,{color:"gray.light",align:"center",children:"© 2024 RSPWN. All rights reserved."})})]})})]})};var S,T,C;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    container: true
  },
  render: args => <Section {...args}>\r
      <ContentBox>\r
        Default Section - Basic section with standard padding and transparent background\r
      </ContentBox>\r
    </Section>
}`,...(C=(T=p.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var w,B,W;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div>\r
      <Section variant="hero" container="xl">\r
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">\r
          <Typography variant="h1" color="white" mb="4">Hero Section</Typography>\r
          <Typography color="gray.light" mb="6" maxWidth="600px">\r
            Full-height hero section with dark background, perfect for landing page headers.\r
            Features large padding and center-aligned content.\r
          </Typography>\r
          <Box bg="blue" p="4" borderRadius="base" minWidth="160px">\r
            <Typography color="white" fontWeight="medium" align="center">Call to Action</Typography>\r
          </Box>\r
        </Box>\r
      </Section>\r
      \r
      <Section variant="feature" container="lg">\r
        <Stack spacing="8" align="center">\r
          <Typography variant="h2" align="center" color="dark">Feature Section</Typography>\r
          <Typography align="center" color="gray.dark" maxWidth="600px">\r
            Feature section with subtle background, ideal for showcasing key features and benefits.\r
          </Typography>\r
          <Grid columns={{
          xs: 1,
          md: 3
        }} gap="6" width="100%">\r
            <ContentBox>Feature 1</ContentBox>\r
            <ContentBox>Feature 2</ContentBox>\r
            <ContentBox>Feature 3</ContentBox>\r
          </Grid>\r
        </Stack>\r
      </Section>\r
      \r
      <Section variant="content" container="prose">\r
        <Stack spacing="6">\r
          <Typography variant="h2" color="dark">Content Section</Typography>\r
          <Typography color="gray.dark">\r
            Content section optimized for readability with prose container width.\r
            Perfect for articles, blog posts, and text-heavy content.\r
          </Typography>\r
          <Typography color="gray.dark">\r
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor \r
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \r
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r
          </Typography>\r
        </Stack>\r
      </Section>\r
      \r
      <Section variant="footer" container="xl">\r
        <Grid columns={{
        xs: 1,
        md: 4
      }} gap="8">\r
          <Stack spacing="4">\r
            <Typography variant="h5" color="white">Company</Typography>\r
            <Stack spacing="2">\r
              <Typography color="gray.light">About</Typography>\r
              <Typography color="gray.light">Careers</Typography>\r
              <Typography color="gray.light">Contact</Typography>\r
            </Stack>\r
          </Stack>\r
          <Stack spacing="4">\r
            <Typography variant="h5" color="white">Product</Typography>\r
            <Stack spacing="2">\r
              <Typography color="gray.light">Features</Typography>\r
              <Typography color="gray.light">Pricing</Typography>\r
              <Typography color="gray.light">Support</Typography>\r
            </Stack>\r
          </Stack>\r
          <Stack spacing="4">\r
            <Typography variant="h5" color="white">Resources</Typography>\r
            <Stack spacing="2">\r
              <Typography color="gray.light">Documentation</Typography>\r
              <Typography color="gray.light">Blog</Typography>\r
              <Typography color="gray.light">Community</Typography>\r
            </Stack>\r
          </Stack>\r
          <Stack spacing="4">\r
            <Typography variant="h5" color="white">Legal</Typography>\r
            <Stack spacing="2">\r
              <Typography color="gray.light">Privacy</Typography>\r
              <Typography color="gray.light">Terms</Typography>\r
              <Typography color="gray.light">Security</Typography>\r
            </Stack>\r
          </Stack>\r
        </Grid>\r
      </Section>\r
    </div>
}`,...(W=(B=h.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var q,V,R;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div>\r
      <Section as="header" variant="default" container="xl" background="dark">\r
        <Box display="flex" justifyContent="between" alignItems="center" py="4">\r
          <Typography variant="h4" color="white">RSPWN</Typography>\r
          <Box display="flex" gap="6">\r
            <Typography color="gray.light">Home</Typography>\r
            <Typography color="gray.light">About</Typography>\r
            <Typography color="gray.light">Contact</Typography>\r
          </Box>\r
        </Box>\r
      </Section>\r
      \r
      <Section as="main" variant="content" container="lg">\r
        <ContentBox height="300px">\r
          Main Content Area - Uses semantic &lt;main&gt; element\r
        </ContentBox>\r
      </Section>\r
      \r
      <Section as="aside" variant="feature" container="narrow">\r
        <ContentBox height="200px">\r
          Sidebar Content - Uses semantic &lt;aside&gt; element\r
        </ContentBox>\r
      </Section>\r
      \r
      <Section as="footer" variant="footer" container="xl">\r
        <Typography color="gray.light" align="center">\r
          © 2024 RSPWN. All rights reserved. - Uses semantic &lt;footer&gt; element\r
        </Typography>\r
      </Section>\r
    </div>
}`,...(R=(V=y.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var Y,P,$;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Stack spacing="0">\r
      <Section background="default" paddingY="8" container="lg">\r
        <ContentBox>Default Background (White)</ContentBox>\r
      </Section>\r
      \r
      <Section background="subtle" paddingY="8" container="lg">\r
        <Box bg="dark" p="6" borderRadius="md" display="flex" alignItems="center" justifyContent="center">\r
          <Typography color="white" align="center">Subtle Background (Light Gray)</Typography>\r
        </Box>\r
      </Section>\r
      \r
      <Section background="dark" paddingY="8" container="lg">\r
        <ContentBox>Dark Background</ContentBox>\r
      </Section>\r
      \r
      <Section background="accent" paddingY="8" container="lg">\r
        <Box bg="white" p="6" borderRadius="md" display="flex" alignItems="center" justifyContent="center">\r
          <Typography color="dark" align="center">Accent Background (Blue)</Typography>\r
        </Box>\r
      </Section>\r
      \r
      <Section background="transparent" paddingY="8" container="lg" style={{
      backgroundColor: '#f0f0f0'
    }}>\r
        <ContentBox>Transparent Background</ContentBox>\r
      </Section>\r
    </Stack>
}`,...($=(P=v.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var F,I,H;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Stack spacing="0">\r
      <Section paddingY="6" container="lg" bordered="top">\r
        <ContentBox>Top Border Only</ContentBox>\r
      </Section>\r
      \r
      <Section paddingY="6" container="lg" bordered="bottom">\r
        <ContentBox>Bottom Border Only</ContentBox>\r
      </Section>\r
      \r
      <Section paddingY="6" container="lg" bordered="both">\r
        <ContentBox>Top and Bottom Borders</ContentBox>\r
      </Section>\r
      \r
      <Section paddingY="6" container="lg" bordered={true}>\r
        <ContentBox>Boolean Border (Both)</ContentBox>\r
      </Section>\r
    </Stack>
}`,...(H=(I=m.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var A,G,D;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Stack spacing="8">\r
      <div>\r
        <Typography variant="h3" mb="4" align="center" color="dark">Container Integration</Typography>\r
        \r
        <Section paddingY="6" background="subtle">\r
          <ContentBox>No Container - Full Width</ContentBox>\r
        </Section>\r
      </div>\r
      \r
      <Section paddingY="6" container="sm" background="subtle">\r
        <ContentBox>Small Container (640px)</ContentBox>\r
      </Section>\r
      \r
      <Section paddingY="6" container="lg" background="subtle">\r
        <ContentBox>Large Container (1024px)</ContentBox>\r
      </Section>\r
      \r
      <Section paddingY="6" container="prose" background="subtle">\r
        <Box bg="dark" p="6" borderRadius="md">\r
          <Typography color="white">\r
            Prose Container (65ch) - Optimized for reading. This text demonstrates \r
            the optimal line length for readability. The prose container ensures \r
            text doesn't get too wide, making it easier to read long-form content.\r
          </Typography>\r
        </Box>\r
      </Section>\r
      \r
      <Section paddingY="6" container="wide" background="subtle">\r
        <ContentBox>Wide Container (1536px) - Great for dashboards</ContentBox>\r
      </Section>\r
    </Stack>
}`,...(D=(G=x.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};var N,L,M;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Stack spacing="6">\r
      <Section paddingY={{
      xs: '4',
      md: '8',
      lg: '16'
    }} container="lg" background="subtle">\r
        <ContentBox>\r
          Responsive Vertical Padding<br />\r
          XS: 16px, MD: 32px, LG: 64px\r
        </ContentBox>\r
      </Section>\r
      \r
      <Section paddingY="12" marginY={{
      xs: '4',
      lg: '8'
    }} container="lg" background="dark">\r
        <ContentBox>\r
          Fixed Padding with Responsive Margin<br />\r
          Padding: 48px, Margin: 16px → 32px\r
        </ContentBox>\r
      </Section>\r
    </Stack>
}`,...(M=(L=f.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var z,U,E;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Stack spacing="0">\r
      <Section minHeight="screen" background="dark" container="xl">\r
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">\r
          <Typography variant="h1" color="white" mb="4">Full Screen Height</Typography>\r
          <Typography color="gray.light" align="center">\r
            This section uses minHeight="screen" to fill the viewport height\r
          </Typography>\r
        </Box>\r
      </Section>\r
      \r
      <Section minHeight="400px" background="subtle" container="lg">\r
        <Box display="flex" alignItems="center" justifyContent="center" height="100%">\r
          <ContentBox>Fixed Height (400px)</ContentBox>\r
        </Box>\r
      </Section>\r
    </Stack>
}`,...(E=(U=b.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var _,O,J;j.parameters={...j.parameters,docs:{...(_=j.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div>\r
      {/* Hero Section */}\r
      <Section variant="hero" container="xl">\r
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">\r
          <Typography variant="h1" color="white" mb="6" style={{
          fontSize: '3.5rem'
        }}>\r
            Welcome to RSPWN\r
          </Typography>\r
          <Typography color="gray.light" mb="8" maxWidth="600px" variant="h5">\r
            The ultimate gaming platform designed for professionals and enthusiasts alike.\r
            Experience next-generation gaming with our cutting-edge technology.\r
          </Typography>\r
          <Stack direction="horizontal" spacing="4" align="center">\r
            <Box bg="blue" p="4" borderRadius="base" minWidth="160px">\r
              <Typography color="white" fontWeight="medium" align="center">Get Started</Typography>\r
            </Box>\r
            <Box border="1px solid" borderColor="gray.base" p="4" borderRadius="base" minWidth="160px">\r
              <Typography color="gray.light" fontWeight="medium" align="center">Learn More</Typography>\r
            </Box>\r
          </Stack>\r
        </Box>\r
      </Section>\r
\r
      {/* Features Section */}\r
      <Section variant="feature" container="xl">\r
        <Stack spacing="12" align="center">\r
          <Stack spacing="4" align="center" maxWidth="800px">\r
            <Typography variant="h2" align="center" color="dark">\r
              Everything You Need\r
            </Typography>\r
            <Typography align="center" color="gray.dark" variant="body1">\r
              Comprehensive tools and features designed to elevate your gaming experience\r
              to professional levels with industry-leading performance.\r
            </Typography>\r
          </Stack>\r
          \r
          <Grid columns={{
          xs: 1,
          md: 3
        }} gap="8">\r
            <Stack spacing="4" align="center">\r
              <Box bg="blue" p="4" borderRadius="full" width="80px" height="80px" display="flex" alignItems="center" justifyContent="center">\r
                <Typography color="white" variant="h3">⚡</Typography>\r
              </Box>\r
              <Typography variant="h4" color="dark" align="center">Lightning Fast</Typography>\r
              <Typography color="gray.dark" align="center">\r
                Ultra-low latency gaming with optimized performance for competitive play.\r
              </Typography>\r
            </Stack>\r
            \r
            <Stack spacing="4" align="center">\r
              <Box bg="purple" p="4" borderRadius="full" width="80px" height="80px" display="flex" alignItems="center" justifyContent="center">\r
                <Typography color="white" variant="h3">🎯</Typography>\r
              </Box>\r
              <Typography variant="h4" color="dark" align="center">Precision Control</Typography>\r
              <Typography color="gray.dark" align="center">\r
                Advanced input systems and customizable controls for every gaming style.\r
              </Typography>\r
            </Stack>\r
            \r
            <Stack spacing="4" align="center">\r
              <Box bg="gray.dark" p="4" borderRadius="full" width="80px" height="80px" display="flex" alignItems="center" justifyContent="center">\r
                <Typography color="white" variant="h3">🛡️</Typography>\r
              </Box>\r
              <Typography variant="h4" color="dark" align="center">Secure Platform</Typography>\r
              <Typography color="gray.dark" align="center">\r
                Enterprise-grade security with advanced anti-cheat and data protection.\r
              </Typography>\r
            </Stack>\r
          </Grid>\r
        </Stack>\r
      </Section>\r
\r
      {/* Stats Section */}\r
      <Section paddingY="16" background="dark" container="xl">\r
        <Grid columns={{
        xs: 1,
        sm: 2,
        lg: 4
      }} gap="8">\r
          <Stack spacing="2" align="center">\r
            <Typography variant="h1" color="blue" fontWeight="bold">1M+</Typography>\r
            <Typography color="gray.light" align="center">Active Players</Typography>\r
          </Stack>\r
          <Stack spacing="2" align="center">\r
            <Typography variant="h1" color="blue" fontWeight="bold">99.9%</Typography>\r
            <Typography color="gray.light" align="center">Uptime</Typography>\r
          </Stack>\r
          <Stack spacing="2" align="center">\r
            <Typography variant="h1" color="blue" fontWeight="bold">50+</Typography>\r
            <Typography color="gray.light" align="center">Game Titles</Typography>\r
          </Stack>\r
          <Stack spacing="2" align="center">\r
            <Typography variant="h1" color="blue" fontWeight="bold">24/7</Typography>\r
            <Typography color="gray.light" align="center">Support</Typography>\r
          </Stack>\r
        </Grid>\r
      </Section>\r
\r
      {/* CTA Section */}\r
      <Section paddingY="20" background="subtle" container="narrow">\r
        <Stack spacing="8" align="center">\r
          <Typography variant="h2" align="center" color="dark">\r
            Ready to Level Up?\r
          </Typography>\r
          <Typography align="center" color="gray.dark" maxWidth="500px">\r
            Join millions of gamers already using RSPWN to dominate the competition.\r
            Start your journey today with our free tier.\r
          </Typography>\r
          <Box bg="blue" p="5" borderRadius="base" minWidth="200px">\r
            <Typography color="white" fontWeight="medium" align="center" variant="h5">\r
              Start Free Trial\r
            </Typography>\r
          </Box>\r
        </Stack>\r
      </Section>\r
\r
      {/* Footer */}\r
      <Section variant="footer" container="xl">\r
        <Stack spacing="8">\r
          <Grid columns={{
          xs: 1,
          sm: 2,
          lg: 4
        }} gap="8">\r
            <Stack spacing="4">\r
              <Typography variant="h4" color="white">RSPWN</Typography>\r
              <Typography color="gray.light">\r
                The ultimate gaming platform for professionals and enthusiasts.\r
              </Typography>\r
            </Stack>\r
            <Stack spacing="4">\r
              <Typography variant="h5" color="white">Product</Typography>\r
              <Stack spacing="2">\r
                <Typography color="gray.light">Features</Typography>\r
                <Typography color="gray.light">Pricing</Typography>\r
                <Typography color="gray.light">API</Typography>\r
              </Stack>\r
            </Stack>\r
            <Stack spacing="4">\r
              <Typography variant="h5" color="white">Support</Typography>\r
              <Stack spacing="2">\r
                <Typography color="gray.light">Documentation</Typography>\r
                <Typography color="gray.light">Help Center</Typography>\r
                <Typography color="gray.light">Contact</Typography>\r
              </Stack>\r
            </Stack>\r
            <Stack spacing="4">\r
              <Typography variant="h5" color="white">Company</Typography>\r
              <Stack spacing="2">\r
                <Typography color="gray.light">About</Typography>\r
                <Typography color="gray.light">Careers</Typography>\r
                <Typography color="gray.light">News</Typography>\r
              </Stack>\r
            </Stack>\r
          </Grid>\r
          \r
          <Box borderTop="1px solid" borderColor="gray.base" pt="6">\r
            <Typography color="gray.light" align="center">\r
              © 2024 RSPWN. All rights reserved.\r
            </Typography>\r
          </Box>\r
        </Stack>\r
      </Section>\r
    </div>
}`,...(J=(O=j.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};const Be=["Default","Variants","SemanticElements","BackgroundOptions","Borders","ContainerIntegration","ResponsivePadding","MinHeight","LandingPageExample"];export{v as BackgroundOptions,m as Borders,x as ContainerIntegration,p as Default,j as LandingPageExample,b as MinHeight,f as ResponsivePadding,y as SemanticElements,h as Variants,Be as __namedExportsOrder,we as default};
