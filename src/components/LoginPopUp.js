import React, { useState, useEffect } from "react";
import { LoginForm } from "@/components/LoginForm";
import { useAppContext } from "@/app/contexts/AppContext";

const LoginPopUp = () => {
  const { addUser } = useAppContext();
  const [isVisible, setIsVisible] = useState(true); 

  const onClose = () => setIsVisible(false);

  return (
    <div>
      {isVisible && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-black/50 flex items-center justify-center">
          <div className="p-8 rounded-lg shadow-lg w-full max-w-md">
            <LoginForm handleAddUser={addUser} onClose={onClose} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPopUp;
