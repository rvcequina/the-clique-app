
import asset1 from '@/assets/img/team-1-800x800.jpg'
import asset2 from '@/assets/img/team-2-800x800.jpg'
import asset3 from '@/assets/img/team-3-800x800.jpg'
import asset4 from '@/assets/img/team-4-470x470.png'
import HEROBG from "@/assets/img/hero-bg.jpg";
import missionpic from "@/assets/img/mission.jpg";
import visionpic from "@/assets/img/vission.jpg";
import Navbar from '@/components/Navbars/Navbar';
import Footer from '@/components/Footers/Footer';
import Dialog from '@/components/Alerts/Dialog';
import { useState } from 'react';



const Home = () => {
    const [isDisabled, setIsDisabled] = useState(true)
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    const handleChange = (val, target) => {
        if (target == 'name') {
            setFullName(val)
        }
        if (target == 'email') {
            setEmail(val)
        }
        if (target == 'message') {
            setMessage(val)
        }
        if(fullName && email&&message){
            setIsDisabled(false)
        }
        else{
            setIsDisabled(true)
        }

    }

    return (
        <>
            <Navbar />
            <main>
                <div className="relative pt-[6rem] pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: `url(${HEROBG})`,
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-75 bg-black"
                        ></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div >
                                    <h1 className="text-white font-semibold text-5xl">
                                        Healing from Within:<br /> Your Journey to Digestive Wellness
                                        Starts Here
                                    </h1>
                                    <p className="mt-4 text-lg text-blueGray-200"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                        style={{ transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-blueGray-200 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </div>

                <section id="services" className="pb-20 bg-blueGray-200 -mt-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                            <i className="fas fa-award"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            Real-Time Health Monitoring
                                        </h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Users can keep track of their health history and vital
                                            signs in real-time, ensuring up-to-date information for
                                            better care
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                            <i className="fas fa-retweet"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            {" "}
                                            Secure Access and Data Management{" "}
                                        </h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            We provide a secure login system that ensures both medical
                                            personnel and patients can safely access their data. This
                                            includes a patient portal for verifying appointments,
                                            prescriptions, and test results, as well as a medical
                                            dashboard for comprehensive control over patient
                                            information, evaluations, and therapies.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                            <i className="fas fa-fingerprint"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            User Experience and Security
                                        </h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            The system is designed for ease of use with
                                            straightforward navigation, and it prioritizes data
                                            security through role-based access and encryption to
                                            protect sensitive information.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-user-friends text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Our Vision
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    To become innovative nursing professionals who combine
                                    technology and healthcare, developing digital solutions to
                                    improve patient education, health promotion, and nursing
                                    practice.
                                </p>

                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="..."
                                        src={visionpic}
                                        className="w-full align-middle rounded-t-lg"
                                    />
                                    <blockquote className="relative p-8 mb-4">
                                        <svg
                                            preserveAspectRatio="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 583 95"
                                            className="absolute left-0 w-full block h-95-px -top-94-px"
                                        >
                                            <polygon
                                                points="-30,95 583,95 583,65"
                                                className="text-lightBlue-500 fill-current"
                                            ></polygon>
                                        </svg>
                                        <h4 className="text-xl font-bold text-white">
                                            Innovating Nursing, Empowering Lives: Bridging Technology
                                            and Healthcare for a Healthier Tomorrow.
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Combining compassion with innovation to redefine nursing
                                            practices.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative py-20">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                        style={{ transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-white fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                                <img
                                    alt="..."
                                    className="max-w-full rounded-lg shadow-lg"
                                    src={missionpic}
                                />
                            </div>
                            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                                <div className="md:pr-12">
                                    <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                                        <i className="fas fa-rocket text-xl"></i>
                                    </div>
                                    <h3 className="text-3xl font-semibold">Our Mission </h3>
                                    <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                        Our objective is to apply our nursing and informatics
                                        expertise to create accessible, informative, and
                                        user-friendly web-based tools that enable individuals and
                                        communities to make educated health decisions. We want to
                                        improve the delivery of health education through creative
                                        cooperation, evidence-based material, and responsible use of
                                        digital technology.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="aboutus" className="pt-20 pb-48">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center text-center mb-24">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold">
                                    We aim to create a patient information system
                                </h2>
                                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                                    tailored specifically for gastroenterology cases, designed to
                                    bridge the gap between patients and healthcare providers. By
                                    offering an intuitive platform, we strive to empower patients
                                    with easy-to-understand, credible information about their
                                    conditions, treatments, and care plans, while also
                                    streamlining the process for gastroenterologists to access and
                                    manage patient data efficiently. This system will include
                                    features like symptom tracking, educational resources, and
                                    secure communication tools to enhance patient-provider
                                    collaboration, ultimately improving the quality of care and
                                    fostering a more informed and engaged patient community. Our
                                    goal is to make managing gastrointestinal health more
                                    accessible, personalized, and effective for everyone involved.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={asset1}
                                        className="shadow-lg rounded-full mx-auto max-w-120-px"
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">Ryan Tompson</h5>
                                        <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                            Web Developer
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-twitter"></i>
                                            </button>
                                            <button
                                                className="bg-sky-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-facebook-f"></i>
                                            </button>
                                            <button
                                                className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-dribbble"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={asset2}
                                        className="shadow-lg rounded-full mx-auto max-w-120-px"
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">Romina Hadid</h5>
                                        <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                            Marketing Specialist
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-google"></i>
                                            </button>
                                            <button
                                                className="bg-sky-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-facebook-f"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={asset3}
                                        className="shadow-lg rounded-full mx-auto max-w-120-px"
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">Alexa Smith</h5>
                                        <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                            UI/UX Designer
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-google"></i>
                                            </button>
                                            <button
                                                className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-twitter"></i>
                                            </button>
                                            <button
                                                className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-instagram"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={asset4}
                                        className="shadow-lg rounded-full mx-auto max-w-120-px"
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">Jenna Kardi</h5>
                                        <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                            Founder and CEO
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-dribbble"></i>
                                            </button>
                                            <button
                                                className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-google"></i>
                                            </button>
                                            <button
                                                className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-twitter"></i>
                                            </button>
                                            <button
                                                className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-instagram"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pb-20 relative block bg-blueGray-800">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                        style={{ transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-blueGray-800 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold text-white">
                                    Got feedback?
                                </h2>
                                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                                    We value your thoughts and ideas as they help us grow and improve.
                                    Whether you have suggestions, questions, or insights, your feedback matters to us.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-12 justify-center">
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-medal text-xl"></i>
                                </div>
                                <h6 className="text-xl mt-5 font-semibold text-white">
                                    Your Insights
                                </h6>
                                <p className="mt-2 mb-4 text-blueGray-400">
                                    Share your experience and let us know how we can improve.
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-poll text-xl"></i>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Innovative Feedback
                                </h5>
                                <p className="mt-2 mb-4 text-blueGray-400">
                                    Help us innovate and make a positive impact through your insights.
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-lightbulb text-xl"></i>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Growth Together
                                </h5>
                                <p className="mt-2 mb-4 text-blueGray-400">
                                    Your suggestions drive meaningful change and growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                                    <div className="flex-auto p-5 lg:p-10">

                                        <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                                            Complete this form and we will get back to you in 24
                                            hours.
                                        </p>
                                        <form action="">
                                            <div className="relative w-full mb-3 ">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="full-name"
                                                >
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    value={fullName}
                                                    onChange={e => handleChange(e.target.value, 'name')}
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Full Name"
                                                    required
                                                />
                                            </div>

                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="email"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={e => handleChange(e.target.value, 'email')}
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                    placeholder="Email"

                                                />
                                            </div>

                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="message"
                                                >
                                                    Message
                                                </label>
                                                <textarea
                                                    value={message}
                                                    onChange={e => handleChange(e.target.value, 'message')}
                                                    rows="4"
                                                    cols="80"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="Type a message..."
                                                />
                                            </div>
                                            <div className="text-center mt-6">
                                                <Dialog title="Message Sent" message={'Thank you, We will get back at you as soon as possible'}>
                                                    <button
                                                        disabled={isDisabled}
                                                        className={`${isDisabled ? 'bg-gray-400' : 'bg-sky-600 active:bg-blue-600 hover:shadow-lg'} text-white  text-sm font-bold uppercase px-6 py-3 rounded shadow  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}

                                                    >
                                                        Send Message
                                                    </button>
                                                </Dialog>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home