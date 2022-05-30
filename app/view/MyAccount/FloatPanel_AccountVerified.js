Ext.define('ianMizi.view.MyAccount.FloatPanel_AccountVerified', {
    requires: [
      'Ext.util.DelayedTask'
    ],
});

var _FloatPanel_AccountVerified;


var isFloatPanel_AccountVerifiedOpen = 'N';





function FloatPanel_AccountVerified() {

    _FloatPanel_AccountVerified =
     Ext.create('Ext.Panel', {
         zIndex: 380,
         xtype: 'container',
         // height: '50%',
         width: '90%',
         height: 400,
         //width: 280,
         id: 'LoadingFloatPanel_AccountVerifiedID',
         name: 'nameFloatPanel_AccountVerifiedID',
         draggable: false,
         requires: [
      'Ext.util.DelayedTask'
         ],


         centered: true,
         //bottom: 64,         
         modal: true,
         // hideOnMaskTap: true,
         layout: {
             type: 'fit'
         },
         showAnimation: {
             type: 'popIn',
             duration: 150,
             easing: 'ease-out'
         },
         hideAnimation: {
             //type: 'slideOut',
             //direction: 'down',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250

             type: 'popOut',
             duration: 150,
             easing: 'ease-out'
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
                             _FloatPanel_AccountVerified.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AccountVerifiedOpen = 'N';
                             RemovePages("FloatPanel_AccountVerifiedHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_AccountVerified.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AccountVerifiedOpen = 'N';
                             RemovePages("FloatPanel_AccountVerifiedHide()");
                         }
                        
                     },



                 }



                 );

             },



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
                id: 'FloatPanel_AccountVerifiedBorderBg',
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

                             id: 'containerFloatPanel_AccountVerifiedHeader',
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
                                                      id: 'btnFloatPanel_AccountVerifiedBack',
                                                      height: 30,
                                                      width: 35,
                                                      // iconCls: 'list',
                                                      html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                      ui: 'plain',
                                                      handler: function () {

                                                          _FloatPanel_AccountVerified.hide(Ext.fx.Animation({
                                                              type: 'slideOut',
                                                              direction: 'left',
                                                              easing: 'cubic-bezier(.7,0,.7,1)',
                                                              duration: 250

                                                          }));
                                                          isFloatPanel_AccountVerifiedOpen = 'N';
                                                          RemovePages("FloatPanel_AccountVerifiedHide()");

                                                      }
                                                  },

                                                  {
                                                      xtype: 'spacer'
                                                  },


                                                   {
                                                       margin: '0 0 0 0',
                                                       id: 'htmlFloatPanel_AccountVerified_TitleHeaderTxt',
                                                       //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                                       html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Membership Verification</div><br><div  style="width:60%;background-color: orange;text-align:center;border: 1px solid orange;font-size: 11px;font-weight:normal;color:white;height:21px;vertical-align:middle;border-radius: 5px 5px 5px 5px;margin:-23px 0px 0px 65px;"><div style="margin:3px 0px 0px 0px;">Not Ayoha Member</div></div>',

                                                       //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                                   },

                                            {
                                                xtype: 'button',

                                                //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                                height: 40,
                                                width: 40,
                                                // iconCls: 'list',
                                                id: 'btnFloatPanel_AccountVerified_PicProfile',
                                                html: '<div ><img src="resources/icons/AccountVerification.png" width="30" height="30" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    _FloatPanel_AccountVerified.hide(Ext.fx.Animation({
                                                        type: 'slideOut',
                                                        direction: 'right',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));

                                                    isFloatPanel_AccountVerifiedOpen = "N";
                                                    RemovePages(_FloatPanel_AccountVerified, "isFloatPanel_AccountVerifiedOpen");
                                                }
                                            },












                                    ]

                         },


                       
                   {
                       xtype: 'tabpanel',
                       id: 'tabpanelFloatPanel_AccountVerified',
                       width: '100%',
                       height: '100%',
                       tabBarPosition: 'top',
                       ui: 'plain',
                       initialize: function (c) {
                           //this.getTabBar().hide();


                       },



                       items: [


                           {
                               xtype: 'container',
                               id: 'containerFloatPanel_AccountVerified_GetVerifiedCode',
                               width: '100%',
                               height: '94%',
                               //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                               style: "background-color: transparent;",
                               //style: "background-color: #F35B57;",
                               title: 'FloatPanel_AccountVerified_GetVerifiedCode',

                               layout: {
                                   type: 'vbox',
                                   pack: 'center',
                                   align: 'center'

                               },
                               scrollable: {
                                   direction: 'vertical',
                                   directionLock: true,
                                   indicators: false
                               },


                               items: [


                                   {
                                       width: '100%',
                                       margin: '20 0 0 0',
                                       id:'htmlFloatPanel_AccountVerified_Txt',
                                       html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:normal;">We will send a membership verification code thru SMS. Please make sure your phone no<font size=3 class="blink_me"><b> 0133376958</b> </font>is correct.</div>'
                                   },


                                    {

                                        margin: '60 0 0 0',
                                        width: '100%',
                                        html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="FloatPanel_AccountVerified_VerifyCode()" class="buttonLogin" style="margin:0px 0px 0px 0px;">Get Verification Code</button></div>'
                                        //html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="loadAyohaUserProfile()" class="buttonLogin" style="margin:0px 0px 0px 0px;">Login</button></div>'
                                    },











                               ]

                           },
   





   {
       xtype: 'container',
       id: 'containerFloatPanel_AccountVerified_VerifiedCode',
       width: '100%',
       height: '94%',
       //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
       style: "background-color: transparent;",
       //style: "background-color: #F35B57;",
       title: 'FloatPanel_AccountVerified_VerifiedCode',
   
       layout: {
           type: 'vbox',
           pack: 'center',
           align: 'center'

       },
       scrollable: {
           direction: 'vertical',
           directionLock: true,
           indicators: false
       },

       items: [





           
             {
                 width: '100%',
                 margin: '40 0 0 0',
                 html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:normal;">A verification code has been sent to your mobile phone. Please check your message inbox!</div>'
             },

             {
                 margin: '50 0 0 0',
                 width: '80%',
                 //  height: 20,
                 html: '<input type="number" id="input-FloatPanel_AccountVerified_Code"  style="border-color:grey;color:grey;width:100%;text-align: center;font-size:16px;font-weight:bold;" placeHolder="key in verification code here" >'
             },
                                    {

                                        margin: '20 0 0 0',
                                        width: '100%',
                                        html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="FloatPanel_AccountVerified_verifiedCode()" class="buttonLogin" style="margin:0px 0px 0px 0px;">Verify Code</button></div>'
                                        //html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="loadAyohaUserProfile()" class="buttonLogin" style="margin:0px 0px 0px 0px;">Login</button></div>'
                                    },











       ]

   },













































                       ]

                       //}
                   },










  {

      xtype: 'container',
      width: '100%',
      docked: 'bottom',
     // hidden:true,
      height: 90,
      // width: 40,
      style: ' background-color:transparent;',
      //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
      //  title: '<font size="3" color="white">Live Tracking Map</font>',
      //hidden: true,

      id: 'containerFloatPanel_AccountVerifiedFooter',
      //style: {
      //    // background: '#D25959',
      //    background: 'transparent',
      //    // border: '2px'
      //},
      //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
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
                     width: '100%',
                     hidden:true,
                     margin:'0 0 0 30',
                     height:1,
                     html: '<div style="width:80%;background-color: grey;text-align:center;border: 1px solid grey;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;margin:0px 0px 0px 0px;height:1px;"></div>',

                 },


                        

                            {
                                margin: '0 0 0 0',
                                id: 'htmlFloatPanel_AccountVerified_CountLoveTxt',
                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:white;margin:4px 0px 0px 0px"><img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/></div>',

                                //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                            },














             ]

  },



                ]


            },



             ]




         }







     });
    return _FloatPanel_AccountVerified;





}



function FloatPanel_AccountVerifiedShow() {

    
   

    if (GetAyohaUserisUserVerified() == "YES")
    {
        return;
    }

    Ext.Viewport.remove(_FloatPanel_AccountVerified);
    this.overlay = Ext.Viewport.add(FloatPanel_AccountVerified());
    this.overlay.show();
    AddRoutePages("FloatPanel_AccountVerifiedHide()");
    Ext.getCmp('tabpanelFloatPanel_AccountVerified').getTabBar().hide();
    isFloatPanel_AccountVerifiedOpen = 'Y';
   // FloatPanel_AyohaStore_AyohaStoreSaleItemloadItemCategory();

   // var telno = document.getElementById("input-FloatPanel_SubscriberMasterPhoneNo").value;

    Ext.getCmp('htmlFloatPanel_AccountVerified_Txt').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:normal;">We will send a membership verification code thru SMS. Please make sure your phone no <font size=4 class="blink_me"><b> ' + GetCurrentPhoneNumber() + ' </b> </font>is correct.</div>');
    //Ext.getCmp('btnFloatPanel_AccountVerified_PicProfile').setHtml('<div ><img src="' + FloatPanel_AyohaStore_getEnterpriseLogo() + '" width="30" height="30" alt="Company Name"></div>');







}










function FloatPanel_AccountVerifiedHide() {
    if (isFloatPanel_AccountVerifiedOpen == 'Y') {
        _FloatPanel_AccountVerified.hide(); isFloatPanel_AccountVerifiedOpen = 'N';
        RemovePages("FloatPanel_AccountVerifiedHide()");
    }
}






function FloatPanel_AccountVerified_VerifyCode() {

    LoadingPanelShow("resources/icons/sms.gif", "Sending SMS...");
   
    var task = Ext.create('Ext.util.DelayedTask', function () {
        var objn = {
            "AccountNo": GetCurrAyohaUserAccountNo(),
            "PhoneNo": GetCurrentPhoneNumber(),
            "LoginOS": localStorage.getItem('device_platform'),
            "LoginIP": localStorage.getItem('device_ip'),
            "PhoneModel": localStorage.getItem('device_model'),
            "PhoneImeiNo": localStorage.getItem('device_uuid'),
            "PhoneVersion": localStorage.getItem('device_version'),
            "PhonePlatform": localStorage.getItem('device_platform'),
            "PhonePlatformVersion": localStorage.getItem('device_version'),
            "PhoneManufacturer": localStorage.getItem('device_manufacturer'),
            "PhoneSerial": GetCurrentdeviceserial(),
            "RawPhoneInfo": localStorage.getItem('SimInfo'),
            "PlayerID": localStorage.getItem('player_id'),
        };
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/SMS/AyohaUserProfileGetVerifyString',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {
                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    if (data.total > 0) {
                      
                        var isAllowedSendSMS = data.results[0].isAllowedSendSMS;
                        if (isAllowedSendSMS == "NotAllowed") {
                            swalFireFail("You have been exceeded maximum 2 times Send Verify Code in a day,Try next day!");
                            LoadingPanelHide();
                            Ext.Viewport.unmask();
                            return;

                        } if (isAllowedSendSMS == "Allowed") {
                            Ext.getCmp('tabpanelFloatPanel_AccountVerified').setActiveItem(1);
                            LoadingPanelHide();

                        }



                        //  FloatPanel_ForgotPasswordSendEmail_Sending();


                    }
                   
                    //swalFireGeneralMessaging("Account Verified Succesfully!", "resources/icons/checkmark.gif")
                    //localStorage.setItem('AyohaUserisUserVerified', "YES");
                    //FloatPanel_SubscriberMasterHide();
                    //FloatPanel_MyAccountMasterHide();
                    //FloatPanel_AccountVerifiedHide();

                }
                else {

                    swalFireFail("Send SMS Failed!");
                    LoadingPanelHide();
                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
                LoadingPanelHide();
                swalFireFail("Send SMS Failed!" + result.responseText.trim());

            }

        });
    });

    task.delay(1000);



   
}





function FloatPanel_AccountVerified_verifiedCode() {
   
    var val = document.getElementById("input-FloatPanel_AccountVerified_Code").value;

    if (val) {


        if (val == GetCurrAyohaUserVerifiedString()) {
            FloatPanel_AccountVerified_VerifiedUser();
        } else {
            swalFireWarning("Verification code not match!");
        }

    } else {
        swalFireWarning("Verification code not valid!");
    }

}

function FloatPanel_AccountVerified_VerifiedUser() {

    var task = Ext.create('Ext.util.DelayedTask', function () {
        var objn = {
            "AccountNo": GetCurrAyohaUserAccountNo(),
        };
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileVerifyString',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {
                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    
                    swalFireGeneralMessaging("Account Verified Succesfully!", "resources/icons/checkmark.gif")
                    localStorage.setItem('AyohaUserisUserVerified', "YES");
                    FloatPanel_SubscriberMasterHide();
                    FloatPanel_MyAccountMasterHide();
                    FloatPanel_AccountVerifiedHide();
                    var AccountNoDisplay = GetCurrAyohaUserAccountNo().split('-');
                    localStorage.setItem('AccountNoDisplay', AccountNoDisplay[1] + '-' + AccountNoDisplay[2]);
                    localStorage.setItem('AyohaUserVerifiedString', "YES");
                    var AccNameDisplay = localStorage.getItem('AyohaUserAccountNameDisplay');

                    Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Hello!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 16px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">' + AccNameDisplay.toLowerCase() + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:bold;color:black;margin:-27px 0px 0px 0px">' + AccountNoDisplay[1] + '-' + AccountNoDisplay[2] + '</div>');

                }
                else {

                    swalFireFail("Verified Failed!");
                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
                swalFireFail("Verified Failed!" + result.responseText.trim());

            }

        });
    });

    task.delay(1000);
}