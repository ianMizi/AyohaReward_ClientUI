
Ext.define('ianMizi.store.AyohaStoreShippingAddress.AyohaStoreShippingAddressLoadBySubscriberAccNoStore', {
});

var _DataStore_AyohaStoreShippingAddressLoadBySubscriberAccNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaStoreShippingAddress.AyohaStoreShippingAddressModel',
    id: '_AyohaStoreShippingAddressLoadBySubscriberAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStore_ShippingAddress/AyohaStoreShippingAddressLoadBySubscriberAccNo',
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