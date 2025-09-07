import{j as r}from"./jsx-runtime-CDt2p4po.js";import{G as a,a as t}from"./Grid-BbcBGEjG.js";import{B as i}from"./Box-COihqxSe.js";import{T as e}from"./Typography-u4LxpgYF.js";import{C as gr}from"./Card-DLqRvD42.js";import"./index-GiUgBvb1.js";import"./styled-components.browser.esm-Byilhkxn.js";import"./propFilters-BGSNtaQt.js";const Ir={title:"Foundation/Grid",component:a,parameters:{layout:"padded",docs:{description:{component:`
The Grid component provides a powerful CSS Grid implementation with advanced layout patterns and responsive controls.

## Features

- **CSS Grid Foundation**: Full CSS Grid support with columns, rows, and gap control
- **Responsive Design**: Breakpoint-specific grid configurations
- **Named Grid Areas**: Define layout areas for complex designs
- **Predefined Patterns**: Ready-to-use layouts (holy-grail, sidebar, dashboard, etc.)
- **Masonry Layouts**: Pinterest-style grid layouts
- **Auto-sizing**: Auto-fit and auto-fill column behaviors
- **Grid Items**: GridItem component for precise positioning and spanning

## Best Practices

- Use named areas for complex layouts
- Leverage predefined patterns for common designs
- Combine with responsive props for mobile-first design
- Use GridItem for precise control over positioning
        `}}},tags:["autodocs"],argTypes:{columns:{description:"Number of columns or CSS Grid template",control:{type:"text"}},rows:{description:"Number of rows or CSS Grid template",control:{type:"text"}},gap:{control:"select",options:[0,1,2,3,4,5,6,8,10,12,16,20,24,32,40,48,56,64],description:"Gap between grid items"},pattern:{control:"select",options:["sidebar","holy-grail","dashboard","cards","masonry"],description:"Predefined grid layout pattern"},areas:{description:"Grid template areas (supports responsive object)",control:{type:"text"}},masonry:{description:"Enable masonry (Pinterest-style) layout",control:"boolean"}}},o=({children:s,...n})=>r.jsx(i,{bg:"dark",p:"md",borderRadius:"sm",display:"flex",alignItems:"center",justifyContent:"center",...n,children:r.jsx("span",{style:{color:"#FFFFFF",fontFamily:"Inter, sans-serif"},children:s})}),d={args:{columns:3,gap:"md"},render:s=>r.jsxs(a,{...s,children:[r.jsx(o,{children:"Item 1"}),r.jsx(o,{children:"Item 2"}),r.jsx(o,{children:"Item 3"}),r.jsx(o,{children:"Item 4"}),r.jsx(o,{children:"Item 5"}),r.jsx(o,{children:"Item 6"})]})},l={render:()=>r.jsxs(a,{columns:1,sm:2,md:3,lg:4,gap:"md",children:[r.jsx(o,{children:"Responsive 1"}),r.jsx(o,{children:"Responsive 2"}),r.jsx(o,{children:"Responsive 3"}),r.jsx(o,{children:"Responsive 4"}),r.jsx(o,{children:"Responsive 5"}),r.jsx(o,{children:"Responsive 6"}),r.jsx(o,{children:"Responsive 7"}),r.jsx(o,{children:"Responsive 8"})]})},h={render:()=>r.jsxs(a,{autoFit:!0,minColumnWidth:"200px",gap:"md",children:[r.jsx(o,{children:"Auto-fit 1"}),r.jsx(o,{children:"Auto-fit 2"}),r.jsx(o,{children:"Auto-fit 3"}),r.jsx(o,{children:"Auto-fit 4"}),r.jsx(o,{children:"Auto-fit 5"})]})},c={render:()=>r.jsxs(a,{autoFill:!0,minColumnWidth:"150px",gap:"sm",children:[r.jsx(o,{children:"Auto-fill 1"}),r.jsx(o,{children:"Auto-fill 2"}),r.jsx(o,{children:"Auto-fill 3"})]})},m={render:()=>r.jsxs(a,{columns:"1fr 2fr 1fr",gap:"md",children:[r.jsx(o,{children:"Sidebar"}),r.jsx(o,{children:"Main Content"}),r.jsx(o,{children:"Sidebar"})]})},p={render:()=>r.jsxs(a,{columns:3,rows:2,gap:"md",height:"300px",children:[r.jsx(o,{children:"1"}),r.jsx(o,{children:"2"}),r.jsx(o,{children:"3"}),r.jsx(o,{children:"4"}),r.jsx(o,{children:"5"}),r.jsx(o,{children:"6"})]})},g={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[r.jsxs("div",{children:[r.jsx("h3",{style:{color:"#FFFFFF",marginBottom:"1rem",fontFamily:"Inter, sans-serif"},children:"Small Gap"}),r.jsxs(a,{columns:3,gap:"xs",children:[r.jsx(o,{children:"1"}),r.jsx(o,{children:"2"}),r.jsx(o,{children:"3"})]})]}),r.jsxs("div",{children:[r.jsx("h3",{style:{color:"#FFFFFF",marginBottom:"1rem",fontFamily:"Inter, sans-serif"},children:"Medium Gap"}),r.jsxs(a,{columns:3,gap:"md",children:[r.jsx(o,{children:"1"}),r.jsx(o,{children:"2"}),r.jsx(o,{children:"3"})]})]}),r.jsxs("div",{children:[r.jsx("h3",{style:{color:"#FFFFFF",marginBottom:"1rem",fontFamily:"Inter, sans-serif"},children:"Large Gap"}),r.jsxs(a,{columns:3,gap:"xl",children:[r.jsx(o,{children:"1"}),r.jsx(o,{children:"2"}),r.jsx(o,{children:"3"})]})]})]})},y={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[r.jsxs("div",{children:[r.jsx("h3",{style:{color:"#FFFFFF",marginBottom:"1rem",fontFamily:"Inter, sans-serif"},children:"Center Items"}),r.jsxs(a,{columns:3,gap:"md",height:"200px",justifyItems:"center",alignItems:"center",style:{border:"1px solid #4A4A4A"},children:[r.jsx(o,{children:"Center"}),r.jsx(o,{children:"Center"}),r.jsx(o,{children:"Center"})]})]}),r.jsxs("div",{children:[r.jsx("h3",{style:{color:"#FFFFFF",marginBottom:"1rem",fontFamily:"Inter, sans-serif"},children:"Stretch Items"}),r.jsxs(a,{columns:3,gap:"md",height:"200px",justifyItems:"stretch",alignItems:"stretch",style:{border:"1px solid #4A4A4A"},children:[r.jsx(o,{children:"Stretch"}),r.jsx(o,{children:"Stretch"}),r.jsx(o,{children:"Stretch"})]})]})]})},x={render:()=>r.jsxs(a,{areas:`
        "header header header"
        "sidebar main aside"
        "footer footer footer"
      `,columns:"200px 1fr 200px",rows:"auto 1fr auto",gap:"4",minHeight:"400px",style:{border:"1px solid #333"},children:[r.jsx(t,{area:"header",children:r.jsx(i,{bg:"innovation.primaryBlue",p:"4",borderRadius:"sm",children:r.jsx(e,{color:"white",align:"center",fontWeight:"medium",children:"Header Area"})})}),r.jsx(t,{area:"sidebar",children:r.jsx(i,{bg:"gray.dark",p:"4",borderRadius:"sm",height:"100%",children:r.jsx(e,{color:"white",align:"center",children:"Sidebar"})})}),r.jsx(t,{area:"main",children:r.jsx(i,{bg:"gray.base",p:"6",borderRadius:"sm",height:"100%",children:r.jsxs(e,{color:"white",align:"center",children:["Main Content Area",r.jsx("br",{}),"This area expands to fill available space"]})})}),r.jsx(t,{area:"aside",children:r.jsx(i,{bg:"gray.dark",p:"4",borderRadius:"sm",height:"100%",children:r.jsx(e,{color:"white",align:"center",children:"Aside"})})}),r.jsx(t,{area:"footer",children:r.jsx(i,{bg:"innovation.primaryBlue",p:"4",borderRadius:"sm",children:r.jsx(e,{color:"white",align:"center",fontWeight:"medium",children:"Footer Area"})})})]})},u={render:()=>r.jsxs(a,{areas:{xs:`
          "header"
          "main"
          "sidebar"
          "aside"
          "footer"
        `,md:`
          "header header"
          "sidebar main"
          "aside main"
          "footer footer"
        `,lg:`
          "header header header"
          "sidebar main aside"
          "footer footer footer"
        `},columns:{xs:"1fr",md:"200px 1fr",lg:"200px 1fr 200px"},rows:{xs:"repeat(5, auto)",md:"auto 1fr auto auto",lg:"auto 1fr auto"},gap:"4",minHeight:"500px",style:{border:"1px solid #333"},children:[r.jsx(t,{area:"header",children:r.jsx(i,{bg:"innovation.primaryBlue",p:"4",borderRadius:"sm",children:r.jsx(e,{color:"white",align:"center",fontWeight:"medium",children:"Responsive Header"})})}),r.jsx(t,{area:"sidebar",children:r.jsx(i,{bg:"gray.dark",p:"4",borderRadius:"sm",height:"100%",children:r.jsxs(e,{color:"white",align:"center",fontSize:"sm",children:["Sidebar",r.jsx("br",{}),"(Stacks on mobile)"]})})}),r.jsx(t,{area:"main",children:r.jsx(i,{bg:"gray.base",p:"6",borderRadius:"sm",height:"100%",children:r.jsxs(e,{color:"white",align:"center",children:["Main Content",r.jsx("br",{}),"Responsive layout changes at md and lg breakpoints"]})})}),r.jsx(t,{area:"aside",children:r.jsx(i,{bg:"gray.dark",p:"4",borderRadius:"sm",height:"100%",children:r.jsxs(e,{color:"white",align:"center",fontSize:"sm",children:["Aside",r.jsx("br",{}),"(Moves around)"]})})}),r.jsx(t,{area:"footer",children:r.jsx(i,{bg:"innovation.primaryBlue",p:"4",borderRadius:"sm",children:r.jsx(e,{color:"white",align:"center",fontWeight:"medium",children:"Responsive Footer"})})})]})},b={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"3rem"},children:[r.jsxs("div",{children:[r.jsx(e,{variant:"h4",marginBottom:"4",color:"white",children:"Holy Grail Layout"}),r.jsxs(a,{pattern:"holy-grail",gap:"4",minHeight:"300px",style:{border:"1px solid #333"},children:[r.jsx(t,{area:"header",children:r.jsx(i,{bg:"innovation.primaryBlue",p:"4",borderRadius:"sm",children:r.jsx(e,{color:"white",align:"center",children:"Header"})})}),r.jsx(t,{area:"nav",children:r.jsx(i,{bg:"gray.dark",p:"4",borderRadius:"sm",height:"100%",children:r.jsx(e,{color:"white",align:"center",children:"Navigation"})})}),r.jsx(t,{area:"main",children:r.jsx(i,{bg:"gray.base",p:"6",borderRadius:"sm",height:"100%",children:r.jsx(e,{color:"white",align:"center",children:"Main Content"})})}),r.jsx(t,{area:"aside",children:r.jsx(i,{bg:"gray.dark",p:"4",borderRadius:"sm",height:"100%",children:r.jsx(e,{color:"white",align:"center",children:"Aside"})})}),r.jsx(t,{area:"footer",children:r.jsx(i,{bg:"innovation.primaryBlue",p:"4",borderRadius:"sm",children:r.jsx(e,{color:"white",align:"center",children:"Footer"})})})]})]}),r.jsxs("div",{children:[r.jsx(e,{variant:"h4",marginBottom:"4",color:"white",children:"Sidebar Layout"}),r.jsxs(a,{pattern:"sidebar",gap:"4",minHeight:"200px",style:{border:"1px solid #333"},children:[r.jsx(t,{area:"sidebar",children:r.jsx(i,{bg:"gray.dark",p:"4",borderRadius:"sm",height:"100%",children:r.jsx(e,{color:"white",align:"center",children:"Sidebar"})})}),r.jsx(t,{area:"main",children:r.jsx(i,{bg:"gray.base",p:"6",borderRadius:"sm",height:"100%",children:r.jsx(e,{color:"white",align:"center",children:"Main Content"})})})]})]}),r.jsxs("div",{children:[r.jsx(e,{variant:"h4",marginBottom:"4",color:"white",children:"Dashboard Layout"}),r.jsxs(a,{pattern:"dashboard",gap:"4",minHeight:"250px",style:{border:"1px solid #333"},children:[r.jsx(t,{area:"header",children:r.jsx(i,{bg:"innovation.primaryBlue",p:"4",borderRadius:"sm",children:r.jsx(e,{color:"white",align:"center",children:"Dashboard Header"})})}),r.jsx(t,{area:"sidebar",children:r.jsx(i,{bg:"gray.dark",p:"4",borderRadius:"sm",height:"100%",children:r.jsx(e,{color:"white",align:"center",children:"Menu"})})}),r.jsx(t,{area:"main",children:r.jsx(i,{bg:"gray.base",p:"6",borderRadius:"sm",height:"100%",children:r.jsx(e,{color:"white",align:"center",children:"Dashboard Content"})})})]})]})]})},j={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[r.jsxs("div",{children:[r.jsx(e,{variant:"h4",marginBottom:"4",color:"white",children:"Column & Row Spanning"}),r.jsxs(a,{columns:4,rows:3,gap:"4",style:{border:"1px solid #333"},children:[r.jsx(t,{columnSpan:2,rowSpan:2,children:r.jsx(i,{bg:"innovation.primaryBlue",p:"4",borderRadius:"sm",height:"100%",children:r.jsxs(e,{color:"white",align:"center",children:["Spans 2 columns",r.jsx("br",{}),"& 2 rows"]})})}),r.jsx(t,{children:r.jsx(i,{bg:"gray.dark",p:"4",borderRadius:"sm",height:"100%",children:r.jsx(e,{color:"white",align:"center",children:"1"})})}),r.jsx(t,{children:r.jsx(i,{bg:"gray.dark",p:"4",borderRadius:"sm",height:"100%",children:r.jsx(e,{color:"white",align:"center",children:"2"})})}),r.jsx(t,{children:r.jsx(i,{bg:"gray.dark",p:"4",borderRadius:"sm",height:"100%",children:r.jsx(e,{color:"white",align:"center",children:"3"})})}),r.jsx(t,{children:r.jsx(i,{bg:"gray.dark",p:"4",borderRadius:"sm",height:"100%",children:r.jsx(e,{color:"white",align:"center",children:"4"})})}),r.jsx(t,{columnSpan:2,children:r.jsx(i,{bg:"innovation.secondaryPurple",p:"4",borderRadius:"sm",height:"100%",children:r.jsx(e,{color:"white",align:"center",children:"Spans 2 columns"})})}),r.jsx(t,{children:r.jsx(i,{bg:"gray.dark",p:"4",borderRadius:"sm",height:"100%",children:r.jsx(e,{color:"white",align:"center",children:"5"})})})]})]}),r.jsxs("div",{children:[r.jsx(e,{variant:"h4",marginBottom:"4",color:"white",children:"Precise Grid Positioning"}),r.jsxs(a,{columns:4,rows:4,gap:"4",style:{border:"1px solid #333"},children:[r.jsx(t,{columnStart:1,columnEnd:3,rowStart:1,rowEnd:2,children:r.jsx(i,{bg:"innovation.primaryBlue",p:"4",borderRadius:"sm",height:"100%",children:r.jsx(e,{color:"white",align:"center",children:"Col 1-3, Row 1"})})}),r.jsx(t,{columnStart:3,columnEnd:5,rowStart:1,rowEnd:3,children:r.jsx(i,{bg:"innovation.secondaryPurple",p:"4",borderRadius:"sm",height:"100%",children:r.jsx(e,{color:"white",align:"center",children:"Col 3-5, Row 1-3"})})}),r.jsx(t,{columnStart:1,columnEnd:2,rowStart:2,rowEnd:4,children:r.jsx(i,{bg:"semantic.success",p:"4",borderRadius:"sm",height:"100%",children:r.jsx(e,{color:"white",align:"center",children:"Col 1, Row 2-4"})})}),r.jsx(t,{columnStart:2,columnEnd:3,rowStart:2,rowEnd:3,children:r.jsx(i,{bg:"gray.dark",p:"4",borderRadius:"sm",height:"100%",children:r.jsx(e,{color:"white",align:"center",children:"2,2"})})})]})]})]})},G={render:()=>r.jsxs("div",{children:[r.jsx(e,{variant:"h4",marginBottom:"4",color:"white",children:"Masonry Layout (Pinterest-style)"}),r.jsx(a,{masonry:!0,columns:{xs:1,sm:2,md:3,lg:4},gap:"4",children:Array.from({length:12},(s,n)=>r.jsxs(gr,{padding:"4",children:[r.jsx(i,{height:`${120+n%4*60}px`,bg:"gray.dark",borderRadius:"sm",marginBottom:"3",children:r.jsx(i,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",children:r.jsxs(e,{color:"white",children:["Image ",n+1]})})}),r.jsxs(e,{variant:"body2",marginBottom:"2",children:["Card ",n+1]}),r.jsx(e,{variant:"caption",color:"muted",children:n%3===0?"Short content here.":n%3===1?"Medium length content that takes up more space and demonstrates varying heights.":"Long content that really shows how masonry layouts handle different content lengths gracefully, creating a Pinterest-like experience."})]},n))})]})},f={render:()=>r.jsx(a,{responsive:{xs:{columns:1,gap:2},sm:{columns:2,gap:4},md:{columns:3,gap:6},lg:{columns:4,gap:8}},style:{border:"1px solid #333"},children:Array.from({length:8},(s,n)=>r.jsx(t,{children:r.jsx(i,{bg:"gray.dark",p:"4",borderRadius:"sm",children:r.jsxs(e,{color:"white",align:"center",children:["Responsive ",n+1]})})},n))})},S={render:()=>r.jsxs("div",{children:[r.jsx(e,{variant:"h4",marginBottom:"4",color:"white",children:"Dashboard Layout Example"}),r.jsxs(a,{areas:`
          "header header header header"
          "sidebar stats stats stats"
          "sidebar chart chart metrics"
          "sidebar recent recent metrics"
        `,columns:"200px 1fr 1fr 200px",rows:"auto auto 1fr auto",gap:"4",minHeight:"600px",style:{border:"1px solid #333"},children:[r.jsx(t,{area:"header",children:r.jsx(i,{bg:"innovation.primaryBlue",p:"4",borderRadius:"sm",children:r.jsx(e,{color:"white",variant:"h5",align:"center",children:"Gaming Dashboard"})})}),r.jsx(t,{area:"sidebar",children:r.jsxs(i,{bg:"gray.dark",p:"4",borderRadius:"sm",height:"100%",children:[r.jsx(e,{color:"white",variant:"h6",marginBottom:"4",children:"Navigation"}),r.jsxs(i,{display:"flex",flexDirection:"column",gap:"2",children:[r.jsx(e,{color:"gray.light",fontSize:"sm",children:"Overview"}),r.jsx(e,{color:"gray.light",fontSize:"sm",children:"Players"}),r.jsx(e,{color:"gray.light",fontSize:"sm",children:"Games"}),r.jsx(e,{color:"gray.light",fontSize:"sm",children:"Analytics"}),r.jsx(e,{color:"gray.light",fontSize:"sm",children:"Settings"})]})]})}),r.jsx(t,{area:"stats",children:r.jsxs(i,{bg:"gray.base",p:"4",borderRadius:"sm",height:"100%",children:[r.jsx(e,{color:"white",variant:"h6",marginBottom:"4",children:"Key Stats"}),r.jsxs(a,{columns:3,gap:"3",children:[r.jsxs(i,{bg:"innovation.primaryBlue",p:"3",borderRadius:"sm",children:[r.jsx(e,{color:"white",fontSize:"lg",fontWeight:"bold",children:"1.2K"}),r.jsx(e,{color:"gray.light",fontSize:"sm",children:"Active Players"})]}),r.jsxs(i,{bg:"semantic.success",p:"3",borderRadius:"sm",children:[r.jsx(e,{color:"white",fontSize:"lg",fontWeight:"bold",children:"87%"}),r.jsx(e,{color:"gray.light",fontSize:"sm",children:"Uptime"})]}),r.jsxs(i,{bg:"innovation.secondaryPurple",p:"3",borderRadius:"sm",children:[r.jsx(e,{color:"white",fontSize:"lg",fontWeight:"bold",children:"15"}),r.jsx(e,{color:"gray.light",fontSize:"sm",children:"Live Games"})]})]})]})}),r.jsx(t,{area:"chart",children:r.jsxs(i,{bg:"gray.base",p:"4",borderRadius:"sm",height:"100%",children:[r.jsx(e,{color:"white",variant:"h6",marginBottom:"4",children:"Performance Chart"}),r.jsx(i,{bg:"gray.dark",borderRadius:"sm",height:"200px",display:"flex",alignItems:"center",justifyContent:"center",children:r.jsx(e,{color:"gray.light",children:"Chart visualization"})})]})}),r.jsx(t,{area:"metrics",children:r.jsxs(i,{bg:"gray.dark",p:"4",borderRadius:"sm",height:"100%",children:[r.jsx(e,{color:"white",variant:"h6",marginBottom:"4",children:"Metrics"}),r.jsxs(i,{display:"flex",flexDirection:"column",gap:"3",children:[r.jsxs(i,{children:[r.jsx(e,{color:"white",fontSize:"sm",children:"CPU Usage"}),r.jsx(i,{bg:"gray.base",height:"8px",borderRadius:"full",marginTop:"1",children:r.jsx(i,{bg:"semantic.warning",width:"65%",height:"100%",borderRadius:"full"})})]}),r.jsxs(i,{children:[r.jsx(e,{color:"white",fontSize:"sm",children:"Memory"}),r.jsx(i,{bg:"gray.base",height:"8px",borderRadius:"full",marginTop:"1",children:r.jsx(i,{bg:"innovation.primaryBlue",width:"45%",height:"100%",borderRadius:"full"})})]}),r.jsxs(i,{children:[r.jsx(e,{color:"white",fontSize:"sm",children:"Network"}),r.jsx(i,{bg:"gray.base",height:"8px",borderRadius:"full",marginTop:"1",children:r.jsx(i,{bg:"semantic.success",width:"80%",height:"100%",borderRadius:"full"})})]})]})]})}),r.jsx(t,{area:"recent",children:r.jsxs(i,{bg:"gray.base",p:"4",borderRadius:"sm",height:"100%",children:[r.jsx(e,{color:"white",variant:"h6",marginBottom:"4",children:"Recent Activity"}),r.jsxs(i,{display:"flex",flexDirection:"column",gap:"2",children:[r.jsx(e,{color:"gray.light",fontSize:"sm",children:"• Player joined game #1"}),r.jsx(e,{color:"gray.light",fontSize:"sm",children:"• Server updated to v2.1"}),r.jsx(e,{color:"gray.light",fontSize:"sm",children:"• New tournament started"}),r.jsx(e,{color:"gray.light",fontSize:"sm",children:"• Performance optimized"})]})]})})]})]})};var I,v,B;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    columns: 3,
    gap: 'md'
  },
  render: args => <Grid {...args}>\r
      <StoryGridItem>Item 1</StoryGridItem>\r
      <StoryGridItem>Item 2</StoryGridItem>\r
      <StoryGridItem>Item 3</StoryGridItem>\r
      <StoryGridItem>Item 4</StoryGridItem>\r
      <StoryGridItem>Item 5</StoryGridItem>\r
      <StoryGridItem>Item 6</StoryGridItem>\r
    </Grid>
}`,...(B=(v=d.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var w,T,R;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Grid columns={1} sm={2} md={3} lg={4} gap="md">\r
      <StoryGridItem>Responsive 1</StoryGridItem>\r
      <StoryGridItem>Responsive 2</StoryGridItem>\r
      <StoryGridItem>Responsive 3</StoryGridItem>\r
      <StoryGridItem>Responsive 4</StoryGridItem>\r
      <StoryGridItem>Responsive 5</StoryGridItem>\r
      <StoryGridItem>Responsive 6</StoryGridItem>\r
      <StoryGridItem>Responsive 7</StoryGridItem>\r
      <StoryGridItem>Responsive 8</StoryGridItem>\r
    </Grid>
}`,...(R=(T=l.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var F,A,C;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Grid autoFit minColumnWidth="200px" gap="md">\r
      <StoryGridItem>Auto-fit 1</StoryGridItem>\r
      <StoryGridItem>Auto-fit 2</StoryGridItem>\r
      <StoryGridItem>Auto-fit 3</StoryGridItem>\r
      <StoryGridItem>Auto-fit 4</StoryGridItem>\r
      <StoryGridItem>Auto-fit 5</StoryGridItem>\r
    </Grid>
}`,...(C=(A=h.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var k,z,P;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Grid autoFill minColumnWidth="150px" gap="sm">\r
      <StoryGridItem>Auto-fill 1</StoryGridItem>\r
      <StoryGridItem>Auto-fill 2</StoryGridItem>\r
      <StoryGridItem>Auto-fill 3</StoryGridItem>\r
    </Grid>
}`,...(P=(z=c.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var D,M,E;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Grid columns="1fr 2fr 1fr" gap="md">\r
      <StoryGridItem>Sidebar</StoryGridItem>\r
      <StoryGridItem>Main Content</StoryGridItem>\r
      <StoryGridItem>Sidebar</StoryGridItem>\r
    </Grid>
}`,...(E=(M=m.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var H,L,W;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Grid columns={3} rows={2} gap="md" height="300px">\r
      <StoryGridItem>1</StoryGridItem>\r
      <StoryGridItem>2</StoryGridItem>\r
      <StoryGridItem>3</StoryGridItem>\r
      <StoryGridItem>4</StoryGridItem>\r
      <StoryGridItem>5</StoryGridItem>\r
      <StoryGridItem>6</StoryGridItem>\r
    </Grid>
}`,...(W=(L=p.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var N,U,_;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
      <div>\r
        <h3 style={{
        color: '#FFFFFF',
        marginBottom: '1rem',
        fontFamily: 'Inter, sans-serif'
      }}>Small Gap</h3>\r
        <Grid columns={3} gap="xs">\r
          <StoryGridItem>1</StoryGridItem>\r
          <StoryGridItem>2</StoryGridItem>\r
          <StoryGridItem>3</StoryGridItem>\r
        </Grid>\r
      </div>\r
      \r
      <div>\r
        <h3 style={{
        color: '#FFFFFF',
        marginBottom: '1rem',
        fontFamily: 'Inter, sans-serif'
      }}>Medium Gap</h3>\r
        <Grid columns={3} gap="md">\r
          <StoryGridItem>1</StoryGridItem>\r
          <StoryGridItem>2</StoryGridItem>\r
          <StoryGridItem>3</StoryGridItem>\r
        </Grid>\r
      </div>\r
      \r
      <div>\r
        <h3 style={{
        color: '#FFFFFF',
        marginBottom: '1rem',
        fontFamily: 'Inter, sans-serif'
      }}>Large Gap</h3>\r
        <Grid columns={3} gap="xl">\r
          <StoryGridItem>1</StoryGridItem>\r
          <StoryGridItem>2</StoryGridItem>\r
          <StoryGridItem>3</StoryGridItem>\r
        </Grid>\r
      </div>\r
    </div>
}`,...(_=(U=g.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var K,O,$;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
      <div>\r
        <h3 style={{
        color: '#FFFFFF',
        marginBottom: '1rem',
        fontFamily: 'Inter, sans-serif'
      }}>Center Items</h3>\r
        <Grid columns={3} gap="md" height="200px" justifyItems="center" alignItems="center" style={{
        border: '1px solid #4A4A4A'
      }}>\r
          <StoryGridItem>Center</StoryGridItem>\r
          <StoryGridItem>Center</StoryGridItem>\r
          <StoryGridItem>Center</StoryGridItem>\r
        </Grid>\r
      </div>\r
      \r
      <div>\r
        <h3 style={{
        color: '#FFFFFF',
        marginBottom: '1rem',
        fontFamily: 'Inter, sans-serif'
      }}>Stretch Items</h3>\r
        <Grid columns={3} gap="md" height="200px" justifyItems="stretch" alignItems="stretch" style={{
        border: '1px solid #4A4A4A'
      }}>\r
          <StoryGridItem>Stretch</StoryGridItem>\r
          <StoryGridItem>Stretch</StoryGridItem>\r
          <StoryGridItem>Stretch</StoryGridItem>\r
        </Grid>\r
      </div>\r
    </div>
}`,...($=(O=y.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var q,J,Q;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Grid areas={\`
        "header header header"
        "sidebar main aside"
        "footer footer footer"
      \`} columns="200px 1fr 200px" rows="auto 1fr auto" gap="4" minHeight="400px" style={{
    border: '1px solid #333'
  }}>\r
      <GridItem area="header">\r
        <Box bg="innovation.primaryBlue" p="4" borderRadius="sm">\r
          <Typography color="white" align="center" fontWeight="medium">\r
            Header Area\r
          </Typography>\r
        </Box>\r
      </GridItem>\r
      <GridItem area="sidebar">\r
        <Box bg="gray.dark" p="4" borderRadius="sm" height="100%">\r
          <Typography color="white" align="center">\r
            Sidebar\r
          </Typography>\r
        </Box>\r
      </GridItem>\r
      <GridItem area="main">\r
        <Box bg="gray.base" p="6" borderRadius="sm" height="100%">\r
          <Typography color="white" align="center">\r
            Main Content Area<br />\r
            This area expands to fill available space\r
          </Typography>\r
        </Box>\r
      </GridItem>\r
      <GridItem area="aside">\r
        <Box bg="gray.dark" p="4" borderRadius="sm" height="100%">\r
          <Typography color="white" align="center">\r
            Aside\r
          </Typography>\r
        </Box>\r
      </GridItem>\r
      <GridItem area="footer">\r
        <Box bg="innovation.primaryBlue" p="4" borderRadius="sm">\r
          <Typography color="white" align="center" fontWeight="medium">\r
            Footer Area\r
          </Typography>\r
        </Box>\r
      </GridItem>\r
    </Grid>
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var V,X,Y;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Grid areas={{
    xs: \`
          "header"
          "main"
          "sidebar"
          "aside"
          "footer"
        \`,
    md: \`
          "header header"
          "sidebar main"
          "aside main"
          "footer footer"
        \`,
    lg: \`
          "header header header"
          "sidebar main aside"
          "footer footer footer"
        \`
  }} columns={{
    xs: '1fr',
    md: '200px 1fr',
    lg: '200px 1fr 200px'
  }} rows={{
    xs: 'repeat(5, auto)',
    md: 'auto 1fr auto auto',
    lg: 'auto 1fr auto'
  }} gap="4" minHeight="500px" style={{
    border: '1px solid #333'
  }}>\r
      <GridItem area="header">\r
        <Box bg="innovation.primaryBlue" p="4" borderRadius="sm">\r
          <Typography color="white" align="center" fontWeight="medium">\r
            Responsive Header\r
          </Typography>\r
        </Box>\r
      </GridItem>\r
      <GridItem area="sidebar">\r
        <Box bg="gray.dark" p="4" borderRadius="sm" height="100%">\r
          <Typography color="white" align="center" fontSize="sm">\r
            Sidebar<br />\r
            (Stacks on mobile)\r
          </Typography>\r
        </Box>\r
      </GridItem>\r
      <GridItem area="main">\r
        <Box bg="gray.base" p="6" borderRadius="sm" height="100%">\r
          <Typography color="white" align="center">\r
            Main Content<br />\r
            Responsive layout changes at md and lg breakpoints\r
          </Typography>\r
        </Box>\r
      </GridItem>\r
      <GridItem area="aside">\r
        <Box bg="gray.dark" p="4" borderRadius="sm" height="100%">\r
          <Typography color="white" align="center" fontSize="sm">\r
            Aside<br />\r
            (Moves around)\r
          </Typography>\r
        </Box>\r
      </GridItem>\r
      <GridItem area="footer">\r
        <Box bg="innovation.primaryBlue" p="4" borderRadius="sm">\r
          <Typography color="white" align="center" fontWeight="medium">\r
            Responsive Footer\r
          </Typography>\r
        </Box>\r
      </GridItem>\r
    </Grid>
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,rr,er;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem'
  }}>\r
      {/* Holy Grail Pattern */}\r
      <div>\r
        <Typography variant="h4" marginBottom="4" color="white">Holy Grail Layout</Typography>\r
        <Grid pattern="holy-grail" gap="4" minHeight="300px" style={{
        border: '1px solid #333'
      }}>\r
          <GridItem area="header">\r
            <Box bg="innovation.primaryBlue" p="4" borderRadius="sm">\r
              <Typography color="white" align="center">Header</Typography>\r
            </Box>\r
          </GridItem>\r
          <GridItem area="nav">\r
            <Box bg="gray.dark" p="4" borderRadius="sm" height="100%">\r
              <Typography color="white" align="center">Navigation</Typography>\r
            </Box>\r
          </GridItem>\r
          <GridItem area="main">\r
            <Box bg="gray.base" p="6" borderRadius="sm" height="100%">\r
              <Typography color="white" align="center">Main Content</Typography>\r
            </Box>\r
          </GridItem>\r
          <GridItem area="aside">\r
            <Box bg="gray.dark" p="4" borderRadius="sm" height="100%">\r
              <Typography color="white" align="center">Aside</Typography>\r
            </Box>\r
          </GridItem>\r
          <GridItem area="footer">\r
            <Box bg="innovation.primaryBlue" p="4" borderRadius="sm">\r
              <Typography color="white" align="center">Footer</Typography>\r
            </Box>\r
          </GridItem>\r
        </Grid>\r
      </div>\r
\r
      {/* Sidebar Pattern */}\r
      <div>\r
        <Typography variant="h4" marginBottom="4" color="white">Sidebar Layout</Typography>\r
        <Grid pattern="sidebar" gap="4" minHeight="200px" style={{
        border: '1px solid #333'
      }}>\r
          <GridItem area="sidebar">\r
            <Box bg="gray.dark" p="4" borderRadius="sm" height="100%">\r
              <Typography color="white" align="center">Sidebar</Typography>\r
            </Box>\r
          </GridItem>\r
          <GridItem area="main">\r
            <Box bg="gray.base" p="6" borderRadius="sm" height="100%">\r
              <Typography color="white" align="center">Main Content</Typography>\r
            </Box>\r
          </GridItem>\r
        </Grid>\r
      </div>\r
\r
      {/* Dashboard Pattern */}\r
      <div>\r
        <Typography variant="h4" marginBottom="4" color="white">Dashboard Layout</Typography>\r
        <Grid pattern="dashboard" gap="4" minHeight="250px" style={{
        border: '1px solid #333'
      }}>\r
          <GridItem area="header">\r
            <Box bg="innovation.primaryBlue" p="4" borderRadius="sm">\r
              <Typography color="white" align="center">Dashboard Header</Typography>\r
            </Box>\r
          </GridItem>\r
          <GridItem area="sidebar">\r
            <Box bg="gray.dark" p="4" borderRadius="sm" height="100%">\r
              <Typography color="white" align="center">Menu</Typography>\r
            </Box>\r
          </GridItem>\r
          <GridItem area="main">\r
            <Box bg="gray.base" p="6" borderRadius="sm" height="100%">\r
              <Typography color="white" align="center">Dashboard Content</Typography>\r
            </Box>\r
          </GridItem>\r
        </Grid>\r
      </div>\r
    </div>
}`,...(er=(rr=b.parameters)==null?void 0:rr.docs)==null?void 0:er.source}}};var ir,or,tr;j.parameters={...j.parameters,docs:{...(ir=j.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>\r
      {/* Column and Row Spanning */}\r
      <div>\r
        <Typography variant="h4" marginBottom="4" color="white">Column & Row Spanning</Typography>\r
        <Grid columns={4} rows={3} gap="4" style={{
        border: '1px solid #333'
      }}>\r
          <GridItem columnSpan={2} rowSpan={2}>\r
            <Box bg="innovation.primaryBlue" p="4" borderRadius="sm" height="100%">\r
              <Typography color="white" align="center">\r
                Spans 2 columns<br />& 2 rows\r
              </Typography>\r
            </Box>\r
          </GridItem>\r
          <GridItem>\r
            <Box bg="gray.dark" p="4" borderRadius="sm" height="100%">\r
              <Typography color="white" align="center">1</Typography>\r
            </Box>\r
          </GridItem>\r
          <GridItem>\r
            <Box bg="gray.dark" p="4" borderRadius="sm" height="100%">\r
              <Typography color="white" align="center">2</Typography>\r
            </Box>\r
          </GridItem>\r
          <GridItem>\r
            <Box bg="gray.dark" p="4" borderRadius="sm" height="100%">\r
              <Typography color="white" align="center">3</Typography>\r
            </Box>\r
          </GridItem>\r
          <GridItem>\r
            <Box bg="gray.dark" p="4" borderRadius="sm" height="100%">\r
              <Typography color="white" align="center">4</Typography>\r
            </Box>\r
          </GridItem>\r
          <GridItem columnSpan={2}>\r
            <Box bg="innovation.secondaryPurple" p="4" borderRadius="sm" height="100%">\r
              <Typography color="white" align="center">\r
                Spans 2 columns\r
              </Typography>\r
            </Box>\r
          </GridItem>\r
          <GridItem>\r
            <Box bg="gray.dark" p="4" borderRadius="sm" height="100%">\r
              <Typography color="white" align="center">5</Typography>\r
            </Box>\r
          </GridItem>\r
        </Grid>\r
      </div>\r
\r
      {/* Precise Positioning */}\r
      <div>\r
        <Typography variant="h4" marginBottom="4" color="white">Precise Grid Positioning</Typography>\r
        <Grid columns={4} rows={4} gap="4" style={{
        border: '1px solid #333'
      }}>\r
          <GridItem columnStart={1} columnEnd={3} rowStart={1} rowEnd={2}>\r
            <Box bg="innovation.primaryBlue" p="4" borderRadius="sm" height="100%">\r
              <Typography color="white" align="center">Col 1-3, Row 1</Typography>\r
            </Box>\r
          </GridItem>\r
          <GridItem columnStart={3} columnEnd={5} rowStart={1} rowEnd={3}>\r
            <Box bg="innovation.secondaryPurple" p="4" borderRadius="sm" height="100%">\r
              <Typography color="white" align="center">Col 3-5, Row 1-3</Typography>\r
            </Box>\r
          </GridItem>\r
          <GridItem columnStart={1} columnEnd={2} rowStart={2} rowEnd={4}>\r
            <Box bg="semantic.success" p="4" borderRadius="sm" height="100%">\r
              <Typography color="white" align="center">Col 1, Row 2-4</Typography>\r
            </Box>\r
          </GridItem>\r
          <GridItem columnStart={2} columnEnd={3} rowStart={2} rowEnd={3}>\r
            <Box bg="gray.dark" p="4" borderRadius="sm" height="100%">\r
              <Typography color="white" align="center">2,2</Typography>\r
            </Box>\r
          </GridItem>\r
        </Grid>\r
      </div>\r
    </div>
}`,...(tr=(or=j.parameters)==null?void 0:or.docs)==null?void 0:tr.source}}};var ar,nr,sr;G.parameters={...G.parameters,docs:{...(ar=G.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  render: () => <div>\r
      <Typography variant="h4" marginBottom="4" color="white">Masonry Layout (Pinterest-style)</Typography>\r
      <Grid masonry columns={{
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    }} gap="4">\r
        {Array.from({
        length: 12
      }, (_, i) => <Card key={i} padding="4">\r
            <Box height={\`\${120 + i % 4 * 60}px\`} bg="gray.dark" borderRadius="sm" marginBottom="3">\r
              <Box display="flex" alignItems="center" justifyContent="center" height="100%">\r
                <Typography color="white">Image {i + 1}</Typography>\r
              </Box>\r
            </Box>\r
            <Typography variant="body2" marginBottom="2">Card {i + 1}</Typography>\r
            <Typography variant="caption" color="muted">\r
              {i % 3 === 0 ? 'Short content here.' : i % 3 === 1 ? 'Medium length content that takes up more space and demonstrates varying heights.' : 'Long content that really shows how masonry layouts handle different content lengths gracefully, creating a Pinterest-like experience.'}\r
            </Typography>\r
          </Card>)}\r
      </Grid>\r
    </div>
}`,...(sr=(nr=G.parameters)==null?void 0:nr.docs)==null?void 0:sr.source}}};var dr,lr,hr;f.parameters={...f.parameters,docs:{...(dr=f.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  render: () => <Grid responsive={{
    xs: {
      columns: 1,
      gap: 2
    },
    sm: {
      columns: 2,
      gap: 4
    },
    md: {
      columns: 3,
      gap: 6
    },
    lg: {
      columns: 4,
      gap: 8
    }
  }} style={{
    border: '1px solid #333'
  }}>\r
      {Array.from({
      length: 8
    }, (_, i) => <GridItem key={i}>\r
          <Box bg="gray.dark" p="4" borderRadius="sm">\r
            <Typography color="white" align="center">\r
              Responsive {i + 1}\r
            </Typography>\r
          </Box>\r
        </GridItem>)}\r
    </Grid>
}`,...(hr=(lr=f.parameters)==null?void 0:lr.docs)==null?void 0:hr.source}}};var cr,mr,pr;S.parameters={...S.parameters,docs:{...(cr=S.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  render: () => <div>\r
      <Typography variant="h4" marginBottom="4" color="white">Dashboard Layout Example</Typography>\r
      <Grid areas={\`
          "header header header header"
          "sidebar stats stats stats"
          "sidebar chart chart metrics"
          "sidebar recent recent metrics"
        \`} columns="200px 1fr 1fr 200px" rows="auto auto 1fr auto" gap="4" minHeight="600px" style={{
      border: '1px solid #333'
    }}>\r
        <GridItem area="header">\r
          <Box bg="innovation.primaryBlue" p="4" borderRadius="sm">\r
            <Typography color="white" variant="h5" align="center">\r
              Gaming Dashboard\r
            </Typography>\r
          </Box>\r
        </GridItem>\r
        \r
        <GridItem area="sidebar">\r
          <Box bg="gray.dark" p="4" borderRadius="sm" height="100%">\r
            <Typography color="white" variant="h6" marginBottom="4">Navigation</Typography>\r
            <Box display="flex" flexDirection="column" gap="2">\r
              <Typography color="gray.light" fontSize="sm">Overview</Typography>\r
              <Typography color="gray.light" fontSize="sm">Players</Typography>\r
              <Typography color="gray.light" fontSize="sm">Games</Typography>\r
              <Typography color="gray.light" fontSize="sm">Analytics</Typography>\r
              <Typography color="gray.light" fontSize="sm">Settings</Typography>\r
            </Box>\r
          </Box>\r
        </GridItem>\r
        \r
        <GridItem area="stats">\r
          <Box bg="gray.base" p="4" borderRadius="sm" height="100%">\r
            <Typography color="white" variant="h6" marginBottom="4">Key Stats</Typography>\r
            <Grid columns={3} gap="3">\r
              <Box bg="innovation.primaryBlue" p="3" borderRadius="sm">\r
                <Typography color="white" fontSize="lg" fontWeight="bold">1.2K</Typography>\r
                <Typography color="gray.light" fontSize="sm">Active Players</Typography>\r
              </Box>\r
              <Box bg="semantic.success" p="3" borderRadius="sm">\r
                <Typography color="white" fontSize="lg" fontWeight="bold">87%</Typography>\r
                <Typography color="gray.light" fontSize="sm">Uptime</Typography>\r
              </Box>\r
              <Box bg="innovation.secondaryPurple" p="3" borderRadius="sm">\r
                <Typography color="white" fontSize="lg" fontWeight="bold">15</Typography>\r
                <Typography color="gray.light" fontSize="sm">Live Games</Typography>\r
              </Box>\r
            </Grid>\r
          </Box>\r
        </GridItem>\r
        \r
        <GridItem area="chart">\r
          <Box bg="gray.base" p="4" borderRadius="sm" height="100%">\r
            <Typography color="white" variant="h6" marginBottom="4">Performance Chart</Typography>\r
            <Box bg="gray.dark" borderRadius="sm" height="200px" display="flex" alignItems="center" justifyContent="center">\r
              <Typography color="gray.light">Chart visualization</Typography>\r
            </Box>\r
          </Box>\r
        </GridItem>\r
        \r
        <GridItem area="metrics">\r
          <Box bg="gray.dark" p="4" borderRadius="sm" height="100%">\r
            <Typography color="white" variant="h6" marginBottom="4">Metrics</Typography>\r
            <Box display="flex" flexDirection="column" gap="3">\r
              <Box>\r
                <Typography color="white" fontSize="sm">CPU Usage</Typography>\r
                <Box bg="gray.base" height="8px" borderRadius="full" marginTop="1">\r
                  <Box bg="semantic.warning" width="65%" height="100%" borderRadius="full" />\r
                </Box>\r
              </Box>\r
              <Box>\r
                <Typography color="white" fontSize="sm">Memory</Typography>\r
                <Box bg="gray.base" height="8px" borderRadius="full" marginTop="1">\r
                  <Box bg="innovation.primaryBlue" width="45%" height="100%" borderRadius="full" />\r
                </Box>\r
              </Box>\r
              <Box>\r
                <Typography color="white" fontSize="sm">Network</Typography>\r
                <Box bg="gray.base" height="8px" borderRadius="full" marginTop="1">\r
                  <Box bg="semantic.success" width="80%" height="100%" borderRadius="full" />\r
                </Box>\r
              </Box>\r
            </Box>\r
          </Box>\r
        </GridItem>\r
        \r
        <GridItem area="recent">\r
          <Box bg="gray.base" p="4" borderRadius="sm" height="100%">\r
            <Typography color="white" variant="h6" marginBottom="4">Recent Activity</Typography>\r
            <Box display="flex" flexDirection="column" gap="2">\r
              <Typography color="gray.light" fontSize="sm">• Player joined game #1</Typography>\r
              <Typography color="gray.light" fontSize="sm">• Server updated to v2.1</Typography>\r
              <Typography color="gray.light" fontSize="sm">• New tournament started</Typography>\r
              <Typography color="gray.light" fontSize="sm">• Performance optimized</Typography>\r
            </Box>\r
          </Box>\r
        </GridItem>\r
      </Grid>\r
    </div>
}`,...(pr=(mr=S.parameters)==null?void 0:mr.docs)==null?void 0:pr.source}}};const vr=["Basic","Responsive","AutoFit","AutoFill","CustomColumns","WithRowsAndColumns","DifferentGaps","Alignment","NamedGridAreas","ResponsiveGridAreas","PredefinedPatterns","GridItemPositioning","MasonryLayout","EnhancedResponsive","DashboardExample"];export{y as Alignment,c as AutoFill,h as AutoFit,d as Basic,m as CustomColumns,S as DashboardExample,g as DifferentGaps,f as EnhancedResponsive,j as GridItemPositioning,G as MasonryLayout,x as NamedGridAreas,b as PredefinedPatterns,l as Responsive,u as ResponsiveGridAreas,p as WithRowsAndColumns,vr as __namedExportsOrder,Ir as default};
