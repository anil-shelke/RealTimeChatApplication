import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2 } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{ backgroundColor: "#242424" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card bg-dark text-white shadow">
              <div className="card-body p-4">
                {/* Logo */}
                <div className="text-center mb-4">
                  <div
                    className="mx-auto mb-2 d-flex align-items-center justify-content-center bg-primary rounded-circle"
                    style={{ width: "48px", height: "48px" }}
                  >
                    💬
                  </div>
                  <h2 className="fw-bold">Welcome Back</h2>
                  <p className="text-muted">Sign in to your account</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-white">
                      Email
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-secondary border-0 text-white">
                        📧
                      </span>
                      <input
                        type="email"
                        id="email"
                        className="form-control bg-dark text-white border-secondary"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="password" className="form-label text-white">
                      Password
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-secondary border-0 text-white">
                        🔒
                      </span>
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        className="form-control bg-dark text-white border-secondary"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        required
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="text-white" size={16} />
                        ) : (
                          <Eye className="text-white" size={16} />
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={isLoggingIn}
                  >
                    {isLoggingIn ? (
                      <>
                        <Loader2 className="me-2 animate-spin" size={16} />
                        Loading...
                      </>
                    ) : (
                      "Sign in"
                    )}
                  </button>
                </form>

                <div className="text-center mt-4 text-white">
                  <p>
                    Don&apos;t have an account?{" "}
                    <Link to="/signup" className="text-primary">
                      Create account
                    </Link>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
