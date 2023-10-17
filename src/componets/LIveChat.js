import React, { useState, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/ChatSlice';

const LiveChat = () => {
  const dispatch = useDispatch();
  const [livemessage, setLivemessage] = useState();
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
    <div className="w-full h-80vh border border-black bg-slate-100 rounded-lg flex-col-reverse p-4">
      <h1 className="font-bold text-2xl pb-2">LiveChat</h1>
      <div className="overflow-y-auto h-96 flex-col-reverse">
        {chatMessage.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name: "harsh",
            message:livemessage,
          }));
          setLivemessage("")
        }}
      >
        <div className='w-full rounded-lg flex space-x-1 p-2 ml-2 border border-black'>
          <input placeholder="comment" className='w-46 pl-2 rounded-lg' type='text' value={livemessage} onChange={(e) => {
            setLivemessage(e.target.value);
          }} />
          <button type="submit" className='px-2 ml-1 mx-2 bg-green-500'>send</button>
        </div>
      </form>
    </div>
  );
};

export default LiveChat;
