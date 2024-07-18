import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0  z-1 w-[200px] xl:w-[200px] opacity-50">
      <Image src='/{basePath}/top-left-img.png' width={400} height={400} alt="" />
    </div>);
};

export default TopLeftImg;
