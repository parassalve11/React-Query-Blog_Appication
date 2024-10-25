import { Prisma } from "@prisma/client";


export type blogData = Prisma.PostGetPayload<{
    select:{
        id:true,
        title:true,
        content:true,
        createdAt:true
    }
}>;

export interface BlogPage {
    blogs:blogData[],
    nextCursor: string | null
}