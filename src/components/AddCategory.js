import React, {useState} from "react";
import propTypes from 'prop-types';
import { ReactComponent as SearchImg} from '../img/search.svg';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=> setInputValue(e.target.value);

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(inputValue.trim().length<3)
            return
        console.log("submit hecho");
        const category =  document.getElementById('inputCategory').value;
        setCategories(cats =>[category,...cats]);
        setInputValue('');
    }

    return (
        <form className=" mt-4 mb-4" onSubmit={handleSubmit}>
            <div className="flex w-full h-12 max-w-sm text-sm p-2 rounded-xl border-2 border-black">
                <input className="w-11/12 focus-within:outline-none"
                   type="text"
                   value={inputValue}
                   onChange={(e)=>handleInputChange(e)}
                   placeholder="Search GIPHY"
                   id={"inputCategory"}/>
                <SearchImg className="w-1/12 h-full"/>
            </div>
        </form>
    );

};

AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
}