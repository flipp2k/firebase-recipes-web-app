import { useState } from "react";
import FireBaseAuthService from "./FirebaseAuthService";
import LoginForm from "./components/loginForm";

import "./App.css";

function App() {
	const [user, setUser] = useState(null);

	FireBaseAuthService.subscribeToAuthChanges(setUser);

	return (
		<div className="App">
			<div className="title-row">
				<h1 className="title">FireBase Recipes</h1>
				<LoginForm existingUser={user}></LoginForm>
			</div>
		</div>
	);
}

export default App;
