
Ext.define('ianMizi.store.AyohaRewardContest.AyohaRewardContestSelfieAndWinLoadBySubscriberAccNoContestCodeStore', {
});





var _DataStore_AyohaRewardContestSelfieAndWinLoadBySubscriberAccNoContestCodeStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaRewardContest.AyohaRewardContest_SelfieAndWinModel',
    id: '_AyohaRewardContestSelfieAndWinLoadBySubscriberAccNoContestCodeStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRewardContest_SelfieAndWin/AyohaRewardContestSelfieAndWinLoadBySubscriberAccNoContestCode',
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