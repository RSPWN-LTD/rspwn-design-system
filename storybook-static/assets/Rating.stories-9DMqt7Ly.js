import{j as a}from"./jsx-runtime-CDt2p4po.js";import{r as o}from"./index-GiUgBvb1.js";import{l as m,d as v}from"./styled-components.browser.esm-Byilhkxn.js";import{B as l}from"./Box-C_K3nAud.js";import{T as r}from"./Typography-CzMVeEUw.js";import"./propFilters-BGSNtaQt.js";const Ea=e=>{switch(e){case"sm":return m`
        .rating-star {
          width: 16px;
          height: 16px;
          font-size: 16px;
        }
        
        .rating-label {
          font-size: ${({theme:n})=>n.typography.fontSizes.xs};
        }
        
        .rating-helper {
          font-size: ${({theme:n})=>n.typography.fontSizes.xs};
        }
      `;case"lg":return m`
        .rating-star {
          width: 32px;
          height: 32px;
          font-size: 32px;
        }
        
        .rating-label {
          font-size: ${({theme:n})=>n.typography.fontSizes.base};
        }
        
        .rating-helper {
          font-size: ${({theme:n})=>n.typography.fontSizes.sm};
        }
      `;default:return m`
        .rating-star {
          width: 24px;
          height: 24px;
          font-size: 24px;
        }
        
        .rating-label {
          font-size: ${({theme:n})=>n.typography.fontSizes.sm};
        }
        
        .rating-helper {
          font-size: ${({theme:n})=>n.typography.fontSizes.xs};
        }
      `}},Aa=v.div`
  display: flex;
  flex-direction: column;
  font-family: ${({theme:e})=>e.typography.fonts.body};
  
  ${({size:e})=>Ea(e)}
  
  ${({disabled:e})=>e&&m`
      opacity: 0.6;
      cursor: not-allowed;
    `}
`,qa=v.label`
  font-weight: ${({theme:e})=>e.typography.fontWeights.medium};
  color: ${({theme:e})=>e.colors.foundation.white};
  margin-bottom: ${({theme:e})=>e.spacing[2]};
  
  ${({disabled:e})=>e&&m`
      opacity: 0.6;
    `}
`,La=v.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
  cursor: ${({readOnly:e,disabled:n})=>n?"not-allowed":e?"default":"pointer"};
  
  ${({readOnly:e,disabled:n})=>!e&&!n&&m`
      &:focus-within {
        outline: 2px solid ${({theme:i})=>i.colors.innovation.primaryBlue};
        outline-offset: 2px;
        border-radius: ${({theme:i})=>i.radius.sm};
      }
    `}
`,Na=v.div`
  position: relative;
  cursor: ${({readOnly:e,disabled:n})=>n?"not-allowed":e?"default":"pointer"};
  transition: all ${({theme:e})=>e.durations.fast} ${({theme:e})=>e.easings.easeInOut};
  border-radius: ${({theme:e})=>e.radius.sm};
  
  ${({readOnly:e,disabled:n})=>!e&&!n&&m`
      &:focus {
        outline: 2px solid ${({theme:i})=>i.colors.innovation.primaryBlue};
        outline-offset: 2px;
      }
    `}
  
  .star-bg {
    color: ${({theme:e})=>e.colors.gray.light};
  }
  
  .star-fill {
    position: absolute;
    top: 0;
    left: 0;
    color: ${({theme:e})=>e.colors.innovation.primaryBlue};
    overflow: hidden;
    transition: all ${({theme:e})=>e.durations.fast} ${({theme:e})=>e.easings.easeInOut};
    
    ${({filled:e})=>m`
      width: ${e*100}%;
    `}
  }
  
  ${({hover:e,theme:n})=>e&&m`
      .star-fill {
        color: ${n.colors.innovation.primaryBlue};
        filter: brightness(1.1);
      }
    `}
`,L=v.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`,Ga=v.div`
  color: ${({theme:e})=>e.colors.gray.light};
  margin-top: ${({theme:e})=>e.spacing[2]};
`,N=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"100%",height:"100%",children:a.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})}),t=({value:e=0,onChange:n,maxRating:i=5,allowHalf:d=!1,readOnly:c=!1,size:u="md",icon:Ta,emptyIcon:wa,disabled:x=!1,label:P,helperText:I,className:Sa,id:Ca,name:Ua,"aria-label":Ba,"aria-describedby":za,onFocus:Ha,onBlur:k,...Oa})=>{const[b,V]=o.useState(null),y=!c&&!x,f=b!==null?b:e,W=o.useCallback(s=>{y&&(n==null||n(s))},[y,n]),$=o.useCallback(s=>{y&&V(s)},[y]),Da=o.useCallback((s,h)=>{if(!y)return;const p=d?.5:1;let g=e;switch(s.key){case"ArrowRight":case"ArrowUp":s.preventDefault(),g=Math.min(i,e+p);break;case"ArrowLeft":case"ArrowDown":s.preventDefault(),g=Math.max(0,e-p);break;case"Home":s.preventDefault(),g=d?.5:1;break;case"End":s.preventDefault(),g=i;break;case"Enter":case" ":s.preventDefault(),g=h+1;break;default:return}n==null||n(g)},[y,d,i,e,n]),Ia=o.useCallback(s=>{const h=s+1;return f>=h?1:f>s&&f<h?f-s:0},[f]),M=Ca||`rating-${Math.random().toString(36).substr(2,9)}`,E=`${M}-helper`,ka=[za,I?E:void 0].filter(Boolean).join(" ")||void 0,$a=Ta||a.jsx(N,{}),Ma=wa||a.jsx(N,{});return a.jsxs(Aa,{className:Sa,size:u,disabled:x,...Oa,children:[P&&a.jsx(qa,{htmlFor:M,disabled:x,className:"rating-label",children:P}),a.jsx(La,{id:M,readOnly:c,disabled:x,tabIndex:y?0:-1,role:"slider","aria-label":Ba||`Rating: ${e} out of ${i} stars`,"aria-describedby":ka,"aria-valuemin":0,"aria-valuemax":i,"aria-valuenow":e,"aria-readonly":c,"aria-disabled":x,onFocus:Ha,onBlur:s=>{V(null),k==null||k(s)},onMouseLeave:()=>$(null),onKeyDown:s=>Da(s,Math.floor(e)),children:Array.from({length:i},(s,h)=>{const p=h,g=Ia(p),Pa=b!==null&&b>p;return a.jsxs(Na,{filled:g,hover:Pa,readOnly:c,disabled:x,className:"rating-star",tabIndex:-1,onClick:()=>{W(p+1)},onMouseEnter:()=>$(p+1),onMouseMove:A=>{if(!d)return;const q=A.currentTarget.getBoundingClientRect(),Va=A.clientX-q.left<q.width/2,Wa=p+(Va?.5:1);$(Wa)},children:[a.jsx(L,{className:"star-bg",children:Ma}),a.jsx(L,{className:"star-fill",children:$a})]},p)})}),I&&a.jsx(Ga,{id:E,className:"rating-helper",children:I})]})};try{t.displayName="Rating",t.__docgenInfo={description:"",displayName:"Rating",props:{value:{defaultValue:{value:"0"},description:"",name:"value",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: number) => void)"}},maxRating:{defaultValue:{value:"5"},description:"",name:"maxRating",required:!1,type:{name:"number"}},allowHalf:{defaultValue:{value:"false"},description:"",name:"allowHalf",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},emptyIcon:{defaultValue:null,description:"",name:"emptyIcon",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<HTMLDivElement, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLDivElement, Element>) => void)"}}}}}catch{}const Za={title:"UI/Rating",component:t,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},maxRating:{control:{type:"number",min:1,max:10,step:1}},value:{control:{type:"number",min:0,max:5,step:.5}}}},R={args:{value:3,size:"md",maxRating:5}},j={render:()=>{const[e,n]=o.useState(3.5);return a.jsx(l,{display:"flex",flexDirection:"column",gap:"lg",p:"md",maxWidth:"400px",children:a.jsxs("div",{children:[a.jsx(r,{variant:"body",mb:"md",children:"Interactive Rating"}),a.jsx(t,{label:"Rate this product",value:e,onChange:n,allowHalf:!0,helperText:"Click on stars to rate"}),a.jsxs(r,{variant:"small",color:"gray",mt:"sm",children:["Current rating: ",e," stars"]})]})})}},T={render:()=>a.jsxs(l,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Small"}),a.jsx(t,{value:4,size:"sm",readOnly:!0})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Medium"}),a.jsx(t,{value:4,size:"md",readOnly:!0})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"sm",color:"gray",children:"Large"}),a.jsx(t,{value:4,size:"lg",readOnly:!0})]})]})},w={render:()=>{const[e,n]=o.useState(2.5),[i,d]=o.useState(3.5);return a.jsxs(l,{display:"flex",flexDirection:"column",gap:"lg",p:"md",maxWidth:"500px",children:[a.jsxs("div",{children:[a.jsx(r,{variant:"body",mb:"sm",children:"Half Star Support"}),a.jsx(t,{label:"Product Quality",value:e,onChange:n,allowHalf:!0,helperText:"Supports half-star ratings for more precise feedback"}),a.jsxs(r,{variant:"small",color:"gray",mt:"xs",children:["Rating: ",e,"/5"]})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"body",mb:"sm",children:"Precise Ratings"}),a.jsx(t,{label:"User Experience",value:i,onChange:d,allowHalf:!0,size:"lg",helperText:"Large size with half-star precision"}),a.jsxs(r,{variant:"small",color:"gray",mt:"xs",children:["Rating: ",i,"/5"]})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"body",mb:"sm",children:"Read-only Half Stars"}),a.jsxs(l,{display:"flex",flexDirection:"column",gap:"sm",children:[a.jsx(t,{value:1.5,readOnly:!0,allowHalf:!0}),a.jsx(t,{value:2.5,readOnly:!0,allowHalf:!0}),a.jsx(t,{value:3.5,readOnly:!0,allowHalf:!0}),a.jsx(t,{value:4.5,readOnly:!0,allowHalf:!0})]})]})]})}},S={render:()=>a.jsx(l,{display:"flex",flexDirection:"column",gap:"lg",p:"md",maxWidth:"400px",children:a.jsxs("div",{children:[a.jsx(r,{variant:"body",mb:"md",children:"Product Ratings"}),a.jsxs(l,{display:"flex",flexDirection:"column",gap:"md",children:[a.jsxs("div",{children:[a.jsxs(l,{display:"flex",justifyContent:"space-between",alignItems:"center",mb:"xs",children:[a.jsx(r,{variant:"small",children:"Gaming Headset"}),a.jsx(r,{variant:"small",color:"gray",children:"4.5/5"})]}),a.jsx(t,{value:4.5,readOnly:!0,allowHalf:!0,size:"sm"})]}),a.jsxs("div",{children:[a.jsxs(l,{display:"flex",justifyContent:"space-between",alignItems:"center",mb:"xs",children:[a.jsx(r,{variant:"small",children:"Mechanical Keyboard"}),a.jsx(r,{variant:"small",color:"gray",children:"4.0/5"})]}),a.jsx(t,{value:4,readOnly:!0,size:"sm"})]}),a.jsxs("div",{children:[a.jsxs(l,{display:"flex",justifyContent:"space-between",alignItems:"center",mb:"xs",children:[a.jsx(r,{variant:"small",children:"Gaming Mouse"}),a.jsx(r,{variant:"small",color:"gray",children:"3.5/5"})]}),a.jsx(t,{value:3.5,readOnly:!0,allowHalf:!0,size:"sm"})]}),a.jsxs("div",{children:[a.jsxs(l,{display:"flex",justifyContent:"space-between",alignItems:"center",mb:"xs",children:[a.jsx(r,{variant:"small",children:"Monitor Stand"}),a.jsx(r,{variant:"small",color:"gray",children:"5.0/5"})]}),a.jsx(t,{value:5,readOnly:!0,size:"sm"})]})]})]})})},C={render:()=>{const[e,n]=o.useState(2),[i,d]=o.useState(7);return a.jsxs(l,{display:"flex",flexDirection:"column",gap:"lg",p:"md",maxWidth:"500px",children:[a.jsxs("div",{children:[a.jsx(r,{variant:"body",mb:"sm",children:"3-Star Rating System"}),a.jsx(t,{label:"Difficulty Level",value:e,onChange:n,maxRating:3,helperText:"Rate difficulty from 1 to 3 stars"}),a.jsxs(r,{variant:"small",color:"gray",mt:"xs",children:["Difficulty: ",e,"/3 (",e===1?"Easy":e===2?"Medium":"Hard",")"]})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"body",mb:"sm",children:"10-Star Rating System"}),a.jsx(t,{label:"Overall Satisfaction",value:i,onChange:d,maxRating:10,size:"sm",helperText:"Rate your overall satisfaction from 1 to 10 stars"}),a.jsxs(r,{variant:"small",color:"gray",mt:"xs",children:["Satisfaction: ",i,"/10"]})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"body",mb:"sm",children:"Read-only 7-Star System"}),a.jsxs(l,{display:"flex",flexDirection:"column",gap:"sm",children:[a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"xs",children:"Game Graphics: 6/7"}),a.jsx(t,{value:6,maxRating:7,readOnly:!0,size:"sm"})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"xs",children:"Sound Quality: 5/7"}),a.jsx(t,{value:5,maxRating:7,readOnly:!0,size:"sm"})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"xs",children:"Gameplay: 7/7"}),a.jsx(t,{value:7,maxRating:7,readOnly:!0,size:"sm"})]})]})]})]})}},B={render:()=>{const[e,n]=o.useState(3),[i,d]=o.useState(2),c=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"100%",height:"100%",children:a.jsx("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})}),u=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"100%",height:"100%",children:a.jsx("path",{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"})});return a.jsxs(l,{display:"flex",flexDirection:"column",gap:"lg",p:"md",maxWidth:"500px",children:[a.jsxs("div",{children:[a.jsx(r,{variant:"body",mb:"sm",children:"Heart Rating"}),a.jsx(t,{label:"How much do you love this?",value:e,onChange:n,icon:a.jsx(c,{}),helperText:"Rate with hearts instead of stars",size:"lg"}),a.jsxs(r,{variant:"small",color:"gray",mt:"xs",children:["Love level: ",e,"/5 hearts"]})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"body",mb:"sm",children:"Thumbs Up Rating"}),a.jsx(t,{label:"Would you recommend this?",value:i,onChange:d,icon:a.jsx(u,{}),maxRating:3,helperText:"Rate with thumbs up (max 3)"}),a.jsxs(r,{variant:"small",color:"gray",mt:"xs",children:["Recommendation: ",i,"/3 thumbs up"]})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"body",mb:"sm",children:"Mixed Icon Display"}),a.jsxs(l,{display:"flex",flexDirection:"column",gap:"sm",children:[a.jsx(t,{value:4,icon:a.jsx(c,{}),readOnly:!0,size:"sm"}),a.jsx(t,{value:2,icon:a.jsx(u,{}),maxRating:3,readOnly:!0,size:"sm"})]})]})]})}},z={render:()=>{const[e,n]=o.useState(3);return a.jsxs(l,{display:"flex",flexDirection:"column",gap:"lg",p:"md",maxWidth:"400px",children:[a.jsxs("div",{children:[a.jsx(r,{variant:"body",mb:"sm",children:"Normal State"}),a.jsx(t,{label:"Rate this experience",value:e,onChange:n,helperText:"Click to rate or use arrow keys"})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"body",mb:"sm",children:"Read-only State"}),a.jsx(t,{label:"Average Rating",value:4.2,readOnly:!0,allowHalf:!0,helperText:"This rating cannot be changed"})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"body",mb:"sm",children:"Disabled State"}),a.jsx(t,{label:"Unavailable Rating",value:2,disabled:!0,helperText:"Rating is currently disabled"})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"body",mb:"sm",children:"Different Values"}),a.jsxs(l,{display:"flex",flexDirection:"column",gap:"sm",children:[a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"xs",children:"No rating (0 stars)"}),a.jsx(t,{value:0,readOnly:!0,size:"sm"})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"xs",children:"Perfect rating (5 stars)"}),a.jsx(t,{value:5,readOnly:!0,size:"sm"})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"xs",children:"Partial rating (2.5 stars)"}),a.jsx(t,{value:2.5,readOnly:!0,allowHalf:!0,size:"sm"})]})]})]})]})}},H={render:()=>{const[e,n]=o.useState(0),[i,d]=o.useState(0),[c,u]=o.useState(0);return a.jsxs(l,{display:"flex",flexDirection:"column",gap:"xl",p:"md",children:[a.jsxs("div",{children:[a.jsx(r,{variant:"h3",mb:"lg",children:"Product Review"}),a.jsxs(l,{maxWidth:"500px",display:"flex",flexDirection:"column",gap:"lg",children:[a.jsx("div",{children:a.jsx(t,{label:"Product Quality",value:e,onChange:n,allowHalf:!0,helperText:"How would you rate the quality of this gaming headset?"})}),a.jsx("div",{children:a.jsx(t,{label:"Customer Service",value:i,onChange:d,allowHalf:!0,helperText:"Rate your experience with our customer support"})}),a.jsx("div",{children:a.jsx(t,{label:"Overall Experience",value:c,onChange:u,allowHalf:!0,size:"lg",helperText:"Your overall satisfaction with your purchase"})}),(e>0||i>0||c>0)&&a.jsxs(l,{p:"md",style:{backgroundColor:"#1a1a1a",borderRadius:"8px"},children:[a.jsx(r,{variant:"small",color:"gray",mb:"sm",children:"Review Summary:"}),a.jsxs(l,{display:"flex",flexDirection:"column",gap:"xs",children:[e>0&&a.jsxs(r,{variant:"small",children:["Product Quality: ",e,"/5"]}),i>0&&a.jsxs(r,{variant:"small",children:["Customer Service: ",i,"/5"]}),c>0&&a.jsxs(r,{variant:"small",children:["Overall: ",c,"/5"]})]})]})]})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"h3",mb:"lg",children:"Game Reviews"}),a.jsxs(l,{display:"flex",flexDirection:"column",gap:"md",maxWidth:"600px",children:[a.jsxs(l,{p:"md",style:{backgroundColor:"#1a1a1a",borderRadius:"8px"},children:[a.jsxs(l,{display:"flex",justifyContent:"space-between",alignItems:"flex-start",mb:"sm",children:[a.jsx(r,{variant:"body",children:"Cyberpunk 2077"}),a.jsx(r,{variant:"small",color:"gray",children:"4.2/5"})]}),a.jsx(t,{value:4.2,readOnly:!0,allowHalf:!0,size:"sm"}),a.jsx(r,{variant:"small",color:"gray",mt:"xs",children:'"Amazing graphics and storyline. Some minor bugs but overall excellent."'})]}),a.jsxs(l,{p:"md",style:{backgroundColor:"#1a1a1a",borderRadius:"8px"},children:[a.jsxs(l,{display:"flex",justifyContent:"space-between",alignItems:"flex-start",mb:"sm",children:[a.jsx(r,{variant:"body",children:"The Witcher 3"}),a.jsx(r,{variant:"small",color:"gray",children:"5.0/5"})]}),a.jsx(t,{value:5,readOnly:!0,size:"sm"}),a.jsx(r,{variant:"small",color:"gray",mt:"xs",children:'"Perfect RPG experience. Incredible world-building and character development."'})]}),a.jsxs(l,{p:"md",style:{backgroundColor:"#1a1a1a",borderRadius:"8px"},children:[a.jsxs(l,{display:"flex",justifyContent:"space-between",alignItems:"flex-start",mb:"sm",children:[a.jsx(r,{variant:"body",children:"Valorant"}),a.jsx(r,{variant:"small",color:"gray",children:"3.5/5"})]}),a.jsx(t,{value:3.5,readOnly:!0,allowHalf:!0,size:"sm"}),a.jsx(r,{variant:"small",color:"gray",mt:"xs",children:'"Good competitive shooter but can be frustrating at times."'})]})]})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"h3",mb:"lg",children:"Skill Assessment"}),a.jsx(l,{maxWidth:"400px",children:a.jsxs(l,{display:"flex",flexDirection:"column",gap:"md",children:[a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"sm",children:"React Development"}),a.jsx(t,{value:4,maxRating:5,readOnly:!0})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"sm",children:"TypeScript"}),a.jsx(t,{value:3,maxRating:5,readOnly:!0})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"sm",children:"UI/UX Design"}),a.jsx(t,{value:3.5,maxRating:5,readOnly:!0,allowHalf:!0})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"small",mb:"sm",children:"Game Design"}),a.jsx(t,{value:2,maxRating:5,readOnly:!0})]})]})})]})]})}},O={render:()=>a.jsxs(l,{display:"flex",flexDirection:"column",gap:"lg",p:"md",maxWidth:"500px",children:[a.jsxs("div",{children:[a.jsx(r,{variant:"body",mb:"md",children:"Accessibility Features"}),a.jsx(t,{label:"Accessible Rating Component",value:3,helperText:"Use arrow keys to navigate, Enter or Space to select. This rating follows accessibility best practices.","aria-label":"Product rating with full keyboard support"})]}),a.jsxs("div",{children:[a.jsx(t,{label:"Keyboard Navigation Demo",value:2.5,allowHalf:!0,helperText:"Try using Home/End keys for quick navigation to min/max values.","aria-describedby":"custom-description"}),a.jsx(r,{id:"custom-description",variant:"small",color:"gray",mt:"sm",children:"Custom ARIA description for screen readers providing additional context."})]}),a.jsxs("div",{children:[a.jsx(r,{variant:"body",mb:"sm",children:"Screen Reader Friendly"}),a.jsx(t,{value:4,readOnly:!0,"aria-label":"Customer satisfaction rating: 4 out of 5 stars",helperText:"Screen readers will announce the current rating and total possible stars."})]})]})},D={args:{value:3,maxRating:5,allowHalf:!1,readOnly:!1,size:"md",disabled:!1,label:"Rating",helperText:"Click stars to rate"},render:e=>a.jsx(l,{display:"flex",justifyContent:"center",p:"md",children:a.jsx(t,{...e})})};var G,U,_;R.parameters={...R.parameters,docs:{...(G=R.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    value: 3,
    size: 'md',
    maxRating: 5
  }
}`,...(_=(U=R.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var F,Q,K;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [rating, setRating] = useState(3.5);
    return <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="400px">\r
        <div>\r
          <Typography variant="body" mb="md">Interactive Rating</Typography>\r
          <Rating label="Rate this product" value={rating} onChange={setRating} allowHalf helperText="Click on stars to rate" />\r
          <Typography variant="small" color="gray" mt="sm">\r
            Current rating: {rating} stars\r
          </Typography>\r
        </div>\r
      </Box>;
  }
}`,...(K=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:K.source}}};var X,Y,J;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Small</Typography>\r
        <Rating value={4} size="sm" readOnly />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Medium</Typography>\r
        <Rating value={4} size="md" readOnly />\r
      </div>\r
      \r
      <div>\r
        <Typography variant="small" mb="sm" color="gray">Large</Typography>\r
        <Rating value={4} size="lg" readOnly />\r
      </div>\r
    </Box>
}`,...(J=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Z,aa,ea;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [basicRating, setBasicRating] = useState(2.5);
    const [preciseRating, setPreciseRating] = useState(3.5);
    return <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">\r
        <div>\r
          <Typography variant="body" mb="sm">Half Star Support</Typography>\r
          <Rating label="Product Quality" value={basicRating} onChange={setBasicRating} allowHalf helperText="Supports half-star ratings for more precise feedback" />\r
          <Typography variant="small" color="gray" mt="xs">\r
            Rating: {basicRating}/5\r
          </Typography>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">Precise Ratings</Typography>\r
          <Rating label="User Experience" value={preciseRating} onChange={setPreciseRating} allowHalf size="lg" helperText="Large size with half-star precision" />\r
          <Typography variant="small" color="gray" mt="xs">\r
            Rating: {preciseRating}/5\r
          </Typography>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">Read-only Half Stars</Typography>\r
          <Box display="flex" flexDirection="column" gap="sm">\r
            <Rating value={1.5} readOnly allowHalf />\r
            <Rating value={2.5} readOnly allowHalf />\r
            <Rating value={3.5} readOnly allowHalf />\r
            <Rating value={4.5} readOnly allowHalf />\r
          </Box>\r
        </div>\r
      </Box>;
  }
}`,...(ea=(aa=w.parameters)==null?void 0:aa.docs)==null?void 0:ea.source}}};var ra,ta,na;S.parameters={...S.parameters,docs:{...(ra=S.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="400px">\r
      <div>\r
        <Typography variant="body" mb="md">Product Ratings</Typography>\r
        <Box display="flex" flexDirection="column" gap="md">\r
          <div>\r
            <Box display="flex" justifyContent="space-between" alignItems="center" mb="xs">\r
              <Typography variant="small">Gaming Headset</Typography>\r
              <Typography variant="small" color="gray">4.5/5</Typography>\r
            </Box>\r
            <Rating value={4.5} readOnly allowHalf size="sm" />\r
          </div>\r
          \r
          <div>\r
            <Box display="flex" justifyContent="space-between" alignItems="center" mb="xs">\r
              <Typography variant="small">Mechanical Keyboard</Typography>\r
              <Typography variant="small" color="gray">4.0/5</Typography>\r
            </Box>\r
            <Rating value={4} readOnly size="sm" />\r
          </div>\r
          \r
          <div>\r
            <Box display="flex" justifyContent="space-between" alignItems="center" mb="xs">\r
              <Typography variant="small">Gaming Mouse</Typography>\r
              <Typography variant="small" color="gray">3.5/5</Typography>\r
            </Box>\r
            <Rating value={3.5} readOnly allowHalf size="sm" />\r
          </div>\r
          \r
          <div>\r
            <Box display="flex" justifyContent="space-between" alignItems="center" mb="xs">\r
              <Typography variant="small">Monitor Stand</Typography>\r
              <Typography variant="small" color="gray">5.0/5</Typography>\r
            </Box>\r
            <Rating value={5} readOnly size="sm" />\r
          </div>\r
        </Box>\r
      </div>\r
    </Box>
}`,...(na=(ta=S.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var la,ia,sa;C.parameters={...C.parameters,docs:{...(la=C.parameters)==null?void 0:la.docs,source:{originalSource:`{
  render: () => {
    const [rating3, setRating3] = useState(2);
    const [rating10, setRating10] = useState(7);
    return <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">\r
        <div>\r
          <Typography variant="body" mb="sm">3-Star Rating System</Typography>\r
          <Rating label="Difficulty Level" value={rating3} onChange={setRating3} maxRating={3} helperText="Rate difficulty from 1 to 3 stars" />\r
          <Typography variant="small" color="gray" mt="xs">\r
            Difficulty: {rating3}/3 ({rating3 === 1 ? 'Easy' : rating3 === 2 ? 'Medium' : 'Hard'})\r
          </Typography>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">10-Star Rating System</Typography>\r
          <Rating label="Overall Satisfaction" value={rating10} onChange={setRating10} maxRating={10} size="sm" helperText="Rate your overall satisfaction from 1 to 10 stars" />\r
          <Typography variant="small" color="gray" mt="xs">\r
            Satisfaction: {rating10}/10\r
          </Typography>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">Read-only 7-Star System</Typography>\r
          <Box display="flex" flexDirection="column" gap="sm">\r
            <div>\r
              <Typography variant="small" mb="xs">Game Graphics: 6/7</Typography>\r
              <Rating value={6} maxRating={7} readOnly size="sm" />\r
            </div>\r
            <div>\r
              <Typography variant="small" mb="xs">Sound Quality: 5/7</Typography>\r
              <Rating value={5} maxRating={7} readOnly size="sm" />\r
            </div>\r
            <div>\r
              <Typography variant="small" mb="xs">Gameplay: 7/7</Typography>\r
              <Rating value={7} maxRating={7} readOnly size="sm" />\r
            </div>\r
          </Box>\r
        </div>\r
      </Box>;
  }
}`,...(sa=(ia=C.parameters)==null?void 0:ia.docs)==null?void 0:sa.source}}};var oa,da,ca;B.parameters={...B.parameters,docs:{...(oa=B.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  render: () => {
    const [heartRating, setHeartRating] = useState(3);
    const [thumbRating, setThumbRating] = useState(2);
    const HeartIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">\r
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />\r
      </svg>;
    const ThumbIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">\r
        <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />\r
      </svg>;
    return <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">\r
        <div>\r
          <Typography variant="body" mb="sm">Heart Rating</Typography>\r
          <Rating label="How much do you love this?" value={heartRating} onChange={setHeartRating} icon={<HeartIcon />} helperText="Rate with hearts instead of stars" size="lg" />\r
          <Typography variant="small" color="gray" mt="xs">\r
            Love level: {heartRating}/5 hearts\r
          </Typography>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">Thumbs Up Rating</Typography>\r
          <Rating label="Would you recommend this?" value={thumbRating} onChange={setThumbRating} icon={<ThumbIcon />} maxRating={3} helperText="Rate with thumbs up (max 3)" />\r
          <Typography variant="small" color="gray" mt="xs">\r
            Recommendation: {thumbRating}/3 thumbs up\r
          </Typography>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">Mixed Icon Display</Typography>\r
          <Box display="flex" flexDirection="column" gap="sm">\r
            <Rating value={4} icon={<HeartIcon />} readOnly size="sm" />\r
            <Rating value={2} icon={<ThumbIcon />} maxRating={3} readOnly size="sm" />\r
          </Box>\r
        </div>\r
      </Box>;
  }
}`,...(ca=(da=B.parameters)==null?void 0:da.docs)==null?void 0:ca.source}}};var pa,ma,ga;z.parameters={...z.parameters,docs:{...(pa=z.parameters)==null?void 0:pa.docs,source:{originalSource:`{
  render: () => {
    const [normalRating, setNormalRating] = useState(3);
    return <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="400px">\r
        <div>\r
          <Typography variant="body" mb="sm">Normal State</Typography>\r
          <Rating label="Rate this experience" value={normalRating} onChange={setNormalRating} helperText="Click to rate or use arrow keys" />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">Read-only State</Typography>\r
          <Rating label="Average Rating" value={4.2} readOnly allowHalf helperText="This rating cannot be changed" />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">Disabled State</Typography>\r
          <Rating label="Unavailable Rating" value={2} disabled helperText="Rating is currently disabled" />\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="sm">Different Values</Typography>\r
          <Box display="flex" flexDirection="column" gap="sm">\r
            <div>\r
              <Typography variant="small" mb="xs">No rating (0 stars)</Typography>\r
              <Rating value={0} readOnly size="sm" />\r
            </div>\r
            <div>\r
              <Typography variant="small" mb="xs">Perfect rating (5 stars)</Typography>\r
              <Rating value={5} readOnly size="sm" />\r
            </div>\r
            <div>\r
              <Typography variant="small" mb="xs">Partial rating (2.5 stars)</Typography>\r
              <Rating value={2.5} readOnly allowHalf size="sm" />\r
            </div>\r
          </Box>\r
        </div>\r
      </Box>;
  }
}`,...(ga=(ma=z.parameters)==null?void 0:ma.docs)==null?void 0:ga.source}}};var ya,ua,xa;H.parameters={...H.parameters,docs:{...(ya=H.parameters)==null?void 0:ya.docs,source:{originalSource:`{
  render: () => {
    const [productRating, setProductRating] = useState(0);
    const [serviceRating, setServiceRating] = useState(0);
    const [overallRating, setOverallRating] = useState(0);
    return <Box display="flex" flexDirection="column" gap="xl" p="md">\r
        <div>\r
          <Typography variant="h3" mb="lg">Product Review</Typography>\r
          <Box maxWidth="500px" display="flex" flexDirection="column" gap="lg">\r
            <div>\r
              <Rating label="Product Quality" value={productRating} onChange={setProductRating} allowHalf helperText="How would you rate the quality of this gaming headset?" />\r
            </div>\r
            \r
            <div>\r
              <Rating label="Customer Service" value={serviceRating} onChange={setServiceRating} allowHalf helperText="Rate your experience with our customer support" />\r
            </div>\r
            \r
            <div>\r
              <Rating label="Overall Experience" value={overallRating} onChange={setOverallRating} allowHalf size="lg" helperText="Your overall satisfaction with your purchase" />\r
            </div>\r
            \r
            {(productRating > 0 || serviceRating > 0 || overallRating > 0) && <Box p="md" style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '8px'
          }}>\r
                <Typography variant="small" color="gray" mb="sm">Review Summary:</Typography>\r
                <Box display="flex" flexDirection="column" gap="xs">\r
                  {productRating > 0 && <Typography variant="small">Product Quality: {productRating}/5</Typography>}\r
                  {serviceRating > 0 && <Typography variant="small">Customer Service: {serviceRating}/5</Typography>}\r
                  {overallRating > 0 && <Typography variant="small">Overall: {overallRating}/5</Typography>}\r
                </Box>\r
              </Box>}\r
          </Box>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="h3" mb="lg">Game Reviews</Typography>\r
          <Box display="flex" flexDirection="column" gap="md" maxWidth="600px">\r
            <Box p="md" style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '8px'
          }}>\r
              <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb="sm">\r
                <Typography variant="body">Cyberpunk 2077</Typography>\r
                <Typography variant="small" color="gray">4.2/5</Typography>\r
              </Box>\r
              <Rating value={4.2} readOnly allowHalf size="sm" />\r
              <Typography variant="small" color="gray" mt="xs">\r
                "Amazing graphics and storyline. Some minor bugs but overall excellent."\r
              </Typography>\r
            </Box>\r
            \r
            <Box p="md" style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '8px'
          }}>\r
              <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb="sm">\r
                <Typography variant="body">The Witcher 3</Typography>\r
                <Typography variant="small" color="gray">5.0/5</Typography>\r
              </Box>\r
              <Rating value={5} readOnly size="sm" />\r
              <Typography variant="small" color="gray" mt="xs">\r
                "Perfect RPG experience. Incredible world-building and character development."\r
              </Typography>\r
            </Box>\r
            \r
            <Box p="md" style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '8px'
          }}>\r
              <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb="sm">\r
                <Typography variant="body">Valorant</Typography>\r
                <Typography variant="small" color="gray">3.5/5</Typography>\r
              </Box>\r
              <Rating value={3.5} readOnly allowHalf size="sm" />\r
              <Typography variant="small" color="gray" mt="xs">\r
                "Good competitive shooter but can be frustrating at times."\r
              </Typography>\r
            </Box>\r
          </Box>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="h3" mb="lg">Skill Assessment</Typography>\r
          <Box maxWidth="400px">\r
            <Box display="flex" flexDirection="column" gap="md">\r
              <div>\r
                <Typography variant="small" mb="sm">React Development</Typography>\r
                <Rating value={4} maxRating={5} readOnly />\r
              </div>\r
              <div>\r
                <Typography variant="small" mb="sm">TypeScript</Typography>\r
                <Rating value={3} maxRating={5} readOnly />\r
              </div>\r
              <div>\r
                <Typography variant="small" mb="sm">UI/UX Design</Typography>\r
                <Rating value={3.5} maxRating={5} readOnly allowHalf />\r
              </div>\r
              <div>\r
                <Typography variant="small" mb="sm">Game Design</Typography>\r
                <Rating value={2} maxRating={5} readOnly />\r
              </div>\r
            </Box>\r
          </Box>\r
        </div>\r
      </Box>;
  }
}`,...(xa=(ua=H.parameters)==null?void 0:ua.docs)==null?void 0:xa.source}}};var ha,va,fa;O.parameters={...O.parameters,docs:{...(ha=O.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md" maxWidth="500px">\r
      <div>\r
        <Typography variant="body" mb="md">Accessibility Features</Typography>\r
        <Rating label="Accessible Rating Component" value={3} helperText="Use arrow keys to navigate, Enter or Space to select. This rating follows accessibility best practices." aria-label="Product rating with full keyboard support" />\r
      </div>\r
      \r
      <div>\r
        <Rating label="Keyboard Navigation Demo" value={2.5} allowHalf helperText="Try using Home/End keys for quick navigation to min/max values." aria-describedby="custom-description" />\r
        <Typography id="custom-description" variant="small" color="gray" mt="sm">\r
          Custom ARIA description for screen readers providing additional context.\r
        </Typography>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="sm">Screen Reader Friendly</Typography>\r
        <Rating value={4} readOnly aria-label="Customer satisfaction rating: 4 out of 5 stars" helperText="Screen readers will announce the current rating and total possible stars." />\r
      </div>\r
    </Box>
}`,...(fa=(va=O.parameters)==null?void 0:va.docs)==null?void 0:fa.source}}};var ba,Ra,ja;D.parameters={...D.parameters,docs:{...(ba=D.parameters)==null?void 0:ba.docs,source:{originalSource:`{
  args: {
    value: 3,
    maxRating: 5,
    allowHalf: false,
    readOnly: false,
    size: 'md',
    disabled: false,
    label: 'Rating',
    helperText: 'Click stars to rate'
  },
  render: args => <Box display="flex" justifyContent="center" p="md">\r
      <Rating {...args} />\r
    </Box>
}`,...(ja=(Ra=D.parameters)==null?void 0:Ra.docs)==null?void 0:ja.source}}};const ae=["Default","BasicUsage","Sizes","HalfStars","ReadOnlyModes","CustomMaxRating","CustomIcons","States","RealWorldExamples","AccessibilityDemo","Playground"];export{O as AccessibilityDemo,j as BasicUsage,B as CustomIcons,C as CustomMaxRating,R as Default,w as HalfStars,D as Playground,S as ReadOnlyModes,H as RealWorldExamples,T as Sizes,z as States,ae as __namedExportsOrder,Za as default};
