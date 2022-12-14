import { useAuth0 } from "@auth0/auth0-react";

function LoginButton(){
    const { loginWithRedirect } = useAuth0();

    return (
        <button className="btn btn-primary" onClick={() => loginWithRedirect()}>Log in</button>
    )
};

export default LoginButton;