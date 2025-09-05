import{j as o}from"./jsx-runtime-CDt2p4po.js";import{r as X}from"./index-GiUgBvb1.js";import{l,d as f}from"./styled-components.browser.esm-Byilhkxn.js";const Y=(r,a)=>{const s=l`
    border-color: ${({theme:e})=>e.colors.semantic.error};
    &:focus {
      border-color: ${({theme:e})=>e.colors.semantic.error};
      box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.semantic.error}40;
    }
  `,n=l`
    background-color: ${({theme:e})=>e.colors.gray.base};
    border: 1px solid ${({theme:e})=>e.colors.gray.light};
    color: ${({theme:e})=>e.colors.text.primary};

    &:hover {
      border-color: ${({theme:e})=>e.colors.innovation.primaryBlue}60;
    }

    &:focus {
      outline: none;
      border-color: ${({theme:e})=>e.colors.innovation.primaryBlue};
      box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.innovation.primaryBlue}40;
    }

    &:disabled {
      background-color: ${({theme:e})=>e.colors.gray.dark};
      border-color: ${({theme:e})=>e.colors.gray.base};
      color: ${({theme:e})=>e.colors.text.muted};
      cursor: not-allowed;
    }

    &::placeholder {
      color: ${({theme:e})=>e.colors.text.muted};
    }
  `;switch(r){case"filled":return l`
        background-color: ${({theme:e})=>e.colors.gray.light};
        border: 1px solid transparent;
        color: ${({theme:e})=>e.colors.text.primary};

        &:hover {
          background-color: ${({theme:e})=>e.colors.gray.light};
          border-color: ${({theme:e})=>e.colors.innovation.primaryBlue}60;
        }

        &:focus {
          outline: none;
          background-color: ${({theme:e})=>e.colors.gray.base};
          border-color: ${({theme:e})=>e.colors.innovation.primaryBlue};
          box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.innovation.primaryBlue}40;
        }

        &:disabled {
          background-color: ${({theme:e})=>e.colors.gray.dark};
          border-color: transparent;
          color: ${({theme:e})=>e.colors.text.muted};
          cursor: not-allowed;
        }

        ${a&&s}
      `;case"outline":return l`
        background-color: transparent;
        border: 2px solid ${({theme:e})=>e.colors.gray.light};
        color: ${({theme:e})=>e.colors.text.primary};

        &:hover {
          border-color: ${({theme:e})=>e.colors.innovation.primaryBlue}60;
        }

        &:focus {
          outline: none;
          border-color: ${({theme:e})=>e.colors.innovation.primaryBlue};
          box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.innovation.primaryBlue}40;
        }

        &:disabled {
          background-color: transparent;
          border-color: ${({theme:e})=>e.colors.gray.base};
          color: ${({theme:e})=>e.colors.text.muted};
          cursor: not-allowed;
        }

        ${a&&s}
      `;default:return l`
        ${n}
        ${a&&s}
      `}},Z=r=>{switch(r){case"sm":return l`
        padding: ${({theme:a})=>a.spacing[2]} ${({theme:a})=>a.spacing[3]};
        font-size: ${({theme:a})=>a.typography.fontSizes.sm};
        height: 32px;
      `;case"lg":return l`
        padding: ${({theme:a})=>a.spacing[3]} ${({theme:a})=>a.spacing[4]};
        font-size: ${({theme:a})=>a.typography.fontSizes.lg};
        height: 48px;
      `;default:return l`
        padding: ${({theme:a})=>a.spacing[2]} ${({theme:a})=>a.spacing[3]};
        font-size: ${({theme:a})=>a.typography.fontSizes.base};
        height: 40px;
      `}},ee=f.div`
  display: inline-flex;
  flex-direction: column;
  gap: ${({theme:r})=>r.spacing[1]};
  ${({fullWidth:r})=>r&&l`width: 100%;`}
`,re=f.input`
  font-family: ${({theme:r})=>r.typography.fonts.body};
  font-weight: ${({theme:r})=>r.typography.fontWeights.normal};
  line-height: 1;
  border-radius: ${({theme:r})=>r.radius.md};
  transition: all ${({theme:r})=>r.durations.fast} ${({theme:r})=>r.easings.easeOut};
  
  ${({variant:r,error:a})=>Y(r,a)}
  ${({size:r})=>Z(r)}
  ${({fullWidth:r})=>r&&l`width: 100%;`}
`,ae=f.label`
  font-family: ${({theme:r})=>r.typography.fonts.body};
  font-size: ${({theme:r})=>r.typography.fontSizes.sm};
  font-weight: ${({theme:r})=>r.typography.fontWeights.medium};
  color: ${({theme:r})=>r.colors.text.primary};
`,oe=f.span`
  font-family: ${({theme:r})=>r.typography.fonts.body};
  font-size: ${({theme:r})=>r.typography.fontSizes.xs};
  color: ${({error:r,theme:a})=>r?a.colors.semantic.error:a.colors.text.muted};
`,t=X.forwardRef(({variant:r="default",size:a="md",error:s=!1,fullWidth:n=!1,label:e,helperText:G,errorText:g,className:J,...K},Q)=>{const b=s&&g?g:G;return o.jsxs(ee,{fullWidth:n,className:J,children:[e&&o.jsx(ae,{children:e}),o.jsx(re,{ref:Q,variant:r,size:a,error:s,fullWidth:n,...K}),b&&o.jsx(oe,{error:s,children:b})]})});t.displayName="Input";try{t.displayName="Input",t.__docgenInfo={description:"",displayName:"Input",props:{variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"outline"'},{value:'"filled"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}}}}}catch{}const ne={title:"UI/Input",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","filled","outline"]},size:{control:{type:"select"},options:["sm","md","lg"]},error:{control:{type:"boolean"}},fullWidth:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},i={args:{placeholder:"Enter text...",variant:"default",size:"md"}},d={args:{label:"Email Address",placeholder:"Enter your email",type:"email"}},p={args:{label:"Username",placeholder:"Enter username",helperText:"Must be at least 3 characters long"}},c={render:()=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[o.jsx(t,{variant:"default",placeholder:"Default variant"}),o.jsx(t,{variant:"filled",placeholder:"Filled variant"}),o.jsx(t,{variant:"outline",placeholder:"Outline variant"})]})},u={render:()=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[o.jsx(t,{size:"sm",placeholder:"Small input"}),o.jsx(t,{size:"md",placeholder:"Medium input"}),o.jsx(t,{size:"lg",placeholder:"Large input"})]})},m={render:()=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[o.jsx(t,{placeholder:"Normal state"}),o.jsx(t,{placeholder:"Disabled state",disabled:!0}),o.jsx(t,{placeholder:"Error state",error:!0,errorText:"This field is required"})]})},h={args:{label:"Password",type:"password",placeholder:"Enter password",error:!0,errorText:"Password must be at least 8 characters"}},y={render:()=>o.jsx("div",{style:{width:"400px"},children:o.jsx(t,{label:"Full Width Input",placeholder:"This input takes full width",fullWidth:!0,helperText:"This input spans the full container width"})})},x={render:()=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[o.jsx(t,{type:"text",placeholder:"Text input",label:"Text"}),o.jsx(t,{type:"email",placeholder:"Email input",label:"Email"}),o.jsx(t,{type:"password",placeholder:"Password input",label:"Password"}),o.jsx(t,{type:"number",placeholder:"Number input",label:"Number"}),o.jsx(t,{type:"search",placeholder:"Search input",label:"Search"})]})};var $,v,w;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    variant: 'default',
    size: 'md'
  }
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var S,T,j;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email'
  }
}`,...(j=(T=d.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var I,z,E;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    helperText: 'Must be at least 3 characters long'
  }
}`,...(E=(z=p.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var W,D,k;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>\r
      <Input variant="default" placeholder="Default variant" />\r
      <Input variant="filled" placeholder="Filled variant" />\r
      <Input variant="outline" placeholder="Outline variant" />\r
    </div>
}`,...(k=(D=c.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var V,_,q;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>\r
      <Input size="sm" placeholder="Small input" />\r
      <Input size="md" placeholder="Medium input" />\r
      <Input size="lg" placeholder="Large input" />\r
    </div>
}`,...(q=(_=u.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var B,N,P;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>\r
      <Input placeholder="Normal state" />\r
      <Input placeholder="Disabled state" disabled />\r
      <Input placeholder="Error state" error errorText="This field is required" />\r
    </div>
}`,...(P=(N=m.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var F,L,H;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    error: true,
    errorText: 'Password must be at least 8 characters'
  }
}`,...(H=(L=h.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var M,O,U;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>\r
      <Input label="Full Width Input" placeholder="This input takes full width" fullWidth helperText="This input spans the full container width" />\r
    </div>
}`,...(U=(O=y.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var A,R,C;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>\r
      <Input type="text" placeholder="Text input" label="Text" />\r
      <Input type="email" placeholder="Email input" label="Email" />\r
      <Input type="password" placeholder="Password input" label="Password" />\r
      <Input type="number" placeholder="Number input" label="Number" />\r
      <Input type="search" placeholder="Search input" label="Search" />\r
    </div>
}`,...(C=(R=x.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};const ie=["Default","WithLabel","WithHelperText","Variants","Sizes","States","ErrorState","FullWidth","Types"];export{i as Default,h as ErrorState,y as FullWidth,u as Sizes,m as States,x as Types,c as Variants,p as WithHelperText,d as WithLabel,ie as __namedExportsOrder,ne as default};
