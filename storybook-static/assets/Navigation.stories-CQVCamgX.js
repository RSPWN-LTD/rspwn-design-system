import{j as d}from"./jsx-runtime-CDt2p4po.js";import{r as s,a as Pe,R as je}from"./index-GiUgBvb1.js";import"./index-CROobee-.js";import{d as C,l as z}from"./styled-components.browser.esm-Byilhkxn.js";import{B as U}from"./Box-D0rAd6Cs.js";import{T as Ne}from"./Typography-B2ZqsRPU.js";/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},N.apply(this,arguments)}var $;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($||($={}));const G="popstate";function Ue(e){e===void 0&&(e={});function t(n,a){let{pathname:i,search:o,hash:u}=n.location;return J("",{pathname:i,search:o,hash:u},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:O(a)}return Ee(t,r,null,e)}function x(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ke(){return Math.random().toString(36).substr(2,8)}function H(e,t){return{usr:e.state,key:e.key,idx:t}}function J(e,t,r,n){return r===void 0&&(r=null),N({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?B(t):t,{state:r,key:t&&t.key||n||ke()})}function O(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function B(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Ee(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:i=!1}=n,o=a.history,u=$.Pop,c=null,l=h();l==null&&(l=0,o.replaceState(N({},o.state,{idx:l}),""));function h(){return(o.state||{idx:null}).idx}function p(){u=$.Pop;let f=h(),g=f==null?null:f-l;l=f,c&&c({action:u,location:m.location,delta:g})}function v(f,g){u=$.Push;let b=J(m.location,f,g);l=h()+1;let y=H(b,l),w=m.createHref(b);try{o.pushState(y,"",w)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;a.location.assign(w)}i&&c&&c({action:u,location:m.location,delta:1})}function R(f,g){u=$.Replace;let b=J(m.location,f,g);l=h();let y=H(b,l),w=m.createHref(b);o.replaceState(y,"",w),i&&c&&c({action:u,location:m.location,delta:0})}function S(f){let g=a.location.origin!=="null"?a.location.origin:a.location.href,b=typeof f=="string"?f:O(f);return b=b.replace(/ $/,"%20"),x(g,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,g)}let m={get action(){return u},get location(){return e(a,o)},listen(f){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(G,p),c=f,()=>{a.removeEventListener(G,p),c=null}},createHref(f){return t(a,f)},createURL:S,encodeLocation(f){let g=S(f);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:v,replace:R,go(f){return o.go(f)}};return m}var X;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(X||(X={}));function me(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Le(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?B(e):e;return{pathname:r?r.startsWith("/")?r:Ie(r,t):t,search:Oe(n),hash:_e(a)}}function Ie(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function V(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Me(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function ge(e,t){let r=Me(e);return t?r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function ve(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=B(e):(a=N({},e),x(!a.pathname||!a.pathname.includes("?"),V("?","pathname","search",a)),x(!a.pathname||!a.pathname.includes("#"),V("#","pathname","hash",a)),x(!a.search||!a.search.includes("#"),V("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,u;if(o==null)u=r;else{let p=t.length-1;if(!n&&o.startsWith("..")){let v=o.split("/");for(;v[0]==="..";)v.shift(),p-=1;a.pathname=v.join("/")}u=p>=0?t[p]:"/"}let c=Le(a,u),l=o&&o!=="/"&&o.endsWith("/"),h=(i||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(l||h)&&(c.pathname+="/"),c}const be=e=>e.join("/").replace(/\/\/+/g,"/"),Oe=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_e=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,ye=["post","put","patch","delete"];new Set(ye);const Be=["get",...ye];new Set(Be);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_.apply(this,arguments)}const xe=s.createContext(null),j=s.createContext(null),D=s.createContext(null),T=s.createContext({outlet:null,matches:[],isDataRoute:!1});function Te(e,t){let{relative:r}=t===void 0?{}:t;W()||x(!1);let{basename:n,navigator:a}=s.useContext(j),{hash:i,pathname:o,search:u}=Ce(e,{relative:r}),c=o;return n!=="/"&&(c=o==="/"?n:be([n,o])),a.createHref({pathname:c,search:u,hash:i})}function W(){return s.useContext(D)!=null}function A(){return W()||x(!1),s.useContext(D).location}function we(e){s.useContext(j).static||s.useLayoutEffect(e)}function We(){let{isDataRoute:e}=s.useContext(T);return e?Fe():Ae()}function Ae(){W()||x(!1);let e=s.useContext(xe),{basename:t,future:r,navigator:n}=s.useContext(j),{matches:a}=s.useContext(T),{pathname:i}=A(),o=JSON.stringify(ge(a,r.v7_relativeSplatPath)),u=s.useRef(!1);return we(()=>{u.current=!0}),s.useCallback(function(l,h){if(h===void 0&&(h={}),!u.current)return;if(typeof l=="number"){n.go(l);return}let p=ve(l,JSON.parse(o),i,h.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:be([t,p.pathname])),(h.replace?n.replace:n.push)(p,h.state,h)},[t,n,o,i,e])}function Ce(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=s.useContext(j),{matches:a}=s.useContext(T),{pathname:i}=A(),o=JSON.stringify(ge(a,n.v7_relativeSplatPath));return s.useMemo(()=>ve(e,JSON.parse(o),i,r==="path"),[e,o,i,r])}var Se=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Se||{}),$e=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($e||{});function Ve(e){let t=s.useContext(xe);return t||x(!1),t}function ze(e){let t=s.useContext(T);return t||x(!1),t}function Je(e){let t=ze(),r=t.matches[t.matches.length-1];return r.route.id||x(!1),r.route.id}function Fe(){let{router:e}=Ve(Se.UseNavigateStable),t=Je($e.UseNavigateStable),r=s.useRef(!1);return we(()=>{r.current=!0}),s.useCallback(function(a,i){i===void 0&&(i={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,_({fromRouteId:t},i)))},[e,t])}function Ke(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function De(e){let{basename:t="/",children:r=null,location:n,navigationType:a=$.Pop,navigator:i,static:o=!1,future:u}=e;W()&&x(!1);let c=t.replace(/^\/*/,"/"),l=s.useMemo(()=>({basename:c,navigator:i,static:o,future:_({v7_relativeSplatPath:!1},u)}),[c,u,i,o]);typeof n=="string"&&(n=B(n));let{pathname:h="/",search:p="",hash:v="",state:R=null,key:S="default"}=n,m=s.useMemo(()=>{let f=me(h,c);return f==null?null:{location:{pathname:f,search:p,hash:v,state:R,key:S},navigationType:a}},[c,h,p,v,R,S,a]);return m==null?null:s.createElement(j.Provider,{value:l},s.createElement(D.Provider,{children:r,value:m}))}new Promise(()=>{});/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},F.apply(this,arguments)}function qe(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function Ge(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function He(e,t){return e.button===0&&(!t||t==="_self")&&!Ge(e)}const Xe=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Qe="6";try{window.__reactRouterVersion=Qe}catch{}const Ye="startTransition",Q=Pe[Ye];function Ze(e){let{basename:t,children:r,future:n,window:a}=e,i=s.useRef();i.current==null&&(i.current=Ue({window:a,v5Compat:!0}));let o=i.current,[u,c]=s.useState({action:o.action,location:o.location}),{v7_startTransition:l}=n||{},h=s.useCallback(p=>{l&&Q?Q(()=>c(p)):c(p)},[c,l]);return s.useLayoutEffect(()=>o.listen(h),[o,h]),s.useEffect(()=>Ke(n),[n]),s.createElement(De,{basename:t,children:r,location:u.location,navigationType:u.action,navigator:o,future:n})}const et=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,q=s.forwardRef(function(t,r){let{onClick:n,relative:a,reloadDocument:i,replace:o,state:u,target:c,to:l,preventScrollReset:h,viewTransition:p}=t,v=qe(t,Xe),{basename:R}=s.useContext(j),S,m=!1;if(typeof l=="string"&&tt.test(l)&&(S=l,et))try{let y=new URL(window.location.href),w=l.startsWith("//")?new URL(y.protocol+l):new URL(l),P=me(w.pathname,R);w.origin===y.origin&&P!=null?l=P+w.search+w.hash:m=!0}catch{}let f=Te(l,{relative:a}),g=nt(l,{replace:o,state:u,target:c,preventScrollReset:h,relative:a,viewTransition:p});function b(y){n&&n(y),y.defaultPrevented||g(y)}return s.createElement("a",F({},v,{href:S||f,onClick:m||i?n:b,ref:r,target:c}))});var Y;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Y||(Y={}));var Z;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Z||(Z={}));function nt(e,t){let{target:r,replace:n,state:a,preventScrollReset:i,relative:o,viewTransition:u}=t===void 0?{}:t,c=We(),l=A(),h=Ce(e,{relative:o});return s.useCallback(p=>{if(He(p,r)){p.preventDefault();let v=n!==void 0?n:O(l)===O(h);c(e,{replace:v,state:a,preventScrollReset:i,relative:o,viewTransition:u})}},[l,c,h,n,a,r,e,i,o,u])}const rt=C(U)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray.light};
  background-color: ${({theme:e})=>e.colors.foundation.black};
`,at=C(U)`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing[6]};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.lg}) {
    padding: 0 ${({theme:e})=>e.spacing[8]};
  }
`,ot=C(U)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`,it=C(q)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
`,st=C(U)`
  display: none;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[8]};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: flex;
  }
`,lt=C(q)`
  text-decoration: none;
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.md};
  font-family: ${({theme:e})=>e.typography.fonts.body};
  font-size: ${({theme:e})=>e.typography.fontSizes.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeights.medium};
  color: ${({theme:e})=>e.colors.text.secondary};
  transition: all ${({theme:e})=>e.durations.fast} ${({theme:e})=>e.easings.easeOut};
  
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  
  ${({$isActive:e,theme:t})=>e&&z`
    color: ${t.colors.innovation.primaryBlue};
    background-color: rgba(74, 158, 255, 0.1);
  `}
  
  &:hover {
    color: ${({theme:e})=>e.colors.text.primary};
    background-color: ${({theme:e})=>e.colors.gray.base};
    
    ${({$isActive:e,theme:t})=>e&&z`
      color: ${t.colors.innovation.primaryBlue};
      background-color: rgba(74, 158, 255, 0.15);
    `}
  }
`,ct=C.button`
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
`,ut=C(U)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${({theme:e})=>e.colors.foundation.black};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray.light};
  padding: ${({theme:e})=>e.spacing[4]};
  
  display: ${({$isOpen:e})=>e?"block":"none"};
  
  @media (min-width: ${({theme:e})=>e.breakpoints.md}) {
    display: none;
  }
`,ft=C(q)`
  display: block;
  text-decoration: none;
  padding: ${({theme:e})=>e.spacing[3]} 0;
  font-family: ${({theme:e})=>e.typography.fonts.body};
  font-size: ${({theme:e})=>e.typography.fontSizes.base};
  font-weight: ${({theme:e})=>e.typography.fontWeights.medium};
  color: ${({theme:e})=>e.colors.text.secondary};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray.base};
  
  ${({$isActive:e,theme:t})=>e&&z`
    color: ${t.colors.innovation.primaryBlue};
  `}
  
  &:hover {
    color: ${({theme:e})=>e.colors.text.primary};
  }
  
  &:last-child {
    border-bottom: none;
  }
`,K=({items:e,className:t})=>{const r=A(),[n,a]=je.useState(!1),i=()=>a(!n);return d.jsxs(rt,{as:"nav",className:t,position:"relative",children:[d.jsx(at,{children:d.jsxs(ot,{children:[d.jsx(it,{to:"/",children:d.jsx(Ne,{variant:"brand",color:"white",children:"RSPWN"})}),d.jsx(st,{children:e.map(o=>d.jsxs(lt,{to:o.href,$isActive:r.pathname===o.href,children:[o.icon,o.label]},o.href))}),d.jsx(ct,{onClick:i,children:d.jsx("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]})}),d.jsx(ut,{$isOpen:n,children:e.map(o=>d.jsx(ft,{to:o.href,$isActive:r.pathname===o.href,onClick:()=>a(!1),children:o.label},o.href))})]})};try{K.displayName="Navigation",K.__docgenInfo={description:"",displayName:"Navigation",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ label: string; href: string; icon?: ReactNode; }[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const yt={title:"UI/Navigation",component:K,parameters:{layout:"fullscreen"},tags:["autodocs"],decorators:[e=>d.jsx(Ze,{children:d.jsx(e,{})})]},Re=[{label:"Home",href:"/"},{label:"Components",href:"/components"},{label:"Tokens",href:"/tokens"},{label:"About",href:"/about"}],ht=[{label:"Dashboard",href:"/dashboard",icon:d.jsxs("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[d.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),d.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"9"}),d.jsx("line",{x1:"9",y1:"15",x2:"15",y2:"15"})]})},{label:"Analytics",href:"/analytics",icon:d.jsx("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("polyline",{points:"22,12 18,12 15,21 9,3 6,12 2,12"})})},{label:"Settings",href:"/settings",icon:d.jsxs("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[d.jsx("circle",{cx:"12",cy:"12",r:"3"}),d.jsx("path",{d:"m12 1 0 6m0 6 0 6m11-7-6 0m-6 0-6 0"})]})}],k={args:{items:Re}},E={args:{items:ht}},L={args:{items:[{label:"Home",href:"/"},{label:"About",href:"/about"}]}},I={args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Services",href:"/services"},{label:"Solutions",href:"/solutions"},{label:"Resources",href:"/resources"},{label:"Support",href:"/support"},{label:"About",href:"/about"},{label:"Contact",href:"/contact"}]}},M={args:{items:Re},parameters:{viewport:{defaultViewport:"mobile1"}}};var ee,te,ne;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  }
}`,...(ne=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,ae,oe;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    items: itemsWithIcons
  }
}`,...(oe=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ie,se,le;L.parameters={...L.parameters,docs:{...(ie=L.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'About',
      href: '/about'
    }]
  }
}`,...(le=(se=L.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ce,ue,fe;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Services',
      href: '/services'
    }, {
      label: 'Solutions',
      href: '/solutions'
    }, {
      label: 'Resources',
      href: '/resources'
    }, {
      label: 'Support',
      href: '/support'
    }, {
      label: 'About',
      href: '/about'
    }, {
      label: 'Contact',
      href: '/contact'
    }]
  }
}`,...(fe=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:fe.source}}};var he,de,pe;M.parameters={...M.parameters,docs:{...(he=M.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(pe=(de=M.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};const xt=["Default","WithIcons","MinimalItems","ManyItems","Mobile"];export{k as Default,I as ManyItems,L as MinimalItems,M as Mobile,E as WithIcons,xt as __namedExportsOrder,yt as default};
