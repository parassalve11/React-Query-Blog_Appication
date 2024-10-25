'use server'

import db from "@/lib/db";


export async function addBlog(formData:FormData){

    const title = formData.get('title')?.toString();
    const content = formData.get('content')?.toString();

    if(!title || !content){
        throw new Error('Invalided Inputs.')
    }

    await db.post.create({
        data:{
            title,
            content
        }
    });

}