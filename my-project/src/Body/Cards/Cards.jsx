import { FaPen } from "react-icons/fa";
import { TbBrandShopee } from "react-icons/tb";
import { IoCreate } from "react-icons/io5";
import { MdSupport } from "react-icons/md";
export default function Cards() {
  return (
    <div className="container mx-auto  grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-10 rounded-l-lg ">
      <div className="sm:w-full   bg-red-200 shadow   md:mx-auto  text-center">
      <FaPen  className = 'text-red-500 bg-white  p-4 rounded-full text-3xl opacity-75 mt-3'/>
        <h3 className="mx-auto">Desgin</h3>
        <h4 className="text-green-500">Build For Nerds</h4>
        <p className="mx-auto p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          totam est. Labore est quibusdam corrupti? Iure tempora, at ullam eos
          velit, sapiente nobis sit vitae quia harum tempore nulla dolorum!
        </p>
      </div>

      <div className="sm:w-full   bg-red-200 shadow   md:mx-auto  text-center">
      <TbBrandShopee  className = 'text-red-500 bg-white  p-5 text-3xl rounded-full opacity-75 mt-3'/>
        <h3 className="mx-auto">Shop</h3>
        <h4 className="text-green-500">Build For Nerds</h4>
        <p className="mx-auto p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          totam est. Labore est quibusdam corrupti? Iure tempora, at ullam eos
          velit, sapiente nobis sit vitae quia harum tempore nulla dolorum!
        </p>
      </div>
      <div className="sm:w-full   bg-red-200 shadow   md:mx-auto  text-center">
      <IoCreate   className = 'text-red-500 bg-white  p-5 text-3xl rounded-full opacity-75 mt-3'/>
        <h3 className="mx-auto">Create</h3>
        <h4 className="text-green-500">Build For Nerds</h4>
        <p className="mx-auto p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          totam est. Labore est quibusdam corrupti? Iure tempora, at ullam eos
          velit, sapiente nobis sit vitae quia harum tempore nulla dolorum!
        </p>
      </div>
      <div className="sm:w-full   bg-red-200 shadow   md:mx-auto  text-center">
      <MdSupport  className = 'text-red-500 bg-white  p-5 text-3xl rounded-full opacity-75 mt-3'/>
        <h3 className="mx-auto">Support</h3>
        <h4 className="text-green-500">Build For Nerds</h4>
        <p className="mx-auto p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          totam est. Labore est quibusdam corrupti? Iure tempora, at ullam eos
          velit, sapiente nobis sit vitae quia harum tempore nulla dolorum!
        </p>
      </div>
    </div>
  );
}
