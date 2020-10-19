import React, { useState } from 'react';
import "../styles/SearchDate.css";
import {DateRangePicker} from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import {Button} from "@material-ui/core"

function SearchDate() {
    const [startDate, setStartDate] =useState(new Date());
    const [endDate, setEndDate] =useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }


    return (
        <div className="searchDate">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
            <h2>Number of guests 
                <GroupAddIcon/>
            </h2>
            <input
            min={0}
            defaultValue={2} 
            type="number"/>
            <Button>
                Search Airbnb
            </Button>
        </div>
    )
}

export default SearchDate
