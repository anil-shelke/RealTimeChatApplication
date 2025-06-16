import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
          <div
            className="d-flex align-items-center justify-content-center rounded bg-primary bg-opacity-25"
            style={{ width: "36px", height: "36px" }}
          >
            <MessageSquare size={20} className="text-primary" />
          </div>
          <span className="fw-bold">Chatty</span>
        </Link>

        <div className="d-flex align-items-center gap-2 ms-auto">
          <Link
            to="/settings"
            className="btn btn-sm d-flex btn-outline-light align-items-center gap-1"
            style={{
              backgroundColor: "rgba(19, 19, 19, 0.17)",
              border: "none"
            }}
          >
            <Settings size={16} />
            <span className="d-none d-sm-inline text-white">Settings</span>
          </Link>

          {authUser && (
            <>
              <Link to="/profile" className="btn btn-sm btn-outline-light d-flex align-items-center gap-1"
              style={{
              backgroundColor: "rgba(19, 19, 19, 0.17)",
              border: "none"
            }}>
                <User size={16} />
                <span className="d-none d-sm-inline">Profile</span>
              </Link>

              <button onClick={logout} className="btn btn-sm btn-outline-danger d-flex align-items-center gap-1"
              style={{
              backgroundColor: "rgba(19, 19, 19, 0.17)",
              border: "none"
            }}>
                <LogOut size={16} />
                <span className="d-none d-sm-inline">Logout</span>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
