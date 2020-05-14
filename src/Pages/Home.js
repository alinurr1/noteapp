import React from 'react';
import { Form } from '../Components/Form';
import { Notes } from '../Components/Notes';

export const Home = () => {
    const notes = new Array(3)
    .fill('')
    .map((_, index) => ({id:index, title: `Note ${index + 1}`}));

    console.log(notes);

    return(
        <>
            <Form />
            <hr></hr>
            <Notes notes={notes}/>
        </>
    );
}