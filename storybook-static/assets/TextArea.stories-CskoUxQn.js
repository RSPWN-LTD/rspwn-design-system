import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as d,R as J}from"./index-GiUgBvb1.js";import{l,d as v}from"./styled-components.browser.esm-Byilhkxn.js";import{B as o}from"./Box-D0rAd6Cs.js";import{T as s}from"./Typography-B2ZqsRPU.js";const Xe=r=>{switch(r){case"sm":return l`
        font-size: ${({theme:a})=>a.typography.fontSizes.xs};
        padding: ${({theme:a})=>a.spacing[2]} ${({theme:a})=>a.spacing[3]};
        line-height: ${({theme:a})=>a.typography.lineHeights.normal};
      `;case"lg":return l`
        font-size: ${({theme:a})=>a.typography.fontSizes.base};
        padding: ${({theme:a})=>a.spacing[4]} ${({theme:a})=>a.spacing[5]};
        line-height: ${({theme:a})=>a.typography.lineHeights.relaxed};
      `;default:return l`
        font-size: ${({theme:a})=>a.typography.fontSizes.sm};
        padding: ${({theme:a})=>a.spacing[3]} ${({theme:a})=>a.spacing[4]};
        line-height: ${({theme:a})=>a.typography.lineHeights.normal};
      `}},Ze=(r,a,n)=>{const p=l`
    border: 1px solid ${({theme:i})=>i.colors.gray.light};
    background-color: ${({theme:i})=>i.colors.gray.base};
    
    &:focus {
      outline: none;
      border-color: ${({theme:i})=>i.colors.innovation.primaryBlue};
      box-shadow: 0 0 0 2px rgba(74, 158, 255, 0.2);
    }
    
    ${a&&l`
        border-color: ${({theme:i})=>i.colors.semantic.error};
        
        &:focus {
          border-color: ${({theme:i})=>i.colors.semantic.error};
          box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
        }
      `}
    
    ${n&&l`
        background-color: ${({theme:i})=>i.colors.gray.dark};
        border-color: ${({theme:i})=>i.colors.gray.dark};
        cursor: not-allowed;
        opacity: 0.6;
      `}
  `;switch(r){case"filled":return l`
        ${p}
        background-color: ${({theme:i})=>i.colors.gray.dark};
      `;case"borderless":return l`
        border: none;
        background-color: transparent;
        
        &:focus {
          background-color: ${({theme:i})=>i.colors.gray.base};
          box-shadow: none;
        }
      `;default:return p}},er=v.div`
  display: flex;
  flex-direction: column;
  font-family: ${({theme:r})=>r.typography.fonts.body};
  
  ${({width:r})=>r&&l`
      width: ${typeof r=="number"?`${r}px`:r};
    `}
`,rr=v.label`
  font-size: ${({theme:r})=>r.typography.fontSizes.sm};
  font-weight: ${({theme:r})=>r.typography.fontWeights.medium};
  color: ${({theme:r})=>r.colors.foundation.white};
  margin-bottom: ${({theme:r})=>r.spacing[2]};
  
  ${({disabled:r})=>r&&l`
      opacity: 0.6;
    `}
  
  ${({required:r})=>r&&l`
      &::after {
        content: ' *';
        color: ${({theme:a})=>a.colors.semantic.error};
      }
    `}
`,ar=v.textarea`
  border-radius: ${({theme:r})=>r.radius.base};
  color: ${({theme:r})=>r.colors.foundation.white};
  font-family: ${({theme:r})=>r.typography.fonts.body};
  transition: all ${({theme:r})=>r.durations.fast} ${({theme:r})=>r.easings.easeInOut};
  min-height: 80px;
  
  ${({size:r})=>Xe(r)}
  ${({variant:r,error:a,disabled:n})=>Ze(r,a,n)}
  
  ${({width:r})=>r&&l`
      width: ${typeof r=="number"?`${r}px`:r};
    `}
  
  ${({height:r})=>r&&l`
      height: ${typeof r=="number"?`${r}px`:r};
    `}
  
  ${({autoResize:r})=>r&&l`
      overflow: hidden;
      resize: none;
    `}
  
  &::placeholder {
    color: ${({theme:r})=>r.colors.gray.light};
  }
  
  &:disabled {
    cursor: not-allowed;
  }
  
  &:read-only {
    cursor: default;
    background-color: ${({theme:r})=>r.colors.gray.dark};
  }
`,Q=v.div`
  font-size: ${({theme:r})=>r.typography.fontSizes.xs};
  margin-top: ${({theme:r})=>r.spacing[2]};
  
  ${({error:r,theme:a})=>r?l`
          color: ${a.colors.semantic.error};
        `:l`
          color: ${a.colors.gray.light};
        `}
`,tr=v.div`
  font-size: ${({theme:r})=>r.typography.fontSizes.xs};
  margin-top: ${({theme:r})=>r.spacing[2]};
  text-align: right;
  
  ${({isOverLimit:r,isNearLimit:a,theme:n})=>r?l`
        color: ${n.colors.semantic.error};
      `:a?l`
        color: ${n.colors.semantic.warning};
      `:l`
      color: ${n.colors.gray.light};
    `}
`,ir=v.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({theme:r})=>r.spacing[2]};
  margin-top: ${({theme:r})=>r.spacing[2]};
`,t=({value:r="",onChange:a,placeholder:n,variant:p="default",size:i="md",rows:g,minRows:h=3,maxRows:b,resize:Ve="vertical",autoResize:y=!1,maxLength:u,showCharCount:P=!1,disabled:I=!1,error:x=!1,required:O=!1,readOnly:De=!1,label:N,helperText:f,errorMessage:T,width:_,height:Le,className:Fe,id:Ee,name:Me,"aria-label":He,"aria-describedby":Pe,autoFocus:Ie,onFocus:Oe,onBlur:Ne,onKeyDown:_e,...Ke})=>{const[Ue,K]=d.useState(r),U=d.useRef(null),D=a?r:Ue,L=d.useCallback(()=>{const c=U.current;if(!c||!y)return;c.style.height="auto";let m=c.scrollHeight;if(h){const E=parseInt(getComputedStyle(c).lineHeight),M=parseInt(getComputedStyle(c).paddingTop)+parseInt(getComputedStyle(c).paddingBottom),H=E*h+M;m=Math.max(m,H)}if(b){const E=parseInt(getComputedStyle(c).lineHeight),M=parseInt(getComputedStyle(c).paddingTop)+parseInt(getComputedStyle(c).paddingBottom),H=E*b+M;m=Math.min(m,H)}c.style.height=`${m}px`},[y,h,b]),Ge=c=>{const m=c.target.value;u&&m.length>u||(a?a(m):K(m),setTimeout(L,0))};J.useEffect(()=>{y&&L()},[L,D,y]),J.useEffect(()=>{a&&K(r)},[r,a]);const F=D.length,Ye=u&&F>=u*.9,Je=u&&F>u,w=Ee||`textarea-${Math.random().toString(36).substr(2,9)}`,G=`${w}-helper`,Y=`${w}-error`,Qe=[Pe,f&&!x?G:void 0,x&&T?Y:void 0].filter(Boolean).join(" ")||void 0;return e.jsxs(er,{width:_,className:Fe,children:[N&&e.jsx(rr,{htmlFor:w,required:O,disabled:I,children:N}),e.jsx(ar,{ref:U,id:w,name:Me,value:D,onChange:Ge,placeholder:n,variant:p,size:i,error:x,disabled:I,rows:g||(y?h:void 0),style:{resize:y?"none":Ve},width:_,height:Le,autoResize:y,required:O,readOnly:De,maxLength:u,"aria-label":He,"aria-describedby":Qe,"aria-invalid":x,autoFocus:Ie,onFocus:Oe,onBlur:Ne,onKeyDown:_e,...Ke}),(f&&!x||x&&T||P)&&e.jsxs(ir,{children:[e.jsxs("div",{children:[f&&!x&&e.jsx(Q,{id:G,children:f}),x&&T&&e.jsx(Q,{id:Y,error:!0,children:T})]}),P&&u&&e.jsxs(tr,{isNearLimit:!!Ye,isOverLimit:!!Je,children:[F,"/",u]})]})]})};try{t.displayName="TextArea",t.__docgenInfo={description:"",displayName:"TextArea",props:{value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"filled"'},{value:'"borderless"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},minRows:{defaultValue:{value:"3"},description:"",name:"minRows",required:!1,type:{name:"number"}},maxRows:{defaultValue:null,description:"",name:"maxRows",required:!1,type:{name:"number"}},resize:{defaultValue:{value:"vertical"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"horizontal"'},{value:'"vertical"'},{value:'"both"'}]}},autoResize:{defaultValue:{value:"false"},description:"",name:"autoResize",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},showCharCount:{defaultValue:{value:"false"},description:"",name:"showCharCount",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<HTMLTextAreaElement, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLTextAreaElement, Element>) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((e: KeyboardEvent<HTMLTextAreaElement>) => void)"}}}}}catch{}const cr={title:"UI/TextArea",component:t,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","filled","borderless"]},size:{control:{type:"select"},options:["sm","md","lg"]},resize:{control:{type:"select"},options:["none","vertical","horizontal","both"]}}},j={args:{placeholder:"Enter your message...",variant:"default",size:"md"}},z={render:()=>{const[r,a]=d.useState("");return e.jsx(o,{display:"flex",flexDirection:"column",gap:"lg",p:"md",maxWidth:"500px",children:e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"md",children:"Basic TextArea"}),e.jsx(t,{placeholder:"Type your message here...",value:r,onChange:a,width:"100%"}),e.jsxs(s,{variant:"small",color:"gray",mt:"sm",children:["Current length: ",r.length]})]})})}},C={render:()=>e.jsxs(o,{display:"flex",flexDirection:"column",gap:"lg",p:"md",maxWidth:"500px",children:[e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"sm",children:"Default"}),e.jsx(t,{placeholder:"Default variant...",variant:"default",width:"100%"})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"sm",children:"Filled"}),e.jsx(t,{placeholder:"Filled variant...",variant:"filled",width:"100%"})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"sm",children:"Borderless"}),e.jsx(t,{placeholder:"Borderless variant...",variant:"borderless",width:"100%"})]})]})},S={render:()=>e.jsxs(o,{display:"flex",flexDirection:"column",gap:"lg",p:"md",maxWidth:"500px",children:[e.jsxs("div",{children:[e.jsx(s,{variant:"small",mb:"sm",color:"gray",children:"Small"}),e.jsx(t,{placeholder:"Small size textarea...",size:"sm",width:"100%",rows:2})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"small",mb:"sm",color:"gray",children:"Medium"}),e.jsx(t,{placeholder:"Medium size textarea...",size:"md",width:"100%",rows:3})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"small",mb:"sm",color:"gray",children:"Large"}),e.jsx(t,{placeholder:"Large size textarea...",size:"lg",width:"100%",rows:4})]})]})},A={render:()=>e.jsxs(o,{display:"flex",flexDirection:"column",gap:"lg",p:"md",maxWidth:"500px",children:[e.jsx("div",{children:e.jsx(t,{label:"Message",placeholder:"Enter your message...",helperText:"Please provide detailed information about your request.",width:"100%"})}),e.jsx("div",{children:e.jsx(t,{label:"Required Field",placeholder:"This field is required...",required:!0,helperText:"This information is mandatory for processing.",width:"100%"})}),e.jsx("div",{children:e.jsx(t,{label:"Comments",placeholder:"Additional comments...",helperText:"Optional: Any additional information you'd like to share.",width:"100%",rows:5})})]})},R={render:()=>{const[r,a]=d.useState(""),[n,p]=d.useState(""),[i,g]=d.useState("This text is getting close to the limit and should show warning colors when near maximum length.");return e.jsxs(o,{display:"flex",flexDirection:"column",gap:"lg",p:"md",maxWidth:"500px",children:[e.jsx("div",{children:e.jsx(t,{label:"Short Limit (50 chars)",placeholder:"Type here...",value:r,onChange:a,maxLength:50,showCharCount:!0,width:"100%"})}),e.jsx("div",{children:e.jsx(t,{label:"Medium Limit (200 chars)",placeholder:"Type a longer message...",value:n,onChange:p,maxLength:200,showCharCount:!0,width:"100%",rows:4})}),e.jsx("div",{children:e.jsx(t,{label:"Near Limit Demo (100 chars)",placeholder:"This demonstrates warning colors...",value:i,onChange:g,maxLength:100,showCharCount:!0,helperText:"Watch the character count change colors as you approach the limit.",width:"100%",rows:3})})]})}},$={render:()=>{const[r,a]=d.useState(""),[n,p]=d.useState(""),[i,g]=d.useState(`This textarea will automatically resize as you type more content.

Try adding multiple lines and watch how it grows dynamically!`);return e.jsxs(o,{display:"flex",flexDirection:"column",gap:"lg",p:"md",maxWidth:"500px",children:[e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"sm",children:"Basic Auto-resize"}),e.jsx(t,{placeholder:"Start typing and watch this grow...",value:r,onChange:a,autoResize:!0,width:"100%"})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"sm",children:"Auto-resize with Constraints (3-8 rows)"}),e.jsx(t,{placeholder:"This will grow between 3 and 8 rows...",value:n,onChange:p,autoResize:!0,minRows:3,maxRows:8,width:"100%"})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"sm",children:"Pre-filled Auto-resize"}),e.jsx(t,{label:"Description",value:i,onChange:g,autoResize:!0,minRows:2,maxRows:10,helperText:"This textarea automatically sized to fit the existing content.",width:"100%"})]})]})}},B={render:()=>e.jsxs(o,{display:"flex",flexDirection:"column",gap:"lg",p:"md",maxWidth:"500px",children:[e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"sm",children:"Error State"}),e.jsx(t,{label:"Message",placeholder:"Enter your message...",value:"This message contains errors",error:!0,errorMessage:"Please provide a valid message without special characters.",width:"100%"})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"sm",children:"Disabled State"}),e.jsx(t,{label:"Disabled Field",placeholder:"This field is disabled...",value:"This content cannot be edited",disabled:!0,helperText:"This field is currently not available for editing.",width:"100%"})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"sm",children:"Read-only State"}),e.jsx(t,{label:"Terms & Conditions",value:"These are the terms and conditions that you can read but not modify. This content is displayed for informational purposes only and represents the current agreement between the parties involved.",readOnly:!0,rows:4,helperText:"This content is read-only and cannot be modified.",width:"100%"})]})]})},q={render:()=>e.jsxs(o,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs(o,{display:"flex",gap:"lg",flexWrap:"wrap",children:[e.jsxs("div",{style:{minWidth:"250px"},children:[e.jsx(s,{variant:"body",mb:"sm",children:"No Resize"}),e.jsx(t,{placeholder:"This textarea cannot be resized...",resize:"none",rows:3,width:"100%"})]}),e.jsxs("div",{style:{minWidth:"250px"},children:[e.jsx(s,{variant:"body",mb:"sm",children:"Vertical Resize Only"}),e.jsx(t,{placeholder:"Resize vertically only...",resize:"vertical",rows:3,width:"100%"})]})]}),e.jsxs(o,{display:"flex",gap:"lg",flexWrap:"wrap",children:[e.jsxs("div",{style:{minWidth:"250px"},children:[e.jsx(s,{variant:"body",mb:"sm",children:"Horizontal Resize Only"}),e.jsx(t,{placeholder:"Resize horizontally only...",resize:"horizontal",rows:3,width:"100%"})]}),e.jsxs("div",{style:{minWidth:"250px"},children:[e.jsx(s,{variant:"body",mb:"sm",children:"Both Directions"}),e.jsx(t,{placeholder:"Resize in both directions...",resize:"both",rows:3,width:"100%"})]})]})]})},W={render:()=>{const[r,a]=d.useState(""),[n,p]=d.useState(""),[i,g]=d.useState(`# My Gaming Setup Review

After months of testing various gaming peripherals, here are my thoughts on the latest equipment...`),[h,b]=d.useState("");return e.jsxs(o,{display:"flex",flexDirection:"column",gap:"xl",p:"md",children:[e.jsxs("div",{children:[e.jsx(s,{variant:"h3",mb:"lg",children:"Feedback Form"}),e.jsx(o,{maxWidth:"600px",children:e.jsx(t,{label:"Your Feedback",placeholder:"Tell us about your experience with our gaming products...",value:r,onChange:a,maxLength:500,showCharCount:!0,helperText:"Help us improve by sharing your honest feedback about our products and services.",width:"100%",rows:4})})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"h3",mb:"lg",children:"Code Review Comment"}),e.jsx(o,{maxWidth:"800px",children:e.jsx(t,{label:"Review Comments",placeholder:"Add your code review comments here...",value:n,onChange:p,autoResize:!0,minRows:3,maxRows:10,variant:"filled",helperText:"Provide constructive feedback about the code changes.",width:"100%"})})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"h3",mb:"lg",children:"Blog Post Editor"}),e.jsx(o,{maxWidth:"900px",children:e.jsx(t,{label:"Article Content",placeholder:"Start writing your blog post...",value:i,onChange:g,autoResize:!0,minRows:8,maxRows:20,helperText:"Write your blog post in Markdown format. The editor will grow as you add more content.",width:"100%"})})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"h3",mb:"lg",children:"Support Ticket"}),e.jsx(o,{maxWidth:"700px",children:e.jsx(t,{label:"Issue Description",placeholder:"Please describe the issue you're experiencing in detail...",value:h,onChange:b,required:!0,maxLength:1e3,showCharCount:!0,helperText:"The more details you provide, the better we can assist you. Include steps to reproduce the issue if applicable.",errorMessage:h.length<20&&h.length>0?"Please provide more details (minimum 20 characters)":void 0,error:h.length<20&&h.length>0,width:"100%",rows:6})})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"h3",mb:"lg",children:"Chat Message"}),e.jsxs(o,{maxWidth:"400px",children:[e.jsx(t,{placeholder:"Type your message...",size:"sm",autoResize:!0,minRows:1,maxRows:5,variant:"borderless",width:"100%"}),e.jsxs(o,{display:"flex",justifyContent:"flex-end",gap:"sm",mt:"sm",children:[e.jsx("button",{style:{padding:"4px 12px",fontSize:"12px"},children:"Cancel"}),e.jsx("button",{style:{padding:"4px 12px",fontSize:"12px",backgroundColor:"#4A9EFF",color:"white",border:"none",borderRadius:"4px"},children:"Send"})]})]})]})]})}},k={render:()=>e.jsxs(o,{display:"flex",flexDirection:"column",gap:"lg",p:"md",maxWidth:"600px",children:[e.jsxs("div",{children:[e.jsx(s,{variant:"body",mb:"md",children:"Accessibility Features"}),e.jsx(t,{label:"Accessible TextArea",placeholder:"This textarea follows accessibility best practices...",helperText:"This field has proper labeling, ARIA attributes, and keyboard navigation support.","aria-label":"Main content textarea with accessibility features",required:!0,width:"100%"})]}),e.jsxs("div",{children:[e.jsx(t,{label:"Form Field with Validation",placeholder:"Enter at least 10 characters...",helperText:"Screen readers will announce the validation state and helper text.","aria-describedby":"custom-description",width:"100%"}),e.jsx(s,{id:"custom-description",variant:"small",color:"gray",mt:"sm",children:"Custom description that will be read by screen readers."})]})]})},V={args:{placeholder:"Enter your text here...",variant:"default",size:"md",rows:4,resize:"vertical",autoResize:!1,maxLength:void 0,showCharCount:!1,disabled:!1,error:!1,required:!1,readOnly:!1,label:"Text Area",helperText:"Helper text goes here",width:"400px"},render:r=>e.jsx(o,{display:"flex",justifyContent:"center",p:"md",children:e.jsx(t,{...r})})};var X,Z,ee;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your message...',
    variant: 'default',
    size: 'md'
  }
}`,...(ee=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,te;z.parameters={...z.parameters,docs:{...(re=z.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">\r
        <div>\r
          <Typography variant="body" mb="md">Basic TextArea</Typography>\r
          <TextArea placeholder="Type your message here..." value={value} onChange={setValue} width="100%" />\r
          <Typography variant="small" color="gray" mt="sm">\r
            Current length: {value.length}\r
          </Typography>\r
        </div>\r
      </Box>;
  }
}`,...(te=(ae=z.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ie,se,oe;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">\r
      <div>\r
        <Typography variant="body" mb="sm">Default</Typography>\r
        <TextArea placeholder="Default variant..." variant="default" width="100%" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Filled</Typography>\r
        <TextArea placeholder="Filled variant..." variant="filled" width="100%" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Borderless</Typography>\r
        <TextArea placeholder="Borderless variant..." variant="borderless" width="100%" />\r
      </div>\r
    </Box>
}`,...(oe=(se=C.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,ne,de;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">\r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Small</Typography>\r
        <TextArea placeholder="Small size textarea..." size="sm" width="100%" rows={2} />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Medium</Typography>\r
        <TextArea placeholder="Medium size textarea..." size="md" width="100%" rows={3} />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Large</Typography>\r
        <TextArea placeholder="Large size textarea..." size="lg" width="100%" rows={4} />\r
      </div>\r
    </Box>
}`,...(de=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:de.source}}};var ce,pe,he;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">\r
      <div>\r
        <TextArea label="Message" placeholder="Enter your message..." helperText="Please provide detailed information about your request." width="100%" />\r
      </div>\r
      \r
      <div>\r
        <TextArea label="Required Field" placeholder="This field is required..." required helperText="This information is mandatory for processing." width="100%" />\r
      </div>\r
      \r
      <div>\r
        <TextArea label="Comments" placeholder="Additional comments..." helperText="Optional: Any additional information you'd like to share." width="100%" rows={5} />\r
      </div>\r
    </Box>
}`,...(he=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ue,me,xe;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const [shortText, setShortText] = useState('');
    const [longText, setLongText] = useState('');
    const [nearLimitText, setNearLimitText] = useState('This text is getting close to the limit and should show warning colors when near maximum length.');
    return <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">\r
        <div>\r
          <TextArea label="Short Limit (50 chars)" placeholder="Type here..." value={shortText} onChange={setShortText} maxLength={50} showCharCount width="100%" />\r
        </div>\r
        \r
        <div>\r
          <TextArea label="Medium Limit (200 chars)" placeholder="Type a longer message..." value={longText} onChange={setLongText} maxLength={200} showCharCount width="100%" rows={4} />\r
        </div>\r
        \r
        <div>\r
          <TextArea label="Near Limit Demo (100 chars)" placeholder="This demonstrates warning colors..." value={nearLimitText} onChange={setNearLimitText} maxLength={100} showCharCount helperText="Watch the character count change colors as you approach the limit." width="100%" rows={3} />\r
        </div>\r
      </Box>;
  }
}`,...(xe=(me=R.parameters)==null?void 0:me.docs)==null?void 0:xe.source}}};var ge,ye,ve;$.parameters={...$.parameters,docs:{...(ge=$.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const [basicText, setBasicText] = useState('');
    const [constrainedText, setConstrainedText] = useState('');
    const [longText, setLongText] = useState('This textarea will automatically resize as you type more content.\\n\\nTry adding multiple lines and watch how it grows dynamically!');
    return <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">\r
        <div>\r
          <Typography variant="body" mb="sm">Basic Auto-resize</Typography>\r
          <TextArea placeholder="Start typing and watch this grow..." value={basicText} onChange={setBasicText} autoResize width="100%" />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">Auto-resize with Constraints (3-8 rows)</Typography>\r
          <TextArea placeholder="This will grow between 3 and 8 rows..." value={constrainedText} onChange={setConstrainedText} autoResize minRows={3} maxRows={8} width="100%" />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">Pre-filled Auto-resize</Typography>\r
          <TextArea label="Description" value={longText} onChange={setLongText} autoResize minRows={2} maxRows={10} helperText="This textarea automatically sized to fit the existing content." width="100%" />\r
        </div>\r
      </Box>;
  }
}`,...(ve=(ye=$.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var be,fe,Te;B.parameters={...B.parameters,docs:{...(be=B.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">\r
      <div>\r
        <Typography variant="body" mb="sm">Error State</Typography>\r
        <TextArea label="Message" placeholder="Enter your message..." value="This message contains errors" error errorMessage="Please provide a valid message without special characters." width="100%" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Disabled State</Typography>\r
        <TextArea label="Disabled Field" placeholder="This field is disabled..." value="This content cannot be edited" disabled helperText="This field is currently not available for editing." width="100%" />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Read-only State</Typography>\r
        <TextArea label="Terms & Conditions" value="These are the terms and conditions that you can read but not modify. This content is displayed for informational purposes only and represents the current agreement between the parties involved." readOnly rows={4} helperText="This content is read-only and cannot be modified." width="100%" />\r
      </div>\r
    </Box>
}`,...(Te=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:Te.source}}};var we,je,ze;q.parameters={...q.parameters,docs:{...(we=q.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <Box display="flex" gap="lg" flexWrap="wrap">\r
        <div style={{
        minWidth: '250px'
      }}>\r
          <Typography variant="body" mb="sm">No Resize</Typography>\r
          <TextArea placeholder="This textarea cannot be resized..." resize="none" rows={3} width="100%" />\r
        </div>\r
        \r
        <div style={{
        minWidth: '250px'
      }}>\r
          <Typography variant="body" mb="sm">Vertical Resize Only</Typography>\r
          <TextArea placeholder="Resize vertically only..." resize="vertical" rows={3} width="100%" />\r
        </div>\r
      </Box>\r
      \r
      <Box display="flex" gap="lg" flexWrap="wrap">\r
        <div style={{
        minWidth: '250px'
      }}>\r
          <Typography variant="body" mb="sm">Horizontal Resize Only</Typography>\r
          <TextArea placeholder="Resize horizontally only..." resize="horizontal" rows={3} width="100%" />\r
        </div>\r
        \r
        <div style={{
        minWidth: '250px'
      }}>\r
          <Typography variant="body" mb="sm">Both Directions</Typography>\r
          <TextArea placeholder="Resize in both directions..." resize="both" rows={3} width="100%" />\r
        </div>\r
      </Box>\r
    </Box>
}`,...(ze=(je=q.parameters)==null?void 0:je.docs)==null?void 0:ze.source}}};var Ce,Se,Ae;W.parameters={...W.parameters,docs:{...(Ce=W.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => {
    const [feedback, setFeedback] = useState('');
    const [codeReview, setCodeReview] = useState('');
    const [blogPost, setBlogPost] = useState('# My Gaming Setup Review\\n\\nAfter months of testing various gaming peripherals, here are my thoughts on the latest equipment...');
    const [supportTicket, setSupportTicket] = useState('');
    return <Box display="flex" flexDirection="column" gap="xl" p="md">\r
        <div>\r
          <Typography variant="h3" mb="lg">Feedback Form</Typography>\r
          <Box maxWidth="600px">\r
            <TextArea label="Your Feedback" placeholder="Tell us about your experience with our gaming products..." value={feedback} onChange={setFeedback} maxLength={500} showCharCount helperText="Help us improve by sharing your honest feedback about our products and services." width="100%" rows={4} />\r
          </Box>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="h3" mb="lg">Code Review Comment</Typography>\r
          <Box maxWidth="800px">\r
            <TextArea label="Review Comments" placeholder="Add your code review comments here..." value={codeReview} onChange={setCodeReview} autoResize minRows={3} maxRows={10} variant="filled" helperText="Provide constructive feedback about the code changes." width="100%" />\r
          </Box>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="h3" mb="lg">Blog Post Editor</Typography>\r
          <Box maxWidth="900px">\r
            <TextArea label="Article Content" placeholder="Start writing your blog post..." value={blogPost} onChange={setBlogPost} autoResize minRows={8} maxRows={20} helperText="Write your blog post in Markdown format. The editor will grow as you add more content." width="100%" />\r
          </Box>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="h3" mb="lg">Support Ticket</Typography>\r
          <Box maxWidth="700px">\r
            <TextArea label="Issue Description" placeholder="Please describe the issue you're experiencing in detail..." value={supportTicket} onChange={setSupportTicket} required maxLength={1000} showCharCount helperText="The more details you provide, the better we can assist you. Include steps to reproduce the issue if applicable." errorMessage={supportTicket.length < 20 && supportTicket.length > 0 ? "Please provide more details (minimum 20 characters)" : undefined} error={supportTicket.length < 20 && supportTicket.length > 0} width="100%" rows={6} />\r
          </Box>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="h3" mb="lg">Chat Message</Typography>\r
          <Box maxWidth="400px">\r
            <TextArea placeholder="Type your message..." size="sm" autoResize minRows={1} maxRows={5} variant="borderless" width="100%" />\r
            <Box display="flex" justifyContent="flex-end" gap="sm" mt="sm">\r
              <button style={{
              padding: '4px 12px',
              fontSize: '12px'
            }}>Cancel</button>\r
              <button style={{
              padding: '4px 12px',
              fontSize: '12px',
              backgroundColor: '#4A9EFF',
              color: 'white',
              border: 'none',
              borderRadius: '4px'
            }}>Send</button>\r
            </Box>\r
          </Box>\r
        </div>\r
      </Box>;
  }
}`,...(Ae=(Se=W.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source}}};var Re,$e,Be;k.parameters={...k.parameters,docs:{...(Re=k.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="600px">\r
      <div>\r
        <Typography variant="body" mb="md">Accessibility Features</Typography>\r
        <TextArea label="Accessible TextArea" placeholder="This textarea follows accessibility best practices..." helperText="This field has proper labeling, ARIA attributes, and keyboard navigation support." aria-label="Main content textarea with accessibility features" required width="100%" />\r
      </div>\r
      \r
      <div>\r
        <TextArea label="Form Field with Validation" placeholder="Enter at least 10 characters..." helperText="Screen readers will announce the validation state and helper text." aria-describedby="custom-description" width="100%" />\r
        <Typography id="custom-description" variant="small" color="gray" mt="sm">\r
          Custom description that will be read by screen readers.\r
        </Typography>\r
      </div>\r
    </Box>
}`,...(Be=($e=k.parameters)==null?void 0:$e.docs)==null?void 0:Be.source}}};var qe,We,ke;V.parameters={...V.parameters,docs:{...(qe=V.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your text here...',
    variant: 'default',
    size: 'md',
    rows: 4,
    resize: 'vertical',
    autoResize: false,
    maxLength: undefined,
    showCharCount: false,
    disabled: false,
    error: false,
    required: false,
    readOnly: false,
    label: 'Text Area',
    helperText: 'Helper text goes here',
    width: '400px'
  },
  render: args => <Box display="flex" justifyContent="center" p="md">\r
      <TextArea {...args} />\r
    </Box>
}`,...(ke=(We=V.parameters)==null?void 0:We.docs)==null?void 0:ke.source}}};const pr=["Default","BasicUsage","Variants","Sizes","WithLabels","CharacterLimits","AutoResize","States","ResizeOptions","RealWorldExamples","AccessibilityDemo","Playground"];export{k as AccessibilityDemo,$ as AutoResize,z as BasicUsage,R as CharacterLimits,j as Default,V as Playground,W as RealWorldExamples,q as ResizeOptions,S as Sizes,B as States,C as Variants,A as WithLabels,pr as __namedExportsOrder,cr as default};
