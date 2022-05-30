Ext.define('ianMizi.view.AyohaReward.FloatPanel_AyohaReward', {

});

var _FloatPanel_AyohaReward;


var isFloatPanel_AyohaRewardOpen = 'N';

var _FloatPanel_AyohaReward_isFirstLoad = "N";









function FloatPanel_AyohaReward() {

    _FloatPanel_AyohaReward =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaRewardID',
         draggable: false,
         zIndex: 200,


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
             type: 'popOut',
             //direction: 'up',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
        // style: 'border-bottom:1px solid;background-color:#353839;',
         // style: 'border-bottom:1px solid;background-color:white;',
       style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
    
         //listeners: {
         //    initialize: function (c) {
         //        this.element.on({
         //            swipe: function (e, node, options) {
         //                //if (e.direction == "up") {
         //                //    FloatPanel_AyohaRewardHide();
         //                //}
         //                if (e.direction == "left") {
         //                    _FloatPanel_AyohaReward.hide(Ext.fx.Animation({
         //                        type: 'slideOut',
         //                        direction: 'left',
         //                        easing: 'cubic-bezier(.7,0,.7,1)',
         //                        duration: 250

         //                    }));
         //                    isFloatPanel_AyohaRewardOpen = 'N';
         //                } if (e.direction == "right") {
         //                    _FloatPanel_AyohaReward.hide(Ext.fx.Animation({
         //                        type: 'slideOut',
         //                        direction: 'right',
         //                        easing: 'cubic-bezier(.7,0,.7,1)',
         //                        duration: 250

         //                    }));
         //                    isFloatPanel_AyohaRewardOpen = 'N';
         //                }

         //            }
         //        });
         //    }
         //},


         items: [




             {
                 xtype: 'container',
                 width: '100%',
                 height: '100%',
               //  style: "background-color: transparent;",
                 style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                // style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
                 layout: {
                     type: 'vbox',
                     pack: 'center',
                     align: 'center'
                 },
                 items: [
                     {

                                 xtype: 'container',
                                 width: '100%',
                                 // width: 40,
                                 //zIndex:-10,
                                 //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                 //hidden: true,
                                 docked: 'top',
                                 id: 'containerFloatPanel_AyohaRewardHeader1',
                                 style: "background-color: transparent;",
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
                                                               id: 'btnFloatPanel_AyohaRewardBack',
                                                               height: 30,
                                                               width: 35,
                                                               margin: '0 0 0 0',
                                                               // iconCls: 'list',
                                                               html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                               ui: 'plain',
                                                               handler: function () {
                                                                   _FloatPanel_AyohaReward.hide(Ext.fx.Animation({
                                                                       type: 'slideOut',
                                                                       direction: 'left',
                                                                       easing: 'cubic-bezier(.7,0,.7,1)',
                                                                       duration: 250

                                                                   }));
                                                                   isFloatPanel_AyohaRewardOpen = 'N';
                                                                   _FloatPanel_AyohaReward_isFirstLoad = "N";
                                                                   RemovePages("FloatPanel_AyohaRewardHide()");
                                                               }
                                                           },

                                                       {
                                                           xtype: 'spacer',

                                                       },

                                                       {
                                                           xtype: 'button',
                                                           margin: '-10 -13 0 0',
                                                           zIndex:100,
                                                           html: '<font size=2 color=white><b>Ayoha Reward</b></font>',
                                                           ui: 'plain',
                                                           handler: function () {
                                                               _FloatPanel_AyohaReward.hide(Ext.fx.Animation({
                                                                   type: 'slideOut',
                                                                   direction: 'right',
                                                                   easing: 'cubic-bezier(.7,0,.7,1)',
                                                                   duration: 250

                                                               }));
                                                               isFloatPanel_AyohaRewardOpen = 'N';
                                                               _FloatPanel_AyohaReward_isFirstLoad = "N";
                                                               RemovePages("FloatPanel_AyohaRewardHide()");
                                                           }
                                                       },

                                             {
                                                 xtype: 'button',
                                                 id: 'btnMyAccount_DashboardBacks',
                                                 height: 30,
                                                 width: 30,
                                                 // iconCls: 'list',
                                                 margin: '-5 3 0 0',
                                                 html: '<div><img src="resources/icons/CloudRewardLogoWhiteSmallOne.png" width="25" height="25" alt="Company Name"></div>',
                                                 ui: 'plain',
                                                 handler: function () {
                                                     _FloatPanel_AyohaReward.hide(Ext.fx.Animation({
                                                         type: 'slideOut',
                                                         direction: 'right',
                                                         easing: 'cubic-bezier(.7,0,.7,1)',
                                                         duration: 250

                                                     }));
                                                     isFloatPanel_AyohaRewardOpen = 'N';
                                                     _FloatPanel_AyohaReward_isFirstLoad = "N";
                                                     RemovePages("FloatPanel_AyohaRewardHide()");
                                                 }
                                             },

                                                               {
                                                                   xtype: 'container',
                                                                   //   margin: '0 0 0 5',
                                                                   hidden: true,
                                                                   //style: 'background-color: white;',
                                                                   style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                                   zIndex: 80,
                                                                   height: 25,
                                                                   width: 70,
                                                                   // margin: '70 0 0 0',
                                                                   id: 'containerFloatPanel_AyohaRewardHaiUser',
                                                                   layout: {

                                                                       type: 'hbox',
                                                                       pack: 'center',
                                                                       align: 'center'
                                                                   },
                                                                   items: [


                                                                       {
                                                                           margin: '0 0 0 0',
                                                                           id: 'htmlFloatPanel_AyohaRewardHaiUser',
                                                                           html: '<font size=2 color=black><b>Hai Mizi!</b></font>'
                                                                       }
                                                                   ]
                                                               },
                                                            {
                                                                xtype: 'container',
                                                                margin: '0 0 0 -5',
                                                                hidden: true,
                                                                // hidden: true,
                                                                //style: 'background-color: white;',
                                                                style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                                                zIndex: 80,
                                                                height: 40,
                                                                width: 40,
                                                                // margin: '70 0 0 0',
                                                                id: 'containerFloatPanel_AyohaRewardPictureUser',
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
                                                                        margin: '0 0 0 -5',
                                                                        id: 'btnFloatPanel_AyohaRewardUserInfo',
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

                     {
                         xtype: 'container',
                         height: 135,
                         //  hidden:true,
                         //flex: 1,
                         // height:'35%',
                         //height: 198,

                        //  height: 173,
                         width: '100%',
                         id: 'containerFloatPanel_AyohaRewardCompanyLogoHeaderMaster',
                         docked: 'top',
                         style: "background-color: transparent;",
                       //   style: 'background-image: url("resources/icons/pointbackdropwhite.png"); background-size: 100% 100%;border-bottom:1px none;border-radius: 20px 20px 20px 20px;',
                         //style: {

                         //    background: 'transparent',

                         //},

                         layout: {
                             type: 'vbox',
                             pack: 'center',
                             align: 'center'

                         },
                         items: [

                             

                             {

                                 xtype: 'container',
                                 margin: '-31 0 0 0',
                                 //width: '100%',
                                 // zIndex: 190,
                                 //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                 //hidden: true,
                                 docked: 'top',
                                 id: 'containerFloatPanel_AyohaRewardCompanyLogoHeader',
                                style: "background-color: transparent;",
                                 //style: {
                                 //    // background: '#D25959',
                                 //    background: 'transparent',
                                 //    // border: '2px'
                                 //},
                            
                                 // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                 layout: {
                                     type: 'vbox',
                                     pack: 'center',
                                     align: 'center',
                                 },
                                 // hidden:true,
                                 items:
                                        [

                                            
                                                 {
                                                     xtype: 'container',
                                                     width: '100%',
                                                     layout: {
                                                         type: 'hbox',
                                                         pack: 'center',
                                                         align: 'center'

                                                     },
                                                     items: [

                                                         {
                                                             width: 16,
                                                             height: 16,
                                                             html: '<div style="margin:30px 0px 0px 40px"><img src="resources/icons/shiningIcon.png" width="16" height="16" alt="Company Name"></div>',
                                                         },
                                                         {
                                                             xtype: 'spacer'
                                                         },
                                                         {
                                                             width: 30,
                                                             height: 30,
                                                             html: '<div style="margin:-5px 0px 0px 20px"><img src="resources/icons/shiningIcon.png" width="30" height="30" alt="Company Name"></div>',
                                                         },
                                                          {
                                                              xtype: 'spacer'
                                                          },
                                                          {
                                                              width: 36,
                                                              height: 36,
                                                              html: '<div style="margin:20px 0px 0px -40px"><img src="resources/icons/shiningIcon.png" width="36" height="36" alt="Company Name"></div>',
                                                          },
                                                         {
                                                             xtype: 'spacer'
                                                         },
                                                         {
                                                             width: 26,
                                                             height: 26,
                                                             html: '<div style="margin:20px 0px 0px -40px"><img src="resources/icons/shiningIcon.png" width="26" height="26" alt="Company Name"></div>',
                                                         },
                                                     ]

                                                 },





                                            {
                                                xtype: 'container',
                                                styleHtmlContent: true,
                                               // hidden:true,
                                                //margin: '-1 0 0 0',
                                                //margin: '20 0 0 -20',
                                               // margin: '-85 0 0 -28',
                                                margin: '-55 0 0 0',
                                                width:'100%',
                                                //zIndex: 90,
                                                style: 'background-color: transparent;',

                                              //  style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 80%;background-repeat: no-repeat;',
                                              //  style: 'border-right:4px none #fac;border-left:4px none #fac;border-bottom:4px none #fac;border-top:2px none #ECF0F1 ;background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;border-radius: 0px 0px 250px 250px;',


                                                //style: 'border-right:4px solid #fac;border-left:4px solid #fac;border-bottom:4px solid #fac;border-top:2px none #ECF0F1 ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 0px 0px 250px 250px;',




                                                //zIndex: 80,
                                                //height: 90,
                                                //width: 90,
                                                // margin: '70 0 0 0',
                                                id: 'containerFloatPanel_AyohaRewardCompanyLogo',
                                                layout: {

                                                    type: 'vbox',
                                                    pack: 'center',
                                                    align: 'center'
                                                },
                                                items: [
                                                 
                                                    {
                                                        //xtype: 'button',
                                                      
                                                        //  width: 150,
                                                     
                                                        margin: '0 0 0 0',
                                                        id: 'htmlFloatPanel_AyohaRewardPointsCollected',
                                                        //badgeText: "2",
                                                       // hidden:true,
                                                        //html: '<div style="margin:3px 0px 0px 0px"><img src="resources/icons/ayohaReward01.gif" width="150" height="150" alt="Company Name"></div>',
                                                        html: '<div style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>2560</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-28px 0px 0px 0px"><b>Ayoha Point</b></div><br>'
                                                    },


                                                   
                                                ]
                                            },


                                             {
                                                 xtype: 'container',
                                                 width: '100%',
                                                 margin: '-30 0 0 0',
                                                 layout: {
                                                     type: 'hbox',
                                                     pack: 'center',
                                                     align: 'center'

                                                 },
                                                 items: [

                                                     {
                                                         width: 46,
                                                         height: 46,
                                                         html: '<div style="margin:-60px 0px 0px 20px"><img src="resources/icons/shiningIcon.png" width="46" height="46" alt="Company Name"></div>',
                                                     },
                                                     {
                                                         xtype: 'spacer'
                                                     },
                                                      {
                                                          width: 36,
                                                          height: 36,
                                                          html: '<div style="margin:-20px 0px 0px -70px"><img src="resources/icons/shiningIcon.png" width="36" height="36" alt="Company Name"></div>',
                                                      },
                                                     {
                                                         width: 30,
                                                         height: 30,
                                                         html: '<div style="margin:-20px 0px 0px 40px"><img src="resources/icons/shiningIcon.png" width="30" height="30" alt="Company Name"></div>',
                                                     },
                                                      {
                                                          xtype: 'spacer'
                                                      },
                                                     {
                                                         width: 20,
                                                         height: 20,
                                                         html: '<div style="margin:-20px 0px 0px -20px"><img src="resources/icons/shiningIcon.png" width="20" height="20" alt="Company Name"></div>',
                                                     },
                                                 ]

                                             },





                                                            {
                                                                margin: '0 0 0 0',
                                                                id: 'htmlFloatPanel_AyohaRewardPointsCollectedx',
                                                                hidden: true,
                                                                html: '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:40px;font-weight:bold;overflow:hidden;text-align:center;vertical-align:middle;word-break:normal;color:white;width:100%;height:110px">1005</div>',

                                                                //  html: '<font size=13 color=black><b>1005</b></font>'
                                                            },
                                                            {
                                                                margin: '-70 0 0 0',
                                                                hidden: true,
                                                                // html: '<font size=2 color=white><b>Ayoha Rewards Points</b></font>'
                                                                html: '<div style="color:white;text-align: center;font-size:12px;width:100%;"><b>Points</b></div>'
                                                            },

                                        ]

                             },


                         ]
                     },
                   //{
                   //    xtype: 'container',
                   //    //  margin: '0 0 0 0',
                   //    // docked: 'bottom',
                   //    style: 'background-color: transparent;',
                   //    //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                   //    zIndex: 80,
                   //    // height: '2%',
                   //    height: 10,
                   //    width: '100%',
                   //    // margin: '70 0 0 0',

                   //    layout: {

                   //        type: 'vbox',
                   //        pack: 'left',
                   //        align: 'left'
                   //    },
                   //    items: [
                   //         {
                   //             margin: '0 0 0 0',
                   //             html: '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;overflow:hidden;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:20px">Redeem Items List</div>',
                   //             //  html: '<font size=13 color=black><b>1005</b></font>'
                   //         },
                   //    ]

                   //},





                    




{
    xtype: 'container',
    id: 'containerFloatPanel_AyohaRewardMasterHeaderTop',
    // hidden:true,
    width: '100%',
    height: 25,
    docked:'top',
    //  zIndex: 90,

    // style: "background-color: transparent;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 20px 20px 0px 0px;",
    // style: 'border-bottom:1px solid #D25959;background-color:transparent',
    //   style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 20px 20px 0px 0px;',
    // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
    style: {
        // background: '#D25959',
        background: 'transparent',
        // border: '2px'
    },
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'

    },
    items: [
        {
            xtype: 'container',
            id: 'containerFloatPanel_AyohaRewardMasterHeader',
            width: '100%',
            height: 25,
            // style: "background-color: white",
            // style: 'border-bottom:1px solid #D25959;background-color:transparent',
            style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
            // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
            //style: "background-color: #F35B57;",

            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'

            },
            items: [

                {
                    width: 20,
                    height: 20,
                    margin: '0 0 0 10',
                    id: 'htmlFloatPanel_AyohaRewardMasterHeaderIcon',
                    html: '<img src="resources/icons/AyohaStorePurple.png" width="20" height="20" alt="Company Name">',
                },
                {
                    //  width: 150,
                    margin: '-5 0 0 5',
                    id: 'htmlFloatPanel_AyohaRewardMasterHeaderTxt',
                    html: '<font size=1 color=black>Redeem Prize</font>'
                },
                {
                    xtype: 'spacer'
                },
                 {
                     xtype: 'button',
                     id: 'btn_FloatPanel_AyohaRewardMasterHeader_Maximize',
                     //  badgeText: '1',
                     margin: '-2 10 0 0',

                     height: 25,
                     width: 25,
                     html: '<img src="resources/icons/maximizepurple.png" width="15" height="15" alt="Company Name">',
                     ui: 'plain',
                     handler: function () {
                         // FloatLoyaltyCardStampShow();
                         // FloatPanel_AyohaReward_MoveCarousel(2);
                         Ext.getCmp('btn_FloatPanel_AyohaRewardMasterHeader_Minimize').setHidden(false);
                         Ext.getCmp('btn_FloatPanel_AyohaRewardMasterHeader_Maximize').setHidden(true);
                         Ext.getCmp('containerFloatPanel_AyohaRewardCompanyLogoHeaderMaster').setHidden(true);
                         var a = adjustHeight() + 135;
                         Ext.getCmp('containerRedeemListItems').setHeight(a);

                         //
                     }
                 },
                   {
                       xtype: 'button',
                       id: 'btn_FloatPanel_AyohaRewardMasterHeader_Minimize',
                       //  badgeText: '1',
                       margin: '-2 10 0 0',
                       hidden:true,
                       height: 25,
                       width: 25,
                       html: '<img src="resources/icons/minimizepurple.png" width="15" height="15" alt="Company Name">',
                       ui: 'plain',
                       handler: function () {
                           // FloatLoyaltyCardStampShow();
                           // FloatPanel_AyohaReward_MoveCarousel(2);
                           Ext.getCmp('btn_FloatPanel_AyohaRewardMasterHeader_Minimize').setHidden(true);
                           Ext.getCmp('btn_FloatPanel_AyohaRewardMasterHeader_Maximize').setHidden(false);


                           Ext.getCmp('containerFloatPanel_AyohaRewardCompanyLogoHeaderMaster').setHidden(false);
                           var a = adjustHeight();
                           Ext.getCmp('containerRedeemListItems').setHeight(a);

                           //
                       }
                   },
                //{
                //    id: 'FloatPanel_AyohaRewardMasterHeader_PointHistorySearchTxt',
                //    margin: '-5 10 0 0',
                //    width: 120,
                //    height: 16,
                //    html: '<input type="text" id="input-RedeemListHistorySearchTxt" placeholder="Search " style="border-color:purple;color:black;width:120px;text-align: center">'
                //}
            ]

        },
    ]
},

{
    xtype: 'container',
    docked: 'top',
    // hidden:true,
    //  margin: '0 0 0 0',
    //  docked: 'bottom',
    style: 'background-color: transparent;',
    id: 'containerRedeemListItems',
    //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
    zIndex: 90,
    //height:200,
    // autoHeight:true,
    // height: '100%',
    // flex:1,
    //  maxHeight:'100%',
    //height:'63%',
    width: '100%',
    // margin: '70 0 0 0',

    layout: {

        type: 'vbox',
        pack: 'center',
        align: 'center'
    },
    items: [
        
        ///////////////////////////////////////////////
        {
            xtype: 'carousel',

            //hidden: true,
            id: 'carouselFloatPanel_AyohaReward',
            style: 'background-color:#f7f7f7',
            width: '100%',
            height: '100%',
            indicator: false,
            listeners: {

                activeitemchange: function (container, newCard, oldCard, index) {
                    // console.log('Current index:' + container.getActiveIndex());
                    console.log("1:" + _FloatPanel_AyohaReward_isFirstLoad);
                    if (_FloatPanel_AyohaReward_isFirstLoad == "Y") {
                        FloatPanel_AyohaReward_MoveCarousel(container.getActiveIndex());
                    }
                   
                    //console.log("1:" + _FloatPanel_MembershipCardList_Upgrade_isFirstLoad);
                    //if (_FloatPanel_MembershipCardList_Upgrade_isFirstLoad == "Y") {
                    //    MoveMembeshipCarousel(CarouselIndex);
                    //}




                },

            },


            margin: '0 0 0 0',
            items: [

                    //{
                    //    style: ' background-color: transparent',
                    //    margin:'0 0 0 0',
                    //    html: '<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">2.Entitle Prevelliages</div>',
                    //},
                    {
                        xtype: 'container',
                        id: 'carouselFloatPanel_AyohaReward_RedeemItem',
                        style: ' background-color: transparent',
                        height: '100%',
                        width: '100%',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'left'

                        },
                        items: [
                            {
                              
                                 
                                     xtype: 'list',
                                     // height: '64%',
                                     height: '100%',
                                     // height: 200,
                                     //   flex: 2,
                                     store: 'AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore',
                                     id: 'List_FloatPanel_AyohaReward_RedeemPrize',
                                     mode: 'SINGLE',
                                     disableSelection: true,

                                //original
                                     itemTpl: '<div class="myContent">' +
                                           '<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:30%" rowspan="2"><img src="{ImgPath}" style="width: 100px; height: 100px; border:1px none white;max-width:100px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:70%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;">Item Name:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemCode}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Entitled Point:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;"><b>{ItemPoint}</b></div><div style="width:100%;text-align:right;margin:-35px 0px 0px 0px;"><button OnClick="AyohaPointCheckRedeemEntitle({ID})" class="buttonLoyaltyCardPointRedeemList">Redeem</button></div></th></tr></thead></table>'    
                                    + '</div>',


                         //            itemTpl: '<div class="myContent">' +
                         // '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">No.{RowNumber}</div>' +
                         // '<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:-30px 0px 0px 0px;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><img src="{ImgPath}"style="width: 100%; height: 300px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3">Redeem Item Name:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Code:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemCode}</div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Point:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{RedeemPoint}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:2px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:100%;" colspan="3">Redeem Status:<br>{ModifiedRedeemHistoryStatus}</td></tr></table>' +
                         // '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-33px 0px 0px 0px;width:100%;text-align:right;color:black;"><button class="buttonStatusLog" onClick="FloatPanel_AyohaRedeemPrizeHistoryLogShow({ID})">Status Log</button></div>' +
                         //'</div>',



                                     width: '100%',
                                     // height: 600,
                                     // height: '100%',

                                     listeners: {


                                         itemdoubletap: function (dataview, index, target, record, e, eOpts) {


                                         },

                                         itemsingletap: function (dataview, index, target, record, e, eOpts) {

                                         }
                                     }





                                
                            },
                        ]

                    },


         ///////////////////////




         {
             xtype: 'container',
             id: 'carouselFloatPanel_AyohaReward_RedeemPrizeHistory',
             style: ' background-color: transparent',
             height: '100%',
             width: '100%',
             layout: {
                 type: 'vbox',
                 pack: 'start',
                 align: 'left'

             },
             items: [
                 {


                     xtype: 'list',
                     // height: '64%',
                     height: '100%',
                     // height: 200,
                     //   flex: 2,
                     store: 'AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByStore',
                     id: 'List_FloatPanel_AyohaReward_RedeemPrizeHistory',
                     mode: 'SINGLE',
                     disableSelection: true,
                     //original
                     itemTpl: '<div class="myContent">' +                   
                      '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">No.{RowNumber}</div>' +
                      '<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:-30px 0px 0px 0px;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><img src="{ImgPath}"style="width: 100%; height: 300px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3">Redeem Item Name:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Code:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemCode}</div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Point:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{RedeemPoint}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:2px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:100%;" colspan="3">Redeem Status:<br>{ModifiedRedeemHistoryStatus}</td></tr></table>' +
                      '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-33px 0px 0px 0px;width:100%;text-align:right;color:black;"><button class="buttonStatusLog" onClick="FloatPanel_AyohaRedeemPrizeHistoryLogShow({ID})">Status Log</button></div>' +
                     '</div>',


                     // itemTpl: '<div class="myContent">' +
                     //       '<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:30%" rowspan="2"><img src="{ImgPath}" style="width: 100px; height: 100px; border:1px none white;max-width:100px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:70%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;">Item Name:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemCode}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Entitled Point:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;"><b>{ItemPoint}</b></div><div style="width:100%;text-align:right;margin:-35px 0px 0px 0px;"><button OnClick="AyohaPointCheckRedeemEntitle({ID})" class="buttonLoyaltyCardPointRedeemList">Redeem</button></div></th></tr></thead></table>'    
                     //+ '</div>',
                     width: '100%',
                     // height: 600,
                     // height: '100%',

                     listeners: {


                         itemdoubletap: function (dataview, index, target, record, e, eOpts) {


                         },

                         itemsingletap: function (dataview, index, target, record, e, eOpts) {

                         }
                     }






                 },
             ]

         },



             ///////////////////////////////////////////////////////
             {
                 xtype: 'container',
                 id: 'carouselFloatPanel_AyohaReward_AyohaPointHistory',
                 style: ' background-color: transparent',
                 height: '100%',
                 width: '100%',
                 layout: {
                     type: 'vbox',
                     pack: 'start',
                     align: 'left'

                 },
                 items: [
                     {


                         xtype: 'list',
                         // height: '64%',
                         height: '100%',
                         // height: 200,
                         //   flex: 2,
                         store: 'AyohaRewardPointLoadBySubscriberAccNoStore',
                         id: 'List_FloatPanel_AyohaReward_AyohaRewardPointHistory',
                         mode: 'SINGLE',
                         disableSelection: true,
                         grouped: true,
                         // disableSelection: true,


                         itemTpl: '<div class="myContent">' +

                         //  '<table style="border-collapse:collapse;border-spacing:0;background-color:#F7FDFA;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><img src="{EnterpriseLogo64}"style="width: 102px; height: 122px; margin-top: 5px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /><br>{EnterpriseName}<br>{EnterpriseAddress}<br></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:center" colspan="2">Subscribtion</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:center" colspan="2">Status</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;vertical-align:top" colspan="2">Cloud Receipts</td><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:center;vertical-align:top" colspan="2">{SubscribedCloudReceipt}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;vertical-align:top" colspan="2">News&amp;Promotions</td><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:center;vertical-align:top" colspan="2">{SubscribedNewsAndPromotion}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><b>Start subscribtion date:{SubscribedDate}</b><br><br></td></tr></table>' +

                           //'<table style="border-collapse:collapse;border-spacing:0;background-color:#F7FDFA;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><img src="{ImgPath}"style="width: 100%; height: 300px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:left" colspan="3">Item Name:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px -2px;">{ItemName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;vertical-align:top" colspan="3">Item Code:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px -2px;">{ItemCode}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;vertical-align:top" colspan="3">Item Point:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px -2px;">{RedeemPoint}</div></td></tr></table>' +

                          //ori //'<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><img src="{ImgPath}"style="width: 100%; height: 300px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:normal;text-align:left" colspan="3">Redeem Item Name:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Code:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemCode}</div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Point:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{RedeemPoint}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:2px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:normal;vertical-align:top;width:100%;" colspan="3">Redeem Status:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{RedeemHistoryStatus} - {RedeemHistoryStatusDate} </div></td></tr></table>' +
                         
                          //  '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:10px 0px 0px 0px;width:100%;text-align:left;color:black;">Redeem ID:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-10px 0px 0px 0px;width:100%;text-align:left;color:black;">{ID}</div></div>' +
                           ///jadi//'<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:-30px 0px 0px 0px;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><img src="{ImgPath}"style="width: 100%; height: 300px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3">Redeem Item Name:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Code:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemCode}</div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Point:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{RedeemPoint}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:2px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:100%;" colspan="3">Redeem Status:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{RedeemHistoryStatus} - {RedeemHistoryStatusDate}</div></td></tr></table>' +
                                                  '<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:0px 0px 0px 0px;"><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3"><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{EnterpriseName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;"><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-1px 0px 0px 0px;">{CreatedDate_DateOnly} {CreatedDate_TimeOnly}</div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-10px 0px 0px 0px;"><b>({AyohaPointType})</b></div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;"><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-6px 0px 0px 0px;text-align:right">{ModifiedTypeCRDB}{AyohaPoint} Point(s)</div></td></tr></table>' +
                                     
                         '</div>',

                         width: '100%',
                         // height: 600,
                         // height: '100%',

                         listeners: {


                             itemdoubletap: function (dataview, index, target, record, e, eOpts) {


                             },

                             itemsingletap: function (dataview, index, target, record, e, eOpts) {

                             }
                         }






                     },
                 ]

             },

             ////////////////////////////////////////////////////















            ]
        },




















        ///////////////////////////////////////////

        ////{
        ////    xtype: 'list',
        ////    // height: '64%',
        ////    height: '100%',
        ////    // height: 200,
        ////    //   flex: 2,
        ////    store: 'AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore',
        ////    id: 'FloatPanel_AyohaRewardID',
        ////    mode: 'SINGLE',
        ////   disableSelection: true,
        ////    // disableSelection: true,


        ////    itemTpl: '<div class="myContent">' +

        ////          '<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:30%" rowspan="2"><img src="{ImgPath}" style="width: 100px; height: 100px; border:1px none white;max-width:100px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:70%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;">Item Name:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemCode}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Entitled Point:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;"><b>{ItemPoint}</b></div><div style="width:100%;text-align:right;margin:-35px 0px 0px 0px;"><button OnClick="FloatPanel_RedeemPrizeShow({ID})" class="buttonLoyaltyCardPointRedeemList">Redeem</button></div></th></tr></thead></table>'
        ////        //'<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:30%" rowspan="2"><img src="http://42.1.63.57/crsuite/resources/icons/RedeemItem/{ItemImg}" style="width: 100px; height: 100px; border:1px none white;max-width:100px;" /></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:70%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;">Item Name:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemCode}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Entitled Point:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;"><b>{ItemPoint}</b></div><div style="width:100%;text-align:right;margin:-35px 0px 0px 0px;"><button OnClick="LoyaltyCardRedeemItem()" class="buttonLoyaltyCardPointRedeemList">Redeem</button></div></th></tr></thead></table>'
        ////     + '</div>',

        ////    width: '100%',
        ////    // height: 600,
        ////    // height: '100%',

        ////    listeners: {


        ////        itemdoubletap: function (dataview, index, target, record, e, eOpts) {


        ////        },

        ////        itemsingletap: function (dataview, index, target, record, e, eOpts) {

        ////        }
        ////    }





        ////},






    ]
},


{

    xtype: 'container',
    width: '100%',
    // width: 40,
    docked: 'bottom',
    height: 55,
    //  title: '<font size="3" color="white">Live Tracking Map</font>',
    //hidden: true,

    id: 'containerFloatPanel_AyohaReward_MenuBottom',
    style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
    //style: {
    //    // background: '#D25959',
    //    background: 'transparent',
    //    // border: '2px'
    //},
    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
    // style: 'border-bottom:2px solid #D25959;background-color:transparent',
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'center',
    },




    // hidden:true,
    items:
           [
               {
                   xtype: 'container',
                   width: '100%',
                   style: "background-color: transparent",
                   height: 55,
                   layout: {
                       type: 'hbox',
                       pack: 'center',
                       align: 'center',
                   },
                   //scrollable: {
                   //    direction: 'horizontal',
                   //    directionLock: false
                   //},
                   items: [


                       {
                           xtype: 'container',
                           //width: 600,
                           //  width: 400,
                           width: '100%',
                           style: "background-color: transparent",
                           height: 55,
                           layout: {
                               type: 'hbox',
                               pack: 'center',
                               align: 'center',
                           },
                           items: [



                               
                              



                         

                         {
                             xtype: 'container',
                             id: 'containerFloatPanel_AyohaReward_MenuBottom_RedeemPrize',
                            
                             //width: '33%',
                             //height: 30,
                             margin: '0 0 0 0',
                             flex: 1,
                             style: "background-color: transparent",
                             //style: "background-color: #F35B57;",

                             layout: {
                                 type: 'vbox',
                                 pack: 'start',
                                 align: 'center'

                             },
                             items: [

                                  {
                                      xtype: 'button',
                                      id: 'btn_FloatPanel_AyohaReward_MenuBottom_RedeemPrize',
                                      //  badgeText: '1',
                                      margin: '0 0 0 0',

                                      height: 36,
                                      width: 36,
                                      html: '<img src="resources/icons/AyohaStorePurple.png" width="26" height="26" alt="Company Name">',
                                      ui: 'plain',
                                      handler: function () {
                                          // FloatPanel_LoyaltyCard_PointHistoryShow();
                                          FloatPanel_AyohaReward_MoveCarousel(0);
                                      }
                                  },
                                  {
                                      xtype: 'container',
                                      id: 'containerFloatPanel_AyohaReward_MenuBottom_RedeemPrizeTxt',
                                      width: '100%',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'start',
                                          align: 'center'

                                      },
                                      items: [
                                          {
                                              margin: '-12 0 0 0',
                                              id: 'htmlFloatPanel_AyohaReward_MenuBottom_RedeemPrizeTxt01',
                                              html: '<font size=1 color=purple><u><b>Redeem</b></u></font>'
                                          },
                                          {
                                              margin: '-12 0 0 0',
                                              id: 'htmlFloatPanel_AyohaReward_MenuBottom_RedeemPrizeTxt02',
                                              html: '<font size=1 color=purple><u><b>Prize</b></u></font>'
                                          },
                                      ]

                                  },


                             ]
                         },

                         {
                             xtype: 'container',
                             id: 'containerFloatPanel_AyohaReward_MenuBottom_RedeemHistory',
                           
                             //width: '33%',
                             //height: 30,
                             margin: '0 0 0 0',
                             flex: 1,
                             style: "background-color: transparent",
                             //style: "background-color: #F35B57;",

                             layout: {
                                 type: 'vbox',
                                 pack: 'start',
                                 align: 'center'

                             },
                             items: [

                                  {
                                      xtype: 'button',
                                      id: 'btn_FloatPanel_AyohaReward_MenuBottom_RedeemHistory',
                                      //badgeText: '2',
                                      margin: '0 0 0 0',

                                      height: 36,
                                      width: 36,
                                      html: '<img src="resources/icons/myredeemption.png" width="26" height="26" alt="Company Name">',
                                      ui: 'plain',
                                      handler: function () {
                                          //  LoyaltyCardRedeemListShow();
                                          FloatPanel_AyohaReward_MoveCarousel(1);
                                      }
                                  },
                                  {
                                      xtype: 'container',
                                      id: 'containerFloatPanel_AyohaReward_MenuBottom_RedeemHistoryTxt',
                                      width: '100%',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'start',
                                          align: 'center'

                                      },
                                      items: [
                                          {
                                              margin: '-12 0 0 0',
                                              id: 'htmlFloatPanel_AyohaReward_MenuBottom_RedeemHistoryTxt01',
                                              html: '<font size=1 color=grey>My</font>'
                                          },
                                          {
                                              margin: '-12 0 0 0',
                                              id: 'htmlFloatPanel_AyohaReward_MenuBottom_RedeemHistoryTxt02',
                                              html: '<font size=1 color=grey>Redemption</font>'
                                          },
                                      ]

                                  },


                             ]
                         },


                             {
                                 xtype: 'container',
                                 id: 'containerFloatPanel_AyohaReward_MenuBottom_AyohaPointHistory',
                                 //width: '33%',
                                 //height: 30,
                                 margin: '0 0 0 0',
                                 flex: 1,
                                 style: "background-color: transparent",
                                 //style: "background-color: #F35B57;",

                                 layout: {
                                     type: 'vbox',
                                     pack: 'start',
                                     align: 'center'

                                 },
                                 items: [

                                      {
                                          xtype: 'button',
                                          id: 'btn_FloatPanel_AyohaReward_MenuBottom_AyohaPointHistory',
                                          //  badgeText: '1',
                                          margin: '0 0 0 0',

                                          height: 36,
                                          width: 36,
                                          html: '<img src="resources/icons/HistoryPurple01.png" width="26" height="26" alt="Company Name">',
                                          ui: 'plain',
                                          handler: function () {
                                              // FloatLoyaltyCardStampShow();
                                              FloatPanel_AyohaReward_MoveCarousel(2);
                                          }
                                      },
                                      {
                                          xtype: 'container',
                                          id: 'containerFloatPanel_AyohaReward_MenuBottom_AyohaPointHistoryTxt',
                                          width: '100%',
                                          layout: {
                                              type: 'vbox',
                                              pack: 'start',
                                              align: 'center'

                                          },
                                          items: [
                                              {
                                                  margin: '-12 0 0 0',
                                                  id: 'htmlFloatPanel_AyohaReward_MenuBottom_AyohaPointHistoryTxt01',
                                                  html: '<font size=1 color=grey>Ayoha Points</font>'
                                              },
                                              {
                                                  margin: '-12 0 0 0',
                                                  id: 'htmlFloatPanel_AyohaReward_MenuBottom_AyohaPointHistoryTxt02',
                                                  html: '<font size=1 color=grey>History</font>'
                                              },
                                          ]

                                      },


                                 ]
                             },







                             {
                                 xtype: 'container',
                                 id: 'containerFloatPanel_AyohaReward_MenuBottom_TransferaAyohaPoint',
                                 //width: '33%',
                                 //height: 30,
                                 margin: '0 0 0 0',
                                 flex: 1,
                                 style: "background-color: transparent",
                                 //style: "background-color: #F35B57;",

                                 layout: {
                                     type: 'vbox',
                                     pack: 'start',
                                     align: 'center'

                                 },
                                 items: [

                                      {
                                          xtype: 'button',
                                          id: 'btn_FloatPanel_AyohaReward_MenuBottom_TransferaAyohaPoint',
                                          //  badgeText: '1',
                                          margin: '0 0 0 0',

                                          height: 36,
                                          width: 36,
                                          html: '<img src="resources/icons/redeemHistorys.png" width="26" height="26" alt="Company Name">',
                                          ui: 'plain',
                                          handler: function () {

                                          }
                                      },
                                      {
                                          xtype: 'container',
                                          id: 'containerFloatPanel_AyohaReward_MenuBottom_TransferaAyohaPointTxt',
                                          width: '100%',
                                          layout: {
                                              type: 'vbox',
                                              pack: 'start',
                                              align: 'center'

                                          },
                                          items: [
                                              {
                                                  margin: '-12 0 0 0',
                                                  id: 'htmlFloatPanel_AyohaReward_MenuBottom_TransferaAyohaPointTxt01',
                                                  html: '<font size=1 color=grey>Transfer</font>'
                                              },
                                              {
                                                  margin: '-12 0 0 0',
                                                  id: 'htmlFloatPanel_AyohaReward_MenuBottom_TransferaAyohaPointTxt02',
                                                  html: '<font size=1 color=grey>Ayoha Point</font>'
                                              },
                                          ]

                                      },


                                 ]
                             },



                             {
                                 xtype: 'container',
                                 id: 'containerFloatPanel_AyohaReward_MenuBottom_CashBack',
                                 //width: '33%',
                                 //height: 30,
                                 margin: '0 0 0 0',
                                 flex: 1,
                                 style: "background-color: transparent",
                                 //style: "background-color: #F35B57;",

                                 layout: {
                                     type: 'vbox',
                                     pack: 'start',
                                     align: 'center'

                                 },
                                 items: [

                                      {
                                          xtype: 'button',
                                          id: 'btn_FloatPanel_AyohaReward_MenuBottom_CashBack',
                                          //  badgeText: '1',
                                          margin: '0 0 0 0',

                                          height: 36,
                                          width: 36,
                                          html: '<img src="resources/icons/cashback01.png" width="26" height="26" alt="Company Name">',
                                          ui: 'plain',
                                          handler: function () {

                                          }
                                      },
                                      {
                                          xtype: 'container',
                                          id: 'containerFloatPanel_AyohaReward_MenuBottom_CashBackTxt',
                                          width: '100%',
                                          layout: {
                                              type: 'vbox',
                                              pack: 'start',
                                              align: 'center'

                                          },
                                          items: [
                                              {
                                                  margin: '-12 0 0 0',
                                                  id: 'htmlFloatPanel_AyohaReward_MenuBottom_CashBackTxt01',
                                                  html: '<font size=1 color=grey>Ayoha Point</font>'
                                              },
                                              {
                                                  margin: '-12 0 0 0',
                                                  id: 'htmlFloatPanel_AyohaReward_MenuBottom_CashBackTxt02',
                                                  html: '<font size=1 color=grey>Cash Back</font>'
                                              },
                                          ]

                                      },


                                 ]
                             },







                           ]

                       },
















                   ]
               },





                          //{
                          //    margin: '0 0 0 0',
                          //    html: '<font size=3 color=white><b>TARMIZI RAHIM</b></font>'
                          //},

                          








           ]

},


                 ]

             },

                        


         ]


     












     });
    return _FloatPanel_AyohaReward;



}



function FloatPanel_AyohaRewardShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaReward);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaReward());
    this.overlay.show();
    isFloatPanel_AyohaRewardOpen = 'Y';
    AddRoutePages("FloatPanel_AyohaRewardHide()");


   // Ext.getCmp('htmlFloatPanel_AyohaRewardPointsCollected').setHtml('<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:40px;font-weight:bold;overflow:hidden;text-align:center;vertical-align:middle;word-break:normal;color:white;width:100%;height:110px">'+ localStorage.getItem("AyohaPoint") +'</div>');
   

    Ext.getCmp('htmlFloatPanel_AyohaRewardPointsCollected').setHtml('<div style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>' + localStorage.getItem("AyohaPoint") + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-38px 0px 0px 0px"><b>Ayoha Point</b></div><br>');


    
    Ext.getCmp('containerRedeemListItems').setHeight(adjustHeight());
    AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore();
   


}





function FloatPanel_AyohaRewardHide() {
    if (isFloatPanel_AyohaRewardOpen == "Y") {
        _FloatPanel_AyohaReward.hide(); isFloatPanel_AyohaRewardOpen = 'N';
        _FloatPanel_AyohaReward_isFirstLoad = "N";
        RemovePages("FloatPanel_AyohaRewardHide()");
    }
   
}


//GetCurrAyohaUserGroupCode()

var _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore;
function AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore() {

    Ext.getStore('AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore').getProxy().setExtraParams({
        AyohaUserGroupCode: GetCurrAyohaUserGroupCode()
    });
    Ext.StoreMgr.get('AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore').getProxy().setExtraParams({
            AyohaUserGroupCode: GetCurrAyohaUserGroupCode()
        });
        _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore=Ext.StoreMgr.get('AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore').load();
        var myStore = Ext.getStore('AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore');
        count = myStore.getCount();
        AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByStore();
        // adjustHeight();
        Ext.Viewport.setMasked(false);
       

    });
    task.delay(500);
}


var _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByStore;
function AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByStore() {

    Ext.getStore('AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByStore').getProxy().setExtraParams({
        RedeemHistoryStatusBy: GetCurrAyohaUserAccountNo()
    });
    Ext.StoreMgr.get('AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByStore').getProxy().setExtraParams({
            RedeemHistoryStatusBy: GetCurrAyohaUserAccountNo()
        });
        _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByStore= Ext.StoreMgr.get('AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByStore').load();
        var myStore = Ext.getStore('AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByStore');
        count = myStore.getCount();
        AyohaRewardPointLoadBySubscriberAccNoStore();
        // adjustHeight();
        Ext.Viewport.setMasked(false);


    });
    task.delay(500);
}






function AyohaRewardPointLoadBySubscriberAccNoStore() {
  
    Ext.getStore('AyohaRewardPointLoadBySubscriberAccNoStore').getProxy().setExtraParams({
        SubscriberAccNo: GetCurrAyohaUserAccountNo()
    });
    Ext.StoreMgr.get('AyohaRewardPointLoadBySubscriberAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaRewardPointLoadBySubscriberAccNoStore').getProxy().setExtraParams({
            SubscriberAccNo: GetCurrAyohaUserAccountNo()
        });
        Ext.StoreMgr.get('AyohaRewardPointLoadBySubscriberAccNoStore').load();
        var myStore = Ext.getStore('AyohaRewardPointLoadBySubscriberAccNoStore');
        count = myStore.getCount();
        _FloatPanel_AyohaReward_isFirstLoad = "Y";
        // adjustHeight();
        Ext.Viewport.setMasked(false);


    });
    task.delay(500);


}


function adjustHeight() {
    //270
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);
    var headerHeight = parseInt(218);
    console.log(y);
    console.log(x);
    // var headerHeight = parseInt(218);
    var adjustedHeight = x - headerHeight;
    var newHeight = adjustedHeight - 33;
    //alert(adjustedHeight);
    //alert(newHeight)
    return newHeight;
   




}







var globalItemPoint;
function AyohaPointCheckRedeemEntitle(val) {

  
    var ItemPoint = _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore.findRecord('ID', val, 0, false, false, true);
   

 
    globalItemPoint = ItemPoint.get('ItemPoint');
 
    var AyohaPoint = localStorage.getItem("AyohaPoint");


   // 10 console.log(globalItemPoint);
    //601 console.log(AyohaPoint);

    if (AyohaPoint >= globalItemPoint) {
        FloatPanel_RedeemPrizeShow(val);
       
    } else {
        Swal.fire({
            title: 'Insufficient Ayoha Point',
            text: "Unable to redeem prize!!",
            showConfirmButton: false,
            imageUrl: "resources/icons/insufficientRedeem.png",
            imageWidth: 300,
            imageHeight: 200,
            //   imageAlt: 'Cloud-Reward Pro v 1.0',
            footer: '<a href>Ayoha Reward v 1.0</a>'
        })
       
       
    }
}





function FloatPanel_AyohaReward_MoveCarousel(Idx) {
  
    console.log(Idx)
    if (Idx == 0) {
        Ext.getCmp('carouselFloatPanel_AyohaReward').setActiveItem(0);      
        Ext.getCmp('htmlFloatPanel_AyohaRewardMasterHeaderIcon').setHtml('<img src="resources/icons/AyohaStorePurple.png" width="20" height="20" alt="Company Name">');
        Ext.getCmp('htmlFloatPanel_AyohaRewardMasterHeaderTxt').setHtml('<font size=1 color=black>Redeem Prize</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemPrizeTxt01').setHtml('<font size=1 color=purple><b><u>Redeem</u></b></font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemPrizeTxt02').setHtml('<font size=1 color=purple><b><u>Prize</u></b></font>');
        //////////////////////////////////////////
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemHistoryTxt01').setHtml('<font size=1 color=grey>My</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemHistoryTxt02').setHtml('<font size=1 color=grey>Redemption</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_AyohaPointHistoryTxt01').setHtml('<font size=1 color=grey>Ayoha Points</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_AyohaPointHistoryTxt02').setHtml('<font size=1 color=grey>History</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_TransferaAyohaPointTxt01').setHtml('<font size=1 color=grey>Transfer</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_TransferaAyohaPointTxt02').setHtml('<font size=1 color=grey>Ayoha Point</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_CashBackTxt01').setHtml('<font size=1 color=grey>Ayoha Point</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_CashBackTxt02').setHtml('<font size=1 color=grey>Cash Back</font>');
    }
    if (Idx == 1) {
        Ext.getCmp('carouselFloatPanel_AyohaReward').setActiveItem(1);
        Ext.getCmp('htmlFloatPanel_AyohaRewardMasterHeaderIcon').setHtml('<img src="resources/icons/myredeemption.png" width="20" height="20" alt="Company Name">');
        Ext.getCmp('htmlFloatPanel_AyohaRewardMasterHeaderTxt').setHtml('<font size=1 color=black>My Redemptions</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemHistoryTxt01').setHtml('<font size=1 color=purple><b><u>My</u></b></font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemHistoryTxt02').setHtml('<font size=1 color=purple><b><u>Redemption</u></b></font>');    
        //////////////////////////////////////////
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemPrizeTxt01').setHtml('<font size=1 color=grey>Redeem</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemPrizeTxt02').setHtml('<font size=1 color=grey>Prize</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_AyohaPointHistoryTxt01').setHtml('<font size=1 color=grey>Ayoha Points</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_AyohaPointHistoryTxt02').setHtml('<font size=1 color=grey>History</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_TransferaAyohaPointTxt01').setHtml('<font size=1 color=grey>Transfer</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_TransferaAyohaPointTxt02').setHtml('<font size=1 color=grey>Ayoha Point</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_CashBackTxt01').setHtml('<font size=1 color=grey>Ayoha Point</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_CashBackTxt02').setHtml('<font size=1 color=grey>Cash Back</font>');
      

    }
    if (Idx == 2) {

        Ext.getCmp('carouselFloatPanel_AyohaReward').setActiveItem(2);
        Ext.getCmp('htmlFloatPanel_AyohaRewardMasterHeaderIcon').setHtml('<img src="resources/icons/HistoryPurple01.png" width="20" height="20" alt="Company Name">');
        Ext.getCmp('htmlFloatPanel_AyohaRewardMasterHeaderTxt').setHtml('<font size=1 color=black>Ayoha Points History</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_AyohaPointHistoryTxt01').setHtml('<font size=1 color=purple><b><u>Ayoha Points</u></b></font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_AyohaPointHistoryTxt02').setHtml('<font size=1 color=purple><b><u>History</u></b></font>');
        //////////////////////////////////////////
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemPrizeTxt01').setHtml('<font size=1 color=grey>Redeem</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemPrizeTxt02').setHtml('<font size=1 color=grey>Prize</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemHistoryTxt01').setHtml('<font size=1 color=grey>My</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemHistoryTxt02').setHtml('<font size=1 color=grey>Redemption</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_TransferaAyohaPointTxt01').setHtml('<font size=1 color=grey>Transfer</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_TransferaAyohaPointTxt02').setHtml('<font size=1 color=grey>Ayoha Point</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_CashBackTxt01').setHtml('<font size=1 color=grey>Ayoha Point</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_CashBackTxt02').setHtml('<font size=1 color=grey>Cash Back</font>');
    }
   

}

