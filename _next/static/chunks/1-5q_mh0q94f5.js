(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22016,(e,t,n)=>{"use strict";e.i(47167),Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return g},useLinkStatus:function(){return y}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let a=e.r(90809),i=e.r(43476),l=a._(e.r(71645)),s=e.r(95057),c=e.r(8372),u=e.r(18581),f=e.r(18967),d=e.r(5550),m=e.r(88540),p=e.r(91949),h=e.r(73668),v=e.r(9396);function g(t){var n;let r,o,a,[g,y]=(0,l.useOptimistic)(p.IDLE_LINK_STATUS),b=(0,l.useRef)(null),{href:x,as:E,children:T,prefetch:R=null,passHref:L,replace:A,shallow:S,scroll:P,onClick:_,onMouseEnter:M,onTouchStart:N,legacyBehavior:U=!1,onNavigate:C,transitionTypes:I,ref:j,unstable_dynamicOnHover:B,...k}=t;r=T,U&&("string"==typeof r||"number"==typeof r)&&(r=(0,i.jsx)("a",{children:r}));let F=l.default.useContext(c.AppRouterContext),D=!1!==R,q=!1===R?"none":!0===R?"full":"auto",z="none"!==q?"auto"===q?v.FetchStrategy.PPR:v.FetchStrategy.Full:v.FetchStrategy.PPR,O="string"==typeof(n=E||x)?n:(0,s.formatUrl)(n);if(U){if(r?.$$typeof===Symbol.for("react.lazy"))throw Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.");o=l.default.Children.only(r)}let X=U?o&&"object"==typeof o&&o.ref:j,$,H=l.default.useCallback(e=>(null!==F&&(b.current=(0,p.mountLinkInstance)(e,O,F,z,D,y,$)),()=>{b.current&&((0,p.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,p.unmountPrefetchableInstance)(e)}),[D,O,F,z,y,$]),G={ref:(0,u.useMergedRef)(H,X),onClick(t){U||"function"!=typeof _||_(t),U&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!F||t.defaultPrevented||function(t,n,r,o,a,i,l,s="none"){if("u">typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(n)){o&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{navigate:f}=e.r(32916);f(n,o?"replace":"push",!1===a?m.ScrollBehavior.NoScroll:m.ScrollBehavior.Default,r.current,l,s)}}(t,O,b,A,P,C,I,q)},onMouseEnter(e){U||"function"!=typeof M||M(e),U&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),F&&D&&(0,p.onNavigationIntent)(e.currentTarget,!0===B)},onTouchStart:function(e){U||"function"!=typeof N||N(e),U&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),F&&D&&(0,p.onNavigationIntent)(e.currentTarget,!0===B)}};return(0,f.isAbsoluteUrl)(O)?G.href=O:U&&!L&&("a"!==o.type||"href"in o.props)||(G.href=(0,d.addBasePath)(O)),a=U?l.default.cloneElement(o,G):(0,i.jsx)("a",{...k,...G,children:r}),(0,i.jsx)(w.Provider,{value:g,children:a})}let w=(0,l.createContext)(p.IDLE_LINK_STATUS),y=()=>(0,l.useContext)(w);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},18581,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return o}});let r=e.r(71645);function o(e,t){let n=(0,r.useRef)(null),o=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(n.current=a(e,r)),t&&(o.current=a(t,r))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},95057,(e,t,n)=>{"use strict";e.i(47167),Object.defineProperty(n,"__esModule",{value:!0});var r={formatUrl:function(){return l},formatWithValidation:function(){return c},urlObjectKeys:function(){return s}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let a=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:n}=e,r=e.protocol||"",o=e.pathname||"",l=e.hash||"",s=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:n&&(c=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(c+=":"+e.port)),s&&"object"==typeof s&&(s=String(a.urlQueryToSearchParams(s)));let u=e.search||s&&`?${s}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||i.test(r))&&!1!==c?(c="//"+(c||""),o&&"/"!==o[0]&&(o="/"+o)):c||(c=""),l&&"#"!==l[0]&&(l="#"+l),u&&"?"!==u[0]&&(u="?"+u),o=o.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${r}${c}${o}${u}${l}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return l(e)}},73668,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return a}});let r=e.r(18967),o=e.r(52817);function a(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(e){return!1}}},18967,(e,t,n)=>{"use strict";e.i(47167),Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return x},MissingStaticPage:function(){return b},NormalizeError:function(){return w},PageNotFoundError:function(){return y},SP:function(){return h},ST:function(){return v},WEB_VITALS:function(){return a},execOnce:function(){return i},getDisplayName:function(){return f},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return s},isResSent:function(){return d},loadGetInitialProps:function(){return p},normalizeRepeatedSlashes:function(){return m},stringifyError:function(){return E}};for(var o in r)Object.defineProperty(n,o,{enumerable:!0,get:r[o]});let a=["CLS","FCP","INP","LCP","TTFB"];function i(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&l.test(e)};function c(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function m(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function p(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await p(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&d(n))return r;if(!r)throw Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`);return r}let h="u">typeof performance,v=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class w extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class b extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class x extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function E(e){return JSON.stringify({message:e.message,stack:e.stack})}},18566,(e,t,n)=>{t.exports=e.r(76562)},2576,e=>{"use strict";var t=e.i(43476),n=e.i(22016),r=e.i(18566),o=e.i(71645);e.s(["CloseMenusOnNavigate",0,function(){let e=(0,r.usePathname)();return(0,o.useEffect)(()=>{document.querySelectorAll("[popover]").forEach(e=>{try{e.matches(":popover-open")&&e.hidePopover()}catch{}})},[e]),null},"MenuLink",0,function({href:e,className:o,children:a,exact:i=!1,marks:l}){let s=(0,r.usePathname)(),c=i?s===e:s===e||s.startsWith(e);return(0,t.jsx)(n.default,{href:e,className:o,"aria-current":c?"page":void 0,...l,children:a})}])},52899,e=>{"use strict";var t=e.i(43476),n=e.i(18566),r=e.i(71645);let o={globe:1,cube:2,stack:3,ring:4,maze:5,star:6,frame:7,stairs:8,arm:9,sun:10,tunnel:11,bars:12},a={shape:0,src:"",meta:[1,1,1,1],cover:0,box:[0,0,1,1],ink:[1,1,1]},i=`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform float uTime, uMix, uBurst;
uniform float uSA, uSB, uFA, uFB;
uniform vec4 uRA, uRB, uMA, uMB;
uniform vec3 uIA, uIB, uPtr;
uniform vec2 uRot;
uniform sampler2D uTA, uTB;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
// The ordered pattern that turns a brightness into dots.
float b2(vec2 a) { a = floor(a); return fract(a.x / 2. + a.y * a.y * .75); }
float bayer(vec2 a) { return b2(.25 * a) * .0625 + b2(.5 * a) * .25 + b2(a); }

float sdBox(vec3 p, vec3 b) { vec3 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, max(q.y, q.z)), 0.); }
float sdTorus(vec3 p, vec2 t) { vec2 q = vec2(length(p.xz) - t.x, p.y); return length(q) - t.y; }
float sdCaps(vec3 p, vec3 a, vec3 b, float r) {
  vec3 pa = p - a, ba = b - a;
  return length(pa - ba * clamp(dot(pa, ba) / dot(ba, ba), 0., 1.)) - r;
}
float sdFrame(vec3 p, vec3 b, float e) {
  p = abs(p) - b;
  vec3 q = abs(p + e) - e;
  return min(min(
    length(max(vec3(p.x, q.y, q.z), 0.)) + min(max(p.x, max(q.y, q.z)), 0.),
    length(max(vec3(q.x, p.y, q.z), 0.)) + min(max(q.x, max(p.y, q.z)), 0.)),
    length(max(vec3(q.x, q.y, p.z), 0.)) + min(max(q.x, max(q.y, p.z)), 0.));
}
float smin(float a, float b, float k) { float h = clamp(.5 + .5 * (b - a) / k, 0., 1.); return mix(b, a, h) - k * h * (1. - h); }

// From the screen's space into the turning object's own space.
vec3 spin(vec3 v) {
  float cp = cos(uRot.y), sp = sin(uRot.y), cy = cos(uRot.x), sy = sin(uRot.x);
  v = vec3(v.x, cp * v.y + sp * v.z, cp * v.z - sp * v.y);
  return vec3(cy * v.x - sy * v.z, v.y, sy * v.x + cy * v.z);
}

// How far a point is from the surface of each solid.
float map(vec3 p, float s) {
  if (s < 1.5) return length(p) - .9;
  if (s < 2.5) return sdBox(p, vec3(.55)) - .03;
  if (s < 3.5) {
    float d = sdBox(p - vec3(0., -.48, 0.), vec3(.72, .13, .72));
    d = min(d, sdBox(p - vec3(.07, 0., -.05), vec3(.72, .13, .72)));
    d = min(d, sdBox(p - vec3(-.06, .48, .07), vec3(.72, .13, .72)));
    return d - .02;
  }
  if (s < 4.5) return sdTorus(p.xzy, vec2(.64, .24));
  if (s < 5.5) {
    vec2 g = p.xz / .3;
    vec2 f = fract(g) - .5;
    float w = hash(floor(g)) > .5 ? abs(f.x) : abs(f.y);
    float d = max(max((w - .13) * .3, abs(p.y - .05) - .2), max(abs(p.x), abs(p.z)) - .9);
    return min(d, sdBox(p + vec3(0., .22, 0.), vec3(.9, .07, .9)));
  }
  if (s < 6.5) {
    float a = length(p.yz) - .3 * (1. - abs(p.x) / 1.05);
    float b = length(p.xz) - .3 * (1. - abs(p.y) / 1.05);
    // A third spike, front to back, so the star is never seen edge-on as a sliver.
    float c = length(p.xy) - .3 * (1. - abs(p.z) / 1.05);
    return max(smin(smin(a, b, .22), c, .22), length(p) - 1.05) * .8;
  }
  if (s < 7.5) return sdFrame(p, vec3(.6), .085);
  if (s < 8.5) {
    float d = 9.;
    for (int i = 0; i < 4; i++) {
      float f = float(i);
      d = min(d, sdBox(p - vec3(-.6 + .4 * f, -.66 + .16 * (f + 1.), 0.), vec3(.2, .16 * (f + 1.), .5)));
    }
    return d;
  }
  // A robot arm on its plate. Its two joints move a little.
  float t = uTime * .9;
  float a1 = .3 + .22 * sin(t), a2 = a1 + 1.25 + .3 * sin(t + 1.2);
  vec3 j1 = vec3(0., -.42, 0.);
  vec3 j2 = j1 + .64 * vec3(sin(a1), cos(a1), 0.);
  vec3 j3 = j2 + .58 * vec3(sin(a2), cos(a2), 0.);
  float d = sdBox(p + vec3(0., .84, 0.), vec3(.48, .05, .48));
  d = min(d, sdCaps(p, vec3(0., -.78, 0.), j1, .17));
  d = min(d, sdCaps(p, j1, j2, .1));
  d = min(d, sdCaps(p, j2, j3, .08));
  d = min(d, length(p - j2) - .14);
  return min(d, sdBox(p - j3, vec3(.13, .05, .13)));
}

// How bright a solid is where a straight line from this dot meets it.
float solid(vec2 q, float s) {
  if (dot(q, q) > 2.6) return 0.;
  vec3 ro = spin(vec3(q, 3.)), rd = spin(vec3(0., 0., -1.));
  float t = 1.3, hit = 0.;
  for (int i = 0; i < 48; i++) {
    float d = map(ro + rd * t, s);
    if (d < .005) { hit = 1.; break; }
    t += d * .72;
    if (t > 4.8) break;
  }
  if (hit < .5) return 0.;
  vec3 p = ro + rd * t;
  vec2 e = vec2(.01, 0.);
  vec3 n = normalize(vec3(
    map(p + e.xyy, s) - map(p - e.xyy, s),
    map(p + e.yxy, s) - map(p - e.yxy, s),
    map(p + e.yyx, s) - map(p - e.yyx, s)));
  float dif = max(dot(n, spin(normalize(vec3(-.5, .7, .5)))), 0.);
  float rim = pow(1. - max(dot(n, -rd), 0.), 2.);
  if (s < 1.5) {
    // The brain: a net of lines over the ball, brightest where lines meet.
    float u1 = acos(clamp(n.y, -1., 1.)) * 2.546;
    float u2 = acos(clamp(dot(n, vec3(.94, .34, 0.)), -1., 1.)) * 2.546;
    float u3 = acos(clamp(dot(n, vec3(-.47, .34, .81)), -1., 1.)) * 2.546;
    float l1 = 1. - smoothstep(.05, .11, abs(fract(u1) - .5));
    float l2 = 1. - smoothstep(.05, .11, abs(fract(u2) - .5));
    float l3 = 1. - smoothstep(.05, .11, abs(fract(u3) - .5));
    float net = max(l1, max(l2, l3));
    return clamp(.04 + .28 * dif + net * (.3 + .5 * dif) + step(1.4, l1 + l2 + l3) * .6 + .15 * rim, 0., 1.);
  }
  return clamp(.08 + .8 * dif + .22 * rim, 0., 1.);
}

// The three flat drawings: a half sun, a tunnel and a row of buildings.
float flat2(vec2 c, float s, vec4 R) {
  if (s < 10.5) {
    vec2 o = c - vec2(R.x, R.y - R.w);
    float r = length(o) / min(R.z, 2. * R.w);
    return o.y > 0. ? pow(clamp(1. - r, 0., 1.), 1.25) : 0.;
  }
  if (s < 11.5) {
    vec2 o = (c - R.xy) / min(R.z, R.w);
    float r = length(o);
    float ring = smoothstep(.2, .45, abs(fract(.8 / (r + .1) + uTime * 1.4) - .5));
    return ring * smoothstep(.08, .6, r) * (1. - smoothstep(.85, 1.3, r)) * .85;
  }
  vec2 o = c - vec2(R.x - R.z, R.y - R.w);
  if (o.x < 0. || o.x > 2. * R.z || o.y < 0.) return 0.;
  float wide = max(3., floor(R.z / 9.));
  if (mod(o.x, wide) < 1.) return 0.;
  float i = floor(o.x / wide);
  if (o.y > (.2 + .8 * hash(vec2(i, 7.))) * 2. * R.w) return 0.;
  float lit = mod(floor(o.x / 2.) + floor(o.y / 2.), 2.) > .5 ? 1. : .5;
  return (.3 + .6 * hash(vec2(i, 3.))) * lit;
}

float shade(vec2 c, float s, vec4 R, sampler2D tex, vec4 M, float F) {
  if (s > 12.5) {
    if (abs(c.x - R.x) > R.z || abs(c.y - R.y) > R.w) return 0.;
    float k = F > .5 ? max(R.z / M.x, R.w) : min(R.z / M.x, R.w);
    vec2 uv = vec2((c.x - R.x) / (k * M.x), (R.y - c.y) / k) * .5 + .5;
    if (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) return 0.;
    // A picture with many frames is a short loop: Curl waves.
    float f = mod(floor(uTime * 12.), M.w);
    vec2 fr = vec2(mod(f, M.y), floor(f / M.y));
    return texture2D(tex, (clamp(uv, .004, .996) + fr) / vec2(M.y, M.z)).r;
  }
  if (s > 9.5) return flat2(c, s, R);
  // The wide solids (the maze, the stack, the star) are drawn a little
  // smaller, so they stay inside their place whichever way they are turned.
  float fit = s > 4.5 && s < 5.5 ? 1.32 : (s > 2.5 && s < 3.5) || (s > 5.5 && s < 6.5) ? 1.12 : 1.;
  return solid((c - R.xy) / min(R.z, R.w) * fit, s);
}

void main() {
  vec2 c = floor(gl_FragCoord.xy) + .5;
  float n1 = hash(c), n2 = hash(c + 31.7);
  vec2 jit = vec2(n1, n2) - .5;
  // Dots near the pointer are pushed away from it.
  vec2 dp = c - uPtr.xy;
  float pw = uPtr.z * exp(-dot(dp, dp) / 320.);
  vec2 at = c - normalize(dp + .001) * pw * 10. + jit * (pw * 8. + uBurst * 46.);
  // Each dot changes from the old object to the new one at its own moment.
  float m = uMix;
  float b = 0.;
  vec3 ink = uIA;
  if (m < .25 + .5 * n2) {
    if (uSA > .5) b = shade(at + jit * 90. * m * m, uSA, uRA, uTA, uMA, uFA) * (1. - smoothstep(.3, .8, m));
  } else {
    float w = 1. - m;
    if (uSB > .5) b = shade(at + jit * 90. * w * w, uSB, uRB, uTB, uMB, uFB) * smoothstep(.15, .7, m);
    ink = uIB;
  }
  b *= 1. - .55 * uBurst * n1;
  float on = step(bayer(c) + .03, b);
  gl_FragColor = vec4(ink * on, on);
}
`,l=e=>String(e).padStart(2,"0");e.s(["Stage",0,function(){let e=(0,n.usePathname)(),s=(0,r.useRef)(null),c=(0,r.useRef)(null),u=(0,r.useRef)(null),[f,d]=(0,r.useState)({shots:[],at:-1,beat:0});(0,r.useEffect)(()=>{if(!s.current||!c.current)return;let e=function(e,t,n){let r=document.documentElement;if(!r.classList.contains("film"))return null;let l=window.matchMedia("(prefers-reduced-motion: reduce)"),s=function(e,t){let n=e.getContext("webgl",{alpha:!0,antialias:!1,powerPreference:"low-power"});if(!n)return null;let r=(e,t)=>{let r=n.createShader(e);return r?(n.shaderSource(r,t),n.compileShader(r),n.getShaderParameter(r,n.COMPILE_STATUS))?r:(console.warn("The stage could not be drawn:",n.getShaderInfoLog(r)),null):null},o=r(n.VERTEX_SHADER,"attribute vec2 p; void main() { gl_Position = vec4(p, 0., 1.); }"),l=r(n.FRAGMENT_SHADER,i),s=n.createProgram();if(!o||!l||!s||(n.attachShader(s,o),n.attachShader(s,l),n.linkProgram(s),!n.getProgramParameter(s,n.LINK_STATUS)))return null;n.useProgram(s),n.bindBuffer(n.ARRAY_BUFFER,n.createBuffer()),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),n.STATIC_DRAW);let c=n.getAttribLocation(s,"p");n.enableVertexAttribArray(c),n.vertexAttribPointer(c,2,n.FLOAT,!1,0,0),n.disable(n.DEPTH_TEST),n.disable(n.BLEND),n.clearColor(0,0,0,0);let u={time:n.getUniformLocation(s,"uTime"),mix:n.getUniformLocation(s,"uMix"),burst:n.getUniformLocation(s,"uBurst"),sa:n.getUniformLocation(s,"uSA"),sb:n.getUniformLocation(s,"uSB"),fa:n.getUniformLocation(s,"uFA"),fb:n.getUniformLocation(s,"uFB"),ra:n.getUniformLocation(s,"uRA"),rb:n.getUniformLocation(s,"uRB"),ma:n.getUniformLocation(s,"uMA"),mb:n.getUniformLocation(s,"uMB"),ia:n.getUniformLocation(s,"uIA"),ib:n.getUniformLocation(s,"uIB"),ptr:n.getUniformLocation(s,"uPtr"),rot:n.getUniformLocation(s,"uRot")};n.uniform1i(n.getUniformLocation(s,"uTA"),0),n.uniform1i(n.getUniformLocation(s,"uTB"),1);let f=new Map,d=n.createTexture();function m(e){if(!e)return d;let t=f.get(e);if(t)return t;let r=n.createTexture();if(!r)return d;f.set(e,r),n.bindTexture(n.TEXTURE_2D,r),n.texImage2D(n.TEXTURE_2D,0,n.LUMINANCE,1,1,0,n.LUMINANCE,n.UNSIGNED_BYTE,new Uint8Array([0]));let o=new Image;return o.onload=()=>{n.bindTexture(n.TEXTURE_2D,r),n.texImage2D(n.TEXTURE_2D,0,n.LUMINANCE,n.LUMINANCE,n.UNSIGNED_BYTE,o),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),v.src===e&&g>=1&&(h=a,g=0,w=performance.now()),A()},o.src=e,r}n.bindTexture(n.TEXTURE_2D,d),n.texImage2D(n.TEXTURE_2D,0,n.LUMINANCE,1,1,0,n.LUMINANCE,n.UNSIGNED_BYTE,new Uint8Array([0]));let p=4,h=a,v=a,g=1,w=0,y=0,b=0,x=0,E=0,T={x:-999,y:-999,power:0,want:0,yaw:0,pitch:0},R=t=>[t[0]/p,e.height-t[1]/p,t[2]/p,t[3]/p];function L(r){var o;let a;if(y=0,document.hidden)return;if(r-b<30){y=requestAnimationFrame(L);return}b=r;let i=t();g<1&&(g=i?1:Math.min(1,(r-w)/900)),x=i||x<.02?0:.9*x,T.power+=((i?0:T.want)-T.power)*.15,o=i?0:r/1e3,a=g*g*(3-2*g),n.clear(n.COLOR_BUFFER_BIT),n.uniform1f(u.time,o),n.uniform1f(u.mix,a),n.uniform1f(u.burst,x),n.uniform1f(u.sa,h.shape),n.uniform1f(u.sb,v.shape),n.uniform1f(u.fa,h.cover),n.uniform1f(u.fb,v.cover),n.uniform4fv(u.ra,R(h.box)),n.uniform4fv(u.rb,R(v.box)),n.uniform4fv(u.ma,h.meta),n.uniform4fv(u.mb,v.meta),n.uniform3fv(u.ia,h.ink),n.uniform3fv(u.ib,v.ink),n.uniform3f(u.ptr,T.x/p,e.height-T.y/p,T.power),n.uniform2f(u.rot,.45*o+E+T.yaw+(T.x>-900?(T.x/window.innerWidth-.5)*.7:0),.5+T.pitch+(T.x>-900?(T.y/window.innerHeight-.5)*.35:0)),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,13===h.shape?m(h.src):d),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,13===v.shape?m(v.src):d),n.drawArrays(n.TRIANGLES,0,3);let l=0===v.shape&&g>=1;i||l||(y=requestAnimationFrame(L))}function A(){y||(y=requestAnimationFrame(L))}return{resize(){p=window.innerWidth<720?3:4;let t=Math.ceil(window.innerWidth/p),r=Math.ceil(window.innerHeight/p);(e.width!==t||e.height!==r)&&(e.width=t,e.height=r,n.viewport(0,0,t,r)),e.style.width=`${t*p}px`,e.style.height=`${r*p}px`,A()},show(e){e.shape===v.shape&&e.src===v.src?v=e:(h=g>.5?v:h,v=e,g=0,w=performance.now(),13===e.shape&&m(e.src)),A()},point(e,t){T.x=e,T.y=t,T.want=1},rest(){T.want=0},turn(e,t){T.yaw+=.012*e,T.pitch=Math.max(-.9,Math.min(.9,T.pitch+.008*t)),A()},scatter(){t()||(x=1,A())},scroll(e){t()||(E=.0032*e)},wake:A,stop(){cancelAnimationFrame(y),y=0}}}(e,()=>l.matches);s||r.classList.add("nogl");let c=[],u=-2,f=-1,d=null,m=null,p=!1,h=!1,v=null,g=document.getElementById("menu");function w(){let e=window.innerHeight,t=Math.round(.62*e),n=[...document.querySelectorAll(".paper")];for(let e of c){let t=e.el.firstElementChild;e.flow=!t||"fixed"!==getComputedStyle(t).position,e.el.classList.toggle("flow",e.flow),e.flow&&(e.el.style.height="")}for(let r of(c.forEach((r,o)=>{var a,i;if(r.flow)return;let l=c.slice(o+1).find(e=>!e.flow),s=!l||(a=r.el,i=l.el,n.some(e=>a.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING&&(!i||e.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_FOLLOWING)))||c.slice(o+1,c.indexOf(l)).length>0;r.step=t,r.el.style.height=`${(r.beats.length-1)*t+(s?e:t)}px`}),c)){let e=r.el.getBoundingClientRect();r.top=e.top+window.scrollY,r.height=e.height}}function y(){var e;let n,r=u>=0?c[u]:null,i=null,l=null;if(p&&g)i=(d&&g.contains(d)?d:g.querySelector("[aria-current='page'][data-set]"))??g,l=g.querySelector("[data-obj]"),t.dataset.g="black",t.dataset.tone=i?.dataset.tone??"";else if(r){let e=r.beats[f]?.[0],n=e?.dataset.g??r.g,o=e?.dataset.tone??r.tone;r.el.dataset.g=n,o?r.el.dataset.tone=o:delete r.el.dataset.tone,t.dataset.g=n,t.dataset.tone=o||(r.el.parentElement?.closest("[data-tone]")?.dataset.tone??"");let a=(d&&r.el.contains(d)?d:null)??r.el.querySelector("input[data-set]:checked"),s=e&&(e.dataset.shape||e.dataset.pic)?e:r.el;i=a??s,l=e?.querySelector("[data-obj]")??[...r.el.querySelectorAll("[data-obj]")].find(e=>!e.closest("[data-beat]"))??null}else t.dataset.g="black";for(let e of document.querySelectorAll(".picked"))e.classList.remove("picked");d&&d.classList.add("picked");let h=i?.hasAttribute("data-set")?i.dataset.tone:void 0;for(let e of document.querySelectorAll("[data-obj][data-tone]"))e===l&&h||delete e.dataset.tone;if(l&&h&&(l.dataset.tone=h),m=null,!s)return;if(!i||!l||!(i.dataset.shape||i.dataset.pic))return void s.show(a);let v=l.getBoundingClientRect();v.width<2||v.height<2?s.show(a):(m=l,s.show({shape:i.dataset.pic?13:o[i.dataset.shape??""]??0,src:i.dataset.pic??"",meta:i.dataset.meta?.split(" ").map(Number)??[1,1,1,1],cover:+("cover"===i.dataset.fit),box:[v.left+v.width/2,v.top+v.height/2,v.width/2,v.height/2],ink:(e=getComputedStyle(l).color,[(n=e.match(/[\d.]+/g)?.map(Number)??[255,255,255])[0]/255,n[1]/255,n[2]/255])}))}function b(){h=!1;let e=window.scrollY,t=window.innerHeight,r=-1;for(let n=0;n<c.length;n++){let o=c[n];if(!o.flow&&!(o.top+o.height<=e+1)){o.top<e+t&&(r=n);break}}let o=0;if(r>=0){let t=c[r];o=Math.max(0,Math.min(t.beats.length-1,Math.floor((e-t.top)/t.step)))}v?.isConnected||(v=document.querySelector(".hud"));let a=r>=0?(e-c[r].top)/Math.max(1,c[r].height):0;v?.style.setProperty("--through",Math.max(.04,Math.min(1,a)).toFixed(3)),s?.scroll(e),(r!==u||o!==f)&&(r!==u&&(d=null),u=r,f=o,c.forEach((e,t)=>{let n=e.flow||t===u;for(let t of(e.el.classList.toggle("on",n),e.beats.forEach((t,r)=>{for(let o of t)o.classList.toggle("on",e.flow||n&&r===f)}),e.stays))t.el.classList.toggle("in",e.flow||n&&f>=t.from&&f<t.until);n||e.flow||(e.el.dataset.g=e.g,e.tone?e.el.dataset.tone=e.tone:delete e.el.dataset.tone)}),y(),n({shots:c.filter(e=>!e.flow).map(e=>({title:e.title,beats:e.beats.length})),at:u<0?-1:c.slice(0,u).filter(e=>!e.flow).length,beat:f}))}let x=()=>{h||(h=!0,requestAnimationFrame(b))},E={w:window.innerWidth,h:window.innerHeight},T=()=>{s?.resize();let e=window.innerWidth,t=window.innerHeight;(e!==E.w||Math.abs(t-E.h)>130)&&(E={w:e,h:t},w()),u=-2,b()},R=()=>y(),L=e=>{if(e.altKey||e.ctrlKey||e.metaKey||p)return;let t=e.target instanceof HTMLElement?e.target:null;if(t?.closest("input, textarea, select, [contenteditable], dialog"))return;let n=["ArrowDown","PageDown"," "].includes(e.key)&&!e.shiftKey,r=["ArrowUp","PageUp"].includes(e.key)||" "===e.key&&e.shiftKey;(n||r)&&!(" "===e.key&&t?.closest("a, button, summary, label"))&&function(e){if(u<0)return!1;let t=window.scrollY,n=c.filter(e=>!e.flow).flatMap(e=>e.beats.map((t,n)=>e.top+n*e.step)),r=e>0?n.find(e=>e>t+2):[...n].reverse().find(e=>e<t-2);return!(void 0===r||Math.abs(r-t)>window.innerHeight+2)&&(window.scrollTo({top:r,behavior:"instant"}),!0)}(n?1:-1)&&e.preventDefault()},A=e=>{let t=e.target instanceof HTMLElement?e.target:null;if(!t||!t.matches(":focus-visible"))return;let n=c.findIndex(e=>e.el.contains(t));if(n<0||c[n].flow)return;let r=Number(t.closest("[data-beat]")?.dataset.beat??(n===u?f:0));(n!==u||r!==f)&&window.scrollTo({top:c[n].top+r*c[n].step+1,behavior:"instant"})},S=e=>{let t=e.target instanceof Element?e.target.closest("[data-set]"):null;!t||t===d||t instanceof HTMLInputElement&&!t.checked||(d=t,y())},P=null,_=e=>{let t=e.target instanceof Element?e.target:null;if(!t||!m||!m.closest("[data-shot], #menu")?.contains(t)||t.closest("a, button, input, select, textarea, summary, label, [data-set]"))return;let n=m.getBoundingClientRect();!(e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom)||((e,t)=>{let n=document,r=n.caretPositionFromPoint?.(e,t)?.offsetNode??n.caretRangeFromPoint?.(e,t)?.startContainer;if(!r||r.nodeType!==Node.TEXT_NODE)return!1;let o=document.createRange();return o.selectNodeContents(r),[...o.getClientRects()].some(n=>e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom)})(e.clientX,e.clientY)||(P={x:e.clientX,y:e.clientY,moved:0})},M=e=>{P&&e.preventDefault()},N=e=>{if("mouse"===e.pointerType&&s?.point(e.clientX,e.clientY),!P)return;let t=e.clientX-P.x,n=e.clientY-P.y;P={x:e.clientX,y:e.clientY,moved:P.moved+Math.abs(t)+Math.abs(n)},s?.turn(t,n)},U=()=>{P&&P.moved<5&&s?.scatter(),P=null},C=()=>{P=null},I=()=>s?.rest(),j=()=>{document.hidden||s?.wake()},B=e=>{p="open"===e.newState,d=null,y()},k=()=>s?.wake();return s?.resize(),window.addEventListener("scroll",x,{passive:!0}),window.addEventListener("resize",T),window.addEventListener("keydown",L),window.addEventListener("pointermove",N,{passive:!0}),window.addEventListener("pointerup",U),window.addEventListener("pointercancel",C),document.addEventListener("pointerdown",_),document.addEventListener("selectstart",M),document.addEventListener("pointerover",S),document.addEventListener("focusin",S),document.addEventListener("change",S),document.addEventListener("focusin",A),document.addEventListener("mouseleave",I),document.addEventListener("visibilitychange",j),document.addEventListener("toggle",R,!0),g?.addEventListener("toggle",B),l.addEventListener("change",k),{scan:function(){for(let e of(c=[...document.querySelectorAll("[data-shot]")].map(e=>{let t=[];for(let n of e.querySelectorAll("[data-beat]")){let e=Number(n.dataset.beat);(t[e]??=[]).push(n)}let n=[...e.querySelectorAll("[data-from]")].map(e=>{let n=Number(e.dataset.from),r=e.dataset.until?Number(e.dataset.until):1/0;return t[n]??=[],Number.isFinite(r)&&(t[r]??=[]),{el:e,from:n,until:r}});for(let e=0;e<t.length;e++)t[e]??=[];let r=e.dataset.g0??=e.dataset.g??"black",o=e.dataset.tone0??=e.dataset.tone??"";return{el:e,title:e.dataset.title??"",beats:t.length?t:[[]],stays:n,g:r,tone:o,top:0,height:0,step:0,flow:!1}}),document.querySelectorAll("details.fold[open]")))e.open=!1;u=-2,f=-1,d=null,w(),r.classList.add("live"),b(),window.location.hash.length>1&&document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView()},jump(e){let t=c.filter(e=>!e.flow)[e];t&&window.scrollTo({top:t.top+1,behavior:"instant"})},destroy(){s?.stop(),window.removeEventListener("scroll",x),window.removeEventListener("resize",T),window.removeEventListener("keydown",L),window.removeEventListener("pointermove",N),window.removeEventListener("pointerup",U),window.removeEventListener("pointercancel",C),document.removeEventListener("pointerdown",_),document.removeEventListener("selectstart",M),document.removeEventListener("pointerover",S),document.removeEventListener("focusin",S),document.removeEventListener("change",S),document.removeEventListener("focusin",A),document.removeEventListener("mouseleave",I),document.removeEventListener("visibilitychange",j),document.removeEventListener("toggle",R,!0),g?.removeEventListener("toggle",B),l.removeEventListener("change",k)}}}(s.current,c.current,d);return u.current=e,()=>{e?.destroy(),u.current=null}},[]),(0,r.useEffect)(()=>{u.current?.scan();let e=requestAnimationFrame(()=>u.current?.scan());return()=>cancelAnimationFrame(e)},[e]);let m=f.at>=0?f.shots[f.at]:void 0;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{ref:c,className:"ground","data-g":"black","aria-hidden":"true"}),(0,t.jsx)("canvas",{ref:s,className:"stage","aria-hidden":"true"}),f.shots.length>0?(0,t.jsxs)("nav",{className:"hud","aria-label":"The shots on this page",children:[(0,t.jsxs)("p",{className:"hud-count","aria-hidden":"true",children:[f.at>=0?l(f.at+1):"--"," / ",l(f.shots.length)]}),(0,t.jsx)("ol",{className:"hud-ticks",children:f.shots.map((e,n)=>(0,t.jsx)("li",{style:{flexGrow:e.beats},children:(0,t.jsx)("button",{type:"button","aria-label":`${n+1}. ${e.title}`,"aria-current":n===f.at?"true":void 0,onClick:()=>u.current?.jump(n),children:(0,t.jsx)("i",{style:{width:n<f.at?"100%":n===f.at?`calc(var(--through, ${(f.beat+1)/e.beats}) * 100%)`:"0%"}})})},n))}),(0,t.jsx)("p",{className:"hud-title",children:0===f.at&&0===f.beat?"Scroll · Drag · Press":m?.title},m?.title)]}):null]})}],52899)}]);