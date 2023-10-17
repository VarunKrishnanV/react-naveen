let movie = {
    title: "Leo",
    trailers: [
        {
            language: "Hindi",
            link: "https://www.youtube.com/watch?v=3P-t4WRoW5c&pp=ygURbGVvIHRyYWlsZXIgaGluZGk%3D"
        },
        {
            language: "Tamil",
            link: "https://www.youtube.com/watch?v=Po3jStA673E&t=3s&pp=ygURbGVvIHRyYWlsZXIgdGFtaWw%3D"
        },
        {
            language: "Telugu",
            link: "https://www.youtube.com/watch?v=ozRCVFgsrbY&t=28s&pp=ygUSbGVvIHRyYWlsZXIgdGVsdWd1"
        }
    ],
    backgroundImage: "https://www.livemint.com/lm-img/img/2023/10/12/600x338/leo_1695203139927_1697097755570.jpg",
    description: "A cafe owner becomes a local hero but his actions being forth consequences from a dangerous world that can shake his carefully constructed life",
    releasingOn: "19 Oct, 2023",
    languages: [
        "Tamil",
        "Kannada",
        "Telugu",
        "Hindi"
    ],
    duration: "2h 44m",
    genre: [
        "Action",
        "Thriller",
        "Horror"
    ],
    rating: "5",
    cast: [
        {
            id: "1",
            name: "Vijay",
            role: "Actor",
            imageUrl: "https://m.media-amazon.com/images/M/MV5BM2Y0YzdlMTMtNTE4NC00YjRkLWJkNzAtNjEwMzhhYWNjNWI2XkEyXkFqcGdeQXVyMTI5NTUxNzk0._V1_.jpg"
        }, {
            id: "2",
            name: "Trisha",
            role: "Actress",
            imageUrl: "https://m.timesofindia.com/photo/94322402/94322402.jpg"
        }
        , {
            id: "3",
            name: "Gvm",
            role: "Actor",
            imageUrl: "https://gumlet.assettype.com/filmcompanion%2F2022-09%2Ff7c97648-3bf4-4374-963d-78461c185e56%2FGVM_2.png?auto=format%2Ccompress&fit=max&w=1200"
        }
        , {
            id: "4",
            name: "Priya Anand",
            role: "Actress",
            imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-HfWQcdbs37ON9nlWtn8tM9pFnQaTKmMWMvpwNdfi0OpTm5xp"
        }
    ],
    crew: [
        {
            name: "Loki",
            role: "Director",
            imageUrl: "https://www.filmibeat.com/img/162x203/popcorn/profile_photos/lokesh-kanagaraj-20230203194357-36137.jpg"
        },
        {
            name: "Anirudh",
            role: "Music Director",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Anirudh_Ravichander_at_Audi_Ritz_Style_Awards_2017.jpg/1200px-Anirudh_Ravichander_at_Audi_Ritz_Style_Awards_2017.jpg"
        },
        {
            name: "Rathna Kumar",
            role: "Dialouge Writer",
            imageUrl: "https://pbs.twimg.com/media/ETNrnKDUUAEdk4o.jpg"
        }
    ],
    reviews: [
        {
            "review_id": 1,
            "rating": 4.5,
            "review_text": "Leo is a beautifully crafted movie with a compelling storyline. The performances are outstanding."
        },
        {
            "review_id": 2,
            "rating": 3.8,
            "review_text": "Leo's cinematography is breathtaking, but the plot could have been more engaging."
        },
        {
            "review_id": 3,
            "rating": 4.0,
            "review_text": "A heartwarming film. Leo touches your soul with its touching narrative and wonderful characters."
        },
        {
            "review_id": 4,
            "rating": 4.2,
            "review_text": "Leo is a must-watch. It's a rollercoaster of emotions, beautifully portrayed."
        },
        {
            "review_id": 5,
            "rating": 3.5,
            "review_text": "Leo has some remarkable moments, but it lacks consistency in pacing."
        },
        {
            "review_id": 6,
            "rating": 4.6,
            "review_text": "An exceptional film that showcases the journey of Leo, touching on important life lessons."
        },
        {
            "review_id": 7,
            "rating": 3.9,
            "review_text": "Leo's storytelling is profound, but it may not be for everyone due to its slow pace."
        },
        {
            "review_id": 8,
            "movie_title": "Leo",
            "rating": 4.3,
            "review_text": "Leo's strong character development and heartfelt moments make it a memorable experience."
        },
        {
            "review_id": 9,
            "movie_title": "Leo",
            "rating": 3.7,
            "review_text": "Leo is an emotional journey, but it may leave you with mixed feelings."
        },
        {
            "review_id": 10,
            "movie_title": "Leo",
            "rating": 4.1,
            "review_text": "Leo is a visually stunning film that explores the complexities of life and relationships."
        }
    ]
}

// const { title,
//     trailers,
//     backgroundImage,
//     releasingOn,
//     duration,
//     reviews } = m

// const a = [1, 2, 4]
// const b = [5, 6, 7]

// const numbers = [...a, ...b]

// const leo2 = { ...m, title: "leo2" }
// console.log('leo2: ', leo2);

// const { title, ...others } = m

// console.log(title);
// console.log(others);

// let a = 16;

// const genre = [
//     "Action",
//     "Thriller",
//     "Horror"
// ]

// const [data, setData] = useState([])

// setData([...data, "Varun"])

// const serverData = fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => res.json()).then((data) => console.log(data))
// console.log('serverData: ', serverData);

const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    console.log('data: ', data);
}

getData()