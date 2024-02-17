const getData = async () => {
	const response = await fetch('./data.json')
	const data = await response.json()
	const day = data.map((item) => item.day)
	const expense = data.map((item) => item.amount)
	return { day, expense }
}

const dataChart = async () => {
	const dayAmount = await getData()
	const expenses = dayAmount.expense
	const maxExpenseIndex = dayAmount.expense.indexOf(Math.max(...expenses))
	const chart = document.getElementById('myChart')
	new Chart(chart, {
		type: 'bar',
		data: {
			labels: dayAmount.day,
			datasets: [
				{
					data: dayAmount.expense,
					backgroundColor: (context) => {
						if (context.dataIndex === maxExpenseIndex) {
							return '#b4dfe5'
						} else {
							return '#ec755d'
						}
					},
					hoverBackgroundColor: '#ff9985',
					borderRadius: 5,
					id: 'expense-bars',
				},
			],
		},
		options: {
			scales: {
				y: {
					display: false,
				},
				x: {
					grid: {
						display: false,
					},
				},
			},
			plugins: {
				legend: {
					display: false,
				},
				tooltip: {
					backgroundColor: '#342015',
					titleFont: {
						size: 18,
					},
				},
			},
		},
	})
}
dataChart()
