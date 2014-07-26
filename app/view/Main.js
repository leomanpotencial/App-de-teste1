
            var data = {
     text: '',
     items: [{
         text: 'Advocacia',
         items: [{
             text: 'Dr. Paulo Andrade',
             items: [{
                 text: '<color:#ff0000>Dr. Paulo Andrade<br>R. Dr. Salustiano Silva, 12<br>75 3203-1111',
                 leaf: true
             },
             
             ]
         }, {
             text: 'Coffee',
             leaf: true
         }, {
             text: 'Espresso',
             leaf: true
         }, {
             text: 'Redbull',
             leaf: true
         }, {
             text: 'Coke',
             leaf: true
         }, {
             text: 'Diet Coke',
             leaf: true
         }]
     }, {
         text: 'Fruit',
         items: [{
             text: 'Bananas',
             leaf: true
         }, {
             text: 'Lemon',
             leaf: true
         }]
     }, {
         text: 'Snacks',
         items: [{
             text: 'Nuts',
             leaf: true
         }, {
             text: 'Pretzels',
             leaf: true
         }, {
             text: 'Wasabi Peas',
             leaf: true
         }]
     }]
 };

 Ext.define('ListItem', {
     extend: 'Ext.data.Model',
     config: {
         fields: [{
             name: 'text',
             type: 'string'
         }]
     }
 });

 var store = Ext.create('Ext.data.TreeStore', {
     model: 'ListItem',
     defaultRootProperty: 'items',
     root: data
 });

 var nestedList = Ext.create('Ext.NestedList', {
     fullscreen: true,
     title: 'Jeretel - Precisou t&aacute na m&atildeo!',
     displayField: 'text',
     store: store
 });
 
 var tapHandler = function(button, event){
            Ext.Msg.confirm('External Link', 'Call ' + button.contactName + "?", function(res){
                if (res == 'yes') {
                    window.location = button.callUrl;
                }
            }, this);

        };


        var callButton = new Ext.Button({
            text: 'Call Now',
            callUrl: 'tel:995223423',
            contactName: 'Ben M',
            handler: tapHandler
        });
 