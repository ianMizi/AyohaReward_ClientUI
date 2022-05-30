
Ext.define('ianMizi.view.AyohaMerchantReview.AyohaMerchantReview', {

});

var _AyohaMerchantReview;
var _AyohaMerchantReview_EnterpriseAccNo;
var _AyohaMerchantReview_MembershipCode;
var Index = 0;
var isAyohaMerchantReviewOpen = 'N';

var CarouselIndex = 0;

var _AyohaMerchantReview_isFirstLoad = "N";







function AyohaMerchantReview() {

    _AyohaMerchantReview =
    Ext.create('Ext.Panel', {
        zIndex: 300,
        xtype: 'container',
        //height: 465,
       // height: '100%',
        width: '100%',
        id: 'AyohaMerchantReviewID',
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
        // style: 'border-bottom:1px solid;background-color:white;',
       // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {

                        if (e.direction == "left") {
                            _AyohaMerchantReview.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isAyohaMerchantReviewOpen = 'N';
                            _AyohaMerchantReview_isFirstLoad = "N";
                            RemovePages("AyohaMerchantReviewHide()");
                        } if (e.direction == "right") {
                            _AyohaMerchantReview.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isAyohaMerchantReviewOpen = 'N';
                            _AyohaMerchantReview_isFirstLoad = "N";
                            RemovePages("AyohaMerchantReviewHide()");
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
                        //    margin: '0 0 0 0',
                        //  style: 'background-color: transparent',
                        //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                        style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },
                        items: [
                            {

                                xtype: 'container',
                                width: '100%',
                                //docked: 'top',
                                height: 32,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerAyohaMerchantReviewHeader',
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
                                                         id: 'btnAyohaMerchantReviewBack',
                                                         height: 30,
                                                         margin: '0 0 0 10',
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backwhite03.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             _AyohaMerchantReview.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             isAyohaMerchantReviewOpen = 'N';
                                                             _AyohaMerchantReview_isFirstLoad = "N";
                                                             RemovePages("AyohaMerchantReviewHide()");

                                                         }
                                                     },

                                                      {
                                                          xtype: 'spacer',

                                                      },

                                                       {
                                                           margin: '0 15 0 0',
                                                           id: 'htmlAyohaMerchantReview_TitleHeaderTxt',
                                                           html: '<font size=2 color=white><b>Ayoha Merchant Review</b></font>'
                                                       },

                                                            {
                                                                xtype: 'button',
                                                                hidden:true,
                                                                //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                                                height: 30,
                                                                width: 35,
                                                                // iconCls: 'list',
                                                                html: '<div ><img src="resources/icons/MerchantReviewIconWhite01.png" width="25" height="20" alt="Company Name"></div>',
                                                                ui: 'plain',
                                                                handler: function () {

                                                                    // AyohaMerchantReview_AddEditShow();
                                                                  
                                                                    _AyohaMerchantReview.hide(Ext.fx.Animation({
                                                                        type: 'slideOut',
                                                                        direction: 'right',
                                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                                        duration: 250

                                                                    }));
                                                                    isAyohaMerchantReviewOpen = 'N';
                                                                    _AyohaMerchantReview_isFirstLoad = "N";
                                                                    RemovePages("AyohaMerchantReviewHide()");
                                                                 
                                                                }
                                                            },












                                       ]

                            },

                            {
                                xtype: 'container',
                                id: 'containerAyohaMerchantReview_ReviewCompanyInfo',
                                width: '100%',
                                height: 100,
                                margin:'0 0 0 0',
                                // hidden: true,
                                style: "background-color: transparent",
                                //style: "background-color: #F35B57;",
                                //   style: 'background-image: url("resources/icons/previewcardloadinglatest.gif"); background-size: 80% 80%;',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'center'

                                },
                                items: [
                                      {
                                          margin: '-10 0 0 -130',
                                          id: 'containerAyohaMerchantReview_ReviewCompanyInfo_Logo',                                         
                                          html: '<img src="resources/icons/ccrlogo.png" alt="Image" style="width:90px;height:90px;">',

                                      },
                                      {
                                          margin:'-7 0 0 -130',
                                          id: 'containerAyohaMerchantReview_ReviewCompanyInfo_Name',
                                          html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;">Community Coffea Sdn Bhd</div>',

                                      },
                                      {
                                          xtype: 'container',
                                          id: 'containerAyohaMerchantReview_ReviewCompanyInfo_AddNewReview',
                                          width: '95%',
                                          height: 30,
                                          margin: '-80 0 0 0',
                                          // hidden: true,
                                          style: "background-color: transparent",
                                          //style: "background-color: #F35B57;",
                                          //   style: 'background-image: url("resources/icons/previewcardloadinglatest.gif"); background-size: 80% 80%;',
                                          layout: {
                                              type: 'vbox',
                                              pack: 'start',
                                              align: 'right'

                                          },
                                          items: [
                                              {
                                                  xtype: 'container',
                                                  id: 'containerAyohaMerchantReview_ReviewCompanyInfo_AddNewReviewPanel',
                                                  name: 'namecontainerAyohaMerchantReview_ReviewCompanyInfo_AddNewReviewPanel',
                                                  width: 120,
                                                  height: 30,
                                                  margin: '0 0 0 0',
                                                  // hidden: true,
                                                 // style: "background-color: white",
                                                  //style: "background-color: #F35B57;",
                                                  style: 'border-right:2px solid purple;border-left:2px solid purple;border-bottom:2px solid purple;border-top:2px solid purple ;background: white;border-radius: 10px 10px 10px 10px;',
                                                  layout: {
                                                      type: 'hbox',
                                                      pack: 'center',
                                                      align: 'center'

                                                  },
                                                  items: [

                           

                                                      {
                                                          margin:'0 0 0 0',
                                                          html: '<img src="resources/icons/editReview.png" alt="Image" style="width:24px;height:24px;">'
                                                      },
                                                      {
                                                          margin:'5 0 0 0',
                                                          html: '<div style="background: transparent;height:30px;font-size: 11px;font-weight:normal;color:black;text-align:center;" >Write a review</div>'
                                                      }

                                                  ]
                                              }
                                          ]

                                      }
                                ]
                            },


                            {
                                xtype: 'container',
                                id: 'containerAyohaMerchantReview_ReviewMaster',
                                width: '100%',
                                height: 125,
                                margin:'5 0 0 0',
                               // hidden: true,
                              //  style: "background-color: white",
                                style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;',
                                //style: "background-color: #F35B57;",
                                //   style: 'background-image: url("resources/icons/previewcardloadinglatest.gif"); background-size: 80% 80%;',
                                layout: {
                                    type: 'hbox',
                                    pack: 'left',
                                    align: 'left'

                                },
                                items: [
                                      //{
                                      //    xtype: 'container',
                                      //    id: 'containerAyohaMerchantReview_LoadingInner',
                                      //    width: '100%',
                                      //    height: 140,
                                      //    //hidden:true,
                                      //    // style: "background-color: transparent",
                                      //    //style: "background-color: #F35B57;",
                                      //    style: 'background-image: url("resources/icons/reviewImgSample.png"); background-size: 100% 140px;background-repeat: no-repeat;',

                                      //},
                                      {
                                          xtype: 'container',
                                          width: '66%',
                                          height: 140,
                                          style: "background-color: white",
                                          //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;',
                                          layout: {
                                              type: 'vbox',
                                              pack: 'start',
                                              align: 'left'
                                          },
                                          items: [

                                               {
                                                   margin: '-30 0 0 -37',
                                                   html: '<div id="barchartAyohaMerchanReview" style="width: 300px; height: 140px;"></div>'
                                               },

                                          ]

                                      },

                                            {
                                                xtype: 'container',
                                                width: '34%',
                                                height: 140,
                                                style: "background-color: white",
                                                layout: {
                                                    type: 'vbox',
                                                    pack: 'start',
                                                    align: 'center'
                                                },
                                                items: [

                                                     {
                                                         margin: '-10 0 0 6',
                                                         id:'htmlAyohaMerchantReview_Rate',
                                                         html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 60px;font-weight:bold;color:black;">0.0</div>',
                                                     },

                                                       {
                                                           xtype: 'container',
                                                           width: '100%',
                                                           height: 28,
                                                           margin:'-18 0 0 -2',
                                                           style: "background-color: transparent",
                                                           layout: {
                                                               type: 'hbox',
                                                               pack: 'left',
                                                               align: 'left'
                                                           },
                                                           items: [

                                                                {
                                                                    xtype: 'button',
                                                                    id: 'btnAyohaMerchantReview_Star1',
                                                                    height: 28,
                                                                    width: 28,
                                                                    // iconCls: 'list',
                                                                    html: '<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>',
                                                                    ui: 'plain',
                                                                    handler: function () {
                                                                    

                                                                    }
                                                                },
            {
                xtype: 'button',
                id: 'btnAyohaMerchantReview_Star2',
                height: 28,
                width: 28,
                margin:'0 0 0 -5',
                // iconCls: 'list',
                html: '<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>',
                ui: 'plain',
                handler: function () {
              
                }
            },
              {
                  xtype: 'button',
                  id: 'btnAyohaMerchantReview_Star3',
                  height: 28,
                  width: 28,
                  margin: '0 0 0 -5',
                  // iconCls: 'list',
                  html: '<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>',
                  ui: 'plain',
                  handler: function () {

                 
                  }
              },
                {
                    xtype: 'button',
                    id: 'btnAyohaMerchantReview_Star4',
                    height: 28,
                    width: 28,
                    margin: '0 0 0 -5',
                    // iconCls: 'list',
                    html: '<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>',
                    ui: 'plain',
                    handler: function () {
                   
                    }
                },
                  {
                      xtype: 'button',
                      id: 'btnAyohaMerchantReview_Star5',
                      height: 28,
                      width: 28,
                      margin: '0 0 0 -5',
                      // iconCls: 'list',
                      html: '<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>',
                      ui: 'plain',
                      handler: function () {
                   
                      }
                  },
                                                           ]

                                                       },




                                                       {
                                                           margin: '13 0 0 0',
                                                           id: 'htmlAyohaMerchantReview_TotalReviews',
                                                           html: '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;0 Reviews</div>'
                                                       }




                                                ]

                                            },


                                       

                                ]

                            },

                            //{
                            //    xtype: 'container',
                            //    style: 'background-color: transparent',
                            //    width: '100%',
                            //    height:5,
                            //},

                            
                            {
                                xtype: 'container',
                                width: '100%',
                                height: '95%',
                                id: 'AyohaMerchantReviewContentID',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'center'

                                },
                               // style: 'background-color:transparent',
                                style: 'border-top:2px solid #ECF0F1 ;background: transparent;',

                                items: [
                                    {
                                        xtype: 'list',
                                        width: '100%',
                                        // height: '98%',
                                        // flex: 1,
                                        store: 'AyohaMerchantReviewLoadByEnterpriseAccNoStore',
                                        id: 'AyohaMerchantReviewListID',
                                        mode: 'SINGLE',
                                        // width: '100%',
                                        disableSelection: true,
                                        style: 'background-color:rgba(255, 255, 255, 10);border-radius: 0px 0px 0px 0px;',
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
                                        itemTpl: '<div class="myContent" style="background-color:white;width:104%;">' +


                                           
                                           '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-5px 0px 0px -13px;height:110px;"><tr onclick="openAyohaMerchantReviewPanel({ID})"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:3px 3px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:18%;vertical-align:top"><img src="{Photo}" style="border:1px solid grey; width:52px;height:52px;border-radius:50%;margin:0px 0px 0px 0px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:2px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:top"><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px">{AccountName}</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:black;margin:-17px 0px 0px 0px">{ModifiedStarReview} - {ReviewDate}</div><br><div style="width:100%;background-color: white;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;margin:-17px 0px 0px 0px">{ModifiedReviewTxt}<br><br><br></div></td></tr></table>' +

                                              '</div>'+
                                         '<br>'+
                                         '{ModifiedBottomButton}',
                                       //'<div style="width:100%;text-align:right;margin:-60px 0px 0px 0px;height:26px;background-color:white;"><button OnClick="FloatPanel_AyohaNotificationManagement_SetRecipiednt__DeleteSpecificMember({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/like02.png" style="width: 23px; height: 23px; margin:10px 0px 0px 50px;" /></button></div>',




                                        //'<div style="width:100%;text-align:right;margin:-60px 0px 0px 0px;"><button OnClick="AyohaMerchantReviewLike({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:0px 0px 0px 30px;" /></button></div>',
                                        //height: '100%',

                                        emptyText: '<div class="myContent">No Review Yet</div>',
                                        //listeners: {
                                        //    itemsingletap: function (list, idx, target, records, evt) {

                                        //        //var EnterpriseHQAccountNo = records.get('CampaignEnterpriseHQAccNo');
                                        //        //var EnterpriseAccountNo = records.get('CampaignEnterpriseAccNo');
                                        //        //var MembershipCardCode = records.get('MembershipCardCode');
                                        //        //var ID = records.get('ID');
                                        //        ////FloatPanel_AyohaNotification_EditCardShow_Edit(ID);
                                        //        //FloatPanel_MembershipCardList_UpgradeShow_MyMembershipCard(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode, ID);
                                        //        //setTimeout(function () {
                                        //        //    Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
                                        //        //    // Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);

                                        //        //    Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_TitleHeaderTxt').setHtml('<font size=2 color=white><b>My Membership Card</b></font>');
                                        //        //}, 2000);



                                        //    },
                                        //    deselect: function (list, records) {

                                        //    }
                                        //},
                                        listeners: {
                                            itemswipe: function (list, idx, target, record, evt) {
                                                //  To get the selection you should use getSelection() instead
                                                //////var selected = list.getActiveItem();
                                                //////alert(list.getActiveItem());
                                                //////if (!selected) { return; }

                                                //////var selectedIndex = selected[0];
                                                //////alert([selectedIndex, idx]);
                                                //Ext.Msg.alert('itemswipe', idx);


                                            } // itemswipe
                                        }

                                    },
                                ]
                            },
                            

                            

                            





                        ]
                    },








































        ]





    });
    return _AyohaMerchantReview;



}








//function AyohaMerchantReviewShow(ID) {
var MembershipTag;
var globalEnterpriseAccNo_AyohaMerchantReview;
function AyohaMerchantReviewShow(ID) {
    AddRoutePages("AyohaMerchantReviewHide()");
    Ext.Viewport.remove(_AyohaMerchantReview);
    this.overlay = Ext.Viewport.add(AyohaMerchantReview());
    this.overlay.show();   
    AyohaMerchantReviewAdjustHeight();
    console.log("2:" + _AyohaMerchantReview_isFirstLoad);
    isAyohaMerchantReviewOpen = 'Y';
    globalAyohaMerchantReview_AddEdit_PostReview_isSave = "N";
    //var EnterpriseAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseLogoPath = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseName = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);

    var EnterpriseAccNo = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseLogoPath = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseName = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    globalEnterpriseAccNo_AyohaMerchantReview = EnterpriseAccNo.get('EnterpriseAccNo');
    AyohaMerchantReview_AyohaMerchantReviewLoadByEnterpriseAccNoStore();

   
    Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Logo').setHtml('<img src="' + EnterpriseLogoPath.get('EnterpriseLogoPath') + '" alt="Image" style="width:90px;height:90px;">');
    Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Name').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;">' + EnterpriseName.get('EnterpriseName') + '</div>');


  




}



function AyohaMerchantReviewShow_FromFloatPanel_MerchantDetailPage() {
    AddRoutePages("AyohaMerchantReviewHide()");
    Ext.Viewport.remove(_AyohaMerchantReview);
    this.overlay = Ext.Viewport.add(AyohaMerchantReview());
    this.overlay.show();
    AyohaMerchantReviewAdjustHeight();
    console.log("2:" + _AyohaMerchantReview_isFirstLoad);
    isAyohaMerchantReviewOpen = 'Y';
    globalAyohaMerchantReview_AddEdit_PostReview_isSave = "N";
    //var EnterpriseAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseLogoPath = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseName = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);

    //var EnterpriseAccNo = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseLogoPath = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseName = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);


    //globalFloatPanelMerchantDetailPage_EnterpriseAccNo = EnterpriseAccNo;
    //globalFloatPanelMerchantDetailPage_EnterpriseLogo = EnterpriseLogoPath;
    //globalFloatPanelMerchantDetailPage_EnterpriseName = EnterpriseName;
    //globalFloatPanelMerchantDetailPage_EnterpriseTagLine = EnterpriseTagLine;




    globalEnterpriseAccNo_AyohaMerchantReview = globalFloatPanelMerchantDetailPage_EnterpriseAccNo;
    AyohaMerchantReview_AyohaMerchantReviewLoadByEnterpriseAccNoStore();


    Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Logo').setHtml('<img src="' + globalFloatPanelMerchantDetailPage_EnterpriseLogo + '" alt="Image" style="width:90px;height:90px;">');
    Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Name').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;">' + globalFloatPanelMerchantDetailPage_EnterpriseName + '</div>');







}



function AyohaMerchantReviewShow_FromMerchantListSearchResult(ID) {
    AddRoutePages("AyohaMerchantReviewHide()");
    Ext.Viewport.remove(_AyohaMerchantReview);
    this.overlay = Ext.Viewport.add(AyohaMerchantReview());
    this.overlay.show();
    AyohaMerchantReviewAdjustHeight();
    console.log("2:" + _AyohaMerchantReview_isFirstLoad);
    isAyohaMerchantReviewOpen = 'Y';
    globalAyohaMerchantReview_AddEdit_PostReview_isSave = "N";
    //var EnterpriseAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseLogoPath = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseName = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);

    var EnterpriseAccNo = _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseLogoPath = _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseName = _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    globalEnterpriseAccNo_AyohaMerchantReview = EnterpriseAccNo.get('EnterpriseAccNo');
    AyohaMerchantReview_AyohaMerchantReviewLoadByEnterpriseAccNoStore();


    Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Logo').setHtml('<img src="' + EnterpriseLogoPath.get('EnterpriseLogoPath') + '" alt="Image" style="width:90px;height:90px;">');
    Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Name').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;">' + EnterpriseName.get('EnterpriseName') + '</div>');







}




function AyohaMerchantReviewShow_FromAyohaStore() {
    AddRoutePages("AyohaMerchantReviewHide()");
    Ext.Viewport.remove(_AyohaMerchantReview);
    this.overlay = Ext.Viewport.add(AyohaMerchantReview());
    this.overlay.show();   
    AyohaMerchantReviewAdjustHeight();
    console.log("2:" + _AyohaMerchantReview_isFirstLoad);
    isAyohaMerchantReviewOpen = 'Y';
    globalAyohaMerchantReview_AddEdit_PostReview_isSave = "N";
    var logo;
    var Name;

    if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
        globalEnterpriseAccNo_AyohaMerchantReview = globalDashboardVIAAdvertisement_EnterpriseAccNo;
        logo = globalDashboardVIAAdvertisement_EnterpriseLogoPath;
        Name = globalDashboardVIAAdvertisement_EnterpriseName;
        

    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement") {
        globalEnterpriseAccNo_AyohaMerchantReview = globalFloatPanel_PreviewAdvertisement_EnterpriseAccNo;
        logo = globalFloatPanel_PreviewAdvertisement_EnterpriseLogoPath;
        Name = globalFloatPanel_PreviewAdvertisement_EnterpriseName;
    }
   
    if (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
        globalEnterpriseAccNo_AyohaMerchantReview = globalStampCampaignEnterpriseAccNo;
        logo = globalStampCampaignEnterpriseLogo;
        Name = globalStampCampaignEnterpriseName;
    }
    if (globalFloatPanel_AyohaStore_ModuleTagging == "AyohaMerchant") {
        globalEnterpriseAccNo_AyohaMerchantReview = globalFloatPanel_RewardStore_EnterpriseAccNo;
        logo = globalFloatPanel_RewardStore_EnterpriseLogoPath;
        Name = globalFloatPanel_RewardStore_EnterpriseName;
    }
   

    if (globalFloatPanel_AyohaStore_ModuleTagging == "Floating_Advertisement") {
        globalEnterpriseAccNo_AyohaMerchantReview = globalFloatPanel_FloatingAdvertisement_EnterpriseAccNo;
        logo = globalFloatPanel_FloatingAdvertisement_CompanyLogo;
        Name = globalFloatPanel_FloatingAdvertisement_CompanyName;
    }

    if (globalFloatPanel_AyohaStore_ModuleTagging == "PushNotification") {
        globalEnterpriseAccNo_AyohaMerchantReview = globalFloatPanel_AyohaNotification_Notification_EnterpriseAccNo;
        logo = globalFloatPanel_AyohaNotification_Notification_EnterpriseLogo;
        Name = globalFloatPanel_AyohaNotification_Notification_EnterpriseName;
    }



    if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanelMerchantDetailPage") {
        globalEnterpriseAccNo_AyohaMerchantReview = globalFloatPanelMerchantDetailPage_EnterpriseAccNo;
        logo = globalFloatPanelMerchantDetailPage_EnterpriseLogo;
        Name = globalFloatPanelMerchantDetailPage_EnterpriseName;
    }


    Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Logo').setHtml('<img src="' + logo + '" alt="Image" style="width:90px;height:90px;">');
    Ext.getCmp('containerAyohaMerchantReview_ReviewCompanyInfo_Name').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;">' + Name + '</div>');
    AyohaMerchantReview_AyohaMerchantReviewLoadByEnterpriseAccNoStore();






}







function AyohaMerchantReviewAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x - 270;
    console.log(newHeights);
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;

    Ext.getCmp('AyohaMerchantReviewID').setHeight(x + 20);
    Ext.getCmp('AyohaMerchantReviewListID').setHeight(newHeights);
    AyohaMerchantReview_initializedTapEvent();

    //542
 

}

var _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoStore;

function AyohaMerchantReviewHide() {
    if (isAyohaMerchantReviewOpen == "Y") {
        RemovePages("AyohaMerchantReviewHide()");
        _AyohaMerchantReview.hide(); isAyohaMerchantReviewOpen = 'N'; _AyohaMerchantReview_isFirstLoad = "N";
       
    }
 
}



function AyohaMerchantReview_initializedTapEvent() {
    var containerView = Ext.ComponentQuery.query('container[name=namecontainerAyohaMerchantReview_ReviewCompanyInfo_AddNewReviewPanel]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {
          globalAyohaMerchantReview_ItemCodeReview = 'AyohaStoreReview';
          AyohaMerchantReview_AddEditShow_Add();
          //setDashBoardMerchantReviewRate();
      }
    );
}




var globalAyohaMerchantReview_ItemCodeReview;

function AyohaMerchantReview_AyohaMerchantReviewLoadByEnterpriseAccNoStore() {

    Ext.getStore('AyohaMerchantReviewLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
        EnterpriseAccNo: globalEnterpriseAccNo_AyohaMerchantReview,
        ItemCodeReview: 'AyohaStoreReview'
    });
    Ext.StoreMgr.get('AyohaMerchantReviewLoadByEnterpriseAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaMerchantReviewLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
            EnterpriseAccNo: globalEnterpriseAccNo_AyohaMerchantReview,
            ItemCodeReview: 'AyohaStoreReview'
        });
        _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoStore=Ext.StoreMgr.get('AyohaMerchantReviewLoadByEnterpriseAccNoStore').load();
        var myStore = Ext.getStore('AyohaMerchantReviewLoadByEnterpriseAccNoStore');
        count = myStore.getCount();
        AyohaMerchantReview_AyohaMerchantReview_CalculateRating();
        Ext.Viewport.setMasked(false);

      

    });
    task.delay(500);


}


var FiveStar;
var FourStar;
var ThreeStar;
var TwoStar;
var OneStar;
var TotalStar;
var TotalVoter;
var VoteFiveStar;
var VoteFourStar;
var VoteThreeStar;
var VoteTwoStar;
var VoteOneStar;
var globalAyohaMerchantReview_Star;
function AyohaMerchantReview_AyohaMerchantReview_CalculateRating() {
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Calculate Rating....' });

    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "EnterpriseAccNo": globalEnterpriseAccNo_AyohaMerchantReview
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewCalculateRating',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    //var newData = JSON.parse(JSON.stringify(result.results.Email))
                    //console.log(result.results.Email);
                    //  //data.results[0];
                    // console.log(data.total);
                    if (data.total > 0) {
                        FiveStar = data.results[0].FiveStar;
                        FourStar = data.results[0].FourStar;
                        ThreeStar = data.results[0].ThreeStar;
                        TwoStar = data.results[0].TwoStar;
                        OneStar = data.results[0].OneStar;
                        TotalStar = data.results[0].TotalStar;
                        TotalVoter = data.results[0].TotalVoter;
                        VoteFiveStar = data.results[0].VoteFiveStar;
                        VoteFourStar = data.results[0].VoteFourStar;
                        VoteThreeStar = data.results[0].VoteThreeStar;
                        VoteTwoStar = data.results[0].VoteTwoStar;
                        VoteOneStar = data.results[0].VoteOneStar;


                        var TotalAvg = (VoteFiveStar + VoteFourStar + VoteThreeStar + VoteTwoStar + VoteOneStar) / TotalVoter;

                        if (TotalAvg) {
                            Ext.getCmp('htmlAyohaMerchantReview_Rate').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 60px;font-weight:bold;color:black;">' + TotalAvg.toFixed(1) + '</div>');

                        } else
                        {
                            Ext.getCmp('htmlAyohaMerchantReview_Rate').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 60px;font-weight:bold;color:black;">0.0</div>');

                        }
                       

                        Ext.getCmp('htmlAyohaMerchantReview_TotalReviews').setHtml('<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalVoter + ' Reviews</div>');

                        var RateReviews = TotalAvg.toFixed(1);

                        globalAyohaMerchantReview_Star = TotalAvg.toFixed(1);
                       

                        if (RateReviews == 5) {
                           
                            Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');


                        }
                        if ((RateReviews >= 4) && (RateReviews < 5)) {
                            Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');


                            if ((RateReviews >= 4.2) && (RateReviews <= 4.4)) {

                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="18" height="18" alt="Company Name"></div>');

                            }
                            if (RateReviews == 4.5) {
                               
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="18" height="18" alt="Company Name"></div>');
                            }
                            if ((RateReviews >= 4.6) && (RateReviews <= 4.8)) {
                               
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="18" height="18" alt="Company Name"></div>');
                            }
                            if (RateReviews == 4.9) {                               
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="18" height="18" alt="Company Name"></div>');
                            }



                        }
                        if ((RateReviews >= 3) && (RateReviews < 4)) {
                            
                            Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');





                            if ((RateReviews >= 3.2) && (RateReviews <= 3.4)) {
                               
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');

                            }
                            if (RateReviews == 3.5) {
                              
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');





                            }
                            if ((RateReviews >= 3.6) && (RateReviews <= 3.8)) {
                               
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            }
                            if (RateReviews == 3.9) {                               
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            }



                        }
                        if ((RateReviews >= 2) && (RateReviews < 3)) {
                          

                            Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');


                            if ((RateReviews >= 2.2) && (RateReviews <= 2.4)) {
                               
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            }
                            if (RateReviews == 2.5) {
                              
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            }
                            if ((RateReviews >= 2.6) && (RateReviews <= 2.8)) {                               
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            }
                            if (RateReviews == 2.9) {                               
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');

                            }





                        }
                        if ((RateReviews >= 1) && (RateReviews < 2)) {
                          
                            Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');

                            if ((RateReviews >= 1.2) && (RateReviews <= 1.4)) {
                               

                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');


                            }
                            if (RateReviews == 1.5) {
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');

                            }
                            if ((RateReviews >= 1.6) && (RateReviews <= 1.8)) {
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            }
                            if (RateReviews == 1.9) {
                                Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            }

                        }
                        if ((RateReviews >= 0) && (RateReviews < 1)) {
                          
                            Ext.getCmp('btnAyohaMerchantReview_Star1').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnAyohaMerchantReview_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');


                        }













                      












                        var task = Ext.create('Ext.util.DelayedTask', function () {

                            setDashBoardMerchantReviewRate();
                        });

                        task.delay(500);





                       // globalAyohaMerchantReviewRating = Math.round(TotalAvg);
                       // globalAyohaMerchantReviewRating = TotalAvg.toFixed(1);
                      


                       // console.log(globalAyohaMerchantReviewRating);
                       // --20 + 8 + 9 + 2 + 1 / 11
                        Ext.Viewport.unmask();
                    }
                    if (data.total == 0) {
                     
                        Ext.Viewport.unmask();

                    }





                }
                else {

                  
                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
            }

        });



    });
   
    //  Ext.Viewport.unmask();

 //   setDashBoardMerchantReviewRate(FiveStar, FourStar, ThreeStar, TwoStar, OneStar);
    task.delay(500);

  
}




function setDashBoardMerchantReviewRate() {


   // google.charts.load('current', { 'packages': ['bar'] });
    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(drawStuff);

    function drawStuff() {

        console.log(FiveStar);



        var data = google.visualization.arrayToDataTable([
        ["Rate", "Count", { role: "style" }],
        ["5", FiveStar, "orange"],
        ["4", FourStar, "orange"],
        ["3", ThreeStar, "orange"],
        ["2", TwoStar, "color: orange"],
         ["1", OneStar, "color: orange"]
        ]);

        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
                         {
                             calc: "stringify",
                             sourceColumn: 1,
                             type: "string",
                             role: "annotation"
                         },
                         2]);

        var options = {
            title: "",
                         width: 320,
                         height: 185,
                         bar: { groupWidth: "80%" },
                         //animation: {
                         //    startup: true,
                         //    duration: 2500,
                         //    easing: 'out'
                         //},
                         vAxis: { minValue: 0 },
                         hAxis: {
                             textStyle: { color: 'transparent' },
                             gridlines: {
                                 color: "transparent"
                             },
                             baselineColor: '#FFFFFF'
                         },
                         vAxis: {
                             //textStyle: { color: '#FFF' ,size:'12px'}
                             title: '',
                             //textStyle: {
                             //    color: "black",
                             //    fontName: "sans-serif",
                             //    fontSize: 12,
                             //    bold: true,
                             //    italic: false
                             //}
                         },
                         animation: {
                             duration: 2500,
                             easing: 'out',
                             startup: false,
                         },
                         legend: { position: "none" }, backgroundColor: 'transparent',
          
        };
        var chart = new google.visualization.BarChart(document.getElementById("barchartAyohaMerchanReview"));
        chart.draw(view, options);



    };


    if (globalAyohaMerchantReview_AddEdit_PostReview_isSave == "Y") {
        AyohaMerchantReview_UpdateEnterpriseCountStar();
    }


}




function AyohaMerchantReview_UpdateEnterpriseCountStar() {
    var objn = {
       
        "EnterpriseAccNo": globalEnterpriseAccNo_AyohaMerchantReview,
        "CountStar": globalAyohaMerchantReview_Star,
    };

 
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/Enterprises/EnterprisesUpdateCountStar',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

               
                globalAyohaMerchantReview_AddEdit_PostReview_isSave = "N";



            }
            else {

                swalFireFail("Fail!" + result.responseText.trim());
                Ext.Viewport.unmask();
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            swalFireFail("Fail!-->" + result.responseText.trim());
            Ext.Viewport.unmask();
        }

    });
}