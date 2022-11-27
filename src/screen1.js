import { useState, useEffect } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import Card from "./card";
import data from "./data";
import './screen1.css'
import InfiniteScroll from "react-infinite-scroll-component"
const Screen1 = () => {
    var pageNumber = 0;
    var url = "https://matchday.ai/referee/champ/fixture/dummy-matches?page=0";
    const [pages, setPages] = useState([]);
    const [loadedPages, setLoadedPages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //getting first page
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setPages([data[0]]);
            setLoadedPages(pages);
            setLoading(false);
        }
            , 1000);

    }, []);

    const fetchData = async(num) => {
        setTimeout(() => {
         const newPages=data[num];
         setPages([...pages,newPages]);
        }, 500);
      };

    // searching and filtering
    const filter = (value) => {
        // if(value==="") setPages(loadedPages);
        // const newPages=loadedPages.filter((page)=>page.fixtures.team1[0].name.toLowerCase().includes(value.toLowerCase())||page.fixtures.team2[0].name.toLowerCase().includes(value.toLowerCase())||page.fixtures.tournament[0].name.toLowerCase().includes(value.toLowerCase()));
        // setPages(newPages);
        console.log(value);
    }
    const searchbar = document.getElementById("search");
    if (searchbar)
        searchbar.addEventListener('input', () => {
            filter(searchbar.value);
        })

    
    return (
        <>
            <h1>First Screen</h1>
            <div style={{ padding: "0px 20px" }}>
                <div id="screen1_title">International Matches</div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}><input type="search" name="search" id="search" placeholder="Search for Matches" /></div>
                    <InfiniteScroll
                        className="matches"
                        dataLength={pages.length}
                        next={()=>fetchData(pages.length)}
                        hasMore={true||pages[pages.length-1].hasMorePage}
                    >
                        {
                            pages.map((page) => {
                                if(page!==undefined)
                                return page.fixtures.map((x) => {
                                    const score_array = [];
                                    if (x.a1 !== 0) score_array.push(x.a1 + "-" + x.b1);
                                    if (x.a2 !== 0) score_array.push(", " + x.a2 + "-" + x.b2);
                                    if (x.a3 !== 0) score_array.push(", " + x.a3 + "-" + x.b3);
                                    return <Link to="/screen2" key={x._id} style={{ textDecoration: 'none' }}>
                                        <Card round={x.round} scores={score_array} player1={x.team1[0].name} player2={x.team2[0].name} winner={x.winner} />
                                    </Link>
                                })
                            })
                        }
                    </InfiniteScroll>
                </div>
            
        </>
    );
}
export default Screen1;