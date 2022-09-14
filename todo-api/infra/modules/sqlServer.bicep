param sqlServerName string
param location string = 'North Europe'
param adminLogin string
param adminPass string

resource sqlServer 'Microsoft.Sql/servers@2021-11-01-preview' = {
  name: sqlServerName
  location: location
  properties: {
    administratorLogin: adminLogin
    administratorLoginPassword: adminPass
  }
}
