import RickAndMorty from "./components/RickAndMorty.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {Character} from "./interfaces/Character.ts";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 10px #e29578 solid;
`;

export default function App(){

    const [data, setData] = useState<Character[]>([]);

    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://rickandmortyapi.com/api/character");
            const {results} : {results: Character[]} = await rawData.json();
            setData(results);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);

    return(
        <ParentDiv>
            <RickAndMorty data={data}/>
        </ParentDiv>
    )
}