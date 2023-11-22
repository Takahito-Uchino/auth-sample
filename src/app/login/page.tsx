import { LoginButton, LogoutButton } from "@/components/button"
import { getServerSession } from "next-auth"


const Home = async () => {
    const session = await getServerSession()
    const user = session?.user

    return (
        <main style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
        }}>
            <div>
                <div>{`${JSON.stringify(user)}`}</div>
                {user ? <div>Logged in</div> : <div>Not Logged in</div>}
                {user ? <LogoutButton /> : <LoginButton />}
            </div>
        </main>
    )
}

export default Home