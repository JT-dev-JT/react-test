(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a(7),c=a.n(r),i=a(9),s=a(2),h=a(3),j=a(5),o=a(4),b=a(0),u=function(){return Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Job"})]})})},l=function(t){var e=t.characterData.map((function(e,a){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.job}),Object(b.jsx)("td",{children:Object(b.jsx)("button",{onClick:function(){return t.removeCharacter(a)},children:"Delete"})})]},a)}));return Object(b.jsx)("tbody",{children:e})},d=function(t){var e=t.characterData,a=t.removeCharacter;return Object(b.jsxs)("table",{children:[Object(b.jsx)(u,{}),Object(b.jsx)(l,{characterData:e,removeCharacter:a})]})},m=a(8),O=function(t){Object(j.a)(a,t);var e=Object(o.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).handleChange=function(t){var e=t.target,a=e.name,r=e.value;n.setState(Object(m.a)({},a,r))},n.onFormSubmit=function(t){t.preventDefault(),n.props.handleSubmit(n.state),n.setState(n.initialState)},n.initialState={name:"",job:""},n.state=n.initialState,n}return Object(h.a)(a,[{key:"render",value:function(){var t=this.state,e=t.name,a=t.job;return Object(b.jsxs)("form",{onSubmit:this.onFormSubmit,children:[Object(b.jsx)("label",{for:"name",children:"Name"}),Object(b.jsx)("input",{type:"text",name:"name",id:"name",value:e,onChange:this.handleChange}),Object(b.jsx)("label",{for:"job",children:"Job"}),Object(b.jsx)("input",{type:"text",name:"job",id:"job",value:a,onChange:this.handleChange}),Object(b.jsx)("button",{type:"submit",children:"Submit"})]})}}]),a}(n.Component),v=function(t){Object(j.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={characters:[]},t.removeCharacter=function(e){var a=t.state.characters;t.setState({characters:a.filter((function(t,a){return a!==e}))})},t.handleSubmit=function(e){t.setState({characters:[].concat(Object(i.a)(t.state.characters),[e])})},t}return Object(h.a)(a,[{key:"render",value:function(){var t=this.state.characters;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(d,{characterData:t,removeCharacter:this.removeCharacter}),Object(b.jsx)(O,{handleSubmit:this.handleSubmit})]})}}]),a}(n.Component),x=v;a(15);c.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e17b2090.chunk.js.map