import Footer from "../structures/footer";
import Navbar from "../structures/navbar";

function Unauthorized() {
  return (
    <div className="bg-[#EEE]">
      <div className="flex">
        <Navbar />
        <div className="w-[85%]">
          <h1 className="text-3xl text-red-600">Unauthorized !!!</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Unauthorized;
