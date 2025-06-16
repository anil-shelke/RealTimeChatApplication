import React, { useEffect } from 'react'
import { Users } from "lucide-react";
import { useChatStore } from '../store/useChatStore'
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from './skeletons/SidebarSkeleton';
import { useState } from 'react';

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUserLoading } = useChatStore();

  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false)

  useEffect(() => {
    getUsers()
  }, [getUsers])

  const filteredUsers = showOnlineOnly ? users.filter(user => onlineUsers.includes(user._id)) : users

  if (isUserLoading) return <SidebarSkeleton />

  // return (
  //   <aside
  //     className="d-flex flex-column transition"
  //     style={{ width: '10rem', height: '100%', transition: 'all 0.2s', }} // default width (w-20)
  //   >
  //     {/* Header */}
  //     <div className="w-200 p-3">
  //       <div className="d-flex align-items-center gap-2 pt-3">
  //         <Users size={24} color='white' />
  //         <span className="fw-medium d-none d-lg-block text-white">Contacts</span>
  //       </div>

  //       {/* Toggle */}
  //       <div className="mt-3 d-none d-lg-flex align-items-center gap-2">
  //         <label className="form-check d-flex align-items-center gap-2 mb-0" style={{ whiteSpace: "nowrap" }}>
  //           <input
  //             type="checkbox"
  //             className="form-check-input"
  //             checked={showOnlineOnly}
  //             onChange={(e) => setShowOnlineOnly(e.target.checked)}
  //           />
  //           <span className="form-check-label small text-white">Show online only</span>
  //         </label>
  //         <span className="text-muted small">
  //           ({Math.max(onlineUsers.length - 1, 0)} online)
  //         </span>
  //       </div>

  //     </div>

  //     {/* User List */}
  //     <div className="overflow-auto w-200 " style={{ maxHeight: '100%' }}>
  //       {filteredUsers.length > 0 ? (
  //         filteredUsers.map((user) => (
  //           <button
  //             key={user._id}
  //             onClick={() => setSelectedUser(user)}
  //             type="button"
  //             className={`w-100 px-3 py-2 d-flex align-items-center border-0 bg-transparent text-start text-decoration-none ${selectedUser?._id === user._id ? "bg-light border-start border-primary" : "hover-bg"
  //               }`}
  //             style={{
  //               transition: 'background-color 0.3s',
  //               overflow: 'hidden',
  //               whiteSpace: 'nowrap',
  //             }}
  //           >
  //             {/* Avatar */}
  //             <div className="position-relative flex-shrink-0 me-3">
  //               <img
  //                 src={user.profilePic || "/avatar.png"}
  //                 alt={user.fullName}
  //                 className="rounded-circle"
  //                 style={{
  //                   width: '48px',
  //                   height: '48px',
  //                   objectFit: 'cover',
  //                 }}
  //               />
  //               {onlineUsers.includes(user._id) && (
  //                 <span
  //                   className="position-absolute bottom-0 end-0 bg-success rounded-circle"
  //                   style={{
  //                     width: '10px',
  //                     height: '10px',
  //                     border: '2px solid rgb(47, 228, 86)',
  //                   }}
  //                 ></span>
  //               )}
  //             </div>

  //             {/* User Info */}
  //             <div className="d-lg-block text-start text-truncate" style={{ flex: 1, minWidth: 0 }}>
  //               <div className="fw-medium text-truncate text-white">{user.fullName}</div>
  //               <div className="small text-truncate text-white">
  //                 {onlineUsers.includes(user._id) ? "Online" : "Offline"}
  //               </div>
  //             </div>
  //           </button>
  //         ))
  //       ) : (
  //         <div className="text-center text-white py-4">No online users</div>
  //       )}
  //     </div>



  //   </aside>
  // );

return (
    <>
      {/* Scrollbar styles injected directly into the page */}
      <style>{`
        .user-scroll {
          max-height: 100%;
          overflow-y: auto;
        }

        /* Chrome, Edge, Safari */
        .user-scroll::-webkit-scrollbar {
          width: 6px;
        }

        .user-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .user-scroll::-webkit-scrollbar-thumb {
          background-color: #444;
          border-radius: 3px;
        }

        /* Firefox */
        .user-scroll {
          scrollbar-width: thin;
          scrollbar-color: #444 transparent;
        }
      `}</style>

      <aside
        className="d-flex flex-column transition"
        style={{ width: '10rem', height: '100%', transition: 'all 0.2s' }}
      >
        {/* Header */}
        <div className="w-200 p-3">
          <div className="d-flex align-items-center gap-2 pt-3">
            <Users size={24} color="white" />
            <span className="fw-medium d-none d-lg-block text-white">Contacts</span>
          </div>

          {/* Toggle */}
          <div className="mt-3 d-none d-lg-flex align-items-center gap-2">
            <label
              className="form-check d-flex align-items-center gap-2 mb-0"
              style={{ whiteSpace: 'nowrap' }}
            >
              <input
                type="checkbox"
                className="form-check-input"
                checked={showOnlineOnly}
                onChange={(e) => setShowOnlineOnly(e.target.checked)}
              />
              <span className="form-check-label small text-white">Show online only</span>
            </label>
            <span className="text-muted small">
              ({Math.max(onlineUsers.length - 1, 0)} online)
            </span>
          </div>
        </div>

        {/* User List */}
        <div className="user-scroll w-200">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <button
                key={user._id}
                onClick={() => setSelectedUser(user)}
                type="button"
                className={`w-100 px-3 py-2 d-flex align-items-center border-0 bg-transparent text-start text-decoration-none ${
                  selectedUser?._id === user._id
                    ? 'bg-light border-start border-primary'
                    : 'hover-bg'
                }`}
                style={{
                  transition: 'background-color 0.3s',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                }}
              >
                {/* Avatar */}
                <div className="position-relative flex-shrink-0 me-3">
                  <img
                    src={user.profilePic || '/avatar.png'}
                    alt={user.fullName}
                    className="rounded-circle"
                    style={{
                      width: '48px',
                      height: '48px',
                      objectFit: 'cover',
                    }}
                  />
                  {onlineUsers.includes(user._id) && (
                    <span
                      className="position-absolute bottom-0 end-0 bg-success rounded-circle"
                      style={{
                        width: '10px',
                        height: '10px',
                        border: '2px solid rgb(47, 228, 86)',
                      }}
                    ></span>
                  )}
                </div>

                {/* User Info */}
                <div
                  className="d-lg-block text-start text-truncate"
                  style={{ flex: 1, minWidth: 0 }}
                >
                  <div className="fw-medium text-truncate text-white">{user.fullName}</div>
                  <div className="small text-truncate text-white">
                    {onlineUsers.includes(user._id) ? 'Online' : 'Offline'}
                  </div>
                </div>
              </button>
            ))
          ) : (
            <div className="text-center text-white py-4">No online users</div>
          )}
        </div>
      </aside>
    </>
  );

}

export default Sidebar
