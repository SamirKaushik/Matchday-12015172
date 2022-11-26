import { useState, useEffect } from "react";
const Screen1 = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const [url, setUrl] = useState("https://matchday.ai/referee/champ/fixture/dummy-matches?page=" + { pageNumber });
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //getting first page
    useEffect(() => {
        setLoading(true)
        setError(null)
        fetch(url).then(response => {
            if (response.ok)
                return response.json();
            throw response;
        }).then(data => {
            setPages([...pages, data]);
            setLoading(false);
        }).catch(error => { setError(error) })
    }, [pageNumber]);
    //adding scroll event to make infinite scroller
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
                if (pageNumber != 0 && pageNumber < 9) {
                    setLoading(true)
                    setError(null)
                    setPageNumber((num) => num + 1)
                    setUrl("https://matchday.ai/referee/champ/fixture/dummy-matches?page=" + { pageNumber })
                    fetch(url).then(response => {
                        if (response.ok)
                            return response.json();
                        throw response;
                    }).then(data => {
                        setPages([...pages, data]);
                        setLoading(false);
                    }).catch(error => { setError(error) })
                }
            }
        })
    }, []);
    return (<>
        <h1>First Screen</h1>
        <div id="screen1_title">International Matches</div>
        <div><input type="search" name="search" id="search" placeholder="Search for Matches" /></div>
        <div className="matches"></div>
        {() => {
            if (loading) return <div className="loading">Loading...</div>
        }}
        {() => {
            if (error) return <div className="error">Error</div>
        }}
    </>);
}
export default Screen1;