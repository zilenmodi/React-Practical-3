import React, { useEffect, useState } from "react";

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const weekNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
];

/* Define a custom hook for getting the current time */
const useTime = () => {
    const [dateData, setDateData] = useState({});
    useEffect(() => {
        let interval = setInterval(
            () =>
                setDateData({
                    date: new Date().getDate(),
                    day: weekNames[new Date().getDay()],
                    month: monthNames[new Date().getMonth()],
                    year: new Date().getFullYear(),
                }),
            1000
        );
        return function clenup() {
            clearInterval(interval); // clean up function
        };
    });
    return dateData;
};

export default useTime;
