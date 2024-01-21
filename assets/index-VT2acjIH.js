var we=Object.defineProperty;var $e=(e,t,n)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var W=(e,t,n)=>($e(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function S(){}function _e(e){return e()}function ue(){return Object.create(null)}function C(e){e.forEach(_e)}function pe(e){return typeof e=="function"}function ne(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ke(e){return Object.keys(e).length===0}function _(e,t){e.appendChild(t)}function M(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode&&e.parentNode.removeChild(e)}function je(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function E(e){return document.createTextNode(e)}function D(){return E(" ")}function A(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function b(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ee(e){return Array.from(e.childNodes)}function R(e,t){t=""+t,e.data!==t&&(e.data=t)}function fe(e,t){e.value=t??""}function he(e,t,n,r){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}let K;function q(e){K=e}function ge(){if(!K)throw new Error("Function called outside component initialization");return K}function ve(e){ge().$$.on_mount.push(e)}function Se(e){ge().$$.on_destroy.push(e)}const B=[],x=[];let z=[];const ce=[],Me=Promise.resolve();let ee=!1;function Oe(){ee||(ee=!0,Me.then(be))}function te(e){z.push(e)}const Z=new Set;let N=0;function be(){if(N!==0)return;const e=K;do{try{for(;N<B.length;){const t=B[N];N++,q(t),Le(t.$$)}}catch(t){throw B.length=0,N=0,t}for(q(null),B.length=0,N=0;x.length;)x.pop()();for(let t=0;t<z.length;t+=1){const n=z[t];Z.has(n)||(Z.add(n),n())}z.length=0}while(B.length);for(;ce.length;)ce.pop()();ee=!1,Z.clear(),q(e)}function Le(e){if(e.fragment!==null){e.update(),C(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(te)}}function Ae(e){const t=[],n=[];z.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),z=t}const J=new Set;let L;function Ce(){L={r:0,c:[],p:L}}function Ie(){L.r||C(L.c),L=L.p}function H(e,t){e&&e.i&&(J.delete(e),e.i(t))}function Q(e,t,n,r){if(e&&e.o){if(J.has(e))return;J.add(e),L.c.push(()=>{J.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function de(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ye(e){e&&e.c()}function re(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),te(()=>{const i=e.$$.on_mount.map(_e).filter(pe);e.$$.on_destroy?e.$$.on_destroy.push(...i):C(i),e.$$.on_mount=[]}),o.forEach(te)}function oe(e,t){const n=e.$$;n.fragment!==null&&(Ae(n.after_update),C(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Pe(e,t){e.$$.dirty[0]===-1&&(B.push(e),Oe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ie(e,t,n,r,o,i,c=null,p=[-1]){const d=K;q(e);const l=e.$$={fragment:null,ctx:[],props:i,update:S,not_equal:o,bound:ue(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:ue(),dirty:p,skip_bound:!1,root:t.target||d.$$.root};c&&c(l.root);let v=!1;if(l.ctx=n?n(e,t.props||{},(s,f,...u)=>{const g=u.length?u[0]:f;return l.ctx&&o(l.ctx[s],l.ctx[s]=g)&&(!l.skip_bound&&l.bound[s]&&l.bound[s](g),v&&Pe(e,s)),f}):[],l.update(),v=!0,C(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const s=Ee(t.target);l.fragment&&l.fragment.l(s),s.forEach(j)}else l.fragment&&l.fragment.c();t.intro&&H(e.$$.fragment),re(e,t.target,t.anchor),be()}q(d)}class le{constructor(){W(this,"$$");W(this,"$$set")}$destroy(){oe(this,1),this.$destroy=S}$on(t,n){if(!pe(n))return S;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!ke(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Te="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Te);function Ne(e){let t,n;return{c(){t=h("p"),n=E(e[0])},m(r,o){M(r,t,o),_(t,n)},p(r,o){o&1&&R(n,r[0])},d(r){r&&j(t)}}}function Be(e){let t,n,r;return{c(){t=h("input"),b(t,"class","name_edit svelte-1djdjne")},m(o,i){M(o,t,i),fe(t,e[0]),e[15](t),n||(r=[A(t,"input",e[14]),A(t,"keypress",e[16])],n=!0)},p(o,i){i&1&&t.value!==o[0]&&fe(t,o[0])},d(o){o&&j(t),e[15](null),n=!1,C(r)}}}function De(e){let t,n,r;return{c(){t=h("button"),t.innerHTML="<b>STOP</b>",b(t,"class","btn svelte-1djdjne"),he(t,"background-color","var(--accent-dark)")},m(o,i){M(o,t,i),n||(r=A(t,"click",e[11]),n=!0)},p:S,d(o){o&&j(t),n=!1,r()}}}function ze(e){let t,n,r;return{c(){t=h("button"),t.innerHTML="<b>START</b>",b(t,"class","btn svelte-1djdjne")},m(o,i){M(o,t,i),n||(r=A(t,"click",e[10]),n=!0)},p:S,d(o){o&&j(t),n=!1,r()}}}function He(e){let t,n,r,o,i,c,p=(e[6]<10?"0"+e[6].toString():e[6])+"",d,l,v=(e[5]<10?"0"+e[5].toString():e[5])+"",s,f,u=(e[4]<10?"0"+e[4].toString():e[4])+"",g,U,y,V,I,P,k,O,F,X;function Y(m,$){return m[7]?Be:Ne}let T=Y(e),a=T(e);function se(m,$){return m[3]?De:ze}let G=se(e),w=G(e);return{c(){t=h("div"),n=h("p"),r=h("em"),o=E(e[9]),i=D(),c=h("h1"),d=E(p),l=E(":"),s=E(v),f=E(":"),g=E(u),U=D(),y=h("div"),a.c(),V=D(),I=h("div"),w.c(),P=D(),k=h("div"),O=h("button"),O.textContent="X",he(n,"font-size","smaller"),b(y,"role","button"),b(y,"tabindex","0"),b(O,"class","svelte-1djdjne"),b(k,"class","floating_button svelte-1djdjne"),b(t,"class","timercontainer svelte-1djdjne")},m(m,$){M(m,t,$),_(t,n),_(n,r),_(r,o),_(t,i),_(t,c),_(c,d),_(c,l),_(c,s),_(c,f),_(c,g),_(t,U),_(t,y),a.m(y,null),_(t,V),_(t,I),w.m(I,null),_(t,P),_(t,k),_(k,O),F||(X=[A(y,"dblclick",e[17]),A(O,"click",e[18])],F=!0)},p(m,[$]){$&512&&R(o,m[9]),$&64&&p!==(p=(m[6]<10?"0"+m[6].toString():m[6])+"")&&R(d,p),$&32&&v!==(v=(m[5]<10?"0"+m[5].toString():m[5])+"")&&R(s,v),$&16&&u!==(u=(m[4]<10?"0"+m[4].toString():m[4])+"")&&R(g,u),T===(T=Y(m))&&a?a.p(m,$):(a.d(1),a=T(m),a&&(a.c(),a.m(y,null))),G===(G=se(m))&&w?w.p(m,$):(w.d(1),w=G(m),w&&(w.c(),w.m(I,null)))},i:S,o:S,d(m){m&&j(t),a.d(),w.d(),F=!1,C(X)}}}function Ue(e,t,n){let{id:r}=t;var o=!1,i=0,c=0;let{name:p="test"}=t,{remove_timer:d}=t;var l=0,v=0,s=0,f=0,u=!1,g,U;function y(){c=Date.now(),f=c-i,f=Math.floor(f/1e3),n(4,l=f%60),f=Math.floor(f/60),n(5,v=f%60),f=Math.floor(f/60),n(6,s=f%24),f=Math.floor(f/24),console.log("running")}function V(){i=Date.now(),n(3,o=!0),n(13,k=setInterval(y,1e3)),console.log("starting")}function I(){n(3,o=!1)}function P(){n(7,u=!u),console.log(u)}ve(()=>{n(9,U=r.substring(0,4)+"...")}),Se(()=>{clearInterval(k)});let k=setInterval(y,1e3);function O(){p=this.value,n(0,p)}function F(a){x[a?"unshift":"push"](()=>{g=a,n(8,g)})}const X=a=>{a.key==="Enter"&&P()},Y=()=>{u||P()},T=()=>{var a=window.confirm(`Your are deleting:
 `+p);a&&(console.log("TC",r),d(r))};return e.$$set=a=>{"id"in a&&n(1,r=a.id),"name"in a&&n(0,p=a.name),"remove_timer"in a&&n(2,d=a.remove_timer)},e.$$.update=()=>{e.$$.dirty&8200&&(o||clearInterval(k))},[p,r,d,o,l,v,s,u,g,U,V,I,P,k,O,F,X,Y,T]}class Fe extends le{constructor(t){super(),ie(this,t,Ue,He,ne,{id:1,name:0,remove_timer:2})}}function ae(e,t,n){const r=e.slice();return r[5]=t[n],r}function me(e){let t,n;return t=new Fe({props:{id:e[5],name:e[2](),remove_timer:e[3]}}),{c(){ye(t.$$.fragment)},m(r,o){re(t,r,o),n=!0},p(r,o){const i={};o&1&&(i.id=r[5]),t.$set(i)},i(r){n||(H(t.$$.fragment,r),n=!0)},o(r){Q(t.$$.fragment,r),n=!1},d(r){oe(t,r)}}}function Re(e){let t,n,r,o,i,c,p,d=de(e[0]),l=[];for(let s=0;s<d.length;s+=1)l[s]=me(ae(e,d,s));const v=s=>Q(l[s],1,1,()=>{l[s]=null});return{c(){t=h("div"),n=h("button"),n.textContent="Add",r=D(),o=h("div");for(let s=0;s<l.length;s+=1)l[s].c();b(n,"class","add_btn svelte-s30ye7"),b(o,"class","grid svelte-s30ye7"),b(t,"class","container svelte-s30ye7")},m(s,f){M(s,t,f),_(t,n),_(t,r),_(t,o);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(o,null);i=!0,c||(p=A(n,"click",e[1]),c=!0)},p(s,[f]){if(f&13){d=de(s[0]);let u;for(u=0;u<d.length;u+=1){const g=ae(s,d,u);l[u]?(l[u].p(g,f),H(l[u],1)):(l[u]=me(g),l[u].c(),H(l[u],1),l[u].m(o,null))}for(Ce(),u=d.length;u<l.length;u+=1)v(u);Ie()}},i(s){if(!i){for(let f=0;f<d.length;f+=1)H(l[f]);i=!0}},o(s){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)Q(l[f]);i=!1},d(s){s&&j(t),je(l,s),c=!1,p()}}}function qe(e,t,n){var r=[],o=[];function i(){n(0,r=[...r,crypto.randomUUID()]),console.log(r)}function c(){return o[Math.floor(Math.random()*o.length)]}function p(d){console.log("app",d);const l=r.indexOf(d,0);l>-1&&r.splice(l,1),n(0,r=[...r]),console.log(r)}return ve(async()=>{var d=await fetch("./names.txt"),l=await d.text();o=[...l.split(`
`)],r.length<=0&&i()}),[r,i,c,p]}class Ke extends le{constructor(t){super(),ie(this,t,qe,Re,ne,{})}}function Ve(e){let t,n,r,o;return t=new Ke({}),{c(){ye(t.$$.fragment),n=D(),r=h("div"),r.innerHTML="<p><em>Chronos app created by Aevum - 2024</em></p>",b(r,"class","footer svelte-3b0hzs")},m(i,c){re(t,i,c),M(i,n,c),M(i,r,c),o=!0},p:S,i(i){o||(H(t.$$.fragment,i),o=!0)},o(i){Q(t.$$.fragment,i),o=!1},d(i){i&&(j(n),j(r)),oe(t,i)}}}class Xe extends le{constructor(t){super(),ie(this,t,null,Ve,ne,{})}}new Xe({target:document.getElementById("app")});
