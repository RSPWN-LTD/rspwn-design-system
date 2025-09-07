import{j as r}from"./jsx-runtime-CDt2p4po.js";import{r as d}from"./index-GiUgBvb1.js";import{r as he}from"./index-CROobee-.js";import{d as m,l as p}from"./styled-components.browser.esm-Byilhkxn.js";import{B as o}from"./Button-B5_6KITS.js";import"./propFilters-BGSNtaQt.js";const ge=e=>{switch(e){case"sm":return p`
        max-width: 400px;
        width: 90%;
      `;case"lg":return p`
        max-width: 800px;
        width: 90%;
      `;case"xl":return p`
        max-width: 1200px;
        width: 95%;
      `;case"full":return p`
        width: 100vw;
        height: 100vh;
        max-width: none;
        max-height: none;
        border-radius: 0;
      `;default:return p`
        max-width: 600px;
        width: 90%;
      `}},ye=m.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({theme:e})=>e.colors.foundation.black}80;
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[4]};
  
  opacity: ${({isOpen:e})=>e?1:0};
  visibility: ${({isOpen:e})=>e?"visible":"hidden"};
  transition: all ${({theme:e})=>e.durations.normal} ${({theme:e})=>e.easings.easeOut};
`,xe=m.div`
  background-color: ${({theme:e})=>e.colors.gray.base};
  border-radius: ${({theme:e})=>e.radius.lg};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  position: relative;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  ${({size:e})=>ge(e)}
  
  transform: ${({isOpen:e})=>e?"scale(1) translateY(0)":"scale(0.95) translateY(-20px)"};
  transition: transform ${({theme:e})=>e.durations.normal} ${({theme:e})=>e.easings.easeOut};
`,fe=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.gray.light};
  flex-shrink: 0;
`,ve=m.h2`
  font-family: ${({theme:e})=>e.typography.fonts.body};
  font-size: ${({theme:e})=>e.typography.fontSizes.xl};
  font-weight: ${({theme:e})=>e.typography.fontWeights.semibold};
  color: ${({theme:e})=>e.colors.text.primary};
  margin: 0;
  line-height: ${({theme:e})=>e.typography.lineHeights.tight};
`,be=m.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  background-color: transparent;
  border-radius: ${({theme:e})=>e.radius.md};
  cursor: pointer;
  color: ${({theme:e})=>e.colors.text.secondary};
  transition: all ${({theme:e})=>e.durations.fast} ${({theme:e})=>e.easings.easeOut};
  position: relative;
  flex-shrink: 0;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.gray.light}20;
    color: ${({theme:e})=>e.colors.text.primary};
  }
  
  &:focus {
    outline: none;
    background-color: ${({theme:e})=>e.colors.gray.light}20;
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.innovation.primaryBlue}40;
  }
  
  &:active {
    background-color: ${({theme:e})=>e.colors.gray.light}40;
  }
  
  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`,we=m.div`
  padding: ${({theme:e})=>e.spacing[4]};
  overflow-y: auto;
  flex: 1;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.gray.dark};
    border-radius: ${({theme:e})=>e.radius.sm};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.gray.light};
    border-radius: ${({theme:e})=>e.radius.sm};
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>e.colors.text.muted};
  }
`,s=({isOpen:e,onClose:t,title:n,size:l="md",showCloseButton:c=!0,closeOnOverlayClick:S=!0,closeOnEscape:B=!0,children:ce,className:me})=>{const M=d.useCallback(a=>{B&&a.key==="Escape"&&e&&t()},[B,e,t]),pe=d.useCallback(a=>{S&&a.target===a.currentTarget&&t()},[S,t]);if(d.useEffect(()=>{if(e){document.body.style.overflow="hidden",document.addEventListener("keydown",M);const a=document.querySelector('[data-modal="true"]');a&&a.focus()}else document.body.style.overflow="unset";return()=>{document.removeEventListener("keydown",M),document.body.style.overflow="unset"}},[e,M]),!e)return null;const ue=r.jsx(ye,{isOpen:e,onClick:pe,children:r.jsxs(xe,{size:l,isOpen:e,className:me,"data-modal":"true",tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":n?"modal-title":void 0,children:[(n||c)&&r.jsxs(fe,{children:[n&&r.jsx(ve,{id:"modal-title",children:n}),c&&r.jsx(be,{onClick:t,"aria-label":"Close modal",type:"button",children:r.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M18 6L6 18M6 6l12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),r.jsx(we,{children:ce})]})});return he.createPortal(ue,document.body)};s.displayName="Modal";try{s.displayName="Modal",s.__docgenInfo={description:"",displayName:"Modal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"full"'}]}},showCloseButton:{defaultValue:{value:"true"},description:"",name:"showCloseButton",required:!1,type:{name:"boolean"}},closeOnOverlayClick:{defaultValue:{value:"true"},description:"",name:"closeOnOverlayClick",required:!1,type:{name:"boolean"}},closeOnEscape:{defaultValue:{value:"true"},description:"",name:"closeOnEscape",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ze={title:"UI/Modal",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg","xl","full"]},isOpen:{control:{type:"boolean"}},showCloseButton:{control:{type:"boolean"}},closeOnOverlayClick:{control:{type:"boolean"}},closeOnEscape:{control:{type:"boolean"}}}},i=e=>{const[t,n]=d.useState(e.isOpen||!1);return r.jsxs("div",{children:[r.jsx(o,{onClick:()=>n(!0),children:"Open Modal"}),r.jsx(s,{...e,isOpen:t,onClose:()=>n(!1),children:e.children})]})},u={render:e=>r.jsx(i,{...e}),args:{title:"Default Modal",children:r.jsxs("div",{children:[r.jsx("p",{style:{color:"white",margin:"0 0 1rem 0"},children:"This is a default modal with standard settings."}),r.jsx("p",{style:{color:"white",margin:0},children:"You can close it by clicking the X button, pressing Escape, or clicking outside."})]})}},h={render:e=>r.jsx(i,{...e}),args:{children:r.jsxs("div",{children:[r.jsx("h3",{style:{color:"white",margin:"0 0 1rem 0"},children:"Custom Content"}),r.jsx("p",{style:{color:"white",margin:0},children:"This modal doesn't have a title prop, so only the close button appears in the header."})]})}},g={render:e=>r.jsx(i,{...e}),args:{title:"No Close Button",showCloseButton:!1,children:r.jsxs("div",{children:[r.jsx("p",{style:{color:"white",margin:"0 0 1rem 0"},children:"This modal has no close button. You can still close it by pressing Escape or clicking outside."}),r.jsx(o,{onClick:()=>{},children:"Custom Action"})]})}},y={render:()=>{const[e,t]=d.useState(null),n=[{key:"sm",label:"Small"},{key:"md",label:"Medium"},{key:"lg",label:"Large"},{key:"xl",label:"Extra Large"},{key:"full",label:"Full Screen"}];return r.jsx("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:n.map(({key:l,label:c})=>r.jsxs("div",{children:[r.jsx(o,{onClick:()=>t(l),children:c}),r.jsx(s,{isOpen:e===l,onClose:()=>t(null),size:l,title:`${c} Modal`,children:r.jsxs("p",{style:{color:"white",margin:0},children:["This is a ",c.toLowerCase()," modal. The content area adjusts to the specified size."]})})]},l))})}},x={render:e=>r.jsx(i,{...e}),args:{title:"Cannot Close Easily",closeOnOverlayClick:!1,closeOnEscape:!1,children:r.jsxs("div",{children:[r.jsx("p",{style:{color:"white",margin:"0 0 1rem 0"},children:"This modal can only be closed by clicking the X button."}),r.jsx("p",{style:{color:"white",margin:0},children:"Overlay clicks and Escape key are disabled."})]})}},f={render:e=>r.jsx(i,{...e}),args:{title:"Scrollable Content",size:"md",children:r.jsxs("div",{children:[r.jsx("p",{style:{color:"white",margin:"0 0 1rem 0"},children:"This modal has a lot of content that requires scrolling:"}),Array.from({length:20},(e,t)=>r.jsxs("p",{style:{color:"white",margin:"0 0 1rem 0"},children:["Paragraph ",t+1,": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."]},t)),r.jsx(o,{children:"Action at Bottom"})]})}},v={render:e=>r.jsx(i,{...e}),args:{title:"User Registration",size:"md",children:r.jsx("div",{children:r.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",color:"white",marginBottom:"0.5rem"},children:"Full Name"}),r.jsx("input",{type:"text",style:{width:"100%",padding:"0.5rem",borderRadius:"4px",border:"1px solid #333",backgroundColor:"#1a1a1a",color:"white"}})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",color:"white",marginBottom:"0.5rem"},children:"Email"}),r.jsx("input",{type:"email",style:{width:"100%",padding:"0.5rem",borderRadius:"4px",border:"1px solid #333",backgroundColor:"#1a1a1a",color:"white"}})]}),r.jsxs("div",{children:[r.jsx("label",{style:{display:"block",color:"white",marginBottom:"0.5rem"},children:"Message"}),r.jsx("textarea",{rows:4,style:{width:"100%",padding:"0.5rem",borderRadius:"4px",border:"1px solid #333",backgroundColor:"#1a1a1a",color:"white",resize:"vertical"}})]}),r.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"flex-end"},children:[r.jsx(o,{variant:"outline",children:"Cancel"}),r.jsx(o,{children:"Submit"})]})]})})}},b={render:e=>r.jsx(i,{...e}),args:{title:"Confirm Action",size:"sm",children:r.jsxs("div",{children:[r.jsx("p",{style:{color:"white",margin:"0 0 1.5rem 0"},children:"Are you sure you want to delete this item? This action cannot be undone."}),r.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"flex-end"},children:[r.jsx(o,{variant:"outline",children:"Cancel"}),r.jsx(o,{variant:"destructive",children:"Delete"})]})]})}},w={render:e=>r.jsx(i,{...e}),args:{title:"Image Gallery",size:"lg",children:r.jsxs("div",{children:[r.jsx("div",{style:{width:"100%",height:"400px",backgroundColor:"#333",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1rem"},children:r.jsx("span",{style:{color:"white",fontSize:"1.2rem"},children:"Image Placeholder"})}),r.jsx("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"center"},children:Array.from({length:5},(e,t)=>r.jsx("div",{style:{width:"60px",height:"60px",backgroundColor:"#444",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:r.jsx("span",{style:{color:"white",fontSize:"0.75rem"},children:t+1})},t))})]})}},j={render:e=>r.jsx(i,{...e}),args:{title:"Application Settings",size:"lg",children:r.jsx("div",{children:r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"200px 1fr",gap:"2rem"},children:[r.jsxs("nav",{style:{borderRight:"1px solid #333",paddingRight:"1rem"},children:[r.jsx("h4",{style:{color:"white",margin:"0 0 1rem 0"},children:"Categories"}),r.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:["General","Privacy","Notifications","Advanced"].map(e=>r.jsx("li",{style:{marginBottom:"0.5rem"},children:r.jsx("button",{style:{background:"none",border:"none",color:"white",cursor:"pointer",padding:"0.5rem",width:"100%",textAlign:"left",borderRadius:"4px"},children:e})},e))})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{color:"white",margin:"0 0 1rem 0"},children:"General Settings"}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:Array.from({length:6},(e,t)=>r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[r.jsxs("label",{style:{color:"white"},children:["Setting ",t+1]}),r.jsx("input",{type:"checkbox"})]},t))})]})]})})}},k={render:e=>r.jsx(i,{...e}),args:{title:"Full Screen Experience",size:"full",children:r.jsx("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:r.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx("h2",{style:{color:"white",margin:"0 0 1rem 0"},children:"Full Screen Modal"}),r.jsx("p",{style:{color:"white",margin:0,fontSize:"1.2rem"},children:"This modal takes up the entire viewport, perfect for immersive experiences."})]})})})}},C={render:()=>{const[e,t]=d.useState(!1),[n,l]=d.useState(!1);return r.jsxs("div",{children:[r.jsx(o,{onClick:()=>t(!0),children:"Open First Modal"}),r.jsx(s,{isOpen:e,onClose:()=>t(!1),title:"First Modal",children:r.jsxs("div",{children:[r.jsx("p",{style:{color:"white",margin:"0 0 1rem 0"},children:"This is the first modal. You can open another modal from here."}),r.jsx(o,{onClick:()=>l(!0),children:"Open Second Modal"})]})}),r.jsx(s,{isOpen:n,onClose:()=>l(!1),title:"Second Modal",size:"sm",children:r.jsxs("div",{children:[r.jsx("p",{style:{color:"white",margin:"0 0 1rem 0"},children:"This is a nested modal. Notice how it appears on top of the first one."}),r.jsx(o,{onClick:()=>l(!1),children:"Close This Modal"})]})})]})}};var z,$,O;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    title: 'Default Modal',
    children: <div>\r
        <p style={{
        color: 'white',
        margin: '0 0 1rem 0'
      }}>\r
          This is a default modal with standard settings.\r
        </p>\r
        <p style={{
        color: 'white',
        margin: 0
      }}>\r
          You can close it by clicking the X button, pressing Escape, or clicking outside.\r
        </p>\r
      </div>
  }
}`,...(O=($=u.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var T,E,A;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    children: <div>\r
        <h3 style={{
        color: 'white',
        margin: '0 0 1rem 0'
      }}>Custom Content</h3>\r
        <p style={{
        color: 'white',
        margin: 0
      }}>\r
          This modal doesn't have a title prop, so only the close button appears in the header.\r
        </p>\r
      </div>
  }
}`,...(A=(E=h.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var F,R,I;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    title: 'No Close Button',
    showCloseButton: false,
    children: <div>\r
        <p style={{
        color: 'white',
        margin: '0 0 1rem 0'
      }}>\r
          This modal has no close button. You can still close it by pressing Escape or clicking outside.\r
        </p>\r
        <Button onClick={() => {}}>Custom Action</Button>\r
      </div>
  }
}`,...(I=(R=g.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var N,W,_;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const sizes = [{
      key: 'sm',
      label: 'Small'
    }, {
      key: 'md',
      label: 'Medium'
    }, {
      key: 'lg',
      label: 'Large'
    }, {
      key: 'xl',
      label: 'Extra Large'
    }, {
      key: 'full',
      label: 'Full Screen'
    }];
    return <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    }}>\r
        {sizes.map(({
        key,
        label
      }) => <div key={key}>\r
            <Button onClick={() => setActiveModal(key)}>{label}</Button>\r
            <Modal isOpen={activeModal === key} onClose={() => setActiveModal(null)} size={key as any} title={\`\${label} Modal\`}>\r
              <p style={{
            color: 'white',
            margin: 0
          }}>\r
                This is a {label.toLowerCase()} modal. The content area adjusts to the specified size.\r
              </p>\r
            </Modal>\r
          </div>)}\r
      </div>;
  }
}`,...(_=(W=y.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var q,D,L;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    title: 'Cannot Close Easily',
    closeOnOverlayClick: false,
    closeOnEscape: false,
    children: <div>\r
        <p style={{
        color: 'white',
        margin: '0 0 1rem 0'
      }}>\r
          This modal can only be closed by clicking the X button.\r
        </p>\r
        <p style={{
        color: 'white',
        margin: 0
      }}>\r
          Overlay clicks and Escape key are disabled.\r
        </p>\r
      </div>
  }
}`,...(L=(D=x.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var G,V,Y;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    title: 'Scrollable Content',
    size: 'md',
    children: <div>\r
        <p style={{
        color: 'white',
        margin: '0 0 1rem 0'
      }}>\r
          This modal has a lot of content that requires scrolling:\r
        </p>\r
        {Array.from({
        length: 20
      }, (_, i) => <p key={i} style={{
        color: 'white',
        margin: '0 0 1rem 0'
      }}>\r
            Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. \r
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \r
            minim veniam, quis nostrud exercitation ullamco laboris.\r
          </p>)}\r
        <Button>Action at Bottom</Button>\r
      </div>
  }
}`,...(Y=(V=f.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var P,U,X;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    title: 'User Registration',
    size: 'md',
    children: <div>\r
        <form style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>\r
          <div>\r
            <label style={{
            display: 'block',
            color: 'white',
            marginBottom: '0.5rem'
          }}>\r
              Full Name\r
            </label>\r
            <input type="text" style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #333',
            backgroundColor: '#1a1a1a',
            color: 'white'
          }} />\r
          </div>\r
          <div>\r
            <label style={{
            display: 'block',
            color: 'white',
            marginBottom: '0.5rem'
          }}>\r
              Email\r
            </label>\r
            <input type="email" style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #333',
            backgroundColor: '#1a1a1a',
            color: 'white'
          }} />\r
          </div>\r
          <div>\r
            <label style={{
            display: 'block',
            color: 'white',
            marginBottom: '0.5rem'
          }}>\r
              Message\r
            </label>\r
            <textarea rows={4} style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #333',
            backgroundColor: '#1a1a1a',
            color: 'white',
            resize: 'vertical'
          }} />\r
          </div>\r
          <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'flex-end'
        }}>\r
            <Button variant="outline">Cancel</Button>\r
            <Button>Submit</Button>\r
          </div>\r
        </form>\r
      </div>
  }
}`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var H,J,K;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    title: 'Confirm Action',
    size: 'sm',
    children: <div>\r
        <p style={{
        color: 'white',
        margin: '0 0 1.5rem 0'
      }}>\r
          Are you sure you want to delete this item? This action cannot be undone.\r
        </p>\r
        <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'flex-end'
      }}>\r
          <Button variant="outline">Cancel</Button>\r
          <Button variant="destructive">Delete</Button>\r
        </div>\r
      </div>
  }
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Z,ee;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    title: 'Image Gallery',
    size: 'lg',
    children: <div>\r
        <div style={{
        width: '100%',
        height: '400px',
        backgroundColor: '#333',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1rem'
      }}>\r
          <span style={{
          color: 'white',
          fontSize: '1.2rem'
        }}>Image Placeholder</span>\r
        </div>\r
        <div style={{
        display: 'flex',
        gap: '0.5rem',
        justifyContent: 'center'
      }}>\r
          {Array.from({
          length: 5
        }, (_, i) => <div key={i} style={{
          width: '60px',
          height: '60px',
          backgroundColor: '#444',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}>\r
              <span style={{
            color: 'white',
            fontSize: '0.75rem'
          }}>{i + 1}</span>\r
            </div>)}\r
        </div>\r
      </div>
  }
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,te,ne;j.parameters={...j.parameters,docs:{...(re=j.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    title: 'Application Settings',
    size: 'lg',
    children: <div>\r
        <div style={{
        display: 'grid',
        gridTemplateColumns: '200px 1fr',
        gap: '2rem'
      }}>\r
          <nav style={{
          borderRight: '1px solid #333',
          paddingRight: '1rem'
        }}>\r
            <h4 style={{
            color: 'white',
            margin: '0 0 1rem 0'
          }}>Categories</h4>\r
            <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>\r
              {['General', 'Privacy', 'Notifications', 'Advanced'].map(item => <li key={item} style={{
              marginBottom: '0.5rem'
            }}>\r
                  <button style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                padding: '0.5rem',
                width: '100%',
                textAlign: 'left',
                borderRadius: '4px'
              }}>\r
                    {item}\r
                  </button>\r
                </li>)}\r
            </ul>\r
          </nav>\r
          <div>\r
            <h4 style={{
            color: 'white',
            margin: '0 0 1rem 0'
          }}>General Settings</h4>\r
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>\r
              {Array.from({
              length: 6
            }, (_, i) => <div key={i} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>\r
                  <label style={{
                color: 'white'
              }}>Setting {i + 1}</label>\r
                  <input type="checkbox" />\r
                </div>)}\r
            </div>\r
          </div>\r
        </div>\r
      </div>
  }
}`,...(ne=(te=j.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,le,ie;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    title: 'Full Screen Experience',
    size: 'full',
    children: <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>\r
        <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>\r
          <div style={{
          textAlign: 'center'
        }}>\r
            <h2 style={{
            color: 'white',
            margin: '0 0 1rem 0'
          }}>Full Screen Modal</h2>\r
            <p style={{
            color: 'white',
            margin: 0,
            fontSize: '1.2rem'
          }}>\r
              This modal takes up the entire viewport, perfect for immersive experiences.\r
            </p>\r
          </div>\r
        </div>\r
      </div>
  }
}`,...(ie=(le=k.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var se,ae,de;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [firstModal, setFirstModal] = useState(false);
    const [secondModal, setSecondModal] = useState(false);
    return <div>\r
        <Button onClick={() => setFirstModal(true)}>Open First Modal</Button>\r
        \r
        <Modal isOpen={firstModal} onClose={() => setFirstModal(false)} title="First Modal">\r
          <div>\r
            <p style={{
            color: 'white',
            margin: '0 0 1rem 0'
          }}>\r
              This is the first modal. You can open another modal from here.\r
            </p>\r
            <Button onClick={() => setSecondModal(true)}>Open Second Modal</Button>\r
          </div>\r
        </Modal>\r
        \r
        <Modal isOpen={secondModal} onClose={() => setSecondModal(false)} title="Second Modal" size="sm">\r
          <div>\r
            <p style={{
            color: 'white',
            margin: '0 0 1rem 0'
          }}>\r
              This is a nested modal. Notice how it appears on top of the first one.\r
            </p>\r
            <Button onClick={() => setSecondModal(false)}>Close This Modal</Button>\r
          </div>\r
        </Modal>\r
      </div>;
  }
}`,...(de=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:de.source}}};const $e=["Default","WithoutTitle","NoCloseButton","Sizes","DisabledClosing","ScrollableContent","FormModal","ConfirmationModal","ImageGalleryModal","SettingsModal","FullScreenModal","NestedModals"];export{b as ConfirmationModal,u as Default,x as DisabledClosing,v as FormModal,k as FullScreenModal,w as ImageGalleryModal,C as NestedModals,g as NoCloseButton,f as ScrollableContent,j as SettingsModal,y as Sizes,h as WithoutTitle,$e as __namedExportsOrder,ze as default};
