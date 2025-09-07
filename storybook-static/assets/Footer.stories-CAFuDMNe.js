import{j as r}from"./jsx-runtime-CDt2p4po.js";import{d as t}from"./styled-components.browser.esm-Byilhkxn.js";import{B as n}from"./Box-COihqxSe.js";import{T as o}from"./Typography-u4LxpgYF.js";import"./index-GiUgBvb1.js";import"./propFilters-BGSNtaQt.js";const O=t(n)`
  border-top: 1px solid ${({theme:e})=>e.colors.gray.light};
  background-color: ${({theme:e})=>e.colors.foundation.black};
  margin-top: auto;
`,z=t(n)`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing[8]} ${({theme:e})=>e.spacing[6]};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: ${({theme:e})=>e.spacing[8]};
  }
`,V=t(n)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:e})=>e.spacing[6]};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    grid-template-columns: 2fr 1fr;
    gap: ${({theme:e})=>e.spacing[8]};
  }
  
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-columns: 3fr 1fr 1fr;
  }
`,G=t(n)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
`,q=t(n)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,E=t(n)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    align-items: flex-end;
  }
  
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    align-items: flex-start;
  }
`,U=t.a`
  text-decoration: none;
  font-family: ${({theme:e})=>e.typography.fonts.body};
  font-size: ${({theme:e})=>e.typography.fontSizes.sm};
  color: ${({theme:e})=>e.colors.text.secondary};
  transition: color ${({theme:e})=>e.durations.fast} ${({theme:e})=>e.easings.easeOut};
  
  &:hover {
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,H=t(n)`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    justify-content: flex-end;
  }
  
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    justify-content: flex-start;
  }
`,Z=t.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({theme:e})=>e.radius.md};
  color: ${({theme:e})=>e.colors.text.secondary};
  background-color: transparent;
  transition: all ${({theme:e})=>e.durations.fast} ${({theme:e})=>e.easings.easeOut};
  
  &:hover {
    color: ${({theme:e})=>e.colors.text.primary};
    background-color: ${({theme:e})=>e.colors.gray.base};
  }
`,J=t(n)`
  border-top: 1px solid ${({theme:e})=>e.colors.gray.base};
  padding-top: ${({theme:e})=>e.spacing[6]};
  margin-top: ${({theme:e})=>e.spacing[6]};
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`,g=({links:e=[],socialLinks:f=[],copyright:D="© 2024 RSPWN. All rights reserved.",className:I})=>r.jsx(O,{as:"footer",className:I,children:r.jsxs(z,{children:[r.jsxs(V,{children:[r.jsxs(G,{children:[r.jsx(o,{variant:"brand",color:"white",children:"RSPWN"}),r.jsx(o,{variant:"body2",color:"secondary",children:"Professional gaming and AI platform design system."})]}),e.length>0&&r.jsxs(q,{children:[r.jsx(o,{variant:"h6",color:"primary",children:"Links"}),e.map(a=>r.jsx(U,{href:a.href,target:a.external?"_blank":void 0,rel:a.external?"noopener noreferrer":void 0,children:a.label},a.href))]}),f.length>0&&r.jsxs(E,{children:[r.jsx(o,{variant:"h6",color:"primary",children:"Follow Us"}),r.jsx(H,{children:f.map(a=>r.jsx(Z,{href:a.href,target:"_blank",rel:"noopener noreferrer","aria-label":a.label,children:a.icon},a.href))})]})]}),r.jsx(J,{children:r.jsx(o,{variant:"caption",color:"muted",children:D})})]})});try{g.displayName="Footer",g.__docgenInfo={description:"",displayName:"Footer",props:{links:{defaultValue:{value:"[]"},description:"",name:"links",required:!1,type:{name:"{ label: string; href: string; external?: boolean; }[]"}},socialLinks:{defaultValue:{value:"[]"},description:"",name:"socialLinks",required:!1,type:{name:"{ label: string; href: string; icon: ReactNode; }[]"}},copyright:{defaultValue:{value:"© 2024 RSPWN. All rights reserved."},description:"",name:"copyright",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ae={title:"UI/Footer",component:g,parameters:{layout:"fullscreen"},tags:["autodocs"]},u=[{label:"About",href:"/about"},{label:"Privacy",href:"/privacy"},{label:"Terms",href:"/terms"},{label:"Support",href:"/support"}],s=[{label:"Twitter",href:"https://twitter.com/rspwn",icon:r.jsx("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})})},{label:"GitHub",href:"https://github.com/rspwn",icon:r.jsx("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})},{label:"Discord",href:"https://discord.gg/rspwn",icon:r.jsx("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"})})}],i={args:{links:u,socialLinks:s}},l={args:{copyright:"© 2024 RSPWN. All rights reserved."}},c={args:{links:[{label:"Privacy Policy",href:"/privacy"},{label:"Terms of Service",href:"/terms"},{label:"Contact Us",href:"/contact"},{label:"Help Center",href:"/help"},{label:"Documentation",href:"/docs",external:!0}]}},p={args:{socialLinks:s}},d={args:{links:[{label:"About RSPWN",href:"/about"},{label:"Privacy Policy",href:"/privacy"},{label:"Terms of Service",href:"/terms"},{label:"Cookie Policy",href:"/cookies"},{label:"Support Center",href:"/support"},{label:"API Documentation",href:"/docs",external:!0},{label:"Status Page",href:"https://status.rspwn.com",external:!0},{label:"Community Guidelines",href:"/guidelines"}],socialLinks:s,copyright:"© 2024 RSPWN Gaming Platform. All rights reserved. Built for the future of competitive gaming."}},m={args:{links:u,socialLinks:s,copyright:"© 2024 RSPWN Design System. Licensed under MIT."}},h={args:{links:u,socialLinks:s},parameters:{viewport:{defaultViewport:"mobile1"}}};var y,b,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    links: defaultLinks,
    socialLinks: socialLinks
  }
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var k,v,S;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    copyright: '© 2024 RSPWN. All rights reserved.'
  }
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var $,w,P;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    links: [{
      label: 'Privacy Policy',
      href: '/privacy'
    }, {
      label: 'Terms of Service',
      href: '/terms'
    }, {
      label: 'Contact Us',
      href: '/contact'
    }, {
      label: 'Help Center',
      href: '/help'
    }, {
      label: 'Documentation',
      href: '/docs',
      external: true
    }]
  }
}`,...(P=(w=c.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var j,L,C;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    socialLinks: socialLinks
  }
}`,...(C=(L=p.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var N,W,A;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    links: [{
      label: 'About RSPWN',
      href: '/about'
    }, {
      label: 'Privacy Policy',
      href: '/privacy'
    }, {
      label: 'Terms of Service',
      href: '/terms'
    }, {
      label: 'Cookie Policy',
      href: '/cookies'
    }, {
      label: 'Support Center',
      href: '/support'
    }, {
      label: 'API Documentation',
      href: '/docs',
      external: true
    }, {
      label: 'Status Page',
      href: 'https://status.rspwn.com',
      external: true
    }, {
      label: 'Community Guidelines',
      href: '/guidelines'
    }],
    socialLinks: socialLinks,
    copyright: '© 2024 RSPWN Gaming Platform. All rights reserved. Built for the future of competitive gaming.'
  }
}`,...(A=(W=d.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var F,R,_;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    links: defaultLinks,
    socialLinks: socialLinks,
    copyright: '© 2024 RSPWN Design System. Licensed under MIT.'
  }
}`,...(_=(R=m.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var M,T,B;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    links: defaultLinks,
    socialLinks: socialLinks
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(B=(T=h.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const te=["Default","MinimalFooter","WithLinksOnly","WithSocialOnly","ExtensiveFooter","CustomCopyright","Mobile"];export{m as CustomCopyright,i as Default,d as ExtensiveFooter,l as MinimalFooter,h as Mobile,c as WithLinksOnly,p as WithSocialOnly,te as __namedExportsOrder,ae as default};
