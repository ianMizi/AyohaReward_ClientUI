﻿Ext.define('ianMizi.model.Memberships.MembershipsCheckIsMemberModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [                 
      'SubscriberAccNo',     
      'MembershipApprovalStatus',
        'EnterprisesLogo',
      'EnterprisesName',
      'CampaignName',
      'PointCampaignEndDate',
      'EnterpriseHQAccNo',
      'isRequiredStartEndDate',
      'isCampaignExpired'
        ]
    }
});
