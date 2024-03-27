"use client";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useSearchParams, useRouter } from "next/navigation";

import React from "react";
interface Props {
  currentPage: number;
  pageSize: number;
  itemCount: number;
}
const Pagination = ({ currentPage, pageSize, itemCount }: Props) => {
  const router = useRouter();
  const pageCount = Math.ceil(itemCount / pageSize);
  const searchParams = useSearchParams();
  const disabled = currentPage === 1;
  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };
  if (pageCount === 1) return null;
  return (
    <Flex align="center" gap="3">
      <Text size="2" className="text-zinc-400">
        Page {currentPage} of {pageCount}
      </Text>
      <Button
        variant="soft"
        color="gray"
        disabled={disabled}
        onClick={() => changePage(1)}
      >
        <DoubleArrowLeftIcon />
      </Button>
      <Button
        variant="soft"
        color="gray"
        disabled={disabled}
        onClick={() => changePage(currentPage - 1)}
      >
        <ArrowLeftIcon />
      </Button>
      <Button
        variant="soft"
        color="gray"
        disabled={currentPage === pageCount}
        onClick={() => changePage(currentPage + 1)}
      >
        <ArrowRightIcon />
      </Button>
      <Button
        variant="soft"
        color="gray"
        disabled={currentPage === pageCount}
        onClick={() => changePage(pageCount)}
      >
        <DoubleArrowRightIcon />
      </Button>
    </Flex>
  );
};

export default Pagination;
