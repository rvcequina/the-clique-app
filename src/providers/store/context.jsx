import { createContext } from "react";

export const STORE_CONTEXT = {
  patients: [
    {
      patientId: 1,
      firstName: "John",
      lastName: "Doe",
      dob: "1980-01-01",
      gender: "Male",
      contactNumber: "1234567890",
      address: "123 Elm Street",
      stationId: 1,
      doctorId: 1,
      createdAt: "2025-03-01",
      updatedAt: "2025-03-28",
    },
    {
      patientId: 2,
      firstName: "Jane",
      lastName: "Smith",
      dob: "1990-02-02",
      gender: "Female",
      contactNumber: "0987654321",
      address: "456 Oak Avenue",
      stationId: 2,
      doctorId: 2,
      createdAt: "2025-03-02",
      updatedAt: "2025-03-29",
    },
    // Add more patients here...
  ],
  doctors: [
    {
      doctorId: 1,
      fullName: "Dr. Emily Watson",
      specialty: "Cardiology",
      contactNumber: "9876543210",
      assignedStationId: 1,
      createdAt: "2025-03-01",
      updatedAt: "2025-03-28",
    },
    {
      doctorId: 2,
      fullName: "Dr. David Evans",
      specialty: "Neurology",
      contactNumber: "8765432109",
      assignedStationId: 2,
      createdAt: "2025-03-02",
      updatedAt: "2025-03-29",
    },
    // Add more doctors here...
  ],
  stations: [
    {
      stationId: 1,
      stationName: "Emergency Ward",
      location: "Ground Floor",
      assignedDoctorId: 1,
      createdAt: "2025-03-01",
      updatedAt: "2025-03-28",
    },
    {
      stationId: 2,
      stationName: "ICU",
      location: "First Floor",
      assignedDoctorId: 2,
      createdAt: "2025-03-02",
      updatedAt: "2025-03-29",
    },
    // Add more stations here...
  ],
  nurses: [
    {
      nurseId: 1,
      firstName: "Swift",
      lastName: "Taylor",
      contactNumber: "5555555555",
      assignedStationId: 1,
      assignedDoctorId: 1,
      createdAt: "2025-03-01",
      updatedAt: "2025-03-28",
    },
    {
      nurseId: 2,
      firstName: "Michael",
      lastName: "Brown",
      contactNumber: "5554444444",
      assignedStationId: 2,
      assignedDoctorId: 2,
      createdAt: "2025-03-02",
      updatedAt: "2025-03-29",
    },
    // Add more nurses here...
  ],
  patientHistory: [
    {
      historyId: 1,
      patientId: 1,
      symptoms: "Fever, Cough",
      diagnosis: "Flu",
      treatment: "Rest and fluids",
      visitedDate: "2025-03-15",
      doctorId: 1,
      createdAt: "2025-03-15",
      updatedAt: "2025-03-15",
    },
    {
      historyId: 2,
      patientId: 2,
      symptoms: "Headache",
      diagnosis: "Migraine",
      treatment: "Painkillers",
      visitedDate: "2025-03-16",
      doctorId: 2,
      createdAt: "2025-03-16",
      updatedAt: "2025-03-16",
    },
    // Add more patient history here...
  ],
  medications: [
    {
      medicationId: 1,
      patientId: 1,
      name: "Paracetamol",
      dosage: "500mg",
      frequency: "Twice a day",
      startDate: "2025-03-15",
      endDate: "2025-03-20",
      prescribedByDoctorId: 1,
      createdAt: "2025-03-15",
      updatedAt: "2025-03-15",
    },
    {
      medicationId: 2,
      patientId: 2,
      name: "Ibuprofen",
      dosage: "400mg",
      frequency: "Three times a day",
      startDate: "2025-03-16",
      endDate: "2025-03-18",
      prescribedByDoctorId: 2,
      createdAt: "2025-03-16",
      updatedAt: "2025-03-16",
    },
    // Add more medications here...
  ],
  procedures: [
    {
      procedureId: 1,
      patientId: 1,
      description: "Appendectomy",
      cost: 15000,
      date: "2025-03-17",
      doctorId: 1,
      createdAt: "2025-03-17",
      updatedAt: "2025-03-17",
    },
    {
      procedureId: 2,
      patientId: 2,
      description: "Cholecystectomy",
      cost: 20000,
      date: "2025-03-18",
      doctorId: 2,
      createdAt: "2025-03-18",
      updatedAt: "2025-03-18",
    },
    // Add more procedures here...
  ],
  labResults: [
    {
      resultId: 1,
      patientId: 1,
      testName: "CBC",
      result: "Normal",
      testDate: "2025-03-15",
      createdAt: "2025-03-15",
      updatedAt: "2025-03-15",
    },
    {
      resultId: 2,
      patientId: 2,
      testName: "MRI",
      result: "No abnormalities",
      testDate: "2025-03-16",
      createdAt: "2025-03-16",
      updatedAt: "2025-03-16",
    },
    // Add more lab results here...
  ],
  patientLogin: [
    {
      loginId: 1,
      patientId: 1,
      username: "john_doe",
      password: "secure123",
      lastLogin: "2025-03-27"
    },
    {
      loginId: 2,
      patientId: 2,
      username: "jane_smith",
      password: "secure456",
      lastLogin: "2025-03-28"
    },
    // Add more patient login records here...
  ],
  nurseLogin: [
    {
      loginId: 1,
      nurseId: 1,
      username: "swift_taylor",
      password: "nurse123",
      lastLogin: "2025-03-27"
    },
    {
      loginId: 2,
      nurseId: 2,
      username: "michael_brown",
      password: "nurse456",
      lastLogin: "2025-03-28"
    },
    // Add more nurse login records here...
  ],
};

export const storeContext = createContext(STORE_CONTEXT);
