(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9671:function(u,D,t){let F=t(1701);u.exports=n;let e=Object.hasOwnProperty;function n(){if(!(this instanceof n))return new n;this.reset()}function r(u,D){return"string"!=typeof u?"":(D||(u=u.toLowerCase()),u.replace(F,"").replace(/ /g,"-"))}n.prototype.slug=function(u,D){let t=this,F=r(u,!0===D),n=F;for(;e.call(t.occurrences,F);)t.occurrences[n]++,F=n+"-"+t.occurrences[n];return t.occurrences[F]=0,F},n.prototype.reset=function(){this.occurrences=Object.create(null)},n.slug=r},1701:function(u){u.exports=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g},5557:function(u,D,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6616)}])},4866:function(u,D,t){"use strict";t.d(D,{w:function(){return c}});var F=t(7320),e=t(1720),n=t(5969),r=t.n(n);let a=u=>{let{title:D="Subscribe to the newsletter"}=u,t=(0,e.useRef)(null),[n,a]=(0,e.useState)(!1),[c,l]=(0,e.useState)(""),[s,i]=(0,e.useState)(!1),C=async u=>{u.preventDefault();let D=await fetch("/api/".concat(r().newsletter.provider),{body:JSON.stringify({email:t.current.value}),headers:{"Content-Type":"application/json"},method:"POST"}),{error:F}=await D.json();if(F){a(!0),l("Your e-mail address is invalid or you are already subscribed!");return}t.current.value="",a(!1),i(!0),l("Successfully! \uD83C\uDF89 You are now subscribed.")};return(0,F.BX)("div",{children:[(0,F.tZ)("div",{className:"pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",children:D}),(0,F.BX)("form",{className:"flex flex-col sm:flex-row",onSubmit:C,children:[(0,F.BX)("div",{children:[(0,F.tZ)("label",{className:"sr-only",htmlFor:"email-input",children:"Email address"}),(0,F.tZ)("input",{autoComplete:"email",className:"w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black",id:"email-input",name:"email",placeholder:s?"You're subscribed !  \uD83C\uDF89":"Enter your email",ref:t,required:!0,type:"email",disabled:s})]}),(0,F.tZ)("div",{className:"mt-2 flex w-full rounded-md shadow-sm sm:ml-3 sm:mt-0",children:(0,F.tZ)("button",{className:"w-full rounded-md bg-primary-500 px-4 py-2 font-medium text-white sm:py-0 ".concat(s?"cursor-default":"hover:bg-primary-700 dark:hover:bg-primary-400"," focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black"),type:"submit",disabled:s,children:s?"Thank you!":"Sign up"})})]}),n&&(0,F.tZ)("div",{className:"w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96",children:c})]})},c=u=>{let{title:D}=u;return(0,F.tZ)("div",{className:"flex items-center justify-center",children:(0,F.tZ)("div",{className:"bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8",children:(0,F.tZ)(a,{title:D})})})}},3262:function(u,D,t){"use strict";t.d(D,{$t:function(){return i},TQ:function(){return s},Uy:function(){return C}});var F=t(7320),e=t(9008),n=t.n(e),r=t(1163),a=t(5969),c=t.n(a);let l=u=>{let{title:D,description:t,ogType:e,ogImage:a,twImage:l,canonicalUrl:s}=u,i=(0,r.useRouter)();return(0,F.BX)(n(),{children:[(0,F.tZ)("title",{children:D}),(0,F.tZ)("meta",{name:"robots",content:"follow, index"}),(0,F.tZ)("meta",{name:"description",content:t}),(0,F.tZ)("meta",{property:"og:url",content:"".concat(c().siteUrl).concat(i.asPath)}),(0,F.tZ)("meta",{property:"og:type",content:e}),(0,F.tZ)("meta",{property:"og:site_name",content:c().title}),(0,F.tZ)("meta",{property:"og:description",content:t}),(0,F.tZ)("meta",{property:"og:title",content:D}),"Array"===a.constructor.name?a.map(u=>{let{url:D}=u;return(0,F.tZ)("meta",{property:"og:image",content:D},D)}):(0,F.tZ)("meta",{property:"og:image",content:a},a),(0,F.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,F.tZ)("meta",{name:"twitter:site",content:c().twitter}),(0,F.tZ)("meta",{name:"twitter:title",content:D}),(0,F.tZ)("meta",{name:"twitter:description",content:t}),(0,F.tZ)("meta",{name:"twitter:image",content:l}),(0,F.tZ)("link",{rel:"canonical",href:s||"".concat(c().siteUrl).concat(i.asPath)})]})},s=u=>{let{title:D,description:t}=u,e=c().siteUrl+c().socialBanner,n=c().siteUrl+c().socialBanner;return(0,F.tZ)(l,{title:D,description:t,ogType:"website",ogImage:e,twImage:n})},i=u=>{let{title:D,description:t}=u,e=c().siteUrl+c().socialBanner,a=c().siteUrl+c().socialBanner,s=(0,r.useRouter)();return(0,F.BX)(F.HY,{children:[(0,F.tZ)(l,{title:D,description:t,ogType:"website",ogImage:e,twImage:a}),(0,F.tZ)(n(),{children:(0,F.tZ)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(t," - RSS feed"),href:"".concat(c().siteUrl).concat(s.asPath,"/feed.xml")})})]})},C=u=>{let D,{authorDetails:t,title:e,summary:a,date:s,lastmod:i,url:C,images:o=[],canonicalUrl:E}=u;(0,r.useRouter)();let A=new Date(s).toISOString(),B=new Date(i||s).toISOString(),m=0===o.length?[c().socialBanner]:"string"==typeof o?[o]:o,d=m.map(u=>({"@type":"ImageObject",url:u.includes("http")?u:c().siteUrl+u}));D=t?t.map(u=>({"@type":"Person",name:u.name})):{"@type":"Person",name:c().author};let h={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":C},headline:e,image:d,datePublished:A,dateModified:B,author:D,publisher:{"@type":"Organization",name:c().author,logo:{"@type":"ImageObject",url:"".concat(c().siteUrl).concat(c().siteLogo)}},description:a},p=d[0].url;return(0,F.BX)(F.HY,{children:[(0,F.tZ)(l,{title:e,description:a,ogType:"article",ogImage:d,twImage:p,canonicalUrl:E}),(0,F.BX)(n(),{children:[s&&(0,F.tZ)("meta",{property:"article:published_time",content:A}),i&&(0,F.tZ)("meta",{property:"article:modified_time",content:B}),(0,F.tZ)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(h,null,2)}})]})]})}},7925:function(u,D,t){"use strict";var F=t(7320),e=t(1664),n=t.n(e),r=t(7720);let a=u=>{let{text:D}=u;return(0,F.tZ)(n(),{href:"/tags/".concat((0,r.Z)(D)),className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:D.split(" ").join("-")})};D.Z=a},2815:function(u,D,t){"use strict";var F=t(5969),e=t.n(F);let n=u=>{let D=new Date(u).toLocaleDateString(e().locale,{year:"numeric",month:"long",day:"numeric"});return D};D.Z=n},7720:function(u,D,t){"use strict";var F=t(9671);let e=u=>(0,F.slug)(u);D.Z=e},6616:function(u,D,t){"use strict";t.r(D),t.d(D,{__N_SSG:function(){return s},default:function(){return i}});var F=t(7320);t(6250);var e=t(3262);t(7925),t(5969),t(2815),t(4866);let n="pl-1 list-inside list-disc marker:text-xl marker:text-stone-200",r="before:mr-[-0.5rem] mb-1 lg:mb-2",a="font-semibold text-sky-500",c="text-md font-bold text-stone-700 lg:text-xl",l="rounded-xl bg-stone-100 px-3 py-2 text-xs font-bold text-stone-700 hover:bg-stone-200";var s=!0;function i(u){let{posts:D}=u,{name:t,avatar:s,occupation:i,company:C,email:o,twitter:E,linkedin:A,github:B}=D;return(0,F.BX)(F.HY,{children:[(0,F.tZ)(e.TQ,{title:"Lee Si Yoon - resume",description:"About me - ".concat(t)}),(0,F.BX)("article",{className:"mt-24 lg:mt-20",children:[(0,F.BX)("h1",{className:"text-4xl font-extrabold leading-snug tracking-tight lg:text-6xl lg:leading-snug ".concat("bg-gradient-to-b from-sky-300 to-sky-600 bg-clip-text text-transparent"),children:["안녕하세요.",(0,F.tZ)("br",{}),"이시윤입니다"]}),(0,F.BX)("ul",{className:"mt-14 text-base font-semibold tracking-tight text-stone-500 lg:text-xl ".concat(n),children:[(0,F.tZ)("li",{className:"".concat(r),children:"주어진 작업의 의도를 중요하게 생각합니다."}),(0,F.tZ)("li",{className:"".concat(r),children:"UI, UX에 대해 이야기하고 개선하는 과정을 좋아합니다."}),(0,F.tZ)("li",{className:"".concat(r),children:"더 나은 협업을 위한 방법론에 대해 고민하는 것을 좋아합니다."}),(0,F.tZ)("li",{className:"".concat(r),children:"도전적이고 투명하며 화기애애한 조직을 좋아합니다."})]})]}),(0,F.BX)("section",{className:"mt-14",children:[(0,F.tZ)("h2",{className:"".concat(c),children:"기술 및 역량 요약"}),(0,F.BX)("ul",{className:"mt-4 text-base font-light tracking-tight text-stone-600 lg:text-xl ".concat(n),children:[(0,F.BX)("li",{className:"leading-snug ".concat(r),children:[(0,F.tZ)("strong",{className:"".concat(a),children:"Javascript ES6+"}),"와",(0,F.tZ)("strong",{className:"".concat(a),children:" Typescript"}),"에 익숙합니다"]}),(0,F.BX)("li",{className:"leading-snug ".concat(r),children:[(0,F.tZ)("strong",{className:"".concat(a),children:"React"}),"기반의",(0,F.tZ)("strong",{className:"".concat(a),children:" CSR 프론트엔드 개발"}),"에 익숙하고, 리렌더링 최적화, 번들 경량화 등 기본적인 웹 성능 최적화 경험이 있습니다"]}),(0,F.BX)("li",{className:"leading-snug ".concat(r),children:[(0,F.tZ)("strong",{className:"".concat(a),children:"Cypress"}),"을 이용한",(0,F.tZ)("strong",{className:"".concat(a),children:" E2E테스트"})," 경험이 있습니다"]}),(0,F.BX)("li",{className:"leading-snug ".concat(r),children:[(0,F.tZ)("strong",{className:"".concat(a),children:"Figma, Abobe XD"}),"와 같은",(0,F.tZ)("strong",{className:"".concat(a),children:" 프로토타이핑 툴"}),"에 능숙하여 디자이너와 긴밀하고 효율적으로 협업할 수 있습니다"]})]}),(0,F.tZ)("p",{className:"mt-4 text-base font-light tracking-tight text-stone-600 lg:text-xl",children:"그 외에도 Apollo Client, Sentry, d3, three.js 등 어떤 기술이든 적극적으로 탐구하여 도입합니다."})]}),(0,F.BX)("section",{className:"mt-14",children:[(0,F.tZ)("h2",{className:"".concat(c),children:"커리어 요약"}),(0,F.tZ)("ul",{className:"mt-4",children:(0,F.BX)("li",{children:[(0,F.tZ)("h3",{className:"mb-1 text-3xl font-bold text-stone-800",children:"friendli AI"}),(0,F.tZ)("p",{className:"mb-2 text-stone-700",children:"프론트엔드 엔지니어"}),(0,F.tZ)("span",{className:"mb-3 block text-sm font-bold text-stone-700",children:"2023.01 ~ 현재"}),(0,F.tZ)("button",{className:"block ".concat(l),children:"자세히 보기"})]})})]}),(0,F.BX)("section",{className:"mt-12",children:[(0,F.tZ)("h2",{className:"".concat(c),children:"개인 프로젝트"}),(0,F.BX)("ul",{className:"mt-4",children:[(0,F.BX)("li",{className:"mb-6",children:[(0,F.tZ)("h3",{className:"mb-1 text-2xl font-bold text-stone-800",children:"Migration Stories"}),(0,F.tZ)("p",{className:"mb-3 text-sm font-light text-stone-400",children:"duration"}),(0,F.BX)("table",{className:"mb-3 table-auto text-stone-400",children:[(0,F.BX)("tr",{children:[(0,F.tZ)("td",{className:"pr-6",children:"간단 소개"}),(0,F.tZ)("td",{className:"text-stone-500",children:"123"})]}),(0,F.BX)("tr",{children:[(0,F.tZ)("td",{children:"사용 기술"}),(0,F.tZ)("td",{className:"text-stone-500",children:"React, three.js"})]}),(0,F.BX)("tr",{children:[(0,F.tZ)("td",{children:"역할"}),(0,F.tZ)("td",{className:"text-stone-500",children:"1인 개발, 웹 디자인"})]})]}),(0,F.tZ)("button",{className:"block ".concat(l),children:"자세히 보기"})]}),(0,F.BX)("li",{children:[(0,F.tZ)("h3",{className:"mb-1 text-2xl font-bold text-stone-800",children:"Migration Stories"}),(0,F.tZ)("p",{className:"mb-3 text-sm font-light text-stone-400",children:"duration"}),(0,F.BX)("table",{className:"mb-3 table-auto text-stone-400",children:[(0,F.BX)("tr",{children:[(0,F.tZ)("td",{className:"pr-6",children:"간단 소개"}),(0,F.tZ)("td",{className:"text-stone-500",children:"123"})]}),(0,F.BX)("tr",{children:[(0,F.tZ)("td",{children:"사용 기술"}),(0,F.tZ)("td",{className:"text-stone-500",children:"React, three.js"})]}),(0,F.BX)("tr",{children:[(0,F.tZ)("td",{children:"역할"}),(0,F.tZ)("td",{className:"text-stone-500",children:"1인 개발, 웹 디자인"})]})]}),(0,F.tZ)("button",{className:"block ".concat(l),children:"자세히 보기"})]})]})]}),(0,F.BX)("section",{className:"mt-12",children:[(0,F.tZ)("h2",{className:"".concat(c),children:"오픈소스 기여"}),(0,F.tZ)("ul",{className:"mt-4",children:(0,F.BX)("li",{children:[(0,F.BX)("p",{className:"mb-4 text-stone-600",children:["리액트 기반의 pixel editor인 ",(0,F.tZ)("strong",{className:"".concat(a),children:"dotting"}),"의",(0,F.tZ)("wb",{})," contributor로 활동하고 있습니다"]}),(0,F.BX)("div",{className:"flex gap-3",children:[(0,F.tZ)("button",{className:"".concat(l),children:"Dotting Github"}),(0,F.tZ)("button",{className:"".concat(l),children:"기여한 PR 목록"})]})]})})]}),(0,F.BX)("section",{className:"mt-12",children:[(0,F.tZ)("h2",{className:"".concat(c),children:"학력 요약"}),(0,F.tZ)("ul",{className:"mt-4",children:(0,F.BX)("li",{children:[(0,F.tZ)("h3",{className:"mb-1 text-2xl font-bold text-stone-800",children:"서울대학교"}),(0,F.tZ)("p",{className:"mb-4 text-sm text-stone-600",children:"서양화과 & 시각디자인과 복수전공"}),(0,F.tZ)("div",{children:(0,F.BX)("p",{className:"text-sm text-stone-600",children:[(0,F.tZ)("strong",{className:"mr-1 font-bold",children:"총학점평균"})," 3.7/4.30"]})})]})})]})]})}}},function(u){u.O(0,[888,774,179],function(){return u(u.s=5557)}),_N_E=u.O()}]);