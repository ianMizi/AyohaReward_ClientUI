﻿Ext.define('ianMizi.store.AyohaRedeemPrizeHistory.AyohaRedeemPrizeHistoryCountStatusBySubscriberAccNoYearStore', {
});



var _DataStore_AyohaRedeemPrizeHistoryCountStatusBySubscriberAccNoYearStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaRedeemPrizeHistory.AyohaRedeemPrizeHistoryCountStatusModel',
    id: '_AyohaRedeemPrizeHistoryCountStatusBySubscriberAccNoYearStore',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRedeemPrizeHistory/AyohaRedeemPrizeHistoryCountStatusBySubscriberAccNoYear',
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