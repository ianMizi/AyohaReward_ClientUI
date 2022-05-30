Ext.define('ianMizi.model.AyohaeWalletTransaction.AyohaeWalletTransactionModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
        'ID',
      'eWalletAccNo',
      'TransactionType',
      'TransactionAmount',
      'TransactionReferenceNo',
      'TransactionStatus',
      'TransactionNote',
      'CreditDebitType',
      'CustomerAccNo',
      'CreatedDate',
      'ModifiedCreatedDate',
      'RowStatus',
      'AccountName',
      'AccountProfileImg',
      'ItemCartCode',
      'MembershipCardCode',
      'OrderNo',
       'MonthNumber',
      'CreatedDate_MonthYear',
      'ThisMonthSpent',
      'ThisMonthIncome',
      'PhoneNo',
      'UserProfileImg',
      'FullAccountName',
      {
          name: 'ModifiedTransactionAmount',
          convert: function (value, record) {
              var _value;
              var floatTransactionAmount = parseFloat(record.get('TransactionAmount'));
              var strCreditDebitType = record.get('CreditDebitType');

              if (strCreditDebitType == 'Credit') {
                  _value = " +RM" + floatTransactionAmount.toFixed(2) + ""
              } else {
                  _value = " -RM" + floatTransactionAmount.toFixed(2) + ""
              }




              return _value;
          }
      },
       {
           name: 'isSpentOrIncome',
           convert: function (value, record) {
               var _value;
               var strCreditDebitType = record.get('CreditDebitType');

               if (strCreditDebitType == 'Credit') {
                   _value = "<font color=blue>Income</font>"
               } else {
                   _value = "<font color=red>Spent</font>"
               }




               return _value;
           }
       },
        {
            name: 'SearchCol',
            convert: function (value, record) {
                var _value;
               
                var strAccountName = record.get('AccountName');
                var strFullAccountName = record.get('FullAccountName');
                var strTransactionAmount = record.get('TransactionAmount');
                var strCreditDebitType = record.get('CreditDebitType');

                if (strCreditDebitType == 'Credit') {
                    _value = "Income|" + strAccountName + "|"+ strFullAccountName +"|"+ strTransactionAmount +""
                } else {
                    _value = "Spent|" + strAccountName + "|" + strFullAccountName + "|" + strTransactionAmount + ""
                }




                return _value;
            }
        },
         {
             name: 'ModifiedFullAccountName',
             convert: function (value, record) {
                 var _value;
               //  var floatTransactionAmount = parseFloat(record.get('TransactionAmount'));
                 var FullAccountName = record.get('FullAccountName');

                 if (FullAccountName.length>17) {
                     _value = FullAccountName.substring(0,17);
                 } else {
                     _value = FullAccountName
                 }




                 return _value;
             }
         },

        ]
    }
});
