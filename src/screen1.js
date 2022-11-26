import { useState, useEffect } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import Card from "./card";
import data from "./data";
import './screen1.css'
const Screen1 = () => {
    const [pageNumber, setPageNumber] = useState(0);
    var url = "https://matchday.ai/referee/champ/fixture/dummy-matches?page=0";
    const [pages, setPages] = useState([]);
    const [loadedPages,setLoadedPages]=useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


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
        setLoading(true)
        setPages([data[0]]);
        setLoadedPages([pages]);
        setLoading(false);
    }, []);

    //adding scroll event to make infinite scroller using API
    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    //             if (pageNumber !== 0 && pageNumber < 9) {
    //                 setLoading(true)
    //                 setError(null)
    //                 setPageNumber((num) => num + 1)
    //                 url = "https://matchday.ai/referee/champ/fixture/dummy-matches?page=" + toString(pageNumber)
    //                 fetch(url + "/allow-cors", { mode: 'cors', credentials: 'include' }).then(response => {
    //                     if (response.ok)
    //                         return response.json();
    //                     throw response;
    //                 }).then(data => {
    //                     setPages([...pages, data]);
    //                     setLoading(false);
    //                 }).catch(error => { setError(error) })
    //             }
    //         }
    //     })
    // }, []);

    //code for infinite scroller
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                if (pageNumber < 9) {
                    setLoading(true)
                    setPageNumber((num) => num + 1)
                    setPages([...pages, data[pageNumber]]);
                    setLoadedPages(pages);
                    setLoading(false);
                }
            }
        })
    }, []);
    // searching and filtering

    const filter=(value)=>{
        // if(value==="") setPages(loadedPages);
        // const newPages=loadedPages.filter((page)=>page.fixtures[0].team1[0].name.toLowerCase().includes(value.toLowerCase())||page.fixtures[0].team2[0].name.toLowerCase().includes(value.toLowerCase())||page.fixtures[0].tournament[0].name.toLowerCase().includes(value.toLowerCase()));
        // setPages(newPages);
    }
    const searchbar = document.getElementById("search");
    if (searchbar)
        searchbar.addEventListener('input', () => {
            filter(searchbar.value);
        })
    return (
        <>
            <h1>First Screen</h1>
            <div style={{padding:"20px 20px"}}>
            <div id="screen1_title">International Matches</div>
            <div style={{display:"flex", justifyContent:"flex-end"}}><input type="search" name="search" id="search" placeholder="Search for Matches" /></div>
            <div className="matches">
                {/* {() => {
                    for (var i = 0; i <= pageNumber; i++) {
                        for (var j = 0; j < pages[pageNumber].fixtures.length; j++) {
                            const x = pages[i].fixtures[j];
                            const score_array = [];
                            if (x.a1 !== 0) score_array.append(x.a1 + "-" + x.b1);
                            if (x.a2 !== 0) score_array.append(", " + x.a2 + "-" + x.b2);
                            if (x.a3 !== 0) score_array.append(", " + x.a3 + "-" + x.b3);
                            return <Link to="/screen2">
                                <Card round={x.round} scores={score_array} player1={x.team1.name} player2={x.team2.name} winner={x.winner} />
                            </Link>
                        }
                    }
                }} */}

                {
                    pages.map((page) => {
                        return page.fixtures.map((x) => {
                            const score_array = [];
                            if (x.a1 !== 0) score_array.push(x.a1 + "-" + x.b1);
                            if (x.a2 !== 0) score_array.push(", " + x.a2 + "-" + x.b2);
                            if (x.a3 !== 0) score_array.push(", " + x.a3 + "-" + x.b3);
                            return <Link to="/screen2" style={{ textDecoration: 'none' }}>
                                <Card round={x.round} scores={score_array} player1={x.team1[0].name} player2={x.team2[0].name} winner={x.winner} />
                            </Link>
                        })
                    })
                }
            </div>
            {loading && <div className="loading">Loading...</div>}
            {error && <div className="error">Error</div>}
            </div>
        </>
    );
}
export default Screen1;