import Footer from "./Footer";

function Homepage() {
  return (
    <div className="relative h-screen">
      <video
        className="w-full h-full absolute object-cover"
        src="/ShoppingVideo.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col gap-4"
        style={{ backdropFilter: "blur(3px)" }}
      >
        <h1 className="text-5xl text-white font-bold font-serif md:text-6xl lg:text-7xl ml-[100px]">
          Welcome to the ECOM
        </h1>
        <p className="text-white text-2xl md:text-3xl lg:text-4xl">
          Elevate Your Shopping Experience
        </p>
      </div>
    </div>
  );
}

export default Homepage;
