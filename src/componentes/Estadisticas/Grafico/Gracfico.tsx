import React from "react";
import "./Grafico.css"
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

interface puntaje {
    puntaje: number,
    numOleadas: number,
    eliminados: number,
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: '',
        },
    },
};

const labels = ['1', '2', '3', '4'];
const kk =[2,3,4,5];
export const data = {
    labels,
    datasets: [
        {
            label: 'Puntaje',
            data: [1],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Oleadas',
            data: [8],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: 'Enemigos eliminados',
            data: [5],
            backgroundColor: 'rgba(0, 0, 235, 0.5)',
        },
    ],
}

const Grafico: React.FunctionComponent<puntaje> = ({ puntaje, numOleadas, eliminados }) => {
    return (
        <div className="i-grafico sombra">
            {/* <h1>puntaje: {puntaje}</h1> */}
            <Bar options={options} data={data} />
        </div>
    )
}

export default Grafico;