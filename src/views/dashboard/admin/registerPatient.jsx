import { useState, useContext } from 'react'

// import { storeContext } from "@/providers/store/context";

import { useNavigate } from "react-router";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { storeContext } from "@/providers/store/context";
import { toast } from "sonner"

const RegisterNewPatient = () => {
    const { store } = useContext(storeContext);
    const navigate = useNavigate();
    const handleSubmit = (formData) => {
        const { patients, users } = store



        const firstname = formData.get("fname");
        const lastname = formData.get("lname");
        const email = formData.get("email");
        const gender = formData.get("gender");
        const dob = formData.get("dob");
        const contactnumber = formData.get("contact");
        const address = formData.get("address");
        const station = formData.get("station");
        const doctor = formData.get("doctor");


        const checkUser = users.some(item => item.username == `${firstname.split(' ')[0].toLowerCase()}_${lastname.toLowerCase()}`)
        if (checkUser) {
            toast.error("Error Alert", {
                description: "Duplicate Records",
            })
            return
        }

        const now = new Date();
        const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

        const loginDetails = {
            loginId: users.length + 1,
            patientId: patients.length + 1,
            userType: 2,
            username: `${firstname.toLowerCase()}_${lastname.split(' ')[0].toLowerCase()}`,
            password: formattedDate.split('-').join(""),
            lastLogin: ""
        }

        const patientDetails = {
            patientId: patients.length + 1,
            firstName: firstname,
            lastName: lastname,
            dob: dob,
            gender: gender,
            contactNumber: contactnumber,
            address: address,
            email: email,
            stationId: station,
            doctorId: doctor,
            isAdmitted: true,
            createdAt: formattedDate,
            updatedAt: formattedDate,
        }

        patients.push(patientDetails)
        users.push(loginDetails)

        console.log(patients, users)

        toast.success("Registered Successfully", {
            description: `Username : ${patientDetails.firstName}_${patientDetails.lastName} - Temp Password: ${formattedDate.split('-').join("")} `,
        })
        navigate(`/dashboard/admin/patient-list/`)
    }


    return (
        <>
            {

                <>
                    <div className="flex min-h-[60vh]">

                        <div className="w-full bg-white flex flex-col  p-4 z-20 relative">
                            <div className="flex justify-end absolute -top-5 -right-3 z-40">
                                <button onClick={() => navigate(`/dashboard/admin/patient-list/`)}>
                                    <div className="w-8 h-8  hover:text-white hover:bg-sky-300 text-sky-100 bg-sky-900 rounded-full shadow-lg flex justify-center items-center">
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </div>
                                </button>
                            </div>
                            <div className="relative w-full px-4 max-w-full py-2">
                                <h3
                                    className={
                                        "font-semibold text-lg capitalize text-blueGray-700"
                                    }
                                >
                                    Register New Patient
                                </h3>
                            </div>
                            <form action={handleSubmit}>
                                <div className=" flex gap-2 w-full border-t border-gray-200 px-4 py-5 sm:p-0">
                                    <div className="grid w-1/3  items-center gap-1.5">
                                        <Label htmlFor="fname">First Name</Label>
                                        <Input type="text" id="fname" name="fname" required />
                                    </div>
                                    <div className="grid w-1/3  items-center gap-1.5">
                                        <Label htmlFor="lname">Last Name</Label>
                                        <Input type="text" id="lname" name="lname" required />
                                    </div>
                                    <div className="grid w-1/3  items-center gap-1.5">
                                        <Label htmlFor="email">Email</Label>
                                        <Input type="email" id="email" name="email" />
                                    </div>
                                </div>
                                <div className=" flex gap-2 w-full border-t border-gray-200 px-4 py-5 sm:p-0">
                                    <div className="grid w-2/3  items-center gap-1.5">
                                        <Label htmlFor="address">Address</Label>
                                        <Input type="text" id="address" name="address" />
                                    </div>
                                    <div className="grid w-1/3  items-center gap-1.5">
                                        <Label htmlFor="dob">Date of Birth</Label>
                                        <Input type="date" id="dob" name="dob" required />
                                    </div>
                                </div>
                                <div className=" flex gap-2 w-full border-t border-gray-200 px-4 py-5 sm:p-0">
                                    <div className="grid w-1/3  items-center gap-1.5">
                                        <Label htmlFor="contact">Contact Number</Label>
                                        <Input
                                            type="tel"
                                            name="contact"
                                            className="border-black rounded-none    "
                                            placeholder="09123456789"
                                            pattern="[0-9]{4}[0-9]{7}"
                                            required
                                        />
                                    </div>
                                    <div className="grid w-1/3  items-center gap-1.5">
                                        <Label htmlFor="gender">Gender</Label>
                                        <select className={cn(
                                            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                                            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                                            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                                        )} name="gender" id="gender">
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div className="grid w-1/3  items-center gap-1.5">
                                        <Label htmlFor="station">Station</Label>
                                        <select className={cn(
                                            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                                            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                                            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                                        )} name="station" id="station">
                                            {
                                                store.stations.map(item => {
                                                    return <option key={item.stationId} value={item.stationId}>{item.stationName}</option>
                                                })
                                            }


                                        </select>
                                    </div>
                                    <div className="grid w-1/3  items-center gap-1.5">
                                        <Label htmlFor="doctor">Doctor</Label>
                                        <select className={cn(
                                            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                                            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                                            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                                        )} name="doctor" id="doctor">
                                            {
                                                store.doctors.map(item => {
                                                    return <option key={item.doctorId} value={item.doctorId}>{item.fullName}</option>
                                                })
                                            }


                                        </select>
                                    </div>
                                </div>

                                <div className=" flex justify-end w-full pt-4">
                                    <button

                                        className=" w-1/3 md:w-1/4 bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="submit"
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </>

            }
        </>

    )
}
export default RegisterNewPatient;