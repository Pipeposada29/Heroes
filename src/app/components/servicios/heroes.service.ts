import { Injectable } from "@angular/core";

@Injectable()
export class HeroesService {
  private heroes: Heroe[] = [
    {
      nombre: "Presidenta",
      bio:
        "Sara Emilia Lopez Giraldo",
      img: "assets/img/sara_emilia_sentra_unicol.jpg",
      aparicion: "2019 - 2023 ",
     
    },
    {
      nombre: "Vicepresidenta",
      bio:
        "LORIE CRISTINA BELTRAN ESPITIA",
      img: "assets/img/lore.jpg",
      aparicion: "2019 - 2023",
     
    },
    {
      nombre: "Fiscal",
      bio:
        "LEON EDGARDO JARAMILLO HERNANDEZ",
      img: "assets/img/usuario.jpg",
      aparicion: "2019 - 2023",
    
    },
    {
      nombre: "Secretario De Asuntos Laborales",
      bio:
        "FREDY ALONSO VALDERRAMA CALIZ  ",
      img: "assets/img/fredy.jpg",
      aparicion: "2019 - 2023",
     
    },
    {
      nombre: "Secretario General",
      bio:
        "Carlos Mario Alvarez Zuleta",
      img: "assets/img/carlos.jpg",
      aparicion: "2019 - 2023",
      
    },
    {
      nombre: "Tesorero",
      bio: 'Jair Gerardo Alvarado Araque',
      img: "assets/img/jair.jpg",
      aparicion: "2019 - 2023",
    
    },
    {
      nombre: "Secretario De Comunicaciones",
      bio:
        "Luis Felipe Villa Londoño",
      img: "assets/img/luis.jpg",
      aparicion: "2019 - 2023",
    
    },
    {
      nombre: "Secretario De Derechos Humanos",
      bio:
        "Guillermo Pereira Medina",
      img: "assets/img/guillermo.jpg",
      aparicion: "2019 - 2023",
    
    },
    {
      nombre: "Secretaria De Genero",
      bio:
        'Rosalba Mena Garces',
      img: "assets/img/rosalba.jpg",
      aparicion: "2019 - 2023",
   
    },
    {
      nombre: "Secretario de Deportes",
      bio:"Nelson Perez Mejia",
      img: "assets/img/nelson.jpg",
      aparicion: "2019 - 2023",
     
    }
  ];

  constructor() {
    console.log("Servicio listo para usar!!");
  }

  getHeroes(): Heroe[] {
    return this.heroes;
  }
  getHeroe(idx: string) {
    return this.heroes[idx];
  }
  buscarHeroe(termino: string) {
    let heroesArr: Heroe[] = [];
    termino = termino.toLowerCase();

    for (let i = 0; i < this.heroes.length; i++) {
      let heroe = this.heroes[i];
      let nombre = heroe.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        heroe.idx = i;
        heroesArr.push(heroe);
      }
    }
    return heroesArr;
  }
}

export interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  
  idx?: number;
}
