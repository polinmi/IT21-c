// Instantiate the BarChart class with the data URL

const barChartCreator = new BarChart('data.json');
barChartCreator.init();

console.log(barChartCreator.dataUrl);