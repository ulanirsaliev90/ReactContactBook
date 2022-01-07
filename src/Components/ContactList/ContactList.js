import React from 'react';

const ContactsList = (props) => {
    console.log(props);
    return (
        <div className='contl'>
           
                {props.contacts.map((item, index) => (
                    <ul className='ed-modal' key={item.id}>
                        <li className='li-n'>{item.name}</li>                        
                        <li className='li-p'>{item.phone}</li>
                        <li><img src={item.img} width='200px' height='200px'/></li>
                        <li>
                            <button className='btn-del'
                            onClick={() => props.handleDeleteContact(item.id)}>
                                Delete
                                </button>

                            <button className='btn-ed' onClick={() => props.handleEditIndex(index)}>Edit</button>
                        </li>
                    </ul>
                ))}
           
        </div>
    );
};

export default ContactsList;