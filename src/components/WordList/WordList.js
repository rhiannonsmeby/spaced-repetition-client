import React from 'react';
import './WordList.css'

export default function WordBox(props) {
    return (
        <div className='grid-item'>
            <div className='title'>
                <h4 className='note'>{props.original}</h4>
            </div>
            <p className='notecard'>{`correct answer count: ${props.correct_count}`}</p>
            <p className='notecard'>{`incorrect answer count: ${props.incorrect_count}`}</p>
        </div>
    )
}