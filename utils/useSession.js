import { useEffect } from "react";
import { useRouter } from "next/router";

const useSession = () => {
  const rounter = useRouter();
  useEffect(() => {
    !window.sessionStorage.getItem("token") ? rounter.push("/sign_in") : null;
  }, []);
};

export default useSession;
