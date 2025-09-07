import{j as r}from"./jsx-runtime-CDt2p4po.js";import{S as t}from"./Stack-DrhX4xxp.js";import{B as e}from"./Box-COihqxSe.js";import{T as a}from"./Typography-u4LxpgYF.js";import{D as b}from"./Divider-CjVmphoG.js";import"./index-GiUgBvb1.js";import"./styled-components.browser.esm-Byilhkxn.js";import"./Flex-DuvPXp7m.js";import"./propFilters-BGSNtaQt.js";const ar={title:"Foundation/Stack",component:t,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{direction:{control:{type:"select"},options:["vertical","horizontal"]},spacing:{control:{type:"select"},options:["0","1","2","3","4","5","6","8","10","12"]},align:{control:{type:"select"},options:["start","center","end","stretch"]},divider:{control:{type:"boolean"}}}},i=({children:o,bg:x="blue",...X})=>r.jsx(e,{bg:x,p:"4",borderRadius:"base",display:"flex",alignItems:"center",justifyContent:"center",minWidth:"120px",...X,children:r.jsx(a,{color:"white",variant:"body1",align:"center",children:o})}),c=({children:o,...x})=>r.jsx(e,{bg:"dark",p:"4",borderRadius:"md",...x,children:r.jsx(a,{color:"white",children:o})}),n={args:{spacing:"4"},render:o=>r.jsxs(t,{...o,children:[r.jsx(i,{children:"Item 1"}),r.jsx(i,{bg:"purple",children:"Item 2"}),r.jsx(i,{bg:"gray",children:"Item 3"})]})},d={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"3rem"},children:[r.jsxs("div",{children:[r.jsx(a,{variant:"h3",mb:"4",children:"Vertical Stack (Default)"}),r.jsxs(t,{spacing:"4",children:[r.jsx(i,{children:"Item 1"}),r.jsx(i,{bg:"purple",children:"Item 2"}),r.jsx(i,{bg:"gray",children:"Item 3"})]})]}),r.jsxs("div",{children:[r.jsx(a,{variant:"h3",mb:"4",children:"Horizontal Stack"}),r.jsxs(t,{direction:"horizontal",spacing:"4",children:[r.jsx(i,{children:"Item 1"}),r.jsx(i,{bg:"purple",children:"Item 2"}),r.jsx(i,{bg:"gray",children:"Item 3"})]})]})]})},s={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"3rem"},children:[r.jsxs("div",{children:[r.jsx(a,{variant:"h3",mb:"4",children:"Small Spacing (2)"}),r.jsxs(t,{spacing:"2",children:[r.jsx(i,{minWidth:"auto",p:"3",children:"Tight"}),r.jsx(i,{bg:"purple",minWidth:"auto",p:"3",children:"Spacing"}),r.jsx(i,{bg:"gray",minWidth:"auto",p:"3",children:"Stack"})]})]}),r.jsxs("div",{children:[r.jsx(a,{variant:"h3",mb:"4",children:"Medium Spacing (4)"}),r.jsxs(t,{spacing:"4",children:[r.jsx(i,{minWidth:"auto",p:"3",children:"Normal"}),r.jsx(i,{bg:"purple",minWidth:"auto",p:"3",children:"Spacing"}),r.jsx(i,{bg:"gray",minWidth:"auto",p:"3",children:"Stack"})]})]}),r.jsxs("div",{children:[r.jsx(a,{variant:"h3",mb:"4",children:"Large Spacing (8)"}),r.jsxs(t,{spacing:"8",children:[r.jsx(i,{minWidth:"auto",p:"3",children:"Wide"}),r.jsx(i,{bg:"purple",minWidth:"auto",p:"3",children:"Spacing"}),r.jsx(i,{bg:"gray",minWidth:"auto",p:"3",children:"Stack"})]})]})]})},p={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"3rem"},children:[r.jsxs("div",{children:[r.jsx(a,{variant:"h3",mb:"4",children:"Vertical Stack with Default Dividers"}),r.jsxs(t,{spacing:"3",divider:!0,bg:"dark",p:"6",borderRadius:"md",maxWidth:"300px",children:[r.jsxs(e,{children:[r.jsx(a,{color:"white",variant:"h5",children:"Profile Settings"}),r.jsx(a,{color:"gray.light",variant:"body2",children:"Manage your account"})]}),r.jsxs(e,{children:[r.jsx(a,{color:"white",variant:"h5",children:"Privacy Settings"}),r.jsx(a,{color:"gray.light",variant:"body2",children:"Control your privacy"})]}),r.jsxs(e,{children:[r.jsx(a,{color:"white",variant:"h5",children:"Notifications"}),r.jsx(a,{color:"gray.light",variant:"body2",children:"Email and push settings"})]})]})]}),r.jsxs("div",{children:[r.jsx(a,{variant:"h3",mb:"4",children:"Horizontal Stack with Default Dividers"}),r.jsxs(t,{direction:"horizontal",spacing:"4",divider:!0,bg:"dark",p:"4",borderRadius:"md",children:[r.jsx(i,{minWidth:"auto",p:"3",children:"Save"}),r.jsx(i,{bg:"gray",minWidth:"auto",p:"3",children:"Cancel"}),r.jsx(i,{bg:"purple",minWidth:"auto",p:"3",children:"Delete"})]})]})]})},l={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"3rem"},children:[r.jsxs("div",{children:[r.jsx(a,{variant:"h3",mb:"4",children:"Custom Divider Styling"}),r.jsxs(t,{spacing:"4",divider:r.jsx(b,{color:"medium",thickness:"medium"}),bg:"dark",p:"6",borderRadius:"md",maxWidth:"400px",children:[r.jsxs(e,{children:[r.jsx(a,{color:"white",variant:"h4",children:"Dashboard"}),r.jsx(a,{color:"gray.light",children:"Overview of your data"})]}),r.jsxs(e,{children:[r.jsx(a,{color:"white",variant:"h4",children:"Analytics"}),r.jsx(a,{color:"gray.light",children:"Detailed insights and reports"})]}),r.jsxs(e,{children:[r.jsx(a,{color:"white",variant:"h4",children:"Settings"}),r.jsx(a,{color:"gray.light",children:"Configure your preferences"})]})]})]}),r.jsxs("div",{children:[r.jsx(a,{variant:"h3",mb:"4",children:"Horizontal with Custom Divider"}),r.jsxs(t,{direction:"horizontal",spacing:"6",divider:r.jsx(b,{orientation:"vertical",thickness:"thick",color:"dark",length:"40px"}),align:"center",bg:"light",p:"6",borderRadius:"md",children:[r.jsxs(e,{textAlign:"center",children:[r.jsx(a,{variant:"h2",color:"blue",fontWeight:"bold",children:"127"}),r.jsx(a,{variant:"body2",color:"gray.dark",children:"Active Users"})]}),r.jsxs(e,{textAlign:"center",children:[r.jsx(a,{variant:"h2",color:"purple",fontWeight:"bold",children:"89%"}),r.jsx(a,{variant:"body2",color:"gray.dark",children:"Success Rate"})]}),r.jsxs(e,{textAlign:"center",children:[r.jsx(a,{variant:"h2",color:"gray.dark",fontWeight:"bold",children:"2.4s"}),r.jsx(a,{variant:"body2",color:"gray.dark",children:"Avg Response"})]})]})]})]})},h={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"3rem"},children:[r.jsxs("div",{children:[r.jsx(a,{variant:"h3",mb:"4",children:"Align Start"}),r.jsxs(t,{direction:"horizontal",spacing:"4",align:"start",bg:"dark",p:"4",borderRadius:"md",children:[r.jsx(i,{height:"60px",children:"Short"}),r.jsx(i,{bg:"purple",height:"100px",children:"Tall Item"}),r.jsx(i,{bg:"gray",height:"80px",children:"Medium"})]})]}),r.jsxs("div",{children:[r.jsx(a,{variant:"h3",mb:"4",children:"Align Center"}),r.jsxs(t,{direction:"horizontal",spacing:"4",align:"center",bg:"dark",p:"4",borderRadius:"md",children:[r.jsx(i,{height:"60px",children:"Short"}),r.jsx(i,{bg:"purple",height:"100px",children:"Tall Item"}),r.jsx(i,{bg:"gray",height:"80px",children:"Medium"})]})]}),r.jsxs("div",{children:[r.jsx(a,{variant:"h3",mb:"4",children:"Align Stretch"}),r.jsxs(t,{direction:"horizontal",spacing:"4",align:"stretch",bg:"dark",p:"4",borderRadius:"md",height:"120px",children:[r.jsx(i,{children:"Stretched"}),r.jsx(i,{bg:"purple",children:"All Same"}),r.jsx(i,{bg:"gray",children:"Height"})]})]})]})},g={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"3rem"},children:[r.jsxs("div",{children:[r.jsx(a,{variant:"h3",mb:"4",children:"Responsive Direction"}),r.jsx(a,{variant:"body1",mb:"4",color:"gray.light",children:"Vertical on mobile, horizontal on tablet and up"}),r.jsxs(t,{direction:"vertical",md:"horizontal",spacing:"4",bg:"dark",p:"4",borderRadius:"md",children:[r.jsx(i,{children:"Responsive 1"}),r.jsx(i,{bg:"purple",children:"Responsive 2"}),r.jsx(i,{bg:"gray",children:"Responsive 3"})]})]}),r.jsxs("div",{children:[r.jsx(a,{variant:"h3",mb:"4",children:"Multi-breakpoint Responsive"}),r.jsx(a,{variant:"body1",mb:"4",color:"gray.light",children:"Vertical → horizontal (md) → vertical (lg) → horizontal (xl)"}),r.jsxs(t,{direction:"vertical",md:"horizontal",lg:"vertical",xl:"horizontal",spacing:"4",divider:!0,bg:"dark",p:"4",borderRadius:"md",children:[r.jsx(i,{children:"Multi 1"}),r.jsx(i,{bg:"purple",children:"Multi 2"}),r.jsx(i,{bg:"gray",children:"Multi 3"})]})]})]})},m={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4rem"},children:[r.jsxs("div",{children:[r.jsx(a,{variant:"h3",mb:"4",children:"Navigation Menu"}),r.jsxs(t,{direction:"horizontal",spacing:"0",bg:"dark",borderRadius:"md",p:"1",children:[r.jsx(e,{p:"3",borderRadius:"base",bg:"blue",style:{backgroundColor:"#4A9EFF"},children:r.jsx(a,{color:"white",fontWeight:"medium",children:"Home"})}),r.jsx(e,{p:"3",borderRadius:"base",children:r.jsx(a,{color:"gray.light",children:"About"})}),r.jsx(e,{p:"3",borderRadius:"base",children:r.jsx(a,{color:"gray.light",children:"Services"})}),r.jsx(e,{p:"3",borderRadius:"base",children:r.jsx(a,{color:"gray.light",children:"Contact"})})]})]}),r.jsxs("div",{children:[r.jsx(a,{variant:"h3",mb:"4",children:"Form Layout"}),r.jsx(t,{spacing:"6",maxWidth:"400px",children:r.jsxs(c,{children:[r.jsx(a,{variant:"h5",mb:"3",children:"User Profile"}),r.jsxs(t,{spacing:"4",children:[r.jsxs(e,{children:[r.jsx(a,{variant:"body2",color:"gray.light",mb:"1",children:"Full Name"}),r.jsx(e,{bg:"gray.base",p:"3",borderRadius:"base",children:r.jsx(a,{color:"white",children:"John Doe"})})]}),r.jsxs(e,{children:[r.jsx(a,{variant:"body2",color:"gray.light",mb:"1",children:"Email"}),r.jsx(e,{bg:"gray.base",p:"3",borderRadius:"base",children:r.jsx(a,{color:"white",children:"john@example.com"})})]}),r.jsxs(e,{children:[r.jsx(a,{variant:"body2",color:"gray.light",mb:"1",children:"Role"}),r.jsx(e,{bg:"gray.base",p:"3",borderRadius:"base",children:r.jsx(a,{color:"white",children:"Administrator"})})]})]})]})})]}),r.jsxs("div",{children:[r.jsx(a,{variant:"h3",mb:"4",children:"Action Bar"}),r.jsxs(t,{direction:"horizontal",spacing:"2",divider:r.jsx(b,{orientation:"vertical",length:"24px"}),align:"center",bg:"dark",p:"4",borderRadius:"md",children:[r.jsx(i,{bg:"blue",minWidth:"auto",p:"2",children:"New"}),r.jsx(i,{bg:"gray",minWidth:"auto",p:"2",children:"Edit"}),r.jsx(i,{bg:"gray",minWidth:"auto",p:"2",children:"Delete"}),r.jsx(i,{bg:"purple",minWidth:"auto",p:"2",children:"Export"})]})]}),r.jsxs("div",{children:[r.jsx(a,{variant:"h3",mb:"4",children:"Card Stack"}),r.jsxs(t,{spacing:"4",maxWidth:"500px",children:[r.jsxs(c,{children:[r.jsx(a,{variant:"h5",mb:"2",children:"Feature Release 2.1"}),r.jsx(a,{color:"gray.light",mb:"3",children:"New dashboard improvements and performance optimizations"}),r.jsxs(t,{direction:"horizontal",spacing:"2",children:[r.jsx(e,{bg:"blue",p:"1",px:"3",borderRadius:"base",children:r.jsx(a,{color:"white",variant:"caption",children:"New"})}),r.jsx(e,{bg:"gray.base",p:"1",px:"3",borderRadius:"base",children:r.jsx(a,{color:"white",variant:"caption",children:"Important"})})]})]}),r.jsxs(c,{children:[r.jsx(a,{variant:"h5",mb:"2",children:"Security Update"}),r.jsx(a,{color:"gray.light",mb:"3",children:"Critical security patches and authentication improvements"}),r.jsxs(t,{direction:"horizontal",spacing:"2",children:[r.jsx(e,{bg:"purple",p:"1",px:"3",borderRadius:"base",children:r.jsx(a,{color:"white",variant:"caption",children:"Security"})}),r.jsx(e,{bg:"gray.base",p:"1",px:"3",borderRadius:"base",children:r.jsx(a,{color:"white",variant:"caption",children:"Critical"})})]})]}),r.jsxs(c,{children:[r.jsx(a,{variant:"h5",mb:"2",children:"UI Improvements"}),r.jsx(a,{color:"gray.light",mb:"3",children:"Better mobile experience and accessibility enhancements"}),r.jsxs(t,{direction:"horizontal",spacing:"2",children:[r.jsx(e,{bg:"gray.base",p:"1",px:"3",borderRadius:"base",children:r.jsx(a,{color:"white",variant:"caption",children:"UI/UX"})}),r.jsx(e,{bg:"gray.base",p:"1",px:"3",borderRadius:"base",children:r.jsx(a,{color:"white",variant:"caption",children:"Mobile"})})]})]})]})]})]})},y={render:()=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:r.jsxs("div",{children:[r.jsx(a,{variant:"h3",mb:"4",children:"Horizontal Stack with Wrapping"}),r.jsxs(t,{direction:"horizontal",spacing:"4",wrap:!0,bg:"dark",p:"4",borderRadius:"md",maxWidth:"400px",children:[r.jsx(i,{minWidth:"150px",children:"Item 1"}),r.jsx(i,{bg:"purple",minWidth:"150px",children:"Item 2"}),r.jsx(i,{bg:"gray",minWidth:"150px",children:"Item 3"}),r.jsx(i,{minWidth:"150px",children:"Item 4"}),r.jsx(i,{bg:"blue",minWidth:"150px",children:"Item 5"})]})]})})};var v,u,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    spacing: '4'
  },
  render: args => <Stack {...args}>\r
      <StackItem>Item 1</StackItem>\r
      <StackItem bg="purple">Item 2</StackItem>\r
      <StackItem bg="gray">Item 3</StackItem>\r
    </Stack>
}`,...(S=(u=n.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var k,j,T;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem'
  }}>\r
      <div>\r
        <Typography variant="h3" mb="4">Vertical Stack (Default)</Typography>\r
        <Stack spacing="4">\r
          <StackItem>Item 1</StackItem>\r
          <StackItem bg="purple">Item 2</StackItem>\r
          <StackItem bg="gray">Item 3</StackItem>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="4">Horizontal Stack</Typography>\r
        <Stack direction="horizontal" spacing="4">\r
          <StackItem>Item 1</StackItem>\r
          <StackItem bg="purple">Item 2</StackItem>\r
          <StackItem bg="gray">Item 3</StackItem>\r
        </Stack>\r
      </div>\r
    </div>
}`,...(T=(j=d.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var I,R,W;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem'
  }}>\r
      <div>\r
        <Typography variant="h3" mb="4">Small Spacing (2)</Typography>\r
        <Stack spacing="2">\r
          <StackItem minWidth="auto" p="3">Tight</StackItem>\r
          <StackItem bg="purple" minWidth="auto" p="3">Spacing</StackItem>\r
          <StackItem bg="gray" minWidth="auto" p="3">Stack</StackItem>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="4">Medium Spacing (4)</Typography>\r
        <Stack spacing="4">\r
          <StackItem minWidth="auto" p="3">Normal</StackItem>\r
          <StackItem bg="purple" minWidth="auto" p="3">Spacing</StackItem>\r
          <StackItem bg="gray" minWidth="auto" p="3">Stack</StackItem>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="4">Large Spacing (8)</Typography>\r
        <Stack spacing="8">\r
          <StackItem minWidth="auto" p="3">Wide</StackItem>\r
          <StackItem bg="purple" minWidth="auto" p="3">Spacing</StackItem>\r
          <StackItem bg="gray" minWidth="auto" p="3">Stack</StackItem>\r
        </Stack>\r
      </div>\r
    </div>
}`,...(W=(R=s.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var f,B,D;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem'
  }}>\r
      <div>\r
        <Typography variant="h3" mb="4">Vertical Stack with Default Dividers</Typography>\r
        <Stack spacing="3" divider={true} bg="dark" p="6" borderRadius="md" maxWidth="300px">\r
          <Box>\r
            <Typography color="white" variant="h5">Profile Settings</Typography>\r
            <Typography color="gray.light" variant="body2">Manage your account</Typography>\r
          </Box>\r
          <Box>\r
            <Typography color="white" variant="h5">Privacy Settings</Typography>\r
            <Typography color="gray.light" variant="body2">Control your privacy</Typography>\r
          </Box>\r
          <Box>\r
            <Typography color="white" variant="h5">Notifications</Typography>\r
            <Typography color="gray.light" variant="body2">Email and push settings</Typography>\r
          </Box>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="4">Horizontal Stack with Default Dividers</Typography>\r
        <Stack direction="horizontal" spacing="4" divider={true} bg="dark" p="4" borderRadius="md">\r
          <StackItem minWidth="auto" p="3">Save</StackItem>\r
          <StackItem bg="gray" minWidth="auto" p="3">Cancel</StackItem>\r
          <StackItem bg="purple" minWidth="auto" p="3">Delete</StackItem>\r
        </Stack>\r
      </div>\r
    </div>
}`,...(D=(B=p.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var w,z,C;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem'
  }}>\r
      <div>\r
        <Typography variant="h3" mb="4">Custom Divider Styling</Typography>\r
        <Stack spacing="4" divider={<Divider color="medium" thickness="medium" />} bg="dark" p="6" borderRadius="md" maxWidth="400px">\r
          <Box>\r
            <Typography color="white" variant="h4">Dashboard</Typography>\r
            <Typography color="gray.light">Overview of your data</Typography>\r
          </Box>\r
          <Box>\r
            <Typography color="white" variant="h4">Analytics</Typography>\r
            <Typography color="gray.light">Detailed insights and reports</Typography>\r
          </Box>\r
          <Box>\r
            <Typography color="white" variant="h4">Settings</Typography>\r
            <Typography color="gray.light">Configure your preferences</Typography>\r
          </Box>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="4">Horizontal with Custom Divider</Typography>\r
        <Stack direction="horizontal" spacing="6" divider={<Divider orientation="vertical" thickness="thick" color="dark" length="40px" />} align="center" bg="light" p="6" borderRadius="md">\r
          <Box textAlign="center">\r
            <Typography variant="h2" color="blue" fontWeight="bold">127</Typography>\r
            <Typography variant="body2" color="gray.dark">Active Users</Typography>\r
          </Box>\r
          <Box textAlign="center">\r
            <Typography variant="h2" color="purple" fontWeight="bold">89%</Typography>\r
            <Typography variant="body2" color="gray.dark">Success Rate</Typography>\r
          </Box>\r
          <Box textAlign="center">\r
            <Typography variant="h2" color="gray.dark" fontWeight="bold">2.4s</Typography>\r
            <Typography variant="body2" color="gray.dark">Avg Response</Typography>\r
          </Box>\r
        </Stack>\r
      </div>\r
    </div>
}`,...(C=(z=l.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var A,M,N;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem'
  }}>\r
      <div>\r
        <Typography variant="h3" mb="4">Align Start</Typography>\r
        <Stack direction="horizontal" spacing="4" align="start" bg="dark" p="4" borderRadius="md">\r
          <StackItem height="60px">Short</StackItem>\r
          <StackItem bg="purple" height="100px">Tall Item</StackItem>\r
          <StackItem bg="gray" height="80px">Medium</StackItem>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="4">Align Center</Typography>\r
        <Stack direction="horizontal" spacing="4" align="center" bg="dark" p="4" borderRadius="md">\r
          <StackItem height="60px">Short</StackItem>\r
          <StackItem bg="purple" height="100px">Tall Item</StackItem>\r
          <StackItem bg="gray" height="80px">Medium</StackItem>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="4">Align Stretch</Typography>\r
        <Stack direction="horizontal" spacing="4" align="stretch" bg="dark" p="4" borderRadius="md" height="120px">\r
          <StackItem>Stretched</StackItem>\r
          <StackItem bg="purple">All Same</StackItem>\r
          <StackItem bg="gray">Height</StackItem>\r
        </Stack>\r
      </div>\r
    </div>
}`,...(N=(M=h.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var E,H,U;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem'
  }}>\r
      <div>\r
        <Typography variant="h3" mb="4">Responsive Direction</Typography>\r
        <Typography variant="body1" mb="4" color="gray.light">\r
          Vertical on mobile, horizontal on tablet and up\r
        </Typography>\r
        <Stack direction="vertical" md="horizontal" spacing="4" bg="dark" p="4" borderRadius="md">\r
          <StackItem>Responsive 1</StackItem>\r
          <StackItem bg="purple">Responsive 2</StackItem>\r
          <StackItem bg="gray">Responsive 3</StackItem>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="4">Multi-breakpoint Responsive</Typography>\r
        <Typography variant="body1" mb="4" color="gray.light">\r
          Vertical → horizontal (md) → vertical (lg) → horizontal (xl)\r
        </Typography>\r
        <Stack direction="vertical" md="horizontal" lg="vertical" xl="horizontal" spacing="4" divider={true} bg="dark" p="4" borderRadius="md">\r
          <StackItem>Multi 1</StackItem>\r
          <StackItem bg="purple">Multi 2</StackItem>\r
          <StackItem bg="gray">Multi 3</StackItem>\r
        </Stack>\r
      </div>\r
    </div>
}`,...(U=(H=g.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var F,P,V;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem'
  }}>\r
      <div>\r
        <Typography variant="h3" mb="4">Navigation Menu</Typography>\r
        <Stack direction="horizontal" spacing="0" bg="dark" borderRadius="md" p="1">\r
          <Box p="3" borderRadius="base" bg="blue" style={{
          backgroundColor: '#4A9EFF'
        }}>\r
            <Typography color="white" fontWeight="medium">Home</Typography>\r
          </Box>\r
          <Box p="3" borderRadius="base">\r
            <Typography color="gray.light">About</Typography>\r
          </Box>\r
          <Box p="3" borderRadius="base">\r
            <Typography color="gray.light">Services</Typography>\r
          </Box>\r
          <Box p="3" borderRadius="base">\r
            <Typography color="gray.light">Contact</Typography>\r
          </Box>\r
        </Stack>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="4">Form Layout</Typography>\r
        <Stack spacing="6" maxWidth="400px">\r
          <Card>\r
            <Typography variant="h5" mb="3">User Profile</Typography>\r
            <Stack spacing="4">\r
              <Box>\r
                <Typography variant="body2" color="gray.light" mb="1">Full Name</Typography>\r
                <Box bg="gray.base" p="3" borderRadius="base">\r
                  <Typography color="white">John Doe</Typography>\r
                </Box>\r
              </Box>\r
              <Box>\r
                <Typography variant="body2" color="gray.light" mb="1">Email</Typography>\r
                <Box bg="gray.base" p="3" borderRadius="base">\r
                  <Typography color="white">john@example.com</Typography>\r
                </Box>\r
              </Box>\r
              <Box>\r
                <Typography variant="body2" color="gray.light" mb="1">Role</Typography>\r
                <Box bg="gray.base" p="3" borderRadius="base">\r
                  <Typography color="white">Administrator</Typography>\r
                </Box>\r
              </Box>\r
            </Stack>\r
          </Card>\r
        </Stack>\r
      </div>\r
\r
      <div>\r
        <Typography variant="h3" mb="4">Action Bar</Typography>\r
        <Stack direction="horizontal" spacing="2" divider={<Divider orientation="vertical" length="24px" />} align="center" bg="dark" p="4" borderRadius="md">\r
          <StackItem bg="blue" minWidth="auto" p="2">New</StackItem>\r
          <StackItem bg="gray" minWidth="auto" p="2">Edit</StackItem>\r
          <StackItem bg="gray" minWidth="auto" p="2">Delete</StackItem>\r
          <StackItem bg="purple" minWidth="auto" p="2">Export</StackItem>\r
        </Stack>\r
      </div>\r
\r
      <div>\r
        <Typography variant="h3" mb="4">Card Stack</Typography>\r
        <Stack spacing="4" maxWidth="500px">\r
          <Card>\r
            <Typography variant="h5" mb="2">Feature Release 2.1</Typography>\r
            <Typography color="gray.light" mb="3">\r
              New dashboard improvements and performance optimizations\r
            </Typography>\r
            <Stack direction="horizontal" spacing="2">\r
              <Box bg="blue" p="1" px="3" borderRadius="base">\r
                <Typography color="white" variant="caption">New</Typography>\r
              </Box>\r
              <Box bg="gray.base" p="1" px="3" borderRadius="base">\r
                <Typography color="white" variant="caption">Important</Typography>\r
              </Box>\r
            </Stack>\r
          </Card>\r
          \r
          <Card>\r
            <Typography variant="h5" mb="2">Security Update</Typography>\r
            <Typography color="gray.light" mb="3">\r
              Critical security patches and authentication improvements\r
            </Typography>\r
            <Stack direction="horizontal" spacing="2">\r
              <Box bg="purple" p="1" px="3" borderRadius="base">\r
                <Typography color="white" variant="caption">Security</Typography>\r
              </Box>\r
              <Box bg="gray.base" p="1" px="3" borderRadius="base">\r
                <Typography color="white" variant="caption">Critical</Typography>\r
              </Box>\r
            </Stack>\r
          </Card>\r
          \r
          <Card>\r
            <Typography variant="h5" mb="2">UI Improvements</Typography>\r
            <Typography color="gray.light" mb="3">\r
              Better mobile experience and accessibility enhancements\r
            </Typography>\r
            <Stack direction="horizontal" spacing="2">\r
              <Box bg="gray.base" p="1" px="3" borderRadius="base">\r
                <Typography color="white" variant="caption">UI/UX</Typography>\r
              </Box>\r
              <Box bg="gray.base" p="1" px="3" borderRadius="base">\r
                <Typography color="white" variant="caption">Mobile</Typography>\r
              </Box>\r
            </Stack>\r
          </Card>\r
        </Stack>\r
      </div>\r
    </div>
}`,...(V=(P=m.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var L,O,J;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
      <div>\r
        <Typography variant="h3" mb="4">Horizontal Stack with Wrapping</Typography>\r
        <Stack direction="horizontal" spacing="4" wrap bg="dark" p="4" borderRadius="md" maxWidth="400px">\r
          <StackItem minWidth="150px">Item 1</StackItem>\r
          <StackItem bg="purple" minWidth="150px">Item 2</StackItem>\r
          <StackItem bg="gray" minWidth="150px">Item 3</StackItem>\r
          <StackItem minWidth="150px">Item 4</StackItem>\r
          <StackItem bg="blue" minWidth="150px">Item 5</StackItem>\r
        </Stack>\r
      </div>\r
    </div>
}`,...(J=(O=y.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};const ir=["Basic","Direction","Spacing","WithDividers","CustomDividers","Alignment","Responsive","CommonPatterns","WithWrapping"];export{h as Alignment,n as Basic,m as CommonPatterns,l as CustomDividers,d as Direction,g as Responsive,s as Spacing,p as WithDividers,y as WithWrapping,ir as __namedExportsOrder,ar as default};
