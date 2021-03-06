Ext.define('ianMizi.view.AyohaCardManagement.FloatPanel_AyohaCardManagement_UserEnterprisesList', {

});

var _FloatPanel_AyohaCardManagement_UserEnterprisesList;


var isFloatPanel_AyohaCardManagement_UserEnterprisesListOpen = 'N';











function FloatPanel_AyohaCardManagement_UserEnterprisesList() {

    _FloatPanel_AyohaCardManagement_UserEnterprisesList =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         height: 510,
         width: '95%',
         id: 'LoadingFloatPanel_AyohaCardManagement_UserEnterprisesListID',
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
             type: 'slideOut',
             direction: 'up',
             easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         // style: 'border-bottom:1px solid;background-color:white;',
         style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_AyohaCardManagement_UserEnterprisesList.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaCardManagement_UserEnterprisesList.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isFloatPanel_AyohaCardManagement_UserEnterprisesListOpen = 'N';
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

                     id: 'containerFloatPanel_AyohaCardManagement_UserEnterprisesListHeader',
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
                                              id: 'btnFloatPanel_AyohaCardManagement_UserEnterprisesListBack',
                                              height: 30,
                                              width: 35,
                                              // iconCls: 'list',
                                              html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {

                                                  _FloatPanel_AyohaCardManagement_UserEnterprisesList.hide(Ext.fx.Animation({
                                                      type: 'slideOut',
                                                      direction: 'left',
                                                      easing: 'cubic-bezier(.7,0,.7,1)',
                                                      duration: 250

                                                  }));
                                                  isFloatPanel_AyohaCardManagement_UserEnterprisesListOpen = 'N';

                                              }
                                          },
                                          {
                                              margin: '0 0 0 0',
                                              html: '<font size=2 color=white><b>Staff List</b></font>'
                                          },
                                           {
                                               xtype: 'spacer',

                                           },















                            ]

                 },



            {


                // xtype: 'button',
                xtype: 'container',
                margin: '10 0 0 0',
                id: 'FloatPanel_AyohaCardManagement_UserEnterprisesListBorderBg',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: ' background-color:transparent;',
                height: 450,
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
                        store: 'AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore',
                        id: 'FloatPanel_AyohaCardManagement_UserEnterprisesListID',
                        mode: 'SINGLE',
                        height: 450,
                        disableSelection: true,
                        itemTpl: '<div class="myContent">' +
                                '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">{AccountName}<br>{UserType}</div>' +

                                   '</div>',
                        width: '100%',
                        listeners: {
                            itemsingletap: function (list, idx, target, records, evt) {
                                var AccountName = records.get('AccountName');
                                var AccountNo = records.get('AccountNo');
                                var UserType = records.get('UserType');
                                StampCampaignStamperInsertUpdate(0, AccountName, AccountNo, UserType);
                            },
                            deselect: function (list, records) {

                            }
                        },





                    },


                ]


            },









             ]




         }







     });
    return _FloatPanel_AyohaCardManagement_UserEnterprisesList;





}

function FloatPanel_AyohaCardManagement_UserEnterprisesListShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_UserEnterprisesList);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_UserEnterprisesList());
    this.overlay.show();
    isFloatPanel_AyohaCardManagement_UserEnterprisesListOpen = 'Y';
    Load_FloatPanel_AyohaCardManagement_AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore();
}


function FloatPanel_AyohaCardManagement_UserEnterprisesListHide() {
    _FloatPanel_AyohaCardManagement_UserEnterprisesList.hide(); isFloatPanel_AyohaCardManagement_UserEnterprisesListOpen = 'N';
}




function StampCampaignStamperInsertUpdate(ID, AccountName, AccountNo, UserType) {




    // (CC.ID, CC.EnterpriseAccNo, CC.StampCampaignCode, CC.ImgName, CC.ImgPath, CC.RowStatus, CC.CreatedBy, CC.ImageBase64, CC.ShowHide);
    // alert(ContentCardImgNames);
    var objn = {
        "ID": ID,
        "AccountName": AccountName,
        "AccountNo": AccountNo,
        "StampCampaignCode": document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_StampCardCampaignCode').value, 
        "UserType": UserType,
        "CreatedBy": GetCurrentUserLogin(),
        "RowStatus":"Active"

    };
    console.log(objn);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/StampCampaignStamper/StampCampaignStamperInsertUpdate',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Add Succesfully!");
                //  Load_FloatPanel_AyohaEnterpriseAccount_AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore();
                FloatPanel_AyohaCardManagement_UserEnterprisesListHide();
                Load_FloatPanel_AyohaCardManagement_EditCard_StampCampaignStamperLoadByStampCampaignCodeStore();

            }
            else {

                swalFireFail("Add Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Add Failed!!");
        }

    });
}


function Load_FloatPanel_AyohaCardManagement_AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore() {

    Ext.getStore('AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore').getProxy().setExtraParams({
        EnterpriseHQAccNo: GetEnterpriseHQAccNo(),

    });
    Ext.StoreMgr.get('AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore').getProxy().setExtraParams({
            EnterpriseHQAccNo: GetEnterpriseHQAccNo()
        });
        Ext.StoreMgr.get('AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore').load();
        var myStore = Ext.getStore('AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore');
        var count = myStore.getCount();


        Ext.Viewport.setMasked(false);








    });
    task.delay(1000);

}



