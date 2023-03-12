import React, { Component } from "react";

class SearchBar extends Component {
    state = {
        term: '',
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.submit(this.state.term);
    }

    render() {
        return (
            <form action="" onSubmit={this.onFormSubmit} autoComplete="off">
                <div className="form-group mx-auto w-50 py-4  px-5 ">
                    <label htmlFor="search" className="font-weight-bold">Search images in Unsplash</label>
                    <input type="text" id="search" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} className="form-control " placeholder="Search ..." />
                </div>
            </form>
        );
    };
}
export default SearchBar;
