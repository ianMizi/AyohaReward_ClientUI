﻿
Ext.define('ianMizi.store.AyohaeWalletTransaction.AyohaeWalletTransactionLoadByeWalletAccNoRecentlyTransferToStore', {
});

var _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoRecentlyTransferToStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaeWalletTransaction.AyohaeWalletTransactionModel',
    id: '_AyohaeWalletTransactionLoadByeWalletAccNoRecentlyTransferToStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaeWalletTransaction/AyohaeWalletTransactionLoadByeWalletAccNoRecentlyTransferTo',
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