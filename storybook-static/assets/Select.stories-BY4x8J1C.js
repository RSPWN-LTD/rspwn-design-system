import{j as l}from"./jsx-runtime-CDt2p4po.js";import{r as pe}from"./index-GiUgBvb1.js";import{l as t,d as i}from"./styled-components.browser.esm-Byilhkxn.js";const de=(e,r)=>{const n=t`
    border-color: ${({theme:o})=>o.colors.semantic.error};
    &:focus {
      border-color: ${({theme:o})=>o.colors.semantic.error};
      box-shadow: 0 0 0 2px ${({theme:o})=>o.colors.semantic.error}40;
    }
  `,c=t`
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
  `;switch(e){case"filled":return t`
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

        ${r&&n}
      `;case"outline":return t`
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

        ${r&&n}
      `;default:return t`
        ${c}
        ${r&&n}
      `}},ue=e=>{switch(e){case"sm":return t`
        padding: ${({theme:r})=>r.spacing[2]} ${({theme:r})=>r.spacing[8]} ${({theme:r})=>r.spacing[2]} ${({theme:r})=>r.spacing[3]};
        font-size: ${({theme:r})=>r.typography.fontSizes.sm};
        height: 32px;
      `;case"lg":return t`
        padding: ${({theme:r})=>r.spacing[3]} ${({theme:r})=>r.spacing[10]} ${({theme:r})=>r.spacing[3]} ${({theme:r})=>r.spacing[4]};
        font-size: ${({theme:r})=>r.typography.fontSizes.lg};
        height: 48px;
      `;default:return t`
        padding: ${({theme:r})=>r.spacing[2]} ${({theme:r})=>r.spacing[8]} ${({theme:r})=>r.spacing[2]} ${({theme:r})=>r.spacing[3]};
        font-size: ${({theme:r})=>r.typography.fontSizes.base};
        height: 40px;
      `}},me=i.div`
  display: inline-flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  ${({fullWidth:e})=>e&&t`width: 100%;`}
`,he=i.div`
  position: relative;
  display: inline-block;
  ${({fullWidth:e})=>e&&t`width: 100%;`}
`,be=i.select`
  appearance: none;
  font-family: ${({theme:e})=>e.typography.fonts.body};
  font-weight: ${({theme:e})=>e.typography.fontWeights.normal};
  line-height: 1;
  border-radius: ${({theme:e})=>e.radius.md};
  transition: all ${({theme:e})=>e.durations.fast} ${({theme:e})=>e.easings.easeOut};
  cursor: pointer;
  
  ${({variant:e,error:r})=>de(e,r)}
  ${({size:e})=>ue(e)}
  ${({fullWidth:e})=>e&&t`width: 100%;`}

  &:disabled {
    cursor: not-allowed;
  }

  option {
    background-color: ${({theme:e})=>e.colors.gray.base};
    color: ${({theme:e})=>e.colors.text.primary};
    padding: ${({theme:e})=>e.spacing[2]};

    &:disabled {
      color: ${({theme:e})=>e.colors.text.muted};
    }

    &:checked {
      background-color: ${({theme:e})=>e.colors.innovation.primaryBlue};
    }
  }
`,ge=i.div`
  position: absolute;
  right: ${({theme:e})=>e.spacing[3]};
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  
  width: ${({size:e})=>{switch(e){case"sm":return"12px";case"lg":return"16px";default:return"14px"}}};
  height: ${({size:e})=>{switch(e){case"sm":return"12px";case"lg":return"16px";default:return"14px"}}};
  
  &::after {
    content: '';
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: ${({size:e})=>{switch(e){case"sm":return"4px";case"lg":return"6px";default:return"5px"}}};
    height: ${({size:e})=>{switch(e){case"sm":return"4px";case"lg":return"6px";default:return"5px"}}};
    border-right: 2px solid ${({theme:e})=>e.colors.text.secondary};
    border-bottom: 2px solid ${({theme:e})=>e.colors.text.secondary};
  }
`,ye=i.label`
  font-family: ${({theme:e})=>e.typography.fonts.body};
  font-size: ${({theme:e})=>e.typography.fontSizes.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeights.medium};
  color: ${({theme:e})=>e.colors.text.primary};
`,ve=i.span`
  font-family: ${({theme:e})=>e.typography.fonts.body};
  font-size: ${({theme:e})=>e.typography.fontSizes.xs};
  color: ${({error:e,theme:r})=>e?r.colors.semantic.error:r.colors.text.muted};
`,a=pe.forwardRef(({variant:e="default",size:r="md",error:n=!1,fullWidth:c=!1,label:o,helperText:te,errorText:S,options:se,placeholder:w,className:ne,...ie},ce)=>{const O=n&&S?S:te;return l.jsxs(me,{fullWidth:c,className:ne,children:[o&&l.jsx(ye,{children:o}),l.jsxs(he,{fullWidth:c,children:[l.jsxs(be,{ref:ce,variant:e,size:r,error:n,fullWidth:c,...ie,children:[w&&l.jsx("option",{value:"",disabled:!0,children:w}),se.map(p=>l.jsx("option",{value:p.value,disabled:p.disabled,children:p.label},p.value))]}),l.jsx(ge,{size:r})]}),O&&l.jsx(ve,{error:n,children:O})]})});a.displayName="Select";try{a.displayName="Select",a.__docgenInfo={description:"",displayName:"Select",props:{variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"outline"'},{value:'"filled"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectOption[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}const s=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],ae=[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"uk",label:"United Kingdom"},{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"jp",label:"Japan"},{value:"au",label:"Australia"}],fe=[{value:"available1",label:"Available Option 1"},{value:"available2",label:"Available Option 2"},{value:"disabled1",label:"Disabled Option 1",disabled:!0},{value:"available3",label:"Available Option 3"},{value:"disabled2",label:"Disabled Option 2",disabled:!0}],we={title:"UI/Select",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","filled","outline"]},size:{control:{type:"select"},options:["sm","md","lg"]},error:{control:{type:"boolean"}},fullWidth:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},d={args:{options:s,placeholder:"Select an option...",variant:"default",size:"md"}},u={args:{label:"Country",options:ae,placeholder:"Select your country"}},m={args:{label:"Preferred Language",options:[{value:"en",label:"English"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"de",label:"German"}],placeholder:"Choose language",helperText:"This will be used for all communications"}},h={render:()=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[l.jsx(a,{variant:"default",options:s,placeholder:"Default variant"}),l.jsx(a,{variant:"filled",options:s,placeholder:"Filled variant"}),l.jsx(a,{variant:"outline",options:s,placeholder:"Outline variant"})]})},b={render:()=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[l.jsx(a,{size:"sm",options:s,placeholder:"Small select"}),l.jsx(a,{size:"md",options:s,placeholder:"Medium select"}),l.jsx(a,{size:"lg",options:s,placeholder:"Large select"})]})},g={render:()=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[l.jsx(a,{options:s,placeholder:"Normal state"}),l.jsx(a,{options:s,placeholder:"Disabled state",disabled:!0}),l.jsx(a,{options:s,placeholder:"Error state",error:!0,errorText:"Please select a valid option"})]})},y={args:{label:"Availability",options:fe,placeholder:"Select availability...",helperText:"Some options may not be available"}},v={args:{label:"Required Field",options:s,placeholder:"Please select...",error:!0,errorText:"This field is required"}},f={render:()=>l.jsx("div",{style:{width:"400px"},children:l.jsx(a,{label:"Full Width Select",options:ae,placeholder:"Select a country",fullWidth:!0,helperText:"This select spans the full container width"})})},x={render:()=>l.jsx("div",{style:{width:"300px"},children:l.jsx(a,{label:"Long Option Names",options:[{value:"short",label:"Short"},{value:"medium",label:"Medium Length Option"},{value:"long",label:"This is a very long option name that might overflow"},{value:"longest",label:"This is an extremely long option name that will definitely test the overflow behavior of the select component"}],placeholder:"Choose an option..."})})},$={render:()=>l.jsx("div",{style:{width:"300px"},children:l.jsx(a,{label:"Many Options",options:Array.from({length:20},(e,r)=>({value:`option${r+1}`,label:`Option ${r+1}`})),placeholder:"Select from many options...",helperText:"Scroll to see all options"})})};var T,j,z;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    placeholder: 'Select an option...',
    variant: 'default',
    size: 'md'
  }
}`,...(z=(j=d.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var D,W,k;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    options: countryOptions,
    placeholder: 'Select your country'
  }
}`,...(k=(W=u.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var q,L,V;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Preferred Language',
    options: [{
      value: 'en',
      label: 'English'
    }, {
      value: 'es',
      label: 'Spanish'
    }, {
      value: 'fr',
      label: 'French'
    }, {
      value: 'de',
      label: 'German'
    }],
    placeholder: 'Choose language',
    helperText: 'This will be used for all communications'
  }
}`,...(V=(L=m.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var _,F,B;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>\r
      <Select variant="default" options={basicOptions} placeholder="Default variant" />\r
      <Select variant="filled" options={basicOptions} placeholder="Filled variant" />\r
      <Select variant="outline" options={basicOptions} placeholder="Outline variant" />\r
    </div>
}`,...(B=(F=h.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var C,E,A;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>\r
      <Select size="sm" options={basicOptions} placeholder="Small select" />\r
      <Select size="md" options={basicOptions} placeholder="Medium select" />\r
      <Select size="lg" options={basicOptions} placeholder="Large select" />\r
    </div>
}`,...(A=(E=b.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var M,N,P;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>\r
      <Select options={basicOptions} placeholder="Normal state" />\r
      <Select options={basicOptions} placeholder="Disabled state" disabled />\r
      <Select options={basicOptions} placeholder="Error state" error errorText="Please select a valid option" />\r
    </div>
}`,...(P=(N=g.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var H,R,G;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Availability',
    options: optionsWithDisabled,
    placeholder: 'Select availability...',
    helperText: 'Some options may not be available'
  }
}`,...(G=(R=y.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var I,U,J;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    options: basicOptions,
    placeholder: 'Please select...',
    error: true,
    errorText: 'This field is required'
  }
}`,...(J=(U=v.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var K,X,Y;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>\r
      <Select label="Full Width Select" options={countryOptions} placeholder="Select a country" fullWidth helperText="This select spans the full container width" />\r
    </div>
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Q,Z,ee;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>\r
      <Select label="Long Option Names" options={[{
      value: 'short',
      label: 'Short'
    }, {
      value: 'medium',
      label: 'Medium Length Option'
    }, {
      value: 'long',
      label: 'This is a very long option name that might overflow'
    }, {
      value: 'longest',
      label: 'This is an extremely long option name that will definitely test the overflow behavior of the select component'
    }]} placeholder="Choose an option..." />\r
    </div>
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var oe,re,le;$.parameters={...$.parameters,docs:{...(oe=$.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>\r
      <Select label="Many Options" options={Array.from({
      length: 20
    }, (_, i) => ({
      value: \`option\${i + 1}\`,
      label: \`Option \${i + 1}\`
    }))} placeholder="Select from many options..." helperText="Scroll to see all options" />\r
    </div>
}`,...(le=(re=$.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};const Oe=["Default","WithLabel","WithHelperText","Variants","Sizes","States","WithDisabledOptions","ErrorState","FullWidth","LongOptions","ManyOptions"];export{d as Default,v as ErrorState,f as FullWidth,x as LongOptions,$ as ManyOptions,b as Sizes,g as States,h as Variants,y as WithDisabledOptions,m as WithHelperText,u as WithLabel,Oe as __namedExportsOrder,we as default};
