import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center mx-4">
      <Image 
        src="/logo.svg"
        alt="logo"
        width={177}
        height={40}
        className="mx-auto pt-20 mb-12"
      />
      <div className="max-w-[530px] w-full bg-white rounded-2xl space-y-8 px-4 py-10">
        <div className="space-y-2">
          <h1 className="text-preset-3 text-neutral-900">Create an account</h1>
          <p className="text-preset-6 text-neutral-600">Join to track your daily mood and sleep with ease.</p>
        </div>
        <form action="" className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input placeholder="name@mail.com" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input type="password" />
          </div>
          <Button className="w-full h-[52px] bg-blue-600">Sign Up</Button>
          <p>
            Already got an account?
            <Link href="/login"> Log in</Link>.
          </p>
        </form>
      </div>
    </main>
  );
}
