<div align="center">

# 📦 StockPilot

### Enterprise Inventory Management System

A full-stack, multi-warehouse inventory platform for product control, procurement, stock transfers, adjustments, batches, expiry tracking, valuation, reporting, audit trails, backups and offline-friendly workflows.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=nodedotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?logo=docker&logoColor=white)
![JWT](https://img.shields.io/badge/Auth-JWT-black?logo=jsonwebtokens)

</div>

---

## Overview

**StockPilot** is a portfolio-grade inventory management platform designed around realistic warehouse operations. It supports multiple warehouses, catalog management, suppliers, purchase orders, goods receiving, transfers, stock adjustments, low-stock monitoring, expiry/batch tracking, valuation, movement history and operational audit logs.

## Core Features

- Multi-warehouse inventory
- Products, categories, brands and units
- Suppliers and procurement contacts
- Purchase orders and goods receiving
- Warehouse-to-warehouse stock transfers
- Manual stock adjustments
- Reorder levels and low-stock alerts
- Batch and expiry tracking
- Barcode / SKU search
- Inventory valuation
- Stock movement history
- Role-based access
- Administrative audit logs
- CSV export
- Database backup and restore scripts
- Offline-friendly service worker shell

## Architecture

```text
React + Vite SPA
      │
      │ REST / JSON + JWT
      ▼
Node.js + Express API
      │
      ▼
PostgreSQL 16
```

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React 18, React Router, Vite |
| Backend | Node.js, Express.js |
| Database | PostgreSQL 16, pg |
| Authentication | JWT, bcryptjs |
| Deployment | Docker, Docker Compose, Render Blueprint |
| Operations | PowerShell / shell backup and restore scripts |

## Quick Start

```bash
git clone https://github.com/oshadif/StockPilot.git
cd StockPilot
docker compose up --build
```

Open:

- Frontend: `http://localhost:5174`
- Backend API: `http://localhost:4001`
- Health check: `http://localhost:4001/api/health`

## Demo Accounts

**Admin** — `admin@demo.com` / `admin123`  
**Storekeeper** — `storekeeper@demo.com` / `store123`

> Demo credentials are for local portfolio use only. Replace them before any real deployment.

## Backup & Restore

Windows PowerShell:

```powershell
./scripts/backup.ps1
```

Linux/macOS:

```bash
chmod +x scripts/backup.sh scripts/restore.sh
./scripts/backup.sh
```

Restore:

```bash
./scripts/restore.sh backups/inventory_YYYYMMDD_HHMMSS.dump
```

## Security / Production Notes

- Never commit production `.env` files or secrets.
- Replace demo passwords and JWT/database credentials.
- Use HTTPS and managed PostgreSQL for public deployments.
- Store backups off-site and test restores regularly.
- Add automated tests, rate limiting and monitoring.
- Add approval workflows for high-impact stock adjustments.

## Author

**Oshadi Vidumini Fernando**  
Software Engineer · Full-Stack & Mobile Developer  
GitHub: [@oshadif](https://github.com/oshadif)
