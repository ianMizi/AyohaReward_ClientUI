Ext.define('ianMizi.model.Memberships.MembershipsModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
                 'ID',
      'CampaignEnterpriseAccNo',
      'CampaignRewardType',
      'SubscriberAccNo',
      'MembershipDate',
      'MembershipByMethod',
      'MembrshipApprovalDate',
      'MembershipApprovalBy',
      'ReferalSubscriberAccNo',
      'MembershipFee',
      'MembershipLevel',
      'IsRequiredMembershipFee',
      'RowStatus',
      'MembershipNo',
      'MembershipApprovalStatus',
      'MembershipFeePaymentMethod',
      'MembershipPaymentLink',
      'MembershipPaymentPaidProof',
      'MembershipCardCode',
      'MembershipPaymentCode',
      'CreatedDate',
      'CreatedBy',
      'ModifiedDate',
      'ModifiedBy',
      'MembershipCardFeePaymentCycle',
      'StrExpiredDate',
      'isValidLifeTime',
      'CampaignEnterpriseHQAccNo',
      'MembershipCardBackgroundImg',
      'MembershipCardName',
      'EnterprisesName',
      'EnterprisesLogo',
      'EnterpriseAddress',
      'EnterpriseType',
      'BusinessTypeIconPath',
      'BusinessTypeGroup',
      'AccountName',
      'ValidUntilDateMonthYearOnly',
      'isRequiredApproval',
      'MembershipCardPoint',
      'AyohaRewardPoint',
      'MerchantPoint',
      'LoyaltCampaignCount',
       {
           name: 'ModifiedEnterprisesNameUpperCase',
           convert: function (value, record) {

               var _value;
               var str = record.get('EnterprisesName');

               _value = str.toUpperCase();




               return _value;
           }
       }
          , {
              name: 'ModifiedEnterprisesName',
              convert: function (value, record) {

                  var _value;
                  var str = record.get('EnterprisesName');
                  console.log(str);

                  if (str.length <= 16) {
                      _value = '<div style="margin:-51px 0px 0px 68px;font-family:Arial, sans-serif;font-size:22px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white;width:100%;">' + str.toUpperCase() + '</div>';
                      console.log(str);
                      return _value;
                  }
                  if (str.length >= 17) {
                      var str0 = str.substring(0, 16);
                      var str1 = str.substring(16, str.length);
                      console.log(str0);
                      console.log(str1);
                      _value = '<div style="margin:-61px 0px 0px 68px;font-family:Arial, sans-serif;font-size:18px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white;width:100%;">' + str0.toUpperCase() + '-</div><br>' +
                               '<div style="margin:-26px 0px 0px 68px;font-family:Arial, sans-serif;font-size:18px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white;width:100%;">' + str1.toUpperCase() + '</div>';
                      return _value;
                  }



              }
          }
            , {
                name: 'ModifiedEnterprisesLogo',
                convert: function (value, record) {

                    var _value;
                    var str = record.get('EnterprisesName');
                    var logo = record.get('EnterprisesLogo');
                    console.log(str);

                    if (str.length <= 13) {
                        _value = '<img src="' + logo + '" alt="Image" style="width:60px;height:60px;border-radius: 50%;border: 1px solid white;margin:-36px 0px 0px 0px">';
                        console.log(str.length);
                        return _value;
                    }
                    if (str.length >= 14) {
                        _value = '<img src="' + logo + '" alt="Image" style="width:60px;height:60px;border-radius: 50%;border: 1px solid white;margin:-36px 0px 0px 0px">';
                        console.log(str.length);
                        return _value;
                    }



                }
            }
              , {
                  name: 'ModifiedHeaderHeight',
                  convert: function (value, record) {

                      var _value;
                      var str = record.get('EnterprisesName');

                      console.log(str);

                      if (str.length <= 16) {
                          _value = 'height:73px';
                          console.log(str.length);
                          return _value;
                      }
                      if (str.length >= 17) {
                          _value = 'height:90px';
                          console.log(str.length);
                          return _value;
                      }



                  }
              }
              , {
                  name: 'ModifiedMembershipNo',
                  convert: function (value, record) {
                      // Mizi - 01113218926 - 9309422 - MMC - 02 - 23
                      // 0111 3218 9269
                      var _value;
                      var str = record.get('MembershipNo');
                      var str1 = str.split('-');
                      var str2 = str1[1];
                      var str3 = str1[2];
                      var str4 = str3.substring(0, 1);

                      var str5=str2+str4;
                      var str6=str5;
                     
                      var str7 = insert(str6, 4, " ");
                      var str8 = insert(str7, 9, " ");



                      _value = str8;
                      return _value;

                     



                  }
              }
               , {
                   name: 'ModifiedAccountName',
                   convert: function (value, record) {

                       var _value;
                       var str = record.get('AccountName');

                       _value = str.toUpperCase();




                       return _value;
                   }
               }, {
                   name: 'ModifiedUntilDate',
                   convert: function (value, record) {
                       // Mizi - 01113218926 - 9309422 - MMC - 02 - 23
                       // 0111 3218 9269
                       var _value;
                       var ValidUntilDateMonthYearOnly = record.get('ValidUntilDateMonthYearOnly');
                       var isValidLifeTime = record.get('isValidLifeTime');
                       var StrExpiredDate = record.get('StrExpiredDate');
                       if (isValidLifeTime == "YES") {
                           _value = "No Expired";
                       }
                       if (isValidLifeTime == "NO") {
                           if (ValidUntilDateMonthYearOnly == "02/1983") {
                               _value ="Need Approval";
                           } else {

                               
                               _value = ValidUntilDateMonthYearOnly;
                           }
                         
                       }
                       return _value;

                   }
               }, {
                   name: 'ModifiedMemberSinceDate',
                   convert: function (value, record) {
                       // Mizi - 01113218926 - 9309422 - MMC - 02 - 23
                       // 0111 3218 9269
                       var _value;                    
                       var isValidLifeTime = record.get('isValidLifeTime');
                       var CreatedDate = record.get('CreatedDate');
                       var MembrshipApprovalDate = record.get('MembrshipApprovalDate');
                       if (isValidLifeTime == "YES") {
                           _value = CreatedDate;
                       }
                       if (isValidLifeTime == "NO") {
                           if (MembrshipApprovalDate) {
                               _value = MembrshipApprovalDate;
                           } else {
                               _value = "After Confirmed";
                           }
                          

                       }
                       return _value;

                   }
               }
               , {
                   name: 'ModifiedisRequiredApproval',
                   convert: function (value, record) {
                       // Mizi - 01113218926 - 9309422 - MMC - 02 - 23
                       // 0111 3218 9269
                       var _value;
                       var isRequiredApproval = record.get('isRequiredApproval');
                  
                       if (isRequiredApproval == "YES") {
                           _value = '<div style="width:95%;height:15px;text-align:right;" class="blink_me"><img style="margin:0px 0px 0px 0px" src="resources/icons/needApproval01.png" height="15px" width="90px"></div>';
                       }
                       if (isRequiredApproval == "NO") {
                           
                           _value = '<div style="width:95%;height:15px;text-align:right;" class="blink_me"><img style="margin:0px 0px 0px 0px" src="resources/icons/NeedApprovalTransparent.png" height="15px" width="90px"></div>';

                       }
                       return _value;

                   }
               }
                    , {
                        name: 'ModifiedMembershipApprovalStatus',
                        convert: function (value, record) {
                            // Mizi - 01113218926 - 9309422 - MMC - 02 - 23
                            // 0111 3218 9269
                            var _value;
                            var MembershipApprovalStatus = record.get('MembershipApprovalStatus');

                            if (MembershipApprovalStatus == "REQUEST") {
                                _value = '<div style="width:95%;height:15px;text-align:right;" class="blink_me"><img style="margin:0px 0px 0px 0px" src="resources/icons/needApproval01.png" height="15px" width="90px"></div>';
                            }
                            if (MembershipApprovalStatus == "APPROVED") {

                                _value = '<div style="width:95%;height:15px;text-align:right;" class="blink_me"><img style="margin:0px 0px 0px 0px" src="resources/icons/NeedApprovalTransparent.png" height="15px" width="90px"></div>';

                            }
                            if (MembershipApprovalStatus == "REJECTED") {

                                _value = '<div style="width:95%;height:15px;text-align:right;" class="blink_me"><img style="margin:0px 0px 0px 0px" src="resources/icons/MembershipRejected01.png" height="15px" width="90px"></div>';

                            }
                            return _value;

                        }
                    },
                     {
                         name: 'ModifiedEnterprisesNameUpperCase',
                         convert: function (value, record) {

                             var _value;
                             var str = record.get('EnterprisesName');

                             _value = str.toUpperCase();




                             return _value;
                         }
                     }
        ]
    }
});
