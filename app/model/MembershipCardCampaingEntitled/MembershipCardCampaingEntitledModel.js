﻿//Ext.define('ianMizi.model.MembershipCardCampaingEntitled.MembershipCardCampaingEntitledModel', {
//    extend: 'Ext.data.Model',
//    config: {
//        fields: [
//     'ID',
//      'CampaignCode',
//      'EnterpriseAccNo',
//      'EnterpriseHQAccNo',
//      'MembershipCardCode',
//      'CreatedBy',
//      'CreatedDate',
//      'ModifiedBy',
//      'ModifiedDate',
//      'RowStatus',
//      'CampaignType',
//      'CampaignName',
//      'CampaignStartDate',
//      'CampaignEndDate',
//      'StampRuleRemarks',
//      'isStampRulePopUp',
//      'Stamp',
//      'EnterpriseName',
//      'EnterpriseLogo',
//      'CountLoyaltyStamped',
//       {
//           name: 'CampaignIcon',
//           convert: function (value, record) {

//               var _value;
//               var str = record.get('CampaignType');

//               if (str == "Stamp Reward Loyalty Card") {
//                   _value = "resources/icons/AyohaStampCardPurple.png";
//               }
//               if (str == "Point Reward Loyalty Card") {
//                   _value = "resources/icons/pointPurpleOne.png";
//               }
//               if (str == "Privilege") {
//                   _value = "resources/icons/membershipPurpleFive.png";
//               }






//               return _value;
//           }
//       }
//        ]
//    }
//});

Ext.define('ianMizi.model.MembershipCardCampaingEntitled.MembershipCardCampaingEntitledModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
     'ID',
      'CampaignCode',
      'EnterpriseAccNo',
      'EnterpriseHQAccNo',
      'MembershipCardCode',
        'RowStatus',
        'CampaignType',
      'CampaignName',
      'CreatedBy',
      'CreatedDate',
      'Remarks',
      'isRulePopUp',
      'Stamp',
    'EnterpriseName',
      'EnterpriseLogo',
      'CountLoyaltyStamped',
      'CampaignStartDate',
      'CampaignEndDate',
      'isRequiredStartEndDate',
      'isCampaignExpired',
      'CampaignDayLeft',
       {
           name: 'CampaignIcon',
           convert: function (value, record) {

               var _value;
               var str = record.get('CampaignType');

               if (str == "Stamp Reward Loyalty Card") {
                   _value = "resources/icons/AyohaStampCardPurple.png";
               }
               if (str == "Point Reward Loyalty Card") {
                   _value = "resources/icons/pointPurpleOne.png";
               }
          if (str == "Privilege") {
                   _value = "resources/icons/membershipPurpleFive.png";
               }






               return _value;
           }
       },
       //{
       //    name: 'ModifiedCampaignType',
       //    convert: function (value, record) {

       //        var _value;
       //        var str = record.get('CampaignType');

       //        if (str == "Stamp Reward Loyalty Card") {
       //            //_value = '<img style="margin:-10px 0px 0px 0px;width:65px;height:65px;" src="resources/icons/StampTopImgOne.png">';
       //            _value = '<img style="margin:-10px 0px 0px 0px;width:65px;height:75px;" src="resources/icons/stamployaltyicon01.png">';
       //        }
       //        if (str == "Point Reward Loyalty Card") {
       //            //_value = '<img style="margin:-10px 0px 0px 0px;width:65px;height:65px;" src="resources/icons/PointAnimation03.gif">';
       //            _value = '<img style="margin:-10px 0px 0px 0px;width:65px;height:75px;" src="resources/icons/pointloyaltyicon.png">';
       //        }
       //        if (str == "Privilege") {
       //            _value = "resources/icons/membershipPurpleFive.png";
       //        }






       //        return _value;
       //    }
       //}
       {
           name: 'ModifiedCampaignType',
           convert: function (value, record) {

               var _value;
               var str = record.get('CampaignType');

               if (str == "Stamp Reward Loyalty Card") {
                   _value = '<img style="margin:-10px 0px 0px 0px;width:65px;height:65px;" src="resources/icons/StampTopImgOne.png">';
               }
               if (str == "Point Reward Loyalty Card") {
                   _value = '<img style="margin:-10px 0px 0px 0px;width:65px;height:65px;" src="resources/icons/PointAnimation03.gif">';
               }
               if (str == "Privilege") {
                   _value = "resources/icons/membershipPurpleFive.png";
               }






               return _value;
           }
       }
       ,
       {
           name: 'ModifiedCampaignTypeShorted',
           convert: function (value, record) {

               var _value;
               var str = record.get('isRequiredStartEndDate');
               var Mstr = record.get('CampaignType').replace("Reward","");
               if (str == "YES") {
                   _value = '<div class="myContent" style="background-color:white;height:160px;margin:-10px 0px 0px -10px;width:106%;"><div style="text-align:center;margin:0px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black"><br><div style="margin:-15px 0px 0px 0px"><u>' + Mstr + '</u></div></div>';
               }
               if (str == "NO") {
                   _value = '<div class="myContent" style="background-color:white;height:123px;margin:-10px 0px 0px -10px;width:106%;"><div style="text-align:center;margin:0px 0px 0px 0px;background-color: white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black"><br><div style="margin:-15px 0px 0px 0px"><u>' + Mstr + '</u></div></div>';
               }
               //if (str == "Privilege") {
               //    _value = 'Privilege';
               //}


               



               return _value;
           }
       },
       {
           name: 'ModifiedCountLoyaltyStamped',
           convert: function (value, record) {

               var _value;
               var str = record.get('CampaignType');
               var CountLoyaltyStamped = record.get('CountLoyaltyStamped');

               if (str == "Stamp Reward Loyalty Card") {
                   _value = '(' + CountLoyaltyStamped + ')';
                  
               }
               if (str == "Point Reward Loyalty Card") {
                   if (CountLoyaltyStamped) {
                       _value = '<div style="margin:-4px 0px 0px 0px;text-align:center;width:100%;height:24px;background-color:white;color:black;">(' + CountLoyaltyStamped + ') Points</div>';
                   } else {
                       _value = '<div style="margin:-4px 0px 0px 0px;text-align:center;width:100%;height:24px;background-color:white;color:black;">( 0 ) Point</div>';
                      
                   }

               } else {
                   _value = '(' + CountLoyaltyStamped + ')';
               }
               






               return _value;
           }
       },
          {
              name: 'ModifiedisRequiredStartEndDate',
              convert: function (value, record) {

                  var _value;
                  var str = record.get('isRequiredStartEndDate');
                  var CampaignEndDate = record.get('CampaignEndDate');
                  var CampaignDayLeft = record.get('CampaignDayLeft');
                  if (str == "YES") {
                    //  _value = '<div style="margin:-4px 0px 0px 0px;text-align:center;width:100%;height:24px;background-color:white;color:black;">(' + CountLoyaltyStamped + ') Points</div>';
                      _value = '<br><div style="width:100%;text-align:center;margin:-15px 0px 0px 0px;background-color: white;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;font-style:italic">Campaign End Date:' + CampaignEndDate + '</div><br><div style="width:100%;text-align:center;margin:-25px 0px 0px 0px;background-color: white;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;font-style:italic;height:21px;">Day Left:' + CampaignDayLeft + '</div>';
                  }
                  
                  if (str == "NO") {
                      _value = '<div style="width:100%;text-align:center;margin:-35px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:transparent;font-style:italic">.</div><br><div style="width:100%;text-align:center;margin:-25px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:transparent;font-style:italic">.</div>';
                  }






                  return _value;
              }
          }
        ]
    }
});

