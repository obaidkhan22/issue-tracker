"use client";
import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
const NavBar = () => {
  return (
    <nav className=" px-6 py-5 mb-5 border-b">
      <Container>
        <Flex justify="between">
          <NavLinks />
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];
  return (
    <Flex align="center" gap="3">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            className={` ${
              currentPath === link.href ? "text-zinc-900" : "text-zinc-400"
            } hover:text-zinc-900 transition-colors duration-500`}
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </Flex>
  );
};

const AuthStatus = () => {
  const { status, data: session } = useSession();
  return (
    <>
      <Flex align="center" justify="center" gap="2">
        <Text className="text-zinc-400">{session?.user?.name}</Text>
        {status === "authenticated" && (
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Avatar
                src={session?.user?.image!}
                fallback="?"
                radius="full"
                className="cursor-pointer"
                referrerPolicy="no-referrer"
              />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <Text className="p-2 font-bold text-zinc-400">
                {session?.user?.email}
              </Text>
              <DropdownMenu.Item>
                <Link href="/api/auth/signout">Log out</Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        )}
      </Flex>

      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Log in</Link>
      )}
    </>
  );
};

export default NavBar;
