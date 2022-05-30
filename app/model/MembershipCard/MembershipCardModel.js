Ext.define('ianMizi.model.MembershipCard.MembershipCardModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
                 'ID',
      'MembershipCardCode',
      'EnterpriseAccNo',
      'MembershipCardFee',
      'MembershipCardType',
      'RowStatus',
      'ExpiredDate',
      'MembershipCardBackgroundImg',
      'CreatedDate',
      'CreatedBy',
      'StartDate',
      'MembershipCardName',
      'MembershipCardFeePaymentCycle',
      'StrExpiredDate',
      'isValidLifeTime',
      'ModifiedBy',
      'ModifiedDate',
       'AyohaUserAccountName',
      'AyohaUserAccountNo',
      'AyohaUserPhoto',
      'EnterprisesName',
      'EnterprisesLogo',
      'EnterpriseAddress',
      'EnterpriseType',
      'BusinessTypeIconPath',
      'BusinessTypeGroup',
      'MembershipNo',
      'ValidUntilDateMonthYearOnly',
      'isMembershipCardSubscribed',
      'MembershipApprovalStatus',
      'MembrshipApprovalDate',
        'MembershipCardBackgroundImgName_back',
      'MembershipCardBackgroundImg_back',
      'MembershipCardPoint',
      'LoyaltCampaignCount'
          , {
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
                  

                  if (str.length <= 16) {
                      _value = '<div style="margin:-51px 0px 0px 68px;font-family:Arial, sans-serif;font-size:22px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white;width:100%;">' + str.toUpperCase() + '</div>';
                    
                      return _value;
                  }
                  if (str.length >= 17) {
                      var str0 = str.substring(0, 16);
                      var str1 = str.substring(16, str.length);
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
                  
                    if (str.length <= 13) {
                        _value = '<img src="' + logo + '" alt="Image" style="width:60px;height:60px;border-radius: 50%;border: 1px solid white;margin:-28px 0px 0px 0px">';
                        console.log(str.length);
                        return _value;
                    }
                    if (str.length >= 14) {
                        _value = '<img src="' + logo + '" alt="Image" style="width:60px;height:60px;border-radius: 50%;border: 1px solid white;margin:-28px 0px 0px 0px">';
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
                  name: 'ModifiedHeaderHeight',
                  convert: function (value, record) {

                      var _value;
                      var str = record.get('EnterprisesName');

                      if (str.length <= 16) {
                          _value = 'height:60px';
                          console.log(str.length);
                          return _value;
                      }
                      if (str.length >= 17) {
                          _value = 'height:80px';
                          console.log(str.length);
                          return _value;
                      }



                  }
              }
                , {
                    name: 'ModifiedAyohaUserAccountNo',
                    convert: function (value, record) {

                        var _value;
                        var str = record.get('AyohaUserAccountNo');
                        var str0 = str.split('-');
                        var str1 = str0[2];
                        _value = insert(str1, 3, " ");

                        return _value


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

                           var str5 = str2 + str4;
                           var str6 = str5;

                           var str7 = insert(str6, 4, " ");
                           var str8 = insert(str7, 9, " ");



                           _value = str8;
                           return _value;





                       }
                   }, {
                       name: 'ModifiedUntilDate',
                       convert: function (value, record) {
                           // Mizi - 01113218926 - 9309422 - MMC - 02 - 23
                           // 0111 3218 9269
                           var _value;
                           var isValidLifeTime = record.get('isValidLifeTime');
                           var StrExpiredDate = record.get('StrExpiredDate');
                           if (isValidLifeTime == "YES") {
                               _value = StrExpiredDate;
                           }
                           if (isValidLifeTime == "NO") {
                               _value = StrExpiredDate+'(Month)';
                           }

                          
                           return _value;





                       }
                   }
                   , {
                       name: 'ModifiedUntilDate',
                       convert: function (value, record) {
                           // Mizi - 01113218926 - 9309422 - MMC - 02 - 23
                           // 0111 3218 9269
                           var _value;
                           var ValidUntilDateMonthYearOnly = record.get('ValidUntilDateMonthYearOnly');
                           var isValidLifeTime = record.get('isValidLifeTime');
                           var StrExpiredDate = record.get('StrExpiredDate');
                           if (isValidLifeTime == "YES") {
                               _value = StrExpiredDate;
                           }
                           if (isValidLifeTime == "NO") {
                               if (ValidUntilDateMonthYearOnly == "02/1983") {
                                   _value = "Need Approval";
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
                   }, {
                       name: 'ModifiedisMembershipCardSubscribed',
                       convert: function (value, record) {
                           // Mizi - 01113218926 - 9309422 - MMC - 02 - 23
                           // 0111 3218 9269
                           var _value;
                           var isMembershipCardSubscribed = record.get('isMembershipCardSubscribed');

                           if (isMembershipCardSubscribed == "YES") {
                               _value = '<div style="width:95%;height:20px;text-align:right;" ><img style="margin:0px 0px 0px 0px" src="resources/icons/alreadymember.png" height="20px" width="100px"></div>';
                           }
                           if (isMembershipCardSubscribed == "NO") {

                               _value = '<div style="width:95%;height:15px;text-align:right;"><img style="margin:0px 0px 0px 0px" src="resources/icons/NeedApprovalTransparent.png" height="15px" width="90px"></div>';

                           }
                           return _value;

                       }
                   }


              
        ]
    }
});

function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}