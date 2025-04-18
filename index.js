'use strict';
document.addEventListener('DOMContentLoaded', function () {
  const ctxPie = document.getElementById('pieChart').getContext('2d');
  const pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
      labels: ['Transport', 'Énergie', 'Alimentation', 'Autres'],
      datasets: [{
        data: [40, 25, 20, 15],
        backgroundColor: ['#34d399', '#60a5fa', '#fbbf24', '#f87171'],
        borderColor: '#ffffff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });

  const dataSets = {
    week: {
      labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
      data: [12, 9, 11, 8, 6, 4, 10]
    },
    month: {
      labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'],
      data: [120, 110, 100, 115, 105, 98, 50, 45, 40, 36, 35, 27]
    },
    year: {
      labels: ['2020', '2021', '2022', '2023', '2024'],
      data: [150, 110, 100, 135, 40]
    }
  };

  const ctx = document.getElementById('myChartw').getContext('2d');
  let currentChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dataSets.week.labels,
      datasets: [{
        label: 'Émissions CO₂ (kg)',
        data: dataSets.week.data,
        backgroundColor: 'rgba(56, 161, 105, 0.1)',
        borderColor: '#38a169',
        borderWidth: 2.5,
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: '#38a169'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

//   La fonction qui permet d'adapter selon la periode
  function updateChart(period) {
    currentChart.data.labels = dataSets[period].labels;
    currentChart.data.datasets[0].data = dataSets[period].data;
    currentChart.update();
  }
  document.getElementById('week').addEventListener('click', () => updateChart('week'));
  document.getElementById('month').addEventListener('click', () => updateChart('month'));
  document.getElementById('year').addEventListener('click', () => updateChart('year'));
});
