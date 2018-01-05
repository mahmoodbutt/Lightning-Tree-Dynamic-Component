public with sharing class lightningTreeDemo {

    @AuraEnabled
    public static List<Account> getAccountWithOpps()
    {
        return [SELECT name, (SELECT Name, Amount FROM Opportunities) FROM Account WHERE Total_Opportunities__c > 0 LIMIT 2];
    }
    
    @AuraEnabled
    public static List<sObject> getParentWithChildren(String ParentObj, String ChildObj, String ParentObjNameField, String ChildObjNameField)
    {
        String query = 'SELECT ' + ParentObjNameField + ', (SELECT  ' + ChildObjNameField + ' FROM ' + ChildObj + ') FROM ' + ParentObj;
        return (List<sObject>)Database.query(query);
    }
}