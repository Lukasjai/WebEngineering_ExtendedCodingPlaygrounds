# WebEngineering_ExtendedCodingPlaygrounds

This project includes a React frontend application and an Express.js backend, both running in Docker containers. The goal is to fetch dynamic data from the Wikipedia API and display local images and audio files correctly.
The backend is locatd in th folder bckend, the fronend is situated in the root folder of the project. 
---

## commands to start the Project


### Prerequisites

1. **Installed Software:**
    - [Docker](https://www.docker.com/get-started)
    - Docker Compose (usually included with Docker)

2. **Ports:**
    - **Frontend:** `http://localhost` (Port 80)
    - **Backend:** `http://localhost:3000`

---

### How to Build and Start the Project

Follow these steps to build and start the project in both **development** and **production** modes.

### **1. Clone the Repository**
First, clone the repository to your local machine:
```bash
git clone https://github.com/Lukasjai/WebEngineering_ExtendedCodingPlaygrounds.git
cd WebEngineering_ExtendedCodingPlaygrounds
```

### **2. Build and start the project**
devolopment environment
```bash
docker-compose -f docker-compose.yml up --build
```
productive environment
```bash
docker-compose -f docker-compose.prod.yml up --build
```