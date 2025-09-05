import{j as r}from"./jsx-runtime-CDt2p4po.js";import{r as we,R as L}from"./index-GiUgBvb1.js";import{d as a,l as n}from"./styled-components.browser.esm-Byilhkxn.js";const d=e=>{switch(e){case"sm":return{width:"36px",height:"20px",thumbSize:"16px",thumbOffset:"2px"};case"lg":return{width:"56px",height:"32px",thumbSize:"28px",thumbOffset:"2px"};default:return{width:"44px",height:"24px",thumbSize:"20px",thumbOffset:"2px"}}},Se=a.div`
  display: inline-flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
`,ve=a.label`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  cursor: pointer;
  
  ${({labelPosition:e})=>e==="right"&&n`
    flex-direction: row-reverse;
  `}
  
  &:hover {
    input:not(:disabled) + span {
      box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.innovation.primaryBlue}20;
    }
  }
`,me=a.input.attrs({type:"checkbox"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
`,je=a.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  
  ${({size:e})=>{const t=d(e);return n`
      width: ${t.width};
      height: ${t.height};
      border-radius: ${t.height};
    `}}
  
  background-color: ${({theme:e,checked:t,disabled:i})=>i?t?e.colors.text.muted:e.colors.gray.base:t?e.colors.innovation.primaryBlue:e.colors.gray.light};
  
  border: 2px solid ${({theme:e,error:t,checked:i,disabled:o})=>t?e.colors.semantic.error:o?i?e.colors.text.muted:e.colors.gray.base:i?e.colors.innovation.primaryBlue:e.colors.gray.light};
  
  transition: all ${({theme:e})=>e.durations.fast} ${({theme:e})=>e.easings.easeOut};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  
  ${me}:focus + & {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme:e,error:t})=>t?e.colors.semantic.error:e.colors.innovation.primaryBlue}40;
  }

  &::after {
    content: '';
    position: absolute;
    left: ${({size:e})=>d(e).thumbOffset};
    
    ${({size:e})=>{const t=d(e);return n`
        width: ${t.thumbSize};
        height: ${t.thumbSize};
        border-radius: ${t.thumbSize};
      `}}
    
    background-color: ${({theme:e,disabled:t})=>t?e.colors.gray.dark:e.colors.foundation.white};
    
    box-shadow: ${({theme:e})=>e.shadows.sm};
    transition: transform ${({theme:e})=>e.durations.fast} ${({theme:e})=>e.easings.easeOut};
    
    ${({checked:e,size:t})=>{if(e){const i=d(t),o=`calc(${i.width} - ${i.thumbSize} - ${i.thumbOffset} * 2)`;return n`
          transform: translateX(${o});
        `}return n`
        transform: translateX(0);
      `}}
  }
`,ze=a.span`
  font-family: ${({theme:e})=>e.typography.fonts.body};
  font-size: ${({theme:e})=>e.typography.fontSizes.base};
  font-weight: ${({theme:e})=>e.typography.fontWeights.normal};
  color: ${({theme:e,disabled:t})=>t?e.colors.text.muted:e.colors.text.primary};
  line-height: ${({theme:e})=>e.typography.lineHeights.normal};
`,ke=a.span`
  font-family: ${({theme:e})=>e.typography.fonts.body};
  font-size: ${({theme:e})=>e.typography.fontSizes.xs};
  color: ${({error:e,theme:t})=>e?t.colors.semantic.error:t.colors.text.muted};
`,s=we.forwardRef(({size:e="md",error:t=!1,label:i,helperText:o,errorText:k,labelPosition:ue="right",disabled:j=!1,checked:l,onChange:z,className:xe,...fe},ge)=>{const[ye,$]=L.useState(l??!1),c=l!==void 0,T=c?l:ye;L.useEffect(()=>{!c&&l!==void 0&&$(l)},[l,c]);const be=P=>{c||$(P.target.checked),z==null||z(P)},D=t&&k?k:o;return r.jsxs(Se,{className:xe,children:[r.jsxs(ve,{labelPosition:ue,children:[r.jsx(me,{ref:ge,checked:T,disabled:j,onChange:be,...fe}),r.jsx(je,{checked:T,error:t,disabled:j,size:e}),i&&r.jsx(ze,{disabled:j,children:i})]}),D&&r.jsx(ke,{error:t,children:D})]})});s.displayName="Switch";try{s.displayName="Switch",s.__docgenInfo={description:"",displayName:"Switch",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},labelPosition:{defaultValue:{value:"right"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const Pe={title:"UI/Switch",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]},error:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},checked:{control:{type:"boolean"}},labelPosition:{control:{type:"select"},options:["left","right"]}}},p={args:{label:"Default switch",size:"md"}},h={args:{label:"Enable notifications",checked:!1}},m={args:{label:"Dark mode",helperText:"Toggle between light and dark themes"}},u={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r.jsx(s,{size:"sm",label:"Small switch"}),r.jsx(s,{size:"md",label:"Medium switch"}),r.jsx(s,{size:"lg",label:"Large switch"})]})},x={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r.jsx(s,{label:"Unchecked",checked:!1}),r.jsx(s,{label:"Checked",checked:!0}),r.jsx(s,{label:"Disabled unchecked",disabled:!0}),r.jsx(s,{label:"Disabled checked",checked:!0,disabled:!0})]})},f={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r.jsx(s,{label:"Label on right",labelPosition:"right"}),r.jsx(s,{label:"Label on left",labelPosition:"left"})]})},g={args:{label:"Accept terms and conditions",error:!0,errorText:"You must accept the terms to continue"}},y={render:()=>r.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[r.jsx(s,{}),r.jsx("span",{style:{color:"white"},children:"Switch without built-in label"})]})},b={render:()=>r.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",alignItems:"center"},children:[r.jsx(s,{size:"sm",checked:!0}),r.jsx("span",{style:{color:"white",fontSize:"0.75rem"},children:"Small"})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",alignItems:"center"},children:[r.jsx(s,{size:"md",checked:!0}),r.jsx("span",{style:{color:"white",fontSize:"0.75rem"},children:"Medium"})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",alignItems:"center"},children:[r.jsx(s,{size:"lg",checked:!0}),r.jsx("span",{style:{color:"white",fontSize:"0.75rem"},children:"Large"})]})]})},w={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[r.jsx("h3",{style:{margin:0,color:"white"},children:"Settings"}),r.jsx(s,{label:"Email notifications",helperText:"Receive email updates about your account"}),r.jsx(s,{label:"Push notifications",helperText:"Get push notifications on your device",checked:!0}),r.jsx(s,{label:"Marketing emails",helperText:"Receive promotional content and offers"}),r.jsx(s,{label:"Two-factor authentication",helperText:"Add an extra layer of security",checked:!0})]})},S={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[r.jsx("h3",{style:{margin:0,color:"white"},children:"Privacy Settings"}),r.jsx(s,{label:"Public profile",labelPosition:"right",helperText:"Make your profile visible to other users"}),r.jsx(s,{label:"Show activity status",labelPosition:"right",helperText:"Let others see when you're active",checked:!0}),r.jsx(s,{label:"Allow friend requests",labelPosition:"right",helperText:"Enable others to send you friend requests"})]})},v={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center"},children:[r.jsx("p",{style:{color:"white",margin:0},children:"Click the switches to see smooth animations"}),r.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[r.jsx(s,{size:"sm",label:"Small"}),r.jsx(s,{size:"md",label:"Medium"}),r.jsx(s,{size:"lg",label:"Large"})]})]})};var I,E,q;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Default switch',
    size: 'md'
  }
}`,...(q=(E=p.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var M,_,A;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications',
    checked: false
  }
}`,...(A=(_=h.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var C,O,R;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Dark mode',
    helperText: 'Toggle between light and dark themes'
  }
}`,...(R=(O=m.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var W,H,V;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Switch size="sm" label="Small switch" />\r
      <Switch size="md" label="Medium switch" />\r
      <Switch size="lg" label="Large switch" />\r
    </div>
}`,...(V=(H=u.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var B,N,U;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Switch label="Unchecked" checked={false} />\r
      <Switch label="Checked" checked={true} />\r
      <Switch label="Disabled unchecked" disabled />\r
      <Switch label="Disabled checked" checked disabled />\r
    </div>
}`,...(U=(N=x.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var X,F,G;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      <Switch label="Label on right" labelPosition="right" />\r
      <Switch label="Label on left" labelPosition="left" />\r
    </div>
}`,...(G=(F=f.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var Y,J,K;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    error: true,
    errorText: 'You must accept the terms to continue'
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Z,ee;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
      <Switch />\r
      <span style={{
      color: 'white'
    }}>Switch without built-in label</span>\r
    </div>
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,te,se;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
  }}>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      alignItems: 'center'
    }}>\r
        <Switch size="sm" checked />\r
        <span style={{
        color: 'white',
        fontSize: '0.75rem'
      }}>Small</span>\r
      </div>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      alignItems: 'center'
    }}>\r
        <Switch size="md" checked />\r
        <span style={{
        color: 'white',
        fontSize: '0.75rem'
      }}>Medium</span>\r
      </div>\r
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      alignItems: 'center'
    }}>\r
        <Switch size="lg" checked />\r
        <span style={{
        color: 'white',
        fontSize: '0.75rem'
      }}>Large</span>\r
      </div>\r
    </div>
}`,...(se=(te=b.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ie,le,ae;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>\r
      <h3 style={{
      margin: 0,
      color: 'white'
    }}>Settings</h3>\r
      <Switch label="Email notifications" helperText="Receive email updates about your account" />\r
      <Switch label="Push notifications" helperText="Get push notifications on your device" checked />\r
      <Switch label="Marketing emails" helperText="Receive promotional content and offers" />\r
      <Switch label="Two-factor authentication" helperText="Add an extra layer of security" checked />\r
    </div>
}`,...(ae=(le=w.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var oe,ne,ce;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>\r
      <h3 style={{
      margin: 0,
      color: 'white'
    }}>Privacy Settings</h3>\r
      <Switch label="Public profile" labelPosition="right" helperText="Make your profile visible to other users" />\r
      <Switch label="Show activity status" labelPosition="right" helperText="Let others see when you're active" checked />\r
      <Switch label="Allow friend requests" labelPosition="right" helperText="Enable others to send you friend requests" />\r
    </div>
}`,...(ce=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var de,pe,he;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center'
  }}>\r
      <p style={{
      color: 'white',
      margin: 0
    }}>Click the switches to see smooth animations</p>\r
      <div style={{
      display: 'flex',
      gap: '1rem'
    }}>\r
        <Switch size="sm" label="Small" />\r
        <Switch size="md" label="Medium" />\r
        <Switch size="lg" label="Large" />\r
      </div>\r
    </div>
}`,...(he=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};const Le=["Default","WithLabel","WithHelperText","Sizes","States","LabelPositions","ErrorState","WithoutLabel","SizesComparison","SettingsExample","FormIntegration","Animated"];export{v as Animated,p as Default,g as ErrorState,S as FormIntegration,f as LabelPositions,w as SettingsExample,u as Sizes,b as SizesComparison,x as States,m as WithHelperText,h as WithLabel,y as WithoutLabel,Le as __namedExportsOrder,Pe as default};
