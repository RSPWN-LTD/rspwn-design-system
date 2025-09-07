import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as p}from"./index-GiUgBvb1.js";import{r as Ae}from"./index-CROobee-.js";import{l,d as g,m}from"./styled-components.browser.esm-Byilhkxn.js";import{B as d}from"./Button-B5_6KITS.js";import"./propFilters-BGSNtaQt.js";const Ee=(r,t)=>{const n=r==="left"||r==="right";if(t==="full")return l`
      ${n?"width: 100vw;":"height: 100vh;"}
    `;const o={sm:n?"300px":"200px",md:n?"400px":"300px",lg:n?"500px":"400px",xl:n?"600px":"500px"};return l`
    ${n?`width: ${o[t||"md"]};`:`height: ${o[t||"md"]};`}
    max-${n?"width":"height"}: 90v${n?"w":"h"};
  `},Oe=m`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,Le=m`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`,We=m`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`,Re=m`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,qe=m`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`,Me=m`
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
`,Pe=m`
  from { transform: translateY(0); }
  to { transform: translateY(-100%); }
`,Ne=m`
  from { transform: translateY(0); }
  to { transform: translateY(100%); }
`,Ie=m`
  from { opacity: 0; }
  to { opacity: 1; }
`,Fe=m`
  from { opacity: 1; }
  to { opacity: 0; }
`,Xe=(r,t)=>t==="closed"?"none":{left:{entering:Oe,open:"none",exiting:qe},right:{entering:Le,open:"none",exiting:Me},top:{entering:We,open:"none",exiting:Pe},bottom:{entering:Re,open:"none",exiting:Ne}}[r||"right"][t]||"none",Ye=r=>r==="closed"?"none":{entering:Ie,open:"none",exiting:Fe}[r]||"none",_e=g.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({theme:r})=>r.colors.foundation.black}60;
  backdrop-filter: blur(2px);
  z-index: 1000;
  
  ${({state:r})=>{const t=Ye(r);return l`
      animation: ${t!=="none"?l`${t} 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards`:"none"};
      opacity: ${r==="open"?1:r==="entering"?0:r==="exiting"?1:0};
    `}}
`,Ve=g.div`
  position: fixed;
  background-color: ${({theme:r})=>r.colors.gray.base};
  box-shadow: ${({theme:r})=>r.shadows.xl};
  z-index: 1001;
  display: flex;
  flex-direction: column;
  
  ${({side:r})=>{switch(r){case"left":return l`
          top: 0;
          left: 0;
          bottom: 0;
          border-right: 1px solid ${({theme:t})=>t.colors.gray.light};
        `;case"right":return l`
          top: 0;
          right: 0;
          bottom: 0;
          border-left: 1px solid ${({theme:t})=>t.colors.gray.light};
        `;case"top":return l`
          top: 0;
          left: 0;
          right: 0;
          border-bottom: 1px solid ${({theme:t})=>t.colors.gray.light};
        `;case"bottom":return l`
          bottom: 0;
          left: 0;
          right: 0;
          border-top: 1px solid ${({theme:t})=>t.colors.gray.light};
        `;default:return l`
          top: 0;
          right: 0;
          bottom: 0;
          border-left: 1px solid ${({theme:t})=>t.colors.gray.light};
        `}}}
  
  ${({side:r,size:t})=>Ee(r,t)}
  
  ${({side:r,state:t})=>{const n=Xe(r,t),o=s=>{switch(s){case"left":return"translateX(-100%)";case"right":return"translateX(100%)";case"top":return"translateY(-100%)";case"bottom":return"translateY(100%)";default:return"translateX(100%)"}};return l`
      transform: ${t==="open"?"translate3d(0, 0, 0)":t==="entering"?o(r):t==="exiting"?"translate3d(0, 0, 0)":o(r)};
      animation: ${n!=="none"?l`${n} 350ms cubic-bezier(0.25, 0.8, 0.25, 1) forwards`:"none"};
    `}}
`,He=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:r})=>r.spacing[4]};
  border-bottom: 1px solid ${({theme:r})=>r.colors.gray.light};
  flex-shrink: 0;
  min-height: 60px;
`,Ue=g.h2`
  font-family: ${({theme:r})=>r.typography.fonts.body};
  font-size: ${({theme:r})=>r.typography.fontSizes.lg};
  font-weight: ${({theme:r})=>r.typography.fontWeights.semibold};
  color: ${({theme:r})=>r.colors.text.primary};
  margin: 0;
  line-height: ${({theme:r})=>r.typography.lineHeights.tight};
`,Ge=g.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  background-color: transparent;
  border-radius: ${({theme:r})=>r.radius.md};
  cursor: pointer;
  color: ${({theme:r})=>r.colors.text.secondary};
  transition: all ${({theme:r})=>r.durations.fast} ${({theme:r})=>r.easings.easeOut};
  position: relative;
  flex-shrink: 0;
  
  &:hover {
    background-color: ${({theme:r})=>r.colors.gray.light}20;
    color: ${({theme:r})=>r.colors.text.primary};
  }
  
  &:focus {
    outline: none;
    background-color: ${({theme:r})=>r.colors.gray.light}20;
    box-shadow: 0 0 0 2px ${({theme:r})=>r.colors.innovation.primaryBlue}40;
  }
  
  &:active {
    background-color: ${({theme:r})=>r.colors.gray.light}40;
  }
  
  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`,Qe=g.div`
  padding: ${({theme:r})=>r.spacing[4]};
  overflow-y: auto;
  flex: 1;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({theme:r})=>r.colors.gray.dark};
    border-radius: ${({theme:r})=>r.radius.sm};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({theme:r})=>r.colors.gray.light};
    border-radius: ${({theme:r})=>r.radius.sm};
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({theme:r})=>r.colors.text.muted};
  }
`,u=({isOpen:r,onClose:t,side:n="right",size:o="md",title:s,showCloseButton:E=!0,closeOnOverlayClick:O=!0,closeOnEscape:L=!0,children:Be,className:ze})=>{const[i,h]=p.useState("closed");p.useEffect(()=>{if(r&&i==="closed"){h("entering");const c=setTimeout(()=>h("open"),50);return()=>clearTimeout(c)}else if(!r&&(i==="open"||i==="entering")){h("exiting");const c=setTimeout(()=>h("closed"),350);return()=>clearTimeout(c)}},[r,i]);const A=p.useCallback(c=>{L&&c.key==="Escape"&&(i==="open"||i==="entering")&&t()},[L,i,t]),Te=p.useCallback(c=>{O&&c.target===c.currentTarget&&t()},[O,t]);if(p.useEffect(()=>{if(i==="entering"||i==="open"){if(document.body.style.overflow="hidden",document.addEventListener("keydown",A),i==="entering"){const c=setTimeout(()=>{const W=document.querySelector('[data-drawer="true"]');W&&W.focus()},100);return()=>clearTimeout(c)}}else i==="closed"&&(document.body.style.overflow="unset");return()=>{document.removeEventListener("keydown",A),i==="closed"&&(document.body.style.overflow="unset")}},[i,A]),i==="closed")return null;const $e=e.jsxs(e.Fragment,{children:[e.jsx(_e,{state:i,onClick:Te}),e.jsxs(Ve,{side:n,size:o,state:i,className:ze,"data-drawer":"true",tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":s?"drawer-title":void 0,children:[(s||E)&&e.jsxs(He,{children:[s&&e.jsx(Ue,{id:"drawer-title",children:s}),E&&e.jsx(Ge,{onClick:t,"aria-label":"Close drawer",type:"button",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),e.jsx(Qe,{children:Be})]})]});return Ae.createPortal($e,document.body)};u.displayName="Drawer";try{u.displayName="Drawer",u.__docgenInfo={description:"",displayName:"Drawer",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},side:{defaultValue:{value:"right"},description:"",name:"side",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"full"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},showCloseButton:{defaultValue:{value:"true"},description:"",name:"showCloseButton",required:!1,type:{name:"boolean"}},closeOnOverlayClick:{defaultValue:{value:"true"},description:"",name:"closeOnOverlayClick",required:!1,type:{name:"boolean"}},closeOnEscape:{defaultValue:{value:"true"},description:"",name:"closeOnEscape",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const nr={title:"UI/Drawer",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{side:{control:{type:"select"},options:["left","right","top","bottom"]},size:{control:{type:"select"},options:["sm","md","lg","xl","full"]},isOpen:{control:{type:"boolean"}},showCloseButton:{control:{type:"boolean"}},closeOnOverlayClick:{control:{type:"boolean"}},closeOnEscape:{control:{type:"boolean"}}}},a=r=>{const[t,n]=p.useState(r.isOpen||!1);return e.jsxs("div",{children:[e.jsxs(d,{onClick:()=>n(!0),children:["Open ",r.side||"right"," drawer"]}),e.jsx(u,{...r,isOpen:t,onClose:()=>n(!1),children:r.children})]})},y={render:r=>e.jsx(a,{...r}),args:{title:"Default Drawer",children:e.jsxs("div",{children:[e.jsx("p",{style:{color:"white",margin:"0 0 1rem 0"},children:"This is a default drawer that slides in from the right side."}),e.jsx("p",{style:{color:"white",margin:0},children:"You can close it by clicking the X button, pressing Escape, or clicking outside."})]})}},x={render:r=>e.jsx(a,{...r}),args:{side:"left",title:"Left Drawer",children:e.jsxs("div",{children:[e.jsx("p",{style:{color:"white",margin:"0 0 1rem 0"},children:"This drawer slides in from the left side."}),e.jsx("p",{style:{color:"white",margin:0},children:"Perfect for navigation menus or filters."})]})}},f={render:r=>e.jsx(a,{...r}),args:{side:"top",title:"Top Drawer",children:e.jsxs("div",{children:[e.jsx("p",{style:{color:"white",margin:"0 0 1rem 0"},children:"This drawer slides down from the top."}),e.jsx("p",{style:{color:"white",margin:0},children:"Great for notifications or search bars."})]})}},b={render:r=>e.jsx(a,{...r}),args:{side:"bottom",title:"Bottom Drawer",children:e.jsxs("div",{children:[e.jsx("p",{style:{color:"white",margin:"0 0 1rem 0"},children:"This drawer slides up from the bottom."}),e.jsx("p",{style:{color:"white",margin:0},children:"Perfect for mobile-friendly actions or details."})]})}},w={render:()=>{const[r,t]=p.useState(null),n=[{key:"left",label:"Left"},{key:"right",label:"Right"},{key:"top",label:"Top"},{key:"bottom",label:"Bottom"}];return e.jsx("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:n.map(({key:o,label:s})=>e.jsxs("div",{children:[e.jsxs(d,{onClick:()=>t(o),children:[s," Drawer"]}),e.jsx(u,{isOpen:r===o,onClose:()=>t(null),side:o,title:`${s} Drawer`,children:e.jsxs("p",{style:{color:"white",margin:0},children:["This drawer slides in from the ",s.toLowerCase()," side."]})})]},o))})}},v={render:()=>{const[r,t]=p.useState(null),n=[{key:"sm",label:"Small"},{key:"md",label:"Medium"},{key:"lg",label:"Large"},{key:"xl",label:"Extra Large"},{key:"full",label:"Full Screen"}];return e.jsx("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:n.map(({key:o,label:s})=>e.jsxs("div",{children:[e.jsx(d,{variant:"outline",onClick:()=>t(o),children:s}),e.jsx(u,{isOpen:r===o,onClose:()=>t(null),size:o,title:`${s} Drawer`,children:e.jsxs("p",{style:{color:"white",margin:0},children:["This is a ",s.toLowerCase()," sized drawer."]})})]},o))})}},j={render:r=>e.jsx(a,{...r}),args:{children:e.jsxs("div",{children:[e.jsx("h3",{style:{color:"white",margin:"0 0 1rem 0"},children:"Custom Content"}),e.jsx("p",{style:{color:"white",margin:0},children:"This drawer doesn't have a title prop, so only the close button appears in the header."})]})}},k={render:r=>e.jsx(a,{...r}),args:{title:"No Close Button",showCloseButton:!1,children:e.jsxs("div",{children:[e.jsx("p",{style:{color:"white",margin:"0 0 1rem 0"},children:"This drawer has no close button. You can still close it by pressing Escape or clicking outside."}),e.jsx(d,{onClick:()=>{},children:"Custom Action"})]})}},D={render:r=>e.jsx(a,{...r}),args:{title:"Cannot Close Easily",closeOnOverlayClick:!1,closeOnEscape:!1,children:e.jsxs("div",{children:[e.jsx("p",{style:{color:"white",margin:"0 0 1rem 0"},children:"This drawer can only be closed by clicking the X button."}),e.jsx("p",{style:{color:"white",margin:0},children:"Overlay clicks and Escape key are disabled."})]})}},S={render:r=>e.jsx(a,{...r}),args:{title:"Scrollable Content",size:"md",children:e.jsxs("div",{children:[e.jsx("p",{style:{color:"white",margin:"0 0 1rem 0"},children:"This drawer has a lot of content that requires scrolling:"}),Array.from({length:30},(r,t)=>e.jsxs("p",{style:{color:"white",margin:"0 0 1rem 0"},children:["Paragraph ",t+1,": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."]},t)),e.jsx(d,{children:"Action at Bottom"})]})}},C={render:r=>e.jsx(a,{...r}),args:{side:"left",title:"Navigation",size:"md",children:e.jsx("div",{children:e.jsx("nav",{children:e.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:["Dashboard","Projects","Team","Settings","Analytics","Reports","Help"].map(r=>e.jsx("li",{style:{marginBottom:"0.5rem"},children:e.jsx("button",{style:{background:"none",border:"none",color:"white",cursor:"pointer",padding:"0.75rem 1rem",width:"100%",textAlign:"left",borderRadius:"6px",fontSize:"0.875rem",transition:"background-color 0.2s"},onMouseEnter:t=>t.target.style.backgroundColor="#333",onMouseLeave:t=>t.target.style.backgroundColor="transparent",children:r})},r))})})})}},B={render:r=>e.jsx(a,{...r}),args:{title:"Create New Project",size:"lg",children:e.jsx("div",{children:e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",color:"white",marginBottom:"0.5rem",fontWeight:"500"},children:"Project Name"}),e.jsx("input",{type:"text",placeholder:"Enter project name",style:{width:"100%",padding:"0.75rem",borderRadius:"6px",border:"1px solid #333",backgroundColor:"#1a1a1a",color:"white",fontSize:"0.875rem"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",color:"white",marginBottom:"0.5rem",fontWeight:"500"},children:"Description"}),e.jsx("textarea",{rows:4,placeholder:"Describe your project",style:{width:"100%",padding:"0.75rem",borderRadius:"6px",border:"1px solid #333",backgroundColor:"#1a1a1a",color:"white",fontSize:"0.875rem",resize:"vertical"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",color:"white",marginBottom:"0.5rem",fontWeight:"500"},children:"Category"}),e.jsxs("select",{style:{width:"100%",padding:"0.75rem",borderRadius:"6px",border:"1px solid #333",backgroundColor:"#1a1a1a",color:"white",fontSize:"0.875rem"},children:[e.jsx("option",{children:"Web Development"}),e.jsx("option",{children:"Mobile App"}),e.jsx("option",{children:"Design"}),e.jsx("option",{children:"Marketing"})]})]}),e.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"1rem"},children:[e.jsx(d,{variant:"outline",style:{flex:1},children:"Cancel"}),e.jsx(d,{style:{flex:1},children:"Create Project"})]})]})})}},z={render:r=>e.jsx(a,{...r}),args:{side:"left",title:"Filters",size:"sm",children:e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"1.5rem"},children:[e.jsx("h4",{style:{color:"white",margin:"0 0 1rem 0",fontSize:"0.875rem"},children:"Status"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:["Active","Inactive","Pending","Archived"].map(r=>e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"white"},children:[e.jsx("input",{type:"checkbox"}),e.jsx("span",{style:{fontSize:"0.875rem"},children:r})]},r))})]}),e.jsxs("div",{style:{marginBottom:"1.5rem"},children:[e.jsx("h4",{style:{color:"white",margin:"0 0 1rem 0",fontSize:"0.875rem"},children:"Date Range"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("input",{type:"date",style:{padding:"0.5rem",borderRadius:"4px",border:"1px solid #333",backgroundColor:"#1a1a1a",color:"white",fontSize:"0.75rem"}}),e.jsx("input",{type:"date",style:{padding:"0.5rem",borderRadius:"4px",border:"1px solid #333",backgroundColor:"#1a1a1a",color:"white",fontSize:"0.75rem"}})]})]}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(d,{size:"sm",variant:"outline",style:{flex:1},children:"Clear"}),e.jsx(d,{size:"sm",style:{flex:1},children:"Apply"})]})]})}},T={render:r=>e.jsx(a,{...r}),args:{title:"Item Details",size:"lg",children:e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"2rem"},children:[e.jsx("h3",{style:{color:"white",margin:"0 0 0.5rem 0"},children:"Product Overview"}),e.jsx("p",{style:{color:"#ccc",margin:0,fontSize:"0.875rem"},children:"Last updated: March 15, 2024"})]}),e.jsxs("div",{style:{display:"grid",gap:"1.5rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{color:"white",margin:"0 0 0.5rem 0",fontSize:"0.875rem"},children:"Description"}),e.jsx("p",{style:{color:"#ccc",margin:0,fontSize:"0.875rem",lineHeight:1.6},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{color:"white",margin:"0 0 0.5rem 0",fontSize:"0.875rem"},children:"Specifications"}),e.jsxs("dl",{style:{margin:0,fontSize:"0.875rem"},children:[e.jsx("dt",{style:{color:"#ccc",marginBottom:"0.25rem"},children:"Dimensions:"}),e.jsx("dd",{style:{color:"white",margin:"0 0 0.75rem 0"},children:"1920 × 1080 pixels"}),e.jsx("dt",{style:{color:"#ccc",marginBottom:"0.25rem"},children:"File Size:"}),e.jsx("dd",{style:{color:"white",margin:"0 0 0.75rem 0"},children:"2.4 MB"}),e.jsx("dt",{style:{color:"#ccc",marginBottom:"0.25rem"},children:"Format:"}),e.jsx("dd",{style:{color:"white",margin:"0 0 0.75rem 0"},children:"PNG"})]})]}),e.jsxs("div",{style:{display:"flex",gap:"1rem",paddingTop:"1rem",borderTop:"1px solid #333"},children:[e.jsx(d,{variant:"outline",children:"Download"}),e.jsx(d,{variant:"destructive",children:"Delete"})]})]})]})}},$={render:r=>e.jsx(a,{...r}),args:{side:"bottom",title:"Quick Actions",size:"sm",children:e.jsx("div",{children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem",marginBottom:"1rem"},children:["Share","Edit","Delete","Copy","Move","Archive"].map(r=>e.jsxs("button",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"1rem 0.5rem",background:"none",border:"1px solid #333",borderRadius:"8px",color:"white",cursor:"pointer",fontSize:"0.75rem",transition:"background-color 0.2s"},onMouseEnter:t=>t.target.style.backgroundColor="#333",onMouseLeave:t=>t.target.style.backgroundColor="transparent",children:[e.jsx("div",{style:{width:"24px",height:"24px",backgroundColor:"#4A9EFF",borderRadius:"50%",marginBottom:"0.5rem"}}),r]},r))})})}};var R,q,M;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <DrawerWrapper {...args} />,
  args: {
    title: 'Default Drawer',
    children: <div>\r
        <p style={{
        color: 'white',
        margin: '0 0 1rem 0'
      }}>\r
          This is a default drawer that slides in from the right side.\r
        </p>\r
        <p style={{
        color: 'white',
        margin: 0
      }}>\r
          You can close it by clicking the X button, pressing Escape, or clicking outside.\r
        </p>\r
      </div>
  }
}`,...(M=(q=y.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var P,N,I;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <DrawerWrapper {...args} />,
  args: {
    side: 'left',
    title: 'Left Drawer',
    children: <div>\r
        <p style={{
        color: 'white',
        margin: '0 0 1rem 0'
      }}>\r
          This drawer slides in from the left side.\r
        </p>\r
        <p style={{
        color: 'white',
        margin: 0
      }}>\r
          Perfect for navigation menus or filters.\r
        </p>\r
      </div>
  }
}`,...(I=(N=x.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var F,X,Y;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <DrawerWrapper {...args} />,
  args: {
    side: 'top',
    title: 'Top Drawer',
    children: <div>\r
        <p style={{
        color: 'white',
        margin: '0 0 1rem 0'
      }}>\r
          This drawer slides down from the top.\r
        </p>\r
        <p style={{
        color: 'white',
        margin: 0
      }}>\r
          Great for notifications or search bars.\r
        </p>\r
      </div>
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var _,V,H;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <DrawerWrapper {...args} />,
  args: {
    side: 'bottom',
    title: 'Bottom Drawer',
    children: <div>\r
        <p style={{
        color: 'white',
        margin: '0 0 1rem 0'
      }}>\r
          This drawer slides up from the bottom.\r
        </p>\r
        <p style={{
        color: 'white',
        margin: 0
      }}>\r
          Perfect for mobile-friendly actions or details.\r
        </p>\r
      </div>
  }
}`,...(H=(V=b.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var U,G,Q;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [activeDrawer, setActiveDrawer] = useState<string | null>(null);
    const sides = [{
      key: 'left',
      label: 'Left'
    }, {
      key: 'right',
      label: 'Right'
    }, {
      key: 'top',
      label: 'Top'
    }, {
      key: 'bottom',
      label: 'Bottom'
    }];
    return <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    }}>\r
        {sides.map(({
        key,
        label
      }) => <div key={key}>\r
            <Button onClick={() => setActiveDrawer(key)}>{label} Drawer</Button>\r
            <Drawer isOpen={activeDrawer === key} onClose={() => setActiveDrawer(null)} side={key as any} title={\`\${label} Drawer\`}>\r
              <p style={{
            color: 'white',
            margin: 0
          }}>\r
                This drawer slides in from the {label.toLowerCase()} side.\r
              </p>\r
            </Drawer>\r
          </div>)}\r
      </div>;
  }
}`,...(Q=(G=w.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var J,K,Z;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [activeDrawer, setActiveDrawer] = useState<string | null>(null);
    const sizes = [{
      key: 'sm',
      label: 'Small'
    }, {
      key: 'md',
      label: 'Medium'
    }, {
      key: 'lg',
      label: 'Large'
    }, {
      key: 'xl',
      label: 'Extra Large'
    }, {
      key: 'full',
      label: 'Full Screen'
    }];
    return <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    }}>\r
        {sizes.map(({
        key,
        label
      }) => <div key={key}>\r
            <Button variant="outline" onClick={() => setActiveDrawer(key)}>{label}</Button>\r
            <Drawer isOpen={activeDrawer === key} onClose={() => setActiveDrawer(null)} size={key as any} title={\`\${label} Drawer\`}>\r
              <p style={{
            color: 'white',
            margin: 0
          }}>\r
                This is a {label.toLowerCase()} sized drawer.\r
              </p>\r
            </Drawer>\r
          </div>)}\r
      </div>;
  }
}`,...(Z=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var ee,re,te;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => <DrawerWrapper {...args} />,
  args: {
    children: <div>\r
        <h3 style={{
        color: 'white',
        margin: '0 0 1rem 0'
      }}>Custom Content</h3>\r
        <p style={{
        color: 'white',
        margin: 0
      }}>\r
          This drawer doesn't have a title prop, so only the close button appears in the header.\r
        </p>\r
      </div>
  }
}`,...(te=(re=j.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ne,oe,ie;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => <DrawerWrapper {...args} />,
  args: {
    title: 'No Close Button',
    showCloseButton: false,
    children: <div>\r
        <p style={{
        color: 'white',
        margin: '0 0 1rem 0'
      }}>\r
          This drawer has no close button. You can still close it by pressing Escape or clicking outside.\r
        </p>\r
        <Button onClick={() => {}}>Custom Action</Button>\r
      </div>
  }
}`,...(ie=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var se,ae,le;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => <DrawerWrapper {...args} />,
  args: {
    title: 'Cannot Close Easily',
    closeOnOverlayClick: false,
    closeOnEscape: false,
    children: <div>\r
        <p style={{
        color: 'white',
        margin: '0 0 1rem 0'
      }}>\r
          This drawer can only be closed by clicking the X button.\r
        </p>\r
        <p style={{
        color: 'white',
        margin: 0
      }}>\r
          Overlay clicks and Escape key are disabled.\r
        </p>\r
      </div>
  }
}`,...(le=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var de,ce,me;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: args => <DrawerWrapper {...args} />,
  args: {
    title: 'Scrollable Content',
    size: 'md',
    children: <div>\r
        <p style={{
        color: 'white',
        margin: '0 0 1rem 0'
      }}>\r
          This drawer has a lot of content that requires scrolling:\r
        </p>\r
        {Array.from({
        length: 30
      }, (_, i) => <p key={i} style={{
        color: 'white',
        margin: '0 0 1rem 0'
      }}>\r
            Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. \r
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \r
            minim veniam, quis nostrud exercitation ullamco laboris.\r
          </p>)}\r
        <Button>Action at Bottom</Button>\r
      </div>
  }
}`,...(me=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var pe,ue,ge;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: args => <DrawerWrapper {...args} />,
  args: {
    side: 'left',
    title: 'Navigation',
    size: 'md',
    children: <div>\r
        <nav>\r
          <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>\r
            {['Dashboard', 'Projects', 'Team', 'Settings', 'Analytics', 'Reports', 'Help'].map(item => <li key={item} style={{
            marginBottom: '0.5rem'
          }}>\r
                <button style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '0.75rem 1rem',
              width: '100%',
              textAlign: 'left',
              borderRadius: '6px',
              fontSize: '0.875rem',
              transition: 'background-color 0.2s'
            }} onMouseEnter={e => e.target.style.backgroundColor = '#333'} onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}>\r
                  {item}\r
                </button>\r
              </li>)}\r
          </ul>\r
        </nav>\r
      </div>
  }
}`,...(ge=(ue=C.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var he,ye,xe;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: args => <DrawerWrapper {...args} />,
  args: {
    title: 'Create New Project',
    size: 'lg',
    children: <div>\r
        <form style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>\r
          <div>\r
            <label style={{
            display: 'block',
            color: 'white',
            marginBottom: '0.5rem',
            fontWeight: '500'
          }}>\r
              Project Name\r
            </label>\r
            <input type="text" placeholder="Enter project name" style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '6px',
            border: '1px solid #333',
            backgroundColor: '#1a1a1a',
            color: 'white',
            fontSize: '0.875rem'
          }} />\r
          </div>\r
          \r
          <div>\r
            <label style={{
            display: 'block',
            color: 'white',
            marginBottom: '0.5rem',
            fontWeight: '500'
          }}>\r
              Description\r
            </label>\r
            <textarea rows={4} placeholder="Describe your project" style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '6px',
            border: '1px solid #333',
            backgroundColor: '#1a1a1a',
            color: 'white',
            fontSize: '0.875rem',
            resize: 'vertical'
          }} />\r
          </div>\r
          \r
          <div>\r
            <label style={{
            display: 'block',
            color: 'white',
            marginBottom: '0.5rem',
            fontWeight: '500'
          }}>\r
              Category\r
            </label>\r
            <select style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '6px',
            border: '1px solid #333',
            backgroundColor: '#1a1a1a',
            color: 'white',
            fontSize: '0.875rem'
          }}>\r
              <option>Web Development</option>\r
              <option>Mobile App</option>\r
              <option>Design</option>\r
              <option>Marketing</option>\r
            </select>\r
          </div>\r
          \r
          <div style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '1rem'
        }}>\r
            <Button variant="outline" style={{
            flex: 1
          }}>Cancel</Button>\r
            <Button style={{
            flex: 1
          }}>Create Project</Button>\r
          </div>\r
        </form>\r
      </div>
  }
}`,...(xe=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var fe,be,we;z.parameters={...z.parameters,docs:{...(fe=z.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: args => <DrawerWrapper {...args} />,
  args: {
    side: 'left',
    title: 'Filters',
    size: 'sm',
    children: <div>\r
        <div style={{
        marginBottom: '1.5rem'
      }}>\r
          <h4 style={{
          color: 'white',
          margin: '0 0 1rem 0',
          fontSize: '0.875rem'
        }}>Status</h4>\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>\r
            {['Active', 'Inactive', 'Pending', 'Archived'].map(status => <label key={status} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'white'
          }}>\r
                <input type="checkbox" />\r
                <span style={{
              fontSize: '0.875rem'
            }}>{status}</span>\r
              </label>)}\r
          </div>\r
        </div>\r
        \r
        <div style={{
        marginBottom: '1.5rem'
      }}>\r
          <h4 style={{
          color: 'white',
          margin: '0 0 1rem 0',
          fontSize: '0.875rem'
        }}>Date Range</h4>\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>\r
            <input type="date" style={{
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #333',
            backgroundColor: '#1a1a1a',
            color: 'white',
            fontSize: '0.75rem'
          }} />\r
            <input type="date" style={{
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #333',
            backgroundColor: '#1a1a1a',
            color: 'white',
            fontSize: '0.75rem'
          }} />\r
          </div>\r
        </div>\r
        \r
        <div style={{
        display: 'flex',
        gap: '0.5rem'
      }}>\r
          <Button size="sm" variant="outline" style={{
          flex: 1
        }}>Clear</Button>\r
          <Button size="sm" style={{
          flex: 1
        }}>Apply</Button>\r
        </div>\r
      </div>
  }
}`,...(we=(be=z.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};var ve,je,ke;T.parameters={...T.parameters,docs:{...(ve=T.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: args => <DrawerWrapper {...args} />,
  args: {
    title: 'Item Details',
    size: 'lg',
    children: <div>\r
        <div style={{
        marginBottom: '2rem'
      }}>\r
          <h3 style={{
          color: 'white',
          margin: '0 0 0.5rem 0'
        }}>Product Overview</h3>\r
          <p style={{
          color: '#ccc',
          margin: 0,
          fontSize: '0.875rem'
        }}>\r
            Last updated: March 15, 2024\r
          </p>\r
        </div>\r
        \r
        <div style={{
        display: 'grid',
        gap: '1.5rem'
      }}>\r
          <div>\r
            <h4 style={{
            color: 'white',
            margin: '0 0 0.5rem 0',
            fontSize: '0.875rem'
          }}>Description</h4>\r
            <p style={{
            color: '#ccc',
            margin: 0,
            fontSize: '0.875rem',
            lineHeight: 1.6
          }}>\r
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor \r
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \r
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r
            </p>\r
          </div>\r
          \r
          <div>\r
            <h4 style={{
            color: 'white',
            margin: '0 0 0.5rem 0',
            fontSize: '0.875rem'
          }}>Specifications</h4>\r
            <dl style={{
            margin: 0,
            fontSize: '0.875rem'
          }}>\r
              <dt style={{
              color: '#ccc',
              marginBottom: '0.25rem'
            }}>Dimensions:</dt>\r
              <dd style={{
              color: 'white',
              margin: '0 0 0.75rem 0'
            }}>1920 × 1080 pixels</dd>\r
              \r
              <dt style={{
              color: '#ccc',
              marginBottom: '0.25rem'
            }}>File Size:</dt>\r
              <dd style={{
              color: 'white',
              margin: '0 0 0.75rem 0'
            }}>2.4 MB</dd>\r
              \r
              <dt style={{
              color: '#ccc',
              marginBottom: '0.25rem'
            }}>Format:</dt>\r
              <dd style={{
              color: 'white',
              margin: '0 0 0.75rem 0'
            }}>PNG</dd>\r
            </dl>\r
          </div>\r
          \r
          <div style={{
          display: 'flex',
          gap: '1rem',
          paddingTop: '1rem',
          borderTop: '1px solid #333'
        }}>\r
            <Button variant="outline">Download</Button>\r
            <Button variant="destructive">Delete</Button>\r
          </div>\r
        </div>\r
      </div>
  }
}`,...(ke=(je=T.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};var De,Se,Ce;$.parameters={...$.parameters,docs:{...(De=$.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: args => <DrawerWrapper {...args} />,
  args: {
    side: 'bottom',
    title: 'Quick Actions',
    size: 'sm',
    children: <div>\r
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        marginBottom: '1rem'
      }}>\r
          {['Share', 'Edit', 'Delete', 'Copy', 'Move', 'Archive'].map(action => <button key={action} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1rem 0.5rem',
          background: 'none',
          border: '1px solid #333',
          borderRadius: '8px',
          color: 'white',
          cursor: 'pointer',
          fontSize: '0.75rem',
          transition: 'background-color 0.2s'
        }} onMouseEnter={e => e.target.style.backgroundColor = '#333'} onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}>\r
              <div style={{
            width: '24px',
            height: '24px',
            backgroundColor: '#4A9EFF',
            borderRadius: '50%',
            marginBottom: '0.5rem'
          }} />\r
              {action}\r
            </button>)}\r
        </div>\r
      </div>
  }
}`,...(Ce=(Se=$.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};const or=["Default","LeftSide","TopSide","BottomSide","AllSides","Sizes","WithoutTitle","NoCloseButton","DisabledClosing","ScrollableContent","NavigationDrawer","FormDrawer","FilterDrawer","DetailsDrawer","MobileBottomDrawer"];export{w as AllSides,b as BottomSide,y as Default,T as DetailsDrawer,D as DisabledClosing,z as FilterDrawer,B as FormDrawer,x as LeftSide,$ as MobileBottomDrawer,C as NavigationDrawer,k as NoCloseButton,S as ScrollableContent,v as Sizes,f as TopSide,j as WithoutTitle,or as __namedExportsOrder,nr as default};
