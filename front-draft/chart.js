		var data = [
		  {
			color:"#15b999",
			highlight: "#FF5A5E",
			label: "Carlos Moura",
			value: 5
		  },
		  {
			color:"#bcc2c7",
			highlight: "#5AD3D1",
			label: "Fernanda Oliveira",
			value: 15
		  },
		  {
			color:"#2c96dd",
			highlight: "#FFC870",
			label: "Hugo Silva",
			value: 20
		  },
		  {
			color:"#9c55b8",
			highlight: "#FD5A5E",
			label: "Eliza Souza",
			value: 20
		  },
		  {
			color:"#e94a35",
			highlight: "#FC5A5E",
			label: "Anderson Santos",
			value: 40
		  },
		]

		var ctx = document.getElementById("myChart").getContext("2d");
		//new Chart(ctx).Pie(data);
		new Chart(ctx).Doughnut(data);
