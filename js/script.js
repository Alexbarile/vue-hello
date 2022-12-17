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
            blue: 'text-blue',
            visibility: 'd-none',

            // BONUS richiamo foto 
            image: 'https://picsum.photos/200/300',
        }
    },
    methods:{
        greetings: function(){
            this.name_surname = `${this.name} ${this.surname}`;
            if(this.blue == 'text-blue'){
                this.blue = 'text-green';
            }
            else{
                this.blue = 'text-blue';
            }
            this.visibility = 'display-block';
        }
    }
}).mount('#container')