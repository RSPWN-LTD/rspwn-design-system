import{j as r}from"./jsx-runtime-CDt2p4po.js";import{B as e}from"./Button-BiPpMuqh.js";import"./index-GiUgBvb1.js";import"./styled-components.browser.esm-Byilhkxn.js";import"./propFilters-BGSNtaQt.js";const F={title:"UI/Button",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline","ghost","danger"]},size:{control:{type:"select"},options:["sm","md","lg"]},fullWidth:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},loading:{control:{type:"boolean"}}}},t={args:{children:"Button",variant:"primary",size:"md"}},a={render:()=>r.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"outline",children:"Outline"}),r.jsx(e,{variant:"ghost",children:"Ghost"}),r.jsx(e,{variant:"danger",children:"Danger"})]})},n={render:()=>r.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[r.jsx(e,{size:"sm",children:"Small"}),r.jsx(e,{size:"md",children:"Medium"}),r.jsx(e,{size:"lg",children:"Large"})]})},s={render:()=>r.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[r.jsx(e,{children:"Normal"}),r.jsx(e,{disabled:!0,children:"Disabled"}),r.jsx(e,{loading:!0,children:"Loading"})]})},o={render:()=>r.jsx("div",{style:{width:"300px"},children:r.jsx(e,{fullWidth:!0,children:"Full Width Button"})})},i={args:{children:"Click me!",onClick:()=>alert("Button clicked!")}};var l,d,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md'
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>\r
      <Button variant="primary">Primary</Button>\r
      <Button variant="secondary">Secondary</Button>\r
      <Button variant="outline">Outline</Button>\r
      <Button variant="ghost">Ghost</Button>\r
      <Button variant="danger">Danger</Button>\r
    </div>
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,h,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
      <Button size="sm">Small</Button>\r
      <Button size="md">Medium</Button>\r
      <Button size="lg">Large</Button>\r
    </div>
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var B,x,v;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>\r
      <Button>Normal</Button>\r
      <Button disabled>Disabled</Button>\r
      <Button loading>Loading</Button>\r
    </div>
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var f,j,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>\r
      <Button fullWidth>Full Width Button</Button>\r
    </div>
}`,...(S=(j=o.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var z,W,b;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Click me!',
    onClick: () => alert('Button clicked!')
  }
}`,...(b=(W=i.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};const L=["Default","Variants","Sizes","States","FullWidth","Interactive"];export{t as Default,o as FullWidth,i as Interactive,n as Sizes,s as States,a as Variants,L as __namedExportsOrder,F as default};
