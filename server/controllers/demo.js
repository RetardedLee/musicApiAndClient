(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, h9c = c9h("nej.v"), k9b = c9h("nej.u"), I0x = c9h("nej.ut"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), n9e = c9h("nm.l"), b9i, K0x;
    q9h.fp2x({
        "mv-get": {
            url: "/api/v1/mv/detail",
            format: function(Q0x, e9f) {
                Q0x.data.subed = Q0x.subed;
                Q0x.data.pcLoadingPic = Q0x.pcLoadingPic;
                Q0x.data.pcBufferPic = Q0x.pcBufferPic;
                if (Q0x.mp) {
                    Q0x.data.privilege = Q0x.mp
                }
                return Q0x.data
            }
        },
        "mv_sub-add": {
            url: "/api/mv/sub",
            onload: "onsub",
            onerror: "onsuberror"
        },
        "mv_sub-del": {
            url: "/api/mv/unsub",
            onload: "onunsub",
            onerror: "onunsuberror"
        },
        "mv_sub-list": {
            url: "/api/cloudvideo/allvideo/sublist",
            format: function(Q0x, e9f) {
                var j9a = Q0x.data || [];
                j9a = l9c.bQJ0x(j9a, l9c.bQw9n);
                var cB0x = Math.max(e9f.data.realTotal, j9a.length);
                if (Q0x.hasMore) {
                    this.Jc1x(j9a, e9f.data.limit);
                    cB0x = Math.max(cB0x, e9f.data.limit + e9f.data.offset + 1)
                }
                return {
                    total: cB0x,
                    list: j9a
                }
            }
        },
        "mv-update-playcount": {
            type: "GET",
            url: "/api/song/mv/play",
            format: function(Q0x, e9f) {
                var p9g = this.eO2x(e9f.data.id);
                if (!!p9g)
                    p9g.playCount++
            },
            onerror: function(Q0x) {
                Q0x.stopped = !0
            },
            finaly: function(d9g, e9f) {
                h9c.z9q(q9h.Mf2x, "itemchange", {
                    attr: "playCount",
                    data: this.eO2x(e9f.data.id)
                })
            }
        },
        mv_like: {
            url: "/api/resource/like",
            onload: "onlike",
            onerror: "onlikeerror"
        },
        mv_unlike: {
            url: "/api/resource/unlike",
            onload: "onunlike",
            onerror: "onunlikeerror"
        }
    });
    q9h.Mf2x = NEJ.C();
    b9i = q9h.Mf2x.N0x(q9h.hE2x);
    b9i.PI4M = function(kr3x) {
        this.cm0x(q9h.B9s("mv_sub-add"), {
            data: {
                mvId: kr3x
            }
        })
    }
    ;
    b9i.PG4K = function(kr3x) {
        var bew9n = [];
        if (typeof kr3x == "string") {
            bew9n.push(kr3x)
        } else if (kr3x instanceof Array) {
            bew9n = bew9n.concat(kr3x)
        }
        this.cm0x(q9h.B9s("mv_sub-del"), {
            data: {
                mvIds: JSON.stringify(bew9n)
            }
        })
    }
    ;
    b9i.pj5o = function(D0x) {
        this.cm0x("mv_like", {
            data: {
                threadId: "R_MV_5_" + D0x
            }
        })
    }
    ;
    b9i.wl7e = function(D0x) {
        this.cm0x("mv_unlike", {
            data: {
                threadId: "R_MV_5_" + D0x
            }
        })
    }
    ;
    b9i.cvu7n = function(D0x) {
        this.cm0x("mv-update-playcount", {
            data: {
                id: D0x
            }
        })
    }
    ;
    b9i.Jc1x = function(j9a, gk2x) {
        for (var i = j9a.length; i < gk2x; i++)
            j9a.push({
                blank: true
            });
        return j9a
    }
    ;
    I0x.fK2x.A9r({
        element: q9h.Mf2x,
        event: ["itemchange", "listchange", "searchload", "exclusivecount"]
    })
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, h9c = c9h("nej.v"), k9b = c9h("nej.u"), I0x = c9h("nej.ut"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), n9e = c9h("nm.l"), b9i, K0x;
    q9h.fp2x({
        "video_sub-add": {
            url: "/api/cloudvideo/video/sub",
            onload: "onsub",
            onerror: "onsuberror"
        },
        "video_sub-del": {
            url: "/api/cloudvideo/video/unsub",
            onload: "onunsub",
            onerror: "onunsuberror"
        },
        video_like: {
            url: "/api/resource/like",
            onload: "onlike",
            onerror: "onlikeerror"
        },
        video_unlike: {
            url: "/api/resource/unlike",
            onload: "onunlike",
            onerror: "onunlikeerror"
        }
    });
    q9h.bHo7h = NEJ.C();
    b9i = q9h.bHo7h.N0x(q9h.hE2x);
    b9i.PI4M = function(D0x) {
        this.cm0x("video_sub-add", {
            data: {
                id: D0x
            }
        })
    }
    ;
    b9i.PG4K = function(D0x) {
        this.cm0x("video_sub-del", {
            data: {
                id: D0x
            }
        })
    }
    ;
    b9i.pj5o = function(D0x) {
        this.cm0x("video_like", {
            data: {
                threadId: "R_VI_62_" + D0x
            }
        })
    }
    ;
    b9i.wl7e = function(D0x) {
        this.cm0x("video_unlike", {
            data: {
                threadId: "R_VI_62_" + D0x
            }
        })
    }
}
)();
(function() {
    var c9h = NEJ.P, I0x = c9h("nej.ut"), a8i = c9h("nej.e"), q9h = c9h("nm.d"), x9o = c9h("nm.w"), n9e = c9h("nm.l"), b9i, K0x, cF1x;
    x9o.beA0x = NEJ.C();
    b9i = x9o.beA0x.N0x(I0x.cH1x);
    K0x = x9o.beA0x.cr0x;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.S0x = (e9f.type == 1 ? q9h.bHo7h : q9h.Mf2x).A9r({
            onsub: this.AF9w.f9e(this),
            onunsub: this.btI3x.f9e(this),
            onsuberror: this.cvC7v.f9e(this),
            onunsuberror: this.cvD7w.f9e(this),
            onlike: this.AG9x.f9e(this),
            onlikeerror: this.cvO7H.f9e(this),
            onunlike: this.btE3x.f9e(this),
            onunlikeerror: this.cvU7N.f9e(this)
        })
    }
    ;
    b9i.bB0x = function() {
        this.bG0x();
        this.S0x.T0x()
    }
    ;
    b9i.AF9w = function(bo0x) {
        n9e.Z0x.J0x({
            tip: "收藏成功"
        });
        this.z9q("subsuccess", bo0x)
    }
    ;
    b9i.cvC7v = function(bo0x) {
        n9e.Z0x.J0x({
            tip: "收藏失败，请重试",
            type: 2
        });
        this.z9q("suberror", bo0x)
    }
    ;
    b9i.btI3x = function(bo0x) {
        n9e.Z0x.J0x({
            tip: "取消收藏成功"
        });
        this.z9q("unsubsuccess", bo0x)
    }
    ;
    b9i.cvD7w = function(bo0x) {
        n9e.Z0x.J0x({
            tip: "取消收藏失败，请重试",
            type: 2
        });
        this.z9q("unsuberror", bo0x)
    }
    ;
    b9i.AG9x = function(bo0x) {
        n9e.Z0x.J0x({
            tip: "赞成功"
        });
        this.z9q("likesuccess", bo0x)
    }
    ;
    b9i.cvO7H = function(bo0x) {
        n9e.Z0x.J0x({
            tip: "赞失败，请重试",
            type: 2
        });
        this.z9q("likeerror", bo0x)
    }
    ;
    b9i.btE3x = function(bo0x) {
        n9e.Z0x.J0x({
            tip: "取消赞成功"
        });
        this.z9q("unlikesuccess", bo0x)
    }
    ;
    b9i.cvU7N = function(bo0x) {
        n9e.Z0x.J0x({
            tip: "取消赞失败，请重试",
            type: 2
        });
        this.z9q("unlikeerror", bo0x)
    }
    ;
    b9i.PI4M = function(kr3x) {
        if (!GUser || !GUser.userId)
            return top.login();
        this.S0x.PI4M(kr3x)
    }
    ;
    b9i.PG4K = function(kr3x) {
        if (!GUser || !GUser.userId)
            return top.login();
        this.S0x.PG4K(kr3x)
    }
    ;
    b9i.pj5o = function(kr3x) {
        if (!GUser || !GUser.userId)
            return top.login();
        this.S0x.pj5o(kr3x)
    }
    ;
    b9i.wl7e = function(kr3x) {
        if (!GUser || !GUser.userId)
            return top.login();
        this.S0x.wl7e(kr3x)
    }
}
)();
(function() {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), cd0x = c9h("nej.ut"), x9o = c9h("nm.w"), b9i;
    var czK8C = typeof GEnvType == "undefined" || GEnvType == "online" ? location.protocol + "//iad.g.163.com" : location.protocol + "//t.rec.g.163.com/accuad";
    x9o.Hx1x = NEJ.C();
    b9i = x9o.Hx1x.N0x(cd0x.cH1x);
    var czI8A = {
        homepage: "column689x75",
        detail: "logo200x220"
    };
    b9i.bm0x = function(e9f) {
        e9f = e9f || {};
        this.bn0x(e9f);
        this.o9f = a8i.B9s("j-music-ad");
        if (!this.o9f)
            return;
        this.ZB8t = e9f.cat || "";
        this.bpB2x = e9f.resType || "";
        this.cLB1x = e9f.resId || 0;
        this.cza8S = a8i.t9k(this.o9f, "hasMusicAd") == "1";
        var j9a = a8i.E0x(this.o9f, "j-flag");
        this.nA4E = j9a.shift();
        this.bpF2x = j9a.shift();
        this.cyQ8I();
        this.bX0x([[this.nA4E, "click", this.ct0x.f9e(this)]])
    }
    ;
    b9i.cyQ8I = function() {
        var cC1x = "g_cb" + k9b.SI6C(5)
          , Y0x = czK8C + "/wa/ad_check?"
          , cn0x = {
            site: "netease",
            affiliate: "music",
            cat: this.ZB8t,
            type: czI8A[this.ZB8t],
            location: 1,
            callback: cC1x
        }
          , yv8n = document.createElement("script");
        window[cC1x] = this.cyK8C.f9e(this);
        yv8n.src = Y0x + k9b.cz0x(cn0x);
        yv8n.id = "j-script-ad";
        yv8n.type = "text/javascript";
        this.cyF8x = cC1x;
        document.body.appendChild(yv8n)
    }
    ;
    b9i.cyK8C = function(bN0x) {
        if (bN0x && bN0x.result) {
            a8i.y9p(this.o9f, "f-hide");
            a8i.y9p(this.bpF2x, "f-hide");
            a8i.w9n(this.nA4E, "f-hide")
        } else if (this.cza8S) {
            a8i.y9p(this.o9f, "f-hide");
            a8i.y9p(this.nA4E, "f-hide");
            a8i.w9n(this.bpF2x, "f-hide");
            if (this.bDc6W()) {
                this.bDb6V()
            } else {
                h9c.s9j(window, "scroll", this.cyh8Z.f9e(this))
            }
        } else {
            a8i.w9n(this.o9f, "f-hide");
            a8i.w9n(this.nA4E, "f-hide");
            a8i.w9n(this.bpF2x, "f-hide")
        }
        a8i.cO1x(a8i.B9s("j-script-ad"));
        delete window[this.cyF8x]
    }
    ;
    var ej1x = null;
    var bCY6S = !1;
    var bpN2x = !0;
    var ZJ8B = 0;
    var bpP2x = 0;
    b9i.bDc6W = function() {
        var bpQ2x = !1;
        if (this.nA4E) {
            if (bpN2x) {
                bpN2x = !0;
                ZJ8B = a8i.ic3x(this.nA4E, document.body).y;
                bpP2x = ZJ8B + this.nA4E.clientHeight
            }
            var gn2x = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
            var bCX6R = document.body.clientHeight;
            var It1x = 0;
            if (top.g_bottomBarShow && top.g_bottomBarHeight)
                It1x = top.g_bottomBarHeight;
            if (ZJ8B > gn2x && ZJ8B < gn2x + bCX6R - It1x) {
                bpQ2x = !0
            } else if (bpP2x > gn2x && bpP2x < gn2x + bCX6R - It1x) {
                bpQ2x = !0
            }
        }
        return bpQ2x
    }
    ;
    b9i.cyh8Z = function() {
        if (bCY6S)
            return;
        clearTimeout(ej1x);
        ej1x = setTimeout(this.cwU8M.f9e(this), 1e3)
    }
    ;
    b9i.cwU8M = function() {
        if (this.bDc6W()) {
            bCY6S = true;
            this.bDb6V()
        }
    }
    ;
    b9i.bDb6V = function() {
        this.bCV6P("impress")
    }
    ;
    b9i.ct0x = function(d9g) {
        this.bCV6P("click")
    }
    ;
    b9i.bCV6P = function(u9l) {
        if (!this.nA4E)
            return;
        var D0x = a8i.t9k(this.nA4E, "id");
        var Y0x = a8i.t9k(this.nA4E, "url");
        var cvZ8R = a8i.t9k(this.nA4E, "pageid");
        var cvB7u = a8i.t9k(this.nA4E, "pagetype");
        var Q0x = null;
        if (this.ZB8t == "homepage") {
            Q0x = {
                target: "ad",
                resource: "newalbum",
                url: Y0x,
                id: D0x
            }
        } else if (this.ZB8t == "detail") {
            Q0x = {
                target: "ad",
                resource: cvB7u || "",
                resourceid: cvZ8R || 0,
                id: +D0x,
                url: Y0x
            }
        }
        if (Q0x && window.log) {
            window.log(u9l, Q0x)
        }
    }
}
)();
(function() {
    var c9h = NEJ.P, br0x = NEJ.F, v9m = c9h("nej.j"), l9c = c9h("nm.x"), q9h = c9h("nm.d"), b9i, K0x;
    q9h.jT3x = NEJ.C();
    q9h.jT3x.cnG6A = function(qG5L) {
        var rN5S = q9h.jT3x.JA1x(qG5L);
        return !!rN5S ? rN5S.name : ""
    }
    ;
    q9h.jT3x.bGe6Y = function(qG5L, byQ5V) {
        var uG7z = q9h.jT3x.JO1x(qG5L);
        return uG7z[byQ5V] || ""
    }
    ;
    q9h.jT3x.JO1x = function(qG5L) {
        var rN5S = q9h.jT3x.JA1x(qG5L);
        return !!rN5S ? rN5S.cities : []
    }
    ;
    q9h.jT3x.bci9Z = function() {
        return Ag9X
    }
    ;
    q9h.jT3x.JA1x = function(qG5L) {
        for (var i = 0; i < Ag9X.length; i++) {
            if (Ag9X[i].id == qG5L)
                return Ag9X[i]
        }
        return null
    }
    ;
    var Ag9X = [{
        id: 1,
        name: "直辖市",
        cities: {
            11e4: "北京市",
            12e4: "天津市",
            31e4: "上海市",
            5e5: "重庆市"
        }
    }, {
        id: 2,
        name: "特别行政区",
        cities: {
            81e4: "香港",
            82e4: "澳门"
        }
    }, {
        id: 13e4,
        name: "河北省",
        alias: "河北",
        type: 0,
        cities: {
            130100: "石家庄市",
            130200: "唐山市",
            130300: "秦皇岛市",
            130400: "邯郸市",
            130500: "邢台市",
            130600: "保定市",
            130700: "张家口市",
            130800: "承德市",
            130900: "沧州市",
            131e3: "廊坊市",
            131100: "衡水市"
        }
    }, {
        id: 14e4,
        name: "山西省",
        alias: "山西",
        type: 0,
        cities: {
            140100: "太原市",
            140200: "大同市",
            140300: "阳泉市",
            140400: "长治市",
            140500: "晋城市",
            140600: "朔州市",
            140700: "晋中市",
            140800: "运城市",
            140900: "忻州市",
            141e3: "临汾市",
            141100: "吕梁市"
        }
    }, {
        id: 15e4,
        name: "内蒙古",
        alias: null,
        type: 0,
        cities: {
            150100: "呼和浩特市",
            150200: "包头市",
            150300: "乌海市",
            150400: "赤峰市",
            150500: "通辽市",
            150600: "鄂尔多斯市",
            150700: "呼伦贝尔市",
            150800: "巴彦淖尔市",
            150900: "乌兰察布市",
            152200: "兴安盟",
            152500: "锡林郭勒盟",
            152900: "阿拉善盟"
        }
    }, {
        id: 21e4,
        name: "辽宁省",
        alias: "辽宁",
        type: 0,
        cities: {
            210100: "沈阳市",
            210200: "大连市",
            210300: "鞍山市",
            210400: "抚顺市",
            210500: "本溪市",
            210600: "丹东市",
            210700: "锦州市",
            210800: "营口市",
            210900: "阜新市",
            211e3: "辽阳市",
            211100: "盘锦市",
            211200: "铁岭市",
            211300: "朝阳市",
            211400: "葫芦岛市"
        }
    }, {
        id: 22e4,
        name: "吉林省",
        alias: "吉林",
        type: 0,
        cities: {
            220100: "长春市",
            220200: "吉林市",
            220300: "四平市",
            220400: "辽源市",
            220500: "通化市",
            220600: "白山市",
            220700: "松原市",
            220800: "白城市",
            222400: "延边朝鲜族自治州"
        }
    }, {
        id: 23e4,
        name: "黑龙江省",
        alias: "黑龙江",
        type: 0,
        cities: {
            230100: "哈尔滨市",
            230200: "齐齐哈尔市",
            230300: "鸡西市",
            230400: "鹤岗市",
            230500: "双鸭山市",
            230600: "大庆市",
            230700: "伊春市",
            230800: "佳木斯市",
            230900: "七台河市",
            231e3: "牡丹江市",
            231100: "黑河市",
            231200: "绥化市",
            232700: "大兴安岭地区"
        }
    }, {
        id: 32e4,
        name: "江苏省",
        alias: "江苏",
        type: 0,
        cities: {
            320100: "南京市",
            320200: "无锡市",
            320300: "徐州市",
            320400: "常州市",
            320500: "苏州市",
            320600: "南通市",
            320700: "连云港市",
            320800: "淮安市",
            320900: "盐城市",
            321e3: "扬州市",
            321100: "镇江市",
            321200: "泰州市",
            321300: "宿迁市"
        }
    }, {
        id: 33e4,
        name: "浙江省",
        alias: "浙江",
        type: 0,
        cities: {
            330100: "杭州市",
            330200: "宁波市",
            330300: "温州市",
            330400: "嘉兴市",
            330500: "湖州市",
            330600: "绍兴市",
            330700: "金华市",
            330800: "衢州市",
            330900: "舟山市",
            331e3: "台州市",
            331100: "丽水市"
        }
    }, {
        id: 34e4,
        name: "安徽省",
        alias: "安徽",
        type: 0,
        cities: {
            340100: "合肥市",
            340200: "芜湖市",
            340300: "蚌埠市",
            340400: "淮南市",
            340500: "马鞍山市",
            340600: "淮北市",
            340700: "铜陵市",
            340800: "安庆市",
            341e3: "黄山市",
            341100: "滁州市",
            341200: "阜阳市",
            341300: "宿州市",
            341400: "巢湖市",
            341500: "六安市",
            341600: "亳州市",
            341700: "池州市",
            341800: "宣城市"
        }
    }, {
        id: 35e4,
        name: "福建省",
        alias: "福建",
        type: 0,
        cities: {
            350100: "福州市",
            350200: "厦门市",
            350300: "莆田市",
            350400: "三明市",
            350500: "泉州市",
            350600: "漳州市",
            350700: "南平市",
            350800: "龙岩市",
            350900: "宁德市"
        }
    }, {
        id: 36e4,
        name: "江西省",
        alias: "江西",
        type: 0,
        cities: {
            360100: "南昌市",
            360200: "景德镇市",
            360300: "萍乡市",
            360400: "九江市",
            360500: "新余市",
            360600: "鹰潭市",
            360700: "赣州市",
            360800: "吉安市",
            360900: "宜春市",
            361e3: "抚州市",
            361100: "上饶市"
        }
    }, {
        id: 37e4,
        name: "山东省",
        alias: "山东",
        type: 0,
        cities: {
            370100: "济南市",
            370200: "青岛市",
            370300: "淄博市",
            370400: "枣庄市",
            370500: "东营市",
            370600: "烟台市",
            370700: "潍坊市",
            370800: "济宁市",
            370900: "泰安市",
            371e3: "威海市",
            371100: "日照市",
            371200: "莱芜市",
            371300: "临沂市",
            371400: "德州市",
            371500: "聊城市",
            371600: "滨州市",
            371700: "菏泽市"
        }
    }, {
        id: 41e4,
        name: "河南省",
        alias: "河南",
        type: 0,
        cities: {
            410100: "郑州市",
            410200: "开封市",
            410300: "洛阳市",
            410400: "平顶山市",
            410500: "安阳市",
            410600: "鹤壁市",
            410700: "新乡市",
            410800: "焦作市",
            410900: "濮阳市",
            411e3: "许昌市",
            411100: "漯河市",
            411200: "三门峡市",
            411300: "南阳市",
            411400: "商丘市",
            411500: "信阳市",
            411600: "周口市",
            411700: "驻马店市",
            419001: "济源市"
        }
    }, {
        id: 42e4,
        name: "湖北省",
        alias: "湖北",
        type: 0,
        cities: {
            420100: "武汉市",
            420200: "黄石市",
            420300: "十堰市",
            420500: "宜昌市",
            420600: "襄樊市",
            420700: "鄂州市",
            420800: "荆门市",
            420900: "孝感市",
            421e3: "荆州市",
            421100: "黄冈市",
            421200: "咸宁市",
            421300: "随州市",
            422800: "恩施土家族苗族自治州",
            429004: "仙桃市",
            429005: "潜江市",
            429006: "天门市",
            429021: "神农架林区"
        }
    }, {
        id: 43e4,
        name: "湖南省",
        alias: "湖南",
        type: 0,
        cities: {
            430100: "长沙市",
            430200: "株洲市",
            430300: "湘潭市",
            430400: "衡阳市",
            430500: "邵阳市",
            430600: "岳阳市",
            430700: "常德市",
            430800: "张家界市",
            430900: "益阳市",
            431e3: "郴州市",
            431100: "永州市",
            431200: "怀化市",
            431300: "娄底市",
            433100: "湘西土家族苗族自治州"
        }
    }, {
        id: 44e4,
        name: "广东省",
        alias: "广东",
        type: 0,
        cities: {
            440100: "广州市",
            440200: "韶关市",
            440300: "深圳市",
            440400: "珠海市",
            440500: "汕头市",
            440600: "佛山市",
            440700: "江门市",
            440800: "湛江市",
            440900: "茂名市",
            441200: "肇庆市",
            441300: "惠州市",
            441400: "梅州市",
            441500: "汕尾市",
            441600: "河源市",
            441700: "阳江市",
            441800: "清远市",
            441900: "东莞市",
            442e3: "中山市",
            445100: "潮州市",
            445200: "揭阳市",
            445300: "云浮市"
        }
    }, {
        id: 45e4,
        name: "广西",
        alias: null,
        type: 0,
        cities: {
            450100: "南宁市",
            450200: "柳州市",
            450300: "桂林市",
            450400: "梧州市",
            450500: "北海市",
            450600: "防城港市",
            450700: "钦州市",
            450800: "贵港市",
            450900: "玉林市",
            451e3: "百色市",
            451100: "贺州市",
            451200: "河池市",
            451300: "来宾市",
            451400: "崇左市"
        }
    }, {
        id: 46e4,
        name: "海南省",
        alias: "海南",
        type: 0,
        cities: {
            460100: "海口市",
            460200: "三亚市",
            469001: "五指山市",
            469002: "琼海市",
            469003: "儋州市",
            469005: "文昌市",
            469006: "万宁市",
            469007: "东方市",
            469021: "定安县",
            469022: "屯昌县",
            469023: "澄迈县",
            469024: "临高县",
            469025: "白沙黎族自治县",
            469026: "昌江黎族自治县",
            469027: "乐东黎族自治县",
            469028: "陵水黎族自治县",
            469029: "保亭黎族苗族自治县",
            469030: "琼中黎族苗族自治县"
        }
    }, {
        id: 51e4,
        name: "四川省",
        alias: "四川",
        type: 0,
        cities: {
            510100: "成都市",
            510300: "自贡市",
            510400: "攀枝花市",
            510500: "泸州市",
            510600: "德阳市",
            510700: "绵阳市",
            510800: "广元市",
            510900: "遂宁市",
            511e3: "内江市",
            511100: "乐山市",
            511300: "南充市",
            511400: "眉山市",
            511500: "宜宾市",
            511600: "广安市",
            511700: "达州市",
            511800: "雅安市",
            511900: "巴中市",
            512e3: "资阳市",
            513200: "阿坝藏族羌族自治州",
            513300: "甘孜藏族自治州",
            513400: "凉山彝族自治州"
        }
    }, {
        id: 52e4,
        name: "贵州省",
        alias: "贵州",
        type: 0,
        cities: {
            520100: "贵阳市",
            520200: "六盘水市",
            520300: "遵义市",
            520400: "安顺市",
            522200: "铜仁地区",
            522300: "黔西南布依族苗族自治州",
            522400: "毕节地区",
            522600: "黔东南苗族侗族自治州",
            522700: "黔南布依族苗族自治州"
        }
    }, {
        id: 53e4,
        name: "云南省",
        alias: "云南",
        type: 0,
        cities: {
            530100: "昆明市",
            530300: "曲靖市",
            530400: "玉溪市",
            530500: "保山市",
            530600: "昭通市",
            530700: "丽江市",
            530800: "普洱市",
            530900: "临沧市",
            532300: "楚雄彝族自治州",
            532500: "红河哈尼族彝族自治州",
            532600: "文山壮族苗族自治州",
            532800: "西双版纳傣族自治州",
            532900: "大理白族自治州",
            533100: "德宏傣族景颇族自治州",
            533300: "怒江傈僳族自治州",
            533400: "迪庆藏族自治州"
        }
    }, {
        id: 54e4,
        name: "西藏",
        alias: null,
        type: 0,
        cities: {
            540100: "拉萨市",
            542100: "昌都地区",
            542200: "山南地区",
            542300: "日喀则地区",
            542400: "那曲地区",
            542500: "阿里地区",
            542600: "林芝地区"
        }
    }, {
        id: 61e4,
        name: "陕西省",
        alias: "陕西",
        type: 0,
        cities: {
            610100: "西安市",
            610200: "铜川市",
            610300: "宝鸡市",
            610400: "咸阳市",
            610500: "渭南市",
            610600: "延安市",
            610700: "汉中市",
            610800: "榆林市",
            610900: "安康市",
            611e3: "商洛市"
        }
    }, {
        id: 62e4,
        name: "甘肃省",
        alias: "甘肃",
        type: 0,
        cities: {
            620100: "兰州市",
            620200: "嘉峪关市",
            620300: "金昌市",
            620400: "白银市",
            620500: "天水市",
            620600: "武威市",
            620700: "张掖市",
            620800: "平凉市",
            620900: "酒泉市",
            621e3: "庆阳市",
            621100: "定西市",
            621200: "陇南市",
            622900: "临夏回族自治州",
            623e3: "甘南藏族自治州"
        }
    }, {
        id: 63e4,
        name: "青海省",
        alias: "青海",
        type: 0,
        cities: {
            630100: "西宁市",
            632100: "海东地区",
            632200: "海北藏族自治州",
            632300: "黄南藏族自治州",
            632500: "海南藏族自治州",
            632600: "果洛藏族自治州",
            632700: "玉树藏族自治州",
            632800: "海西蒙古族藏族自治州"
        }
    }, {
        id: 64e4,
        name: "宁夏",
        alias: null,
        type: 0,
        cities: {
            640100: "银川市",
            640200: "石嘴山市",
            640300: "吴忠市",
            640400: "固原市",
            640500: "中卫市"
        }
    }, {
        id: 65e4,
        name: "新疆",
        alias: null,
        type: 0,
        cities: {
            650100: "乌鲁木齐市",
            650200: "克拉玛依市",
            652100: "吐鲁番地区",
            652200: "哈密地区",
            652300: "昌吉回族自治州",
            652700: "博尔塔拉蒙古自治州",
            652800: "巴音郭楞蒙古自治州",
            652900: "阿克苏地区",
            653e3: "克孜勒苏柯尔克孜自治州",
            653100: "喀什地区",
            653200: "和田地区",
            654e3: "伊犁哈萨克自治州",
            654200: "塔城地区",
            654300: "阿勒泰地区",
            659001: "石河子市",
            659002: "阿拉尔市",
            659003: "图木舒克市",
            659004: "五家渠市"
        }
    }, {
        id: 71e4,
        name: "台湾省",
        alias: "台湾",
        type: 0,
        cities: {
            710100: "台北市",
            710200: "高雄市",
            710300: "基隆市",
            710400: "台中市",
            710500: "台南市",
            710600: "新竹市",
            710700: "嘉义市",
            710900: "台北县",
            711e3: "宜兰县",
            711100: "桃园县",
            711200: "新竹县",
            711300: "苗栗县",
            711400: "台中县",
            711500: "彰化县",
            711600: "南投县",
            711700: "云林县",
            711800: "嘉义县",
            711900: "台南县",
            712e3: "高雄县",
            712100: "屏东县",
            712200: "澎湖县",
            712300: "台东县",
            712400: "花莲县"
        }
    }, {
        id: 1e6,
        name: "海外",
        alias: "海外",
        type: 3,
        cities: {
            1000100: "阿尔及利亚",
            1000200: "阿根廷",
            1000300: "阿联酋",
            1000400: "埃及",
            1000500: "爱尔兰",
            1000600: "奥地利",
            1000700: "澳大利亚",
            1000800: "巴哈马",
            1000900: "巴基斯坦",
            1001e3: "巴西",
            1001100: "白俄罗斯",
            1001200: "比利时",
            1001300: "冰岛",
            1001400: "波兰",
            1001500: "玻利维亚",
            1001600: "伯利兹",
            1001700: "朝鲜",
            1001800: "丹麦",
            1001900: "德国",
            1002e3: "俄罗斯",
            1002100: "厄瓜多尔",
            1002200: "法国",
            1002300: "菲律宾",
            1002400: "芬兰",
            1002500: "哥伦比亚",
            1002600: "古巴",
            1002700: "关岛",
            1002800: "哈萨克斯坦",
            1002900: "韩国",
            1003e3: "荷兰",
            1003100: "加拿大",
            1003200: "加纳",
            1003300: "柬埔寨",
            1003400: "捷克",
            1003500: "卡塔尔",
            1003600: "科威特",
            1003700: "克罗地亚",
            1003800: "肯尼亚",
            1003900: "老挝",
            1004e3: "卢森堡",
            1004100: "罗马尼亚",
            1004200: "马尔代夫",
            1004300: "马来西亚",
            1004400: "美国",
            1004500: "蒙古",
            1004600: "孟加拉",
            1004700: "秘鲁",
            1004800: "缅甸",
            1004900: "摩洛哥",
            1005e3: "墨西哥",
            1005100: "南非",
            1005200: "尼日利亚",
            1005300: "挪威",
            1005400: "葡萄牙",
            1005500: "日本",
            1005600: "瑞典",
            1005700: "瑞士",
            1005800: "沙特阿拉伯",
            1005900: "斯里兰卡",
            1006e3: "苏丹",
            1006100: "泰国",
            1006200: "坦桑尼亚",
            1006300: "土耳其",
            1006400: "委内瑞拉",
            1006500: "乌克兰",
            1006600: "西班牙",
            1006700: "希腊",
            1006800: "新加坡",
            1006900: "新西兰",
            1007e3: "匈牙利",
            1007100: "伊拉克",
            1007200: "伊朗",
            1007300: "以色列",
            1007400: "意大利",
            1007500: "印度",
            1007600: "印度尼西亚",
            1007700: "英国",
            1007800: "越南",
            1007900: "智利",
            101e4: "其他"
        }
    }]
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), bC0x = c9h("nej.ui"), I0x = c9h("nej.ut"), v9m = c9h("nej.j"), q9h = c9h("nm.d"), M0x = c9h("nm.m.p"), b9i, K0x;
    M0x.wp7i = NEJ.C();
    b9i = M0x.wp7i.N0x(nej.ut.cH1x, !0);
    K0x = M0x.wp7i.cr0x;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.bDP6J = e9f.itemRenderer || M0x.bmu1x
    }
    ;
    b9i.cv0x = function(e9f) {
        this.cD1x(e9f);
        this.IS1x = e9f.listParent;
        this.IS1x.style.display = "none";
        this.sA6u = e9f.btn;
        this.kL3x = e9f.selected;
        this.bDO6I(e9f.defaultText);
        h9c.s9j(this.sA6u, "click", this.Xk7d.f9e(this));
        h9c.s9j(document, "click", this.bDL6F.f9e(this))
    }
    ;
    b9i.cLu1x = function() {
        h9c.mL4P(this.sA6u, "click", this.Xk7d.f9e(this));
        h9c.mL4P(document, "click", this.bDL6F.f9e(this))
    }
    ;
    b9i.bDL6F = function(d9g) {
        if (h9c.X0x(d9g) == this.sA6u)
            return;
        this.IS1x.style.display = "none"
    }
    ;
    b9i.Xk7d = function(d9g) {
        h9c.bf0x(d9g);
        with (this.IS1x.style) {
            display = display == "" ? "none" : ""
        }
    }
    ;
    b9i.lh3x = function(p9g) {
        this.IS1x.style.display = "none";
        if (this.yV8N != p9g) {
            this.yV8N = p9g;
            var ty6s = p9g.hh2x();
            this.kL3x.innerHTML = ty6s.text;
            this.z9q("onchange", ty6s)
        }
    }
    ;
    b9i.NJ3x = function() {
        this.IS1x.style.display = "none"
    }
    ;
    b9i.fk2x = function(C0x) {
        if (!this.bU0x)
            return;
        for (var i = 0, tmp = null; i < this.bU0x.length; i++) {
            if (this.bU0x[i].hh2x().value == C0x) {
                this.lh3x(this.bU0x[i]);
                break
            }
        }
    }
    ;
    b9i.ga2x = function() {
        if (this.yV8N) {
            return this.yV8N.hh2x().value
        }
        return -1
    }
    ;
    b9i.bDO6I = function(cL1x) {
        this.Wv7o = cL1x;
        this.kL3x.innerHTML = cL1x
    }
    ;
    b9i.jq3x = function(i9b) {
        if (!k9b.ec1x(i9b))
            i9b = [i9b];
        var j9a = a8i.CX9O(i9b, this.bDP6J, {
            parent: this.IS1x,
            onclick: this.lh3x.f9e(this)
        });
        if (this.bU0x)
            this.bU0x = this.bU0x.concat(j9a);
        else
            this.bU0x = j9a
    }
    ;
    b9i.qJ5O = function() {
        this.bDP6J.T0x(this.bU0x);
        delete this.bU0x;
        delete this.yV8N;
        this.bDO6I(this.Wv7o)
    }
    ;
    M0x.bmu1x = NEJ.C();
    var NH3x, bXV2x;
    NH3x = M0x.bmu1x.N0x(bC0x.zd8V, !0);
    bXV2x = M0x.bmu1x.cr0x;
    NH3x.bV0x = function() {
        this.ch0x();
        this.o9f = a8i.dk1x("LI", "f-thide");
        this.EL0x()
    }
    ;
    NH3x.EL0x = function() {
        h9c.s9j(this.o9f, "click", function(d9g) {
            h9c.bf0x(d9g);
            this.z9q("onclick", this)
        }
        .f9e(this))
    }
    ;
    NH3x.cf0x = function() {}
    ;
    NH3x.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.s9j("onclick", e9f.onclick || NEJ.F)
    }
    ;
    NH3x.iJ3x = function() {
        this.o9f.innerHTML = '<a href="#">' + this.be0x.text + "</a>"
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), bC0x = c9h("nej.ui"), I0x = c9h("nej.ut"), k9b = c9h("nej.u"), v9m = c9h("nej.j"), q9h = c9h("nm.d"), x9o = c9h("nm.w"), n9e = c9h("nm.l"), l9c = c9h("nm.x"), b9i, K0x;
    var WA7t = {
        0: {
            upl: "<i>上传封面</i>",
            prev: "歌单封面预览",
            big: "大尺寸封面（180x180像素）",
            sml: "小尺寸封面（40x40像素）"
        },
        1: {
            upl: "<i>上传头像</i>",
            prev: "头像预览",
            big: "大尺寸头像（180x180像素）",
            sml: "小尺寸头像（40x40像素）"
        },
        2: {
            upl: "<i>选择图片</i>",
            prev: "封面预览",
            big: "大尺寸封面（180*180）",
            sml: "小尺寸封面（40*40）"
        }
    };
    x9o.qa5f = NEJ.C();
    b9i = x9o.qa5f.N0x(bC0x.eo1x);
    K0x = x9o.qa5f.cr0x;
    b9i.cv0x = function() {
        this.cD1x();
        this.vW7P()
    }
    ;
    b9i.bV0x = function() {
        this.ch0x();
        var bu0x = a8i.E0x(this.o9f, "j-flag");
        var j9a = a8i.E0x(bu0x[0], "ztag");
        this.bI0x = j9a[0];
        this.kE3x = j9a[1];
        j9a = a8i.E0x(bu0x[1], "ztag");
        this.cp0x = {
            wrap: j9a[0],
            holder: j9a[1],
            view: j9a[2],
            rect: j9a[3],
            zoom: j9a[4]
        };
        j9a = a8i.E0x(bu0x[2], "ztag");
        this.gy2x = {
            label: j9a[0],
            big: j9a[1],
            textBG: j9a[2],
            small: j9a[3],
            textSM: j9a[4]
        };
        j9a = a8i.E0x(bu0x[3], "ztag");
        this.fe2x = j9a[0];
        this.be0x = {};
        this.gc2x = x9o.KM2x.A9r({
            parent: this.bI0x,
            accept: "image/jpg,image/jpeg,image/png,image/bmp",
            type: "image",
            onchange: this.qo5t.f9e(this),
            onsuccess: this.bYj2x.f9e(this),
            onerror: this.WJ7C.f9e(this)
        });
        h9c.s9j(j9a[0], "click", this.kW3x.f9e(this));
        h9c.s9j(j9a[1], "click", this.Hv1x.f9e(this));
        this.s9j("onrectchange", this.pQ5V.f9e(this));
        this.s9j("onstatechange", this.gz2x.f9e(this))
    }
    ;
    b9i.cf0x = function() {
        this.ce0x = "m-wgt-cropper"
    }
    ;
    b9i.WN7G = function(u9l) {
        var je3x = WA7t[u9l || 0];
        this.kE3x.innerHTML = je3x.upl;
        this.gy2x.label.innerText = je3x.prev;
        this.gy2x.textBG.innerText = je3x.big;
        this.gy2x.textSM.innerText = je3x.sml;
        this.CN9E = je3x
    }
    ;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.tk6e = e9f.minrect;
        this.WN7G(e9f.type);
        this.dP1x = {};
        this.dG1x = {};
        this.cb0x = {};
        if (!!e9f.holder) {
            var cx0x = a8i.dk1x("img", "full");
            cx0x.src = e9f.holder + "?param=180y180";
            this.dG1x = {
                big: cx0x,
                small: cx0x.cloneNode()
            };
            this.gy2x.big.appendChild(this.dG1x.big);
            this.gy2x.small.appendChild(this.dG1x.small)
        }
        this.jk3x = {
            width: this.cp0x.wrap.clientWidth,
            height: this.cp0x.wrap.clientHeight
        };
        this.jl3x = I0x.vC7v.A9r({
            body: this.cp0x.rect,
            view: this.cp0x.view,
            overflow: false,
            direction: 0,
            onchange: this.z9q.f9e(this, "onrectchange")
        });
        this.z9q("onstatechange", "empty")
    }
    ;
    b9i.bB0x = function() {
        a8i.y9p(this.cp0x.holder, "f-hide");
        a8i.w9n(this.cp0x.view, "f-hide");
        this.pB5G();
        this.jl3x.T0x();
        delete this.dP1x;
        delete this.dG1x;
        delete this.cb0x;
        delete this.jk3x
    }
    ;
    b9i.vW7P = function() {
        var fI2x = 10
          , bj0x = {}
          , dn1x = {}
          , mN4R = !1;
        var hD2x = function(d9g) {
            h9c.bf0x(d9g);
            mN4R = !0;
            bj0x.x = h9c.jN3x(d9g);
            bj0x.y = h9c.mg4k(d9g);
            dn1x.width = this.cp0x.rect.clientWidth;
            dn1x.height = this.cp0x.rect.clientHeight
        };
        var mp4t = function(d9g) {
            if (!mN4R)
                return;
            var hj2x = this.cp0x.rect
              , pP5U = h9c.jN3x(d9g) - bj0x.x
              , pI5N = h9c.mg4k(d9g) - bj0x.y
              , dr1x = Math.abs(pP5U) > Math.abs(pI5N) ? pP5U : pI5N
              , cG1x = dn1x.width + dr1x
              , cg0x = dn1x.height + dr1x
              , fv2x = Math.min(this.cb0x.vwidth - parseInt(a8i.di1x(hj2x, "left")), this.cb0x.vheight - parseInt(a8i.di1x(hj2x, "top")));
            cj0x = this.cp0x.rect.style;
            cj0x.width = Math.max(Math.min(cG1x, fv2x), fI2x) + "px";
            cj0x.height = Math.max(Math.min(cg0x, fv2x), fI2x) + "px";
            this.z9q("onrectchange")
        };
        var nl4p = function() {
            mN4R = !1
        };
        return function() {
            h9c.s9j(this.cp0x.zoom, "mousedown", hD2x.f9e(this));
            h9c.s9j(document, "mousemove", mp4t.f9e(this));
            h9c.s9j(document, "mouseup", nl4p.f9e(this))
        }
    }();
    b9i.pB5G = function() {
        if (this.dP1x.img)
            a8i.cO1x(this.dP1x.img);
        if (this.dP1x.bg)
            a8i.cO1x(this.dP1x.bg);
        if (this.dG1x.big)
            a8i.cO1x(this.dG1x.big);
        if (this.dG1x.small)
            a8i.cO1x(this.dG1x.small)
    }
    ;
    b9i.qo5t = function(e9f) {
        if (e9f.size > 20971520) {
            n9e.Z0x.J0x({
                type: 2,
                tip: "文件大小不能超过20M"
            });
            e9f.stopped = true;
            return
        }
        this.z9q("onstatechange", "uploading");
        this.z9q("onchange", e9f)
    }
    ;
    b9i.bYj2x = function(m9d) {
        this.be0x.picId = m9d.docId;
        this.be0x.picUrl = "//nos.netease.com/" + m9d.bucket + "/" + m9d.objectKey;
        this.pB5G();
        this.zb8T = m9d.docId;
        var cx0x = a8i.dk1x("img");
        cx0x.src = this.be0x.picUrl;
        this.dP1x.img = cx0x;
        this.dP1x.bg = cx0x.cloneNode();
        this.dG1x.big = cx0x.cloneNode();
        this.dG1x.small = cx0x.cloneNode();
        h9c.s9j(cx0x, "load", this.pJ5O.f9e(this));
        this.z9q("onstatechange");
        this.z9q("onsuccess", this.be0x)
    }
    ;
    b9i.WJ7C = function(m9d) {
        n9e.Z0x.J0x({
            type: 2,
            tip: "上传失败"
        });
        this.z9q("onstatechange");
        this.z9q("onerror", m9d)
    }
    ;
    b9i.pJ5O = function(d9g) {
        h9c.bf0x(d9g);
        h9c.ho2x(this.bmj1x, "load");
        this.cb0x.owidth = this.dP1x.img.width;
        this.cb0x.oheight = this.dP1x.img.height;
        var dT1x = this.cb0x.owidth > this.cb0x.oheight ? this.jk3x.width / this.cb0x.owidth : this.jk3x.height / this.cb0x.oheight;
        this.cb0x.vwidth = dT1x * this.cb0x.owidth;
        this.cb0x.vheight = dT1x * this.cb0x.oheight;
        var cj0x = this.cp0x.view.style;
        cj0x.width = this.cb0x.vwidth + "px";
        cj0x.height = this.cb0x.vheight + "px";
        cj0x.top = (this.jk3x.height - this.cb0x.vheight) / 2 + "px";
        cj0x.left = (this.jk3x.width - this.cb0x.vwidth) / 2 + "px";
        var dx1x = Math.min(Math.min(this.cb0x.vwidth, this.cb0x.vheight), 180)
          , kH3x = this.cp0x.rect.style;
        kH3x.width = dx1x + "px";
        kH3x.height = dx1x + "px";
        kH3x.top = (this.cb0x.vheight - dx1x) / 2 + "px";
        kH3x.left = (this.cb0x.vwidth - dx1x) / 2 + "px";
        this.cp0x.view.appendChild(this.dP1x.bg);
        this.cp0x.view.appendChild(this.dP1x.img);
        this.gy2x.big.appendChild(this.dG1x.big);
        this.gy2x.small.appendChild(this.dG1x.small);
        a8i.w9n(this.dG1x.big, "f-pr");
        a8i.w9n(this.dG1x.small, "f-pr");
        a8i.w9n(this.dP1x.bg, "bgimg");
        a8i.y9p(this.cp0x.view, "f-hide");
        a8i.w9n(this.cp0x.holder, "f-hide");
        this.z9q("onrectchange")
    }
    ;
    b9i.pQ5V = function() {
        var th6b = function(dn1x, kQ3x, dg1x) {
            var dT1x = kQ3x.clientWidth / dn1x.clientWidth
              , cj0x = dg1x.style;
            dg1x.width = dT1x * this.cb0x.vwidth;
            dg1x.height = dT1x * this.cb0x.vheight;
            cj0x.top = -dT1x * Math.max(parseInt(a8i.di1x(dn1x, "top")), 0) + "px";
            cj0x.left = -dT1x * parseInt(a8i.di1x(dn1x, "left")) + "px"
        };
        return function() {
            var dn1x = this.cp0x.rect
              , gG2x = parseInt(a8i.di1x(dn1x, "top")) + 1
              , hi2x = parseInt(a8i.di1x(dn1x, "left")) + 1
              , cG1x = dn1x.clientWidth
              , cg0x = dn1x.clientHeight
              , yX8P = "rect(" + gG2x + "px " + (hi2x + cG1x) + "px " + (gG2x + cg0x) + "px " + hi2x + "px)";
            a8i.ba0x(this.dP1x.img, "clip", yX8P);
            th6b.call(this, dn1x, this.gy2x.big, this.dG1x.big);
            th6b.call(this, dn1x, this.gy2x.small, this.dG1x.small)
        }
    }();
    b9i.kW3x = function() {
        if (a8i.bE0x(this.fe2x, "u-btn2-dis"))
            return;
        var dT1x = this.cb0x.owidth / this.cb0x.vwidth
          , hj2x = this.cp0x.rect
          , nX4b = [Math.round(dT1x * parseInt(a8i.di1x(hj2x, "left"))), Math.max(Math.round(dT1x * parseInt(a8i.di1x(hj2x, "top"))), 0), Math.round(dT1x * hj2x.clientWidth), Math.round(dT1x * hj2x.clientHeight)];
        v9m.bk0x("/upload/img/op", {
            type: "json",
            method: "get",
            query: {
                id: this.zb8T,
                op: nX4b.join("y")
            },
            onload: function(d9g) {
                this.z9q("onstatechange");
                if (d9g.code == 200) {
                    this.z9q("onclip", d9g)
                } else {
                    n9e.Z0x.J0x({
                        type: 2,
                        tip: "保存失败"
                    })
                }
            }
            .f9e(this),
            onerror: function() {
                this.z9q("onstatechange");
                n9e.Z0x.J0x({
                    type: 2,
                    tip: "保存失败"
                })
            }
        });
        this.z9q("onstatechange", "saving")
    }
    ;
    b9i.Xg7Z = function(d9g) {
        if (a8i.bE0x(this.kE3x, "u-btn2-dis"))
            h9c.bf0x(d9g)
    }
    ;
    b9i.Hv1x = function() {
        this.z9q("oncancle")
    }
    ;
    b9i.gz2x = function(V0x) {
        a8i.y9p(this.kE3x, "u-btn2-dis");
        a8i.y9p(this.fe2x, "u-btn2-dis");
        this.kE3x.innerHTML = this.CN9E.upl;
        this.fe2x.innerHTML = "<i>保 存</i>";
        switch (V0x) {
        case "empty":
            a8i.w9n(this.fe2x, "u-btn2-dis");
            break;
        case "uploading":
            a8i.w9n(this.kE3x, "u-btn2-dis");
            a8i.w9n(this.fe2x, "u-btn2-dis");
            this.kE3x.innerHTML = "<i>上传中...</i>";
            break;
        case "saving":
            a8i.w9n(this.fe2x, "u-btn2-dis");
            this.fe2x.innerHTML = "<i>保存中...</i>";
            break
        }
    }
}
)();
(function() {
    var p = NEJ.P("nej.u");
    var nw4A = 8;
    var bdM9D = function(hk2x, cA0x) {
        return hk2x << cA0x | hk2x >>> 32 - cA0x
    };
    var mn4r = function(x, y) {
        var bJA7t = (x & 65535) + (y & 65535)
          , bYs2x = (x >> 16) + (y >> 16) + (bJA7t >> 16);
        return bYs2x << 16 | bJA7t & 65535
    };
    var bYr2x = function(t, b, c, d) {
        if (t < 20)
            return b & c | ~b & d;
        if (t < 40)
            return b ^ c ^ d;
        if (t < 60)
            return b & c | b & d | c & d;
        return b ^ c ^ d
    };
    var bYo2x = function(t) {
        if (t < 20)
            return 1518500249;
        if (t < 40)
            return 1859775393;
        if (t < 60)
            return -1894007588;
        return -899497514
    };
    var uY7R = function() {
        var Hk1x = function(i) {
            return i % 32
        }
          , Hl1x = function(i) {
            return 32 - nw4A - i % 32
        };
        return function(cQ1x, Hm1x) {
            var Qy4C = []
              , lz4D = (1 << nw4A) - 1
              , mp4t = Hm1x ? Hk1x : Hl1x;
            for (var i = 0, l = cQ1x.length * nw4A; i < l; i += nw4A)
                Qy4C[i >> 5] |= (cQ1x.charCodeAt(i / nw4A) & lz4D) << mp4t(i);
            return Qy4C
        }
    }();
    var Qw4A = function() {
        var bJx7q = "0123456789abcdef"
          , Hk1x = function(i) {
            return i % 4
        }
          , Hl1x = function(i) {
            return 3 - i % 4
        };
        return function(iA3x, Hm1x) {
            var bt0x = []
              , mp4t = Hm1x ? Hk1x : Hl1x;
            for (var i = 0, l = iA3x.length * 4; i < l; i++) {
                bt0x.push(bJx7q.charAt(iA3x[i >> 2] >> mp4t(i) * 8 + 4 & 15) + bJx7q.charAt(iA3x[i >> 2] >> mp4t(i) * 8 & 15))
            }
            return bt0x.join("")
        }
    }();
    var bdR9I = function() {
        var Hk1x = function(i) {
            return i % 32
        }
          , Hl1x = function(i) {
            return 32 - nw4A - i % 32
        };
        return function(Qy4C, Hm1x) {
            var bt0x = []
              , lz4D = (1 << nw4A) - 1
              , mp4t = Hm1x ? Hk1x : Hl1x;
            for (var i = 0, l = Qy4C.length * 32; i < l; i += nw4A)
                bt0x.push(String.fromCharCode(Qy4C[i >> 5] >>> mp4t(i) & lz4D));
            return bt0x.join("")
        }
    }();
    var Mt2x = function() {
        var bYk2x = "="
          , bYi2x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
          , Hk1x = function(i) {
            return i % 4
        }
          , Hl1x = function(i) {
            return 3 - i % 4
        };
        return function(iA3x, Hm1x) {
            var bt0x = []
              , mp4t = Hm1x ? Hk1x : Hl1x;
            for (var i = 0, bJv7o; i < iA3x.length * 4; i += 3) {
                bJv7o = (iA3x[i >> 2] >> 8 * mp4t(i) & 255) << 16 | (iA3x[i + 1 >> 2] >> 8 * mp4t(i + 1) & 255) << 8 | iA3x[i + 2 >> 2] >> 8 * mp4t(i + 2) & 255;
                for (var j = 0; j < 4; j++)
                    bt0x.push(i * 8 + j * 6 > iA3x.length * 32 ? bYk2x : bYi2x.charAt(bJv7o >> 6 * (3 - j) & 63))
            }
            return bt0x.join("")
        }
    }();
    var bdU9L = function(q, a, b, x, s, t) {
        return mn4r(bdM9D(mn4r(mn4r(a, q), mn4r(x, t)), s), b)
    };
    var pE5J = function(a, b, c, d, x, s, t) {
        return bdU9L(b & c | ~b & d, a, b, x, s, t)
    };
    var pG5L = function(a, b, c, d, x, s, t) {
        return bdU9L(b & d | c & ~d, a, b, x, s, t)
    };
    var pF5K = function(a, b, c, d, x, s, t) {
        return bdU9L(b ^ c ^ d, a, b, x, s, t)
    };
    var pw5B = function(a, b, c, d, x, s, t) {
        return bdU9L(c ^ (b | ~d), a, b, x, s, t)
    };
    var LL2x = function(x, y) {
        x[y >> 5] |= 128 << y % 32;
        x[(y + 64 >>> 9 << 4) + 14] = y;
        var a = 1732584193
          , b = -271733879
          , c = -1732584194
          , d = 271733878;
        for (var i = 0, l = x.length, bJt7m, bJs7l, bJp7i, bJo7h; i < l; i += 16) {
            bJt7m = a;
            bJs7l = b;
            bJp7i = c;
            bJo7h = d;
            a = pE5J(a, b, c, d, x[i + 0], 7, -680876936);
            d = pE5J(d, a, b, c, x[i + 1], 12, -389564586);
            c = pE5J(c, d, a, b, x[i + 2], 17, 606105819);
            b = pE5J(b, c, d, a, x[i + 3], 22, -1044525330);
            a = pE5J(a, b, c, d, x[i + 4], 7, -176418897);
            d = pE5J(d, a, b, c, x[i + 5], 12, 1200080426);
            c = pE5J(c, d, a, b, x[i + 6], 17, -1473231341);
            b = pE5J(b, c, d, a, x[i + 7], 22, -45705983);
            a = pE5J(a, b, c, d, x[i + 8], 7, 1770035416);
            d = pE5J(d, a, b, c, x[i + 9], 12, -1958414417);
            c = pE5J(c, d, a, b, x[i + 10], 17, -42063);
            b = pE5J(b, c, d, a, x[i + 11], 22, -1990404162);
            a = pE5J(a, b, c, d, x[i + 12], 7, 1804603682);
            d = pE5J(d, a, b, c, x[i + 13], 12, -40341101);
            c = pE5J(c, d, a, b, x[i + 14], 17, -1502002290);
            b = pE5J(b, c, d, a, x[i + 15], 22, 1236535329);
            a = pG5L(a, b, c, d, x[i + 1], 5, -165796510);
            d = pG5L(d, a, b, c, x[i + 6], 9, -1069501632);
            c = pG5L(c, d, a, b, x[i + 11], 14, 643717713);
            b = pG5L(b, c, d, a, x[i + 0], 20, -373897302);
            a = pG5L(a, b, c, d, x[i + 5], 5, -701558691);
            d = pG5L(d, a, b, c, x[i + 10], 9, 38016083);
            c = pG5L(c, d, a, b, x[i + 15], 14, -660478335);
            b = pG5L(b, c, d, a, x[i + 4], 20, -405537848);
            a = pG5L(a, b, c, d, x[i + 9], 5, 568446438);
            d = pG5L(d, a, b, c, x[i + 14], 9, -1019803690);
            c = pG5L(c, d, a, b, x[i + 3], 14, -187363961);
            b = pG5L(b, c, d, a, x[i + 8], 20, 1163531501);
            a = pG5L(a, b, c, d, x[i + 13], 5, -1444681467);
            d = pG5L(d, a, b, c, x[i + 2], 9, -51403784);
            c = pG5L(c, d, a, b, x[i + 7], 14, 1735328473);
            b = pG5L(b, c, d, a, x[i + 12], 20, -1926607734);
            a = pF5K(a, b, c, d, x[i + 5], 4, -378558);
            d = pF5K(d, a, b, c, x[i + 8], 11, -2022574463);
            c = pF5K(c, d, a, b, x[i + 11], 16, 1839030562);
            b = pF5K(b, c, d, a, x[i + 14], 23, -35309556);
            a = pF5K(a, b, c, d, x[i + 1], 4, -1530992060);
            d = pF5K(d, a, b, c, x[i + 4], 11, 1272893353);
            c = pF5K(c, d, a, b, x[i + 7], 16, -155497632);
            b = pF5K(b, c, d, a, x[i + 10], 23, -1094730640);
            a = pF5K(a, b, c, d, x[i + 13], 4, 681279174);
            d = pF5K(d, a, b, c, x[i + 0], 11, -358537222);
            c = pF5K(c, d, a, b, x[i + 3], 16, -722521979);
            b = pF5K(b, c, d, a, x[i + 6], 23, 76029189);
            a = pF5K(a, b, c, d, x[i + 9], 4, -640364487);
            d = pF5K(d, a, b, c, x[i + 12], 11, -421815835);
            c = pF5K(c, d, a, b, x[i + 15], 16, 530742520);
            b = pF5K(b, c, d, a, x[i + 2], 23, -995338651);
            a = pw5B(a, b, c, d, x[i + 0], 6, -198630844);
            d = pw5B(d, a, b, c, x[i + 7], 10, 1126891415);
            c = pw5B(c, d, a, b, x[i + 14], 15, -1416354905);
            b = pw5B(b, c, d, a, x[i + 5], 21, -57434055);
            a = pw5B(a, b, c, d, x[i + 12], 6, 1700485571);
            d = pw5B(d, a, b, c, x[i + 3], 10, -1894986606);
            c = pw5B(c, d, a, b, x[i + 10], 15, -1051523);
            b = pw5B(b, c, d, a, x[i + 1], 21, -2054922799);
            a = pw5B(a, b, c, d, x[i + 8], 6, 1873313359);
            d = pw5B(d, a, b, c, x[i + 15], 10, -30611744);
            c = pw5B(c, d, a, b, x[i + 6], 15, -1560198380);
            b = pw5B(b, c, d, a, x[i + 13], 21, 1309151649);
            a = pw5B(a, b, c, d, x[i + 4], 6, -145523070);
            d = pw5B(d, a, b, c, x[i + 11], 10, -1120210379);
            c = pw5B(c, d, a, b, x[i + 2], 15, 718787259);
            b = pw5B(b, c, d, a, x[i + 9], 21, -343485551);
            a = mn4r(a, bJt7m);
            b = mn4r(b, bJs7l);
            c = mn4r(c, bJp7i);
            d = mn4r(d, bJo7h)
        }
        return [a, b, c, d]
    };
    var bmk1x = function(L0x, i9b) {
        var wQ8I = uY7R(L0x, !0);
        if (wQ8I.length > 16)
            wQ8I = LL2x(wQ8I, L0x.length * nw4A);
        var Qi4m = Array(16)
          , Qg4k = Array(16);
        for (var i = 0; i < 16; i++) {
            Qi4m[i] = wQ8I[i] ^ 909522486;
            Qg4k[i] = wQ8I[i] ^ 1549556828
        }
        var dR1x = LL2x(Qi4m.concat(uY7R(i9b, !0)), 512 + i9b.length * nw4A);
        return LL2x(Qg4k.concat(dR1x), 512 + 128)
    };
    var LS2x = function(x, bs0x) {
        x[bs0x >> 5] |= 128 << 24 - bs0x % 32;
        x[(bs0x + 64 >> 9 << 4) + 15] = bs0x;
        var w = Array(80)
          , a = 1732584193
          , b = -271733879
          , c = -1732584194
          , d = 271733878
          , e = -1009589776;
        for (var i = 0, l = x.length, bJn7g, bJl7e, Xj7c, bJj7c, bJi7b; i < l; i += 16) {
            bJn7g = a;
            bJl7e = b;
            Xj7c = c;
            bJj7c = d;
            bJi7b = e;
            for (var j = 0; j < 80; j++) {
                w[j] = j < 16 ? x[i + j] : bdM9D(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
                var t = mn4r(mn4r(bdM9D(a, 5), bYr2x(j, b, c, d)), mn4r(mn4r(e, w[j]), bYo2x(j)));
                e = d;
                d = c;
                c = bdM9D(b, 30);
                b = a;
                a = t
            }
            a = mn4r(a, bJn7g);
            b = mn4r(b, bJl7e);
            c = mn4r(c, Xj7c);
            d = mn4r(d, bJj7c);
            e = mn4r(e, bJi7b)
        }
        return [a, b, c, d, e]
    };
    var bmt1x = function(L0x, i9b) {
        var wQ8I = uY7R(L0x);
        if (wQ8I.length > 16)
            wQ8I = LS2x(wQ8I, L0x.length * nw4A);
        var Qi4m = Array(16)
          , Qg4k = Array(16);
        for (var i = 0; i < 16; i++) {
            Qi4m[i] = wQ8I[i] ^ 909522486;
            Qg4k[i] = wQ8I[i] ^ 1549556828
        }
        var dR1x = LS2x(Qi4m.concat(uY7R(i9b)), 512 + i9b.length * nw4A);
        return LS2x(Qg4k.concat(dR1x), 512 + 160)
    };
    p.cKc1x = function(L0x, i9b) {
        return Qw4A(bmt1x(L0x, i9b))
    }
    ;
    p.cKd1x = function(L0x, i9b) {
        return Mt2x(bmt1x(L0x, i9b))
    }
    ;
    p.cKe1x = function(L0x, i9b) {
        return bdR9I(bmt1x(L0x, i9b))
    }
    ;
    p.cKf1x = function(L0x, i9b) {
        return Qw4A(bmk1x(L0x, i9b), !0)
    }
    ;
    p.cKg1x = function(L0x, i9b) {
        return Mt2x(bmk1x(L0x, i9b), !0)
    }
    ;
    p.cKh1x = function(L0x, i9b) {
        return bdR9I(bmk1x(L0x, i9b), !0)
    }
    ;
    p.cKi1x = function(i9b) {
        return Qw4A(LS2x(uY7R(i9b), i9b.length * nw4A))
    }
    ;
    p.cKj1x = function(i9b) {
        return Mt2x(LS2x(uY7R(i9b), i9b.length * nw4A))
    }
    ;
    p.cKk1x = function(i9b) {
        return bdR9I(LS2x(uY7R(i9b), i9b.length * nw4A))
    }
    ;
    p.kS3x = function(i9b) {
        return Qw4A(LL2x(uY7R(i9b, !0), i9b.length * nw4A), !0)
    }
    ;
    p.cKl1x = function(i9b) {
        return Mt2x(LL2x(uY7R(i9b, !0), i9b.length * nw4A), !0)
    }
    ;
    p.cKn1x = function(i9b) {
        return bdR9I(LL2x(uY7R(i9b, !0), i9b.length * nw4A), !0)
    }
    ;
    p.cKp1x = function(i9b) {
        return Qw4A(uY7R(i9b, !0), !0)
    }
}
)();
(function() {
    var c9h = NEJ.P, a8i = c9h("nej.e"), v9m = c9h("nej.j"), bb0x = c9h("nej.o"), k9b = c9h("nej.u"), h9c = c9h("nej.v"), bC0x = c9h("nej.ui"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), n9e = c9h("nm.l"), b9i, K0x;
    n9e.bGn6h = NEJ.C();
    b9i = n9e.bGn6h.N0x(n9e.el1x, !0);
    b9i.cv0x = function() {
        this.cD1x()
    }
    ;
    b9i.bV0x = function() {
        this.ch0x();
        var j9a = a8i.E0x(this.o9f, "j-flag");
        this.Gt0x = j9a[0];
        this.bmO2x = j9a[1];
        this.byd4h = j9a[2];
        h9c.s9j(j9a[3], "click", this.bmQ2x.f9e(this))
    }
    ;
    b9i.cf0x = function() {
        this.ce0x = "ntp-alert"
    }
    ;
    b9i.bm0x = function(e9f) {
        e9f.parent = e9f.parent || document.body;
        this.bn0x(e9f);
        a8i.ba0x(this.Gt0x, "display", "");
        if (e9f.type == "noicon") {
            a8i.ba0x(this.Gt0x, "display", "none")
        } else if (e9f.type == "success") {
            a8i.fo2x(this.Gt0x, "u-icn-88", "u-icn-89")
        } else {
            a8i.fo2x(this.Gt0x, "u-icn-89", "u-icn-88")
        }
        this.bmO2x.innerHTML = e9f.mesg || "";
        if (e9f.mesg2) {
            a8i.y9p(this.byd4h, "f-hide");
            this.byd4h.innerHTML = e9f.mesg2 || ""
        } else {
            a8i.w9n(this.byd4h, "f-hide")
        }
    }
    ;
    b9i.bB0x = function() {
        this.bG0x()
    }
    ;
    b9i.bmQ2x = function(d9g) {
        this.z9q("onnotice");
        this.bq0x()
    }
    ;
    n9e.eN2x = function(e9f) {
        if (this.AE9v) {
            this.AE9v.T0x();
            delete this.AE9v
        }
        this.AE9v = n9e.bGn6h.A9r(e9f);
        this.AE9v.J0x()
    }
}
)();
(function() {
    var c9h = NEJ.P, h9c = c9h("nej.v"), I0x = c9h("nej.ut"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), n9e = c9h("nm.l"), k9b = c9h("nej.u"), b9i, K0x;
    q9h.fp2x({
        "comment-list": {
            url: "/api/v1/resource/comments/{rid}",
            format: function(Q0x, e9f) {
                this.z9q("oncantopcomments", Q0x.isMusician && Q0x.cnum > 0);
                if (Q0x.currentComment) {
                    this.uJ7C("comment_cur-" + e9f.data.rid, [Q0x.currentComment])
                }
                if (Q0x.topComments) {
                    Q0x.hotComments = Q0x.topComments.concat(Q0x.hotComments || [])
                }
                if (Q0x.hotComments) {
                    this.uJ7C("comment_hot-" + e9f.data.rid, Q0x.hotComments)
                }
                if (/R_SO_(\d)_(\d+)/.test(e9f.data.rid))
                    this.coU6O(Q0x.comments, RegExp.$2);
                var Gn0x = Q0x.comments || [];
                if (Q0x.more && Gn0x.length < e9f.data.limit) {
                    Gn0x.length = e9f.data.limit
                }
                return {
                    total: Q0x.total || 0,
                    list: Gn0x
                }
            },
            finaly: function(d9g) {
                h9c.z9q(q9h.rD5I, "listchange", d9g)
            }
        },
        "comment-add": {
            url: "/api/resource/comments/add",
            format: function(Q0x, e9f) {
                n9e.Z0x.J0x({
                    tip: "评论成功"
                });
                return Q0x.comment
            },
            finaly: function(d9g) {
                h9c.z9q(q9h.rD5I, "listchange", d9g)
            },
            onmessage: function(bZ0x, m9d) {
                var cP1x = "评论失败";
                if (bZ0x == 407) {
                    n9e.Z0x.J0x({
                        tip: "评论成功"
                    });
                    h9c.z9q(q9h.rD5I, "listchange", {
                        action: "add"
                    });
                    return
                } else if (bZ0x == 404) {
                    cP1x = "评论的资源已被删除"
                } else if (bZ0x == 315) {
                    cP1x = "根据对方设置，你没有该操作权限"
                } else if (bZ0x == 405) {
                    cP1x = m9d.message || "评论过于频繁"
                } else if (bZ0x == 250) {
                    cP1x = m9d.message || m9d.msg || "评论异常"
                } else if (bZ0x == 512) {
                    l9c.iE3x(m9d.ext.msg);
                    return
                }
                n9e.Z0x.J0x({
                    tip: cP1x,
                    type: 2
                })
            }
        },
        "comment-del": {
            url: "/api/resource/comments/delete",
            filter: function(dO1x, bi0x) {
                if (dO1x.data.type == "hot") {
                    bi0x.url = "/api/report/reportcomment";
                    dO1x.data.reason = "段子或无意义的评论";
                    dO1x.data.type = 0
                } else if (dO1x.data.type == "admin") {
                    bi0x.url = "/api/comment/delete"
                } else {
                    bi0x.url = "/api/resource/comments/delete"
                }
            },
            format: function(Q0x, e9f) {
                var CE9v = this.hH2x("comment_hot-" + e9f.data.threadId)
                  , r9i = k9b.dm1x(CE9v, function(p9g) {
                    return p9g.commentId == e9f.data.commentId
                });
                if (r9i != -1) {
                    CE9v.splice(r9i, 1)
                }
                if (e9f.data.type == "hot" || k9b.tg6a(e9f.data.type)) {
                    var p9g = this.eO2x(e9f.data.commentId);
                    if (p9g) {
                        p9g.isRemoveHotComment = true
                    }
                    h9c.z9q(q9h.rD5I, "listchange", {
                        action: "refresh",
                        key: e9f.key
                    });
                    n9e.Z0x.J0x({
                        tip: "已从精彩评论中移除",
                        type: 1
                    });
                    return null
                }
                return this.eO2x(e9f.data.commentId)
            },
            finaly: function(d9g) {
                h9c.z9q(q9h.rD5I, "listchange", d9g)
            },
            onmessage: function(bZ0x) {
                n9e.Z0x.J0x({
                    tip: "评论删除失败",
                    type: 2
                })
            }
        },
        "comment-update": {
            url: "/api/v1/comment/like",
            filter: function(e9f, bi0x) {
                if (e9f.data.like) {
                    bi0x.url = "/api/v1/comment/like"
                } else {
                    bi0x.url = "/api/v1/comment/unlike"
                }
            },
            format: function(Q0x, e9f) {
                var rW6Q = this.eO2x(e9f.data.commentId);
                rW6Q.liked = e9f.data.like;
                rW6Q.likedCount = rW6Q.likedCount || 0;
                rW6Q.likedCount = rW6Q.likedCount + (rW6Q.liked ? 1 : -1);
                return rW6Q
            },
            finaly: function(d9g) {
                d9g.action = "refresh";
                h9c.z9q(q9h.rD5I, "listchange", d9g)
            },
            onmessage: function(bZ0x, m9d) {
                if (bZ0x == 315) {
                    n9e.Z0x.J0x({
                        tip: "根据对方设置，你没有该操作权限",
                        type: 2
                    })
                } else if (bZ0x == 250) {
                    n9e.Z0x.J0x({
                        tip: m9d.message || "点赞异常",
                        type: 2
                    })
                } else {
                    n9e.Z0x.J0x({
                        tip: "操作失败",
                        type: 2
                    })
                }
            }
        },
        "comment-reply": {
            url: "/api/v1/resource/comments/reply",
            format: function(Q0x, e9f) {
                return Q0x.comment
            },
            finaly: function(d9g, e9f) {
                h9c.z9q(q9h.rD5I, "listchange", d9g);
                n9e.Z0x.J0x({
                    tip: "回复成功"
                })
            },
            onmessage: function(bZ0x, m9d) {
                if (bZ0x == 407) {
                    n9e.Z0x.J0x({
                        tip: "回复成功"
                    });
                    this.z9q("onreply")
                } else if (bZ0x == 315) {
                    n9e.Z0x.J0x({
                        tip: "根据对方设置，你没有该操作权限",
                        type: 2
                    })
                } else if (bZ0x == 250) {
                    n9e.Z0x.J0x({
                        tip: m9d.message || "评论异常",
                        type: 2
                    })
                } else {
                    n9e.Z0x.J0x({
                        tip: "回复失败，请稍后再试",
                        type: 2
                    })
                }
            }
        },
        "comment-top": {
            url: "/api/v1/resource/comments/musician/topcomment",
            finaly: function(d9g, e9f) {
                if (d9g.stopped) {
                    return
                }
                h9c.z9q(q9h.rD5I, "listchange", d9g);
                n9e.Z0x.J0x({
                    tip: e9f.data.audit == 1 ? "取消置顶成功" : "置顶成功"
                })
            },
            onmessage: function(bZ0x, m9d) {
                var Q0x = m9d.ext || {};
                if (bZ0x == -3) {
                    var Gn0x = Q0x.topComments
                      , bGl6f = []
                      , bz0x = {};
                    if (Gn0x && Gn0x.length) {
                        k9b.bd0x(Gn0x, function(p9g, r9i) {
                            if (!bz0x[p9g.threadId]) {
                                bGl6f.push(p9g.type + "《" + k9b.dI1x(p9g.name) + "》");
                                bz0x[p9g.threadId] = true
                            }
                        })
                    } else {
                        cQ1x = "其余资源"
                    }
                    n9e.eN2x({
                        mesg: '<span style="line-height:20px;" class="f-fw0">' + bGl6f.join("、") + "<br/>使用了置顶权限，取消后再操作新评论</span>",
                        type: "noicon",
                        title: "提示"
                    })
                } else if (bZ0x == -2) {
                    n9e.Z0x.J0x({
                        tip: "该条评论已经置顶",
                        type: 2
                    })
                } else {
                    n9e.Z0x.J0x({
                        tip: "操作失败，请稍后再试",
                        type: 2
                    })
                }
            }
        }
    });
    q9h.rD5I = NEJ.C();
    b9i = q9h.rD5I.N0x(q9h.hE2x);
    b9i.cv0x = function() {
        this.cD1x();
        this.kN3x = q9h.hP2x.A9r()
    }
    ;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f)
    }
    ;
    b9i.bB0x = function() {
        this.bG0x()
    }
    ;
    b9i.byl4p = function(e9f) {
        e9f.onload = this.Gh0x.f9e(this, e9f);
        this.cm0x("comment-reply", e9f)
    }
    ;
    b9i.Gh0x = function(e9f, p9g) {
        e9f.key = "comment-" + e9f.data.threadId;
        var d9g = this.Ae9V(e9f, p9g);
        this.z9q("onreply", d9g);
        return d9g
    }
    ;
    b9i.byp4t = function(e9f) {
        if (!e9f.onload) {
            e9f.onload = this.coi6c.f9e(this, e9f)
        }
        this.cm0x("comment-top", e9f)
    }
    ;
    b9i.coi6c = function(e9f, p9g) {
        return {
            action: "top"
        }
    }
    ;
    b9i.coU6O = function(j9a, cof6Z) {
        var m9d = [];
        if (!j9a || !j9a.length)
            return;
        k9b.bd0x(j9a, function(coe6Y) {
            var Q0x = {
                type: "song",
                cid: coe6Y.commentId,
                sourceid: cof6Z
            };
            m9d.push({
                action: "commentimpress",
                json: Q0x
            })
        }, this);
        this.kN3x.YL7E(m9d)
    }
    ;
    b9i.bUp1x = function(p9g, bcw9n) {
        p9g.topCommentId = p9g.topCommentId || 0
    }
    ;
    I0x.fK2x.A9r({
        element: q9h.rD5I,
        event: "listchange"
    })
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), dz1x = c9h("nej.p"), bc0x = c9h("nej.ui"), v9m = c9h("nej.j"), l9c = c9h("nm.x"), q9h = c9h("nm.d"), n9e = c9h("nm.l"), x9o = c9h("nm.w"), gC2x = c9h("nm.ut"), b9i, K0x;
    x9o.Cy9p = NEJ.C();
    b9i = x9o.Cy9p.N0x(bc0x.eo1x);
    K0x = x9o.Cy9p.cr0x;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.eC1x = e9f.type || 1;
        if (a8i.ij3x("program-data")) {
            this.gF2x = JSON.parse(a8i.ij3x("program-data"))
        }
        this.eh1x = e9f.resource || {};
        this.sp6j = a8i.nY4c(a8i.cc0x("m-wgt-input-" + this.eC1x, {
            placeholder: e9f.placeholder || ""
        }));
        this.bGf6Z = e9f.type == 2 ? true : false;
        var j9a = a8i.E0x(this.sp6j, "j-flag");
        this.gv2x = j9a[0];
        this.bxJ4N = a8i.E0x(this.sp6j, "btns")[0];
        this.ma4e = j9a[3];
        this.coc6W = j9a[4];
        a8i.gQ2x(this.gv2x, "holder");
        if (a8i.bE0x(this.gv2x.parentNode, "holder-parent")) {
            a8i.ba0x(this.gv2x.parentNode, "display", "block")
        }
        this.gv2x.value = e9f.input || "";
        this.o9f.appendChild(this.sp6j);
        this.oU5Z = {
            start: 0,
            end: 0
        };
        if (!e9f.nomention) {
            this.hK2x = x9o.TB6v.A9r({
                parent: document.body,
                target: this.gv2x
            })
        } else {
            a8i.ba0x(j9a[2], "display", "none")
        }
        this.byH5M = e9f.numLimit || 140;
        this.gt2x();
        this.coa6U();
        this.bX0x([[this.ma4e, "click", this.uI7B.f9e(this)], [j9a[2], "click", this.bxQ4U.f9e(this)], [j9a[1], "click", this.bxU4Y.f9e(this)], [this.gv2x, "focus", this.lv4z.f9e(this)], [this.gv2x, "blur", this.ow4A.f9e(this)], [this.gv2x, "input", this.eQ2x.f9e(this)], [this.gv2x, "keyup", this.vb7U.f9e(this)], [this.gv2x, "click", this.mk4o.f9e(this)]]);
        if (!k9b.gO2x(e9f.onbeforesubmit))
            this.s9j("onbeforesubmit", this.cnZ6T.f9e(this));
        if (!k9b.gO2x(e9f.onloading))
            this.s9j("onloading", this.cnU6O.f9e(this))
    }
    ;
    b9i.bB0x = function() {
        this.gv2x.value = "";
        if (this.hx2x) {
            this.hx2x.T0x();
            delete this.hx2x
        }
        if (this.hK2x) {
            this.hK2x.T0x();
            delete this.hK2x
        }
        this.bG0x();
        a8i.cO1x(this.sp6j)
    }
    ;
    b9i.cnZ6T = function() {
        var C0x = this.gv2x.value;
        if (this.ma4e.className.indexOf("dis") >= 0)
            return;
        if (!this.Gi0x() || !this.Cr9i())
            return;
        if (l9c.kp3x(C0x)) {
            n9e.Z0x.J0x({
                type: 2,
                tip: "输入点内容再提交吧"
            });
            return
        }
        if (k9b.fN2x(C0x) > 2 * this.byH5M) {
            n9e.Z0x.J0x({
                type: 2,
                tip: "输入不能超过" + this.byH5M + "个字符"
            });
            return
        }
        return !0
    }
    ;
    b9i.cnU6O = function() {
        a8i.w9n(this.ma4e, "u-btn-1-dis");
        if (this.ma4e.innerText.indexOf("...") < 0) {
            this.ma4e.innerText = this.ma4e.innerText + "..."
        }
        this.uE7x = !0
    }
    ;
    b9i.Ac9T = function() {
        if (!this.uE7x)
            return;
        this.uE7x = !1;
        a8i.y9p(this.ma4e, "u-btn-1-dis");
        var cL1x = this.ma4e.innerText;
        this.ma4e.innerText = cL1x.substring(0, cL1x.length - 3)
    }
    ;
    b9i.mk4o = function() {
        this.oU5Z = gC2x.vt7m(this.gv2x)
    }
    ;
    b9i.uI7B = function(hV2x) {
        h9c.bf0x(hV2x);
        var C0x = this.gv2x.value;
        if (!this.z9q("onbeforesubmit", {
            value: C0x
        }))
            return;
        if (this.eC1x != 4)
            this.z9q("onloading");
        gC2x.bLw8o(C0x);
        if (this.hK2x) {
            this.hK2x.Eq0x()
        }
        if (this.hx2x) {
            this.hx2x.bq0x()
        }
        this.z9q("onsubmit", C0x);
        this.gt2x();
        return false
    }
    ;
    b9i.qJ5O = function() {
        this.gv2x.value = "";
        this.gt2x()
    }
    ;
    b9i.ga2x = function() {
        return this.gv2x.value || ""
    }
    ;
    b9i.mF4J = function() {
        var ja3x = this.gv2x;
        var u9l = a8i.t9k(ja3x, "type");
        this.ng4k = u9l;
        if (!this.Cr9i())
            return;
        var bs0x = this.ga2x().length;
        this.gv2x.focus();
        gC2x.YP7I(this.gv2x, {
            start: bs0x,
            end: bs0x
        });
        this.mk4o()
    }
    ;
    b9i.bxQ4U = function(d9g) {
        h9c.bf0x(d9g);
        if (!this.Cr9i())
            return;
        !!this.hx2x && this.hx2x.bq0x();
        this.hK2x.TD6x();
        this.gt2x()
    }
    ;
    b9i.bxU4Y = function(d9g) {
        h9c.bf0x(d9g);
        if (!this.Cr9i())
            return;
        if (!this.hx2x) {
            this.hx2x = n9e.LP2x.A9r({
                parent: this.bxJ4N,
                rightwards: this.eC1x == 6
            });
            this.hx2x.s9j("onselect", this.zD8v.f9e(this));
            a8i.ba0x(this.hx2x.md4h().parentNode, "position", "relative")
        }
        this.hx2x.J0x();
        this.z9q("onemotlayershow");
        if (this.hK2x) {
            this.hK2x.Eq0x()
        }
    }
    ;
    b9i.zD8v = function(d9g) {
        var bp0x = "[" + d9g.text + "]";
        h9c.z9q(this.gv2x, "focus");
        this.gv2x.focus();
        gC2x.Mw2x(this.gv2x, this.oU5Z, bp0x);
        this.gt2x();
        h9c.z9q(this.gv2x, "keyup")
    }
    ;
    b9i.eQ2x = function(d9g) {
        dz1x.ds1x.browser == "ie" && dz1x.ds1x.version < "7.0" ? setTimeout(this.gt2x.f9e(this), 0) : this.gt2x()
    }
    ;
    b9i.vb7U = function(d9g) {
        this.mk4o();
        if (this.bGf6Z)
            this.cnN6H();
        this.eQ2x()
    }
    ;
    b9i.Gi0x = function() {
        if (!GUser || !GUser.userId || GUser.userId < 0) {
            top.login();
            return
        }
        return true
    }
    ;
    b9i.lv4z = function(d9g) {
        var g9d = h9c.X0x(d9g, "d:type");
        var u9l = a8i.t9k(g9d, "type");
        this.ng4k = u9l;
        if (!this.Gi0x()) {
            this.gv2x.blur();
            return
        }
        if (!this.Cr9i()) {
            this.gv2x.blur();
            return
        }
        this.z9q("onfocus")
    }
    ;
    b9i.ow4A = function() {
        this.z9q("onblur")
    }
    ;
    b9i.gt2x = function() {
        var bs0x = this.byH5M - Math.ceil(k9b.fN2x(this.gv2x.value) / 2);
        this.coc6W.innerHTML = bs0x >= 0 ? bs0x : '<em class="s-fc6">' + bs0x + "</em>"
    }
    ;
    b9i.cnN6H = function() {
        var FJ0x = 76;
        var cnI6C = function() {
            if (parseInt(cg0x) > FJ0x) {
                a8i.ba0x(this.gv2x, "height", "auto");
                a8i.ba0x(this.gv2x, "height", FJ0x + "px");
                a8i.ba0x(this.gv2x, "overflowY", "scroll")
            } else {
                a8i.ba0x(this.gv2x, "height", "auto");
                a8i.ba0x(this.gv2x, "height", cg0x);
                a8i.ba0x(this.gv2x, "overflowY", "hidden")
            }
        }
        .f9e(this);
        var uF7y = function(string, number) {
            for (var i = 0, r = ""; i < number; i++)
                r += string;
            return r
        };
        this.Jx1x.innerHTML = this.gv2x.value.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/\n$/, "<br/>&nbsp;").replace(/\n/g, "<br/>").replace(/ {2,}/g, function(space) {
            return uF7y("&nbsp;", space.length - 1) + " "
        }) + "&nbsp";
        var cg0x = this.Jx1x.offsetHeight > this.Jw1x ? this.Jx1x.offsetHeight : this.Jw1x;
        cg0x += "px";
        var cKW1x = a8i.di1x(this.gv2x, "height");
        setTimeout(cnI6C, 10)
    }
    ;
    b9i.VL6F = function() {
        var qp5u = ["overflowX", "overflowY", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < qp5u.length; i++) {
            a8i.ba0x(this.Jx1x, qp5u[i], a8i.di1x(this.gv2x, qp5u[i]))
        }
        var cG1x = this.gv2x.offsetWidth - parseInt(a8i.di1x(this.gv2x, "paddingLeft")) - parseInt(a8i.di1x(this.gv2x, "paddingRight")) + "px";
        a8i.ba0x(this.Jx1x, "width", cG1x)
    }
    ;
    b9i.coa6U = function() {
        if (this.bGf6Z) {
            if (!a8i.E0x(document.body, "shadow-textarea")[0]) {
                var dU1x = '<div style="position:absolute;border: none;left:-10000px;word-wrap: break-word;overflow: hidden;resize:none" class="shadow-textarea"></div>';
                var g9d = a8i.nY4c(dU1x);
                document.body.appendChild(g9d);
                this.Jx1x = a8i.E0x(document.body, "shadow-textarea")[0]
            } else {
                this.Jx1x = a8i.E0x(document.body, "shadow-textarea")[0]
            }
            this.Jw1x = parseInt(a8i.di1x(this.gv2x, "height"));
            a8i.ba0x(this.gv2x, "overflow", "hidden");
            this.VL6F()
        }
    }
    ;
    b9i.Cr9i = function() {
        var d9g = {};
        if (this.gF2x && this.gF2x.buyed != true && this.gF2x.programFeeType >= 10 || this.gF2x && this.gF2x.buyed != true && this.gF2x.programFeeType == 5 && this.gF2x.radio.radioFeeType == 2 || this.gF2x && this.gF2x.buyed != true && this.gF2x.radio.feeScope == 1 && !(this.gF2x.radio.radioFeeType == 0 && this.ng4k == 11)) {
            var bkc1x = this.gF2x.radio.id
              , bkb1x = "djradio";
            l9c.bjL1x({
                id: bkc1x,
                radiotype: bkb1x
            })
        } else {
            this.z9q("oncheckvalid", d9g);
            return !d9g.stopped
        }
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), bc0x = c9h("nej.ui"), I0x = c9h("nej.ut"), k9b = c9h("nej.u"), l9c = c9h("nm.x"), q9h = c9h("nm.d"), x9o = c9h("nm.w"), n9e = c9h("nm.l"), b9i, K0x;
    x9o.Sq5v = NEJ.C();
    b9i = x9o.Sq5v.N0x(bc0x.eo1x);
    K0x = x9o.Sq5v.cr0x;
    b9i.cv0x = function() {
        this.ci0x = {
            limit: 20,
            parent: null,
            item: {
                klass: "m-wgt-comment-item",
                timeformat: l9c.zm8e,
                getRichText: l9c.xo8g,
                escape: this.cnB5G,
                getAuthIcon: l9c.bgS0x,
                getPlayCount: l9c.iQ3x,
                canTop: function() {
                    return this.cns5x && this.cna5f
                }
                .f9e(this)
            },
            pager: {
                parent: null,
                clazz: "u-page"
            },
            cache: {
                clear: true,
                lkey: "comment",
                key: "commentId",
                data: {},
                klass: q9h.rD5I,
                onerror: this.cmT5Y.f9e(this),
                oncantopcomments: function(C0x) {
                    this.cns5x = C0x
                }
                .f9e(this)
            },
            onbeforelistload: function(d9g) {
                d9g.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            },
            onemptylist: function(d9g) {
                this.bFZ6T(d9g);
                d9g.stopped = !0
            }
            .f9e(this),
            onafterlistrender: this.vk7d.f9e(this)
        };
        this.ft2x = {
            placeholder: "评论",
            parent: null,
            onsubmit: this.cmu5z.f9e(this),
            oncheckvalid: this.Cr9i.f9e(this),
            onfocus: this.cmr5w.f9e(this),
            onblur: this.cmq5v.f9e(this)
        };
        this.cD1x()
    }
    ;
    b9i.bV0x = function() {
        this.ch0x()
    }
    ;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.S0x = q9h.rD5I.A9r({
            key: "commentId",
            onreply: this.Sy5D.f9e(this),
            onerror: this.cma5f.f9e(this)
        });
        this.eh1x = l9c.cqN6H(e9f.commentThreadId) || {};
        this.sa6U = e9f.restrict;
        if (e9f.oncheckvalid) {
            this.ft2x.oncheckvalid = e9f.oncheckvalid
        }
        this.Jn1x = x9o.Cy9p.A9r(this.ft2x);
        var bv0x = k9b.hf2x(location.search.slice(1));
        if (bv0x.commentId) {
            this.ci0x.cache.data.commentId = bv0x.commentId
        }
        this.cna5f = e9f.canTop;
        this.ci0x.item.resUserId = e9f.resourceUserId;
        this.ci0x.cache.data.rid = e9f.commentThreadId;
        this.ci0x.cache.lkey = "comment-" + e9f.commentThreadId;
        if (e9f.commentCount > 0) {
            this.ci0x.cache.total = e9f.commentCount
        }
        if (!!this.dN1x)
            this.dN1x.T0x();
        this.dN1x = I0x.ks3x.A9r(this.ci0x);
        var clX5c = [[this.o9f, "click", this.eE1x.f9e(this)], [q9h.rD5I, "listchange", this.Fy0x.f9e(this)]];
        l9c.lu4y();
        this.bX0x(clX5c)
    }
    ;
    b9i.bB0x = function() {
        this.bG0x();
        this.Jn1x.T0x();
        if (this.dN1x) {
            this.dN1x.T0x();
            delete this.dN1x
        }
    }
    ;
    b9i.cnB5G = function(bp0x) {
        return k9b.dI1x((bp0x || "").replace(/\s{2,}/g, " ").trim())
    }
    ;
    b9i.Gi0x = function() {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    }
    ;
    b9i.bbv9m = NEJ.F;
    b9i.Fy0x = function(d9g) {
        var cB0x = this.dN1x.lE4I();
        if (this.ir3x)
            this.ir3x.innerText = cB0x;
        switch (d9g.action) {
        case "reply":
        case "add":
            this.Jn1x.qJ5O();
            this.Jn1x.Ac9T();
            this.z9q("onadd", {
                total: Math.max(cB0x, 0)
            });
            this.bbv9m(cB0x);
            break;
        case "delete":
            this.z9q("ondelete", {
                total: Math.max(cB0x, 0)
            });
            this.bbv9m(cB0x);
            break;
        case "update":
            break;
        case "top":
            if (!!this.dN1x)
                this.dN1x.T0x();
            this.dN1x = I0x.ks3x.A9r(this.ci0x);
            break
        }
        this.z9q("oncountchange", {
            total: Math.max(cB0x, 0)
        })
    }
    ;
    b9i.qz5E = function(D0x, clT5Y) {
        if (!this.Gi0x())
            return;
        if (!!this.rK5P) {
            this.rK5P.input.T0x();
            if (this.rK5P.attachId == D0x) {
                delete this.rK5P;
                return
            }
        }
        this.rK5P = {
            attachId: D0x,
            wrapper: a8i.dk1x("div")
        };
        var i9b = this.S0x.eO2x(D0x);
        clT5Y.insertAdjacentElement("afterEnd", this.rK5P.wrapper);
        this.rK5P.input = x9o.Cy9p.A9r({
            input: "回复" + i9b.user.nickname + ":",
            parent: this.rK5P.wrapper,
            type: 2,
            onsubmit: this.clR5W.f9e(this, D0x),
            onbeforesubmit: function(d9g) {
                var C0x = d9g.value
                  , lL4P = C0x.indexOf(":")
                  , W0x = C0x.substring(0, lL4P)
                  , bp0x = C0x.substring(lL4P + 1);
                if (W0x == "回复" + i9b.user.nickname) {
                    if (l9c.kp3x(bp0x)) {
                        n9e.Z0x.J0x({
                            type: "2",
                            tip: "输入点内容再提交吧"
                        });
                        return false
                    }
                } else if (l9c.kp3x(C0x)) {
                    n9e.Z0x.J0x({
                        type: "2",
                        tip: "输入点内容再提交吧"
                    });
                    return false
                }
                if (k9b.fN2x(C0x) > 2 * 140) {
                    n9e.Z0x.J0x({
                        type: "2",
                        tip: "输入不能超过140个字符"
                    });
                    return false
                }
                return true
            }
        });
        this.rK5P.input.mF4J()
    }
    ;
    b9i.clR5W = function(D0x, C0x) {
        l9c.nb4f(this.kV3x.f9e(this));
        this.uq6k = {
            id: D0x,
            value: C0x
        }
    }
    ;
    b9i.clQ5V = function(D0x, C0x, cs0x) {
        var i9b = this.S0x.eO2x(D0x)
          , lL4P = C0x.indexOf(":")
          , W0x = C0x.substring(0, lL4P)
          , bp0x = C0x.substring(lL4P + 1);
        if (W0x == "回复" + i9b.user.nickname) {
            this.S0x.byl4p({
                key: "comment",
                data: {
                    commentId: D0x,
                    threadId: this.ci0x.cache.data.rid,
                    content: bp0x,
                    checkToken: cs0x || ""
                },
                ext: {
                    index: this.dN1x.bOe8W() ? this.dN1x.bOe8W().tR6L() : 0
                }
            })
        } else {
            this.dN1x.ur6l({
                threadId: this.ci0x.cache.data.rid,
                content: C0x,
                checkToken: cs0x || ""
            })
        }
    }
    ;
    b9i.Sy5D = function(d9g) {
        this.rK5P.input.Ac9T();
        this.rK5P.input.T0x();
        a8i.cO1x(this.rK5P.wrapper);
        delete this.rK5P
    }
    ;
    b9i.bgN0x = function(D0x) {
        l9c.hC2x({
            btnok: "确定",
            btncc: "取消",
            message: "确定删除评论？",
            action: function(C0x) {
                if (C0x == "ok") {
                    this.dN1x.mE4I({
                        commentId: D0x,
                        threadId: this.ci0x.cache.data.rid
                    })
                }
            }
            .f9e(this)
        })
    }
    ;
    b9i.clC5H = function(D0x) {
        l9c.hC2x({
            btnok: "确定",
            btncc: "取消",
            message: "确定移除精彩评论？",
            action: function(C0x) {
                if (C0x == "ok") {
                    this.dN1x.mE4I({
                        type: "hot",
                        commentId: D0x,
                        threadId: this.ci0x.cache.data.rid
                    })
                }
            }
            .f9e(this)
        })
    }
    ;
    b9i.clA5F = function(D0x) {
        this.S0x.byp4t({
            data: {
                commentid: D0x,
                threadid: this.ci0x.cache.data.rid,
                audit: 0
            }
        })
    }
    ;
    b9i.clp5u = function(D0x, hY2x) {
        this.S0x.byp4t({
            data: {
                commentid: D0x,
                threadid: this.ci0x.cache.data.rid,
                audit: 1,
                topcommentid: hY2x
            }
        })
    }
    ;
    b9i.clm5r = function(D0x, hY2x) {
        this.S0x.byp4t({
            data: {
                commentid: D0x,
                threadid: this.ci0x.cache.data.rid,
                audit: 1,
                topcommentid: hY2x
            },
            onload: function(D0x) {
                this.dN1x.mE4I({
                    commentId: D0x,
                    threadId: this.ci0x.cache.data.rid
                });
                return {
                    stopped: true
                }
            }
            .f9e(this, D0x)
        })
    }
    ;
    b9i.cmr5w = function() {
        this.z9q("onfocus")
    }
    ;
    b9i.cmq5v = function() {
        this.z9q("onblur")
    }
    ;
    b9i.eE1x = function(d9g) {
        var g9d = h9c.X0x(d9g, "d:type")
          , u9l = a8i.t9k(g9d, "type")
          , D0x = a8i.t9k(g9d, "id")
          , hY2x = a8i.t9k(g9d, "tid");
        this.z9q("onclick", d9g);
        if (d9g.stoped)
            return;
        switch (u9l) {
        case "reply":
            if (!this.Cr9i({}))
                return;
            this.qz5E(D0x, h9c.X0x(d9g, "c:itm"));
            h9c.bf0x(d9g);
            break;
        case "delete":
            if (hY2x) {
                l9c.hC2x({
                    btnok: "确定",
                    okstyle: "u-btn2 u-btn2-2 u-btn2-w4",
                    btncc: "取消",
                    message: "确定要取消置顶并删除这条评论吗？",
                    action: function(C0x) {
                        if (C0x == "ok") {
                            this.clm5r(D0x, hY2x)
                        }
                    }
                    .f9e(this)
                })
            } else {
                this.bgN0x(D0x)
            }
            break;
        case "unlike":
        case "like":
            if (!this.Gi0x())
                return;
            this.bbe9V = {
                commentId: D0x,
                threadId: this.ci0x.cache.data.rid,
                like: u9l == "like"
            };
            l9c.nb4f(this.kV3x.f9e(this));
            this.z9q("onlikeclick", {
                action: u9l,
                threadId: this.ci0x.cache.data.rid,
                commentId: D0x
            });
            break;
        case "reject":
            this.clC5H(D0x);
            break;
        case "admindelete":
            l9c.hC2x({
                btnok: "确定",
                btncc: "取消",
                message: "确定删除评论？",
                action: function(C0x) {
                    if (C0x == "ok") {
                        this.dN1x.mE4I({
                            type: "admin",
                            commentId: D0x,
                            threadId: this.ci0x.cache.data.rid
                        })
                    }
                }
                .f9e(this)
            });
        case "gotop":
            this.clA5F(D0x);
            break;
        case "canceltop":
            l9c.hC2x({
                btnok: "解除置顶",
                okstyle: "u-btn2 u-btn2-2 u-btn2-w4",
                btncc: "取消",
                message: "确定不再置顶该评论？",
                action: function(C0x) {
                    if (C0x == "ok") {
                        this.clp5u(D0x, hY2x)
                    }
                }
                .f9e(this)
            });
            break;
        default:
            break
        }
    }
    ;
    b9i.kV3x = function(cs0x) {
        if (this.dN1x && this.bbe9V) {
            this.bbe9V.checkToken = cs0x || "";
            this.dN1x.qD5I(this.bbe9V);
            delete this.bbe9V
        } else if (this.uq6k) {
            this.clQ5V(this.uq6k.id, this.uq6k.value, cs0x || "");
            delete this.cLd1x
        } else if (this.bbc9T) {
            this.bbc9T.checkToken = cs0x || "";
            this.dN1x.ur6l(this.bbc9T);
            delete this.bbc9T
        }
    }
    ;
    b9i.cmu5z = function(C0x) {
        if (!this.Gi0x() || l9c.kp3x(C0x))
            return;
        this.bbc9T = {
            threadId: this.ci0x.cache.data.rid,
            content: C0x
        };
        l9c.nb4f(this.kV3x.f9e(this));
        this.z9q("onaddclick")
    }
    ;
    b9i.cmT5Y = function() {
        this.Jn1x.Ac9T()
    }
    ;
    b9i.cma5f = function() {
        if (this.rK5P)
            this.rK5P.input.Ac9T()
    }
    ;
    b9i.mF4J = function() {
        a8i.ny4C(this.go2x);
        this.Jn1x.mF4J()
    }
    ;
    b9i.vk7d = function(d9g) {
        if (d9g.offset == 0) {
            this.bFZ6T(d9g)
        }
        this.z9q("onafterlistrender", d9g)
    }
    ;
    b9i.bFZ6T = function(d9g) {
        var jP3x, dU1x = "", es1x = '<h3 class="u-hd4">{title}({count})</h3>', bba9R = this.S0x.hH2x("comment_cur-" + this.ci0x.cache.data.rid), CE9v = this.S0x.hH2x("comment_hot-" + this.ci0x.cache.data.rid), bFS6M = l9c.bcU9L(es1x, {
            count: this.dN1x.lE4I(),
            title: "最新评论"
        });
        if (bba9R.length || CE9v.length || this.ci0x.cache.data.commentId) {
            if (bba9R.length) {
                jP3x = {
                    beg: 0,
                    end: bba9R.length - 1,
                    xlist: bba9R
                };
                dU1x = '<h3 class="u-hd4">当前评论</h3>' + a8i.cc0x(this.ci0x.item.klass, NEJ.X(jP3x, this.ci0x.item)) + "<br>";
                a8i.ny4C(this.o9f)
            } else if (this.ci0x.cache.data.commentId) {
                dU1x = '<h3 class="u-hd4">当前评论</h3><div class="m-dlist"><div class="src src-empty f-cb"><span class="s-fc4">该评论已删除</span></div></div><br>';
                a8i.ny4C(this.o9f)
            }
            if (CE9v.length) {
                jP3x = {
                    beg: 0,
                    end: CE9v.length - 1,
                    xlist: CE9v,
                    hot: true
                };
                dU1x = dU1x + l9c.bcU9L('<h3 class="u-hd4">{title}</h3>', {
                    count: CE9v.length,
                    title: "精彩评论"
                }) + a8i.cc0x(this.ci0x.item.klass, NEJ.X(jP3x, this.ci0x.item)) + "<br>"
            }
            d9g.parent.insertAdjacentHTML("afterBegin", dU1x + "<br>" + (this.dN1x.lE4I() > 0 ? bFS6M : ""))
        } else {
            if (this.dN1x.lE4I() > 0) {
                d9g.parent.insertAdjacentHTML("afterBegin", bFS6M)
            }
        }
    }
    ;
    b9i.Cr9i = function(d9g) {
        if (this.sa6U) {
            if (this.sa6U.cp > 0) {
                return true
            } else {
                if (this.sa6U.fee > 0) {
                    if (this.sa6U.st != null && this.sa6U.st < 0) {
                        l9c.iE3x(null, null, null, true, {
                            id: this.sa6U.songId,
                            privilege: this.sa6U
                        })
                    } else {
                        l9c.wc7V(this.sa6U.fee, this.sa6U.songId, this.sa6U.type, null, this.sa6U)
                    }
                } else {
                    if (this.eh1x && this.eh1x.type == 18 && this.sa6U.toast) {
                        l9c.iE3x(null, null, null, true, {
                            id: this.eh1x.id,
                            privilege: this.sa6U
                        })
                    } else {
                        l9c.iE3x()
                    }
                }
                d9g.stopped = true;
                return false
            }
        } else {
            return true
        }
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), bc0x = c9h("nej.ui"), I0x = c9h("nej.ut"), k9b = c9h("nej.u"), l9c = c9h("nm.x"), q9h = c9h("nm.d"), x9o = c9h("nm.w"), b9i, K0x;
    x9o.xs8k = NEJ.C();
    b9i = x9o.xs8k.N0x(x9o.Sq5v);
    K0x = x9o.xs8k.cr0x;
    b9i.cv0x = function() {
        this.cD1x()
    }
    ;
    b9i.bV0x = function() {
        this.ch0x();
        var j9a = a8i.E0x(this.o9f, "j-flag");
        this.ir3x = j9a[0];
        this.ft2x.parent = j9a[1];
        this.ci0x.parent = j9a[2];
        this.ci0x.pager.parent = j9a[3]
    }
    ;
    b9i.cf0x = function() {
        this.ce0x = "m-wgt-comment"
    }
    ;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.ir3x.innerText = e9f.commentCount || 0
    }
}
)();
(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a)
                    return a(o, !0);
                if (i)
                    return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND",
                f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++)
        s(r[o]);
    return s
}
)({
    1: [function(require, module, exports) {}
    , {}],
    2: [function(require, module, exports) {
        ((function(global) {
            var topLevel = typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : {};
            var minDoc = require("min-document");
            var doccy;
            if (typeof document !== "undefined") {
                doccy = document
            } else {
                doccy = topLevel["__GLOBAL_DOCUMENT_CACHE@4"];
                if (!doccy) {
                    doccy = topLevel["__GLOBAL_DOCUMENT_CACHE@4"] = minDoc
                }
            }
            module.exports = doccy
        }
        )).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }
    , {
        "min-document": 1
    }],
    3: [function(require, module, exports) {
        ((function(global) {
            var win;
            if (typeof window !== "undefined") {
                win = window
            } else if (typeof global !== "undefined") {
                win = global
            } else if (typeof self !== "undefined") {
                win = self
            } else {
                win = {}
            }
            module.exports = win
        }
        )).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }
    , {}],
    4: [function(require, module, exports) {
        module.exports = function(n) {
            var t = {}
              , e = [];
            n = n || this,
            n.on = function(e, r, l) {
                return (t[e] = t[e] || []).push([r, l]),
                n
            }
            ,
            n.off = function(r, l) {
                r || (t = {});
                for (var o = t[r] || e, u = o.length = l ? o.length : 0; u--; )
                    l == o[u][0] && o.splice(u, 1);
                return n
            }
            ,
            n.emit = function(r) {
                for (var l, o = t[r] || e, u = o.length > 0 ? o.slice(0, o.length) : o, i = 0; l = u[i++]; )
                    l[0].apply(l[1], e.slice.call(arguments, 1));
                return n
            }
        }
    }
    , {}],
    5: [function(require, module, exports) {
        "use strict";
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var ST6N = require("minivents");
        var SU6O = cN1x(ST6N);
        var H0x = require("../utils/dom");
        var fa2x = cN1x(H0x);
        var eY2x = require("../utils/fn");
        var iH3x = cN1x(eY2x);
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        module.exports = function(Td6X) {
            fO2x(Component, Td6X);
            function Component() {
                fW2x(this, Component);
                return fT2x(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments))
            }
            fX2x(Component, [{
                key: "el",
                value: function el() {
                    return this.bQ0x
                }
            }, {
                key: "createEl",
                value: function createEl(tagName, properties, attributes) {
                    return fa2x.default.createEl(tagName, properties, attributes)
                }
            }, {
                key: "$",
                value: function $(selector, context) {
                    return fa2x.default.$(selector, context || this.el())
                }
            }, {
                key: "$$",
                value: function $$(selector, context) {
                    return fa2x.default.$$(selector, context || this.el())
                }
            }, {
                key: "hasClass",
                value: function hasClass(classToCheck) {
                    return fa2x.default.hasClass(this.bQ0x, classToCheck)
                }
            }, {
                key: "addClass",
                value: function addClass(classToAdd) {
                    fa2x.default.addClass(this.bQ0x, classToAdd)
                }
            }, {
                key: "removeClass",
                value: function removeClass(classToRemove) {
                    fa2x.default.removeClass(this.bQ0x, classToRemove)
                }
            }, {
                key: "addEventListener",
                value: function addEventListener(node, type, callback) {
                    if (iH3x.default.isString(node)) {
                        callback = type;
                        type = node;
                        node = this.bQ0x
                    }
                    node.addEventListener(type, callback)
                }
            }, {
                key: "removeEventListener",
                value: function removeEventListener(node, type, callback) {
                    if (iH3x.default.isString(node)) {
                        callback = type;
                        type = node;
                        node = this.bQ0x
                    }
                    node.removeEventListener(type, callback)
                }
            }, {
                key: "getActionNode",
                value: function getActionNode(node) {
                    if (!node)
                        return null;
                    if (node.getAttribute && node.getAttribute("data-action"))
                        return node;
                    return this.getActionNode(node.parentNode)
                }
            }, {
                key: "getAction",
                value: function getAction(node) {
                    if (!node)
                        return null;
                    return node.getAttribute("data-action")
                }
            }]);
            return Component
        }(SU6O.default)
    }
    , {
        "../utils/dom": 29,
        "../utils/fn": 30,
        minivents: 4
    }],
    6: [function(require, module, exports) {
        "use strict";
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var gD2x = function get(object, property, receiver) {
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value"in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var gK2x = require("../component");
        var gU2x = cN1x(gK2x);
        var H0x = require("../../utils/dom");
        var fa2x = cN1x(H0x);
        var V0x = require("../../state");
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        var BR_MAP = {
            240: "标 清",
            480: "高 清",
            720: "超 清",
            1080: "1080P"
        };
        module.exports = function(gS2x) {
            fO2x(Brs, gS2x);
            function Brs(options) {
                fW2x(this, Brs);
                var P0x = fT2x(this, (Brs.__proto__ || Object.getPrototypeOf(Brs)).call(this));
                P0x.V0x = options.state;
                P0x.ep1x = options.frame;
                P0x.fi2x = options.frame.fi2x;
                P0x.ha2x = P0x.ep1x.getMedia();
                P0x.bQ0x = P0x.createEl();
                P0x.initChildren();
                P0x.onClick = P0x.onClick.bind(P0x);
                P0x.onBrChange = P0x.onBrChange.bind(P0x);
                P0x.V0x.on("change:brs", P0x.onBrChange);
                P0x.addEventListener("click", P0x.onClick);
                return P0x
            }
            fX2x(Brs, [{
                key: "createEl",
                value: function createEl() {
                    return gD2x(Brs.prototype.__proto__ || Object.getPrototypeOf(Brs.prototype), "createEl", this).call(this, "div", {
                        className: "brs ffl",
                        innerHTML: ['<div class="bridge"></div>', '<div class="current">', '<span class="j-label label">超 清</span>', "</div>", '<ul class="j-options options fhide">', "</ul>"].join("")
                    })
                }
            }, {
                key: "initChildren",
                value: function initChildren() {
                    this.baH8z = this.$(".j-label");
                    this.NI3x = this.$(".j-options")
                }
            }, {
                key: "onClick",
                value: function onClick(event) {
                    var node = this.getActionNode(event.target);
                    if (!node)
                        return;
                    var action = this.getAction(node);
                    switch (action) {
                    case "video-br":
                        this.onBrSelect(node.getAttribute("data-index"));
                        break
                    }
                }
            }, {
                key: "onBrChange",
                value: function onBrChange(state, brs) {
                    if (localStorage.getItem("brSet")) {
                        for (var i = 0; i < brs.length; i++) {
                            if (brs[i].br === JSON.parse(localStorage.getItem("brSet"))) {
                                brs[i].selected = true;
                                fa2x.default.textContent(this.baH8z, BR_MAP[brs[i].br]);
                                break
                            } else if (i === brs.length - 1) {
                                brs[0].selected = true;
                                fa2x.default.textContent(this.baH8z, BR_MAP[brs[0].br])
                            }
                        }
                    } else {
                        brs[0].selected = true;
                        fa2x.default.textContent(this.baH8z, BR_MAP[brs[0].br])
                    }
                    var frag = document.createDocumentFragment();
                    brs.forEach(function(br, i) {
                        var node = fa2x.default.createEl("li", {
                            className: "itm",
                            innerHTML: ['<span class="label">', BR_MAP[br.br], "</span>", '<a href="javascript:;" class="ffull" data-action="video-br" data-index="', i, '"></a>'].join("")
                        });
                        if (br.selected)
                            fa2x.default.addClass(node, "z-sel");
                        frag.appendChild(node)
                    });
                    frag.appendChild(fa2x.default.createEl("li", {
                        className: "arrow"
                    }));
                    this.NI3x.innerHTML = "";
                    this.NI3x.appendChild(frag);
                    if (brs.length > 1)
                        fa2x.default.removeClass(this.NI3x, "fhide")
                }
            }, {
                key: "onBrSelect",
                value: function onBrSelect(index) {
                    var Tl6f = this;
                    var brs = this.V0x.get("brs")
                      , label = this.baH8z
                      , list = this.NI3x.childNodes
                      , brBefore = void 0
                      , brAfter = void 0;
                    brs.forEach(function(br, i) {
                        if (fa2x.default.hasClass(list[i], "z-sel")) {
                            brBefore = BR_MAP[br.br].replace(/\s+/g, "")
                        }
                        br.selected = false;
                        fa2x.default.removeClass(list[i], "z-sel");
                        if (index == i) {
                            localStorage.setItem("brSet", JSON.stringify(br.br));
                            br.selected = true;
                            fa2x.default.addClass(list[i], "z-sel");
                            fa2x.default.textContent(label, BR_MAP[br.br]);
                            brAfter = BR_MAP[br.br].replace(/\s+/g, "")
                        }
                    });
                    var cn0x = {
                        page: this.V0x.get("type") == V0x.VIDEO_TYPE.MV ? "mvplay" : "videoplay",
                        id: this.V0x.get("id"),
                        isfullscreen: this.V0x.get("isFullscreen") ? 1 : 0,
                        type: "switch",
                        pre_resolution: brBefore,
                        post_resolution: brAfter
                    };
                    this.fi2x.actionLog(cn0x, "click");
                    this.ha2x.replay(this.V0x.get("time"));
                    fa2x.default.addClass(this.NI3x, "fhide");
                    setTimeout(function() {
                        return fa2x.default.removeClass(Tl6f.NI3x, "fhide")
                    }, 100)
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    this.removeEventListener("click", this.onClick)
                }
            }]);
            return Brs
        }(gU2x.default)
    }
    , {
        "../../state": 28,
        "../../utils/dom": 29,
        "../component": 5
    }],
    7: [function(require, module, exports) {
        "use strict";
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var gD2x = function get(object, property, receiver) {
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value"in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var gK2x = require("../component");
        var gU2x = cN1x(gK2x);
        var H0x = require("../../utils/dom");
        var fa2x = cN1x(H0x);
        var eY2x = require("../../utils/fn");
        var iH3x = cN1x(eY2x);
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        module.exports = function(gS2x) {
            fO2x(DurationIndicator, gS2x);
            function DurationIndicator(options) {
                fW2x(this, DurationIndicator);
                var P0x = fT2x(this, (DurationIndicator.__proto__ || Object.getPrototypeOf(DurationIndicator)).call(this));
                P0x.V0x = options.state;
                P0x.bQ0x = P0x.createEl();
                P0x.onDurationChange = P0x.onDurationChange.bind(P0x);
                P0x.V0x.on("change:duration", P0x.onDurationChange);
                return P0x
            }
            fX2x(DurationIndicator, [{
                key: "createEl",
                value: function createEl() {
                    return gD2x(DurationIndicator.prototype.__proto__ || Object.getPrototypeOf(DurationIndicator.prototype), "createEl", this).call(this, "div", {
                        className: "duration ffl",
                        innerHTML: "00:00"
                    })
                }
            }, {
                key: "onDurationChange",
                value: function onDurationChange(state, duration) {
                    fa2x.default.textContent(this.bQ0x, iH3x.default.formatSeconds(duration))
                }
            }]);
            return DurationIndicator
        }(gU2x.default)
    }
    , {
        "../../utils/dom": 29,
        "../../utils/fn": 30,
        "../component": 5
    }],
    8: [function(require, module, exports) {
        "use strict";
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var gD2x = function get(object, property, receiver) {
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value"in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var gK2x = require("../component");
        var gU2x = cN1x(gK2x);
        var eY2x = require("../../utils/fn");
        var iH3x = cN1x(eY2x);
        var H0x = require("../../utils/dom");
        var fa2x = cN1x(H0x);
        var clh5m = require("../../utils/fullscreen-api");
        var bhw0x = cN1x(clh5m);
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        module.exports = function(gS2x) {
            fO2x(FullscreenToggle, gS2x);
            function FullscreenToggle(options) {
                fW2x(this, FullscreenToggle);
                var P0x = fT2x(this, (FullscreenToggle.__proto__ || Object.getPrototypeOf(FullscreenToggle)).call(this));
                P0x.fi2x = options.core;
                P0x.V0x = options.state;
                P0x.ep1x = options.frame;
                P0x.bQ0x = P0x.createEl();
                P0x.onClick = P0x.onClick.bind(P0x);
                P0x.onFullscreenChange = P0x.onFullscreenChange.bind(P0x);
                P0x.onDocFullscreenChange = P0x.onDocFullscreenChange.bind(P0x);
                P0x.addEventListener("click", P0x.onClick);
                P0x.V0x.on("change:isFullscreen", P0x.onFullscreenChange);
                return P0x
            }
            fX2x(FullscreenToggle, [{
                key: "createEl",
                value: function createEl() {
                    return gD2x(FullscreenToggle.prototype.__proto__ || Object.getPrototypeOf(FullscreenToggle.prototype), "createEl", this).call(this, "a", {
                        className: "full ffr",
                        href: "javascript:;"
                    })
                }
            }, {
                key: "onClick",
                value: function onClick() {
                    var isFullscreen = !!this.V0x.get("isFullscreen");
                    if (isFullscreen) {
                        this.exitFullscreen()
                    } else {
                        this.requestFullscreen()
                    }
                }
            }, {
                key: "requestFullscreen",
                value: function requestFullscreen() {
                    var fsApi = bhw0x.default;
                    this.V0x.set("isFullscreen", true);
                    if (fsApi.requestFullscreen) {
                        this.addEventListener(document, fsApi.fullscreenchange, this.onDocFullscreenChange);
                        this.ep1x.requestFullscreen(fsApi.requestFullscreen)
                    }
                }
            }, {
                key: "exitFullscreen",
                value: function exitFullscreen() {
                    var fsApi = bhw0x.default;
                    this.V0x.set("isFullscreen", false);
                    if (fsApi.requestFullscreen) {
                        document[fsApi.exitFullscreen]()
                    }
                }
            }, {
                key: "onDocFullscreenChange",
                value: function onDocFullscreenChange() {
                    var fsApi = bhw0x.default;
                    if (document[fsApi.fullscreenElement]) {
                        this.V0x.set("isFullscreen", true)
                    } else {
                        this.V0x.set("isFullscreen", false);
                        this.removeEventListener(document, fsApi.fullscreenchange, this.onDocFullscreenChange)
                    }
                }
            }, {
                key: "onFullscreenChange",
                value: function onFullscreenChange() {
                    var isFullscreen = !!this.V0x.get("isFullscreen");
                    if (isFullscreen) {
                        fa2x.default.addClass(window.top.document.getElementById("g_iframe"), "fullscreen");
                        this.ep1x.addClass("z-fullscreen")
                    } else {
                        fa2x.default.removeClass(window.top.document.getElementById("g_iframe"), "fullscreen");
                        this.ep1x.removeClass("z-fullscreen")
                    }
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    this.removeEventListener("click", this.onClick)
                }
            }]);
            return FullscreenToggle
        }(gU2x.default)
    }
    , {
        "../../utils/dom": 29,
        "../../utils/fn": 30,
        "../../utils/fullscreen-api": 31,
        "../component": 5
    }],
    9: [function(require, module, exports) {
        "use strict";
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var gD2x = function get(object, property, receiver) {
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value"in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var gK2x = require("../component");
        var gU2x = cN1x(gK2x);
        var H0x = require("../../utils/dom");
        var fa2x = cN1x(H0x);
        var ckN5S = require("./progress-bar-1");
        var ckJ5O = cN1x(ckN5S);
        var ckH5M = require("./progress-bar-2");
        var ckf5k = cN1x(ckH5M);
        var bhB0x = require("./play-button");
        var bhC0x = cN1x(bhB0x);
        var cke5j = require("./time-indicator");
        var ckc5h = cN1x(cke5j);
        var ckb5g = require("./duration-indicator");
        var cjX5c = cN1x(ckb5g);
        var cjK5P = require("./fullscreen-toggle");
        var cjH5M = cN1x(cjK5P);
        var oZ5e = require("./brs");
        var cjG5L = cN1x(oZ5e);
        var cjB5G = require("./volume-bar");
        var cjw5B = cN1x(cjB5G);
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        module.exports = function(gS2x) {
            fO2x(ControlBar, gS2x);
            function ControlBar(options) {
                fW2x(this, ControlBar);
                var P0x = fT2x(this, (ControlBar.__proto__ || Object.getPrototypeOf(ControlBar)).call(this));
                P0x.fi2x = options.core;
                P0x.V0x = options.state;
                P0x.ep1x = options.frame;
                P0x.bQ0x = P0x.createEl();
                P0x.initChildren();
                P0x.onMouseDownCheckRight = P0x.onMouseDownCheckRight.bind(P0x);
                P0x.addEventListener("mousedown", P0x.onMouseDownCheckRight);
                return P0x
            }
            fX2x(ControlBar, [{
                key: "createEl",
                value: function createEl() {
                    return gD2x(ControlBar.prototype.__proto__ || Object.getPrototypeOf(ControlBar.prototype), "createEl", this).call(this, "div", {
                        className: "controls"
                    })
                }
            }, {
                key: "initChildren",
                value: function initChildren() {
                    var wrapEl = fa2x.default.createEl("div", {
                        className: "wrap",
                        innerHTML: ['<div class="j-right right"></div>', '<div class="foh">', '<div class="j-left left"></div>', '<div class="j-progress progresswrap"></div>', "</div>"].join("")
                    });
                    this.cjo5t = new ckJ5O.default({
                        frame: this.ep1x,
                        state: this.V0x
                    });
                    this.bQ0x.appendChild(this.cjo5t.el());
                    var rightEl = fa2x.default.$(".j-right", wrapEl)
                      , leftEl = fa2x.default.$(".j-left", wrapEl)
                      , progressEl = fa2x.default.$(".j-progress", wrapEl);
                    this.cjl4p = new cjX5c.default({
                        state: this.V0x
                    });
                    this.bFE6y = new cjw5B.default({
                        frame: this.ep1x,
                        state: this.V0x
                    });
                    this.oZ5e = new cjG5L.default({
                        frame: this.ep1x,
                        state: this.V0x
                    });
                    this.bhQ0x = new cjH5M.default({
                        core: this.fi2x,
                        frame: this.ep1x,
                        state: this.V0x
                    });
                    rightEl.appendChild(this.cjl4p.el());
                    rightEl.appendChild(this.bFE6y.el());
                    rightEl.appendChild(this.oZ5e.el());
                    rightEl.appendChild(this.bhQ0x.el());
                    this.cjb4f = new ckc5h.default({
                        state: this.V0x
                    });
                    this.Tw6q = new bhC0x.default({
                        core: this.fi2x
                    });
                    leftEl.appendChild(this.cjb4f.el());
                    leftEl.appendChild(this.Tw6q.el());
                    this.baj8b = new ckf5k.default({
                        frame: this.ep1x,
                        state: this.V0x
                    });
                    progressEl.appendChild(this.baj8b.el());
                    this.bQ0x.appendChild(wrapEl)
                }
            }, {
                key: "onMouseDownCheckRight",
                value: function onMouseDownCheckRight() {
                    this.ep1x.onMouseDownCheckRight()
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    this.removeEventListener("mousedown", this.onMouseDownCheckRight);
                    this.oZ5e.destroy();
                    this.bhQ0x.destroy();
                    this.Tw6q.destroy();
                    this.bFE6y.destroy();
                    this.baj8b.destroy()
                }
            }]);
            return ControlBar
        }(gU2x.default)
    }
    , {
        "../../utils/dom": 29,
        "../component": 5,
        "./brs": 6,
        "./duration-indicator": 7,
        "./fullscreen-toggle": 8,
        "./play-button": 10,
        "./progress-bar-1": 11,
        "./progress-bar-2": 12,
        "./time-indicator": 13,
        "./volume-bar": 14
    }],
    10: [function(require, module, exports) {
        "use strict";
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var gD2x = function get(object, property, receiver) {
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value"in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var gK2x = require("../component");
        var gU2x = cN1x(gK2x);
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        module.exports = function(gS2x) {
            fO2x(PlayButton, gS2x);
            function PlayButton(options) {
                fW2x(this, PlayButton);
                var P0x = fT2x(this, (PlayButton.__proto__ || Object.getPrototypeOf(PlayButton)).call(this));
                P0x.fi2x = options.core;
                P0x.bQ0x = P0x.createEl();
                P0x.onClick = P0x.onClick.bind(P0x);
                P0x.addEventListener("click", P0x.onClick);
                return P0x
            }
            fX2x(PlayButton, [{
                key: "createEl",
                value: function createEl() {
                    return gD2x(PlayButton.prototype.__proto__ || Object.getPrototypeOf(PlayButton.prototype), "createEl", this).call(this, "a", {
                        className: "play ffl",
                        href: "javascript:;"
                    })
                }
            }, {
                key: "onClick",
                value: function onClick() {
                    this.fi2x.togglePlay()
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    this.removeEventListener("click", this.onClick)
                }
            }]);
            return PlayButton
        }(gU2x.default)
    }
    , {
        "../component": 5
    }],
    11: [function(require, module, exports) {
        "use strict";
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var gD2x = function get(object, property, receiver) {
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value"in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var gK2x = require("../component");
        var gU2x = cN1x(gK2x);
        var eY2x = require("../../utils/fn");
        var iH3x = cN1x(eY2x);
        var H0x = require("../../utils/dom");
        var fa2x = cN1x(H0x);
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        module.exports = function(gS2x) {
            fO2x(ProgressBar1, gS2x);
            function ProgressBar1(options) {
                fW2x(this, ProgressBar1);
                var P0x = fT2x(this, (ProgressBar1.__proto__ || Object.getPrototypeOf(ProgressBar1)).call(this));
                P0x.V0x = options.state;
                P0x.bQ0x = P0x.createEl();
                P0x.initChildren();
                P0x.onTimeChange = P0x.onTimeChange.bind(P0x);
                P0x.onBufferChange = P0x.onBufferChange.bind(P0x);
                P0x.onToggleShow = P0x.onToggleShow.bind(P0x);
                P0x.V0x.on("change:active", P0x.onToggleShow);
                P0x.V0x.on("change:time", P0x.onTimeChange);
                P0x.V0x.on("change:buffered", P0x.onBufferChange);
                return P0x
            }
            fX2x(ProgressBar1, [{
                key: "createEl",
                value: function createEl() {
                    return gD2x(ProgressBar1.prototype.__proto__ || Object.getPrototypeOf(ProgressBar1.prototype), "createEl", this).call(this, "div", {
                        className: "progress progress-1",
                        innerHTML: ['<div class="j-out1 out out-1" style="width:0"></div>', '<div class="j-out2 out out-2" style="width:0"></div>'].join("")
                    })
                }
            }, {
                key: "initChildren",
                value: function initChildren() {
                    this.bae8W = this.$(".j-out1");
                    this.bhV0x = this.$(".j-out2")
                }
            }, {
                key: "onTimeChange",
                value: function onTimeChange(state, time) {
                    this.bae8W.style.width = time / state.get("duration") * 100 + "%"
                }
            }, {
                key: "onBufferChange",
                value: function onBufferChange(state, buffered) {
                    this.bhV0x.style.width = buffered / state.get("duration") * 100 + "%"
                }
            }, {
                key: "onToggleShow",
                value: function onToggleShow(state, active) {
                    var Tl6f = this;
                    if (active) {
                        this.addClass("fhide")
                    } else {
                        setTimeout(function() {
                            if (!state.get("active")) {
                                Tl6f.removeClass("fhide")
                            }
                        }, 400)
                    }
                }
            }]);
            return ProgressBar1
        }(gU2x.default)
    }
    , {
        "../../utils/dom": 29,
        "../../utils/fn": 30,
        "../component": 5
    }],
    12: [function(require, module, exports) {
        "use strict";
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var gD2x = function get(object, property, receiver) {
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value"in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var gK2x = require("../component");
        var gU2x = cN1x(gK2x);
        var eY2x = require("../../utils/fn");
        var iH3x = cN1x(eY2x);
        var H0x = require("../../utils/dom");
        var fa2x = cN1x(H0x);
        var V0x = require("../../state");
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        module.exports = function(gS2x) {
            fO2x(ProgressBar2, gS2x);
            function ProgressBar2(options) {
                fW2x(this, ProgressBar2);
                var P0x = fT2x(this, (ProgressBar2.__proto__ || Object.getPrototypeOf(ProgressBar2)).call(this));
                P0x.V0x = options.state;
                P0x.ep1x = options.frame;
                P0x.ha2x = P0x.ep1x.getMedia();
                P0x.bQ0x = P0x.createEl();
                P0x.initChildren();
                P0x.onMouseDown = P0x.onMouseDown.bind(P0x);
                P0x.onMouseUp = iH3x.default.throttle(P0x.onMouseUp.bind(P0x), 25);
                P0x.onMouseMove = iH3x.default.throttle(P0x.onMouseMove.bind(P0x), 25);
                P0x.onTimeChange = iH3x.default.throttle(P0x.onTimeChange.bind(P0x), 25);
                P0x.onTimeHover = iH3x.default.throttle(P0x.onTimeHover.bind(P0x), 25);
                P0x.onBufferChange = P0x.onBufferChange.bind(P0x);
                P0x.V0x.on("change:time", P0x.onTimeChange);
                P0x.V0x.on("change:buffered", P0x.onBufferChange);
                P0x.addEventListener("mousedown", P0x.onMouseDown);
                P0x.addEventListener("mousemove", P0x.onTimeHover);
                return P0x
            }
            fX2x(ProgressBar2, [{
                key: "createEl",
                value: function createEl() {
                    return gD2x(ProgressBar2.prototype.__proto__ || Object.getPrototypeOf(ProgressBar2.prototype), "createEl", this).call(this, "div", {
                        className: "progress progress-2",
                        innerHTML: ['<div class="j-ht"><span class="hovertime"></span><span class="arrow"></span></div>', '<div class="j-out1 out out-1" style="width:0"><div class="in"><span class="dot"></span></div></div>', '<div class="j-out2 out out-2" style="width:0"></div>'].join("")
                    })
                }
            }, {
                key: "initChildren",
                value: function initChildren() {
                    this.BS9J = this.$(".j-ht");
                    this.ciR4V = this.$(".j-ht .hovertime");
                    this.bhY0x = this.$(".j-ht .arrow");
                    this.bae8W = this.$(".j-out1");
                    this.bhV0x = this.$(".j-out2")
                }
            }, {
                key: "onMouseDown",
                value: function onMouseDown(event) {
                    if (event.button !== 0 || this.V0x.get("playstate") === V0x.PLAY_STATE.NETERR || this.V0x.get("playstate") === V0x.PLAY_STATE.LOADING && this.V0x.get("time") === 0) {
                        return
                    }
                    var body = this.bQ0x.ownerDocument.body;
                    this.setTime = this.newTime;
                    this.BS9J.style.display = "block";
                    this.V0x.off("change:time", this.onTimeChange);
                    this.addEventListener(body, "mouseup", this.onMouseUp);
                    this.addEventListener(body, "mousemove", this.onMouseMove);
                    this.onMouseMove(event)
                }
            }, {
                key: "onMouseUp",
                value: function onMouseUp(event) {
                    var body = this.bQ0x.ownerDocument.body;
                    this.BS9J.style.display = "";
                    if (!fa2x.default.isChildOf(this.ep1x.Fe0x.el().parentNode, event.target)) {
                        this.V0x.set("active", false);
                        this.ep1x.removeClass("z-active")
                    }
                    if (this.newTime === this.V0x.get("duration")) {
                        this.newTime = this.newTime - 1
                    }
                    this.ha2x.setCurrentTime(this.newTime);
                    this.V0x.on("change:time", this.onTimeChange);
                    this.removeEventListener(body, "mouseup", this.onMouseUp);
                    this.removeEventListener(body, "mousemove", this.onMouseMove)
                }
            }, {
                key: "onMouseMove",
                value: function onMouseMove(event) {
                    var position = fa2x.default.getPointerPosition(this.bQ0x, event).x;
                    this.bae8W.style.width = position * 100 + "%";
                    this.onTimeHover(event);
                    this.V0x.set("active", true);
                    this.ep1x.addClass("z-active")
                }
            }, {
                key: "onTimeChange",
                value: function onTimeChange(state, time) {
                    this.bae8W.style.width = time / state.get("duration") * 100 + "%"
                }
            }, {
                key: "onBufferChange",
                value: function onBufferChange(state, buffered) {
                    this.bhV0x.style.width = buffered / state.get("duration") * 100 + "%"
                }
            }, {
                key: "onTimeHover",
                value: function onTimeHover(event) {
                    var position = fa2x.default.getPointerPosition(this.bQ0x, event)
                      , duration = this.V0x.get("duration");
                    this.newTime = position.x * duration;
                    if (this.newTime < 3600) {
                        this.hoverTime(position, 24, 14, 19)
                    } else {
                        this.hoverTime(position, 32, 23, 28)
                    }
                    fa2x.default.textContent(this.ciR4V, iH3x.default.formatSeconds(this.newTime))
                }
            }, {
                key: "hoverTime",
                value: function hoverTime(position, term, arrowTerm, correctArrow) {
                    var moveX = position.moveX;
                    if (moveX < 19) {
                        this.bhY0x.style.left = Math.max(moveX - 19, -15) + "px";
                        moveX = 19
                    } else if (moveX > position.boxW - term) {
                        this.bhY0x.style.left = Math.min(moveX - (position.boxW - term), arrowTerm) + "px";
                        moveX = position.boxW - term
                    } else {
                        this.bhY0x.style.left = 0 + "px"
                    }
                    this.BS9J.style.left = moveX - correctArrow + "px"
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    this.removeEventListener("mousedown", this.onMouseDown);
                    this.removeEventListener("mousemove", this.onTimeHover)
                }
            }]);
            return ProgressBar2
        }(gU2x.default)
    }
    , {
        "../../state": 28,
        "../../utils/dom": 29,
        "../../utils/fn": 30,
        "../component": 5
    }],
    13: [function(require, module, exports) {
        "use strict";
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var gD2x = function get(object, property, receiver) {
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value"in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var gK2x = require("../component");
        var gU2x = cN1x(gK2x);
        var H0x = require("../../utils/dom");
        var fa2x = cN1x(H0x);
        var eY2x = require("../../utils/fn");
        var iH3x = cN1x(eY2x);
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        module.exports = function(gS2x) {
            fO2x(TimeIndicator, gS2x);
            function TimeIndicator(options) {
                fW2x(this, TimeIndicator);
                var P0x = fT2x(this, (TimeIndicator.__proto__ || Object.getPrototypeOf(TimeIndicator)).call(this));
                P0x.V0x = options.state;
                P0x.bQ0x = P0x.createEl();
                P0x.onTimeChange = P0x.onTimeChange.bind(P0x);
                P0x.V0x.on("change:time", P0x.onTimeChange);
                return P0x
            }
            fX2x(TimeIndicator, [{
                key: "createEl",
                value: function createEl() {
                    return gD2x(TimeIndicator.prototype.__proto__ || Object.getPrototypeOf(TimeIndicator.prototype), "createEl", this).call(this, "span", {
                        className: "time",
                        innerHTML: "00:00"
                    })
                }
            }, {
                key: "onTimeChange",
                value: function onTimeChange(state, time) {
                    fa2x.default.textContent(this.bQ0x, iH3x.default.formatSeconds(time))
                }
            }]);
            return TimeIndicator
        }(gU2x.default)
    }
    , {
        "../../utils/dom": 29,
        "../../utils/fn": 30,
        "../component": 5
    }],
    14: [function(require, module, exports) {
        "use strict";
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var gD2x = function get(object, property, receiver) {
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value"in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var gK2x = require("../component");
        var gU2x = cN1x(gK2x);
        var eY2x = require("../../utils/fn");
        var iH3x = cN1x(eY2x);
        var H0x = require("../../utils/dom");
        var fa2x = cN1x(H0x);
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        module.exports = function(gS2x) {
            fO2x(VolumeBar, gS2x);
            function VolumeBar(options) {
                fW2x(this, VolumeBar);
                var P0x = fT2x(this, (VolumeBar.__proto__ || Object.getPrototypeOf(VolumeBar)).call(this));
                P0x.V0x = options.state;
                P0x.ep1x = options.frame;
                P0x.ha2x = P0x.ep1x.getMedia();
                P0x.bQ0x = P0x.createEl();
                P0x.initChildren();
                P0x.onVolumeChange = P0x.onVolumeChange.bind(P0x);
                P0x.onMuteToggle = P0x.onMuteToggle.bind(P0x);
                P0x.onMouseDown = P0x.onMouseDown.bind(P0x);
                P0x.onMouseUp = P0x.onMouseUp.bind(P0x);
                P0x.onMouseMove = iH3x.default.throttle(P0x.onMouseMove.bind(P0x), 25);
                P0x.V0x.on("change:volume", P0x.onVolumeChange);
                P0x.addEventListener(P0x.bia0x, "mousedown", P0x.onMouseDown);
                P0x.addEventListener(P0x.bFB6v, "click", P0x.onMuteToggle);
                return P0x
            }
            fX2x(VolumeBar, [{
                key: "createEl",
                value: function createEl() {
                    return gD2x(VolumeBar.prototype.__proto__ || Object.getPrototypeOf(VolumeBar.prototype), "createEl", this).call(this, "div", {
                        className: "volume ffl",
                        innerHTML: ['<a href="javascript:;" class="j-mute mute"></a>', '<div class="sliderbg">', '<div class="j-slider slider">', '<div class="j-out out" style="height:100%">', '<div class="in">', '<span class="dot"></span>', "</div>", "</div>", "</div>", '<i class="arrow"></i>', "</div>"].join("")
                    })
                }
            }, {
                key: "initChildren",
                value: function initChildren() {
                    this.bFB6v = this.$(".j-mute");
                    this.bia0x = this.$(".j-slider");
                    this.ciz4D = this.$(".j-out")
                }
            }, {
                key: "onMouseDown",
                value: function onMouseDown(event) {
                    var body = this.bQ0x.ownerDocument.body;
                    this.addEventListener(body, "mouseup", this.onMouseUp);
                    this.addEventListener(body, "mousemove", this.onMouseMove);
                    this.onMouseMove(event)
                }
            }, {
                key: "onMouseUp",
                value: function onMouseUp() {
                    var body = this.bQ0x.ownerDocument.body;
                    this.removeEventListener(body, "mouseup", this.onMouseUp);
                    this.removeEventListener(body, "mousemove", this.onMouseMove)
                }
            }, {
                key: "onMouseMove",
                value: function onMouseMove(event) {
                    var position = fa2x.default.getPointerPosition(this.bia0x, event);
                    this.ha2x.setVolume(position.y);
                    event.preventDefault()
                }
            }, {
                key: "onMuteToggle",
                value: function onMuteToggle() {
                    if (this.V0x.get("volume") > 0) {
                        this.wT8L = this.V0x.get("volume");
                        this.ha2x.setVolume(0)
                    } else {
                        this.ha2x.setVolume(this.wT8L)
                    }
                }
            }, {
                key: "onVolumeChange",
                value: function onVolumeChange(state, volume) {
                    this.ciz4D.style.height = volume * 100 + "%";
                    if (volume > 0) {
                        this.removeClass("z-mute")
                    } else {
                        this.addClass("z-mute")
                    }
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    this.removeEventListener(this.bia0x, "mousedown", this.onMouseDown);
                    this.removeEventListener(this.bFB6v, "click", this.onMuteToggle)
                }
            }]);
            return VolumeBar
        }(gU2x.default)
    }
    , {
        "../../utils/dom": 29,
        "../../utils/fn": 30,
        "../component": 5
    }],
    15: [function(require, module, exports) {
        "use strict";
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var gD2x = function get(object, property, receiver) {
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value"in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var zQ8I, bac8U;
        var gK2x = require("./component");
        var gU2x = cN1x(gK2x);
        var H0x = require("../utils/dom");
        var fa2x = cN1x(H0x);
        var eY2x = require("../utils/fn");
        var iH3x = cN1x(eY2x);
        var r9i = require("./player/index");
        var xG8y = cN1x(r9i);
        var civ4z = require("./control-bar/index");
        var cib4f = cN1x(civ4z);
        var V0x = require("../state");
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        function zP8H(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                })
            } else {
                obj[key] = value
            }
            return obj
        }
        var CLASS_MAP = (zQ8I = {},
        zP8H(zQ8I, V0x.PLAY_STATE.INIT, ""),
        zP8H(zQ8I, V0x.PLAY_STATE.LOADING, "z-loading"),
        zP8H(zQ8I, V0x.PLAY_STATE.PLAY, "z-play"),
        zP8H(zQ8I, V0x.PLAY_STATE.PAUSE, "z-pause"),
        zP8H(zQ8I, V0x.PLAY_STATE.BUFFERING, "z-buffering"),
        zP8H(zQ8I, V0x.PLAY_STATE.END, "z-end"),
        zP8H(zQ8I, V0x.PLAY_STATE.END_NEXT, "z-endnext"),
        zQ8I);
        var FAIL_CLASS_MAP = (bac8U = {},
        zP8H(bac8U, V0x.FAIL_TYPE.OTHER, "z-neterr"),
        zP8H(bac8U, V0x.FAIL_TYPE.NEEDPAY, "z-needpay"),
        bac8U);
        module.exports = function(gS2x) {
            fO2x(Frame, gS2x);
            function Frame(options) {
                fW2x(this, Frame);
                var P0x = fT2x(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).call(this));
                P0x.V0x = options.state;
                P0x.fi2x = options.core;
                P0x.bQ0x = P0x.createEl();
                P0x.initChildren();
                P0x.onMouseMove = iH3x.default.throttle(P0x.onMouseMove.bind(P0x), 25);
                P0x.onChangePlayState = P0x.onChangePlayState.bind(P0x);
                P0x.hideTools = P0x.hideTools.bind(P0x);
                P0x.onMouseDownCheckRight = P0x.onMouseDownCheckRight.bind(P0x);
                P0x.destroy = P0x.destroy.bind(P0x);
                P0x.onFullscreenChange = P0x.onFullscreenChange.bind(P0x);
                P0x.V0x.on("change:playstate", P0x.onChangePlayState);
                P0x.V0x.on("change:isFullscreen", P0x.onFullscreenChange);
                P0x.addEventListener("mousemove", P0x.onMouseMove);
                return P0x
            }
            fX2x(Frame, [{
                key: "onFullscreenChange",
                value: function onFullscreenChange() {
                    if (!!this.V0x.get("isFullscreen")) {
                        document.documentElement.style.overflowY = "hidden"
                    } else {
                        document.documentElement.style.overflowY = "scroll"
                    }
                    this.fi2x.emit("continueCountdown");
                    this.fi2x.emit("core", "fullScreenChange")
                }
            }, {
                key: "onMouseDownCheckRight",
                value: function onMouseDownCheckRight() {
                    if (!this.V0x.get("cp")) {
                        var fee = this.V0x.get("brs")[0].fee;
                        var mvFee = this.V0x.get("brs")[0].mvFee;
                        var payed = this.V0x.get("brs")[0].payed;
                        var mvId = this.V0x.get("brs")[0].mvId;
                        this.fi2x.emit("core", "fee", {
                            fee: fee,
                            mvFee: mvFee,
                            payed: payed,
                            mvId: mvId
                        })
                    }
                }
            }, {
                key: "createEl",
                value: function createEl() {
                    return gD2x(Frame.prototype.__proto__ || Object.getPrototypeOf(Frame.prototype), "createEl", this).call(this, "div", {
                        className: "m-ctvideo",
                        tabIndex: 1
                    })
                }
            }, {
                key: "initChildren",
                value: function initChildren() {
                    this.dB1x = new xG8y.default({
                        core: this.fi2x,
                        frame: this,
                        state: this.V0x
                    });
                    this.ha2x = this.dB1x.getMedia();
                    this.Fe0x = new cib4f.default({
                        core: this.fi2x,
                        frame: this,
                        state: this.V0x
                    });
                    this.bQ0x.appendChild(this.dB1x.el());
                    this.bQ0x.appendChild(this.Fe0x.el())
                }
            }, {
                key: "requestFullscreen",
                value: function requestFullscreen(api) {
                    this.bQ0x[api]()
                }
            }, {
                key: "getMedia",
                value: function getMedia() {
                    return this.ha2x
                }
            }, {
                key: "replay",
                value: function replay(time) {
                    this.ha2x.replay(time)
                }
            }, {
                key: "play",
                value: function play(time) {
                    this.ha2x.play(time);
                    this.bQ0x.focus()
                }
            }, {
                key: "pause",
                value: function pause() {
                    this.ha2x.pause()
                }
            }, {
                key: "onStalled",
                value: function onStalled(event, time) {
                    this.ha2x.onStalled(event, time)
                }
            }, {
                key: "load",
                value: function load() {
                    this.ha2x.load()
                }
            }, {
                key: "onChangePlayState",
                value: function onChangePlayState(state, playstate) {
                    if (playstate !== V0x.PLAY_STATE.PLAY || state.get("pressUp") || state.get("changeQuick")) {
                        this.showTools()
                    } else {
                        clearTimeout(this.ej1x);
                        this.ej1x = setTimeout(this.hideTools, 5e3)
                    }
                    for (var p in CLASS_MAP) {
                        this.removeClass(CLASS_MAP[p])
                    }
                    for (var O0x in FAIL_CLASS_MAP) {
                        this.removeClass(FAIL_CLASS_MAP[O0x])
                    }
                    if (playstate === V0x.PLAY_STATE.NETERR) {
                        this.addErrorClass(playstate)
                    } else {
                        this.addClass(CLASS_MAP[playstate])
                    }
                }
            }, {
                key: "addErrorClass",
                value: function addErrorClass(playstate) {
                    var failtype = void 0;
                    if (this.V0x.get("type") === V0x.VIDEO_TYPE.MV && this.V0x.get("mvstatus") === V0x.MV_STATE.MV_PAY && this.V0x.get("mvpayed") <= 0) {
                        failtype = V0x.FAIL_TYPE.NEEDPAY;
                        this.V0x.set("failtype", failtype)
                    } else {
                        failtype = V0x.FAIL_TYPE.OTHER
                    }
                    this.addClass(FAIL_CLASS_MAP[failtype])
                }
            }, {
                key: "onMouseMove",
                value: function onMouseMove(event) {
                    clearTimeout(this.ej1x);
                    this.showTools();
                    if (fa2x.default.isChildOf(this.Fe0x.el().parentNode, event.target)) {
                        this.ej1x = setTimeout(this.hideTools, 5e3)
                    }
                }
            }, {
                key: "hideTools",
                value: function hideTools() {
                    if (this.V0x.get("playstate") !== V0x.PLAY_STATE.PLAY) {
                        return
                    }
                    this.V0x.set("active", false);
                    this.removeClass("z-active")
                }
            }, {
                key: "showTools",
                value: function showTools() {
                    this.V0x.set("active", true);
                    this.addClass("z-active")
                }
            }, {
                key: "exitFullscreen",
                value: function exitFullscreen() {
                    this.Fe0x.bhQ0x.exitFullscreen()
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    this.removeEventListener("mousemove", this.onMouseMove);
                    this.dB1x.destroy();
                    this.Fe0x.destroy()
                }
            }]);
            return Frame
        }(gU2x.default)
    }
    , {
        "../state": 28,
        "../utils/dom": 29,
        "../utils/fn": 30,
        "./component": 5,
        "./control-bar/index": 9,
        "./player/index": 16
    }],
    16: [function(require, module, exports) {
        "use strict";
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var gD2x = function get(object, property, receiver) {
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value"in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var gK2x = require("../component");
        var gU2x = cN1x(gK2x);
        var ha2x = require("./media");
        var chW4a = cN1x(ha2x);
        var bik0x = require("./poster");
        var chS4W = cN1x(bik0x);
        var bhB0x = require("./play-button");
        var bhC0x = cN1x(bhB0x);
        var ZT8L = require("./keyboard");
        var chH4L = cN1x(ZT8L);
        var xY8Q = require("./loading");
        var chC4G = cN1x(xY8Q);
        var chB4F = require("./ops-bar");
        var chy4C = cN1x(chB4F);
        var chx4B = require("./layer-neterr");
        var cgU4Y = cN1x(chx4B);
        var cgG4K = require("./layer-end-nonext");
        var cgF4J = cN1x(cgG4K);
        var cgC4G = require("./layer-end-next");
        var cgA4E = cN1x(cgC4G);
        var cgv4z = require("./layer-neterr-fail");
        var cgs4w = cN1x(cgv4z);
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        module.exports = function(gS2x) {
            fO2x(Player, gS2x);
            function Player(options) {
                fW2x(this, Player);
                var P0x = fT2x(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));
                P0x.fi2x = options.core;
                P0x.ep1x = options.frame;
                P0x.V0x = options.state;
                P0x.bQ0x = P0x.createEl();
                P0x.initChildren();
                P0x.onMouseDownCheckRight = P0x.onMouseDownCheckRight.bind(P0x);
                P0x.addEventListener("mousedown", P0x.onMouseDownCheckRight);
                return P0x
            }
            fX2x(Player, [{
                key: "createEl",
                value: function createEl() {
                    return gD2x(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), "createEl", this).call(this, "div", {
                        className: "player"
                    })
                }
            }, {
                key: "initChildren",
                value: function initChildren() {
                    this.ha2x = new chW4a.default({
                        core: this.fi2x,
                        state: this.V0x
                    });
                    this.bik0x = new chS4W.default({
                        state: this.V0x
                    });
                    this.Tw6q = new bhC0x.default({
                        core: this.fi2x
                    });
                    this.xY8Q = new chC4G.default;
                    this.ZT8L = new chH4L.default({
                        core: this.fi2x,
                        frame: this.ep1x,
                        state: this.V0x
                    });
                    this.bFl6f = new chy4C.default({
                        core: this.fi2x,
                        state: this.V0x
                    });
                    this.cgp4t = new cgU4Y.default({
                        core: this.fi2x
                    });
                    this.bFi6c = new cgF4J.default({
                        core: this.fi2x
                    });
                    this.bFg6a = new cgA4E.default({
                        core: this.fi2x,
                        state: this.V0x
                    });
                    this.cgg4k = new cgs4w.default({
                        core: this.fi2x,
                        state: this.V0x
                    });
                    this.bQ0x.appendChild(this.ha2x.el());
                    this.bQ0x.appendChild(this.bik0x.el());
                    this.bQ0x.appendChild(this.Tw6q.el());
                    this.bQ0x.appendChild(this.xY8Q.el());
                    this.bQ0x.appendChild(this.ZT8L.el());
                    this.bQ0x.appendChild(this.bFl6f.el());
                    this.bQ0x.appendChild(this.cgp4t.el());
                    this.bQ0x.appendChild(this.bFi6c.el());
                    this.bQ0x.appendChild(this.bFg6a.el());
                    this.bQ0x.appendChild(this.cgg4k.el())
                }
            }, {
                key: "getMedia",
                value: function getMedia() {
                    return this.ha2x
                }
            }, {
                key: "onMouseDownCheckRight",
                value: function onMouseDownCheckRight() {
                    this.ep1x.onMouseDownCheckRight()
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    this.removeEventListener("mousedown", this.onMouseDownCheckRight);
                    this.ZT8L.destroy();
                    this.bFg6a.destroy();
                    this.bFi6c.destroy();
                    this.ha2x.destroy();
                    this.bFl6f.destroy();
                    this.Tw6q.destroy()
                }
            }]);
            return Player
        }(gU2x.default)
    }
    , {
        "../component": 5,
        "./keyboard": 17,
        "./layer-end-next": 18,
        "./layer-end-nonext": 19,
        "./layer-neterr": 21,
        "./layer-neterr-fail": 20,
        "./loading": 22,
        "./media": 23,
        "./ops-bar": 24,
        "./play-button": 25,
        "./poster": 26
    }],
    17: [function(require, module, exports) {
        "use strict";
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var gD2x = function get(object, property, receiver) {
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value"in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var gK2x = require("../component");
        var gU2x = cN1x(gK2x);
        var eY2x = require("../../utils/fn");
        var iH3x = cN1x(eY2x);
        var V0x = require("../../state");
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        module.exports = function(gS2x) {
            fO2x(Keyboard, gS2x);
            function Keyboard(options) {
                fW2x(this, Keyboard);
                var P0x = fT2x(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this));
                P0x.fi2x = options.core;
                P0x.ep1x = options.frame;
                P0x.V0x = options.state;
                P0x.bQ0x = P0x.createEl();
                P0x.onFrameFocus = P0x.onFrameFocus.bind(P0x);
                P0x.onFrameBlur = P0x.onFrameBlur.bind(P0x);
                P0x.onBlackDown = P0x.onBlackDown.bind(P0x);
                P0x.onKeyup = iH3x.default.throttle(P0x.onKeyup.bind(P0x), 500, {
                    leading: true
                });
                P0x.onKeydown = iH3x.default.throttle(P0x.onKeydown.bind(P0x), 500, {
                    leading: true
                });
                P0x.hideIcon = P0x.hideIcon.bind(P0x);
                P0x.onFrameFocus();
                P0x.addEventListener(P0x.ep1x, "blur", P0x.onFrameBlur);
                P0x.addEventListener(P0x.ep1x, "click", P0x.onFrameFocus);
                return P0x
            }
            fX2x(Keyboard, [{
                key: "createEl",
                value: function createEl() {
                    return gD2x(Keyboard.prototype.__proto__ || Object.getPrototypeOf(Keyboard.prototype), "createEl", this).call(this, "i", {
                        className: "fast"
                    })
                }
            }, {
                key: "onFrameFocus",
                value: function onFrameFocus() {
                    if (this.focused) {
                        return
                    }
                    this.focused = true;
                    this.addEventListener(this.ep1x, "keyup", this.onKeyup);
                    this.addEventListener(this.ep1x, "keydown", this.onKeydown);
                    this.addEventListener(this.ep1x, "keydown", this.onBlackDown)
                }
            }, {
                key: "onFrameBlur",
                value: function onFrameBlur() {
                    if (!this.focused) {
                        return
                    }
                    this.focused = false;
                    this.removeEventListener(this.ep1x, "keyup", this.onKeyup);
                    this.removeEventListener(this.ep1x, "keydown", this.onKeydown);
                    this.removeEventListener(this.ep1x, "keydown", this.onBlackDown)
                }
            }, {
                key: "onKeyup",
                value: function onKeyup(event) {
                    var time = this.V0x.get("time")
                      , duration = this.V0x.get("duration")
                      , media = this.ep1x.getMedia();
                    if (time >= duration - 2 && event.keyCode === 39) {
                        return
                    }
                    clearTimeout(this.forwardMore);
                    if (this.V0x.get("changeQuick")) {
                        this.V0x.set("pressUp", true);
                        return
                    }
                    switch (event.keyCode) {
                    case 39:
                        if (this.V0x.get("playstate") === V0x.PLAY_STATE.END_NEXT || this.V0x.get("playstate") === V0x.PLAY_STATE.END) {
                            return
                        }
                        if (time + 5 >= duration) {
                            time = duration - 1
                        } else {
                            time = Math.min(time + 5, duration)
                        }
                        this.V0x.set("time", time);
                        media.setCurrentTime(time);
                        break;
                    case 37:
                        if (time === 0 || this.V0x.get("playstate") === V0x.PLAY_STATE.END_NEXT || this.V0x.get("playstate") === V0x.PLAY_STATE.END) {
                            return
                        }
                        time = Math.max(time - 5, 0);
                        this.V0x.set("time", time);
                        media.setCurrentTime(time);
                        break
                    }
                }
            }, {
                key: "onKeydown",
                value: function onKeydown(event) {
                    var time = this.V0x.get("time")
                      , duration = this.V0x.get("duration")
                      , media = this.ep1x.getMedia()
                      , self = this;
                    if (time >= duration - 2 && event.keyCode === 39) {
                        return
                    }
                    switch (event.keyCode) {
                    case 39:
                        if (this.V0x.get("playstate") === V0x.PLAY_STATE.END_NEXT || this.V0x.get("playstate") === V0x.PLAY_STATE.END) {
                            return
                        }
                        clearTimeout(this.ej1x);
                        this.removeClass("z-backward");
                        this.addClass("z-forward");
                        this.forwardMore = setTimeout(function() {
                            if (self.V0x.get("pressUp")) {
                                return
                            }
                            self.V0x.set("changeQuick", true);
                            if (time + 20 >= duration) {
                                time = duration - 1
                            } else {
                                time = Math.min(time + 20, duration)
                            }
                            self.V0x.set("time", time);
                            media.setCurrentTime(time)
                        }, 500);
                        this.ej1x = setTimeout(this.hideIcon, 1e3);
                        break;
                    case 37:
                        if (time === 0 || this.V0x.get("playstate") === V0x.PLAY_STATE.END_NEXT || this.V0x.get("playstate") === V0x.PLAY_STATE.END) {
                            return
                        }
                        clearTimeout(this.ej1x);
                        this.removeClass("z-forward");
                        this.addClass("z-backward");
                        this.forwardMore = setTimeout(function() {
                            if (self.V0x.get("pressUp")) {
                                return
                            }
                            self.V0x.set("changeQuick", true);
                            time = Math.max(time - 20, 0);
                            self.V0x.set("time", time);
                            media.setCurrentTime(time)
                        }, 500);
                        this.ej1x = setTimeout(this.hideIcon, 1e3);
                        break;
                    case 27:
                        if (self.V0x.get("isFullscreen")) {
                            this.ep1x.exitFullscreen()
                        }
                    }
                    event.preventDefault()
                }
            }, {
                key: "onBlackDown",
                value: function onBlackDown(event) {
                    switch (event.keyCode) {
                    case 32:
                        if (this.V0x.get("sharing") && this.V0x.get("isFullscreen")) {
                            return
                        }
                        this.fi2x.togglePlay();
                        event.preventDefault();
                        break
                    }
                }
            }, {
                key: "hideIcon",
                value: function hideIcon() {
                    this.removeClass("z-forward");
                    this.removeClass("z-backward")
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    this.removeEventListener(this.ep1x, "blur", this.onFrameBlur);
                    this.removeEventListener(this.ep1x, "click", this.onFrameFocus)
                }
            }]);
            return Keyboard
        }(gU2x.default)
    }
    , {
        "../../state": 28,
        "../../utils/fn": 30,
        "../component": 5
    }],
    18: [function(require, module, exports) {
        "use strict";
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var gD2x = function get(object, property, receiver) {
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value"in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var gK2x = require("../component");
        var gU2x = cN1x(gK2x);
        var H0x = require("../../utils/dom");
        var fa2x = cN1x(H0x);
        var V0x = require("../../state");
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        var JUMP_TYPE = {
            CANCEL: 1,
            NEXT: 2,
            REPLAY: 3
        };
        var cx = 31
          , cy = 31
          , r = 28;
        module.exports = function(gS2x) {
            fO2x(LayerEndNext, gS2x);
            function LayerEndNext(options) {
                fW2x(this, LayerEndNext);
                var P0x = fT2x(this, (LayerEndNext.__proto__ || Object.getPrototypeOf(LayerEndNext)).call(this));
                P0x.fi2x = options.core;
                P0x.V0x = options.state;
                P0x.bQ0x = P0x.createEl();
                P0x.initChildren();
                P0x.controlCount = true;
                P0x.angle = 0;
                P0x.countdownControl = P0x.countdown();
                P0x.onClick = P0x.onClick.bind(P0x);
                P0x.onNextChange = P0x.onNextChange.bind(P0x);
                P0x.onChangePlayState = P0x.onChangePlayState.bind(P0x);
                P0x.onChangeFullscreen = P0x.onChangeFullscreen.bind(P0x);
                P0x.stopCountdown = P0x.stopCountdown.bind(P0x);
                P0x.continueCountdown = P0x.continueCountdown.bind(P0x);
                P0x.actionlog = P0x.actionlog.bind(P0x);
                P0x.V0x.on("change:playstate", P0x.onChangePlayState);
                P0x.V0x.on("change:next", P0x.onNextChange);
                P0x.V0x.on("change:isFullscreen", P0x.onChangeFullscreen);
                P0x.fi2x.on("stopCountdown", P0x.stopCountdown);
                P0x.fi2x.on("continueCountdown", P0x.continueCountdown);
                P0x.addEventListener("click", P0x.onClick);
                return P0x
            }
            fX2x(LayerEndNext, [{
                key: "createEl",
                value: function createEl() {
                    return gD2x(LayerEndNext.prototype.__proto__ || Object.getPrototypeOf(LayerEndNext.prototype), "createEl", this).call(this, "div", {
                        className: "layer layer-end layer-end-next ffull",
                        innerHTML: ['<div class="fvhc fvhc-1">', '<p class="tip fthide">即将自动为您播放：<span class="j-title"></span></p>', '<div class="btns">', '<div class="btn btn-1">', '<a href="javascript:;" class="icn top" data-action="video-replay"></a>', '<span class="bottom">重播</span>', "</div>", '<div class="btn btn-2">', '<a href="javascript:;" class="icn top" data-action="video-next">', '<canvas class="j-next next" width="62" height="62"></canvas>', "</a>", '<a href="javascript:;" class="bottom ftdn" data-action="video-cancel">取消</a>', "</div>", "</div>", "</div>"].join("")
                    })
                }
            }, {
                key: "initChildren",
                value: function initChildren() {
                    this.cfY4c = this.$(".j-title")
                }
            }, {
                key: "onChangePlayState",
                value: function onChangePlayState(state, playstate) {
                    if (playstate !== V0x.PLAY_STATE.END_NEXT)
                        return;
                    this.countdownControl.toStart()
                }
            }, {
                key: "onNextChange",
                value: function onNextChange(state, next) {
                    fa2x.default.textContent(this.cfY4c, next.title)
                }
            }, {
                key: "onChangeFullscreen",
                value: function onChangeFullscreen(state, isFullscreen) {
                    var canvas = this.$(".j-next");
                    if (isFullscreen) {
                        cx = 36;
                        cy = 36;
                        r = 33;
                        canvas.width = 71;
                        canvas.height = 71
                    } else {
                        cx = 31;
                        cy = 31;
                        r = 28;
                        canvas.width = 62;
                        canvas.height = 62
                    }
                }
            }, {
                key: "onClick",
                value: function onClick(event) {
                    var node = this.getActionNode(event.target);
                    if (!node)
                        return;
                    var action = this.getAction(node);
                    switch (action) {
                    case "video-replay":
                        this.wH8z = JUMP_TYPE.REPLAY;
                        break;
                    case "video-next":
                        this.wH8z = JUMP_TYPE.NEXT;
                        break;
                    case "video-cancel":
                        this.wH8z = JUMP_TYPE.CANCEL;
                        break
                    }
                    event.preventDefault();
                    event.stopPropagation()
                }
            }, {
                key: "countdown",
                value: function countdown() {
                    var self = this
                      , canvas = void 0
                      , ctx = void 0
                      , startTime = void 0;
                    function progressTo(angle) {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.beginPath();
                        ctx.arc(cx, cy, r, -.5 * Math.PI, (angle - .5) * Math.PI);
                        ctx.lineCap = "round";
                        ctx.lineWidth = 4;
                        ctx.strokeStyle = "rgb(255,255,255)";
                        ctx.stroke()
                    }
                    if (window["webkitRequestAnimationFrame"]) {
                        window.requestAnimationFrame = window["webkitRequestAnimationFrame"];
                        window.cancelAnimationFrame = window["webkitCancelAnimationFrame"]
                    }
                    function animate() {
                        self.reqAni = requestAnimationFrame(function() {
                            if (self.angle > 2 || self.wH8z) {
                                self.angle = 0;
                                if (self.wH8z == JUMP_TYPE.CANCEL) {
                                    self.actionlog("cancel");
                                    self.cancelNext()
                                } else if (self.wH8z == JUMP_TYPE.REPLAY) {
                                    self.actionlog("replay");
                                    self.replay()
                                } else {
                                    if (self.V0x.get("playstate") === V0x.PLAY_STATE.END_NEXT) {
                                        self.actionlog("nextplay");
                                        self.playNext()
                                    }
                                }
                                return
                            }
                            progressTo(self.angle);
                            self.angle += .006;
                            if (self.controlCount) {
                                animate()
                            }
                        })
                    }
                    return {
                        toStart: function toStart() {
                            self.wH8z = 0;
                            canvas = self.$(".j-next");
                            ctx = canvas.getContext("2d");
                            animate()
                        },
                        angleSet: progressTo
                    }
                }
            }, {
                key: "playNext",
                value: function playNext() {
                    var state = this.V0x
                      , next = state.get("next");
                    var data = [{
                        prevId: state.get("id"),
                        prevType: state.get("type") == V0x.VIDEO_TYPE.MV ? "mv" : "video"
                    }];
                    sessionStorage.setItem("prev", JSON.stringify(data));
                    state.reset({
                        id: next.id,
                        type: next.type,
                        autoplay: true,
                        autonext: true,
                        isFullscreen: state.get("isFullscreen"),
                        active: state.get("active"),
                        showops: state.get("showops")
                    });
                    if (state.get("isFullscreen")) {
                        this.fi2x.play()
                    } else {
                        this.fi2x.emit("core", "refresh", {
                            state: state
                        })
                    }
                }
            }, {
                key: "cancelNext",
                value: function cancelNext() {
                    this.V0x.set({
                        autonext: false,
                        playstate: V0x.PLAY_STATE.END
                    })
                }
            }, {
                key: "replay",
                value: function replay() {
                    this.fi2x.play()
                }
            }, {
                key: "stopCountdown",
                value: function stopCountdown() {
                    if (this.V0x.get("playstate") != V0x.PLAY_STATE.END_NEXT)
                        return;
                    this.controlCount = false;
                    this.angle = 0;
                    this.countdownControl.angleSet(0);
                    if (window.cancelAnimationFrame) {
                        cancelAnimationFrame(this.reqAni)
                    } else {
                        cancelRequestAnimationFrame(this.reqAni)
                    }
                }
            }, {
                key: "continueCountdown",
                value: function continueCountdown() {
                    if (this.controlCount) {
                        return
                    }
                    if (this.V0x.get("playstate") != V0x.PLAY_STATE.END_NEXT)
                        return;
                    this.controlCount = true;
                    this.countdownControl.toStart()
                }
            }, {
                key: "actionlog",
                value: function actionlog(type) {
                    var cn0x = {
                        page: this.V0x.get("type") == V0x.VIDEO_TYPE.MV ? "mvplay" : "videoplay",
                        id: this.V0x.get("id"),
                        isfullscreen: this.V0x.get("isFullscreen") ? 1 : 0,
                        type: type
                    };
                    this.fi2x.actionLog(cn0x, "click")
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    this.removeEventListener("click", this.onClick)
                }
            }]);
            return LayerEndNext
        }(gU2x.default)
    }
    , {
        "../../state": 28,
        "../../utils/dom": 29,
        "../component": 5
    }],
    19: [function(require, module, exports) {
        "use strict";
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var gD2x = function get(object, property, receiver) {
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value"in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var gK2x = require("../component");
        var gU2x = cN1x(gK2x);
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        module.exports = function(gS2x) {
            fO2x(LayerEndNonext, gS2x);
            function LayerEndNonext(options) {
                fW2x(this, LayerEndNonext);
                var P0x = fT2x(this, (LayerEndNonext.__proto__ || Object.getPrototypeOf(LayerEndNonext)).call(this));
                P0x.fi2x = options.core;
                P0x.bQ0x = P0x.createEl();
                P0x.onClick = P0x.onClick.bind(P0x);
                P0x.addEventListener("click", P0x.onClick);
                return P0x
            }
            fX2x(LayerEndNonext, [{
                key: "createEl",
                value: function createEl() {
                    return gD2x(LayerEndNonext.prototype.__proto__ || Object.getPrototypeOf(LayerEndNonext.prototype), "createEl", this).call(this, "div", {
                        className: "layer layer-end layer-end-nonext ffull",
                        innerHTML: ['<div class="fvhc">', '<div class="btn btn-1">', '<a href="javascript:;" class="icn top" data-action="video-replay"></a>', '<span class="bottom">重播</span>', "</div>", "</div>"].join("")
                    })
                }
            }, {
                key: "onClick",
                value: function onClick(event) {
                    var node = this.getActionNode(event.target);
                    if (!node)
                        return;
                    var action = this.getAction(node);
                    switch (action) {
                    case "video-replay":
                        this.fi2x.play();
                        break
                    }
                    event.preventDefault();
                    event.stopPropagation()
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    this.removeEventListener("click", this.onClick)
                }
            }]);
            return LayerEndNonext
        }(gU2x.default)
    }
    , {
        "../component": 5
    }],
    20: [function(require, module, exports) {
        "use strict";
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var gD2x = function get(object, property, receiver) {
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value"in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var gK2x = require("../component");
        var gU2x = cN1x(gK2x);
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        var VIDEO_TYPE = {
            21: "MV",
            41: "VIDEO"
        };
        module.exports = function(gS2x) {
            fO2x(LayerNeterrNeedPay, gS2x);
            function LayerNeterrNeedPay(options) {
                fW2x(this, LayerNeterrNeedPay);
                var P0x = fT2x(this, (LayerNeterrNeedPay.__proto__ || Object.getPrototypeOf(LayerNeterrNeedPay)).call(this));
                P0x.fi2x = options.core;
                P0x.V0x = options.state;
                P0x.bQ0x = P0x.createEl();
                return P0x
            }
            fX2x(LayerNeterrNeedPay, [{
                key: "createEl",
                value: function createEl() {
                    var type = this.V0x.get("type");
                    var cfX4b = "该" + VIDEO_TYPE[type] + "需付费使用，请在网易云音乐手机客户端购买后观看";
                    return gD2x(LayerNeterrNeedPay.prototype.__proto__ || Object.getPrototypeOf(LayerNeterrNeedPay.prototype), "createEl", this).call(this, "div", {
                        className: "layer layer-err layer-err-fail ffull",
                        innerHTML: ['<div class="fvhc">', '<p class="err">' + cfX4b + "</p>", "</div>"].join("")
                    })
                }
            }]);
            return LayerNeterrNeedPay
        }(gU2x.default)
    }
    , {
        "../component": 5
    }],
    21: [function(require, module, exports) {
        "use strict";
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var gD2x = function get(object, property, receiver) {
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value"in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var gK2x = require("../component");
        var gU2x = cN1x(gK2x);
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        module.exports = function(gS2x) {
            fO2x(LayerNeterr, gS2x);
            function LayerNeterr(options) {
                fW2x(this, LayerNeterr);
                var P0x = fT2x(this, (LayerNeterr.__proto__ || Object.getPrototypeOf(LayerNeterr)).call(this));
                P0x.fi2x = options.core;
                P0x.bQ0x = P0x.createEl();
                P0x.onClick = P0x.onClick.bind(P0x);
                P0x.addEventListener("click", P0x.onClick);
                return P0x
            }
            fX2x(LayerNeterr, [{
                key: "createEl",
                value: function createEl() {
                    return gD2x(LayerNeterr.prototype.__proto__ || Object.getPrototypeOf(LayerNeterr.prototype), "createEl", this).call(this, "div", {
                        className: "layer layer-err ffull",
                        innerHTML: ['<div class="fvhc">', '<p class="err">连接失败，请重试</p>', '<a href="javascript:;" class="btnwrap ftdn" data-action="video-replay"><span class="icn"></span>重新连接</a>', "</div>"].join("")
                    })
                }
            }, {
                key: "onClick",
                value: function onClick(event) {
                    var node = this.getActionNode(event.target);
                    if (!node)
                        return;
                    var action = this.getAction(node);
                    switch (action) {
                    case "video-replay":
                        this.fi2x.errorReplay();
                        break
                    }
                    event.preventDefault();
                    event.stopPropagation()
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    this.removeEventListener("click", this.onClick)
                }
            }]);
            return LayerNeterr
        }(gU2x.default)
    }
    , {
        "../component": 5
    }],
    22: [function(require, module, exports) {
        "use strict";
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var gD2x = function get(object, property, receiver) {
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value"in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var gK2x = require("../component");
        var gU2x = cN1x(gK2x);
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        module.exports = function(gS2x) {
            fO2x(Loading, gS2x);
            function Loading() {
                fW2x(this, Loading);
                var P0x = fT2x(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this));
                P0x.bQ0x = P0x.createEl();
                return P0x
            }
            fX2x(Loading, [{
                key: "createEl",
                value: function createEl() {
                    return gD2x(Loading.prototype.__proto__ || Object.getPrototypeOf(Loading.prototype), "createEl", this).call(this, "span", {
                        className: "loading"
                    })
                }
            }]);
            return Loading
        }(gU2x.default)
    }
    , {
        "../component": 5
    }],
    23: [function(require, module, exports) {
        "use strict";
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var gD2x = function get(object, property, receiver) {
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value"in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var gK2x = require("../component");
        var gU2x = cN1x(gK2x);
        var eY2x = require("../../utils/fn");
        var iH3x = cN1x(eY2x);
        var V0x = require("../../state");
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        module.exports = function(gS2x) {
            fO2x(Media, gS2x);
            function Media(options) {
                fW2x(this, Media);
                var P0x = fT2x(this, (Media.__proto__ || Object.getPrototypeOf(Media)).call(this));
                P0x.fi2x = options.core;
                P0x.V0x = options.state;
                P0x.bQ0x = P0x.createEl();
                P0x.onWaiting = P0x.onWaiting.bind(P0x);
                P0x.onLoadedMetaData = P0x.onLoadedMetaData.bind(P0x);
                P0x.onProgress = P0x.onProgress.bind(P0x);
                P0x.onTimeUpdate = iH3x.default.throttle(P0x.onTimeUpdate.bind(P0x), 100);
                P0x.onPause = P0x.onPause.bind(P0x);
                P0x.onPlaying = P0x.onPlaying.bind(P0x);
                P0x.onSeeked = P0x.onSeeked.bind(P0x);
                P0x.onVolumeChange = P0x.onVolumeChange.bind(P0x);
                P0x.onEnded = P0x.onEnded.bind(P0x);
                P0x.onStalled = P0x.onStalled.bind(P0x);
                P0x.onError = P0x.onError.bind(P0x);
                P0x.unLoad = P0x.unLoad.bind(P0x);
                P0x.addEventListener("waiting", P0x.onWaiting);
                P0x.addEventListener("loadedmetadata", P0x.onLoadedMetaData);
                P0x.addEventListener("progress", P0x.onProgress);
                P0x.addEventListener("timeupdate", P0x.onTimeUpdate);
                P0x.addEventListener("pause", P0x.onPause);
                P0x.addEventListener("playing", P0x.onPlaying);
                P0x.addEventListener("seeked", P0x.onSeeked);
                P0x.addEventListener("volumechange", P0x.onVolumeChange);
                P0x.addEventListener("ended", P0x.onEnded);
                P0x.addEventListener("stalled", P0x.onStalled);
                P0x.addEventListener("error", P0x.onError);
                window.addEventListener("unload", P0x.unLoad);
                P0x.tryAgain = 0;
                return P0x
            }
            fX2x(Media, [{
                key: "unLoad",
                value: function unLoad(event) {
                    if (this.V0x.get("duration") > 0) {
                        var cn0x = this.fi2x.playStationlog();
                        var time = this.bQ0x.currentTime;
                        if (this.V0x.get("prevId")) {
                            cn0x.prevId = this.V0x.get("prevId");
                            cn0x.prevType = this.V0x.get("prevType");
                            cn0x.is_nextplay = 1
                        }
                        cn0x.end = "interrupt";
                        cn0x.time = time;
                        this.fi2x.actionLog(cn0x, "playend")
                    }
                }
            }, {
                key: "createEl",
                value: function createEl() {
                    return gD2x(Media.prototype.__proto__ || Object.getPrototypeOf(Media.prototype), "createEl", this).call(this, "video", {
                        className: "media"
                    })
                }
            }, {
                key: "play",
                value: function play(time) {
                    var Tl6f = this;
                    if (!this.bQ0x.src || this.V0x.get("playstate") == V0x.PLAY_STATE.LOADING && Math.floor(this.bQ0x.currentTime) == Math.floor(this.bQ0x.duration)) {
                        return this.replay(time)
                    }
                    this.V0x.set("playstate", V0x.PLAY_STATE.BUFFERING);
                    var promise = this.bQ0x.play();
                    if (promise !== undefined) {
                        promise.then(function(c9h) {}).catch(function(err) {
                            Tl6f.V0x.set("playstate", V0x.PLAY_STATE.PAUSE)
                        })
                    }
                }
            }, {
                key: "pause",
                value: function pause() {
                    this.bQ0x.pause()
                }
            }, {
                key: "load",
                value: function load() {
                    this.bQ0x.load()
                }
            }, {
                key: "replay",
                value: function replay() {
                    var Ub6V = this;
                    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    this.V0x.set("playstate", V0x.PLAY_STATE.LOADING);
                    this.fetchPlayURL(function(err, src) {
                        if (err) {} else {
                            Ub6V.bQ0x.src = src;
                            Ub6V.bQ0x.load();
                            var promise = Ub6V.bQ0x.play();
                            if (promise !== undefined) {
                                promise.then(function(c9h) {}).catch(function(err) {
                                    Ub6V.V0x.set("playstate", V0x.PLAY_STATE.PAUSE)
                                })
                            }
                            Ub6V.biJ1x = time
                        }
                    })
                }
            }, {
                key: "fetchPlayURL",
                value: function fetchPlayURL(callback) {
                    var state = this.V0x
                      , brs = this.V0x.get("brs")
                      , br = null;
                    brs.forEach(function(item) {
                        if (item.selected)
                            br = item.br
                    });
                    var event = (state.get("type") == V0x.VIDEO_TYPE.MV ? "mv" : "video") + "-playurl";
                    this.fi2x.emit("core", event, {
                        br: br,
                        callback: callback
                    })
                }
            }, {
                key: "getCurrentTime",
                value: function getCurrentTime() {
                    return this.bQ0x.currentTime
                }
            }, {
                key: "setCurrentTime",
                value: function setCurrentTime() {
                    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    this.bQ0x.currentTime = time
                }
            }, {
                key: "setVolume",
                value: function setVolume(volume) {
                    this.bQ0x.volume = volume
                }
            }, {
                key: "onWaiting",
                value: function onWaiting() {
                    this.V0x.set("playstate", V0x.PLAY_STATE.BUFFERING)
                }
            }, {
                key: "onLoadedMetaData",
                value: function onLoadedMetaData() {
                    if (this.V0x.get("time") > 0) {
                        this.setCurrentTime(this.V0x.get("time"))
                    }
                    if (!!this.biJ1x) {
                        this.setCurrentTime(this.biJ1x);
                        this.biJ1x = ""
                    }
                    this.V0x.set("duration", this.bQ0x.duration)
                }
            }, {
                key: "onPlaying",
                value: function onPlaying() {
                    if (this.error) {
                        clearTimeout(this.error)
                    }
                    if (this.tryAgain > 0) {
                        this.tryAgain = 0
                    }
                    this.V0x.set("playstate", V0x.PLAY_STATE.PLAY)
                }
            }, {
                key: "onProgress",
                value: function onProgress() {
                    var buffered = this.bQ0x.buffered
                      , time = this.bQ0x.currentTime
                      , loaded = 0;
                    for (var i = 0; i < buffered.length; ++i) {
                        if (time > buffered.start(i) && time < buffered.end(i)) {
                            loaded = buffered.end(i);
                            break
                        }
                    }
                    this.V0x.set("buffered", loaded)
                }
            }, {
                key: "onTimeUpdate",
                value: function onTimeUpdate() {
                    var playstate = this.V0x.get("playstate");
                    if (playstate == V0x.PLAY_STATE.NETERR) {
                        return
                    }
                    if (playstate == V0x.PLAY_STATE.PLAY || playstate == V0x.PLAY_STATE.PAUSE) {
                        this.V0x.set("time", this.bQ0x.currentTime | 0)
                    }
                    if (this.V0x.get("pressUp")) {
                        this.V0x.set("pressUp", false)
                    }
                    if (this.V0x.get("changeQuick")) {
                        this.V0x.set("changeQuick", false)
                    }
                }
            }, {
                key: "onPause",
                value: function onPause() {
                    if (this.V0x.get("playstate") == V0x.PLAY_STATE.NETERR) {
                        return
                    }
                    this.V0x.set("playstate", V0x.PLAY_STATE.PAUSE)
                }
            }, {
                key: "onSeeked",
                value: function onSeeked(event, time) {
                    if (this.bQ0x.paused) {
                        this.V0x.set("playstate", V0x.PLAY_STATE.PAUSE)
                    } else {
                        this.V0x.set("playstate", V0x.PLAY_STATE.PLAY)
                    }
                }
            }, {
                key: "onVolumeChange",
                value: function onVolumeChange() {
                    this.V0x.set("volume", this.bQ0x.volume)
                }
            }, {
                key: "onEnded",
                value: function onEnded() {
                    var cn0x = this.fi2x.playStationlog();
                    var time = this.bQ0x.currentTime;
                    if (this.V0x.get("autonext")) {
                        this.V0x.set("playstate", V0x.PLAY_STATE.END_NEXT)
                    } else {
                        this.V0x.set("playstate", V0x.PLAY_STATE.END)
                    }
                    if (this.V0x.get("prevId")) {
                        cn0x.prevId = this.V0x.get("prevId");
                        cn0x.prevType = this.V0x.get("prevType")
                    }
                    cn0x.end = "playend";
                    cn0x.time = time;
                    this.fi2x.actionLog(cn0x, "playend");
                    this.V0x.set("time", 0);
                    this.V0x.set("buffered", 0)
                }
            }, {
                key: "onStalled",
                value: function onStalled(event) {
                    var self = this;
                    this.error = setTimeout(function() {
                        self.onError()
                    }, 1e4)
                }
            }, {
                key: "onError",
                value: function onError() {
                    if (this.tryAgain < 1) {
                        this.fi2x.errorReplay();
                        this.tryAgain++
                    } else {
                        var cn0x = this.fi2x.playStationlog();
                        var time = this.bQ0x.currentTime;
                        if (this.V0x.get("prevId")) {
                            cn0x.prevId = this.V0x.get("prevId");
                            cn0x.prevType = this.V0x.get("prevType")
                        }
                        cn0x.end = "exception";
                        cn0x.time = time;
                        this.fi2x.actionLog(cn0x, "playend");
                        this.V0x.set("time", 0);
                        this.fi2x.emit("core", "playerror", "info load error");
                        this.V0x.set("playstate", V0x.PLAY_STATE.NETERR)
                    }
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    this.removeEventListener("waiting", this.onWaiting);
                    this.removeEventListener("loadedmetadata", this.onLoadedMetaData);
                    this.removeEventListener("progress", this.onProgress);
                    this.removeEventListener("timeupdate", this.onTimeUpdate);
                    this.removeEventListener("pause", this.onPause);
                    this.removeEventListener("playing", this.onPlaying);
                    this.removeEventListener("seeked", this.onSeeked);
                    this.removeEventListener("volumechange", this.onVolumeChange);
                    this.removeEventListener("ended", this.onEnded);
                    this.removeEventListener("stalled", this.onStalled);
                    this.removeEventListener("error", this.onError);
                    window.removeEventListener("unload", this.unLoad)
                }
            }]);
            return Media
        }(gU2x.default)
    }
    , {
        "../../state": 28,
        "../../utils/fn": 30,
        "../component": 5
    }],
    24: [function(require, module, exports) {
        "use strict";
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var gD2x = function get(object, property, receiver) {
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value"in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var gK2x = require("../component");
        var gU2x = cN1x(gK2x);
        var eY2x = require("../../utils/fn");
        var iH3x = cN1x(eY2x);
        var H0x = require("../../utils/dom");
        var fa2x = cN1x(H0x);
        var V0x = require("../../state");
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        module.exports = function(gS2x) {
            fO2x(OpsBar, gS2x);
            function OpsBar(options) {
                fW2x(this, OpsBar);
                var P0x = fT2x(this, (OpsBar.__proto__ || Object.getPrototypeOf(OpsBar)).call(this));
                P0x.fi2x = options.core;
                P0x.V0x = options.state;
                P0x.bQ0x = P0x.createEl();
                P0x.onChangeAuth = iH3x.default.throttle(P0x.onChangeAuth.bind(P0x), 25, {
                    trailing: true
                });
                P0x.onChangeOps = P0x.onChangeOps.bind(P0x);
                P0x.onChangeLiked = P0x.onChangeLiked.bind(P0x);
                P0x.onChangeSubed = P0x.onChangeSubed.bind(P0x);
                P0x.onClick = iH3x.default.throttle(P0x.onClick.bind(P0x), 100, {
                    leading: true
                });
                P0x.V0x.on("change:showops", P0x.onChangeOps);
                P0x.V0x.on("change:liked", P0x.onChangeLiked);
                P0x.V0x.on("change:subed", P0x.onChangeSubed);
                P0x.V0x.on("change:title", P0x.onChangeAuth);
                P0x.V0x.on("change:artists", P0x.onChangeAuth);
                P0x.addEventListener("click", P0x.onClick);
                return P0x
            }
            fX2x(OpsBar, [{
                key: "createEl",
                value: function createEl() {
                    var showops = this.V0x.get("showops");
                    return gD2x(OpsBar.prototype.__proto__ || Object.getPrototypeOf(OpsBar.prototype), "createEl", this).call(this, "div", {
                        className: "opbar",
                        innerHTML: ['<ul class="j-ops ops ffr', showops ? "" : " fhide", '">', '<li class="itm"><a href="javacript:;" class="j-like icn icn-like" data-action="video-like"></a></li>', '<li class="itm"><a href="javacript:;" class="j-sub icn icn-sub" data-action="video-sub"></a></li>', '<li class="itm"><a href="javacript:;" class="icn icn-share" data-action="video-share"></a></li>', "</ul>", '<h2 class="j-tt tt fthide"></h2>'].join("")
                    })
                }
            }, {
                key: "onChangeOps",
                value: function onChangeOps(state, showops) {
                    if (showops) {
                        fa2x.default.removeClass(this.$(".j-ops"), "fhide")
                    } else {
                        fa2x.default.addClass(this.$(".j-ops"), "fhide")
                    }
                }
            }, {
                key: "onChangeAuth",
                value: function onChangeAuth(state) {
                    fa2x.default.textContent(this.$(".j-tt"), state.get("title") + " - " + (state.get("type") == V0x.VIDEO_TYPE.VIDEO ? "by " : "") + this.getArtistsName(state.get("artists")))
                }
            }, {
                key: "onChangeLiked",
                value: function onChangeLiked(state, liked) {
                    if (liked) {
                        fa2x.default.addClass(this.$(".j-like"), "z-active")
                    } else {
                        fa2x.default.removeClass(this.$(".j-like"), "z-active")
                    }
                }
            }, {
                key: "onChangeSubed",
                value: function onChangeSubed(state, subed) {
                    if (subed) {
                        fa2x.default.addClass(this.$(".j-sub"), "z-active")
                    } else {
                        fa2x.default.removeClass(this.$(".j-sub"), "z-active")
                    }
                }
            }, {
                key: "getArtistsName",
                value: function getArtistsName(artists) {
                    return artists.map(function(artist) {
                        return artist.nickname || artist.name
                    }).join("/")
                }
            }, {
                key: "onClick",
                value: function onClick(event) {
                    var node = this.getActionNode(event.target);
                    if (!node)
                        return;
                    var action = this.getAction(node)
                      , state = this.V0x;
                    switch (action) {
                    case "video-like":
                        this.fi2x.emit("core", "like", {
                            state: state
                        });
                        break;
                    case "video-sub":
                        this.fi2x.emit("core", "sub", {
                            state: state
                        });
                        break;
                    case "video-share":
                        this.fi2x.emit("core", "share", {
                            state: state
                        });
                        break
                    }
                    event.preventDefault();
                    event.stopPropagation()
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    this.removeEventListener("click", this.onClick)
                }
            }]);
            return OpsBar
        }(gU2x.default)
    }
    , {
        "../../state": 28,
        "../../utils/dom": 29,
        "../../utils/fn": 30,
        "../component": 5
    }],
    25: [function(require, module, exports) {
        "use strict";
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var gD2x = function get(object, property, receiver) {
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value"in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var gK2x = require("../component");
        var gU2x = cN1x(gK2x);
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        module.exports = function(gS2x) {
            fO2x(PlayButton, gS2x);
            function PlayButton(options) {
                fW2x(this, PlayButton);
                var P0x = fT2x(this, (PlayButton.__proto__ || Object.getPrototypeOf(PlayButton)).call(this));
                P0x.fi2x = options.core;
                P0x.bQ0x = P0x.createEl();
                P0x.onClick = P0x.onClick.bind(P0x);
                P0x.addEventListener("click", P0x.onClick);
                return P0x
            }
            fX2x(PlayButton, [{
                key: "createEl",
                value: function createEl() {
                    return gD2x(PlayButton.prototype.__proto__ || Object.getPrototypeOf(PlayButton.prototype), "createEl", this).call(this, "div", {
                        className: "play ffull",
                        innerHTML: '<a href="javascript:;" class="icn"></a>'
                    })
                }
            }, {
                key: "onClick",
                value: function onClick() {
                    this.fi2x.togglePlay()
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    this.removeEventListener("click", this.onClick)
                }
            }]);
            return PlayButton
        }(gU2x.default)
    }
    , {
        "../component": 5
    }],
    26: [function(require, module, exports) {
        "use strict";
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var gD2x = function get(object, property, receiver) {
            if (object === null)
                object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined
                } else {
                    return get(parent, property, receiver)
                }
            } else if ("value"in desc) {
                return desc.value
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined
                }
                return getter.call(receiver)
            }
        };
        var gK2x = require("../component");
        var gU2x = cN1x(gK2x);
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        module.exports = function(gS2x) {
            fO2x(Poster, gS2x);
            function Poster(options) {
                fW2x(this, Poster);
                var P0x = fT2x(this, (Poster.__proto__ || Object.getPrototypeOf(Poster)).call(this));
                P0x.V0x = options.state;
                P0x.bQ0x = P0x.createEl();
                P0x.initChildren();
                P0x.onChangePoster = P0x.onChangePoster.bind(P0x);
                P0x.V0x.on("change:poster", P0x.onChangePoster);
                return P0x
            }
            fX2x(Poster, [{
                key: "createEl",
                value: function createEl() {
                    return gD2x(Poster.prototype.__proto__ || Object.getPrototypeOf(Poster.prototype), "createEl", this).call(this, "div", {
                        className: "poster ffull",
                        innerHTML: '<img class="j-pic pic">'
                    })
                }
            }, {
                key: "initChildren",
                value: function initChildren() {
                    this.changePoster(this.V0x.get("poster"))
                }
            }, {
                key: "onChangePoster",
                value: function onChangePoster(state, poster) {
                    this.changePoster(poster)
                }
            }, {
                key: "changePoster",
                value: function changePoster(poster) {
                    this.$(".j-pic").src = poster
                }
            }]);
            return Poster
        }(gU2x.default)
    }
    , {
        "../component": 5
    }],
    27: [function(require, module, exports) {
        "use strict";
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var baC8u = require("global/window");
        var cfW4a = cN1x(baC8u);
        var ST6N = require("minivents");
        var SU6O = cN1x(ST6N);
        var H0x = require("./utils/dom");
        var fa2x = cN1x(H0x);
        var eY2x = require("./utils/fn");
        var iH3x = cN1x(eY2x);
        var ep1x = require("./components/frame");
        var cfR4V = cN1x(ep1x);
        var V0x = require("./state");
        var cfO4S = cN1x(V0x);
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        var VideoCore = function(Td6X) {
            fO2x(VideoCore, Td6X);
            function VideoCore() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                fW2x(this, VideoCore);
                var P0x = fT2x(this, (VideoCore.__proto__ || Object.getPrototypeOf(VideoCore)).call(this));
                if (!fa2x.default.isEl(options.parent))
                    throw "需要传入父容器";
                if (!options.id)
                    throw "需要传入资源id";
                if (!iH3x.default.isNumber(options.type))
                    throw "需要传入资源类型";
                P0x.tryAgain = 0;
                P0x.tryTimes = 3;
                var state = new cfO4S.default({
                    id: options.id,
                    type: options.type,
                    autonext: !!options.autonext,
                    showops: !!options.showops
                });
                P0x.V0x = state;
                P0x.ep1x = new cfR4V.default({
                    core: P0x,
                    state: state
                });
                options.parent.appendChild(P0x.ep1x.el());
                return P0x
            }
            fX2x(VideoCore, [{
                key: "play",
                value: function play(time) {
                    var state = this.V0x
                      , self = this;
                    if (state.get("autonext") && !state.get("next")) {
                        this.emit("core", "next")
                    }
                    if (state.get("loaded"))
                        return this.ep1x.play(time);
                    state.set("playstate", V0x.PLAY_STATE.LOADING);
                    var event = state.get("type") == V0x.VIDEO_TYPE.MV ? "mv" : "video";
                    this.emit("core", event, {
                        state: state,
                        callback: function callback(err) {
                            if (err) {
                                if (self.tryAgain < self.tryTimes) {
                                    self.play();
                                    self.tryAgain++
                                } else {
                                    state.set("playstate", V0x.PLAY_STATE.NETERR)
                                }
                            } else {
                                self.tryAgain = 0;
                                if (state.get("isFullscreen") && !state.get("cp")) {
                                    self.ep1x.exitFullscreen();
                                    var fee = state.get("brs")[0].fee;
                                    self.emit("core", "fee", {
                                        fee: fee
                                    })
                                }
                                var cn0x = self.playStationlog();
                                self.actionLog(cn0x, "play");
                                self.ep1x.play(time);
                                self.playTryAgain(time)
                            }
                        }
                    })
                }
            }, {
                key: "playTryAgain",
                value: function playTryAgain(time) {
                    var self = this;
                    setTimeout(function() {
                        if (self.V0x.get("playstate") === V0x.PLAY_STATE.LOADING && self.tryAgain < self.tryTimes) {
                            self.ep1x.play(time);
                            self.tryAgain++;
                            self.playTryAgain(time)
                        } else {
                            return
                        }
                    }, 2e3)
                }
            }, {
                key: "actionLog",
                value: function actionLog(cn0x, action) {
                    this.emit("core", "actionLog", cn0x, action)
                }
            }, {
                key: "playStationlog",
                value: function playStationlog() {
                    var state = this.V0x;
                    if (sessionStorage.length > 0 && sessionStorage.getItem("prev") && JSON.parse(sessionStorage.getItem("prev")).length > 0) {
                        var prevData = JSON.parse(sessionStorage.getItem("prev"));
                        var cn0x = {
                            type: state.get("type") == V0x.VIDEO_TYPE.MV ? "mv" : "video",
                            id: state.get("id"),
                            page: state.get("type") == V0x.VIDEO_TYPE.MV ? "mvplay" : "videoplay",
                            prevId: prevData[0].prevId,
                            prevType: prevData[0].prevType,
                            is_nextplay: 1,
                            is_autoplay: 1,
                            download: 0
                        };
                        state.set("prevId", prevData[0].prevId);
                        state.set("prevType", prevData[0].prevType);
                        prevData.shift();
                        sessionStorage.setItem("prev", JSON.stringify(prevData))
                    } else {
                        var cn0x = {
                            type: state.get("type") == V0x.VIDEO_TYPE.MV ? "mv" : "video",
                            id: state.get("id"),
                            page: state.get("type") == V0x.VIDEO_TYPE.MV ? "mvplay" : "videoplay",
                            is_autoplay: 1,
                            is_nextplay: 0,
                            download: 0
                        }
                    }
                    return cn0x
                }
            }, {
                key: "errorReplay",
                value: function errorReplay() {
                    if (this.V0x.get("time") > 0) {
                        this.playtime = this.V0x.get("time")
                    }
                    if (this.ep1x.Fe0x.baj8b.setTime > this.playtime) {
                        var replayTime = this.ep1x.Fe0x.baj8b.setTime
                    } else {
                        var replayTime = this.playtime
                    }
                    this.ep1x.load();
                    this.V0x.set("time", replayTime);
                    this.ep1x.replay()
                }
            }, {
                key: "pause",
                value: function pause() {
                    this.ep1x.pause()
                }
            }, {
                key: "togglePlay",
                value: function togglePlay() {
                    var playstate = this.V0x.get("playstate");
                    if (playstate == V0x.PLAY_STATE.END_NEXT || playstate == V0x.PLAY_STATE.END) {
                        return
                    }
                    if (playstate === V0x.PLAY_STATE.NETERR) {
                        this.errorReplay()
                    }
                    if (this.V0x.isPlaying()) {
                        this.pause()
                    } else {
                        this.play()
                    }
                }
            }, {
                key: "isPlaying",
                value: function isPlaying() {
                    return this.V0x.isPlaying()
                }
            }, {
                key: "el",
                value: function el() {
                    return this.ep1x.el()
                }
            }, {
                key: "getCurrentTime",
                value: function getCurrentTime() {
                    return this.ep1x.getMedia().getCurrentTime()
                }
            }, {
                key: "getState",
                value: function getState() {
                    return this.V0x
                }
            }, {
                key: "setLiked",
                value: function setLiked(liked) {
                    this.V0x.set("liked", liked)
                }
            }, {
                key: "setSubed",
                value: function setSubed(subed) {
                    this.V0x.set("subed", subed)
                }
            }]);
            return VideoCore
        }(SU6O.default);
        VideoCore.VIDEO_TYPE = V0x.VIDEO_TYPE;
        cfW4a.default.VideoCore = VideoCore;
        module.exports = VideoCore
    }
    , {
        "./components/frame": 15,
        "./state": 28,
        "./utils/dom": 29,
        "./utils/fn": 30,
        "global/window": 3,
        minivents: 4
    }],
    28: [function(require, module, exports) {
        "use strict";
        var Ue6Y = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj
        }
        : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
        ;
        var fX2x = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var ST6N = require("minivents");
        var SU6O = cN1x(ST6N);
        var eY2x = require("./utils/fn");
        var iH3x = cN1x(eY2x);
        function cN1x(obj) {
            return obj && obj.lo3x ? obj : {
                "default": obj
            }
        }
        function fW2x(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        function fT2x(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self
        }
        function fO2x(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass)
                Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass
        }
        var VIDEO_TYPE = {
            MV: 21,
            VIDEO: 41
        };
        var POSTER = "http://p3.music.126.net/TBOeQac7Prx2ACJVH7182A==/19030347253914123.jpg";
        var PLAY_STATE = {
            INIT: 1,
            LOADING: 2,
            PLAY: 3,
            PAUSE: 4,
            BUFFERING: 5,
            END: 6,
            END_NEXT: 7,
            NETERR: 8
        };
        var FAIL_TYPE = {
            OTHER: 1,
            NEEDPAY: 2
        };
        var MV_STATE = {
            FREE: 1,
            SONG_PAY: 2,
            VIP_PAY: 3,
            SPECIAL_VIP_PAY: 4,
            MV_PAY: 5
        };
        var State = function(Td6X) {
            fO2x(State, Td6X);
            function State(attrs) {
                fW2x(this, State);
                var P0x = fT2x(this, (State.__proto__ || Object.getPrototypeOf(State)).call(this));
                P0x.reset(attrs);
                return P0x
            }
            fX2x(State, [{
                key: "reset",
                value: function reset(key, value, options) {
                    this.Zu8m = {
                        id: 0,
                        type: VIDEO_TYPE.MV,
                        brs: [],
                        title: "",
                        artists: null,
                        poster: POSTER,
                        liked: false,
                        subed: false,
                        next: null,
                        autonext: false,
                        sharing: false,
                        cp: 1,
                        playstate: PLAY_STATE.INIT,
                        autoplay: false,
                        isFullscreen: false,
                        volume: 1,
                        duration: 0,
                        time: 0,
                        buffered: 0,
                        active: false,
                        showops: false,
                        changeQuick: false,
                        pressUp: false,
                        loaded: false
                    };
                    this.set(key, value, options)
                }
            }, {
                key: "get",
                value: function get(key) {
                    return this.Zu8m[key]
                }
            }, {
                key: "set",
                value: function set(key, val, options) {
                    if (key == null)
                        return this;
                    var attrs;
                    if ((typeof key === "undefined" ? "undefined" : Ue6Y(key)) === "object") {
                        attrs = key;
                        options = val
                    } else {
                        (attrs = {})[key] = val
                    }
                    options || (options = {});
                    var silent = options.silent;
                    var changes = [];
                    var current = this.Zu8m;
                    var changed = {};
                    var prev = iH3x.default.clone(this.Zu8m);
                    for (var attr in attrs) {
                        val = attrs[attr];
                        if (current[attr] != val)
                            changes.push(attr);
                        if (prev[attr] != val) {
                            changed[attr] = val
                        } else {
                            delete changed[attr]
                        }
                        current[attr] = val
                    }
                    if (!silent) {
                        for (var i = 0; i < changes.length; i++) {
                            this.emit("change:" + changes[i], this, current[changes[i]], options)
                        }
                        this.emit("change", this, options)
                    }
                }
            }, {
                key: "toJSON",
                value: function toJSON() {
                    return iH3x.default.clone(this.Zu8m)
                }
            }, {
                key: "isPlaying",
                value: function isPlaying() {
                    var playstate = this.get("playstate");
                    return playstate == PLAY_STATE.LOADING || playstate == PLAY_STATE.PLAY || playstate == PLAY_STATE.BUFFERING || playstate == PLAY_STATE.END_NEXT
                }
            }]);
            return State
        }(SU6O.default);
        State.VIDEO_TYPE = VIDEO_TYPE;
        State.POSTER = POSTER;
        State.PLAY_STATE = PLAY_STATE;
        State.MV_STATE = MV_STATE;
        State.FAIL_TYPE = FAIL_TYPE;
        module.exports = State
    }
    , {
        "./utils/fn": 30,
        minivents: 4
    }],
    29: [function(require, module, exports) {
        "use strict";
        var Dom = {};
        var sI6C = require("./obj")
          , isObject = sI6C.isObject;
        function isNonBlankString(str) {
            return typeof str === "string" && /\S/.test(str)
        }
        function throwIfWhitespace(str) {
            if (/\s/.test(str)) {
                throw new Error("class has illegal whitespace characters")
            }
        }
        function classRegExp(className) {
            return new RegExp("(^|\\s)" + className + "($|\\s)")
        }
        function createQuerier(method) {
            return function(selector, context) {
                if (!isNonBlankString(selector)) {
                    return document[method](null)
                }
                if (isNonBlankString(context)) {
                    context = document.querySelector(context)
                }
                var ctx = Dom.isEl(context) ? context : document;
                return ctx[method] && ctx[method](selector)
            }
        }
        Dom.isEl = function(value) {
            return isObject(value) && value.nodeType === 1
        }
        ;
        Dom.isTextNode = function(value) {
            return isObject(value) && value.nodeType === 3
        }
        ;
        Dom.createEl = function() {
            var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "div";
            var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var content = arguments[3];
            var el = document.createElement(tagName);
            Object.getOwnPropertyNames(properties).forEach(function(propName) {
                var val = properties[propName];
                if (propName === "textContent") {
                    Dom.textContent(el, val)
                } else {
                    el[propName] = val
                }
            });
            Object.getOwnPropertyNames(attributes).forEach(function(attrName) {
                el.setAttribute(attrName, attributes[attrName])
            });
            if (content) {
                Dom.appendContent(el, content)
            }
            return el
        }
        ;
        Dom.textContent = function(el, text) {
            if (typeof el.textContent === "undefined") {
                el.innerText = text
            } else {
                el.textContent = text
            }
            return el
        }
        ;
        Dom.prependTo = function(child, parent) {
            if (parent.firstChild) {
                parent.insertBefore(child, parent.firstChild)
            } else {
                parent.appendChild(child)
            }
        }
        ;
        Dom.hasClass = function(element, classToCheck) {
            throwIfWhitespace(classToCheck);
            if (element.classList) {
                return element.classList.contains(classToCheck)
            }
            return classRegExp(classToCheck).test(element.className)
        }
        ;
        Dom.addClass = function(element, classToAdd) {
            if (!classToAdd)
                return;
            if (element.classList) {
                element.classList.add(classToAdd)
            } else if (!Dom.hasClass(element, classToAdd)) {
                element.className = (element.className + " " + classToAdd).trim()
            }
            return element
        }
        ;
        Dom.removeClass = function(element, classToRemove) {
            if (!classToRemove)
                return;
            if (element.classList) {
                element.classList.remove(classToRemove)
            } else {
                throwIfWhitespace(classToRemove);
                element.className = element.className.split(/\s+/).filter(function(c) {
                    return c !== classToRemove
                }).join(" ")
            }
            return element
        }
        ;
        Dom.normalizeContent = function(content) {
            if (typeof content === "function") {
                content = content()
            }
            return (Array.isArray(content) ? content : [content]).map(function(value) {
                if (typeof value === "function") {
                    value = value()
                }
                if (Dom.isEl(value) || Dom.isTextNode(value)) {
                    return value
                }
                if (typeof value === "string" && /\S/.test(value)) {
                    return document.createTextNode(value)
                }
            }).filter(function(value) {
                return value
            })
        }
        ;
        Dom.appendContent = function(el, content) {
            Dom.normalizeContent(content).forEach(function(node) {
                return el.appendChild(node)
            });
            return el
        }
        ;
        Dom.findPosition = function(el) {
            var box = void 0;
            if (el.getBoundingClientRect && el.parentNode) {
                box = el.getBoundingClientRect()
            }
            if (!box) {
                return {
                    left: 0,
                    top: 0
                }
            }
            var docEl = document.documentElement;
            var body = document.body;
            var clientLeft = docEl.clientLeft || body.clientLeft || 0;
            var scrollLeft = window.pageXOffset || body.scrollLeft;
            var left = box.left + scrollLeft - clientLeft;
            var clientTop = docEl.clientTop || body.clientTop || 0;
            var scrollTop = window.pageYOffset || body.scrollTop;
            var top = box.top + scrollTop - clientTop;
            return {
                left: Math.round(left),
                top: Math.round(top)
            }
        }
        ;
        Dom.getPointerPosition = function(el, event) {
            var position = {};
            var box = Dom.findPosition(el);
            var boxW = el.offsetWidth;
            var boxH = el.offsetHeight;
            var boxY = box.top;
            var boxX = box.left;
            var pageY = event.pageY;
            var pageX = event.pageX;
            if (event.changedTouches) {
                pageX = event.changedTouches[0].pageX;
                pageY = event.changedTouches[0].pageY
            }
            position.y = Math.max(0, Math.min(1, (boxY - pageY + boxH) / boxH));
            position.x = Math.max(0, Math.min(1, (pageX - boxX) / boxW));
            position.boxW = boxW;
            position.moveX = pageX - boxX;
            return position
        }
        ;
        Dom.isChildOf = function(zl8d, sE6y) {
            if (!zl8d || !sE6y)
                return false;
            if (zl8d == sE6y)
                return true;
            return Dom.isChildOf(zl8d, sE6y.parentNode)
        }
        ;
        Dom.$ = createQuerier("querySelector");
        Dom.$$ = createQuerier("querySelectorAll");
        module.exports = Dom
    }
    , {
        "./obj": 32
    }],
    30: [function(require, module, exports) {
        "use strict";
        var Ue6Y = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj
        }
        : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
        ;
        var Fn = {};
        var ObjProto = Object.prototype;
        var toString = ObjProto.toString
          , hasOwnProperty = ObjProto.hasOwnProperty;
        var nativeIsArray = Array.isArray;
        var createAssigner = function createAssigner(keysFunc, undefinedOnly) {
            return function(obj) {
                var length = arguments.length;
                if (length < 2 || obj == null)
                    return obj;
                for (var index = 1; index < length; index++) {
                    var source = arguments[index]
                      , keys = keysFunc(source)
                      , l = keys.length;
                    for (var i = 0; i < l; i++) {
                        var key = keys[i];
                        if (!undefinedOnly || obj[key] === void 0)
                            obj[key] = source[key]
                    }
                }
                return obj
            }
        };
        ["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"].forEach(function(name) {
            Fn["is" + name] = function(obj) {
                return toString.call(obj) === "[object " + name + "]"
            }
        });
        Fn.now = Date.now || function() {
            return (new Date).getTime()
        }
        ;
        Fn.throttle = function(func, wait, options) {
            var context, args, result;
            var timeout = null;
            var previous = 0;
            if (!options)
                options = {};
            var later = function later() {
                previous = options.leading === false ? 0 : Fn.now();
                timeout = null;
                result = func.apply(context, args);
                if (!timeout)
                    context = args = null
            };
            return function() {
                var now = Fn.now();
                if (!previous && options.leading === false)
                    previous = now;
                var remaining = wait - (now - previous);
                context = this;
                args = arguments;
                if (remaining <= 0 || remaining > wait) {
                    if (timeout) {
                        clearTimeout(timeout);
                        timeout = null
                    }
                    previous = now;
                    result = func.apply(context, args);
                    if (!timeout)
                        context = args = null
                } else if (!timeout && options.trailing !== false) {
                    timeout = setTimeout(later, remaining)
                }
                return result
            }
        }
        ;
        Fn.debounce = function(func, wait, immediate) {
            var timeout, args, context, timestamp, result;
            var later = function later() {
                var last = Fn.now() - timestamp;
                if (last < wait && last >= 0) {
                    timeout = setTimeout(later, wait - last)
                } else {
                    timeout = null;
                    if (!immediate) {
                        result = func.apply(context, args);
                        if (!timeout)
                            context = args = null
                    }
                }
            };
            return function() {
                context = this;
                args = arguments;
                timestamp = Fn.now();
                var callNow = immediate && !timeout;
                if (!timeout)
                    timeout = setTimeout(later, wait);
                if (callNow) {
                    result = func.apply(context, args);
                    context = args = null
                }
                return result
            }
        }
        ;
        Fn.allKeys = function(obj) {
            if (!Fn.isObject(obj))
                return [];
            var keys = [];
            for (var key in obj) {
                keys.push(key)
            }
            return keys
        }
        ;
        Fn.extend = createAssigner(Fn.allKeys);
        Fn.isObject = function(obj) {
            var type = typeof obj === "undefined" ? "undefined" : Ue6Y(obj);
            return type === "function" || type === "object" && !!obj
        }
        ;
        Fn.isArray = nativeIsArray || function(obj) {
            return toString.call(obj) === "[object Array]"
        }
        ;
        Fn.clone = function(obj) {
            if (!Fn.isObject(obj))
                return obj;
            return Fn.isArray(obj) ? obj.slice() : Fn.extend({}, obj)
        }
        ;
        Fn.formatSeconds = function(sec) {
            sec = sec | 0;
            if (sec < 3600) {
                return ("0" + (sec / 60 | 0)).slice(-2) + ":" + ("0" + sec % 60).slice(-2)
            } else {
                return ("0" + (sec / 3600 | 0)).slice(-2) + ":" + ("0" + (sec % 3600 / 60 | 0)).slice(-2) + ":" + ("0" + sec % 3600 % 60).slice(-2)
            }
        }
        ;
        Fn.object2query = function(obj) {
            var str = "";
            for (var i in obj) {
                if (typeof obj[i] !== "undefined") {
                    str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]) + "&"
                }
            }
            return str.slice(0, -1)
        }
        ;
        module.exports = Fn
    }
    , {}],
    31: [function(require, module, exports) {
        "use strict";
        var document = require("global/document");
        var FullscreenApi = {};
        var apiMap = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]];
        var specApi = apiMap[0];
        var browserApi = void 0;
        for (var i = 0; i < apiMap.length; i++) {
            if (apiMap[i][1]in document) {
                browserApi = apiMap[i];
                break
            }
        }
        if (browserApi) {
            for (var bc0x = 0; bc0x < browserApi.length; bc0x++) {
                FullscreenApi[specApi[bc0x]] = browserApi[bc0x]
            }
        }
        module.exports = FullscreenApi
    }
    , {
        "global/document": 2
    }],
    32: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var Ue6Y = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj
        }
        : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
        ;
        exports.each = each;
        exports.reduce = reduce;
        exports.assign = assign;
        exports.isObject = isObject;
        exports.isPlain = isPlain;
        var toString = Object.prototype.toString;
        var keys = function keys(object) {
            return isObject(object) ? Object.keys(object) : []
        };
        function each(object, fn) {
            keys(object).forEach(function(key) {
                return fn(object[key], key)
            })
        }
        function reduce(object, fn) {
            var initial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            return keys(object).reduce(function(accum, key) {
                return fn(accum, object[key], key)
            }, initial)
        }
        function assign(target) {
            for (var dt1x = arguments.length, sources = Array(dt1x > 1 ? dt1x - 1 : 0), L0x = 1; L0x < dt1x; L0x++) {
                sources[L0x - 1] = arguments[L0x]
            }
            if (Object.assign) {
                return Object.assign.apply(Object, [target].concat(sources))
            }
            sources.forEach(function(source) {
                if (!source) {
                    return
                }
                each(source, function(value, key) {
                    target[key] = value
                })
            });
            return target
        }
        function isObject(value) {
            return !!value && (typeof value === "undefined" ? "undefined" : Ue6Y(value)) === "object"
        }
        function isPlain(value) {
            return isObject(value) && toString.call(value) === "[object Object]" && value.constructor === Object
        }
    }
    , {}]
}, {}, [27]);
(function() {
    var c9h = NEJ.P, k9b = c9h("nej.u"), a8i = c9h("nej.e"), h9c = c9h("nej.v"), v9m = c9h("nej.j"), cd0x = c9h("nej.ut"), x9o = c9h("nm.w"), l9c = c9h("nm.x"), q9h = c9h("nm.d"), b9i, K0x;
    x9o.uh6b = NEJ.C();
    b9i = x9o.uh6b.N0x(cd0x.cH1x);
    var kN3x = q9h.hP2x.A9r();
    var VIDEO_TYPE = x9o.uh6b.VIDEO_TYPE = {
        MV: 21,
        VIDEO: 41
    };
    var MV_STATE = x9o.uh6b.MV_STATE = {
        FREE: 1,
        SONG_PAY: 2,
        VIP_PAY: 3,
        SPECIAL_VIP_PAY: 4,
        MV_PAY: 5
    };
    var FullscreenApi = l9c.HA1x || {};
    b9i.cv0x = function() {
        this.cD1x();
        this.ER0x = this.ER0x.f9e(this)
    }
    ;
    b9i.bm0x = function(e9f) {
        this.bn0x(e9f);
        this.eC1x = e9f.type;
        this.he2x = e9f.id;
        if (this.cfM4Q()) {
            this.cfJ4N(e9f)
        } else {
            this.cfE3x(e9f)
        }
    }
    ;
    b9i.bB0x = function() {
        this.bG0x();
        if (this.ji3x) {
            this.ji3x.off("core", this.Zp8h)
        }
    }
    ;
    b9i.cfJ4N = function(e9f) {
        var bH0x = e9f.parent;
        var Y0x = "/style/swf/MVPlayer_fee.swf?v=20170527";
        var hW2x = e9f.flashvars || "";
        if (typeof hW2x == "string")
            hW2x = k9b.VA6u(hW2x, "&");
        hW2x = NEJ.X({
            autoPlay: true
        }, hW2x);
        a8i.sm6g({
            src: Y0x,
            width: hW2x.width,
            height: hW2x.height,
            hidden: false,
            parent: bH0x,
            params: {
                flashvars: k9b.wz7s(hW2x, "&", true),
                allowScriptAccess: "always",
                allowfullscreen: "true",
                allowNetworking: "all",
                wmode: "transparent",
                quality: "high",
                bgcolor: "#000000"
            }
        })
    }
    ;
    b9i.cfE3x = function(e9f) {
        this.ji3x = new VideoCore({
            parent: e9f.parent,
            id: e9f.id,
            type: e9f.type,
            autonext: !!e9f.autonext,
            showops: !!e9f.showops
        });
        this.iP3x = this.ji3x.getState();
        this.Zp8h = this.Zp8h.f9e(this);
        this.ji3x.on("core", this.Zp8h);
        this.er1x(e9f.time || 0)
    }
    ;
    b9i.cfM4Q = function() {
        return !document.createElement("video").canPlayType
    }
    ;
    b9i.er1x = function(bA0x) {
        if (this.ji3x)
            this.ji3x.play(bA0x)
    }
    ;
    b9i.fM2x = function() {
        if (this.ji3x)
            this.ji3x.pause()
    }
    ;
    b9i.cLl1x = function() {
        if (!this.ji3x)
            return null;
        return this.ji3x.getState()
    }
    ;
    b9i.cLn1x = function() {
        if (!this.ji3x)
            return document.body;
        return this.ji3x.el()
    }
    ;
    b9i.Xb7U = function() {
        if (!this.ji3x)
            return 0;
        return this.ji3x.getCurrentTime()
    }
    ;
    b9i.uW7P = function() {
        if (!this.ji3x)
            return false;
        return this.ji3x.isPlaying()
    }
    ;
    b9i.biY1x = function(cfc3x) {
        if (!this.ji3x)
            return;
        this.ji3x.setLiked(cfc3x)
    }
    ;
    b9i.bja1x = function(cfb3x) {
        if (!this.ji3x)
            return;
        this.ji3x.setSubed(cfb3x)
    }
    ;
    b9i.bEV6P = function() {
        if (!this.ji3x)
            return;
        this.ji3x.emit("stopCountdown")
    }
    ;
    b9i.bEU6O = function() {
        if (!this.ji3x)
            return;
        this.ji3x.emit("continueCountdown")
    }
    ;
    b9i.Zp8h = function(d9g, cn0x, U0x) {
        cn0x = cn0x || {};
        var cC1x = cn0x.callback;
        switch (d9g) {
        case "mv":
            this.ceN3x(cC1x);
            this.ceH3x();
            break;
        case "video":
            this.ceh3x(cC1x);
            this.cdX3x();
            break;
        case "mv-playurl":
            this.cdW3x(cn0x.br, cC1x);
            break;
        case "video-playurl":
            this.cdV3x(cn0x.br, cC1x);
            break;
        case "next":
            this.cdR3x();
            break;
        case "refresh":
            this.cdz3x(cn0x.state);
            break;
        case "actionLog":
            if (this.bim0x("on" + d9g)) {
                if (!this.z9q("on" + d9g, cn0x, U0x)) {
                    this.bEL6F(cn0x, U0x)
                }
            } else {
                this.bEL6F(cn0x, U0x)
            }
            break;
        case "playerror":
            this.cdv3x(cn0x);
        case "fullScreenChange":
            this.ER0x();
        case "sub":
        case "like":
        case "share":
        case "fee":
            this.z9q("on" + d9g, cn0x);
            break
        }
    }
    ;
    b9i.cdv3x = function(bF0x) {
        var cL1x = l9c.fp2x("{0} {1}", k9b.id3x(new Date, "yyyy-MM-dd HH:mm:ss"), bF0x);
        kN3x.bTv1x(cL1x)
    }
    ;
    b9i.bEL6F = function(cn0x, U0x) {
        l9c.sq6k(U0x, cn0x)
    }
    ;
    b9i.ceN3x = function(cC1x) {
        var V0x = this.iP3x;
        var cn0x = k9b.cz0x({
            type: "MP4",
            id: V0x.get("id")
        });
        var fs2x = this;
        v9m.bk0x("/api/v1/mv/detail", {
            type: "json",
            query: cn0x,
            onload: function(bW0x) {
                var i9b = bW0x.data
                  , My2x = bW0x.mp
                  , oZ5e = [];
                k9b.bd0x(i9b.brs, function(rf5k) {
                    oZ5e.push({
                        br: rf5k.br,
                        src: "",
                        fee: My2x.fee || 0,
                        mvFee: My2x.mvFee || 0,
                        payed: My2x.payed || 0,
                        mvId: My2x.id
                    })
                });
                oZ5e.sort(function(a, b) {
                    return b.br - a.br
                });
                V0x.set({
                    title: i9b.name,
                    artists: i9b.artists,
                    brs: oZ5e,
                    poster: i9b.cover,
                    duration: i9b.duration / 1e3 | 0,
                    subed: bW0x.subed,
                    loaded: true,
                    cp: My2x.cp
                });
                fs2x.cdp3x(My2x);
                cC1x()
            },
            onerror: cC1x
        })
    }
    ;
    b9i.cdp3x = function(mp) {
        if (!mp)
            return;
        var mvFee = mp.mvFee;
        var payed = mp.payed;
        var feeType = mvFee & 65535;
        var state = "";
        if (feeType === 0) {
            state = MV_STATE.FREE
        } else if (feeType === 1) {
            state = MV_STATE.SONG_PAY
        } else if (feeType & 2) {
            state = MV_STATE.VIP_PAY
        } else if (feeType & 4) {
            state = MV_STATE.SPECIAL_VIP_PAY
        } else if (feeType & 8) {
            state = MV_STATE.MV_PAY
        }
        state && this.iP3x && this.iP3x.set && this.iP3x.set({
            mvstatus: state,
            mvpayed: payed
        })
    }
    ;
    b9i.ceH3x = function() {
        var V0x = this.iP3x;
        var cn0x = k9b.cz0x({
            composeliked: "true",
            threadid: "R_MV_5_" + V0x.get("id")
        });
        v9m.bk0x("/api/comment/commentthread/info", {
            type: "json",
            query: cn0x,
            onload: function(bW0x) {
                V0x.set({
                    liked: bW0x.liked
                })
            }
        })
    }
    ;
    b9i.ceh3x = function(cC1x) {
        var V0x = this.iP3x;
        var cn0x = k9b.cz0x({
            id: V0x.get("id")
        });
        v9m.bk0x("/api/cloudvideo/v1/video/detail", {
            type: "json",
            query: cn0x,
            onload: function(bW0x) {
                var i9b = bW0x.data
                  , oZ5e = [];
                k9b.bd0x(i9b.resolutions, function(rf5k) {
                    oZ5e.push({
                        br: rf5k.resolution,
                        src: "",
                        restricted: false
                    })
                });
                oZ5e.sort(function(a, b) {
                    return b.br - a.br
                });
                V0x.set({
                    title: i9b.title,
                    artists: [i9b.creator],
                    brs: oZ5e,
                    poster: i9b.coverUrl,
                    duration: i9b.durationms / 1e3 | 0,
                    loaded: true
                });
                cC1x()
            },
            onerror: cC1x
        })
    }
    ;
    b9i.cdX3x = function() {
        var V0x = this.iP3x;
        var cdh3x = k9b.cz0x({
            composeliked: "true",
            threadid: "R_VI_62_" + V0x.get("id")
        });
        v9m.bk0x("/api/comment/commentthread/info", {
            type: "json",
            query: cdh3x,
            onload: function(bW0x) {
                V0x.set({
                    liked: bW0x.liked
                })
            }
        });
        var cdg3x = k9b.cz0x({
            id: V0x.get("id")
        });
        v9m.bk0x("/api/cloudvideo/v1/video/statistic", {
            type: "json",
            query: cdg3x,
            onload: function(bW0x) {
                V0x.set({
                    subed: bW0x.data && bW0x.data.subscribed
                })
            }
        })
    }
    ;
    b9i.cdR3x = function() {
        var fs2x = this;
        var V0x = this.iP3x;
        var cn0x = k9b.cz0x({
            id: V0x.get("id"),
            type: V0x.get("type") == VIDEO_TYPE.MV ? 0 : 1
        });
        v9m.bk0x("/api/cloudvideo/v1/allvideo/rcmd", {
            type: "json",
            query: cn0x,
            onload: function(bW0x) {
                var i9b = bW0x.data;
                if (!i9b || i9b.length == 0 || i9b.length == 1 && i9b[0].vid == V0x.get("id")) {
                    fs2x.bEH6B()
                } else {
                    for (var i = 0; i < i9b.length; i++) {
                        if (i9b[i].vid !== V0x.get("id")) {
                            var cda3x = i9b[i];
                            break
                        }
                    }
                    fs2x.bEF6z(cda3x)
                }
            },
            onerror: function() {
                fs2x.bEH6B()
            }
        })
    }
    ;
    b9i.bEH6B = function() {
        var fs2x = this;
        var V0x = this.iP3x;
        v9m.bk0x("/api/cloudvideo/v1/allvideo/hot", {
            type: "json",
            onload: function(bW0x) {
                var i9b = bW0x.data;
                if (!i9b || i9b.length == 0) {
                    V0x.set("autonext", false)
                } else {
                    fs2x.bEF6z(i9b[0])
                }
            },
            onerror: function() {
                V0x.set("autonext", false)
            }
        })
    }
    ;
    b9i.bEF6z = function(uc6W) {
        this.iP3x.set("next", {
            id: uc6W.vid,
            type: uc6W.type == 0 ? VIDEO_TYPE.MV : VIDEO_TYPE.VIDEO,
            title: uc6W.title
        })
    }
    ;
    b9i.cdW3x = function(rf5k, cC1x) {
        var V0x = this.iP3x;
        var cn0x = k9b.cz0x({
            id: V0x.get("id"),
            r: rf5k
        });
        v9m.bk0x("/api/song/enhance/play/mv/url", {
            type: "json",
            query: cn0x,
            onload: function(bW0x) {
                cC1x(null, bW0x.data.url)
            },
            onerror: cC1x
        })
    }
    ;
    b9i.cdV3x = function(rf5k, cC1x) {
        var V0x = this.iP3x;
        var cn0x = k9b.cz0x({
            ids: JSON.stringify([V0x.get("id")]),
            resolution: rf5k
        });
        v9m.bk0x("/api/cloudvideo/playurl", {
            type: "json",
            query: cn0x,
            onload: function(bW0x) {
                cC1x(null, bW0x.urls[0].url)
            },
            onerror: cC1x
        })
    }
    ;
    b9i.cdz3x = function(V0x) {
        this.bED6x(V0x.get("type"), V0x.get("id"))
    }
    ;
    b9i.bED6x = function(u9l, D0x, bA0x) {
        var hX2x = typeof bA0x == "number" && bA0x > 0 ? "&t=" + bA0x : "";
        if (u9l == VIDEO_TYPE.MV) {
            location.dispatch2("/mv?id=" + D0x + hX2x)
        } else if (u9l == VIDEO_TYPE.VIDEO) {
            location.dispatch2("/video?id=" + D0x + hX2x)
        } else {
            location.reload()
        }
    }
    ;
    b9i.ER0x = function() {
        if (!this.ji3x)
            return;
        var V0x = this.ji3x.getState()
          , u9l = V0x.get("type")
          , D0x = V0x.get("id");
        if (!!V0x.get("isFullscreen"))
            return;
        if (D0x == this.he2x && u9l == this.eC1x)
            return;
        this.bED6x(u9l, D0x, this.ji3x.getCurrentTime() | 0)
    }
}
)();
(function() {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), I0x = c9h("nej.ut"), v9m = c9h("nej.j"), q9h = c9h("nm.d"), F0x = c9h("nm.m"), M0x = c9h("nm.m.p"), n9e = c9h("nm.l"), x9o = c9h("nm.w"), l9c = c9h("nm.x"), cw0x = c9h("api"), b9i, K0x;
    var FullscreenApi = l9c.HA1x || {};
    if (M0x.bkq1x)
        return;
    M0x.bkq1x = NEJ.C();
    b9i = M0x.bkq1x.N0x(F0x.dj1x);
    b9i.bJ0x = function() {
        this.bR0x();
        if (GRef == "mail") {
            this.btC3x()
        }
        this.be0x = this.vc7V();
        if (!this.be0x) {
            location.dispatch2("/404");
            return
        }
        this.jb3x = a8i.B9s("comment-box");
        this.ub6V = a8i.B9s("flash_box");
        this.bQQ0x = a8i.B9s("id_video_content_box");
        this.AW9N = a8i.B9s("id_video_content_desc");
        if (this.AW9N) {
            this.cpB6v()
        }
        if (this.bQQ0x) {
            this.bQQ0x.style.display = ""
        }
        if (this.jb3x) {
            this.lW4a = x9o.xs8k.A9r({
                status: 0,
                parent: this.jb3x,
                commentThreadId: this.be0x.threadId,
                resourceUserId: 0,
                commentCount: 0,
                onlikeclick: this.btk3x.f9e(this),
                onaddclick: this.btj3x.f9e(this),
                onfocus: this.bti3x.f9e(this),
                onblur: this.bth3x.f9e(this),
                onaddclick: this.vT7M.f9e(this, "comment")
            })
        }
        try {
            top.document.title = a8i.B9s("flag_title1").innerText
        } catch (e) {}
        this.btb3x();
        this.bsY3x();
        var cn0x = location.search.substring(1);
        cn0x = k9b.VA6u(cn0x, "&");
        this.bw0x = x9o.uh6b.A9r({
            parent: this.ub6V,
            id: this.be0x.vid,
            type: x9o.uh6b.VIDEO_TYPE.VIDEO,
            autonext: true,
            showops: true,
            time: cn0x.t || 0,
            subed: this.fx2x.subed,
            liked: this.fx2x.liked,
            flashvars: a8i.t9k(this.ub6V, "flashvars"),
            onlike: this.AG9x.f9e(this),
            onsub: this.AF9w.f9e(this),
            onshare: this.sY6S.f9e(this)
        });
        this.AO9F = x9o.beA0x.A9r({
            type: 1,
            subsuccess: this.AQ9H.f9e(this, true, false),
            suberror: this.AQ9H.f9e(this, true, true),
            unsubsuccess: this.AQ9H.f9e(this, false, false),
            unsuberror: this.AQ9H.f9e(this, false, true),
            likesuccess: this.AR9I.f9e(this, true, false),
            likeerror: this.AR9I.f9e(this, true, true),
            unlikesuccess: this.AR9I.f9e(this, false, false),
            unlikeerror: this.AR9I.f9e(this, false, true)
        });
        h9c.s9j(n9e.pk5p, "shareclose", this.bsP3x.f9e(this));
        if (FullscreenApi.fullscreenchange) {
            h9c.s9j(document, FullscreenApi.fullscreenchange, this.ER0x.f9e(this))
        }
        x9o.Hx1x.A9r({
            cat: "detail"
        });
        this.ky3x = l9c.Qp4t(this.ky3x.f9e(this), 300);
        h9c.s9j(window, "scroll", this.ky3x);
        h9c.s9j("j-video-side", "click", this.bsL3x.f9e(this));
        this.bsH3x()
    }
    ;
    b9i.bsY3x = function() {
        this.Pb4f = a8i.B9s("j-op");
        var hQ2x = a8i.E0x(this.Pb4f, "j-flag");
        this.mh4l = hQ2x.shift();
        this.jo3x = hQ2x.shift();
        this.OZ4d = hQ2x.shift();
        h9c.s9j(this.Pb4f, "click", this.bS0x.f9e(this));
        this.fx2x = {
            likeCount: parseInt(a8i.t9k(this.mh4l, "count")),
            subCount: parseInt(a8i.t9k(this.jo3x, "count")),
            shareCount: parseInt(a8i.t9k(this.OZ4d, "count")),
            liked: a8i.t9k(this.mh4l, "liked") !== "false",
            subed: a8i.t9k(this.jo3x, "subed") !== "false"
        }
    }
    ;
    b9i.btb3x = function() {
        var g9d = a8i.B9s("j-sharedata")
          , Ak9b = a8i.t9k(g9d, "purl")
          , W0x = a8i.t9k(g9d, "name")
          , Gp0x = a8i.t9k(g9d, "author")
          , Gq0x = a8i.t9k(g9d, "authors");
        this.bsr3x = {
            purl: Ak9b,
            name: W0x,
            author: Gp0x,
            authors: Gq0x
        }
    }
    ;
    b9i.bti3x = function() {
        this.sW6Q();
        this.focused = true
    }
    ;
    b9i.bth3x = function() {
        this.focused = false;
        if (window.pageYOffset < 400) {
            this.qh5m()
        }
    }
    ;
    b9i.bsP3x = function() {
        this.bw0x.iP3x.set("sharing", false);
        if (this.playing) {
            this.bw0x.er1x()
        }
        this.qh5m()
    }
    ;
    b9i.bsH3x = function() {
        var hiddenProperty = "hidden"in document ? "hidden" : "webkitHidden"in document ? "webkitHidden" : "mozHidden"in document ? "mozHidden" : null;
        if (!hiddenProperty) {
            return
        }
        var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, "visibilitychange");
        var self = this;
        var onVisibilityChange = function() {
            if (document[hiddenProperty]) {
                self.sW6Q()
            } else {
                self.qh5m()
            }
        };
        document.addEventListener(visibilityChangeEvent, onVisibilityChange)
    }
    ;
    b9i.btC3x = function() {
        try {
            l9c.MK2x(0, 0, "stop")
        } catch (e) {
            setTimeout(arguments.callee, 100)
        }
    }
    ;
    b9i.vc7V = function() {
        var i9b = null;
        var cL1x = a8i.ij3x("txt-data-video") || "";
        if (cL1x) {
            try {
                i9b = JSON.parse(cL1x)
            } catch (e) {}
        }
        return i9b
    }
    ;
    b9i.cpB6v = function() {
        if (this.be0x && this.be0x.description && this.AW9N) {
            this.AW9N.innerHTML = l9c.bay8q(k9b.dI1x(this.be0x.description || ""))
        }
    }
    ;
    b9i.btk3x = function(d9g) {
        window.log("click", {
            page: "videoplay",
            type: d9g.action == "like" ? "zan_cmmt" : "unzan_cmmt",
            id: this.be0x.vid,
            sourceId: d9g.commentId
        })
    }
    ;
    b9i.btj3x = function(d9g) {
        window.log("click", {
            page: "videoplay",
            type: "comment",
            id: this.be0x.vid,
            sourceId: null
        })
    }
    ;
    b9i.bS0x = function(d9g) {
        var G0x = h9c.X0x(d9g, "d:action");
        if (!G0x)
            return;
        var U0x = a8i.t9k(G0x, "action");
        switch (U0x) {
        case "like":
            this.AG9x();
            break;
        case "sub":
            this.AF9w();
            break;
        case "share":
            this.sY6S();
            break
        }
    }
    ;
    b9i.bsL3x = function(d9g) {
        var G0x = h9c.X0x(d9g, "d:logAction");
        if (!G0x)
            return;
        var U0x = a8i.t9k(G0x, "logAction")
          , dV1x = a8i.t9k(G0x, "logExt");
        this.vT7M(U0x, l9c.Gf0x(dV1x))
    }
    ;
    b9i.AG9x = function() {
        if (this.Ih1x()) {
            this.sW6Q();
            if (this.fx2x.liked) {
                this.AO9F.wl7e(this.be0x.vid)
            } else {
                this.AO9F.pj5o(this.be0x.vid)
            }
            this.mh4l.disabled = true;
            this.vT7M("zan")
        }
    }
    ;
    b9i.AR9I = function(ql5q, zC8u) {
        this.qh5m();
        if (!zC8u) {
            if (ql5q) {
                this.fx2x.likeCount = (this.fx2x.likeCount || 0) + 1
            } else {
                this.fx2x.likeCount = Math.max(this.fx2x.likeCount - 1, 0)
            }
            this.fx2x.liked = ql5q;
            this.bw0x.biY1x(ql5q)
        }
        var AU9L;
        if (this.fx2x.liked) {
            AU9L = '<em class="icn icn-praised"></em>'
        } else {
            AU9L = '<em class="icn icn-praise"></em>'
        }
        if (this.fx2x.likeCount > 0) {
            this.mh4l.innerHTML = "<i>" + AU9L + "(" + l9c.iQ3x(this.fx2x.likeCount) + ")</i>"
        } else {
            this.mh4l.innerHTML = "<i>" + AU9L + "赞</i>"
        }
        this.mh4l.disabled = false;
        this.bw0x.biY1x(this.fx2x.liked)
    }
    ;
    b9i.AF9w = function() {
        if (this.Ih1x()) {
            this.sW6Q();
            if (this.fx2x.subed) {
                a8i.w9n(this.jo3x, "u-btni-unfav-dis");
                this.AO9F.PG4K(this.be0x.vid)
            } else {
                a8i.w9n(this.jo3x, "u-btni-fav-dis");
                this.AO9F.PI4M(this.be0x.vid)
            }
            this.jo3x.disabled = true;
            this.vT7M("subscribe")
        }
    }
    ;
    b9i.AQ9H = function(ql5q, zC8u) {
        this.qh5m();
        if (!zC8u) {
            if (ql5q) {
                this.fx2x.subCount = (this.fx2x.subCount || 0) + 1
            } else {
                this.fx2x.subCount = Math.max(this.fx2x.subCount - 1, 0)
            }
            this.fx2x.subed = ql5q;
            this.bw0x.bja1x(ql5q)
        }
        if (this.fx2x.subCount > 0) {
            this.jo3x.innerHTML = "<i>(" + l9c.iQ3x(this.fx2x.subCount) + ")</i>"
        } else {
            this.jo3x.innerHTML = "<i>收藏</i>"
        }
        if (this.fx2x.subed) {
            this.jo3x.className = "btn u-btni u-btni-unfav"
        } else {
            this.jo3x.className = "btn u-btni u-btni-fav"
        }
        this.jo3x.disabled = false;
        this.bw0x.bja1x(this.fx2x.subed)
    }
    ;
    b9i.sY6S = function() {
        this.bw0x.iP3x.set("sharing", true);
        this.sW6Q();
        if (this.bw0x.iP3x.get("playstate") === 3) {
            this.playing = true;
            this.bw0x.fM2x()
        } else {
            this.playing = false
        }
        if (this.Ih1x()) {
            l9c.kR3x(NEJ.X({
                parent: document[FullscreenApi.fullscreenElement] || document.body,
                rid: this.be0x.vid,
                type: 41,
                onshare: this.bsj3x.f9e(this)
            }, this.bsr3x));
            this.vT7M("share")
        }
    }
    ;
    b9i.bsj3x = function() {
        this.fx2x.shareCount = (this.fx2x.shareCount || 0) + 1;
        this.OZ4d.innerHTML = "<i>(" + l9c.iQ3x(this.fx2x.shareCount) + ")</i>";
        this.bw0x.iP3x.set("sharing", false);
        if (this.playing) {
            this.bw0x.er1x()
        }
        this.qh5m()
    }
    ;
    b9i.ER0x = function() {
        n9e.pk5p.bq0x()
    }
    ;
    b9i.Ih1x = function() {
        if (!l9c.gZ2x()) {
            document[FullscreenApi.fullscreenElement] && document[FullscreenApi.exitFullscreen] && document[FullscreenApi.exitFullscreen]();
            return false
        } else {
            return true
        }
    }
    ;
    b9i.sW6Q = function(d9g) {
        this.bw0x.bEV6P()
    }
    ;
    b9i.qh5m = function(d9g) {
        this.bw0x.bEU6O()
    }
    ;
    b9i.ky3x = function() {
        if (window.pageYOffset >= 400) {
            this.sW6Q();
        } else {
            if (!this.focused) {
                this.qh5m()
            }
        }
    }
    ;
    b9i.vT7M = function(u9l, dV1x) {
        l9c.sq6k("click", NEJ.X({
            page: "videoplay",
            type: u9l,
            id: this.be0x.vid,
            isfullscreen: +!!document[FullscreenApi.fullscreenElement]
        }, dV1x))
    }
    ;
    a8i.cU1x("template-box");
    var instance = new M0x.bkq1x
}
)()
