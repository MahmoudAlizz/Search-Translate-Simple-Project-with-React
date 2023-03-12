import React, { useState , useEffect } from "react";
import SearchBar from "./SearchBar";
import Youtube from "../../APIs/Youtube"
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
const App_SearchVideo = ()=>{
    const [term,setTerm]=useState("");
    const [videos,setVideos]=useState([]);
    const [selected,setSelected]=useState(null);
    useEffect(()=>{
        const Search = async ()=>{
            const {data} = await Youtube.get("search",{
                params:{
                    q:term
                }
            })
            setVideos(data.items);
        };
        if(term){
            setSelected(null);
            Search();
        };
    },[term]);

    const RenderView = ()=>{
        if(!selected){
            return (
                <div className="row justify-content-center">
                    <div className="col-9">
                        <VideoList videos={videos} selected={selected} onChangeSelected={setSelected}/>
                    </div>
                </div>  
            )
        }
        else{
            return (
                <div className="row">
                    <div className="col-7">
                        <VideoDetail video={selected}/>
                    </div>
                    <div className="col-5">
                        <VideoList videos={videos} selected={selected} onChangeSelected={setSelected}/>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className="container">
            <SearchBar term={term} onChamgeTerm={setTerm}/>
            {RenderView()}
        </div>
    )
};
export default App_SearchVideo;