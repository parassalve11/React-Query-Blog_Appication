'use client'

import { useState } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools} from "react-query/devtools"

export default function ReactQueryProvider({children}:{children:React.ReactNode}){

    const[client] = useState(new QueryClient());

    return <QueryClientProvider client={client}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

}