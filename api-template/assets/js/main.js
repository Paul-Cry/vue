const host = 'http://37.46.133.40:5000/api'
const app = new Vue({
  el: '#app',
  data: {
    page: 'index',
    toasts: [],
    posts: [],
    registerForm: {
      name: null,
      login: null,
      password: null
    },
    loginForm: {
      email: null,
      password: null
    }
  },
  created(){
    this.getAllPosts();
  },
  methods: {
    openPage(pageName) {
      this.page = pageName;
    },
    showToast(text, classes, duration = 2000) {
      const toast = { text, classes, id: Math.random() };

      this.toasts.push(toast);

      setTimeout(() => {
        this.toasts.splice(this.toasts.indexOf(toast), 1);
      }, duration);
    },
    getAllPosts(){

      fetch( host + '/post')
        .then(res => res.json())
        .then(data => {
          this.posts = data;
        });
    },
    register(){
      fetch(host + '/register', {
        method: 'POST',
        headers: {
          'Content-Type' : 'aplication/json'
        },
        body: JSON.stringify(this.registerForm)
      })
        .then(res => {
          if(res.status === 201){
              this.showToast('Вы успешно зарегистрировались', ["alert-success"]);
              this.openPage('login');
          }else{
            this.showToast('Что-то пошло не так', ["alert-danger"]);
          }
        })
    },
    login(){
       fetch(host + '/login', {
        method: 'POST',
        headers: {
          'Content-Type' : 'aplication/json'
        },
        body: JSON.stringify(this.loginForm)
      })
        .then(res => {
          if(res.status === 201){
              this.showToast('Вы успешно вошли', ["alert-success"]);   
          }else{
            this.showToast('Что-то пошло не так', ["alert-danger"]);
          }
          return res.json();
        })
        .then(data => {
          console.log(data);
        })
    }
    
  }
});


