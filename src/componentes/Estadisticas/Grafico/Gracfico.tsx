import React, {useEffect, useState} from "react";
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

const Grafico: React.FunctionComponent<puntaje> = ({ puntaje, numOleadas, eliminados }) => {
    
    const generarChar = () =>{
        const data: number[] = []
        data.push(puntaje ,numOleadas, eliminados)
        console.log(data);
        return{

        }   
    }
   
    return (
        <div className="i-grafico sombra">
            <Bar options={options} data={data} />
        </div>
    )    
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

export var data = {
    labels,
    datasets: [

        {
            label: 'Puntaje',
            data: [500],
            backgroundColor: 'rgba(9, 131, 175, 1)',
            borderRadius: Number.MAX_VALUE,
           
        },
        {
            label: 'Oleadas',
            data: [10],
            backgroundColor: 'rgba(51, 123, 111, 1)',
            borderRadius: Number.MAX_VALUE,
        },
        {
            label: 'Enemigos eliminados',
            data: [200],
            backgroundColor: 'rgba(149, 31, 95, 1)',
            borderRadius: Number.MAX_VALUE,
        },
    ],
    backgroundColor: ['rgba(9, 131, 175, 1)', 'rgba(51, 123, 111, 1)', 'rgba(149, 31, 95, 1)'],
}

export default Grafico;