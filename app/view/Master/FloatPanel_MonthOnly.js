﻿Ext.define('ianMizi.view.Master.FloatPanel_MonthOnly', {

});

var _FloatPanel_MonthOnly;


var isFloatPanel_MonthOnlyOpen = 'N';











function FloatPanel_MonthOnly() {

    _FloatPanel_MonthOnly =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         height: 350,
         width: '95%',
         id: 'LoadingFloatPanel_MonthOnlyID',
         draggable: false,



         centered: true,
         //bottom: 64,
         zIndex: 500,
         modal: true,
         hideOnMaskTap: true,
         layout: {
             type: 'vbox'
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
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         // style: 'border-bottom:1px solid;background-color:white;',
         style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_MonthOnly.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_MonthOnly.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isFloatPanel_MonthOnlyOpen = 'N';
                         RemovePages("FloatPanel_MonthOnlyHide()");
                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
             //  style: 'border-bottom:0px solid;background-color:white;',

             style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
             layout: {
                 type: 'vbox',
                 pack: 'center',
                 align: 'center'

             },

             items: [





                 {

                     xtype: 'container',
                     width: '100%',
                     // docked: 'top',
                     // width: 40,
                     style: ' background-color:transparent;',
                     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                     //hidden: true,

                     id: 'containerFloatPanel_MonthOnlyHeader',
                     //style: {
                     //    // background: '#D25959',
                     //    background: 'transparent',
                     //    // border: '2px'
                     //},
                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                     // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                     layout: {
                         type: 'hbox',
                         pack: 'center',
                         align: 'center',
                     },
                     // hidden:true,
                     items:
                            [


                                          {
                                              xtype: 'button',
                                              id: 'btnFloatPanel_MonthOnlyBack',
                                              height: 30,
                                              width: 35,
                                              // iconCls: 'list',
                                              html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {

                                                  _FloatPanel_MonthOnly.hide(Ext.fx.Animation({
                                                      type: 'slideOut',
                                                      direction: 'left',
                                                      easing: 'cubic-bezier(.7,0,.7,1)',
                                                      duration: 250

                                                  }));
                                                  isFloatPanel_MonthOnlyOpen = 'N';
                                                  RemovePages("FloatPanel_MonthOnlyHide()");

                                              }
                                          },

                                           {
                                               xtype: 'spacer',

                                           },


                                             {
                                                 margin: '0 0 0 0',
                                                 html: '<font size=2 color=white><b>Filter By Month</b></font>'
                                             },












                            ]

                 },



            {


                // xtype: 'button',
                xtype: 'container',
                margin: '10 0 0 0',
                id: 'FloatPanel_MonthOnlyBorderBg',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: ' background-color:transparent;',
                height: 290,
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'vbox',
                    pack: 'left',
                    align: 'left'
                },
                items: [







                    {
                        xtype: 'list',
                        //  flex: 1,
                        store: 'MonthOnlyStore',
                        id: 'FloatPanel_MonthOnlyLoadMasterListID',
                        mode: 'SINGLE',
                        disableSelection: false,

                        //itemTpl: '<div class="myContent">' +
                        //   '<div><b>{ID}</b></div>' +
                        //   '<div>{ReceiptName}</div>' +
                        //   '<div style="float:right;width:3%;margin:-35px 10px 0px 0px"><img src="resources/icons/editresititem.png" height="22" width="30"></div>' +
                        //   '<div><b>{Amount}</b></div>' +
                        //    '<div style="display: none;">{ID}</div>' +
                        //   '</div>',

                        itemTpl: '<div class="myContent">' +


                                  // '<table style="border-collapse:collapse;border-spacing:0;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:20px">{No}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:120px">{SubscriberAccountName}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:70px">{SubscriberPhoneNumber}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:70px">{SubscriberEmail}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:100px">{SubscribedDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:50px">{PhonePlatform}</th></tr></table>' +


                              //jadi// '<div style="overflow:auto;width:100%;height:100%;font-size: 65%"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:13%"><b>{ID}</b></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%"><b>{ReceiptName}</b><br>{CreatedDate}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div>' +

                            '<div style="overflow:auto;width:100%;height:100%;text-align:center"><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:center;width:100%;text-align:center"><b>{Month}</b></div>' +

                             //edit only/ '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +


                     // '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 35px 0px 0px"><button class="buttonssDelete button14" OnClick="DeleteReceiptImageFromList({ID})"><img src="resources/icons/UogradeAutismeIcon/deletedustbin.png" height="30" width="30"></button></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageParkingShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +

                                   '</div>',

                        width: '100%',
                        height: 290,
                        disableSelection: true,

                        listeners: {


                            itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                                var Month = record.get('Month');
                                if (isFloatPanel_AyohaStore_CartOpen == 'Y') {
                                    document.getElementById('input-htmlFloatPanel_AyohaStore_Cart_Month').value = Month;
                                }
                                if (isFloatPanel_MonthOnlyOpen == 'Y') {
                                    _FloatPanel_MonthOnly.hide(Ext.fx.Animation({
                                        //type: 'popOut',
                                        //easing: 'easeInOut',
                                        //duration: 250,
                                        type: 'fadeOut',
                                        duration: 400,
                                    }));

                                }
                                isFloatPanel_MonthOnlyOpen = 'N';
                                RemovePages("FloatPanel_MonthOnlyHide()");




                            },

                            itemsingletap: function (dataview, index, target, record, e, eOpts) {
                                var Month = record.get('Month');
                                if (isFloatPanel_AyohaStore_CartOpen == 'Y') {
                                    document.getElementById('input-htmlFloatPanel_AyohaStore_Cart_Month').value = Month;
                                }
                                if (isFloatPanel_MonthOnlyOpen == 'Y') {
                                    _FloatPanel_MonthOnly.hide(Ext.fx.Animation({
                                        //type: 'popOut',
                                        //easing: 'easeInOut',
                                        //duration: 250,
                                        type: 'fadeOut',
                                        duration: 400,
                                    }));

                                }
                                isFloatPanel_MonthOnlyOpen = 'N';
                                RemovePages("FloatPanel_MonthOnlyHide()");



                            }
                        }





                    },


                ]


            },









             ]




         }







     });
    return _FloatPanel_MonthOnly;





}

function FloatPanel_MonthOnlyShow() {

    Ext.Viewport.remove(_FloatPanel_MonthOnly);
    this.overlay = Ext.Viewport.add(FloatPanel_MonthOnly());
    this.overlay.show();
    isFloatPanel_MonthOnlyOpen = 'Y';
    AddRoutePages("FloatPanel_MonthOnlyHide()");
}


//function FloatPanel_MonthOnlyShow_AyohaPointRedemptionHistory() {

//    Ext.Viewport.remove(_FloatPanel_MonthOnly);
//    this.overlay = Ext.Viewport.add(FloatPanel_MonthOnly());
//    this.overlay.show();
//    isFloatPanel_MonthOnlyOpen = 'Y';
//    AddRoutePages(_FloatPanel_MonthOnly, "isFloatPanel_MonthOnlyOpen");
//}

function FloatPanel_MonthOnlyHide() {
    _FloatPanel_MonthOnly.hide(); isFloatPanel_MonthOnlyOpen = 'N';
    RemovePages("FloatPanel_MonthOnlyHide()");
}








