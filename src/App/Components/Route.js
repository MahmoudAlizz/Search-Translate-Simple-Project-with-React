import React , {useEffect ,useState} from "react";
const Route = ({path,children})=>{
    const [currentPath,setCurrentPath] = useState(window.location.pathname);
    useEffect(()=>{
        const change = ()=>{
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate',change);
        return ()=>{
            window.removeEventListener('popstate',change)
        }
    },[]);
    return currentPath===path
    ? children
    : null
};
export default Route;
