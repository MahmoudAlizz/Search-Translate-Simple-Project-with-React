import React from "react";

const Search = ({term,onChamgeTerm})=>{
    const onFormSubmit = (event)=>{
        event.preventDefault();
        onChamgeTerm(document.getElementById("search").value);
    }
    return (
        <form action="" className="row justify-content-center my-3" onSubmit={onFormSubmit} autoComplete="off">
            <div className="form-group col-8">
                <label htmlFor="search" className="font-weight-bold mb-2">Serach Video</label>
                <input type="text" placeholder="serach" name="" id="search" className="form-control" />
            </div>
        </form>
    )
};

export default Search;