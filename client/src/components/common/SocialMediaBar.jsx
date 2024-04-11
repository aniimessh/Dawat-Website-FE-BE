import { FiPhoneCall, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";

const SocialMediaBar = () => {
  return (
    <div className="p-2 w-10/12 m-auto flex justify-between">
      <div className="flex items-center gap-x-6">
        <p className="flex items-center gap-x-1 text-white text-sm">
          <FiPhoneCall className="text-white" />
          (414)857-0107
        </p>
        <p className="flex items-center gap-x-1 text-white text-sm">
          <FiMail className="text-white" />
          yummy@bistrobliss
        </p>
      </div>
      <div  className="flex items-center gap-x-6">
        <Link to="https://www.instagram.com">
          <FaInstagram className="text-white"/>
        </Link>
        <Link to="https://www.x.com">
          <FaTwitter className="text-white"/>
        </Link>
        <Link to="https://www.linkedin.in">
          <FaLinkedin className="text-white"/>
        </Link>
        <Link to="https://www.facebook.com">
          <FaFacebook className="text-white"/>
        </Link>
      </div>
    </div>
  );
};

export default SocialMediaBar;
