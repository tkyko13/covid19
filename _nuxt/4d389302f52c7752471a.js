(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{474:function(t,e,n){var content=n(477);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("088dc89c",content,!0,{sourceMap:!1})},476:function(t,e,n){"use strict";var r=n(474);n.n(r).a},477:function(t,e,n){(e=n(10)(!1)).push([t.i,".TextCard{background-color:#fff;box-shadow:0px 0px 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:20px;margin-bottom:20px}.TextCard-Heading{font-size:24px;font-size:1.5rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px}.TextCard-Heading a{font-size:24px;font-size:1.5rem;color:#4d4d4d;font-weight:bold;color:#006ca8 !important;text-decoration:none}.TextCard-Heading a:hover{text-decoration:underline}.TextCard-ExternalLinkIcon{margin-left:2px;color:#707070 !important}.TextCard-Body *{font-size:16px;font-size:1rem;color:#333;line-height:160%;font-weight:normal}.TextCard-Body a{word-break:break-all;color:#006ca8;text-decoration:none}.TextCard-Body a:hover{text-decoration:underline}",""]),t.exports=e},478:function(t,e,n){"use strict";var r=n(20),o=n(33),c=n(23),l=n(27),d=n(28),f=n(22),h=n(68),m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},w=function(t){function e(){return Object(r.a)(this,e),Object(c.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"isInternalLink",value:function(path){return!/^https?:\/\//.test(path)}}]),e}(h.c);m([Object(h.b)({default:"",required:!1})],w.prototype,"title",void 0),m([Object(h.b)({default:"",required:!1})],w.prototype,"link",void 0),m([Object(h.b)({default:"",required:!1})],w.prototype,"body",void 0);var x=w=m([h.a],w),$=(n(476),n(16)),v=n(47),y=n.n(v),_=n(142),component=Object($.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"TextCard"},[t.title?n("h3",{staticClass:"TextCard-Heading"},[t.link?n("div",[n("a",{attrs:{href:t.link,target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t.isInternalLink(t.link)?t._e():n("v-icon",{staticClass:"TextCard-ExternalLinkIcon",attrs:{size:"20"}},[t._v("\n        mdi-open-in-new\n      ")])],1):[t._v("\n      "+t._s(t.title)+"\n    ")]],2):t._e(),t._v(" "),t.body?n("div",{staticClass:"TextCard-Body",domProps:{innerHTML:t._s(t.body)}}):t._e(),t._v(" "),t.$slots.default?n("div",{staticClass:"TextCard-Body"},[t._t("default")],2):t._e()])}),[],!1,null,null,null);e.a=component.exports;y()(component,{VIcon:_.a})},479:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));var r=n(481),o=n.n(r),c=function(t){return o()(t).format("YYYY-MM-DDTHH:mm:ss")},l=function(t){return o()(t).format("YYYY-MM-DD")}},481:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},f={s:d,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+d(r,2,"0")+":"+d(i,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,u),i=e-r<0,s=t.clone().add(n+(i?-1:1),u);return Number(-(n+(e-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:u,y:a,w:s,d:i,D:"date",h:r,m:n,s:e,ms:t,Q:o}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m="en",w={};w[m]=h;var x=function(t){return t instanceof y},$=function(t,e,n){var r;if(!t)return m;if("string"==typeof t)w[t]&&(r=t),e&&(w[t]=e,r=t);else{var i=t.name;w[i]=t,r=i}return n||(m=r),r},g=function(t,e,n){if(x(t))return t.clone();var r=e?"string"==typeof e?{format:e,pl:n}:e:{};return r.date=t,new y(r)},v=f;v.l=$,v.i=x,v.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var y=function(){function d(t){this.$L=this.$L||$(t.locale,null,!0),this.parse(t)}var f=d.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(v.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(c);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return v},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return g(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<g(t)},f.$g=function(t,e,n){return v.u(t)?this[e]:this.set(n,t)},f.year=function(t){return this.$g(t,"$y",a)},f.month=function(t){return this.$g(t,"$M",u)},f.day=function(t){return this.$g(t,"$W",i)},f.date=function(t){return this.$g(t,"$D","date")},f.hour=function(t){return this.$g(t,"$H",r)},f.minute=function(t){return this.$g(t,"$m",n)},f.second=function(t){return this.$g(t,"$s",e)},f.millisecond=function(e){return this.$g(e,"$ms",t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var c=this,l=!!v.u(o)||o,d=v.p(t),f=function(t,e){var n=v.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return l?n:n.endOf(i)},h=function(t,e){return v.w(c.toDate()[t].apply(c.toDate(),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},m=this.$W,w=this.$M,x=this.$D,$="set"+(this.$u?"UTC":"");switch(d){case a:return l?f(1,0):f(31,11);case u:return l?f(1,w):f(0,w+1);case s:var g=this.$locale().weekStart||0,y=(m<g?m+7:m)-g;return f(l?x-y:x+(6-y),w);case i:case"date":return h($+"Hours",0);case r:return h($+"Minutes",1);case n:return h($+"Seconds",2);case e:return h($+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,o){var c,l=v.p(s),d="set"+(this.$u?"UTC":""),f=(c={},c[i]=d+"Date",c.date=d+"Date",c[u]=d+"Month",c[a]=d+"FullYear",c[r]=d+"Hours",c[n]=d+"Minutes",c[e]=d+"Seconds",c[t]=d+"Milliseconds",c)[l],h=l===i?this.$D+(o-this.$W):o;if(l===u||l===a){var m=this.clone().set("date",1);m.$d[f](h),m.init(),this.$d=m.set("date",Math.min(this.$D,m.daysInMonth())).toDate()}else f&&this.$d[f](h);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[v.p(t)]()},f.add=function(t,o){var c,l=this;t=Number(t);var d=v.p(o),f=function(e){var n=g(l);return v.w(n.date(n.date()+Math.round(e*t)),l)};if(d===u)return this.set(u,this.$M+t);if(d===a)return this.set(a,this.$y+t);if(d===i)return f(1);if(d===s)return f(7);var h=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[d]||1,m=this.$d.getTime()+t*h;return v.w(m,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=v.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,c=i.months,d=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},f=function(t){return v.s(s%12||12,t,"0")},h=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:v.s(o+1,2,"0"),MMM:d(i.monthsShort,o,c,3),MMMM:c[o]||c(this,n),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:d(i.weekdaysMin,this.$W,a,2),ddd:d(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:v.s(s,2,"0"),h:f(1),hh:f(2),a:h(s,u,!0),A:h(s,u,!1),m:String(u),mm:v.s(u,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:r};return n.replace(l,(function(t,e){return e||m[t]||r.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,c,l){var d,f=v.p(c),h=g(t),m=6e4*(h.utcOffset()-this.utcOffset()),w=this-h,x=v.m(this,h);return x=(d={},d[a]=x/12,d[u]=x,d[o]=x/3,d[s]=(w-m)/6048e5,d[i]=(w-m)/864e5,d[r]=w/36e5,d[n]=w/6e4,d[e]=w/1e3,d)[f]||w,l?x:v.a(x)},f.daysInMonth=function(){return this.endOf(u).$D},f.$locale=function(){return w[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=$(t,e,!0);return r&&(n.$L=r),n},f.clone=function(){return v.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},d}();return g.prototype=y.prototype,g.extend=function(t,e){return t(e,y,g),g},g.locale=$,g.isDayjs=x,g.unix=function(t){return g(1e3*t)},g.en=w[m],g.Ls=w,g}()},504:function(t,e,n){var content=n(574);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("38dac34c",content,!0,{sourceMap:!1})},572:function(t){t.exports=JSON.parse('{"transitItems":[{"title":"新潟交通株式会社","items":[{"date":null,"url":"http://www.niigata-kotsu.co.jp/~noriai/coronavirus/","text":"新型コロナウイルスの感染拡大に伴う当社グループの対応について"}]},{"title":"新潟交通佐渡株式会社","items":[{"date":"2020/4/21","url":"http://www.sado-bus.com/news/1060/","text":"新型コロナウイルス感染症対策に伴う窓口臨時休業について"}]},{"title":"越後交通","items":[{"date":"2020/4/21","url":"http://www.echigo-kotsu.co.jp/covid19_bus.html","text":"新型コロナウイルスの感染拡大および緊急事態宣言の発令に伴う運行情報等"}]},{"title":"頚城自動車株式会社","items":[{"date":"2020/4/22","url":"http://www.marukei-g.com/files/libs/2654/202004221832272442.pdf","text":"通学定期券の払い戻しについて"},{"date":"2020/4/22","url":"http://www.marukei-g.com/files/libs/2652/202004221409535343.pdf","text":"東京高速乗車券 払い戻し手数料無料化について"},{"date":"2020/4/18","url":"https://www.jrniigata.co.jp/top/ibennto05.pdf","text":"4/18～5/6 直江津駅前観光案内所 閉鎖のお知らせ"}]},{"title":"泉観光バス","items":[{"date":"2020/4/21","url":"http://www.izumi-group.jp/news/?id=115","text":"にしかん観光周遊バスの運休につきまして"}]},{"title":"JR東日本 新潟支社","items":[{"date":null,"url":"https://www.jrniigata.co.jp/top/ibento04.pdf","text":"イベント中止に伴う、臨時列車の運休について（４月）"},{"date":null,"url":"https://www.jrniigata.co.jp/top/ibennto05.pdf","text":"イベント中止に伴う、臨時列車の運休について（５月）"},{"date":null,"url":"https://www.jrniigata.co.jp/top/20200406rinji6.pdf","text":"イベント中止に伴う、臨時列車の運休について（６月）"}]},{"title":"北越急行株式会社","items":[{"date":"2020/4/21","url":"https://hokuhoku.co.jp/pdf/info2020420.pdf","text":"新型コロナウイルス発生に伴うきっぷの取扱いについて"}]},{"title":"えちごトキめき鉄道株式会社","items":[{"date":"2020/4/21","url":"https://www.echigo-tokimeki.co.jp/information/detail?id=1028","text":"「雪月花」の運休期間延長について"}]},{"title":"新潟空港","items":[{"date":null,"url":"http://www.niigata-airport.gr.jp/news/view.php?id=725","text":"国内線減便のお知らせ"}]},{"title":"佐渡汽船株式会社","items":[{"date":"2020/4/24","url":"https://www.sadokisen.co.jp/?news=20200424-2","text":"新型コロナウイルス感染拡大の影響に伴う減便の追加と期間延長について"}]},{"title":"粟島汽船株式会社","items":[{"date":"2020/4/17","url":"http://awaline.co.jp/img/corona/20200417_timetable_notice.pdf","text":"４月２５日～５月３１日の運航ダイヤ変更について"}]}]}')},573:function(t,e,n){"use strict";var r=n(504);n.n(r).a},574:function(t,e,n){(e=n(10)(!1)).push([t.i,".Transit-Heading{font-size:30px;font-size:1.875rem;font-weight:normal;color:#4d4d4d;margin-bottom:12px}.Transit-Corp-heading{display:flex;align-items:center;font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px;color:#4d4d4d;margin-left:12px}.Transit-Corp-list{padding-left:0px;list-style-type:none}.Transit-Corp-list-item-anchor{display:inline-block;text-decoration:none;margin:5px;font-size:14px}@media screen and (max-width: 768px){.Transit-Corp-list-item-anchor{display:flex;flex-wrap:wrap}}.Transit-Corp-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width: 768px){.Transit-Corp-list-item-anchor-time{flex:0 0 100%}}.Transit-Corp-list-item-anchor-link{flex:0 1 auto;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.Transit-Corp-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width: 768px){.Transit-Corp-list-item-anchor-link{padding-left:8px}}.Transit-item-ExternalLinkIcon{margin-left:2px;color:#707070 !important}",""]),t.exports=e},648:function(t,e,n){"use strict";n.r(e);var r=n(478),o=n(572),c=n(479),l={components:{TextCard:r.a},data:function(){return{transitItems:o.transitItems}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)},formattedDate:function(t){return Object(c.a)(t)},head:function(){return{title:this.$t("新型コロナウイルスの影響による公共交通機関への影響")}}}},d=(n(573),n(16)),f=n(47),h=n.n(f),m=n(142),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Transit"},[n("h2",{staticClass:"Transit-Heading"},[t._v("\n    "+t._s(t.$t("新型コロナウイルスの影響による公共交通機関への影響"))+"\n  ")]),t._v(" "),t._l(t.transitItems,(function(e,i){return n("TextCard",{key:i},[n("h3",{staticClass:"Transit-Corp-heading"},[t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),n("ul",{staticClass:"Transit-Corp-list"},t._l(e.items,(function(e,r){return n("li",{key:r,staticClass:"Transit-Corp-list-item"},[null!==e.date?n("time",{staticClass:"Transit-Corp-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(e.date)+"\n        ")]):t._e(),t._v(" "),n("a",{staticClass:"Transit-Corp-list-item-anchor",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[n("span",{staticClass:"Transit-Corp-list-item-anchor-link"},[t._v("\n            "+t._s(e.text)+"\n            "),t.isInternalLink(e.url)?t._e():n("v-icon",{staticClass:"Transit-item-ExternalLinkIcon",attrs:{size:"12"}},[t._v("\n              mdi-open-in-new\n            ")])],1)])])})),0)])}))],2)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VIcon:m.a})}}]);