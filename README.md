# Lightning-Tree-Dynamic-Component
Creates a tree component of provided parent - child objects.


Basic implementation

<aura:application extends="force:slds">
  
  <c:TreeCmp parentObj="Account" childObj="Opportunities" parentObjNameField="Name" childObjNameField="Name" /> 
	
</aura:application>

# Attributes

parentObj = Provide the name of the Parent Object, e.g. Account, CustomObject__c.
childObj = Provide the name of the Child Object. Child object should be in master-detail or Lookup relationship. Provide the name of the relationship carefully. 
e.g. Account child "Cases" (not case) or "Opportunities".
parentObjNameField = Field label to be displayed on the tree from Parent Object.
childObjNameField = Field label to be displayed on the tree from Child Object.
