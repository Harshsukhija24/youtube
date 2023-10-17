import React from 'react'

const ChatMessage = ({name ,message}) => {
  return (
    <div className=' flex items-center'>
    <img
        className="w-8 h-8"
        alt="user"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png" // Provide a valid image source URL
      />
      <span className=' font-bold pr-1'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage