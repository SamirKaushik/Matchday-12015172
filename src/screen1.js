import { useState, useEffect } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import Card from "./card";
import data from "./data";
import './screen1.css'
import InfiniteScroll from "react-infinite-scroll-component"
const Screen1 = () => {
    // var url = "https://matchday.ai/referee/champ/fixture/dummy-matches?page=0"; this has been used to get all the data and stored itcin data.js file
    const [pages, setPages] = useState([]);
    const [loadedPages, setLoadedPages] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    //getting first page using API but the API isn't working and giving CORS errors so I'm using data from file
    //I've still written the code
    // useEffect(() => {
    //     setLoading(true)
    //     setError(null)
    //     fetch("https://matchday.ai/referee/champ/fixture/dummy-matches?page=0/allow-cors", { mode: 'cors', credentials: 'include' }).then(response => {
    //         if (response.ok)
    //             return response.json();
    //         throw response;
    //     }).then(data => {
    //         setPages([data]);
    //         setLoading(false);
    //     }).catch(error => { setError(error) })
    // }, []);

    //getting first page
    useEffect(() => {
        setTimeout(() => {
            setPages([data[0]]);
            console.log(pages)
            setLoadedPages([data[0]]);

        }
            , 500);

    }, []);

    const fetchData = async (num) => {
        setTimeout(() => {
            const newPages = data[num];
            setPages(prev => [...prev, newPages]);
            setLoadedPages(prev => [...prev, newPages]);
        }, 500);
    };


    // searching and filtering
    const filter = (value) => {
        if (value === "") {
            setPages(loadedPages);
        }

        const newPages = loadedPages.map(
            (page) => ({
                ...page, fixtures: page.fixtures.filter(
                    (card) => card.team1[0].name.toLowerCase().includes(value.toLowerCase()) ||
                        card.team2[0].name.toLowerCase().includes(value.toLowerCase()) ||
                        card.tournament[0].name.toLowerCase().includes(value.toLowerCase())

                )
            })
        );

        setPages(newPages);
    }
    return (
        <>
            <h1>First Screen</h1>
            <div style={{ padding: "0px 20px" }}>
                <div id="screen1_title">International Matches</div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <input
                        type="search"
                        name="search"
                        id="search"
                        placeholder="Search for Matches"
                        onChange={e => { filter(e.target.value) }}
                    />
                </div>
                <InfiniteScroll
                    className="matches"
                    dataLength={pages.length}
                    next={() => fetchData(pages.length)}
                    hasMore={pages.length < 9 || pages[pages.length - 1].hasMorePage}
                >
                    {
                        pages.map((page) => {
                            if (page)
                                return page.fixtures && page.fixtures.map((x) => {
                                    const score_array = [];
                                    if (x.a1 !== 0) score_array.push(x.a1 + "-" + x.b1);
                                    if (x.a2 !== 0) score_array.push(", " + x.a2 + "-" + x.b2);
                                    if (x.a3 !== 0) score_array.push(", " + x.a3 + "-" + x.b3);
                                    return <Link to="/screen2" key={x._id} style={{ textDecoration: 'none' }}>
                                        <Card 
                                            round={x.round} 
                                            scores={score_array} 
                                            player1={x.team1[0].name} 
                                            player2={x.team2[0].name} 
                                            winner={x.winner} 
                                            tournament={x.tournament[0].name} 
                                        />
                                    </Link>
                                })
                            else return "";
                        })
                    }
                </InfiniteScroll>
            </div>

        </>
    );
}
export default Screen1;