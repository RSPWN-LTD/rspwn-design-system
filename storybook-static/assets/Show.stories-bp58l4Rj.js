import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as u}from"./index-GiUgBvb1.js";import{t as ue}from"./theme-Drta_W6v.js";import{B as l}from"./Box-COihqxSe.js";import{T as r}from"./Typography-u4LxpgYF.js";import{G as O}from"./Grid-BbcBGEjG.js";import{C as i}from"./Card-DLqRvD42.js";import"./styled-components.browser.esm-Byilhkxn.js";import"./propFilters-BGSNtaQt.js";const he={...ue.breakpoints,mobile:"640px",tablet:"768px",desktop:"1024px",wide:"1280px"};function me(n){const o=Object.entries(he).map(([a,t])=>({key:a,value:parseInt(t)})).sort((a,t)=>t.value-a.value);for(const{key:a,value:t}of o)if(n>=t)return a;return"xs"}function ye(n,o){if(typeof n!="object"||n===null||Array.isArray(n))return n;const a=n,t=["2xl","xl","wide","lg","desktop","md","tablet","sm","mobile","xs"],d={xs:0,sm:1,md:2,lg:3,xl:4,"2xl":5,mobile:1,tablet:2,desktop:3,wide:4},c=d[o]||0;for(const p of t)if(a[p]!==void 0&&(d[p]||0)<=c)return a[p];for(const p of t.reverse())if(a[p]!==void 0)return a[p]}function f(n,o,a){const t={xs:0,sm:1,mobile:1,md:2,tablet:2,lg:3,desktop:3,xl:4,wide:4,"2xl":5},d=t[n]||0;if(o==="above"&&a){const c=t[a]||0;return d>c}if(o==="below"&&a){const c=t[a]||0;return d<c}return typeof o=="string"&&o in t?d>=t[o]:!1}function xe(n){const[o,a]=u.useState(!1);return u.useEffect(()=>{if(typeof window>"u")return;const t=window.matchMedia(n),d=()=>a(t.matches);return d(),t.addEventListener?(t.addEventListener("change",d),()=>t.removeEventListener("change",d)):(t.addListener(d),()=>t.removeListener(d))},[n]),o}function h(n){const o=`(min-width: ${he[n]})`;return xe(o)}function ge(){const[n,o]=u.useState("xs");return u.useEffect(()=>{if(typeof window>"u")return;const a=()=>{const t=window.innerWidth,d=me(t);o(d)};return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),n}function be(n){const o=ge();return ye(n,o)}function we(){const[n,o]=u.useState({width:0,height:0,breakpoint:"xs",isMobile:!0,isTablet:!1,isDesktop:!1});return u.useEffect(()=>{if(typeof window>"u")return;const a=()=>{const t=window.innerWidth,d=window.innerHeight,c=me(t);o({width:t,height:d,breakpoint:c,isMobile:!f(c,"sm"),isTablet:f(c,"md")&&!f(c,"lg"),isDesktop:f(c,"lg")})};return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),n}const s=({above:n,below:o,only:a,between:t,children:d,fallback:c})=>{let p=!0;const b=n?h(n):!0;n&&!b&&(p=!1);const w=o?!h(o):!0;if(o&&!w&&(p=!1),a&&((Array.isArray(a)?a:[a]).some(H=>h(H)&&!h(z(H)||"2xl"))||(p=!1)),t){const[y,g]=t;h(y)&&!h(z(g)||"2xl")||(p=!1)}return p?e.jsx(e.Fragment,{children:d}):c?e.jsx(e.Fragment,{children:c}):null},x=({above:n,below:o,only:a,between:t,children:d})=>{let c=!1;const p=n?h(n):!1;n&&p&&(c=!0);const b=o?!h(o):!1;if(o&&b&&(c=!0),a&&(Array.isArray(a)?a:[a]).some(g=>h(g)&&!h(z(g)||"2xl"))&&(c=!0),t){const[w,y]=t;h(w)&&!h(z(y)||"2xl")&&(c=!0)}return c?null:e.jsx(e.Fragment,{children:d})};function z(n){const o=["xs","sm","md","lg","xl","2xl"],a=o.indexOf(n);return a!==-1&&a<o.length-1?o[a+1]:null}const M=({children:n,fallback:o})=>e.jsx(s,{below:"md",fallback:o,children:n}),R=({children:n,fallback:o})=>e.jsx(s,{between:["md","lg"],fallback:o,children:n}),V=({children:n,fallback:o})=>e.jsx(s,{above:"lg",fallback:o,children:n}),N=({children:n})=>e.jsx(x,{below:"md",children:n}),I=({children:n})=>e.jsx(x,{between:["md","lg"],children:n}),A=({children:n})=>e.jsx(x,{above:"lg",children:n});try{s.displayName="Show",s.__docgenInfo={description:`Show component conditionally renders children based on breakpoint conditions.
Useful for responsive design where content should appear or disappear at specific screen sizes.`,displayName:"Show",props:{above:{defaultValue:null,description:"Show content only above this breakpoint",name:"above",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"mobile"'},{value:'"tablet"'},{value:'"desktop"'},{value:'"wide"'},{value:'"xs"'}]}},below:{defaultValue:null,description:"Show content only below this breakpoint",name:"below",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"mobile"'},{value:'"tablet"'},{value:'"desktop"'},{value:'"wide"'},{value:'"xs"'}]}},only:{defaultValue:null,description:"Show content only at specific breakpoint(s)",name:"only",required:!1,type:{name:'"sm" | "md" | "lg" | "xl" | "2xl" | "mobile" | "tablet" | "desktop" | "wide" | "xs" | ("sm" | "md" | "lg" | "xl" | "2xl" | "mobile" | "tablet" | "desktop" | "wide" | "xs")[]'}},between:{defaultValue:null,description:"Show content only between two breakpoints (inclusive)",name:"between",required:!1,type:{name:'["sm" | "md" | "lg" | "xl" | "2xl" | "mobile" | "tablet" | "desktop" | "wide" | "xs", "sm" | "md" | "lg" | "xl" | "2xl" | "mobile" | "tablet" | "desktop" | "wide" | "xs"]'}},children:{defaultValue:null,description:"Content to show/hide based on conditions",name:"children",required:!0,type:{name:"ReactNode"}},fallback:{defaultValue:null,description:"Fallback content to show when main content is hidden",name:"fallback",required:!1,type:{name:"ReactNode"}}}}}catch{}try{x.displayName="Hide",x.__docgenInfo={description:"",displayName:"Hide",props:{children:{defaultValue:null,description:"Content to show/hide based on conditions",name:"children",required:!0,type:{name:"ReactNode"}},above:{defaultValue:null,description:"Show content only above this breakpoint",name:"above",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"mobile"'},{value:'"tablet"'},{value:'"desktop"'},{value:'"wide"'},{value:'"xs"'}]}},below:{defaultValue:null,description:"Show content only below this breakpoint",name:"below",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"mobile"'},{value:'"tablet"'},{value:'"desktop"'},{value:'"wide"'},{value:'"xs"'}]}},only:{defaultValue:null,description:"Show content only at specific breakpoint(s)",name:"only",required:!1,type:{name:'"sm" | "md" | "lg" | "xl" | "2xl" | "mobile" | "tablet" | "desktop" | "wide" | "xs" | ("sm" | "md" | "lg" | "xl" | "2xl" | "mobile" | "tablet" | "desktop" | "wide" | "xs")[]'}},between:{defaultValue:null,description:"Show content only between two breakpoints (inclusive)",name:"between",required:!1,type:{name:'["sm" | "md" | "lg" | "xl" | "2xl" | "mobile" | "tablet" | "desktop" | "wide" | "xs", "sm" | "md" | "lg" | "xl" | "2xl" | "mobile" | "tablet" | "desktop" | "wide" | "xs"]'}}}}}catch{}try{M.displayName="ShowOnMobile",M.__docgenInfo={description:"Show content only on mobile devices (below 'md' breakpoint)",displayName:"ShowOnMobile",props:{children:{defaultValue:null,description:"Content to show/hide based on conditions",name:"children",required:!0,type:{name:"ReactNode"}},fallback:{defaultValue:null,description:"Fallback content to show when main content is hidden",name:"fallback",required:!1,type:{name:"ReactNode"}}}}}catch{}try{R.displayName="ShowOnTablet",R.__docgenInfo={description:"Show content only on tablet devices (between 'md' and 'lg' breakpoints)",displayName:"ShowOnTablet",props:{children:{defaultValue:null,description:"Content to show/hide based on conditions",name:"children",required:!0,type:{name:"ReactNode"}},fallback:{defaultValue:null,description:"Fallback content to show when main content is hidden",name:"fallback",required:!1,type:{name:"ReactNode"}}}}}catch{}try{V.displayName="ShowOnDesktop",V.__docgenInfo={description:"Show content only on desktop devices ('lg' breakpoint and above)",displayName:"ShowOnDesktop",props:{children:{defaultValue:null,description:"Content to show/hide based on conditions",name:"children",required:!0,type:{name:"ReactNode"}},fallback:{defaultValue:null,description:"Fallback content to show when main content is hidden",name:"fallback",required:!1,type:{name:"ReactNode"}}}}}catch{}try{N.displayName="HideOnMobile",N.__docgenInfo={description:"Hide content on mobile devices (below 'md' breakpoint)",displayName:"HideOnMobile",props:{children:{defaultValue:null,description:"Content to show/hide based on conditions",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}try{I.displayName="HideOnTablet",I.__docgenInfo={description:"Hide content on tablet devices (between 'md' and 'lg' breakpoints)",displayName:"HideOnTablet",props:{children:{defaultValue:null,description:"Content to show/hide based on conditions",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}try{A.displayName="HideOnDesktop",A.__docgenInfo={description:"Hide content on desktop devices ('lg' breakpoint and above)",displayName:"HideOnDesktop",props:{children:{defaultValue:null,description:"Content to show/hide based on conditions",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const De={title:"Layout/Show",component:s,parameters:{layout:"padded",docs:{description:{component:`
The Show/Hide components provide conditional rendering based on breakpoint conditions. Perfect for responsive design where content should appear or disappear at specific screen sizes.

## Features

- **Breakpoint Conditions**: Show above, below, only at, or between specific breakpoints
- **Multiple Breakpoints**: Support for arrays of breakpoints in 'only' condition
- **Fallback Content**: Optional fallback content when main content is hidden
- **Convenience Components**: Pre-configured components for common use cases
- **TypeScript Support**: Full type safety with responsive value types

## Breakpoint System

- **xs**: 480px+ (extra small)
- **sm**: 640px+ (small / mobile)
- **md**: 768px+ (medium / tablet)
- **lg**: 1024px+ (large / desktop)
- **xl**: 1280px+ (extra large)
- **2xl**: 1536px+ (2x extra large)

## Semantic Breakpoints

- **mobile**: 640px+ (equivalent to sm)
- **tablet**: 768px+ (equivalent to md)
- **desktop**: 1024px+ (equivalent to lg)
- **wide**: 1280px+ (equivalent to xl)

## Best Practices

- Use semantic breakpoint names for better readability
- Combine with responsive props for complete responsive design
- Test across different screen sizes during development
- Consider performance implications of conditional rendering
        `}}},tags:["autodocs"],argTypes:{above:{control:"select",options:["xs","sm","md","lg","xl","2xl","mobile","tablet","desktop","wide"],description:"Show content above this breakpoint"},below:{control:"select",options:["xs","sm","md","lg","xl","2xl","mobile","tablet","desktop","wide"],description:"Show content below this breakpoint"}}},m=()=>{const n=we(),o=ge();return e.jsxs(i,{padding:"4",marginBottom:"6",background:"subtle",children:[e.jsx(r,{variant:"h6",marginBottom:"3",children:"Current Screen Info"}),e.jsxs(O,{columns:2,gap:"4",children:[e.jsxs(l,{children:[e.jsx(r,{variant:"body2",color:"muted",children:"Screen Width:"}),e.jsxs(r,{fontWeight:"medium",children:[n.width,"px"]})]}),e.jsxs(l,{children:[e.jsx(r,{variant:"body2",color:"muted",children:"Breakpoint:"}),e.jsx(r,{fontWeight:"medium",children:o})]}),e.jsxs(l,{children:[e.jsx(r,{variant:"body2",color:"muted",children:"Device Type:"}),e.jsx(r,{fontWeight:"medium",children:n.isMobile?"Mobile":n.isTablet?"Tablet":"Desktop"})]}),e.jsxs(l,{children:[e.jsx(r,{variant:"body2",color:"muted",children:"Screen Height:"}),e.jsxs(r,{fontWeight:"medium",children:[n.height,"px"]})]})]})]})},v={render:()=>e.jsxs("div",{children:[e.jsx(m,{}),e.jsxs(l,{display:"flex",flexDirection:"column",gap:"4",children:[e.jsx(s,{above:"md",children:e.jsx(i,{padding:"4",background:"semantic.success",color:"white",children:e.jsx(r,{children:"✅ Visible on medium screens and larger (md+)"})})}),e.jsx(s,{below:"md",children:e.jsx(i,{padding:"4",background:"semantic.info",color:"white",children:e.jsx(r,{children:"📱 Visible on small screens only (below md)"})})}),e.jsx(s,{only:"lg",children:e.jsx(i,{padding:"4",background:"semantic.warning",color:"white",children:e.jsx(r,{children:"🖥️ Visible only on large screens (lg only)"})})})]})]})},k={render:()=>e.jsxs("div",{children:[e.jsx(m,{}),e.jsxs(l,{display:"flex",flexDirection:"column",gap:"4",children:[e.jsx(s,{only:["sm","md"],children:e.jsx(i,{padding:"4",background:"innovation.primaryBlue",color:"white",children:e.jsx(r,{children:"📱 Visible on small and medium screens (sm, md)"})})}),e.jsx(s,{between:["lg","xl"],children:e.jsx(i,{padding:"4",background:"innovation.secondaryPurple",color:"white",children:e.jsx(r,{children:"🖥️ Visible between large and extra large (lg to xl)"})})})]})]})},j={render:()=>e.jsxs("div",{children:[e.jsx(m,{}),e.jsx(s,{above:"lg",fallback:e.jsx(i,{padding:"4",background:"gray.dark",color:"white",children:e.jsx(r,{children:"📱 Fallback content for smaller screens"})}),children:e.jsx(i,{padding:"4",background:"semantic.success",color:"white",children:e.jsx(r,{children:"🖥️ Desktop content with fallback"})})})]})},S={render:()=>e.jsxs("div",{children:[e.jsx(m,{}),e.jsxs(l,{display:"flex",flexDirection:"column",gap:"4",children:[e.jsx(s,{below:"mobile",children:e.jsx(i,{padding:"4",background:"semantic.error",color:"white",children:e.jsx(r,{children:"📱 Extra small screens (below mobile)"})})}),e.jsx(s,{only:"tablet",children:e.jsx(i,{padding:"4",background:"semantic.warning",color:"white",children:e.jsx(r,{children:"📱 Tablet screens only"})})}),e.jsx(s,{above:"desktop",children:e.jsx(i,{padding:"4",background:"semantic.success",color:"white",children:e.jsx(r,{children:"🖥️ Desktop screens and larger"})})}),e.jsx(s,{above:"wide",children:e.jsx(i,{padding:"4",background:"innovation.primaryBlue",color:"white",children:e.jsx(r,{children:"🖥️ Wide screens (1280px+)"})})})]})]})},T={render:()=>e.jsxs("div",{children:[e.jsx(m,{}),e.jsxs(l,{display:"flex",flexDirection:"column",gap:"4",children:[e.jsx(M,{children:e.jsx(i,{padding:"4",background:"semantic.info",color:"white",children:e.jsx(r,{children:"📱 Mobile Only Content"})})}),e.jsx(R,{children:e.jsx(i,{padding:"4",background:"semantic.warning",color:"white",children:e.jsx(r,{children:"📱 Tablet Only Content"})})}),e.jsx(V,{children:e.jsx(i,{padding:"4",background:"semantic.success",color:"white",children:e.jsx(r,{children:"🖥️ Desktop Only Content"})})})]})]})},C={render:()=>e.jsxs("div",{children:[e.jsx(m,{}),e.jsxs(l,{display:"flex",flexDirection:"column",gap:"4",children:[e.jsx(i,{padding:"4",background:"gray.base",color:"white",children:e.jsx(r,{children:"🔍 Always Visible Content"})}),e.jsx(N,{children:e.jsx(i,{padding:"4",background:"semantic.error",color:"white",children:e.jsx(r,{children:"❌ Hidden on Mobile"})})}),e.jsx(I,{children:e.jsx(i,{padding:"4",background:"semantic.warning",color:"white",children:e.jsx(r,{children:"❌ Hidden on Tablet"})})}),e.jsx(A,{children:e.jsx(i,{padding:"4",background:"semantic.info",color:"white",children:e.jsx(r,{children:"❌ Hidden on Desktop"})})})]})]})},B={render:()=>e.jsxs("div",{children:[e.jsx(m,{}),e.jsx(i,{padding:"4",background:"dark",marginBottom:"6",children:e.jsxs(l,{display:"flex",alignItems:"center",justifyContent:"between",gap:"4",children:[e.jsx(r,{variant:"h5",color:"white",children:"RSPWN"}),e.jsx(s,{above:"md",children:e.jsxs(l,{display:"flex",gap:"6",children:[e.jsx(r,{color:"gray.light",children:"Home"}),e.jsx(r,{color:"gray.light",children:"About"}),e.jsx(r,{color:"gray.light",children:"Services"}),e.jsx(r,{color:"gray.light",children:"Contact"})]})}),e.jsx(s,{below:"md",children:e.jsx(i,{padding:"2",background:"innovation.primaryBlue",children:e.jsx(r,{color:"white",fontSize:"sm",children:"☰ Menu"})})})]})}),e.jsx(s,{below:"md",children:e.jsxs(i,{padding:"4",background:"gray.light",marginBottom:"4",children:[e.jsx(r,{variant:"h6",marginBottom:"3",children:"Mobile Menu"}),e.jsxs(l,{display:"flex",flexDirection:"column",gap:"3",children:[e.jsx(r,{children:"Home"}),e.jsx(r,{children:"About"}),e.jsx(r,{children:"Services"}),e.jsx(r,{children:"Contact"})]})]})}),e.jsx(r,{variant:"body1",children:"Resize your browser window to see the responsive navigation in action. The horizontal menu appears on desktop, while a mobile menu button appears on smaller screens."})]})},_={render:()=>{const n=be({xs:1,sm:2,md:3,lg:4});return e.jsxs("div",{children:[e.jsx(m,{}),e.jsxs(i,{padding:"4",background:"subtle",marginBottom:"6",children:[e.jsx(r,{variant:"h6",marginBottom:"2",children:"Dynamic Grid Columns"}),e.jsxs(r,{variant:"body2",children:["Current columns: ",n]})]}),e.jsx(O,{columns:n,gap:"4",children:Array.from({length:8},(o,a)=>e.jsxs(i,{padding:"4",children:[e.jsx(l,{height:"100px",background:"innovation.primaryBlue",borderRadius:"sm",marginBottom:"3"}),e.jsxs(r,{variant:"body2",children:["Card ",a+1]})]},a))}),e.jsxs(l,{marginTop:"6",children:[e.jsx(s,{above:"lg",children:e.jsxs(r,{variant:"body1",children:["🖥️ Desktop view: Showing ",n," columns for optimal desktop experience"]})}),e.jsx(s,{only:["sm","md"],children:e.jsxs(r,{variant:"body1",children:["📱 Tablet view: Showing ",n," columns for comfortable tablet browsing"]})}),e.jsx(s,{below:"sm",children:e.jsx(r,{variant:"body1",children:"📱 Mobile view: Single column layout for mobile optimization"})})]})]})}},D={render:()=>e.jsxs("div",{children:[e.jsx(m,{}),e.jsx(i,{padding:"4",background:"dark",marginBottom:"4",children:e.jsxs(l,{display:"flex",alignItems:"center",justifyContent:"between",children:[e.jsx(r,{variant:"h4",color:"white",children:"Dashboard"}),e.jsx(s,{above:"md",children:e.jsxs(l,{display:"flex",gap:"4",children:[e.jsx(i,{padding:"2",background:"innovation.primaryBlue",children:e.jsx(r,{color:"white",fontSize:"sm",children:"Profile"})}),e.jsx(i,{padding:"2",background:"semantic.success",children:e.jsx(r,{color:"white",fontSize:"sm",children:"Settings"})})]})}),e.jsx(s,{below:"md",children:e.jsx(i,{padding:"2",background:"gray.base",children:e.jsx(r,{color:"white",fontSize:"sm",children:"⚙️"})})})]})}),e.jsxs(O,{columns:{xs:1,lg:3},gap:"4",children:[e.jsx(s,{above:"lg",children:e.jsxs(i,{padding:"4",background:"gray.light",children:[e.jsx(r,{variant:"h6",marginBottom:"4",children:"Sidebar"}),e.jsxs(l,{display:"flex",flexDirection:"column",gap:"2",children:[e.jsx(r,{fontSize:"sm",children:"Dashboard"}),e.jsx(r,{fontSize:"sm",children:"Analytics"}),e.jsx(r,{fontSize:"sm",children:"Reports"}),e.jsx(r,{fontSize:"sm",children:"Settings"})]})]})}),e.jsxs(l,{gridColumn:{lg:"span 2"},children:[e.jsxs(O,{columns:{xs:1,sm:2},gap:"4",marginBottom:"4",children:[e.jsxs(i,{padding:"4",children:[e.jsx(r,{variant:"h6",marginBottom:"2",children:"Stats"}),e.jsx(r,{variant:"h3",color:"innovation.primaryBlue",children:"1,234"}),e.jsx(s,{above:"sm",children:e.jsx(r,{variant:"body2",color:"muted",children:"↗️ +12% from last month"})})]}),e.jsxs(i,{padding:"4",children:[e.jsx(r,{variant:"h6",marginBottom:"2",children:"Revenue"}),e.jsx(r,{variant:"h3",color:"semantic.success",children:"$45.6K"}),e.jsx(s,{above:"sm",children:e.jsx(r,{variant:"body2",color:"muted",children:"↗️ +8% from last month"})})]})]}),e.jsxs(i,{padding:"4",children:[e.jsx(r,{variant:"h6",marginBottom:"4",children:"Recent Activity"}),e.jsx(l,{display:"flex",flexDirection:"column",gap:"3",children:Array.from({length:3},(n,o)=>e.jsxs(l,{display:"flex",alignItems:"center",gap:"3",children:[e.jsx(l,{width:"40px",height:"40px",background:"innovation.primaryBlue",borderRadius:"full"}),e.jsxs(l,{flex:"1",children:[e.jsxs(r,{variant:"body2",children:["Activity ",o+1]}),e.jsx(s,{above:"sm",children:e.jsx(r,{variant:"caption",color:"muted",children:"Detailed description of the activity that happened recently"})}),e.jsx(s,{below:"sm",children:e.jsx(r,{variant:"caption",color:"muted",children:"2h ago"})})]})]},o))})]})]})]}),e.jsx(s,{below:"lg",children:e.jsx(i,{position:"fixed",bottom:"0",left:"0",right:"0",padding:"3",background:"dark",style:{zIndex:1e3},children:e.jsx(l,{display:"flex",justifyContent:"around",children:["🏠","📊","📋","⚙️"].map((n,o)=>e.jsx(l,{padding:"2",children:e.jsx(r,{fontSize:"lg",children:n})},o))})})})]})};var q,L,E;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div>\r
      <ScreenInfo />\r
      \r
      <Box display="flex" flexDirection="column" gap="4">\r
        <Show above="md">\r
          <Card padding="4" background="semantic.success" color="white">\r
            <Typography>✅ Visible on medium screens and larger (md+)</Typography>\r
          </Card>\r
        </Show>\r
        \r
        <Show below="md">\r
          <Card padding="4" background="semantic.info" color="white">\r
            <Typography>📱 Visible on small screens only (below md)</Typography>\r
          </Card>\r
        </Show>\r
        \r
        <Show only="lg">\r
          <Card padding="4" background="semantic.warning" color="white">\r
            <Typography>🖥️ Visible only on large screens (lg only)</Typography>\r
          </Card>\r
        </Show>\r
      </Box>\r
    </div>
}`,...(E=(L=v.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var F,W,G;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div>\r
      <ScreenInfo />\r
      \r
      <Box display="flex" flexDirection="column" gap="4">\r
        <Show only={['sm', 'md']}>\r
          <Card padding="4" background="innovation.primaryBlue" color="white">\r
            <Typography>📱 Visible on small and medium screens (sm, md)</Typography>\r
          </Card>\r
        </Show>\r
        \r
        <Show between={['lg', 'xl']}>\r
          <Card padding="4" background="innovation.secondaryPurple" color="white">\r
            <Typography>🖥️ Visible between large and extra large (lg to xl)</Typography>\r
          </Card>\r
        </Show>\r
      </Box>\r
    </div>
}`,...(G=(W=k.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var P,$,K;j.parameters={...j.parameters,docs:{...(P=j.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div>\r
      <ScreenInfo />\r
      \r
      <Show above="lg" fallback={<Card padding="4" background="gray.dark" color="white">\r
            <Typography>📱 Fallback content for smaller screens</Typography>\r
          </Card>}>\r
        <Card padding="4" background="semantic.success" color="white">\r
          <Typography>🖥️ Desktop content with fallback</Typography>\r
        </Card>\r
      </Show>\r
    </div>
}`,...(K=($=j.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var Q,U,J;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div>\r
      <ScreenInfo />\r
      \r
      <Box display="flex" flexDirection="column" gap="4">\r
        <Show below="mobile">\r
          <Card padding="4" background="semantic.error" color="white">\r
            <Typography>📱 Extra small screens (below mobile)</Typography>\r
          </Card>\r
        </Show>\r
        \r
        <Show only="tablet">\r
          <Card padding="4" background="semantic.warning" color="white">\r
            <Typography>📱 Tablet screens only</Typography>\r
          </Card>\r
        </Show>\r
        \r
        <Show above="desktop">\r
          <Card padding="4" background="semantic.success" color="white">\r
            <Typography>🖥️ Desktop screens and larger</Typography>\r
          </Card>\r
        </Show>\r
        \r
        <Show above="wide">\r
          <Card padding="4" background="innovation.primaryBlue" color="white">\r
            <Typography>🖥️ Wide screens (1280px+)</Typography>\r
          </Card>\r
        </Show>\r
      </Box>\r
    </div>
}`,...(J=(U=S.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var X,Y,Z;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div>\r
      <ScreenInfo />\r
      \r
      <Box display="flex" flexDirection="column" gap="4">\r
        <ShowOnMobile>\r
          <Card padding="4" background="semantic.info" color="white">\r
            <Typography>📱 Mobile Only Content</Typography>\r
          </Card>\r
        </ShowOnMobile>\r
        \r
        <ShowOnTablet>\r
          <Card padding="4" background="semantic.warning" color="white">\r
            <Typography>📱 Tablet Only Content</Typography>\r
          </Card>\r
        </ShowOnTablet>\r
        \r
        <ShowOnDesktop>\r
          <Card padding="4" background="semantic.success" color="white">\r
            <Typography>🖥️ Desktop Only Content</Typography>\r
          </Card>\r
        </ShowOnDesktop>\r
      </Box>\r
    </div>
}`,...(Z=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ne;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div>\r
      <ScreenInfo />\r
      \r
      <Box display="flex" flexDirection="column" gap="4">\r
        <Card padding="4" background="gray.base" color="white">\r
          <Typography>🔍 Always Visible Content</Typography>\r
        </Card>\r
        \r
        <HideOnMobile>\r
          <Card padding="4" background="semantic.error" color="white">\r
            <Typography>❌ Hidden on Mobile</Typography>\r
          </Card>\r
        </HideOnMobile>\r
        \r
        <HideOnTablet>\r
          <Card padding="4" background="semantic.warning" color="white">\r
            <Typography>❌ Hidden on Tablet</Typography>\r
          </Card>\r
        </HideOnTablet>\r
        \r
        <HideOnDesktop>\r
          <Card padding="4" background="semantic.info" color="white">\r
            <Typography>❌ Hidden on Desktop</Typography>\r
          </Card>\r
        </HideOnDesktop>\r
      </Box>\r
    </div>
}`,...(ne=(re=C.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,ae,ie;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div>\r
      <ScreenInfo />\r
      \r
      <Card padding="4" background="dark" marginBottom="6">\r
        <Box display="flex" alignItems="center" justifyContent="between" gap="4">\r
          <Typography variant="h5" color="white">RSPWN</Typography>\r
          \r
          <Show above="md">\r
            <Box display="flex" gap="6">\r
              <Typography color="gray.light">Home</Typography>\r
              <Typography color="gray.light">About</Typography>\r
              <Typography color="gray.light">Services</Typography>\r
              <Typography color="gray.light">Contact</Typography>\r
            </Box>\r
          </Show>\r
          \r
          <Show below="md">\r
            <Card padding="2" background="innovation.primaryBlue">\r
              <Typography color="white" fontSize="sm">☰ Menu</Typography>\r
            </Card>\r
          </Show>\r
        </Box>\r
      </Card>\r
      \r
      <Show below="md">\r
        <Card padding="4" background="gray.light" marginBottom="4">\r
          <Typography variant="h6" marginBottom="3">Mobile Menu</Typography>\r
          <Box display="flex" flexDirection="column" gap="3">\r
            <Typography>Home</Typography>\r
            <Typography>About</Typography>\r
            <Typography>Services</Typography>\r
            <Typography>Contact</Typography>\r
          </Box>\r
        </Card>\r
      </Show>\r
      \r
      <Typography variant="body1">\r
        Resize your browser window to see the responsive navigation in action.\r
        The horizontal menu appears on desktop, while a mobile menu button appears on smaller screens.\r
      </Typography>\r
    </div>
}`,...(ie=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var te,se,le;_.parameters={..._.parameters,docs:{...(te=_.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const columns = useBreakpointValue({
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    });
    return <div>\r
        <ScreenInfo />\r
        \r
        <Card padding="4" background="subtle" marginBottom="6">\r
          <Typography variant="h6" marginBottom="2">Dynamic Grid Columns</Typography>\r
          <Typography variant="body2">Current columns: {columns}</Typography>\r
        </Card>\r
        \r
        <Grid columns={columns} gap="4">\r
          {Array.from({
          length: 8
        }, (_, i) => <Card key={i} padding="4">\r
              <Box height="100px" background="innovation.primaryBlue" borderRadius="sm" marginBottom="3" />\r
              <Typography variant="body2">Card {i + 1}</Typography>\r
            </Card>)}\r
        </Grid>\r
        \r
        <Box marginTop="6">\r
          <Show above="lg">\r
            <Typography variant="body1">\r
              🖥️ Desktop view: Showing {columns} columns for optimal desktop experience\r
            </Typography>\r
          </Show>\r
          \r
          <Show only={['sm', 'md']}>\r
            <Typography variant="body1">\r
              📱 Tablet view: Showing {columns} columns for comfortable tablet browsing\r
            </Typography>\r
          </Show>\r
          \r
          <Show below="sm">\r
            <Typography variant="body1">\r
              📱 Mobile view: Single column layout for mobile optimization\r
            </Typography>\r
          </Show>\r
        </Box>\r
      </div>;
  }
}`,...(le=(se=_.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var de,ce,pe;D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div>\r
      <ScreenInfo />\r
      \r
      {/* Header */}\r
      <Card padding="4" background="dark" marginBottom="4">\r
        <Box display="flex" alignItems="center" justifyContent="between">\r
          <Typography variant="h4" color="white">Dashboard</Typography>\r
          \r
          <Show above="md">\r
            <Box display="flex" gap="4">\r
              <Card padding="2" background="innovation.primaryBlue">\r
                <Typography color="white" fontSize="sm">Profile</Typography>\r
              </Card>\r
              <Card padding="2" background="semantic.success">\r
                <Typography color="white" fontSize="sm">Settings</Typography>\r
              </Card>\r
            </Box>\r
          </Show>\r
          \r
          <Show below="md">\r
            <Card padding="2" background="gray.base">\r
              <Typography color="white" fontSize="sm">⚙️</Typography>\r
            </Card>\r
          </Show>\r
        </Box>\r
      </Card>\r
      \r
      {/* Main Content */}\r
      <Grid columns={{
      xs: 1,
      lg: 3
    }} gap="4">\r
        {/* Sidebar */}\r
        <Show above="lg">\r
          <Card padding="4" background="gray.light">\r
            <Typography variant="h6" marginBottom="4">Sidebar</Typography>\r
            <Box display="flex" flexDirection="column" gap="2">\r
              <Typography fontSize="sm">Dashboard</Typography>\r
              <Typography fontSize="sm">Analytics</Typography>\r
              <Typography fontSize="sm">Reports</Typography>\r
              <Typography fontSize="sm">Settings</Typography>\r
            </Box>\r
          </Card>\r
        </Show>\r
        \r
        {/* Main Content Area */}\r
        <Box gridColumn={{
        lg: 'span 2'
      }}>\r
          <Grid columns={{
          xs: 1,
          sm: 2
        }} gap="4" marginBottom="4">\r
            <Card padding="4">\r
              <Typography variant="h6" marginBottom="2">Stats</Typography>\r
              <Typography variant="h3" color="innovation.primaryBlue">1,234</Typography>\r
              \r
              <Show above="sm">\r
                <Typography variant="body2" color="muted">↗️ +12% from last month</Typography>\r
              </Show>\r
            </Card>\r
            \r
            <Card padding="4">\r
              <Typography variant="h6" marginBottom="2">Revenue</Typography>\r
              <Typography variant="h3" color="semantic.success">$45.6K</Typography>\r
              \r
              <Show above="sm">\r
                <Typography variant="body2" color="muted">↗️ +8% from last month</Typography>\r
              </Show>\r
            </Card>\r
          </Grid>\r
          \r
          <Card padding="4">\r
            <Typography variant="h6" marginBottom="4">Recent Activity</Typography>\r
            <Box display="flex" flexDirection="column" gap="3">\r
              {Array.from({
              length: 3
            }, (_, i) => <Box key={i} display="flex" alignItems="center" gap="3">\r
                  <Box width="40px" height="40px" background="innovation.primaryBlue" borderRadius="full" />\r
                  <Box flex="1">\r
                    <Typography variant="body2">Activity {i + 1}</Typography>\r
                    \r
                    <Show above="sm">\r
                      <Typography variant="caption" color="muted">\r
                        Detailed description of the activity that happened recently\r
                      </Typography>\r
                    </Show>\r
                    \r
                    <Show below="sm">\r
                      <Typography variant="caption" color="muted">2h ago</Typography>\r
                    </Show>\r
                  </Box>\r
                </Box>)}\r
            </Box>\r
          </Card>\r
        </Box>\r
      </Grid>\r
      \r
      {/* Mobile Navigation */}\r
      <Show below="lg">\r
        <Card position="fixed" bottom="0" left="0" right="0" padding="3" background="dark" style={{
        zIndex: 1000
      }}>\r
          <Box display="flex" justifyContent="around">\r
            {['🏠', '📊', '📋', '⚙️'].map((icon, i) => <Box key={i} padding="2">\r
                <Typography fontSize="lg">{icon}</Typography>\r
              </Box>)}\r
          </Box>\r
        </Card>\r
      </Show>\r
    </div>
}`,...(pe=(ce=D.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};const Oe=["Basic","MultipleBreakpoints","WithFallback","SemanticBreakpoints","ConvenienceComponents","HideComponents","ResponsiveNavigation","ResponsiveGrid","ComplexResponsiveLayout"];export{v as Basic,D as ComplexResponsiveLayout,T as ConvenienceComponents,C as HideComponents,k as MultipleBreakpoints,_ as ResponsiveGrid,B as ResponsiveNavigation,S as SemanticBreakpoints,j as WithFallback,Oe as __namedExportsOrder,De as default};
