
Ext.define('ianMizi.store.AyohaStoreCart.AyohaStoreCartLoadCartAyohaStore', {
});

var _DataStore_AyohaStoreCartLoadCartAyohaStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaStoreCart.AyohaStoreCartModel',
    id: '_AyohaStoreCartLoadCartAyohaStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartLoadCartAyohaStore',
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

