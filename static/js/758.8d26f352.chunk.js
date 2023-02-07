"use strict";(self.webpackChunktechgen_front=self.webpackChunktechgen_front||[]).push([[758],{2884:function(e,r,n){n.d(r,{Z:function(){return p}});var t=n(890),a=n(5692),o=n(6934),i=n(2169),s=(0,o.ZP)(i.Z)({width:20,height:20,position:"absolute",transition:"transform .2s linear",top:20,right:20,cursor:"pointer","&:hover":{transform:"rotate(90deg)"}}),c=n(7621),u=(0,o.ZP)(c.Z)({maxWidth:"580px",borderRadius:"16px",position:"relative",padding:"40px 75px 40px 75px"}),d=n(184),l=function(e){var r=e.children,n=e.showCloseBtn,t=void 0===n||n;return(0,d.jsxs)(u,{children:[t&&(0,d.jsx)(s,{component:"svg",alt:"close",image:a}),r]})},p=function(e){var r=e.children,n=e.title,a=e.subtitle;return(0,d.jsxs)(l,{children:[(0,d.jsx)(t.Z,{variant:"subtitle",children:a}),(0,d.jsx)(t.Z,{variant:"h2",children:n}),r]})}},1970:function(e,r,n){var t=n(6934),a=n(6151),o=(0,t.ZP)(a.Z)({display:"block",margin:"40px 0",width:"200px"});r.Z=o},6772:function(e,r,n){var t=n(6934),a=n(7040),o=(0,t.ZP)(a.Z)((function(e){var r=e.theme;return{width:"100%","& fieldset":{display:"none"},marginBottom:"24px","&:first-of-type":{marginTop:"40px"},input:{border:"1px solid ".concat(r.palette.colorList.sanMarino),borderRadius:"16px"}}}));r.Z=o},6819:function(e,r,n){var t=n(4702),a=n(4055),o=(0,t.ZF)({apiKey:"AIzaSyCYZD8WvbN829_TeYeMvw_lAlwS2D3eddc",authDomain:"gentech-977dc.firebaseapp.com",projectId:"gentech-977dc",storageBucket:"gentech-977dc.appspot.com",messagingSenderId:"1006109677763",appId:"1:1006109677763:web:048c53c41bb48deafcea76",measurementId:"G-JEYPZYEGLE"});r.Z=(0,a.v0)(o)},6758:function(e,r,n){n.r(r),n.d(r,{default:function(){return E}});var t=n(890),a=n(2884),o=n(5861),i=n(4687),s=n.n(i),c=n(2791),u=n(4055),d=n(1134),l=n(1287);function p(e){this.message=e}p.prototype=new Error,p.prototype.name="InvalidCharacterError";var h="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var r=String(e).replace(/=+$/,"");if(r.length%4==1)throw new p("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,t,a=0,o=0,i="";t=r.charAt(o++);~t&&(n=a%4?64*n+t:t,a++%4)?i+=String.fromCharCode(255&n>>(-2*a&6)):0)t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(t);return i};function f(e){var r=e.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(h(e).replace(/(.)/g,(function(e,r){var n=r.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n})))}(r)}catch(e){return h(r)}}function A(e){this.message=e}A.prototype=new Error,A.prototype.name="InvalidTokenError";var m=function(e,r){if("string"!=typeof e)throw new A("Invalid token specified");var n=!0===(r=r||{}).header?0:1;try{return JSON.parse(f(e.split(".")[n]))}catch(e){throw new A("Invalid token specified: "+e.message)}},g=n(1970),v=n(6772),w=n(6819),b=n(9434),Z=n(9825),x=n(184),C=function(){var e=(0,b.I0)(),r=(0,d.cI)({mode:"onChange"}),n=r.control,t=r.handleSubmit,a=r.reset,i=r.formState,p=r.formState.isSubmitSuccessful,h=function(){var r=(0,o.Z)(s().mark((function r(n){var t,a,o,i;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.email,a=n.password,r.next=3,(0,u.e5)(w.Z,t,a);case 3:o=r.sent,i=o.user.accessToken,e((0,Z.zB)(m(i)));case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return(0,c.useEffect)((function(){i.isSubmitSuccessful&&a({email:"",password:""})}),[i,p,a]),(0,x.jsxs)("form",{onSubmit:t(h),children:[(0,x.jsx)(d.Qr,{name:"email",control:n,rules:{pattern:{value:l.u,message:"please enter a valid email"}},render:function(e){var r,n=e.field,t=n.onChange,a=n.value,o=e.formState.errors;return(0,x.jsx)(v.Z,{placeholder:"email",value:a||"",onChange:t,required:!0,helperText:null===(r=o.email)||void 0===r?void 0:r.message})}}),(0,x.jsx)(d.Qr,{name:"password",control:n,rules:{minLength:{value:6,message:"min length is 6 charts"}},render:function(e){var r,n=e.field,t=n.onChange,a=n.value,o=e.formState.errors;return(0,x.jsx)(v.Z,{placeholder:"password",type:"password",value:a||"",required:!0,onChange:t,helperText:null===(r=o.password)||void 0===r?void 0:r.message})}}),(0,x.jsx)(g.Z,{type:"submit",children:"Sing in"})]})},E=function(){return(0,x.jsx)("div",{children:(0,x.jsxs)(a.Z,{title:"Sign up your new account",subtitle:"You are welcome! \ud83d\udc4b",children:[(0,x.jsx)(C,{}),(0,x.jsx)(t.Z,{sx:{textAlign:"center"},children:"Authorization is available only to admins"})]})})}},1287:function(e,r,n){n.d(r,{u:function(){return t}});var t=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i},5692:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI7SURBVHgBpZTPchJBEMa7Z71ZvIaEP0lJ8hwCCwmWVsnGWFbljgf3koU5c8eDpWErlpaELOHIRR7AP6QEAiefJDt+swkEAyxJ7MtUzc7+pr/+uofTT90/xKre/mKV6T8CnCqWvBBETfbZyRaOqnTPyOy4FVZUEkrVjdHA60RjWYOJ3sY3cnze97p3gZkFt0akSoJYthpW2dCb42HrW3w9HyFf2bE7QPPIDEsAO2kUHb1nTD6eD046yYQpSJGTiJuR4dDrhMG2C24VqmwiXzYbljPZN2YPAdLVUGayN5I57g8WZ1oAjHwq4Zw8noHNAadQZEiKbZ3p4EamO/lDbYBNgmXjSmYoUIeGJGMZoSWtJ0zuD1tdvf88fxQYwKjZ1+N5mA6mkHi2DWlKS+PKhbpgQeIA2/JzczFsJTCAQqJQ4kCBDLD8FALT8WAVELCHqNnV7UqtOm+EfXxhwgBiGzKkUvwd/Wan1szI2Wh5Sy0FWhm3BokwwJeuZzm/AUnBKKSoodwbXRp1K+BL83ICiH1Z93anNTsD5PFaLoKL7M21LP9aAJ0D7mUDZ20WvjycgV1DkWkUE0XspGJmpHdD/j/AvXQwTiUFmR9bu0vd7I29LmTrl8reiub45/h6oqbAV0/cCjrZhpXyw6kV2hoT6FYUE4V/NrEC2pkCX6e1AWhg5cv37dWwSWhI6pEp8PYFmf7AJbyfrpcVCUewkrXT4q1hs7GPUsF9PZIVlIEsvLT3hul41y6+MQDDU2b9Bd++9GrFNEb+AAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=758.8d26f352.chunk.js.map