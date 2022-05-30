﻿
Ext.define('ianMizi.store.AyohaUserProfile.AyohaUserProfileLoadByPhoneNoStore', {
});

var _DataStore_AyohaUserProfileLoadByPhoneNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaUserProfile.AyohaUserProfileModel',
    id: '_AyohaUserProfileLoadByPhoneNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileLoadByPhoneNo',
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