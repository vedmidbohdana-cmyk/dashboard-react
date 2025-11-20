import { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";
import Card from "./components/Card";
import "./App.css";

function App() {
    const [data, setData] = useState([]);
    const [period, setPeriod] = useState("weekly");

    useEffect(() => {
        fetch("/dashboard-react/assets/data.json")
            .then(res => res.json())
            .then(json => setData(json));
    }, []);

    return (
        <div className="container">
            <ProfileCard period={period} setPeriod={setPeriod} />
            <div className="cards">
                {data.map(item => (
                    <Card key={item.title} item={item} period={period} />
                ))}
            </div>
        </div>
    );
}

export default App;
