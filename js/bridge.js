(function () {
    if (window.bridge) {
        return;
    }
    var default_data = {
        error: "1"
    };

    var connectMerchantJSBridge = function (callback) {
        try {
            if (window.TestJavascriptBridge) {
                callback(TestJavascriptBridge);
            } else {
                document.addEventListener("TestJavascriptBridgeReady", function () {
                    callback(TestJavascriptBridge);
                }, false);
            }
        } catch (ex) {
        }
    };

    var cmbMerchantBridge = {
        initSignNet: function (payData, name) {
            if (!payData) {
                payData = default_data;
            }
            connectMerchantJSBridge(function (bridge) {
                if (typeof bridge === "undefined") {
                    return;
                }
                bridge.callHandler(name, JSON.stringify(payData));
            });
        },
    };

    /*app native调用本页面方法*/
    connectMerchantJSBridge(function (bridge) {
        bridge.init(function (message, responseCallback) {

        });

        bridge.registerHandler("click1", function (data, responseCallback) {
            responseCallback("receive click1");
            /*弹窗*/
            dialog();
        });

        bridge.registerHandler("click2", function (data, responseCallback) {
            responseCallback("receive click2");
        });

        bridge.registerHandler("click3", function (data, responseCallback) {
            responseCallback("receive click3");
        });
    })


    window.cmbMerchantBridge = cmbMerchantBridge;

    function click1(message) {

        try {
            cmbMerchantBridge.initSignNet(message, "initSignNetPay");
        } catch (ex) {
        }
    }

    function click2(message) {
        try {
            cmbMerchantBridge.initSignNet(message, "initSignNetShare");
        } catch (ex) {
        }
    }

    /*打开当前页面*/
    function startPager(message) {
        try {
            cmbMerchantBridge.initSignNet(message, "startPager");
        } catch (ex) {
        }
    }

    /*结束当前教程*/
    function finishCurrentPager(message) {
        try {
            cmbMerchantBridge.initSignNet(message, "finishCurrentPager");
        } catch (ex) {
        }
    }

    /*结束所有教程*/
    function finishAllPager(message) {
        try {
            cmbMerchantBridge.initSignNet(message, "finishAllPager");
        } catch (ex) {
        }
    }


    /*弹窗*/
    function dialog() {
        click2();
    }

    /*  <!-- 这个是本地测试方法，实际使用使用以上两个方法 -->
      function JsHandler() {
          var objData = new datas();
          var handlerData = objData.handlerData;
          cmbMerchantBridge.initSignNet(handlerData, "jsHandler1");

          cmbMerchantBridge.initSignNet(handlerData, "jsHandler2");
      }*/

    window.bridge = {
        click1: click1,
        click2: click2,
        startPager: startPager,
        finishCurrentPager: finishCurrentPager,
        finishAllPager: finishAllPager
    };

})();