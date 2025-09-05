import{j as t}from"./jsx-runtime-CDt2p4po.js";import{r as he,R as xe}from"./index-GiUgBvb1.js";import{l as o,d as i}from"./styled-components.browser.esm-Byilhkxn.js";const ge=(r,a)=>{const s=o`
    border-color: ${({theme:e})=>e.colors.semantic.error};
    &:focus {
      border-color: ${({theme:e})=>e.colors.semantic.error};
      box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.semantic.error}40;
    }
  `,n=o`
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

    /* Custom styles for date input */
    &::-webkit-calendar-picker-indicator {
      filter: invert(1);
      opacity: 0.6;
      cursor: pointer;
    }

    &::-webkit-calendar-picker-indicator:hover {
      opacity: 1;
    }
  `;switch(r){case"filled":return o`
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

        &::-webkit-calendar-picker-indicator {
          filter: invert(1);
          opacity: 0.6;
        }

        ${a&&s}
      `;case"outline":return o`
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

        &::-webkit-calendar-picker-indicator {
          filter: invert(1);
          opacity: 0.6;
        }

        ${a&&s}
      `;default:return o`
        ${n}
        ${a&&s}
      `}},ye=r=>{switch(r){case"sm":return o`
        padding: ${({theme:a})=>a.spacing[2]} ${({theme:a})=>a.spacing[3]};
        font-size: ${({theme:a})=>a.typography.fontSizes.sm};
        height: 32px;
      `;case"lg":return o`
        padding: ${({theme:a})=>a.spacing[3]} ${({theme:a})=>a.spacing[4]};
        font-size: ${({theme:a})=>a.typography.fontSizes.lg};
        height: 48px;
      `;default:return o`
        padding: ${({theme:a})=>a.spacing[2]} ${({theme:a})=>a.spacing[3]};
        font-size: ${({theme:a})=>a.typography.fontSizes.base};
        height: 40px;
      `}},be=i.div`
  display: inline-flex;
  flex-direction: column;
  gap: ${({theme:r})=>r.spacing[1]};
  ${({fullWidth:r})=>r&&o`width: 100%;`}
`,ve=i.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  ${({fullWidth:r})=>r&&o`width: 100%;`}
`,we=i.input`
  font-family: ${({theme:r})=>r.typography.fonts.body};
  font-weight: ${({theme:r})=>r.typography.fontWeights.normal};
  line-height: 1;
  border-radius: ${({theme:r})=>r.radius.md};
  transition: all ${({theme:r})=>r.durations.fast} ${({theme:r})=>r.easings.easeOut};
  
  ${({variant:r,error:a})=>ge(r,a)}
  ${({size:r})=>ye(r)}
  ${({fullWidth:r})=>r&&o`width: 100%;`}

  /* Hide the default calendar icon to prevent overlap with custom icon */
  &::-webkit-calendar-picker-indicator {
    display: none;
    opacity: 0;
    width: 0;
    height: 0;
  }
`,$e=i.div.attrs(r=>({size:r.size||"md"}))`
  position: absolute;
  right: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${r=>r.size==="sm"?"16px":r.size==="lg"?"20px":"18px"};
  height: ${r=>r.size==="sm"?"16px":r.size==="lg"?"20px":"18px"};
  z-index: 2;
  
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23CCCCCC'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'/%3E%3C/svg%3E") center/contain no-repeat;
  }
  
  &:hover::before {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234A9EFF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'/%3E%3C/svg%3E");
  }
`,ke=i.label`
  font-family: ${({theme:r})=>r.typography.fonts.body};
  font-size: ${({theme:r})=>r.typography.fontSizes.sm};
  font-weight: ${({theme:r})=>r.typography.fontWeights.medium};
  color: ${({theme:r})=>r.colors.text.primary};
`,De=i.span`
  font-family: ${({theme:r})=>r.typography.fonts.body};
  font-size: ${({theme:r})=>r.typography.fontSizes.xs};
  color: ${({error:r,theme:a})=>r?a.colors.semantic.error:a.colors.text.muted};
`,l=he.forwardRef(({variant:r="default",size:a="md",error:s=!1,fullWidth:n=!1,label:e,helperText:ce,errorText:$,showCalendarIcon:k=!0,className:ue,...D},pe)=>{const me=xe.useRef(null),V=s&&$?$:ce,d=pe||me,fe=()=>{var S,T;d&&"current"in d&&d.current&&((T=(S=d.current).showPicker)==null||T.call(S))};return t.jsxs(be,{fullWidth:n,className:ue,children:[e&&t.jsx(ke,{children:e}),t.jsxs(ve,{fullWidth:n,children:[t.jsx(we,{ref:d,type:"date",variant:r,size:a,error:s,fullWidth:n,showCalendarIcon:k,...D}),k&&!D.disabled&&t.jsx($e,{size:a,onClick:fe})]}),V&&t.jsx(De,{error:s,children:V})]})});l.displayName="DatePicker";try{l.displayName="DatePicker",l.__docgenInfo={description:"",displayName:"DatePicker",props:{variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"outline"'},{value:'"filled"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},showCalendarIcon:{defaultValue:{value:"true"},description:"",name:"showCalendarIcon",required:!1,type:{name:"boolean"}}}}}catch{}const ze={title:"UI/DatePicker",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","filled","outline"]},size:{control:{type:"select"},options:["sm","md","lg"]},error:{control:{type:"boolean"}},fullWidth:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},showCalendarIcon:{control:{type:"boolean"}}}},c={args:{variant:"default",size:"md",showCalendarIcon:!0}},u={args:{label:"Date of Birth",defaultValue:"2024-01-15"}},p={args:{label:"Event Date",helperText:"Select the date for your event",defaultValue:"2024-09-15"}},m={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[t.jsx(l,{variant:"default",label:"Default variant",defaultValue:"2024-01-01"}),t.jsx(l,{variant:"filled",label:"Filled variant",defaultValue:"2024-01-01"}),t.jsx(l,{variant:"outline",label:"Outline variant",defaultValue:"2024-01-01"})]})},f={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[t.jsx(l,{size:"sm",label:"Small",defaultValue:"2024-01-01"}),t.jsx(l,{size:"md",label:"Medium",defaultValue:"2024-01-01"}),t.jsx(l,{size:"lg",label:"Large",defaultValue:"2024-01-01"})]})},h={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[t.jsx(l,{label:"Normal state",defaultValue:"2024-01-01"}),t.jsx(l,{label:"Disabled state",defaultValue:"2024-01-01",disabled:!0}),t.jsx(l,{label:"Error state",defaultValue:"2024-01-01",error:!0,errorText:"Please select a valid date"})]})},x={args:{label:"Required Date Field",error:!0,errorText:"This date field is required"}},g={args:{label:"Custom Date Input",showCalendarIcon:!1,helperText:"Uses browser default calendar picker",defaultValue:"2024-01-15"}},y={render:()=>t.jsx("div",{style:{width:"400px"},children:t.jsx(l,{label:"Full Width DatePicker",fullWidth:!0,helperText:"This date picker spans the full container width",defaultValue:"2024-01-15"})})},b={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[t.jsx(l,{label:"Start Date",defaultValue:"2024-01-01",helperText:"Select start date"}),t.jsx(l,{label:"End Date",defaultValue:"2024-01-31",helperText:"Select end date"})]})},v={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[t.jsx(l,{label:"Future Date Only",min:new Date().toISOString().split("T")[0],helperText:"Cannot select past dates"}),t.jsx(l,{label:"This Year Only",min:"2024-01-01",max:"2024-12-31",helperText:"Only dates in 2024",defaultValue:"2024-06-15"})]})},w={args:{label:"Required Date Field",required:!0,helperText:"This field is required"}};var z,j,C;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    showCalendarIcon: true
  }
}`,...(C=(j=c.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var P,q,E;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Date of Birth',
    defaultValue: '2024-01-15'
  }
}`,...(E=(q=u.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var I,W,R;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Event Date',
    helperText: 'Select the date for your event',
    defaultValue: '2024-09-15'
  }
}`,...(R=(W=p.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var F,B,O;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>\r
      <DatePicker variant="default" label="Default variant" defaultValue="2024-01-01" />\r
      <DatePicker variant="filled" label="Filled variant" defaultValue="2024-01-01" />\r
      <DatePicker variant="outline" label="Outline variant" defaultValue="2024-01-01" />\r
    </div>
}`,...(O=(B=m.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var M,_,H;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>\r
      <DatePicker size="sm" label="Small" defaultValue="2024-01-01" />\r
      <DatePicker size="md" label="Medium" defaultValue="2024-01-01" />\r
      <DatePicker size="lg" label="Large" defaultValue="2024-01-01" />\r
    </div>
}`,...(H=(_=f.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var L,N,U;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>\r
      <DatePicker label="Normal state" defaultValue="2024-01-01" />\r
      <DatePicker label="Disabled state" defaultValue="2024-01-01" disabled />\r
      <DatePicker label="Error state" defaultValue="2024-01-01" error errorText="Please select a valid date" />\r
    </div>
}`,...(U=(N=h.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var Y,A,G;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Required Date Field',
    error: true,
    errorText: 'This date field is required'
  }
}`,...(G=(A=x.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: 'Custom Date Input',
    showCalendarIcon: false,
    helperText: 'Uses browser default calendar picker',
    defaultValue: '2024-01-15'
  }
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,ee;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>\r
      <DatePicker label="Full Width DatePicker" fullWidth helperText="This date picker spans the full container width" defaultValue="2024-01-15" />\r
    </div>
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,te;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>\r
      <DatePicker label="Start Date" defaultValue="2024-01-01" helperText="Select start date" />\r
      <DatePicker label="End Date" defaultValue="2024-01-31" helperText="Select end date" />\r
    </div>
}`,...(te=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var le,oe,se;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>\r
      <DatePicker label="Future Date Only" min={new Date().toISOString().split('T')[0]} helperText="Cannot select past dates" />\r
      <DatePicker label="This Year Only" min="2024-01-01" max="2024-12-31" helperText="Only dates in 2024" defaultValue="2024-06-15" />\r
    </div>
}`,...(se=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,ne,de;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'Required Date Field',
    required: true,
    helperText: 'This field is required'
  }
}`,...(de=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:de.source}}};const je=["Default","WithLabel","WithHelperText","Variants","Sizes","States","ErrorState","WithoutCalendarIcon","FullWidth","DateRanges","WithMinMax","Required"];export{b as DateRanges,c as Default,x as ErrorState,y as FullWidth,w as Required,f as Sizes,h as States,m as Variants,p as WithHelperText,u as WithLabel,v as WithMinMax,g as WithoutCalendarIcon,je as __namedExportsOrder,ze as default};
