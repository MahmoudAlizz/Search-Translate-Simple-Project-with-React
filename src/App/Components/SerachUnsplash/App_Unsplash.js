import React from "react";
import unsplash from "../../APIs/unsplash";
import SearchBar from "./SearchBar";
import ImagesList from "./ImagesList";
class App_Unsplash extends React.Component {
    state = {
        images:[]
    }

    onSearchSubmit = async (term) =>{
       const res = await unsplash.get('/search/photos', {
            params:{    
                query:term
            }
        });
        this.setState({images:res.data.results});
    }

    render() {
        return (
            <div className="container">
                    <SearchBar submit={this.onSearchSubmit} />
                    <ImagesList images={this.state.images} />
            </div>
        );
    }

};

export default App_Unsplash;