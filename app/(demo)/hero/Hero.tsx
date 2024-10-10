import Image from "next/image";

export const Hero = () => (
	<section className="relative bg-gradient-to-r from-[#007BFF] to-[#00C1EB] aspect-[4/1] flex items-center justify-center">
		<h2 className="-mt-[8%] text-4xl font-extrabold text-blue-50">
			<em>Howdy</em>, going somewhere?
		</h2>
		<Image src="/illustration.png" alt="" fill className="object-contain" priority />
	</section>
)
