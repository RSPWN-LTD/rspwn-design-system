import{j as i}from"./jsx-runtime-CDt2p4po.js";import{l as r,d as l,m as h}from"./styled-components.browser.esm-Byilhkxn.js";const x=h`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`,w=h`
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
`,S=e=>{switch(e){case"slow":return"2s";case"fast":return"1s";default:return"1.5s"}},V=e=>{switch(e){case"text":return r`
        height: 1em;
        border-radius: ${({theme:a})=>a.radius.sm};
      `;case"circular":return r`
        border-radius: 50%;
      `;case"rounded":return r`
        border-radius: ${({theme:a})=>a.radius.lg};
      `;case"rectangular":default:return r`
        border-radius: ${({theme:a})=>a.radius.base};
      `}},v=l.div`
  display: block;
  background-color: ${({theme:e})=>e.colors.gray.dark};
  border-radius: ${({theme:e})=>e.radius.base};
  
  ${({variant:e})=>V(e)}
  
  ${({width:e})=>e&&r`
      width: ${typeof e=="number"?`${e}px`:e};
    `}
  
  ${({height:e})=>e&&r`
      height: ${typeof e=="number"?`${e}px`:e};
    `}
  
  ${({animation:e,speed:a})=>{if(e==="none")return r``;const t=S(a);return e==="pulse"?r`
        animation: ${x} ${t} ease-in-out infinite;
      `:e==="wave"?r`
        position: relative;
        overflow: hidden;
        
        &::after {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          transform: translateX(-100%);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          animation: ${w} ${t} ease-in-out infinite;
          content: '';
        }
      `:r``}}
`,k=l.div`
  ${({lines:e})=>e&&e>1&&r`
      display: flex;
      flex-direction: column;
      gap: ${({theme:a})=>a.spacing[2]};
    `}
`,q=l(v)`
  ${({isLast:e})=>e&&r`
      width: 75%; /* Last line is typically shorter */
    `}
`,y=({variant:e="rectangular",width:a,height:t,animation:s="pulse",speed:u="normal",lines:n=1,className:o,style:d,"aria-label":c,"aria-describedby":p,...m})=>{const $=()=>{if(a!==void 0||t!==void 0)return{width:a,height:t};switch(e){case"text":return{width:"100%",height:void 0};case"circular":return{width:"40px",height:"40px"};case"rectangular":case"rounded":default:return{width:"100%",height:"20px"}}},{width:f,height:g}=$();return e==="text"&&n>1?i.jsx(k,{className:o,style:d,lines:n,role:"progressbar","aria-label":c||"Loading content","aria-describedby":p,...m,children:Array.from({length:n},(_,b)=>i.jsx(q,{variant:e,width:f,height:g,animation:s,speed:u,isLast:b===n-1},b))}):i.jsx(v,{className:o,style:d,variant:e,width:a||f,height:t||g,animation:s,speed:u,role:"progressbar","aria-label":c||"Loading content","aria-describedby":p,...m})};try{y.displayName="Skeleton",y.__docgenInfo={description:"",displayName:"Skeleton",props:{variant:{defaultValue:{value:"rectangular"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"circular"'},{value:'"rectangular"'},{value:'"rounded"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},animation:{defaultValue:{value:"pulse"},description:"",name:"animation",required:!1,type:{name:"enum",value:[{value:'"pulse"'},{value:'"wave"'},{value:'"none"'}]}},speed:{defaultValue:{value:"normal"},description:"",name:"speed",required:!1,type:{name:"enum",value:[{value:'"slow"'},{value:'"normal"'},{value:'"fast"'}]}},lines:{defaultValue:{value:"1"},description:"",name:"lines",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}}}}}catch{}export{y as S};
