(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/logo.e3b25eb9.png"},18:function(e,t,a){e.exports=a(29)},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var c=a(0),l=a.n(c),n=a(15),r=a.n(n),m=a(7),s=a(1),o=(a(23),a(16)),i=a.n(o),u=function(){return l.a.createElement("nav",{className:"navbar navbar-light"},l.a.createElement("a",{className:"navbar-brand",href:"#"},l.a.createElement("img",{src:i.a,height:"70",width:"150"})),l.a.createElement("span",{className:"navbar-text"},"COVID-19 smell test"))},E=function(){return l.a.createElement("div",{className:"main-footer"},l.a.createElement("h5",{style:{fontStyle:"italic",fontSize:"medium"}},"Not a COVID-19 test. Seek local testing if you have symptoms. Not all people with COVID-19 experience a loss of smell, and lack of smell is not always indicative of COVID-19."))},p=a(9),f=function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(p.a)(r,2),o=s[0],i=s[1];return l.a.createElement(c.Fragment,null,l.a.createElement("h2",{className:"text-center mt-5"}," Enter your 4-letter code below to begin your smell test"),l.a.createElement("form",{className:"d-flex mt-5",onSubmit:function(){fetch("/test/".concat(a)).then((function(e){return e.json()})).then((function(e){console.log(e),i(e)})).then(console.log(o)).catch((function(e){return console.log("ERROR while getting test key: ",e)}))}},l.a.createElement("input",{type:"text",className:"form-control",value:a,onChange:function(e){return n(e.target.value)}}),l.a.createElement(m.b,{to:"/test"},l.a.createElement("button",{className:"btn btn-success"},"Enter"))),l.a.createElement("h4",{className:"text-center mt-5"},"New Loss of Smell is a common, early symptom of COVID-19"))},h=function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2);t[0],t[1];return l.a.createElement(c.Fragment,null,l.a.createElement("h3",{className:"text-center"}," Select the scent of each sticker."),l.a.createElement("form",{onSubmit:function(){}},l.a.createElement("h5",{className:"mt-4"},"Sticker 1"),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerA",id:"stickerA1",value:"option1"}),l.a.createElement("label",{className:"form-check-label"},"Cherry")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerA",id:"stickerA2",value:"option2"}),l.a.createElement("label",{className:"form-check-label"},"Chocolate")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerA",id:"stickerA3",value:"option3"}),l.a.createElement("label",{className:"form-check-label"},"Coconut")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerA",id:"stickerA4",value:"option4"}),l.a.createElement("label",{className:"form-check-label"},"Coffee")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerA",id:"stickerA5",value:"option5"}),l.a.createElement("label",{className:"form-check-label"},"Lemon")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerA",id:"stickerA6",value:"option6"}),l.a.createElement("label",{className:"form-check-label"},"Mint")),l.a.createElement("h5",{className:"mt-4"},"Sticker 2"),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerB",id:"stickerB1",value:"option1"}),l.a.createElement("label",{className:"form-check-label"},"Cherry")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerB",id:"stickerB2",value:"option2"}),l.a.createElement("label",{className:"form-check-label"},"Chocolate")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerB",id:"stickerB3",value:"option3"}),l.a.createElement("label",{className:"form-check-label"},"Coconut")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerB",id:"stickerB4",value:"option4"}),l.a.createElement("label",{className:"form-check-label"},"Coffee")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerB",id:"stickerB5",value:"option5"}),l.a.createElement("label",{className:"form-check-label"},"Lemon")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerB",id:"stickerB6",value:"option6"}),l.a.createElement("label",{className:"form-check-label"},"Mint")),l.a.createElement("br",null),l.a.createElement(m.b,{to:"/results"},l.a.createElement("button",{className:"btn btn-success"},"Submit"))))},k=function(){return l.a.createElement(c.Fragment,null,l.a.createElement("h1",null," CORRECT"))};var b=function(){return l.a.createElement("div",{className:"page-container container"},l.a.createElement("div",{className:"content-wrap"},l.a.createElement(m.a,null,l.a.createElement(u,null),l.a.createElement("br",null),l.a.createElement(s.a,{path:"/",exact:!0,component:f}),l.a.createElement(s.a,{path:"/test",component:h}),l.a.createElement(s.a,{path:"/results",component:k}),l.a.createElement("br",null))),l.a.createElement(E,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c229569f.chunk.js.map