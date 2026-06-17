// ===================================================
// MOLLEBAMBA — Tesoro Andino | Data v2.0
// ===================================================

const datosMollebamba = {

  // ===== DANZAS =====
  danzas: [
    {
      nombre: "Los Osos",
      imagen: "imagenes/lososos.jpg",
      descripcion: "Representación del respeto a la fauna andina, con imponentes máscaras talladas a mano y pasos enérgicos que evocan la fuerza del oso de anteojos.",
      tag: "Danza ancestral"
    },
    {
      nombre: "Carnaval Mollebambino",
      imagen: "imagenes/carnaval.jpg",
      descripcion: "Yunza, serpentina y tinya. Alegría pura en febrero: el color y el ritmo toman las calles del distrito en una explosión de identidad cultural.",
      tag: "Febrero"
    },
    {
      nombre: "Los Negros",
      imagen: "imagenes/losnegros.jpg",
      descripcion: "Danza colonial que evoca la lucha y libertad de los esclavos africanos. Sus trajes y coreografía conservan siglos de historia viva.",
      tag: "Danza colonial"
    }
  ],

  // ===== PLATOS =====
  platos: [
    {
      nombre: "Ajiaco de Cuy",
      imagen: "imagenes/cuy_chactado.png",
      descripcion: "Guiso espeso con maní tostado y ají panca, el plato bandera de Mollebamba. Se sirve en toda celebración importante.",
      tag: "Plato bandera"
    },
    {
      nombre: "Cabrito al Horno",
      imagen: "imagenes/cabrito.png",
      descripcion: "Adobado en chicha de jora artesanal, tierno y aromático. La receta se transmite de generación en generación.",
      tag: "Tradición"
    },
    {
      nombre: "Caldo de Gallina",
      imagen: "imagenes/caldodegallina.png",
      descripcion: "Reconfortante y nutritivo, elaborado con gallina criolla, fideos caseros, hierbabuena y papa amarilla de la zona.",
      tag: "Clásico"
    }
  ],

  // ===== TRADICIONES =====
  tradiciones: [
    {
      titulo: "Semana Santa",
      imagen: "imagenes/semanaS01.jpg",
      descripcion: "Procesiones solemnes, viacrucis en vivo, misas de madrugada y platillos típicos de temporada. Una de las celebraciones más conmovedoras de la provincia.",
      tag: "Marzo / Abril"
    },
    {
      titulo: "Virgen del Carmen",
      imagen: "imagenes/imagen04.png",
      descripcion: "Patrona del distrito. Cada 16, 17 y 18 de julio el pueblo entero se viste de fiesta con procesión, danzas y fuegos artificiales.",
      tag: "16 Julio"
    },
    {
      titulo: "Señor de la Misericordia",
      imagen: "",
      descripcion: "Festividad el 14 de septiembre con misas solemnes, comparsas de danzantes y una procesión que recorre todo el distrito.",
      tag: "14 Septiembre"
    }
  ],

  // ===== GALERÍA =====
  galeria: [
    { src: "imagenes/imagen.png",              alt: "Nevado protector de Mollebamba",   caption: "Nevado protector" },
    { src: "imagenes/semanaS01.jpg",           alt: "Semana Santa en Mollebamba",       caption: "Semana Santa" },
    { src: "imagenes/imagen02.png",            alt: "Río Mollebamba",                   caption: "Río Mollebamba" },
    { src: "imagenes/imagen03.png",            alt: "Plaza de Armas",                   caption: "Plaza de Armas" },
    { src: "imagenes/imagen04.png",            alt: "Virgen del Carmen",                caption: "Virgen del Carmen" },
    { src: "imagenes/imagen05.png",            alt: "Caminos ancestrales",              caption: "Caminos ancestrales" },
    { src: "imagenes/paisaje_mollebamba.jpg",  alt: "Mirador de Mollebamba",            caption: "Mirador andino" }
  ],

  // ===== ARTESANÍAS =====
  artesanias: [
    {
      nombre: "Tejidos en lana",
      imagen: "imagenes/tejido.jpg",
      descripcion: "Chompas, ponchos y mantas elaborados por tejedoras locales con técnicas heredadas de los antiguos habitantes.",
      tag: "Artesanía"
    },
    {
      nombre: "Mates burilados",
      imagen: "imagenes/mates.jpg",
      descripcion: "Arte ancestral tallado sobre calabaza seca, con motivos andinos que narran costumbres y paisajes de la región.",
      tag: "Arte andino"
    },
    {
      nombre: "Instrumentos musicales",
      imagen: "imagenes/instrumentos.jpg",
      descripcion: "Quenas, tinya y charangos tallados a mano por artesanos del distrito que mantienen viva la música tradicional.",
      tag: "Música"
    }
  ],

  // ===== TESTIMONIOS =====
  testimonios: [
    {
      nombre: "Ana López",
      ciudad: "Lima",
      comentario: "El paisaje es impresionante y la danza de los osos es absolutamente única. Es una experiencia que no se olvida. Volveré cada año sin dudarlo.",
      estrellas: 5
    },
    {
      nombre: "Carlos Mendoza",
      ciudad: "Trujillo",
      comentario: "El ajiaco de cuy es el mejor que he probado en toda mi vida. La gente es increíblemente hospitalaria y el paisaje andino es de otro mundo.",
      estrellas: 4
    },
    {
      nombre: "Lucía Torres",
      ciudad: "Chiclayo",
      comentario: "Fuimos en Semana Santa y fue mágico. Las procesiones, la comida, la calidez de la gente... Mollebamba tiene algo especial que no se encuentra en otro lado.",
      estrellas: 5
    }
  ],

  // ===== CALENDARIO =====
  festividades: [
    {
      mes: "Enero",
      dia: 1,
      icono: "🌄",
      nombre: "Año Nuevo Andino",
      descripcion: "Celebración con rituales de agradecimiento a la Pachamama y al amanecer del nuevo año."
    },
    {
      mes: "Febrero / Marzo",
      dia: null,
      icono: "🎉",
      nombre: "Carnaval Mollebambino",
      descripcion: "Yunza, serpentina, música de tinya y una alegría contagiosa que inunda cada rincón del pueblo."
    },
    {
      mes: "Marzo / Abril",
      dia: null,
      icono: "✝️",
      nombre: "Semana Santa",
      descripcion: "Procesión del Señor del Santo Sepulcro, viacrucis en vivo y la figura del 'Carga Palo'. Una celebración profundamente emotiva."
    },
    {
      mes: "Julio",
      dia: 16,
      icono: "🌟",
      nombre: "Virgen del Carmen",
      descripcion: "Patrona del distrito. Procesión solemne, danzas típicas y castillos de fuegos artificiales durante tres días."
    },
    {
      mes: "Agosto",
      dia: 3,
      icono: "🎂",
      nombre: "Aniversario del Distrito",
      descripcion: "Fundación de Mollebamba (3 de agosto de 1920). Desfile cívico y actividades culturales."
    },
    {
      mes: "Septiembre",
      dia: 14,
      icono: "🙏",
      nombre: "Señor de la Misericordia",
      descripcion: "Misa solemne, procesión por las principales calles del distrito y comparsas de danzantes."
    },
    {
      mes: "Noviembre",
      dia: 2,
      icono: "🕯️",
      nombre: "Día de los Difuntos",
      descripcion: "Visita a cementerios con ofrendas florales, comidas típicas y el respeto ancestral a los que ya no están."
    }
  ],

  // ===== SERVICIOS TURÍSTICOS =====
  serviciosTurismo: [
    {
      id: 1,
      nombre: "Laguna de Huamanbul",
      ubicacion: "Zona alta de Miraflores, Mollebamba",
      descripcion: "Hermosa laguna rodeada de un bosque de árboles silvestres. El agua cambia de color al mediodía. Según la tradición, es un puquio o manantial de origen ancestral de gran importancia espiritual.",
      imagen: "imagenes/laguna.jpg",
      servicios: [
        { nombre: "Empresa \"Pamelita SAC\"", tipo: "Combi / Bus", contacto: "+51 987 654 321" },
        { nombre: "Viru Tours Travel",          tipo: "Vehículo Turístico Privado", contacto: "+51 912 345 678" }
      ]
    },
    {
      id: 2,
      nombre: "Mirador Cerro Calvario / Altuganda",
      ubicacion: "Encima del pueblo de Tulpo",
      descripcion: "Zona arqueológica que funciona como mirador natural. Desde aquí se puede observar el nevado de Pelagatos, el pueblo de Pallasca y la inmensidad del paisaje andino de La Libertad.",
      imagen: "imagenes/cerro.jpg",
      servicios: [
        { nombre: "Empresa \"Pamelita SAC\"",             tipo: "Combi / Bus",                       contacto: "+51 987 654 321" },
        { nombre: "Viru Tours Travel",                    tipo: "Vehículo Turístico Privado",        contacto: "+51 912 345 678" },
        { nombre: "Don Manuel – Arrieros Mollebamba",     tipo: "Transporte Tradicional (Caballo)",  contacto: "Contacto en la plaza" }
      ]
    }
  ]
};
