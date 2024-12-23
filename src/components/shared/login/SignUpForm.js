import React from "react";
import Link from "next/link"; // 추가

const SignUpForm = () => {
  return (
    <div className="transition-opacity duration-150 ease-linear">
      {/* heading   */}
      <div className="text-center">
        <h3 className="text-size-32 font-bold text-blackColor dark:text-blackColor-dark mb-2 leading-normal">
          Sign Up
        </h3>
        <p className="text-contentColor dark:text-contentColor-dark mb-15px">
          Already have an account?{" "}
          <Link // <a> 태그를 Link로 변경
            href="/login" // login.html을 /login으로 변경
            className="hover:text-primaryColor relative after:absolute after:left-0 after:bottom-0.5 after:w-0 after:h-0.5 after:bg-primaryColor after:transition-all after:duration-300 hover:after:w-full"
          >
            Log In
          </Link>
        </p>
      </div>

      <form className="pt-25px" data-aos="fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-30px gap-y-25px mb-25px">
          <div>
            <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
            />
          </div>
          <div>
            <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-30px gap-y-25px mb-25px">
          <div>
            <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
            />
          </div>
          <div>
            <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-30px gap-y-25px mb-25px">
          <div>
            <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
            />
          </div>
          <div>
            <label className="text-contentColor dark:text-contentColor-dark mb-10px block">
              Re-Enter Password
            </label>
            <input
              type="password"
              placeholder="Re-Enter Password"
              className="w-full h-52px leading-52px pl-5 bg-transparent text-sm focus:outline-none text-contentColor dark:text-contentColor-dark border border-borderColor dark:border-borderColor-dark placeholder:text-placeholder placeholder:opacity-80 font-medium rounded"
            />
          </div>
        </div>

        <div className="text-contentColor dark:text-contentColor-dark flex items-center">
          <input
            type="checkbox"
            id="accept-pp"
            className="w-18px h-18px mr-2 block box-content"
          />
          <label htmlFor="accept-pp">Accept the Terms and Privacy Policy</label>
        </div>
        <div className="mt-25px text-center">
          <button
            type="submit"
            className="text-size-15 text-whiteColor bg-primaryColor px-25px py-10px w-full border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
          >
            Sign up
          </button>
        </div>

        {/* Social Sign Up */}
        <div>
          <p className="text-contentColor dark:text-contentColor-dark text-center relative mb-15px mt-25px before:w-2/5 before:h-1px before:bg-borderColor4 dark:before:bg-borderColor2-dark before:absolute before:left-0 before:top-4 after:w-2/5 after:h-1px after:bg-borderColor4 dark:after:bg-borderColor2-dark after:absolute after:right-0 after:top-4">
            or Sign-up with
          </p>
        </div>
        <div className="text-center flex gap-x-1 md:gap-x-15px lg:gap-x-25px gap-y-5 items-center justify-center flex-wrap">
          <button
            type="button"
            className="text-size-15 text-whiteColor bg-primaryColor px-11 py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
          >
            <i className="icofont-facebook"></i> Facebook
          </button>
          <button
            type="button"
            className="text-size-15 text-whiteColor bg-primaryColor px-11 py-10px border border-primaryColor hover:text-primaryColor hover:bg-whiteColor inline-block rounded group dark:hover:text-whiteColor dark:hover:bg-whiteColor-dark"
          >
            <i className="icofont-google-plus"></i> Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
