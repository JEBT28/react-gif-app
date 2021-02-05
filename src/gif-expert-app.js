//GifExpertApp
import React, {useState} from "react";
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

import logo from './assets/img/logo.png'

export const GifExpertApp = (props) => {

    const [categories, setCategories] = useState(['Friends']);

    return (
        <>
            <header className="w-full flex items-center" style={{height: "50px", padding: "5px 20px"}}>
                <div className="w-1/5 h-full">
                    <img className="w-auto h-full " src={logo} alt={"Gif app"}/>
                </div>
                <a className="flex w-4/5 h-full text-center items-center justify-end"  href="https://www.giphy.com">
                    <h3>Gifs by</h3><img className="h-4/5" src="https://media.giphy.com/media/igz3CtPVyFj975etI5/giphy.gif" alt=""/>
                </a>
            </header>

            <div style={{padding: "30px 60px"}}>
                <h1 className="text-4xl font-bold">
                    This app use the Giphy API for search gifs.
                </h1>
                <AddCategory setCategories={setCategories}/>
                {
                    categories.map(category => <GifGrid key={category} category={category}/>)
                }
            </div>
        </>
    );
}

