import{j as e}from"./jsx-runtime-CDt2p4po.js";import{l as m,d as h}from"./styled-components.browser.esm-Byilhkxn.js";import{B as l}from"./Box-D0rAd6Cs.js";import{T as o}from"./Typography-B2ZqsRPU.js";import{B as T}from"./Badge-DBrob01X.js";import{B as j}from"./Button-CmnvKrIY.js";import{r as k}from"./index-GiUgBvb1.js";const Je=r=>{switch(r){case"sm":return m`
        th, td {
          padding: ${({theme:a})=>a.spacing[2]} ${({theme:a})=>a.spacing[3]};
          font-size: ${({theme:a})=>a.typography.fontSizes.xs};
        }
      `;case"lg":return m`
        th, td {
          padding: ${({theme:a})=>a.spacing[4]} ${({theme:a})=>a.spacing[5]};
          font-size: ${({theme:a})=>a.typography.fontSizes.base};
        }
      `;default:return m`
        th, td {
          padding: ${({theme:a})=>a.spacing[3]} ${({theme:a})=>a.spacing[4]};
          font-size: ${({theme:a})=>a.typography.fontSizes.sm};
        }
      `}},Oe=r=>{switch(r){case"bordered":return m`
        border: 1px solid ${({theme:a})=>a.colors.gray.dark};
        
        th, td {
          border-right: 1px solid ${({theme:a})=>a.colors.gray.dark};
          border-bottom: 1px solid ${({theme:a})=>a.colors.gray.dark};
        }
        
        th:last-child, td:last-child {
          border-right: none;
        }
        
        tr:last-child td {
          border-bottom: none;
        }
      `;case"striped":return m`
        tbody tr:nth-child(even) {
          background-color: rgba(255, 255, 255, 0.02);
        }
      `;case"minimal":return m`
        border: none;
        
        th {
          border-bottom: 1px solid ${({theme:a})=>a.colors.gray.dark};
        }
        
        td {
          border: none;
        }
      `;default:return m`
        border-bottom: 1px solid ${({theme:a})=>a.colors.gray.dark};
        
        thead th {
          border-bottom: 2px solid ${({theme:a})=>a.colors.gray.dark};
        }
        
        tbody tr {
          border-bottom: 1px solid ${({theme:a})=>a.colors.gray.dark};
        }
        
        tbody tr:last-child {
          border-bottom: none;
        }
      `}},Ge=h.div`
  width: 100%;
  overflow: auto;
  
  ${({maxHeight:r})=>r&&m`
      max-height: ${typeof r=="number"?`${r}px`:r};
    `}
`,Ke=h.table`
  width: 100%;
  border-collapse: collapse;
  font-family: ${({theme:r})=>r.typography.fonts.body};
  color: ${({theme:r})=>r.colors.foundation.white};
  
  ${({size:r})=>Je(r)}
  ${({variant:r})=>Oe(r)}
`,Qe=h.thead`
  ${({sticky:r})=>r&&m`
      position: sticky;
      top: 0;
      z-index: 10;
    `}
`,P=h.th`
  background-color: ${({theme:r})=>r.colors.gray.dark};
  color: ${({theme:r})=>r.colors.foundation.white};
  font-weight: ${({theme:r})=>r.typography.fontWeights.semibold};
  text-align: ${({align:r})=>r||"left"};
  user-select: none;
  
  ${({width:r})=>r&&m`
      width: ${typeof r=="number"?`${r}px`:r};
    `}
  
  ${({minWidth:r})=>r&&m`
      min-width: ${typeof r=="number"?`${r}px`:r};
    `}
  
  ${({maxWidth:r})=>r&&m`
      max-width: ${typeof r=="number"?`${r}px`:r};
    `}
  
  ${({sortable:r})=>r&&m`
      cursor: pointer;
      transition: background-color ${({theme:a})=>a.durations.fast} ${({theme:a})=>a.easings.easeInOut};
      
      &:hover {
        background-color: ${({theme:a})=>a.colors.gray.dark};
      }
    `}
`,Xe=h.button`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[2]};
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  padding: 0;
  width: 100%;
  justify-content: inherit;
  
  svg {
    width: 16px;
    height: 16px;
    opacity: ${({active:r})=>r?1:.5};
    transform: ${({direction:r})=>r==="desc"?"rotate(180deg)":"rotate(0deg)"};
    transition: all ${({theme:r})=>r.durations.fast} ${({theme:r})=>r.easings.easeInOut};
  }
`,Ye=h.tbody``,W=h.tr`
  ${({hoverable:r})=>r&&m`
      transition: background-color ${({theme:a})=>a.durations.fast} ${({theme:a})=>a.easings.easeInOut};
      
      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }
    `}
  
  ${({selected:r})=>r&&m`
      background-color: rgba(74, 158, 255, 0.1);
    `}
  
  ${({selectable:r})=>r&&m`
      cursor: pointer;
    `}
`,F=h.td`
  text-align: ${({align:r})=>r||"left"};
  vertical-align: top;
`,I=h.td`
  width: 40px;
  text-align: center;
`,J=h.input.attrs({type:"checkbox"})`
  width: 16px;
  height: 16px;
  accent-color: ${({theme:r})=>r.colors.innovation.primaryBlue};
`,Ze=h.tr`
  td {
    padding: ${({theme:r})=>r.spacing[6]};
    text-align: center;
    color: ${({theme:r})=>r.colors.gray.light};
  }
`,O=h.div`
  height: 16px;
  background: linear-gradient(
    90deg,
    ${({theme:r})=>r.colors.gray.dark} 25%,
    ${({theme:r})=>r.colors.gray.light} 50%,
    ${({theme:r})=>r.colors.gray.dark} 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: ${({theme:r})=>r.radius.sm};
  
  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`,er=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M7 14l5-5 5 5z"})}),i=({data:r,columns:a,variant:c="default",size:f="md",sortable:v=!1,selectable:x=!1,hoverable:C=!0,selectedRows:g=new Set,onSelectionChange:b,sortColumn:n,sortDirection:y,onSort:S,loading:B=!1,loadingRows:Ve=5,emptyMessage:Le="No data available",maxHeight:Ae,stickyHeader:Ee=!1,className:Me,"aria-label":qe="Data table",...He})=>{const Ne=t=>{if(!t.sortable||!S)return;const s=n===t.key&&y==="asc"?"desc":"asc";S(t.key,s)},_=(t,s)=>{if(!b)return;const u=new Set(g);s?u.add(t):u.delete(t),b(u)},_e=t=>{if(b)if(t){const s=new Set(r.map((u,N)=>N));b(s)}else b(new Set)},Pe=(t,s)=>{if(s.render){const u=r.indexOf(t),N=s.accessor?typeof s.accessor=="function"?s.accessor(t):t[s.accessor]:null;return s.render(N,t,u)}return s.accessor?typeof s.accessor=="function"?s.accessor(t):t[s.accessor]:t[s.key]},We=()=>Array.from({length:Ve},(t,s)=>e.jsxs(W,{children:[x&&e.jsx(I,{children:e.jsx(O,{style:{width:"16px",height:"16px",margin:"0 auto"}})}),a.map(u=>e.jsx(F,{align:u.align,children:e.jsx(O,{})},u.key))]},`loading-${s}`)),Fe=r.length>0&&g.size===r.length,Ie=g.size>0&&g.size<r.length;return e.jsx(Ge,{maxHeight:Ae,children:e.jsxs(Ke,{className:Me,variant:c,size:f,role:"table","aria-label":qe,...He,children:[e.jsx(Qe,{sticky:Ee,children:e.jsxs("tr",{children:[x&&e.jsx(P,{as:"th",width:40,children:e.jsx(J,{checked:Fe,ref:t=>{t&&(t.indeterminate=Ie)},onChange:t=>_e(t.target.checked),"aria-label":"Select all rows"})}),a.map(t=>e.jsx(P,{sortable:v&&t.sortable,align:t.align,width:t.width,minWidth:t.minWidth,maxWidth:t.maxWidth,onClick:()=>v&&t.sortable&&Ne(t),children:v&&t.sortable?e.jsxs(Xe,{active:n===t.key,direction:n===t.key?y:void 0,children:[t.header,e.jsx(er,{})]}):t.header},t.key))]})}),e.jsx(Ye,{children:B?We():r.length===0?e.jsx(Ze,{children:e.jsx("td",{colSpan:a.length+(x?1:0),children:Le})}):r.map((t,s)=>e.jsxs(W,{hoverable:C,selected:g.has(s),selectable:x,onClick:()=>x&&_(s,!g.has(s)),children:[x&&e.jsx(I,{onClick:u=>u.stopPropagation(),children:e.jsx(J,{checked:g.has(s),onChange:u=>_(s,u.target.checked),"aria-label":`Select row ${s+1}`})}),a.map(u=>e.jsx(F,{align:u.align,children:Pe(t,u)},u.key))]},s))})]})})};try{i.displayName="Table",i.__docgenInfo={description:"",displayName:"Table",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<T>[]"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"minimal"'},{value:'"bordered"'},{value:'"striped"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},sortable:{defaultValue:{value:"false"},description:"",name:"sortable",required:!1,type:{name:"boolean"}},selectable:{defaultValue:{value:"false"},description:"",name:"selectable",required:!1,type:{name:"boolean"}},hoverable:{defaultValue:{value:"true"},description:"",name:"hoverable",required:!1,type:{name:"boolean"}},selectedRows:{defaultValue:{value:"new Set()"},description:"",name:"selectedRows",required:!1,type:{name:"Set<number>"}},onSelectionChange:{defaultValue:null,description:"",name:"onSelectionChange",required:!1,type:{name:"((selectedRows: Set<number>) => void)"}},sortColumn:{defaultValue:null,description:"",name:"sortColumn",required:!1,type:{name:"string"}},sortDirection:{defaultValue:null,description:"",name:"sortDirection",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'}]}},onSort:{defaultValue:null,description:"",name:"onSort",required:!1,type:{name:'((column: string, direction: "desc" | "asc") => void)'}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},loadingRows:{defaultValue:{value:"5"},description:"",name:"loadingRows",required:!1,type:{name:"number"}},emptyMessage:{defaultValue:{value:"No data available"},description:"",name:"emptyMessage",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string | number"}},stickyHeader:{defaultValue:{value:"false"},description:"",name:"stickyHeader",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},"aria-label":{defaultValue:{value:"Data table"},description:"",name:"aria-label",required:!1,type:{name:"string"}}}}}catch{}const dr={title:"UI/Table",component:i,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","bordered","striped","minimal"]},size:{control:{type:"select"},options:["sm","md","lg"]}}},d=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"active",lastLogin:"2024-01-15",joinDate:"2023-03-10"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"Editor",status:"active",lastLogin:"2024-01-14",joinDate:"2023-05-20"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"Viewer",status:"inactive",lastLogin:"2024-01-10",joinDate:"2023-08-15"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Editor",status:"pending",lastLogin:"Never",joinDate:"2024-01-12"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",role:"Admin",status:"active",lastLogin:"2024-01-13",joinDate:"2023-01-05"}],rr=[{id:1,name:"Gaming Keyboard RGB",category:"Peripherals",price:149.99,stock:25,rating:4.8,featured:!0},{id:2,name:"Wireless Gaming Mouse",category:"Peripherals",price:89.99,stock:12,rating:4.6,featured:!1},{id:3,name:"Gaming Headset Pro",category:"Audio",price:199.99,stock:8,rating:4.9,featured:!0},{id:4,name:"Ultra-wide Monitor",category:"Displays",price:599.99,stock:3,rating:4.7,featured:!0},{id:5,name:"Mechanical Switch Set",category:"Accessories",price:29.99,stock:150,rating:4.4,featured:!1}],p=[{key:"name",header:"Name",sortable:!0},{key:"email",header:"Email",sortable:!0},{key:"role",header:"Role",sortable:!0},{key:"status",header:"Status",sortable:!0}],D={args:{data:d,columns:p,variant:"default",size:"md"}},w={render:()=>e.jsx(l,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:e.jsxs("div",{children:[e.jsx(o,{variant:"body",mb:"md",children:"Simple User Table"}),e.jsx(i,{data:d.slice(0,3),columns:p})]})})},$={render:()=>e.jsxs(l,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(o,{variant:"body",mb:"sm",children:"Default"}),e.jsx(i,{data:d.slice(0,3),columns:p,variant:"default"})]}),e.jsxs("div",{children:[e.jsx(o,{variant:"body",mb:"sm",children:"Bordered"}),e.jsx(i,{data:d.slice(0,3),columns:p,variant:"bordered"})]}),e.jsxs("div",{children:[e.jsx(o,{variant:"body",mb:"sm",children:"Striped"}),e.jsx(i,{data:d.slice(0,4),columns:p,variant:"striped"})]}),e.jsxs("div",{children:[e.jsx(o,{variant:"body",mb:"sm",children:"Minimal"}),e.jsx(i,{data:d.slice(0,3),columns:p,variant:"minimal"})]})]})},z={render:()=>e.jsxs(l,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(o,{variant:"small",mb:"sm",color:"gray",children:"Small"}),e.jsx(i,{data:d.slice(0,3),columns:p,size:"sm"})]}),e.jsxs("div",{children:[e.jsx(o,{variant:"small",mb:"sm",color:"gray",children:"Medium"}),e.jsx(i,{data:d.slice(0,3),columns:p,size:"md"})]}),e.jsxs("div",{children:[e.jsx(o,{variant:"small",mb:"sm",color:"gray",children:"Large"}),e.jsx(i,{data:d.slice(0,3),columns:p,size:"lg"})]})]})},R={render:()=>{const r=[{key:"name",header:"User Name",sortable:!0,render:(a,c)=>e.jsxs(l,{display:"flex",flexDirection:"column",children:[e.jsx(o,{variant:"body",fontWeight:"medium",children:a}),e.jsx(o,{variant:"small",color:"gray",children:c.email})]})},{key:"role",header:"Role",sortable:!0,align:"center",render:a=>e.jsx(T,{color:a==="Admin"?"blue":a==="Editor"?"purple":"gray",size:"sm",children:a})},{key:"status",header:"Status",sortable:!0,align:"center",render:a=>e.jsx(T,{color:a==="active"?"success":a==="inactive"?"error":"warning",variant:"subtle",size:"sm",children:a.charAt(0).toUpperCase()+a.slice(1)})},{key:"lastLogin",header:"Last Login",sortable:!0,align:"right"},{key:"actions",header:"Actions",align:"right",render:(a,c)=>e.jsxs(l,{display:"flex",gap:"sm",justifyContent:"flex-end",children:[e.jsx(j,{size:"sm",variant:"outline",children:"Edit"}),e.jsx(j,{size:"sm",variant:"secondary",children:"Delete"})]})}];return e.jsxs(l,{p:"md",children:[e.jsx(o,{variant:"body",mb:"md",children:"Custom Column Rendering"}),e.jsx(i,{data:d,columns:r,hoverable:!0})]})}},U={render:()=>{const[r,a]=k.useState("name"),[c,f]=k.useState("asc"),v=[...d].sort((g,b)=>{const n=g[r],y=b[r];return n<y?c==="asc"?-1:1:n>y?c==="asc"?1:-1:0}),x=(g,b)=>{a(g),f(b)},C=[{key:"name",header:"Name",sortable:!0},{key:"email",header:"Email",sortable:!0},{key:"role",header:"Role",sortable:!0},{key:"status",header:"Status",sortable:!0},{key:"joinDate",header:"Join Date",sortable:!0}];return e.jsxs(l,{p:"md",children:[e.jsxs(o,{variant:"body",mb:"md",children:["Sortable Table (Currently sorted by: ",r," ",c,")"]}),e.jsx(i,{data:v,columns:C,sortable:!0,sortColumn:r,sortDirection:c,onSort:x})]})}},V={render:()=>{const[r,a]=k.useState(new Set);return e.jsxs(l,{p:"md",children:[e.jsxs(o,{variant:"body",mb:"md",children:["Selectable Table (",r.size," selected)"]}),e.jsx(i,{data:d,columns:p,selectable:!0,selectedRows:r,onSelectionChange:a,variant:"striped"}),r.size>0&&e.jsx(l,{mt:"md",p:"sm",style:{backgroundColor:"rgba(74, 158, 255, 0.1)",borderRadius:"4px"},children:e.jsxs(o,{variant:"small",children:["Selected users: ",Array.from(r).map(c=>{var f;return(f=d[c])==null?void 0:f.name}).join(", ")]})})]})}},L={render:()=>{const r=[{key:"name",header:"Product",sortable:!0,render:(a,c)=>e.jsxs(l,{display:"flex",alignItems:"center",gap:"sm",children:[c.featured&&e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#4A9EFF",children:e.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})}),e.jsx(o,{variant:"body",fontWeight:"medium",children:a})]})},{key:"category",header:"Category",sortable:!0,render:a=>e.jsx(T,{color:"gray",variant:"subtle",size:"sm",children:a})},{key:"price",header:"Price",sortable:!0,align:"right",render:a=>`$${a.toFixed(2)}`},{key:"stock",header:"Stock",sortable:!0,align:"center",render:a=>e.jsxs(T,{color:a>20?"success":a>5?"warning":"error",variant:"subtle",size:"sm",children:[a," units"]})},{key:"rating",header:"Rating",sortable:!0,align:"center",render:a=>e.jsxs(l,{display:"flex",alignItems:"center",gap:"sm",children:[e.jsx("span",{children:"⭐"}),e.jsx(o,{variant:"body",children:a.toFixed(1)})]})}];return e.jsxs(l,{p:"md",children:[e.jsx(o,{variant:"body",mb:"md",children:"Product Catalog"}),e.jsx(i,{data:rr,columns:r,variant:"bordered",hoverable:!0})]})}},A={render:()=>e.jsxs(l,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(o,{variant:"body",mb:"sm",children:"Loading State"}),e.jsx(i,{data:[],columns:p,loading:!0,loadingRows:5})]}),e.jsxs("div",{children:[e.jsx(o,{variant:"body",mb:"sm",children:"Empty State"}),e.jsx(i,{data:[],columns:p,emptyMessage:"No users found. Try adjusting your search criteria."})]})]})},E={render:()=>e.jsx(l,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:e.jsxs("div",{children:[e.jsx(o,{variant:"body",mb:"md",children:"Fixed Height with Scroll (300px)"}),e.jsx(i,{data:[...d,...d,...d],columns:p,maxHeight:300,stickyHeader:!0,variant:"striped"})]})})},M={render:()=>{const r=[{key:"name",header:"Name",sortable:!0,minWidth:150},{key:"email",header:"Email",sortable:!0,minWidth:200},{key:"role",header:"Role",sortable:!0,width:100,align:"center"},{key:"status",header:"Status",sortable:!0,width:100,align:"center"},{key:"lastLogin",header:"Last Login",sortable:!0,minWidth:120,align:"right"}];return e.jsxs(l,{p:"md",children:[e.jsx(o,{variant:"body",mb:"md",children:"Responsive Table with Column Constraints"}),e.jsx(i,{data:d,columns:r,variant:"bordered"})]})}},q={render:()=>{const[r,a]=k.useState(new Set),[c,f]=k.useState("name"),[v,x]=k.useState("asc"),C=(n,y)=>{f(n),x(y)},g=[...d].sort((n,y)=>{const S=n[c],B=y[c];return S<B?v==="asc"?-1:1:S>B?v==="asc"?1:-1:0}),b=[{key:"name",header:"User",sortable:!0,render:(n,y)=>e.jsxs(l,{display:"flex",flexDirection:"column",children:[e.jsx(o,{variant:"body",fontWeight:"medium",children:n}),e.jsx(o,{variant:"small",color:"gray",children:y.email})]})},{key:"role",header:"Role",sortable:!0,align:"center",render:n=>e.jsx(T,{color:n==="Admin"?"blue":n==="Editor"?"purple":"gray",size:"sm",children:n})},{key:"status",header:"Status",sortable:!0,align:"center",render:n=>e.jsx(T,{color:n==="active"?"success":n==="inactive"?"error":"warning",variant:"subtle",size:"sm",children:n.charAt(0).toUpperCase()+n.slice(1)})},{key:"joinDate",header:"Member Since",sortable:!0,align:"right"},{key:"actions",header:"Actions",align:"right",render:(n,y,S)=>e.jsxs(l,{display:"flex",gap:"sm",justifyContent:"flex-end",children:[e.jsx(j,{size:"sm",variant:"outline",children:"Edit"}),y.status!=="active"&&e.jsx(j,{size:"sm",variant:"primary",children:"Activate"}),e.jsx(j,{size:"sm",variant:"secondary",children:"Remove"})]})}];return e.jsxs(l,{p:"md",children:[e.jsxs(l,{display:"flex",justifyContent:"space-between",alignItems:"center",mb:"md",children:[e.jsxs("div",{children:[e.jsx(o,{variant:"h3",mb:"sm",children:"User Management"}),e.jsx(o,{variant:"body",color:"gray",children:r.size>0?`${r.size} users selected`:`${d.length} total users`})]}),e.jsxs(l,{display:"flex",gap:"sm",children:[r.size>0&&e.jsxs(e.Fragment,{children:[e.jsx(j,{size:"sm",variant:"secondary",children:"Bulk Delete"}),e.jsx(j,{size:"sm",variant:"outline",children:"Export Selected"})]}),e.jsx(j,{size:"sm",variant:"primary",children:"Add User"})]})]}),e.jsx(i,{data:g,columns:b,variant:"striped",selectable:!0,sortable:!0,hoverable:!0,selectedRows:r,onSelectionChange:a,sortColumn:c,sortDirection:v,onSort:C,stickyHeader:!0,maxHeight:400})]})}},H={args:{data:d,columns:p,variant:"default",size:"md",sortable:!1,selectable:!1,hoverable:!0,loading:!1,loadingRows:5,emptyMessage:"No data available",stickyHeader:!1},render:r=>e.jsx(l,{display:"flex",justifyContent:"center",p:"md",children:e.jsx(i,{...r})})};var G,K,Q;D.parameters={...D.parameters,docs:{...(G=D.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    data: userData,
    columns: basicUserColumns,
    variant: 'default',
    size: 'md'
  }
}`,...(Q=(K=D.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="body" mb="md">Simple User Table</Typography>\r
        <Table data={userData.slice(0, 3)} columns={basicUserColumns} />\r
      </div>\r
    </Box>
}`,...(Z=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ae;$.parameters={...$.parameters,docs:{...(ee=$.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="body" mb="sm">Default</Typography>\r
        <Table data={userData.slice(0, 3)} columns={basicUserColumns} variant="default" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Bordered</Typography>\r
        <Table data={userData.slice(0, 3)} columns={basicUserColumns} variant="bordered" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Striped</Typography>\r
        <Table data={userData.slice(0, 4)} columns={basicUserColumns} variant="striped" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Minimal</Typography>\r
        <Table data={userData.slice(0, 3)} columns={basicUserColumns} variant="minimal" />\r
      </div>\r
    </Box>
}`,...(ae=(re=$.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,se,oe;z.parameters={...z.parameters,docs:{...(te=z.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Small</Typography>\r
        <Table data={userData.slice(0, 3)} columns={basicUserColumns} size="sm" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Medium</Typography>\r
        <Table data={userData.slice(0, 3)} columns={basicUserColumns} size="md" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Large</Typography>\r
        <Table data={userData.slice(0, 3)} columns={basicUserColumns} size="lg" />\r
      </div>\r
    </Box>
}`,...(oe=(se=z.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ne,le,ie;R.parameters={...R.parameters,docs:{...(ne=R.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const customColumns: TableColumn<User>[] = [{
      key: 'name',
      header: 'User Name',
      sortable: true,
      render: (value, row) => <Box display="flex" flexDirection="column">\r
            <Typography variant="body" fontWeight="medium">{value}</Typography>\r
            <Typography variant="small" color="gray">{row.email}</Typography>\r
          </Box>
    }, {
      key: 'role',
      header: 'Role',
      sortable: true,
      align: 'center',
      render: value => <Badge color={value === 'Admin' ? 'blue' : value === 'Editor' ? 'purple' : 'gray'} size="sm">\r
            {value}\r
          </Badge>
    }, {
      key: 'status',
      header: 'Status',
      sortable: true,
      align: 'center',
      render: value => <Badge color={value === 'active' ? 'success' : value === 'inactive' ? 'error' : 'warning'} variant="subtle" size="sm">\r
            {value.charAt(0).toUpperCase() + value.slice(1)}\r
          </Badge>
    }, {
      key: 'lastLogin',
      header: 'Last Login',
      sortable: true,
      align: 'right'
    }, {
      key: 'actions',
      header: 'Actions',
      align: 'right',
      render: (_, row) => <Box display="flex" gap="sm" justifyContent="flex-end">\r
            <Button size="sm" variant="outline">Edit</Button>\r
            <Button size="sm" variant="secondary">Delete</Button>\r
          </Box>
    }];
    return <Box p="md">\r
        <Typography variant="body" mb="md">Custom Column Rendering</Typography>\r
        <Table data={userData} columns={customColumns} hoverable />\r
      </Box>;
  }
}`,...(ie=(le=R.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var de,ce,ue;U.parameters={...U.parameters,docs:{...(de=U.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const [sortColumn, setSortColumn] = useState<string>('name');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const sortedData = [...userData].sort((a, b) => {
      const aValue = a[sortColumn as keyof User];
      const bValue = b[sortColumn as keyof User];
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
    const handleSort = (column: string, direction: 'asc' | 'desc') => {
      setSortColumn(column);
      setSortDirection(direction);
    };
    const sortableColumns: TableColumn<User>[] = [{
      key: 'name',
      header: 'Name',
      sortable: true
    }, {
      key: 'email',
      header: 'Email',
      sortable: true
    }, {
      key: 'role',
      header: 'Role',
      sortable: true
    }, {
      key: 'status',
      header: 'Status',
      sortable: true
    }, {
      key: 'joinDate',
      header: 'Join Date',
      sortable: true
    }];
    return <Box p="md">\r
        <Typography variant="body" mb="md">\r
          Sortable Table (Currently sorted by: {sortColumn} {sortDirection})\r
        </Typography>\r
        <Table data={sortedData} columns={sortableColumns} sortable sortColumn={sortColumn} sortDirection={sortDirection} onSort={handleSort} />\r
      </Box>;
  }
}`,...(ue=(ce=U.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var me,pe,ge;V.parameters={...V.parameters,docs:{...(me=V.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
    return <Box p="md">\r
        <Typography variant="body" mb="md">\r
          Selectable Table ({selectedRows.size} selected)\r
        </Typography>\r
        <Table data={userData} columns={basicUserColumns} selectable selectedRows={selectedRows} onSelectionChange={setSelectedRows} variant="striped" />\r
        {selectedRows.size > 0 && <Box mt="md" p="sm" style={{
        backgroundColor: 'rgba(74, 158, 255, 0.1)',
        borderRadius: '4px'
      }}>\r
            <Typography variant="small">\r
              Selected users: {Array.from(selectedRows).map(i => userData[i]?.name).join(', ')}\r
            </Typography>\r
          </Box>}\r
      </Box>;
  }
}`,...(ge=(pe=V.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var ye,he,be;L.parameters={...L.parameters,docs:{...(ye=L.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const productColumns: TableColumn<Product>[] = [{
      key: 'name',
      header: 'Product',
      sortable: true,
      render: (value, row) => <Box display="flex" alignItems="center" gap="sm">\r
            {row.featured && <svg width="16" height="16" viewBox="0 0 24 24" fill="#4A9EFF">\r
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />\r
              </svg>}\r
            <Typography variant="body" fontWeight="medium">{value}</Typography>\r
          </Box>
    }, {
      key: 'category',
      header: 'Category',
      sortable: true,
      render: value => <Badge color="gray" variant="subtle" size="sm">{value}</Badge>
    }, {
      key: 'price',
      header: 'Price',
      sortable: true,
      align: 'right',
      render: value => \`$\${value.toFixed(2)}\`
    }, {
      key: 'stock',
      header: 'Stock',
      sortable: true,
      align: 'center',
      render: value => <Badge color={value > 20 ? 'success' : value > 5 ? 'warning' : 'error'} variant="subtle" size="sm">\r
            {value} units\r
          </Badge>
    }, {
      key: 'rating',
      header: 'Rating',
      sortable: true,
      align: 'center',
      render: value => <Box display="flex" alignItems="center" gap="sm">\r
            <span>⭐</span>\r
            <Typography variant="body">{value.toFixed(1)}</Typography>\r
          </Box>
    }];
    return <Box p="md">\r
        <Typography variant="body" mb="md">Product Catalog</Typography>\r
        <Table data={productData} columns={productColumns} variant="bordered" hoverable />\r
      </Box>;
  }
}`,...(be=(he=L.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var xe,ve,fe;A.parameters={...A.parameters,docs:{...(xe=A.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="body" mb="sm">Loading State</Typography>\r
        <Table data={[]} columns={basicUserColumns} loading loadingRows={5} />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Empty State</Typography>\r
        <Table data={[]} columns={basicUserColumns} emptyMessage="No users found. Try adjusting your search criteria." />\r
      </div>\r
    </Box>
}`,...(fe=(ve=A.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var je,Se,ke;E.parameters={...E.parameters,docs:{...(je=E.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="body" mb="md">Fixed Height with Scroll (300px)</Typography>\r
        <Table data={[...userData, ...userData, ...userData]} // Triple the data
      columns={basicUserColumns} maxHeight={300} stickyHeader variant="striped" />\r
      </div>\r
    </Box>
}`,...(ke=(Se=E.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};var Te,Ce,Be;M.parameters={...M.parameters,docs:{...(Te=M.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => {
    const responsiveColumns: TableColumn<User>[] = [{
      key: 'name',
      header: 'Name',
      sortable: true,
      minWidth: 150
    }, {
      key: 'email',
      header: 'Email',
      sortable: true,
      minWidth: 200
    }, {
      key: 'role',
      header: 'Role',
      sortable: true,
      width: 100,
      align: 'center'
    }, {
      key: 'status',
      header: 'Status',
      sortable: true,
      width: 100,
      align: 'center'
    }, {
      key: 'lastLogin',
      header: 'Last Login',
      sortable: true,
      minWidth: 120,
      align: 'right'
    }];
    return <Box p="md">\r
        <Typography variant="body" mb="md">Responsive Table with Column Constraints</Typography>\r
        <Table data={userData} columns={responsiveColumns} variant="bordered" />\r
      </Box>;
  }
}`,...(Be=(Ce=M.parameters)==null?void 0:Ce.docs)==null?void 0:Be.source}}};var De,we,$e;q.parameters={...q.parameters,docs:{...(De=q.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => {
    const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
    const [sortColumn, setSortColumn] = useState<string>('name');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const handleSort = (column: string, direction: 'asc' | 'desc') => {
      setSortColumn(column);
      setSortDirection(direction);
    };
    const sortedData = [...userData].sort((a, b) => {
      const aValue = a[sortColumn as keyof User];
      const bValue = b[sortColumn as keyof User];
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
    const adminColumns: TableColumn<User>[] = [{
      key: 'name',
      header: 'User',
      sortable: true,
      render: (value, row) => <Box display="flex" flexDirection="column">\r
            <Typography variant="body" fontWeight="medium">{value}</Typography>\r
            <Typography variant="small" color="gray">{row.email}</Typography>\r
          </Box>
    }, {
      key: 'role',
      header: 'Role',
      sortable: true,
      align: 'center',
      render: value => <Badge color={value === 'Admin' ? 'blue' : value === 'Editor' ? 'purple' : 'gray'} size="sm">\r
            {value}\r
          </Badge>
    }, {
      key: 'status',
      header: 'Status',
      sortable: true,
      align: 'center',
      render: value => <Badge color={value === 'active' ? 'success' : value === 'inactive' ? 'error' : 'warning'} variant="subtle" size="sm">\r
            {value.charAt(0).toUpperCase() + value.slice(1)}\r
          </Badge>
    }, {
      key: 'joinDate',
      header: 'Member Since',
      sortable: true,
      align: 'right'
    }, {
      key: 'actions',
      header: 'Actions',
      align: 'right',
      render: (_, row, index) => <Box display="flex" gap="sm" justifyContent="flex-end">\r
            <Button size="sm" variant="outline">Edit</Button>\r
            {row.status !== 'active' && <Button size="sm" variant="primary">Activate</Button>}\r
            <Button size="sm" variant="secondary">Remove</Button>\r
          </Box>
    }];
    return <Box p="md">\r
        <Box display="flex" justifyContent="space-between" alignItems="center" mb="md">\r
          <div>\r
            <Typography variant="h3" mb="sm">User Management</Typography>\r
            <Typography variant="body" color="gray">\r
              {selectedRows.size > 0 ? \`\${selectedRows.size} users selected\` : \`\${userData.length} total users\`}\r
            </Typography>\r
          </div>\r
          <Box display="flex" gap="sm">\r
            {selectedRows.size > 0 && <>\r
                <Button size="sm" variant="secondary">Bulk Delete</Button>\r
                <Button size="sm" variant="outline">Export Selected</Button>\r
              </>}\r
            <Button size="sm" variant="primary">Add User</Button>\r
          </Box>\r
        </Box>\r
        \r
        <Table data={sortedData} columns={adminColumns} variant="striped" selectable sortable hoverable selectedRows={selectedRows} onSelectionChange={setSelectedRows} sortColumn={sortColumn} sortDirection={sortDirection} onSort={handleSort} stickyHeader maxHeight={400} />\r
      </Box>;
  }
}`,...($e=(we=q.parameters)==null?void 0:we.docs)==null?void 0:$e.source}}};var ze,Re,Ue;H.parameters={...H.parameters,docs:{...(ze=H.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    data: userData,
    columns: basicUserColumns,
    variant: 'default',
    size: 'md',
    sortable: false,
    selectable: false,
    hoverable: true,
    loading: false,
    loadingRows: 5,
    emptyMessage: 'No data available',
    stickyHeader: false
  },
  render: args => <Box display="flex" justifyContent="center" p="md">\r
      <Table {...args} />\r
    </Box>
}`,...(Ue=(Re=H.parameters)==null?void 0:Re.docs)==null?void 0:Ue.source}}};const cr=["Default","BasicUsage","Variants","Sizes","CustomColumns","SortableTable","SelectableTable","ProductTable","LoadingStates","FixedHeight","ResponsiveTable","RealWorldExample","Playground"];export{w as BasicUsage,R as CustomColumns,D as Default,E as FixedHeight,A as LoadingStates,H as Playground,L as ProductTable,q as RealWorldExample,M as ResponsiveTable,V as SelectableTable,z as Sizes,U as SortableTable,$ as Variants,cr as __namedExportsOrder,dr as default};
