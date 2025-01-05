# Student Enrollment Form with JsonPowerDB

A web-based application for managing student enrollment records, using JsonPowerDB as the backend database for fast, secure, and efficient data storage.

---

## Table of Contents

- [Description](#description)
- [Benefits of using JsonPowerDB](#benefits-of-using-jsonpowerdb)
- [Illustrations](#illustrations)
- [Scope of Functionalities](#scope-of-functionalities)
- [Examples of Use](#examples-of-use)
- [Project Status](#project-status)
- [Release History](#release-history)
- [Sources](#sources)
- [Other Information](#other-information)

---

## Description

This project implements a **Student Enrollment Form** where users can:

- Enter student details like roll number, name, class, birth date, address, and enrollment date.
- Validate input data and save it to a database.
- Use JsonPowerDB for seamless database interactions through REST APIs.

JsonPowerDB simplifies database management with its NoSQL architecture and unique multi-mode DBMS capabilities.

---

## Benefits of using JsonPowerDB

- **High Performance**: Ultra-low latency and optimized data operations.
- **Schema-Free**: No complex schema definitions are required, making it ideal for rapid development.
- **Built-in Security**: Provides inbuilt security mechanisms to protect data.
- **Ease of Integration**: Simple REST APIs to interact with the database.
- **Cost-Effective**: Reduces infrastructure costs with lightweight operations.

---

## Illustrations

### Application UI:

- **Bootstrap-based Responsive Form**:
  - Fields for roll number, name, class, birth date, address, and enrollment date.
  - "Save" button to store data.
  - "Change" button to update existing records.
  - "Reset" button to clear the form and enable new input.
- Error alerts for missing mandatory fields.

---

## Scope of Functionalities

- **Data Validation**: Ensures all fields are filled before submission.
- **Form Reset**: Resets the form after successful submission.
- **Database Operations**:
  - Sends data to JsonPowerDB using the `PUT` method for adding new records.
  - Updates existing records with the `UPDATE` method.
  - Retrieves data using the `GET` method for specific student records.

---

## Examples of Use

1. **Adding a Student**:
   - Fill in the details.
   - Click "Save" to send a `PUT` request to JsonPowerDB.
2. **Updating a Student**:
   - Retrieve a student record using the roll number.
   - Modify the details and click "Change" to update the record.
3. **Resetting the Form**:
   - Click "Reset" to clear all fields and enable new input.

---

## Sources

- JsonPowerDB Documentation: [login2explore.com](http://login2explore.com)
- Bootstrap: [Bootstrap Docs](https://getbootstrap.com)

---

## Other Information

- **Technologies Used**:
  - Frontend: HTML, CSS, Bootstrap
  - Backend: JsonPowerDB (REST API)
