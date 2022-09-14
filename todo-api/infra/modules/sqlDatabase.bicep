param databaseName string
param sqlServerName string
param location string


@description('This is the sorting rules, case and accent sentivity for US, this can be changed.')
param collation string = 'SQL_Latin1_General_CP1_CI_AS'

resource sqlDatabase 'Microsoft.Sql/servers/databases@2021-11-01-preview' = {
  name: '${sqlServerName}/${databaseName}'
  location: location
  sku: {
    name: 'Basic'
    tier: 'Basic'
  }
  properties:{
    collation: collation
    maxSizeBytes: 2147483648
  }
}

output databaseName string = sqlDatabase.name
