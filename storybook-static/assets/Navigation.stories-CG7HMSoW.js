import{j as n}from"./jsx-runtime-CDt2p4po.js";import{R}from"./index-GiUgBvb1.js";import{d as o,l as x}from"./styled-components.browser.esm-Byilhkxn.js";import{B as k}from"./Box-COihqxSe.js";import{T as le}from"./Typography-u4LxpgYF.js";import"./propFilters-BGSNtaQt.js";const ce=o(k)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray.light};
  background-color: ${({theme:e})=>e.colors.foundation.black};
`,de=o(k)`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing[6]};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: 0 ${({theme:e})=>e.spacing[8]};
  }
`,pe=o(k)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    height: 80px;
  }
`,he=o.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  
  &:hover {
    opacity: 0.8;
  }
`,ue=o(k)`
  display: none;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[6]};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: flex;
  }
`,me=o.a`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  text-decoration: none;
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
  border-radius: ${({theme:e})=>e.radius.md};
  font-family: ${({theme:e})=>e.typography.fonts.body};
  font-size: ${({theme:e})=>e.typography.fontSizes.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeights.medium};
  color: ${({theme:e})=>e.colors.text.secondary};
  transition: all ${({theme:e})=>e.durations.fast} ${({theme:e})=>e.easings.easeInOut};
  cursor: pointer;
  
  ${({$isActive:e,theme:t})=>e&&x`
    color: ${t.colors.innovation.primaryBlue};
    background-color: rgba(74, 158, 255, 0.15);
  `}
  
  &:hover {
    color: ${({theme:e})=>e.colors.text.primary};
    background-color: ${({theme:e})=>e.colors.gray.base};
    
    ${({$isActive:e,theme:t})=>e&&x`
      color: ${t.colors.innovation.primaryBlue};
      background-color: rgba(74, 158, 255, 0.15);
    `}
  }
`,ge=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  color: ${({theme:e})=>e.colors.text.secondary};
  cursor: pointer;
  border-radius: ${({theme:e})=>e.radius.md};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.gray.base};
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,fe=o.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
  
  display: ${({$isOpen:e})=>e?"flex":"none"};
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,be=o.div`
  background-color: ${({theme:e})=>e.colors.foundation.black};
  border-radius: ${({theme:e})=>e.radius.xl};
  padding: ${({theme:e})=>e.spacing[8]};
  margin: ${({theme:e})=>e.spacing[4]};
  width: calc(100% - ${({theme:e})=>e.spacing[8]});
  max-width: 400px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid ${({theme:e})=>e.colors.gray.light};
  box-shadow: ${({theme:e})=>e.shadows.xl};
`,ye=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing[6]};
  padding-bottom: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray.light};
`,xe=o.h2`
  font-family: ${({theme:e})=>e.typography.fonts.body};
  font-size: ${({theme:e})=>e.typography.fontSizes.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeights.bold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin: 0;
`,ve=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  color: ${({theme:e})=>e.colors.text.secondary};
  cursor: pointer;
  border-radius: ${({theme:e})=>e.radius.md};
  transition: all ${({theme:e})=>e.durations.fast} ${({theme:e})=>e.easings.easeInOut};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.gray.base};
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,ke=o.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:e})=>e.spacing[4]};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  font-family: ${({theme:e})=>e.typography.fonts.body};
  font-size: ${({theme:e})=>e.typography.fontSizes.lg};
  font-weight: ${({theme:e})=>e.typography.fontWeights.medium};
  color: ${({theme:e})=>e.colors.text.secondary};
  border-radius: ${({theme:e})=>e.radius.lg};
  transition: all ${({theme:e})=>e.durations.fast} ${({theme:e})=>e.easings.easeInOut};
  
  ${({$isActive:e,theme:t})=>e&&x`
    color: ${t.colors.innovation.primaryBlue};
    background-color: rgba(74, 158, 255, 0.15);
  `}
  
  &:hover {
    color: ${({theme:e})=>e.colors.text.primary};
    background-color: ${({theme:e})=>e.colors.gray.base};
    
    ${({$isActive:e,theme:t})=>e&&x`
      color: ${t.colors.innovation.primaryBlue};
      background-color: rgba(74, 158, 255, 0.15);
    `}
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`,$e=()=>n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})}),Ce=()=>n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L9 7.586l3.293-3.293a1 1 0 111.414 1.414L10.414 9l3.293 3.293a1 1 0 01-1.414 1.414L9 10.414l-3.293 3.293a1 1 0 01-1.414-1.414L7.586 9 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}),v=({items:e,className:t,linkComponent:a,currentPath:s,brand:C,brandHref:i="/",onBrandClick:l})=>{const[c,w]=R.useState(!1),j=()=>w(!c),oe=a||me,te=a||ke,ae=()=>{const r=C||n.jsx(le,{variant:"brand",color:"white",children:"RSPWN"});return l||i?n.jsx(he,{href:i,onClick:l,style:{textDecoration:"none"},children:r}):r},M=r=>s?s===r:!1,I=r=>ie=>{r.onClick&&r.onClick(ie),w(!1)},se=r=>{r.target===r.currentTarget&&w(!1)};return R.useEffect(()=>(c?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[c]),n.jsxs(ce,{as:"nav",className:t,position:"relative",children:[n.jsx(de,{children:n.jsxs(pe,{children:[ae(),n.jsx(ue,{children:e.map(r=>n.jsxs(oe,{to:r.href,href:r.href,$isActive:M(r.href),onClick:I(r),children:[r.icon&&n.jsx("span",{children:r.icon}),r.label]},r.href))}),n.jsx(ge,{onClick:j,children:n.jsx($e,{})})]})}),n.jsx(fe,{$isOpen:c,onClick:se,children:n.jsxs(be,{children:[n.jsxs(ye,{children:[n.jsx(xe,{children:"Menu"}),n.jsx(ve,{onClick:j,children:n.jsx(Ce,{})})]}),e.map(r=>n.jsxs(te,{to:r.href,href:r.href,$isActive:M(r.href),onClick:I(r),children:[r.icon&&n.jsx("span",{style:{marginRight:"12px"},children:r.icon}),r.label]},r.href))]})})]})};try{v.displayName="Navigation",v.__docgenInfo={description:"",displayName:"Navigation",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"NavigationItem[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},linkComponent:{defaultValue:null,description:`Custom link component (for frameworks other than React Router)
If not provided, will use regular anchor tags`,name:"linkComponent",required:!1,type:{name:"ComponentType<{ to?: string; href?: string; children: ReactNode; className?: string | undefined; onClick?: ((event: MouseEvent<Element, MouseEvent>) => void) | undefined; }> | undefined"}},currentPath:{defaultValue:null,description:`Current pathname for active state (optional)
If not provided, no active state will be shown`,name:"currentPath",required:!1,type:{name:"string"}},brand:{defaultValue:null,description:"Brand/logo content",name:"brand",required:!1,type:{name:"ReactNode"}},brandHref:{defaultValue:{value:"/"},description:"Brand/logo link (if clickable)",name:"brandHref",required:!1,type:{name:"string"}},onBrandClick:{defaultValue:null,description:"Brand/logo onClick handler",name:"onBrandClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}}}catch{}const Pe={title:"UI/Navigation",component:v,parameters:{layout:"fullscreen"},tags:["autodocs"]},$=[{label:"Home",href:"/"},{label:"Components",href:"/components"},{label:"Tokens",href:"/tokens"},{label:"About",href:"/about"}],re=[{label:"Dashboard",href:"/dashboard",icon:n.jsxs("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[n.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),n.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"}),n.jsx("line",{x1:"9",y1:"15",x2:"15",y2:"15"})]})},{label:"Analytics",href:"/analytics",icon:n.jsx("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("polyline",{points:"22,12 18,12 15,21 9,3 6,12 2,12"})})},{label:"Settings",href:"/settings",icon:n.jsxs("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[n.jsx("circle",{cx:"12",cy:"12",r:"3"}),n.jsx("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"})]})}],d={args:{items:$,currentPath:"/components"}},p={args:{items:re,currentPath:"/dashboard"}},h={args:{items:[{label:"Home",href:"#home",onClick:()=>alert("Home clicked!")},{label:"Products",href:"#products",onClick:()=>alert("Products clicked!")},{label:"Contact",href:"#contact",onClick:()=>alert("Contact clicked!")}]}},u={args:{items:$,brand:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx("div",{style:{width:"32px",height:"32px",backgroundColor:"#4A9EFF",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold",fontSize:"14px"},children:"R"}),n.jsx("span",{style:{fontWeight:"bold",fontSize:"18px"},children:"RSPWN Gaming"})]}),currentPath:"/components"}},m={args:{items:[{label:"Home",href:"/"},{label:"Games",href:"/games"},{label:"Tournaments",href:"/tournaments"},{label:"Leaderboards",href:"/leaderboards"},{label:"Community",href:"/community"},{label:"Store",href:"/store"},{label:"Support",href:"/support"},{label:"About",href:"/about"}],currentPath:"/games"}},g={args:{items:$,currentPath:"/components"},parameters:{viewport:{defaultViewport:"mobile1"}}},f={args:{items:re,currentPath:"/dashboard"},parameters:{viewport:{defaultViewport:"mobile1"}}},b={render:e=>{const t=({to:a,href:s,children:C,...i})=>n.jsx("a",{href:a||s,onClick:l=>{l.preventDefault(),alert(`Would navigate to: ${a||s}`)},...i,children:C});return n.jsx(v,{items:$,linkComponent:t,currentPath:"/components"})}},y={args:{items:[{label:"Dashboard",href:"/dashboard",icon:n.jsxs("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:[n.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),n.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"}),n.jsx("line",{x1:"9",y1:"15",x2:"15",y2:"15"})]})},{label:"Profile",href:"/profile"},{label:"Settings",href:"/settings"}],currentPath:"/dashboard"},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!0},{id:"landmark-one-main",enabled:!1}]}}}};var S,P,B;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    currentPath: '/components' // Manually specify active path
  }
}`,...(B=(P=d.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var N,W,H;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: itemsWithIcons,
    currentPath: '/dashboard'
  }
}`,...(H=(W=p.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var z,V,A;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '#home',
      onClick: () => alert('Home clicked!')
    }, {
      label: 'Products',
      href: '#products',
      onClick: () => alert('Products clicked!')
    }, {
      label: 'Contact',
      href: '#contact',
      onClick: () => alert('Contact clicked!')
    }]
  }
}`,...(A=(V=h.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var L,E,D;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    brand: <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>\r
        <div style={{
        width: '32px',
        height: '32px',
        backgroundColor: '#4A9EFF',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '14px'
      }}>\r
          R\r
        </div>\r
        <span style={{
        fontWeight: 'bold',
        fontSize: '18px'
      }}>RSPWN Gaming</span>\r
      </div>,
    currentPath: '/components'
  }
}`,...(D=(E=u.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var _,O,T;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Games',
      href: '/games'
    }, {
      label: 'Tournaments',
      href: '/tournaments'
    }, {
      label: 'Leaderboards',
      href: '/leaderboards'
    }, {
      label: 'Community',
      href: '/community'
    }, {
      label: 'Store',
      href: '/store'
    }, {
      label: 'Support',
      href: '/support'
    }, {
      label: 'About',
      href: '/about'
    }],
    currentPath: '/games'
  }
}`,...(T=(O=m.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var q,F,G;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    currentPath: '/components'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(G=(F=g.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var U,J,K;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    items: itemsWithIcons,
    currentPath: '/dashboard'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => {
    // Mock React Router Link component
    const RouterLinkMock: React.FC<any> = ({
      to,
      href,
      children,
      ...props
    }) => <a href={to || href} onClick={e => {
      e.preventDefault();
      alert(\`Would navigate to: \${to || href}\`);
    }} {...props}>\r
        {children}\r
      </a>;
    return <Navigation items={defaultItems} linkComponent={RouterLinkMock} currentPath="/components" />;
  }
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Dashboard',
      href: '/dashboard',
      icon: <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">\r
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />\r
            <line x1="9" y1="9" x2="15" y2="15" />\r
            <line x1="9" y1="15" x2="15" y2="15" />\r
          </svg>
    }, {
      label: 'Profile',
      href: '/profile'
    }, {
      label: 'Settings',
      href: '/settings'
    }],
    currentPath: '/dashboard'
  },
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: true
        }, {
          id: 'landmark-one-main',
          enabled: false // Navigation doesn't need main landmark
        }]
      }
    }
  }
}`,...(ne=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const Be=["Default","WithIcons","WithClickHandlers","CustomBrand","ManyItems","Mobile","MobileWithIcons","WithReactRouter","AccessibilityDemo"];export{y as AccessibilityDemo,u as CustomBrand,d as Default,m as ManyItems,g as Mobile,f as MobileWithIcons,h as WithClickHandlers,p as WithIcons,b as WithReactRouter,Be as __namedExportsOrder,Pe as default};
