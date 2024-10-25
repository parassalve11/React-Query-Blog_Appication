import AddBlogFrom from "./AddBlogForm";


export default function AddBlogPage(){
    return(
        <div className=" flex items-center justify-center p-5">
                <div className="flex h-full max-h-[40rem] w-full max-w-[40rem] overflow-hidden rounded-2xl bg-card shadow-sm ">
                    <div className="w-full overflow-y-auto p-10 space-y-10 ">
                        <div className="space-y-1 text-center">
                            <h1 className="text-3xl font-bold">Create Blog</h1>
                            <p>a place where user can add Blog.</p>
                        </div>
                        <div className="space-y-5"  >
                            <AddBlogFrom />
                        </div>
                    </div>
                </div>
        </div>
    )
}