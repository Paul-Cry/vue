const app = new Vue({
	el: '#app',
	data: {
		input: {
			text: null,
			time: null,
			date: null
		},
		mass: [],
		sortMass:[]
	},
	

	methods: {
		addElement(){
			this.currentime();
			let element = {
				text: this.input.text,
				time: this.input.time,
				date: this.input.date 
			}
			this.mass.push(element);
			this.input.text = '';
			this.sortDate()
			console.log(this.sortMass)
		},
		currentime(){
			this.input.time = new Date().getHours() + ':' + new Date().getMinutes() +':' + new Date().getSeconds();
			this.input.date = new Date()
		},
		deleteTask(index){
			this.mass.splice(index, 1);
		},
		sortDate(){
			this.mass.sort((a, b) => new Date(a.date) * -1 - new Date(b.date) * -1)
		}
	},


})