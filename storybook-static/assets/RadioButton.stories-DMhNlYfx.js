import{j as e}from"./jsx-runtime-CDt2p4po.js";import{d as b,l as c}from"./styled-components.browser.esm-Byilhkxn.js";import{B as y}from"./Box-COihqxSe.js";import{T as t}from"./Typography-u4LxpgYF.js";import{r as n}from"./index-GiUgBvb1.js";import"./propFilters-BGSNtaQt.js";const qe=a=>{switch(a){case"sm":return c`
        .radio-indicator {
          width: 16px;
          height: 16px;
        }
        
        .radio-content {
          font-size: ${({theme:r})=>r.typography.fontSizes.xs};
          gap: ${({theme:r})=>r.spacing[2]};
        }
        
        .radio-label {
          font-size: ${({theme:r})=>r.typography.fontSizes.xs};
        }
        
        .radio-description {
          font-size: ${({theme:r})=>r.typography.fontSizes.xs};
        }
      `;case"lg":return c`
        .radio-indicator {
          width: 24px;
          height: 24px;
        }
        
        .radio-content {
          font-size: ${({theme:r})=>r.typography.fontSizes.base};
          gap: ${({theme:r})=>r.spacing[4]};
        }
        
        .radio-label {
          font-size: ${({theme:r})=>r.typography.fontSizes.base};
        }
        
        .radio-description {
          font-size: ${({theme:r})=>r.typography.fontSizes.sm};
        }
      `;default:return c`
        .radio-indicator {
          width: 20px;
          height: 20px;
        }
        
        .radio-content {
          font-size: ${({theme:r})=>r.typography.fontSizes.sm};
          gap: ${({theme:r})=>r.spacing[3]};
        }
        
        .radio-label {
          font-size: ${({theme:r})=>r.typography.fontSizes.sm};
        }
        
        .radio-description {
          font-size: ${({theme:r})=>r.typography.fontSizes.xs};
        }
      `}},$e=b.label`
  display: flex;
  align-items: flex-start;
  cursor: ${({disabled:a})=>a?"not-allowed":"pointer"};
  font-family: ${({theme:a})=>a.typography.fonts.body};
  opacity: ${({disabled:a})=>a?.6:1};
  transition: all ${({theme:a})=>a.durations.fast} ${({theme:a})=>a.easings.easeInOut};
  
  ${({size:a})=>qe(a)}
  
  ${({variant:a,checked:r,theme:i})=>{switch(a){case"card":return c`
          padding: ${i.spacing[4]};
          border: 1px solid ${i.colors.gray.light};
          border-radius: ${i.radius.base};
          background: ${r?"rgba(74, 158, 255, 0.1)":i.colors.gray.base};
          
          ${r&&c`
              border-color: ${i.colors.innovation.primaryBlue};
            `}
          
          &:hover:not([disabled]) {
            border-color: ${i.colors.innovation.primaryBlue};
            background: ${r?"rgba(74, 158, 255, 0.15)":"rgba(74, 158, 255, 0.05)"};
          }
          
          &:focus-within {
            outline: 2px solid ${i.colors.innovation.primaryBlue};
            outline-offset: 2px;
          }
        `;case"button":return c`
          padding: ${i.spacing[3]} ${i.spacing[4]};
          border: 1px solid ${i.colors.gray.light};
          border-radius: ${i.radius.base};
          background: ${r?i.colors.innovation.primaryBlue:"transparent"};
          color: ${i.colors.foundation.white};
          justify-content: center;
          
          &:hover:not([disabled]) {
            background: ${r?i.colors.innovation.primaryBlue:"rgba(74, 158, 255, 0.1)"};
            border-color: ${i.colors.innovation.primaryBlue};
          }
          
          &:focus-within {
            outline: 2px solid ${i.colors.innovation.primaryBlue};
            outline-offset: 2px;
          }
          
          .radio-indicator {
            display: none;
          }
        `;default:return c`
          &:hover:not([disabled]) .radio-indicator {
            border-color: ${i.colors.innovation.primaryBlue};
          }
          
          &:focus-within .radio-indicator {
            outline: 2px solid ${i.colors.innovation.primaryBlue};
            outline-offset: 2px;
          }
        `}}}
`,ze=b.input.attrs({type:"radio"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,Be=b.div`
  position: relative;
  border: 2px solid ${({theme:a})=>a.colors.gray.light};
  border-radius: 50%;
  background: ${({theme:a})=>a.colors.gray.base};
  transition: all ${({theme:a})=>a.durations.fast} ${({theme:a})=>a.easings.easeInOut};
  flex-shrink: 0;
  
  ${({checked:a,theme:r})=>a&&c`
      border-color: ${r.colors.innovation.primaryBlue};
      background: ${r.colors.innovation.primaryBlue};
      
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 6px;
        height: 6px;
        background: ${r.colors.foundation.white};
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }
    `}
`,Re=b.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
`,Ce=b.span`
  font-weight: ${({theme:a})=>a.typography.fontWeights.medium};
  color: ${({theme:a})=>a.colors.foundation.white};
  line-height: ${({theme:a})=>a.typography.lineHeights.snug};
`,Oe=b.span`
  color: ${({theme:a})=>a.colors.gray.light};
  line-height: ${({theme:a})=>a.typography.lineHeights.normal};
  margin-top: ${({theme:a})=>a.spacing[1]};
`,L=b.div`
  display: flex;
  align-items: center;
  color: inherit;
  margin-right: ${({theme:a})=>a.spacing[2]};
`,V=({value:a="",checked:r=!1,onChange:i,label:p,description:u,disabled:s=!1,size:S="md",variant:h="default",className:f,id:m,name:v,required:g=!1,"aria-label":x,"aria-describedby":I,...N})=>{const k=E=>{i==null||i(E.target.checked,a)},T=m||`radio-${Math.random().toString(36).substr(2,9)}`;return e.jsxs($e,{className:f,size:S,variant:h,disabled:s,checked:r,htmlFor:T,...N,children:[e.jsx(ze,{id:T,name:v,value:a,checked:r,onChange:k,disabled:s,required:g,"aria-label":x,"aria-describedby":I}),e.jsx(Be,{className:"radio-indicator",checked:r}),(p||u)&&e.jsxs(Re,{className:"radio-content",children:[p&&e.jsx(Ce,{className:"radio-label",children:p}),u&&e.jsx(Oe,{className:"radio-description",children:u})]})]})},we=b.div`
  font-family: ${({theme:a})=>a.typography.fonts.body};
`,Pe=b.legend`
  font-size: ${({theme:a})=>a.typography.fontSizes.sm};
  font-weight: ${({theme:a})=>a.typography.fontWeights.medium};
  color: ${({theme:a})=>a.colors.foundation.white};
  margin-bottom: ${({theme:a})=>a.spacing[3]};
  display: block;
  
  ${({disabled:a})=>a&&c`
      opacity: 0.6;
    `}
  
  ${({required:a})=>a&&c`
      &::after {
        content: ' *';
        color: ${({theme:r})=>r.colors.semantic.error};
      }
    `}
`,Ie=b.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: ${({orientation:a})=>a==="horizontal"?"row":"column"};
  gap: ${({theme:a,variant:r})=>{switch(r){case"button":return a.spacing[2];case"card":return a.spacing[3];default:return a.spacing[4]}}};
  
  ${({orientation:a,variant:r})=>a==="horizontal"&&r==="button"&&c`
      flex-wrap: wrap;
    `}
`,H=b.div`
  font-size: ${({theme:a})=>a.typography.fontSizes.xs};
  margin-top: ${({theme:a})=>a.spacing[2]};
  
  ${({error:a,theme:r})=>a?c`
          color: ${r.colors.semantic.error};
        `:c`
          color: ${r.colors.gray.light};
        `}
`,o=({options:a,value:r,onChange:i,name:p,size:u="md",variant:s="default",orientation:S="vertical",disabled:h=!1,required:f=!1,error:m=!1,label:v,helperText:g,errorMessage:x,className:I,"aria-label":N,"aria-describedby":k,...T})=>{const E=l=>{i==null||i(l)},j=`radio-group-${Math.random().toString(36).substr(2,9)}`,_=`${j}-helper`,M=`${j}-error`,Ge=[k,g&&!m?_:void 0,m&&x?M:void 0].filter(Boolean).join(" ")||void 0;return e.jsxs(we,{className:I,...T,children:[e.jsxs(Ie,{orientation:S,variant:s,"aria-label":N||v,"aria-describedby":Ge,"aria-invalid":m,disabled:h,children:[v&&e.jsx(Pe,{required:f,disabled:h,children:v}),a.map((l,F)=>e.jsxs($e,{size:u,variant:s,disabled:h||l.disabled,checked:r===l.value,htmlFor:`${j}-${F}`,children:[e.jsx(ze,{id:`${j}-${F}`,name:p||j,value:l.value,checked:r===l.value,onChange:()=>E(l.value),disabled:h||l.disabled,required:f}),s!=="button"&&e.jsx(Be,{className:"radio-indicator",checked:r===l.value}),e.jsxs(Re,{className:"radio-content",children:[l.icon&&s!=="button"&&e.jsx(L,{children:l.icon}),e.jsxs("div",{children:[e.jsxs(Ce,{className:"radio-label",children:[l.icon&&s==="button"&&e.jsx(L,{style:{display:"inline-flex",marginRight:"8px",marginBottom:"0"},children:l.icon}),l.label]}),l.description&&e.jsx(Oe,{className:"radio-description",children:l.description})]})]})]},l.value))]}),(g&&!m||m&&x)&&e.jsxs("div",{children:[g&&!m&&e.jsx(H,{id:_,children:g}),m&&x&&e.jsx(H,{id:M,error:!0,children:x})]})]})};try{V.displayName="RadioButton",V.__docgenInfo={description:"",displayName:"RadioButton",props:{value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean, value: string) => void)"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"default"'},{value:'"card"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}}}}}catch{}try{o.displayName="RadioGroup",o.__docgenInfo={description:"",displayName:"RadioGroup",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"RadioOption[]"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"default"'},{value:'"card"'}]}},orientation:{defaultValue:{value:"vertical"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}}}}}catch{}const Fe={title:"UI/RadioButton",component:o,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","card","button"]},size:{control:{type:"select"},options:["sm","md","lg"]},orientation:{control:{type:"select"},options:["horizontal","vertical"]}}},d=[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}],A=[{value:"basic",label:"Basic Plan",description:"Perfect for individuals and small teams"},{value:"pro",label:"Pro Plan",description:"Advanced features for growing businesses"},{value:"enterprise",label:"Enterprise Plan",description:"Full-scale solution for large organizations"}],De=[{value:"fps",label:"First Person Shooter",description:"Fast-paced action games like CS:GO, Valorant",icon:e.jsx("span",{children:"🎯"})},{value:"moba",label:"MOBA",description:"Multiplayer Online Battle Arena like LoL, Dota",icon:e.jsx("span",{children:"⚔️"})},{value:"rpg",label:"Role Playing Games",description:"Immersive story-driven experiences",icon:e.jsx("span",{children:"🗡️"})},{value:"strategy",label:"Real-time Strategy",description:"Strategic planning and resource management",icon:e.jsx("span",{children:"🏰"})}],$={args:{options:d,label:"Select Size",variant:"default",size:"md"}},z={render:()=>{const[a,r]=n.useState(!1);return e.jsx(y,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"md",children:"Individual Radio Buttons"}),e.jsxs(y,{display:"flex",flexDirection:"column",gap:"md",children:[e.jsx(V,{label:"Enable notifications",checked:a,onChange:r}),e.jsx(V,{label:"Subscribe to newsletter",description:"Receive updates about new features and releases"}),e.jsx(V,{label:"Disabled option",disabled:!0})]})]})})}},B={render:()=>{const[a,r]=n.useState("medium");return e.jsx(y,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"md",children:"Basic Radio Group"}),e.jsx(o,{label:"Choose Size",options:d,value:a,onChange:r,helperText:"Select your preferred size option."}),e.jsxs(t,{variant:"small",color:"gray",mt:"sm",children:["Selected: ",a]})]})})}},R={render:()=>{const[a,r]=n.useState("medium"),[i,p]=n.useState("pro"),[u,s]=n.useState("large");return e.jsxs(y,{display:"flex",flexDirection:"column",gap:"xl",p:"md",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"md",children:"Default Variant"}),e.jsx(o,{options:d,value:a,onChange:r,variant:"default"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"md",children:"Card Variant"}),e.jsx(o,{options:A,value:i,onChange:p,variant:"card"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"md",children:"Button Variant"}),e.jsx(o,{options:d,value:u,onChange:s,variant:"button",orientation:"horizontal"})]})]})}},C={render:()=>{const[a,r]=n.useState("small"),[i,p]=n.useState("medium"),[u,s]=n.useState("large");return e.jsxs(y,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"small",mb:"sm",color:"gray",children:"Small"}),e.jsx(o,{options:d,value:a,onChange:r,size:"sm"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"small",mb:"sm",color:"gray",children:"Medium"}),e.jsx(o,{options:d,value:i,onChange:p,size:"md"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"small",mb:"sm",color:"gray",children:"Large"}),e.jsx(o,{options:d,value:u,onChange:s,size:"lg"})]})]})}},O={render:()=>{const[a,r]=n.useState("fps");return e.jsx(y,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"md",children:"Gaming Preferences"}),e.jsx(o,{label:"Favorite Game Genre",options:De,value:a,onChange:r,variant:"card",helperText:"Choose your preferred gaming genre for personalized recommendations."})]})})}},D={render:()=>{const[a,r]=n.useState("medium"),[i,p]=n.useState("pro"),[u,s]=n.useState("large");return e.jsxs(y,{display:"flex",flexDirection:"column",gap:"xl",p:"md",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"md",children:"Vertical Layout (Default)"}),e.jsx(o,{options:d,value:a,onChange:r,orientation:"vertical"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"md",children:"Horizontal Layout"}),e.jsx(o,{options:A,value:i,onChange:p,orientation:"horizontal",variant:"card"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"md",children:"Horizontal Button Group"}),e.jsx(o,{options:d,value:u,onChange:s,variant:"button",orientation:"horizontal"})]})]})}},G={render:()=>{const[a,r]=n.useState("medium");return e.jsxs(y,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"sm",children:"Normal State"}),e.jsx(o,{label:"Normal Selection",options:d,value:a,onChange:r,helperText:"Choose your preferred option from the list above."})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"sm",children:"Required Field"}),e.jsx(o,{label:"Required Selection",options:d,required:!0,helperText:"This field is required and must be selected."})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"sm",children:"Error State"}),e.jsx(o,{label:"Error Selection",options:d,error:!0,errorMessage:"Please select a valid option from the list."})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"sm",children:"Disabled State"}),e.jsx(o,{label:"Disabled Selection",options:d,disabled:!0,helperText:"This selection is currently disabled."})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"sm",children:"Mixed Disabled Options"}),e.jsx(o,{label:"Partially Disabled",options:[{value:"option1",label:"Available Option"},{value:"option2",label:"Disabled Option",disabled:!0},{value:"option3",label:"Another Available Option"},{value:"option4",label:"Also Disabled",disabled:!0}],helperText:"Some options are disabled based on your current plan."})]})]})}},q={render:()=>{const[a,r]=n.useState("pro"),[i,p]=n.useState("standard"),[u,s]=n.useState("card"),[S,h]=n.useState("dark"),f=[{value:"basic",label:"Basic - $9/month",description:"Up to 5 projects, 2GB storage, Email support"},{value:"pro",label:"Pro - $29/month",description:"Unlimited projects, 100GB storage, Priority support"},{value:"enterprise",label:"Enterprise - Custom",description:"Custom solutions, Unlimited storage, Dedicated support"}],m=[{value:"standard",label:"Standard Shipping",description:"5-7 business days - FREE",icon:e.jsx("span",{children:"📦"})},{value:"express",label:"Express Shipping",description:"2-3 business days - $9.99",icon:e.jsx("span",{children:"🚚"})},{value:"overnight",label:"Overnight Delivery",description:"Next business day - $24.99",icon:e.jsx("span",{children:"✈️"})}],v=[{value:"card",label:"Credit Card",icon:e.jsx("span",{children:"💳"})},{value:"paypal",label:"PayPal",icon:e.jsx("span",{children:"🅿️"})},{value:"crypto",label:"Cryptocurrency",icon:e.jsx("span",{children:"₿"})}],g=[{value:"light",label:"Light Theme"},{value:"dark",label:"Dark Theme"},{value:"auto",label:"System Default"}];return e.jsxs(y,{display:"flex",flexDirection:"column",gap:"xl",p:"md",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"h3",mb:"lg",children:"Subscription Plans"}),e.jsx(o,{label:"Choose Your Plan",options:f,value:a,onChange:r,variant:"card",helperText:"You can change your plan at any time from your account settings."})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"h3",mb:"lg",children:"Shipping Options"}),e.jsx(o,{label:"Select Delivery Method",options:m,value:i,onChange:p,variant:"card",helperText:"Shipping costs will be calculated based on your location."})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"h3",mb:"lg",children:"Payment Method"}),e.jsx(o,{label:"How would you like to pay?",options:v,value:u,onChange:s,variant:"button",orientation:"horizontal",required:!0})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"h3",mb:"lg",children:"Interface Preferences"}),e.jsx(o,{label:"Theme Preference",options:g,value:S,onChange:h,variant:"button",orientation:"horizontal",size:"sm",helperText:"Your theme preference will be saved across all devices."})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"h3",mb:"lg",children:"Gaming Setup Preferences"}),e.jsx(o,{label:"Primary Gaming Genre",options:De,value:"fps",variant:"card",helperText:"We'll recommend gaming peripherals based on your preference."})]})]})}},w={render:()=>e.jsxs(y,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"body",mb:"md",children:"Accessibility Features"}),e.jsx(o,{label:"Accessible Radio Group",options:d,helperText:"This radio group follows accessibility best practices with proper ARIA attributes.","aria-label":"Size selection with accessibility features",required:!0})]}),e.jsxs("div",{children:[e.jsx(o,{label:"Form Integration Example",options:[{value:"yes",label:"Yes, I agree"},{value:"no",label:"No, I disagree"},{value:"maybe",label:"I need more information"}],helperText:"Screen readers will announce the selection state and helper text.","aria-describedby":"custom-description"}),e.jsx(t,{id:"custom-description",variant:"small",color:"gray",mt:"sm",children:"Custom description that enhances accessibility for screen readers."})]})]})},P={args:{options:A,label:"Select Option",variant:"default",size:"md",orientation:"vertical",disabled:!1,required:!1,error:!1,helperText:"Choose the option that best fits your needs."},render:a=>e.jsx(y,{display:"flex",justifyContent:"center",p:"md",maxWidth:"500px",margin:"0 auto",children:e.jsx(o,{...a})})};var W,U,Y;$.parameters={...$.parameters,docs:{...(W=$.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    label: 'Select Size',
    variant: 'default',
    size: 'md'
  }
}`,...(Y=(U=$.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var J,K,Q;z.parameters={...z.parameters,docs:{...(J=z.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="body" mb="md">Individual Radio Buttons</Typography>\r
          <Box display="flex" flexDirection="column" gap="md">\r
            <RadioButton label="Enable notifications" checked={checked} onChange={setChecked} />\r
            <RadioButton label="Subscribe to newsletter" description="Receive updates about new features and releases" />\r
            <RadioButton label="Disabled option" disabled />\r
          </Box>\r
        </div>\r
      </Box>;
  }
}`,...(Q=(K=z.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,ee;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [selectedSize, setSelectedSize] = useState('medium');
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="body" mb="md">Basic Radio Group</Typography>\r
          <RadioGroup label="Choose Size" options={basicOptions} value={selectedSize} onChange={setSelectedSize} helperText="Select your preferred size option." />\r
          <Typography variant="small" color="gray" mt="sm">\r
            Selected: {selectedSize}\r
          </Typography>\r
        </div>\r
      </Box>;
  }
}`,...(ee=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,ie;R.parameters={...R.parameters,docs:{...(ae=R.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const [defaultValue, setDefaultValue] = useState('medium');
    const [cardValue, setCardValue] = useState('pro');
    const [buttonValue, setButtonValue] = useState('large');
    return <Box display="flex" flexDirection="column" gap="xl" p="md">\r
        <div>\r
          <Typography variant="body" mb="md">Default Variant</Typography>\r
          <RadioGroup options={basicOptions} value={defaultValue} onChange={setDefaultValue} variant="default" />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="md">Card Variant</Typography>\r
          <RadioGroup options={detailedOptions} value={cardValue} onChange={setCardValue} variant="card" />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="md">Button Variant</Typography>\r
          <RadioGroup options={basicOptions} value={buttonValue} onChange={setButtonValue} variant="button" orientation="horizontal" />\r
        </div>\r
      </Box>;
  }
}`,...(ie=(re=R.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var oe,te,le;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const [smallValue, setSmallValue] = useState('small');
    const [mediumValue, setMediumValue] = useState('medium');
    const [largeValue, setLargeValue] = useState('large');
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="small" mb="sm" color="gray">Small</Typography>\r
          <RadioGroup options={basicOptions} value={smallValue} onChange={setSmallValue} size="sm" />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="small" mb="sm" color="gray">Medium</Typography>\r
          <RadioGroup options={basicOptions} value={mediumValue} onChange={setMediumValue} size="md" />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="small" mb="sm" color="gray">Large</Typography>\r
          <RadioGroup options={basicOptions} value={largeValue} onChange={setLargeValue} size="lg" />\r
        </div>\r
      </Box>;
  }
}`,...(le=(te=C.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ne,se,de;O.parameters={...O.parameters,docs:{...(ne=O.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const [selectedGenre, setSelectedGenre] = useState('fps');
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="body" mb="md">Gaming Preferences</Typography>\r
          <RadioGroup label="Favorite Game Genre" options={gamingOptions} value={selectedGenre} onChange={setSelectedGenre} variant="card" helperText="Choose your preferred gaming genre for personalized recommendations." />\r
        </div>\r
      </Box>;
  }
}`,...(de=(se=O.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var pe,ue,ce;D.parameters={...D.parameters,docs:{...(pe=D.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const [verticalValue, setVerticalValue] = useState('medium');
    const [horizontalValue, setHorizontalValue] = useState('pro');
    const [buttonValue, setButtonValue] = useState('large');
    return <Box display="flex" flexDirection="column" gap="xl" p="md">\r
        <div>\r
          <Typography variant="body" mb="md">Vertical Layout (Default)</Typography>\r
          <RadioGroup options={basicOptions} value={verticalValue} onChange={setVerticalValue} orientation="vertical" />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="md">Horizontal Layout</Typography>\r
          <RadioGroup options={detailedOptions} value={horizontalValue} onChange={setHorizontalValue} orientation="horizontal" variant="card" />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="md">Horizontal Button Group</Typography>\r
          <RadioGroup options={basicOptions} value={buttonValue} onChange={setButtonValue} variant="button" orientation="horizontal" />\r
        </div>\r
      </Box>;
  }
}`,...(ce=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var me,ye,be;G.parameters={...G.parameters,docs:{...(me=G.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const [normalValue, setNormalValue] = useState('medium');
    return <Box display="flex" flexDirection="column" gap="lg" p="md">\r
        <div>\r
          <Typography variant="body" mb="sm">Normal State</Typography>\r
          <RadioGroup label="Normal Selection" options={basicOptions} value={normalValue} onChange={setNormalValue} helperText="Choose your preferred option from the list above." />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">Required Field</Typography>\r
          <RadioGroup label="Required Selection" options={basicOptions} required helperText="This field is required and must be selected." />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">Error State</Typography>\r
          <RadioGroup label="Error Selection" options={basicOptions} error errorMessage="Please select a valid option from the list." />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">Disabled State</Typography>\r
          <RadioGroup label="Disabled Selection" options={basicOptions} disabled helperText="This selection is currently disabled." />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">Mixed Disabled Options</Typography>\r
          <RadioGroup label="Partially Disabled" options={[{
          value: 'option1',
          label: 'Available Option'
        }, {
          value: 'option2',
          label: 'Disabled Option',
          disabled: true
        }, {
          value: 'option3',
          label: 'Another Available Option'
        }, {
          value: 'option4',
          label: 'Also Disabled',
          disabled: true
        }]} helperText="Some options are disabled based on your current plan." />\r
        </div>\r
      </Box>;
  }
}`,...(be=(ye=G.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var he,ge,ve;q.parameters={...q.parameters,docs:{...(he=q.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const [planValue, setPlanValue] = useState('pro');
    const [deliveryValue, setDeliveryValue] = useState('standard');
    const [paymentValue, setPaymentValue] = useState('card');
    const [themeValue, setThemeValue] = useState('dark');
    const planOptions: RadioOption[] = [{
      value: 'basic',
      label: 'Basic - $9/month',
      description: 'Up to 5 projects, 2GB storage, Email support'
    }, {
      value: 'pro',
      label: 'Pro - $29/month',
      description: 'Unlimited projects, 100GB storage, Priority support'
    }, {
      value: 'enterprise',
      label: 'Enterprise - Custom',
      description: 'Custom solutions, Unlimited storage, Dedicated support'
    }];
    const deliveryOptions: RadioOption[] = [{
      value: 'standard',
      label: 'Standard Shipping',
      description: '5-7 business days - FREE',
      icon: <span>📦</span>
    }, {
      value: 'express',
      label: 'Express Shipping',
      description: '2-3 business days - $9.99',
      icon: <span>🚚</span>
    }, {
      value: 'overnight',
      label: 'Overnight Delivery',
      description: 'Next business day - $24.99',
      icon: <span>✈️</span>
    }];
    const paymentOptions: RadioOption[] = [{
      value: 'card',
      label: 'Credit Card',
      icon: <span>💳</span>
    }, {
      value: 'paypal',
      label: 'PayPal',
      icon: <span>🅿️</span>
    }, {
      value: 'crypto',
      label: 'Cryptocurrency',
      icon: <span>₿</span>
    }];
    const themeOptions: RadioOption[] = [{
      value: 'light',
      label: 'Light Theme'
    }, {
      value: 'dark',
      label: 'Dark Theme'
    }, {
      value: 'auto',
      label: 'System Default'
    }];
    return <Box display="flex" flexDirection="column" gap="xl" p="md">\r
        <div>\r
          <Typography variant="h3" mb="lg">Subscription Plans</Typography>\r
          <RadioGroup label="Choose Your Plan" options={planOptions} value={planValue} onChange={setPlanValue} variant="card" helperText="You can change your plan at any time from your account settings." />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="h3" mb="lg">Shipping Options</Typography>\r
          <RadioGroup label="Select Delivery Method" options={deliveryOptions} value={deliveryValue} onChange={setDeliveryValue} variant="card" helperText="Shipping costs will be calculated based on your location." />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="h3" mb="lg">Payment Method</Typography>\r
          <RadioGroup label="How would you like to pay?" options={paymentOptions} value={paymentValue} onChange={setPaymentValue} variant="button" orientation="horizontal" required />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="h3" mb="lg">Interface Preferences</Typography>\r
          <RadioGroup label="Theme Preference" options={themeOptions} value={themeValue} onChange={setThemeValue} variant="button" orientation="horizontal" size="sm" helperText="Your theme preference will be saved across all devices." />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="h3" mb="lg">Gaming Setup Preferences</Typography>\r
          <RadioGroup label="Primary Gaming Genre" options={gamingOptions} value="fps" variant="card" helperText="We'll recommend gaming peripherals based on your preference." />\r
        </div>\r
      </Box>;
  }
}`,...(ve=(ge=q.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var fe,xe,Se;w.parameters={...w.parameters,docs:{...(fe=w.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="body" mb="md">Accessibility Features</Typography>\r
        <RadioGroup label="Accessible Radio Group" options={basicOptions} helperText="This radio group follows accessibility best practices with proper ARIA attributes." aria-label="Size selection with accessibility features" required />\r
      </div>\r
      \r
      <div>\r
        <RadioGroup label="Form Integration Example" options={[{
        value: 'yes',
        label: 'Yes, I agree'
      }, {
        value: 'no',
        label: 'No, I disagree'
      }, {
        value: 'maybe',
        label: 'I need more information'
      }]} helperText="Screen readers will announce the selection state and helper text." aria-describedby="custom-description" />\r
        <Typography id="custom-description" variant="small" color="gray" mt="sm">\r
          Custom description that enhances accessibility for screen readers.\r
        </Typography>\r
      </div>\r
    </Box>
}`,...(Se=(xe=w.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var je,Ve,Te;P.parameters={...P.parameters,docs:{...(je=P.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    options: detailedOptions,
    label: 'Select Option',
    variant: 'default',
    size: 'md',
    orientation: 'vertical',
    disabled: false,
    required: false,
    error: false,
    helperText: 'Choose the option that best fits your needs.'
  },
  render: args => <Box display="flex" justifyContent="center" p="md" maxWidth="500px" margin="0 auto">\r
      <RadioGroup {...args} />\r
    </Box>
}`,...(Te=(Ve=P.parameters)==null?void 0:Ve.docs)==null?void 0:Te.source}}};const Le=["Default","SingleRadioButton","BasicUsage","Variants","Sizes","WithIcons","Orientations","States","RealWorldExamples","AccessibilityDemo","Playground"];export{w as AccessibilityDemo,B as BasicUsage,$ as Default,D as Orientations,P as Playground,q as RealWorldExamples,z as SingleRadioButton,C as Sizes,G as States,R as Variants,O as WithIcons,Le as __namedExportsOrder,Fe as default};
