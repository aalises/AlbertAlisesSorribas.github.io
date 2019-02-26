(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6],{144:function(e,A,t){"use strict";t.r(A);var a=t(159),i=t(0),s=t(150),n=t(158),r=t(151),c=t.n(r),l={id:"UPF_DEGREE",headingIcon:"fa-university",period:"June 2012 - December 2015",place:"Barcelona, Spain",university:"Universitat Pompeu Fabra (UPF)",GPA:"8.22 / 10 (2nd of promotion)",degree:"Telecommunication Engineering, Computer Sciences",specialization:[i.createElement("div",{key:"spec-degree-1"},"Image Processing and Machine Learning"),i.createElement("div",{key:"spec-degree-2"},"Sound and Signal Processing"),i.createElement("div",{key:"spec-degree-3"},"Developing Full Stack applications")],courses:[i.createElement("div",{key:"spec-course-1"},"Computer Sciences Courses on Fundamentals"),i.createElement("div",{key:"spec-course-2"},"Sound and Image Processing courses, with emphasis on Machine Learning"),i.createElement("div",{key:"spec-course-3"},"Fundamental Courses on Mathemathics and Physics")],additional_content:function(e){return i.createElement("div",{className:"column is-three-quarters"},i.createElement("figure",{className:"image"},i.createElement(c.a,{fluid:e.UPF_DEGREE_1.childImageSharp.fluid}),i.createElement("figcaption",null,"We were pretty happy when graduating.")))}},d={id:"RMIT_DEGREE",headingIcon:"fa-robot",period:"December 2015 - July 2016",place:"Melbourne, Australia",university:"Royal Melbourne Institute of Technology (RMIT)",GPA:"9.12 / 10",degree:"Computer Sciences",specialization:[i.createElement("div",{key:"spec-rmit-1"},"Artificial Intelligence and algorithm programming in C, ProLog"),i.createElement("div",{key:"spec-rmit-2"},"Computer Graphics using Javascript / Three.JS"),i.createElement("div",{key:"spec-rmit-3"},"Virtual/Augmented Reality project using Unity3D and Vuforia + Google Cardboard")],courses:[i.createElement("div",{key:"course-rmit-1"},"Courses on Artificial Intelligence, Computer Graphics"),i.createElement("div",{key:"course-rmit-2"},"A project on VR/AR using Unity3D, structured with Git")],additional_content:function(e){return i.createElement("div",{className:"column is-full"},i.createElement("figure",{className:"image"},i.createElement(c.a,{fluid:e.RMIT_DEGREE_1.childImageSharp.fluid}),i.createElement("figcaption",null,"We also had some time to travel around the land down under")))}},o=[{id:"header",medium:!0,data:"Now"},{id:"item",data:{id:"UPF_MASTER",headingIcon:"fa-briefcase-medical",period:"September 2016 - July 2017",university:"Universitat Pompeu Fabra (UPF)",place:"Barcelona, Spain",GPA:"9.15 / 10",degree:"Msc. in Computational Biomedical Engineering",specialization:[i.createElement("div",{key:"spec-master-1"},"Algorithm programming in Python"),i.createElement("div",{key:"spec-master-2"},"Application programming and Computer Graphics for Medical Data")],courses:[i.createElement("div",{key:"course-master-1"},"Courses on Machine Learning, Complexity Science, Advanced Signal Analysis, Surgery Planning"),i.createElement("div",{key:"course-master-2"},"Academic Seminars on Machine Learning on Medicine and other topics organized by BCN MedTech"),i.createElement("div",{key:"course-master-3"},"Python and MATLAB Programming for Biomedical sciences")],additional_content:function(e){return i.createElement("div",{className:"tile is-ancestor"},i.createElement("div",{className:"tile is-parent is-12"},i.createElement("div",{className:"tile is-child is-7"},i.createElement("figure",{className:"image"},i.createElement(c.a,{fluid:e.UPF_MASTER_1.childImageSharp.fluid}),i.createElement("figcaption",null,"Presenting a paper on my results from the work and master thesis at the CARS 2017 conference."))),i.createElement("div",{className:"tile is-parent is-vertical"},i.createElement("div",{className:"tile"},i.createElement("figure",{className:"image"},i.createElement(c.a,{fluid:e.UPF_MASTER_2.childImageSharp.fluid}),i.createElement("figcaption",null,"Project on Augmented Reality Tracking for fetal interventions."))),i.createElement("div",{className:"tile"},i.createElement("figure",{className:"image"},i.createElement(c.a,{fluid:e.UPF_MASTER_3.childImageSharp.fluid}),i.createElement("figcaption",null,"Simulation of Deep Brain Stimulation Electrode insertion using C++."))))))}}},{id:"item",data:d},{id:"item",data:l},{id:"header",medium:!0,data:"2012"}];A.default=function(){var e=a.data;return i.createElement(i.Fragment,null,i.createElement(s.a,{title:"Education",icon:"fa-book"}),i.createElement(n.a,{itemType:"education",data:o,images:e}))}},150:function(e,A,t){"use strict";var a=t(0),i=t(154);A.a=function(e){var A=e.icon,t=e.title,s=Object(i.b)({to:{opacity:1,marginLeft:"0rem"},from:{opacity:0,marginLeft:"1.5rem"}});return a.createElement("div",{id:"section-"+t,style:{paddingTop:"2rem"}},a.createElement(i.a.span,{style:s,className:"title is-4 has-text-grey-dark"},a.createElement("i",{style:{paddingRight:"1rem"},className:"fas "+A}),t),a.createElement("div",{style:{margin:"1rem 0"},className:"is-divider"}))}},151:function(e,A,t){"use strict";var a=t(8);A.__esModule=!0,A.default=void 0;var i,s=a(t(7)),n=a(t(34)),r=a(t(73)),c=a(t(74)),l=a(t(0)),d=a(t(4)),o=function(e){var A=(0,c.default)({},e);return A.resolutions&&(A.fixed=A.resolutions,delete A.resolutions),A.sizes&&(A.fluid=A.sizes,delete A.sizes),A},m={},E=function(e){var A=o(e),t=A.fluid?A.fluid.src:A.fixed.src;return m[t]||!1},u=[];var f=function(e,A){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){u.forEach(function(A){A[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(A[0]),A[1]())})})},{rootMargin:"200px"})),i).observe(e),u.push([e,A])},p=function(e){var A=e.src?'src="'+e.src+'" ':'src="" ',t=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+t+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+t+"/>":"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',r=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1";return"<picture>"+a+i+"<img "+r+c+A+n+s+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=l.default.forwardRef(function(e,A){var t=e.style,a=e.onLoad,i=e.onError,s=(0,r.default)(e,["style","onLoad","onError"]);return l.default.createElement("img",(0,c.default)({},s,{onLoad:a,onError:i,ref:A,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))});g.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var h=function(e){function A(A){var t;t=e.call(this,A)||this;var a=!0,i=!1,s=A.fadeIn,r=E(A);!r&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,i=!0),"undefined"==typeof window&&(a=!1),A.critical&&(a=!0,i=!1);var c=!(t.props.critical&&!t.props.fadeIn);return t.state={isVisible:a,imgLoaded:!1,IOSupported:i,fadeIn:s,hasNoScript:c,seenBefore:r},t.imageRef=l.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,n.default)((0,n.default)(t))),t.handleRef=t.handleRef.bind((0,n.default)((0,n.default)(t))),t}(0,s.default)(A,e);var t=A.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:E(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},t.handleRef=function(e){var A=this;this.state.IOSupported&&e&&f(e,function(){var e=E(A.props);A.state.isVisible||"function"!=typeof A.props.onStartLoad||A.props.onStartLoad({wasCached:e}),A.setState({isVisible:!0,imgLoaded:e})})},t.handleImageLoaded=function(){var e,A,t;e=this.props,A=o(e),t=A.fluid?A.fluid.src:A.fixed.src,m[t]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var e=o(this.props),A=e.title,t=e.alt,a=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,r=void 0===n?{}:n,d=e.placeholderStyle,m=void 0===d?{}:d,E=e.placeholderClassName,u=e.fluid,f=e.fixed,h=e.backgroundColor,b=e.Tag,Q=e.itemProp,j="boolean"==typeof h?"lightgray":h,B=(0,c.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},r,m),S=(0,c.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},r),w={title:A,alt:this.state.isVisible?"":t,style:B,className:E};if(u){var N=u;return l.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},l.default.createElement(b,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),N.base64&&l.default.createElement(g,(0,c.default)({src:N.base64},w)),N.tracedSVG&&l.default.createElement(g,(0,c.default)({src:N.tracedSVG},w)),j&&l.default.createElement(b,{title:A,style:{backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&l.default.createElement("picture",null,N.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),l.default.createElement("source",{srcSet:N.srcSet,sizes:N.sizes}),l.default.createElement(g,{alt:t,title:A,src:N.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:Q})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:p((0,c.default)({alt:t,title:A},N))}}))}if(f){var y=f,x=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:y.width,height:y.height},s);return"inherit"===s.display&&delete x.display,l.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(y.srcSet)},y.base64&&l.default.createElement(g,(0,c.default)({src:y.base64},w)),y.tracedSVG&&l.default.createElement(g,(0,c.default)({src:y.tracedSVG},w)),j&&l.default.createElement(b,{title:A,style:{backgroundColor:j,width:y.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:y.height}}),this.state.isVisible&&l.default.createElement("picture",null,y.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:y.srcSetWebp,sizes:y.sizes}),l.default.createElement("source",{srcSet:y.srcSet,sizes:y.sizes}),l.default.createElement(g,{alt:t,title:A,width:y.width,height:y.height,src:y.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:Q})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:p((0,c.default)({alt:t,title:A,width:y.width,height:y.height},y))}}))}return null},A}(l.default.Component);h.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),Q=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});h.propTypes={resolutions:b,sizes:Q,fixed:b,fluid:Q,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var j=h;A.default=j},152:function(e,A,t){var a=t(11),i=t(17),s=t(18),n=/"/g,r=function(e,A,t,a){var i=String(s(e)),r="<"+A;return""!==t&&(r+=" "+t+'="'+String(a).replace(n,"&quot;")+'"'),r+">"+i+"</"+A+">"};e.exports=function(e,A){var t={};t[e]=A(r),a(a.P+a.F*i(function(){var A=""[e]('"');return A!==A.toLowerCase()||A.split('"').length>3}),"String",t)}},153:function(e,A,t){"use strict";t(152)("fixed",function(e){return function(){return e(this,"tt","","")}})},158:function(e,A,t){"use strict";t(33);var a=t(0),i=t(73),s=t.n(i),n=(t(153),t(151)),r=t.n(n),c=function(e){var A=e.id,t=e.period,i=e.headingIcon,s=e.place,n=e.title,c=e.company,l=e.responsabilities,d=e.technologies,o=e.accomplishments,m=e.additional_content,E=e.images;return a.createElement("div",{className:"timeline-item"},a.createElement("div",{className:"timeline-marker is-icon is-48x48"},a.createElement("i",{className:"fa "+i})),a.createElement("div",{className:"timeline-content"},a.createElement("div",{className:"columns"},a.createElement("div",{className:"column"},E?a.createElement("figure",{className:"image is-96x96"},a.createElement(r.a,{fixed:E[A+"_logo"].childImageSharp.fixed})):null),a.createElement("div",{className:"column is-four-fifths"},a.createElement("p",{className:"heading"},t),a.createElement("h1",{className:"title is-size-5"},n),a.createElement("h6",{className:"subtitle is-size-6"},c),a.createElement("h6",{className:"subtitle is-size-6"},a.createElement("i",null,s)),a.createElement("div",{className:"content",style:{fontSize:"14px"}},a.createElement("h2",{className:"title is-size-6 has-text-grey-dark"},"Responsabilities"),a.createElement("ul",null,l.map(function(e,A){return a.createElement("li",{key:"resp-"+A},e)})),a.createElement("h2",{className:"title is-size-6 has-text-grey-dark"},"Technologies"),a.createElement("ul",null,d.map(function(e,A){return a.createElement("li",{key:"tech-"+A},e)})),a.createElement("h2",{className:"title is-size-6 has-text-grey-dark"},"Accomplishments"),a.createElement("ul",null,o.map(function(e,A){return a.createElement("li",{key:"acc-"+A},e)})),a.createElement("div",{className:"box",style:{paddingTop:"3rem"}},m(E)))))))},l=function(e){var A=e.id,t=e.headingIcon,i=e.period,s=e.place,n=e.university,c=e.GPA,l=e.degree,d=e.specialization,o=e.courses,m=e.additional_content,E=e.images;return a.createElement("div",{className:"timeline-item"},a.createElement("div",{className:"timeline-marker is-icon is-48x48"},a.createElement("i",{className:"fa "+t})),a.createElement("div",{className:"timeline-content"},a.createElement("div",{className:"columns"},a.createElement("div",{className:"column"},a.createElement("figure",{className:"image is-96x96"},a.createElement(r.a,{fixed:E[A+"_logo"].childImageSharp.fixed}))),a.createElement("div",{className:"column is-four-fifths"},a.createElement("p",{className:"heading"},i),a.createElement("h1",{className:"title is-size-5"},l),a.createElement("h2",{className:"subtitle is-size-6"},n," , ",a.createElement("i",null,s)," "),a.createElement("div",{className:"tags has-addons"},a.createElement("span",{className:"tag has-background-grey-dark has-text-white"},"GPA"),a.createElement("span",{className:"tag has-background-grey-lighter"},c)),a.createElement("div",{className:"content",style:{fontSize:"14px"}},a.createElement("h2",{className:"title is-size-6 has-text-grey-dark"},"Specialization"),a.createElement("ul",null,d.map(function(e,A){return a.createElement("li",{key:"spec-"+A},e)})),a.createElement("h2",{className:"title is-size-6 has-text-grey-dark"},"Courses"),a.createElement("ul",null,o.map(function(e,A){return a.createElement("li",{key:"course-"+A},e)})),a.createElement("div",{className:"box",style:{paddingTop:"3rem"}},m(E)))))))},d=function(e){var A=e.type,t=s()(e,["type"]);return a.createElement(a.Fragment,null,function(e){switch(e){case"experience":return a.createElement(c,t);case"education":return a.createElement(l,t)}}(A))};A.a=function(e){var A=e.itemType,t=e.data,i=e.images;return a.createElement("div",{className:"timeline"},t.map(function(e,t){return"item"===e.id?a.createElement(d,Object.assign({key:"timeline-item-"+A+"-"+t,type:A,images:i||null},e.data)):"header"===e.id?a.createElement("header",{key:"timeline-header-"+A+"-"+t,className:"timeline-header"},a.createElement("span",{className:"tag "+(e.medium?"is-medium":"")+" has-background-grey has-text-white"},e.data)):void 0}))}},159:function(e){e.exports={data:{UPF_DEGREE_logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAIAAAAf7rriAAAACXBIWXMAAAsSAAALEgHS3X78AAABZ0lEQVQ4y7WTW0sCQRTH/Zp9gojoJSIvGSXoekm6aRlBhAgVEoIPFSEIET0K0YMPGllkNjPrrpaX3XV2ZjvrQ6g4+pANf5Y5c/Y3/7OzZxzWH4ZjprDJLCYUh+ysnTm3Hz2KnEHkDGFvFK9tDWk9ilYCcjghhE1F/VhwUSTTTzKkGqak3nur1ha93DAEcF3FnshvODIAgxK4Loah7H5oDa6zdqdxcgH+UDzT9PEwJQrx7bZz91+X143TtFZ4UuPJ1lW+mcqox2fwAmwtdKa4LgcPm+kM8kjV+eXWTV6JJwGTI0faY9GGXSExLCtkY9sovcj+mJpINc+zxL/fur37zuY6DwW9WMabO6yrTflmzuwQqjVKFThn4O1FTUfu0OQDk2DOqWnLNK3+xM5yDp7IHZ4Ir0oTfhVkhTDrdN/nlrBvjwRixD8s6QB5o9Akg/uO9ja0l1GuGM+vY1SumErj/64kY1M0K+cfjAMpOECaxqwAAAAASUVORK5CYII=",width:96,height:91,src:"/static/0f565b356069a0c2aa43ef0ad5ef8297/5a287/UPF_LOGO.png",srcSet:"/static/0f565b356069a0c2aa43ef0ad5ef8297/5a287/UPF_LOGO.png 1x,\n/static/0f565b356069a0c2aa43ef0ad5ef8297/697ba/UPF_LOGO.png 1.5x,\n/static/0f565b356069a0c2aa43ef0ad5ef8297/265b6/UPF_LOGO.png 2x"}}},UPF_DEGREE_1:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAZABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAgMF/8QAGAEAAgMAAAAAAAAAAAAAAAAAAAIBAwT/2gAMAwEAAhADEAAAAYYztDWFQFHeS2WqGY+f/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIAAxIhMhH/2gAIAQEAAQUCVnEzxm4p9UU7NliGpyXV8lscu1fZ5n//xAAYEQACAwAAAAAAAAAAAAAAAAAAEQMQMf/aAAgBAwEBPwFCI8r/xAAVEQEBAAAAAAAAAAAAAAAAAAAQAf/aAAgBAgEBPwEp/8QAIBAAAgEBCQAAAAAAAAAAAAAAAAERIQIQEiAxMmFxsf/aAAgBAQAGPwJTF1CsNpCtat7jCqJHp1yS8n//xAAdEAEAAgIDAQEAAAAAAAAAAAABABEhMWFxgRBR/9oACAEBAAE/IRGqVaMFa8/uanWncWkZDcodTNtMZgMwcSnLQ5pwTd2Z7jwcfDb7DU//2gAMAwEAAgADAAAAEPcqsf/EABgRAQEBAQEAAAAAAAAAAAAAAAERACFB/9oACAEDAQE/EOiurC2+ZVa7/8QAFhEBAQEAAAAAAAAAAAAAAAAAEDEB/9oACAECAQE/EJpZ/8QAIRABAAIBAwQDAAAAAAAAAAAAAREhADFBURBhcaGBwfD/2gAIAQEAAT8QdggbtHitcTMlJKgnbLq3urmPgClKCCM82ZL+j0byIdq840zAyMyp/cYPSwkRIBHoxUIDDcxpXaMcJt8Bpmj4c9D7dD//2Q==",aspectRatio:.8,src:"/static/3fb0e64e45584b1077b1ed84e8b3aab6/fd090/graduated.jpg",srcSet:"/static/3fb0e64e45584b1077b1ed84e8b3aab6/19d7c/graduated.jpg 200w,\n/static/3fb0e64e45584b1077b1ed84e8b3aab6/2373f/graduated.jpg 400w,\n/static/3fb0e64e45584b1077b1ed84e8b3aab6/fd090/graduated.jpg 768w",sizes:"(max-width: 768px) 100vw, 768px"}}},RMIT_DEGREE_logo:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB7amEupFZcAD/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQITEiD/2gAIAQEAAQUC0k0g7RhJkyU14//EABcRAAMBAAAAAAAAAAAAAAAAAAERIEH/2gAIAQMBAT8BKyP/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAdEAABAgcAAAAAAAAAAAAAAAAAATIQESAxQXGh/9oACAEBAAY/AnDkgsslui7o/8QAHBABAAICAwEAAAAAAAAAAAAAAREhADEQIEFx/9oACAEBAAE/IdtKYeAF04gQ7Sy4t4lIX4w2hct9P//aAAwDAQACAAMAAAAQiwAA/8QAFhEAAwAAAAAAAAAAAAAAAAAAICFR/9oACAEDAQE/EGQH/8QAFxEAAwEAAAAAAAAAAAAAAAAAAREgQf/aAAgBAgEBPxAPY//EAB0QAQACAgIDAAAAAAAAAAAAAAERIQBBIFGBkaH/2gAIAQEAAT8Q01igZhcqmi99AvxPeSVsKMDT1kmMiFBFweccmWTHZQ10F5sxnZt4f//Z",width:96,height:96,src:"/static/8ae0cafdde5ff322793a7e27a8985fb3/9836d/RMIT_LOGO.jpg",srcSet:"/static/8ae0cafdde5ff322793a7e27a8985fb3/9836d/RMIT_LOGO.jpg 1x,\n/static/8ae0cafdde5ff322793a7e27a8985fb3/86e2b/RMIT_LOGO.jpg 1.5x,\n/static/8ae0cafdde5ff322793a7e27a8985fb3/fd1b7/RMIT_LOGO.jpg 2x"}}},RMIT_DEGREE_1:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAv/EABYBAQEBAAAAAAAAAAAAAAAAAAMAAf/aAAwDAQACEAMQAAABXqNyA0nLP//EABoQAAICAwAAAAAAAAAAAAAAAAABAxMCEiL/2gAIAQEAAQUCUhYWET63eDuZ/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAESEf/aAAgBAwEBPwGMRB//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEv/aAAgBAgEBPwGlP//EABkQAQEAAwEAAAAAAAAAAAAAAAEAEDEyEf/aAAgBAQAGPwLkuS0YTwtF/8QAGhABAAEFAAAAAAAAAAAAAAAAAQAQMVFhwf/aAAgBAQABPyEagVi4iWobIk85/9oADAMBAAIAAwAAABB0/wD/xAAXEQADAQAAAAAAAAAAAAAAAAAAARFB/9oACAEDAQE/EGtHpB//xAAXEQADAQAAAAAAAAAAAAAAAAAAARFx/9oACAECAQE/EFTMH//EABsQAQEBAAIDAAAAAAAAAAAAAAERADGRUXHR/9oACAEBAAE/EPKPa5Io9rk365lFRjvUPYbZ405bP//Z",aspectRatio:1.5,src:"/static/f8e6551f08d0e048a4b516c8cb011b01/e0c6a/easternpoint.jpg",srcSet:"/static/f8e6551f08d0e048a4b516c8cb011b01/13bfa/easternpoint.jpg 200w,\n/static/f8e6551f08d0e048a4b516c8cb011b01/bab55/easternpoint.jpg 400w,\n/static/f8e6551f08d0e048a4b516c8cb011b01/e0c6a/easternpoint.jpg 800w,\n/static/f8e6551f08d0e048a4b516c8cb011b01/4128d/easternpoint.jpg 960w",sizes:"(max-width: 800px) 100vw, 800px"}}},UPF_MASTER_logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAIAAAAf7rriAAAACXBIWXMAAAsSAAALEgHS3X78AAABZ0lEQVQ4y7WTW0sCQRTH/Zp9gojoJSIvGSXoekm6aRlBhAgVEoIPFSEIET0K0YMPGllkNjPrrpaX3XV2ZjvrQ6g4+pANf5Y5c/Y3/7OzZxzWH4ZjprDJLCYUh+ysnTm3Hz2KnEHkDGFvFK9tDWk9ilYCcjghhE1F/VhwUSTTTzKkGqak3nur1ha93DAEcF3FnshvODIAgxK4Loah7H5oDa6zdqdxcgH+UDzT9PEwJQrx7bZz91+X143TtFZ4UuPJ1lW+mcqox2fwAmwtdKa4LgcPm+kM8kjV+eXWTV6JJwGTI0faY9GGXSExLCtkY9sovcj+mJpINc+zxL/fur37zuY6DwW9WMabO6yrTflmzuwQqjVKFThn4O1FTUfu0OQDk2DOqWnLNK3+xM5yDp7IHZ4Ir0oTfhVkhTDrdN/nlrBvjwRixD8s6QB5o9Akg/uO9ja0l1GuGM+vY1SumErj/64kY1M0K+cfjAMpOECaxqwAAAAASUVORK5CYII=",width:96,height:91,src:"/static/0f565b356069a0c2aa43ef0ad5ef8297/5a287/UPF_LOGO.png",srcSet:"/static/0f565b356069a0c2aa43ef0ad5ef8297/5a287/UPF_LOGO.png 1x,\n/static/0f565b356069a0c2aa43ef0ad5ef8297/697ba/UPF_LOGO.png 1.5x,\n/static/0f565b356069a0c2aa43ef0ad5ef8297/265b6/UPF_LOGO.png 2x"}}},UPF_MASTER_1:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAADBf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBAP/aAAwDAQACEAMQAAABbFQai5cjrkcYWseu/8QAGxAAAwACAwAAAAAAAAAAAAAAAAECAxEQEyH/2gAIAQEAAQUCQ9EqdQ32NmTK5ezLQ69qmiqb4//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABoQAAICAwAAAAAAAAAAAAAAAAEQAhEAICH/2gAIAQEABj8CyypKo69K/8QAGhABAQEBAQEBAAAAAAAAAAAAAQARITFBYf/aAAgBAQABPyFPyB3j+yi77ZjucSLMfsFTDIBywDJmEcb1xhc9v//aAAwDAQACAAMAAAAQQyHO/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEREEH/2gAIAQMBAT8QlGpwbz//xAAXEQEBAQEAAAAAAAAAAAAAAAABABFB/9oACAECAQE/EByHewbZf//EAB8QAQACAQMFAAAAAAAAAAAAAAEAIRExQWFRcYGR4f/aAAgBAQABPxAHZziDchuh0NM6/JkN1grjxABRAjmNzx61uEIaFKYFcqpd7Rq16iSu+k2JGuI4ZTP/2Q==",aspectRatio:.7497219132369299,src:"/static/0460ee76ee70c64696cd26220cc4b25b/15c7b/paperpresentation.jpg",srcSet:"/static/0460ee76ee70c64696cd26220cc4b25b/a6644/paperpresentation.jpg 200w,\n/static/0460ee76ee70c64696cd26220cc4b25b/6e60f/paperpresentation.jpg 400w,\n/static/0460ee76ee70c64696cd26220cc4b25b/15c7b/paperpresentation.jpg 674w",sizes:"(max-width: 674px) 100vw, 674px"}}},UPF_MASTER_2:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAYqcfk5o8r//xAAZEAADAQEBAAAAAAAAAAAAAAABAgMAERL/2gAIAQEAAQUCRy28vwrbTpMZqAhKkj//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAcEAACAQUBAAAAAAAAAAAAAAAAAQIRISIxceH/2gAIAQEABj8Colc00aZ4YyozKV+H/8QAGxAAAwACAwAAAAAAAAAAAAAAAAERMUEhUXH/2gAIAQEAAT8hz56Iq1Y1srLF8MPfsQeMBwf/2gAMAwEAAgADAAAAECjv/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAGBEAAwEBAAAAAAAAAAAAAAAAAAExEUH/2gAIAQIBAT8QdhrXD//EABsQAQADAAMBAAAAAAAAAAAAAAEAESFBUZFx/9oACAEBAAE/EHgUAflDFFvvUQ18CJ3u5tBEUMTTyK7WcCp//9k=",aspectRatio:1.3333333333333333,src:"/static/2e59736be185d37dc3dc7aa10e49fcf0/e0c6a/StaticSetup3.jpg",srcSet:"/static/2e59736be185d37dc3dc7aa10e49fcf0/13bfa/StaticSetup3.jpg 200w,\n/static/2e59736be185d37dc3dc7aa10e49fcf0/bab55/StaticSetup3.jpg 400w,\n/static/2e59736be185d37dc3dc7aa10e49fcf0/e0c6a/StaticSetup3.jpg 800w,\n/static/2e59736be185d37dc3dc7aa10e49fcf0/bab49/StaticSetup3.jpg 1200w,\n/static/2e59736be185d37dc3dc7aa10e49fcf0/fbea3/StaticSetup3.jpg 1600w,\n/static/2e59736be185d37dc3dc7aa10e49fcf0/c9c5f/StaticSetup3.jpg 2400w,\n/static/2e59736be185d37dc3dc7aa10e49fcf0/6ad0a/StaticSetup3.jpg 4160w",sizes:"(max-width: 800px) 100vw, 800px"}}},UPF_MASTER_3:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAAAsSAAALEgHS3X78AAAFKUlEQVQ4y12RW0ybZRjHv2sTExPjhRoTx6HHryfoGGUHYJzHmLAVcLiOATuxFdjKoYwWCrSwQtfSQmGUwmBTs0SH0WSeYqLxevHKSxN1HrZpppkzxhvNz+ermhgvfnnevu/b3/N/n08pc+RTbM3HpuZhMedhVfOl5mM2/U1h4YvsKrGyd4+TQt2LmEx5sq+xA1Uw/wftt7LTlpeT5Q6NeZiMBTkMBk2Wh9NpZn9Fqax3oNPlyX4eRuMOQeT/RxM6LJLIVCAdCuVSIQajDr1BMOop0BVSUmJGtehzcr0+X4TSUJKr8hoNTaJVi4SyiktRzXqMJgNGswmDWcWgWtBbbDkMFiuFBjM6o0nOjRjknqoasVmNIimQWsDOYj12ayEOm44iux7FZlNRrTZUmwOL3SldirGbrNiNgurA5tiJxeGU8yIsNrtIVJzFVirLXTQ3VVFX7aTYYaLEqbJrp4pSVFyEo9iJ3Vmaw1jTxPMDEzwXmEfn7sTqKsdZUoaztIxSl4u6umrcLQdoaqyhYm8Ju10O9pQJLjt7pSouueTavSeH1TOMfe1znJ/8huHjX7HefsCe5U9xtXSwb/c+2tobcB9uomZ/ORX7yqiqcFFT6aJaPlp1ZWmuKpWVFVTt38/epsPsSnxGw/oPHHr9AS2v3qNeq1uPMKauU95cK+kOUlNXy4GG2lzCgweqcjTWV9BQW86BugqUmno5qGrg2XQ9u27doXHtPtWbd2l69Qe6rj+k9sb3VG7fZ/elC7ibX+Jwq5vWI820uw/RfqRR9upplREcO3pQRlGPcuhQI62Nbp68WYT1/bc4lnlM8+v38EjS5rVvJO09Wj78E9Obm7zceQTPMQ+eo+0c72jlVFc7fb2dXPSe5IK3Q/abUNrbWjjR5sHm34dpK0vn1V/Q35KE176l5uYD2lbucvCDP3jho/do97ZzrucUF/tPMjbcL/Th6z/NmZ5X6PK00n28FeX4Ky/TfaKTLulWMJOmI/uIstsPKdl+QMdrP1G9+iVHt3+nbPsTDgc9+M/3Mx44z/DF8/T3dtN39gRejTOd9J7yoJzqOs6Z0z34TndTNx7j+etf8EL2Du6bP3MyfY/Ote/ofOcPTO++QU+wm9DQCCM+L37fOUYHz8m6l6GB0/j6tGf3oHjPnmTAexbfwHmGfAMciaTJX5ilcesr2jZ/pHX5a6rX7/PU22MEJ7xMBQJMBoYEHxOXLhL0a0/3cmnonDTpRbng7ZX4fbLhIzA6zMzoCP0zveiv3aJq6zHu1Uc8/fZt+ShuEqEQs+FxZqfHmJkaJRwaYWp8iNCYyP0XCI70ofgH+wmMDDIx5mdqYozw9ASJqRAT81fQvbbNE2sxnrnZxnhymKXoZeLRELGZceYjQebCAWZz4mEmg4M5sRL0D8oP2ZwMcjkcYn52mtjcDKn5WSYTowyv+IgnpsjEYywmwmxmImxclfWVMPFZTRwQsSSe9OfSKqGAn4jIopGQdA+zIKLF+BxLyRiZZJKNZIrMYoLV9DyZpShry3NcyyS4kU2JOE46HiEWGSc6pY3BjzIdGvtHNk0qdpmlxDzLqTirSwtklpNkVhJk5Y/rqwnWpWaXpdHSHKuLUbLSZONqgo3VOUkc4LJIlVmZmSZLxmZYWphnRdJk0kmyK4tycVHSaKTYXEsKKVkv5NDkmnQ5EWElGRZhiDmZqxKNTJKQmS3G5TB1RZ72ryzNtbVltrIaaW6sCxtprq8v5uSaNLtyRcYRZUmevRCdzH2svwB6lZWiC41gnwAAAABJRU5ErkJggg==",aspectRatio:.9451371571072319,src:"/static/e16354e2548417bd45f1465f4bede919/e95a7/brain_simulation.png",srcSet:"/static/e16354e2548417bd45f1465f4bede919/87839/brain_simulation.png 200w,\n/static/e16354e2548417bd45f1465f4bede919/e95a7/brain_simulation.png 379w",sizes:"(max-width: 379px) 100vw, 379px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-education-tsx-56cee637924e0a371ca8.js.map