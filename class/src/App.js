import { useState } from "react";
import "./App.css";
import CardsWrapper from "./components/CardsWrapper";

function App() {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" });
    const [showUser, setShowUser] = useState(false);

    const handleUserInfo = (e) => {
        setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const RegEx = {
        email: /^(digitalAcademy@gmail.com)$/g,
        password: /^(iLoveReact123)$/g,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isDisabled =
            userInfo.email.match(RegEx.email) &&
            userInfo.password.match(RegEx.password);

        if (isDisabled) {
            setShowUser(true);
        }
    };

    console.log(showUser);

    return (
        <>
            {showUser ? (
                <CardsWrapper />
            ) : (
                <div className="App">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="email"
                                onChange={handleUserInfo}
                            />
                        </div>
                        <div>
                            <label>password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                onChange={handleUserInfo}
                            />
                        </div>
                        <button>Log In</button>
                    </form>
                </div>
            )}
        </>
    );
}

export default App;
