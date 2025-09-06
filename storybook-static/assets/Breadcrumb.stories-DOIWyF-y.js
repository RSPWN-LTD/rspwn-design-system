import{j as e}from"./jsx-runtime-CDt2p4po.js";import{R as ie,r as le}from"./index-GiUgBvb1.js";import{d as u,l as p}from"./styled-components.browser.esm-Byilhkxn.js";import{B as l}from"./Box-C_K3nAud.js";import{T as s}from"./Typography-CzMVeEUw.js";import"./propFilters-BGSNtaQt.js";const ce=r=>{switch(r){case"sm":return p`
        font-size: ${({theme:a})=>a.typography.fontSizes.xs};
        gap: ${({theme:a})=>a.spacing[2]};
      `;case"lg":return p`
        font-size: ${({theme:a})=>a.typography.fontSizes.base};
        gap: ${({theme:a})=>a.spacing[4]};
      `;default:return p`
        font-size: ${({theme:a})=>a.typography.fontSizes.sm};
        gap: ${({theme:a})=>a.spacing[3]};
      `}},de=u.nav`
  display: flex;
  align-items: center;
  font-family: ${({theme:r})=>r.typography.fonts.body};
  line-height: ${({theme:r})=>r.typography.lineHeights.tight};
  color: ${({theme:r})=>r.colors.gray.light};
  
  ${({size:r})=>ce(r)}
`,me=u.ol`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: inherit;
`,pe=u.li`
  display: flex;
  align-items: center;
  gap: inherit;
`,ue=u.a`
  text-decoration: none;
  transition: color ${({theme:r})=>r.durations.fast} ${({theme:r})=>r.easings.easeInOut};
  cursor: pointer;
  
  ${({current:r,theme:a})=>r?p`
          color: ${a.colors.foundation.white};
          font-weight: ${a.typography.fontWeights.medium};
        `:p`
          color: ${a.colors.gray.light};
          
          &:hover,
          &:focus {
            color: ${a.colors.foundation.white};
          }
          
          &:focus {
            outline: 2px solid ${a.colors.innovation.primaryBlue};
            outline-offset: 2px;
            border-radius: ${a.radius.sm};
          }
        `}
`,ge=u.button`
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  text-decoration: none;
  transition: color ${({theme:r})=>r.durations.fast} ${({theme:r})=>r.easings.easeInOut};
  cursor: pointer;
  
  ${({current:r,theme:a})=>r?p`
          color: ${a.colors.foundation.white};
          font-weight: ${a.typography.fontWeights.medium};
        `:p`
          color: ${a.colors.gray.light};
          
          &:hover,
          &:focus {
            color: ${a.colors.foundation.white};
          }
          
          &:focus {
            outline: 2px solid ${a.colors.innovation.primaryBlue};
            outline-offset: 2px;
            border-radius: ${a.radius.sm};
          }
        `}
`,be=u.span`
  color: ${({theme:r})=>r.colors.gray.dark};
  user-select: none;
  pointer-events: none;
`,he=u.span`
  color: ${({theme:r})=>r.colors.gray.dark};
  user-select: none;
  cursor: default;
  padding: ${({theme:r})=>r.spacing[1]};
`,ye=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"})}),o=({items:r,size:a="md",variant:n="default",separator:h=e.jsx(ye,{}),maxItems:c,className:d,"aria-label":y="Breadcrumb navigation",...x})=>{const g=ie.useMemo(()=>{if(!c||r.length<=c)return r;const t=r[0],b=r.slice(-(c-1));return[t,{label:"...",href:void 0,onClick:void 0,current:!1},...b]},[r,c]),D=(t,b,m)=>{const ne=t.label==="..."?e.jsx(he,{children:"..."}):t.href?e.jsx(ue,{href:t.href,current:t.current||m,"aria-current":t.current||m?"page":void 0,children:t.label}):t.onClick?e.jsx(ge,{onClick:t.onClick,current:t.current||m,"aria-current":t.current||m?"page":void 0,type:"button",children:t.label}):e.jsx("span",{style:{color:t.current||m?"inherit":void 0,fontWeight:t.current||m?"inherit":void 0},children:t.label});return e.jsxs(pe,{children:[ne,!m&&t.label!=="..."&&e.jsx(be,{"aria-hidden":"true",children:h})]},b)};return e.jsx(de,{className:d,size:a,"aria-label":y,...x,children:e.jsx(me,{children:g.map((t,b)=>D(t,b,b===g.length-1))})})};try{o.displayName="Breadcrumb",o.__docgenInfo={description:"",displayName:"Breadcrumb",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"compact"'}]}},separator:{defaultValue:{value:"<DefaultSeparator />"},description:"",name:"separator",required:!1,type:{name:"ReactNode"}},maxItems:{defaultValue:null,description:"",name:"maxItems",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},"aria-label":{defaultValue:{value:"Breadcrumb navigation"},description:"",name:"aria-label",required:!1,type:{name:"string"}}}}}catch{}const Ce={title:"UI/Breadcrumb",component:o,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["default","compact"]},maxItems:{control:{type:"number",min:3,max:10}}}},i=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Gaming Keyboards",href:"/products/keyboards"},{label:"Mechanical RGB",current:!0}],v={args:{items:i,size:"md",variant:"default"}},f={render:()=>e.jsxs(l,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"sm",children:"Simple Navigation"}),e.jsx(o,{items:[{label:"Home",href:"/"},{label:"About",current:!0}]})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"sm",children:"Three Levels"}),e.jsx(o,{items:[{label:"Dashboard",href:"/dashboard"},{label:"Settings",href:"/settings"},{label:"Profile",current:!0}]})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"sm",children:"Deep Navigation"}),e.jsx(o,{items:i})]})]})},j={render:()=>e.jsxs(l,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(s,{variant:"small",mb:"sm",color:"gray",children:"Small"}),e.jsx(o,{items:i,size:"sm"})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"small",mb:"sm",color:"gray",children:"Medium"}),e.jsx(o,{items:i,size:"md"})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"small",mb:"sm",color:"gray",children:"Large"}),e.jsx(o,{items:i,size:"lg"})]})]})},B={render:()=>{const[r,a]=le.useState("/products/keyboards/mechanical"),n=c=>{a(c)},h=c=>{const d=c.split("/").filter(Boolean),y=[{label:"Home",onClick:()=>n("/")}];let x="";return d.forEach((g,D)=>{x+=`/${g}`;const t=D===d.length-1;y.push({label:g.charAt(0).toUpperCase()+g.slice(1).replace("-"," "),onClick:t?void 0:()=>n(x),current:t})}),y};return e.jsxs(l,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsxs(s,{variant:"body",mb:"md",children:["Current Path: ",r]}),e.jsx(o,{items:h(r)})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"sm",children:"Quick Navigation:"}),e.jsxs(l,{display:"flex",gap:"sm",flexWrap:"wrap",children:[e.jsx("button",{onClick:()=>n("/"),children:"Home"}),e.jsx("button",{onClick:()=>n("/products"),children:"Products"}),e.jsx("button",{onClick:()=>n("/products/keyboards"),children:"Keyboards"}),e.jsx("button",{onClick:()=>n("/products/keyboards/mechanical"),children:"Mechanical"}),e.jsx("button",{onClick:()=>n("/products/keyboards/mechanical/rgb"),children:"RGB"})]})]})]})}},k={render:()=>e.jsxs(l,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"sm",children:"Slash Separator"}),e.jsx(o,{items:i,separator:e.jsx("span",{children:"/"})})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"sm",children:"Arrow Separator"}),e.jsx(o,{items:i,separator:e.jsx("span",{children:"→"})})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"sm",children:"Pipe Separator"}),e.jsx(o,{items:i,separator:e.jsx("span",{children:"|"})})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"sm",children:"Custom Icon Separator"}),e.jsx(o,{items:i,separator:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})})})]})]})},C={render:()=>{const r=[{label:"Home",href:"/"},{label:"Category",href:"/category"},{label:"Subcategory",href:"/category/sub"},{label:"Products",href:"/category/sub/products"},{label:"Gaming Equipment",href:"/category/sub/products/gaming"},{label:"Peripherals",href:"/category/sub/products/gaming/peripherals"},{label:"Keyboards",href:"/category/sub/products/gaming/peripherals/keyboards"},{label:"Mechanical",href:"/category/sub/products/gaming/peripherals/keyboards/mechanical"},{label:"RGB Backlit",current:!0}];return e.jsxs(l,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"sm",children:"Full Path (No Truncation)"}),e.jsx(o,{items:r})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"sm",children:"Truncated to 5 Items"}),e.jsx(o,{items:r,maxItems:5})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"sm",children:"Truncated to 3 Items"}),e.jsx(o,{items:r,maxItems:3})]})]})}},T={render:()=>{const[r,a]=le.useState([]),n=c=>{a(d=>[...d,c]),setTimeout(()=>{a(d=>d.slice(1))},3e3)},h=[{label:"Dashboard",onClick:()=>n("Navigated to Dashboard")},{label:"Analytics",href:"#analytics"},{label:"Reports",onClick:()=>n("Navigated to Reports")},{label:"Monthly Summary",current:!0}];return e.jsxs(l,{display:"flex",flexDirection:"column",gap:"md",p:"md",children:[e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"sm",children:"Mixed Navigation Types"}),e.jsx(o,{items:h}),e.jsx(s,{variant:"small",color:"gray",mt:"sm",children:"Mix of buttons (onClick) and links (href)"})]}),r.length>0&&e.jsx(l,{p:"sm",style:{backgroundColor:"rgba(74, 158, 255, 0.1)",borderRadius:"4px"},children:e.jsx(s,{variant:"small",color:"blue",children:r[r.length-1]})})]})}},S={render:()=>e.jsxs(l,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"sm",children:"Custom ARIA Label"}),e.jsx(o,{items:i,"aria-label":"Product category navigation"})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"sm",children:"Focus Indicators"}),e.jsx(o,{items:[{label:"Settings",onClick:()=>console.log("Settings")},{label:"User Profile",onClick:()=>console.log("Profile")},{label:"Security",onClick:()=>console.log("Security")},{label:"Two-Factor Auth",current:!0}]}),e.jsx(s,{variant:"small",color:"gray",mt:"sm",children:"Tab through the items to see focus indicators"})]})]})},I={render:()=>e.jsxs(l,{display:"flex",flexDirection:"column",gap:"xl",p:"md",children:[e.jsxs("div",{children:[e.jsx(s,{variant:"h3",mb:"lg",children:"E-commerce Product Page"}),e.jsx(l,{display:"flex",flexDirection:"column",gap:"md",children:e.jsx(o,{items:[{label:"Store",href:"/store"},{label:"Gaming",href:"/store/gaming"},{label:"Keyboards",href:"/store/gaming/keyboards"},{label:"Razer DeathStalker V2 Pro",current:!0}]})})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"h3",mb:"lg",children:"Documentation Navigation"}),e.jsx(l,{display:"flex",flexDirection:"column",gap:"md",children:e.jsx(o,{items:[{label:"Docs",href:"/docs"},{label:"Components",href:"/docs/components"},{label:"Navigation",href:"/docs/components/navigation"},{label:"Breadcrumb",current:!0}],size:"sm"})})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"h3",mb:"lg",children:"Admin Panel Navigation"}),e.jsx(l,{display:"flex",flexDirection:"column",gap:"md",children:e.jsx(o,{items:[{label:"Admin",onClick:()=>console.log("Admin")},{label:"User Management",onClick:()=>console.log("Users")},{label:"Roles & Permissions",onClick:()=>console.log("Roles")},{label:"Edit Role: Moderator",current:!0}],maxItems:4})})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"h3",mb:"lg",children:"File System Navigation"}),e.jsx(l,{display:"flex",flexDirection:"column",gap:"md",children:e.jsx(o,{items:[{label:"Root",onClick:()=>console.log("Root")},{label:"Users",onClick:()=>console.log("Users")},{label:"Projects",onClick:()=>console.log("Projects")},{label:"RSPWN-Design-System",onClick:()=>console.log("RSPWN")},{label:"src",onClick:()=>console.log("src")},{label:"components",onClick:()=>console.log("components")},{label:"ui",onClick:()=>console.log("ui")},{label:"Breadcrumb.tsx",current:!0}],maxItems:5,size:"sm",separator:e.jsx("span",{children:"/"})})})]})]})},P={args:{items:i,size:"md",variant:"default",maxItems:void 0},render:r=>e.jsx(l,{display:"flex",justifyContent:"center",p:"md",children:e.jsx(o,{...r})})};var N,R,$;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    size: 'md',
    variant: 'default'
  }
}`,...($=(R=v.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var z,M,A;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="body" mb="sm">Simple Navigation</Typography>\r
        <Breadcrumb items={[{
        label: 'Home',
        href: '/'
      }, {
        label: 'About',
        current: true
      }]} />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Three Levels</Typography>\r
        <Breadcrumb items={[{
        label: 'Dashboard',
        href: '/dashboard'
      }, {
        label: 'Settings',
        href: '/settings'
      }, {
        label: 'Profile',
        current: true
      }]} />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Deep Navigation</Typography>\r
        <Breadcrumb items={basicItems} />\r
      </div>\r
    </Box>
}`,...(A=(M=f.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var w,L,U;j.parameters={...j.parameters,docs:{...(w=j.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Small</Typography>\r
        <Breadcrumb items={basicItems} size="sm" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Medium</Typography>\r
        <Breadcrumb items={basicItems} size="md" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Large</Typography>\r
        <Breadcrumb items={basicItems} size="lg" />\r
      </div>\r
    </Box>
}`,...(U=(L=j.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var E,W,F;B.parameters={...B.parameters,docs:{...(E=B.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [currentPath, setCurrentPath] = useState('/products/keyboards/mechanical');
    const handleNavigation = (path: string) => {
      setCurrentPath(path);
    };
    const getItems = (path: string): BreadcrumbItem[] => {
      const pathSegments = path.split('/').filter(Boolean);
      const items: BreadcrumbItem[] = [{
        label: 'Home',
        onClick: () => handleNavigation('/')
      }];
      let currentPath = '';
      pathSegments.forEach((segment, index) => {
        currentPath += \`/\${segment}\`;
        const isLast = index === pathSegments.length - 1;
        items.push({
          label: segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' '),
          onClick: isLast ? undefined : () => handleNavigation(currentPath),
          current: isLast
        });
      });
      return items;
    };
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="body" mb="md">Current Path: {currentPath}</Typography>\r
          <Breadcrumb items={getItems(currentPath)} />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">Quick Navigation:</Typography>\r
          <Box display="flex" gap="sm" flexWrap="wrap">\r
            <button onClick={() => handleNavigation('/')}>Home</button>\r
            <button onClick={() => handleNavigation('/products')}>Products</button>\r
            <button onClick={() => handleNavigation('/products/keyboards')}>Keyboards</button>\r
            <button onClick={() => handleNavigation('/products/keyboards/mechanical')}>Mechanical</button>\r
            <button onClick={() => handleNavigation('/products/keyboards/mechanical/rgb')}>RGB</button>\r
          </Box>\r
        </div>\r
      </Box>;
  }
}`,...(F=(W=B.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var G,H,_;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="body" mb="sm">Slash Separator</Typography>\r
        <Breadcrumb items={basicItems} separator={<span>/</span>} />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Arrow Separator</Typography>\r
        <Breadcrumb items={basicItems} separator={<span>→</span>} />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Pipe Separator</Typography>\r
        <Breadcrumb items={basicItems} separator={<span>|</span>} />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Custom Icon Separator</Typography>\r
        <Breadcrumb items={basicItems} separator={<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">\r
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />\r
            </svg>} />\r
      </div>\r
    </Box>
}`,...(_=(H=k.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var q,V,K;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const longItems: BreadcrumbItem[] = [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Category',
      href: '/category'
    }, {
      label: 'Subcategory',
      href: '/category/sub'
    }, {
      label: 'Products',
      href: '/category/sub/products'
    }, {
      label: 'Gaming Equipment',
      href: '/category/sub/products/gaming'
    }, {
      label: 'Peripherals',
      href: '/category/sub/products/gaming/peripherals'
    }, {
      label: 'Keyboards',
      href: '/category/sub/products/gaming/peripherals/keyboards'
    }, {
      label: 'Mechanical',
      href: '/category/sub/products/gaming/peripherals/keyboards/mechanical'
    }, {
      label: 'RGB Backlit',
      current: true
    }];
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="body" mb="sm">Full Path (No Truncation)</Typography>\r
          <Breadcrumb items={longItems} />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">Truncated to 5 Items</Typography>\r
          <Breadcrumb items={longItems} maxItems={5} />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">Truncated to 3 Items</Typography>\r
          <Breadcrumb items={longItems} maxItems={3} />\r
        </div>\r
      </Box>;
  }
}`,...(K=(V=C.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var O,Q,J;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [messages, setMessages] = useState<string[]>([]);
    const addMessage = (message: string) => {
      setMessages(prev => [...prev, message]);
      setTimeout(() => {
        setMessages(prev => prev.slice(1));
      }, 3000);
    };
    const mixedItems: BreadcrumbItem[] = [{
      label: 'Dashboard',
      onClick: () => addMessage('Navigated to Dashboard')
    }, {
      label: 'Analytics',
      href: '#analytics'
    }, {
      label: 'Reports',
      onClick: () => addMessage('Navigated to Reports')
    }, {
      label: 'Monthly Summary',
      current: true
    }];
    return <Box display="flex" flexDirection="column" gap="md" p="md">\r
        <div>\r
          <Typography variant="body" mb="sm">Mixed Navigation Types</Typography>\r
          <Breadcrumb items={mixedItems} />\r
          <Typography variant="small" color="gray" mt="sm">\r
            Mix of buttons (onClick) and links (href)\r
          </Typography>\r
        </div>\r
        \r
        {messages.length > 0 && <Box p="sm" style={{
        backgroundColor: 'rgba(74, 158, 255, 0.1)',
        borderRadius: '4px'
      }}>\r
            <Typography variant="small" color="blue">\r
              {messages[messages.length - 1]}\r
            </Typography>\r
          </Box>}\r
      </Box>;
  }
}`,...(J=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};var X,Y,Z;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="body" mb="sm">Custom ARIA Label</Typography>\r
        <Breadcrumb items={basicItems} aria-label="Product category navigation" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Focus Indicators</Typography>\r
        <Breadcrumb items={[{
        label: 'Settings',
        onClick: () => console.log('Settings')
      }, {
        label: 'User Profile',
        onClick: () => console.log('Profile')
      }, {
        label: 'Security',
        onClick: () => console.log('Security')
      }, {
        label: 'Two-Factor Auth',
        current: true
      }]} />\r
        <Typography variant="small" color="gray" mt="sm">\r
          Tab through the items to see focus indicators\r
        </Typography>\r
      </div>\r
    </Box>
}`,...(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ae;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="xl" p="md">\r
      <div>\r
        <Typography variant="h3" mb="lg">E-commerce Product Page</Typography>\r
        <Box display="flex" flexDirection="column" gap="md">\r
          <Breadcrumb items={[{
          label: 'Store',
          href: '/store'
        }, {
          label: 'Gaming',
          href: '/store/gaming'
        }, {
          label: 'Keyboards',
          href: '/store/gaming/keyboards'
        }, {
          label: 'Razer DeathStalker V2 Pro',
          current: true
        }]} />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="lg">Documentation Navigation</Typography>\r
        <Box display="flex" flexDirection="column" gap="md">\r
          <Breadcrumb items={[{
          label: 'Docs',
          href: '/docs'
        }, {
          label: 'Components',
          href: '/docs/components'
        }, {
          label: 'Navigation',
          href: '/docs/components/navigation'
        }, {
          label: 'Breadcrumb',
          current: true
        }]} size="sm" />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="lg">Admin Panel Navigation</Typography>\r
        <Box display="flex" flexDirection="column" gap="md">\r
          <Breadcrumb items={[{
          label: 'Admin',
          onClick: () => console.log('Admin')
        }, {
          label: 'User Management',
          onClick: () => console.log('Users')
        }, {
          label: 'Roles & Permissions',
          onClick: () => console.log('Roles')
        }, {
          label: 'Edit Role: Moderator',
          current: true
        }]} maxItems={4} />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="lg">File System Navigation</Typography>\r
        <Box display="flex" flexDirection="column" gap="md">\r
          <Breadcrumb items={[{
          label: 'Root',
          onClick: () => console.log('Root')
        }, {
          label: 'Users',
          onClick: () => console.log('Users')
        }, {
          label: 'Projects',
          onClick: () => console.log('Projects')
        }, {
          label: 'RSPWN-Design-System',
          onClick: () => console.log('RSPWN')
        }, {
          label: 'src',
          onClick: () => console.log('src')
        }, {
          label: 'components',
          onClick: () => console.log('components')
        }, {
          label: 'ui',
          onClick: () => console.log('ui')
        }, {
          label: 'Breadcrumb.tsx',
          current: true
        }]} maxItems={5} size="sm" separator={<span>/</span>} />\r
        </Box>\r
      </div>\r
    </Box>
}`,...(ae=(re=I.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,oe,te;P.parameters={...P.parameters,docs:{...(se=P.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    size: 'md',
    variant: 'default',
    maxItems: undefined
  },
  render: args => <Box display="flex" justifyContent="center" p="md">\r
      <Breadcrumb {...args} />\r
    </Box>
}`,...(te=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};const Te=["Default","BasicUsage","Sizes","InteractiveNavigation","CustomSeparator","TruncatedBreadcrumbs","MixedInteractionTypes","AccessibilityFeatures","RealWorldExamples","Playground"];export{S as AccessibilityFeatures,f as BasicUsage,k as CustomSeparator,v as Default,B as InteractiveNavigation,T as MixedInteractionTypes,P as Playground,I as RealWorldExamples,j as Sizes,C as TruncatedBreadcrumbs,Te as __namedExportsOrder,Ce as default};
