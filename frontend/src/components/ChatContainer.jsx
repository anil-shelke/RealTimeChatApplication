import React, { useEffect, useRef } from 'react'
import { useChatStore } from '../store/useChatStore'
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';
import MessageSkeleton from './skeletons/MessageSkeleton';
import { useAuthStore } from '../store/useAuthStore';
import {formatMessageTime} from '../lib/utils.js'

const ChatContainer = () => {

  const {messages, getMessages, isMessagesLoading, selectedUser, subscribeToMessages, unsubscribeFromMessages} = useChatStore();
  const {authUser} = useAuthStore();
   const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);

    subscribeToMessages();

    return () => unsubscribeFromMessages();
  },[selectedUser._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);


    useEffect(() => {
      if(messageEndRef.current && messages){
        messageEndRef.current.scrollIntoView({behavior: "smooth"});
      }
    },[messages]);

  if(isMessagesLoading) return (
    <div className="flex-1 flex flex-col overflow-auto" style={{ overflowX: "hidden", overflowY: "hidden" }}>
  <ChatHeader />
  <MessageSkeleton />
  <MessageInput />
</div>

  )

//   return (
//   <div className="d-flex flex-column flex-grow-1 overflow-auto">
//     <ChatHeader />

//     <div className="flex-grow-1 overflow-auto p-3">
//       {messages?.map((message) => (
//         <div
//           key={message._id}
//           className={`d-flex mb-4 ${message.senderId === authUser._id ? "justify-content-end" : "justify-content-start"}`}
//           ref={messageEndRef}
//         >
//           <div className="d-flex align-items-start">
//             <div className="me-2 pt-4">
//               <img
//                 src={
//                   message.senderId === authUser._id
//                     ? authUser.profilePic || "/avatar.png"
//                     : selectedUser.profilePic || "/avatar.png"
//                 }
//                 alt="profile pic"
//                 className="rounded-circle border"
//                 style={{ width: "40px", height: "40px", objectFit: "cover" }}
//               />
//             </div>
//             <div>
//               <div className="text-white small mb-1" >
//                 {formatMessageTime(message.createdAt)}
//               </div>
//               <div className="text-white p-2 rounded shadow-sm" style={{ backgroundColor: "#1a1a1a" }}>
//                 {message.image && (
//                   <img
//                     src={message.image}
//                     alt="Attachment"
//                     className="img-fluid rounded mb-2"
//                     style={{ maxWidth: "200px" }}
//                   />
//                 )}
//                 {message.text && <p className="mb-0">{message.text}</p>}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>

//     <MessageInput />
//   </div>
// );


return (
  <>
    {/* Scrollbar styles */}
    <style>{`
      .messages-container {
        scrollbar-width: thin;
        scrollbar-color: #444 transparent;
      }

      .messages-container::-webkit-scrollbar {
        width: 6px;
      }

      .messages-container::-webkit-scrollbar-track {
        background: transparent;
      }

      .messages-container::-webkit-scrollbar-thumb {
        background-color: #444;
        border-radius: 3px;
      }
    `}</style>

    <div className="d-flex flex-column flex-grow-1 overflow-auto">
      <ChatHeader />

      {/* Message list with dark small scrollbar */}
      <div className="flex-grow-1 overflow-auto p-3 messages-container">
        {messages?.map((message) => (
          <div
            key={message._id}
            className={`d-flex mb-4 ${message.senderId === authUser._id ? "justify-content-end" : "justify-content-start"}`}
            ref={messageEndRef}
          >
            <div className="d-flex align-items-start">
              <div className="me-2 pt-4">
                <img
                  src={
                    message.senderId === authUser._id
                      ? authUser.profilePic || "/avatar.png"
                      : selectedUser.profilePic || "/avatar.png"
                  }
                  alt="profile pic"
                  className="rounded-circle border"
                  style={{ width: "40px", height: "40px", objectFit: "cover" }}
                />
              </div>
              <div>
                <div className="text-white small mb-1">
                  {formatMessageTime(message.createdAt)}
                </div>
                <div className="text-white p-2 rounded shadow-sm" style={{ backgroundColor: "#1a1a1a" }}>
                  {message.image && (
                    <img
                      src={message.image}
                      alt="Attachment"
                      className="img-fluid rounded mb-2"
                      style={{ maxWidth: "200px" }}
                    />
                  )}
                  {message.text && <p className="mb-0">{message.text}</p>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <MessageInput />
    </div>
  </>
);
}

export default ChatContainer


