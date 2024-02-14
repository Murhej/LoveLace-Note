import React, { useState } from 'react';
import PlayButt from "../Img/PlayBut.png"; // import the play button image
import PauseButt from "../Img/PauseBut.png"; // import the pause button image
import './musicbar.css';

function MusicBar() {
    const [volume, setVolume] = useState(50); // Initial volume set to 50%
    const [isPlaying, setIsPlaying] = useState(false); // State to track if music is playing

    const handleVolumeChange = (change) => {
        let newVolume = volume + change;
        if (newVolume < 0) {
            newVolume = 0; // Ensure volume doesn't go below 0
        } else if (newVolume > 100) {
            newVolume = 100; // Ensure volume doesn't exceed 100
        }
        setVolume(newVolume);
    };

    const handlePlayToggle = () => {
        setIsPlaying(!isPlaying); // Toggle the state of isPlaying
    };

    return (
        <div className='MusicBar'>
        <div className='Para'>
        <h2>My Love</h2>
        <p>My Dearest Palishita,

            As Valentine's Day approaches, my heart overflows with an abundance of love and gratitude for you. With every beat, it whispers your name, a melody of affection that fills my soul with warmth and joy. In your presence, I find solace and strength, knowing that you are my rock, my confidante, and my greatest supporter.

            Your laughter is the sweetest music to my ears, and your smile illuminates even the darkest of days. In your eyes, I see a reflection of a love so pure and true, a love that transcends time and space. With you, every moment is an adventure, every memory a treasure to be cherished for eternity.

            On this special day, I want to express my deepest appreciation for all that you are and all that you do. You are my light in the darkness, my beacon of hope, and my greatest blessing. I love you more than words can express, and I am grateful beyond measure to have you as my partner, my friend, and my forever Valentine.

            Forever and always</p>

            <h2>Image 1</h2>
            <p>My Love,

                Remember our first adventure to the historic hostel? Despite it being our first time together, every moment felt effortless and right. Walking hand in hand through those ancient halls, it was as if we belonged there, exploring the hidden wonders together. In that shared experience, I felt a connection so pure and genuine, knowing you were meant to be by my side. 
                With fondness,
                </p>
                <h2>Image 2</h2>
                <p>
                My Dearest Palishita,

                    I still cherish the memory of our first visit to my house, especially near Christmas time. It was a simple yet magical evening, filled with laughter, warmth, and the gentle glow of holiday lights. As we sat together by the fireplace, the cozy atmosphere enveloped us, wrapping us in a blanket of comfort and joy.

                    Even though it was our first time sharing such a special moment in my home, it felt as though you had always belonged there, seamlessly becoming a part of my world. Your smile illuminated the room, filling it with a radiance that matched the twinkling lights adorning the Christmas tree.

                    In those precious hours spent together, I felt an overwhelming sense of gratitude for your presence in my life. Your love and companionship made the holiday season even brighter, and I knew then, as I know now, that there is nowhere else I'd rather be than by your side.

                    With love and fond memories,

                </p>
                <h2>Image 3</h2>
                <p>My Beloved,

                    remember when you told me you didn't like your body, in that picture, well Despite any doubts you may harbor about your beauty, to me, you are the most captivating person in the world. Your unique charm and genuine spirit shine brighter than any physical feature. Your presence fills my heart with admiration and love, reminding me that true beauty lies within.

                    Forever enchanted by you</p>
                <h2>Image 4</h2>
                <p>
                    My Dearest,

                    Do you remember that day at school? As we walked together, I caught sight of you, and in that moment, time seemed to stand still. I couldn't help but think how incredibly beautiful you looked. Your presence illuminated the hallway, and I felt so lucky to be by your side. It was then that I realized how deeply you had captured my heart.

                    With affection,</p>
                <h2>Image 5</h2>
                <p>
                    My Love,

                    There's a picture etched in my mind that I find myself drawn to time and time again—it's the image of you, radiating with a beauty that takes my breath away. Every glance at that picture fills my heart with warmth and admiration, reminding me of the incredible fortune I have to cherish someone as lovely as you.

                    Forever captivated,</p>
                <h2>Image 6</h2>
                <p>
My Darling,

There's a picture of us, captured during our shopping excursion, that holds a special place in my heart. In that moment, surrounded by bustling aisles and cheerful ambiance, your smile illuminated the frame, and I couldn't help but marvel at the sheer happiness reflected in our eyes. Every time I glance at that picture, I'm reminded of the joy we share and the countless memories we've created together.

With love and fondness,</p>
                <h2>Image 7</h2>
                <p>My Dearest,

There's a photo of you as a child that fills my heart with an overwhelming surge of love every time I see it. In that innocent smile and those sparkling eyes, I see the essence of who you are—pure, genuine, and utterly lovable. It's a snapshot of the precious moments that have shaped you into the remarkable person you are today, and it serves as a constant reminder of the deep affection I hold for you.

Forever enchanted by you,</p>
                <h2>Image 8</h2>
                <p>My Beloved,

That picture of us after you met my family for the first time is etched in my memory, a snapshot of a moment filled with warmth and happiness. In the glow of that moment, captured in the embrace of your smile, I saw the merging of two worlds—yours and mine—coming together seamlessly. It's a reminder of the love and acceptance that surrounds us, and every time I gaze upon it, my heart swells with gratitude for the bond we share and the journey we've embarked upon together.

With enduring love,</p>
                <h2>Image 9</h2>
                <p>
My Darling,

There's a picture of you, exuding pure charm and radiance, that I find utterly captivating. In that moment, your beauty shines effortlessly, drawing me in with an irresistible allure. Your smile lights up the frame, and every glance at that picture fills me with a sense of wonder and admiration. It's a testament to the extraordinary person you are, inside and out, and a reminder of the boundless love I feel for you.

Forever mesmerized by you,</p>
                <h2> Finally</h2>
                <p>My Love,

As I reflect on our journey together, I can't help but feel a sense of profound happiness knowing that our love story continues to unfold with each passing day. With every shared moment, every laugh, and every tender embrace, my heart swells with joy, and I am reminded of the incredible depth of our connection.

I am grateful for the love we share and the happiness that fills our days. And as we look toward the future, I find comfort in the knowledge that our journey together is far from over. With you by my side, I am confident that our love will only grow stronger, and our happiness will endure for a lifetime.

Here's to the countless moments of joy and love that await us, my darling. May our journey together be filled with endless happiness and everlasting love.

With all my heart,</p>


        </div>
         
        </div>
    );
}

export default MusicBar;
