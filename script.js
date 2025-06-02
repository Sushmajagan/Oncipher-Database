var chartOptions = {
  chart: {
	
    height: 400,
    type: 'line',
    fontFamily: 'Helvetica, Arial, sans-serif',
    foreColor: '#6E729B',
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  series: [
    {
      name: 'Lung',
      data: [1040,1200,1800,2200,2500],
	  color: '#800000',
	  label: 'Year',
    },
    {
      name: 'Breast',
      data: [87,1500,1500,2300,2500],
	   color: '#f032e6',
    },
    {
      name: 'Colorectal',
      data: [1000,1200,1400,1900,152],
	   color: '#4363d8',
    },
	{
      name: 'Prostate',
      data: [68,86,1100,1410,1470],
	   color: '#ffe119',
    },
	{
      name: 'Stomach',
      data: [87,935,989,1100,968],
	   color: '#f58231',
    },
	{
      name: 'Liver',
      data: [500,600,700,900,906],
	   color: '#e6194B',
    },
	{
      name: 'Thyroid',
      data: [233,290,380,586,600],
	   color: '#42d4f4',
    },
	{
      name: 'Cervical',
      data: [500,510,530,570,660],
	   color: '#3cb44b',
    },
	{
      name: 'Bladder',
      data: [400,430,475,524,573],
	   color: '#F8B88B',
    },
	{
      name: 'Non-Hodgkins lymphoma',
      data: [260,320,474,544,510],
	   color: '#000075',
    },
  ],
  title: {
    text: 'Global incidence rate of top 10 cancers (1990-2024)'
  },
  xaxis: {
    align: 'left',
    offsetY: 4,
    offsetX: 5,
    style: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#373d3f',
    },
  },
  markers: {
    size: 5,
    strokeWidth: 0,
    hover: {
      size: 9,
    },
  },
  grid: {
    show: true,
    padding: {
      bottom: 0,
    },
  },
  labels: ['1990', '2000', '2010', '2020', '2024'],
  xaxis: {
	  
    tooltip: {
      enabled: true,
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    offsetY: -6,
    labels: {
      colors: '#RRGGBB',
    },
  },
  grid: {
    borderColor: '#D9DBF3',
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
};

var lineChart = new ApexCharts(document.querySelector('#line-chart'), chartOptions);
lineChart.render();