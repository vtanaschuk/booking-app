import { Link, useLocation } from "react-router-dom";

export default function AccountNav() {
  const { pathname } = useLocation();
  let subpage = pathname.split("/")?.[2];
  if (subpage === undefined) {
    subpage = "profile";
  }
  function linkClasses(type = null) {
    const isActive = pathname === "/account" && type === "profile";
    let classes = "py-2 px-6 rounded-full ";
    if (type === subpage) {
      classes += " bg-primary text-white";
    } else {
      classes += " bg-gray-200";
    }
    return classes;
  }

  return (
    <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
      <Link className={linkClasses("profile")} to={"/account"}>
        My profile
      </Link>
      <Link className={linkClasses("booking")} to={"/account/booking"}>
        My Booking
      </Link>
      <Link className={linkClasses("places")} to={"/account/places"}>
        My accomodations
      </Link>
    </nav>
  );
}
