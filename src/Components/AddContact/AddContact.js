import React, { useState } from 'react';


const AddContact = (props) => {
        let [name, setName] = useState('');        
        let [phone, setPhone] = useState('');
        let [img, setImg] = useState('');
        
    
    function handleClick(){
        let newContact = {
            name,           
            phone,
            img,
            id: Date.now()
        }
       props.handleNewContact(newContact)
       setName('')       
       setPhone('')
       setImg('')
    }

    return (
        <div>
           <div className='addcont'>
            <input  onChange={(e) => setName(e.target.value)} type='text' placeholder='Name' value={name}/>
            <input  onChange={(e) => setPhone(e.target.value)} type='text' placeholder='Phone' value={phone}/>
            <input  onChange={(e) => setImg(e.target.value)} src='url' value={img}
            className='add-img'
            placeholder='Image' />
            <button className='btn-addcont' onClick={handleClick}>Add Contact</button>
           </div>
        </div>
    );
};

export default AddContact;