import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

function withLoading(Component: (data: any) => JSX.Element, url: string) {
  return () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        axios.get(url)
        .then((response: AxiosResponse) => {
            setLoading(false)
            setData(response.data)
        })
        .catch((e) => {
            setLoading(false)
            setError(e.message)
        })
    }, [])

    if(loading) {
        return <p className="loading">Loading...</p>
    }
    if(error) {
        return <p className="error">{error}</p>
    }
    return <Component data={data} />

  };
}

export default withLoading;
