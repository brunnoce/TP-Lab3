const app = Vue.createApp({
    data() {
        return {
            nuevoVideojuego: {
                nombre: '',
                plataforma: '',
                estado: '',
                puntaje: ''
            },
            videojuegos: []
        }
    },
    methods: {
        registrarVideojuego() {
            if (this.nuevoVideojuego.nombre &&
                this.nuevoVideojuego.plataforma &&
                this.nuevoVideojuego.estado &&
                this.nuevoVideojuego.puntaje) {
                this.videojuegos.push({...this.nuevoVideojuego});
                console.log('Videojuego agregado:', this.videojuegos);
                this.nuevoVideojuego.nombre = '';
                this.nuevoVideojuego.plataforma = '';
                this.nuevoVideojuego.estado = '';
                this.nuevoVideojuego.puntaje = '';
            } else {
                alert('Por favor, completa todos los campos.');
            }
        }
    }
});

app.mount('#app');