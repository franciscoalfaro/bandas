import React, { useContext, useEffect, useRef } from 'react';
import { SocketContext } from '../context/SocketContext';
import { Chart } from 'chart.js/auto';

export const BandChart = () => {
    const { socket } = useContext(SocketContext);
    const chartRef = useRef(null); // Utiliza useRef para mantener una referencia al gráfico

    useEffect(() => {
        socket.on('current-band', (bands) => {
            updateChart(bands);
        });

        // Al desmontar el componente, asegúrate de eliminar el listener del socket
        return () => {
            socket.off('current-band');
        };
    }, [socket]);

    const updateChart = (bands = []) => {
        const ctx = document.getElementById('myChart');

        if (chartRef.current) {
            chartRef.current.destroy(); // Destruye el gráfico existente
        }

        chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: bands.map((band) => band.name),
                datasets: [
                    {
                        label: '# of Votes',
                        data: bands.map((band) => band.vote),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    };

    return <canvas id="myChart"></canvas>;
};
