(function(rn,sn){typeof exports=="object"&&typeof module!="undefined"?sn(exports,require("https://cdn.jsdelivr.net/npm/tweakpane@4.0.0/dist/tweakpane.min.js")):typeof define=="function"&&define.amd?define(["exports","https://cdn.jsdelivr.net/npm/tweakpane@4.0.0/dist/tweakpane.min.js"],sn):(rn=typeof globalThis!="undefined"?globalThis:rn||self,sn(rn.WebglApp={}))})(this,function(rn){"use strict";var px=Object.defineProperty;var fx=(rn,sn,Un)=>sn in rn?px(rn,sn,{enumerable:!0,configurable:!0,writable:!0,value:Un}):rn[sn]=Un;var el=(rn,sn,Un)=>(fx(rn,typeof sn!="symbol"?sn+"":sn,Un),Un);var sn="";/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Un="152",bi="",Ft="srgb",wn="srgb-linear",nl="display-p3",il="300 es";class Wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const a=r.indexOf(e);a!==-1&&r.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let a=0,u=r.length;a<u;a++)r[a].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ba=Math.PI/180,Ma=180/Math.PI;function Ur(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[s&255]+Ie[s>>8&255]+Ie[s>>16&255]+Ie[s>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function ze(s,t,e){return Math.max(t,Math.min(e,s))}function Eh(s,t){return(s%t+t)%t}function wa(s,t,e){return(1-e)*s+e*t}function rl(s){return(s&s-1)===0&&s!==0}function yh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ws(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ze(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class te{constructor(t=0,e=0){te.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),a=this.x-t.x,u=this.y-t.y;return this.x=a*n-u*r+t.x,this.y=a*r+u*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,r,a,u,c,p,d){const f=this.elements;return f[0]=t,f[1]=r,f[2]=c,f[3]=e,f[4]=a,f[5]=p,f[6]=n,f[7]=u,f[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,a=this.elements,u=n[0],c=n[3],p=n[6],d=n[1],f=n[4],m=n[7],g=n[2],v=n[5],w=n[8],x=r[0],b=r[3],_=r[6],y=r[1],E=r[4],C=r[7],T=r[2],P=r[5],U=r[8];return a[0]=u*x+c*y+p*T,a[3]=u*b+c*E+p*P,a[6]=u*_+c*C+p*U,a[1]=d*x+f*y+m*T,a[4]=d*b+f*E+m*P,a[7]=d*_+f*C+m*U,a[2]=g*x+v*y+w*T,a[5]=g*b+v*E+w*P,a[8]=g*_+v*C+w*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],u=t[4],c=t[5],p=t[6],d=t[7],f=t[8];return e*u*f-e*c*d-n*a*f+n*c*p+r*a*d-r*u*p}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],u=t[4],c=t[5],p=t[6],d=t[7],f=t[8],m=f*u-c*d,g=c*p-f*a,v=d*a-u*p,w=e*m+n*g+r*v;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/w;return t[0]=m*x,t[1]=(r*d-f*n)*x,t[2]=(c*n-r*u)*x,t[3]=g*x,t[4]=(f*e-r*p)*x,t[5]=(r*a-c*e)*x,t[6]=v*x,t[7]=(n*p-d*e)*x,t[8]=(u*e-n*a)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,a,u,c){const p=Math.cos(a),d=Math.sin(a);return this.set(n*p,n*d,-n*(p*u+d*c)+u+t,-r*d,r*p,-r*(-d*u+p*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(Sa.makeScale(t,e)),this}rotate(t){return this.premultiply(Sa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sa.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Sa=new Wt;function sl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ir(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const al={};function Fr(s){s in al||(al[s]=!0,console.warn(s))}function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ea(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Th=new Wt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ch=new Wt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Ah(s){return s.convertSRGBToLinear().applyMatrix3(Ch)}function Ph(s){return s.applyMatrix3(Th).convertLinearToSRGB()}const Rh={[wn]:s=>s,[Ft]:s=>s.convertSRGBToLinear(),[nl]:Ah},Lh={[wn]:s=>s,[Ft]:s=>s.convertLinearToSRGB(),[nl]:Ph},gn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return wn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Rh[t],r=Lh[e];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return r(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}};let qi;class ol{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qi===void 0&&(qi=Ir("canvas")),qi.width=t.width,qi.height=t.height;const n=qi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=Ir("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),a=r.data;for(let u=0;u<a.length;u++)a[u]=Xi(a[u]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xi(e[n]/255)*255):e[n]=Xi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class ll{constructor(t=null){this.isSource=!0,this.uuid=Ur(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let u=0,c=r.length;u<c;u++)r[u].isDataTexture?a.push(ya(r[u].image)):a.push(ya(r[u]))}else a=ya(r);n.url=a}return e||(t.images[this.uuid]=n),n}}function ya(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?ol.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dh=0;class Ge extends Wi{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=1001,r=1001,a=1006,u=1008,c=1023,p=1009,d=Ge.DEFAULT_ANISOTROPY,f=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Ur(),this.name="",this.source=new ll(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=p,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===3001?Ft:bi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ft?3001:3e3}set encoding(t){Fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===3001?Ft:bi}}Ge.DEFAULT_IMAGE=null,Ge.DEFAULT_MAPPING=300,Ge.DEFAULT_ANISOTROPY=1;class Re{constructor(t=0,e=0,n=0,r=1){Re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,a=this.w,u=t.elements;return this.x=u[0]*e+u[4]*n+u[8]*r+u[12]*a,this.y=u[1]*e+u[5]*n+u[9]*r+u[13]*a,this.z=u[2]*e+u[6]*n+u[10]*r+u[14]*a,this.w=u[3]*e+u[7]*n+u[11]*r+u[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,a;const p=t.elements,d=p[0],f=p[4],m=p[8],g=p[1],v=p[5],w=p[9],x=p[2],b=p[6],_=p[10];if(Math.abs(f-g)<.01&&Math.abs(m-x)<.01&&Math.abs(w-b)<.01){if(Math.abs(f+g)<.1&&Math.abs(m+x)<.1&&Math.abs(w+b)<.1&&Math.abs(d+v+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(d+1)/2,C=(v+1)/2,T=(_+1)/2,P=(f+g)/4,U=(m+x)/4,F=(w+b)/4;return E>C&&E>T?E<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(E),r=P/n,a=U/n):C>T?C<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(C),n=P/r,a=F/r):T<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(T),n=U/a,r=F/a),this.set(n,r,a,e),this}let y=Math.sqrt((b-w)*(b-w)+(m-x)*(m-x)+(g-f)*(g-f));return Math.abs(y)<.001&&(y=1),this.x=(b-w)/y,this.y=(m-x)/y,this.z=(g-f)/y,this.w=Math.acos((d+v+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mi extends Wi{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(Fr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===3001?Ft:bi),this.texture=new Ge(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:1006,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ll(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cl extends Ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uh extends Ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,a,u,c){let p=n[r+0],d=n[r+1],f=n[r+2],m=n[r+3];const g=a[u+0],v=a[u+1],w=a[u+2],x=a[u+3];if(c===0){t[e+0]=p,t[e+1]=d,t[e+2]=f,t[e+3]=m;return}if(c===1){t[e+0]=g,t[e+1]=v,t[e+2]=w,t[e+3]=x;return}if(m!==x||p!==g||d!==v||f!==w){let b=1-c;const _=p*g+d*v+f*w+m*x,y=_>=0?1:-1,E=1-_*_;if(E>Number.EPSILON){const T=Math.sqrt(E),P=Math.atan2(T,_*y);b=Math.sin(b*P)/T,c=Math.sin(c*P)/T}const C=c*y;if(p=p*b+g*C,d=d*b+v*C,f=f*b+w*C,m=m*b+x*C,b===1-c){const T=1/Math.sqrt(p*p+d*d+f*f+m*m);p*=T,d*=T,f*=T,m*=T}}t[e]=p,t[e+1]=d,t[e+2]=f,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,r,a,u){const c=n[r],p=n[r+1],d=n[r+2],f=n[r+3],m=a[u],g=a[u+1],v=a[u+2],w=a[u+3];return t[e]=c*w+f*m+p*v-d*g,t[e+1]=p*w+f*g+d*m-c*v,t[e+2]=d*w+f*v+c*g-p*m,t[e+3]=f*w-c*m-p*g-d*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,r=t._y,a=t._z,u=t._order,c=Math.cos,p=Math.sin,d=c(n/2),f=c(r/2),m=c(a/2),g=p(n/2),v=p(r/2),w=p(a/2);switch(u){case"XYZ":this._x=g*f*m+d*v*w,this._y=d*v*m-g*f*w,this._z=d*f*w+g*v*m,this._w=d*f*m-g*v*w;break;case"YXZ":this._x=g*f*m+d*v*w,this._y=d*v*m-g*f*w,this._z=d*f*w-g*v*m,this._w=d*f*m+g*v*w;break;case"ZXY":this._x=g*f*m-d*v*w,this._y=d*v*m+g*f*w,this._z=d*f*w+g*v*m,this._w=d*f*m-g*v*w;break;case"ZYX":this._x=g*f*m-d*v*w,this._y=d*v*m+g*f*w,this._z=d*f*w-g*v*m,this._w=d*f*m+g*v*w;break;case"YZX":this._x=g*f*m+d*v*w,this._y=d*v*m+g*f*w,this._z=d*f*w-g*v*m,this._w=d*f*m-g*v*w;break;case"XZY":this._x=g*f*m-d*v*w,this._y=d*v*m-g*f*w,this._z=d*f*w+g*v*m,this._w=d*f*m+g*v*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],a=e[8],u=e[1],c=e[5],p=e[9],d=e[2],f=e[6],m=e[10],g=n+c+m;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(f-p)*v,this._y=(a-d)*v,this._z=(u-r)*v}else if(n>c&&n>m){const v=2*Math.sqrt(1+n-c-m);this._w=(f-p)/v,this._x=.25*v,this._y=(r+u)/v,this._z=(a+d)/v}else if(c>m){const v=2*Math.sqrt(1+c-n-m);this._w=(a-d)/v,this._x=(r+u)/v,this._y=.25*v,this._z=(p+f)/v}else{const v=2*Math.sqrt(1+m-n-c);this._w=(u-r)/v,this._x=(a+d)/v,this._y=(p+f)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,a=t._z,u=t._w,c=e._x,p=e._y,d=e._z,f=e._w;return this._x=n*f+u*c+r*d-a*p,this._y=r*f+u*p+a*c-n*d,this._z=a*f+u*d+n*p-r*c,this._w=u*f-n*c-r*p-a*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,a=this._z,u=this._w;let c=u*t._w+n*t._x+r*t._y+a*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=u,this._x=n,this._y=r,this._z=a,this;const p=1-c*c;if(p<=Number.EPSILON){const v=1-e;return this._w=v*u+e*this._w,this._x=v*n+e*this._x,this._y=v*r+e*this._y,this._z=v*a+e*this._z,this.normalize(),this._onChangeCallback(),this}const d=Math.sqrt(p),f=Math.atan2(d,c),m=Math.sin((1-e)*f)/d,g=Math.sin(e*f)/d;return this._w=u*m+this._w*g,this._x=n*m+this._x*g,this._y=r*m+this._y*g,this._z=a*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(a),n*Math.cos(a),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,e=0,n=0){W.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ul.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ul.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*r,this.y=a[1]*e+a[4]*n+a[7]*r,this.z=a[2]*e+a[5]*n+a[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,a=t.elements,u=1/(a[3]*e+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*r+a[12])*u,this.y=(a[1]*e+a[5]*n+a[9]*r+a[13])*u,this.z=(a[2]*e+a[6]*n+a[10]*r+a[14])*u,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,a=t.x,u=t.y,c=t.z,p=t.w,d=p*e+u*r-c*n,f=p*n+c*e-a*r,m=p*r+a*n-u*e,g=-a*e-u*n-c*r;return this.x=d*p+g*-a+f*-c-m*-u,this.y=f*p+g*-u+m*-a-d*-c,this.z=m*p+g*-c+d*-u-f*-a,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r,this.y=a[1]*e+a[5]*n+a[9]*r,this.z=a[2]*e+a[6]*n+a[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,a=t.z,u=e.x,c=e.y,p=e.z;return this.x=r*p-a*c,this.y=a*u-n*p,this.z=n*c-r*u,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ta.copy(this).projectOnVector(t),this.sub(Ta)}reflect(t){return this.sub(Ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ta=new W,ul=new Nr;class Or{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),ji.copy(t.boundingBox),ji.applyMatrix4(t.matrixWorld),this.union(ji);else{const r=t.geometry;if(r!==void 0)if(e&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let u=0,c=a.count;u<c;u++)Fn.fromBufferAttribute(a,u).applyMatrix4(t.matrixWorld),this.expandByPoint(Fn)}else r.boundingBox===null&&r.computeBoundingBox(),ji.copy(r.boundingBox),ji.applyMatrix4(t.matrixWorld),this.union(ji)}const n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Br),Ss.subVectors(this.max,Br),Ki.subVectors(t.a,Br),Yi.subVectors(t.b,Br),$i.subVectors(t.c,Br),Zn.subVectors(Yi,Ki),Jn.subVectors($i,Yi),wi.subVectors(Ki,$i);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-wi.z,wi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,wi.z,0,-wi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-wi.y,wi.x,0];return!Ca(e,Ki,Yi,$i,Ss)||(e=[1,0,0,0,1,0,0,0,1],!Ca(e,Ki,Yi,$i,Ss))?!1:(Es.crossVectors(Zn,Jn),e=[Es.x,Es.y,Es.z],Ca(e,Ki,Yi,$i,Ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const In=[new W,new W,new W,new W,new W,new W,new W,new W],Fn=new W,ji=new Or,Ki=new W,Yi=new W,$i=new W,Zn=new W,Jn=new W,wi=new W,Br=new W,Ss=new W,Es=new W,Si=new W;function Ca(s,t,e,n,r){for(let a=0,u=s.length-3;a<=u;a+=3){Si.fromArray(s,a);const c=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),p=t.dot(Si),d=e.dot(Si),f=n.dot(Si);if(Math.max(-Math.max(p,d,f),Math.min(p,d,f))>c)return!1}return!0}const Ih=new Or,kr=new W,Aa=new W;class Pa{constructor(t=new W,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ih.setFromPoints(t).getCenter(n);let r=0;for(let a=0,u=t.length;a<u;a++)r=Math.max(r,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;kr.subVectors(t,this.center);const e=kr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(kr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Aa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(kr.copy(t.center).add(Aa)),this.expandByPoint(kr.copy(t.center).sub(Aa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new W,Ra=new W,ys=new W,Qn=new W,La=new W,Ts=new W,Da=new W;class Fh{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ra.copy(t).add(e).multiplyScalar(.5),ys.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(Ra);const a=t.distanceTo(e)*.5,u=-this.direction.dot(ys),c=Qn.dot(this.direction),p=-Qn.dot(ys),d=Qn.lengthSq(),f=Math.abs(1-u*u);let m,g,v,w;if(f>0)if(m=u*p-c,g=u*c-p,w=a*f,m>=0)if(g>=-w)if(g<=w){const x=1/f;m*=x,g*=x,v=m*(m+u*g+2*c)+g*(u*m+g+2*p)+d}else g=a,m=Math.max(0,-(u*g+c)),v=-m*m+g*(g+2*p)+d;else g=-a,m=Math.max(0,-(u*g+c)),v=-m*m+g*(g+2*p)+d;else g<=-w?(m=Math.max(0,-(-u*a+c)),g=m>0?-a:Math.min(Math.max(-a,-p),a),v=-m*m+g*(g+2*p)+d):g<=w?(m=0,g=Math.min(Math.max(-a,-p),a),v=g*(g+2*p)+d):(m=Math.max(0,-(u*a+c)),g=m>0?a:Math.min(Math.max(-a,-p),a),v=-m*m+g*(g+2*p)+d);else g=u>0?-a:a,m=Math.max(0,-(u*g+c)),v=-m*m+g*(g+2*p)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Ra).addScaledVector(ys,g),v}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),r=Nn.dot(Nn)-n*n,a=t.radius*t.radius;if(r>a)return null;const u=Math.sqrt(a-r),c=n-u,p=n+u;return p<0?null:c<0?this.at(p,e):this.at(c,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,a,u,c,p;const d=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,g=this.origin;return d>=0?(n=(t.min.x-g.x)*d,r=(t.max.x-g.x)*d):(n=(t.max.x-g.x)*d,r=(t.min.x-g.x)*d),f>=0?(a=(t.min.y-g.y)*f,u=(t.max.y-g.y)*f):(a=(t.max.y-g.y)*f,u=(t.min.y-g.y)*f),n>u||a>r||((a>n||isNaN(n))&&(n=a),(u<r||isNaN(r))&&(r=u),m>=0?(c=(t.min.z-g.z)*m,p=(t.max.z-g.z)*m):(c=(t.max.z-g.z)*m,p=(t.min.z-g.z)*m),n>p||c>r)||((c>n||n!==n)&&(n=c),(p<r||r!==r)&&(r=p),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,r,a){La.subVectors(e,t),Ts.subVectors(n,t),Da.crossVectors(La,Ts);let u=this.direction.dot(Da),c;if(u>0){if(r)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Qn.subVectors(this.origin,t);const p=c*this.direction.dot(Ts.crossVectors(Qn,Ts));if(p<0)return null;const d=c*this.direction.dot(La.cross(Qn));if(d<0||p+d>u)return null;const f=-c*Qn.dot(Da);return f<0?null:this.at(f/u,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,r,a,u,c,p,d,f,m,g,v,w,x,b){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=r,_[1]=a,_[5]=u,_[9]=c,_[13]=p,_[2]=d,_[6]=f,_[10]=m,_[14]=g,_[3]=v,_[7]=w,_[11]=x,_[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Zi.setFromMatrixColumn(t,0).length(),a=1/Zi.setFromMatrixColumn(t,1).length(),u=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*u,e[9]=n[9]*u,e[10]=n[10]*u,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,a=t.z,u=Math.cos(n),c=Math.sin(n),p=Math.cos(r),d=Math.sin(r),f=Math.cos(a),m=Math.sin(a);if(t.order==="XYZ"){const g=u*f,v=u*m,w=c*f,x=c*m;e[0]=p*f,e[4]=-p*m,e[8]=d,e[1]=v+w*d,e[5]=g-x*d,e[9]=-c*p,e[2]=x-g*d,e[6]=w+v*d,e[10]=u*p}else if(t.order==="YXZ"){const g=p*f,v=p*m,w=d*f,x=d*m;e[0]=g+x*c,e[4]=w*c-v,e[8]=u*d,e[1]=u*m,e[5]=u*f,e[9]=-c,e[2]=v*c-w,e[6]=x+g*c,e[10]=u*p}else if(t.order==="ZXY"){const g=p*f,v=p*m,w=d*f,x=d*m;e[0]=g-x*c,e[4]=-u*m,e[8]=w+v*c,e[1]=v+w*c,e[5]=u*f,e[9]=x-g*c,e[2]=-u*d,e[6]=c,e[10]=u*p}else if(t.order==="ZYX"){const g=u*f,v=u*m,w=c*f,x=c*m;e[0]=p*f,e[4]=w*d-v,e[8]=g*d+x,e[1]=p*m,e[5]=x*d+g,e[9]=v*d-w,e[2]=-d,e[6]=c*p,e[10]=u*p}else if(t.order==="YZX"){const g=u*p,v=u*d,w=c*p,x=c*d;e[0]=p*f,e[4]=x-g*m,e[8]=w*m+v,e[1]=m,e[5]=u*f,e[9]=-c*f,e[2]=-d*f,e[6]=v*m+w,e[10]=g-x*m}else if(t.order==="XZY"){const g=u*p,v=u*d,w=c*p,x=c*d;e[0]=p*f,e[4]=-m,e[8]=d*f,e[1]=g*m+x,e[5]=u*f,e[9]=v*m-w,e[2]=w*m-v,e[6]=c*f,e[10]=x*m+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nh,t,Oh)}lookAt(t,e,n){const r=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),ti.crossVectors(n,Je),ti.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),ti.crossVectors(n,Je)),ti.normalize(),Cs.crossVectors(Je,ti),r[0]=ti.x,r[4]=Cs.x,r[8]=Je.x,r[1]=ti.y,r[5]=Cs.y,r[9]=Je.y,r[2]=ti.z,r[6]=Cs.z,r[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,a=this.elements,u=n[0],c=n[4],p=n[8],d=n[12],f=n[1],m=n[5],g=n[9],v=n[13],w=n[2],x=n[6],b=n[10],_=n[14],y=n[3],E=n[7],C=n[11],T=n[15],P=r[0],U=r[4],F=r[8],S=r[12],L=r[1],q=r[5],Q=r[9],k=r[13],H=r[2],X=r[6],nt=r[10],j=r[14],z=r[3],it=r[7],rt=r[11],_t=r[15];return a[0]=u*P+c*L+p*H+d*z,a[4]=u*U+c*q+p*X+d*it,a[8]=u*F+c*Q+p*nt+d*rt,a[12]=u*S+c*k+p*j+d*_t,a[1]=f*P+m*L+g*H+v*z,a[5]=f*U+m*q+g*X+v*it,a[9]=f*F+m*Q+g*nt+v*rt,a[13]=f*S+m*k+g*j+v*_t,a[2]=w*P+x*L+b*H+_*z,a[6]=w*U+x*q+b*X+_*it,a[10]=w*F+x*Q+b*nt+_*rt,a[14]=w*S+x*k+b*j+_*_t,a[3]=y*P+E*L+C*H+T*z,a[7]=y*U+E*q+C*X+T*it,a[11]=y*F+E*Q+C*nt+T*rt,a[15]=y*S+E*k+C*j+T*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],a=t[12],u=t[1],c=t[5],p=t[9],d=t[13],f=t[2],m=t[6],g=t[10],v=t[14],w=t[3],x=t[7],b=t[11],_=t[15];return w*(+a*p*m-r*d*m-a*c*g+n*d*g+r*c*v-n*p*v)+x*(+e*p*v-e*d*g+a*u*g-r*u*v+r*d*f-a*p*f)+b*(+e*d*m-e*c*v-a*u*m+n*u*v+a*c*f-n*d*f)+_*(-r*c*f-e*p*m+e*c*g+r*u*m-n*u*g+n*p*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],u=t[4],c=t[5],p=t[6],d=t[7],f=t[8],m=t[9],g=t[10],v=t[11],w=t[12],x=t[13],b=t[14],_=t[15],y=m*b*d-x*g*d+x*p*v-c*b*v-m*p*_+c*g*_,E=w*g*d-f*b*d-w*p*v+u*b*v+f*p*_-u*g*_,C=f*x*d-w*m*d+w*c*v-u*x*v-f*c*_+u*m*_,T=w*m*p-f*x*p-w*c*g+u*x*g+f*c*b-u*m*b,P=e*y+n*E+r*C+a*T;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/P;return t[0]=y*U,t[1]=(x*g*a-m*b*a-x*r*v+n*b*v+m*r*_-n*g*_)*U,t[2]=(c*b*a-x*p*a+x*r*d-n*b*d-c*r*_+n*p*_)*U,t[3]=(m*p*a-c*g*a-m*r*d+n*g*d+c*r*v-n*p*v)*U,t[4]=E*U,t[5]=(f*b*a-w*g*a+w*r*v-e*b*v-f*r*_+e*g*_)*U,t[6]=(w*p*a-u*b*a-w*r*d+e*b*d+u*r*_-e*p*_)*U,t[7]=(u*g*a-f*p*a+f*r*d-e*g*d-u*r*v+e*p*v)*U,t[8]=C*U,t[9]=(w*m*a-f*x*a-w*n*v+e*x*v+f*n*_-e*m*_)*U,t[10]=(u*x*a-w*c*a+w*n*d-e*x*d-u*n*_+e*c*_)*U,t[11]=(f*c*a-u*m*a-f*n*d+e*m*d+u*n*v-e*c*v)*U,t[12]=T*U,t[13]=(f*x*r-w*m*r+w*n*g-e*x*g-f*n*b+e*m*b)*U,t[14]=(w*c*r-u*x*r-w*n*p+e*x*p+u*n*b-e*c*b)*U,t[15]=(u*m*r-f*c*r+f*n*p-e*m*p-u*n*g+e*c*g)*U,this}scale(t){const e=this.elements,n=t.x,r=t.y,a=t.z;return e[0]*=n,e[4]*=r,e[8]*=a,e[1]*=n,e[5]*=r,e[9]*=a,e[2]*=n,e[6]*=r,e[10]*=a,e[3]*=n,e[7]*=r,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),a=1-n,u=t.x,c=t.y,p=t.z,d=a*u,f=a*c;return this.set(d*u+n,d*c-r*p,d*p+r*c,0,d*c+r*p,f*c+n,f*p-r*u,0,d*p-r*c,f*p+r*u,a*p*p+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,a,u){return this.set(1,n,a,0,t,1,u,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,a=e._x,u=e._y,c=e._z,p=e._w,d=a+a,f=u+u,m=c+c,g=a*d,v=a*f,w=a*m,x=u*f,b=u*m,_=c*m,y=p*d,E=p*f,C=p*m,T=n.x,P=n.y,U=n.z;return r[0]=(1-(x+_))*T,r[1]=(v+C)*T,r[2]=(w-E)*T,r[3]=0,r[4]=(v-C)*P,r[5]=(1-(g+_))*P,r[6]=(b+y)*P,r[7]=0,r[8]=(w+E)*U,r[9]=(b-y)*U,r[10]=(1-(g+x))*U,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let a=Zi.set(r[0],r[1],r[2]).length();const u=Zi.set(r[4],r[5],r[6]).length(),c=Zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),t.x=r[12],t.y=r[13],t.z=r[14],vn.copy(this);const d=1/a,f=1/u,m=1/c;return vn.elements[0]*=d,vn.elements[1]*=d,vn.elements[2]*=d,vn.elements[4]*=f,vn.elements[5]*=f,vn.elements[6]*=f,vn.elements[8]*=m,vn.elements[9]*=m,vn.elements[10]*=m,e.setFromRotationMatrix(vn),n.x=a,n.y=u,n.z=c,this}makePerspective(t,e,n,r,a,u){const c=this.elements,p=2*a/(e-t),d=2*a/(n-r),f=(e+t)/(e-t),m=(n+r)/(n-r),g=-(u+a)/(u-a),v=-2*u*a/(u-a);return c[0]=p,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,a,u){const c=this.elements,p=1/(e-t),d=1/(n-r),f=1/(u-a),m=(e+t)*p,g=(n+r)*d,v=(u+a)*f;return c[0]=2*p,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=-2*f,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Zi=new W,vn=new Le,Nh=new W(0,0,0),Oh=new W(1,1,1),ti=new W,Cs=new W,Je=new W,hl=new Le,dl=new Nr;class As{constructor(t=0,e=0,n=0,r=As.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,a=r[0],u=r[4],c=r[8],p=r[1],d=r[5],f=r[9],m=r[2],g=r[6],v=r[10];switch(e){case"XYZ":this._y=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,v),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(ze(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,v),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,a));break;case"ZYX":this._y=Math.asin(-ze(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(p,a)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(ze(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-f,d),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-f,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dl.setFromEuler(this),this.setFromQuaternion(dl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}As.DEFAULT_ORDER="XYZ";class pl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bh=0;const fl=new W,Ji=new Nr,On=new Le,Ps=new W,Vr=new W,kh=new W,Vh=new Nr,ml=new W(1,0,0),_l=new W(0,1,0),gl=new W(0,0,1),zh={type:"added"},vl={type:"removed"};class He extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new W,e=new As,n=new Nr,r=new W(1,1,1);function a(){n.setFromEuler(e,!1)}function u(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Le},normalMatrix:{value:new Wt}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(ml,t)}rotateY(t){return this.rotateOnAxis(_l,t)}rotateZ(t){return this.rotateOnAxis(gl,t)}translateOnAxis(t,e){return fl.copy(t).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ml,t)}translateY(t){return this.translateOnAxis(_l,t)}translateZ(t){return this.translateOnAxis(gl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ps.copy(t):Ps.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Vr,Ps,this.up):On.lookAt(Ps,Vr,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(On),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(zh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(vl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const u=this.children[n].getObjectByProperty(t,e);if(u!==void 0)return u}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectsByProperty(t,e);u.length>0&&(n=n.concat(u))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,t,kh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,Vh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const a=e[n];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let a=0,u=r.length;a<u;a++){const c=r[a];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(c,p){return c[p.uuid]===void 0&&(c[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const p=c.shapes;if(Array.isArray(p))for(let d=0,f=p.length;d<f;d++){const m=p[d];a(t.shapes,m)}else a(t.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let p=0,d=this.material.length;p<d;p++)c.push(a(t.materials,this.material[p]));r.material=c}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const p=this.animations[c];r.animations.push(a(t.animations,p))}}if(e){const c=u(t.geometries),p=u(t.materials),d=u(t.textures),f=u(t.images),m=u(t.shapes),g=u(t.skeletons),v=u(t.animations),w=u(t.nodes);c.length>0&&(n.geometries=c),p.length>0&&(n.materials=p),d.length>0&&(n.textures=d),f.length>0&&(n.images=f),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),w.length>0&&(n.nodes=w)}return n.object=r,n;function u(c){const p=[];for(const d in c){const f=c[d];delete f.metadata,p.push(f)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}He.DEFAULT_UP=new W(0,1,0),He.DEFAULT_MATRIX_AUTO_UPDATE=!0,He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new W,Bn=new W,Ua=new W,kn=new W,Qi=new W,tr=new W,xl=new W,Ia=new W,Fa=new W,Na=new W;let Rs=!1;class bn{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),xn.subVectors(t,e),r.cross(xn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(t,e,n,r,a){xn.subVectors(r,e),Bn.subVectors(n,e),Ua.subVectors(t,e);const u=xn.dot(xn),c=xn.dot(Bn),p=xn.dot(Ua),d=Bn.dot(Bn),f=Bn.dot(Ua),m=u*d-c*c;if(m===0)return a.set(-2,-1,-1);const g=1/m,v=(d*p-c*f)*g,w=(u*f-c*p)*g;return a.set(1-v-w,w,v)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,kn),kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getUV(t,e,n,r,a,u,c,p){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),this.getInterpolation(t,e,n,r,a,u,c,p)}static getInterpolation(t,e,n,r,a,u,c,p){return this.getBarycoord(t,e,n,r,kn),p.setScalar(0),p.addScaledVector(a,kn.x),p.addScaledVector(u,kn.y),p.addScaledVector(c,kn.z),p}static isFrontFacing(t,e,n,r){return xn.subVectors(n,e),Bn.subVectors(t,e),xn.cross(Bn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),xn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,r,a){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),bn.getInterpolation(t,this.a,this.b,this.c,e,n,r,a)}getInterpolation(t,e,n,r,a){return bn.getInterpolation(t,this.a,this.b,this.c,e,n,r,a)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,a=this.c;let u,c;Qi.subVectors(r,n),tr.subVectors(a,n),Ia.subVectors(t,n);const p=Qi.dot(Ia),d=tr.dot(Ia);if(p<=0&&d<=0)return e.copy(n);Fa.subVectors(t,r);const f=Qi.dot(Fa),m=tr.dot(Fa);if(f>=0&&m<=f)return e.copy(r);const g=p*m-f*d;if(g<=0&&p>=0&&f<=0)return u=p/(p-f),e.copy(n).addScaledVector(Qi,u);Na.subVectors(t,a);const v=Qi.dot(Na),w=tr.dot(Na);if(w>=0&&v<=w)return e.copy(a);const x=v*d-p*w;if(x<=0&&d>=0&&w<=0)return c=d/(d-w),e.copy(n).addScaledVector(tr,c);const b=f*w-v*m;if(b<=0&&m-f>=0&&v-w>=0)return xl.subVectors(a,r),c=(m-f)/(m-f+(v-w)),e.copy(r).addScaledVector(xl,c);const _=1/(b+x+g);return u=x*_,c=g*_,e.copy(n).addScaledVector(Qi,u).addScaledVector(tr,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Gh=0;class zr extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const u=[];for(const c in a){const p=a[c];delete p.metadata,u.push(p)}return u}if(e){const a=r(t.textures),u=r(t.images);a.length>0&&(n.textures=a),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function Oa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ft){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,gn.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=gn.workingColorSpace){return this.r=t,this.g=e,this.b=n,gn.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=gn.workingColorSpace){if(t=Eh(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,u=2*n-a;this.r=Oa(u,a,t+1/3),this.g=Oa(u,a,t),this.b=Oa(u,a,t-1/3)}return gn.toWorkingColorSpace(this,r),this}setStyle(t,e=Ft){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const u=r[1],c=r[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=r[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(u===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ft){const n=bl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=Ea(t.r),this.g=Ea(t.g),this.b=Ea(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ft){return gn.fromWorkingColorSpace(Fe.copy(this),t),Math.round(ze(Fe.r*255,0,255))*65536+Math.round(ze(Fe.g*255,0,255))*256+Math.round(ze(Fe.b*255,0,255))}getHexString(t=Ft){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=gn.workingColorSpace){gn.fromWorkingColorSpace(Fe.copy(this),e);const n=Fe.r,r=Fe.g,a=Fe.b,u=Math.max(n,r,a),c=Math.min(n,r,a);let p,d;const f=(c+u)/2;if(c===u)p=0,d=0;else{const m=u-c;switch(d=f<=.5?m/(u+c):m/(2-u-c),u){case n:p=(r-a)/m+(r<a?6:0);break;case r:p=(a-n)/m+2;break;case a:p=(n-r)/m+4;break}p/=6}return t.h=p,t.s=d,t.l=f,t}getRGB(t,e=gn.workingColorSpace){return gn.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Ft){gn.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,r=Fe.b;return t!==Ft?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Mn),Mn.h+=t,Mn.s+=e,Mn.l+=n,this.setHSL(Mn.h,Mn.s,Mn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mn),t.getHSL(Ls);const n=wa(Mn.h,Ls.h,e),r=wa(Mn.s,Ls.s,e),a=wa(Mn.l,Ls.l,e);return this.setHSL(n,r,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*r,this.g=a[1]*e+a[4]*n+a[7]*r,this.b=a[2]*e+a[5]*n+a[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Jt;Jt.NAMES=bl;class Ml extends zr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new W,Ds=new te;class Sn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ds.fromBufferAttribute(this,e),Ds.applyMatrix3(t),this.setXY(e,Ds.x,Ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ws(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ws(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ws(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ws(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,a){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),r=Ze(r,this.array),a=Ze(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class wl extends Sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Sl extends Sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class En extends Sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hh=0;const an=new Le,Ba=new He,er=new W,Qe=new Or,Gr=new Or,ye=new W;class ei extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sl(t)?Sl:wl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Wt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return Ba.lookAt(t),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const a=t[n];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new En(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const a=e[n];Qe.setFromBufferAttribute(a),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let a=0,u=e.length;a<u;a++){const c=e[a];Gr.setFromBufferAttribute(c),this.morphTargetsRelative?(ye.addVectors(Qe.min,Gr.min),Qe.expandByPoint(ye),ye.addVectors(Qe.max,Gr.max),Qe.expandByPoint(ye)):(Qe.expandByPoint(Gr.min),Qe.expandByPoint(Gr.max))}Qe.getCenter(n);let r=0;for(let a=0,u=t.count;a<u;a++)ye.fromBufferAttribute(t,a),r=Math.max(r,n.distanceToSquared(ye));if(e)for(let a=0,u=e.length;a<u;a++){const c=e[a],p=this.morphTargetsRelative;for(let d=0,f=c.count;d<f;d++)ye.fromBufferAttribute(c,d),p&&(er.fromBufferAttribute(t,d),ye.add(er)),r=Math.max(r,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,a=e.normal.array,u=e.uv.array,c=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*c),4));const p=this.getAttribute("tangent").array,d=[],f=[];for(let L=0;L<c;L++)d[L]=new W,f[L]=new W;const m=new W,g=new W,v=new W,w=new te,x=new te,b=new te,_=new W,y=new W;function E(L,q,Q){m.fromArray(r,L*3),g.fromArray(r,q*3),v.fromArray(r,Q*3),w.fromArray(u,L*2),x.fromArray(u,q*2),b.fromArray(u,Q*2),g.sub(m),v.sub(m),x.sub(w),b.sub(w);const k=1/(x.x*b.y-b.x*x.y);!isFinite(k)||(_.copy(g).multiplyScalar(b.y).addScaledVector(v,-x.y).multiplyScalar(k),y.copy(v).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(k),d[L].add(_),d[q].add(_),d[Q].add(_),f[L].add(y),f[q].add(y),f[Q].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:n.length}]);for(let L=0,q=C.length;L<q;++L){const Q=C[L],k=Q.start,H=Q.count;for(let X=k,nt=k+H;X<nt;X+=3)E(n[X+0],n[X+1],n[X+2])}const T=new W,P=new W,U=new W,F=new W;function S(L){U.fromArray(a,L*3),F.copy(U);const q=d[L];T.copy(q),T.sub(U.multiplyScalar(U.dot(q))).normalize(),P.crossVectors(F,q);const k=P.dot(f[L])<0?-1:1;p[L*4]=T.x,p[L*4+1]=T.y,p[L*4+2]=T.z,p[L*4+3]=k}for(let L=0,q=C.length;L<q;++L){const Q=C[L],k=Q.start,H=Q.count;for(let X=k,nt=k+H;X<nt;X+=3)S(n[X+0]),S(n[X+1]),S(n[X+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const r=new W,a=new W,u=new W,c=new W,p=new W,d=new W,f=new W,m=new W;if(t)for(let g=0,v=t.count;g<v;g+=3){const w=t.getX(g+0),x=t.getX(g+1),b=t.getX(g+2);r.fromBufferAttribute(e,w),a.fromBufferAttribute(e,x),u.fromBufferAttribute(e,b),f.subVectors(u,a),m.subVectors(r,a),f.cross(m),c.fromBufferAttribute(n,w),p.fromBufferAttribute(n,x),d.fromBufferAttribute(n,b),c.add(f),p.add(f),d.add(f),n.setXYZ(w,c.x,c.y,c.z),n.setXYZ(x,p.x,p.y,p.z),n.setXYZ(b,d.x,d.y,d.z)}else for(let g=0,v=e.count;g<v;g+=3)r.fromBufferAttribute(e,g+0),a.fromBufferAttribute(e,g+1),u.fromBufferAttribute(e,g+2),f.subVectors(u,a),m.subVectors(r,a),f.cross(m),n.setXYZ(g+0,f.x,f.y,f.z),n.setXYZ(g+1,f.x,f.y,f.z),n.setXYZ(g+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(c,p){const d=c.array,f=c.itemSize,m=c.normalized,g=new d.constructor(p.length*f);let v=0,w=0;for(let x=0,b=p.length;x<b;x++){c.isInterleavedBufferAttribute?v=p[x]*c.data.stride+c.offset:v=p[x]*f;for(let _=0;_<f;_++)g[w++]=d[v++]}return new Sn(g,f,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ei,n=this.index.array,r=this.attributes;for(const c in r){const p=r[c],d=t(p,n);e.setAttribute(c,d)}const a=this.morphAttributes;for(const c in a){const p=[],d=a[c];for(let f=0,m=d.length;f<m;f++){const g=d[f],v=t(g,n);p.push(v)}e.morphAttributes[c]=p}e.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,p=u.length;c<p;c++){const d=u[c];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const p in n){const d=n[p];t.data.attributes[p]=d.toJSON(t.data)}const r={};let a=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],f=[];for(let m=0,g=d.length;m<g;m++){const v=d[m];f.push(v.toJSON(t.data))}f.length>0&&(r[p]=f,a=!0)}a&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const d in r){const f=r[d];this.setAttribute(d,f.clone(e))}const a=t.morphAttributes;for(const d in a){const f=[],m=a[d];for(let g=0,v=m.length;g<v;g++)f.push(m[g].clone(e));this.morphAttributes[d]=f}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,f=u.length;d<f;d++){const m=u[d];this.addGroup(m.start,m.count,m.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const El=new Le,yn=new Fh,Us=new Pa,yl=new W,nr=new W,ir=new W,rr=new W,ka=new W,Is=new W,Fs=new te,Ns=new te,Os=new te,Tl=new W,Cl=new W,Al=new W,Bs=new W,ks=new W;class Vn extends He{constructor(t=new ei,e=new Ml){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=r.length;a<u;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,u=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const c=this.morphTargetInfluences;if(a&&c){Is.set(0,0,0);for(let p=0,d=a.length;p<d;p++){const f=c[p],m=a[p];f!==0&&(ka.fromBufferAttribute(m,t),u?Is.addScaledVector(ka,f):Is.addScaledVector(ka.sub(e),f))}e.add(Is)}return e}raycast(t,e){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(a),yn.copy(t.ray).recast(t.near),!(Us.containsPoint(yn.origin)===!1&&(yn.intersectSphere(Us,yl)===null||yn.origin.distanceToSquared(yl)>(t.far-t.near)**2))&&(El.copy(a).invert(),yn.copy(t.ray).applyMatrix4(El),!(n.boundingBox!==null&&yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e)))}_computeIntersections(t,e){let n;const r=this.geometry,a=this.material,u=r.index,c=r.attributes.position,p=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,m=r.groups,g=r.drawRange;if(u!==null)if(Array.isArray(a))for(let v=0,w=m.length;v<w;v++){const x=m[v],b=a[x.materialIndex],_=Math.max(x.start,g.start),y=Math.min(u.count,Math.min(x.start+x.count,g.start+g.count));for(let E=_,C=y;E<C;E+=3){const T=u.getX(E),P=u.getX(E+1),U=u.getX(E+2);n=Vs(this,b,t,yn,p,d,f,T,P,U),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=x.materialIndex,e.push(n))}}else{const v=Math.max(0,g.start),w=Math.min(u.count,g.start+g.count);for(let x=v,b=w;x<b;x+=3){const _=u.getX(x),y=u.getX(x+1),E=u.getX(x+2);n=Vs(this,a,t,yn,p,d,f,_,y,E),n&&(n.faceIndex=Math.floor(x/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,w=m.length;v<w;v++){const x=m[v],b=a[x.materialIndex],_=Math.max(x.start,g.start),y=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let E=_,C=y;E<C;E+=3){const T=E,P=E+1,U=E+2;n=Vs(this,b,t,yn,p,d,f,T,P,U),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=x.materialIndex,e.push(n))}}else{const v=Math.max(0,g.start),w=Math.min(c.count,g.start+g.count);for(let x=v,b=w;x<b;x+=3){const _=x,y=x+1,E=x+2;n=Vs(this,a,t,yn,p,d,f,_,y,E),n&&(n.faceIndex=Math.floor(x/3),e.push(n))}}}}function Wh(s,t,e,n,r,a,u,c){let p;if(t.side===1?p=n.intersectTriangle(u,a,r,!0,c):p=n.intersectTriangle(r,a,u,t.side===0,c),p===null)return null;ks.copy(c),ks.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(ks);return d<e.near||d>e.far?null:{distance:d,point:ks.clone(),object:s}}function Vs(s,t,e,n,r,a,u,c,p,d){s.getVertexPosition(c,nr),s.getVertexPosition(p,ir),s.getVertexPosition(d,rr);const f=Wh(s,t,e,n,nr,ir,rr,Bs);if(f){r&&(Fs.fromBufferAttribute(r,c),Ns.fromBufferAttribute(r,p),Os.fromBufferAttribute(r,d),f.uv=bn.getInterpolation(Bs,nr,ir,rr,Fs,Ns,Os,new te)),a&&(Fs.fromBufferAttribute(a,c),Ns.fromBufferAttribute(a,p),Os.fromBufferAttribute(a,d),f.uv1=bn.getInterpolation(Bs,nr,ir,rr,Fs,Ns,Os,new te),f.uv2=f.uv1),u&&(Tl.fromBufferAttribute(u,c),Cl.fromBufferAttribute(u,p),Al.fromBufferAttribute(u,d),f.normal=bn.getInterpolation(Bs,nr,ir,rr,Tl,Cl,Al,new W),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const m={a:c,b:p,c:d,normal:new W,materialIndex:0};bn.getNormal(nr,ir,rr,m.normal),f.face=m}return f}class Hr extends ei{constructor(t=1,e=1,n=1,r=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:a,depthSegments:u};const c=this;r=Math.floor(r),a=Math.floor(a),u=Math.floor(u);const p=[],d=[],f=[],m=[];let g=0,v=0;w("z","y","x",-1,-1,n,e,t,u,a,0),w("z","y","x",1,-1,n,e,-t,u,a,1),w("x","z","y",1,1,t,n,e,r,u,2),w("x","z","y",1,-1,t,n,-e,r,u,3),w("x","y","z",1,-1,t,e,n,r,a,4),w("x","y","z",-1,-1,t,e,-n,r,a,5),this.setIndex(p),this.setAttribute("position",new En(d,3)),this.setAttribute("normal",new En(f,3)),this.setAttribute("uv",new En(m,2));function w(x,b,_,y,E,C,T,P,U,F,S){const L=C/U,q=T/F,Q=C/2,k=T/2,H=P/2,X=U+1,nt=F+1;let j=0,z=0;const it=new W;for(let rt=0;rt<nt;rt++){const _t=rt*q-k;for(let ut=0;ut<X;ut++){const K=ut*L-Q;it[x]=K*y,it[b]=_t*E,it[_]=H,d.push(it.x,it.y,it.z),it[x]=0,it[b]=0,it[_]=P>0?1:-1,f.push(it.x,it.y,it.z),m.push(ut/U),m.push(1-rt/F),j+=1}}for(let rt=0;rt<F;rt++)for(let _t=0;_t<U;_t++){const ut=g+_t+X*rt,K=g+_t+X*(rt+1),Y=g+(_t+1)+X*(rt+1),lt=g+(_t+1)+X*rt;p.push(ut,K,lt),p.push(K,Y,lt),z+=6}c.addGroup(v,z,S),v+=z,g+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function sr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const r=s[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ve(s){const t={};for(let e=0;e<s.length;e++){const n=sr(s[e]);for(const r in n)t[r]=n[r]}return t}function Xh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Pl(s){return s.getRenderTarget()===null?s.outputColorSpace:wn}const qh={clone:sr,merge:Ve};var jh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends zr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jh,this.fragmentShader=Kh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sr(t.uniforms),this.uniformsGroups=Xh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?e.uniforms[r]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?e.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?e.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?e.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?e.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?e.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?e.uniforms[r]={type:"m4",value:u.toArray()}:e.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Rl extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class on extends Rl{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ma*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ma*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,r,a,u){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ba*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,a=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;a+=u.offsetX*r/p,e-=u.offsetY*n/d,r*=u.width/p,n*=u.height/d}const c=this.filmOffset;c!==0&&(a+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ar=-90,or=1;class Yh extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new on(ar,or,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const a=new on(ar,or,t,e);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(-1,0,0),this.add(a);const u=new on(ar,or,t,e);u.layers=this.layers,u.up.set(0,0,-1),u.lookAt(0,1,0),this.add(u);const c=new on(ar,or,t,e);c.layers=this.layers,c.up.set(0,0,1),c.lookAt(0,-1,0),this.add(c);const p=new on(ar,or,t,e);p.layers=this.layers,p.up.set(0,1,0),p.lookAt(0,0,1),this.add(p);const d=new on(ar,or,t,e);d.layers=this.layers,d.up.set(0,1,0),d.lookAt(0,0,-1),this.add(d)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,a,u,c,p,d]=this.children,f=t.getRenderTarget(),m=t.toneMapping,g=t.xr.enabled;t.toneMapping=0,t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,r),t.setRenderTarget(n,1),t.render(e,a),t.setRenderTarget(n,2),t.render(e,u),t.setRenderTarget(n,3),t.render(e,c),t.setRenderTarget(n,4),t.render(e,p),n.texture.generateMipmaps=v,t.setRenderTarget(n,5),t.render(e,d),t.setRenderTarget(f),t.toneMapping=m,t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Va extends Ge{constructor(t,e,n,r,a,u,c,p,d,f){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,r,a,u,c,p,d,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $h extends Mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(Fr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===3001?Ft:bi),this.texture=new Va(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Hr(5,5,5),a=new Ei({name:"CubemapFromEquirect",uniforms:sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=e;const u=new Vn(r,a),c=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new Yh(1,10,this).update(t,u),e.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(t,e,n,r){const a=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(e,n,r);t.setRenderTarget(a)}}const za=new W,Zh=new W,Jh=new Wt;class yi{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=za.subVectors(n,e).cross(Zh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(za),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Jh.getNormalMatrix(t),r=this.coplanarPoint(za).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Pa,zs=new W;class Ll{constructor(t=new yi,e=new yi,n=new yi,r=new yi,a=new yi,u=new yi){this.planes=[t,e,n,r,a,u]}set(t,e,n,r,a,u){const c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(u),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,r=n[0],a=n[1],u=n[2],c=n[3],p=n[4],d=n[5],f=n[6],m=n[7],g=n[8],v=n[9],w=n[10],x=n[11],b=n[12],_=n[13],y=n[14],E=n[15];return e[0].setComponents(c-r,m-p,x-g,E-b).normalize(),e[1].setComponents(c+r,m+p,x+g,E+b).normalize(),e[2].setComponents(c+a,m+d,x+v,E+_).normalize(),e[3].setComponents(c-a,m-d,x-v,E-_).normalize(),e[4].setComponents(c-u,m-f,x-w,E-y).normalize(),e[5].setComponents(c+u,m+f,x+w,E+y).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(zs.x=r.normal.x>0?t.max.x:t.min.x,zs.y=r.normal.y>0?t.max.y:t.min.y,zs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dl(){let s=null,t=!1,e=null,n=null;function r(a,u){e(a,u),n=s.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(r),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function Qh(s,t){const e=t.isWebGL2,n=new WeakMap;function r(d,f){const m=d.array,g=d.usage,v=s.createBuffer();s.bindBuffer(f,v),s.bufferData(f,m,g),d.onUploadCallback();let w;if(m instanceof Float32Array)w=s.FLOAT;else if(m instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(e)w=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)w=s.SHORT;else if(m instanceof Uint32Array)w=s.UNSIGNED_INT;else if(m instanceof Int32Array)w=s.INT;else if(m instanceof Int8Array)w=s.BYTE;else if(m instanceof Uint8Array)w=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)w=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:w,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version}}function a(d,f,m){const g=f.array,v=f.updateRange;s.bindBuffer(m,d),v.count===-1?s.bufferSubData(m,0,g):(e?s.bufferSubData(m,v.offset*g.BYTES_PER_ELEMENT,g,v.offset,v.count):s.bufferSubData(m,v.offset*g.BYTES_PER_ELEMENT,g.subarray(v.offset,v.offset+v.count)),v.count=-1),f.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=n.get(d);f&&(s.deleteBuffer(f.buffer),n.delete(d))}function p(d,f){if(d.isGLBufferAttribute){const g=n.get(d);(!g||g.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const m=n.get(d);m===void 0?n.set(d,r(d,f)):m.version<d.version&&(a(m.buffer,d,f),m.version=d.version)}return{get:u,remove:c,update:p}}class Ga extends ei{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const a=t/2,u=e/2,c=Math.floor(n),p=Math.floor(r),d=c+1,f=p+1,m=t/c,g=e/p,v=[],w=[],x=[],b=[];for(let _=0;_<f;_++){const y=_*g-u;for(let E=0;E<d;E++){const C=E*m-a;w.push(C,-y,0),x.push(0,0,1),b.push(E/c),b.push(1-_/p)}}for(let _=0;_<p;_++)for(let y=0;y<c;y++){const E=y+d*_,C=y+d*(_+1),T=y+1+d*(_+1),P=y+1+d*_;v.push(E,C,P),v.push(C,T,P)}this.setIndex(v),this.setAttribute("position",new En(w,3)),this.setAttribute("normal",new En(x,3)),this.setAttribute("uv",new En(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ga(t.width,t.height,t.widthSegments,t.heightSegments)}}var td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ad="vec3 transformed = vec3( position );",od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ld=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ud=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Md=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Td="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Od=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Yd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$d=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Qd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,np=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ip=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ap=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,hp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,fp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ep=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Up=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ip=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Np=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Wp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Xp=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qp=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jp=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kt={alphamap_fragment:td,alphamap_pars_fragment:ed,alphatest_fragment:nd,alphatest_pars_fragment:id,aomap_fragment:rd,aomap_pars_fragment:sd,begin_vertex:ad,beginnormal_vertex:od,bsdfs:ld,iridescence_fragment:cd,bumpmap_pars_fragment:ud,clipping_planes_fragment:hd,clipping_planes_pars_fragment:dd,clipping_planes_pars_vertex:pd,clipping_planes_vertex:fd,color_fragment:md,color_pars_fragment:_d,color_pars_vertex:gd,color_vertex:vd,common:xd,cube_uv_reflection_fragment:bd,defaultnormal_vertex:Md,displacementmap_pars_vertex:wd,displacementmap_vertex:Sd,emissivemap_fragment:Ed,emissivemap_pars_fragment:yd,encodings_fragment:Td,encodings_pars_fragment:Cd,envmap_fragment:Ad,envmap_common_pars_fragment:Pd,envmap_pars_fragment:Rd,envmap_pars_vertex:Ld,envmap_physical_pars_fragment:Hd,envmap_vertex:Dd,fog_vertex:Ud,fog_pars_vertex:Id,fog_fragment:Fd,fog_pars_fragment:Nd,gradientmap_pars_fragment:Od,lightmap_fragment:Bd,lightmap_pars_fragment:kd,lights_lambert_fragment:Vd,lights_lambert_pars_fragment:zd,lights_pars_begin:Gd,lights_toon_fragment:Wd,lights_toon_pars_fragment:Xd,lights_phong_fragment:qd,lights_phong_pars_fragment:jd,lights_physical_fragment:Kd,lights_physical_pars_fragment:Yd,lights_fragment_begin:$d,lights_fragment_maps:Zd,lights_fragment_end:Jd,logdepthbuf_fragment:Qd,logdepthbuf_pars_fragment:tp,logdepthbuf_pars_vertex:ep,logdepthbuf_vertex:np,map_fragment:ip,map_pars_fragment:rp,map_particle_fragment:sp,map_particle_pars_fragment:ap,metalnessmap_fragment:op,metalnessmap_pars_fragment:lp,morphcolor_vertex:cp,morphnormal_vertex:up,morphtarget_pars_vertex:hp,morphtarget_vertex:dp,normal_fragment_begin:pp,normal_fragment_maps:fp,normal_pars_fragment:mp,normal_pars_vertex:_p,normal_vertex:gp,normalmap_pars_fragment:vp,clearcoat_normal_fragment_begin:xp,clearcoat_normal_fragment_maps:bp,clearcoat_pars_fragment:Mp,iridescence_pars_fragment:wp,output_fragment:Sp,packing:Ep,premultiplied_alpha_fragment:yp,project_vertex:Tp,dithering_fragment:Cp,dithering_pars_fragment:Ap,roughnessmap_fragment:Pp,roughnessmap_pars_fragment:Rp,shadowmap_pars_fragment:Lp,shadowmap_pars_vertex:Dp,shadowmap_vertex:Up,shadowmask_pars_fragment:Ip,skinbase_vertex:Fp,skinning_pars_vertex:Np,skinning_vertex:Op,skinnormal_vertex:Bp,specularmap_fragment:kp,specularmap_pars_fragment:Vp,tonemapping_fragment:zp,tonemapping_pars_fragment:Gp,transmission_fragment:Hp,transmission_pars_fragment:Wp,uv_pars_fragment:Xp,uv_pars_vertex:qp,uv_vertex:jp,worldpos_vertex:Kp,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},dt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaTest:{value:0}}},Tn={basic:{uniforms:Ve([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Ve([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Ve([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Ve([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Ve([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Ve([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Ve([dt.points,dt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Ve([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Ve([dt.common,dt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Ve([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Ve([dt.sprite,dt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Ve([dt.common,dt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Ve([dt.lights,dt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Tn.physical={uniforms:Ve([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Gs={r:0,b:0,g:0};function Yp(s,t,e,n,r,a,u){const c=new Jt(0);let p=a===!0?0:1,d,f,m=null,g=0,v=null;function w(b,_){let y=!1,E=_.isScene===!0?_.background:null;switch(E&&E.isTexture&&(E=(_.backgroundBlurriness>0?e:t).get(E)),E===null?x(c,p):E&&E.isColor&&(x(E,1),y=!0),s.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,u),y=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,u),y=!0;break}(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),E&&(E.isCubeTexture||E.mapping===306)?(f===void 0&&(f=new Vn(new Hr(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:sr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,U,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=E,f.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.toneMapped=E.colorSpace!==Ft,(m!==E||g!==E.version||v!==s.toneMapping)&&(f.material.needsUpdate=!0,m=E,g=E.version,v=s.toneMapping),f.layers.enableAll(),b.unshift(f,f.geometry,f.material,0,0,null)):E&&E.isTexture&&(d===void 0&&(d=new Vn(new Ga(2,2),new Ei({name:"BackgroundMaterial",uniforms:sr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=E,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.toneMapped=E.colorSpace!==Ft,E.matrixAutoUpdate===!0&&E.updateMatrix(),d.material.uniforms.uvTransform.value.copy(E.matrix),(m!==E||g!==E.version||v!==s.toneMapping)&&(d.material.needsUpdate=!0,m=E,g=E.version,v=s.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null))}function x(b,_){b.getRGB(Gs,Pl(s)),n.buffers.color.setClear(Gs.r,Gs.g,Gs.b,_,u)}return{getClearColor:function(){return c},setClearColor:function(b,_=1){c.set(b),p=_,x(c,p)},getClearAlpha:function(){return p},setClearAlpha:function(b){p=b,x(c,p)},render:w}}function $p(s,t,e,n){const r=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:t.get("OES_vertex_array_object"),u=n.isWebGL2||a!==null,c={},p=b(null);let d=p,f=!1;function m(H,X,nt,j,z){let it=!1;if(u){const rt=x(j,nt,X);d!==rt&&(d=rt,v(d.object)),it=_(H,j,nt,z),it&&y(H,j,nt,z)}else{const rt=X.wireframe===!0;(d.geometry!==j.id||d.program!==nt.id||d.wireframe!==rt)&&(d.geometry=j.id,d.program=nt.id,d.wireframe=rt,it=!0)}z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(it||f)&&(f=!1,F(H,X,nt,j),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function g(){return n.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function v(H){return n.isWebGL2?s.bindVertexArray(H):a.bindVertexArrayOES(H)}function w(H){return n.isWebGL2?s.deleteVertexArray(H):a.deleteVertexArrayOES(H)}function x(H,X,nt){const j=nt.wireframe===!0;let z=c[H.id];z===void 0&&(z={},c[H.id]=z);let it=z[X.id];it===void 0&&(it={},z[X.id]=it);let rt=it[j];return rt===void 0&&(rt=b(g()),it[j]=rt),rt}function b(H){const X=[],nt=[],j=[];for(let z=0;z<r;z++)X[z]=0,nt[z]=0,j[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:nt,attributeDivisors:j,object:H,attributes:{},index:null}}function _(H,X,nt,j){const z=d.attributes,it=X.attributes;let rt=0;const _t=nt.getAttributes();for(const ut in _t)if(_t[ut].location>=0){const Y=z[ut];let lt=it[ut];if(lt===void 0&&(ut==="instanceMatrix"&&H.instanceMatrix&&(lt=H.instanceMatrix),ut==="instanceColor"&&H.instanceColor&&(lt=H.instanceColor)),Y===void 0||Y.attribute!==lt||lt&&Y.data!==lt.data)return!0;rt++}return d.attributesNum!==rt||d.index!==j}function y(H,X,nt,j){const z={},it=X.attributes;let rt=0;const _t=nt.getAttributes();for(const ut in _t)if(_t[ut].location>=0){let Y=it[ut];Y===void 0&&(ut==="instanceMatrix"&&H.instanceMatrix&&(Y=H.instanceMatrix),ut==="instanceColor"&&H.instanceColor&&(Y=H.instanceColor));const lt={};lt.attribute=Y,Y&&Y.data&&(lt.data=Y.data),z[ut]=lt,rt++}d.attributes=z,d.attributesNum=rt,d.index=j}function E(){const H=d.newAttributes;for(let X=0,nt=H.length;X<nt;X++)H[X]=0}function C(H){T(H,0)}function T(H,X){const nt=d.newAttributes,j=d.enabledAttributes,z=d.attributeDivisors;nt[H]=1,j[H]===0&&(s.enableVertexAttribArray(H),j[H]=1),z[H]!==X&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,X),z[H]=X)}function P(){const H=d.newAttributes,X=d.enabledAttributes;for(let nt=0,j=X.length;nt<j;nt++)X[nt]!==H[nt]&&(s.disableVertexAttribArray(nt),X[nt]=0)}function U(H,X,nt,j,z,it){n.isWebGL2===!0&&(nt===s.INT||nt===s.UNSIGNED_INT)?s.vertexAttribIPointer(H,X,nt,z,it):s.vertexAttribPointer(H,X,nt,j,z,it)}function F(H,X,nt,j){if(n.isWebGL2===!1&&(H.isInstancedMesh||j.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;E();const z=j.attributes,it=nt.getAttributes(),rt=X.defaultAttributeValues;for(const _t in it){const ut=it[_t];if(ut.location>=0){let K=z[_t];if(K===void 0&&(_t==="instanceMatrix"&&H.instanceMatrix&&(K=H.instanceMatrix),_t==="instanceColor"&&H.instanceColor&&(K=H.instanceColor)),K!==void 0){const Y=K.normalized,lt=K.itemSize,ft=e.get(K);if(ft===void 0)continue;const O=ft.buffer,Lt=ft.type,Dt=ft.bytesPerElement;if(K.isInterleavedBufferAttribute){const ht=K.data,Mt=ht.stride,$t=K.offset;if(ht.isInstancedInterleavedBuffer){for(let St=0;St<ut.locationSize;St++)T(ut.location+St,ht.meshPerAttribute);H.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let St=0;St<ut.locationSize;St++)C(ut.location+St);s.bindBuffer(s.ARRAY_BUFFER,O);for(let St=0;St<ut.locationSize;St++)U(ut.location+St,lt/ut.locationSize,Lt,Y,Mt*Dt,($t+lt/ut.locationSize*St)*Dt)}else{if(K.isInstancedBufferAttribute){for(let ht=0;ht<ut.locationSize;ht++)T(ut.location+ht,K.meshPerAttribute);H.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ht=0;ht<ut.locationSize;ht++)C(ut.location+ht);s.bindBuffer(s.ARRAY_BUFFER,O);for(let ht=0;ht<ut.locationSize;ht++)U(ut.location+ht,lt/ut.locationSize,Lt,Y,lt*Dt,lt/ut.locationSize*ht*Dt)}}else if(rt!==void 0){const Y=rt[_t];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(ut.location,Y);break;case 3:s.vertexAttrib3fv(ut.location,Y);break;case 4:s.vertexAttrib4fv(ut.location,Y);break;default:s.vertexAttrib1fv(ut.location,Y)}}}}P()}function S(){Q();for(const H in c){const X=c[H];for(const nt in X){const j=X[nt];for(const z in j)w(j[z].object),delete j[z];delete X[nt]}delete c[H]}}function L(H){if(c[H.id]===void 0)return;const X=c[H.id];for(const nt in X){const j=X[nt];for(const z in j)w(j[z].object),delete j[z];delete X[nt]}delete c[H.id]}function q(H){for(const X in c){const nt=c[X];if(nt[H.id]===void 0)continue;const j=nt[H.id];for(const z in j)w(j[z].object),delete j[z];delete nt[H.id]}}function Q(){k(),f=!0,d!==p&&(d=p,v(d.object))}function k(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:m,reset:Q,resetDefaultState:k,dispose:S,releaseStatesOfGeometry:L,releaseStatesOfProgram:q,initAttributes:E,enableAttribute:C,disableUnusedAttributes:P}}function Zp(s,t,e,n){const r=n.isWebGL2;let a;function u(d){a=d}function c(d,f){s.drawArrays(a,d,f),e.update(f,a,1)}function p(d,f,m){if(m===0)return;let g,v;if(r)g=s,v="drawArraysInstanced";else if(g=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](a,d,f,m),e.update(f,a,m)}this.setMode=u,this.render=c,this.renderInstances=p}function Jp(s,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext";let c=e.precision!==void 0?e.precision:"highp";const p=a(c);p!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);const d=u||t.has("WEBGL_draw_buffers"),f=e.logarithmicDepthBuffer===!0,m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),w=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,C=u||t.has("OES_texture_float"),T=E&&C,P=u?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:u,drawBuffers:d,getMaxAnisotropy:r,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:w,maxAttributes:x,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:E,floatFragmentTextures:C,floatVertexTextures:T,maxSamples:P}}function Qp(s){const t=this;let e=null,n=0,r=!1,a=!1;const u=new yi,c=new Wt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const v=m.length!==0||g||n!==0||r;return r=g,n=m.length,v},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,g){e=f(m,g,0)},this.setState=function(m,g,v){const w=m.clippingPlanes,x=m.clipIntersection,b=m.clipShadows,_=s.get(m);if(!r||w===null||w.length===0||a&&!b)a?f(null):d();else{const y=a?0:n,E=y*4;let C=_.clippingState||null;p.value=C,C=f(w,g,E,v);for(let T=0;T!==E;++T)C[T]=e[T];_.clippingState=C,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function d(){p.value!==e&&(p.value=e,p.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(m,g,v,w){const x=m!==null?m.length:0;let b=null;if(x!==0){if(b=p.value,w!==!0||b===null){const _=v+x*4,y=g.matrixWorldInverse;c.getNormalMatrix(y),(b===null||b.length<_)&&(b=new Float32Array(_));for(let E=0,C=v;E!==x;++E,C+=4)u.copy(m[E]).applyMatrix4(y,c),u.normal.toArray(b,C),b[C+3]=u.constant}p.value=b,p.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,b}}function tf(s){let t=new WeakMap;function e(u,c){return c===303?u.mapping=301:c===304&&(u.mapping=302),u}function n(u){if(u&&u.isTexture&&u.isRenderTargetTexture===!1){const c=u.mapping;if(c===303||c===304)if(t.has(u)){const p=t.get(u).texture;return e(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const d=new $h(p.height/2);return d.fromEquirectangularTexture(s,u),t.set(u,d),u.addEventListener("dispose",r),e(d.texture,u.mapping)}else return null}}return u}function r(u){const c=u.target;c.removeEventListener("dispose",r);const p=t.get(c);p!==void 0&&(t.delete(c),p.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class ef extends Rl{constructor(t=-1,e=1,n=1,r=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-t,u=n+t,c=r+e,p=r-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,u=a+d*this.view.width,c-=f*this.view.offsetY,p=c-f*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,p,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const lr=4,Ul=[.125,.215,.35,.446,.526,.582],Ci=20,Ha=new ef,Il=new Jt;let Wa=null;const Ai=(1+Math.sqrt(5))/2,cr=1/Ai,Fl=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Ai,cr),new W(0,Ai,-cr),new W(cr,0,Ai),new W(-cr,0,Ai),new W(Ai,cr,0),new W(-Ai,cr,0)];class Nl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Wa=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,r,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wa),t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wa=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:wn,depthBuffer:!1},r=Ol(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ol(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nf(a)),this._blurMaterial=rf(a,t,e)}return r}_compileMaterial(t){const e=new Vn(this._lodPlanes[0],t);this._renderer.compile(e,Ha)}_sceneToCubeUV(t,e,n,r){const c=new on(90,1,e,n),p=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,m=f.autoClear,g=f.toneMapping;f.getClearColor(Il),f.toneMapping=0,f.autoClear=!1;const v=new Ml({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),w=new Vn(new Hr,v);let x=!1;const b=t.background;b?b.isColor&&(v.color.copy(b),t.background=null,x=!0):(v.color.copy(Il),x=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(c.up.set(0,p[_],0),c.lookAt(d[_],0,0)):y===1?(c.up.set(0,0,p[_]),c.lookAt(0,d[_],0)):(c.up.set(0,p[_],0),c.lookAt(0,0,d[_]));const E=this._cubeSize;Hs(r,y*E,_>2?E:0,E,E),f.setRenderTarget(r),x&&f.render(w,c),f.render(t,c)}w.geometry.dispose(),w.material.dispose(),f.toneMapping=g,f.autoClear=m,t.background=b}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===301||t.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bl());const a=r?this._cubemapMaterial:this._equirectMaterial,u=new Vn(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=t;const p=this._cubeSize;Hs(e,0,0,3*p,2*p),n.setRenderTarget(e),n.render(u,Ha)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),u=Fl[(r-1)%Fl.length];this._blur(t,r-1,r,a,u)}e.autoClear=n}_blur(t,e,n,r,a){const u=this._pingPongRenderTarget;this._halfBlur(t,u,e,n,r,"latitudinal",a),this._halfBlur(u,t,n,n,r,"longitudinal",a)}_halfBlur(t,e,n,r,a,u,c){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,m=new Vn(this._lodPlanes[r],d),g=d.uniforms,v=this._sizeLods[n]-1,w=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*Ci-1),x=a/w,b=isFinite(a)?1+Math.floor(f*x):Ci;b>Ci&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Ci}`);const _=[];let y=0;for(let U=0;U<Ci;++U){const F=U/x,S=Math.exp(-F*F/2);_.push(S),U===0?y+=S:U<b&&(y+=2*S)}for(let U=0;U<_.length;U++)_[U]=_[U]/y;g.envMap.value=t.texture,g.samples.value=b,g.weights.value=_,g.latitudinal.value=u==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:E}=this;g.dTheta.value=w,g.mipInt.value=E-n;const C=this._sizeLods[r],T=3*C*(r>E-lr?r-E+lr:0),P=4*(this._cubeSize-C);Hs(e,T,P,3*C,2*C),p.setRenderTarget(e),p.render(m,Ha)}}function nf(s){const t=[],e=[],n=[];let r=s;const a=s-lr+1+Ul.length;for(let u=0;u<a;u++){const c=Math.pow(2,r);e.push(c);let p=1/c;u>s-lr?p=Ul[u-s+lr-1]:u===0&&(p=0),n.push(p);const d=1/(c-2),f=-d,m=1+d,g=[f,f,m,f,m,m,f,f,m,m,f,m],v=6,w=6,x=3,b=2,_=1,y=new Float32Array(x*w*v),E=new Float32Array(b*w*v),C=new Float32Array(_*w*v);for(let P=0;P<v;P++){const U=P%3*2/3-1,F=P>2?0:-1,S=[U,F,0,U+2/3,F,0,U+2/3,F+1,0,U,F,0,U+2/3,F+1,0,U,F+1,0];y.set(S,x*w*P),E.set(g,b*w*P);const L=[P,P,P,P,P,P];C.set(L,_*w*P)}const T=new ei;T.setAttribute("position",new Sn(y,x)),T.setAttribute("uv",new Sn(E,b)),T.setAttribute("faceIndex",new Sn(C,_)),t.push(T),r>lr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ol(s,t,e){const n=new Mi(s,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(s,t,e,n,r){s.viewport.set(t,e,n,r),s.scissor.set(t,e,n,r)}function rf(s,t,e){const n=new Float32Array(Ci),r=new W(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Bl(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function kl(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sf(s){let t=new WeakMap,e=null;function n(c){if(c&&c.isTexture){const p=c.mapping,d=p===303||p===304,f=p===301||p===302;if(d||f)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let m=t.get(c);return e===null&&(e=new Nl(s)),m=d?e.fromEquirectangular(c,m):e.fromCubemap(c,m),t.set(c,m),m.texture}else{if(t.has(c))return t.get(c).texture;{const m=c.image;if(d&&m&&m.height>0||f&&m&&r(m)){e===null&&(e=new Nl(s));const g=d?e.fromEquirectangular(c):e.fromCubemap(c);return t.set(c,g),c.addEventListener("dispose",a),g.texture}else return null}}}return c}function r(c){let p=0;const d=6;for(let f=0;f<d;f++)c[f]!==void 0&&p++;return p===d}function a(c){const p=c.target;p.removeEventListener("dispose",a);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function u(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:u}}function af(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function of(s,t,e,n){const r={},a=new WeakMap;function u(m){const g=m.target;g.index!==null&&t.remove(g.index);for(const w in g.attributes)t.remove(g.attributes[w]);g.removeEventListener("dispose",u),delete r[g.id];const v=a.get(g);v&&(t.remove(v),a.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(m,g){return r[g.id]===!0||(g.addEventListener("dispose",u),r[g.id]=!0,e.memory.geometries++),g}function p(m){const g=m.attributes;for(const w in g)t.update(g[w],s.ARRAY_BUFFER);const v=m.morphAttributes;for(const w in v){const x=v[w];for(let b=0,_=x.length;b<_;b++)t.update(x[b],s.ARRAY_BUFFER)}}function d(m){const g=[],v=m.index,w=m.attributes.position;let x=0;if(v!==null){const y=v.array;x=v.version;for(let E=0,C=y.length;E<C;E+=3){const T=y[E+0],P=y[E+1],U=y[E+2];g.push(T,P,P,U,U,T)}}else{const y=w.array;x=w.version;for(let E=0,C=y.length/3-1;E<C;E+=3){const T=E+0,P=E+1,U=E+2;g.push(T,P,P,U,U,T)}}const b=new(sl(g)?Sl:wl)(g,1);b.version=x;const _=a.get(m);_&&t.remove(_),a.set(m,b)}function f(m){const g=a.get(m);if(g){const v=m.index;v!==null&&g.version<v.version&&d(m)}else d(m);return a.get(m)}return{get:c,update:p,getWireframeAttribute:f}}function lf(s,t,e,n){const r=n.isWebGL2;let a;function u(g){a=g}let c,p;function d(g){c=g.type,p=g.bytesPerElement}function f(g,v){s.drawElements(a,v,c,g*p),e.update(v,a,1)}function m(g,v,w){if(w===0)return;let x,b;if(r)x=s,b="drawElementsInstanced";else if(x=t.get("ANGLE_instanced_arrays"),b="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[b](a,v,c,g*p,w),e.update(v,a,w)}this.setMode=u,this.setIndex=d,this.render=f,this.renderInstances=m}function cf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,u,c){switch(e.calls++,u){case s.TRIANGLES:e.triangles+=c*(a/3);break;case s.LINES:e.lines+=c*(a/2);break;case s.LINE_STRIP:e.lines+=c*(a-1);break;case s.LINE_LOOP:e.lines+=c*a;break;case s.POINTS:e.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function uf(s,t){return s[0]-t[0]}function hf(s,t){return Math.abs(t[1])-Math.abs(s[1])}function df(s,t,e){const n={},r=new Float32Array(8),a=new WeakMap,u=new Re,c=[];for(let d=0;d<8;d++)c[d]=[d,0];function p(d,f,m){const g=d.morphTargetInfluences;if(t.isWebGL2===!0){const v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,w=v!==void 0?v.length:0;let x=a.get(f);if(x===void 0||x.count!==w){let H=function(){Q.dispose(),a.delete(f),f.removeEventListener("dispose",H)};x!==void 0&&x.texture.dispose();const y=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,C=f.morphAttributes.color!==void 0,T=f.morphAttributes.position||[],P=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let F=0;y===!0&&(F=1),E===!0&&(F=2),C===!0&&(F=3);let S=f.attributes.position.count*F,L=1;S>t.maxTextureSize&&(L=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const q=new Float32Array(S*L*4*w),Q=new cl(q,S,L,w);Q.type=1015,Q.needsUpdate=!0;const k=F*4;for(let X=0;X<w;X++){const nt=T[X],j=P[X],z=U[X],it=S*L*4*X;for(let rt=0;rt<nt.count;rt++){const _t=rt*k;y===!0&&(u.fromBufferAttribute(nt,rt),q[it+_t+0]=u.x,q[it+_t+1]=u.y,q[it+_t+2]=u.z,q[it+_t+3]=0),E===!0&&(u.fromBufferAttribute(j,rt),q[it+_t+4]=u.x,q[it+_t+5]=u.y,q[it+_t+6]=u.z,q[it+_t+7]=0),C===!0&&(u.fromBufferAttribute(z,rt),q[it+_t+8]=u.x,q[it+_t+9]=u.y,q[it+_t+10]=u.z,q[it+_t+11]=z.itemSize===4?u.w:1)}}x={count:w,texture:Q,size:new te(S,L)},a.set(f,x),f.addEventListener("dispose",H)}let b=0;for(let y=0;y<g.length;y++)b+=g[y];const _=f.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",_),m.getUniforms().setValue(s,"morphTargetInfluences",g),m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,e),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const v=g===void 0?0:g.length;let w=n[f.id];if(w===void 0||w.length!==v){w=[];for(let E=0;E<v;E++)w[E]=[E,0];n[f.id]=w}for(let E=0;E<v;E++){const C=w[E];C[0]=E,C[1]=g[E]}w.sort(hf);for(let E=0;E<8;E++)E<v&&w[E][1]?(c[E][0]=w[E][0],c[E][1]=w[E][1]):(c[E][0]=Number.MAX_SAFE_INTEGER,c[E][1]=0);c.sort(uf);const x=f.morphAttributes.position,b=f.morphAttributes.normal;let _=0;for(let E=0;E<8;E++){const C=c[E],T=C[0],P=C[1];T!==Number.MAX_SAFE_INTEGER&&P?(x&&f.getAttribute("morphTarget"+E)!==x[T]&&f.setAttribute("morphTarget"+E,x[T]),b&&f.getAttribute("morphNormal"+E)!==b[T]&&f.setAttribute("morphNormal"+E,b[T]),r[E]=P,_+=P):(x&&f.hasAttribute("morphTarget"+E)===!0&&f.deleteAttribute("morphTarget"+E),b&&f.hasAttribute("morphNormal"+E)===!0&&f.deleteAttribute("morphNormal"+E),r[E]=0)}const y=f.morphTargetsRelative?1:1-_;m.getUniforms().setValue(s,"morphTargetBaseInfluence",y),m.getUniforms().setValue(s,"morphTargetInfluences",r)}}return{update:p}}function pf(s,t,e,n){let r=new WeakMap;function a(p){const d=n.render.frame,f=p.geometry,m=t.get(p,f);return r.get(m)!==d&&(t.update(m),r.set(m,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",c)===!1&&p.addEventListener("dispose",c),e.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&e.update(p.instanceColor,s.ARRAY_BUFFER)),m}function u(){r=new WeakMap}function c(p){const d=p.target;d.removeEventListener("dispose",c),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:u}}const Vl=new Ge,zl=new cl,Gl=new Uh,Hl=new Va,Wl=[],Xl=[],ql=new Float32Array(16),jl=new Float32Array(9),Kl=new Float32Array(4);function ur(s,t,e){const n=s[0];if(n<=0||n>0)return s;const r=t*e;let a=Wl[r];if(a===void 0&&(a=new Float32Array(r),Wl[r]=a),t!==0){n.toArray(a,0);for(let u=1,c=0;u!==t;++u)c+=e,s[u].toArray(a,c)}return a}function be(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Me(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ws(s,t){let e=Xl[t];e===void 0&&(e=new Int32Array(t),Xl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ff(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2fv(this.addr,t),Me(e,t)}}function _f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;s.uniform3fv(this.addr,t),Me(e,t)}}function gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4fv(this.addr,t),Me(e,t)}}function vf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(be(e,n))return;Kl.set(n),s.uniformMatrix2fv(this.addr,!1,Kl),Me(e,n)}}function xf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(be(e,n))return;jl.set(n),s.uniformMatrix3fv(this.addr,!1,jl),Me(e,n)}}function bf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(be(e,n))return;ql.set(n),s.uniformMatrix4fv(this.addr,!1,ql),Me(e,n)}}function Mf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function wf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2iv(this.addr,t),Me(e,t)}}function Sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;s.uniform3iv(this.addr,t),Me(e,t)}}function Ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4iv(this.addr,t),Me(e,t)}}function yf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Tf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2uiv(this.addr,t),Me(e,t)}}function Cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;s.uniform3uiv(this.addr,t),Me(e,t)}}function Af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4uiv(this.addr,t),Me(e,t)}}function Pf(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTexture2D(t||Vl,r)}function Rf(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Gl,r)}function Lf(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Hl,r)}function Df(s,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||zl,r)}function Uf(s){switch(s){case 5126:return ff;case 35664:return mf;case 35665:return _f;case 35666:return gf;case 35674:return vf;case 35675:return xf;case 35676:return bf;case 5124:case 35670:return Mf;case 35667:case 35671:return wf;case 35668:case 35672:return Sf;case 35669:case 35673:return Ef;case 5125:return yf;case 36294:return Tf;case 36295:return Cf;case 36296:return Af;case 35678:case 36198:case 36298:case 36306:case 35682:return Pf;case 35679:case 36299:case 36307:return Rf;case 35680:case 36300:case 36308:case 36293:return Lf;case 36289:case 36303:case 36311:case 36292:return Df}}function If(s,t){s.uniform1fv(this.addr,t)}function Ff(s,t){const e=ur(t,this.size,2);s.uniform2fv(this.addr,e)}function Nf(s,t){const e=ur(t,this.size,3);s.uniform3fv(this.addr,e)}function Of(s,t){const e=ur(t,this.size,4);s.uniform4fv(this.addr,e)}function Bf(s,t){const e=ur(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function kf(s,t){const e=ur(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Vf(s,t){const e=ur(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function zf(s,t){s.uniform1iv(this.addr,t)}function Gf(s,t){s.uniform2iv(this.addr,t)}function Hf(s,t){s.uniform3iv(this.addr,t)}function Wf(s,t){s.uniform4iv(this.addr,t)}function Xf(s,t){s.uniform1uiv(this.addr,t)}function qf(s,t){s.uniform2uiv(this.addr,t)}function jf(s,t){s.uniform3uiv(this.addr,t)}function Kf(s,t){s.uniform4uiv(this.addr,t)}function Yf(s,t,e){const n=this.cache,r=t.length,a=Ws(e,r);be(n,a)||(s.uniform1iv(this.addr,a),Me(n,a));for(let u=0;u!==r;++u)e.setTexture2D(t[u]||Vl,a[u])}function $f(s,t,e){const n=this.cache,r=t.length,a=Ws(e,r);be(n,a)||(s.uniform1iv(this.addr,a),Me(n,a));for(let u=0;u!==r;++u)e.setTexture3D(t[u]||Gl,a[u])}function Zf(s,t,e){const n=this.cache,r=t.length,a=Ws(e,r);be(n,a)||(s.uniform1iv(this.addr,a),Me(n,a));for(let u=0;u!==r;++u)e.setTextureCube(t[u]||Hl,a[u])}function Jf(s,t,e){const n=this.cache,r=t.length,a=Ws(e,r);be(n,a)||(s.uniform1iv(this.addr,a),Me(n,a));for(let u=0;u!==r;++u)e.setTexture2DArray(t[u]||zl,a[u])}function Qf(s){switch(s){case 5126:return If;case 35664:return Ff;case 35665:return Nf;case 35666:return Of;case 35674:return Bf;case 35675:return kf;case 35676:return Vf;case 5124:case 35670:return zf;case 35667:case 35671:return Gf;case 35668:case 35672:return Hf;case 35669:case 35673:return Wf;case 5125:return Xf;case 36294:return qf;case 36295:return jf;case 36296:return Kf;case 35678:case 36198:case 36298:case 36306:case 35682:return Yf;case 35679:case 36299:case 36307:return $f;case 35680:case 36300:case 36308:case 36293:return Zf;case 36289:case 36303:case 36311:case 36292:return Jf}}class tm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Uf(e.type)}}class em{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Qf(e.type)}}class nm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let a=0,u=r.length;a!==u;++a){const c=r[a];c.setValue(t,e[c.id],n)}}}const qa=/(\w+)(\])?(\[|\.)?/g;function Yl(s,t){s.seq.push(t),s.map[t.id]=t}function im(s,t,e){const n=s.name,r=n.length;for(qa.lastIndex=0;;){const a=qa.exec(n),u=qa.lastIndex;let c=a[1];const p=a[2]==="]",d=a[3];if(p&&(c=c|0),d===void 0||d==="["&&u+2===r){Yl(e,d===void 0?new tm(c,s,t):new em(c,s,t));break}else{let m=e.map[c];m===void 0&&(m=new nm(c),Yl(e,m)),e=m}}}class Xs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=t.getActiveUniform(e,r),u=t.getUniformLocation(e,a.name);im(a,u,this)}}setValue(t,e,n,r){const a=this.map[e];a!==void 0&&a.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let a=0,u=e.length;a!==u;++a){const c=e[a],p=n[c.id];p.needsUpdate!==!1&&c.setValue(t,p.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,a=t.length;r!==a;++r){const u=t[r];u.id in e&&n.push(u)}return n}}function $l(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let rm=0;function sm(s,t){const e=s.split(`
`),n=[],r=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let u=r;u<a;u++){const c=u+1;n.push(`${c===t?">":" "} ${c}: ${e[u]}`)}return n.join(`
`)}function am(s){switch(s){case wn:return["Linear","( value )"];case Ft:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function Zl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=s.getShaderInfoLog(t).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const u=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+sm(s.getShaderSource(t),u)}else return r}function om(s,t){const e=am(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function lm(s,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="OptimizedCineon";break;case 4:e="ACESFilmic";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function cm(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Wr).join(`
`)}function um(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=s.getActiveAttrib(t,r),u=a.name;let c=1;a.type===s.FLOAT_MAT2&&(c=2),a.type===s.FLOAT_MAT3&&(c=3),a.type===s.FLOAT_MAT4&&(c=4),e[u]={type:a.type,location:s.getAttribLocation(t,u),locationSize:c}}return e}function Wr(s){return s!==""}function Jl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ql(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ja(s){return s.replace(dm,pm)}function pm(s,t){const e=kt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return ja(e)}const fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tc(s){return s.replace(fm,mm)}function mm(s,t,e,n){let r="";for(let a=parseInt(t);a<parseInt(e);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function ec(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _m(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function gm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function xm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function bm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Mm(s,t,e,n){const r=s.getContext(),a=e.defines;let u=e.vertexShader,c=e.fragmentShader;const p=_m(e),d=gm(e),f=vm(e),m=xm(e),g=bm(e),v=e.isWebGL2?"":cm(e),w=um(a),x=r.createProgram();let b,_,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(b=[w].filter(Wr).join(`
`),b.length>0&&(b+=`
`),_=[v,w].filter(Wr).join(`
`),_.length>0&&(_+=`
`)):(b=[ec(e),"#define SHADER_NAME "+e.shaderName,w,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),_=[v,ec(e),"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",e.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?kt.tonemapping_pars_fragment:"",e.toneMapping!==0?lm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.encodings_pars_fragment,om("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wr).join(`
`)),u=ja(u),u=Jl(u,e),u=Ql(u,e),c=ja(c),c=Jl(c,e),c=Ql(c,e),u=tc(u),c=tc(c),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,b=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,_=["#define varying in",e.glslVersion===il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=y+b+u,C=y+_+c,T=$l(r,r.VERTEX_SHADER,E),P=$l(r,r.FRAGMENT_SHADER,C);if(r.attachShader(x,T),r.attachShader(x,P),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),s.debug.checkShaderErrors){const S=r.getProgramInfoLog(x).trim(),L=r.getShaderInfoLog(T).trim(),q=r.getShaderInfoLog(P).trim();let Q=!0,k=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,x,T,P);else{const H=Zl(r,T,"vertex"),X=Zl(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+H+`
`+X)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(L===""||q==="")&&(k=!1);k&&(this.diagnostics={runnable:Q,programLog:S,vertexShader:{log:L,prefix:b},fragmentShader:{log:q,prefix:_}})}r.deleteShader(T),r.deleteShader(P);let U;this.getUniforms=function(){return U===void 0&&(U=new Xs(r,x)),U};let F;return this.getAttributes=function(){return F===void 0&&(F=hm(r,x)),F},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.name=e.shaderName,this.id=rm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=P,this}let wm=0;class Sm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),a=this._getShaderStage(n),u=this._getShaderCacheForMaterial(t);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Em(t),e.set(t,n)),n}}class Em{constructor(t){this.id=wm++,this.code=t,this.usedTimes=0}}function ym(s,t,e,n,r,a,u){const c=new pl,p=new Sm,d=[],f=r.isWebGL2,m=r.logarithmicDepthBuffer,g=r.vertexTextures;let v=r.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===1?"uv1":S===2?"uv2":S===3?"uv3":"uv"}function b(S,L,q,Q,k){const H=Q.fog,X=k.geometry,nt=S.isMeshStandardMaterial?Q.environment:null,j=(S.isMeshStandardMaterial?e:t).get(S.envMap||nt),z=!!j&&j.mapping===306?j.image.height:null,it=w[S.type];S.precision!==null&&(v=r.getMaxPrecision(S.precision),v!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",v,"instead."));const rt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_t=rt!==void 0?rt.length:0;let ut=0;X.morphAttributes.position!==void 0&&(ut=1),X.morphAttributes.normal!==void 0&&(ut=2),X.morphAttributes.color!==void 0&&(ut=3);let K,Y,lt,ft;if(it){const ee=Tn[it];K=ee.vertexShader,Y=ee.fragmentShader}else K=S.vertexShader,Y=S.fragmentShader,p.update(S),lt=p.getVertexShaderID(S),ft=p.getFragmentShaderID(S);const O=s.getRenderTarget(),Lt=k.isInstancedMesh===!0,Dt=!!S.map,ht=!!S.matcap,Mt=!!j,$t=!!S.aoMap,St=!!S.lightMap,Vt=!!S.bumpMap,ae=!!S.normalMap,ie=!!S.displacementMap,he=!!S.emissiveMap,_e=!!S.metalnessMap,jt=!!S.roughnessMap,oe=S.clearcoat>0,Be=S.iridescence>0,D=S.sheen>0,A=S.transmission>0,$=oe&&!!S.clearcoatMap,at=oe&&!!S.clearcoatNormalMap,ct=oe&&!!S.clearcoatRoughnessMap,pt=Be&&!!S.iridescenceMap,Pt=Be&&!!S.iridescenceThicknessMap,gt=D&&!!S.sheenColorMap,tt=D&&!!S.sheenRoughnessMap,wt=!!S.specularMap,yt=!!S.specularColorMap,Tt=!!S.specularIntensityMap,vt=A&&!!S.transmissionMap,xt=A&&!!S.thicknessMap,Nt=!!S.gradientMap,qt=!!S.alphaMap,de=S.alphaTest>0,N=!!S.extensions,Z=!!X.attributes.uv1,st=!!X.attributes.uv2,mt=!!X.attributes.uv3;return{isWebGL2:f,shaderID:it,shaderName:S.type,vertexShader:K,fragmentShader:Y,defines:S.defines,customVertexShaderID:lt,customFragmentShaderID:ft,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:v,instancing:Lt,instancingColor:Lt&&k.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:O===null?s.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:wn,map:Dt,matcap:ht,envMap:Mt,envMapMode:Mt&&j.mapping,envMapCubeUVHeight:z,aoMap:$t,lightMap:St,bumpMap:Vt,normalMap:ae,displacementMap:g&&ie,emissiveMap:he,normalMapObjectSpace:ae&&S.normalMapType===1,normalMapTangentSpace:ae&&S.normalMapType===0,metalnessMap:_e,roughnessMap:jt,clearcoat:oe,clearcoatMap:$,clearcoatNormalMap:at,clearcoatRoughnessMap:ct,iridescence:Be,iridescenceMap:pt,iridescenceThicknessMap:Pt,sheen:D,sheenColorMap:gt,sheenRoughnessMap:tt,specularMap:wt,specularColorMap:yt,specularIntensityMap:Tt,transmission:A,transmissionMap:vt,thicknessMap:xt,gradientMap:Nt,opaque:S.transparent===!1&&S.blending===1,alphaMap:qt,alphaTest:de,combine:S.combine,mapUv:Dt&&x(S.map.channel),aoMapUv:$t&&x(S.aoMap.channel),lightMapUv:St&&x(S.lightMap.channel),bumpMapUv:Vt&&x(S.bumpMap.channel),normalMapUv:ae&&x(S.normalMap.channel),displacementMapUv:ie&&x(S.displacementMap.channel),emissiveMapUv:he&&x(S.emissiveMap.channel),metalnessMapUv:_e&&x(S.metalnessMap.channel),roughnessMapUv:jt&&x(S.roughnessMap.channel),clearcoatMapUv:$&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:at&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:tt&&x(S.sheenRoughnessMap.channel),specularMapUv:wt&&x(S.specularMap.channel),specularColorMapUv:yt&&x(S.specularColorMap.channel),specularIntensityMapUv:Tt&&x(S.specularIntensityMap.channel),transmissionMapUv:vt&&x(S.transmissionMap.channel),thicknessMapUv:xt&&x(S.thicknessMap.channel),alphaMapUv:qt&&x(S.alphaMap.channel),vertexTangents:ae&&!!X.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:Z,vertexUv2s:st,vertexUv3s:mt,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(Dt||qt),fog:!!H,useFog:S.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:ut,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:S.toneMapped?s.toneMapping:0,useLegacyLights:s.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===2,flipSided:S.side===1,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:N&&S.extensions.derivatives===!0,extensionFragDepth:N&&S.extensions.fragDepth===!0,extensionDrawBuffers:N&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:N&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function _(S){const L=[];if(S.shaderID?L.push(S.shaderID):(L.push(S.customVertexShaderID),L.push(S.customFragmentShaderID)),S.defines!==void 0)for(const q in S.defines)L.push(q),L.push(S.defines[q]);return S.isRawShaderMaterial===!1&&(y(L,S),E(L,S),L.push(s.outputColorSpace)),L.push(S.customProgramCacheKey),L.join()}function y(S,L){S.push(L.precision),S.push(L.outputColorSpace),S.push(L.envMapMode),S.push(L.envMapCubeUVHeight),S.push(L.mapUv),S.push(L.alphaMapUv),S.push(L.lightMapUv),S.push(L.aoMapUv),S.push(L.bumpMapUv),S.push(L.normalMapUv),S.push(L.displacementMapUv),S.push(L.emissiveMapUv),S.push(L.metalnessMapUv),S.push(L.roughnessMapUv),S.push(L.clearcoatMapUv),S.push(L.clearcoatNormalMapUv),S.push(L.clearcoatRoughnessMapUv),S.push(L.iridescenceMapUv),S.push(L.iridescenceThicknessMapUv),S.push(L.sheenColorMapUv),S.push(L.sheenRoughnessMapUv),S.push(L.specularMapUv),S.push(L.specularColorMapUv),S.push(L.specularIntensityMapUv),S.push(L.transmissionMapUv),S.push(L.thicknessMapUv),S.push(L.combine),S.push(L.fogExp2),S.push(L.sizeAttenuation),S.push(L.morphTargetsCount),S.push(L.morphAttributeCount),S.push(L.numDirLights),S.push(L.numPointLights),S.push(L.numSpotLights),S.push(L.numSpotLightMaps),S.push(L.numHemiLights),S.push(L.numRectAreaLights),S.push(L.numDirLightShadows),S.push(L.numPointLightShadows),S.push(L.numSpotLightShadows),S.push(L.numSpotLightShadowsWithMaps),S.push(L.shadowMapType),S.push(L.toneMapping),S.push(L.numClippingPlanes),S.push(L.numClipIntersection),S.push(L.depthPacking)}function E(S,L){c.disableAll(),L.isWebGL2&&c.enable(0),L.supportsVertexTextures&&c.enable(1),L.instancing&&c.enable(2),L.instancingColor&&c.enable(3),L.matcap&&c.enable(4),L.envMap&&c.enable(5),L.normalMapObjectSpace&&c.enable(6),L.normalMapTangentSpace&&c.enable(7),L.clearcoat&&c.enable(8),L.iridescence&&c.enable(9),L.alphaTest&&c.enable(10),L.vertexColors&&c.enable(11),L.vertexAlphas&&c.enable(12),L.vertexUv1s&&c.enable(13),L.vertexUv2s&&c.enable(14),L.vertexUv3s&&c.enable(15),L.vertexTangents&&c.enable(16),S.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.skinning&&c.enable(4),L.morphTargets&&c.enable(5),L.morphNormals&&c.enable(6),L.morphColors&&c.enable(7),L.premultipliedAlpha&&c.enable(8),L.shadowMapEnabled&&c.enable(9),L.useLegacyLights&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),S.push(c.mask)}function C(S){const L=w[S.type];let q;if(L){const Q=Tn[L];q=qh.clone(Q.uniforms)}else q=S.uniforms;return q}function T(S,L){let q;for(let Q=0,k=d.length;Q<k;Q++){const H=d[Q];if(H.cacheKey===L){q=H,++q.usedTimes;break}}return q===void 0&&(q=new Mm(s,L,S,a),d.push(q)),q}function P(S){if(--S.usedTimes===0){const L=d.indexOf(S);d[L]=d[d.length-1],d.pop(),S.destroy()}}function U(S){p.remove(S)}function F(){p.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:C,acquireProgram:T,releaseProgram:P,releaseShaderCache:U,programs:d,dispose:F}}function Tm(){let s=new WeakMap;function t(a){let u=s.get(a);return u===void 0&&(u={},s.set(a,u)),u}function e(a){s.delete(a)}function n(a,u,c){s.get(a)[u]=c}function r(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function Cm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function nc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ic(){const s=[];let t=0;const e=[],n=[],r=[];function a(){t=0,e.length=0,n.length=0,r.length=0}function u(m,g,v,w,x,b){let _=s[t];return _===void 0?(_={id:m.id,object:m,geometry:g,material:v,groupOrder:w,renderOrder:m.renderOrder,z:x,group:b},s[t]=_):(_.id=m.id,_.object=m,_.geometry=g,_.material=v,_.groupOrder=w,_.renderOrder=m.renderOrder,_.z=x,_.group=b),t++,_}function c(m,g,v,w,x,b){const _=u(m,g,v,w,x,b);v.transmission>0?n.push(_):v.transparent===!0?r.push(_):e.push(_)}function p(m,g,v,w,x,b){const _=u(m,g,v,w,x,b);v.transmission>0?n.unshift(_):v.transparent===!0?r.unshift(_):e.unshift(_)}function d(m,g){e.length>1&&e.sort(m||Cm),n.length>1&&n.sort(g||nc),r.length>1&&r.sort(g||nc)}function f(){for(let m=t,g=s.length;m<g;m++){const v=s[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:r,init:a,push:c,unshift:p,finish:f,sort:d}}function Am(){let s=new WeakMap;function t(n,r){const a=s.get(n);let u;return a===void 0?(u=new ic,s.set(n,[u])):r>=a.length?(u=new ic,a.push(u)):u=a[r],u}function e(){s=new WeakMap}return{get:t,dispose:e}}function Pm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new Jt};break;case"SpotLight":e={position:new W,direction:new W,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new W,halfWidth:new W,halfHeight:new W};break}return s[t.id]=e,e}}}function Rm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Lm=0;function Dm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Um(s,t){const e=new Pm,n=Rm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)r.probe.push(new W);const a=new W,u=new Le,c=new Le;function p(f,m){let g=0,v=0,w=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let x=0,b=0,_=0,y=0,E=0,C=0,T=0,P=0,U=0,F=0;f.sort(Dm);const S=m===!0?Math.PI:1;for(let q=0,Q=f.length;q<Q;q++){const k=f[q],H=k.color,X=k.intensity,nt=k.distance,j=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=H.r*X*S,v+=H.g*X*S,w+=H.b*X*S;else if(k.isLightProbe)for(let z=0;z<9;z++)r.probe[z].addScaledVector(k.sh.coefficients[z],X);else if(k.isDirectionalLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity*S),k.castShadow){const it=k.shadow,rt=n.get(k);rt.shadowBias=it.bias,rt.shadowNormalBias=it.normalBias,rt.shadowRadius=it.radius,rt.shadowMapSize=it.mapSize,r.directionalShadow[x]=rt,r.directionalShadowMap[x]=j,r.directionalShadowMatrix[x]=k.shadow.matrix,C++}r.directional[x]=z,x++}else if(k.isSpotLight){const z=e.get(k);z.position.setFromMatrixPosition(k.matrixWorld),z.color.copy(H).multiplyScalar(X*S),z.distance=nt,z.coneCos=Math.cos(k.angle),z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),z.decay=k.decay,r.spot[_]=z;const it=k.shadow;if(k.map&&(r.spotLightMap[U]=k.map,U++,it.updateMatrices(k),k.castShadow&&F++),r.spotLightMatrix[_]=it.matrix,k.castShadow){const rt=n.get(k);rt.shadowBias=it.bias,rt.shadowNormalBias=it.normalBias,rt.shadowRadius=it.radius,rt.shadowMapSize=it.mapSize,r.spotShadow[_]=rt,r.spotShadowMap[_]=j,P++}_++}else if(k.isRectAreaLight){const z=e.get(k);z.color.copy(H).multiplyScalar(X),z.halfWidth.set(k.width*.5,0,0),z.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=z,y++}else if(k.isPointLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity*S),z.distance=k.distance,z.decay=k.decay,k.castShadow){const it=k.shadow,rt=n.get(k);rt.shadowBias=it.bias,rt.shadowNormalBias=it.normalBias,rt.shadowRadius=it.radius,rt.shadowMapSize=it.mapSize,rt.shadowCameraNear=it.camera.near,rt.shadowCameraFar=it.camera.far,r.pointShadow[b]=rt,r.pointShadowMap[b]=j,r.pointShadowMatrix[b]=k.shadow.matrix,T++}r.point[b]=z,b++}else if(k.isHemisphereLight){const z=e.get(k);z.skyColor.copy(k.color).multiplyScalar(X*S),z.groundColor.copy(k.groundColor).multiplyScalar(X*S),r.hemi[E]=z,E++}}y>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=dt.LTC_FLOAT_1,r.rectAreaLTC2=dt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=dt.LTC_HALF_1,r.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=w;const L=r.hash;(L.directionalLength!==x||L.pointLength!==b||L.spotLength!==_||L.rectAreaLength!==y||L.hemiLength!==E||L.numDirectionalShadows!==C||L.numPointShadows!==T||L.numSpotShadows!==P||L.numSpotMaps!==U)&&(r.directional.length=x,r.spot.length=_,r.rectArea.length=y,r.point.length=b,r.hemi.length=E,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=P+U-F,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=F,L.directionalLength=x,L.pointLength=b,L.spotLength=_,L.rectAreaLength=y,L.hemiLength=E,L.numDirectionalShadows=C,L.numPointShadows=T,L.numSpotShadows=P,L.numSpotMaps=U,r.version=Lm++)}function d(f,m){let g=0,v=0,w=0,x=0,b=0;const _=m.matrixWorldInverse;for(let y=0,E=f.length;y<E;y++){const C=f[y];if(C.isDirectionalLight){const T=r.directional[g];T.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(_),g++}else if(C.isSpotLight){const T=r.spot[w];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(_),w++}else if(C.isRectAreaLight){const T=r.rectArea[x];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(_),c.identity(),u.copy(C.matrixWorld),u.premultiply(_),c.extractRotation(u),T.halfWidth.set(C.width*.5,0,0),T.halfHeight.set(0,C.height*.5,0),T.halfWidth.applyMatrix4(c),T.halfHeight.applyMatrix4(c),x++}else if(C.isPointLight){const T=r.point[v];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(_),v++}else if(C.isHemisphereLight){const T=r.hemi[b];T.direction.setFromMatrixPosition(C.matrixWorld),T.direction.transformDirection(_),b++}}}return{setup:p,setupView:d,state:r}}function rc(s,t){const e=new Um(s,t),n=[],r=[];function a(){n.length=0,r.length=0}function u(m){n.push(m)}function c(m){r.push(m)}function p(m){e.setup(n,m)}function d(m){e.setupView(n,m)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:p,setupLightsView:d,pushLight:u,pushShadow:c}}function Im(s,t){let e=new WeakMap;function n(a,u=0){const c=e.get(a);let p;return c===void 0?(p=new rc(s,t),e.set(a,[p])):u>=c.length?(p=new rc(s,t),c.push(p)):p=c[u],p}function r(){e=new WeakMap}return{get:n,dispose:r}}class Fm extends zr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Nm extends zr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function km(s,t,e){let n=new Ll;const r=new te,a=new te,u=new Re,c=new Fm({depthPacking:3201}),p=new Nm,d={},f=e.maxTextureSize,m={[0]:1,[1]:0,[2]:2},g=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:Om,fragmentShader:Bm}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const w=new ei;w.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Vn(w,g),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(T,P,U){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||T.length===0)return;const F=s.getRenderTarget(),S=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),q=s.state;q.setBlending(0),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Q=_!==3&&this.type===3,k=_===3&&this.type!==3;for(let H=0,X=T.length;H<X;H++){const nt=T[H],j=nt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const z=j.getFrameExtents();if(r.multiply(z),a.copy(j.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(a.x=Math.floor(f/z.x),r.x=a.x*z.x,j.mapSize.x=a.x),r.y>f&&(a.y=Math.floor(f/z.y),r.y=a.y*z.y,j.mapSize.y=a.y)),j.map===null||Q===!0||k===!0){const rt=this.type!==3?{minFilter:1003,magFilter:1003}:{};j.map!==null&&j.map.dispose(),j.map=new Mi(r.x,r.y,rt),j.map.texture.name=nt.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const it=j.getViewportCount();for(let rt=0;rt<it;rt++){const _t=j.getViewport(rt);u.set(a.x*_t.x,a.y*_t.y,a.x*_t.z,a.y*_t.w),q.viewport(u),j.updateMatrices(nt,rt),n=j.getFrustum(),C(P,U,j.camera,nt,this.type)}j.isPointLightShadow!==!0&&this.type===3&&y(j,U),j.needsUpdate=!1}_=this.type,b.needsUpdate=!1,s.setRenderTarget(F,S,L)};function y(T,P){const U=t.update(x);g.defines.VSM_SAMPLES!==T.blurSamples&&(g.defines.VSM_SAMPLES=T.blurSamples,v.defines.VSM_SAMPLES=T.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Mi(r.x,r.y)),g.uniforms.shadow_pass.value=T.map.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(P,null,U,g,x,null),v.uniforms.shadow_pass.value=T.mapPass.texture,v.uniforms.resolution.value=T.mapSize,v.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(P,null,U,v,x,null)}function E(T,P,U,F){let S=null;const L=U.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)S=L;else if(S=U.isPointLight===!0?p:c,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const q=S.uuid,Q=P.uuid;let k=d[q];k===void 0&&(k={},d[q]=k);let H=k[Q];H===void 0&&(H=S.clone(),k[Q]=H),S=H}if(S.visible=P.visible,S.wireframe=P.wireframe,F===3?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:m[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const q=s.properties.get(S);q.light=U}return S}function C(T,P,U,F,S){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===3)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);const Q=t.update(T),k=T.material;if(Array.isArray(k)){const H=Q.groups;for(let X=0,nt=H.length;X<nt;X++){const j=H[X],z=k[j.materialIndex];if(z&&z.visible){const it=E(T,z,F,S);s.renderBufferDirect(U,null,Q,it,T,j)}}}else if(k.visible){const H=E(T,k,F,S);s.renderBufferDirect(U,null,Q,H,T,null)}}const q=T.children;for(let Q=0,k=q.length;Q<k;Q++)C(q[Q],P,U,F,S)}}function Vm(s,t,e){const n=e.isWebGL2;function r(){let N=!1;const Z=new Re;let st=null;const mt=new Re(0,0,0,0);return{setMask:function(bt){st!==bt&&!N&&(s.colorMask(bt,bt,bt,bt),st=bt)},setLocked:function(bt){N=bt},setClear:function(bt,ee,ne,xe,fn){fn===!0&&(bt*=xe,ee*=xe,ne*=xe),Z.set(bt,ee,ne,xe),mt.equals(Z)===!1&&(s.clearColor(bt,ee,ne,xe),mt.copy(Z))},reset:function(){N=!1,st=null,mt.set(-1,0,0,0)}}}function a(){let N=!1,Z=null,st=null,mt=null;return{setTest:function(bt){bt?O(s.DEPTH_TEST):Lt(s.DEPTH_TEST)},setMask:function(bt){Z!==bt&&!N&&(s.depthMask(bt),Z=bt)},setFunc:function(bt){if(st!==bt){switch(bt){case 0:s.depthFunc(s.NEVER);break;case 1:s.depthFunc(s.ALWAYS);break;case 2:s.depthFunc(s.LESS);break;case 3:s.depthFunc(s.LEQUAL);break;case 4:s.depthFunc(s.EQUAL);break;case 5:s.depthFunc(s.GEQUAL);break;case 6:s.depthFunc(s.GREATER);break;case 7:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}st=bt}},setLocked:function(bt){N=bt},setClear:function(bt){mt!==bt&&(s.clearDepth(bt),mt=bt)},reset:function(){N=!1,Z=null,st=null,mt=null}}}function u(){let N=!1,Z=null,st=null,mt=null,bt=null,ee=null,ne=null,xe=null,fn=null;return{setTest:function(Kt){N||(Kt?O(s.STENCIL_TEST):Lt(s.STENCIL_TEST))},setMask:function(Kt){Z!==Kt&&!N&&(s.stencilMask(Kt),Z=Kt)},setFunc:function(Kt,ke,we){(st!==Kt||mt!==ke||bt!==we)&&(s.stencilFunc(Kt,ke,we),st=Kt,mt=ke,bt=we)},setOp:function(Kt,ke,we){(ee!==Kt||ne!==ke||xe!==we)&&(s.stencilOp(Kt,ke,we),ee=Kt,ne=ke,xe=we)},setLocked:function(Kt){N=Kt},setClear:function(Kt){fn!==Kt&&(s.clearStencil(Kt),fn=Kt)},reset:function(){N=!1,Z=null,st=null,mt=null,bt=null,ee=null,ne=null,xe=null,fn=null}}}const c=new r,p=new a,d=new u,f=new WeakMap,m=new WeakMap;let g={},v={},w=new WeakMap,x=[],b=null,_=!1,y=null,E=null,C=null,T=null,P=null,U=null,F=null,S=!1,L=null,q=null,Q=null,k=null,H=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,j=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(z)[1]),nt=j>=1):z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),nt=j>=2);let it=null,rt={};const _t=s.getParameter(s.SCISSOR_BOX),ut=s.getParameter(s.VIEWPORT),K=new Re().fromArray(_t),Y=new Re().fromArray(ut);function lt(N,Z,st,mt){const bt=new Uint8Array(4),ee=s.createTexture();s.bindTexture(N,ee),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ne=0;ne<st;ne++)n&&(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)?s.texImage3D(Z,0,s.RGBA,1,1,mt,0,s.RGBA,s.UNSIGNED_BYTE,bt):s.texImage2D(Z+ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,bt);return ee}const ft={};ft[s.TEXTURE_2D]=lt(s.TEXTURE_2D,s.TEXTURE_2D,1),ft[s.TEXTURE_CUBE_MAP]=lt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ft[s.TEXTURE_2D_ARRAY]=lt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ft[s.TEXTURE_3D]=lt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),p.setClear(1),d.setClear(0),O(s.DEPTH_TEST),p.setFunc(3),ie(!1),he(1),O(s.CULL_FACE),Vt(0);function O(N){g[N]!==!0&&(s.enable(N),g[N]=!0)}function Lt(N){g[N]!==!1&&(s.disable(N),g[N]=!1)}function Dt(N,Z){return v[N]!==Z?(s.bindFramebuffer(N,Z),v[N]=Z,n&&(N===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Z),N===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Z)),!0):!1}function ht(N,Z){let st=x,mt=!1;if(N)if(st=w.get(Z),st===void 0&&(st=[],w.set(Z,st)),N.isWebGLMultipleRenderTargets){const bt=N.texture;if(st.length!==bt.length||st[0]!==s.COLOR_ATTACHMENT0){for(let ee=0,ne=bt.length;ee<ne;ee++)st[ee]=s.COLOR_ATTACHMENT0+ee;st.length=bt.length,mt=!0}}else st[0]!==s.COLOR_ATTACHMENT0&&(st[0]=s.COLOR_ATTACHMENT0,mt=!0);else st[0]!==s.BACK&&(st[0]=s.BACK,mt=!0);mt&&(e.isWebGL2?s.drawBuffers(st):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(st))}function Mt(N){return b!==N?(s.useProgram(N),b=N,!0):!1}const $t={[100]:s.FUNC_ADD,[101]:s.FUNC_SUBTRACT,[102]:s.FUNC_REVERSE_SUBTRACT};if(n)$t[103]=s.MIN,$t[104]=s.MAX;else{const N=t.get("EXT_blend_minmax");N!==null&&($t[103]=N.MIN_EXT,$t[104]=N.MAX_EXT)}const St={[200]:s.ZERO,[201]:s.ONE,[202]:s.SRC_COLOR,[204]:s.SRC_ALPHA,[210]:s.SRC_ALPHA_SATURATE,[208]:s.DST_COLOR,[206]:s.DST_ALPHA,[203]:s.ONE_MINUS_SRC_COLOR,[205]:s.ONE_MINUS_SRC_ALPHA,[209]:s.ONE_MINUS_DST_COLOR,[207]:s.ONE_MINUS_DST_ALPHA};function Vt(N,Z,st,mt,bt,ee,ne,xe){if(N===0){_===!0&&(Lt(s.BLEND),_=!1);return}if(_===!1&&(O(s.BLEND),_=!0),N!==5){if(N!==y||xe!==S){if((E!==100||P!==100)&&(s.blendEquation(s.FUNC_ADD),E=100,P=100),xe)switch(N){case 1:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.ONE,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case 1:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}C=null,T=null,U=null,F=null,y=N,S=xe}return}bt=bt||Z,ee=ee||st,ne=ne||mt,(Z!==E||bt!==P)&&(s.blendEquationSeparate($t[Z],$t[bt]),E=Z,P=bt),(st!==C||mt!==T||ee!==U||ne!==F)&&(s.blendFuncSeparate(St[st],St[mt],St[ee],St[ne]),C=st,T=mt,U=ee,F=ne),y=N,S=!1}function ae(N,Z){N.side===2?Lt(s.CULL_FACE):O(s.CULL_FACE);let st=N.side===1;Z&&(st=!st),ie(st),N.blending===1&&N.transparent===!1?Vt(0):Vt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),p.setFunc(N.depthFunc),p.setTest(N.depthTest),p.setMask(N.depthWrite),c.setMask(N.colorWrite);const mt=N.stencilWrite;d.setTest(mt),mt&&(d.setMask(N.stencilWriteMask),d.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),d.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),jt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?O(s.SAMPLE_ALPHA_TO_COVERAGE):Lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ie(N){L!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),L=N)}function he(N){N!==0?(O(s.CULL_FACE),N!==q&&(N===1?s.cullFace(s.BACK):N===2?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Lt(s.CULL_FACE),q=N}function _e(N){N!==Q&&(nt&&s.lineWidth(N),Q=N)}function jt(N,Z,st){N?(O(s.POLYGON_OFFSET_FILL),(k!==Z||H!==st)&&(s.polygonOffset(Z,st),k=Z,H=st)):Lt(s.POLYGON_OFFSET_FILL)}function oe(N){N?O(s.SCISSOR_TEST):Lt(s.SCISSOR_TEST)}function Be(N){N===void 0&&(N=s.TEXTURE0+X-1),it!==N&&(s.activeTexture(N),it=N)}function D(N,Z,st){st===void 0&&(it===null?st=s.TEXTURE0+X-1:st=it);let mt=rt[st];mt===void 0&&(mt={type:void 0,texture:void 0},rt[st]=mt),(mt.type!==N||mt.texture!==Z)&&(it!==st&&(s.activeTexture(st),it=st),s.bindTexture(N,Z||ft[N]),mt.type=N,mt.texture=Z)}function A(){const N=rt[it];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(N){K.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),K.copy(N))}function xt(N){Y.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Y.copy(N))}function Nt(N,Z){let st=m.get(Z);st===void 0&&(st=new WeakMap,m.set(Z,st));let mt=st.get(N);mt===void 0&&(mt=s.getUniformBlockIndex(Z,N.name),st.set(N,mt))}function qt(N,Z){const mt=m.get(Z).get(N);f.get(Z)!==mt&&(s.uniformBlockBinding(Z,mt,N.__bindingPointIndex),f.set(Z,mt))}function de(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},it=null,rt={},v={},w=new WeakMap,x=[],b=null,_=!1,y=null,E=null,C=null,T=null,P=null,U=null,F=null,S=!1,L=null,q=null,Q=null,k=null,H=null,K.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),c.reset(),p.reset(),d.reset()}return{buffers:{color:c,depth:p,stencil:d},enable:O,disable:Lt,bindFramebuffer:Dt,drawBuffers:ht,useProgram:Mt,setBlending:Vt,setMaterial:ae,setFlipSided:ie,setCullFace:he,setLineWidth:_e,setPolygonOffset:jt,setScissorTest:oe,activeTexture:Be,bindTexture:D,unbindTexture:A,compressedTexImage2D:$,compressedTexImage3D:at,texImage2D:yt,texImage3D:Tt,updateUBOMapping:Nt,uniformBlockBinding:qt,texStorage2D:tt,texStorage3D:wt,texSubImage2D:ct,texSubImage3D:pt,compressedTexSubImage2D:Pt,compressedTexSubImage3D:gt,scissor:vt,viewport:xt,reset:de}}function zm(s,t,e,n,r,a,u){const c=r.isWebGL2,p=r.maxTextures,d=r.maxCubemapSize,f=r.maxTextureSize,m=r.maxSamples,g=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),w=new WeakMap;let x;const b=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(D,A){return _?new OffscreenCanvas(D,A):Ir("canvas")}function E(D,A,$,at){let ct=1;if((D.width>at||D.height>at)&&(ct=at/Math.max(D.width,D.height)),ct<1||A===!0)if(typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&D instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&D instanceof ImageBitmap){const pt=A?yh:Math.floor,Pt=pt(ct*D.width),gt=pt(ct*D.height);x===void 0&&(x=y(Pt,gt));const tt=$?y(Pt,gt):x;return tt.width=Pt,tt.height=gt,tt.getContext("2d").drawImage(D,0,0,Pt,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Pt+"x"+gt+")."),tt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function C(D){return rl(D.width)&&rl(D.height)}function T(D){return c?!1:D.wrapS!==1001||D.wrapT!==1001||D.minFilter!==1003&&D.minFilter!==1006}function P(D,A){return D.generateMipmaps&&A&&D.minFilter!==1003&&D.minFilter!==1006}function U(D){s.generateMipmap(D)}function F(D,A,$,at,ct=!1){if(c===!1)return A;if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let pt=A;return A===s.RED&&($===s.FLOAT&&(pt=s.R32F),$===s.HALF_FLOAT&&(pt=s.R16F),$===s.UNSIGNED_BYTE&&(pt=s.R8)),A===s.RG&&($===s.FLOAT&&(pt=s.RG32F),$===s.HALF_FLOAT&&(pt=s.RG16F),$===s.UNSIGNED_BYTE&&(pt=s.RG8)),A===s.RGBA&&($===s.FLOAT&&(pt=s.RGBA32F),$===s.HALF_FLOAT&&(pt=s.RGBA16F),$===s.UNSIGNED_BYTE&&(pt=at===Ft&&ct===!1?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(pt=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(pt=s.RGB5_A1)),(pt===s.R16F||pt===s.R32F||pt===s.RG16F||pt===s.RG32F||pt===s.RGBA16F||pt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function S(D,A,$){return P(D,$)===!0||D.isFramebufferTexture&&D.minFilter!==1003&&D.minFilter!==1006?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function L(D){return D===1003||D===1004||D===1005?s.NEAREST:s.LINEAR}function q(D){const A=D.target;A.removeEventListener("dispose",q),k(A),A.isVideoTexture&&w.delete(A)}function Q(D){const A=D.target;A.removeEventListener("dispose",Q),X(A)}function k(D){const A=n.get(D);if(A.__webglInit===void 0)return;const $=D.source,at=b.get($);if(at){const ct=at[A.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&H(D),Object.keys(at).length===0&&b.delete($)}n.remove(D)}function H(D){const A=n.get(D);s.deleteTexture(A.__webglTexture);const $=D.source,at=b.get($);delete at[A.__cacheKey],u.memory.textures--}function X(D){const A=D.texture,$=n.get(D),at=n.get(A);if(at.__webglTexture!==void 0&&(s.deleteTexture(at.__webglTexture),u.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++)s.deleteFramebuffer($.__webglFramebuffer[ct]),$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer[ct]);else{if(s.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&s.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let ct=0;ct<$.__webglColorRenderbuffer.length;ct++)$.__webglColorRenderbuffer[ct]&&s.deleteRenderbuffer($.__webglColorRenderbuffer[ct]);$.__webglDepthRenderbuffer&&s.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let ct=0,pt=A.length;ct<pt;ct++){const Pt=n.get(A[ct]);Pt.__webglTexture&&(s.deleteTexture(Pt.__webglTexture),u.memory.textures--),n.remove(A[ct])}n.remove(A),n.remove(D)}let nt=0;function j(){nt=0}function z(){const D=nt;return D>=p&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+p),nt+=1,D}function it(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function rt(D,A){const $=n.get(D);if(D.isVideoTexture&&oe(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){const at=D.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Lt($,D,A);return}}e.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+A)}function _t(D,A){const $=n.get(D);if(D.version>0&&$.__version!==D.version){Lt($,D,A);return}e.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+A)}function ut(D,A){const $=n.get(D);if(D.version>0&&$.__version!==D.version){Lt($,D,A);return}e.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+A)}function K(D,A){const $=n.get(D);if(D.version>0&&$.__version!==D.version){Dt($,D,A);return}e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+A)}const Y={[1e3]:s.REPEAT,[1001]:s.CLAMP_TO_EDGE,[1002]:s.MIRRORED_REPEAT},lt={[1003]:s.NEAREST,[1004]:s.NEAREST_MIPMAP_NEAREST,[1005]:s.NEAREST_MIPMAP_LINEAR,[1006]:s.LINEAR,[1007]:s.LINEAR_MIPMAP_NEAREST,[1008]:s.LINEAR_MIPMAP_LINEAR};function ft(D,A,$){if($?(s.texParameteri(D,s.TEXTURE_WRAP_S,Y[A.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,Y[A.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,Y[A.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,lt[A.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,lt[A.minFilter])):(s.texParameteri(D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==1001||A.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(D,s.TEXTURE_MAG_FILTER,L(A.magFilter)),s.texParameteri(D,s.TEXTURE_MIN_FILTER,L(A.minFilter)),A.minFilter!==1003&&A.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const at=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===1003||A.minFilter!==1005&&A.minFilter!==1008||A.type===1015&&t.has("OES_texture_float_linear")===!1||c===!1&&A.type===1016&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(s.texParameterf(D,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function O(D,A){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",q));const at=A.source;let ct=b.get(at);ct===void 0&&(ct={},b.set(at,ct));const pt=it(A);if(pt!==D.__cacheKey){ct[pt]===void 0&&(ct[pt]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,$=!0),ct[pt].usedTimes++;const Pt=ct[D.__cacheKey];Pt!==void 0&&(ct[D.__cacheKey].usedTimes--,Pt.usedTimes===0&&H(A)),D.__cacheKey=pt,D.__webglTexture=ct[pt].texture}return $}function Lt(D,A,$){let at=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(at=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(at=s.TEXTURE_3D);const ct=O(D,A),pt=A.source;e.bindTexture(at,D.__webglTexture,s.TEXTURE0+$);const Pt=n.get(pt);if(pt.version!==Pt.__version||ct===!0){e.activeTexture(s.TEXTURE0+$),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const gt=T(A)&&C(A.image)===!1;let tt=E(A.image,gt,!1,f);tt=Be(A,tt);const wt=C(tt)||c,yt=a.convert(A.format,A.colorSpace);let Tt=a.convert(A.type),vt=F(A.internalFormat,yt,Tt,A.colorSpace);ft(at,A,wt);let xt;const Nt=A.mipmaps,qt=c&&A.isVideoTexture!==!0,de=Pt.__version===void 0||ct===!0,N=S(A,tt,wt);if(A.isDepthTexture)vt=s.DEPTH_COMPONENT,c?A.type===1015?vt=s.DEPTH_COMPONENT32F:A.type===1014?vt=s.DEPTH_COMPONENT24:A.type===1020?vt=s.DEPTH24_STENCIL8:vt=s.DEPTH_COMPONENT16:A.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===1026&&vt===s.DEPTH_COMPONENT&&A.type!==1012&&A.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=1014,Tt=a.convert(A.type)),A.format===1027&&vt===s.DEPTH_COMPONENT&&(vt=s.DEPTH_STENCIL,A.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=1020,Tt=a.convert(A.type))),de&&(qt?e.texStorage2D(s.TEXTURE_2D,1,vt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,vt,tt.width,tt.height,0,yt,Tt,null));else if(A.isDataTexture)if(Nt.length>0&&wt){qt&&de&&e.texStorage2D(s.TEXTURE_2D,N,vt,Nt[0].width,Nt[0].height);for(let Z=0,st=Nt.length;Z<st;Z++)xt=Nt[Z],qt?e.texSubImage2D(s.TEXTURE_2D,Z,0,0,xt.width,xt.height,yt,Tt,xt.data):e.texImage2D(s.TEXTURE_2D,Z,vt,xt.width,xt.height,0,yt,Tt,xt.data);A.generateMipmaps=!1}else qt?(de&&e.texStorage2D(s.TEXTURE_2D,N,vt,tt.width,tt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,yt,Tt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,vt,tt.width,tt.height,0,yt,Tt,tt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){qt&&de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,N,vt,Nt[0].width,Nt[0].height,tt.depth);for(let Z=0,st=Nt.length;Z<st;Z++)xt=Nt[Z],A.format!==1023?yt!==null?qt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,xt.width,xt.height,tt.depth,yt,xt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,vt,xt.width,xt.height,tt.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,xt.width,xt.height,tt.depth,yt,Tt,xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Z,vt,xt.width,xt.height,tt.depth,0,yt,Tt,xt.data)}else{qt&&de&&e.texStorage2D(s.TEXTURE_2D,N,vt,Nt[0].width,Nt[0].height);for(let Z=0,st=Nt.length;Z<st;Z++)xt=Nt[Z],A.format!==1023?yt!==null?qt?e.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,xt.width,xt.height,yt,xt.data):e.compressedTexImage2D(s.TEXTURE_2D,Z,vt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage2D(s.TEXTURE_2D,Z,0,0,xt.width,xt.height,yt,Tt,xt.data):e.texImage2D(s.TEXTURE_2D,Z,vt,xt.width,xt.height,0,yt,Tt,xt.data)}else if(A.isDataArrayTexture)qt?(de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,N,vt,tt.width,tt.height,tt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,yt,Tt,tt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,vt,tt.width,tt.height,tt.depth,0,yt,Tt,tt.data);else if(A.isData3DTexture)qt?(de&&e.texStorage3D(s.TEXTURE_3D,N,vt,tt.width,tt.height,tt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,yt,Tt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,vt,tt.width,tt.height,tt.depth,0,yt,Tt,tt.data);else if(A.isFramebufferTexture){if(de)if(qt)e.texStorage2D(s.TEXTURE_2D,N,vt,tt.width,tt.height);else{let Z=tt.width,st=tt.height;for(let mt=0;mt<N;mt++)e.texImage2D(s.TEXTURE_2D,mt,vt,Z,st,0,yt,Tt,null),Z>>=1,st>>=1}}else if(Nt.length>0&&wt){qt&&de&&e.texStorage2D(s.TEXTURE_2D,N,vt,Nt[0].width,Nt[0].height);for(let Z=0,st=Nt.length;Z<st;Z++)xt=Nt[Z],qt?e.texSubImage2D(s.TEXTURE_2D,Z,0,0,yt,Tt,xt):e.texImage2D(s.TEXTURE_2D,Z,vt,yt,Tt,xt);A.generateMipmaps=!1}else qt?(de&&e.texStorage2D(s.TEXTURE_2D,N,vt,tt.width,tt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,Tt,tt)):e.texImage2D(s.TEXTURE_2D,0,vt,yt,Tt,tt);P(A,wt)&&U(at),Pt.__version=pt.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Dt(D,A,$){if(A.image.length!==6)return;const at=O(D,A),ct=A.source;e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+$);const pt=n.get(ct);if(ct.version!==pt.__version||at===!0){e.activeTexture(s.TEXTURE0+$),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Pt=A.isCompressedTexture||A.image[0].isCompressedTexture,gt=A.image[0]&&A.image[0].isDataTexture,tt=[];for(let Z=0;Z<6;Z++)!Pt&&!gt?tt[Z]=E(A.image[Z],!1,!0,d):tt[Z]=gt?A.image[Z].image:A.image[Z],tt[Z]=Be(A,tt[Z]);const wt=tt[0],yt=C(wt)||c,Tt=a.convert(A.format,A.colorSpace),vt=a.convert(A.type),xt=F(A.internalFormat,Tt,vt,A.colorSpace),Nt=c&&A.isVideoTexture!==!0,qt=pt.__version===void 0||at===!0;let de=S(A,wt,yt);ft(s.TEXTURE_CUBE_MAP,A,yt);let N;if(Pt){Nt&&qt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,de,xt,wt.width,wt.height);for(let Z=0;Z<6;Z++){N=tt[Z].mipmaps;for(let st=0;st<N.length;st++){const mt=N[st];A.format!==1023?Tt!==null?Nt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st,0,0,mt.width,mt.height,Tt,mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st,xt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st,0,0,mt.width,mt.height,Tt,vt,mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st,xt,mt.width,mt.height,0,Tt,vt,mt.data)}}}else{N=A.mipmaps,Nt&&qt&&(N.length>0&&de++,e.texStorage2D(s.TEXTURE_CUBE_MAP,de,xt,tt[0].width,tt[0].height));for(let Z=0;Z<6;Z++)if(gt){Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,tt[Z].width,tt[Z].height,Tt,vt,tt[Z].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,xt,tt[Z].width,tt[Z].height,0,Tt,vt,tt[Z].data);for(let st=0;st<N.length;st++){const bt=N[st].image[Z].image;Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st+1,0,0,bt.width,bt.height,Tt,vt,bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st+1,xt,bt.width,bt.height,0,Tt,vt,bt.data)}}else{Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Tt,vt,tt[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,xt,Tt,vt,tt[Z]);for(let st=0;st<N.length;st++){const mt=N[st];Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st+1,0,0,Tt,vt,mt.image[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st+1,xt,Tt,vt,mt.image[Z])}}}P(A,yt)&&U(s.TEXTURE_CUBE_MAP),pt.__version=ct.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function ht(D,A,$,at,ct){const pt=a.convert($.format,$.colorSpace),Pt=a.convert($.type),gt=F($.internalFormat,pt,Pt,$.colorSpace);n.get(A).__hasExternalTextures||(ct===s.TEXTURE_3D||ct===s.TEXTURE_2D_ARRAY?e.texImage3D(ct,0,gt,A.width,A.height,A.depth,0,pt,Pt,null):e.texImage2D(ct,0,gt,A.width,A.height,0,pt,Pt,null)),e.bindFramebuffer(s.FRAMEBUFFER,D),jt(A)?g.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,at,ct,n.get($).__webglTexture,0,_e(A)):(ct===s.TEXTURE_2D||ct>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,at,ct,n.get($).__webglTexture,0),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(D,A,$){if(s.bindRenderbuffer(s.RENDERBUFFER,D),A.depthBuffer&&!A.stencilBuffer){let at=s.DEPTH_COMPONENT16;if($||jt(A)){const ct=A.depthTexture;ct&&ct.isDepthTexture&&(ct.type===1015?at=s.DEPTH_COMPONENT32F:ct.type===1014&&(at=s.DEPTH_COMPONENT24));const pt=_e(A);jt(A)?g.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,at,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,at,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,at,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,D)}else if(A.depthBuffer&&A.stencilBuffer){const at=_e(A);$&&jt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,s.DEPTH24_STENCIL8,A.width,A.height):jt(A)?g.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,D)}else{const at=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ct=0;ct<at.length;ct++){const pt=at[ct],Pt=a.convert(pt.format,pt.colorSpace),gt=a.convert(pt.type),tt=F(pt.internalFormat,Pt,gt,pt.colorSpace),wt=_e(A);$&&jt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,tt,A.width,A.height):jt(A)?g.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt,tt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,tt,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function $t(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),rt(A.depthTexture,0);const at=n.get(A.depthTexture).__webglTexture,ct=_e(A);if(A.depthTexture.format===1026)jt(A)?g.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,at,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,at,0);else if(A.depthTexture.format===1027)jt(A)?g.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,at,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function St(D){const A=n.get(D),$=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");$t(A.__webglFramebuffer,D)}else if($){A.__webglDepthbuffer=[];for(let at=0;at<6;at++)e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[at]),A.__webglDepthbuffer[at]=s.createRenderbuffer(),Mt(A.__webglDepthbuffer[at],D,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),Mt(A.__webglDepthbuffer,D,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(D,A,$){const at=n.get(D);A!==void 0&&ht(at.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),$!==void 0&&St(D)}function ae(D){const A=D.texture,$=n.get(D),at=n.get(A);D.addEventListener("dispose",Q),D.isWebGLMultipleRenderTargets!==!0&&(at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture()),at.__version=A.version,u.memory.textures++);const ct=D.isWebGLCubeRenderTarget===!0,pt=D.isWebGLMultipleRenderTargets===!0,Pt=C(D)||c;if(ct){$.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)$.__webglFramebuffer[gt]=s.createFramebuffer()}else{if($.__webglFramebuffer=s.createFramebuffer(),pt)if(r.drawBuffers){const gt=D.texture;for(let tt=0,wt=gt.length;tt<wt;tt++){const yt=n.get(gt[tt]);yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture(),u.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&D.samples>0&&jt(D)===!1){const gt=pt?A:[A];$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let tt=0;tt<gt.length;tt++){const wt=gt[tt];$.__webglColorRenderbuffer[tt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[tt]);const yt=a.convert(wt.format,wt.colorSpace),Tt=a.convert(wt.type),vt=F(wt.internalFormat,yt,Tt,wt.colorSpace,D.isXRRenderTarget===!0),xt=_e(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,vt,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,$.__webglColorRenderbuffer[tt])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Mt($.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){e.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture),ft(s.TEXTURE_CUBE_MAP,A,Pt);for(let gt=0;gt<6;gt++)ht($.__webglFramebuffer[gt],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+gt);P(A,Pt)&&U(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){const gt=D.texture;for(let tt=0,wt=gt.length;tt<wt;tt++){const yt=gt[tt],Tt=n.get(yt);e.bindTexture(s.TEXTURE_2D,Tt.__webglTexture),ft(s.TEXTURE_2D,yt,Pt),ht($.__webglFramebuffer,D,yt,s.COLOR_ATTACHMENT0+tt,s.TEXTURE_2D),P(yt,Pt)&&U(s.TEXTURE_2D)}e.unbindTexture()}else{let gt=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(c?gt=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(gt,at.__webglTexture),ft(gt,A,Pt),ht($.__webglFramebuffer,D,A,s.COLOR_ATTACHMENT0,gt),P(A,Pt)&&U(gt),e.unbindTexture()}D.depthBuffer&&St(D)}function ie(D){const A=C(D)||c,$=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let at=0,ct=$.length;at<ct;at++){const pt=$[at];if(P(pt,A)){const Pt=D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,gt=n.get(pt).__webglTexture;e.bindTexture(Pt,gt),U(Pt),e.unbindTexture()}}}function he(D){if(c&&D.samples>0&&jt(D)===!1){const A=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],$=D.width,at=D.height;let ct=s.COLOR_BUFFER_BIT;const pt=[],Pt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=n.get(D),tt=D.isWebGLMultipleRenderTargets===!0;if(tt)for(let wt=0;wt<A.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let wt=0;wt<A.length;wt++){pt.push(s.COLOR_ATTACHMENT0+wt),D.depthBuffer&&pt.push(Pt);const yt=gt.__ignoreDepthValues!==void 0?gt.__ignoreDepthValues:!1;if(yt===!1&&(D.depthBuffer&&(ct|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&(ct|=s.STENCIL_BUFFER_BIT)),tt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,gt.__webglColorRenderbuffer[wt]),yt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Pt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Pt])),tt){const Tt=n.get(A[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Tt,0)}s.blitFramebuffer(0,0,$,at,0,0,$,at,ct,s.NEAREST),v&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),tt)for(let wt=0;wt<A.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,gt.__webglColorRenderbuffer[wt]);const yt=n.get(A[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,yt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}}function _e(D){return Math.min(m,D.samples)}function jt(D){const A=n.get(D);return c&&D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function oe(D){const A=u.render.frame;w.get(D)!==A&&(w.set(D,A),D.update())}function Be(D,A){const $=D.colorSpace,at=D.format,ct=D.type;return D.isCompressedTexture===!0||D.format===1035||$!==wn&&$!==bi&&($===Ft?c===!1?t.has("EXT_sRGB")===!0&&at===1023?(D.format=1035,D.minFilter=1006,D.generateMipmaps=!1):A=ol.sRGBToLinear(A):(at!==1023||ct!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}this.allocateTextureUnit=z,this.resetTextureUnits=j,this.setTexture2D=rt,this.setTexture2DArray=_t,this.setTexture3D=ut,this.setTextureCube=K,this.rebindTextures=Vt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=jt}function Gm(s,t,e){const n=e.isWebGL2;function r(a,u=bi){let c;if(a===1009)return s.UNSIGNED_BYTE;if(a===1017)return s.UNSIGNED_SHORT_4_4_4_4;if(a===1018)return s.UNSIGNED_SHORT_5_5_5_1;if(a===1010)return s.BYTE;if(a===1011)return s.SHORT;if(a===1012)return s.UNSIGNED_SHORT;if(a===1013)return s.INT;if(a===1014)return s.UNSIGNED_INT;if(a===1015)return s.FLOAT;if(a===1016)return n?s.HALF_FLOAT:(c=t.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===1021)return s.ALPHA;if(a===1023)return s.RGBA;if(a===1024)return s.LUMINANCE;if(a===1025)return s.LUMINANCE_ALPHA;if(a===1026)return s.DEPTH_COMPONENT;if(a===1027)return s.DEPTH_STENCIL;if(a===1035)return c=t.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===1028)return s.RED;if(a===1029)return s.RED_INTEGER;if(a===1030)return s.RG;if(a===1031)return s.RG_INTEGER;if(a===1033)return s.RGBA_INTEGER;if(a===33776||a===33777||a===33778||a===33779)if(u===Ft)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===33776)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===33777)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===33778)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===33779)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===33776)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===33777)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===33778)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===33779)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===35840||a===35841||a===35842||a===35843)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===35840)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===35841)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===35842)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===35843)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===36196)return c=t.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===37492||a===37496)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===37492)return u===Ft?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===37496)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===37808||a===37809||a===37810||a===37811||a===37812||a===37813||a===37814||a===37815||a===37816||a===37817||a===37818||a===37819||a===37820||a===37821)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===37808)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===37809)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===37810)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===37811)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===37812)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===37813)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===37814)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===37815)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===37816)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===37817)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===37818)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===37819)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===37820)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===37821)return u===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===36492)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===36492)return u===Ft?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===36283||a===36284||a===36285||a===36286)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===36492)return c.COMPRESSED_RED_RGTC1_EXT;if(a===36284)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===36285)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===36286)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===1020?n?s.UNSIGNED_INT_24_8:(c=t.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:r}}class Hm extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class qs extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wm={type:"move"};class Ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,a=null,u=null;const c=this._targetRay,p=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const x of t.hand.values()){const b=e.getJointPose(x,n),_=this._getHandJoint(d,x);b!==null&&(_.matrix.fromArray(b.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=b.radius),_.visible=b!==null}const f=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],g=f.position.distanceTo(m.position),v=.02,w=.005;d.inputState.pinching&&g>v+w?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=v-w&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(p.matrix.fromArray(a.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,a.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(a.linearVelocity)):p.hasLinearVelocity=!1,a.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(a.angularVelocity)):p.hasAngularVelocity=!1));c!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Wm)))}return c!==null&&(c.visible=r!==null),p!==null&&(p.visible=a!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Xm extends Ge{constructor(t,e,n,r,a,u,c,p,d,f){if(f=f!==void 0?f:1026,f!==1026&&f!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===1026&&(n=1014),n===void 0&&f===1027&&(n=1020),super(null,r,a,u,c,p,f,n,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=c!==void 0?c:1003,this.minFilter=p!==void 0?p:1003,this.flipY=!1,this.generateMipmaps=!1}}class qm extends Wi{constructor(t,e){super();const n=this;let r=null,a=1,u=null,c="local-floor",p=1,d=null,f=null,m=null,g=null,v=null,w=null;const x=e.getContextAttributes();let b=null,_=null;const y=[],E=[],C=new Set,T=new Map,P=new on;P.layers.enable(1),P.viewport=new Re;const U=new on;U.layers.enable(2),U.viewport=new Re;const F=[P,U],S=new Hm;S.layers.enable(1),S.layers.enable(2);let L=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Y=y[K];return Y===void 0&&(Y=new Ka,y[K]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(K){let Y=y[K];return Y===void 0&&(Y=new Ka,y[K]=Y),Y.getGripSpace()},this.getHand=function(K){let Y=y[K];return Y===void 0&&(Y=new Ka,y[K]=Y),Y.getHandSpace()};function Q(K){const Y=E.indexOf(K.inputSource);if(Y===-1)return;const lt=y[Y];lt!==void 0&&(lt.update(K.inputSource,K.frame,d||u),lt.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",H);for(let K=0;K<y.length;K++){const Y=E[K];Y!==null&&(E[K]=null,y[K].disconnect(Y))}L=null,q=null,t.setRenderTarget(b),v=null,g=null,m=null,r=null,_=null,ut.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){c=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(K){d=K},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return m},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(b=t.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",k),r.addEventListener("inputsourceschange",H),x.xrCompatible!==!0&&await e.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,e,Y),r.updateRenderState({baseLayer:v}),_=new Mi(v.framebufferWidth,v.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let Y=null,lt=null,ft=null;x.depth&&(ft=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=x.stencil?1027:1026,lt=x.stencil?1020:1014);const O={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:a};m=new XRWebGLBinding(r,e),g=m.createProjectionLayer(O),r.updateRenderState({layers:[g]}),_=new Mi(g.textureWidth,g.textureHeight,{format:1023,type:1009,depthTexture:new Xm(g.textureWidth,g.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});const Lt=t.properties.get(_);Lt.__ignoreDepthValues=g.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await r.requestReferenceSpace(c),ut.setContext(r),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function H(K){for(let Y=0;Y<K.removed.length;Y++){const lt=K.removed[Y],ft=E.indexOf(lt);ft>=0&&(E[ft]=null,y[ft].disconnect(lt))}for(let Y=0;Y<K.added.length;Y++){const lt=K.added[Y];let ft=E.indexOf(lt);if(ft===-1){for(let Lt=0;Lt<y.length;Lt++)if(Lt>=E.length){E.push(lt),ft=Lt;break}else if(E[Lt]===null){E[Lt]=lt,ft=Lt;break}if(ft===-1)break}const O=y[ft];O&&O.connect(lt)}}const X=new W,nt=new W;function j(K,Y,lt){X.setFromMatrixPosition(Y.matrixWorld),nt.setFromMatrixPosition(lt.matrixWorld);const ft=X.distanceTo(nt),O=Y.projectionMatrix.elements,Lt=lt.projectionMatrix.elements,Dt=O[14]/(O[10]-1),ht=O[14]/(O[10]+1),Mt=(O[9]+1)/O[5],$t=(O[9]-1)/O[5],St=(O[8]-1)/O[0],Vt=(Lt[8]+1)/Lt[0],ae=Dt*St,ie=Dt*Vt,he=ft/(-St+Vt),_e=he*-St;Y.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(_e),K.translateZ(he),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const jt=Dt+he,oe=ht+he,Be=ae-_e,D=ie+(ft-_e),A=Mt*ht/oe*jt,$=$t*ht/oe*jt;K.projectionMatrix.makePerspective(Be,D,A,$,jt,oe),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function z(K,Y){Y===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Y.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;S.near=U.near=P.near=K.near,S.far=U.far=P.far=K.far,(L!==S.near||q!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,q=S.far);const Y=K.parent,lt=S.cameras;z(S,Y);for(let ft=0;ft<lt.length;ft++)z(lt[ft],Y);lt.length===2?j(S,P,U):S.projectionMatrix.copy(P.projectionMatrix),it(K,S,Y)};function it(K,Y,lt){lt===null?K.matrix.copy(Y.matrixWorld):(K.matrix.copy(lt.matrixWorld),K.matrix.invert(),K.matrix.multiply(Y.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0);const ft=K.children;for(let O=0,Lt=ft.length;O<Lt;O++)ft[O].updateMatrixWorld(!0);K.projectionMatrix.copy(Y.projectionMatrix),K.projectionMatrixInverse.copy(Y.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ma*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(g===null&&v===null))return p},this.setFoveation=function(K){p=K,g!==null&&(g.fixedFoveation=K),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=K)},this.getPlanes=function(){return C};let rt=null;function _t(K,Y){if(f=Y.getViewerPose(d||u),w=Y,f!==null){const lt=f.views;v!==null&&(t.setRenderTargetFramebuffer(_,v.framebuffer),t.setRenderTarget(_));let ft=!1;lt.length!==S.cameras.length&&(S.cameras.length=0,ft=!0);for(let O=0;O<lt.length;O++){const Lt=lt[O];let Dt=null;if(v!==null)Dt=v.getViewport(Lt);else{const Mt=m.getViewSubImage(g,Lt);Dt=Mt.viewport,O===0&&(t.setRenderTargetTextures(_,Mt.colorTexture,g.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(_))}let ht=F[O];ht===void 0&&(ht=new on,ht.layers.enable(O),ht.viewport=new Re,F[O]=ht),ht.matrix.fromArray(Lt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Lt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),O===0&&(S.matrix.copy(ht.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ft===!0&&S.cameras.push(ht)}}for(let lt=0;lt<y.length;lt++){const ft=E[lt],O=y[lt];ft!==null&&O!==void 0&&O.update(ft,Y,d||u)}if(rt&&rt(K,Y),Y.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Y.detectedPlanes});let lt=null;for(const ft of C)Y.detectedPlanes.has(ft)||(lt===null&&(lt=[]),lt.push(ft));if(lt!==null)for(const ft of lt)C.delete(ft),T.delete(ft),n.dispatchEvent({type:"planeremoved",data:ft});for(const ft of Y.detectedPlanes)if(!C.has(ft))C.add(ft),T.set(ft,Y.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ft});else{const O=T.get(ft);ft.lastChangedTime>O&&(T.set(ft,ft.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ft}))}}w=null}const ut=new Dl;ut.setAnimationLoop(_t),this.setAnimationLoop=function(K){rt=K},this.dispose=function(){}}}function jm(s,t){function e(b,_){b.matrixAutoUpdate===!0&&b.updateMatrix(),_.value.copy(b.matrix)}function n(b,_){_.color.getRGB(b.fogColor.value,Pl(s)),_.isFog?(b.fogNear.value=_.near,b.fogFar.value=_.far):_.isFogExp2&&(b.fogDensity.value=_.density)}function r(b,_,y,E,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?a(b,_):_.isMeshToonMaterial?(a(b,_),m(b,_)):_.isMeshPhongMaterial?(a(b,_),f(b,_)):_.isMeshStandardMaterial?(a(b,_),g(b,_),_.isMeshPhysicalMaterial&&v(b,_,C)):_.isMeshMatcapMaterial?(a(b,_),w(b,_)):_.isMeshDepthMaterial?a(b,_):_.isMeshDistanceMaterial?(a(b,_),x(b,_)):_.isMeshNormalMaterial?a(b,_):_.isLineBasicMaterial?(u(b,_),_.isLineDashedMaterial&&c(b,_)):_.isPointsMaterial?p(b,_,y,E):_.isSpriteMaterial?d(b,_):_.isShadowMaterial?(b.color.value.copy(_.color),b.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(b,_){b.opacity.value=_.opacity,_.color&&b.diffuse.value.copy(_.color),_.emissive&&b.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(b.map.value=_.map,e(_.map,b.mapTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,e(_.alphaMap,b.alphaMapTransform)),_.bumpMap&&(b.bumpMap.value=_.bumpMap,e(_.bumpMap,b.bumpMapTransform),b.bumpScale.value=_.bumpScale,_.side===1&&(b.bumpScale.value*=-1)),_.normalMap&&(b.normalMap.value=_.normalMap,e(_.normalMap,b.normalMapTransform),b.normalScale.value.copy(_.normalScale),_.side===1&&b.normalScale.value.negate()),_.displacementMap&&(b.displacementMap.value=_.displacementMap,e(_.displacementMap,b.displacementMapTransform),b.displacementScale.value=_.displacementScale,b.displacementBias.value=_.displacementBias),_.emissiveMap&&(b.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,b.emissiveMapTransform)),_.specularMap&&(b.specularMap.value=_.specularMap,e(_.specularMap,b.specularMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest);const y=t.get(_).envMap;if(y&&(b.envMap.value=y,b.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=_.reflectivity,b.ior.value=_.ior,b.refractionRatio.value=_.refractionRatio),_.lightMap){b.lightMap.value=_.lightMap;const E=s.useLegacyLights===!0?Math.PI:1;b.lightMapIntensity.value=_.lightMapIntensity*E,e(_.lightMap,b.lightMapTransform)}_.aoMap&&(b.aoMap.value=_.aoMap,b.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,b.aoMapTransform))}function u(b,_){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,_.map&&(b.map.value=_.map,e(_.map,b.mapTransform))}function c(b,_){b.dashSize.value=_.dashSize,b.totalSize.value=_.dashSize+_.gapSize,b.scale.value=_.scale}function p(b,_,y,E){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,b.size.value=_.size*y,b.scale.value=E*.5,_.map&&(b.map.value=_.map,e(_.map,b.uvTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest)}function d(b,_){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,b.rotation.value=_.rotation,_.map&&(b.map.value=_.map,e(_.map,b.mapTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest)}function f(b,_){b.specular.value.copy(_.specular),b.shininess.value=Math.max(_.shininess,1e-4)}function m(b,_){_.gradientMap&&(b.gradientMap.value=_.gradientMap)}function g(b,_){b.metalness.value=_.metalness,_.metalnessMap&&(b.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,b.metalnessMapTransform)),b.roughness.value=_.roughness,_.roughnessMap&&(b.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,b.roughnessMapTransform)),t.get(_).envMap&&(b.envMapIntensity.value=_.envMapIntensity)}function v(b,_,y){b.ior.value=_.ior,_.sheen>0&&(b.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),b.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(b.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,b.sheenColorMapTransform)),_.sheenRoughnessMap&&(b.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,b.sheenRoughnessMapTransform))),_.clearcoat>0&&(b.clearcoat.value=_.clearcoat,b.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(b.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,b.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(b.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===1&&b.clearcoatNormalScale.value.negate())),_.iridescence>0&&(b.iridescence.value=_.iridescence,b.iridescenceIOR.value=_.iridescenceIOR,b.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(b.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,b.iridescenceMapTransform)),_.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),_.transmission>0&&(b.transmission.value=_.transmission,b.transmissionSamplerMap.value=y.texture,b.transmissionSamplerSize.value.set(y.width,y.height),_.transmissionMap&&(b.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,b.transmissionMapTransform)),b.thickness.value=_.thickness,_.thicknessMap&&(b.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=_.attenuationDistance,b.attenuationColor.value.copy(_.attenuationColor)),b.specularIntensity.value=_.specularIntensity,b.specularColor.value.copy(_.specularColor),_.specularColorMap&&(b.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,b.specularColorMapTransform)),_.specularIntensityMap&&(b.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,b.specularIntensityMapTransform))}function w(b,_){_.matcap&&(b.matcap.value=_.matcap)}function x(b,_){const y=t.get(_).light;b.referencePosition.value.setFromMatrixPosition(y.matrixWorld),b.nearDistance.value=y.shadow.camera.near,b.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Km(s,t,e,n){let r={},a={},u=[];const c=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(y,E){const C=E.program;n.uniformBlockBinding(y,C)}function d(y,E){let C=r[y.id];C===void 0&&(w(y),C=f(y),r[y.id]=C,y.addEventListener("dispose",b));const T=E.program;n.updateUBOMapping(y,T);const P=t.render.frame;a[y.id]!==P&&(g(y),a[y.id]=P)}function f(y){const E=m();y.__bindingPointIndex=E;const C=s.createBuffer(),T=y.__size,P=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,T,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,C),C}function m(){for(let y=0;y<c;y++)if(u.indexOf(y)===-1)return u.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(y){const E=r[y.id],C=y.uniforms,T=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let P=0,U=C.length;P<U;P++){const F=C[P];if(v(F,P,T)===!0){const S=F.__offset,L=Array.isArray(F.value)?F.value:[F.value];let q=0;for(let Q=0;Q<L.length;Q++){const k=L[Q],H=x(k);typeof k=="number"?(F.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,S+q,F.__data)):k.isMatrix3?(F.__data[0]=k.elements[0],F.__data[1]=k.elements[1],F.__data[2]=k.elements[2],F.__data[3]=k.elements[0],F.__data[4]=k.elements[3],F.__data[5]=k.elements[4],F.__data[6]=k.elements[5],F.__data[7]=k.elements[0],F.__data[8]=k.elements[6],F.__data[9]=k.elements[7],F.__data[10]=k.elements[8],F.__data[11]=k.elements[0]):(k.toArray(F.__data,q),q+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,S,F.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function v(y,E,C){const T=y.value;if(C[E]===void 0){if(typeof T=="number")C[E]=T;else{const P=Array.isArray(T)?T:[T],U=[];for(let F=0;F<P.length;F++)U.push(P[F].clone());C[E]=U}return!0}else if(typeof T=="number"){if(C[E]!==T)return C[E]=T,!0}else{const P=Array.isArray(C[E])?C[E]:[C[E]],U=Array.isArray(T)?T:[T];for(let F=0;F<P.length;F++){const S=P[F];if(S.equals(U[F])===!1)return S.copy(U[F]),!0}}return!1}function w(y){const E=y.uniforms;let C=0;const T=16;let P=0;for(let U=0,F=E.length;U<F;U++){const S=E[U],L={boundary:0,storage:0},q=Array.isArray(S.value)?S.value:[S.value];for(let Q=0,k=q.length;Q<k;Q++){const H=q[Q],X=x(H);L.boundary+=X.boundary,L.storage+=X.storage}if(S.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=C,U>0){P=C%T;const Q=T-P;P!==0&&Q-L.boundary<0&&(C+=T-P,S.__offset=C)}C+=L.storage}return P=C%T,P>0&&(C+=T-P),y.__size=C,y.__cache={},this}function x(y){const E={boundary:0,storage:0};return typeof y=="number"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function b(y){const E=y.target;E.removeEventListener("dispose",b);const C=u.indexOf(E.__bindingPointIndex);u.splice(C,1),s.deleteBuffer(r[E.id]),delete r[E.id],delete a[E.id]}function _(){for(const y in r)s.deleteBuffer(r[y]);u=[],r={},a={}}return{bind:p,update:d,dispose:_}}function Ym(){const s=Ir("canvas");return s.style.display="block",s}class sc{constructor(t={}){const{canvas:e=Ym(),context:n=null,depth:r=!0,stencil:a=!0,alpha:u=!1,antialias:c=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:m=!1}=t;this.isWebGLRenderer=!0;let g;n!==null?g=n.getContextAttributes().alpha:g=u;let v=null,w=null;const x=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ft,this.useLegacyLights=!0,this.toneMapping=0,this.toneMappingExposure=1;const _=this;let y=!1,E=0,C=0,T=null,P=-1,U=null;const F=new Re,S=new Re;let L=null,q=e.width,Q=e.height,k=1,H=null,X=null;const nt=new Re(0,0,q,Q),j=new Re(0,0,q,Q);let z=!1;const it=new Ll;let rt=!1,_t=!1,ut=null;const K=new Le,Y=new W,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ft(){return T===null?k:1}let O=n;function Lt(R,G){for(let J=0;J<R.length;J++){const V=R[J],et=e.getContext(V,G);if(et!==null)return et}return null}try{const R={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:f,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Un}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Nt,!1),e.addEventListener("webglcontextcreationerror",qt,!1),O===null){const G=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&G.shift(),O=Lt(G,R),O===null)throw Lt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Dt,ht,Mt,$t,St,Vt,ae,ie,he,_e,jt,oe,Be,D,A,$,at,ct,pt,Pt,gt,tt,wt,yt;function Tt(){Dt=new af(O),ht=new Jp(O,Dt,t),Dt.init(ht),tt=new Gm(O,Dt,ht),Mt=new Vm(O,Dt,ht),$t=new cf(O),St=new Tm,Vt=new zm(O,Dt,Mt,St,ht,tt,$t),ae=new tf(_),ie=new sf(_),he=new Qh(O,ht),wt=new $p(O,Dt,he,ht),_e=new of(O,he,$t,wt),jt=new pf(O,_e,he,$t),pt=new df(O,ht,Vt),$=new Qp(St),oe=new ym(_,ae,ie,Dt,ht,wt,$),Be=new jm(_,St),D=new Am,A=new Im(Dt,ht),ct=new Yp(_,ae,ie,Mt,jt,g,p),at=new km(_,jt,ht),yt=new Km(O,$t,ht,Mt),Pt=new Zp(O,Dt,$t,ht),gt=new lf(O,Dt,$t,ht),$t.programs=oe.programs,_.capabilities=ht,_.extensions=Dt,_.properties=St,_.renderLists=D,_.shadowMap=at,_.state=Mt,_.info=$t}Tt();const vt=new qm(_,O);this.xr=vt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=Dt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Dt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(R){R!==void 0&&(k=R,this.setSize(q,Q,!1))},this.getSize=function(R){return R.set(q,Q)},this.setSize=function(R,G,J=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,Q=G,e.width=Math.floor(R*k),e.height=Math.floor(G*k),J===!0&&(e.style.width=R+"px",e.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(q*k,Q*k).floor()},this.setDrawingBufferSize=function(R,G,J){q=R,Q=G,k=J,e.width=Math.floor(R*J),e.height=Math.floor(G*J),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(nt)},this.setViewport=function(R,G,J,V){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,G,J,V),Mt.viewport(F.copy(nt).multiplyScalar(k).floor())},this.getScissor=function(R){return R.copy(j)},this.setScissor=function(R,G,J,V){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,G,J,V),Mt.scissor(S.copy(j).multiplyScalar(k).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(R){Mt.setScissorTest(z=R)},this.setOpaqueSort=function(R){H=R},this.setTransparentSort=function(R){X=R},this.getClearColor=function(R){return R.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(R=!0,G=!0,J=!0){let V=0;R&&(V|=O.COLOR_BUFFER_BIT),G&&(V|=O.DEPTH_BUFFER_BIT),J&&(V|=O.STENCIL_BUFFER_BIT),O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",qt,!1),D.dispose(),A.dispose(),St.dispose(),ae.dispose(),ie.dispose(),jt.dispose(),wt.dispose(),yt.dispose(),oe.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",bt),vt.removeEventListener("sessionend",ee),ut&&(ut.dispose(),ut=null),ne.stop()};function xt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=$t.autoReset,G=at.enabled,J=at.autoUpdate,V=at.needsUpdate,et=at.type;Tt(),$t.autoReset=R,at.enabled=G,at.autoUpdate=J,at.needsUpdate=V,at.type=et}function qt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function de(R){const G=R.target;G.removeEventListener("dispose",de),N(G)}function N(R){Z(R),St.remove(R)}function Z(R){const G=St.get(R).programs;G!==void 0&&(G.forEach(function(J){oe.releaseProgram(J)}),R.isShaderMaterial&&oe.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,J,V,et,Et){G===null&&(G=lt);const Ct=et.isMesh&&et.matrixWorld.determinant()<0,Ut=oa(R,G,J,V,et);Mt.setMaterial(V,Ct);let It=J.index,Ot=1;V.wireframe===!0&&(It=_e.getWireframeAttribute(J),Ot=2);const zt=J.drawRange,Bt=J.attributes.position;let Qt=zt.start*Ot,pe=(zt.start+zt.count)*Ot;Et!==null&&(Qt=Math.max(Qt,Et.start*Ot),pe=Math.min(pe,(Et.start+Et.count)*Ot)),It!==null?(Qt=Math.max(Qt,0),pe=Math.min(pe,It.count)):Bt!=null&&(Qt=Math.max(Qt,0),pe=Math.min(pe,Bt.count));const Ye=pe-Qt;if(Ye<0||Ye===1/0)return;wt.setup(et,V,Ut,J,It);let Ln,fe=Pt;if(It!==null&&(Ln=he.get(It),fe=gt,fe.setIndex(Ln)),et.isMesh)V.wireframe===!0?(Mt.setLineWidth(V.wireframeLinewidth*ft()),fe.setMode(O.LINES)):fe.setMode(O.TRIANGLES);else if(et.isLine){let Gt=V.linewidth;Gt===void 0&&(Gt=1),Mt.setLineWidth(Gt*ft()),et.isLineSegments?fe.setMode(O.LINES):et.isLineLoop?fe.setMode(O.LINE_LOOP):fe.setMode(O.LINE_STRIP)}else et.isPoints?fe.setMode(O.POINTS):et.isSprite&&fe.setMode(O.TRIANGLES);if(et.isInstancedMesh)fe.renderInstances(Qt,Ye,et.count);else if(J.isInstancedBufferGeometry){const Gt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ss=Math.min(J.instanceCount,Gt);fe.renderInstances(Qt,Ye,ss)}else fe.render(Qt,Ye)},this.compile=function(R,G){function J(V,et,Et){V.transparent===!0&&V.side===2&&V.forceSinglePass===!1?(V.side=1,V.needsUpdate=!0,Sr(V,et,Et),V.side=0,V.needsUpdate=!0,Sr(V,et,Et),V.side=2):Sr(V,et,Et)}w=A.get(R),w.init(),b.push(w),R.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights(_.useLegacyLights),R.traverse(function(V){const et=V.material;if(et)if(Array.isArray(et))for(let Et=0;Et<et.length;Et++){const Ct=et[Et];J(Ct,R,V)}else J(et,R,V)}),b.pop(),w=null};let st=null;function mt(R){st&&st(R)}function bt(){ne.stop()}function ee(){ne.start()}const ne=new Dl;ne.setAnimationLoop(mt),typeof self!="undefined"&&ne.setContext(self),this.setAnimationLoop=function(R){st=R,vt.setAnimationLoop(R),R===null?ne.stop():ne.start()},vt.addEventListener("sessionstart",bt),vt.addEventListener("sessionend",ee),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(G),G=vt.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,G,T),w=A.get(R,b.length),w.init(),b.push(w),K.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),it.setFromProjectionMatrix(K),_t=this.localClippingEnabled,rt=$.init(this.clippingPlanes,_t),v=D.get(R,x.length),v.init(),x.push(v),xe(R,G,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(H,X),rt===!0&&$.beginShadows();const J=w.state.shadowsArray;if(at.render(J,R,G),rt===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset(),ct.render(v,R),w.setupLights(_.useLegacyLights),G.isArrayCamera){const V=G.cameras;for(let et=0,Et=V.length;et<Et;et++){const Ct=V[et];fn(v,R,Ct,Ct.viewport)}}else fn(v,R,G);T!==null&&(Vt.updateMultisampleRenderTarget(T),Vt.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(_,R,G),wt.resetDefaultState(),P=-1,U=null,b.pop(),b.length>0?w=b[b.length-1]:w=null,x.pop(),x.length>0?v=x[x.length-1]:v=null};function xe(R,G,J,V){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)w.pushLight(R),R.castShadow&&w.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||it.intersectsSprite(R)){V&&Y.setFromMatrixPosition(R.matrixWorld).applyMatrix4(K);const Ct=jt.update(R),Ut=R.material;Ut.visible&&v.push(R,Ct,Ut,J,Y.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||it.intersectsObject(R))){R.isSkinnedMesh&&R.skeleton.frame!==$t.render.frame&&(R.skeleton.update(),R.skeleton.frame=$t.render.frame);const Ct=jt.update(R),Ut=R.material;if(V&&(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Y.copy(Ct.boundingSphere.center).applyMatrix4(R.matrixWorld).applyMatrix4(K)),Array.isArray(Ut)){const It=Ct.groups;for(let Ot=0,zt=It.length;Ot<zt;Ot++){const Bt=It[Ot],Qt=Ut[Bt.materialIndex];Qt&&Qt.visible&&v.push(R,Ct,Qt,J,Y.z,Bt)}}else Ut.visible&&v.push(R,Ct,Ut,J,Y.z,null)}}const Et=R.children;for(let Ct=0,Ut=Et.length;Ct<Ut;Ct++)xe(Et[Ct],G,J,V)}function fn(R,G,J,V){const et=R.opaque,Et=R.transmissive,Ct=R.transparent;w.setupLightsView(J),rt===!0&&$.setGlobalState(_.clippingPlanes,J),Et.length>0&&Kt(et,Et,G,J),V&&Mt.viewport(F.copy(V)),et.length>0&&ke(et,G,J),Et.length>0&&ke(Et,G,J),Ct.length>0&&ke(Ct,G,J),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Kt(R,G,J,V){if(ut===null){const Ut=ht.isWebGL2;ut=new Mi(1024,1024,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:Ut&&c===!0?4:0})}const et=_.getRenderTarget();_.setRenderTarget(ut),_.clear();const Et=_.toneMapping;_.toneMapping=0,ke(R,J,V),Vt.updateMultisampleRenderTarget(ut),Vt.updateRenderTargetMipmap(ut);let Ct=!1;for(let Ut=0,It=G.length;Ut<It;Ut++){const Ot=G[Ut],zt=Ot.object,Bt=Ot.geometry,Qt=Ot.material,pe=Ot.group;if(Qt.side===2&&zt.layers.test(V.layers)){const Ye=Qt.side;Qt.side=1,Qt.needsUpdate=!0,we(zt,J,V,Bt,Qt,pe),Qt.side=Ye,Qt.needsUpdate=!0,Ct=!0}}Ct===!0&&(Vt.updateMultisampleRenderTarget(ut),Vt.updateRenderTargetMipmap(ut)),_.setRenderTarget(et),_.toneMapping=Et}function ke(R,G,J){const V=G.isScene===!0?G.overrideMaterial:null;for(let et=0,Et=R.length;et<Et;et++){const Ct=R[et],Ut=Ct.object,It=Ct.geometry,Ot=V===null?Ct.material:V,zt=Ct.group;Ut.layers.test(J.layers)&&we(Ut,G,J,It,Ot,zt)}}function we(R,G,J,V,et,Et){R.onBeforeRender(_,G,J,V,et,Et),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),et.onBeforeRender(_,G,J,V,R,Et),et.transparent===!0&&et.side===2&&et.forceSinglePass===!1?(et.side=1,et.needsUpdate=!0,_.renderBufferDirect(J,G,V,et,R,Et),et.side=0,et.needsUpdate=!0,_.renderBufferDirect(J,G,V,et,R,Et),et.side=2):_.renderBufferDirect(J,G,V,et,R,Et),R.onAfterRender(_,G,J,V,et,Et)}function Sr(R,G,J){G.isScene!==!0&&(G=lt);const V=St.get(R),et=w.state.lights,Et=w.state.shadowsArray,Ct=et.state.version,Ut=oe.getParameters(R,et.state,Et,G,J),It=oe.getProgramCacheKey(Ut);let Ot=V.programs;V.environment=R.isMeshStandardMaterial?G.environment:null,V.fog=G.fog,V.envMap=(R.isMeshStandardMaterial?ie:ae).get(R.envMap||V.environment),Ot===void 0&&(R.addEventListener("dispose",de),Ot=new Map,V.programs=Ot);let zt=Ot.get(It);if(zt!==void 0){if(V.currentProgram===zt&&V.lightsStateVersion===Ct)return di(R,Ut),zt}else Ut.uniforms=oe.getUniforms(R),R.onBuild(J,Ut,_),R.onBeforeCompile(Ut,_),zt=oe.acquireProgram(Ut,It),Ot.set(It,zt),V.uniforms=Ut.uniforms;const Bt=V.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Bt.clippingPlanes=$.uniform),di(R,Ut),V.needsLights=rs(R),V.lightsStateVersion=Ct,V.needsLights&&(Bt.ambientLightColor.value=et.state.ambient,Bt.lightProbe.value=et.state.probe,Bt.directionalLights.value=et.state.directional,Bt.directionalLightShadows.value=et.state.directionalShadow,Bt.spotLights.value=et.state.spot,Bt.spotLightShadows.value=et.state.spotShadow,Bt.rectAreaLights.value=et.state.rectArea,Bt.ltc_1.value=et.state.rectAreaLTC1,Bt.ltc_2.value=et.state.rectAreaLTC2,Bt.pointLights.value=et.state.point,Bt.pointLightShadows.value=et.state.pointShadow,Bt.hemisphereLights.value=et.state.hemi,Bt.directionalShadowMap.value=et.state.directionalShadowMap,Bt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Bt.spotShadowMap.value=et.state.spotShadowMap,Bt.spotLightMatrix.value=et.state.spotLightMatrix,Bt.spotLightMap.value=et.state.spotLightMap,Bt.pointShadowMap.value=et.state.pointShadowMap,Bt.pointShadowMatrix.value=et.state.pointShadowMatrix);const Qt=zt.getUniforms(),pe=Xs.seqWithValue(Qt.seq,Bt);return V.currentProgram=zt,V.uniformsList=pe,zt}function di(R,G){const J=St.get(R);J.outputColorSpace=G.outputColorSpace,J.instancing=G.instancing,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function oa(R,G,J,V,et){G.isScene!==!0&&(G=lt),Vt.resetTextureUnits();const Et=G.fog,Ct=V.isMeshStandardMaterial?G.environment:null,Ut=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:wn,It=(V.isMeshStandardMaterial?ie:ae).get(V.envMap||Ct),Ot=V.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,zt=!!V.normalMap&&!!J.attributes.tangent,Bt=!!J.morphAttributes.position,Qt=!!J.morphAttributes.normal,pe=!!J.morphAttributes.color,Ye=V.toneMapped?_.toneMapping:0,Ln=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,fe=Ln!==void 0?Ln.length:0,Gt=St.get(V),ss=w.state.lights;if(rt===!0&&(_t===!0||R!==U)){const Se=R===U&&V.id===P;$.setState(V,R,Se)}let le=!1;V.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==ss.state.version||Gt.outputColorSpace!==Ut||et.isInstancedMesh&&Gt.instancing===!1||!et.isInstancedMesh&&Gt.instancing===!0||et.isSkinnedMesh&&Gt.skinning===!1||!et.isSkinnedMesh&&Gt.skinning===!0||Gt.envMap!==It||V.fog===!0&&Gt.fog!==Et||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==$.numPlanes||Gt.numIntersection!==$.numIntersection)||Gt.vertexAlphas!==Ot||Gt.vertexTangents!==zt||Gt.morphTargets!==Bt||Gt.morphNormals!==Qt||Gt.morphColors!==pe||Gt.toneMapping!==Ye||ht.isWebGL2===!0&&Gt.morphTargetsCount!==fe)&&(le=!0):(le=!0,Gt.__version=V.version);let qn=Gt.currentProgram;le===!0&&(qn=Sr(V,G,et));let la=!1,pi=!1,yr=!1;const Pe=qn.getUniforms(),Dn=Gt.uniforms;if(Mt.useProgram(qn.program)&&(la=!0,pi=!0,yr=!0),V.id!==P&&(P=V.id,pi=!0),la||U!==R){if(Pe.setValue(O,"projectionMatrix",R.projectionMatrix),ht.logarithmicDepthBuffer&&Pe.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),U!==R&&(U=R,pi=!0,yr=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const Se=Pe.map.cameraPosition;Se!==void 0&&Se.setValue(O,Y.setFromMatrixPosition(R.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Pe.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||et.isSkinnedMesh)&&Pe.setValue(O,"viewMatrix",R.matrixWorldInverse)}if(et.isSkinnedMesh){Pe.setOptional(O,et,"bindMatrix"),Pe.setOptional(O,et,"bindMatrixInverse");const Se=et.skeleton;Se&&(ht.floatVertexTextures?(Se.boneTexture===null&&Se.computeBoneTexture(),Pe.setValue(O,"boneTexture",Se.boneTexture,Vt),Pe.setValue(O,"boneTextureSize",Se.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const as=J.morphAttributes;if((as.position!==void 0||as.normal!==void 0||as.color!==void 0&&ht.isWebGL2===!0)&&pt.update(et,J,qn),(pi||Gt.receiveShadow!==et.receiveShadow)&&(Gt.receiveShadow=et.receiveShadow,Pe.setValue(O,"receiveShadow",et.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Dn.envMap.value=It,Dn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),pi&&(Pe.setValue(O,"toneMappingExposure",_.toneMappingExposure),Gt.needsLights&&Er(Dn,yr),Et&&V.fog===!0&&Be.refreshFogUniforms(Dn,Et),Be.refreshMaterialUniforms(Dn,V,k,Q,ut),Xs.upload(O,Gt.uniformsList,Dn,Vt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Xs.upload(O,Gt.uniformsList,Dn,Vt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Pe.setValue(O,"center",et.center),Pe.setValue(O,"modelViewMatrix",et.modelViewMatrix),Pe.setValue(O,"normalMatrix",et.normalMatrix),Pe.setValue(O,"modelMatrix",et.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Se=V.uniformsGroups;for(let os=0,ca=Se.length;os<ca;os++)if(ht.isWebGL2){const ls=Se[os];yt.update(ls,qn),yt.bind(ls,qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qn}function Er(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function rs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,G,J){St.get(R.texture).__webglTexture=G,St.get(R.depthTexture).__webglTexture=J;const V=St.get(R);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=J===void 0,V.__autoAllocateDepthBuffer||Dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,G){const J=St.get(R);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,J=0){T=R,E=G,C=J;let V=!0,et=null,Et=!1,Ct=!1;if(R){const It=St.get(R);It.__useDefaultFramebuffer!==void 0?(Mt.bindFramebuffer(O.FRAMEBUFFER,null),V=!1):It.__webglFramebuffer===void 0?Vt.setupRenderTarget(R):It.__hasExternalTextures&&Vt.rebindTextures(R,St.get(R.texture).__webglTexture,St.get(R.depthTexture).__webglTexture);const Ot=R.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Ct=!0);const zt=St.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(et=zt[G],Et=!0):ht.isWebGL2&&R.samples>0&&Vt.useMultisampledRTT(R)===!1?et=St.get(R).__webglMultisampledFramebuffer:et=zt,F.copy(R.viewport),S.copy(R.scissor),L=R.scissorTest}else F.copy(nt).multiplyScalar(k).floor(),S.copy(j).multiplyScalar(k).floor(),L=z;if(Mt.bindFramebuffer(O.FRAMEBUFFER,et)&&ht.drawBuffers&&V&&Mt.drawBuffers(R,et),Mt.viewport(F),Mt.scissor(S),Mt.setScissorTest(L),Et){const It=St.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+G,It.__webglTexture,J)}else if(Ct){const It=St.get(R.texture),Ot=G||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,It.__webglTexture,J||0,Ot)}P=-1},this.readRenderTargetPixels=function(R,G,J,V,et,Et,Ct){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=St.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){Mt.bindFramebuffer(O.FRAMEBUFFER,Ut);try{const It=R.texture,Ot=It.format,zt=It.type;if(Ot!==1023&&tt.convert(Ot)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Bt=zt===1016&&(Dt.has("EXT_color_buffer_half_float")||ht.isWebGL2&&Dt.has("EXT_color_buffer_float"));if(zt!==1009&&tt.convert(zt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(zt===1015&&(ht.isWebGL2||Dt.has("OES_texture_float")||Dt.has("WEBGL_color_buffer_float")))&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-V&&J>=0&&J<=R.height-et&&O.readPixels(G,J,V,et,tt.convert(Ot),tt.convert(zt),Et)}finally{const It=T!==null?St.get(T).__webglFramebuffer:null;Mt.bindFramebuffer(O.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(R,G,J=0){const V=Math.pow(2,-J),et=Math.floor(G.image.width*V),Et=Math.floor(G.image.height*V);Vt.setTexture2D(G,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,R.x,R.y,et,Et),Mt.unbindTexture()},this.copyTextureToTexture=function(R,G,J,V=0){const et=G.image.width,Et=G.image.height,Ct=tt.convert(J.format),Ut=tt.convert(J.type);Vt.setTexture2D(J,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,J.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,J.unpackAlignment),G.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,V,R.x,R.y,et,Et,Ct,Ut,G.image.data):G.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,V,R.x,R.y,G.mipmaps[0].width,G.mipmaps[0].height,Ct,G.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,V,R.x,R.y,Ct,Ut,G.image),V===0&&J.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Mt.unbindTexture()},this.copyTextureToTexture3D=function(R,G,J,V,et=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Et=R.max.x-R.min.x+1,Ct=R.max.y-R.min.y+1,Ut=R.max.z-R.min.z+1,It=tt.convert(V.format),Ot=tt.convert(V.type);let zt;if(V.isData3DTexture)Vt.setTexture3D(V,0),zt=O.TEXTURE_3D;else if(V.isDataArrayTexture)Vt.setTexture2DArray(V,0),zt=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const Bt=O.getParameter(O.UNPACK_ROW_LENGTH),Qt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),pe=O.getParameter(O.UNPACK_SKIP_PIXELS),Ye=O.getParameter(O.UNPACK_SKIP_ROWS),Ln=O.getParameter(O.UNPACK_SKIP_IMAGES),fe=J.isCompressedTexture?J.mipmaps[0]:J.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,fe.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,fe.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,R.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,R.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,R.min.z),J.isDataTexture||J.isData3DTexture?O.texSubImage3D(zt,et,G.x,G.y,G.z,Et,Ct,Ut,It,Ot,fe.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(zt,et,G.x,G.y,G.z,Et,Ct,Ut,It,fe.data)):O.texSubImage3D(zt,et,G.x,G.y,G.z,Et,Ct,Ut,It,Ot,fe),O.pixelStorei(O.UNPACK_ROW_LENGTH,Bt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Qt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,pe),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ye),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ln),et===0&&V.generateMipmaps&&O.generateMipmap(zt),Mt.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?Vt.setTextureCube(R,0):R.isData3DTexture?Vt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Vt.setTexture2DArray(R,0):Vt.setTexture2D(R,0),Mt.unbindTexture()},this.resetState=function(){E=0,C=0,T=null,Mt.reset(),wt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ft?3001:3e3}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===3001?Ft:wn}}class $m extends sc{}$m.prototype.isWebGL1Renderer=!0;class Zm extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Ya extends ei{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const a=[],u=[];c(r),d(n),f(),this.setAttribute("position",new En(a,3)),this.setAttribute("normal",new En(a.slice(),3)),this.setAttribute("uv",new En(u,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function c(y){const E=new W,C=new W,T=new W;for(let P=0;P<e.length;P+=3)v(e[P+0],E),v(e[P+1],C),v(e[P+2],T),p(E,C,T,y)}function p(y,E,C,T){const P=T+1,U=[];for(let F=0;F<=P;F++){U[F]=[];const S=y.clone().lerp(C,F/P),L=E.clone().lerp(C,F/P),q=P-F;for(let Q=0;Q<=q;Q++)Q===0&&F===P?U[F][Q]=S:U[F][Q]=S.clone().lerp(L,Q/q)}for(let F=0;F<P;F++)for(let S=0;S<2*(P-F)-1;S++){const L=Math.floor(S/2);S%2===0?(g(U[F][L+1]),g(U[F+1][L]),g(U[F][L])):(g(U[F][L+1]),g(U[F+1][L+1]),g(U[F+1][L]))}}function d(y){const E=new W;for(let C=0;C<a.length;C+=3)E.x=a[C+0],E.y=a[C+1],E.z=a[C+2],E.normalize().multiplyScalar(y),a[C+0]=E.x,a[C+1]=E.y,a[C+2]=E.z}function f(){const y=new W;for(let E=0;E<a.length;E+=3){y.x=a[E+0],y.y=a[E+1],y.z=a[E+2];const C=b(y)/2/Math.PI+.5,T=_(y)/Math.PI+.5;u.push(C,1-T)}w(),m()}function m(){for(let y=0;y<u.length;y+=6){const E=u[y+0],C=u[y+2],T=u[y+4],P=Math.max(E,C,T),U=Math.min(E,C,T);P>.9&&U<.1&&(E<.2&&(u[y+0]+=1),C<.2&&(u[y+2]+=1),T<.2&&(u[y+4]+=1))}}function g(y){a.push(y.x,y.y,y.z)}function v(y,E){const C=y*3;E.x=t[C+0],E.y=t[C+1],E.z=t[C+2]}function w(){const y=new W,E=new W,C=new W,T=new W,P=new te,U=new te,F=new te;for(let S=0,L=0;S<a.length;S+=9,L+=6){y.set(a[S+0],a[S+1],a[S+2]),E.set(a[S+3],a[S+4],a[S+5]),C.set(a[S+6],a[S+7],a[S+8]),P.set(u[L+0],u[L+1]),U.set(u[L+2],u[L+3]),F.set(u[L+4],u[L+5]),T.copy(y).add(E).add(C).divideScalar(3);const q=b(T);x(P,L+0,y,q),x(U,L+2,E,q),x(F,L+4,C,q)}}function x(y,E,C,T){T<0&&y.x===1&&(u[E]=y.x-1),C.x===0&&C.z===0&&(u[E]=T/2/Math.PI+.5)}function b(y){return Math.atan2(y.z,-y.x)}function _(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ya(t.vertices,t.indices,t.radius,t.details)}}class js extends Ya{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new js(t.radius,t.detail)}}class Jm extends zr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const ac={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Qm{constructor(t,e,n){const r=this;let a=!1,u=0,c=0,p;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(f){c++,a===!1&&r.onStart!==void 0&&r.onStart(f,u,c),a=!0},this.itemEnd=function(f){u++,r.onProgress!==void 0&&r.onProgress(f,u,c),u===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return p?p(f):f},this.setURLModifier=function(f){return p=f,this},this.addHandler=function(f,m){return d.push(f,m),this},this.removeHandler=function(f){const m=d.indexOf(f);return m!==-1&&d.splice(m,2),this},this.getHandler=function(f){for(let m=0,g=d.length;m<g;m+=2){const v=d[m],w=d[m+1];if(v.global&&(v.lastIndex=0),v.test(f))return w}return null}}}const t_=new Qm;class $a{constructor(t){this.manager=t!==void 0?t:t_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,a){n.load(t,r,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class oc extends $a{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,u=ac.get(t);if(u!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(u),a.manager.itemEnd(t)},0),u;const c=Ir("img");function p(){f(),ac.add(t,this),e&&e(this),a.manager.itemEnd(t)}function d(m){f(),r&&r(m),a.manager.itemError(t),a.manager.itemEnd(t)}function f(){c.removeEventListener("load",p,!1),c.removeEventListener("error",d,!1)}return c.addEventListener("load",p,!1),c.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(t),c.src=t,c}}class e_ extends $a{constructor(t){super(t)}load(t,e,n,r){const a=new Va,u=new oc(this.manager);u.setCrossOrigin(this.crossOrigin),u.setPath(this.path);let c=0;function p(d){u.load(t[d],function(f){a.images[d]=f,c++,c===6&&(a.needsUpdate=!0,e&&e(a))},void 0,r)}for(let d=0;d<t.length;++d)p(d);return a}}class n_ extends $a{constructor(t){super(t)}load(t,e,n,r){const a=new Ge,u=new oc(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(t,function(c){a.image=c,a.needsUpdate=!0,e!==void 0&&e(a)},n,r),a}}""+"\\[\\]\\.:\\/".replace("\\.",""),typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Un}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Un);function zn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function lc(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},hr={duration:.5,overwrite:!1,delay:0},Za,ln=1e8,re=1/ln,Ja=Math.PI*2,i_=Ja/4,r_=0,cc=Math.sqrt,s_=Math.cos,a_=Math.sin,Te=function(t){return typeof t=="string"},Ce=function(t){return typeof t=="function"},Gn=function(t){return typeof t=="number"},Qa=function(t){return typeof t=="undefined"},Hn=function(t){return typeof t=="object"},We=function(t){return t!==!1},uc=function(){return typeof window!="undefined"},Ks=function(t){return Ce(t)||Te(t)},hc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ne=Array.isArray,to=/(?:-?\.?\d|\.)+/gi,dc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,dr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,eo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,pc=/[+-]=-?[.\d]+/,fc=/[^,'"\[\]\s]+/gi,o_=/[\d.+\-=]+(?:e[-+]\d*)*/i,ue,Cn,no,io,en={},Ys={},mc,_c=function(t){return(Ys=pr(t,en))&&Pn},ro=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},$s=function(t,e){return!e&&console.warn(t)},gc=function(t,e){return t&&(en[t]=e)&&Ys&&(Ys[t]=e)||en},Xr=function(){return 0},so={},ni=[],ao={},vc,nn={},oo={},xc=30,Zs=[],lo="",co=function(t){var e=t[0],n,r;if(Hn(e)||Ce(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=Zs.length;r--&&!Zs[r].targetTest(e););n=Zs[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new qc(t[r],n)))||t.splice(r,1);return t},Pi=function(t){return t._gsap||co(hn(t))[0]._gsap},bc=function(t,e,n){return(n=t[e])&&Ce(n)?t[e]():Qa(n)&&t.getAttribute&&t.getAttribute(e)||n},Xe=function(t,e){return(t=t.split(",")).forEach(e)||t},ve=function(t){return Math.round(t*1e5)/1e5||0},Oe=function(t){return Math.round(t*1e7)/1e7||0},l_=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},Js=function(){var t=ni.length,e=ni.slice(0),n,r;for(ao={},ni.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Mc=function(t,e,n,r){ni.length&&Js(),t.render(e,n,r),ni.length&&Js()},wc=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(fc).length<2?e:Te(t)?t.trim():t},Sc=function(t){return t},cn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},c_=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},pr=function(t,e){for(var n in e)t[n]=e[n];return t},Ec=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Hn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Qs=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},qr=function(t){var e=t.parent||ue,n=t.keyframes?c_(Ne(t.keyframes)):cn;if(We(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},u_=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},h_=function(t,e,n,r,a){n===void 0&&(n="_first"),r===void 0&&(r="_last");var u=t[r],c;if(a)for(c=e[a];u&&u[a]>c;)u=u._prev;return u?(e._next=u._next,u._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=u,e.parent=e._dp=t,e},ta=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=e._prev,u=e._next;a?a._next=u:t[n]===e&&(t[n]=u),u?u._prev=a:t[r]===e&&(t[r]=a),e._next=e._prev=e.parent=null},Wn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},Ri=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},d_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},p_=function s(t){return!t||t._ts&&s(t.parent)},yc=function(t){return t._repeat?fr(t._tTime,t=t.duration()+t._rDelay)*t:0},fr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},ea=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},na=function(t){return t._end=Oe(t._start+(t._tDur/Math.abs(t._ts||t._rts||re)||0))},Tc=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Oe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),na(t),n._dirty||Ri(n,t)),t},Cc=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=ea(t.rawTime(),e),(!e._dur||Kr(0,e.totalDuration(),n)-e._tTime>re)&&e.render(n,!0)),Ri(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-re}},An=function(t,e,n,r){return e.parent&&Wn(e),e._start=Oe((Gn(n)?n:n||t!==ue?un(t,n,e):t._time)+e._delay),e._end=Oe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),h_(t,e,"_first","_last",t._sort?"_start":0),uo(e)||(t._recent=e),r||Cc(t,e),t},Ac=function(t,e){return(en.ScrollTrigger||ro("scrollTrigger",e))&&en.ScrollTrigger.create(e,t)},Pc=function(t,e,n,r){if(N_(t,e),!t._initted)return 1;if(!n&&t._pt&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&vc!==pn.frame)return ni.push(t),t._lazy=[e,r],1},f_=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},uo=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},m_=function(t,e,n,r){var a=t.ratio,u=e<0||!e&&(!t._start&&f_(t)&&!(!t._initted&&uo(t))||(t._ts<0||t._dp._ts<0)&&!uo(t))?0:1,c=t._rDelay,p=0,d,f,m;if(c&&t._repeat&&(p=Kr(0,t._tDur,e),f=fr(p,c),t._yoyo&&f&1&&(u=1-u),f!==fr(t._tTime,c)&&(a=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==a||r||t._zTime===re||!e&&t._zTime){if(!t._initted&&Pc(t,e,r,n))return;for(m=t._zTime,t._zTime=e||(n?re:0),n||(n=e&&!m),t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=p,d=t._pt;d;)d.r(u,d.d),d=d._next;t._startAt&&e<0&&t._startAt.render(e,!0,!0),t._onUpdate&&!n&&dn(t,"onUpdate"),p&&t._repeat&&!n&&t.parent&&dn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&Wn(t,1),n||(dn(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},__=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},mr=function(t,e,n,r){var a=t._repeat,u=Oe(e)||0,c=t._tTime/t._tDur;return c&&!r&&(t._time*=u/t._dur),t._dur=u,t._tDur=a?a<0?1e10:Oe(u*(a+1)+t._rDelay*a):u,c>0&&!r?Tc(t,t._tTime=t._tDur*c):t.parent&&na(t),n||Ri(t.parent,t),t},Rc=function(t){return t instanceof je?Ri(t):mr(t,t._dur)},g_={_start:0,endTime:Xr,totalDuration:Xr},un=function s(t,e,n){var r=t.labels,a=t._recent||g_,u=t.duration()>=ln?a.endTime(!1):t._dur,c,p,d;return Te(e)&&(isNaN(e)||e in r)?(p=e.charAt(0),d=e.substr(-1)==="%",c=e.indexOf("="),p==="<"||p===">"?(c>=0&&(e=e.replace(/=/,"")),(p==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(e.substr(1))||0)*(d?(c<0?a:n).totalDuration()/100:1)):c<0?(e in r||(r[e]=u),r[e]):(p=parseFloat(e.charAt(c-1)+e.substr(c+1)),d&&n&&(p=p/100*(Ne(n)?n[0]:n).totalDuration()),c>1?s(t,e.substr(0,c-1),n)+p:u+p)):e==null?u:+e},jr=function(t,e,n){var r=Gn(e[1]),a=(r?2:1)+(t<2?0:1),u=e[a],c,p;if(r&&(u.duration=e[1]),u.parent=n,t){for(c=u,p=n;p&&!("immediateRender"in c);)c=p.vars.defaults||{},p=We(p.vars.inherit)&&p.parent;u.immediateRender=We(c.immediateRender),t<2?u.runBackwards=1:u.startAt=e[a-1]}return new Ae(e[0],u,e[a+1])},ii=function(t,e){return t||t===0?e(t):e},Kr=function(t,e,n){return n<t?t:n>e?e:n},qe=function(t,e){return!Te(t)||!(e=o_.exec(t))?"":t.substr(e.index+e[0].length)},v_=function(t,e,n){return ii(n,function(r){return Kr(t,e,r)})},ho=[].slice,Lc=function(t,e){return t&&Hn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Hn(t[0]))&&!t.nodeType&&t!==Cn},x_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var a;return Te(r)&&!e||Lc(r,1)?(a=n).push.apply(a,hn(r)):n.push(r)})||n},hn=function(t,e,n){return Te(t)&&!n&&(no||!gr())?ho.call((e||io).querySelectorAll(t),0):Ne(t)?x_(t,n):Lc(t)?ho.call(t,0):t?[t]:[]},b_=function(t){return t=hn(t)[0]||$s("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return hn(e,n.querySelectorAll?n:n===t?$s("Invalid scope")||io.createElement("div"):t)}},Dc=function(t){return t.sort(function(){return .5-Math.random()})},Uc=function(t){if(Ce(t))return t;var e=Hn(t)?t:{each:t},n=Li(e.ease),r=e.from||0,a=parseFloat(e.base)||0,u={},c=r>0&&r<1,p=isNaN(r)||c,d=e.axis,f=r,m=r;return Te(r)?f=m={center:.5,edges:.5,end:1}[r]||0:!c&&p&&(f=r[0],m=r[1]),function(g,v,w){var x=(w||e).length,b=u[x],_,y,E,C,T,P,U,F,S;if(!b){if(S=e.grid==="auto"?0:(e.grid||[1,ln])[1],!S){for(U=-ln;U<(U=w[S++].getBoundingClientRect().left)&&S<x;);S--}for(b=u[x]=[],_=p?Math.min(S,x)*f-.5:r%S,y=S===ln?0:p?x*m/S-.5:r/S|0,U=0,F=ln,P=0;P<x;P++)E=P%S-_,C=y-(P/S|0),b[P]=T=d?Math.abs(d==="y"?C:E):cc(E*E+C*C),T>U&&(U=T),T<F&&(F=T);r==="random"&&Dc(b),b.max=U-F,b.min=F,b.v=x=(parseFloat(e.amount)||parseFloat(e.each)*(S>x?x-1:d?d==="y"?x/S:S:Math.max(S,x/S))||0)*(r==="edges"?-1:1),b.b=x<0?a-x:a,b.u=qe(e.amount||e.each)||0,n=n&&x<0?Hc(n):n}return x=(b[g]-b.min)/b.max||0,Oe(b.b+(n?n(x):x)*b.v)+b.u}},po=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=Math.round(parseFloat(n)/t)*t*e;return(r-r%1)/e+(Gn(n)?0:qe(n))}},Ic=function(t,e){var n=Ne(t),r,a;return!n&&Hn(t)&&(r=n=t.radius||ln,t.values?(t=hn(t.values),(a=!Gn(t[0]))&&(r*=r)):t=po(t.increment)),ii(e,n?Ce(t)?function(u){return a=t(u),Math.abs(a-u)<=r?a:u}:function(u){for(var c=parseFloat(a?u.x:u),p=parseFloat(a?u.y:0),d=ln,f=0,m=t.length,g,v;m--;)a?(g=t[m].x-c,v=t[m].y-p,g=g*g+v*v):g=Math.abs(t[m]-c),g<d&&(d=g,f=m);return f=!r||d<=r?t[f]:u,a||f===u||Gn(u)?f:f+qe(u)}:po(t))},Fc=function(t,e,n,r){return ii(Ne(t)?!e:n===!0?!!(n=0):!r,function(){return Ne(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},M_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(a,u){return u(a)},r)}},w_=function(t,e){return function(n){return t(parseFloat(n))+(e||qe(n))}},S_=function(t,e,n){return Oc(t,e,0,1,n)},Nc=function(t,e,n){return ii(n,function(r){return t[~~e(r)]})},E_=function s(t,e,n){var r=e-t;return Ne(t)?Nc(t,s(0,t.length),e):ii(n,function(a){return(r+(a-t)%r)%r+t})},y_=function s(t,e,n){var r=e-t,a=r*2;return Ne(t)?Nc(t,s(0,t.length-1),e):ii(n,function(u){return u=(a+(u-t)%a)%a||0,t+(u>r?a-u:u)})},Yr=function(t){for(var e=0,n="",r,a,u,c;~(r=t.indexOf("random(",e));)u=t.indexOf(")",r),c=t.charAt(r+7)==="[",a=t.substr(r+7,u-r-7).match(c?fc:to),n+=t.substr(e,r-e)+Fc(c?a:+a[0],c?0:+a[1],+a[2]||1e-5),e=u+1;return n+t.substr(e,t.length-e)},Oc=function(t,e,n,r,a){var u=e-t,c=r-n;return ii(a,function(p){return n+((p-t)/u*c||0)})},T_=function s(t,e,n,r){var a=isNaN(t+e)?0:function(v){return(1-v)*t+v*e};if(!a){var u=Te(t),c={},p,d,f,m,g;if(n===!0&&(r=1)&&(n=null),u)t={p:t},e={p:e};else if(Ne(t)&&!Ne(e)){for(f=[],m=t.length,g=m-2,d=1;d<m;d++)f.push(s(t[d-1],t[d]));m--,a=function(w){w*=m;var x=Math.min(g,~~w);return f[x](w-x)},n=e}else r||(t=pr(Ne(t)?[]:{},t));if(!f){for(p in e)go.call(c,t,p,"get",e[p]);a=function(w){return bo(w,c)||(u?t.p:t)}}}return ii(n,a)},Bc=function(t,e,n){var r=t.labels,a=ln,u,c,p;for(u in r)c=r[u]-e,c<0==!!n&&c&&a>(c=Math.abs(c))&&(p=u,a=c);return p},dn=function(t,e,n){var r=t.vars,a=r[e],u,c;if(!!a)return u=r[e+"Params"],c=r.callbackScope||t,n&&ni.length&&Js(),u?a.apply(c,u):a.call(c)},$r=function(t){return Wn(t),t.scrollTrigger&&t.scrollTrigger.kill(!1),t.progress()<1&&dn(t,"onInterrupt"),t},_r,C_=function(t){t=!t.name&&t.default||t;var e=t.name,n=Ce(t),r=e&&!n&&t.init?function(){this._props=[]}:t,a={init:Xr,render:bo,add:go,kill:H_,modifier:G_,rawVars:0},u={targetTest:0,get:0,getSetter:xo,aliases:{},register:0};if(gr(),t!==r){if(nn[e])return;cn(r,cn(Qs(t,a),u)),pr(r.prototype,pr(a,Qs(t,u))),nn[r.prop=e]=r,t.targetTest&&(Zs.push(r),so[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}gc(e,r),t.register&&t.register(Pn,r,Ke)},se=255,Zr={aqua:[0,se,se],lime:[0,se,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,se],navy:[0,0,128],white:[se,se,se],olive:[128,128,0],yellow:[se,se,0],orange:[se,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[se,0,0],pink:[se,192,203],cyan:[0,se,se],transparent:[se,se,se,0]},fo=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*se+.5|0},kc=function(t,e,n){var r=t?Gn(t)?[t>>16,t>>8&se,t&se]:0:Zr.black,a,u,c,p,d,f,m,g,v,w;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Zr[t])r=Zr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(a=t.charAt(1),u=t.charAt(2),c=t.charAt(3),t="#"+a+a+u+u+c+c+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&se,r&se,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&se,t&se]}else if(t.substr(0,3)==="hsl"){if(r=w=t.match(to),!e)p=+r[0]%360/360,d=+r[1]/100,f=+r[2]/100,u=f<=.5?f*(d+1):f+d-f*d,a=f*2-u,r.length>3&&(r[3]*=1),r[0]=fo(p+1/3,a,u),r[1]=fo(p,a,u),r[2]=fo(p-1/3,a,u);else if(~t.indexOf("="))return r=t.match(dc),n&&r.length<4&&(r[3]=1),r}else r=t.match(to)||Zr.transparent;r=r.map(Number)}return e&&!w&&(a=r[0]/se,u=r[1]/se,c=r[2]/se,m=Math.max(a,u,c),g=Math.min(a,u,c),f=(m+g)/2,m===g?p=d=0:(v=m-g,d=f>.5?v/(2-m-g):v/(m+g),p=m===a?(u-c)/v+(u<c?6:0):m===u?(c-a)/v+2:(a-u)/v+4,p*=60),r[0]=~~(p+.5),r[1]=~~(d*100+.5),r[2]=~~(f*100+.5)),n&&r.length<4&&(r[3]=1),r},Vc=function(t){var e=[],n=[],r=-1;return t.split(ri).forEach(function(a){var u=a.match(dr)||[];e.push.apply(e,u),n.push(r+=u.length+1)}),e.c=n,e},zc=function(t,e,n){var r="",a=(t+r).match(ri),u=e?"hsla(":"rgba(",c=0,p,d,f,m;if(!a)return t;if(a=a.map(function(g){return(g=kc(g,e,1))&&u+(e?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),n&&(f=Vc(t),p=n.c,p.join(r)!==f.c.join(r)))for(d=t.replace(ri,"1").split(dr),m=d.length-1;c<m;c++)r+=d[c]+(~p.indexOf(c)?a.shift()||u+"0,0,0,0)":(f.length?f:a.length?a:n).shift());if(!d)for(d=t.split(ri),m=d.length-1;c<m;c++)r+=d[c]+a[c];return r+d[m]},ri=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Zr)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),A_=/hsl[a]?\(/,Gc=function(t){var e=t.join(" "),n;if(ri.lastIndex=0,ri.test(e))return n=A_.test(e),t[1]=zc(t[1],n),t[0]=zc(t[0],n,Vc(t[1])),!0},ia,pn=function(){var s=Date.now,t=500,e=33,n=s(),r=n,a=1e3/240,u=a,c=[],p,d,f,m,g,v,w=function x(b){var _=s()-r,y=b===!0,E,C,T,P;if(_>t&&(n+=_-e),r+=_,T=r-n,E=T-u,(E>0||y)&&(P=++m.frame,g=T-m.time*1e3,m.time=T=T/1e3,u+=E+(E>=a?4:a-E),C=1),y||(p=d(x)),C)for(v=0;v<c.length;v++)c[v](T,g,P,b)};return m={time:0,frame:0,tick:function(){w(!0)},deltaRatio:function(b){return g/(1e3/(b||60))},wake:function(){mc&&(!no&&uc()&&(Cn=no=window,io=Cn.document||{},en.gsap=Pn,(Cn.gsapVersions||(Cn.gsapVersions=[])).push(Pn.version),_c(Ys||Cn.GreenSockGlobals||!Cn.gsap&&Cn||{}),f=Cn.requestAnimationFrame),p&&m.sleep(),d=f||function(b){return setTimeout(b,u-m.time*1e3+1|0)},ia=1,w(2))},sleep:function(){(f?Cn.cancelAnimationFrame:clearTimeout)(p),ia=0,d=Xr},lagSmoothing:function(b,_){t=b||1/re,e=Math.min(_,t,0)},fps:function(b){a=1e3/(b||240),u=m.time*1e3+a},add:function(b){c.indexOf(b)<0&&c.push(b),gr()},remove:function(b,_){~(_=c.indexOf(b))&&c.splice(_,1)&&v>=_&&v--},_listeners:c},m}(),gr=function(){return!ia&&pn.wake()},Xt={},P_=/^[\d.\-M][\d.\-,\s]/,R_=/["']/g,L_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],a=1,u=n.length,c,p,d;a<u;a++)p=n[a],c=a!==u-1?p.lastIndexOf(","):p.length,d=p.substr(0,c),e[r]=isNaN(d)?d.replace(R_,"").trim():+d,r=p.substr(c+1).trim();return e},D_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},U_=function(t){var e=(t+"").split("("),n=Xt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[L_(e[1])]:D_(t).split(",").map(wc)):Xt._CE&&P_.test(t)?Xt._CE("",t):n},Hc=function(t){return function(e){return 1-t(1-e)}},Wc=function s(t,e){for(var n=t._first,r;n;)n instanceof je?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},Li=function(t,e){return t&&(Ce(t)?t:Xt[t]||U_(t))||e},Di=function(t,e,n,r){n===void 0&&(n=function(p){return 1-e(1-p)}),r===void 0&&(r=function(p){return p<.5?e(p*2)/2:1-e((1-p)*2)/2});var a={easeIn:e,easeOut:n,easeInOut:r},u;return Xe(t,function(c){Xt[c]=en[c]=a,Xt[u=c.toLowerCase()]=n;for(var p in a)Xt[u+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Xt[c+"."+p]=a[p]}),a},Xc=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},mo=function s(t,e,n){var r=e>=1?e:1,a=(n||(t?.3:.45))/(e<1?e:1),u=a/Ja*(Math.asin(1/r)||0),c=function(f){return f===1?1:r*Math.pow(2,-10*f)*a_((f-u)*a)+1},p=t==="out"?c:t==="in"?function(d){return 1-c(1-d)}:Xc(c);return a=Ja/a,p.config=function(d,f){return s(t,d,f)},p},_o=function s(t,e){e===void 0&&(e=1.70158);var n=function(u){return u?--u*u*((e+1)*u+e)+1:0},r=t==="out"?n:t==="in"?function(a){return 1-n(1-a)}:Xc(n);return r.config=function(a){return s(t,a)},r};Xe("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Di(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})}),Xt.Linear.easeNone=Xt.none=Xt.Linear.easeIn,Di("Elastic",mo("in"),mo("out"),mo()),function(s,t){var e=1/t,n=2*e,r=2.5*e,a=function(c){return c<e?s*c*c:c<n?s*Math.pow(c-1.5/t,2)+.75:c<r?s*(c-=2.25/t)*c+.9375:s*Math.pow(c-2.625/t,2)+.984375};Di("Bounce",function(u){return 1-a(1-u)},a)}(7.5625,2.75),Di("Expo",function(s){return s?Math.pow(2,10*(s-1)):0}),Di("Circ",function(s){return-(cc(1-s*s)-1)}),Di("Sine",function(s){return s===1?1:-s_(s*i_)+1}),Di("Back",_o("in"),_o("out"),_o()),Xt.SteppedEase=Xt.steps=en.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),a=e?1:0,u=1-re;return function(c){return((r*Kr(0,u,c)|0)+a)*n}}},hr.ease=Xt["quad.out"],Xe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return lo+=s+","+s+"Params,"});var qc=function(t,e){this.id=r_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:bc,this.set=e?e.getSetter:xo},Jr=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,mr(this,+e.duration,1,1),this.data=e.data,ia||pn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,mr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(gr(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Tc(this,n),!a._dp||a.parent||Cc(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&An(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===re||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Mc(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+yc(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+yc(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,r){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,r):this._repeat?fr(this._tTime,a)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-re?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?ea(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-re?0:this._rts,d_(this.totalTime(Kr(-this._delay,this._tDur,r),!0)),na(this),this},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(gr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==re&&(this._tTime-=re)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&An(r,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(We(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ea(r.rawTime(n),this):this._tTime:this._tTime},t.globalTime=function(n){for(var r=this,a=arguments.length?n:r.rawTime();r;)a=r._start+a/(r._ts||1),r=r._dp;return a},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Rc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Rc(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(un(this,n),We(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,We(r))},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-re:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-re,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=r&&a<this.endTime(!0)-re)},t.eventCallback=function(n,r,a){var u=this.vars;return arguments.length>1?(r?(u[n]=r,a&&(u[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=r)):delete u[n],this):u[n]},t.then=function(n){var r=this;return new Promise(function(a){var u=Ce(n)?n:Sc,c=function(){var d=r.then;r.then=null,Ce(u)&&(u=u(r))&&(u.then||u===r)&&(r.then=d),a(u),r.then=d};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?c():r._prom=c})},t.kill=function(){$r(this)},s}();cn(Jr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-re,_prom:0,_ps:!1,_rts:1});var je=function(s){lc(t,s);function t(n,r){var a;return n===void 0&&(n={}),a=s.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=We(n.sortChildren),ue&&An(n.parent||ue,zn(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&Ac(zn(a),n.scrollTrigger),a}var e=t.prototype;return e.to=function(r,a,u){return jr(0,arguments,this),this},e.from=function(r,a,u){return jr(1,arguments,this),this},e.fromTo=function(r,a,u,c){return jr(2,arguments,this),this},e.set=function(r,a,u){return a.duration=0,a.parent=this,qr(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Ae(r,a,un(this,u),1),this},e.call=function(r,a,u){return An(this,Ae.delayedCall(0,r,a),u)},e.staggerTo=function(r,a,u,c,p,d,f){return u.duration=a,u.stagger=u.stagger||c,u.onComplete=d,u.onCompleteParams=f,u.parent=this,new Ae(r,u,un(this,p)),this},e.staggerFrom=function(r,a,u,c,p,d,f){return u.runBackwards=1,qr(u).immediateRender=We(u.immediateRender),this.staggerTo(r,a,u,c,p,d,f)},e.staggerFromTo=function(r,a,u,c,p,d,f,m){return c.startAt=u,qr(c).immediateRender=We(c.immediateRender),this.staggerTo(r,a,c,p,d,f,m)},e.render=function(r,a,u){var c=this._time,p=this._dirty?this.totalDuration():this._tDur,d=this._dur,f=r<=0?0:Oe(r),m=this._zTime<0!=r<0&&(this._initted||!d),g,v,w,x,b,_,y,E,C,T,P,U;if(this!==ue&&f>p&&r>=0&&(f=p),f!==this._tTime||u||m){if(c!==this._time&&d&&(f+=this._time-c,r+=this._time-c),g=f,C=this._start,E=this._ts,_=!E,m&&(d||(c=this._zTime),(r||!a)&&(this._zTime=r)),this._repeat){if(P=this._yoyo,b=d+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(b*100+r,a,u);if(g=Oe(f%b),f===p?(x=this._repeat,g=d):(x=~~(f/b),x&&x===f/b&&(g=d,x--),g>d&&(g=d)),T=fr(this._tTime,b),!c&&this._tTime&&T!==x&&(T=x),P&&x&1&&(g=d-g,U=1),x!==T&&!this._lock){var F=P&&T&1,S=F===(P&&x&1);if(x<T&&(F=!F),c=F?0:d,this._lock=1,this.render(c||(U?0:Oe(x*b)),a,!d)._lock=0,this._tTime=f,!a&&this.parent&&dn(this,"onRepeat"),this.vars.repeatRefresh&&!U&&(this.invalidate()._lock=1),c&&c!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,p=this._tDur,S&&(this._lock=2,c=F?d:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!U&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Wc(this,U)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=__(this,Oe(c),Oe(g)),y&&(f-=g-(g=y._start))),this._tTime=f,this._time=g,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,c=0),!c&&g&&!a&&(dn(this,"onStart"),this._tTime!==f))return this;if(g>=c&&r>=0)for(v=this._first;v;){if(w=v._next,(v._act||g>=v._start)&&v._ts&&y!==v){if(v.parent!==this)return this.render(r,a,u);if(v.render(v._ts>0?(g-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(g-v._start)*v._ts,a,u),g!==this._time||!this._ts&&!_){y=0,w&&(f+=this._zTime=-re);break}}v=w}else{v=this._last;for(var L=r<0?r:g;v;){if(w=v._prev,(v._act||L<=v._end)&&v._ts&&y!==v){if(v.parent!==this)return this.render(r,a,u);if(v.render(v._ts>0?(L-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(L-v._start)*v._ts,a,u),g!==this._time||!this._ts&&!_){y=0,w&&(f+=this._zTime=L?-re:re);break}}v=w}}if(y&&!a&&(this.pause(),y.render(g>=c?0:-re)._zTime=g>=c?1:-1,this._ts))return this._start=C,na(this),this.render(r,a,u);this._onUpdate&&!a&&dn(this,"onUpdate",!0),(f===p&&p>=this.totalDuration()||!f&&c)&&(C===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((r||!d)&&(f===p&&this._ts>0||!f&&this._ts<0)&&Wn(this,1),!a&&!(r<0&&!c)&&(f||c||!p)&&(dn(this,f===p&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<p&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,a){var u=this;if(Gn(a)||(a=un(this,a,r)),!(r instanceof Jr)){if(Ne(r))return r.forEach(function(c){return u.add(c,a)}),this;if(Te(r))return this.addLabel(r,a);if(Ce(r))r=Ae.delayedCall(0,r);else return this}return this!==r?An(this,r,a):this},e.getChildren=function(r,a,u,c){r===void 0&&(r=!0),a===void 0&&(a=!0),u===void 0&&(u=!0),c===void 0&&(c=-ln);for(var p=[],d=this._first;d;)d._start>=c&&(d instanceof Ae?a&&p.push(d):(u&&p.push(d),r&&p.push.apply(p,d.getChildren(!0,a,u)))),d=d._next;return p},e.getById=function(r){for(var a=this.getChildren(1,1,1),u=a.length;u--;)if(a[u].vars.id===r)return a[u]},e.remove=function(r){return Te(r)?this.removeLabel(r):Ce(r)?this.killTweensOf(r):(ta(this,r),r===this._recent&&(this._recent=this._last),Ri(this))},e.totalTime=function(r,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Oe(pn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),s.prototype.totalTime.call(this,r,a),this._forcing=0,this):this._tTime},e.addLabel=function(r,a){return this.labels[r]=un(this,a),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,a,u){var c=Ae.delayedCall(0,a||Xr,u);return c.data="isPause",this._hasPause=1,An(this,c,un(this,r))},e.removePause=function(r){var a=this._first;for(r=un(this,r);a;)a._start===r&&a.data==="isPause"&&Wn(a),a=a._next},e.killTweensOf=function(r,a,u){for(var c=this.getTweensOf(r,u),p=c.length;p--;)si!==c[p]&&c[p].kill(r,a);return this},e.getTweensOf=function(r,a){for(var u=[],c=hn(r),p=this._first,d=Gn(a),f;p;)p instanceof Ae?l_(p._targets,c)&&(d?(!si||p._initted&&p._ts)&&p.globalTime(0)<=a&&p.globalTime(p.totalDuration())>a:!a||p.isActive())&&u.push(p):(f=p.getTweensOf(c,a)).length&&u.push.apply(u,f),p=p._next;return u},e.tweenTo=function(r,a){a=a||{};var u=this,c=un(u,r),p=a,d=p.startAt,f=p.onStart,m=p.onStartParams,g=p.immediateRender,v,w=Ae.to(u,cn({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:a.duration||Math.abs((c-(d&&"time"in d?d.time:u._time))/u.timeScale())||re,onStart:function(){if(u.pause(),!v){var b=a.duration||Math.abs((c-(d&&"time"in d?d.time:u._time))/u.timeScale());w._dur!==b&&mr(w,b,0,1).render(w._time,!0,!0),v=1}f&&f.apply(w,m||[])}},a));return g?w.render(0):w},e.tweenFromTo=function(r,a,u){return this.tweenTo(a,cn({startAt:{time:un(this,r)}},u))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),Bc(this,un(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),Bc(this,un(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+re)},e.shiftChildren=function(r,a,u){u===void 0&&(u=0);for(var c=this._first,p=this.labels,d;c;)c._start>=u&&(c._start+=r,c._end+=r),c=c._next;if(a)for(d in p)p[d]>=u&&(p[d]+=r);return Ri(this)},e.invalidate=function(){var r=this._first;for(this._lock=0;r;)r.invalidate(),r=r._next;return s.prototype.invalidate.call(this)},e.clear=function(r){r===void 0&&(r=!0);for(var a=this._first,u;a;)u=a._next,this.remove(a),a=u;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ri(this)},e.totalDuration=function(r){var a=0,u=this,c=u._last,p=ln,d,f,m;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-r:r));if(u._dirty){for(m=u.parent;c;)d=c._prev,c._dirty&&c.totalDuration(),f=c._start,f>p&&u._sort&&c._ts&&!u._lock?(u._lock=1,An(u,c,f-c._delay,1)._lock=0):p=f,f<0&&c._ts&&(a-=f,(!m&&!u._dp||m&&m.smoothChildTiming)&&(u._start+=f/u._ts,u._time-=f,u._tTime-=f),u.shiftChildren(-f,!1,-1/0),p=0),c._end>a&&c._ts&&(a=c._end),c=d;mr(u,u===ue&&u._time>a?u._time:a,1,1),u._dirty=0}return u._tDur},t.updateRoot=function(r){if(ue._ts&&(Mc(ue,ea(r,ue)),vc=pn.frame),pn.frame>=xc){xc+=tn.autoSleep||120;var a=ue._first;if((!a||!a._ts)&&tn.autoSleep&&pn._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||pn.sleep()}}},t}(Jr);cn(je.prototype,{_lock:0,_hasPause:0,_forcing:0});var I_=function(t,e,n,r,a,u,c){var p=new Ke(this._pt,t,e,0,1,Jc,null,a),d=0,f=0,m,g,v,w,x,b,_,y;for(p.b=n,p.e=r,n+="",r+="",(_=~r.indexOf("random("))&&(r=Yr(r)),u&&(y=[n,r],u(y,t,e),n=y[0],r=y[1]),g=n.match(eo)||[];m=eo.exec(r);)w=m[0],x=r.substring(d,m.index),v?v=(v+1)%5:x.substr(-5)==="rgba("&&(v=1),w!==g[f++]&&(b=parseFloat(g[f-1])||0,p._pt={_next:p._pt,p:x||f===1?x:",",s:b,c:w.charAt(1)==="="?parseFloat(w.substr(2))*(w.charAt(0)==="-"?-1:1):parseFloat(w)-b,m:v&&v<4?Math.round:0},d=eo.lastIndex);return p.c=d<r.length?r.substring(d,r.length):"",p.fp=c,(pc.test(r)||_)&&(p.e=0),this._pt=p,p},go=function(t,e,n,r,a,u,c,p,d){Ce(r)&&(r=r(a||0,t,u));var f=t[e],m=n!=="get"?n:Ce(f)?d?t[e.indexOf("set")||!Ce(t["get"+e.substr(3)])?e:"get"+e.substr(3)](d):t[e]():f,g=Ce(f)?d?k_:$c:vo,v;if(Te(r)&&(~r.indexOf("random(")&&(r=Yr(r)),r.charAt(1)==="="&&(v=parseFloat(m)+parseFloat(r.substr(2))*(r.charAt(0)==="-"?-1:1)+(qe(m)||0),(v||v===0)&&(r=v))),m!==r)return!isNaN(m*r)&&r!==""?(v=new Ke(this._pt,t,e,+m||0,r-(m||0),typeof f=="boolean"?z_:Zc,0,g),d&&(v.fp=d),c&&v.modifier(c,this,t),this._pt=v):(!f&&!(e in t)&&ro(e,r),I_.call(this,t,e,m,r,g,p||tn.stringFilter,d))},F_=function(t,e,n,r,a){if(Ce(t)&&(t=Qr(t,a,e,n,r)),!Hn(t)||t.style&&t.nodeType||Ne(t)||hc(t))return Te(t)?Qr(t,a,e,n,r):t;var u={},c;for(c in t)u[c]=Qr(t[c],a,e,n,r);return u},jc=function(t,e,n,r,a,u){var c,p,d,f;if(nn[t]&&(c=new nn[t]).init(a,c.rawVars?e[t]:F_(e[t],r,a,u,n),n,r,u)!==!1&&(n._pt=p=new Ke(n._pt,a,t,0,1,c.render,c,0,c.priority),n!==_r))for(d=n._ptLookup[n._targets.indexOf(a)],f=c._props.length;f--;)d[c._props[f]]=p;return c},si,N_=function s(t,e){var n=t.vars,r=n.ease,a=n.startAt,u=n.immediateRender,c=n.lazy,p=n.onUpdate,d=n.onUpdateParams,f=n.callbackScope,m=n.runBackwards,g=n.yoyoEase,v=n.keyframes,w=n.autoRevert,x=t._dur,b=t._startAt,_=t._targets,y=t.parent,E=y&&y.data==="nested"?y.parent._targets:_,C=t._overwrite==="auto"&&!Za,T=t.timeline,P,U,F,S,L,q,Q,k,H,X,nt,j,z;if(T&&(!v||!r)&&(r="none"),t._ease=Li(r,hr.ease),t._yEase=g?Hc(Li(g===!0?r:g,hr.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!T&&!!n.runBackwards,!T||v&&!n.stagger){if(k=_[0]?Pi(_[0]).harness:0,j=k&&n[k.prop],P=Qs(n,so),b&&Wn(b.render(-1,!0)),a)if(Wn(t._startAt=Ae.set(_,cn({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:We(c),startAt:null,delay:0,onUpdate:p,onUpdateParams:d,callbackScope:f,stagger:0},a))),e<0&&!u&&!w&&t._startAt.render(-1,!0),u){if(e>0&&!w&&(t._startAt=0),x&&e<=0){e&&(t._zTime=e);return}}else w===!1&&(t._startAt=0);else if(m&&x){if(b)!w&&(t._startAt=0);else if(e&&(u=!1),F=cn({overwrite:!1,data:"isFromStart",lazy:u&&We(c),immediateRender:u,stagger:0,parent:y},P),j&&(F[k.prop]=j),Wn(t._startAt=Ae.set(_,F)),e<0&&t._startAt.render(-1,!0),t._zTime=e,!u)s(t._startAt,re);else if(!e)return}for(t._pt=0,c=x&&We(c)||c&&!x,U=0;U<_.length;U++){if(L=_[U],Q=L._gsap||co(_)[U]._gsap,t._ptLookup[U]=X={},ao[Q.id]&&ni.length&&Js(),nt=E===_?U:E.indexOf(L),k&&(H=new k).init(L,j||P,t,nt,E)!==!1&&(t._pt=S=new Ke(t._pt,L,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(it){X[it]=S}),H.priority&&(q=1)),!k||j)for(F in P)nn[F]&&(H=jc(F,P,t,nt,L,E))?H.priority&&(q=1):X[F]=S=go.call(t,L,F,"get",P[F],nt,E,0,n.stringFilter);t._op&&t._op[U]&&t.kill(L,t._op[U]),C&&t._pt&&(si=t,ue.killTweensOf(L,X,t.globalTime(e)),z=!t.parent,si=0),t._pt&&c&&(ao[Q.id]=1)}q&&Qc(t),t._onInit&&t._onInit(t)}t._onUpdate=p,t._initted=(!t._op||t._pt)&&!z,v&&e<=0&&T.render(ln,!0,!0)},O_=function(t,e){var n=t[0]?Pi(t[0]).harness:0,r=n&&n.aliases,a,u,c,p;if(!r)return e;a=pr({},e);for(u in r)if(u in a)for(p=r[u].split(","),c=p.length;c--;)a[p[c]]=a[u];return a},B_=function(t,e,n,r){var a=e.ease||r||"power1.inOut",u,c;if(Ne(e))c=n[t]||(n[t]=[]),e.forEach(function(p,d){return c.push({t:d/(e.length-1)*100,v:p,e:a})});else for(u in e)c=n[u]||(n[u]=[]),u==="ease"||c.push({t:parseFloat(t),v:e[u],e:a})},Qr=function(t,e,n,r,a){return Ce(t)?t.call(e,n,r,a):Te(t)&&~t.indexOf("random(")?Yr(t):t},Kc=lo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Yc={};Xe(Kc+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Yc[s]=1});var Ae=function(s){lc(t,s);function t(n,r,a,u){var c;typeof r=="number"&&(a.duration=r,r=a,a=null),c=s.call(this,u?r:qr(r))||this;var p=c.vars,d=p.duration,f=p.delay,m=p.immediateRender,g=p.stagger,v=p.overwrite,w=p.keyframes,x=p.defaults,b=p.scrollTrigger,_=p.yoyoEase,y=r.parent||ue,E=(Ne(n)||hc(n)?Gn(n[0]):"length"in r)?[n]:hn(n),C,T,P,U,F,S,L,q;if(c._targets=E.length?co(E):$s("GSAP target "+n+" not found. https://greensock.com",!tn.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=v,w||g||Ks(d)||Ks(f)){if(r=c.vars,C=c.timeline=new je({data:"nested",defaults:x||{}}),C.kill(),C.parent=C._dp=zn(c),C._start=0,g||Ks(d)||Ks(f)){if(U=E.length,L=g&&Uc(g),Hn(g))for(F in g)~Kc.indexOf(F)&&(q||(q={}),q[F]=g[F]);for(T=0;T<U;T++)P=Qs(r,Yc),P.stagger=0,_&&(P.yoyoEase=_),q&&pr(P,q),S=E[T],P.duration=+Qr(d,zn(c),T,S,E),P.delay=(+Qr(f,zn(c),T,S,E)||0)-c._delay,!g&&U===1&&P.delay&&(c._delay=f=P.delay,c._start+=f,P.delay=0),C.to(S,P,L?L(T,S,E):0),C._ease=Xt.none;C.duration()?d=f=0:c.timeline=0}else if(w){qr(cn(C.vars.defaults,{ease:"none"})),C._ease=Li(w.ease||r.ease||"none");var Q=0,k,H,X;if(Ne(w))w.forEach(function(nt){return C.to(E,nt,">")});else{P={};for(F in w)F==="ease"||F==="easeEach"||B_(F,w[F],P,w.easeEach);for(F in P)for(k=P[F].sort(function(nt,j){return nt.t-j.t}),Q=0,T=0;T<k.length;T++)H=k[T],X={ease:H.e,duration:(H.t-(T?k[T-1].t:0))/100*d},X[F]=H.v,C.to(E,X,Q),Q+=X.duration;C.duration()<d&&C.to({},{duration:d-C.duration()})}}d||c.duration(d=C.duration())}else c.timeline=0;return v===!0&&!Za&&(si=zn(c),ue.killTweensOf(E),si=0),An(y,zn(c),a),r.reversed&&c.reverse(),r.paused&&c.paused(!0),(m||!d&&!w&&c._start===Oe(y._time)&&We(m)&&p_(zn(c))&&y.data!=="nested")&&(c._tTime=-re,c.render(Math.max(0,-f))),b&&Ac(zn(c),b),c}var e=t.prototype;return e.render=function(r,a,u){var c=this._time,p=this._tDur,d=this._dur,f=r>p-re&&r>=0?p:r<re?0:r,m,g,v,w,x,b,_,y,E;if(!d)m_(this,r,a,u);else if(f!==this._tTime||!r||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=r<0){if(m=f,y=this.timeline,this._repeat){if(w=d+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(w*100+r,a,u);if(m=Oe(f%w),f===p?(v=this._repeat,m=d):(v=~~(f/w),v&&v===f/w&&(m=d,v--),m>d&&(m=d)),b=this._yoyo&&v&1,b&&(E=this._yEase,m=d-m),x=fr(this._tTime,w),m===c&&!u&&this._initted)return this;v!==x&&(y&&this._yEase&&Wc(y,b),this.vars.repeatRefresh&&!b&&!this._lock&&(this._lock=u=1,this.render(Oe(w*v),!0).invalidate()._lock=0))}if(!this._initted){if(Pc(this,r<0?r:m,u,a))return this._tTime=0,this;if(d!==this._dur)return this.render(r,a,u)}if(this._tTime=f,this._time=m,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(E||this._ease)(m/d),this._from&&(this.ratio=_=1-_),m&&!c&&!a&&(dn(this,"onStart"),this._tTime!==f))return this;for(g=this._pt;g;)g.r(_,g.d),g=g._next;y&&y.render(r<0?r:!m&&b?-re:y._dur*y._ease(m/this._dur),a,u)||this._startAt&&(this._zTime=r),this._onUpdate&&!a&&(r<0&&this._startAt&&this._startAt.render(r,!0,u),dn(this,"onUpdate")),this._repeat&&v!==x&&this.vars.onRepeat&&!a&&this.parent&&dn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(r<0&&this._startAt&&!this._onUpdate&&this._startAt.render(r,!0,!0),(r||!d)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Wn(this,1),!a&&!(r<0&&!c)&&(f||c)&&(dn(this,f===p?"onComplete":"onReverseComplete",!0),this._prom&&!(f<p&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),s.prototype.invalidate.call(this)},e.kill=function(r,a){if(a===void 0&&(a="all"),!r&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?$r(this):this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(r,a,si&&si.vars.overwrite!==!0)._first||$r(this),this.parent&&u!==this.timeline.totalDuration()&&mr(this,this._dur*this.timeline._tDur/u,0,1),this}var c=this._targets,p=r?hn(r):c,d=this._ptLookup,f=this._pt,m,g,v,w,x,b,_;if((!a||a==="all")&&u_(c,p))return a==="all"&&(this._pt=0),$r(this);for(m=this._op=this._op||[],a!=="all"&&(Te(a)&&(x={},Xe(a,function(y){return x[y]=1}),a=x),a=O_(c,a)),_=c.length;_--;)if(~p.indexOf(c[_])){g=d[_],a==="all"?(m[_]=a,w=g,v={}):(v=m[_]=m[_]||{},w=a);for(x in w)b=g&&g[x],b&&((!("kill"in b.d)||b.d.kill(x)===!0)&&ta(this,b,"_pt"),delete g[x]),v!=="all"&&(v[x]=1)}return this._initted&&!this._pt&&f&&$r(this),this},t.to=function(r,a){return new t(r,a,arguments[2])},t.from=function(r,a){return jr(1,arguments)},t.delayedCall=function(r,a,u,c){return new t(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:a,onReverseComplete:a,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:c})},t.fromTo=function(r,a,u){return jr(2,arguments)},t.set=function(r,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new t(r,a)},t.killTweensOf=function(r,a,u){return ue.killTweensOf(r,a,u)},t}(Jr);cn(Ae.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Xe("staggerTo,staggerFrom,staggerFromTo",function(s){Ae[s]=function(){var t=new je,e=ho.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var vo=function(t,e,n){return t[e]=n},$c=function(t,e,n){return t[e](n)},k_=function(t,e,n,r){return t[e](r.fp,n)},V_=function(t,e,n){return t.setAttribute(e,n)},xo=function(t,e){return Ce(t[e])?$c:Qa(t[e])&&t.setAttribute?V_:vo},Zc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},z_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Jc=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},bo=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},G_=function(t,e,n,r){for(var a=this._pt,u;a;)u=a._next,a.p===r&&a.modifier(t,e,n),a=u},H_=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?ta(this,e,"_pt"):e.dep||(n=1),e=r;return!n},W_=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},Qc=function(t){for(var e=t._pt,n,r,a,u;e;){for(n=e._next,r=a;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:u)?e._prev._next=e:a=e,(e._next=r)?r._prev=e:u=e,e=n}t._pt=a},Ke=function(){function s(e,n,r,a,u,c,p,d,f){this.t=n,this.s=a,this.c=u,this.p=r,this.r=c||Zc,this.d=p||this,this.set=d||vo,this.pr=f||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,r,a){this.mSet=this.mSet||this.set,this.set=W_,this.m=n,this.mt=a,this.tween=r},s}();Xe(lo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return so[s]=1}),en.TweenMax=en.TweenLite=Ae,en.TimelineLite=en.TimelineMax=je,ue=new je({sortChildren:!1,defaults:hr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),tn.stringFilter=Gc;var ra={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return C_(r)})},timeline:function(t){return new je(t)},getTweensOf:function(t,e){return ue.getTweensOf(t,e)},getProperty:function(t,e,n,r){Te(t)&&(t=hn(t)[0]);var a=Pi(t||{}).get,u=n?Sc:wc;return n==="native"&&(n=""),t&&(e?u((nn[e]&&nn[e].get||a)(t,e,n,r)):function(c,p,d){return u((nn[c]&&nn[c].get||a)(t,c,p,d))})},quickSetter:function(t,e,n){if(t=hn(t),t.length>1){var r=t.map(function(f){return Pn.quickSetter(f,e,n)}),a=r.length;return function(f){for(var m=a;m--;)r[m](f)}}t=t[0]||{};var u=nn[e],c=Pi(t),p=c.harness&&(c.harness.aliases||{})[e]||e,d=u?function(f){var m=new u;_r._pt=0,m.init(t,n?f+n:f,_r,0,[t]),m.render(1,m),_r._pt&&bo(1,_r)}:c.set(t,p);return u?d:function(f){return d(t,p,n?f+n:f,c,1)}},isTweening:function(t){return ue.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Li(t.ease,hr.ease)),Ec(hr,t||{})},config:function(t){return Ec(tn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,a=t.defaults,u=t.extendTimeline;(r||"").split(",").forEach(function(c){return c&&!nn[c]&&!en[c]&&$s(e+" effect requires "+c+" plugin.")}),oo[e]=function(c,p,d){return n(hn(c),cn(p||{},a),d)},u&&(je.prototype[e]=function(c,p,d){return this.add(oo[e](c,Hn(p)?p:(d=p)&&{},this),d)})},registerEase:function(t,e){Xt[t]=Li(e)},parseEase:function(t,e){return arguments.length?Li(t,e):Xt},getById:function(t){return ue.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new je(t),r,a;for(n.smoothChildTiming=We(t.smoothChildTiming),ue.remove(n),n._dp=0,n._time=n._tTime=ue._time,r=ue._first;r;)a=r._next,(e||!(!r._dur&&r instanceof Ae&&r.vars.onComplete===r._targets[0]))&&An(n,r,r._start-r._delay),r=a;return An(ue,n,0),n},utils:{wrap:E_,wrapYoyo:y_,distribute:Uc,random:Fc,snap:Ic,normalize:S_,getUnit:qe,clamp:v_,splitColor:kc,toArray:hn,selector:b_,mapRange:Oc,pipe:M_,unitize:w_,interpolate:T_,shuffle:Dc},install:_c,effects:oo,ticker:pn,updateRoot:je.updateRoot,plugins:nn,globalTimeline:ue,core:{PropTween:Ke,globals:gc,Tween:Ae,Timeline:je,Animation:Jr,getCache:Pi,_removeLinkedListItem:ta,suppressOverwrites:function(t){return Za=t}}};Xe("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ra[s]=Ae[s]}),pn.add(je.updateRoot),_r=ra.to({},{duration:0});var X_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},q_=function(t,e){var n=t._targets,r,a,u;for(r in e)for(a=n.length;a--;)u=t._ptLookup[a][r],u&&(u=u.d)&&(u._pt&&(u=X_(u,r)),u&&u.modifier&&u.modifier(e[r],t,n[a],r))},Mo=function(t,e){return{name:t,rawVars:1,init:function(r,a,u){u._onInit=function(c){var p,d;if(Te(a)&&(p={},Xe(a,function(f){return p[f]=1}),a=p),e){p={};for(d in a)p[d]=e(a[d]);a=p}q_(c,a)}}}},Pn=ra.registerPlugin({name:"attr",init:function(t,e,n,r,a){var u,c;for(u in e)c=this.add(t,"setAttribute",(t.getAttribute(u)||0)+"",e[u],r,a,0,0,u),c&&(c.op=u),this._props.push(u)}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n])}},Mo("roundProps",po),Mo("modifiers"),Mo("snap",Ic))||ra;Ae.version=je.version=Pn.version="3.9.1",mc=1,uc()&&gr(),Xt.Power0,Xt.Power1,Xt.Power2,Xt.Power3,Xt.Power4,Xt.Linear,Xt.Quad,Xt.Cubic,Xt.Quart,Xt.Quint,Xt.Strong,Xt.Elastic,Xt.Back,Xt.SteppedEase,Xt.Bounce,Xt.Sine,Xt.Expo,Xt.Circ;/*!
 * CSSPlugin 3.9.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var tu,ai,vr,wo,Ui,eu,j_=function(){return typeof window!="undefined"},oi={},Ii=180/Math.PI,xr=Math.PI/180,br=Math.atan2,nu=1e8,iu=/([A-Z])/g,K_=/(?:left|right|width|margin|padding|x)/i,Y_=/[\s,\(]\S/,li={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ru=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},$_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Z_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},J_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},su=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},au=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Q_=function(t,e,n){return t.style[e]=n},tg=function(t,e,n){return t.style.setProperty(e,n)},eg=function(t,e,n){return t._gsap[e]=n},ng=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},ig=function(t,e,n,r,a){var u=t._gsap;u.scaleX=u.scaleY=n,u.renderTransform(a,u)},rg=function(t,e,n,r,a){var u=t._gsap;u[e]=n,u.renderTransform(a,u)},De="transform",ci=De+"Origin",ou,So=function(t,e){var n=ai.createElementNS?ai.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ai.createElement(t);return n.style?n:ai.createElement(t)},Xn=function s(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(iu,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&s(t,Mr(e)||e,1)||""},lu="O,Moz,ms,Ms,Webkit".split(","),Mr=function(t,e,n){var r=e||Ui,a=r.style,u=5;if(t in a&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);u--&&!(lu[u]+t in a););return u<0?null:(u===3?"ms":u>=0?lu[u]:"")+t},Eo=function(){j_()&&window.document&&(tu=window,ai=tu.document,vr=ai.documentElement,Ui=So("div")||{style:{}},So("div"),De=Mr(De),ci=De+"Origin",Ui.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ou=!!Mr("perspective"),wo=1)},yo=function s(t){var e=So("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,a=this.style.cssText,u;if(vr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{u=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(u=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),vr.removeChild(e),this.style.cssText=a,u},cu=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},uu=function(t){var e;try{e=t.getBBox()}catch{e=yo.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===yo||(e=yo.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+cu(t,["x","cx","x1"])||0,y:+cu(t,["y","cy","y1"])||0,width:0,height:0}:e},hu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&uu(t))},ts=function(t,e){if(e){var n=t.style;e in oi&&e!==ci&&(e=De),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(iu,"-$1").toLowerCase())):n.removeAttribute(e)}},ui=function(t,e,n,r,a,u){var c=new Ke(t._pt,e,n,0,1,u?au:su);return t._pt=c,c.b=r,c.e=a,t._props.push(n),c},du={deg:1,rad:1,turn:1},hi=function s(t,e,n,r){var a=parseFloat(n)||0,u=(n+"").trim().substr((a+"").length)||"px",c=Ui.style,p=K_.test(e),d=t.tagName.toLowerCase()==="svg",f=(d?"client":"offset")+(p?"Width":"Height"),m=100,g=r==="px",v=r==="%",w,x,b,_;return r===u||!a||du[r]||du[u]?a:(u!=="px"&&!g&&(a=s(t,e,n,"px")),_=t.getCTM&&hu(t),(v||u==="%")&&(oi[e]||~e.indexOf("adius"))?(w=_?t.getBBox()[p?"width":"height"]:t[f],ve(v?a/w*m:a/100*w)):(c[p?"width":"height"]=m+(g?u:r),x=~e.indexOf("adius")||r==="em"&&t.appendChild&&!d?t:t.parentNode,_&&(x=(t.ownerSVGElement||{}).parentNode),(!x||x===ai||!x.appendChild)&&(x=ai.body),b=x._gsap,b&&v&&b.width&&p&&b.time===pn.time?ve(a/b.width*m):((v||u==="%")&&(c.position=Xn(t,"position")),x===t&&(c.position="static"),x.appendChild(Ui),w=Ui[f],x.removeChild(Ui),c.position="absolute",p&&v&&(b=Pi(x),b.time=pn.time,b.width=x[f]),ve(g?w*a/m:w&&a?m/w*a:0))))},Fi=function(t,e,n,r){var a;return wo||Eo(),e in li&&e!=="transform"&&(e=li[e],~e.indexOf(",")&&(e=e.split(",")[0])),oi[e]&&e!=="transform"?(a=ns(t,r),a=e!=="transformOrigin"?a[e]:a.svg?a.origin:aa(Xn(t,ci))+" "+a.zOrigin+"px"):(a=t.style[e],(!a||a==="auto"||r||~(a+"").indexOf("calc("))&&(a=sa[e]&&sa[e](t,e,n)||Xn(t,e)||bc(t,e)||(e==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?hi(t,e,a,n)+n:a},sg=function(t,e,n,r){if(!n||n==="none"){var a=Mr(e,t,1),u=a&&Xn(t,a,1);u&&u!==n?(e=a,n=u):e==="borderColor"&&(n=Xn(t,"borderTopColor"))}var c=new Ke(this._pt,t.style,e,0,1,Jc),p=0,d=0,f,m,g,v,w,x,b,_,y,E,C,T,P;if(c.b=n,c.e=r,n+="",r+="",r==="auto"&&(t.style[e]=r,r=Xn(t,e)||r,t.style[e]=n),f=[n,r],Gc(f),n=f[0],r=f[1],g=n.match(dr)||[],P=r.match(dr)||[],P.length){for(;m=dr.exec(r);)b=m[0],y=r.substring(p,m.index),w?w=(w+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(w=1),b!==(x=g[d++]||"")&&(v=parseFloat(x)||0,C=x.substr((v+"").length),T=b.charAt(1)==="="?+(b.charAt(0)+"1"):0,T&&(b=b.substr(2)),_=parseFloat(b),E=b.substr((_+"").length),p=dr.lastIndex-E.length,E||(E=E||tn.units[e]||C,p===r.length&&(r+=E,c.e+=E)),C!==E&&(v=hi(t,e,x,E)||0),c._pt={_next:c._pt,p:y||d===1?y:",",s:v,c:T?T*_:_-v,m:w&&w<4||e==="zIndex"?Math.round:0});c.c=p<r.length?r.substring(p,r.length):""}else c.r=e==="display"&&r==="none"?au:su;return pc.test(r)&&(c.e=0),this._pt=c,c},pu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ag=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=pu[n]||n,e[1]=pu[r]||r,e.join(" ")},og=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,a=e.u,u=n._gsap,c,p,d;if(a==="all"||a===!0)r.cssText="",p=1;else for(a=a.split(","),d=a.length;--d>-1;)c=a[d],oi[c]&&(p=1,c=c==="transformOrigin"?ci:De),ts(n,c);p&&(ts(n,De),u&&(u.svg&&n.removeAttribute("transform"),ns(n,1),u.uncache=1))}},sa={clearProps:function(t,e,n,r,a){if(a.data!=="isFromStart"){var u=t._pt=new Ke(t._pt,e,n,0,0,og);return u.u=r,u.pr=-10,u.tween=a,t._props.push(n),1}}},es=[1,0,0,1,0,0],fu={},mu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},_u=function(t){var e=Xn(t,De);return mu(e)?es:e.substr(7).match(dc).map(ve)},To=function(t,e){var n=t._gsap||Pi(t),r=t.style,a=_u(t),u,c,p,d;return n.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,a=[p.a,p.b,p.c,p.d,p.e,p.f],a.join(",")==="1,0,0,1,0,0"?es:a):(a===es&&!t.offsetParent&&t!==vr&&!n.svg&&(p=r.display,r.display="block",u=t.parentNode,(!u||!t.offsetParent)&&(d=1,c=t.nextSibling,vr.appendChild(t)),a=_u(t),p?r.display=p:ts(t,"display"),d&&(c?u.insertBefore(t,c):u?u.appendChild(t):vr.removeChild(t))),e&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Co=function(t,e,n,r,a,u){var c=t._gsap,p=a||To(t,!0),d=c.xOrigin||0,f=c.yOrigin||0,m=c.xOffset||0,g=c.yOffset||0,v=p[0],w=p[1],x=p[2],b=p[3],_=p[4],y=p[5],E=e.split(" "),C=parseFloat(E[0])||0,T=parseFloat(E[1])||0,P,U,F,S;n?p!==es&&(U=v*b-w*x)&&(F=C*(b/U)+T*(-x/U)+(x*y-b*_)/U,S=C*(-w/U)+T*(v/U)-(v*y-w*_)/U,C=F,T=S):(P=uu(t),C=P.x+(~E[0].indexOf("%")?C/100*P.width:C),T=P.y+(~(E[1]||E[0]).indexOf("%")?T/100*P.height:T)),r||r!==!1&&c.smooth?(_=C-d,y=T-f,c.xOffset=m+(_*v+y*x)-_,c.yOffset=g+(_*w+y*b)-y):c.xOffset=c.yOffset=0,c.xOrigin=C,c.yOrigin=T,c.smooth=!!r,c.origin=e,c.originIsAbsolute=!!n,t.style[ci]="0px 0px",u&&(ui(u,c,"xOrigin",d,C),ui(u,c,"yOrigin",f,T),ui(u,c,"xOffset",m,c.xOffset),ui(u,c,"yOffset",g,c.yOffset)),t.setAttribute("data-svg-origin",C+" "+T)},ns=function(t,e){var n=t._gsap||new qc(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,a=n.scaleX<0,u="px",c="deg",p=Xn(t,ci)||"0",d,f,m,g,v,w,x,b,_,y,E,C,T,P,U,F,S,L,q,Q,k,H,X,nt,j,z,it,rt,_t,ut,K,Y;return d=f=m=w=x=b=_=y=E=0,g=v=1,n.svg=!!(t.getCTM&&hu(t)),P=To(t,n.svg),n.svg&&(nt=(!n.uncache||p==="0px 0px")&&!e&&t.getAttribute("data-svg-origin"),Co(t,nt||p,!!nt||n.originIsAbsolute,n.smooth!==!1,P)),C=n.xOrigin||0,T=n.yOrigin||0,P!==es&&(L=P[0],q=P[1],Q=P[2],k=P[3],d=H=P[4],f=X=P[5],P.length===6?(g=Math.sqrt(L*L+q*q),v=Math.sqrt(k*k+Q*Q),w=L||q?br(q,L)*Ii:0,_=Q||k?br(Q,k)*Ii+w:0,_&&(v*=Math.abs(Math.cos(_*xr))),n.svg&&(d-=C-(C*L+T*Q),f-=T-(C*q+T*k))):(Y=P[6],ut=P[7],it=P[8],rt=P[9],_t=P[10],K=P[11],d=P[12],f=P[13],m=P[14],U=br(Y,_t),x=U*Ii,U&&(F=Math.cos(-U),S=Math.sin(-U),nt=H*F+it*S,j=X*F+rt*S,z=Y*F+_t*S,it=H*-S+it*F,rt=X*-S+rt*F,_t=Y*-S+_t*F,K=ut*-S+K*F,H=nt,X=j,Y=z),U=br(-Q,_t),b=U*Ii,U&&(F=Math.cos(-U),S=Math.sin(-U),nt=L*F-it*S,j=q*F-rt*S,z=Q*F-_t*S,K=k*S+K*F,L=nt,q=j,Q=z),U=br(q,L),w=U*Ii,U&&(F=Math.cos(U),S=Math.sin(U),nt=L*F+q*S,j=H*F+X*S,q=q*F-L*S,X=X*F-H*S,L=nt,H=j),x&&Math.abs(x)+Math.abs(w)>359.9&&(x=w=0,b=180-b),g=ve(Math.sqrt(L*L+q*q+Q*Q)),v=ve(Math.sqrt(X*X+Y*Y)),U=br(H,X),_=Math.abs(U)>2e-4?U*Ii:0,E=K?1/(K<0?-K:K):0),n.svg&&(nt=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!mu(Xn(t,De)),nt&&t.setAttribute("transform",nt))),Math.abs(_)>90&&Math.abs(_)<270&&(a?(g*=-1,_+=w<=0?180:-180,w+=w<=0?180:-180):(v*=-1,_+=_<=0?180:-180)),n.x=d-((n.xPercent=d&&(n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-d)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+u,n.y=f-((n.yPercent=f&&(n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+u,n.z=m+u,n.scaleX=ve(g),n.scaleY=ve(v),n.rotation=ve(w)+c,n.rotationX=ve(x)+c,n.rotationY=ve(b)+c,n.skewX=_+c,n.skewY=y+c,n.transformPerspective=E+u,(n.zOrigin=parseFloat(p.split(" ")[2])||0)&&(r[ci]=aa(p)),n.xOffset=n.yOffset=0,n.force3D=tn.force3D,n.renderTransform=n.svg?cg:ou?gu:lg,n.uncache=0,n},aa=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ao=function(t,e,n){var r=qe(e);return ve(parseFloat(e)+parseFloat(hi(t,"x",n+"px",r)))+r},lg=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,gu(t,e)},Ni="0deg",is="0px",Oi=") ",gu=function(t,e){var n=e||this,r=n.xPercent,a=n.yPercent,u=n.x,c=n.y,p=n.z,d=n.rotation,f=n.rotationY,m=n.rotationX,g=n.skewX,v=n.skewY,w=n.scaleX,x=n.scaleY,b=n.transformPerspective,_=n.force3D,y=n.target,E=n.zOrigin,C="",T=_==="auto"&&t&&t!==1||_===!0;if(E&&(m!==Ni||f!==Ni)){var P=parseFloat(f)*xr,U=Math.sin(P),F=Math.cos(P),S;P=parseFloat(m)*xr,S=Math.cos(P),u=Ao(y,u,U*S*-E),c=Ao(y,c,-Math.sin(P)*-E),p=Ao(y,p,F*S*-E+E)}b!==is&&(C+="perspective("+b+Oi),(r||a)&&(C+="translate("+r+"%, "+a+"%) "),(T||u!==is||c!==is||p!==is)&&(C+=p!==is||T?"translate3d("+u+", "+c+", "+p+") ":"translate("+u+", "+c+Oi),d!==Ni&&(C+="rotate("+d+Oi),f!==Ni&&(C+="rotateY("+f+Oi),m!==Ni&&(C+="rotateX("+m+Oi),(g!==Ni||v!==Ni)&&(C+="skew("+g+", "+v+Oi),(w!==1||x!==1)&&(C+="scale("+w+", "+x+Oi),y.style[De]=C||"translate(0, 0)"},cg=function(t,e){var n=e||this,r=n.xPercent,a=n.yPercent,u=n.x,c=n.y,p=n.rotation,d=n.skewX,f=n.skewY,m=n.scaleX,g=n.scaleY,v=n.target,w=n.xOrigin,x=n.yOrigin,b=n.xOffset,_=n.yOffset,y=n.forceCSS,E=parseFloat(u),C=parseFloat(c),T,P,U,F,S;p=parseFloat(p),d=parseFloat(d),f=parseFloat(f),f&&(f=parseFloat(f),d+=f,p+=f),p||d?(p*=xr,d*=xr,T=Math.cos(p)*m,P=Math.sin(p)*m,U=Math.sin(p-d)*-g,F=Math.cos(p-d)*g,d&&(f*=xr,S=Math.tan(d-f),S=Math.sqrt(1+S*S),U*=S,F*=S,f&&(S=Math.tan(f),S=Math.sqrt(1+S*S),T*=S,P*=S)),T=ve(T),P=ve(P),U=ve(U),F=ve(F)):(T=m,F=g,P=U=0),(E&&!~(u+"").indexOf("px")||C&&!~(c+"").indexOf("px"))&&(E=hi(v,"x",u,"px"),C=hi(v,"y",c,"px")),(w||x||b||_)&&(E=ve(E+w-(w*T+x*U)+b),C=ve(C+x-(w*P+x*F)+_)),(r||a)&&(S=v.getBBox(),E=ve(E+r/100*S.width),C=ve(C+a/100*S.height)),S="matrix("+T+","+P+","+U+","+F+","+E+","+C+")",v.setAttribute("transform",S),y&&(v.style[De]=S)},ug=function(t,e,n,r,a,u){var c=360,p=Te(a),d=parseFloat(a)*(p&&~a.indexOf("rad")?Ii:1),f=u?d*u:d-r,m=r+f+"deg",g,v;return p&&(g=a.split("_")[1],g==="short"&&(f%=c,f!==f%(c/2)&&(f+=f<0?c:-c)),g==="cw"&&f<0?f=(f+c*nu)%c-~~(f/c)*c:g==="ccw"&&f>0&&(f=(f-c*nu)%c-~~(f/c)*c)),t._pt=v=new Ke(t._pt,e,n,r,f,$_),v.e=m,v.u="deg",t._props.push(n),v},vu=function(t,e){for(var n in e)t[n]=e[n];return t},hg=function(t,e,n){var r=vu({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",u=n.style,c,p,d,f,m,g,v,w;r.svg?(d=n.getAttribute("transform"),n.setAttribute("transform",""),u[De]=e,c=ns(n,1),ts(n,De),n.setAttribute("transform",d)):(d=getComputedStyle(n)[De],u[De]=e,c=ns(n,1),u[De]=d);for(p in oi)d=r[p],f=c[p],d!==f&&a.indexOf(p)<0&&(v=qe(d),w=qe(f),m=v!==w?hi(n,p,d,w):parseFloat(d),g=parseFloat(f),t._pt=new Ke(t._pt,c,p,m,g-m,ru),t._pt.u=w||0,t._props.push(p));vu(c,r)};Xe("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",r="Bottom",a="Left",u=(t<3?[e,n,r,a]:[e+a,e+n,r+n,r+a]).map(function(c){return t<2?s+c:"border"+c+s});sa[t>1?"border"+s:s]=function(c,p,d,f,m){var g,v;if(arguments.length<4)return g=u.map(function(w){return Fi(c,w,d)}),v=g.join(" "),v.split(g[0]).length===5?g[0]:v;g=(f+"").split(" "),v={},u.forEach(function(w,x){return v[w]=g[x]=g[x]||g[(x-1)/2|0]}),c.init(p,v,m)}});var xu={name:"css",register:Eo,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,a){var u=this._props,c=t.style,p=n.vars.startAt,d,f,m,g,v,w,x,b,_,y,E,C,T,P,U;wo||Eo();for(x in e)if(x!=="autoRound"&&(f=e[x],!(nn[x]&&jc(x,e,n,r,t,a)))){if(v=typeof f,w=sa[x],v==="function"&&(f=f.call(n,r,t,a),v=typeof f),v==="string"&&~f.indexOf("random(")&&(f=Yr(f)),w)w(this,t,x,f,n)&&(U=1);else if(x.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(x)+"").trim(),f+="",ri.lastIndex=0,ri.test(d)||(b=qe(d),_=qe(f)),_?b!==_&&(d=hi(t,x,d,_)+_):b&&(f+=b),this.add(c,"setProperty",d,f,r,a,0,0,x),u.push(x);else if(v!=="undefined"){if(p&&x in p?(d=typeof p[x]=="function"?p[x].call(n,r,t,a):p[x],Te(d)&&~d.indexOf("random(")&&(d=Yr(d)),qe(d+"")||(d+=tn.units[x]||qe(Fi(t,x))||""),(d+"").charAt(1)==="="&&(d=Fi(t,x))):d=Fi(t,x),g=parseFloat(d),y=v==="string"&&f.charAt(1)==="="?+(f.charAt(0)+"1"):0,y&&(f=f.substr(2)),m=parseFloat(f),x in li&&(x==="autoAlpha"&&(g===1&&Fi(t,"visibility")==="hidden"&&m&&(g=0),ui(this,c,"visibility",g?"inherit":"hidden",m?"inherit":"hidden",!m)),x!=="scale"&&x!=="transform"&&(x=li[x],~x.indexOf(",")&&(x=x.split(",")[0]))),E=x in oi,E){if(C||(T=t._gsap,T.renderTransform&&!e.parseTransform||ns(t,e.parseTransform),P=e.smoothOrigin!==!1&&T.smooth,C=this._pt=new Ke(this._pt,c,De,0,1,T.renderTransform,T,0,-1),C.dep=1),x==="scale")this._pt=new Ke(this._pt,T,"scaleY",T.scaleY,(y?y*m:m-T.scaleY)||0),u.push("scaleY",x),x+="X";else if(x==="transformOrigin"){f=ag(f),T.svg?Co(t,f,0,P,0,this):(_=parseFloat(f.split(" ")[2])||0,_!==T.zOrigin&&ui(this,T,"zOrigin",T.zOrigin,_),ui(this,c,x,aa(d),aa(f)));continue}else if(x==="svgOrigin"){Co(t,f,1,P,0,this);continue}else if(x in fu){ug(this,T,x,g,f,y);continue}else if(x==="smoothOrigin"){ui(this,T,"smooth",T.smooth,f);continue}else if(x==="force3D"){T[x]=f;continue}else if(x==="transform"){hg(this,f,t);continue}}else x in c||(x=Mr(x)||x);if(E||(m||m===0)&&(g||g===0)&&!Y_.test(f)&&x in c)b=(d+"").substr((g+"").length),m||(m=0),_=qe(f)||(x in tn.units?tn.units[x]:b),b!==_&&(g=hi(t,x,d,_)),this._pt=new Ke(this._pt,E?T:c,x,g,y?y*m:m-g,!E&&(_==="px"||x==="zIndex")&&e.autoRound!==!1?J_:ru),this._pt.u=_||0,b!==_&&_!=="%"&&(this._pt.b=d,this._pt.r=Z_);else if(x in c)sg.call(this,t,x,d,f);else if(x in t)this.add(t,x,d||t[x],f,r,a);else{ro(x,f);continue}u.push(x)}}U&&Qc(this)},get:Fi,aliases:li,getSetter:function(t,e,n){var r=li[e];return r&&r.indexOf(",")<0&&(e=r),e in oi&&e!==ci&&(t._gsap.x||Fi(t,"x"))?n&&eu===n?e==="scale"?ng:eg:(eu=n||{})&&(e==="scale"?ig:rg):t.style&&!Qa(t.style[e])?Q_:~e.indexOf("-")?tg:xo(t,e)},core:{_removeProperty:ts,_getMatrix:To}};Pn.utils.checkPrefix=Mr,function(s,t,e,n){var r=Xe(s+","+t+","+e,function(a){oi[a]=1});Xe(t,function(a){tn.units[a]="deg",fu[a]=1}),li[r[13]]=s+","+t,Xe(n,function(a){var u=a.split(":");li[u[1]]=r[u[0]]})}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),Xe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){tn.units[s]="px"}),Pn.registerPlugin(xu);var wr=Pn.registerPlugin(xu)||Pn;wr.core.Tween;var dg=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Po={exports:{}};/*! Tweakpane 3.1.10 (c) 2016 cocopon, licensed under the MIT license. */(function(s,t){(function(e,n){n(t)})(dg,function(e){class n{constructor(i){const[o,h]=i.split("-"),M=o.split(".");this.major=parseInt(M[0],10),this.minor=parseInt(M[1],10),this.patch=parseInt(M[2],10),this.prerelease=h!=null?h:null}toString(){const i=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[i,this.prerelease].join("-"):i}}class r{constructor(i){this.controller_=i}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(i){this.controller_.viewProps.set("disabled",i)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(i){this.controller_.viewProps.set("hidden",i)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class a{constructor(i){this.target=i}}class u extends a{constructor(i,o,h,M){super(i),this.value=o,this.presetKey=h,this.last=M!=null?M:!0}}class c extends a{constructor(i,o,h){super(i),this.value=o,this.presetKey=h}}class p extends a{constructor(i,o){super(i),this.expanded=o}}class d extends a{constructor(i,o){super(i),this.index=o}}function f(l){return l}function m(l){return l==null}function g(l,i){if(l.length!==i.length)return!1;for(let o=0;o<l.length;o++)if(l[o]!==i[o])return!1;return!0}function v(l,i){let o=l;do{const h=Object.getOwnPropertyDescriptor(o,i);if(h&&(h.set!==void 0||h.writable===!0))return!0;o=Object.getPrototypeOf(o)}while(o!==null);return!1}const w={alreadydisposed:()=>"View has been already disposed",invalidparams:l=>`Invalid parameters for '${l.name}'`,nomatchingcontroller:l=>`No matching controller for '${l.key}'`,nomatchingview:l=>`No matching view for '${JSON.stringify(l.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:l=>`Property '${l.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class x{static alreadyDisposed(){return new x({type:"alreadydisposed"})}static notBindable(){return new x({type:"notbindable"})}static propertyNotFound(i){return new x({type:"propertynotfound",context:{name:i}})}static shouldNeverHappen(){return new x({type:"shouldneverhappen"})}constructor(i){var o;this.message=(o=w[i.type](i.context))!==null&&o!==void 0?o:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=i.type}}class b{constructor(i,o,h){this.obj_=i,this.key_=o,this.presetKey_=h!=null?h:o}static isBindable(i){return!(i===null||typeof i!="object"&&typeof i!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(i){this.obj_[this.key_]=i}writeProperty(i,o){const h=this.read();if(!b.isBindable(h))throw x.notBindable();if(!(i in h))throw x.propertyNotFound(i);h[i]=o}}class _ extends r{get label(){return this.controller_.props.get("label")}set label(i){this.controller_.props.set("label",i)}get title(){var i;return(i=this.controller_.valueController.props.get("title"))!==null&&i!==void 0?i:""}set title(i){this.controller_.valueController.props.set("title",i)}on(i,o){const h=o.bind(this);return this.controller_.valueController.emitter.on(i,()=>{h(new a(this))}),this}}class y{constructor(){this.observers_={}}on(i,o){let h=this.observers_[i];return h||(h=this.observers_[i]=[]),h.push({handler:o}),this}off(i,o){const h=this.observers_[i];return h&&(this.observers_[i]=h.filter(M=>M.handler!==o)),this}emit(i,o){const h=this.observers_[i];!h||h.forEach(M=>{M.handler(o)})}}const E="tp";function C(l){return(o,h)=>[E,"-",l,"v",o?`_${o}`:"",h?`-${h}`:""].join("")}function T(l,i){return o=>i(l(o))}function P(l){return l.rawValue}function U(l,i){l.emitter.on("change",T(P,i)),i(l.rawValue)}function F(l,i,o){U(l.value(i),o)}function S(l,i,o){o?l.classList.add(i):l.classList.remove(i)}function L(l,i){return o=>{S(l,i,o)}}function q(l,i){U(l,o=>{i.textContent=o!=null?o:""})}const Q=C("btn");class k{constructor(i,o){this.element=i.createElement("div"),this.element.classList.add(Q()),o.viewProps.bindClassModifiers(this.element);const h=i.createElement("button");h.classList.add(Q("b")),o.viewProps.bindDisabled(h),this.element.appendChild(h),this.buttonElement=h;const M=i.createElement("div");M.classList.add(Q("t")),q(o.props.value("title"),M),this.buttonElement.appendChild(M)}}class H{constructor(i,o){this.emitter=new y,this.onClick_=this.onClick_.bind(this),this.props=o.props,this.viewProps=o.viewProps,this.view=new k(i,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class X{constructor(i,o){var h;this.constraint_=o==null?void 0:o.constraint,this.equals_=(h=o==null?void 0:o.equals)!==null&&h!==void 0?h:(M,I)=>M===I,this.emitter=new y,this.rawValue_=i}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(i){this.setRawValue(i,{forceEmit:!1,last:!0})}setRawValue(i,o){const h=o!=null?o:{forceEmit:!1,last:!0},M=this.constraint_?this.constraint_.constrain(i):i,I=this.rawValue_;!!this.equals_(I,M)&&!h.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=M,this.emitter.emit("change",{options:h,previousRawValue:I,rawValue:M,sender:this}))}}class nt{constructor(i){this.emitter=new y,this.value_=i}get rawValue(){return this.value_}set rawValue(i){this.setRawValue(i,{forceEmit:!1,last:!0})}setRawValue(i,o){const h=o!=null?o:{forceEmit:!1,last:!0},M=this.value_;M===i&&!h.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=i,this.emitter.emit("change",{options:h,previousRawValue:M,rawValue:this.value_,sender:this}))}}function j(l,i){const o=i==null?void 0:i.constraint,h=i==null?void 0:i.equals;return!o&&!h?new nt(l):new X(l,i)}class z{constructor(i){this.emitter=new y,this.valMap_=i;for(const o in this.valMap_)this.valMap_[o].emitter.on("change",()=>{this.emitter.emit("change",{key:o,sender:this})})}static createCore(i){return Object.keys(i).reduce((h,M)=>Object.assign(h,{[M]:j(i[M])}),{})}static fromObject(i){const o=this.createCore(i);return new z(o)}get(i){return this.valMap_[i].rawValue}set(i,o){this.valMap_[i].rawValue=o}value(i){return this.valMap_[i]}}function it(l,i){const h=Object.keys(i).reduce((M,I)=>{if(M===void 0)return;const B=i[I],ot=B(l[I]);return ot.succeeded?Object.assign(Object.assign({},M),{[I]:ot.value}):void 0},{});return h}function rt(l,i){return l.reduce((o,h)=>{if(o===void 0)return;const M=i(h);if(!(!M.succeeded||M.value===void 0))return[...o,M.value]},[])}function _t(l){return l===null?!1:typeof l=="object"}function ut(l){return i=>o=>{if(!i&&o===void 0)return{succeeded:!1,value:void 0};if(i&&o===void 0)return{succeeded:!0,value:void 0};const h=l(o);return h!==void 0?{succeeded:!0,value:h}:{succeeded:!1,value:void 0}}}function K(l){return{custom:i=>ut(i)(l),boolean:ut(i=>typeof i=="boolean"?i:void 0)(l),number:ut(i=>typeof i=="number"?i:void 0)(l),string:ut(i=>typeof i=="string"?i:void 0)(l),function:ut(i=>typeof i=="function"?i:void 0)(l),constant:i=>ut(o=>o===i?i:void 0)(l),raw:ut(i=>i)(l),object:i=>ut(o=>{if(!!_t(o))return it(o,i)})(l),array:i=>ut(o=>{if(!!Array.isArray(o))return rt(o,i)})(l)}}const Y={optional:K(!0),required:K(!1)};function lt(l,i){const o=Y.required.object(i)(l);return o.succeeded?o.value:void 0}function ft(l){console.warn([`Missing '${l.key}' of ${l.target} in ${l.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function O(l){return l&&l.parentElement&&l.parentElement.removeChild(l),null}class Lt{constructor(i){this.value_=i}static create(i){return[new Lt(i),(o,h)=>{i.setRawValue(o,h)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const Dt=C("");function ht(l,i){return L(l,Dt(void 0,i))}class Mt extends z{constructor(i){var o;super(i),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=Lt.create(j(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(o=this.get("parent"))===null||o===void 0||o.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(i){var o,h,M;const I=i!=null?i:{};return new Mt(z.createCore({disabled:(o=I.disabled)!==null&&o!==void 0?o:!1,disposed:!1,hidden:(h=I.hidden)!==null&&h!==void 0?h:!1,parent:(M=I.parent)!==null&&M!==void 0?M:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(i){U(this.globalDisabled_,ht(i,"disabled")),F(this,"hidden",ht(i,"hidden"))}bindDisabled(i){U(this.globalDisabled_,o=>{i.disabled=o})}bindTabIndex(i){U(this.globalDisabled_,o=>{i.tabIndex=o?-1:0})}handleDispose(i){this.value("disposed").emitter.on("change",o=>{o&&i()})}getGlobalDisabled_(){const i=this.get("parent");return(i?i.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(i){var o;const h=i.previousRawValue;h==null||h.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(o=this.get("parent"))===null||o===void 0||o.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function $t(){return["veryfirst","first","last","verylast"]}const St=C(""),Vt={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class ae{constructor(i){this.parent_=null,this.blade=i.blade,this.view=i.view,this.viewProps=i.viewProps;const o=this.view.element;this.blade.value("positions").emitter.on("change",()=>{$t().forEach(h=>{o.classList.remove(St(void 0,Vt[h]))}),this.blade.get("positions").forEach(h=>{o.classList.add(St(void 0,Vt[h]))})}),this.viewProps.handleDispose(()=>{O(o)})}get parent(){return this.parent_}set parent(i){if(this.parent_=i,!("parent"in this.viewProps.valMap_)){ft({key:"parent",target:Mt.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const ie="http://www.w3.org/2000/svg";function he(l){l.offsetHeight}function _e(l,i){const o=l.style.transition;l.style.transition="none",i(),l.style.transition=o}function jt(l){return l.ontouchstart!==void 0}function oe(){return globalThis}function Be(){return oe().document}function D(l){const i=l.ownerDocument.defaultView;return i&&"document"in i?l.getContext("2d",{willReadFrequently:!0}):null}const A={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function $(l,i){const o=l.createElementNS(ie,"svg");return o.innerHTML=A[i],o}function at(l,i,o){l.insertBefore(i,l.children[o])}function ct(l){l.parentElement&&l.parentElement.removeChild(l)}function pt(l){for(;l.children.length>0;)l.removeChild(l.children[0])}function Pt(l){for(;l.childNodes.length>0;)l.removeChild(l.childNodes[0])}function gt(l){return l.relatedTarget?l.relatedTarget:"explicitOriginalTarget"in l?l.explicitOriginalTarget:null}const tt=C("lbl");function wt(l,i){const o=l.createDocumentFragment();return i.split(`
`).map(M=>l.createTextNode(M)).forEach((M,I)=>{I>0&&o.appendChild(l.createElement("br")),o.appendChild(M)}),o}class yt{constructor(i,o){this.element=i.createElement("div"),this.element.classList.add(tt()),o.viewProps.bindClassModifiers(this.element);const h=i.createElement("div");h.classList.add(tt("l")),F(o.props,"label",I=>{m(I)?this.element.classList.add(tt(void 0,"nol")):(this.element.classList.remove(tt(void 0,"nol")),Pt(h),h.appendChild(wt(i,I)))}),this.element.appendChild(h),this.labelElement=h;const M=i.createElement("div");M.classList.add(tt("v")),this.element.appendChild(M),this.valueElement=M}}class Tt extends ae{constructor(i,o){const h=o.valueController.viewProps;super(Object.assign(Object.assign({},o),{view:new yt(i,{props:o.props,viewProps:h}),viewProps:h})),this.props=o.props,this.valueController=o.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const vt={id:"button",type:"blade",accept(l){const i=Y,o=lt(l,{title:i.required.string,view:i.required.constant("button"),label:i.optional.string});return o?{params:o}:null},controller(l){return new Tt(l.document,{blade:l.blade,props:z.fromObject({label:l.params.label}),valueController:new H(l.document,{props:z.fromObject({title:l.params.title}),viewProps:l.viewProps})})},api(l){return!(l.controller instanceof Tt)||!(l.controller.valueController instanceof H)?null:new _(l.controller)}};class xt extends ae{constructor(i){super(i),this.value=i.value}}function Nt(){return new z({positions:j([],{equals:g})})}class qt extends z{constructor(i){super(i)}static create(i){const o={completed:!0,expanded:i,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},h=z.createCore(o);return new qt(h)}get styleExpanded(){var i;return(i=this.get("temporaryExpanded"))!==null&&i!==void 0?i:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const i=this.get("expandedHeight");return this.get("shouldFixHeight")&&!m(i)?`${i}px`:"auto"}bindExpandedClass(i,o){const h=()=>{this.styleExpanded?i.classList.add(o):i.classList.remove(o)};F(this,"expanded",h),F(this,"temporaryExpanded",h)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function de(l,i){let o=0;return _e(i,()=>{l.set("expandedHeight",null),l.set("temporaryExpanded",!0),he(i),o=i.clientHeight,l.set("temporaryExpanded",null),he(i)}),o}function N(l,i){i.style.height=l.styleHeight}function Z(l,i){l.value("expanded").emitter.on("beforechange",()=>{if(l.set("completed",!1),m(l.get("expandedHeight"))){const o=de(l,i);o>0&&l.set("expandedHeight",o)}l.set("shouldFixHeight",!0),he(i)}),l.emitter.on("change",()=>{N(l,i)}),N(l,i),i.addEventListener("transitionend",o=>{o.propertyName==="height"&&l.cleanUpTransition()})}class st extends r{constructor(i,o){super(i),this.rackApi_=o}}function mt(l,i){return l.addBlade(Object.assign(Object.assign({},i),{view:"button"}))}function bt(l,i){return l.addBlade(Object.assign(Object.assign({},i),{view:"folder"}))}function ee(l,i){const o=i!=null?i:{};return l.addBlade(Object.assign(Object.assign({},o),{view:"separator"}))}function ne(l,i){return l.addBlade(Object.assign(Object.assign({},i),{view:"tab"}))}class xe{constructor(i){this.emitter=new y,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=i}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(i){for(const o of this.allItems())if(i(o))return o;return null}includes(i){return this.cache_.has(i)}add(i,o){if(this.includes(i))throw x.shouldNeverHappen();const h=o!==void 0?o:this.items_.length;this.items_.splice(h,0,i),this.cache_.add(i);const M=this.extract_(i);M&&(M.emitter.on("add",this.onSubListAdd_),M.emitter.on("remove",this.onSubListRemove_),M.allItems().forEach(I=>{this.cache_.add(I)})),this.emitter.emit("add",{index:h,item:i,root:this,target:this})}remove(i){const o=this.items_.indexOf(i);if(o<0)return;this.items_.splice(o,1),this.cache_.delete(i);const h=this.extract_(i);h&&(h.emitter.off("add",this.onSubListAdd_),h.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:o,item:i,root:this,target:this})}onSubListAdd_(i){this.cache_.add(i.item),this.emitter.emit("add",{index:i.index,item:i.item,root:this,target:i.target})}onSubListRemove_(i){this.cache_.delete(i.item),this.emitter.emit("remove",{index:i.index,item:i.item,root:this,target:i.target})}}class fn extends r{constructor(i){super(i),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new y,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(i){this.controller_.props.set("label",i)}on(i,o){const h=o.bind(this);return this.emitter_.on(i,M=>{h(M.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(i){const o=i.sender.target.read();this.emitter_.emit("change",{event:new u(this,o,this.controller_.binding.target.presetKey,i.options.last)})}}class Kt extends Tt{constructor(i,o){super(i,o),this.binding=o.binding}}class ke extends r{constructor(i){super(i),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new y,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(i){this.controller_.props.set("label",i)}on(i,o){const h=o.bind(this);return this.emitter_.on(i,M=>{h(M.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(i){const o=i.sender.target.read();this.emitter_.emit("update",{event:new c(this,o,this.controller_.binding.target.presetKey)})}}class we extends Tt{constructor(i,o){super(i,o),this.binding=o.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function Sr(l){return l instanceof Er?l.apiSet_:l instanceof st?l.rackApi_.apiSet_:null}function di(l,i){const o=l.find(h=>h.controller_===i);if(!o)throw x.shouldNeverHappen();return o}function oa(l,i,o){if(!b.isBindable(l))throw x.notBindable();return new b(l,i,o)}class Er extends r{constructor(i,o){super(i),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new y,this.apiSet_=new xe(Sr),this.pool_=o;const h=this.controller_.rack;h.emitter.on("add",this.onRackAdd_),h.emitter.on("remove",this.onRackRemove_),h.emitter.on("inputchange",this.onRackInputChange_),h.emitter.on("monitorupdate",this.onRackMonitorUpdate_),h.children.forEach(M=>{this.setUpApi_(M)})}get children(){return this.controller_.rack.children.map(i=>di(this.apiSet_,i))}addInput(i,o,h){const M=h!=null?h:{},I=this.controller_.view.element.ownerDocument,B=this.pool_.createInput(I,oa(i,o,M.presetKey),M),ot=new fn(B);return this.add(ot,M.index)}addMonitor(i,o,h){const M=h!=null?h:{},I=this.controller_.view.element.ownerDocument,B=this.pool_.createMonitor(I,oa(i,o),M),ot=new ke(B);return this.add(ot,M.index)}addFolder(i){return bt(this,i)}addButton(i){return mt(this,i)}addSeparator(i){return ee(this,i)}addTab(i){return ne(this,i)}add(i,o){this.controller_.rack.add(i.controller_,o);const h=this.apiSet_.find(M=>M.controller_===i.controller_);return h&&this.apiSet_.remove(h),this.apiSet_.add(i),i}remove(i){this.controller_.rack.remove(i.controller_)}addBlade(i){const o=this.controller_.view.element.ownerDocument,h=this.pool_.createBlade(o,i),M=this.pool_.createBladeApi(h);return this.add(M,i.index)}on(i,o){const h=o.bind(this);return this.emitter_.on(i,M=>{h(M.event)}),this}setUpApi_(i){this.apiSet_.find(h=>h.controller_===i)||this.apiSet_.add(this.pool_.createBladeApi(i))}onRackAdd_(i){this.setUpApi_(i.bladeController)}onRackRemove_(i){if(i.isRoot){const o=di(this.apiSet_,i.bladeController);this.apiSet_.remove(o)}}onRackInputChange_(i){const o=i.bladeController;if(o instanceof Kt){const h=di(this.apiSet_,o),M=o.binding;this.emitter_.emit("change",{event:new u(h,M.target.read(),M.target.presetKey,i.options.last)})}else if(o instanceof xt){const h=di(this.apiSet_,o);this.emitter_.emit("change",{event:new u(h,o.value.rawValue,void 0,i.options.last)})}}onRackMonitorUpdate_(i){if(!(i.bladeController instanceof we))throw x.shouldNeverHappen();const o=di(this.apiSet_,i.bladeController),h=i.bladeController.binding;this.emitter_.emit("update",{event:new c(o,h.target.read(),h.target.presetKey)})}}class rs extends st{constructor(i,o){super(i,new Er(i.rackController,o)),this.emitter_=new y,this.controller_.foldable.value("expanded").emitter.on("change",h=>{this.emitter_.emit("fold",{event:new p(this,h.sender.rawValue)})}),this.rackApi_.on("change",h=>{this.emitter_.emit("change",{event:h})}),this.rackApi_.on("update",h=>{this.emitter_.emit("update",{event:h})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(i){this.controller_.foldable.set("expanded",i)}get title(){return this.controller_.props.get("title")}set title(i){this.controller_.props.set("title",i)}get children(){return this.rackApi_.children}addInput(i,o,h){return this.rackApi_.addInput(i,o,h)}addMonitor(i,o,h){return this.rackApi_.addMonitor(i,o,h)}addFolder(i){return this.rackApi_.addFolder(i)}addButton(i){return this.rackApi_.addButton(i)}addSeparator(i){return this.rackApi_.addSeparator(i)}addTab(i){return this.rackApi_.addTab(i)}add(i,o){return this.rackApi_.add(i,o)}remove(i){this.rackApi_.remove(i)}addBlade(i){return this.rackApi_.addBlade(i)}on(i,o){const h=o.bind(this);return this.emitter_.on(i,M=>{h(M.event)}),this}}class R extends ae{constructor(i){super({blade:i.blade,view:i.view,viewProps:i.rackController.viewProps}),this.rackController=i.rackController}}class G{constructor(i,o){const h=C(o.viewName);this.element=i.createElement("div"),this.element.classList.add(h()),o.viewProps.bindClassModifiers(this.element)}}function J(l,i){for(let o=0;o<l.length;o++){const h=l[o];if(h instanceof Kt&&h.binding===i)return h}return null}function V(l,i){for(let o=0;o<l.length;o++){const h=l[o];if(h instanceof we&&h.binding===i)return h}return null}function et(l,i){for(let o=0;o<l.length;o++){const h=l[o];if(h instanceof xt&&h.value===i)return h}return null}function Et(l){return l instanceof It?l.rack:l instanceof R?l.rackController.rack:null}function Ct(l){const i=Et(l);return i?i.bcSet_:null}class Ut{constructor(i){var o,h;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new y,this.blade_=(o=i.blade)!==null&&o!==void 0?o:null,(h=this.blade_)===null||h===void 0||h.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=i.viewProps,this.bcSet_=new xe(Ct),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(i,o){var h;(h=i.parent)===null||h===void 0||h.remove(i),v(i,"parent")?i.parent=this:(i.parent_=this,ft({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(i,o)}remove(i){v(i,"parent")?i.parent=null:(i.parent_=null,ft({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(i)}find(i){return this.bcSet_.allItems().filter(o=>o instanceof i)}onSetAdd_(i){this.updatePositions_();const o=i.target===i.root;if(this.emitter.emit("add",{bladeController:i.item,index:i.index,isRoot:o,sender:this}),!o)return;const h=i.item;if(h.viewProps.emitter.on("change",this.onChildViewPropsChange_),h.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),h.viewProps.handleDispose(this.onChildDispose_),h instanceof Kt)h.binding.emitter.on("change",this.onChildInputChange_);else if(h instanceof we)h.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(h instanceof xt)h.value.emitter.on("change",this.onChildValueChange_);else{const M=Et(h);if(M){const I=M.emitter;I.on("layout",this.onDescendantLayout_),I.on("inputchange",this.onDescendantInputChange_),I.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(i){this.updatePositions_();const o=i.target===i.root;if(this.emitter.emit("remove",{bladeController:i.item,isRoot:o,sender:this}),!o)return;const h=i.item;if(h instanceof Kt)h.binding.emitter.off("change",this.onChildInputChange_);else if(h instanceof we)h.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(h instanceof xt)h.value.emitter.off("change",this.onChildValueChange_);else{const M=Et(h);if(M){const I=M.emitter;I.off("layout",this.onDescendantLayout_),I.off("inputchange",this.onDescendantInputChange_),I.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const i=this.bcSet_.items.filter(M=>!M.viewProps.get("hidden")),o=i[0],h=i[i.length-1];this.bcSet_.items.forEach(M=>{const I=[];M===o&&(I.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&I.push("veryfirst")),M===h&&(I.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&I.push("verylast")),M.blade.set("positions",I)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(i){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(o=>o.viewProps.get("disposed")).forEach(o=>{this.bcSet_.remove(o)})}onChildInputChange_(i){const o=J(this.find(Kt),i.sender);if(!o)throw x.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:o,options:i.options,sender:this})}onChildMonitorUpdate_(i){const o=V(this.find(we),i.sender);if(!o)throw x.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:o,sender:this})}onChildValueChange_(i){const o=et(this.find(xt),i.sender);if(!o)throw x.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:o,options:i.options,sender:this})}onDescendantLayout_(i){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(i){this.emitter.emit("inputchange",{bladeController:i.bladeController,options:i.options,sender:this})}onDescendantMonitorUpdate_(i){this.emitter.emit("monitorupdate",{bladeController:i.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class It extends ae{constructor(i,o){super(Object.assign(Object.assign({},o),{view:new G(i,{viewName:"brk",viewProps:o.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const h=new Ut({blade:o.root?void 0:o.blade,viewProps:o.viewProps});h.emitter.on("add",this.onRackAdd_),h.emitter.on("remove",this.onRackRemove_),this.rack=h,this.viewProps.handleDispose(()=>{for(let M=this.rack.children.length-1;M>=0;M--)this.rack.children[M].viewProps.set("disposed",!0)})}onRackAdd_(i){!i.isRoot||at(this.view.element,i.bladeController.view.element,i.index)}onRackRemove_(i){!i.isRoot||ct(i.bladeController.view.element)}}const Ot=C("cnt");class zt{constructor(i,o){var h;this.className_=C((h=o.viewName)!==null&&h!==void 0?h:"fld"),this.element=i.createElement("div"),this.element.classList.add(this.className_(),Ot()),o.viewProps.bindClassModifiers(this.element),this.foldable_=o.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),F(this.foldable_,"completed",L(this.element,this.className_(void 0,"cpl")));const M=i.createElement("button");M.classList.add(this.className_("b")),F(o.props,"title",Rt=>{m(Rt)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),o.viewProps.bindDisabled(M),this.element.appendChild(M),this.buttonElement=M;const I=i.createElement("div");I.classList.add(this.className_("i")),this.element.appendChild(I);const B=i.createElement("div");B.classList.add(this.className_("t")),q(o.props.value("title"),B),this.buttonElement.appendChild(B),this.titleElement=B;const ot=i.createElement("div");ot.classList.add(this.className_("m")),this.buttonElement.appendChild(ot);const At=o.containerElement;At.classList.add(this.className_("c")),this.element.appendChild(At),this.containerElement=At}}class Bt extends R{constructor(i,o){var h;const M=qt.create((h=o.expanded)!==null&&h!==void 0?h:!0),I=new It(i,{blade:o.blade,root:o.root,viewProps:o.viewProps});super(Object.assign(Object.assign({},o),{rackController:I,view:new zt(i,{containerElement:I.view.element,foldable:M,props:o.props,viewName:o.root?"rot":void 0,viewProps:o.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=o.props,this.foldable=M,Z(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Qt={id:"folder",type:"blade",accept(l){const i=Y,o=lt(l,{title:i.required.string,view:i.required.constant("folder"),expanded:i.optional.boolean});return o?{params:o}:null},controller(l){return new Bt(l.document,{blade:l.blade,expanded:l.params.expanded,props:z.fromObject({title:l.params.title}),viewProps:l.viewProps})},api(l){return l.controller instanceof Bt?new rs(l.controller,l.pool):null}};class pe extends xt{constructor(i,o){const h=o.valueController.viewProps;super(Object.assign(Object.assign({},o),{value:o.valueController.value,view:new yt(i,{props:o.props,viewProps:h}),viewProps:h})),this.props=o.props,this.valueController=o.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Ye extends r{}const Ln=C("spr");class fe{constructor(i,o){this.element=i.createElement("div"),this.element.classList.add(Ln()),o.viewProps.bindClassModifiers(this.element);const h=i.createElement("hr");h.classList.add(Ln("r")),this.element.appendChild(h)}}class Gt extends ae{constructor(i,o){super(Object.assign(Object.assign({},o),{view:new fe(i,{viewProps:o.viewProps})}))}}const ss={id:"separator",type:"blade",accept(l){const o=lt(l,{view:Y.required.constant("separator")});return o?{params:o}:null},controller(l){return new Gt(l.document,{blade:l.blade,viewProps:l.viewProps})},api(l){return l.controller instanceof Gt?new Ye(l.controller):null}},le=C("tbi");class qn{constructor(i,o){this.element=i.createElement("div"),this.element.classList.add(le()),o.viewProps.bindClassModifiers(this.element),F(o.props,"selected",I=>{I?this.element.classList.add(le(void 0,"sel")):this.element.classList.remove(le(void 0,"sel"))});const h=i.createElement("button");h.classList.add(le("b")),o.viewProps.bindDisabled(h),this.element.appendChild(h),this.buttonElement=h;const M=i.createElement("div");M.classList.add(le("t")),q(o.props.value("title"),M),this.buttonElement.appendChild(M),this.titleElement=M}}class la{constructor(i,o){this.emitter=new y,this.onClick_=this.onClick_.bind(this),this.props=o.props,this.viewProps=o.viewProps,this.view=new qn(i,{props:o.props,viewProps:o.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class pi{constructor(i,o){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new la(i,{props:o.itemProps,viewProps:Mt.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new It(i,{blade:Nt(),viewProps:Mt.create()}),this.props=o.props,F(this.props,"selected",h=>{this.itemController.props.set("selected",h),this.contentController.viewProps.set("hidden",!h)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class yr{constructor(i,o){this.controller_=i,this.rackApi_=o}get title(){var i;return(i=this.controller_.itemController.props.get("title"))!==null&&i!==void 0?i:""}set title(i){this.controller_.itemController.props.set("title",i)}get selected(){return this.controller_.props.get("selected")}set selected(i){this.controller_.props.set("selected",i)}get children(){return this.rackApi_.children}addButton(i){return this.rackApi_.addButton(i)}addFolder(i){return this.rackApi_.addFolder(i)}addSeparator(i){return this.rackApi_.addSeparator(i)}addTab(i){return this.rackApi_.addTab(i)}add(i,o){this.rackApi_.add(i,o)}remove(i){this.rackApi_.remove(i)}addInput(i,o,h){return this.rackApi_.addInput(i,o,h)}addMonitor(i,o,h){return this.rackApi_.addMonitor(i,o,h)}addBlade(i){return this.rackApi_.addBlade(i)}}class Pe extends st{constructor(i,o){super(i,new Er(i.rackController,o)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new y,this.pageApiMap_=new Map,this.rackApi_.on("change",h=>{this.emitter_.emit("change",{event:h})}),this.rackApi_.on("update",h=>{this.emitter_.emit("update",{event:h})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(h=>{this.setUpPageApi_(h)})}get pages(){return this.controller_.pageSet.items.map(i=>{const o=this.pageApiMap_.get(i);if(!o)throw x.shouldNeverHappen();return o})}addPage(i){const o=this.controller_.view.element.ownerDocument,h=new pi(o,{itemProps:z.fromObject({selected:!1,title:i.title}),props:z.fromObject({selected:!1})});this.controller_.add(h,i.index);const M=this.pageApiMap_.get(h);if(!M)throw x.shouldNeverHappen();return M}removePage(i){this.controller_.remove(i)}on(i,o){const h=o.bind(this);return this.emitter_.on(i,M=>{h(M.event)}),this}setUpPageApi_(i){const o=this.rackApi_.apiSet_.find(M=>M.controller_===i.contentController);if(!o)throw x.shouldNeverHappen();const h=new yr(i,o);this.pageApiMap_.set(i,h)}onPageAdd_(i){this.setUpPageApi_(i.item)}onPageRemove_(i){if(!this.pageApiMap_.get(i.item))throw x.shouldNeverHappen();this.pageApiMap_.delete(i.item)}onSelect_(i){this.emitter_.emit("select",{event:new d(this,i.rawValue)})}}const Dn=-1;class as{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=j(!0),this.selectedIndex=j(Dn),this.items_=[]}add(i,o){const h=o!=null?o:this.items_.length;this.items_.splice(h,0,i),i.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(i){const o=this.items_.indexOf(i);o<0||(this.items_.splice(o,1),i.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Dn,this.empty.rawValue=!0;return}const i=this.items_.findIndex(o=>o.rawValue);i<0?(this.items_.forEach((o,h)=>{o.rawValue=h===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((o,h)=>{o.rawValue=h===i}),this.selectedIndex.rawValue=i),this.empty.rawValue=!1}onItemSelectedChange_(i){if(i.rawValue){const o=this.items_.findIndex(h=>h===i.sender);this.items_.forEach((h,M)=>{h.rawValue=M===o}),this.selectedIndex.rawValue=o}else this.keepSelection_()}}const Se=C("tab");class os{constructor(i,o){this.element=i.createElement("div"),this.element.classList.add(Se(),Ot()),o.viewProps.bindClassModifiers(this.element),U(o.empty,L(this.element,Se(void 0,"nop")));const h=i.createElement("div");h.classList.add(Se("t")),this.element.appendChild(h),this.itemsElement=h;const M=i.createElement("div");M.classList.add(Se("i")),this.element.appendChild(M);const I=o.contentsElement;I.classList.add(Se("c")),this.element.appendChild(I),this.contentsElement=I}}class ca extends R{constructor(i,o){const h=new It(i,{blade:o.blade,viewProps:o.viewProps}),M=new as;super({blade:o.blade,rackController:h,view:new os(i,{contentsElement:h.view.element,empty:M.empty,viewProps:o.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new xe(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=M}get pageSet(){return this.pageSet_}add(i,o){this.pageSet_.add(i,o)}remove(i){this.pageSet_.remove(this.pageSet_.items[i])}onPageAdd_(i){const o=i.item;at(this.view.itemsElement,o.itemController.view.element,i.index),o.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(o.contentController,i.index),this.tab.add(o.props.value("selected"))}onPageRemove_(i){const o=i.item;ct(o.itemController.view.element),o.itemController.viewProps.set("parent",null),this.rackController.rack.remove(o.contentController),this.tab.remove(o.props.value("selected"))}}const ls={id:"tab",type:"blade",accept(l){const i=Y,o=lt(l,{pages:i.required.array(i.required.object({title:i.required.string})),view:i.required.constant("tab")});return!o||o.pages.length===0?null:{params:o}},controller(l){const i=new ca(l.document,{blade:l.blade,viewProps:l.viewProps});return l.params.pages.forEach(o=>{const h=new pi(l.document,{itemProps:z.fromObject({selected:!1,title:o.title}),props:z.fromObject({selected:!1})});i.add(h)}),i},api(l){return l.controller instanceof ca?new Pe(l.controller,l.pool):null}};function mg(l,i){const o=l.accept(i.params);if(!o)return null;const h=Y.optional.boolean(i.params.disabled).value,M=Y.optional.boolean(i.params.hidden).value;return l.controller({blade:Nt(),document:i.document,params:Object.assign(Object.assign({},o.params),{disabled:h,hidden:M}),viewProps:Mt.create({disabled:h,hidden:M})})}class _g{constructor(){this.disabled=!1,this.emitter=new y}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class gg{constructor(i,o){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=i,this.emitter=new y,this.interval_=o,this.setTimer_()}get disabled(){return this.disabled_}set disabled(i){this.disabled_=i,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const i=this.doc_.defaultView;i&&i.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const i=this.doc_.defaultView;i&&(this.timerId_=i.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class vg{constructor(i){this.onValueChange_=this.onValueChange_.bind(this),this.reader=i.reader,this.writer=i.writer,this.emitter=new y,this.value=i.value,this.value.emitter.on("change",this.onValueChange_),this.target=i.target,this.read()}read(){const i=this.target.read();i!==void 0&&(this.value.rawValue=this.reader(i))}write_(i){this.writer(this.target,i)}onValueChange_(i){this.write_(i.rawValue),this.emitter.emit("change",{options:i.options,rawValue:i.rawValue,sender:this})}}function bu(l,i){for(;l.length<i;)l.push(void 0)}function xg(l){const i=[];return bu(i,l),j(i)}function bg(l){const i=l.indexOf(void 0);return i<0?l:l.slice(0,i)}function Mg(l,i){const o=[...bg(l),i];return o.length>l.length?o.splice(0,o.length-l.length):bu(o,l.length),o}class wg{constructor(i){this.onTick_=this.onTick_.bind(this),this.reader_=i.reader,this.target=i.target,this.emitter=new y,this.value=i.value,this.ticker=i.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const i=this.target.read();if(i===void 0)return;const o=this.value.rawValue,h=this.reader_(i);this.value.rawValue=Mg(o,h),this.emitter.emit("update",{rawValue:h,sender:this})}onTick_(i){this.read()}}class cs{constructor(i){this.constraints=i}constrain(i){return this.constraints.reduce((o,h)=>h.constrain(o),i)}}function jn(l,i){if(l instanceof i)return l;if(l instanceof cs){const o=l.constraints.reduce((h,M)=>h||(M instanceof i?M:null),null);if(o)return o}return null}class Tr{constructor(i){this.values=z.fromObject({max:i.max,min:i.min})}constrain(i){const o=this.values.get("max"),h=this.values.get("min");return Math.min(Math.max(i,h),o)}}class us{constructor(i){this.values=z.fromObject({options:i})}get options(){return this.values.get("options")}constrain(i){const o=this.values.get("options");return o.length===0||o.filter(M=>M.value===i).length>0?i:o[0].value}}class Mu{constructor(i){this.values=z.fromObject({max:i.max,min:i.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(i){const o=this.values.get("max"),h=this.values.get("min");let M=i;return m(h)||(M=Math.max(M,h)),m(o)||(M=Math.min(M,o)),M}}class ua{constructor(i,o=0){this.step=i,this.origin=o}constrain(i){const o=this.origin%this.step,h=Math.round((i-o)/this.step);return o+h*this.step}}const Ro=C("lst");class Sg{constructor(i,o){this.onValueChange_=this.onValueChange_.bind(this),this.props_=o.props,this.element=i.createElement("div"),this.element.classList.add(Ro()),o.viewProps.bindClassModifiers(this.element);const h=i.createElement("select");h.classList.add(Ro("s")),o.viewProps.bindDisabled(h),this.element.appendChild(h),this.selectElement=h;const M=i.createElement("div");M.classList.add(Ro("m")),M.appendChild($(i,"dropdown")),this.element.appendChild(M),o.value.emitter.on("change",this.onValueChange_),this.value_=o.value,F(this.props_,"options",I=>{pt(this.selectElement),I.forEach(B=>{const ot=i.createElement("option");ot.textContent=B.text,this.selectElement.appendChild(ot)}),this.update_()})}update_(){const i=this.props_.get("options").map(o=>o.value);this.selectElement.selectedIndex=i.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class hs{constructor(i,o){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=o.props,this.value=o.value,this.viewProps=o.viewProps,this.view=new Sg(i,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(i){const o=i.currentTarget;this.value.rawValue=this.props.get("options")[o.selectedIndex].value}}const wu=C("pop");class Eg{constructor(i,o){this.element=i.createElement("div"),this.element.classList.add(wu()),o.viewProps.bindClassModifiers(this.element),U(o.shows,L(this.element,wu(void 0,"v")))}}class Su{constructor(i,o){this.shows=j(!1),this.viewProps=o.viewProps,this.view=new Eg(i,{shows:this.shows,viewProps:this.viewProps})}}const Eu=C("txt");class yg{constructor(i,o){this.onChange_=this.onChange_.bind(this),this.element=i.createElement("div"),this.element.classList.add(Eu()),o.viewProps.bindClassModifiers(this.element),this.props_=o.props,this.props_.emitter.on("change",this.onChange_);const h=i.createElement("input");h.classList.add(Eu("i")),h.type="text",o.viewProps.bindDisabled(h),this.element.appendChild(h),this.inputElement=h,o.value.emitter.on("change",this.onChange_),this.value_=o.value,this.refresh()}refresh(){const i=this.props_.get("formatter");this.inputElement.value=i(this.value_.rawValue)}onChange_(){this.refresh()}}class ha{constructor(i,o){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=o.parser,this.props=o.props,this.value=o.value,this.viewProps=o.viewProps,this.view=new yg(i,{props:o.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(i){const h=i.currentTarget.value,M=this.parser_(h);m(M)||(this.value.rawValue=M),this.view.refresh()}}function Tg(l){return String(l)}function yu(l){return l==="false"?!1:!!l}function Tu(l){return Tg(l)}class Cg{constructor(i){this.text=i}evaluate(){return Number(this.text)}toString(){return this.text}}const Ag={"**":(l,i)=>Math.pow(l,i),"*":(l,i)=>l*i,"/":(l,i)=>l/i,"%":(l,i)=>l%i,"+":(l,i)=>l+i,"-":(l,i)=>l-i,"<<":(l,i)=>l<<i,">>":(l,i)=>l>>i,">>>":(l,i)=>l>>>i,"&":(l,i)=>l&i,"^":(l,i)=>l^i,"|":(l,i)=>l|i};class Pg{constructor(i,o,h){this.left=o,this.operator=i,this.right=h}evaluate(){const i=Ag[this.operator];if(!i)throw new Error(`unexpected binary operator: '${this.operator}`);return i(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Rg={"+":l=>l,"-":l=>-l,"~":l=>~l};class Lg{constructor(i,o){this.operator=i,this.expression=o}evaluate(){const i=Rg[this.operator];if(!i)throw new Error(`unexpected unary operator: '${this.operator}`);return i(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Lo(l){return(i,o)=>{for(let h=0;h<l.length;h++){const M=l[h](i,o);if(M!=="")return M}return""}}function ds(l,i){var o;const h=l.substr(i).match(/^\s+/);return(o=h&&h[0])!==null&&o!==void 0?o:""}function Dg(l,i){const o=l.substr(i,1);return o.match(/^[1-9]$/)?o:""}function ps(l,i){var o;const h=l.substr(i).match(/^[0-9]+/);return(o=h&&h[0])!==null&&o!==void 0?o:""}function Ug(l,i){const o=ps(l,i);if(o!=="")return o;const h=l.substr(i,1);if(i+=1,h!=="-"&&h!=="+")return"";const M=ps(l,i);return M===""?"":h+M}function Do(l,i){const o=l.substr(i,1);if(i+=1,o.toLowerCase()!=="e")return"";const h=Ug(l,i);return h===""?"":o+h}function Cu(l,i){const o=l.substr(i,1);if(o==="0")return o;const h=Dg(l,i);return i+=h.length,h===""?"":h+ps(l,i)}function Ig(l,i){const o=Cu(l,i);if(i+=o.length,o==="")return"";const h=l.substr(i,1);if(i+=h.length,h!==".")return"";const M=ps(l,i);return i+=M.length,o+h+M+Do(l,i)}function Fg(l,i){const o=l.substr(i,1);if(i+=o.length,o!==".")return"";const h=ps(l,i);return i+=h.length,h===""?"":o+h+Do(l,i)}function Ng(l,i){const o=Cu(l,i);return i+=o.length,o===""?"":o+Do(l,i)}const Og=Lo([Ig,Fg,Ng]);function Bg(l,i){var o;const h=l.substr(i).match(/^[01]+/);return(o=h&&h[0])!==null&&o!==void 0?o:""}function kg(l,i){const o=l.substr(i,2);if(i+=o.length,o.toLowerCase()!=="0b")return"";const h=Bg(l,i);return h===""?"":o+h}function Vg(l,i){var o;const h=l.substr(i).match(/^[0-7]+/);return(o=h&&h[0])!==null&&o!==void 0?o:""}function zg(l,i){const o=l.substr(i,2);if(i+=o.length,o.toLowerCase()!=="0o")return"";const h=Vg(l,i);return h===""?"":o+h}function Gg(l,i){var o;const h=l.substr(i).match(/^[0-9a-f]+/i);return(o=h&&h[0])!==null&&o!==void 0?o:""}function Hg(l,i){const o=l.substr(i,2);if(i+=o.length,o.toLowerCase()!=="0x")return"";const h=Gg(l,i);return h===""?"":o+h}const Wg=Lo([kg,zg,Hg]),Xg=Lo([Wg,Og]);function qg(l,i){const o=Xg(l,i);return i+=o.length,o===""?null:{evaluable:new Cg(o),cursor:i}}function jg(l,i){const o=l.substr(i,1);if(i+=o.length,o!=="(")return null;const h=Pu(l,i);if(!h)return null;i=h.cursor,i+=ds(l,i).length;const M=l.substr(i,1);return i+=M.length,M!==")"?null:{evaluable:h.evaluable,cursor:i}}function Kg(l,i){var o;return(o=qg(l,i))!==null&&o!==void 0?o:jg(l,i)}function Au(l,i){const o=Kg(l,i);if(o)return o;const h=l.substr(i,1);if(i+=h.length,h!=="+"&&h!=="-"&&h!=="~")return null;const M=Au(l,i);return M?(i=M.cursor,{cursor:i,evaluable:new Lg(h,M.evaluable)}):null}function Yg(l,i,o){o+=ds(i,o).length;const h=l.filter(M=>i.startsWith(M,o))[0];return h?(o+=h.length,o+=ds(i,o).length,{cursor:o,operator:h}):null}function $g(l,i){return(o,h)=>{const M=l(o,h);if(!M)return null;h=M.cursor;let I=M.evaluable;for(;;){const B=Yg(i,o,h);if(!B)break;h=B.cursor;const ot=l(o,h);if(!ot)return null;h=ot.cursor,I=new Pg(B.operator,I,ot.evaluable)}return I?{cursor:h,evaluable:I}:null}}const Zg=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((l,i)=>$g(l,i),Au);function Pu(l,i){return i+=ds(l,i).length,Zg(l,i)}function Jg(l){const i=Pu(l,0);return!i||i.cursor+ds(l,i.cursor).length!==l.length?null:i.evaluable}function Kn(l){var i;const o=Jg(l);return(i=o==null?void 0:o.evaluate())!==null&&i!==void 0?i:null}function Ru(l){if(typeof l=="number")return l;if(typeof l=="string"){const i=Kn(l);if(!m(i))return i}return 0}function Qg(l){return String(l)}function Ue(l){return i=>i.toFixed(Math.max(Math.min(l,20),0))}const tv=Ue(0);function da(l){return tv(l)+"%"}function Lu(l){return String(l)}function Uo(l){return l}function fs({primary:l,secondary:i,forward:o,backward:h}){let M=!1;function I(B){M||(M=!0,B(),M=!1)}l.emitter.on("change",B=>{I(()=>{i.setRawValue(o(l,i),B.options)})}),i.emitter.on("change",B=>{I(()=>{l.setRawValue(h(l,i),B.options)}),I(()=>{i.setRawValue(o(l,i),B.options)})}),I(()=>{i.setRawValue(o(l,i),{forceEmit:!1,last:!0})})}function $e(l,i){const o=l*(i.altKey?.1:1)*(i.shiftKey?10:1);return i.upKey?+o:i.downKey?-o:0}function ms(l){return{altKey:l.altKey,downKey:l.key==="ArrowDown",shiftKey:l.shiftKey,upKey:l.key==="ArrowUp"}}function Yn(l){return{altKey:l.altKey,downKey:l.key==="ArrowLeft",shiftKey:l.shiftKey,upKey:l.key==="ArrowRight"}}function ev(l){return l==="ArrowUp"||l==="ArrowDown"}function Du(l){return ev(l)||l==="ArrowLeft"||l==="ArrowRight"}function Io(l,i){var o,h;const M=i.ownerDocument.defaultView,I=i.getBoundingClientRect();return{x:l.pageX-(((o=M&&M.scrollX)!==null&&o!==void 0?o:0)+I.left),y:l.pageY-(((h=M&&M.scrollY)!==null&&h!==void 0?h:0)+I.top)}}class Bi{constructor(i){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=i,this.emitter=new y,i.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),i.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),i.addEventListener("touchend",this.onTouchEnd_),i.addEventListener("mousedown",this.onMouseDown_)}computePosition_(i){const o=this.elem_.getBoundingClientRect();return{bounds:{width:o.width,height:o.height},point:i?{x:i.x,y:i.y}:null}}onMouseDown_(i){var o;i.preventDefault(),(o=i.currentTarget)===null||o===void 0||o.focus();const h=this.elem_.ownerDocument;h.addEventListener("mousemove",this.onDocumentMouseMove_),h.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:i.altKey,data:this.computePosition_(Io(i,this.elem_)),sender:this,shiftKey:i.shiftKey})}onDocumentMouseMove_(i){this.emitter.emit("move",{altKey:i.altKey,data:this.computePosition_(Io(i,this.elem_)),sender:this,shiftKey:i.shiftKey})}onDocumentMouseUp_(i){const o=this.elem_.ownerDocument;o.removeEventListener("mousemove",this.onDocumentMouseMove_),o.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:i.altKey,data:this.computePosition_(Io(i,this.elem_)),sender:this,shiftKey:i.shiftKey})}onTouchStart_(i){i.preventDefault();const o=i.targetTouches.item(0),h=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:i.altKey,data:this.computePosition_(o?{x:o.clientX-h.left,y:o.clientY-h.top}:void 0),sender:this,shiftKey:i.shiftKey}),this.lastTouch_=o}onTouchMove_(i){const o=i.targetTouches.item(0),h=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:i.altKey,data:this.computePosition_(o?{x:o.clientX-h.left,y:o.clientY-h.top}:void 0),sender:this,shiftKey:i.shiftKey}),this.lastTouch_=o}onTouchEnd_(i){var o;const h=(o=i.targetTouches.item(0))!==null&&o!==void 0?o:this.lastTouch_,M=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:i.altKey,data:this.computePosition_(h?{x:h.clientX-M.left,y:h.clientY-M.top}:void 0),sender:this,shiftKey:i.shiftKey})}}function ce(l,i,o,h,M){const I=(l-i)/(o-i);return h+I*(M-h)}function Uu(l){return String(l.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function Ee(l,i,o){return Math.min(Math.max(l,i),o)}function Iu(l,i){return(l%i+i)%i}const mn=C("txt");class nv{constructor(i,o){this.onChange_=this.onChange_.bind(this),this.props_=o.props,this.props_.emitter.on("change",this.onChange_),this.element=i.createElement("div"),this.element.classList.add(mn(),mn(void 0,"num")),o.arrayPosition&&this.element.classList.add(mn(void 0,o.arrayPosition)),o.viewProps.bindClassModifiers(this.element);const h=i.createElement("input");h.classList.add(mn("i")),h.type="text",o.viewProps.bindDisabled(h),this.element.appendChild(h),this.inputElement=h,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=o.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(mn()),this.inputElement.classList.add(mn("i"));const M=i.createElement("div");M.classList.add(mn("k")),this.element.appendChild(M),this.knobElement=M;const I=i.createElementNS(ie,"svg");I.classList.add(mn("g")),this.knobElement.appendChild(I);const B=i.createElementNS(ie,"path");B.classList.add(mn("gb")),I.appendChild(B),this.guideBodyElem_=B;const ot=i.createElementNS(ie,"path");ot.classList.add(mn("gh")),I.appendChild(ot),this.guideHeadElem_=ot;const At=i.createElement("div");At.classList.add(C("tt")()),this.knobElement.appendChild(At),this.tooltipElem_=At,o.value.emitter.on("change",this.onChange_),this.value=o.value,this.refresh()}onDraggingChange_(i){if(i.rawValue===null){this.element.classList.remove(mn(void 0,"drg"));return}this.element.classList.add(mn(void 0,"drg"));const o=i.rawValue/this.props_.get("draggingScale"),h=o+(o>0?-1:o<0?1:0),M=Ee(-h,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${h+M},0 L${h},4 L${h+M},8`,`M ${o},-1 L${o},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${o},4`);const I=this.props_.get("formatter");this.tooltipElem_.textContent=I(this.value.rawValue),this.tooltipElem_.style.left=`${o}px`}refresh(){const i=this.props_.get("formatter");this.inputElement.value=i(this.value.rawValue)}onChange_(){this.refresh()}}class _s{constructor(i,o){var h;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=o.baseStep,this.parser_=o.parser,this.props=o.props,this.sliderProps_=(h=o.sliderProps)!==null&&h!==void 0?h:null,this.value=o.value,this.viewProps=o.viewProps,this.dragging_=j(null),this.view=new nv(i,{arrayPosition:o.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const M=new Bi(this.view.knobElement);M.emitter.on("down",this.onPointerDown_),M.emitter.on("move",this.onPointerMove_),M.emitter.on("up",this.onPointerUp_)}constrainValue_(i){var o,h;const M=(o=this.sliderProps_)===null||o===void 0?void 0:o.get("minValue"),I=(h=this.sliderProps_)===null||h===void 0?void 0:h.get("maxValue");let B=i;return M!==void 0&&(B=Math.max(B,M)),I!==void 0&&(B=Math.min(B,I)),B}onInputChange_(i){const h=i.currentTarget.value,M=this.parser_(h);m(M)||(this.value.rawValue=this.constrainValue_(M)),this.view.refresh()}onInputKeyDown_(i){const o=$e(this.baseStep_,ms(i));o!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+o),{forceEmit:!1,last:!1})}onInputKeyUp_(i){$e(this.baseStep_,ms(i))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(i){if(!i.point)return null;const o=i.point.x-i.bounds.width/2;return this.constrainValue_(this.originRawValue_+o*this.props.get("draggingScale"))}onPointerMove_(i){const o=this.computeDraggingValue_(i.data);o!==null&&(this.value.setRawValue(o,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(i){const o=this.computeDraggingValue_(i.data);o!==null&&(this.value.setRawValue(o,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Fo=C("sld");class iv{constructor(i,o){this.onChange_=this.onChange_.bind(this),this.props_=o.props,this.props_.emitter.on("change",this.onChange_),this.element=i.createElement("div"),this.element.classList.add(Fo()),o.viewProps.bindClassModifiers(this.element);const h=i.createElement("div");h.classList.add(Fo("t")),o.viewProps.bindTabIndex(h),this.element.appendChild(h),this.trackElement=h;const M=i.createElement("div");M.classList.add(Fo("k")),this.trackElement.appendChild(M),this.knobElement=M,o.value.emitter.on("change",this.onChange_),this.value=o.value,this.update_()}update_(){const i=Ee(ce(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${i}%`}onChange_(){this.update_()}}class rv{constructor(i,o){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=o.baseStep,this.value=o.value,this.viewProps=o.viewProps,this.props=o.props,this.view=new iv(i,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Bi(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(i,o){!i.point||this.value.setRawValue(ce(Ee(i.point.x,0,i.bounds.width),0,i.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),o)}onPointerDownOrMove_(i){this.handlePointerEvent_(i.data,{forceEmit:!1,last:!1})}onPointerUp_(i){this.handlePointerEvent_(i.data,{forceEmit:!0,last:!0})}onKeyDown_(i){const o=$e(this.baseStep_,Yn(i));o!==0&&this.value.setRawValue(this.value.rawValue+o,{forceEmit:!1,last:!1})}onKeyUp_(i){$e(this.baseStep_,Yn(i))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const No=C("sldtxt");class sv{constructor(i,o){this.element=i.createElement("div"),this.element.classList.add(No());const h=i.createElement("div");h.classList.add(No("s")),this.sliderView_=o.sliderView,h.appendChild(this.sliderView_.element),this.element.appendChild(h);const M=i.createElement("div");M.classList.add(No("t")),this.textView_=o.textView,M.appendChild(this.textView_.element),this.element.appendChild(M)}}class Oo{constructor(i,o){this.value=o.value,this.viewProps=o.viewProps,this.sliderC_=new rv(i,{baseStep:o.baseStep,props:o.sliderProps,value:o.value,viewProps:this.viewProps}),this.textC_=new _s(i,{baseStep:o.baseStep,parser:o.parser,props:o.textProps,sliderProps:o.sliderProps,value:o.value,viewProps:o.viewProps}),this.view=new sv(i,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function gs(l,i){l.write(i)}function pa(l){const i=Y;if(Array.isArray(l))return i.required.array(i.required.object({text:i.required.string,value:i.required.raw}))(l).value;if(typeof l=="object")return i.required.raw(l).value}function Fu(l){if(l==="inline"||l==="popup")return l}function fi(l){const i=Y;return i.required.object({max:i.optional.number,min:i.optional.number,step:i.optional.number})(l).value}function Nu(l){if(Array.isArray(l))return l;const i=[];return Object.keys(l).forEach(o=>{i.push({text:o,value:l[o]})}),i}function Bo(l){return m(l)?null:new us(Nu(l))}function av(l){const i=l?jn(l,ua):null;return i?i.step:null}function fa(l,i){const o=l&&jn(l,ua);return o?Uu(o.step):Math.max(Uu(i),2)}function Cr(l){const i=av(l);return i!=null?i:1}function Ar(l,i){var o;const h=l&&jn(l,ua),M=Math.abs((o=h==null?void 0:h.step)!==null&&o!==void 0?o:i);return M===0?.1:Math.pow(10,Math.floor(Math.log10(M))-1)}const ma=C("ckb");class ov{constructor(i,o){this.onValueChange_=this.onValueChange_.bind(this),this.element=i.createElement("div"),this.element.classList.add(ma()),o.viewProps.bindClassModifiers(this.element);const h=i.createElement("label");h.classList.add(ma("l")),this.element.appendChild(h);const M=i.createElement("input");M.classList.add(ma("i")),M.type="checkbox",h.appendChild(M),this.inputElement=M,o.viewProps.bindDisabled(this.inputElement);const I=i.createElement("div");I.classList.add(ma("w")),h.appendChild(I);const B=$(i,"check");I.appendChild(B),o.value.emitter.on("change",this.onValueChange_),this.value=o.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class lv{constructor(i,o){this.onInputChange_=this.onInputChange_.bind(this),this.value=o.value,this.viewProps=o.viewProps,this.view=new ov(i,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(i){const o=i.currentTarget;this.value.rawValue=o.checked}}function cv(l){const i=[],o=Bo(l.options);return o&&i.push(o),new cs(i)}const uv={id:"input-bool",type:"input",accept:(l,i)=>{if(typeof l!="boolean")return null;const h=lt(i,{options:Y.optional.custom(pa)});return h?{initialValue:l,params:h}:null},binding:{reader:l=>yu,constraint:l=>cv(l.params),writer:l=>gs},controller:l=>{const i=l.document,o=l.value,h=l.constraint,M=h&&jn(h,us);return M?new hs(i,{props:new z({options:M.values.value("options")}),value:o,viewProps:l.viewProps}):new lv(i,{value:o,viewProps:l.viewProps})}},ki=C("col");class hv{constructor(i,o){this.element=i.createElement("div"),this.element.classList.add(ki()),o.foldable.bindExpandedClass(this.element,ki(void 0,"expanded")),F(o.foldable,"completed",L(this.element,ki(void 0,"cpl")));const h=i.createElement("div");h.classList.add(ki("h")),this.element.appendChild(h);const M=i.createElement("div");M.classList.add(ki("s")),h.appendChild(M),this.swatchElement=M;const I=i.createElement("div");if(I.classList.add(ki("t")),h.appendChild(I),this.textElement=I,o.pickerLayout==="inline"){const B=i.createElement("div");B.classList.add(ki("p")),this.element.appendChild(B),this.pickerElement=B}else this.pickerElement=null}}function dv(l,i,o){const h=Ee(l/255,0,1),M=Ee(i/255,0,1),I=Ee(o/255,0,1),B=Math.max(h,M,I),ot=Math.min(h,M,I),At=B-ot;let Rt=0,Yt=0;const Zt=(ot+B)/2;return At!==0&&(Yt=At/(1-Math.abs(B+ot-1)),h===B?Rt=(M-I)/At:M===B?Rt=2+(I-h)/At:Rt=4+(h-M)/At,Rt=Rt/6+(Rt<0?1:0)),[Rt*360,Yt*100,Zt*100]}function pv(l,i,o){const h=(l%360+360)%360,M=Ee(i/100,0,1),I=Ee(o/100,0,1),B=(1-Math.abs(2*I-1))*M,ot=B*(1-Math.abs(h/60%2-1)),At=I-B/2;let Rt,Yt,Zt;return h>=0&&h<60?[Rt,Yt,Zt]=[B,ot,0]:h>=60&&h<120?[Rt,Yt,Zt]=[ot,B,0]:h>=120&&h<180?[Rt,Yt,Zt]=[0,B,ot]:h>=180&&h<240?[Rt,Yt,Zt]=[0,ot,B]:h>=240&&h<300?[Rt,Yt,Zt]=[ot,0,B]:[Rt,Yt,Zt]=[B,0,ot],[(Rt+At)*255,(Yt+At)*255,(Zt+At)*255]}function fv(l,i,o){const h=Ee(l/255,0,1),M=Ee(i/255,0,1),I=Ee(o/255,0,1),B=Math.max(h,M,I),ot=Math.min(h,M,I),At=B-ot;let Rt;At===0?Rt=0:B===h?Rt=60*(((M-I)/At%6+6)%6):B===M?Rt=60*((I-h)/At+2):Rt=60*((h-M)/At+4);const Yt=B===0?0:At/B,Zt=B;return[Rt,Yt*100,Zt*100]}function Ou(l,i,o){const h=Iu(l,360),M=Ee(i/100,0,1),I=Ee(o/100,0,1),B=I*M,ot=B*(1-Math.abs(h/60%2-1)),At=I-B;let Rt,Yt,Zt;return h>=0&&h<60?[Rt,Yt,Zt]=[B,ot,0]:h>=60&&h<120?[Rt,Yt,Zt]=[ot,B,0]:h>=120&&h<180?[Rt,Yt,Zt]=[0,B,ot]:h>=180&&h<240?[Rt,Yt,Zt]=[0,ot,B]:h>=240&&h<300?[Rt,Yt,Zt]=[ot,0,B]:[Rt,Yt,Zt]=[B,0,ot],[(Rt+At)*255,(Yt+At)*255,(Zt+At)*255]}function mv(l,i,o){const h=o+i*(100-Math.abs(2*o-100))/200;return[l,h!==0?i*(100-Math.abs(2*o-100))/h:0,o+i*(100-Math.abs(2*o-100))/(2*100)]}function _v(l,i,o){const h=100-Math.abs(o*(200-i)/100-100);return[l,h!==0?i*o/h:0,o*(200-i)/(2*100)]}function Vi(l){return[l[0],l[1],l[2]]}function Bu(l,i){return[l[0],l[1],l[2],i]}const gv={hsl:{hsl:(l,i,o)=>[l,i,o],hsv:mv,rgb:pv},hsv:{hsl:_v,hsv:(l,i,o)=>[l,i,o],rgb:Ou},rgb:{hsl:dv,hsv:fv,rgb:(l,i,o)=>[l,i,o]}};function _a(l,i){return[i==="float"?1:l==="rgb"?255:360,i==="float"?1:l==="rgb"?255:100,i==="float"?1:l==="rgb"?255:100]}function vv(l,i){return l===i?i:Iu(l,i)}function xv(l,i,o){var h;const M=_a(i,o);return[i==="rgb"?Ee(l[0],0,M[0]):vv(l[0],M[0]),Ee(l[1],0,M[1]),Ee(l[2],0,M[2]),Ee((h=l[3])!==null&&h!==void 0?h:1,0,1)]}function ku(l,i,o,h){const M=_a(i,o),I=_a(i,h);return l.map((B,ot)=>B/M[ot]*I[ot])}function bv(l,i,o){const h=ku(l,i.mode,i.type,"int"),M=gv[i.mode][o.mode](...h);return ku(M,o.mode,"int",o.type)}function ga(l,i){return typeof l!="object"||m(l)?!1:i in l&&typeof l[i]=="number"}class Ht{static black(i="int"){return new Ht([0,0,0],"rgb",i)}static fromObject(i,o="int"){const h="a"in i?[i.r,i.g,i.b,i.a]:[i.r,i.g,i.b];return new Ht(h,"rgb",o)}static toRgbaObject(i,o="int"){return i.toRgbaObject(o)}static isRgbColorObject(i){return ga(i,"r")&&ga(i,"g")&&ga(i,"b")}static isRgbaColorObject(i){return this.isRgbColorObject(i)&&ga(i,"a")}static isColorObject(i){return this.isRgbColorObject(i)}static equals(i,o){if(i.mode!==o.mode)return!1;const h=i.comps_,M=o.comps_;for(let I=0;I<h.length;I++)if(h[I]!==M[I])return!1;return!0}constructor(i,o,h="int"){this.mode=o,this.type=h,this.comps_=xv(i,o,h)}getComponents(i,o="int"){return Bu(bv(Vi(this.comps_),{mode:this.mode,type:this.type},{mode:i!=null?i:this.mode,type:o}),this.comps_[3])}toRgbaObject(i="int"){const o=this.getComponents("rgb",i);return{r:o[0],g:o[1],b:o[2],a:o[3]}}}const mi=C("colp");class Mv{constructor(i,o){this.alphaViews_=null,this.element=i.createElement("div"),this.element.classList.add(mi()),o.viewProps.bindClassModifiers(this.element);const h=i.createElement("div");h.classList.add(mi("hsv"));const M=i.createElement("div");M.classList.add(mi("sv")),this.svPaletteView_=o.svPaletteView,M.appendChild(this.svPaletteView_.element),h.appendChild(M);const I=i.createElement("div");I.classList.add(mi("h")),this.hPaletteView_=o.hPaletteView,I.appendChild(this.hPaletteView_.element),h.appendChild(I),this.element.appendChild(h);const B=i.createElement("div");if(B.classList.add(mi("rgb")),this.textView_=o.textView,B.appendChild(this.textView_.element),this.element.appendChild(B),o.alphaViews){this.alphaViews_={palette:o.alphaViews.palette,text:o.alphaViews.text};const ot=i.createElement("div");ot.classList.add(mi("a"));const At=i.createElement("div");At.classList.add(mi("ap")),At.appendChild(this.alphaViews_.palette.element),ot.appendChild(At);const Rt=i.createElement("div");Rt.classList.add(mi("at")),Rt.appendChild(this.alphaViews_.text.element),ot.appendChild(Rt),this.element.appendChild(ot)}}get allFocusableElements(){const i=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(o=>o.inputElement)];return this.alphaViews_&&i.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),i}}function wv(l){return l==="int"?"int":l==="float"?"float":void 0}function ko(l){const i=Y;return lt(l,{alpha:i.optional.boolean,color:i.optional.object({alpha:i.optional.boolean,type:i.optional.custom(wv)}),expanded:i.optional.boolean,picker:i.optional.custom(Fu)})}function zi(l){return l?.1:1}function Gi(l){var i;return(i=l.color)===null||i===void 0?void 0:i.type}function Sv(l,i){return l.alpha===i.alpha&&l.mode===i.mode&&l.notation===i.notation&&l.type===i.type}function _n(l,i){const o=l.match(/^(.+)%$/);return Math.min(o?parseFloat(o[1])*.01*i:parseFloat(l),i)}const Ev={deg:l=>l,grad:l=>l*360/400,rad:l=>l*360/(2*Math.PI),turn:l=>l*360};function Vu(l){const i=l.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!i)return parseFloat(l);const o=parseFloat(i[1]),h=i[2];return Ev[h](o)}function zu(l){const i=l.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!i)return null;const o=[_n(i[1],255),_n(i[2],255),_n(i[3],255)];return isNaN(o[0])||isNaN(o[1])||isNaN(o[2])?null:o}function Gu(l){return i=>{const o=zu(i);return o?new Ht(o,"rgb",l):null}}function Hu(l){const i=l.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!i)return null;const o=[_n(i[1],255),_n(i[2],255),_n(i[3],255),_n(i[4],1)];return isNaN(o[0])||isNaN(o[1])||isNaN(o[2])||isNaN(o[3])?null:o}function Wu(l){return i=>{const o=Hu(i);return o?new Ht(o,"rgb",l):null}}function Xu(l){const i=l.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!i)return null;const o=[Vu(i[1]),_n(i[2],100),_n(i[3],100)];return isNaN(o[0])||isNaN(o[1])||isNaN(o[2])?null:o}function qu(l){return i=>{const o=Xu(i);return o?new Ht(o,"hsl",l):null}}function ju(l){const i=l.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!i)return null;const o=[Vu(i[1]),_n(i[2],100),_n(i[3],100),_n(i[4],1)];return isNaN(o[0])||isNaN(o[1])||isNaN(o[2])||isNaN(o[3])?null:o}function Ku(l){return i=>{const o=ju(i);return o?new Ht(o,"hsl",l):null}}function Yu(l){const i=l.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(i)return[parseInt(i[1]+i[1],16),parseInt(i[2]+i[2],16),parseInt(i[3]+i[3],16)];const o=l.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return o?[parseInt(o[1],16),parseInt(o[2],16),parseInt(o[3],16)]:null}function yv(l){const i=Yu(l);return i?new Ht(i,"rgb","int"):null}function $u(l){const i=l.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(i)return[parseInt(i[1]+i[1],16),parseInt(i[2]+i[2],16),parseInt(i[3]+i[3],16),ce(parseInt(i[4]+i[4],16),0,255,0,1)];const o=l.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return o?[parseInt(o[1],16),parseInt(o[2],16),parseInt(o[3],16),ce(parseInt(o[4],16),0,255,0,1)]:null}function Tv(l){const i=$u(l);return i?new Ht(i,"rgb","int"):null}function Zu(l){const i=l.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!i)return null;const o=[parseFloat(i[1]),parseFloat(i[2]),parseFloat(i[3])];return isNaN(o[0])||isNaN(o[1])||isNaN(o[2])?null:o}function Ju(l){return i=>{const o=Zu(i);return o?new Ht(o,"rgb",l):null}}function Qu(l){const i=l.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!i)return null;const o=[parseFloat(i[1]),parseFloat(i[2]),parseFloat(i[3]),parseFloat(i[4])];return isNaN(o[0])||isNaN(o[1])||isNaN(o[2])||isNaN(o[3])?null:o}function th(l){return i=>{const o=Qu(i);return o?new Ht(o,"rgb",l):null}}const Cv=[{parser:Yu,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:$u,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:zu,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Hu,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Xu,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:ju,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Zu,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Qu,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Av(l){return Cv.reduce((i,{parser:o,result:h})=>i||(o(l)?h:null),null)}function Vo(l,i="int"){const o=Av(l);return o?o.notation==="hex"&&i!=="float"?Object.assign(Object.assign({},o),{type:"int"}):o.notation==="func"?Object.assign(Object.assign({},o),{type:i}):null:null}const eh={int:[yv,Tv,Gu("int"),Wu("int"),qu("int"),Ku("int"),Ju("int"),th("int")],float:[Gu("float"),Wu("float"),qu("float"),Ku("float"),Ju("float"),th("float")]};function Pv(l){const i=eh[l];return o=>{if(typeof o!="string")return Ht.black(l);const h=i.reduce((M,I)=>M||I(o),null);return h!=null?h:Ht.black(l)}}function zo(l){const i=eh[l];return o=>i.reduce((h,M)=>h||M(o),null)}function nh(l){const i=Ee(Math.floor(l),0,255).toString(16);return i.length===1?`0${i}`:i}function ih(l,i="#"){const o=Vi(l.getComponents("rgb")).map(nh).join("");return`${i}${o}`}function Go(l,i="#"){const o=l.getComponents("rgb"),h=[o[0],o[1],o[2],o[3]*255].map(nh).join("");return`${i}${h}`}function rh(l,i){const o=Ue(i==="float"?2:0);return`rgb(${Vi(l.getComponents("rgb",i)).map(M=>o(M)).join(", ")})`}function Rv(l){return i=>rh(i,l)}function va(l,i){const o=Ue(2),h=Ue(i==="float"?2:0);return`rgba(${l.getComponents("rgb",i).map((I,B)=>(B===3?o:h)(I)).join(", ")})`}function Lv(l){return i=>va(i,l)}function Dv(l){const i=[Ue(0),da,da];return`hsl(${Vi(l.getComponents("hsl")).map((h,M)=>i[M](h)).join(", ")})`}function Uv(l){const i=[Ue(0),da,da,Ue(2)];return`hsla(${l.getComponents("hsl").map((h,M)=>i[M](h)).join(", ")})`}function sh(l,i){const o=Ue(i==="float"?2:0),h=["r","g","b"];return`{${Vi(l.getComponents("rgb",i)).map((I,B)=>`${h[B]}: ${o(I)}`).join(", ")}}`}function Iv(l){return i=>sh(i,l)}function ah(l,i){const o=Ue(2),h=Ue(i==="float"?2:0),M=["r","g","b","a"];return`{${l.getComponents("rgb",i).map((B,ot)=>{const At=ot===3?o:h;return`${M[ot]}: ${At(B)}`}).join(", ")}}`}function Fv(l){return i=>ah(i,l)}const Nv=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:ih},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Go},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Dv},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Uv},...["int","float"].reduce((l,i)=>[...l,{format:{alpha:!1,mode:"rgb",notation:"func",type:i},stringifier:Rv(i)},{format:{alpha:!0,mode:"rgb",notation:"func",type:i},stringifier:Lv(i)},{format:{alpha:!1,mode:"rgb",notation:"object",type:i},stringifier:Iv(i)},{format:{alpha:!0,mode:"rgb",notation:"object",type:i},stringifier:Fv(i)}],[])];function Ho(l){return Nv.reduce((i,o)=>i||(Sv(o.format,l)?o.stringifier:null),null)}const vs=C("apl");class Ov{constructor(i,o){this.onValueChange_=this.onValueChange_.bind(this),this.value=o.value,this.value.emitter.on("change",this.onValueChange_),this.element=i.createElement("div"),this.element.classList.add(vs()),o.viewProps.bindClassModifiers(this.element),o.viewProps.bindTabIndex(this.element);const h=i.createElement("div");h.classList.add(vs("b")),this.element.appendChild(h);const M=i.createElement("div");M.classList.add(vs("c")),h.appendChild(M),this.colorElem_=M;const I=i.createElement("div");I.classList.add(vs("m")),this.element.appendChild(I),this.markerElem_=I;const B=i.createElement("div");B.classList.add(vs("p")),this.markerElem_.appendChild(B),this.previewElem_=B,this.update_()}update_(){const i=this.value.rawValue,o=i.getComponents("rgb"),h=new Ht([o[0],o[1],o[2],0],"rgb"),M=new Ht([o[0],o[1],o[2],255],"rgb"),I=["to right",va(h),va(M)];this.colorElem_.style.background=`linear-gradient(${I.join(",")})`,this.previewElem_.style.backgroundColor=va(i);const B=ce(o[3],0,1,0,100);this.markerElem_.style.left=`${B}%`}onValueChange_(){this.update_()}}class Bv{constructor(i,o){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=o.value,this.viewProps=o.viewProps,this.view=new Ov(i,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Bi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(i,o){if(!i.point)return;const h=i.point.x/i.bounds.width,M=this.value.rawValue,[I,B,ot]=M.getComponents("hsv");this.value.setRawValue(new Ht([I,B,ot,h],"hsv"),o)}onPointerDown_(i){this.handlePointerEvent_(i.data,{forceEmit:!1,last:!1})}onPointerMove_(i){this.handlePointerEvent_(i.data,{forceEmit:!1,last:!1})}onPointerUp_(i){this.handlePointerEvent_(i.data,{forceEmit:!0,last:!0})}onKeyDown_(i){const o=$e(zi(!0),Yn(i));if(o===0)return;const h=this.value.rawValue,[M,I,B,ot]=h.getComponents("hsv");this.value.setRawValue(new Ht([M,I,B,ot+o],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(i){$e(zi(!0),Yn(i))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Pr=C("coltxt");function kv(l){const i=l.createElement("select"),o=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return i.appendChild(o.reduce((h,M)=>{const I=l.createElement("option");return I.textContent=M.text,I.value=M.value,h.appendChild(I),h},l.createDocumentFragment())),i}class Vv{constructor(i,o){this.element=i.createElement("div"),this.element.classList.add(Pr()),o.viewProps.bindClassModifiers(this.element);const h=i.createElement("div");h.classList.add(Pr("m")),this.modeElem_=kv(i),this.modeElem_.classList.add(Pr("ms")),h.appendChild(this.modeSelectElement),o.viewProps.bindDisabled(this.modeElem_);const M=i.createElement("div");M.classList.add(Pr("mm")),M.appendChild($(i,"dropdown")),h.appendChild(M),this.element.appendChild(h);const I=i.createElement("div");I.classList.add(Pr("w")),this.element.appendChild(I),this.textsElem_=I,this.textViews_=o.textViews,this.applyTextViews_(),U(o.colorMode,B=>{this.modeElem_.value=B})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(i){this.textViews_=i,this.applyTextViews_()}applyTextViews_(){pt(this.textsElem_);const i=this.element.ownerDocument;this.textViews_.forEach(o=>{const h=i.createElement("div");h.classList.add(Pr("c")),h.appendChild(o.element),this.textsElem_.appendChild(h)})}}function zv(l){return Ue(l==="float"?2:0)}function Gv(l,i,o){const h=_a(l,i)[o];return new Tr({min:0,max:h})}function Wo(l,i,o){return new _s(l,{arrayPosition:o===0?"fst":o===3-1?"lst":"mid",baseStep:zi(!1),parser:i.parser,props:z.fromObject({draggingScale:i.colorType==="float"?.01:1,formatter:zv(i.colorType)}),value:j(0,{constraint:Gv(i.colorMode,i.colorType,o)}),viewProps:i.viewProps})}class Hv{constructor(i,o){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=o.colorType,this.parser_=o.parser,this.value=o.value,this.viewProps=o.viewProps,this.colorMode=j(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(i),this.view=new Vv(i,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(i){const o={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},h=[Wo(i,o,0),Wo(i,o,1),Wo(i,o,2)];return h.forEach((M,I)=>{fs({primary:this.value,secondary:M.value,forward:B=>B.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[I],backward:(B,ot)=>{const At=this.colorMode.rawValue,Rt=B.rawValue.getComponents(At,this.colorType_);return Rt[I]=ot.rawValue,new Ht(Bu(Vi(Rt),Rt[3]),At,this.colorType_)}})}),h}onModeSelectChange_(i){const o=i.currentTarget;this.colorMode.rawValue=o.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Xo=C("hpl");class Wv{constructor(i,o){this.onValueChange_=this.onValueChange_.bind(this),this.value=o.value,this.value.emitter.on("change",this.onValueChange_),this.element=i.createElement("div"),this.element.classList.add(Xo()),o.viewProps.bindClassModifiers(this.element),o.viewProps.bindTabIndex(this.element);const h=i.createElement("div");h.classList.add(Xo("c")),this.element.appendChild(h);const M=i.createElement("div");M.classList.add(Xo("m")),this.element.appendChild(M),this.markerElem_=M,this.update_()}update_(){const i=this.value.rawValue,[o]=i.getComponents("hsv");this.markerElem_.style.backgroundColor=rh(new Ht([o,100,100],"hsv"));const h=ce(o,0,360,0,100);this.markerElem_.style.left=`${h}%`}onValueChange_(){this.update_()}}class Xv{constructor(i,o){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=o.value,this.viewProps=o.viewProps,this.view=new Wv(i,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Bi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(i,o){if(!i.point)return;const h=ce(Ee(i.point.x,0,i.bounds.width),0,i.bounds.width,0,360),M=this.value.rawValue,[,I,B,ot]=M.getComponents("hsv");this.value.setRawValue(new Ht([h,I,B,ot],"hsv"),o)}onPointerDown_(i){this.handlePointerEvent_(i.data,{forceEmit:!1,last:!1})}onPointerMove_(i){this.handlePointerEvent_(i.data,{forceEmit:!1,last:!1})}onPointerUp_(i){this.handlePointerEvent_(i.data,{forceEmit:!0,last:!0})}onKeyDown_(i){const o=$e(zi(!1),Yn(i));if(o===0)return;const h=this.value.rawValue,[M,I,B,ot]=h.getComponents("hsv");this.value.setRawValue(new Ht([M+o,I,B,ot],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(i){$e(zi(!1),Yn(i))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const qo=C("svp"),oh=64;class qv{constructor(i,o){this.onValueChange_=this.onValueChange_.bind(this),this.value=o.value,this.value.emitter.on("change",this.onValueChange_),this.element=i.createElement("div"),this.element.classList.add(qo()),o.viewProps.bindClassModifiers(this.element),o.viewProps.bindTabIndex(this.element);const h=i.createElement("canvas");h.height=oh,h.width=oh,h.classList.add(qo("c")),this.element.appendChild(h),this.canvasElement=h;const M=i.createElement("div");M.classList.add(qo("m")),this.element.appendChild(M),this.markerElem_=M,this.update_()}update_(){const i=D(this.canvasElement);if(!i)return;const h=this.value.rawValue.getComponents("hsv"),M=this.canvasElement.width,I=this.canvasElement.height,B=i.getImageData(0,0,M,I),ot=B.data;for(let Yt=0;Yt<I;Yt++)for(let Zt=0;Zt<M;Zt++){const Hi=ce(Zt,0,M,0,100),bs=ce(Yt,0,I,100,0),Ms=Ou(h[0],Hi,bs),xa=(Yt*M+Zt)*4;ot[xa]=Ms[0],ot[xa+1]=Ms[1],ot[xa+2]=Ms[2],ot[xa+3]=255}i.putImageData(B,0,0);const At=ce(h[1],0,100,0,100);this.markerElem_.style.left=`${At}%`;const Rt=ce(h[2],0,100,100,0);this.markerElem_.style.top=`${Rt}%`}onValueChange_(){this.update_()}}class jv{constructor(i,o){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=o.value,this.viewProps=o.viewProps,this.view=new qv(i,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Bi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(i,o){if(!i.point)return;const h=ce(i.point.x,0,i.bounds.width,0,100),M=ce(i.point.y,0,i.bounds.height,100,0),[I,,,B]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ht([I,h,M,B],"hsv"),o)}onPointerDown_(i){this.handlePointerEvent_(i.data,{forceEmit:!1,last:!1})}onPointerMove_(i){this.handlePointerEvent_(i.data,{forceEmit:!1,last:!1})}onPointerUp_(i){this.handlePointerEvent_(i.data,{forceEmit:!0,last:!0})}onKeyDown_(i){Du(i.key)&&i.preventDefault();const[o,h,M,I]=this.value.rawValue.getComponents("hsv"),B=zi(!1),ot=$e(B,Yn(i)),At=$e(B,ms(i));ot===0&&At===0||this.value.setRawValue(new Ht([o,h+ot,M+At,I],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(i){const o=zi(!1),h=$e(o,Yn(i)),M=$e(o,ms(i));h===0&&M===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Kv{constructor(i,o){this.value=o.value,this.viewProps=o.viewProps,this.hPaletteC_=new Xv(i,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new jv(i,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=o.supportsAlpha?{palette:new Bv(i,{value:this.value,viewProps:this.viewProps}),text:new _s(i,{parser:Kn,baseStep:.1,props:z.fromObject({draggingScale:.01,formatter:Ue(2)}),value:j(0,{constraint:new Tr({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&fs({primary:this.value,secondary:this.alphaIcs_.text.value,forward:h=>h.rawValue.getComponents()[3],backward:(h,M)=>{const I=h.rawValue.getComponents();return I[3]=M.rawValue,new Ht(I,h.rawValue.mode)}}),this.textC_=new Hv(i,{colorType:o.colorType,parser:Kn,value:this.value,viewProps:this.viewProps}),this.view=new Mv(i,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:o.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const jo=C("colsw");class Yv{constructor(i,o){this.onValueChange_=this.onValueChange_.bind(this),o.value.emitter.on("change",this.onValueChange_),this.value=o.value,this.element=i.createElement("div"),this.element.classList.add(jo()),o.viewProps.bindClassModifiers(this.element);const h=i.createElement("div");h.classList.add(jo("sw")),this.element.appendChild(h),this.swatchElem_=h;const M=i.createElement("button");M.classList.add(jo("b")),o.viewProps.bindDisabled(M),this.element.appendChild(M),this.buttonElement=M,this.update_()}update_(){const i=this.value.rawValue;this.swatchElem_.style.backgroundColor=Go(i)}onValueChange_(){this.update_()}}class $v{constructor(i,o){this.value=o.value,this.viewProps=o.viewProps,this.view=new Yv(i,{value:this.value,viewProps:this.viewProps})}}class Ko{constructor(i,o){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=o.value,this.viewProps=o.viewProps,this.foldable_=qt.create(o.expanded),this.swatchC_=new $v(i,{value:this.value,viewProps:this.viewProps});const h=this.swatchC_.view.buttonElement;h.addEventListener("blur",this.onButtonBlur_),h.addEventListener("click",this.onButtonClick_),this.textC_=new ha(i,{parser:o.parser,props:z.fromObject({formatter:o.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new hv(i,{foldable:this.foldable_,pickerLayout:o.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=o.pickerLayout==="popup"?new Su(i,{viewProps:this.viewProps}):null;const M=new Kv(i,{colorType:o.colorType,supportsAlpha:o.supportsAlpha,value:this.value,viewProps:this.viewProps});M.view.allFocusableElements.forEach(I=>{I.addEventListener("blur",this.onPopupChildBlur_),I.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=M,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(M.view.element),fs({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:I=>I.rawValue,backward:(I,B)=>B.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Z(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(i){if(!this.popC_)return;const o=this.view.element,h=i.relatedTarget;(!h||!o.contains(h))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(i){if(!this.popC_)return;const o=this.popC_.view.element,h=gt(i);h&&o.contains(h)||h&&h===this.swatchC_.view.buttonElement&&!jt(o.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(i){this.popC_?i.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&i.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function Zv(l,i){return Ht.isColorObject(l)?Ht.fromObject(l,i):Ht.black(i)}function Jv(l){return Vi(l.getComponents("rgb")).reduce((i,o)=>i<<8|Math.floor(o)&255,0)}function Qv(l){return l.getComponents("rgb").reduce((i,o,h)=>{const M=Math.floor(h===3?o*255:o)&255;return i<<8|M},0)>>>0}function t0(l){return new Ht([l>>16&255,l>>8&255,l&255],"rgb")}function e0(l){return new Ht([l>>24&255,l>>16&255,l>>8&255,ce(l&255,0,255,0,1)],"rgb")}function n0(l){return typeof l!="number"?Ht.black():t0(l)}function i0(l){return typeof l!="number"?Ht.black():e0(l)}function r0(l){const i=Ho(l);return i?(o,h)=>{gs(o,i(h))}:null}function s0(l){const i=l?Qv:Jv;return(o,h)=>{gs(o,i(h))}}function a0(l,i,o){const h=i.toRgbaObject(o);l.writeProperty("r",h.r),l.writeProperty("g",h.g),l.writeProperty("b",h.b),l.writeProperty("a",h.a)}function o0(l,i,o){const h=i.toRgbaObject(o);l.writeProperty("r",h.r),l.writeProperty("g",h.g),l.writeProperty("b",h.b)}function l0(l,i){return(o,h)=>{l?a0(o,h,i):o0(o,h,i)}}function Yo(l){var i;return!!((l==null?void 0:l.alpha)||((i=l==null?void 0:l.color)===null||i===void 0?void 0:i.alpha))}function c0(l){return l?i=>Go(i,"0x"):i=>ih(i,"0x")}function u0(l){return"color"in l||"view"in l&&l.view==="color"}const h0={id:"input-color-number",type:"input",accept:(l,i)=>{if(typeof l!="number"||!u0(i))return null;const o=ko(i);return o?{initialValue:l,params:o}:null},binding:{reader:l=>Yo(l.params)?i0:n0,equals:Ht.equals,writer:l=>s0(Yo(l.params))},controller:l=>{const i=Yo(l.params),o="expanded"in l.params?l.params.expanded:void 0,h="picker"in l.params?l.params.picker:void 0;return new Ko(l.document,{colorType:"int",expanded:o!=null?o:!1,formatter:c0(i),parser:zo("int"),pickerLayout:h!=null?h:"popup",supportsAlpha:i,value:l.value,viewProps:l.viewProps})}};function d0(l){return Ht.isRgbaColorObject(l)}function p0(l){return i=>Zv(i,l)}function f0(l,i){return o=>l?ah(o,i):sh(o,i)}const m0={id:"input-color-object",type:"input",accept:(l,i)=>{if(!Ht.isColorObject(l))return null;const o=ko(i);return o?{initialValue:l,params:o}:null},binding:{reader:l=>p0(Gi(l.params)),equals:Ht.equals,writer:l=>l0(d0(l.initialValue),Gi(l.params))},controller:l=>{var i;const o=Ht.isRgbaColorObject(l.initialValue),h="expanded"in l.params?l.params.expanded:void 0,M="picker"in l.params?l.params.picker:void 0,I=(i=Gi(l.params))!==null&&i!==void 0?i:"int";return new Ko(l.document,{colorType:I,expanded:h!=null?h:!1,formatter:f0(o,I),parser:zo(I),pickerLayout:M!=null?M:"popup",supportsAlpha:o,value:l.value,viewProps:l.viewProps})}},_0={id:"input-color-string",type:"input",accept:(l,i)=>{if(typeof l!="string"||"view"in i&&i.view==="text")return null;const o=Vo(l,Gi(i));if(!o||!Ho(o))return null;const M=ko(i);return M?{initialValue:l,params:M}:null},binding:{reader:l=>{var i;return Pv((i=Gi(l.params))!==null&&i!==void 0?i:"int")},equals:Ht.equals,writer:l=>{const i=Vo(l.initialValue,Gi(l.params));if(!i)throw x.shouldNeverHappen();const o=r0(i);if(!o)throw x.notBindable();return o}},controller:l=>{const i=Vo(l.initialValue,Gi(l.params));if(!i)throw x.shouldNeverHappen();const o=Ho(i);if(!o)throw x.shouldNeverHappen();const h="expanded"in l.params?l.params.expanded:void 0,M="picker"in l.params?l.params.picker:void 0;return new Ko(l.document,{colorType:i.type,expanded:h!=null?h:!1,formatter:o,parser:zo(i.type),pickerLayout:M!=null?M:"popup",supportsAlpha:i.alpha,value:l.value,viewProps:l.viewProps})}};class _i{constructor(i){this.components=i.components,this.asm_=i.assembly}constrain(i){const o=this.asm_.toComponents(i).map((h,M)=>{var I,B;return(B=(I=this.components[M])===null||I===void 0?void 0:I.constrain(h))!==null&&B!==void 0?B:h});return this.asm_.fromComponents(o)}}const lh=C("pndtxt");class g0{constructor(i,o){this.textViews=o.textViews,this.element=i.createElement("div"),this.element.classList.add(lh()),this.textViews.forEach(h=>{const M=i.createElement("div");M.classList.add(lh("a")),M.appendChild(h.element),this.element.appendChild(M)})}}function v0(l,i,o){return new _s(l,{arrayPosition:o===0?"fst":o===i.axes.length-1?"lst":"mid",baseStep:i.axes[o].baseStep,parser:i.parser,props:i.axes[o].textProps,value:j(0,{constraint:i.axes[o].constraint}),viewProps:i.viewProps})}class $o{constructor(i,o){this.value=o.value,this.viewProps=o.viewProps,this.acs_=o.axes.map((h,M)=>v0(i,o,M)),this.acs_.forEach((h,M)=>{fs({primary:this.value,secondary:h.value,forward:I=>o.assembly.toComponents(I.rawValue)[M],backward:(I,B)=>{const ot=o.assembly.toComponents(I.rawValue);return ot[M]=B.rawValue,o.assembly.fromComponents(ot)}})}),this.view=new g0(i,{textViews:this.acs_.map(h=>h.view)})}}function ch(l,i){return"step"in l&&!m(l.step)?new ua(l.step,i):null}function uh(l){return!m(l.max)&&!m(l.min)?new Tr({max:l.max,min:l.min}):!m(l.max)||!m(l.min)?new Mu({max:l.max,min:l.min}):null}function x0(l){const i=jn(l,Tr);if(i)return[i.values.get("min"),i.values.get("max")];const o=jn(l,Mu);return o?[o.minValue,o.maxValue]:[void 0,void 0]}function b0(l,i){const o=[],h=ch(l,i);h&&o.push(h);const M=uh(l);M&&o.push(M);const I=Bo(l.options);return I&&o.push(I),new cs(o)}const M0={id:"input-number",type:"input",accept:(l,i)=>{if(typeof l!="number")return null;const o=Y,h=lt(i,{format:o.optional.function,max:o.optional.number,min:o.optional.number,options:o.optional.custom(pa),step:o.optional.number});return h?{initialValue:l,params:h}:null},binding:{reader:l=>Ru,constraint:l=>b0(l.params,l.initialValue),writer:l=>gs},controller:l=>{var i;const o=l.value,h=l.constraint,M=h&&jn(h,us);if(M)return new hs(l.document,{props:new z({options:M.values.value("options")}),value:o,viewProps:l.viewProps});const I=(i="format"in l.params?l.params.format:void 0)!==null&&i!==void 0?i:Ue(fa(h,o.rawValue)),B=h&&jn(h,Tr);return B?new Oo(l.document,{baseStep:Cr(h),parser:Kn,sliderProps:new z({maxValue:B.values.value("max"),minValue:B.values.value("min")}),textProps:z.fromObject({draggingScale:Ar(h,o.rawValue),formatter:I}),value:o,viewProps:l.viewProps}):new _s(l.document,{baseStep:Cr(h),parser:Kn,props:z.fromObject({draggingScale:Ar(h,o.rawValue),formatter:I}),value:o,viewProps:l.viewProps})}};class gi{constructor(i=0,o=0){this.x=i,this.y=o}getComponents(){return[this.x,this.y]}static isObject(i){if(m(i))return!1;const o=i.x,h=i.y;return!(typeof o!="number"||typeof h!="number")}static equals(i,o){return i.x===o.x&&i.y===o.y}toObject(){return{x:this.x,y:this.y}}}const hh={toComponents:l=>l.getComponents(),fromComponents:l=>new gi(...l)},Rr=C("p2d");class w0{constructor(i,o){this.element=i.createElement("div"),this.element.classList.add(Rr()),o.viewProps.bindClassModifiers(this.element),U(o.expanded,L(this.element,Rr(void 0,"expanded")));const h=i.createElement("div");h.classList.add(Rr("h")),this.element.appendChild(h);const M=i.createElement("button");M.classList.add(Rr("b")),M.appendChild($(i,"p2dpad")),o.viewProps.bindDisabled(M),h.appendChild(M),this.buttonElement=M;const I=i.createElement("div");if(I.classList.add(Rr("t")),h.appendChild(I),this.textElement=I,o.pickerLayout==="inline"){const B=i.createElement("div");B.classList.add(Rr("p")),this.element.appendChild(B),this.pickerElement=B}else this.pickerElement=null}}const vi=C("p2dp");class S0{constructor(i,o){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=o.invertsY,this.maxValue_=o.maxValue,this.element=i.createElement("div"),this.element.classList.add(vi()),o.layout==="popup"&&this.element.classList.add(vi(void 0,"p")),o.viewProps.bindClassModifiers(this.element);const h=i.createElement("div");h.classList.add(vi("p")),o.viewProps.bindTabIndex(h),this.element.appendChild(h),this.padElement=h;const M=i.createElementNS(ie,"svg");M.classList.add(vi("g")),this.padElement.appendChild(M),this.svgElem_=M;const I=i.createElementNS(ie,"line");I.classList.add(vi("ax")),I.setAttributeNS(null,"x1","0"),I.setAttributeNS(null,"y1","50%"),I.setAttributeNS(null,"x2","100%"),I.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(I);const B=i.createElementNS(ie,"line");B.classList.add(vi("ax")),B.setAttributeNS(null,"x1","50%"),B.setAttributeNS(null,"y1","0"),B.setAttributeNS(null,"x2","50%"),B.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(B);const ot=i.createElementNS(ie,"line");ot.classList.add(vi("l")),ot.setAttributeNS(null,"x1","50%"),ot.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ot),this.lineElem_=ot;const At=i.createElement("div");At.classList.add(vi("m")),this.padElement.appendChild(At),this.markerElem_=At,o.value.emitter.on("change",this.onValueChange_),this.value=o.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[i,o]=this.value.rawValue.getComponents(),h=this.maxValue_,M=ce(i,-h,+h,0,100),I=ce(o,-h,+h,0,100),B=this.invertsY_?100-I:I;this.lineElem_.setAttributeNS(null,"x2",`${M}%`),this.lineElem_.setAttributeNS(null,"y2",`${B}%`),this.markerElem_.style.left=`${M}%`,this.markerElem_.style.top=`${B}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function dh(l,i,o){return[$e(i[0],Yn(l)),$e(i[1],ms(l))*(o?1:-1)]}class E0{constructor(i,o){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=o.value,this.viewProps=o.viewProps,this.baseSteps_=o.baseSteps,this.maxValue_=o.maxValue,this.invertsY_=o.invertsY,this.view=new S0(i,{invertsY:this.invertsY_,layout:o.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Bi(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(i,o){if(!i.point)return;const h=this.maxValue_,M=ce(i.point.x,0,i.bounds.width,-h,+h),I=ce(this.invertsY_?i.bounds.height-i.point.y:i.point.y,0,i.bounds.height,-h,+h);this.value.setRawValue(new gi(M,I),o)}onPointerDown_(i){this.handlePointerEvent_(i.data,{forceEmit:!1,last:!1})}onPointerMove_(i){this.handlePointerEvent_(i.data,{forceEmit:!1,last:!1})}onPointerUp_(i){this.handlePointerEvent_(i.data,{forceEmit:!0,last:!0})}onPadKeyDown_(i){Du(i.key)&&i.preventDefault();const[o,h]=dh(i,this.baseSteps_,this.invertsY_);o===0&&h===0||this.value.setRawValue(new gi(this.value.rawValue.x+o,this.value.rawValue.y+h),{forceEmit:!1,last:!1})}onPadKeyUp_(i){const[o,h]=dh(i,this.baseSteps_,this.invertsY_);o===0&&h===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class y0{constructor(i,o){var h,M;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=o.value,this.viewProps=o.viewProps,this.foldable_=qt.create(o.expanded),this.popC_=o.pickerLayout==="popup"?new Su(i,{viewProps:this.viewProps}):null;const I=new E0(i,{baseSteps:[o.axes[0].baseStep,o.axes[1].baseStep],invertsY:o.invertsY,layout:o.pickerLayout,maxValue:o.maxValue,value:this.value,viewProps:this.viewProps});I.view.allFocusableElements.forEach(B=>{B.addEventListener("blur",this.onPopupChildBlur_),B.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=I,this.textC_=new $o(i,{assembly:hh,axes:o.axes,parser:o.parser,value:this.value,viewProps:this.viewProps}),this.view=new w0(i,{expanded:this.foldable_.value("expanded"),pickerLayout:o.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(h=this.view.buttonElement)===null||h===void 0||h.addEventListener("blur",this.onPadButtonBlur_),(M=this.view.buttonElement)===null||M===void 0||M.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),fs({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:B=>B.rawValue,backward:(B,ot)=>ot.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Z(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(i){if(!this.popC_)return;const o=this.view.element,h=i.relatedTarget;(!h||!o.contains(h))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(i){if(!this.popC_)return;const o=this.popC_.view.element,h=gt(i);h&&o.contains(h)||h&&h===this.view.buttonElement&&!jt(o.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(i){this.popC_?i.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&i.key==="Escape"&&this.view.buttonElement.focus()}}class Lr{constructor(i=0,o=0,h=0){this.x=i,this.y=o,this.z=h}getComponents(){return[this.x,this.y,this.z]}static isObject(i){if(m(i))return!1;const o=i.x,h=i.y,M=i.z;return!(typeof o!="number"||typeof h!="number"||typeof M!="number")}static equals(i,o){return i.x===o.x&&i.y===o.y&&i.z===o.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const ph={toComponents:l=>l.getComponents(),fromComponents:l=>new Lr(...l)};function T0(l){return Lr.isObject(l)?new Lr(l.x,l.y,l.z):new Lr}function C0(l,i){l.writeProperty("x",i.x),l.writeProperty("y",i.y),l.writeProperty("z",i.z)}function A0(l,i){return new _i({assembly:ph,components:[$n("x"in l?l.x:void 0,i.x),$n("y"in l?l.y:void 0,i.y),$n("z"in l?l.z:void 0,i.z)]})}function Zo(l,i){return{baseStep:Cr(i),constraint:i,textProps:z.fromObject({draggingScale:Ar(i,l),formatter:Ue(fa(i,l))})}}const P0={id:"input-point3d",type:"input",accept:(l,i)=>{if(!Lr.isObject(l))return null;const o=Y,h=lt(i,{x:o.optional.custom(fi),y:o.optional.custom(fi),z:o.optional.custom(fi)});return h?{initialValue:l,params:h}:null},binding:{reader:l=>T0,constraint:l=>A0(l.params,l.initialValue),equals:Lr.equals,writer:l=>C0},controller:l=>{const i=l.value,o=l.constraint;if(!(o instanceof _i))throw x.shouldNeverHappen();return new $o(l.document,{assembly:ph,axes:[Zo(i.rawValue.x,o.components[0]),Zo(i.rawValue.y,o.components[1]),Zo(i.rawValue.z,o.components[2])],parser:Kn,value:i,viewProps:l.viewProps})}};class Dr{constructor(i=0,o=0,h=0,M=0){this.x=i,this.y=o,this.z=h,this.w=M}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(i){if(m(i))return!1;const o=i.x,h=i.y,M=i.z,I=i.w;return!(typeof o!="number"||typeof h!="number"||typeof M!="number"||typeof I!="number")}static equals(i,o){return i.x===o.x&&i.y===o.y&&i.z===o.z&&i.w===o.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const fh={toComponents:l=>l.getComponents(),fromComponents:l=>new Dr(...l)};function R0(l){return Dr.isObject(l)?new Dr(l.x,l.y,l.z,l.w):new Dr}function L0(l,i){l.writeProperty("x",i.x),l.writeProperty("y",i.y),l.writeProperty("z",i.z),l.writeProperty("w",i.w)}function D0(l,i){return new _i({assembly:fh,components:[$n("x"in l?l.x:void 0,i.x),$n("y"in l?l.y:void 0,i.y),$n("z"in l?l.z:void 0,i.z),$n("w"in l?l.w:void 0,i.w)]})}function U0(l,i){return{baseStep:Cr(i),constraint:i,textProps:z.fromObject({draggingScale:Ar(i,l),formatter:Ue(fa(i,l))})}}const I0={id:"input-point4d",type:"input",accept:(l,i)=>{if(!Dr.isObject(l))return null;const o=Y,h=lt(i,{x:o.optional.custom(fi),y:o.optional.custom(fi),z:o.optional.custom(fi),w:o.optional.custom(fi)});return h?{initialValue:l,params:h}:null},binding:{reader:l=>R0,constraint:l=>D0(l.params,l.initialValue),equals:Dr.equals,writer:l=>L0},controller:l=>{const i=l.value,o=l.constraint;if(!(o instanceof _i))throw x.shouldNeverHappen();return new $o(l.document,{assembly:fh,axes:i.rawValue.getComponents().map((h,M)=>U0(h,o.components[M])),parser:Kn,value:i,viewProps:l.viewProps})}};function F0(l){const i=[],o=Bo(l.options);return o&&i.push(o),new cs(i)}const N0={id:"input-string",type:"input",accept:(l,i)=>{if(typeof l!="string")return null;const h=lt(i,{options:Y.optional.custom(pa)});return h?{initialValue:l,params:h}:null},binding:{reader:l=>Lu,constraint:l=>F0(l.params),writer:l=>gs},controller:l=>{const i=l.document,o=l.value,h=l.constraint,M=h&&jn(h,us);return M?new hs(i,{props:new z({options:M.values.value("options")}),value:o,viewProps:l.viewProps}):new ha(i,{parser:I=>I,props:z.fromObject({formatter:Uo}),value:o,viewProps:l.viewProps})}},xs={monitor:{defaultInterval:200,defaultLineCount:3}},mh=C("mll");class O0{constructor(i,o){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=o.formatter,this.element=i.createElement("div"),this.element.classList.add(mh()),o.viewProps.bindClassModifiers(this.element);const h=i.createElement("textarea");h.classList.add(mh("i")),h.style.height=`calc(var(--bld-us) * ${o.lineCount})`,h.readOnly=!0,o.viewProps.bindDisabled(h),this.element.appendChild(h),this.textareaElem_=h,o.value.emitter.on("change",this.onValueUpdate_),this.value=o.value,this.update_()}update_(){const i=this.textareaElem_,o=i.scrollTop===i.scrollHeight-i.clientHeight,h=[];this.value.rawValue.forEach(M=>{M!==void 0&&h.push(this.formatter_(M))}),i.textContent=h.join(`
`),o&&(i.scrollTop=i.scrollHeight)}onValueUpdate_(){this.update_()}}class Jo{constructor(i,o){this.value=o.value,this.viewProps=o.viewProps,this.view=new O0(i,{formatter:o.formatter,lineCount:o.lineCount,value:this.value,viewProps:this.viewProps})}}const _h=C("sgl");class B0{constructor(i,o){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=o.formatter,this.element=i.createElement("div"),this.element.classList.add(_h()),o.viewProps.bindClassModifiers(this.element);const h=i.createElement("input");h.classList.add(_h("i")),h.readOnly=!0,h.type="text",o.viewProps.bindDisabled(h),this.element.appendChild(h),this.inputElement=h,o.value.emitter.on("change",this.onValueUpdate_),this.value=o.value,this.update_()}update_(){const i=this.value.rawValue,o=i[i.length-1];this.inputElement.value=o!==void 0?this.formatter_(o):""}onValueUpdate_(){this.update_()}}class Qo{constructor(i,o){this.value=o.value,this.viewProps=o.viewProps,this.view=new B0(i,{formatter:o.formatter,value:this.value,viewProps:this.viewProps})}}const k0={id:"monitor-bool",type:"monitor",accept:(l,i)=>{if(typeof l!="boolean")return null;const h=lt(i,{lineCount:Y.optional.number});return h?{initialValue:l,params:h}:null},binding:{reader:l=>yu},controller:l=>{var i;return l.value.rawValue.length===1?new Qo(l.document,{formatter:Tu,value:l.value,viewProps:l.viewProps}):new Jo(l.document,{formatter:Tu,lineCount:(i=l.params.lineCount)!==null&&i!==void 0?i:xs.monitor.defaultLineCount,value:l.value,viewProps:l.viewProps})}},xi=C("grl");class V0{constructor(i,o){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=i.createElement("div"),this.element.classList.add(xi()),o.viewProps.bindClassModifiers(this.element),this.formatter_=o.formatter,this.props_=o.props,this.cursor_=o.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const h=i.createElementNS(ie,"svg");h.classList.add(xi("g")),h.style.height=`calc(var(--bld-us) * ${o.lineCount})`,this.element.appendChild(h),this.svgElem_=h;const M=i.createElementNS(ie,"polyline");this.svgElem_.appendChild(M),this.lineElem_=M;const I=i.createElement("div");I.classList.add(xi("t"),C("tt")()),this.element.appendChild(I),this.tooltipElem_=I,o.value.emitter.on("change",this.onValueUpdate_),this.value=o.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const i=this.svgElem_.getBoundingClientRect(),o=this.value.rawValue.length-1,h=this.props_.get("minValue"),M=this.props_.get("maxValue"),I=[];this.value.rawValue.forEach((Yt,Zt)=>{if(Yt===void 0)return;const Hi=ce(Zt,0,o,0,i.width),bs=ce(Yt,h,M,i.height,0);I.push([Hi,bs].join(","))}),this.lineElem_.setAttributeNS(null,"points",I.join(" "));const B=this.tooltipElem_,ot=this.value.rawValue[this.cursor_.rawValue];if(ot===void 0){B.classList.remove(xi("t","a"));return}const At=ce(this.cursor_.rawValue,0,o,0,i.width),Rt=ce(ot,h,M,i.height,0);B.style.left=`${At}px`,B.style.top=`${Rt}px`,B.textContent=`${this.formatter_(ot)}`,B.classList.contains(xi("t","a"))||(B.classList.add(xi("t","a"),xi("t","in")),he(B),B.classList.remove(xi("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class z0{constructor(i,o){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=o.props,this.value=o.value,this.viewProps=o.viewProps,this.cursor_=j(-1),this.view=new V0(i,{cursor:this.cursor_,formatter:o.formatter,lineCount:o.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!jt(i))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const h=new Bi(this.view.element);h.emitter.on("down",this.onGraphPointerDown_),h.emitter.on("move",this.onGraphPointerMove_),h.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(i){const o=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(ce(i.offsetX,0,o.width,0,this.value.rawValue.length))}onGraphPointerDown_(i){this.onGraphPointerMove_(i)}onGraphPointerMove_(i){if(!i.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(ce(i.data.point.x,0,i.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function tl(l){return"format"in l&&!m(l.format)?l.format:Ue(2)}function G0(l){var i;return l.value.rawValue.length===1?new Qo(l.document,{formatter:tl(l.params),value:l.value,viewProps:l.viewProps}):new Jo(l.document,{formatter:tl(l.params),lineCount:(i=l.params.lineCount)!==null&&i!==void 0?i:xs.monitor.defaultLineCount,value:l.value,viewProps:l.viewProps})}function H0(l){var i,o,h;return new z0(l.document,{formatter:tl(l.params),lineCount:(i=l.params.lineCount)!==null&&i!==void 0?i:xs.monitor.defaultLineCount,props:z.fromObject({maxValue:(o="max"in l.params?l.params.max:null)!==null&&o!==void 0?o:100,minValue:(h="min"in l.params?l.params.min:null)!==null&&h!==void 0?h:0}),value:l.value,viewProps:l.viewProps})}function gh(l){return"view"in l&&l.view==="graph"}const W0={id:"monitor-number",type:"monitor",accept:(l,i)=>{if(typeof l!="number")return null;const o=Y,h=lt(i,{format:o.optional.function,lineCount:o.optional.number,max:o.optional.number,min:o.optional.number,view:o.optional.string});return h?{initialValue:l,params:h}:null},binding:{defaultBufferSize:l=>gh(l)?64:1,reader:l=>Ru},controller:l=>gh(l.params)?H0(l):G0(l)},X0={id:"monitor-string",type:"monitor",accept:(l,i)=>{if(typeof l!="string")return null;const o=Y,h=lt(i,{lineCount:o.optional.number,multiline:o.optional.boolean});return h?{initialValue:l,params:h}:null},binding:{reader:l=>Lu},controller:l=>{var i;const o=l.value;return o.rawValue.length>1||"multiline"in l.params&&l.params.multiline?new Jo(l.document,{formatter:Uo,lineCount:(i=l.params.lineCount)!==null&&i!==void 0?i:xs.monitor.defaultLineCount,value:o,viewProps:l.viewProps}):new Qo(l.document,{formatter:Uo,value:o,viewProps:l.viewProps})}};function q0(l,i){var o;const h=l.accept(i.target.read(),i.params);if(m(h))return null;const M=Y,I={target:i.target,initialValue:h.initialValue,params:h.params},B=l.binding.reader(I),ot=l.binding.constraint?l.binding.constraint(I):void 0,At=j(B(h.initialValue),{constraint:ot,equals:l.binding.equals}),Rt=new vg({reader:B,target:i.target,value:At,writer:l.binding.writer(I)}),Yt=M.optional.boolean(i.params.disabled).value,Zt=M.optional.boolean(i.params.hidden).value,Hi=l.controller({constraint:ot,document:i.document,initialValue:h.initialValue,params:h.params,value:Rt.value,viewProps:Mt.create({disabled:Yt,hidden:Zt})});return new Kt(i.document,{binding:Rt,blade:Nt(),props:z.fromObject({label:"label"in i.params?(o=M.optional.string(i.params.label).value)!==null&&o!==void 0?o:null:i.target.key}),valueController:Hi})}function j0(l,i){return i===0?new _g:new gg(l,i!=null?i:xs.monitor.defaultInterval)}function K0(l,i){var o,h,M;const I=Y,B=l.accept(i.target.read(),i.params);if(m(B))return null;const ot={target:i.target,initialValue:B.initialValue,params:B.params},At=l.binding.reader(ot),Rt=(h=(o=I.optional.number(i.params.bufferSize).value)!==null&&o!==void 0?o:l.binding.defaultBufferSize&&l.binding.defaultBufferSize(B.params))!==null&&h!==void 0?h:1,Yt=I.optional.number(i.params.interval).value,Zt=new wg({reader:At,target:i.target,ticker:j0(i.document,Yt),value:xg(Rt)}),Hi=I.optional.boolean(i.params.disabled).value,bs=I.optional.boolean(i.params.hidden).value,Ms=l.controller({document:i.document,params:B.params,value:Zt.value,viewProps:Mt.create({disabled:Hi,hidden:bs})});return new we(i.document,{binding:Zt,blade:Nt(),props:z.fromObject({label:"label"in i.params?(M=I.optional.string(i.params.label).value)!==null&&M!==void 0?M:null:i.target.key}),valueController:Ms})}class Y0{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(i){i.type==="blade"?this.pluginsMap_.blades.unshift(i):i.type==="input"?this.pluginsMap_.inputs.unshift(i):i.type==="monitor"&&this.pluginsMap_.monitors.unshift(i)}createInput(i,o,h){const M=o.read();if(m(M))throw new x({context:{key:o.key},type:"nomatchingcontroller"});const I=this.pluginsMap_.inputs.reduce((B,ot)=>B!=null?B:q0(ot,{document:i,target:o,params:h}),null);if(I)return I;throw new x({context:{key:o.key},type:"nomatchingcontroller"})}createMonitor(i,o,h){const M=this.pluginsMap_.monitors.reduce((I,B)=>I!=null?I:K0(B,{document:i,params:h,target:o}),null);if(M)return M;throw new x({context:{key:o.key},type:"nomatchingcontroller"})}createBlade(i,o){const h=this.pluginsMap_.blades.reduce((M,I)=>M!=null?M:mg(I,{document:i,params:o}),null);if(!h)throw new x({type:"nomatchingview",context:{params:o}});return h}createBladeApi(i){if(i instanceof Kt)return new fn(i);if(i instanceof we)return new ke(i);if(i instanceof It)return new Er(i,this);const o=this.pluginsMap_.blades.reduce((h,M)=>h!=null?h:M.api({controller:i,pool:this}),null);if(!o)throw x.shouldNeverHappen();return o}}function $0(){const l=new Y0;return[nx,P0,I0,N0,M0,_0,m0,h0,uv,k0,X0,W0,vt,Qt,ss,ls].forEach(i=>{l.register(i)}),l}function Z0(l){return gi.isObject(l)?new gi(l.x,l.y):new gi}function J0(l,i){l.writeProperty("x",i.x),l.writeProperty("y",i.y)}function $n(l,i){if(!l)return;const o=[],h=ch(l,i);h&&o.push(h);const M=uh(l);return M&&o.push(M),new cs(o)}function Q0(l,i){return new _i({assembly:hh,components:[$n("x"in l?l.x:void 0,i.x),$n("y"in l?l.y:void 0,i.y)]})}function vh(l,i){const[o,h]=l?x0(l):[];if(!m(o)||!m(h))return Math.max(Math.abs(o!=null?o:0),Math.abs(h!=null?h:0));const M=Cr(l);return Math.max(Math.abs(M)*10,Math.abs(i)*10)}function tx(l,i){const o=i instanceof _i?i.components[0]:void 0,h=i instanceof _i?i.components[1]:void 0,M=vh(o,l.x),I=vh(h,l.y);return Math.max(M,I)}function xh(l,i){return{baseStep:Cr(i),constraint:i,textProps:z.fromObject({draggingScale:Ar(i,l),formatter:Ue(fa(i,l))})}}function ex(l){if(!("y"in l))return!1;const i=l.y;return i&&"inverted"in i?!!i.inverted:!1}const nx={id:"input-point2d",type:"input",accept:(l,i)=>{if(!gi.isObject(l))return null;const o=Y,h=lt(i,{expanded:o.optional.boolean,picker:o.optional.custom(Fu),x:o.optional.custom(fi),y:o.optional.object({inverted:o.optional.boolean,max:o.optional.number,min:o.optional.number,step:o.optional.number})});return h?{initialValue:l,params:h}:null},binding:{reader:l=>Z0,constraint:l=>Q0(l.params,l.initialValue),equals:gi.equals,writer:l=>J0},controller:l=>{const i=l.document,o=l.value,h=l.constraint;if(!(h instanceof _i))throw x.shouldNeverHappen();const M="expanded"in l.params?l.params.expanded:void 0,I="picker"in l.params?l.params.picker:void 0;return new y0(i,{axes:[xh(o.rawValue.x,h.components[0]),xh(o.rawValue.y,h.components[1])],expanded:M!=null?M:!1,invertsY:ex(l.params),maxValue:tx(o.rawValue,h),parser:Kn,pickerLayout:I!=null?I:"popup",value:o,viewProps:l.viewProps})}};class bh extends r{constructor(i){super(i),this.emitter_=new y,this.controller_.valueController.value.emitter.on("change",o=>{this.emitter_.emit("change",{event:new u(this,o.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(i){this.controller_.props.set("label",i)}get options(){return this.controller_.valueController.props.get("options")}set options(i){this.controller_.valueController.props.set("options",i)}get value(){return this.controller_.valueController.value.rawValue}set value(i){this.controller_.valueController.value.rawValue=i}on(i,o){const h=o.bind(this);return this.emitter_.on(i,M=>{h(M.event)}),this}}class Mh extends r{constructor(i){super(i),this.emitter_=new y,this.controller_.valueController.value.emitter.on("change",o=>{this.emitter_.emit("change",{event:new u(this,o.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(i){this.controller_.props.set("label",i)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(i){this.controller_.valueController.sliderController.props.set("maxValue",i)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(i){this.controller_.valueController.sliderController.props.set("minValue",i)}get value(){return this.controller_.valueController.value.rawValue}set value(i){this.controller_.valueController.value.rawValue=i}on(i,o){const h=o.bind(this);return this.emitter_.on(i,M=>{h(M.event)}),this}}class wh extends r{constructor(i){super(i),this.emitter_=new y,this.controller_.valueController.value.emitter.on("change",o=>{this.emitter_.emit("change",{event:new u(this,o.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(i){this.controller_.props.set("label",i)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(i){this.controller_.valueController.props.set("formatter",i)}get value(){return this.controller_.valueController.value.rawValue}set value(i){this.controller_.valueController.value.rawValue=i}on(i,o){const h=o.bind(this);return this.emitter_.on(i,M=>{h(M.event)}),this}}const ix=function(){return{id:"list",type:"blade",accept(l){const i=Y,o=lt(l,{options:i.required.custom(pa),value:i.required.raw,view:i.required.constant("list"),label:i.optional.string});return o?{params:o}:null},controller(l){const i=new us(Nu(l.params.options)),o=j(l.params.value,{constraint:i}),h=new hs(l.document,{props:new z({options:i.values.value("options")}),value:o,viewProps:l.viewProps});return new pe(l.document,{blade:l.blade,props:z.fromObject({label:l.params.label}),valueController:h})},api(l){return!(l.controller instanceof pe)||!(l.controller.valueController instanceof hs)?null:new bh(l.controller)}}}();function rx(l){return l.reduce((i,o)=>Object.assign(i,{[o.presetKey]:o.read()}),{})}function sx(l,i){l.forEach(o=>{const h=i[o.target.presetKey];h!==void 0&&o.writer(o.target,o.reader(h))})}class ax extends rs{constructor(i,o){super(i,o)}get element(){return this.controller_.view.element}importPreset(i){const o=this.controller_.rackController.rack.find(Kt).map(h=>h.binding);sx(o,i),this.refresh()}exportPreset(){const i=this.controller_.rackController.rack.find(Kt).map(o=>o.binding.target);return rx(i)}refresh(){this.controller_.rackController.rack.find(Kt).forEach(i=>{i.binding.read()}),this.controller_.rackController.rack.find(we).forEach(i=>{i.binding.read()})}}class ox extends Bt{constructor(i,o){super(i,{expanded:o.expanded,blade:o.blade,props:o.props,root:!0,viewProps:o.viewProps})}}const lx={id:"slider",type:"blade",accept(l){const i=Y,o=lt(l,{max:i.required.number,min:i.required.number,view:i.required.constant("slider"),format:i.optional.function,label:i.optional.string,value:i.optional.number});return o?{params:o}:null},controller(l){var i,o;const h=(i=l.params.value)!==null&&i!==void 0?i:0,M=new Tr({max:l.params.max,min:l.params.min}),I=new Oo(l.document,{baseStep:1,parser:Kn,sliderProps:new z({maxValue:M.values.value("max"),minValue:M.values.value("min")}),textProps:z.fromObject({draggingScale:Ar(void 0,h),formatter:(o=l.params.format)!==null&&o!==void 0?o:Qg}),value:j(h,{constraint:M}),viewProps:l.viewProps});return new pe(l.document,{blade:l.blade,props:z.fromObject({label:l.params.label}),valueController:I})},api(l){return!(l.controller instanceof pe)||!(l.controller.valueController instanceof Oo)?null:new Mh(l.controller)}},cx=function(){return{id:"text",type:"blade",accept(l){const i=Y,o=lt(l,{parse:i.required.function,value:i.required.raw,view:i.required.constant("text"),format:i.optional.function,label:i.optional.string});return o?{params:o}:null},controller(l){var i;const o=new ha(l.document,{parser:l.params.parse,props:z.fromObject({formatter:(i=l.params.format)!==null&&i!==void 0?i:h=>String(h)}),value:j(l.params.value),viewProps:l.viewProps});return new pe(l.document,{blade:l.blade,props:z.fromObject({label:l.params.label}),valueController:o})},api(l){return!(l.controller instanceof pe)||!(l.controller.valueController instanceof ha)?null:new wh(l.controller)}}}();function ux(l){const i=l.createElement("div");return i.classList.add(C("dfw")()),l.body&&l.body.appendChild(i),i}function Sh(l,i,o){if(l.querySelector(`style[data-tp-style=${i}]`))return;const h=l.createElement("style");h.dataset.tpStyle=i,h.textContent=o,l.head.appendChild(h)}class hx extends ax{constructor(i){var o,h;const M=i!=null?i:{},I=(o=M.document)!==null&&o!==void 0?o:Be(),B=$0(),ot=new ox(I,{expanded:M.expanded,blade:Nt(),props:z.fromObject({title:M.title}),viewProps:Mt.create()});super(ot,B),this.pool_=B,this.containerElem_=(h=M.container)!==null&&h!==void 0?h:ux(I),this.containerElem_.appendChild(this.element),this.doc_=I,this.usesDefaultWrapper_=!M.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw x.alreadyDisposed();return this.doc_}dispose(){const i=this.containerElem_;if(!i)throw x.alreadyDisposed();if(this.usesDefaultWrapper_){const o=i.parentElement;o&&o.removeChild(i)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(i){("plugin"in i?[i.plugin]:"plugins"in i?i.plugins:[]).forEach(h=>{this.pool_.register(h),this.embedPluginStyle_(h)})}embedPluginStyle_(i){i.css&&Sh(this.document,`plugin-${i.id}`,i.css)}setUpDefaultPlugins_(){Sh(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(i=>{this.embedPluginStyle_(i)}),this.registerPlugin({plugins:[lx,ix,ls,cx]})}}const dx=new n("3.1.10");e.BladeApi=r,e.ButtonApi=_,e.FolderApi=rs,e.InputBindingApi=fn,e.ListApi=bh,e.MonitorBindingApi=ke,e.Pane=hx,e.SeparatorApi=Ye,e.SliderApi=Mh,e.TabApi=Pe,e.TabPageApi=yr,e.TextApi=wh,e.TpChangeEvent=u,e.VERSION=dx,Object.defineProperty(e,"__esModule",{value:!0})})})(Po,Po.exports);const Rn=new Po.exports.Pane,me={color1:"#fff",color2:"#fff",timeScale:1.2,noiseScale:.1,noiseAmplitude:4.1,amplitudeStrength:7,radius:.35,details:150,contrast:1,brightness:0,wireframe:!1};class pg extends He{constructor({mapTexture:e,hdrEnv:n}){super();el(this,"onMouseMove",e=>{const{target:n}=this.mouse,r=window.innerWidth,a=window.innerHeight;n.x=(e.clientX/r-.5)*2,n.y=(e.clientY/a-.5)*2});el(this,"onTick",e=>{const{current:n,target:r,ease:a}=this.mouse,{uTime:u,uNoiseScale:c,uAmplitudeStrength:p}=this.material.uniforms;u.value=e,this.mesh&&(n.x=wr.utils.interpolate(n.x,r.x,a*wr.ticker.deltaRatio(60)||0),n.y=wr.utils.interpolate(n.y,r.y,a*wr.ticker.deltaRatio(60)||0),this.mesh.rotation.x=-n.y*.8,this.mesh.rotation.y=Math.PI*-n.x*.8)});this.mapTexture=e,this.hdrEnv=n,this.mouse={current:{x:0,y:0},target:{x:0,y:0},ease:.08},this.geometry=new js(me.radius,me.details),this.createMaterial(),this.createMesh(),wr.timeline({repeat:-1}).to(this.position,{keyframes:{y:[-.07,.07,-.07],ease:"linear"},duration:3,ease:"sine.inOut"}),this.addEventListeners(),this.addDebug()}addDebug(){Rn.addBinding(me,"color1").on("change",e=>{this.material.uniforms.uColor1.value=new Jt(e.value)}),Rn.addBinding(me,"color2").on("change",e=>{this.material.uniforms.uColor2.value=new Jt(e.value)}),Rn.addBinding(me,"timeScale",{min:0,max:2}).on("change",e=>{this.material.uniforms.uTimeScale.value=e.value}),Rn.addBinding(me,"noiseScale",{min:-1,max:2}).on("change",e=>{this.material.uniforms.uNoiseScale.value=e.value}),Rn.addBinding(me,"noiseAmplitude",{min:0,max:10}).on("change",e=>{this.material.uniforms.uNoiseAmplitude.value=e.value}),Rn.addBinding(me,"amplitudeStrength",{min:0,max:40}).on("change",e=>{this.material.uniforms.uAmplitudeStrength.value=e.value}),Rn.addBinding(me,"contrast",{min:0,max:2}).on("change",e=>{this.material.uniforms.uContrast.value=e.value}),Rn.addBinding(me,"brightness",{min:0,max:1}).on("change",e=>{this.material.uniforms.uBrightness.value=e.value}),Rn.addBinding(me,"details",{min:2,max:200,step:1}).on("change",e=>{this.mesh.geometry=new js(.5,e.value)}),Rn.addBinding(me,"wireframe").on("change",e=>{this.material.wireframe=e.value})}addEventListeners(){document.addEventListener("mousemove",this.onMouseMove)}createMaterial(){this.material=new Jm({roughness:0,metalness:0,wireframe:me.wireframe}),this.uniforms={uMap:{value:this.mapTexture},uColor1:{value:new Jt(me.color1)},uColor2:{value:new Jt(me.color2)},uTime:{value:0},uTimeScale:{value:me.timeScale},uNoiseAmplitude:{value:me.noiseAmplitude},uNoiseScale:{value:me.noiseScale},uAmplitudeStrength:{value:me.amplitudeStrength},uContrast:{value:me.contrast},uBrightness:{value:me.brightness}},this.material.onBeforeCompile=e=>{e.uniforms=Object.assign(e.uniforms,this.uniforms),e.vertexShader=e.vertexShader.replace("#include <common>",`
          #include <common>
  
          uniform float uTime;
          uniform float uTimeScale;
          uniform float uNoiseAmplitude;
          uniform float uNoiseScale;
  
          varying vec2 vUv;
          varying float vAmplitude;
  
          //	Classic Perlin 3D Noise 
          //	by Stefan Gustavson
          //
          vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
          vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
          vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}
  
          float cnoise(vec3 P){
            vec3 Pi0 = floor(P); // Integer part for indexing
            vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
            Pi0 = mod(Pi0, 289.0);
            Pi1 = mod(Pi1, 289.0);
            vec3 Pf0 = fract(P); // Fractional part for interpolation
            vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
            vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
            vec4 iy = vec4(Pi0.yy, Pi1.yy);
            vec4 iz0 = Pi0.zzzz;
            vec4 iz1 = Pi1.zzzz;
  
            vec4 ixy = permute(permute(ix) + iy);
            vec4 ixy0 = permute(ixy + iz0);
            vec4 ixy1 = permute(ixy + iz1);
  
            vec4 gx0 = ixy0 / 7.0;
            vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
            gx0 = fract(gx0);
            vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
            vec4 sz0 = step(gz0, vec4(0.0));
            gx0 -= sz0 * (step(0.0, gx0) - 0.5);
            gy0 -= sz0 * (step(0.0, gy0) - 0.5);
  
            vec4 gx1 = ixy1 / 7.0;
            vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
            gx1 = fract(gx1);
            vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
            vec4 sz1 = step(gz1, vec4(0.0));
            gx1 -= sz1 * (step(0.0, gx1) - 0.5);
            gy1 -= sz1 * (step(0.0, gy1) - 0.5);
  
            vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
            vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
            vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
            vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
            vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
            vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
            vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
            vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
  
            vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
            g000 *= norm0.x;
            g010 *= norm0.y;
            g100 *= norm0.z;
            g110 *= norm0.w;
            vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
            g001 *= norm1.x;
            g011 *= norm1.y;
            g101 *= norm1.z;
            g111 *= norm1.w;
  
            float n000 = dot(g000, Pf0);
            float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
            float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
            float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
            float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
            float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
            float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
            float n111 = dot(g111, Pf1);
  
            vec3 fade_xyz = fade(Pf0);
            vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
            vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
            float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
            return 2.2 * n_xyz;
          }
        `),e.vertexShader=e.vertexShader.replace("#include <project_vertex>",`
          #include <project_vertex>
  
          vec3 newPos = position;
          float noise = cnoise(position * uNoiseAmplitude + uTime * uTimeScale) * uNoiseScale;
          newPos += newPos * noise;
  
          gl_Position = projectionMatrix * modelViewMatrix * vec4( newPos, 1.0 );
          vAmplitude = noise;
        `),e.fragmentShader=e.fragmentShader.replace("#include <common>",`
          #include <common>
  
          uniform sampler2D uMap;
          uniform vec3 uColor1;
          uniform vec3 uColor2;
          uniform float uAmplitudeStrength;
          uniform float uContrast;
          uniform float uBrightness;
  
          varying vec2 vUv;
          varying float vAmplitude;
        `),e.fragmentShader=e.fragmentShader.replace("#include <output_fragment>",`
          #include <output_fragment>
  
          // Matcap UVs
          vec3 viewDir = normalize( vViewPosition );
          vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
          vec3 y = cross( viewDir, x );
          vec2 matcapUv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
  
          vec3 tex = texture2D(uMap, matcapUv).rgb;
          vec3 color = tex * outgoingLight;
          float elevation = vAmplitude * uAmplitudeStrength + .5;
          color *= mix(uColor1, uColor2, elevation);
          color.r = smoothstep(0., .38, color.r);
          color.g = smoothstep(0., .38, color.g);
          color.b = smoothstep(0., .38, color.b);
          color = uContrast * (color - .5) + .5 + uBrightness;
          
          gl_FragColor = vec4(color, diffuseColor.a);
      `)},this.material.uniforms=this.uniforms}createMesh(){this.mesh=new Vn(this.geometry,this.material),this.mesh.scale.multiplyScalar(1.2),this.mesh.position.y=-.2,this.add(this.mesh)}}class fg{constructor({mapSrc:t,hdrPath:e,hdrSrc:n}){const r=document.getElementById("webgl"),a=new sc({canvas:r,antialias:!1,alpha:!0});a.setPixelRatio(Math.min(2,window.devicePixelRatio)),a.setSize(window.innerWidth,window.innerHeight);const u=new n_().load(t),c=new e_().setPath(e).load(n),p=new Zm;p.environment=c;const d=new on(75,window.innerWidth/window.innerHeight,.1,1e3);d.position.z=1,p.add(d);const f=new pg({mapTexture:u,hdrEnv:c});p.add(f),window.addEventListener("resize",()=>{d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)});const m=g=>{f==null||f.onTick(g),a.render(p,d)};gsap.ticker.add(m)}}rn.WebglApp=fg,rn[Symbol.toStringTag]="Module"});
