import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as ge}from"./index-GiUgBvb1.js";import{l as n,d as l}from"./styled-components.browser.esm-Byilhkxn.js";import{B as t}from"./Box-C_K3nAud.js";import{T as i}from"./Typography-CzMVeEUw.js";import"./propFilters-BGSNtaQt.js";const fe=a=>{switch(a){case"xs":return n`
        width: 24px;
        height: 24px;
        font-size: ${({theme:s})=>s.typography.fontSizes.xs};
      `;case"sm":return n`
        width: 32px;
        height: 32px;
        font-size: ${({theme:s})=>s.typography.fontSizes.sm};
      `;case"lg":return n`
        width: 56px;
        height: 56px;
        font-size: ${({theme:s})=>s.typography.fontSizes.lg};
      `;case"xl":return n`
        width: 72px;
        height: 72px;
        font-size: ${({theme:s})=>s.typography.fontSizes.xl};
      `;case"2xl":return n`
        width: 96px;
        height: 96px;
        font-size: ${({theme:s})=>s.typography.fontSizes["2xl"]};
      `;default:return n`
        width: 40px;
        height: 40px;
        font-size: ${({theme:s})=>s.typography.fontSizes.base};
      `}},ue=a=>{switch(a){case"online":return"#22c55e";case"away":return"#f59e0b";case"busy":return"#ef4444";case"offline":default:return"#6b7280"}},he=a=>a.split(" ").map(s=>s.charAt(0)).slice(0,2).join("").toUpperCase(),ye=l.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:a})=>a.colors.gray.dark};
  color: ${({theme:a})=>a.colors.foundation.white};
  font-family: ${({theme:a})=>a.typography.fonts.body};
  font-weight: ${({theme:a})=>a.typography.fontWeights.medium};
  user-select: none;
  flex-shrink: 0;
  overflow: hidden;
  
  ${({size:a})=>fe(a)}
  
  ${({variant:a="circular"})=>a==="circular"?n`border-radius: ${({theme:s})=>s.radius.full};`:n`border-radius: ${({theme:s})=>s.radius.sm};`}
  
  ${({onClick:a})=>a&&n`
      cursor: pointer;
      transition: opacity ${({theme:s})=>s.durations.fast} ${({theme:s})=>s.easings.easeInOut};
      
      &:hover {
        opacity: 0.8;
      }
    `}
`,ve=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,be=l.div`
  position: absolute;
  border: 2px solid ${({theme:a})=>a.colors.foundation.black};
  border-radius: ${({theme:a})=>a.radius.full};
  background-color: ${({status:a})=>ue(a)};
  
  ${({size:a})=>{switch(a){case"xs":case"sm":return n`
          width: 8px;
          height: 8px;
          bottom: 0;
          right: 0;
        `;case"lg":case"xl":case"2xl":return n`
          width: 16px;
          height: 16px;
          bottom: 2px;
          right: 2px;
        `;default:return n`
          width: 12px;
          height: 12px;
          bottom: 0;
          right: 0;
        `}}}
`,je=l.div`
  ${({size:a})=>{const s=a==="xs"||a==="sm"?"16px":a==="lg"||a==="xl"||a==="2xl"?"24px":"20px";return n`
      width: ${s};
      height: ${s};
    `}}
  border: 2px solid ${({theme:a})=>a.colors.gray.light};
  border-top: 2px solid ${({theme:a})=>a.colors.innovation.primaryBlue};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,B=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:a})=>a.colors.gray.light};
`,r=({src:a,alt:s,name:v,icon:w,size:b="md",variant:te="circular",status:z,showStatus:ie=!1,loading:ne=!1,onError:j,className:le,onClick:oe,...ce})=>{const[pe,me]=ge.useState(!1),de=()=>{me(!0),j==null||j()},xe=()=>ne?e.jsx(je,{size:b}):a&&!pe?e.jsx(ve,{src:a,alt:s||v||"Avatar",onError:de}):v?he(v):w?e.jsx(B,{children:w}):e.jsx(B,{children:e.jsx("svg",{width:"60%",height:"60%",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"})})});return e.jsxs(ye,{className:le,size:b,variant:te,onClick:oe,...ce,children:[xe(),ie&&z&&e.jsx(be,{status:z,size:b})]})};try{r.displayName="Avatar",r.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'}]}},variant:{defaultValue:{value:"circular"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circular"'},{value:'"square"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"online"'},{value:'"offline"'},{value:'"away"'},{value:'"busy"'}]}},showStatus:{defaultValue:{value:"false"},description:"",name:"showStatus",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const Ae={title:"UI/Avatar",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl"]},variant:{control:{type:"select"},options:["circular","square"]},status:{control:{type:"select"},options:["online","offline","away","busy"]}}},o={args:{name:"John Doe",size:"md",variant:"circular"}},c={args:{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:"Profile picture",name:"John Doe",size:"md"}},p={render:()=>e.jsxs(t,{display:"flex",gap:"md",alignItems:"center",flexWrap:"wrap",children:[e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[e.jsx(r,{name:"XS",size:"xs"}),e.jsx(i,{variant:"small",color:"gray",children:"XS (24px)"})]}),e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[e.jsx(r,{name:"SM",size:"sm"}),e.jsx(i,{variant:"small",color:"gray",children:"SM (32px)"})]}),e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[e.jsx(r,{name:"MD",size:"md"}),e.jsx(i,{variant:"small",color:"gray",children:"MD (40px)"})]}),e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[e.jsx(r,{name:"LG",size:"lg"}),e.jsx(i,{variant:"small",color:"gray",children:"LG (56px)"})]}),e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[e.jsx(r,{name:"XL",size:"xl"}),e.jsx(i,{variant:"small",color:"gray",children:"XL (72px)"})]}),e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[e.jsx(r,{name:"2XL",size:"2xl"}),e.jsx(i,{variant:"small",color:"gray",children:"2XL (96px)"})]})]})},m={render:()=>e.jsxs(t,{display:"flex",gap:"md",alignItems:"center",children:[e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[e.jsx(r,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",name:"John Doe",size:"lg",variant:"circular"}),e.jsx(i,{variant:"small",color:"gray",children:"Circular"})]}),e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[e.jsx(r,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",name:"John Doe",size:"lg",variant:"square"}),e.jsx(i,{variant:"small",color:"gray",children:"Square"})]})]})},d={render:()=>e.jsxs(t,{display:"flex",gap:"md",alignItems:"center",flexWrap:"wrap",children:[e.jsx(r,{name:"John Doe",size:"lg"}),e.jsx(r,{name:"Jane Smith",size:"lg"}),e.jsx(r,{name:"Alex Johnson",size:"lg"}),e.jsx(r,{name:"M",size:"lg"}),e.jsx(r,{name:"Sarah O'Connor",size:"lg"})]})},x={render:()=>e.jsxs(t,{display:"flex",gap:"md",alignItems:"center",flexWrap:"wrap",children:[e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[e.jsx(r,{name:"Online",size:"lg",showStatus:!0,status:"online"}),e.jsx(i,{variant:"small",color:"gray",children:"Online"})]}),e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[e.jsx(r,{name:"Away",size:"lg",showStatus:!0,status:"away"}),e.jsx(i,{variant:"small",color:"gray",children:"Away"})]}),e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[e.jsx(r,{name:"Busy",size:"lg",showStatus:!0,status:"busy"}),e.jsx(i,{variant:"small",color:"gray",children:"Busy"})]}),e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[e.jsx(r,{name:"Offline",size:"lg",showStatus:!0,status:"offline"}),e.jsx(i,{variant:"small",color:"gray",children:"Offline"})]})]})},g={render:()=>e.jsxs(t,{display:"flex",gap:"md",alignItems:"center",flexWrap:"wrap",children:[e.jsx(r,{icon:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"})}),size:"lg"}),e.jsx(r,{icon:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})}),size:"lg"})]})},f={render:()=>e.jsxs(t,{display:"flex",gap:"md",alignItems:"center",flexWrap:"wrap",children:[e.jsx(r,{loading:!0,size:"sm"}),e.jsx(r,{loading:!0,size:"md"}),e.jsx(r,{loading:!0,size:"lg"}),e.jsx(r,{loading:!0,size:"xl"})]})},u={render:()=>e.jsxs(t,{display:"flex",gap:"md",alignItems:"center",flexWrap:"wrap",children:[e.jsx(r,{src:"https://invalid-image-url.jpg",name:"John Doe",size:"lg",onError:()=>console.log("Image failed to load")}),e.jsx(r,{src:"https://another-invalid-url.jpg",size:"lg"})]})},h={render:()=>e.jsxs(t,{display:"flex",gap:"md",alignItems:"center",flexWrap:"wrap",children:[e.jsx(r,{name:"Clickable 1",size:"lg",onClick:()=>alert("Avatar 1 clicked!")}),e.jsx(r,{src:"https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",name:"Clickable 2",size:"lg",showStatus:!0,status:"online",onClick:()=>alert("Avatar 2 clicked!")})]})},y={render:()=>e.jsxs(t,{display:"flex",flexDirection:"column",gap:"lg",children:[e.jsxs("div",{children:[e.jsx(i,{variant:"body",mb:"md",children:"Team Members"}),e.jsxs(t,{display:"flex",gap:"sm",alignItems:"center",children:[e.jsx(r,{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",name:"John Doe",showStatus:!0,status:"online"}),e.jsx(r,{src:"https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",name:"Jane Smith",showStatus:!0,status:"away"}),e.jsx(r,{name:"Alex Johnson",showStatus:!0,status:"busy"}),e.jsx(r,{name:"Sarah Wilson",showStatus:!0,status:"offline"})]})]}),e.jsxs("div",{children:[e.jsx(i,{variant:"body",mb:"md",children:"Overlapping Group"}),e.jsxs(t,{display:"flex",alignItems:"center",style:{marginLeft:"0"},children:[[{name:"Member 1",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{name:"Member 2",src:"https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{name:"Member 3"},{name:"Member 4"}].map((a,s)=>e.jsx(r,{src:a.src,name:a.name,size:"md",style:{marginLeft:s>0?"-8px":"0",zIndex:10-s,border:"2px solid #000"}},s)),e.jsx(t,{ml:"sm",display:"flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px",borderRadius:"full",bg:"dark",style:{marginLeft:"-8px",border:"2px solid #000",fontSize:"12px",color:"#FFFFFF"},children:"+5"})]})]})]})};var S,I,D;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    size: 'md',
    variant: 'circular'
  }
}`,...(D=(I=o.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var A,M,W;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    alt: 'Profile picture',
    name: 'John Doe',
    size: 'md'
  }
}`,...(W=(M=c.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var J,q,T;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="md" alignItems="center" flexWrap="wrap">\r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Avatar name="XS" size="xs" />\r
        <Typography variant="small" color="gray">XS (24px)</Typography>\r
      </Box>\r
      \r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Avatar name="SM" size="sm" />\r
        <Typography variant="small" color="gray">SM (32px)</Typography>\r
      </Box>\r
      \r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Avatar name="MD" size="md" />\r
        <Typography variant="small" color="gray">MD (40px)</Typography>\r
      </Box>\r
      \r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Avatar name="LG" size="lg" />\r
        <Typography variant="small" color="gray">LG (56px)</Typography>\r
      </Box>\r
      \r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Avatar name="XL" size="xl" />\r
        <Typography variant="small" color="gray">XL (72px)</Typography>\r
      </Box>\r
      \r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Avatar name="2XL" size="2xl" />\r
        <Typography variant="small" color="gray">2XL (96px)</Typography>\r
      </Box>\r
    </Box>
}`,...(T=(q=p.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var C,O,k;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="md" alignItems="center">\r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" name="John Doe" size="lg" variant="circular" />\r
        <Typography variant="small" color="gray">Circular</Typography>\r
      </Box>\r
      \r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" name="John Doe" size="lg" variant="square" />\r
        <Typography variant="small" color="gray">Square</Typography>\r
      </Box>\r
    </Box>
}`,...(k=(O=m.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var $,E,L;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="md" alignItems="center" flexWrap="wrap">\r
      <Avatar name="John Doe" size="lg" />\r
      <Avatar name="Jane Smith" size="lg" />\r
      <Avatar name="Alex Johnson" size="lg" />\r
      <Avatar name="M" size="lg" />\r
      <Avatar name="Sarah O'Connor" size="lg" />\r
    </Box>
}`,...(L=(E=d.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var H,V,Q;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="md" alignItems="center" flexWrap="wrap">\r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Avatar name="Online" size="lg" showStatus status="online" />\r
        <Typography variant="small" color="gray">Online</Typography>\r
      </Box>\r
      \r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Avatar name="Away" size="lg" showStatus status="away" />\r
        <Typography variant="small" color="gray">Away</Typography>\r
      </Box>\r
      \r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Avatar name="Busy" size="lg" showStatus status="busy" />\r
        <Typography variant="small" color="gray">Busy</Typography>\r
      </Box>\r
      \r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Avatar name="Offline" size="lg" showStatus status="offline" />\r
        <Typography variant="small" color="gray">Offline</Typography>\r
      </Box>\r
    </Box>
}`,...(Q=(V=x.parameters)==null?void 0:V.docs)==null?void 0:Q.source}}};var F,X,_;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="md" alignItems="center" flexWrap="wrap">\r
      <Avatar icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">\r
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />\r
          </svg>} size="lg" />\r
      \r
      <Avatar icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">\r
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />\r
          </svg>} size="lg" />\r
    </Box>
}`,...(_=(X=g.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};var G,N,R;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="md" alignItems="center" flexWrap="wrap">\r
      <Avatar loading size="sm" />\r
      <Avatar loading size="md" />\r
      <Avatar loading size="lg" />\r
      <Avatar loading size="xl" />\r
    </Box>
}`,...(R=(N=f.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var P,U,K;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="md" alignItems="center" flexWrap="wrap">\r
      <Avatar src="https://invalid-image-url.jpg" name="John Doe" size="lg" onError={() => console.log('Image failed to load')} />\r
      <Avatar src="https://another-invalid-url.jpg" size="lg" />\r
    </Box>
}`,...(K=(U=u.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="md" alignItems="center" flexWrap="wrap">\r
      <Avatar name="Clickable 1" size="lg" onClick={() => alert('Avatar 1 clicked!')} />\r
      <Avatar src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" name="Clickable 2" size="lg" showStatus status="online" onClick={() => alert('Avatar 2 clicked!')} />\r
    </Box>
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,se;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg">\r
      <div>\r
        <Typography variant="body" mb="md">Team Members</Typography>\r
        <Box display="flex" gap="sm" alignItems="center">\r
          <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" name="John Doe" showStatus status="online" />\r
          <Avatar src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" name="Jane Smith" showStatus status="away" />\r
          <Avatar name="Alex Johnson" showStatus status="busy" />\r
          <Avatar name="Sarah Wilson" showStatus status="offline" />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="md">Overlapping Group</Typography>\r
        <Box display="flex" alignItems="center" style={{
        marginLeft: '0'
      }}>\r
          {[{
          name: 'Member 1',
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        }, {
          name: 'Member 2',
          src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        }, {
          name: 'Member 3'
        }, {
          name: 'Member 4'
        }].map((member, index) => <Avatar key={index} src={member.src} name={member.name} size="md" style={{
          marginLeft: index > 0 ? '-8px' : '0',
          zIndex: 10 - index,
          border: '2px solid #000'
        }} />)}\r
          <Box ml="sm" display="flex" alignItems="center" justifyContent="center" width="40px" height="40px" borderRadius="full" bg="dark" style={{
          marginLeft: '-8px',
          border: '2px solid #000',
          fontSize: '12px',
          color: '#FFFFFF'
        }}>\r
            +5\r
          </Box>\r
        </Box>\r
      </div>\r
    </Box>
}`,...(se=(re=y.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const Me=["Default","WithImage","Sizes","Variants","WithInitials","WithStatus","WithCustomIcon","Loading","ErrorFallback","ClickableAvatars","Group"];export{h as ClickableAvatars,o as Default,u as ErrorFallback,y as Group,f as Loading,p as Sizes,m as Variants,g as WithCustomIcon,c as WithImage,d as WithInitials,x as WithStatus,Me as __namedExportsOrder,Ae as default};
