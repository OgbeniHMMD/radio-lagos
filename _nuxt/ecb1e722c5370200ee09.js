(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{190:function(t,e,l){"use strict";l.r(e);var r={data:function(){return{radio:{toggle:!1,name:"Radio Lagos",frequency:"107.5 FM",url:"https://ca7ssl.rcast.net/stream/61621.mp3"},status:{waiting:!1,title:"Welcome",msg:"Press play"}}},methods:{toggleSwitch:function(){this.beep(),this.radio.toggle?this.$refs.radioPlayer.pause():(this.$refs.radioPlayer.src=this.radio.url,this.$refs.radioPlayer.play())},beep:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/tones/switch.mp3";new Audio(t).play()},eventWaiting:function(){this.waiting=!0,this.status={waiting:!0,title:"Loading",msg:"Please, Wait. . ."}},eventPlaying:function(){this.radio.toggle=!0,this.status={waiting:!1,title:"On Air",msg:"Tiwa n Tiwa"}},eventPause:function(){this.radio.toggle=!1,this.$refs.radioPlayer.currentTime=0,this.$refs.radioPlayer.src="/tones/switch.mp3",this.status={waiting:!1,title:"OFF",msg:"Press play"}},eventOffline:function(){this.beep("/tones/error.mp3"),this.status={waiting:!1,title:"Something went wrong",msg:"Maybe we are offline"}}}},o=l(47),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{attrs:{id:"radio"}},[l("audio",{ref:"radioPlayer",attrs:{src:t.radio.url,preload:"none"},on:{pause:t.eventPause,ended:t.eventOffline,error:t.eventOffline,waiting:t.eventWaiting,playing:t.eventPlaying}}),t._v(" "),l("div",{attrs:{id:"radio-body"}},[l("div",{staticClass:"d-flex align-items-center text-light"},[l("div",{attrs:{id:"radio-status"}},[l("div",{staticClass:"col-12 col-md-3 d-flex flex-md-column text-left p-2 p-md-3 mr-4"},[l("div",{staticClass:"font-weight-bold"},[l("i",{staticClass:"fas fa-globe"}),t._v("\n\t\t\t\t\t\t"+t._s(t.radio.frequency)+"\n\t\t\t\t\t")]),t._v(" "),l("div",{staticClass:"ml-auto ml-md-0"},[t._v(t._s(t.radio.name))])]),t._v(" "),l("div",{staticClass:"col text-light text-md-right p-1 p-md-3"},[l("div",{staticClass:"row m-0"},[l("div",{staticClass:"col p-0 text-monospace"},[l("div",{staticClass:"font-weight-bold"},[t._v(t._s(t.status.title))]),t._v(" "),l("div",{staticClass:"text-truncate mw-100"},[t._v(t._s(t.status.msg))])]),t._v(" "),l("div",{staticClass:"col-2 col-md-1 p-0 mx-1 text-right"},[l("a",{attrs:{title:"Switch"},on:{click:function(e){return t.toggleSwitch()}}},[l("i",{staticClass:"fas fa-3x",class:t.radio.toggle?"fa-toggle-on":"fa-toggle-off"})])])])])])]),t._v(" "),l("div",{attrs:{id:"radio-speaker"}},[l("a",{staticClass:"text-light m-4 p-5",attrs:{title:"ON / OFF"},on:{click:function(e){return t.toggleSwitch()}}},[t.status.waiting?l("i",{staticClass:"fas fa-spinner fa-spin fa-4x"}):l("i",{staticClass:"fas fa-4x",class:t.radio.toggle?"fa-volume-mute":"fa-play"})])]),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"radio-footer"}},[e("div",{staticClass:"mt-1"},[this._v("\n\t\t\t\tMade with ♥ by\n\t\t\t\t"),e("a",{staticClass:"text-light font-weight-bold",attrs:{href:"https://www.hmmd.xyz"}},[this._v("OgbeniHMMD")])]),this._v(" "),e("div",{staticClass:"d-flex mt-4 mt-md-1"},[e("a",{staticClass:"text-light",attrs:{href:"https://twitter.com/Radiolagos1075",title:"Twitter"}},[e("i",{staticClass:"fab fa-twitter-square fa-2x"})]),this._v(" "),e("a",{staticClass:"ml-5 ml-md-4 text-light",attrs:{title:"Facebok",href:"https://www.facebook.com/radiolagos.amititi.5"}},[e("i",{staticClass:"fab fa-facebook-square fa-2x"})]),this._v(" "),e("a",{staticClass:"mx-5 mx-md-4 text-light",attrs:{title:"Instagram",href:"https://www.instagram.com/radiolagos1075/"}},[e("i",{staticClass:"fab fa-instagram-square fa-2x"})]),this._v(" "),e("a",{staticClass:"text-light",attrs:{href:"https://github.com/OgbeniHMMD/radio-lagos",title:"Github"}},[e("i",{staticClass:"fab fa-github-square fa-2x"})])])])}],!1,null,null,null);e.default=component.exports}}]);