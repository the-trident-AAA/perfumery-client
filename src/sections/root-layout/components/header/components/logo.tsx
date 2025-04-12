import { FaSprayCan } from "react-icons/fa"
import { bebas } from "../../../../../ui/fonts"

const Logo = () => {
	return (
		<div
			className={`${bebas.className} flex flex-row items-center leading-none text-white ml-[-20px]`}
		>
			<FaSprayCan className="size-12 xs:size-16 sm:size-20 rotate-0" />
			<p className="text-xl sm:text-[30px] ml-3">Perfumería Aliux</p>
		</div>
	)
}

export default Logo
