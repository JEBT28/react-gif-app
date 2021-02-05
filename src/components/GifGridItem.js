import React from "react";

export const GifCardItem = ({id, title, url}) => {

    return (
        <div key={id} className="animate__animated animate__fadeIn flex flex-col p-0 m-0 h-auto  rounded-lg shadow-2xl m-5 lg:w-1/5 md:w-2/5 sm:w-full ">
            <figure className="w-full h-3/4 rounded-t-lg overflow-hidden text-center">
                <img className="w-full h-auto object-fill" src={url} alt="" loading={"lazy"}/>
            </figure>
            <div className="h-auto w-full text-center p-4">
                <p className="text-base">{title}</p>
            </div>
        </div>
    )
}