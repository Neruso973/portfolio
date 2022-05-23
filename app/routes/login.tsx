import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useSearchParams } from "@remix-run/react";
import * as React from "react";

import { createUserSession, getUserId } from "~/session.server";
import { verifyLogin } from "~/models/user.server";
import { safeRedirect, validateEmail } from "~/utils";
import Navbar from "~/components/structures/navbar";
import Footer from "~/components/structures/footer";
import {
  errorNotification,
  successNotification,
} from "~/notifications/notifications";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/admin-dashboard");
  return json({});
};

interface ActionData {
  errors?: {
    username?: string;
    password?: string;
  };
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  const redirectTo = safeRedirect(
    formData.get("redirectTo"),
    "/admin-dashboard"
  );
  const remember = formData.get("remember");

  if (!validateEmail(username)) {
    return json<ActionData>(
      { errors: { username: "username is invalid" } },
      { status: 400 }
    );
  }

  if (typeof password !== "string") {
    return json<ActionData>(
      { errors: { password: "Password is required" } },
      { status: 400 }
    );
  }

  if (password.length < 8) {
    return json<ActionData>(
      { errors: { password: "Password is too short" } },
      { status: 400 }
    );
  }

  const user = await verifyLogin(username, password);

  if (!user) {
    return json<ActionData>(
      { errors: { username: "Invalid username or password" } },
      { status: 400 }
    );
  }

  return createUserSession({
    request,
    userId: user.id,
    remember: remember === "on" ? true : false,
    redirectTo,
  });
};

export const meta: MetaFunction = () => {
  return {
    title: "Login",
  };
};

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/admin-dashboard";
  const actionData = useActionData() as ActionData;
  const usernameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (actionData?.errors?.username) {
      usernameRef.current?.focus();
      errorNotification(`${actionData.errors.username}`);
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
      errorNotification(`${actionData.errors.password}`);
    }
    return () => successNotification("Welcome back Admin!");
  }, [actionData]);

  return (
    <>
      <div className="flex">
        <Navbar />
        <div className="flex min-h-full w-[85%] flex-col justify-center bg-[#EEE]">
          <div className="mx-auto h-[26rem] w-[40rem] rounded-3xl bg-white px-8">
            <h1 className="mt-8 text-center text-3xl font-semibold text-[#1B2271]">
              Admin Auth
            </h1>
            <div className="mx-auto my-2 h-1 w-[30%] bg-[#1B2271]"></div>
            <Form method="post" className="m-8 space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                ></label>
                <div className="mt-1">
                  <input
                    placeholder="username"
                    ref={usernameRef}
                    id="username"
                    required
                    autoFocus={true}
                    name="username"
                    type="text"
                    autoComplete="username"
                    aria-invalid={
                      actionData?.errors?.username ? true : undefined
                    }
                    aria-describedby="username-error"
                    className="ml-28 mt-6 w-72 rounded-3xl bg-[#EEE] px-2 py-1 text-lg"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                ></label>
                <div className="mt-1">
                  <input
                    placeholder="password"
                    id="password"
                    ref={passwordRef}
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    aria-invalid={
                      actionData?.errors?.password ? true : undefined
                    }
                    aria-describedby="password-error"
                    className="my-6 ml-28 w-72 rounded-3xl  bg-[#EEE] px-2 py-1 text-lg"
                  />
                </div>
              </div>

              <input type="hidden" name="redirectTo" value={redirectTo} />
              <button
                type="submit"
                className="mt-24 ml-72 h-11 w-[40%] cursor-pointer rounded-full bg-[#0073DD] py-1 text-white transition-all duration-300 ease-in-out hover:scale-110"
              >
                Log in
              </button>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
