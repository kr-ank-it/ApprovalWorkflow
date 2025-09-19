# CAPM Project

This project demonstrates the **Cloud Application Programming Model (CAPM)** with multiple services, a service extender for validations, and two UI applications (Fiori Elements and Custom UI5). It is backed by an **SQLite 3 in-memory database** for local development and testing.  

---

## 📌 Project Overview

### 🔹 Backend (CAPM Services)
- **Service 1** – Core service exposing entities and operations.  
- **Service Extender** – Adds custom validations and logic extending **Service 1**.  
- **Service 2** – Additional service providing complementary functionality.  
- **Database** – Uses **SQLite 3** in-memory DB for persistence during runtime.  

---

### 🔹 Frontend (UI Applications)

1. **Fiori Elements Application**  
   - Purely built on **CAPM exposed services**.  
   - Automatically generates UI based on annotations.  
   - Provides a low-code/no-code experience for consuming CAP services.  

2. **Custom UI5 Application**  
   - Uses both **CAP services** and the **Northwind OData service**.  
   - Implements **parent-child view navigation**:  
     - Views are pushed from the **parent page** into the navigation stack.  
     - Also supports **root container view pushing** for better user experience.  
   - Offers flexibility and advanced UI capabilities beyond Fiori Elements.  

---

## ⚙️ Technologies Used
- **Backend**: SAP CAP (Node.js)  
- **Database**: SQLite 3 (in-memory)  
- **UI**:  
  - SAP Fiori Elements  
  - SAPUI5 (Custom)  
- **External Service**: Northwind OData  

---

## 🚀 Getting Started

### Prerequisites
- Node.js (LTS recommended)  
- SQLite 3  
- SAP Fiori / UI5 tools (for running UI apps)  

### Installation
```bash
# Install project dependencies
npm install
