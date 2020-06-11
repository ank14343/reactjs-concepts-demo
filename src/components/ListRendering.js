import React from 'react';

function Person({person}) {
    return (<h2>Name:  {person.name}, Age: {person.age}</h2>)
}

function ListRendering(props) {
    const persons = [
        {
            id: 1,
            name: "Aaaa",
            age: "11"
        },
        {
            id: 2,
            name: "Bbbbb",
            age: "22"
        },
        {
            id: 3,
            name: "Ccccc",
            age: "33"
        },
        {
            id: 4,
            name: "Dddd",
            age: "44"
        }
    ];
    const names = ["Aaa", "Bbbbb", "Cccccccc", "Aaa", "Aaa", "Bbbbb", "Cccccccc"];
    // not a great idea to use index as key if list needs sorting or filteringor etc
    const nameList = names.map((elem, index) => <h2 key={index}>{index} {elem}</h2> );
    // const personsList = persons.map(person => <h2>Name:  {person.name}, Age: {person.age}</h2> );
    // const personsList = persons.map(person => <Person key={person.id} person={person} /> );
    return (
        <div>
            {nameList}
            {/* {personsList} */}

            {/* not kool */}
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
        </div>
    );
}

export default ListRendering;