$stamp = Get-Date -Format "yyyyMMdd_HHmmss"
New-Item -ItemType Directory -Force -Path backups | Out-Null
docker compose exec -T postgres pg_dump -U postgres -d inventory_system -Fc > "backups/inventory_$stamp.dump"
Write-Host "Backup created: backups/inventory_$stamp.dump"
