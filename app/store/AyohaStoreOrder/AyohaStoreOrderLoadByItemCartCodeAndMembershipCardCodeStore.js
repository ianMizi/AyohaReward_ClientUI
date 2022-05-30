
Ext.define('ianMizi.store.AyohaStoreOrder.AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore', {
});

var _DataStore_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaStoreOrder.AyohaStoreOrderCheckOutModel',
    id: '_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCode',
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