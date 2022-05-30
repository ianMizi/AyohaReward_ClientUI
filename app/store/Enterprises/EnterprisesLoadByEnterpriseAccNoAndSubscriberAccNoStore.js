
Ext.define('ianMizi.store.Enterprises.EnterprisesLoadByEnterpriseAccNoAndSubscriberAccNoStore', {
});





var _DataStore_EnterprisesLoadByEnterpriseAccNoAndSubscriberAccNoStore = Ext.create('Ext.data.Store', {
    //var _DataStore_EnterprisesLoadByMerchantCategory = Ext.create('Ext.data.Store', {
    model: 'ianMizi.model.Enterprises.EnterprisesLoadByEnterpriseAccNoAndSubscriberAccNoModel',
    id: '_EnterprisesLoadByEnterpriseAccNoAndSubscriberAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Enterprises/EnterprisesLoadByEnterpriseAccNoAndSubscriberAccNo',
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