import styled from "styled-components";
import type { Character } from "../interfaces/Character.ts";

const HeaderDiv = styled.div`
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    font-size: calc(2px + 1vw);
    letter-spacing: 0%;
    word-spacing: 2%;
    color: #000000;
    font-weight: 400;
    text-decoration: none;
    font-style: italic;
    font-variant: normal;
    text-transform: uppercase;
    background-color: #83c5be;
    text-align: center;
    padding: 5% 0%;
`;

const AllCharsDiv = styled.div`
    display: flex;
    flex-direction: column;    
    justify-content: space-evenly;
    background-color: #ffddd2;
`;

const SingleCharDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    max-width: 60%;
    padding: 2%;
    margin: 2% auto;
    background-color: #006d77;
    border: 10px #e29578 solid;
    text-align: center;
    gap: 2rem;
    border-radius: 10%;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    font-size: calc(2px + 1vw);
    letter-spacing: 0%;
    word-spacing: 2%;
    color: #000000;
    font-weight: 400;
    text-decoration: none;
    font-style: italic;
    font-variant: normal;
    text-transform: uppercase;
`;
//got gap property from https://www.w3schools.com/cssref/css3_pr_gap.php


const CharacterImage = styled.img`
    max-width: 40%;
    border-radius: 8px;
`;

const CharacterInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: calc(2px + 1vw);
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
    max-width: 60%;
    text-align: left;
`;

export default function RickAndMorty(props: { data: Character[] }) {
    return (
        <>
            <HeaderDiv>
                <h1>Rick and Morty Characters</h1>
            </HeaderDiv>
            <AllCharsDiv>
                {props.data.map((char: Character) => {
                    const created = new Date(char.created).toLocaleDateString("en-US", {
                        month: "long",  
                        day: "numeric",
                        year: "numeric"
                    });

                    return (
                        <SingleCharDiv key={char.id}>
                            <CharacterImage
                                src={char.image}
                                alt={`image of ${char.name}`}
                            />
                            <CharacterInformation>
                                <h1>{char.name}</h1>
                                <p>
                                    Status:
                                    <span
                                        style={{
                                            color: char.status !== "Alive" ? "red" : "white",
                                        }}
                                    >
                                        {char.status !== "Alive" ? "Deceased" : char.status}
                                    </span>
                                </p>
                                <p>
                                    Species:
                                    {char.species !== "Human" ? "(Not Human)" : char.species}
                                </p>
                                <p>Type: {char.type || "Unknown"}</p>
                                <p>Gender: {char.gender}</p>
                                <p>Created: {created}</p>
                            </CharacterInformation>
                        </SingleCharDiv>
                    );
                })}
            </AllCharsDiv>
        </>
    );
}
//this is where i got toLocaleDateString: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

