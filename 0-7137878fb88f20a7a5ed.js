(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var i=n(a(152)),r=n(a(155)),s=n(a(7)),l=n(a(51)),o=n(a(52)),c=n(a(4)),d=n(a(0)),u=a(23),f=a(149);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:c.default.string,activeStyle:c.default.object},h=function(e){function t(t){var a;a=e.call(this,t)||this,(0,o.default)((0,l.default)((0,l.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,r.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,i=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,f.parsePath)(i.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,s=void 0===n?this.defaultGetProps:n,l=t.onClick,o=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.innerRef,t.state),m=t.replace,h=(0,i.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var g=p(a);return d.default.createElement(u.Link,(0,r.default)({to:g,state:c,getProps:s,innerRef:this.handleRef,onMouseEnter:function(e){o&&o(e),___loader.hovering((0,f.parsePath)(a).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),v(a,{state:c,replace:m})),!0}},h))},t}(d.default.Component);h.propTypes=(0,r.default)({},m,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var g=d.default.forwardRef(function(e,t){return d.default.createElement(h,(0,r.default)({innerRef:t},e))});t.default=g;var v=function(e,t){window.___navigate(p(e),t)};t.navigate=v;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},148:function(e,t,a){"use strict";var n=a(0);t.a=function(e){var t=e.icon,a=e.title;return n.createElement("div",{id:"section-"+a,style:{paddingTop:"2rem"}},n.createElement("span",{className:"title is-4 has-text-grey-dark"},n.createElement("i",{style:{paddingRight:"1rem"},className:"fas "+t}),a),n.createElement("div",{style:{margin:"1rem 0"},className:"is-divider"}))}},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var n=a(0),i=a.n(n),r=a(4),s=a.n(r),l=a(147),o=a.n(l);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(156),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var f=i.a.createContext({}),p=function(e){return i.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},150:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var i,r=n(a(7)),s=n(a(51)),l=n(a(152)),o=n(a(155)),c=n(a(0)),d=n(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=[];var h=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),m.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+n+i+"<img "+l+o+t+s+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},v=c.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,i=e.onError,r=(0,l.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({},r,{onLoad:n,onError:i,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});v.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,i=!1,r=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,i=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,i=!1);var o=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:!1,IOSupported:i,fadeIn:r,hasNoScript:o,seenBefore:l},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,i=e.style,r=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,h=e.fixed,y=e.backgroundColor,E=e.Tag,b=e.itemProp,w="boolean"==typeof y?"lightgray":y,S=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,f),N=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),R={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(m){var x=m;return c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),x.base64&&c.default.createElement(v,(0,o.default)({src:x.base64},R)),x.tracedSVG&&c.default.createElement(v,(0,o.default)({src:x.tracedSVG},R)),w&&c.default.createElement(E,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),c.default.createElement(v,{alt:a,title:t,src:x.src,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},x))}}))}if(h){var k=h,I=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},r);return"inherit"===r.display&&delete I.display,c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},k.base64&&c.default.createElement(v,(0,o.default)({src:k.base64},R)),k.tracedSVG&&c.default.createElement(v,(0,o.default)({src:k.tracedSVG},R)),w&&c.default.createElement(E,{title:t,style:{backgroundColor:w,width:k.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:k.height}}),this.state.isVisible&&c.default.createElement("picture",null,k.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),c.default.createElement("source",{srcSet:k.srcSet,sizes:k.sizes}),c.default.createElement(v,{alt:a,title:t,width:k.width,height:k.height,src:k.src,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,width:k.width,height:k.height},k))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var E=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),b=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:E,sizes:b,fixed:E,fluid:b,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var w=y;t.default=w},151:function(e,t,a){var n=a(11),i=a(17),r=a(18),s=/"/g,l=function(e,t,a,n){var i=String(r(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(n).replace(s,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),n(n.P+n.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},152:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}},154:function(e,t,a){"use strict";a(151)("fixed",function(e){return function(){return e(this,"tt","","")}})},155:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},156:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},159:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),i=a.n(n),r=a(4),s=a.n(r),l=a(53),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},161:function(e,t,a){"use strict";a(32);var n=a(0),i=a(152),r=a.n(i),s=(a(154),a(150)),l=a.n(s),o=function(e){var t=e.id,a=e.period,i=e.headingIcon,r=e.place,s=e.title,o=e.company,c=e.responsabilities,d=e.technologies,u=e.accomplishments,f=e.additional_content,p=e.images;return n.createElement("div",{className:"timeline-item"},n.createElement("div",{className:"timeline-marker is-icon is-48x48"},n.createElement("i",{className:"fa "+i})),n.createElement("div",{className:"timeline-content"},n.createElement("div",{className:"columns"},n.createElement("div",{className:"column"},p?n.createElement("figure",{className:"image is-96x96"},n.createElement(l.a,{fixed:p[t+"_logo"].childImageSharp.fixed})):null),n.createElement("div",{className:"column is-four-fifths"},n.createElement("p",{className:"heading"},a),n.createElement("h1",{className:"title is-size-5"},s),n.createElement("h6",{className:"subtitle is-size-6"},o),n.createElement("h6",{className:"subtitle is-size-6"},n.createElement("i",null,r)),n.createElement("div",{className:"content",style:{fontSize:"14px"}},n.createElement("h2",{className:"title is-size-6 has-text-grey-dark"},"Responsabilities"),n.createElement("ul",null,c.map(function(e,t){return n.createElement("li",{key:"resp-"+t},e)})),n.createElement("h2",{className:"title is-size-6 has-text-grey-dark"},"Technologies"),n.createElement("ul",null,d.map(function(e,t){return n.createElement("li",{key:"tech-"+t},e)})),n.createElement("h2",{className:"title is-size-6 has-text-grey-dark"},"Accomplishments"),n.createElement("ul",null,u.map(function(e,t){return n.createElement("li",{key:"acc-"+t},e)})),n.createElement("div",{className:"box",style:{paddingTop:"3rem"}},f(p)))))))},c=function(e){var t=e.id,a=e.headingIcon,i=e.period,r=e.place,s=e.university,o=e.GPA,c=e.degree,d=e.specialization,u=e.courses,f=e.additional_content,p=e.images;return n.createElement("div",{className:"timeline-item"},n.createElement("div",{className:"timeline-marker is-icon is-48x48"},n.createElement("i",{className:"fa "+a})),n.createElement("div",{className:"timeline-content"},n.createElement("div",{className:"columns"},n.createElement("div",{className:"column"},n.createElement("figure",{className:"image is-96x96"},n.createElement(l.a,{fixed:p[t+"_logo"].childImageSharp.fixed}))),n.createElement("div",{className:"column is-four-fifths"},n.createElement("p",{className:"heading"},i),n.createElement("h1",{className:"title is-size-5"},c),n.createElement("h2",{className:"subtitle is-size-6"},s," , ",n.createElement("i",null,r)," "),n.createElement("div",{className:"tags has-addons"},n.createElement("span",{className:"tag has-background-grey-dark has-text-white"},"GPA"),n.createElement("span",{className:"tag has-background-grey-lighter"},o)),n.createElement("div",{className:"content",style:{fontSize:"14px"}},n.createElement("h2",{className:"title is-size-6 has-text-grey-dark"},"Specialization"),n.createElement("ul",null,d.map(function(e,t){return n.createElement("li",{key:"spec-"+t},e)})),n.createElement("h2",{className:"title is-size-6 has-text-grey-dark"},"Courses"),n.createElement("ul",null,u.map(function(e,t){return n.createElement("li",{key:"course-"+t},e)})),n.createElement("div",{className:"box",style:{paddingTop:"3rem"}},f(p)))))))},d=function(e){var t=e.type,a=r()(e,["type"]);return n.createElement(n.Fragment,null,function(e){switch(e){case"experience":return n.createElement(o,a);case"education":return n.createElement(c,a)}}(t))};t.a=function(e){var t=e.itemType,a=e.data,i=e.images;return n.createElement("div",{className:"timeline"},a.map(function(e,a){return"item"===e.id?n.createElement(d,Object.assign({key:"timeline-item-"+t+"-"+a,type:t,images:i||null},e.data)):"header"===e.id?n.createElement("header",{key:"timeline-header-"+t+"-"+a,className:"timeline-header"},n.createElement("span",{className:"tag "+(e.medium?"is-medium":"")+" has-background-grey has-text-white"},e.data)):void 0}))}}}]);
//# sourceMappingURL=0-7137878fb88f20a7a5ed.js.map