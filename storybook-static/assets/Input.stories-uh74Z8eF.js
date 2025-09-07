import{j as e}from"./jsx-runtime-CDt2p4po.js";import{I as r}from"./Input-MGX9Of0E.js";import"./index-GiUgBvb1.js";import"./styled-components.browser.esm-Byilhkxn.js";import"./propFilters-BGSNtaQt.js";const R={title:"UI/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","filled","outline"]},size:{control:{type:"select"},options:["sm","md","lg"]},error:{control:{type:"boolean"}},fullWidth:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},a={args:{placeholder:"Enter text...",variant:"default",size:"md"}},t={args:{label:"Email Address",placeholder:"Enter your email",type:"email"}},l={args:{label:"Username",placeholder:"Enter username",helperText:"Must be at least 3 characters long"}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx(r,{variant:"default",placeholder:"Default variant"}),e.jsx(r,{variant:"filled",placeholder:"Filled variant"}),e.jsx(r,{variant:"outline",placeholder:"Outline variant"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx(r,{size:"sm",placeholder:"Small input"}),e.jsx(r,{size:"md",placeholder:"Medium input"}),e.jsx(r,{size:"lg",placeholder:"Large input"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx(r,{placeholder:"Normal state"}),e.jsx(r,{placeholder:"Disabled state",disabled:!0}),e.jsx(r,{placeholder:"Error state",error:!0,errorText:"This field is required"})]})},p={args:{label:"Password",type:"password",placeholder:"Enter password",error:!0,errorText:"Password must be at least 8 characters"}},d={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{label:"Full Width Input",placeholder:"This input takes full width",fullWidth:!0,helperText:"This input spans the full container width"})})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx(r,{type:"text",placeholder:"Text input",label:"Text"}),e.jsx(r,{type:"email",placeholder:"Email input",label:"Email"}),e.jsx(r,{type:"password",placeholder:"Password input",label:"Password"}),e.jsx(r,{type:"number",placeholder:"Number input",label:"Number"}),e.jsx(r,{type:"search",placeholder:"Search input",label:"Search"})]})};var c,u,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    variant: 'default',
    size: 'md'
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var h,x,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email'
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,b,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    helperText: 'Must be at least 3 characters long'
  }
}`,...(g=(b=l.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var v,w,T;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>\r
      <Input variant="default" placeholder="Default variant" />\r
      <Input variant="filled" placeholder="Filled variant" />\r
      <Input variant="outline" placeholder="Outline variant" />\r
    </div>
}`,...(T=(w=s.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var j,I,S;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>\r
      <Input size="sm" placeholder="Small input" />\r
      <Input size="md" placeholder="Medium input" />\r
      <Input size="lg" placeholder="Large input" />\r
    </div>
}`,...(S=(I=o.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var E,D,z;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>\r
      <Input placeholder="Normal state" />\r
      <Input placeholder="Disabled state" disabled />\r
      <Input placeholder="Error state" error errorText="This field is required" />\r
    </div>
}`,...(z=(D=i.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var W,P,F;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    error: true,
    errorText: 'Password must be at least 8 characters'
  }
}`,...(F=(P=p.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var N,L,M;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>\r
      <Input label="Full Width Input" placeholder="This input takes full width" fullWidth helperText="This input spans the full container width" />\r
    </div>
}`,...(M=(L=d.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var O,U,k;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>\r
      <Input type="text" placeholder="Text input" label="Text" />\r
      <Input type="email" placeholder="Email input" label="Email" />\r
      <Input type="password" placeholder="Password input" label="Password" />\r
      <Input type="number" placeholder="Number input" label="Number" />\r
      <Input type="search" placeholder="Search input" label="Search" />\r
    </div>
}`,...(k=(U=n.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};const B=["Default","WithLabel","WithHelperText","Variants","Sizes","States","ErrorState","FullWidth","Types"];export{a as Default,p as ErrorState,d as FullWidth,o as Sizes,i as States,n as Types,s as Variants,l as WithHelperText,t as WithLabel,B as __namedExportsOrder,R as default};
