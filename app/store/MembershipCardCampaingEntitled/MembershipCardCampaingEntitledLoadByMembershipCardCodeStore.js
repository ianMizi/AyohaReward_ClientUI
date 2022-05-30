Ext.define('ianMizi.store.MembershipCardCampaingEntitled.MembershipCardCampaingEntitledLoadByMembershipCardCodeStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'ianMizi.model.MembershipCardCampaingEntitled.MembershipCardCampaingEntitledModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
            url: GetAPIurl() + '/MembershipCardCampaingEntitled/MembershipCardCampaingEntitledLoadByMembershipCardCode',
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




var _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.MembershipCardCampaingEntitled.MembershipCardCampaingEntitledModel',
    id: '_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/MembershipCardCampaingEntitled/MembershipCardCampaingEntitledLoadByMembershipCardCode',
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
});