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

    useEffect((): void => {
        (async (): Promise<void> => {
            try{
                const rawData: Response = await fetch("https://rickandmortyapi.com/api/character");
                    if (rawData.ok){
                        const payload = await rawData.json() as {results: Character[] };
                        setData(payload.results);
                        console.log("Success fetching data.")
                    }
                    else{
                        throw new Error(`HTTP ${rawData.status}`);
                    }
            }
            catch (e){
                console.log("The following error was found: " + (e as Error).message)
            }

        })();
    }, []);

    return(
        <ParentDiv>
            <RickAndMorty data={data}/>
        </ParentDiv>
    )
}