import React from 'react'
import ConversationItem from './ConversationItem';
const Conversation = () => {

    const data = [
        {name:'Aayush',time:'just now', message: 'Hey there! ', active: true},
        {name:'Saurav',time:'12:00', message: 'Hello? Are you available'},
        {name:'Sandesh',time:'yesterday', message: 'I am having some issues'},
        {name:'Jiwan',time:'1 day ago', message: 'Lets play chess tonight :)'},
        {name:'Ganesh',time:'1 day ago', message: 'Are you available toinght'},
        {name:'Anish',time:'1 day ago', message: 'I\'m the bravest of all kind'},
    ]

    return (
        <div className="p-1">
            {
                data.map((item, index) => (
                    <ConversationItem 
                        message={item.message}
                        time={item.time} 
                        name={item.name} 
                        active={item.active}
                    />
                ))
            }
        </div>
    )
}

export default Conversation