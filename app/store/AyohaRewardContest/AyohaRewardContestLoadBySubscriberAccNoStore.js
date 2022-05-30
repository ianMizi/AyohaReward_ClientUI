
Ext.define('ianMizi.store.AyohaRewardContest.AyohaRewardContestLoadBySubscriberAccNoStore', {
});





var _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaRewardContest.AyohaRewardContestModel',
    id: '_AyohaRewardContestLoadBySubscriberAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRewardContest/AyohaRewardContestLoadBySubscriberAccNo',
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