import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import StudentTableRow from "./StudentTableRow";

function ListStudent() {

    const [students,setStudents] = useState([])

        useEffect(
            ()=>{
                axios.get("http://localhost:3002/students/list")
                .then(
                    (res)=>{
                    setStudents(res.data);
                    }   
                )
                .catch(
                    (error)=>{
                    console.log(error)
                    }
                )
            }, []
        )

    function generateTable() {
        
        if(!students) return
        return students.map(
            (student,i) => {
                return <StudentTableRow student={student} key={i} />
            }
        )
    }

    return (
        <>
            <main>
                <h2>
                    List Student
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>IRA</th>
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
    );
}

export default ListStudent