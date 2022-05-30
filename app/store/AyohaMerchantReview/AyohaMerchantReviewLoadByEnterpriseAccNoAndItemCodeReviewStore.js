
Ext.define('ianMizi.store.AyohaMerchantReview.AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore', {
});

var _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaMerchantReview.AyohaMerchantReviewModel',
    id: '_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReview',
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