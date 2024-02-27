import { useState, useEffect } from 'react';
import { LineChart, Line, YAxis, ResponsiveContainer } from 'recharts';

export default function Sentiment() {

    const [sentimentData, setSentimentData] = useState(null);
    useEffect(() => {

        const fetchData = async () => {
            const response = await window.fetch("http://localhost:8080/sentiment");
            const responseData = await response.json();
            if (response.ok) {
                setSentimentData(responseData);
            }
        };

        fetchData();
    }, []);

    if (sentimentData === null) {
        return (<>Fetching sentiment data...</>);
    } else {
        return (
            <div className="page-container">
                <div className="page-section">
                    <h1>News sentiment analytics</h1>
                </div>
                <div className="page-section">
                    <SentimentChart sentimentData={sentimentData} />
                </div>
                <div className="page-section">
                    <h2>What is this?</h2>
                    <p>This chart is a continuously updated result of running
                        state of the art sentiment analysis tooling on German
                        language news articles from major publications.</p>
                </div>
            </div>
        );
    }
}

type Sentiment = {
    positive: number,
    negative: number,
    neutral: number
}

function sentimentToScrore(sentiment: Sentiment): number {
    return ((sentiment.positive / sentiment.negative) - 1) * 10;
}


function toChartData(sentimentData: Record<string, Sentiment>): { name: Date, sentiment: number }[] {
    const returnData = [];
    for (const dateString in sentimentData) {
        const date = new Date(dateString);
        returnData.push({ name: date, sentiment: sentimentToScrore(sentimentData[dateString]) });

    }

    return returnData;
}


function SentimentChart(props: { sentimentData: Record<string, Sentiment> }) {
    return (
        <ResponsiveContainer width="100%" height={500} >
            <LineChart
                data={toChartData(props.sentimentData)}
            >
                <YAxis label={{ value: 'Sentiment score', angle: -90, position: 'insideLeft' }} />
                <Line
                    type="monotone"
                    dataKey="sentiment"
                    stroke="var(--col-accent-light)"
                    strokeWidth={3}
                />

            </LineChart>
        </ResponsiveContainer >
    );
}
