
import BlogFeed from "@/components/BlogFeed";
import AddBlogPage from "./add-blog/page";





export default function Home() {

  return (
  <div className="flex min-w-0 w-full">
      <div className="min-w-0 w-full sapce-y-5">
          <AddBlogPage />
          <div className="space-y-5">
             <BlogFeed />
          </div>
      </div>
  </div>
  );
}
