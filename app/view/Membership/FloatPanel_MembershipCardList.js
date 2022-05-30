﻿
Ext.define('ianMizi.view.Membership.FloatPanel_MembershipCardList', {

});

var _FloatPanel_MembershipCardList;


var isFloatPanel_MembershipCardListOpen = 'N';






function FloatPanel_MembershipCardList() {

    _FloatPanel_MembershipCardList =
    Ext.create('Ext.Panel', {
        zIndex: 300,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_MembershipCardListID',
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
            type: 'slideOut',
            direction: 'left',
            easing: 'cubic-bezier(.7,0,.7,1)',
            duration: 250
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
        // style: 'border-bottom:1px solid;background-color:white;',
       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {
                        //if (e.direction == "up") {
                        //    LoyaltyCardRedeemListHide();
                        //}
                        if (e.direction == "left") {
                            _FloatPanel_MembershipCardList.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            RemovePages("FloatPanel_MembershipCardListHide()");
                            isLoyaltyCardRedeemListOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatPanel_MembershipCardList.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isLoyaltyCardRedeemListOpen = 'N';
                            RemovePages("FloatPanel_MembershipCardListHide()");
                        }

                    }
                });
            }
        },

        items: [



            {
                xtype: 'container',
                width: '100%',
                height: '100%',
               // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
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
                                // width: 40,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_MembershipCardListHeader',
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
                                                         id: 'btnFloatPanel_MembershipCardListBack',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             FloatPanel_MembershipCardListHide();
                                                            
                                                             //FloatPanel_MembershipCardList_AddCardHide();
                                                             //_FloatPanel_MembershipCardList.hide(Ext.fx.Animation({
                                                             //    type: 'slideOut',
                                                             //    direction: 'left',
                                                             //    easing: 'cubic-bezier(.7,0,.7,1)',
                                                             //    duration: 250

                                                             //}));

                                                         }
                                                     },
                                                    
                                                      {
                                                          xtype: 'spacer',

                                                      },

                                                       {
                                                           margin: '0 0 0 0',
                                                           id: 'htmlFloatPanel_MembershipCardList_TitleHeaderTxt',
                                                           html: '<font size=2 color=white><b>My Loyalty Card</b></font>'
                                                       },

                                                              {
                                                                  xtype: 'container',
                                                                  //   margin: '0 0 0 5',
                                                                  hidden: true,
                                                                  //style: 'background-color: white;',
                                                                  //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                                  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

                                                                  height: 25,
                                                                  width: 70,
                                                                  // margin: '70 0 0 0',
                                                                  id: 'containerFloatPanel_MembershipCardListHaiUser',
                                                                  layout: {

                                                                      type: 'vbox',
                                                                      pack: 'center',
                                                                      align: 'center'
                                                                  },
                                                                  items: [


                                                                      {
                                                                          margin: '0 0 0 0',
                                                                          id: 'htmlFloatPanel_MembershipCardListHaiUser',
                                                                          html: '<font size=2 color=black><b>Hai Mizi!</b></font>'
                                                                      },
                                                                      {
                                                                          xtype: 'container',
                                                                          //   margin: '0 0 0 5',
                                                                          hidden: true,
                                                                          style: 'background-color: transparent;',

                                                                          height: 25,
                                                                          width: 70,
                                                                          // margin: '70 0 0 0',
                                                                          id: 'containerFloatPanel_MembershipCardListeWallet',
                                                                          layout: {

                                                                              type: 'hbox',
                                                                              pack: 'left',
                                                                              align: 'left'
                                                                          },
                                                                          items: [
                                                                               {
                                                                                   xtype: 'button',
                                                                                   id: 'btnFloatPanel_MembershipCardListeWallet',
                                                                                   margin: '4 0 0 -15',
                                                                                   height: 30,
                                                                                   width: 35,
                                                                                   // iconCls: 'list',
                                                                                   html: '<div ><img src="resources/icons/ewalletTwo.png" width="25" height="20" alt="Company Name"></div>',
                                                                                   ui: 'plain',
                                                                                   handler: function () {
                                                                                       DrawerMenuShow();

                                                                                   }
                                                                               },
                                                                               {
                                                                                   margin: '7 0 0 2',
                                                                                   html: '<font size=2 color=white><b>RM00.00</b></font>'
                                                                               }
                                                                          ]
                                                                      },

                                                                  ]
                                                              },
                                                           {
                                                               xtype: 'container',
                                                               margin: '0 0 0 -5',
                                                               hidden: true,
                                                               //style: 'background-color: white;',
                                                               style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                                               height: 40,
                                                               width: 40,
                                                               // margin: '70 0 0 0',
                                                               id: 'containerFloatPanel_MembershipCardListPictureUser',
                                                               layout: {

                                                                   type: 'hbox',
                                                                   pack: 'center',
                                                                   align: 'center'
                                                               },
                                                               items: [
                                                                   {
                                                                       xtype: 'button',
                                                                       height: 40,
                                                                       width: 40,
                                                                       margin: '0 0 0 -11',
                                                                       id: 'btnFloatPanel_MembershipCardListInfo',
                                                                       //badgeText: "2",
                                                                       html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: white;border-radius: 20px 20px 20px 20px;width:35px;height:35px" ><img src="resources/icons/picprofile.png" width="30" height="30" alt="Company Name"></div>',
                                                                       ui: 'plain',
                                                                       handler: function () {

                                                                           //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                                           //  setupMovementMap(2);





                                                                           //Ext.getCmp('mainView').setActiveItem(16);
                                                                           //loadNotificationSummary();
                                                                       }
                                                                   },



                                                               ]
                                                           },










                                       ]

                            },











                              //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                              {

                                  xtype: 'container',
                                  width: '100%',
                                  height: 80,
                                  hidden: true,
                                  // width: 40,

                                  //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                  //hidden: true,
                                  //docked: 'top',
                                  id: 'containerFloatPanel_MembershipCardListHeaderTop',
                                  //style: {
                                  //    // background: '#D25959',
                                  //    background: 'transparent',
                                  //    // border: '2px'
                                  //},
                                  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                  style: 'border-bottom:2px none black;background-color:transparent',
                                  layout: {
                                      type: 'vbox',
                                      pack: 'center',
                                      align: 'center',
                                  },
                                  // hidden:true,
                                  items:
                                         [



                                      {
                                          width: '100%',
                                          // height:170,
                                          // width: 40,
                                          margin: '25 0 0 0',
                                          //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                          hidden: true,
                                          // docked: 'top',
                                          id: 'containerFloatPanel_MembershipCardListIconHeader',
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
                                          items: [
                                               {
                                                   xtype: 'button',
                                                   id: 'btnFloatPanel_MembershipCardListAllCard',
                                                   //hidden: true,
                                                   height: 80,
                                                   width: 90,
                                                   margin: '-25 0 0 0',
                                                   // iconCls: 'list',
                                                   html: '<div ><img src="resources/icons/LoyaltyCardOneWhite.png" width="80" height="65" alt="Company Name"></div>',
                                                   ui: 'plain',
                                                   //ui: 'confirm',
                                                   handler: function () {
                                                      
                                                   }
                                               },

                                              {
                                                  //width: '50%',

                                                  //height: 80,
                                                  width: 100,
                                                  // height:170,
                                                  // width: 40,
                                                  // margin: '7 0 0 0',
                                                  //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                                  //hidden: true,
                                                  // docked: 'top',
                                                  id: 'containerFloatPanel_MembershipCardListTotalLoyaltyLblCountLbl',
                                                  style: {
                                                      // background: '#D25959',
                                                      background: 'transparent',
                                                      // border: '2px'
                                                  },
                                                  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                  // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center',

                                                  },
                                                  items: [


                                                          {

                                                              id: 'btnFloatPanel_MembershipCardListTotalLoyaltyLbl',
                                                              //hidden: true,
                                                              // height: 20,
                                                              // width: 150,
                                                              margin: '-26 0 0 -10',
                                                              // iconCls: 'list',
                                                              html: '<font size=1 color=white>Total Loyalty Card</font>',

                                                          },
                                                          {
                                                              margin: '-5 0 0 -10',
                                                              id: 'FloatPanel_MembershipCardListTotalLoyaltyLblCount',
                                                              html: '<font size=10 color=white><b>1</b></font>',

                                                          },

                                                  ]
                                              },

                                          ]
                                      },











                                         ]

                              },

                              {
                                  height: '100%',
                                  width: '100%',

                                  id: 'containerFloatPanel_MembershipCardList_List',
                                  style: {
                                      // background: '#D25959',
                                      background: 'transparent',
                                      // border: '2px'
                                  },
                                  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                  // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                  layout: {
                                      type: 'vbox',
                                      pack: 'start',
                                      align: 'center',

                                  },
                                  items: [
                                      {
                                          xtype: 'list',
                                          //  flex: 1,
                                          width: '100%',
                                          // store: 'EnterprisegetAllStore',
                                          store: 'MembershipLoadBySubscriberAccNoStore',
                                          id: 'FloatPanel_MembershipCardList_List',
                                          // grouped: true,
                                          mode: 'SINGLE',
                                          //  indexBar: true,
                                          disableSelection: true,
                                          //itemTpl: '<div class="myContent">' +
                                          //     '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:bottom" colspan="3"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 102px; height: 122px; margin-top: 3px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;vertical-align:bottom"><br>Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:right;vertical-align:bottom" colspan="2"><br>Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 16px;margin: -10px 2px 0px 5px;cursor: pointer;" >Receipt Detail</div></td></tr></table>' +
                                          //      '</div>',
                                          //itemTpl: '<div class="myContent" style="width:99%;border-left: 6px solid grey;border-radius: 20px 0px 0px 20px;box-shadow: 5px 10px 18px #888888;margin:0px 0px 0px 5px;">' +
                                          //itemTpl: '<div class="myContent" style="width:100%;box-shadow: 5px 10px 18px #888888;margin:0px 0px 0px 5px;">' +
                                          //style="width:100%;border-left: 6px solid grey;border-radius: 20px 0px 0px 20px;box-shadow: 5px 10px 18px #888888;"
                                          itemTpl: '<div class="myContent" style="margin:-7px 0px 0px -7px;width:104%;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;">' +
                                         // itemTpl: '<div class="myContent" style="margin:-7px 0px 0px -7px;width:104%;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-left: 6px solid grey;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;">' +
                                            //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><font size=1 color=white>Barber</font><img style="margin:-15px 0px 0px 0px;width:28px;height:28px;" src="resources/icons/restaurantPurple.png"></div>' +
                                              '<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><font size=1 color=white>{EnterpriseBusinessType}</font></div>' +
                                              '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:-3px 0px 0px 0px;">Loyalty No<br>ABC125WER</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:20px 0px 0px 0px;border-bottom: 2px solid white;"><b>{EnterpriseName}</b></div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:3px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><b>{StampCampaignName}</b><br>Start Date:{StartDate}<br>End Date:{EndDate}</td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4">Stamp <font size=4>{Stamps}</font></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
                                            
                                                '</div>'+
                                               '<div style="width:100%;text-align:right;margin:-90px 0px 0px 0px;background-color: transparent;height:50px"><img style="margin:0px 0px 0px 0px;width:42px;height:52px;" src="resources/icons/StampSuccessCount.gif"></div>'+
                                               '<div style="width:100%;text-align:right;margin:0px 0px 0px 0px;background-color: transparent;height:30px"></div>',

                                          height: '100%',
                                          listeners: {
                                              itemsingletap: function (list, idx, target, records, evt) {
                  

                                                  var Stamps = records.get('Stamps');
                                                  var StampsArr = Stamps.split('/');
                                                 

                                                  var StampCampaignCode = records.get('StampCampaignCode');
                                                  var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                                  var StartDate = records.get('StartDate');
                                                  var EndDate = records.get('EndDate');
                                                  var SubscriberAccNo = GetCurrAyohaUserAccountNo();
                                                  var EnterpriseName = records.get('EnterpriseName');
                                                  var StampRuleRemarks = records.get('StampRuleRemarks');
                                                  var isStampRulePopUp = records.get('IsStampRulePopUp');
                                                  var StampCampaignName = records.get('StampCampaignName');
                                                  var CountLoyaltyStamped = StampsArr[0];
                                                  var CountStampCardRowShow = StampsArr[1];
                                                  localStorage.setItem('StampCampaignCode', StampCampaignCode);

                                                  localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
                                                  localStorage.setItem('CountStampCardRowShow', CountStampCardRowShow);
                                                  //alert(StampRuleRemarks); alert(isStampRulePopUp);

                                                  FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, CountLoyaltyStamped, CountStampCardRowShow);



                                              },
                                              deselect: function (list, records) {

                                              }
                                          },

                                      },

                                  ]

                              },













                        ]
                    },





















                    //{
                    //    xtype: 'container',
                    //    id: 'FloatPanel_MembershipCardListTitleOutter',
                    //    width: '96%',
                    //    height: 45,
                    //    margin: '0 0 0 7',
                    //    // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                    //    style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                    //    docked: 'bottom',
                    //    layout: {
                    //        type: 'hbox',
                    //        pack: 'center',
                    //        align: 'center'

                    //    },
                    //    items: [
                    //        {
                    //            xtype: 'container',
                    //            id: 'containerFloatPanel_MembershipCardList_StampCard',
                    //            flex: 1,
                    //            //width: '33.3%',
                    //            //height: 45,
                    //            style: "background-color: transparent",
                    //            //style: "background-color: #F35B57;",

                    //            layout: {
                    //                type: 'vbox',
                    //                pack: 'center',
                    //                align: 'center'

                    //            },
                    //            items: [

                    //                 {
                    //                     xtype: 'button',
                    //                     id: 'btnFloatPanel_MembershipCardList_StampCard',
                    //                     //  badgeText: '1',
                    //                     margin: '0 0 0 0',
                    //                     height: 40,
                    //                     width: 40,
                    //                     html: '<img src="resources/icons/latestStampcardPurple.png" width="30" height="30" alt="Company Name">',
                    //                     ui: 'plain',
                    //                     handler: function () {


                    //                     }
                    //                 },
                    //                  {
                    //                      margin: '-12 0 0 0',
                    //                      html: '<font size=1 color=purple><b><u>Ayoha Stamp Card</u></b></font>'
                    //                  },

                    //            ]
                    //        },

                    //            {
                    //                xtype: 'container',
                    //                id: 'containerFloatPanel_MembershipCardList_PointCard',
                    //                //width: '33.3%',
                    //                //height: 45,
                    //                flex: 1,
                    //                style: "background-color: transparent",
                    //                //style: "background-color: #F35B57;",

                    //                layout: {
                    //                    type: 'vbox',
                    //                    pack: 'center',
                    //                    align: 'center'

                    //                },
                    //                items: [

                    //                     {
                    //                         xtype: 'button',
                    //                         id: 'btnFloatPanel_MembershipCardList_PointCard',
                    //                         //  badgeText: '1',
                    //                         margin: '0 0 0 0',
                    //                         height: 40,
                    //                         width: 40,
                    //                         html: '<img src="resources/icons/pointPurpleOne.png" width="30" height="30" alt="Company Name">',
                    //                         ui: 'plain',
                    //                         handler: function () {


                    //                             //  LoyaltyCardRedeemListShow();
                    //                         }
                    //                     },
                    //                      {
                    //                          margin: '-12 0 0 0',
                    //                          html: '<font size=1 color=grey><b>Ayoha Point Card</b></font>'
                    //                      },

                    //                ]
                    //            },



                    //    ]

                    //},







                    {
                        xtype: 'container',
                        id: 'containerFloatPanel_MembershipCardListTitleOutter',
                        width: '100%',
                        docked: 'bottom',
                        // hidden:true,
                        height: 40,
                        // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                        // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                        style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #EAEEF3;',
                        // style: "background-color: #EAEEF3;",

                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center'

                        },
                        items: [




                              {
                                  xtype: 'button',
                                  id: 'btnFloatPanel_MembershipCardListSearch',
                                  // hidden: true,
                                  //  badgeText: '1',
                                  margin: '2 0 0 -5',
                                  height: 40,
                                  width: 40,
                                  html: '<img src="resources/icons/searchPurpleOne.png" width="28" height="28" alt="Company Name">',
                                  ui: 'plain',
                                  handler: function () {
                                      // NotificationsPanelShow();

                                      // LoyaltyCardRedeemListShow();


                                      //  LoyaltyCardRedeemListShow();
                                  }
                              },



                             {
                                 id: 'FloatPanel_MembershipCardList_SearchTxt',
                                 margin: '0 0 0 -10',
                                 width: '68%',
                                 height: 20,
                                 html: '<input type="text" id="input-FloatPanel_MembershipCardList_SearchTxt" placeHolder="Search Card" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                             },



                             {
                                 id: 'FloatPanel_MembershipCardList_CountSearchTxt',
                                 margin: '0 0 0 0',
                                // width: '75%',
                                 height: 20,
                                 html: '<font size=3 color=black>(0)</font>'
                             },
                             {
                                 xtype: 'button',
                                 id: 'btnFloatPanel_MembershipCardListFilter',
                                 // hidden: true,
                                 //  badgeText: '1',
                                 margin: '2 0 0 15',
                                 height: 25,
                                 width: 35,
                                 html: '<img src="resources/icons/filterPurpleThree.png" width="25" height="25" alt="Company Name">',
                                 ui: 'plain',
                                 handler: function () {
                                     // NotificationsPanelShow();

                                     // LoyaltyCardRedeemListShow();


                                     //  LoyaltyCardRedeemListShow();
                                 }
                             },
                            




                        ]

                    },



















                ]
            },












        ]





    });
    return _FloatPanel_MembershipCardList;



}








function FloatPanel_MembershipCardListShow() {

    Ext.Viewport.remove(_FloatPanel_MembershipCardList);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardList());
    this.overlay.show();
    AddRoutePages("FloatPanel_MembershipCardListHide()");
    isFloatPanel_MembershipCardListOpen = 'Y';
    FloatPanel_MembershipCardList_MembershipLoadBySubscriberAccNoStore();
    document.getElementById("input-FloatPanel_MembershipCardList_SearchTxt").addEventListener("keyup", MembershipLoadBySubscriberAccNoStoreOnKeyUp);
   

}





function FloatPanel_MembershipCardListHide() {
 
    _FloatPanel_MembershipCardList.hide(); isFloatPanel_MembershipCardListOpen = 'N';
    RemovePages("FloatPanel_MembershipCardListHide()");
}







//var countEnterpriseSubscribedLoadFirst = 0
var _DataStore_MembershipLoadBySubscriberAccNoStore;
var countMembershipLoadBySubscriberAccNoStoreFirst;
function FloatPanel_MembershipCardList_MembershipLoadBySubscriberAccNoStore() {


    console.log(GetCurrAyohaUserAccountNo());

    Ext.getStore('MembershipLoadBySubscriberAccNoStore').getProxy().setExtraParams({
        SubscriberAccNo: GetCurrAyohaUserAccountNo()
    });
    Ext.StoreMgr.get('MembershipLoadBySubscriberAccNoStore').load();

    var task = Ext.create('Ext.util.DelayedTask', function () {

        Ext.getStore('MembershipLoadBySubscriberAccNoStore').getProxy().setExtraParams({
            SubscriberAccNo: GetCurrAyohaUserAccountNo()
        });
        _DataStore_MembershipLoadBySubscriberAccNoStore = Ext.StoreMgr.get('MembershipLoadBySubscriberAccNoStore').load();
        var myStore = Ext.getStore('MembershipLoadBySubscriberAccNoStore');
        countMembershipLoadBySubscriberAccNoStoreFirst = myStore.getCount();
       
        Ext.getCmp('FloatPanel_MembershipCardList_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipLoadBySubscriberAccNoStoreFirst + ')</b></font>')
        Ext.Viewport.setMasked(false);
       









    });
    task.delay(2000);




}





function MembershipLoadBySubscriberAccNoStoreOnKeyUp() {






    console.log('SearchEnterpriseOnKeyUp');
    var countMembershipLoadBySubscriberAccNoStoreSequence = 0;


    _DataStore_MembershipLoadBySubscriberAccNoStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_MembershipCardList_SearchTxt').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_MembershipLoadBySubscriberAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('EnterpriseName'))) {
                console.log('ada0');

                countMembershipLoadBySubscriberAccNoStoreSequence = _DataStore_MembershipLoadBySubscriberAccNoStore.getCount();
                Ext.getCmp('FloatPanel_MembershipCardList_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipLoadBySubscriberAccNoStoreSequence + ')</b></font>');
               // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countMembershipLoadBySubscriberAccNoStoreSequence = _DataStore_MembershipLoadBySubscriberAccNoStore.getCount();
        Ext.getCmp('FloatPanel_MembershipCardList_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipLoadBySubscriberAccNoStoreSequence + ')</b></font>');

      //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_MembershipLoadBySubscriberAccNoStore.clearFilter();
        Ext.getCmp('FloatPanel_MembershipCardList_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipLoadBySubscriberAccNoStoreFirst + ')</b></font>');
       // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }




}



