const{
    createApp
} = Vue;

createApp({
    data(){
        return{
            name: '',
            surname: '',
            name_surname: '',

            // usata v-bind
            red: 'text-danger',

            // BONUS richiamo foto 
            image: 'https://picsum.photos/200/300'
        }
    },
    methods:{
        greeting: function(){
            this.name_surname = `${this.name} ${this.surname}` 
        }
    }
}).mount('#container')