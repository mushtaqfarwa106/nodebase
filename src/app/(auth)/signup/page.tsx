import { RegisterForm } from "@/app/features/auth/components/register-form";
import { requireUnauth } from "@/lib/auth-utils";

const Page = async () => {
    // Redirects the user to "/" if they already have an active session
    await requireUnauth();

    return (
        <div>
            <RegisterForm />
        </div>
    );
};

export default Page;