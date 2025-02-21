import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function ScrollToTop({ evtToChange }){

    const pathname = useLocation().pathname

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname, evtToChange])

    return <div />
}