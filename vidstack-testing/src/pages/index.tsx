/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Head from "next/head";
import React from "react";

export default function Index() {

    return(
        <>
        <Head>
            <title>{"Eltik's vidstack testing website lol"}</title>
            <meta name="description" content={"you should visit https://anify.tv"} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={`text-white flex w-[100vw] h-[100vh] flex-col justify-center items-center bg-gradient-to-b from-[#191A1C] to-[#191A1C] overflow-x-hidden`}>
            <h1>Hi this is Eltiks vidstack testing website</h1>
            <p>Visit the `/proxy`, `/raw`, and `/cors` routes for different tests</p>
            <p>/proxy uses String(process.env.M3U8_PROXY)/proxy/emncoded_url</p>
            <p>/raw uses url with no proxy</p>
            <p>/cors uses String(process.env.M3U8_PROXY)/emncoded_url</p>
        </main>
        </>
    )
}