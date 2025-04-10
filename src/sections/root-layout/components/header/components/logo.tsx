import { FaSprayCan } from "react-icons/fa";
import { bebas } from "../../../../../ui/fonts";

const Logo = () => {
  return (
    <div className={`${bebas.className} flex flex-row items-center leading-none text-white ml-[-20px]`}>
      <FaSprayCan className="h-20 w-20 rotate-0" />
      <p className="text-[30px] ml-3">Perfumería Aliux</p>
    </div>
  );
};

export default Logo;
