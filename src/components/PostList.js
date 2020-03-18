import React, { useEffect, useState } from 'react'
import getPosts from '../api/getPosts'
import { postRef } from '../firebase'

export default () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getAllThePosts = async () => {
            postRef.on('value', snap => {
                console.log(snap.val())
              setPosts([snap.val()])
            })
        }
        getAllThePosts()
    }, [])
    
    return (
        <div>
            {posts.map(singlePost => {
                return <h1>{JSON.stringify(singlePost)}</h1>
            })}
        </div>
    )
}


