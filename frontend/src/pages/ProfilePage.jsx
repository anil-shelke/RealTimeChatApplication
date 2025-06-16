import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="min-vh-100 pt-5" style={{ backgroundColor: "#242424" }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="bg-dark text-light rounded p-4 shadow-lg">
              <div className="text-center mb-4">
                <h1 className="h4 fw-bold">Profile</h1>
                <p className="text-secondary">Your profile information</p>
              </div>

              {/* Avatar Upload */}
              <div className="d-flex flex-column align-items-center mb-4">
                <div className="position-relative">
                  <img
                    src={selectedImg || authUser.profilePic || "/avatar.png"}
                    alt="Profile"
                    className="rounded-circle border border-3"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />

                  {/* Camera Icon Button */}
                  <label
                    htmlFor="avatar-upload"
                    className={`position-absolute bottom-0 end-0 bg-white rounded-circle p-2 shadow 
        ${isUpdatingProfile ? "disabled opacity-50" : "cursor-pointer"}`}
                    style={{
                      transform: "translate(25%, 25%)",
                      zIndex: 2,                      // Make sure it's above image
                      border: "1px solid #ccc"        // Optional border to make it visible
                    }}
                  >
                    {/* Add icon with color explicitly set */}
                    <Camera size={16} color="black" />

                    {/* Hidden Input */}
                    <input
                      type="file"
                      id="avatar-upload"
                      className="d-none"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={isUpdatingProfile}
                    />
                  </label>
                </div>

                {/* Uploading Text */}
                <small className="text-secondary mt-2">
                  {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
                </small>
              </div>


              {/* Info Fields */}
              <div className="mb-4">
                <div className="mb-3">
                  <div className="text-secondary d-flex align-items-center mb-1">
                    <User size={16} className="me-2" /> Full Name
                  </div>
                  <div className="form-control bg-secondary text-light border-0 w-100">
                    {authUser?.fullName}
                  </div>
                </div>

                <div>
                  <div className="text-secondary d-flex align-items-center mb-1">
                    <Mail size={16} className="me-2" /> Email Address
                  </div>
                  <div className="form-control bg-secondary text-light border-0 w-100">
                    {authUser?.email}
                  </div>
                </div>
              </div>

              {/* Account Info */}
              <div className="bg-dark border rounded p-3">
                <h5 className="mb-3">Account Information</h5>
                <div className="d-flex justify-content-between border-bottom py-2 text-secondary">
                  <span>Member Since</span>
                  <span>{authUser.createdAt?.split("T")[0]}</span>
                </div>
                <div className="d-flex justify-content-between pt-2 text-secondary">
                  <span>Account Status</span>
                  <span className="text-success">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
