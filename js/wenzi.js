var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        // var a = new Array("鉂ゅ瘜寮衡潳","鉂ゆ皯涓烩潳","鉂ゆ枃鏄庘潳","鉂ゅ拰璋愨潳","鉂よ嚜鐢扁潳","鉂ゅ钩绛夆潳","鉂ゅ叕姝ｂ潳","鉂ゆ硶娌烩潳","鉂ょ埍鍥解潳","鉂ゆ暚涓氣潳","鉂よ瘹淇♀潳","鉂ゅ弸鍠勨潳");
        var a = new Array("瀵屽己","姘戜富","鏂囨槑","鍜岃皭","鑷敱","骞崇瓑","鍏","娉曟不","鐖卞浗","鏁笟","璇氫俊","鍙嬪杽");
        var $i = $("<span></span>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
});