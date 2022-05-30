﻿
Ext.define('ianMizi.store.Advertisement.AdvertisementloadFloatingStore', {
});

var _DataStore_AdvertisementloadFloatingStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.Advertisement.AdvertisementModel',
    id: '_AdvertisementloadFloatingStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Advertisement/AdvertisementloadFloating',
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