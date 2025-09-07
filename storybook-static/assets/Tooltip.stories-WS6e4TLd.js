import{j as t}from"./jsx-runtime-CDt2p4po.js";import{r as p}from"./index-GiUgBvb1.js";import{l as u,d as ut}from"./styled-components.browser.esm-Byilhkxn.js";import{r as St}from"./index-CROobee-.js";import{B as n}from"./Button-B5_6KITS.js";import{B as l}from"./Box-COihqxSe.js";import{T as x}from"./Typography-u4LxpgYF.js";import{B as k}from"./Badge-n4nZeNgX.js";import"./propFilters-BGSNtaQt.js";const zt=e=>{const o="6px",i=u`
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
  `;switch(e){case"top":case"top-start":case"top-end":return u`
        ${i}
        top: 100%;
        border-left: ${o} solid transparent;
        border-right: ${o} solid transparent;
        border-top: ${o} solid ${({theme:s})=>s.colors.gray.dark};
        ${e==="top-start"&&"left: 12px;"}
        ${e==="top-end"&&"right: 12px;"}
        ${e==="top"&&"left: 50%; transform: translateX(-50%);"}
      `;case"bottom":case"bottom-start":case"bottom-end":return u`
        ${i}
        bottom: 100%;
        border-left: ${o} solid transparent;
        border-right: ${o} solid transparent;
        border-bottom: ${o} solid ${({theme:s})=>s.colors.gray.dark};
        ${e==="bottom-start"&&"left: 12px;"}
        ${e==="bottom-end"&&"right: 12px;"}
        ${e==="bottom"&&"left: 50%; transform: translateX(-50%);"}
      `;case"left":case"left-start":case"left-end":return u`
        ${i}
        left: 100%;
        border-top: ${o} solid transparent;
        border-bottom: ${o} solid transparent;
        border-left: ${o} solid ${({theme:s})=>s.colors.gray.dark};
        ${e==="left-start"&&"top: 12px;"}
        ${e==="left-end"&&"bottom: 12px;"}
        ${e==="left"&&"top: 50%; transform: translateY(-50%);"}
      `;case"right":case"right-start":case"right-end":return u`
        ${i}
        right: 100%;
        border-top: ${o} solid transparent;
        border-bottom: ${o} solid transparent;
        border-right: ${o} solid ${({theme:s})=>s.colors.gray.dark};
        ${e==="right-start"&&"top: 12px;"}
        ${e==="right-end"&&"bottom: 12px;"}
        ${e==="right"&&"top: 50%; transform: translateY(-50%);"}
      `;default:return""}},It=(e,o)=>{if(!o)return{top:0,left:0};const i=8;switch(e){case"top":return{top:o.top-i,left:o.left+o.width/2,transform:"translate(-50%, -100%)"};case"top-start":return{top:o.top-i,left:o.left,transform:"translateY(-100%)"};case"top-end":return{top:o.top-i,left:o.right,transform:"translate(-100%, -100%)"};case"bottom":return{top:o.bottom+i,left:o.left+o.width/2,transform:"translateX(-50%)"};case"bottom-start":return{top:o.bottom+i,left:o.left};case"bottom-end":return{top:o.bottom+i,left:o.right,transform:"translateX(-100%)"};case"left":return{top:o.top+o.height/2,left:o.left-i,transform:"translate(-100%, -50%)"};case"left-start":return{top:o.top,left:o.left-i,transform:"translateX(-100%)"};case"left-end":return{top:o.bottom,left:o.left-i,transform:"translate(-100%, -100%)"};case"right":return{top:o.top+o.height/2,left:o.right+i,transform:"translateY(-50%)"};case"right-start":return{top:o.top,left:o.right+i};case"right-end":return{top:o.bottom,left:o.right+i,transform:"translateY(-100%)"};default:return{top:0,left:0}}},kt=ut.div`
  position: fixed;
  z-index: ${({theme:e})=>e.zIndices.tooltip};
  background-color: ${({theme:e})=>e.colors.gray.dark};
  color: ${({theme:e})=>e.colors.foundation.white};
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.radius.sm};
  font-family: ${({theme:e})=>e.typography.fonts.body};
  font-size: ${({theme:e})=>e.typography.fontSizes.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeights.medium};
  line-height: ${({theme:e})=>e.typography.lineHeights.snug};
  max-width: 250px;
  word-wrap: break-word;
  box-shadow: ${({theme:e})=>e.shadows.lg};
  opacity: ${({show:e})=>e?1:0};
  visibility: ${({show:e})=>e?"visible":"hidden"};
  transition: opacity ${({theme:e})=>e.durations.fast} ${({theme:e})=>e.easings.easeInOut},
              visibility ${({theme:e})=>e.durations.fast} ${({theme:e})=>e.easings.easeInOut};
  pointer-events: none;
  
  ${({targetRect:e,placement:o})=>{if(!e)return"";const i=It(o,e);return u`
      top: ${i.top}px;
      left: ${i.left}px;
      transform: ${i.transform||"none"};
    `}}
  
  &::after {
    content: '';
    ${({placement:e,arrow:o})=>o&&zt(e)}
  }
`,Et=ut.div`
  display: inline-block;
  ${({disabled:e})=>e&&u`
      pointer-events: none;
      opacity: 0.6;
    `}
`,r=({content:e,children:o,placement:i="top",trigger:s="hover",delay:E=0,hideDelay:L=0,arrow:mt=!0,open:T,onOpenChange:B,"aria-label":ht,className:ft,disabled:c=!1,...xt})=>{const[yt,gt]=p.useState(!1),[Tt,Bt]=p.useState(null),y=p.useRef(null),m=p.useRef(null),h=p.useRef(null),d=T!==void 0?T:yt,g=p.useCallback(()=>{y.current&&Bt(y.current.getBoundingClientRect())},[]),a=p.useCallback(f=>{c||(T===void 0&&gt(f),B==null||B(f),f&&g())},[c,T,B,g]),jt=()=>{s!=="hover"||c||(h.current&&(clearTimeout(h.current),h.current=null),E>0?m.current=setTimeout(()=>a(!0),E):a(!0))},bt=()=>{s!=="hover"||c||(m.current&&(clearTimeout(m.current),m.current=null),L>0?h.current=setTimeout(()=>a(!1),L):a(!1))},vt=()=>{s!=="focus"||c||a(!0)},wt=()=>{s!=="focus"||c||a(!1)},$t=()=>{s!=="click"||c||a(!d)};p.useEffect(()=>{const f=()=>{d&&g()},W=()=>{d&&g()},A=Ct=>{s==="click"&&y.current&&!y.current.contains(Ct.target)&&a(!1)};return d&&(window.addEventListener("scroll",f),window.addEventListener("resize",W),document.addEventListener("click",A)),()=>{window.removeEventListener("scroll",f),window.removeEventListener("resize",W),document.removeEventListener("click",A)}},[d,s,a,g]),p.useEffect(()=>()=>{m.current&&clearTimeout(m.current),h.current&&clearTimeout(h.current)},[]);const Dt=t.jsx(kt,{className:ft,placement:i,arrow:mt,targetRect:Tt,show:d,role:"tooltip","aria-label":ht,...xt,children:e});return t.jsxs(t.Fragment,{children:[t.jsx(Et,{ref:y,disabled:c,onMouseEnter:jt,onMouseLeave:bt,onFocus:vt,onBlur:wt,onClick:$t,"aria-describedby":d?"tooltip":void 0,children:o}),typeof document<"u"&&St.createPortal(Dt,document.body)]})};try{r.displayName="Tooltip",r.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right-start"'},{value:'"right-end"'}]}},trigger:{defaultValue:{value:"hover"},description:"",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"focus"'},{value:'"click"'},{value:'"manual"'}]}},delay:{defaultValue:{value:"0"},description:"",name:"delay",required:!1,type:{name:"number"}},hideDelay:{defaultValue:{value:"0"},description:"",name:"hideDelay",required:!1,type:{name:"number"}},arrow:{defaultValue:{value:"true"},description:"",name:"arrow",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const Ot={title:"UI/Tooltip",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{placement:{control:{type:"select"},options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end"]},trigger:{control:{type:"select"},options:["hover","focus","click","manual"]}}},j={args:{content:"This is a tooltip",placement:"top",trigger:"hover"},render:e=>t.jsx(l,{display:"flex",justifyContent:"center",p:"xl",children:t.jsx(r,{...e,children:t.jsx(n,{children:"Hover me"})})})},b={render:()=>t.jsxs(l,{display:"flex",flexDirection:"column",gap:"xl",p:"2xl",children:[t.jsxs(l,{display:"flex",justifyContent:"center",gap:"md",children:[t.jsx(r,{content:"Top start tooltip",placement:"top-start",children:t.jsx(n,{size:"sm",children:"Top Start"})}),t.jsx(r,{content:"Top tooltip",placement:"top",children:t.jsx(n,{size:"sm",children:"Top"})}),t.jsx(r,{content:"Top end tooltip",placement:"top-end",children:t.jsx(n,{size:"sm",children:"Top End"})})]}),t.jsxs(l,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[t.jsxs(l,{display:"flex",flexDirection:"column",gap:"md",children:[t.jsx(r,{content:"Left start tooltip",placement:"left-start",children:t.jsx(n,{size:"sm",children:"Left Start"})}),t.jsx(r,{content:"Left tooltip",placement:"left",children:t.jsx(n,{size:"sm",children:"Left"})}),t.jsx(r,{content:"Left end tooltip",placement:"left-end",children:t.jsx(n,{size:"sm",children:"Left End"})})]}),t.jsxs(l,{display:"flex",flexDirection:"column",gap:"md",children:[t.jsx(r,{content:"Right start tooltip",placement:"right-start",children:t.jsx(n,{size:"sm",children:"Right Start"})}),t.jsx(r,{content:"Right tooltip",placement:"right",children:t.jsx(n,{size:"sm",children:"Right"})}),t.jsx(r,{content:"Right end tooltip",placement:"right-end",children:t.jsx(n,{size:"sm",children:"Right End"})})]})]}),t.jsxs(l,{display:"flex",justifyContent:"center",gap:"md",children:[t.jsx(r,{content:"Bottom start tooltip",placement:"bottom-start",children:t.jsx(n,{size:"sm",children:"Bottom Start"})}),t.jsx(r,{content:"Bottom tooltip",placement:"bottom",children:t.jsx(n,{size:"sm",children:"Bottom"})}),t.jsx(r,{content:"Bottom end tooltip",placement:"bottom-end",children:t.jsx(n,{size:"sm",children:"Bottom End"})})]})]})},v={render:()=>t.jsxs(l,{display:"flex",gap:"md",justifyContent:"center",flexWrap:"wrap",p:"xl",children:[t.jsx(r,{content:"Appears on hover",trigger:"hover",children:t.jsx(n,{children:"Hover"})}),t.jsx(r,{content:"Appears on focus",trigger:"focus",children:t.jsx(n,{children:"Focus"})}),t.jsx(r,{content:"Appears on click",trigger:"click",children:t.jsx(n,{children:"Click"})})]})},w={render:()=>t.jsxs(l,{display:"flex",gap:"md",justifyContent:"center",flexWrap:"wrap",p:"xl",children:[t.jsx(r,{content:"No delay",delay:0,children:t.jsx(n,{children:"No Delay"})}),t.jsx(r,{content:"500ms delay",delay:500,children:t.jsx(n,{children:"500ms Delay"})}),t.jsx(r,{content:"1000ms delay",delay:1e3,children:t.jsx(n,{children:"1s Delay"})}),t.jsx(r,{content:"Fast hide",hideDelay:100,children:t.jsx(n,{children:"Fast Hide"})})]})},$={render:()=>t.jsxs(l,{display:"flex",gap:"md",justifyContent:"center",p:"xl",children:[t.jsx(r,{content:"Tooltip with arrow",arrow:!0,children:t.jsx(n,{children:"With Arrow"})}),t.jsx(r,{content:"Tooltip without arrow",arrow:!1,children:t.jsx(n,{children:"Without Arrow"})})]})},D={render:()=>t.jsxs(l,{display:"flex",gap:"md",justifyContent:"center",flexWrap:"wrap",p:"xl",children:[t.jsx(r,{content:"Simple text tooltip",children:t.jsx(n,{children:"Text"})}),t.jsx(r,{content:t.jsxs("div",{children:[t.jsx("strong",{children:"Rich Content"}),t.jsx("br",{}),"This tooltip has multiple lines",t.jsx("br",{}),"and ",t.jsx("em",{children:"formatted"})," text"]}),children:t.jsx(n,{children:"Rich Content"})}),t.jsx(r,{content:"This is a very long tooltip that demonstrates how the tooltip handles longer text content and wraps appropriately",children:t.jsx(n,{children:"Long Text"})})]})},C={render:()=>t.jsxs(l,{display:"flex",gap:"md",alignItems:"center",justifyContent:"center",flexWrap:"wrap",p:"xl",children:[t.jsx(r,{content:"Button tooltip",children:t.jsx(n,{children:"Button"})}),t.jsx(r,{content:"Badge tooltip",children:t.jsx(k,{color:"blue",children:"Badge"})}),t.jsx(r,{content:"Text tooltip",children:t.jsx(x,{variant:"body",style:{textDecoration:"underline",cursor:"help"},children:"Hover this text"})}),t.jsx(r,{content:"Icon tooltip",children:t.jsx(l,{width:"32px",height:"32px",bg:"blue",borderRadius:"sm",display:"flex",alignItems:"center",justifyContent:"center",cursor:"help",children:t.jsx("span",{style:{color:"white"},children:"?"})})})]})},S={render:()=>t.jsxs(l,{display:"flex",gap:"md",justifyContent:"center",p:"xl",children:[t.jsx(r,{content:"This tooltip is enabled",children:t.jsx(n,{children:"Enabled"})}),t.jsx(r,{content:"This tooltip is disabled",disabled:!0,children:t.jsx(n,{children:"Disabled Tooltip"})})]})},z={args:{content:"Customizable tooltip",placement:"top",trigger:"hover",delay:0,hideDelay:0,arrow:!0,disabled:!1},render:e=>t.jsx(l,{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px",children:t.jsx(r,{...e,children:t.jsx(n,{children:"Interactive Tooltip"})})})},I={render:()=>t.jsxs(l,{p:"2xl",children:[t.jsx(x,{variant:"h3",mb:"lg",children:"Tooltip Interactive Demo"}),t.jsxs(l,{display:"flex",flexDirection:"column",gap:"lg",children:[t.jsxs("div",{children:[t.jsx(x,{variant:"body",mb:"md",children:"Hover for help information:"}),t.jsxs(l,{display:"flex",gap:"sm",alignItems:"center",children:[t.jsx(x,{variant:"body",children:"Username"}),t.jsx(r,{content:"Your username must be unique and between 3-20 characters",children:t.jsx(l,{width:"16px",height:"16px",borderRadius:"full",bg:"gray",display:"flex",alignItems:"center",justifyContent:"center",cursor:"help",style:{fontSize:"10px",color:"white"},children:"?"})})]})]}),t.jsxs("div",{children:[t.jsx(x,{variant:"body",mb:"md",children:"Status indicators:"}),t.jsxs(l,{display:"flex",gap:"md",alignItems:"center",children:[t.jsx(r,{content:"System is online and functioning normally",placement:"top",children:t.jsx(k,{color:"success",children:"Online"})}),t.jsx(r,{content:"System is experiencing issues",placement:"top",children:t.jsx(k,{color:"warning",children:"Warning"})}),t.jsx(r,{content:"System is offline or unreachable",placement:"top",children:t.jsx(k,{color:"error",children:"Offline"})})]})]}),t.jsxs("div",{children:[t.jsx(x,{variant:"body",mb:"md",children:"Actions with context:"}),t.jsxs(l,{display:"flex",gap:"md",children:[t.jsx(r,{content:"Save your current work",placement:"bottom",children:t.jsx(n,{variant:"primary",children:"Save"})}),t.jsx(r,{content:"Discard all changes and reset",placement:"bottom",children:t.jsx(n,{variant:"secondary",children:"Reset"})}),t.jsx(r,{content:"Delete this item permanently",placement:"bottom",children:t.jsx(n,{variant:"danger",children:"Delete"})})]})]})]})]})};var q,H,V;j.parameters={...j.parameters,docs:{...(q=j.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    content: 'This is a tooltip',
    placement: 'top',
    trigger: 'hover'
  },
  render: args => <Box display="flex" justifyContent="center" p="xl">\r
      <Tooltip {...args}>\r
        <Button>Hover me</Button>\r
      </Tooltip>\r
    </Box>
}`,...(V=(H=j.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var _,F,N;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" gap="xl" p="2xl">\r
      <Box display="flex" justifyContent="center" gap="md">\r
        <Tooltip content="Top start tooltip" placement="top-start">\r
          <Button size="sm">Top Start</Button>\r
        </Tooltip>\r
        <Tooltip content="Top tooltip" placement="top">\r
          <Button size="sm">Top</Button>\r
        </Tooltip>\r
        <Tooltip content="Top end tooltip" placement="top-end">\r
          <Button size="sm">Top End</Button>\r
        </Tooltip>\r
      </Box>\r
\r
      <Box display="flex" justifyContent="space-between" alignItems="center">\r
        <Box display="flex" flexDirection="column" gap="md">\r
          <Tooltip content="Left start tooltip" placement="left-start">\r
            <Button size="sm">Left Start</Button>\r
          </Tooltip>\r
          <Tooltip content="Left tooltip" placement="left">\r
            <Button size="sm">Left</Button>\r
          </Tooltip>\r
          <Tooltip content="Left end tooltip" placement="left-end">\r
            <Button size="sm">Left End</Button>\r
          </Tooltip>\r
        </Box>\r
\r
        <Box display="flex" flexDirection="column" gap="md">\r
          <Tooltip content="Right start tooltip" placement="right-start">\r
            <Button size="sm">Right Start</Button>\r
          </Tooltip>\r
          <Tooltip content="Right tooltip" placement="right">\r
            <Button size="sm">Right</Button>\r
          </Tooltip>\r
          <Tooltip content="Right end tooltip" placement="right-end">\r
            <Button size="sm">Right End</Button>\r
          </Tooltip>\r
        </Box>\r
      </Box>\r
\r
      <Box display="flex" justifyContent="center" gap="md">\r
        <Tooltip content="Bottom start tooltip" placement="bottom-start">\r
          <Button size="sm">Bottom Start</Button>\r
        </Tooltip>\r
        <Tooltip content="Bottom tooltip" placement="bottom">\r
          <Button size="sm">Bottom</Button>\r
        </Tooltip>\r
        <Tooltip content="Bottom end tooltip" placement="bottom-end">\r
          <Button size="sm">Bottom End</Button>\r
        </Tooltip>\r
      </Box>\r
    </Box>
}`,...(N=(F=b.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var O,P,Y;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="md" justifyContent="center" flexWrap="wrap" p="xl">\r
      <Tooltip content="Appears on hover" trigger="hover">\r
        <Button>Hover</Button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Appears on focus" trigger="focus">\r
        <Button>Focus</Button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Appears on click" trigger="click">\r
        <Button>Click</Button>\r
      </Tooltip>\r
    </Box>
}`,...(Y=(P=v.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var R,X,M;w.parameters={...w.parameters,docs:{...(R=w.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="md" justifyContent="center" flexWrap="wrap" p="xl">\r
      <Tooltip content="No delay" delay={0}>\r
        <Button>No Delay</Button>\r
      </Tooltip>\r
      \r
      <Tooltip content="500ms delay" delay={500}>\r
        <Button>500ms Delay</Button>\r
      </Tooltip>\r
      \r
      <Tooltip content="1000ms delay" delay={1000}>\r
        <Button>1s Delay</Button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Fast hide" hideDelay={100}>\r
        <Button>Fast Hide</Button>\r
      </Tooltip>\r
    </Box>
}`,...(M=(X=w.parameters)==null?void 0:X.docs)==null?void 0:M.source}}};var U,G,J;$.parameters={...$.parameters,docs:{...(U=$.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="md" justifyContent="center" p="xl">\r
      <Tooltip content="Tooltip with arrow" arrow={true}>\r
        <Button>With Arrow</Button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Tooltip without arrow" arrow={false}>\r
        <Button>Without Arrow</Button>\r
      </Tooltip>\r
    </Box>
}`,...(J=(G=$.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,Z;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="md" justifyContent="center" flexWrap="wrap" p="xl">\r
      <Tooltip content="Simple text tooltip">\r
        <Button>Text</Button>\r
      </Tooltip>\r
      \r
      <Tooltip content={<div>\r
            <strong>Rich Content</strong>\r
            <br />\r
            This tooltip has multiple lines\r
            <br />\r
            and <em>formatted</em> text\r
          </div>}>\r
        <Button>Rich Content</Button>\r
      </Tooltip>\r
      \r
      <Tooltip content="This is a very long tooltip that demonstrates how the tooltip handles longer text content and wraps appropriately">\r
        <Button>Long Text</Button>\r
      </Tooltip>\r
    </Box>
}`,...(Z=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var tt,et,ot;C.parameters={...C.parameters,docs:{...(tt=C.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="md" alignItems="center" justifyContent="center" flexWrap="wrap" p="xl">\r
      <Tooltip content="Button tooltip">\r
        <Button>Button</Button>\r
      </Tooltip>\r
      \r
      <Tooltip content="Badge tooltip">\r
        <Badge color="blue">Badge</Badge>\r
      </Tooltip>\r
      \r
      <Tooltip content="Text tooltip">\r
        <Typography variant="body" style={{
        textDecoration: 'underline',
        cursor: 'help'
      }}>\r
          Hover this text\r
        </Typography>\r
      </Tooltip>\r
      \r
      <Tooltip content="Icon tooltip">\r
        <Box width="32px" height="32px" bg="blue" borderRadius="sm" display="flex" alignItems="center" justifyContent="center" cursor="help">\r
          <span style={{
          color: 'white'
        }}>?</span>\r
        </Box>\r
      </Tooltip>\r
    </Box>
}`,...(ot=(et=C.parameters)==null?void 0:et.docs)==null?void 0:ot.source}}};var rt,nt,it;S.parameters={...S.parameters,docs:{...(rt=S.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="md" justifyContent="center" p="xl">\r
      <Tooltip content="This tooltip is enabled">\r
        <Button>Enabled</Button>\r
      </Tooltip>\r
      \r
      <Tooltip content="This tooltip is disabled" disabled>\r
        <Button>Disabled Tooltip</Button>\r
      </Tooltip>\r
    </Box>
}`,...(it=(nt=S.parameters)==null?void 0:nt.docs)==null?void 0:it.source}}};var lt,st,at;z.parameters={...z.parameters,docs:{...(lt=z.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  args: {
    content: 'Customizable tooltip',
    placement: 'top',
    trigger: 'hover',
    delay: 0,
    hideDelay: 0,
    arrow: true,
    disabled: false
  },
  render: args => <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">\r
      <Tooltip {...args}>\r
        <Button>Interactive Tooltip</Button>\r
      </Tooltip>\r
    </Box>
}`,...(at=(st=z.parameters)==null?void 0:st.docs)==null?void 0:at.source}}};var pt,ct,dt;I.parameters={...I.parameters,docs:{...(pt=I.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  render: () => <Box p="2xl">\r
      <Typography variant="h3" mb="lg">Tooltip Interactive Demo</Typography>\r
      \r
      <Box display="flex" flexDirection="column" gap="lg">\r
        <div>\r
          <Typography variant="body" mb="md">Hover for help information:</Typography>\r
          <Box display="flex" gap="sm" alignItems="center">\r
            <Typography variant="body">Username</Typography>\r
            <Tooltip content="Your username must be unique and between 3-20 characters">\r
              <Box width="16px" height="16px" borderRadius="full" bg="gray" display="flex" alignItems="center" justifyContent="center" cursor="help" style={{
              fontSize: '10px',
              color: 'white'
            }}>\r
                ?\r
              </Box>\r
            </Tooltip>\r
          </Box>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="md">Status indicators:</Typography>\r
          <Box display="flex" gap="md" alignItems="center">\r
            <Tooltip content="System is online and functioning normally" placement="top">\r
              <Badge color="success">Online</Badge>\r
            </Tooltip>\r
            <Tooltip content="System is experiencing issues" placement="top">\r
              <Badge color="warning">Warning</Badge>\r
            </Tooltip>\r
            <Tooltip content="System is offline or unreachable" placement="top">\r
              <Badge color="error">Offline</Badge>\r
            </Tooltip>\r
          </Box>\r
        </div>\r
        \r
        <div>\r
          <Typography variant="body" mb="md">Actions with context:</Typography>\r
          <Box display="flex" gap="md">\r
            <Tooltip content="Save your current work" placement="bottom">\r
              <Button variant="primary">Save</Button>\r
            </Tooltip>\r
            <Tooltip content="Discard all changes and reset" placement="bottom">\r
              <Button variant="secondary">Reset</Button>\r
            </Tooltip>\r
            <Tooltip content="Delete this item permanently" placement="bottom">\r
              <Button variant="danger">Delete</Button>\r
            </Tooltip>\r
          </Box>\r
        </div>\r
      </Box>\r
    </Box>
}`,...(dt=(ct=I.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};const Pt=["Default","Placements","TriggerTypes","WithDelay","WithoutArrow","DifferentContent","OnDifferentElements","Disabled","Playground","InteractiveDemo"];export{j as Default,D as DifferentContent,S as Disabled,I as InteractiveDemo,C as OnDifferentElements,b as Placements,z as Playground,v as TriggerTypes,w as WithDelay,$ as WithoutArrow,Pt as __namedExportsOrder,Ot as default};
