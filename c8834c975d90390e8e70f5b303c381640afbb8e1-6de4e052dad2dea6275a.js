/*! For license information please see c8834c975d90390e8e70f5b303c381640afbb8e1-6de4e052dad2dea6275a.js.LICENSE.txt */
(self.webpackChunkleeorf_githuib_io=self.webpackChunkleeorf_githuib_io||[]).push([[682],{5900:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var o=a.apply(null,r);o&&e.push(o)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},1046:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(a),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function s(e){return e&&e.map((function(e,t){return n.createElement(e.tag,o({key:t},e.attr),s(e.child))}))}function c(e){return function(t){return n.createElement(u,o({attr:o({},e.attr)},t),s(e.child))}}function u(e){var t=function(t){var r,a=e.attr,i=e.size,s=e.title,c=l(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},3723:function(e,t,r){"use strict";r.d(t,{G:function(){return I},L:function(){return g},M:function(){return x},P:function(){return E},_:function(){return l},a:function(){return o},b:function(){return u},c:function(){return c},g:function(){return d},h:function(){return s}});var n=r(7294),a=(r(2369),r(5697)),i=r.n(a);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(a[r]=e[r]);return a}var s=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var c=function(e){var t;return function(e){var t,r;return Boolean(null==e||null==(t=e.images)||null==(r=t.fallback)?void 0:r.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,r,n,a){return void 0===a&&(a={}),o({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},a,{opacity:t?1:0})})}function d(e,t,r,n,a,i,l,s){var c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=n,c.height=a,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var m,p=["children"],f=function(e){var t=e.layout,r=e.width,a=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,r=l(e,p);return n.createElement(n.Fragment,null,n.createElement(f,o({},r)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],v=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,r=e.srcSet,a=e.loading,i=e.alt,s=void 0===i?"":i,c=e.shouldLoad,u=l(e,h);return n.createElement("img",o({},u,{decoding:"async",loading:a,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:s}))},b=function(e){var t=e.fallback,r=e.sources,a=void 0===r?[]:r,i=e.shouldLoad,s=void 0===i||i,c=l(e,v),u=c.sizes||(null==t?void 0:t.sizes),d=n.createElement(y,o({},c,t,{sizes:u,shouldLoad:s}));return a.length?n.createElement("picture",null,a.map((function(e){var t=e.media,r=e.srcSet,a=e.type;return n.createElement("source",{key:t+"-"+a+"-"+r,type:a,media:t,srcSet:s?r:void 0,"data-srcset":s?void 0:r,sizes:u})})),d):d};y.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},b.displayName="Picture",b.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};var w=["fallback"],E=function(e){var t=e.fallback,r=l(e,w);return t?n.createElement(b,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},r))};E.displayName="Placeholder",E.propTypes={fallback:a.string,sources:null==(m=b.propTypes)?void 0:m.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var x=function(e){return n.createElement(n.Fragment,null,n.createElement(b,o({},e)),n.createElement("noscript",null,n.createElement(b,o({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=b.propTypes;var C,N,k=function(e,t,r){for(var n=arguments.length,a=new Array(n>3?n-3:0),o=3;o<n;o++)a[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(a)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},O={image:i().object.isRequired,alt:k},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],j=new Set,T=function(e){var t=e.as,a=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,m=e.class,p=e.onStartLoad,f=e.onLoad,g=e.onError,h=l(e,S),v=i.width,y=i.height,b=i.layout,w=function(e,t,r){var n={},a="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:n}}(v,y,b),E=w.style,x=w.className,k=l(w,L),O=(0,n.useRef)(),T=(0,n.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(d=m);var I=function(e,t,r){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(b,v,y);return(0,n.useEffect)((function(){C||(C=Promise.all([r.e(774),r.e(217)]).then(r.bind(r,9217)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return N=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,n=O.current.querySelector("[data-gatsby-image-ssr]");return n&&s()?(n.complete?(null==p||p({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),n.addEventListener("load",(function e(){n.removeEventListener("load",e),null==f||f({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(T)):N&&j.has(T)?void 0:(C.then((function(r){var n=r.renderImageToString,a=r.swapPlaceholderImage;O.current&&(O.current.innerHTML=n(o({isLoading:!0,isLoaded:j.has(T),image:i},h)),j.has(T)||(e=requestAnimationFrame((function(){O.current&&(t=a(O.current,T,j,c,p,f,g))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,n.useLayoutEffect)((function(){j.has(T)&&N&&(O.current.innerHTML=N(o({isLoading:j.has(T),isLoaded:j.has(T),image:i},h)),null==p||p({wasCached:!0}),null==f||f({wasCached:!0}))}),[i]),(0,n.createElement)(a,o({},k,{style:o({},E,c,{backgroundColor:u}),className:x+(d?" "+d:""),ref:O,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},I=(0,n.memo)((function(e){return e.image?(0,n.createElement)(T,e):null}));I.propTypes=O,I.displayName="GatsbyImage";var _,P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],z=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),R={src:i().string.isRequired,alt:k,width:z,height:z,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=(_=I,function(e){var t=e.src,r=e.__imageData,a=e.__error,i=l(e,P);return a&&console.warn(a),r?n.createElement(_,o({image:r},i)):(console.warn("Image not loaded",t),null)});q.displayName="StaticImage",q.propTypes=R},2369:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,n=!1,a=0;a<e.length;a++){var i=e[a];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,n=r,r=!0,a++):r&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,a-1)+"-"+e.slice(a-1),n=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},785:function(e,t,r){"use strict";r.d(t,{X:function(){return u}});var n=r(7294),a=r(6936),i=r(1705),o=function(){var e=a._.home;return n.createElement(i.j,{link:e,className:"font-extrabold text-sm tracking-widest uppercase"},"leeorf")},l=r(4155),s=function(){return n.createElement("ul",{className:"flex space-x-5"},a.G.map((function(e){return n.createElement("li",{key:e.url,className:"uppercase text-xs"},n.createElement(i.j,{link:e,activeClassName:"font-bold"},n.createElement(l.G,null,e.caption)))})))},c=function(){return n.createElement("header",{className:"flex items-center w-full space-x-12"},n.createElement(l.G,null,n.createElement(o,null)),n.createElement("nav",null,n.createElement(s,null)))},u=function(e){var t=e.children;return n.createElement("main",{className:"flex flex-col items-center"},n.createElement("div",{className:"max-w-screen-xl self-stretch m-auto w-full px-6 py-6 sm:px-12"},n.createElement(c,null),n.createElement("article",{className:"py-12"},t)))}},2059:function(e,t,r){"use strict";r.d(t,{x:function(){return i}});var n=r(7294),a=r(4155),i=function(e){var t=e.items,r=e.onRender,i=e.numToShow,o=(0,n.useState)(!1),l=o[0],s=o[1];if(!t.length)return null;var c=!1,u=t.filter((function(e,t){var r=t>=i;return r&&(c=!0),l||!r})).map(r).map((function(e,t){return n.createElement("li",{key:t},e)})),d=c?n.createElement("li",null,n.createElement("button",{type:"button",className:"text-xs font-light",onClick:function(){s(!l)}},n.createElement(a.G,null,l?"- less":"+ more"))):null;return n.createElement("ul",{className:"flex flex-row flex-wrap justify-center sm:justify-start"},u,d)}},4017:function(e,t,r){"use strict";r.d(t,{R:function(){return l}});var n=r(7294),a=r(3723),i=r(1082),o=function(e){var t=e.imagePath,r=(0,i.K2)("504407540").allFile.nodes;if(t){var n=r.find((function(e){return e.relativePath===t}));if(n)return(0,a.c)(n)}},l=function(e){var t=e.image,r=e.fluidImage,i=e.className,l=void 0===i?"":i,s=e.imgClassName,c=void 0===s?"":s,u=o({imagePath:null==t?void 0:t.srcPath}),d=r||u;return d?n.createElement(a.G,{image:d,className:l,style:{height:"100%"},alt:(null==t?void 0:t.caption)||"",title:(null==t?void 0:t.caption)||"",imgClassName:c}):null}},1705:function(e,t,r){"use strict";r.d(t,{j:function(){return i}});var n=r(7294),a=r(1082),i=function(e){var t=e.link,r=e.children,i=e.className,o=e.shouldOpenInNewTab,l=void 0===o||o,s=e.activeClassName,c=void 0===s?"":s;if(!t.url)return null;var u=t.url.match(/http/gi),d=t.url.startsWith("#"),m=n.createElement("a",{href:t.url,title:t.caption,className:i,target:!d&&l?"_blank":"_self",rel:"noreferrer"},r),p=n.createElement(a.rU,{to:t.url,title:t.caption,activeClassName:c,className:i},r);return u||d?m:p}},4155:function(e,t,r){"use strict";r.d(t,{G:function(){return o}});var n=r(7294),a=r(5900),i=r.n(a),o=function(e){var t=e.children,r=e.className,a=e.hoverClassName,o=i()(r,a,{"transition duration-150 ease-in-out":!0,"hover:text-teal-500":!a});return n.createElement("span",{className:o},t)}},3400:function(e,t,r){"use strict";r.d(t,{$:function(){return s}});var n=r(7294),a=r(5900),i=r.n(a),o=r(2059),l=function(e){var t=e.tag;return n.createElement("span",{className:" bg-gray-200 text-xs px-2 py-1 rounded-sm inline-block mr-2 mb-2",key:t},t)},s=function(e){var t=e.tags,r=e.className,a=void 0===r?"":r,s=e.numToShow,c=void 0===s?1/0:s,u=i()(a,{});return n.createElement("div",{className:u},n.createElement(o.x,{items:t,onRender:function(e){return n.createElement(l,{key:e,tag:e})},numToShow:c}))}},6936:function(e,t,r){"use strict";r.d(t,{G:function(){return a},_:function(){return n}});var n={home:{caption:"Sobre",url:"/"},projects:{caption:"Projetos",url:"/projects"},blog:{caption:"Blog",url:"https://blog.leeorf.dev"}},a=Object.keys(n).map((function(e){var t=e;return Object.assign({},n[t])}))}}]);
//# sourceMappingURL=c8834c975d90390e8e70f5b303c381640afbb8e1-6de4e052dad2dea6275a.js.map