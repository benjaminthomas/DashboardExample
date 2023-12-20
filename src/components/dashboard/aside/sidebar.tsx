import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SidebarLinkGroup from "./sidebarLinkGroup";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-[9999] flex h-screen w-72.5 flex-col overflow-y-hidden bg-boxdark-2 duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <header className="flex items-center justify-between gap-2 px-6 py-6">
        <NavLink to="/">
          <img src="/logo_light.svg" alt="logo" className="max-w-[120px]" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current text-gray-50"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </header>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Metrics --> */}
              <li>
                <NavLink
                  to="/dashboard/metrics"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("metrics") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_130_9801)">
                      <path
                        d="M10.8563 0.55835C10.5188 0.55835 10.2095 0.8396 10.2095 1.20522V6.83022C10.2095 7.16773 10.4907 7.4771 10.8563 7.4771H16.8751C17.0438 7.4771 17.2126 7.39272 17.3251 7.28022C17.4376 7.1396 17.4938 6.97085 17.4938 6.8021C17.2688 3.28647 14.3438 0.55835 10.8563 0.55835ZM11.4751 6.15522V1.8521C13.8095 2.13335 15.6938 3.8771 16.1438 6.18335H11.4751V6.15522Z"
                        fill=""
                      />
                      <path
                        d="M15.3845 8.7427H9.1126V2.69582C9.1126 2.35832 8.83135 2.07707 8.49385 2.07707C8.40947 2.07707 8.3251 2.07707 8.24072 2.07707C3.96572 2.04895 0.506348 5.53645 0.506348 9.81145C0.506348 14.0864 3.99385 17.5739 8.26885 17.5739C12.5438 17.5739 16.0313 14.0864 16.0313 9.81145C16.0313 9.6427 16.0313 9.47395 16.0032 9.33332C16.0032 8.99582 15.722 8.7427 15.3845 8.7427ZM8.26885 16.3083C4.66885 16.3083 1.77197 13.4114 1.77197 9.81145C1.77197 6.3802 4.47197 3.53957 7.8751 3.3427V9.36145C7.8751 9.69895 8.15635 10.0083 8.52197 10.0083H14.7938C14.6813 13.4958 11.7845 16.3083 8.26885 16.3083Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_130_9801">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.052124)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Metrics
                </NavLink>
              </li>
              {/* <!-- Menu Item Metrics --> */}
              <SidebarLinkGroup
                activeCondition={pathname === "/" || pathname.includes("isuzu")}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === "/" || pathname.includes("isuzu")) &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_6_5)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.00371 0C13.9592 0 18 4.04101 18 9.00371C18 13.9517 13.9591 18.0001 9.00371 18.0001C4.04832 18.0001 2.33759e-09 13.9517 2.33759e-09 9.00371C-0.000112329 4.0409 4.04832 0 9.00371 0Z"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.00371 1.14307C13.3249 1.14307 16.8573 4.67522 16.8573 9.00391C16.8573 13.3252 13.325 16.8499 9.00371 16.8499C4.68243 16.8499 1.15039 13.3251 1.15039 9.0038C1.15039 4.67522 4.68243 1.14307 9.00371 1.14307ZM3.74592 4.77845L6.56286 12.0862L7.59519 9.41673H10.3015L11.3337 12.0862L14.1802 4.68993C13.6779 4.08395 13.074 3.56997 12.3956 3.17099L10.4194 8.613H7.63192L5.64848 3.14875C4.91844 3.56909 4.27691 4.12221 3.74592 4.77845ZM15.316 6.61462L12.1081 14.9842C14.2615 13.856 15.7435 11.5996 15.7435 9.00391C15.7435 8.16322 15.5961 7.35938 15.316 6.61462ZM10.707 15.5298L10.6851 15.3602L8.94462 10.8473L7.20438 15.3602L7.19708 15.5004C7.77222 15.6625 8.3769 15.7437 9.00371 15.7437C9.59356 15.7437 10.1614 15.67 10.707 15.5298ZM5.76643 14.9104L2.63991 6.76211C2.38918 7.46261 2.25641 8.21478 2.25641 9.0038C2.25641 11.5405 3.67223 13.7673 5.76643 14.9104ZM9.00371 2.2565C9.59356 2.2565 10.1761 2.3303 10.7292 2.47768L9.02584 7.18976L7.31503 2.47038C7.86656 2.32767 8.43402 2.2558 9.00371 2.2565Z"
                              fill="#003263"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_6_5">
                              <rect width="18" height="18" fill="#003263" />
                            </clipPath>
                          </defs>
                        </svg>
                        Volkswagen
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/dashboard/isuzu/incoming"
                              className={({ isActive }) =>
                                "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " +
                                (isActive && "!text-white")
                              }
                            >
                              Incoming
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/dashboard/isuzu/outgoing"
                              className={({ isActive }) =>
                                "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " +
                                (isActive && "!text-white")
                              }
                            >
                              Outgoing
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Volkswagen --> */}
              <li>
                <NavLink
                  to="/dashboard/volkswagen"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("volkswagen") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="4"
                    viewBox="0 0 18 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_6_3)">
                      <path d="M7.83806 3.07517C7.90171 3.07517 8.28876 3.0731 8.60121 3.05133C8.97881 3.02498 9.17343 2.89551 9.31604 2.70999C9.49291 2.48039 9.49176 2.04984 9.49153 1.71481C9.49131 1.34066 9.49649 0.256637 9.49487 0.159974C9.49361 0.0629513 9.4569 0.0125364 9.34596 0.0134524C9.23489 0.0141528 8.92174 0.0134524 8.81424 0.0143863L8.62273 0.0134524C8.51168 0.0125543 8.47508 0.0629513 8.47348 0.159974V0.263893C8.47508 0.378642 8.47197 1.47232 8.4715 1.72874V1.84233C8.46852 2.07851 8.43975 2.30822 8.10576 2.34378C7.96166 2.35898 7.89562 2.36577 7.71709 2.36577C7.53839 2.36577 7.47255 2.35898 7.32649 2.34378C6.99261 2.30867 6.97237 2.07851 6.96926 1.84233V1.72874C6.96879 1.47232 6.96568 0.378642 6.96707 0.263893V0.159974C6.96568 0.0629513 6.92887 0.0125364 6.81803 0.0134524L6.62629 0.0143863C6.51879 0.0134524 6.20587 0.0141528 6.09469 0.0134524C5.98388 0.0125543 5.94715 0.0629513 5.94589 0.159974C5.94427 0.256637 5.94542 1.34066 5.94498 1.71481C5.94476 2.04984 5.94383 2.48039 6.12048 2.70999C6.26273 2.89553 6.45469 3.02498 6.83103 3.05133C7.14351 3.07332 7.51904 3.07517 7.60226 3.07517H7.83808H7.83806ZM1.05094 2.9345C1.04875 3.0398 1.01768 3.08136 0.909841 3.08389C0.801648 3.087 0.272354 3.08528 0.175925 3.08447C0.079926 3.08343 0.0207824 3.0543 0.0205489 2.95131C0.0198664 2.84842 0.0198664 0.261324 0.0191659 0.163045C0.0189324 0.0652323 0.0650907 0.0188584 0.166477 0.0219476C0.267648 0.0243723 0.787495 0.0191997 0.925485 0.0216064C1.02987 0.0207982 1.05439 0.0810015 1.05473 0.188495C1.05726 0.33304 1.05347 2.82977 1.05094 2.9345ZM15.473 1.88793C15.475 2.13075 15.5337 2.29326 15.812 2.33654C16.0348 2.35955 16.3362 2.36427 16.5675 2.3408C16.7793 2.31754 16.9424 2.23169 16.9519 1.99195C16.9626 1.78952 16.9636 1.75464 16.9643 1.54115C16.9654 1.02303 16.9598 0.270448 16.9615 0.196577L16.9624 0.165146C16.9607 0.0504149 17.013 0.00195769 17.1102 0.00195769L17.1683 0C17.2789 0.000933942 17.7239 0.00197565 17.8317 0.00197565C17.9288 0.00197565 17.9812 0.0504149 17.9796 0.165164L17.9782 0.200959C17.9802 0.309135 17.9769 1.45532 17.9758 1.79355C17.9697 1.96342 17.9576 2.3591 17.8267 2.60999C17.7128 2.82774 17.5088 2.99519 17.1621 3.0296C16.4956 3.096 15.8879 3.06839 15.42 3.04882C15.0722 3.03086 14.8481 2.95295 14.6622 2.74636C14.4519 2.50952 14.4408 2.10475 14.4439 1.64049C14.4399 0.616078 14.4368 0.320881 14.4384 0.223158V0.165146C14.4368 0.0504149 14.4891 0.00195769 14.5863 0.00195769L14.6441 0C14.7557 0.000933942 15.2174 0.00197565 15.3254 0.00197565C15.4222 0.00197565 15.475 0.0504149 15.473 0.165164C15.4714 0.280362 15.4726 1.59226 15.473 1.88125M10.2889 0.0110277C10.3929 0.00793851 12.2537 0.0101297 12.8354 0.0133446C13.3506 0.0190919 13.541 0.0924064 13.6809 0.279554C13.8422 0.495798 13.8589 0.766713 13.7285 0.989637C13.6349 1.14949 13.4619 1.28898 13.2022 1.41569C12.9961 1.52159 12.6352 1.68225 12.2824 1.8375C11.81 2.04616 11.3822 2.22684 11.3103 2.26449C11.2129 2.31558 11.2497 2.39211 11.3271 2.39096C11.529 2.38854 13.4781 2.37266 13.5821 2.37243C13.6866 2.37232 13.7206 2.40997 13.7206 2.52216C13.7204 2.63955 13.7215 2.84026 13.7217 2.9313C13.7193 3.04075 13.6844 3.07068 13.5807 3.07172C13.4623 3.07297 11.386 3.07355 11.2383 3.07423C10.9101 3.07344 10.5721 3.0747 10.3705 2.97699C10.1187 2.85465 10.0335 2.6094 10.0333 2.43746C10.0452 2.01843 10.2788 1.88423 10.6995 1.68927C11.1673 1.47692 12.5484 0.879504 12.6307 0.841284C12.7327 0.793761 12.701 0.700295 12.6064 0.70342C12.5338 0.704911 10.4183 0.715723 10.3138 0.715633C10.2097 0.715274 10.1434 0.698463 10.1434 0.597418C10.1436 0.496839 10.1425 0.244567 10.1425 0.140756C10.1425 0.0364776 10.1844 0.0143683 10.2889 0.0110277ZM4.8255 1.5868C4.35756 1.39244 2.99216 0.960524 2.81101 0.870865C2.72377 0.833328 2.72965 0.721937 2.84772 0.721937C3.04936 0.724919 5.05074 0.728834 5.15526 0.729535C5.25962 0.729768 5.30361 0.689124 5.30361 0.576691C5.30406 0.45941 5.30325 0.244208 5.30187 0.149718C5.30048 0.0536298 5.26584 0.017242 5.17952 0.0170085C5.09322 0.0170085 2.78177 0.0197744 2.78177 0.0197744C2.1367 0.0182837 1.97121 0.113223 1.78845 0.332699C1.55018 0.619042 1.62591 1.00668 1.76264 1.20658C1.91663 1.43019 2.17088 1.52904 2.5754 1.67061C3.06545 1.83001 4.21955 2.23593 4.21955 2.23593C4.32532 2.28162 4.31726 2.39245 4.18665 2.39245C4.18665 2.39245 1.98511 2.37264 1.88084 2.37243C1.77634 2.37232 1.72535 2.42329 1.7249 2.52423C1.7249 2.62517 1.72397 2.81011 1.72352 2.91505C1.72352 3.01886 1.75366 3.07813 1.85817 3.08183C1.96198 3.0854 3.85496 3.07826 4.43707 3.07711C4.87994 3.07596 5.30772 2.93912 5.39553 2.45C5.44814 2.02854 5.26973 1.76727 4.8255 1.5868Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_6_3">
                        <rect width="18" height="3.096" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Isuzu
                </NavLink>
              </li>
              {/* <!-- Menu Item Volkswagen --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
