
Ext.define('ianMizi.store.AyohaStoreOrder.AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore', {
});

var _DataStore_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaStoreOrder.AyohaStoreOrderModel',
    id: '_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatus',
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