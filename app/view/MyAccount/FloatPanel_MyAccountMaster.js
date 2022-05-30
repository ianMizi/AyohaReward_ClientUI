Ext.define('ianMizi.view.MyAccount.FloatPanel_MyAccountMaster', {

});

var _FloatPanel_MyAccountMaster;


var _FloatPanel_MyAccountMasterisOpen = 'N';











function FloatPanel_MyAccountMaster() {

    _FloatPanel_MyAccountMaster =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         height: '100%',
         width: '100%',
         id: 'FloatPanel_MyAccountMasterID',
         draggable: false,

         indicators: false,

         centered: true,
         //bottom: 64,
         zIndex: 300,
         modal: true,
         hideOnMaskTap: true,
         layout: {
             type: 'fit'
         },
         showAnimation: {
             type: 'popIn',
             duration: 150,
             easing: 'ease-out'
         },
         hideAnimation: {
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
                             _FloatPanel_MyAccountMaster.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             _FloatPanel_MyAccountMasterisOpen = 'N';
                             RemovePages("FloatPanel_MyAccountMasterHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_MyAccountMaster.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             _FloatPanel_MyAccountMasterisOpen = 'N';
                             RemovePages("FloatPanel_MyAccountMasterHide()");
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
                     docked:'top',
                     //  hidden:true,
                     // width: 40,

                     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                     //hidden: true,

                     id: 'containerFloatPanel_MyAccountMasterHeader',
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
                                              id: 'btnFloatPanel_MyAccountMasterBack',
                                              height: 30,
                                              width: 35,
                                              // iconCls: 'list',
                                              html: '<div ><img src="resources/icons/backwhite03.png" width="25" height="20" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {
                                                  _FloatPanel_MyAccountMaster.hide(Ext.fx.Animation({
                                                      type: 'slideOut',
                                                      direction: 'left',
                                                      easing: 'cubic-bezier(.7,0,.7,1)',
                                                      duration: 250

                                                  }));
                                                  _FloatPanel_MyAccountMasterisOpen = 'N';
                                                  RemovePages("FloatPanel_MyAccountMasterHide()");

                                              }
                                          },

                                           {
                                               xtype: 'spacer',

                                           },

                                            {
                                                margin: '0 -5 0 0',
                                                id: 'htmlFloatPanel_MyAccountMaster_TitleHeaderTxt',
                                                html: '<font size=2 color=white><b>My Account</b></font>'
                                            },
                                             
                                              {
                                                  xtype: 'button',
                                                  id: 'btnFloatPanel_MyAccountMaster_TitleHeaderIcon',
                                                  height: 30,
                                                  width: 35,
                                                  // iconCls: 'list',
                                                  html: '<div ><img src="resources/icons/myaccountwhite01.png" width="25" height="20" alt="Company Name"></div>',
                                                  ui: 'plain',
                                                  handler: function () {
                                                      _FloatPanel_MyAccountMaster.hide(Ext.fx.Animation({
                                                          type: 'slideOut',
                                                          direction: 'right',
                                                          easing: 'cubic-bezier(.7,0,.7,1)',
                                                          duration: 250

                                                      }));
                                                      _FloatPanel_MyAccountMasterisOpen = 'N';

                                                      RemovePages("FloatPanel_MyAccountMasterHide()");

                                                  }
                                              },











                            ]

                 },




            {


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'FloatPanel_MyAccountMasterBorderBg',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
               style: ' background-color:transparent;',
              //  style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
               // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                height: '100%',
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },
          
                items: [



                    {
                        width: '120%',
                        margin:'0 0 0 -40',
                        height:250,
                        // height: 300,
                        
    //html: '<div style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);width:100%;height:300px; border-radius: 0px 0px  140px 150px;"/>'
                        html: '<div style="background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);width:100%;height:300px; border-radius: 0px 0px  140px 150px;"/>'
                    },



                {
 
             xtype: 'container',
      width: '90%',
                    height: 350,  
      margin: '-240 0 0 0',   
     style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
      //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
      layout: {
          type: 'hbox',
          pack: 'start',
          align: 'center'
      },

      items: [



          {
              xtype: 'container',
              width: '100%',
             // height: 350,
              margin: '-70 0 0 30',
              style: 'background-color:transparent;',
              //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
              layout: {
                  type: 'hbox',
                  pack: 'start',
                  align: 'center'
              },
              items: [

                  {
                      xtype: 'container',
                      width: '20%',

                      margin: '-140 0 0 0',
                      style: 'background-color:transparent;',
                      //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                      layout: {
                          type: 'vbox',
                          pack: 'start',
                          align: 'left'
                      },
                      items: [
                          {
                              id: 'FloatPanel_MyAccountMaster_PicPicture',
                              height: 95,
                              width: 95,
                              html: '<img src="resources/icons/founderWayang02.jpg" alt="Image" style="width:95px;height:95px;border-radius: 50%;border: 2px solid #ECF0F1;zIndex:400px;margin:0px 0px 0px -10px;">',


                          },

                          {
                              xtype: 'container',
                              width: '100%',
                              style: 'background-color:transparent;',
                              layout: {
                                  type: 'vbox',
                                  pack: 'start',
                                  align: 'right'
                              },
                              items: [
                                    {
                                        id: 'FloatPanel_MyAccountMaster_VerifyIcon',
                                        margin: '-25 -10 0 0',
                                        height: 32,
                                        width: 32,
                                        html: '<img src="resources/icons/NotVerify.png" alt="Image" style="width:32px;height:32px;zIndex:400px;margin:0px 0px 0px 0px;">',


                                    }
                              ]
                          },
                        
                      
                      ]

                  },
                  {
                      xtype: 'container',
                      width: '80%',
                      heigt: 350,

                      margin: '-140 0 0 0',
                      style: 'background-color:transparent;',
                      //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                      layout: {
                          type: 'vbox',
                          pack: 'start',
                          align: 'left'
                      },
                      items: [
                          {
                              id: 'FloatPanel_MyAccountMaster_Hi',
                              margin: '6 0 0 25',
                              height: 20,
                              html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:white;height:20px">Hello !</div>'


                          },

                      {
                          id: 'FloatPanel_MyAccountMaster_AccountName',
                          margin: '0 0 0 25',
                          height: 20,
                          html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:white;height:20px">TARMIZI BIN RAHIM</div>'


                      },


                      //{
                      //    id: 'FloatPanel_MyAccountMaster_AyohaPoint',
                      //    margin: '-1 0 0 30',
                      //    height: 20,
                      //    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:white;height:20px">Tarmizi.Rahim@ianMizi.com</div>'


                      //},
                      {
                          id: 'FloatPanel_MyAccountMaster_AccountNo',
                          margin: '-1 0 0 25',
                          height: 23,
                          html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 11px;font-weight:bold;color:white;height:23px">0133376958-986574</div>'
                          // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:white;height:20px">0133376958-56884548</div>'


                      },

                      //{
                      //    id: 'FloatPanel_MyAccountMaster_VerificationStatusBox',
                      //   name:'nameFloatPanel_MyAccountMaster_VerificationStatusBox',
                      //    margin: '-7 0 0 30',
                      //    width:'70%',
                      //   // height: 20,
                      //    html: '<div  style="width:70%;background-color: orange;text-align:center;border: 1px solid orange;font-size: 11px;font-weight:normal;color:white;height:21px;vertical-align:middle;border-radius: 5px 5px 5px 5px;"><div style="margin:3px 0px 0px 0px;">Not Ayoha Member</div></div>',
                      //},


                       {
                           id: 'FloatPanel_MyAccountMaster_VerificationStatusBox',
                           name: 'nameFloatPanel_MyAccountMaster_VerificationStatusBox',
                           margin: '-7 0 0 25',
                           width: 'auto',
                           // height: 20,
                           html: '<div  style="width:70%;background-color: orange;text-align:center;border: 1px solid orange;font-size: 11px;font-weight:normal;color:white;height:21px;vertical-align:middle;border-radius: 5px 5px 5px 5px;"><div style="margin:3px 0px 0px 0px;">Not Ayoha Member</div></div>',
                       },

                      ]

                  },



              ]
          },


                      
           



      


          
      ]




                },
                {


                    xtype: 'container',
                    width: '90%',
                    height: 600,
                    id:'containerFloatPanel_MyAccountMasterMaster',
                    margin: '-200 0 0 0',
                    //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                    style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 40px 40px 40px 40px;',
                    //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'center'
                    },
                    scrollable: {
                        direction: 'vertical',
                        directionLock: true,
                        indicators: false
                    },
                    items: [


                        {

                            xtype: 'container',
                            width: '95%',
                            height: 60,
                            margin: '10 0 0 0',
                            name: 'nameContainerFloatPanel_MyAccountMaster_EditProfile',
                            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                            style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                            //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center'
                            },
                            items: [
                                {
                                    xtype: 'spacer',
                                    width: 20
                                },
                                {
                                    height: 28,
                                    width: 28,
                                    html: '<img src="resources/icons/editProfile.png" alt="Image" style="width:28px;height:28px;">',
                                },
                                {
                                    xtype: 'spacer',
                                    width: 10
                                },
                                {
                                    id: 'FloatPanel_MyAccountMaster_Menu_EditProfile',
                                    margin: '5 0 0 0',
                                    height: 20,
                                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 14px;font-weight:normal;color:black;height:20px">Edit Profile</div>'
                                },
                                 {
                                     xtype: 'spacer'
                                 },
                                {
                                    id: 'FloatPanel_MyAccountMaster_Menu_EditProfileSign',
                                    margin: '0 0 0 0',
                                    height: 20,
                                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
                                },
                            {
                                xtype: 'spacer',
                                width:20
},
                            ]

                        },
                        {

                            xtype: 'container',
                            width: '95%',
                            height: 60,
                            margin: '10 0 0 0',
                            name:'nameContainerFloatPanel_MyAccountMaster_ManagePassword',
                            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                            style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                            //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center'
                            },
                            items: [
                                {
                                    xtype: 'spacer',
                                    width: 20
                                },
                                {
                                    height: 28,
                                    width: 28,
                                    html: '<img src="resources/icons/managepassword.png" alt="Image" style="width:28px;height:28px;">',
                                },
                                {
                                    xtype: 'spacer',
                                    width: 10
                                },
                                {
                                    id: 'FloatPanel_MyAccountMaster_Menu_ManagePassword',
                                    margin: '5 0 0 0',
                                    height: 20,
                                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 14px;font-weight:normal;color:black;height:20px">Change Password</div>'
                                },
                                 {
                                     xtype: 'spacer'
                                 },
                                {
                                    id: 'FloatPanel_MyAccountMaster_Menu_ManagePasswordSign',
                                    margin: '0 0 0 0',
                                    height: 20,
                                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
                                },
                            {
                                xtype: 'spacer',
                                width: 20
                            },
                            ]

                        },
                        {

                            xtype: 'container',
                            width: '95%',
                            hidden:true,
                            height: 60,
                            margin: '10 0 0 0',
                            name: 'nameContainerFloatPanel_MyAccountMaster_AccountVerification',
                            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                            style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                            //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center'
                            },
                            items: [
                                {
                                    xtype: 'spacer',
                                    width: 20
                                },
                                {
                                    height: 28,
                                    width: 28,
                                    html: '<img src="resources/icons/AccountVerification.png" alt="Image" style="width:28px;height:28px;">',
                                },
                                {
                                    xtype: 'spacer',
                                    width: 10
                                },
                                {
                                    id: 'FloatPanel_MyAccountMaster_Menu_AccountVerification',
                                    margin: '5 0 0 0',
                                    height: 20,
                                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 14px;font-weight:normal;color:black;height:20px">Account Verification</div>'
                                },
                                 {
                                     xtype: 'spacer'
                                 },
                                {
                                    id: 'FloatPanel_MyAccountMaster_Menu_AccountVerificationSign',
                                    margin: '0 0 0 0',
                                    height: 20,
                                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
                                },
                            {
                                xtype: 'spacer',
                                width: 20
                            },
                            ]

                        },
                        {

                            xtype: 'container',
                            width: '95%',
                            height: 60,
                            margin: '10 0 0 0',
                            name: 'nameContainerFloatPanel_MyAccountMaster_TermAndCondition',
                            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                            style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                            //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center'
                            },
                            items: [
                                {
                                    xtype: 'spacer',
                                    width: 20
                                },
                                {
                                    height: 28,
                                    width: 28,
                                    html: '<img src="resources/icons/TermAndCondition.png" alt="Image" style="width:28px;height:28px;">',
                                },
                                {
                                    xtype: 'spacer',
                                    width: 10
                                },
                                {
                                    id: 'FloatPanel_MyAccountMaster_Menu_TermAndCondition',
                                    margin: '5 0 0 0',
                                    height: 20,
                                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 14px;font-weight:normal;color:black;height:20px">Term And Conditions</div>'
                                },
                                 {
                                     xtype: 'spacer'
                                 },
                                {
                                    id: 'FloatPanel_MyAccountMaster_Menu_TermAndConditionSign',
                                    margin: '0 0 0 0',
                                    height: 20,
                                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
                                },
                            {
                                xtype: 'spacer',
                                width: 20
                            },
                            ]

                        },
                            {

                                xtype: 'container',
                                width: '95%',
                                height: 60,
                                margin: '10 0 0 0',
                                //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                                name: 'nameContainerFloatPanel_MyAccountMaster_LogOut',
                                //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                                layout: {
                                    type: 'hbox',
                                    pack: 'center',
                                    align: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'spacer',
                                        width: 20
                                    },
                                    {
                                        height: 28,
                                        width: 28,
                                        html: '<img src="resources/icons/logoutPurpleOne.png" alt="Image" style="width:28px;height:28px;">',
                                    },
                                    {
                                        xtype: 'spacer',
                                        width: 10
                                    },
                                    {
                                        id: 'FloatPanel_MyAccountMaster_Menu_LogOut',
                                        margin: '5 0 0 0',
                                        height: 20,
                                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 14px;font-weight:normal;color:black;height:20px">LogOut</div>'
                                    },
                                     {
                                         xtype: 'spacer'
                                     },
                                    {
                                        id: 'FloatPanel_MyAccountMaster_Menu_LogOutSign',
                                        margin: '0 0 0 0',
                                        height: 20,
                                        html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
                                    },
                                {
                                    xtype: 'spacer',
                                    width: 20
                                },
                                ]

                            },

                        {

                            xtype: 'container',
                            width: '100%',
                            height: 150,
                            margin: '0 0 0 0',
                            docked:'bottom',
                            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                            style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none black ;background: transparent;',
                          //  style: 'background: transparent;',
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'center'
                            },
                            items: [
                               
                                {
                                    height: 110,
                                    width: 110,
                                    margin:'0 0 0 -10',
                                    //html: '<img src="resources/icons/ayohaReward01.gif" alt="Image" style="width:110px;height:110px;">',
                                    html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" alt="Image" style="width:110px;height:110px;">',
                                },
                               
                                {
                                    id: 'FloatPanel_MyAccountMaster_Menu_AyohaRewardv',
                                    margin: '0 0 0 0',
                                   // height: 20,
                                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:normal;color:black;">Ayoha Reward v 1.0</div>'
                                },
                                {
                                    id: 'FloatPanel_MyAccountMaster_Menu_DevBy',
                                    margin: '0 0 0 0',
                                    // height: 20,
                                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 9px;font-weight:normal;color:black;">We Double Your Reward!</div>'
                                },
                                
                            ]

                        }

                    ]

                }



                ]


            },









             ]




       







     });
    return _FloatPanel_MyAccountMaster;





}

function FloatPanel_MyAccountMasterShow() {

    Ext.Viewport.remove(_FloatPanel_MyAccountMaster);
    this.overlay = Ext.Viewport.add(FloatPanel_MyAccountMaster());
    this.overlay.show();
    _FloatPanel_MyAccountMasterisOpen = 'Y';
    ArrappRoute.length = 0;
    ArrappRouteCheckVal.length = 0;
    console.log(ArrappRoute);
    AddRoutePages("FloatPanel_MyAccountMasterHide()");
    FloatPanel_MyAccountMasterAdjustHeight();
    var containerView1 = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_EditProfile]')[0];
    var containerViewEl1 = containerView1.element;
    containerViewEl1.on('tap',
      function (event, node, options, eOpts) {

          SingleTap_Open_EditProfile();

      }
    );


    var containerView2 = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_ManagePassword]')[0];
    var containerViewEl2 = containerView2.element;
    containerViewEl2.on('tap',
      function (event, node, options, eOpts) {

          SingleTap_Open_ManagePassword();

      }
    );




    var containerView3 = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_LogOut]')[0];
    var containerViewEl3 = containerView3.element;
    containerViewEl3.on('tap',
      function (event, node, options, eOpts) {
          //FloatPanel_MyAccountMasterHide();
          //Ext.getCmp('mainView').setActiveItem(0);
          //VIAAdvertismentAutoSlideReset();
          LogOuting();

      }
    );


    var containerViewnameContainerFloatPanel_MyAccountMaster_TermAndCondition = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_TermAndCondition]')[0];
    var containerViewElnameContainerFloatPanel_MyAccountMaster_TermAndCondition = containerViewnameContainerFloatPanel_MyAccountMaster_TermAndCondition.element;
    containerViewElnameContainerFloatPanel_MyAccountMaster_TermAndCondition.on('tap',
      function (event, node, options, eOpts) {
          getPlayerIDS();

      }
    );

    var containerViewnameContainerFloatPanel_MyAccountMaster_AccountVerification = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_MyAccountMaster_AccountVerification]')[0];
    var containerViewElnameContainerFloatPanel_MyAccountMaster_AccountVerification = containerViewnameContainerFloatPanel_MyAccountMaster_AccountVerification.element;
    containerViewElnameContainerFloatPanel_MyAccountMaster_AccountVerification.on('tap',
      function (event, node, options, eOpts) {
          setSubscription();

      }
    );

    
    var containerViewnameFloatPanel_MyAccountMaster_VerificationStatusBox = Ext.ComponentQuery.query('container[name=nameFloatPanel_MyAccountMaster_VerificationStatusBox]')[0];
    var containerViewElnameFloatPanel_MyAccountMaster_VerificationStatusBox = containerViewnameFloatPanel_MyAccountMaster_VerificationStatusBox.element;
    containerViewElnameFloatPanel_MyAccountMaster_VerificationStatusBox.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AccountVerifiedShow();

      }
    );

    
    

    var val = GetCurrAyohaUserAccountNo().split('-');
    var id = val[1] + '-' + val[2];
    var id_Ext = val[2];
    var isUserVerified = GetAyohaUserisUserVerified();


    Ext.getCmp('FloatPanel_MyAccountMaster_PicPicture').setHtml('<img src="' + GetAyohaUserPicProfile() + '" alt="Image" style="width:95px;height:95px;border-radius: 50%;border: 2px solid #ECF0F1;zIndex:400px;margin:0px 0px 0px -10px;">');
    Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 16px;font-weight:bold;color:white;height:20px">' + GetAyohaUserAccountNames() + '</div>');
    console.log(GetAyohaUserAccountNames().length);

    if (GetAyohaUserAccountNames().length > 24) {

        
        Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHeight(38);
        Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 16px;font-weight:bold;color:white;height:38px">' + GetAyohaUserAccountNames() + '</div>');
    }

   
    Ext.getCmp('FloatPanel_MyAccountMaster_AccountNo').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 11px;font-weight:bold;color:white;height:23px">' + id + '</div>');



    if (isUserVerified == "NO") {
        Ext.getCmp('FloatPanel_MyAccountMaster_AccountNo').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 11px;font-weight:bold;color:orange;height:23px">Not Ayoha Member</div>');
        Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<img src="resources/icons/NotVerify.png" alt="Image" style="width:32px;height:32px;zIndex:400px;margin:0px 0px 0px 0px;">');
        Ext.getCmp('FloatPanel_MyAccountMaster_VerificationStatusBox').setHtml('<div class="blink_me" style="width:auto;background-color: orange;text-align:center;border: 1px solid orange;font-size: 11px;font-weight:normal;color:white;height:21px;vertical-align:middle;border-radius: 5px 5px 5px 5px;padding:0px 15px;"><div style="margin:3px 0px 0px 0px;">Be Ayoha Member !</div></div>');
       



    }
    if (isUserVerified == "YES") {
        Ext.getCmp('FloatPanel_MyAccountMaster_AccountNo').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 11px;font-weight:bold;color:white;height:23px">' + localStorage.getItem("AccountNoDisplay") + '</div>');

        Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 16px;font-weight:bold;color:white;height:20px">' + GetAyohaUserAccountNames() + '</div>');
        if (GetAyohaUserAccountNames().length > 24) {
            Ext.getCmp('FloatPanel_MyAccountMaster_AccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 16px;font-weight:bold;color:white;height:38px">' + GetAyohaUserAccountNames() + '</div>');
        }
       

        if (localStorage.getItem("AyohaMember_Rank") == "Black Iron") {
           // Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/Starter.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
            Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/blackIron.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');


        }
        if (localStorage.getItem("AyohaMember_Rank") == "Bronze") {
           // Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/nomembercard.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
            Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/Bronze.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');

        }
        if (localStorage.getItem("AyohaMember_Rank") == "Silver") {
           // Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/vip.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
            Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/Silver.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');

        }
        if (localStorage.getItem("AyohaMember_Rank") == "Gold") {
           // Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/vvip.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
            Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/Gold.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');

        }
        if (localStorage.getItem("AyohaMember_Rank") == "Platinum") {
            //Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/goldmember.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
            Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/Platinum.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');

        }

        if (localStorage.getItem("AyohaMember_Rank") == "King Club") {
            //Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/kingclubIcon.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');
            Ext.getCmp('FloatPanel_MyAccountMaster_VerifyIcon').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:38px;height:38px;background-color:white;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/kingclubIcon.png" alt="Image" style="width:26px;height:26px;zIndex:400px;margin:5px 0px 0px 6px;background-color:white;"></div>');

        }






       
        //Ext.getCmp('FloatPanel_MyAccountMaster_VerificationStatusBox').setHtml('<div style="width:60%;background-image: linear-gradient(#c800ffc9,#ff00de75);background-color: #fac;text-align:center;border: 1px solid #fac;font-size: 11px;font-weight:bold;color:white;height:21px;vertical-align:middle;border-radius: 5px 5px 5px 5px;"><div style="margin:3px 0px 0px 0px;">Ayoha Member</div></div>');
      



        Ext.getCmp('FloatPanel_MyAccountMaster_VerificationStatusBox').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="width:auto;background-image: linear-gradient(#c800ffc9,#ff00de75);background-color: #fac;text-align:left;border: 1px solid #fac;font-size: 11px;font-weight:bold;color:white;height:21px;vertical-align:middle;border-radius: 5px 5px 5px 5px;margin:-15px 0px 0px 0px;padding:3px 10px;"><div style="margin:0px 0px 0px 0px;">Ranking : ' + localStorage.getItem("AyohaMember_Rank") + '</div></div>');
       
    }
}


function FloatPanel_MyAccountMasterHide() {

    if (_FloatPanel_MyAccountMasterisOpen == 'Y') {
        _FloatPanel_MyAccountMaster.hide(); _FloatPanel_MyAccountMasterisOpen = 'N';
      //  FloatPanel_AyohaeWallet_IconHide();
        RemovePages("FloatPanel_MyAccountMasterHide()");
    }
   
}


function LogOuting() {
    FloatPanel_MyAccountMasterHide();
    localStorage.clear();
   
    // window.location.reload();
    Ext.getCmp('mainView').setActiveItem(0);
    // Ext.getCmp('mainView').setActive(0);
}

function SingleTap_Open_EditProfile() {

    FloatPanel_SubscriberMasterShow();
    Ext.getCmp('htmlFloatPanel_SubscriberMaster_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Edit Profile</b></font>');
   // Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(1);
}

function SingleTap_Open_ManagePassword() {

    FloatPanel_SubscriberMasterShow();

   
    Ext.getCmp('htmlFloatPanel_SubscriberMaster_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Change Password</b></font>');
    Ext.getCmp('btnFloatPanel_SubscriberMaster_TitleHeaderIcon').setHtml('<div ><img src="resources/icons/changePasswordWhite01.png" width="25" height="20" alt="Company Name"></div>');
    Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(1);
}

function FloatPanel_MyAccountMasterAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);

    var adjust = x - 212;
    //var headerHeight = parseInt(251);
    ////alert(y);
    ////alert(x);
   
    //var adjustedHeight = x - headerHeight;
    ////var newHeight = adjustedHeight - 99;
    //var newHeight = adjustedHeight - 83;

    //alert(newHeight)

    Ext.getCmp('containerFloatPanel_MyAccountMasterMaster').setHeight(adjust);
    //Ext.getCmp('containerFloatLoyaltyCardPointMaster').setHeight(newHeight);






}