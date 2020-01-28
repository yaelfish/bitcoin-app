import React from 'react';
import ContactPreview from './ContactPreview';

export default function ContactList(props) {
    
    return (
            <div className="list-cards">
            {props.contacts.map(contact => {
                return <ContactPreview
                            key={contact._id}
                            contact={contact}>
                        </ContactPreview>
            })}
            </div>
    )
}
