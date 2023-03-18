import { useEffect, useState } from "react";
// import axios from "axios";
import CulturalTourD from "../data/culturalTourD.js";
import EcoTourD from "../data/ecoTourD.js";

// const useFetch = ({destination, category, language, price}) => {
const useFetch = (parameters) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    // const destinationParams = state.filters.map((filter) =>
    //   filter.key === 'city' ? filter.value : undefined
    // )
    const fetchData = async () => {
      setLoading(true);
      try {
        // const res = await axios.get(url);
        if(String(parameters) === 'cultural')
            setData(CulturalTourD);
        else
            setData(EcoTourD);
      } catch (err) {
        setErr(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [parameters]);
  // }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      // const res = await axios.get(url);
      // setData(res.data);
        if(String(parameters) === 'cultural')
            setData(CulturalTourD);
        else
            setData(EcoTourD);
    } catch (err) {
      setErr(err);
    }
    setLoading(false);
  };

  return { data, loading, err, reFetch };
};

export default useFetch;
