import LoginForm from "./login-form/LoginForm";
import AdminPanel from "./admin-panel/AdminPanel";

const isLoggedIn = true;

export default function ConditionalRendering() {
    return isLoggedIn ? <AdminPanel /> : <LoginForm />;
}