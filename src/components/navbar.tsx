import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-10">
      <div className="">
        <Image 
          src="/logo.svg"
          alt="logo"
          width={178}
          height={40}
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/avatar-lisa.jpg" alt="lisa avatar" />
              <AvatarFallback>LM</AvatarFallback>
            </Avatar>
            <Image 
              src="/icon-dropdown-arrow.svg"
              alt="arrow down"
              width={11}
              height={6}
              className="ml-2"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" sideOffset={16} className="w-[calc(100vw-64px)] md:w-[200px]">
          <DropdownMenuLabel className="text-preset-6 text-nuetral-900">
            Lisa Maria
            <br />
            <span className="text-preset-7 text-neutral-300">lisa@mail.com</span>
          </DropdownMenuLabel>
          {/* <span className="text-preset-7 text-neutral-300">lisa@mail.com</span> */}
          <DropdownMenuSeparator className="my-1.5" />
          <DropdownMenuGroup>
            <DropdownMenuItem className="flex items-center space-x-2.5">
              <Image 
                src="/icon-settings.svg"
                alt="settings"
                width={16}
                height={16}
                className="fill-neutral-900"
              />
              <span className="text-preset-7 text-neutral-900">Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center space-x-2.5">
              <Image 
                src="/icon-logout.svg"
                alt="settings"
                width={16}
                height={16}
                className="fill-neutral-900"
              />
              <span className="text-preset-7 text-neutral-900">Logout</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}

export { Navbar };