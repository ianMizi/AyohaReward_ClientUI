Ext.define('ianMizi.model.AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUser_VoucherHistoryModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
      'EntitledVoucherStartDate',
      'EntitledVoucherEndDate',
      'EntitledVoucherStatus',
      'EntitledVoucherNote',
      'VoucherCode',
      'DayLeft',
      'MembershipCardCode',
      'VoucherName',
      'VoucherImgPath',
      'VoucherAmount',
      'VoucherTermAndCondition',
      'PaymentNo',
'OrderNo',
'EnterpriseName',
'EnterpriseLogo',
'Voucher_EnterpriseName',
'Voucher_EnterpriseLogo',
'ItemCartCode',
'TotalQuantity',
'PaymentAtEnterpriseAccNo',
       {
           name: 'isThisVoucherUses',
           convert: function (value, record) {
               var _value;
               var EntitledVoucherStatus = record.get('EntitledVoucherStatus');
               var VoucherAmount = parseFloat(record.get('VoucherAmount'));
               var VoucherCode = record.get('VoucherCode');

               console.log("EntitledVoucherStatus:" + EntitledVoucherStatus);
               if (EntitledVoucherStatus == "ShoppingCart") {
                   //_value = '<input type="checkbox"  checked class="largerCheckbox" onclick="FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_OnChangeCheckbox (' + this + ',' + VoucherCode + ',' + VoucherAmount + ')" name="checkbox" />';
                   _value = 'checked';
               } else {
                   _value = '';
               }




               return _value;
           }
       },
           {
               name: 'VoucherUsedStatus',
               convert: function (value, record) {
                   var _value;
                   var EntitledVoucherStatus = record.get('EntitledVoucherStatus');

                   if (EntitledVoucherStatus == "Voucher_Used") {
                       _value = '<div style="width:100%;text-align:right;margin:-200px 0px 0px -20px;"><img src="resources/icons/UsedStampIcon.png" style="width:250px;height:250px"></div>';
                      // _value = 'Was Used Voucher';
                   } else {
                       _value = '<div style="width:100%;text-align:right;margin:-200px 0px 0px -20px;"><img src="resources/icons/transparentbox.png" style="width:250px;height:250px"></div>';
                   }

                   


                   return _value;
               }
           },
        ]
    }
});