(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{425:function(e,t,n){"use strict";n.d(t,{F:function(){return l},f:function(){return u}});var r=n(1720),a=n(9008),o=n.n(a),i=(0,r.createContext)({setTheme:function(e){},themes:[]}),l=function(){return(0,r.useContext)(i)},s=["light","dark"],c="(prefers-color-scheme: dark)",u=function(e){var t=e.forcedTheme,n=e.disableTransitionOnChange,a=void 0!==n&&n,o=e.enableSystem,l=void 0===o||o,u=e.enableColorScheme,m=void 0===u||u,g=e.storageKey,v=void 0===g?"theme":g,y=e.themes,w=void 0===y?["light","dark"]:y,b=e.defaultTheme,_=void 0===b?l?"system":"light":b,x=e.attribute,Z=void 0===x?"data-theme":x,E=e.value,k=e.children,T=(0,r.useState)(function(){return f(v,_)}),O=T[0],C=T[1],j=(0,r.useState)(function(){return f(v)}),S=j[0],M=j[1],N=E?Object.values(E):w,L=(0,r.useCallback)(function(e){var n=h(e);M(n),"system"!==O||t||z(n,!1)},[O,t]),I=(0,r.useRef)(L);I.current=L;var z=(0,r.useCallback)(function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=!0);var r=(null==E?void 0:E[e])||e,o=a&&n?p():null;if(t)try{localStorage.setItem(v,e)}catch(e){}if("system"===e&&l){var i=h();r=(null==E?void 0:E[i])||i}if(n){var s,c=document.documentElement;"class"===Z?((s=c.classList).remove.apply(s,N),c.classList.add(r)):c.setAttribute(Z,r),null==o||o()}},[]);(0,r.useEffect)(function(){var e=function(){return I.current.apply(I,[].slice.call(arguments))},t=window.matchMedia(c);return t.addListener(e),e(t),function(){return t.removeListener(e)}},[]);var B=(0,r.useCallback)(function(e){t?z(e,!0,!1):z(e),C(e)},[t]);return(0,r.useEffect)(function(){var e=function(e){e.key===v&&B(e.newValue)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}},[B]),(0,r.useEffect)(function(){if(m){var e=t&&s.includes(t)?t:O&&s.includes(O)?O:"system"===O&&S||null;document.documentElement.style.setProperty("color-scheme",e)}},[m,O,S,t]),r.default.createElement(i.Provider,{value:{theme:O,setTheme:B,forcedTheme:t,resolvedTheme:"system"===O?S:O,themes:l?[].concat(w,["system"]):w,systemTheme:l?S:void 0}},r.default.createElement(d,{forcedTheme:t,storageKey:v,attribute:Z,value:E,enableSystem:l,defaultTheme:_,attrs:N}),k)},d=(0,r.memo)(function(e){var t=e.forcedTheme,n=e.storageKey,a=e.attribute,i=e.enableSystem,l=e.defaultTheme,s=e.value,u="class"===a?"var d=document.documentElement.classList;d.remove("+e.attrs.map(function(e){return"'"+e+"'"}).join(",")+");":"var d=document.documentElement;",d=function(e,t){e=(null==s?void 0:s[e])||e;var n=t?e:"'"+e+"'";return"class"===a?"d.add("+n+")":"d.setAttribute('"+a+"', "+n+")"},f="system"===l;return r.default.createElement(o(),null,r.default.createElement("script",t?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){"+u+d(t)+"}()"}}:i?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try {"+u+"var e=localStorage.getItem('"+n+"');"+(f?"":d(l)+";")+'if("system"===e||(!e&&'+f+')){var t="'+c+'",m=window.matchMedia(t);m.media!==t||m.matches?'+d("dark")+":"+d("light")+"}else if(e) "+(s?"var x="+JSON.stringify(s)+";":"")+d(s?"x[e]":"e",!0)+"}catch(e){}}()"}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try{"+u+'var e=localStorage.getItem("'+n+'");if(e){'+(s?"var x="+JSON.stringify(s)+";":"")+d(s?"x[e]":"e",!0)+"}else{"+d(l)+";}}catch(t){}}();"}}))},function(e,t){return e.forcedTheme===t.forcedTheme}),f=function(e,t){if("undefined"!=typeof window){var n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),function(){window.getComputedStyle(document.body),setTimeout(function(){document.head.removeChild(e)},1)}},h=function(e){return e||(e=window.matchMedia(c)),e.matches?"dark":"light"}},3454:function(e,t,n){"use strict";var r,a;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(a=n.g.process)?void 0:a.env)?n.g.process:n(7663)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9245)}])},6250:function(e,t,n){"use strict";var r=n(7320),a=n(1664),o=n.n(a);let i=e=>{let{href:t,...n}=e,a=t&&t.startsWith("/"),i=t&&t.startsWith("#");return a?(0,r.tZ)(o(),{href:t,children:(0,r.tZ)("a",{...n})}):i?(0,r.tZ)("a",{href:t,...n}):(0,r.tZ)("a",{target:"_blank",rel:"noopener noreferrer",href:t,...n})};t.Z=i},6116:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7320);function a(e){let{children:t}=e;return(0,r.tZ)("div",{className:"mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0",children:t})}},5:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r,a,o,i,l,s,c,u=n(7320),d=n(1720);function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(){return(g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(){return(v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let y={mail:function(e){return d.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),r||(r=d.createElement("path",{d:"M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"})),a||(a=d.createElement("path",{d:"m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"})))},github:function(e){return d.createElement("svg",p({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),o||(o=d.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))},facebook:function(e){return d.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),i||(i=d.createElement("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})))},youtube:function(e){return d.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),l||(l=d.createElement("path",{d:"M23.499 6.203a3.008 3.008 0 0 0-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 0 0-2.088 2.09A31.258 31.26 0 0 0 0 12.01a31.258 31.26 0 0 0 .523 5.785 3.008 3.008 0 0 0 2.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 0 0 2.089-2.09 31.258 31.26 0 0 0 .5-5.784 31.258 31.26 0 0 0-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"})))},linkedin:function(e){return d.createElement("svg",g({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),s||(s=d.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})))},twitter:function(e){return d.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),c||(c=d.createElement("path",{d:"M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"})))}},w=e=>{let{kind:t,href:n,size:r=8}=e;if(!n||"mail"===t&&!/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(n))return null;let a=y[t];return(0,u.BX)("a",{className:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:n,children:[(0,u.tZ)("span",{className:"sr-only",children:t}),(0,u.tZ)(a,{className:"fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-".concat(r," w-").concat(r)})]})};var b=w},5969:function(e,t,n){"use strict";var r=n(3454);let a={title:"SiYoon",author:"Lee Si Yoon",headerTitle:"SiYoon's Log",description:"",language:"ko",theme:"system",siteUrl:"https://Lee-Si-Yoon.github.io",siteRepo:"https://Lee-Si-Yoon.github.io",siteLogo:"/static/images/logo.png",image:"/static/images/avatar.png",socialBanner:"/static/images/twitter-card.png",email:"dlduqehd1@gmail.com",github:"https://github.com/Lee-Si-Yoon",locale:"ko",analytics:{plausibleDataDomain:"",simpleAnalytics:!1,umamiWebsiteId:"",googleAnalyticsId:"",posthogAnalyticsId:""},newsletter:{},comment:{provider:"giscus",giscusConfig:{repo:r.env.NEXT_PUBLIC_GISCUS_REPO,repositoryId:r.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,category:r.env.NEXT_PUBLIC_GISCUS_CATEGORY,categoryId:r.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,mapping:"pathname",reactions:"1",metadata:"0",theme:"light",inputPosition:"bottom",lang:"en",darkTheme:"transparent_dark",themeURL:""},utterancesConfig:{repo:r.env.NEXT_PUBLIC_UTTERANCES_REPO,issueTerm:"",label:"",theme:"",darkTheme:""},disqusConfig:{shortname:r.env.NEXT_PUBLIC_DISQUS_SHORTNAME}}};e.exports=a},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,a=n(7273).Z,o=r(n(1720)),i=n(4532),l=n(3353),s=n(1410),c=n(9064),u=n(370),d=n(9955),f=n(4224),p=n(508),h=n(1516),m=n(4266);let g=new Set;function v(e,t,n,r,a){if(a||l.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let a=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+a;if(g.has(o))return;g.add(o)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function y(e){return"string"==typeof e?e:s.formatUrl(e)}let w=o.default.forwardRef(function(e,t){let n,r;let{href:s,as:g,children:w,prefetch:b,passHref:_,replace:x,shallow:Z,scroll:E,locale:k,onClick:T,onMouseEnter:O,onTouchStart:C,legacyBehavior:j=!1}=e,S=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=w,j&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let M=!1!==b,N=o.default.useContext(d.RouterContext),L=o.default.useContext(f.AppRouterContext),I=null!=N?N:L,z=!N,{href:B,as:P}=o.default.useMemo(()=>{if(!N){let e=y(s);return{href:e,as:g?y(g):e}}let[e,t]=i.resolveHref(N,s,!0);return{href:e,as:g?i.resolveHref(N,g):t||e}},[N,s,g]),A=o.default.useRef(B),H=o.default.useRef(P);j&&(r=o.default.Children.only(n));let R=j?r&&"object"==typeof r&&r.ref:t,[X,U,Y]=p.useIntersection({rootMargin:"200px"}),D=o.default.useCallback(e=>{(H.current!==P||A.current!==B)&&(Y(),H.current=P,A.current=B),X(e),R&&("function"==typeof R?R(e):"object"==typeof R&&(R.current=e))},[P,R,B,Y,X]);o.default.useEffect(()=>{I&&U&&M&&v(I,B,P,{locale:k},z)},[P,B,U,k,M,null==N?void 0:N.locale,I,z]);let V={ref:D,onClick(e){j||"function"!=typeof T||T(e),j&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,a,i,s,c,u,d){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!l.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[a?"replace":"push"](n,r,{shallow:i,locale:c,scroll:s}):t[a?"replace":"push"](r||n,{forceOptimisticNavigation:!d})};u?o.default.startTransition(h):h()}(e,I,B,P,x,Z,E,k,z,M)},onMouseEnter(e){j||"function"!=typeof O||O(e),j&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(M||!z)&&v(I,B,P,{locale:k,priority:!0,bypassPrefetchedCheck:!0},z)},onTouchStart(e){j||"function"!=typeof C||C(e),j&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(M||!z)&&v(I,B,P,{locale:k,priority:!0,bypassPrefetchedCheck:!0},z)}};if(c.isAbsoluteUrl(P))V.href=P;else if(!j||_||"a"===r.type&&!("href"in r.props)){let e=void 0!==k?k:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&h.getDomainLocale(P,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);V.href=t||m.addBasePath(u.addLocale(P,e,null==N?void 0:N.defaultLocale))}return j?o.default.cloneElement(r,V):o.default.createElement("a",Object.assign({},S,V),n)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,c=s||!o,[u,d]=r.useState(!1),f=r.useRef(null),p=r.useCallback(e=>{f.current=e},[]);r.useEffect(()=>{if(o){if(c||u)return;let e=f.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:a,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let a=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:a},l.push(n),i.set(n,t),t}(n);return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),i.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!u){let e=a.requestIdleCallback(()=>d(!0));return()=>a.cancelIdleCallback(e)}},[c,n,t,u,f.current]);let h=r.useCallback(()=>{d(!1)},[]);return[p,u,h]};var r=n(1720),a=n(29);let o="function"==typeof IntersectionObserver,i=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9245:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var r,a,o,i,l=n(7320);n(2771),n(6631),n(4259),n(681);var s=n(425),c=n(9008),u=n.n(c),d=n(5969),f=n.n(d),p=n(4298),h=n.n(p);let m=()=>(0,l.BX)(l.HY,{children:[(0,l.tZ)(h(),{strategy:"lazyOnload",src:"https://www.googletagmanager.com/gtag/js?id=".concat(f().analytics.googleAnalyticsId)}),(0,l.tZ)(h(),{strategy:"lazyOnload",id:"ga-script",children:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(f().analytics.googleAnalyticsId,"', {\n              page_path: window.location.pathname,\n            });\n        ")})]}),g=()=>(0,l.BX)(l.HY,{children:[(0,l.tZ)(h(),{strategy:"lazyOnload","data-domain":f().analytics.plausibleDataDomain,src:"https://plausible.io/js/plausible.js"}),(0,l.tZ)(h(),{strategy:"lazyOnload",id:"plausible-script",children:"\n            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }\n        "})]}),v=()=>(0,l.BX)(l.HY,{children:[(0,l.tZ)(h(),{strategy:"lazyOnload",id:"sa-script",children:"\n            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};\n        "}),(0,l.tZ)(h(),{strategy:"lazyOnload",src:"https://scripts.simpleanalyticscdn.com/latest.js"})]}),y=()=>(0,l.tZ)(l.HY,{children:(0,l.tZ)(h(),{async:!0,defer:!0,"data-website-id":f().analytics.umamiWebsiteId,src:"https://umami.example.com/umami.js"})}),w=()=>(0,l.tZ)(l.HY,{children:(0,l.tZ)(h(),{strategy:"lazyOnload",id:"posthog-script",children:'\n            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);\n            posthog.init(\''.concat(f().analytics.posthogAnalyticsId,"',{api_host:'https://app.posthog.com'})\n        ")})}),b=()=>(0,l.BX)(l.HY,{children:[f().analytics.plausibleDataDomain&&(0,l.tZ)(g,{}),f().analytics.simpleAnalytics&&(0,l.tZ)(v,{}),f().analytics.umamiWebsiteId&&(0,l.tZ)(y,{}),f().analytics.googleAnalyticsId&&(0,l.tZ)(m,{}),f().analytics.posthogAnalyticsId&&(0,l.tZ)(w,{})]});var _=[{href:"/blog",title:"Blog"},{href:"/tags",title:"Tags"},{href:"/projects",title:"Projects"},{href:"/about",title:"About"}],x=n(1720);function Z(){return(Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var E=function(e){return x.createElement("svg",Z({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"344.564 330.278 111.737 91.218",width:53.87,height:43.61},e),x.createElement("defs",null,x.createElement("linearGradient",{id:"logo_svg__b",gradientUnits:"userSpaceOnUse",x1:420.97,y1:331.28,x2:420.97,y2:418.5},x.createElement("stop",{style:{stopColor:"#06b6d4",stopOpacity:1},offset:"0%"}),x.createElement("stop",{style:{stopColor:"#67e8f9",stopOpacity:1},offset:"100%"})),x.createElement("linearGradient",{id:"logo_svg__d",gradientUnits:"userSpaceOnUse",x1:377.89,y1:331.28,x2:377.89,y2:418.5},x.createElement("stop",{style:{stopColor:"#06b6d4",stopOpacity:1},offset:"0%"}),x.createElement("stop",{style:{stopColor:"#67e8f9",stopOpacity:1},offset:"100%"})),r||(r=x.createElement("path",{d:"M453.3 331.28v28.57l-64.66 58.65v-30.08l64.66-57.14Z",id:"logo_svg__a"})),a||(a=x.createElement("path",{d:"M410.23 331.28v28.57l-64.67 58.65v-30.08l64.67-57.14Z",id:"logo_svg__c"}))),o||(o=x.createElement("use",{xlinkHref:"#logo_svg__a",fill:"url(#logo_svg__b)"})),i||(i=x.createElement("use",{xlinkHref:"#logo_svg__c",fill:"url(#logo_svg__d)"})))},k=n(6250),T=n(6116),O=n(5);function C(){return(0,l.tZ)("footer",{children:(0,l.BX)("div",{className:"mt-16 flex flex-col items-center",children:[(0,l.BX)("div",{className:"mb-3 flex space-x-4",children:[(0,l.tZ)(O.Z,{kind:"mail",href:"mailto:".concat(f().email),size:"6"}),(0,l.tZ)(O.Z,{kind:"github",href:f().github,size:"6"}),(0,l.tZ)(O.Z,{kind:"facebook",href:f().facebook,size:"6"}),(0,l.tZ)(O.Z,{kind:"youtube",href:f().youtube,size:"6"}),(0,l.tZ)(O.Z,{kind:"linkedin",href:f().linkedin,size:"6"}),(0,l.tZ)(O.Z,{kind:"twitter",href:f().twitter,size:"6"})]}),(0,l.BX)("div",{className:"mb-8 flex space-x-2 text-sm text-gray-500 dark:text-gray-400",children:[(0,l.tZ)("div",{children:f().author}),(0,l.tZ)("div",{children:" • "}),(0,l.tZ)("div",{children:"\xa9 ".concat(new Date().getFullYear())}),(0,l.tZ)("div",{children:" • "}),(0,l.tZ)(k.Z,{href:"/",children:f().title})]})]})})}let j=()=>{let[e,t]=(0,x.useState)(!1),n=()=>{t(e=>(e?document.body.style.overflow="auto":document.body.style.overflow="hidden",!e))};return(0,l.BX)("div",{className:"sm:hidden",children:[(0,l.tZ)("button",{type:"button",className:"ml-1 mr-1 h-8 w-8 rounded py-1","aria-label":"Toggle Menu",onClick:n,children:(0,l.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:(0,l.tZ)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,l.BX)("div",{className:"fixed left-0 top-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ".concat(e?"translate-x-0":"translate-x-full"),children:[(0,l.tZ)("div",{className:"flex justify-end",children:(0,l.tZ)("button",{type:"button",className:"mr-5 mt-11 h-8 w-8 rounded","aria-label":"Toggle Menu",onClick:n,children:(0,l.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:(0,l.tZ)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})}),(0,l.tZ)("nav",{className:"fixed mt-8 h-full",children:_.map(e=>(0,l.tZ)("div",{className:"px-12 py-4",children:(0,l.tZ)(k.Z,{href:e.href,className:"text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",onClick:n,children:e.title})},e.title))})]})]})},S=()=>{let[e,t]=(0,x.useState)(!1),{theme:n,setTheme:r,resolvedTheme:a}=(0,s.F)();return(0,x.useEffect)(()=>t(!0),[]),(0,l.tZ)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4",onClick:()=>r("dark"===n||"dark"===a?"light":"dark"),children:(0,l.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:e&&("dark"===n||"dark"===a)?(0,l.tZ)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"}):(0,l.tZ)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})})})},M=e=>{let{children:t}=e;return(0,l.tZ)(T.Z,{children:(0,l.BX)("div",{className:"flex h-screen flex-col justify-between",children:[(0,l.BX)("header",{className:"flex items-center justify-between py-10",children:[(0,l.tZ)("div",{children:(0,l.tZ)(k.Z,{href:"/","aria-label":f().headerTitle,children:(0,l.BX)("div",{className:"flex items-center justify-between",children:[(0,l.tZ)("div",{className:"mr-3",children:(0,l.tZ)(E,{})}),"string"==typeof f().headerTitle?(0,l.tZ)("div",{className:"hidden h-6 text-2xl font-semibold sm:block",children:f().headerTitle}):f().headerTitle]})})}),(0,l.BX)("div",{className:"flex items-center text-base leading-5",children:[(0,l.tZ)("div",{className:"hidden sm:block",children:_.map(e=>(0,l.tZ)(k.Z,{href:e.href,className:"p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4",children:e.title},e.title))}),(0,l.tZ)(S,{}),(0,l.tZ)(j,{})]})]}),(0,l.tZ)("main",{className:"mb-auto",children:t}),(0,l.tZ)(C,{})]})})};var N=n(1163);function L(e){let{Component:t,pageProps:n}=e;return(0,l.BX)(s.f,{attribute:"class",defaultTheme:f().theme,children:[(0,l.tZ)(u(),{children:(0,l.tZ)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"})}),!1,(0,l.tZ)(b,{}),(0,l.tZ)(M,{children:(0,l.tZ)(t,{...n})})]})}n(3454).env.SOCKET},681:function(){},4259:function(){},6631:function(){},2771:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,a=e.exports={};function o(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var s=[],c=!1,u=-1;function d(){c&&r&&(c=!1,r.length?s=r.concat(s):u=-1,s.length&&f())}function f(){if(!c){var e=l(d);c=!0;for(var t=s.length;t;){for(r=s,s=[];++u<t;)r&&r[u].run();u=-1,t=s.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||c||l(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}},i=!0;try{t[e](o,o.exports,r),i=!1}finally{i&&delete n[e]}return o.exports}r.ab="//";var a=r(229);e.exports=a}()},9008:function(e,t,n){e.exports=n(2636)},1664:function(e,t,n){e.exports=n(5569)},1163:function(e,t,n){e.exports=n(6885)},4298:function(e,t,n){e.exports=n(5442)},6584:function(e,t,n){"use strict";n.r(t),n.d(t,{Fragment:function(){return r.HY},jsx:function(){return o},jsxDEV:function(){return o},jsxs:function(){return o}});var r=n(6400),a=0;function o(e,t,n,o,i,l){var s,c,u={};for(c in t)"ref"==c?s=t[c]:u[c]=t[c];var d={type:e,props:u,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--a,__source:i,__self:l};if("function"==typeof e&&(s=e.defaultProps))for(c in s)void 0===u[c]&&(u[c]=s[c]);return r.YM.vnode&&r.YM.vnode(d),d}},7320:function(e,t,n){"use strict";n.d(t,{BX:function(){return r.jsxs},HY:function(){return r.Fragment},tZ:function(){return r.jsx}}),n(1720);var r=n(6584)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);