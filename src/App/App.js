import React, { Component, useState } from "react";
import Search from "./Components/SearchWikipedia/Search";
import Dropdown from "./Components/Translate/Dropdown";
import Translate from "./Components/Translate/Translate";
import Route from "./Components/Route";
import Header from "./Components/Header";
import App_SearchVideo from "./Components/SearchVideo/App_SearchVideo";
import App_Unsplash from "./Components/SerachUnsplash/App_Unsplash";
import { useEffect } from "react";

const App = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <Route path="/Translate">
                    <Translate />
                </Route>
                <Route path="/">
                    <Search />
                </Route>
                <Route path="/SearchVideo">
                    <App_SearchVideo />
                </Route>
                <Route path="/Unsplash">
                    <App_Unsplash />
                </Route>
            </div>
        </div>
    );
};

export default App;
