import React, {Component} from 'react';
import axios from 'axios';
import { PassThrough } from 'stream';
import Horizontal from './Horizontal';

function Picture () {
    return (
        <div className="img-div">
            <div>
                <img src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&auto=compress&cs=tinysrgb" alt="Sunset image with tree" className="sunset_img" />
            </div>
            <p className="quote">“The little things? The little moments? They aren’t little.” – Jon Kabat-Zinn</p>
            <Horizontal />
            <h2>What is Mindfulness?</h2>
            <p className="paragraph">Mindfulness means maintaining a moment-by-moment awareness of our thoughts, feelings, bodily sensations, and surrounding environment.
            Mindfulness also involves acceptance, meaning that we pay attention to our thoughts and feelings without judging them—without believing, for instance, that there’s a 
            “right” or “wrong” way to think or feel in a given moment. When we practice mindfulness, our thoughts tune into what we’re sensing in the present moment rather than 
            rehashing the past or imagining the future. Though it has its roots in Buddhist meditation, a secular practice of mindfulness has entered the American mainstream in 
            recent years, in part through the work of Jon Kabat-Zinn and his Mindfulness-Based Stress Reduction (MBSR) program, which he launched at the University of Massachusetts 
            Medical School in 1979. Since that time, thousands of studies have documented the physical and mental health benefits of mindfulness in general and MBSR in particular, 
            inspiring countless programs to adapt the MBSR model for schools, prisons, hospitals, veterans centers, and beyond.
            <br />
            (Source: https://greatergood.berkeley.edu/mindfulness/definition)</p>
            <p className="paragraph">The patterns of the sun have been important to humans since the beginning of our existence. When working on becoming mindful, reconnecting with 
            nature can help re-center yourself. Also, studies show that rising early and matching your activity with the sun's pattern can boost health, increase productivity, and 
            help regulate sleep patterns</p>
            <p className="paragraph">This online journal was created to help those who seek to reconnect with daily solar events, or "solar hapenings." You can plan ahead by seeing the sunrise and sunset
            schedule (times are in UTC), then using the provided text box to notate your thoughts and feelings for that day.</p>
            <Horizontal />
        </div>
    )
};

export default Picture;