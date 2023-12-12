import React, { useState, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/ChatSlice';

const LiveChat = () => {
  const dispatch = useDispatch();
  const [livemessage, setLivemessage] = useState("");
  const chatMessage = useSelector((store) => store.Chat.message);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(
        addMessage({
          name: "Harsh sukhija",
          message: "incididunt ea commodo anim nulla ea sit eiusmod pariatur laboris minim.",
        })
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full h-80vh border border-gray-300 bg-gray-100 rounded-lg flex flex-col-reverse p-4">
      <h1 className="font-bold text-2xl pb-2 text-gray-800">Live Chat</h1>
      <div className="overflow-y-auto h-96 flex flex-col-reverse">
        {chatMessage.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-gray-300"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name: "harsh",
            message: livemessage,
          }));
          setLivemessage("");
        }}
      >
        <div className='w-full rounded-lg flex space-x-1 p-2 ml-2 border border-gray-300'>
          <input placeholder="Comment" className='w-46 pl-2 rounded-lg outline-none focus:border-blue-500 border' type='text' value={livemessage} onChange={(e) => {
            setLivemessage(e.target.value);
          }} />
          <button type="submit" className='px-2 ml-1 mx-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600 transition-all duration-300'>Send</button>
        </div>
      </form>
    </div>
  );
};

export default LiveChat;
