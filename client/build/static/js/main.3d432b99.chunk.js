(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,a,t){e.exports=t(28)},22:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var c=t(0),l=t.n(c),n=t(15),r=t.n(n),m=t(7),s=t(1),o=(t(22),function(){return l.a.createElement("nav",{className:"navbar navbar-light",style:{backgroundColor:"#92e7e6ff"}},l.a.createElement("a",{className:"navbar-brand",href:"#"},"Olfa Screen"),l.a.createElement("span",{className:"navbar-text"},"COVID-19 smell test"))}),i=t(9),u=function(){var e=Object(c.useState)(""),a=Object(i.a)(e,2),t=a[0],n=a[1],r=Object(c.useState)(""),s=Object(i.a)(r,2),o=s[0],u=s[1];return l.a.createElement(c.Fragment,null,l.a.createElement("h1",{className:"text-center mt-5"}," Enter ScreenID"),l.a.createElement("form",{className:"d-flex mt-5",onSubmit:function(){fetch("/test/".concat(t)).then((function(e){return e.json()})).then((function(e){console.log(e),u(e)})).then(console.log(o)).catch((function(e){return console.log("ERROR while getting test key: ",e)}))}},l.a.createElement("input",{type:"text",className:"form-control",value:t,onChange:function(e){return n(e.target.value)}}),l.a.createElement(m.b,{to:"/test"},l.a.createElement("button",{className:"btn btn-success"},"Enter"))))},k=function(){var e=Object(c.useState)(""),a=Object(i.a)(e,2);a[0],a[1];return l.a.createElement(c.Fragment,null,l.a.createElement("h3",{className:"text-center mt-5"}," Select the scent of each sticker."),l.a.createElement("h5",{className:"mt-4"},"Sticker A"),l.a.createElement("form",{onSubmit:function(){}},l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerA",id:"stickerA1",value:"option1"}),l.a.createElement("label",{className:"form-check-label"},"Cherry")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerA",id:"stickerA2",value:"option2"}),l.a.createElement("label",{className:"form-check-label"},"Chocolate")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerA",id:"stickerA3",value:"option3"}),l.a.createElement("label",{className:"form-check-label"},"Coconut")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerA",id:"stickerA4",value:"option4"}),l.a.createElement("label",{className:"form-check-label"},"Coffee")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerA",id:"stickerA5",value:"option5"}),l.a.createElement("label",{className:"form-check-label"},"Lemon")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerA",id:"stickerA6",value:"option6"}),l.a.createElement("label",{className:"form-check-label"},"Mint")),l.a.createElement("h5",{className:"mt-4"},"Sticker B"),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerB",id:"stickerB1",value:"option1"}),l.a.createElement("label",{className:"form-check-label"},"Cherry")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerB",id:"stickerB2",value:"option2"}),l.a.createElement("label",{className:"form-check-label"},"Chocolate")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerB",id:"stickerB3",value:"option3"}),l.a.createElement("label",{className:"form-check-label"},"Coconut")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerB",id:"stickerB4",value:"option4"}),l.a.createElement("label",{className:"form-check-label"},"Coffee")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerB",id:"stickerB5",value:"option5"}),l.a.createElement("label",{className:"form-check-label"},"Lemon")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerB",id:"stickerB6",value:"option6"}),l.a.createElement("label",{className:"form-check-label"},"Mint")),l.a.createElement("h5",{className:"mt-4"},"Sticker C"),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerC",id:"stickerC1",value:"option1"}),l.a.createElement("label",{className:"form-check-label"},"Cherry")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerC",id:"stickerC2",value:"option2"}),l.a.createElement("label",{className:"form-check-label"},"Chocolate")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerC",id:"stickerC3",value:"option3"}),l.a.createElement("label",{className:"form-check-label"},"Coconut")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerC",id:"stickerC4",value:"option4"}),l.a.createElement("label",{className:"form-check-label"},"Coffee")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerC",id:"stickerC5",value:"option5"}),l.a.createElement("label",{className:"form-check-label"},"Lemon")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"stickerC",id:"stickerC6",value:"option6"}),l.a.createElement("label",{className:"form-check-label"},"Mint")),l.a.createElement(m.b,{to:"/results"},l.a.createElement("button",{className:"btn btn-success"},"Submit"))))},p=function(){return l.a.createElement(c.Fragment,null,l.a.createElement("h1",null," You got _/3 scents correct."),l.a.createElement("br",null),l.a.createElement("h5",null,"Interpret results of screening test is at your own risk as many carriers of COVID-19 are asymptomatic or may not observe a change in smell. Not been approved by the FDA or CDC."))};var E=function(){return l.a.createElement(m.a,null,l.a.createElement("div",{className:"container"},l.a.createElement(o,null),l.a.createElement("br",null),l.a.createElement(s.a,{path:"/",exact:!0,component:u}),l.a.createElement(s.a,{path:"/test",component:k}),l.a.createElement(s.a,{path:"/results",component:p})))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3d432b99.chunk.js.map