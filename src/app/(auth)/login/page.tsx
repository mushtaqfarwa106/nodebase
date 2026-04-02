import { LoginForm } from "@/app/features/auth/components/login-form";
import { requireUnauth } from "@/lib/auth-utils";

const Page = async () => {
    // This utility checks if the user is already logged in.
    // If they are, it redirects them to the home page ("/") 
    // so they don't see the login form again.
    await requireUnauth();

    return (
        <div>
            <LoginForm />
        </div>
    );
};

export default Page;