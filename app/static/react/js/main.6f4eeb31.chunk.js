(window["webpackJsonpadmin-dashbord"]=window["webpackJsonpadmin-dashbord"]||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var l,n=t(0),r=t.n(n),c=t(26),m=t.n(c),s=t(16),i=(t(66),t(67),t(68),t(69),t(7)),o=t(8),E=t(11),u=t(9),d=t(10),p=t(23),h=t(28),g=t(4),b=t.n(g),f=t(101),v=t(102),N=t(103),y=t(104),O=t(105),k=t(106),j=t(52),S=t(120),C=t(107),w=t(108),P=t(109),M=t(110),R=t(119),x=t(111),D=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(E.a)(this,Object(u.a)(a).call(this,e))).updateColor=function(){window.innerWidth<993&&t.state.collapseOpen?t.setState({color:"bg-white"}):t.setState({color:"navbar-transparent"})},t.toggleCollapse=function(){t.state.collapseOpen?t.setState({color:"navbar-transparent"}):t.setState({color:"bg-white"}),t.setState({collapseOpen:!t.state.collapseOpen})},t.toggleModalSearch=function(){t.setState({modalSearch:!t.state.modalSearch})},t.state={collapseOpen:!1,modalSearch:!1,color:"navbar-transparent"},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateColor)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateColor)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{className:b()("navbar-absolute",this.state.color),expand:"lg"},r.a.createElement(v.a,{fluid:!0},r.a.createElement("div",{className:"navbar-wrapper"},r.a.createElement("div",{className:b()("navbar-toggle d-inline",{toggled:this.props.sidebarOpened})},r.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:this.props.toggleSidebar},r.a.createElement("span",{className:"navbar-toggler-bar bar1"}),r.a.createElement("span",{className:"navbar-toggler-bar bar2"}),r.a.createElement("span",{className:"navbar-toggler-bar bar3"}))),r.a.createElement(N.a,{href:"#",onClick:function(e){return e.preventDefault()}},this.props.brandText)),r.a.createElement("button",{"aria-expanded":!1,"aria-label":"Toggle navigation",className:"navbar-toggler","data-target":"#navigation","data-toggle":"collapse",id:"navigation",type:"button",onClick:this.toggleCollapse},r.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),r.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),r.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"})),r.a.createElement(y.a,{navbar:!0,isOpen:this.state.collapseOpen},r.a.createElement(O.a,{className:"ml-auto",navbar:!0},r.a.createElement(k.a,{className:"search-bar"},r.a.createElement(j.a,{color:"link","data-target":"#searchModal","data-toggle":"modal",id:"search-button",onClick:this.toggleModalSearch},r.a.createElement("i",{className:"tim-icons icon-zoom-split"}),r.a.createElement("span",{className:"d-lg-none d-md-block"},"Search"))),r.a.createElement(S.a,{nav:!0},r.a.createElement(C.a,{caret:!0,color:"default","data-toggle":"zoomIn",nav:!0},r.a.createElement("div",{className:"notification-author d-none d-lg-block d-xl-block"}),r.a.createElement("i",{className:"tim-icons icon-sound-wave"}),r.a.createElement("p",{className:"d-lg-none"},"Notifications")),r.a.createElement(w.a,{className:"notification-author animated zoomIn ",right:!0,tag:"ul"},r.a.createElement(P.a,{tag:"li"},r.a.createElement(M.a,{className:"nav-item"},"John responded to your email")),r.a.createElement(P.a,{tag:"li"},r.a.createElement(M.a,{className:"nav-item"},"You have 5 more tasks")),r.a.createElement(P.a,{tag:"li"},r.a.createElement(M.a,{className:"nav-item"},"Your friend Michael is in town")),r.a.createElement(P.a,{tag:"li"},r.a.createElement(M.a,{className:"nav-item"},"Another notification")),r.a.createElement(P.a,{tag:"li"},r.a.createElement(M.a,{className:"nav-item"},"Another one")))),r.a.createElement(S.a,{nav:!0},r.a.createElement(C.a,{caret:!0,color:"default","data-toggle":"dropdown",nav:!0,onClick:function(e){return e.preventDefault()}},r.a.createElement("b",{className:"caret d-none d-lg-block d-xl-block"}),r.a.createElement("p",{className:"d-lg-none"},"Log out")),r.a.createElement(w.a,{className:"dropdown-header-top animated zoomIn",right:!0,tag:"ul"},r.a.createElement(P.a,{tag:"li"},r.a.createElement(M.a,{className:"nav-item"},"Profile")),r.a.createElement(P.a,{tag:"li"},r.a.createElement(M.a,{className:"nav-item"},"Settings")),r.a.createElement(M.a,{divider:!0,tag:"li"}),r.a.createElement(P.a,{tag:"li"},r.a.createElement(M.a,{className:"nav-item"},"Log out")))),r.a.createElement("li",{className:"separator d-lg-none"}))))),r.a.createElement(R.a,{modalClassName:"modal-search",isOpen:this.state.modalSearch,toggle:this.toggleModalSearch},r.a.createElement("div",{className:"modal-header"},r.a.createElement(x.a,{id:"inlineFormInputGroup",placeholder:"SEARCH",type:"text"}),r.a.createElement("button",{"aria-label":"Close",className:"close","data-dismiss":"modal",type:"button",onClick:this.toggleModalSearch},r.a.createElement("i",{className:"tim-icons icon-simple-remove"})))))}}]),a}(r.a.Component),I=t(6),W=t(29),L=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(E.a)(this,Object(u.a)(a).call(this,e))).linkOnClick=function(){document.documentElement.classList.remove("nav-open")},t.toggleCollapse=function(){t.state.collapseOpen?t.setState({color:"navbar-transparent"}):t.setState({color:"bg-blue"}),t.setState({collapseOpen:!t.state.collapseOpen})},t.state={collapseOpen:!1},t.activeRoute.bind(Object(I.a)(t)),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"activeRoute",value:function(e){return this.props.location.pathname.indexOf(e)>-1?"active":""}},{key:"componentDidMount",value:function(){navigator.platform.indexOf("Win")>-1&&(l=new h.a(this.refs.sidebar,{suppressScrollX:!0,suppressScrollY:!1}))}},{key:"componentWillUnmount",value:function(){navigator.platform.indexOf("Win")>-1&&l.destroy()}},{key:"render",value:function(){var e=this,a=this.props,t=a.bgColor,l=a.routes,n=a.logo,c=l.slice(0,7),m=null;return void 0!==n&&(m=void 0!==n.outterLink?r.a.createElement("a",{href:n.outterLink,className:"simple-text logo-normal",target:"_blank",rel:"noopener noreferrer",onClick:this.props.toggleSidebar},n.text):r.a.createElement(W.a,{to:n.innerLink,className:"simple-text logo-normal",onClick:this.props.toggleSidebar},n.text)),r.a.createElement("div",{className:"sidebar",data:t},r.a.createElement("div",{className:"sidebar-wrapper",ref:"sidebar"},null!==m?r.a.createElement("div",{className:"logo"},m):null,r.a.createElement(O.a,null,c.map((function(a,t){return a.redirect?null:r.a.createElement("li",{className:e.activeRoute(a.path)+(a.pro?" active-pro":""),key:t},r.a.createElement(W.b,{to:a.layout+a.path,className:"nav-link",activeClassName:"active",onClick:e.props.toggleSidebar},r.a.createElement("i",{className:a.icon}),r.a.createElement("p",null,a.name)))})))))}}]),a}(r.a.Component);L.defaultProps={bgColor:"primary",routes:[{}]};var F,U=L,A=t(112),B=t(113),T=t(114),z=t(115),K=t(116),G=t(117),H=function(e){function a(){return Object(i.a)(this,a),Object(E.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement(A.a,null,r.a.createElement(B.a,{lg:"4"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Content"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Content"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("a",{href:"/admin/content",className:"card-link"},"Content"))))),r.a.createElement(B.a,{lg:"4"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Duration"),r.a.createElement(K.a,{tag:"h3"},"Duration")),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("a",{href:"/admin/duration",className:"card-link"},"Duration"))))),r.a.createElement(B.a,{lg:"4"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Articles"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Articles"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("a",{href:"/admin/articles",className:"card-link"},"Articles"))))),r.a.createElement(B.a,{lg:"4"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Pages"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Pages"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("a",{href:"/admin/pages",className:"card-link"},"Pages"))))),r.a.createElement(B.a,{lg:"4"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Reports"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Reports"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("a",{href:"/admin/reports",className:"card-link"},"Reports"))))),r.a.createElement(B.a,{lg:"4"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Subscription"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Subscription"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("a",{href:"/admin/subscription",className:"card-link"},"Subscription"))))))))}}]),a}(r.a.Component),J=t(118),V=function(e){function a(){return Object(i.a)(this,a),Object(E.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement(A.a,null,r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Phishing"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Phishing Materials"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Phishing"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"/content/phish",class:"btn btn-primary"},"Phishing")))),r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Social Engineering"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Social Engineering"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Social Engineering"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"#",class:"btn btn-primary"},"Social")))),r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Malware"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Malware"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Malware"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"#",class:"btn btn-primary"},"Malware")))),r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Removal Media"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Removal Media"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Removal Media"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"#",class:"btn btn-primary"},"Removal Media")))),r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Physical security"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Physical security"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Physical security"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"#",class:"btn btn-primary"},"Physical")))),r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Working Remotely"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Working Remotely"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Working Remotely"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"#",class:"btn btn-primary"},"Remotely")))),r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Mobile Security"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Mobile Security"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Mobile Security"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"#",class:"btn btn-primary"},"Mobile")))),r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Safe Web browsing"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Safe Web browsing"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Safe Web browsing"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"#",class:"btn btn-primary"},"browsing")))))))}}]),a}(r.a.Component),Y=function(e){function a(){return Object(i.a)(this,a),Object(E.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement(A.a,null,r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Phishing"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Phishing Materials"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Phishing"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"#",class:"btn btn-primary"},"Phishing")))),r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Social Engineering"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Social Engineering"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Social Engineering"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"#",class:"btn btn-primary"},"Social")))),r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Malware"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Malware"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Malware"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"#",class:"btn btn-primary"},"Malware")))),r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Removal Media"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Removal Media"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Removal Media"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"#",class:"btn btn-primary"},"Removal Media")))),r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Physical security"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Physical security"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Physical security"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"#",class:"btn btn-primary"},"Physical")))),r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Working Remotely"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Working Remotely"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Working Remotely"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"#",class:"btn btn-primary"},"Remotely")))),r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Mobile Security"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Mobile Security"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Mobile Security"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"#",class:"btn btn-primary"},"Mobile")))),r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Safe Web browsing"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Safe Web browsing"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Safe Web browsing"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"#",class:"btn btn-primary"},"browsing")))))))}}]),a}(r.a.Component),q=function(e){function a(){return Object(i.a)(this,a),Object(E.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement(A.a,null,r.a.createElement(B.a,{lg:"12"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Training Materials"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Duration"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Select the training artcles with reference to your preferred reading time"))))),r.a.createElement(B.a,{lg:"4"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Duration"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"5 min"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"5 min"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"#",class:"btn btn-primary"},"5 Min")))),r.a.createElement(B.a,{lg:"4"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Duration"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"10 min read"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"10 min"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"#",class:"btn btn-primary"},"10 min")))),r.a.createElement(B.a,{lg:"4"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Duration"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"30 min"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"30 min"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"#",class:"btn btn-primary"},"30 min")))))))}}]),a}(r.a.Component),X=function(e){function a(){return Object(i.a)(this,a),Object(E.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement(A.a,null,r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Profile"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Profile"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Kindly view your profile to add users"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"#",class:"btn btn-primary"},"View")))),r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Login"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Login"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Click on the button to login"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"#",class:"btn btn-primary"},"Login")))),r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Register"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Register"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Kindly register"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"#",class:"btn btn-primary"},"Register")))),r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Settings"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"settings"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Settings"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"#",class:"btn btn-primary"},"Settings")))),r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Notification"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Notifications"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Check your activities as well as the users"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"#",class:"btn btn-primary"},"Notifications")))))))}}]),a}(r.a.Component),_=function(e){function a(){return Object(i.a)(this,a),Object(E.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null))}}]),a}(r.a.Component),Q=function(e){function a(){return Object(i.a)(this,a),Object(E.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null))}}]),a}(r.a.Component),Z=function(e){function a(){return Object(i.a)(this,a),Object(E.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement(A.a,null,r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Phishing101"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Phishing101 Materials"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Phishing101"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"/content/uploads",class:"btn btn-primary"},"Phishing101")))),r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Phishing101"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Phishing101 Materials"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Phishing101"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"/admin/Phishing101",class:"btn btn-primary"},"Phishing101")))),r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Phishing101"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Phishing101 Materials"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Phishing101"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"/admin/Phishing101",class:"btn btn-primary"},"Phishing101")))),r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Phishing101"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Phishing101 Materials"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Phishing101"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"/admin/Phishing101",class:"btn btn-primary"},"Phishing101")))),r.a.createElement(B.a,{lg:"6"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Phishing101"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Phishing101 Materials"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Phishing101"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"/admin/Phishing101",class:"btn btn-primary"},"Phishing101")))))))}}]),a}(r.a.Component),$=function(e){function a(){return Object(i.a)(this,a),Object(E.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement(A.a,null,r.a.createElement(B.a,{lg:"4"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Phishing101"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Videos"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"videos"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"/admin/home",class:"btn btn-primary"},"videos")))),r.a.createElement(B.a,{lg:"4"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Phishing101"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Infographics"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"infographics"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"/admin/fileupload",class:"btn btn-primary"},"Infographics")))),r.a.createElement(B.a,{lg:"4"},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null,r.a.createElement("h5",{className:"card-category"},"Phishing101"),r.a.createElement(K.a,{tag:"h3"},r.a.createElement("p",null,"Posters"))),r.a.createElement(G.a,null,r.a.createElement("div",{className:"material-details"},r.a.createElement("p",null,"Posters"))),r.a.createElement(J.a,null,r.a.createElement("a",{href:"/admin/video",class:"btn btn-primary"},"posters")))))))}}]),a}(r.a.Component),ee=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(E.a)(this,Object(u.a)(a).call(this,e))).handleSubmit=t.handleSubmit.bind(Object(I.a)(t)),t.fileInput=r.a.createRef(),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),alert("Selected file - ".concat(this.fileInput.current.files[0].name))}},{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement(A.a,null,r.a.createElement(B.a,{"lg-8":!0},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null),r.a.createElement("form",{action:"localhost:5000/content/upload",onSubmit:this.handleSubmit},r.a.createElement(G.a,null,r.a.createElement("label",{htmlFor:""},"Upload files:",r.a.createElement("input",{type:"file",name:"video",ref:this.fileInput}),r.a.createElement("input",{type:"file",name:"infographic",ref:this.fileInput}),r.a.createElement("input",{type:"file",name:"poster",ref:this.fileInput}))),r.a.createElement("br",null),r.a.createElement(J.a,null,r.a.createElement("button",{className:"btn btn-info",type:"submit"},"Submit")))))))}}]),a}(r.a.Component),ae=function(e){function a(){return Object(i.a)(this,a),Object(E.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.uploadData;return r.a.createElement("div",{className:"content"},r.a.createElement(A.a,null,r.a.createElement(B.a,{"lg-8":!0},r.a.createElement(T.a,{className:"card"},r.a.createElement(z.a,null),r.a.createElement(G.a,null,r.a.createElement("div",null,e.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("p",null,e.video))}))))))))}}]),a}(r.a.Component),te=t(57),le=t.n(te),ne=[{path:"/index",name:"Dashboard",icon:"tim-icons icon-chart-pie-36",component:H,layout:"/admin"},{path:"/content",name:"Content",icon:"tim-icons icon-components",component:V,layout:"/admin"},{path:"/duration",name:"Duration",icon:"tim-icons icon-time-alarm",component:q,layout:"/admin"},{path:"/articles",name:"Articles",icon:"tim-icons icon-single-copy-04",component:Y,layout:"/admin"},{path:"/pages",name:"Pages",icon:"tim-icons icon-single-02",component:X,layout:"/admin"},{path:"/reports",name:"Reports",icon:"tim-icons icon-chart-bar-32",component:_,layout:"/admin"},{path:"/subscription",name:"Subscription",icon:"tim-icons icon-wallet-43",component:Q,layout:"/admin"},{path:"/phishing",name:"Phishing",component:Z,layout:"/admin"},{path:"/phishing101",name:"Phishing",component:$,layout:"/admin"},{path:"/home",name:"FileInput",component:ee,layout:"/admin"},{path:"/video",name:"Video",component:ae,layout:"/admin"},{path:"/fileupload",name:"FileUpload",component:function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(E.a)(this,Object(u.a)(a).call(this,e))).state={file:null},t.handleImagePreview=t.handleImagePreview.bind(Object(I.a)(t)),t.handleImageUpload=t.handleImageUpload.bind(Object(I.a)(t)),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"handleImageUpload",value:function(e){e.preventDefault();var a=this.state.file,t=new FormData;t.append("file",a),le()({method:"post",url:"http://localhost:8000/content/upload",data:t,config:{headers:{"Content-Type":"multipart/form-data"}}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},{key:"handleImagePreview",value:function(e){this.setState({file:URL.createObjectURL(e.target.files[0])})}},{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("form",{action:"http://localhost:8000/content/upload",method:"post",encType:"multipart/form-data"},r.a.createElement("div",{class:"form-group"},r.a.createElement("input",{type:"file",class:"form-control-file",onChange:this.handleImagePreview}),r.a.createElement("img",{src:this.state.file,class:"img-thumbnail",alt:""}),r.a.createElement("button",{type:"submit",class:"btn btn-outline-dark",onClick:this.handleImageUpload}," Upload Photo "))))}}]),a}(r.a.Component),layout:"/admin"}],re=t(58),ce=t(59),me=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(E.a)(this,Object(u.a)(a).call(this,e))).handleClick=function(){"dropdown show-dropdown"===t.state.classes?t.setState({classes:"dropdown show-dropdown show"}):t.setState({classes:"dropdown show-dropdown"})},t.activateMode=function(e){switch(e){case"light":document.body.classList.add("white-content");break;default:document.body.classList.remove("white-content")}},t.state={classes:"dropdown show-dropdown"},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"fixed-plugin"},r.a.createElement("div",{className:this.state.classes},r.a.createElement("div",{onClick:this.handleClick},r.a.createElement("i",{className:"fa fa-cog fa-2x"},r.a.createElement(re.a,{icon:ce.a}))),r.a.createElement("ul",{className:"dropdown-menu show"},r.a.createElement("li",{className:"header-title"},"SIDEBAR BACKGROUND"),r.a.createElement("li",{className:"adjustments-line"},r.a.createElement("div",{className:"badge-colors text-center"},r.a.createElement("span",{className:"primary"===this.props.bgColor?"badge filter badge-primary active":"badge filter badge-primary","data-color":"primary",onClick:function(){e.props.handleBgClick("primary")}})," ",r.a.createElement("span",{className:"blue"===this.props.bgColor?"badge filter badge-info active":"badge filter badge-info","data-color":"blue",onClick:function(){e.props.handleBgClick("blue")}})," ",r.a.createElement("span",{className:"green"===this.props.bgColor?"badge filter badge-success active":"badge filter badge-success","data-color":"green",onClick:function(){e.props.handleBgClick("green")}})," ")),r.a.createElement("li",{className:"adjustments-line text-center color-change"},r.a.createElement("span",{className:"color-label"},"LIGHT MODE")," ",r.a.createElement("span",{className:"badge light-badge mr-2",onClick:function(){return e.activateMode("light")}})," ",r.a.createElement("span",{className:"badge dark-badge ml-2",onClick:function(){return e.activateMode("dark")}})," ",r.a.createElement("span",{className:"color-label"},"DARK MODE")," "))))}}]),a}(n.Component),se=t(60),ie=t.n(se),oe=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(E.a)(this,Object(u.a)(a).call(this,e))).toggleSidebar=function(){document.documentElement.classList.toggle("nav-open"),t.setState({sidebarOpened:!t.state.sidebarOpened})},t.getRoutes=function(e){return e.map((function(e,a){return"/admin"===e.layout?r.a.createElement(p.b,{path:e.layout+e.path,component:e.component,key:a}):null}))},t.handleBgClick=function(e){t.setState({backgroundColor:e})},t.getBrandText=function(e){for(var a=0;a<ne.length;a++)if(-1!==t.props.location.pathname.indexOf(ne[a].layout+ne[a].path))return ne[a].name;return"Brand"},t.state={backgroundColor:"blue",sidebarOpened:-1!==document.documentElement.className.indexOf("nav-open")},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){if(navigator.platform.indexOf("Win")>-1){document.documentElement.className+=" perfect-scrollbar-on",document.documentElement.classList.remove("perfect-scrollbar-off"),F=new h.a(this.refs.mainPanel,{suppressScrollX:!0});for(var e=document.querySelectorAll(".table-responsive"),a=0;a<e.length;a++)F=new h.a(e[a])}}},{key:"componentWillUnmount",value:function(){navigator.platform.indexOf("Win")>-1&&(F.destroy(),document.documentElement.className+=" perfect-scrollbar-off",document.documentElement.classList.remove("perfect-scrollbar-on"))}},{key:"componentDidUpdate",value:function(e){if("PUSH"===e.history.action){if(navigator.platform.indexOf("Win")>-1)for(var a=document.querySelectorAll(".table-responsive"),t=0;t<a.length;t++)F=new h.a(a[t]);document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0,this.refs.mainPanel.scrollTop=0}}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement(U,Object.assign({},this.props,{routes:ne,bgColor:this.state.backgroundColor,logo:{imgSrc:ie.a,text:"E-Phoenix"},toggleSidebar:this.toggleSidebar})),r.a.createElement("div",{className:"main-panel",ref:"mainPanel",data:this.state.backgroundColor},r.a.createElement(D,Object.assign({},this.props,{brandText:this.getBrandText(this.props.location.pathname),toggleSidebar:this.toggleSidebar,sidebarOpened:this.state.sidebarOpened})),r.a.createElement(p.d,null,this.getRoutes(ne)))),r.a.createElement(me,{bgColor:this.state.backgroundColor,handleBgClick:this.handleBgClick}))}}]),a}(r.a.Component),Ee=Object(s.a)();m.a.render(r.a.createElement(p.c,{history:Ee},r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/admin",render:function(e){return r.a.createElement(oe,e)}}),r.a.createElement(p.a,{from:"/",to:"/admin/index"}))),document.getElementById("root"))},60:function(e,a,t){e.exports=t.p+"media/logo.25bf045c.svg"},61:function(e,a,t){e.exports=t(100)},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){}},[[61,1,2]]]);
//# sourceMappingURL=main.6f4eeb31.chunk.js.map