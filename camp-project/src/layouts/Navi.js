import React from "react";
import CartSummary from "./CartSummary";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import useHistory from "react-router";

export default function Navi() {
    const [isAuthanticated, setIsAuthanticated] = useState(false)
    function handleSignOut(){
        let history = useHistory();
        setIsAuthanticated(false);
        history.push("/");
    }
    function handleSignOut(params) {
        setIsAuthanticated(false);
    }
    function handleSignIn(params) {
        setIsAuthanticated(true);
    }
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item name="home" />
                    <Menu.Item name="messages" />

                    <Menu.Menu position="right">
                        <CartSummary />
                        {isAuthanticated?<SignedIn signedOut={handleSignOut} />:<SignedOut signedIn={handleSignIn}  />}  
                        
                        
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    );
}