import { time } from "console";
import React from "react";
import ContactForm from "../Elements/ContactForm";
import { Image, Link } from "@nextui-org/react";

export default function Footer() {
  return (
    <div>
      <ContactForm />
      <footer className="bg-white rounded-lg dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <Image
                alt="logo"
                src="/images/logo_flat.webp"
                width={200}
              />
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:underline me-4 md:me-6"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:underline me-4 md:me-6"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/ourTeam"
                  className="hover:underline me-4 md:me-6"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear() + " "}
            Study Sidekicks . All Rights Reserved. Powered
            By{" "}
            <a
              className="text-[#2A2791]"
              href="https://www.markjson.site"
            >
              MarkJson Development
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
