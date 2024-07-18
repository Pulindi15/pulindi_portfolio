//next image
import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-43 -bottom-0 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[150px] xl:w-[200px]">
      <Image
        src={"/{basePath}/bulb.png"}
        width={160}
        height={100}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Bulb;
