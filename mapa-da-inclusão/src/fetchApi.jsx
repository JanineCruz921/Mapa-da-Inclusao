import axios from "axios";
import { useEffect, useState } from "react";

export const UseFetchIntelectual = () => {
    const [Intelectual, setIntelectual] = useState([]);
    const FetchIntelectual = async () => {
        const response = await axios.get("http://localhost:3095/seeOngIntelectual")
        console.log(response)
        setIntelectual(response.data.results);
    };
    useEffect(() => {
        FetchIntelectual().catch((error), Console.error(error))
    }, []);
    return ongIntelectual
}

export const UseFetchPhysical = () => {
    const [Physical, setPhysical] = useState([]);
    const FetchPhysical = async () => {
        const response = await axios.get("http://localhost:3095/seeOngPhysical")
        console.log(response)
        setPhysical(response.data.results);
    };
    useEffect(() => {
        FetchPhysical().catch((error), Console.error(error))
    }, []);
    return ongPhysical
}

export const UseFetchVisual = () => {
    const [Visual, setVisual] = useState([]);
    const FetchVisual = async () => {
        const response = await axios.get("http://localhost:3095/seeOngVisual")
        console.log(response)
        setVisual(response.data.results);
    };
    useEffect(() => {
        FetchVisual().catch((error), Console.error(error))
    }, []);
    return ongVisual
}