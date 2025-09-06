import{j as g}from"./jsx-runtime-CDt2p4po.js";import{l as a,d as m}from"./styled-components.browser.esm-Byilhkxn.js";import{p as y}from"./propFilters-BGSNtaQt.js";const l=(r,e)=>{if(e)return a`
      background-color: ${({theme:o})=>o.colors.gray.light};
      color: ${({theme:o})=>o.colors.text.muted};
      border: 1px solid ${({theme:o})=>o.colors.gray.light};
      cursor: not-allowed;
      
      &:hover {
        background-color: ${({theme:o})=>o.colors.gray.light};
        color: ${({theme:o})=>o.colors.text.muted};
        border-color: ${({theme:o})=>o.colors.gray.light};
      }
    `;switch(r){case"secondary":return a`
        background-color: ${({theme:o})=>o.colors.gray.base};
        color: ${({theme:o})=>o.colors.text.primary};
        border: 1px solid ${({theme:o})=>o.colors.gray.light};
        
        &:hover {
          background-color: ${({theme:o})=>o.colors.gray.light};
          border-color: ${({theme:o})=>o.colors.gray.light};
        }
        
        &:active {
          background-color: ${({theme:o})=>o.colors.gray.dark};
        }
      `;case"outline":return a`
        background-color: transparent;
        color: ${({theme:o})=>o.colors.innovation.primaryBlue};
        border: 1px solid ${({theme:o})=>o.colors.innovation.primaryBlue};
        
        &:hover {
          background-color: ${({theme:o})=>o.colors.innovation.primaryBlue};
          color: ${({theme:o})=>o.colors.foundation.white};
        }
        
        &:active {
          background-color: rgba(74, 158, 255, 0.8);
        }
      `;case"ghost":return a`
        background-color: transparent;
        color: ${({theme:o})=>o.colors.text.primary};
        border: 1px solid transparent;
        
        &:hover {
          background-color: ${({theme:o})=>o.colors.gray.base};
        }
        
        &:active {
          background-color: ${({theme:o})=>o.colors.gray.light};
        }
      `;case"danger":return a`
        background-color: ${({theme:o})=>o.colors.semantic.error};
        color: ${({theme:o})=>o.colors.foundation.white};
        border: 1px solid ${({theme:o})=>o.colors.semantic.error};
        
        &:hover {
          background-color: rgba(239, 68, 68, 0.9);
          border-color: rgba(239, 68, 68, 0.9);
        }
        
        &:active {
          background-color: rgba(239, 68, 68, 0.8);
        }
      `;default:return a`
        background-color: ${({theme:o})=>o.colors.innovation.primaryBlue};
        color: ${({theme:o})=>o.colors.foundation.white};
        border: 1px solid ${({theme:o})=>o.colors.innovation.primaryBlue};
        
        &:hover {
          background-color: rgba(74, 158, 255, 0.9);
          border-color: rgba(74, 158, 255, 0.9);
          transform: translateY(-1px);
          box-shadow: ${({theme:o})=>o.shadows.md};
        }
        
        &:active {
          background-color: rgba(74, 158, 255, 0.8);
          transform: translateY(0);
          box-shadow: ${({theme:o})=>o.shadows.sm};
        }
      `}},b=r=>{switch(r){case"sm":return a`
        padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
        font-size: ${({theme:e})=>e.typography.fontSizes.sm};
        height: 32px;
      `;case"lg":return a`
        padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[6]};
        font-size: ${({theme:e})=>e.typography.fontSizes.lg};
        height: 48px;
      `;default:return a`
        padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
        font-size: ${({theme:e})=>e.typography.fontSizes.base};
        height: 40px;
      `}},f=m.button.withConfig({shouldForwardProp:y.button})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:r})=>r.spacing[2]};
  
  font-family: ${({theme:r})=>r.typography.fonts.body};
  font-weight: ${({theme:r})=>r.typography.fontWeights.medium};
  line-height: 1;
  
  border-radius: ${({theme:r})=>r.radius.md};
  cursor: pointer;
  
  transition: all ${({theme:r})=>r.durations.fast} ${({theme:r})=>r.easings.easeOut};
  
  ${({variant:r,disabled:e})=>l(r,e)}
  ${({size:r})=>b(r)}
  
  ${({fullWidth:r})=>r&&a`width: 100%;`}
  
  ${({loading:r})=>r&&a`
    cursor: wait;
    opacity: 0.7;
  `}
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme:r})=>r.colors.innovation.primaryBlue}40;
  }
  
  &:disabled {
    ${({variant:r})=>l(r,!0)}
  }
`,n=({variant:r="primary",size:e="md",fullWidth:o=!1,disabled:i=!1,loading:t=!1,children:s,onClick:c,type:d="button",className:u,...p})=>g.jsx(f,{variant:r,size:e,fullWidth:o,disabled:i||t,onClick:c,type:d,className:u,...p,children:t?"Loading...":s});try{n.displayName="Button",n.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"primary"'},{value:'"secondary"'},{value:'"ghost"'},{value:'"danger"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{n as B};
