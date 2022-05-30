
Ext.define('ianMizi.view.Subscriber.FloatPanel_SubscriberMaster', {

});

var _FloatPanel_SubscriberMaster;


var isFloatPanel_SubscriberMasterOpen = 'N';






function FloatPanel_SubscriberMaster() {

    _FloatPanel_SubscriberMaster =
    Ext.create('Ext.Panel', {
        zIndex: 350,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_SubscriberMasterID',
        draggable: false,
        indicators: false,
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
            type: 'popOut',
            //direction: 'up',
            //easing: 'cubic-bezier(.7,0,.7,1)',
            duration: 250
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
        // style: 'border-bottom:1px solid;background-color:white;',
        //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
    

        items: [



            {
                xtype: 'container',
                width: '100%',
                height: '100%',
              //  style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
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

                                id: 'containerFloatPanel_SubscriberMasterHeader',
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
                                                         id: 'btnFloatPanel_SubscriberMasterBack',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backwhite03.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {

                                                             _FloatPanel_SubscriberMaster.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             isFloatPanel_SubscriberMasterOpen = 'N';
                                                             RemovePages("FloatPanel_SubscriberMasterHide()");
                                                         }
                                                     },
                                                    
                                                      {
                                                          xtype: 'spacer',

                                                      },
                                                       {
                                                           margin: '0 0 0 0',
                                                           id: 'htmlFloatPanel_SubscriberMaster_TitleHeaderTxt',
                                                           html: '<font size=2 color=white><b>My Account</b></font>'
                                                       },
                                                          {
                                                              xtype: 'button',
                                                              id: 'btnFloatPanel_SubscriberMaster_TitleHeaderIcon',
                                                              height: 30,
                                                              width: 35,
                                                              // iconCls: 'list',
                                                              html: '<div ><img src="resources/icons/editProfileWhite02.png" width="25" height="20" alt="Company Name"></div>',
                                                              ui: 'plain',
                                                              handler: function () {
                                                                  _FloatPanel_SubscriberMaster.hide(Ext.fx.Animation({
                                                                      type: 'slideOut',
                                                                      direction: 'right',
                                                                      easing: 'cubic-bezier(.7,0,.7,1)',
                                                                      duration: 250

                                                                  }));
                                                                  isFloatPanel_SubscriberMasterOpen = 'N';
                                                                  RemovePages("FloatPanel_SubscriberMasterHide()");

                                                              }
                                                          },
                                                     

                                                           
                                                   
                                                           









                                       ]

                            },

                            






                                 


                              //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                              {
                                  xtype: 'tabpanel',
                                  // hidden: true,
                                  //  hidden:true,
                                  id: 'tabpanelFloatPanel_SubscriberMaster',
                                  // style: 'border-top:2px solid #ECF0F1;background: white;',
                                  // style: 'background-color: black;',
                                  // margin: '-20 0 0 -26',
                                  // margin: '25 0 0 0',

                                  //width: 200,
                                  width: '96%',
                                  height: '100%',
                                  //height: 120,
                                  //height: 50,
                                  //  zIndex: 200,
                                  //  docked: 'bottom',
                                  tabBarPosition: 'top',
                                  ui: 'plain',
                                  // docked: 'bottom',

                                  initialize: function (c) {
                                      //this.getTabBar().hide();

                                     
                                  },

                                 

                                  items: [



              {
                  xtype: 'container',
                  id: 'containerFloatPanel_SubscriberMasterMaster',
                  width: '100%',
                  height: '94%',
                  //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                  style: "background-color: transparent;",
                  //style: "background-color: #F35B57;",
                  title: 'FloatPanel_SubscriberMasterMaster',
                  listeners: {
                      initialize: function (c) {
                          this.element.on({
                              swipe: function (e, node, options) {
                                  //if (e.direction == "up") {
                                  //    LoyaltyCardRedeemListHide();
                                  //}
                                  if (e.direction == "left") {
                                      _FloatPanel_SubscriberMaster.hide(Ext.fx.Animation({
                                          type: 'slideOut',
                                          direction: 'left',
                                          easing: 'cubic-bezier(.7,0,.7,1)',
                                          duration: 250

                                      }));
                                      isFloatPanel_SubscriberMasterOpen = 'N';
                                  } if (e.direction == "right") {
                                      _FloatPanel_SubscriberMaster.hide(Ext.fx.Animation({
                                          type: 'slideOut',
                                          direction: 'right',
                                          easing: 'cubic-bezier(.7,0,.7,1)',
                                          duration: 250

                                      }));
                                      isFloatPanel_SubscriberMasterOpen = 'N';
                                  }
                                  RemovePages(_FloatPanel_SubscriberMaster, "isFloatPanel_SubscriberMasterOpen");
                              }
                          });
                      }
                  },
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
                  
                  //listeners: {
                  //    initialize: function (c) {

                  //        this.element.on({
                  //            swipe: function (e, node, options) {
                  //                if (e.direction == "left") {
                  //                    //  alert("Hey! I swipe left");
                  //                    Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(1);
                  //                } else {
                  //                    //  alert("Hey! I swipe right");

                  //                }
                  //            }
                  //        });
                  //    }
                  //},


                  items: [




                        
                      {
                          xtype: 'container',
                          style: "background-color: transparent",
                          margin: '0 0 0 0',
                          width: '100%',
                          layout: {
                              type: 'vbox',
                              pack: 'start',
                              align: 'center'

                          },
                          items: [

                               {
                                   xtype: 'container',
                                   margin: '2 0 0 0',                                 
                                   height: 160,
                                   width: 160,
                                   id: 'FloatPanel_SubscriberMasterPicProfile',
                                   name: 'namecontainerFloatPanel_SubscriberMasterPicProfile',                                  
                                   layout: {
                                       type: 'vbox',
                                       pack: 'start',
                                       align: 'center'

                                   },
                                   items: [
                                       {
                                           margin: '0 0 0 0',
                                           height: 160,
                                           width: 160,
                                           id:'htmlFloatPanel_SubscriberMasterPicProfile',
                                           html: '<img src="resources/icons/profileIconWhiteOne.png" width="160" height="160"/>',
                                       },

                                   ]

                               },

                               


                                                {
                                                    id: 'HtmlinputImgFloatPanel_SubscriberMasterUploadedPhoto',
                                                    hidden: true,
                                                    margin: '0 0 0 0',
                                                    width: '100%',
                                                    html: '<input type="file" id="inputImg-FloatPanel_SubscriberMasterUploadedPhoto" accept="image/*"  onchange="inputImgFloatPanel_SubscriberMasterUploadedPhoto()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'

                                                    //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',





                                                },





                                                {
                                                    margin: '-2 0 0 0',
                                                    hidden: true,
                                                    id: 'FloatPanel_SubscriberMasterPhotoName',
                                                    width: '100%',
                                                    height: 20,
                                                    html: '<input type="text" id="input-FloatPanel_SubscriberMasterPhotoName"  readOnly style="border-color:white;color:#F2F2F2;width:100%;text-align: right;font-size:12px;">'


                                                },

                                                {
                                                    xtype: 'container',
                                                    margin: '-12 0 0 0',
                                                    width: '100%',
                                                    style: {

                                                        background: 'transparent',

                                                    },
                                                    layout: {
                                                        type: 'hbox',
                                                        pack: 'right',
                                                        align: 'right'

                                                    },
                                                    items: [
                                          {
                                              xtype: 'button',
                                              id: 'btnFloatPanel_SubscriberMaster_Delete',
                                              hidden: true,
                                              //  badgeText: '1',
                                              margin: '0 0 0 0',
                                              height: 40,
                                              width: 40,
                                             // html: '<img src="resources/icons/deleteWhiteTwo.png" width="30" height="30" alt="Company Name">',
                                              ui: 'plain',
                                              handler: function () {
                                                 
                                              }
                                          },
{
    xtype: 'button',
    id: 'btnFloatPanel_SubscriberMaster_Save',
    hidden: true,
    //  badgeText: '1',
    margin: '0 0 0 0',
    height: 40,
    width: 40,
    html: '<img src="resources/icons/saveWhiteOne.png" width="30" height="30" alt="Company Name">',
    ui: 'plain',
    handler: function () {
        Ext.getCmp('btnFloatPanel_SubscriberMaster_Edit').setHidden(false);
        Ext.getCmp('btnFloatPanel_SubscriberMaster_Save').setHidden(true);
        Ext.getCmp('btnFloatPanel_SubscriberMaster_Delete').setHidden(true);


        Ext.getCmp('FloatPanel_SubscriberMasterAccountName').setHidden(false);
        Ext.getCmp('FloatPanel_SubscriberMasterAccountName_edit').setHidden(true);


        Ext.getCmp('FloatPanel_SubscriberMasterEmail').setHidden(false);
        Ext.getCmp('FloatPanel_SubscriberMasterEmail_edit').setHidden(true);


        Ext.getCmp('FloatPanel_SubscriberMasterPhoneNo').setHidden(false);
        Ext.getCmp('FloatPanel_SubscriberMasterPhoneNo_edit').setHidden(true);

        Ext.getCmp('FloatPanel_SubscriberMasterDOB').setHidden(false);
        Ext.getCmp('FloatPanel_SubscriberMasterDOB_edit').setHidden(true);
        FloatPanel_SubscriberMaster_SaveMyAccount();
       
    }
},

                                            {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_SubscriberMaster_Edit',
                                                //  badgeText: '1',
                                                margin: '0 0 0 0',
                                                height: 40,
                                                width: 40,
                                                html: '<img src="resources/icons/editWhiteOne.png" width="30" height="30" alt="Company Name">',
                                                ui: 'plain',
                                                handler: function () {





                                                    Ext.getCmp('btnFloatPanel_SubscriberMaster_Edit').setHidden(true);
                                                    Ext.getCmp('btnFloatPanel_SubscriberMaster_Save').setHidden(false);
                                                    Ext.getCmp('btnFloatPanel_SubscriberMaster_Delete').setHidden(true);


                                                    Ext.getCmp('FloatPanel_SubscriberMasterAccountName').setHidden(true);
                                                    Ext.getCmp('FloatPanel_SubscriberMasterAccountName_edit').setHidden(false);


                                                    Ext.getCmp('FloatPanel_SubscriberMasterEmail').setHidden(true);
                                                    Ext.getCmp('FloatPanel_SubscriberMasterEmail_edit').setHidden(false);


                                                    Ext.getCmp('FloatPanel_SubscriberMasterPhoneNo').setHidden(true);
                                                    Ext.getCmp('FloatPanel_SubscriberMasterPhoneNo_edit').setHidden(false);

                                                    Ext.getCmp('FloatPanel_SubscriberMasterDOB').setHidden(true);
                                                    Ext.getCmp('FloatPanel_SubscriberMasterDOB_edit').setHidden(false);


                                                

                                                    





                                                }
                                            },
                                                    ]
                                                },



         {
              xtype: 'container',

              width: '100%',
              layout: {
                  type: 'vbox',
                  pack: 'center',
                  align: 'center'

              },
              items: [

                   //{
                   //    margin: '0 0 0 0',

                   //    html: '<font size=3 color=white><b>TARMIZI RAHIM</b></font>',

                   //},

                           //{
                           //    xtype: 'container',
                           //    height: 1,
                           //    width: '80%',
                           //    style: {

                           //        background: 'white',

                           //    },
                           //    layout: {
                           //        type: 'hbox',
                           //        pack: 'center',
                           //        align: 'center'

                           //    },
                           //},





{
    xtype: 'container',
    width: '100%',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'left'

    },
    items: [
        {
            margin: '-5 0 0 0',
            id:'htmlAccountNameLabel',

            html: '<font size=2 color=white>Account Name</font>',

        },
        {
            //hidden: true,
            id: 'FloatPanel_SubscriberMasterAccountName',
            margin: '-5 0 0 0',
            width: '80%',
          //  height: 20,
            html: '<input type="text" id="input-FloatPanel_SubscriberMasterAccountName"  readOnly style="border-color:transparent;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" value="TARMIZI BIN RAHIM">'


        },
        {
            hidden: true,
            id: 'FloatPanel_SubscriberMasterAccountName_edit',
            margin: '-5 0 0 0',
            width: '80%',
            //  height: 20,
            html: '<input type="text" id="input-FloatPanel_SubscriberMasterAccountName_edit"  style="border-color:white;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" value="TARMIZI BIN RAHIM">'


        },

         {
             margin: '5 0 0 0',

             html: '<font size=2 color=white>Email</font>',

         },
        {
            //hidden: true,
            id: 'FloatPanel_SubscriberMasterEmail',
            margin: '-5 0 0 0',
            width: '80%',
            //  height: 20,
            html: '<input type="text" id="input-FloatPanel_SubscriberMasterEmail"  readOnly style="border-color:transparent;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" value="IanMizi09@gmail.com">'


        },

        {
            hidden: true,
            id: 'FloatPanel_SubscriberMasterEmail_edit',
            margin: '-5 0 0 0',
            width: '80%',
            //  height: 20,
            html: '<input type="text" id="input-FloatPanel_SubscriberMasterEmail_edit"  style="border-color:white;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" value="IanMizi09@gmail.com">'


        },
         {
             margin: '5 0 0 0',

             html: '<font size=2 color=white>Phone No</font>',

         },
        {
            //hidden: true,
            id: 'FloatPanel_SubscriberMasterPhoneNo',
            margin: '-5 0 0 0',
            width: '80%',
            //  height: 20,
            html: '<input type="text" id="input-FloatPanel_SubscriberMasterPhoneNo"  readOnly style="border-color:transparent;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" value="+60133376958">'


        },

         {
             hidden: true,
             id: 'FloatPanel_SubscriberMasterPhoneNo_edit',
             margin: '-5 0 0 0',
             width: '80%',
             //  height: 20,
             html: '<input type="text" id="input-FloatPanel_SubscriberMasterPhoneNo_edit"  style="border-color:white;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" value="+60133376958">'


         },

         {
             margin: '5 0 0 0',

             html: '<font size=2 color=white>DOB (Optional)</font>',

         },
        {
            //hidden: true,
            id: 'FloatPanel_SubscriberMasterDOB',
            margin: '-5 0 0 0',
            width: '80%',
            //  height: 20,
            html: '<input type="date" id="input-FloatPanel_SubscriberMasterDOB"  readOnly style="border-color:transparent;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;">',


        },

        //{
        //    margin: '5 0 0 0',

        //    html: '<font size=2 color=white>Address(Optional-For Delivery/Shipping Purpose)</font>',

        //},
       
        // {
        //     margin: '-5 0 0 0',
        //     id: 'htmlFloatPanel_SubscriberMasterAddress',
        //     width: '90%',
        //     height: 70,
        //     // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  style="border-color:white;color:white;width:100%;height:35px;text-align: left;font-size:12px;word-wrap:break-word;">'
        //     html: '<textarea id="input-FloatPanel_SubscriberMasterAddress" style="width:100%;height:70px;padding: 0px 0px;box-sizing: border-box;border: 1px solid grey;border-radius: 4px;background-color: #F2F3F5;color:black;font-size: 12px;font-weight:bold" wrap="hard" placeHolder="Set Drop off Address" ></textarea>'
        //     // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  rows="25" cols="60">'

        // },

        {
            hidden: true,
            id: 'FloatPanel_SubscriberMasterDOB_edit',
            margin: '-5 0 0 0',
            width: '80%',
            //  height: 20,
            html: '<input type="date" id="input-FloatPanel_SubscriberMasterDOB_edit"  style="border-color:white;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;">',


        },

         {
             margin: '5 0 0 0',

             html: '<font size=2 color=white>Date Registered</font>',

         },

          {
              //hidden: true,
              id: 'FloatPanel_SubscriberMasterCreatedDate',
              margin: '-5 0 0 0',
              width: '80%',
              //  height: 20,
              html: '<input type="text" id="input-FloatPanel_SubscriberMasterCreatedDate"  readOnly style="border-color:transparent;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" value="19/02/1983">'


          },


          {
              margin: '5 0 0 0',

              html: '<font size=2 color=white>Version</font>',

          },

          {
              //hidden: true,
              id: 'FloatPanel_SubscriberMasterVersion',
              margin: '-5 0 0 0',
              width: '80%',
              //  height: 20,
              html: '<input type="text" id="input-FloatPanel_SubscriberMasterVersion" readOnly style="border-color:transparent;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" value="Ayoha Reward v 1.0">'


          },


           {
               margin: '5 0 0 0',

               html: '<font size=2 color=white>Status</font>',

           },

          {
              //hidden: true,
              id: 'FloatPanel_SubscriberMasterStatus',
              margin: '-5 0 0 0',
              width: '80%',
              //  height: 20,
              html: '<input type="text" id="input-FloatPanel_SubscriberMasterStatus"  readOnly style="border-color:transparent;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" value="Active">'


          },

          {
              margin: '5 0 0 0',

              html: '<font size=2 color=white>Last Login Date</font>',

          },

          {
              //hidden: true,
              id: 'FloatPanel_SubscriberMasterLastLoginDate',
              margin: '-5 0 0 0',
              width: '80%',
              //  height: 20,
              html: '<input type="text" id="input-FloatPanel_SubscriberMasterLastLoginDate"  readOnly style="border-color:transparent;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" value="Active">'


          },




          {
              xtype: 'container',             
              width: '100%',
              id:'containerFloatPanel_SubscriberMaster_isUserverified',
              style: ' background-color:transparent',
              margin: '5 0 0 0',
              layout: {
                  type: 'hbox',
                  pack: 'start',
                  align: 'center'

              },
              items: [

                       {
                           xtype: 'container',

                           width: '40%',
                           style: {

                               background: 'transparent',

                           },
                           layout: {
                               type: 'vbox',
                               pack: 'left',
                               align: 'left'

                           },
                           items: [


                               {
                                   xtype: 'container',

                                   width: '100%',
                                   style: {

                                       background: 'transparent',

                                   },
                                   layout: {
                                       type: 'hbox',
                                       pack: 'start',
                                       align: 'left'

                                   },
                                   items: [
                                   {
                                       margin: '3 0 0 0',

                                       html: '<font size=2 color=white>Account Verifed?</font>',

                                   },



                                   ]
                               },




         {
             margin: '-2 0 0 0',
             id: 'FloatPanel_SubscriberMasterisUserVerified',
             width: '25%',
             height: 20,
             html: '<input type="text" id="input-FloatPanel_SubscriberMasterisUserVerified" readOnly style="border-color:transparent;color:#F2F2F2;width:100%;text-align: left;font-size:16px;font-weight:bold;">'

         },


                           ]

                       },


                        //{
                        //    xtype:'container'

                        //},
                         {
                             xtype: 'button',
                             hidden:true,
                             id: 'btnFloatPanel_SubscriberMasterisUserVerifiedMessage',
                             //  badgeText: '1',
                             margin: '0 0 -10 -30',
                             height: 35,
                             width: 35,
                             html: '<img src="resources/icons/errorklipklip.gif" width="25" height="25" alt="Company Name">',
                             ui: 'plain',
                             handler: function () {
                                 FloatPanel_AccountVerifiedShow();
                                 //isFromUserEnterpriseDetails = 'Y';
                                 //FloatPanel_EnterprisesUserTypeListShow();
                             }
                         },
                          //{
                          //    xtype: 'button',
                          //    id: 'btnFloatPanel_SubscriberMasterisUserVerified',
                          //    //  badgeText: '1',
                          //    margin: '0 0 -10 -30',
                          //    height: 35,
                          //    width: 35,
                          //    html: '<img src="resources/icons/verifiedWhiteOne.png" width="25" height="25" alt="Company Name">',
                          //    ui: 'plain',
                          //    handler: function () {
                          //        //isFromUserEnterpriseDetails = 'Y';
                          //        //FloatPanel_EnterprisesUserTypeListShow();
                          //    }
                          //},

              ]

          },


          
           {
               margin: '5 0 0 0',
               id: 'htmlFloatPanel_SubscriberMasterVerifiedDateTxt',
               hidden:true,

               html: '<font size=2 color=white>Verified Date</font>',

           },

          {
              //hidden: true,
              id: 'FloatPanel_SubscriberMasterVerifiedDate',
              margin: '-5 0 0 0',
              width: '80%',
              hidden: true,
              //  height: 20,
              html: '<input type="text" id="input-FloatPanel_SubscriberMasterVerifiedDate"  readOnly style="border-color:transparent;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" >'


          },


        
{
    xtype: 'container',
    hidden:true,
        width: '100%',
        style: {

            background: 'transparent',

        },
        layout: {
            type: 'hbox',
            pack: 'right',
            align: 'right'

        },
        items: [


//{
//    xtype: 'button',
//    id: 'btnFloatPanel_SubscriberMaster_Edit',
//    //  badgeText: '1',
//    margin: '0 0 0 0',
//    height: 40,
//    width: 40,
//    html: '<img src="resources/icons/editWhiteOne.png" width="30" height="30" alt="Company Name">',
//    ui: 'plain',
//    handler: function () {





//        Ext.getCmp('btnFloatPanel_SubscriberMaster_Edit').setHidden(true);
//        Ext.getCmp('btnFloatPanel_SubscriberMaster_Save').setHidden(false);
//        Ext.getCmp('btnFloatPanel_SubscriberMaster_Delete').setHidden(true);


//        Ext.getCmp('FloatPanel_SubscriberMasterAccountName').setHidden(true);
//        Ext.getCmp('FloatPanel_SubscriberMasterAccountName_edit').setHidden(false);


//        Ext.getCmp('FloatPanel_SubscriberMasterEmail').setHidden(true);
//        Ext.getCmp('FloatPanel_SubscriberMasterEmail_edit').setHidden(false);


//        Ext.getCmp('FloatPanel_SubscriberMasterPhoneNo').setHidden(true);
//        Ext.getCmp('FloatPanel_SubscriberMasterPhoneNo_edit').setHidden(false);

//        Ext.getCmp('FloatPanel_SubscriberMasterDOB').setHidden(true);
//        Ext.getCmp('FloatPanel_SubscriberMasterDOB_edit').setHidden(false);


        

        
//    }
//},
]
},
  {
      xtype: 'container',
      height: 40,
      width: '100%',
      style: {

          background: 'transparent',

      },
  },
    ]
},









              //     {
              //         margin: '-8 0 0 0',

              //         html: '<font size=2 color=white>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
              //     },
              //      {
              //          margin: '-7 0 0 0',

              //          html: '<font size=2 color=white>5682314 Ampang ,Selangor Darul Ehsan.</font>',
              //      },
              ]

          },





                       //{
                       //    xtype: 'container',
                       //    height: 1,
                       //    width: '90%',
                       //    style: {

                       //        background: 'white',

                       //    },
                       //    layout: {
                       //        type: 'hbox',
                       //        pack: 'center',
                       //        align: 'center'

                       //    },
                       //},



                       //////////////////////








                          ]

                      },












                  ]

              },





              {
                  xtype: 'container',
                  id: 'containerFloatPanel_SubscriberMasterChangePassword',
                  width: '100%',
                  height: '94%',
                  //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                  style: "background-color: transparent;",
                  //style: "background-color: #F35B57;",
                  title: 'FloatPanel_SubscriberMasterChangePassword',
                  listeners: {
                      initialize: function (c) {
                          this.element.on({
                              swipe: function (e, node, options) {
                                  //if (e.direction == "up") {
                                  //    LoyaltyCardRedeemListHide();
                                  //}
                                  if (e.direction == "left") {
                                      _FloatPanel_SubscriberMaster.hide(Ext.fx.Animation({
                                          type: 'slideOut',
                                          direction: 'left',
                                          easing: 'cubic-bezier(.7,0,.7,1)',
                                          duration: 250

                                      }));
                                      isFloatPanel_SubscriberMasterOpen = 'N';
                                  } if (e.direction == "right") {
                                      _FloatPanel_SubscriberMaster.hide(Ext.fx.Animation({
                                          type: 'slideOut',
                                          direction: 'right',
                                          easing: 'cubic-bezier(.7,0,.7,1)',
                                          duration: 250

                                      }));
                                      isFloatPanel_SubscriberMasterOpen = 'N';
                                  }

                              }
                          });
                      }
                  },
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

                  //listeners: {
                  //    initialize: function (c) {

                  //        this.element.on({
                  //            swipe: function (e, node, options) {
                  //                if (e.direction == "left") {
                  //                    //  alert("Hey! I swipe left");
                  //                    Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(2);
                  //                } else {
                  //                    Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(0);

                  //                }
                  //            }
                  //        });
                  //    }
                  //},


                  items: [





                      {
                          xtype: 'container',
                          style: "background-color: transparent",
                          margin: '0 0 0 0',
                          width: '100%',
                          layout: {
                              type: 'vbox',
                              pack: 'center',
                              align: 'center'

                          },
                          items: [

                        



                                             





                                                



         {
             xtype: 'container',

             width: '100%',
             layout: {
                 type: 'vbox',
                 pack: 'center',
                 align: 'center'

             },
             items: [

                 




{
    xtype: 'container',
    width: '100%',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
    items: [
        //{
        //    margin: '-5 0 0 0',
        //    id: 'htmlCurrentPasswordLabel',
        //    width: '80%',
        //    html: '<div style="width:100%;text-align: left;font-size:16px;font-weight:bold;"><font size=2 color=white>Current Password</font></div',

        //},
      
        //{
           
        //    id: 'FloatPanel_SubscriberMasterCurrenrPassword',
        //    margin: '-5 0 0 0',
        //    width: '80%',
        //    //  height: 20,
        //    html: '<input type="password" id="input-FloatPanel_SubscriberMasterCurrentPassword"  style="border-color:white;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" >'


        //},




        


        {
            xtype: 'container',
            width: '100%',
            margin: '100 0 0 0',
            //   hidden: true,
            style: ' background-color:transparent',
            layout: {
                type: 'hbox',
                pack: 'start',
                align: 'center'

            },
            items: [

                     {
                         xtype: 'container',

                         width: '90%',
                         style: {

                             background: 'transparent',

                         },
                         layout: {
                             type: 'vbox',
                             pack: 'left',
                             align: 'left'

                         },
                         items: [


                             {
                                 xtype: 'container',

                                 width: '100%',
                                 style: {

                                     background: 'transparent',

                                 },
                                 layout: {
                                     type: 'hbox',
                                     pack: 'start',
                                     align: 'center'

                                 },
                                 items: [
                                 {
                                     margin: '3 0 0 35',

                                     html: '<font size=2 color=white>Current Password</font>',

                                 },



                                 ]
                             },




        {
            margin: '-2 0 0 35',
            id: 'FloatPanel_SubscriberMasterChangePassword_CurrentPassword',
            width: '90%',
            height: 20,
            html: '<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_CurrentPassword"  style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:20px;font-weight:bold;">'

        },


                         ]

                     },


                      //{
                      //    xtype:'container'

                      //},
                        {
                            xtype: 'button',
                            id: 'btFloatPanel_SubscriberMasterChangePassword_CurrentPassword_MessageIcon',
                            //  badgeText: '1',
                            hidden: true,
                            margin: '0 0 -10 -30',
                            height: 35,
                            width: 35,
                            html: '<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >',
                            ui: 'plain',
                            handler: function () {

                            }
                        },

            ]

        },

                                               {
                                                   margin: '4 0 0 0',
                                                   width: '90%',
                                                   hidden: true,
                                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                   id: 'htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message',
                                                   html: '<div style="color:white;text-align: right;font-size:11px;width:100%;">Password Not Matched!</div>',
                                                   // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                               },





{
    xtype: 'container',
    width: '100%',
    margin: '60 0 0 0',
    //   hidden: true,
    style: ' background-color:transparent',
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'center'

    },
    items: [

             {
                 xtype: 'container',

                 width: '90%',
                 style: {

                     background: 'transparent',

                 },
                 layout: {
                     type: 'vbox',
                     pack: 'left',
                     align: 'left'

                 },
                 items: [


                     {
                         xtype: 'container',

                         width: '100%',
                         style: {

                             background: 'transparent',

                         },
                         layout: {
                             type: 'hbox',
                             pack: 'start',
                             align: 'center'

                         },
                         items: [
                         {
                             margin: '3 0 0 35',
                             id:'htmlFloatPanel_SubscriberMasterChangePassword_NewPasswordLabel',
                             html: '<font size=2 color=#ECF0F1>New Password</font>',

                         },



                         ]
                     },




{
    margin: '-2 0 0 35',
    id: 'FloatPanel_SubscriberMasterChangePassword_NewPassword',
    width: '90%',
    height: 20,
    html: '<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_NewPassword"  style="border-color:#ECF0F1;color:#F2F2F2;width:100%;text-align: left;font-size:20px;font-weight:bold;">'

},


                 ]

             },


              //{
              //    xtype:'container'

              //},
                {
                    xtype: 'button',
                    id: 'btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon',
                    //  badgeText: '1',
                    hidden: true,
                    margin: '0 0 -10 -30',
                    height: 35,
                    width: 35,
                    html: '<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >',
                    ui: 'plain',
                    handler: function () {

                    }
                },

    ]

},

                                               {
                                                   margin: '4 0 0 0',
                                                   width: '90%',
                                                   hidden: true,
                                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                   id: 'htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt',
                                                   html: '<div style="color:white;text-align: right;font-size:11px;width:100%;">Password cannot less than 6 charaters!</div>',
                                                   // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                               },

                                               {
                                                   xtype: 'container',
                                                   width: '100%',
                                                   margin: '30 0 0 0',
                                                   id: 'container_FloatPanel_SubscriberMasterChangePassword_ConfirmPassword',
                                                   //   hidden: true,
                                                   style: ' background-color:transparent',
                                                   layout: {
                                                       type: 'hbox',
                                                       pack: 'start',
                                                       align: 'center'

                                                   },
                                                   items: [

                                                            {
                                                                xtype: 'container',

                                                                width: '90%',
                                                                style: {

                                                                    background: 'transparent',

                                                                },
                                                                layout: {
                                                                    type: 'vbox',
                                                                    pack: 'left',
                                                                    align: 'left'

                                                                },
                                                                items: [


                                                                    {
                                                                        xtype: 'container',

                                                                        width: '100%',
                                                                        style: {

                                                                            background: 'transparent',

                                                                        },
                                                                        layout: {
                                                                            type: 'hbox',
                                                                            pack: 'start',
                                                                            align: 'center'

                                                                        },
                                                                        items: [
                                                                        {
                                                                            margin: '3 0 0 35',
                                                                            id:'htmlFloatPanel_SubscriberMasterChangePassword_ConfirmPasswordLabel',
                                                                            html: '<font size=2 color=#ECF0F1>*Confirm Password</font>',

                                                                        },



                                                                        ]
                                                                    },




                                              {
                                                  margin: '-2 0 0 35',
                                                  id: 'FloatPanel_SubscriberMasterChangePassword_ConfirmPassword',
                                                  width: '90%',
                                                  height: 20,
                                                  html: '<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword"  style="border-color:#ECF0F1;color:#F2F2F2;width:100%;text-align: left;font-size:20px;font-weight:bold;">'

                                              },


                                                                ]

                                                            },


                                                             //{
                                                             //    xtype:'container'

                                                             //},
                                                               {
                                                                   xtype: 'button',
                                                                   id: 'btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon',
                                                                   hidden: true,
                                                                   margin: '0 0 -10 -30',
                                                                   height: 35,
                                                                   width: 35,
                                                                   html: '<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;" >',
                                                                   ui: 'plain',
                                                                   handler: function () {

                                                                   }
                                                               },

                                                   ]

                                               },
                                               {
                                                   margin: '4 0 0 0',
                                                   width: '90%',
                                                   hidden: true,
                                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                   id: 'htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt',
                                                   html: '<div style="color:white;text-align: right;font-size:11px;width:100%;">Password is matched!</div>'
                                                   // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                               },



        // {
        //     margin: '35 0 0 0',
        //     width: '80%',
        //     html: '<div style="width:100%;text-align: left;font-size:16px;font-weight:bold;"><font size=2 color=white>New Password</font></div',
          

        // },
       

        //{
           
        //    id: 'FloatPanel_SubscriberMasterNewPassword',
        //    margin: '-5 0 0 0',
        //    width: '80%',
        //    //  height: 20,
        //    html: '<input type="password" id="input-FloatPanel_SubscriberMasterNewPassword"  style="border-color:white;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;">'


        //},
        // {
        //     margin: '5 0 0 0',

        //     width: '80%',
        //     html: '<div style="width:100%;text-align: left;font-size:16px;font-weight:bold;"><font size=2 color=white>Confirm Password</font></div',

        // },
        

        // {
          
        //     id: 'FloatPanel_SubscriberMasterConfirmPassword',
        //     margin: '-5 0 0 0',
        //     width: '80%',
        //     //  height: 20,
        //     html: '<input type="text" id="input-FloatPanel_SubscriberMasterConfirmPassword"  style="border-color:white;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" value="+60133376958">'


        // },

        




          


          {
              xtype: 'container',
              margin: '30 0 0 0',
              width: '100%',
              style: {

                  background: 'transparent',

              },
              layout: {
                  type: 'hbox',
                  pack: 'right',
                  align: 'right'

              },
              items: [
    
{
    xtype: 'button',
    id: 'btnFloatPanel_SubscriberMasterChangePassword_Save',
    hidden: true,
    margin: '0 0 0 0',
    height: 40,
    width: 40,
    html: '<img src="resources/icons/saveWhiteOne.png" width="30" height="30" alt="Company Name">',
    ui: 'plain',
    handler: function () {
     
        FloatPanel_SubscriberMaster_UpdatePasswordMyAccount();
    }
},

      
              ]
          },




  {
      xtype: 'container',
      height: 40,
      width: '100%',
      style: {

          background: 'transparent',

      },
  },
    ]
},


             ]

         },






                          ]

                      },












                  ]

              },






                                       
























                                       













                                  ]

                                  //}
                              },

                              //////////////////////////////////////////

                              {

                                  xtype: 'container',
                                  width: '96%',
                                  hidden:true,
                                  // width: 40,
                                  docked: 'bottom',
                                  margin:'0 0 0 7',
                                  height: 55,
                                  //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                  //hidden: true,

                                  id: 'containerFloatPanel_SubscriberMaster_MenuBottom',
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
                                                 scrollable: {
                                                     direction: 'horizontal',
                                                     directionLock: true
                                                 },
                                                 items: [


                                                     {
                                                         xtype: 'container',
                                                         //width: 500,
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
                                                                 id: 'containerFloatPanel_SubscriberMaster_MenuBottom_MyProfile',
                                                                 width: '25%',
                                                                 //height: 30,
                                                                 margin: '0 0 0 0',
                                                                 //flex: 1,
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
                                                                          id: 'btn_FloatPanel_SubscriberMaster_MenuBottom_MyProfile',
                                                                          //  badgeText: '1',
                                                                          margin: '0 0 0 0',

                                                                          height: 36,
                                                                          width: 36,
                                                                          html: '<img src="resources/icons/MyAccountPurpleOne.png" width="26" height="26" alt="Company Name">',
                                                                          ui: 'plain',
                                                                          handler: function () {
                                                                              Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(0);
                                                                          }
                                                                      },
                                                                      {
                                                                          xtype: 'container',
                                                                          id: 'containerFloatPanel_SubscriberMaster_MenuBottom_MyProfileTxt',
                                                                          width: '100%',
                                                                          layout: {
                                                                              type: 'vbox',
                                                                              pack: 'start',
                                                                              align: 'center'

                                                                          },
                                                                          items: [
                                                                              {
                                                                                  margin: '-12 0 0 0',
                                                                                  // id: 'htmlStampHistoryTxt',
                                                                                  html: '<font size=1 color=grey>My</font>'
                                                                              },
                                                                              {
                                                                                  margin: '-12 0 0 0',
                                                                                  // id: 'htmlStampHistoryTxt',
                                                                                  html: '<font size=1 color=grey>Profile</font>'
                                                                              },
                                                                          ]

                                                                      },


                                                                 ]
                                                             },

                                                       {
                                                           xtype: 'container',
                                                           id: 'containerFloatPanel_SubscriberMaster_MenuBottom_ChangePassword',
                                                           width: '25%',
                                                           //height: 30,
                                                           margin: '0 0 0 0',
                                                          // flex: 1,
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
                                                                    id: 'btn_FloatPanel_SubscriberMaster_MenuBottom_ChangePassword',
                                                                    //  badgeText: '1',
                                                                    margin: '0 0 0 0',

                                                                    height: 36,
                                                                    width: 36,
                                                                    html: '<img src="resources/icons/ChangePasswordPurpleOne.png" width="26" height="26" alt="Company Name">',
                                                                    ui: 'plain',
                                                                    handler: function () {
                                                                        Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(1);
                                                                    }
                                                                },
                                                                {
                                                                    xtype: 'container',
                                                                    id: 'containerFloatPanel_SubscriberMaster_MenuBottom_ChangePasswordTxt',
                                                                    width: '100%',
                                                                    layout: {
                                                                        type: 'vbox',
                                                                        pack: 'start',
                                                                        align: 'center'

                                                                    },
                                                                    items: [
                                                                        {
                                                                            margin: '-12 0 0 0',
                                                                            // id: 'htmlStampHistoryTxt',
                                                                            html: '<font size=1 color=grey>Change</font>'
                                                                        },
                                                                        {
                                                                            margin: '-12 0 0 0',
                                                                            // id: 'htmlStampHistoryTxt',
                                                                            html: '<font size=1 color=grey>Password</font>'
                                                                        },
                                                                    ]

                                                                },


                                                           ]
                                                       },



                                                       {
                                                           xtype: 'container',
                                                           id: 'containerFloatPanel_SubscriberMaster_MenuBottom_StampCardHistory',
                                                           hidden: true,
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
                                                                    id: 'btn_FloatPanel_SubscriberMaster_MenuBottom_StampCardHistory',
                                                                    //  badgeText: '1',
                                                                    margin: '0 0 0 0',

                                                                    height: 36,
                                                                    width: 36,
                                                                    html: '<img src="resources/icons/StampTiltLeftOne.png" width="26" height="26" alt="Company Name">',
                                                                    ui: 'plain',
                                                                    handler: function () {
                                                                       // Load_FloatPanel_SubscriberMaster_LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore();
                                                                        Load_FloatPanel_SubscriberMaster_LoyaltyStampLoadBySubscriberAccNoStore();
                                                                        Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(2);
                                                                        Ext.getCmp('htmlFloatPanel_SubscriberMaster_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Stamp Card History</b></font>');

                                                                    }
                                                                },
                                                                {
                                                                    xtype: 'container',
                                                                    id: 'containerFloatPanel_SubscriberMaster_MenuBottom_StampCardHistoryTxt',
                                                                    width: '100%',
                                                                    layout: {
                                                                        type: 'vbox',
                                                                        pack: 'start',
                                                                        align: 'center'

                                                                    },
                                                                    items: [
                                                                        {
                                                                            margin: '-12 0 0 0',
                                                                            // id: 'htmlStampHistoryTxt',
                                                                            html: '<font size=1 color=grey>Stamped</font>'
                                                                        },
                                                                        {
                                                                            margin: '-12 0 0 0',
                                                                            // id: 'htmlStampHistoryTxt',
                                                                            html: '<font size=1 color=grey>History</font>'
                                                                        },
                                                                    ]

                                                                },


                                                           ]
                                                       },

                                                       {
                                                           xtype: 'container',
                                                           id: 'containerFloatPanel_SubscriberMaster_MenuBottom_PointCardHistory',
                                                           hidden: true,
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
                                                                    id: 'btn_FloatPanel_SubscriberMaster_MenuBottom_PointCardHistory',
                                                                    //  badgeText: '1',
                                                                    margin: '0 0 0 0',

                                                                    height: 36,
                                                                    width: 36,
                                                                    html: '<img src="resources/icons/pointPurpleOne.png" width="26" height="26" alt="Company Name">',
                                                                    ui: 'plain',
                                                                    handler: function () {
                                                                        Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(3);
                                                                        Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(3);
                                                                        Ext.getCmp('htmlFloatPanel_SubscriberMaster_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Points History</b></font>');
                                                                    }
                                                                },
                                                                {
                                                                    xtype: 'container',
                                                                    id: 'containerFloatPanel_SubscriberMaster_MenuBottom_PointCardHistoryTxt',
                                                                    width: '100%',
                                                                    layout: {
                                                                        type: 'vbox',
                                                                        pack: 'start',
                                                                        align: 'center'

                                                                    },
                                                                    items: [
                                                                        {
                                                                            margin: '-12 0 0 0',
                                                                            // id: 'htmlStampHistoryTxt',
                                                                            html: '<font size=1 color=grey>Point</font>'
                                                                        },
                                                                        {
                                                                            margin: '-12 0 0 0',
                                                                            // id: 'htmlStampHistoryTxt',
                                                                            html: '<font size=1 color=grey>History</font>'
                                                                        },
                                                                    ]

                                                                },


                                                           ]
                                                       },




                                                           {
                                                               xtype: 'container',
                                                               id: 'containerFloatPanel_SubscriberMaster_MenuBottom_RedeemHistory',
                                                               hidden: true,
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
                                                                        id: 'btn_FloatPanel_SubscriberMaster_MenuBottom_RedeemHistory',
                                                                        //  badgeText: '1',
                                                                        margin: '0 0 0 0',

                                                                        height: 36,
                                                                        width: 36,
                                                                        html: '<img src="resources/icons/redeemHistory.png" width="26" height="26" alt="Company Name">',
                                                                        ui: 'plain',
                                                                        handler: function () {
                                                                          
                                                                        }
                                                                    },
                                                                    {
                                                                        xtype: 'container',
                                                                        id: 'containerFloatPanel_SubscriberMaster_MenuBottom_RedeemHistoryTxt',
                                                                        width: '100%',
                                                                        layout: {
                                                                            type: 'vbox',
                                                                            pack: 'start',
                                                                            align: 'center'

                                                                        },
                                                                        items: [
                                                                            {
                                                                                margin: '-12 0 0 0',
                                                                                // id: 'htmlStampHistoryTxt',
                                                                                html: '<font size=1 color=grey>Redeem</font>'
                                                                            },
                                                                            {
                                                                                margin: '-12 0 0 0',
                                                                                // id: 'htmlStampHistoryTxt',
                                                                                html: '<font size=1 color=grey>History</font>'
                                                                            },
                                                                        ]

                                                                    },


                                                               ]
                                                           },
                                                           {
                                                               xtype: 'container',
                                                               id: 'containerFloatPanel_SubscriberMaster_MenuBottom_MyLevel',
                                                              width: '25%',
                                                               //height: 30,
                                                               margin: '0 0 0 0',
                                                              // flex: 1,
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
                                                                        id: 'btn_FloatPanel_SubscriberMaster_MenuBottom_MyLevel',
                                                                        //  badgeText: '1',
                                                                        margin: '0 0 0 0',

                                                                        height: 36,
                                                                        width: 36,
                                                                      //  html: '<img src="resources/icons/membershipPurpleTwo.png" width="26" height="26" alt="Company Name">',
                                                                        ui: 'plain',
                                                                        handler: function () {

                                                                        }
                                                                    },
                                                                    {
                                                                        xtype: 'container',
                                                                        id: 'containerFloatPanel_SubscriberMaster_MenuBottom_MyLevelTxt',
                                                                        width: '100%',
                                                                        layout: {
                                                                            type: 'vbox',
                                                                            pack: 'start',
                                                                            align: 'center'

                                                                        },
                                                                        items: [
                                                                            {
                                                                                margin: '-12 0 0 0',
                                                                                // id: 'htmlStampHistoryTxt',
                                                                                html: '<font size=1 color=grey>My</font>'
                                                                            },
                                                                            {
                                                                                margin: '-12 0 0 0',
                                                                                // id: 'htmlStampHistoryTxt',
                                                                                html: '<font size=1 color=grey>Reward Level</font>'
                                                                            },
                                                                        ]

                                                                    },


                                                               ]
                                                           },



                                                           {
                                                               xtype: 'container',
                                                               id: 'containerFloatPanel_SubscriberMaster_MenuBottom_Setting',
                                                               width: '25%',
                                                               //height: 30,
                                                               margin: '0 0 0 0',
                                                              // flex: 1,
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
                                                                        id: 'btn_FloatPanel_SubscriberMaster_MenuBottom_Setting',
                                                                        //  badgeText: '1',
                                                                        margin: '0 0 0 0',

                                                                        height: 36,
                                                                        width: 36,
                                                                        html: '<img src="resources/icons/settingPurple.png" width="26" height="26" alt="Company Name">',
                                                                        ui: 'plain',
                                                                        handler: function () {

                                                                        }
                                                                    },
                                                                    {
                                                                        xtype: 'container',
                                                                        id: 'containerFloatPanel_SubscriberMaster_MenuBottom_SettingTxt',
                                                                        width: '100%',
                                                                        layout: {
                                                                            type: 'vbox',
                                                                            pack: 'start',
                                                                            align: 'center'

                                                                        },
                                                                        items: [
                                                                            {
                                                                                margin: '-12 0 0 0',
                                                                                // id: 'htmlStampHistoryTxt',
                                                                                html: '<font size=1 color=grey>Setting</font>'
                                                                            },
                                                                            {
                                                                                margin: '-12 0 0 0',
                                                                                // id: 'htmlStampHistoryTxt',
                                                                                html: '<font size=1 color=grey>.</font>'
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




                              //////////////////////////////////////
                              {
                                  xtype: 'container',
                                  id: 'containerFloatPanel_SubscriberMasterTitleOutter',
                                  hidden:true,
                                  width: '100%',
                                  docked:'bottom',
                                  height: 55,
                                  // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                                  style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',

                                  layout: {
                                      type: 'hbox',
                                      pack: 'start',
                                      align: 'center'

                                  },
                                  //scrollable: {
                                  //    direction: 'horizontal',
                                  //    directionLock: true
                                  //},
                                  items: [

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
                                           scrollable: {
                                               direction: 'horizontal',
                                               directionLock: true
                                           },
                                           items: [



                                                {
                                                    xtype: 'container',
                                                    width: 600,
                                                    style: "background-color: transparent",
                                                    height: 55,
                                                    layout: {
                                                        type: 'hbox',
                                                        pack: 'center',
                                                        align: 'center',
                                                    },
                                                    items: [

                                                        //letak sini

                                                        {
                                                            xtype: 'container',
                                                            id: 'containerFloatPanel_SubscriberMasterTitleCustomerInfo',
                                                            flex: 1,
                                                            //width: '33.3%',
                                                            //height: 45,
                                                            style: "background-color: transparent",
                                                            //style: "background-color: #F35B57;",

                                                            layout: {
                                                                type: 'vbox',
                                                                pack: 'center',
                                                                align: 'center'

                                                            },
                                                            items: [


                                                                     
                                                          







                                                                 {
                                                                     xtype: 'button',
                                                                     id: 'btnCustomerInfo_FloatPanel_SubscriberMaster',
                                                                     //  badgeText: '1',
                                                                     margin: '0 0 0 0',
                                                                     height: 36,
                                                                     width: 36,
                                                                     html: '<img src="resources/icons/MyAccountPurpleOne.png" width="26" height="26" alt="Company Name">',
                                                                     ui: 'plain',
                                                                     handler: function () {
                                                                         // NotificationsPanelShow();
                                                                         // LoyaltyCardRedeemListShow();
                                                                         Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(0);
                                                                         Ext.getCmp('htmlFloatPanel_SubscriberMaster_TitleHeaderTxt').setHtml('<font size=2 color=white><b>My Account</b></font>');
                                                                         Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
                                                                         Ext.getCmp('htmlChangePasswordTxt').setHtml('<font size=1 color=grey><b>Change Password</b></font>');
                                                                         Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
                                                                         Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=purple><b><u>My Account</u></b></font>');

                                                                     }
                                                                 },

                                                                     {
                                                                         xtype: 'container',
                                                                         id: 'containerMyAccount_Dashboard_MenuBottom_MyAccountTxt',
                                                                         width: '100%',
                                                                         layout: {
                                                                             type: 'vbox',
                                                                             pack: 'start',
                                                                             align: 'center'

                                                                         },
                                                                         items: [
                                                                             {
                                                                                 margin: '-12 0 0 0',
                                                                                 // id: 'htmlStampHistoryTxt',
                                                                                 html: '<font size=1 color=grey>My</font>'
                                                                             },
                                                                             {
                                                                                 margin: '-12 0 0 0',
                                                                                 id: 'htmlCustomerInfoTxt',
                                                                                 html: '<font size=1 color=grey>Account</font>'
                                                                             },
                                                                         ]

                                                                     },

                                                                  

                                                            ]
                                                        },

                                          {
                                              xtype: 'container',
                                              id: 'containerFloatPanel_SubscriberMasterChangePassword',
                                              //width: '33.3%',
                                              //height: 45,
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
                                                       id: 'btnChangePassword_FloatPanel_SubscriberMaster',
                                                       //  badgeText: '1',
                                                       margin: '0 0 0 0',
                                                       height: 36,
                                                       width: 36,
                                                       html: '<img src="resources/icons/ChangePasswordPurpleOne.png" width="26" height="26" alt="Company Name">',
                                                       ui: 'plain',
                                                       handler: function () {
                                                           // NotificationsPanelShow();
                                                           Load_FloatPanel_SubscriberMaster_LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore();
                                                           Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(1);
                                                           Ext.getCmp('htmlFloatPanel_SubscriberMaster_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Stamp Card History</b></font>');

                                                           Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
                                                           Ext.getCmp('htmlChangePasswordTxt').setHtml('<font size=1 color=purple><b><u>Change Password</u></b></font>');
                                                           Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
                                                           Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=grey><b>Customer Info</b></font>');

                                                           //  LoyaltyCardRedeemListShow();
                                                       }
                                                   },
                                                    {
                                                        margin: '-12 0 0 0',
                                                        id: 'htmlChangePasswordTxt',
                                                        html: '<font size=1 color=grey><b>Change Password</b></font>'
                                                    },

                                              ]
                                          },



                                          {
                                              xtype: 'container',
                                              id: 'containerFloatPanel_SubscriberMasterStampCardHistory',
                                              //width: '33.3%',
                                              //height: 45,
                                              hidden: true,
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
                                                       id: 'btnStampCardHistory_FloatPanel_SubscriberMaster',
                                                       //  badgeText: '1',
                                                       margin: '0 0 0 0',
                                                       height: 36,
                                                       width: 36,
                                                       html: '<img src="resources/icons/StampTiltLeftOne.png" width="26" height="26" alt="Company Name">',
                                                       ui: 'plain',
                                                       handler: function () {
                                                           // NotificationsPanelShow();
                                                           Load_FloatPanel_SubscriberMaster_LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore();
                                                           Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(2);
                                                           Ext.getCmp('htmlFloatPanel_SubscriberMaster_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Stamp Card History</b></font>');

                                                           Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
                                                           Ext.getCmp('htmlStampHistoryTxt').setHtml('<font size=1 color=purple><b><u>Stamp History</u></b></font>');
                                                           Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
                                                           Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=grey><b>Customer Info</b></font>');

                                                           //  LoyaltyCardRedeemListShow();
                                                       }
                                                   },
                                                    {
                                                        margin: '-12 0 0 0',
                                                        id: 'htmlStampHistoryTxt',
                                                        html: '<font size=1 color=grey><b>Stamp History</b></font>'
                                                    },

                                              ]
                                          },




                                          {
                                              xtype: 'container',
                                              id: 'containerFloatPanel_SubscriberMasterStampPointHistory',
                                              hidden: true,
                                              //width: '33.3%',
                                              //height: 45,
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
                                                       id: 'btnStampPointHistory_FloatPanel_SubscriberMaster',
                                                       //  badgeText: '1',
                                                       margin: '0 0 0 0',
                                                       height: 36,
                                                       width: 36,
                                                       html: '<img src="resources/icons/pointPurpleOne.png" width="26" height="26" alt="Company Name">',
                                                       ui: 'plain',
                                                       handler: function () {
                                                           // NotificationsPanelShow();
                                                           Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(3);
                                                           Ext.getCmp('htmlFloatPanel_SubscriberMaster_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Points History</b></font>');
                                                           Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
                                                           Ext.getCmp('htmlChangePasswordTxt').setHtml('<font size=1 color=grey><b>Stamp History</b></font>');
                                                           Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=purple><b><u>Point History</u></b></font>');
                                                           Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=grey><b>Customer Info</b></font>');
                                                           //  LoyaltyCardRedeemListShow();
                                                       }
                                                   },
                                                    {
                                                        margin: '-12 0 0 0',
                                                        id: 'htmlPointHistoryTxt',
                                                        html: '<font size=1 color=grey><b>Point History</b></font>'
                                                    },

                                              ]
                                          },
                                          {
                                              xtype: 'container',
                                              id: 'containerFloatPanel_SubscriberMasterTitleRedeemHistory',
                                              hidden: true,
                                              //width: '33.3%',
                                              //height: 45,
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
                                                       id: 'btnRedeemHistory_FloatPanel_SubscriberMasterBottom',
                                                       //  badgeText: '1',
                                                       margin: '0 0 0 0',
                                                       height: 36,
                                                       width: 36,
                                                       html: '<img src="resources/icons/redeemHistory.png" width="26" height="26" alt="Company Name">',
                                                       ui: 'plain',
                                                       handler: function () {
                                                           // NotificationsPanelShow();




                                                           //  LoyaltyCardRedeemListShow();
                                                       }
                                                   },
                                                    {
                                                        margin: '-12 0 0 0',
                                                        id: 'htmlRedeemHistoryTxt',
                                                        html: '<font size=1 color=grey><b>Redeem History</b></font>'
                                                    },

                                              ]
                                          },


                                                    ]
                                                },






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
    return _FloatPanel_SubscriberMaster;



}








function FloatPanel_SubscriberMasterShow() {

    Ext.Viewport.remove(_FloatPanel_SubscriberMaster);
    this.overlay = Ext.Viewport.add(FloatPanel_SubscriberMaster());
    this.overlay.show();
    isFloatPanel_SubscriberMasterOpen = 'Y';
    AddRoutePages("FloatPanel_SubscriberMasterHide()");
    Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').getTabBar().hide();
    Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
    Ext.getCmp('htmlChangePasswordTxt').setHtml('<font size=1 color=grey><b>Stamp History</b></font>');
    Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
    Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=purple><b><u>My Account</u></b></font>');


    var containerView = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_SubscriberMasterPicProfile]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          FloatPanel_SubscriberMaster_UploadPhoto();
      }
    );






    document.getElementById("input-FloatPanel_SubscriberMasterChangePassword_CurrentPassword").addEventListener("keyup", OnKeyUp_FloatPanel_SubscriberMasterChangePassword_CurrentPassword);
   

    FloatPanel_SubscriberMaster_AyohaUserProfileLoadProfileStore();
}



function FloatPanel_SubscriberMasterHide() {
    // FloatPanel_MyAccountRankDescription_AddCardHide();
    if (isFloatPanel_SubscriberMasterOpen == "Y") {
        _FloatPanel_SubscriberMaster.hide(); isFloatPanel_SubscriberMasterOpen = 'N';
        RemovePages("FloatPanel_SubscriberMasterHide()");
    }

}


function OnKeyUp_FloatPanel_SubscriberMasterChangePassword_CurrentPassword() {


    var currKl = document.getElementById("input-FloatPanel_SubscriberMasterChangePassword_CurrentPassword").value;
    console.log(GetCurrAyohaUserKatalaluan());
    if ( currKl.length >= GetCurrAyohaUserKatalaluan().length-2 )  {
        if (currKl == GetCurrAyohaUserKatalaluan()) {

            Ext.getCmp('btFloatPanel_SubscriberMasterChangePassword_CurrentPassword_MessageIcon').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');
            Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password Matched!</div>');

            Ext.getCmp('htmlFloatPanel_SubscriberMasterChangePassword_NewPasswordLabel').setHtml('<font size=2 color=white>New Password</font>');
            Ext.getCmp('htmlFloatPanel_SubscriberMasterChangePassword_ConfirmPasswordLabel').setHtml('<font size=2 color=white>*Confirm Password</font>');
            Ext.getCmp('FloatPanel_SubscriberMasterChangePassword_NewPassword').setHtml('<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_NewPassword"  style="border-color:white;color:white;width:100%;text-align: left;font-size:20px;font-weight:bold;">');
            Ext.getCmp('FloatPanel_SubscriberMasterChangePassword_ConfirmPassword').setHtml('<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword"  style="border-color:white;color:white;width:100%;text-align: left;font-size:20px;font-weight:bold;">');

            Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_Save').setHidden(false);
            document.getElementById("input-FloatPanel_SubscriberMasterChangePassword_NewPassword").addEventListener("keyup", OnKeyUp_FloatPanel_SubscriberMasterChangePassword_NewPassword);
            document.getElementById("input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword").addEventListener("keyup", OnKeyUp_FloatPanel_SubscriberMasterChangePassword_ConfirmPassword);

            
            
        } else {

            Ext.getCmp('btFloatPanel_SubscriberMasterChangePassword_CurrentPassword_MessageIcon').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');
            Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password Not Matched!</div>');
            Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message').setHidden(false);
            Ext.getCmp('htmlFloatPanel_SubscriberMasterChangePassword_NewPasswordLabel').setHtml('<font size=2 color=#ECF0F1>New Password</font>');
            Ext.getCmp('htmlFloatPanel_SubscriberMasterChangePassword_ConfirmPasswordLabel').setHtml('<font size=2 color=#ECF0F1>*Confirm Password</font>');
            Ext.getCmp('FloatPanel_SubscriberMasterChangePassword_NewPassword').setHtml('<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_NewPassword" readOnly style="border-color:#ECF0F1;color:white;width:100%;text-align: left;font-size:20px;font-weight:bold;">');
            Ext.getCmp('FloatPanel_SubscriberMasterChangePassword_ConfirmPassword').setHtml('<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword" readOnly style="border-color:#ECF0F1;color:white;width:100%;text-align: left;font-size:20px;font-weight:bold;">');
            Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_Save').setHidden(true);
            document.getElementById("input-FloatPanel_SubscriberMasterChangePassword_NewPassword").removeEventListener("keyup", OnKeyUp_FloatPanel_SubscriberMasterChangePassword_NewPassword);
            document.getElementById("input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword").removeEventListener("keyup", OnKeyUp_FloatPanel_SubscriberMasterChangePassword_ConfirmPassword);
          
        }
        Ext.getCmp('btFloatPanel_SubscriberMasterChangePassword_CurrentPassword_MessageIcon').setHidden(false);
    } else {


        Ext.getCmp('btFloatPanel_SubscriberMasterChangePassword_CurrentPassword_MessageIcon').setHidden(true);
        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message').setHidden(false);
        Ext.getCmp('htmlFloatPanel_SubscriberMasterChangePassword_NewPasswordLabel').setHtml('<font size=2 color=#ECF0F1>New Password</font>');
        Ext.getCmp('htmlFloatPanel_SubscriberMasterChangePassword_ConfirmPasswordLabel').setHtml('<font size=2 color=#ECF0F1>*Confirm Password</font>');
        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Current Password is Required!</div>');
        Ext.getCmp('FloatPanel_SubscriberMasterChangePassword_NewPassword').setHtml('<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_NewPassword" readOnly style="border-color:#ECF0F1;color:white;width:100%;text-align: left;font-size:20px;font-weight:bold;">');
        Ext.getCmp('FloatPanel_SubscriberMasterChangePassword_ConfirmPassword').setHtml('<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword" readOnly style="border-color:#ECF0F1;color:white;width:100%;text-align: left;font-size:20px;font-weight:bold;">');
        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_Save').setHidden(true);


    }


}








function OnKeyUp_FloatPanel_SubscriberMasterChangePassword_NewPassword() {
    Ext.getCmp('btFloatPanel_SubscriberMasterChangePassword_CurrentPassword_MessageIcon').setHidden(true);
    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message').setHidden(true);

    var Password = document.getElementById('input-FloatPanel_SubscriberMasterChangePassword_NewPassword').value;
    var ConfirmPassword = document.getElementById('input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword').value;


    if (Password.length < 6) {

        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(false);
        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password cannot less than 6 charaters!</div>');
        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHidden(false);
        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');
        //Ext.getCmp('container_FloatPanel_AyohaUserRegistrationPassword').setMargin('20 0 0 0');


        if (ConfirmPassword) {
            if (Password != ConfirmPassword) {
                Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHidden(false);
                Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password Not is matched!</div>');

                Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHidden(false);
                Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');
                
            }


          
        }

       
    } else {
        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(true);
        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHidden(true);



            if (ConfirmPassword) {
                if (Password == ConfirmPassword) {
                    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(false);
                    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');

                    Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHidden(false);
                    Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');

                    Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHidden(false);
                    Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');

                    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHidden(false);
                    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');
                    //  Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(true);
                }
                if (Password != ConfirmPassword) {
                    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHidden(false);
                    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password Not is matched!</div>');

                    Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHidden(false);
                    Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');

                }
            }





    }



    //if (Password.length > 6) {
    //    //Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(true);
    //    //Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHidden(true);
    //    // Ext.getCmp('container_FloatPanel_AyohaUserRegistrationPassword').setMargin('30 0 0 0');

    //    if (ConfirmPassword) {
    //        if (Password == ConfirmPassword) {
    //            Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(false);
    //            Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');

    //            Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHidden(false);
    //            Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');

    //            Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHidden(false);
    //            Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');
    //            //  Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(true);
    //        }
    //    }
       
    //}

    
}


function OnKeyUp_FloatPanel_SubscriberMasterChangePassword_ConfirmPassword() {
    var Password = document.getElementById('input-FloatPanel_SubscriberMasterChangePassword_NewPassword').value;
    var ConfirmPassword = document.getElementById('input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword').value;
    Ext.getCmp('btFloatPanel_SubscriberMasterChangePassword_CurrentPassword_MessageIcon').setHidden(true);
    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message').setHidden(true);
    if ((Password == ConfirmPassword) && (Password.length >= 6)) {




        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHidden(false);
        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');

        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHidden(false);
        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');


        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHidden(false);
        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');

        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(false);
        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');
      



    } else {

        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(true);

        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHidden(false);
        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password Not is matched!</div>');

        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHidden(true);
        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');

        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHidden(false);
        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');





    }
}
















function FloatPanel_SubscriberMasterHide() {
    if (isFloatPanel_SubscriberMasterOpen == 'Y') {
        _FloatPanel_SubscriberMaster.hide(); isFloatPanel_SubscriberMasterOpen = 'N';
        RemovePages(_FloatPanel_SubscriberMaster, "isFloatPanel_SubscriberMasterOpen");
    }
    
}



var StampCount;
function Load_FloatPanel_SubscriberMaster_LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore() {

    Ext.getStore('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore').getProxy().setExtraParams({
        SubscriberAccNo: GetCurrentAccountNo(),
        EnterpriseAccNo: GetEnterpriseAccNo()
    });
    Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore').getProxy().setExtraParams({
            SubscriberAccNo: GetCurrentAccountNo(),
            EnterpriseAccNo: GetEnterpriseAccNo()
        });
        Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore').load();
        var myStore = Ext.getStore('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore');
        StampCount = myStore.getCount();
        Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');       
        // adjustHeight();
        Ext.Viewport.setMasked(false);

       






    });
    task.delay(2000);
}







function Load_FloatPanel_SubscriberMaster_LoyaltyStampLoadBySubscriberAccNoStore() {
    Ext.getStore('LoyaltyStampLoadBySubscriberAccNoStore').getProxy().setExtraParams({
        SubscriberAccNo: GetCurrAyohaUserAccountNo()
    });
    Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('LoyaltyStampLoadBySubscriberAccNoStore').getProxy().setExtraParams({
            SubscriberAccNo: GetCurrAyohaUserAccountNo()
        });
        Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoStore').load();
        var myStore = Ext.getStore('LoyaltyStampLoadBySubscriberAccNoStore');
        StampCount = myStore.getCount();
        Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        // adjustHeight();
        Ext.Viewport.setMasked(false);








    });
    task.delay(2000);
}









function FloatPanel_SubscriberMaster_UploadPhoto() {
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_SubscriberMasterUploadedPhoto").click();
    });
}

var globalFloatPanel_SubscriberMasterImg64;
function inputImgFloatPanel_SubscriberMasterUploadedPhoto() {
    var file = document.getElementById('inputImg-FloatPanel_SubscriberMasterUploadedPhoto').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_SubscriberMasterUploadedPhoto').files[0].name;

    //var FileSize = file.size / 1024; // in MB
    //console.log(FileSize);
    //if (FileSize > 4096) {


    //    swalFireFail("Image size cannot exceeds 4 MB!");
    //    // CustomeMsgBoxShow('Image size exceeds 200 KB!');
    //    return;
    //    // $(file).val(''); //for clearing with Jquery
    //} else {

        if (file) {

            if (file.type.match("image.*")) {
                var reader = new FileReader();
                reader.readAsDataURL(file/*, "UTF-8"*/);
                reader.onload = function (event) {
                    globalFloatPanel_SubscriberMasterImg64 = event.target.result;
                    document.getElementById('input-FloatPanel_SubscriberMasterPhotoName').value = fileName;

                  
                    //  Ext.getCmp('htmlFloatPanel_SubscriberMasterPicProfile').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 20px 20px 20px 20px;width:33px;height:33px" ><img src="' + globalFloatPanel_SubscriberMasterImg64 + '"      style="width: 30px; height: 30px; border:2px none grey; border-radius: 50%; max-width:32px; margin:-1px 0px 0px 2px"></div>');
                    Ext.getCmp('htmlFloatPanel_SubscriberMasterPicProfile').setHtml('<img src="' + globalFloatPanel_SubscriberMasterImg64 + '"  style="width: 200px; height: 200px; border:2px solid white; border-radius: 50%; "/>');
                    FloatPanel_SubscriberMasterUploadedPhoto_ResizeImage();

                    //html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:90px;height:90px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url(resources/icons/freecup1Inactive.png); background-size: 100% 100%;" id="divContentFloatLoyaltyCardStamp11" ></div>',


                    // Ext.getCmp('AccomodationReceiptPicture').setSrc(FuelReceiptsImg64);
                    //   localStorage.setItem('CurrReceiptsAttachmentPic', FuelReceiptsImg64);
                    // FuelReceiptsImg64 = ContentString;
                    // Ext.getCmp('btnMainMenuMyAccountImg').setHtml('<img src=' + img64AccPicProfile + '  style="width: 120px; height: 120px; border:2px solid white; border-radius: 50%; max-width:200px;" alt="Company Name">');

                    //    localStorage.setItem('EnterpriseLogo64', ContentString);
                    // console.log(FuelReceiptsImg64);
                };


            }
            else {
                //  img64AccPicProfile = Picture;
            }
        }
    //}
}



function FloatPanel_SubscriberMasterUploadedPhoto_ResizeImage() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        var filesToUploads = document.getElementById('inputImg-FloatPanel_SubscriberMasterUploadedPhoto').files;
        var file = filesToUploads[0];
        if (file) {

            var reader = new FileReader();
            // Set the image once loaded into file reader
            reader.onload = function (e) {

                var img = document.createElement("img");
                img.src = e.target.result;

                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);

                var MAX_WIDTH = 1000;
                var MAX_HEIGHT = 1000;
                var width = img.width;
                var height = img.height;

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, width, height);

                globalFloatPanel_SubscriberMasterImg64 = "";

                globalFloatPanel_SubscriberMasterImg64 = canvas.toDataURL(file.type);

                // document.getElementById('output').src = dataurl;

                // Ext.getCmp('FloatPanel_AyohaUserRegistrationPicProfile').setHtml('<img src="' + dataurl + '"  style="width: 140px; height: 140px; border:2px solid white; border-radius: 50%; "/>');

                // console.log("Resize image:" + globalUserPicProfile64)
            }
            reader.readAsDataURL(file);

        }

    } else {
        alert('The File APIs are not fully supported.');
    }
}

function FloatPanel_SubscriberMaster_AyohaUserProfileLoadProfileStore() {

    Ext.getStore('AyohaUserProfileLoadProfileStore').getProxy().setExtraParams({
        AccountNo: GetCurrAyohaUserAccountNo()
    });
    Ext.StoreMgr.get('AyohaUserProfileLoadProfileStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaUserProfileLoadProfileStore').getProxy().setExtraParams({
            AccountNo: GetCurrAyohaUserAccountNo()
        });
        Ext.StoreMgr.get('AyohaUserProfileLoadProfileStore').load();
        var myStore = Ext.getStore('AyohaUserProfileLoadProfileStore');
        var modelRecord = myStore.getAt(0);
        

     //   'ID',
     //'AccountNo',
     //'AccountName',
     //'Email',
     //'PhoneNo',
     //'Photo',
     //'Gender',
     //'DOB',
     //'RowStatus',
     //'CreatedDate',
     //'ModifiedDate',
     //'UserName',
     //'Katalaluan',
     //'LastLoginDate',
     //'PhotoName',
     //'GUID',
     //'isUserVerified',
     //'VerifyString',
     //'AyohaVersion',

       // Ext.getCmp('btnFloatPanel_SubscriberMasterPicProfile').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 20px 20px 20px 20px;width:33px;height:33px" ><img src="' + modelRecord.get('Photo') + '"      style="width: 30px; height: 30px; border:2px none grey; border-radius: 50%; max-width:32px; margin:-1px 0px 0px 2px"></div>');
        Ext.getCmp('htmlFloatPanel_SubscriberMasterPicProfile').setHtml('<img src="' + modelRecord.get('Photo') + '"  style="width: 160px; height: 160px; border:2px solid white; border-radius: 50%; "/>');
        //Ext.getCmp('htmlFloatPanel_SubscriberMasterHaiUser').setHtml('<font size=2 color=black><b>Hi '+modelRecord.get('AccountName')+'!</b></font>');



        Ext.getCmp('FloatPanel_MyAccountMaster_PicPicture').setHtml('<img src="' + modelRecord.get('Photo') + '" alt="Image" style="width:95px;height:95px;border-radius: 50%;border: 2px solid #ECF0F1;zIndex:400px;margin:0px 0px 0px -10px;">');      
        Ext.getCmp('btnMyAccount_DashboardPicProfile').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 20px 20px 20px 20px;width:33px;height:33px" ><img src="' + modelRecord.get('Photo') + '"      style="width: 30px; height: 30px; border:2px none grey; border-radius: 50%; max-width:32px; margin:-1px 0px 0px 2px"></div>');
       
        localStorage.setItem('AyohaUserID', modelRecord.get('ID'));
        document.getElementById('input-FloatPanel_SubscriberMasterPhotoName').value = modelRecord.get('PhotoName');
        document.getElementById('input-FloatPanel_SubscriberMasterAccountName').value = modelRecord.get('AccountName');
        document.getElementById('input-FloatPanel_SubscriberMasterEmail').value = modelRecord.get('Email');
        document.getElementById('input-FloatPanel_SubscriberMasterPhoneNo').value = modelRecord.get('PhoneNo');
        document.getElementById('input-FloatPanel_SubscriberMasterDOB').value = modelRecord.get('DOB');


            
        document.getElementById('input-FloatPanel_SubscriberMasterAccountName_edit').value = modelRecord.get('AccountName');
        document.getElementById('input-FloatPanel_SubscriberMasterEmail_edit').value = modelRecord.get('Email');
        document.getElementById('input-FloatPanel_SubscriberMasterPhoneNo_edit').value = modelRecord.get('PhoneNo');
        document.getElementById('input-FloatPanel_SubscriberMasterDOB_edit').value = modelRecord.get('DOB');


        document.getElementById('input-FloatPanel_SubscriberMasterCreatedDate').value = modelRecord.get('CreatedDate');
        document.getElementById('input-FloatPanel_SubscriberMasterVersion').value = modelRecord.get('AyohaVersion');
        document.getElementById('input-FloatPanel_SubscriberMasterStatus').value = modelRecord.get('RowStatus');
        document.getElementById('input-FloatPanel_SubscriberMasterLastLoginDate').value = modelRecord.get('LastLoginDate');
        document.getElementById('input-FloatPanel_SubscriberMasterisUserVerified').value = modelRecord.get('isUserVerified');


        var isUserVerified = modelRecord.get('isUserVerified');
        Ext.getCmp('btnFloatPanel_SubscriberMasterisUserVerifiedMessage').setHidden(false);
        if (isUserVerified == "NO") {
            Ext.getCmp('btnFloatPanel_SubscriberMasterisUserVerifiedMessage').setHtml('<img src="resources/icons/errorklipklip.gif" width="25" height="25" alt="Company Name">');
        } if (isUserVerified == "YES") {
            Ext.getCmp('btnFloatPanel_SubscriberMasterisUserVerifiedMessage').setHtml('<img src="resources/icons/VerifiedUser.png" width="25" height="25" alt="Company Name">');
            Ext.getCmp('htmlFloatPanel_SubscriberMasterVerifiedDateTxt').setHidden(false);
            Ext.getCmp('FloatPanel_SubscriberMasterVerifiedDate').setHidden(false);
            document.getElementById("input-FloatPanel_SubscriberMasterVerifiedDate").value = modelRecord.get('UserVerifiedDate');
        }

        

   

       
        Ext.Viewport.setMasked(false);








    });
    task.delay(800);

}



function FloatPanel_SubscriberMaster_SaveMyAccount() {

    var AccountName = document.getElementById('input-FloatPanel_SubscriberMasterAccountName_edit').value;
    var Email =  document.getElementById('input-FloatPanel_SubscriberMasterEmail_edit').value;
    var PhoneNo =document.getElementById('input-FloatPanel_SubscriberMasterPhoneNo_edit').value;
    var DOB =document.getElementById('input-FloatPanel_SubscriberMasterDOB_edit').value;



    if (!AccountName) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Account Name required!</font>");
        return;
    }
    if (!PhoneNo) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Phone No required!</font>");
        return;
    }
    if (!Email) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Email required!</font>");
        return;
    }
 
   

    //if (!globalFloatPanel_SubscriberMasterImg64) {
    //    swalFireFail("Save Failed!!!" + "<br><font size=2>Profile Picture required!</font>");
    //    return;
    //}


    

    var imgbase64;

    if (globalFloatPanel_SubscriberMasterImg64) {
        imgbase64 = globalFloatPanel_SubscriberMasterImg64;
    } else {
        imgbase64 = "ExistingImage";
    }
  
    //AP.ID, AP.AccountNo, AP.AccountName, AP.Email, AP.PhoneNo
    //  , AP.Photo, AP.Gender, AP.DOB, AP.PhotoName

 
    // (CC.ID, CC.EnterpriseAccNo, CC.StampCampaignCode, CC.ImgName, CC.ImgPath, CC.RowStatus, CC.CreatedBy, CC.ImageBase64, CC.ShowHide);
    // alert(ContentCardImgNames);
    var objn = {
        "ID":GetCurrAyohaUserID(),
        "AccountNo": GetCurrAyohaUserAccountNo(),
        "AccountName": document.getElementById('input-FloatPanel_SubscriberMasterAccountName_edit').value,
        "Email": document.getElementById('input-FloatPanel_SubscriberMasterEmail_edit').value,
        "PhoneNo": document.getElementById('input-FloatPanel_SubscriberMasterPhoneNo_edit').value,
        "Photo": imgbase64,
        "Gender": "NA",
        "DOB": document.getElementById('input-FloatPanel_SubscriberMasterDOB_edit').value,
        "PhotoName": document.getElementById('input-FloatPanel_SubscriberMasterPhotoName').value,
        //"ContentCardImgName": document.getElementById('inputName-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage').value,

    };
 
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileUpdate',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Save Succesfully!");
                FloatPanel_SubscriberMaster_AyohaUserProfileLoadProfileStore();
            }
            else {

                swalFireFail( "Save Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Save Failed!!");
        }

    });
}


function FloatPanel_SubscriberMaster_UpdatePasswordMyAccount() {
    var Password = document.getElementById('input-FloatPanel_SubscriberMasterChangePassword_NewPassword').value;
    var ConfirmPassword = document.getElementById('input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword').value;
  
    if (Password != ConfirmPassword)  {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Password Not Matched!</font>");
        return;

    } if (Password.length < 6) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Password Cannot less than 6 characters!</font>");
        return;
    }


    else {

        
        var objn = {
            "ID": GetCurrAyohaUserID(),
            "AccountNo": GetCurrAyohaUserAccountNo(),
            "Katalaluan": ConfirmPassword,
           

        };

        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileUpdateKataLaluan',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    swalFireSuccess("Change Password succeed!");
                    FloatPanel_SubscriberMasterHide();
                }
                else {

                    swalFireFail("Save Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
                }
                Ext.Viewport.unmask();

            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
                swalFireFail("Save Failed!!");
            }

        });

    }
}