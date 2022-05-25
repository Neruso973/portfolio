import { Link, useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/server-runtime";
import { useEffect } from "react";
import NewProject from "~/components/pages/new-project";
import Footer from "~/components/structures/footer";
import Navbar from "~/components/structures/navbar";
import { successNotification } from "~/notifications/notifications";
import { getSession, requireUserId } from "~/session.server";

type Loader = any;

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  const session = await getSession(request);
  return session;

  return null;
};

function Admin() {
  const data = useLoaderData() as Loader;
  const user = data.data.userId;
  // const technos = data.technos
  // const allTechnos = data.allTechnos
  console.log(user);

  useEffect(() => {
    if (user) {
      successNotification(`welcome Admin ${user}`);
    }
  }, []);
  return (
    <div className="bg-[#EEE]">
      <div className="flex">
        <Navbar />
        <div className="w-[85%]">
          <NewProject />
        </div>
      </div>
      <Link
        to="/logout"
        className="absolute bottom-5 right-5 h-12 w-[13%] rounded-full bg-[#DE685E] py-1 pt-2 text-center text-xl text-white transition-all duration-300 ease-in-out hover:scale-110 "
        onClick={() => successNotification("bye")}
      >
        Déconnexion
      </Link>
      <Footer />
    </div>
  );
}

export default Admin;
