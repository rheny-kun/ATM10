param(
  [Parameter(Mandatory = $true)] [string] $ManifestPath,
  [string] $OutputPath
)

$ErrorActionPreference = "Stop"
$manifest = Get-Content -Raw -LiteralPath $ManifestPath | ConvertFrom-Json
if ($manifest.version -ne "8.2" -or $manifest.minecraft.version -ne "1.21.1") {
  throw "This script only accepts ATM10 8.2 / Minecraft 1.21.1 manifests."
}

$result = [ordered]@{
  pack = "All the Mods 10"
  version = $manifest.version
  minecraft = $manifest.minecraft.version
  loader = $manifest.minecraft.modLoaders[0]
  files = @($manifest.files | ForEach-Object {
    [ordered]@{ projectId = $_.projectID; fileId = $_.fileID; required = $_.required }
  })
}

$json = $result | ConvertTo-Json -Depth 5
if ($OutputPath) {
  Set-Content -LiteralPath $OutputPath -Value $json -Encoding utf8
} else {
  $json
}

