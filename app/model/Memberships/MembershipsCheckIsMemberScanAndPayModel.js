Ext.define('ianMizi.model.Memberships.MembershipsCheckIsMemberScanAndPayModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
      'SubscriberAccNo',
      'MembershipApprovalStatus',
      'MembershipCardCode',
      'AccountName',
      'PhoneNo',
      'Email',
      'HigherPoint',
      'EnterprisesName',
      'EnterpriseLogoPath',
      'EnterpriseEmail',
      'PICContactNo'
        ]
    }
});
