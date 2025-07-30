# Reminder Services 🕒

This repository contains the **Reminder Services** microservice, a part of a distributed system designed for scheduling and sending reminders at specified times. This service ensures reliable and timely dispatch of notifications using message queues and scheduling mechanisms.

GitHub Repository: [Reminder_Services](https://github.com/rizzabh-x/Reminder_Services)

## 🔧 Features

- Schedule reminders for a specific date and time
- Uses message queue for decoupled communication
- Automatically deletes reminders once triggered
- Error handling and logging support
- Modular and scalable codebase

## 🏗️ Tech Stack

- **Node.js** (Backend)
- **MongoDB** (Database)
- **RabbitMQ** (Message Queue for job scheduling)
- **Express.js** (HTTP Server)
- **Dotenv** (Environment Configuration)

## 📁 Folder Structure

```
Reminder_Services/
│
├── config/             # Environment & Redis configuration
├── jobs/               # Queue job producers & consumers
├── models/             # MongoDB models for reminders
├── routes/             # API endpoints for reminder operations
├── utils/              # Utility functions (scheduler, logger, etc.)
├── .env                # Environment variables
├── server.js           # Entry point
└── package.json        # Project metadata & dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- RabbitMQ instance running

### Installation

```bash
git clone https://github.com/rizzabh-x/Reminder_Services.git
cd Reminder_Services
npm install
```

### Run the Server

```bash
npm start
```

The server will start at `http://localhost:3000`.

## 🧪 API Endpoints

- `POST /reminders` — Create a new reminder
- `GET /reminders` — Get all reminders
- `DELETE /reminders/:id` — Delete a reminder

## 📬 Reminder Flow

1. User schedules a reminder using the API.
2. Reminder is saved in MySQL
3. A job is added to the RabbitMQ queue to trigger at the specified time.
4. Worker consumes the job and sends the notification.
5. Reminder is deleted after triggering.

## 📌 Future Improvements

- Add support for recurring reminders
- Integrate with third-party notification APIs (e.g., email/SMS)
- Authentication and user management

## 🧑‍💻 Author

**Rishabh Malav**  
GitHub: [rizzabh-x](https://github.com/rizzabh-x)

---
