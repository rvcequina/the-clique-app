import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import CardSettings from "@/components/Cards/CardSettings"
const CardsProfile = ({ user }) => {
    return (
        <>
            {
                user ? <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                    <div className="px-6">


                        <div className="bg-white overflow-hidden px-2  ">
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    User Profile
                                </h3>
                            </div>
                            <div className="flex flex-wrap justify-center " >
                                <div className="w-1/2 px-4 flex justify-start">

                                    <div className="relative cursor-pointer text-md text-white hover:text-blue-400">
                                        <Avatar className={'w-[8rem] h-[8rem] shadow-md'}>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>{user?.firstName?.split("")[0]} {user?.lastName?.split("")[0]}</AvatarFallback>
                                        </Avatar>
                                        <div className="absolute w-8 h-8 flex justify-center items-center right-1 bottom-1 text-inherit rounded-full bg-gray-400"> <i className="fas fa-edit  pl-1" /></div>
                                    </div>
                                </div>
                                <div className="w-1/2 flex justify-end">
                                    <CardSettings>
                                        <Button variant="ghost">
                                            <div className="px-4 py-2 rounded flex items-center text-white bg-sky-600 hover:bg-sky-400 shadow-lg shadow-cyan-500/100">
                                                <i className="fas fa-edit " />
                                                <div > Edit</div>
                                            </div>
                                        </Button>
                                    </CardSettings>

                                </div>
                            </div>
                            <div className=" flex gap-2 w-full border-t border-gray-200 px-4 py-5 sm:p-0">
                                <div className="grid w-1/3  items-center gap-1.5">
                                    <Label htmlFor="fname">First Name</Label>
                                    <Input type="text" id="fname" value={user?.firstName} disabled />
                                </div>
                                <div className="grid w-1/3  items-center gap-1.5">
                                    <Label htmlFor="lname">Last Name</Label>
                                    <Input type="text" id="lname" value={user?.lastName} disabled />
                                </div>
                                <div className="grid w-1/3  items-center gap-1.5">
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="email" id="email" value={user?.email} disabled />
                                </div>
                            </div>
                            <div className=" flex gap-2 w-full border-t border-gray-200 px-4 py-5 sm:p-0">
                                <div className="grid w-2/3  items-center gap-1.5">
                                    <Label htmlFor="address">Address</Label>
                                    <Input type="text" id="address" value={user?.address} disabled />
                                </div>
                                <div className="grid w-1/3  items-center gap-1.5">
                                    <Label htmlFor="dob">Date of Birth</Label>
                                    <Input type="text" id="dob" value={user?.dob} disabled />
                                </div>
                            </div>
                            <div className=" flex gap-2 w-full border-t border-gray-200 px-4 py-5 sm:p-0">
                                <div className="grid w-1/3  items-center gap-1.5">
                                    <Label htmlFor="contact">Contact Number</Label>
                                    <Input type="text" id="contact" value={user?.contactNumber} disabled />
                                </div>
                                <div className="grid w-1/3  items-center gap-1.5">
                                    <Label htmlFor="gender">Gender</Label>
                                    <Input type="text" id="gender" value={user?.gender} disabled />
                                </div>
                                <div className="grid w-1/3  items-center gap-1.5">
                                    <Label htmlFor="status">Status</Label>
                                    <Input type="text" id="status" value={user.isAdmitted ? 'Active' : 'Discharged'} disabled />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-15"></div>
                </div> : ''
            }

        </>
    )
}
export default CardsProfile