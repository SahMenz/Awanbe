import React from "react";
import { MdOutlineErrorOutline } from "react-icons/md";


export default function CustomErrorMsg({ isCentered, errorMsg, withoutIcon, iconSize }){
    return (
        <p className={`py-4 txt-c9 w-100 ${isCentered ? 'text-center' : 'text-start'}`}>
            {
                !withoutIcon &&
                    <span>
                        <MdOutlineErrorOutline size={iconSize ? iconSize : 40} color="#000" />
                    </span>                
            }
            <span className="mx-2 txt-14 fw-400">
                {errorMsg}
            </span>            
        </p>
    )
}