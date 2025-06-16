import React from 'react'
import { useAuthStore } from '../store/useAuthStore';
import { useState } from 'react';
import { Link} from "react-router-dom"
import AuthImagePattern from '../components/AuthImagePattern';

import { User, MessageSquare, Mail, Lock, Eye, EyeOff } from "lucide-react";
import toast from 'react-hot-toast';



const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    })

    const {signup, isSigningUp} = useAuthStore();

    const validateForm = () => {
        if(!formData.fullName.trim()) return toast.error("Full name is required");
        if(!formData.email.trim()) return toast.error("Email is required");
        if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
        if(!formData.password) return toast.error("Password is required");
        if(formData.password.length < 6) return toast.error("Password must be at least 6 characters")

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = validateForm();

        if(success== true){
            signup(formData)
        }
    }

return (
  <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-dark text-light">
    <div className="w-100 px-3" style={{ maxWidth: "400px" }}>
      <div className="text-center mb-4">
        <div className="d-flex flex-column align-items-center gap-2">
          <div
            className="rounded bg-primary bg-opacity-25 d-flex justify-content-center align-items-center mb-2"
            style={{ width: "50px", height: "50px" }}
          >
            <User className="text-primary" size={24} />
          </div>
          <h2 className="fw-bold text-light">Create Account</h2>
          <p className="text-light opacity-75">
            Get started with your free account
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="mb-3">
          <label className="form-label text-light fw-medium">Full Name</label>
          <div className="input-group">
            <span className="input-group-text bg-secondary text-light">
              <User size={16} />
            </span>
            <input
              type="text"
              className="form-control bg-dark text-light border-secondary"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label text-light fw-medium">Email</label>
          <div className="input-group">
            <span className="input-group-text bg-secondary text-light">
              <Mail size={16} />
            </span>
            <input
              type="email"
              className="form-control bg-dark text-light border-secondary"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label text-light fw-medium">Password</label>
          <div className="input-group">
            <span className="input-group-text bg-secondary text-light">
              <Lock size={16} />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control bg-dark text-light border-secondary"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSigningUp}
          >
            {isSigningUp ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                ></span>
                Loading...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </div>
      </form>

      <div className="text-center mt-3">
        <p className="text-light opacity-75">
          Already have an account?{" "}
          <Link to="/login" className="text-primary">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  </div>
);

}

export default SignUpPage
