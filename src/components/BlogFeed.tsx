'use client'
import { kyInstance } from "@/lib/ky";
import { useInfiniteQuery } from "react-query";
import Blog from "./Blog";
import { BlogPage } from "@/lib/types";

export default function BlogFeed(){
    const{data,
        status
    } = useInfiniteQuery({
        queryKey:['blog-feed'],
        queryFn:({pageParam}) =>
            kyInstance.get('/api/blog/feed',
                pageParam ? {searchParams:{cursor:pageParam}}:{}
            ).json<BlogPage>(),
    });


    const blogPost = data?.pages.flatMap((page) => page.blogs) || []

    if(status === 'loading'){
        return <p className="text-center">Loading..</p>
    };

    if(status === 'error'){
        return <p className="text-center text-destructive text-xs">Error while loading Blog.</p>
    };

    return  <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
    {blogPost.map((blog) => (
      <Blog key={blog.id} blog={blog} />
    ))}
  </div>
}