Ext.define('ianMizi.store.AdvertisementLinkModule.AdvertisementLinkModuleloadByEnterpriseHQAccNoAdvertisementCodeStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'ianMizi.model.AdvertisementLinkModule.AdvertisementLinkModuleModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            url: GetAPIurl() + '/AdvertisementLinkModule/AdvertisementLinkModuleloadByEnterpriseHQAccNoAdvertisementCode',
            reader: {
                type: 'json',
                rootProperty: 'results',
                totalProperty: 'total',
                successProperty: 'success',
                messageProperty: 'message'
            },



        }


    }
});

