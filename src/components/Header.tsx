import { signIn,signOut, useSession } from "next-auth/react";

export default function Header() {
    const { data: sessionData } = useSession();

    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="flex-1 pl-5 text-3xl font-bold">
                {sessionData?.user?.name ? `Notes for ${sessionData?.user?.name}` : ""}
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown-end dropdown">
                    {sessionData?.user ? (
                        <label tabIndex={0}
                        className="btn-ghost btn-circle avater btn"
                        onClick={() => void signOut()}>
                            <div className="w-10 rounded-full">
                                <img src={sessionData?.user?.image ?? ""} alt="" style={{borderRadius: 50}}/>
                            </div>
                        </label>
                    ) : (
                        <button className="btn-ghost rounded-btn btn" onClick={() => void signIn()}>
                            Sign in
                        </button>
                    )}
                </div>

            </div>
        </div>
    )
}