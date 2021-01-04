import React, { useEffect, useState } from 'react'
import StoryReel from './Story/StoryReel'
import './Feed.css'
import CreatePosts from './Posts/CreatePosts'
import Post from './Posts/Post'
import db from "../../Firebase/Firebase"

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
       db.collection('posts').orderBy('timeStamp', 'desc').onSnapshot(snapshot => (
           setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))))
        }, [])

    return (
        <div className = "feed">
            <StoryReel />
            <CreatePosts />
            {posts.map((post) => (
                <Post key={post.data.id}
                profilePic= {post.data.profilePic}
                message= {post.data.message}
                username= {post.data.userName}
                timeStamp= {post.data.timeStamp}
                image= {post.data.image} />
            ))}
            
            
        </div>
    )
}

export default Feed
