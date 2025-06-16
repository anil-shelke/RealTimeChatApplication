import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
  <div className="vh-100">
    <div className="d-flex justify-content-center pt-5 px-3">
      <div className=" rounded shadow w-100" style={{ maxWidth: '1140px', height: 'calc(100vh - 8rem)' }}>
        <div className="d-flex h-100 rounded overflow-hidden">
          <Sidebar />

          {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
        </div>
      </div>
    </div>
  </div>
);

};
export default HomePage;