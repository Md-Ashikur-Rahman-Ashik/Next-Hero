import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  session: {
    strategy: "jwt",
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
          const currentUser = users.find((user) => user.email === email);
          if (currentUser) {
            if (currentUser.password === password) {
              return currentUser;
            }
          }
        } else {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };

const users = [
  {
    id: 1,
    name: "Ashik",
    email: "ashik@gmail.com",
    password: "password",
  },
];
