﻿
Ext.define('ianMizi.store.ChargeDeliverySetting.ChargeDeliverySettingLoadByEnterpriseAccNoStore', {
});

var _DataStore_ChargeDeliverySettingLoadByEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.ChargeDeliverySetting.ChargeDeliverySettingModel',
    id: '_ChargeDeliverySettingLoadByEnterpriseAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/ChargeDeliverySetting/ChargeDeliverySettingLoadByEnterpriseAccNo',
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

