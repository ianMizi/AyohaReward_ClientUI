
Ext.define('ianMizi.store.AyohaRewardContest.AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore', {
});





var _DataStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaRewardContest.AyohaRewardContestModel',
    id: '_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRewardContest/AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNo',
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