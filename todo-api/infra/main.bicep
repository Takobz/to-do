param location string = resourceGroup().location
param webAppName string
param adminLogin string
param adminPass string
param sqlServerName string
param sqlDatabaseName string

module appService 'modules/appService.bicep' = {
  name: 'appService'
  params: {
    webAppName: webAppName
    location: location
    sqlDatabaseName: sqlDatabase.outputs.databaseName
  }
}

module sqlServer 'modules/sqlServer.bicep' = {
  name: 'sql-server'
  params: {
    sqlServerName: sqlServerName
    adminLogin: adminLogin
    adminPass: adminPass
    location: location
  }
}

module sqlDatabase 'modules/sqlDatabase.bicep' = {
  name: 'sql-database'
  params: {
    databaseName: sqlDatabaseName
    sqlServerName: sqlServerName
    location: location
  }
  dependsOn:[
    sqlServer
  ]
}
