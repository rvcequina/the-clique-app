import React, { useEffect, useState } from "react";
import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"


import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


const CardTable = ({
    title,
    headers = [],
    data = [],
    color,
    searchbar = false,
    daterange = false,

}) => {
    const [searchResults, setSearchResults] = useState()
    const [date, setDate] = useState({

    })
  const [isVisible, setIsVisible] = useState(false)

    const handleDateSearch = () => {
        const start = date.from;
        const end = date.to;

        console.log(start, end)
    }

    const handleClick = () => {
        setIsVisible(prevState => !prevState);
      };

    useEffect(() => {
        setSearchResults(data)
    }, [data])


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
                                    <form className="flex flex-row flex-wrap items-center lg:ml-auto mr-3">
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
                                    <form className={cn("grid gap-2 text-gray-500 md:flex")}>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    id="date"
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[300px] justify-center text-left font-normal  bg-white",
                                                        !date && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon />
                                                    {date?.from ? (
                                                        date.to ? (
                                                            <>
                                                                {format(date.from, "LLL dd, y")} -{" "}
                                                                {format(date.to, "LLL dd, y")}
                                                            </>
                                                        ) : (
                                                            format(date.from, "LLL dd, y")
                                                        )
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    initialFocus
                                                    mode="range"
                                                    defaultMonth={date?.from}
                                                    selected={date}
                                                    onSelect={setDate}
                                                    numberOfMonths={2}

                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <Button type="submit" onClick={() => handleDateSearch()} className={'bg-white text-gray-500'}>search</Button>
                                    </form>
                                </>
                                : ''
                        }

                    </div>
                </div>

                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    {
                        searchResults?.length > 0 ?
                            <>
                                <table className="items-center w-full bg-transparent border-collapse">
                                    <thead>
                                        <tr>
                                            {
                                                headers.map((name, idx) => {
                                                    return (<th
                                                        key={idx}
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
                                            searchResults.map((item, idx) => {
                                                return (
                                                    <tr key={idx}>
                                                        {

                                                            Object.entries(item).map(([key, value]) => {
                                                                return (


                                                                    <td key={key} className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                                        {value}
                                                                    </td>


                                                                )

                                                            })

                                                        }
                                                        <td onClick={() => handleClick()} className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            <div className="flex gap-4 items-center cursor-pointer w-max p-2 px-4 hover:bg-white hover:text-lightBlue-600">
                                                                <i className="fas fa-eye"></i>
                                                                View
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }



                                    </tbody>
                                </table>
                            </>
                            :
                            <>
                                <h2 className="w-full h-[20vh] text-xl capitalize flex justify-center items-center bg-transparent">
                                    no current data</h2>
                            </>
                    }
                </div>
            </div>
            <ViewPatient showPatient={isVisible} isVisible={handleClick} >
                <PDFViewer style={{ width: '100%', height: '100%', transform: 'scale(1)' }}>
                    <MyDocument test="RYAN" />
                </PDFViewer>
            </ViewPatient>
        </>
    );
}

export default CardTable
