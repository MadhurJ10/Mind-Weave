import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OAuthSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const token = query.get("token");

    if (token) {
      localStorage.setItem("authToken", token);
      navigate("/dashboard"); // redirect after saving
    } else {
      navigate("/"); // fallback if no token
    }
  }, [location, navigate]);

  return (
    <div className="h-screen flex items-center justify-center text-white">
      <p>Logging you in...</p>
    </div>
  );
};

export default OAuthSuccess;
