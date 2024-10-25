import db from "@/lib/db";
import { BlogPage } from "@/lib/types";
import { NextRequest } from "next/server";


export async function GET(req:NextRequest){
    try {

        const cursor = req.nextUrl.searchParams.get('cursor') || null;

        const pageSize = 20
        const blogs = await db.post.findMany({
            orderBy:{createdAt:'desc'},
            take: pageSize + 1,
            cursor: cursor ? {id:cursor} : undefined
        });

        const nextCursor = blogs.length > pageSize ? blogs[pageSize].id : null;
        const data : BlogPage ={
            blogs:blogs.slice(0,pageSize),
            nextCursor
        }

        return Response.json(data);
    } catch (error) {
        console.log(error);
        return Response.json({error:'Internal Server Error.'},{status:500})
    }
}