import { useState } from 'react';

const useSearchPatient = () => {
    const [searchResults, setSearchResults] = useState([]);

    const searchInArray = (array, query) => {
        if (!array || array.length === 0) {
            setSearchResults([]);
            return;
        }
        if (!query || query.trim() === '') {
            // If the query is empty, return all results
            setSearchResults(array);
            return;
        }

        const results = array.filter((item) => {
            const {
              firstName = '',
              lastName = '',
              status = '',
              dob = '',
              assignedStation = {},
              doctorId = {},
              isAdmitted = false,
            } = item;
          
            const stationName = assignedStation?.stationName || '';
            const doctorName = doctorId?.fullName || '';
            const age = dob ? new Date().getFullYear() - new Date(dob).getFullYear() : '';
          
            // Check if the query starts with "discharge"
            if (query.toLowerCase().startsWith("discharge")) {
              return isAdmitted === false; // Filter where isAdmitted === false for "discharge"
            }
                // if (query.length < 3) {
            //     // Partial match for queries less than 4 characters
            //     return (
            //         firstName.toLowerCase().startsWith(query.toLowerCase()) ||
            //         lastName.toLowerCase().startsWith(query.toLowerCase()) ||
            //         isAdmitted == status ||
            //         stationName.toLowerCase().startsWith(query.toLowerCase()) ||
            //         doctorName.toLowerCase().startsWith(query.toLowerCase())

            //     );
            // } else {
            // Exact match for queries with 4 or more characters
          
            // Default logic for matching other fields
            return (
              query.toLowerCase() === firstName.toLowerCase() ||
              query.toLowerCase() === lastName.toLowerCase() ||
              query.toLowerCase() === status.toLowerCase() ||
              query.toLowerCase() === stationName.toLowerCase() ||
              query.toLowerCase() === doctorName.toLowerCase() ||
              query === String(age)||
              isAdmitted === true
            );
          });
        
          setSearchResults(results);
     
  
    };

    return { searchResults, searchInArray };
};

export default useSearchPatient;
