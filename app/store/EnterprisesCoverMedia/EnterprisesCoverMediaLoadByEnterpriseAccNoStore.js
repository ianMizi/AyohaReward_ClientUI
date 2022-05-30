
Ext.define('ianMizi.store.EnterprisesCoverMedia.EnterprisesCoverMediaLoadByEnterpriseAccNoStore', {
});

var _DataStore_EnterprisesCoverMediaLoadByEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.EnterprisesCoverMedia.EnterprisesCoverMediaModel',
    id: '_EnterprisesCoverMediaLoadByEnterpriseAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/EnterprisesCoverMedia/EnterprisesCoverMediaLoadByEnterpriseAccNo',
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