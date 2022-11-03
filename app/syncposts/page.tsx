'use client';

 
import { useState, useEffect } from 'react'
import Link from 'next/link';



export default function Page() {
    const [data, setData] =  useState<any[]>([])
    const [isLoading, setLoading] = useState(false)

 

    useEffect(() => {
        setLoading(true)
        fetch("https://dummyjson.com/posts?limit=3")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
    console.log(data)

    return (
        <div>
            <ul>

            </ul>
        </div>

    )

}