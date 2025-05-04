import React, { useState } from "react";



const CardTable = ({
    title,
    headers = [],
    data = [],
    color,
    searchbar = false,
    daterange =false,

}) => {
    const [searchResults, setSearchResults] = useState(data)
    const handleDateSearch = (formData)=>{
        const start = formData.get("datestart");
        const end = formData.get("dateend");
        console.log(start,end)
    }
    const handleSearch = ()=>{

    }

 
    return (
        <>
            <div
                className={
                    "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                    (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
                }
            >
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3
                                className={
                                    "font-semibold text-lg capitalize" +
                                    (color === "light" ? "text-blueGray-700" : "text-white")
                                }
                            >
                                {title}
                            </h3>
                        </div>
                        {
                            searchbar ?
                                <>
                                    <form action={handleSearch} className="flex flex-row flex-wrap items-center lg:ml-auto mr-3">
                                        <div className="relative flex w-full flex-wrap items-stretch">
                                            <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                                                <i className="fas fa-search"></i>
                                            </span>
                                            <input
                                                type="text"
                                                name="query"
                                                placeholder="Search here..."
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                                            />
                                        </div>
                                    </form>
                                </>
                                : ''
                        }
                        {
                            daterange ?
                                <>
                                    <form action={handleDateSearch} className="flex flex-row  items-center lg:ml-auto mr-3">
                                        <div className="relative flex w-full flex-wrap items-stretch gap-3">
                                            
                                            <span className="flex w-[40%] items-center gap-2">
                                                From
                                            <input
                                                type="date"
                                                name="datestart"
                                                
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring"
                                            />
                                            </span>
                                            -
                                            <span className="flex w-[40%] items-center gap-2">
                                                Until
                                                <input
                                                type="date"
                                                name="dateend"
                                                placeholder=""
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring "
                                            />
                                            </span>
                                           <button type="submit" className="bg-white text-amber-700">Search</button>
                                        </div>
                                    </form>
                                </>
                                : ''
                        }

                    </div>
                </div>

                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}

                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                {
                                    headers.map(name => {
                                        return (<th
                                            className={
                                                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                                (color === "light"
                                                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                            }
                                        >
                                            {name}
                                        </th>)
                                    })
                                }


                            </tr>
                        </thead>
                        <tbody>
                            {
                                searchResults?.map((item) => {
                                    return (
                                        Object.entries(item).map(([key, value]) => {
                                            return (
                                                <tr key={key}>

                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        {value}
                                                    </td>

                                                </tr>
                                            )

                                        })
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default CardTable
