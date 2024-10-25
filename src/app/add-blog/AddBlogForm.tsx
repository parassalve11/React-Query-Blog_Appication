'use client'
import LoadingButton from "@/components/LoadingButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addBlog } from "./actions";
import useAddBlogMuataion from "./muations";



export default function AddBlogFrom(){
    const muations = useAddBlogMuataion();
    return(
        <form action={muations.mutate}  className="space-y-3">
            <Input 
            name='title'
            placeholder="blog title.."
            type="text"
            className="w-full"
            required
            />

            <Textarea
            name="content"
            placeholder="content.."
            className="w-full "
            required
            />


            <LoadingButton className="w-full font-semibold" type="submit" loading={false} >
                Create
            </LoadingButton>

        </form>
    )
}