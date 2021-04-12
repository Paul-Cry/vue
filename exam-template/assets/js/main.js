const reader = new FileReader();

const app = new Vue({
    el: "#app",
    data: {
        page: 'index',
        articles: [
            {
                id: 1,
                name: 'Задачи организации',
                description: 'Не следует, однако забывать, что консультация с широким активом влечет за собой процесс внедрения и модернизации направлений прогрессивного развития. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки направлений прогрессивного развития.',
                image: 'assets/images/placeholder-blue.png',
                date: '2021-04-10 16:00:00'
            },
            {
                id: 2,
                name: 'Формирование позиции',
                description: 'С другой стороны начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке форм развития. Таким образом консультация с широким активом требуют от нас анализа новых предложений.',
                image: 'assets/images/placeholder-blue.png',
                date: '2021-04-09 16:00:00'
            },
            {
                id: 3,
                name: 'Значимость проблем',
                description: 'Значимость этих проблем настолько очевидна, что рамки и место обучения кадров играет важную роль в формировании существенных финансовых и административных условий.',
                image: 'assets/images/placeholder-blue.png',
                date: '2021-04-08 16:00:00'
            },
            {
                id: 4,
                name: 'Важность консультаций',
                description: 'Повседневная практика показывает, что консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
                image: 'assets/images/placeholder-blue.png',
                date: '2021-04-12 16:00:00'
            },
            {
                id: 5,
                name: 'Новая модель',
                description: 'Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки направлений прогрессивного развития. Повседневная практика показывает, что новая модель организационной деятельности в значительной степени обуславливает создание систем массового участия.',
                image: 'assets/images/placeholder-blue.png',
                date: '2021-05-01 16:00:00'
            },
            {
                id: 6,
                name: 'Опыт',
                description: 'Разнообразный и богатый опыт сложившаяся структура организации играет важную роль в формировании новых предложений. Товарищи! постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке дальнейших направлений развития. ',
                image: 'assets/images/placeholder-blue.png',
                date: '2021-04-01 16:00:00'
            },
            {
                id: 7,
                name: 'Укрепление и развитие',
                description: 'Товарищи! укрепление и развитие структуры способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.',
                image: 'assets/images/placeholder-blue.png',
                date: '2021-04-10 20:00:00'
            },
            {
                id: 8,
                name: 'Участие',
                description: 'Идейные соображения высшего порядка, а также новая модель организационной деятельности позволяет выполнять важные задания по разработке систем массового участия.',
                image: 'assets/images/placeholder-blue.png',
                date: '2021-04-29 16:00:00'
            }
        ],
        randomArticle: null,
        showPageIndex: null,
        post: {
            name: null,
            description: null,
            image: null,
            date: null
        },
        editPost: null,
        editPost_image: null
    },
    created() {
        this.randomazer()
    },
    methods: {
        randomazer: function () {
            this.randomArticle = this.articles[Math.floor(Math.random() * this.articles.length)]
        },
        showArticle: function (index) {
            this.page = 'post';
            this.showPageIndex = this.articles[index];
        },
        removeArticle: function (index) {
            this.articles.splice(index, 1)
        },
        addimage() {

            let file = event.target.files[0];
            let reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onloadend = () => {
            this.post.image =reader.result;
            };  
            if(this.post.image){
                this.editPost_image = this.post.image
            }
        },
        addArticle() {
            const postOne = this.post
            this.articles.push(postOne)
            this.page = "all";
            // this.post.image = null;
            // this.post.name = null;
            // this.post.description = null;
        },
        editArticle(index){
            this.page = 'edit';
            let word
            this.editPost = this.articles[index]
            this.editPost_image = this.editPost.image;
        },


    }
})