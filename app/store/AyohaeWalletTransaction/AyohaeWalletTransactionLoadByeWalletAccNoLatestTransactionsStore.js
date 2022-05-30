﻿
Ext.define('ianMizi.store.AyohaeWalletTransaction.AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore', {
});

var _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaeWalletTransaction.AyohaeWalletTransactionModel',
    id: '_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaeWalletTransaction/AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactions',
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