"use strict";(self["webpackChunkdb"]=self["webpackChunkdb"]||[]).push([[998],{223:function(t,e,n){n.d(e,{BH:function(){return v},L:function(){return c},LL:function(){return C},P0:function(){return m},Sg:function(){return _},ZR:function(){return T},aH:function(){return y},eu:function(){return b},hl:function(){return w},m9:function(){return R},vZ:function(){return A}});n(3429),n(560);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,a=s?n[t.charAt(i)]:0;++i;const c=i<t.length,u=c?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==a||null==u||null==h)throw new o;const f=e<<2|a>>4;if(r.push(f),64!==u){const t=a<<4&240|u>>2;if(r.push(t),64!==h){const t=u<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=r(t);return s.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>l().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:""}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},d=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||f()||d()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},g=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},m=t=>{const e=g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){try{return"object"===typeof indexedDB}catch(t){return!1}}function b(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E="FirebaseError";class T extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=E,Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?S(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new T(r,o,n);return a}}function S(t,e){return t.replace(I,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const I=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(k(n)&&k(s)){if(!A(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function k(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(t){return t&&t._delegate?t._delegate:t}},4870:function(t,e,n){n.d(e,{B:function(){return o},Bj:function(){return s},Fl:function(){return Vt},IU:function(){return Ct},Jd:function(){return S},PG:function(){return wt},SU:function(){return Pt},Um:function(){return yt},WL:function(){return Ft},X$:function(){return R},X3:function(){return Tt},XI:function(){return Dt},Xl:function(){return St},dq:function(){return xt},iH:function(){return Ot},j:function(){return A},lk:function(){return I},nZ:function(){return c},qj:function(){return mt},qq:function(){return b},yT:function(){return Et}});n(560);var r=n(7139);let i;class s{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!t&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function o(t){return new s(t)}function a(t,e=i){e&&e.active&&e.effects.push(t)}function c(){return i}const u=t=>{const e=new Set(t);return e.w=0,e.n=0,e},l=t=>(t.w&m)>0,h=t=>(t.n&m)>0,f=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=m},d=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];l(i)&&!h(i)?i.delete(t):e[n++]=i,i.w&=~m,i.n&=~m}e.length=n}},p=new WeakMap;let g=0,m=1;const y=30;let v;const _=Symbol(""),w=Symbol("");class b{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let t=v,e=T;while(t){if(t===this)return;t=t.parent}try{return this.parent=v,v=this,T=!0,m=1<<++g,g<=y?f(this):E(this),this.fn()}finally{g<=y&&d(this),m=1<<--g,v=this.parent,T=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){v===this?this.deferStop=!0:this.active&&(E(this),this.onStop&&this.onStop(),this.active=!1)}}function E(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let T=!0;const C=[];function S(){C.push(T),T=!1}function I(){const t=C.pop();T=void 0===t||t}function A(t,e,n){if(T&&v){let e=p.get(t);e||p.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=u());const i=void 0;k(r,i)}}function k(t,e){let n=!1;g<=y?h(t)||(t.n|=m,n=!l(t)):n=!t.has(v),n&&(t.add(v),v.deps.push(t))}function R(t,e,n,i,s,o){const a=p.get(t);if(!a)return;let c=[];if("clear"===e)c=[...a.values()];else if("length"===n&&(0,r.kJ)(t)){const t=Number(i);a.forEach(((e,n)=>{("length"===n||!(0,r.yk)(n)&&n>=t)&&c.push(e)}))}else switch(void 0!==n&&c.push(a.get(n)),e){case"add":(0,r.kJ)(t)?(0,r.S0)(n)&&c.push(a.get("length")):(c.push(a.get(_)),(0,r._N)(t)&&c.push(a.get(w)));break;case"delete":(0,r.kJ)(t)||(c.push(a.get(_)),(0,r._N)(t)&&c.push(a.get(w)));break;case"set":(0,r._N)(t)&&c.push(a.get(_));break}if(1===c.length)c[0]&&x(c[0]);else{const t=[];for(const e of c)e&&t.push(...e);x(u(t))}}function x(t,e){const n=(0,r.kJ)(t)?t:[...t];for(const r of n)r.computed&&O(r,e);for(const r of n)r.computed||O(r,e)}function O(t,e){(t!==v||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const D=(0,r.fY)("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.yk)),L=P();function P(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=Ct(this);for(let e=0,i=this.length;e<i;e++)A(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(Ct)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){S();const n=Ct(this)[e].apply(this,t);return I(),n}})),t}function M(t){const e=Ct(this);return A(e,"has",t),e.hasOwnProperty(t)}class F{constructor(t=!1,e=!1){this._isReadonly=t,this._shallow=e}get(t,e,n){const i=this._isReadonly,s=this._shallow;if("__v_isReactive"===e)return!i;if("__v_isReadonly"===e)return i;if("__v_isShallow"===e)return s;if("__v_raw"===e)return n===(i?s?dt:ft:s?ht:lt).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=(0,r.kJ)(t);if(!i){if(o&&(0,r.RI)(L,e))return Reflect.get(L,e,n);if("hasOwnProperty"===e)return M}const a=Reflect.get(t,e,n);return((0,r.yk)(e)?N.has(e):D(e))?a:(i||A(t,"get",e),s?a:xt(a)?o&&(0,r.S0)(e)?a:a.value:(0,r.Kn)(a)?i?vt(a):mt(a):a)}}class U extends F{constructor(t=!1){super(!1,t)}set(t,e,n,i){let s=t[e];if(!this._shallow){const e=bt(s);if(Et(n)||bt(n)||(s=Ct(s),n=Ct(n)),!(0,r.kJ)(t)&&xt(s)&&!xt(n))return!e&&(s.value=n,!0)}const o=(0,r.kJ)(t)&&(0,r.S0)(e)?Number(e)<t.length:(0,r.RI)(t,e),a=Reflect.set(t,e,n,i);return t===Ct(i)&&(o?(0,r.aU)(n,s)&&R(t,"set",e,n,s):R(t,"add",e,n)),a}deleteProperty(t,e){const n=(0,r.RI)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&R(t,"delete",e,void 0,i),s}has(t,e){const n=Reflect.has(t,e);return(0,r.yk)(e)&&N.has(e)||A(t,"has",e),n}ownKeys(t){return A(t,"iterate",(0,r.kJ)(t)?"length":_),Reflect.ownKeys(t)}}class V extends F{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const j=new U,B=new V,$=new U(!0),q=t=>t,z=t=>Reflect.getPrototypeOf(t);function H(t,e,n=!1,i=!1){t=t["__v_raw"];const s=Ct(t),o=Ct(e);n||((0,r.aU)(e,o)&&A(s,"get",e),A(s,"get",o));const{has:a}=z(s),c=i?q:n?At:It;return a.call(s,e)?c(t.get(e)):a.call(s,o)?c(t.get(o)):void(t!==s&&t.get(e))}function G(t,e=!1){const n=this["__v_raw"],i=Ct(n),s=Ct(t);return e||((0,r.aU)(t,s)&&A(i,"has",t),A(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function K(t,e=!1){return t=t["__v_raw"],!e&&A(Ct(t),"iterate",_),Reflect.get(t,"size",t)}function W(t){t=Ct(t);const e=Ct(this),n=z(e),r=n.has.call(e,t);return r||(e.add(t),R(e,"add",t,t)),this}function Q(t,e){e=Ct(e);const n=Ct(this),{has:i,get:s}=z(n);let o=i.call(n,t);o||(t=Ct(t),o=i.call(n,t));const a=s.call(n,t);return n.set(t,e),o?(0,r.aU)(e,a)&&R(n,"set",t,e,a):R(n,"add",t,e),this}function J(t){const e=Ct(this),{has:n,get:r}=z(e);let i=n.call(e,t);i||(t=Ct(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&R(e,"delete",t,void 0,s),o}function X(){const t=Ct(this),e=0!==t.size,n=void 0,r=t.clear();return e&&R(t,"clear",void 0,void 0,n),r}function Y(t,e){return function(n,r){const i=this,s=i["__v_raw"],o=Ct(s),a=e?q:t?At:It;return!t&&A(o,"iterate",_),s.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}}function Z(t,e,n){return function(...i){const s=this["__v_raw"],o=Ct(s),a=(0,r._N)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=s[t](...i),h=n?q:e?At:It;return!e&&A(o,"iterate",u?w:_),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function tt(t){return function(...e){return"delete"!==t&&("clear"===t?void 0:this)}}function et(){const t={get(t){return H(this,t)},get size(){return K(this)},has:G,add:W,set:Q,delete:J,clear:X,forEach:Y(!1,!1)},e={get(t){return H(this,t,!1,!0)},get size(){return K(this)},has:G,add:W,set:Q,delete:J,clear:X,forEach:Y(!1,!0)},n={get(t){return H(this,t,!0)},get size(){return K(this,!0)},has(t){return G.call(this,t,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:Y(!0,!1)},r={get(t){return H(this,t,!0,!0)},get size(){return K(this,!0)},has(t){return G.call(this,t,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:Y(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{t[i]=Z(i,!1,!1),n[i]=Z(i,!0,!1),e[i]=Z(i,!1,!0),r[i]=Z(i,!0,!0)})),[t,n,e,r]}const[nt,rt,it,st]=et();function ot(t,e){const n=e?t?st:it:t?rt:nt;return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.RI)(n,i)&&i in e?n:e,i,s)}const at={get:ot(!1,!1)},ct={get:ot(!1,!0)},ut={get:ot(!0,!1)};const lt=new WeakMap,ht=new WeakMap,ft=new WeakMap,dt=new WeakMap;function pt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:pt((0,r.W7)(t))}function mt(t){return bt(t)?t:_t(t,!1,j,at,lt)}function yt(t){return _t(t,!1,$,ct,ht)}function vt(t){return _t(t,!0,B,ut,ft)}function _t(t,e,n,i,s){if(!(0,r.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=gt(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return s.set(t,c),c}function wt(t){return bt(t)?wt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function bt(t){return!(!t||!t["__v_isReadonly"])}function Et(t){return!(!t||!t["__v_isShallow"])}function Tt(t){return wt(t)||bt(t)}function Ct(t){const e=t&&t["__v_raw"];return e?Ct(e):t}function St(t){return(0,r.Nj)(t,"__v_skip",!0),t}const It=t=>(0,r.Kn)(t)?mt(t):t,At=t=>(0,r.Kn)(t)?vt(t):t;function kt(t){T&&v&&(t=Ct(t),k(t.dep||(t.dep=u())))}function Rt(t,e){t=Ct(t);const n=t.dep;n&&x(n)}function xt(t){return!(!t||!0!==t.__v_isRef)}function Ot(t){return Nt(t,!1)}function Dt(t){return Nt(t,!0)}function Nt(t,e){return xt(t)?t:new Lt(t,e)}class Lt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Ct(t),this._value=e?t:It(t)}get value(){return kt(this),this._value}set value(t){const e=this.__v_isShallow||Et(t)||bt(t);t=e?t:Ct(t),(0,r.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:It(t),Rt(this,t))}}function Pt(t){return xt(t)?t.value:t}const Mt={get:(t,e,n)=>Pt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return xt(i)&&!xt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Ft(t){return wt(t)?t:new Proxy(t,Mt)}class Ut{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this._dirty=!0,this.effect=new b(t,(()=>{this._dirty||(this._dirty=!0,Rt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=Ct(this);return kt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Vt(t,e,n=!1){let i,s;const o=(0,r.mf)(t);o?(i=t,s=r.dG):(i=t.get,s=t.set);const a=new Ut(i,s,o||!s,n);return a}},3396:function(t,e,n){n.d(e,{$d:function(){return o},Cn:function(){return M},FN:function(){return wn},Fl:function(){return Vn},HY:function(){return Ve},JJ:function(){return he},Ko:function(){return jt},P$:function(){return ht},Q6:function(){return yt},U2:function(){return dt},Uk:function(){return un},Us:function(){return De},Wm:function(){return sn},Y3:function(){return v},Y8:function(){return at},YP:function(){return Y},_:function(){return rn},aZ:function(){return vt},dD:function(){return P},f3:function(){return fe},h:function(){return jn},iD:function(){return Je},ic:function(){return Nt},j4:function(){return Xe},kq:function(){return ln},nJ:function(){return ut},nK:function(){return mt},up:function(){return H},w5:function(){return F},wg:function(){return He},wy:function(){return rt}});n(560);var r=n(4870),i=n(7139);function s(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){a(s,e,n)}return i}function o(t,e,n,r){if((0,i.mf)(t)){const o=s(t,e,n,r);return o&&(0,i.tI)(o)&&o.catch((t=>{a(t,e,n)})),o}const c=[];for(let i=0;i<t.length;i++)c.push(o(t[i],e,n,r));return c}function a(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,o))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void s(a,null,10,[t,i,o])}c(t,n,i,r)}function c(t,e,n,r=!0){console.error(t)}let u=!1,l=!1;const h=[];let f=0;const d=[];let p=null,g=0;const m=Promise.resolve();let y=null;function v(t){const e=y||m;return t?e.then(this?t.bind(this):t):e}function _(t){let e=f+1,n=h.length;while(e<n){const r=e+n>>>1,i=h[r],s=I(i);s<t||s===t&&i.pre?e=r+1:n=r}return e}function w(t){h.length&&h.includes(t,u&&t.allowRecurse?f+1:f)||(null==t.id?h.push(t):h.splice(_(t.id),0,t),b())}function b(){u||l||(l=!0,y=m.then(k))}function E(t){const e=h.indexOf(t);e>f&&h.splice(e,1)}function T(t){(0,i.kJ)(t)?d.push(...t):p&&p.includes(t,t.allowRecurse?g+1:g)||d.push(t),b()}function C(t,e,n=(u?f+1:0)){for(0;n<h.length;n++){const e=h[n];if(e&&e.pre){if(t&&e.id!==t.uid)continue;0,h.splice(n,1),n--,e()}}}function S(t){if(d.length){const t=[...new Set(d)];if(d.length=0,p)return void p.push(...t);for(p=t,p.sort(((t,e)=>I(t)-I(e))),g=0;g<p.length;g++)p[g]();p=null,g=0}}const I=t=>null==t.id?1/0:t.id,A=(t,e)=>{const n=I(t)-I(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function k(t){l=!1,u=!0,h.sort(A);i.dG;try{for(f=0;f<h.length;f++){const t=h[f];t&&!1!==t.active&&s(t,null,14)}}finally{f=0,h.length=0,S(t),u=!1,y=null,(h.length||d.length)&&k(t)}}function R(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.kT;let s=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:o}=r[t]||i.kT;o&&(s=n.map((t=>(0,i.HD)(t)?t.trim():t))),e&&(s=n.map(i.h5))}let u;let l=r[u=(0,i.hR)(e)]||r[u=(0,i.hR)((0,i._A)(e))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(e))]),l&&o(l,t,6,s);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,s)}}function x(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!(0,i.mf)(t)){const r=t=>{const n=x(t,e,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((t=>a[t]=null)):(0,i.l7)(a,o),(0,i.Kn)(t)&&r.set(t,a),a):((0,i.Kn)(t)&&r.set(t,null),null)}function O(t,e){return!(!t||!(0,i.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,i.RI)(t,(0,i.rs)(e))||(0,i.RI)(t,e))}let D=null,N=null;function L(t){const e=D;return D=t,N=t&&t.type.__scopeId||null,e}function P(t){N=t}function M(){N=null}function F(t,e=D,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&We(-1);const i=L(e);let s;try{s=t(...n)}finally{L(i),r._d&&We(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function U(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:f,renderCache:d,data:p,setupState:g,ctx:m,inheritAttrs:y}=t;let v,_;const w=L(t);try{if(4&n.shapeFlag){const t=s||r,e=t;v=hn(f.call(e,t,d,o,g,p,m)),_=l}else{const t=e;0,v=hn(t.length>1?t(o,{attrs:l,slots:u,emit:h}):t(o,null)),_=e.props?l:V(l)}}catch(E){qe.length=0,a(E,t,1),v=sn(Be)}let b=v;if(_&&!1!==y){const t=Object.keys(_),{shapeFlag:e}=b;t.length&&7&e&&(c&&t.some(i.tR)&&(_=j(_,c)),b=cn(b,_))}return n.dirs&&(b=cn(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),v=b,L(w),v}const V=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.F7)(n))&&((e||(e={}))[n]=t[n]);return e},j=(t,e)=>{const n={};for(const r in t)(0,i.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function B(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||$(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?$(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!O(u,n))return!0}}return!1}function $(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!O(n,s))return!0}return!1}function q({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const z="components";function H(t,e){return K(z,t,!0,e)||t}const G=Symbol.for("v-ndc");function K(t,e,n=!0,r=!1){const s=D||_n;if(s){const n=s.type;if(t===z){const t=Fn(n,!1);if(t&&(t===e||t===(0,i._A)(e)||t===(0,i.kC)((0,i._A)(e))))return n}const o=W(s[t]||n[t],e)||W(s.appContext[t],e);return!o&&r?n:o}}function W(t,e){return t&&(t[e]||t[(0,i._A)(e)]||t[(0,i.kC)((0,i._A)(e))])}const Q=t=>t.__isSuspense;function J(t,e){e&&e.pendingBranch?(0,i.kJ)(t)?e.effects.push(...t):e.effects.push(t):T(t)}const X={};function Y(t,e,n){return Z(t,e,n)}function Z(t,e,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){var h;const f=(0,r.nZ)()===(null==(h=_n)?void 0:h.scope)?_n:null;let d,p,g=!1,m=!1;if((0,r.dq)(t)?(d=()=>t.value,g=(0,r.yT)(t)):(0,r.PG)(t)?(d=()=>t,a=!0):(0,i.kJ)(t)?(m=!0,g=t.some((t=>(0,r.PG)(t)||(0,r.yT)(t))),d=()=>t.map((t=>(0,r.dq)(t)?t.value:(0,r.PG)(t)?nt(t):(0,i.mf)(t)?s(t,f,2):void 0))):d=(0,i.mf)(t)?e?()=>s(t,f,2):()=>{if(!f||!f.isUnmounted)return p&&p(),o(t,f,3,[v])}:i.dG,e&&a){const t=d;d=()=>nt(t())}let y,v=t=>{p=T.onStop=()=>{s(t,f,4),p=T.onStop=void 0}};if(Rn){if(v=i.dG,e?n&&o(e,f,3,[d(),m?[]:void 0,v]):d(),"sync"!==c)return i.dG;{const t=$n();y=t.__watcherHandles||(t.__watcherHandles=[])}}let _=m?new Array(t.length).fill(X):X;const b=()=>{if(T.active)if(e){const t=T.run();(a||g||(m?t.some(((t,e)=>(0,i.aU)(t,_[e]))):(0,i.aU)(t,_)))&&(p&&p(),o(e,f,3,[t,_===X?void 0:m&&_[0]===X?[]:_,v]),_=t)}else T.run()};let E;b.allowRecurse=!!e,"sync"===c?E=b:"post"===c?E=()=>Oe(b,f&&f.suspense):(b.pre=!0,f&&(b.id=f.uid),E=()=>w(b));const T=new r.qq(d,E);e?n?b():_=T.run():"post"===c?Oe(T.run.bind(T),f&&f.suspense):T.run();const C=()=>{T.stop(),f&&f.scope&&(0,i.Od)(f.scope.effects,T)};return y&&y.push(C),C}function tt(t,e,n){const r=this.proxy,s=(0,i.HD)(t)?t.includes(".")?et(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.mf)(e)?o=e:(o=e.handler,n=e);const a=_n;Cn(this);const c=Z(s,o.bind(r),n);return a?Cn(a):Sn(),c}function et(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function nt(t,e){if(!(0,i.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.dq)(t))nt(t.value,e);else if((0,i.kJ)(t))for(let n=0;n<t.length;n++)nt(t[n],e);else if((0,i.DM)(t)||(0,i._N)(t))t.forEach((t=>{nt(t,e)}));else if((0,i.PO)(t))for(const n in t)nt(t[n],e);return t}function rt(t,e){const n=D;if(null===n)return t;const r=Mn(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=i.kT]=e[o];t&&((0,i.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&nt(n),s.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return t}function it(t,e,n,i){const s=t.dirs,a=e&&e.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),o(l,n,8,[t.el,u,t,e]),(0,r.lk)())}}const st=Symbol("_leaveCb"),ot=Symbol("_enterCb");function at(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ot((()=>{t.isMounted=!0})),Lt((()=>{t.isUnmounting=!0})),t}const ct=[Function,Array],ut={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ct,onEnter:ct,onAfterEnter:ct,onEnterCancelled:ct,onBeforeLeave:ct,onLeave:ct,onAfterLeave:ct,onLeaveCancelled:ct,onBeforeAppear:ct,onAppear:ct,onAfterAppear:ct,onAppearCancelled:ct},lt={name:"BaseTransition",props:ut,setup(t,{slots:e}){const n=wn(),i=at();let s;return()=>{const o=e.default&&yt(e.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let t=!1;for(const e of o)if(e.type!==Be){0,a=e,t=!0;break}}const c=(0,r.IU)(t),{mode:u}=c;if(i.isLeaving)return pt(a);const l=gt(a);if(!l)return pt(a);const h=dt(l,c,i,n);mt(l,h);const f=n.subTree,d=f&&gt(f);let p=!1;const{getTransitionKey:g}=l.type;if(g){const t=g();void 0===s?s=t:t!==s&&(s=t,p=!0)}if(d&&d.type!==Be&&(!Ze(l,d)||p)){const t=dt(d,c,i,n);if(mt(d,t),"out-in"===u)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},pt(a);"in-out"===u&&l.type!==Be&&(t.delayLeave=(t,e,n)=>{const r=ft(i,d);r[String(d.key)]=d,t[st]=()=>{e(),t[st]=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},ht=lt;function ft(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function dt(t,e,n,r){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:y,onAppear:v,onAfterAppear:_,onAppearCancelled:w}=e,b=String(t.key),E=ft(n,t),T=(t,e)=>{t&&o(t,r,9,e)},C=(t,e)=>{const n=e[1];T(t,e),(0,i.kJ)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},S={mode:a,persisted:c,beforeEnter(e){let r=u;if(!n.isMounted){if(!s)return;r=y||u}e[st]&&e[st](!0);const i=E[b];i&&Ze(t,i)&&i.el[st]&&i.el[st](),T(r,[e])},enter(t){let e=l,r=h,i=f;if(!n.isMounted){if(!s)return;e=v||l,r=_||h,i=w||f}let o=!1;const a=t[ot]=e=>{o||(o=!0,T(e?i:r,[t]),S.delayedLeave&&S.delayedLeave(),t[ot]=void 0)};e?C(e,[t,a]):a()},leave(e,r){const i=String(t.key);if(e[ot]&&e[ot](!0),n.isUnmounting)return r();T(d,[e]);let s=!1;const o=e[st]=n=>{s||(s=!0,r(),T(n?m:g,[e]),e[st]=void 0,E[i]===t&&delete E[i])};E[i]=t,p?C(p,[e,o]):o()},clone(t){return dt(t,e,n,r)}};return S}function pt(t){if(wt(t))return t=cn(t),t.children=null,t}function gt(t){return wt(t)?t.children?t.children[0]:void 0:t}function mt(t,e){6&t.shapeFlag&&t.component?mt(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function yt(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Ve?(128&o.patchFlag&&i++,r=r.concat(yt(o.children,e,a))):(e||o.type!==Be)&&r.push(null!=a?cn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function vt(t,e){return(0,i.mf)(t)?(()=>(0,i.l7)({name:t.name},e,{setup:t}))():t}const _t=t=>!!t.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const wt=t=>t.type.__isKeepAlive;RegExp,RegExp;function bt(t,e){return(0,i.kJ)(t)?t.some((t=>bt(t,e))):(0,i.HD)(t)?t.split(",").includes(e):!!(0,i.Kj)(t)&&t.test(e)}function Et(t,e){Ct(t,"a",e)}function Tt(t,e){Ct(t,"da",e)}function Ct(t,e,n=_n){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(kt(e,r,n),n){let t=n.parent;while(t&&t.parent)wt(t.parent.vnode)&&St(r,e,n,t),t=t.parent}}function St(t,e,n,r){const s=kt(e,t,r,!0);Pt((()=>{(0,i.Od)(r[e],s)}),n)}function It(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function At(t){return 128&t.shapeFlag?t.ssContent:t}function kt(t,e,n=_n,i=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),Cn(n);const s=o(e,n,t,i);return Sn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const Rt=t=>(e,n=_n)=>(!Rn||"sp"===t)&&kt(t,((...t)=>e(...t)),n),xt=Rt("bm"),Ot=Rt("m"),Dt=Rt("bu"),Nt=Rt("u"),Lt=Rt("bum"),Pt=Rt("um"),Mt=Rt("sp"),Ft=Rt("rtg"),Ut=Rt("rtc");function Vt(t,e=_n){kt("ec",t,e)}function jt(t,e,n,r){let s;const o=n&&n[r];if((0,i.kJ)(t)||(0,i.HD)(t)){s=new Array(t.length);for(let n=0,r=t.length;n<r;n++)s[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(t))if(t[Symbol.iterator])s=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=e(t[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const Bt=t=>t?In(t)?Mn(t)||t.proxy:Bt(t.parent):null,$t=(0,i.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Bt(t.parent),$root:t=>Bt(t.root),$emit:t=>t.emit,$options:t=>Xt(t),$forceUpdate:t=>t.f||(t.f=()=>w(t.update)),$nextTick:t=>t.n||(t.n=v.bind(t.proxy)),$watch:t=>tt.bind(t)}),qt=(t,e)=>t!==i.kT&&!t.__isScriptSetup&&(0,i.RI)(t,e),zt={get({_:t},e){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(qt(s,e))return c[e]=1,s[e];if(o!==i.kT&&(0,i.RI)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,i.RI)(h,e))return c[e]=3,a[e];if(n!==i.kT&&(0,i.RI)(n,e))return c[e]=4,n[e];Gt&&(c[e]=0)}}const f=$t[e];let d,p;return f?("$attrs"===e&&(0,r.j)(t,"get",e),f(t)):(d=u.__cssModules)&&(d=d[e])?d:n!==i.kT&&(0,i.RI)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,i.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return qt(s,e)?(s[e]=n,!0):r!==i.kT&&(0,i.RI)(r,e)?(r[e]=n,!0):!(0,i.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==i.kT&&(0,i.RI)(t,a)||qt(e,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)($t,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ht(t){return(0,i.kJ)(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}let Gt=!0;function Kt(t){const e=Xt(t),n=t.proxy,s=t.ctx;Gt=!1,e.beforeCreate&&Qt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:_,beforeUnmount:w,destroyed:b,unmounted:E,render:T,renderTracked:C,renderTriggered:S,errorCaptured:I,serverPrefetch:A,expose:k,inheritAttrs:R,components:x,directives:O,filters:D}=e,N=null;if(h&&Wt(h,s,N),c)for(const r in c){const t=c[r];(0,i.mf)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Kn)(e)&&(t.data=(0,r.qj)(e))}if(Gt=!0,a)for(const r in a){const t=a[r],e=(0,i.mf)(t)?t.bind(n,n):(0,i.mf)(t.get)?t.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(t)&&(0,i.mf)(t.set)?t.set.bind(n):i.dG,c=Vn({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)Jt(u[r],s,n,r);if(l){const t=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{he(e,t[e])}))}function L(t,e){(0,i.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(f&&Qt(f,t,"c"),L(xt,d),L(Ot,p),L(Dt,g),L(Nt,m),L(Et,y),L(Tt,v),L(Vt,I),L(Ut,C),L(Ft,S),L(Lt,w),L(Pt,E),L(Mt,A),(0,i.kJ)(k))if(k.length){const e=t.exposed||(t.exposed={});k.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===i.dG&&(t.render=T),null!=R&&(t.inheritAttrs=R),x&&(t.components=x),O&&(t.directives=O)}function Wt(t,e,n=i.dG){(0,i.kJ)(t)&&(t=ne(t));for(const s in t){const n=t[s];let o;o=(0,i.Kn)(n)?"default"in n?fe(n.from||s,n.default,!0):fe(n.from||s):fe(n),(0,r.dq)(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function Qt(t,e,n){o((0,i.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Jt(t,e,n,r){const s=r.includes(".")?et(n,r):()=>n[r];if((0,i.HD)(t)){const n=e[t];(0,i.mf)(n)&&Y(s,n)}else if((0,i.mf)(t))Y(s,t.bind(n));else if((0,i.Kn)(t))if((0,i.kJ)(t))t.forEach((t=>Jt(t,e,n,r)));else{const r=(0,i.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.mf)(r)&&Y(s,r,t)}else 0}function Xt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((t=>Yt(u,t,a,!0))),Yt(u,e,a)):u=e,(0,i.Kn)(e)&&o.set(e,u),u}function Yt(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Yt(t,s,n,!0),i&&i.forEach((e=>Yt(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=Zt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Zt={data:te,props:se,emits:se,methods:ie,computed:ie,beforeCreate:re,created:re,beforeMount:re,mounted:re,beforeUpdate:re,updated:re,beforeDestroy:re,beforeUnmount:re,destroyed:re,unmounted:re,activated:re,deactivated:re,errorCaptured:re,serverPrefetch:re,components:ie,directives:ie,watch:oe,provide:te,inject:ee};function te(t,e){return e?t?function(){return(0,i.l7)((0,i.mf)(t)?t.call(this,this):t,(0,i.mf)(e)?e.call(this,this):e)}:e:t}function ee(t,e){return ie(ne(t),ne(e))}function ne(t){if((0,i.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function re(t,e){return t?[...new Set([].concat(t,e))]:e}function ie(t,e){return t?(0,i.l7)(Object.create(null),t,e):e}function se(t,e){return t?(0,i.kJ)(t)&&(0,i.kJ)(e)?[...new Set([...t,...e])]:(0,i.l7)(Object.create(null),Ht(t),Ht(null!=e?e:{})):e}function oe(t,e){if(!t)return e;if(!e)return t;const n=(0,i.l7)(Object.create(null),t);for(const r in e)n[r]=re(t[r],e[r]);return n}function ae(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ce=0;function ue(t,e){return function(n,r=null){(0,i.mf)(n)||(n=(0,i.l7)({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=ae();const o=new WeakSet;let a=!1;const c=s.app={_uid:ce++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:qn,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,i.mf)(t.install)?(o.add(t),t.install(c,...e)):(0,i.mf)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),c},component(t,e){return e?(s.components[t]=e,c):s.components[t]},directive(t,e){return e?(s.directives[t]=e,c):s.directives[t]},mount(i,o,u){if(!a){0;const l=sn(n,r);return l.appContext=s,o&&e?e(l,i):t(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Mn(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return s.provides[t]=e,c},runWithContext(t){le=c;try{return t()}finally{le=null}}};return c}}let le=null;function he(t,e){if(_n){let n=_n.provides;const r=_n.parent&&_n.parent.provides;r===n&&(n=_n.provides=Object.create(r)),n[t]=e}else 0}function fe(t,e,n=!1){const r=_n||D;if(r||le){const s=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:le._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.mf)(e)?e.call(r&&r.proxy):e}else 0}function de(t,e,n,s=!1){const o={},a={};(0,i.Nj)(a,tn,1),t.propsDefaults=Object.create(null),ge(t,e,o,a);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=s?o:(0,r.Um)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function pe(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.IU)(o),[l]=t.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;ge(t,e,o,a)&&(h=!0);for(const s in u)e&&((0,i.RI)(e,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(e,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=me(l,u,s,void 0,t,!0)):delete o[s]);if(a!==u)for(const t in a)e&&(0,i.RI)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(O(t.emitsOptions,s))continue;const c=e[s];if(l)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const e=(0,i._A)(s);o[e]=me(l,u,e,c,t,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(t,"set","$attrs")}function ge(t,e,n,s){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,i.Gg)(r))continue;const l=e[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:O(t.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const e=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=me(o,e,c,s[c],t,!(0,i.RI)(s,c))}}return u}function me(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.mf)(t)){const{propsDefaults:i}=s;n in i?r=i[n]:(Cn(s),r=i[n]=t.call(null,e),Sn())}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function ye(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!(0,i.mf)(t)){const r=t=>{u=!0;const[n,r]=ye(t,e,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!u)return(0,i.Kn)(t)&&r.set(t,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,i._A)(o[h]);ve(t)&&(a[t]=i.kT)}else if(o){0;for(const t in o){const e=(0,i._A)(t);if(ve(e)){const n=o[t],r=a[e]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:(0,i.l7)({},n);if(r){const t=be(Boolean,r.type),n=be(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,i.RI)(r,"default"))&&c.push(e)}}}}const l=[a,c];return(0,i.Kn)(t)&&r.set(t,l),l}function ve(t){return"$"!==t[0]}function _e(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:null===t?"null":""}function we(t,e){return _e(t)===_e(e)}function be(t,e){return(0,i.kJ)(e)?e.findIndex((e=>we(e,t))):(0,i.mf)(e)&&we(e,t)?0:-1}const Ee=t=>"_"===t[0]||"$stable"===t,Te=t=>(0,i.kJ)(t)?t.map(hn):[hn(t)],Ce=(t,e,n)=>{if(e._n)return e;const r=F(((...t)=>Te(e(...t))),n);return r._c=!1,r},Se=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ee(s))continue;const n=t[s];if((0,i.mf)(n))e[s]=Ce(s,n,r);else if(null!=n){0;const t=Te(n);e[s]=()=>t}}},Ie=(t,e)=>{const n=Te(e);t.slots.default=()=>n},Ae=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.IU)(e),(0,i.Nj)(e,"_",n)):Se(e,t.slots={})}else t.slots={},e&&Ie(t,e);(0,i.Nj)(t.slots,tn,1)},ke=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,i.l7)(s,e),n||1!==t||delete s._):(o=!e.$stable,Se(e,s)),a=e}else e&&(Ie(t,e),a={default:1});if(o)for(const i in s)Ee(i)||null!=a[i]||delete s[i]};function Re(t,e,n,o,a=!1){if((0,i.kJ)(t))return void t.forEach(((t,r)=>Re(t,e&&((0,i.kJ)(e)?e[r]:e),n,o,a)));if(_t(o)&&!a)return;const c=4&o.shapeFlag?Mn(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=t;const f=e&&e.r,d=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=f&&f!==h&&((0,i.HD)(f)?(d[f]=null,(0,i.RI)(p,f)&&(p[f]=null)):(0,r.dq)(f)&&(f.value=null)),(0,i.mf)(h))s(h,l,12,[u,d]);else{const e=(0,i.HD)(h),s=(0,r.dq)(h);if(e||s){const r=()=>{if(t.f){const n=e?(0,i.RI)(p,h)?p[h]:d[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):e?(d[h]=[c],(0,i.RI)(p,h)&&(p[h]=d[h])):(h.value=[c],t.k&&(d[t.k]=h.value))}else e?(d[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):s&&(h.value=u,t.k&&(d[t.k]=u))};u?(r.id=-1,Oe(r,n)):r()}else 0}}function xe(){}const Oe=J;function De(t){return Ne(t)}function Ne(t,e){xe();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=i.dG,insertStaticContent:m}=t,y=(t,e,n,r=null,i=null,s=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Ze(t,e)&&(r=Y(t),K(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case je:v(t,e,n,r);break;case Be:_(t,e,n,r);break;case $e:null==t&&b(e,n,r,o);break;case Ve:L(t,e,n,r,i,s,o,a,c);break;default:1&h?A(t,e,n,r,i,s,o,a,c):6&h?P(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,s,o,a,c,tt)}null!=l&&i&&Re(l,t&&t.ref,s,e||t,!e)},v=(t,e,n,r)=>{if(null==t)s(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},_=(t,e,n,r)=>{null==t?s(e.el=l(e.children||""),n,r):e.el=t.el},b=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},T=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},I=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},A=(t,e,n,r,i,s,o,a,c)=>{o=o||"svg"===e.type,null==t?k(e,n,r,i,s,o,a,c):O(t,e,i,s,o,a,c)},k=(t,e,n,r,o,u,l,h)=>{let d,p;const{type:g,props:m,shapeFlag:y,transition:v,dirs:_}=t;if(d=t.el=c(t.type,u,m&&m.is,m),8&y?f(d,t.children):16&y&&x(t.children,d,null,r,o,u&&"foreignObject"!==g,l,h),_&&it(t,null,r,"created"),R(d,t,t.scopeId,l,r),m){for(const e in m)"value"===e||(0,i.Gg)(e)||a(d,e,null,m[e],u,t.children,r,o,X);"value"in m&&a(d,"value",null,m.value),(p=m.onVnodeBeforeMount)&&gn(p,r,t)}_&&it(t,null,r,"beforeMount");const w=Pe(o,v);w&&v.beforeEnter(d),s(d,e,n),((p=m&&m.onVnodeMounted)||w||_)&&Oe((()=>{p&&gn(p,r,t),w&&v.enter(d),_&&it(t,null,r,"mounted")}),o)},R=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let s=0;s<r.length;s++)g(t,r[s]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;R(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},x=(t,e,n,r,i,s,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?fn(t[u]):hn(t[u]);y(null,c,e,n,r,i,s,o,a)}},O=(t,e,n,r,s,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||i.kT,g=e.props||i.kT;let m;n&&Le(n,!1),(m=g.onVnodeBeforeUpdate)&&gn(m,n,e,t),d&&it(e,t,n,"beforeUpdate"),n&&Le(n,!0);const y=s&&"foreignObject"!==e.type;if(h?D(t.dynamicChildren,h,u,n,r,y,o):c||$(t,e,u,null,n,r,y,o,!1),l>0){if(16&l)N(u,e,p,g,n,r,s);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,s),4&l&&a(u,"style",p.style,g.style,s),8&l){const i=e.dynamicProps;for(let e=0;e<i.length;e++){const o=i[e],c=p[o],l=g[o];l===c&&"value"!==o||a(u,o,c,l,s,t.children,n,r,X)}}1&l&&t.children!==e.children&&f(u,e.children)}else c||null!=h||N(u,e,p,g,n,r,s);((m=g.onVnodeUpdated)||d)&&Oe((()=>{m&&gn(m,n,e,t),d&&it(e,t,n,"updated")}),r)},D=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Ve||!Ze(c,u)||70&c.shapeFlag)?d(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},N=(t,e,n,r,s,o,c)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(t,u,n[u],null,c,e.children,s,o,X);for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(t,u,h,l,c,e.children,s,o,X)}"value"in r&&a(t,"value",n.value,r.value)}},L=(t,e,n,r,i,o,a,c,l)=>{const h=e.el=t?t.el:u(""),f=e.anchor=t?t.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(s(h,n,r),s(f,n,r),x(e.children,n,f,i,o,a,c,l)):d>0&&64&d&&p&&t.dynamicChildren?(D(t.dynamicChildren,p,n,i,o,a,c),(null!=e.key||i&&e===i.subTree)&&Me(t,e,!0)):$(t,e,n,f,i,o,a,c,l)},P=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):M(e,n,r,i,s,o,c):F(t,e,c)},M=(t,e,n,r,i,s,o)=>{const a=t.component=vn(t,r,i);if(wt(t)&&(a.ctx.renderer=tt),xn(a),a.asyncDep){if(i&&i.registerDep(a,V),!t.el){const t=a.subTree=sn(Be);_(null,t,e,n)}}else V(a,t,e,n,i,s,o)},F=(t,e,n)=>{const r=e.component=t.component;if(B(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,e,n);r.next=e,E(r.update),r.update()}else e.el=t.el,r.vnode=e},V=(t,e,n,s,o,a,c)=>{const u=()=>{if(t.isMounted){let e,{next:n,bu:r,u:s,parent:u,vnode:l}=t,h=n;0,Le(t,!1),n?(n.el=l.el,j(t,n,c)):n=l,r&&(0,i.ir)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&gn(e,u,n,l),Le(t,!0);const f=U(t);0;const p=t.subTree;t.subTree=f,y(p,f,d(p.el),Y(p),t,o,a),n.el=f.el,null===h&&q(t,f.el),s&&Oe(s,o),(e=n.props&&n.props.onVnodeUpdated)&&Oe((()=>gn(e,u,n,l)),o)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:f}=t,d=_t(e);if(Le(t,!1),l&&(0,i.ir)(l),!d&&(r=u&&u.onVnodeBeforeMount)&&gn(r,f,e),Le(t,!0),c&&nt){const n=()=>{t.subTree=U(t),nt(c,t.subTree,t,o,null)};d?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=U(t);0,y(null,r,n,s,t,o,a),e.el=r.el}if(h&&Oe(h,o),!d&&(r=u&&u.onVnodeMounted)){const t=e;Oe((()=>gn(r,f,t)),o)}(256&e.shapeFlag||f&&_t(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&Oe(t.a,o),t.isMounted=!0,e=n=s=null}},l=t.effect=new r.qq(u,(()=>w(h)),t.scope),h=t.update=()=>l.run();h.id=t.uid,Le(t,!0),h()},j=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,pe(t,e.props,i,n),ke(t,e.children,n),(0,r.Jd)(),C(t),(0,r.lk)()},$=(t,e,n,r,i,s,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void H(u,h,n,r,i,s,o,a,c);if(256&d)return void z(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&X(u,i,s),h!==u&&f(n,h)):16&l?16&p?H(u,h,n,r,i,s,o,a,c):X(u,i,s,!0):(8&l&&f(n,""),16&p&&x(h,n,r,i,s,o,a,c))},z=(t,e,n,r,s,o,a,c,u)=>{t=t||i.Z6,e=e||i.Z6;const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?fn(e[d]):hn(e[d]);y(t[d],r,n,null,s,o,a,c,u)}l>h?X(t,s,o,!0,!1,f):x(e,n,r,s,o,a,c,u,f)},H=(t,e,n,r,s,o,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=u?fn(e[l]):hn(e[l]);if(!Ze(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=u?fn(e[d]):hn(e[d]);if(!Ze(r,i))break;y(r,i,n,null,s,o,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,i=t<h?e[t].el:r;while(l<=d)y(null,e[l]=u?fn(e[l]):hn(e[l]),n,i,s,o,a,c,u),l++}}else if(l>d)while(l<=f)K(t[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=u?fn(e[l]):hn(e[l]);null!=t.key&&m.set(t.key,l)}let v,_=0;const w=d-g+1;let b=!1,E=0;const T=new Array(w);for(l=0;l<w;l++)T[l]=0;for(l=p;l<=f;l++){const r=t[l];if(_>=w){K(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=d;v++)if(0===T[v-g]&&Ze(r,e[v])){i=v;break}void 0===i?K(r,s,o,!0):(T[i-g]=l+1,i>=E?E=i:b=!0,y(r,e[i],n,null,s,o,a,c,u),_++)}const C=b?Fe(T):i.Z6;for(v=C.length-1,l=w-1;l>=0;l--){const t=g+l,i=e[t],f=t+1<h?e[t+1].el:r;0===T[l]?y(null,i,n,f,s,o,a,c,u):b&&(v<0||l!==C[v]?G(i,n,f,2):v--)}}},G=(t,e,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void G(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,tt);if(a===Ve){s(o,e,n);for(let t=0;t<u.length;t++)G(u[t],e,n,r);return void s(t.anchor,e,n)}if(a===$e)return void T(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,e,n),Oe((()=>c.enter(o)),i);else{const{leave:t,delayLeave:r,afterLeave:i}=c,a=()=>s(o,e,n),u=()=>{t(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,e,n)},K=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&Re(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!_t(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&gn(g,e,t),6&l)J(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&it(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,tt,r):u&&(s!==Ve||h>0&&64&h)?X(u,e,n,!1,!0):(s===Ve&&384&h||!i&&16&l)&&X(c,e,n),r&&W(t)}(p&&(g=o&&o.onVnodeUnmounted)||d)&&Oe((()=>{g&&gn(g,e,t),d&&it(t,null,e,"unmounted")}),n)},W=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Ve)return void Q(n,r);if(e===$e)return void I(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},Q=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},J=(t,e,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=t;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,K(a,t,e,n)),c&&Oe(c,e),Oe((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},X=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)K(t[o],e,n,r,i)},Y=t=>6&t.shapeFlag?Y(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),Z=(t,e,n)=>{null==t?e._vnode&&K(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),C(),S(),e._vnode=t},tt={p:y,um:K,m:G,r:W,mt:M,mc:x,pc:$,pbc:D,n:Y,o:t};let et,nt;return e&&([et,nt]=e(tt)),{render:Z,hydrate:et,createApp:ue(Z,et)}}function Le({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Pe(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Me(t,e,n=!1){const r=t.children,s=e.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=fn(s[i]),e.el=t.el),n||Me(t,e)),e.type===je&&(e.el=t.el)}}function Fe(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}const Ue=t=>t.__isTeleport;const Ve=Symbol.for("v-fgt"),je=Symbol.for("v-txt"),Be=Symbol.for("v-cmt"),$e=Symbol.for("v-stc"),qe=[];let ze=null;function He(t=!1){qe.push(ze=t?null:[])}function Ge(){qe.pop(),ze=qe[qe.length-1]||null}let Ke=1;function We(t){Ke+=t}function Qe(t){return t.dynamicChildren=Ke>0?ze||i.Z6:null,Ge(),Ke>0&&ze&&ze.push(t),t}function Je(t,e,n,r,i,s){return Qe(rn(t,e,n,r,i,s,!0))}function Xe(t,e,n,r,i){return Qe(sn(t,e,n,r,i,!0))}function Ye(t){return!!t&&!0===t.__v_isVNode}function Ze(t,e){return t.type===e.type&&t.key===e.key}const tn="__vInternal",en=({key:t})=>null!=t?t:null,nn=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,i.HD)(t)||(0,r.dq)(t)||(0,i.mf)(t)?{i:D,r:t,k:e,f:!!n}:t:null);function rn(t,e=null,n=null,r=0,s=null,o=(t===Ve?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&en(e),ref:e&&nn(e),scopeId:N,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:D};return c?(dn(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),Ke>0&&!a&&ze&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&ze.push(u),u}const sn=on;function on(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==G||(t=Be),Ye(t)){const r=cn(t,e,!0);return n&&dn(r,n),Ke>0&&!a&&ze&&(6&r.shapeFlag?ze[ze.indexOf(t)]=r:ze.push(r)),r.patchFlag|=-2,r}if(Un(t)&&(t=t.__vccOpts),e){e=an(e);let{class:t,style:n}=e;t&&!(0,i.HD)(t)&&(e.class=(0,i.C_)(t)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),e.style=(0,i.j5)(n))}const c=(0,i.HD)(t)?1:Q(t)?128:Ue(t)?64:(0,i.Kn)(t)?4:(0,i.mf)(t)?2:0;return rn(t,e,n,s,o,c,a,!0)}function an(t){return t?(0,r.X3)(t)||tn in t?(0,i.l7)({},t):t:null}function cn(t,e,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=t,c=e?pn(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&en(c),ref:e&&e.ref?n&&s?(0,i.kJ)(s)?s.concat(nn(e)):[s,nn(e)]:nn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cn(t.ssContent),ssFallback:t.ssFallback&&cn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u}function un(t=" ",e=0){return sn(je,null,t,e)}function ln(t="",e=!1){return e?(He(),Xe(Be,null,t)):sn(Be,null,t)}function hn(t){return null==t||"boolean"===typeof t?sn(Be):(0,i.kJ)(t)?sn(Ve,null,t.slice()):"object"===typeof t?fn(t):sn(je,null,String(t))}function fn(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:cn(t)}function dn(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),dn(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||tn in e?3===r&&D&&(1===D.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=D}}else(0,i.mf)(e)?(e={default:e,_ctx:D},n=32):(e=String(e),64&r?(n=16,e=[un(e)]):n=8);t.children=e,t.shapeFlag|=n}function pn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C_)([e.class,r.class]));else if("style"===t)e.style=(0,i.j5)([e.style,r.style]);else if((0,i.F7)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=r[t])}return e}function gn(t,e,n,r=null){o(t,e,7,[n,r])}const mn=ae();let yn=0;function vn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||mn,a={uid:yn++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ye(s,o),emitsOptions:x(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=R.bind(null,a),t.ce&&t.ce(a),a}let _n=null;const wn=()=>_n||D;let bn,En,Tn="__VUE_INSTANCE_SETTERS__";(En=(0,i.E9)()[Tn])||(En=(0,i.E9)()[Tn]=[]),En.push((t=>_n=t)),bn=t=>{En.length>1?En.forEach((e=>e(t))):En[0](t)};const Cn=t=>{bn(t),t.scope.on()},Sn=()=>{_n&&_n.scope.off(),bn(null)};function In(t){return 4&t.vnode.shapeFlag}let An,kn,Rn=!1;function xn(t,e=!1){Rn=e;const{props:n,children:r}=t.vnode,i=In(t);de(t,n,i,e),Ae(t,r);const s=i?On(t,e):void 0;return Rn=!1,s}function On(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.Xl)(new Proxy(t.ctx,zt));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?Pn(t):null;Cn(t),(0,r.Jd)();const c=s(o,t,0,[t.props,n]);if((0,r.lk)(),Sn(),(0,i.tI)(c)){if(c.then(Sn,Sn),e)return c.then((n=>{Dn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else Dn(t,c,e)}else Nn(t,e)}function Dn(t,e,n){(0,i.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Kn)(e)&&(t.setupState=(0,r.WL)(e)),Nn(t,n)}function Nn(t,e,n){const s=t.type;if(!t.render){if(!e&&An&&!s.render){const e=s.template||Xt(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=An(e,c)}}t.render=s.render||i.dG,kn&&kn(t)}Cn(t),(0,r.Jd)();try{Kt(t)}finally{(0,r.lk)(),Sn()}}function Ln(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return(0,r.j)(t,"get","$attrs"),e[n]}}))}function Pn(t){const e=e=>{t.exposed=e||{}};return{get attrs(){return Ln(t)},slots:t.slots,emit:t.emit,expose:e}}function Mn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in $t?$t[n](t):void 0},has(t,e){return e in t||e in $t}}))}function Fn(t,e=!0){return(0,i.mf)(t)?t.displayName||t.name:t.name||e&&t.__name}function Un(t){return(0,i.mf)(t)&&"__vccOpts"in t}const Vn=(t,e)=>(0,r.Fl)(t,e,Rn);function jn(t,e,n){const r=arguments.length;return 2===r?(0,i.Kn)(e)&&!(0,i.kJ)(e)?Ye(e)?sn(t,null,[e]):sn(t,e):sn(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Ye(n)&&(n=[n]),sn(t,e,n))}const Bn=Symbol.for("v-scx"),$n=()=>{{const t=fe(Bn);return t}};const qn="3.3.13"},9242:function(t,e,n){n.d(e,{bM:function(){return vt},e8:function(){return mt},nr:function(){return gt},ri:function(){return St}});n(560);var r=n(3396),i=n(7139),s=n(4870);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),u={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?a.createElementNS(o,t):a.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>a.createTextNode(t),createComment:t=>a.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>a.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{c.innerHTML=r?`<svg>${t}</svg>`:t;const i=c.content;if(r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},l="transition",h="animation",f=Symbol("_vtc"),d=(t,{slots:e})=>(0,r.h)(r.P$,v(t),e);d.displayName="Transition";const p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},g=d.props=(0,i.l7)({},r.nJ,p),m=(t,e=[])=>{(0,i.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)},y=t=>!!t&&((0,i.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function v(t){const e={};for(const i in t)i in p||(e[i]=t[i]);if(!1===t.css)return e;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,v=_(s),w=v&&v[0],C=v&&v[1],{onBeforeEnter:I,onEnter:A,onEnterCancelled:k,onLeave:x,onLeaveCancelled:O,onBeforeAppear:D=I,onAppear:N=A,onAppearCancelled:L=k}=e,P=(t,e,n)=>{E(t,e?h:c),E(t,e?l:a),n&&n()},M=(t,e)=>{t._isLeaving=!1,E(t,f),E(t,g),E(t,d),e&&e()},F=t=>(e,n)=>{const i=t?N:A,s=()=>P(e,t,n);m(i,[e,s]),T((()=>{E(e,t?u:o),b(e,t?h:c),y(i)||S(e,r,w,s)}))};return(0,i.l7)(e,{onBeforeEnter(t){m(I,[t]),b(t,o),b(t,a)},onBeforeAppear(t){m(D,[t]),b(t,u),b(t,l)},onEnter:F(!1),onAppear:F(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>M(t,e);b(t,f),R(),b(t,d),T((()=>{t._isLeaving&&(E(t,f),b(t,g),y(x)||S(t,r,C,n))})),m(x,[t,n])},onEnterCancelled(t){P(t,!1),m(k,[t])},onAppearCancelled(t){P(t,!0),m(L,[t])},onLeaveCancelled(t){M(t),m(O,[t])}})}function _(t){if(null==t)return null;if((0,i.Kn)(t))return[w(t.enter),w(t.leave)];{const e=w(t);return[e,e]}}function w(t){const e=(0,i.He)(t);return e}function b(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t[f]||(t[f]=new Set)).add(e)}function E(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const n=t[f];n&&(n.delete(e),n.size||(t[f]=void 0))}function T(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let C=0;function S(t,e,n,r){const i=t._endId=++C,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=I(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,f),s()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),t.addEventListener(u,f)}function I(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(`${l}Delay`),s=r(`${l}Duration`),o=A(i,s),a=r(`${h}Delay`),c=r(`${h}Duration`),u=A(a,c);let f=null,d=0,p=0;e===l?o>0&&(f=l,d=o,p=s.length):e===h?u>0&&(f=h,d=u,p=c.length):(d=Math.max(o,u),f=d>0?o>u?l:h:null,p=f?f===l?s.length:c.length:0);const g=f===l&&/\b(transform|all)(,|$)/.test(r(`${l}Property`).toString());return{type:f,timeout:d,propCount:p,hasTransform:g}}function A(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>k(e)+k(t[n]))))}function k(t){return"auto"===t?0:1e3*Number(t.slice(0,-1).replace(",","."))}function R(){return document.body.offsetHeight}function x(t,e,n){const r=t[f];r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const O=Symbol("_vod");const D=Symbol("");function N(t,e,n){const r=t.style,s=(0,i.HD)(n);if(n&&!s){if(e&&!(0,i.HD)(e))for(const t in e)null==n[t]&&P(r,t,"");for(const t in n)P(r,t,n[t])}else{const i=r.display;if(s){if(e!==n){const t=r[D];t&&(n+=";"+t),r.cssText=n}}else e&&t.removeAttribute("style");O in t&&(r.display=i)}}const L=/\s*!important$/;function P(t,e,n){if((0,i.kJ)(n))n.forEach((n=>P(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=U(t,e);L.test(n)?t.setProperty((0,i.rs)(r),n.replace(L,""),"important"):t[r]=n}}const M=["Webkit","Moz","ms"],F={};function U(t,e){const n=F[e];if(n)return n;let r=(0,i._A)(e);if("filter"!==r&&r in t)return F[e]=r;r=(0,i.kC)(r);for(let i=0;i<M.length;i++){const n=M[i]+r;if(n in t)return F[e]=n}return e}const V="http://www.w3.org/1999/xlink";function j(t,e,n,r,s){if(r&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(V,e.slice(6,e.length)):t.setAttributeNS(V,e,n);else{const r=(0,i.Pq)(e);null==n||r&&!(0,i.yA)(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function B(t,e,n,r,s,o,a){if("innerHTML"===e||"textContent"===e)return r&&a(r,s,o),void(t[e]=null==n?"":n);const c=t.tagName;if("value"===e&&"PROGRESS"!==c&&!c.includes("-")){t._value=n;const r="OPTION"===c?t.getAttribute("value"):t.value,i=null==n?"":n;return r!==i&&(t.value=i),void(null==n&&t.removeAttribute(e))}let u=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=(0,i.yA)(n):null==n&&"string"===r?(n="",u=!0):"number"===r&&(n=0,u=!0)}try{t[e]=n}catch(l){0}u&&t.removeAttribute(e)}function $(t,e,n,r){t.addEventListener(e,n,r)}function q(t,e,n,r){t.removeEventListener(e,n,r)}const z=Symbol("_vei");function H(t,e,n,r,i=null){const s=t[z]||(t[z]={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=K(e);if(r){const o=s[e]=X(r,i);$(t,n,o,a)}else o&&(q(t,n,o,a),s[e]=void 0)}}const G=/(?:Once|Passive|Capture)$/;function K(t){let e;if(G.test(t)){let n;e={};while(n=t.match(G))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,i.rs)(t.slice(2));return[n,e]}let W=0;const Q=Promise.resolve(),J=()=>W||(Q.then((()=>W=0)),W=Date.now());function X(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,r.$d)(Y(t,n.value),e,5,[t])};return n.value=t,n.attached=J(),n}function Y(t,e){if((0,i.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const Z=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,tt=(t,e,n,r,s=!1,o,a,c,u)=>{"class"===e?x(t,r,s):"style"===e?N(t,n,r):(0,i.F7)(e)?(0,i.tR)(e)||H(t,e,n,r,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):et(t,e,r,s))?B(t,e,r,o,a,c,u):("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),j(t,e,r,s))};function et(t,e,n,r){if(r)return"innerHTML"===e||"textContent"===e||!!(e in t&&Z(e)&&(0,i.mf)(n));if("spellcheck"===e||"draggable"===e||"translate"===e)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!Z(e)||!(0,i.HD)(n))&&e in t}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const nt=new WeakMap,rt=new WeakMap,it=Symbol("_moveCb"),st=Symbol("_enterCb"),ot={name:"TransitionGroup",props:(0,i.l7)({},g,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=(0,r.FN)(),i=(0,r.Y8)();let o,a;return(0,r.ic)((()=>{if(!o.length)return;const e=t.moveClass||`${t.name||"v"}-move`;if(!lt(o[0].el,n.vnode.el,e))return;o.forEach(at),o.forEach(ct);const r=o.filter(ut);R(),r.forEach((t=>{const n=t.el,r=n.style;b(n,e),r.transform=r.webkitTransform=r.transitionDuration="";const i=n[it]=t=>{t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener("transitionend",i),n[it]=null,E(n,e))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.IU)(t),u=v(c);let l=c.tag||r.HY;o=a,a=e.default?(0,r.Q6)(e.default()):[];for(let t=0;t<a.length;t++){const e=a[t];null!=e.key&&(0,r.nK)(e,(0,r.U2)(e,u,i,n))}if(o)for(let t=0;t<o.length;t++){const e=o[t];(0,r.nK)(e,(0,r.U2)(e,u,i,n)),nt.set(e,e.el.getBoundingClientRect())}return(0,r.Wm)(l,null,a)}}};ot.props;function at(t){const e=t.el;e[it]&&e[it](),e[st]&&e[st]()}function ct(t){rt.set(t,t.el.getBoundingClientRect())}function ut(t){const e=nt.get(t),n=rt.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${r}px,${i}px)`,e.transitionDuration="0s",t}}function lt(t,e,n){const r=t.cloneNode(),i=t[f];i&&i.forEach((t=>{t.split(/\s+/).forEach((t=>t&&r.classList.remove(t)))})),n.split(/\s+/).forEach((t=>t&&r.classList.add(t))),r.style.display="none";const s=1===e.nodeType?e:e.parentNode;s.appendChild(r);const{hasTransform:o}=I(r);return s.removeChild(r),o}const ht=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,i.kJ)(e)?t=>(0,i.ir)(e,t):e};function ft(t){t.target.composing=!0}function dt(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const pt=Symbol("_assign"),gt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[pt]=ht(s);const o=r||s.props&&"number"===s.props.type;$(t,e?"change":"input",(e=>{if(e.target.composing)return;let r=t.value;n&&(r=r.trim()),o&&(r=(0,i.h5)(r)),t[pt](r)})),n&&$(t,"change",(()=>{t.value=t.value.trim()})),e||($(t,"compositionstart",ft),$(t,"compositionend",dt),$(t,"change",dt))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},o){if(t[pt]=ht(o),t.composing)return;const a=s||"number"===t.type?(0,i.h5)(t.value):t.value,c=null==e?"":e;if(a!==c){if(document.activeElement===t&&"range"!==t.type){if(n)return;if(r&&t.value.trim()===c)return}t.value=c}}},mt={deep:!0,created(t,e,n){t[pt]=ht(n),$(t,"change",(()=>{const e=t._modelValue,n=wt(t),r=t.checked,s=t[pt];if((0,i.kJ)(e)){const t=(0,i.hq)(e,n),o=-1!==t;if(r&&!o)s(e.concat(n));else if(!r&&o){const n=[...e];n.splice(t,1),s(n)}}else if((0,i.DM)(e)){const t=new Set(e);r?t.add(n):t.delete(n),s(t)}else s(bt(t,r))}))},mounted:yt,beforeUpdate(t,e,n){t[pt]=ht(n),yt(t,e,n)}};function yt(t,{value:e,oldValue:n},r){t._modelValue=e,(0,i.kJ)(e)?t.checked=(0,i.hq)(e,r.props.value)>-1:(0,i.DM)(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=(0,i.WV)(e,bt(t,!0)))}const vt={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=(0,i.DM)(e);$(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?(0,i.h5)(wt(t)):wt(t)));t[pt](t.multiple?s?new Set(e):e:e[0])})),t[pt]=ht(r)},mounted(t,{value:e}){_t(t,e)},beforeUpdate(t,e,n){t[pt]=ht(n)},updated(t,{value:e}){_t(t,e)}};function _t(t,e){const n=t.multiple;if(!n||(0,i.kJ)(e)||(0,i.DM)(e)){for(let r=0,s=t.options.length;r<s;r++){const s=t.options[r],o=wt(s);if(n)(0,i.kJ)(e)?s.selected=(0,i.hq)(e,o)>-1:s.selected=e.has(o);else if((0,i.WV)(wt(s),e))return void(t.selectedIndex!==r&&(t.selectedIndex=r))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function wt(t){return"_value"in t?t._value:t.value}function bt(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Et=(0,i.l7)({patchProp:tt},u);let Tt;function Ct(){return Tt||(Tt=(0,r.Us)(Et))}const St=(...t)=>{const e=Ct().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=It(t);if(!r)return;const s=e._component;(0,i.mf)(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function It(t){if((0,i.HD)(t)){const e=document.querySelector(t);return e}return t}},7139:function(t,e,n){n.d(e,{C_:function(){return X},DM:function(){return m},E9:function(){return q},F7:function(){return c},Gg:function(){return R},HD:function(){return w},He:function(){return B},Kj:function(){return v},Kn:function(){return E},NO:function(){return a},Nj:function(){return V},Od:function(){return h},PO:function(){return A},Pq:function(){return Z},RI:function(){return d},S0:function(){return k},W7:function(){return I},WV:function(){return nt},Z6:function(){return s},_A:function(){return D},_N:function(){return g},aU:function(){return F},dG:function(){return o},fY:function(){return r},h5:function(){return j},hR:function(){return M},hq:function(){return rt},ir:function(){return U},j5:function(){return G},kC:function(){return P},kJ:function(){return p},kT:function(){return i},l7:function(){return l},mf:function(){return _},rs:function(){return L},tI:function(){return T},tR:function(){return u},yA:function(){return tt},yk:function(){return b},yl:function(){return H},zw:function(){return it}});n(560);function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}const i={},s=[],o=()=>{},a=()=>!1,c=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),u=t=>t.startsWith("onUpdate:"),l=Object.assign,h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},f=Object.prototype.hasOwnProperty,d=(t,e)=>f.call(t,e),p=Array.isArray,g=t=>"[object Map]"===S(t),m=t=>"[object Set]"===S(t),y=t=>"[object Date]"===S(t),v=t=>"[object RegExp]"===S(t),_=t=>"function"===typeof t,w=t=>"string"===typeof t,b=t=>"symbol"===typeof t,E=t=>null!==t&&"object"===typeof t,T=t=>(E(t)||_(t))&&_(t.then)&&_(t.catch),C=Object.prototype.toString,S=t=>C.call(t),I=t=>S(t).slice(8,-1),A=t=>"[object Object]"===S(t),k=t=>w(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,R=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),x=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},O=/-(\w)/g,D=x((t=>t.replace(O,((t,e)=>e?e.toUpperCase():"")))),N=/\B([A-Z])/g,L=x((t=>t.replace(N,"-$1").toLowerCase())),P=x((t=>t.charAt(0).toUpperCase()+t.slice(1))),M=x((t=>{const e=t?`on${P(t)}`:"";return e})),F=(t,e)=>!Object.is(t,e),U=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},V=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},j=t=>{const e=parseFloat(t);return isNaN(e)?t:e},B=t=>{const e=w(t)?Number(t):NaN;return isNaN(e)?t:e};let $;const q=()=>$||($="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const z="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",H=r(z);function G(t){if(p(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=w(r)?J(r):G(r);if(i)for(const t in i)e[t]=i[t]}return e}if(w(t)||E(t))return t}const K=/;(?![^(]*\))/g,W=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function J(t){const e={};return t.replace(Q,"").split(K).forEach((t=>{if(t){const n=t.split(W);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function X(t){let e="";if(w(t))e=t;else if(p(t))for(let n=0;n<t.length;n++){const r=X(t[n]);r&&(e+=r+" ")}else if(E(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Y="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(Y);function tt(t){return!!t||""===t}function et(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=nt(t[r],e[r]);return n}function nt(t,e){if(t===e)return!0;let n=y(t),r=y(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=b(t),r=b(e),n||r)return t===e;if(n=p(t),r=p(e),n||r)return!(!n||!r)&&et(t,e);if(n=E(t),r=E(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!nt(t[n],e[n]))return!1}}return String(t)===String(e)}function rt(t,e){return t.findIndex((t=>nt(t,e)))}const it=t=>w(t)?t:null==t?"":p(t)||E(t)&&(t.toString===C||!_(t.toString))?JSON.stringify(t,st,2):String(t),st=(t,e)=>e&&e.__v_isRef?st(t,e.value):g(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n],r)=>(t[ot(e,r)+" =>"]=n,t)),{})}:m(e)?{[`Set(${e.size})`]:[...e.values()].map((t=>ot(t)))}:b(e)?ot(e):!E(e)||p(e)||A(e)?e:String(e),ot=(t,e="")=>{var n;return b(t)?`Symbol(${null!=(n=t.description)?n:e})`:t}},89:function(t,e){e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},65:function(t,e,n){n.d(e,{MT:function(){return tt}});n(560);var r=n(3396),i=n(4870);function s(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,c="devtools-plugin:setup",u="plugin:settings:set";let l,h;function f(){var t;return void 0!==l||("undefined"!==typeof window&&window.performance?(l=!0,h=window.performance):"undefined"!==typeof n.g&&(null===(t=n.g.perf_hooks)||void 0===t?void 0:t.performance)?(l=!0,h=n.g.perf_hooks.performance):l=!1),l}function d(){return f()?h.now():Date.now()}class p{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const o in t.settings){const e=t.settings[o];n[o]=e.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},n);try{const t=localStorage.getItem(r),e=JSON.parse(t);Object.assign(i,e)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(t){try{localStorage.setItem(r,JSON.stringify(t))}catch(s){}i=t},now(){return d()}},e&&e.on(u,((t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)})),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise((n=>{this.targetQueue.push({method:e,args:t,resolve:n})}))})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function g(t,e){const n=t,r=o(),i=s(),u=a&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&u){const t=u?new p(n,i):null,s=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else i.emit(c,t,e)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var m="store";function y(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function v(t){return null!==t&&"object"===typeof t}function _(t){return t&&"function"===typeof t.then}function w(t,e){return function(){return t(e)}}function b(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function E(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;C(t,n,[],t._modules.root,!0),T(t,n,e)}function T(t,e,n){var s=t._state,o=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var a=t._wrappedGetters,c={},u={},l=(0,i.B)(!0);l.run((function(){y(a,(function(e,n){c[n]=w(e,t),u[n]=(0,r.Fl)((function(){return c[n]()})),Object.defineProperty(t.getters,n,{get:function(){return u[n].value},enumerable:!0})}))})),t._state=(0,i.qj)({data:e}),t._scope=l,t.strict&&x(t),s&&n&&t._withCommit((function(){s.data=null})),o&&o.stop()}function C(t,e,n,r,i){var s=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!s&&!i){var a=O(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){a[c]=r.state}))}var u=r.context=S(t,o,n);r.forEachMutation((function(e,n){var r=o+n;A(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:o+n,i=e.handler||e;k(t,r,i,u)})),r.forEachGetter((function(e,n){var r=o+n;R(t,r,e,u)})),r.forEachChild((function(r,s){C(t,e,n.concat(s),r,i)}))}function S(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var s=D(n,r,i),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=e+c),t.dispatch(c,o)},commit:r?t.commit:function(n,r,i){var s=D(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=e+c),t.commit(c,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return I(t,e)}},state:{get:function(){return O(t.state,n)}}}),i}function I(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function A(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function k(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return _(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function R(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function x(t){(0,r.YP)((function(){return t._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function O(t,e){return e.reduce((function(t,e){return t[e]}),t)}function D(t,e,n){return v(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var N="vuex bindings",L="vuex:mutations",P="vuex:actions",M="vuex",F=0;function U(t,e){g({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[N]},(function(n){n.addTimelineLayer({id:L,label:"Vuex Mutations",color:V}),n.addTimelineLayer({id:P,label:"Vuex Actions",color:V}),n.addInspector({id:M,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===M)if(n.filter){var r=[];H(r,e._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[z(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===M){var r=n.nodeId;I(e,r),n.state=G(W(e._modules,r),"root"===r?e.getters:e._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===M){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit((function(){n.set(e._state.data,i,n.state.value)}))}})),e.subscribe((function(t,e){var r={};t.payload&&(r.payload=t.payload),r.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(M),n.sendInspectorState(M),n.addTimelineEvent({layerId:L,event:{time:Date.now(),title:t.type,data:r}})})),e.subscribeAction({before:function(t,e){var r={};t.payload&&(r.payload=t.payload),t._id=F++,t._time=Date.now(),r.state=e,n.addTimelineEvent({layerId:P,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:r}})},after:function(t,e){var r={},i=Date.now()-t._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},t.payload&&(r.payload=t.payload),r.state=e,n.addTimelineEvent({layerId:P,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:r}})}})}))}var V=8702998,j=6710886,B=16777215,$={label:"namespaced",textColor:B,backgroundColor:j};function q(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function z(t,e){return{id:e||"root",label:q(e),tags:t.namespaced?[$]:[],children:Object.keys(t._children).map((function(n){return z(t._children[n],e+n+"/")}))}}function H(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[$]:[]}),Object.keys(e._children).forEach((function(i){H(t,e._children[i],n,r+i+"/")}))}function G(t,e,n){e="root"===n?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(r.length){var s=K(e);i.getters=Object.keys(s).map((function(t){return{key:t.endsWith("/")?q(t):t,editable:!1,value:Q((function(){return s[t]}))}}))}return i}function K(t){var e={};return Object.keys(t).forEach((function(n){var r=n.split("/");if(r.length>1){var i=e,s=r.pop();r.forEach((function(t){i[t]||(i[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),i=i[t]._custom.value})),i[s]=Q((function(){return t[n]}))}else e[n]=Q((function(){return t[n]}))})),e}function W(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,r,i){var s=t[r];if(!s)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?s:s._children}),"root"===e?t:t.root._children)}function Q(t){try{return t()}catch(e){return e}}var J=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},X={namespaced:{configurable:!0}};X.namespaced.get=function(){return!!this._rawModule.namespaced},J.prototype.addChild=function(t,e){this._children[t]=e},J.prototype.removeChild=function(t){delete this._children[t]},J.prototype.getChild=function(t){return this._children[t]},J.prototype.hasChild=function(t){return t in this._children},J.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},J.prototype.forEachChild=function(t){y(this._children,t)},J.prototype.forEachGetter=function(t){this._rawModule.getters&&y(this._rawModule.getters,t)},J.prototype.forEachAction=function(t){this._rawModule.actions&&y(this._rawModule.actions,t)},J.prototype.forEachMutation=function(t){this._rawModule.mutations&&y(this._rawModule.mutations,t)},Object.defineProperties(J.prototype,X);var Y=function(t){this.register([],t,!1)};function Z(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;Z(t.concat(r),e.getChild(r),n.modules[r])}}Y.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},Y.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},Y.prototype.update=function(t){Z([],this.root,t)},Y.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new J(e,n);if(0===t.length)this.root=i;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],i)}e.modules&&y(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},Y.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},Y.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};function tt(t){return new et(t)}var et=function(t){var e=this;void 0===t&&(t={});var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var i=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Y(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var s=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(t,e){return a.call(s,t,e)},this.commit=function(t,e,n){return c.call(s,t,e,n)},this.strict=r;var u=this._modules.root.state;C(this,u,[],this._modules.root),T(this,u),n.forEach((function(t){return t(e)}))},nt={state:{configurable:!0}};et.prototype.install=function(t,e){t.provide(e||m,this),t.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&U(t,this)},nt.state.get=function(){return this._state.data},nt.state.set=function(t){0},et.prototype.commit=function(t,e,n){var r=this,i=D(t,e,n),s=i.type,o=i.payload,a=(i.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},et.prototype.dispatch=function(t,e){var n=this,r=D(t,e),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(s)}))):a[0](s);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(u){0}e(t)}))}))}},et.prototype.subscribe=function(t,e){return b(t,this._subscribers,e)},et.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return b(n,this._actionSubscribers,e)},et.prototype.watch=function(t,e,n){var i=this;return(0,r.YP)((function(){return t(i.state,i.getters)}),e,Object.assign({},n))},et.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},et.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),C(this,this.state,t,this._modules.get(t),n.preserveState),T(this,this.state)},et.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=O(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),E(this)},et.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},et.prototype.hotUpdate=function(t){this._modules.update(t),E(this,!0)},et.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(et.prototype,nt);st((function(t,e){var n={};return rt(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=ot(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),st((function(t,e){var n={};return rt(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var s=ot(this.$store,"mapMutations",t);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),st((function(t,e){var n={};return rt(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||ot(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),st((function(t,e){var n={};return rt(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var s=ot(this.$store,"mapActions",t);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n}));function rt(t){return it(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function it(t){return Array.isArray(t)||v(t)}function st(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function ot(t,e,n){var r=t._modulesNamespaceMap[n];return r}},509:function(t,e,n){var r=n(9985),i=n(3691),s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not a function")}},3550:function(t,e,n){var r=n(9985),i=String,s=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw new s("Can't set "+i(t)+" as a prototype")}},767:function(t,e,n){var r=n(3622),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw new i("Incorrect invocation")}},5027:function(t,e,n){var r=n(8999),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not an object")}},7075:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},4872:function(t,e,n){var r,i,s,o=n(7075),a=n(7697),c=n(9037),u=n(9985),l=n(8999),h=n(6812),f=n(926),d=n(3691),p=n(5773),g=n(1880),m=n(2148),y=n(3622),v=n(1868),_=n(9385),w=n(4201),b=n(4630),E=n(618),T=E.enforce,C=E.get,S=c.Int8Array,I=S&&S.prototype,A=c.Uint8ClampedArray,k=A&&A.prototype,R=S&&v(S),x=I&&v(I),O=Object.prototype,D=c.TypeError,N=w("toStringTag"),L=b("TYPED_ARRAY_TAG"),P="TypedArrayConstructor",M=o&&!!_&&"Opera"!==f(c.opera),F=!1,U={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},V={BigInt64Array:8,BigUint64Array:8},j=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(U,e)||h(V,e)},B=function(t){var e=v(t);if(l(e)){var n=C(e);return n&&h(n,P)?n[P]:B(e)}},$=function(t){if(!l(t))return!1;var e=f(t);return h(U,e)||h(V,e)},q=function(t){if($(t))return t;throw new D("Target is not a typed array")},z=function(t){if(u(t)&&(!_||y(R,t)))return t;throw new D(d(t)+" is not a typed array constructor")},H=function(t,e,n,r){if(a){if(n)for(var i in U){var s=c[i];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(u){}}}x[t]&&!n||g(x,t,n?e:M&&I[t]||e,r)}},G=function(t,e,n){var r,i;if(a){if(_){if(n)for(r in U)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(s){}if(R[t]&&!n)return;try{return g(R,t,n?e:M&&R[t]||e)}catch(s){}}for(r in U)i=c[r],!i||i[t]&&!n||g(i,t,e)}};for(r in U)i=c[r],s=i&&i.prototype,s?T(s)[P]=i:M=!1;for(r in V)i=c[r],s=i&&i.prototype,s&&(T(s)[P]=i);if((!M||!u(R)||R===Function.prototype)&&(R=function(){throw new D("Incorrect invocation")},M))for(r in U)c[r]&&_(c[r],R);if((!M||!x||x===O)&&(x=R.prototype,M))for(r in U)c[r]&&_(c[r].prototype,x);if(M&&v(k)!==x&&_(k,x),a&&!h(x,N))for(r in F=!0,m(x,N,{configurable:!0,get:function(){return l(this)?this[L]:void 0}}),U)c[r]&&p(c[r],L,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:F&&L,aTypedArray:q,aTypedArrayConstructor:z,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:G,getTypedArrayConstructor:B,isView:j,isTypedArray:$,TypedArray:R,TypedArrayPrototype:x}},9976:function(t,e,n){var r=n(6310);t.exports=function(t,e,n){var i=0,s=arguments.length>2?n:r(e),o=new t(s);while(s>i)o[i]=e[i++];return o}},4328:function(t,e,n){var r=n(5290),i=n(7578),s=n(6310),o=function(t){return function(e,n,o){var a,c=r(e),u=s(c),l=i(o,u);if(t&&n!==n){while(u>l)if(a=c[l++],a!==a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},5649:function(t,e,n){var r=n(7697),i=n(2297),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!o(t,"length").writable)throw new s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},6166:function(t,e,n){var r=n(6310);t.exports=function(t,e){for(var n=r(t),i=new e(n),s=0;s<n;s++)i[s]=t[n-s-1];return i}},6134:function(t,e,n){var r=n(6310),i=n(8700),s=RangeError;t.exports=function(t,e,n,o){var a=r(t),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw new s("Incorrect index");for(var l=new e(a),h=0;h<a;h++)l[h]=h===u?o:t[h];return l}},6648:function(t,e,n){var r=n(8844),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},926:function(t,e,n){var r=n(3043),i=n(9985),s=n(6648),o=n(4201),a=o("toStringTag"),c=Object,u="Arguments"===s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?s(e):"Object"===(r=s(e))&&i(e.callee)?"Arguments":r}},8758:function(t,e,n){var r=n(6812),i=n(9152),s=n(2474),o=n(2560);t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},1748:function(t,e,n){var r=n(3689);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},5773:function(t,e,n){var r=n(7697),i=n(2560),s=n(5684);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},5684:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},2148:function(t,e,n){var r=n(8702),i=n(2560);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},1880:function(t,e,n){var r=n(9985),i=n(2560),s=n(8702),o=n(5014);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&s(n,u,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},5014:function(t,e,n){var r=n(9037),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},7697:function(t,e,n){var r=n(3689);t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},2659:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},6420:function(t,e,n){var r=n(9037),i=n(8999),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},5565:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},7136:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},71:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},3615:function(t,e,n){var r,i,s=n(9037),o=n(71),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},2739:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6610:function(t,e,n){var r=n(8844),i=Error,s=r("".replace),o=function(t){return String(new i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=s(t,a,"");return t}},9989:function(t,e,n){var r=n(9037),i=n(2474).f,s=n(5773),o=n(1880),a=n(5014),c=n(8758),u=n(5266);t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,y=t.stat;if(l=m?r:y?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(y?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&s(d,"sham",!0),o(l,h,d,t)}}},3689:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},7215:function(t,e,n){var r=n(3689);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},2615:function(t,e,n){var r=n(7215),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},1236:function(t,e,n){var r=n(7697),i=n(6812),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},2743:function(t,e,n){var r=n(8844),i=n(509);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(s){}}},8844:function(t,e,n){var r=n(7215),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);t.exports=r?o:function(t){return function(){return s.apply(t,arguments)}}},6058:function(t,e,n){var r=n(9037),i=n(9985),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},4849:function(t,e,n){var r=n(509),i=n(981);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},9037:function(t,e,n){var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},6812:function(t,e,n){var r=n(8844),i=n(690),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},7248:function(t){t.exports={}},8506:function(t,e,n){var r=n(7697),i=n(3689),s=n(6420);t.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},4413:function(t,e,n){var r=n(8844),i=n(3689),s=n(6648),o=Object,a=r("".split);t.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"===s(t)?a(t,""):o(t)}:o},3457:function(t,e,n){var r=n(9985),i=n(8999),s=n(9385);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},6738:function(t,e,n){var r=n(8844),i=n(9985),s=n(4091),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},618:function(t,e,n){var r,i,s,o=n(9834),a=n(9037),c=n(8999),u=n(5773),l=n(6812),h=n(4091),f=n(2713),d=n(7248),p="Object already initialized",g=a.TypeError,m=a.WeakMap,y=function(t){return s(t)?i(t):r(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw new g("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var _=h.state||(h.state=new m);_.get=_.get,_.has=_.has,_.set=_.set,r=function(t,e){if(_.has(t))throw new g(p);return e.facade=t,_.set(t,e),e},i=function(t){return _.get(t)||{}},s=function(t){return _.has(t)}}else{var w=f("state");d[w]=!0,r=function(t,e){if(l(t,w))throw new g(p);return e.facade=t,u(t,w,e),e},i=function(t){return l(t,w)?t[w]:{}},s=function(t){return l(t,w)}}t.exports={set:r,get:i,has:s,enforce:y,getterFor:v}},2297:function(t,e,n){var r=n(6648);t.exports=Array.isArray||function(t){return"Array"===r(t)}},9401:function(t,e,n){var r=n(926);t.exports=function(t){var e=r(t);return"BigInt64Array"===e||"BigUint64Array"===e}},9985:function(t,e,n){var r=n(2659),i=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===i}:function(t){return"function"==typeof t}},5266:function(t,e,n){var r=n(3689),i=n(9985),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n===l||n!==u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},981:function(t){t.exports=function(t){return null===t||void 0===t}},8999:function(t,e,n){var r=n(9985),i=n(2659),s=i.all;t.exports=i.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===s}:function(t){return"object"==typeof t?null!==t:r(t)}},3931:function(t){t.exports=!1},734:function(t,e,n){var r=n(6058),i=n(9985),s=n(3622),o=n(9525),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&s(e.prototype,a(t))}},6310:function(t,e,n){var r=n(3126);t.exports=function(t){return r(t.length)}},8702:function(t,e,n){var r=n(8844),i=n(3689),s=n(9985),o=n(6812),a=n(7697),c=n(1236).CONFIGURABLE,u=n(6738),l=n(618),h=l.enforce,f=l.get,d=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),y=r([].join),v=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),_=String(String).split("String"),w=t.exports=function(t,e,n){"Symbol("===g(d(e),0,7)&&(e="["+m(d(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),v&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return o(r,"source")||(r.source=y(_,"string"==typeof e?e:"")),t};Function.prototype.toString=w((function(){return s(this)&&f(this).source||u(this)}),"toString")},8828:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},3841:function(t,e,n){var r=n(4327);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},2560:function(t,e,n){var r=n(7697),i=n(8506),s=n(5648),o=n(5027),a=n(8360),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(o(t),e=a(e),o(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},2474:function(t,e,n){var r=n(7697),i=n(2615),s=n(9556),o=n(5684),a=n(5290),c=n(8360),u=n(6812),l=n(8506),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},2741:function(t,e,n){var r=n(4948),i=n(2739),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},7518:function(t,e){e.f=Object.getOwnPropertySymbols},1868:function(t,e,n){var r=n(6812),i=n(9985),s=n(690),o=n(2713),a=n(1748),c=o("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=s(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},3622:function(t,e,n){var r=n(8844);t.exports=r({}.isPrototypeOf)},4948:function(t,e,n){var r=n(8844),i=n(6812),s=n(5290),o=n(4328).indexOf,a=n(7248),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},9556:function(t,e){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},9385:function(t,e,n){var r=n(2743),i=n(5027),s=n(3550);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},5899:function(t,e,n){var r=n(2615),i=n(9985),s=n(8999),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!s(a=r(n,t)))return a;if(i(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!s(a=r(n,t)))return a;throw new o("Can't convert object to primitive value")}},9152:function(t,e,n){var r=n(6058),i=n(8844),s=n(2741),o=n(7518),a=n(5027),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},4684:function(t,e,n){var r=n(981),i=TypeError;t.exports=function(t){if(r(t))throw new i("Can't call method on "+t);return t}},2713:function(t,e,n){var r=n(3430),i=n(4630),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},4091:function(t,e,n){var r=n(9037),i=n(5014),s="__core-js_shared__",o=r[s]||i(s,{});t.exports=o},3430:function(t,e,n){var r=n(3931),i=n(4091);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.34.0",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.34.0/LICENSE",source:"https://github.com/zloirock/core-js"})},146:function(t,e,n){var r=n(3615),i=n(3689),s=n(9037),o=s.String;t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol("symbol detection");return!o(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},7578:function(t,e,n){var r=n(8700),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},1530:function(t,e,n){var r=n(8732),i=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw new i("Can't convert number to bigint");return BigInt(e)}},5290:function(t,e,n){var r=n(4413),i=n(4684);t.exports=function(t){return r(i(t))}},8700:function(t,e,n){var r=n(8828);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},3126:function(t,e,n){var r=n(8700),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},690:function(t,e,n){var r=n(4684),i=Object;t.exports=function(t){return i(r(t))}},8732:function(t,e,n){var r=n(2615),i=n(8999),s=n(734),o=n(4849),a=n(5899),c=n(4201),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,c=o(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||s(n))return n;throw new u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},8360:function(t,e,n){var r=n(8732),i=n(734);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},3043:function(t,e,n){var r=n(4201),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},4327:function(t,e,n){var r=n(926),i=String;t.exports=function(t){if("Symbol"===r(t))throw new TypeError("Cannot convert a Symbol value to a string");return i(t)}},3691:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},4630:function(t,e,n){var r=n(8844),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},9525:function(t,e,n){var r=n(146);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5648:function(t,e,n){var r=n(7697),i=n(3689);t.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},1500:function(t){var e=TypeError;t.exports=function(t,n){if(t<n)throw new e("Not enough arguments");return t}},9834:function(t,e,n){var r=n(9037),i=n(9985),s=r.WeakMap;t.exports=i(s)&&/native code/.test(String(s))},4201:function(t,e,n){var r=n(9037),i=n(3430),s=n(6812),o=n(4630),a=n(146),c=n(9525),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;t.exports=function(t){return s(l,t)||(l[t]=a&&s(u,t)?u[t]:h("Symbol."+t)),l[t]}},560:function(t,e,n){var r=n(9989),i=n(690),s=n(6310),o=n(5649),a=n(5565),c=n(3689),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=s(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return o(e,n),n}})},4224:function(t,e,n){var r=n(6166),i=n(4872),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},1121:function(t,e,n){var r=n(4872),i=n(8844),s=n(509),o=n(9976),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(t){void 0!==t&&s(t);var e=a(this),n=o(c(e),e);return l(n,t)}))},7133:function(t,e,n){var r=n(6134),i=n(4872),s=n(9401),o=n(8700),a=n(1530),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();l("with",{with:function(t,e){var n=c(this),i=o(t),l=s(n)?a(e):+e;return r(n,u(n),i,l)}}["with"],!h)},3429:function(t,e,n){var r=n(9989),i=n(9037),s=n(6058),o=n(5684),a=n(2560).f,c=n(6812),u=n(767),l=n(3457),h=n(3841),f=n(7136),d=n(6610),p=n(7697),g=n(3931),m="DOMException",y=s("Error"),v=s(m),_=function(){u(this,w);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new v(e,n),i=new y(e);return i.name=m,a(r,"stack",o(1,d(i.stack,1))),l(r,this,_),r},w=_.prototype=v.prototype,b="stack"in new y(m),E="stack"in new v(1,2),T=v&&p&&Object.getOwnPropertyDescriptor(i,m),C=!!T&&!(T.writable&&T.configurable),S=b&&!C&&!E;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?_:v});var I=s(m),A=I.prototype;if(A.constructor!==I)for(var k in g||a(A,"constructor",o(1,I)),f)if(c(f,k)){var R=f[k],x=R.s;c(I,x)||a(I,x,o(6,R.c))}},8858:function(t,e,n){var r=n(1880),i=n(8844),s=n(4327),o=n(1500),a=URLSearchParams,c=a.prototype,u=i(c.append),l=i(c["delete"]),h=i(c.forEach),f=i([].push),d=new a("a=1&a=2&b=3");d["delete"]("a",1),d["delete"]("b",void 0),d+""!=="a=2"&&r(c,"delete",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return l(this,t);var r=[];h(this,(function(t,e){f(r,{key:e,value:t})})),o(e,1);var i,a=s(t),c=s(n),d=0,p=0,g=!1,m=r.length;while(d<m)i=r[d++],g||i.key===a?(g=!0,l(this,i.key)):p++;while(p<m)i=r[p++],i.key===a&&i.value===c||u(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},1318:function(t,e,n){var r=n(1880),i=n(8844),s=n(4327),o=n(1500),a=URLSearchParams,c=a.prototype,u=i(c.getAll),l=i(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(c,"has",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return l(this,t);var r=u(this,t);o(e,1);var i=s(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},3228:function(t,e,n){var r=n(7697),i=n(8844),s=n(2148),o=URLSearchParams.prototype,a=i(o.forEach);r&&!("size"in o)&&s(o,"size",{get:function(){var t=0;return a(this,(function(){t++})),t},configurable:!0,enumerable:!0})},7077:function(t,e,n){n.d(e,{Jn:function(){return gt},qX:function(){return ht},Xd:function(){return lt},Mq:function(){return yt},ZF:function(){return mt},KN:function(){return vt}});n(560);var r=n(7142),i=n(5168),s=n(223);n(3429);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function y(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));f.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function _(t){v=t(v)}function w(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function b(t){return"function"===typeof t?w(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,v):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=b(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function C(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],A=new Map;function k(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(A.get(e))return A.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return A.set(e,s),s}_((t=>({...t,get:(e,n,r)=>k(e,n)||t.get(e,n,r),has:(e,n)=>!!k(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(x(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function x(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const O="@firebase/app",D="0.9.25",N=new i.Yd("@firebase/app"),L="@firebase/app-compat",P="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",U="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",B="@firebase/database",$="@firebase/database-compat",q="@firebase/functions",z="@firebase/functions-compat",H="@firebase/installations",G="@firebase/installations-compat",K="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",J="@firebase/performance-compat",X="@firebase/remote-config",Y="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="10.7.1",st="[DEFAULT]",ot={[O]:"fire-core",[L]:"fire-core-compat",[M]:"fire-analytics",[P]:"fire-analytics-compat",[U]:"fire-app-check",[F]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[B]:"fire-rtdb",[$]:"fire-rtdb-compat",[q]:"fire-fn",[z]:"fire-fn-compat",[H]:"fire-iid",[G]:"fire-iid-compat",[K]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[J]:"fire-perf-compat",[X]:"fire-rc",[Y]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){N.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return N.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ft={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dt=new s.LL("app","Firebase",ft);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=it;function mt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!==typeof o||!o)throw dt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw dt.create("no-options");const a=at.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw dt.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ct.values())c.addComponent(r);const u=new pt(n,i,c);return at.set(o,u),u}function yt(t=st){const e=at.get(t);if(!e&&t===st&&(0,s.aH)())return mt();if(!e)throw dt.create("no-app",{appName:t});return e}function vt(t,e,n){var i;let s=null!==(i=ot[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void N.warn(t.join(" "))}lt(new r.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _t="firebase-heartbeat-database",wt=1,bt="firebase-heartbeat-store";let Et=null;function Tt(){return Et||(Et=C(_t,wt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bt)}}}).catch((t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})}))),Et}async function Ct(t){try{const e=await Tt(),n=await e.transaction(bt).objectStore(bt).get(It(t));return n}catch(e){if(e instanceof s.ZR)N.warn(e.message);else{const t=dt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});N.warn(t.message)}}}async function St(t,e){try{const n=await Tt(),r=n.transaction(bt,"readwrite"),i=r.objectStore(bt);await i.put(e,It(t)),await r.done}catch(n){if(n instanceof s.ZR)N.warn(n.message);else{const t=dt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});N.warn(t.message)}}}function It(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=1024,kt=2592e6;class Rt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Dt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=xt();if((null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==i&&!this._heartbeatsCache.heartbeats.some((t=>t.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=kt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=xt(),{heartbeatsToSend:n,unsentEntries:r}=Ot(this._heartbeatsCache.heartbeats),i=(0,s.L)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function xt(){const t=new Date;return t.toISOString().substring(0,10)}function Ot(t,e=At){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Nt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Nt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Ct(this.app);return(null===t||void 0===t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Nt(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){lt(new r.wA("platform-logger",(t=>new R(t)),"PRIVATE")),lt(new r.wA("heartbeat",(t=>new Rt(t)),"PRIVATE")),vt(O,D,t),vt(O,D,"esm2017"),vt("fire-js","")}Lt("")},7142:function(t,e,n){n.d(e,{H0:function(){return u},wA:function(){return i}});var r=n(223);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){n.d(e,{Yd:function(){return u},in:function(){return i}});n(560);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},7795:function(t,e,n){n.d(e,{ZF:function(){return r.ZF}});var r=n(7077),i="firebase",s="10.7.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,s,"app")},4287:function(t,e,n){n.d(e,{ET:function(){return Gh},hJ:function(){return rh},oe:function(){return Hh},JU:function(){return ih},QT:function(){return Bh},PL:function(){return qh},ad:function(){return ah},pl:function(){return zh}});n(4224),n(1121),n(7133),n(560),n(3429);var r,i=n(7077),s=n(7142),o=n(5168),a=n(223),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function d(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function p(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++m)}var g="closure_uid_"+(1e9*Math.random()>>>0),m=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function v(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function _(t,e,n){return _=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:v,_.apply(null,arguments)}function w(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function b(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function E(){this.s=this.s,this.o=this.o}var T=0;E.prototype.s=!1,E.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==T)||p(this)},E.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function S(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function I(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function A(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};h.addEventListener("test",t,e),h.removeEventListener("test",t,e)}catch(n){}return t}();function R(t){return/^[\s\xa0]*$/.test(t)}function x(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function O(t){return-1!=x().indexOf(t)}function D(t){return D[" "](t),t}function N(t,e){var n=wr;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}D[" "]=function(){};var L,P,M=O("Opera"),F=O("Trident")||O("MSIE"),U=O("Edge"),V=U||F,j=O("Gecko")&&!(-1!=x().toLowerCase().indexOf("webkit")&&!O("Edge"))&&!(O("Trident")||O("MSIE"))&&!O("Edge"),B=-1!=x().toLowerCase().indexOf("webkit")&&!O("Edge");function $(){var t=h.document;return t?t.documentMode:void 0}t:{var q="",z=function(){var t=x();return j?/rv:([^\);]+)(\)|;)/.exec(t):U?/Edge\/([\d\.]+)/.exec(t):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):B?/WebKit\/(\S+)/.exec(t):M?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(z&&(q=z?z[1]:""),F){var H=$();if(null!=H&&H>parseFloat(q)){L=String(H);break t}}L=q}if(h.document&&F){var G=$();P=G||(parseInt(L,10)||void 0)}else P=void 0;var K=P;function W(t,e){if(A.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(j){t:{try{D(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:Q[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&W.$.h.call(this)}}b(W,A);var Q={2:"touch",3:"pen",4:"mouse"};W.prototype.h=function(){W.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var J="closure_listenable_"+(1e6*Math.random()|0),X=0;function Y(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++X,this.fa=this.ia=!1}function Z(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function tt(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function et(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function nt(t){const e={};for(const n in t)e[n]=t[n];return e}const rt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function it(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<rt.length;e++)n=rt[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function st(t){this.src=t,this.g={},this.h=0}function ot(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=C(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Z(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}st.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=at(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Y(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};var ct="closure_lm_"+(1e6*Math.random()|0),ut={};function lt(t,e,n,r,i){if(r&&r.once)return dt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)lt(t,e[s],n,r,i);return null}return n=wt(n),t&&t[J]?t.O(e,n,d(r)?!!r.capture:!!r,i):ht(t,e,n,!1,r,i)}function ht(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=d(i)?!!i.capture:!!i,a=vt(t);if(a||(t[ct]=a=new st(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ft(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)k||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(mt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ft(){function t(n){return e.call(t.src,t.listener,n)}const e=yt;return t}function dt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)dt(t,e[s],n,r,i);return null}return n=wt(n),t&&t[J]?t.P(e,n,d(r)?!!r.capture:!!r,i):ht(t,e,n,!0,r,i)}function pt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)pt(t,e[s],n,r,i);else r=d(r)?!!r.capture:!!r,n=wt(n),t&&t[J]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=at(s,n,r,i),-1<n&&(Z(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=vt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,r,i)),(n=-1<t?e[t]:null)&&gt(n))}function gt(t){if("number"!==typeof t&&t&&!t.fa){var e=t.src;if(e&&e[J])ot(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(mt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=vt(e))?(ot(n,t),0==n.h&&(n.src=null,e[ct]=null)):Z(t)}}}function mt(t){return t in ut?ut[t]:ut[t]="on"+t}function yt(t,e){if(t.fa)t=!0;else{e=new W(e,this);var n=t.listener,r=t.la||t.src;t.ia&&gt(t),t=n.call(r,e)}return t}function vt(t){return t=t[ct],t instanceof st?t:null}var _t="__closure_events_fn_"+(1e9*Math.random()>>>0);function wt(t){return"function"===typeof t?t:(t[_t]||(t[_t]=function(e){return t.handleEvent(e)}),t[_t])}function bt(){E.call(this),this.i=new st(this),this.S=this,this.J=null}function Et(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"===typeof e)e=new A(e,t);else if(e instanceof A)e.target=e.target||t;else{var i=e;e=new A(r,t),it(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Tt(o,r,!0,e)&&i}if(o=e.g=t,i=Tt(o,r,!0,e)&&i,i=Tt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Tt(o,r,!1,e)&&i}function Tt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ot(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}b(bt,E),bt.prototype[J]=!0,bt.prototype.removeEventListener=function(t,e,n,r){pt(this,t,e,n,r)},bt.prototype.N=function(){if(bt.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Z(n[r]);delete e.g[t],e.h--}}this.J=null},bt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},bt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Ct=h.JSON.stringify;class St{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function It(){var t=Lt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class At{constructor(){this.h=this.g=null}add(t,e){const n=kt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var kt=new St((()=>new Rt),(t=>t.reset()));class Rt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function xt(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Ot(t){h.setTimeout((()=>{throw t}),0)}let Dt,Nt=!1,Lt=new At,Pt=()=>{const t=h.Promise.resolve(void 0);Dt=()=>{t.then(Mt)}};var Mt=()=>{for(var t;t=It();){try{t.h.call(t.g)}catch(n){Ot(n)}var e=kt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Nt=!1};function Ft(t,e){bt.call(this),this.h=t||1,this.g=e||h,this.j=_(this.qb,this),this.l=Date.now()}function Ut(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Vt(t,e,n){if("function"===typeof t)n&&(t=_(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=_(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function jt(t){t.g=Vt((()=>{t.g=null,t.i&&(t.i=!1,jt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}b(Ft,bt),r=Ft.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Et(this,"tick"),this.ga&&(Ut(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Ft.$.N.call(this),Ut(this),delete this.g};class Bt extends E{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:jt(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $t(t){E.call(this),this.h=t,this.g={}}b($t,E);var qt=[];function zt(t,e,n,r){Array.isArray(n)||(n&&(qt[0]=n.toString()),n=qt);for(var i=0;i<n.length;i++){var s=lt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ht(t){tt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&gt(t)}),t),t.g={}}function Gt(){this.g=!0}function Kt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Wt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Qt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Xt(t,n)+(r?" "+r:"")}))}function Jt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Xt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ct(n)}catch(a){return e}}$t.prototype.N=function(){$t.$.N.call(this),Ht(this)},$t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Gt.prototype.Ea=function(){this.g=!1},Gt.prototype.info=function(){};var Yt={},Zt=null;function te(){return Zt=Zt||new bt}function ee(t){A.call(this,Yt.Ta,t)}function ne(t){const e=te();Et(e,new ee(e))}function re(t,e){A.call(this,Yt.STAT_EVENT,t),this.stat=e}function ie(t){const e=te();Et(e,new re(e,t))}function se(t,e){A.call(this,Yt.Ua,t),this.size=e}function oe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}Yt.Ta="serverreachability",b(ee,A),Yt.STAT_EVENT="statevent",b(re,A),Yt.Ua="timingevent",b(se,A);var ae={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ce={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ue(){}function le(t){return t.h||(t.h=t.i())}function he(){}ue.prototype.h=null;var fe,de={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pe(){A.call(this,"d")}function ge(){A.call(this,"c")}function me(){}function ye(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new $t(this),this.P=_e,t=V?125:void 0,this.V=new Ft(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ve}function ve(){this.i=null,this.g="",this.h=!1}b(pe,A),b(ge,A),b(me,ue),me.prototype.g=function(){return new XMLHttpRequest},me.prototype.i=function(){return{}},fe=new me;var _e=45e3,we={},be={};function Ee(t,e,n){t.L=1,t.A=ze(Ve(e)),t.u=n,t.S=!0,Te(t,null)}function Te(t,e){t.G=Date.now(),Ae(t),t.B=Ve(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),rn(n.i,"t",r),t.o=0,n=t.l.J,t.h=new ve,t.g=ur(t.l,n?e:null,!t.u),0<t.O&&(t.M=new Bt(_(t.Pa,t,t.g),t.O)),zt(t.U,t.g,"readystatechange",t.nb),e=t.I?nt(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),ne(),Kt(t.j,t.v,t.B,t.m,t.W,t.u)}function Ce(t){return!!t.g&&("GET"==t.v&&2!=t.L&&t.l.Ha)}function Se(t,e,n){let r,i=!0;for(;!t.J&&t.o<n.length;){if(r=Ie(t,n),r==be){4==e&&(t.s=4,ie(14),i=!1),Qt(t.j,t.m,null,"[Incomplete Response]");break}if(r==we){t.s=4,ie(15),Qt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Qt(t.j,t.m,r,null),De(t,r)}Ce(t)&&0!=t.o&&(t.h.g=t.h.g.slice(t.o),t.o=0),4!=e||0!=n.length||t.h.h||(t.s=1,ie(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),er(e),e.M=!0,ie(11))):(Qt(t.j,t.m,n,"[Invalid Chunked Response]"),Oe(t),xe(t))}function Ie(t,e){var n=t.o,r=e.indexOf("\n",n);return-1==r?be:(n=Number(e.substring(n,r)),isNaN(n)?we:(r+=1,r+n>e.length?be:(e=e.slice(r,r+n),t.o=r+n,e)))}function Ae(t){t.Y=Date.now()+t.P,ke(t,t.P)}function ke(t,e){if(null!=t.C)throw Error("WatchDog timer not null");t.C=oe(_(t.lb,t),e)}function Re(t){t.C&&(h.clearTimeout(t.C),t.C=null)}function xe(t){0==t.l.H||t.J||ir(t.l,t)}function Oe(t){Re(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Ut(t.V),Ht(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function De(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||fn(n.i,t)))if(!t.K&&fn(n.i,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;rr(n),Gn(n)}tr(n),ie(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=oe(_(n.ib,n),6e3));if(1>=hn(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else or(n,11)}else if((t.K||n.g==t)&&rr(n),!R(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const e=u[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(dn(s,s.h),s.h=null))}if(r.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,qe(r.I,r.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=cr(r,r.J?r.pa:null,r.Y),o.K){pn(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Re(a),Ae(a)),r.g=o}else Zn(r);0<n.j.length&&Wn(n)}else"stop"!=u[0]&&"close"!=u[0]||or(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?or(n,7):Hn(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}ne(4)}catch(u){}}function Ne(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Le(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Pe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Le(t),r=Ne(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}r=ye.prototype,r.setTimeout=function(t){this.P=t},r.nb=function(t){t=t.target;const e=this.M;e&&3==Un(t)?e.l():this.Pa(t)},r.Pa=function(t){try{if(t==this.g)t:{const l=Un(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>l)&&(3!=l||V||this.g&&(this.h.h||this.g.ja()||Vn(this.g)))){this.J||4!=l||7==e||ne(8==e||0>=f?3:2),Re(this);var n=this.g.da();this.ca=n;e:if(Ce(this)){var r=Vn(this.g);t="";var i=r.length,s=4==Un(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Oe(this),xe(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Wt(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.s=3,ie(12),Oe(this),xe(this);break t}Qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,De(this,n)}this.S?(Se(this,l,o),V&&this.i&&3==l&&(zt(this.U,this.V,"tick",this.mb),this.V.start())):(Qt(this.j,this.m,o,null),De(this,o)),4==l&&Oe(this),this.i&&!this.J&&(4==l?ir(this.l,this):(this.i=!1,Ae(this)))}else jn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,ie(12)):(this.s=0,ie(13)),Oe(this),xe(this)}}}catch(l){}},r.mb=function(){if(this.g){var t=Un(this.g),e=this.g.ja();this.o<e.length&&(Re(this),Se(this,t,e),this.i&&4!=t&&Ae(this))}},r.cancel=function(){this.J=!0,Oe(this)},r.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(Jt(this.j,this.B),2!=this.L&&(ne(),ie(17)),Oe(this),this.s=2,xe(this)):ke(this,this.Y-t)};var Me=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fe(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ue(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ue){this.h=t.h,je(this,t.j),this.s=t.s,this.g=t.g,Be(this,t.m),this.l=t.l;var e=t.i,n=new Ze;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),$e(this,n),this.o=t.o}else t&&(e=String(t).match(Me))?(this.h=!1,je(this,e[1]||"",!0),this.s=He(e[2]||""),this.g=He(e[3]||"",!0),Be(this,e[4]),this.l=He(e[5]||"",!0),$e(this,e[6]||"",!0),this.o=He(e[7]||"")):(this.h=!1,this.i=new Ze(null,this.h))}function Ve(t){return new Ue(t)}function je(t,e,n){t.j=n?He(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Be(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $e(t,e,n){e instanceof Ze?(t.i=e,on(t.i,t.h)):(n||(e=Ge(e,Xe)),t.i=new Ze(e,t.h))}function qe(t,e,n){t.i.set(e,n)}function ze(t){return qe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function He(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ge(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ke),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ke(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ue.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ge(e,We,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ge(e,We,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ge(n,"/"==n.charAt(0)?Je:Qe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ge(n,Ye)),t.join("")};var We=/[#\/\?@]/g,Qe=/[#\?:]/g,Je=/[#\?]/g,Xe=/[#\?@]/g,Ye=/#/g;function Ze(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tn(t){t.g||(t.g=new Map,t.h=0,t.i&&Fe(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function en(t,e){tn(t),e=sn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nn(t,e){return tn(t),e=sn(t,e),t.g.has(e)}function rn(t,e,n){en(t,e),0<n.length&&(t.i=null,t.g.set(sn(t,e),S(n)),t.h+=n.length)}function sn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function on(t,e){e&&!t.j&&(tn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(en(this,e),rn(this,n,t))}),t)),t.j=e}r=Ze.prototype,r.add=function(t,e){tn(this),this.i=null,t=sn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){tn(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.ta=function(){tn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},r.Z=function(t){tn(this);let e=[];if("string"===typeof t)nn(this,t)&&(e=e.concat(this.g.get(sn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return tn(this),this.i=null,t=sn(this,t),nn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};var an=class{constructor(t,e){this.g=t,this.map=e}};function cn(t){this.l=t||un,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var un=10;function ln(t){return!!t.h||!!t.g&&t.g.size>=t.j}function hn(t){return t.h?1:t.g?t.g.size:0}function fn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function dn(t,e){t.g?t.g.add(e):t.h=e}function pn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function gn(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return S(t.i)}cn.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var mn=class{stringify(t){return h.JSON.stringify(t,void 0)}parse(t){return h.JSON.parse(t,void 0)}};function yn(){this.g=new mn}function vn(t,e,n){const r=n||"";try{Pe(t,(function(t,n){let i=t;d(t)&&(i=Ct(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function _n(t,e){const n=new Gt;if(h.Image){const r=new Image;r.onload=w(wn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=w(wn,n,r,"TestLoadImage: error",!1,e),r.onabort=w(wn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=w(wn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function wn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function bn(t){this.l=t.ec||null,this.j=t.ob||!1}function En(t,e){bt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Tn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}b(bn,ue),bn.prototype.g=function(){return new En(this.l,this.j)},bn.prototype.i=function(t){return function(){return t}}({}),b(En,bt);var Tn=0;function Cn(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Sn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,In(t)}function In(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=En.prototype,r.open=function(t,e){if(this.readyState!=Tn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,In(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||h).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Sn(this)),this.readyState=Tn},r.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cn(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Sn(this):In(this),3==this.readyState&&Cn(this)}},r.Za=function(t){this.g&&(this.response=this.responseText=t,Sn(this))},r.Ya=function(t){this.g&&(this.response=t,Sn(this))},r.ka=function(){this.g&&Sn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(En.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var An=h.JSON.parse;function kn(t){bt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Rn,this.L=this.M=!1}b(kn,bt);var Rn="",xn=/^https?$/i,On=["POST","PUT"];function Dn(t){return F&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Nn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ln(t),Mn(t)}function Ln(t){t.F||(t.F=!0,Et(t,"complete"),Et(t,"error"))}function Pn(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=Un(t)||2!=t.da()))if(t.v&&4==Un(t))Vt(t.La,0,t);else if(Et(t,"readystatechange"),4==Un(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var i=String(t.I).match(Me)[1]||null;!i&&h.self&&h.self.location&&(i=h.self.location.protocol.slice(0,-1)),r=!xn.test(i?i.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var s=2<Un(t)?t.g.statusText:""}catch(o){s=""}t.j=s+" ["+t.da()+"]",Ln(t)}}finally{Mn(t)}}}function Mn(t,e){if(t.g){Fn(t);const r=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Et(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Fn(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Un(t){return t.g?t.g.readyState:0}function Vn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Rn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Jr){return null}}function jn(t){const e={};t=(t.g&&2<=Un(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(R(t[r]))continue;var n=xt(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}et(e,(function(t){return t.join(", ")}))}function Bn(t){let e="";return tt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function $n(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Bn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):qe(t,e,n))}function qn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zn(t){this.Ga=0,this.j=[],this.l=new Gt,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=qn("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=qn("baseRetryDelayMs",5e3,t),this.hb=qn("retryDelaySeedMs",1e4,t),this.eb=qn("forwardChannelMaxRetries",2,t),this.xa=qn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new cn(t&&t.concurrentRequestLimit),this.Ja=new yn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Hn(t){if(Kn(t),3==t.H){var e=t.W++,n=Ve(t.I);if(qe(n,"SID",t.K),qe(n,"RID",e),qe(n,"TYPE","terminate"),Xn(t,n),e=new ye(t,t.l,e),e.L=2,e.A=ze(Ve(n)),n=!1,h.navigator&&h.navigator.sendBeacon)try{n=h.navigator.sendBeacon(e.A.toString(),"")}catch(r){}!n&&h.Image&&((new Image).src=e.A,n=!0),n||(e.g=ur(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ae(e)}ar(t)}function Gn(t){t.g&&(er(t),t.g.cancel(),t.g=null)}function Kn(t){Gn(t),t.u&&(h.clearTimeout(t.u),t.u=null),rr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Wn(t){if(!ln(t.i)&&!t.m){t.m=!0;var e=t.Na;Dt||Pt(),Nt||(Dt(),Nt=!0),Lt.add(e,t),t.C=0}}function Qn(t,e){return!(hn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=e.F.concat(t.j),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=oe(_(t.Na,t,e),sr(t,t.C)),t.C++,!0))}function Jn(t,e){var n;n=e?e.m:t.W++;const r=Ve(t.I);qe(r,"SID",t.K),qe(r,"RID",n),qe(r,"AID",t.V),Xn(t,r),t.o&&t.s&&$n(r,t.o,t.s),n=new ye(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Yn(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),dn(t.i,n),Ee(n,r,e)}function Xn(t,e){t.na&&tt(t.na,(function(t,n){qe(e,n,t)})),t.h&&Pe({},(function(t,n){qe(e,n,t)}))}function Yn(t,e,n){n=Math.min(t.j.length,n);var r=t.h?_(t.h.Va,t.h,t):null;t:{var i=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=e,0>n)e=Math.max(0,i[a].g-100),o=!1;else try{vn(c,t,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,r}function Zn(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Dt||Pt(),Nt||(Dt(),Nt=!0),Lt.add(e,t),t.A=0}}function tr(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=oe(_(t.Ma,t),sr(t,t.A)),t.A++,!0)}function er(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function nr(t){t.g=new ye(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Ve(t.wa);qe(e,"RID","rpc"),qe(e,"SID",t.K),qe(e,"AID",t.V),qe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&qe(e,"TO",t.qa),qe(e,"TYPE","xmlhttp"),Xn(t,e),t.o&&t.s&&$n(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=ze(Ve(e)),n.u=null,n.S=!0,Te(n,t)}function rr(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function ir(t,e){var n=null;if(t.g==e){rr(t),er(t),t.g=null;var r=2}else{if(!fn(t.i,e))return;n=e.F,pn(t.i,e),r=1}if(0!=t.H)if(e.i)if(1==r){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=te(),Et(r,new se(r,n)),Wn(t)}else Zn(t);else if(i=e.s,3==i||0==i&&0<e.ca||!(1==r&&Qn(t,e)||2==r&&tr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:or(t,5);break;case 4:or(t,10);break;case 3:or(t,6);break;default:or(t,2)}}function sr(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function or(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var r=_(t.pb,t);n||(n=new Ue("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||je(n,"https"),ze(n)),_n(n.toString(),r)}else ie(2);t.H=0,t.h&&t.h.za(e),ar(t),Kn(t)}function ar(t){if(t.H=0,t.ma=[],t.h){const e=gn(t.i);0==e.length&&0==t.j.length||(I(t.ma,e),I(t.ma,t.j),t.i.i.length=0,S(t.j),t.j.length=0),t.h.ya()}}function cr(t,e,n){var r=n instanceof Ue?Ve(n):new Ue(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Be(r,r.m);else{var i=h.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ue(null);r&&je(s,r),e&&(s.g=e),i&&Be(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&qe(r,n,e),qe(r,"VER",t.ra),Xn(t,r),r}function ur(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new kn(new bn({ob:n})):new kn(t.va),e.Oa(t.J),e}function lr(){}function hr(){if(F&&!(10<=Number(K)))throw Error("Environmental error: no available transport.")}function fr(t,e){bt.call(this),this.g=new zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!R(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!R(e)&&(this.g.F=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gr(this)}function dr(t){pe.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function pr(){ge.call(this),this.status=1}function gr(t){this.g=t}function mr(){this.blockSize=-1}function yr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function vr(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function _r(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}r=kn.prototype,r.Oa=function(t){this.M=t},r.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fe.g(),this.C=this.u?le(this.u):le(fe),this.g.onreadystatechange=_(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){return void Nn(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=h.FormData&&t instanceof h.FormData,!(0<=C(On,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fn(this),0<this.B&&((this.L=Dn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_(this.ua,this)):this.A=Vt(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Nn(this,s)}},r.ua=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),Mn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mn(this,!0)),kn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Pn(this):this.kb())},r.kb=function(){Pn(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<Un(this)?this.g.status:-1}catch(t){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),An(e)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=zn.prototype,r.ra=8,r.H=1,r.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ye(this,this.l,t);let s=this.s;if(this.U&&(s?(s=nt(s),it(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Yn(this,i,e),n=Ve(this.I),qe(n,"RID",t),qe(n,"CVER",22),this.F&&qe(n,"X-HTTP-Session-Id",this.F),Xn(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Bn(s)))+"&"+e:this.o&&$n(n,this.o,s)),dn(this.i,i),this.bb&&qe(n,"TYPE","init"),this.P?(qe(n,"$req",e),qe(n,"SID","null"),i.aa=!0,Ee(i,n,null)):Ee(i,n,e),this.H=2}}else 3==this.H&&(t?Jn(this,t):0==this.j.length||ln(this.i)||Jn(this))},r.Ma=function(){if(this.u=null,nr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=oe(_(this.jb,this),t)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ie(10),Gn(this),nr(this))},r.ib=function(){null!=this.v&&(this.v=null,Gn(this),tr(this),ie(19))},r.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ie(2)):(this.l.info("Failed to ping google.com"),ie(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=lr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},hr.prototype.g=function(t,e){return new fr(t,e)},b(fr,bt),fr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ie(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=cr(t,null,t.Y),Wn(t)},fr.prototype.close=function(){Hn(this.g)},fr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ct(t),t=n);e.j.push(new an(e.fb++,t)),3==e.H&&Wn(e)},fr.prototype.N=function(){this.g.h=null,delete this.j,Hn(this.g),delete this.g,fr.$.N.call(this)},b(dr,pe),b(pr,ge),b(gr,lr),gr.prototype.Ba=function(){Et(this.g,"a")},gr.prototype.Aa=function(t){Et(this.g,new dr(t))},gr.prototype.za=function(t){Et(this.g,new pr)},gr.prototype.ya=function(){Et(this.g,"b")},b(yr,mr),yr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},yr.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)vr(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){vr(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){vr(this,r),i=0;break}}this.h=i,this.i+=e},yr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var wr={};function br(t){return-128<=t&&128>t?N(t,(function(t){return new _r([0|t],0>t?-1:0)})):new _r([0|t],0>t?-1:0)}function Er(t){if(isNaN(t)||!isFinite(t))return Sr;if(0>t)return xr(Er(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Cr;return new _r(e,0)}function Tr(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return xr(Tr(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Er(Math.pow(e,8)),r=Sr,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Er(Math.pow(e,s)),r=r.R(s).add(Er(o))):(r=r.R(n),r=r.add(Er(o)))}return r}var Cr=4294967296,Sr=br(0),Ir=br(1),Ar=br(16777216);function kr(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Rr(t){return-1==t.h}function xr(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new _r(n,~t.h).add(Ir)}function Or(t,e){return t.add(xr(e))}function Dr(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Nr(t,e){this.g=t,this.h=e}function Lr(t,e){if(kr(e))throw Error("division by zero");if(kr(t))return new Nr(Sr,Sr);if(Rr(t))return e=Lr(xr(t),e),new Nr(xr(e.g),xr(e.h));if(Rr(e))return e=Lr(t,xr(e)),new Nr(xr(e.g),e.h);if(30<t.g.length){if(Rr(t)||Rr(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ir,r=e;0>=r.X(t);)n=Pr(n),r=Pr(r);var i=Mr(n,1),s=Mr(r,1);for(r=Mr(r,2),n=Mr(n,2);!kr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Mr(r,1),n=Mr(n,1)}return e=Or(t,i.R(e)),new Nr(i,e)}for(i=Sr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Er(n),o=s.R(e);Rr(o)||0<o.X(t);)n-=r,s=Er(n),o=s.R(e);kr(s)&&(s=Ir),i=i.add(s),t=Or(t,o)}return new Nr(i,t)}function Pr(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new _r(n,t.h)}function Mr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new _r(i,t.h)}r=_r.prototype,r.ea=function(){if(Rr(this))return-xr(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Cr+r)*e,e*=Cr}return t},r.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(kr(this))return"0";if(Rr(this))return"-"+xr(this).toString(t);for(var e=Er(Math.pow(t,6)),n=this,r="";;){var i=Lr(n,e).g;n=Or(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,kr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},r.X=function(t){return t=Or(this,t),Rr(t)?-1:kr(t)?0:1},r.abs=function(){return Rr(this)?xr(this):this},r.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.D(i))+(65535&t.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new _r(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(t){if(kr(this)||kr(t))return Sr;if(Rr(this))return Rr(t)?xr(this).R(xr(t)):xr(xr(this).R(t));if(Rr(t))return xr(this.R(xr(t)));if(0>this.X(Ar)&&0>t.X(Ar))return Er(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=t.D(i)>>>16,c=65535&t.D(i);n[2*r+2*i]+=o*c,Dr(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Dr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Dr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Dr(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new _r(n,0)},r.gb=function(t){return Lr(this,t).h},r.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new _r(n,this.h&t.h)},r.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new _r(n,this.h|t.h)},r.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new _r(n,this.h^t.h)},hr.prototype.createWebChannel=hr.prototype.g,fr.prototype.send=fr.prototype.u,fr.prototype.open=fr.prototype.m,fr.prototype.close=fr.prototype.close,ae.NO_ERROR=0,ae.TIMEOUT=8,ae.HTTP_ERROR=6,ce.COMPLETE="complete",he.EventType=de,de.OPEN="a",de.CLOSE="b",de.ERROR="c",de.MESSAGE="d",bt.prototype.listen=bt.prototype.O,kn.prototype.listenOnce=kn.prototype.P,kn.prototype.getLastError=kn.prototype.Sa,kn.prototype.getLastErrorCode=kn.prototype.Ia,kn.prototype.getStatus=kn.prototype.da,kn.prototype.getResponseJson=kn.prototype.Wa,kn.prototype.getResponseText=kn.prototype.ja,kn.prototype.send=kn.prototype.ha,kn.prototype.setWithCredentials=kn.prototype.Oa,yr.prototype.digest=yr.prototype.l,yr.prototype.reset=yr.prototype.reset,yr.prototype.update=yr.prototype.j,_r.prototype.add=_r.prototype.add,_r.prototype.multiply=_r.prototype.R,_r.prototype.modulo=_r.prototype.gb,_r.prototype.compare=_r.prototype.X,_r.prototype.toNumber=_r.prototype.ea,_r.prototype.toString=_r.prototype.toString,_r.prototype.getBits=_r.prototype.D,_r.fromNumber=Er,_r.fromString=Tr;var Fr=u.createWebChannelTransport=function(){return new hr},Ur=u.getStatEventTarget=function(){return te()},Vr=u.ErrorCode=ae,jr=u.EventType=ce,Br=u.Event=Yt,$r=u.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},qr=(u.FetchXmlHttpFactory=bn,u.WebChannel=he),zr=u.XhrIo=kn,Hr=u.Md5=yr,Gr=u.Integer=_r;const Kr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Wr.UNAUTHENTICATED=new Wr(null),Wr.GOOGLE_CREDENTIALS=new Wr("google-credentials-uid"),Wr.FIRST_PARTY=new Wr("first-party-uid"),Wr.MOCK_USER=new Wr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qr="10.7.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new o.Yd("@firebase/firestore");function Xr(){return Jr.logLevel}function Yr(t,...e){if(Jr.logLevel<=o["in"].DEBUG){const n=e.map(ei);Jr.debug(`Firestore (${Qr}): ${t}`,...n)}}function Zr(t,...e){if(Jr.logLevel<=o["in"].ERROR){const n=e.map(ei);Jr.error(`Firestore (${Qr}): ${t}`,...n)}}function ti(t,...e){if(Jr.logLevel<=o["in"].WARN){const n=e.map(ei);Jr.warn(`Firestore (${Qr}): ${t}`,...n)}}function ei(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t="Unexpected state"){const e=`FIRESTORE (${Qr}) INTERNAL ASSERTION FAILED: `+t;throw Zr(e),new Error(e)}function ri(t,e){t||ni()}function ii(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oi extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ui{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Wr.UNAUTHENTICATED)))}shutdown(){}}class li{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class hi{constructor(t){this.t=t,this.currentUser=Wr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new ai;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ai,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Yr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Yr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ai)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Yr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ri("string"==typeof e.accessToken),new ci(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ri(null===t||"string"==typeof t),new Wr(t)}}class fi{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Wr.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class di{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new fi(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Wr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class pi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gi{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Yr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Yr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Yr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):Yr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ri("string"==typeof t.token),this.R=t.token,new pi(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mi(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=mi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function vi(t,e){return t<e?-1:t>e?1:0}function _i(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wi{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new oi(si.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new oi(si.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new oi(si.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new oi(si.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return wi.fromMillis(Date.now())}static fromDate(t){return wi.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new wi(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?vi(this.nanoseconds,t.nanoseconds):vi(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t){this.timestamp=t}static fromTimestamp(t){return new bi(t)}static min(){return new bi(new wi(0,0))}static max(){return new bi(new wi(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t,e,n){void 0===e?e=0:e>t.length&&ni(),void 0===n?n=t.length-e:n>t.length-e&&ni(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ei.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ei?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ti extends Ei{construct(t,e,n){return new Ti(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new oi(si.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ti(e)}static emptyPath(){return new Ti([])}}const Ci=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Si extends Ei{construct(t,e,n){return new Si(t,e,n)}static isValidIdentifier(t){return Ci.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Si.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Si(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new oi(si.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new oi(si.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new oi(si.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new oi(si.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Si(e)}static emptyPath(){return new Si([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t){this.path=t}static fromPath(t){return new Ii(Ti.fromString(t))}static fromName(t){return new Ii(Ti.fromString(t).popFirst(5))}static empty(){return new Ii(Ti.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ti.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ti.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ii(new Ti(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}Ai.UNKNOWN_ID=-1;function ki(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=bi.fromTimestamp(1e9===r?new wi(n+1,0):new wi(n,r));return new xi(i,Ii.empty(),e)}function Ri(t){return new xi(t.readTime,t.key,-1)}class xi{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new xi(bi.min(),Ii.empty(),-1)}static max(){return new xi(bi.max(),Ii.empty(),-1)}}function Oi(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Ii.comparator(t.documentKey,e.documentKey),0!==n?n:vi(t.largestBatchId,e.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const Di="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ni{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(t){if(t.code!==si.FAILED_PRECONDITION||t.message!==Di)throw t;Yr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ni(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Pi(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Pi?e:Pi.resolve(e)}catch(t){return Pi.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Pi.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Pi.reject(e)}static resolve(t){return new Pi(((e,n)=>{e(t)}))}static reject(t){return new Pi(((e,n)=>{n(t)}))}static waitFor(t){return new Pi(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Pi.resolve(!1);for(const n of t)e=e.next((t=>t?Pi.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Pi(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new Pi(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.se(t),this.oe=t=>e.writeSequenceNumber(t))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}function Ui(t){return null==t}function Vi(t){return 0===t&&1/t==-1/0}function ji(t){return"number"==typeof t&&Number.isInteger(t)&&!Vi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fi._e=-1;const Bi=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],$i=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],qi=$i;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(t,e){this.comparator=t,this.root=e||Qi.EMPTY}insert(t,e){return new Ki(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Qi.BLACK,null,null))}remove(t){return new Ki(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Qi.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Wi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Wi(this.root,t,this.comparator,!1)}getReverseIterator(){return new Wi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Wi(this.root,t,this.comparator,!0)}}class Wi{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Qi{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Qi.RED,this.left=null!=r?r:Qi.EMPTY,this.right=null!=i?i:Qi.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Qi(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Qi.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Qi.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Qi.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Qi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ni();if(this.right.isRed())throw ni();const t=this.left.check();if(t!==this.right.check())throw ni();return t+(this.isRed()?0:1)}}Qi.EMPTY=null,Qi.RED=!0,Qi.BLACK=!1,Qi.EMPTY=new class{constructor(){this.size=0}get key(){throw ni()}get value(){throw ni()}get color(){throw ni()}get left(){throw ni()}get right(){throw ni()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Qi(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji{constructor(t){this.comparator=t,this.data=new Ki(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Xi(this.data.getIterator())}getIteratorFrom(t){return new Xi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ji))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ji(this.comparator);return e.data=t,e}}class Xi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yi{constructor(t){this.fields=t,t.sort(Si.comparator)}static empty(){return new Yi([])}unionWith(t){let e=new Ji(Si.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Yi(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return _i(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ts{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Zi("Invalid base64 string: "+t):t}}(t);return new ts(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ts(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return vi(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ts.EMPTY_BYTE_STRING=new ts("");const es=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ns(t){if(ri(!!t),"string"==typeof t){let e=0;const n=es.exec(t);if(ri(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:rs(t.seconds),nanos:rs(t.nanos)}}function rs(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function is(t){return"string"==typeof t?ts.fromBase64String(t):ts.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function os(t){const e=t.mapValue.fields.__previous_value__;return ss(e)?os(e):e}function as(t){const e=ns(t.mapValue.fields.__local_write_time__.timestampValue);return new wi(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,e,n,r,i,s,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class us{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new us("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof us&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ss(t)?4:Cs(t)?9007199254740991:10:ni()}function fs(t,e){if(t===e)return!0;const n=hs(t);if(n!==hs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return as(t).isEqual(as(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ns(t.timestampValue),r=ns(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return is(t.bytesValue).isEqual(is(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return rs(t.geoPointValue.latitude)===rs(e.geoPointValue.latitude)&&rs(t.geoPointValue.longitude)===rs(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return rs(t.integerValue)===rs(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=rs(t.doubleValue),r=rs(e.doubleValue);return n===r?Vi(n)===Vi(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return _i(t.arrayValue.values||[],e.arrayValue.values||[],fs);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(zi(n)!==zi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!fs(n[i],r[i])))return!1;return!0}(t,e);default:return ni()}}function ds(t,e){return void 0!==(t.values||[]).find((t=>fs(t,e)))}function ps(t,e){if(t===e)return 0;const n=hs(t),r=hs(e);if(n!==r)return vi(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return vi(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=rs(t.integerValue||t.doubleValue),r=rs(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return gs(t.timestampValue,e.timestampValue);case 4:return gs(as(t),as(e));case 5:return vi(t.stringValue,e.stringValue);case 6:return function(t,e){const n=is(t),r=is(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=vi(n[i],r[i]);if(0!==t)return t}return vi(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=vi(rs(t.latitude),rs(e.latitude));return 0!==n?n:vi(rs(t.longitude),rs(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=ps(n[i],r[i]);if(t)return t}return vi(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===ls.mapValue&&e===ls.mapValue)return 0;if(t===ls.mapValue)return 1;if(e===ls.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=vi(r[o],s[o]);if(0!==t)return t;const e=ps(n[r[o]],i[s[o]]);if(0!==e)return e}return vi(r.length,s.length)}(t.mapValue,e.mapValue);default:throw ni()}}function gs(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return vi(t,e);const n=ns(t),r=ns(e),i=vi(n.seconds,r.seconds);return 0!==i?i:vi(n.nanos,r.nanos)}function ms(t){return ys(t)}function ys(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ns(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return is(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return Ii.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=ys(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${ys(t.fields[i])}`;return n+"}"}(t.mapValue):ni()}function vs(t){return!!t&&"integerValue"in t}function _s(t){return!!t&&"arrayValue"in t}function ws(t){return!!t&&"nullValue"in t}function bs(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Es(t){return!!t&&"mapValue"in t}function Ts(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Ts(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ts(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Cs(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ss{constructor(t){this.value=t}static empty(){return new Ss({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Es(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ts(e)}setAll(t){let e=Si.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Ts(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Es(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return fs(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Es(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Hi(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Ss(Ts(this.value))}}function Is(t){const e=[];return Hi(t.fields,((t,n)=>{const r=new Si([t]);if(Es(n)){const t=Is(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Yi(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class As{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new As(t,0,bi.min(),bi.min(),bi.min(),Ss.empty(),0)}static newFoundDocument(t,e,n,r){return new As(t,1,e,bi.min(),n,r,0)}static newNoDocument(t,e){return new As(t,2,e,bi.min(),bi.min(),Ss.empty(),0)}static newUnknownDocument(t,e){return new As(t,3,e,bi.min(),bi.min(),Ss.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(bi.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ss.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ss.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=bi.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof As&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new As(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(t,e){this.position=t,this.inclusive=e}}function Rs(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Ii.comparator(Ii.fromName(o.referenceValue),n.key):ps(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function xs(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fs(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ds(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{}class Ls extends Ns{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new $s(t,e,n):"array-contains"===e?new Gs(t,n):"in"===e?new Ks(t,n):"not-in"===e?new Ws(t,n):"array-contains-any"===e?new Qs(t,n):new Ls(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new qs(t,n):new zs(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(ps(e,this.value)):null!==e&&hs(this.value)===hs(e)&&this.matchesComparison(ps(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ni()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ps extends Ns{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new Ps(t,e)}matches(t){return Ms(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Ms(t){return"and"===t.op}function Fs(t){return Us(t)&&Ms(t)}function Us(t){for(const e of t.filters)if(e instanceof Ps)return!1;return!0}function Vs(t){if(t instanceof Ls)return t.field.canonicalString()+t.op.toString()+ms(t.value);if(Fs(t))return t.filters.map((t=>Vs(t))).join(",");{const e=t.filters.map((t=>Vs(t))).join(",");return`${t.op}(${e})`}}function js(t,e){return t instanceof Ls?function(t,e){return e instanceof Ls&&t.op===e.op&&t.field.isEqual(e.field)&&fs(t.value,e.value)}(t,e):t instanceof Ps?function(t,e){return e instanceof Ps&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&js(n,e.filters[r])),!0)}(t,e):void ni()}function Bs(t){return t instanceof Ls?function(t){return`${t.field.canonicalString()} ${t.op} ${ms(t.value)}`}(t):t instanceof Ps?function(t){return t.op.toString()+" {"+t.getFilters().map(Bs).join(" ,")+"}"}(t):"Filter"}class $s extends Ls{constructor(t,e,n){super(t,e,n),this.key=Ii.fromName(n.referenceValue)}matches(t){const e=Ii.comparator(t.key,this.key);return this.matchesComparison(e)}}class qs extends Ls{constructor(t,e){super(t,"in",e),this.keys=Hs("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class zs extends Ls{constructor(t,e){super(t,"not-in",e),this.keys=Hs("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Hs(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Ii.fromName(t.referenceValue)))}class Gs extends Ls{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return _s(e)&&ds(e.arrayValue,this.value)}}class Ks extends Ls{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ds(this.value.arrayValue,e)}}class Ws extends Ls{constructor(t,e){super(t,"not-in",e)}matches(t){if(ds(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ds(this.value.arrayValue,e)}}class Qs extends Ls{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!_s(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>ds(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ce=null}}function Xs(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Js(t,e,n,r,i,s,o)}function Ys(t){const e=ii(t);if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Vs(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ui(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>ms(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>ms(t))).join(",")),e.ce=t}return e.ce}function Zs(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ds(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!js(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xs(t.startAt,e.startAt)&&xs(t.endAt,e.endAt)}function to(t){return Ii.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eo{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function no(t,e,n,r,i,s,o,a){return new eo(t,e,n,r,i,s,o,a)}function ro(t){return new eo(t)}function io(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function so(t){return null!==t.collectionGroup}function oo(t){const e=ii(t);if(null===e.le){e.le=[];const t=new Set;for(const i of e.explicitOrderBy)e.le.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new Ji(Si.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.le.push(new Os(r,n))})),t.has(Si.keyField().canonicalString())||e.le.push(new Os(Si.keyField(),n))}return e.le}function ao(t){const e=ii(t);return e.he||(e.he=co(e,oo(t))),e.he}function co(t,e){if("F"===t.limitType)return Xs(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Os(t.field,e)}));const n=t.endAt?new ks(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ks(t.startAt.position,t.startAt.inclusive):null;return Xs(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function uo(t,e,n){return new eo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function lo(t,e){return Zs(ao(t),ao(e))&&t.limitType===e.limitType}function ho(t){return`${Ys(ao(t))}|lt:${t.limitType}`}function fo(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Bs(t))).join(", ")}]`),Ui(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>ms(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>ms(t))).join(",")),`Target(${e})`}(ao(t))}; limitType=${t.limitType})`}function po(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Ii.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of oo(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Rs(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,oo(t),e))&&!(t.endAt&&!function(t,e,n){const r=Rs(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,oo(t),e))}(t,e)}function go(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function mo(t){return(e,n)=>{let r=!1;for(const i of oo(t)){const t=yo(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function yo(t,e,n){const r=t.field.isKeyField()?Ii.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?ps(r,i):ni()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ni()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Hi(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return Gi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=new Ki(Ii.comparator);function wo(){return _o}const bo=new Ki(Ii.comparator);function Eo(...t){let e=bo;for(const n of t)e=e.insert(n.key,n);return e}function To(t){let e=bo;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Co(){return Io()}function So(){return Io()}function Io(){return new vo((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Ao=new Ki(Ii.comparator),ko=new Ji(Ii.comparator);function Ro(...t){let e=ko;for(const n of t)e=e.add(n);return e}const xo=new Ji(vi);function Oo(){return xo}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vi(e)?"-0":e}}function No(t){return{integerValue:""+t}}function Lo(t,e){return ji(e)?No(e):Do(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this._=void 0}}function Mo(t,e,n){return t instanceof Vo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&ss(e)&&(e=os(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof jo?Bo(t,e):t instanceof $o?qo(t,e):function(t,e){const n=Uo(t,e),r=Ho(n)+Ho(t.Ie);return vs(n)&&vs(t.Ie)?No(r):Do(t.serializer,r)}(t,e)}function Fo(t,e,n){return t instanceof jo?Bo(t,e):t instanceof $o?qo(t,e):n}function Uo(t,e){return t instanceof zo?function(t){return vs(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class Vo extends Po{}class jo extends Po{constructor(t){super(),this.elements=t}}function Bo(t,e){const n=Go(e);for(const r of t.elements)n.some((t=>fs(t,r)))||n.push(r);return{arrayValue:{values:n}}}class $o extends Po{constructor(t){super(),this.elements=t}}function qo(t,e){let n=Go(e);for(const r of t.elements)n=n.filter((t=>!fs(t,r)));return{arrayValue:{values:n}}}class zo extends Po{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Ho(t){return rs(t.integerValue||t.doubleValue)}function Go(t){return _s(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof jo&&e instanceof jo||t instanceof $o&&e instanceof $o?_i(t.elements,e.elements,fs):t instanceof zo&&e instanceof zo?fs(t.Ie,e.Ie):t instanceof Vo&&e instanceof Vo}(t.transform,e.transform)}class Wo{constructor(t,e){this.version=t,this.transformResults=e}}class Qo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Qo}static exists(t){return new Qo(void 0,t)}static updateTime(t){return new Qo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Jo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Xo{}function Yo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new ca(t.key,Qo.none()):new ra(t.key,t.data,Qo.none());{const n=t.data,r=Ss.empty();let i=new Ji(Si.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new ia(t.key,r,new Yi(i.toArray()),Qo.none())}}function Zo(t,e,n){t instanceof ra?function(t,e,n){const r=t.value.clone(),i=oa(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof ia?function(t,e,n){if(!Jo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=oa(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(sa(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function ta(t,e,n,r){return t instanceof ra?function(t,e,n,r){if(!Jo(t.precondition,e))return n;const i=t.value.clone(),s=aa(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof ia?function(t,e,n,r){if(!Jo(t.precondition,e))return n;const i=aa(t.fieldTransforms,r,e),s=e.data;return s.setAll(sa(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return Jo(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function ea(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Uo(r.transform,t||null);null!=i&&(null===n&&(n=Ss.empty()),n.set(r.field,i))}return n||null}function na(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&_i(t,e,((t,e)=>Ko(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ra extends Xo{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ia extends Xo{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function sa(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function oa(t,e,n){const r=new Map;ri(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Fo(o,a,n[i]))}return r}function aa(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Mo(t,s,e))}return r}class ca extends Xo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ua extends Xo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Zo(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=ta(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=ta(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=So();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=Yo(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(bi.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ro())}isEqual(t){return this.batchId===t.batchId&&_i(this.mutations,t.mutations,((t,e)=>na(t,e)))&&_i(this.baseMutations,t.baseMutations,((t,e)=>na(t,e)))}}class ha{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){ri(t.mutations.length===n.length);let r=function(){return Ao}();const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new ha(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class da{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pa,ga;function ma(t){switch(t){default:return ni();case si.CANCELLED:case si.UNKNOWN:case si.DEADLINE_EXCEEDED:case si.RESOURCE_EXHAUSTED:case si.INTERNAL:case si.UNAVAILABLE:case si.UNAUTHENTICATED:return!1;case si.INVALID_ARGUMENT:case si.NOT_FOUND:case si.ALREADY_EXISTS:case si.PERMISSION_DENIED:case si.FAILED_PRECONDITION:case si.ABORTED:case si.OUT_OF_RANGE:case si.UNIMPLEMENTED:case si.DATA_LOSS:return!0}}function ya(t){if(void 0===t)return Zr("GRPC error has no .code"),si.UNKNOWN;switch(t){case pa.OK:return si.OK;case pa.CANCELLED:return si.CANCELLED;case pa.UNKNOWN:return si.UNKNOWN;case pa.DEADLINE_EXCEEDED:return si.DEADLINE_EXCEEDED;case pa.RESOURCE_EXHAUSTED:return si.RESOURCE_EXHAUSTED;case pa.INTERNAL:return si.INTERNAL;case pa.UNAVAILABLE:return si.UNAVAILABLE;case pa.UNAUTHENTICATED:return si.UNAUTHENTICATED;case pa.INVALID_ARGUMENT:return si.INVALID_ARGUMENT;case pa.NOT_FOUND:return si.NOT_FOUND;case pa.ALREADY_EXISTS:return si.ALREADY_EXISTS;case pa.PERMISSION_DENIED:return si.PERMISSION_DENIED;case pa.FAILED_PRECONDITION:return si.FAILED_PRECONDITION;case pa.ABORTED:return si.ABORTED;case pa.OUT_OF_RANGE:return si.OUT_OF_RANGE;case pa.UNIMPLEMENTED:return si.UNIMPLEMENTED;case pa.DATA_LOSS:return si.DATA_LOSS;default:return ni()}}(ga=pa||(pa={}))[ga.OK=0]="OK",ga[ga.CANCELLED=1]="CANCELLED",ga[ga.UNKNOWN=2]="UNKNOWN",ga[ga.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ga[ga.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ga[ga.NOT_FOUND=5]="NOT_FOUND",ga[ga.ALREADY_EXISTS=6]="ALREADY_EXISTS",ga[ga.PERMISSION_DENIED=7]="PERMISSION_DENIED",ga[ga.UNAUTHENTICATED=16]="UNAUTHENTICATED",ga[ga.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ga[ga.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ga[ga.ABORTED=10]="ABORTED",ga[ga.OUT_OF_RANGE=11]="OUT_OF_RANGE",ga[ga.UNIMPLEMENTED=12]="UNIMPLEMENTED",ga[ga.INTERNAL=13]="INTERNAL",ga[ga.UNAVAILABLE=14]="UNAVAILABLE",ga[ga.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let va=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=new Gr([4294967295,4294967295],0);function ba(t){const e=_a().encode(t),n=new Hr;return n.update(e),new Uint8Array(n.digest())}function Ea(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Gr([n,r],0),new Gr([i,s],0)]}class Ta{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Ca(`Invalid padding: ${e}`);if(n<0)throw new Ca(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Ca(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Ca(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=Gr.fromNumber(this.Te)}de(t,e,n){let r=t.add(e.multiply(Gr.fromNumber(n)));return 1===r.compare(wa)&&(r=new Gr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Te)return!1;const e=ba(t),[n,r]=Ea(e);for(let i=0;i<this.hashCount;i++){const t=this.de(n,r,i);if(!this.Ae(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new Ta(i,r,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.Te)return;const e=ba(t),[n,r]=Ea(e);for(let i=0;i<this.hashCount;i++){const t=this.de(n,r,i);this.Re(t)}}Re(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Ca extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,Ia.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Sa(bi.min(),r,new Ki(vi),wo(),Ro())}}class Ia{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Ia(n,e,Ro(),Ro(),Ro())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t,e,n,r){this.Ve=t,this.removedTargetIds=e,this.key=n,this.me=r}}class ka{constructor(t,e){this.targetId=t,this.fe=e}}class Ra{constructor(t,e,n=ts.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class xa{constructor(){this.ge=0,this.pe=Na(),this.ye=ts.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=Ro(),e=Ro(),n=Ro();return this.pe.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:ni()}})),new Ia(this.ye,this.we,t,e,n)}Fe(){this.Se=!1,this.pe=Na()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,ri(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class Oa{constructor(t){this.Le=t,this.ke=new Map,this.qe=wo(),this.Qe=Da(),this.Ke=new Ki(vi)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,(e=>{const n=this.ze(e);switch(t.state){case 0:this.je(e)&&n.Ce(t.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(t.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(e);break;case 3:this.je(e)&&(n.Be(),n.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),n.Ce(t.resumeToken));break;default:ni()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach(((t,n)=>{this.je(n)&&e(n)}))}Je(t){const e=t.targetId,n=t.fe.count,r=this.Ye(e);if(r){const i=r.target;if(to(i))if(0===n){const t=new Ii(i.path);this.We(e,t,As.newNoDocument(t,bi.min()))}else ri(1===n);else{const r=this.Ze(e);if(r!==n){const n=this.Xe(t),i=n?this.et(n,t,r):1;if(0!==i){this.He(e);const t=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,t)}null==va||va.tt(function(t,e,n,r,i){var s,o,a,c,u,l;const h={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},f=e.unchangedNames;return f&&(h.bloomFilter={applied:0===i,hashCount:null!==(s=null==f?void 0:f.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(a=null===(o=null==f?void 0:f.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(l=null===(u=null==f?void 0:f.bits)||void 0===u?void 0:u.padding)&&void 0!==l?l:0,mightContain:t=>{var e;return null!==(e=null==r?void 0:r.mightContain(t))&&void 0!==e&&e}}),h}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,t.fe,this.Le.nt(),n,i))}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=e;let s,o;try{s=is(n).toUint8Array()}catch(t){if(t instanceof Zi)return ti("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new Ta(s,r,i)}catch(t){return ti(t instanceof Ca?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.Te?null:o}et(t,e,n){return e.fe.count===n-this.rt(t,e.targetId)?0:2}rt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Le.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.We(e,n,null),r++)})),r}it(t){const e=new Map;this.ke.forEach(((n,r)=>{const i=this.Ye(r);if(i){if(n.current&&to(i.target)){const e=new Ii(i.target.path);null!==this.qe.get(e)||this.st(r,e)||this.We(r,e,As.newNoDocument(e,t))}n.De&&(e.set(r,n.ve()),n.Fe())}}));let n=Ro();this.Qe.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Ye(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.qe.forEach(((e,n)=>n.setReadTime(t)));const r=new Sa(t,e,this.Ke,this.qe,n);return this.qe=wo(),this.Qe=Da(),this.Ke=new Ki(vi),r}Ue(t,e){if(!this.je(t))return;const n=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,n),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,n){if(!this.je(t))return;const r=this.ze(t);this.st(t,e)?r.Me(e,1):r.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),n&&(this.qe=this.qe.insert(e,n))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new xa,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new Ji(vi),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=null!==this.Ye(t);return e||Yr("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new xa),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.We(t,e,null)}))}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Da(){return new Ki(Ii.comparator)}function Na(){return new Ki(Ii.comparator)}const La=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Pa=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),Ma=(()=>{const t={and:"AND",or:"OR"};return t})();class Fa{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ua(t,e){return t.useProto3Json||Ui(e)?e:{value:e}}function Va(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ja(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ba(t,e){return Va(t,e.toTimestamp())}function $a(t){return ri(!!t),bi.fromTimestamp(function(t){const e=ns(t);return new wi(e.seconds,e.nanos)}(t))}function qa(t,e){return function(t){return new Ti(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function za(t){const e=Ti.fromString(t);return ri(dc(e)),e}function Ha(t,e){return qa(t.databaseId,e.path)}function Ga(t,e){const n=za(e);if(n.get(1)!==t.databaseId.projectId)throw new oi(si.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new oi(si.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ii(Ja(n))}function Ka(t,e){return qa(t.databaseId,e)}function Wa(t){const e=za(t);return 4===e.length?Ti.emptyPath():Ja(e)}function Qa(t){return new Ti(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ja(t){return ri(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Xa(t,e,n){return{name:Ha(t,e),fields:n.value.mapValue.fields}}function Ya(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:ni()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(ri(void 0===e||"string"==typeof e),ts.fromBase64String(e||"")):(ri(void 0===e||e instanceof Uint8Array),ts.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?si.UNKNOWN:ya(t.code);return new oi(e,t.message||"")}(o);n=new Ra(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ga(t,r.document.name),s=$a(r.document.updateTime),o=r.document.createTime?$a(r.document.createTime):bi.min(),a=new Ss({mapValue:{fields:r.document.fields}}),c=As.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Aa(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ga(t,r.document),s=r.readTime?$a(r.readTime):bi.min(),o=As.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Aa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ga(t,r.document),s=r.removedTargetIds||[];n=new Aa([],s,i,null)}else{if(!("filter"in e))return ni();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new da(r,i),o=t.targetId;n=new ka(o,s)}}return n}function Za(t,e){let n;if(e instanceof ra)n={update:Xa(t,e.key,e.value)};else if(e instanceof ca)n={delete:Ha(t,e.key)};else if(e instanceof ia)n={update:Xa(t,e.key,e.data),updateMask:fc(e.fieldMask)};else{if(!(e instanceof ua))return ni();n={verify:Ha(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Vo)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof jo)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof $o)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof zo)return{fieldPath:e.field.canonicalString(),increment:n.Ie};throw ni()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ba(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:ni()}(t,e.precondition)),n}function tc(t,e){return t&&t.length>0?(ri(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?$a(t.updateTime):$a(e);return n.isEqual(bi.min())&&(n=$a(e)),new Wo(n,t.transformResults||[])}(t,e)))):[]}function ec(t,e){return{documents:[Ka(t,e.path)]}}function nc(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Ka(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ka(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return hc(Ps.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:uc(t.field),direction:oc(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Ua(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function rc(t){let e=Wa(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ri(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=sc(t);return e instanceof Ps&&Fs(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new Os(lc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ui(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new ks(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new ks(n,e)}(n.endAt)),no(e,i,o,s,a,"F",c,u)}function ic(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ni()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function sc(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=lc(t.unaryFilter.field);return Ls.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=lc(t.unaryFilter.field);return Ls.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=lc(t.unaryFilter.field);return Ls.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=lc(t.unaryFilter.field);return Ls.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ni()}}(t):void 0!==t.fieldFilter?function(t){return Ls.create(lc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ni()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Ps.create(t.compositeFilter.filters.map((t=>sc(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return ni()}}(t.compositeFilter.op))}(t):ni()}function oc(t){return La[t]}function ac(t){return Pa[t]}function cc(t){return Ma[t]}function uc(t){return{fieldPath:t.canonicalString()}}function lc(t){return Si.fromServerFormat(t.fieldPath)}function hc(t){return t instanceof Ls?function(t){if("=="===t.op){if(bs(t.value))return{unaryFilter:{field:uc(t.field),op:"IS_NAN"}};if(ws(t.value))return{unaryFilter:{field:uc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(bs(t.value))return{unaryFilter:{field:uc(t.field),op:"IS_NOT_NAN"}};if(ws(t.value))return{unaryFilter:{field:uc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:uc(t.field),op:ac(t.op),value:t.value}}}(t):t instanceof Ps?function(t){const e=t.getFilters().map((t=>hc(t)));return 1===e.length?e[0]:{compositeFilter:{op:cc(t.op),filters:e}}}(t):ni()}function fc(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function dc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t,e,n,r,i=bi.min(),s=bi.min(),o=ts.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new pc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new pc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new pc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new pc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(t){this.ut=t}}function mc(t){const e=rc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?uo(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){}ht(t,e){this.Pt(t,e),e.It()}Pt(t,e){if("nullValue"in t)this.Tt(e,5);else if("booleanValue"in t)this.Tt(e,10),e.Et(t.booleanValue?1:0);else if("integerValue"in t)this.Tt(e,15),e.Et(rs(t.integerValue));else if("doubleValue"in t){const n=rs(t.doubleValue);isNaN(n)?this.Tt(e,13):(this.Tt(e,15),Vi(n)?e.Et(0):e.Et(n))}else if("timestampValue"in t){const n=t.timestampValue;this.Tt(e,20),"string"==typeof n?e.dt(n):(e.dt(`${n.seconds||""}`),e.Et(n.nanos||0))}else if("stringValue"in t)this.At(t.stringValue,e),this.Rt(e);else if("bytesValue"in t)this.Tt(e,30),e.Vt(is(t.bytesValue)),this.Rt(e);else if("referenceValue"in t)this.ft(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Tt(e,45),e.Et(n.latitude||0),e.Et(n.longitude||0)}else"mapValue"in t?Cs(t)?this.Tt(e,Number.MAX_SAFE_INTEGER):(this.gt(t.mapValue,e),this.Rt(e)):"arrayValue"in t?(this.yt(t.arrayValue,e),this.Rt(e)):ni()}At(t,e){this.Tt(e,25),this.wt(t,e)}wt(t,e){e.dt(t)}gt(t,e){const n=t.fields||{};this.Tt(e,55);for(const r of Object.keys(n))this.At(r,e),this.Pt(n[r],e)}yt(t,e){const n=t.values||[];this.Tt(e,50);for(const r of n)this.Pt(r,e)}ft(t,e){this.Tt(e,37),Ii.fromName(t).path.forEach((t=>{this.Tt(e,60),this.wt(t,e)}))}Tt(t,e){t.Et(e)}Rt(t){t.Et(2)}}yc.St=new yc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vc{constructor(){this.on=new _c}addToCollectionParentIndex(t,e){return this.on.add(e),Pi.resolve()}getCollectionParents(t,e){return Pi.resolve(this.on.getEntries(e))}addFieldIndex(t,e){return Pi.resolve()}deleteFieldIndex(t,e){return Pi.resolve()}deleteAllFieldIndexes(t){return Pi.resolve()}createTargetIndexes(t,e){return Pi.resolve()}getDocumentsMatchingTarget(t,e){return Pi.resolve(null)}getIndexType(t,e){return Pi.resolve(0)}getFieldIndexes(t,e){return Pi.resolve([])}getNextCollectionGroupToUpdate(t){return Pi.resolve(null)}getMinOffset(t,e){return Pi.resolve(xi.min())}getMinOffsetFromCollectionGroup(t,e){return Pi.resolve(xi.min())}updateCollectionGroup(t,e,n){return Pi.resolve()}updateIndexEntries(t,e){return Pi.resolve()}}class _c{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Ji(Ti.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Ji(Ti.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class wc{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new wc(t,wc.DEFAULT_COLLECTION_PERCENTILE,wc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wc.DEFAULT_COLLECTION_PERCENTILE=10,wc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wc.DEFAULT=new wc(41943040,wc.DEFAULT_COLLECTION_PERCENTILE,wc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wc.DISABLED=new wc(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bc{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new bc(0)}static Nn(){return new bc(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ec{constructor(){this.changes=new vo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,As.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Pi.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&ta(n.mutation,t,Yi.empty(),wi.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Ro()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Ro()){const r=Co();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Eo();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Co();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Ro())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=wo();const s=Io(),o=function(){return Io()}();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof ia)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),ta(o.mutation,e,o.mutation.getFieldMask(),wi.now())):s.set(e.key,Yi.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Tc(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Io();let r=new Ki(((t,e)=>t-e)),i=Ro();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Yi.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||Ro()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=So();c.forEach((t=>{if(!i.has(t)){const r=Yo(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Pi.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return Ii.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):so(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Pi.resolve(Co());let o=-1,a=i;return s.next((e=>Pi.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Pi.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Ro()))).next((t=>({batchId:o,changes:To(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Ii(e)).next((t=>{let e=Eo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let s=Eo();return this.indexManager.getCollectionParents(t,i).next((o=>Pi.forEach(o,(o=>{const a=function(t,e){return new eo(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r)))).next((t=>{i.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,As.newInvalidDocument(r)))}));let n=Eo();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&ta(s.mutation,r,Yi.empty(),wi.now()),po(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,e){return Pi.resolve(this.ur.get(e))}saveBundleMetadata(t,e){return this.ur.set(e.id,function(t){return{id:t.id,version:t.version,createTime:$a(t.createTime)}}(e)),Pi.resolve()}getNamedQuery(t,e){return Pi.resolve(this.cr.get(e))}saveNamedQuery(t,e){return this.cr.set(e.name,function(t){return{name:t.name,query:mc(t.bundledQuery),readTime:$a(t.readTime)}}(e)),Pi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(){this.overlays=new Ki(Ii.comparator),this.lr=new Map}getOverlay(t,e){return Pi.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Co();return Pi.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.lt(t,e,r)})),Pi.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.lr.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.lr.delete(n)),Pi.resolve()}getOverlaysForCollection(t,e,n){const r=Co(),i=e.length+1,s=new Ii(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Pi.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Ki(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Co(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Co(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return Pi.resolve(o)}lt(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.lr.get(r.largestBatchId).delete(n.key);this.lr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new fa(e,n));let i=this.lr.get(e);void 0===i&&(i=Ro(),this.lr.set(e,i)),this.lr.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this.hr=new Ji(kc.Pr),this.Ir=new Ji(kc.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,e){const n=new kc(t,e);this.hr=this.hr.add(n),this.Ir=this.Ir.add(n)}Er(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.dr(new kc(t,e))}Ar(t,e){t.forEach((t=>this.removeReference(t,e)))}Rr(t){const e=new Ii(new Ti([])),n=new kc(e,t),r=new kc(e,t+1),i=[];return this.Ir.forEachInRange([n,r],(t=>{this.dr(t),i.push(t.key)})),i}Vr(){this.hr.forEach((t=>this.dr(t)))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const e=new Ii(new Ti([])),n=new kc(e,t),r=new kc(e,t+1);let i=Ro();return this.Ir.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new kc(t,0),n=this.hr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class kc{constructor(t,e){this.key=t,this.gr=e}static Pr(t,e){return Ii.comparator(t.key,e.key)||vi(t.gr,e.gr)}static Tr(t,e){return vi(t.gr,e.gr)||Ii.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.pr=1,this.yr=new Ji(kc.Pr)}checkEmpty(t){return Pi.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new la(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.yr=this.yr.add(new kc(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Pi.resolve(s)}lookupMutationBatch(t,e){return Pi.resolve(this.wr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Sr(n),i=r<0?0:r;return Pi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Pi.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(t){return Pi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new kc(e,0),r=new kc(e,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([n,r],(t=>{const e=this.wr(t.gr);i.push(e)})),Pi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ji(vi);return e.forEach((t=>{const e=new kc(t,0),r=new kc(t,Number.POSITIVE_INFINITY);this.yr.forEachInRange([e,r],(t=>{n=n.add(t.gr)}))})),Pi.resolve(this.br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Ii.isDocumentKey(i)||(i=i.child(""));const s=new kc(new Ii(i),0);let o=new Ji(vi);return this.yr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.gr)),!0)}),s),Pi.resolve(this.br(o))}br(t){const e=[];return t.forEach((t=>{const n=this.wr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ri(0===this.Dr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.yr;return Pi.forEach(e.mutations,(r=>{const i=new kc(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.yr=n}))}Fn(t){}containsKey(t,e){const n=new kc(e,0),r=this.yr.firstAfterOrEqual(n);return Pi.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Pi.resolve()}Dr(t,e){return this.Sr(t)}Sr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}wr(t){const e=this.Sr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t){this.Cr=t,this.docs=function(){return new Ki(Ii.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Cr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Pi.resolve(n?n.document.mutableCopy():As.newInvalidDocument(e))}getEntries(t,e){let n=wo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():As.newInvalidDocument(t))})),Pi.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=wo();const s=e.path,o=new Ii(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Oi(Ri(o),n)<=0||(r.has(o.key)||po(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Pi.resolve(i)}getAllFromCollectionGroup(t,e,n,r){ni()}vr(t,e){return Pi.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Oc(this)}getSize(t){return Pi.resolve(this.size)}}class Oc extends Ec{constructor(t){super(),this._r=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this._r.addEntry(t,r)):this._r.removeEntry(n)})),Pi.waitFor(e)}getFromCache(t,e){return this._r.getEntry(t,e)}getAllFromCache(t,e){return this._r.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t){this.persistence=t,this.Fr=new vo((t=>Ys(t)),Zs),this.lastRemoteSnapshotVersion=bi.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Ac,this.targetCount=0,this.Nr=bc.On()}forEachTarget(t,e){return this.Fr.forEach(((t,n)=>e(n))),Pi.resolve()}getLastRemoteSnapshotVersion(t){return Pi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Pi.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),Pi.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Mr&&(this.Mr=e),Pi.resolve()}kn(t){this.Fr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Nr=new bc(e),this.highestTargetId=e),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,e){return this.kn(e),this.targetCount+=1,Pi.resolve()}updateTargetData(t,e){return this.kn(e),Pi.resolve()}removeTargetData(t,e){return this.Fr.delete(e.target),this.Or.Rr(e.targetId),this.targetCount-=1,Pi.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Fr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Fr.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Pi.waitFor(i).next((()=>r))}getTargetCount(t){return Pi.resolve(this.targetCount)}getTargetData(t,e){const n=this.Fr.get(e)||null;return Pi.resolve(n)}addMatchingKeys(t,e,n){return this.Or.Er(e,n),Pi.resolve()}removeMatchingKeys(t,e,n){this.Or.Ar(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Pi.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Or.Rr(e),Pi.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Or.mr(e);return Pi.resolve(n)}containsKey(t,e){return Pi.resolve(this.Or.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t,e){this.Br={},this.overlays={},this.Lr=new Fi(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new Dc(this),this.indexManager=new vc,this.remoteDocumentCache=function(t){return new xc(t)}((t=>this.referenceDelegate.Qr(t))),this.serializer=new gc(e),this.Kr=new Sc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ic,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Br[t.toKey()];return n||(n=new Rc(e,this.referenceDelegate),this.Br[t.toKey()]=n),n}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,e,n){Yr("MemoryPersistence","Starting transaction:",t);const r=new Lc(this.Lr.next());return this.referenceDelegate.$r(),n(r).next((t=>this.referenceDelegate.Ur(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Wr(t,e){return Pi.or(Object.values(this.Br).map((n=>()=>n.containsKey(t,e))))}}class Lc extends Ni{constructor(t){super(),this.currentSequenceNumber=t}}class Pc{constructor(t){this.persistence=t,this.Gr=new Ac,this.zr=null}static jr(t){return new Pc(t)}get Hr(){if(this.zr)return this.zr;throw ni()}addReference(t,e,n){return this.Gr.addReference(n,e),this.Hr.delete(n.toString()),Pi.resolve()}removeReference(t,e,n){return this.Gr.removeReference(n,e),this.Hr.add(n.toString()),Pi.resolve()}markPotentiallyOrphaned(t,e){return this.Hr.add(e.toString()),Pi.resolve()}removeTarget(t,e){this.Gr.Rr(e.targetId).forEach((t=>this.Hr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Hr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}$r(){this.zr=new Set}Ur(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Pi.forEach(this.Hr,(n=>{const r=Ii.fromPath(n);return this.Jr(t,r).next((t=>{t||e.removeEntry(r,bi.min())}))})).next((()=>(this.zr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Jr(t,e).next((t=>{t?this.Hr.delete(e.toString()):this.Hr.add(e.toString())}))}Qr(t){return 0}Jr(t,e){return Pi.or([()=>Pi.resolve(this.Gr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Wr(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mc{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.ki=n,this.qi=r}static Qi(t,e){let n=Ro(),r=Ro();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Mc(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,e){this.Gi=t,this.indexManager=e,this.Ki=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.zi(t,e).next((t=>{i.result=t})).next((()=>{if(!i.result)return this.ji(t,e,r,n).next((t=>{i.result=t}))})).next((()=>{if(i.result)return;const n=new Fc;return this.Hi(t,e,n).next((r=>{if(i.result=r,this.$i)return this.Ji(t,e,n,r.size)}))})).next((()=>i.result))}Ji(t,e,n,r){return n.documentReadCount<this.Ui?(Xr()<=o["in"].DEBUG&&Yr("QueryEngine","SDK will not create cache indexes for query:",fo(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),Pi.resolve()):(Xr()<=o["in"].DEBUG&&Yr("QueryEngine","Query:",fo(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Wi*r?(Xr()<=o["in"].DEBUG&&Yr("QueryEngine","The SDK decides to create cache indexes for query:",fo(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ao(e))):Pi.resolve())}zi(t,e){if(io(e))return Pi.resolve(null);let n=ao(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=uo(e,null,"F"),n=ao(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=Ro(...r);return this.Gi.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Yi(e,r);return this.Zi(e,s,i,n.readTime)?this.zi(t,uo(e,null,"F")):this.Xi(t,s,e,n)}))))})))))}ji(t,e,n,r){return io(e)||r.isEqual(bi.min())?Pi.resolve(null):this.Gi.getDocuments(t,n).next((i=>{const s=this.Yi(e,i);return this.Zi(e,s,n,r)?Pi.resolve(null):(Xr()<=o["in"].DEBUG&&Yr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),fo(e)),this.Xi(t,s,e,ki(r,-1)).next((t=>t)))}))}Yi(t,e){let n=new Ji(mo(t));return e.forEach(((e,r)=>{po(t,r)&&(n=n.add(r))})),n}Zi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Hi(t,e,n){return Xr()<=o["in"].DEBUG&&Yr("QueryEngine","Using full collection scan to execute query:",fo(e)),this.Gi.getDocumentsMatchingQuery(t,e,xi.min(),n)}Xi(t,e,n,r){return this.Gi.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,e,n,r){this.persistence=t,this.es=e,this.serializer=r,this.ts=new Ki(vi),this.ns=new vo((t=>Ys(t)),Zs),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(n)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Cc(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ts)))}}function jc(t,e,n,r){return new Vc(t,e,n,r)}async function Bc(t,e){const n=ii(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.os(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=Ro();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({_s:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function $c(t,e){const n=ii(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Pi.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);ri(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Ro();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function qc(t){const e=ii(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.qr.getLastRemoteSnapshotVersion(t)))}function zc(t,e){const n=ii(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.qr.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.qr.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(ts.EMPTY_BYTE_STRING,bi.min()).withLastLimboFreeSnapshotVersion(bi.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.qr.updateTargetData(t,u))}));let a=wo(),c=Ro();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(Hc(t,s,e.documentUpdates).next((t=>{a=t.us,c=t.cs}))),!r.isEqual(bi.min())){const e=n.qr.getLastRemoteSnapshotVersion(t).next((e=>n.qr.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Pi.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.ts=i,t)))}function Hc(t,e,n){let r=Ro(),i=Ro();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=wo();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(bi.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):Yr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{us:r,cs:i}}))}function Gc(t,e){const n=ii(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Kc(t,e){const n=ii(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.qr.getTargetData(t,e).next((i=>i?(r=i,Pi.resolve(r)):n.qr.allocateTargetId(t).next((i=>(r=new pc(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.qr.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.ts.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ts=n.ts.insert(t.targetId,t),n.ns.set(e,t.targetId)),t}))}async function Wc(t,e,n){const r=ii(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Mi(t))throw t;Yr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function Qc(t,e,n){const r=ii(t);let i=bi.min(),s=Ro();return r.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const r=ii(t),i=r.ns.get(n);return void 0!==i?Pi.resolve(r.ts.get(i)):r.qr.getTargetData(e,n)}(r,t,ao(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.es.getDocumentsMatchingQuery(t,e,n?i:bi.min(),n?s:Ro()))).next((t=>(Jc(r,go(e),t),{documents:t,ls:s})))))}function Jc(t,e,n){let r=t.rs.get(e)||bi.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.rs.set(e,r)}class Xc{constructor(){this.activeTargetIds=Oo()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Yc{constructor(){this.eo=new Xc,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,e,n){this.no[t]=e}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new Xc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{ro(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){Yr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){Yr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu=null;function nu(){return null===eu?eu=function(){return 268435456+Math.round(2147483648*Math.random())}():eu++,"0x"+eu.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const ru={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="WebChannelConnection";class ou extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=e+"://"+t.host,this.fo=`projects/${n}/databases/${r}`,this.po="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get yo(){return!1}wo(t,e,n,r,i){const s=nu(),o=this.So(t,e);Yr("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(a,r,i),this.Do(t,o,a,n).then((e=>(Yr("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw ti("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}Co(t,e,n,r,i,s){return this.wo(t,e,n,r,i)}bo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}So(t,e){const n=ru[t];return`${this.mo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,e,n,r){const i=nu();return new Promise(((s,o)=>{const a=new zr;a.setWithCredentials(!0),a.listenOnce(jr.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Vr.NO_ERROR:const e=a.getResponseJson();Yr(su,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case Vr.TIMEOUT:Yr(su,`RPC '${t}' ${i} timed out`),o(new oi(si.DEADLINE_EXCEEDED,"Request time out"));break;case Vr.HTTP_ERROR:const n=a.getStatus();if(Yr(su,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(si).indexOf(e)>=0?e:si.UNKNOWN}(e.status);o(new oi(t,e.message))}else o(new oi(si.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new oi(si.UNAVAILABLE,"Connection failed."));break;default:ni()}}finally{Yr(su,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);Yr(su,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}vo(t,e,n){const r=nu(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Fr(),o=Ur(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.bo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Yr(su,`Creating RPC '${t}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,f=!1;const d=new iu({co:e=>{f?Yr(su,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(Yr(su,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),Yr(su,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},lo:()=>l.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(l,qr.EventType.OPEN,(()=>{f||Yr(su,`RPC '${t}' stream ${r} transport opened.`)})),p(l,qr.EventType.CLOSE,(()=>{f||(f=!0,Yr(su,`RPC '${t}' stream ${r} transport closed`),d.Ro())})),p(l,qr.EventType.ERROR,(e=>{f||(f=!0,ti(su,`RPC '${t}' stream ${r} transport errored:`,e),d.Ro(new oi(si.UNAVAILABLE,"The operation could not be completed")))})),p(l,qr.EventType.MESSAGE,(e=>{var n;if(!f){const i=e.data[0];ri(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Yr(su,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=pa[t];if(void 0!==e)return ya(e)}(e),i=o.message;void 0===n&&(n=si.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),f=!0,d.Ro(new oi(n,i)),l.close()}else Yr(su,`RPC '${t}' stream ${r} received:`,i),d.Vo(i)}})),p(o,Br.STAT_EVENT,(e=>{e.stat===$r.PROXY?Yr(su,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===$r.NOPROXY&&Yr(su,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.Ao()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t){return new Fa(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t,e,n=1e3,r=1.5,i=6e4){this.si=t,this.timerId=e,this.Fo=n,this.Mo=r,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const e=Math.floor(this.Oo+this.qo()),n=Math.max(0,Date.now()-this.Bo),r=Math.max(0,e-n);r>0&&Yr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Oo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,r,(()=>(this.Bo=Date.now(),t()))),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){null!==this.No&&(this.No.skipDelay(),this.No=null)}cancel(){null!==this.No&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(t,e,n,r,i,s,o,a){this.si=t,this.Ko=n,this.$o=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new uu(t,e)}jo(){return 1===this.state||5===this.state||this.Ho()}Ho(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&null===this.Wo&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,(()=>this.Xo())))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,e){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,4!==t?this.zo.reset():e&&e.code===si.RESOURCE_EXHAUSTED?(Zr(e.toString()),Zr("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):e&&e.code===si.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(e)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),e=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Uo===e&&this.s_(t,n)}),(e=>{t((()=>{const t=new oi(si.UNKNOWN,"Fetching auth token failed: "+e.message);return this.o_(t)}))}))}s_(t,e){const n=this.i_(this.Uo);this.stream=this.__(t,e),this.stream.ho((()=>{n((()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,(()=>(this.Ho()&&(this.state=3),Promise.resolve()))),this.listener.ho())))})),this.stream.Io((t=>{n((()=>this.o_(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Jo(){this.state=5,this.zo.ko((async()=>{this.state=0,this.start()}))}o_(t){return Yr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return e=>{this.si.enqueueAndForget((()=>this.Uo===t?e():(Yr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class hu extends lu{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}__(t,e){return this.connection.vo("Listen",t,e)}onMessage(t){this.zo.reset();const e=Ya(this.serializer,t),n=function(t){if(!("targetChange"in t))return bi.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?bi.min():e.readTime?$a(e.readTime):bi.min()}(t);return this.listener.a_(e,n)}u_(t){const e={};e.database=Qa(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=to(r)?{documents:ec(t,r)}:{query:nc(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=ja(t,e.resumeToken);const r=Ua(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(bi.min())>0){n.readTime=Va(t,e.snapshotVersion.toTimestamp());const r=Ua(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=ic(this.serializer,t);n&&(e.labels=n),this.e_(e)}c_(t){const e={};e.database=Qa(this.serializer),e.removeTarget=t,this.e_(e)}}class fu extends lu{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,e){return this.connection.vo("Write",t,e)}onMessage(t){if(ri(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const e=tc(t.writeResults,t.commitTime),n=$a(t.commitTime);return this.listener.I_(n,e)}return ri(!t.writeResults||0===t.writeResults.length),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=Qa(this.serializer),this.e_(t)}P_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Za(this.serializer,t)))};this.e_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.d_=!1}A_(){if(this.d_)throw new oi(si.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,e,n){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.wo(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===si.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new oi(si.UNKNOWN,t.toString())}))}Co(t,e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Co(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===si.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new oi(si.UNKNOWN,t.toString())}))}terminate(){this.d_=!0}}class pu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){0===this.V_&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve()))))}w_(t){"Online"===this.state?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,"Online"===t&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Zr(e),this.f_=!1):Yr("OnlineStateTracker",e)}S_(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro((t=>{n.enqueueAndForget((async()=>{Cu(this)&&(Yr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ii(t);e.C_.add(4),await yu(e),e.M_.set("Unknown"),e.C_.delete(4),await mu(e)}(this))}))})),this.M_=new pu(n,r)}}async function mu(t){if(Cu(t))for(const e of t.v_)await e(!0)}async function yu(t){for(const e of t.v_)await e(!1)}function vu(t,e){const n=ii(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Tu(n)?Eu(n):$u(n).Ho()&&wu(n,e))}function _u(t,e){const n=ii(t),r=$u(n);n.D_.delete(e),r.Ho()&&bu(n,e),0===n.D_.size&&(r.Ho()?r.Zo():Cu(n)&&n.M_.set("Unknown"))}function wu(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(bi.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}$u(t).u_(e)}function bu(t,e){t.x_.Oe(e),$u(t).c_(e)}function Eu(t){t.x_=new Oa({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),$u(t).start(),t.M_.g_()}function Tu(t){return Cu(t)&&!$u(t).jo()&&t.D_.size>0}function Cu(t){return 0===ii(t).C_.size}function Su(t){t.x_=void 0}async function Iu(t){t.D_.forEach(((e,n)=>{wu(t,e)}))}async function Au(t,e){Su(t),Tu(t)?(t.M_.w_(e),Eu(t)):t.M_.set("Unknown")}async function ku(t,e,n){if(t.M_.set("Online"),e instanceof Ra&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.D_.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.D_.delete(r),t.x_.removeTarget(r))}(t,e)}catch(n){Yr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ru(t,n)}else if(e instanceof Aa?t.x_.$e(e):e instanceof ka?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(bi.min()))try{const e=await qc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.x_.it(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.D_.get(r);i&&t.D_.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.D_.get(e);if(!r)return;t.D_.set(e,r.withResumeToken(ts.EMPTY_BYTE_STRING,r.snapshotVersion)),bu(t,e);const i=new pc(r.target,e,n,r.sequenceNumber);wu(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Yr("RemoteStore","Failed to raise snapshot:",e),await Ru(t,e)}}async function Ru(t,e,n){if(!Mi(e))throw e;t.C_.add(1),await yu(t),t.M_.set("Offline"),n||(n=()=>qc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Yr("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await mu(t)}))}function xu(t,e){return e().catch((n=>Ru(t,n,e)))}async function Ou(t){const e=ii(t),n=qu(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;Du(e);)try{const t=await Gc(e.localStore,r);if(null===t){0===e.b_.length&&n.Zo();break}r=t.batchId,Nu(e,t)}catch(t){await Ru(e,t)}Lu(e)&&Pu(e)}function Du(t){return Cu(t)&&t.b_.length<10}function Nu(t,e){t.b_.push(e);const n=qu(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function Lu(t){return Cu(t)&&!qu(t).jo()&&t.b_.length>0}function Pu(t){qu(t).start()}async function Mu(t){qu(t).E_()}async function Fu(t){const e=qu(t);for(const n of t.b_)e.P_(n.mutations)}async function Uu(t,e,n){const r=t.b_.shift(),i=ha.from(r,e,n);await xu(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Ou(t)}async function Vu(t,e){e&&qu(t).h_&&await async function(t,e){if(function(t){return ma(t)&&t!==si.ABORTED}(e.code)){const n=t.b_.shift();qu(t).Yo(),await xu(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Ou(t)}}(t,e),Lu(t)&&Pu(t)}async function ju(t,e){const n=ii(t);n.asyncQueue.verifyOperationInProgress(),Yr("RemoteStore","RemoteStore received new credentials");const r=Cu(n);n.C_.add(3),await yu(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await mu(n)}async function Bu(t,e){const n=ii(t);e?(n.C_.delete(2),await mu(n)):e||(n.C_.add(2),await yu(n),n.M_.set("Unknown"))}function $u(t){return t.O_||(t.O_=function(t,e,n){const r=ii(t);return r.A_(),new hu(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{ho:Iu.bind(null,t),Io:Au.bind(null,t),a_:ku.bind(null,t)}),t.v_.push((async e=>{e?(t.O_.Yo(),Tu(t)?Eu(t):t.M_.set("Unknown")):(await t.O_.stop(),Su(t))}))),t.O_}function qu(t){return t.N_||(t.N_=function(t,e,n){const r=ii(t);return r.A_(),new fu(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{ho:Mu.bind(null,t),Io:Vu.bind(null,t),T_:Fu.bind(null,t),I_:Uu.bind(null,t)}),t.v_.push((async e=>{e?(t.N_.Yo(),await Ou(t)):(await t.N_.stop(),t.b_.length>0&&(Yr("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))}))),t.N_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class zu{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ai,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new zu(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new oi(si.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hu(t,e){if(Zr("AsyncQueue",`${e}: ${t}`),Mi(t))return new oi(si.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Ii.comparator(e.key,n.key):(t,e)=>Ii.comparator(t.key,e.key),this.keyedMap=Eo(),this.sortedSet=new Ki(this.comparator)}static emptySet(t){return new Gu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Gu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Gu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(){this.B_=new Ki(Ii.comparator)}track(t){const e=t.doc.key,n=this.B_.get(e);n?0!==t.type&&3===n.type?this.B_=this.B_.insert(e,t):3===t.type&&1!==n.type?this.B_=this.B_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.B_=this.B_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.B_=this.B_.remove(e):1===t.type&&2===n.type?this.B_=this.B_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):ni():this.B_=this.B_.insert(e,t)}L_(){const t=[];return this.B_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Wu{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Wu(t,e,Gu.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&lo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(){this.k_=void 0,this.listeners=[]}}class Ju{constructor(){this.queries=new vo((t=>ho(t)),lo),this.onlineState="Unknown",this.q_=new Set}}async function Xu(t,e){const n=ii(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Qu),i)try{s.k_=await n.onListen(r)}catch(t){const n=Hu(t,`Initialization of query '${fo(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&el(n)}async function Yu(t,e){const n=ii(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Zu(t,e){const n=ii(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.K_(i)&&(r=!0);e.k_=i}}r&&el(n)}function tl(t,e,n){const r=ii(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function el(t){t.q_.forEach((t=>{t.next()}))}class nl{constructor(t,e,n){this.query=t,this.U_=e,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=n||{}}K_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Wu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.W_?this.z_(t)&&(this.U_.next(t),e=!0):this.j_(t,this.onlineState)&&(this.H_(t),e=!0),this.G_=t,e}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let e=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),e=!0),e}j_(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.J_||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}z_(t){if(t.docChanges.length>0)return!0;const e=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}H_(t){t=Wu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rl{constructor(t){this.key=t}}class il{constructor(t){this.key=t}}class sl{constructor(t,e){this.query=t,this.ia=e,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=Ro(),this.mutatedKeys=Ro(),this._a=mo(t),this.aa=new Gu(this._a)}get ua(){return this.ia}ca(t,e){const n=e?e.la:new Ku,r=e?e.aa:this.aa;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=po(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.ha(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this._a(l,a)>0||c&&this._a(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{aa:s,la:n,Zi:o,mutatedKeys:i}}ha(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const i=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const s=t.la.L_();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ni()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this._a(t.doc,e.doc))),this.Pa(n),r=null!=r&&r;const o=e&&!r?this.Ia():[],a=0===this.oa.size&&this.current&&!r?1:0,c=a!==this.sa;return this.sa=a,0!==s.length||c?{snapshot:new Wu(this.query,t.aa,i,s,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({aa:this.aa,la:new Ku,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach((t=>this.ia=this.ia.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.ia=this.ia.delete(t))),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=Ro(),this.aa.forEach((t=>{this.Ea(t.key)&&(this.oa=this.oa.add(t.key))}));const e=[];return t.forEach((t=>{this.oa.has(t)||e.push(new il(t))})),this.oa.forEach((n=>{t.has(n)||e.push(new rl(n))})),e}da(t){this.ia=t.ls,this.oa=Ro();const e=this.ca(t.documents);return this.applyChanges(e,!0)}Aa(){return Wu.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,0===this.sa,this.hasCachedResults)}}class ol{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class al{constructor(t){this.key=t,this.Ra=!1}}class cl{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Va={},this.ma=new vo((t=>ho(t)),lo),this.fa=new Map,this.ga=new Set,this.pa=new Ki(Ii.comparator),this.ya=new Map,this.wa=new Ac,this.Sa={},this.ba=new Map,this.Da=bc.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return!0===this.Ca}}async function ul(t,e){const n=kl(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const t=await Kc(n.localStore,ao(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await ll(n,e,r,"current"===s,t.resumeToken),n.isPrimaryClient&&vu(n.remoteStore,t)}return i}async function ll(t,e,n,r,i){t.va=(e,n,r)=>async function(t,e,n,r){let i=e.view.ca(n);i.Zi&&(i=await Qc(t.localStore,e.query,!1).then((({documents:t})=>e.view.ca(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(i,t.isPrimaryClient,s,o);return El(t,e.targetId,a.Ta),a.snapshot}(t,e,n,r);const s=await Qc(t.localStore,e,!0),o=new sl(e,s.ls),a=o.ca(s.documents),c=Ia.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);El(t,n,u.Ta);const l=new ol(e,n,o);return t.ma.set(e,l),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function hl(t,e){const n=ii(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter((t=>!lo(t,e)))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Wc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),_u(n.remoteStore,r.targetId),wl(n,r.targetId)})).catch(Li)):(wl(n,r.targetId),await Wc(n.localStore,r.targetId,!0))}async function fl(t,e,n){const r=Rl(t);try{const t=await function(t,e){const n=ii(t),r=wi.now(),i=e.reduce(((t,e)=>t.add(e.key)),Ro());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=wo(),c=Ro();return n.ss.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=ea(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new ia(t.key,e,Is(e.value.mapValue),Qo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:To(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Sa[t.currentUser.toKey()];r||(r=new Ki(vi)),r=r.insert(e,n),t.Sa[t.currentUser.toKey()]=r}(r,t.batchId,n),await Sl(r,t.changes),await Ou(r.remoteStore)}catch(t){const e=Hu(t,"Failed to persist write");n.reject(e)}}async function dl(t,e){const n=ii(t);try{const t=await zc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.ya.get(e);r&&(ri(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Ra=!0:t.modifiedDocuments.size>0?ri(r.Ra):t.removedDocuments.size>0&&(ri(r.Ra),r.Ra=!1))})),await Sl(n,t,e)}catch(t){await Li(t)}}function pl(t,e,n){const r=ii(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ma.forEach(((n,r)=>{const i=r.view.Q_(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=ii(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Q_(e)&&(r=!0)})),r&&el(n)}(r.eventManager,e),t.length&&r.Va.a_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function gl(t,e,n){const r=ii(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let t=new Ki(Ii.comparator);t=t.insert(s,As.newNoDocument(s,bi.min()));const n=Ro().add(s),i=new Sa(bi.min(),new Map,new Ki(vi),t,n);await dl(r,i),r.pa=r.pa.remove(s),r.ya.delete(e),Cl(r)}else await Wc(r.localStore,e,!1).then((()=>wl(r,e,n))).catch(Li)}async function ml(t,e){const n=ii(t),r=e.batch.batchId;try{const t=await $c(n.localStore,e);_l(n,r,null),vl(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Sl(n,t)}catch(t){await Li(t)}}async function yl(t,e,n){const r=ii(t);try{const t=await function(t,e){const n=ii(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(ri(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);_l(r,e,n),vl(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Sl(r,t)}catch(n){await Li(n)}}function vl(t,e){(t.ba.get(e)||[]).forEach((t=>{t.resolve()})),t.ba.delete(e)}function _l(t,e,n){const r=ii(t);let i=r.Sa[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function wl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach((e=>{t.wa.containsKey(e)||bl(t,e)}))}function bl(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);null!==n&&(_u(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Cl(t))}function El(t,e,n){for(const r of n)r instanceof rl?(t.wa.addReference(r.key,e),Tl(t,r)):r instanceof il?(Yr("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||bl(t,r.key)):ni()}function Tl(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(Yr("SyncEngine","New document in limbo: "+n),t.ga.add(r),Cl(t))}function Cl(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new Ii(Ti.fromString(e)),r=t.Da.next();t.ya.set(r,new al(n)),t.pa=t.pa.insert(n,r),vu(t.remoteStore,new pc(ao(ro(n.path)),r,"TargetPurposeLimboResolution",Fi._e))}}async function Sl(t,e,n){const r=ii(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach(((t,a)=>{o.push(r.va(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=Mc.Qi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.Va.a_(i),await async function(t,e){const n=ii(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Pi.forEach(e,(e=>Pi.forEach(e.ki,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Pi.forEach(e.qi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Mi(t))throw t;Yr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.ts.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.ts=n.ts.insert(t,i)}}}(r.localStore,s))}async function Il(t,e){const n=ii(t);if(!n.currentUser.isEqual(e)){Yr("SyncEngine","User change. New user:",e.toKey());const t=await Bc(n.localStore,e);n.currentUser=e,function(t,e){t.ba.forEach((t=>{t.forEach((t=>{t.reject(new oi(si.CANCELLED,e))}))})),t.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Sl(n,t._s)}}function Al(t,e){const n=ii(t),r=n.ya.get(e);if(r&&r.Ra)return Ro().add(r.key);{let t=Ro();const r=n.fa.get(e);if(!r)return t;for(const e of r){const r=n.ma.get(e);t=t.unionWith(r.view.ua)}return t}}function kl(t){const e=ii(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=dl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Al.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gl.bind(null,e),e.Va.a_=Zu.bind(null,e.eventManager),e.Va.Fa=tl.bind(null,e.eventManager),e}function Rl(t){const e=ii(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ml.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yl.bind(null,e),e}class xl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=cu(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return jc(this.persistence,new Uc,t.initialUser,this.serializer)}createPersistence(t){return new Nc(Pc.jr,this.serializer)}createSharedClientState(t){return new Yc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ol{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>pl(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Il.bind(null,this.syncEngine),await Bu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ju}()}createDatastore(t){const e=cu(t.databaseInfo.databaseId),n=function(t){return new ou(t)}(t.databaseInfo);return function(t,e,n,r){return new du(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new gu(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,(t=>pl(this.syncEngine,t,0)),function(){return tu.D()?new tu:new Zc}())}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new cl(t,e,n,r,i,s);return o&&(a.Ca=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ii(t);Yr("RemoteStore","RemoteStore shutting down."),e.C_.add(5),await yu(e),e.F_.shutdown(),e.M_.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):Zr("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nl{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Wr.UNAUTHENTICATED,this.clientId=yi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Yr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Yr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new oi(si.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ai;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Hu(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Ll(t,e){t.asyncQueue.verifyOperationInProgress(),Yr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Bc(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Pl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Fl(t);Yr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>ju(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>ju(e.remoteStore,n))),t._onlineComponents=e}function Ml(t){return"FirebaseError"===t.name?t.code===si.FAILED_PRECONDITION||t.code===si.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function Fl(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Yr("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ll(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Ml(n))throw n;ti("Error using user provided cache. Falling back to memory cache: "+n),await Ll(t,new xl)}}else Yr("FirestoreClient","Using default OfflineComponentProvider"),await Ll(t,new xl);return t._offlineComponents}async function Ul(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Yr("FirestoreClient","Using user provided OnlineComponentProvider"),await Pl(t,t._uninitializedComponentsProvider._online)):(Yr("FirestoreClient","Using default OnlineComponentProvider"),await Pl(t,new Ol))),t._onlineComponents}function Vl(t){return Ul(t).then((t=>t.syncEngine))}async function jl(t){const e=await Ul(t),n=e.eventManager;return n.onListen=ul.bind(null,e.syncEngine),n.onUnlisten=hl.bind(null,e.syncEngine),n}function Bl(t,e,n={}){const r=new ai;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new Dl({next:s=>{e.enqueueAndForget((()=>Yu(t,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new oi(si.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new oi(si.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new nl(ro(n.path),s,{includeMetadataChanges:!0,J_:!0});return Xu(t,o)}(await jl(t),t.asyncQueue,e,n,r))),r.promise}function $l(t,e,n={}){const r=new ai;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new Dl({next:n=>{e.enqueueAndForget((()=>Yu(t,o))),n.fromCache&&"server"===r.source?i.reject(new oi(si.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new nl(n,s,{includeMetadataChanges:!0,J_:!0});return Xu(t,o)}(await jl(t),t.asyncQueue,e,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ql(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const zl=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t,e,n){if(!n)throw new oi(si.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Gl(t,e,n,r){if(!0===e&&!0===r)throw new oi(si.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kl(t){if(!Ii.isDocumentKey(t))throw new oi(si.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wl(t){if(Ii.isDocumentKey(t))throw new oi(si.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ql(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":ni()}function Jl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new oi(si.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ql(t);throw new oi(si.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xl{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new oi(si.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new oi(si.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Gl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ql(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new oi(si.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new oi(si.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new oi(si.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Yl{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new oi(si.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new oi(si.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ui;switch(t.type){case"firstParty":return new di(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new oi(si.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=zl.get(t);e&&(Yr("ComponentProvider","Removing Datastore"),zl.delete(t),e.terminate())}(this),Promise.resolve()}}function Zl(t,e,n,r={}){var i;const s=(t=Jl(t,Yl))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&ti("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Wr.MOCK_USER;else{e=(0,a.Sg)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new oi(si.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Wr(s)}t._authCredentials=new li(new ci(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new th(this.firestore,t,this._query)}}class eh{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nh(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new eh(this.firestore,t,this._key)}}class nh extends th{constructor(t,e,n){super(t,e,ro(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new eh(this.firestore,null,new Ii(t))}withConverter(t){return new nh(this.firestore,t,this._path)}}function rh(t,e,...n){if(t=(0,a.m9)(t),Hl("collection","path",e),t instanceof Yl){const r=Ti.fromString(e,...n);return Wl(r),new nh(t,null,r)}{if(!(t instanceof eh||t instanceof nh))throw new oi(si.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ti.fromString(e,...n));return Wl(r),new nh(t.firestore,null,r)}}function ih(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=yi.newId()),Hl("doc","path",e),t instanceof Yl){const r=Ti.fromString(e,...n);return Kl(r),new eh(t,null,new Ii(r))}{if(!(t instanceof eh||t instanceof nh))throw new oi(si.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ti.fromString(e,...n));return Kl(r),new eh(t.firestore,t instanceof nh?t.converter:null,new Ii(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sh{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new uu(this,"async_queue_retry"),this.iu=()=>{const t=au();t&&Yr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.zo.Qo()};const t=au();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const e=au();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise((()=>{}));const e=new ai;return this.ou((()=>this.Za&&this.nu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ya.push(t),this._u())))}async _u(){if(0!==this.Ya.length){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!Mi(t))throw t;Yr("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko((()=>this._u()))}}ou(t){const e=this.Ja.then((()=>(this.tu=!0,t().catch((t=>{this.eu=t,this.tu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Zr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.tu=!1,t))))));return this.Ja=e,e}enqueueAfterDelay(t,e,n){this.su(),this.ru.indexOf(t)>-1&&(e=0);const r=zu.createAndSchedule(this,t,e,n,(t=>this.au(t)));return this.Xa.push(r),r}su(){this.eu&&ni()}verifyOperationInProgress(){}async uu(){let t;do{t=this.Ja,await t}while(t!==this.Ja)}cu(t){for(const e of this.Xa)if(e.timerId===t)return!0;return!1}lu(t){return this.uu().then((()=>{this.Xa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Xa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.uu()}))}hu(t){this.ru.push(t)}au(t){const e=this.Xa.indexOf(t);this.Xa.splice(e,1)}}class oh extends Yl{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=function(){return new sh}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||uh(this),this._firestoreClient.terminate()}}function ah(t,e){const n="object"==typeof t?t:(0,i.Mq)(),r="string"==typeof t?t:e||"(default)",s=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const t=(0,a.P0)("firestore");t&&Zl(s,...t)}return s}function ch(t){return t._firestoreClient||uh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function uh(t){var e,n,r;const i=t._freezeSettings(),s=function(t,e,n,r){return new cs(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,ql(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Nl(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lh{constructor(t){this._byteString=t}static fromBase64String(t){try{return new lh(ts.fromBase64String(t))}catch(t){throw new oi(si.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new lh(ts.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new oi(si.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Si(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fh{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new oi(si.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new oi(si.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return vi(this._lat,t._lat)||vi(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=/^__.*__$/;class gh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ia(t,this.data,this.fieldMask,e,this.fieldTransforms):new ra(t,this.data,e,this.fieldTransforms)}}function mh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ni()}}class yh{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new yh(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Tu({path:n,du:!1});return r.Au(t),r}Ru(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Tu({path:n,du:!1});return r.Pu(),r}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return kh(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(0===t.length)throw this.mu("Document fields must not be empty");if(mh(this.Iu)&&ph.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class vh{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||cu(t)}pu(t,e,n,r=!1){return new yh({Iu:t,methodName:e,gu:n,path:Si.emptyPath(),du:!1,fu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _h(t){const e=t._freezeSettings(),n=cu(t._databaseId);return new vh(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wh(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);Ch("Data must be an object, but it was:",o,r);const a=Eh(r,o);let c,u;if(s.merge)c=new Yi(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Sh(e,r,n);if(!o.contains(i))throw new oi(si.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Rh(t,i)||t.push(i)}c=new Yi(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new gh(new Ss(a),c,u)}function bh(t,e){if(Th(t=(0,a.m9)(t)))return Ch("Unsupported field value:",e,t),Eh(t,e);if(t instanceof fh)return function(t,e){if(!mh(e.Iu))throw e.mu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.mu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&4!==e.Iu)throw e.mu("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=bh(i,e.Vu(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Lo(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=wi.fromDate(t);return{timestampValue:Va(e.serializer,n)}}if(t instanceof wi){const n=new wi(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Va(e.serializer,n)}}if(t instanceof dh)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof lh)return{bytesValue:ja(e.serializer,t._byteString)};if(t instanceof eh){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.mu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:qa(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.mu(`Unsupported field value: ${Ql(t)}`)}(t,e)}function Eh(t,e){const n={};return Gi(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hi(t,((t,r)=>{const i=bh(r,e.Eu(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Th(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof wi||t instanceof dh||t instanceof lh||t instanceof eh||t instanceof fh)}function Ch(t,e,n){if(!Th(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Ql(n);throw"an object"===r?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function Sh(t,e,n){if((e=(0,a.m9)(e))instanceof hh)return e._internalPath;if("string"==typeof e)return Ah(t,e);throw kh("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ih=new RegExp("[~\\*/\\[\\]]");function Ah(t,e,n){if(e.search(Ih)>=0)throw kh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hh(...e.split("."))._internalPath}catch(b){throw kh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function kh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new oi(si.INVALID_ARGUMENT,a+t+c)}function Rh(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new eh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Oh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Dh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Oh extends xh{data(){return super.data()}}function Dh(t,e){return"string"==typeof e?Ah(t,e):e instanceof hh?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new oi(si.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lh{convertValue(t,e="none"){switch(hs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rs(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(is(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw ni()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Hi(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new dh(rs(t.latitude),rs(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=os(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(as(t));default:return null}}convertTimestamp(t){const e=ns(t);return new wi(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ti.fromString(t);ri(dc(n));const r=new us(n.get(1),n.get(3)),i=new Ii(n.popFirst(5));return r.isEqual(e)||Zr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mh{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Fh extends xh{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Uh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Dh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Uh extends Fh{data(t={}){return super.data(t)}}class Vh{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Mh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Uh(this._firestore,this._userDataWriter,n.key,n,new Mh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new oi(si.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new Uh(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Mh(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new Uh(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Mh(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:jh(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function jh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ni()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bh(t){t=Jl(t,eh);const e=Jl(t.firestore,oh);return Bl(ch(e),t._key).then((n=>Wh(e,t,n)))}class $h extends Lh{constructor(t){super(),this.firestore=t}convertBytes(t){return new lh(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new eh(this.firestore,null,e)}}function qh(t){t=Jl(t,th);const e=Jl(t.firestore,oh),n=ch(e),r=new $h(e);return Nh(t._query),$l(n,t._query).then((n=>new Vh(e,r,t,n)))}function zh(t,e,n){t=Jl(t,eh);const r=Jl(t.firestore,oh),i=Ph(t.converter,e,n);return Kh(r,[wh(_h(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Qo.none())])}function Hh(t){return Kh(Jl(t.firestore,oh),[new ca(t._key,Qo.none())])}function Gh(t,e){const n=Jl(t.firestore,oh),r=ih(t),i=Ph(t.converter,e);return Kh(n,[wh(_h(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,Qo.exists(!1))]).then((()=>r))}function Kh(t,e){return function(t,e){const n=new ai;return t.asyncQueue.enqueueAndForget((async()=>fl(await Vl(t),e,n))),n.promise}(ch(t),e)}function Wh(t,e,n){const r=n.docs.get(e._key),i=new $h(t);return new Fh(t,i,e._key,r,new Mh(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Qr=t}(i.Jn),(0,i.Xd)(new s.wA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new oh(new hi(t.getProvider("auth-internal")),new gi(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new oi(si.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new us(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Kr,"4.4.0",t),(0,i.KN)(Kr,"4.4.0","esm2017")}()},1294:function(t,e,n){n.d(e,{oq:function(){return oe},Jt:function(){return se},cF:function(){return ce},iH:function(){return ae},KV:function(){return ie}});n(3429),n(560),n(4224),n(1121),n(7133);var r=n(7077),i=n(223),s=n(7142);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l extends i.ZR{constructor(t,e,n=0){super(d(t),`Firebase Storage: ${e} (${d(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return d(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var h,f;function d(t){return"storage/"+t}function p(){const t="An unknown error occurred, please check the error payload for server response.";return new l(h.UNKNOWN,t)}function g(t){return new l(h.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function m(t){return new l(h.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function y(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l(h.UNAUTHENTICATED,t)}function v(){return new l(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function _(t){return new l(h.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function w(){return new l(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function b(){return new l(h.CANCELED,"User canceled the upload/download.")}function E(t){return new l(h.INVALID_URL,"Invalid URL '"+t+"'.")}function T(t){return new l(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function C(){return new l(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function S(){return new l(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function I(){return new l(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function A(t){return new l(h.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function k(t){return new l(h.INVALID_ARGUMENT,t)}function R(){return new l(h.APP_DELETED,"The Firebase app was deleted.")}function x(t){return new l(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function O(t,e){return new l(h.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function D(t){throw new l(h.INTERNAL_ERROR,"Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(h||(h={}));class N{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=N.makeFromUrl(t,e)}catch(r){return new N(t,"")}if(""===n.path)return n;throw T(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+r+s,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${l}/b/${r}/o${f}`,"i"),p={bucket:1,path:3},g=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",y=new RegExp(`^https?://${g}/${r}/${m}`,"i"),v={bucket:1,path:2},_=[{regex:a,indices:c,postModify:i},{regex:d,indices:p,postModify:u},{regex:y,indices:v,postModify:u}];for(let o=0;o<_.length;o++){const e=_[o],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new N(t,i),e.postModify(n);break}}if(null==n)throw E(t);return n}}class L{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){i=setTimeout((()=>{i=null,t(d,c())}),e)}function f(){s&&clearTimeout(s)}function d(t,...e){if(u)return void f();if(t)return f(),void l.call(null,t,...e);const n=c()||o;if(n)return f(),void l.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(t){p||(p=!0,f(),u||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,g(!0)}),n),g}function M(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t){return void 0!==t}function U(t){return"object"===typeof t&&!Array.isArray(t)}function V(t){return"string"===typeof t||t instanceof String}function j(t){return B()&&t instanceof Blob}function B(){return"undefined"!==typeof Blob}function $(t,e,n,r){if(r<e)throw k(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw k(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t,e,n){let r=e;return null==n&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function z(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(t,e){const n=t>=500&&t<600,r=[408,429],i=-1!==r.indexOf(t),s=-1!==e.indexOf(t);return n||i||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(f||(f={}));class G{constructor(t,e,n,r,i,s,o,a,c,u,l,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new K(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===f.NO_ERROR,i=n.getStatus();if(!e||H(i,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===f.ABORT;return void t(!1,new K(!1,null,e))}const s=-1!==this.successCodes_.indexOf(i);t(!0,new K(s,n))}))},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());F(t)?n(t):n()}catch(s){r(s)}else if(null!==i){const t=p();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?R():b();r(t)}else{const t=w();r(t)}};this.canceled_?e(!1,new K(!1,null,!0)):this.backoffId_=P(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&M(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class K{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function W(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function Q(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function J(t,e){e&&(t["X-Firebase-GMPID"]=e)}function X(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function Y(t,e,n,r,i,s,o=!0){const a=z(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return J(u,e),W(u,n),Q(u,s),X(u,r),new G(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function tt(...t){const e=Z();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(B())return new Blob(t);throw new l(h.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function et(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){if("undefined"===typeof atob)throw A("base-64");return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class it{constructor(t,e){this.data=t,this.contentType=e||null}}function st(t,e){switch(t){case rt.RAW:return new it(ot(e));case rt.BASE64:case rt.BASE64URL:return new it(ct(t,e));case rt.DATA_URL:return new it(lt(e),ht(e))}throw p()}function ot(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(i){const i=r,s=t.charCodeAt(++n);r=65536|(1023&i)<<10|1023&s,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320===(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function at(t){let e;try{e=decodeURIComponent(t)}catch(n){throw O(rt.DATA_URL,"Malformed data URL.")}return ot(e)}function ct(t,e){switch(t){case rt.BASE64:{const n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){const e=n?"-":"_";throw O(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case rt.BASE64URL:{const n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r){const e=n?"+":"/";throw O(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=nt(e)}catch(i){if(i.message.includes("polyfill"))throw i;throw O(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ut{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw O(rt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=ft(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function lt(t){const e=new ut(t);return e.base64?ct(rt.BASE64,e.rest):at(e.rest)}function ht(t){const e=new ut(t);return e.contentType}function ft(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t,e){let n=0,r="";j(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(j(this.data_)){const n=this.data_,r=et(n,t,e);return null===r?null:new dt(r)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new dt(n,!0)}}static getBlob(...t){if(B()){const e=t.map((t=>t instanceof dt?t.data_:t));return new dt(tt.apply(null,e))}{const e=t.map((t=>V(t)?st(rt.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const r=new Uint8Array(n);let i=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)r[i++]=t[e]})),new dt(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){let e;try{e=JSON.parse(t)}catch(n){return null}return U(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function mt(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function yt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,e){return e}class _t{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||vt}}let wt=null;function bt(t){return!V(t)||t.length<2?t:yt(t)}function Et(){if(wt)return wt;const t=[];function e(t,e){return bt(e)}t.push(new _t("bucket")),t.push(new _t("generation")),t.push(new _t("metageneration")),t.push(new _t("name","fullPath",!0));const n=new _t("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new _t("size");return i.xform=r,t.push(i),t.push(new _t("timeCreated")),t.push(new _t("updated")),t.push(new _t("md5Hash",null,!0)),t.push(new _t("cacheControl",null,!0)),t.push(new _t("contentDisposition",null,!0)),t.push(new _t("contentEncoding",null,!0)),t.push(new _t("contentLanguage",null,!0)),t.push(new _t("contentType",null,!0)),t.push(new _t("metadata","customMetadata",!0)),wt=t,wt}function Tt(t,e){function n(){const n=t["bucket"],r=t["fullPath"],i=new N(n,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Ct(t,e,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const t=n[s];r[t.local]=t.xform(r,e[t.server])}return Tt(r,t),r}function St(t,e,n){const r=pt(e);if(null===r)return null;const i=r;return Ct(t,i,n)}function It(t,e,n,r){const i=pt(e);if(null===i)return null;if(!V(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map((e=>{const i=t["bucket"],s=t["fullPath"],a="/b/"+o(i)+"/o/"+o(s),c=q(a,n,r),u=z({alt:"media",token:e});return c+u}));return c[0]}function At(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t){if(!t)throw p()}function xt(t,e){function n(n,r){const i=St(t,r,e);return Rt(null!==i),i}return n}function Ot(t,e){function n(n,r){const i=St(t,r,e);return Rt(null!==i),It(i,r,t.host,t._protocol)}return n}function Dt(t){function e(e,n){let r;return r=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?v():y():402===e.getStatus()?m(t.bucket):403===e.getStatus()?_(t.path):n,r.status=e.getStatus(),r.serverResponse=n.serverResponse,r}return e}function Nt(t){const e=Dt(t);function n(n,r){let i=e(n,r);return 404===n.getStatus()&&(i=g(t.path)),i.serverResponse=r.serverResponse,i}return n}function Lt(t,e,n){const r=e.fullServerUrl(),i=q(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new kt(i,s,Ot(t,n),o);return a.errorHandler=Nt(e),a}function Pt(t,e){const n=e.fullServerUrl(),r=q(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(t,e){}const a=new kt(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Nt(e),a}function Mt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Ft(t,e,n){const r=Object.assign({},n);return r["fullPath"]=t.path,r["size"]=e.size(),r["contentType"]||(r["contentType"]=Mt(null,e)),r}function Ut(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=Ft(e,r,i),l=At(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",f="\r\n--"+c+"--",d=dt.getBlob(h,r,f);if(null===d)throw S();const p={name:u["fullPath"]},g=q(s,t.host,t._protocol),m="POST",y=t.maxUploadRetryTime,v=new kt(g,m,xt(t,n),y);return v.urlParams=p,v.headers=o,v.body=d.uploadData(),v.errorHandler=Dt(e),v}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Vt=null;class jt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=f.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=f.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=f.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,r){if(this.sent_)throw D("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw D("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw D("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw D("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw D("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class Bt extends jt{initXhr(){this.xhr_.responseType="text"}}function $t(){return Vt?Vt():new Bt}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt{constructor(t,e){this._service=t,this._location=e instanceof N?e:N.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new qt(t,e)}get root(){const t=new N(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yt(this._location.path)}get storage(){return this._service}get parent(){const t=gt(this._location.path);if(null===t)return null;const e=new N(this._location.bucket,t);return new qt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw x(t)}}function zt(t,e,n){t._throwIfRoot("uploadBytes");const r=Ut(t.storage,t._location,Et(),new dt(e,!0),n);return t.storage.makeRequestWithTokens(r,$t).then((e=>({metadata:e,ref:t})))}function Ht(t){t._throwIfRoot("getDownloadURL");const e=Lt(t.storage,t._location,Et());return t.storage.makeRequestWithTokens(e,$t).then((t=>{if(null===t)throw I();return t}))}function Gt(t){t._throwIfRoot("deleteObject");const e=Pt(t.storage,t._location);return t.storage.makeRequestWithTokens(e,$t)}function Kt(t,e){const n=mt(t._location.path,e),r=new N(t._location.bucket,n);return new qt(t.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t){return/^[A-Za-z]+:\/\//.test(t)}function Qt(t,e){return new qt(t,e)}function Jt(t,e){if(t instanceof te){const n=t;if(null==n._bucket)throw C();const r=new qt(n,n._bucket);return null!=e?Jt(r,e):r}return void 0!==e?Kt(t,e):t}function Xt(t,e){if(e&&Wt(e)){if(t instanceof te)return Qt(t,e);throw k("To use ref(service, url), the first argument must be a Storage instance.")}return Jt(t,e)}function Yt(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:N.makeFromBucketSpec(n,t)}function Zt(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken="string"===typeof s?s:(0,i.Sg)(s,t.app.options.projectId))}class te{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?N.makeFromBucketSpec(r,this._host):Yt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=N.makeFromBucketSpec(this._url,t):this._bucket=Yt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){$("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){$("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new qt(this,t)}_makeRequest(t,e,n,r,i=!0){if(this._deleted)return new L(R());{const s=Y(t,this._appId,n,r,e,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const ee="@firebase/storage",ne="0.12.0",re="storage";function ie(t,e,n){return t=(0,i.m9)(t),zt(t,e,n)}function se(t){return t=(0,i.m9)(t),Ht(t)}function oe(t){return t=(0,i.m9)(t),Gt(t)}function ae(t,e){return t=(0,i.m9)(t),Xt(t,e)}function ce(t=(0,r.Mq)(),e){t=(0,i.m9)(t);const n=(0,r.qX)(t,re),s=n.getImmediate({identifier:e}),o=(0,i.P0)("storage");return o&&ue(s,...o),s}function ue(t,e,n,r={}){Zt(t,e,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new te(n,i,s,e,r.Jn)}function he(){(0,r.Xd)(new s.wA(re,le,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(ee,ne,""),(0,r.KN)(ee,ne,"esm2017")}he()},2483:function(t,e,n){n.d(e,{PO:function(){return V},p7:function(){return ee}});n(560);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const a=Object.assign;function c(t,e){const n={};for(const r in e){const i=e[r];n[r]=l(i)?i.map(t):t(i)}return n}const u=()=>{},l=Array.isArray;const h=/\/$/,f=t=>t.replace(h,"");function d(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=b(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function g(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function m(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&y(e.matched[r],n.matched[i])&&v(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function y(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function v(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!_(t[n],e[n]))return!1;return!0}function _(t,e){return l(t)?w(t,e):l(e)?w(e,t):t===e}function w(t,e){return l(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function b(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var E,T;(function(t){t["pop"]="pop",t["push"]="push"})(E||(E={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(T||(T={}));function C(t){if(!t)if(s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),f(t)}const S=/^[^#]+#/;function I(t,e){return t.replace(S,"#")+e}function A(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const k=()=>({left:window.pageXOffset,top:window.pageYOffset});function R(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=A(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function x(t,e){const n=history.state?history.state.position-e:-1;return n+t}const O=new Map;function D(t,e){O.set(t,e)}function N(t){const e=O.get(t);return O.delete(t),e}let L=()=>location.protocol+"//"+location.host;function P(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),g(n,"")}const o=g(n,t);return o+r+i}function M(t,e,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=P(t,location),c=n.value,u=e.value;let l=0;if(s){if(n.value=a,e.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((t=>{t(n.value,c,{delta:l,type:E.pop,direction:l?l>0?T.forward:T.back:T.unknown})}))};function u(){o=n.value}function l(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(a({},t.state,{scroll:k()}),"")}function f(){for(const t of s)t();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:u,listen:l,destroy:f}}function F(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?k():null}}function U(t){const{history:e,location:n}=window,r={value:P(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:L()+t+r;try{e[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(t,n){const o=a({},e.state,F(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function c(t,n){const o=a({},i.value,e.state,{forward:t,scroll:k()});s(o.current,o,!0);const c=a({},F(r.value,t,null),{position:o.position+1},n);s(t,c,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function V(t){t=C(t);const e=U(t),n=M(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=a({location:"",base:t,go:r,createHref:I.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function j(t){return"string"===typeof t||t&&"object"===typeof t}function B(t){return"string"===typeof t||"symbol"===typeof t}const $={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},q=Symbol("");var z;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(z||(z={}));function H(t,e){return a(new Error,{type:t,[q]:!0},e)}function G(t,e){return t instanceof Error&&q in t&&(null==e||!!(t.type&e))}const K="[^/]+?",W={sensitive:!1,strict:!1,start:!0,end:!0},Q=/[.+*?^${}()[\]/\\]/g;function J(t,e){const n=a({},W,e),r=[];let i=n.start?"^":"";const s=[];for(const a of t){const t=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let e=0;e<a.length;e++){const r=a[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(Q,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:c,regexp:u}=r;s.push({name:t,repeatable:n,optional:c});const l=u||K;if(l!==K){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${t}" (${l}): `+h.message)}}let f=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;e||(f=c&&a.length<2?`(?:/${f})`:"/"+f),c&&(f+="?"),i+=f,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function u(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,c=s in e?e[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function X(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function Y(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=X(r[n],i[n]);if(t)return t;n++}if(1===Math.abs(i.length-r.length)){if(Z(r))return 1;if(Z(i))return-1}return i.length-r.length}function Z(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tt={type:0,value:""},et=/[a-zA-Z0-9_]/;function nt(t){if(!t)return[[]];if("/"===t)return[[tt]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:et.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function rt(t,e,n){const r=J(nt(t.path),n);const i=a(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function it(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,c=ot(t);c.aliasOf=r&&r.record;const h=lt(e,t),f=[c];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)f.push(a({},c,{components:r?r.record.components:c.components,path:t,aliasOf:r?r.record:c}))}let d,p;for(const e of f){const{path:a}=e;if(n&&"/"!==a[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(a&&r+a)}if(d=rt(e,n,h),r?r.alias.push(d):(p=p||d,p!==d&&p.alias.push(d),i&&t.name&&!ct(d)&&o(t.name)),c.children){const t=c.children;for(let e=0;e<t.length;e++)s(t[e],d,r&&r.children[e])}r=r||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return p?()=>{o(p)}:u}function o(t){if(B(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function c(){return n}function l(t){let e=0;while(e<n.length&&Y(t,n[e])>=0&&(t.record.path!==n[e].record.path||!ht(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!ct(t)&&r.set(t.record.name,t)}function h(t,e){let i,s,o,c={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw H(1,{location:t});0,o=i.record.name,c=a(st(e.params,i.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params&&st(t.params,i.keys.map((t=>t.name)))),s=i.stringify(c)}else if("path"in t)s=t.path,i=n.find((t=>t.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!i)throw H(1,{location:t,currentLocation:e});o=i.record.name,c=a({},e.params,t.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:c,matched:u,meta:ut(u)}}return e=lt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>s(t))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function st(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ot(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:at(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function at(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="object"===typeof n?n[r]:n;return e}function ct(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ut(t){return t.reduce(((t,e)=>a(t,e.meta)),{})}function lt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ht(t,e){return e.children.some((e=>e===t||ht(t,e)))}const ft=/#/g,dt=/&/g,pt=/\//g,gt=/=/g,mt=/\?/g,yt=/\+/g,vt=/%5B/g,_t=/%5D/g,wt=/%5E/g,bt=/%60/g,Et=/%7B/g,Tt=/%7C/g,Ct=/%7D/g,St=/%20/g;function It(t){return encodeURI(""+t).replace(Tt,"|").replace(vt,"[").replace(_t,"]")}function At(t){return It(t).replace(Et,"{").replace(Ct,"}").replace(wt,"^")}function kt(t){return It(t).replace(yt,"%2B").replace(St,"+").replace(ft,"%23").replace(dt,"%26").replace(bt,"`").replace(Et,"{").replace(Ct,"}").replace(wt,"^")}function Rt(t){return kt(t).replace(gt,"%3D")}function xt(t){return It(t).replace(ft,"%23").replace(mt,"%3F")}function Ot(t){return null==t?"":xt(t).replace(pt,"%2F")}function Dt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Nt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(yt," "),n=t.indexOf("="),s=Dt(n<0?t:t.slice(0,n)),o=n<0?null:Dt(t.slice(n+1));if(s in e){let t=e[s];l(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Lt(t){let e="";for(let n in t){const r=t[n];if(n=Rt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=l(r)?r.map((t=>t&&kt(t))):[r&&kt(r)];i.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Pt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=l(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const Mt=Symbol(""),Ft=Symbol(""),Ut=Symbol(""),Vt=Symbol(""),jt=Symbol("");function Bt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function $t(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=t=>{!1===t?a(H(4,{from:n,to:e})):t instanceof Error?a(t):j(t)?a(H(2,{from:e,to:t})):(s&&r.enterCallbacks[i]===s&&"function"===typeof t&&s.push(t),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch((t=>a(t)))}))}function qt(t,e,n,r){const i=[];for(const s of t){0;for(const t in s.components){let a=s.components[t];if("beforeRouteEnter"===e||s.instances[t])if(zt(a)){const o=a.__vccOpts||a,c=o[e];c&&i.push($t(c,n,r,s,t))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[t]=a;const c=a.__vccOpts||a,u=c[e];return u&&$t(u,n,r,s,t)()}))))}}}return i}function zt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Ht(t){const e=(0,r.f3)(Ut),n=(0,r.f3)(Vt),s=(0,r.Fl)((()=>e.resolve((0,i.SU)(t.to)))),o=(0,r.Fl)((()=>{const{matched:t}=s.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(y.bind(null,r));if(o>-1)return o;const a=Jt(t[e-2]);return e>1&&Jt(r)===a&&i[i.length-1].path!==a?i.findIndex(y.bind(null,t[e-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Qt(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&v(n.params,s.value.params)));function l(n={}){return Wt(n)?e[(0,i.SU)(t.replace)?"replace":"push"]((0,i.SU)(t.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}const Gt=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ht,setup(t,{slots:e}){const n=(0,i.qj)(Ht(t)),{options:s}=(0,r.f3)(Ut),o=(0,r.Fl)((()=>({[Xt(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xt(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=e.default&&e.default(n);return t.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Kt=Gt;function Wt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Qt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((t,e)=>t!==i[e])))return!1}return!0}function Jt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xt=(t,e,n)=>null!=t?t:null!=e?e:n,Yt=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=(0,r.f3)(jt),o=(0,r.Fl)((()=>t.route||s.value)),c=(0,r.f3)(Ft,0),u=(0,r.Fl)((()=>{let t=(0,i.SU)(c);const{matched:e}=o.value;let n;while((n=e[t])&&!n.components)t++;return t})),l=(0,r.Fl)((()=>o.value.matched[u.value]));(0,r.JJ)(Ft,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Mt,l),(0,r.JJ)(jt,o);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,l.value,t.name]),(([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&y(e,i)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const i=o.value,s=t.name,c=l.value,u=c&&c.components[s];if(!u)return Zt(n.default,{Component:u,route:i});const f=c.props[s],d=f?!0===f?i.params:"function"===typeof f?f(i):f:null,p=t=>{t.component.isUnmounted&&(c.instances[s]=null)},g=(0,r.h)(u,a({},d,e,{onVnodeUnmounted:p,ref:h}));return Zt(n.default,{Component:g,route:i})||g}}});function Zt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const te=Yt;function ee(t){const e=it(t.routes,t),n=t.parseQuery||Nt,o=t.stringifyQuery||Lt,h=t.history;const f=Bt(),g=Bt(),y=Bt(),v=(0,i.XI)($);let _=$;s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=c.bind(null,(t=>""+t)),b=c.bind(null,Ot),T=c.bind(null,Dt);function C(t,n){let r,i;return B(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function S(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function I(){return e.getRoutes().map((t=>t.record))}function A(t){return!!e.getRecordMatcher(t)}function O(t,r){if(r=a({},r||v.value),"string"===typeof t){const i=d(n,t,r.path),s=e.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:T(s.params),hash:Dt(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in t)i=a({},t,{path:d(n,t.path,r.path).path});else{const e=a({},t.params);for(const t in e)null==e[t]&&delete e[t];i=a({},t,{params:b(e)}),r.params=b(r.params)}const s=e.resolve(i,r),c=t.hash||"";s.params=w(T(s.params));const u=p(o,a({},t,{hash:At(c),path:s.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Lt?Pt(t.query):t.query||{}},s,{redirectedFrom:void 0,href:l})}function L(t){return"string"===typeof t?d(n,t,v.value.path):a({},t)}function P(t,e){if(_!==t)return H(8,{from:e,to:t})}function M(t){return V(t)}function F(t){return M(a(L(t),{replace:!0}))}function U(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=L(r):{path:r},r.params={}),a({query:t.query,hash:t.hash,params:"path"in r?{}:t.params},r)}}function V(t,e){const n=_=O(t),r=v.value,i=t.state,s=t.force,c=!0===t.replace,u=U(n);if(u)return V(a(L(u),{state:"object"===typeof u?a({},i,u.state):i,force:s,replace:c}),e||n);const l=n;let h;return l.redirectedFrom=e,!s&&m(o,r,n)&&(h=H(16,{to:l,from:r}),rt(r,r,!0,!1)),(h?Promise.resolve(h):z(l,r)).catch((t=>G(t)?G(t,2)?t:nt(t):tt(t,l,r))).then((t=>{if(t){if(G(t,2))return V(a({replace:c},L(t.to),{state:"object"===typeof t.to?a({},i,t.to.state):i,force:s}),e||l)}else t=W(l,r,!0,c,i);return K(l,r,t),t}))}function j(t,e){const n=P(t,e);return n?Promise.reject(n):Promise.resolve()}function q(t){const e=at.values().next().value;return e&&"function"===typeof e.runWithContext?e.runWithContext(t):t()}function z(t,e){let n;const[r,i,s]=ne(t,e);n=qt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push($t(r,t,e))}));const o=j.bind(null,t,e);return n.push(o),ut(n).then((()=>{n=[];for(const r of f.list())n.push($t(r,t,e));return n.push(o),ut(n)})).then((()=>{n=qt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach((r=>{n.push($t(r,t,e))}));return n.push(o),ut(n)})).then((()=>{n=[];for(const r of s)if(r.beforeEnter)if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push($t(i,t,e));else n.push($t(r.beforeEnter,t,e));return n.push(o),ut(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=qt(s,"beforeRouteEnter",t,e),n.push(o),ut(n)))).then((()=>{n=[];for(const r of g.list())n.push($t(r,t,e));return n.push(o),ut(n)})).catch((t=>G(t,8)?t:Promise.reject(t)))}function K(t,e,n){y.list().forEach((r=>q((()=>r(t,e,n)))))}function W(t,e,n,r,i){const o=P(t,e);if(o)return o;const c=e===$,u=s?history.state:{};n&&(r||c?h.replace(t.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(t.fullPath,i)),v.value=t,rt(t,e,n,c),nt()}let Q;function J(){Q||(Q=h.listen(((t,e,n)=>{if(!ct.listening)return;const r=O(t),i=U(r);if(i)return void V(a(i,{replace:!0}),r).catch(u);_=r;const o=v.value;s&&D(x(o.fullPath,n.delta),k()),z(r,o).catch((t=>G(t,12)?t:G(t,2)?(V(t.to,r).then((t=>{G(t,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),tt(t,r,o)))).then((t=>{t=t||W(r,o,!1),t&&(n.delta&&!G(t,8)?h.go(-n.delta,!1):n.type===E.pop&&G(t,20)&&h.go(-1,!1)),K(r,o,t)})).catch(u)})))}let X,Y=Bt(),Z=Bt();function tt(t,e,n){nt(t);const r=Z.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function et(){return X&&v.value!==$?Promise.resolve():new Promise(((t,e)=>{Y.add([t,e])}))}function nt(t){return X||(X=!t,J(),Y.list().forEach((([e,n])=>t?n(t):e())),Y.reset()),t}function rt(e,n,i,o){const{scrollBehavior:a}=t;if(!s||!a)return Promise.resolve();const c=!i&&N(x(e.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(e,n,c))).then((t=>t&&R(t))).catch((t=>tt(t,e,n)))}const st=t=>h.go(t);let ot;const at=new Set,ct={currentRoute:v,listening:!0,addRoute:C,removeRoute:S,hasRoute:A,getRoutes:I,resolve:O,options:t,push:M,replace:F,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:f.add,beforeResolve:g.add,afterEach:y.add,onError:Z.add,isReady:et,install(t){const e=this;t.component("RouterLink",Kt),t.component("RouterView",te),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(v)}),s&&!ot&&v.value===$&&(ot=!0,M(h.location).catch((t=>{0})));const n={};for(const i in $)Object.defineProperty(n,i,{get:()=>v.value[i],enumerable:!0});t.provide(Ut,e),t.provide(Vt,(0,i.Um)(n)),t.provide(jt,v);const r=t.unmount;at.add(t),t.unmount=function(){at.delete(t),at.size<1&&(_=$,Q&&Q(),Q=null,v.value=$,ot=!1,X=!1),r()}}};function ut(t){return t.reduce(((t,e)=>t.then((()=>q(e)))),Promise.resolve())}return ct}function ne(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find((t=>y(t,s)))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find((t=>y(t,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.2fa09707.js.map