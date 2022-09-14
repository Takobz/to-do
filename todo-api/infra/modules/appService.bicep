param webAppName string
param sku string = 'B1'
param linuxFxVersion string = 'DOTNETCORE|6.0'
param location string = resourceGroup().location
param sqlDatabaseName string

var appServicePlanName = toLower('AppServicePlan-${webAppName}')
var webSiteName = toLower(webAppName)
var contributorRoleGuid = '8e3af657-a8ff-443c-a75c-2fe8c4bcb635'
var principalId = appService.identity.principalId

@description('Type of role I am giving the app service.')
resource contributorRoleDefinition 'Microsoft.Authorization/roleDefinitions@2018-01-01-preview' existing = {
  scope: sqlDatabase
  name: contributorRoleGuid
}

resource sqlDatabase 'Microsoft.Sql/servers/databases@2021-11-01-preview' existing = {
  name: sqlDatabaseName
}

resource appServicePlan 'Microsoft.Web/serverfarms@2020-06-01' = {
  name: appServicePlanName
  location: location
  properties: {
    reserved: true
  }
  sku: {
    name: sku
  }
  kind: 'linux'
}

resource appService 'Microsoft.Web/sites@2020-06-01' = {
  name: webSiteName
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      linuxFxVersion: linuxFxVersion
    }
  }
  identity: {
    type: 'SystemAssigned'
  }
}

module roleAssignment 'roleAssignment.bicep' = {
  name: 'role-assignment'
  params: {
    roleAssignmentName: guid(resourceGroup().id, principalId, contributorRoleDefinition.id)
    principalId: principalId
    principalType: 'ServicePrincipal'
    roleDefinitionId: contributorRoleDefinition.id
  }
}
