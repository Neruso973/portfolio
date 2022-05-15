import { LoaderFunction } from "@remix-run/server-runtime";
import Unauthorized from "~/components/pages/unauthorized";
import Footer from "~/components/structures/footer";
import Navbar from "~/components/structures/navbar";
import { requireUserId } from "~/session.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  const isAuth = await requireUserId(request);

  if (!isAuth) {
    return (
      <>
        <Unauthorized />
      </>
    );
  }
  return null;
};

function Admin() {
  return (
    <div className="bg-[#EEE]">
      <div className="flex">
        <Navbar />
        <div className="w-[85%]">
          <h1>coucou</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Admin;
