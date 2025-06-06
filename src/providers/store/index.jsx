/* eslint-disable no-unused-vars */
import { useState, useEffect, useMemo } from "react";
import { storeContext, STORE_CONTEXT } from "@/providers/store/context.jsx";
import axios from "axios";

const StoreProvider = ({ children }) => {
    const [store, setStore] = useState(STORE_CONTEXT);
    const [currentUser, setCurrentUser] = useState()

    const patientListUrl = 'https://dummyjson.com/c/aa70-048b-49e3-9016'

    const getTotalNurses = () => {
        return store.nurses.length
    }

    const getTotalPatients = () => {

        return store.patients.length
    }

    const getTotalAdmitted = () => {
        const admitted = store.patients.filter(item => item.isAdmitted == true)
        return admitted.length
    }

    const getMedicationById = (id = undefined) => {
        const filteredData = id ? store.medications.filter(item => item.medicationId == id) : store.medications

       
        let newList = filteredData.map(item => ({
            medicationId: item.medicationId,
            name: item.name,
            dosage: item.dosage,
            prescribedFor: item.prescribedFor.length > 1 ? item.prescribedFor.join(", ") : item.prescribedFor[0],
            entry: item.createdAt
        }));


        return newList
    }

    const getCurrentUser = () => {
        const getUser = localStorage.getItem('user');
        let user = currentUser ? currentUser : JSON.parse(getUser)
        return user
    }

    const getNurseById = async (id) => {
        const userInfo = await store.users.find(item => item.nurseId == id)
        const nurseInfo = await store.nurses.find(item => item.nurseId == id)
        const stationDetails = await getStationById(nurseInfo.assignedStationId)

        if (!nurseInfo && !stationDetails) {
            return
        }
        let nurseDetails = {
            assignedStation: {
                stationId: stationDetails.stationId ? stationDetails.stationId : '',
                stationName: stationDetails.stationName ? stationDetails.stationName : '',
                location: stationDetails.location ? stationDetails.location : '',
            },
            contactNumber: nurseInfo.contactNumber ? nurseInfo.contactNumber : '',
            firstName: nurseInfo.firstName ? nurseInfo.firstName : '',
            lastName: nurseInfo.lastName ? nurseInfo.lastName : '',
            nurseId: nurseInfo.nurseId ? nurseInfo.nurseId : '',
            loginId: userInfo.loginId ? userInfo.loginId : '',
            userType: userInfo.userType ? userInfo.userType : '',
            username: userInfo.username ? userInfo.username : ''
        }
        return nurseDetails
    }

    const getStationById = async (id) => {
        const stationDetails = await store.stations.find(item => item.stationId == id)
        return stationDetails
    }

    const getPatientById = async (id, type) => {

        const userInfo = await store.users.find(item => item.patientId == id)
        const patientInfo = await store.patients.find(item => item.patientId == id)
        const stationDetails = await getStationById(patientInfo.stationId)
        const doctorDetails = await getDoctorById(patientInfo.doctorId)

        if (!userInfo && !patientInfo) {
            return
        }
        if (!patientInfo.isAdmitted && type == 2) {
            return
        }

        let patientDetails = {
            patientId: id,
            firstName: patientInfo.firstName ? patientInfo.firstName : '',
            lastName: patientInfo.lastName ? patientInfo.lastName : '',
            email: patientInfo.email ? patientInfo.email : '',
            dob: patientInfo.dob ? patientInfo.dob : '',
            gender: patientInfo.gender ? patientInfo.gender : '',
            contactNumber: patientInfo.contactNumber ? patientInfo.contactNumber : '',
            address: patientInfo.address ? patientInfo.address : '',
            status: patientInfo.status ? patientInfo.status : '',
            loginId: userInfo.loginId ? userInfo.loginId : '',
            userType: userInfo.userType ? userInfo.userType : '',
            username: userInfo.username ? userInfo.username : '',
            assignedStation: {
                stationId: stationDetails.stationId ? stationDetails.stationId : '',
                stationName: stationDetails.stationName ? stationDetails.stationName : '',
                location: stationDetails.location ? stationDetails.location : '',
            },
            doctor: {
                doctorId: doctorDetails.doctorId ? doctorDetails.doctorId : '',
                fullName: doctorDetails.fullName ? doctorDetails.fullName : '',
                specialty: doctorDetails.specialty ? doctorDetails.specialty : '',
                contactNumber: doctorDetails.contactNumber ? doctorDetails.contactNumber : '',
            },
            isAdmitted: patientInfo.isAdmitted,
        }

         localStorage.setItem("patient", JSON.stringify(patientDetails))

        return patientDetails
    }

    const getDoctorById = async (id) => {
        const docotrDetails = await store.doctors.find(item => item.doctorId == id)
        return docotrDetails
    }

    const getPatientMedicationById = async (id) => {


        const patientHistory = await store.patientHistory.filter(item => item.patientId == id)
        let medications
        let medicationHistory = []
        let patientHistoryDetails = {
            id: '',
            name: '',
            dosage: '',
            frequency: '',
            visitedDate: ''
        }
        patientHistory.map(data => {

            medications = store.medications.find(item => item.medicationId == data.medicationId)
            if (!data.medicationId) {
                return
            }
            patientHistoryDetails = {
                id: data.medicationId,
                name: medications.name,
                dosage: medications.dosage,
                visitedDate: data.visitedDate
            }
            medicationHistory.push(patientHistoryDetails)

        })

        return medicationHistory

    }

    const getPatientResultById = async (id) => {


        const patientResults = await store.labResults.filter(item => item.patientId == id)
        let laboratory
        let laboratoryProcedures = []

        let patientResultDetails = {
            id: '',
            name: '',
            description: '',
            result: '',
            testDate: '',

        }
        patientResults.map(data => {

            laboratory = store.laboratoryProcedures.find(item => item.procedureId == data.procedureId)
            if (!data.resultId) {
                return
            }
            patientResultDetails = {
                id: data.procedureId,
                name: laboratory.name,
                description: laboratory.description,
                result: data.result,
                testDate: data.testDate,
            }
            laboratoryProcedures.push(patientResultDetails)
        })
        return laboratoryProcedures
    }

    const getHistoryById = (id) => {
        const patientHistory = store.patientHistory.filter(item => item.patientId == id)
        return patientHistory
        // patientStats.encounter
        // patientStats.results
        // patientStats.diagnosis
    }

    const userLogout = () => {

        
        setCurrentUser()
        localStorage.removeItem("user");

    }


    return (
        <storeContext.Provider
            value={{
                store,
                setStore,
                currentUser,
                setCurrentUser,
                getTotalNurses,
                getTotalPatients,
                getTotalAdmitted,
                getCurrentUser,
                getNurseById,
                getPatientById,
                getPatientMedicationById,
                getPatientResultById,
                getHistoryById,
                userLogout,
                getMedicationById
            }}
        >
            {children}
        </storeContext.Provider>
    );
};

export default StoreProvider;
