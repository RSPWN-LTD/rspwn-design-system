import{j as r}from"./jsx-runtime-CDt2p4po.js";import{D as n}from"./Divider-CjVmphoG.js";import{B as o}from"./Box-COihqxSe.js";import{T as e}from"./Typography-u4LxpgYF.js";import"./index-GiUgBvb1.js";import"./styled-components.browser.esm-Byilhkxn.js";import"./propFilters-BGSNtaQt.js";const Q={title:"Foundation/Divider",component:n,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},thickness:{control:{type:"select"},options:["thin","medium","thick"]},color:{control:{type:"select"},options:["light","medium","dark"]},style:{control:{type:"select"},options:["solid","dashed","dotted"]},labelPosition:{control:{type:"select"},options:["left","center","right"]}}},i={args:{orientation:"horizontal",thickness:"thin",color:"light"},render:y=>r.jsxs(o,{p:"md",children:[r.jsx(e,{variant:"body",mb:"md",children:"Content above divider"}),r.jsx(n,{...y}),r.jsx(e,{variant:"body",mt:"md",children:"Content below divider"})]})},a={args:{orientation:"vertical",thickness:"thin",color:"light",length:"100px"},render:y=>r.jsxs(o,{display:"flex",alignItems:"center",gap:"md",p:"md",height:"120px",children:[r.jsx(e,{variant:"body",children:"Left content"}),r.jsx(n,{...y}),r.jsx(e,{variant:"body",children:"Right content"})]})},t={render:()=>r.jsxs(o,{p:"md",children:[r.jsx(e,{variant:"body",mb:"md",children:"Section above"}),r.jsx(n,{label:"OR"}),r.jsx(e,{variant:"body",mt:"md",children:"Section below"})]})},s={render:()=>r.jsxs(o,{p:"md",display:"flex",flexDirection:"column",gap:"xl",children:[r.jsxs("div",{children:[r.jsx(e,{variant:"body",mb:"md",children:"Left positioned label"}),r.jsx(n,{label:"Left",labelPosition:"left"}),r.jsx(e,{variant:"body",mt:"md",children:"Content below"})]}),r.jsxs("div",{children:[r.jsx(e,{variant:"body",mb:"md",children:"Center positioned label"}),r.jsx(n,{label:"Center",labelPosition:"center"}),r.jsx(e,{variant:"body",mt:"md",children:"Content below"})]}),r.jsxs("div",{children:[r.jsx(e,{variant:"body",mb:"md",children:"Right positioned label"}),r.jsx(n,{label:"Right",labelPosition:"right"}),r.jsx(e,{variant:"body",mt:"md",children:"Content below"})]})]})},l={render:()=>r.jsxs(o,{p:"md",display:"flex",flexDirection:"column",gap:"lg",children:[r.jsxs("div",{children:[r.jsx(e,{variant:"small",mb:"sm",color:"gray",children:"Thin (1px)"}),r.jsx(n,{thickness:"thin"})]}),r.jsxs("div",{children:[r.jsx(e,{variant:"small",mb:"sm",color:"gray",children:"Medium (2px)"}),r.jsx(n,{thickness:"medium"})]}),r.jsxs("div",{children:[r.jsx(e,{variant:"small",mb:"sm",color:"gray",children:"Thick (4px)"}),r.jsx(n,{thickness:"thick"})]})]})},d={render:()=>r.jsxs(o,{p:"md",display:"flex",flexDirection:"column",gap:"lg",children:[r.jsxs("div",{children:[r.jsx(e,{variant:"small",mb:"sm",color:"gray",children:"Light"}),r.jsx(n,{color:"light"})]}),r.jsxs("div",{children:[r.jsx(e,{variant:"small",mb:"sm",color:"gray",children:"Medium"}),r.jsx(n,{color:"medium"})]}),r.jsxs("div",{children:[r.jsx(e,{variant:"small",mb:"sm",color:"gray",children:"Dark"}),r.jsx(n,{color:"dark"})]})]})},c={render:()=>r.jsxs(o,{p:"md",display:"flex",flexDirection:"column",gap:"lg",children:[r.jsxs("div",{children:[r.jsx(e,{variant:"small",mb:"sm",color:"gray",children:"Solid"}),r.jsx(n,{style:"solid",thickness:"medium"})]}),r.jsxs("div",{children:[r.jsx(e,{variant:"small",mb:"sm",color:"gray",children:"Dashed"}),r.jsx(n,{style:"dashed",thickness:"medium"})]}),r.jsxs("div",{children:[r.jsx(e,{variant:"small",mb:"sm",color:"gray",children:"Dotted"}),r.jsx(n,{style:"dotted",thickness:"thick"})]})]})},p={render:()=>r.jsxs(o,{p:"md",children:[r.jsx(e,{variant:"body",children:"Content with no margin"}),r.jsx(n,{}),r.jsx(e,{variant:"body",children:"More content"}),r.jsxs(o,{mt:"xl",children:[r.jsx(e,{variant:"body",children:"Content with medium margin"}),r.jsx(n,{margin:"md"}),r.jsx(e,{variant:"body",children:"More content"})]}),r.jsxs(o,{mt:"xl",children:[r.jsx(e,{variant:"body",children:"Content with large margin"}),r.jsx(n,{margin:"xl"}),r.jsx(e,{variant:"body",children:"More content"})]})]})},m={render:()=>r.jsxs(o,{display:"flex",alignItems:"center",gap:"md",p:"md",children:[r.jsx(o,{height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:r.jsx(e,{variant:"body",children:"Tall content on left"})}),r.jsx(n,{orientation:"vertical",length:"200px"}),r.jsx(o,{height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:r.jsx(e,{variant:"body",children:"Tall content on right"})})]})};var h,g,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,b,j;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(b=a.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var T,u,f;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Box p="md">\r
      <Typography variant="body" mb="md">Section above</Typography>\r
      <Divider label="OR" />\r
      <Typography variant="body" mt="md">Section below</Typography>\r
    </Box>
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var D,k,B;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(B=(k=s.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var C,S,w;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var L,M,P;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var R,I,W;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(W=(I=c.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var z,H,V;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(V=(H=p.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var O,E,_;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(_=(E=m.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};const U=["Horizontal","Vertical","WithLabel","LabelPositions","Thickness","Colors","Styles","WithSpacing","VerticalWithHeight"];export{d as Colors,i as Horizontal,s as LabelPositions,c as Styles,l as Thickness,a as Vertical,m as VerticalWithHeight,t as WithLabel,p as WithSpacing,U as __namedExportsOrder,Q as default};
