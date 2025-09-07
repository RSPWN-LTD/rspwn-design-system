import{j as n}from"./jsx-runtime-CDt2p4po.js";import{r as g}from"./index-GiUgBvb1.js";import{l as a,d as s}from"./styled-components.browser.esm-Byilhkxn.js";import{p as m}from"./propFilters-BGSNtaQt.js";const $=(r,e)=>{const t=a`
    border-color: ${({theme:o})=>o.colors.semantic.error};
    &:focus {
      border-color: ${({theme:o})=>o.colors.semantic.error};
      box-shadow: 0 0 0 2px ${({theme:o})=>o.colors.semantic.error}40;
    }
  `,l=a`
    background-color: ${({theme:o})=>o.colors.gray.base};
    border: 1px solid ${({theme:o})=>o.colors.gray.light};
    color: ${({theme:o})=>o.colors.text.primary};

    &:hover {
      border-color: ${({theme:o})=>o.colors.innovation.primaryBlue}60;
    }

    &:focus {
      outline: none;
      border-color: ${({theme:o})=>o.colors.innovation.primaryBlue};
      box-shadow: 0 0 0 2px ${({theme:o})=>o.colors.innovation.primaryBlue}40;
    }

    &:disabled {
      background-color: ${({theme:o})=>o.colors.gray.dark};
      border-color: ${({theme:o})=>o.colors.gray.base};
      color: ${({theme:o})=>o.colors.text.muted};
      cursor: not-allowed;
    }

    &::placeholder {
      color: ${({theme:o})=>o.colors.text.muted};
    }
  `;switch(r){case"filled":return a`
        background-color: ${({theme:o})=>o.colors.gray.light};
        border: 1px solid transparent;
        color: ${({theme:o})=>o.colors.text.primary};

        &:hover {
          background-color: ${({theme:o})=>o.colors.gray.light};
          border-color: ${({theme:o})=>o.colors.innovation.primaryBlue}60;
        }

        &:focus {
          outline: none;
          background-color: ${({theme:o})=>o.colors.gray.base};
          border-color: ${({theme:o})=>o.colors.innovation.primaryBlue};
          box-shadow: 0 0 0 2px ${({theme:o})=>o.colors.innovation.primaryBlue}40;
        }

        &:disabled {
          background-color: ${({theme:o})=>o.colors.gray.dark};
          border-color: transparent;
          color: ${({theme:o})=>o.colors.text.muted};
          cursor: not-allowed;
        }

        ${e&&t}
      `;case"outline":return a`
        background-color: transparent;
        border: 2px solid ${({theme:o})=>o.colors.gray.light};
        color: ${({theme:o})=>o.colors.text.primary};

        &:hover {
          border-color: ${({theme:o})=>o.colors.innovation.primaryBlue}60;
        }

        &:focus {
          outline: none;
          border-color: ${({theme:o})=>o.colors.innovation.primaryBlue};
          box-shadow: 0 0 0 2px ${({theme:o})=>o.colors.innovation.primaryBlue}40;
        }

        &:disabled {
          background-color: transparent;
          border-color: ${({theme:o})=>o.colors.gray.base};
          color: ${({theme:o})=>o.colors.text.muted};
          cursor: not-allowed;
        }

        ${e&&t}
      `;default:return a`
        ${l}
        ${e&&t}
      `}},h=r=>{switch(r){case"sm":return a`
        padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
        font-size: ${({theme:e})=>e.typography.fontSizes.sm};
        height: 32px;
      `;case"lg":return a`
        padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]};
        font-size: ${({theme:e})=>e.typography.fontSizes.lg};
        height: 48px;
      `;default:return a`
        padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
        font-size: ${({theme:e})=>e.typography.fontSizes.base};
        height: 40px;
      `}},b=s.div.withConfig({shouldForwardProp:r=>!["fullWidth"].includes(r)})`
  display: inline-flex;
  flex-direction: column;
  gap: ${({theme:r})=>r.spacing[1]};
  ${({fullWidth:r})=>r&&a`width: 100%;`}
`,x=s.input.withConfig({shouldForwardProp:m.input})`
  font-family: ${({theme:r})=>r.typography.fonts.body};
  font-weight: ${({theme:r})=>r.typography.fontWeights.normal};
  line-height: 1;
  border-radius: ${({theme:r})=>r.radius.md};
  transition: all ${({theme:r})=>r.durations.fast} ${({theme:r})=>r.easings.easeOut};
  
  ${({variant:r,error:e})=>$(r,e)}
  ${({size:r})=>h(r)}
  ${({fullWidth:r})=>r&&a`width: 100%;`}
`,v=s.label`
  font-family: ${({theme:r})=>r.typography.fonts.body};
  font-size: ${({theme:r})=>r.typography.fontSizes.sm};
  font-weight: ${({theme:r})=>r.typography.fontWeights.medium};
  color: ${({theme:r})=>r.colors.text.primary};
`,w=s.span`
  font-family: ${({theme:r})=>r.typography.fonts.body};
  font-size: ${({theme:r})=>r.typography.fontSizes.xs};
  color: ${({error:r,theme:e})=>r?e.colors.semantic.error:e.colors.text.muted};
`,i=g.forwardRef(({variant:r="default",size:e="md",error:t=!1,fullWidth:l=!1,label:o,helperText:p,errorText:c,className:u,...y},f)=>{const d=t&&c?c:p;return n.jsxs(b,{fullWidth:l,className:u,children:[o&&n.jsx(v,{children:o}),n.jsx(x,{ref:f,variant:r,size:e,error:t,fullWidth:l,...y}),d&&n.jsx(w,{error:t,children:d})]})});i.displayName="Input";try{i.displayName="Input",i.__docgenInfo={description:"",displayName:"Input",props:{variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"filled"'},{value:'"outline"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}}}}}catch{}export{i as I};
