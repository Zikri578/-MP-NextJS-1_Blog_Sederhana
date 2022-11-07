import React from 'react'
import Head from 'next/head'
import styles from "../../../../styles/Home.module.css"
import Link from "next/link"

export default function DetailsBlog({ data }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Halaman Detail Blog</title>
                <meta name='deskripsi' content='ini merupakan detail blog' />
            </Head>

            <h1>Halaman Detail Blog</h1>
            <h3>{data.title}</h3>
            <p>{data.body}</p>

            <Link href={"/blog"}>Back</Link>

        </div>
    )
}

export async function getServerSideProps(ctx) {

    // 
    const { id } = await ctx.params
    const result = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    const data = await result.json()

    return {
        props: {
            data: data
        }
    }
}
