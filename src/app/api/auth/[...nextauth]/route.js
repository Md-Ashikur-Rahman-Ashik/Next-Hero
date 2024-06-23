import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          required: true,
          placeholder: "Your Email",
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        if (!credentials) {
          return null;
        } else if (email) {
          // const currentUser = users.find((user) => user.email === email);
          const db = await connectDB();
          const currentUser = await db.collection("users").findOne({ email });
          if (currentUser) {
            if (currentUser.password === password) {
              return { ...currentUser };
            }
          }
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.type = user.type;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.type = token.type;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// const users = [
//   {
//     id: 1,
//     name: "Ashik",
//     email: "ashik@gmail.com",
//     password: "password",
//     type: "admin",
//   },
//   {
//     id: 2,
//     name: "Ashikur Rahman",
//     email: "ashik@palestine.com",
//     password: "AshPatient@P",
//     type: "moderator",
//   },
//   {
//     id: 3,
//     name: "Ashikur Rahman Ashik",
//     email: "ashikur.rahman@palestine.com",
//     password: "AshPatient@P",
//     type: "member",
//   },
// ];
