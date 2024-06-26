import Link from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";
interface Props {
  href: string;
  children: string;
}
const NextLink = ({ href, children }: Props) => {
  return (
    <Link passHref legacyBehavior href={href}>
      <RadixLink>{children}</RadixLink>
    </Link>
  );
};

export default NextLink;
