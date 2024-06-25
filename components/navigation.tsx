"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            {path === "/" ? [<span>🔥</span>, "Home"] : "Home"}
          </Link>
        </li>
        <li>
          <Link href="/about-us">
            {path === "/about-us" ? [<span>🔥</span>, "About Us"] : "About Us"}
          </Link>
        </li>
        <li>TV</li>
        <li>Flim</li>
        <li>Sport</li>
      </ul>
    </nav>
  );
}
