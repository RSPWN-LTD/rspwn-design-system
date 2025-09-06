import{j as r}from"./jsx-runtime-CDt2p4po.js";import{d as c,l as t,m as D}from"./styled-components.browser.esm-Byilhkxn.js";import{B as n}from"./Box-C_K3nAud.js";import{T as s}from"./Typography-CzMVeEUw.js";import{r as k}from"./index-GiUgBvb1.js";import"./propFilters-BGSNtaQt.js";const I=e=>{switch(e){case"success":return"#22c55e";case"warning":return"#f59e0b";case"error":return"#ef4444";case"purple":return t`${({theme:l})=>l.colors.innovation.secondaryPurple}`;case"blue":default:return t`${({theme:l})=>l.colors.innovation.primaryBlue}`}},xr=e=>{switch(e){case"sm":return"4px";case"lg":return"12px";default:return"8px"}},hr=e=>{switch(e){case"sm":return{width:"32px",strokeWidth:"2"};case"lg":return{width:"64px",strokeWidth:"4"};default:return{width:"48px",strokeWidth:"3"}}},yr=D`
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
`,vr=D`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124;
  }
`,fr=D`
  100% {
    transform: rotate(360deg);
  }
`,br=c.div`
  position: relative;
  width: 100%;
  height: ${({size:e})=>xr(e)};
  background-color: ${({theme:e})=>e.colors.gray.dark};
  border-radius: ${({theme:e})=>e.radius.full};
  overflow: hidden;
`,Pr=c.div`
  height: 100%;
  border-radius: ${({theme:e})=>e.radius.full};
  transition: width ${({theme:e})=>e.durations.normal} ${({theme:e})=>e.easings.easeOut};
  
  ${({indeterminate:e,color:l,value:d,max:o})=>e?t`
          position: absolute;
          width: 35%;
          background: linear-gradient(
            90deg,
            transparent,
            ${I(l)},
            transparent
          );
          animation: ${yr} 2s ease-in-out infinite;
        `:t`
          width: ${d/o*100}%;
          background-color: ${I(l)};
        `}
`,jr=c.div`
  position: relative;
  display: inline-block;
`,wr=c.svg`
  ${({indeterminate:e})=>e&&t`
      animation: ${fr} 2s linear infinite;
    `}
`,Tr=c.circle`
  fill: none;
  stroke: ${({theme:e})=>e.colors.gray.dark};
`,Br=c.circle`
  fill: none;
  stroke: ${({color:e})=>I(e)};
  stroke-linecap: round;
  transition: stroke-dashoffset ${({theme:e})=>e.durations.normal} ${({theme:e})=>e.easings.easeOut};
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  
  ${({indeterminate:e,circumference:l,value:d,max:o})=>e?t`
          animation: ${vr} 1.4s ease-in-out infinite;
        `:t`
          stroke-dasharray: ${l};
          stroke-dashoffset: ${l-d/o*l};
        `}
`,Ir=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  font-family: ${({theme:e})=>e.typography.fonts.body};
  font-size: ${({theme:e})=>e.typography.fontSizes.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeights.medium};
  color: ${({theme:e})=>e.colors.foundation.white};
`,Dr=c.span`
  color: ${({theme:e})=>e.colors.gray.light};
`,Lr=c.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: ${({theme:e})=>e.typography.fonts.body};
  font-weight: ${({theme:e})=>e.typography.fontWeights.medium};
  color: ${({theme:e})=>e.colors.foundation.white};
  
  ${({size:e})=>{switch(e){case"sm":return t`
          font-size: ${({theme:l})=>l.typography.fontSizes.xs};
        `;case"lg":return t`
          font-size: ${({theme:l})=>l.typography.fontSizes.base};
        `;default:return t`
          font-size: ${({theme:l})=>l.typography.fontSizes.sm};
        `}}}
`,a=({value:e=0,max:l=100,variant:d="linear",size:o="md",indeterminate:i=!1,color:L="blue",showLabel:z=!1,showPercentage:u=!1,label:g,className:S,"aria-label":$,...C})=>{const W=i?0:Math.round(e/l*100),p=hr(o),B=(parseInt(p.width)-parseInt(p.strokeWidth))/2,mr=B*2*Math.PI;return d==="circular"?r.jsxs(jr,{className:S,size:o,role:"progressbar","aria-valuenow":i?void 0:e,"aria-valuemin":0,"aria-valuemax":l,"aria-label":$||g,...C,children:[r.jsxs(wr,{width:p.width,height:p.width,indeterminate:i,children:[r.jsx(Tr,{cx:"50%",cy:"50%",r:B,strokeWidth:p.strokeWidth}),r.jsx(Br,{cx:"50%",cy:"50%",r:B,strokeWidth:p.strokeWidth,value:e,max:l,color:L,indeterminate:i,circumference:mr})]}),(u||g)&&!i&&r.jsxs(Lr,{size:o,children:[g&&r.jsx("div",{children:g}),u&&r.jsxs("div",{children:[W,"%"]})]})]}):r.jsxs("div",{className:S,children:[(z||u)&&(g||u)&&r.jsxs(Ir,{children:[z&&g&&r.jsx("span",{children:g}),u&&!i&&r.jsxs(Dr,{children:[W,"%"]})]}),r.jsx(br,{size:o,role:"progressbar","aria-valuenow":i?void 0:e,"aria-valuemin":0,"aria-valuemax":l,"aria-label":$||g,...C,children:r.jsx(Pr,{value:e,max:l,color:L,indeterminate:i})})]})};try{a.displayName="Progress",a.__docgenInfo={description:"",displayName:"Progress",props:{value:{defaultValue:{value:"0"},description:"",name:"value",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"",name:"max",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"linear"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circular"'},{value:'"linear"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},indeterminate:{defaultValue:{value:"false"},description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"blue"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"blue"'},{value:'"purple"'},{value:'"success"'},{value:'"warning"'}]}},showLabel:{defaultValue:{value:"false"},description:"",name:"showLabel",required:!1,type:{name:"boolean"}},showPercentage:{defaultValue:{value:"false"},description:"",name:"showPercentage",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}}}}}catch{}const Vr={title:"UI/Progress",component:a,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["linear","circular"]},size:{control:{type:"select"},options:["sm","md","lg"]},color:{control:{type:"select"},options:["blue","success","warning","error","purple"]}}},m={args:{value:50,max:100,variant:"linear",size:"md",color:"blue"}},x={render:()=>r.jsxs(n,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[r.jsxs("div",{children:[r.jsx(s,{variant:"body",mb:"sm",children:"Basic Progress"}),r.jsx(a,{value:25})]}),r.jsxs("div",{children:[r.jsx(s,{variant:"body",mb:"sm",children:"With Label"}),r.jsx(a,{value:50,showLabel:!0,label:"Download Progress"})]}),r.jsxs("div",{children:[r.jsx(s,{variant:"body",mb:"sm",children:"With Percentage"}),r.jsx(a,{value:75,showPercentage:!0})]}),r.jsxs("div",{children:[r.jsx(s,{variant:"body",mb:"sm",children:"With Label and Percentage"}),r.jsx(a,{value:60,showLabel:!0,showPercentage:!0,label:"Upload Progress"})]})]})},h={render:()=>r.jsxs(n,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[r.jsxs("div",{children:[r.jsx(s,{variant:"small",mb:"sm",color:"gray",children:"Small"}),r.jsx(a,{value:40,size:"sm",showPercentage:!0})]}),r.jsxs("div",{children:[r.jsx(s,{variant:"small",mb:"sm",color:"gray",children:"Medium"}),r.jsx(a,{value:60,size:"md",showPercentage:!0})]}),r.jsxs("div",{children:[r.jsx(s,{variant:"small",mb:"sm",color:"gray",children:"Large"}),r.jsx(a,{value:80,size:"lg",showPercentage:!0})]})]})},y={render:()=>r.jsxs(n,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[r.jsxs("div",{children:[r.jsx(s,{variant:"small",mb:"sm",color:"gray",children:"Blue"}),r.jsx(a,{value:50,color:"blue",showPercentage:!0})]}),r.jsxs("div",{children:[r.jsx(s,{variant:"small",mb:"sm",color:"gray",children:"Success"}),r.jsx(a,{value:100,color:"success",showPercentage:!0})]}),r.jsxs("div",{children:[r.jsx(s,{variant:"small",mb:"sm",color:"gray",children:"Warning"}),r.jsx(a,{value:70,color:"warning",showPercentage:!0})]}),r.jsxs("div",{children:[r.jsx(s,{variant:"small",mb:"sm",color:"gray",children:"Error"}),r.jsx(a,{value:30,color:"error",showPercentage:!0})]}),r.jsxs("div",{children:[r.jsx(s,{variant:"small",mb:"sm",color:"gray",children:"Purple"}),r.jsx(a,{value:85,color:"purple",showPercentage:!0})]})]})},v={render:()=>r.jsxs(n,{display:"flex",gap:"lg",alignItems:"center",flexWrap:"wrap",p:"md",children:[r.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[r.jsx(a,{value:25,variant:"circular"}),r.jsx(s,{variant:"small",color:"gray",children:"Basic"})]}),r.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[r.jsx(a,{value:50,variant:"circular",showPercentage:!0}),r.jsx(s,{variant:"small",color:"gray",children:"With Percentage"})]}),r.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[r.jsx(a,{value:75,variant:"circular",label:"Tasks"}),r.jsx(s,{variant:"small",color:"gray",children:"With Label"})]}),r.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[r.jsx(a,{value:90,variant:"circular",showPercentage:!0,label:"Complete"}),r.jsx(s,{variant:"small",color:"gray",children:"Label + Percentage"})]})]})},f={render:()=>r.jsxs(n,{display:"flex",gap:"lg",alignItems:"center",flexWrap:"wrap",p:"md",children:[r.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[r.jsx(a,{value:60,variant:"circular",size:"sm",showPercentage:!0}),r.jsx(s,{variant:"small",color:"gray",children:"Small"})]}),r.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[r.jsx(a,{value:60,variant:"circular",size:"md",showPercentage:!0}),r.jsx(s,{variant:"small",color:"gray",children:"Medium"})]}),r.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[r.jsx(a,{value:60,variant:"circular",size:"lg",showPercentage:!0}),r.jsx(s,{variant:"small",color:"gray",children:"Large"})]})]})},b={render:()=>r.jsxs(n,{display:"flex",gap:"md",alignItems:"center",flexWrap:"wrap",p:"md",children:[r.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[r.jsx(a,{value:65,variant:"circular",color:"blue",showPercentage:!0}),r.jsx(s,{variant:"small",color:"gray",children:"Blue"})]}),r.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[r.jsx(a,{value:100,variant:"circular",color:"success",showPercentage:!0}),r.jsx(s,{variant:"small",color:"gray",children:"Success"})]}),r.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[r.jsx(a,{value:75,variant:"circular",color:"warning",showPercentage:!0}),r.jsx(s,{variant:"small",color:"gray",children:"Warning"})]}),r.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[r.jsx(a,{value:25,variant:"circular",color:"error",showPercentage:!0}),r.jsx(s,{variant:"small",color:"gray",children:"Error"})]}),r.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[r.jsx(a,{value:85,variant:"circular",color:"purple",showPercentage:!0}),r.jsx(s,{variant:"small",color:"gray",children:"Purple"})]})]})},P={render:()=>r.jsxs(n,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[r.jsxs("div",{children:[r.jsx(s,{variant:"body",mb:"md",children:"Linear Indeterminate"}),r.jsxs(n,{display:"flex",flexDirection:"column",gap:"md",children:[r.jsx(a,{indeterminate:!0,size:"sm",color:"blue"}),r.jsx(a,{indeterminate:!0,size:"md",color:"success"}),r.jsx(a,{indeterminate:!0,size:"lg",color:"warning"})]})]}),r.jsxs("div",{children:[r.jsx(s,{variant:"body",mb:"md",children:"Circular Indeterminate"}),r.jsxs(n,{display:"flex",gap:"md",alignItems:"center",children:[r.jsx(a,{variant:"circular",indeterminate:!0,size:"sm",color:"blue"}),r.jsx(a,{variant:"circular",indeterminate:!0,size:"md",color:"success"}),r.jsx(a,{variant:"circular",indeterminate:!0,size:"lg",color:"error"})]})]})]})},j={render:()=>{const[e,l]=k.useState(0);return k.useEffect(()=>{const d=setInterval(()=>{l(o=>{if(o===100)return 0;const i=Math.random()*10;return Math.min(o+i,100)})},500);return()=>{clearInterval(d)}},[]),r.jsxs(n,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[r.jsxs("div",{children:[r.jsx(s,{variant:"body",mb:"md",children:"Animated Linear Progress"}),r.jsx(a,{value:e,showLabel:!0,showPercentage:!0,label:"Loading...",color:e<30?"error":e<70?"warning":"success"})]}),r.jsxs("div",{children:[r.jsx(s,{variant:"body",mb:"md",children:"Animated Circular Progress"}),r.jsxs(n,{display:"flex",gap:"md",alignItems:"center",children:[r.jsx(a,{variant:"circular",value:e,showPercentage:!0,color:e<30?"error":e<70?"warning":"success"}),r.jsxs(s,{variant:"body",children:["Status: ",e<30?"Starting...":e<70?"In Progress...":"Almost Done!"]})]})]})]})}},w={render:()=>r.jsxs(n,{display:"flex",flexDirection:"column",gap:"xl",p:"md",children:[r.jsxs("div",{children:[r.jsx(s,{variant:"h3",mb:"lg",children:"File Upload Progress"}),r.jsxs(n,{display:"flex",flexDirection:"column",gap:"md",children:[r.jsx(a,{value:100,showLabel:!0,showPercentage:!0,label:"document.pdf",color:"success"}),r.jsx(a,{value:65,showLabel:!0,showPercentage:!0,label:"image.jpg",color:"blue"}),r.jsx(a,{value:15,showLabel:!0,showPercentage:!0,label:"video.mp4",color:"warning"}),r.jsx(a,{indeterminate:!0,showLabel:!0,label:"preparing upload...",color:"blue"})]})]}),r.jsxs("div",{children:[r.jsx(s,{variant:"h3",mb:"lg",children:"System Status"}),r.jsxs(n,{display:"flex",gap:"lg",alignItems:"center",flexWrap:"wrap",children:[r.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[r.jsx(a,{variant:"circular",value:85,showPercentage:!0,color:"success"}),r.jsx(s,{variant:"body",children:"CPU Usage"})]}),r.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[r.jsx(a,{variant:"circular",value:45,showPercentage:!0,color:"blue"}),r.jsx(s,{variant:"body",children:"Memory"})]}),r.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[r.jsx(a,{variant:"circular",value:92,showPercentage:!0,color:"warning"}),r.jsx(s,{variant:"body",children:"Storage"})]}),r.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"center",gap:"sm",children:[r.jsx(a,{variant:"circular",value:25,showPercentage:!0,color:"success"}),r.jsx(s,{variant:"body",children:"Network"})]})]})]}),r.jsxs("div",{children:[r.jsx(s,{variant:"h3",mb:"lg",children:"Task Completion"}),r.jsxs(n,{display:"flex",flexDirection:"column",gap:"md",children:[r.jsx(a,{value:100,showLabel:!0,showPercentage:!0,label:"Design System Components",color:"success",size:"lg"}),r.jsx(a,{value:70,showLabel:!0,showPercentage:!0,label:"Unit Tests",color:"blue",size:"lg"}),r.jsx(a,{value:40,showLabel:!0,showPercentage:!0,label:"Documentation",color:"warning",size:"lg"}),r.jsx(a,{value:10,showLabel:!0,showPercentage:!0,label:"Performance Optimization",color:"error",size:"lg"})]})]})]})},T={args:{value:50,max:100,variant:"linear",size:"md",indeterminate:!1,color:"blue",showLabel:!1,showPercentage:!1,label:"Progress"},render:e=>r.jsx(n,{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px",children:r.jsx(a,{...e})})};var V,M,q;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    value: 50,
    max: 100,
    variant: 'linear',
    size: 'md',
    color: 'blue'
  }
}`,...(q=(M=m.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var E,U,_;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="body" mb="sm">Basic Progress</Typography>\r
        <Progress value={25} />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">With Label</Typography>\r
        <Progress value={50} showLabel label="Download Progress" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">With Percentage</Typography>\r
        <Progress value={75} showPercentage />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">With Label and Percentage</Typography>\r
        <Progress value={60} showLabel showPercentage label="Upload Progress" />\r
      </div>\r
    </Box>
}`,...(_=(U=x.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var A,N,O;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Small</Typography>\r
        <Progress value={40} size="sm" showPercentage />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Medium</Typography>\r
        <Progress value={60} size="md" showPercentage />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Large</Typography>\r
        <Progress value={80} size="lg" showPercentage />\r
      </div>\r
    </Box>
}`,...(O=(N=h.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var R,F,H;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Blue</Typography>\r
        <Progress value={50} color="blue" showPercentage />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Success</Typography>\r
        <Progress value={100} color="success" showPercentage />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Warning</Typography>\r
        <Progress value={70} color="warning" showPercentage />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Error</Typography>\r
        <Progress value={30} color="error" showPercentage />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Purple</Typography>\r
        <Progress value={85} color="purple" showPercentage />\r
      </div>\r
    </Box>
}`,...(H=(F=y.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var G,J,K;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="lg" alignItems="center" flexWrap="wrap" p="md">\r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Progress value={25} variant="circular" />\r
        <Typography variant="small" color="gray">Basic</Typography>\r
      </Box>\r
      \r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Progress value={50} variant="circular" showPercentage />\r
        <Typography variant="small" color="gray">With Percentage</Typography>\r
      </Box>\r
      \r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Progress value={75} variant="circular" label="Tasks" />\r
        <Typography variant="small" color="gray">With Label</Typography>\r
      </Box>\r
      \r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Progress value={90} variant="circular" showPercentage label="Complete" />\r
        <Typography variant="small" color="gray">Label + Percentage</Typography>\r
      </Box>\r
    </Box>
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="lg" alignItems="center" flexWrap="wrap" p="md">\r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Progress value={60} variant="circular" size="sm" showPercentage />\r
        <Typography variant="small" color="gray">Small</Typography>\r
      </Box>\r
      \r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Progress value={60} variant="circular" size="md" showPercentage />\r
        <Typography variant="small" color="gray">Medium</Typography>\r
      </Box>\r
      \r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Progress value={60} variant="circular" size="lg" showPercentage />\r
        <Typography variant="small" color="gray">Large</Typography>\r
      </Box>\r
    </Box>
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,rr,er;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="md" alignItems="center" flexWrap="wrap" p="md">\r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Progress value={65} variant="circular" color="blue" showPercentage />\r
        <Typography variant="small" color="gray">Blue</Typography>\r
      </Box>\r
      \r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Progress value={100} variant="circular" color="success" showPercentage />\r
        <Typography variant="small" color="gray">Success</Typography>\r
      </Box>\r
      \r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Progress value={75} variant="circular" color="warning" showPercentage />\r
        <Typography variant="small" color="gray">Warning</Typography>\r
      </Box>\r
      \r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Progress value={25} variant="circular" color="error" showPercentage />\r
        <Typography variant="small" color="gray">Error</Typography>\r
      </Box>\r
      \r
      <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
        <Progress value={85} variant="circular" color="purple" showPercentage />\r
        <Typography variant="small" color="gray">Purple</Typography>\r
      </Box>\r
    </Box>
}`,...(er=(rr=b.parameters)==null?void 0:rr.docs)==null?void 0:er.source}}};var ar,sr,nr;P.parameters={...P.parameters,docs:{...(ar=P.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="body" mb="md">Linear Indeterminate</Typography>\r
        <Box display="flex" flexDirection="column" gap="md">\r
          <Progress indeterminate size="sm" color="blue" />\r
          <Progress indeterminate size="md" color="success" />\r
          <Progress indeterminate size="lg" color="warning" />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="md">Circular Indeterminate</Typography>\r
        <Box display="flex" gap="md" alignItems="center">\r
          <Progress variant="circular" indeterminate size="sm" color="blue" />\r
          <Progress variant="circular" indeterminate size="md" color="success" />\r
          <Progress variant="circular" indeterminate size="lg" color="error" />\r
        </Box>\r
      </div>\r
    </Box>
}`,...(nr=(sr=P.parameters)==null?void 0:sr.docs)==null?void 0:nr.source}}};var lr,or,ir;j.parameters={...j.parameters,docs:{...(lr=j.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress(oldProgress => {
          if (oldProgress === 100) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);
      return () => {
        clearInterval(timer);
      };
    }, []);
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="body" mb="md">Animated Linear Progress</Typography>\r
          <Progress value={progress} showLabel showPercentage label="Loading..." color={progress < 30 ? 'error' : progress < 70 ? 'warning' : 'success'} />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="md">Animated Circular Progress</Typography>\r
          <Box display="flex" gap="md" alignItems="center">\r
            <Progress variant="circular" value={progress} showPercentage color={progress < 30 ? 'error' : progress < 70 ? 'warning' : 'success'} />\r
            <Typography variant="body">\r
              Status: {progress < 30 ? 'Starting...' : progress < 70 ? 'In Progress...' : 'Almost Done!'}\r
            </Typography>\r
          </Box>\r
        </div>\r
      </Box>;
  }
}`,...(ir=(or=j.parameters)==null?void 0:or.docs)==null?void 0:ir.source}}};var tr,cr,gr;w.parameters={...w.parameters,docs:{...(tr=w.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="xl" p="md">\r
      <div>\r
        <Typography variant="h3" mb="lg">File Upload Progress</Typography>\r
        <Box display="flex" flexDirection="column" gap="md">\r
          <Progress value={100} showLabel showPercentage label="document.pdf" color="success" />\r
          <Progress value={65} showLabel showPercentage label="image.jpg" color="blue" />\r
          <Progress value={15} showLabel showPercentage label="video.mp4" color="warning" />\r
          <Progress indeterminate showLabel label="preparing upload..." color="blue" />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="lg">System Status</Typography>\r
        <Box display="flex" gap="lg" alignItems="center" flexWrap="wrap">\r
          <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
            <Progress variant="circular" value={85} showPercentage color="success" />\r
            <Typography variant="body">CPU Usage</Typography>\r
          </Box>\r
          \r
          <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
            <Progress variant="circular" value={45} showPercentage color="blue" />\r
            <Typography variant="body">Memory</Typography>\r
          </Box>\r
          \r
          <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
            <Progress variant="circular" value={92} showPercentage color="warning" />\r
            <Typography variant="body">Storage</Typography>\r
          </Box>\r
          \r
          <Box display="flex" flexDirection="column" alignItems="center" gap="sm">\r
            <Progress variant="circular" value={25} showPercentage color="success" />\r
            <Typography variant="body">Network</Typography>\r
          </Box>\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="lg">Task Completion</Typography>\r
        <Box display="flex" flexDirection="column" gap="md">\r
          <Progress value={100} showLabel showPercentage label="Design System Components" color="success" size="lg" />\r
          <Progress value={70} showLabel showPercentage label="Unit Tests" color="blue" size="lg" />\r
          <Progress value={40} showLabel showPercentage label="Documentation" color="warning" size="lg" />\r
          <Progress value={10} showLabel showPercentage label="Performance Optimization" color="error" size="lg" />\r
        </Box>\r
      </div>\r
    </Box>
}`,...(gr=(cr=w.parameters)==null?void 0:cr.docs)==null?void 0:gr.source}}};var dr,pr,ur;T.parameters={...T.parameters,docs:{...(dr=T.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  args: {
    value: 50,
    max: 100,
    variant: 'linear',
    size: 'md',
    indeterminate: false,
    color: 'blue',
    showLabel: false,
    showPercentage: false,
    label: 'Progress'
  },
  render: args => <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">\r
      <Progress {...args} />\r
    </Box>
}`,...(ur=(pr=T.parameters)==null?void 0:pr.docs)==null?void 0:ur.source}}};const Mr=["Default","LinearVariants","LinearSizes","LinearColors","CircularVariants","CircularSizes","CircularColors","Indeterminate","AnimatedProgress","RealWorldExamples","Playground"];export{j as AnimatedProgress,b as CircularColors,f as CircularSizes,v as CircularVariants,m as Default,P as Indeterminate,y as LinearColors,h as LinearSizes,x as LinearVariants,T as Playground,w as RealWorldExamples,Mr as __namedExportsOrder,Vr as default};
