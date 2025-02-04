import { faBook, faCode } from "@fortawesome/free-solid-svg-icons";

import pic2048game from "../asset/2048-Game.png";
import picCalculator from "../asset/calculator.png";
import picShowPokedex from "../asset/ShowPokedex.png";
import picShowPort from "../asset/ShowPort.png";
import picShowTodoList from "../asset/ShowTodoList.png";
import picSpotifyClone from "../asset/SpotifyClone.png"
import picWeather from "../asset/weather.png";



export const data = [
    {
        date: "Sep 2023",
        link: "https://showportfoliox.web.app",
        materials: [
            { type: "", link: "" }
        ],
        title: "Protfolio",
        descriptions: [
            "This is my very first portfolio, and I'm excited to share that it's a website. As a budding designer/developer of Computer Enginer, I've worked hard to create a digital space that showcases my skills, projects, and creative journey. ",
            "This website represents not only my work but also my passion for (mention what your portfolio focuses on, such as graphic design, web development, photography, etc.). I hope you enjoy exploring it and get a glimpse into my creative world."
        ],
        skills: [
            ["React", "Tailwind"],
        ],
        picture: picShowPort,
    },
    {
        date: "Oct 2023",
        link: "https://showpokedex.web.app",
        materials: [
            { type: faCode, link: "https://github.com/pxsstx/Pokedex" },
            { type: faBook, link: "https://pokeapi.co" }
        ],
        title: "PokeDex",
        descriptions: [
            "A website meticulously crafted using React, coupled with the sleek styling of Tailwind CSS, serves as the perfect platform to bring the captivating world of Pokémon to life online. This website seamlessly integrates with an API, allowing it to fetch and display a wealth of information about these iconic creatures, their abilities, types, and much more, providing enthusiasts and trainers alike with an immersive and informative experience. ",
            "Whether you're a seasoned Pokémon Master or just embarking on your journey as a Trainer, this website offers a comprehensive resource to explore, learn, and appreciate the vast universe of Pokémon."
        ],
        skills: [
            ["React", "Tailwind"],
        ],
        picture: picShowPokedex,
    },
    {
        date: "Oct 2023",
        materials: [
            { type: faCode, link: "https://github.com/pxsstx/calculator" },
        ],
        title: "2048 Game",
        descriptions: [
            'A fascinating rendition of the popular "2048 game", ingeniously crafted using a combination of HTML, CSS, and JavaScript, showcases the remarkable synergy between web development technologies and game design, offering an engaging and interactive user experience'
        ],
        skills: [
            ["HTML", "CSS", "JavaScript"],
        ],
        picture: pic2048game,
    },
    {
        date: "Nov 2023",
        materials: [
            { type: faCode, link: "https://github.com/pxsstx/2048-game" },
        ],
        title: "Calculator",
        descriptions: [
            "Certainly, creating a calculator that emulates the aesthetic and functionality of the iconic iPhone calculator app through a meticulously crafted combination of HTML, CSS, and JavaScript entails a comprehensive undertaking.",
        ],
        skills: [
            ["HTML", "CSS", "JavaScript"],
        ],
        picture: picCalculator,
    },
    {
        date: "Feb 2024",
        materials: [
            { type: faCode, link: "https://github.com/pxsstx/spotify_clone" },
        ],
        title: "Clone Spotify",
        descriptions: [
            "Build a Spotify-inspired website with React and Tailwind CSS. Create an engaging platform featuring user authentication, responsive design, playlist management, and seamless audio playback for an immersive music experience.",
            "Made only in Front End. Haven't written the Back End yet or continued with the API. Planning to integrate server-side functionalities for a complete end-to-end solution."
        ],
        skills: [
            ["React", "Tailwind"],
        ],
        picture: picSpotifyClone,
    },
    {
        date: "Mar 2024",
        link: "https://showweatherapp.vercel.app/",
        materials: [
            { type: faCode, link: "https://github.com/pxsstx/weather-app" },
            { type: faBook, link: "https://openweathermap.org/" },
        ],
        title: "Weather App",
        descriptions: [
            "Built a weather app with Next.js and Tailwind CSS, utilizing the OpenWeatherMap API for live weather updates. Seamlessly combines design with functionality for an intuitive user experience."
        ],
        skills: [
            ["Next.js", "Tailwind"],
        ],
        picture: picWeather,
    },
    {
        date: "May 2024",
        link: "https://showtodolistappx.vercel.app/",
        materials: [
            { type: faCode, link: "https://github.com/pxsstx/todolist-app" },
        ],
        title: "Todolist App",
        descriptions: [
            "A sleek and intuitive To-Do List app website, designed for effortless task management and productivity, offering customizable lists, deadlines, reminders, and seamless synchronization across all your devices."
        ],
        skills: [
            ["Next.js", "Tailwind"],
        ],
        picture: picShowTodoList,
    }
];
