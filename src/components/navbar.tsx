import { DialogTitle } from "@radix-ui/react-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "./ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Image from "next/image";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

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
      <Dialog>
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
          <DropdownMenuContent align="end" sideOffset={16} className="w-[calc(100vw-32px)] md:w-[200px]">
            <DropdownMenuLabel className="text-preset-6 text-nuetral-900">
              Lisa Maria
              <br />
              <span className="text-preset-7 text-neutral-300">lisa@mail.com</span>
            </DropdownMenuLabel>
            {/* <span className="text-preset-7 text-neutral-300">lisa@mail.com</span> */}
            <DropdownMenuSeparator className="my-1.5" />
            <DropdownMenuGroup>
              <DialogTrigger asChild>
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
              </DialogTrigger>
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
        {/* Dialog */}
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-preset-3 text-neutral-900">Update your profile</DialogTitle>
            <DialogDescription className="text-preset-6 text-neutral-600">
              Personalize your account with your name and photo.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Lisa Maria" className="" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="avatar" className="text-right">
                Avatar
              </Label>
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/avatar-placeholder.svg" alt="avatar" />
                </Avatar>
                <Button variant="outline">Upload</Button>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full h-[60px] text-preset-5 bg-blue-600 text-white">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </nav>
  );
}

export { Navbar };