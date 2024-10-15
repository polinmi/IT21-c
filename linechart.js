class ChartCreator {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.chartData = null;
    }

    async init() {
        await this.fetchData();
        if (this.chartData) {
            this.createCharts();
        }
    }

    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            this.chartData = await response.json();
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    createCharts() {
        throw new Error('createCharts() must be implemented in subclasses');
    }
}

class LineChart extends ChartCreator {
    constructor(dataUrl) {
        super(dataUrl);
        this.lineCtx = document.getElementById('lineChart');
    }

    createCharts() {
        this.createLineChart();
    }

    createLineChart() {
        new Chart(this.lineCtx, {
            type: 'line',
            data: {
                labels: this.chartData.labels,
                datasets: [{
                    label: 'Line Chart',
                    data: this.chartData.data,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

