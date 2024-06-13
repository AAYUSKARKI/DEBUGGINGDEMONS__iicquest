
import ConversationItem from './ConversationItem';
const Conversation = ({ onSelectConversation }) => {

   

    const data = [
            {name:'Aayush',time:'just now', message: 'Hey there! ', active: true, id: '1'},
            {name:'Saurav',time:'12:00', message: 'Hello? Are you available', id: '2'},
            {name:'Sandesh',time:'yesterday', message: 'I am having some issues', id: '3'},
            {name:'Jiwan',time:'1 day ago', message: 'Lets play chess tonight :)', id: '4'},
            {name:'Ganesh',time:'1 day ago', message: 'Are you available toinght', id: '5'},
            {name:'Anish',time:'1 day ago', message: 'I\'m the bravest of all kind', id: '6'},
    ]

    return (
        <div className="p-1">
          {data.map((item) => (
            <div key={item.id} onClick={() => onSelectConversation(item.id)}>
              <ConversationItem
                message={item.message}
                time={item.time}
                name={item.name}
                active={item.active}
              />
            </div>
          ))}
        </div>
      );
    };

export default Conversation