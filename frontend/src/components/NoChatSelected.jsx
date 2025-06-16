import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-100 d-flex text-white flex-column align-items-center justify-content-center p-5">
      <div className="text-center" style={{ maxWidth: '28rem' }}>
        {/* Icon Display */}
        <div className="d-flex justify-content-center gap-4 mb-4">
          <div className="position-relative">
            <div
              className="rounded bg-primary bg-opacity-10 d-flex align-items-center justify-content-center bounce"
              style={{ width: '4rem', height: '4rem', borderRadius: '1rem' }}
            >
              <MessageSquare size={32} className="text-primary" />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="h4 fw-bold ">Welcome to Chatty!</h2>
        <p className="">
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
