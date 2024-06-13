import React from 'react';
import Conversation from './Conversation';
import Messages from './Messages';

const Chat = () => {
  const [selectedReceiverId, setSelectedReceiverId] = useState(null);

  const handleSelectConversation = (receiverId) => {
    setSelectedReceiverId(receiverId);
  };

  return (
    <div className="">
      <div className="flex bg-white dark:bg-gray-900">
        <div className="w-80 h-screen dark:bg-gray-800 bg-gray-100 p-2 hidden md:block">
          <div className="h-full overflow-y-auto">
            <div className="text-xl font-extrabold text-gray-600 dark:text-gray-200 p-3">Healing_minds</div>
            <Conversation onSelectConversation={handleSelectConversation} />
          </div>
        </div>
        <div className="flex-grow h-screen p-2 rounded-md">
          {selectedReceiverId ? <Messages receiverId={selectedReceiverId} /> : <div>Select a conversation</div>}
        </div>
      </div>
    </div>
  );
};

export default Chat;
