import { blogData } from "@/lib/types";


interface BlogProps{
    blog:blogData
};

export default function Blog({blog}:BlogProps){
    return(
        <div className="space-y-3 bg-card rounded-2xl p-5">
            <div className="flex flex-wrap gap-3">
                <h1 className="text-lg font-medium hover:underline truncate">{blog.title}</h1>
            </div>
            <div className="whitespace-pre-line break-words text-muted-foreground text-xs line-clamp-4">{blog.content}</div>
        </div>
    )
}