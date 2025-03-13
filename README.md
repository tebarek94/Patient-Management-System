# Patient Management System

This is a full-featured Patient Management System built with React. It allows healthcare administrators and staff to efficiently manage patient information, doctors, appointments, billing, medical records, and more.

## Features:

### 1. **Dashboard**:
- Displays overall hospital stats, with visual representations of key data.
- Quick access to patient management and administrative tasks.

### 2. **Patient Management**:
- View and manage patient information and medical records.
- Add new records and edit existing ones for each patient.

### 3. **Doctor Management**:
- View a list of doctors and their details, including specialization.
- Add and manage doctor information.

### 4. **Appointment Management**:
- Schedule and manage patient appointments with doctors.
- View a list of upcoming and past appointments.

### 5. **Billing Management**:
- Manage billing information and generate reports for patients.

### 6. **User Management**:
- Manage users who have access to the system, including staff, doctors, and admins.

### 7. **Medical Records**:
- View detailed medical records for each patient, including diagnosis, treatment, and medication.
- Add new records for each patient.

### 8. **Sidebar Navigation**:
- Easily navigate between different sections of the system using a collapsible sidebar.

### 9. **Responsive Design**:
- The system is fully responsive, providing a smooth experience across devices, including desktops, tablets, and mobiles.

## API Endpoints:

- **GET /api/medical-records/**: Fetches all medical records.
- **GET /patients/:patientId/medical-records**: Fetches medical records for a specific patient.
- **POST /patients/:patientId/add-record**: Adds a new medical record for a patient.
- **GET /api/doctors**: Fetches the list of doctors.
- **GET /api/appointments**: Fetches upcoming and past appointments.
- **GET /api/users**: Fetches the list of users in the system.

## How to Use:

1. Clone the repository:
