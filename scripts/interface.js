$(document).ready(function(){

    // Bind an onclick to touch dropdown menu
    if(elementExists('#toggle-navigation-mobile')) {
        $('#toggle-navigation-mobile').click(function(e) {
            $('.navigation-mobile').toggleClass('is-open');
            $('body').toggleClass('is-locked');
            
        });
    };


    // Toggle custom-select
    if(elementExists('li.product')) {
        $('a.add-to-cart').click(function(e) {
            $('div.cart-popout').toggleClass('is-open');
        });
    }

    // Toggle cart
    if(elementExists('li.cart')) {
        $('.cart-icon').click(function(e) {
            $('div.cart-popout').toggleClass('is-open');
        });
    }

    if(elementExists('#filter--primary')) {
        $('#filter--primary a').click(function(e) {
            $(this).parent().toggleClass('is-selected');
        });
    }

    // Toggle cart
    if(elementExists('div.search')) {
        $('a#search-toggle').click(function(e) {
            $('div.search').toggleClass('is-open');
        });
    }

    

    if(elementExists('#vertical-slider')) {
        $('#vertical-slider').lightSlider({
          gallery:true,
          item:1,
          vertical:true,
          verticalHeight:300,
          vThumbWidth:120,
          thumbItem:3,
          thumbMargin:10,
          slideMargin:0
        });  
    }

});

 // DROPDOWN MENU TEST
    var $menu = $("ul.navigation-primary--menu-list");

    // jQuery-menu-aim: <meaningful part of the example>
    // Hook up events to be fired on menu row activation.
    $menu.menuAim({

        // TIMEOUT VOORDAT MENU VERDWIJNT
        // OOK AAN DE RECHTERKANT KUNNEN STICKEN EN NIET ALLEEN LINKS (ZIE EXTRA MENU)


        activate: function(row) {
            var $nav = $('ul.navigation-primary--menu-list');
            var $row = $(row);
            var $submenu = $row.find('div.navigation-primary--children');
            var $arrow = $(row).find('span.popout-navigation-arrow');

            //$submenu.removeClass('is-hidden');
            $submenu.addClass('is-open');

            var width = $submenu.outerWidth();
            var rowWidth = $row.outerWidth();
            var navWidth = $nav.outerWidth();
            var left = $row.position().left;

            var rightSpace = navWidth - (left + (rowWidth / 2));
            // If we have too less space on the right
            if(rightSpace < width / 2) {
                var newLeft = navWidth - width - 1; // 1px margin


                pointerLeft = (width / 2) - (rightSpace - (width / 2));
                $arrow.css({
                    left: pointerLeft
                });
            } else {
                var newLeft = left - ((width / 2) - (rowWidth / 2));

                // If we have too less space on the left, move arrow
                if(newLeft < 0) {
                    // Move the arrow, if the submenu is not allowed to slide further
                    if(width == navWidth) {
                        pointerLeft = (width / 2) - (rightSpace - (width / 2));
                    } else {
                        pointerLeft = Math.abs(newLeft);
                    }

                    $arrow.css({
                        left: pointerLeft
                    });
                }
            }


            var newLeft = Math.max(newLeft, 0);

            // Show the submenu
            $submenu.css({
                left: newLeft,
            });

            // Keep the currently activated row's highlighted look
            // $row.find("a").addClass("maintainHover");

        },
        deactivate: function(row) {
            var $row = $(row);
            var $submenu = $row.find('div.navigation-primary--children');
            $submenu.removeClass('is-open');
            $submenu.css({
                left: 0,
            });



        },
        exitMenu: function(nav) {
            return true;
        },
        submenuDirection: 'below'
    });

// $(function() {

//     var $menu = $("ul.navigation-primary--menu-list");

//     $menu.menuAim({

//         activate: function() {
//             var $nav = $('div.navigation-primary');

//             $nav.addClass('navigation-primary-is-hovered');
//             $('body').toggleClass('navigation-primary-is-open');
//         },
//         deactivate: function() {
//             var $nav = $('div.navigation-primary');

            
//             $nav.removeClass('navigation-primary-is-hovered');
//             $('body').removeClass('navigation-primary-is-open');

//         },
//         exitMenu: function(nav) {
//             return true;
//         },
//     });
// });

// Check if element exists in dom
function elementExists(element) {
    if(jQuery(element).length) {
        return true;
    }
    return false;
}


/* v1.1.5 3/29/2015 http://sachinchoolur.github.io/lightGallery*/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('!3(e){"2r 4I";e.4E.L=3(t){6 i,a,n,l,s,o,d,r,c,u,h,m={1k:"7",3z:!0,2m:"4y",25:"4u",K:4o,8:"",2I:!0,1Q:!1,1O:!1,2P:4f,3e:!0,2u:!0,3n:!1,18:1,3s:!0,1J:M,1b:!1,3t:{3v:"41 3S"},11:!1,1R:!1,1h:!0,1i:!1,X:!0,3y:"3C",1g:1D,1B:5,2D:!1,3M:3P,3I:3G,2c:!0,3F:!0,3E:"3Q",2z:!1,1z:!0,2x:"4b",14:!1,Y:[],3i:3(){},3b:3(){},3a:3(){},36:3(){},35:3(){},34:3(){},2W:3(){}},f=e(4),v=4,p=M,b=0,g=!1,C=!1,y=2U 0!==2T.4g||"4j"2q 1d||"4k"2q 1d||2J.4l,w=!1,T=!1,x=!1,q=e.4n(!0,{},m,t),S={1w:3(){f.2l(3(){6 t=e(4);q.14?(p=q.Y,b=0,d=b,k.1w(b)):(p=M!==q.1J?e(q.1J):t.3m(),p.13("10",3(i){p=M!==q.1J?e(q.1J):t.3m(),i.1C(),i.1Y(),b=p.1b(4),d=b,k.1w(b)}))})}},k={1w:3(){g=!0,4.3h(),4.31(),4.2H(),4.2G(),4.11(),4.2F(),4.3A(),4.3r(),q.1b?(4.7(q.1b),4.X(q.1b)):(4.7(b),4.X(b)),q.3F&&4.2h(),q.2c&&4.2c(),W(3(){i.8("4N")},3G)},3h:3(){e("1n").17(\'<j R="B-2g" E="\'+q.8+\'"><j R="B-1f"><j R="B-2A"></j><a R="B-1K" E="1K"></a></j></j>\').8("1I-1f"),a=e("#B-2g"),i=e("#B-1f"),q.3s===!0&&i.8("4G-3o-2i"),n=i.D("#B-2A");6 t="";I(q.14)1F(6 s=0;s<q.Y.A;s++)t+=\'<j E="B-7"></j>\';22 p.2l(3(){t+=\'<j E="B-7"></j>\'});n.17(t),l=i.D(".B-7")},2H:3(){q.2I&&e("#B-2g").13("10",3(t){e(t.4F).4B(".B-7")&&v.21(!1)}),e("#B-1K").Q("10 1j",3(){v.21(!1)})},31:3(){6 t=3(){u=e(1d).19()};e(1d).Q("2k.L",t())},H:3(){6 e=3(){1F(6 e=["23","4A","4z","4x","4t","4q"],t=2T.4p,i=0;i<e.A;i++)I(e[i]2q t.2n)1t!0};1t q.3z&&e()?!0:!1},2c:3(){6 t=4;I(y){6 i={},a={};e("1n").13("2p.L",3(e){a=e.2b.2a[0],i.1s=e.2b.2a[0].1s,i.2L=e.2b.2a[0].2L}),e("1n").13("2M.L",3(e){6 t=e.2b;a=t.2a[0],e.1C()}),e("1n").13("1j.L",3(){6 e=a.1s-i.1s,n=q.3I;e>=n?(t.1G(),U(h)):-n>=e&&(t.1A(),U(h))})}},2h:3(){6 t,i,a=4;e(".1I-1f").Q("2Q",3(e){e.1Y(),e.1C(),t=e.1s}),e(".1I-1f").Q("2R",3(e){e.1Y(),e.1C(),i=e.1s,i-t>20?a.1G():t-i>20&&a.1A()})},2S:3(e,t){6 i=e.1E(/\\/\\/(?:1L\\.)?2V(?:\\.1X|1X\\.1p)\\/(?:2X\\?v=|2f\\/)?([a-2Z-30\\-]+)/i),a=e.1E(/\\/\\/(?:1L\\.)?2s.1p\\/([0-32-z\\-33]+)/i),n=!1;1t q.14?"2d"==q.Y[t].1a&&(n=!0):"2d"==p.9(t).12("1M-1a")&&(n=!0),i||a||n?!0:2U 0},3c:3(t,i){6 a=t.1E(/\\/\\/(?:1L\\.)?2V(?:\\.1X|1X\\.1p)\\/(?:2X\\?v=|2f\\/)?([a-2Z-30\\-]+)/i),n=t.1E(/\\/\\/(?:1L\\.)?2s.1p\\/([0-32-z\\-33]+)/i),l="",s="";I(a){I(s=q.1z===!0&&C===!1?"?3d=1&4d=0&3f=3g":"?3f=3g",q.2z){6 o=e.4c(q.2z);s=s+"&"+o}l=\'<1a E="Z" 19="3j" 3k="3l" V="//1L.4a.1p/2f/\'+a[1]+s+\'" 2v="0" 3p></1a>\'}22 n?(s=q.1z===!0&&C===!1?"3d=1&2w;":"",l=\'<1a E="Z" R="1m\'+i+\'" 19="3j" 3k="3l"  V="49://48.2s.1p/1m/\'+n[1]+"?"+s+"47=0&2w;44=0&2w;43="+q.3E+\'" 2v="0" 42 3U 3R></1a>\'):l=\'<1a E="Z" 2v="0" V="\'+t+\'"  3p="2d"></1a>\';1t\'<j E="1m-1r" 2n="3q-19:\'+q.2x+\' !3B;"><j E="1m">\'+l+"</j></j>"},1T:3(t){6 i=M;I(i=q.14?q.Y[t]["3D-1u"]:p.9(t).12("1M-3D-1u"),"1q"!=1v i&&M!==i){6 a=i.3H(0,1);i="."==a||"#"==a?e(i).1u():i,l.9(t).17(i)}},18:3(e){1F(6 t=e,i=0;i<=q.18&&!(i>=p.A-e);i++)4.1y(t+i,!0);1F(6 a=0;a<=q.18&&!(0>t-a);a++)4.1y(t-a,!0)},26:3(e,t){6 i=4;l.9(t).D(".Z").13("2i 3K",3(){l.9(t).8("2C")}),e===!1&&(l.9(t).J("2C")?i.18(t):l.9(t).D(".Z").13("2i 3K",3(){i.18(t)}))},1y:3(t,i){{6 a,n=4;p.A-t}q.18>p.A&&(q.18=p.A),q.2D===!0&&u<=q.3M&&(a=q.14?q.Y[t].2D:p.9(t).12("1M-3O-V")),a||(a=q.14?q.Y[t].V:p.9(t).12("1M-V"));6 s=0;i===!0&&(s=q.K+24),"1q"!=1v a&&""!==a?n.2S(a,t)?W(3(){l.9(t).J("1o")||(l.9(t).2B(n.3c(a,t)),n.1T(t),l.9(t).8("1o"),q.1O&&q.1z===!0&&U(h)),n.26(i,t)},s):W(3(){l.9(t).J("1o")||(l.9(t).2B(\'<1U E="Z" V="\'+a+\'" />\'),n.1T(t),l.9(t).8("1o")),n.26(i,t)},s):W(3(){I(!l.9(t).J("1o")){6 a=M;I(a=q.14?q.Y[t].1u:p.9(t).12("1M-1u"),"1q"!=1v a&&M!==a){6 s=a.3H(0,1);a="."==s||"#"==s?e(a).1u():a}"1q"!=1v a&&M!==a&&l.9(t).17(\'<j E="1m-1r" 2n="3q-19:\'+q.2x+\' !3B;"><j E="1m">\'+a+"</j></j>"),n.1T(t),l.9(t).8("1o 2C"),q.1O&&q.1z===!0&&U(h)}n.26(i,t)},s)},11:3(){I(q.11===!0){6 t=e("#B-2A > j").A;i.17("<j R=\'B-11\'><15 R=\'B-11-1Z\'></15> / <15 R=\'B-11-3T\'>"+t+"</15></j>")}},3A:3(){I(q.1h===!0&&p.A>1){6 t=4,a="";q.1i||(a=\'<15 E="1K 3x"><i E="3V-3W-3X-16" 3Y-3Z="2d"></i></15>\'),i.17(\'<j E="G-1r"><j E="G-3w">\'+a+\'</j><j E="G-1H"></j></j>\'),r=i.D(".G-1r"),s.3o(\'<a E="3u-G"></a>\'),s.45().8("46-G"),i.D(".3u-G").Q("10 1j",3(){i.8("O"),t.H()&&"7"===q.1k&&(l.9(b).2y().F("P-7").8("N-7"),l.9(b).2t().F("N-7").8("P-7"))}),i.D(".G-1r .1K").Q("10 1j",3(){i.F("O")});6 n,o=i.D(".G-3w"),d=i.D(".G-1H"),u="";I(q.14)1F(6 m=0;m<q.Y.A;m++)n=q.Y[m].G,u+=\'<j E="G"><1U V="\'+n+\'" /></j>\';22 p.2l(3(){n=q.1R===!1||"1q"==1v e(4).12(q.1R)||M===e(4).12(q.1R)?e(4).D("1U").12("V"):e(4).12(q.1R),u+=\'<j E="G"><1U V="\'+n+\'" /></j>\'});I(d.17(u),c=d.D(".G"),c.1l({"4e-2e":q.1B+"1N",19:q.1g+"1N"}),q.X===!0){6 f=p.A*(q.1g+q.1B);i.D(".G-1H").1l({19:f+"1N",4h:"4i","23-2O":q.K+"2K"})}c.Q("10 1j",3(){w=!0;6 i=e(4).1b();c.F("1W"),e(4).8("1W"),t.7(i),t.X(i),U(h)}),o.2B(\'<15 E="3x 4m">\'+q.3t.3v+" ("+c.A+")</15>"),q.1i&&i.8("O")}},X:3(e){I(q.X===!0){6 t,a=i.D(".G-1r").19();3N(q.3y){2o"1c":t=0;2E;2o"3C":t=a/2-q.1g/2;2E;2o"2e":t=a-q.1g}6 n=(q.1g+q.1B)*e-1-t,l=p.A*(q.1g+q.1B);n>l-a&&(n=l-a),0>n&&(n=0),4.H()?i.D(".G-1H").1l("4r","4s(-"+n+"1N, 3L, 3L)"):i.D(".G-1H").28({1c:-n+"1N"},q.K)}},2F:3(){6 e=4;q.2u===!0&&p.A>1&&(i.17(\'<j R="B-4v"><a R="B-N"></a><a R="B-P"></a></j>\'),s=i.D("#B-N"),o=i.D("#B-P"),s.Q("10",3(){e.1G(),U(h)}),o.Q("10",3(){e.1A(),U(h)}))},2G:3(){6 e=4;q.1O===!0&&(h=4w(3(){b=b+1<p.A?b:-1,b++,e.7(b)},q.2P))},3r:3(){6 t=4;e(1d).Q("3J.L",3(e){e.1C(),e.1Y(),37===e.1P&&(t.1G(),U(h)),38===e.1P&&q.1h===!0&&p.A>1?i.J("O")||(t.H()&&"7"===q.1k&&(l.9(b).2y().F("P-7").8("N-7"),l.9(b).2t().F("N-7").8("P-7")),i.8("O")):39===e.1P&&(t.1A(),U(h)),40===e.1P&&q.1h===!0&&p.A>1&&!q.1i?i.J("O")&&i.F("O"):q.3e===!0&&27===e.1P&&(!q.1i&&i.J("O")?i.F("O"):v.21(!1))})},1A:3(){6 e=4;b=l.1b(l.9(d)),b+1<p.A?(b++,e.7(b)):q.1Q?(b=0,e.7(b)):q.1h===!0&&p.A>1&&!q.1i?i.8("O"):(l.9(b).D(".Z").8("2e-1V"),W(3(){l.D(".Z").F("2e-1V")},24)),e.X(b),q.36.1e(4,v)},1G:3(){6 e=4;b=l.1b(l.9(d)),b>0?(b--,e.7(b)):q.1Q?(b=p.A-1,e.7(b)):q.1h===!0&&p.A>1&&!q.1i?i.8("O"):(l.9(b).D(".Z").8("1c-1V"),W(3(){l.D(".Z").F("1c-1V")},24)),e.X(b),q.35.1e(4,v)},7:3(t){6 i=4;I(C?(W(3(){i.1y(t,!1)},q.K+24),n.J("13")||n.8("13"),4.H()&&""!==q.K&&(n.J("K")||n.8("K"),x===!1&&(n.1l("23-2O",q.K+"2K"),x=!0)),4.H()&&""!==q.2m&&(n.J("2j")||n.8("2j"),T===!1&&(n.1l("23-2j-3",q.2m),T=!0)),q.3b.1e(4,v)):i.1y(t,!1),"7"===q.1k){6 a=M!==2J.4C.1E(/4D/i);!4.H()||n.J("7")||a?4.H()&&!n.J("2r-1c")&&a&&n.8("2r-1c"):n.8("7"),4.H()||C?!4.H()&&C&&n.28({1c:1D*-t+"%"},q.K,q.25):n.1l({1c:1D*-t+"%"})}22"29"===q.1k&&(4.H()&&!n.J("29-m")?n.8("29-m"):4.H()||n.J("28")||n.8("28"),4.H()||C?!4.H()&&C&&(l.9(d).2N(q.K,q.25),l.9(t).2Y(q.K,q.25)):(l.2N(1D),l.9(t).2Y(1D)));I(t+1>=p.A&&q.1O&&q.1Q===!1&&U(h),l.9(d).F("1Z"),l.9(t).8("1Z"),4.H()&&"7"===q.1k&&(w===!1?(e(".N-7").F("N-7"),e(".P-7").F("P-7"),l.9(t-1).8("N-7"),l.9(t+1).8("P-7")):(l.9(t).2y().F("P-7").8("N-7"),l.9(t).2t().F("N-7").8("P-7"))),q.1h===!0&&p.A>1&&(c.F("1W"),c.9(t).8("1W")),q.2u&&q.3n&&q.1Q===!1&&p.A>1){6 r=p.A;r=4H(r)-1,0===t?(s.8("1x"),o.F("1x")):t===r?(s.F("1x"),o.8("1x")):s.4J(o).F("1x")}d=t,C===!1?q.3i.1e(4,v):q.3a.1e(4,v),W(3(){C=!0}),w=!1,q.11&&e("#B-11-1Z").4K(t+1),e(1d).Q("2k.L",3(){W(3(){i.X(t)},4L)})}};1t v.4M=3(){1t g===!0?!0:!1},v.21=3(t){g=!1,t="1q"!=1v t?!1:!0,q.34.1e(4,v);6 n=C;C=!1,T=!1,x=!1,w=!1,U(h),t===!0&&p.1S("10 2h 2p"),e(".1I-1f").1S("2Q 2R"),e("1n").1S("2p.L 2M.L 1j.L"),e(1d).1S("2k.L 3J.L"),n===!0&&(i.8("29-m"),W(3(){a.4O(),e("1n").F("1I-1f")},4P)),q.2W.1e(4,v)},S.1w(),4}}(4Q);',62,301,'|||function|this||var|slide|addClass|eq||||||||||div|||||||||||||||||length|lg||find|class|removeClass|thumb|doCss|if|hasClass|speed|lightGallery|null|prev|open|next|bind|id|||clearInterval|src|setTimeout|animateThumb|dynamicEl|object|click|counter|attr|on|dynamic|span||append|preload|width|iframe|index|left|window|call|gallery|thumbWidth|thumbnail|showThumbByDefault|touchend|mode|css|video|body|loaded|com|undefined|cont|pageX|return|html|typeof|init|disabled|loadContent|videoAutoplay|nextSlide|thumbMargin|preventDefault|100|match|for|prevSlide|inner|light|selector|close|www|data|px|auto|keyCode|loop|exThumbImage|off|addHtml|img|end|active|be|stopPropagation|current||destroy|else|transition|400|easing|loadObj||animate|fade|targetTouches|originalEvent|enableTouch|true|right|embed|outer|touch|load|timing|resize|each|cssEasing|style|case|touchstart|in|use|vimeo|nextAll|controls|frameborder|amp|videoMaxWidth|prevAll|youtubePlayerParams|slider|prepend|complete|mobileSrc|break|slideTo|autoStart|closeSlide|closable|navigator|ms|pageY|touchmove|fadeOut|duration|pause|mousedown|mouseup|isVideo|document|void|youtu|onCloseAfter|watch|fadeIn|z0|9_|getWidth|9a|_|onBeforeClose|onSlidePrev|onSlideNext||||onSlideAfter|onSlideBefore|loadVideo|autoplay|escKey|wmode|opaque|structure|onOpen|560|height|315|children|hideControlOnEnd|after|allowfullscreen|max|keyPress|showAfterLoad|lang|cl|allPhotos|info|ib|currentPagerPosition|useCSS|buildThumbnail|important|middle|sub|vimeoColor|enableDrag|50|substring|swipeThreshold|keyup|error|0px|mobileSrcMaxWidth|switch|responsive|640|CCCCCC|allowFullScreen|photos|all|mozallowfullscreen|bUi|iCn|rMv|aria|hidden||All|webkitAllowFullScreen|color|portrait|parent|has|byline|player|http|youtube|855px|param|rel|margin|4e3|createTouch|position|relative|ontouchstart|onmsgesturechange|msMaxTouchPoints|count|extend|600|documentElement|KhtmlTransition|transform|translate3d|msTransition|linear|action|setInterval|OTransition|ease|WebkitTransition|MozTransition|is|userAgent|iPad|fn|target|show|parseInt|strict|add|text|200|isActive|opacity|remove|500|jQuery'.split('|'),0,{}))

/* v1.1.1 - http://sachinchoolur.github.io/lightslider */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('!4(e){"42 41";6 i={1a:3,N:!1,K:1,B:10,D:"",q:"9",2u:!0,1x:"3Z",29:"3X",L:27,1C:!1,P:!1,1B:!0,1Q:3W,1J:!1,1S:!0,2J:"",35:"",1u:!1,1Y:!1,E:!1,2g:3T,24:1y,2l:10,H:!0,R:!1,25:5,1n:5,2W:"30",1N:!0,1U:!0,1X:!0,1r:40,1h:[],2y:4(){},2D:4(){},2G:4(){},2H:4(){},2a:4(){},2i:4(){}};e.3O.34=4(t){z(0===j.k)Q j;z(j.k>1)Q j.3L(4(){e(j).34(t)}),j;6 n={},l=e.3K(!0,{},i,t),s={},a=j;n.$3J=j,"19"===l.q&&(l.E=!1);6 o=a.1l(),r=e(1p).18(),d=1o,c=1o,f=0,h=0,u=!1,g=0,v="",p=0,m=l.E===!0?"1q":"18",M=l.E===!0?"1A-32":"1A-1b",b=0,T=0,C=0,S=0,x=1o,w="3I"1V 26.2A,y={};Q y.2c=4(){z(r=e(1p).18(),l.1h.k){6 i;z(l.N===!1&&(i=l.1a),r<l.1h[0].22)U(6 t=0;t<l.1h.k;t++)r<l.1h[t].22&&(d=l.1h[t].22,c=l.1h[t]);z("2R"!=2S c&&1o!==c)U(6 n 1V c.2h)c.2h.2X(n)&&(("2R"==2S s[n]||1o===s[n])&&(s[n]=l[n]),l[n]=c.2h[n]);z(!e.3H(s)&&r>l.1h[0].22)U(6 a 1V s)s.2X(a)&&(l[a]=s[a]);l.N===!1&&b>0&&C>0&&i!==l.1a&&(p=1I.3E(b/((C+l.B)*l.K)))}},y.20=4(){l.N===!1&&(C=(g-(l.1a*l.B-l.B))/l.1a)},y.1z=4(e){6 i=e===!0?v.8(".7-9").k:o.k;z(l.N===!1)h=i*(C+l.B);15{h=0;U(6 t=0;i>t;t++)h+=1i(o.J(t).18())+l.B}Q h%1!==0&&(h+=1),h},n={Y:4(){6 e=4(){U(6 e=["17","3D","3C","3B","3A","3x"],i=26.2A,t=0;t<e.k;t++)z(e[t]1V i.38)Q!0};Q l.2u&&e()?!0:!1},1J:4(){l.1J&&e(26).W("3w.3v",4(i){e(":3u").3t("3s, 3r")||(i.V?i.V():i.1D=!1,37===i.2V?(a.1F(),1e(x)):39===i.2V&&(a.1j(),1e(x)))})},1S:4(){l.1S&&(a.31(\'<1t 1c="7-14"><a 1c="7-2j">\'+l.2J+\'</a><a 1c="7-3a">\'+l.35+"</a></1t>"),l.N?y.1z(!1)<g&&v.8(".7-14").1K():f<=l.1a&&v.8(".7-14").1K(),v.8(".7-14 a").W("1L",4(i){Q i.V?i.V():i.1D=!1,"7-2j"===e(j).1M("1c")?a.1F():a.1j(),1e(x),!1}))},2v:4(){6 e=j;"19"===l.q&&(l.N=!1,l.1B=!1),l.1C&&(l.1B=!1),l.N&&(l.K=1,l.1a=1),l.P&&(l.K=1,l.1X=!1),l.2y.1g(j,a),y.2c(),a.D("1O-1P").3q("<1t 1c=\'7-9-3p "+l.D+"\'><1t 1c=\'7-9-2B\'></1t></1t>"),v=a.X(".7-9-2B"),l.1u===!0&&v.X().D("7-1u"),l.E?(v.X().D("E"),g=l.2g,v.A("1q",g+"G")):g=a.2F(),o.D("7-9"),l.P===!0&&"9"===l.q&&(y.20(),y.F=4(){z(y.1z(!0)>g){U(6 i=0,t=0,n=0;n<o.k&&(i+=1i(a.8(".7-9").J(n).18())+l.B,t++,!(i>=g+l.B));n++);6 s=l.N===!0?t:l.1a;z(s<a.8(".F.I").k)U(6 r=0;r<a.8(".F.I").k-s;r++)o.J(r).2b();z(s<a.8(".F.1b").k)U(6 d=o.k-1;d>o.k-1-a.8(".F.1b").k;d--)p--,o.J(d).2b();U(6 c=a.8(".F.1b").k;s>c;c++)a.8(".7-9").J(c).F().13("7-9").D("F 1b").3o(a),p++;U(6 f=a.8(".7-9").k-a.8(".F.I").k;f>a.8(".7-9").k-s;f--)a.8(".7-9").J(f-1).F().13("7-9").D("F I").3n(a);o=a.1l()}15 o.3l("F")&&(a.8(".F").2b(),e.1k(a,0))},y.F()),y.2e=4(){f=o.k,l.1u===!0&&l.E===!1&&(M="1A-I"),l.N===!1&&o.A(m,C+"G"),o.A(M,l.B+"G"),h=y.1z(!1),a.A(m,h+"G"),l.P===!0&&"9"===l.q&&u===!1&&(p=a.8(".F.I").k)},y.2f=4(){o=a.1l(),f=o.k},j.Y()&&v.D("3k-A"),y.2f(),"9"===l.q?(y.20(),y.2e(),l.P===!0&&(b=e.1w(),j.1k(a,b)),l.E===!1&&j.1s(a,!1,!0)):(j.1s(a,!0,!0),a.D("7-19"),j.Y()||o.3j(".O").A("3h","3g")),l.P===!0&&"9"===l.q?o.J(p).D("O"):o.1Z().D("O")},H:4(){6 e=j;z(y.2m=4(){S=(g-(l.2l*l.1n-l.1n))/l.2l;6 i=v.8(".7-9"),t=v.8(".7-9").k,n=0,s="",o=0;U(n=0;t>n;n++){"9"===l.q&&(l.N?o+=(1i(i.J(n).18())+l.B)*l.K:o=n*(C+l.B)*l.K);6 r=i.J(n*l.K).1M("3f-3e");z(s+=l.R===!0?\'<16 38="18:1y%;\'+m+":"+S+"G;"+M+":"+l.1n+\'G"><a 2p="#"><33 3d="\'+r+\'" /></a></16>\':\'<16><a 2p="#">\'+(n+1)+"</a></16>","9"===l.q&&o>=h-g-l.B){n+=1;6 d=2;l.N&&(s+=\'<16><a 2p="#">\'+(n+1)+"</a></16>",d=1),d>n?(s=1o,v.X().D("36-H")):v.X().13("36-H");2q}}6 c=v.X();z(c.8(".7-H").3c(s),!l.E&&l.R){6 f=v.X().8(".7-R");12(4(){e.1s(f,!1,!1)})}l.R===!0&&(l.E===!0&&c.8(".7-H").A("18",l.24+"G"),T=n*(l.1n+S)+.5,c.8(".7-H").A({3F:T+"G","17-1m":l.L+"1v"}),l.E===!0&&v.X().A("2Z-1b",l.24+l.25+"G"),c.8(".7-H").A(m,T+"G"));6 u=c.8(".7-H").8("16");u.1Z().D("O"),u.W("1L",4(){Q l.P===!0&&"9"===l.q?p+=u.2k(j)-c.8(".7-H").8("16.O").2k():p=u.2k(j),a.q(!1),l.R===!0&&e.1d(),1e(x),!1})},l.H){6 i="7-3i";l.R&&(i="7-R"),v.31(\'<2T 1c="7-H \'+i+\'"></2T>\');6 t=l.E?"1A-I":"1A-2Q";v.X().8(".7-H").A(t,l.25+"G"),y.2m()}12(4(){y.1T()},0)},1s:4(e,i,t){6 n=1o;n=t?e.1l(".7-9 ").1Z():e.1l().1Z();6 l=4(){z(0===p){6 t=n.1q(),l=0,s=t;i&&(t=0,l=1y*s/g),e.A({1q:t+"G","2Z-32":l+"%"})}};l(),n.8("33").3m(4(){12(4(){l()},1y)})},O:4(e,i){j.Y()&&"19"===l.q&&v.D("W");6 t=0;z(p*l.K<f){e.13("O"),j.Y()||"19"!==l.q||i!==!1||e.2L(l.L),t=i===!0?p:p*l.K;6 n,s;i===!0&&(n=e.k,s=n-1,t+1>=n&&(t=s)),l.P===!0&&"9"===l.q&&(t=i===!0?p-a.8(".F.I").k:p*l.K,i===!0&&(n=e.k,s=n-1,t+1==n?t=s:t+1>n&&(t=0))),j.Y()||"19"!==l.q||i!==!1||e.J(t).2K(l.L),e.J(t).D("O")}15 e.13("O"),e.J(e.k-1).D("O"),j.Y()||"19"!==l.q||i!==!1||(e.2L(l.L),e.J(t).2K(l.L))},1k:4(e,i){l.1u===!0&&(i=-i),j.Y()?e.A(l.E===!0?{1R:"1E(1f, "+-i+"G, 1f)","-2U-1R":"1E(1f, "+-i+"G, 1f)"}:{1R:"1E("+-i+"G, 1f, 1f)","-2U-1R":"1E("+-i+"G, 1f, 1f)"}):l.E===!0?e.A("2P","2O").2N({2Q:-i+"G"},l.L,l.29):e.A("2P","2O").2N({I:-i+"G"},l.L,l.29);6 t=v.X().8(".7-H").8("16");j.O(t,!0)},19:4(){j.O(o,!1);6 e=v.X().8(".7-H").8("16");j.O(e,!0)},9:4(){6 e=j;y.2M=4(){h>g&&(b=e.1w(),e.O(o,!1),b>h-g-l.B?b=h-g-l.B:0>b&&(b=0),e.1k(a,b),l.P===!0&&"9"===l.q&&(p>=f-a.8(".F.I").k/l.K&&e.23(a.8(".F.I").k),0===p&&e.23(v.8(".7-9").k)))},y.2M()},23:4(e){6 i=j;v.8(".7-14 a").D("2I"),12(4(){p=e,v.A("17-1m","2E"),b=i.1w(),i.O(o,!1),n.1k(a,b),12(4(){v.A("17-1m",l.L+"1v"),v.8(".7-14 a").13("2I")},3y)},l.L+1y)},1w:4(){6 e=0;z(l.N===!1)e=p*(C+l.B)*l.K;15{e=0;U(6 i=0;p>i;i++)e+=1i(o.J(i).18())+l.B}Q e},1d:4(){6 e;3z(l.2W){2n"I":e=0;2q;2n"30":e=g/2-S/2;2q;2n"1b":e=g-S}6 i=p-a.8(".F.I").k,t=v.X().8(".7-H");"9"===l.q&&l.P===!0&&(i>=t.1l().k?i=0:0>i&&(i=t.1l().k));6 n=i*(S+l.1n)-e;n+g>T&&(n=T-g-l.1n),0>n&&(n=0),j.1k(t,n)},1C:4(){l.1C&&(x=2C(4(){a.1j()},l.1Q))},1H:4(e,i){z(1e(x),v.A("17-1m","2E"),"9"===l.q){6 t=e-i,n=b-t;z(n>=h-g-l.B)z(l.1X===!1)n=h-g-l.B;15{6 s=h-g-l.B;n=s+(n-s)/5}15 0>n&&(l.1X===!1?n=0:n/=5);j.1k(a,n)}},2r:4(e){z(v.A("17-1m",l.L+"1v"),1e(x),"9"===l.q){6 i=!1,t=!0;b-=e,b>h-g-l.B?(b=h-g-l.B,l.N===!1&&(i=!0)):0>b&&(b=0);6 n=4(e){6 t=0;z(i||e&&(t=1),l.N)U(6 n=0,s=0;s<o.k&&(n+=1i(o.J(s).18())+l.B,p=s+t,!(n>=b));s++);15{6 a=b/((C+l.B)*l.K);p=1i(a)+t,b>=h-g-l.B&&a%1!==0&&p++}};e>=l.1r?(n(!1),t=!1):e<=-l.1r&&(n(!0),t=!1),a.q(t),j.1d()}15 e>=l.1r?a.1F():e<=-l.1r&&a.1j()},1U:4(){6 i=j;z(!w){v.8(".1O-1P").D("2o");6 t=0,n=0,s=!1;v.W("3b",4(i){Q g>h&&0!==h?!1:3G("7-2j"!==e(i.2Y).1M("1c")&&"7-3a"!==e(i.2Y).1M("1c")&&(t=l.E===!0?i.Z:i.11,s=!0,i.V?i.V():i.1D=!1,v.2z+=1,v.2z-=1,v.8(".1O-1P").13("2o").D("2w")))}),e(1p).W("3M",4(e){s&&(n=l.E===!0?e.Z:e.11,i.1H(n,t))}),e(1p).W("3N",4(a){z(s){v.8(".1O-1P").13("2w").D("2o"),s=!1,n=l.E===!0?a.Z:a.11;6 o=n-t;1I.2d(o)>=l.1r&&e(1p).W("1L.7",4(i){i.V?i.V():i.1D=!1,i.3P(),i.3Q(),e(1p).3R("1L.7")}),i.2r(o)}})}},1N:4(){6 e=j;z(w){6 i={},t={};v.W("3S",4(e){t=e.21.1W[0],i.11=e.21.1W[0].11,i.Z=e.21.1W[0].Z}),v.W("3U",4(n){z(g>h&&0!==h)Q!1;6 s=n.21;t=s.1W[0];6 a=1I.2d(t.11-i.11),o=1I.2d(t.Z-i.Z);l.E===!0?(3*o>a&&n.V(),e.1H(t.Z,i.Z)):(3*a>o&&n.V(),e.1H(t.11,i.11))}),v.W("3V",4(){z(g>h&&0!==h)Q!1;6 n;n=l.E===!0?t.Z-i.Z:t.11-i.11,e.2r(n)})}},2t:4(){6 e=j;e.2v(),e.1C(),j.Y()&&(l.1N===!0&&e.1N(),l.1U===!0&&e.1U()),e.H(),e.1S(),e.1J()}},n.2t(),y.1T=4(){y.2c(),l.E===!0?(g=l.1a>1?l.2g:o.28(),v.A("1q",g+"G")):g=v.2F(),l.P===!0&&"9"===l.q&&y.F(),y.2f(),"9"===l.q&&a.13("7-9"),"9"===l.q&&(y.20(),y.2e()),12(4(){"9"===l.q&&a.D("7-9")},3Y),l.H&&y.2m(),l.1Y===!0&&l.E===!1&&a.A("1q",o.J(p).28(!0)),l.1Y===!1&&("9"===l.q?l.E===!1&&n.1s(a,!1,!0):n.1s(a,!0,!0)),l.R===!0&&n.1d(),"9"===l.q&&n.9(),l.N===!1?o.k<=l.1a?v.8(".7-14").1K():v.8(".7-14").2s():y.1z(!1)<g&&0!==h?v.8(".7-14").1K():v.8(".7-14").2s()},a.1F=4(){z(p>0)l.2i.1g(j,a,p),p--,a.q(!1),l.R===!0&&n.1d();15 z(l.P===!0){z(l.2i.1g(j,a,p),"19"===l.q){6 e=f-1;p=1i(e/l.K)}a.q(!1),l.R===!0&&n.1d()}15 l.1B===!0&&(a.D("I-1G"),12(4(){a.13("I-1G")},27))},a.1j=4(){6 e=!0;z("9"===l.q){6 i=n.1w();e=i<h-g-l.B}p*l.K<f-l.K&&e?(l.2a.1g(j,a,p),p++,a.q(!1),l.R===!0&&n.1d()):l.P===!0?(l.2a.1g(j,a,p),p=0,a.q(!1),l.R===!0&&n.1d()):l.1B===!0&&(a.D("1b-1G"),12(4(){a.13("1b-1G")},27))},a.q=4(e){l.1Y===!0&&l.E===!1&&a.A("1q",o.J(p).28(!0)),u===!1&&("9"===l.q?n.Y()&&(a.D("7-9"),""!==l.L&&v.A("17-1m",l.L+"1v"),""!==l.1x&&v.A("17-2x-4",l.1x)):n.Y()&&(""!==l.L&&a.A("17-1m",l.L+"1v"),""!==l.1x&&a.A("17-2x-4",l.1x))),e||l.2G.1g(j,a,p),"9"===l.q?n.9():n.19(),12(4(){e||l.2H.1g(j,a,p)},l.L),u=!0},a.43=4(){1e(x),a.1j(),x=2C(4(){a.1j()},l.1Q)},a.1Q=4(){1e(x)},a.44=4(){y.1T()},a.45=4(){6 e=p;z(l.P){6 i=v.8(".7-9").k,t=a.8(".F.I").k;e=t-1>=p?i+(p-t):p>=i+t?p-i-t:p-t}Q e+1},a.46=4(){Q v.8(".7-9").k},a.47=4(e){p=l.P?e+a.8(".F.I").k-1:e,a.q(!1),l.R===!0&&n.1d()},12(4(){l.2D.1g(j,a)},10),e(1p).W("48 49",4(e){12(4(){e.V?e.V():e.1D=!1,y.1T()},4a)}),j}}(4b);',62,260,'||||function||var|ls|find|slide||||||||||this|length||||||mode|||||||||if|css|slideMargin||addClass|vertical|clone|px|pager|left|eq|slideMove|speed||autoWidth|active|loop|return|gallery|||for|preventDefault|on|parent|doCss|pageY||pageX|setTimeout|removeClass|action|else|li|transition|width|fade|item|right|class|slideThumb|clearInterval|0px|call|responsive|parseInt|goToNextSlide|move|children|duration|thumbMargin|null|window|height|swipeThreshold|setHeight|div|rtl|ms|slideValue|cssEasing|100|calWidth|margin|slideEndAnimatoin|auto|returnValue|translate3d|goToPrevSlide|end|touchMove|Math|keyPress|hide|click|attr|enableTouch|light|slider|pause|transform|controls|init|enableDrag|in|targetTouches|freeMove|adaptiveHeight|first|calSW|originalEvent|breakpoint|resetSlide|vThumbWidth|galleryMargin|document|400|outerHeight|easing|onBeforeNextSlide|remove|chbreakpoint|abs|sSW|calL|verticalHeight|settings|onBeforePrevSlide|prev|index|thumbItem|createPager|case|lsGrab|href|break|touchEnd|show|build|useCSS|initialStyle|lsGrabbing|timing|onBeforeStart|scrollLeft|documentElement|wrapper|setInterval|onSliderLoad|0ms|outerWidth|onBeforeSlide|onAfterSlide|disabled|prevHtml|fadeIn|fadeOut|calSlide|animate|relative|position|top|undefined|typeof|ul|webkit|keyCode|currentPagerPosition|hasOwnProperty|target|padding|middle|after|bottom|img|lightSlider|nextHtml|no||style||next|mousedown|html|src|thumb|data|none|display|pg|not|using|hasClass|load|prependTo|appendTo|outer|wrap|textarea|input|is|focus|lightslider|keyup|KhtmlTransition|50|switch|msTransition|OTransition|WebkitTransition|MozTransition|round|property|void|isEmptyObject|ontouchstart|el|extend|each|mousemove|mouseup|fn|stopImmediatePropagation|stopPropagation|off|touchstart|500|touchmove|touchend|2e3|linear|1e3|ease||strict|use|play|refresh|getCurrentSlideCount|getTotalSlideCount|goToSlide|resize|orientationchange|200|jQuery'.split('|'),0,{}))


