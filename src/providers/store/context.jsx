import { createContext } from "react";

export const STORE_CONTEXT =  {
  patients: [
    {
      patientId: 1,
      firstName: "Jude",
      lastName: "Juros",
      dob: "1980-01-01",
      gender: "Male",
      contactNumber: "1234567890",
      address: "123 Elm Street",
      email:"jude@juros.com",
      stationId: 1,
      doctorId: 1,
      isAdmitted: true,
      createdAt: "2025-03-01",
      updatedAt: "2025-03-28",
    },
    {
      patientId: 2,
      firstName: "Brice",
      lastName: "Leuterio",
      dob: "1990-02-02",
      gender: "Male",
      contactNumber: "0987654321",
      address: "456 Oak Avenue",
      email:"brice@leuterio.com",
      stationId: 2,
      doctorId: 2,
      isAdmitted: false,
      createdAt: "2025-03-02",
      updatedAt: "2025-03-29",
    },
    {
      patientId: 3,
      firstName: "Alexandra",
      lastName: "Labansauan",
      dob: "1990-02-02",
      gender: "Female",
      contactNumber: "0987654321",
      address: "456 Oak Avenue",
      email:"Alexandra@labansauan.com",
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
      fullName: "Dr. Richard Librodo",
      specialty: "Gastreontology",
      contactNumber: "9876543210",
      createdAt: "2025-03-01",
      updatedAt: "2025-03-28",
    },
    {
      doctorId: 2,
      fullName: "Dr. Charlize Templa",
      specialty: "Gastreontology",
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
      firstName: "Michelle",
      lastName: "Grijaldo",
      contactNumber: "5555555555",
      assignedStationId: 1,
      createdAt: "2025-03-01",
      updatedAt: "2025-03-28",
    },
    {
      nurseId: 2,
      firstName: "Kristine",
      lastName: "Legatam",
      contactNumber: "5554444444",
      assignedStationId: 2,
      createdAt: "2025-03-02",
      updatedAt: "2025-03-29",
    },
    // Add more nurses here...
  ],
  //
  patientHistory: [
    {
      historyId: 1,
      patientId: 1,
      medicationId: "1001",
      symptomsId: ["2001","2002","2003","2004","2005","2006"],
      diagnosisId:"3001",
      treatmentId:"4001,4002,4003,4004,4005",
      visitedDate: "2024-03-15",
      resultId:"1000",
      doctorId: 1,
      createdAt: "2024-03-15",
      updatedAt: "2024-03-15",

    },
    {
      historyId: 2,
      patientId: 2,
      medicationId: "1002",
      symptomsId: "2003,2007,2001,2008,2009",
      diagnosisId:"3002",
      treatmentId:"4008,40010,4002,4005,4004,40011",
      visitedDate: "2024-04-15",
      resultId:"1000",
      doctorId: 1,
      createdAt: "2024-04-15",
      updatedAt: "2024-04-15",
    },
    {
      historyId: 3,
      patientId: 3,
      medicationId: "1003",
      symptomsId: "20010,20011,2008,20012,20013,20014",
      diagnosisId:"3003",
      treatmentId:"40012,40013,40011,40010,4007,4008",
      visitedDate: "2024-04-15",
      resultId:"1000",
      doctorId: 1,
      createdAt: "2024-04-15",
      updatedAt: "2024-04-15",
    },
    {
      historyId: 5,
      patientId: 1,
      medicationId: "1004",
      symptomsId: "6789",
      diagnosisId:"4567",
      treatmentId:"8765",
      visitedDate: "2024-04-15",
      resultId:"1000",
      doctorId: 1,
      createdAt: "2024-04-15",
      updatedAt: "2024-04-15",
    },
    {
      historyId: 6,
      patientId: 1,
      medicationId: "1005",
      symptomsId: "6789",
      diagnosisId:"4567",
      treatmentId:"8765",
      visitedDate: "2024-04-15",
      resultId:"1000",
      doctorId: 1,
      createdAt: "2024-04-15",
      updatedAt: "2024-04-15",
    },
    {
      historyId: 7,
      patientId: 2,
      medicationId: "1006",
      symptomsId: "6789",
      diagnosisId:"4567",
      treatmentId:"8765",
      visitedDate: "2024-04-15",
      resultId:"1000",
      doctorId: 1,
      createdAt: "2024-04-15",
      updatedAt: "2024-04-15",
    },
    {
      historyId: 8,
      patientId: 2,
      medicationId: "1007",
      symptomsId: "6789",
      diagnosisId:"4567",
      treatmentId:"8765",
      visitedDate: "2024-04-15",
      resultId:"1000",
      doctorId: 1,
      createdAt: "2024-04-15",
      updatedAt: "2024-04-15",
    },
    {
      historyId: 9,
      patientId: 2,
      medicationId: "1008",
      symptomsId: "6789",
      diagnosisId:"4567",
      treatmentId:"8765",
      visitedDate: "2024-04-15",
      resultId:"1000",
      doctorId: 1,
      createdAt: "2024-04-15",
      updatedAt: "2024-04-15",
    },
    {
      historyId: 10,
      patientId: 2,
      medicationId: "1009",
      symptomsId: "6789",
      diagnosisId:"",
      treatmentId:"",
      visitedDate: "2024-05-15",
      resultId:"",
      doctorId: 1,
      createdAt: "2024-04-15",
      updatedAt: "2024-04-15",

    },
    {
      historyId: 11,
      patientId: 2,
      medicationId: "10010",
      symptomsId: "1234",
      diagnosisId:"4567",
      treatmentId:"3210",
      resultId:"1001",
      visitedDate: "2025-03-16",
      doctorId: 2,
      createdAt: "2025-03-16",
      updatedAt: "2025-03-16",
    },
    {
      historyId: 2,
      patientId: 2,
      medicationId: "10011",
      symptomsId: "1234",
      diagnosisId:"4567",
      treatmentId:"3210",
      resultId:"1001",
      visitedDate: "2025-03-16",
      doctorId: 2,
      createdAt: "2025-03-16",
      updatedAt: "2025-03-16",
    },
    {
      historyId: 2,
      patientId: 3,
      medicationId: "1002",
      symptomsId: "1234",
      diagnosisId:"4567",
      treatmentId:"3210",
      resultId:"1001",
      visitedDate: "2025-03-16",
      doctorId: 2,
      createdAt: "2025-03-16",
      updatedAt: "2025-03-16",
},
    {
      historyId: 2,
      patientId: 3,
      medicationId: "1008",
      symptomsId: "1234",
      diagnosisId:"4567",
      treatmentId:"3210",
      resultId:"1001",
      visitedDate: "2025-03-16",
      doctorId: 2,
      createdAt: "2025-03-16",
      updatedAt: "2025-03-16",
},
    {
      historyId: 2,
      patientId: 3,
      medicationId: "10011",
      symptomsId: "1234",
      diagnosisId:"4567",
      treatmentId:"3210",
      resultId:"1001",
      visitedDate: "2025-03-16",
      doctorId: 2,
      createdAt: "2025-03-16",
      updatedAt: "2025-03-16",
},
    {
      historyId: 2,
      patientId: 3,
      medicationId: "10012",
      symptomsId: "1234",
      diagnosisId:"4567",
      treatmentId:"3210",
      resultId:"1001",
      visitedDate: "2025-03-16",
      doctorId: 2,
      createdAt: "2025-03-16",
      updatedAt: "2025-03-16",
},
    {
      historyId: 2,
      patientId: 3,
      medicationId: "10013",
      symptomsId: "1234",
      diagnosisId:"4567",
      treatmentId:"3210",
      resultId:"1001",
      visitedDate: "2025-03-16",
      doctorId: 2,
      createdAt: "2025-03-16",
      updatedAt: "2025-03-16",
},
    {
      historyId: 2,
      patientId: 3,
      medicationId: "10014",
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
      medicationId: "1001",
      name: "Dicylomine",
      dosage: "10mg",
      prescribedFor: ["Irritable Bowel Syndrome"],
      createdAt: "2025-04-10",
      updatedAt: "2025-04-10"
    },
    {
      medicationId: "1002",
      name: "Loperamide",
      dosage: "2mg",
      prescribedFor: ["Irritable Bowel Syndrome", "Gastroenteritis"],
      createdAt: "2025-04-12",
      updatedAt: "2025-04-12"
    },
    {
      medicationId: "1003",
      name: "Psyllium Husk",
      dosage: "5g",
      prescribedFor: ["Irritable Bowel Syndrome"],
      prescribedByDoctorId: 5,
      createdAt: "2025-04-08",
      updatedAt: "2025-04-08"
    },
    {
      medicationId: "1004",
      name: "Probiotic Supplement",
      dosage: "5g",
      prescribedFor: ["Irritable Bowel Syndrome", "Gastroenteritis"],
      prescribedByDoctorId: 5,
      createdAt: "2025-04-08",
      updatedAt: "2025-04-08"
    },
    {
      medicationId: "1005",
      name: "Omeprazole",
      dosage: "20mg",
      prescribedFor: ["Irritable Bowel Syndrome"],
      prescribedByDoctorId: 5,
      createdAt: "2025-04-08",
      updatedAt: "2025-04-08"
    },
    {
      medicationId: "1006",
      name: "Ceftriaxone",
      dosage: "1g",
      prescribedFor: ["Irritable Bowel Syndrome"],
      prescribedByDoctorId: 5,
      createdAt: "2025-04-08",
      updatedAt: "2025-04-08"
    },
    {
      medicationId: "1007",
      name: "Metronidazole",
      dosage: "500mg",
      prescribedFor: ["Irritable Bowel Syndrome"],
      prescribedByDoctorId: 5,
      createdAt: "2025-04-08",
      updatedAt: "2025-04-08"
    },
    {
      medicationId: "1008",
      name: "Paracetamol",
      dosage: "500mg",
      prescribedFor: ["Irritable Bowel Syndrome, Acute Appendicitis"],
      prescribedByDoctorId: 5,
      createdAt: "2025-04-08",
      updatedAt: "2025-04-08"
    },
    {
      medicationId: "1009",
      name: "Ondansetron",
      dosage: "4mg",
      prescribedFor: ["Irritable Bowel Syndrome, Acute Appendicitis"],
      prescribedByDoctorId: 5,
      createdAt: "2025-04-08",
      updatedAt: "2025-04-08"
    },
    {
      medicationId: "10010",
      name: "Pantoprazole",
      dosage: "500mg",
      prescribedFor: ["Irritable Bowel Syndrome", "Appendicitis"],
      prescribedByDoctorId: 5,
      createdAt: "2025-04-08",
      updatedAt: "2025-04-08"
    },
    {
      medicationId: "10011",
      name: "Lactated Ringer's Solution",
      dosage: "1000ml",
      prescribedFor: ["Irritable Bowel Syndrome"],
      prescribedByDoctorId: 5,
      createdAt: "2025-04-08",
      updatedAt: "2025-04-08"
    },
    {
      medicationId: "10012",
      name: "Potassium Chloride",
      dosage: "20mEq",
      prescribedFor: ["Irritable Bowel Syndrome"],
      prescribedByDoctorId: 5,
      createdAt: "2025-04-08",
      updatedAt: "2025-04-08"
    },
    {
      medicationId: "10013",
      name: "Ondasetron",
      dosage: "4mg",
      prescribedFor: ["Irritable Bowel Syndrome"],
      prescribedByDoctorId: 5,
      createdAt: "2025-04-08",
      updatedAt: "2025-04-08"
    },
    {
      medicationId: "10014",
      name: "Lactobacillus Rhamnosus GG Culturelle",
      dosage: "500mg",
      prescribedFor: ["Irritable Bowel Syndrome"],
      prescribedByDoctorId: 5,
      createdAt: "2025-04-08",
      updatedAt: "2025-04-08"
    },  
  ],

  symptoms: [
    {
      id: "2001",
      name: "Abdominal Pain or cramping",
      description: "Discomfort or aching in the abdomen, often relieved by passing stool",
      severity: "Varies",
      common_causes: ["Altered gut motility, stress, diet triggers"]
    },
    {
      id: "2002",
      name: "Bloating",
      description: "Sensation of fullness or gas in the abdomen.",
      severity: "Varies",
      common_causes: ["Excess gas, slow digestion, bacterial overgrowth."]
    },
    {
      id: "2003",
      name: "Diarrhea",
      description: "Loose or watery stools, often urgent.",
      severity: "Varies",
      common_causes: ["Rapid intestinal transit, certain foods, stress."]
    },
    {
      id: "2004",
      name: "Constipation",
      description: "Hard, dry, and infrequent stools.",
      severity: "Varies",
      common_causes: ["Slow intestinal movement, lack of fiber, dehydration."]
    },
    {
      id: "2005",
      name: "Mucus in stool",
      description: "Presence of whitish mucus in bowel movements.",
      severity: "Varies",
      common_causes: ["Gut irritation, intestinal inflammation."]
    },
    {
      id: "2006",
      name: "Alternating bowel habits",
      description: "Alternating episodes of diarrhea and constipation",
      severity: "Varies",
      common_causes: ["Disrupted bowel motility, stress, poor gut regulation."]
    },
    {
      id: "2007",
      name: "Vomiting",
      description: "Forceful emptying of stomach contents.",
      severity: "Varies",
      common_causes: ["Gastrointestinal infection or toxin exposure."]
    },
    {
      id: "2008",
      name: "Fever",
      description: "Elevated body temperature.",
      severity: "Varies",
      common_causes: ["Immune response to infection."]
    },
    {
      id: "2009",
      name: "Diarrhea",
      description: "Loose or watery stools, often urgent.",
      severity: "Varies",
      common_causes: ["Rapid intestinal transit, certain foods, stress."]
    },
    {
      id: "20010",
      name: "Abdominal pain in RUQ",
      description: "Pain starting near navel and shifting to right lower abdomen.",
      severity: "Varies",
      common_causes: ["Obstruction of appendix (e.g., fecalith), infection, lymphoid hyperplasia."]
    },
    {
      id: "20011",
      name: "Nausea",
      description: "Feeling sick with urge to vomit.",
      severity: "Varies",
      common_causes: ["Inflammation of appendix, peritoneal irritation."]
    },
    {
      id: "20012",
      name: "Loss of Appetite",
      description: "Reduced or no desire to eat.",
      severity: "Varies",
      common_causes: ["Systemic inflammation, abdominal pain."]
    },
    {
      id: "20013",
      name: "Rebound Tenderness",
      description: "Pain upon sudden release of pressure on the abdomen.",
      severity: "Varies",
      common_causes: ["Peritoneal irritation caused by inflammation."]
    }
  ],
  diagnosis: [
    {
      id: "3001",
      name: "Irritable Bowel Syndrome",
      description: "A chronic functional gastrointestinal disorder characterized by abdominal pain, bloating, and altered bowel habits     (diarrhea, constipation, or both), without any identifiable structural cause. IBS is often triggered by stress, certain foods, or hormonal changes.",
      symptoms: ["Abdominal pain or cramping (relieved by defecation)", "Bloating and gas", "Diarrhea", " constipation", "Mucus in stool", "No fever or weight loss (if present, consider another cause)"],
    },
    {
      id: "3002",
      name: "Gastroenteritis",
      description: "An inflammation of the stomach and intestines, commonly caused by viral or bacterial infections. Symptoms include diarrhea, vomiting, abdominal cramps, and sometimes fever. It is often spread through contaminated food or water.",
      symptoms: ["Sudden onset of diarrhea (watery or loose stools)", "Vomiting", "Abdominal cramps", "Mild Fever", "Signs of dehydration (dry mouth, low urine output, fatigue)"],

    },
    {
      id: "3003",
      name: "Acute Appendicitis",
      description: "A sudden inflammation of the appendix, usually caused by a blockage. It presents with right lower abdominal pain, fever, nausea, and vomiting. If untreated, the appendix can rupture, leading to serious complications like peritonitis.",
      symptoms: ["Abdominal pain (starts near navel, moves to RLQ)", "Nausea and vomiting", "Loss of appetite", "Low-grade fever", "Rebound tenderness and guarding"],

    }
  ],
  treatment: [
    {
      id: "4001",
      name: "Antispasmodic-Dicyclomine",
      description: "Relieves abdominal cramping by relaxing gut muscles.",
      conditions_treated: ["IBS"],
      method: "Oral administration"
    },
    {
      id: "4002",
      name: "Antidiarrheal-Loperamide",
      description: "Slows bowel movement to control diarrhea.",
      conditions_treated: ["IBS, Gastroenteritis"],
      method: "Oral administration"
    },
    {
      id: "4003",
      name: "Laxative or Bulk-Forming Agent-Psyllium Husk",
      description: "Regulates bowel movements (adds bulk).",
      conditions_treated: ["IBS"],
      method: "Oral administration"
 },
    {
      id: "4004",
      name: "Probiotics",
      description: "Supports gut flora balance.",
      conditions_treated: ["IBS, Gastroenteritis"],
      method: "Oral administration"
 },
    {
      id: "4005",
      name: "Probiotics-Lactobacillus GG",
      description: "Restores gut flora after diarrhea or antibiotics.",
      conditions_treated: ["Gastroenteritis"],
      method: "Oral administration"
 },
    {
      id: "4006",
      name: "Proton Pump Inhibitors-Omeprazole",
      description: "Reduces stomach acid, relieves acid reflux.",
      conditions_treated: ["IBS with GERD"],
      method: "Oral administration"
 },
    {
      id: "4007",
      name: "Proton Pump Inhibitors-Pantropazole",
      description: "Gastric protection in stress or post-op care.",
      conditions_treated: ["IGastroenteritis, Appendicitis"],
      method: "IV administration"
 },
    {
      id: "4008",
      name: "IV Fluids and Electrolyte Replacement-Lactated Ringer's Solution",
      description: "Rehydration and electrolyte support",
      conditions_treated: ["Gastroenteritis, Appendicitis"],
      method: "IV administration"
 },
    {
      id: "4009",
      name: "IV Fluids and Electrolyte Replacement-Potassium Chloride",
      description: "Replaces potassium lost via diarrhea or vomiting.",
      conditions_treated: ["Electrolyte Imbalance"],
      method: "IV administration"
},
    {
      id: "40010",
      name: "Anti-emetic-Ondansetron",
      description: "	Prevents/treats nausea and vomiting.",
      conditions_treated: ["IGastroenteritis, Appendicitis"],
      method: "Oral administration"
 },
    {
      id: "40011",
      name: "Analgesic-Paracetamol",
      description: "Relieves mild pain and fever.",
      conditions_treated: ["All conditions (as needed)"],
      method: "Oral administration"
 },
    {
      id: "40012",
      name: "Antibiotics-Ceftriaxone",
      description: "Broad-spectrum antibiotic for infection prevention).",
      conditions_treated: ["Appendicitis (post-op)"],
      method: "IV administration"
 },
    {
      id: "40013",
      name: "Antibiotics-Metronidazole",
      description: "Targets anaerobic bacteria in intra-abdominal infections.",
      conditions_treated: ["IBS"],
      method: "Appendicitis (post-op)"
    }
  ],
  procedures: [
    {
      procedureId: 1,
      description: "Physical Examination",
      cost: 15000,
      date: "2025-03-17",
      createdAt: "2025-03-17",
      updatedAt: "2025-03-17",
    },
    {
      procedureId: 2,
      description: "Stool Tests",
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
    {
      resultId: "1002",
      patientId: 2,
      procedureId: "1123",
      result: "Bone fractures",
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
      username: "jude_juros",
      password: "secure123",
      lastLogin: "2025-03-27"
    },
    {
      loginId: 2,
      patientId: 2,
      userType: 2,
      username: "brice_leuterio",
      password: "secure456",
      lastLogin: "2025-03-28"
    },
    {
      loginId: 3,
      nurseId: 1,
      userType: 1,
      username: "michelle_grijaldo",
      password: "nurse123",
      lastLogin: "2025-03-27"
    },
    {
      loginId: 4,
      nurseId: 2,
      userType: 1,
      username: "kristine_legatam",
      password: "nurse456",
      lastLogin: "2025-03-28"
    },
    {
      loginId: 5,
      patientId: 3,
      userType: 2,
      username: "alexandra_labansauan",
      password: "secure456",
      lastLogin: "2025-03-28"
    },
  ],

}

export const storeContext = createContext(STORE_CONTEXT);
