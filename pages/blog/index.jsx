import React from 'react'
import Head from "next/head"
import styles from "../../styles/Home.module.css"
import Link from 'next/link'

// membuat sebuah function blog dengan memanggil properti data
export default function Blog({ data }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Halaman Blog</title>
                <meta name='deksripsi' content='merupakan halaman blog' />
            </Head>

            <h1>Halaman Blog</h1>

            {/* menampilkan data */}
            {data.map((e) => (
                <div key={e.id}>
                    <h3>{e.title}</h3>
                    <p>{e.body}</p>
                    <Link href={`/blog/details/${e.id}/${e.title.split(" ").join("-")}`}>Detail</Link>
                </div>
            ))}

        </div >
    )
}

// membuat sebuah function get Server Side Props dengan properti ctx
export async function getServerSideProps(ctx) {

    // fetching api
    const result = await fetch("https://jsonplaceholder.typicode.com/posts")

    // mengembalikan kedalam bentuk json
    const data = await result.json()
    return {
        props: {
            data: data
        }
    }
}
