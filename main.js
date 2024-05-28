const app = Vue.createApp({
    data() {
        return {
            nuevoVideojuego: {
                nombre: '',
                plataforma: '',
                estado: '',
                puntaje: ''
            },
            videojuegos: [],
            filtro: {
                nombre: '',
                plataforma: '',
                estado: ''
            },
            errores: []
        }
    },
    computed: {
        videojuegosFiltrados() {
            return this.videojuegos.filter(videojuego => {
                return (
                    (this.filtro.nombre === '' || videojuego.nombre.toLowerCase().includes(this.filtro.nombre.toLowerCase())) &&
                    (this.filtro.plataforma === '' || videojuego.plataforma === this.filtro.plataforma) &&
                    (this.filtro.estado === '' || videojuego.estado === this.filtro.estado)
                );
            });
        }
    },
    methods: {
        registrarVideojuego() {
            this.errores = [];
            if (this.comprobar()) {
                this.videojuegos.push({...this.nuevoVideojuego});
                console.log('Videojuego agregado:', this.videojuegos);
                this.nuevoVideojuego.nombre = '';
                this.nuevoVideojuego.plataforma = '';
                this.nuevoVideojuego.estado = '';
                this.nuevoVideojuego.puntaje = '';
            }
        },
        comprobar() {
            let comprobado = true;
            if (this.nuevoVideojuego.nombre === '') {
                this.errores.push("El nombre no puede estar vacío.");
                comprobado = false;
            }
            if (this.nuevoVideojuego.plataforma === '') {
                this.errores.push("Debe seleccionar una plataforma.");
                comprobado = false;
            }
            if (this.nuevoVideojuego.estado === '') {
                this.errores.push("Debe seleccionar un estado.");
                comprobado = false;
            }

            return comprobado;
        }
    }
});

app.mount('#app');
