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
      isAdmitted: true,
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
      isAdmitted: false,
      createdAt: "2025-03-02",
      updatedAt: "2025-03-29",
    },
    {
      patientId: 3,
      firstName: "Morris",
      lastName: "Baker",
      dob: "1990-02-02",
      gender: "Female",
      contactNumber: "0987654321",
      address: "456 Oak Avenue",
      stationId: 2,
      doctorId: 2,
      isAdmitted: true,
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
      createdAt: "2025-03-01",
      updatedAt: "2025-03-28",
    },
    {
      doctorId: 2,
      fullName: "Dr. David Evans",
      specialty: "Neurology",
      contactNumber: "8765432109",
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
      createdAt: "2025-03-01",
      updatedAt: "2025-03-28",
    },
    {
      nurseId: 2,
      firstName: "Michael",
      lastName: "Brown",
      contactNumber: "5554444444",
      assignedStationId: 2,
      createdAt: "2025-03-02",
      updatedAt: "2025-03-29",
    },
    // Add more nurses here...
  ],
  //migrian
  patientHistory: [
    {
      historyId: 1,
      patientId: 1,
      medicationId: "1391",
      symptomsId: "6789",
      diagnosisId:"4567",
      treatmentId:"8765",
      visitedDate: "2025-03-15",
      resultId:"1000",
      doctorId: 1,
      createdAt: "2025-03-15",
      updatedAt: "2025-03-15",

    },
    {
      historyId: 3,
      patientId: 1,
      medicationId: "1391",
      symptomsId: "6789",
      diagnosisId:"4567",
      treatmentId:"8765",
      visitedDate: "2025-04-15",
      resultId:"1000",
      doctorId: 1,
      createdAt: "2025-04-15",
      updatedAt: "2025-04-15",

    },
    //pnuemonia
    {
      historyId: 2,
      patientId: 2,
      medicationId: "0128",
      symptomsId: "1234",
      diagnosisId:"4567",
      treatmentId:"3210",
      resultId:"1001",
      visitedDate: "2025-03-16",
      doctorId: 2,
      createdAt: "2025-03-16",
      updatedAt: "2025-03-16",
    },
    // Add more patient history here...
  ],

  medications: [
    {
      medicationId: "5124",
      name: "Oseltamivir",
      dosage: "75mg",
      frequency: "Twice a day",
      prescribedFor: ["Influenza"],
      prescribedByDoctorId: 3,
      createdAt: "2025-04-10",
      updatedAt: "2025-04-10"
    },
    {
      medicationId: "1391",
      name: "Sumatriptan",
      dosage: "50mg",
      frequency: "As needed",
      prescribedFor: ["Migraine"],
      prescribedByDoctorId: 4,
      createdAt: "2025-04-12",
      updatedAt: "2025-04-12"
    },
    {
      medicationId: "0128",
      name: "Amoxicillin",
      dosage: "500mg",
      frequency: "Three times a day",
      prescribedFor: ["Pneumonia"],
      prescribedByDoctorId: 5,
      createdAt: "2025-04-08",
      updatedAt: "2025-04-08"
    }

  ],

  symptoms: [
    {
      id: "2345",
      name: "Fever",
      description: "A temporary increase in body temperature, often due to an infection.",
      severity: "Moderate",
      common_causes: ["Viral infection", "Bacterial infection", "Inflammation"]
    },
    {
      id: "6789",
      name: "Headache",
      description: "Pain in the head or upper neck region.",
      severity: "Mild",
      common_causes: ["Stress", "Dehydration", "Migraine"]
    },
    {
      id: "3456",
      name: "Cough",
      description: "A sudden, forceful expulsion of air from the lungs.",
      severity: "Varies",
      common_causes: ["Cold", "Allergy", "Respiratory infection"]
    }
  ],
  diagnosis: [
    {
      id: "7890",
      name: "Influenza",
      description: "A viral infection that affects the respiratory system.",
      symptoms: ["Fever", "Cough", "Body ache"],

    },
    {
      id: "4567",
      name: "Migraine",
      description: "A neurological condition characterized by severe headaches.",
      symptoms: ["Headache", "Sensitivity to light", "Nausea"],

    },
    {
      id: "1234",
      name: "Pneumonia",
      description: "An infection that inflames air sacs in the lungs.",
      symptoms: ["Cough", "Fever", "Shortness of breath"],

    }
  ],
  treatment: [
    {
      id: "6543",
      name: "Antiviral Medication",
      description: "Used to treat viral infections like influenza.",
      conditions_treated: ["Influenza"],
      method: "Oral administration"
    },
    {
      id: "8765",
      name: "Pain Relievers",
      description: "Medications that help alleviate headache symptoms.",
      conditions_treated: ["Migraine"],
      method: "Oral administration"
    },
    {
      id: "3210",
      name: "Antibiotics",
      description: "Used to treat bacterial infections like pneumonia.",
      conditions_treated: ["Pneumonia"],
      method: "Oral or intravenous administration"
    }
  ],
  procedures: [
    {
      procedureId: 1,
      description: "Appendectomy",
      cost: 15000,
      date: "2025-03-17",
      createdAt: "2025-03-17",
      updatedAt: "2025-03-17",
    },
    {
      procedureId: 2,
      description: "Cholecystectomy",
      cost: 20000,
      date: "2025-03-18",
      createdAt: "2025-03-18",
      updatedAt: "2025-03-18",
    },
    // Add more procedures here...
  ],
  laboratoryProcedures: [
    {
      procedureId: "1123",
      name: "X-ray",
      description: "A diagnostic imaging test that uses X-rays to view internal structures.",
      performedFor: ["Bone fractures", "Lung infections", "Chest abnormalities"],
      requiredPreparation: ["Remove metallic objects", "Wear a protective apron"],
      performedBy: "Radiologic Technologist",
      createdAt: "2025-04-20",
      updatedAt: "2025-04-20"
    },
    {
      procedureId: "2456",
      name: "MRI",
      description: "Magnetic Resonance Imaging that provides detailed images of organs and tissues.",
      performedFor: ["Brain abnormalities", "Spinal injuries", "Joint disorders"],
      requiredPreparation: ["Avoid metal objects", "No eating before scan if required"],
      performedBy: "Radiologist",
      createdAt: "2025-04-20",
      updatedAt: "2025-04-20"
    },
    {
      procedureId: "3897",
      name: "CBC",
      description: "Complete Blood Count to assess overall health and detect disorders.",
      performedFor: ["Anemia", "Infections", "Blood clotting issues"],
      requiredPreparation: ["No special preparation"],
      performedBy: "Medical Technologist",
      createdAt: "2025-04-20",
      updatedAt: "2025-04-20"
    },
    {
      procedureId: "4782",
      name: "2D Echo",
      description: "Ultrasound imaging to evaluate heart function and structures.",
      performedFor: ["Heart disease", "Valve disorders", "Congenital heart defects"],
      requiredPreparation: ["No caffeine before test", "Wear loose clothing"],
      performedBy: "Cardiologist",
      createdAt: "2025-04-20",
      updatedAt: "2025-04-20"
    }
  ],
  labResults: [
    {
      resultId: "1000",
      patientId: 1,
      procedureId: "2456",
      result: "Normal",
      testDate: "2025-03-15",
      createdAt: "2025-03-15",
      updatedAt: "2025-03-15",
    },
    {
      resultId: "1001",
      patientId: 2,
      procedureId: "1123",
      result: "No abnormalities",
      testDate: "2025-03-16",
      createdAt: "2025-03-16",
      updatedAt: "2025-03-16",
    },
    // Add more lab results here...
  ],
  users: [
    {
      loginId: 1,
      patientId: 1,
      userType: 2,
      username: "john_doe",
      password: "secure123",
      lastLogin: "2025-03-27"
    },
    {
      loginId: 2,
      patientId: 2,
      userType: 2,
      username: "jane_smith",
      password: "secure456",
      lastLogin: "2025-03-28"
    },
    {
      loginId: 3,
      nurseId: 1,
      userType: 1,
      username: "swift_taylor",
      password: "nurse123",
      lastLogin: "2025-03-27"
    },
    {
      loginId: 4,
      nurseId: 2,
      userType: 1,
      username: "michael_brown",
      password: "nurse456",
      lastLogin: "2025-03-28"
    },
    {
      loginId: 5,
      patientId: 3,
      userType: 2,
      username: "morris_baker",
      password: "secure456",
      lastLogin: "2025-03-28"
    },
  ],
  // patientLogin: [
  //   {
  //     loginId: 1,
  //     patientId: 1,
  //     username: "john_doe",
  //     password: "secure123",
  //     lastLogin: "2025-03-27"
  //   },
  //   {
  //     loginId: 2,
  //     patientId: 2,
  //     username: "jane_smith",
  //     password: "secure456",
  //     lastLogin: "2025-03-28"
  //   },
  //   // Add more patient login records here...
  // ],
  // nurseLogin: [
  //   {
  //     loginId: 1,
  //     nurseId: 1,
  //     username: "swift_taylor",
  //     password: "nurse123",
  //     lastLogin: "2025-03-27"
  //   },
  //   {
  //     loginId: 2,
  //     nurseId: 2,
  //     username: "michael_brown",
  //     password: "nurse456",
  //     lastLogin: "2025-03-28"
  //   },
  //   // Add more nurse login records here...
  // ],
};

export const storeContext = createContext(STORE_CONTEXT);
