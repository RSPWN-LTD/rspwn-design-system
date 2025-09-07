import{j as e}from"./jsx-runtime-CDt2p4po.js";import{F as t}from"./Flex-DuvPXp7m.js";import{B as a}from"./Box-COihqxSe.js";import{T as i}from"./Typography-u4LxpgYF.js";import"./index-GiUgBvb1.js";import"./styled-components.browser.esm-Byilhkxn.js";import"./propFilters-BGSNtaQt.js";const Y={title:"Foundation/Flex",component:t,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{direction:{control:{type:"select"},options:["row","column","row-reverse","column-reverse"]},align:{control:{type:"select"},options:["start","center","end","stretch","baseline"]},justify:{control:{type:"select"},options:["start","center","end","between","around","evenly"]},wrap:{control:{type:"select"},options:["wrap","nowrap","wrap-reverse"]},gap:{control:{type:"select"},options:["0","1","2","3","4","5","6","8","10","12"]}}},r=({children:g,bg:E="blue",..._})=>e.jsx(a,{bg:E,p:"4",borderRadius:"base",display:"flex",alignItems:"center",justifyContent:"center",minWidth:"100px",..._,children:e.jsx(i,{color:"white",variant:"body",align:"center",children:g})}),l={args:{gap:"4"},render:g=>e.jsxs(t,{...g,children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{bg:"purple",children:"Item 2"}),e.jsx(r,{bg:"gray",children:"Item 3"})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx(i,{variant:"h3",mb:"4",children:"Row (Default)"}),e.jsxs(t,{gap:"4",children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{bg:"purple",children:"Item 2"}),e.jsx(r,{bg:"gray",children:"Item 3"})]})]}),e.jsxs("div",{children:[e.jsx(i,{variant:"h3",mb:"4",children:"Column"}),e.jsxs(t,{direction:"column",gap:"4",children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{bg:"purple",children:"Item 2"}),e.jsx(r,{bg:"gray",children:"Item 3"})]})]}),e.jsxs("div",{children:[e.jsx(i,{variant:"h3",mb:"4",children:"Row Reverse"}),e.jsxs(t,{direction:"row-reverse",gap:"4",children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{bg:"purple",children:"Item 2"}),e.jsx(r,{bg:"gray",children:"Item 3"})]})]})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx(i,{variant:"h3",mb:"4",children:"Start (Default)"}),e.jsxs(t,{gap:"4",bg:"dark",p:"4",borderRadius:"md",children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{bg:"purple",children:"Item 2"})]})]}),e.jsxs("div",{children:[e.jsx(i,{variant:"h3",mb:"4",children:"Center"}),e.jsxs(t,{justify:"center",gap:"4",bg:"dark",p:"4",borderRadius:"md",children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{bg:"purple",children:"Item 2"})]})]}),e.jsxs("div",{children:[e.jsx(i,{variant:"h3",mb:"4",children:"Space Between"}),e.jsxs(t,{justify:"between",gap:"4",bg:"dark",p:"4",borderRadius:"md",children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{bg:"purple",children:"Item 2"}),e.jsx(r,{bg:"gray",children:"Item 3"})]})]}),e.jsxs("div",{children:[e.jsx(i,{variant:"h3",mb:"4",children:"Space Around"}),e.jsxs(t,{justify:"around",gap:"4",bg:"dark",p:"4",borderRadius:"md",children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{bg:"purple",children:"Item 2"}),e.jsx(r,{bg:"gray",children:"Item 3"})]})]})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx(i,{variant:"h3",mb:"4",children:"Align Start"}),e.jsxs(t,{align:"start",gap:"4",bg:"dark",p:"4",borderRadius:"md",height:"120px",children:[e.jsx(r,{children:"Short"}),e.jsx(r,{bg:"purple",height:"80px",children:"Tall Item"}),e.jsx(r,{bg:"gray",children:"Medium"})]})]}),e.jsxs("div",{children:[e.jsx(i,{variant:"h3",mb:"4",children:"Align Center"}),e.jsxs(t,{align:"center",gap:"4",bg:"dark",p:"4",borderRadius:"md",height:"120px",children:[e.jsx(r,{children:"Short"}),e.jsx(r,{bg:"purple",height:"80px",children:"Tall Item"}),e.jsx(r,{bg:"gray",children:"Medium"})]})]}),e.jsxs("div",{children:[e.jsx(i,{variant:"h3",mb:"4",children:"Align Stretch"}),e.jsxs(t,{align:"stretch",gap:"4",bg:"dark",p:"4",borderRadius:"md",height:"120px",children:[e.jsx(r,{children:"Stretched"}),e.jsx(r,{bg:"purple",children:"Stretched"}),e.jsx(r,{bg:"gray",children:"Stretched"})]})]})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx(i,{variant:"h3",mb:"4",children:"Perfect Center"}),e.jsx(t,{center:!0,gap:"4",bg:"dark",p:"8",borderRadius:"md",height:"200px",children:e.jsx(r,{children:"Centered Content"})})]}),e.jsxs("div",{children:[e.jsx(i,{variant:"h3",mb:"4",children:"Center with Multiple Items"}),e.jsxs(t,{center:!0,gap:"4",bg:"dark",p:"8",borderRadius:"md",height:"200px",children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{bg:"purple",children:"Item 2"})]})]})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx(i,{variant:"h3",mb:"4",children:"No Wrap (Default)"}),e.jsxs(t,{gap:"4",bg:"dark",p:"4",borderRadius:"md",maxWidth:"400px",children:[e.jsx(r,{minWidth:"150px",children:"Item 1"}),e.jsx(r,{bg:"purple",minWidth:"150px",children:"Item 2"}),e.jsx(r,{bg:"gray",minWidth:"150px",children:"Item 3"}),e.jsx(r,{minWidth:"150px",children:"Item 4"})]})]}),e.jsxs("div",{children:[e.jsx(i,{variant:"h3",mb:"4",children:"Wrap"}),e.jsxs(t,{wrap:"wrap",gap:"4",bg:"dark",p:"4",borderRadius:"md",maxWidth:"400px",children:[e.jsx(r,{minWidth:"150px",children:"Item 1"}),e.jsx(r,{bg:"purple",minWidth:"150px",children:"Item 2"}),e.jsx(r,{bg:"gray",minWidth:"150px",children:"Item 3"}),e.jsx(r,{minWidth:"150px",children:"Item 4"})]})]})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx(i,{variant:"h3",mb:"4",children:"Responsive Direction"}),e.jsx(i,{variant:"body",mb:"4",color:"gray.light",children:"Column on mobile, row on desktop"}),e.jsxs(t,{direction:"column",md:{direction:"row",justify:"between"},gap:"4",bg:"dark",p:"4",borderRadius:"md",children:[e.jsx(r,{children:"Responsive 1"}),e.jsx(r,{bg:"purple",children:"Responsive 2"}),e.jsx(r,{bg:"gray",children:"Responsive 3"})]})]}),e.jsxs("div",{children:[e.jsx(i,{variant:"h3",mb:"4",children:"Responsive Justification"}),e.jsx(i,{variant:"body",mb:"4",color:"gray.light",children:"Start on mobile, space-between on tablet, center on desktop"}),e.jsxs(t,{justify:"start",md:{justify:"between"},lg:{justify:"center"},gap:"4",bg:"dark",p:"4",borderRadius:"md",children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{bg:"purple",children:"Item 2"}),e.jsx(r,{bg:"gray",children:"Item 3"})]})]})]})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"3rem"},children:[e.jsxs("div",{children:[e.jsx(i,{variant:"h3",mb:"4",children:"Header Layout"}),e.jsxs(t,{justify:"between",align:"center",bg:"dark",p:"4",borderRadius:"md",children:[e.jsx(i,{variant:"h4",color:"white",children:"RSPWN"}),e.jsxs(t,{gap:"4",children:[e.jsx(r,{bg:"blue",p:"2",minWidth:"auto",children:"Home"}),e.jsx(r,{bg:"blue",p:"2",minWidth:"auto",children:"About"}),e.jsx(r,{bg:"blue",p:"2",minWidth:"auto",children:"Contact"})]})]})]}),e.jsxs("div",{children:[e.jsx(i,{variant:"h3",mb:"4",children:"Button Group"}),e.jsxs(t,{gap:"3",children:[e.jsx(r,{bg:"blue",minWidth:"auto",children:"Save"}),e.jsx(r,{bg:"gray",minWidth:"auto",children:"Cancel"}),e.jsx(r,{bg:"purple",minWidth:"auto",children:"Delete"})]})]}),e.jsxs("div",{children:[e.jsx(i,{variant:"h3",mb:"4",children:"Card Layout"}),e.jsxs(t,{gap:"6",wrap:"wrap",children:[e.jsxs(a,{bg:"dark",p:"6",borderRadius:"md",flex:"1",minWidth:"250px",children:[e.jsx(i,{variant:"h4",color:"white",mb:"4",children:"Feature 1"}),e.jsx(i,{color:"gray.light",children:"Description of the first feature"})]}),e.jsxs(a,{bg:"dark",p:"6",borderRadius:"md",flex:"1",minWidth:"250px",children:[e.jsx(i,{variant:"h4",color:"white",mb:"4",children:"Feature 2"}),e.jsx(i,{color:"gray.light",children:"Description of the second feature"})]}),e.jsxs(a,{bg:"dark",p:"6",borderRadius:"md",flex:"1",minWidth:"250px",children:[e.jsx(i,{variant:"h4",color:"white",mb:"4",children:"Feature 3"}),e.jsx(i,{color:"gray.light",children:"Description of the third feature"})]})]})]}),e.jsxs("div",{children:[e.jsx(i,{variant:"h3",mb:"4",children:"Sidebar Layout"}),e.jsxs(t,{gap:"6",align:"start",minHeight:"300px",children:[e.jsxs(a,{bg:"dark",p:"4",borderRadius:"md",width:"200px",children:[e.jsx(i,{variant:"h5",color:"white",mb:"4",children:"Sidebar"}),e.jsxs(t,{direction:"column",gap:"2",children:[e.jsx(r,{bg:"gray",p:"2",minWidth:"auto",children:"Menu 1"}),e.jsx(r,{bg:"gray",p:"2",minWidth:"auto",children:"Menu 2"}),e.jsx(r,{bg:"gray",p:"2",minWidth:"auto",children:"Menu 3"})]})]}),e.jsxs(a,{bg:"light",p:"6",borderRadius:"md",flex:"1",children:[e.jsx(i,{variant:"h4",mb:"4",children:"Main Content"}),e.jsx(i,{color:"gray.dark",children:"This is the main content area that takes up the remaining space."})]})]})]})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx(i,{variant:"h3",mb:"4",children:"Inline Flex"}),e.jsxs("div",{style:{background:"#333",padding:"1rem",borderRadius:"8px"},children:[e.jsx(i,{color:"white",mb:"2",children:"Inline flex containers:"}),e.jsxs(t,{inline:!0,gap:"2",align:"center",children:[e.jsx(r,{p:"2",minWidth:"auto",children:"Inline 1"}),e.jsx(r,{bg:"purple",p:"2",minWidth:"auto",children:"Inline 2"})]}),e.jsx("span",{style:{color:"white",margin:"0 1rem"},children:"Some text after"}),e.jsxs(t,{inline:!0,gap:"2",align:"center",children:[e.jsx(r,{bg:"gray",p:"2",minWidth:"auto",children:"Another"}),e.jsx(r,{p:"2",minWidth:"auto",children:"Group"})]})]})]}),e.jsxs("div",{children:[e.jsx(i,{variant:"h3",mb:"4",children:"Different Gap Sizes"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx(i,{variant:"body",mb:"2",children:"Gap: 1 (4px)"}),e.jsxs(t,{gap:"1",bg:"dark",p:"4",borderRadius:"md",children:[e.jsx(r,{minWidth:"auto",p:"2",children:"Item 1"}),e.jsx(r,{bg:"purple",minWidth:"auto",p:"2",children:"Item 2"}),e.jsx(r,{bg:"gray",minWidth:"auto",p:"2",children:"Item 3"})]})]}),e.jsxs("div",{children:[e.jsx(i,{variant:"body",mb:"2",children:"Gap: 4 (16px)"}),e.jsxs(t,{gap:"4",bg:"dark",p:"4",borderRadius:"md",children:[e.jsx(r,{minWidth:"auto",p:"2",children:"Item 1"}),e.jsx(r,{bg:"purple",minWidth:"auto",p:"2",children:"Item 2"}),e.jsx(r,{bg:"gray",minWidth:"auto",p:"2",children:"Item 3"})]})]}),e.jsxs("div",{children:[e.jsx(i,{variant:"body",mb:"2",children:"Gap: 8 (32px)"}),e.jsxs(t,{gap:"8",bg:"dark",p:"4",borderRadius:"md",children:[e.jsx(r,{minWidth:"auto",p:"2",children:"Item 1"}),e.jsx(r,{bg:"purple",minWidth:"auto",p:"2",children:"Item 2"}),e.jsx(r,{bg:"gray",minWidth:"auto",p:"2",children:"Item 3"})]})]})]})]})]})};var c,b,y;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    gap: '4'
  },
  render: args => <Flex {...args}>\r
      <FlexItem>Item 1</FlexItem>\r
      <FlexItem bg="purple">Item 2</FlexItem>\r
      <FlexItem bg="gray">Item 3</FlexItem>\r
    </Flex>
}`,...(y=(b=l.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var u,I,F;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
      <div>\r
        <Typography variant="h3" mb="4">Row (Default)</Typography>\r
        <Flex gap="4">\r
          <FlexItem>Item 1</FlexItem>\r
          <FlexItem bg="purple">Item 2</FlexItem>\r
          <FlexItem bg="gray">Item 3</FlexItem>\r
        </Flex>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="4">Column</Typography>\r
        <Flex direction="column" gap="4">\r
          <FlexItem>Item 1</FlexItem>\r
          <FlexItem bg="purple">Item 2</FlexItem>\r
          <FlexItem bg="gray">Item 3</FlexItem>\r
        </Flex>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="4">Row Reverse</Typography>\r
        <Flex direction="row-reverse" gap="4">\r
          <FlexItem>Item 1</FlexItem>\r
          <FlexItem bg="purple">Item 2</FlexItem>\r
          <FlexItem bg="gray">Item 3</FlexItem>\r
        </Flex>\r
      </div>\r
    </div>
}`,...(F=(I=d.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var j,v,f;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
      <div>\r
        <Typography variant="h3" mb="4">Start (Default)</Typography>\r
        <Flex gap="4" bg="dark" p="4" borderRadius="md">\r
          <FlexItem>Item 1</FlexItem>\r
          <FlexItem bg="purple">Item 2</FlexItem>\r
        </Flex>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="4">Center</Typography>\r
        <Flex justify="center" gap="4" bg="dark" p="4" borderRadius="md">\r
          <FlexItem>Item 1</FlexItem>\r
          <FlexItem bg="purple">Item 2</FlexItem>\r
        </Flex>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="4">Space Between</Typography>\r
        <Flex justify="between" gap="4" bg="dark" p="4" borderRadius="md">\r
          <FlexItem>Item 1</FlexItem>\r
          <FlexItem bg="purple">Item 2</FlexItem>\r
          <FlexItem bg="gray">Item 3</FlexItem>\r
        </Flex>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="4">Space Around</Typography>\r
        <Flex justify="around" gap="4" bg="dark" p="4" borderRadius="md">\r
          <FlexItem>Item 1</FlexItem>\r
          <FlexItem bg="purple">Item 2</FlexItem>\r
          <FlexItem bg="gray">Item 3</FlexItem>\r
        </Flex>\r
      </div>\r
    </div>
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var T,W,R;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
      <div>\r
        <Typography variant="h3" mb="4">Align Start</Typography>\r
        <Flex align="start" gap="4" bg="dark" p="4" borderRadius="md" height="120px">\r
          <FlexItem>Short</FlexItem>\r
          <FlexItem bg="purple" height="80px">Tall Item</FlexItem>\r
          <FlexItem bg="gray">Medium</FlexItem>\r
        </Flex>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="4">Align Center</Typography>\r
        <Flex align="center" gap="4" bg="dark" p="4" borderRadius="md" height="120px">\r
          <FlexItem>Short</FlexItem>\r
          <FlexItem bg="purple" height="80px">Tall Item</FlexItem>\r
          <FlexItem bg="gray">Medium</FlexItem>\r
        </Flex>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="4">Align Stretch</Typography>\r
        <Flex align="stretch" gap="4" bg="dark" p="4" borderRadius="md" height="120px">\r
          <FlexItem>Stretched</FlexItem>\r
          <FlexItem bg="purple">Stretched</FlexItem>\r
          <FlexItem bg="gray">Stretched</FlexItem>\r
        </Flex>\r
      </div>\r
    </div>
}`,...(R=(W=p.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var w,k,S;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
      <div>\r
        <Typography variant="h3" mb="4">Perfect Center</Typography>\r
        <Flex center gap="4" bg="dark" p="8" borderRadius="md" height="200px">\r
          <FlexItem>Centered Content</FlexItem>\r
        </Flex>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="4">Center with Multiple Items</Typography>\r
        <Flex center gap="4" bg="dark" p="8" borderRadius="md" height="200px">\r
          <FlexItem>Item 1</FlexItem>\r
          <FlexItem bg="purple">Item 2</FlexItem>\r
        </Flex>\r
      </div>\r
    </div>
}`,...(S=(k=s.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var D,C,B;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
      <div>\r
        <Typography variant="h3" mb="4">No Wrap (Default)</Typography>\r
        <Flex gap="4" bg="dark" p="4" borderRadius="md" maxWidth="400px">\r
          <FlexItem minWidth="150px">Item 1</FlexItem>\r
          <FlexItem bg="purple" minWidth="150px">Item 2</FlexItem>\r
          <FlexItem bg="gray" minWidth="150px">Item 3</FlexItem>\r
          <FlexItem minWidth="150px">Item 4</FlexItem>\r
        </Flex>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="4">Wrap</Typography>\r
        <Flex wrap="wrap" gap="4" bg="dark" p="4" borderRadius="md" maxWidth="400px">\r
          <FlexItem minWidth="150px">Item 1</FlexItem>\r
          <FlexItem bg="purple" minWidth="150px">Item 2</FlexItem>\r
          <FlexItem bg="gray" minWidth="150px">Item 3</FlexItem>\r
          <FlexItem minWidth="150px">Item 4</FlexItem>\r
        </Flex>\r
      </div>\r
    </div>
}`,...(B=(C=m.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var A,G,M;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
      <div>\r
        <Typography variant="h3" mb="4">Responsive Direction</Typography>\r
        <Typography variant="body" mb="4" color="gray.light">\r
          Column on mobile, row on desktop\r
        </Typography>\r
        <Flex direction="column" md={{
        direction: 'row',
        justify: 'between'
      }} gap="4" bg="dark" p="4" borderRadius="md">\r
          <FlexItem>Responsive 1</FlexItem>\r
          <FlexItem bg="purple">Responsive 2</FlexItem>\r
          <FlexItem bg="gray">Responsive 3</FlexItem>\r
        </Flex>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="4">Responsive Justification</Typography>\r
        <Typography variant="body" mb="4" color="gray.light">\r
          Start on mobile, space-between on tablet, center on desktop\r
        </Typography>\r
        <Flex justify="start" md={{
        justify: 'between'
      }} lg={{
        justify: 'center'
      }} gap="4" bg="dark" p="4" borderRadius="md">\r
          <FlexItem>Item 1</FlexItem>\r
          <FlexItem bg="purple">Item 2</FlexItem>\r
          <FlexItem bg="gray">Item 3</FlexItem>\r
        </Flex>\r
      </div>\r
    </div>
}`,...(M=(G=o.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var L,H,J;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem'
  }}>\r
      <div>\r
        <Typography variant="h3" mb="4">Header Layout</Typography>\r
        <Flex justify="between" align="center" bg="dark" p="4" borderRadius="md">\r
          <Typography variant="h4" color="white">RSPWN</Typography>\r
          <Flex gap="4">\r
            <FlexItem bg="blue" p="2" minWidth="auto">Home</FlexItem>\r
            <FlexItem bg="blue" p="2" minWidth="auto">About</FlexItem>\r
            <FlexItem bg="blue" p="2" minWidth="auto">Contact</FlexItem>\r
          </Flex>\r
        </Flex>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="4">Button Group</Typography>\r
        <Flex gap="3">\r
          <FlexItem bg="blue" minWidth="auto">Save</FlexItem>\r
          <FlexItem bg="gray" minWidth="auto">Cancel</FlexItem>\r
          <FlexItem bg="purple" minWidth="auto">Delete</FlexItem>\r
        </Flex>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="4">Card Layout</Typography>\r
        <Flex gap="6" wrap="wrap">\r
          <Box bg="dark" p="6" borderRadius="md" flex="1" minWidth="250px">\r
            <Typography variant="h4" color="white" mb="4">Feature 1</Typography>\r
            <Typography color="gray.light">Description of the first feature</Typography>\r
          </Box>\r
          <Box bg="dark" p="6" borderRadius="md" flex="1" minWidth="250px">\r
            <Typography variant="h4" color="white" mb="4">Feature 2</Typography>\r
            <Typography color="gray.light">Description of the second feature</Typography>\r
          </Box>\r
          <Box bg="dark" p="6" borderRadius="md" flex="1" minWidth="250px">\r
            <Typography variant="h4" color="white" mb="4">Feature 3</Typography>\r
            <Typography color="gray.light">Description of the third feature</Typography>\r
          </Box>\r
        </Flex>\r
      </div>\r
\r
      <div>\r
        <Typography variant="h3" mb="4">Sidebar Layout</Typography>\r
        <Flex gap="6" align="start" minHeight="300px">\r
          <Box bg="dark" p="4" borderRadius="md" width="200px">\r
            <Typography variant="h5" color="white" mb="4">Sidebar</Typography>\r
            <Flex direction="column" gap="2">\r
              <FlexItem bg="gray" p="2" minWidth="auto">Menu 1</FlexItem>\r
              <FlexItem bg="gray" p="2" minWidth="auto">Menu 2</FlexItem>\r
              <FlexItem bg="gray" p="2" minWidth="auto">Menu 3</FlexItem>\r
            </Flex>\r
          </Box>\r
          <Box bg="light" p="6" borderRadius="md" flex="1">\r
            <Typography variant="h4" mb="4">Main Content</Typography>\r
            <Typography color="gray.dark">\r
              This is the main content area that takes up the remaining space.\r
            </Typography>\r
          </Box>\r
        </Flex>\r
      </div>\r
    </div>
}`,...(J=(H=x.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var N,P,z;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
      <div>\r
        <Typography variant="h3" mb="4">Inline Flex</Typography>\r
        <div style={{
        background: '#333',
        padding: '1rem',
        borderRadius: '8px'
      }}>\r
          <Typography color="white" mb="2">Inline flex containers:</Typography>\r
          <Flex inline gap="2" align="center">\r
            <FlexItem p="2" minWidth="auto">Inline 1</FlexItem>\r
            <FlexItem bg="purple" p="2" minWidth="auto">Inline 2</FlexItem>\r
          </Flex>\r
          <span style={{
          color: 'white',
          margin: '0 1rem'
        }}>Some text after</span>\r
          <Flex inline gap="2" align="center">\r
            <FlexItem bg="gray" p="2" minWidth="auto">Another</FlexItem>\r
            <FlexItem p="2" minWidth="auto">Group</FlexItem>\r
          </Flex>\r
        </div>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="4">Different Gap Sizes</Typography>\r
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>\r
          <div>\r
            <Typography variant="body" mb="2">Gap: 1 (4px)</Typography>\r
            <Flex gap="1" bg="dark" p="4" borderRadius="md">\r
              <FlexItem minWidth="auto" p="2">Item 1</FlexItem>\r
              <FlexItem bg="purple" minWidth="auto" p="2">Item 2</FlexItem>\r
              <FlexItem bg="gray" minWidth="auto" p="2">Item 3</FlexItem>\r
            </Flex>\r
          </div>\r
          \r
          <div>\r
            <Typography variant="body" mb="2">Gap: 4 (16px)</Typography>\r
            <Flex gap="4" bg="dark" p="4" borderRadius="md">\r
              <FlexItem minWidth="auto" p="2">Item 1</FlexItem>\r
              <FlexItem bg="purple" minWidth="auto" p="2">Item 2</FlexItem>\r
              <FlexItem bg="gray" minWidth="auto" p="2">Item 3</FlexItem>\r
            </Flex>\r
          </div>\r
          \r
          <div>\r
            <Typography variant="body" mb="2">Gap: 8 (32px)</Typography>\r
            <Flex gap="8" bg="dark" p="4" borderRadius="md">\r
              <FlexItem minWidth="auto" p="2">Item 1</FlexItem>\r
              <FlexItem bg="purple" minWidth="auto" p="2">Item 2</FlexItem>\r
              <FlexItem bg="gray" minWidth="auto" p="2">Item 3</FlexItem>\r
            </Flex>\r
          </div>\r
        </div>\r
      </div>\r
    </div>
}`,...(z=(P=h.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};const Z=["Basic","Direction","Justification","Alignment","CenterConvenience","Wrapping","Responsive","CommonLayouts","InlineAndGaps"];export{p as Alignment,l as Basic,s as CenterConvenience,x as CommonLayouts,d as Direction,h as InlineAndGaps,n as Justification,o as Responsive,m as Wrapping,Z as __namedExportsOrder,Y as default};
