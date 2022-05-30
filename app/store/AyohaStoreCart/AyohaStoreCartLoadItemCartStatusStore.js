
Ext.define('ianMizi.store.AyohaStoreCart.AyohaStoreCartLoadItemCartStatusStore', {
});





var _DataStore_AyohaStoreCartLoadItemCartStatusStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaStoreCart.AyohaStoreCartStatusModel',
    id: '_AyohaStoreCartLoadItemCartStatusStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartLoadItemCartStatus',
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