import React/*, {useState, useEffect}*/ from 'react';
import {useFetchGifs} from "../hooks/useFetchGifs";
import {GifCardItem} from "./GifGridItem";
//import {getGifs} from "../helpers/getGifs";


export const GifGrid = ({category}) => {

   const {data:gifs,loading} = useFetchGifs(category);

    return (
        <>
            <hr/>
            <h1 className="text-blue-900 font-bold animate__animated animate__fadeIn" key={category}>{category}</h1>
            {loading&& <p className={"animate__animated animate__flash"}>Loading</p>}
            <section className="flex flex-wrap w-full h-auto">
                {gifs.map(gif => (<GifCardItem key={gif.id} {...gif}/>))}
            </section>
        </>
    );
}
