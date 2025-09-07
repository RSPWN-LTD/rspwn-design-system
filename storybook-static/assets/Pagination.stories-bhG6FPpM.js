import{j as e}from"./jsx-runtime-CDt2p4po.js";import{l as f,d as N}from"./styled-components.browser.esm-Byilhkxn.js";import{B as g}from"./Box-COihqxSe.js";import{T as t}from"./Typography-u4LxpgYF.js";import{r as o}from"./index-GiUgBvb1.js";import"./propFilters-BGSNtaQt.js";const ze=a=>{switch(a){case"sm":return f`
        font-size: ${({theme:r})=>r.typography.fontSizes.xs};
        
        button {
          min-width: 32px;
          height: 32px;
          padding: ${({theme:r})=>r.spacing[2]};
        }
        
        .page-info {
          font-size: ${({theme:r})=>r.typography.fontSizes.xs};
        }
      `;case"lg":return f`
        font-size: ${({theme:r})=>r.typography.fontSizes.base};
        
        button {
          min-width: 48px;
          height: 48px;
          padding: ${({theme:r})=>r.spacing[4]};
        }
        
        .page-info {
          font-size: ${({theme:r})=>r.typography.fontSizes.base};
        }
      `;default:return f`
        font-size: ${({theme:r})=>r.typography.fontSizes.sm};
        
        button {
          min-width: 40px;
          height: 40px;
          padding: ${({theme:r})=>r.spacing[3]};
        }
        
        .page-info {
          font-size: ${({theme:r})=>r.typography.fontSizes.sm};
        }
      `}},E=N.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:a})=>a.spacing[1]};
  font-family: ${({theme:a})=>a.typography.fonts.body};
  
  ${({size:a})=>ze(a)}
  
  ${({variant:a})=>a==="minimal"&&f`
      gap: ${({theme:r})=>r.spacing[3]};
    `}
`,x=N.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: ${({theme:a})=>a.radius.base};
  background: transparent;
  color: ${({theme:a})=>a.colors.gray.light};
  font-family: inherit;
  font-size: inherit;
  font-weight: ${({theme:a})=>a.typography.fontWeights.medium};
  cursor: pointer;
  transition: all ${({theme:a})=>a.durations.fast} ${({theme:a})=>a.easings.easeInOut};
  user-select: none;
  
  &:hover:not(:disabled) {
    background: ${({theme:a})=>a.colors.gray.dark};
    color: ${({theme:a})=>a.colors.foundation.white};
  }
  
  &:focus {
    outline: 2px solid ${({theme:a})=>a.colors.innovation.primaryBlue};
    outline-offset: 2px;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  ${({isActive:a,theme:r})=>a&&f`
      background: ${r.colors.innovation.primaryBlue};
      color: ${r.colors.foundation.white};
      border-color: ${r.colors.innovation.primaryBlue};
      
      &:hover:not(:disabled) {
        background: ${r.colors.innovation.primaryBlue};
        opacity: 0.9;
      }
    `}
  
  ${({variant:a})=>a==="minimal"&&f`
      background: none;
      border: none;
      
      &:hover:not(:disabled) {
        background: none;
        color: ${({theme:r})=>r.colors.innovation.primaryBlue};
      }
    `}
  
  svg {
    width: 16px;
    height: 16px;
  }
`,$e=N.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  color: ${({theme:a})=>a.colors.gray.dark};
  user-select: none;
  pointer-events: none;
`,G=N.div`
  color: ${({theme:a})=>a.colors.gray.light};
  white-space: nowrap;
  margin: 0 ${({theme:a})=>a.spacing[3]};
`,W=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"})}),A=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41 1.41z"})}),Re=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})}),ke=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})}),n=({currentPage:a,totalPages:r,onPageChange:i,size:d="md",variant:s="default",showFirstLast:c=!0,showPrevNext:l=!0,showPageNumbers:m=!0,maxVisiblePages:p=7,previousLabel:j="Previous",nextLabel:I="Next",firstLabel:we="First",lastLabel:Le="Last",disabled:P=!1,className:F,"aria-label":q="Pagination navigation",..._})=>{const Ve=(()=>{if(r<=p)return Array.from({length:r},(C,De)=>De+1);const h=Math.floor(p/2);let b=Math.max(1,a-h),u=Math.min(r,b+p-1);u-b+1<p&&(b=Math.max(1,u-p+1));const v=[];for(let C=b;C<=u;C++)v.push(C);return b>1&&(b>2&&v.unshift("..."),v.unshift(1)),u<r&&(u<r-1&&v.push("..."),v.push(r)),v})(),y=h=>{h>=1&&h<=r&&h!==a&&!P&&i(h)};return s==="compact"?e.jsxs(E,{className:F,size:d,variant:s,role:"navigation","aria-label":q,..._,children:[l&&e.jsx(x,{variant:s,onClick:()=>y(a-1),disabled:P||a<=1,"aria-label":j,children:e.jsx(W,{})}),e.jsxs(G,{className:"page-info",children:["Page ",a," of ",r]}),l&&e.jsx(x,{variant:s,onClick:()=>y(a+1),disabled:P||a>=r,"aria-label":I,children:e.jsx(A,{})})]}):s==="minimal"?e.jsxs(E,{className:F,size:d,variant:s,role:"navigation","aria-label":q,..._,children:[e.jsxs(x,{variant:s,onClick:()=>y(a-1),disabled:P||a<=1,children:["← ",j]}),e.jsxs(G,{className:"page-info",children:[a," / ",r]}),e.jsxs(x,{variant:s,onClick:()=>y(a+1),disabled:P||a>=r,children:[I," →"]})]}):e.jsxs(E,{className:F,size:d,variant:s,role:"navigation","aria-label":q,..._,children:[c&&e.jsx(x,{variant:s,onClick:()=>y(1),disabled:P||a<=1,"aria-label":we,children:e.jsx(Re,{})}),l&&e.jsx(x,{variant:s,onClick:()=>y(a-1),disabled:P||a<=1,"aria-label":j,children:e.jsx(W,{})}),m&&Ve.map((h,b)=>{if(h==="...")return e.jsx($e,{children:"…"},`ellipsis-${b}`);const u=h;return e.jsx(x,{variant:s,isActive:u===a,onClick:()=>y(u),disabled:P,"aria-label":`Go to page ${u}`,"aria-current":u===a?"page":void 0,children:u},u)}),l&&e.jsx(x,{variant:s,onClick:()=>y(a+1),disabled:P||a>=r,"aria-label":I,children:e.jsx(A,{})}),c&&e.jsx(x,{variant:s,onClick:()=>y(r),disabled:P||a>=r,"aria-label":Le,children:e.jsx(ke,{})})]})};try{n.displayName="Pagination",n.__docgenInfo={description:"",displayName:"Pagination",props:{currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},totalPages:{defaultValue:null,description:"",name:"totalPages",required:!0,type:{name:"number"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!0,type:{name:"(page: number) => void"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"minimal"'},{value:'"compact"'}]}},showFirstLast:{defaultValue:{value:"true"},description:"",name:"showFirstLast",required:!1,type:{name:"boolean"}},showPrevNext:{defaultValue:{value:"true"},description:"",name:"showPrevNext",required:!1,type:{name:"boolean"}},showPageNumbers:{defaultValue:{value:"true"},description:"",name:"showPageNumbers",required:!1,type:{name:"boolean"}},maxVisiblePages:{defaultValue:{value:"7"},description:"",name:"maxVisiblePages",required:!1,type:{name:"number"}},previousLabel:{defaultValue:{value:"Previous"},description:"",name:"previousLabel",required:!1,type:{name:"string"}},nextLabel:{defaultValue:{value:"Next"},description:"",name:"nextLabel",required:!1,type:{name:"string"}},firstLabel:{defaultValue:{value:"First"},description:"",name:"firstLabel",required:!1,type:{name:"string"}},lastLabel:{defaultValue:{value:"Last"},description:"",name:"lastLabel",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},"aria-label":{defaultValue:{value:"Pagination navigation"},description:"",name:"aria-label",required:!1,type:{name:"string"}}}}}catch{}const Ge={title:"UI/Pagination",component:n,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["default","minimal","compact"]},maxVisiblePages:{control:{type:"number",min:3,max:15}}}},T={args:{currentPage:5,totalPages:20,onPageChange:a=>console.log("Page changed to:",a),size:"md",variant:"default"}},S={render:()=>{const[a,r]=o.useState(1);return e.jsx(g,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"md",children:"Basic Pagination (10 pages)"}),e.jsx(n,{currentPage:a,totalPages:10,onPageChange:r}),e.jsxs(t,{variant:"small",color:"gray",mt:"sm",children:["Current page: ",a]})]})})}},B={render:()=>{const[a,r]=o.useState(3),[i,d]=o.useState(3),[s,c]=o.useState(3),l=15;return e.jsxs(g,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"md",children:"Default Variant"}),e.jsx(n,{currentPage:a,totalPages:l,onPageChange:r,variant:"default"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"md",children:"Minimal Variant"}),e.jsx(n,{currentPage:i,totalPages:l,onPageChange:d,variant:"minimal"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"md",children:"Compact Variant"}),e.jsx(n,{currentPage:s,totalPages:l,onPageChange:c,variant:"compact"})]})]})}},w={render:()=>{const[a,r]=o.useState(2),[i,d]=o.useState(2),[s,c]=o.useState(2),l=8;return e.jsxs(g,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"small",mb:"sm",color:"gray",children:"Small"}),e.jsx(n,{currentPage:a,totalPages:l,onPageChange:r,size:"sm"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"small",mb:"sm",color:"gray",children:"Medium"}),e.jsx(n,{currentPage:i,totalPages:l,onPageChange:d,size:"md"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"small",mb:"sm",color:"gray",children:"Large"}),e.jsx(n,{currentPage:s,totalPages:l,onPageChange:c,size:"lg"})]})]})}},L={render:()=>{const[a,r]=o.useState(1),[i,d]=o.useState(5),[s,c]=o.useState(25),[l,m]=o.useState(150);return e.jsxs(g,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"sm",children:"Few Pages (5 total)"}),e.jsx(n,{currentPage:a,totalPages:5,onPageChange:r})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"sm",children:"Medium Range (15 total)"}),e.jsx(n,{currentPage:i,totalPages:15,onPageChange:d})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"sm",children:"Large Range (50 total)"}),e.jsx(n,{currentPage:s,totalPages:50,onPageChange:c})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"sm",children:"Very Large Range (500 total)"}),e.jsx(n,{currentPage:l,totalPages:500,onPageChange:m})]})]})}},V={render:()=>{const[a,r]=o.useState(10),[i,d]=o.useState(10),[s,c]=o.useState(10),[l,m]=o.useState(10),p=20;return e.jsxs(g,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"sm",children:"Limited Visible Pages (3 max)"}),e.jsx(n,{currentPage:a,totalPages:p,onPageChange:r,maxVisiblePages:3})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"sm",children:"No First/Last Buttons"}),e.jsx(n,{currentPage:i,totalPages:p,onPageChange:d,showFirstLast:!1})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"sm",children:"No Previous/Next Buttons"}),e.jsx(n,{currentPage:s,totalPages:p,onPageChange:c,showPrevNext:!1})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"sm",children:"Only Navigation Buttons"}),e.jsx(n,{currentPage:l,totalPages:p,onPageChange:m,showPageNumbers:!1})]})]})}},D={render:()=>{const[a,r]=o.useState(5);return e.jsx(g,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"md",children:"Custom Button Labels"}),e.jsx(n,{currentPage:a,totalPages:12,onPageChange:r,previousLabel:"Prev",nextLabel:"Next",firstLabel:"First Page",lastLabel:"Last Page"})]})})}},z={render:()=>e.jsxs(g,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"sm",children:"Disabled Default"}),e.jsx(n,{currentPage:5,totalPages:10,onPageChange:()=>{},disabled:!0})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"sm",children:"Disabled Minimal"}),e.jsx(n,{currentPage:3,totalPages:8,onPageChange:()=>{},variant:"minimal",disabled:!0})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"sm",children:"Disabled Compact"}),e.jsx(n,{currentPage:2,totalPages:5,onPageChange:()=>{},variant:"compact",disabled:!0})]})]})},$={render:()=>{const[a,r]=o.useState(1),[i,d]=o.useState(1),[s,c]=o.useState(1);return e.jsxs(g,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"sm",children:"Single Page"}),e.jsx(n,{currentPage:a,totalPages:1,onPageChange:r})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"sm",children:"First Page (20 total)"}),e.jsx(n,{currentPage:i,totalPages:20,onPageChange:d})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"sm",children:"Last Page (15 total)"}),e.jsx(n,{currentPage:15,totalPages:15,onPageChange:c})]})]})}},R={render:()=>{const[a,r]=o.useState(1),[i,d]=o.useState(20),[s,c]=o.useState(7),l=m=>{r(m)};return e.jsx(g,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:e.jsxs("div",{children:[e.jsx(t,{variant:"h3",mb:"md",children:"Interactive Pagination Demo"}),e.jsxs(g,{display:"flex",gap:"lg",mb:"lg",flexWrap:"wrap",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"small",mb:"sm",children:"Total Pages:"}),e.jsx("input",{type:"range",min:"5",max:"100",value:i,onChange:m=>{const p=parseInt(m.target.value);d(p),a>p&&r(p)}}),e.jsx(t,{variant:"small",color:"gray",children:i})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"small",mb:"sm",children:"Max Visible Pages:"}),e.jsx("input",{type:"range",min:"3",max:"15",value:s,onChange:m=>c(parseInt(m.target.value))}),e.jsx(t,{variant:"small",color:"gray",children:s})]})]}),e.jsx(n,{currentPage:a,totalPages:i,onPageChange:l,maxVisiblePages:s}),e.jsxs(g,{mt:"md",p:"md",style:{backgroundColor:"rgba(74, 158, 255, 0.1)",borderRadius:"4px"},children:[e.jsxs(t,{variant:"body",children:["Current Page: ",e.jsx("strong",{children:a})," of ",e.jsx("strong",{children:i})]}),e.jsxs(t,{variant:"small",color:"gray",mt:"sm",children:["Showing ",s," visible page buttons at most"]})]})]})})}},k={render:()=>{const[a,r]=o.useState(1),[i,d]=o.useState(1),[s,c]=o.useState(1),[l,m]=o.useState(1);return e.jsxs(g,{display:"flex",flexDirection:"column",gap:"xl",p:"md",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"h3",mb:"lg",children:"Data Table Pagination"}),e.jsxs(g,{p:"md",style:{border:"1px solid #333",borderRadius:"4px"},mb:"md",children:[e.jsx(t,{variant:"body",color:"gray",mb:"sm",children:"Showing 1-25 of 1,247 entries"}),e.jsx("div",{style:{height:"120px",backgroundColor:"rgba(255,255,255,0.05)",borderRadius:"4px",marginBottom:"16px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(t,{variant:"small",color:"gray",children:"Table data would be here"})}),e.jsx(n,{currentPage:a,totalPages:50,onPageChange:r,size:"sm",maxVisiblePages:5})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"h3",mb:"lg",children:"Search Results"}),e.jsxs(g,{p:"md",style:{border:"1px solid #333",borderRadius:"4px"},mb:"md",children:[e.jsx(t,{variant:"body",mb:"md",children:'Found 342 results for "gaming keyboards"'}),e.jsx("div",{style:{height:"200px",backgroundColor:"rgba(255,255,255,0.05)",borderRadius:"4px",marginBottom:"16px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(t,{variant:"small",color:"gray",children:"Search results would be here"})}),e.jsx(n,{currentPage:i,totalPages:35,onPageChange:d,variant:"minimal"})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"h3",mb:"lg",children:"Image Gallery"}),e.jsxs(g,{p:"md",style:{border:"1px solid #333",borderRadius:"4px"},mb:"md",children:[e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"8px",marginBottom:"16px"},children:Array.from({length:12}).map((p,j)=>e.jsx("div",{style:{height:"80px",backgroundColor:"rgba(255,255,255,0.1)",borderRadius:"4px"}},j))}),e.jsx(g,{display:"flex",justifyContent:"center",children:e.jsx(n,{currentPage:s,totalPages:25,onPageChange:c,variant:"compact"})})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"h3",mb:"lg",children:"Blog Posts"}),e.jsxs(g,{p:"md",style:{border:"1px solid #333",borderRadius:"4px"},children:[e.jsx(t,{variant:"body",mb:"md",children:"Latest Gaming News & Reviews"}),e.jsx("div",{style:{height:"300px",backgroundColor:"rgba(255,255,255,0.05)",borderRadius:"4px",marginBottom:"16px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(t,{variant:"small",color:"gray",children:"Blog posts would be here"})}),e.jsxs(g,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[e.jsx(t,{variant:"small",color:"gray",children:"Posts 1-10 of 156"}),e.jsx(n,{currentPage:l,totalPages:16,onPageChange:m,showFirstLast:!1,maxVisiblePages:5})]})]})]})]})}},M={args:{currentPage:5,totalPages:20,onPageChange:a=>console.log("Page:",a),size:"md",variant:"default",showFirstLast:!0,showPrevNext:!0,showPageNumbers:!0,maxVisiblePages:7,disabled:!1},render:a=>e.jsx(g,{display:"flex",justifyContent:"center",p:"md",children:e.jsx(n,{...a})})};var O,U,H;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 20,
    onPageChange: page => console.log('Page changed to:', page),
    size: 'md',
    variant: 'default'
  }
}`,...(H=(U=T.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var J,K,Q;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="body" mb="md">Basic Pagination (10 pages)</Typography>\r
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />\r
          <Typography variant="small" color="gray" mt="sm">\r
            Current page: {currentPage}\r
          </Typography>\r
        </div>\r
      </Box>;
  }
}`,...(Q=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [defaultPage, setDefaultPage] = useState(3);
    const [minimalPage, setMinimalPage] = useState(3);
    const [compactPage, setCompactPage] = useState(3);
    const totalPages = 15;
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="body" mb="md">Default Variant</Typography>\r
          <Pagination currentPage={defaultPage} totalPages={totalPages} onPageChange={setDefaultPage} variant="default" />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="md">Minimal Variant</Typography>\r
          <Pagination currentPage={minimalPage} totalPages={totalPages} onPageChange={setMinimalPage} variant="minimal" />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="md">Compact Variant</Typography>\r
          <Pagination currentPage={compactPage} totalPages={totalPages} onPageChange={setCompactPage} variant="compact" />\r
        </div>\r
      </Box>;
  }
}`,...(Z=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [smallPage, setSmallPage] = useState(2);
    const [mediumPage, setMediumPage] = useState(2);
    const [largePage, setLargePage] = useState(2);
    const totalPages = 8;
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="small" mb="sm" color="gray">Small</Typography>\r
          <Pagination currentPage={smallPage} totalPages={totalPages} onPageChange={setSmallPage} size="sm" />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="small" mb="sm" color="gray">Medium</Typography>\r
          <Pagination currentPage={mediumPage} totalPages={totalPages} onPageChange={setMediumPage} size="md" />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="small" mb="sm" color="gray">Large</Typography>\r
          <Pagination currentPage={largePage} totalPages={totalPages} onPageChange={setLargePage} size="lg" />\r
        </div>\r
      </Box>;
  }
}`,...(re=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,ne,se;L.parameters={...L.parameters,docs:{...(te=L.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [page1, setPage1] = useState(1);
    const [page2, setPage2] = useState(5);
    const [page3, setPage3] = useState(25);
    const [page4, setPage4] = useState(150);
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="body" mb="sm">Few Pages (5 total)</Typography>\r
          <Pagination currentPage={page1} totalPages={5} onPageChange={setPage1} />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">Medium Range (15 total)</Typography>\r
          <Pagination currentPage={page2} totalPages={15} onPageChange={setPage2} />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">Large Range (50 total)</Typography>\r
          <Pagination currentPage={page3} totalPages={50} onPageChange={setPage3} />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">Very Large Range (500 total)</Typography>\r
          <Pagination currentPage={page4} totalPages={500} onPageChange={setPage4} />\r
        </div>\r
      </Box>;
  }
}`,...(se=(ne=L.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,ie,le;V.parameters={...V.parameters,docs:{...(oe=V.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const [page1, setPage1] = useState(10);
    const [page2, setPage2] = useState(10);
    const [page3, setPage3] = useState(10);
    const [page4, setPage4] = useState(10);
    const totalPages = 20;
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="body" mb="sm">Limited Visible Pages (3 max)</Typography>\r
          <Pagination currentPage={page1} totalPages={totalPages} onPageChange={setPage1} maxVisiblePages={3} />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">No First/Last Buttons</Typography>\r
          <Pagination currentPage={page2} totalPages={totalPages} onPageChange={setPage2} showFirstLast={false} />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">No Previous/Next Buttons</Typography>\r
          <Pagination currentPage={page3} totalPages={totalPages} onPageChange={setPage3} showPrevNext={false} />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">Only Navigation Buttons</Typography>\r
          <Pagination currentPage={page4} totalPages={totalPages} onPageChange={setPage4} showPageNumbers={false} />\r
        </div>\r
      </Box>;
  }
}`,...(le=(ie=V.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ge,de,ce;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(5);
    const totalPages = 12;
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="body" mb="md">Custom Button Labels</Typography>\r
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} previousLabel="Prev" nextLabel="Next" firstLabel="First Page" lastLabel="Last Page" />\r
        </div>\r
      </Box>;
  }
}`,...(ce=(de=D.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,me,ue;z.parameters={...z.parameters,docs:{...(pe=z.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="body" mb="sm">Disabled Default</Typography>\r
        <Pagination currentPage={5} totalPages={10} onPageChange={() => {}} disabled />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Disabled Minimal</Typography>\r
        <Pagination currentPage={3} totalPages={8} onPageChange={() => {}} variant="minimal" disabled />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Disabled Compact</Typography>\r
        <Pagination currentPage={2} totalPages={5} onPageChange={() => {}} variant="compact" disabled />\r
      </div>\r
    </Box>
}`,...(ue=(me=z.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var Pe,ye,he;$.parameters={...$.parameters,docs:{...(Pe=$.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => {
    const [page1, setPage1] = useState(1);
    const [page2, setPage2] = useState(1);
    const [page3, setPage3] = useState(1);
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="body" mb="sm">Single Page</Typography>\r
          <Pagination currentPage={page1} totalPages={1} onPageChange={setPage1} />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">First Page (20 total)</Typography>\r
          <Pagination currentPage={page2} totalPages={20} onPageChange={setPage2} />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">Last Page (15 total)</Typography>\r
          <Pagination currentPage={15} totalPages={15} onPageChange={setPage3} />\r
        </div>\r
      </Box>;
  }
}`,...(he=(ye=$.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var xe,be,ve;R.parameters={...R.parameters,docs:{...(xe=R.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(20);
    const [maxVisible, setMaxVisible] = useState(7);
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="h3" mb="md">Interactive Pagination Demo</Typography>\r
          \r
          <Box display="flex" gap="lg" mb="lg" flexWrap="wrap">\r
            <div>\r
              <Typography variant="small" mb="sm">Total Pages:</Typography>\r
              <input type="range" min="5" max="100" value={totalPages} onChange={e => {
              const newTotal = parseInt(e.target.value);
              setTotalPages(newTotal);
              if (currentPage > newTotal) {
                setCurrentPage(newTotal);
              }
            }} />\r
              <Typography variant="small" color="gray">{totalPages}</Typography>\r
            </div>\r
            \r
            <div>\r
              <Typography variant="small" mb="sm">Max Visible Pages:</Typography>\r
              <input type="range" min="3" max="15" value={maxVisible} onChange={e => setMaxVisible(parseInt(e.target.value))} />\r
              <Typography variant="small" color="gray">{maxVisible}</Typography>\r
            </div>\r
          </Box>\r
          \r
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} maxVisiblePages={maxVisible} />\r
          \r
          <Box mt="md" p="md" style={{
          backgroundColor: 'rgba(74, 158, 255, 0.1)',
          borderRadius: '4px'
        }}>\r
            <Typography variant="body">\r
              Current Page: <strong>{currentPage}</strong> of <strong>{totalPages}</strong>\r
            </Typography>\r
            <Typography variant="small" color="gray" mt="sm">\r
              Showing {maxVisible} visible page buttons at most\r
            </Typography>\r
          </Box>\r
        </div>\r
      </Box>;
  }
}`,...(ve=(be=R.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var fe,je,Ce;k.parameters={...k.parameters,docs:{...(fe=k.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => {
    const [tablePage, setTablePage] = useState(1);
    const [searchPage, setSearchPage] = useState(1);
    const [galleryPage, setGalleryPage] = useState(1);
    const [blogPage, setBlogPage] = useState(1);
    return <Box display="flex" flexDirection="column" gap="xl" p="md">\r
        <div>\r
          <Typography variant="h3" mb="lg">Data Table Pagination</Typography>\r
          <Box p="md" style={{
          border: '1px solid #333',
          borderRadius: '4px'
        }} mb="md">\r
            <Typography variant="body" color="gray" mb="sm">\r
              Showing 1-25 of 1,247 entries\r
            </Typography>\r
            <div style={{
            height: '120px',
            backgroundColor: 'rgba(255,255,255,0.05)',
            borderRadius: '4px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>\r
              <Typography variant="small" color="gray">Table data would be here</Typography>\r
            </div>\r
            <Pagination currentPage={tablePage} totalPages={50} onPageChange={setTablePage} size="sm" maxVisiblePages={5} />\r
          </Box>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="h3" mb="lg">Search Results</Typography>\r
          <Box p="md" style={{
          border: '1px solid #333',
          borderRadius: '4px'
        }} mb="md">\r
            <Typography variant="body" mb="md">\r
              Found 342 results for "gaming keyboards"\r
            </Typography>\r
            <div style={{
            height: '200px',
            backgroundColor: 'rgba(255,255,255,0.05)',
            borderRadius: '4px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>\r
              <Typography variant="small" color="gray">Search results would be here</Typography>\r
            </div>\r
            <Pagination currentPage={searchPage} totalPages={35} onPageChange={setSearchPage} variant="minimal" />\r
          </Box>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="h3" mb="lg">Image Gallery</Typography>\r
          <Box p="md" style={{
          border: '1px solid #333',
          borderRadius: '4px'
        }} mb="md">\r
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '8px',
            marginBottom: '16px'
          }}>\r
              {Array.from({
              length: 12
            }).map((_, i) => <div key={i} style={{
              height: '80px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: '4px'
            }} />)}\r
            </div>\r
            <Box display="flex" justifyContent="center">\r
              <Pagination currentPage={galleryPage} totalPages={25} onPageChange={setGalleryPage} variant="compact" />\r
            </Box>\r
          </Box>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="h3" mb="lg">Blog Posts</Typography>\r
          <Box p="md" style={{
          border: '1px solid #333',
          borderRadius: '4px'
        }}>\r
            <Typography variant="body" mb="md">\r
              Latest Gaming News & Reviews\r
            </Typography>\r
            <div style={{
            height: '300px',
            backgroundColor: 'rgba(255,255,255,0.05)',
            borderRadius: '4px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>\r
              <Typography variant="small" color="gray">Blog posts would be here</Typography>\r
            </div>\r
            <Box display="flex" justifyContent="space-between" alignItems="center">\r
              <Typography variant="small" color="gray">\r
                Posts 1-10 of 156\r
              </Typography>\r
              <Pagination currentPage={blogPage} totalPages={16} onPageChange={setBlogPage} showFirstLast={false} maxVisiblePages={5} />\r
            </Box>\r
          </Box>\r
        </div>\r
      </Box>;
  }
}`,...(Ce=(je=k.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var Te,Se,Be;M.parameters={...M.parameters,docs:{...(Te=M.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 20,
    onPageChange: page => console.log('Page:', page),
    size: 'md',
    variant: 'default',
    showFirstLast: true,
    showPrevNext: true,
    showPageNumbers: true,
    maxVisiblePages: 7,
    disabled: false
  },
  render: args => <Box display="flex" justifyContent="center" p="md">\r
      <Pagination {...args} />\r
    </Box>
}`,...(Be=(Se=M.parameters)==null?void 0:Se.docs)==null?void 0:Be.source}}};const We=["Default","BasicUsage","Variants","Sizes","DifferentPageCounts","CustomConfiguration","CustomLabels","DisabledState","EdgeCases","InteractiveDemo","RealWorldExamples","Playground"];export{S as BasicUsage,V as CustomConfiguration,D as CustomLabels,T as Default,L as DifferentPageCounts,z as DisabledState,$ as EdgeCases,R as InteractiveDemo,M as Playground,k as RealWorldExamples,w as Sizes,B as Variants,We as __namedExportsOrder,Ge as default};
