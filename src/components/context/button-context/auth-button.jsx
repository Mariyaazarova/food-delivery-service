import { useAuth } from "../auth-context/use-auth";
import { CIcon } from "@coreui/icons-react";
import { cilUser } from "@coreui/icons";

export const AuthButton = () => {
  const { getUserName, toggleAuth } = useAuth();

  return (
    <button
      className="btn btn-link d-flex align-items-center show"
      onClick={toggleAuth}
    >
      {getUserName() ?? <CIcon icon={cilUser} size="lg" />}
    </button>
  );
};
