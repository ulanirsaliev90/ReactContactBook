import React, {useState} from 'react';




const ContactCard = (props) => {

    let [name, setName] = useState(props.editContact.name);        
    let [phone, setPhone] = useState(props.editContact.phone);
    let [img, setImg] = useState(props.editContact.img);

    function handleSaveClick(){
        let contact = {...props.editContact};
        contact.name = name;        
        contact.phone = phone;
        contact.img = img;


    props.handleSaveEditedContact(contact)
       setName('')       
       setPhone('')
       setImg('')
    }
          
    return (
        <div>
            <div className='ed-modal'>
                <input 
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    placeholder='Имя'
                    value={name}
                />       
            
                <input 
                    onChange={(e) => setPhone(e.target.value)} 
                    type="text" 
                    placeholder='Номер телефона'
                    value={phone}
                />      
                <input
                    onChange={(e) => setImg(e.target.value)}
                    type="url"
                    placeholder='Фото'
                    value={img}
                />       
                <button className='btn-save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default ContactCard;