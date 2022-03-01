import React from 'react'
import '../sass/App.scss'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const HealChart = (props: any) => {
    const labels = ['Average Heal Time '];
    const data = {
        labels,
        datasets: [
            {
                label: 'Avg Heal Time in Days',
                data: [ props.searchResults?.stats.avgHealTime],
                backgroundColor: 'rgba(68, 70, 230, 0.884)',
              }
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: `Average ${props.searchInput} Stats`,
            },
        },
    };

    return (
        <div className="avg-cost">
            <Bar  options={options} data={data}/>
        </div>

    )
}
export default HealChart