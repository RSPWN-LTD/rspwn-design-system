import{j as e}from"./jsx-runtime-CDt2p4po.js";import{l as o,d as m}from"./styled-components.browser.esm-Byilhkxn.js";import{B as a}from"./Box-D0rAd6Cs.js";import{T as r}from"./Typography-B2ZqsRPU.js";import{B as c}from"./Badge-DBrob01X.js";import"./index-GiUgBvb1.js";const fe=t=>{switch(t){case"sm":return o`
        .timeline-marker {
          width: 24px;
          height: 24px;
          font-size: ${({theme:i})=>i.typography.fontSizes.xs};
        }
        
        .timeline-title {
          font-size: ${({theme:i})=>i.typography.fontSizes.sm};
        }
        
        .timeline-description {
          font-size: ${({theme:i})=>i.typography.fontSizes.xs};
        }
        
        .timeline-timestamp {
          font-size: ${({theme:i})=>i.typography.fontSizes.xs};
        }
        
        .timeline-line {
          width: 2px;
          margin-left: 11px; /* Center on marker */
        }
      `;case"lg":return o`
        .timeline-marker {
          width: 40px;
          height: 40px;
          font-size: ${({theme:i})=>i.typography.fontSizes.base};
        }
        
        .timeline-title {
          font-size: ${({theme:i})=>i.typography.fontSizes.lg};
        }
        
        .timeline-description {
          font-size: ${({theme:i})=>i.typography.fontSizes.base};
        }
        
        .timeline-timestamp {
          font-size: ${({theme:i})=>i.typography.fontSizes.sm};
        }
        
        .timeline-line {
          width: 4px;
          margin-left: 18px; /* Center on marker */
        }
      `;default:return o`
        .timeline-marker {
          width: 32px;
          height: 32px;
          font-size: ${({theme:i})=>i.typography.fontSizes.sm};
        }
        
        .timeline-title {
          font-size: ${({theme:i})=>i.typography.fontSizes.base};
        }
        
        .timeline-description {
          font-size: ${({theme:i})=>i.typography.fontSizes.sm};
        }
        
        .timeline-timestamp {
          font-size: ${({theme:i})=>i.typography.fontSizes.xs};
        }
        
        .timeline-line {
          width: 3px;
          margin-left: 14.5px; /* Center on marker */
        }
      `}},be=m.div`
  display: flex;
  flex-direction: column;
  font-family: ${({theme:t})=>t.typography.fonts.body};
  position: relative;
  
  ${({size:t})=>fe(t)}
  
  ${({disabled:t})=>t&&o`
      opacity: 0.6;
      pointer-events: none;
    `}
`,je=m.div`
  display: flex;
  flex-direction: ${({alternate:t,isEven:i})=>t&&i?"row-reverse":"row"};
  align-items: flex-start;
  position: relative;
  
  ${({isLast:t})=>!t&&o`
      padding-bottom: ${({theme:i})=>i.spacing[6]};
    `}
  
  ${({alternate:t})=>t&&o`
      justify-content: center;
      
      /* Add spacing for alternating layout */
      .timeline-content {
        width: calc(50% - ${({theme:i})=>i.spacing[4]});
      }
    `}
`,Te=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid;
  position: relative;
  z-index: 2;
  flex-shrink: 0;
  transition: all ${({theme:t})=>t.durations.fast} ${({theme:t})=>t.easings.easeInOut};
  font-weight: ${({theme:t})=>t.typography.fontWeights.medium};
  
  ${({alternate:t})=>t&&o`
      margin: 0 ${({theme:i})=>i.spacing[4]};
    `}
  
  ${({status:t,theme:i})=>{switch(t){case"completed":return o`
          background-color: ${i.colors.innovation.primaryBlue};
          border-color: ${i.colors.innovation.primaryBlue};
          color: ${i.colors.foundation.white};
        `;case"active":return o`
          background-color: ${i.colors.foundation.black};
          border-color: ${i.colors.innovation.primaryBlue};
          color: ${i.colors.innovation.primaryBlue};
          box-shadow: 0 0 0 4px rgba(74, 158, 255, 0.2);
        `;case"pending":return o`
          background-color: ${i.colors.foundation.black};
          border-color: ${i.colors.gray.dark};
          color: ${i.colors.gray.dark};
        `;default:return o`
          background-color: ${i.colors.foundation.black};
          border-color: ${i.colors.gray.light};
          color: ${i.colors.foundation.white};
        `}}}
`,we=m.div`
  position: absolute;
  top: 32px; /* Start below marker */
  bottom: 0;
  background-color: ${({status:t,theme:i})=>{switch(t){case"completed":return i.colors.innovation.primaryBlue;case"active":return i.colors.innovation.primaryBlue;default:return i.colors.gray.light}}};
  transition: background-color ${({theme:t})=>t.durations.fast} ${({theme:t})=>t.easings.easeInOut};
  
  ${({alternate:t})=>t&&o`
      left: 50%;
      transform: translateX(-50%);
    `}
`,Be=m.div`
  flex: 1;
  padding-left: ${({alternate:t})=>t?"0":({theme:i})=>i.spacing[4]};
  
  ${({alternate:t,isEven:i})=>t&&o`
      text-align: ${i?"right":"left"};
      padding-left: 0;
      padding-right: ${i?({theme:l})=>l.spacing[4]:"0"};
      padding-left: ${i?"0":({theme:l})=>l.spacing[4]};
    `}
  
  ${({variant:t})=>t==="compact"&&o`
      padding-top: ${({theme:i})=>i.spacing[1]};
    `}
`,ke=m.div`
  font-weight: ${({theme:t})=>t.typography.fontWeights.semibold};
  color: ${({status:t,theme:i})=>{switch(t){case"completed":case"active":return i.colors.foundation.white;case"pending":return i.colors.gray.light;default:return i.colors.foundation.white}}};
  transition: color ${({theme:t})=>t.durations.fast} ${({theme:t})=>t.easings.easeInOut};
  margin-bottom: ${({theme:t})=>t.spacing[1]};
`,Ie=m.div`
  color: ${({status:t,theme:i})=>{switch(t){case"pending":return i.colors.gray.dark;default:return i.colors.gray.light}}};
  line-height: ${({theme:t})=>t.typography.lineHeights.normal};
  margin-bottom: ${({theme:t})=>t.spacing[2]};
`,S=m.div`
  color: ${({theme:t})=>t.colors.gray.light};
  font-weight: ${({theme:t})=>t.typography.fontWeights.medium};
  
  ${({alternate:t,isEven:i})=>t&&o`
      position: absolute;
      top: 0;
      ${i?"right":"left"}: calc(100% + ${({theme:l})=>l.spacing[6]});
      white-space: nowrap;
    `}
`,ze=m.div`
  margin-top: ${({theme:t})=>t.spacing[2]};
  padding: ${({theme:t})=>t.spacing[3]};
  background-color: ${({theme:t})=>t.colors.gray.dark};
  border-radius: ${({theme:t})=>t.radius.base};
  border-left: 3px solid ${({theme:t})=>t.colors.innovation.primaryBlue};
`,$=()=>e.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"currentColor"}}),Ce=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"60%",height:"60%",children:e.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"})}),Se=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"60%",height:"60%",children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 9.5 8 11 6.5l1 1 3.5-3.5L17 5.5z"})}),n=({items:t,alternate:i=!1,size:l="md",variant:p="default",disabled:u=!1,className:he,"aria-label":xe,"aria-describedby":ge,...ye})=>{const ve=s=>{if(s.icon)return s.icon;switch(s.status){case"completed":return e.jsx(Ce,{});case"pending":return e.jsx(Se,{});case"active":return e.jsx($,{});default:return e.jsx($,{})}};return e.jsx(be,{className:he,size:l,variant:p,disabled:u,role:"list","aria-label":xe||"Timeline","aria-describedby":ge,...ye,children:t.map((s,z)=>{const C=z===t.length-1,h=z%2===0;return e.jsxs(je,{isLast:C,alternate:i,isEven:h,variant:p,role:"listitem",children:[!C&&e.jsx(we,{className:"timeline-line",status:s.status,alternate:i}),e.jsx(Te,{className:"timeline-marker",status:s.status||"default",alternate:i,children:ve(s)}),e.jsxs(Be,{className:"timeline-content",alternate:i,isEven:h,variant:p,children:[i&&s.timestamp&&e.jsx(S,{className:"timeline-timestamp",status:s.status||"default",alternate:i,isEven:h,children:s.timestamp}),e.jsx(ke,{className:"timeline-title",status:s.status||"default",children:s.title}),s.description&&e.jsx(Ie,{className:"timeline-description",status:s.status||"default",children:s.description}),!i&&s.timestamp&&e.jsx(S,{className:"timeline-timestamp",status:s.status||"default",alternate:i,isEven:h,children:s.timestamp}),s.content&&e.jsx(ze,{children:s.content})]})]},s.id)})})};try{n.displayName="Timeline",n.__docgenInfo={description:"",displayName:"Timeline",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TimelineItem[]"}},alternate:{defaultValue:{value:"false"},description:"",name:"alternate",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"compact"'},{value:'"detailed"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}}}}}catch{}const Re={title:"UI/Timeline",component:n,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["default","compact","detailed"]},alternate:{control:{type:"boolean"}}}},d=[{id:"1",title:"Project Created",description:"New gaming project initialized with basic structure",timestamp:"2024-01-15",status:"completed"},{id:"2",title:"Design Phase",description:"UI/UX design and wireframing completed",timestamp:"2024-01-22",status:"completed"},{id:"3",title:"Development Started",description:"Core development work in progress",timestamp:"2024-02-01",status:"active"},{id:"4",title:"Testing Phase",description:"Quality assurance and bug testing",timestamp:"2024-02-15",status:"pending"},{id:"5",title:"Release",description:"Production deployment and launch",timestamp:"2024-03-01",status:"pending"}],ue=[{id:"tournament",title:"RSPWN Championship",description:"Annual esports tournament featuring top players from around the world",timestamp:"March 15, 2024",status:"completed"},{id:"update",title:"Game Update 2.5",description:"Major update with new characters, maps, and gameplay mechanics",timestamp:"April 2, 2024",status:"completed"},{id:"event",title:"Summer Gaming Festival",description:"Week-long gaming event with special rewards and exclusive content",timestamp:"June 10, 2024",status:"active"},{id:"beta",title:"Beta Testing Program",description:"Closed beta for upcoming features and content",timestamp:"August 20, 2024",status:"pending"}],$e=[{id:"milestone1",title:"Research & Planning",description:"Market research and technical planning phase",timestamp:"Q1 2024",status:"completed",content:e.jsxs(a,{children:[e.jsx(r,{variant:"small",mb:"sm",children:"Key Deliverables:"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"20px",color:"#9CA3AF"},children:[e.jsx("li",{children:"Market analysis report"}),e.jsx("li",{children:"Technical architecture"}),e.jsx("li",{children:"Resource allocation plan"})]})]})},{id:"milestone2",title:"MVP Development",description:"Minimum viable product development and testing",timestamp:"Q2 2024",status:"completed",content:e.jsxs(a,{children:[e.jsx(r,{variant:"small",mb:"sm",children:"Progress:"}),e.jsxs(a,{display:"flex",gap:"xs",flexWrap:"wrap",children:[e.jsx(c,{size:"sm",variant:"success",children:"Core Features"}),e.jsx(c,{size:"sm",variant:"success",children:"User Auth"}),e.jsx(c,{size:"sm",variant:"success",children:"Basic UI"})]})]})},{id:"milestone3",title:"Feature Enhancement",description:"Advanced features and user experience improvements",timestamp:"Q3 2024",status:"active",content:e.jsxs(a,{children:[e.jsx(r,{variant:"small",mb:"sm",children:"In Progress:"}),e.jsxs(a,{display:"flex",gap:"xs",flexWrap:"wrap",children:[e.jsx(c,{size:"sm",variant:"primary",children:"Real-time Chat"}),e.jsx(c,{size:"sm",variant:"warning",children:"Push Notifications"}),e.jsx(c,{size:"sm",variant:"secondary",children:"Analytics"})]})]})},{id:"milestone4",title:"Production Launch",description:"Full production deployment and public release",timestamp:"Q4 2024",status:"pending"}],x={args:{items:d,size:"md",variant:"default"}},g={render:()=>e.jsx(a,{display:"flex",flexDirection:"column",gap:"lg",p:"md",maxWidth:"600px",children:e.jsxs("div",{children:[e.jsx(r,{variant:"body",mb:"md",children:"Project Timeline"}),e.jsx(n,{items:d})]})})},y={render:()=>e.jsxs(a,{display:"flex",flexDirection:"column",gap:"xl",p:"md",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Small"}),e.jsx(a,{maxWidth:"500px",children:e.jsx(n,{items:d.slice(0,3),size:"sm"})})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Medium"}),e.jsx(a,{maxWidth:"600px",children:e.jsx(n,{items:d.slice(0,3),size:"md"})})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Large"}),e.jsx(a,{maxWidth:"700px",children:e.jsx(n,{items:d.slice(0,3),size:"lg"})})]})]})},v={render:()=>e.jsxs(a,{display:"flex",flexDirection:"column",gap:"xl",p:"md",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"body",mb:"md",children:"Default Variant"}),e.jsx(a,{maxWidth:"600px",children:e.jsx(n,{items:d.slice(0,3),variant:"default"})})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"body",mb:"md",children:"Compact Variant"}),e.jsx(a,{maxWidth:"600px",children:e.jsx(n,{items:d.slice(0,3),variant:"compact"})})]})]})},f={render:()=>e.jsx(a,{display:"flex",flexDirection:"column",gap:"lg",p:"md",maxWidth:"800px",children:e.jsxs("div",{children:[e.jsx(r,{variant:"body",mb:"md",children:"Alternate Timeline Layout"}),e.jsx(n,{items:ue,alternate:!0})]})})},b={render:()=>{const t=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"60%",height:"60%",children:e.jsx("path",{d:"M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM11 13H9v2H8v-2H6v-1h2V10h1v2h2v1zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-3c-.83 0-1.5-.67-1.5-1.5S17.67 9 18.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"})}),i=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"60%",height:"60%",children:e.jsx("path",{d:"M7 4V2c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2h4.5c.8 0 1.5.7 1.5 1.5S22.3 7 21.5 7H20c-.6 2.5-2.6 4.5-5 4.9V14h2c1.1 0 2 .9 2 2v6H5v-6c0-1.1.9-2 2-2h2v-2.1C6.6 11.5 4.6 9.5 4 7H2.5C1.7 7 1 6.3 1 5.5S1.7 4 2.5 4H7z"})}),l=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"60%",height:"60%",children:e.jsx("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})}),p=()=>e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"60%",height:"60%",children:e.jsx("path",{d:"M9.19 6.35c-2.04 2.29-3.44 5.58-3.44 5.58s2.12.21 4.16-.81c1.22-.61 2.27-1.72 2.27-1.72L9.19 6.35zm11.45-2.69C20.64 3.66 20.64 3.66 20.64 3.66s-3.75-.73-6.38 1.91c-2.22 2.22-2.22 5.83-2.22 5.83s3.61 0 5.83-2.22C20.51 6.54 20.64 3.66 20.64 3.66z"})}),u=[{id:"1",title:"Game Development Started",description:"Initial game concept and development kickoff",timestamp:"January 2024",status:"completed",icon:e.jsx(t,{})},{id:"2",title:"Alpha Testing",description:"Internal testing and core gameplay refinement",timestamp:"March 2024",status:"completed",icon:e.jsx(l,{})},{id:"3",title:"Tournament Integration",description:"Esports tournament features and competitive modes",timestamp:"May 2024",status:"active",icon:e.jsx(i,{})},{id:"4",title:"Global Launch",description:"Worldwide release and marketing campaign",timestamp:"July 2024",status:"pending",icon:e.jsx(p,{})}];return e.jsxs(a,{display:"flex",flexDirection:"column",gap:"lg",p:"md",maxWidth:"600px",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"body",mb:"md",children:"Timeline with Custom Icons"}),e.jsx(n,{items:u})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"body",mb:"md",children:"Alternate Layout with Icons"}),e.jsx(n,{items:u,alternate:!0})]})]})}},j={render:()=>e.jsx(a,{display:"flex",flexDirection:"column",gap:"lg",p:"md",maxWidth:"700px",children:e.jsxs("div",{children:[e.jsx(r,{variant:"body",mb:"md",children:"Project Milestones"}),e.jsx(n,{items:$e})]})})},T={render:()=>{const t=[{id:"completed",title:"Completed Task",description:"This task has been successfully completed",timestamp:"2 days ago",status:"completed"},{id:"active",title:"Active Task",description:"This task is currently in progress",timestamp:"Now",status:"active"},{id:"pending",title:"Pending Task",description:"This task is waiting to be started",timestamp:"Tomorrow",status:"pending"},{id:"default",title:"Default Status",description:"This task has default status with no special state",timestamp:"Next week",status:"default"}];return e.jsx(a,{display:"flex",flexDirection:"column",gap:"lg",p:"md",maxWidth:"600px",children:e.jsxs("div",{children:[e.jsx(r,{variant:"body",mb:"md",children:"Different Status States"}),e.jsx(n,{items:t}),e.jsxs(a,{mt:"lg",p:"md",style:{backgroundColor:"#1a1a1a",borderRadius:"8px"},children:[e.jsx(r,{variant:"small",color:"gray",mb:"sm",children:"Status Legend:"}),e.jsxs(a,{display:"flex",flexDirection:"column",gap:"xs",children:[e.jsxs(a,{display:"flex",alignItems:"center",gap:"sm",children:[e.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"50%",backgroundColor:"#4A9EFF"}}),e.jsx(r,{variant:"small",children:"Completed - Blue background"})]}),e.jsxs(a,{display:"flex",alignItems:"center",gap:"sm",children:[e.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"50%",border:"2px solid #4A9EFF",backgroundColor:"transparent"}}),e.jsx(r,{variant:"small",children:"Active - Blue border with glow"})]}),e.jsxs(a,{display:"flex",alignItems:"center",gap:"sm",children:[e.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"50%",border:"2px solid #6B7280",backgroundColor:"transparent"}}),e.jsx(r,{variant:"small",children:"Pending - Gray border"})]}),e.jsxs(a,{display:"flex",alignItems:"center",gap:"sm",children:[e.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"50%",border:"2px solid #9CA3AF",backgroundColor:"transparent"}}),e.jsx(r,{variant:"small",children:"Default - Light gray border"})]})]})]})]})})}},w={render:()=>e.jsxs(a,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"body",mb:"sm",children:"Normal State"}),e.jsx(a,{maxWidth:"600px",children:e.jsx(n,{items:d.slice(0,3)})})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"body",mb:"sm",children:"Disabled State"}),e.jsx(a,{maxWidth:"600px",children:e.jsx(n,{items:d.slice(0,3),disabled:!0})})]})]})},B={render:()=>{const t=[{id:"ordered",title:"Order Placed",description:"Gaming headset order confirmed",timestamp:"Today, 2:30 PM",status:"completed"},{id:"payment",title:"Payment Processed",description:"Payment successfully charged",timestamp:"Today, 2:35 PM",status:"completed"},{id:"preparing",title:"Preparing for Shipment",description:"Item is being prepared for shipping",timestamp:"Today, 4:00 PM",status:"active"},{id:"shipped",title:"Shipped",description:"Package dispatched from warehouse",timestamp:"Tomorrow",status:"pending"},{id:"delivered",title:"Delivered",description:"Package delivered to your address",timestamp:"In 2-3 days",status:"pending"}],i=[{id:"v1",title:"Version 1.0 Release",description:"Initial release with core features",timestamp:"6 months ago",status:"completed",content:e.jsxs(a,{children:[e.jsx(r,{variant:"small",mb:"xs",children:"New Features:"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"16px",fontSize:"14px"},children:[e.jsx("li",{children:"User authentication"}),e.jsx("li",{children:"Basic matchmaking"}),e.jsx("li",{children:"In-game chat"})]})]})},{id:"v15",title:"Version 1.5 Update",description:"Major gameplay improvements and new content",timestamp:"3 months ago",status:"completed",content:e.jsxs(a,{children:[e.jsx(r,{variant:"small",mb:"xs",children:"What\\'s New:"}),e.jsxs(a,{display:"flex",gap:"xs",flexWrap:"wrap",children:[e.jsx(c,{size:"sm",variant:"success",children:"New Maps"}),e.jsx(c,{size:"sm",variant:"success",children:"Ranked Mode"}),e.jsx(c,{size:"sm",variant:"primary",children:"Performance"})]})]})},{id:"v20",title:"Version 2.0 Beta",description:"Complete UI overhaul and advanced features",timestamp:"Last week",status:"active",content:e.jsxs(a,{children:[e.jsx(r,{variant:"small",mb:"xs",children:"Beta Features:"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"16px",fontSize:"14px"},children:[e.jsx("li",{children:"New user interface"}),e.jsx("li",{children:"Advanced statistics"}),e.jsx("li",{children:"Tournament mode"})]})]})}],l=[{id:"first",title:"First Victory",description:"Won your first match",timestamp:"January 15",status:"completed"},{id:"streak",title:"10 Win Streak",description:"Achieved 10 consecutive victories",timestamp:"February 3",status:"completed"},{id:"ranked",title:"Ranked Player",description:"Reached Gold tier in ranked play",timestamp:"March 12",status:"completed"},{id:"tournament",title:"Tournament Participant",description:"Participated in monthly tournament",timestamp:"April 1",status:"active"}];return e.jsxs(a,{display:"flex",flexDirection:"column",gap:"xl",p:"md",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"h3",mb:"lg",children:"Order Tracking"}),e.jsx(a,{maxWidth:"500px",children:e.jsx(n,{items:t})})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"h3",mb:"lg",children:"Update History"}),e.jsx(a,{maxWidth:"700px",children:e.jsx(n,{items:i})})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"h3",mb:"lg",children:"Achievement Progress"}),e.jsx(a,{maxWidth:"600px",children:e.jsx(n,{items:l,alternate:!0})})]})]})}},k={render:()=>e.jsx(a,{display:"flex",flexDirection:"column",gap:"lg",p:"md",maxWidth:"600px",children:e.jsxs("div",{children:[e.jsx(r,{variant:"body",mb:"md",children:"Accessibility Features"}),e.jsx(n,{items:d.slice(0,3),"aria-label":"Project timeline with accessibility features","aria-describedby":"timeline-description"}),e.jsx(r,{id:"timeline-description",variant:"small",color:"gray",mt:"sm",children:"This timeline uses proper ARIA attributes and semantic HTML for screen reader compatibility."})]})})},I={args:{items:ue,size:"md",variant:"default",alternate:!1,disabled:!1},render:t=>e.jsx(a,{display:"flex",justifyContent:"center",p:"md",maxWidth:"800px",margin:"0 auto",children:e.jsx(n,{...t})})};var W,P,D;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    size: 'md',
    variant: 'default'
  }
}`,...(D=(P=x.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var A,M,L;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="600px">\r
      <div>\r
        <Typography variant="body" mb="md">Project Timeline</Typography>\r
        <Timeline items={basicItems} />\r
      </div>\r
    </Box>
}`,...(L=(M=g.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var R,V,N;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="xl" p="md">\r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Small</Typography>\r
        <Box maxWidth="500px">\r
          <Timeline items={basicItems.slice(0, 3)} size="sm" />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Medium</Typography>\r
        <Box maxWidth="600px">\r
          <Timeline items={basicItems.slice(0, 3)} size="md" />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Large</Typography>\r
        <Box maxWidth="700px">\r
          <Timeline items={basicItems.slice(0, 3)} size="lg" />\r
        </Box>\r
      </div>\r
    </Box>
}`,...(N=(V=y.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var F,H,U;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="xl" p="md">\r
      <div>\r
        <Typography variant="body" mb="md">Default Variant</Typography>\r
        <Box maxWidth="600px">\r
          <Timeline items={basicItems.slice(0, 3)} variant="default" />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="md">Compact Variant</Typography>\r
        <Box maxWidth="600px">\r
          <Timeline items={basicItems.slice(0, 3)} variant="compact" />\r
        </Box>\r
      </div>\r
    </Box>
}`,...(U=(H=v.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var G,E,_;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="800px">\r
      <div>\r
        <Typography variant="body" mb="md">Alternate Timeline Layout</Typography>\r
        <Timeline items={gamingEvents} alternate />\r
      </div>\r
    </Box>
}`,...(_=(E=f.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var q,O,J;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const GamepadIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="60%" height="60%">\r
        <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM11 13H9v2H8v-2H6v-1h2V10h1v2h2v1zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-3c-.83 0-1.5-.67-1.5-1.5S17.67 9 18.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />\r
      </svg>;
    const TrophyIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="60%" height="60%">\r
        <path d="M7 4V2c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2h4.5c.8 0 1.5.7 1.5 1.5S22.3 7 21.5 7H20c-.6 2.5-2.6 4.5-5 4.9V14h2c1.1 0 2 .9 2 2v6H5v-6c0-1.1.9-2 2-2h2v-2.1C6.6 11.5 4.6 9.5 4 7H2.5C1.7 7 1 6.3 1 5.5S1.7 4 2.5 4H7z" />\r
      </svg>;
    const CodeIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="60%" height="60%">\r
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />\r
      </svg>;
    const RocketIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="60%" height="60%">\r
        <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.44 5.58s2.12.21 4.16-.81c1.22-.61 2.27-1.72 2.27-1.72L9.19 6.35zm11.45-2.69C20.64 3.66 20.64 3.66 20.64 3.66s-3.75-.73-6.38 1.91c-2.22 2.22-2.22 5.83-2.22 5.83s3.61 0 5.83-2.22C20.51 6.54 20.64 3.66 20.64 3.66z" />\r
      </svg>;
    const itemsWithIcons: TimelineItem[] = [{
      id: '1',
      title: 'Game Development Started',
      description: 'Initial game concept and development kickoff',
      timestamp: 'January 2024',
      status: 'completed',
      icon: <GamepadIcon />
    }, {
      id: '2',
      title: 'Alpha Testing',
      description: 'Internal testing and core gameplay refinement',
      timestamp: 'March 2024',
      status: 'completed',
      icon: <CodeIcon />
    }, {
      id: '3',
      title: 'Tournament Integration',
      description: 'Esports tournament features and competitive modes',
      timestamp: 'May 2024',
      status: 'active',
      icon: <TrophyIcon />
    }, {
      id: '4',
      title: 'Global Launch',
      description: 'Worldwide release and marketing campaign',
      timestamp: 'July 2024',
      status: 'pending',
      icon: <RocketIcon />
    }];
    return <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="600px">\r
        <div>\r
          <Typography variant="body" mb="md">Timeline with Custom Icons</Typography>\r
          <Timeline items={itemsWithIcons} />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="md">Alternate Layout with Icons</Typography>\r
          <Timeline items={itemsWithIcons} alternate />\r
        </div>\r
      </Box>;
  }
}`,...(J=(O=b.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var Q,X,K;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="700px">\r
      <div>\r
        <Typography variant="body" mb="md">Project Milestones</Typography>\r
        <Timeline items={projectMilestones} />\r
      </div>\r
    </Box>
}`,...(K=(X=j.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var Y,Z,ee;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const statusItems: TimelineItem[] = [{
      id: 'completed',
      title: 'Completed Task',
      description: 'This task has been successfully completed',
      timestamp: '2 days ago',
      status: 'completed'
    }, {
      id: 'active',
      title: 'Active Task',
      description: 'This task is currently in progress',
      timestamp: 'Now',
      status: 'active'
    }, {
      id: 'pending',
      title: 'Pending Task',
      description: 'This task is waiting to be started',
      timestamp: 'Tomorrow',
      status: 'pending'
    }, {
      id: 'default',
      title: 'Default Status',
      description: 'This task has default status with no special state',
      timestamp: 'Next week',
      status: 'default'
    }];
    return <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="600px">\r
        <div>\r
          <Typography variant="body" mb="md">Different Status States</Typography>\r
          <Timeline items={statusItems} />\r
          \r
          <Box mt="lg" p="md" style={{
          backgroundColor: '#1a1a1a',
          borderRadius: '8px'
        }}>\r
            <Typography variant="small" color="gray" mb="sm">Status Legend:</Typography>\r
            <Box display="flex" flexDirection="column" gap="xs">\r
              <Box display="flex" alignItems="center" gap="sm">\r
                <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#4A9EFF'
              }} />\r
                <Typography variant="small">Completed - Blue background</Typography>\r
              </Box>\r
              <Box display="flex" alignItems="center" gap="sm">\r
                <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: '2px solid #4A9EFF',
                backgroundColor: 'transparent'
              }} />\r
                <Typography variant="small">Active - Blue border with glow</Typography>\r
              </Box>\r
              <Box display="flex" alignItems="center" gap="sm">\r
                <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: '2px solid #6B7280',
                backgroundColor: 'transparent'
              }} />\r
                <Typography variant="small">Pending - Gray border</Typography>\r
              </Box>\r
              <Box display="flex" alignItems="center" gap="sm">\r
                <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: '2px solid #9CA3AF',
                backgroundColor: 'transparent'
              }} />\r
                <Typography variant="small">Default - Light gray border</Typography>\r
              </Box>\r
            </Box>\r
          </Box>\r
        </div>\r
      </Box>;
  }
}`,...(ee=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ie,ae;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="body" mb="sm">Normal State</Typography>\r
        <Box maxWidth="600px">\r
          <Timeline items={basicItems.slice(0, 3)} />\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Disabled State</Typography>\r
        <Box maxWidth="600px">\r
          <Timeline items={basicItems.slice(0, 3)} disabled />\r
        </Box>\r
      </div>\r
    </Box>
}`,...(ae=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var re,se,ne;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const orderTimeline: TimelineItem[] = [{
      id: 'ordered',
      title: 'Order Placed',
      description: 'Gaming headset order confirmed',
      timestamp: 'Today, 2:30 PM',
      status: 'completed'
    }, {
      id: 'payment',
      title: 'Payment Processed',
      description: 'Payment successfully charged',
      timestamp: 'Today, 2:35 PM',
      status: 'completed'
    }, {
      id: 'preparing',
      title: 'Preparing for Shipment',
      description: 'Item is being prepared for shipping',
      timestamp: 'Today, 4:00 PM',
      status: 'active'
    }, {
      id: 'shipped',
      title: 'Shipped',
      description: 'Package dispatched from warehouse',
      timestamp: 'Tomorrow',
      status: 'pending'
    }, {
      id: 'delivered',
      title: 'Delivered',
      description: 'Package delivered to your address',
      timestamp: 'In 2-3 days',
      status: 'pending'
    }];
    const updateHistory: TimelineItem[] = [{
      id: 'v1',
      title: 'Version 1.0 Release',
      description: 'Initial release with core features',
      timestamp: '6 months ago',
      status: 'completed',
      content: <Box>\r
            <Typography variant="small" mb="xs">New Features:</Typography>\r
            <ul style={{
          margin: 0,
          paddingLeft: '16px',
          fontSize: '14px'
        }}>\r
              <li>User authentication</li>\r
              <li>Basic matchmaking</li>\r
              <li>In-game chat</li>\r
            </ul>\r
          </Box>
    }, {
      id: 'v15',
      title: 'Version 1.5 Update',
      description: 'Major gameplay improvements and new content',
      timestamp: '3 months ago',
      status: 'completed',
      content: <Box>\r
            <Typography variant="small" mb="xs">What\\'s New:</Typography>\r
            <Box display="flex" gap="xs" flexWrap="wrap">\r
              <Badge size="sm" variant="success">New Maps</Badge>\r
              <Badge size="sm" variant="success">Ranked Mode</Badge>\r
              <Badge size="sm" variant="primary">Performance</Badge>\r
            </Box>\r
          </Box>
    }, {
      id: 'v20',
      title: 'Version 2.0 Beta',
      description: 'Complete UI overhaul and advanced features',
      timestamp: 'Last week',
      status: 'active',
      content: <Box>\r
            <Typography variant="small" mb="xs">Beta Features:</Typography>\r
            <ul style={{
          margin: 0,
          paddingLeft: '16px',
          fontSize: '14px'
        }}>\r
              <li>New user interface</li>\r
              <li>Advanced statistics</li>\r
              <li>Tournament mode</li>\r
            </ul>\r
          </Box>
    }];
    const achievementTimeline: TimelineItem[] = [{
      id: 'first',
      title: 'First Victory',
      description: 'Won your first match',
      timestamp: 'January 15',
      status: 'completed'
    }, {
      id: 'streak',
      title: '10 Win Streak',
      description: 'Achieved 10 consecutive victories',
      timestamp: 'February 3',
      status: 'completed'
    }, {
      id: 'ranked',
      title: 'Ranked Player',
      description: 'Reached Gold tier in ranked play',
      timestamp: 'March 12',
      status: 'completed'
    }, {
      id: 'tournament',
      title: 'Tournament Participant',
      description: 'Participated in monthly tournament',
      timestamp: 'April 1',
      status: 'active'
    }];
    return <Box display="flex" flexDirection="column" gap="xl" p="md">\r
        <div>\r
          <Typography variant="h3" mb="lg">Order Tracking</Typography>\r
          <Box maxWidth="500px">\r
            <Timeline items={orderTimeline} />\r
          </Box>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="h3" mb="lg">Update History</Typography>\r
          <Box maxWidth="700px">\r
            <Timeline items={updateHistory} />\r
          </Box>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="h3" mb="lg">Achievement Progress</Typography>\r
          <Box maxWidth="600px">\r
            <Timeline items={achievementTimeline} alternate />\r
          </Box>\r
        </div>\r
      </Box>;
  }
}`,...(ne=(se=B.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,le,de;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="600px">\r
      <div>\r
        <Typography variant="body" mb="md">Accessibility Features</Typography>\r
        <Timeline items={basicItems.slice(0, 3)} aria-label="Project timeline with accessibility features" aria-describedby="timeline-description" />\r
        <Typography id="timeline-description" variant="small" color="gray" mt="sm">\r
          This timeline uses proper ARIA attributes and semantic HTML for screen reader compatibility.\r
        </Typography>\r
      </div>\r
    </Box>
}`,...(de=(le=k.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,me,pe;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    items: gamingEvents,
    size: 'md',
    variant: 'default',
    alternate: false,
    disabled: false
  },
  render: args => <Box display="flex" justifyContent="center" p="md" maxWidth="800px" margin="0 auto">\r
      <Timeline {...args} />\r
    </Box>
}`,...(pe=(me=I.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const Ve=["Default","BasicUsage","Sizes","Variants","AlternateLayout","WithCustomIcons","WithCustomContent","DifferentStatuses","States","RealWorldExamples","AccessibilityDemo","Playground"];export{k as AccessibilityDemo,f as AlternateLayout,g as BasicUsage,x as Default,T as DifferentStatuses,I as Playground,B as RealWorldExamples,y as Sizes,w as States,v as Variants,j as WithCustomContent,b as WithCustomIcons,Ve as __namedExportsOrder,Re as default};
