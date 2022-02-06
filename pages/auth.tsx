import Gun from "gun";
import "gun/sea";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function Auth() {

  const [RecoverPass, setRecoverPass] = useState(false);
  const [CreateAccount, setCreateAccount] = useState(false);

  return (
    <div className="bg-light dark:bg-gray-600 font-mono min-h-screen max-h-screen">
      <header className="flex p-2 sm:py-5 sm:px-8 md:py-10 md:px-24 lg:px-52">
        <Link href="/">
          <a className="text-2xl font-semibold font-serif dark:text-zinc-200 text-gray-800">
            Ultimate Social Media
          </a>
        </Link>
      </header>
      <div className="mx-auto w-full max-w-[400px] space-y-4 text-center">

        {
          RecoverPass ? (
            <ForgotPassword />
          ) : CreateAccount ? (
            <NewUser />
          ) : (
            <Login />
          )
        }

        <div className="text-center text-xl flex flex-col space-y-2">
          <button onClick={(e) => { e.preventDefault(); setCreateAccount(!CreateAccount); }} className="text-gray-400 hover:text-gray-500 font-bold">
            Create account
          </button>
          <button onClick={(e) => { e.preventDefault(); setRecoverPass(!RecoverPass); }} className="text-gray-400 hover:text-gray-500 font-bold">
            Forgot password?
          </button>
        </div>
        <div className="text-center text-gray-400">
          This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" className="hover:underline text-blue-600">Privacy Policy</a> and <a href="https://policies.google.com/terms" className="hover:underline text-blue-600">Terms of service</a> apply.
        </div>
      </div >
    </div >
  )
}

const Login = () => {

  const router = useRouter();
  const db = Gun();
  const user = db.user().recall({ sessionStorage: true });

  const [alert, setAlert] = useState('');
  const signin = (e) => {
    e.preventDefault();
    const { email, pass } = e.target.elements;
    user.auth(email.value, pass.value, (ctk: any) => {
      if (ctk.err) {
        console.log(ctk);
        setAlert(ctk.err);
      } else {
        console.log(ctk);
        router.push('/');
      }
    });
  }

  return (
    <>
      {/* <div className="flex pt-7">
        <button onClick={() => signInProvider('google', { callbackUrl: "/" })}
                className="formButton">
                <img src="https://img.icons8.com/color/30/000000/google-logo.png" alt="google icon" />
                Continue with google
              </button>
      </div>
      <p className="text-xl text-gray-400 font-bold">or</p> */}

      <h1 className="text-5xl font-extrabold mb-20">Log In</h1>
      <form onSubmit={(e) => { signin(e) }} className="flex flex-col text-xl space-y-4">
        <input type="email" id="email" className="rounded-lg focus:ring-4 ring-gray-700 hover:opacity-80 focus:shadow-innerDark shadow-xl p-3 w-full outline-none tracking-wide placeholder-gray-400" placeholder="Email" />
        <input type="password" id="pass" className="rounded-lg focus:ring-4 ring-gray-700 hover:opacity-80 focus:shadow-innerDark shadow-xl p-3 w-full outline-none tracking-wide placeholder-gray-400" placeholder="Password" />
        <button type="submit" className="flex active:ring-4 ring-gray-700 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-300 dark:bg-gray-700 hover:brightness-90 dark:hover:bg-gray-800 items-center justify-evenly text-xl font-semibold w-full mx-auto rounded-lg p-3">
          Log in
        </button>
        {
          alert && (
            <div className="text-red-600">
              {alert}
            </div>
          )
        }
      </form>
    </>
  )
}

const NewUser = () => {

  const router = useRouter();
  const [alert, setAlert] = useState('');


  const db = Gun();
  const user = db.user().recall({ sessionStorage: true });

  const createUser = (e) => {
    e.preventDefault();
    const { email, pass } = e.target.elements;
    user.create(email.value, pass.value, (ctk: any) => {
      if (ctk.err) {
        console.log(ctk);
        setAlert(ctk.err);
      } else {
        user.auth(email.value, pass.value, (ctk: any) => {
          if (ctk.err) {
            console.log(ctk);
            setAlert(ctk.err);
          } else {
            user.recall({ sessionStorage: true });
            router.push('/');
          }
        }
        );
      };
    });
  }

  return (
    <>
      <h1 className="text-5xl font-extrabold mb-20">Create account</h1>
      <form onSubmit={(e) => { createUser(e) }} className="flex flex-col text-xl space-y-4">
        <input type="text" id="username" className="rounded-lg focus:ring-4 ring-gray-700 hover:opacity-80 focus:shadow-innerDark shadow-xl p-3 w-full outline-none tracking-wide placeholder-gray-400" placeholder="Username" />
        <input type="email" id="email" className="rounded-lg focus:ring-4 ring-gray-700 hover:opacity-80 focus:shadow-innerDark shadow-xl p-3 w-full outline-none tracking-wide placeholder-gray-400" placeholder="Email" />
        <input type="password" id="pass" className="rounded-lg focus:ring-4 ring-gray-700 hover:opacity-80 focus:shadow-innerDark shadow-xl p-3 w-full outline-none tracking-wide placeholder-gray-400" placeholder="Password" />
        <input type="password" id="confirmPass" className="rounded-lg focus:ring-4 ring-gray-700 hover:opacity-80 focus:shadow-innerDark shadow-xl p-3 w-full outline-none tracking-wide placeholder-gray-400" placeholder="Confirm password" />
        <button type="submit" className="flex active:ring-4 ring-gray-700 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-300 dark:bg-gray-700 hover:brightness-90 dark:hover:bg-gray-800 items-center justify-evenly text-xl font-semibold w-full mx-auto rounded-lg p-3">
          Create account
        </button>
        {
          alert && (
            <div className="text-red-600">
              {alert}
            </div>
          )
        }
      </form>
    </>
  )
}

const ForgotPassword = () => {
  return (
    <div >
      <h1 className="text-5xl font-extrabold mb-20">Forgot password</h1>
    </div>
  )
};


export default Auth;

