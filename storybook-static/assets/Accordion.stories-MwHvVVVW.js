import{j as t}from"./jsx-runtime-CDt2p4po.js";import{r as B,R as U}from"./index-GiUgBvb1.js";import{d as a,l as c}from"./styled-components.browser.esm-Byilhkxn.js";const Q=e=>{switch(e){case"outlined":return c`
        border: 1px solid ${({theme:o})=>o.colors.gray.light};
        border-radius: ${({theme:o})=>o.radius.md};

        & > *:not(:last-child) {
          border-bottom: 1px solid ${({theme:o})=>o.colors.gray.light};
        }
      `;case"filled":return c`
        background-color: ${({theme:o})=>o.colors.gray.light};
        border-radius: ${({theme:o})=>o.radius.md};
        
        & > * {
          background-color: ${({theme:o})=>o.colors.gray.light};
        }

        & > *:not(:last-child) {
          border-bottom: 1px solid ${({theme:o})=>o.colors.gray.base};
        }
      `;default:return c`
        & > *:not(:last-child) {
          border-bottom: 1px solid ${({theme:o})=>o.colors.gray.light};
        }
      `}},Y=a.div`
  ${({variant:e})=>Q(e)}
`,X=a.div`
  ${({variant:e,theme:o})=>e==="outlined"||e==="filled"?c`
        &:first-child {
          border-top-left-radius: ${o.radius.md};
          border-top-right-radius: ${o.radius.md};
        }
        &:last-child {
          border-bottom-left-radius: ${o.radius.md};
          border-bottom-right-radius: ${o.radius.md};
        }
      `:""}
`,G=a.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[3]};
  
  padding: ${({theme:e})=>e.spacing[4]};
  
  background-color: transparent;
  border: none;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  
  font-family: ${({theme:e})=>e.typography.fonts.body};
  font-size: ${({theme:e})=>e.typography.fontSizes.base};
  font-weight: ${({theme:e})=>e.typography.fontWeights.medium};
  color: ${({theme:e,disabled:o})=>o?e.colors.text.muted:e.colors.text.primary};
  text-align: left;
  
  transition: all ${({theme:e})=>e.durations.fast} ${({theme:e})=>e.easings.easeOut};
  
  &:hover:not(:disabled) {
    background-color: ${({theme:e})=>e.colors.gray.base};
  }
  
  &:focus {
    outline: none;
    background-color: ${({theme:e})=>e.colors.gray.base};
    box-shadow: inset 0 0 0 2px ${({theme:e})=>e.colors.innovation.primaryBlue}40;
  }
  
  &:active:not(:disabled) {
    background-color: ${({theme:e})=>e.colors.gray.light};
  }
`,J=a.div`
  width: 16px;
  height: 16px;
  position: relative;
  flex-shrink: 0;
  transition: transform ${({theme:e})=>e.durations.normal} ${({theme:e})=>e.easings.easeOut};
  
  ${({isOpen:e})=>e&&c`
    transform: rotate(180deg);
  `}
  
  &::after {
    content: '';
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 5px;
    height: 5px;
    border-right: 2px solid ${({theme:e})=>e.colors.text.secondary};
    border-bottom: 2px solid ${({theme:e})=>e.colors.text.secondary};
  }
`,K=a.div`
  display: grid;
  transition: grid-template-rows ${({theme:e})=>e.durations.normal} ${({theme:e})=>e.easings.easeOut},
              opacity ${({theme:e})=>e.durations.fast} ${({theme:e})=>e.easings.easeOut};
  
  ${({isOpen:e})=>c`
    grid-template-rows: ${e?"1fr":"0fr"};
    opacity: ${e?"1":"0"};
  `}
`,P=a.div`
  overflow: hidden;
`,Z=a.div`
  padding: ${({theme:e})=>e.spacing[3]} ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[4]};
  
  font-family: ${({theme:e})=>e.typography.fonts.body};
  font-size: ${({theme:e})=>e.typography.fontSizes.base};
  color: ${({theme:e})=>e.colors.text.secondary};
  line-height: ${({theme:e})=>e.typography.lineHeights.relaxed};
`,ee=({id:e,title:o,children:d,disabled:s=!1,isOpen:r,onToggle:b,variant:I,isFirst:m,isLast:A})=>t.jsxs(X,{variant:I,isFirst:m,isLast:A,children:[t.jsxs(G,{disabled:s,isOpen:r,onClick:s?void 0:b,"aria-expanded":r,"aria-controls":`accordion-content-${e}`,children:[o,t.jsx(J,{isOpen:r})]}),t.jsx(K,{isOpen:r,id:`accordion-content-${e}`,"aria-hidden":!r,children:t.jsx(P,{children:t.jsx(Z,{children:d})})})]}),i=({variant:e="default",allowMultiple:o=!1,defaultOpenItems:d=[],children:s,className:r})=>{const[b,I]=B.useState(d),m=U.Children.toArray(s),A=n=>{I(l=>o?l.includes(n)?l.filter(W=>W!==n):[...l,n]:l.includes(n)?[]:[n])};return t.jsx(Y,{variant:e,className:r,children:m.map((n,l)=>t.jsx(ee,{...n.props,isOpen:b.includes(n.props.id),onToggle:()=>A(n.props.id),variant:e,isFirst:l===0,isLast:l===m.length-1},n.props.id))})};i.Item=({id:e,title:o,children:d,disabled:s})=>t.jsx("div",{"data-accordion-item-id":e,"data-title":o,"data-disabled":s,children:d});try{i.displayName="Accordion",i.__docgenInfo={description:"",displayName:"Accordion",props:{variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"filled"'},{value:'"outlined"'}]}},allowMultiple:{defaultValue:{value:"false"},description:"",name:"allowMultiple",required:!1,type:{name:"boolean"}},defaultOpenItems:{defaultValue:{value:"[]"},description:"",name:"defaultOpenItems",required:!1,type:{name:"string[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{i.Item.displayName="Accordion.Item",i.Item.__docgenInfo={description:"",displayName:"Accordion.Item",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const ne={title:"UI/Accordion",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","outlined","filled"]},allowMultiple:{control:{type:"boolean"}}}},u={args:{variant:"default",children:[t.jsx(i.Item,{id:"item1",title:"First Section",children:"This is the content of the first section. It contains some text and information that can be expanded or collapsed."},"item1"),t.jsx(i.Item,{id:"item2",title:"Second Section",children:"This is the content of the second section. It has different content from the first section."},"item2"),t.jsx(i.Item,{id:"item3",title:"Third Section",children:"This is the content of the third section. Each section can contain any type of content."},"item3")]}},h={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",width:"500px"},children:[t.jsxs("div",{children:[t.jsx("h3",{style:{margin:"0 0 1rem 0",color:"white"},children:"Default"}),t.jsxs(i,{variant:"default",children:[t.jsx(i.Item,{id:"default1",title:"Default Section 1",children:"Content for default variant section."}),t.jsx(i.Item,{id:"default2",title:"Default Section 2",children:"Another section in the default variant."})]})]}),t.jsxs("div",{children:[t.jsx("h3",{style:{margin:"0 0 1rem 0",color:"white"},children:"Outlined"}),t.jsxs(i,{variant:"outlined",children:[t.jsx(i.Item,{id:"outlined1",title:"Outlined Section 1",children:"Content for outlined variant section."}),t.jsx(i.Item,{id:"outlined2",title:"Outlined Section 2",children:"Another section in the outlined variant."})]})]}),t.jsxs("div",{children:[t.jsx("h3",{style:{margin:"0 0 1rem 0",color:"white"},children:"Filled"}),t.jsxs(i,{variant:"filled",children:[t.jsx(i.Item,{id:"filled1",title:"Filled Section 1",children:"Content for filled variant section."}),t.jsx(i.Item,{id:"filled2",title:"Filled Section 2",children:"Another section in the filled variant."})]})]})]})},p={args:{allowMultiple:!0,variant:"outlined",children:[t.jsx(i.Item,{id:"multi1",title:"Multiple Section 1",children:"With allowMultiple enabled, you can open multiple sections at once."},"multi1"),t.jsx(i.Item,{id:"multi2",title:"Multiple Section 2",children:"Try opening this section while the first one is open."},"multi2"),t.jsx(i.Item,{id:"multi3",title:"Multiple Section 3",children:"All sections can be open simultaneously."},"multi3")]}},f={args:{defaultOpenItems:["open1","open3"],variant:"outlined",children:[t.jsx(i.Item,{id:"open1",title:"Initially Open Section",children:"This section starts open by default."},"open1"),t.jsx(i.Item,{id:"open2",title:"Initially Closed Section",children:"This section starts closed."},"open2"),t.jsx(i.Item,{id:"open3",title:"Another Open Section",children:"This section also starts open by default."},"open3")]}},g={args:{variant:"outlined",children:[t.jsx(i.Item,{id:"enabled",title:"Enabled Section",children:"This section is enabled and can be toggled."},"enabled"),t.jsx(i.Item,{id:"disabled",title:"Disabled Section",disabled:!0,children:"This section is disabled and cannot be opened."},"disabled"),t.jsx(i.Item,{id:"enabled2",title:"Another Enabled Section",children:"This section is also enabled."},"enabled2")]}},y={render:()=>t.jsx("div",{style:{width:"600px"},children:t.jsxs(i,{variant:"outlined",children:[t.jsx(i.Item,{id:"rich1",title:"Section with Rich Content",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[t.jsx("p",{style:{margin:0,color:"white"},children:"This section contains rich content including:"}),t.jsxs("ul",{style:{margin:0,color:"#ccc",paddingLeft:"1.5rem"},children:[t.jsx("li",{children:"Multiple paragraphs"}),t.jsx("li",{children:"Lists and other elements"}),t.jsx("li",{children:"Complex layouts"})]}),t.jsx("p",{style:{margin:0,color:"#888",fontSize:"0.9rem"},children:"The accordion can handle any type of content you put inside it."})]})}),t.jsx(i.Item,{id:"rich2",title:"FAQ Section",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[t.jsxs("div",{children:[t.jsx("h4",{style:{margin:"0 0 0.5rem 0",color:"white"},children:"How does this work?"}),t.jsx("p",{style:{margin:0,color:"#ccc"},children:"The accordion component uses CSS transitions to smoothly animate the content area."})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{margin:"0 0 0.5rem 0",color:"white"},children:"Can I customize the styling?"}),t.jsx("p",{style:{margin:0,color:"#ccc"},children:"Yes, the component supports multiple variants and follows the design system tokens."})]})]})}),t.jsx(i.Item,{id:"rich3",title:"Code Example",children:t.jsx("div",{style:{backgroundColor:"#1a1a1a",padding:"1rem",borderRadius:"0.5rem",fontFamily:"monospace",fontSize:"0.9rem",color:"#e5e5e5"},children:`<Accordion variant="outlined">
  <Accordion.Item id="example" title="Example">
    Content goes here
  </Accordion.Item>
</Accordion>`})})]})})},x={args:{variant:"outlined",children:[t.jsx(i.Item,{id:"short",title:"Short Content",children:"Brief content that doesn't require much space."},"short"),t.jsx(i.Item,{id:"long",title:"Long Content",children:t.jsxs("div",{style:{color:"white",lineHeight:1.6},children:["This section contains a lot of content to demonstrate how the accordion handles longer text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",t.jsx("br",{}),t.jsx("br",{}),"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",t.jsx("br",{}),t.jsx("br",{}),"The accordion should smoothly expand to accommodate all of this content, and the transition should be smooth regardless of the content length."]})},"long"),t.jsx(i.Item,{id:"medium",title:"Medium Content",children:"This section has a moderate amount of content. It's more than the short section but less than the long section. This helps demonstrate the flexibility of the accordion component."},"medium")]}};var v,j,S;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    children: [<Accordion.Item key="item1" id="item1" title="First Section">\r
        This is the content of the first section. It contains some text and information that can be expanded or collapsed.\r
      </Accordion.Item>, <Accordion.Item key="item2" id="item2" title="Second Section">\r
        This is the content of the second section. It has different content from the first section.\r
      </Accordion.Item>, <Accordion.Item key="item3" id="item3" title="Third Section">\r
        This is the content of the third section. Each section can contain any type of content.\r
      </Accordion.Item>]
  }
}`,...(S=(j=u.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var w,$,C;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    width: '500px'
  }}>\r
      <div>\r
        <h3 style={{
        margin: '0 0 1rem 0',
        color: 'white'
      }}>Default</h3>\r
        <Accordion variant="default">\r
          <Accordion.Item id="default1" title="Default Section 1">\r
            Content for default variant section.\r
          </Accordion.Item>\r
          <Accordion.Item id="default2" title="Default Section 2">\r
            Another section in the default variant.\r
          </Accordion.Item>\r
        </Accordion>\r
      </div>\r
      \r
      <div>\r
        <h3 style={{
        margin: '0 0 1rem 0',
        color: 'white'
      }}>Outlined</h3>\r
        <Accordion variant="outlined">\r
          <Accordion.Item id="outlined1" title="Outlined Section 1">\r
            Content for outlined variant section.\r
          </Accordion.Item>\r
          <Accordion.Item id="outlined2" title="Outlined Section 2">\r
            Another section in the outlined variant.\r
          </Accordion.Item>\r
        </Accordion>\r
      </div>\r
      \r
      <div>\r
        <h3 style={{
        margin: '0 0 1rem 0',
        color: 'white'
      }}>Filled</h3>\r
        <Accordion variant="filled">\r
          <Accordion.Item id="filled1" title="Filled Section 1">\r
            Content for filled variant section.\r
          </Accordion.Item>\r
          <Accordion.Item id="filled2" title="Filled Section 2">\r
            Another section in the filled variant.\r
          </Accordion.Item>\r
        </Accordion>\r
      </div>\r
    </div>
}`,...(C=($=h.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var T,k,D;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    allowMultiple: true,
    variant: 'outlined',
    children: [<Accordion.Item key="multi1" id="multi1" title="Multiple Section 1">\r
        With allowMultiple enabled, you can open multiple sections at once.\r
      </Accordion.Item>, <Accordion.Item key="multi2" id="multi2" title="Multiple Section 2">\r
        Try opening this section while the first one is open.\r
      </Accordion.Item>, <Accordion.Item key="multi3" id="multi3" title="Multiple Section 3">\r
        All sections can be open simultaneously.\r
      </Accordion.Item>]
  }
}`,...(D=(k=p.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var q,M,O;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    defaultOpenItems: ['open1', 'open3'],
    variant: 'outlined',
    children: [<Accordion.Item key="open1" id="open1" title="Initially Open Section">\r
        This section starts open by default.\r
      </Accordion.Item>, <Accordion.Item key="open2" id="open2" title="Initially Closed Section">\r
        This section starts closed.\r
      </Accordion.Item>, <Accordion.Item key="open3" id="open3" title="Another Open Section">\r
        This section also starts open by default.\r
      </Accordion.Item>]
  }
}`,...(O=(M=f.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var _,E,F;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: [<Accordion.Item key="enabled" id="enabled" title="Enabled Section">\r
        This section is enabled and can be toggled.\r
      </Accordion.Item>, <Accordion.Item key="disabled" id="disabled" title="Disabled Section" disabled>\r
        This section is disabled and cannot be opened.\r
      </Accordion.Item>, <Accordion.Item key="enabled2" id="enabled2" title="Another Enabled Section">\r
        This section is also enabled.\r
      </Accordion.Item>]
  }
}`,...(F=(E=g.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var L,z,V;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '600px'
  }}>\r
      <Accordion variant="outlined">\r
        <Accordion.Item id="rich1" title="Section with Rich Content">\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>\r
            <p style={{
            margin: 0,
            color: 'white'
          }}>This section contains rich content including:</p>\r
            <ul style={{
            margin: 0,
            color: '#ccc',
            paddingLeft: '1.5rem'
          }}>\r
              <li>Multiple paragraphs</li>\r
              <li>Lists and other elements</li>\r
              <li>Complex layouts</li>\r
            </ul>\r
            <p style={{
            margin: 0,
            color: '#888',
            fontSize: '0.9rem'
          }}>\r
              The accordion can handle any type of content you put inside it.\r
            </p>\r
          </div>\r
        </Accordion.Item>\r
        <Accordion.Item id="rich2" title="FAQ Section">\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>\r
            <div>\r
              <h4 style={{
              margin: '0 0 0.5rem 0',
              color: 'white'
            }}>How does this work?</h4>\r
              <p style={{
              margin: 0,
              color: '#ccc'
            }}>\r
                The accordion component uses CSS transitions to smoothly animate the content area.\r
              </p>\r
            </div>\r
            <div>\r
              <h4 style={{
              margin: '0 0 0.5rem 0',
              color: 'white'
            }}>Can I customize the styling?</h4>\r
              <p style={{
              margin: 0,
              color: '#ccc'
            }}>\r
                Yes, the component supports multiple variants and follows the design system tokens.\r
              </p>\r
            </div>\r
          </div>\r
        </Accordion.Item>\r
        <Accordion.Item id="rich3" title="Code Example">\r
          <div style={{
          backgroundColor: '#1a1a1a',
          padding: '1rem',
          borderRadius: '0.5rem',
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          color: '#e5e5e5'
        }}>\r
            {\`<Accordion variant="outlined">
  <Accordion.Item id="example" title="Example">
    Content goes here
  </Accordion.Item>
</Accordion>\`}\r
          </div>\r
        </Accordion.Item>\r
      </Accordion>\r
    </div>
}`,...(V=(z=y.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var R,H,N;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: [<Accordion.Item key="short" id="short" title="Short Content">\r
        Brief content that doesn't require much space.\r
      </Accordion.Item>, <Accordion.Item key="long" id="long" title="Long Content">\r
        <div style={{
        color: 'white',
        lineHeight: 1.6
      }}>\r
          This section contains a lot of content to demonstrate how the accordion handles longer text.\r
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut \r
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco \r
          laboris nisi ut aliquip ex ea commodo consequat.\r
          \r
          <br /><br />\r
          \r
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \r
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt \r
          mollit anim id est laborum.\r
          \r
          <br /><br />\r
          \r
          The accordion should smoothly expand to accommodate all of this content, and the transition \r
          should be smooth regardless of the content length.\r
        </div>\r
      </Accordion.Item>, <Accordion.Item key="medium" id="medium" title="Medium Content">\r
        This section has a moderate amount of content. It's more than the short section but less than \r
        the long section. This helps demonstrate the flexibility of the accordion component.\r
      </Accordion.Item>]
  }
}`,...(N=(H=x.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};const re=["Default","Variants","AllowMultiple","DefaultOpen","WithDisabledItems","RichContent","LongContent"];export{p as AllowMultiple,u as Default,f as DefaultOpen,x as LongContent,y as RichContent,h as Variants,g as WithDisabledItems,re as __namedExportsOrder,ne as default};
