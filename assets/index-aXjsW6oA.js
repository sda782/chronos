var Se=Object.defineProperty;var Oe=(e,t,n)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ne=(e,t,n)=>(Oe(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function O(){}function ye(e){return e()}function ce(){return Object.create(null)}function W(e){e.forEach(ye)}function Te(e){return typeof e=="function"}function te(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ne(e){return Object.keys(e).length===0}function je(e,...t){if(e==null){for(const r of t)r(void 0);return O}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function ke(e,t,n){e.$$.on_destroy.push(je(t,n))}function K(e,t,n){return e.set(n),t}function u(e,t){e.appendChild(t)}function N(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode&&e.parentNode.removeChild(e)}function Ie(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function P(e){return document.createTextNode(e)}function M(){return P(" ")}function j(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function k(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ae(e){return Array.from(e.childNodes)}function H(e,t){t=""+t,e.data!==t&&(e.data=t)}function ae(e,t){e.value=t??""}function ie(e,t,n,r){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}let X;function V(e){X=e}function $e(){if(!X)throw new Error("Function called outside component initialization");return X}function Me(e){$e().$$.on_mount.push(e)}function Pe(e){$e().$$.on_destroy.push(e)}const F=[],de=[];let U=[];const me=[],We=Promise.resolve();let oe=!1;function Ce(){oe||(oe=!0,We.then(ze))}function G(e){U.push(e)}const re=new Set;let B=0;function ze(){if(B!==0)return;const e=X;do{try{for(;B<F.length;){const t=F[B];B++,V(t),De(t.$$)}}catch(t){throw F.length=0,B=0,t}for(V(null),F.length=0,B=0;de.length;)de.pop()();for(let t=0;t<U.length;t+=1){const n=U[t];re.has(n)||(re.add(n),n())}U.length=0}while(F.length);for(;me.length;)me.pop()();oe=!1,re.clear(),V(e)}function De(e){if(e.fragment!==null){e.update(),W(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(G)}}function He(e){const t=[],n=[];U.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),U=t}const Y=new Set;let D;function Re(){D={r:0,c:[],p:D}}function Be(){D.r||W(D.c),D=D.p}function J(e,t){e&&e.i&&(Y.delete(e),e.i(t))}function Q(e,t,n,r){if(e&&e.o){if(Y.has(e))return;Y.add(e),D.c.push(()=>{Y.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function Z(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Le(e){e&&e.c()}function le(e,t,n){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),G(()=>{const o=e.$$.on_mount.map(ye).filter(Te);e.$$.on_destroy?e.$$.on_destroy.push(...o):W(o),e.$$.on_mount=[]}),i.forEach(G)}function se(e,t){const n=e.$$;n.fragment!==null&&(He(n.after_update),W(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function qe(e,t){e.$$.dirty[0]===-1&&(F.push(e),Ce(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ue(e,t,n,r,i,o,c=null,g=[-1]){const d=X;V(e);const l=e.$$={fragment:null,ctx:[],props:o,update:O,not_equal:i,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:ce(),dirty:g,skip_bound:!1,root:t.target||d.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(e,t.props||{},(s,b,...a)=>{const v=a.length?a[0]:b;return l.ctx&&i(l.ctx[s],l.ctx[s]=v)&&(!l.skip_bound&&l.bound[s]&&l.bound[s](v),f&&qe(e,s)),b}):[],l.update(),f=!0,W(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const s=Ae(t.target);l.fragment&&l.fragment.l(s),s.forEach(E)}else l.fragment&&l.fragment.c();t.intro&&J(e.$$.fragment),le(e,t.target,t.anchor),ze()}V(d)}class fe{constructor(){ne(this,"$$");ne(this,"$$set")}$destroy(){se(this,1),this.$destroy=O}$on(t,n){if(!Te(n))return O;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!Ne(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Fe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Fe);function Ue(e){var t=0;return e.forEach(n=>{n.stopTime&&(t+=n.stopTime-n.startTime)}),t}function x(e){var t="";e=Math.floor(e/1e3);var n=e%60;e=Math.floor(e/60);var r=e%60;e=Math.floor(e/60);var i=e%24;return e=Math.floor(e/24),t=`${i<10?"0"+i.toString():i}:${r<10?"0"+r.toString():r}:${n<10?"0"+n.toString():n}`,t}function ee(e){return new Date(e).toLocaleTimeString()}const q=[];function Je(e,t=O){let n;const r=new Set;function i(g){if(te(e,g)&&(e=g,n)){const d=!q.length;for(const l of r)l[1](),q.push(l,e);if(d){for(let l=0;l<q.length;l+=2)q[l][0](q[l+1]);q.length=0}}}function o(g){i(g(e))}function c(g,d=O){const l=[g,d];return r.add(l),r.size===1&&(n=t(i,o)||O),g(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:i,update:o,subscribe:c}}const Ee="fern_timers",A=Je(JSON.parse(localStorage.getItem(Ee))||[]);A.subscribe(e=>localStorage.setItem(Ee,JSON.stringify(e)));function _e(e,t,n){const r=e.slice();return r[24]=t[n],r}function Ke(e){let t,n=e[0].name+"",r;return{c(){t=p("p"),r=P(n)},m(i,o){N(i,t,o),u(t,r)},p(i,o){o&1&&n!==(n=i[0].name+"")&&H(r,n)},d(i){i&&E(t)}}}function Ve(e){let t,n,r;return{c(){t=p("input"),k(t,"class","name_edit svelte-16c9zsw")},m(i,o){N(i,t,o),ae(t,e[0].name),n||(r=[j(t,"input",e[14]),j(t,"keypress",e[15])],n=!0)},p(i,o){o&1&&t.value!==i[0].name&&ae(t,i[0].name)},d(i){i&&E(t),n=!1,W(r)}}}function Xe(e){let t,n,r;return{c(){t=p("button"),t.innerHTML="<b>stop</b>",k(t,"class","btn svelte-16c9zsw"),ie(t,"background-color","var(--accent-dark)")},m(i,o){N(i,t,o),n||(r=j(t,"click",e[8]),n=!0)},p:O,d(i){i&&E(t),n=!1,r()}}}function Ye(e){let t,n,r;return{c(){t=p("button"),t.innerHTML="<b>start</b>",k(t,"class","btn svelte-16c9zsw")},m(i,o){N(i,t,o),n||(r=j(t,"click",e[7]),n=!0)},p:O,d(i){i&&E(t),n=!1,r()}}}function he(e){let t,n,r,i,o,c,g,d,l,f,s,b,a,v,m,z,L=Z(e[0].timerIntervals),y=[];for(let w=0;w<L.length;w+=1)y[w]=be(_e(e,L,w));return{c(){t=p("div"),n=p("h2"),n.innerHTML="<em>Intervals</em>",r=M(),i=p("table"),o=p("tbody"),c=p("tr"),c.innerHTML="<th>start</th> <th>end</th> <th>time</th>",g=M();for(let w=0;w<y.length;w+=1)y[w].c();d=M(),l=p("tr"),f=p("td"),s=M(),b=p("td"),a=M(),v=p("td"),m=P(e[4]),k(i,"class","log_table svelte-16c9zsw"),k(t,"class",z="info_box container "+(e[6]?"info_box_left":"info_box_right")+" svelte-16c9zsw")},m(w,I){N(w,t,I),u(t,n),u(t,r),u(t,i),u(i,o),u(o,c),u(o,g);for(let h=0;h<y.length;h+=1)y[h]&&y[h].m(o,null);u(o,d),u(o,l),u(l,f),u(l,s),u(l,b),u(l,a),u(l,v),u(v,m)},p(w,I){if(I&1){L=Z(w[0].timerIntervals);let h;for(h=0;h<L.length;h+=1){const C=_e(w,L,h);y[h]?y[h].p(C,I):(y[h]=be(C),y[h].c(),y[h].m(o,d))}for(;h<y.length;h+=1)y[h].d(1);y.length=L.length}I&16&&H(m,w[4]),I&64&&z!==(z="info_box container "+(w[6]?"info_box_left":"info_box_right")+" svelte-16c9zsw")&&k(t,"class",z)},d(w){w&&E(t),Ie(y,w)}}}function pe(e){let t=ee(e[24].stopTime)+"",n;return{c(){n=P(t)},m(r,i){N(r,n,i)},p(r,i){i&1&&t!==(t=ee(r[24].stopTime)+"")&&H(n,t)},d(r){r&&E(n)}}}function ge(e){let t=x(e[24].stopTime-e[24].startTime)+"",n;return{c(){n=P(t)},m(r,i){N(r,n,i)},p(r,i){i&1&&t!==(t=x(r[24].stopTime-r[24].startTime)+"")&&H(n,t)},d(r){r&&E(n)}}}function be(e){let t,n,r=ee(e[24].startTime)+"",i,o,c,g,d,l=e[24].stopTime&&pe(e),f=e[24].stopTime&&ge(e);return{c(){t=p("tr"),n=p("td"),i=P(r),o=M(),c=p("td"),l&&l.c(),g=M(),d=p("td"),f&&f.c()},m(s,b){N(s,t,b),u(t,n),u(n,i),u(t,o),u(t,c),l&&l.m(c,null),u(t,g),u(t,d),f&&f.m(d,null)},p(s,b){b&1&&r!==(r=ee(s[24].startTime)+"")&&H(i,r),s[24].stopTime?l?l.p(s,b):(l=pe(s),l.c(),l.m(c,null)):l&&(l.d(1),l=null),s[24].stopTime?f?f.p(s,b):(f=ge(s),f.c(),f.m(d,null)):f&&(f.d(1),f=null)},d(s){s&&E(t),l&&l.d(),f&&f.d()}}}function Ge(e){let t,n,r,i,o,c,g,d,l,f,s,b,a,v,m,z,L,y;function w(T,_){return T[5]?Ve:Ke}let I=w(e),h=I(e);function C(T,_){return T[0].isRunning?Xe:Ye}let R=C(e),S=R(e),$=e[2]&&he(e);return{c(){t=p("div"),n=p("h1"),r=P(e[3]),i=M(),o=p("h4"),c=P(e[4]),g=M(),d=p("div"),h.c(),l=M(),S.c(),f=M(),s=p("div"),b=p("button"),b.innerHTML="<b>show more</b>",a=M(),v=p("div"),m=p("button"),m.innerHTML='<img width="15px" height="15px" src="./x.png" alt="remove timer"/>',z=M(),$&&$.c(),ie(n,"margin-bottom","5px"),ie(o,"margin","0"),k(d,"role","button"),k(d,"tabindex","0"),k(b,"class","btn svelte-16c9zsw"),k(m,"class","svelte-16c9zsw"),k(v,"class","floating_button svelte-16c9zsw"),k(t,"class","container svelte-16c9zsw"),k(t,"role","contentinfo")},m(T,_){N(T,t,_),u(t,n),u(n,r),u(t,i),u(t,o),u(o,c),u(t,g),u(t,d),h.m(d,null),u(t,l),S.m(t,null),u(t,f),u(t,s),u(s,b),u(t,a),u(t,v),u(v,m),u(t,z),$&&$.m(t,null),L||(y=[j(d,"dblclick",e[16]),j(b,"mouseenter",e[17]),j(b,"mouseleave",e[18]),j(m,"click",e[19])],L=!0)},p(T,[_]){_&8&&H(r,T[3]),_&16&&H(c,T[4]),I===(I=w(T))&&h?h.p(T,_):(h.d(1),h=I(T),h&&(h.c(),h.m(d,null))),R===(R=C(T))&&S?S.p(T,_):(S.d(1),S=R(T),S&&(S.c(),S.m(t,f))),T[2]?$?$.p(T,_):($=he(T),$.c(),$.m(t,null)):$&&($.d(1),$=null)},i:O,o:O,d(T){T&&E(t),h.d(),S.d(),$&&$.d(),L=!1,W(y)}}}function Qe(e,t,n){let r;ke(e,A,_=>n(21,r=_));let{innerWidth:i}=t,{timer:o}=t,{remove_timer:c}=t;var g=!1,d="00:00:00",l="00:00:00",f=!1,s=!1,b;function a(){n(0,o.currentTime=Date.now(),o),n(3,d=x(o.currentTime-b.startTime))}function v(){var _={startTime:Date.now(),stopTime:0};o.timerIntervals.push(_),b=_,n(0,o.isRunning=!0,o),n(13,I=setInterval(a,1e3)),K(A,r=[...r],r)}function m(){n(0,o.timerIntervals[o.timerIntervals.length-1].stopTime=Date.now(),o),n(0,o.isRunning=!1,o),K(A,r=[...r],r),w()}function z(){n(5,f=!f)}function L(_){n(6,s=_.clientX>i/2),n(2,g=!0)}function y(){n(2,g=!1)}function w(){n(4,l=x(Ue(o.timerIntervals)))}Me(()=>{o.isRunning&&(b=o.timerIntervals[o.timerIntervals.length-1]),w()}),Pe(()=>{clearInterval(I)});let I=setInterval(a,1e3);function h(){o.name=this.value,n(0,o)}const C=_=>{_.key==="Enter"&&z()},R=_=>{_.preventDefault(),f||z()},S=_=>L(_),$=()=>y(),T=()=>{var _=window.confirm(`Your are deleting:
 `+o.name);_&&c(o.id)};return e.$$set=_=>{"innerWidth"in _&&n(12,i=_.innerWidth),"timer"in _&&n(0,o=_.timer),"remove_timer"in _&&n(1,c=_.remove_timer)},e.$$.update=()=>{e.$$.dirty&8193&&(o.isRunning||clearInterval(I))},[o,c,g,d,l,f,s,v,m,z,L,y,i,I,h,C,R,S,$,T]}class Ze extends fe{constructor(t){super(),ue(this,t,Qe,Ge,te,{innerWidth:12,timer:0,remove_timer:1})}}function ve(e,t,n){const r=e.slice();return r[8]=t[n],r}function we(e){let t,n;return t=new Ze({props:{timer:e[8],remove_timer:e[4],innerWidth:e[0]}}),{c(){Le(t.$$.fragment)},m(r,i){le(t,r,i),n=!0},p(r,i){const o={};i&2&&(o.timer=r[8]),i&1&&(o.innerWidth=r[0]),t.$set(o)},i(r){n||(J(t.$$.fragment,r),n=!0)},o(r){Q(t.$$.fragment,r),n=!1},d(r){se(t,r)}}}function xe(e){let t,n,r,i,o,c,g,d,l;G(e[5]);let f=Z(e[1]),s=[];for(let a=0;a<f.length;a+=1)s[a]=we(ve(e,f,a));const b=a=>Q(s[a],1,1,()=>{s[a]=null});return{c(){t=p("div"),n=p("button"),n.textContent="add",r=M(),i=p("button"),i.textContent="clear",o=M(),c=p("div");for(let a=0;a<s.length;a+=1)s[a].c();k(n,"class","menu_btn svelte-1vg5owj"),k(i,"class","menu_btn svelte-1vg5owj"),k(c,"class","grid svelte-1vg5owj"),k(t,"class","container svelte-1vg5owj")},m(a,v){N(a,t,v),u(t,n),u(t,r),u(t,i),u(t,o),u(t,c);for(let m=0;m<s.length;m+=1)s[m]&&s[m].m(c,null);g=!0,d||(l=[j(window,"resize",e[5]),j(n,"click",e[2]),j(i,"click",e[3])],d=!0)},p(a,[v]){if(v&19){f=Z(a[1]);let m;for(m=0;m<f.length;m+=1){const z=ve(a,f,m);s[m]?(s[m].p(z,v),J(s[m],1)):(s[m]=we(z),s[m].c(),J(s[m],1),s[m].m(c,null))}for(Re(),m=f.length;m<s.length;m+=1)b(m);Be()}},i(a){if(!g){for(let v=0;v<f.length;v+=1)J(s[v]);g=!0}},o(a){s=s.filter(Boolean);for(let v=0;v<s.length;v+=1)Q(s[v]);g=!1},d(a){a&&E(t),Ie(s,a),d=!1,W(l)}}}function et(e,t,n){let r;ke(e,A,s=>n(1,r=s));var i=0,o=[];function c(){var s={id:crypto.randomUUID(),currentTime:0,name:d(),isRunning:!1,timerIntervals:[]};K(A,r=[...r,s],r)}function g(){K(A,r=[],r)}function d(){return o[Math.floor(Math.random()*o.length)]}function l(s){var b=r.findIndex(a=>a.id===s);r.splice(b,1),K(A,r=[...r],r)}Me(async()=>{var s=await fetch("/names.txt"),b=await s.text();o=[...b.split(`
`)],r.length<=0&&c()});function f(){n(0,i=window.innerWidth)}return[i,r,c,g,l,f]}class tt extends fe{constructor(t){super(),ue(this,t,et,xe,te,{})}}function nt(e){let t,n,r,i;return t=new tt({}),{c(){Le(t.$$.fragment),n=M(),r=p("div"),r.innerHTML='<p style="font-size: smaller;"><em>Fern created by Aevum - 2024</em></p>',k(r,"class","footer svelte-ey6ya6")},m(o,c){le(t,o,c),N(o,n,c),N(o,r,c),i=!0},p:O,i(o){i||(J(t.$$.fragment,o),i=!0)},o(o){Q(t.$$.fragment,o),i=!1},d(o){o&&(E(n),E(r)),se(t,o)}}}class rt extends fe{constructor(t){super(),ue(this,t,null,nt,te,{})}}new rt({target:document.getElementById("app")});
