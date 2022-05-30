﻿
Ext.define('ianMizi.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_CheckOut', {
//    requires: [
//'Ext.carousel.Carousel',
//'Ext.util.DelayedTask',
//'Ext.Video'
//    ],
});

var _FloatPanel_AyohaStore_CheckOut;


var isFloatPanel_AyohaStore_CheckOutOpen = 'N';

var globalFloatPanel_AyohaStore_CheckOut_OrderOption;
var globalFloatPanel_AyohaStore_CheckOut_OrderStatus;
var globalFloatPanel_AyohaStore_CheckOut_OrderNo;
var globalFloatPanel_AyohaStore_CheckOut_GrandTotal;
var globalFloatPanel_AyohaStore_CheckOut_ItemCartCode;

var globalFloatPanel_AyohaStore_CheckOut_DeliveryChargeCode;
var globalFloatPanel_AyohaStore_CheckOut_DeliveryCharge;
var globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountCampaignCode;


var globalFloatPanel_AyohaStore_CheckOut_MembershipDiscount;
var globalFloatPanel_AyohaStore_CheckOut_VoucherCampaignCode;
var globalFloatPanel_AyohaStore_CheckOut_VoucherDiscount;


var globalFloatPanel_AyohaStore_CheckOut_DeliveryAddress_StreetName;
var globalFloatPanel_AyohaStore_CheckOut_DeliveryAddress_Town;
var globalFloatPanel_AyohaStore_CheckOut_DeliveryAddress_Postcodes;


var globalFloatPanel_AyohaStore_CheckOut_DeliveryAddress_StateCode;
var globalFloatPanel_AyohaStore_CheckOut_DeliveryAddress_CountryCode;
var globalFloatPanel_AyohaStore_CheckOut_ReferenceName;


var globalFloatPanel_AyohaStore_CheckOut_ReferencePhoneNo;
var globalFloatPanel_AyohaStore_CheckOut_NoteToSeller;
var globalFloatPanel_AyohaStore_CheckOut_MerchantPointEarn;


var globalFloatPanel_AyohaStore_CheckOut_AyohaPointEarn;
var globalFloatPanel_AyohaStore_CheckOut_EnterpriseAccNo;
var globalFloatPanel_AyohaStore_CheckOut_SubscriberAccNo;

var globalFloatPanel_AyohaStore_CheckOut_MembershipCardCode;

var globalFloatPanel_AyohaStore_CheckOut_DeliveryName;


var globalFloatPanel_AyohaStore_CheckOut_TotalQuantity;
var globalFloatPanel_AyohaStore_CheckOut_SubTotal;
var globalFloatPanel_AyohaStore_CheckOut_PaymentAmount;




var globalFloatPanel_AyohaStore_CheckOut_PaymentMethod;
var globalFloatPanel_AyohaStore_CheckOut_PaymentMethodCode;
var globalFloatPanel_AyohaStore_CheckOut_CreatedBy;
var globalFloatPanel_AyohaStore_CheckOut_PaymentStatus;


var globalFloatPanel_AyohaStore_CheckOut_EnterpriseName;
var globalFloatPanel_AyohaStore_CheckOut_EnterpriseLogo;



function FloatPanel_AyohaStore_CheckOut() {

    _FloatPanel_AyohaStore_CheckOut =
    Ext.create('Ext.Panel', {
        zIndex: 350,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaStore_CheckOutID',
        draggable: false,

        styleHtmlContent: true,

        centered: true,
        //bottom: 64,
        // zIndex: 100,
        modal: true,
        // hideOnMaskTap: true,
        layout: {
            type: 'fit'
        },
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            //type: 'slideOut',
            //direction: 'left',
            //easing: 'cubic-bezier(.7,0,.7,1)',
            //duration: 250
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
       
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
        style: 'border-bottom:1px solid;background-color:white;',
        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        //listeners: {
        //    initialize: function (c) {
        //        this.element.on({
        //            swipe: function (e, node, options) {
        //                //if (e.direction == "up") {
        //                //    LoyaltyCardRedeemListHide();
        //                //}
        //                if (e.direction == "left") {
        //                    _FloatPanel_AyohaStore_CheckOut.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'left',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));

        //                    isFloatPanel_AyohaStore_CheckOutOpen = 'N';
        //                } if (e.direction == "right") {
        //                    _FloatPanel_AyohaStore_CheckOut.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'right',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));
        //                    isFloatPanel_AyohaStore_CheckOutOpen = 'N';
        //                }
        //                RemovePages(_FloatPanel_AyohaStore_CheckOut, "isFloatPanel_AyohaStore_CheckOutOpen");
        //            }
        //        });
        //    }
        //},

        items: [



            {
                xtype: 'container',
                width: '100%',
                height: '100%',
                //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                style: ' background-color: transparent;',
                layout: {
                    type: 'fit',

                },
                items: [
                    {
                        xtype: 'container',


                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },
                        items: [
                            {

                                xtype: 'container',
                                width: '100%',
                                docked: 'top',
                                // width: 40,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_AyohaStore_CheckOutHeader',
                                style: {
                                    // background: '#D25959',
                                    background: 'transparent',
                                    // border: '2px'
                                },
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
                                                         id: 'btnFloatPanel_AyohaStore_CheckOutBack',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             // FloatPanel_AyohaStore_CheckOutHide();
                                                             // FloatPanel_AyohaStore_CheckOut_AddCardHide();
                                                             isFloatPanel_AyohaStore_CheckOutOpen = 'N';
                                                             _FloatPanel_AyohaStore_CheckOut.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             RemovePages("FloatPanel_AyohaStore_CheckOutHide()");
                                                             FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempUpdateEntitledVoucherStatus_BackButton();
                                                             //  FloatPanel_AyohaStore_CheckOut_AddCardHide();

                                                         }
                                                     },

                                                      {
                                                          xtype: 'spacer',

                                                      },


                                                      {
                                                          margin: '-2 0 0 0',
                                                          hidden: true,
                                                          id: 'htmlFloatPanel_AyohaStore_CheckOut_TitleHeaderTxt',
                                                          html: '<font size=2 color=black><b>Check-Out</b></font>'
                                                      },

                                                       {
                                                           margin: '-18 0 0 0',
                                                           hidden:true,
                                                           id: 'htmlFloatPanel_AyohaStore_CheckOut_TitleHeaderTxt_AfterOrder',
                                                           html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:17px 0px 0px 0px">Loading Status.. </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-25px 0px 0px 0px">Please Wait...</div>',

                                                           // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                                           //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                                       },
                                                            









                                       ]

                            },







                            {
                                xtype: 'container',
                                width: '110%',
                                docked: 'bottom',
                                margin: '0 0 0 -5',
                                height: 40,
                                //style: 'background-color:white;border-top:2px none #f0f2f5;',
                                // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:2px solid black;',
                              //  style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #f0f2f5;',
                                //style: 'background-color:white;border-top:2px solid #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);border-radius:20px 20px 0px 0px;',
                                style: 'background-color:white;border-top:2px solid #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center'

                                },
                                items: [
                                   
                                    

                                    {
                                        xtype: 'container',
                                        id: 'containerFloatPanel_AyohaStore_CheckOut_MakePayment_AyohaEwallet',
                                        width: '97%',
                                        height: 45,
                                        margin: '9 0 0 0',
                                        // hidden: true,
                                        style: "background-color: white;border-radius:20px 20px 0px 0px;",
                                      
                                        //style: "background-color: #F35B57;",
                                        // style: 'border-right:1px solid grey;border-left:1px solid grey;border-bottom:1px solid grey;border-top:1px solid grey ;background: white;border-radius: 10px 10px 10px 10px;',
                                        layout: {
                                            type: 'vbox',
                                            pack: 'center',
                                            align: 'center'

                                        },
                                        items: [
                                           

                                             //{
                                             //    id: 'htmlFloatPanel_AyohaStore_CheckOut_AyohaEwallet_PayNow',
                                             //    //margin: '-27 0 0 0',
                                             //    margin: '-4 0 0 0',
                                             //    html: '<button OnClick="FloatPanel_AyohaStore_CheckOutShow()" class="buttonPayNow">Confirm & Pay</button>',
                                             //    hidden: true,


                                             //},
                                             {
                                                 xtype: 'container',
                                                 id: 'containerFloatPanel_AyohaStore_CheckOut_ConfirmPay',
                                               name: 'namecontainerFloatPanel_AyohaStore_CheckOut_ConfirmPay',
                                                 width: '95%',
                                                 height: 40,
                                                 margin: '-20 0 0 -26',

                                                 style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 5px 5px 5px 5px;',

                                                 //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;',
                                                 layout: {
                                                     type: 'hbox',
                                                     pack: 'center',
                                                     align: 'center'

                                                 },
                                                 items: [
                                                     {
                                                         margin: '0 0 0 0',

                                                         width: 24,
                                                         height: 24,
                                                         //html: '<img src="resources/icons/whatsappWhite.png" alt="Image" style="width:24px;height:24px;">',
                                                         html: '<img src="resources/icons/payNowIcon.png" alt="Image" style="width:24px;height:24px;">',


                                                         // ui:'plain'
                                                     },

                                     {
                                         margin: '12 0 0 5',
                                         id: 'htmlFloatPanel_AyohaStore_CheckOut_ConfirmPayText_ConfirmPay',
                                         html: '<div style="background: transparent;height:30px;font-size: 12px;font-weight:bold;color:white;text-align:center;width:100%;" >Confirm And Pay Now </div>'
                                     },
                                                 ]
                                             },

                                             {
                                                 xtype: 'container',
                                                 id: 'containerFloatPanel_AyohaStore_CheckOut_ViewReceipt',
                                                 name: 'namecontainerFloatPanel_AyohaStore_CheckOut_ViewReceipt',
                                                 hidden:true,
                                                 width: '95%',
                                                 height: 40,
                                                 margin: '-20 0 0 -26',

                                                 style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 5px 5px 5px 5px;',

                                                 //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;',
                                                 layout: {
                                                     type: 'hbox',
                                                     pack: 'center',
                                                     align: 'center'

                                                 },
                                                 items: [
                                                     {
                                                         margin: '0 0 0 0',

                                                         width: 24,
                                                         height: 24,
                                                         //html: '<img src="resources/icons/whatsappWhite.png" alt="Image" style="width:24px;height:24px;">',
                                                         html: '<img src="resources/icons/payNowIcon.png" alt="Image" style="width:24px;height:24px;">',


                                                         // ui:'plain'
                                                     },

                                     {
                                         margin: '12 0 0 5',
                                         id: 'htmlFloatPanel_AyohaStore_CheckOut_ViewReceiptText_ViewReceipt',
                                         html: '<div style="background: transparent;height:30px;font-size: 12px;font-weight:bold;color:white;text-align:center;" >Print Receipt</div>'
                                     },
                                                 ]
                                             },
                                             {
                                                 xtype: 'container',
                                                 id: 'containerFloatPanel_AyohaStore_CheckOut_OrderOnly',
                                                 name: 'namecontainerFloatPanel_AyohaStore_CheckOut_OrderOnly',
                                                 hidden:true,
                                                 width: '95%',
                                                 height: 40,
                                                 margin: '-20 0 0 -26',
                                                
                                                 style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 5px 5px 5px 5px;',
                                              
                                                 //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;',
                                                 layout: {
                                                     type: 'hbox',
                                                     pack: 'center',
                                                     align: 'center'

                                                 },
                                                 items: [
                                                     {
                                                         margin: '0 0 0 0',

                                                         width: 24,
                                                         height: 24,
                                                         //html: '<img src="resources/icons/whatsappWhite.png" alt="Image" style="width:24px;height:24px;">',
                                                         html: '<img src="resources/icons/sendorderwhite01.png" alt="Image" style="width:24px;height:24px;">',


                                                         // ui:'plain'
                                                     },

                                     {
                                         margin: '12 0 0 5',
                                         id: 'htmlFloatPanel_AyohaStore_CheckOut_OrderOnlyText_CancelOrder',
                                         html: '<div style="background: transparent;height:30px;font-size: 12px;font-weight:bold;color:white;text-align:center;" >Submit Order</div>'
                                     },
                                                 ]
                                             },

                                             {
                                                 xtype: 'container',
                                                 id: 'containerFloatPanel_AyohaStore_CheckOut_CancelOrder',
                                                 name: 'namecontainerFloatPanel_AyohaStore_CheckOut_CancelOrder',
                                                 hidden: true,
                                                 width: '95%',
                                                 height: 40,
                                                 margin: '-20 0 0 -26',
                                                 style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background-color: red;border-radius: 5px 5px 5px 5px;',

                                                 //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 5px 5px 5px 5px;',

                                                 //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;',
                                                 layout: {
                                                     type: 'hbox',
                                                     pack: 'center',
                                                     align: 'center'

                                                 },
                                                 items: [
                                                     {
                                                         margin: '0 0 0 0',

                                                         width: 24,
                                                         height: 24,
                                                         //html: '<img src="resources/icons/whatsappWhite.png" alt="Image" style="width:24px;height:24px;">',
                                                         html: '<img src="resources/icons/sendorderwhite01.png" alt="Image" style="width:24px;height:24px;">',


                                                         // ui:'plain'
                                                     },

                                     {
                                         margin: '12 0 0 5',
                                         id: 'htmlFloatPanel_AyohaStore_CheckOut_CancelOrderText_CancelOrder',
                                         html: '<div style="background: transparent;height:30px;font-size: 12px;font-weight:bold;color:white;text-align:center;" >Cancel This Orders</div>'
                                     },
                                                 ]
                                             },



                                              {
                                                  xtype: 'container',
                                                  id: 'containerFloatPanel_AyohaStore_CheckOut_DeleteOrder',
                                                  name: 'namecontainerFloatPanel_AyohaStore_CheckOut_DeleteOrder',
                                                  hidden: true,
                                                  width: '95%',
                                                  height: 40,
                                                  margin: '-20 0 0 -26',
                                                  style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background-color: red;border-radius: 5px 5px 5px 5px;',

                                                  //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 5px 5px 5px 5px;',

                                                  //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;',
                                                  layout: {
                                                      type: 'hbox',
                                                      pack: 'center',
                                                      align: 'center'

                                                  },
                                                  items: [
                                                      {
                                                          margin: '0 0 0 0',

                                                          width: 24,
                                                          height: 24,
                                                          //html: '<img src="resources/icons/whatsappWhite.png" alt="Image" style="width:24px;height:24px;">',
                                                          html: '<img src="resources/icons/sendorderwhite01.png" alt="Image" style="width:24px;height:24px;">',


                                                          // ui:'plain'
                                                      },

                                      {
                                          margin: '12 0 0 5',
                                          id: 'htmlFloatPanel_AyohaStore_CheckOut_DeleteOrderText_DeleteOrder',
                                          html: '<div style="background: transparent;height:30px;font-size: 12px;font-weight:bold;color:white;text-align:center;" >Delete Order</div>'
                                      },
                                                  ]
                                              },

                                        ]
                                    },
                                ]
                            },




















                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaStore_CheckOutStampCardList',
                                // margin: '-10 0 0 0',
                                width: '100%',
                                height: '100%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: transparent;",
                                //style: "background-color: #F35B57;",
                                title: 'FloatPanel_AyohaStore_CheckOutCardLis',
                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center'

                                },
                              
                                //listeners: {
                                //    initialize: function (c) {

                                //        this.element.on({
                                //            swipe: function (e, node, options) {
                                //                if (e.direction == "left") {
                                //                    //  alert("Hey! I swipe left");

                                //                } else {
                                //                    //  alert("Hey! I swipe right");
                                //                    Ext.getCmp('tabpanelFloatPanel_AyohaStore_CheckOut').setActiveItem(0);
                                //                }
                                //            }
                                //        });
                                //    }
                                //},

                                items: [
                                    {
                                        xtype: 'panel',
                                        height: 5
                                    },

                                  {
                                      xtype: 'container',
                                      width: '100%',
                                      height: '100%',
                                      style: "background-color: transparent;",
                                      layout: {
                                          type: 'vbox',
                                          pack: 'start',
                                          align: 'left'

                                      },
                                      scrollable: {
                                          directionLock: true,
                                          indicators: false
                                      },
                                      items: [



                                          {
                                              xtype: 'container',
                                              width: '100%',
                                              height: 115,
                                              style: "background-color: transparent;",
                                              id:'containerFloatPanel_AyohaStore_CheckOut_Header',
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'start',
                                                  align: 'center'

                                              },
                                              items: [
                                                  {
                                                      width: 72,
                                                      height: 72,
                                                      id: 'htmlFloatPanel_AyohaStore_CheckOut_EnterpriseLogo',                                                     
                                                      html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:0px 0px 0px 0px"><img src="resources/icons/communityCoffea.png" style="width:62px;height:62px;"/></div>',
                                                  },
                                                  {
                                                      id: 'htmlFloatPanel_AyohaStore_CheckOut_EnterpriseName',                                                     
                                                      html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Community Coffee Sdn Bhd</div>',
                                                  },
                                                  {
                                                      xtype: 'container',
                                                      width: '100%',
                                                      height: 5,
                                                      style: "background-color: transparent;",
                                                      layout: {
                                                          type: 'vbox',
                                                          pack: 'center',
                                                          align: 'center'

                                                      },
                                                      items: [
                                                          {
                                                              xtype: 'container',
                                                              width: '80%',
                                                              height: 2,
                                                              style: "background-color: grey;",
                                                          }
                                                      ]
                                                  }
                                              ]
                                          },


                                              

                                              {
                                                  xtype: 'container',
                                                  width: '100%',
                                                  height: 330,
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'start',
                                                      align: 'left'

                                                  },
                                                 style: 'background-color:transparent',
                                                 
                                                 items: [
                                                     {
                                                         margin: '0 0 0 10',
                                                         html: '<div style="width:100%;text-align:center;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;">Ordered Item</div>'
                                                     },
                                                      {
                                                          xtype: 'container',
                                                          width: '100%',
                                                          height: 267,
                                                          margin:'-10 0 0 0',
                                                          style: "background-color: transparent;border-bottom:1px none #ECF0F1;",
                                                         // style: "background-color: transparent;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius: 10px 10px 10px 10px;",
                                                          layout: {
                                                              type: 'vbox',
                                                              pack: 'start',
                                                              align: 'center'

                                                          },
                                                          items: [
                                                              {

                                                                  id: 'FloatPanel_AyohaStore_CheckOut_PurchasedItem_FromCart',
                                                                  store: _DataStore_AyohaStoreCartLoadCartAyohaStore,
                                                                  hidden:true,
                                                                  // grouped: true,
                                                                  xtype: 'dataview',
                                                                  // xtype: 'list',
                                                                 height: 115,
                                                                  //scrollable: true,
                                                                 // scrollable: 'horizontal',
                                                                 // indicators: false,
                                                                  //inline: true,
                                                                  inline: {
                                                                      wrap: false
                                                                  },
                                                                  scrollable: {
                                                                      direction: 'horizontal',
                                                                      indicators: false,
                                                                  },
                                                                  width: '100%',                                                               
                                                                  cls: 'dataview-item',
                                                                  itemTpl: '<div style="width: 85px; height: 85px; border:3px none white;padding:5px 5px;margin:5px 0px 0px 5px;"><img src="{ItemCoverImg}" style="width: 80px; height: 80px; border:1px solid grey;"/><br><div style="margin:-7px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:7px;word-wrap: break-word;font-weight:normal;">({RowNumber}).{ItemName}</div><br><div style="margin:-26px 0px 0px 0px;text-align:left;color:#c800ffc9;font-family: Arial; font-size:10px;word-wrap: break-word;font-weight:bold;">RM:{ModifiedItemPriceCheckOut}</div></div>',


                                                              },


                                                                  {

                                                                      id: 'FloatPanel_AyohaStore_CheckOut_PurchasedItem_FromPurchaseHistory',
                                                                      store: _DataStore_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore,
                                                                      hidden:true,
                                                                      // grouped: true,
                                                                      xtype: 'dataview',
                                                                      // xtype: 'list',
                                                                      height: 115,
                                                                      //scrollable: true,
                                                                    //  scrollable: 'horizontal',
                                                                     // indicators: false,
                                                                      inline: {
                                                                          wrap: false
                                                                      },
                                                                      scrollable: {
                                                                          direction: 'horizontal',
                                                                          indicators: false,
                                                                      },
                                                                     width: '100%',
                                                                      cls: 'dataview-item',
                                                                      itemTpl: '<div style="width: 85px; height: 85px; border:3px none white;padding:5px 5px;margin:5px 0px 0px 5px;"><img src="{ItemCoverImg}" style="width: 80px; height: 80px; border:1px solid grey;"/><br><div style="margin:-7px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:7px;word-wrap: break-word;font-weight:normal;">({Row_num}).{ItemName}</div><br><div style="margin:-26px 0px 0px 0px;text-align:left;color:#c800ffc9;font-family: Arial; font-size:10px;word-wrap: break-word;font-weight:bold;">RM:{ModifiedItemPrice}</div></div>',


                                                                  },
                                                              {
                                                                  xtype: 'container',
                                                                  width: '100%',
                                                                  height: 100,
                                                                  style: "background-color: white;border-top:1px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-bottom:2px none #ECF0F1;;",
                                                                  layout: {
                                                                      type: 'vbox',
                                                                      pack: 'start',
                                                                      align: 'right'

                                                                  },
                                                                  items: [
                                                                      {
                                                                          xtype: 'container',
                                                                          width: '100%',
                                                                         // height: 15,
                                                                          layout: {
                                                                              type: 'hbox',
                                                                              pack: 'center',
                                                                              align: 'center'

                                                                          },
                                                                          items: [

                                                                              {
                                                                                  xtype: 'container',
                                                                                  width: '84%',
                                                                                  // height: 30,
                                                                                  layout: {
                                                                                      type: 'hbox',
                                                                                      pack: 'right',
                                                                                      align: 'center'

                                                                                  },
                                                                                  items: [
                                                                                       {

                                                                                           html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Total Quantity:</div>'
                                                                                       }
                                                                                  ]
                                                                              },
                                                                               {
                                                                                   xtype: 'container',
                                                                                   width: '10%',
                                                                                   // height: 30,
                                                                                   layout: {
                                                                                       type: 'hbox',
                                                                                       pack: 'left',
                                                                                       align: 'center'

                                                                                   },
                                                                                   items: [
                                                                                     {
                                                                                         margin: '0 0 0 5',
                                                                                         id: 'htmlFloatPanel_AyohaStore_CheckOut_TotalQuantity',
                                                                                         html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">2</div>'
                                                                                     }
                                                                                   ]
                                                                               },
                                                                          ]
                                                                      },
                                                                      {
                                                                          xtype: 'container',
                                                                          width: '100%',
                                                                          id:'containerFloatPanel_AyohaStore_CheckOut_DeliveryChargeType',
                                                                          margin: '0 0 0 0',
                                                                          height: 50,
                                                                          layout: {
                                                                              type: 'vbox',
                                                                              pack: 'start',
                                                                              align: 'left'

                                                                          },
                                                                          items: [

                                                                              {
                                                                                  xtype: 'container',
                                                                                  width: '100%',
                                                                                  // height: 30,
                                                                                  layout: {
                                                                                      type: 'vbox',
                                                                                      pack: 'center',
                                                                                      align: 'left'

                                                                                  },
                                                                                  items: [
                                                                                       {
                                                                                           margin: '0 0 0 10',
                                                                                           html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:Left;color:Red;">*Delivery Type:</div>'
                                                                                       },
                                                                                       {
                                                                                           xtype: 'container',
                                                                                           width: '100%',
                                                                                           // height: 30,
                                                                                           layout: {
                                                                                               type: 'hbox',
                                                                                               pack: 'left',
                                                                                               align: 'center'

                                                                                           },
                                                                                           items: [

                                                         {
                                                             xtype: 'panel',
                                                             width: 11
                                                         },
                                                           {
                                                               id: 'htmlFloatPanel_AyohaStore_CheckOut_DeliveryChargeType',
                                                               margin: '0 0 0 0',

                                                               // zIndex: -10,
                                                               width: '92%',
                                                               // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                                               // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                                               html: '<input type="text" id="input-FloatPanel_AyohaStore_CheckOut_DeliveryChargeType"  onClick="FloatPanel_AyohaStore_Cart_DeliveryChargeTypeOpen()" readOnly style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:center;margin:0px 0px 0px 3px"  placeholder="--- Select Delivery ---">',
                                                           },



                                                             {
                                                                 xtype: 'panel',
                                                                 width: 11
                                                             },
                                                                                           ]
                                                                                       },
                                                                                  ]
                                                                              },

                                                                          ]
                                                                      },
                                                                      {
                                                                          xtype: 'container',
                                                                          width: '100%',
                                                                        //  height: 15,
                                                                          layout: {
                                                                              type: 'hbox',
                                                                              pack: 'center',
                                                                              align: 'center'

                                                                          },
                                                                          items: [

                                                                              {
                                                                                  xtype: 'container',
                                                                                  width: '84%',
                                                                                  // height: 30,
                                                                                  layout: {
                                                                                      type: 'hbox',
                                                                                      pack: 'right',
                                                                                      align: 'center'

                                                                                  },
                                                                                  items: [
                                                                                       {
                                                                                           id: 'htmlFloatPanel_AyohaStore_CheckOut_DeliveryType',
                                                                                           html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Delivery Charge(RM):</div>'
                                                                                       }
                                                                                  ]
                                                                              },
                                                                               {
                                                                                   xtype: 'container',
                                                                                   width: '10%',
                                                                                   // height: 30,
                                                                                   layout: {
                                                                                       type: 'hbox',
                                                                                       pack: 'left',
                                                                                       align: 'center'

                                                                                   },
                                                                                   items: [
                                                                                     {
                                                                                         margin: '0 0 0 5',
                                                                                         id: 'htmlFloatPanel_AyohaStore_CheckOut_Delivery',
                                                                                         html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>'
                                                                                     }
                                                                                   ]
                                                                               },
                                                                          ]
                                                                      },
                                                                      ////////////////

                                                                          {
                                                                              xtype: 'container',
                                                                              width: '100%',
                                                                              id:'containerFloatPanel_AyohaStore_CheckOut_DeliveryTypeName',
                                                                              hidden:true,
                                                                              //  height: 15,
                                                                              layout: {
                                                                                  type: 'hbox',
                                                                                  pack: 'center',
                                                                                  align: 'center'

                                                                              },
                                                                              items: [

                                                                                  {
                                                                                      xtype: 'container',
                                                                                      width: '73%',
                                                                                      // height: 30,
                                                                                      layout: {
                                                                                          type: 'hbox',
                                                                                          pack: 'right',
                                                                                          align: 'center'

                                                                                      },
                                                                                      items: [
                                                                                           {
                                                                                               id: 'htmlFloatPanel_AyohaStore_CheckOut_DeliveryTypeName',
                                                                                               margin:'-4 0 0 0',
                                                                                               html: '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">(J&T Semenanjung Malaysia)</div>'

                                                                                           }
                                                                                      ]
                                                                                  },
                                                                                  
                                                                              ]
                                                                          },


                                                                      //////////

                                                                      {
                                                                          xtype: 'container',
                                                                          width: '100%',
                                                                          margin:'-1 0 0 0',
                                                                          //  height: 15,
                                                                          layout: {
                                                                              type: 'hbox',
                                                                              pack: 'center',
                                                                              align: 'center'

                                                                          },
                                                                          items: [

                                                                              {
                                                                                  xtype: 'container',
                                                                                  width: '84%',
                                                                                  // height: 30,
                                                                                  layout: {
                                                                                      type: 'hbox',
                                                                                      pack: 'right',
                                                                                      align: 'center'

                                                                                  },
                                                                                  items: [
                                                                                       {

                                                                                           html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Membership Discount(RM):</div>'
                                                                                       }
                                                                                  ]
                                                                              },
                                                                               {
                                                                                   xtype: 'container',
                                                                                   width: '10%',
                                                                                   // height: 30,
                                                                                   layout: {
                                                                                       type: 'hbox',
                                                                                       pack: 'left',
                                                                                       align: 'center'

                                                                                   },
                                                                                   items: [
                                                                                     {
                                                                                         margin: '0 0 0 5',
                                                                                         id: 'htmlFloatPanel_AyohaStore_CheckOut_MembershipDiscount',
                                                                                         html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>'
                                                                                     }
                                                                                   ]
                                                                               },
                                                                          ]
                                                                      },
                                                                      {
                                                                          xtype: 'container',
                                                                          width: '100%',
                                                                          //  height: 15,
                                                                          layout: {
                                                                              type: 'hbox',
                                                                              pack: 'center',
                                                                              align: 'center'

                                                                          },
                                                                          items: [

                                                                              {
                                                                                  xtype: 'container',
                                                                                  width: '84%',
                                                                                  // height: 30,
                                                                                  layout: {
                                                                                      type: 'hbox',
                                                                                      pack: 'right',
                                                                                      align: 'center'

                                                                                  },
                                                                                  items: [
                                                                                       {
                                                                                           id: 'htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscountLabel',
                                                                                           html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Voucher Discount(RM):</div>'
                                                                                       }
                                                                                  ]
                                                                              },
                                                                               {
                                                                                   xtype: 'container',
                                                                                   width: '10%',
                                                                                   // height: 30,
                                                                                   layout: {
                                                                                       type: 'hbox',
                                                                                       pack: 'left',
                                                                                       align: 'center'

                                                                                   },
                                                                                   items: [
                                                                                     {
                                                                                         margin: '0 0 0 5',
                                                                                         id: 'htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscount',
                                                                                         html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>'
                                                                                     }
                                                                                   ]
                                                                               },
                                                                          ]
                                                                      },
                                                                      {
                                                                          xtype: 'container',
                                                                          width: '100%',
                                                                          //  height: 15,
                                                                          layout: {
                                                                              type: 'hbox',
                                                                              pack: 'center',
                                                                              align: 'center'

                                                                          },
                                                                          items: [

                                                                              {
                                                                                  xtype: 'container',
                                                                                  width: '84%',
                                                                                  // height: 30,
                                                                                  layout: {
                                                                                      type: 'hbox',
                                                                                      pack: 'right',
                                                                                      align: 'center'

                                                                                  },
                                                                                  items: [
                                                                                       {

                                                                                           html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">SubTotal(RM):</div>'
                                                                                       }
                                                                                  ]
                                                                              },
                                                                               {
                                                                                   xtype: 'container',
                                                                                   width: '10%',
                                                                                   // height: 30,
                                                                                   layout: {
                                                                                       type: 'hbox',
                                                                                       pack: 'left',
                                                                                       align: 'center'

                                                                                   },
                                                                                   items: [
                                                                                     {
                                                                                         margin: '0 0 0 5',
                                                                                         id: 'htmlFloatPanel_AyohaStore_CheckOut_SubTotal',
                                                                                         html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>'
                                                                                     }
                                                                                   ]
                                                                               },
                                                                          ]
                                                                      },
                                                                        {
                                                                            xtype: 'container',
                                                                            width: '100%',
                                                                            margin: '-3 0 0 0',
                                                                            height: 1,
                                                                            style: 'background-color:transparent;',
                                                                            layout: {
                                                                                type: 'vbox',
                                                                                pack: 'center',
                                                                                align: 'right'

                                                                            },
                                                                            items: [
                                                                                 {
                                                                                     xtype: 'container',
                                                                                     width: '55%',
                                                                                     margin: '3 0 0 0',
                                                                                     height: 1,
                                                                                     style: 'background-color:grey;',
                                                                                 },
                                                                            ]
                                                                        },
                                                                      {
                                                                          xtype: 'container',
                                                                          width: '100%',
                                                                        //  height: 38,
                                                                          layout: {
                                                                              type: 'hbox',
                                                                              pack: 'center',
                                                                              align: 'center'

                                                                          },
                                                                          items: [

                                                                              {
                                                                                  xtype: 'container',
                                                                                  width: '78%',
                                                                                  // height: 30,
                                                                                  layout: {
                                                                                      type: 'hbox',
                                                                                      pack: 'right',
                                                                                      align: 'center'

                                                                                  },
                                                                                  items: [
                                                                                       {
                                                                                           margin: '3 0 0 0',

                                                                                           html: '<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Grand Total(RM):</div>'
                                                                                       }
                                                                                  ]
                                                                              },
                                                                               {
                                                                                   xtype: 'container',
                                                                                   width: '17%',
                                                                                   // height: 30,
                                                                                   layout: {
                                                                                       type: 'hbox',
                                                                                       pack: 'left',
                                                                                       align: 'center'

                                                                                   },
                                                                                   items: [
                                                                                     {
                                                                                         margin: '3 0 0 0',
                                                                                         id: 'htmlFloatPanel_AyohaStore_CheckOut_GrandTotal',
                                                                                         html: '<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>'
                                                                                     }
                                                                                   ]
                                                                               },
                                                                          ]
                                                                      },
                                                                                                                     {
                                                                                                                         xtype: 'container',
                                                                                                                         width: '100%',
                                                                                                                         margin: '-3 0 0 0',
                                                                                                                         height: 1,
                                                                                                                         style: 'background-color:transparent;',
                                                                                                                         layout: {
                                                                                                                             type: 'vbox',
                                                                                                                             pack: 'center',
                                                                                                                             align: 'right'

                                                                                                                         },
                                                                                                                         items: [
                                                                                                                              {
                                                                                                                                  xtype: 'container',
                                                                                                                                  width: '55%',
                                                                                                                                  margin: '3 0 0 0',
                                                                                                                                  height: 1,
                                                                                                                                  style: 'background-color:grey;',
                                                                                                                              },
                                                                                                                         ]
                                                                                                                     },


                                                                                                                     {
                                                                                                                         xtype: 'container',
                                                                                                                         width: '100%',
                                                                                                                         margin: '3 0 0 0',
                                                                                                                         //  height: 15,
                                                                                                                         layout: {
                                                                                                                             type: 'hbox',
                                                                                                                             pack: 'center',
                                                                                                                             align: 'center'

                                                                                                                         },
                                                                                                                         items: [

                                                                                                                             {
                                                                                                                                 xtype: 'container',
                                                                                                                                 width: '84%',
                                                                                                                                 // height: 30,
                                                                                                                                 layout: {
                                                                                                                                     type: 'hbox',
                                                                                                                                     pack: 'right',
                                                                                                                                     align: 'center'

                                                                                                                                 },
                                                                                                                                 items: [
                                                                                                                                      {
                                                                                                                                          id:'htmlFloatPanel_AyohaStore_CheckOut_MerchantPointEarnLbl',
                                                                                                                                          html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">M.Point Earn:</div>'
                                                                                                                                      }
                                                                                                                                 ]
                                                                                                                             },
                                                                                                                              {
                                                                                                                                  xtype: 'container',
                                                                                                                                  width: '10%',
                                                                                                                                  // height: 30,
                                                                                                                                  layout: {
                                                                                                                                      type: 'hbox',
                                                                                                                                      pack: 'left',
                                                                                                                                      align: 'center'

                                                                                                                                  },
                                                                                                                                  items: [
                                                                                                                                    {
                                                                                                                                        margin: '0 0 0 5',
                                                                                                                                        id: 'htmlFloatPanel_AyohaStore_CheckOut_MerchantPointEarn',
                                                                                                                                        html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>'
                                                                                                                                    }
                                                                                                                                  ]
                                                                                                                              },
                                                                                                                         ]
                                                                                                                     },
                                                                                                                     {
                                                                                                                         xtype: 'container',
                                                                                                                         width: '100%',
                                                                                                                         //  height: 15,
                                                                                                                         layout: {
                                                                                                                             type: 'hbox',
                                                                                                                             pack: 'center',
                                                                                                                             align: 'center'

                                                                                                                         },
                                                                                                                         items: [

                                                                                                                             {
                                                                                                                                 xtype: 'container',
                                                                                                                                 width: '84%',
                                                                                                                                 // height: 30,
                                                                                                                                 layout: {
                                                                                                                                     type: 'hbox',
                                                                                                                                     pack: 'right',
                                                                                                                                     align: 'center'

                                                                                                                                 },
                                                                                                                                 items: [
                                                                                                                                      {

                                                                                                                                          html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">A.Point Earn:</div>'
                                                                                                                                      }
                                                                                                                                 ]
                                                                                                                             },
                                                                                                                              {
                                                                                                                                  xtype: 'container',
                                                                                                                                  width: '10%',
                                                                                                                                  // height: 30,
                                                                                                                                  layout: {
                                                                                                                                      type: 'hbox',
                                                                                                                                      pack: 'left',
                                                                                                                                      align: 'center'

                                                                                                                                  },
                                                                                                                                  items: [
                                                                                                                                    {
                                                                                                                                        margin: '0 0 0 5',
                                                                                                                                        id: 'htmlFloatPanel_AyohaStore_CheckOut_AyohaPointEarn',
                                                                                                                                        html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>'
                                                                                                                                    }
                                                                                                                                  ]
                                                                                                                              },
                                                                                                                         ]
                                                                                                                     },
                                                                      
                                                                  ]
                                                              }
                                                          ]
                                                      },
                                                      
                                                      
                                                  ]
                                              },

                                              /////////////////////

                                              {
                                                  xtype: 'container',
                                                  id: 'containerFloatPanel_AyohaStore_CheckOut_PaymentInfo',
                                                  hidden:true,
                                                  width: '100%',
                                                  height: 90,
                                                  margin: '20 0 0 0',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'start',
                                                      align: 'left'

                                                  },
                                                  style: 'background-color:transparent',
                                                  items: [

                                                       {
                                                           xtype: 'container',
                                                           width: '100%',
                                                           // margin: '0 0 0 0',
                                                           margin: '0 0 0 10',
                                                           // height: 20,
                                                           style: 'background-color:transparent;',
                                                           layout: {
                                                               type: 'hbox',
                                                               pack: 'center',
                                                               align: 'center'

                                                           },
                                                           items: [
                                                              {
                                                                  //  margin: '16 0 0 14',
                                                                  html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Payment Info</div>'
                                                              },
                                                              {
                                                                  xtype: 'spacer'
                                                              },
                                                              
                                                           ]
                                                       },
                                                     {
                                                         xtype: 'container',
                                                         width: '100%',
                                                         height: 60,
                                                         margin: '-10 0 0 0',
                                                         style: "background-color: transparent;",
                                                         //style: "background-color: white;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius: 10px 10px 10px 10px;",
                                                         layout: {
                                                             type: 'vbox',
                                                             pack: 'start',
                                                             align: 'center'

                                                         },
                                                         items: [
                                                              {
                                                                  margin: '5 0 0 0',
                                                                  id: 'htmlFloatPanel_AyohaStore_CheckOut_PaymentInfo',
                                                                  width: '97%',
                                                                  height: 60,
                                                                  // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  style="border-color:white;color:white;width:100%;height:35px;text-align: left;font-size:12px;word-wrap:break-word;">'
                                                                  html: '<textarea id="input-FloatPanel_AyohaStore_CheckOut_PaymentInfo" style="width:100%;height:80px;padding: 5px 5px;box-sizing: border-box;border: 1px none grey;border-radius: 4px;background-color: transparent;color:black;font-size: 12px;font-weight:bold" wrap="hard">Payment Method:Ayoha eWallet\nPayment Amount(RM):25:00\nPaymentStatus:FullPaid\nPayment No:145a4s4\nOrder No:ON-qiwuwu</textarea>'
                                                                  // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  rows="25" cols="60">'

                                                              },

                                                         ]
                                                     }
                                                  ]

                                              },

                                              ////////////////////

                                               {
                                                   xtype: 'container',
                                                   width: '100%',
                                                   margin: '15 0 0 0',
                                                   height: 95,
                                                   layout: {
                                                       type: 'vbox',
                                                       pack: 'start',
                                                       align: 'left'

                                                   },
                                                   style: 'background-color:transparent',
                                                   items: [
                                                       
                                                        {
                                                            xtype: 'container',
                                                            width: '100%',
                                                            // margin: '0 0 0 0',
                                                            margin: '0 0 0 10',
                                                           // height: 20,
                                                            style: 'background-color:transparent;',
                                                            layout: {
                                                                type: 'hbox',
                                                                pack: 'center',
                                                                align: 'center'

                                                            },
                                                            items: [
                                                               {
                                                                   //  margin: '16 0 0 14',
                                                                   html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Shipping Address</div>'
                                                               },
                                                               {
                                                                   xtype: 'spacer'
                                                               },
                                                               {
                                                                   xtype: 'button',
                                                                   ui: 'plain',
                                                                   width: 30,
                                                                   height: 30,
                                                                   margin: '1 0 0 0',
                                                                   id: 'btnFloatPanel_AyohaStore_CheckOut_DeliveryAddressHistory',
                                                                   html: '<img src="resources/icons/History01.png" width="20" height="20" alt="Company Name">',
                                                                   handler: function () {
                                                                       FloatPanel_AyohaStore_DeliveryAddressShow_History();
                                                                    

                                                                   }
                                                               },
                                                               {
                                                                   xtype: 'button',
                                                                   ui: 'plain',
                                                                   width: 30,
                                                                   height: 30,
                                                                   margin: '1 0 0 0',
                                                                   id: 'btnFloatPanel_AyohaStore_CheckOut_DeliveryAddressHistory_Edit',
                                                                   html: '<img src="resources/icons/editReview.png" width="20" height="20" alt="Company Name">',
                                                                   handler: function () {

                                                                       FloatPanel_AyohaStore_DeliveryAddressShow();

                                                                   }
                                                               },
                                                               {
                                                                   xtype: 'panel',
                                                                   width: 20
                                                               }
                                                            ]
                                                        },
                                                      {
                                                          xtype: 'container',
                                                          width: '100%',
                                                          margin:'-10 0 0 0',
                                                          height: 70,
                                                          style: "background-color: transparent;",
                                                          //style: "background-color: white;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius: 10px 10px 10px 10px;",
                                                          layout: {
                                                              type: 'vbox',
                                                              pack: 'start',
                                                              align: 'center'

                                                          },
                                                          items: [
                                                               {
                                                                   margin: '5 0 0 0',
                                                                   id: 'htmlFloatPanel_AyohaStore_CheckOut_ShippingAddress',
                                                                   width: '97%',
                                                                   height: 65,
                                                                   // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  style="border-color:white;color:white;width:100%;height:35px;text-align: left;font-size:12px;word-wrap:break-word;">'
                                                                   html: '<textarea   onclick="FloatPanel_AyohaStore_CheckOut_ShippingAddress_ReEditAddress()"  readOnly  id="input-FloatPanel_AyohaStore_CheckOut_ShippingAddress" style="width:100%;height:65px;padding: 2px 2px;box-sizing: border-box;border: 1px solid grey;border-radius: 4px;background-color: #F2F3F5;color:black;font-size: 12px;font-weight:bold" wrap="hard"></textarea>'
                                                                   // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  rows="25" cols="60">'

                                                               },
                                                               {
                                                                   xtype: 'container',
                                                                   width: '100%',
                                                                   // margin: '0 0 0 0',
                                                                   //zIndex:100,
                                                                   margin: '0 0 0 0',
                                                                   // height: 20,
                                                                   style: 'background-color:transparent;',
                                                                   layout: {
                                                                       type: 'hbox',
                                                                       pack: 'center',
                                                                       align: 'center'

                                                                   },
                                                                   items: [
                                                                        {
                                                                            xtype: 'panel',
                                                                            width: 7
                                                                        },
                                                                      {
                                                                          //  margin: '16 0 0 14',
                                                                          id:'htmlFloatPanel_AyohaStore_CheckOut_ContactPerson',
                                                                          html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Contact Person:Tarmizi</div>'
                                                                      },
                                                                      {
                                                                          xtype: 'spacer'
                                                                      },
                                                                       {
                                                                           //  margin: '16 0 0 14',
                                                                           id: 'htmlFloatPanel_AyohaStore_CheckOut_PhoneNo',
                                                                           html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Phone No:0133376958</div>'
                                                                       },
                                                                      {
                                                                          xtype: 'panel',
                                                                          width: 7
                                                                      }
                                                                   ]
                                                               },
                                                          ]
                                                      }
                                                   ]

                                               },

                                               //////////////////


                                               {
                                                   xtype: 'container',
                                                   width: '100%',
                                                   height: 90,
                                                   margin: '30 0 0 0',
                                                   layout: {
                                                       type: 'vbox',
                                                       pack: 'start',
                                                       align: 'left'

                                                   },
                                                   style: 'background-color:transparent',
                                                   items: [

                                                        {
                                                            xtype: 'container',
                                                            width: '100%',
                                                            // margin: '0 0 0 0',
                                                            margin: '0 0 0 10',
                                                            // height: 20,
                                                            style: 'background-color:transparent;',
                                                            layout: {
                                                                type: 'hbox',
                                                                pack: 'center',
                                                                align: 'center'

                                                            },
                                                            items: [
                                                               {
                                                                   //  margin: '16 0 0 14',
                                                                   html: '<div id="test" style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Note To Seller/Sender</div>'
                                                               },
                                                               {
                                                                   xtype: 'spacer'
                                                               },
                                                               {
                                                                   xtype: 'button',
                                                                   hidden:true,
                                                                   ui: 'plain',
                                                                   width: 30,
                                                                   height: 30,
                                                                   margin: '1 0 0 0',
                                                                   id: 'btnFloatPanel_AyohaStore_CheckOut_NoteToSellerSender',
                                                                   html: '<img src="resources/icons/History01.png" width="20" height="20" alt="Company Name">',
                                                                   handler: function () {
                                                                      // FloatPanel_AyohaStore_PaymentReceiptShow();
                                                                      // savepdf();

                                                                   }
                                                               },
                                                               {
                                                                   xtype: 'panel',
                                                                   width: 20
                                                               }
                                                            ]
                                                        },
                                                      {
                                                          xtype: 'container',
                                                          width: '100%',
                                                          height: 70,
                                                          margin: '-5 0 0 0',
                                                          style: "background-color: transparent;",
                                                          //style: "background-color: white;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius: 10px 10px 10px 10px;",
                                                          layout: {
                                                              type: 'vbox',
                                                              pack: 'start',
                                                              align: 'center'

                                                          },
                                                          items: [
                                                               {
                                                                   margin: '5 0 0 0',
                                                                   id: 'htmlFloatPanel_AyohaStore_CheckOut_NoteToSeller',
                                                                   width: '97%',
                                                                   height: 60,
                                                                   // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  style="border-color:white;color:white;width:100%;height:35px;text-align: left;font-size:12px;word-wrap:break-word;">'
                                                                   html: '<textarea id="input-FloatPanel_AyohaStore_CheckOut_NoteToSeller" style="width:100%;height:60px;padding: 0px 0px;box-sizing: border-box;border: 1px solid grey;border-radius: 4px;background-color: #F2F3F5;color:black;font-size: 12px;font-weight:bold" wrap="hard"></textarea>'
                                                                   // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  rows="25" cols="60">'

                                                               },
                                                               
                                                          ]
                                                      }
                                                   ]

                                               },
                                               /////////////////////////
                                               {
                                                   xtype: 'container',
                                                   width: '98%',                                                  
                                                   margin: '10 0 0 0',
                                                   height: 80,
                                                   layout: {
                                                       type: 'vbox',
                                                      

                                                   },
                                                   style: 'background-color:transparent',
                                                   items: [
                                                       {
                                                           margin: '0 0 0 10',
                                                           html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">Order Option</div>'
                                                       },
                                                       {
                                                           xtype: 'radiofield',
                                                           name: 'color',
                                                           id: 'radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_MakePayment',
                                                           value: 'MakePayment',
                                                           label: 'Make Payment',
                                                           checked: true,
                                                           labelWidth: '80%',
                                                           labelAlign: 'right',
                                                           listeners: {
                                                               check: function (radioFld, event, obj) {
                                                                   if (radioFld.isChecked()) {
                                                                       globalFloatPanel_AyohaStore_CheckOut_OrderOption = 'MakePayment';
                                                                       Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_CarouselMasterOutter').setHidden(false);
                                                                       Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_SelectPaymentMethod').setHidden(false);

                                                                       Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_OrderOnly').setHidden(true);
                                                                       Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_ConfirmPay').setHidden(false);
                                                                       Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_CancelOrder').setHidden(true);
                                                                       Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentInfo').setHidden(true);
                                                                       
                                                                       


                                                                   }
                                                               }
                                                           }
                                                       },

                                                        {
                                                            xtype: 'radiofield',
                                                            name: 'color',
                                                            id: 'radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_ViewReceipt',
                                                            value: 'ViewReceipt',
                                                            label: 'View Receipt',
                                                            hidden:true,
                                                            checked: false,
                                                            labelWidth: '80%',
                                                            labelAlign: 'right',
                                                            listeners: {
                                                                check: function (radioFld, event, obj) {
                                                                    if (radioFld.isChecked()) {
                                                                        globalFloatPanel_AyohaStore_CheckOut_OrderOption = 'ViewReceipt';
                                                                        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_CarouselMasterOutter').setHidden(true);
                                                                        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_SelectPaymentMethod').setHidden(true);
                                                                        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentInfo').setHidden(false);
                                                                        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_OrderOnly').setHidden(true);
                                                                        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_ConfirmPay').setHidden(true);
                                                                        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_CancelOrder').setHidden(true);
                                                                        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_ViewReceipt').setHidden(false);
                                                                        //  Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_OrderOnly').setHidden(true);
                                                                        if (FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo_isUsed == "Y") {


                                                                           // alert(globalFloatPanel_AyohaStore_CheckOut_GrandTotal)
                                                                            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_CheckOut_GrandTotal + '</div>')
                                                                            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + localStorage.getItem("VoucherDiscount") + '</div>')

                                                                            if (globalFloatPanel_AyohaStore_CheckOut_OrderStatus == "NewOrder") {
                                                                                Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TitleHeaderTxt_AfterOrder').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:red;margin:17px 0px 0px 0px">Invoice</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:red;margin:-25px 0px 0px 0px">UNPAID</div>');
                                                                                //  Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_OrderOnly').setLabel('Cancel Order  ');

                                                                            } if (globalFloatPanel_AyohaStore_CheckOut_OrderStatus == "OrderPaid") {
                                                                                Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TitleHeaderTxt_AfterOrder').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:green;margin:17px 0px 0px 0px">Invoice</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:green;margin:-25px 0px 0px 0px">PAID</div>');
                                                                               
                                                                                //Store.get('PaymentAmount')
                                                                                //Store.get('PaymentMethod')
                                                                                //Store.get('PaymentNoDisplay')
                                                                                //Store.get('PaymentStatus')
                                                                                //Store.get('DisplayOrderNo')




                                                                            } if (globalFloatPanel_AyohaStore_CheckOut_OrderStatus == "Order_Cancel") {
                                                                                Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TitleHeaderTxt_AfterOrder').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:red;margin:17px 0px 0px 0px">Invoice </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:red;margin:-25px 0px 0px 0px">CANCEL</div>');
                                                                               
                                                                            }


                                                                            var ItemCartCode = globalFloatPanel_AyohaStore_CheckOut_ItemCartCode;
                                                                            var MembershipCardCode = globalFloatPanel_AyohaStore_CheckOut_MembershipCardCode;
                                                                            var OrderNo = globalFloatPanel_AyohaStore_CheckOut_OrderNo;
                                                                            var EnterpriseName = globalFloatPanel_AyohaStore_CheckOut_EnterpriseName;
                                                                            var EnterpriseLogo = globalFloatPanel_AyohaStore_CheckOut_EnterpriseLogo;

                                                                            FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo_OrderPlaced(ItemCartCode, MembershipCardCode, OrderNo, EnterpriseName, EnterpriseLogo);

                                                                           
                                                                        }




                                                                    }
                                                                }
                                                            }
                                                        },
                                                                 {
                                                                     xtype: 'radiofield',
                                                                     value: 'OrderOnly',
                                                                     hidden:true,
                                                                     name: 'color',
                                                                     id: 'radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_OrderOnly',
                                                                     label: 'Order Only',
                                                                     checked: false,
                                                                     labelWidth: '80%',
                                                                     labelAlign: 'right',
                                                                     listeners: {
                                                                         check: function (radioFld, event, obj) {
                                                                             if (radioFld.isChecked()) {
                                                                                 globalFloatPanel_AyohaStore_CheckOut_OrderOption = 'OrderOnly';
                                                                                 Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_CarouselMasterOutter').setHidden(true);
                                                                                 Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_SelectPaymentMethod').setHidden(true);
                                                                                 Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_ConfirmPay').setHidden(true);
                                                                                 Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_OrderOnly').setHidden(false);
                                                                                 Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_CancelOrder').setHidden(true);
                                                                               

                                                                             }
                                                                         }
                                                                     }
                                                                 },
                                                                     {
                                                                         xtype: 'radiofield',
                                                                         value: 'Re-Order',
                                                                         hidden: true,
                                                                         name: 'color',
                                                                         id: 'radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_Re-Order',
                                                                         label: 'Re-Order and Make Payment',
                                                                         checked: false,
                                                                         labelWidth: '80%',
                                                                         labelAlign: 'right',
                                                                         listeners: {
                                                                             check: function (radioFld, event, obj) {
                                                                                 if (radioFld.isChecked()) {
                                                                                     globalFloatPanel_AyohaStore_CheckOut_OrderOption = 'Re-Order';
                                                                                     globalFloatPanel_AyohaStore_DeliveryChargeList_ChargeTypeCode = "";
                                                                                     Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_CarouselMasterOutter').setHidden(false);
                                                                                     Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_SelectPaymentMethod').setHidden(false);
                                                                                    // globalFloatPanel_AyohaStore_CheckOut_OrderOption = 'MakePayment';

                                                                                     Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_OrderOnly').setHidden(true);
                                                                                     Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_ConfirmPay').setHidden(false);
                                                                                     Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_CancelOrder').setHidden(true);
                                                                                     //Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_ConfirmPay').setHidden(true);
                                                                                     //Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_OrderOnly').setHidden(false);
                                                                                     //Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_CancelOrder').setHidden(true);
                                                                                     Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_ViewReceipt').setHidden(true);
                                                                                     Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_DeleteOrder').setHidden(true);
                                                                                     Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentInfo').setHidden(true);
                                                                                     Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TitleHeaderTxt_AfterOrder').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:red;margin:17px 0px 0px 0px">Invoice</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:red;margin:-25px 0px 0px 0px">UNPAID</div>');

                                                                                     /////////////////////

                                                                                  //  alert(FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo_isUsed)
                                                                                     if (FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo_isUsed == "Y") {


                                                                                         Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_CheckOut_GrandTotal + '</div>')
                                                                                         Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + localStorage.getItem("VoucherDiscount") + '</div>')

                                                                                         if (globalFloatPanel_AyohaStore_CheckOut_OrderStatus == "NewOrder") {
                                                                                             Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TitleHeaderTxt_AfterOrder').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:red;margin:17px 0px 0px 0px">Invoice</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:red;margin:-25px 0px 0px 0px">UNPAID</div>');
                                                                                             //  Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_OrderOnly').setLabel('Cancel Order  ');

                                                                                         } if (globalFloatPanel_AyohaStore_CheckOut_OrderStatus == "OrderPaid") {
                                                                                            // Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TitleHeaderTxt_AfterOrder').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:green;margin:17px 0px 0px 0px">Invoice</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:green;margin:-25px 0px 0px 0px">PAID</div>');
                                                                                             Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TitleHeaderTxt_AfterOrder').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:red;margin:17px 0px 0px 0px">Invoice</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:red;margin:-25px 0px 0px 0px">UNPAID</div>');



                                                                                         } if (globalFloatPanel_AyohaStore_CheckOut_OrderStatus == "Order_Cancel") {
                                                                                             Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TitleHeaderTxt_AfterOrder').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:red;margin:17px 0px 0px 0px">Invoice </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:red;margin:-25px 0px 0px 0px">CANCEL</div>');

                                                                                         }

                                                                                         Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_DeliveryChargeType').setHidden(false);
                                                                                         Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_DeliveryTypeName').setHidden(true);

                                                                                         FloatPanel_AyohaStore_CheckOut_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore_OrderPlaced();



                                                                                     }









                                                                                    
                                                                                 }
                                                                             }
                                                                         }
                                                                     },
                                                                      {
                                                                          xtype: 'radiofield',
                                                                          value: 'DeleteOrder',
                                                                          hidden: true,
                                                                          name: 'color',
                                                                          id: 'radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_DeleteOrder',
                                                                          label: 'Delete Order',
                                                                          checked: false,
                                                                          labelWidth: '80%',
                                                                          labelAlign: 'right',
                                                                          listeners: {
                                                                              check: function (radioFld, event, obj) {
                                                                                  if (radioFld.isChecked()) {
                                                                                      globalFloatPanel_AyohaStore_CheckOut_OrderOption = 'DeleteOrder';
                                                                                      Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_CarouselMasterOutter').setHidden(true);
                                                                                      Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_SelectPaymentMethod').setHidden(true);
                                                                                      Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_ConfirmPay').setHidden(true);
                                                                                      Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_OrderOnly').setHidden(true);
                                                                                      Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_CancelOrder').setHidden(true);
                                                                                      Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_ViewReceipt').setHidden(true);
                                                                                      Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_DeleteOrder').setHidden(false);

                                                                                  }
                                                                              }
                                                                          }
                                                                      },
                                                                   {
                                                                       xtype: 'radiofield',
                                                                       value: 'CancelOrder',
                                                                       hidden:true,
                                                                       name: 'color',
                                                                       id: 'radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_CancelOrder',
                                                                       label: 'Cancel Order  ',
                                                                       checked: false,
                                                                       labelWidth: '80%',
                                                                       labelAlign: 'right',
                                                                       listeners: {
                                                                           check: function (radioFld, event, obj) {
                                                                               if (radioFld.isChecked()) {
                                                                                   globalFloatPanel_AyohaStore_CheckOut_OrderOption = 'OrderOnly';
                                                                                   Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_CarouselMasterOutter').setHidden(true);
                                                                                   Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_SelectPaymentMethod').setHidden(true);
                                                                                   Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_ConfirmPay').setHidden(true);
                                                                                   Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_OrderOnly').setHidden(true);
                                                                                   Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_CancelOrder').setHidden(false);
                                                                                   


                                                                               }
                                                                           }
                                                                       }
                                                                   },
                                                   ]
                                               },
                                               ////////////////////////////////////////////
                                                 {
                                                     xtype: 'container',
                                                     width: '100%',
                                                     margin:'35 0 0 0',
                                                     height: 140,
                                                     id: 'containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_CarouselMasterOutter',
                                                     layout: {
                                                         type: 'vbox',
                                                         pack: 'start',
                                                         align: 'left'

                                                     },
                                                     style: 'background-color:transparent',
                                                     items: [

                                                          {
                                                              margin: '0 0 0 10',
                                                              html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:center;color:black;">Payment Method</div>',
                                                          },
                                                          {
                                                              xtype: 'container',
                                                              width: '100%',
                                                              id: 'containerFloatPanel_AyohaStore_CheckOut_SelectPaymentMethod',
                                                              height: 31,
                                                              //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                                              style: 'background-color:transparent',
                                                              layout: {
                                                                  type: 'vbox',
                                                                  pack: 'start',
                                                                  align: 'left'
                                                              },
                                                              items: [
                                                                  {
                                                                      id: 'htmlFloatPanel_AyohaStore_CheckOut_PaymentMethod',
                                                                      margin: '0 0 0 0',

                                                                      // zIndex: -10,
                                                                      width: '98%',
                                                                      // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                                                      // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                                                      html: '<input type="text" id="input-FloatPanel_AyohaStore_CheckOut_PaymentMethod" readOnly onClick="FloatPanel_AyohaStore_PaymentMethodListShow()" style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:center;margin:0px 0px 0px 3px"  placeholder="--- Select Payment Method ---">',
                                                                  },
                                                              ]
                                                          },
                                                            {
                                                                xtype: 'container',
                                                                width: '100%',
                                                                hidden:true,
                                                                id: 'containerFloatPanel_AyohaStore_CheckOut_PaymentAmountCaptured',
                                                                height: 31,
                                                                //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                                                style: 'background-color:transparent',
                                                                layout: {
                                                                    type: 'vbox',
                                                                    pack: 'start',
                                                                    align: 'left'
                                                                },
                                                                items: [
                                                                    {
                                                                        id: 'htmlFloatPanel_AyohaStore_CheckOut_PaymentAmountCaptured',
                                                                        margin: '0 0 0 0',

                                                                        // zIndex: -10,
                                                                        width: '98%',
                                                                        // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                                                        // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                                                        html: '<input type="number" id="input-FloatPanel_AyohaStore_CheckOut_PaymentAmountCaptured" readOnly onClick="FloatPanel_AyohaStore_PaymentMethodListShow()" style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:center;margin:0px 0px 0px 3px"  placeholder="--- Select Payment Method ---">',
                                                                    },
                                                                ]
                                                            },
                                                     
                                                     {
                                                         xtype: 'container',
                                                         width: '100%',
                                                         id: 'containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_CarouselMaster',
                                                         height: 140,
                                                         margin:'5 0 0 0',
                                                         //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                                         style: 'background-color:transparent',
                                                         layout: {
                                                             type: 'vbox',
                                                             pack: 'start',
                                                             align: 'left'
                                                         },
                                                         items: [
                                                             
                                                             
                                                             {
                                                                // xtype: 'carousel',
                                                                 xtype: 'container',
                                                                 //hidden:true,
                                                                 id: 'FloatPanel_AyohaStore_CheckOut_PaymentMethod_CarouselMasterContent',
                                                                // name: 'nameFloatPanel_AyohaStore_CheckOut_PaymentMethod_CarouselMasterContent',
                                                                 //width: '100%',
                                                                 //height: '100%',
                                                                 width: '100%',
                                                                 height: 140,
                                                                 style: 'background-color:white',
                                                                 //height: '100%',
                                  //                               indicator: false,
                                  //                               requires: [
                                  //'Ext.carousel.Carousel',
                                  //'Ext.util.DelayedTask',
                                  //'Ext.Video'
                                  //                               ],
                                                                 //listeners: {
                                                                  
                                                                 //    activeitemchange: function (container, newCard, oldCard, index) {
                                                                   


                                                                 //    },

                                                                 //},



                                                                 margin: '0 0 0 0',
                                                                 items: [
                                                                     {
                                                                         xtype: 'container',
                                                                         width: '100%',
                                                                         id: 'containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet',
                                                                         height: 100,
                                                                         hidden:true,
                                                                         //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                                                        // style: 'background-color:transparent',
                                                                         style: "background-color: transparent;border-bottom:1px solid #ECF0F1;",
                                                                         layout: {
                                                                             type: 'vbox',
                                                                             pack: 'start',
                                                                             align: 'left'
                                                                         },
                                                                         items: [
                                                                         
                                                                             {
                                                                                 xtype: 'container',
                                                                                 width: '100%',
                                                                                 id: 'containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWalletInner',
                                                                                 height: 100,
                                                                                 style: 'background-color:transparent',
                                                                                 layout: {
                                                                                     type: 'hbox',
                                                                                     pack: 'center',
                                                                                     align: 'left'
                                                                                 },
                                                                                 items: [
                                                                                     {
                                                                                         xtype: 'container',
                                                                                         width: '30%',
                                                                                         id: 'containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWalletInner_Logo',
                                                                                         height: 100,
                                                                                         style: 'background-color:transparent',
                                                                                         layout: {
                                                                                             type: 'vbox',
                                                                                             pack: 'center',
                                                                                             align: 'right'
                                                                                         },
                                                                                         items: [
                                                                                             {

                                                                                                 width: 80,
                                                                                                 height: 80,

                                                                                                 html: '<img src="resources/icons/ayohaewallet01.png" alt="Image" style="width:80px;height:80px;">',
                                                                                             },
                                                                                         ]
                                                                                     },
                                                                                     {
                                                                                         xtype: 'container',
                                                                                         width: '50%',
                                                                                         id: 'containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWalletInner_Text',
                                                                                         height: 100,
                                                                                         style: 'background-color:transparent',
                                                                                         layout: {
                                                                                             type: 'vbox',
                                                                                             pack: 'center',
                                                                                             align: 'left'
                                                                                         },
                                                                                         items: [
                                                                                           
                                                                                            {
                                                                                                margin: '0 0 0 0',
                                                                                                id: 'htmlFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet_CurrentBalanceAmount',
                                                                                                html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 30px;font-weight:bold;color:#c800ffc9;margin:0px 0px 0px 0px">RM 00.00</div>'
                                                                                                // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:-6px 0px 0px 0px">Client V 1.0</div>'


                                                                                            },
                                                                                             {
                                                                                                 margin: '-10 0 0 0',
                                                                                                 id: 'htmlFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet_CurrentBalanceTxt',
                                                                                                 html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 8px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Current Balance</div>'
                                                                                                 // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:-6px 0px 0px 0px">Client V 1.0</div>'


                                                                                             },
                                                                                         ]
                                                                                     },
                                                                                     {
                                                                                         xtype: 'container',
                                                                                         width: '20%',
                                                                                         id: 'containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWalletInner_AddeWallet',
                                                                                         height: 100,
                                                                                         style: 'background-color:transparent',
                                                                                         layout: {
                                                                                             type: 'vbox',
                                                                                             pack: 'center',
                                                                                             align: 'center'
                                                                                         },
                                                                                         items: [
                                                                                             {

                                                                                                 width: 30,
                                                                                                 height: 30,

                                                                                                 html: '<img src="resources/icons/topupewallet.png" alt="Image" style="width:30px;height:30px;">',
                                                                                             },
                                                                                             {
                                                                                                 margin: '0 0 0 0',
                                                                                                 id: 'htmlFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet_TopUpCurrentBalanceTxt',
                                                                                                 html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 8px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Topup eWallet</div>'
                                                                                                 // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:-6px 0px 0px 0px">Client V 1.0</div>'


                                                                                             },
                                                                                         ]
                                                                                     },
                                                                                     
                                                                                      
                                                                                 ]
                                                                             }
                                                                         ]
                                                                     },
                                                                     {
                                                                         xtype: 'container',
                                                                         width: '100%',
                                                                         id: 'containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_FPX',
                                                                         hidden:true,
                                                                         height: 100,
                                                                         //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                                                         style: 'background-color:white',
                                                                         layout: {
                                                                             type: 'vbox',
                                                                             pack: 'start',
                                                                             align: 'left'
                                                                         },
                                                                         items: [
                                                                             
                                                                              {
                                                                                  html: 'test'
                                                                              }
                                                                             

                                                                         ]

                                                                     },


                                                                     {
                                                                         xtype: 'container',
                                                                         width: '100%',
                                                                         hidden: true,
                                                                         id: 'containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_ManualTransfer',
                                                                         height: 100,
                                                                         //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                                                         style: 'background-color:white',
                                                                         layout: {
                                                                             type: 'vbox',
                                                                             pack: 'start',
                                                                             align: 'left'
                                                                         },
                                                                         items: [
                                                                             

                                                                          {
                                                                              html: 'test'
                                                                          }
                                                                         ]
                                                                     },
                                                                       {
                                                                           xtype: 'container',
                                                                           width: '100%',
                                                                           hidden: true,
                                                                           id: 'containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_COD',
                                                                           height: 100,
                                                                           //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                                                           style: 'background-color:white',
                                                                           layout: {
                                                                               type: 'vbox',
                                                                               pack: 'start',
                                                                               align: 'left'
                                                                           },
                                                                           items: [


                                                                            {
                                                                                html: 'test'
                                                                            }
                                                                           ]
                                                                       },

                                                                 ]
                                                             },




                                                             



                                                         ]
                                                     },
                                                     ]

                                                 },



                                                 //{
                                                 //    xtype: 'container',
                                                 //    width: '100%',
                                                 //    id: 'containerFloatPanel_AyohaStore_CheckOut_SelectPaymentMethod',
                                                 //    height: 31,
                                                 //    //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                                 //    style: 'background-color:transparent',
                                                 //    layout: {
                                                 //        type: 'vbox',
                                                 //        pack: 'start',
                                                 //        align: 'left'
                                                 //    },
                                                 //    items: [
                                                 //        {
                                                 //            id: 'htmlFloatPanel_AyohaStore_CheckOut_PaymentMethod',
                                                 //            margin: '0 0 0 0',

                                                 //            // zIndex: -10,
                                                 //            width: '98%',
                                                 //            // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                                 //            // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                                 //            html: '<input type="text" id="input-FloatPanel_AyohaStore_CheckOut_PaymentMethod" readOnly onClick="FloatPanel_AyohaStore_PaymentMethodListShow()" style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:center;margin:0px 0px 0px 3px"  placeholder="--- Select Payment Method ---">',
                                                 //        },
                                                 //    ]
                                                 //},
                                                 {
                                                     xtype: 'container',
                                                     width: '100%',
                                                     id: 'containerFloatPanel_AyohaStore_CheckOut_BottomExtra',
                                                     height: 130,
                                                 }
                                                  

                                      ]
                                  },

                                ]

                            },






                        ]
                    },

















































                ]
            },












        ]





    });
    return _FloatPanel_AyohaStore_CheckOut;



}




function FloatPanel_AyohaStore_CheckOut_SetDeliveryCharge() {

    console.log(globalFloatPanel_AyohaStore_Cart_TotalSumPrice);
    console.log(globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge);
    console.log(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher);

    var result = (parseFloat(globalFloatPanel_AyohaStore_Cart_TotalSumPrice) + parseFloat(globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge)) - parseFloat(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher);
    globalFloatPanel_AyohaStore_Cart_GrandTotal = parseFloat(result);
    globalFloatPanel_AyohaStore_CheckOut_GrandTotal = parseFloat(result);
  //  console.log(globalFloatPanel_AyohaStore_Cart_GrandTotal)
    var resultDelCharge =parseFloat (globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge);
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_Delivery').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + resultDelCharge.toFixed(2) + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_Cart_GrandTotal.toFixed(2) + '</div>');
}



function FloatPanel_AyohaStore_CheckOutShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_CheckOut);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_CheckOut());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaStore_CheckOutHide()");
    isFloatPanel_AyohaStore_CheckOutOpen = 'Y';
    Ext.getCmp('FloatPanel_AyohaStore_CheckOut_PurchasedItem_FromCart').setHidden(false);
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TitleHeaderTxt').setHidden(false);
    FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo_isUsed = "N";
   // alert(FloatPanel_AyohaStore_getEnterpriseName())
    globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge = 0.00;
    globalFloatPanel_AyohaStore_DeliveryChargeList_ChargeTypeCode = "";
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_EnterpriseName').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + FloatPanel_AyohaStore_getEnterpriseName() + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_EnterpriseLogo').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:0px 0px 0px 0px"><img src="' + FloatPanel_AyohaStore_getEnterpriseLogo() + '" style="width:72px;height:72px;border-radius:50%"/></div>');

    var TotalSumPrice = parseFloat(globalFloatPanel_AyohaStore_Cart_TotalSumPrice);
    var DelCharge = parseFloat(globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge);
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_DeliveryTypeName').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">(' + globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryName + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_Delivery').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + DelCharge.toFixed(2) + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TotalQuantity').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_Cart_TotalItemQuantity + '</div>');
    // Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_Delivery').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>');

    // Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('MembershipDiscount') + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_SubTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + TotalSumPrice.toFixed(2) + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_Cart_GrandTotal + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MerchantPointEarn').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_AyohaPointEarn').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_Cart_TotalAyohaPoint + '</div>');

  ///////  Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_VoucherCount').setHtml('<div onclick="FloatPanel_AyohaRewardVoucherList_AyohaStore_CartShow();" class="blink_me" style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;"><img style="margin:0px 5px -3px 0px;" src="resources/icons/voucher01.png" width="20px" height="16px"/><font color=purple>' + globalFloatPanel_AyohaStore_Cart_VoucherCount + ' Voucher!</font> - Voucher Discount(RM):</div>');

    if (arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length > 0) {
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscountLabel').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;"><img style="margin:0px 5px -3px 0px;" src="resources/icons/voucher01.png" width="20px" height="16px"/><font color=purple>' + arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length + ' Voucher Used</font> - Voucher Discount(RM):</div>')
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscountLabel').setMargin('-1 0 0 0');
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher.toFixed(2) + '</div>')
        //console.log(DelCharge);
        var tempGrandTotal = parseFloat(TotalSumPrice.toFixed(2)) + DelCharge;
       // var xxx = (tempGrandTotal - parseFloat(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher));
        globalFloatPanel_AyohaStore_Cart_GrandTotal = (tempGrandTotal - parseFloat(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher));
        
        console.log(globalFloatPanel_AyohaStore_Cart_GrandTotal);
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_Cart_GrandTotal.toFixed(2) + '</div>');
    }
    



    globalFloatPanel_AyohaStore_CheckOut_GrandTotal = globalFloatPanel_AyohaStore_Cart_GrandTotal;
    FloatPanel_AyohaStore_DeliveryAddress_AyohaStoreShippingAddressLoadBySubscriberAccNoStore();
    
    Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_CancelOrder').setHidden(true);
    Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_OrderOnly').setHidden(false);

    var containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_OrderOnly = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_CheckOut_OrderOnly]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_OrderOnly = containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_OrderOnly.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_OrderOnly.on('tap',
      function (event, node, options, eOpts) {

          // FloatPanel_AyohaStore_Cart_Order_viaWhatsApp();
          FloatPanel_AyohaStore_CheckOut_OrderOnly_SendOrder();
      }
    );

    globalFloatPanel_AyohaStore_CheckOut_OrderStatus = "CheckOut";

    var containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_ConfirmPay = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_CheckOut_ConfirmPay]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_ConfirmPay = containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_ConfirmPay.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_ConfirmPay.on('tap',
      function (event, node, options, eOpts) {

          
          Staging_FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert();

         
      }
    );

    



    if (globalFloatPanel_AyohaStore_Cart_LoyaltyRewardType == "Stamp Reward Loyalty Card") {
        globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint = 0.00;
        localStorage.setItem("MerchantPointEarn", "0.00");
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MerchantPointEarnLbl').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Total Stamp Earn:</div>');
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MerchantPointEarn').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' +parseInt(globalFloatPanel_AyohaStore_Cart_TotalAyohaPoint) + '</div>');
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_AyohaPointEarn').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_Cart_TotalAyohaPoint + '</div>');

    }


   
    FloatPanel_AyohaStore_CheckOut_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore();
    globalFloatPanel_AyohaStore_Cart_GrandTotal = 0.00;

}



function Staging_FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert() {
    //alert(globalFloatPanel_AyohaStore_CheckOut_OrderStatus);
    ////return;
   

    if (globalDashboardisUserHasEwalletAccount == "N") {
        FloatPanel_AyohaeWallet_SettingShow_CreateNewAccount();
        FloatPanel_AyohaeWalletHide();
        return;
    }
    if (globalFloatPanel_AyohaStore_CheckOut_OrderStatus == "OrderPaid") {
      //  FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert_ReOrder_MakePayment();

        FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert_ReOrder_MakePayment_Validate()
        return
    }
    if (globalFloatPanel_AyohaStore_CheckOut_OrderStatus == "CheckOut") {
        FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert_Validate();
        return
    }

   
    if (globalFloatPanel_AyohaStore_CheckOut_OrderStatus == "NewOrder") {
        //FloatPanel_AyohaStore_CheckOut_ConfirmPay();
        FloatPanel_AyohaStore_CheckOut_ConfirmPay_Validate();
        return;
    }

    if (globalFloatPanel_AyohaStore_CheckOut_OrderStatus == "Order_Confirmed") {
        FloatPanel_AyohaStore_CheckOut_ConfirmPay_Validate();
     //   FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert_Validate();
        return
    }
}


function FloatPanel_AyohaStore_CheckOut_OrderOnly_SendOrder() {
    var Note = document.getElementById('input-FloatPanel_AyohaStore_CheckOut_NoteToSeller').value;
    var add = document.getElementById('input-FloatPanel_AyohaStore_CheckOut_ShippingAddress').value;
  

    var internalglobalFloatPanel_AyohaStore_CheckOut_VoucherCode;
    var ModifiedVocherCode;

    if (arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length > 0) {
        for (i = 0; i < arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length; i++) {
            internalglobalFloatPanel_AyohaStore_CheckOut_VoucherCode += arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode[i] + ","
        }
        ModifiedVocherCode = internalglobalFloatPanel_AyohaStore_CheckOut_VoucherCode.replace("undefined", "");
    } else {
        ModifiedVocherCode = "NoVoucherCode,";
    }
    
    if (add) {

    } else {
        swalFireFail("Shipping Address required!");
        return;
    }
    if (Note) {
        Note = Note;

    } else {
        Note = "NA";
    }
    LoadingPanelShow("resources/icons/sendingAnim.gif", "Submit Order...")
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "ItemCartCode": globalFloatPanel_AyohaStore_Cart_ItemCartCode,
            "DeliveryChargeCode": globalFloatPanel_AyohaStore_DeliveryChargeList_ChargeTypeCode,
            "DeliveryCharge": globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge,
            "MembershipDiscountCampaignCode": "NA",
            "MembershipDiscount": 0.00,
            "VoucherCampaignCode": "NA",
            "VoucherDiscount":globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher,
            "GrandTotal": globalFloatPanel_AyohaStore_Cart_GrandTotal,
            "DeliveryAddress_StreetName": globalFloatPanel_AyohaStore_DeliveryAddress_StreetName,
            "DeliveryAddress_Town": globalFloatPanel_AyohaStore_DeliveryAddress_TownCity,
            "DeliveryAddress_Postcode": globalFloatPanel_AyohaStore_DeliveryAddress_PostCode,
            "DeliveryAddress_StateCode": globalFloatPanel_AyohaStore_DeliveryAddress_State,
            "DeliveryAddress_CountryCode": globalFloatPanel_AyohaStore_DeliveryAddress_Country,
            "ReferenceName": globalFloatPanel_AyohaStore_DeliveryAddress_ContactPerson,
            "ReferencePhoneNo": globalFloatPanel_AyohaStore_DeliveryAddress_PhoneNo,
            "NoteToSeller": Note,
            "MerchantPointEarn": globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint,
            "AyohaPointEarn": globalFloatPanel_AyohaStore_Cart_TotalAyohaPoint,
            "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
            "DeliveryName": globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryName,
            "TotalQuantity": globalFloatPanel_AyohaStore_Cart_TotalItemQuantity,
            "SubTotal": globalFloatPanel_AyohaStore_Cart_TotalSumPrice,
            "VoucherCount": arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length,
            "VoucherCode": ModifiedVocherCode.slice(0, -1),
        };
        console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderInsert',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    FloatPanel_AyohaStore_CartHide();
                    FloatPanel_AyohaStore_CheckOutHide();
                    FloatPanel_AyohaStore_SaleItemDetailHide();
                    FloatPanel_AyohaStore_OrderHistoryHide();
                   // swalFireSuccesDynamicIconWithMessage("resources/icons/orderplacedAnim.gif", "Order has been submit successfully!");
                    swalFireDynamicIconWithMessage("resources/icons/orderplacedAnim.gif", "Order has been submit successfully!", "black", "#9932cc");
                    globalFloatPanel_AyohaStore_CartSumItemSumPrice = 0.00;
                    globalFloatPanel_AyohaStore_CartTotalItemQuantity = 0;
                    globalFloatPanel_AyohaStore_Cart_ItemCartCode = "NewItemCartCode";
                    if (isFloatPanel_AyohaStoreOpen == "Y") {
                        Ext.getCmp('htmlFloatPanel_AyohaStore_CartAmount').setHtml('<div style="background: transparent;height:30px;font-size: 13px;font-weight:bold;color:black;text-align:center;" >RM00.00</div>');
                        Ext.getCmp('htmlFloatPanel_AyohaStore_MyCartCountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>0</b></div>');
                    }
                    FloatPanel_OrderCartHide();
                    var task = Ext.create('Ext.util.DelayedTask', function () {
                        DashboardAyohaUserMainStore();
                    });
                    task.delay(100);
                }
                else {

                    swalFireFail("Fail!-->" + result.responseText.trim());
                    globalFloatPanel_AyohaStore_CartSumItemSumPrice = 0.00;
                    globalFloatPanel_AyohaStore_CartTotalItemQuantity = 0;
                    globalFloatPanel_AyohaStore_Cart_ItemCartCode = "NewItemCartCode";
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();
                LoadingPanelHide();

            },

            failure: function (result, request) {
                swalFireFail("Fail!");
                globalFloatPanel_AyohaStore_CartSumItemSumPrice = 0.00;
                globalFloatPanel_AyohaStore_CartTotalItemQuantity = 0;
                globalFloatPanel_AyohaStore_Cart_ItemCartCode = "NewItemCartCode";
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });

        Ext.Viewport.unmask();
    });
    task.delay(1000);
}




function FloatPanel_AyohaStore_CheckOutHide() {
    // FloatPanel_AyohaStore_CheckOut_AddCardHide();
    if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
        _FloatPanel_AyohaStore_CheckOut.hide(); isFloatPanel_AyohaStore_CheckOutOpen = 'N';
        RemovePages("FloatPanel_AyohaStore_CheckOutHide()");
        FloatPanel_MerchantDetailPageHide();
        Dashboard_SearchMerchantListHide();
    }
   
}







function FloatPanel_AyohaStore_CheckOutAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x - 80;
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;
    Ext.getCmp('FloatPanel_AyohaStore_CheckOutID').setHeight(x + 7);
    //Ext.getCmp('FloatPanel_AyohaStore_CheckOutID').setHeight(x + 40);
    Ext.getCmp('FloatPanel_AyohaStore_CheckOutListID').setHeight(newHeights);


}


function FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_SetEnterpriseAccNo_DashboardOrderHistory(EnterpriseAccNo, TotalItemQuantity, MembershipCardCode, ItemCartCode) {
    globalFloatPanel_OrderHistory_EnterpriseAccNo = EnterpriseAccNo;
    globalFloatPanel_AyohaStore_ModuleTagging = "DashboardOrderHistory";
    globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseLogoPath = "";
    globalFloatPanel_AyohaStore_CartTotalItemQuantity = TotalItemQuantity;
    globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode = MembershipCardCode;    
    globalFloatPanel_AyohaStore_Cart_ItemCartCode = ItemCartCode;

   
   
   
}
function FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_SetEnterpriseAccNo_ModuleTagging(EnterpriseAccNo, TotalItemQuantity, MembershipCardCode, ItemCartCode, ModuleTagging) {
    globalFloatPanel_OrderHistory_EnterpriseAccNo = EnterpriseAccNo;
    globalFloatPanel_AyohaStore_ModuleTagging =ModuleTagging;
    globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseLogoPath = "";
    globalFloatPanel_AyohaStore_CartTotalItemQuantity = TotalItemQuantity;
    globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode = MembershipCardCode;
    globalFloatPanel_AyohaStore_Cart_ItemCartCode = ItemCartCode;




}

function FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_SetEnterpriseAccNo_DashboardOrderCart_ExtendEnterpriseNameLogo(EnterpriseName, EnterpriseLogo) {
    globalFloatPanel_AyohaStore_ModuleTagging = "DashboardOrderHistory";
    globalFloatPanel_OrderCartEnterpriseName = EnterpriseName;
    globalFloatPanel_OrderCartEnterpriseLogo = EnterpriseLogo;
   // alert(EnterpriseName)
}

function FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore(ItemCartCode, MembershipCardCode, EnterpriseName, EnterpriseLogo) {
    Ext.Viewport.remove(_FloatPanel_AyohaStore_CheckOut);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_CheckOut());
    this.overlay.show();


    //alert("FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore")

    AddRoutePages("FloatPanel_AyohaStore_CheckOutHide()");
    isFloatPanel_AyohaStore_CheckOutOpen = 'Y';
    FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo_isUsed = "N";
    globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge = 0.00;
    globalFloatPanel_AyohaStore_DeliveryChargeList_ChargeTypeCode = "";
    Ext.getCmp('FloatPanel_AyohaStore_CheckOut_PurchasedItem_FromPurchaseHistory').setHidden(false);
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TitleHeaderTxt_AfterOrder').setHidden(false);
    Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_CancelOrder').setHidden(false);
    Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_OrderOnly').setHidden(true);

    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_EnterpriseName').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + EnterpriseName + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_EnterpriseLogo').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:0px 0px 0px 0px"><img src="' + EnterpriseLogo + '" style="width:72px;height:72px;border-radius:50%"/></div>');

    //alert(EnterpriseLogo)
    Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_DeliveryChargeType').setHidden(true);
    Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_DeliveryTypeName').setHidden(false);
   
    _DataStore_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore.getProxy().setExtraParam('ItemCartCode', ItemCartCode);
    _DataStore_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore.getProxy().setExtraParam('MembershipCardCode', MembershipCardCode);
    _DataStore_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore.getProxy().setExtraParam('OrderNo', "NewOrder");
    _DataStore_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore.getProxy().setUrl(GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCode');
    _DataStore_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = parseInt(_DataStore_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore.getCount());


        if (count <= 0) {


            return;
        }

        var Store = _DataStore_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore.getAt(0);


        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TotalQuantity').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('TotalQuantity') + '</div>')
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_Delivery').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('DeliveryCharge') + '</div>')
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('MembershipDiscount') + '</div>')
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_DeliveryTypeName').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">(' + Store.get('DeliveryName') + ')</div>')
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('MembershipDiscount') + '</div>')
        
       
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_SubTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('SubTotal') + '</div>')

        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('GrandTotal') + '</div>')

        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MerchantPointEarn').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('MerchantPointEarn') + '</div>')
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_AyohaPointEarn').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('AyohaPointEarn') + '</div>')

       // alert(Store.get('VoucherDiscount'));
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('VoucherDiscount') + '</div>');

        if (Store.get('LoyaltyRewardType') == "Stamp Reward Loyalty Card") {
            globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint = 0.00;
            localStorage.setItem("MerchantPointEarn", "0.00");
            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MerchantPointEarnLbl').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Total Stamp Earn:</div>');
            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MerchantPointEarn').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + parseInt(Store.get('AyohaPointEarn')) + '</div>');
            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_AyohaPointEarn').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('AyohaPointEarn') + '</div>');

        }



        //input - FloatPanel_AyohaStore_CheckOut_ShippingAddress
        document.getElementById('input-FloatPanel_AyohaStore_CheckOut_ShippingAddress').value = Store.get('DeliveryAddress_StreetName') + '\n' + Store.get('DeliveryAddress_Postcode') + ' ' + Store.get('DeliveryAddress_Town') + '\n' + Store.get('DeliveryAddress_StateCode') + '\n' + Store.get('DeliveryAddress_CountryCode');
        document.getElementById('input-FloatPanel_AyohaStore_CheckOut_NoteToSeller').value = Store.get('NoteToSeller');

        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_ContactPerson').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Contact Person:' + Store.get('ReferenceName') + '</div>');
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_PhoneNo').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Phone No:' + Store.get('ReferencePhoneNo') + '</div>');


        //Store.get('DisplayOrderNo')
        //Store.get('OrderNo')
        var OrderStatus = Store.get('OrderStatus');
        globalFloatPanel_AyohaStore_CheckOut_OrderStatus = OrderStatus;
        globalFloatPanel_AyohaStore_CheckOut_OrderNo = Store.get('OrderNo');
        globalFloatPanel_AyohaStore_CheckOut_GrandTotal =parseFloat(Store.get('GrandTotal'));
        globalFloatPanel_AyohaStore_Cart_TotalSumPrice = parseFloat(Store.get('SubTotal'));
        globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge = parseFloat(Store.get('DeliveryCharge'));
        globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher = parseFloat(Store.get('VoucherDiscount'));
        document.getElementById('input-FloatPanel_AyohaStore_CheckOut_DeliveryChargeType').value = Store.get('DeliveryName');
        

        localStorage.setItem("ItemCartCode", Store.get('ItemCartCode'));

        localStorage.setItem("DeliveryChargeCode", Store.get('DeliveryChargeCode'));
        globalFloatPanel_AyohaStore_DeliveryChargeList_ChargeTypeCode = Store.get('DeliveryChargeCode');
        localStorage.setItem("DeliveryCharge", Store.get('DeliveryCharge'));
        localStorage.setItem("MembershipDiscountCampaignCode", Store.get('MembershipDiscountCampaignCode'));
        localStorage.setItem("MembershipDiscount", Store.get('MembershipDiscount'));



        localStorage.setItem("VoucherCampaignCode", Store.get('VoucherCampaignCode'));
        localStorage.setItem("VoucherDiscount", Store.get('VoucherDiscount'));
        localStorage.setItem("GrandTotal", Store.get('GrandTotal'));
        localStorage.setItem("DeliveryAddress_StreetName", Store.get('DeliveryAddress_StreetName'));


        localStorage.setItem("DeliveryAddress_Town", Store.get('DeliveryAddress_Town'));
        localStorage.setItem("DeliveryAddress_Postcode", Store.get('DeliveryAddress_Postcode'));
        localStorage.setItem("DeliveryAddress_StateCode", Store.get('DeliveryAddress_StateCode'));
        localStorage.setItem("DeliveryAddress_CountryCode", Store.get('DeliveryAddress_CountryCode'));

        localStorage.setItem("ReferenceName", Store.get('ReferenceName'));
        localStorage.setItem("ReferencePhoneNo", Store.get('ReferencePhoneNo'));
        localStorage.setItem("NoteToSeller", Store.get('NoteToSeller'));
        localStorage.setItem("MerchantPointEarn", Store.get('MerchantPointEarn'));

        localStorage.setItem("AyohaPointEarn", Store.get('AyohaPointEarn'));
        localStorage.setItem("EnterpriseAccNo", Store.get('EnterpriseAccNo'));
        localStorage.setItem("SubscriberAccNo", Store.get('SubscriberAccNo'));
        localStorage.setItem("MembershipCardCode", Store.get('MembershipCardCode'));

        localStorage.setItem("OrderStatus", Store.get('OrderStatus'));
        localStorage.setItem("DeliveryName", Store.get('DeliveryName'));
        localStorage.setItem("TotalQuantity", Store.get('TotalQuantity'));
        localStorage.setItem("SubTotal", Store.get('SubTotal'));


        localStorage.setItem("PaymentAmount", Store.get('PaymentAmount'));
        localStorage.setItem("PaymentMethod", Store.get('PaymentMethod'));
        localStorage.setItem("PaymentMethodCode", Store.get('PaymentMethodCode'));
        localStorage.setItem("CreatedBy", Store.get('CreatedBy'));
        localStorage.setItem("PaymentStatus", Store.get('PaymentStatus'));
        localStorage.setItem("PaymentNoDisplay", Store.get('PaymentNoDisplay'));
        localStorage.setItem("PaymentNo", Store.get('PaymentNo'));
        globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode = MembershipCardCode;
        globalFloatPanel_AyohaStore_Cart_TotalAyohaPoint = Store.get('AyohaPointEarn');

       
        if (OrderStatus == "NewOrder") {
            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TitleHeaderTxt_AfterOrder').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:red;margin:17px 0px 0px 0px">Invoice</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:red;margin:-25px 0px 0px 0px">UNPAID</div>');
            //  Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_OrderOnly').setLabel('Cancel Order  ');

        } if (OrderStatus == "OrderPaid") {
            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TitleHeaderTxt_AfterOrder').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:green;margin:17px 0px 0px 0px">Invoice</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:green;margin:-25px 0px 0px 0px">PAID</div>');
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_OrderOnly').setHidden(true);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_MakePayment').setHidden(true);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_CancelOrder').setHidden(true);

            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_ViewReceipt').setHidden(false);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_ViewReceipt').setChecked(true);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_Re-Order').setHidden(false);


            Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_ConfirmPay').setHidden(true);
            Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_ViewReceipt').setHidden(false);
            Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentInfo').setHidden(false);

            document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentInfo').value = "Payment Method:" + Store.get('PaymentMethod') + "\nPayment Amount:(RM)" + Store.get('PaymentAmount') + "\nPayment Status:" + Store.get('PaymentStatus') + "\nPayment Date:" + Store.get('PaymentDate') + "\nInvoice No:" + Store.get('DisplayOrderNo');

            //Store.get('PaymentAmount')
            //Store.get('PaymentMethod')
            //Store.get('PaymentNoDisplay')
            //Store.get('PaymentStatus')
            //Store.get('DisplayOrderNo')




        } if (OrderStatus == "Order_Cancel") {
            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TitleHeaderTxt_AfterOrder').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:red;margin:17px 0px 0px 0px">Invoice </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:red;margin:-25px 0px 0px 0px">CANCEL</div>');
            //  Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_OrderOnly').setLabel('Cancel Order  ');
            Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_ConfirmPay').setHidden(true);
            Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_CarouselMasterOutter').setHidden(true);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_ViewReceipt').setHidden(true);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_OrderOnly').setHidden(true);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_MakePayment').setHidden(true);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_CancelOrder').setHidden(true);

            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_Re-Order').setHidden(false);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_DeleteOrder').setHidden(false);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_Re-Order').setChecked(false);
            Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_DeleteOrder').setHidden(false);


        }


        var containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_CancelOrder = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_CheckOut_CancelOrder]')[0];
        var containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_CancelOrder = containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_CancelOrder.element;
        containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_CancelOrder.on('tap',
          function (event, node, options, eOpts) {

              // FloatPanel_AyohaStore_Cart_Order_viaWhatsApp();
              FloatPanel_AyohaStore_CheckOut_CancelOrder();
          }
        );





        var containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_DeleteOrder = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_CheckOut_DeleteOrder]')[0];
        var containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_DeleteOrder = containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_DeleteOrder.element;
        containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_DeleteOrder.on('tap',
          function (event, node, options, eOpts) {

              // FloatPanel_AyohaStore_Cart_Order_viaWhatsApp();
              FloatPanel_AyohaStore_CheckOut_DeleteOrder();
          }
        );


        var containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_ConfirmPay = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_CheckOut_ConfirmPay]')[0];
        var containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_ConfirmPay = containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_ConfirmPay.element;
        containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_ConfirmPay.on('tap',
          function (event, node, options, eOpts) {

              Staging_FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert();
          }
        );


        var containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_OrderOnly = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_CheckOut_OrderOnly]')[0];
        var containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_OrderOnly = containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_OrderOnly.element;
        containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_OrderOnly.on('tap',
          function (event, node, options, eOpts) {

              // FloatPanel_AyohaStore_Cart_Order_viaWhatsApp();
              FloatPanel_AyohaStore_CheckOut_OrderOnly_ReOrder();
          }
        );




        var containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_ViewReceipt = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_CheckOut_ViewReceipt]')[0];
        var containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_ViewReceipt = containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_ViewReceipt.element;
        containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_ViewReceipt.on('tap',
          function (event, node, options, eOpts) {
             // FloatPanel_AyohaStore_PaymentReceipt_PrintHtml();
              FloatPanel_AyohaStore_PaymentReceiptShow();


          }
        );
       // FloatPanel_AyohaStore_CheckOut_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore_OrderPlaced();
       // FloatPanel_AyohaRewardVoucherList_DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoPaymentNoEntitledVoucherStatusStore('Voucher_Used');
        FloatPanel_AyohaRewardVoucherList_DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoPaymentNoEntitledVoucherStatusStore_OrderPlaced('Voucher_Used', Store.get('OrderNo'), Store.get('EnterpriseAccNo'));
       // FloatPanel_AyohaStore_CheckOut_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore();
       // Dashboard_LoadAyohaEwallet();
    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}

var FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo_isUsed = "N";
function FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo(ItemCartCode, MembershipCardCode, OrderNo, EnterpriseName, EnterpriseLogo) {
    Ext.Viewport.remove(_FloatPanel_AyohaStore_CheckOut);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_CheckOut());
    this.overlay.show();


    //alert("FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo")


    AddRoutePages("FloatPanel_AyohaStore_CheckOutHide()");
    isFloatPanel_AyohaStore_CheckOutOpen = 'Y';
    globalFloatPanel_AyohaStore_DeliveryChargeList_ChargeTypeCode = "";
    Ext.getCmp('FloatPanel_AyohaStore_CheckOut_PurchasedItem_FromPurchaseHistory').setHidden(false);
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TitleHeaderTxt_AfterOrder').setHidden(false);
    Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_CancelOrder').setHidden(false);
    Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_OrderOnly').setHidden(true);
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_EnterpriseName').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + EnterpriseName + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_EnterpriseLogo').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:0px 0px 0px 0px"><img src="' + EnterpriseLogo + '" style="width:72px;height:72px;border-radius:50%"/></div>');
    FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo_isUsed = "Y";
    globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode = MembershipCardCode;
    globalFloatPanel_AyohaStore_CheckOut_ItemCartCode = ItemCartCode;
    globalFloatPanel_AyohaStore_CheckOut_MembershipCardCode = MembershipCardCode;
    globalFloatPanel_AyohaStore_CheckOut_OrderNo = OrderNo;
    globalFloatPanel_AyohaStore_CheckOut_EnterpriseName = EnterpriseName;
    globalFloatPanel_AyohaStore_CheckOut_EnterpriseLogo = EnterpriseLogo;
    _DataStore_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore.getProxy().setExtraParam('ItemCartCode', ItemCartCode);
    _DataStore_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore.getProxy().setExtraParam('MembershipCardCode', MembershipCardCode);
    _DataStore_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore.getProxy().setExtraParam('OrderNo', OrderNo);
    _DataStore_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore.getProxy().setUrl(GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCode');
    _DataStore_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore.load();

  

    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = parseInt(_DataStore_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore.getCount());
       
    
        if (count <= 0) {
           

            return;
        }

        var Store = _DataStore_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore.getAt(0);


        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TotalQuantity').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('TotalQuantity') + '</div>')
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_Delivery').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('DeliveryCharge') + '</div>')
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('MembershipDiscount') + '</div>')
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_DeliveryTypeName').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">(' + Store.get('DeliveryName') + ')</div>')
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('MembershipDiscount') + '</div>')
        
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('VoucherDiscount') + '</div>')
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_SubTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('SubTotal') + '</div>')
       
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('GrandTotal') + '</div>')
       
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MerchantPointEarn').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('MerchantPointEarn') + '</div>')
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_AyohaPointEarn').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('AyohaPointEarn') + '</div>')
      

        
       

        
        
        //input - FloatPanel_AyohaStore_CheckOut_ShippingAddress
        document.getElementById('input-FloatPanel_AyohaStore_CheckOut_ShippingAddress').value = Store.get('DeliveryAddress_StreetName') + '\n' + Store.get('DeliveryAddress_Postcode') + ' ' + Store.get('DeliveryAddress_Town') + '\n' + Store.get('DeliveryAddress_StateCode') + '\n' + Store.get('DeliveryAddress_CountryCode');
        document.getElementById('input-FloatPanel_AyohaStore_CheckOut_NoteToSeller').value = Store.get('NoteToSeller');
        
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_ContactPerson').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Contact Person:'+Store.get('ReferenceName')+'</div>');
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_PhoneNo').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Phone No:'+Store.get('ReferencePhoneNo')+'</div>');
        
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_DeliveryChargeType').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_DeliveryTypeName').setHidden(false);

        var OrderStatus = Store.get('OrderStatus');
        globalFloatPanel_AyohaStore_CheckOut_OrderStatus = OrderStatus;
        globalFloatPanel_AyohaStore_CheckOut_OrderNo = Store.get('OrderNo');
        globalFloatPanel_AyohaStore_CheckOut_GrandTotal = Store.get('GrandTotal');
        globalFloatPanel_AyohaStore_Cart_TotalSumPrice = Store.get('SubTotal');
        globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge = Store.get('DeliveryCharge');

        localStorage.setItem("ItemCartCode", Store.get('ItemCartCode'));

        localStorage.setItem("DeliveryChargeCode", Store.get('DeliveryChargeCode'));
        globalFloatPanel_AyohaStore_DeliveryChargeList_ChargeTypeCode = Store.get('DeliveryChargeCode');
        localStorage.setItem("DeliveryCharge",Store.get('DeliveryCharge'));
        localStorage.setItem("MembershipDiscountCampaignCode",Store.get('MembershipDiscountCampaignCode'));
        localStorage.setItem("MembershipDiscount", Store.get('MembershipDiscount'));



        localStorage.setItem("VoucherCampaignCode", Store.get('VoucherCampaignCode'));
        localStorage.setItem("VoucherDiscount", Store.get('VoucherDiscount'));
        localStorage.setItem("GrandTotal", Store.get('GrandTotal'));
        localStorage.setItem("DeliveryAddress_StreetName", Store.get('DeliveryAddress_StreetName'));


        localStorage.setItem("DeliveryAddress_Town", Store.get('DeliveryAddress_Town'));
        localStorage.setItem("DeliveryAddress_Postcode", Store.get('DeliveryAddress_Postcode'));
        localStorage.setItem("DeliveryAddress_StateCode", Store.get('DeliveryAddress_StateCode'));
        localStorage.setItem("DeliveryAddress_CountryCode", Store.get('DeliveryAddress_CountryCode'));

        localStorage.setItem("ReferenceName", Store.get('ReferenceName'));
        localStorage.setItem("ReferencePhoneNo", Store.get('ReferencePhoneNo'));
        localStorage.setItem("NoteToSeller", Store.get('NoteToSeller'));
        localStorage.setItem("MerchantPointEarn", Store.get('MerchantPointEarn'));

        localStorage.setItem("AyohaPointEarn", Store.get('AyohaPointEarn'));
        localStorage.setItem("EnterpriseAccNo", Store.get('EnterpriseAccNo'));
        localStorage.setItem("SubscriberAccNo", Store.get('SubscriberAccNo'));
        localStorage.setItem("MembershipCardCode", Store.get('MembershipCardCode'));

        localStorage.setItem("OrderStatus", Store.get('OrderStatus'));
        localStorage.setItem("DeliveryName", Store.get('DeliveryName'));
        localStorage.setItem("TotalQuantity", Store.get('TotalQuantity'));
        localStorage.setItem("SubTotal", Store.get('SubTotal'));


        localStorage.setItem("PaymentAmount", Store.get('PaymentAmount'));
        localStorage.setItem("PaymentMethod", Store.get('PaymentMethod'));
        localStorage.setItem("PaymentMethodCode", Store.get('PaymentMethodCode'));
        localStorage.setItem("CreatedBy", Store.get('CreatedBy'));
        localStorage.setItem("PaymentStatus", Store.get('PaymentStatus'));
        localStorage.setItem("PaymentNo", Store.get('PaymentNo'));


        if (Store.get('LoyaltyRewardType') == "Stamp Reward Loyalty Card") {
            globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint = 0.00;
            localStorage.setItem("MerchantPointEarn", "0.00");
            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MerchantPointEarnLbl').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Total Stamp Earn:</div>');
            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MerchantPointEarn').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + parseInt(Store.get('AyohaPointEarn')) + '</div>');
            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_AyohaPointEarn').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('AyohaPointEarn') + '</div>');

        }

        if(OrderStatus=="NewOrder"){
            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TitleHeaderTxt_AfterOrder').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:red;margin:17px 0px 0px 0px">Invoice</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:red;margin:-25px 0px 0px 0px">UNPAID</div>');
          //  Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_OrderOnly').setLabel('Cancel Order  ');
           
        } if (OrderStatus == "OrderPaid") {
            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TitleHeaderTxt_AfterOrder').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:green;margin:17px 0px 0px 0px">Invoice</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:green;margin:-25px 0px 0px 0px">PAID</div>');
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_OrderOnly').setHidden(true);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_MakePayment').setHidden(true);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_CancelOrder').setHidden(true);

            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_ViewReceipt').setHidden(false);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_ViewReceipt').setChecked(true);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_Re-Order').setHidden(false);


            Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_ConfirmPay').setHidden(true);
            Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_ViewReceipt').setHidden(false);
            Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentInfo').setHidden(false);

            document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentInfo').value = "Payment Method:" + Store.get('PaymentMethod') + "\nPayment Amount:(RM)" + Store.get('PaymentAmount') + "\nPayment Status:" + Store.get('PaymentStatus') + "\nPayment Date:" + Store.get('PaymentDate') + "\nInvoice No:" + Store.get('DisplayOrderNo')

            //Store.get('PaymentAmount')
            //Store.get('PaymentMethod')
            //Store.get('PaymentNoDisplay')
            //Store.get('PaymentStatus')
            //Store.get('DisplayOrderNo')
            
  


        } if (OrderStatus == "Order_Cancel") {
            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TitleHeaderTxt_AfterOrder').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:red;margin:17px 0px 0px 0px">Invoice </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:red;margin:-25px 0px 0px 0px">CANCEL</div>');
            //  Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_OrderOnly').setLabel('Cancel Order  ');
            Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_ConfirmPay').setHidden(true);
            Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_CarouselMasterOutter').setHidden(true);            
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_ViewReceipt').setHidden(true);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_OrderOnly').setHidden(true);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_MakePayment').setHidden(true);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_CancelOrder').setHidden(true);

            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_Re-Order').setHidden(false);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_DeleteOrder').setHidden(false);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_Re-Order').setChecked(false);
            Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_DeleteOrder').setHidden(false);
            

        }

    
     




    

        var containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_CancelOrder = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_CheckOut_CancelOrder]')[0];
        var containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_CancelOrder = containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_CancelOrder.element;
        containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_CancelOrder.on('tap',
          function (event, node, options, eOpts) {

              // FloatPanel_AyohaStore_Cart_Order_viaWhatsApp();
              FloatPanel_AyohaStore_CheckOut_CancelOrder();
          }
        );





        var containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_DeleteOrder = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_CheckOut_DeleteOrder]')[0];
        var containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_DeleteOrder = containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_DeleteOrder.element;
        containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_DeleteOrder.on('tap',
          function (event, node, options, eOpts) {

              // FloatPanel_AyohaStore_Cart_Order_viaWhatsApp();
              FloatPanel_AyohaStore_CheckOut_DeleteOrder();
          }
        );


        var containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_ConfirmPay = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_CheckOut_ConfirmPay]')[0];
        var containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_ConfirmPay = containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_ConfirmPay.element;
        containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_ConfirmPay.on('tap',
          function (event, node, options, eOpts) {

              Staging_FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert();
          }
        );


        var containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_OrderOnly = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_CheckOut_OrderOnly]')[0];
        var containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_OrderOnly = containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_OrderOnly.element;
        containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_OrderOnly.on('tap',
          function (event, node, options, eOpts) {

              // FloatPanel_AyohaStore_Cart_Order_viaWhatsApp();
              FloatPanel_AyohaStore_CheckOut_OrderOnly_ReOrder();
          }
        );

      


        var containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_ViewReceipt = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_CheckOut_ViewReceipt]')[0];
        var containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_ViewReceipt = containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_ViewReceipt.element;
        containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_ViewReceipt.on('tap',
          function (event, node, options, eOpts) {

              FloatPanel_AyohaStore_PaymentReceiptShow();

          }
        );

        FloatPanel_AyohaRewardVoucherList_DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoPaymentNoEntitledVoucherStatusStore('Voucher_Used');
      
       // FloatPanel_AyohaStore_CheckOut_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore();
       // Dashboard_LoadAyohaEwallet();
    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}







function FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo_OrderPlaced(ItemCartCode, MembershipCardCode, OrderNo, EnterpriseName, EnterpriseLogo) {
   
    Ext.getCmp('FloatPanel_AyohaStore_CheckOut_PurchasedItem_FromPurchaseHistory').setHidden(false);
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TitleHeaderTxt_AfterOrder').setHidden(false);
    Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_CancelOrder').setHidden(false);
    Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_OrderOnly').setHidden(true);
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_EnterpriseName').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + EnterpriseName + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_EnterpriseLogo').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:0px 0px 0px 0px"><img src="' + EnterpriseLogo + '" style="width:72px;height:72px;border-radius:50%"/></div>');
   // FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo_isUsed = "Y";
    globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode = MembershipCardCode;
    globalFloatPanel_AyohaStore_CheckOut_ItemCartCode = ItemCartCode;
    globalFloatPanel_AyohaStore_CheckOut_MembershipCardCode = MembershipCardCode;
    globalFloatPanel_AyohaStore_CheckOut_OrderNo = OrderNo;
    globalFloatPanel_AyohaStore_CheckOut_EnterpriseName = EnterpriseName;
    globalFloatPanel_AyohaStore_CheckOut_EnterpriseLogo = EnterpriseLogo;
    _DataStore_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore.getProxy().setExtraParam('ItemCartCode', ItemCartCode);
    _DataStore_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore.getProxy().setExtraParam('MembershipCardCode', MembershipCardCode);
    _DataStore_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore.getProxy().setExtraParam('OrderNo', OrderNo);
    _DataStore_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore.getProxy().setUrl(GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCode');
    _DataStore_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = parseInt(_DataStore_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore.getCount());


        if (count <= 0) {


            return;
        }

        var Store = _DataStore_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore.getAt(0);


        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TotalQuantity').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('TotalQuantity') + '</div>')
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_Delivery').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('DeliveryCharge') + '</div>')
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('MembershipDiscount') + '</div>')
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_DeliveryTypeName').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">(' + Store.get('DeliveryName') + ')</div>')
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('MembershipDiscount') + '</div>')

        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('VoucherDiscount') + '</div>')
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_SubTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('SubTotal') + '</div>')

        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('GrandTotal') + '</div>')

        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MerchantPointEarn').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('MerchantPointEarn') + '</div>')
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_AyohaPointEarn').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('AyohaPointEarn') + '</div>')







        //input - FloatPanel_AyohaStore_CheckOut_ShippingAddress
        document.getElementById('input-FloatPanel_AyohaStore_CheckOut_ShippingAddress').value = Store.get('DeliveryAddress_StreetName') + '\n' + Store.get('DeliveryAddress_Postcode') + ' ' + Store.get('DeliveryAddress_Town') + '\n' + Store.get('DeliveryAddress_StateCode') + '\n' + Store.get('DeliveryAddress_CountryCode');
        document.getElementById('input-FloatPanel_AyohaStore_CheckOut_NoteToSeller').value = Store.get('NoteToSeller');

        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_ContactPerson').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Contact Person:' + Store.get('ReferenceName') + '</div>');
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_PhoneNo').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Phone No:' + Store.get('ReferencePhoneNo') + '</div>');

        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_DeliveryChargeType').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_DeliveryTypeName').setHidden(false);

        var OrderStatus = Store.get('OrderStatus');
        globalFloatPanel_AyohaStore_CheckOut_OrderStatus = OrderStatus;
        globalFloatPanel_AyohaStore_CheckOut_OrderNo = Store.get('OrderNo');
        globalFloatPanel_AyohaStore_CheckOut_GrandTotal = Store.get('GrandTotal');
        globalFloatPanel_AyohaStore_Cart_TotalSumPrice = Store.get('SubTotal');
        globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge = Store.get('DeliveryCharge');

        localStorage.setItem("ItemCartCode", Store.get('ItemCartCode'));

        localStorage.setItem("DeliveryChargeCode", Store.get('DeliveryChargeCode'));
        localStorage.setItem("DeliveryCharge", Store.get('DeliveryCharge'));
        localStorage.setItem("MembershipDiscountCampaignCode", Store.get('MembershipDiscountCampaignCode'));
        localStorage.setItem("MembershipDiscount", Store.get('MembershipDiscount'));



        localStorage.setItem("VoucherCampaignCode", Store.get('VoucherCampaignCode'));
        localStorage.setItem("VoucherDiscount", Store.get('VoucherDiscount'));
        localStorage.setItem("GrandTotal", Store.get('GrandTotal'));
        localStorage.setItem("DeliveryAddress_StreetName", Store.get('DeliveryAddress_StreetName'));


        localStorage.setItem("DeliveryAddress_Town", Store.get('DeliveryAddress_Town'));
        localStorage.setItem("DeliveryAddress_Postcode", Store.get('DeliveryAddress_Postcode'));
        localStorage.setItem("DeliveryAddress_StateCode", Store.get('DeliveryAddress_StateCode'));
        localStorage.setItem("DeliveryAddress_CountryCode", Store.get('DeliveryAddress_CountryCode'));

        localStorage.setItem("ReferenceName", Store.get('ReferenceName'));
        localStorage.setItem("ReferencePhoneNo", Store.get('ReferencePhoneNo'));
        localStorage.setItem("NoteToSeller", Store.get('NoteToSeller'));
        localStorage.setItem("MerchantPointEarn", Store.get('MerchantPointEarn'));

        localStorage.setItem("AyohaPointEarn", Store.get('AyohaPointEarn'));
        localStorage.setItem("EnterpriseAccNo", Store.get('EnterpriseAccNo'));
        localStorage.setItem("SubscriberAccNo", Store.get('SubscriberAccNo'));
        localStorage.setItem("MembershipCardCode", Store.get('MembershipCardCode'));

        localStorage.setItem("OrderStatus", Store.get('OrderStatus'));
        localStorage.setItem("DeliveryName", Store.get('DeliveryName'));
        localStorage.setItem("TotalQuantity", Store.get('TotalQuantity'));
        localStorage.setItem("SubTotal", Store.get('SubTotal'));


        localStorage.setItem("PaymentAmount", Store.get('PaymentAmount'));
        localStorage.setItem("PaymentMethod", Store.get('PaymentMethod'));
        localStorage.setItem("PaymentMethodCode", Store.get('PaymentMethodCode'));
        localStorage.setItem("CreatedBy", Store.get('CreatedBy'));
        localStorage.setItem("PaymentStatus", Store.get('PaymentStatus'));
        localStorage.setItem("PaymentNo", Store.get('PaymentNo'));


        if (Store.get('LoyaltyRewardType') == "Stamp Reward Loyalty Card") {
            globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint = 0.00;
            localStorage.setItem("MerchantPointEarn", "0.00");
            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MerchantPointEarnLbl').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Total Stamp Earn:</div>');
            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MerchantPointEarn').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + parseInt(Store.get('AyohaPointEarn')) + '</div>');
            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_AyohaPointEarn').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('AyohaPointEarn') + '</div>');

        }

        if (OrderStatus == "NewOrder") {
            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TitleHeaderTxt_AfterOrder').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:red;margin:17px 0px 0px 0px">Invoice</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:red;margin:-25px 0px 0px 0px">UNPAID</div>');
            //  Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_OrderOnly').setLabel('Cancel Order  ');

        } if (OrderStatus == "OrderPaid") {
            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TitleHeaderTxt_AfterOrder').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:green;margin:17px 0px 0px 0px">Invoice</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:green;margin:-25px 0px 0px 0px">PAID</div>');
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_OrderOnly').setHidden(true);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_MakePayment').setHidden(true);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_CancelOrder').setHidden(true);

            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_ViewReceipt').setHidden(false);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_ViewReceipt').setChecked(true);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_Re-Order').setHidden(false);


            Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_ConfirmPay').setHidden(true);
            Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_ViewReceipt').setHidden(false);
            Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentInfo').setHidden(false);

            document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentInfo').value = "Payment Method:" + Store.get('PaymentMethod') + "\nPayment Amount:(RM)" + Store.get('PaymentAmount') + "\nPayment Status:" + Store.get('PaymentStatus') + "\nPayment Date:" + Store.get('PaymentDate') + "\nInvoice No:" + Store.get('DisplayOrderNo')

            //Store.get('PaymentAmount')
            //Store.get('PaymentMethod')
            //Store.get('PaymentNoDisplay')
            //Store.get('PaymentStatus')
            //Store.get('DisplayOrderNo')




        } if (OrderStatus == "Order_Cancel") {
            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_TitleHeaderTxt_AfterOrder').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:red;margin:17px 0px 0px 0px">Invoice </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:red;margin:-25px 0px 0px 0px">CANCEL</div>');
            //  Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_OrderOnly').setLabel('Cancel Order  ');
            Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_ConfirmPay').setHidden(true);
            Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_CarouselMasterOutter').setHidden(true);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_ViewReceipt').setHidden(true);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_OrderOnly').setHidden(true);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_MakePayment').setHidden(true);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_CancelOrder').setHidden(true);

            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_Re-Order').setHidden(false);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_DeleteOrder').setHidden(false);
            Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_Re-Order').setChecked(false);
            Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_DeleteOrder').setHidden(false);


        }


        var containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_CancelOrder = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_CheckOut_CancelOrder]')[0];
        var containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_CancelOrder = containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_CancelOrder.element;
        containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_CancelOrder.on('tap',
          function (event, node, options, eOpts) {

              // FloatPanel_AyohaStore_Cart_Order_viaWhatsApp();
              FloatPanel_AyohaStore_CheckOut_CancelOrder();
          }
        );





        var containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_DeleteOrder = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_CheckOut_DeleteOrder]')[0];
        var containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_DeleteOrder = containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_DeleteOrder.element;
        containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_DeleteOrder.on('tap',
          function (event, node, options, eOpts) {

              // FloatPanel_AyohaStore_Cart_Order_viaWhatsApp();
              FloatPanel_AyohaStore_CheckOut_DeleteOrder();
          }
        );


        var containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_ConfirmPay = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_CheckOut_ConfirmPay]')[0];
        var containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_ConfirmPay = containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_ConfirmPay.element;
        containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_ConfirmPay.on('tap',
          function (event, node, options, eOpts) {

              Staging_FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert();
          }
        );


        var containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_OrderOnly = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_CheckOut_OrderOnly]')[0];
        var containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_OrderOnly = containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_OrderOnly.element;
        containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_OrderOnly.on('tap',
          function (event, node, options, eOpts) {

              // FloatPanel_AyohaStore_Cart_Order_viaWhatsApp();
              FloatPanel_AyohaStore_CheckOut_OrderOnly_ReOrder();
          }
        );




        var containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_ViewReceipt = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_CheckOut_ViewReceipt]')[0];
        var containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_ViewReceipt = containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_ViewReceipt.element;
        containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_ViewReceipt.on('tap',
          function (event, node, options, eOpts) {

              FloatPanel_AyohaStore_PaymentReceiptShow();

          }
        );

        FloatPanel_AyohaRewardVoucherList_DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoPaymentNoEntitledVoucherStatusStore('Voucher_Used');

        // FloatPanel_AyohaStore_CheckOut_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore();
        // Dashboard_LoadAyohaEwallet();
    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}















function FloatPanel_AyohaStore_CheckOut_ShippingAddress_ReEditAddress() {

    var val = document.getElementById('input-FloatPanel_AyohaStore_CheckOut_ShippingAddress').value;
    if (val) {
        FloatPanel_AyohaStore_DeliveryAddressShow_FromCheckOut();
    }
    
}


function FloatPanel_AyohaStore_CheckOut_CancelOrder() {
    event.preventDefault();
    Swal.fire({
        title: 'Are you sure to cancel this order?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'purple',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    }).then(function (result) {
        if (result.isConfirmed) {
            var task = Ext.create('Ext.util.DelayedTask', function () {
              
                var objn = {
                    "OrderNo": globalFloatPanel_AyohaStore_CheckOut_OrderNo,
                    "SubscriberAccNo": GetCurrAyohaUserAccountNo(),                   
                    "OrderStatus": "Order_Cancel",
                    "OrderLogOrderStatus": "NA",
                    "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
                    
                };
                var _value = Ext.Ajax.request({

                    type: "POST",

                    url: GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderUpdateOrderStatus',

                    dataType: "json",
                    data: JSON.stringify(objn),
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    },

                    success: function (result, request) {

                        //console.log(result.responseText);


                        data = Ext.decode(result.responseText.trim());

                        if (data.success == "true") {
                           // FloatPanel_AyohaStore_CartHide();
                            FloatPanel_AyohaStore_CheckOutHide();
                            FloatPanel_AyohaStore_OrderHistory_OrderCancelTitle_Active();
                            
                        }
                        else {

                            swalFireFail("Fail!");
                            
                            Ext.Viewport.unmask();
                            LoadingPanelHide();
                        }
                        Ext.Viewport.unmask();
                        LoadingPanelHide();

                    },

                    failure: function (result, request) {
                        swalFireFail("Fail!");
                        Ext.Viewport.unmask();
                       
                    }

                });

                Ext.Viewport.unmask();
            });
            task.delay(10);
        }
    });
}




function FloatPanel_AyohaStore_CheckOut_ConfirmPay_Validate() {
    globalFloatPanel_AyohaeWallet_Passcode_CheckingTaggingModule = "FloatPanel_AyohaStore_CheckOut_ConfirmPay";
    var curreWalletBal = parseFloat(globalDashboardeWalletCurrentBalance);
    document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentAmountCaptured').value = globalFloatPanel_AyohaStore_CheckOut_GrandTotal;
    var PaymentMethod = document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentMethod').value;
   

    if (globalFloatPanel_AyohaStore_DeliveryChargeList_ChargeTypeCode) {

    } else {
        swalFireDynamicIconWithMessage("resources/icons/DeliveryTypeRed.png", "Delivery Type Is Required !", "red", "red");
        return
    }


    if (PaymentMethod) {

    } else {
        swalFireFail("Payment Method Required !");
        return;
    }

//    var floatglobalFloatPanel_AyohaStore_CheckOut_GrandTotal = parseFloat(globalFloatPanel_AyohaStore_CheckOut_GrandTotal) - parseFloat(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher);
   
    if (globalFloatPanel_AyohaStore_CheckOut_GrandTotal > curreWalletBal) {
        swalFireFail("Not enough eWallet balance !");
        return;
    }

  

    //var floatglobalDashboardDebitLimitPerDay = parseFloat(globalDashboardDebitLimitPerDay);
    //if (floatglobalFloatPanel_AyohaStore_CheckOut_GrandTotal > floatglobalDashboardDebitLimitPerDay) {

       
    //    swalFireFail("Exceed Limit Ayoha eWallet !");
    //    return;
    //}
    var floatglobalDashboardDebitLimitPerDay = parseFloat(globalDashboardDebitLimitPerDay);

    if (floatglobalDashboardDebitLimitPerDay > 0) {
        if (globalFloatPanel_AyohaStore_Cart_GrandTotal > floatglobalDashboardDebitLimitPerDay) {

            swalFireFail("Exceed Limit Ayoha eWallet !");
            return;
        }
    }

    FloatPanel_AyohaeWallet_PasscodeShow();
 
}


function FloatPanel_AyohaStore_CheckOut_ConfirmPay() {
  
  
   


    var internalglobalFloatPanel_AyohaStore_CheckOut_VoucherCode;
    var ModifiedVocherCode;

    if (arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length > 0) {
        for (i = 0; i < arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length; i++) {
            internalglobalFloatPanel_AyohaStore_CheckOut_VoucherCode += arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode[i] + ","
        }
        ModifiedVocherCode = internalglobalFloatPanel_AyohaStore_CheckOut_VoucherCode.replace("undefined", "");
    } else {
        ModifiedVocherCode = "NoVoucherCode,";
    }

    


    //console.log(ModifiedVocherCode.slice(0, -1));
    //console.log(ModifiedVocherCode.slice(arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length));

   
    var PaymentMethod = document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentMethod').value;
    var PaymentAmount = parseFloat(document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentAmountCaptured').value);

    var PaymentStatus;

    if (PaymentAmount == globalFloatPanel_AyohaStore_CheckOut_GrandTotal) {
        PaymentStatus = "FullPaid";
    }
    if (PaymentAmount < globalFloatPanel_AyohaStore_CheckOut_GrandTotal) {
        PaymentStatus = "PartialyPaid";
    }
    if (PaymentAmount > globalFloatPanel_AyohaStore_CheckOut_GrandTotal) {
        PaymentStatus = "CreditPaid";
    }
    var Note = document.getElementById('input-FloatPanel_AyohaStore_CheckOut_NoteToSeller').value;


    if (Note) {
        Note = Note;
    } else {
        Note = "NA";
    }

    LoadingPanelShow("resources/icons/ewalletprocess.gif", "Payment Process...")
    var task = Ext.create('Ext.util.DelayedTask', function () {
        var objn = {
            "OrderNo": globalFloatPanel_AyohaStore_CheckOut_OrderNo,
            "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "GrandTotal": globalFloatPanel_AyohaStore_CheckOut_GrandTotal,
            "PaymentAmount": PaymentAmount,
            "PaymentMethod":PaymentMethod,
            "PaymentMethodCode": globalFloatPanel_AyohaStore_PaymentMethod_Code,
            "CreatedBy": GetCurrAyohaUserAccountNo(),
            "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
            "PaymentStatus": PaymentStatus,
            "NoteToSeller": Note,
            "MerchantPoint": globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint,
            "AyohaPoint": globalFloatPanel_AyohaStore_Cart_TotalAyohaPoint,
            "VoucherCode": ModifiedVocherCode.slice(0, -1),
            "VoucherCount": arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length,
            "VoucherDiscount": globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher,
        };
        console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaStorePayment/AyohaStorePaymentInsert',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    FloatPanel_AyohaStore_CheckOut_PlayAyohaPointSound();
                    FloatPanel_AyohaStore_CartHide();
                    FloatPanel_AyohaStore_CheckOutHide();
                    FloatPanel_AyohaStore_SaleItemDetailHide();
                    FloatPanel_AyohaStoreHide();
                    FloatPanel_AyohaStore_OrderHistoryHide();
                    // swalFireSuccesDynamicIconWithMessage("resources/icons/orderplacedAnim.gif", "Order has been submit successfully!");
                   // swalFireDynamicIconWithMessage("resources/icons/paymentSuccess.gif", "Payment has been process successfully!", "black", "#9932cc");
                    Dashboard_LoadAyohaEwallet();
                    FloatPanel_AyohaStore_AyohaPointCollectedAnimShow();
                    FloatPanel_AyohaeWalletHide();
                    FloatPanel_OrderHistoryHide();
                    FloatPanel_AyohaReward_PointTransactionsHide();
                }
                else {

                    swalFireFail("Fail!-->" + result.responseText.trim());
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();
                LoadingPanelHide();

            },

            failure: function (result, request) {
                swalFireFail("Fail!." + result.responseText.trim());
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });
        LoadingPanelHide();
        Ext.Viewport.unmask();
    });
    task.delay(1000);

}


function FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert_ReOrder_MakePayment_Validate() {

  


    globalFloatPanel_AyohaeWallet_Passcode_CheckingTaggingModule = "FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert_ReOrder_MakePayment";
    var Note = document.getElementById('input-FloatPanel_AyohaStore_CheckOut_NoteToSeller').value;
    var add = document.getElementById('input-FloatPanel_AyohaStore_CheckOut_ShippingAddress').value;




    var curreWalletBal = parseFloat(globalDashboardeWalletCurrentBalance);
    document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentAmountCaptured').value = globalFloatPanel_AyohaStore_CheckOut_GrandTotal;
    var PaymentMethod = document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentMethod').value;


    var PaymentAmount = parseFloat(document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentAmountCaptured').value);

    var PaymentStatus;

    if (PaymentAmount == globalFloatPanel_AyohaStore_CheckOut_GrandTotal) {
        PaymentStatus = "FullPaid";
    }
    if (PaymentAmount < globalFloatPanel_AyohaStore_CheckOut_GrandTotal) {
        PaymentStatus = "PartialyPaid";
    }
    if (PaymentAmount > globalFloatPanel_AyohaStore_CheckOut_GrandTotal) {
        PaymentStatus = "CreditPaid";
    }
    if (Note) {
        Note = Note;
    } else {
        Note = "NA";
    }



    if (globalFloatPanel_AyohaStore_DeliveryChargeList_ChargeTypeCode) {

    } else {
        swalFireDynamicIconWithMessage("resources/icons/DeliveryTypeRed.png", "Delivery Type Is Required !", "red", "red");
        return
    }


    if (PaymentMethod) {

    } else {
        swalFireFail("Payment Method Required !");
        return;
    }
   // var floatglobalFloatPanel_AyohaStore_CheckOut_GrandTotal = parseFloat(globalFloatPanel_AyohaStore_CheckOut_GrandTotal) - parseFloat(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher);




    if (globalFloatPanel_AyohaStore_CheckOut_GrandTotal > curreWalletBal) {
        swalFireFail("Not enough eWallet balance !");
        return;
    }





    var floatglobalDashboardDebitLimitPerDay = parseFloat(globalDashboardDebitLimitPerDay);
    //if (globalFloatPanel_AyohaStore_CheckOut_GrandTotal > floatglobalDashboardDebitLimitPerDay) {
       
    //    swalFireFail("Exceed Limit Ayoha eWallet !");
    //    return;
    //}

    if (floatglobalDashboardDebitLimitPerDay > 0) {
        if (globalFloatPanel_AyohaStore_Cart_GrandTotal > floatglobalDashboardDebitLimitPerDay) {

            swalFireFail("Exceed Limit Ayoha eWallet !");
            return;
        }
    }
    


    if (add) {

    } else {
        swalFireFail("Shipping Address required!");
        return;
    }
    if (Note) {
        Note = Note;

    } else {
        Note = "NA";
    }



    //console.log(floatglobalFloatPanel_AyohaStore_CheckOut_GrandTotal)
    //console.log(globalFloatPanel_AyohaStore_CheckOut_GrandTotal)
    //console.log(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher)

    //return;


    FloatPanel_AyohaeWallet_PasscodeShow();
}


function FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert_ReOrder_MakePayment() {
    var Note = document.getElementById('input-FloatPanel_AyohaStore_CheckOut_NoteToSeller').value;
    var add = document.getElementById('input-FloatPanel_AyohaStore_CheckOut_ShippingAddress').value;


    

    var curreWalletBal = parseFloat(globalDashboardeWalletCurrentBalance);
    document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentAmountCaptured').value = globalFloatPanel_AyohaStore_CheckOut_GrandTotal;
    var PaymentMethod = document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentMethod').value;


    var PaymentAmount = parseFloat(document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentAmountCaptured').value);

    var PaymentStatus;

    if (PaymentAmount == globalFloatPanel_AyohaStore_CheckOut_GrandTotal) {
        PaymentStatus = "FullPaid";
    }
    if (PaymentAmount < globalFloatPanel_AyohaStore_CheckOut_GrandTotal) {
        PaymentStatus = "PartialyPaid";
    }
    if (PaymentAmount > globalFloatPanel_AyohaStore_CheckOut_GrandTotal) {
        PaymentStatus = "CreditPaid";
    }
    if (Note) {
        Note = Note;
    } else {
        Note = "NA";
    }



    if (PaymentMethod) {

    } else {
        swalFireFail("Payment Method Required !");
        return;
    }
   // var floatglobalFloatPanel_AyohaStore_CheckOut_GrandTotal = parseFloat(globalFloatPanel_AyohaStore_CheckOut_GrandTotal) - parseFloat(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher);

    if (globalFloatPanel_AyohaStore_CheckOut_GrandTotal > curreWalletBal) {
        swalFireFail("Not enough eWallet balance !");
        return;
    }




 
    var floatglobalDashboardDebitLimitPerDay = parseFloat(globalDashboardDebitLimitPerDay);
    //if (floatglobalFloatPanel_AyohaStore_CheckOut_GrandTotal > floatglobalDashboardDebitLimitPerDay) {
       
    //    swalFireFail("Exceed Limit Ayoha eWallet !");
    //    return;
    //}

    if (floatglobalDashboardDebitLimitPerDay > 0) {
        if (globalFloatPanel_AyohaStore_Cart_GrandTotal > floatglobalDashboardDebitLimitPerDay) {

            swalFireFail("Exceed Limit Ayoha eWallet !");
            return;
        }
    }

    var internalglobalFloatPanel_AyohaStore_CheckOut_VoucherCode;
    var ModifiedVocherCode;
    var taggingIsUsedVoucher = "N";



  

    if (arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length > 0) {
        taggingIsUsedVoucher = "Y";
        for (i = 0; i < arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length; i++) {
            internalglobalFloatPanel_AyohaStore_CheckOut_VoucherCode += arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode[i] + ","
        }
        ModifiedVocherCode = internalglobalFloatPanel_AyohaStore_CheckOut_VoucherCode.replace("undefined", "");
    } else {
        ModifiedVocherCode = "NoVoucherCode,";
        taggingIsUsedVoucher = "N";
    }






    if (add) {

    } else {
        swalFireFail("Shipping Address required!");
        return;
    }
    if (Note) {
        Note = Note;

    } else {
        Note = "NA";
    }
   
   


    var ModifiedgrandTotal;

    if (taggingIsUsedVoucher == "Y") {
        ModifiedgrandTotal = parseFloat(globalFloatPanel_AyohaStore_Cart_GrandTotal);
    } else {
        ModifiedgrandTotal = parseFloat(localStorage.getItem("GrandTotal"));
    }





    LoadingPanelShow("resources/icons/ewalletprocess.gif", "Payment Process...");
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "ItemCartCode": localStorage.getItem("ItemCartCode"),
            "DeliveryChargeCode": localStorage.getItem("DeliveryChargeCode"),
            "DeliveryCharge": localStorage.getItem("DeliveryCharge"),
            "MembershipDiscountCampaignCode": "NA",
            "MembershipDiscount": 0.00,
            "VoucherCampaignCode": "NA",
            "VoucherDiscount": globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher,
            "GrandTotal": ModifiedgrandTotal.toFixed(2),
            "DeliveryAddress_StreetName": localStorage.getItem("DeliveryAddress_StreetName"),
            "DeliveryAddress_Town": localStorage.getItem("DeliveryAddress_Town"),
            "DeliveryAddress_Postcode": localStorage.getItem("DeliveryAddress_Postcode"),
            "DeliveryAddress_StateCode": localStorage.getItem("DeliveryAddress_StateCode"),
            "DeliveryAddress_CountryCode": localStorage.getItem("DeliveryAddress_CountryCode"),
            "ReferenceName": localStorage.getItem("ReferenceName"),
            "ReferencePhoneNo": localStorage.getItem("ReferencePhoneNo"),
            "NoteToSeller": Note,
            "MerchantPointEarn": localStorage.getItem("MerchantPointEarn"),
            "AyohaPointEarn": localStorage.getItem("AyohaPointEarn"),
            "EnterpriseAccNo": localStorage.getItem("EnterpriseAccNo"),
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "MembershipCardCode": localStorage.getItem("MembershipCardCode"),
            "DeliveryName": localStorage.getItem("DeliveryName"),
            "TotalQuantity": localStorage.getItem("TotalQuantity"),
            "SubTotal": localStorage.getItem("SubTotal"),
            "PaymentAmount": ModifiedgrandTotal.toFixed(2),
            "PaymentMethod": localStorage.getItem("PaymentMethod"),
            "PaymentMethodCode": localStorage.getItem("PaymentMethodCode"),
            "CreatedBy": GetCurrAyohaUserAccountNo(),
            "PaymentStatus": localStorage.getItem("PaymentStatus"),
            "VoucherCount": arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length,
            "VoucherCode": ModifiedVocherCode.slice(0, -1),
        };

      

        var _value = Ext.Ajax.request({

            type: "POST",
            url: GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert', 
            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    FloatPanel_AyohaStore_CheckOut_PlayAyohaPointSound();
                    FloatPanel_AyohaStore_AyohaPointCollectedAnimShow();                   
                    FloatPanel_AyohaStore_CartHide();
                    FloatPanel_AyohaStore_CheckOutHide();
                    FloatPanel_AyohaStore_SaleItemDetailHide();
                    FloatPanel_AyohaStoreHide();
                    FloatPanel_AyohaStore_OrderHistoryHide();
                    // swalFireSuccesDynamicIconWithMessage("resources/icons/orderplacedAnim.gif", "Order has been submit successfully!");
                   // swalFireDynamicIconWithMessage("resources/icons/paymentSuccess.gif", "Payment has been process successfully!", "black", "#9932cc");
                    globalFloatPanel_AyohaStore_CartSumItemSumPrice = 0.00;
                    globalFloatPanel_AyohaStore_CartTotalItemQuantity = 0;
                    globalFloatPanel_AyohaStore_Cart_ItemCartCode = "NewItemCartCode";

                    if (isFloatPanel_AyohaStoreOpen == "Y") {
                        Ext.getCmp('htmlFloatPanel_AyohaStore_CartAmount').setHtml('<div style="background: transparent;height:30px;font-size: 13px;font-weight:bold;color:black;text-align:center;" >RM00.00</div>');
                        Ext.getCmp('htmlFloatPanel_AyohaStore_MyCartCountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>0</b></div>');
                    }
                   
                    Dashboard_LoadAyohaEwallet();
                  
                    FloatPanel_AyohaeWalletHide();
                    FloatPanel_RewardStore_SearchResultHide();
                    FloatPanel_RewardStoreHide();
                    FloatPanel_AyohaReward_PointTransactionsHide();
                    FloatPanel_OrderHistoryHide();
                    FloatPanel_OrderCartHide();                    
                    Dashboard_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore();
                    var task = Ext.create('Ext.util.DelayedTask', function () {
                        DashboardAyohaUserMainStore();
                    });
                    task.delay(1000);
                }
                else {

                    swalFireFail("Fail!");
                    globalFloatPanel_AyohaStore_CartSumItemSumPrice = 0.00;
                    globalFloatPanel_AyohaStore_CartTotalItemQuantity = 0;
                    globalFloatPanel_AyohaStore_Cart_ItemCartCode = "NewItemCartCode";
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();
                LoadingPanelHide();

            },

            failure: function (result, request) {
                swalFireFail("Fail!");
                globalFloatPanel_AyohaStore_CartSumItemSumPrice = 0.00;
                globalFloatPanel_AyohaStore_CartTotalItemQuantity = 0;
                globalFloatPanel_AyohaStore_Cart_ItemCartCode = "NewItemCartCode";
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });

        Ext.Viewport.unmask();
    });
    task.delay(1000);
}

function FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert_Validate() {
    globalFloatPanel_AyohaeWallet_Passcode_CheckingTaggingModule = "FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert";
    var Note = document.getElementById('input-FloatPanel_AyohaStore_CheckOut_NoteToSeller').value;
    var add = document.getElementById('input-FloatPanel_AyohaStore_CheckOut_ShippingAddress').value;






    var curreWalletBal = parseFloat(globalDashboardeWalletCurrentBalance);
    document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentAmountCaptured').value = globalFloatPanel_AyohaStore_CheckOut_GrandTotal;
    var PaymentMethod = document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentMethod').value;


    var PaymentAmount = parseFloat(document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentAmountCaptured').value);

    var PaymentStatus;

    if (PaymentAmount == globalFloatPanel_AyohaStore_CheckOut_GrandTotal) {
        PaymentStatus = "FullPaid";
    }
    if (PaymentAmount < globalFloatPanel_AyohaStore_CheckOut_GrandTotal) {
        PaymentStatus = "PartialyPaid";
    }
    if (PaymentAmount > globalFloatPanel_AyohaStore_CheckOut_GrandTotal) {
        PaymentStatus = "CreditPaid";
    }
    if (Note) {
        Note = Note;
    } else {
        Note = "NA";
    }

    if (globalFloatPanel_AyohaStore_DeliveryChargeList_ChargeTypeCode) {

    } else {
        swalFireDynamicIconWithMessage("resources/icons/DeliveryTypeRed.png", "Delivery Type Is Required !", "red", "red");
        return
    }

    if (PaymentMethod) {

    } else {
        swalFireFail("Payment Method Required !");
        return;
    }

    //if (globalFloatPanel_AyohaStore_CheckOut_GrandTotal > curreWalletBal) {
    //    swalFireFail("Not enough eWallet balance !");
    //    return;
    //}
    var floatglobalFloatPanel_AyohaStore_CheckOut_GrandTotal = parseFloat(globalFloatPanel_AyohaStore_CheckOut_GrandTotal) - parseFloat(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher);

   
    if (globalFloatPanel_AyohaStore_CheckOut_GrandTotal > curreWalletBal) {
        swalFireFail("Not enough eWallet balance !");
        return;
    }




    //  var floatglobalFloatPanel_AyohaStore_CheckOut_GrandTotal = parseFloat(globalFloatPanel_AyohaStore_CheckOut_GrandTotal);
    var floatglobalDashboardDebitLimitPerDay = parseFloat(globalDashboardDebitLimitPerDay);
    //if (floatglobalFloatPanel_AyohaStore_CheckOut_GrandTotal > floatglobalDashboardDebitLimitPerDay) {
      
    //    swalFireFail("Exceed Limit Ayoha eWallet !");
    //    return;
    //}


    if (floatglobalDashboardDebitLimitPerDay > 0) {
        if (globalFloatPanel_AyohaStore_Cart_GrandTotal > floatglobalDashboardDebitLimitPerDay) {

            swalFireFail("Exceed Limit Ayoha eWallet !");
            return;
        }
    }



    if (add) {

    } else {
        swalFireFail("Shipping Address required!");
        return;
    }
    if (Note) {
        Note = Note;

    } else {
        Note = "NA";
    }


    FloatPanel_AyohaeWallet_PasscodeShow();
}


function FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert() {
    var Note = document.getElementById('input-FloatPanel_AyohaStore_CheckOut_NoteToSeller').value;
    var add = document.getElementById('input-FloatPanel_AyohaStore_CheckOut_ShippingAddress').value;



    


    var curreWalletBal = parseFloat(globalDashboardeWalletCurrentBalance);
    //document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentAmountCaptured').value = globalFloatPanel_AyohaStore_CheckOut_GrandTotal;
    document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentAmountCaptured').value = globalFloatPanel_AyohaStore_Cart_GrandTotal;
    var PaymentMethod = document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentMethod').value;

   
    var PaymentAmount = parseFloat(document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentAmountCaptured').value);

    var PaymentStatus;

    //if (PaymentAmount == globalFloatPanel_AyohaStore_CheckOut_GrandTotal) {
    //    PaymentStatus = "FullPaid";
    //}
    //if (PaymentAmount < globalFloatPanel_AyohaStore_CheckOut_GrandTotal) {
    //    PaymentStatus = "PartialyPaid";
    //}
    //if (PaymentAmount > globalFloatPanel_AyohaStore_CheckOut_GrandTotal) {
    //    PaymentStatus = "CreditPaid";
    //}


    if (PaymentAmount == globalFloatPanel_AyohaStore_Cart_GrandTotal) {
        PaymentStatus = "FullPaid";
    }
    if (PaymentAmount < globalFloatPanel_AyohaStore_Cart_GrandTotal) {
        PaymentStatus = "PartialyPaid";
    }
    if (PaymentAmount > globalFloatPanel_AyohaStore_Cart_GrandTotal) {
        PaymentStatus = "CreditPaid";
    }
    if (Note) {
        Note = Note;
    } else {
        Note = "NA";
    }



    if (PaymentMethod) {

    } else {
        swalFireFail("Payment Method Required !");
        return;
    }

   
    //////var floatglobalFloatPanel_AyohaStore_CheckOut_GrandTotal = parseFloat(globalFloatPanel_AyohaStore_CheckOut_GrandTotal) - parseFloat(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher)
    var floatglobalFloatPanel_AyohaStore_CheckOut_GrandTotal = parseFloat(globalFloatPanel_AyohaStore_Cart_GrandTotal) - parseFloat(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher)

    console.log(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher)
    console.log(globalFloatPanel_AyohaStore_Cart_GrandTotal)
    console.log(floatglobalFloatPanel_AyohaStore_CheckOut_GrandTotal)
   

    if (globalFloatPanel_AyohaStore_Cart_GrandTotal > curreWalletBal) {
        swalFireFail("Not enough eWallet balance !");
        return;
    }


    

  //  var floatglobalFloatPanel_AyohaStore_CheckOut_GrandTotal = parseFloat(globalFloatPanel_AyohaStore_CheckOut_GrandTotal);
    var floatglobalDashboardDebitLimitPerDay = parseFloat(globalDashboardDebitLimitPerDay);

    if (floatglobalDashboardDebitLimitPerDay > 0) {
        if (globalFloatPanel_AyohaStore_Cart_GrandTotal > floatglobalDashboardDebitLimitPerDay) {

            swalFireFail("Exceed Limit Ayoha eWallet !");
            return;
        }
}
    



    if (add) {

    } else {
        swalFireFail("Shipping Address required!");
        return;
    }
    if (Note) {
        Note = Note;

    } else {
        Note = "NA";
    }






    var internalglobalFloatPanel_AyohaStore_CheckOut_VoucherCode;
    var ModifiedVocherCode;

    if (arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length > 0) {
        for (i = 0; i < arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length; i++) {
            internalglobalFloatPanel_AyohaStore_CheckOut_VoucherCode += arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode[i] + ","
        }
        ModifiedVocherCode = internalglobalFloatPanel_AyohaStore_CheckOut_VoucherCode.replace("undefined", "");
    } else {
        ModifiedVocherCode = "NoVoucherCode,";
    }






    //console.log(PaymentAmount)
    //console.log(globalFloatPanel_AyohaStore_CheckOut_GrandTotal)
    //console.log(globalFloatPanel_AyohaStore_Cart_GrandTotal)
    //console.log(floatglobalFloatPanel_AyohaStore_CheckOut_GrandTotal);
    ////return;
   


    //LoadingPanelShow("resources/icons/sendingAnim.gif", "Submit Order...")
    LoadingPanelShow("resources/icons/ewalletprocess.gif", "Payment Process...");
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "ItemCartCode": globalFloatPanel_AyohaStore_Cart_ItemCartCode,
            "DeliveryChargeCode": globalFloatPanel_AyohaStore_DeliveryChargeList_ChargeTypeCode,
            "DeliveryCharge": globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge,
            "MembershipDiscountCampaignCode": "NA",
            "MembershipDiscount": 0.00,
            "VoucherCampaignCode": "NA",
            "VoucherDiscount": globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher,
            "GrandTotal": globalFloatPanel_AyohaStore_Cart_GrandTotal,
            "DeliveryAddress_StreetName": globalFloatPanel_AyohaStore_DeliveryAddress_StreetName,
            "DeliveryAddress_Town": globalFloatPanel_AyohaStore_DeliveryAddress_TownCity,
            "DeliveryAddress_Postcode": globalFloatPanel_AyohaStore_DeliveryAddress_PostCode,
            "DeliveryAddress_StateCode": globalFloatPanel_AyohaStore_DeliveryAddress_State,
            "DeliveryAddress_CountryCode": globalFloatPanel_AyohaStore_DeliveryAddress_Country,
            "ReferenceName": globalFloatPanel_AyohaStore_DeliveryAddress_ContactPerson,
            "ReferencePhoneNo": globalFloatPanel_AyohaStore_DeliveryAddress_PhoneNo,
            "NoteToSeller": Note,
            "MerchantPointEarn": globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint,
            "AyohaPointEarn": globalFloatPanel_AyohaStore_Cart_TotalAyohaPoint,
            "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
            "DeliveryName": globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryName,
            "TotalQuantity": globalFloatPanel_AyohaStore_Cart_TotalItemQuantity,
            "SubTotal": globalFloatPanel_AyohaStore_Cart_TotalSumPrice,
            "PaymentAmount": PaymentAmount,
            "PaymentMethod": PaymentMethod,
            "PaymentMethodCode": globalFloatPanel_AyohaStore_PaymentMethod_Code,
            "CreatedBy": GetCurrAyohaUserAccountNo(),
            "PaymentStatus": PaymentStatus,
            "VoucherCount": arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length,
            "VoucherCode": ModifiedVocherCode.slice(0, -1),
        };
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    FloatPanel_AyohaStore_CheckOut_PlayAyohaPointSound();
                    FloatPanel_AyohaStore_AyohaPointCollectedAnimShow();                   
                    FloatPanel_AyohaStore_CartHide();
                    FloatPanel_AyohaStore_CheckOutHide();
                    FloatPanel_AyohaStore_SaleItemDetailHide();                   
                    FloatPanel_AyohaStore_OrderHistoryHide();
                    FloatPanel_AyohaStoreHide();
                    // swalFireSuccesDynamicIconWithMessage("resources/icons/orderplacedAnim.gif", "Order has been submit successfully!");
                   // swalFireDynamicIconWithMessage("resources/icons/paymentSuccess.gif", "Payment has been process successfully!", "black", "#9932cc");
                    globalFloatPanel_AyohaStore_CartSumItemSumPrice = 0.00;
                    globalFloatPanel_AyohaStore_CartTotalItemQuantity = 0;
                    globalFloatPanel_AyohaStore_Cart_ItemCartCode = "NewItemCartCode";
                    if (isFloatPanel_AyohaStoreOpen == "Y") {
                        Ext.getCmp('htmlFloatPanel_AyohaStore_CartAmount').setHtml('<div style="background: transparent;height:30px;font-size: 13px;font-weight:bold;color:black;text-align:center;" >RM00.00</div>');
                        Ext.getCmp('htmlFloatPanel_AyohaStore_MyCartCountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>0</b></div>');
                    }
                   // Ext.getCmp('htmlFloatPanel_AyohaStore_CartAmount').setHtml('<div style="background: transparent;height:30px;font-size: 13px;font-weight:bold;color:black;text-align:center;" >RM00.00</div>');
                  //  Ext.getCmp('htmlFloatPanel_AyohaStore_MyCartCountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>0</b></div>');
                    Dashboard_LoadAyohaEwallet();
                   // FloatPanel_AyohaStore_AyohaPointCollectedAnimShow();
                    FloatPanel_AyohaeWalletHide();
                    FloatPanel_RewardStore_SearchResultHide();
                    FloatPanel_RewardStoreHide();
                    FloatPanel_AyohaReward_PointTransactionsHide();
                    FloatPanel_OrderHistoryHide();
                    FloatPanel_OrderCartHide();                   
                    Dashboard_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore();
                  

                    var task = Ext.create('Ext.util.DelayedTask', function () {
                        DashboardAyohaUserMainStore();
                    });
                task.delay(1000);
                }
                else {

                    swalFireFail("Fail!");
                    globalFloatPanel_AyohaStore_CartSumItemSumPrice = 0.00;
                    globalFloatPanel_AyohaStore_CartTotalItemQuantity = 0;
                    globalFloatPanel_AyohaStore_Cart_ItemCartCode = "NewItemCartCode";
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();
                LoadingPanelHide();

            },

            failure: function (result, request) {
                swalFireFail("Fail!");
                globalFloatPanel_AyohaStore_CartSumItemSumPrice = 0.00;
                globalFloatPanel_AyohaStore_CartTotalItemQuantity = 0;
                globalFloatPanel_AyohaStore_Cart_ItemCartCode = "NewItemCartCode";
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });

        Ext.Viewport.unmask();
    });
    task.delay(1000);
}


function FloatPanel_AyohaStore_CheckOut_ViewReceipt() {
    alert('sdfds')
}


function FloatPanel_AyohaStore_CheckOut_DeleteOrder() {
    event.preventDefault();
    Swal.fire({
        title: 'Are you sure to Delete this order?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'purple',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    }).then(function (result) {
        if (result.isConfirmed) {
            var task = Ext.create('Ext.util.DelayedTask', function () {

                var objn = {
                    "OrderNo": globalFloatPanel_AyohaStore_CheckOut_OrderNo,
                    "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
                    "OrderStatus": "OrderDelete",
                    "OrderLogOrderStatus": "NA",
                    "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),

                };
                var _value = Ext.Ajax.request({

                    type: "POST",

                    url: GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderUpdateOrderStatus',

                    dataType: "json",
                    data: JSON.stringify(objn),
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    },

                    success: function (result, request) {

                        //console.log(result.responseText);


                        data = Ext.decode(result.responseText.trim());

                        if (data.success == "true") {
                            // FloatPanel_AyohaStore_CartHide();
                            FloatPanel_AyohaStore_CheckOutHide();
                            FloatPanel_AyohaStore_OrderHistory_OrderCancelTitle_Active();

                        }
                        else {

                            swalFireFail("Fail!");

                            Ext.Viewport.unmask();
                            LoadingPanelHide();
                        }
                        Ext.Viewport.unmask();
                        LoadingPanelHide();

                    },

                    failure: function (result, request) {
                        swalFireFail("Fail!");
                        Ext.Viewport.unmask();

                    }

                });

                Ext.Viewport.unmask();
            });
            task.delay(10);
        }
    });
}


function FloatPanel_AyohaStore_CheckOut_OrderOnly_ReOrder() {
    var Note = document.getElementById('input-FloatPanel_AyohaStore_CheckOut_NoteToSeller').value;
    var add = document.getElementById('input-FloatPanel_AyohaStore_CheckOut_ShippingAddress').value;

    var internalglobalFloatPanel_AyohaStore_CheckOut_VoucherCode;
    var ModifiedVocherCode;

    if (arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length > 0) {
        for (i = 0; i < arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length; i++) {
            internalglobalFloatPanel_AyohaStore_CheckOut_VoucherCode += arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode[i] + ","
        }
        ModifiedVocherCode = internalglobalFloatPanel_AyohaStore_CheckOut_VoucherCode.replace("undefined", "");
    } else {
        ModifiedVocherCode = "NoVoucherCode,";
    }


    if (add) {

    } else {
        swalFireFail("Shipping Address required!");
        return;
    }
    if (Note) {
        Note = Note;

    } else {
        Note = "NA";
    }
    LoadingPanelShow("resources/icons/sendingAnim.gif", "Submit Order...")
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "ItemCartCode": globalFloatPanel_AyohaStore_Cart_ItemCartCode,
            "DeliveryChargeCode": globalFloatPanel_AyohaStore_DeliveryChargeList_ChargeTypeCode,
            "DeliveryCharge": globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge,
            "MembershipDiscountCampaignCode": "NA",
            "MembershipDiscount": 0.00,
            "VoucherCampaignCode": "NA",
            "VoucherDiscount":globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher,
            "GrandTotal": globalFloatPanel_AyohaStore_Cart_GrandTotal,
            "DeliveryAddress_StreetName": globalFloatPanel_AyohaStore_DeliveryAddress_StreetName,
            "DeliveryAddress_Town": globalFloatPanel_AyohaStore_DeliveryAddress_TownCity,
            "DeliveryAddress_Postcode": globalFloatPanel_AyohaStore_DeliveryAddress_PostCode,
            "DeliveryAddress_StateCode": globalFloatPanel_AyohaStore_DeliveryAddress_State,
            "DeliveryAddress_CountryCode": globalFloatPanel_AyohaStore_DeliveryAddress_Country,
            "ReferenceName": globalFloatPanel_AyohaStore_DeliveryAddress_ContactPerson,
            "ReferencePhoneNo": globalFloatPanel_AyohaStore_DeliveryAddress_PhoneNo,
            "NoteToSeller": Note,
            "MerchantPointEarn": globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint,
            "AyohaPointEarn": globalFloatPanel_AyohaStore_Cart_TotalAyohaPoint,
            "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
            "DeliveryName": globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryName,
            "TotalQuantity": globalFloatPanel_AyohaStore_Cart_TotalItemQuantity,
            "SubTotal": globalFloatPanel_AyohaStore_Cart_TotalSumPrice,
            "VoucherCount": arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length,
            "VoucherCode": ModifiedVocherCode.slice(0, -1),
        };
        console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderInsert',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                   
                    FloatPanel_AyohaStore_CartHide();
                    FloatPanel_AyohaStore_CheckOutHide();
                    FloatPanel_AyohaStore_SaleItemDetailHide();
                    FloatPanel_AyohaStore_OrderHistoryHide();
                    // swalFireSuccesDynamicIconWithMessage("resources/icons/orderplacedAnim.gif", "Order has been submit successfully!");
                    swalFireDynamicIconWithMessage("resources/icons/orderplacedAnim.gif", "Order has been submit successfully!", "black", "#9932cc");
                    globalFloatPanel_AyohaStore_CartSumItemSumPrice = 0.00;
                    globalFloatPanel_AyohaStore_CartTotalItemQuantity = 0;
                    globalFloatPanel_AyohaStore_Cart_ItemCartCode = "NewItemCartCode";

                    if (isFloatPanel_AyohaStoreOpen == "Y") {
                        Ext.getCmp('htmlFloatPanel_AyohaStore_CartAmount').setHtml('<div style="background: transparent;height:30px;font-size: 13px;font-weight:bold;color:black;text-align:center;" >RM00.00</div>');
                        Ext.getCmp('htmlFloatPanel_AyohaStore_MyCartCountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>0</b></div>');
                    }
                    FloatPanel_OrderCartHide();
                    var task = Ext.create('Ext.util.DelayedTask', function () {
                        DashboardAyohaUserMainStore();
                    });
                    task.delay(100);
                }
                else {

                    swalFireFail("Fail!-->" + result.responseText.trim());
                    globalFloatPanel_AyohaStore_CartSumItemSumPrice = 0.00;
                    globalFloatPanel_AyohaStore_CartTotalItemQuantity = 0;
                    globalFloatPanel_AyohaStore_Cart_ItemCartCode = "NewItemCartCode";
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();
                LoadingPanelHide();

            },

            failure: function (result, request) {
                swalFireFail("Fail!");
                globalFloatPanel_AyohaStore_CartSumItemSumPrice = 0.00;
                globalFloatPanel_AyohaStore_CartTotalItemQuantity = 0;
                globalFloatPanel_AyohaStore_Cart_ItemCartCode = "NewItemCartCode";
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });

        Ext.Viewport.unmask();
    });
    task.delay(1000);
}


function FloatPanel_AyohaStore_CheckOut_PlayAyohaPointSound() {
    var audio = new Audio();
    audio.src = 'http://42.1.63.57/AyohaSoundExternal/KidsCheering.mp3';
    audio.play();
}



function FloatPanel_AyohaStore_CheckOut_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore() {
    globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge = 0.00;
    globalFloatPanel_AyohaStore_Cart_ExtEnterpriseAccNo = "";
    globalFloatPanel_AyohaStore_Cart_ExtMembershipCardCode = "";
    globalFloatPanel_AyohaStore_Cart_VoucherCountOriginal = "";


    globalFloatPanel_AyohaStore_Cart_ExtEnterpriseAccNo = '50528-0133376958-NoEnterprise,' + FloatPanel_AyohaStore_getEnterpriseAccNo();
    globalFloatPanel_AyohaStore_Cart_ExtMembershipCardCode = 'USU,' + globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode;


    console.log(globalFloatPanel_AyohaStore_Cart_ExtEnterpriseAccNo);
    console.log(globalFloatPanel_AyohaStore_Cart_ExtMembershipCardCode);
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanel_AyohaStore_Cart_ExtEnterpriseAccNo);
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getProxy().setExtraParam('MembershipCardCode', globalFloatPanel_AyohaStore_Cart_ExtMembershipCardCode);
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCode');
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {



        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getCount();
        globalFloatPanel_AyohaStore_Cart_VoucherCount = parseInt(count);
        globalFloatPanel_AyohaStore_Cart_VoucherCountOriginal = count;
        if (count > 0)
        {
            //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_VoucherCount').setHtml('<div onclick="FloatPanel_AyohaRewardVoucherList_AyohaStore_CartShow();" class="blink_me" style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;"><img style="margin:0px 5px -3px 0px;" src="resources/icons/voucher01.png" width="20px" height="16px"/><font color=purple>' + count + ' Voucher!</font> - Voucher Discount(RM):</div>');

            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscountLabel').setHtml('<div onclick="FloatPanel_AyohaRewardVoucherList_AyohaStore_CartShow();"  class="blink_me" style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;"><img style="margin:0px 5px -3px 0px;" src="resources/icons/voucher01.png" width="20px" height="16px"/><font color=purple>' + count + ' Voucher Available!</font> - Voucher Discount(RM):</div>'
);



            //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_VoucherCount').setMargin('-6 0 0 0');
            //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_VoucherDiscount').setMargin('-3 0 0 5');
            //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_SubTotalTxt').setMargin('-5 0 0 0');
            //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_SubTotal').setMargin('-3 0 0 5');
           

            for (i = 0; i < count; i++) {
                var Store = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getAt(i);
                globalFloatPanel_AyohaStore_Cart_VoucherCode += Store.get('VoucherCode') + ',';

            }

            FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempUpdateEntitledVoucherStatus();
        } else {
            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscountLabel').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Voucher Discount(RM):</div>');

        }
        //  alert(count);
        //  Ext.getCmp('Dashboard_AyohaVoucherListID').setStore(_DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore);
        globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher = 0.00;
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher.toFixed(2) + '</div>')
       
        globalFloatPanel_AyohaStore_Cart_GrandTotal = (parseFloat(globalFloatPanel_AyohaStore_Cart_TotalSumPrice) + parseFloat(globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge)) - 0;
       
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_Cart_GrandTotal.toFixed(2) + '</div>');
    });
    task.delay(500);

}




function FloatPanel_AyohaStore_CheckOut_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore_OrderPlaced() {
   // globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge = 0.00;
    globalFloatPanel_AyohaStore_Cart_ExtEnterpriseAccNo = "";
    globalFloatPanel_AyohaStore_Cart_ExtMembershipCardCode = "";
   // globalFloatPanel_AyohaStore_Cart_VoucherCountOriginal = "";
   // alert(globalFloatPanel_AyohaStore_CheckOut_EnterpriseAccNo)

    globalFloatPanel_AyohaStore_Cart_ExtEnterpriseAccNo = '50528-0133376958-NoEnterprise,' + FloatPanel_AyohaStore_getEnterpriseAccNo();
    globalFloatPanel_AyohaStore_Cart_ExtMembershipCardCode = 'USU,' + globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode;


    console.log(globalFloatPanel_AyohaStore_Cart_ExtEnterpriseAccNo);
    console.log(globalFloatPanel_AyohaStore_Cart_ExtMembershipCardCode);
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanel_AyohaStore_Cart_ExtEnterpriseAccNo);
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getProxy().setExtraParam('MembershipCardCode', globalFloatPanel_AyohaStore_Cart_ExtMembershipCardCode);
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCode');
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {



        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getCount();
        globalFloatPanel_AyohaStore_Cart_VoucherCount = parseInt(count);
        globalFloatPanel_AyohaStore_Cart_VoucherCountOriginal = count;
        if (count > 0) {
            //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_VoucherCount').setHtml('<div onclick="FloatPanel_AyohaRewardVoucherList_AyohaStore_CartShow();" class="blink_me" style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;"><img style="margin:0px 5px -3px 0px;" src="resources/icons/voucher01.png" width="20px" height="16px"/><font color=purple>' + count + ' Voucher!</font> - Voucher Discount(RM):</div>');

            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscountLabel').setHtml('<div onclick="FloatPanel_AyohaRewardVoucherList_AyohaStore_CartShow();"  class="blink_me" style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;"><img style="margin:0px 5px -3px 0px;" src="resources/icons/voucher01.png" width="20px" height="16px"/><font color=purple>' + count + ' Voucher Available!</font> - Voucher Discount(RM):</div>'
);



            //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_VoucherCount').setMargin('-6 0 0 0');
            //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_VoucherDiscount').setMargin('-3 0 0 5');
            //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_SubTotalTxt').setMargin('-5 0 0 0');
            //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_SubTotal').setMargin('-3 0 0 5');


            for (i = 0; i < count; i++) {
                var Store = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getAt(i);
                globalFloatPanel_AyohaStore_Cart_VoucherCode += Store.get('VoucherCode') + ',';

            }

            FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempUpdateEntitledVoucherStatus();
        } else {
            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscountLabel').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Voucher Discount(RM):</div>');

        }
        
        globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher = 0.00;
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher.toFixed(2) + '</div>')

        globalFloatPanel_AyohaStore_Cart_GrandTotal = (parseFloat(globalFloatPanel_AyohaStore_Cart_TotalSumPrice) + parseFloat(globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge)) - 0;

        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_Cart_GrandTotal.toFixed(2) + '</div>');

    });
    task.delay(500);

}
