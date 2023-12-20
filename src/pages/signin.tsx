import { Link } from "react-router-dom";
import Logo from "../components/logo";
import VideoSrc from "/amportshome.mp4";
import ThemeSwitch from "../components/ui/themeSwitch";
import { useRef } from "react";

export default function SignIn() {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <>
      <main className="flex flex-col items-stretch h-screen overflow-y-auto rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-gray-700 dark:text-gray-300">
        <div className="flex flex-wrap h-full">
          <div className="hidden w-full lg:flex lg:flex-col lg:justify-center lg:w-2/5">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
            >
              <source src={VideoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="flex flex-col justify-center w-full border-stroke dark:border-strokedark lg:w-3/5 lg:border-l-2">
            <div className="w-full max-w-2xl mx-auto p-4 sm:p-12.5 xl:p-17.5">
              <Link className="mb-8 flex w-full" to="/">
                <Logo styles="max-w-[140px]" />
              </Link>
              <h2 className="mb-1.5 text-2xl font-bold text-black dark:text-gray-300 sm:text-title-xl2">
                Automotive &amp; Port Excellence for Over 60 Years
              </h2>
              <span className="mb-9 block font-medium">
                Cultivating a Foundation of Excellence, Innovation, and
                Eco-Friendly Practices in the Automotive Service Industry
              </span>

              <form>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-gray-300">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <Link
                  to="/dashboard"
                  className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#ff5722"
                        d="M6 6H22V22H6z"
                        transform="rotate(-180 14 14)"
                      ></path>
                      <path
                        fill="#4caf50"
                        d="M26 6H42V22H26z"
                        transform="rotate(-180 34 14)"
                      ></path>
                      <path
                        fill="#ffc107"
                        d="M26 26H42V42H26z"
                        transform="rotate(-180 34 34)"
                      ></path>
                      <path
                        fill="#03a9f4"
                        d="M6 26H22V42H6z"
                        transform="rotate(-180 14 34)"
                      ></path>
                    </svg>
                  </span>
                  Sign in with Microsoft
                </Link>
              </form>
            </div>
          </div>
        </div>
        <ThemeSwitch />
      </main>
    </>
  );
}
