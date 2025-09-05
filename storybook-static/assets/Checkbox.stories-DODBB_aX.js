import{j as r}from"./jsx-runtime-CDt2p4po.js";import{r as ae,R as v}from"./index-GiUgBvb1.js";import{d as i,l as s}from"./styled-components.browser.esm-Byilhkxn.js";const te=e=>{switch(e){case"sm":return s`
        width: 16px;
        height: 16px;
      `;case"lg":return s`
        width: 24px;
        height: 24px;
      `;default:return s`
        width: 20px;
        height: 20px;
      `}},se=i.div`
  display: inline-flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,le=i.label`
  display: inline-flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[2]};
  cursor: pointer;
  
  &:hover {
    input:not(:disabled) + span {
      border-color: ${({theme:e})=>e.colors.innovation.primaryBlue}60;
      box-shadow: 0 0 0 1px ${({theme:e})=>e.colors.innovation.primaryBlue}20;
    }
  }
  
  &:active {
    input:not(:disabled) + span {
      transform: scale(0.95);
    }
  }
`,X=i.input.attrs({type:"checkbox"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
`,ne=i.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  background-color: ${({theme:e})=>e.colors.gray.base};
  border: 2px solid ${({theme:e,error:o})=>o?e.colors.semantic.error:e.colors.gray.light};
  border-radius: ${({theme:e})=>e.radius.sm};
  
  transition: all ${({theme:e})=>e.durations.fast} ${({theme:e})=>e.easings.easeOut};
  
  ${({size:e})=>te(e)}
  
  ${({checked:e,indeterminate:o,theme:a})=>(e||o)&&s`
    background-color: ${a.colors.innovation.primaryBlue};
    border-color: ${a.colors.innovation.primaryBlue};
    box-shadow: 0 0 0 1px ${a.colors.innovation.primaryBlue}40;
    
    &:hover {
      background-color: rgba(74, 158, 255, 0.9);
      border-color: rgba(74, 158, 255, 0.9);
      box-shadow: 0 0 0 1px ${a.colors.innovation.primaryBlue}60;
    }
  `}
  
  ${({disabled:e,theme:o,checked:a,indeterminate:f})=>e&&s`
    background-color: ${o.colors.gray.dark};
    border-color: ${o.colors.gray.base};
    cursor: not-allowed;
    
    ${(a||f)&&s`
      background-color: ${o.colors.text.muted};
      border-color: ${o.colors.text.muted};
    `}
  `}
  
  ${X}:focus + & {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme:e,error:o})=>o?e.colors.semantic.error:e.colors.innovation.primaryBlue}40;
  }

  &::after {
    content: '';
    display: ${({checked:e,indeterminate:o})=>e||o?"block":"none"};
    
    ${({indeterminate:e,theme:o,size:a})=>e?s`
      width: ${a==="sm"?"8px":a==="lg"?"12px":"10px"};
      height: 2px;
      background-color: ${o.colors.foundation.white};
      border-radius: 1px;
    `:s`
      width: ${a==="sm"?"4px":a==="lg"?"6px":"5px"};
      height: ${a==="sm"?"8px":a==="lg"?"10px":"9px"};
      border: solid ${o.colors.foundation.white};
      border-width: 0 2.5px 2.5px 0;
      transform: rotate(45deg);
      margin-top: ${a==="sm"?"-1px":"-2px"};
      margin-left: ${a==="sm"?"0.5px":"1px"};
    `}
  }
`,ie=i.span`
  font-family: ${({theme:e})=>e.typography.fonts.body};
  font-size: ${({theme:e})=>e.typography.fontSizes.base};
  font-weight: ${({theme:e})=>e.typography.fontWeights.normal};
  color: ${({theme:e,disabled:o})=>o?e.colors.text.muted:e.colors.text.primary};
  line-height: ${({theme:e})=>e.typography.lineHeights.normal};
`,ce=i.span`
  font-family: ${({theme:e})=>e.typography.fonts.body};
  font-size: ${({theme:e})=>e.typography.fontSizes.xs};
  color: ${({error:e,theme:o})=>e?o.colors.semantic.error:o.colors.text.muted};
  margin-left: ${({theme:e})=>e.spacing[6]}; // Align with checkbox content
`,t=ae.forwardRef(({size:e="md",error:o=!1,label:a,helperText:f,errorText:S,indeterminate:y=!1,disabled:k=!1,checked:l,className:Z,onChange:$,...ee},n)=>{const[re,j]=v.useState(l??!1),c=l!==void 0,C=c?l:re;v.useEffect(()=>{!c&&l!==void 0&&j(l)},[l,c]);const oe=D=>{c||j(D.target.checked),$==null||$(D)},w=o&&S?S:f;return v.useEffect(()=>{n&&"current"in n&&n.current&&(n.current.indeterminate=y)},[n,y]),r.jsxs(se,{className:Z,children:[r.jsxs(le,{children:[r.jsx(X,{ref:n,checked:C,disabled:k,onChange:oe,...ee}),r.jsx(ne,{checked:C,indeterminate:y,error:o,disabled:k,size:e}),a&&r.jsx(ie,{disabled:k,children:a})]}),w&&r.jsx(ce,{error:o,children:w})]})});t.displayName="Checkbox";try{t.displayName="Checkbox",t.__docgenInfo={description:"",displayName:"Checkbox",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},indeterminate:{defaultValue:{value:"false"},description:"",name:"indeterminate",required:!1,type:{name:"boolean"}}}}}catch{}const me={title:"UI/Checkbox",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},error:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},checked:{control:{type:"boolean"}},indeterminate:{control:{type:"boolean"}}}},d={args:{label:"Default checkbox",size:"md"}},p={args:{label:"I agree to the terms and conditions",checked:!1}},u={args:{label:"Subscribe to newsletter",helperText:"You can unsubscribe at any time"}},m={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r.jsx(t,{size:"sm",label:"Small checkbox"}),r.jsx(t,{size:"md",label:"Medium checkbox"}),r.jsx(t,{size:"lg",label:"Large checkbox"})]})},x={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r.jsx(t,{label:"Unchecked",checked:!1}),r.jsx(t,{label:"Checked",checked:!0}),r.jsx(t,{label:"Indeterminate",indeterminate:!0}),r.jsx(t,{label:"Disabled unchecked",disabled:!0}),r.jsx(t,{label:"Disabled checked",checked:!0,disabled:!0}),r.jsx(t,{label:"Disabled indeterminate",indeterminate:!0,disabled:!0})]})},b={args:{label:"Required checkbox",error:!0,errorText:"You must accept the terms to continue"}},h={render:()=>r.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[r.jsx(t,{}),r.jsx("span",{children:"Checkbox without built-in label"})]})},g={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r.jsx("h3",{style:{margin:0,color:"white"},children:"Select your preferences:"}),r.jsx(t,{label:"Email notifications"}),r.jsx(t,{label:"SMS notifications"}),r.jsx(t,{label:"Push notifications",checked:!0}),r.jsx(t,{label:"Marketing emails",helperText:"Optional promotional content"})]})};var T,z,_;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Default checkbox',
    size: 'md'
  }
}`,...(_=(z=d.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var E,I,q;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'I agree to the terms and conditions',
    checked: false
  }
}`,...(q=(I=p.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var W,B,L;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Subscribe to newsletter',
    helperText: 'You can unsubscribe at any time'
  }
}`,...(L=(B=u.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var H,M,R;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Checkbox size="sm" label="Small checkbox" />\r
      <Checkbox size="md" label="Medium checkbox" />\r
      <Checkbox size="lg" label="Large checkbox" />\r
    </div>
}`,...(R=(M=m.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var V,O,Y;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Checkbox label="Unchecked" checked={false} />\r
      <Checkbox label="Checked" checked={true} />\r
      <Checkbox label="Indeterminate" indeterminate={true} />\r
      <Checkbox label="Disabled unchecked" disabled />\r
      <Checkbox label="Disabled checked" checked disabled />\r
      <Checkbox label="Disabled indeterminate" indeterminate disabled />\r
    </div>
}`,...(Y=(O=x.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var N,U,G;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Required checkbox',
    error: true,
    errorText: 'You must accept the terms to continue'
  }
}`,...(G=(U=b.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var P,A,F;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
      <Checkbox />\r
      <span>Checkbox without built-in label</span>\r
    </div>
}`,...(F=(A=h.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <h3 style={{
      margin: 0,
      color: 'white'
    }}>Select your preferences:</h3>\r
      <Checkbox label="Email notifications" />\r
      <Checkbox label="SMS notifications" />\r
      <Checkbox label="Push notifications" checked />\r
      <Checkbox label="Marketing emails" helperText="Optional promotional content" />\r
    </div>
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const xe=["Default","WithLabel","WithHelperText","Sizes","States","ErrorState","WithoutLabel","Group"];export{d as Default,b as ErrorState,g as Group,m as Sizes,x as States,u as WithHelperText,p as WithLabel,h as WithoutLabel,xe as __namedExportsOrder,me as default};
