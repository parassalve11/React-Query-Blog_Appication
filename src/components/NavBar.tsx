import { BookAIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10 bg-card shadow-md">
      <div className="flex items-center flex-wrap mx-auto max-w-7xl px-5 py-3 gap-x-5">
        <BookAIcon />
        <h1 className=""> Blog App</h1>
        <Button className="ms-auto">
          <Link href={"/add-blog"}>Create Post</Link>{" "}
        </Button>
      </div>
    </div>
  );
}
