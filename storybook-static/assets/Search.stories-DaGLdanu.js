import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as i}from"./index-GiUgBvb1.js";import{l as g,d as h}from"./styled-components.browser.esm-Byilhkxn.js";import{B as d}from"./Box-C_K3nAud.js";import{T as o}from"./Typography-CzMVeEUw.js";import"./propFilters-BGSNtaQt.js";const rr=r=>{switch(r){case"sm":return g`
        height: 36px;
        font-size: ${({theme:a})=>a.typography.fontSizes.xs};
        
        input {
          padding: ${({theme:a})=>a.spacing[2]} ${({theme:a})=>a.spacing[3]};
          padding-left: ${({theme:a})=>a.spacing[8]};
        }
        
        .search-icon {
          left: ${({theme:a})=>a.spacing[2]};
          width: 16px;
          height: 16px;
        }
        
        .clear-button {
          right: ${({theme:a})=>a.spacing[2]};
          width: 20px;
          height: 20px;
        }
      `;case"lg":return g`
        height: 52px;
        font-size: ${({theme:a})=>a.typography.fontSizes.base};
        
        input {
          padding: ${({theme:a})=>a.spacing[4]} ${({theme:a})=>a.spacing[5]};
          padding-left: ${({theme:a})=>a.spacing[12]};
        }
        
        .search-icon {
          left: ${({theme:a})=>a.spacing[4]};
          width: 20px;
          height: 20px;
        }
        
        .clear-button {
          right: ${({theme:a})=>a.spacing[4]};
          width: 24px;
          height: 24px;
        }
      `;default:return g`
        height: 44px;
        font-size: ${({theme:a})=>a.typography.fontSizes.sm};
        
        input {
          padding: ${({theme:a})=>a.spacing[3]} ${({theme:a})=>a.spacing[4]};
          padding-left: ${({theme:a})=>a.spacing[10]};
        }
        
        .search-icon {
          left: ${({theme:a})=>a.spacing[3]};
          width: 18px;
          height: 18px;
        }
        
        .clear-button {
          right: ${({theme:a})=>a.spacing[3]};
          width: 22px;
          height: 22px;
        }
      `}},ar=(r,a)=>{const c=g`
    border: 1px solid ${({theme:n})=>n.colors.gray.light};
    background-color: ${({theme:n})=>n.colors.gray.base};
    
    &:focus-within {
      border-color: ${({theme:n})=>n.colors.innovation.primaryBlue};
      box-shadow: 0 0 0 2px rgba(74, 158, 255, 0.2);
    }
    
    ${a&&g`
        border-color: ${({theme:n})=>n.colors.semantic.error};
        
        &:focus-within {
          border-color: ${({theme:n})=>n.colors.semantic.error};
          box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
        }
      `}
  `;switch(r){case"filled":return g`
        ${c}
        background-color: ${({theme:n})=>n.colors.gray.dark};
      `;case"borderless":return g`
        border: none;
        background-color: transparent;
        
        &:focus-within {
          background-color: ${({theme:n})=>n.colors.gray.base};
        }
      `;default:return c}},or=h.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  border-radius: ${({theme:r})=>r.radius.base};
  transition: all ${({theme:r})=>r.durations.fast} ${({theme:r})=>r.easings.easeInOut};
  font-family: ${({theme:r})=>r.typography.fonts.body};
  
  ${({width:r})=>r&&g`
      width: ${typeof r=="number"?`${r}px`:r};
    `}
  
  ${({size:r})=>rr(r)}
  ${({variant:r,error:a})=>ar(r,a)}
  
  ${({disabled:r})=>r&&g`
      opacity: 0.6;
      cursor: not-allowed;
    `}
`,tr=h.input`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  color: ${({theme:r})=>r.colors.foundation.white};
  font-family: inherit;
  font-size: inherit;
  outline: none;
  
  &::placeholder {
    color: ${({theme:r})=>r.colors.gray.light};
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`,sr=h.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:r})=>r.colors.gray.light};
  pointer-events: none;
`,nr=h.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${({theme:r})=>r.colors.gray.light};
  cursor: pointer;
  border-radius: ${({theme:r})=>r.radius.sm};
  transition: all ${({theme:r})=>r.durations.fast} ${({theme:r})=>r.easings.easeInOut};
  
  &:hover {
    color: ${({theme:r})=>r.colors.foundation.white};
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &:focus {
    outline: 2px solid ${({theme:r})=>r.colors.innovation.primaryBlue};
    outline-offset: 2px;
  }
`,ir=h.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  margin-top: ${({theme:r})=>r.spacing[1]};
  background: ${({theme:r})=>r.colors.gray.base};
  border: 1px solid ${({theme:r})=>r.colors.gray.light};
  border-radius: ${({theme:r})=>r.radius.base};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  max-height: 300px;
  overflow-y: auto;
  
  ${({width:r})=>r&&g`
      width: ${typeof r=="number"?`${r}px`:r};
    `}
`,lr=h.div`
  padding: ${({theme:r})=>r.spacing[2]} 0;
  
  &:not(:last-child) {
    border-bottom: 1px solid ${({theme:r})=>r.colors.gray.dark};
  }
`,dr=h.div`
  padding: ${({theme:r})=>r.spacing[2]} ${({theme:r})=>r.spacing[4]};
  font-size: ${({theme:r})=>r.typography.fontSizes.xs};
  font-weight: ${({theme:r})=>r.typography.fontWeights.semibold};
  color: ${({theme:r})=>r.colors.gray.light};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,cr=h.div`
  padding: ${({theme:r})=>r.spacing[3]} ${({theme:r})=>r.spacing[4]};
  cursor: pointer;
  transition: background-color ${({theme:r})=>r.durations.fast} ${({theme:r})=>r.easings.easeInOut};
  
  ${({isHighlighted:r,theme:a})=>r&&g`
      background-color: ${a.colors.innovation.primaryBlue};
      color: ${a.colors.foundation.white};
    `}
  
  ${({disabled:r})=>r&&g`
      opacity: 0.5;
      cursor: not-allowed;
    `}
  
  &:hover:not([disabled]) {
    background-color: ${({isHighlighted:r,theme:a})=>r?a.colors.innovation.primaryBlue:"rgba(255, 255, 255, 0.05)"};
  }
`,pr=h.div`
  display: flex;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[3]};
`,ur=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
`,hr=h.div`
  flex: 1;
  min-width: 0;
`,gr=h.div`
  font-weight: ${({theme:r})=>r.typography.fontWeights.medium};
  color: ${({theme:r})=>r.colors.foundation.white};
`,mr=h.div`
  font-size: ${({theme:r})=>r.typography.fontSizes.xs};
  color: ${({theme:r})=>r.colors.gray.light};
  margin-top: ${({theme:r})=>r.spacing[1]};
`,yr=h.div`
  padding: ${({theme:r})=>r.spacing[4]};
  text-align: center;
  color: ${({theme:r})=>r.colors.gray.light};
  font-size: ${({theme:r})=>r.typography.fontSizes.sm};
`,xr=h.div`
  padding: ${({theme:r})=>r.spacing[4]};
  text-align: center;
  color: ${({theme:r})=>r.colors.gray.light};
  font-size: ${({theme:r})=>r.typography.fontSizes.sm};
`,br=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})}),fr=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})}),s=({placeholder:r="Search...",value:a="",onChange:c,onSelect:n,options:v=[],loading:S=!1,autocomplete:b=!0,showDropdown:f=!0,filterOptions:$=!0,minQueryLength:y=0,maxResults:J=10,onSearch:H,searchDelay:K=300,size:qe="md",variant:We="default",showIcon:Ee=!0,showClear:Ne=!0,showCategories:M=!1,disabled:B=!1,error:Ae=!1,width:U,className:Ge,"aria-label":He,id:Me,name:_e,...Qe})=>{const[x,D]=i.useState(a),[X,w]=i.useState(!1),[C,T]=i.useState(-1),[k,Je]=i.useState([]),_=i.useRef(null),Y=i.useRef(null),O=i.useRef(null),Z=i.useCallback((t,p)=>$?t.length<y?[]:p.filter(m=>{var j;return!m.disabled&&(m.label.toLowerCase().includes(t.toLowerCase())||m.value.toLowerCase().includes(t.toLowerCase())||((j=m.description)==null?void 0:j.toLowerCase().includes(t.toLowerCase())))}).slice(0,J):p,[$,y,J]),Ke=i.useCallback(t=>M?t.reduce((l,m)=>{const j=m.category||"";return l[j]||(l[j]=[]),l[j].push(m),l},{}):{"":t},[M]);i.useEffect(()=>{const t=Z(x,v);Je(t),T(-1)},[x,v,Z]),i.useEffect(()=>(O.current&&clearTimeout(O.current),H&&x.length>=y&&(O.current=window.setTimeout(()=>{H(x)},K)),()=>{O.current&&clearTimeout(O.current)}),[x,H,y,K]);const Ue=t=>{const p=t.target.value;D(p),c==null||c(p),b&&f&&w(p.length>=y)},ee=t=>{t.disabled||(D(t.value),w(!1),c==null||c(t.value),n==null||n(t))},Xe=()=>{var t;D(""),w(!1),c==null||c(""),n==null||n(null),(t=Y.current)==null||t.focus()},Ye=t=>{if(!X)return;const p=k.filter(l=>!l.disabled);switch(t.key){case"ArrowDown":t.preventDefault(),T(l=>(l+1)%p.length);break;case"ArrowUp":t.preventDefault(),T(l=>l<=0?p.length-1:l-1);break;case"Enter":t.preventDefault(),C>=0&&p[C]&&ee(p[C]);break;case"Escape":t.preventDefault(),w(!1),T(-1);break}};i.useEffect(()=>{const t=p=>{_.current&&!_.current.contains(p.target)&&(w(!1),T(-1))};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[]),i.useEffect(()=>{D(a)},[a]);const re=X&&b&&f&&!B,Ze=Ne&&x.length>0&&!B,er=Ke(k);return e.jsxs(or,{ref:_,size:qe,variant:We,width:U,disabled:B,error:Ae,className:Ge,...Qe,children:[Ee&&e.jsx(sr,{className:"search-icon",children:e.jsx(br,{})}),e.jsx(tr,{ref:Y,id:Me,name:_e,type:"text",placeholder:r,value:x,onChange:Ue,onKeyDown:Ye,onFocus:()=>b&&f&&w(x.length>=y),disabled:B,"aria-label":He,"aria-expanded":re,"aria-haspopup":"listbox","aria-autocomplete":"list",autoComplete:"off"}),Ze&&e.jsx(nr,{className:"clear-button",onClick:Xe,"aria-label":"Clear search",type:"button",children:e.jsx(fr,{})}),re&&e.jsx(ir,{width:U,role:"listbox",children:S?e.jsx(yr,{children:"Loading..."}):k.length===0?e.jsx(xr,{children:"No results found"}):Object.entries(er).map(([t,p])=>e.jsxs(lr,{children:[t&&M&&e.jsx(dr,{children:t}),p.map(l=>{const m=k.indexOf(l);return e.jsx(cr,{isHighlighted:C===m,disabled:l.disabled,onClick:()=>ee(l),role:"option","aria-selected":C===m,children:e.jsxs(pr,{children:[l.icon&&e.jsx(ur,{children:l.icon}),e.jsxs(hr,{children:[e.jsx(gr,{children:l.label}),l.description&&e.jsx(mr,{children:l.description})]})]})},l.value)})]},t))})]})};try{s.displayName="Search",s.__docgenInfo={description:"",displayName:"Search",props:{placeholder:{defaultValue:{value:"Search..."},description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((option: SearchOption | null) => void)"}},options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"SearchOption[]"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},autocomplete:{defaultValue:{value:"true"},description:"",name:"autocomplete",required:!1,type:{name:"boolean"}},showDropdown:{defaultValue:{value:"true"},description:"",name:"showDropdown",required:!1,type:{name:"boolean"}},filterOptions:{defaultValue:{value:"true"},description:"",name:"filterOptions",required:!1,type:{name:"boolean"}},minQueryLength:{defaultValue:{value:"0"},description:"",name:"minQueryLength",required:!1,type:{name:"number"}},maxResults:{defaultValue:{value:"10"},description:"",name:"maxResults",required:!1,type:{name:"number"}},onSearch:{defaultValue:null,description:"",name:"onSearch",required:!1,type:{name:"((query: string) => void)"}},searchDelay:{defaultValue:{value:"300"},description:"",name:"searchDelay",required:!1,type:{name:"number"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"filled"'},{value:'"borderless"'}]}},showIcon:{defaultValue:{value:"true"},description:"",name:"showIcon",required:!1,type:{name:"boolean"}},showClear:{defaultValue:{value:"true"},description:"",name:"showClear",required:!1,type:{name:"boolean"}},showCategories:{defaultValue:{value:"false"},description:"",name:"showCategories",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}}}}}catch{}const Or={title:"UI/Search",component:s,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["default","filled","borderless"]}}},u=[{value:"react",label:"React"},{value:"vue",label:"Vue.js"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"nextjs",label:"Next.js"},{value:"nuxtjs",label:"Nuxt.js"}],Q=[{value:"react",label:"React",description:"A JavaScript library for building user interfaces",category:"Frontend Frameworks",icon:e.jsx("span",{style:{color:"#61DAFB"},children:"⚛️"})},{value:"vue",label:"Vue.js",description:"The progressive JavaScript framework",category:"Frontend Frameworks",icon:e.jsx("span",{style:{color:"#4FC08D"},children:"🟢"})},{value:"angular",label:"Angular",description:"Platform for building mobile and desktop web applications",category:"Frontend Frameworks",icon:e.jsx("span",{style:{color:"#DD0031"},children:"🔺"})},{value:"nodejs",label:"Node.js",description:"JavaScript runtime built on Chrome's V8 JavaScript engine",category:"Backend",icon:e.jsx("span",{style:{color:"#339933"},children:"🟢"})},{value:"express",label:"Express.js",description:"Fast, unopinionated, minimalist web framework for Node.js",category:"Backend",icon:e.jsx("span",{style:{color:"#000000"},children:"⚡"})},{value:"python",label:"Python",description:"High-level programming language",category:"Languages",icon:e.jsx("span",{style:{color:"#3776AB"},children:"🐍"})},{value:"typescript",label:"TypeScript",description:"Typed superset of JavaScript",category:"Languages",icon:e.jsx("span",{style:{color:"#3178C6"},children:"📘"})},{value:"rust",label:"Rust",description:"Systems programming language focused on safety and performance",category:"Languages",icon:e.jsx("span",{style:{color:"#CE422B"},children:"🦀"})}],G=[{value:"keyboard-rgb",label:"Gaming Keyboard RGB",description:"Mechanical gaming keyboard with RGB lighting",category:"Peripherals",icon:e.jsx("span",{children:"⌨️"})},{value:"mouse-wireless",label:"Wireless Gaming Mouse",description:"High-precision wireless gaming mouse",category:"Peripherals",icon:e.jsx("span",{children:"🖱️"})},{value:"headset-pro",label:"Gaming Headset Pro",description:"Professional gaming headset with 7.1 surround sound",category:"Audio",icon:e.jsx("span",{children:"🎧"})},{value:"monitor-ultrawide",label:"Ultra-wide Monitor",description:'34" curved ultra-wide gaming monitor',category:"Displays",icon:e.jsx("span",{children:"🖥️"})},{value:"chair-ergonomic",label:"Ergonomic Gaming Chair",description:"Professional ergonomic chair for extended gaming sessions",category:"Furniture",icon:e.jsx("span",{children:"🪑"})}],z={args:{placeholder:"Search frameworks...",options:u,size:"md",variant:"default"}},R={render:()=>{const[r,a]=i.useState(""),[c,n]=i.useState(null);return e.jsx(d,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:e.jsxs("div",{children:[e.jsx(o,{variant:"body",mb:"md",children:"Basic Search with Autocomplete"}),e.jsx(s,{placeholder:"Search frameworks...",options:u,value:r,onChange:a,onSelect:n,width:"300px"}),c&&e.jsxs(o,{variant:"small",color:"gray",mt:"sm",children:["Selected: ",c.label]})]})})}},I={render:()=>e.jsxs(d,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(o,{variant:"body",mb:"sm",children:"Default"}),e.jsx(s,{placeholder:"Search...",options:u,variant:"default",width:"300px"})]}),e.jsxs("div",{children:[e.jsx(o,{variant:"body",mb:"sm",children:"Filled"}),e.jsx(s,{placeholder:"Search...",options:u,variant:"filled",width:"300px"})]}),e.jsxs("div",{children:[e.jsx(o,{variant:"body",mb:"sm",children:"Borderless"}),e.jsx(s,{placeholder:"Search...",options:u,variant:"borderless",width:"300px"})]})]})},V={render:()=>e.jsxs(d,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(o,{variant:"small",mb:"sm",color:"gray",children:"Small"}),e.jsx(s,{placeholder:"Search...",options:u,size:"sm",width:"300px"})]}),e.jsxs("div",{children:[e.jsx(o,{variant:"small",mb:"sm",color:"gray",children:"Medium"}),e.jsx(s,{placeholder:"Search...",options:u,size:"md",width:"300px"})]}),e.jsxs("div",{children:[e.jsx(o,{variant:"small",mb:"sm",color:"gray",children:"Large"}),e.jsx(s,{placeholder:"Search...",options:u,size:"lg",width:"300px"})]})]})},P={render:()=>{const[r,a]=i.useState(null);return e.jsx(d,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:e.jsxs("div",{children:[e.jsx(o,{variant:"body",mb:"md",children:"Search with Categories"}),e.jsx(s,{placeholder:"Search technologies...",options:Q,onSelect:a,showCategories:!0,width:"400px"}),r&&e.jsxs(d,{mt:"sm",p:"sm",style:{backgroundColor:"rgba(74, 158, 255, 0.1)",borderRadius:"4px"},children:[e.jsxs(o,{variant:"small",children:["Selected: ",e.jsx("strong",{children:r.label})]}),r.description&&e.jsx(o,{variant:"small",color:"gray",mt:"xs",children:r.description})]})]})})}},F={render:()=>{const[r,a]=i.useState(""),[c,n]=i.useState([]),[v,S]=i.useState(!1),b=async f=>{if(f.length<2){n([]);return}S(!0),setTimeout(()=>{const $=Q.filter(y=>y.label.toLowerCase().includes(f.toLowerCase())||y.description.toLowerCase().includes(f.toLowerCase()));n($),S(!1)},500)};return e.jsx(d,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:e.jsxs("div",{children:[e.jsx(o,{variant:"body",mb:"md",children:"Custom Search with API Simulation"}),e.jsx(s,{placeholder:"Type to search technologies...",value:r,onChange:a,onSearch:b,options:c,loading:v,minQueryLength:2,searchDelay:300,showCategories:!0,width:"400px"}),e.jsxs(o,{variant:"small",color:"gray",mt:"sm",children:['Type at least 2 characters to search. Current query: "',r,'"']})]})})}},L={render:()=>{const[r,a]=i.useState(null);return e.jsx(d,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:e.jsxs("div",{children:[e.jsx(o,{variant:"body",mb:"md",children:"Product Search"}),e.jsx(s,{placeholder:"Search gaming products...",options:G,onSelect:a,showCategories:!0,size:"lg",width:"500px"}),r&&e.jsxs(d,{mt:"md",p:"md",style:{border:"1px solid #333",borderRadius:"4px"},children:[e.jsxs(d,{display:"flex",alignItems:"center",gap:"sm",mb:"sm",children:[r.icon,e.jsx(o,{variant:"body",fontWeight:"semibold",children:r.label})]}),e.jsx(o,{variant:"small",color:"gray",children:r.description}),e.jsxs(o,{variant:"small",color:"blue",mt:"sm",children:["Category: ",r.category]})]})]})})}},q={render:()=>e.jsxs(d,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(o,{variant:"body",mb:"sm",children:"Loading State"}),e.jsx(s,{placeholder:"Search...",options:[],loading:!0,value:"react",width:"300px"})]}),e.jsxs("div",{children:[e.jsx(o,{variant:"body",mb:"sm",children:"Error State"}),e.jsx(s,{placeholder:"Search...",options:u,error:!0,width:"300px"})]}),e.jsxs("div",{children:[e.jsx(o,{variant:"body",mb:"sm",children:"Disabled State"}),e.jsx(s,{placeholder:"Search...",options:u,disabled:!0,width:"300px"})]}),e.jsxs("div",{children:[e.jsx(o,{variant:"body",mb:"sm",children:"Without Icon"}),e.jsx(s,{placeholder:"Search...",options:u,showIcon:!1,width:"300px"})]}),e.jsxs("div",{children:[e.jsx(o,{variant:"body",mb:"sm",children:"Without Clear Button"}),e.jsx(s,{placeholder:"Search...",options:u,showClear:!1,value:"react",width:"300px"})]})]})},W={render:()=>{const[r,a]=i.useState("");return e.jsx(d,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:e.jsxs("div",{children:[e.jsx(o,{variant:"body",mb:"md",children:"Simple Search Input (No Autocomplete)"}),e.jsx(s,{placeholder:"Type your search query...",value:r,onChange:a,autocomplete:!1,variant:"borderless",size:"lg",width:"400px"}),e.jsxs(o,{variant:"small",color:"gray",mt:"sm",children:['Current value: "',r,'"']})]})})}},E={render:()=>e.jsxs(d,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(o,{variant:"body",mb:"md",children:"Full Width Search"}),e.jsx(s,{placeholder:"Search across all products...",options:G,showCategories:!0,width:"100%"})]}),e.jsxs("div",{children:[e.jsx(o,{variant:"body",mb:"md",children:"Fixed Width Searches"}),e.jsxs(d,{display:"flex",gap:"md",flexWrap:"wrap",children:[e.jsx(s,{placeholder:"Quick search",options:u.slice(0,3),size:"sm",width:"200px"}),e.jsx(s,{placeholder:"Medium search",options:u.slice(0,4),size:"md",width:"250px"}),e.jsx(s,{placeholder:"Extended search",options:u,size:"lg",width:"300px"})]})]})]})},N={render:()=>{const[r,a]=i.useState(""),[c,n]=i.useState(""),[v,S]=i.useState(""),b=[{value:"new-file",label:"New File",description:"Create a new file",icon:e.jsx("span",{children:"📄"})},{value:"open-folder",label:"Open Folder",description:"Open an existing folder",icon:e.jsx("span",{children:"📁"})},{value:"save-all",label:"Save All",description:"Save all open files",icon:e.jsx("span",{children:"💾"})},{value:"find-replace",label:"Find & Replace",description:"Find and replace text",icon:e.jsx("span",{children:"🔍"})},{value:"toggle-theme",label:"Toggle Theme",description:"Switch between light and dark theme",icon:e.jsx("span",{children:"🌙"})},{value:"settings",label:"Settings",description:"Open application settings",icon:e.jsx("span",{children:"⚙️"})}];return e.jsxs(d,{display:"flex",flexDirection:"column",gap:"xl",p:"md",children:[e.jsxs("div",{children:[e.jsx(o,{variant:"h3",mb:"lg",children:"Header Search Bar"}),e.jsx(d,{p:"md",style:{backgroundColor:"rgba(255,255,255,0.05)",borderRadius:"4px"},children:e.jsxs(d,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[e.jsx(o,{variant:"body",fontWeight:"semibold",children:"RSPWN Gaming"}),e.jsx(s,{placeholder:"Search products, brands, categories...",value:r,onChange:a,options:G,variant:"filled",width:"350px"}),e.jsxs(d,{display:"flex",gap:"md",children:[e.jsx(o,{variant:"small",children:"Cart"}),e.jsx(o,{variant:"small",children:"Account"})]})]})})]}),e.jsxs("div",{children:[e.jsx(o,{variant:"h3",mb:"lg",children:"Filter Search"}),e.jsxs(d,{p:"md",style:{border:"1px solid #333",borderRadius:"4px"},children:[e.jsxs(d,{display:"flex",justifyContent:"space-between",alignItems:"center",mb:"md",children:[e.jsx(o,{variant:"body",fontWeight:"semibold",children:"Product Catalog"}),e.jsx(s,{placeholder:"Filter products...",value:c,onChange:n,options:G,size:"sm",variant:"borderless",width:"250px",showCategories:!1})]}),e.jsx("div",{style:{height:"200px",backgroundColor:"rgba(255,255,255,0.05)",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(o,{variant:"body",color:"gray",children:"Product grid would be here"})})]})]}),e.jsxs("div",{children:[e.jsx(o,{variant:"h3",mb:"lg",children:"Command Palette"}),e.jsxs(d,{p:"md",style:{backgroundColor:"rgba(0,0,0,0.8)",borderRadius:"4px",border:"1px solid #444"},children:[e.jsx(o,{variant:"small",color:"gray",mb:"sm",children:"Press Ctrl+K to open command palette"}),e.jsx(s,{placeholder:"Type a command or search...",value:v,onChange:S,options:b,size:"lg",variant:"borderless",width:"100%",maxResults:6})]})]}),e.jsxs("div",{children:[e.jsx(o,{variant:"h3",mb:"lg",children:"Documentation Search"}),e.jsxs(d,{p:"md",style:{border:"1px solid #333",borderRadius:"4px"},children:[e.jsx(o,{variant:"body",mb:"md",children:"RSPWN Design System Docs"}),e.jsx(s,{placeholder:"Search components, guides, examples...",options:[{value:"button",label:"Button Component",category:"Components",description:"Interactive button elements"},{value:"typography",label:"Typography",category:"Components",description:"Text styling and hierarchy"},{value:"colors",label:"Color System",category:"Design Tokens",description:"Brand colors and usage"},{value:"spacing",label:"Spacing Scale",category:"Design Tokens",description:"Consistent spacing values"},{value:"getting-started",label:"Getting Started",category:"Guides",description:"Installation and setup"},{value:"theming",label:"Theming Guide",category:"Guides",description:"Customizing the theme"}],showCategories:!0,width:"100%"})]})]})]})}},A={args:{placeholder:"Search...",options:Q,size:"md",variant:"default",autocomplete:!0,showDropdown:!0,filterOptions:!0,minQueryLength:0,maxResults:10,searchDelay:300,showIcon:!0,showClear:!0,showCategories:!0,disabled:!1,error:!1,loading:!1,width:"400px"},render:r=>e.jsx(d,{display:"flex",justifyContent:"center",p:"md",children:e.jsx(s,{...r})})};var ae,oe,te;z.parameters={...z.parameters,docs:{...(ae=z.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search frameworks...',
    options: basicOptions,
    size: 'md',
    variant: 'default'
  }
}`,...(te=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var se,ne,ie;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [selectedOption, setSelectedOption] = useState<SearchOption | null>(null);
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="body" mb="md">Basic Search with Autocomplete</Typography>\r
          <Search placeholder="Search frameworks..." options={basicOptions} value={value} onChange={setValue} onSelect={setSelectedOption} width="300px" />\r
          {selectedOption && <Typography variant="small" color="gray" mt="sm">\r
              Selected: {selectedOption.label}\r
            </Typography>}\r
        </div>\r
      </Box>;
  }
}`,...(ie=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var le,de,ce;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="body" mb="sm">Default</Typography>\r
        <Search placeholder="Search..." options={basicOptions} variant="default" width="300px" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Filled</Typography>\r
        <Search placeholder="Search..." options={basicOptions} variant="filled" width="300px" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Borderless</Typography>\r
        <Search placeholder="Search..." options={basicOptions} variant="borderless" width="300px" />\r
      </div>\r
    </Box>
}`,...(ce=(de=I.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,ue,he;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Small</Typography>\r
        <Search placeholder="Search..." options={basicOptions} size="sm" width="300px" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Medium</Typography>\r
        <Search placeholder="Search..." options={basicOptions} size="md" width="300px" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Large</Typography>\r
        <Search placeholder="Search..." options={basicOptions} size="lg" width="300px" />\r
      </div>\r
    </Box>
}`,...(he=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var ge,me,ye;P.parameters={...P.parameters,docs:{...(ge=P.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const [selectedOption, setSelectedOption] = useState<SearchOption | null>(null);
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="body" mb="md">Search with Categories</Typography>\r
          <Search placeholder="Search technologies..." options={detailedOptions} onSelect={setSelectedOption} showCategories width="400px" />\r
          {selectedOption && <Box mt="sm" p="sm" style={{
          backgroundColor: 'rgba(74, 158, 255, 0.1)',
          borderRadius: '4px'
        }}>\r
              <Typography variant="small">\r
                Selected: <strong>{selectedOption.label}</strong>\r
              </Typography>\r
              {selectedOption.description && <Typography variant="small" color="gray" mt="xs">\r
                  {selectedOption.description}\r
                </Typography>}\r
            </Box>}\r
        </div>\r
      </Box>;
  }
}`,...(ye=(me=P.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};var xe,be,fe;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchOption[]>([]);
    const [loading, setLoading] = useState(false);
    const handleSearch = async (searchQuery: string) => {
      if (searchQuery.length < 2) {
        setResults([]);
        return;
      }
      setLoading(true);

      // Simulate API call
      setTimeout(() => {
        const filtered = detailedOptions.filter(option => option.label.toLowerCase().includes(searchQuery.toLowerCase()) || option.description.toLowerCase().includes(searchQuery.toLowerCase()));
        setResults(filtered);
        setLoading(false);
      }, 500);
    };
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="body" mb="md">Custom Search with API Simulation</Typography>\r
          <Search placeholder="Type to search technologies..." value={query} onChange={setQuery} onSearch={handleSearch} options={results} loading={loading} minQueryLength={2} searchDelay={300} showCategories width="400px" />\r
          <Typography variant="small" color="gray" mt="sm">\r
            Type at least 2 characters to search. Current query: "{query}"\r
          </Typography>\r
        </div>\r
      </Box>;
  }
}`,...(fe=(be=F.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ve,Se,we;L.parameters={...L.parameters,docs:{...(ve=L.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => {
    const [selectedProduct, setSelectedProduct] = useState<SearchOption | null>(null);
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="body" mb="md">Product Search</Typography>\r
          <Search placeholder="Search gaming products..." options={productOptions} onSelect={setSelectedProduct} showCategories size="lg" width="500px" />\r
          {selectedProduct && <Box mt="md" p="md" style={{
          border: '1px solid #333',
          borderRadius: '4px'
        }}>\r
              <Box display="flex" alignItems="center" gap="sm" mb="sm">\r
                {selectedProduct.icon}\r
                <Typography variant="body" fontWeight="semibold">\r
                  {selectedProduct.label}\r
                </Typography>\r
              </Box>\r
              <Typography variant="small" color="gray">\r
                {selectedProduct.description}\r
              </Typography>\r
              <Typography variant="small" color="blue" mt="sm">\r
                Category: {selectedProduct.category}\r
              </Typography>\r
            </Box>}\r
        </div>\r
      </Box>;
  }
}`,...(we=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var je,Ce,Te;q.parameters={...q.parameters,docs:{...(je=q.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="body" mb="sm">Loading State</Typography>\r
        <Search placeholder="Search..." options={[]} loading value="react" width="300px" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Error State</Typography>\r
        <Search placeholder="Search..." options={basicOptions} error width="300px" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Disabled State</Typography>\r
        <Search placeholder="Search..." options={basicOptions} disabled width="300px" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Without Icon</Typography>\r
        <Search placeholder="Search..." options={basicOptions} showIcon={false} width="300px" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Without Clear Button</Typography>\r
        <Search placeholder="Search..." options={basicOptions} showClear={false} value="react" width="300px" />\r
      </div>\r
    </Box>
}`,...(Te=(Ce=q.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}};var Oe,$e,Be;W.parameters={...W.parameters,docs:{...(Oe=W.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="body" mb="md">Simple Search Input (No Autocomplete)</Typography>\r
          <Search placeholder="Type your search query..." value={value} onChange={setValue} autocomplete={false} variant="borderless" size="lg" width="400px" />\r
          <Typography variant="small" color="gray" mt="sm">\r
            Current value: "{value}"\r
          </Typography>\r
        </div>\r
      </Box>;
  }
}`,...(Be=($e=W.parameters)==null?void 0:$e.docs)==null?void 0:Be.source}}};var De,ke,ze;E.parameters={...E.parameters,docs:{...(De=E.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="body" mb="md">Full Width Search</Typography>\r
        <Search placeholder="Search across all products..." options={productOptions} showCategories width="100%" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="md">Fixed Width Searches</Typography>\r
        <Box display="flex" gap="md" flexWrap="wrap">\r
          <Search placeholder="Quick search" options={basicOptions.slice(0, 3)} size="sm" width="200px" />\r
          <Search placeholder="Medium search" options={basicOptions.slice(0, 4)} size="md" width="250px" />\r
          <Search placeholder="Extended search" options={basicOptions} size="lg" width="300px" />\r
        </Box>\r
      </div>\r
    </Box>
}`,...(ze=(ke=E.parameters)==null?void 0:ke.docs)==null?void 0:ze.source}}};var Re,Ie,Ve;N.parameters={...N.parameters,docs:{...(Re=N.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => {
    const [headerSearch, setHeaderSearch] = useState('');
    const [filterSearch, setFilterSearch] = useState('');
    const [commandSearch, setCommandSearch] = useState('');
    const commandOptions: SearchOption[] = [{
      value: 'new-file',
      label: 'New File',
      description: 'Create a new file',
      icon: <span>📄</span>
    }, {
      value: 'open-folder',
      label: 'Open Folder',
      description: 'Open an existing folder',
      icon: <span>📁</span>
    }, {
      value: 'save-all',
      label: 'Save All',
      description: 'Save all open files',
      icon: <span>💾</span>
    }, {
      value: 'find-replace',
      label: 'Find & Replace',
      description: 'Find and replace text',
      icon: <span>🔍</span>
    }, {
      value: 'toggle-theme',
      label: 'Toggle Theme',
      description: 'Switch between light and dark theme',
      icon: <span>🌙</span>
    }, {
      value: 'settings',
      label: 'Settings',
      description: 'Open application settings',
      icon: <span>⚙️</span>
    }];
    return <Box display="flex" flexDirection="column" gap="xl" p="md">\r
        <div>\r
          <Typography variant="h3" mb="lg">Header Search Bar</Typography>\r
          <Box p="md" style={{
          backgroundColor: 'rgba(255,255,255,0.05)',
          borderRadius: '4px'
        }}>\r
            <Box display="flex" justifyContent="space-between" alignItems="center">\r
              <Typography variant="body" fontWeight="semibold">RSPWN Gaming</Typography>\r
              <Search placeholder="Search products, brands, categories..." value={headerSearch} onChange={setHeaderSearch} options={productOptions} variant="filled" width="350px" />\r
              <Box display="flex" gap="md">\r
                <Typography variant="small">Cart</Typography>\r
                <Typography variant="small">Account</Typography>\r
              </Box>\r
            </Box>\r
          </Box>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="h3" mb="lg">Filter Search</Typography>\r
          <Box p="md" style={{
          border: '1px solid #333',
          borderRadius: '4px'
        }}>\r
            <Box display="flex" justifyContent="space-between" alignItems="center" mb="md">\r
              <Typography variant="body" fontWeight="semibold">Product Catalog</Typography>\r
              <Search placeholder="Filter products..." value={filterSearch} onChange={setFilterSearch} options={productOptions} size="sm" variant="borderless" width="250px" showCategories={false} />\r
            </Box>\r
            <div style={{
            height: '200px',
            backgroundColor: 'rgba(255,255,255,0.05)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>\r
              <Typography variant="body" color="gray">Product grid would be here</Typography>\r
            </div>\r
          </Box>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="h3" mb="lg">Command Palette</Typography>\r
          <Box p="md" style={{
          backgroundColor: 'rgba(0,0,0,0.8)',
          borderRadius: '4px',
          border: '1px solid #444'
        }}>\r
            <Typography variant="small" color="gray" mb="sm">Press Ctrl+K to open command palette</Typography>\r
            <Search placeholder="Type a command or search..." value={commandSearch} onChange={setCommandSearch} options={commandOptions} size="lg" variant="borderless" width="100%" maxResults={6} />\r
          </Box>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="h3" mb="lg">Documentation Search</Typography>\r
          <Box p="md" style={{
          border: '1px solid #333',
          borderRadius: '4px'
        }}>\r
            <Typography variant="body" mb="md">RSPWN Design System Docs</Typography>\r
            <Search placeholder="Search components, guides, examples..." options={[{
            value: 'button',
            label: 'Button Component',
            category: 'Components',
            description: 'Interactive button elements'
          }, {
            value: 'typography',
            label: 'Typography',
            category: 'Components',
            description: 'Text styling and hierarchy'
          }, {
            value: 'colors',
            label: 'Color System',
            category: 'Design Tokens',
            description: 'Brand colors and usage'
          }, {
            value: 'spacing',
            label: 'Spacing Scale',
            category: 'Design Tokens',
            description: 'Consistent spacing values'
          }, {
            value: 'getting-started',
            label: 'Getting Started',
            category: 'Guides',
            description: 'Installation and setup'
          }, {
            value: 'theming',
            label: 'Theming Guide',
            category: 'Guides',
            description: 'Customizing the theme'
          }]} showCategories width="100%" />\r
          </Box>\r
        </div>\r
      </Box>;
  }
}`,...(Ve=(Ie=N.parameters)==null?void 0:Ie.docs)==null?void 0:Ve.source}}};var Pe,Fe,Le;A.parameters={...A.parameters,docs:{...(Pe=A.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    options: detailedOptions,
    size: 'md',
    variant: 'default',
    autocomplete: true,
    showDropdown: true,
    filterOptions: true,
    minQueryLength: 0,
    maxResults: 10,
    searchDelay: 300,
    showIcon: true,
    showClear: true,
    showCategories: true,
    disabled: false,
    error: false,
    loading: false,
    width: '400px'
  },
  render: args => <Box display="flex" justifyContent="center" p="md">\r
      <Search {...args} />\r
    </Box>
}`,...(Le=(Fe=A.parameters)==null?void 0:Fe.docs)==null?void 0:Le.source}}};const $r=["Default","BasicUsage","Variants","Sizes","WithCategories","CustomSearch","ProductSearch","SearchStates","MinimalSearch","ResponsiveSearch","RealWorldExamples","Playground"];export{R as BasicUsage,F as CustomSearch,z as Default,W as MinimalSearch,A as Playground,L as ProductSearch,N as RealWorldExamples,E as ResponsiveSearch,q as SearchStates,V as Sizes,I as Variants,P as WithCategories,$r as __namedExportsOrder,Or as default};
