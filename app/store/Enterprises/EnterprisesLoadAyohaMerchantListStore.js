
Ext.define('ianMizi.store.Enterprises.EnterprisesLoadAyohaMerchantListStore', {
});





var _DataStore_EnterprisesLoadAyohaMerchantListStore = Ext.create('Ext.data.Store', {
//var _DataStore_EnterprisesLoadByMerchantCategory = Ext.create('Ext.data.Store', {
    model: 'ianMizi.model.Enterprises.EnterprisesMerchantListModel',
    id: '_EnterprisesLoadAyohaMerchantListID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Enterprises/EnterprisesLoadAyohaMerchantList',
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