(window.webpackJsonp=window.webpackJsonp||[]).push([[7,6,10],{140:function(e,t,a){"use strict";a.r(t);a(159);var i=a(0),n=[{link:"mailto:albert.alises@gmail.com",icon:"fas fa-2x fa-envelope"},{link:"https://www.linkedin.com/in/albertalises/",icon:"fab fa-2x fa-linkedin"},{link:"https://github.com/aalises",icon:"fab fa-2x fa-github"},{link:"https://open.spotify.com/user/ironicpsycho?si=jn5PWC-xQxCDLEmiaxCHRw",icon:"fab fa-2x fa-spotify"}];t.default=function(){return i.createElement("div",{style:{justifyContent:"center"},className:"field is-grouped is-grouped-multiline"},n.map(function(e){return i.createElement("a",{"aria-label":"Links to social media (LinkedIn, Facebook, etc...)",style:{margin:"0rem 0.5rem"},key:e.icon+"-medialink",href:e.link,target:"_blank",rel:"noopener noreferrer",className:"icon is-medium media-link"},i.createElement("i",{className:""+e.icon}))}))}},144:function(e,t,a){"use strict";a.r(t);a(154),a(158);var i=a(163),n=a(0),r=a.n(n),s=a(140),o=a(4),l=a.n(o),d=(a(32),a(160),r.a.createContext({})),c=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func};var u=a(152),f=a.n(u),A=a(155),p=a(150);t.default=function(e){var t=e.name,a=e.role,r=Object(A.b)({to:{opacity:1,marginTop:"0rem"},from:{opacity:0,marginTop:"1.3rem"}});return n.createElement(c,{query:"2558237336",render:function(e){return n.createElement("div",{id:"section-Header",className:"container has-text-centered"},n.createElement(p.c,{margin:"4rem 5% 0 0",className:"column"},n.createElement("div",{className:"columns is-vcentered reverse-column-order"},n.createElement("div",{className:"column"},n.createElement(A.a.h1,{className:"title is-size-1 title-background",style:r},n.createElement("span",{style:{fontWeight:"300"}},"Hi! I'm "),t),n.createElement(A.a.h2,{style:r,className:"subtitle-background subtitle is-size-4 has-text-grey-dark"},a),n.createElement(s.default,null)),n.createElement("div",{className:"column"},n.createElement("figure",{className:"image is-180x180"},n.createElement(f.a,{style:{borderRadius:"290486px"},fixed:e.file.childImageSharp.fixed}))))))},data:i})}},150:function(e,t,a){"use strict";a.d(t,"c",function(){return f}),a.d(t,"d",function(){return A}),a.d(t,"e",function(){return p}),a.d(t,"b",function(){return h}),a.d(t,"a",function(){return m});var i=a(156),n=a.n(i),r=a(157);function s(){var e=n()(["\n  position: relative;\n  margin-top: 30.7rem;\n  @media (max-width: 727px) {\n    margin-top: 34rem;\n  }\n  background: white;\n"]);return s=function(){return e},e}function o(){var e=n()(["\n  position: fixed;\n  width: 100%;\n  background: aliceblue;\n  min-width: 388px;\n  section {\n    padding-bottom: 3rem;\n  }\n"]);return o=function(){return e},e}function l(){var e=n()(["\n  font-size: ",";\n"]);return l=function(){return e},e}function d(){var e=n()(["\n  position: fixed;\n  top: 30%;\n"]);return d=function(){return e},e}function c(){var e=n()(["\n  padding: ",";\n"]);return c=function(){return e},e}function u(){var e=n()(["\n  margin: ",";\n"]);return u=function(){return e},e}var f=r.a.div(u(),function(e){return e.margin||"0"}),A=r.a.div(c(),function(e){return e.padding||"0"}),p=(r.a.aside(d()),r.a.div(l(),function(e){return e.fontSize||"12px"})),h=r.a.div(o()),m=r.a.div(s())},152:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var n,r=i(a(7)),s=i(a(34)),o=i(a(73)),l=i(a(74)),d=i(a(0)),c=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},A=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p=[];var h=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),p.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+n+"<img "+o+l+t+s+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,n=e.onError,r=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},r,{onLoad:i,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});g.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,n=!1,r=t.fadeIn,o=A(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,n=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,n=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:n,fadeIn:r,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:A(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=A(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,E=e.Tag,y=e.itemProp,v="boolean"==typeof b?"lightgray":b,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),x={title:t,alt:this.state.isVisible?"":a,style:w,className:A};if(p){var B=p;return d.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(B.srcSet)},d.default.createElement(E,{style:{width:"100%",paddingBottom:100/B.aspectRatio+"%"}}),B.base64&&d.default.createElement(g,(0,l.default)({src:B.base64},x)),B.tracedSVG&&d.default.createElement(g,(0,l.default)({src:B.tracedSVG},x)),v&&d.default.createElement(E,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,B.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:B.srcSetWebp,sizes:B.sizes}),d.default.createElement("source",{srcSet:B.srcSet,sizes:B.sizes}),d.default.createElement(g,{alt:a,title:t,src:B.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},B))}}))}if(h){var R=h,j=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},r);return"inherit"===r.display&&delete j.display,d.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&d.default.createElement(g,(0,l.default)({src:R.base64},x)),R.tracedSVG&&d.default.createElement(g,(0,l.default)({src:R.tracedSVG},x)),v&&d.default.createElement(E,{title:t,style:{backgroundColor:v,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(g,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var E=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),y=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:E,sizes:y,fixed:E,fluid:y,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var v=b;t.default=v},153:function(e,t,a){var i=a(11),n=a(17),r=a(18),s=/"/g,o=function(e,t,a,i){var n=String(r(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},154:function(e,t,a){"use strict";a(153)("fixed",function(e){return function(){return e(this,"tt","","")}})},158:function(e,t,a){var i=a(25).f,n=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in n||a(19)&&i(n,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},159:function(e,t,a){"use strict";a(153)("link",function(e){return function(t){return e(this,"a","href",t)}})},160:function(e,t,a){var i;e.exports=(i=a(164))&&i.default||i},163:function(e){e.exports={data:{file:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEAv/EABYBAQEBAAAAAAAAAAAAAAAAAAMBAv/aAAwDAQACEAMQAAAB0T5pLVyUstglyDWf/8QAHRAAAgICAwEAAAAAAAAAAAAAAQMCBBESABMhI//aAAgBAQABBQJhxxkeuI9D562rDAFVRlLZ72bR+SrM1w//xAAYEQACAwAAAAAAAAAAAAAAAAABEQACEP/aAAgBAwEBPwEVCi3/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAECAQE/AW3S7//EABwQAAIBBQEAAAAAAAAAAAAAAAABEQIQEiFBYf/aAAgBAQAGPwJLr0ZZzanwfRClLVsVB//EABoQAQADAQEBAAAAAAAAAAAAAAEAETEhQVH/2gAIAQEAAT8hvjrSBXR9H0h6DY5Olx59uApSeZk4JIh+zRLUUeQoNT6T/9oADAMBAAIAAwAAABD4GL3/xAAYEQEAAwEAAAAAAAAAAAAAAAABABAhMf/aAAgBAwEBPxDsEdwcr//EABgRAAMBAQAAAAAAAAAAAAAAAAABIRAx/9oACAECAQE/EOYKRq5//8QAHBABAAICAwEAAAAAAAAAAAAAAQARIUExUWGR/9oACAEBAAE/EGSAdXXsoSlL7EaUlE/KQ6jhFiGlo2PsYSt6rO4b1Uo8lPUqsDoOTnMZrIpx7EKHacuc6Z//2Q==",width:180,height:180,src:"/static/316b1ba0d7bac03ff20600f741d6633c/a7e11/me.jpg",srcSet:"/static/316b1ba0d7bac03ff20600f741d6633c/a7e11/me.jpg 1x,\n/static/316b1ba0d7bac03ff20600f741d6633c/dee67/me.jpg 1.5x,\n/static/316b1ba0d7bac03ff20600f741d6633c/a6257/me.jpg 2x,\n/static/316b1ba0d7bac03ff20600f741d6633c/450bf/me.jpg 3x"}}}}}},164:function(e,t,a){"use strict";a.r(t);a(33);var i=a(0),n=a.n(i),r=a(4),s=a.n(r),o=a(54),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d}}]);
//# sourceMappingURL=component---src-pages-header-tsx-7055304816dbc2f959f2.js.map