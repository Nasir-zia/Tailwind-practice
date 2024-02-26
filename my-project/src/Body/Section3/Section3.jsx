import img2 from "../../Images/R.png";
import img3 from '../../Images/OIP.jpg';
import img4 from '../../Images/1.jpg';
export default function Section3() {
  return (
    <div className="container mt-11  mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-2 md:gird-cols-2  ">
      {/* 1 */}
      <div className="w-full ">
        <h1 className="font-thin">Recent Work</h1>
        <p className="font-thin text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </p>
        <p className="font-thin">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          nesciunt repellendus, enim ullam accusantium obcaecati voluptatibus
          molestias dicta rem qui
        </p>
        <button className="bg-cyan-500 ... p-3  border-none w-32 hover:bg-red-800 text-white rounded font-bold">
          Veiw Protfolio
        </button>
      </div>
      {/* 2 */}
      <div className="max-w-sm  rounded overflow-hidden bg-gray-400 shadow  ">
        <img className="w-32 mx-16 mt-3  "  src={img2} alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
    
      </div>
      {/* 3 */}
      <div className="max-w-sm  rounded overflow-hidden bg-gray-400 shadow">
        <img className="w-32 mx-16 mt-3" src={img3} alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
    
      </div>
      {/* 4 */}
      <div className="max-w-sm  rounded overflow-hidden bg-gray-400 shadow">
        <img className="w-32 mx-16 mt-3" src={img4} alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
    
      </div>
    </div>
  );
}
