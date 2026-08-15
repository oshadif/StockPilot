#!/bin/sh
set -eu
STAMP=$(date +%Y%m%d_%H%M%S)
mkdir -p backups
docker compose exec -T postgres pg_dump -U postgres -d inventory_system -Fc > "backups/inventory_${STAMP}.dump"
find backups -type f -name "inventory_*.dump" -mtime +14 -delete
echo "Backup created: backups/inventory_${STAMP}.dump"
