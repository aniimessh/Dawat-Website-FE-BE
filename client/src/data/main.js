import CateringImage from "../assets/catering.jfif";
import WeddingImage from "../assets/wedding.jfif";
import EventsImage from "../assets/events.jfif";
import BirthdayImage from "../assets/birthdays.jfif";
export const Navitems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about-us",
  },
  {
    name: "Menu",
    link: "/menu",
  },
  {
    name: "Pages",
    link: "/pages",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
];

export const MenuItems = [
  {
    icon: "MdCoffee",
    title: "Breakfast",
    subtitle:
      "Morning bliss awaits with our delectable breakfast offerings, perfect for a flavorful start to your day.",
    linkto: "/breakfast-tab",
  },
  {
    icon: "MdFastfood",
    title: "Main Dishes",
    subtitle:
      "Savor our exquisite main dishes, crafted with passion and served with a dash of culinary magic.",
    linkto: "/main-dishes-tab",
  },
  {
    icon: "MdLocalDrink",
    title: "Drinks",
    subtitle:
      "Quench your thirst with our refreshing drinks, expertly crafted to complement your dining experience with flair.",
    linkto: "/drinks-tab",
  },
  {
    icon: "MdCake",
    title: "Dessert",
    subtitle:
      "Indulge in decadent desserts, a sweet symphony of flavors to delight your palate and satisfy your cravings.",
    linkto: "/dessert-tab",
  },
];

export const ServiceCardDetails = [
  {
    image: CateringImage,
    title: "Catering",
    subtitle:
      "Extend the experience beyond our doors with our catering services, bringing the same dedication to quality and flavor to your special events.",
  },
  {
    image: BirthdayImage,
    title: "Birthdays",
    subtitle:
      "Make your birthday celebrations unforgettable with our personalized catering services, adding a touch of culinary magic to your special day.",
  },
  {
    image: WeddingImage,
    title: "Wedding",
    subtitle:
      "Elevate your wedding day with our bespoke catering services, ensuring your special moments are infused with exquisite flavors and unforgettable experiences.",
  },
  {
    image: EventsImage,
    title: "Events",
    subtitle:
      "Elevate your events with our tailored catering services, where every dish is crafted with care to make your occasions truly memorable.",
  },
];
