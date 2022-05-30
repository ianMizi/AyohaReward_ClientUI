Ext.define('ianMizi.store.AyohaRedeemPrizeHistory.AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'ianMizi.model.AyohaRedeemPrizeHistory.AyohaRedeemPrizeHistoryModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
            url: GetAPIurl() + '/AyohaRedeemPrizeHistory/AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusBy',
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







var _DataStore_EnterprisesLoadByMerchantCategory = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.Enterprises.EnterprisesModel',
    id: '_EnterprisesLoadByMerchantCategory',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Enterprises/EnterprisesLoadByMerchantCategory',
        actionMethods: {
            read: 'GET'
        },
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },



    //autoLoad: true

});