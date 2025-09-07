import{j as e}from"./jsx-runtime-CDt2p4po.js";import{B as s}from"./Button-B5_6KITS.js";import{r as d}from"./index-GiUgBvb1.js";import{r as Wt}from"./index-CROobee-.js";import{l as g,d as l,m as E}from"./styled-components.browser.esm-Byilhkxn.js";import"./propFilters-BGSNtaQt.js";const It=d.createContext(void 0),P=(t="default")=>({default:g`
      background-color: ${({theme:o})=>o.colors.gray.base};
      border: 1px solid ${({theme:o})=>o.colors.gray.light};
      
      &::before {
        background-color: ${({theme:o})=>o.colors.innovation.primaryBlue};
      }
    `,success:g`
      background-color: ${({theme:o})=>o.colors.gray.base};
      border: 1px solid ${({theme:o})=>o.colors.semantic.success}40;
      
      &::before {
        background-color: ${({theme:o})=>o.colors.semantic.success};
      }
    `,error:g`
      background-color: ${({theme:o})=>o.colors.gray.base};
      border: 1px solid ${({theme:o})=>o.colors.semantic.error}40;
      
      &::before {
        background-color: ${({theme:o})=>o.colors.semantic.error};
      }
    `,warning:g`
      background-color: ${({theme:o})=>o.colors.gray.base};
      border: 1px solid ${({theme:o})=>o.colors.semantic.warning}40;
      
      &::before {
        background-color: ${({theme:o})=>o.colors.semantic.warning};
      }
    `,info:g`
      background-color: ${({theme:o})=>o.colors.gray.base};
      border: 1px solid ${({theme:o})=>o.colors.innovation.primaryBlue}40;
      
      &::before {
        background-color: ${({theme:o})=>o.colors.innovation.primaryBlue};
      }
    `})[t],W=(t="default")=>({success:e.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),error:e.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})}),warning:e.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),info:e.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),default:e.jsx("svg",{viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})})})[t];try{P.displayName="getVariantStyles",P.__docgenInfo={description:"",displayName:"getVariantStyles",props:{}}}catch{}try{W.displayName="getIcon",W.__docgenInfo={description:"",displayName:"getIcon",props:{}}}catch{}const Mt=E`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,Et=E`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`,Ut=E`
  from {
    transform: translateX(var(--radix-toast-swipe-move-x));
  }
  to {
    transform: translateX(100%);
  }
`,Rt=l.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2000;
  width: 420px;
  max-width: 100vw;
  padding: ${({theme:t})=>t.spacing[4]};
  pointer-events: none;
  
  @media (max-width: 640px) {
    left: 0;
    right: 0;
    width: auto;
    padding: ${({theme:t})=>t.spacing[3]};
  }
`,Lt=l.div`
  position: relative;
  background-color: ${({theme:t})=>t.colors.gray.base};
  border-radius: ${({theme:t})=>t.radius.lg};
  box-shadow: ${({theme:t})=>t.shadows.xl};
  padding: ${({theme:t})=>t.spacing[4]};
  margin-bottom: ${({theme:t})=>t.spacing[3]};
  pointer-events: auto;
  overflow: hidden;
  
  ${({variant:t})=>P(t)}
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    border-radius: ${({theme:t})=>t.radius.sm} 0 0 ${({theme:t})=>t.radius.sm};
  }
  
  animation: ${({isRemoving:t})=>t?Et:Mt} 
             ${({theme:t})=>t.durations.normal} 
             ${({theme:t})=>t.easings.easeOut} forwards;
  
  &[data-swipe="move"] {
    transform: translateX(var(--radix-toast-swipe-move-x));
  }
  
  &[data-swipe="end"] {
    animation: ${Ut} ${({theme:t})=>t.durations.fast} ease-out;
  }
`,Nt=l.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:t})=>t.spacing[3]};
  padding-left: ${({theme:t})=>t.spacing[2]};
`,Ot=l.div`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-top: 2px;
  
  svg {
    width: 100%;
    height: 100%;
    
    ${({variant:t})=>{switch(t){case"success":return`color: ${({theme:i})=>i.colors.semantic.success};`;case"error":return`color: ${({theme:i})=>i.colors.semantic.error};`;case"warning":return`color: ${({theme:i})=>i.colors.semantic.warning};`;case"info":return`color: ${({theme:i})=>i.colors.innovation.primaryBlue};`;default:return`color: ${({theme:i})=>i.colors.innovation.primaryBlue};`}}}
  }
`,Vt=l.div`
  flex: 1;
  min-width: 0;
`,Ft=l.div`
  font-family: ${({theme:t})=>t.typography.fonts.body};
  font-size: ${({theme:t})=>t.typography.fontSizes.sm};
  font-weight: ${({theme:t})=>t.typography.fontWeights.medium};
  color: ${({theme:t})=>t.colors.text.primary};
  line-height: ${({theme:t})=>t.typography.lineHeights.tight};
  margin-bottom: ${({theme:t})=>t.spacing[1]};
`,Ht=l.div`
  font-family: ${({theme:t})=>t.typography.fonts.body};
  font-size: ${({theme:t})=>t.typography.fontSizes.xs};
  color: ${({theme:t})=>t.colors.text.muted};
  line-height: ${({theme:t})=>t.typography.lineHeights.normal};
`,Yt=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing[2]};
  margin-top: ${({theme:t})=>t.spacing[3]};
`,Xt=l.button`
  padding: ${({theme:t})=>t.spacing[1]} ${({theme:t})=>t.spacing[3]};
  background-color: transparent;
  border: 1px solid ${({theme:t})=>t.colors.gray.light};
  border-radius: ${({theme:t})=>t.radius.md};
  color: ${({theme:t})=>t.colors.text.primary};
  font-family: ${({theme:t})=>t.typography.fonts.body};
  font-size: ${({theme:t})=>t.typography.fontSizes.xs};
  font-weight: ${({theme:t})=>t.typography.fontWeights.medium};
  cursor: pointer;
  transition: all ${({theme:t})=>t.durations.fast} ${({theme:t})=>t.easings.easeOut};
  
  &:hover {
    background-color: ${({theme:t})=>t.colors.gray.light}20;
    border-color: ${({theme:t})=>t.colors.innovation.primaryBlue}60;
  }
  
  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.innovation.primaryBlue};
    box-shadow: 0 0 0 2px ${({theme:t})=>t.colors.innovation.primaryBlue}40;
  }
`,qt=l.button`
  position: absolute;
  top: ${({theme:t})=>t.spacing[2]};
  right: ${({theme:t})=>t.spacing[2]};
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
  border-radius: ${({theme:t})=>t.radius.sm};
  color: ${({theme:t})=>t.colors.text.muted};
  cursor: pointer;
  transition: all ${({theme:t})=>t.durations.fast} ${({theme:t})=>t.easings.easeOut};
  
  &:hover {
    background-color: ${({theme:t})=>t.colors.gray.light}30;
    color: ${({theme:t})=>t.colors.text.primary};
  }
  
  &:focus {
    outline: none;
    background-color: ${({theme:t})=>t.colors.gray.light}30;
    box-shadow: 0 0 0 2px ${({theme:t})=>t.colors.innovation.primaryBlue}40;
  }
  
  svg {
    width: 14px;
    height: 14px;
  }
`,Qt=({toast:t,isRemoving:i,onDismiss:o})=>e.jsxs(Lt,{variant:t.variant,isRemoving:i,children:[e.jsxs(Nt,{children:[e.jsx(Ot,{variant:t.variant,children:W(t.variant)}),e.jsxs(Vt,{children:[t.title&&e.jsx(Ft,{children:t.title}),t.description&&e.jsx(Ht,{children:t.description}),t.action&&e.jsx(Yt,{children:e.jsx(Xt,{onClick:t.action.onClick,children:t.action.label})})]})]}),t.dismissible!==!1&&e.jsx(qt,{onClick:()=>o(t.id),"aria-label":"Close notification",children:e.jsx("svg",{viewBox:"0 0 14 14",fill:"none",children:e.jsx("path",{d:"M10.5 3.5L3.5 10.5M3.5 3.5l7 7",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),M=({children:t})=>{const[i,o]=d.useState([]),[h,u]=d.useState(new Set),p=d.useCallback(a=>{u(n=>new Set([...n,a])),setTimeout(()=>{o(n=>n.filter(c=>c.id!==a)),u(n=>{const c=new Set(n);return c.delete(a),c})},300)},[]),I=d.useCallback(a=>{const n=Math.random().toString(36).substr(2,9),c={id:n,duration:4e3,dismissible:!0,...a};return o(Pt=>[...Pt,c]),c.duration&&c.duration>0&&setTimeout(()=>{p(n)},c.duration),n},[p]),_=d.useCallback(()=>{const a=i.map(n=>n.id);u(new Set(a)),setTimeout(()=>{o([]),u(new Set)},300)},[i]),_t={toasts:i,toast:I,dismiss:p,dismissAll:_};return e.jsxs(It.Provider,{value:_t,children:[t,Wt.createPortal(e.jsx(Rt,{children:i.map(a=>e.jsx(Qt,{toast:a,isRemoving:h.has(a.id),onDismiss:p},a.id))}),document.body)]})};try{M.displayName="ToastProvider",M.__docgenInfo={description:"",displayName:"ToastProvider",props:{}}}catch{}const m=()=>{const t=d.useContext(It);if(!t)throw new Error("useToast must be used within ToastProvider");return t},oe={title:"UI/Toast",parameters:{layout:"centered"},tags:["autodocs"],decorators:[t=>e.jsx(M,{children:e.jsx(t,{})})]},r=({variant:t,title:i,description:o,duration:h,action:u,dismissible:p=!0})=>{const{toast:I}=m(),_=()=>{I({variant:t,title:i,description:o,duration:h,dismissible:p,...u&&{action:{label:"Undo",onClick:()=>console.log("Action clicked")}}})};return e.jsxs(s,{onClick:_,children:["Show ",t||"default"," toast"]})},f={render:()=>e.jsx(r,{title:"Default notification",description:"This is a default toast notification."})},v={render:()=>e.jsx(r,{variant:"success",title:"Success!",description:"Your changes have been saved successfully."})},y={render:()=>e.jsx(r,{variant:"error",title:"Error occurred",description:"Failed to save your changes. Please try again."})},x={render:()=>e.jsx(r,{variant:"warning",title:"Warning",description:"This action cannot be undone."})},b={render:()=>e.jsx(r,{variant:"info",title:"Information",description:"New features are available in this update."})},T={render:()=>e.jsx(r,{variant:"success",title:"File deleted",description:"Your file has been moved to trash.",action:!0})},w={render:()=>e.jsx(r,{variant:"success",title:"Changes saved"})},$={render:()=>e.jsx(r,{variant:"info",description:"This toast only has a description without a title."})},S={render:()=>e.jsx(r,{variant:"warning",title:"System maintenance",description:"This notification cannot be dismissed.",dismissible:!1,duration:0})},k={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(r,{variant:"info",title:"Quick toast",description:"This will disappear in 1 second.",duration:1e3}),e.jsx(r,{variant:"warning",title:"Long toast",description:"This will stay for 10 seconds.",duration:1e4}),e.jsx(r,{variant:"error",title:"Persistent toast",description:"This won't auto-dismiss.",duration:0})]})},j={render:()=>{const{toast:t}=m(),i=()=>{t({variant:"default",title:"Default Toast",description:"This is a default notification."}),setTimeout(()=>{t({variant:"success",title:"Success Toast",description:"Operation completed successfully."})},200),setTimeout(()=>{t({variant:"error",title:"Error Toast",description:"Something went wrong."})},400),setTimeout(()=>{t({variant:"warning",title:"Warning Toast",description:"Please be careful."})},600),setTimeout(()=>{t({variant:"info",title:"Info Toast",description:"Here is some information."})},800)};return e.jsx(s,{onClick:i,children:"Show All Variants"})}},C={render:()=>{const{toast:t}=m(),i=()=>{for(let o=1;o<=5;o++)setTimeout(()=>{t({variant:o%2===0?"success":"info",title:`Toast ${o}`,description:`This is toast number ${o} of 5.`})},o*150)};return e.jsx(s,{onClick:i,children:"Show Multiple Toasts"})}},B={render:()=>{const{toast:t,dismissAll:i}=m(),o=()=>{t({variant:"info",title:"Toast 1",description:"First toast",duration:0}),t({variant:"success",title:"Toast 2",description:"Second toast",duration:0}),t({variant:"warning",title:"Toast 3",description:"Third toast",duration:0})};return e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(s,{onClick:o,children:"Show Some Toasts"}),e.jsx(s,{variant:"destructive",onClick:i,children:"Dismiss All"})]})}},D={render:()=>{const{toast:t}=m(),i=[{label:"Save Document",action:()=>t({variant:"success",title:"Document saved",description:"Your changes have been automatically saved."})},{label:"Delete Item",action:()=>t({variant:"success",title:"Item deleted",description:"The item has been moved to trash.",action:{label:"Undo",onClick:()=>console.log("Undo delete")}})},{label:"Network Error",action:()=>t({variant:"error",title:"Connection failed",description:"Unable to connect to the server. Please check your internet connection.",duration:6e3})},{label:"Form Validation",action:()=>t({variant:"warning",title:"Missing required fields",description:"Please fill in all required fields before submitting."})},{label:"Update Available",action:()=>t({variant:"info",title:"Update available",description:"A new version of the application is ready to install.",action:{label:"Update",onClick:()=>console.log("Start update")},duration:0})},{label:"File Upload",action:()=>{t({variant:"info",title:"Uploading file...",description:"Please wait while your file is being uploaded.",dismissible:!1,duration:2e3}),setTimeout(()=>{t({variant:"success",title:"Upload complete",description:"Your file has been uploaded successfully."})},2500)}}];return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem",width:"400px"},children:i.map((o,h)=>e.jsx(s,{variant:"outline",onClick:o.action,children:o.label},h))})}},z={render:()=>e.jsx(r,{variant:"info",title:"This is a very long title that might wrap to multiple lines in the toast notification",description:"This is a very long description that contains a lot of text to test how the toast handles content that might be longer than expected. It should wrap properly and maintain good readability while staying within reasonable bounds."})},A={render:()=>{const{toast:t}=m();return e.jsxs("div",{children:[e.jsx("h3",{style:{color:"white",marginBottom:"1rem"},children:"Toast Playground"}),e.jsx("p",{style:{color:"white",marginBottom:"2rem",fontSize:"0.875rem"},children:"Try different combinations of toasts. They stack nicely and animate smoothly."}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"0.75rem",maxWidth:"600px"},children:[e.jsx(s,{size:"sm",onClick:()=>t({title:"Simple"}),children:"Simple"}),e.jsx(s,{size:"sm",variant:"outline",onClick:()=>t({variant:"success",title:"Success!",description:"Task completed."}),children:"Success"}),e.jsx(s,{size:"sm",variant:"destructive",onClick:()=>t({variant:"error",title:"Error!",description:"Something went wrong."}),children:"Error"}),e.jsx(s,{size:"sm",onClick:()=>t({variant:"warning",title:"Warning!",description:"Please be careful."}),children:"Warning"}),e.jsx(s,{size:"sm",onClick:()=>t({variant:"info",title:"Info",description:"Here is some information."}),children:"Info"}),e.jsx(s,{size:"sm",onClick:()=>t({title:"With Action",description:"Try the action button.",action:{label:"Action",onClick:()=>{}}}),children:"With Action"})]})]})}};var U,R,L;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <ToastDemo title="Default notification" description="This is a default toast notification." />
}`,...(L=(R=f.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var N,O,V;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <ToastDemo variant="success" title="Success!" description="Your changes have been saved successfully." />
}`,...(V=(O=v.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var F,H,Y;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <ToastDemo variant="error" title="Error occurred" description="Failed to save your changes. Please try again." />
}`,...(Y=(H=y.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var X,q,Q;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <ToastDemo variant="warning" title="Warning" description="This action cannot be undone." />
}`,...(Q=(q=x.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var G,J,K;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <ToastDemo variant="info" title="Information" description="New features are available in this update." />
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Z,tt,et;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <ToastDemo variant="success" title="File deleted" description="Your file has been moved to trash." action={true} />
}`,...(et=(tt=T.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var ot,it,rt;w.parameters={...w.parameters,docs:{...(ot=w.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  render: () => <ToastDemo variant="success" title="Changes saved" />
}`,...(rt=(it=w.parameters)==null?void 0:it.docs)==null?void 0:rt.source}}};var st,at,nt;$.parameters={...$.parameters,docs:{...(st=$.parameters)==null?void 0:st.docs,source:{originalSource:`{
  render: () => <ToastDemo variant="info" description="This toast only has a description without a title." />
}`,...(nt=(at=$.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var lt,ct,dt;S.parameters={...S.parameters,docs:{...(lt=S.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  render: () => <ToastDemo variant="warning" title="System maintenance" description="This notification cannot be dismissed." dismissible={false} duration={0} />
}`,...(dt=(ct=S.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var ut,pt,mt;k.parameters={...k.parameters,docs:{...(ut=k.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>\r
      <ToastDemo variant="info" title="Quick toast" description="This will disappear in 1 second." duration={1000} />\r
      <ToastDemo variant="warning" title="Long toast" description="This will stay for 10 seconds." duration={10000} />\r
      <ToastDemo variant="error" title="Persistent toast" description="This won't auto-dismiss." duration={0} />\r
    </div>
}`,...(mt=(pt=k.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var ht,gt,ft;j.parameters={...j.parameters,docs:{...(ht=j.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  render: () => {
    const {
      toast
    } = useToast();
    const showAllToasts = () => {
      toast({
        variant: 'default',
        title: 'Default Toast',
        description: 'This is a default notification.'
      });
      setTimeout(() => {
        toast({
          variant: 'success',
          title: 'Success Toast',
          description: 'Operation completed successfully.'
        });
      }, 200);
      setTimeout(() => {
        toast({
          variant: 'error',
          title: 'Error Toast',
          description: 'Something went wrong.'
        });
      }, 400);
      setTimeout(() => {
        toast({
          variant: 'warning',
          title: 'Warning Toast',
          description: 'Please be careful.'
        });
      }, 600);
      setTimeout(() => {
        toast({
          variant: 'info',
          title: 'Info Toast',
          description: 'Here is some information.'
        });
      }, 800);
    };
    return <Button onClick={showAllToasts}>\r
        Show All Variants\r
      </Button>;
  }
}`,...(ft=(gt=j.parameters)==null?void 0:gt.docs)==null?void 0:ft.source}}};var vt,yt,xt;C.parameters={...C.parameters,docs:{...(vt=C.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  render: () => {
    const {
      toast
    } = useToast();
    const showMultipleToasts = () => {
      for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
          toast({
            variant: i % 2 === 0 ? 'success' : 'info',
            title: \`Toast \${i}\`,
            description: \`This is toast number \${i} of 5.\`
          });
        }, i * 150);
      }
    };
    return <Button onClick={showMultipleToasts}>\r
        Show Multiple Toasts\r
      </Button>;
  }
}`,...(xt=(yt=C.parameters)==null?void 0:yt.docs)==null?void 0:xt.source}}};var bt,Tt,wt;B.parameters={...B.parameters,docs:{...(bt=B.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  render: () => {
    const {
      toast,
      dismissAll
    } = useToast();
    const showSomeToasts = () => {
      toast({
        variant: 'info',
        title: 'Toast 1',
        description: 'First toast',
        duration: 0
      });
      toast({
        variant: 'success',
        title: 'Toast 2',
        description: 'Second toast',
        duration: 0
      });
      toast({
        variant: 'warning',
        title: 'Toast 3',
        description: 'Third toast',
        duration: 0
      });
    };
    return <div style={{
      display: 'flex',
      gap: '1rem'
    }}>\r
        <Button onClick={showSomeToasts}>\r
          Show Some Toasts\r
        </Button>\r
        <Button variant="destructive" onClick={dismissAll}>\r
          Dismiss All\r
        </Button>\r
      </div>;
  }
}`,...(wt=(Tt=B.parameters)==null?void 0:Tt.docs)==null?void 0:wt.source}}};var $t,St,kt;D.parameters={...D.parameters,docs:{...($t=D.parameters)==null?void 0:$t.docs,source:{originalSource:`{
  render: () => {
    const {
      toast
    } = useToast();
    const examples = [{
      label: 'Save Document',
      action: () => toast({
        variant: 'success',
        title: 'Document saved',
        description: 'Your changes have been automatically saved.'
      })
    }, {
      label: 'Delete Item',
      action: () => toast({
        variant: 'success',
        title: 'Item deleted',
        description: 'The item has been moved to trash.',
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo delete')
        }
      })
    }, {
      label: 'Network Error',
      action: () => toast({
        variant: 'error',
        title: 'Connection failed',
        description: 'Unable to connect to the server. Please check your internet connection.',
        duration: 6000
      })
    }, {
      label: 'Form Validation',
      action: () => toast({
        variant: 'warning',
        title: 'Missing required fields',
        description: 'Please fill in all required fields before submitting.'
      })
    }, {
      label: 'Update Available',
      action: () => toast({
        variant: 'info',
        title: 'Update available',
        description: 'A new version of the application is ready to install.',
        action: {
          label: 'Update',
          onClick: () => console.log('Start update')
        },
        duration: 0
      })
    }, {
      label: 'File Upload',
      action: () => {
        toast({
          variant: 'info',
          title: 'Uploading file...',
          description: 'Please wait while your file is being uploaded.',
          dismissible: false,
          duration: 2000
        });
        setTimeout(() => {
          toast({
            variant: 'success',
            title: 'Upload complete',
            description: 'Your file has been uploaded successfully.'
          });
        }, 2500);
      }
    }];
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1rem',
      width: '400px'
    }}>\r
        {examples.map((example, i) => <Button key={i} variant="outline" onClick={example.action}>\r
            {example.label}\r
          </Button>)}\r
      </div>;
  }
}`,...(kt=(St=D.parameters)==null?void 0:St.docs)==null?void 0:kt.source}}};var jt,Ct,Bt;z.parameters={...z.parameters,docs:{...(jt=z.parameters)==null?void 0:jt.docs,source:{originalSource:`{
  render: () => <ToastDemo variant="info" title="This is a very long title that might wrap to multiple lines in the toast notification" description="This is a very long description that contains a lot of text to test how the toast handles content that might be longer than expected. It should wrap properly and maintain good readability while staying within reasonable bounds." />
}`,...(Bt=(Ct=z.parameters)==null?void 0:Ct.docs)==null?void 0:Bt.source}}};var Dt,zt,At;A.parameters={...A.parameters,docs:{...(Dt=A.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  render: () => {
    const {
      toast
    } = useToast();
    return <div>\r
        <h3 style={{
        color: 'white',
        marginBottom: '1rem'
      }}>Toast Playground</h3>\r
        <p style={{
        color: 'white',
        marginBottom: '2rem',
        fontSize: '0.875rem'
      }}>\r
          Try different combinations of toasts. They stack nicely and animate smoothly.\r
        </p>\r
        \r
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '0.75rem',
        maxWidth: '600px'
      }}>\r
          <Button size="sm" onClick={() => toast({
          title: 'Simple'
        })}>\r
            Simple\r
          </Button>\r
          <Button size="sm" variant="outline" onClick={() => toast({
          variant: 'success',
          title: 'Success!',
          description: 'Task completed.'
        })}>\r
            Success\r
          </Button>\r
          <Button size="sm" variant="destructive" onClick={() => toast({
          variant: 'error',
          title: 'Error!',
          description: 'Something went wrong.'
        })}>\r
            Error\r
          </Button>\r
          <Button size="sm" onClick={() => toast({
          variant: 'warning',
          title: 'Warning!',
          description: 'Please be careful.'
        })}>\r
            Warning\r
          </Button>\r
          <Button size="sm" onClick={() => toast({
          variant: 'info',
          title: 'Info',
          description: 'Here is some information.'
        })}>\r
            Info\r
          </Button>\r
          <Button size="sm" onClick={() => toast({
          title: 'With Action',
          description: 'Try the action button.',
          action: {
            label: 'Action',
            onClick: () => {}
          }
        })}>\r
            With Action\r
          </Button>\r
        </div>\r
      </div>;
  }
}`,...(At=(zt=A.parameters)==null?void 0:zt.docs)==null?void 0:At.source}}};const ie=["Default","Success","Error","Warning","Info","WithAction","TitleOnly","DescriptionOnly","NonDismissible","CustomDuration","AllVariants","MultipleToasts","DismissAll","RealWorldExamples","LongContent","Playground"];export{j as AllVariants,k as CustomDuration,f as Default,$ as DescriptionOnly,B as DismissAll,y as Error,b as Info,z as LongContent,C as MultipleToasts,S as NonDismissible,A as Playground,D as RealWorldExamples,v as Success,w as TitleOnly,x as Warning,T as WithAction,ie as __namedExportsOrder,oe as default};
