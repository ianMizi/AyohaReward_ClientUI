
Ext.define('ianMizi.store.EnterprisesOnlineStore.EnterprisesOnlineStoreLoadByEnterpriseAccNoStore', {
});

var _DataStore_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.EnterprisesOnlineStore.EnterprisesOnlineStoreModel',
    id: '_EnterprisesOnlineStoreLoadByEnterpriseAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/EnterprisesOnlineStore/EnterprisesOnlineStoreLoadByEnterpriseAccNo',
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