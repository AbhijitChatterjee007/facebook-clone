import React from 'react'
import Story from './Story'
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className = "storyReel">
            <Story image = "https://loremflickr.com/400/400/paris,girl/all" profileSrc = "https://loremflickr.com/400/400/tiger" title="User" />
            <Story image = "https://loremflickr.com/400/400/mumbai" profileSrc = "https://loremflickr.com/400/400/boy" title="User2" />
            <Story image = "https://loremflickr.com/400/400/dog" profileSrc = "https://loremflickr.com/400/400/girl" title="User3" />
            <Story image = "https://loremflickr.com/400/400/paris" profileSrc = "https://loremflickr.com/400/400/man" title="User4" />
            <Story image = "https://loremflickr.com/400/400/kolkata" profileSrc = "https://loremflickr.com/400/400/woman" title="User5" />
        </div>
    )
}

export default StoryReel
