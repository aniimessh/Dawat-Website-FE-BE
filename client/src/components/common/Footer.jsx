import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Navitems } from "../../data/main";
import Footer1 from "../../assets/footer1.jfif";
import Footer2 from "../../assets/footer2.jfif";
import Footer3 from "../../assets/footer3.jfif";
import Footer4 from "../../assets/footer4.jfif";

const Footer = () => {
  return (
    <div className="bg-[#474747] h-[40vh]">
      <div className="w-10/12 m-auto">
        <div className="py-5 flex justify-between items-center">
          <div className="flex flex-col items-center">
            {/* First Section */}
            <p className="text-white font-philospher text-3xl">Dawat</p>
            <p className="text-white font-philospher text-lg w-3/5 text-center">
              "Flavors That Tell a Story, Memories That Last Forever."
            </p>
            <div className="flex items-center gap-x-6 mt-5">
              <Link to="https://www.instagram.com">
                <FaInstagram className="text-white text-lg" />
              </Link>
              <Link to="https://www.x.com">
                <FaTwitter className="text-white  text-lg" />
              </Link>
              <Link to="https://www.linkedin.in">
                <FaLinkedin className="text-white  text-lg" />
              </Link>
              <Link to="https://www.facebook.com">
                <FaFacebook className="text-white  text-lg" />
              </Link>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-x-5">
            {Navitems.map((item, index) => (
              <Link to={item.link} key={index} className="text-white text-lg">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="md:block hidden">
            <p className="text-white text-lg text-center">Follow us on instagram...</p>
            <div className="grid grid-cols-2 gap-4">
              <img src={Footer1} alt=""  className="h-[100px] aspect-video object-cover rounded-lg"/>
              <img src={Footer2} alt="" className="h-[100px] aspect-video object-cover rounded-lg" />
              <img src={Footer3} alt="" className="h-[100px] aspect-video object-cover rounded-lg"/>
              <img src={Footer4} alt="" className="h-[100px] aspect-video object-cover rounded-lg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
