export const PLACES_CATEGORIES = {
    SHOWS:'shows',
    PASEOS:'paseos',
    INTERECTIVOS:'interectivos',
    CAFE: 'cafe',
    RESTAURANTE: 'restaurante',
    FASTFOOD:'fastfood',
    ALL_DAY:'para pasael el dia'
}

export const places = [
    {
        id: 1,
        categories: [PLACES_CATEGORIES.PASEOS],
        name:'MAR - Museo Provincial de Arte Contemporáneo',
        address: 'Avenida Félix U. Camet & López de Gomara',
        position: {lat:'-37.97344166458383', lng:'-57.54344257162295'},
        phone:'02234717695',
        link:'https://www.instagram.com/marmuseo',
        schedules: 'Martes a Domingo de 16hs a 22hs',
        description:'Es un museo de arte contemporáneo. Cuenta con un espacio didáctico para los niños.',
    },
    {
        id: 2,
        categories: [PLACES_CATEGORIES.INTERECTIVOS, PLACES_CATEGORIES.FASTFOOD],
        name:'Mr. Fly Trampoline Park',
        address: 'Carlos Alvear 4726',
        position: {lat:'-38.030693833675066', lng:'-57.552269504159405'},
        phone:'02236707923',
        link:'https://mrfly.com.ar/inicio',
        schedules: 'Domingo a Jueves de 12:30hs a 21hs.\n Viernes y Sabados 12:30hs a 22hs.',
        description:'Parque de atracciones y temático de trampolines.',
    },
    {
        id: 3,
        categories: [PLACES_CATEGORIES.INTERECTIVOS],
        name:'Mr. Fly Inflatable Park',
        address: 'Av. Constitución 7598',
        position: {lat:'-37.952800950410754', lng:'-57.57961621950812'},
        phone:'02235033124',
        link:'https://mrfly.com.ar/mr-fly-inflatable-park',
        schedules: 'Lunes a Viernes de 13:00hs a 21hs.\n Sábados y Domingos 11:00hs a 21hs.',
        description:'Parque de atracciones y temático inflables.',
    },
    {
        id: 4,
        categories: [PLACES_CATEGORIES.FASTFOOD],
        name:'Mc con juegos infantiles',
        address: 'Av. Constitución 3950',
        position: {lat:'-37.97144523781839', lng:'-57.54295226137011'},
        phone: null,
        link: null,
        schedules: 'Lunes a Dimingo de 8:00hs a 00:00hs.',
        description:'Clásica cadena de comida rápida de larga trayectoria conocida por sus hamburguesas y papas fritas.\n Cuenta con juegos para los niños.',
    },
    {
        id: 5,
        categories: [PLACES_CATEGORIES.INTERECTIVOS],
        name:'Aeropolis',
        address: 'Av. Jorge Newbery 1745',
        position: {lat:'-38.0946940659576', lng:'-57.60177835098723'},
        phone: ' 2235228944',
        link:'https://aeropolis.com.ar/',
        schedules: 'Lunes a Dimingo de 10:00hs a 18:00hs.',
        description:'PARQUE AÉREO MDQ Circuitos en altura, tirolesas, escalada y caída libre.',
    },
    // {
    //     id: 6,
    //     type: PLACE_TYPES.GASTRONOMIA_JUEGO,
    //     iconName: ICON_NAME.GASTRONOMIA_RESTAURANT,
    //     name:'Chauvin Centro de creación',
    //     address: 'San Luis 2849',
    //     phone:'---',
    //     description:'Cada tanto tienen actividades infantiles. Consultar',
    //     position: {lat:'-38.00817188162788', lng:'-57.555411162555586'}
    // },
    {
        id: 7,
        categories: [PLACES_CATEGORIES.CAFE, PLACES_CATEGORIES.FASTFOOD],
        name:'Un Buen Lugar',
        address: 'Av. Constitución 4478',
        position: {lat:'-37.96836176593888', lng:'-57.54845089181101'},
        phone:'02235595094',
        link:'https://www.instagram.com/unbuenlugarmdp',
        schedules: 'Lunes a Dimingo de 17:00hs a 00:00hs.',
        description:'Trabajamos con reservas.\nLos turnos son de 2hs.\nPlaza Blanda de 2 a 4 años.\nSector selva + de 5 años.\nEn los sectores de juego siempre hay seños que juegan, acompañan y están pendientes de los chicos',
    },
    // {
    //     id: 8,
    //     categories: [PLACES_CATEGORIES.INTERECTIVOS],
    //     name:'Espíritu Fugitivo',
    //     address: '---',
    //     phone:'---',
    //     description:'sin informacion por el momento',
    // },
    // {
    //     id: 9,
    //     categories: [PLACES_CATEGORIES.INTERECTIVOS],
    //     name:'Espíritu Fugitivo',
    //     address: '---',
    //     phone:'---',
    //     description:`
    //     sin informacion por el momento
    //     `,
    // },
    // {
    //     id: 10,
    //     categories: [PLACES_CATEGORIES.INTERECTIVOS],
    //     name:'Escape Room Mar del Plata',
    //     address: '---',
    //     phone:'---',
    //     description:`
    //     sin informacion por el momento
    //     `,
    // },
    {
        id: 12,
        categories: [PLACES_CATEGORIES.INTERECTIVOS],
        name:'Ready Laser War',
        address: 'Santiago del Estero 1834',
        position: {lat:'-38.00130451720218', lng:'-57.54672852843552'},
        phone:'2235823968',
        link:'https://www.instagram.com/readylaserwar',
        schedules: 'Lunes a Dimingos de 18:00hs a 00:00hs.',
        description:'Centro de juegos con láser.\nTurnos de 30 minutos.\nMinimo 4 personas.\nCuenta con plaza blanda para los mas peques.\n FastFood',
    },
    {
        id: 13,
        categories: [PLACES_CATEGORIES.INTERECTIVOS, PLACES_CATEGORIES.FASTFOOD],
        name:'Ready',
        address: 'Gascón 3466',
        position: {lat:'-38.00156522754242', lng:'-57.560837924043206'},
        phone:'02235225332',
        link:'https://www.instagram.com/readymdq',
        schedules: 'Lunes a Viernes de 14:00hs a 22:00hs.\nSábados a Dimingos de 14:00hs a 00:00hs.',
        description:'Juego de combate láser super divertido. Tiene máquinas de videojuegos. Muy buen lugar para ir en familia.',
    },
    {
        id: 14,
        categories: [PLACES_CATEGORIES.INTERECTIVOS, PLACES_CATEGORIES.FASTFOOD],
        name:'El Bowling de Paso',
        address: 'Córdoba 3766',
        position: {lat:'-38.015919613543126', lng:'-57.560052829492555'},
        phone:'02235368630',
        link:'https://www.instagram.com/elbowlingdepaso',
        schedules: 'Lunes a Domingos de 18:00hs a 00:00hs.',
        description:'bowling, gamezone, fichines, arcade, konami, atari, flippers',
    },


    {
        id: 17,
        categories: [PLACES_CATEGORIES.PASEOS],
        name:'Museo de ciencias naturales',
        address: 'Av. Libertad 3099',
        position: {lat:'-37.99112712658156', lng:'-57.546584431235125'},
        phone:'02234738791',
        link:'https://www.instagram.com/museolorenzoscagliamgp',
        schedules: 'Lunes a Domingos de  15:00 a 20:00',
        description:'*MIERCOLES ENTRADA LIBRE*.\nCon visitas guiadas, talleres y charlas, es un espacio educativo que inspira a generaciones a valorar y conocer el patrimonio natural',
    },
    {
        id: 20,
        categories: [PLACES_CATEGORIES.RESTAURANTE, PLACES_CATEGORIES.CAFE, PLACES_CATEGORIES.ALL_DAY],
        name:'Granja Las Dos Marias',
        address: 'Angel Vargas 10060',
        position: {lat:'-38.008459835620535', lng:'-57.62856335743431'},
        phone:'02235832060',
        link:'https://www.instagram.com/granjalasdosmarias',
        schedules: 'Miércoles a Sábados de 10:00hs a 16:00hs.',
        description: 'Granja educativa\n👨‍🌾 Complejo turístico - productivo agroecológico.\n🐄 Granja educativa y recreativa.\nLas visitas guiadas son con  turno. Podrán tocar, alimentar, jugar y sacarse fotos con todos los animales.\nSi desean desayunar, almorzar o merendar  hay que reservar.\nPueden hacer hacer picnic',
    },
    {
        id: 21,
        categories: [PLACES_CATEGORIES.PASEOS, PLACES_CATEGORIES.FASTFOOD, PLACES_CATEGORIES.ALL_DAY],
        name:'Bioparque Batán',
        address: '158 y 152 camino Ortiz, Batán',
        position: {lat:'-38.001937754151385', lng:'-57.72743645144899'},
        phone:'02233477324',
        link:'https://www.instagram.com/bioparque_batan',
        schedules: 'Sábados y Domingos de 10:00hs a 19:00hs.',
        description:'Parque temático de dinosaurios\nFogones y parrilas\nPuestos de comida\nPuente colgante\nSector de juegos, cancha de futbol y voley en arena\nPileta en verano',
    },
    {
        id: 22,
        categories: [PLACES_CATEGORIES.RESTAURANTE],
        name:'Mediterráneo',
        address: 'Centro Comercial Puerto Local 5',
        position: {lat:'-38.04645463272011', lng:'-57.54369113870173'},
        phone:'02234800828',
        link:'https://www.instagram.com/mediterraneoresto/',
        schedules: 'Miércoles a Lunes de 12:00hs a 15:30hs.\nViernes y Sábados de 20:00hs a 23:30hs',
        description:'Restaurante pescados y mariscos\nPlaza de juegos',
    },
    {
        id: 23,
        categories: [PLACES_CATEGORIES.CAFE, PLACES_CATEGORIES.FASTFOOD],
        name:'PACHATA café & restó',
        address: 'Santa Fe 2633',
        position: {lat:'-38.00796843099539', lng:'-57.55103192294483'},
        phone:'02235859633',
        link:'https://www.instagram.com/pachata.mdq/',
        schedules: 'Lunes a Viernes de 15:00hs a 22:00hs. Sábados y Domingos de 12:00 a 22:00hs',
        description:'Pachata | cafetería y restaurante\n🔥Las pachatas más ricas de mardel!\n🌈Plaza blanda gratuita para los peques',
    },
    // {
    //     id: 24,
    //     categories: [PLACES_CATEGORIES.PASEOS, PLACES_CATEGORIES.ALL_DAY],
    //     name:'Complejo Sierra Tortuga',
    //     address: 'Juan manuel bordeu esquina valle verde, Sierra De Los Padres',
    //     phone:'0223156983161',
    //     link:'',
    //     schedules: '',
    //     description:`
    //     Entorno natural 🌱
    //     ECOPARQUE
    //     `,
    // },
    // {
    //     id: 25,
    //     categories: [PLACES_CATEGORIES.PASEOS, PLACES_CATEGORIES.FASTFOOD, PLACES_CATEGORIES.ALL_DAY],
    //     name:'La Casualidad',
    //     address: '---',
    //     phone:'---',
    //     description:`
    //     Deportes y recreación
    //     Entre naturaleza, pájaros y sonidos del viento
    //     8 hectáreas de parque
    //     refugios
    //     laberinto, palestra, metegol humano, arquería

    //     recibimos solo grupos con reserva
    //     `,
    //     position: {lat:'-37.923724345563095', lng:'-57.774698325593434'}
    // },
    {
        id: 26,
        categories: [PLACES_CATEGORIES.INTERECTIVOS, PLACES_CATEGORIES.FASTFOOD],
        name:'Karting Interlagos',
        address: 'Av. de los Trabajadores 800',
        position: {lat:'-38.048599160987344', lng:'-57.544661418056464'},
        phone:'2236832264',
        link:'https://www.instagram.com/interlagoskartingmdp',
        schedules: 'consultar al numero',
        description:'Pista de indoor karting en MDP.\nVení a divertirte! 🎉',
    },
    {
        id: 28,
        categories: [PLACES_CATEGORIES.INTERECTIVOS, PLACES_CATEGORIES.FASTFOOD],
        name:'Bajo Cero',
        address: 'San Martin 2245',
        position: {lat:'-38.001204276443524', lng:'-57.54332330483439'},
        phone:'2234561033',
        link:'https://www.instagram.com/bajoceromdp/',
        schedules: 'Lunes a Domingos de 11:00hs a 23:00hs',
        description:'PISTA DE HIELO & FAST FOOD',
    },
    {
        id: 29,
        categories: [PLACES_CATEGORIES.CAFE, PLACES_CATEGORIES.RESTAURANTE],
        name:'Casa del Mar - Villa García Uriburu',
        address: 'C. Scaglia 5400',
        position: {lat:'-37.9315105752011', lng:'-57.53286486140926'},
        phone:'02236185299',
        link:'https://www.instagram.com/casadelmar_mdp',
        schedules: 'Martes a Domingo 10:00hs de 21:00hs',
        description:'Casa rural con espacio infantil en pleno contacto con la naturaleza',
    },
    {
        id: 30,
        categories: [PLACES_CATEGORIES.PASEOS],
        name:'Torre Tanque',
        address: 'Falucho 995',
        position: {lat:'-38.013220416771915', lng:'-57.5352838972828'},
        phone:'02234514681',
        link:'https://www.instagram.com/torretanquemdp',
        schedules: 'Lunes a Viernes de 8:00 a 14:45\n y de 18:00 a 20:45\n Sabados y Domingos de 18:00 a 20:45',
        description:'*MIÉRCOLES ENTRADA LIBRE*.\nDesde su mirador 360 se puede apreciar una magnifica vista del mar y de cada rincón de la ciudad. Un paseo ideal para familia, amigos o parejas',
    },
    {
        id: 31,
        categories: [PLACES_CATEGORIES.PASEOS],
        name:'Museo Municipal de Arte Juan Carlos Castagnino',
        address: 'Av. Colón 1189',
        position: {lat:'-38.01054488514455', lng:'-57.535909845481925'},
        phone:'02234861636',
        link:'https://www.instagram.com/museocastagninomgp/',
        schedules: 'Lunes a Domingos de 17:00hs a 22:00hs',
        description:'La Villa Ortiz Basualdo es la propiedad que aloja al Museo Municipal de Arte Juan Carlos Castagnino, museo de bellas artes',
    },
    {
        id: 32,
        categories: [PLACES_CATEGORIES.PASEOS],
        name:'Archivo Museo Histórico Municipal Roberto T. Barili | Villa Mitre',
        address: 'Lamadrid 3870',
        position: {lat:'-38.02065983303446', lng:'-57.55269407120628'},
        phone:'02234951200',
        link:'https://www.instagram.com/villamitremgp',
        schedules: 'Lunes a Viernes de 9 a 14 y  de 17 a 20 hs.\n Sábados y Domingos de 17 a 20 hs.',
        description:'Archivo museo histórico municipal Roberto T. Barili',
    },
    {
        id: 33,
        categories: [PLACES_CATEGORIES.PASEOS, PLACES_CATEGORIES.CAFE],
        name:'Centro Cultural Victoria Ocampo | Villa Victoria',
        address: 'Matheu 1851',
        position: {lat:'-38.019863318768564', lng:'-57.55287387498371'},
        phone:'02234942878',
        link:'https://www.mardelplata.gob.ar/centroculturalvictoriaocampo',
        schedules: 'Lunes a Domingo de 16 a 19',
        description:'Casa Museo Residencia de veraneo de la escritora Victoria Ocampo.\nEn el primer piso cuentan la historia adaptada para niños.\nEn el patio tiene cafetería',
    },
    {
        id: 34,
        categories: [PLACES_CATEGORIES.PASEOS],
        name:'CASA SOBRE EL ARROYO | Museo Casa del Puente',
        address: 'Quintana 3998',
        position: {lat:'-38.00826602420847', lng:'-57.57392475149383'},
        phone:'4201280',
        link:'https://www.mardelplata.gob.ar/casasobreelarroyo',
        schedules: 'Lunes a Viernes de 8:15 a 14:30 horas',
        description:'Diseñada y construida por Amancio Williams y Delfina Gálvez Bunge 1943-1945. Monumento Histórico Artístico Nacional',
    },
    {
        id: 35,
        categories: [PLACES_CATEGORIES.PASEOS],
        name:'Museo Municipal José Hernández',
        address: 'Ruta 226 Km. 14.5, Laguna de los Padres',
        position: {lat:'-37.93258932157545', lng:'-57.72548671458371'},
        phone:'2234644590',
        link:'https://www.mardelplata.gob.ar/museojhernandez',
        schedules: 'Lunes a Domingo de 10:00 a 16:00',
        description:'El Museo Municipal José Hernández mantiene viva la historia rural de nuestra región, los primeros pobladores y la instalación del Saladero que dio origen a la urbanización de Mar del Plata.',
    },
    // {
    //     id: 36,
    //     categories: [PLACES_CATEGORIES.PASEOS],
    //     name:'Reducción Jesuítica Nuestra Señora Del Pilar',
    //     address: 'Laguna de los Padres',
    //     phone:'---',
    //     link:'',
    //     schedules: '',
    //     description:'',
    // },
    {
        id: 38,
        categories: [PLACES_CATEGORIES.PASEOS],
        name:'Centro Cultural Cabildo',
        position: {lat:'-37.93912001684851', lng:'-57.72007530644406'},
        address: 'Aragon 7849',
        phone:'2235931041',
        link:'https://www.instagram.com/cabildomardelplata',
        schedules: '---',
        description:'Las visitas guiadas con reserva.\nAdolfo Nieto y Ana Martino son los fundadores de la réplica local del histórico espacio. Desde 1999, el Centro Cultural Cabildo funciona como museo temático, además, cada año se expone una muestra dedicada a un prócer distinto. El objetivo de sus creadores es dejar un legado que contribuya a mejorar la sociedad marplatense.',
    },
    {
        id: 39,
        categories: [PLACES_CATEGORIES.PASEOS],
        name:'La Escollera del León',
        address: 'Escollera Sur',
        position: {lat:'-38.048283639828625', lng:'-57.53093764973684'},
        phone:'---',
        link:'https://www.instagram.com/la_escollera_del_leon_/',
        schedules: 'Lunes a Viernes de 15:00 a 19:00.\nSabados y Domingos de 11:00 a 19:00',
        description:'Un lugar distinto a todos para visitar. Recomendable para ir en familia. Hay que caminar unos 400 metros por arena',
    },
    {
        id: 60,
        categories: [PLACES_CATEGORIES.SHOWS],
        name:'Circo La Audacia',
        address: 'Dardo Rocha 600',
        position: {lat:'-37.97437905498501', lng:'-57.54403194050835'},
        phone:'---',
        link:'https://www.instagram.com/circolaaudacia/',
        schedules: 'Lunes a Domingo a las 21:00',
        description:'💈1º Circo de Mar del Plata🎪',
    },
    {
        id: 61,
        categories: [PLACES_CATEGORIES.SHOWS],
        name:'Circo Hazmereir',
        address: 'Güemes 3271 (Plaza del Agua)',
        position: {lat:'-38.018493022660294', lng:'-57.5437673672152'},
        phone:'---',
        link:'https://www.instagram.com/circohazmereir/',
        schedules: 'Lunes a Domingo a las 21:00 y 22:00',
        description:'🤡 Todos Enero y Febrero, shows a las  21:00hs y 22:00hs espectaculos para todo público🎪',
    },
    {
        id: 40,
        categories: [PLACES_CATEGORIES.CAFE, PLACES_CATEGORIES.FASTFOOD],
        name:'Shell Don Felix',
        address: 'Av. Constitución 4039',
        position: {lat:'-37.97021825586503', lng:'-57.543652259983176'},
        phone:'---',
        link:'https://www.instagram.com/shell.donfelix/',
        schedules: 'Lunes a Domingo de 7:00 a 01:00',
        description:'los juegos son sin limite de tiempo',
    },
    {
        id: 41,
        categories: [PLACES_CATEGORIES.FASTFOOD],
        name:'Plaza Canchita de los Bomberos',
        address: 'Florisbelo Acosta 3091',
        position: {lat:'-37.97366074788765', lng:'-57.544825731003314'},
        phone:'---',
        link:'---',
        schedules: 'Lunes a Domingo de 17:00 a 00:00',
        description:'Plaza con juegos y foodtruck ubicada a metros del Museo Mar y el Circo la Audacia',
    },
    {
        id: 42,
        categories: [PLACES_CATEGORIES.FASTFOOD],
        name:'Parque Primavesi',
        address: 'Av. Juan José Paso 599',
        position: {lat:'-38.029688780461', lng:'-57.54215487535372'},
        phone:'---',
        link:'---',
        schedules: 'Lunes a Domingo de 16:00 a 22:00',
        description:'Plaza con juegos y foodtruck.\nAlgunos artistas hacen show a la gorra',
    },
    {
        id: 43,
        categories: [PLACES_CATEGORIES.FASTFOOD, PLACES_CATEGORIES.SHOWS],
        name:'Paseo Filiberto',
        address: 'Floreal Gorini 691, Chapadmalal',
        position: {lat:'-38.16965811059956', lng:'-57.65145190300205'},
        phone:'---',
        link:'https://www.instagram.com/paseofiliberto/',
        schedules: '---',
        description:'Patio de Food trucks.\nFeria.\nMini golf.\nShows',
    },
    {
        id: 44,
        categories: [PLACES_CATEGORIES.FASTFOOD, PLACES_CATEGORIES.SHOWS],
        name:'El Parque de Mogotes',
        address: 'Frente al balneario 9 de Punta Mogotes',
        position: {lat:'-38.070156456545334', lng:'-57.546040789263685'},
        phone:'---',
        link:'https://www.instagram.com/elparquedemogotes',
        schedules: 'Lunes a Domingo de 18:00 a 00:00',
        description:'Patio de Food trucks.\nFeria.\nMini golf.\nShows a las 19:00 y las 20:30',
    },
    {
        id: 45,
        categories: [PLACES_CATEGORIES.CAFE],
        name:'Dreams Barber & Coffee',
        address: 'Av. Patricio Peralta Ramos 401',
        position: {lat:'-37.98563705270785', lng:'-57.54510750427696'},
        phone:'---',
        link:'https://www.instagram.com/dreams.cafesp/',
        schedules: 'Lunes a Domingo de 8:00 a 20:00',
        description:'Cafeteria de especialidad.\nTiene mesas para que los chicos dibujen.\nPet friendly',
    },
    {
        id: 53,
        categories: [PLACES_CATEGORIES.FASTFOOD, PLACES_CATEGORIES.SHOWS, PLACES_CATEGORIES.ALL_DAY],
        name:'Aquarium',
        address: 'Av. de los Trabajadores 5600',
        position: {lat:'-38.089140578335424', lng:'-57.543982118751586'},
        phone:'---',
        link:'https://www.aquarium.com.ar/',
        schedules: 'Lunes a Domingo de 10:00 a 20:00',
        description:'Descubrí la magia de la Fauna Marina en uno de los parques marinos más importantes de Argentina.\nShows.\nSector de juegos.\nPuestos de comida.',
    },
    {
        id: 54,
        categories: [PLACES_CATEGORIES.INTERECTIVOS],
        name:'Mini Golf',
        address: 'Frente al balneario 9 de Punta Mogotes',
        position: {lat:'-38.069863161719', lng:'-57.54561075736413'},
        phone:'---',
        link: 'https://www.instagram.com/minigolfdellago',
        schedules: 'Lunes a Domingo de 18:00 a 00:00',
        description:'Dentro del Parque Mogotes.',
    },
    {
        id: 55,
        categories: [PLACES_CATEGORIES.CAFE],
        name:'Cafe La Trinidad',
        address: 'Juan Bautista Justo 698',
        position: {lat:'-38.03572358301629', lng:'-57.54928690904176'},
        phone:'0223155211173',
        link:'https://www.instagram.com/cafelatrinidad_mdp',
        schedules: 'Lunes a Domingo de 7:00 a 00:00',
        description:'Cafeteria tradicional, acompañada de juegos para niños entre los 2 a los 7 años.\nNo es obligatoria la consumision para los pequeños, no cobran entrada extra a los juegos, solo lo que  consuma el adulto.\n Cada papa se hace responsable del pequeño',
    },
    {
        id: 56,
        categories: [PLACES_CATEGORIES.FASTFOOD, PLACES_CATEGORIES.INTERECTIVOS, PLACES_CATEGORIES.ALL_DAY],
        name:'Aquasol',
        address: 'Ruta 2 km 386',
        position: {lat:'-37.823035463325745', lng:'-57.621720293913555'},
        phone:'02236647119',
        link:'https://www.aquasol.com.ar',
        schedules: 'Lunes a Domingo de 9:00 a 21:00',
        description:'El parque acuático más grande de ARGENTINA',
    },
    {
        id: 57,
        categories: [PLACES_CATEGORIES.FASTFOOD, PLACES_CATEGORIES.INTERECTIVOS, PLACES_CATEGORIES.ALL_DAY],
        name:'Aquopolis',
        address: 'Av. Jorge Newbery 1800',
        position: {lat:'-38.096800827135', lng:'-57.602295754419046'},
        phone:'---',
        link:'https://aquopolis.com.ar/',
        schedules: 'Lunes a Domingo de 10:00 a 19:00',
        description:'El PARQUE ACUÁTICO MAS GRANDE y MODERNO de ARGENTINA',
    },
    {
        id: 58,
        categories: [PLACES_CATEGORIES.RESTAURANTE, PLACES_CATEGORIES.FASTFOOD],
        name:'Cangapol Garage',
        address: 'Almafuerte 249',
        position: {lat:'-38.02952366117288', lng:'-57.538256832697314'},
        phone:'02233402499',
        link:'https://www.instagram.com/cangapolgarage/',
        schedules: 'Lunes a Domingo de 18:00 a 00:00',
        description:'Shows🎸\nBebidas🍺\nGastronomía🍔',
    },
    {
        id: 59,
        categories: [PLACES_CATEGORIES.FASTFOOD, PLACES_CATEGORIES.INTERECTIVOS],
        name:'Parque de Diversiónes Santa Clara del Mar',
        address: 'Av. Bristol 196, Santa Clara del Mar',
        position: {lat:'-37.841821756807676', lng:'-57.50534105343142'},
        phone:'---',
        link:'https://www.instagram.com/parque.santaclara/',
        schedules: 'Lunes a Domingo de 18:00 a 00:00',
        description:'Parque de diversione con entrada gratuita, y solo se cobrará por los juegos que se utilicen, lo que permite a los visitantes disfrutar del ambiente sin costo alguno',
    },
    {
        id: 62,
        categories: [PLACES_CATEGORIES.PASEOS, PLACES_CATEGORIES.INTERECTIVOS],
        name:'Viven Dinosaurios',
        address: 'Av. Patricio Peralta Ramos 2502 (Hotel Provincial)',
        position: {lat:'-38.00614950642845', lng:'-57.541706422455306'},
        phone:'---',
        link:'https://www.instagram.com/vivendinosaurios/',
        schedules: 'Lunes a Viernes de 14:00 a 00:00. Sábados y Domingos de 10:00 a 23:00',
        description:'Un viaje a la prehistoria. Más de 50 Dinosaurios Gigantes que se mueven y emiten sonidos. Además de Experiencias Inmersivas, un patio de juegos y muchas actividades para disfrutar en GRANDEZzzzzz',
    },
    {
        id: 63,
        categories: [PLACES_CATEGORIES.INTERECTIVOS],
        name:'Super Jump',
        address: 'Av. de los Trabajadores 1800,Punta Mogotes',
        position: {lat:'-38.059484963974505', lng:'-57.54385863824663'},
        phone:'---',
        link:'https://www.instagram.com/superjumpok',
        schedules: 'Lunes a Domingo de 17:00hs a 22:00hs',
        description:'Querés saber cómo se siente recorrer 300 metros de inflables?',
    },
    {
        id: 64,
        categories: [PLACES_CATEGORIES.PASEOS, PLACES_CATEGORIES.INTERECTIVOS],
        name:"Lucciano's Central Store",
        address: 'Parque Industrial General Savio, C. 7 entre 6 y 9',
        position: {lat:'-37.99663139567121', lng:'-57.66466793634406'},
        phone:'---',
        link:'https://www.instagram.com/luccianos_',
        schedules: 'Lunes a Domingo de 8:00hs a 20:00hs',
        description:'Encontrá sabores y productos exclusivos.\nY si querés conocer cómo hacen cada uno de sus productos, te esperan con recorridos por la fábrica.\n Reservá tu lugar en visitas@luccianos.com.ar.',
    },
    {
        id: 65,
        categories: [PLACES_CATEGORIES.SHOWS],
        name:'Circo Houdini',
        address: 'Av. Luro y Chaco',
        position: {lat:'-37.98897139657669', lng:'-57.56465538491143'},
        phone:'---',
        link:'https://www.instagram.com/circohoudini',
        schedules: 'Lunes a Domingo 20:00hs y 22:00hs',
        description:'Show de acrobatas locos.\nDias nublados, también hacen función a las 16:00',
    },
    {
        id: 66,
        categories: [PLACES_CATEGORIES.SHOWS],
        name:'Circo Servian',
        address: 'Av. Felix U Cament 3100',
        position: {lat:'-37.95021752836367', lng:'-57.53662381623416'},
        phone:'---',
        link:'https://www.instagram.com/servianelcirco',
        schedules: 'Lunes a Domingo 19:00hs y 22:00hs',
        description:'Presenta el “El Gran Sueño”, un show a puro dinamismo que busca concientizar sobre el cuidado del medio ambiente, presentando artistas nacionales e internacionales fusionados con elementos teatrales, coreográficos y tecnología lumínica/auditiva de última generación, vestuarios inspirados en la época post-apocalíptica, música original y aparatos circenses diseñados por la compañía.',
    },
    {
        id: 67,
        categories: [PLACES_CATEGORIES.SHOWS],
        name:'Cirque XXI',
        address: 'Frente al Faro',
        position: {lat:'-38.09122967703032', lng:'-57.54634605586572'},
        phone:'---',
        link:'https://www.instagram.com/cirquexxi.oficial',
        schedules: 'Lunes a Domingo 20:00hs y 22:00hs',
        description:'CIRQUE XXI PRESENTA SU ULTIMA CREACIÓN “ANTIqUUS” UNA SUPER PRODUCCIÓN DE 80 MINUTOS QUE TRANSPORTA AL PUBLICO A LA FASCINANTE “ERA DORADA” DE LOS CIRCOS ANTIGUOS.\nLA ESTÉTICA VINTAGE, UNA PUESTA ESCÉNICA ABSOLUTAMENTE DESLUMBRANTE.\nARTISTAS DE ALTO RIESGO, MUSICOS EN VIVO Y LAS INSTALACIONES DE ÚLTIMA GENERACIÓN, LOGRAN LLEVAR A LOS ESPECTADORES DE TODAS LAS EDADES A UN VIAJEA TRAVÉS DEL TIEMPO ABSOLUTAMENTE MÁGICO Y FASCINANTE.',
    },

]