Vue.component('message',{
	props: ['text'],
	template: `
	 `,
	data(){
		return{
			
		}
	}
})


const app = new Vue({
	el: '#app',
	data: {
		input: {
			text: null,

		},
		mass: [{ text:'Задача номер одни'}, {text:'Задача номер два'} ],
		tasks: {
				text: null
			}
	},
	methods: {
		addElement(text){
			this.mass.push(text)
		},
		currentime(){
			this.hours = new Date().getHours() + ':' + new Date().getMinutes() +':' + new Date().getSeconds();
		}
	}


})