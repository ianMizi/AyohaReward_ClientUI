﻿
Ext.define('ianMizi.store.AyohaStoreSaleItem.AyohaStoreSaleItemImgExtendloadByItemCodeStore', {
});

var _DataStore_AyohaStoreSaleItemImgExtendloadByItemCodeStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaStoreSaleItem.AyohaStoreSaleItemImgExtendModel',
    id: '_AyohaStoreSaleItemImgExtendloadByItemCodeStore',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStore_SaleItem/AyohaStoreSaleItemImgExtendloadByItemCode',
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