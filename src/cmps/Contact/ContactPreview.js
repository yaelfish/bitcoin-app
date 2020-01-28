import React from 'react'
import { Link } from 'react-router-dom';

export default function ContactPreview(props) {
    const { _id, name} = props.contact;
    return (
        <Link to={`/contact/${_id}`}>
            <div className="card-contact flex justify-center align-center column">
                <p>{name}</p>
                <img className="contact-image" src={`https://robohash.org/${_id}`} alt={name}/>
            </div>
        </Link>
    )
}

