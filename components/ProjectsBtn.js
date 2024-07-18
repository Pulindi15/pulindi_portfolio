//next image
import Image from "next/image";

//next link
import Link from "next/link";

//icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/contact"}
        className="relative w-[155px] h-[155px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group mb-20"
      >
        <Image
          src={"/rounded-text.png"}
          width={111}
          height={118}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[111px] max-h-[118px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
