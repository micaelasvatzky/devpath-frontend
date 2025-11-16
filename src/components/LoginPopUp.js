import { LoginForm } from "@/components/LoginForm";
import { useAppContext } from "@/app/contexts.js/AppContext";

const LoginPopUp = ({onClose}) => {
    const {addUser} = useAppContext();

  return (
    <div>
      <LoginForm handleAddUser={addUser} onClose={onClose}/>
    </div>
  );
};

export default LoginPopUp;
