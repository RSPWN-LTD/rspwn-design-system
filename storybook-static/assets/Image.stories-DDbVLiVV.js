import{j as a}from"./jsx-runtime-CDt2p4po.js";import{r as m,R as Ca}from"./index-GiUgBvb1.js";import{l as c,d as p}from"./styled-components.browser.esm-Byilhkxn.js";import{S as Da}from"./Skeleton-hD5ogoun.js";import{B as n}from"./Box-C_K3nAud.js";import{T as r}from"./Typography-CzMVeEUw.js";import"./propFilters-BGSNtaQt.js";const Ea=p.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: ${({theme:e})=>e.radius.base};
  background-color: ${({theme:e})=>e.colors.gray.dark};
  
  ${({width:e})=>e&&c`
      width: ${typeof e=="number"?`${e}px`:e};
    `}
  
  ${({height:e})=>e&&c`
      height: ${typeof e=="number"?`${e}px`:e};
    `}
  
  ${({aspectRatio:e})=>e&&c`
      aspect-ratio: ${e};
    `}
`,z=p.img`
  width: 100%;
  height: 100%;
  display: block;
  
  ${({objectFit:e})=>e&&c`
      object-fit: ${e};
    `}
  
  ${({objectPosition:e})=>e&&c`
      object-position: ${e};
    `}
  
  ${({fadeIn:e,isLoaded:s})=>e&&c`
      opacity: ${s?1:0};
      transition: opacity ${({theme:o})=>o.durations.normal} ${({theme:o})=>o.easings.easeInOut};
    `}
`,W=p.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.colors.gray.dark};
  color: ${({theme:e})=>e.colors.gray.light};
  font-size: ${({theme:e})=>e.typography.fontSizes.sm};
  z-index: 1;
`,La=p.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e.colors.gray.dark};
  color: ${({theme:e})=>e.colors.gray.light};
  text-align: center;
  padding: ${({theme:e})=>e.spacing[4]};
  z-index: 2;
`,Aa=p.div`
  font-size: 2rem;
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  opacity: 0.5;
`,qa=p.div`
  font-size: ${({theme:e})=>e.typography.fontSizes.sm};
  opacity: 0.7;
  max-width: 200px;
  word-wrap: break-word;
`,Va=p.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`,za=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"32",height:"32",children:a.jsx("path",{d:"M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4 4-3.99z"})}),Wa=(e,s={})=>{const[o,S]=m.useState(!1);return m.useEffect(()=>{const h=e.current;if(!h)return;const d=new IntersectionObserver(([x])=>{x.isIntersecting&&(S(!0),d.disconnect())},{threshold:.1,...s});return d.observe(h),()=>d.disconnect()},[e,s]),o},i=({src:e,alt:s,width:o,height:S,aspectRatio:h,objectFit:d="cover",objectPosition:x,loading:R="lazy",placeholder:E,fallback:y,showSkeleton:ba=!0,fadeIn:ja=!0,onLoad:F,onError:C,className:wa,...Ia})=>{const[g,u]=m.useState({isLoading:!0,hasError:!1,isInView:R==="eager"}),[Ta,L]=m.useState(!1),A=m.useRef(null),q=R==="lazy",V=Wa(A,{threshold:.1});m.useEffect(()=>{(!q||V)&&u(l=>({...l,isInView:!0}))},[V,q]);const Ba=l=>{u(D=>({...D,isLoading:!1,hasError:!1})),L(!0),F==null||F(l)},ka=l=>{u(D=>({...D,isLoading:!1,hasError:!0})),L(!1),C==null||C(l)},Ga=g.isInView&&!g.hasError,$a=g.isLoading&&!g.hasError,Sa=g.hasError,Ra=()=>typeof y=="string"?a.jsx(z,{src:y,alt:s,objectFit:d,objectPosition:x,fadeIn:!1,isLoaded:!0,onError:()=>{u(l=>({...l,hasError:!0}))}}):Ca.isValidElement(y)?y:a.jsxs(La,{children:[a.jsx(Aa,{children:a.jsx(za,{})}),a.jsx(qa,{children:"Unable to load image"})]}),Fa=()=>E?a.jsx(W,{children:E}):ba?a.jsx(Va,{children:a.jsx(Da,{variant:"rectangular",width:"100%",height:"100%",animation:"pulse"})}):a.jsx(W,{children:"Loading..."});return a.jsxs(Ea,{ref:A,className:wa,width:o,height:S,aspectRatio:h,...Ia,children:[Ga&&a.jsx(z,{src:e,alt:s,objectFit:d,objectPosition:x,fadeIn:ja,isLoaded:Ta,onLoad:Ba,onError:ka,loading:R}),$a&&Fa(),Sa&&Ra()]})};try{i.displayName="Image",i.__docgenInfo={description:"",displayName:"Image",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},aspectRatio:{defaultValue:null,description:"",name:"aspectRatio",required:!1,type:{name:"string"}},objectFit:{defaultValue:{value:"cover"},description:"",name:"objectFit",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"fill"'},{value:'"cover"'},{value:'"contain"'},{value:'"scale-down"'}]}},objectPosition:{defaultValue:null,description:"",name:"objectPosition",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"lazy"},description:"",name:"loading",required:!1,type:{name:"enum",value:[{value:'"lazy"'},{value:'"eager"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"ReactNode"}},fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"ReactNode"}},showSkeleton:{defaultValue:{value:"true"},description:"",name:"showSkeleton",required:!1,type:{name:"boolean"}},fadeIn:{defaultValue:{value:"true"},description:"",name:"fadeIn",required:!1,type:{name:"boolean"}},onLoad:{defaultValue:null,description:"",name:"onLoad",required:!1,type:{name:"((event: SyntheticEvent<HTMLImageElement, Event>) => void)"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"((event: SyntheticEvent<HTMLImageElement, Event>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Ja={title:"UI/Image",component:i,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{objectFit:{control:{type:"select"},options:["cover","contain","fill","scale-down","none"]},loading:{control:{type:"select"},options:["lazy","eager"]},width:{control:{type:"text"}},height:{control:{type:"text"}},aspectRatio:{control:{type:"text"}}}},t={landscape:"https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",portrait:"https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=800&fit=crop",square:"https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=600&fit=crop",gaming:"https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=600&fit=crop",setup:"https://images.unsplash.com/photo-1586920740199-ccf64c8e57e0?w=800&h=600&fit=crop",broken:"https://broken-url-that-will-fail.jpg",fallback:"https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=400&h=400&fit=crop"},v={args:{src:t.gaming,alt:"Gaming setup with RGB lighting",width:"400px",height:"300px"}},f={render:()=>a.jsx(n,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:a.jsxs("div",{children:[a.jsx(r,{variant:"body",mb:"md",children:"Basic Image"}),a.jsx(i,{src:t.gaming,alt:"Gaming setup",width:"300px",height:"200px"})]})})},b={render:()=>a.jsxs(n,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[a.jsx(r,{variant:"body",mb:"md",children:"Object Fit Modes"}),a.jsxs(n,{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"md",children:[a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Cover (Default)"}),a.jsx(i,{src:t.landscape,alt:"Gaming landscape",width:"200px",height:"150px",objectFit:"cover"})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Contain"}),a.jsx(i,{src:t.landscape,alt:"Gaming landscape",width:"200px",height:"150px",objectFit:"contain"})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Fill"}),a.jsx(i,{src:t.landscape,alt:"Gaming landscape",width:"200px",height:"150px",objectFit:"fill"})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Scale Down"}),a.jsx(i,{src:t.landscape,alt:"Gaming landscape",width:"200px",height:"150px",objectFit:"scale-down"})]})]})]})},j={render:()=>a.jsxs(n,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[a.jsx(r,{variant:"body",mb:"md",children:"Different Aspect Ratios"}),a.jsxs(n,{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"md",children:[a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"16:9"}),a.jsx(i,{src:t.gaming,alt:"Gaming setup",width:"240px",aspectRatio:"16/9"})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"4:3"}),a.jsx(i,{src:t.gaming,alt:"Gaming setup",width:"240px",aspectRatio:"4/3"})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"1:1 (Square)"}),a.jsx(i,{src:t.square,alt:"Gaming controller",width:"200px",aspectRatio:"1/1"})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"3:4 (Portrait)"}),a.jsx(i,{src:t.portrait,alt:"Gaming portrait",width:"150px",aspectRatio:"3/4"})]})]})]})},w={render:()=>a.jsxs(n,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[a.jsx(r,{variant:"body",mb:"md",children:"Loading and Error States"}),a.jsxs(n,{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"md",children:[a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Default Skeleton Loading"}),a.jsx(i,{src:`${t.gaming}?delay=3000`,alt:"Gaming setup",width:"200px",height:"150px",showSkeleton:!0})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Custom Placeholder"}),a.jsx(i,{src:`${t.setup}?delay=2000`,alt:"Gaming setup",width:"200px",height:"150px",placeholder:a.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"🎮 Loading..."})})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Error with Default Fallback"}),a.jsx(i,{src:t.broken,alt:"Broken image",width:"200px",height:"150px"})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Error with Custom Fallback"}),a.jsx(i,{src:t.broken,alt:"Broken image",width:"200px",height:"150px",fallback:t.fallback})]})]})]})},I={render:()=>a.jsxs(n,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[a.jsx(r,{variant:"body",mb:"md",children:"Lazy Loading Demo"}),a.jsx(r,{variant:"small",color:"gray",mb:"lg",children:"Scroll down to see images load as they come into view"}),Array.from({length:10},(e,s)=>a.jsxs(n,{mb:"lg",children:[a.jsxs(r,{variant:"small",mb:"sm",color:"gray",children:["Image ",s+1," (Lazy Loaded)"]}),a.jsx(i,{src:`${t.gaming}?random=${s}`,alt:`Gaming setup ${s+1}`,width:"100%",height:"200px",loading:"lazy",style:{maxWidth:"500px"}})]},s))]})},T={render:()=>a.jsxs(n,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[a.jsx(r,{variant:"body",mb:"md",children:"Animation Effects"}),a.jsxs(n,{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"md",children:[a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Fade In Animation"}),a.jsx(i,{src:t.gaming,alt:"Gaming setup",width:"200px",height:"150px",fadeIn:!0})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"No Animation"}),a.jsx(i,{src:t.setup,alt:"Gaming setup",width:"200px",height:"150px",fadeIn:!1})]})]})]})},B={render:()=>a.jsxs(n,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[a.jsx(r,{variant:"body",mb:"md",children:"Responsive Images"}),a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Full Width Responsive"}),a.jsx(i,{src:t.gaming,alt:"Gaming setup",width:"100%",aspectRatio:"16/9",style:{maxWidth:"800px"}})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Responsive Grid"}),a.jsx(n,{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))",gap:"md",children:[1,2,3,4,5,6].map(e=>a.jsx(i,{src:`${t.square}?random=${e}`,alt:`Gaming image ${e}`,width:"100%",aspectRatio:"1/1"},e))})]})]})},k={render:()=>a.jsxs(n,{display:"flex",flexDirection:"column",gap:"xl",p:"md",children:[a.jsxs("div",{children:[a.jsx(r,{variant:"h3",mb:"lg",children:"Gaming Store Cards"}),a.jsx(n,{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"md",children:[{title:"Cyberpunk 2077",price:"$59.99",image:t.gaming},{title:"The Witcher 3",price:"$39.99",image:t.landscape},{title:"Valorant",price:"Free",image:t.setup}].map((e,s)=>a.jsxs(n,{style:{backgroundColor:"#1a1a1a",borderRadius:"12px",overflow:"hidden"},children:[a.jsx(i,{src:e.image,alt:e.title,width:"100%",aspectRatio:"16/9",objectFit:"cover"}),a.jsxs(n,{p:"md",children:[a.jsx(r,{variant:"body",mb:"xs",children:e.title}),a.jsx(r,{variant:"small",color:"primary",children:e.price})]})]},s))})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"h3",mb:"lg",children:"User Profiles"}),a.jsx(n,{display:"flex",flexDirection:"column",gap:"md",maxWidth:"400px",children:[{name:"PlayerOne",status:"Online",avatar:t.square},{name:"GamerTwo",status:"Away",avatar:t.portrait},{name:"ProGamer",status:"In Game",avatar:t.fallback}].map((e,s)=>a.jsxs(n,{display:"flex",alignItems:"center",gap:"md",p:"md",style:{backgroundColor:"#1a1a1a",borderRadius:"8px"},children:[a.jsx(i,{src:e.avatar,alt:`${e.name} avatar`,width:"48px",height:"48px",objectFit:"cover",style:{borderRadius:"50%"}}),a.jsxs(n,{flex:"1",children:[a.jsx(r,{variant:"body",children:e.name}),a.jsx(r,{variant:"small",color:"gray",children:e.status})]})]},s))})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"h3",mb:"lg",children:"Hero Banner"}),a.jsxs(n,{position:"relative",style:{maxWidth:"800px"},children:[a.jsx(i,{src:t.gaming,alt:"Gaming banner",width:"100%",aspectRatio:"21/9",objectFit:"cover"}),a.jsx(n,{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",style:{background:"linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6))",color:"white",textAlign:"center"},children:a.jsxs("div",{children:[a.jsx(r,{variant:"h2",mb:"md",children:"Welcome to RSPWN Gaming"}),a.jsx(r,{variant:"body",children:"The ultimate gaming experience awaits"})]})})]})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"h3",mb:"lg",children:"Screenshot Gallery"}),a.jsx(n,{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"sm",children:Array.from({length:8},(e,s)=>a.jsx(i,{src:`${t.landscape}?gallery=${s}`,alt:`Screenshot ${s+1}`,width:"100%",aspectRatio:"16/9",objectFit:"cover",style:{cursor:"pointer"}},s))})]})]})},G={render:()=>a.jsxs(n,{display:"flex",flexDirection:"column",gap:"lg",p:"md",maxWidth:"500px",children:[a.jsxs("div",{children:[a.jsx(r,{variant:"body",mb:"md",children:"Accessibility Features"}),a.jsx(i,{src:t.gaming,alt:"High-end gaming setup with RGB mechanical keyboard, gaming mouse, and dual monitor display showing a competitive esports game",width:"100%",height:"200px"}),a.jsx(r,{variant:"small",color:"gray",mt:"sm",children:"This image uses descriptive alt text for screen readers and proper semantic HTML structure."})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"body",mb:"md",children:"Error Handling"}),a.jsx(i,{src:t.broken,alt:"Gaming equipment showcase - currently unavailable",width:"100%",height:"150px",fallback:a.jsx(n,{textAlign:"center",p:"md",children:a.jsx(r,{variant:"small",color:"gray",children:"🎮 Image not available"})})}),a.jsx(r,{variant:"small",color:"gray",mt:"sm",children:"When images fail to load, meaningful fallbacks are provided with appropriate alternative text."})]})]})},$={args:{src:t.gaming,alt:"Gaming setup playground",width:"400px",height:"300px",objectFit:"cover",loading:"eager",showSkeleton:!0,fadeIn:!0},render:e=>a.jsx(n,{display:"flex",justifyContent:"center",p:"md",children:a.jsx(i,{...e})})};var P,_,O;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    src: sampleImages.gaming,
    alt: 'Gaming setup with RGB lighting',
    width: '400px',
    height: '300px'
  }
}`,...(O=(_=v.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var H,N,M;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="body" mb="md">Basic Image</Typography>\r
        <Image src={sampleImages.gaming} alt="Gaming setup" width="300px" height="200px" />\r
      </div>\r
    </Box>
}`,...(M=(N=f.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var U,J,K;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <Typography variant="body" mb="md">Object Fit Modes</Typography>\r
      <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="md">\r
        <div>\r
          <Typography variant="small" mb="sm" color="gray">Cover (Default)</Typography>\r
          <Image src={sampleImages.landscape} alt="Gaming landscape" width="200px" height="150px" objectFit="cover" />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="small" mb="sm" color="gray">Contain</Typography>\r
          <Image src={sampleImages.landscape} alt="Gaming landscape" width="200px" height="150px" objectFit="contain" />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="small" mb="sm" color="gray">Fill</Typography>\r
          <Image src={sampleImages.landscape} alt="Gaming landscape" width="200px" height="150px" objectFit="fill" />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="small" mb="sm" color="gray">Scale Down</Typography>\r
          <Image src={sampleImages.landscape} alt="Gaming landscape" width="200px" height="150px" objectFit="scale-down" />\r
        </div>\r
      </Box>\r
    </Box>
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <Typography variant="body" mb="md">Different Aspect Ratios</Typography>\r
      <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="md">\r
        <div>\r
          <Typography variant="small" mb="sm" color="gray">16:9</Typography>\r
          <Image src={sampleImages.gaming} alt="Gaming setup" width="240px" aspectRatio="16/9" />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="small" mb="sm" color="gray">4:3</Typography>\r
          <Image src={sampleImages.gaming} alt="Gaming setup" width="240px" aspectRatio="4/3" />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="small" mb="sm" color="gray">1:1 (Square)</Typography>\r
          <Image src={sampleImages.square} alt="Gaming controller" width="200px" aspectRatio="1/1" />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="small" mb="sm" color="gray">3:4 (Portrait)</Typography>\r
          <Image src={sampleImages.portrait} alt="Gaming portrait" width="150px" aspectRatio="3/4" />\r
        </div>\r
      </Box>\r
    </Box>
}`,...(Y=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,aa,ea;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <Typography variant="body" mb="md">Loading and Error States</Typography>\r
      <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="md">\r
        <div>\r
          <Typography variant="small" mb="sm" color="gray">Default Skeleton Loading</Typography>\r
          <Image src={\`\${sampleImages.gaming}?delay=3000\`} // Simulated slow loading
        alt="Gaming setup" width="200px" height="150px" showSkeleton />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="small" mb="sm" color="gray">Custom Placeholder</Typography>\r
          <Image src={\`\${sampleImages.setup}?delay=2000\`} alt="Gaming setup" width="200px" height="150px" placeholder={<div style={{
          padding: '20px',
          textAlign: 'center'
        }}>🎮 Loading...</div>} />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="small" mb="sm" color="gray">Error with Default Fallback</Typography>\r
          <Image src={sampleImages.broken} alt="Broken image" width="200px" height="150px" />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="small" mb="sm" color="gray">Error with Custom Fallback</Typography>\r
          <Image src={sampleImages.broken} alt="Broken image" width="200px" height="150px" fallback={sampleImages.fallback} />\r
        </div>\r
      </Box>\r
    </Box>
}`,...(ea=(aa=w.parameters)==null?void 0:aa.docs)==null?void 0:ea.source}}};var ra,ta,ia;I.parameters={...I.parameters,docs:{...(ra=I.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <Typography variant="body" mb="md">Lazy Loading Demo</Typography>\r
      <Typography variant="small" color="gray" mb="lg">\r
        Scroll down to see images load as they come into view\r
      </Typography>\r
      \r
      {Array.from({
      length: 10
    }, (_, index) => <Box key={index} mb="lg">\r
          <Typography variant="small" mb="sm" color="gray">\r
            Image {index + 1} (Lazy Loaded)\r
          </Typography>\r
          <Image src={\`\${sampleImages.gaming}?random=\${index}\`} alt={\`Gaming setup \${index + 1}\`} width="100%" height="200px" loading="lazy" style={{
        maxWidth: '500px'
      }} />\r
        </Box>)}\r
    </Box>
}`,...(ia=(ta=I.parameters)==null?void 0:ta.docs)==null?void 0:ia.source}}};var na,sa,oa;T.parameters={...T.parameters,docs:{...(na=T.parameters)==null?void 0:na.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <Typography variant="body" mb="md">Animation Effects</Typography>\r
      <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="md">\r
        <div>\r
          <Typography variant="small" mb="sm" color="gray">Fade In Animation</Typography>\r
          <Image src={sampleImages.gaming} alt="Gaming setup" width="200px" height="150px" fadeIn />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="small" mb="sm" color="gray">No Animation</Typography>\r
          <Image src={sampleImages.setup} alt="Gaming setup" width="200px" height="150px" fadeIn={false} />\r
        </div>\r
      </Box>\r
    </Box>
}`,...(oa=(sa=T.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};var la,pa,da;B.parameters={...B.parameters,docs:{...(la=B.parameters)==null?void 0:la.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <Typography variant="body" mb="md">Responsive Images</Typography>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Full Width Responsive</Typography>\r
        <Image src={sampleImages.gaming} alt="Gaming setup" width="100%" aspectRatio="16/9" style={{
        maxWidth: '800px'
      }} />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Responsive Grid</Typography>\r
        <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap="md">\r
          {[1, 2, 3, 4, 5, 6].map(num => <Image key={num} src={\`\${sampleImages.square}?random=\${num}\`} alt={\`Gaming image \${num}\`} width="100%" aspectRatio="1/1" />)}\r
        </Box>\r
      </div>\r
    </Box>
}`,...(da=(pa=B.parameters)==null?void 0:pa.docs)==null?void 0:da.source}}};var ma,ca,ga;k.parameters={...k.parameters,docs:{...(ma=k.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="xl" p="md">\r
      <div>\r
        <Typography variant="h3" mb="lg">Gaming Store Cards</Typography>\r
        <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(280px, 1fr))" gap="md">\r
          {[{
          title: 'Cyberpunk 2077',
          price: '$59.99',
          image: sampleImages.gaming
        }, {
          title: 'The Witcher 3',
          price: '$39.99',
          image: sampleImages.landscape
        }, {
          title: 'Valorant',
          price: 'Free',
          image: sampleImages.setup
        }].map((game, index) => <Box key={index} style={{
          backgroundColor: '#1a1a1a',
          borderRadius: '12px',
          overflow: 'hidden'
        }}>\r
              <Image src={game.image} alt={game.title} width="100%" aspectRatio="16/9" objectFit="cover" />\r
              <Box p="md">\r
                <Typography variant="body" mb="xs">{game.title}</Typography>\r
                <Typography variant="small" color="primary">{game.price}</Typography>\r
              </Box>\r
            </Box>)}\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="lg">User Profiles</Typography>\r
        <Box display="flex" flexDirection="column" gap="md" maxWidth="400px">\r
          {[{
          name: 'PlayerOne',
          status: 'Online',
          avatar: sampleImages.square
        }, {
          name: 'GamerTwo',
          status: 'Away',
          avatar: sampleImages.portrait
        }, {
          name: 'ProGamer',
          status: 'In Game',
          avatar: sampleImages.fallback
        }].map((user, index) => <Box key={index} display="flex" alignItems="center" gap="md" p="md" style={{
          backgroundColor: '#1a1a1a',
          borderRadius: '8px'
        }}>\r
              <Image src={user.avatar} alt={\`\${user.name} avatar\`} width="48px" height="48px" objectFit="cover" style={{
            borderRadius: '50%'
          }} />\r
              <Box flex="1">\r
                <Typography variant="body">{user.name}</Typography>\r
                <Typography variant="small" color="gray">{user.status}</Typography>\r
              </Box>\r
            </Box>)}\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="lg">Hero Banner</Typography>\r
        <Box position="relative" style={{
        maxWidth: '800px'
      }}>\r
          <Image src={sampleImages.gaming} alt="Gaming banner" width="100%" aspectRatio="21/9" objectFit="cover" />\r
          <Box position="absolute" top="0" left="0" right="0" bottom="0" display="flex" alignItems="center" justifyContent="center" style={{
          background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6))',
          color: 'white',
          textAlign: 'center'
        }}>\r
            <div>\r
              <Typography variant="h2" mb="md">Welcome to RSPWN Gaming</Typography>\r
              <Typography variant="body">The ultimate gaming experience awaits</Typography>\r
            </div>\r
          </Box>\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="lg">Screenshot Gallery</Typography>\r
        <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap="sm">\r
          {Array.from({
          length: 8
        }, (_, index) => <Image key={index} src={\`\${sampleImages.landscape}?gallery=\${index}\`} alt={\`Screenshot \${index + 1}\`} width="100%" aspectRatio="16/9" objectFit="cover" style={{
          cursor: 'pointer'
        }} />)}\r
        </Box>\r
      </div>\r
    </Box>
}`,...(ga=(ca=k.parameters)==null?void 0:ca.docs)==null?void 0:ga.source}}};var ha,xa,ya;G.parameters={...G.parameters,docs:{...(ha=G.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">\r
      <div>\r
        <Typography variant="body" mb="md">Accessibility Features</Typography>\r
        <Image src={sampleImages.gaming} alt="High-end gaming setup with RGB mechanical keyboard, gaming mouse, and dual monitor display showing a competitive esports game" width="100%" height="200px" />\r
        <Typography variant="small" color="gray" mt="sm">\r
          This image uses descriptive alt text for screen readers and proper semantic HTML structure.\r
        </Typography>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="md">Error Handling</Typography>\r
        <Image src={sampleImages.broken} alt="Gaming equipment showcase - currently unavailable" width="100%" height="150px" fallback={<Box textAlign="center" p="md">\r
              <Typography variant="small" color="gray">\r
                🎮 Image not available\r
              </Typography>\r
            </Box>} />\r
        <Typography variant="small" color="gray" mt="sm">\r
          When images fail to load, meaningful fallbacks are provided with appropriate alternative text.\r
        </Typography>\r
      </div>\r
    </Box>
}`,...(ya=(xa=G.parameters)==null?void 0:xa.docs)==null?void 0:ya.source}}};var ua,va,fa;$.parameters={...$.parameters,docs:{...(ua=$.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  args: {
    src: sampleImages.gaming,
    alt: 'Gaming setup playground',
    width: '400px',
    height: '300px',
    objectFit: 'cover',
    loading: 'eager',
    showSkeleton: true,
    fadeIn: true
  },
  render: args => <Box display="flex" justifyContent="center" p="md">\r
      <Image {...args} />\r
    </Box>
}`,...(fa=(va=$.parameters)==null?void 0:va.docs)==null?void 0:fa.source}}};const Ka=["Default","BasicUsage","ObjectFitModes","AspectRatios","LoadingStates","LazyLoading","AnimationEffects","ResponsiveImages","RealWorldExamples","AccessibilityDemo","Playground"];export{G as AccessibilityDemo,T as AnimationEffects,j as AspectRatios,f as BasicUsage,v as Default,I as LazyLoading,w as LoadingStates,b as ObjectFitModes,$ as Playground,k as RealWorldExamples,B as ResponsiveImages,Ka as __namedExportsOrder,Ja as default};
