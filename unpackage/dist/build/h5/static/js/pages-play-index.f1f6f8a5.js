(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-play-index"],{"0e7a":function(t,i,e){"use strict";e.r(i);var a=e("9b88"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},"1de5":function(t,i,e){"use strict";t.exports=function(t,i){return i||(i={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),i.hash&&(t+=i.hash),/["'() \t\n]/.test(t)||i.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"36bb":function(t,i,e){"use strict";e.r(i);var a=e("e424"),n=e("0e7a");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("5c30");var o,u=e("f0c5"),c=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"11f1ae7c",null,!1,a["a"],o);i["default"]=c.exports},"465f":function(t,i,e){var a=e("24fb"),n=e("1de5"),s=e("a516");i=a(!1);var o=n(s);i.push([t.i,"uni-page-body[data-v-11f1ae7c]{width:100%;height:100%;background:url("+o+") repeat 50% 50%}.page-panel-h[data-v-11f1ae7c]{position:relative;z-index:1;width:100%;height:100%;color:#41b883;text-align:center}.music-name[data-v-11f1ae7c]{padding:%?40?% %?20?% %?0?%;font-size:%?40?%;font-weight:700;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.music-author[data-v-11f1ae7c]{font-size:%?28?%}.music-pic[data-v-11f1ae7c]{margin:%?60?% auto %?0?%;width:%?340?%;height:%?340?%;border-radius:50%;overflow:hidden;border:%?15?% solid #41b883;box-shadow:0 0 %?20?% rgba(233,30,99,.5)}.music-pic uni-image[data-v-11f1ae7c]{width:%?340?%;height:%?340?%;border-radius:50%}.player-panel[data-v-11f1ae7c]{position:absolute;z-index:2;\r\n\t/* \tborder-top:1px solid #999999; */left:0;top:160%;bottonm:0;width:100%;padding:%?20?% %?0?%}.player-btn[data-v-11f1ae7c]{text-align:center;line-height:%?100?%;padding-bottom:%?100?%}.player-btn .playStop[data-v-11f1ae7c],\r\n.player-btn .nextPrev[data-v-11f1ae7c]{display:inline-block}.player-btn .playStop uni-image[data-v-11f1ae7c]{width:%?100?%;height:%?100?%;margin:%?0?% %?80?%}.player-btn .nextPrev uni-image[data-v-11f1ae7c]{width:%?70?%;height:%?70?%}.time[data-v-11f1ae7c]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?0?% %?30?%}.time .item[data-v-11f1ae7c]{font-size:%?24?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left}.time .item[data-v-11f1ae7c]:nth-child(2){text-align:right}.comment[data-v-11f1ae7c]{position:absolute;top:100%;left:0;padding:%?20?%}.comment .item[data-v-11f1ae7c]{width:100%}.comment .item uni-image[data-v-11f1ae7c]{width:%?100?%;height:%?100?%}.comment .item[data-v-11f1ae7c]{background:#fff;border-radius:%?10?%;box-shadow:0 0 10px hsla(0,0%,51%,.3);margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex}.comment .item .index[data-v-11f1ae7c]{margin-right:%?20?%;line-height:50%;font-weight:700;font-size:%?48?%;padding:%?20?% %?10?%;color:#666}.comment .item .info[data-v-11f1ae7c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;padding:%?20?% %?0?%}.comment .item .info .name[data-v-11f1ae7c]{font-size:%?32?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.comment .item .info .arName[data-v-11f1ae7c]{font-size:%?28?%;color:#888}.comment .item .btn[data-v-11f1ae7c]{width:%?70?%;line-height:%?90?%}\r\n/* .comment .item .btn image{\r\n\twidth: 100%;\r\n\theight: 70upx;\r\n} */body.?%PAGE?%[data-v-11f1ae7c]{background:url("+o+") repeat 50% 50%}",""]),t.exports=i},"5c30":function(t,i,e){"use strict";var a=e("b711"),n=e.n(a);n.a},"9b88":function(t,i,e){"use strict";var a=e("4ea4");e("4160"),e("b680"),e("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("5530")),s=e("2f62"),o={data:function(){return{musicDetail:{id:"",url:"",name:"",picUrl:"",author:""},comment:"",hotcomment:"",musicTime:{currentTime:0,duration:0},isStop:!1,isPlay:!0,playIcon:"../../static/images/play.png",pauseIcon:"../../static/images/pause.png",beAudioMannager:"",innerAudioContext:"",musicStatus:0,musicSwithNum:2}},onLoad:function(t){this.musicDetail.id=t.id,this.innerAudioContext=this.globalData.innerAudioContext,this.innerAudioContextFunc(),"playing"!==this.musicDetail.id?(this.getMusicUrl(),this.getMusicInfo(),this.getMusicComment(),this.isStop=!1,this.isPlay=!0):(this.comment=this.commentList,this.hotcomment=this.hotcommentList,this.musicDetail=this.musicInfo,this.musicTime=this.playTime,this.isMusicPlay?this.isPlay=!0:this.isPlay=!1,this.globalData.innerAudioContext.currentTime==this.globalData.innerAudioContext.duration?this.isStop=!0:this.isStop=!1)},onUnload:function(t){this.setPlayTime(this.musicTime),this.setMusicInfo(this.musicDetail),this.setMusicPlay(this.isPlay),this.setComment(this.comment),this.setHotComment(this.hotcomment)},computed:(0,n.default)({},(0,s.mapState)(["isMusicStart","musicInfo","isMusicPlay","playTime","commentList","hotcommentList"])),methods:(0,n.default)((0,n.default)({},(0,s.mapMutations)(["musicStart","setMusicInfo","setMusicPlay","setPlayTime","setComment","setHotComment"])),{},{innerAudioContextFunc:function(){var t=this;this.innerAudioContext.onTimeUpdate((function(){t.musicTime.currentTime=t.innerAudioContext.currentTime/60,t.musicTime.duration=t.innerAudioContext.duration/60,t.musicTime.currentTime=t.musicTime.currentTime.toFixed(2),t.musicTime.duration=t.musicTime.duration.toFixed(2),t.globalData.innerAudioContext.currentTime==t.globalData.innerAudioContext.duration&&(t.isStop=!0)}))},getMusicUrl:function(){var t=this,i={id:t.musicDetail.id};t.MusicApi.request("song/url",i,"GET").then((function(i){t.musicDetail.url=i.data.data[0].url,t.musicStatus++}))},getMusicComment:function(){var t=this,i={id:t.musicDetail.id};t.MusicApi.request("comment/music",i,"GET").then((function(i){t.comment=i.data.comments,t.hotcomment=i.data.hotComments}))},getMusicInfo:function(){var t=this,i={ids:t.musicDetail.id};t.MusicApi.request("song/detail",i,"GET").then((function(i){i.data.songs[0].name?t.musicDetail.name=i.data.songs[0].name:t.musicDetail.name="",t.musicDetail.picUrl=i.data.songs[0].al.picUrl;var e=i.data.songs[0].ar;e.forEach((function(i){t.musicDetail.author=t.musicDetail.author+i.name+"/"})),t.musicDetail.author=t.musicDetail.author.substr(0,t.musicDetail.author.length-1),t.musicStatus++}))},playMusic:function(){this.musicStart("true"),this.innerAudioContext.autoplay=!0,this.innerAudioContext.src=this.musicDetail.url,this.innerAudioContext.play()},toPausePlay:function(){this.isPlay?(this.innerAudioContext.pause(),this.isPlay=!1):(this.innerAudioContext.play(),this.isPlay=!0)},toAgain:function(){this.isStop=!1,this.isPlay=!0,this.playMusic()},sliderChange:function(t){var i=t.detail.value;this.innerAudioContext.seek(60*i)}}),watch:{musicStatus:function(t){t==this.musicSwithNum&&this.playMusic()}}};i.default=o},a516:function(t,i,e){t.exports=e.p+"static/img/bg.70504a7a.jpg"},a629:function(t,i,e){t.exports=e.p+"static/img/again.040f4c62.png"},b711:function(t,i,e){var a=e("465f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("45f52d7e",a,!0,{sourceMap:!1,shadowMode:!1})},e424:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[""==!t.musicDetail.name?a("v-uni-view",{staticClass:"page-panel-h"},[a("v-uni-view",{staticClass:"music-name"},[t._v(t._s(t.musicDetail.name))]),a("v-uni-view",{staticClass:"music-author"},[t._v(t._s(t.musicDetail.author))]),a("v-uni-view",{staticClass:"music-pic"},[a("v-uni-image",{attrs:{src:t.musicDetail.picUrl}})],1),a("v-uni-view",{staticClass:"player-panel"},[a("v-uni-view",{staticClass:"time"},[a("v-uni-view",{staticClass:"item"},[t._v(t._s(t.musicTime.currentTime))]),a("v-uni-view",{staticClass:"item"},[t._v(t._s(t.musicTime.duration))])],1),a("v-uni-slider",{attrs:{value:t.musicTime.currentTime,step:"0.01",min:"0",max:t.musicTime.duration,"block-size":"12",activeColor:"#41b883"},on:{changing:function(i){arguments[0]=i=t.$handleEvent(i),t.sliderChange.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"player-btn"},[t.isStop?a("v-uni-view",{staticClass:"playStop",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toAgain()}}},[a("v-uni-image",{attrs:{src:e("a629"),mode:""}})],1):t._e(),t.isStop?t._e():a("v-uni-view",{staticClass:"playStop",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toPausePlay()}}},[a("v-uni-image",{attrs:{src:t.isPlay?t.playIcon:t.pauseIcon,mode:""}})],1)],1)],1)],1):t._e(),a("v-uni-view",{staticClass:"comment"},[a("v-uni-view",{staticStyle:{padding:"0upx 10upx"}},[t._v("热门评论")]),t._l(t.hotcomment,(function(i,e){return a("v-uni-view",{key:i.index,staticClass:"item"},[a("v-uni-view",{staticClass:"index"},[a("v-uni-image",{attrs:{src:i.user.avatarUrl}})],1),a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(i.user.nickname))]),a("v-uni-text",{staticClass:"arName"},[t._v(t._s(i.content))]),a("v-uni-text",{staticStyle:{"font-size":"26upx"}},[t._v(t._s(i.likedCount))])],1)],1)})),a("v-uni-view",{staticStyle:{padding:"30upx 10upx 10upx"}},[t._v("最近评论")]),t._l(t.comment,(function(i,e){return a("v-uni-view",{key:i.index,staticClass:"item"},[a("v-uni-view",{staticClass:"index"},[a("v-uni-image",{attrs:{src:i.user.avatarUrl}})],1),a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(i.user.nickname))]),a("v-uni-text",{staticClass:"arName"},[t._v(t._s(i.content))])],1)],1)}))],2)],1)},s=[]}}]);