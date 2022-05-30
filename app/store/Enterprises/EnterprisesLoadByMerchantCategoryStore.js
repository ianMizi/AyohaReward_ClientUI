
Ext.define('ianMizi.store.Enterprises.EnterprisesLoadByMerchantCategoryStore', {
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



var _DataStore_EnterprisesLoadByMerchantCategory_temp = Ext.create('Ext.data.Store', {

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