import About from "~/components/about";
import Footer from "~/components/structures/footer";
import Navbar from "~/components/structures/navbar";

function index() {
  return (
    <div className="bg-[#EEE]">
      <div className="flex">
        <Navbar />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default index;
