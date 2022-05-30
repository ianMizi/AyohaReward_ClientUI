﻿Ext.define('ianMizi.store.DashboardAyohaUser.DashboardAyohaUserMainStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'ianMizi.model.DashboardAyohaUser.DashboardAyohaUserModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
            url: GetAPIurl() + '/DashboardAyohaUser/DashboardAyohaUserMain',
            reader: {
                type: 'json',
                rootProperty: 'results',
                totalProperty: 'total',
                successProperty: 'success',
                messageProperty: 'message'
            },



        }


    }
});



var _DataStore_DashboardAyohaUserMainStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.DashboardAyohaUser.DashboardAyohaUserModel',
    id: '_AyohaUserDashBoardNearestRedeemItemPointCardStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/DashboardAyohaUser/DashboardAyohaUserMain',
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