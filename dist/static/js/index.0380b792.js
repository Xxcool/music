(function(e){function n(n){for(var t,r,s=n[0],d=n[1],u=n[2],c=0,g=[];c<s.length;c++)r=s[c],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&g.push(a[r][0]),a[r]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]);l&&l(n);while(g.length)g.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var e,n=0;n<o.length;n++){for(var i=o[n],t=!0,r=1;r<i.length;r++){var d=i[r];0!==a[d]&&(t=!1)}t&&(o.splice(n--,1),e=s(s.s=i[0]))}return e}var t={},a={index:0},o=[];function r(e){return s.p+"static/js/"+({"pages-index-index":"pages-index-index","pages-mv-index":"pages-mv-index","pages-mvdetail-index":"pages-mvdetail-index","pages-play-index":"pages-play-index","pages-rank-index":"pages-rank-index","pages-rankdetail-index":"pages-rankdetail-index","pages-recommend-index":"pages-recommend-index","pages-singer-index":"pages-singer-index"}[e]||e)+"."+{"pages-index-index":"90ddf9f2","pages-mv-index":"30f2bc80","pages-mvdetail-index":"ac836df7","pages-play-index":"4757bad2","pages-rank-index":"25795258","pages-rankdetail-index":"e6ed3bb7","pages-recommend-index":"c52cf679","pages-singer-index":"24a7fbca"}[e]+".js"}function s(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.e=function(e){var n=[],i=a[e];if(0!==i)if(i)n.push(i[2]);else{var t=new Promise((function(n,t){i=a[e]=[n,t]}));n.push(i[2]=t);var o,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=r(e);var u=new Error;o=function(n){d.onerror=d.onload=null,clearTimeout(c);var i=a[e];if(0!==i){if(i){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",u.name="ChunkLoadError",u.type=t,u.request=o,i[1](u)}a[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:d})}),12e4);d.onerror=d.onload=o,document.head.appendChild(d)}return Promise.all(n)},s.m=e,s.c=t,s.d=function(e,n,i){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)s.d(i,t,function(n){return e[n]}.bind(null,t));return i},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=n,d=d.slice();for(var c=0;c<d.length;c++)n(d[c]);var l=u;o.push([0,"chunk-vendors"]),i()})({0:function(e,n,i){e.exports=i("8398")},"113d":function(e,n,i){"use strict";i("d3b7");var t=i("2026"),a=function(e,n,i){var a=new Promise((function(a,o){uni.showLoading({title:"加载中"}),uni.request({url:t.config.server+e,data:n,method:i,success:function(e){uni.hideLoading(),200===e.data.code?a(e):(o(e.data),uni.showToast({title:"数据获取失败",duration:5e3,icon:"none"}))},error:function(e){o("网络出错"),uni.hideLoading(),uni.showToast({title:"请求超时",duration:5e3,icon:"none"})}})}));return a};e.exports={request:a}},1546:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=t},"19f3":function(e,n,i){"use strict";(function(e){var n=i("4ea4"),t=n(i("e143"));e["________"]=!0,delete e["________"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"音乐",navigationBarBackgroundColor:"#41b883",backgroundColor:"#fff"},tabBar:{color:"#333333",selectedColor:"#41b883",borderStyle:"black",list:[{text:"首页",pagePath:"pages/index/index",iconPath:"static/images/index-d.png",selectedIconPath:"static/images/index-a.png",redDot:!1,badge:""},{text:"排行榜",pagePath:"pages/rank/index",iconPath:"static/images/ranking-d.png",selectedIconPath:"static/images/ranking-a.png",redDot:!1,badge:""},{text:"Mv",pagePath:"pages/mv/index",iconPath:"static/images/mv-d.png",selectedIconPath:"static/images/mv-a.png",redDot:!1,badge:""}],backgroundColor:""}},e.__uniConfig.compilerVersion="3.0.5",e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=i.e,t.default.component("pages-index-index",(function(e){var n={component:i.e("pages-index-index").then(function(){return e(i("3c51"))}.bind(null,i)).catch(i.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-rank-index",(function(e){var n={component:i.e("pages-rank-index").then(function(){return e(i("f37f"))}.bind(null,i)).catch(i.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-rankdetail-index",(function(e){var n={component:i.e("pages-rankdetail-index").then(function(){return e(i("7e6a"))}.bind(null,i)).catch(i.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-mv-index",(function(e){var n={component:i.e("pages-mv-index").then(function(){return e(i("8c7c"))}.bind(null,i)).catch(i.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-mvdetail-index",(function(e){var n={component:i.e("pages-mvdetail-index").then(function(){return e(i("dd40"))}.bind(null,i)).catch(i.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-recommend-index",(function(e){var n={component:i.e("pages-recommend-index").then(function(){return e(i("c9d0"))}.bind(null,i)).catch(i.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-singer-index",(function(e){var n={component:i.e("pages-singer-index").then(function(){return e(i("3b62"))}.bind(null,i)).catch(i.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-play-index",(function(e){var n={component:i.e("pages-play-index").then(function(){return e(i("36bb"))}.bind(null,i)).catch(i.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"音乐",enablePullDownRefresh:!0})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/rank/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"排行榜"})},[e("pages-rank-index",{slot:"page"})])}},meta:{id:2,name:"pages-rank-index",isNVue:!1,maxWidth:0,pagePath:"pages/rank/index",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/rankdetail/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"榜单详情"})},[e("pages-rankdetail-index",{slot:"page"})])}},meta:{name:"pages-rankdetail-index",isNVue:!1,maxWidth:0,pagePath:"pages/rankdetail/index",windowTop:44}},{path:"/pages/mv/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"Mv"})},[e("pages-mv-index",{slot:"page"})])}},meta:{id:3,name:"pages-mv-index",isNVue:!1,maxWidth:0,pagePath:"pages/mv/index",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/mvdetail/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"Mv详情"})},[e("pages-mvdetail-index",{slot:"page"})])}},meta:{name:"pages-mvdetail-index",isNVue:!1,maxWidth:0,pagePath:"pages/mvdetail/index",windowTop:44}},{path:"/pages/recommend/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"推荐歌单列表"})},[e("pages-recommend-index",{slot:"page"})])}},meta:{name:"pages-recommend-index",isNVue:!1,maxWidth:0,pagePath:"pages/recommend/index",windowTop:44}},{path:"/pages/singer/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"歌手"})},[e("pages-singer-index",{slot:"page"})])}},meta:{name:"pages-singer-index",isNVue:!1,maxWidth:0,pagePath:"pages/singer/index",windowTop:44}},{path:"/pages/play/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"当前播放"})},[e("pages-play-index",{slot:"page"})])}},meta:{name:"pages-play-index",isNVue:!1,maxWidth:0,pagePath:"pages/play/index",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,i("c8ba"))},2026:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.config=void 0;var t={server:"http://39.105.122.153:3001/",doucment:"https://binaryify.github.io/NeteaseCloudMusicApi/#/",type:{banner:"banner",personalized:"personalized",topMv:"top/mv",mvFirst:"mv/first",personalizedMv:"personalized/mv",toplistArtist:"toplist/artist",djRecommend:"dj/recommend",mvDetail:"mv/detail",mvUrl:"mv/url",simiMv:"simi/mv",playlistDetail:"playlist/detail",songDetail:"song/detail",songUrl:"song/url",topList:"top/list",programRecommend:"program/recommend",artistDesc:"artist/desc",artistSong:"artists",artistMv:"artist/mv",comment:"comment/music/",searchHot:"search/hot/detail",searchDetaul:"search/default"}};n.config=t},"23c9":function(e,n,i){var t=i("24fb");n=t(!1),n.push([e.i,"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* 公用css\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */.ease-row{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-lines:multiple;-moz-box-lines:multiple;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start}.ease-row .ease-col-2-1{box-sizing:border-box;width:50%;width:calc((100% - %?24?%) / 2)}.ease-row .ease-col-3-1{box-sizing:border-box;width:33.3333%;width:calc((100% - %?48?%) / 3)}.ease-row .ease-col-3-2{box-sizing:border-box;width:33.3333%;width:calc(100% - ((100% - %?48?%) / 3) - %?24?%)}.ease-row .ease-col-4-1{box-sizing:border-box;width:calc((100% - %?24?%) / 4)}.ease-row .ease-col-4-3{box-sizing:border-box;width:calc((100% - %?24?%) / 4 * 3)}.page-panel{padding:%?32?%}.page-title{font-size:%?36?%;padding:%?25?% %?0?%;font-weight:700;color:rbga(72,88,162,.3)}.themeColor{color:#41b883;font-size:%?46?%}uni-image{vertical-align:middle}.mt30{margin-top:%?30?%}.playBtn{position:absolute;z-index:99;left:%?30?%;top:%?30?%;width:%?80?%;height:%?80?%;background:hsla(0,0%,100%,.8);border-radius:50%}.playBtn .icon{margin:%?26?% %?0?% %?0?% %?30?%;width:0;height:0;border-top:%?14?% solid transparent;border-bottom:%?14?% solid transparent;border-left:%?28?% solid #41b883;border-radius:%?5?%}.font-w-b{font-weight:700}.privileges .item{background:#fff;border-radius:%?10?%;box-shadow:0 0 10px hsla(0,0%,51%,.3);margin-top:%?32?%;padding:%?20?% %?32?%;display:-webkit-box;display:-webkit-flex;display:flex}.privileges .item .index{font-weight:700;color:#666;margin-right:%?32?%;line-height:%?94?%;font-size:%?48?%;padding:%?0?% %?10?%}.privileges .item .info{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.privileges .item .info .name{width:100%;font-size:%?34?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.privileges .item .info .arName{font-size:%?28?%;color:#888}.privileges .item .btn{margin-top:%?20?%;margin-left:%?10?%;width:%?70?%}.privileges .item .btn uni-text{display:inline-block;width:%?10?%;height:%?10?%;border-radius:50%;background:#999;margin:%?0?% %?5?%}",""]),e.exports=n},"5f65":function(e,n,i){"use strict";i.r(n);var t=i("fe6e"),a=i("ef3c");for(var o in a)"default"!==o&&function(e){i.d(n,e,(function(){return a[e]}))}(o);i("f3fe");var r,s=i("f0c5"),d=Object(s["a"])(a["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],r);n["default"]=d.exports},8398:function(e,n,i){"use strict";var t=i("4ea4"),a=t(i("5530"));i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("19f3"),i("1c31");var o=t(i("e143")),r=t(i("5f65")),s=t(i("113d")),d=t(i("dfe4"));o.default.config.productionTip=!1,o.default.prototype.MusicApi=s.default,o.default.prototype.$store=d.default,r.default.mpType="app";var u=new o.default((0,a.default)({store:d.default},r.default));u.$mount(),o.default.prototype.globalData={innerAudioContext:uni.createInnerAudioContext()}},"91a6":function(e,n,i){var t=i("23c9");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var a=i("4f06").default;a("68942e0b",t,!0,{sourceMap:!1,shadowMode:!1})},dfe4:function(e,n,i){"use strict";var t=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(i("e143")),o=t(i("2f62"));a.default.use(o.default);var r=new o.default.Store({state:{isMusicPlay:!0,isMusicStart:!1,musicInfo:"",playTime:"",commentList:"",hotcommentList:"",searchHistory:[]},mutations:{setMusicInfo:function(e,n){e.musicInfo=n},musicStart:function(e,n){e.isMusicStart=n},setMusicPlay:function(e,n){e.isMusicPlay=n},setPlayTime:function(e,n){e.playTime=n},setComment:function(e,n){e.commentList=n},setHotComment:function(e,n){e.hotcommentList=n},setSearchList:function(e,n){e.searchHistory=n}}}),s=r;n.default=s},ef3c:function(e,n,i){"use strict";i.r(n);var t=i("1546"),a=i.n(t);for(var o in t)"default"!==o&&function(e){i.d(n,e,(function(){return t[e]}))}(o);n["default"]=a.a},f3fe:function(e,n,i){"use strict";var t=i("91a6"),a=i.n(t);a.a},fe6e:function(e,n,i){"use strict";var t;i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return t}));var a=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},o=[]}});