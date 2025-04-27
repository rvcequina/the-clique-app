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

    const getTotalPatients =  () => {

        return store.patients.length
    }

    const getTotalAdmitted = () => {
        const admitted = store.patients.filter(item => item.isAdmitted == true)
        return admitted.length
    }

    const getCurrentUser = () => {
        return currentUser
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

    const getPatientById = async (id) => {
        const userInfo = await store.users.find(item => item.patientId == id)
        const patientInfo = await store.patients.find(item => item.patientId == id)
        const stationDetails = await getStationById(patientInfo.stationId)
        const doctorDetails = await getDoctorById(patientInfo.doctorId)
        if (!userInfo && !patientInfo) {
            return
        }
        if (!patientInfo.isAdmitted) {
            return
        }
        let patientDetails = {
            patientId: id,
            firstName: patientInfo.firstName ? patientInfo.firstName : '',
            lastName: patientInfo.lastName ? patientInfo.lastName : '',
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
            doctorId: {
                doctorId: doctorDetails.doctorId ? patientInfo.doctorId : '',
                fullName: doctorDetails.fullName ? patientInfo.fullName : '',
                specialty: doctorDetails.specialty ? patientInfo.specialty : '',
                contactNumber: doctorDetails.contactNumber ? patientInfo.contactNumber : '',
            },
            isAdmitted: patientInfo.isAdmitted,
        }
        return patientDetails
    }

    const getDoctorById = async (id) => {
        const docotrDetails = await store.doctors.find(item => item.doctorId == id)
        return docotrDetails
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
                getPatientById
            }}
        >
            {children}
        </storeContext.Provider>
    );
};

export default StoreProvider;
