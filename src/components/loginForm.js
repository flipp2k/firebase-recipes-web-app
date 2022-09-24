import { useState } from "react";
import FireBaseAuthService from "../FirebaseAuthService";

function LoginForm({ existingUser }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			await FireBaseAuthService.loginUser(username, password);
			setUsername("");
			setPassword("");
		} catch (error) {
			alert(error.message);
		}
	}

	function handleLogout() {
		FireBaseAuthService.logoutUser();
	}

	async function handleSendResetPasswordEmail() {
		if (!username) {
			alert("Please enter your username!");
			return;
		}
		try {
			await FireBaseAuthService.sendResetEmail(username);
			alert("Sent the password reset email");
		} catch (e) {
			alert(e.message);
		}
	}

	return (
		<div className="login-form-container">
			{existingUser ? (
				<div className="row">
					<h3>Welcome, {existingUser.email}</h3>
					<button
						type="button"
						className="primary-button"
						onClick={handleLogout}
					>
						Logout
					</button>
				</div>
			) : (
				<form onSubmit={handleSubmit} className="login-form">
					<label className="input-label login-label">
						Username (email):
						<input
							type="email"
							required
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="input-text"
						/>
					</label>
					<label className="input-label login-label">
						Password (email):
						<input
							type="password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="input-text"
						/>
					</label>
					<div className="button-box">
						<button className="primary-button">login</button>
						<button
							type="button"
							className="primary-button"
							onClick={handleSendResetPasswordEmail}
						>
							Reset Password
						</button>
					</div>
				</form>
			)}
		</div>
	);
}

export default LoginForm;
