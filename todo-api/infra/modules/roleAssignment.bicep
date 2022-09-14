@description('The id of role definition that we want to grant')
param roleDefinitionId string

@description('The Azure AD object Id of the resource that we want to give access to')
param principalId string

@description('The type of AAD instance we want to give access to')
@allowed([
  'ServicePrincipal'
  'Device'
  'Group'
  'User'
  'ForeignGroup'
])
param principalType string

@description('guid name for the role assignment must be unique across Azure')
param roleAssignmentName string

resource roleAssignment 'Microsoft.Authorization/roleAssignments@2020-10-01-preview' = {
  name: roleAssignmentName
  properties: {
    roleDefinitionId: roleDefinitionId
    principalId: principalId
    principalType: principalType
  }
}
