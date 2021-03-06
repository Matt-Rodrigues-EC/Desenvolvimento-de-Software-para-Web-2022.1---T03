import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ProfessorTableRow from "./ProfessorTableRow";

function ListProfessor(){

    const [professors, setProfessors] = useState([]);

    useEffect(
        ()=>{
            axios.get("http://localhost:3002/professors/list")
            .then(
                (res)=>{
                    setProfessors(res.data);
                }   
            )
            .catch(
                (error)=>{
                console.log(error)
                }
            )
        }, []
    )


    function generateTable(){

        if(!professors) return
        return professors.map(
            (professor, i) =>{
                return <ProfessorTableRow professors={professor} key={i} />
            }
        )
    }

    return(
        <>
            <main>
                <h2>
                    List Professor
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>University</th>
                            <th>Degree</th>
                            <th colSpan={2} style={{textAlign:"center"}}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generateTable()}
                    </tbody>
                </table>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    )
}

export default ListProfessor;