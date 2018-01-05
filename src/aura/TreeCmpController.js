({
    doInit: function (cmp, event, helper) {
        
        //var items = [];
        var parentObj = cmp.get('v.parentObj');
        var childObj = cmp.get('v.childObj');
        var parentObjNameField = cmp.get('v.parentObjNameField');
        var childObjNameField = cmp.get('v.childObjNameField');
        
        //var action = cmp.get('c.getAccountWithOpps');
        var action = cmp.get('c.getParentWithChildren');
        action.setParams({
            ParentObj : parentObj,
            ChildObj : childObj,
            ParentObjNameField : parentObjNameField,
            ChildObjNameField : childObjNameField
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            console.log("state:" + state);
            if (state === "SUCCESS") {
                // replace parent object name with label
                var objects = JSON.stringify(response.getReturnValue()).replace(new RegExp(parentObjNameField, 'g'), 'label');
                // replace child object name with label
                objects = objects.replace(new RegExp(childObjNameField, 'g'), 'label');
                // replace child object title with items
                objects = objects.replace(new RegExp(childObj, 'g'), 'items');
                
                
                //var accounts = JSON.stringify(response.getReturnValue()).replace(new RegExp('Name', 'g'), 'label').replace(new RegExp('Opportunities', 'g'), 'items');
                console.log('Before update:'+ objects);
                
                cmp.set("v.items", JSON.parse(objects) );
            }
            else{
                console.log("Failed with state: " + response.getError());
            }
        });
        $A.enqueueAction(action);
        /*
        var items = [
            {
                "label": "Edge Communications",
                "Id": "0016F00001ra7noQAA",
                "items": [
                    {
                        "AccountId": "0016F00001ra7noQAA",
                        "Id": "0066F00000kkQVfQAM",
                        "label": "Edge Emergency Generator",
                        "Amount": 75000
                    },
                    {
                        "AccountId": "0016F00001ra7noQAA",
                        "Id": "0066F00000kkQVmQAM",
                        "label": "Edge Installation",
                        "Amount": 50000
                    },
                    {
                        "AccountId": "0016F00001ra7noQAA",
                        "Id": "0066F00000kkQVnQAM",
                        "label": "Edge SLA",
                        "Amount": 60000
                    },
                    {
                        "AccountId": "0016F00001ra7noQAA",
                        "Id": "0066F00000kkQW1QAM",
                        "label": "Edge Emergency Generator",
                        "Amount": 35000
                    }
                ]
            },
            {
                "label": "Burlington Textiles Corp of America",
                "Id": "0016F00001ra7npQAA",
                "items": [
                    {
                        "AccountId": "0016F00001ra7npQAA",
                        "Id": "0066F00000kkQVuQAM",
                        "label": "Burlington Textiles Weaving Plant Generator",
                        "Amount": 235000
                    }
                ]
            }
        ];
        cmp.set('v.items', items);
        */
    },
    showSpinner: function (cmp, event){
        cmp.set("v.spinner", true);
    },
    hideSpinner: function (cmp, event){
        cmp.set("v.spinner", false);
    }
})