//next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none justify-end mt-20 mr-20">
      <div className="w-[500px] h-[500px]">
        <Image
          src="/avatar.png"
          width={500}
          height={500}
          alt=""
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Avatar;
