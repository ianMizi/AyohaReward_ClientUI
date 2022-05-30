Ext.define('ianMizi.view.AyohaeWallet.FloatPanel_AyohaeWallet', {

});

var _FloatPanel_AyohaeWallet;


var isFloatPanel_AyohaeWalletOpen = 'N';











function FloatPanel_AyohaeWallet() {

    _FloatPanel_AyohaeWallet =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 485,
         //width: '95%',
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaeWalletID',
         draggable: false,



         centered: true,
         //bottom: 64,
         zIndex: 100,
         // modal: true,
         //  hideOnMaskTap: true,
         layout: {
             type: 'vbox'
         },
         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             //type: 'slideOut',
             //direction: 'up',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250
             type: 'popOut',
             duration: 250,
             easing: 'ease-out'
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         // style: 'border-bottom:1px solid;background-color:white;',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_AyohaeWallet.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaeWalletOpen = 'N';
                             RemovePages("FloatPanel_AyohaeWalletHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaeWallet.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaeWalletOpen = 'N';
                             RemovePages("FloatPanel_AyohaeWalletHide()");
                         }
                        
                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",



         items: [
             {

                 xtype: 'container',
                 width: '100%',
                 style: ' background-color: transparent;',
                 id: 'containerFloatPanel_AyohaeWalletHeader',
                 layout: {
                     type: 'hbox',
                     pack: 'center',
                     align: 'center',
                 },
                 items:
                        [
                                      {
                                          xtype: 'button',
                                          id: 'btnFloatPanel_AyohaeWalletBack',
                                          height: 30,
                                          width: 35,
                                          // iconCls: 'list',
                                          html: '<div ><img src="resources/icons/backwhite03.png" width="25" height="20" alt="Company Name"></div>',
                                          ui: 'plain',
                                          handler: function () {
                                              RemovePages("FloatPanel_AyohaeWalletHide()");
                                              _FloatPanel_AyohaeWallet.hide(Ext.fx.Animation({
                                                  type: 'slideOut',
                                                  direction: 'left',
                                                  easing: 'cubic-bezier(.7,0,.7,1)',
                                                  duration: 250

                                              }));
                                              isFloatPanel_AyohaeWalletOpen = 'N';
                                              FloatPanel_RewardStoreHide();

                                          }
                                      },
                                      {
                                          xtype: 'spacer',

                                      },
                                        {
                                            margin:'10 0 0 0',
                                            html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;float:right;margin:-2px 0px 0px 0px;background-color:transparent;color:white">eWallet Setting</div>'
                                        },
                                     
                                           {
                                               xtype: 'button',
                                               id: 'btnFloatPanel_AyohaeWalletIcon',
                                               height: 40,
                                               width: 40,
                                               margin: '0 0 0 0',
                                               // hidden: true,
                                               // iconCls: 'list',
                                               html: '<div ><img src="resources/icons/ewallet5.png" width="30" height="30" alt="Company Name"></div>',
                                               ui: 'plain',
                                               handler: function () {
                                                   FloatPanel_AyohaeWallet_SettingShow();
                                                   //RemovePages(_FloatPanel_AyohaeWallet, "isFloatPanel_AyohaeWalletOpen");
                                                   //_FloatPanel_AyohaeWallet.hide(Ext.fx.Animation({
                                                   //    type: 'slideOut',
                                                   //    direction: 'right',
                                                   //    easing: 'cubic-bezier(.7,0,.7,1)',
                                                   //    duration: 250

                                                   //}));
                                                   //isFloatPanel_AyohaeWalletOpen = 'N';
                                                  // FloatPanel_RewardStoreHide();
                                                   //  FloatPanel_RewardStoreHide();

                                               }
                                           },
                                           {
                                               xtype: 'panel',
                                               width:17
                                           }

                        ]

             },

             {

                 xtype: 'container',
                 width: '100%',
                 margin:'0 0 0 0',
                 height:60,
                 style: ' background-color: transparent;',
                 id: 'containerFloatPanel_AyohaeWalletHeader_AyohaeWalletTxt',
                 layout: {
                     type: 'vbox',
                     pack: 'left',
                     align: 'left',
                 },
                 items:[
                     {
                         html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;float:left;margin:0px 0px 0px 0px;background-color:transparent;color:white;padding:5px 25px;">Balance</div>'
                     },
                     {
                         xtype: 'container',
                         width: '100%',
                         margin:'0 0 0 0',
                         layout: {
                             type: 'hbox',
                             pack: 'left',
                             align: 'left',
                         },
                         items:[
                             {
                                 //  id: 'htmlFloatPanel_AyohaeWalletHeader_AyohaeWalletTxt
                                 width: 60,
                               //  height:38,
                                 html: '<div style="font-family:Arial, sans-serif;font-size:38px;font-weight:bold;float:left;margin:-7px 0px 0px 0px;background-color:transparent;color:white;padding:0px 25px;">RM</div>'
                             },
                             {
                                 width: 240,
                                 //height: 38,
                                 id: 'htmlFloatPanel_AyohaeWalletHeader_AyohaeWalletTxt',
                                 html: '<div style="font-family:Arial, sans-serif;font-size:38px;font-weight:bold;float:left;margin:-7px 0px 0px 0px;background-color:transparent;color:white;padding:0px 25px;">00.00</div>'
                             }
                         ]
                     }
                      
                    
                 ]
             },
         //{

         //    xtype: 'container',
         //    width: '100%',
         //    margin:'-10 0 0 0',
         //   // height:10,
         //    style: ' background-color: transparent;',
         //    id: 'containerFloatPanel_AyohaeWalletHeader_AyohaeWalletAmountTxt',
         //    layout: {
         //        type: 'hbox',
         //        pack: 'left',
         //        align: 'left',
         //    },
         //    items:[
         //        {
         //            html: '<div style="font-family:Arial, sans-serif;font-size:38px;font-weight:bold;float:left;margin:0px 0px 0px 0px;background-color:transparent;color:white;padding:5px 25px;">RM5526.30</div>'
         //        }
                    
         //    ]
         //},
       
            {

                xtype: 'container',
                width: '100%',
                margin: '0 0 0 0',
                height: 130,
                style: ' background-color: transparent;',
                id: 'containerFloatPanel_AyohaeWalletHeader_AyohaeWalletMenu',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center',
                },
                items: [
                     {
                         xtype: 'spacer'
                     },
                   {
                       xtype: 'container',
                       width: '18%',
                       margin: '-10 0 0 0',
                       height: 100,
                       layout: {
                           type: 'vbox',
                           pack: 'center',
                           align: 'center',
                       },
                       //  style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                       items: [
                           {
                               xtype: 'container',
                               width: '100%',
                               height: 65,
                               margin: '0 0 0 0',
                               style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                               // style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                               // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                               layout: {
                                   type: 'vbox',
                                   pack: 'center',
                                   align: 'center',
                               },
                               items: [
                                     {
                                         height: 30,
                                         width: 30,

                                        
                                         //badgeText: "2",
                                         html: '<img src="resources/icons/eWalletTopUp01.png" width="30" height="30" alt="Company Name">',
                                     }
                                        
                                     
                               ]
                           },
                           {
                               xtype: 'panel',
                               height:15
                           },
                           {
                               html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;float:left;margin:-2px 0px 0px 0px;background-color:transparent;color:white">Top Up</div>'
                           }
                       ]
                   },
                    {
                        xtype: 'spacer'
                    },

                    /////////scan and pay

                    {
                        xtype: 'container',
                        width: '18%',
                        margin: '-10 0 0 0',
                        id: 'containerFloatPanel_AyohaeWallet_ScanAndPay',
                        name: 'namecontainerFloatPanel_AyohaeWallet_ScanAndPay',
                        height: 100,
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center',
                        },
                        //  style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                        items: [
                            {
                                xtype: 'container',
                                width: '100%',
                                height: 65,
                                margin: '0 0 0 0',
                                style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center',
                                },
                                items: [
                                      {
                                          height: 30,
                                          width: 30,


                                          //badgeText: "2",
                                          html: '<img src="resources/icons/scanQrCodePurple.png" width="30" height="30" alt="Company Name">',
                                      }


                                ]
                            },
                            {
                                xtype: 'panel',
                                height: 15
                            },
                            {
                                html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;float:left;margin:-2px 0px 0px 0px;background-color:transparent;color:white">Scan & Pay</div>'
                            }
                        ]
                    },


                    ////////////
                   


                    {
                        xtype: 'spacer'
                    },
                   //////////

                   {
                       xtype: 'container',
                       width: '18%',
                       margin:'-10 0 0 0',
                       id: 'containerFloatPanel_AyohaeWallet_Transfer',
                       name: 'namecontainerFloatPanel_AyohaeWallet_Transfer',
                       height: 100,
                       layout: {
                           type: 'vbox',
                           pack: 'center',
                           align: 'center',
                       },
                       //  style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                       items: [
                           {
                               xtype: 'container',
                               width: '100%',
                               height: 65,
                               margin: '0 0 0 0',
                               style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                               layout: {
                                   type: 'vbox',
                                   pack: 'center',
                                   align: 'center',
                               },
                               items: [
                                     {
                                         height: 30,
                                         width: 30,


                                         //badgeText: "2",
                                         html: '<img src="resources/icons/transferewallet.png" width="30" height="30" alt="Company Name">',
                                     }


                               ]
                           },
                           {
                               xtype: 'panel',
                               height: 15
                           },
                           {
                               html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;float:left;margin:-2px 0px 0px 0px;background-color:transparent;color:white">Transfer</div>'
                           }
                       ]
                   },



                   /////////////////
                   {
                       xtype:'spacer'
                   },
                   ////////eWallet Transaction

                   {
                       xtype: 'container',
                       width: '18%',
                       height: 100,
                       id: 'containerFloatPanel_AyohaeWallet_TransactionHistory',
                       name: 'namecontainerFloatPanel_AyohaeWallet_TransactionHistory',
                       layout: {
                           type: 'vbox',
                           pack: 'center',
                           align: 'center',
                       },
                       //  style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                       items: [
                           {
                               xtype: 'container',
                               width: '100%',
                               height: 65,
                               margin: '0 0 0 0',
                               style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                               layout: {
                                   type: 'vbox',
                                   pack: 'center',
                                   align: 'center',
                               },
                               items: [
                                     {
                                         height: 30,
                                         width: 30,


                                         //badgeText: "2",
                                         html: '<img src="resources/icons/eWalletTransaction.png" width="30" height="30" alt="Company Name">',
                                     }


                               ]
                           },
                           {
                               xtype: 'panel',
                               height: 15
                           },
                           {
                               html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;float:left;margin:-2px 0px 0px 0px;background-color:transparent;color:white">Transactions</div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;text-align:center;margin:-10px 0px 0px 0px;background-color:transparent;color:white">History</div>'
                           }
                       ]
                   },


                   ////////
                   {
                       xtype: 'spacer'
                   },

                ]
            },






            ////////////////
            //{
            //    xtype: 'panel',
            //    height:5
            //},
           
              {
                  xtype: 'container',
                  width: '100%',
                  height: 170,
                  margin: '0 0 0 0',
                  style: 'background-color:rgba(255, 255, 255, 0.3);border-left: 1px none #D0D3D4;border-right: 1px none #D0D3D4;border-bottom: 1px none #D0D3D4;border-top: 1px none #D0D3D4;border-radius: 30px 30px 0px 0px;',
                 
                  layout: {
                      type: 'vbox',
                      pack: 'center',
                      align: 'center',
                  },
                  items: [
                      {
                          xtype: 'container',
                          width: '100%',
                        //  height: 40,
                          layout: {
                              type: 'hbox',
                              pack: 'left',
                              align: 'left',
                          },
                          items: [
                              {
                                  xtype: 'panel',
                                  width:25
                              },
                               {margin:'10 0 0 0',
                                   html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;margin:0px 0px 0px 0px;background-color:transparent;color:white">Transaction Summary</div>'
                               },
                          ]
                      },

                       {
                           xtype: 'container',
                           width: '100%',
                           margin: '-17 0 0 0',
                           height: 170,
                           style: 'background-color: transparent',
                           layout: {
                               type: 'hbox',
                               pack: 'center',
                               align: 'center',
                           },
                           items: [
                                {
                                    xtype: 'spacer'
                                },
                      {
                          xtype: 'container',
                          width: '43%',
                          height: 75,
                          margin: '-35 0 0 0',
                          style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                          layout: {
                              type: 'vbox',
                              pack: 'center',
                              align: 'center',
                          },
                          items: [
                              {
                                  width: '91%',
                                  height: 50,
                                  margin: '10 0 0 0',
                                  id:'htmltableFloatPanel_AyohaeWallet_IncomeThisMonth',
                                  html: '<table onclick="FloatPanel_AyohaeWallet_IncomeThisMonth();" style="border-collapse:collapse;border-spacing:0;width:100%;height:50px;" class="tg"><thead><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Income This Month</td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="resources/icons/income01.png" width="30" height="30" alt="Company Name"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">RM5000</td></tr></thead></table>',
                              }
                          ]
                      },
                      {
                          xtype: 'spacer',
                          width: 15
                      },
                      {
                          xtype: 'container',
                          width: '43%',
                          height: 75,
                          margin: '-35 0 0 0',
                          style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                          layout: {
                              type: 'vbox',
                              pack: 'center',
                              align: 'center',
                          },
                          items: [
                           {
                               width: '91%',
                               height: 50,
                               margin: '10 0 0 0',
                               id: 'htmltableFloatPanel_AyohaeWallet_SpentThisMonth',
                               html: '<table onclick="FloatPanel_AyohaeWallet_SpentThisMonth();" style="border-collapse:collapse;border-spacing:0;width:100%;height:50px;" class="tg"><thead><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Spent This Month</td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="resources/icons/spent01.png" width="30" height="30" alt="Company Name"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">RM7500</td></tr></thead></table>',
                           }
                          ]
                      },
                       {
                           xtype: 'spacer'
                       },
                           ]
                       },

                      
                  ]
              },
              {
                  xtype: 'container',
                  width: '100%',
                  height: '100%',
                  margin: '-40 0 0 0',
                  style: 'background-color:white;border-left: 1px none #D0D3D4;border-right: 1px none #D0D3D4;border-bottom: 1px none #D0D3D4;border-top: 1px none #D0D3D4;border-radius: 30px 30px 0px 0px;',

                  layout: {
                      type: 'vbox',
                      pack: 'start',
                      align: 'center',
                  },
                  items: [

                      {
                          xtype: 'container',
                          width: '100%',
                          height: 40,
                          layout: {
                              type: 'hbox',
                              pack: 'center',
                              align: 'center',
                          },
                          items: [
                              {
                                  xtype: 'panel',
                                  width:25
                              },
                                 {
                                     html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;float:left;margin:0px 0px 0px 0px;background-color:transparent;color:black">Transactions</div><br><div style="font-family:Arial, sans-serif;font-size:9px;font-weight:normal;float:left;margin:-10px 0px 0px 0px;background-color:transparent;color:black">-A week ago-</div>'
                                 },
                      {
                          xtype: 'spacer'
                      },
                      {
                          html: '<div onclick="FloatPanel_AyohaeWallet_TransactionHistoryShow()" style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;margin:0px 0px 0px 0px;background-color:transparent;color:blue">View History</div>'
                      },
                         {
                             xtype: 'panel',
                             width: 25
                         },
                          ]
                      },
                   
                   {
                       xtype: 'container',
                       width: '90%',
                       height: '100%',
                       layout: {
                           type: 'vbox',
                           pack: 'start',
                           align: 'center',
                       },
                       
                       items: [
                            {
                                xtype: 'container',
                                style: ' background-color: transparent',
                                // margin: '0 0 0 0',
                                height: '100%',
                                width: '100%',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'center'

                                },
                                //scrollable: {
                                //    direction: 'vertical',
                                //    directionLock: true,
                                //    indicators: false
                                //},
                                items: [
                                    {
                                        xtype: 'list',
                                        width: '100%',
                                      // height: '100%',
                                       height: 300,
                                        // flex: 1,
                                        store: _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore,
                                        // store:'AyohaUserDashBoardNearestRedeemItemListStore',
                                        id: 'FloatPanel_AyohaeWallet_TransactionListID',
                                        style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                        mode: 'SINGLE',
                                        // width: '100%',
                                        disableSelection: true,
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
                                       
                                        itemTpl: '<div onclick="FloatPanel_AyohaeWallet_TransactionHistory_AyohaeWalletTransactionStaging(' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{AccountName}' + "'" + ',' + "'" + '{UserProfileImg}' + "'" + ',' + "'" + '{PhoneNo}' + "'" + ',' + "'" + '{TransactionNote}' + "'" + ',' + "'" + '{TransactionAmount}' + "'" + ',' + "'" + '{TransactionType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{FullAccountName}' + "'" + ',' + "'" + '{TransactionReferenceNo}' + "'" + ',{ID})"  class="myContent" style="background-color:white;width:106%;height:70px;">' +


                                         '<table onclick="FloatPanel_AyohaeWallet_TransactionHistory_AyohaeWalletTransactionStaging(' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{AccountName}' + "'" + ',' + "'" + '{UserProfileImg}' + "'" + ',' + "'" + '{PhoneNo}' + "'" + ',' + "'" + '{TransactionNote}' + "'" + ',' + "'" + '{TransactionAmount}' + "'" + ',' + "'" + '{TransactionType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{FullAccountName}' + "'" + ',' + "'" + '{TransactionReferenceNo}' + "'" + ',{ID})"  style="border-collapse:collapse;border-spacing:0;width:106%;background-color:white;margin:-10px 0px 0px -18px;height:80px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center"><div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:60px;height:60px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url({AccountProfileImg}); background-size: 100% 100%;"></div></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{AccountName}<br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{isSpentOrIncome} - {CreatedDate}</font></td></tr></table><br>'
                                         + '<div style="width:96%;height:20px;margin:-68px 0px 0px 0px;color:black;vertical-align: top; text-align:right;font-family:Arial, sans-serif;font-size: 14px;font-weight:bold;">{ModifiedTransactionAmount}</div>'
                                             + '</div>',


                                        //height: '100%',

                                        emptyText: '<div  style="background-color:transparent;width:100%;height100%;">No Transaction!</div>',


                                    },
                                ]
                            },
                            
                       ]
                   },
                 
                  
                   //{
                   //    xtype: 'container',
                   //    width: '95%',
                   //    margin: '-10 0 0 0',
                   //    height: '45%',
                   //    style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 0px 0px 18px #888888;border-radius: 10px 10px 10px 10px;',
                   //}

                  ]

              }
                 
         ]







     });
    return _FloatPanel_AyohaeWallet;





}

function FloatPanel_AyohaeWalletShow() {
    AddRoutePages("FloatPanel_AyohaeWalletHide()");
    Ext.Viewport.remove(_FloatPanel_AyohaeWallet);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaeWallet());
    this.overlay.show();    
    isFloatPanel_AyohaeWalletOpen = 'Y';
    floatPanel_AyohaeWallet_setHeigtFloatPanel_AyohaeWallet_TransactionListID();
    FloatPanel_AyohaeWallet_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore();
    //   document.getElementById("input-FloatPanel_AyohaeWallet_SearchTxt").addEventListener("keyup", SearchBusinessTypeListOnKeyUp);
    // _DataStore_BusinessTypeList = Ext.StoreMgr.get('BusinessTypeLoadStore').load();
    Ext.getCmp('htmlFloatPanel_AyohaeWalletHeader_AyohaeWalletTxt').setHtml('<div class="odometer" style="font-family:Arial, sans-serif;font-size:38px;font-weight:bold;float:left;margin:-7px 0px 0px 0px;background-color:transparent;color:white;padding:0px 25px;">' + globalDashboardeWalletCurrentBalance + '</div>');


    var containerViewnamecontainerFloatPanel_AyohaeWallet_Transfer = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaeWallet_Transfer]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaeWallet_Transfer = containerViewnamecontainerFloatPanel_AyohaeWallet_Transfer.element;
    containerViewElnamecontainerFloatPanel_AyohaeWallet_Transfer.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaeWallet_TransferShow();
      }
    );


    var containerViewnamecontainerFloatPanel_AyohaeWallet_ScanAndPay = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaeWallet_ScanAndPay]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaeWallet_ScanAndPay = containerViewnamecontainerFloatPanel_AyohaeWallet_ScanAndPay.element;
    containerViewElnamecontainerFloatPanel_AyohaeWallet_ScanAndPay.on('tap',
      function (event, node, options, eOpts) {
          //FloatPanel_AyohaeWallet_ScanAndPayShow();
          FloatPanel_AyohaeWallet_ScanAndPay_UpgradeShow(); 
          Ext.getCmp('mainView').setHidden(true);
          FloatPanel_AyohaeWalletHide();
          // document.getElementsByTagName("BODY")[0].setAttribute('style', 'background-color: transparent');
          // FloatPanel_AyohaeWallet_IconHide();
          window.QRScanner.prepare(onDone_ScanAndPay);
      }
    );
    
    
    var containerViewnamecontainerFloatPanel_AyohaeWallet_TransactionHistory = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaeWallet_TransactionHistory]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaeWallet_TransactionHistory = containerViewnamecontainerFloatPanel_AyohaeWallet_TransactionHistory.element;
    containerViewElnamecontainerFloatPanel_AyohaeWallet_TransactionHistory.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaeWallet_TransactionHistoryShow();
      }
    );




    

    var FloatPanel_AyohaeWallet_isUserHasEwalletAccount = localStorage.getItem("isUserHasEwalletAccount");
    if (FloatPanel_AyohaeWallet_isUserHasEwalletAccount == "N") {
        FloatPanel_AyohaeWallet_SettingShow_CreateNewAccount();
        FloatPanel_AyohaeWalletHide();
    } 

   
  
}




function onDone_ScanAndPay(err, status) {
    if (err) {
        // here we can handle errors and clean up any loose ends.
        console.error(err);
    }
    if (status.authorized) {
        // W00t, you have camera access and the scanner is initialized.
        // QRscanner.show() should feel very fast.

        // window.QRScanner.show();
        window.QRScanner.show(function (status) {
            window.QRScanner.scan(displayContents_ScanAndPay);
        });
        // window.QRScanner.scan(displayContents);
    } else if (status.denied) {
        // The video preview will remain black, and scanning is disabled. We can
        // try to ask the user to change their mind, but we'll have to send them
        // to their device settings with `QRScanner.openSettings()`.
    } else {
        // we didn't get permission, but we didn't get permanently denied. (On
        // Android, a denial isn't permanent unless the user checks the "Don't
        // ask again" box.) We can ask again at the next relevant opportunity.
    }
}


function displayContents_ScanAndPay(err, text) {
    if (err) {
        // an error occurred, or the scan was canceled (error code `6`)
    } else {
        // The scan completed, display the contents of the QR code:


        var audio = new Audio();
        audio.src = 'http://42.1.63.57/AyohaSoundExternal/store-scanner-beep.mp3';
        audio.play();



        //var x = document.getElementById("myAudio");
        //x.play();
        //alert(text);
        Ext.getCmp('mainView').setHidden(false);
        FloatPanel_AyohaeWallet_ScanAndPay_UpgradeHide();
        window.QRScanner.destroy(function (status) {

        });


        FloatPanel_AyohaeWallet_ScanAndPay_Payment_ProcessQRCode(text);
       


    }
}







function FloatPanel_AyohaeWalletHide() {
    if (isFloatPanel_AyohaeWalletOpen == 'Y') {
        _FloatPanel_AyohaeWallet.hide(); isFloatPanel_AyohaeWalletOpen = 'N';
        RemovePages("FloatPanel_AyohaeWalletHide()");
        //  FloatPanel_RewardStoreHide();
    }

}



var globalFloatPanel_AyohaeWallet_AyohaeWalletTransaction_ThisMonthSpent;
var globalFloatPanel_AyohaeWallet_AyohaeWalletTransaction_ThisMonthIncome;
function FloatPanel_AyohaeWallet_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore() {



    //Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore').getProxy().setExtraParams({
    //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
    //});
    //Ext.StoreMgr.get('AyohaUserDashBoardNearestRedeemItemListStore').load();

    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore.getProxy().setExtraParam('eWalletAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore.getProxy().setUrl(GetAPIurl() + '/AyohaeWalletTransaction/AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactions');
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        
        var count = _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore.getCount();
        if (count > 0) {
            var Store = _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore.getAt(0);
            globalFloatPanel_AyohaeWallet_AyohaeWalletTransaction_ThisMonthSpent = parseFloat(Store.get('ThisMonthSpent'));
            globalFloatPanel_AyohaeWallet_AyohaeWalletTransaction_ThisMonthIncome = parseFloat(Store.get('ThisMonthIncome'));

            Ext.getCmp('htmltableFloatPanel_AyohaeWallet_IncomeThisMonth').setHtml('<table onclick="FloatPanel_AyohaeWallet_IncomeThisMonth();" style="border-collapse:collapse;border-spacing:0;width:100%;height:50px;" class="tg"><thead><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Income This Month</td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="resources/icons/income01.png" width="30" height="30" alt="Company Name"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">RM' + globalFloatPanel_AyohaeWallet_AyohaeWalletTransaction_ThisMonthIncome.toFixed(2) + '</td></tr></thead></table>');
            Ext.getCmp('htmltableFloatPanel_AyohaeWallet_SpentThisMonth').setHtml('<table onclick="FloatPanel_AyohaeWallet_SpentThisMonth();" style="border-collapse:collapse;border-spacing:0;width:100%;height:50px;" class="tg"><thead><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Spent This Month</td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="resources/icons/spent01.png" width="30" height="30" alt="Company Name"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">RM' + globalFloatPanel_AyohaeWallet_AyohaeWalletTransaction_ThisMonthSpent.toFixed(2) + '</td></tr></thead></table>');

        }

       

        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(500);
}



function FloatPanel_AyohaeWallet_Transaction_StagingViewInvoice(ItemCartCode, MembershipCardCode, OrderNo, TransactionType, AccountName, UserProfileImg) {
    if (TransactionType == 'AyohaStore_Payment') {
        FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo(ItemCartCode, MembershipCardCode, OrderNo, AccountName, UserProfileImg);
        return;

    }
}

function FloatPanel_AyohaeWallet_IncomeThisMonth() {
    FloatPanel_AyohaeWallet_TransactionIncomeSpentShow("Credit");
}

function FloatPanel_AyohaeWallet_SpentThisMonth() {
    FloatPanel_AyohaeWallet_TransactionIncomeSpentShow("Debit");
}

function floatPanel_AyohaeWallet_setHeigtFloatPanel_AyohaeWallet_TransactionListID() {
    var innerHight = parseInt(window.innerHeight) - 406;
    console.log(innerHight)
    Ext.getCmp('FloatPanel_AyohaeWallet_TransactionListID').setHeight(innerHight);
}