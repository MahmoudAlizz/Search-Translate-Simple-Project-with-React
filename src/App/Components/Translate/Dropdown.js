import React, { useEffect, useRef } from "react";

const Dropdown = ({options,selected,setSelected,label}) => {

    const renderDropdown = options.map((option,index)=>{
        if(option.value===selected.value){
            return null;
        }
        return (
            <div key={option.value} className="dropdown-item" onClick={()=>{setSelected(options[index])}}>{option.label}</div>
        )
    })

    return (
        <div className="my-3">
                <p className="mt-3 font-weight-bold">{label}</p>
                <div className="dropdown " >
                    <button className=" btn btn-dark dropdown-toggle" data-toggle="dropdown">{selected.label}</button>
                    <div className="dropdown-menu ">
                        {renderDropdown}
                    </div>
                </div>
        </div>
    )
};

export default Dropdown ; 