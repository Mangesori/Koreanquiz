import React from "react";
import Navitem from "./Navitem";
import DropdownWrapper from "@/components/shared/wrappers/DropdownWrapper";
import DropdownVideos from "./DropdownVideos";
import DropdownBlog from "./DropdownBlog";
import DropdownLessons from "./DropdownLessons";
import DropdownDemoes from "./DropdownDemoes";
import DropdownDashboard from "./DropdownDashboard";
import useAuth from "@/hooks/useAuth"; // Add this import

const NavItems = () => {
  const { user } = useAuth(); // Add this hook

  const baseNavItems = [
    {
      id: 1,
      name: "Quiz",
      path: "/quiz",
      isRelative: false,
    },
    {
      id: 2,
      name: "Videos",
      path: "/videos",
      dropdown: <DropdownVideos />,
      isRelative: false,
    },
    /*{
      id: 3,
      name: "Blog",
      path: "/blog",
      dropdown: <DropdownBlog />,
      isRelative: false,
    },*/
    /*{
      id: 4,
      name: "Book Lessons",
      path: "/lessons/purchase",
      dropdown: <DropdownLessons />,
      isRelative: true,
    },*/
    /*{
      id: 5,
      name: "Demos",
      path: "/",
      dropdown: <DropdownDemoes />,
      isRelative: false,
    },*/
  ];

  // Add Dashboard menu only for admin users
  const navItems =
    user?.role === "admin"
      ? [
          ...baseNavItems,
          {
            id: 6,
            name: "Dashboard",
            path: "/dashboards/admin-dashboard", // Changed from instructor to admin
            dropdown: <DropdownDashboard />,
            isRelative: true,
          },
        ]
      : baseNavItems;

  return (
    <div className="hidden lg:block lg:col-start-3 lg:col-span-7">
      <ul className="nav-list flex justify-center items-center">
        {navItems.map((navItem, idx) => (
          <Navitem key={idx} idx={idx} navItem={{ ...navItem, idx: idx }}>
            <DropdownWrapper>{navItem.dropdown}</DropdownWrapper>
          </Navitem>
        ))}
      </ul>
    </div>
  );
};

const SearchIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

export default NavItems;
