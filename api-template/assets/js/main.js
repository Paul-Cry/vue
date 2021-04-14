const host = 'http://37.46.133.40:5000/api'
const app = new Vue({
  el: '#app',
  data: {
    page: 'login',
    toasts:
     [],
    posts: [],
    registerForm: {
      name: null,
      login: null,
      password: null
    },
    loginForm: {
      login: null,
      password: null
    },
    postForm: {
      name: null,
      text: null,
      image: null,
      date: new Date,
      time: null
    },
    curentPost:null,
    user: null,
    // myPost:  []  , 
    myPost: [] 
  
  },
  created(){
    this.loadLocalData();
    this.getAllPosts();
  },
  methods: {
    openPage(pageName) {
     this.page = pageName;
    },
    getNowTime(){
      this.postForm.time = this.postForm.date.getFullYear()+ '-'+ this.postForm.date.getMonth()+ '-' + this.postForm.date.getDate() +' '+ this.postForm.date.getHours()+':' + this.postForm.date.getMinutes();
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
          this.openPage('index')
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
        .then(data => {
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
          if(res.status === 200){
              this.showToast('Вы успешно вошли', ["alert-success"]);
              this.openPage('profile');   
          }else
            this.showToast('Что-то пошло не так', ["alert-danger"]);


          return res.json();
        
 
        })
        .then(data => {
         this.user = data;
         this.saveLocalData()
        });
    },
     logout(){  
        this.user = null;
        localStorage.removeItem('user');
        this.openPage('login')

    },
    saveLocalData(){
      localStorage.setItem('user', JSON.stringify(this.user));
    },
    loadLocalData(){
      this.user = JSON.parse(localStorage.getItem('user'));
    },
    fileSelected(){
      if(event.target.files.length)
         this.postForm.image = event.target.files[0]
      
    },
    createPost(){
        let formData = new FormData();
        formData.append('name', this.postForm.name);
        formData.append('text', this.postForm.text);
        formData.append('image', this.postForm.image);
        formData.append('time', this.postForm.time);
        this.postForm.name="";
        this.postForm.text="";
        this.postForm.image="";

      fetch(host + '/post', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.user.token}`
        },
        body: formData
      })  
      .then(res => {
        if(res.status === 201){
          this.showToast('Пост выложен', ['alert-success']);
          this.getAllPosts();
        }

      })
    },
    myPostsFind(){
      if(this.myPost.length < 1){
          this.myPost = [];
          for(let element of this.posts){
            if(this.user.username == element.user)
              this.myPost.push(element); 
              // this.myPost.idPost.push(element.id); 
          }    
      }
      this.openPage('profile')
    },
    showPost(index){
      this.curentPost = this.posts[index];
      this.openPage('post')
    },
    removePost(index){
      for(let i=0; i< this.posts.length; i++){
              if(this.myPost[index].id == this.posts[i].id){
                console.log(43)
                this.posts.splice(--i, 1);
                this.myPostsFind()
                }  
    }
  }
}

});

