import Footer from "~/components/structures/footer";
import Navbar from "~/components/structures/navbar";

function Portfolio() {
  return (
    <div className="bg-[#EEE]">
      <div className="flex">
        <Navbar />
        <div className="w-[85%]"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
