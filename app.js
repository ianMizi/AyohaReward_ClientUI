/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'ianMizi',

    requires: [
           'Ext.MessageBox',
             'Ext.form.*',
           'Ext.field.*',
           'Ext.Img',
           'Ext.app.History',
           'Ext.carousel.Carousel'
    ],
    models: ['Customer.CustomerModel', 'Receipt.FlatBillModel', 'CloudReceiptsMobileUser.CloudReceiptsMobileUserModel', 'Notifications.NotificationsModel',
        'Enterprise.EnterpriseModel', 'EnterpriseSubscriber.EnterpriseSubscriberModel', 'ReceiptTemplate.ReceiptTemplateModel', 'Receipt.ReceiptModel',
        'RedeemItem.RedeemItemModel', 'LoyaltyStamp.LoyaltyStampModel', 'Subscriber.SubscriberModel', 'StampCampaign.StampCampaignModel', 'StampCard.StampCardModel',
        'StampContentDefaultTemplate.StampContentDefaultTemplateModel', 'LoyaltyCardBackgroundImage.LoyaltyCardBackgroundImageModel', 'AyohaEnterpriseAccount.AyohaEnterpriseAccountModel',
    'Master.BusinessTypeModel', 'Master.EnterprisesBranchTypeModel', 'Enterprises.EnterprisesModel', 'AyohaEnterprisesUser.AyohaEnterprisesUserModel', 'Master.AyohaEnterprisesUserStatusModel',
    'Master.AyohaEnterprisesUserTypeModel', 'StampCampaignEnterprises.StampCampaignEnterprisesModel', 'StampCampaignStamper.StampCampaignStamperModel', 'Advertisement.AdvertisementModel',
    'Advertisement.AdvertisementImagesModel', 'Advertisement.AdvertisementVideoModel', 'Advertisement.AdvertisementAudioModel', 'Master.AdvertisementTypeModel', 'Master.ModuleModel', 'AdvertisementLinkModule.AdvertisementLinkModuleModel',
    'Advertisement.AdvertisementDashboardCountModel', 'Master.AdvertisementApprovalStatusModel', 'AdvertisementApprovalStatusLog.AdvertisementApprovalStatusLogModel', 'AyohaUserProfile.AyohaUserProfileModel', 'AyohaUserStampCard.AyohaUserStampCardModel',
    'TemporaryStampQrCode.TemporaryStampQrCodeModel', 'Membership.MembershipModel', 'DashboardAyohaRewardSummary.DashboardAyohaRewardSummaryModel', 'LoyaltyCardMember.LoyaltyCardMemberModel', 'MembershipCard.MembershipCardModel',
    'MembershipCardCampaingEntitled.MembershipCardCampaingEntitledModel', 'MembershipCardEnterprisesEntitled.MembershipCardEnterprisesEntitledModel', 'Memberships.MembershipsModel', 'DashboardAyohaUser.DashboardAyohaUserModel',
    'AyohaRedeemPrize.AyohaRedeemPrizeModel', 'AyohaRedeemPrizeHistory.AyohaRedeemPrizeHistoryModel', 'AyohaRedeemPrizeHistoryLog.AyohaRedeemPrizeHistoryLogModel', 'AyohaRewardPoint.AyohaRewardPointModel',
    'StampCampaignRubberStamp.StampCampaignRubberStampModel', 'PointCampaignRedeemItemSetting.PointCampaignRedeemItemSettingModel', 'LoyaltyPoint.LoyaltyPointModel', 'LoyaltyPointRedeemPrizeHistory.LoyaltyPointRedeemPrizeHistoryModel',
    'LoyaltyPointRedeemPrizeHistoryLog.LoyaltyPointRedeemPrizeHistoryLogModel', 'Memberships.MembershipsCheckIsMemberModel', 'StampCampaign.StampCampaignDashboardAyohaUserLatestStampModel', 'LoyaltyPoint.LoyaltyPointDashboardAyohaUserLatestPointModel',
    'AyohaNotification.AyohaNotificationModel', 'AyohaRewardContest.AyohaRewardContestModel', 'AyohaRewardContestant.AyohaRewardContestantModel', 'MembershipCard.MembershipCardMembershipsModel', 'Advertisement.AdvertisementloadMediaAyohaUserDashboardModel',
    'AyohaMerchantReview.AyohaMerchantReviewModel', 'Master.YearOnlyModel', 'AyohaRedeemPrizeHistory.AyohaRedeemPrizeHistoryCountStatusModel', 'Enterprises.EnterpriseContactUsLinkModel', 'AyohaStoreSaleItem.AyohaStoreSaleItemModel',
    'AyohaStoreSaleItem.AyohaStoreSaleItemAyohaStoreFrontPageModel', 'AyohaStoreLikeStatus.AyohaStoreLikeStatusModel', 'AyohaStoreCart.AyohaStoreCartModel', 'Master.MonthOnlyModel', 'AyohaStoreCart.AyohaStoreCartStatusModel',
    'AyohaStoreSaleItem.AyohaStoreSaleItemImgExtendModel', 'ChargeDeliverySetting.ChargeDeliverySettingModel', 'AyohaStoreSaleItem.AyohaStoreSaleItemItemCategoryModel', 'AyohaStoreShippingAddress.AyohaStoreShippingAddressModel',
    'Master.StateModel', 'Master.CountryModel', 'AyohaStoreOrder.AyohaStoreOrderModel', 'AyohaStoreOrder.AyohaStoreOrderCheckOutModel', 'Master.PaymentMethodModel', 'AyohaStorePayment.AyohaStorePaymentModel', 'Enterprises.EnterprisesMerchantListModel',
    'Enterprises.EnterprisesMerchantListSearchResultModel', 'AyohaeWalletTransaction.AyohaeWalletTransactionModel', 'AyohaeWallet.AyohaeWalletModel', 'Memberships.MembershipsCheckIsMemberScanAndPayModel',
    'Enterprises.EnterprisesLoadByEnterpriseAccNoAndSubscriberAccNoModel', 'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserModel', 'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUser_VoucherHistoryModel',
    'AyohaHotMerchant.AyohaHotMerchantModel', 'AyohaRewardEvent.AyohaRewardEventModel', 'AyohaRewardContest.AyohaRewardContest_SelfieAndWinModel', 'EnterprisesCoverMedia.EnterprisesCoverMediaModel',
    'EnterprisesOnlineStore.EnterprisesOnlineStoreModel', 'EnterprisesWorkingHour.EnterprisesWorkingHourModel', 'AyohaMerchantInfoMembershipLoyaltyProgram.AyohaMerchantInfoMembershipLoyaltyProgramModel'],

    stores: ['Notifications.NotificationsCountTypeNNStore', 'Notifications.NotificationsCountTypeRStore', 'Enterprises.EnterprisesLoadByMerchantCategoryStore',
    'EnterpriseSubscriber.EnterpriseSubscribergetBySubcriberAccNoSearchReceiptStore','RedeemItem.RedeemItemgetByEnterpriseAccNoStore', 'LoyaltyStamp.LoyaltyStampLoadByEnterpriseAccNoStore', 'LoyaltyStamp.LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoStore',
    'LoyaltyStamp.LoyaltyStampLoadByStampedByUserAccNoAndEnterpriseAccNoStore', 'Subscriber.SubscriberLoadByEnterpriseAccountNoStore', 'LoyaltyStamp.LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore'
    ,'StampCampaign.StampCampaignLoadByEnterpriseAccNoStore', 'StampCampaign.StampCampaignLoadByStampCampaignCodeStore', 'StampCard.StampCardLoadByStampCampaignCodeEnterpriseAccNoStore',
    'StampContentDefaultTemplate.StampContentDefaultTemplateResetByIDStore', 'StampCard.StampCardLoadByStampCampaignCodeEnterpriseAccShowHideNoStore', 'LoyaltyCardBackgroundImage.LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeStore',
    'LoyaltyCardBackgroundImage.LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeBackgroundImageAnimStore', 'AyohaEnterpriseAccount.AyohaEnterprisesUserLoginStore',
    'Master.BusinessTypeLoadStore', 'Master.EnterprisesBranchTypeStore', 'Enterprises.EnterprisesLoadByEnterpriseAccNoStore', 'AyohaEnterprisesUser.AyohaEnterprisesUserLoginStore',
    'Master.AyohaEnterprisesUserTypeLoadStore', 'Master.AyohaEnterprisesUserStatusLoadStore', 'Enterprises.EnterprisesLoadByEnterpriseHQAccNoStore', 'AyohaEnterprisesUser.AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore',
    'AyohaEnterprisesUser.AyohaEnterprisesUserLoadByAccountNoStore', 'StampCampaignEnterprises.StampCampaignEnterprisesLoadByEnterpriseAccNoStore', 'StampCampaignEnterprises.StampCampaignEnterprisesLoadByStampCampaignCodeStore',
    'StampCampaignStamper.StampCampaignStamperLoadByStampCampaignCodeStore', 'Advertisement.AdvertisementloadByEnterpriseHQAccNoStore', 'Advertisement.AdvertisementloadByApprovedAdvertisementStartDateEndDateStore',
    'Advertisement.AdvertisementAudioloadByEnterpriseHQAccNoAdvertisementCodeStore', 'Advertisement.AdvertisementVideoloadByEnterpriseHQAccNoAdvertisementCodeStore', 'Advertisement.AdvertisementImagesloadByEnterpriseHQAccNoAdvertisementCodeStore',
    'Master.AdvertisementTypeLoadAllStore', 'Master.ModuleloadMasterStore', 'AdvertisementLinkModule.AdvertisementLinkModuleloadByEnterpriseHQAccNoAdvertisementCodeStore', 'Advertisement.AdvertisementDashboardCountByEnterpriseHQAccNoStore',
    'Master.AdvertisementApprovalStatusLoadMasterStore', 'AdvertisementApprovalStatusLog.AdvertisementApprovalStatusLogLoadByEnterpriseHQAccNoAdvertisementCodeStore', 'Advertisement.AdvertisementloadMediaStore', 'Advertisement.AdvertisementloadMediaPreviewStore',
    'Enterprises.EnterprisesContactUsLinkStore', 'Advertisement.AdvertisementloadMediaAdvertisementVIAStore', 'Advertisement.AdvertisementloadStandardStore', 'Advertisement.AdvertisementloadHotSeatStore', 'AyohaUserProfile.AyohaUserProfileLoginStore',
    'AyohaUserProfile.AyohaUserProfileLoadProfileStore', 'LoyaltyStamp.LoyaltyStampLoadBySubscriberAccNoStore', 'AyohaUserStampCard.AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStore', 'AdvertisementLinkModule.AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore',
    'TemporaryStampQrCode.TemporaryStampQrCodeGenerateTempQrCodeStore', 'AyohaUserStampCard.AyohaUserStampCardLoadByStampCardCodeStore', 'AyohaUserStampCard.AyohaUserStampCardCheckStampedStatusStore',
    'Membership.MembershipLoadBySubscriberAccNoStore', 'AyohaUserStampCard.AyohaUserStampCardNearestRedeemItemStore', 'AyohaUserProfile.AyohaUserProfileUnClaimedTotalStampPointStore',
    'DashboardAyohaRewardSummary.DashboardAyohaRewardSummaryStore', 'Enterprises.EnterprisesLoadByRowStatusStore', 'StampCampaign.StampCampaignLoadByGetLoyaltyCardStore', 'LoyaltyCardMember.LoyaltyCardMemberLoadBySubscriberAccNoStore',
    'MembershipCard.MembershipCardLoadByEnterpriseAccNoStore', 'MembershipCardCampaingEntitled.MembershipCardCampaingEntitledLoadByMembershipCardCodeStore', 'MembershipCardEnterprisesEntitled.MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore',
    'Memberships.MembershipsLoadBySubscriberAccNoStore', 'MembershipCard.MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore', 'MembershipCard.MembershipCardAyohaUserMembershipCardStore',
    'AyohaUserStampCard.AyohaUserStampCardLoadStampCardfromQrCodeStore', 'Enterprises.EnterprisesGetEnterprisesHQAccNoStore', 'DashboardAyohaUser.DashboardAyohaUserMainStore', 'LoyaltyStamp.LoyaltyStampLoadBySubscriberAccNoAndMembershipCardCodeStore',
    'AyohaRedeemPrize.AyohaRedeemPrizeLoadByRowStatusAndGCStore', 'AyohaRedeemPrizeHistory.AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore', 'AyohaRedeemPrizeHistoryLog.AyohaRedeemPrizeHistoryLogLoadByRedeemHistoryCodeStore',
    'AyohaRewardPoint.AyohaRewardPointLoadBySubscriberAccNoStore', 'StampCampaignRubberStamp.StampCampaignRubberStampLoadByStampCampaignCodeStore', 'PointCampaignRedeemItemSetting.PointCampaignRedeemLoadByPointCampaignCodeStore',
    'LoyaltyPoint.LoyaltyPointLoadByPointCampaignCodeUserStore', 'LoyaltyPointRedeemPrizeHistory.LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore', 'LoyaltyPointRedeemPrizeHistoryLog.LoyaltyPointRedeemPrizeHistoryLogLoadStore',
    'Memberships.MembershipsCheckIsMemberStore', 'StampCampaign.StampCampaignDashboardAyohaUserLatestStampStore', 'LoyaltyPoint.LoyaltyPointDashboardAyohaUserLatestPointStore', 'AyohaNotification.AyohaNotificationLoadBySubscriberAccNoStore',
    'AyohaRewardPoint.AyohaRewardPointRewardRankingStore', 'AyohaRewardContest.AyohaRewardContestLoadActiveStore', 'AyohaRewardContestant.AyohaRewardContestantLoadByContestCodeStore', 'AyohaRewardContestant.AyohaRewardContestantLoadBySubscriberAccNoStore',
    'AyohaUserStampCard.AyohaUserDashBoardNearestRedeemItemListStore', 'MembershipCard.MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore', 'AyohaRewardPoint.AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore',
    'Advertisement.AdvertisementloadMediaAyohaUserDashboardStore', 'AyohaMerchantReview.AyohaMerchantReviewLoadByEnterpriseAccNoStore', 'DashboardAyohaUser.AyohaUserDashBoardNearestRedeemItemStampCardStore', 'DashboardAyohaUser.AyohaUserDashBoardNearestRedeemItemPointCardStore',
    'Master.YearOnlyStore', 'AyohaRedeemPrizeHistory.AyohaRedeemPrizeHistoryCountStatusBySubscriberAccNoYearStore', 'AyohaStoreSaleItem.AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore', 'AyohaStoreSaleItem.AyohaStoreSaleItemAyohaStoreFrontPageStore',
    'AyohaStoreLikeStatus.AyohaStoreLoadLikeStatusStore', 'AyohaStoreSaleItem.AyohaStoreSaleItemloadItemCategoryStore', 'AyohaStoreCart.AyohaStoreCartLoadCartAyohaStore', 'Master.MonthOnlyStore', 'AyohaStoreCart.AyohaStoreCartLoadItemCartStatusStore',
    'AyohaStoreSaleItem.AyohaStoreSaleItemImgExtendloadByItemCodeStore', 'Advertisement.AdvertisementloadFloatingStore', 'Memberships.MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoStore',
    'Memberships.MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoAndMembershipCardCodeStore', 'ChargeDeliverySetting.ChargeDeliverySettingLoadByEnterpriseAccNoStore', 'AyohaMerchantReview.AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore',
    'AyohaStoreShippingAddress.AyohaStoreShippingAddressLoadBySubscriberAccNoStore', 'Master.CountryStore', 'Master.StateStore', 'AyohaStoreOrder.AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusStore',
    'AyohaStoreOrder.AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore', 'AyohaStoreOrder.AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore', 'Master.PaymentMethodStore', 'AyohaStorePayment.AyohaStorePaymentGenerateReceiptStore',
    'Enterprises.EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore', 'Enterprises.EnterprisesLoadAyohaMerchantListStore', 'AyohaeWalletTransaction.AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore',
    'AyohaeWalletTransaction.AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore', 'AyohaeWalletTransaction.AyohaeWalletTransactionLoadByeWalletAccNoDebitCreditStore', 'AyohaeWallet.AyohaeWalletAccountSettingStore', 'AyohaUserProfile.AyohaUserProfileLoadByPhoneNoStore',
    'AyohaeWalletTransaction.AyohaeWalletTransactionLoadByeWalletAccNoLatestTransferTransactionsStore', 'Memberships.MembershipsCheckIsMemberScanAndPayStore', 'Enterprises.EnterprisesLoadByEnterpriseBusinessTypeStore', 'AyohaStoreOrder.AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusDashboardOrderHistoryStore',
    'AyohaStoreCart.AyohaStoreCartOrderCartStore', 'Enterprises.EnterprisesLoadByEnterpriseAccNoAndSubscriberAccNoStore', 'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore',
    'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore', 'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore',
    'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeVoucherHistoryStore', 'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoPaymentNoEntitledVoucherStatusStore',
    'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore', 'AyohaHotMerchant.AyohaHotMerchantLoadByAyohaHotMerchantStatusStore', 'AyohaRewardEvent.AyohaRewardEventLoadBySubscriberAccNoStore', 'AyohaRewardContest.AyohaRewardContestLoadBySubscriberAccNoStore',
    'AyohaRewardContest.AyohaRewardContestSelfieAndWinLoadBySubscriberAccNoContestCodeStore', 'Enterprises.EnterprisesLoadAyohaMerchantListbyEnterpriseBusinessTypeStore', 'AyohaRewardEvent.AyohaRewardEventLoadBySubscriberAccNoEnterpriseAccNoStore',
    'AyohaRewardContest.AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore', 'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardVoucherHistoryStore', 'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoAyohaStoreVoucherHistoryStore',
    'EnterprisesCoverMedia.EnterprisesCoverMediaLoadByEnterpriseAccNoStore', 'EnterprisesOnlineStore.EnterprisesOnlineStoreLoadByEnterpriseAccNoStore', 'EnterprisesWorkingHour.EnterprisesWorkingHourLoadByEnterpriseAccNoStore', 'AyohaMerchantInfoMembershipLoyaltyProgram.AyohaMerchantInfoMembershipLoyaltyProgramStore',
    'AyohaeWalletTransaction.AyohaeWalletTransactionLoadByeWalletAccNoRecentlyTransferToStore', 'AyohaStoreSaleItem.AyohaStoreSaleItemloadByEnterpriseAccNoHotItemStore'],

    views: ['MyAccount.Dashboard', 'MyAccount.FloatPanel_MyAccountMaster', 'Config.Configs', 'Config.QRcode', 'Main', 'LoginAyohaUser', 'Subscriber.FloatPanel_SubscriberMaster', 'AyohaNotification.FloatPanel_AyohaNotification',
        'AyohaNotification.FloatPanel_AyohaNotification_Notification', 'AyohaReward.FloatPanel_AyohaReward_PointTransactions', 'AyohaReward.FloatPanel_AyohaReward_ContestHistory',
        'AyohaReward.FloatPanel_AyohaReward_ContestAdvertisement', 'AyohaReward.FloatPanel_AyohaReward_ViewMyRanking', 'AyohaReward.FloatPanel_AyohaReward_Congratulations',
        'NearestRedemption.FloatPanel_NearestRedemption', 'AyohaCardManagement.FloatPanel_AyohaCardManagement_PreviewCard', 'AyohaCardManagement.FloatPanel_AyohaCardManagement_PreviewCard_ContentNote',
        'AyohaCardManagement.FloatPanel_AyohaCardManagement_StampSuccesAnimation', 'AyohaCardManagement.FloatPanel_AyohaCardManagement_StampQrCode', 'Advertisement.FloatPanel_PreviewAdvertisement',
        'LoyaltyCard.FloatLoyaltyCardPoint', 'LoyaltyCard.FloatLoyaltyCardPoint_RedeemPrize', 'LoyaltyCard.FloatLoyaltyCardPoint_RedeemPrizeHistoryLog', 'Membership.FloatPanel_MembershipCardList_MyMembershipCard',
        'Membership.FloatPanel_MembershipCardList_Upgrade', 'Membership.FloatPanel_Membership_TermAndCondition', 'Membership.FloatPanel_MembershipCardManagement_TermAndCondition', 'RewardStore.FloatPanel_RewardStore', 'RewardStore.FloatPanel_RewardStoreMembershipCard',
        'AyohaMerchantReview.AyohaMerchantReview', 'AyohaMerchantReview.AyohaMerchantReview_AddEdit', 'QrCodeScannerInstascan.FloatPanel_QrCodeScanner_ScanCampaign', 'Registration.FloatPanel_ForgotPassword',
        'QrCodeScannerInstascan.FloatPanel_QrCodeScanner_CenterLineMessage', 'QrCodeScannerInstascan.Scan_QRCode_Process', 'AyohaeWallet.FloatPanel_AyohaeWallet_Icon', 'Registration.FloatPanel_AyohaUserRegistration',
        'FloatPanel.TestRoutePanel', 'Master.FloatPanel_GraphicConfeti', 'RewardStore.FloatPanel_RewardStoreCategoryFilter', 'Master.FloatPanel_BusinessTypeList', 'AyohaReward.FloatPanel_AyohaPointRedemption_Redeem',
        'AyohaReward.FloatPanel_AyohaReward_RedemptionHistory', 'AyohaReward.FloatPanel_AyohaPointRedemption_RedeemHistoryLog', 'AyohaReward.FloatPanel_AyohaPointRedemption_Cancel', 'Master.FloatPanel_YearOnly',
    'AyohaReward.FloatPanel_AyohaReward_RedemptionHistory_Details', 'Advertisement.FloatPanel_Advertisement_FloatAdvertisement', 'AyohaStoreSaleItem.FloatPanel_AyohaStore', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_LikeStatusList',
    'AyohaStoreSaleItem.FloatPanel_AyohaStore_ItemCategory', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_Cart', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_FloatCart', 'Master.FloatPanel_MonthOnly', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_CartStatusList',
    'AyohaStoreSaleItem.FloatPanel_AyohaStore_SaleItemDetail', 'MyAccount.FloatPanel_AccountVerified', 'FloatPanel.LoadingPanel', 'Advertisement.FloatPanel_FloatingAdvertisement', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_MembershipCardUsed',
    'AyohaStoreSaleItem.FloatPanel_AyohaStore_MembershipCardBeingUsed', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_MembershipCardBeingUsed_Floating', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_DeliveryChargeList',
    'AyohaStoreSaleItem.FloatPanel_AyohaStore_DotMenuItem', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_ShareAndWhatsapp', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_CheckOut', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_DeliveryAddress',
    'Master.FloatPanel_State', 'Master.FloatPanel_Country', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_OrderHistory', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_PaymentMethodList', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_PaymentReceipt',
    'MyAccount.Dashboard_SearchMerchantList', 'RewardStore.FloatPanel_RewardStore_SearchResult', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_AyohaPointCollectedAnim', 'FloatPanel.FloatPanel_ExitDialogBox', 'AyohaeWallet.FloatPanel_AyohaeWallet',
    'AyohaeWallet.FloatPanel_AyohaeWallet_TransactionHistory', 'AyohaeWallet.FloatPanel_AyohaeWallet_TransactionIncomeSpent', 'AyohaeWallet.FloatPanel_AyohaeWallet_Setting', 'AyohaeWallet.FloatPanel_AyohaeWallet_Passcode', 'AyohaeWallet.FloatPanel_AyohaeWallet_Transfer',
        'AyohaeWallet.FloatPanel_AyohaeWallet_Transaction_Detail', 'AyohaeWallet.FloatPanel_AyohaeWallet_TransferConfirm', 'AyohaeWallet.FloatPanel_AyohaeWallet_ScanAndPay_Upgrade', 'AyohaeWallet.FloatPanel_AyohaeWallet_ScanAndPay_Payment',
    'AyohaeWallet.FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm', 'AyohaReward.FloatPanel_AyohaReward_PointTransaction_eWallet', 'MyAccount.FloatPanel_OrderHistory', 'MyAccount.FloatPanel_OrderCart', 'Dashboard.DashboardMerchantReward',
    'Dashboard.FloatPanel_DashboardMerchantReward', 'AyohaReward.FloatPanel_AyohaReward_AyohaTapContest', 'AyohaRewardVoucher.FloatPanel_AyohaRewardVoucherDetail', 'AyohaRewardVoucher.FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart',
    'AyohaRewardVoucher.FloatPanel_AyohaRewardVoucherList_Dashboard', 'AyohaRewardVoucher.FloatPanel_AyohaReward_MerchantReward_VoucherListUsed', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_BuyNow',
    'AyohaHotMerchant.FloatPanel_AyohaHotMerchant_OnlineStoreList', 'Dashboard.FloatPanel_DashboardMerchantReward_MembershipEventDetail', 'MyAccount.FloatPanel_MyAccountRankDescription',
    'Dashboard.FloatPanel_DashboardMerchantReward_MembershipContestDetail', 'Dashboard.FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm', 'Dashboard.FloatPanel_Dashboard_AyohaMerchant_SeeMore', 'AyohaeWallet.FloatPanel_AyohaeWallet_ForgotPassword',
    'AyohaStoreSaleItem.FloatPanel_AyohaStore_MembershipEventList', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_MembershipContestList', 'AyohaRewardVoucher.FloatPanel_AyohaRewardVoucherList_AyohaRewardHome', 'AyohaRewardVoucher.FloatPanel_AyohaRewardVoucherList_AyohaStore',
    'MyAccount.FloatPanel_MerchantDetailPage', 'AyohaMerchantInfo.FloatPanel_AyohaMerchantInfo_BusinessHour'],


    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function () {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        //  Ext.Viewport.add(Ext.create('ReceiptsWorld.view.MyAccount.VehicleList'));
        // Initialize the main view


        Ext.Viewport.add(Ext.create('ianMizi.view.Main'));
     // TestRoutePanelShow();
     onLoad();

        //Ext.Viewport.add(Ext.create('ianMizi.view.AyohaLogin'));

       // Ext.Viewport.add(Ext.create('ianMizi.view.Subscriber.SubscriberList'));


        //enablefocuslogin();

        //var currentTime = new Date()
        //var month = currentTime.getMonth() + 1
        //var monthconvert = ConvertinputTypeMonth(month);
        //var year = currentTime.getFullYear();
        //var fullyM = year + '-' + monthconvert;
        //// console.log(fullyM);
        //document.getElementById("NotificationmonthID").value = fullyM;
        //Initialnotificationdateonchange(monthconvert);

        //  TestRoutePanelShow();
        //  loadRememberMe();
        //  localStorage.setItem('CurrReceiptlistBgcolor', 'backgroundlistupgrades.jpg');
        //   Ext.Viewport.add(Ext.create('ReceiptsWorld.view.Registrations'));
    },

    onUpdated: function () {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function (buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }



 
});

var OneSignalPlayerID
var SimInfo;
var device_model;
var device_platform;
var device_uuid;
var device_version;
var device_manufacturer;
var device_isVirtual;
var device_serial;
var deviceRawPhoneinfo;
var currIP;
var networkState;


function onLoad() {
   // alert('onLoad');
    document.addEventListener("deviceready", onDeviceReady, false);
    //var userName = localStorage.getItem('CurrentUserLogin');
    //if (userName) {
    //    loadUserProfileWithOutLogOut();
    //}
  
   
}

// device APIs are available
//
function onDeviceReady() {
    // Now safe to use device APIs
    // alert('ready');
    
     window.plugins.OneSignal.getIds(function (ids) {
      //   alert("userId = " + ids.userId + "\npushToken = " + ids.pushToken);
         localStorage.setItem("player_id", ids.userId);
        // alert(ids.userId);
         //localStorage.setItem('device_model', device.model);
         //localStorage.setItem('device_platform', device.platform);
         //localStorage.setItem('device_uuid', device.uuid);
         //localStorage.setItem('device_version', device.version);
         //localStorage.setItem('device_manufacturer', device.manufacturer);
         //localStorage.setItem('device_isVirtual', device.isVirtual);
         //localStorage.setItem('device_serial', device.serial);
         //localStorage.setItem('device_ip', "NoIp");
     });


    var notificationReceivedCallback = function (jsonData) {
        //alert('info: ' + JSON.stringify(jsonData));
    };
    var notificationOpenedCallback = function (jsonData) {      

        var myString = JSON.stringify(jsonData);
        var n = myString.includes("Title:");
        if (n) {
            FloatPanel_AyohaNotificationShow();
        }
    };

   
    //More details: https://documentation.onesignal.com/docs/cordova-sdk#section--addsubscriptionobserver-
    //window.plugins.OneSignal.addSubscriptionObserver(function (state) {
    //    if (!state.from.subscribed && state.to.subscribed) {
    //        alert("Subscribed for OneSignal push notifications!")
    //        // get player ID
            
    //        localStorage.setItem("player_id", state.to.userId);
    //    }
    //    alert("Push Subscription state changed: " + JSON.stringify(state));
    //});
    
    //window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function (accepted) {
    //    alert("User accepted notifications: " + accepted);
    //});

     
    window.plugins.OneSignal.getPermissionSubscriptionState(function (status) {
        localStorage.setItem("player_id", status.subscriptionStatus.userId);
            //document.getElementById("OneSignalUserId").innerHTML = "UserId: " + status.subscriptionStatus.userId;
            //document.getElementById("OneSignalPushToken").innerHTML = "PushToken: " + status.subscriptionStatus.pushToken;
            //console.log('Player ID: ' + status.subscriptionStatus.userId);
           // alert('Player ID: ' + status.subscriptionStatus.userId + "\npushToken = " + status.subscriptionStatus.pushToken);
        });
    window.plugins.OneSignal.setSubscription(true);
    window.plugins.OneSignal  
      .startInit("f8370607-3c1b-417b-b819-77e839ae50b1")
      .handleNotificationOpened(notificationOpenedCallback)
        .handleNotificationReceived(notificationReceivedCallback)
        .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)
      .endInit();


   


    //window.plugins.sim.getSimInfo(successCallback, errorCallback);
    window.open = cordova.InAppBrowser.open;
    var userName = localStorage.getItem('CurrentUserLogin');
    if (userName) {
        loadUserProfileWithOutLogOut();
    }
}


//function successCallback(result) {
//    localStorage.setItem('SimInfo', JSON.stringify(result));

//    networkinterface.getCarrierIPAddress(function (ip) {
//        localStorage.setItem('device_ip', ip);
//    });

//    // With subnet and error handler
//    networkinterface.getWiFiIPAddress(
//        function (ip, subnet) {

//            localStorage.setItem('device_ip', ip);
//        },
//        function (err) {
//            localStorage.setItem('device_ip', "Err: " + err);
//        }
//    );

//}
//function errorCallback(error) {
//    localStorage.setItem('SimInfo', JSON.stringify(error));
//    networkinterface.getCarrierIPAddress(function (ip) {
//        localStorage.setItem('device_ip', ip);
//    });

//    // With subnet and error handler
//    networkinterface.getWiFiIPAddress(
//        function (ip, subnet) {

//            localStorage.setItem('device_ip', ip);
//        },
//        function (err) {
//            localStorage.setItem('device_ip', "Err: " + err);
//        }
//    );
//}


if (Ext.os.is('Android')) {
    document.addEventListener("backbutton", Ext.bind(onBackKeyDown, this), false);

    function onBackKeyDown(eve) {
        eve.preventDefault();
     
        //var a = swal.isVisible();
        //if (a) {
        //    swal.close();
        //    return;
        //}
       
        RoutePages();
       // Routes();
        //  enablefocuslogin();

    }
}


var countTab = 0;
function ExitDoubleTap() {
    navigator.app.exitApp();
    //Ext.getCmp('mainView').setActiveItem(0);

    //if (countTab == 0)
    //{
    //    countTab++;


    //    setTimeout(function () {

    //        countTab = 0;
    //        LoadingToastMsgShow();
    //        LoadingToastMsgHide();
    //    }, 2000);
    //}else
    //{
    //    navigator.app.exitApp();
    //}

}




var ArrappRoute = [];
var ArrappRouteCheckVal = [];
var ArrappRouteisOpen = [];













//function AddRoutePages(Page, val) {


function setSubscription() {
    window.plugins.OneSignal.setSubscription(false);
    alert("Subscribed False! ");
}


function getPlayerIDS() {
    window.open('http://42.1.63.57/termandcondition.html', '_system'); return false;
    //window.plugins.OneSignal.getIds(function (ids) {
    //   // alert("userId = " + ids.userId + "\npushToken = " + ids.pushToken);
    //    localStorage.setItem("player_id", ids.userId);
    //   // alert(ids.userId);
    //    //localStorage.setItem('device_model', device.model);
    //    //localStorage.setItem('device_platform', device.platform);
    //    //localStorage.setItem('device_uuid', device.uuid);
    //    //localStorage.setItem('device_version', device.version);
    //    //localStorage.setItem('device_manufacturer', device.manufacturer);
    //    //localStorage.setItem('device_isVirtual', device.isVirtual);
    //    //localStorage.setItem('device_serial', device.serial);
    //    //localStorage.setItem('device_ip', "NoIp");
    //});
}