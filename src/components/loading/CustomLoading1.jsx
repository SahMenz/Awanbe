import React from "react"; 
import './css/loading.css'
import { Spinner } from "react-bootstrap";


export default function CustomLoading1({ loadingTxt }){
    return (
        <div className="w-100 d-flex flex-column align-items-center justify-content-center my-4">
            <div className="custom-loader-1" />
            {
                loadingTxt &&
                    <p className="m-0 p-0 my-3 txt-73 txt-14 fw-500 text-center">
                        <span className="mx-2">{loadingTxt}</span> <Spinner size="sm" variant="dark" />
                    </p>
            }
        </div>
    )
}