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

// {
//     label: 'Avg Heal Time',
//     data: [ props.searchResults?.stats.avgHealTime],
//     backgroundColor: 'rgba(255, 99, 132, 0.5)',
//   }
const Chart = (props: any) => {
    const labels = ['Average Cost'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Avg Cost In USD',
                data: [props.searchResults?.stats.avgPrice,],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
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
export default Chart