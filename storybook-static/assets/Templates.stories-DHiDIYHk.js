import{j as r}from"./jsx-runtime-CDt2p4po.js";import{d as l}from"./styled-components.browser.esm-Byilhkxn.js";import{r as Y,R as S}from"./index-GiUgBvb1.js";import{C as B}from"./Container-BXT0WXRT.js";import{T as t}from"./Typography-u4LxpgYF.js";import{B as p}from"./Button-B5_6KITS.js";import{C as s}from"./Card-DLqRvD42.js";import{G as T}from"./Grid-BbcBGEjG.js";import{B as n}from"./Box-COihqxSe.js";import{F as c}from"./Flex-DuvPXp7m.js";import{I as m}from"./Input-MGX9Of0E.js";import{B as A}from"./Badge-n4nZeNgX.js";import"./propFilters-BGSNtaQt.js";const K=l.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
  ${({$config:e,theme:a})=>{switch(e.theme){case"dark":return`
          background-color: ${a.colors.gray.dark};
          color: ${a.colors.foundation.white};
        `;case"gaming":return`
          background: linear-gradient(135deg, 
            ${a.colors.gray.dark} 0%, 
            ${a.colors.gray.base} 100%);
          color: ${a.colors.foundation.white};
        `;case"light":default:return`
          background-color: ${a.colors.foundation.white};
          color: ${a.colors.gray.dark};
        `}}}
  
  > * {
    ${({$config:e})=>{switch(e.spacing){case"compact":return"margin-bottom: 0.5rem;";case"relaxed":return"margin-bottom: 2rem;";case"normal":default:return"margin-bottom: 1rem;"}}}
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  ${({$config:e})=>{switch(e.layout){case"narrow":return"max-width: 800px; margin: 0 auto;";case"full":return"max-width: 100%; width: 100%;";case"wide":default:return"max-width: 1200px; margin: 0 auto;"}}}
`,rr={spacing:"normal",theme:"light",layout:"wide"},j=({children:e,config:a={},className:o,id:i})=>{const d={...rr,...a};return r.jsx(K,{$config:d,className:o,id:i,children:e})};try{j.displayName="BaseTemplate",j.__docgenInfo={description:"",displayName:"BaseTemplate",props:{config:{defaultValue:{value:"{}"},description:"",name:"config",required:!1,type:{name:"TemplateConfig"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const er=l.section`
  width: 100%;
  
  ${({$variant:e,theme:a})=>{switch(e){case"hero":return`
          padding: ${a.spacing[16]} ${a.spacing[4]};
          text-align: center;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          
          @media (min-width: ${a.breakpoints.md}) {
            padding: ${a.spacing[24]} ${a.spacing[8]};
          }
        `;case"feature":return`
          padding: ${a.spacing[12]} ${a.spacing[4]};
          
          @media (min-width: ${a.breakpoints.md}) {
            padding: ${a.spacing[16]} ${a.spacing[8]};
          }
        `;case"content":return`
          padding: ${a.spacing[8]} ${a.spacing[4]};
          
          @media (min-width: ${a.breakpoints.md}) {
            padding: ${a.spacing[12]} ${a.spacing[8]};
          }
        `;case"accent":return`
          padding: ${a.spacing[12]} ${a.spacing[4]};
          text-align: center;
          
          @media (min-width: ${a.breakpoints.md}) {
            padding: ${a.spacing[16]} ${a.spacing[8]};
          }
        `;case"footer":return`
          padding: ${a.spacing[8]} ${a.spacing[4]};
          margin-top: auto;
          
          @media (min-width: ${a.breakpoints.md}) {
            padding: ${a.spacing[12]} ${a.spacing[8]};
          }
        `;case"sidebar":return`
          padding: ${a.spacing[6]} ${a.spacing[4]};
          
          @media (min-width: ${a.breakpoints.md}) {
            padding: ${a.spacing[8]} ${a.spacing[6]};
          }
        `;default:return`
          padding: ${a.spacing[8]} ${a.spacing[4]};
          
          @media (min-width: ${a.breakpoints.md}) {
            padding: ${a.spacing[8]} ${a.spacing[8]};
          }
        `}}}
  
  ${({$background:e,theme:a})=>{switch(e){case"subtle":return`background-color: ${a.colors.gray.light};`;case"dark":return`
          background-color: ${a.colors.gray.dark};
          color: ${a.colors.foundation.white};
        `;case"accent":return`
          background-color: ${a.colors.innovation.primaryBlue};
          color: ${a.colors.foundation.white};
        `;case"transparent":return"background-color: transparent;";case"default":default:return`background-color: ${a.colors.foundation.white};`}}}
  
  ${({$padding:e,theme:a})=>{if(e)switch(e){case"none":return"padding: 0;";case"sm":return`padding: ${a.spacing[4]};`;case"md":return`padding: ${a.spacing[6]};`;case"lg":return`padding: ${a.spacing[8]};`;case"xl":return`padding: ${a.spacing[12]};`;default:return""}return""}}
`,h=({children:e,variant:a="content",background:o="default",padding:i,as:d="section",className:g,id:y})=>r.jsx(er,{as:d,$variant:a,$background:o,$padding:i,className:g,id:y,children:e});try{h.displayName="Section",h.__docgenInfo={description:"",displayName:"Section",props:{variant:{defaultValue:{value:"content"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"footer"'},{value:'"content"'},{value:'"hero"'},{value:'"feature"'},{value:'"accent"'},{value:'"sidebar"'}]}},background:{defaultValue:{value:"default"},description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"default"'},{value:'"subtle"'},{value:'"accent"'},{value:'"transparent"'}]}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},as:{defaultValue:{value:"section"},description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"style"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"caption"'},{value:'"center"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"search"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const J={spacing:"normal",theme:"light",layout:"wide"},X=Y.createContext(J),F=({children:e,config:a=J})=>{const[o,i]=S.useState(a),d=S.useCallback(y=>{i(Q=>({...Q,...y}))},[]),g=S.useMemo(()=>({...o,updateConfig:d}),[o,d]);return r.jsx(X.Provider,{value:g,children:e})},ar=()=>{const e=Y.useContext(X);if(!e)throw new Error("useTemplateConfig must be used within a TemplateProvider");return e},N=({children:e})=>{const a=ar();return r.jsx(r.Fragment,{children:e(a)})};try{F.displayName="TemplateProvider",F.__docgenInfo={description:"",displayName:"TemplateProvider",props:{config:{defaultValue:{value:`{
  spacing: 'normal',
  theme: 'light',
  layout: 'wide'
}`},description:"",name:"config",required:!1,type:{name:"TemplateConfig"}}}}}catch{}try{N.displayName="ConfigurableComponent",N.__docgenInfo={description:"",displayName:"ConfigurableComponent",props:{}}}catch{}const tr=({children:e,config:a,className:o,id:i})=>r.jsx(j,{config:a,className:o,id:i,children:e}),or=({children:e,...a})=>r.jsx(h,{variant:"hero",background:"default",...a,children:e}),nr=({children:e,...a})=>r.jsx(h,{variant:"feature",background:"subtle",...a,children:e}),ir=({children:e,...a})=>r.jsx(h,{variant:"content",background:"default",...a,children:e}),lr=({children:e,...a})=>r.jsx(h,{variant:"accent",background:"accent",...a,children:e}),sr=({children:e,...a})=>r.jsx(h,{variant:"footer",background:"dark",as:"footer",...a,children:e}),dr=({children:e,...a})=>r.jsx(h,{variant:"content",background:"default",...a,children:e}),pr=({children:e,...a})=>r.jsx(h,{variant:"content",background:"subtle",...a,children:e}),cr=({children:e,...a})=>r.jsx(h,{variant:"content",background:"default",...a,children:e}),x=Object.assign(tr,{Hero:or,Features:nr,About:dr,Testimonials:ir,Pricing:pr,FAQ:cr,CTA:lr,Footer:sr});try{x.displayName="LandingPageTemplate",x.__docgenInfo={description:"",displayName:"LandingPageTemplate",props:{config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"TemplateConfig"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const gr=l.div`
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: auto 1fr;
  min-height: 100vh;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-areas:
      "header"
      "main"
      "footer";
    grid-template-columns: 1fr;
  }
`,mr=l.header`
  grid-area: header;
  display: flex;
  align-items: center;
  height: ${({$height:e})=>e};
  padding: 0 ${({theme:e})=>e.spacing[6]};
  
  ${({$sticky:e})=>e&&`
    position: sticky;
    top: 0;
    z-index: 100;
  `}
  
  ${({$background:e,theme:a})=>{switch(e){case"dark":return`
          background-color: ${a.colors.gray.dark};
          color: ${a.colors.foundation.white};
        `;case"transparent":return"background-color: transparent;";case"default":default:return`
          background-color: ${a.colors.foundation.white};
          color: ${a.colors.gray.dark};
        `}}}
  
  ${({$border:e,theme:a})=>e&&`
    border-bottom: 1px solid ${a.colors.text.muted};
  `}
`,ur=l.aside`
  grid-area: sidebar;
  width: ${({$width:e,$collapsed:a})=>a?"60px":e};
  background-color: ${({theme:e})=>e.colors.gray.light};
  border-right: 1px solid ${({theme:e})=>e.colors.text.muted};
  transition: width 0.3s ease;
  overflow: hidden;
  
  ${({$position:e})=>e==="right"&&`
    border-right: none;
    border-left: 1px solid;
    order: 2;
  `}
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    display: none;
  }
`,hr=l.main`
  grid-area: main;
  overflow-y: auto;
  max-width: ${({$maxWidth:e})=>e};
  
  ${({$padding:e,theme:a})=>{switch(e){case"none":return"padding: 0;";case"sm":return`padding: ${a.spacing[4]};`;case"md":return`padding: ${a.spacing[6]};`;case"lg":return`padding: ${a.spacing[8]};`;case"xl":return`padding: ${a.spacing[12]};`;default:return`padding: ${a.spacing[6]};`}}}
`,yr=l.footer`
  grid-area: footer;
  padding: ${({theme:e})=>e.spacing[4]} ${({theme:e})=>e.spacing[6]};
  
  ${({$sticky:e})=>e&&`
    position: sticky;
    bottom: 0;
  `}
  
  ${({$background:e,theme:a})=>{switch(e){case"dark":return`
          background-color: ${a.colors.gray.dark};
          color: ${a.colors.foundation.white};
        `;case"subtle":return`background-color: ${a.colors.gray.light};`;case"default":default:return`
          background-color: ${a.colors.foundation.white};
          color: ${a.colors.gray.dark};
        `}}}
  
  ${({$border:e,theme:a})=>e&&`
    border-top: 1px solid ${a.colors.text.muted};
  `}
`,xr=({children:e,config:a,className:o,id:i})=>r.jsx(j,{config:a,className:o,id:i,children:r.jsx(gr,{children:e})}),vr=({children:e,sticky:a=!0,height:o="64px",background:i="default",border:d=!0,className:g,id:y})=>r.jsx(mr,{$sticky:a,$height:o,$background:i,$border:d,className:g,id:y,children:e}),br=({children:e,width:a="250px",position:o="left",collapsed:i=!1,className:d,id:g})=>{const y=typeof a=="string"?a:"250px";return r.jsx(ur,{$width:y,$collapsed:i,$position:o,className:d,id:g,children:e})},fr=({children:e,maxWidth:a="100%",padding:o="md",className:i,id:d})=>r.jsx(hr,{$maxWidth:a,$padding:o,className:i,id:d,children:e}),Tr=({children:e,sticky:a=!1,background:o="subtle",border:i=!0,className:d,id:g})=>r.jsx(yr,{$sticky:a,$background:o,$border:i,className:d,id:g,children:e}),v=Object.assign(xr,{Header:vr,Sidebar:br,Main:fr,Footer:Tr});try{v.displayName="DashboardTemplate",v.__docgenInfo={description:"",displayName:"DashboardTemplate",props:{config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"TemplateConfig"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const jr=l.div`
  display: grid;
  grid-template-areas:
    "header header"
    "content sidebar"
    "footer footer";
  grid-template-columns: 1fr 300px;
  grid-template-rows: auto 1fr auto;
  gap: ${({theme:e})=>e.spacing[8]};
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing[6]};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-areas:
      "header"
      "content"
      "sidebar"
      "footer";
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing[6]};
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,Br=l.header`
  grid-area: header;
  text-align: center;
  padding: ${({theme:e})=>e.spacing[8]} 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.text.muted};
  margin-bottom: ${({theme:e})=>e.spacing[8]};
`,Cr=l.main`
  grid-area: content;
  max-width: none;
  
  /* Prose styling for readable content */
  line-height: 1.7;
  font-size: ${({theme:e})=>e.typography.fontSizes.base};
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: ${({theme:e})=>e.spacing[8]};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
    line-height: 1.3;
    
    &:first-child {
      margin-top: 0;
    }
  }
  
  h1 {
    font-size: ${({theme:e})=>e.typography.fontSizes["3xl"]};
    font-weight: ${({theme:e})=>e.typography.fontWeights.bold};
  }
  
  h2 {
    font-size: ${({theme:e})=>e.typography.fontSizes["2xl"]};
    font-weight: ${({theme:e})=>e.typography.fontWeights.semibold};
  }
  
  h3 {
    font-size: ${({theme:e})=>e.typography.fontSizes.xl};
    font-weight: ${({theme:e})=>e.typography.fontWeights.semibold};
  }
  
  p {
    margin-bottom: ${({theme:e})=>e.spacing[6]};
  }
  
  ul, ol {
    margin-bottom: ${({theme:e})=>e.spacing[6]};
    padding-left: ${({theme:e})=>e.spacing[6]};
  }
  
  li {
    margin-bottom: ${({theme:e})=>e.spacing[2]};
  }
  
  blockquote {
    border-left: 4px solid ${({theme:e})=>e.colors.innovation.primaryBlue};
    padding-left: ${({theme:e})=>e.spacing[4]};
    margin: ${({theme:e})=>e.spacing[6]} 0;
    font-style: italic;
    background-color: ${({theme:e})=>e.colors.gray.light};
    padding: ${({theme:e})=>e.spacing[4]};
  }
  
  code {
    background-color: ${({theme:e})=>e.colors.gray.light};
    padding: ${({theme:e})=>e.spacing[1]} ${({theme:e})=>e.spacing[2]};
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
  }
  
  pre {
    background-color: ${({theme:e})=>e.colors.gray.dark};
    color: ${({theme:e})=>e.colors.foundation.white};
    padding: ${({theme:e})=>e.spacing[4]};
    border-radius: 8px;
    overflow-x: auto;
    margin: ${({theme:e})=>e.spacing[6]} 0;
    
    code {
      background: none;
      padding: 0;
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: ${({theme:e})=>e.spacing[6]} 0;
  }
  
  hr {
    border: none;
    border-top: 1px solid ${({theme:e})=>e.colors.text.muted};
    margin: ${({theme:e})=>e.spacing[8]} 0;
  }
`,wr=l.aside`
  grid-area: sidebar;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    border-top: 1px solid ${({theme:e})=>e.colors.text.muted};
    padding-top: ${({theme:e})=>e.spacing[6]};
  }
`,$r=l.footer`
  grid-area: footer;
  border-top: 1px solid ${({theme:e})=>e.colors.text.muted};
  padding-top: ${({theme:e})=>e.spacing[6]};
  margin-top: ${({theme:e})=>e.spacing[8]};
`,kr=({children:e,config:a,className:o,id:i})=>r.jsx(j,{config:a,className:o,id:i,children:r.jsx(jr,{children:e})}),Pr=({children:e,className:a,id:o})=>r.jsx(Br,{className:a,id:o,children:e}),Sr=({children:e,className:a,id:o})=>r.jsx(Cr,{className:a,id:o,children:e}),Ar=({children:e,className:a,id:o})=>r.jsx(wr,{className:a,id:o,children:e}),Fr=({children:e,className:a,id:o})=>r.jsx($r,{className:a,id:o,children:e}),b=Object.assign(kr,{Header:Pr,Content:Sr,Sidebar:Ar,Footer:Fr});try{b.displayName="ArticleTemplate",b.__docgenInfo={description:"",displayName:"ArticleTemplate",props:{config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"TemplateConfig"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const Nr=l.div`
  display: grid;
  grid-template-areas:
    "header header"
    "filters results"
    "footer footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  gap: ${({theme:e})=>e.spacing[6]};
  min-height: 100vh;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-areas:
      "header"
      "filters"
      "results"
      "footer";
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing[4]};
  }
`,Gr=l.header`
  grid-area: header;
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e})=>e.colors.foundation.white};
  border-bottom: 1px solid ${({theme:e})=>e.colors.text.muted};
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[4]};
`,Rr=l.aside`
  grid-area: filters;
  background-color: ${({theme:e})=>e.colors.gray.light};
  padding: ${({theme:e})=>e.spacing[6]};
  border-radius: 8px;
  height: fit-content;
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    background-color: transparent;
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,Wr=l.main`
  grid-area: results;
  padding: ${({theme:e})=>e.spacing[4]};
`,Ir=l.div`
  display: grid;
  grid-template-areas:
    "header header"
    "form summary"
    "footer footer";
  grid-template-columns: 1fr 350px;
  grid-template-rows: auto 1fr auto;
  gap: ${({theme:e})=>e.spacing[8]};
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing[6]};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.lg}) {
    grid-template-areas:
      "header"
      "summary"
      "form"
      "footer";
    grid-template-columns: 1fr;
    gap: ${({theme:e})=>e.spacing[6]};
    padding: ${({theme:e})=>e.spacing[4]};
  }
`,_r=l.header`
  grid-area: header;
  text-align: center;
  padding: ${({theme:e})=>e.spacing[6]} 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.text.muted};
`,Dr=l.main`
  grid-area: form;
  
  .step {
    margin-bottom: ${({theme:e})=>e.spacing[8]};
    padding: ${({theme:e})=>e.spacing[6]};
    background-color: ${({theme:e})=>e.colors.foundation.white};
    border: 1px solid ${({theme:e})=>e.colors.text.muted};
    border-radius: 8px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .step-header {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing[3]};
    margin-bottom: ${({theme:e})=>e.spacing[4]};
    
    .step-number {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      background-color: ${({theme:e})=>e.colors.innovation.primaryBlue};
      color: white;
      border-radius: 50%;
      font-weight: bold;
      font-size: 14px;
    }
    
    .step-title {
      font-size: ${({theme:e})=>e.typography.fontSizes.lg};
      font-weight: ${({theme:e})=>e.typography.fontWeights.semibold};
    }
  }
`,zr=l.aside`
  grid-area: summary;
  background-color: ${({theme:e})=>e.colors.gray.light};
  padding: ${({theme:e})=>e.spacing[6]};
  border-radius: 8px;
  height: fit-content;
  
  .summary-section {
    margin-bottom: ${({theme:e})=>e.spacing[6]};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .summary-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({theme:e})=>e.spacing[2]};
    
    &.total {
      border-top: 1px solid ${({theme:e})=>e.colors.text.muted};
      padding-top: ${({theme:e})=>e.spacing[3]};
      margin-top: ${({theme:e})=>e.spacing[3]};
      font-weight: bold;
    }
  }
`,Z=l.footer`
  grid-area: footer;
  border-top: 1px solid ${({theme:e})=>e.colors.text.muted};
  padding-top: ${({theme:e})=>e.spacing[6]};
  margin-top: ${({theme:e})=>e.spacing[8]};
  text-align: center;
`,Lr=({children:e,config:a,className:o,id:i})=>r.jsx(j,{config:a,className:o,id:i,children:r.jsx(Nr,{children:e})}),Mr=({children:e,className:a,id:o})=>r.jsx(Gr,{className:a,id:o,children:e}),Hr=({children:e,className:a,id:o})=>r.jsx(Rr,{className:a,id:o,children:e}),Vr=({children:e,className:a,id:o})=>r.jsx(Wr,{className:a,id:o,children:e}),qr=({children:e,className:a,id:o})=>r.jsx(Z,{className:a,id:o,children:e}),Er=({children:e,config:a,className:o,id:i})=>r.jsx(j,{config:a,className:o,id:i,children:r.jsx(Ir,{children:e})}),Or=({children:e,className:a,id:o})=>r.jsx(_r,{className:a,id:o,children:e}),Ur=({children:e,className:a,id:o})=>r.jsx(Dr,{className:a,id:o,children:e}),Yr=({children:e,className:a,id:o})=>r.jsx(zr,{className:a,id:o,children:e}),Jr=({children:e,className:a,id:o})=>r.jsx(Z,{className:a,id:o,children:e}),Xr=({children:e,number:a,title:o,completed:i=!1,active:d=!1,className:g,id:y})=>r.jsxs("div",{className:`step ${i?"completed":""} ${d?"active":""} ${g||""}`,id:y,children:[r.jsxs("div",{className:"step-header",children:[r.jsx("div",{className:`step-number ${i?"completed":""}`,children:i?"✓":a}),r.jsx("div",{className:"step-title",children:o})]}),e]}),f=Object.assign(Lr,{Header:Mr,Filters:Hr,Results:Vr,Footer:qr}),u=Object.assign(Er,{Header:Or,Form:Ur,Summary:Yr,Footer:Jr,Step:Xr});try{f.displayName="ProductGridTemplate",f.__docgenInfo={description:"",displayName:"ProductGridTemplate",props:{config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"TemplateConfig"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}try{u.displayName="CheckoutTemplate",u.__docgenInfo={description:"",displayName:"CheckoutTemplate",props:{config:{defaultValue:null,description:"",name:"config",required:!1,type:{name:"TemplateConfig"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const pe={title:"Layout/Templates",parameters:{layout:"fullscreen",docs:{description:{component:`
# Layout Templates

Pre-built layout templates for common website patterns. These templates combine foundation components into complete layouts that ensure consistency and best practices.

## Available Templates

- **Landing Page**: Hero sections, features, testimonials, CTAs
- **Dashboard**: Admin interfaces with sidebar navigation
- **Article**: Blog posts and documentation layouts
- **Product Grid**: E-commerce product listings with filters
- **Checkout**: Multi-step checkout flows with order summary

## Template Configuration

All templates support configuration for spacing, theme, and layout:

\`\`\`typescript
<LandingPageTemplate config={{ spacing: 'relaxed', theme: 'gaming', layout: 'wide' }}>
  <LandingPageTemplate.Hero>
    <Container size="lg" centerContent>
      <Typography variant="h1">Welcome to RSPWN</Typography>
      <Button size="lg">Get Started</Button>
    </Container>
  </LandingPageTemplate.Hero>
</LandingPageTemplate>
\`\`\`

## Best Practices

- Use semantic HTML elements with proper ARIA labels
- Ensure responsive behavior across all breakpoints
- Follow consistent spacing and typography patterns
- Include proper navigation and accessibility features
        `}}},tags:["autodocs"]},C={render:()=>r.jsxs(x,{children:[r.jsx(x.Hero,{children:r.jsxs(B,{size:"lg",centerContent:!0,children:[r.jsx(t,{variant:"h1",fontSize:"4xl",marginBottom:"6",textAlign:"center",children:"Welcome to RSPWN Gaming Platform"}),r.jsx(t,{variant:"body1",fontSize:"lg",color:"muted",marginBottom:"8",textAlign:"center",maxWidth:"600px",children:"The ultimate gaming platform for competitive players. Join millions of gamers worldwide."}),r.jsxs(c,{gap:"4",justifyContent:"center",children:[r.jsx(p,{size:"lg",variant:"primary",children:"Get Started"}),r.jsx(p,{size:"lg",variant:"outline",children:"Learn More"})]})]})}),r.jsx(x.Features,{children:r.jsxs(B,{size:"lg",children:[r.jsx(t,{variant:"h2",textAlign:"center",marginBottom:"12",children:"Powerful Features"}),r.jsxs(T,{columns:{xs:1,md:3},gap:"8",children:[r.jsxs(s,{padding:"6",textAlign:"center",children:[r.jsx(n,{width:"60px",height:"60px",background:"innovation.primaryBlue",borderRadius:"full",marginX:"auto",marginBottom:"4"}),r.jsx(t,{variant:"h3",marginBottom:"3",children:"Real-time Analytics"}),r.jsx(t,{color:"muted",children:"Track your gaming performance with detailed analytics and insights."})]}),r.jsxs(s,{padding:"6",textAlign:"center",children:[r.jsx(n,{width:"60px",height:"60px",background:"semantic.success",borderRadius:"full",marginX:"auto",marginBottom:"4"}),r.jsx(t,{variant:"h3",marginBottom:"3",children:"Tournament Mode"}),r.jsx(t,{color:"muted",children:"Compete in tournaments with players from around the world."})]}),r.jsxs(s,{padding:"6",textAlign:"center",children:[r.jsx(n,{width:"60px",height:"60px",background:"semantic.warning",borderRadius:"full",marginX:"auto",marginBottom:"4"}),r.jsx(t,{variant:"h3",marginBottom:"3",children:"Team Management"}),r.jsx(t,{color:"muted",children:"Create and manage your gaming team with advanced tools."})]})]})]})}),r.jsx(x.Testimonials,{children:r.jsxs(B,{size:"lg",children:[r.jsx(t,{variant:"h2",textAlign:"center",marginBottom:"12",children:"What Gamers Say"}),r.jsxs(T,{columns:{xs:1,md:2},gap:"8",children:[r.jsxs(s,{padding:"6",children:[r.jsx(t,{variant:"body1",marginBottom:"4",children:'"RSPWN has completely transformed my gaming experience. The analytics help me improve my gameplay significantly."'}),r.jsxs(c,{gap:"3",alignItems:"center",children:[r.jsx(n,{width:"40px",height:"40px",background:"gray.base",borderRadius:"full"}),r.jsxs(n,{children:[r.jsx(t,{fontWeight:"medium",children:"Alex Chen"}),r.jsx(t,{variant:"body2",color:"muted",children:"Pro Gamer"})]})]})]}),r.jsxs(s,{padding:"6",children:[r.jsx(t,{variant:"body1",marginBottom:"4",children:`"The tournament features are incredible. I've won three competitions already using this platform."`}),r.jsxs(c,{gap:"3",alignItems:"center",children:[r.jsx(n,{width:"40px",height:"40px",background:"gray.base",borderRadius:"full"}),r.jsxs(n,{children:[r.jsx(t,{fontWeight:"medium",children:"Sarah Johnson"}),r.jsx(t,{variant:"body2",color:"muted",children:"Competitive Player"})]})]})]})]})]})}),r.jsx(x.CTA,{children:r.jsxs(B,{size:"lg",centerContent:!0,children:[r.jsx(t,{variant:"h2",marginBottom:"4",textAlign:"center",color:"white",children:"Ready to Level Up?"}),r.jsx(t,{variant:"body1",marginBottom:"6",textAlign:"center",color:"white",opacity:"0.9",children:"Join thousands of gamers who have improved their skills with RSPWN."}),r.jsx(p,{size:"lg",variant:"secondary",children:"Start Your Journey"})]})}),r.jsx(x.Footer,{children:r.jsxs(B,{size:"lg",children:[r.jsxs(T,{columns:{xs:1,md:4},gap:"8",marginBottom:"8",children:[r.jsxs(n,{children:[r.jsx(t,{variant:"h5",color:"white",marginBottom:"4",children:"RSPWN"}),r.jsx(t,{variant:"body2",color:"gray.light",children:"The ultimate gaming platform for competitive players worldwide."})]}),r.jsxs(n,{children:[r.jsx(t,{variant:"h6",color:"white",marginBottom:"3",children:"Product"}),r.jsx(t,{variant:"body2",color:"gray.light",marginBottom:"2",children:"Features"}),r.jsx(t,{variant:"body2",color:"gray.light",marginBottom:"2",children:"Pricing"}),r.jsx(t,{variant:"body2",color:"gray.light",children:"Support"})]}),r.jsxs(n,{children:[r.jsx(t,{variant:"h6",color:"white",marginBottom:"3",children:"Company"}),r.jsx(t,{variant:"body2",color:"gray.light",marginBottom:"2",children:"About"}),r.jsx(t,{variant:"body2",color:"gray.light",marginBottom:"2",children:"Blog"}),r.jsx(t,{variant:"body2",color:"gray.light",children:"Careers"})]}),r.jsxs(n,{children:[r.jsx(t,{variant:"h6",color:"white",marginBottom:"3",children:"Connect"}),r.jsx(t,{variant:"body2",color:"gray.light",marginBottom:"2",children:"Twitter"}),r.jsx(t,{variant:"body2",color:"gray.light",marginBottom:"2",children:"Discord"}),r.jsx(t,{variant:"body2",color:"gray.light",children:"GitHub"})]})]}),r.jsx(n,{borderTop:"1px solid",borderColor:"gray.border",paddingTop:"6",children:r.jsx(t,{variant:"body2",color:"gray.light",textAlign:"center",children:"© 2024 RSPWN. All rights reserved."})})]})})]})},w={render:()=>r.jsxs(v,{children:[r.jsx(v.Header,{background:"dark",children:r.jsxs(c,{justifyContent:"between",alignItems:"center",width:"100%",children:[r.jsx(t,{variant:"h5",color:"white",children:"RSPWN Dashboard"}),r.jsxs(c,{gap:"4",alignItems:"center",children:[r.jsx(A,{variant:"success",children:"Online"}),r.jsx(n,{width:"32px",height:"32px",background:"innovation.primaryBlue",borderRadius:"full"})]})]})}),r.jsx(v.Sidebar,{width:"250px",children:r.jsxs(n,{padding:"6",children:[r.jsx(t,{variant:"h6",marginBottom:"6",children:"Navigation"}),r.jsxs(n,{display:"flex",flexDirection:"column",gap:"2",children:[r.jsx(p,{variant:"ghost",width:"100%",justifyContent:"flex-start",children:"📊 Dashboard"}),r.jsx(p,{variant:"ghost",width:"100%",justifyContent:"flex-start",children:"🎮 Games"}),r.jsx(p,{variant:"ghost",width:"100%",justifyContent:"flex-start",children:"🏆 Tournaments"}),r.jsx(p,{variant:"ghost",width:"100%",justifyContent:"flex-start",children:"👥 Teams"}),r.jsx(p,{variant:"ghost",width:"100%",justifyContent:"flex-start",children:"📈 Analytics"}),r.jsx(p,{variant:"ghost",width:"100%",justifyContent:"flex-start",children:"⚙️ Settings"})]})]})}),r.jsxs(v.Main,{children:[r.jsx(t,{variant:"h4",marginBottom:"6",children:"Welcome back, Player!"}),r.jsxs(T,{columns:{xs:1,md:3},gap:"6",marginBottom:"8",children:[r.jsxs(s,{padding:"6",children:[r.jsx(t,{variant:"h6",marginBottom:"2",children:"Total Games"}),r.jsx(t,{variant:"h2",color:"innovation.primaryBlue",children:"1,247"}),r.jsx(t,{variant:"body2",color:"semantic.success",children:"+12% this week"})]}),r.jsxs(s,{padding:"6",children:[r.jsx(t,{variant:"h6",marginBottom:"2",children:"Win Rate"}),r.jsx(t,{variant:"h2",color:"semantic.success",children:"73.5%"}),r.jsx(t,{variant:"body2",color:"semantic.success",children:"+2.3% this week"})]}),r.jsxs(s,{padding:"6",children:[r.jsx(t,{variant:"h6",marginBottom:"2",children:"Ranking"}),r.jsx(t,{variant:"h2",color:"semantic.warning",children:"#157"}),r.jsx(t,{variant:"body2",color:"semantic.success",children:"+5 positions"})]})]}),r.jsxs(s,{padding:"6",children:[r.jsx(t,{variant:"h5",marginBottom:"4",children:"Recent Activity"}),r.jsx(n,{display:"flex",flexDirection:"column",gap:"4",children:[1,2,3].map(e=>r.jsxs(c,{gap:"4",alignItems:"center",padding:"3",background:"gray.subtle",borderRadius:"md",children:[r.jsx(n,{width:"32px",height:"32px",background:"innovation.primaryBlue",borderRadius:"full"}),r.jsxs(n,{flex:"1",children:[r.jsxs(t,{variant:"body2",children:["Victory in Tournament Match #",e]}),r.jsx(t,{variant:"caption",color:"muted",children:"2 hours ago"})]}),r.jsx(A,{variant:"success",children:"+50 XP"})]},e))})]})]}),r.jsx(v.Footer,{children:r.jsx(t,{variant:"body2",color:"muted",textAlign:"center",children:"© 2024 RSPWN Dashboard. Version 2.1.0"})})]})},$={render:()=>r.jsxs(b,{children:[r.jsxs(b.Header,{children:[r.jsx(t,{variant:"h1",marginBottom:"4",children:"Getting Started with RSPWN Gaming Platform"}),r.jsxs(c,{gap:"4",justifyContent:"center",alignItems:"center",children:[r.jsx(t,{variant:"body2",color:"muted",children:"By Alex Chen"}),r.jsx(t,{variant:"body2",color:"muted",children:"•"}),r.jsx(t,{variant:"body2",color:"muted",children:"December 15, 2024"}),r.jsx(t,{variant:"body2",color:"muted",children:"•"}),r.jsx(t,{variant:"body2",color:"muted",children:"5 min read"})]})]}),r.jsxs(b.Content,{children:[r.jsx(t,{variant:"body1",marginBottom:"6",children:"Welcome to the ultimate guide for getting started with the RSPWN Gaming Platform. Whether you're a casual gamer or aspiring professional, this comprehensive guide will help you make the most of our platform's powerful features."}),r.jsx(t,{variant:"h2",marginBottom:"4",children:"Setting Up Your Profile"}),r.jsx(t,{variant:"body1",marginBottom:"4",children:"The first step to success on RSPWN is creating a comprehensive profile. Here's what you need to know:"}),r.jsxs(n,{as:"ul",marginBottom:"6",paddingLeft:"6",children:[r.jsx(n,{as:"li",marginBottom:"2",children:r.jsx(t,{variant:"body1",children:"Choose a unique username that represents your gaming identity"})}),r.jsx(n,{as:"li",marginBottom:"2",children:r.jsx(t,{variant:"body1",children:"Upload a profile picture that stands out in tournaments"})}),r.jsx(n,{as:"li",marginBottom:"2",children:r.jsx(t,{variant:"body1",children:"Connect your gaming accounts for comprehensive statistics"})})]}),r.jsx(n,{as:"blockquote",padding:"4",background:"gray.subtle",borderLeft:"4px solid",borderColor:"innovation.primaryBlue",marginBottom:"6",children:r.jsx(t,{variant:"body1",fontStyle:"italic",children:'"A well-optimized profile is the foundation of success on any gaming platform. Take time to set it up properly from the start." - Pro Gamer Sarah Johnson'})}),r.jsx(t,{variant:"h3",marginBottom:"4",children:"Understanding the Dashboard"}),r.jsx(t,{variant:"body1",marginBottom:"6",children:"Your dashboard is mission control for all gaming activities. From here, you can track performance, join tournaments, manage teams, and analyze your gameplay patterns."}),r.jsx(s,{padding:"4",background:"dark",color:"white",marginBottom:"6",children:r.jsxs(t,{variant:"body2",fontFamily:"monospace",children:["# Quick Dashboard Navigation",`
`,"• Games → View match history and statistics",`
`,"• Tournaments → Join upcoming competitions",`
`,"• Teams → Create or join gaming teams",`
`,"• Analytics → Deep dive into performance metrics"]})}),r.jsx(t,{variant:"h2",marginBottom:"4",children:"Your First Tournament"}),r.jsx(t,{variant:"body1",marginBottom:"6",children:"Participating in tournaments is where RSPWN truly shines. Our matchmaking system ensures fair competition while providing opportunities for skill development and recognition."})]}),r.jsxs(b.Sidebar,{children:[r.jsxs(s,{padding:"4",marginBottom:"6",children:[r.jsx(t,{variant:"h6",marginBottom:"4",children:"Table of Contents"}),r.jsxs(n,{display:"flex",flexDirection:"column",gap:"2",children:[r.jsx(t,{variant:"body2",color:"innovation.primaryBlue",children:"Setting Up Your Profile"}),r.jsx(t,{variant:"body2",color:"muted",children:"Understanding the Dashboard"}),r.jsx(t,{variant:"body2",color:"muted",children:"Your First Tournament"}),r.jsx(t,{variant:"body2",color:"muted",children:"Team Management"}),r.jsx(t,{variant:"body2",color:"muted",children:"Analytics & Insights"})]})]}),r.jsxs(s,{padding:"4",marginBottom:"6",children:[r.jsx(t,{variant:"h6",marginBottom:"4",children:"Related Articles"}),r.jsxs(n,{display:"flex",flexDirection:"column",gap:"3",children:[r.jsxs(n,{children:[r.jsx(t,{variant:"body2",fontWeight:"medium",marginBottom:"1",children:"Advanced Tournament Strategies"}),r.jsx(t,{variant:"caption",color:"muted",children:"Pro tips for competitive play"})]}),r.jsxs(n,{children:[r.jsx(t,{variant:"body2",fontWeight:"medium",marginBottom:"1",children:"Team Building Guide"}),r.jsx(t,{variant:"caption",color:"muted",children:"Create winning team dynamics"})]}),r.jsxs(n,{children:[r.jsx(t,{variant:"body2",fontWeight:"medium",marginBottom:"1",children:"Performance Analytics Deep Dive"}),r.jsx(t,{variant:"caption",color:"muted",children:"Understanding your stats"})]})]})]}),r.jsxs(s,{padding:"4",children:[r.jsx(t,{variant:"h6",marginBottom:"3",children:"About the Author"}),r.jsxs(c,{gap:"3",alignItems:"center",marginBottom:"3",children:[r.jsx(n,{width:"48px",height:"48px",background:"innovation.primaryBlue",borderRadius:"full"}),r.jsxs(n,{children:[r.jsx(t,{variant:"body2",fontWeight:"medium",children:"Alex Chen"}),r.jsx(t,{variant:"caption",color:"muted",children:"Senior Gaming Strategist"})]})]}),r.jsx(t,{variant:"body2",color:"muted",children:"Professional gamer with 8+ years of competitive experience. Expert in tournament strategy and team management."})]})]}),r.jsx(b.Footer,{children:r.jsxs(c,{justifyContent:"between",alignItems:"center",children:[r.jsx(t,{variant:"body2",color:"muted",children:"Published on December 15, 2024 • Last updated December 20, 2024"}),r.jsxs(c,{gap:"3",children:[r.jsx(p,{variant:"ghost",size:"sm",children:"Share"}),r.jsx(p,{variant:"ghost",size:"sm",children:"Bookmark"})]})]})})]})},k={render:()=>r.jsxs(f,{children:[r.jsxs(f.Header,{children:[r.jsx(t,{variant:"h4",children:"Gaming Gear"}),r.jsxs(c,{gap:"3",alignItems:"center",children:[r.jsx(t,{variant:"body2",color:"muted",children:"Showing 24 of 156 products"}),r.jsx(p,{variant:"outline",size:"sm",children:"Sort by Price"})]})]}),r.jsxs(f.Filters,{children:[r.jsx(t,{variant:"h6",marginBottom:"4",children:"Filters"}),r.jsxs(n,{marginBottom:"6",children:[r.jsx(t,{variant:"body2",fontWeight:"medium",marginBottom:"3",children:"Category"}),r.jsxs(n,{display:"flex",flexDirection:"column",gap:"2",children:[r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx("input",{type:"checkbox",defaultChecked:!0}),r.jsx(t,{variant:"body2",children:"Gaming Headsets"})]}),r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx("input",{type:"checkbox"}),r.jsx(t,{variant:"body2",children:"Mechanical Keyboards"})]}),r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx("input",{type:"checkbox"}),r.jsx(t,{variant:"body2",children:"Gaming Mice"})]}),r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx("input",{type:"checkbox"}),r.jsx(t,{variant:"body2",children:"Gaming Chairs"})]})]})]}),r.jsxs(n,{marginBottom:"6",children:[r.jsx(t,{variant:"body2",fontWeight:"medium",marginBottom:"3",children:"Price Range"}),r.jsxs(n,{display:"flex",gap:"2",marginBottom:"2",children:[r.jsx(m,{placeholder:"Min",size:"sm"}),r.jsx(m,{placeholder:"Max",size:"sm"})]}),r.jsx(p,{variant:"outline",size:"sm",width:"100%",children:"Apply"})]}),r.jsxs(n,{children:[r.jsx(t,{variant:"body2",fontWeight:"medium",marginBottom:"3",children:"Brand"}),r.jsxs(n,{display:"flex",flexDirection:"column",gap:"2",children:[r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx("input",{type:"checkbox"}),r.jsx(t,{variant:"body2",children:"RSPWN Pro"})]}),r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx("input",{type:"checkbox"}),r.jsx(t,{variant:"body2",children:"GameForce"})]}),r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx("input",{type:"checkbox"}),r.jsx(t,{variant:"body2",children:"UltraGaming"})]})]})]})]}),r.jsx(f.Results,{children:r.jsx(T,{columns:{xs:1,sm:2,md:3,lg:4},gap:"6",children:Array.from({length:8},(e,a)=>r.jsxs(s,{padding:"0",overflow:"hidden",children:[r.jsx(n,{height:"200px",background:"gray.subtle",marginBottom:"4"}),r.jsxs(n,{padding:"4",children:[r.jsxs(t,{variant:"body1",fontWeight:"medium",marginBottom:"2",children:["RSPWN Pro Gaming Headset ",a+1]}),r.jsx(t,{variant:"body2",color:"muted",marginBottom:"3",children:"Premium wireless gaming headset with 7.1 surround sound"}),r.jsxs(c,{justifyContent:"between",alignItems:"center",marginBottom:"3",children:[r.jsx(t,{variant:"h6",color:"innovation.primaryBlue",children:"$199.99"}),r.jsxs(n,{display:"flex",alignItems:"center",gap:"1",children:[r.jsx(t,{variant:"body2",children:"4.8"}),r.jsx(t,{variant:"body2",color:"semantic.warning",children:"★"})]})]}),r.jsx(p,{width:"100%",size:"sm",children:"Add to Cart"})]})]},a))})}),r.jsx(f.Footer,{children:r.jsx(t,{variant:"body2",color:"muted",children:"© 2024 RSPWN Gaming Store. All rights reserved."})})]})},P={render:()=>r.jsxs(u,{children:[r.jsxs(u.Header,{children:[r.jsx(t,{variant:"h3",marginBottom:"2",children:"Checkout"}),r.jsx(t,{variant:"body1",color:"muted",children:"Complete your order in just a few simple steps"})]}),r.jsxs(u.Form,{children:[r.jsx(u.Step,{number:1,title:"Shipping Information",active:!0,children:r.jsxs(T,{columns:{xs:1,md:2},gap:"4",children:[r.jsx(m,{label:"First Name",placeholder:"Enter first name"}),r.jsx(m,{label:"Last Name",placeholder:"Enter last name"}),r.jsx(m,{label:"Email",placeholder:"Enter email address",style:{gridColumn:"1 / -1"}}),r.jsx(m,{label:"Address",placeholder:"Street address",style:{gridColumn:"1 / -1"}}),r.jsx(m,{label:"City",placeholder:"Enter city"}),r.jsx(m,{label:"ZIP Code",placeholder:"Enter ZIP"})]})}),r.jsxs(u.Step,{number:2,title:"Payment Method",children:[r.jsxs(n,{marginBottom:"4",children:[r.jsx(t,{variant:"body2",fontWeight:"medium",marginBottom:"3",children:"Select Payment Method"}),r.jsxs(n,{display:"flex",flexDirection:"column",gap:"3",children:[r.jsx(s,{padding:"3",border:"2px solid",borderColor:"innovation.primaryBlue",children:r.jsxs(c,{alignItems:"center",gap:"3",children:[r.jsx("input",{type:"radio",name:"payment",defaultChecked:!0}),r.jsx(t,{variant:"body2",children:"Credit Card"})]})}),r.jsx(s,{padding:"3",border:"1px solid",borderColor:"gray.border",children:r.jsxs(c,{alignItems:"center",gap:"3",children:[r.jsx("input",{type:"radio",name:"payment"}),r.jsx(t,{variant:"body2",children:"PayPal"})]})}),r.jsx(s,{padding:"3",border:"1px solid",borderColor:"gray.border",children:r.jsxs(c,{alignItems:"center",gap:"3",children:[r.jsx("input",{type:"radio",name:"payment"}),r.jsx(t,{variant:"body2",children:"Apple Pay"})]})})]})]}),r.jsxs(T,{columns:{xs:1,md:2},gap:"4",children:[r.jsx(m,{label:"Card Number",placeholder:"1234 5678 9012 3456",style:{gridColumn:"1 / -1"}}),r.jsx(m,{label:"Expiry Date",placeholder:"MM/YY"}),r.jsx(m,{label:"CVV",placeholder:"123"})]})]}),r.jsx(u.Step,{number:3,title:"Review Order",children:r.jsx(t,{variant:"body1",color:"muted",children:"Please review your order details before completing the purchase."})})]}),r.jsxs(u.Summary,{children:[r.jsx(t,{variant:"h6",marginBottom:"4",children:"Order Summary"}),r.jsxs("div",{className:"summary-section",children:[r.jsx(t,{variant:"body2",fontWeight:"medium",marginBottom:"3",children:"Items (2)"}),r.jsxs("div",{className:"summary-item",children:[r.jsx(t,{variant:"body2",children:"RSPWN Pro Gaming Headset"}),r.jsx(t,{variant:"body2",children:"$199.99"})]}),r.jsxs("div",{className:"summary-item",children:[r.jsx(t,{variant:"body2",children:"Gaming Mouse Pad XL"}),r.jsx(t,{variant:"body2",children:"$39.99"})]})]}),r.jsxs("div",{className:"summary-section",children:[r.jsxs("div",{className:"summary-item",children:[r.jsx(t,{variant:"body2",children:"Subtotal"}),r.jsx(t,{variant:"body2",children:"$239.98"})]}),r.jsxs("div",{className:"summary-item",children:[r.jsx(t,{variant:"body2",children:"Shipping"}),r.jsx(t,{variant:"body2",children:"$9.99"})]}),r.jsxs("div",{className:"summary-item",children:[r.jsx(t,{variant:"body2",children:"Tax"}),r.jsx(t,{variant:"body2",children:"$19.99"})]}),r.jsxs("div",{className:"summary-item total",children:[r.jsx(t,{variant:"body1",fontWeight:"bold",children:"Total"}),r.jsx(t,{variant:"body1",fontWeight:"bold",color:"innovation.primaryBlue",children:"$269.96"})]})]}),r.jsx(p,{width:"100%",size:"lg",marginTop:"4",children:"Complete Order"})]}),r.jsx(u.Footer,{children:r.jsx(t,{variant:"body2",color:"muted",textAlign:"center",children:"Secure checkout powered by RSPWN • All transactions are encrypted"})})]})};var G,R,W;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <LandingPageTemplate>\r
      <LandingPageTemplate.Hero>\r
        <Container size="lg" centerContent>\r
          <Typography variant="h1" fontSize="4xl" marginBottom="6" textAlign="center">\r
            Welcome to RSPWN Gaming Platform\r
          </Typography>\r
          <Typography variant="body1" fontSize="lg" color="muted" marginBottom="8" textAlign="center" maxWidth="600px">\r
            The ultimate gaming platform for competitive players. Join millions of gamers worldwide.\r
          </Typography>\r
          <Flex gap="4" justifyContent="center">\r
            <Button size="lg" variant="primary">Get Started</Button>\r
            <Button size="lg" variant="outline">Learn More</Button>\r
          </Flex>\r
        </Container>\r
      </LandingPageTemplate.Hero>\r
\r
      <LandingPageTemplate.Features>\r
        <Container size="lg">\r
          <Typography variant="h2" textAlign="center" marginBottom="12">\r
            Powerful Features\r
          </Typography>\r
          <Grid columns={{
          xs: 1,
          md: 3
        }} gap="8">\r
            <Card padding="6" textAlign="center">\r
              <Box width="60px" height="60px" background="innovation.primaryBlue" borderRadius="full" marginX="auto" marginBottom="4" />\r
              <Typography variant="h3" marginBottom="3">Real-time Analytics</Typography>\r
              <Typography color="muted">Track your gaming performance with detailed analytics and insights.</Typography>\r
            </Card>\r
            <Card padding="6" textAlign="center">\r
              <Box width="60px" height="60px" background="semantic.success" borderRadius="full" marginX="auto" marginBottom="4" />\r
              <Typography variant="h3" marginBottom="3">Tournament Mode</Typography>\r
              <Typography color="muted">Compete in tournaments with players from around the world.</Typography>\r
            </Card>\r
            <Card padding="6" textAlign="center">\r
              <Box width="60px" height="60px" background="semantic.warning" borderRadius="full" marginX="auto" marginBottom="4" />\r
              <Typography variant="h3" marginBottom="3">Team Management</Typography>\r
              <Typography color="muted">Create and manage your gaming team with advanced tools.</Typography>\r
            </Card>\r
          </Grid>\r
        </Container>\r
      </LandingPageTemplate.Features>\r
\r
      <LandingPageTemplate.Testimonials>\r
        <Container size="lg">\r
          <Typography variant="h2" textAlign="center" marginBottom="12">\r
            What Gamers Say\r
          </Typography>\r
          <Grid columns={{
          xs: 1,
          md: 2
        }} gap="8">\r
            <Card padding="6">\r
              <Typography variant="body1" marginBottom="4">\r
                "RSPWN has completely transformed my gaming experience. The analytics help me improve my gameplay significantly."\r
              </Typography>\r
              <Flex gap="3" alignItems="center">\r
                <Box width="40px" height="40px" background="gray.base" borderRadius="full" />\r
                <Box>\r
                  <Typography fontWeight="medium">Alex Chen</Typography>\r
                  <Typography variant="body2" color="muted">Pro Gamer</Typography>\r
                </Box>\r
              </Flex>\r
            </Card>\r
            <Card padding="6">\r
              <Typography variant="body1" marginBottom="4">\r
                "The tournament features are incredible. I've won three competitions already using this platform."\r
              </Typography>\r
              <Flex gap="3" alignItems="center">\r
                <Box width="40px" height="40px" background="gray.base" borderRadius="full" />\r
                <Box>\r
                  <Typography fontWeight="medium">Sarah Johnson</Typography>\r
                  <Typography variant="body2" color="muted">Competitive Player</Typography>\r
                </Box>\r
              </Flex>\r
            </Card>\r
          </Grid>\r
        </Container>\r
      </LandingPageTemplate.Testimonials>\r
\r
      <LandingPageTemplate.CTA>\r
        <Container size="lg" centerContent>\r
          <Typography variant="h2" marginBottom="4" textAlign="center" color="white">\r
            Ready to Level Up?\r
          </Typography>\r
          <Typography variant="body1" marginBottom="6" textAlign="center" color="white" opacity="0.9">\r
            Join thousands of gamers who have improved their skills with RSPWN.\r
          </Typography>\r
          <Button size="lg" variant="secondary">Start Your Journey</Button>\r
        </Container>\r
      </LandingPageTemplate.CTA>\r
\r
      <LandingPageTemplate.Footer>\r
        <Container size="lg">\r
          <Grid columns={{
          xs: 1,
          md: 4
        }} gap="8" marginBottom="8">\r
            <Box>\r
              <Typography variant="h5" color="white" marginBottom="4">RSPWN</Typography>\r
              <Typography variant="body2" color="gray.light">\r
                The ultimate gaming platform for competitive players worldwide.\r
              </Typography>\r
            </Box>\r
            <Box>\r
              <Typography variant="h6" color="white" marginBottom="3">Product</Typography>\r
              <Typography variant="body2" color="gray.light" marginBottom="2">Features</Typography>\r
              <Typography variant="body2" color="gray.light" marginBottom="2">Pricing</Typography>\r
              <Typography variant="body2" color="gray.light">Support</Typography>\r
            </Box>\r
            <Box>\r
              <Typography variant="h6" color="white" marginBottom="3">Company</Typography>\r
              <Typography variant="body2" color="gray.light" marginBottom="2">About</Typography>\r
              <Typography variant="body2" color="gray.light" marginBottom="2">Blog</Typography>\r
              <Typography variant="body2" color="gray.light">Careers</Typography>\r
            </Box>\r
            <Box>\r
              <Typography variant="h6" color="white" marginBottom="3">Connect</Typography>\r
              <Typography variant="body2" color="gray.light" marginBottom="2">Twitter</Typography>\r
              <Typography variant="body2" color="gray.light" marginBottom="2">Discord</Typography>\r
              <Typography variant="body2" color="gray.light">GitHub</Typography>\r
            </Box>\r
          </Grid>\r
          <Box borderTop="1px solid" borderColor="gray.border" paddingTop="6">\r
            <Typography variant="body2" color="gray.light" textAlign="center">\r
              © 2024 RSPWN. All rights reserved.\r
            </Typography>\r
          </Box>\r
        </Container>\r
      </LandingPageTemplate.Footer>\r
    </LandingPageTemplate>
}`,...(W=(R=C.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var I,_,D;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <DashboardTemplate>\r
      <DashboardTemplate.Header background="dark">\r
        <Flex justifyContent="between" alignItems="center" width="100%">\r
          <Typography variant="h5" color="white">RSPWN Dashboard</Typography>\r
          <Flex gap="4" alignItems="center">\r
            <Badge variant="success">Online</Badge>\r
            <Box width="32px" height="32px" background="innovation.primaryBlue" borderRadius="full" />\r
          </Flex>\r
        </Flex>\r
      </DashboardTemplate.Header>\r
\r
      <DashboardTemplate.Sidebar width="250px">\r
        <Box padding="6">\r
          <Typography variant="h6" marginBottom="6">Navigation</Typography>\r
          <Box display="flex" flexDirection="column" gap="2">\r
            <Button variant="ghost" width="100%" justifyContent="flex-start">\r
              📊 Dashboard\r
            </Button>\r
            <Button variant="ghost" width="100%" justifyContent="flex-start">\r
              🎮 Games\r
            </Button>\r
            <Button variant="ghost" width="100%" justifyContent="flex-start">\r
              🏆 Tournaments\r
            </Button>\r
            <Button variant="ghost" width="100%" justifyContent="flex-start">\r
              👥 Teams\r
            </Button>\r
            <Button variant="ghost" width="100%" justifyContent="flex-start">\r
              📈 Analytics\r
            </Button>\r
            <Button variant="ghost" width="100%" justifyContent="flex-start">\r
              ⚙️ Settings\r
            </Button>\r
          </Box>\r
        </Box>\r
      </DashboardTemplate.Sidebar>\r
\r
      <DashboardTemplate.Main>\r
        <Typography variant="h4" marginBottom="6">Welcome back, Player!</Typography>\r
        \r
        <Grid columns={{
        xs: 1,
        md: 3
      }} gap="6" marginBottom="8">\r
          <Card padding="6">\r
            <Typography variant="h6" marginBottom="2">Total Games</Typography>\r
            <Typography variant="h2" color="innovation.primaryBlue">1,247</Typography>\r
            <Typography variant="body2" color="semantic.success">+12% this week</Typography>\r
          </Card>\r
          <Card padding="6">\r
            <Typography variant="h6" marginBottom="2">Win Rate</Typography>\r
            <Typography variant="h2" color="semantic.success">73.5%</Typography>\r
            <Typography variant="body2" color="semantic.success">+2.3% this week</Typography>\r
          </Card>\r
          <Card padding="6">\r
            <Typography variant="h6" marginBottom="2">Ranking</Typography>\r
            <Typography variant="h2" color="semantic.warning">#157</Typography>\r
            <Typography variant="body2" color="semantic.success">+5 positions</Typography>\r
          </Card>\r
        </Grid>\r
\r
        <Card padding="6">\r
          <Typography variant="h5" marginBottom="4">Recent Activity</Typography>\r
          <Box display="flex" flexDirection="column" gap="4">\r
            {[1, 2, 3].map(i => <Flex key={i} gap="4" alignItems="center" padding="3" background="gray.subtle" borderRadius="md">\r
                <Box width="32px" height="32px" background="innovation.primaryBlue" borderRadius="full" />\r
                <Box flex="1">\r
                  <Typography variant="body2">Victory in Tournament Match #{i}</Typography>\r
                  <Typography variant="caption" color="muted">2 hours ago</Typography>\r
                </Box>\r
                <Badge variant="success">+50 XP</Badge>\r
              </Flex>)}\r
          </Box>\r
        </Card>\r
      </DashboardTemplate.Main>\r
\r
      <DashboardTemplate.Footer>\r
        <Typography variant="body2" color="muted" textAlign="center">\r
          © 2024 RSPWN Dashboard. Version 2.1.0\r
        </Typography>\r
      </DashboardTemplate.Footer>\r
    </DashboardTemplate>
}`,...(D=(_=w.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var z,L,M;$.parameters={...$.parameters,docs:{...(z=$.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <ArticleTemplate>\r
      <ArticleTemplate.Header>\r
        <Typography variant="h1" marginBottom="4">\r
          Getting Started with RSPWN Gaming Platform\r
        </Typography>\r
        <Flex gap="4" justifyContent="center" alignItems="center">\r
          <Typography variant="body2" color="muted">By Alex Chen</Typography>\r
          <Typography variant="body2" color="muted">•</Typography>\r
          <Typography variant="body2" color="muted">December 15, 2024</Typography>\r
          <Typography variant="body2" color="muted">•</Typography>\r
          <Typography variant="body2" color="muted">5 min read</Typography>\r
        </Flex>\r
      </ArticleTemplate.Header>\r
\r
      <ArticleTemplate.Content>\r
        <Typography variant="body1" marginBottom="6">\r
          Welcome to the ultimate guide for getting started with the RSPWN Gaming Platform. \r
          Whether you're a casual gamer or aspiring professional, this comprehensive guide will \r
          help you make the most of our platform's powerful features.\r
        </Typography>\r
\r
        <Typography variant="h2" marginBottom="4">\r
          Setting Up Your Profile\r
        </Typography>\r
\r
        <Typography variant="body1" marginBottom="4">\r
          The first step to success on RSPWN is creating a comprehensive profile. Here's what you need to know:\r
        </Typography>\r
\r
        <Box as="ul" marginBottom="6" paddingLeft="6">\r
          <Box as="li" marginBottom="2">\r
            <Typography variant="body1">Choose a unique username that represents your gaming identity</Typography>\r
          </Box>\r
          <Box as="li" marginBottom="2">\r
            <Typography variant="body1">Upload a profile picture that stands out in tournaments</Typography>\r
          </Box>\r
          <Box as="li" marginBottom="2">\r
            <Typography variant="body1">Connect your gaming accounts for comprehensive statistics</Typography>\r
          </Box>\r
        </Box>\r
\r
        <Box as="blockquote" padding="4" background="gray.subtle" borderLeft="4px solid" borderColor="innovation.primaryBlue" marginBottom="6">\r
          <Typography variant="body1" fontStyle="italic">\r
            "A well-optimized profile is the foundation of success on any gaming platform. \r
            Take time to set it up properly from the start." - Pro Gamer Sarah Johnson\r
          </Typography>\r
        </Box>\r
\r
        <Typography variant="h3" marginBottom="4">\r
          Understanding the Dashboard\r
        </Typography>\r
\r
        <Typography variant="body1" marginBottom="6">\r
          Your dashboard is mission control for all gaming activities. From here, you can track performance, \r
          join tournaments, manage teams, and analyze your gameplay patterns.\r
        </Typography>\r
\r
        <Card padding="4" background="dark" color="white" marginBottom="6">\r
          <Typography variant="body2" fontFamily="monospace">\r
            # Quick Dashboard Navigation{'\\n'}\r
            • Games → View match history and statistics{'\\n'}\r
            • Tournaments → Join upcoming competitions{'\\n'}\r
            • Teams → Create or join gaming teams{'\\n'}\r
            • Analytics → Deep dive into performance metrics\r
          </Typography>\r
        </Card>\r
\r
        <Typography variant="h2" marginBottom="4">\r
          Your First Tournament\r
        </Typography>\r
\r
        <Typography variant="body1" marginBottom="6">\r
          Participating in tournaments is where RSPWN truly shines. Our matchmaking system ensures \r
          fair competition while providing opportunities for skill development and recognition.\r
        </Typography>\r
      </ArticleTemplate.Content>\r
\r
      <ArticleTemplate.Sidebar>\r
        <Card padding="4" marginBottom="6">\r
          <Typography variant="h6" marginBottom="4">Table of Contents</Typography>\r
          <Box display="flex" flexDirection="column" gap="2">\r
            <Typography variant="body2" color="innovation.primaryBlue">Setting Up Your Profile</Typography>\r
            <Typography variant="body2" color="muted">Understanding the Dashboard</Typography>\r
            <Typography variant="body2" color="muted">Your First Tournament</Typography>\r
            <Typography variant="body2" color="muted">Team Management</Typography>\r
            <Typography variant="body2" color="muted">Analytics & Insights</Typography>\r
          </Box>\r
        </Card>\r
\r
        <Card padding="4" marginBottom="6">\r
          <Typography variant="h6" marginBottom="4">Related Articles</Typography>\r
          <Box display="flex" flexDirection="column" gap="3">\r
            <Box>\r
              <Typography variant="body2" fontWeight="medium" marginBottom="1">\r
                Advanced Tournament Strategies\r
              </Typography>\r
              <Typography variant="caption" color="muted">Pro tips for competitive play</Typography>\r
            </Box>\r
            <Box>\r
              <Typography variant="body2" fontWeight="medium" marginBottom="1">\r
                Team Building Guide\r
              </Typography>\r
              <Typography variant="caption" color="muted">Create winning team dynamics</Typography>\r
            </Box>\r
            <Box>\r
              <Typography variant="body2" fontWeight="medium" marginBottom="1">\r
                Performance Analytics Deep Dive\r
              </Typography>\r
              <Typography variant="caption" color="muted">Understanding your stats</Typography>\r
            </Box>\r
          </Box>\r
        </Card>\r
\r
        <Card padding="4">\r
          <Typography variant="h6" marginBottom="3">About the Author</Typography>\r
          <Flex gap="3" alignItems="center" marginBottom="3">\r
            <Box width="48px" height="48px" background="innovation.primaryBlue" borderRadius="full" />\r
            <Box>\r
              <Typography variant="body2" fontWeight="medium">Alex Chen</Typography>\r
              <Typography variant="caption" color="muted">Senior Gaming Strategist</Typography>\r
            </Box>\r
          </Flex>\r
          <Typography variant="body2" color="muted">\r
            Professional gamer with 8+ years of competitive experience. \r
            Expert in tournament strategy and team management.\r
          </Typography>\r
        </Card>\r
      </ArticleTemplate.Sidebar>\r
\r
      <ArticleTemplate.Footer>\r
        <Flex justifyContent="between" alignItems="center">\r
          <Typography variant="body2" color="muted">\r
            Published on December 15, 2024 • Last updated December 20, 2024\r
          </Typography>\r
          <Flex gap="3">\r
            <Button variant="ghost" size="sm">Share</Button>\r
            <Button variant="ghost" size="sm">Bookmark</Button>\r
          </Flex>\r
        </Flex>\r
      </ArticleTemplate.Footer>\r
    </ArticleTemplate>
}`,...(M=(L=$.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var H,V,q;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <ProductGridTemplate>\r
      <ProductGridTemplate.Header>\r
        <Typography variant="h4">Gaming Gear</Typography>\r
        <Flex gap="3" alignItems="center">\r
          <Typography variant="body2" color="muted">Showing 24 of 156 products</Typography>\r
          <Button variant="outline" size="sm">Sort by Price</Button>\r
        </Flex>\r
      </ProductGridTemplate.Header>\r
\r
      <ProductGridTemplate.Filters>\r
        <Typography variant="h6" marginBottom="4">Filters</Typography>\r
        \r
        <Box marginBottom="6">\r
          <Typography variant="body2" fontWeight="medium" marginBottom="3">Category</Typography>\r
          <Box display="flex" flexDirection="column" gap="2">\r
            <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>\r
              <input type="checkbox" defaultChecked />\r
              <Typography variant="body2">Gaming Headsets</Typography>\r
            </label>\r
            <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>\r
              <input type="checkbox" />\r
              <Typography variant="body2">Mechanical Keyboards</Typography>\r
            </label>\r
            <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>\r
              <input type="checkbox" />\r
              <Typography variant="body2">Gaming Mice</Typography>\r
            </label>\r
            <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>\r
              <input type="checkbox" />\r
              <Typography variant="body2">Gaming Chairs</Typography>\r
            </label>\r
          </Box>\r
        </Box>\r
\r
        <Box marginBottom="6">\r
          <Typography variant="body2" fontWeight="medium" marginBottom="3">Price Range</Typography>\r
          <Box display="flex" gap="2" marginBottom="2">\r
            <Input placeholder="Min" size="sm" />\r
            <Input placeholder="Max" size="sm" />\r
          </Box>\r
          <Button variant="outline" size="sm" width="100%">Apply</Button>\r
        </Box>\r
\r
        <Box>\r
          <Typography variant="body2" fontWeight="medium" marginBottom="3">Brand</Typography>\r
          <Box display="flex" flexDirection="column" gap="2">\r
            <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>\r
              <input type="checkbox" />\r
              <Typography variant="body2">RSPWN Pro</Typography>\r
            </label>\r
            <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>\r
              <input type="checkbox" />\r
              <Typography variant="body2">GameForce</Typography>\r
            </label>\r
            <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>\r
              <input type="checkbox" />\r
              <Typography variant="body2">UltraGaming</Typography>\r
            </label>\r
          </Box>\r
        </Box>\r
      </ProductGridTemplate.Filters>\r
\r
      <ProductGridTemplate.Results>\r
        <Grid columns={{
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4
      }} gap="6">\r
          {Array.from({
          length: 8
        }, (_, i) => <Card key={i} padding="0" overflow="hidden">\r
              <Box height="200px" background="gray.subtle" marginBottom="4" />\r
              <Box padding="4">\r
                <Typography variant="body1" fontWeight="medium" marginBottom="2">\r
                  RSPWN Pro Gaming Headset {i + 1}\r
                </Typography>\r
                <Typography variant="body2" color="muted" marginBottom="3">\r
                  Premium wireless gaming headset with 7.1 surround sound\r
                </Typography>\r
                <Flex justifyContent="between" alignItems="center" marginBottom="3">\r
                  <Typography variant="h6" color="innovation.primaryBlue">$199.99</Typography>\r
                  <Box display="flex" alignItems="center" gap="1">\r
                    <Typography variant="body2">4.8</Typography>\r
                    <Typography variant="body2" color="semantic.warning">★</Typography>\r
                  </Box>\r
                </Flex>\r
                <Button width="100%" size="sm">Add to Cart</Button>\r
              </Box>\r
            </Card>)}\r
        </Grid>\r
      </ProductGridTemplate.Results>\r
\r
      <ProductGridTemplate.Footer>\r
        <Typography variant="body2" color="muted">\r
          © 2024 RSPWN Gaming Store. All rights reserved.\r
        </Typography>\r
      </ProductGridTemplate.Footer>\r
    </ProductGridTemplate>
}`,...(q=(V=k.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var E,O,U;P.parameters={...P.parameters,docs:{...(E=P.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <CheckoutTemplate>\r
      <CheckoutTemplate.Header>\r
        <Typography variant="h3" marginBottom="2">Checkout</Typography>\r
        <Typography variant="body1" color="muted">\r
          Complete your order in just a few simple steps\r
        </Typography>\r
      </CheckoutTemplate.Header>\r
\r
      <CheckoutTemplate.Form>\r
        <CheckoutTemplate.Step number={1} title="Shipping Information" active>\r
          <Grid columns={{
          xs: 1,
          md: 2
        }} gap="4">\r
            <Input label="First Name" placeholder="Enter first name" />\r
            <Input label="Last Name" placeholder="Enter last name" />\r
            <Input label="Email" placeholder="Enter email address" style={{
            gridColumn: '1 / -1'
          }} />\r
            <Input label="Address" placeholder="Street address" style={{
            gridColumn: '1 / -1'
          }} />\r
            <Input label="City" placeholder="Enter city" />\r
            <Input label="ZIP Code" placeholder="Enter ZIP" />\r
          </Grid>\r
        </CheckoutTemplate.Step>\r
\r
        <CheckoutTemplate.Step number={2} title="Payment Method">\r
          <Box marginBottom="4">\r
            <Typography variant="body2" fontWeight="medium" marginBottom="3">Select Payment Method</Typography>\r
            <Box display="flex" flexDirection="column" gap="3">\r
              <Card padding="3" border="2px solid" borderColor="innovation.primaryBlue">\r
                <Flex alignItems="center" gap="3">\r
                  <input type="radio" name="payment" defaultChecked />\r
                  <Typography variant="body2">Credit Card</Typography>\r
                </Flex>\r
              </Card>\r
              <Card padding="3" border="1px solid" borderColor="gray.border">\r
                <Flex alignItems="center" gap="3">\r
                  <input type="radio" name="payment" />\r
                  <Typography variant="body2">PayPal</Typography>\r
                </Flex>\r
              </Card>\r
              <Card padding="3" border="1px solid" borderColor="gray.border">\r
                <Flex alignItems="center" gap="3">\r
                  <input type="radio" name="payment" />\r
                  <Typography variant="body2">Apple Pay</Typography>\r
                </Flex>\r
              </Card>\r
            </Box>\r
          </Box>\r
\r
          <Grid columns={{
          xs: 1,
          md: 2
        }} gap="4">\r
            <Input label="Card Number" placeholder="1234 5678 9012 3456" style={{
            gridColumn: '1 / -1'
          }} />\r
            <Input label="Expiry Date" placeholder="MM/YY" />\r
            <Input label="CVV" placeholder="123" />\r
          </Grid>\r
        </CheckoutTemplate.Step>\r
\r
        <CheckoutTemplate.Step number={3} title="Review Order">\r
          <Typography variant="body1" color="muted">\r
            Please review your order details before completing the purchase.\r
          </Typography>\r
        </CheckoutTemplate.Step>\r
      </CheckoutTemplate.Form>\r
\r
      <CheckoutTemplate.Summary>\r
        <Typography variant="h6" marginBottom="4">Order Summary</Typography>\r
        \r
        <div className="summary-section">\r
          <Typography variant="body2" fontWeight="medium" marginBottom="3">Items (2)</Typography>\r
          <div className="summary-item">\r
            <Typography variant="body2">RSPWN Pro Gaming Headset</Typography>\r
            <Typography variant="body2">$199.99</Typography>\r
          </div>\r
          <div className="summary-item">\r
            <Typography variant="body2">Gaming Mouse Pad XL</Typography>\r
            <Typography variant="body2">$39.99</Typography>\r
          </div>\r
        </div>\r
\r
        <div className="summary-section">\r
          <div className="summary-item">\r
            <Typography variant="body2">Subtotal</Typography>\r
            <Typography variant="body2">$239.98</Typography>\r
          </div>\r
          <div className="summary-item">\r
            <Typography variant="body2">Shipping</Typography>\r
            <Typography variant="body2">$9.99</Typography>\r
          </div>\r
          <div className="summary-item">\r
            <Typography variant="body2">Tax</Typography>\r
            <Typography variant="body2">$19.99</Typography>\r
          </div>\r
          <div className="summary-item total">\r
            <Typography variant="body1" fontWeight="bold">Total</Typography>\r
            <Typography variant="body1" fontWeight="bold" color="innovation.primaryBlue">$269.96</Typography>\r
          </div>\r
        </div>\r
\r
        <Button width="100%" size="lg" marginTop="4">\r
          Complete Order\r
        </Button>\r
      </CheckoutTemplate.Summary>\r
\r
      <CheckoutTemplate.Footer>\r
        <Typography variant="body2" color="muted" textAlign="center">\r
          Secure checkout powered by RSPWN • All transactions are encrypted\r
        </Typography>\r
      </CheckoutTemplate.Footer>\r
    </CheckoutTemplate>
}`,...(U=(O=P.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const ce=["LandingPage","Dashboard","Article","ProductGrid","Checkout"];export{$ as Article,P as Checkout,w as Dashboard,C as LandingPage,k as ProductGrid,ce as __namedExportsOrder,pe as default};
