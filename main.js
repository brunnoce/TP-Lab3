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
            errores: [],
            informacion: []
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
            if (this.nuevoVideojuego.puntaje !== '' && (isNaN(this.nuevoVideojuego.puntaje) || this.nuevoVideojuego.puntaje < 1 || this.nuevoVideojuego.puntaje > 10)) {
                this.errores.push("El puntaje debe ser un número entre 1 y 10.");
                comprobado = false;
            }

            return comprobado;
        },
        mostrarMasInfo(videojuego) {
            this.informacion = videojuego;
        }
        
    },
});
app.mount('#app');
