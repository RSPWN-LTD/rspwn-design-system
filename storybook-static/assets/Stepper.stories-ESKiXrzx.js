import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as S}from"./index-GiUgBvb1.js";import{l as p,d as y}from"./styled-components.browser.esm-Byilhkxn.js";import{B as a}from"./Box-D0rAd6Cs.js";import{T as n}from"./Typography-B2ZqsRPU.js";import{B as v}from"./Button-CmnvKrIY.js";const Ve=t=>{switch(t){case"sm":return p`
        .step-indicator {
          width: 24px;
          height: 24px;
          font-size: ${({theme:r})=>r.typography.fontSizes.xs};
        }
        
        .step-label {
          font-size: ${({theme:r})=>r.typography.fontSizes.xs};
        }
        
        .step-description {
          font-size: ${({theme:r})=>r.typography.fontSizes.xs};
        }
        
        .step-connector {
          height: 2px;
        }
        
        &[data-orientation="vertical"] .step-connector {
          width: 2px;
          min-height: 24px;
        }
      `;case"lg":return p`
        .step-indicator {
          width: 40px;
          height: 40px;
          font-size: ${({theme:r})=>r.typography.fontSizes.base};
        }
        
        .step-label {
          font-size: ${({theme:r})=>r.typography.fontSizes.base};
        }
        
        .step-description {
          font-size: ${({theme:r})=>r.typography.fontSizes.sm};
        }
        
        .step-connector {
          height: 4px;
        }
        
        &[data-orientation="vertical"] .step-connector {
          width: 4px;
          min-height: 32px;
        }
      `;default:return p`
        .step-indicator {
          width: 32px;
          height: 32px;
          font-size: ${({theme:r})=>r.typography.fontSizes.sm};
        }
        
        .step-label {
          font-size: ${({theme:r})=>r.typography.fontSizes.sm};
        }
        
        .step-description {
          font-size: ${({theme:r})=>r.typography.fontSizes.xs};
        }
        
        .step-connector {
          height: 3px;
        }
        
        &[data-orientation="vertical"] .step-connector {
          width: 3px;
          min-height: 28px;
        }
      `}},Pe=y.div`
  display: flex;
  flex-direction: ${({orientation:t})=>t==="vertical"?"column":"row"};
  align-items: ${({orientation:t,variant:r})=>t==="vertical"?"flex-start":r==="compact"?"center":"flex-start"};
  font-family: ${({theme:t})=>t.typography.fonts.body};
  
  ${({size:t})=>Ve(t)}
  
  ${({disabled:t})=>t&&p`
      opacity: 0.6;
      pointer-events: none;
    `}
`,Le=y.div`
  display: flex;
  flex-direction: ${({orientation:t})=>t==="vertical"?"row":"column"};
  align-items: ${({orientation:t,variant:r})=>t==="vertical"?"flex-start":"center"};
  flex: ${({orientation:t})=>t==="horizontal"?1:"none"};
  
  ${({orientation:t})=>t==="vertical"&&p`
      width: 100%;
      
      &:not(:last-child) {
        margin-bottom: ${({theme:r})=>r.spacing[2]};
      }
    `}
`,We=y.div`
  display: flex;
  align-items: center;
  flex-direction: ${({orientation:t})=>t==="vertical"?"column":"row"};
`,Me=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid;
  position: relative;
  transition: all ${({theme:t})=>t.durations.fast} ${({theme:t})=>t.easings.easeInOut};
  cursor: ${({clickable:t})=>t?"pointer":"default"};
  font-weight: ${({theme:t})=>t.typography.fontWeights.medium};
  
  ${({status:t,theme:r,variant:o})=>{switch(t){case"completed":return p`
          background-color: ${r.colors.innovation.primaryBlue};
          border-color: ${r.colors.innovation.primaryBlue};
          color: ${r.colors.foundation.white};
        `;case"active":return p`
          background-color: ${o==="dots"?r.colors.innovation.primaryBlue:r.colors.foundation.black};
          border-color: ${r.colors.innovation.primaryBlue};
          color: ${r.colors.foundation.white};
          box-shadow: 0 0 0 4px rgba(74, 158, 255, 0.2);
        `;case"error":return p`
          background-color: ${r.colors.foundation.black};
          border-color: ${r.colors.semantic.error};
          color: ${r.colors.semantic.error};
        `;default:return p`
          background-color: ${r.colors.foundation.black};
          border-color: ${r.colors.gray.light};
          color: ${r.colors.gray.light};
        `}}}
  
  ${({clickable:t,theme:r})=>t&&p`
      &:hover {
        border-color: ${r.colors.innovation.primaryBlue};
        transform: scale(1.05);
      }
      
      &:focus {
        outline: 2px solid ${r.colors.innovation.primaryBlue};
        outline-offset: 2px;
      }
    `}
  
  ${({variant:t})=>t==="dots"&&p`
      border: none;
      width: 12px !important;
      height: 12px !important;
    `}
`,Ae=y.div`
  background-color: ${({status:t,theme:r})=>t==="completed"?r.colors.innovation.primaryBlue:r.colors.gray.light};
  transition: background-color ${({theme:t})=>t.durations.fast} ${({theme:t})=>t.easings.easeInOut};
  
  ${({orientation:t})=>t==="horizontal"?p`
          flex: 1;
          margin: 0 ${({theme:r})=>r.spacing[2]};
        `:p`
          margin: ${({theme:r})=>r.spacing[2]} 0;
          margin-left: 50%;
          transform: translateX(-50%);
        `}
`,Ne=y.div`
  ${({orientation:t,variant:r})=>t==="horizontal"?p`
          text-align: ${"center"};
          margin-top: ${({theme:o})=>o.spacing[2]};
        `:p`
          margin-left: ${({theme:o})=>o.spacing[4]};
          flex: 1;
        `}
`,Oe=y.div`
  font-weight: ${({theme:t})=>t.typography.fontWeights.medium};
  color: ${({status:t,theme:r})=>{switch(t){case"completed":case"active":return r.colors.foundation.white;case"error":return r.colors.semantic.error;default:return r.colors.gray.light}}};
  transition: color ${({theme:t})=>t.durations.fast} ${({theme:t})=>t.easings.easeInOut};
  
  ${({optional:t})=>t&&p`
      &::after {
        content: ' (Optional)';
        font-weight: ${({theme:r})=>r.typography.fontWeights.normal};
        color: ${({theme:r})=>r.colors.gray.light};
        font-size: 0.875em;
      }
    `}
`,Ee=y.div`
  color: ${({status:t,theme:r})=>{switch(t){case"error":return r.colors.semantic.error;default:return r.colors.gray.light}}};
  margin-top: ${({theme:t})=>t.spacing[1]};
  line-height: ${({theme:t})=>t.typography.lineHeights.normal};
`,He=y.div`
  ${({orientation:t})=>t==="horizontal"&&p`
      width: 100%;
      margin-top: ${({theme:r})=>r.spacing[4]};
      padding: ${({theme:r})=>r.spacing[4]};
      border-top: 1px solid ${({theme:r})=>r.colors.gray.light};
    `}
  
  ${({orientation:t})=>t==="vertical"&&p`
      margin: ${({theme:r})=>r.spacing[2]} 0;
      padding-left: ${({theme:r})=>r.spacing[6]};
    `}
`,qe=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"60%",height:"60%",children:e.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})}),Ue=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"60%",height:"60%",children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})}),i=({steps:t,activeStep:r,onStepClick:o,nonLinear:x=!1,orientation:l="horizontal",getStepStatus:g,size:m="md",variant:c="default",disabled:L=!1,showContent:Be=!1,className:we,"aria-label":ze,"aria-describedby":ke,...$e})=>{const Ie=s=>s<r?"completed":s===r?"active":"pending",N=S.useMemo(()=>t.map((s,u)=>({...s,status:g?g(u,s):Ie(u)})),[t,r,g]),O=(s,u)=>{if(L)return;(x||s<=r||N[s].status==="completed")&&o&&o(s,u)},b=t[r];return e.jsxs("div",{className:we,...$e,children:[e.jsx(Pe,{orientation:l,size:m,variant:c,disabled:L,"data-orientation":l,role:"tablist","aria-label":ze||"Step indicator","aria-describedby":ke,children:N.map((s,u)=>{const W=!L&&(x||u<=r||s.status==="completed"),De=u===t.length-1;return e.jsxs(Le,{orientation:l,variant:c,children:[e.jsxs(We,{orientation:l,children:[e.jsx(Me,{className:"step-indicator",status:s.status,clickable:W,variant:c,role:"tab","aria-selected":u===r,"aria-current":u===r?"step":void 0,tabIndex:W?0:-1,onClick:()=>O(u,s),onKeyDown:M=>{(M.key==="Enter"||M.key===" ")&&(M.preventDefault(),O(u,s))},children:s.status==="completed"&&c!=="dots"?e.jsx(qe,{}):s.status==="error"&&c!=="dots"?e.jsx(Ue,{}):s.icon&&c!=="dots"?s.icon:c==="dots"?null:u+1}),!De&&e.jsx(Ae,{className:"step-connector",status:s.status==="completed"?"completed":"pending",orientation:l})]}),c!=="dots"&&e.jsxs(Ne,{orientation:l,variant:c,children:[e.jsx(Oe,{className:"step-label",status:s.status,optional:s.optional,children:s.label}),s.description&&e.jsx(Ee,{className:"step-description",status:s.status,children:s.description})]})]},s.id)})}),Be&&(b==null?void 0:b.content)&&e.jsx(He,{orientation:l,children:b.content})]})};try{i.displayName="Stepper",i.__docgenInfo={description:"",displayName:"Stepper",props:{steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"Step[]"}},activeStep:{defaultValue:null,description:"",name:"activeStep",required:!0,type:{name:"number"}},onStepClick:{defaultValue:null,description:"",name:"onStepClick",required:!1,type:{name:"((stepIndex: number, step: Step) => void)"}},nonLinear:{defaultValue:{value:"false"},description:"",name:"nonLinear",required:!1,type:{name:"boolean"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},getStepStatus:{defaultValue:null,description:"",name:"getStepStatus",required:!1,type:{name:"((stepIndex: number, step: Step) => StepStatus)"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"compact"'},{value:'"dots"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},showContent:{defaultValue:{value:"false"},description:"",name:"showContent",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}}}}}catch{}const Xe={title:"UI/Stepper",component:i,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["default","compact","dots"]},activeStep:{control:{type:"number",min:0,max:4}}}},d=[{id:"account",label:"Account Setup"},{id:"profile",label:"Profile Information"},{id:"preferences",label:"Gaming Preferences"},{id:"verification",label:"Email Verification"},{id:"complete",label:"Complete"}],h=[{id:"personal",label:"Personal Information",description:"Enter your basic personal details"},{id:"gaming",label:"Gaming Setup",description:"Configure your gaming preferences and hardware"},{id:"payment",label:"Payment Method",description:"Add your payment information",optional:!0},{id:"review",label:"Review & Confirm",description:"Review all information before submitting"}],A=[{id:"design",label:"Design",description:"Create initial design mockups",content:e.jsxs(a,{p:"md",children:[e.jsx(n,{variant:"body",mb:"md",children:"Design Phase"}),e.jsx(n,{variant:"small",color:"gray",children:"In this phase, we create wireframes and mockups for the new gaming interface. This includes user experience research and visual design iterations."})]})},{id:"development",label:"Development",description:"Implement the designed features",content:e.jsxs(a,{p:"md",children:[e.jsx(n,{variant:"body",mb:"md",children:"Development Phase"}),e.jsx(n,{variant:"small",color:"gray",children:"Our development team implements the designed features using React and TypeScript. This includes component development, state management, and API integration."})]})},{id:"testing",label:"Testing",description:"Quality assurance and bug fixing",content:e.jsxs(a,{p:"md",children:[e.jsx(n,{variant:"body",mb:"md",children:"Testing Phase"}),e.jsx(n,{variant:"small",color:"gray",children:"Comprehensive testing including unit tests, integration tests, and user acceptance testing. We ensure all gaming features work correctly across different devices."})]})},{id:"deployment",label:"Deployment",description:"Release to production environment",content:e.jsxs(a,{p:"md",children:[e.jsx(n,{variant:"body",mb:"md",children:"Deployment Phase"}),e.jsx(n,{variant:"small",color:"gray",children:"Deploy the new features to production servers with proper monitoring and rollback procedures. This includes performance optimization and security checks."})]})}],f={args:{steps:d,activeStep:2,orientation:"horizontal",size:"md",variant:"default"}},j={render:()=>{const[t,r]=S.useState(1);return e.jsx(a,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:e.jsxs("div",{children:[e.jsx(n,{variant:"body",mb:"md",children:"Interactive Stepper"}),e.jsx(i,{steps:d,activeStep:t,onStepClick:o=>r(o),nonLinear:!0}),e.jsxs(a,{display:"flex",gap:"sm",mt:"lg",justifyContent:"center",children:[e.jsx(v,{variant:"outline",size:"sm",onClick:()=>r(Math.max(0,t-1)),disabled:t===0,children:"Previous"}),e.jsx(v,{size:"sm",onClick:()=>r(Math.min(d.length-1,t+1)),disabled:t===d.length-1,children:"Next"})]}),e.jsxs(n,{variant:"small",color:"gray",mt:"md",textAlign:"center",children:["Current Step: ",t+1," - ",d[t].label]})]})})}},C={render:()=>e.jsxs(a,{display:"flex",flexDirection:"column",gap:"xl",p:"md",children:[e.jsxs("div",{children:[e.jsx(n,{variant:"body",mb:"md",children:"Horizontal Stepper"}),e.jsx(i,{steps:h,activeStep:1,orientation:"horizontal"})]}),e.jsxs("div",{children:[e.jsx(n,{variant:"body",mb:"md",children:"Vertical Stepper"}),e.jsx(a,{maxWidth:"400px",children:e.jsx(i,{steps:h,activeStep:1,orientation:"vertical"})})]})]})},T={render:()=>e.jsxs(a,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(n,{variant:"small",mb:"sm",color:"gray",children:"Small"}),e.jsx(i,{steps:d,activeStep:2,size:"sm"})]}),e.jsxs("div",{children:[e.jsx(n,{variant:"small",mb:"sm",color:"gray",children:"Medium"}),e.jsx(i,{steps:d,activeStep:2,size:"md"})]}),e.jsxs("div",{children:[e.jsx(n,{variant:"small",mb:"sm",color:"gray",children:"Large"}),e.jsx(i,{steps:d,activeStep:2,size:"lg"})]})]})},B={render:()=>e.jsxs(a,{display:"flex",flexDirection:"column",gap:"xl",p:"md",children:[e.jsxs("div",{children:[e.jsx(n,{variant:"body",mb:"md",children:"Default Variant"}),e.jsx(i,{steps:h,activeStep:1,variant:"default"})]}),e.jsxs("div",{children:[e.jsx(n,{variant:"body",mb:"md",children:"Compact Variant"}),e.jsx(i,{steps:d,activeStep:2,variant:"compact"})]}),e.jsxs("div",{children:[e.jsx(n,{variant:"body",mb:"md",children:"Dots Variant"}),e.jsx(i,{steps:d,activeStep:2,variant:"dots"})]})]})},w={render:()=>{const[t,r]=S.useState(0);return e.jsxs(a,{display:"flex",flexDirection:"column",gap:"md",p:"md",maxWidth:"800px",children:[e.jsx(n,{variant:"body",mb:"md",children:"Stepper with Content"}),e.jsx(i,{steps:A,activeStep:t,showContent:!0,onStepClick:r,nonLinear:!0}),e.jsxs(a,{display:"flex",gap:"sm",justifyContent:"center",mt:"lg",children:[e.jsx(v,{variant:"outline",onClick:()=>r(Math.max(0,t-1)),disabled:t===0,children:"Previous"}),e.jsx(v,{onClick:()=>r(Math.min(A.length-1,t+1)),disabled:t===A.length-1,children:"Next"})]})]})}},z={render:()=>{const t=[{id:"step1",label:"Completed Step"},{id:"step2",label:"Current Step"},{id:"step3",label:"Error Step"},{id:"step4",label:"Pending Step"},{id:"step5",label:"Another Pending"}],r=o=>{switch(o){case 0:return"completed";case 1:return"active";case 2:return"error";default:return"pending"}};return e.jsxs(a,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(n,{variant:"body",mb:"md",children:"Custom Step Status"}),e.jsx(i,{steps:t,activeStep:1,getStepStatus:r}),e.jsx(n,{variant:"small",color:"gray",mt:"sm",children:"Steps can have custom status independent of the active step"})]}),e.jsxs("div",{children:[e.jsx(n,{variant:"body",mb:"md",children:"Vertical with Custom Status"}),e.jsx(a,{maxWidth:"400px",children:e.jsx(i,{steps:t.map(o=>({...o,description:`Status: ${r(t.indexOf(o))}`})),activeStep:1,getStepStatus:r,orientation:"vertical"})})]})]})}},k={render:()=>{const t=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"60%",height:"60%",children:e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"})}),r=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"60%",height:"60%",children:e.jsx("path",{d:"M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM11 13H9v2H8v-2H6v-1h2V10h1v2h2v1zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-3c-.83 0-1.5-.67-1.5-1.5S17.67 9 18.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"})}),o=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"60%",height:"60%",children:e.jsx("path",{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"})}),x=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"60%",height:"60%",children:e.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})}),l=[{id:"profile",label:"Create Profile",description:"Set up your gaming profile",icon:e.jsx(t,{})},{id:"games",label:"Select Games",description:"Choose your favorite games",icon:e.jsx(r,{})},{id:"payment",label:"Payment Setup",description:"Add payment method",icon:e.jsx(o,{})},{id:"complete",label:"All Set!",description:"Ready to start gaming",icon:e.jsx(x,{})}];return e.jsxs(a,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(n,{variant:"body",mb:"md",children:"Custom Icons"}),e.jsx(i,{steps:l,activeStep:1})]}),e.jsxs("div",{children:[e.jsx(n,{variant:"body",mb:"md",children:"Custom Icons - Vertical"}),e.jsx(a,{maxWidth:"400px",children:e.jsx(i,{steps:l,activeStep:2,orientation:"vertical"})})]})]})}},$={render:()=>{const[t,r]=S.useState(1),[o,x]=S.useState([0,1]),l=m=>{r(m),x(c=>[...new Set([...c,m])])},g=m=>o.includes(m)&&m!==t?"completed":m===t?"active":"pending";return e.jsx(a,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:e.jsxs("div",{children:[e.jsx(n,{variant:"body",mb:"md",children:"Non-linear Navigation"}),e.jsx(n,{variant:"small",color:"gray",mb:"md",children:"Click on any step to navigate freely between them"}),e.jsx(i,{steps:h,activeStep:t,onStepClick:l,getStepStatus:g,nonLinear:!0}),e.jsxs(a,{display:"flex",gap:"sm",mt:"lg",justifyContent:"center",children:[e.jsx(v,{variant:"outline",size:"sm",onClick:()=>l(Math.max(0,t-1)),disabled:t===0,children:"Previous"}),e.jsx(v,{size:"sm",onClick:()=>l(Math.min(h.length-1,t+1)),disabled:t===h.length-1,children:"Next"})]}),e.jsxs(n,{variant:"small",color:"gray",mt:"md",textAlign:"center",children:["Visited steps: ",o.sort().map(m=>m+1).join(", ")]})]})})}},I={render:()=>e.jsxs(a,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(n,{variant:"body",mb:"sm",children:"Normal State"}),e.jsx(i,{steps:d,activeStep:2})]}),e.jsxs("div",{children:[e.jsx(n,{variant:"body",mb:"sm",children:"Disabled State"}),e.jsx(i,{steps:d,activeStep:2,disabled:!0})]}),e.jsxs("div",{children:[e.jsx(n,{variant:"body",mb:"sm",children:"With Optional Steps"}),e.jsx(i,{steps:h,activeStep:1})]}),e.jsxs("div",{children:[e.jsx(n,{variant:"body",mb:"sm",children:"All Completed"}),e.jsx(i,{steps:d,activeStep:4})]})]})},D={render:()=>{const[t,r]=S.useState(0),[o,x]=S.useState(2),l=[{id:"email",label:"Email Verification",description:"Verify your email address"},{id:"profile",label:"Create Profile",description:"Set up your gaming profile"},{id:"preferences",label:"Gaming Preferences",description:"Choose your favorite game genres"},{id:"complete",label:"Welcome!",description:"Account setup complete"}],g=[{id:"cart",label:"Shopping Cart"},{id:"shipping",label:"Shipping Info"},{id:"payment",label:"Payment"},{id:"review",label:"Review Order"},{id:"confirmation",label:"Confirmation"}],m=[{id:"planning",label:"Planning",description:"Define project scope and requirements"},{id:"design",label:"Design",description:"Create UI/UX designs and prototypes"},{id:"development",label:"Development",description:"Build and implement features"},{id:"testing",label:"Testing",description:"Quality assurance and bug fixes"},{id:"launch",label:"Launch",description:"Deploy to production"}];return e.jsxs(a,{display:"flex",flexDirection:"column",gap:"xl",p:"md",children:[e.jsxs("div",{children:[e.jsx(n,{variant:"h3",mb:"lg",children:"User Onboarding"}),e.jsxs(a,{maxWidth:"600px",children:[e.jsx(i,{steps:l,activeStep:t,onStepClick:r,nonLinear:!0}),e.jsxs(a,{display:"flex",gap:"sm",mt:"lg",justifyContent:"center",children:[e.jsx(v,{variant:"outline",onClick:()=>r(Math.max(0,t-1)),disabled:t===0,children:"Back"}),e.jsx(v,{onClick:()=>r(Math.min(l.length-1,t+1)),disabled:t===l.length-1,children:t===l.length-1?"Finish":"Continue"})]})]})]}),e.jsxs("div",{children:[e.jsx(n,{variant:"h3",mb:"lg",children:"Order Process"}),e.jsxs(a,{maxWidth:"500px",children:[e.jsx(i,{steps:g,activeStep:o,variant:"compact"}),e.jsxs(n,{variant:"small",color:"gray",mt:"sm",textAlign:"center",children:["Step ",o+1," of ",g.length,": ",g[o].label]})]})]}),e.jsxs("div",{children:[e.jsx(n,{variant:"h3",mb:"lg",children:"Project Timeline"}),e.jsx(a,{maxWidth:"400px",children:e.jsx(i,{steps:m,activeStep:2,orientation:"vertical",getStepStatus:c=>c<2?"completed":c===2?"active":"pending"})})]}),e.jsxs("div",{children:[e.jsx(n,{variant:"h3",mb:"lg",children:"Progress Indicator"}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"md",children:[e.jsx(n,{variant:"small",color:"gray",children:"Loading Progress"}),e.jsx(i,{steps:[{id:"1",label:"Initializing"},{id:"2",label:"Loading Assets"},{id:"3",label:"Connecting"},{id:"4",label:"Ready"}],activeStep:1,variant:"dots",size:"sm"})]})]})]})}},V={render:()=>e.jsxs(a,{display:"flex",flexDirection:"column",gap:"lg",p:"md",maxWidth:"600px",children:[e.jsxs("div",{children:[e.jsx(n,{variant:"body",mb:"md",children:"Accessibility Features"}),e.jsx(i,{steps:h,activeStep:1,"aria-label":"Account setup process with accessibility features",nonLinear:!0}),e.jsx(n,{variant:"small",color:"gray",mt:"sm",children:"This stepper supports keyboard navigation (Tab to focus, Enter/Space to activate steps) and screen reader announcements for step status changes."})]}),e.jsxs("div",{children:[e.jsx(n,{variant:"body",mb:"md",children:"Keyboard Navigation"}),e.jsx(n,{variant:"small",color:"gray",mb:"md",children:"Try using Tab to navigate between steps, and Enter or Space to select them."}),e.jsx(i,{steps:d,activeStep:2,onStepClick:()=>{},nonLinear:!0,"aria-describedby":"keyboard-help"}),e.jsx(n,{id:"keyboard-help",variant:"small",color:"gray",mt:"sm",children:"Use Tab key to navigate between clickable steps, Enter or Space to select."})]})]})},P={args:{steps:h,activeStep:1,orientation:"horizontal",size:"md",variant:"default",nonLinear:!1,disabled:!1,showContent:!1},render:t=>e.jsx(a,{display:"flex",justifyContent:"center",p:"md",maxWidth:"800px",margin:"0 auto",children:e.jsx(i,{...t})})};var E,H,q;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    activeStep: 2,
    orientation: 'horizontal',
    size: 'md',
    variant: 'default'
  }
}`,...(q=(H=f.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var U,R,_;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [currentStep, setCurrentStep] = useState(1);
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="body" mb="md">Interactive Stepper</Typography>\r
          <Stepper steps={basicSteps} activeStep={currentStep} onStepClick={stepIndex => setCurrentStep(stepIndex)} nonLinear />\r
          \r
          <Box display="flex" gap="sm" mt="lg" justifyContent="center">\r
            <Button variant="outline" size="sm" onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0}>\r
              Previous\r
            </Button>\r
            <Button size="sm" onClick={() => setCurrentStep(Math.min(basicSteps.length - 1, currentStep + 1))} disabled={currentStep === basicSteps.length - 1}>\r
              Next\r
            </Button>\r
          </Box>\r
          \r
          <Typography variant="small" color="gray" mt="md" textAlign="center">\r
            Current Step: {currentStep + 1} - {basicSteps[currentStep].label}\r
          </Typography>\r
        </div>\r
      </Box>;
  }
}`,...(_=(R=j.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var G,F,K;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="xl" p="md">\r
      <div>\r
        <Typography variant="body" mb="md">Horizontal Stepper</Typography>\r
        <Stepper steps={detailedSteps} activeStep={1} orientation="horizontal" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="md">Vertical Stepper</Typography>\r
        <Box maxWidth="400px">\r
          <Stepper steps={detailedSteps} activeStep={1} orientation="vertical" />\r
        </Box>\r
      </div>\r
    </Box>
}`,...(K=(F=C.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var Q,X,J;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Small</Typography>\r
        <Stepper steps={basicSteps} activeStep={2} size="sm" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Medium</Typography>\r
        <Stepper steps={basicSteps} activeStep={2} size="md" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Large</Typography>\r
        <Stepper steps={basicSteps} activeStep={2} size="lg" />\r
      </div>\r
    </Box>
}`,...(J=(X=T.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Y,Z,ee;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="xl" p="md">\r
      <div>\r
        <Typography variant="body" mb="md">Default Variant</Typography>\r
        <Stepper steps={detailedSteps} activeStep={1} variant="default" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="md">Compact Variant</Typography>\r
        <Stepper steps={basicSteps} activeStep={2} variant="compact" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="md">Dots Variant</Typography>\r
        <Stepper steps={basicSteps} activeStep={2} variant="dots" />\r
      </div>\r
    </Box>
}`,...(ee=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ne;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);
    return <Box display="flex" flexDirection="column" gap="md" p="md" maxWidth="800px">\r
        <Typography variant="body" mb="md">Stepper with Content</Typography>\r
        \r
        <Stepper steps={workflowSteps} activeStep={currentStep} showContent onStepClick={setCurrentStep} nonLinear />\r
        \r
        <Box display="flex" gap="sm" justifyContent="center" mt="lg">\r
          <Button variant="outline" onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0}>\r
            Previous\r
          </Button>\r
          <Button onClick={() => setCurrentStep(Math.min(workflowSteps.length - 1, currentStep + 1))} disabled={currentStep === workflowSteps.length - 1}>\r
            Next\r
          </Button>\r
        </Box>\r
      </Box>;
  }
}`,...(ne=(re=w.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ie,ae,se;z.parameters={...z.parameters,docs:{...(ie=z.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const steps: Step[] = [{
      id: 'step1',
      label: 'Completed Step'
    }, {
      id: 'step2',
      label: 'Current Step'
    }, {
      id: 'step3',
      label: 'Error Step'
    }, {
      id: 'step4',
      label: 'Pending Step'
    }, {
      id: 'step5',
      label: 'Another Pending'
    }];
    const getStepStatus = (stepIndex: number): StepStatus => {
      switch (stepIndex) {
        case 0:
          return 'completed';
        case 1:
          return 'active';
        case 2:
          return 'error';
        default:
          return 'pending';
      }
    };
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="body" mb="md">Custom Step Status</Typography>\r
          <Stepper steps={steps} activeStep={1} getStepStatus={getStepStatus} />\r
          <Typography variant="small" color="gray" mt="sm">\r
            Steps can have custom status independent of the active step\r
          </Typography>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="md">Vertical with Custom Status</Typography>\r
          <Box maxWidth="400px">\r
            <Stepper steps={steps.map(step => ({
            ...step,
            description: \`Status: \${getStepStatus(steps.indexOf(step))}\`
          }))} activeStep={1} getStepStatus={getStepStatus} orientation="vertical" />\r
          </Box>\r
        </div>\r
      </Box>;
  }
}`,...(se=(ae=z.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,le,pe;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const UserIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="60%" height="60%">\r
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />\r
      </svg>;
    const GameIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="60%" height="60%">\r
        <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM11 13H9v2H8v-2H6v-1h2V10h1v2h2v1zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-3c-.83 0-1.5-.67-1.5-1.5S17.67 9 18.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />\r
      </svg>;
    const CreditCardIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="60%" height="60%">\r
        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />\r
      </svg>;
    const CheckIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="60%" height="60%">\r
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />\r
      </svg>;
    const stepsWithIcons: Step[] = [{
      id: 'profile',
      label: 'Create Profile',
      description: 'Set up your gaming profile',
      icon: <UserIcon />
    }, {
      id: 'games',
      label: 'Select Games',
      description: 'Choose your favorite games',
      icon: <GameIcon />
    }, {
      id: 'payment',
      label: 'Payment Setup',
      description: 'Add payment method',
      icon: <CreditCardIcon />
    }, {
      id: 'complete',
      label: 'All Set!',
      description: 'Ready to start gaming',
      icon: <CheckIcon />
    }];
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="body" mb="md">Custom Icons</Typography>\r
          <Stepper steps={stepsWithIcons} activeStep={1} />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="md">Custom Icons - Vertical</Typography>\r
          <Box maxWidth="400px">\r
            <Stepper steps={stepsWithIcons} activeStep={2} orientation="vertical" />\r
          </Box>\r
        </div>\r
      </Box>;
  }
}`,...(pe=(le=k.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var ce,de,me;$.parameters={...$.parameters,docs:{...(ce=$.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [visitedSteps, setVisitedSteps] = useState<number[]>([0, 1]);
    const handleStepClick = (stepIndex: number) => {
      setCurrentStep(stepIndex);
      setVisitedSteps(prev => [...new Set([...prev, stepIndex])]);
    };
    const getStepStatus = (stepIndex: number): StepStatus => {
      if (visitedSteps.includes(stepIndex) && stepIndex !== currentStep) {
        return 'completed';
      }
      if (stepIndex === currentStep) {
        return 'active';
      }
      return 'pending';
    };
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="body" mb="md">Non-linear Navigation</Typography>\r
          <Typography variant="small" color="gray" mb="md">\r
            Click on any step to navigate freely between them\r
          </Typography>\r
          \r
          <Stepper steps={detailedSteps} activeStep={currentStep} onStepClick={handleStepClick} getStepStatus={getStepStatus} nonLinear />\r
          \r
          <Box display="flex" gap="sm" mt="lg" justifyContent="center">\r
            <Button variant="outline" size="sm" onClick={() => handleStepClick(Math.max(0, currentStep - 1))} disabled={currentStep === 0}>\r
              Previous\r
            </Button>\r
            <Button size="sm" onClick={() => handleStepClick(Math.min(detailedSteps.length - 1, currentStep + 1))} disabled={currentStep === detailedSteps.length - 1}>\r
              Next\r
            </Button>\r
          </Box>\r
          \r
          <Typography variant="small" color="gray" mt="md" textAlign="center">\r
            Visited steps: {visitedSteps.sort().map(i => i + 1).join(', ')}\r
          </Typography>\r
        </div>\r
      </Box>;
  }
}`,...(me=(de=$.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,ge,he;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="body" mb="sm">Normal State</Typography>\r
        <Stepper steps={basicSteps} activeStep={2} />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Disabled State</Typography>\r
        <Stepper steps={basicSteps} activeStep={2} disabled />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">With Optional Steps</Typography>\r
        <Stepper steps={detailedSteps} activeStep={1} />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">All Completed</Typography>\r
        <Stepper steps={basicSteps} activeStep={4} />\r
      </div>\r
    </Box>
}`,...(he=(ge=I.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ye,ve,xe;D.parameters={...D.parameters,docs:{...(ye=D.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const [signupStep, setSignupStep] = useState(0);
    const [orderStep, setOrderStep] = useState(2);
    const signupSteps: Step[] = [{
      id: 'email',
      label: 'Email Verification',
      description: 'Verify your email address'
    }, {
      id: 'profile',
      label: 'Create Profile',
      description: 'Set up your gaming profile'
    }, {
      id: 'preferences',
      label: 'Gaming Preferences',
      description: 'Choose your favorite game genres'
    }, {
      id: 'complete',
      label: 'Welcome!',
      description: 'Account setup complete'
    }];
    const orderSteps: Step[] = [{
      id: 'cart',
      label: 'Shopping Cart'
    }, {
      id: 'shipping',
      label: 'Shipping Info'
    }, {
      id: 'payment',
      label: 'Payment'
    }, {
      id: 'review',
      label: 'Review Order'
    }, {
      id: 'confirmation',
      label: 'Confirmation'
    }];
    const projectSteps: Step[] = [{
      id: 'planning',
      label: 'Planning',
      description: 'Define project scope and requirements'
    }, {
      id: 'design',
      label: 'Design',
      description: 'Create UI/UX designs and prototypes'
    }, {
      id: 'development',
      label: 'Development',
      description: 'Build and implement features'
    }, {
      id: 'testing',
      label: 'Testing',
      description: 'Quality assurance and bug fixes'
    }, {
      id: 'launch',
      label: 'Launch',
      description: 'Deploy to production'
    }];
    return <Box display="flex" flexDirection="column" gap="xl" p="md">\r
        <div>\r
          <Typography variant="h3" mb="lg">User Onboarding</Typography>\r
          <Box maxWidth="600px">\r
            <Stepper steps={signupSteps} activeStep={signupStep} onStepClick={setSignupStep} nonLinear />\r
            \r
            <Box display="flex" gap="sm" mt="lg" justifyContent="center">\r
              <Button variant="outline" onClick={() => setSignupStep(Math.max(0, signupStep - 1))} disabled={signupStep === 0}>\r
                Back\r
              </Button>\r
              <Button onClick={() => setSignupStep(Math.min(signupSteps.length - 1, signupStep + 1))} disabled={signupStep === signupSteps.length - 1}>\r
                {signupStep === signupSteps.length - 1 ? 'Finish' : 'Continue'}\r
              </Button>\r
            </Box>\r
          </Box>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="h3" mb="lg">Order Process</Typography>\r
          <Box maxWidth="500px">\r
            <Stepper steps={orderSteps} activeStep={orderStep} variant="compact" />\r
            <Typography variant="small" color="gray" mt="sm" textAlign="center">\r
              Step {orderStep + 1} of {orderSteps.length}: {orderSteps[orderStep].label}\r
            </Typography>\r
          </Box>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="h3" mb="lg">Project Timeline</Typography>\r
          <Box maxWidth="400px">\r
            <Stepper steps={projectSteps} activeStep={2} orientation="vertical" getStepStatus={index => {
            if (index < 2) return 'completed';
            if (index === 2) return 'active';
            return 'pending';
          }} />\r
          </Box>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="h3" mb="lg">Progress Indicator</Typography>\r
          <Box display="flex" flexDirection="column" gap="md">\r
            <Typography variant="small" color="gray">Loading Progress</Typography>\r
            <Stepper steps={[{
            id: '1',
            label: 'Initializing'
          }, {
            id: '2',
            label: 'Loading Assets'
          }, {
            id: '3',
            label: 'Connecting'
          }, {
            id: '4',
            label: 'Ready'
          }]} activeStep={1} variant="dots" size="sm" />\r
          </Box>\r
        </div>\r
      </Box>;
  }
}`,...(xe=(ve=D.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var Se,be,fe;V.parameters={...V.parameters,docs:{...(Se=V.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="600px">\r
      <div>\r
        <Typography variant="body" mb="md">Accessibility Features</Typography>\r
        <Stepper steps={detailedSteps} activeStep={1} aria-label="Account setup process with accessibility features" nonLinear />\r
        <Typography variant="small" color="gray" mt="sm">\r
          This stepper supports keyboard navigation (Tab to focus, Enter/Space to activate steps)\r
          and screen reader announcements for step status changes.\r
        </Typography>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="md">Keyboard Navigation</Typography>\r
        <Typography variant="small" color="gray" mb="md">\r
          Try using Tab to navigate between steps, and Enter or Space to select them.\r
        </Typography>\r
        <Stepper steps={basicSteps} activeStep={2} onStepClick={() => {}} nonLinear aria-describedby="keyboard-help" />\r
        <Typography id="keyboard-help" variant="small" color="gray" mt="sm">\r
          Use Tab key to navigate between clickable steps, Enter or Space to select.\r
        </Typography>\r
      </div>\r
    </Box>
}`,...(fe=(be=V.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var je,Ce,Te;P.parameters={...P.parameters,docs:{...(je=P.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    steps: detailedSteps,
    activeStep: 1,
    orientation: 'horizontal',
    size: 'md',
    variant: 'default',
    nonLinear: false,
    disabled: false,
    showContent: false
  },
  render: args => <Box display="flex" justifyContent="center" p="md" maxWidth="800px" margin="0 auto">\r
      <Stepper {...args} />\r
    </Box>
}`,...(Te=(Ce=P.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}};const Je=["Default","BasicUsage","Orientations","Sizes","Variants","WithContent","CustomStepStatus","CustomIcons","NonLinearNavigation","States","RealWorldExamples","AccessibilityDemo","Playground"];export{V as AccessibilityDemo,j as BasicUsage,k as CustomIcons,z as CustomStepStatus,f as Default,$ as NonLinearNavigation,C as Orientations,P as Playground,D as RealWorldExamples,T as Sizes,I as States,B as Variants,w as WithContent,Je as __namedExportsOrder,Xe as default};
