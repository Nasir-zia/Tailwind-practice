import Image1 from "../../Images/1.jpg";
export default function Info() {
  return (
    <>
      <div
        className="container-fluid grid place-content-center"
        style={{
          backgroundImage: `url(${Image1} )`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          overflow: "hidden",
          height: "87vh",
        }}
      >
        <h1 className="text-white text-center  font-thin text-4xl">
          Flati Tailwind Css
        </h1>
        <p className="text-3xl font-thin text-center text-white mb-14">
          Create-Desgin-Code
        </p>
        {/* button */}
        <div className="grid place-content-center">
          <button className="bg-cyan-500 ... p-3  border-none w-32 hover:bg-red-800 text-white rounded font-bold">
            Our Protfolio
          </button>
        </div>
      </div>

      {/* 2nd section */}
      <div className="bg-slate-300 lg:h-52 md:h-52 grid place-content-center">    
        <div className="container  mx-auto  ">
        <p className=" font-light text-dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
          voluptatum. Dolor eos ipsa beatae nostrum quibusdam pariatur
          exercitationem necessitatibus, hic aspernatur provident ad ut ratione
          esse fugit optio! Nulla, commodi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nesciunt modi doloremque, incidunt
          veniam similique cum assumenda quo optio distinctio obcaecati numquam
          velit, officia, in blanditiis sint iusto ab. Eum, error!
        </p>
      </div>
      </div>

    </>
  );
}
