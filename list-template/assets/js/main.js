Vue.component('message',{
	props: ['text'],
	template: `
	<a href="#" class="list-group-item list-group-item-action">
		<slot></slot>
	</a> `,
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
		}
	}

})