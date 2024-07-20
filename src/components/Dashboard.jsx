import React, { useEffect, useState } from 'react';
import Card from './Card';
import "./css/dashboard.css";
import Reports from "./Reports";
import RecentSales from "./RecentSales";
import TopSelling from "./TopSelling";
import RecentActivity from "./RecentActivity";
import BudgetReport from "./BudgetReport";
import WebTraffic from "./WebTraffic";
import News from "./News";

function Dashboard() {
    const [cards, setCards] = useState([]);

    const fetchData = () => {
        try {
            fetch('https://fantastic-yodel-49rw556j47w255ww-4000.app.github.dev/cards', {mode: "no-cors"})
            .then(res => res.json())
            .then(data => {
                setCards(data);
                
            })
            .catch(e => console.log(e.message));
        } catch (error) {
            console.log(error.message);
        }
        
    };

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <section className="dashboard section">
        <div className="row">
            <div className="col-lg-8">
                <div className="row">
                    {
                        cards && cards.length > 0 &&
                        cards.map(card => <Card key={card._id} card={card}/>)
                    }
                    <div className="col-12">
                        <Reports />
                    </div>
                    <div className="col-12">
                        <RecentSales />
                    </div>
                    <div className="col-12">
                        <TopSelling />
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <RecentActivity />
                <BudgetReport />
                <WebTraffic />
                <News />
            </div>
        </div>
    </section>
)
}

export default Dashboard;