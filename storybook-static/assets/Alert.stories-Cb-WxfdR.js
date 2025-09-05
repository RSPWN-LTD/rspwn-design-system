import{j as e}from"./jsx-runtime-CDt2p4po.js";import{d as o,l as u}from"./styled-components.browser.esm-Byilhkxn.js";import{B as d}from"./Button-CmnvKrIY.js";import{B as t}from"./Box-D0rAd6Cs.js";import{T as l}from"./Typography-B2ZqsRPU.js";import{r as ae}from"./index-GiUgBvb1.js";const le=(r,n)=>{const s={info:{main:u`${({theme:a})=>a.colors.innovation.primaryBlue}`,light:"#1e3a8a20",dark:"#1e3a8a"},success:{main:"#22c55e",light:"#22c55e20",dark:"#166534"},warning:{main:"#f59e0b",light:"#f59e0b20",dark:"#92400e"},error:{main:"#ef4444",light:"#ef444420",dark:"#dc2626"}}[r||"info"];switch(n){case"filled":return u`
        background-color: ${s.main};
        color: ${({theme:a})=>a.colors.foundation.white};
        border: 1px solid ${s.main};
      `;case"outlined":return u`
        background-color: transparent;
        color: ${s.main};
        border: 1px solid ${s.main};
      `;case"subtle":default:return u`
        background-color: ${s.light};
        color: ${s.main};
        border: 1px solid ${s.light};
      `}},oe=r=>{const n={width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor"};switch(r){case"success":return e.jsx("svg",{...n,children:e.jsx("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})});case"warning":return e.jsx("svg",{...n,children:e.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"})});case"error":return e.jsx("svg",{...n,children:e.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})});case"info":default:return e.jsx("svg",{...n,children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})})}},ce=o.div`
  display: flex;
  align-items: flex-start;
  padding: ${({theme:r})=>r.spacing[4]};
  border-radius: ${({theme:r})=>r.radius.sm};
  font-family: ${({theme:r})=>r.typography.fonts.body};
  
  ${({severity:r,variant:n})=>le(r,n)}
  
  transition: all ${({theme:r})=>r.durations.fast} ${({theme:r})=>r.easings.easeInOut};
`,de=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({theme:r})=>r.spacing[3]};
  flex-shrink: 0;
`,ue=o.div`
  flex: 1;
  min-width: 0;
`,he=o.div`
  font-size: ${({theme:r})=>r.typography.fontSizes.base};
  font-weight: ${({theme:r})=>r.typography.fontWeights.semibold};
  line-height: ${({theme:r})=>r.typography.lineHeights.snug};
  margin-bottom: ${({theme:r})=>r.spacing[1]};
`,me=o.div`
  font-size: ${({theme:r})=>r.typography.fontSizes.sm};
  font-weight: ${({theme:r})=>r.typography.fontWeights.normal};
  line-height: ${({theme:r})=>r.typography.lineHeights.normal};
`,pe=o.div`
  display: flex;
  align-items: center;
  margin-left: ${({theme:r})=>r.spacing[3]};
  flex-shrink: 0;
`,ve=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: ${({theme:r})=>r.spacing[1]};
  margin: -${({theme:r})=>r.spacing[1]} -${({theme:r})=>r.spacing[1]} -${({theme:r})=>r.spacing[1]} ${({theme:r})=>r.spacing[2]};
  border-radius: ${({theme:r})=>r.radius.sm};
  cursor: pointer;
  color: inherit;
  opacity: 0.7;
  transition: opacity ${({theme:r})=>r.durations.fast} ${({theme:r})=>r.easings.easeInOut};

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,i=({title:r,children:n,severity:c="info",variant:s="subtle",dismissible:a=!1,onClose:j,action:w,icon:re,showIcon:ie=!0,className:se,role:te="alert",...ne})=>{const T=ie?re||oe(c):null;return e.jsxs(ce,{className:se,severity:c,variant:s,role:te,...ne,children:[T&&e.jsx(de,{children:T}),e.jsxs(ue,{children:[r&&e.jsx(he,{children:r}),n&&e.jsx(me,{children:n})]}),w&&e.jsx(pe,{children:w}),a&&j&&e.jsx(ve,{variant:s,onClick:j,"aria-label":"Close alert",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})})})]})};try{i.displayName="Alert",i.__docgenInfo={description:"",displayName:"Alert",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},severity:{defaultValue:{value:"info"},description:"",name:"severity",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"error"'},{value:'"success"'},{value:'"warning"'}]}},variant:{defaultValue:{value:"subtle"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"subtle"'},{value:'"filled"'},{value:'"outlined"'}]}},dismissible:{defaultValue:{value:"false"},description:"",name:"dismissible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},showIcon:{defaultValue:{value:"true"},description:"",name:"showIcon",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},role:{defaultValue:{value:"alert"},description:"",name:"role",required:!1,type:{name:"string"}}}}}catch{}const je={title:"UI/Alert",component:i,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{severity:{control:{type:"select"},options:["info","success","warning","error"]},variant:{control:{type:"select"},options:["filled","outlined","subtle"]}}},h={args:{severity:"info",variant:"subtle",children:"This is an info alert with default settings."}},m={render:()=>e.jsxs(t,{display:"flex",flexDirection:"column",gap:"md",p:"md",children:[e.jsx(i,{severity:"info",children:"This is an info alert — check it out!"}),e.jsx(i,{severity:"success",children:"This is a success alert — check it out!"}),e.jsx(i,{severity:"warning",children:"This is a warning alert — check it out!"}),e.jsx(i,{severity:"error",children:"This is an error alert — check it out!"})]})},p={render:()=>e.jsxs(t,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(l,{variant:"body",mb:"md",color:"gray",children:"Subtle (Default)"}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"sm",children:[e.jsx(i,{severity:"info",variant:"subtle",children:"This is a subtle info alert"}),e.jsx(i,{severity:"success",variant:"subtle",children:"This is a subtle success alert"}),e.jsx(i,{severity:"warning",variant:"subtle",children:"This is a subtle warning alert"}),e.jsx(i,{severity:"error",variant:"subtle",children:"This is a subtle error alert"})]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"body",mb:"md",color:"gray",children:"Outlined"}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"sm",children:[e.jsx(i,{severity:"info",variant:"outlined",children:"This is an outlined info alert"}),e.jsx(i,{severity:"success",variant:"outlined",children:"This is an outlined success alert"}),e.jsx(i,{severity:"warning",variant:"outlined",children:"This is an outlined warning alert"}),e.jsx(i,{severity:"error",variant:"outlined",children:"This is an outlined error alert"})]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"body",mb:"md",color:"gray",children:"Filled"}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"sm",children:[e.jsx(i,{severity:"info",variant:"filled",children:"This is a filled info alert"}),e.jsx(i,{severity:"success",variant:"filled",children:"This is a filled success alert"}),e.jsx(i,{severity:"warning",variant:"filled",children:"This is a filled warning alert"}),e.jsx(i,{severity:"error",variant:"filled",children:"This is a filled error alert"})]})]})]})},v={render:()=>e.jsxs(t,{display:"flex",flexDirection:"column",gap:"md",p:"md",children:[e.jsx(i,{severity:"info",title:"Info",children:"This is an info alert with a title."}),e.jsx(i,{severity:"success",title:"Success",children:"This is a success alert with a title."}),e.jsx(i,{severity:"warning",title:"Warning",children:"This is a warning alert with a title."}),e.jsx(i,{severity:"error",title:"Error",children:"This is an error alert with a title."})]})},y={render:()=>e.jsxs(t,{display:"flex",flexDirection:"column",gap:"md",p:"md",children:[e.jsx(i,{severity:"info",showIcon:!1,children:"This info alert has no icon."}),e.jsx(i,{severity:"success",title:"No Icon",showIcon:!1,children:"This success alert has a title but no icon."}),e.jsx(i,{severity:"warning",variant:"outlined",showIcon:!1,children:"This is an outlined warning alert without an icon."})]})},f={render:()=>e.jsxs(t,{display:"flex",flexDirection:"column",gap:"md",p:"md",children:[e.jsx(i,{severity:"info",title:"Custom Icon",icon:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})}),children:"This alert has a custom star icon."}),e.jsx(i,{severity:"success",variant:"filled",icon:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),children:"This alert has a custom checkmark circle icon."})]})},g={render:()=>{const[r,n]=ae.useState([{id:1,severity:"info",message:"This is a dismissible info alert."},{id:2,severity:"success",message:"This is a dismissible success alert."},{id:3,severity:"warning",message:"This is a dismissible warning alert."},{id:4,severity:"error",message:"This is a dismissible error alert."}]),c=s=>{n(r.filter(a=>a.id!==s))};return e.jsxs(t,{display:"flex",flexDirection:"column",gap:"md",p:"md",children:[r.map(s=>e.jsx(i,{severity:s.severity,dismissible:!0,onClose:()=>c(s.id),children:s.message},s.id)),r.length===0&&e.jsx(l,{variant:"body",color:"gray",children:"All alerts have been dismissed. Refresh the page to see them again."})]})}},x={render:()=>e.jsxs(t,{display:"flex",flexDirection:"column",gap:"md",p:"md",children:[e.jsx(i,{severity:"info",title:"Update Available",action:e.jsx(d,{size:"sm",variant:"outline",children:"Update"}),children:"A new version of the application is available."}),e.jsx(i,{severity:"warning",title:"Unsaved Changes",action:e.jsxs(t,{display:"flex",gap:"sm",children:[e.jsx(d,{size:"sm",variant:"secondary",children:"Save"}),e.jsx(d,{size:"sm",variant:"outline",children:"Discard"})]}),children:"You have unsaved changes that will be lost."}),e.jsx(i,{severity:"error",title:"Connection Failed",dismissible:!0,onClose:()=>console.log("Alert closed"),action:e.jsx(d,{size:"sm",variant:"primary",children:"Retry"}),children:"Unable to connect to the server. Please check your connection."})]})},b={render:()=>e.jsxs(t,{display:"flex",flexDirection:"column",gap:"lg",p:"md",children:[e.jsxs("div",{children:[e.jsx(l,{variant:"h3",mb:"md",children:"System Notifications"}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"sm",children:[e.jsx(i,{severity:"success",title:"Deployment Successful",dismissible:!0,children:"Your application has been deployed successfully to production."}),e.jsx(i,{severity:"warning",title:"High Memory Usage",action:e.jsx(d,{size:"sm",variant:"outline",children:"View Details"}),children:"Memory usage is at 85%. Consider scaling your application."}),e.jsx(i,{severity:"error",title:"Build Failed",dismissible:!0,children:"The build process encountered errors. Please check your code and try again."})]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"h3",mb:"md",children:"Form Validation"}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"sm",children:[e.jsxs(i,{severity:"error",variant:"outlined",children:["Please fix the following errors before submitting:",e.jsxs("ul",{style:{margin:"8px 0 0 0",paddingLeft:"20px"},children:[e.jsx("li",{children:"Email is required"}),e.jsx("li",{children:"Password must be at least 8 characters"}),e.jsx("li",{children:"Please accept the terms and conditions"})]})]}),e.jsx(i,{severity:"info",variant:"subtle",children:"Your password strength: Strong. Make sure to save it securely."})]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"h3",mb:"md",children:"User Feedback"}),e.jsxs(t,{display:"flex",flexDirection:"column",gap:"sm",children:[e.jsx(i,{severity:"success",title:"Settings Saved",variant:"filled",dismissible:!0,children:"Your preferences have been updated successfully."}),e.jsx(i,{severity:"info",title:"Pro Tip",icon:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2l.09.06c.18.14.29.36.29.6V9a2.25 2.25 0 0 0 2.25 2.25H21c.24 0 .46.11.6.29l.06.09A2.25 2.25 0 0 0 19.41 15l-6.6 6.6a2.25 2.25 0 0 1-3.18 0l-6.6-6.6A2.25 2.25 0 0 0 2.28 11.66l.06-.09c.14-.18.36-.29.6-.29h6.56A2.25 2.25 0 0 0 12 9V2.66c0-.24.11-.46.29-.6z"})}),children:"Use keyboard shortcuts to navigate faster. Press Ctrl+K to open the command palette."})]})]})]})},A={args:{severity:"info",variant:"subtle",title:"Alert Title",children:"This is the alert message content.",showIcon:!0,dismissible:!1},render:r=>e.jsx(t,{display:"flex",justifyContent:"center",p:"md",children:e.jsx(i,{...r})})};var B,D,C;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    severity: 'info',
    variant: 'subtle',
    children: 'This is an info alert with default settings.'
  }
}`,...(C=(D=h.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var k,S,$;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="md" p="md">\r
      <Alert severity="info">\r
        This is an info alert — check it out!\r
      </Alert>\r
      \r
      <Alert severity="success">\r
        This is a success alert — check it out!\r
      </Alert>\r
      \r
      <Alert severity="warning">\r
        This is a warning alert — check it out!\r
      </Alert>\r
      \r
      <Alert severity="error">\r
        This is an error alert — check it out!\r
      </Alert>\r
    </Box>
}`,...($=(S=m.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var z,I,V;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="body" mb="md" color="gray">Subtle (Default)</Typography>\r
        <Box display="flex" flexDirection="column" gap="sm">\r
          <Alert severity="info" variant="subtle">This is a subtle info alert</Alert>\r
          <Alert severity="success" variant="subtle">This is a subtle success alert</Alert>\r
          <Alert severity="warning" variant="subtle">This is a subtle warning alert</Alert>\r
          <Alert severity="error" variant="subtle">This is a subtle error alert</Alert>\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="md" color="gray">Outlined</Typography>\r
        <Box display="flex" flexDirection="column" gap="sm">\r
          <Alert severity="info" variant="outlined">This is an outlined info alert</Alert>\r
          <Alert severity="success" variant="outlined">This is an outlined success alert</Alert>\r
          <Alert severity="warning" variant="outlined">This is an outlined warning alert</Alert>\r
          <Alert severity="error" variant="outlined">This is an outlined error alert</Alert>\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="body" mb="md" color="gray">Filled</Typography>\r
        <Box display="flex" flexDirection="column" gap="sm">\r
          <Alert severity="info" variant="filled">This is a filled info alert</Alert>\r
          <Alert severity="success" variant="filled">This is a filled success alert</Alert>\r
          <Alert severity="warning" variant="filled">This is a filled warning alert</Alert>\r
          <Alert severity="error" variant="filled">This is a filled error alert</Alert>\r
        </Box>\r
      </div>\r
    </Box>
}`,...(V=(I=p.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var M,P,L;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="md" p="md">\r
      <Alert severity="info" title="Info">\r
        This is an info alert with a title.\r
      </Alert>\r
      \r
      <Alert severity="success" title="Success">\r
        This is a success alert with a title.\r
      </Alert>\r
      \r
      <Alert severity="warning" title="Warning">\r
        This is a warning alert with a title.\r
      </Alert>\r
      \r
      <Alert severity="error" title="Error">\r
        This is an error alert with a title.\r
      </Alert>\r
    </Box>
}`,...(L=(P=v.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var U,W,q;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="md" p="md">\r
      <Alert severity="info" showIcon={false}>\r
        This info alert has no icon.\r
      </Alert>\r
      \r
      <Alert severity="success" title="No Icon" showIcon={false}>\r
        This success alert has a title but no icon.\r
      </Alert>\r
      \r
      <Alert severity="warning" variant="outlined" showIcon={false}>\r
        This is an outlined warning alert without an icon.\r
      </Alert>\r
    </Box>
}`,...(q=(W=y.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var F,N,_;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="md" p="md">\r
      <Alert severity="info" title="Custom Icon" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />\r
          </svg>}>\r
        This alert has a custom star icon.\r
      </Alert>\r
      \r
      <Alert severity="success" variant="filled" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />\r
          </svg>}>\r
        This alert has a custom checkmark circle icon.\r
      </Alert>\r
    </Box>
}`,...(_=(N=f.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var E,R,Y;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [alerts, setAlerts] = useState([{
      id: 1,
      severity: 'info',
      message: 'This is a dismissible info alert.'
    }, {
      id: 2,
      severity: 'success',
      message: 'This is a dismissible success alert.'
    }, {
      id: 3,
      severity: 'warning',
      message: 'This is a dismissible warning alert.'
    }, {
      id: 4,
      severity: 'error',
      message: 'This is a dismissible error alert.'
    }] as const);
    const handleClose = (id: number) => {
      setAlerts(alerts.filter(alert => alert.id !== id));
    };
    return <Box display="flex" flexDirection="column" gap="md" p="md">\r
        {alerts.map(alert => <Alert key={alert.id} severity={alert.severity} dismissible onClose={() => handleClose(alert.id)}>\r
            {alert.message}\r
          </Alert>)}\r
        {alerts.length === 0 && <Typography variant="body" color="gray">\r
            All alerts have been dismissed. Refresh the page to see them again.\r
          </Typography>}\r
      </Box>;
  }
}`,...(Y=(R=g.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var H,O,K;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="md" p="md">\r
      <Alert severity="info" title="Update Available" action={<Button size="sm" variant="outline">\r
            Update\r
          </Button>}>\r
        A new version of the application is available.\r
      </Alert>\r
      \r
      <Alert severity="warning" title="Unsaved Changes" action={<Box display="flex" gap="sm">\r
            <Button size="sm" variant="secondary">\r
              Save\r
            </Button>\r
            <Button size="sm" variant="outline">\r
              Discard\r
            </Button>\r
          </Box>}>\r
        You have unsaved changes that will be lost.\r
      </Alert>\r
      \r
      <Alert severity="error" title="Connection Failed" dismissible onClose={() => console.log('Alert closed')} action={<Button size="sm" variant="primary">\r
            Retry\r
          </Button>}>\r
        Unable to connect to the server. Please check your connection.\r
      </Alert>\r
    </Box>
}`,...(K=(O=x.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var G,J,Q;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="lg" p="md">\r
      <div>\r
        <Typography variant="h3" mb="md">System Notifications</Typography>\r
        <Box display="flex" flexDirection="column" gap="sm">\r
          <Alert severity="success" title="Deployment Successful" dismissible>\r
            Your application has been deployed successfully to production.\r
          </Alert>\r
          \r
          <Alert severity="warning" title="High Memory Usage" action={<Button size="sm" variant="outline">\r
                View Details\r
              </Button>}>\r
            Memory usage is at 85%. Consider scaling your application.\r
          </Alert>\r
          \r
          <Alert severity="error" title="Build Failed" dismissible>\r
            The build process encountered errors. Please check your code and try again.\r
          </Alert>\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="md">Form Validation</Typography>\r
        <Box display="flex" flexDirection="column" gap="sm">\r
          <Alert severity="error" variant="outlined">\r
            Please fix the following errors before submitting:\r
            <ul style={{
            margin: '8px 0 0 0',
            paddingLeft: '20px'
          }}>\r
              <li>Email is required</li>\r
              <li>Password must be at least 8 characters</li>\r
              <li>Please accept the terms and conditions</li>\r
            </ul>\r
          </Alert>\r
          \r
          <Alert severity="info" variant="subtle">\r
            Your password strength: Strong. Make sure to save it securely.\r
          </Alert>\r
        </Box>\r
      </div>\r
      \r
      <div>\r
        <Typography variant="h3" mb="md">User Feedback</Typography>\r
        <Box display="flex" flexDirection="column" gap="sm">\r
          <Alert severity="success" title="Settings Saved" variant="filled" dismissible>\r
            Your preferences have been updated successfully.\r
          </Alert>\r
          \r
          <Alert severity="info" title="Pro Tip" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M12 2l.09.06c.18.14.29.36.29.6V9a2.25 2.25 0 0 0 2.25 2.25H21c.24 0 .46.11.6.29l.06.09A2.25 2.25 0 0 0 19.41 15l-6.6 6.6a2.25 2.25 0 0 1-3.18 0l-6.6-6.6A2.25 2.25 0 0 0 2.28 11.66l.06-.09c.14-.18.36-.29.6-.29h6.56A2.25 2.25 0 0 0 12 9V2.66c0-.24.11-.46.29-.6z" />\r
              </svg>}>\r
            Use keyboard shortcuts to navigate faster. Press Ctrl+K to open the command palette.\r
          </Alert>\r
        </Box>\r
      </div>\r
    </Box>
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;A.parameters={...A.parameters,docs:{...(X=A.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    severity: 'info',
    variant: 'subtle',
    title: 'Alert Title',
    children: 'This is the alert message content.',
    showIcon: true,
    dismissible: false
  },
  render: args => <Box display="flex" justifyContent="center" p="md">\r
      <Alert {...args} />\r
    </Box>
}`,...(ee=(Z=A.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const we=["Default","Severities","Variants","WithTitles","WithoutIcons","WithCustomIcon","Dismissible","WithActions","RealWorldExamples","Playground"];export{h as Default,g as Dismissible,A as Playground,b as RealWorldExamples,m as Severities,p as Variants,x as WithActions,f as WithCustomIcon,v as WithTitles,y as WithoutIcons,we as __namedExportsOrder,je as default};
