"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import "./Header.scss";

const SITE_NAME = "视界时光";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="flex justify-between items-center h-[60px]">
          <Link href="/" className="logo-container">
            <Image
              src="/images/logo.png"
              alt={SITE_NAME}
              width={36}
              height={36}
              className="logo-image"
              priority
            />
            <h1 className="logo">{SITE_NAME}</h1>
          </Link>
          <nav className="nav">
            <ul className="flex gap-4 m-0 p-0 list-none items-center">
              <li>
                <ThemeSwitcher />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
