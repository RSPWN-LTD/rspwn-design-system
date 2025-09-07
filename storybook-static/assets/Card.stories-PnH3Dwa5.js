import{j as r}from"./jsx-runtime-CDt2p4po.js";import{C as e}from"./Card-DLqRvD42.js";import{T as a}from"./Typography-u4LxpgYF.js";import{B as C}from"./Button-B5_6KITS.js";import"./index-GiUgBvb1.js";import"./styled-components.browser.esm-Byilhkxn.js";import"./Box-COihqxSe.js";import"./propFilters-BGSNtaQt.js";const H={title:"UI/Card",component:e,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","elevated","outlined","filled"]},hoverable:{control:{type:"boolean"}},clickable:{control:{type:"boolean"}}}},t={args:{children:r.jsxs("div",{children:[r.jsx(a,{variant:"h4",style:{marginBottom:"1rem"},children:"Card Title"}),r.jsx(a,{variant:"body2",color:"secondary",children:"This is a default card with some sample content. Cards are flexible containers that can hold any content."})]}),variant:"default"}},o={render:()=>r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"1rem"},children:[r.jsxs(e,{variant:"default",children:[r.jsx(a,{variant:"h5",style:{marginBottom:"0.5rem"},children:"Default"}),r.jsx(a,{variant:"body2",color:"secondary",children:"Default card with subtle shadow"})]}),r.jsxs(e,{variant:"elevated",children:[r.jsx(a,{variant:"h5",style:{marginBottom:"0.5rem"},children:"Elevated"}),r.jsx(a,{variant:"body2",color:"secondary",children:"Elevated card with prominent shadow"})]}),r.jsxs(e,{variant:"outlined",children:[r.jsx(a,{variant:"h5",style:{marginBottom:"0.5rem"},children:"Outlined"}),r.jsx(a,{variant:"body2",color:"secondary",children:"Outlined card with border"})]}),r.jsxs(e,{variant:"filled",children:[r.jsx(a,{variant:"h5",style:{marginBottom:"0.5rem"},children:"Filled"}),r.jsx(a,{variant:"body2",color:"secondary",children:"Filled card with background"})]})]})},n={render:()=>r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"1rem"},children:[r.jsxs(e,{hoverable:!0,children:[r.jsx(a,{variant:"h5",style:{marginBottom:"0.5rem"},children:"Hoverable"}),r.jsx(a,{variant:"body2",color:"secondary",children:"This card has hover effects"})]}),r.jsxs(e,{clickable:!0,onClick:()=>alert("Card clicked!"),children:[r.jsx(a,{variant:"h5",style:{marginBottom:"0.5rem"},children:"Clickable"}),r.jsx(a,{variant:"body2",color:"secondary",children:"This card is clickable"})]})]})},d={render:()=>r.jsxs(e,{style:{maxWidth:"400px"},children:[r.jsx(e.Header,{p:"6",pb:"4",children:r.jsx(a,{variant:"h4",children:"Product Card"})}),r.jsxs(e.Content,{p:"6",py:"4",children:[r.jsx(a,{variant:"body2",color:"secondary",style:{marginBottom:"1rem"},children:"This is a more complex card example with header, content, and footer sections."}),r.jsx(a,{variant:"body2",color:"secondary",children:"You can organize content using the Card.Header, Card.Content, and Card.Footer components."})]}),r.jsxs(e.Footer,{p:"6",pt:"4",display:"flex",justifyContent:"space-between",alignItems:"center",children:[r.jsx(a,{variant:"caption",color:"muted",children:"$99.99"}),r.jsx(C,{size:"sm",children:"Add to Cart"})]})]})};var i,s,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,p,y;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(p=o.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var h,m,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var v,u,x;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(u=d.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const D=["Default","Variants","Interactive","WithContent"];export{t as Default,n as Interactive,o as Variants,d as WithContent,D as __namedExportsOrder,H as default};
