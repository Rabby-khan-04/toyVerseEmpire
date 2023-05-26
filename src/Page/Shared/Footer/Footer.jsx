import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-base-100 text-white font-orbitron font-bold border-t border-primary">
      <div className="container p-5 md:p-10 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="space-y-3">
          <Link className="text-2xl md:text-3xl font-bold text-white font-orbitron">
            Toy<span className="text-primary">Verse</span>Empire
          </Link>
          <p className="">
            Step into a world of adventure and imagination at our toy store,
            where Marvel Avengers and Star Wars figures come to life!
          </p>
        </div>
        <div className="space-y-3">
          <div className="space-y-2">
            <h3 className="text-xl">Quick Links</h3>
            <div className="h-0.5 bg-primary w-32"></div>
          </div>
          <div className="flex flex-col gap-1">
            <Link className="footer__link" to="/">
              Home
            </Link>
            <Link className="footer__link" to="/blog">
              Blog
            </Link>
            <Link className="footer__link" to="/toys">
              All Toys
            </Link>
            <Link className="footer__link" to="/my-toys">
              My Toys
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          <div className="space-y-2">
            <h3 className="text-xl">Neede Links</h3>
            <div className="h-0.5 bg-primary w-32"></div>
          </div>
          <div className="flex flex-col gap-1">
            <Link className="footer__link" to="/login">
              Login
            </Link>
            <Link className="footer__link" to="/register">
              Register
            </Link>
            <Link className="footer__link" to="/add-new-toy">
              Add New Toy
            </Link>
            <Link className="footer__link" to="/">
              Privicy Policy
            </Link>
          </div>
        </div>
        <div className="space-y-5">
          <div className="space-y-2">
            <h3 className="text-xl">Contact Us</h3>
            <div className="h-0.5 bg-primary w-32"></div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 group">
              <FaEnvelope className="group-hover:text-primary" />
              <a
                className="group-hover:text-primary"
                href="mailto:test@gmail.com"
              >
                test@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 group">
              <FaPhoneAlt className="group-hover:text-primary" />
              <a className="group-hover:text-primary" href="tel:000000000">
                000-000-000-00
              </a>
            </div>
            <div className="flex items-start gap-2 group">
              <FaLocationArrow className="group-hover:text-primary" />
              <p className="group-hover:text-primary capitalize">
                example, example, example road
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl ">Social Media</h2>
            <div className="space-x-2">
              <Link
                to="https://www.facebook.com/rabbykhan04/"
                className="border border-white p-2 inline-block rounded-full group hover:border-primary cursor-pointer"
              >
                <FaFacebookF className="text-2xl group-hover:text-primary" />
              </Link>
              <Link
                to="https://www.instagram.com/"
                className="border border-white p-2 inline-block rounded-full group hover:border-primary cursor-pointer"
              >
                <FaInstagram className="text-2xl group-hover:text-primary" />
              </Link>
              <Link
                to="https://twitter.com/home"
                className="border border-white p-2 inline-block rounded-full group hover:border-primary cursor-pointer"
              >
                <FaTwitter className="text-2xl group-hover:text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#121212] py-3">
        <p className="text-center">
          &copy; All Right Reserved By{" "}
          <Link className="font-extrabold text-primary italic hover:underline">
            ToyVerseEmpire
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
