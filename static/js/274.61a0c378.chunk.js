"use strict";(self.webpackChunktechgen_front=self.webpackChunktechgen_front||[]).push([[274],{2274:function(e,n,t){t.r(n),t.d(n,{default:function(){return X}});var r=t(9439),i=t(4942),o=t(3366),a=t(7462),s=t(2791),c=t(8182),d=t(6752),l=t(4419),p=t(6934),u=t(1402),m=t(1314),h=t(4999),x=t(3967),f=t(2071),v=t(5878),g=t(1217);function Z(e){return(0,g.Z)("MuiCollapse",e)}(0,v.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var y=t(184),w=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],b=(0,p.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.orientation],"entered"===t.state&&n.entered,"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&n.hidden]}})((function(e){var n=e.theme,t=e.ownerState;return(0,a.Z)({height:0,overflow:"hidden",transition:n.transitions.create("height")},"horizontal"===t.orientation&&{height:"auto",width:0,transition:n.transitions.create("width")},"entered"===t.state&&(0,a.Z)({height:"auto",overflow:"visible"},"horizontal"===t.orientation&&{width:"auto"}),"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&{visibility:"hidden"})})),j=(0,p.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:function(e,n){return n.wrapper}})((function(e){var n=e.ownerState;return(0,a.Z)({display:"flex",width:"100%"},"horizontal"===n.orientation&&{width:"auto",height:"100%"})})),A=(0,p.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:function(e,n){return n.wrapperInner}})((function(e){var n=e.ownerState;return(0,a.Z)({width:"100%"},"horizontal"===n.orientation&&{width:"auto",height:"100%"})})),k=s.forwardRef((function(e,n){var t=(0,u.Z)({props:e,name:"MuiCollapse"}),r=t.addEndListener,p=t.children,v=t.className,g=t.collapsedSize,k=void 0===g?"0px":g,R=t.component,E=t.easing,S=t.in,C=t.onEnter,B=t.onEntered,M=t.onEntering,G=t.onExit,I=t.onExited,D=t.onExiting,W=t.orientation,H=void 0===W?"vertical":W,J=t.style,L=t.timeout,P=void 0===L?m.x9.standard:L,T=t.TransitionComponent,Y=void 0===T?d.ZP:T,N=(0,o.Z)(t,w),z=(0,a.Z)({},t,{orientation:H,collapsedSize:k}),O=function(e){var n=e.orientation,t=e.classes,r={root:["root","".concat(n)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(n)],wrapperInner:["wrapperInner","".concat(n)]};return(0,l.Z)(r,Z,t)}(z),U=(0,x.Z)(),V=s.useRef(),F=s.useRef(null),Q=s.useRef(),X="number"===typeof k?"".concat(k,"px"):k,q="horizontal"===H,K=q?"width":"height";s.useEffect((function(){return function(){clearTimeout(V.current)}}),[]);var $=s.useRef(null),_=(0,f.Z)(n,$),ee=function(e){return function(n){if(e){var t=$.current;void 0===n?e(t):e(t,n)}}},ne=function(){return F.current?F.current[q?"clientWidth":"clientHeight"]:0},te=ee((function(e,n){F.current&&q&&(F.current.style.position="absolute"),e.style[K]=X,C&&C(e,n)})),re=ee((function(e,n){var t=ne();F.current&&q&&(F.current.style.position="");var r=(0,h.C)({style:J,timeout:P,easing:E},{mode:"enter"}),i=r.duration,o=r.easing;if("auto"===P){var a=U.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(a,"ms"),Q.current=a}else e.style.transitionDuration="string"===typeof i?i:"".concat(i,"ms");e.style[K]="".concat(t,"px"),e.style.transitionTimingFunction=o,M&&M(e,n)})),ie=ee((function(e,n){e.style[K]="auto",B&&B(e,n)})),oe=ee((function(e){e.style[K]="".concat(ne(),"px"),G&&G(e)})),ae=ee(I),se=ee((function(e){var n=ne(),t=(0,h.C)({style:J,timeout:P,easing:E},{mode:"exit"}),r=t.duration,i=t.easing;if("auto"===P){var o=U.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(o,"ms"),Q.current=o}else e.style.transitionDuration="string"===typeof r?r:"".concat(r,"ms");e.style[K]=X,e.style.transitionTimingFunction=i,D&&D(e)}));return(0,y.jsx)(Y,(0,a.Z)({in:S,onEnter:te,onEntered:ie,onEntering:re,onExit:oe,onExited:ae,onExiting:se,addEndListener:function(e){"auto"===P&&(V.current=setTimeout(e,Q.current||0)),r&&r($.current,e)},nodeRef:$,timeout:"auto"===P?null:P},N,{children:function(e,n){return(0,y.jsx)(b,(0,a.Z)({as:R,className:(0,c.Z)(O.root,v,{entered:O.entered,exited:!S&&"0px"===X&&O.hidden}[e]),style:(0,a.Z)((0,i.Z)({},q?"minWidth":"minHeight",X),J),ownerState:(0,a.Z)({},z,{state:e}),ref:_},n,{children:(0,y.jsx)(j,{ownerState:(0,a.Z)({},z,{state:e}),className:O.wrapper,ref:F,children:(0,y.jsx)(A,{ownerState:(0,a.Z)({},z,{state:e}),className:O.wrapperInner,children:p})})}))}}))}));k.muiSupportAuto=!0;var R=k,E=t(1184),S=t(5682),C=t(8519),B=t(2466),M=["component","direction","spacing","divider","children"];function G(e,n){var t=s.Children.toArray(e).filter(Boolean);return t.reduce((function(e,r,i){return e.push(r),i<t.length-1&&e.push(s.cloneElement(n,{key:"separator-".concat(i)})),e}),[])}var I=(0,p.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return[n.root]}})((function(e){var n=e.ownerState,t=e.theme,r=(0,a.Z)({display:"flex",flexDirection:"column"},(0,E.k9)({theme:t},(0,E.P$)({values:n.direction,breakpoints:t.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var o=(0,S.hB)(t),s=Object.keys(t.breakpoints.values).reduce((function(e,t){return("object"===typeof n.spacing&&null!=n.spacing[t]||"object"===typeof n.direction&&null!=n.direction[t])&&(e[t]=!0),e}),{}),c=(0,E.P$)({values:n.direction,base:s}),d=(0,E.P$)({values:n.spacing,base:s});"object"===typeof c&&Object.keys(c).forEach((function(e,n,t){if(!c[e]){var r=n>0?c[t[n-1]]:"column";c[e]=r}}));r=(0,B.Z)(r,(0,E.k9)({theme:t},d,(function(e,t){return{"& > :not(style) + :not(style)":(0,i.Z)({margin:0},"margin".concat((r=t?c[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),(0,S.NA)(o,e))};var r})))}return r=(0,E.dt)(t.breakpoints,r)})),D=s.forwardRef((function(e,n){var t=(0,u.Z)({props:e,name:"MuiStack"}),r=(0,C.Z)(t),i=r.component,s=void 0===i?"div":i,c=r.direction,d=void 0===c?"column":c,l=r.spacing,p=void 0===l?0:l,m=r.divider,h=r.children,x=(0,o.Z)(r,M),f={direction:d,spacing:p};return(0,y.jsx)(I,(0,a.Z)({as:s,ownerState:f,ref:n},x,{children:m?G(h,m):h}))})),W=D,H=t(890),J=t(5527),L=t(4554),P=t(1614),T=t(6151),Y=t(6527),N=[{id:"1",date:"23 january 2023",name:"Senior Backend Drupal Developer",description:"We're looking for a Senior Backend Drupal Developer!",company:{logo:Y,name:"Oksana Holovatiuk, recruiter in ANVI",type:"Remote work",language:"Intermediate",experience:"5 years of experience"}},{id:"2",date:"09 december 2022",name:"Unity Developer",description:"\u201cCodeSmart\u201d Software Engineering Artel is looking for a senior Unity developer with experience in AR apps development. Join our team and help to build the next generation of AR games & entertainment products. As a Unity developer, you will be a key member of our newly created Mobile Apps development team and will have a chance to build your own team from the beginning!",company:{logo:Y,name:"Michael Fridshtand, CEO in Codesmart.",type:"Remote work",language:"Intermediate",experience:"3 years of experience"}},{id:"3",date:"23 january 2023",name:"Senior Backend Drupal Developer",description:"We're looking for a Senior Backend Drupal Developer!",company:{logo:Y,name:"Oksana Holovatiuk, recruiter in ANVI",type:"Remote work",language:"Intermediate",experience:"5 years of experience"}},{id:"4",date:"09 december 2022",name:"Unity Developer",description:"\u201cCodeSmart\u201d Software Engineering Artel is looking for a senior Unity developer with experience in AR apps development. Join our team and help to build the next generation of AR games & entertainment products. As a Unity developer, you will be a key member of our newly created Mobile Apps development team and will have a chance to build your own team from the beginning!",company:{logo:Y,name:"Michael Fridshtand, CEO in Codesmart.",type:"Remote work",language:"Intermediate",experience:"3 years of experience"}}],z=(0,p.ZP)(H.Z)((function(e){var n=e.theme;return(0,i.Z)({opacity:"0.6"},n.breakpoints.down("md"),{fontSize:"14px"})})),O=(0,p.ZP)(z)((function(e){var n=e.theme;return(0,i.Z)({position:"relative"},n.breakpoints.up("md"),{position:"absolute",right:24,top:24})})),U=(0,p.ZP)(J.Z)({borderRadius:"16px",padding:"24px",position:"relative"}),V=(0,p.ZP)("img")({width:"60px",height:"60px",borderRadius:"50%",objectFit:"cover",objectPosition:"center"}),F=function(e){var n=e.data;return(0,y.jsxs)(U,{sx:{padding:"24px"},children:[(0,y.jsxs)(L.Z,{children:[(0,y.jsx)(O,{children:n.date}),(0,y.jsx)(H.Z,{variant:"h3",fontWeight:"600",children:n.name}),(0,y.jsx)(z,{children:n.description})]}),(0,y.jsxs)(L.Z,{display:"flex",alignItems:"center",gap:"24px",marginTop:"32px",children:[(0,y.jsx)(V,{src:n.company.logo,alt:n.company.name}),(0,y.jsxs)(L.Z,{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"20px",children:[(0,y.jsx)(H.Z,{fontWeight:"400",children:n.company.name}),(0,y.jsxs)(L.Z,{display:"flex",gap:"5px 40px",flexWrap:"wrap",children:[(0,y.jsxs)(z,{children:["i ",n.company.type]}),(0,y.jsxs)(z,{children:["i ",n.company.language]}),(0,y.jsxs)(z,{children:["i ",n.company.experience]})]})]})]})]})},Q=(0,p.ZP)(L.Z)((function(e){var n=e.theme;return(0,i.Z)({marginBottom:"60px"},n.breakpoints.up("md"),{marginBottom:"80px"})})),X=function(){var e=(0,s.useState)("new"),n=(0,r.Z)(e,2),t=n[0],i=n[1];return(0,y.jsxs)(P.Z,{children:[(0,y.jsxs)(Q,{children:[(0,y.jsx)(H.Z,{variant:"h2",children:"Vacancies"}),(0,y.jsxs)(L.Z,{display:"flex",alignItems:"center",justifyContent:"space-between",sx:{marginTop:"40px"},children:[(0,y.jsxs)(L.Z,{display:"flex",gap:"20px",children:[(0,y.jsx)(T.Z,{onClick:function(){return i("filter")},color:"filter"!==t?"transparent":"",children:"Filter"}),(0,y.jsx)(T.Z,{onClick:function(){return i("new")},color:"new"!==t?"transparent":"",children:"Newest"})]}),(0,y.jsx)("span",{children:"input"})]})]}),(0,y.jsx)(L.Z,{sx:{display:"flex"},children:(0,y.jsxs)(R,{in:"filter"===t,timeout:1e3,children:[(0,y.jsxs)(Q,{children:[(0,y.jsx)(H.Z,{variant:"h2",children:"Employment"}),(0,y.jsxs)(L.Z,{display:"flex",alignItems:"center",gap:"12px 20px",flexWrap:"wrap",children:[(0,y.jsx)(T.Z,{color:"transparent",children:"Full time"}),(0,y.jsx)(T.Z,{color:"transparent",children:"Part-time"}),(0,y.jsx)(T.Z,{color:"transparent",children:"Remote work"}),(0,y.jsx)(T.Z,{color:"transparent",children:"Freelance"}),(0,y.jsx)(T.Z,{color:"transparent",children:"Moving"})]})]}),(0,y.jsxs)(Q,{children:[(0,y.jsx)(H.Z,{variant:"h2",children:"Direction"}),(0,y.jsxs)(L.Z,{display:"flex",alignItems:"center",gap:"12px 20px",flexWrap:"wrap",children:[(0,y.jsx)(T.Z,{color:"transparent",children:".NET"}),(0,y.jsx)(T.Z,{color:"transparent",children:"Android"}),(0,y.jsx)(T.Z,{color:"transparent",children:"C / C++ / Embedded"}),(0,y.jsx)(T.Z,{color:"transparent",children:"Front-End / JS"}),(0,y.jsx)(T.Z,{color:"transparent",children:"Goland"}),(0,y.jsx)(T.Z,{color:"transparent",children:"iOS"}),(0,y.jsx)(T.Z,{color:"transparent",children:"Java"}),(0,y.jsx)(T.Z,{color:"transparent",children:"Node.js"}),(0,y.jsx)(T.Z,{color:"transparent",children:"PHP"}),(0,y.jsx)(T.Z,{color:"transparent",children:"Python"}),(0,y.jsx)(T.Z,{color:"transparent",children:"..."})]})]})]})}),(0,y.jsx)(Q,{children:(0,y.jsx)(W,{spacing:"24px",children:N.map((function(e){return(0,y.jsx)(F,{data:e},e.id)}))})})]})}},1614:function(e,n,t){t.d(n,{Z:function(){return A}});var r=t(4942),i=t(3366),o=t(7462),a=t(2791),s=t(8182),c=t(7312),d=t(1217),l=t(4419),p=t(6083),u=(0,t(4046).ZP)(),m=t(5080),h=t(184),x=["className","component","disableGutters","fixed","maxWidth","classes"],f=(0,m.Z)(),v=u("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["maxWidth".concat((0,c.Z)(String(t.maxWidth)))],t.fixed&&n.fixed,t.disableGutters&&n.disableGutters]}}),g=function(e){return(0,p.Z)({props:e,name:"MuiContainer",defaultTheme:f})},Z=function(e,n){var t=e.classes,r=e.fixed,i=e.disableGutters,o=e.maxWidth,a={root:["root",o&&"maxWidth".concat((0,c.Z)(String(o))),r&&"fixed",i&&"disableGutters"]};return(0,l.Z)(a,(function(e){return(0,d.Z)(n,e)}),t)};var y=t(4036),w=t(6934),b=t(1402),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.createStyledComponent,t=void 0===n?v:n,c=e.useThemeProps,d=void 0===c?g:c,l=e.componentName,p=void 0===l?"MuiContainer":l,u=t((function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&(0,r.Z)({paddingLeft:n.spacing(2),paddingRight:n.spacing(2)},n.breakpoints.up("sm"),{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}))}),(function(e){var n=e.theme;return e.ownerState.fixed&&Object.keys(n.breakpoints.values).reduce((function(e,t){var r=t,i=n.breakpoints.values[r];return 0!==i&&(e[n.breakpoints.up(r)]={maxWidth:"".concat(i).concat(n.breakpoints.unit)}),e}),{})}),(function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({},"xs"===t.maxWidth&&(0,r.Z)({},n.breakpoints.up("xs"),{maxWidth:Math.max(n.breakpoints.values.xs,444)}),t.maxWidth&&"xs"!==t.maxWidth&&(0,r.Z)({},n.breakpoints.up(t.maxWidth),{maxWidth:"".concat(n.breakpoints.values[t.maxWidth]).concat(n.breakpoints.unit)}))})),m=a.forwardRef((function(e,n){var t=d(e),r=t.className,a=t.component,c=void 0===a?"div":a,l=t.disableGutters,m=void 0!==l&&l,f=t.fixed,v=void 0!==f&&f,g=t.maxWidth,y=void 0===g?"lg":g,w=(0,i.Z)(t,x),b=(0,o.Z)({},t,{component:c,disableGutters:m,fixed:v,maxWidth:y}),j=Z(b,p);return(0,h.jsx)(u,(0,o.Z)({as:c,ownerState:b,className:(0,s.Z)(j.root,r),ref:n},w))}));return m}({createStyledComponent:(0,w.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["maxWidth".concat((0,y.Z)(String(t.maxWidth)))],t.fixed&&n.fixed,t.disableGutters&&n.disableGutters]}}),useThemeProps:function(e){return(0,b.Z)({props:e,name:"MuiContainer"})}}),A=j},6527:function(e){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=274.61a0c378.chunk.js.map