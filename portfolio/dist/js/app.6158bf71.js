(function(t){function e(e){for(var a,o,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,s=1;s<r.length;s++){var c=r[s];0!==i[c]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},i={app:0},n=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var p=c;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("85ec"),i=r.n(a);i.a},"0632":function(t,e,r){},"275a":function(t,e,r){"use strict";var a=r("b048"),i=r.n(a);i.a},"359e":function(t,e,r){},4477:function(t,e,r){"use strict";var a=r("d571"),i=r.n(a);i.a},"56d7":function(t,e,r){"use strict";r.r(e);var a={};r.r(a),r.d(a,"siteInfo",(function(){return j}));var i={};r.r(i),r.d(i,"individualInfo",(function(){return C})),r.d(i,"organizationInfo",(function(){return k}));r("e623"),r("e379"),r("5dc8"),r("37e1");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header"),r("div",{attrs:{id:"wrap"}},[r("div",{attrs:{id:"mokuji"}},[r("Mokuji",{attrs:{siteinfo:t.siteInfo}})],1),r("div",{staticClass:"shadow-sm",attrs:{id:"content"}},[r("span",{staticClass:"page_title"},[t._v(t._s(t.pageTitle))]),r("div",[r("router-view")],1)]),r("div",{attrs:{id:"footer"}})]),t._m(0)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"bgImage"}},[a("img",{attrs:{src:r("9855"),alt:"",srcset:""}})])}],c=(r("4160"),r("b0c0"),r("159b"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shadow-sm py-2 px-3 text-center",attrs:{id:"header"}},[r("h3",{staticClass:"font-weight-bold"},[t._v(" ポートフォリオサイト ")])])}],p={},l=p,d=(r("f6f4"),r("2877")),f=Object(d["a"])(l,c,u,!1,null,"6acac73d",null),m=f.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container",attrs:{id:"mokuji"}},[r("div",{staticClass:"row"},t._l(t.siteinfo["siteInfo"],(function(e){return r("div",{key:e["param"],staticClass:"col-4 font-weight-bold mokuji text-center"},[r("router-link",{staticClass:"btn rounded-pill",style:t.selectPage(e["path"]),attrs:{to:e["path"],tag:"button"}},[t._v(t._s(e["name"]))])],1)})),0)])},g=[],h={props:{siteinfo:{type:Object}},computed:{selectPage:function(){return function(t){var e=[];return e=this.$route.path==t?{background:"white"}:{background:"none",color:"white"},e}}}},v=h,b=(r("e524"),Object(d["a"])(v,y,g,!1,null,"0973cb4e",null)),_=b.exports,j=[{param:"profile",name:"自己紹介",path:"/"},{param:"skill",name:"技術スキル",path:"/skill"},{param:"production",name:"制作物",path:"/production"}],P={name:"作成中太郎",ruby:"さくせいちゅうたろう",birth:"1997年5月2日",age:"23",hobby:"ギター,カメラ,コンサート,瞑想,テニス,開発,動画鑑賞",profile:"私は大学時代XXXを制作しており、XX〜XXなど幅広く開発に携わっておりました。また、前職では、XXXを中心な業務でXXXやXXXという経験をXXXX"},S=[{param:"html",subject:"html",practice:20,selfStudy:40,practicePeriod:"6ヶ月",selfStudyPeriod:"3年",type:""},{param:"css",subject:"css",practice:20,selfStudy:40,practicePeriod:"6ヶ月",selfStudyPeriod:"3年",type:""},{param:"bootstrap",subject:"bootstrap",practice:0,selfStudy:40,practicePeriod:"なし",selfStudyPeriod:"1年6ヶ月",type:""},{param:"JavaScript",subject:"JavaScript",practice:20,selfStudy:20,practicePeriod:"4ヶ月",selfStudyPeriod:"3年",type:""},{param:"vue",subject:"vue",practice:0,selfStudy:20,practicePeriod:"なし",selfStudyPeriod:"1年6ヶ月",type:""},{param:"jQuery",subject:"jQuery",practice:20,selfStudy:20,practicePeriod:"4ヶ月",selfStudyPeriod:"1年3ヶ月",type:""},{param:"php",subject:"php",practice:25,selfStudy:40,practicePeriod:"6ヶ月",selfStudyPeriod:"3年",type:""},{param:"Laravel",subject:"Laravel",practice:0,selfStudy:15,practicePeriod:"なし",selfStudyPeriod:"5ヶ月",type:""},{param:"Csharp",subject:"C#",practice:15,selfStudy:10,practicePeriod:"4ヶ月",selfStudyPeriod:"6ヶ月",type:""},{param:"ASPMVC",subject:"ASP.NET MVC(C#)",practice:15,selfStudy:0,practicePeriod:"4ヶ月",selfStudyPeriod:"なし",type:""},{param:"Python",subject:"Python",practice:0,selfStudy:35,practicePeriod:"なし",selfStudyPeriod:"1年",type:""},{param:"swift",subject:"Swift",practice:0,selfStudy:20,practicePeriod:"なし",selfStudyPeriod:"6ヶ月",type:""},{param:"mysql",subject:"mysql",practice:30,selfStudy:10,practicePeriod:"2ヶ月",selfStudyPeriod:"２年6ヶ月",type:""},{param:"Oracle Database",subject:"Oracle Database",practice:30,selfStudy:0,practicePeriod:"4ヶ月",selfStudyPeriod:"なし",type:""},{param:"Git",subject:"Git",practice:30,selfStudy:20,practicePeriod:"6ヶ月",selfStudyPeriod:"1年6ヶ月",type:""},{param:"Linux",subject:"Linux",practice:10,selfStudy:25,practicePeriod:"2ヶ月",selfStudyPeriod:"4ヶ月",type:""}],C=[{param:"飲食店掲載サイトの無料掲載機能",name:"飲食店掲載サイトの無料会員掲載機能",imagePath:"noImage",url:"",description:"施設様が会員登録をすることで上位表示や飲食店情報を更新、さらに充実したコンテンツを利用できるサービスです。",tags:"ASP.NET MVC(C#),PHP,Oracle Database"},{param:"老人ホーム掲載サイトの機能改修",name:"老人ホーム掲載サイトの機能改修",imagePath:"noImage",url:"",description:"ユーザ管理画面の機能追加、管理者画面の権限修正",tags:"Ruby on Rails,mysql"}],k=[{param:"portfolio",name:"ポートフォリオ",imagePath:"product08",url:"https://haseapp.com",description:"ポートフォリオまとめサイトです。",tags:"Vue.js"},{param:"livethread",name:"ライブ スレッド",imagePath:"product06",url:"https://livethread.net",description:"ライブスレッドは、アーティストやコンサート情報をシェアできるチャットルームサービスです。",tags:"PHP,Vue.js,jQuery,css,mysql,Oauth"},{param:"byezer",name:"byezer",imagePath:"product07",url:"",description:"[卒業制作]byezerは写真売買サービスです。InstagramのようなSNSを組み合わせました。(売買機能は未実装)",tags:"Laravel,Vue.js,jQuery,css,mysql"},{param:"dosoku",name:"どう速",imagePath:"product03",url:"https://dosoku.net/",description:"どう速とは、Youtube動画まとめサービスです。ニュースなどの速報から動物やペットの動画も紹介しています。",tags:"PHP,Vue.js,jQuery,css,mysql,YouTube Data API"},{param:"saezuri-maker",name:"さえずりメーカー",imagePath:"product04",url:"https://saezuri-maker.buzz/",description:"さえずりメーカーは、ツイッターでツイートできるコンテンツを簡単に生成できるサイトです。",tags:"PHP,Vue.js,jQuery,css"},{param:"cron",name:"Twitter名詞取得CRON",imagePath:"noImage",url:"",description:"Twitterのツイートから地域と名詞を取り出し緯度経度に変換後、地域メッシュに変換してDBに名詞と地域メッシュを追加するCRON",tags:"Python,Flask,Oauth,Docker,GCP,Cloud run"},{param:"hasethblog",name:"暇人のブログ",imagePath:"product01",url:"https:/hasethblog.com",description:"ニュースや役に立つ知識を書いています！",tags:"wordpress,ブログ"},{param:"segateway",name:"SE Gateway",imagePath:"product02",url:"https://segateway.com",description:"未経験・駆け出しエンジニアのためのブログです。就活や転職、プログラミングスクール、技術について記します。",tags:"wordpress,ブログ"}],x={name:"App",components:{Header:m,Mokuji:_},watch:{$route:function(){this.changePath()}},data:function(){return{siteInfo:Object,myInfo:Object,skillInfo:Object,productionInfo:Object,pageTitle:""}},created:function(){this.siteInfo=a,this.myInfo=P,this.skillInfo=S,this.productionInfo=i},mounted:function(){this.changePath()},methods:{changePath:function(){var t=this;j.forEach((function(e){e.path==t.$route.path&&(t.pageTitle=e.name)}))}}},w=x,I=(r("034f"),Object(d["a"])(w,o,s,!1,null,null,null)),O=I.exports,T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"profile"}},[r("div",{staticClass:"row"},[t._m(0),r("div",{staticClass:"col-md-6"},[r("p",{staticClass:"user_name text-md-left text-center"},[r("ruby",[t._v(" "+t._s(t.myinfo["name"])),r("rt",[t._v(t._s(t.myinfo["ruby"]))])]),t._v(" ("+t._s(t.myinfo["age"])+") ")]),r("p",[t._v(" "+t._s(t.myinfo["profile"])+" ")]),r("div",[r("div",{staticClass:"hobby_title"},[r("p",[t._v("趣味・最近ハマっていること"),r("font-awesome-icon",{staticClass:"pl-1",attrs:{icon:"chevron-right"}})],1)]),t._l(t.myinfo["hobby"].split(",").length,(function(e){return r("div",{key:e,staticClass:"hobbyTags px-1 py-1"},[r("div",{staticClass:"hobbyTag rounded-pill d-inline-block px-2 py-1 my-1 small"},[t._v(" "+t._s(t.myinfo["hobby"].split(",")[e-1])+" ")])])}))],2)])])])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6 iconWrap"},[a("img",{staticClass:"icon",attrs:{src:r("cde5"),alt:""}})])}],X={data:function(){return{myinfo:[]}},mounted:function(){this.myinfo=this.$parent.myInfo}},z=X,E=(r("b9e8"),Object(d["a"])(z,T,$,!1,null,"feff09c8",null)),L=E.exports,D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row"},t._l(t.skillInfo,(function(e){return r("div",{key:e["param"],staticClass:"skillGraph col-6 col-md-4"},[r("svg",{staticStyle:{transform:"rotate(-90deg)"},attrs:{viewBox:"0 0 60 60",xmlns:"http://www.w3.org/2000/svg"}},[r("circle",{staticClass:"selfStudyCircle",style:"--selfStudyScore:"+Number(e["practice"]+e["selfStudy"])+" 100",attrs:{cx:"30",cy:"30",r:"15",fill:"rgba(0,0,0,0)",stroke:"#ff7675","stroke-width":"10","stroke-dasharray":t.selfStudyScore(e)}}),r("circle",{staticClass:"practiceCircle",style:"--practiceScore:"+Number(e["practice"])+" 100",attrs:{cx:"30",cy:"30",r:"15",fill:"rgba(0,0,0,0)",stroke:"#00b894","stroke-width":"10","stroke-dasharray":t.practiceScore(e)}}),r("text",{attrs:{x:"50%",y:"50%",fill:"#2d3436","font-size":"5","font-weight":"bold","dominant-baseline":"middle","text-anchor":"middle",transform:"translate(60,0) rotate(90)"}},[t._v(t._s(e["subject"]))])]),r("div",{staticClass:"skillPeriod"},[r("ul",[r("li",[t._v("実務経験："+t._s(e["practicePeriod"]))]),r("li",[t._v("独学："+t._s(e["selfStudyPeriod"]))])])])])})),0)])},M=[],N=(r("d3b7"),r("25f0"),{data:function(){return{percent_set:0,percent_fill:0,skillInfo:[],percent_none:100,timerObj:null}},mounted:function(){this.skillInfo=this.$parent.skillInfo},methods:{},computed:{practiceScore:function(){return function(t){var e=[t.practice.toString(),this.percent_none.toString()];return e[0]+","+e[1]}},selfStudyScore:function(){return function(t){var e=t["selfStudy"]+t["practice"],r=[e.toString(),this.percent_none.toString()];return r[0]+","+r[1]}}}}),V=N,q=(r("c708"),r("4477"),Object(d["a"])(V,D,M,!1,null,"3c2448e4",null)),H=q.exports,Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("p",{staticClass:"productKindTitle h3"},[t._v("実務")]),r("Individual",{attrs:{IndividualInfo:t.individualInfo}})],1),r("div",[r("p",{staticClass:"productKindTitle h3"},[t._v("個人制作")]),r("Organization",{attrs:{OrganizationInfo:t.organizationInfo}})],1)])},A=[],G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"production row"},t._l(t.IndividualInfo,(function(e){return r("div",{key:e["param"],staticClass:"productionCard col-md-6 col-12 shadow-sm my-2"},[r("div",{staticClass:"mx-2 p-3"},[r("div",{staticClass:"thumbnail pointer",on:{click:function(r){return t.$parent.transformLink(e["url"])}}},[r("img",{attrs:{src:t.$parent.imageLoad(e["imagePath"]),alt:e["param"]}})]),r("div",[r("div",{staticClass:"productionTitle text-center h4"},[t._v(" "+t._s(e["name"])+" ")]),r("div",{staticClass:"productionDescription"},[t._v(" "+t._s(e["description"])+" ")]),r("div",{staticClass:"productionTagsWrap"},t._l(e["tags"].split(",").length,(function(a){return r("div",{key:a,staticClass:"productionTags px-1 py-1"},[r("div",{staticClass:"productionTag rounded-pill d-inline-block px-2 py-1 my-1 small"},[t._v(" "+t._s(e["tags"].split(",")[a-1])+" ")])])})),0)])])])})),0)},J=[],R={props:{IndividualInfo:{type:Object}},mounted:function(){}},W=R,B=(r("275a"),Object(d["a"])(W,G,J,!1,null,"67f21303",null)),F=B.exports,K=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"production row"},t._l(t.OrganizationInfo,(function(e){return r("div",{key:e["param"],staticClass:"productionCard col-md-6 col-12 shadow-sm my-2"},[r("div",{staticClass:"mx-2 p-3"},[r("div",{staticClass:"thumbnail pointer",on:{click:function(r){return t.$parent.transformLink(e["url"])}}},[r("img",{attrs:{src:t.$parent.imageLoad(e["imagePath"]),alt:e["param"]}})]),r("div",[r("div",{staticClass:"productionTitle text-center h4"},[t._v(" "+t._s(e["name"])+" ")]),r("div",{staticClass:"productionDescription"},[t._v(" "+t._s(e["description"])+" ")]),r("div",{staticClass:"productionTagsWrap"},t._l(e["tags"].split(",").length,(function(a){return r("div",{key:a,staticClass:"productionTags px-1 py-1"},[r("div",{staticClass:"productionTag rounded-pill d-inline-block px-2 py-1 my-1 small"},[t._v(" "+t._s(e["tags"].split(",")[a-1])+" ")])])})),0)])])])})),0)},U=[],Y={props:{OrganizationInfo:{type:Object}}},Z=Y,tt=(r("e697"),Object(d["a"])(Z,K,U,!1,null,"8f7a40bc",null)),et=tt.exports,rt={components:{Individual:F,Organization:et},data:function(){return{individualInfo:[],organizationInfo:[]}},mounted:function(){this.individualInfo=this.$parent.productionInfo["individualInfo"],this.organizationInfo=this.$parent.productionInfo["organizationInfo"]},methods:{imageLoad:function(t){return r("b5a1")("./"+t+".jpg")},transformLink:function(t){""!=t&&open(t,"_blank")}}},at=rt,it=(r("975b"),Object(d["a"])(at,Q,A,!1,null,"20f6e9a3",null)),nt=it.exports,ot=[{path:"/",component:L},{path:"/skill",component:H},{path:"/production",component:nt}],st=(r("4989"),r("ab8b"),r("ecee")),ct=r("c074"),ut=r("ad3d"),pt=r("8c4f");st["c"].add(ct["a"]),n["a"].component("font-awesome-icon",ut["a"]),n["a"].config.productionTip=!1,n["a"].use(pt["a"]);var lt=new pt["a"]({routes:ot});new n["a"]({render:function(t){return t(O)},router:lt}).$mount("#app")},"5a66":function(t,e,r){t.exports=r.p+"img/product04.0f2bc3e9.jpg"},"5b53":function(t,e,r){},"74d3":function(t,e,r){t.exports=r.p+"img/product03.841f653c.jpg"},7797:function(t,e,r){t.exports=r.p+"img/product08.4e0ea688.jpg"},"79bd":function(t,e,r){t.exports=r.p+"img/noImage.0f5b3bb3.jpg"},"7e60":function(t,e,r){t.exports=r.p+"img/product01.0212777a.jpg"},"85ec":function(t,e,r){},"8e67":function(t,e,r){t.exports=r.p+"img/product07.329cca3b.jpg"},9381:function(t,e,r){},9444:function(t,e,r){},"975b":function(t,e,r){"use strict";var a=r("359e"),i=r.n(a);i.a},9855:function(t,e,r){t.exports=r.p+"img/background.131f86f0.png"},ad76:function(t,e,r){t.exports=r.p+"img/product02.93dff276.jpg"},ade9:function(t,e,r){t.exports=r.p+"img/product06.5136b174.jpg"},b048:function(t,e,r){},b5a1:function(t,e,r){var a={"./icon.jpg":"cde5","./noImage.jpg":"79bd","./product01.jpg":"7e60","./product02.jpg":"ad76","./product03.jpg":"74d3","./product04.jpg":"5a66","./product05.jpg":"c226","./product06.jpg":"ade9","./product07.jpg":"8e67","./product08.jpg":"7797"};function i(t){var e=n(t);return r(e)}function n(t){if(!r.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id="b5a1"},b9e8:function(t,e,r){"use strict";var a=r("9444"),i=r.n(a);i.a},c226:function(t,e,r){t.exports=r.p+"img/product05.2238422f.jpg"},c708:function(t,e,r){"use strict";var a=r("9381"),i=r.n(a);i.a},cde5:function(t,e,r){t.exports=r.p+"img/icon.c96475a1.jpg"},d571:function(t,e,r){},e524:function(t,e,r){"use strict";var a=r("5b53"),i=r.n(a);i.a},e697:function(t,e,r){"use strict";var a=r("0632"),i=r.n(a);i.a},edb2:function(t,e,r){},f6f4:function(t,e,r){"use strict";var a=r("edb2"),i=r.n(a);i.a}});
//# sourceMappingURL=app.6158bf71.js.map