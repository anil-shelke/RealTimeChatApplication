import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="p-3 border-secondary" style={{ width: "63vw" }} >
      <div className="d-flex align-items-center justify-content-between">
        {/* Left: Avatar + Info */}
        <div className="d-flex align-items-center gap-3">
          {/* Avatar */}
          <div
            className="text-white rounded-circle overflow-hidden position-relative"
            style={{ width: "40px", height: "40px" }}
          >
            <img
              src={selectedUser.profilePic || "/avatar.png"}
              alt={selectedUser.fullName}
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>

          {/* User Info */}
          <div>
            <h6 className="mb-0 fw-medium text-white">{selectedUser.fullName}</h6>
            <small className="text-white">
              {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
            </small>
          </div>
        </div>

        {/* Close Button */}
        <button className="btn btn-link p-0 text-white" onClick={() => setSelectedUser(null)}>
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
