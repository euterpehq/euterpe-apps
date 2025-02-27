"use client";
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/catalyst/dropdown";
import { Avatar as AvatarCatalyst } from "@/components/catalyst/avatar";
import { signOut } from "@/lib/actions/auth";
import { getCurrentUser } from "@/lib/queries/users";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { ArtistProps } from "./sidebar/user-profile-card";
import UpdateProfile from "./sidebar/update-profile";
import { User } from "@supabase/supabase-js";

function AppHeader() {
  const [open, setOpen] = useState(false);
  const [artist, setAritst] = useState<User | null>();
  const pathname = usePathname();

  useEffect(() => {
    const fetchUserAsync = async () => {
      const user = await getCurrentUser();
      setAritst(user);
    };
    fetchUserAsync();
  }, []);
  async function handleSignOut() {
    await signOut();
    // router.push("/login");
  }

  if (!["/home", "/my-music"].includes(pathname)) {
    return null;
  }

  return (
    <header className="flex h-[3.25rem] w-full items-center justify-between border-b-[0.2px] border-[#303033]/80 bg-background px-6 py-3">
      <div className="flex">
        <div className="flex items-center gap-10">
          <Link href="/">
            <h2 className="font-aeonik font-semibold tracking-[-0.04em]">
              Euterpe.
            </h2>
          </Link>
          <Separator orientation="vertical" className="mr-2 h-6 bg-[#303033]" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Dropdown>
          <DropdownButton as="button">
            <AvatarCatalyst
              className="size-6"
              src="https://api.dicebear.com/9.x/glass/svg?seed=Avery"
            />
          </DropdownButton>
          <DropdownMenu className="z-[500] min-w-64" anchor="bottom end">
            <DropdownItem
              className="hover:bg-transparent hover:text-black"
              onClick={() => setOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              <DropdownLabel> {artist?.email} </DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem onClick={signOut}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>

              <DropdownLabel>Log out</DropdownLabel>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <UpdateProfile
          open={open}
          onOpenChange={setOpen}
          // Temporary ts fix: larger problem is prop drilling (complicates definition of artists in every file)
          artist={artist as unknown as ArtistProps}
        />
      </div>
    </header>
  );
}

export function AppHeaderInset({ children }: { children?: React.ReactNode }) {
  return <div className="mt-[3.25rem] flex flex-col">{children}</div>;
}
export default AppHeader;
