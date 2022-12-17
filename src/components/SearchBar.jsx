import React from "react";
import { useState } from "react";
import { getDataByNameOrId } from "../utils/getData.js";

export default function SearchBar({ onSearch }) {
    const [name, setName] = useState("");

    function handleSearchChange(e) {
        // const regex = /^[0-9]*$/;
        // regex.test(e.target.value)
            Number(e.target.value) > 0 && Number(e.target.value < 250)
            ? setName(Number(e.target.value))
            : setName(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        let dataFetched = ""
        if (name > 250 || name < 1){
            dataFetched = await getDataByNameOrId("sdfsdfsdf");
        }else{
            dataFetched = await getDataByNameOrId(name);
        }
        onSearch(dataFetched);
        setName("");
    }

    return (
        <form>
            <div>
                <input
                    type="text"
                    placeholder="Search a product..."
                    onChange={(e) => handleSearchChange(e)}
                    value={name}
                />
                <button type="submit" onClick={(e) => handleSubmit(e)}>
                    Search
                </button>
            </div>
        </form>
    );
}
