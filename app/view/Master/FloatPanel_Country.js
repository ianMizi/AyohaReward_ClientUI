Ext.define('ianMizi.view.Master.FloatPanel_Country', {

});

var _FloatPanel_Country;


var isFloatPanel_CountryOpen = 'N';











function FloatPanel_Country() {

    _FloatPanel_Country =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         height: 350,
         width: '95%',
         id: 'LoadingFloatPanel_CountryID',
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
             //type: 'slideOut',
             //direction: 'up',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'border-bottom:1px solid;background-color:white;',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_Country.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_Country.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isFloatPanel_CountryOpen = 'N';
                         RemovePages("FloatPanel_CountryHide()");
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
             style: 'border-bottom:0px solid;background-color:white;',

             //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
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

                     id: 'containerFloatPanel_CountryHeader',
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
                                              id: 'btnFloatPanel_CountryBack',
                                              height: 30,
                                              width: 35,
                                              // iconCls: 'list',
                                              html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {

                                                  _FloatPanel_Country.hide(Ext.fx.Animation({
                                                      type: 'slideOut',
                                                      direction: 'left',
                                                      easing: 'cubic-bezier(.7,0,.7,1)',
                                                      duration: 250

                                                  }));
                                                  isFloatPanel_CountryOpen = 'N';
                                                  RemovePages("FloatPanel_CountryHide()");

                                              }
                                          },

                                           {
                                               xtype: 'spacer',

                                           },


                                             {
                                                 margin: '0 0 0 0',
                                                 html: '<font size=2 color=black><b>Country</b></font>'
                                             },












                            ]

                 },



            {


                // xtype: 'button',
                xtype: 'container',
                margin: '10 0 0 0',
                id: 'FloatPanel_CountryBorderBg',
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
                        store: 'CountryStore',
                        id: 'FloatPanel_CountryLoadMasterListID',
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

                            '<div onclick="FloatPanel_StateLoadMaster_SetCountry(' + "'" + '{Country}' + "'" + ')" style="overflow:auto;width:100%;height:100%;text-align:center"><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:center;width:100%;text-align:center;color:black"><b>{Country}</b></div>' +

                             //edit only/ '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +


                     // '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 35px 0px 0px"><button class="buttonssDelete button14" OnClick="DeleteReceiptImageFromList({ID})"><img src="resources/icons/UogradeAutismeIcon/deletedustbin.png" height="30" width="30"></button></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageParkingShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +

                                   '</div>',

                        width: '100%',
                        height: 290,
                        disableSelection: true,

                        //listeners: {


                        //    itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                        //        var Country = record.get('Country');
                        //        document.getElementById('input-FloatPanel_AyohaStore_DeliveryAddress_Country').value = Country;

                        //        if (isFloatPanel_CountryOpen == 'Y') {
                        //            _FloatPanel_Country.hide(Ext.fx.Animation({
                        //                type: 'popOut',
                        //                duration: 250,
                        //                easing: 'ease-out'
                        //                //type: 'fadeOut',
                        //                //duration: 400,
                        //            }));

                        //        }
                        //        isFloatPanel_CountryOpen = 'N';
                        //        RemovePages(_FloatPanel_Country, "isFloatPanel_CountryOpen");




                        //    },

                        //    itemsingletap: function (dataview, index, target, record, e, eOpts) {
                        //        var Country = record.get('Country');
                        //        document.getElementById('input-FloatPanel_AyohaStore_DeliveryAddress_Country').value = Country;

                        //        if (isFloatPanel_CountryOpen == 'Y') {
                        //            _FloatPanel_Country.hide(Ext.fx.Animation({
                        //                type: 'popOut',
                        //                duration: 250,
                        //                easing: 'ease-out'
                        //                //type: 'fadeOut',
                        //                //duration: 400,
                        //            }));

                        //        }
                        //        isFloatPanel_CountryOpen = 'N';
                        //        RemovePages(_FloatPanel_Country, "isFloatPanel_CountryOpen");



                        //    }
                        //}





                    },


                ]


            },









             ]




         }







     });
    return _FloatPanel_Country;





}

function FloatPanel_CountryShow() {

    Ext.Viewport.remove(_FloatPanel_Country);
    this.overlay = Ext.Viewport.add(FloatPanel_Country());
    this.overlay.show();
    isFloatPanel_CountryOpen = 'Y';
    AddRoutePages("FloatPanel_CountryHide()");
}


function FloatPanel_CountryShow_AyohaPointRedemptionHistory() {

    Ext.Viewport.remove(_FloatPanel_Country);
    this.overlay = Ext.Viewport.add(FloatPanel_Country());
    this.overlay.show();
    isFloatPanel_CountryOpen = 'Y';
    AddRoutePages("FloatPanel_CountryHide()");
}

function FloatPanel_CountryHide() {
    _FloatPanel_Country.hide(); isFloatPanel_CountryOpen = 'N';
    RemovePages("FloatPanel_CountryHide()");
}




function FloatPanel_StateLoadMaster_SetCountry(Country) {
    document.getElementById('input-FloatPanel_AyohaStore_DeliveryAddress_Country').value = Country;

    if (isFloatPanel_CountryOpen == 'Y') {
        _FloatPanel_Country.hide(Ext.fx.Animation({
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
            //type: 'fadeOut',
            //duration: 400,
        }));

    }
    isFloatPanel_CountryOpen = 'N';
    RemovePages("FloatPanel_CountryHide()");
}



