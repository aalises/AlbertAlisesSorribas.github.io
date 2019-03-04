(window.webpackJsonp=window.webpackJsonp||[]).push([[8,5],{137:function(A,e,a){"use strict";a.r(e);a(157);var t=a(0),i=[{link:"mailto:albert.alises@gmail.com",icon:"fas fa-2x fa-envelope"},{link:"https://www.linkedin.com/in/albertalises/",icon:"fab fa-2x fa-linkedin"},{link:"https://github.com/aalises",icon:"fab fa-2x fa-github"},{link:"https://open.spotify.com/user/ironicpsycho?si=jn5PWC-xQxCDLEmiaxCHRw",icon:"fab fa-2x fa-spotify"}];e.default=function(){return t.createElement("div",{style:{justifyContent:"center"},className:"field is-grouped is-grouped-multiline"},i.map(function(A){return t.createElement("a",{style:{margin:"0rem 0.5rem"},key:A.icon+"-medialink",href:A.link,target:"_blank",rel:"noopener noreferrer",className:"icon is-medium media-link"},t.createElement("i",{className:""+A.icon}))}))}},138:function(A,e,a){"use strict";a.r(e);a(154),a(153);var t=a(160),i=a(0),n=a(137),c=a(150),l=a(149),r=a.n(l);e.default=function(A){var e=A.name,a=A.role;return i.createElement(c.StaticQuery,{query:"2558237336",render:function(A){return i.createElement("div",{id:"section-Header",className:"container has-text-centered"},i.createElement("div",{className:"column is-four-fifths"},i.createElement("div",{className:"columns is-vcentered reverse-column-order"},i.createElement("div",{className:"column"},i.createElement("h1",{className:"wow slideInLeft title is-size-1"},e),i.createElement("h2",{className:"subtitle is-size-4 has-text-grey"},a),i.createElement(n.default,null)),i.createElement("div",{className:"column"},i.createElement("figure",{className:"image is-180x180"},i.createElement(r.a,{style:{borderRadius:"290486px"},fixed:A.file.childImageSharp.fixed}))))))},data:t})}},139:function(A,e,a){"use strict";a.r(e);var t=a(0),i=a(148),n=[{icon:"fas fa-envelope",field:"albert.alises@gmail.com"},{icon:"fab fa-github",field:"/aalises"},{icon:"fab fa-linkedin",field:"/albertalises"},{icon:"fas fa-globe-europe",field:"Based in Barcelona, open to work remote / relocate"}],c=function(A){var e=A.data;return t.createElement(t.Fragment,null,e.map(function(A){return t.createElement("div",{key:"contact-"+A.icon},t.createElement("span",null,t.createElement("i",{style:{paddingRight:"1rem"},className:A.icon}),t.createElement("i",null,A.field)))}))};e.default=function(){return t.createElement(t.Fragment,null,t.createElement(i.a,{title:"Contact",icon:"fa-mobile-alt"}),t.createElement(c,{data:n}))}},140:function(A,e,a){"use strict";a.r(e);a(32);var t=a(0),i=a(148),n=function(A){var e=A.title,a=A.issued,i=A.description;return t.createElement("div",{className:"box"},t.createElement("div",{className:"column is-full"},t.createElement("h1",{className:"title is-size-5"},e),t.createElement("h2",{className:"subtitle is-size-6"},a),t.createElement("div",{className:"content",style:{fontSize:"14px"}},i)))},c=[{id:"bachelor_thesis",title:"Honors in the Bachelor's Thesis: Virtual Reality Visualisation of 3D Moving Cardiac Sequences",issued:"Universitat Pompeu Fabra, 2016",description:t.createElement("p",null,"Awarded Honors in the Bachelor's thesis on 2016 for my research work on Virtual Reality carried on King's College London")},{id:"tuition_fee",title:"Tuition Fee Waiver for Academic Performance",issued:"Universitat Pompeu Fabra, 2016",description:t.createElement("p",null,"Awarded the Tuition Fee Waiver for Academic Performance of the UPF Masters")},{id:"honors_subjects",title:"Honors in Artificial Intelligence, Image Processing and Differential Equations",issued:"Universitat Pompeu Fabra, 2012-2015",description:t.createElement("p",null,"Awarded honors for grading on several subjects")}];e.default=function(){return t.createElement(t.Fragment,null,t.createElement(i.a,{title:"Honors / Awards",icon:"fa-award"}),c.map(function(A){return t.createElement(n,Object.assign({key:"honor-item-"+A.id},A))}))}},141:function(A,e,a){"use strict";a.r(e);a(32);var t=a(0),i=a.n(t),n=a(148),c=(a(153),function(A){var e=A.title,a=A.data,t=A.color;return i.a.createElement("div",{className:"column is-half"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-content skills-content"},i.a.createElement("h3",{className:"title is-5"},e),i.a.createElement("div",{className:"content"},a.map(function(A,e){return i.a.createElement("article",{key:A.name+"-"+e,className:"media"},i.a.createElement("div",{className:"media-content"},i.a.createElement("div",{className:"content"},i.a.createElement("p",null,i.a.createElement("strong",null,A.label,":"),i.a.createElement("br",null),i.a.createElement("progress",{className:"progress is-"+t+" is-small",value:A.value,max:"100"})))))})))))}),l=[{title:"Front-End Web Development",data:[{label:"Javascript",value:90},{label:"Typescript",value:70},{label:"React.js stack (React, Redux, React Router, etc)",value:85},{label:"HTML5/CSS , SASS, Styled Components, Bulma",value:80},{label:"Webpack / Parcel",value:60},{label:"Qt (C++)",value:75}],color:"info"},{title:"Back-End Web Development",data:[{label:"Python",value:70},{label:"Node.js",value:80},{label:"REST APIs (Flask, Swagger, SQLAlchemy)",value:70},{label:"mongoDB",value:55},{label:"Express.js",value:40}],color:"success"},{title:"Testing and CI/CD",data:[{label:"Docker",value:65},{label:"Jenkins",value:60},{label:"Cypress",value:70},{label:"Jest + Puppeteer",value:80},{label:"PyTest",value:50}],color:"warning"},{title:"3D Graphics and VR/AR Development",data:[{label:"Unity3D",value:80},{label:"Three.js",value:70},{label:"Cg",value:50},{label:"Vuforia",value:50}],color:"danger"},{title:"Languages",data:[{label:"Spanish",value:100},{label:"Catalan",value:100},{label:"English",value:90}],color:"primary"},{title:"Other",data:[{label:"Git",value:90},{label:"Agile/Scrum methodologies",value:90},{label:"Blender / Photoshop",value:45},{label:"LaTeX",value:75}],color:"dark"}];e.default=function(){return t.createElement(t.Fragment,null,t.createElement(n.a,{title:"Skills",icon:"fa-laptop-code"}),t.createElement("div",{className:"columns is-multiline"},l.map(function(A,e){return t.createElement(c,Object.assign({key:A.title+"-"+e},A))})))}},142:function(A,e,a){"use strict";a.r(e);var t=a(158),i=a(0),n=a(148),c=a(161),l=a(149),r=a.n(l),s={id:"UPF_DEGREE",headingIcon:"fa-university",period:"June 2012 - December 2015",place:"Barcelona, Spain",university:"Universitat Pompeu Fabra (UPF)",GPA:"8.22 / 10 (2nd of promotion)",degree:"Telecommunication Engineering, Computer Sciences",specialization:[i.createElement("div",{key:"spec-degree-1"},"Image Processing and Machine Learning"),i.createElement("div",{key:"spec-degree-2"},"Sound and Signal Processing"),i.createElement("div",{key:"spec-degree-3"},"Developing Full Stack applications")],courses:[i.createElement("div",{key:"spec-course-1"},"Computer Sciences Courses on Fundamentals"),i.createElement("div",{key:"spec-course-2"},"Sound and Image Processing courses, with emphasis on Machine Learning"),i.createElement("div",{key:"spec-course-3"},"Fundamental Courses on Mathemathics and Physics")],additional_content:function(A){return i.createElement("div",{className:"column is-three-quarters"},i.createElement("figure",{className:"image"},i.createElement(r.a,{fluid:A.UPF_DEGREE_1.childImageSharp.fluid}),i.createElement("figcaption",null,"We were pretty happy when graduating.")))}},o={id:"RMIT_DEGREE",headingIcon:"fa-robot",period:"December 2015 - July 2016",place:"Melbourne, Australia",university:"Royal Melbourne Institute of Technology (RMIT)",GPA:"9.12 / 10",degree:"Computer Sciences",specialization:[i.createElement("div",{key:"spec-rmit-1"},"Artificial Intelligence and algorithm programming in C, ProLog"),i.createElement("div",{key:"spec-rmit-2"},"Computer Graphics using Javascript / Three.JS"),i.createElement("div",{key:"spec-rmit-3"},"Virtual/Augmented Reality project using Unity3D and Vuforia + Google Cardboard")],courses:[i.createElement("div",{key:"course-rmit-1"},"Courses on Artificial Intelligence, Computer Graphics"),i.createElement("div",{key:"course-rmit-2"},"A project on VR/AR using Unity3D, structured with Git")],additional_content:function(A){return i.createElement("div",{className:"column is-full"},i.createElement("figure",{className:"image"},i.createElement(r.a,{fluid:A.RMIT_DEGREE_1.childImageSharp.fluid}),i.createElement("figcaption",null,"We also had some time to travel around the land down under")))}},E=[{id:"header",medium:!0,data:"Now"},{id:"item",data:{id:"UPF_MASTER",headingIcon:"fa-briefcase-medical",period:"September 2016 - July 2017",university:"Universitat Pompeu Fabra (UPF)",place:"Barcelona, Spain",GPA:"9.15 / 10",degree:"Msc. in Computational Biomedical Engineering",specialization:[i.createElement("div",{key:"spec-master-1"},"Algorithm programming in Python"),i.createElement("div",{key:"spec-master-2"},"Application programming and Computer Graphics for Medical Data")],courses:[i.createElement("div",{key:"course-master-1"},"Courses on Machine Learning, Complexity Science, Advanced Signal Analysis, Surgery Planning"),i.createElement("div",{key:"course-master-2"},"Academic Seminars on Machine Learning on Medicine and other topics organized by BCN MedTech"),i.createElement("div",{key:"course-master-3"},"Python and MATLAB Programming for Biomedical sciences")],additional_content:function(A){return i.createElement("div",{className:"tile is-ancestor"},i.createElement("div",{className:"tile is-parent is-12"},i.createElement("div",{className:"tile is-child is-7"},i.createElement("figure",{className:"image"},i.createElement(r.a,{fluid:A.UPF_MASTER_1.childImageSharp.fluid}),i.createElement("figcaption",null,"Presenting a paper on my results from the work and master thesis at the CARS 2017 conference."))),i.createElement("div",{className:"tile is-parent is-vertical"},i.createElement("div",{className:"tile"},i.createElement("figure",{className:"image"},i.createElement(r.a,{fluid:A.UPF_MASTER_2.childImageSharp.fluid}),i.createElement("figcaption",null,"Project on Augmented Reality Tracking for fetal interventions."))),i.createElement("div",{className:"tile"},i.createElement("figure",{className:"image"},i.createElement(r.a,{fluid:A.UPF_MASTER_3.childImageSharp.fluid}),i.createElement("figcaption",null,"Simulation of Deep Brain Stimulation Electrode insertion using C++."))))))}}},{id:"item",data:o},{id:"item",data:s},{id:"header",medium:!0,data:"2012"}],m=a(150);e.default=function(){return i.createElement(m.StaticQuery,{query:"4082101337",render:function(A){return i.createElement(i.Fragment,null,i.createElement(n.a,{title:"Education",icon:"fa-book"}),i.createElement(c.a,{itemType:"education",data:E,images:A}))},data:t})}},146:function(A,e,a){"use strict";a.r(e);var t=a(0),i=a.n(t),n=a(138),c=a(143),l=a(142),r=a(141),s=a(140),o=a(139),E=function(){return t.createElement("footer",{className:"footer"},t.createElement("div",{className:"content"},t.createElement("p",null,t.createElement("strong",null,"Thanks for reading!")," If you have any inquiry of project do not hesitate to contact me"," ",t.createElement("span",{role:"img","aria-label":"smile"},"😃"))))},m=["Header","Experience","Education","Skills","Honors / Awards","Contact"],d=function(){return t.createElement("div",{className:"breadcrumb is-centered has-bullet-separator"},t.createElement("ul",{className:"is-size-6"},m.map(function(A){return t.createElement("li",{key:"sidebar-"+A},t.createElement("a",{onClick:function(){return window.scroll({top:document.getElementById("section-"+A).offsetTop,behavior:"smooth"})},className:"media-link"},A))})))};a(163),e.default=function(){return i.a.createElement("section",{className:"hero is-default is-bold"},i.a.createElement("div",{className:"hero-body",style:{paddingTop:"6rem"}},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column is-four-fifths is-offset-1"},i.a.createElement(n.default,{name:"Albert Alises Sorribas",role:"Software Developer"}),i.a.createElement(d,null),i.a.createElement("div",{className:"column is-full"},i.a.createElement(c.default,null),i.a.createElement(l.default,null),i.a.createElement(r.default,null),i.a.createElement(s.default,null),i.a.createElement(o.default,null)))),i.a.createElement(E,null))))}},153:function(A,e,a){var t=a(25).f,i=Function.prototype,n=/^\s*function ([^ (]*)/;"name"in i||a(16)&&t(i,"name",{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(A){return""}}})},157:function(A,e,a){"use strict";a(151)("link",function(A){return function(e){return A(this,"a","href",e)}})},158:function(A){A.exports={data:{UPF_DEGREE_logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAIAAAAf7rriAAAACXBIWXMAAAsSAAALEgHS3X78AAABZ0lEQVQ4y7WTW0sCQRTH/Zp9gojoJSIvGSXoekm6aRlBhAgVEoIPFSEIET0K0YMPGllkNjPrrpaX3XV2ZjvrQ6g4+pANf5Y5c/Y3/7OzZxzWH4ZjprDJLCYUh+ysnTm3Hz2KnEHkDGFvFK9tDWk9ilYCcjghhE1F/VhwUSTTTzKkGqak3nur1ha93DAEcF3FnshvODIAgxK4Loah7H5oDa6zdqdxcgH+UDzT9PEwJQrx7bZz91+X143TtFZ4UuPJ1lW+mcqox2fwAmwtdKa4LgcPm+kM8kjV+eXWTV6JJwGTI0faY9GGXSExLCtkY9sovcj+mJpINc+zxL/fur37zuY6DwW9WMabO6yrTflmzuwQqjVKFThn4O1FTUfu0OQDk2DOqWnLNK3+xM5yDp7IHZ4Ir0oTfhVkhTDrdN/nlrBvjwRixD8s6QB5o9Akg/uO9ja0l1GuGM+vY1SumErj/64kY1M0K+cfjAMpOECaxqwAAAAASUVORK5CYII=",width:96,height:91,src:"/static/0f565b356069a0c2aa43ef0ad5ef8297/5a287/UPF_LOGO.png",srcSet:"/static/0f565b356069a0c2aa43ef0ad5ef8297/5a287/UPF_LOGO.png 1x,\n/static/0f565b356069a0c2aa43ef0ad5ef8297/697ba/UPF_LOGO.png 1.5x,\n/static/0f565b356069a0c2aa43ef0ad5ef8297/265b6/UPF_LOGO.png 2x"}}},UPF_DEGREE_1:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAZABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAgMF/8QAGAEAAgMAAAAAAAAAAAAAAAAAAAIBAwT/2gAMAwEAAhADEAAAAYYztDWFQFHeS2WqGY+f/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIAAxIhMhH/2gAIAQEAAQUCVnEzxm4p9UU7NliGpyXV8lscu1fZ5n//xAAYEQACAwAAAAAAAAAAAAAAAAAAEQMQMf/aAAgBAwEBPwFCI8r/xAAVEQEBAAAAAAAAAAAAAAAAAAAQAf/aAAgBAgEBPwEp/8QAIBAAAgEBCQAAAAAAAAAAAAAAAAERIQIQEiAxMmFxsf/aAAgBAQAGPwJTF1CsNpCtat7jCqJHp1yS8n//xAAdEAEAAgIDAQEAAAAAAAAAAAABABEhMWFxgRBR/9oACAEBAAE/IRGqVaMFa8/uanWncWkZDcodTNtMZgMwcSnLQ5pwTd2Z7jwcfDb7DU//2gAMAwEAAgADAAAAEPcqsf/EABgRAQEBAQEAAAAAAAAAAAAAAAERACFB/9oACAEDAQE/EOiurC2+ZVa7/8QAFhEBAQEAAAAAAAAAAAAAAAAAEDEB/9oACAECAQE/EJpZ/8QAIRABAAIBAwQDAAAAAAAAAAAAAREhADFBURBhcaGBwfD/2gAIAQEAAT8QdggbtHitcTMlJKgnbLq3urmPgClKCCM82ZL+j0byIdq840zAyMyp/cYPSwkRIBHoxUIDDcxpXaMcJt8Bpmj4c9D7dD//2Q==",aspectRatio:.8,src:"/static/3fb0e64e45584b1077b1ed84e8b3aab6/fd090/graduated.jpg",srcSet:"/static/3fb0e64e45584b1077b1ed84e8b3aab6/19d7c/graduated.jpg 200w,\n/static/3fb0e64e45584b1077b1ed84e8b3aab6/2373f/graduated.jpg 400w,\n/static/3fb0e64e45584b1077b1ed84e8b3aab6/fd090/graduated.jpg 768w",sizes:"(max-width: 768px) 100vw, 768px"}}},RMIT_DEGREE_logo:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB7amEupFZcAD/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQITEiD/2gAIAQEAAQUC0k0g7RhJkyU14//EABcRAAMBAAAAAAAAAAAAAAAAAAERIEH/2gAIAQMBAT8BKyP/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAdEAABAgcAAAAAAAAAAAAAAAAAATIQESAxQXGh/9oACAEBAAY/AnDkgsslui7o/8QAHBABAAICAwEAAAAAAAAAAAAAAREhADEQIEFx/9oACAEBAAE/IdtKYeAF04gQ7Sy4t4lIX4w2hct9P//aAAwDAQACAAMAAAAQiwAA/8QAFhEAAwAAAAAAAAAAAAAAAAAAICFR/9oACAEDAQE/EGQH/8QAFxEAAwEAAAAAAAAAAAAAAAAAAREgQf/aAAgBAgEBPxAPY//EAB0QAQACAgIDAAAAAAAAAAAAAAERIQBBIFGBkaH/2gAIAQEAAT8Q01igZhcqmi99AvxPeSVsKMDT1kmMiFBFweccmWTHZQ10F5sxnZt4f//Z",width:96,height:96,src:"/static/8ae0cafdde5ff322793a7e27a8985fb3/9836d/RMIT_LOGO.jpg",srcSet:"/static/8ae0cafdde5ff322793a7e27a8985fb3/9836d/RMIT_LOGO.jpg 1x,\n/static/8ae0cafdde5ff322793a7e27a8985fb3/86e2b/RMIT_LOGO.jpg 1.5x,\n/static/8ae0cafdde5ff322793a7e27a8985fb3/fd1b7/RMIT_LOGO.jpg 2x"}}},RMIT_DEGREE_1:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAv/EABYBAQEBAAAAAAAAAAAAAAAAAAMAAf/aAAwDAQACEAMQAAABXqNyA0nLP//EABoQAAICAwAAAAAAAAAAAAAAAAABAxMCEiL/2gAIAQEAAQUCUhYWET63eDuZ/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAESEf/aAAgBAwEBPwGMRB//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEv/aAAgBAgEBPwGlP//EABkQAQEAAwEAAAAAAAAAAAAAAAEAEDEyEf/aAAgBAQAGPwLkuS0YTwtF/8QAGhABAAEFAAAAAAAAAAAAAAAAAQAQMVFhwf/aAAgBAQABPyEagVi4iWobIk85/9oADAMBAAIAAwAAABB0/wD/xAAXEQADAQAAAAAAAAAAAAAAAAAAARFB/9oACAEDAQE/EGtHpB//xAAXEQADAQAAAAAAAAAAAAAAAAAAARFx/9oACAECAQE/EFTMH//EABsQAQEBAAIDAAAAAAAAAAAAAAERADGRUXHR/9oACAEBAAE/EPKPa5Io9rk365lFRjvUPYbZ405bP//Z",aspectRatio:1.5,src:"/static/f8e6551f08d0e048a4b516c8cb011b01/e0c6a/easternpoint.jpg",srcSet:"/static/f8e6551f08d0e048a4b516c8cb011b01/13bfa/easternpoint.jpg 200w,\n/static/f8e6551f08d0e048a4b516c8cb011b01/bab55/easternpoint.jpg 400w,\n/static/f8e6551f08d0e048a4b516c8cb011b01/e0c6a/easternpoint.jpg 800w,\n/static/f8e6551f08d0e048a4b516c8cb011b01/4128d/easternpoint.jpg 960w",sizes:"(max-width: 800px) 100vw, 800px"}}},UPF_MASTER_logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAIAAAAf7rriAAAACXBIWXMAAAsSAAALEgHS3X78AAABZ0lEQVQ4y7WTW0sCQRTH/Zp9gojoJSIvGSXoekm6aRlBhAgVEoIPFSEIET0K0YMPGllkNjPrrpaX3XV2ZjvrQ6g4+pANf5Y5c/Y3/7OzZxzWH4ZjprDJLCYUh+ysnTm3Hz2KnEHkDGFvFK9tDWk9ilYCcjghhE1F/VhwUSTTTzKkGqak3nur1ha93DAEcF3FnshvODIAgxK4Loah7H5oDa6zdqdxcgH+UDzT9PEwJQrx7bZz91+X143TtFZ4UuPJ1lW+mcqox2fwAmwtdKa4LgcPm+kM8kjV+eXWTV6JJwGTI0faY9GGXSExLCtkY9sovcj+mJpINc+zxL/fur37zuY6DwW9WMabO6yrTflmzuwQqjVKFThn4O1FTUfu0OQDk2DOqWnLNK3+xM5yDp7IHZ4Ir0oTfhVkhTDrdN/nlrBvjwRixD8s6QB5o9Akg/uO9ja0l1GuGM+vY1SumErj/64kY1M0K+cfjAMpOECaxqwAAAAASUVORK5CYII=",width:96,height:91,src:"/static/0f565b356069a0c2aa43ef0ad5ef8297/5a287/UPF_LOGO.png",srcSet:"/static/0f565b356069a0c2aa43ef0ad5ef8297/5a287/UPF_LOGO.png 1x,\n/static/0f565b356069a0c2aa43ef0ad5ef8297/697ba/UPF_LOGO.png 1.5x,\n/static/0f565b356069a0c2aa43ef0ad5ef8297/265b6/UPF_LOGO.png 2x"}}},UPF_MASTER_1:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAADBf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBAP/aAAwDAQACEAMQAAABbFQai5cjrkcYWseu/8QAGxAAAwACAwAAAAAAAAAAAAAAAAECAxEQEyH/2gAIAQEAAQUCQ9EqdQ32NmTK5ezLQ69qmiqb4//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABoQAAICAwAAAAAAAAAAAAAAAAEQAhEAICH/2gAIAQEABj8CyypKo69K/8QAGhABAQEBAQEBAAAAAAAAAAAAAQARITFBYf/aAAgBAQABPyFPyB3j+yi77ZjucSLMfsFTDIBywDJmEcb1xhc9v//aAAwDAQACAAMAAAAQQyHO/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEREEH/2gAIAQMBAT8QlGpwbz//xAAXEQEBAQEAAAAAAAAAAAAAAAABABFB/9oACAECAQE/EByHewbZf//EAB8QAQACAQMFAAAAAAAAAAAAAAEAIRExQWFRcYGR4f/aAAgBAQABPxAHZziDchuh0NM6/JkN1grjxABRAjmNzx61uEIaFKYFcqpd7Rq16iSu+k2JGuI4ZTP/2Q==",aspectRatio:.7497219132369299,src:"/static/0460ee76ee70c64696cd26220cc4b25b/15c7b/paperpresentation.jpg",srcSet:"/static/0460ee76ee70c64696cd26220cc4b25b/a6644/paperpresentation.jpg 200w,\n/static/0460ee76ee70c64696cd26220cc4b25b/6e60f/paperpresentation.jpg 400w,\n/static/0460ee76ee70c64696cd26220cc4b25b/15c7b/paperpresentation.jpg 674w",sizes:"(max-width: 674px) 100vw, 674px"}}},UPF_MASTER_2:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAYqcfk5o8r//xAAZEAADAQEBAAAAAAAAAAAAAAABAgMAERL/2gAIAQEAAQUCRy28vwrbTpMZqAhKkj//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAcEAACAQUBAAAAAAAAAAAAAAAAAQIRISIxceH/2gAIAQEABj8Colc00aZ4YyozKV+H/8QAGxAAAwACAwAAAAAAAAAAAAAAAAERMUEhUXH/2gAIAQEAAT8hz56Iq1Y1srLF8MPfsQeMBwf/2gAMAwEAAgADAAAAECjv/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAGBEAAwEBAAAAAAAAAAAAAAAAAAExEUH/2gAIAQIBAT8QdhrXD//EABsQAQADAAMBAAAAAAAAAAAAAAEAESFBUZFx/9oACAEBAAE/EHgUAflDFFvvUQ18CJ3u5tBEUMTTyK7WcCp//9k=",aspectRatio:1.3333333333333333,src:"/static/2e59736be185d37dc3dc7aa10e49fcf0/e0c6a/StaticSetup3.jpg",srcSet:"/static/2e59736be185d37dc3dc7aa10e49fcf0/13bfa/StaticSetup3.jpg 200w,\n/static/2e59736be185d37dc3dc7aa10e49fcf0/bab55/StaticSetup3.jpg 400w,\n/static/2e59736be185d37dc3dc7aa10e49fcf0/e0c6a/StaticSetup3.jpg 800w,\n/static/2e59736be185d37dc3dc7aa10e49fcf0/bab49/StaticSetup3.jpg 1200w,\n/static/2e59736be185d37dc3dc7aa10e49fcf0/fbea3/StaticSetup3.jpg 1600w,\n/static/2e59736be185d37dc3dc7aa10e49fcf0/c9c5f/StaticSetup3.jpg 2400w,\n/static/2e59736be185d37dc3dc7aa10e49fcf0/6ad0a/StaticSetup3.jpg 4160w",sizes:"(max-width: 800px) 100vw, 800px"}}},UPF_MASTER_3:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAAAsSAAALEgHS3X78AAAFKUlEQVQ4y12RW0ybZRjHv2sTExPjhRoTx6HHryfoGGUHYJzHmLAVcLiOATuxFdjKoYwWCrSwQtfSQmGUwmBTs0SH0WSeYqLxevHKSxN1HrZpppkzxhvNz+ermhgvfnnevu/b3/N/n08pc+RTbM3HpuZhMedhVfOl5mM2/U1h4YvsKrGyd4+TQt2LmEx5sq+xA1Uw/wftt7LTlpeT5Q6NeZiMBTkMBk2Wh9NpZn9Fqax3oNPlyX4eRuMOQeT/RxM6LJLIVCAdCuVSIQajDr1BMOop0BVSUmJGtehzcr0+X4TSUJKr8hoNTaJVi4SyiktRzXqMJgNGswmDWcWgWtBbbDkMFiuFBjM6o0nOjRjknqoasVmNIimQWsDOYj12ayEOm44iux7FZlNRrTZUmwOL3SldirGbrNiNgurA5tiJxeGU8yIsNrtIVJzFVirLXTQ3VVFX7aTYYaLEqbJrp4pSVFyEo9iJ3Vmaw1jTxPMDEzwXmEfn7sTqKsdZUoaztIxSl4u6umrcLQdoaqyhYm8Ju10O9pQJLjt7pSouueTavSeH1TOMfe1znJ/8huHjX7HefsCe5U9xtXSwb/c+2tobcB9uomZ/ORX7yqiqcFFT6aJaPlp1ZWmuKpWVFVTt38/epsPsSnxGw/oPHHr9AS2v3qNeq1uPMKauU95cK+kOUlNXy4GG2lzCgweqcjTWV9BQW86BugqUmno5qGrg2XQ9u27doXHtPtWbd2l69Qe6rj+k9sb3VG7fZ/elC7ibX+Jwq5vWI820uw/RfqRR9upplREcO3pQRlGPcuhQI62Nbp68WYT1/bc4lnlM8+v38EjS5rVvJO09Wj78E9Obm7zceQTPMQ+eo+0c72jlVFc7fb2dXPSe5IK3Q/abUNrbWjjR5sHm34dpK0vn1V/Q35KE176l5uYD2lbucvCDP3jho/do97ZzrucUF/tPMjbcL/Th6z/NmZ5X6PK00n28FeX4Ky/TfaKTLulWMJOmI/uIstsPKdl+QMdrP1G9+iVHt3+nbPsTDgc9+M/3Mx44z/DF8/T3dtN39gRejTOd9J7yoJzqOs6Z0z34TndTNx7j+etf8EL2Du6bP3MyfY/Ote/ofOcPTO++QU+wm9DQCCM+L37fOUYHz8m6l6GB0/j6tGf3oHjPnmTAexbfwHmGfAMciaTJX5ilcesr2jZ/pHX5a6rX7/PU22MEJ7xMBQJMBoYEHxOXLhL0a0/3cmnonDTpRbng7ZX4fbLhIzA6zMzoCP0zveiv3aJq6zHu1Uc8/fZt+ShuEqEQs+FxZqfHmJkaJRwaYWp8iNCYyP0XCI70ofgH+wmMDDIx5mdqYozw9ASJqRAT81fQvbbNE2sxnrnZxnhymKXoZeLRELGZceYjQebCAWZz4mEmg4M5sRL0D8oP2ZwMcjkcYn52mtjcDKn5WSYTowyv+IgnpsjEYywmwmxmImxclfWVMPFZTRwQsSSe9OfSKqGAn4jIopGQdA+zIKLF+BxLyRiZZJKNZIrMYoLV9DyZpShry3NcyyS4kU2JOE46HiEWGSc6pY3BjzIdGvtHNk0qdpmlxDzLqTirSwtklpNkVhJk5Y/rqwnWpWaXpdHSHKuLUbLSZONqgo3VOUkc4LJIlVmZmSZLxmZYWphnRdJk0kmyK4tycVHSaKTYXEsKKVkv5NDkmnQ5EWElGRZhiDmZqxKNTJKQmS3G5TB1RZ72ryzNtbVltrIaaW6sCxtprq8v5uSaNLtyRcYRZUmevRCdzH2svwB6lZWiC41gnwAAAABJRU5ErkJggg==",aspectRatio:.9451371571072319,src:"/static/e16354e2548417bd45f1465f4bede919/e95a7/brain_simulation.png",srcSet:"/static/e16354e2548417bd45f1465f4bede919/87839/brain_simulation.png 200w,\n/static/e16354e2548417bd45f1465f4bede919/e95a7/brain_simulation.png 379w",sizes:"(max-width: 379px) 100vw, 379px"}}}}}},160:function(A){A.exports={data:{file:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEAv/EABYBAQEBAAAAAAAAAAAAAAAAAAMBAv/aAAwDAQACEAMQAAAB0T5pLVyUstglyDWf/8QAHRAAAgICAwEAAAAAAAAAAAAAAQMCBBESABMhI//aAAgBAQABBQJhxxkeuI9D562rDAFVRlLZ72bR+SrM1w//xAAYEQACAwAAAAAAAAAAAAAAAAABEQACEP/aAAgBAwEBPwEVCi3/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAECAQE/AW3S7//EABwQAAIBBQEAAAAAAAAAAAAAAAABEQIQEiFBYf/aAAgBAQAGPwJLr0ZZzanwfRClLVsVB//EABoQAQADAQEBAAAAAAAAAAAAAAEAETEhQVH/2gAIAQEAAT8hvjrSBXR9H0h6DY5Olx59uApSeZk4JIh+zRLUUeQoNT6T/9oADAMBAAIAAwAAABD4GL3/xAAYEQEAAwEAAAAAAAAAAAAAAAABABAhMf/aAAgBAwEBPxDsEdwcr//EABgRAAMBAQAAAAAAAAAAAAAAAAABIRAx/9oACAECAQE/EOYKRq5//8QAHBABAAICAwEAAAAAAAAAAAAAAQARIUExUWGR/9oACAEBAAE/EGSAdXXsoSlL7EaUlE/KQ6jhFiGlo2PsYSt6rO4b1Uo8lPUqsDoOTnMZrIpx7EKHacuc6Z//2Q==",width:180,height:180,src:"/static/316b1ba0d7bac03ff20600f741d6633c/a7e11/me.jpg",srcSet:"/static/316b1ba0d7bac03ff20600f741d6633c/a7e11/me.jpg 1x,\n/static/316b1ba0d7bac03ff20600f741d6633c/dee67/me.jpg 1.5x,\n/static/316b1ba0d7bac03ff20600f741d6633c/a6257/me.jpg 2x,\n/static/316b1ba0d7bac03ff20600f741d6633c/450bf/me.jpg 3x"}}}}}},163:function(A,e,a){}}]);
//# sourceMappingURL=component---src-pages-index-tsx-56baa8736bf7ae1cf34e.js.map