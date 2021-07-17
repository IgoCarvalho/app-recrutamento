import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { auth, firebase } from '../services/firebase';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log('auth: ', authUser);

      let userData;

      if (authUser) {
        userData = {
          id: authUser.uid,
          name: authUser.displayName,
        };
      }

      setUser(userData);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    console.log('auth:google: ', result);
  }

  async function loginWithEmailAndPassword({ email, password }) {
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.message);
    }
  }
  async function cadastroWithEmailAndPassword({ email, password, name }) {
    const result = await auth.createUserWithEmailAndPassword(email, password);

    if (result.user) {
      await result.user.updateProfile({
        displayName: name,
      });

    }

    console.log({ result });
  }

  async function signOut() {
    await auth.signOut();
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loginWithGoogle,
        signOut,
        loginWithEmailAndPassword,
        cadastroWithEmailAndPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
