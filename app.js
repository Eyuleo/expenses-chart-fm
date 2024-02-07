fetch('./data.json')
	.then((res) => res.json())
	.then((data) => {
		const days = data.map((info) => info.day)
		const expenses = data.map((info) => info.amount)
		const maxExpenseIndex = expenses.indexOf(Math.max(...expenses))
		const chart = document.getElementById('myChart')
		new Chart(chart, {
			type: 'bar',
			data: {
				labels: days,
				datasets: [
					{
						data: expenses,
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
	})
