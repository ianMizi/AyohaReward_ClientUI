
Ext.define('ianMizi.store.AyohaHotMerchant.AyohaHotMerchantLoadByAyohaHotMerchantStatusStore', {
});

var _DataStore_AyohaHotMerchantLoadByAyohaHotMerchantStatusStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaHotMerchant.AyohaHotMerchantModel',
    id: '_AyohaHotMerchantLoadByAyohaHotMerchantStatusStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaHotMerchant/AyohaHotMerchantLoadByAyohaHotMerchantStatus',
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