import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ToastContainer } from 'react-toastify';
import notification from 'react-toastify/dist/ReactToastify.css';
import tailwindStylesheetUrl from "./styles/tailwind.css";
import { getUser } from "./session.server";

import logo from "../public/img/Logo.svg";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: notification },
    { rel: "icon", href: `${logo}` },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Nelson NTEPP",
  viewport: "width=device-width,initial-scale=1",
});

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({
    user: await getUser(request),
  });
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <ToastContainer />
      </body>
    </html>
  );
}
