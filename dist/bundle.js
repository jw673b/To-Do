(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".project {\n    border-color: black;\n    border: solid;\n}\nbody {\n\n}",""]);const c=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(o[i]=!0)}for(var a=0;a<e.length;a++){var d=[].concat(e[a]);r&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function i(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],d=t.base?a[0]+t.base:a[0],l=n[d]||0,s="".concat(d," ").concat(l);n[d]=l+1;var u=i(s),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(c[u].references++,c[u].updater(p)):c.push({identifier:s,updater:h(p,t),references:1}),r.push(s)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var c=n.nc;c&&(r.nonce=c)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,s=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var c=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(c,i[t]):e.appendChild(c)}}function p(e,t,n){var r=n.css,o=n.media,c=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function h(e,t){var n,r,o;if(t.singleton){var c=m++;n=f||(f=d(t)),r=u.bind(null,n,c,!1),o=u.bind(null,n,c,!0)}else n=d(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);c[o].references--}for(var d=a(e,t),l=0;l<n.length;l++){var s=i(n[l]);0===c[s].references&&(c[s].updater(),c.splice(s,1))}n=d}}}}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{let e={};function t(t){let n=e[t],r=Object.keys({description:void 0,date:void 0,priority:void 0,status:void 0,project:void 0,index:void 0});localStorage.setItem(t,function(){let e="";return n.forEach((t=>{let n;n=""===e?"":";";for(let e=0;e<r.length-1;e++)n+=`${r[e]}:${t[r[e]]},`;n+=`${r[r.length-1]}:${t[r[r.length-1]]}`,e+=n})),e}()),console.log(localStorage)}function r(n){n.preventDefault();const r=function(){const t=["description","date","priority","status","project","index"];let r=function(t){let n=t.target.parentNode.childNodes;const r=n[0],o=n[1],c=n[2];let i=r.childNodes[1].value,a=o.childNodes[1].value,d=function(){let e;return c.childNodes.forEach((t=>{!0===t.checked&&(e=t.id)})),e}(),l=e[t.target.parentNode.parentNode.id].length;return[i,a,d,"not-completed",t.target.parentNode.parentNode.id,l]}(n),o={description:void 0,date:void 0,priority:void 0,status:void 0,project:void 0,index:void 0};for(let e=0;e<6;e++)o[t[e]]=r[e];return o}(),o=n.target.parentNode.parentNode.id;e[o].push(r),t(o)}function o(){e[prompt("Name of new project?")]=[],t(Object.keys(e).pop())}function c(n){const r=n.target.parentNode.id.split("-");e[r[0]][r[1]].status="completed",t(r[0])}const i=document.querySelector("#content");document.createElement("div").id="header";const a=["description","date","priority","status"];function d(e,t=null,n=null,r=null){const o=document.createElement("div");return o.id=t,o.className=n,o.innerText=r,e.appendChild(o),o}function l(){const e=document.createElement("button");return e.type="button",e.className="marked-completed",e.innerText="X",e.addEventListener("click",c),e.addEventListener("click",f),e}function s(){const e=new Date;return String(e.getFullYear()).padStart(4,0)+"-"+String(e.getMonth()+1).padStart(2,0)+"-"+String(e.getDate()).padStart(2,0)}function u(t,n){const r=e[t];for(let e=0;e<r.length;e++)if("completed"!==r[e].status){const t=d(n,`${r[e].project}-${r[e].index}`,"task");for(let n=0;n<3;n++)d(t,`${r[e].title}-${a[n]}`,a[n],r[e][a[n]]);t.appendChild(l())}}function p(t){const n=t.target.parentNode.parentNode,r=e[n.id],o=r.length-1,c=d(n,`${n.id}-${o}`,"task");for(let e=0;e<3;e++)d(c,`${r[o].title}-${a[e]}`,a[e],r[o][a[e]]);c.appendChild(l())}function f(e){const t=e.target.parentNode;e.target.parentNode.parentNode.removeChild(t)}function m(e){function t(e){e[0].childNodes[1].value="",e[1].childNodes[1].value=s(),e[2].childNodes[3].checked=!0}if("submit"===e.target.className){const n=e.target.parentNode;n.style.display="none",t(n.childNodes)}else if("cancel"===e.target.className){e.preventDefault();const n=e.target.parentNode;n.style.display="none",t(n.childNodes)}else"addTaskBtn"===e.target.className&&(e.target.parentNode.childNodes[2].style.display="block")}function h(e){function t(e){let t=document.createElement("label");t.innerText=e.id.replace("-"," ");let n="";return t.innerText.split(" ").forEach((e=>n+=e[0].toUpperCase()+e.substring(1)+" ")),n=n.trim(),t.innerText=n,t.className="label",t.htmlFor=e.id,t}const n=document.createElement("form");n.className="task-form",[function(){const e=document.createElement("div"),n=document.createElement("input");n.type="text",n.id="description";const r=t(n);return e.appendChild(r),e.appendChild(n),e}(),function(){const e=document.createElement("div"),n=document.createElement("input");n.type="date",n.value=s(),n.id="date";const r=t(n);return r.innerText="Due Date:",e.appendChild(r),e.appendChild(n),e}(),function(){const e=document.createElement("div"),n=document.createElement("h2");return n.innerText="Priority:",e.appendChild(n),["high","moderate","low"].forEach((function(n){const r=document.createElement("input");r.type="radio",r.class="radio",r.id=`${n}`,r.value=`priority-${n}`,r.name="priority-level",r.innerText=n;const o=t(r);"Moderate"===o.innerText&&r.setAttribute("checked","true"),e.appendChild(r),e.appendChild(o)})),e}(),function(){const e=document.createElement("input");return e.type="submit",e.className="submit",e}(),function(){const e=document.createElement("button");return e.className="cancel",e.innerText="Cancel",e}()].forEach((function(e){n.appendChild(e)})),n.style.display="none",e.appendChild(n)}function v(){const t=Object.keys(e),n=t.length-1;if(document.querySelectorAll(".project").length<t.length){const e=d(i,t[n],"project");d(e,"","projectTitle",t[n]),d(e,"","addTaskBtn","Add New Task"),h(e),u(e.id,e)}}var y=n(379),g=n.n(y),N=n(426);function b(e,t){e.addEventListener("click",t)}function E(){const e=function(){let e=document.querySelectorAll(".submit");return e=Array.from(e),e}();e.forEach((e=>e.addEventListener("click",r))),e.forEach((e=>e.addEventListener("click",p))),e.forEach((e=>e.addEventListener("click",m)))}function k(){(function(){let e=document.querySelectorAll(".cancel");return e=Array.from(e),e})().forEach((e=>e.addEventListener("click",m)))}function j(){(function(){let e=document.querySelectorAll(".addTaskBtn");return e=Array.from(e),e})().forEach((e=>e.addEventListener("click",m)))}g()(N.Z,{insert:"head",singleton:!1}),N.Z.locals,Object.keys(localStorage).forEach((t=>{let n=[];localStorage[t].split(";").forEach((e=>{let t=[];e.split(",").forEach((e=>{const n=e.indexOf(":")+1,r=e.slice(n);t.push(r)}));let r={};r.description=t[0],r.date=t[1],r.priority=t[2],r.status=t[3],r.project=t[4],r.index=t[5],n.push(r)})),e[t]=n})),d(i,"addProjectBtn","","Add New Project"),function(){const t=Object.keys(e);for(let e=0;e<t.length;e++){const n=d(i,t[e],"project");d(n,"","projectTitle",t[e]),d(n,"","addTaskBtn","Add New Task"),h(n),u(n.id,n)}}(),function(){const e=document.querySelector("#addProjectBtn");b(e,o),b(e,v),b(e,E),b(e,k),b(e,j)}(),E(),k(),j(),function(){const e=function(){let e=document.querySelectorAll(".marked-completed");return e=Array.from(e),e}();e.forEach((e=>e.addEventListener("click",c))),e.forEach((e=>e.addEventListener("click",f)))}()})()})();