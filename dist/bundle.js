(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".project {\n    border-color: black;\n    border: solid;\n}\nbody {\n\n}",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var a=0;a<e.length;a++){var d=[].concat(e[a]);r&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],d=t.base?a[0]+t.base:a[0],l=n[d]||0,s="".concat(d," ").concat(l);n[d]=l+1;var u=c(s),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:s,updater:h(p,t),references:1}),r.push(s)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var c=o(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var l,s=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var i=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function h(e,t){var n,r,o;if(t.singleton){var i=m++;n=f||(f=d(t)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=d(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var d=a(e,t),l=0;l<n.length;l++){var s=c(n[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=d}}}}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{let e={Tasks:[]};function t(t){t.preventDefault();const n=function(){const n=["description","date","priority","status","project","index"];let r=function(t){let n=t.target.parentNode.childNodes;const r=n[0],o=n[1],i=n[2],c=n[3];let a=r.childNodes[1].value,d=o.childNodes[1].value,l=function(){let e;return i.childNodes.forEach((t=>{!0===t.checked&&(e=t.id)})),e}(),s=function(){let e;return c.childNodes.forEach((t=>{!0===t.checked&&(e=t.id)})),e}(),u=e[t.target.parentNode.parentNode.id].length;return[a,d,l,s,t.target.parentNode.parentNode.id,u]}(t),o={description:void 0,date:void 0,priority:void 0,status:void 0,project:void 0,index:void 0};for(let e=0;e<6;e++)o[n[e]]=r[e];return o}(),r=t.target.parentNode.parentNode.id;e[r].push(n)}function r(){e[prompt("Name of new project?")]=[]}function o(t){const n=t.target.parentNode.id.split("-");e[n[0]][n[1]].status="completed",console.log(e[n[0]])}const i=document.querySelector("#content");document.createElement("div").id="header";const c=["description","date","priority","status"];function a(e,t=null,n=null,r=null){const o=document.createElement("div");return o.id=t,o.className=n,o.innerText=r,e.appendChild(o),o}function d(){const e=document.createElement("button");return e.type="button",e.className="marked-completed",e.innerText="X",e.addEventListener("click",o),e.addEventListener("click",u),e}function l(t,n){const r=e[t];for(let e=0;e<r.length;e++){const t=a(n,`${r[e].project}-${r[e].index}`,"task");for(let n=0;n<3;n++)a(t,`${r[e].title}-${c[n]}`,c[n],r[e][c[n]]);t.appendChild(d())}}function s(t){const n=t.target.parentNode.parentNode,r=e[n.id],o=r.length-1,i=a(n,`${n.id}-${o}`,"task");for(let e=0;e<3;e++)a(i,`${r[o].title}-${c[e]}`,c[e],r[o][c[e]]);i.appendChild(d())}function u(e){const t=e.target.parentNode;e.target.parentNode.parentNode.removeChild(t)}function p(e){"submit"===e.target.className?e.target.parentNode.style.display="none":"addTaskBtn"===e.target.className&&(e.target.parentNode.childNodes[2].style.display="block")}function f(e){function t(e){let t=document.createElement("label");t.innerText=e.id.replace("-"," ");let n="";return t.innerText.split(" ").forEach((e=>n+=e[0].toUpperCase()+e.substring(1)+" ")),n=n.trim(),t.innerText=n,t.className="label",t.htmlFor=e.id,t}const n=document.createElement("form");n.className="task-form",[function(){const e=document.createElement("div"),n=document.createElement("input");n.type="text",n.id="description";const r=t(n);return e.appendChild(r),e.appendChild(n),e}(),function(){const e=document.createElement("div"),n=document.createElement("input");n.type="date",n.value=function(){const e=new Date;return String(e.getFullYear()).padStart(4,0)+"-"+String(e.getMonth()+1).padStart(2,0)+"-"+String(e.getDate()).padStart(2,0)}(),n.id="date";const r=t(n);return r.innerText="Due Date:",e.appendChild(r),e.appendChild(n),e}(),function(){const e=document.createElement("div"),n=document.createElement("h2");return n.innerText="Priority:",e.appendChild(n),["high","moderate","low"].forEach((function(n){const r=document.createElement("input");r.type="radio",r.class="radio",r.id=`${n}`,r.value=`priority-${n}`,r.name="priority-level",r.innerText=n;const o=t(r);"Moderate"===o.innerText&&r.setAttribute("checked","true"),e.appendChild(r),e.appendChild(o)})),e}(),function(){const e=document.createElement("div"),n=document.createElement("h2");return n.innerText="Status",e.appendChild(n),["not started","completed"].forEach((function(n){const r=document.createElement("input");r.type="radio",r.id=n.replace(" ","-"),r.value=n.replace(" ","-"),r.name="completed-status",r.innerText=n;const o=t(r);"Not Started"===o.innerText&&r.setAttribute("checked","true"),e.appendChild(r),e.appendChild(o)})),e}(),function(){const e=document.createElement("input");return e.type="submit",e.className="submit",e.innerText="Submit",e}()].forEach((function(e){n.appendChild(e)})),n.style.display="none",e.appendChild(n)}function m(){const t=Object.keys(e),n=t.length-1;if(document.querySelectorAll(".project").length<t.length){const e=a(i,t[n],"project");a(e,"","projectTitle",t[n]),a(e,"","addTaskBtn","Add New Task"),f(e),l(e.id,e)}}var h=n(379),v=n.n(h),y=n(426);function g(e,t){e.addEventListener("click",t)}function b(){const e=function(){let e=document.querySelectorAll(".submit");return e=Array.from(e),e}();e.forEach((e=>e.addEventListener("click",t))),e.forEach((e=>e.addEventListener("click",s))),e.forEach((e=>e.addEventListener("click",p)))}function E(){(function(){let e=document.querySelectorAll(".addTaskBtn");return e=Array.from(e),e})().forEach((e=>e.addEventListener("click",p)))}v()(y.Z,{insert:"head",singleton:!1}),y.Z.locals,a(i,"addProjectBtn","","Add New Project"),function(){const t=Object.keys(e);for(let e=0;e<t.length;e++){const n=a(i,t[e],"project");a(n,"","projectTitle",t[e]),a(n,"","addTaskBtn","Add New Task"),f(n),l(n.id,n)}}(),function(){const e=document.querySelector("#addProjectBtn");g(e,r),g(e,m),g(e,b),g(e,E)}(),b(),E(),function(){const e=function(){let e=document.querySelectorAll(".marked-completed");return e=Array.from(e),e}();e.forEach((e=>e.addEventListener("click",o))),e.forEach((e=>e.addEventListener("click",removeTask)))}()})()})();