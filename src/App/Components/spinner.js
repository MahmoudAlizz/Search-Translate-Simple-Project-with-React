import React from "react";

const Spinner= (props) =>{
    return (
        <>
            <p>{props.message}</p> 
        </>
    );
};

Spinner.defaultProps = {
    message:'Loading ...',
};

export default Spinner;