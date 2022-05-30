Ext.define('ianMizi.view.Advertisement.FloatPanel_Advertisement_FloatAdvertisement', {
});

var isFloatAdvertisementOpen = "N";








var _FloatPanel_Advertisement_FloatAdvertisement;

function FloatPanel_Advertisement_FloatAdvertisement() {

    _FloatPanel_Advertisement_FloatAdvertisement = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_Advertisement_FloatAdvertisementID',
            xtype: 'panel',
            height: 1,
            width: 1,
            //  draggable: true,
            //  zIndex: -10,
            draggable: false,
           // top: 100,
          //  centered: true,
            modal: false,
            bottom:110,
            left: -20,
           // right: -40,
            showAnimation: {
                type: 'popIn',
                duration: 250,
                easing: 'ease-out'
                //type: 'slideIn',
                //direction: 'left',
                //easing: 'cubic-bezier(.7,0,.7,1)',
                //duration: 1500
            },
            hideAnimation: {
                type: 'popOut',
                duration: 250,
                easing: 'ease-out'

            },
            style: 'background-color: transparent;',
            //layout: {
            //    type: 'vbox',
            //    pack: 'center',
            //    align: 'center'
            //},


            items: [

                {
                    xtype: 'container',
                    height: 115,
                    width: 120,
                    // margin:'-50 0 0 -50',
                    margin:'-50 0 0 20',
                    style: 'background-color: transparent;',
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center'
                    },
                    items: [
                        {
                            html: '<div class="blink_me"><img src="resources/icons/floatAdvertisement03.png" width="100" height="105" alt="Company Name"  OnClick="FloatPanel_FloatingAdvertisementShow()"></div>',
                            name:'nameHtmlFloatPanel_Advertisement_FloatAdvertisementIcon',
                            height: 105,
                            width: 100,
                        },
                           {
                               xtype: 'button',
                               id: 'btnFloatPanel_Advertisement_FloatAdvertisementClose',
                               margin: '-70 0 0 -20',
                               height: 35,
                               width: 35,

                               // iconCls: 'list',
                               html: '<div ><img src="resources/icons/xsigncircle04.png" width="25" height="25" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {
                                   FloatPanel_Advertisement_FloatAdvertisementHide();
                                   Ext.getCmp('Dashboard_FloatingAdvertisement_Txt').setHidden(false);
                                   Ext.getCmp('Dashboard_FloatingAdvertisement_Icon').setHidden(false);
                                   //var QrCode = "56923-4468-0123456789-NoEnterprise-4468-0123456789-Point";
                                   //Scan_QRCode_VerifyQRCode_PointCampaign(QrCode);

                               }
                           },
                         

                    ]
                },
               
            ]

           


        });

    return _FloatPanel_Advertisement_FloatAdvertisement;
}



function FloatPanel_Advertisement_FloatAdvertisementShow() {
    Ext.Viewport.remove(_FloatPanel_Advertisement_FloatAdvertisement);
    this.overlay = Ext.Viewport.add(FloatPanel_Advertisement_FloatAdvertisement());
    this.overlay.show();
    isFloatAdvertisementOpen = 'Y';
}


function FloatPanel_Advertisement_FloatAdvertisementHide() {
    if (isFloatAdvertisementOpen == 'Y') {
        _FloatPanel_Advertisement_FloatAdvertisement.hide();
        isFloatAdvertisementOpen = 'N';
    }

}


