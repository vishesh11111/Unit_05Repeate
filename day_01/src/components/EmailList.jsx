import { useState } from "react";
import { AddEmail } from "./AddEmail";
import { EmailCard } from "./EmailCard";
import styles from "./css/EmailCard.module.css";

const initState = [
    {
        id : 1,
        image: "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name : "Natural",
        email : "Natural121@gmail",
        phone : "92324392312",

    }
];


export const EmailList = ()=>{
    const [contactList, setcontactList]= useState(initState);
    

    const handleClick = (image,name, email, phone )=>{
        setcontactList([
            ...contactList,
            {
                id: contactList[contactList.length -1].id+1,
                image: image,
                name : name,
                email : email,
                phone : phone
            }
        ])
    }


    const deleteById = (id)=>{
        setcontactList(contactList.filter((item)=>item.id !==id))
    }

    return (
        <div className={styles.mn}>
            <div>
            <h1>Contact List</h1>
            <AddEmail handleClick={handleClick}/>
            </div>
            <br />
            {contactList.map((item)=>(
                <div key={item.id}>
                    <EmailCard
                    id={item.id}
                    image = {item.image}
                    name={item.name}
                    email={item.email}
                    phone= {item.phone}
                    onDelete={deleteById}/>
                </div>
            ))}
        </div>
    )

}