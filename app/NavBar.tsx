"use client";
import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Box, Container, Flex } from "@radix-ui/themes";
const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];
  return (
    <nav className=" px-6 py-5 mb-5 border-b">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <FaBug />
            </Link>
            <ul className="flex space-x-6">
              {links.map((link) => (
                <Link
                  className={` ${
                    currentPath === link.href
                      ? "text-zinc-900"
                      : "text-zinc-400"
                  } hover:text-zinc-900 transition-colors duration-500`}
                  key={link.href}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </Flex>
          <Box>
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">Log in</Link>
            )}
            {status === "authenticated" && (
              <Link href="/api/auth/signout">Log out</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
