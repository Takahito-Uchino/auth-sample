import NextAuth from "next-auth/next"
import Github from "next-auth/providers/github"

const options = {
    providers: [
        Github({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        })
    ]
};

export function GET(req, res) {
    return NextAuth(req, res, options);
}

export function POST(req, res) {
    return NextAuth(req, res, options);
}
