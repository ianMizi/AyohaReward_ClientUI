Ext.define('ianMizi.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_PaymentMethodList', {
    requires: [
      'Ext.util.DelayedTask'
    ],
});

var _FloatPanel_AyohaStore_PaymentMethodList;


var isFloatPanel_AyohaStore_PaymentMethodListOpen = 'N';





function FloatPanel_AyohaStore_PaymentMethodList() {

    _FloatPanel_AyohaStore_PaymentMethodList =
     Ext.create('Ext.Panel', {
         zIndex: 360,
         xtype: 'container',
         // height: '50%',
         width: '95%',
         height: 460,
         //width: 280,
         id: 'LoadingFloatPanel_AyohaStore_PaymentMethodListID',
         draggable: false,
     

         centered: true,
         //bottom: 64,         
         modal: true,
         hideOnMaskTap: false,
         layout: {
             type: 'fit'
         },
         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             type: 'popOut',
             duration: 250,
             easing: 'ease-out'
             //type: 'slideOut',
             //direction: 'down',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'border-bottom:1px none;background-color:white;',
         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_AyohaStore_PaymentMethodList.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaStore_PaymentMethodListOpen = 'N';
                             RemovePages("FloatPanel_AyohaStore_PaymentMethodListHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaStore_PaymentMethodList.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaStore_PaymentMethodListOpen = 'N';
                             RemovePages("FloatPanel_AyohaStore_PaymentMethodListHide()");
                         }
                        
                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,

             height: '100%',
             width: '100%',
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
             style: 'border-bottom:0px solid;background-color:transparent;',

             // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
             layout: {
                 type: 'vbox',
                 pack: 'start',
                 align: 'center'

             },

             items: [








            {


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'FloatPanel_AyohaStore_PaymentMethodListBorderBg',
                docked: 'top',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: ' background-color:transparent;',
                height: '100%',
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'left'
                },
                items: [

                         {

                             xtype: 'container',
                             width: '100%',
                             docked: 'top',
                             // width: 40,
                             style: ' background-color:transparent;',
                             //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                             //  title: '<font size="3" color="white">Live Tracking Map</font>',
                             //hidden: true,

                             id: 'containerFloatPanel_AyohaStore_PaymentMethodListHeader',
                             //style: {
                             //    // background: '#D25959',
                             //    background: 'transparent',
                             //    // border: '2px'
                             //},
                             //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                             // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                             layout: {
                                 type: 'hbox',
                                 pack: 'left',
                                 align: 'left',
                             },
                             // hidden:true,
                             items:
                                    [


                                                  {
                                                      xtype: 'button',
                                                      id: 'btnFloatPanel_AyohaStore_PaymentMethodListBack',
                                                      height: 30,
                                                      width: 35,
                                                      // iconCls: 'list',
                                                      html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                      ui: 'plain',
                                                      handler: function () {

                                                          _FloatPanel_AyohaStore_PaymentMethodList.hide(Ext.fx.Animation({
                                                              type: 'slideOut',
                                                              direction: 'left',
                                                              easing: 'cubic-bezier(.7,0,.7,1)',
                                                              duration: 250

                                                          }));
                                                          isFloatPanel_AyohaStore_PaymentMethodListOpen = 'N';
                                                          RemovePages("FloatPanel_AyohaStore_PaymentMethodListHide()");

                                                      }
                                                  },

                                                  {
                                                      xtype: 'spacer'
                                                  },


                                                   {
                                                       margin: '0 0 0 0',
                                                       id: 'htmlFloatPanel_AyohaStore_PaymentMethodList_TitleHeaderTxt',
                                                       html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Payment Methods</div>',

                                                   },

                                            












                                    ]

                         },


                   {
                       xtype: 'list',
                       width: '100%',
                       height: '100%',
                       // height: '98%',
                       // flex: 1,
                       //store: 'PaymentMethodStore',
                       store: _DataStore_PaymentMethodStore,
                       id: 'FloatPanel_AyohaStore_PaymentMethodList',
                       scrollable: {
                           direction: 'vertical',
                           indicators: {
                               y: {
                                   autoHide: true
                               },
                               x: {
                                   autoHide: true
                               }
                           }
                       },
                       mode: 'SINGLE',
                       style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                       // width: '100%',
                       disableSelection: true,
                       //itemTpl: '<div onclick="FloatPanel_AyohaStore_PaymentMethodListPaymentMethodSelected({ID})" class="myContent" style="background-color:white;width:104%">' +
                       //    '<table style="border-collapse:collapse;border-spacing:0;width:104%;background-color:white;margin:-10px 0px 0px -13px;height:90px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:25%;vertical-align:center"><img src="{Icon}" style="border:1px none black; width:75px;height:75px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center"><b>{PaymentMethodName}</b></td></tr></table>' +
                       //    '<br>' +
                       //    '<div style="width:104%;text-align:left;margin:-60px 0px 0px 10px;background-color:transparent;"><button  class="buttonsHtmlBgTransparent"><img src="resources/icons/backgroundTransparent.png" style="width: 23px; height: 23px; margin:0px 0px 0px 40px;" /></button></div></div>',



                       itemTpl: '<div onclick="FloatPanel_AyohaStore_PaymentMethodListPaymentMethodSelected({ID})" class="myContent" style="background-color:white;width:104%;height:75px;">' +
                           //'<div onclick="FloatPanel_AyohaStore_PaymentMethodListPaymentMethodSelected({ID})" style="overflow:auto;width:104%;margin:-2px 0px 0px 0px;background-color:white;height:90px;"><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:20%;margin:5px 0px 0px 0px;background-color:white;"><img src="{Icon}" style="border:1px none white; width:75px;height:75px;" /></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:84%;margin:15px 0px 0px 0px;background-color:white;color:black"><b>{PaymentMethodName}</b></div>',
                           '<div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:20%;margin:5px 0px 0px 0px;background-color:white;"><img src="{Icon}" style="border:1px none white; width:75px;height:75px;margin:-7px 0px 0px 0px;" /></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:80%;margin:0px 0px 0px 0px;background-color:transparent;color:black;padding:30px 10px;"><b>{PaymentMethodName}</b></div></div>',

                       emptyText: '<div class="myContent">No Payment Method!</div>',
                     
                    

                   },


  



                ]


            },



             ]




         }







     });
    return _FloatPanel_AyohaStore_PaymentMethodList;





}



function FloatPanel_AyohaStore_PaymentMethodListShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_PaymentMethodList);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_PaymentMethodList());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaStore_PaymentMethodListHide()");
    isFloatPanel_AyohaStore_PaymentMethodListOpen = 'Y';
    FloatPanel_AyohaStore_PaymentMethodList_PaymentMethodStore();
   








}





function FloatPanel_AyohaStore_PaymentMethodList_PaymentMethodStore() {







    _DataStore_PaymentMethodStore.getProxy().setUrl(GetAPIurl() + '/AyohaPaymentMethod/AyohaPaymentMethodload');
    _DataStore_PaymentMethodStore.load();





    var task = Ext.create('Ext.util.DelayedTask', function () {

        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_PaymentMethodStore.getCount();


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}




function FloatPanel_AyohaStore_PaymentMethodListHide() {
    if (isFloatPanel_AyohaStore_PaymentMethodListOpen == "Y") {
        _FloatPanel_AyohaStore_PaymentMethodList.hide(); isFloatPanel_AyohaStore_PaymentMethodListOpen = 'N';
        RemovePages("FloatPanel_AyohaStore_PaymentMethodListHide()");
    }
  
}
var globalFloatPanel_AyohaStore_PaymentMethod_Code;
function FloatPanel_AyohaStore_PaymentMethodListPaymentMethodSelected(ID) {
   
    if (ID == 1) {
        globalFloatPanel_AyohaStore_PaymentMethod_Code = 1;
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet').setHidden(false);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_FPX').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_ManualTransfer').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_COD').setHidden(true);
        document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentMethod').value = "Ayoha e-Wallet";
        FloatPanel_AyohaStore_PaymentMethodListHide();
        Dashboard_LoadAyohaEwallet();
    }
    if (ID == 2) {
        swalFireDynamicIconWithMessage("resources/icons/paymentNotAvailable.png", "Currently Not Available!", "black", "red");
        globalFloatPanel_AyohaStore_PaymentMethod_Code = 2;
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_FPX').setHidden(false);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_ManualTransfer').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_COD').setHidden(true);
        document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentMethod').value = "Pay With Online Banking";
    }
    if (ID == 3) {
        swalFireDynamicIconWithMessage("resources/icons/paymentNotAvailable.png", "Currently Not Available!", "black", "red");
        globalFloatPanel_AyohaStore_PaymentMethod_Code = 3;
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_FPX').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_ManualTransfer').setHidden(false);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_COD').setHidden(true);
        document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentMethod').value = "CDM/Online Bank Transfer";
    }
    if (ID == 4) {
        swalFireDynamicIconWithMessage("resources/icons/paymentNotAvailable.png", "Currently Not Available!", "black", "red");
        globalFloatPanel_AyohaStore_PaymentMethod_Code = 4;
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_FPX').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_ManualTransfer').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_COD').setHidden(false);
        document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentMethod').value = "COD-Cash On Delivery";
    }
}












