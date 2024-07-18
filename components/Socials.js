//links
import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";

//icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href="/contact"
        className="btn rounded-full border-accent border-2 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
      >
        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
          Let&apos;s talk
        </span>
        <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
      </Link>
    </div>
  );
};

export default Socials;
