'use client'
// in case locale error not loads a basic fallback in en
// cant check it though, i get only inner locale nt-found even if i erase the locale path, i get back so it remains as an unstyled fallback for now lol

import Error from "next/error"

export default function NotFound() {

    return(
        <html lang="en">
            <body>
                <Error statusCode={404} />
            </body>
        </html>
    )
    
}