import * as icons from '../icons/icons';

// Files
import pdf from '../assets/files/Ramiro_Mazzucco.pdf';
import DiplomaPDF from "../assets/files/DIPLOMA-FullstackWeb.pdf";
import DiplomaPNG from "../assets/images/Diploma.png";

// Images
import banner_meatme from "../assets/images/bannermeatme.png";
import banner_futbol5 from "../assets/images/fondocancha.jpg";
import fondo_maradona from '../assets/images/fondo_maradona.png';

import meatme from "../assets/images/bannermeatme.png";
import futbol5_app from '../assets/images/futbol5_logo.jpg';
import futbol5_web from '../assets/images/fondocancha.jpg';

import image_form_futbol5 from "../assets/images/formfutbol5.png";
import new_reserve_event from '../assets/images/futbol5/app/new_reserve_event.png';
import modal_cancel_reserve from '../assets/images/futbol5/app/modal_cancel_reserve.png';
import clock from '../assets/images/futbol5/app/clock.png';
import info_clock from '../assets/images/futbol5/app/info_clock.png';


// URLbase
const urlbase_meatme = "https://ramazzucco.github.io/RSM-developer/images/meatme/";
const urlbase_futbol5_web = "https://ramazzucco.github.io/RSM-developer/images/futbol5/sitioweb/";
const urkbase_futbol5_app = "https://ramazzucco.github.io/RSM-developer/images/futbol5/aplicacion/";

const spanish = {
    header: {
        lenguage: 'Español',
        links: [
            {
                title: 'Principal',
                link: '#home'
            },
            {
                title: 'Sobre Mi',
                link: '#aboutme'
            },
            {
                title: 'Portafolio',
                link: '#portfolio'
            },
            {
                title: 'Contacto',
                link: '#contact'
            }
        ],
    },
    section: {
        home: {
            title: 'Desarrollador'
        },
        aboutme: {
            title: 'Sobre mi',
            subtitle: 'Hola, me gustaria contarte un poco sobre mi',
            text: [
                'Desde chico siempre me gustó el fútbol, esa era mi gran pasión. De grande no me veía haciendo otra cosa que no fuera jugando a la pelota. Siempre me dejaba preparado el bolso con las medias las canilleras y los botines bien lustrados un dia antes del partido, esperando ese maravilloso momento, pero lo mejor venia despues del encuentro, ese momento cuando nos juntabamos compañeros de distintas edades, distintas categorias de un mismo club a seguir jugando contra nuestro adversario solo por diversion y compartir con amigos.',
                <br key={1}/>,
                'El tiempo fue pasando y no pude cumplir ese sueño, cuando yo era chico mis padres trabajaban todo el dia y no tenia quien me llevara las practicas y ya siendo un adolescente, las lesiones y la mala fortuna me negaron ese anhelo de pequeño, me había quedado sin ilusión. No sabía a qué me iba a dedicar el resto de mi vida, así que tuve que salir en busca de nuevos horizontes.',
                <br key={2}/>,
                <br key={3}/>,
                'Hoy en día, después de tanto tiempo, de haber pasado por la universidad, hacer cientos de cursos de distintas índoles y transitados muchos y distintos trabajos, puedo decir que descubrí nuevamente la llama, y la encontré en la programación.',
                <br key={4}/>,
                'Es por eso que tengo la fuerte convicción de tener las ganas y la voluntad que se requieren para enfrentarme a un problema nuevo cada día a la hora de programar.',
                <br key={5}/>,
                <br key={6}/>,
                'Me gustaría poder formar parte de un grupo en el cual pueda aportar mis conocimientos y motivación y así poder crecer con otros, cumpliendo y superando los problemas y adversidades que se presenten.',
                <br key={7}/>,
                'Como un gran futbolista dijo una vez:',
            ],
            cite: '"Aprende a creer en ti porque, a medida que te convenzas, seras capaz de convencer a los demas." Carles Puyol.',
            button: 'Mas sobre mi'
        },
        portfolio: [
            {
                icon: icons.page,
                title: 'Meat Me',
                text: 'Sitio web desarrollado con Node.js y Express.',
                link: '/RSM-developer/portfolio/meatme',
                titlelink: 'Click para leer mas'
            },
            {
                icon: icons.page,
                title: 'Futbol 5',
                text: 'Pagina web desarrollada en React.',
                link: '/RSM-developer/portfolio/webfutbol5',
                titlelink: 'Click para leer mas'
            },
            {
                icon: icons.app,
                title: 'Futbol 5',
                text: 'Aplicacion web desarrollada en React.',
                link: '/RSM-developer/portfolio/appfutbol5',
                titlelink: 'Click para leer mas'
            }
        ],
        contact: {
            title: 'Contáctame',
            subtitle: 'Envíame un email',
            socialnetwork: [
                {
                    link: 'https://www.linkedin.com/in/rsmazzuccogiusseppin/',
                    icon: icons.linkedin,
                    attributeslink: {target:'_blank', rel:'noreferrer'}
                },
                {
                    link: 'https://github.com/ramazzucco',
                    icon: icons.github_square,
                    attributeslink: {target:'_blank', rel:'noreferrer'}
                },
                {
                    link: 'https://wa.me/+3415853666',
                    icon: icons.whatsapp,
                    attributeslink: {target:'_blank', rel:'noreferrer'}
                },
                {
                    link: pdf,
                    icon: icons.pdf,
                    attributeslink: {download: true}
                },
            ]
        }
    },
    moreaboutme: {
        certificate: {
            text: [
                'Estudie en el instituto Digital House (2020 - 2021)',
                <br key={1}/>,
                'Una institucion de prestigio internacional que trabaja en conjunto con grandes empresas nacionales e internacionales.',
                <br key={2}/>,
                'Cuya mision es transformar la vida de las personas capacitandolas en habilidades digitales.'
            ],
            link: {
                url: 'https://www.digitalhouse.com',
                title: 'ir a digitalhouse.com'
            },
            diploma: {
                url: DiplomaPDF,
                image: DiplomaPNG
            }
        },
        studies: {
            fullstack: {
                title: 'Herramientas utilizadas en el curso Fullstack Web',
                tools: [
                    {
                        class: 'backend',
                        title: 'Backend',
                        icons: [ icons.php, icons.laravel, icons.nodejs, icons.javascript ]
                    },
                    {
                        class: 'frontend',
                        title: 'Frontend',
                        icons: [ icons.javascript, icons.html, icons.css, icons.react ]
                    },
                    {
                        class: 'database',
                        title: 'Base de datos',
                        icons: [ icons.mysql, icons.sequelize ]
                    },
                    {
                        class: 'othertools',
                        title: 'Otras herramientas',
                        icons: [ icons.vsc, icons.git, icons.github ]
                    },
                ]
            },
            other: {
                title: 'Otros conocimientos adquiridos',
                icons : [ icons.sass, icons.mongodb, icons.redux, icons.graphql ]
            }
        }
    },
    portfolio: {
        meatme: {
            banner: banner_meatme,
            content: {
                text: [
                    'Es un sitio web e-commerce desarrollado en el curso de fullstack web de Digital House, realizado en grupo y bajo la metodologia de  trabajo"scrum".',
                    <br key={1} />,
                    'Se ha utilizado Node.js y Express para realizar el backend, con estructura MVC y se utilizo template engine EJS para el frontend.',
                    <br key={2} />,
                    <br key={3} />,
                    'El sitio cuenta con un sistema de login de usuario y manejo de sesiones y cookies a travez de cookies-session, cuenta tambien con middlewares de autorizacion para proteger las rutas. Ademas se le ha incorporado el sistema basico de pago de Mercado Pago para pagar online.',
                    <br key={4} />,
                    <br key={5} />,
                    'Se ha creado ademas una API propia que permite manejar el CRUD de productos y usuarios.'
                ],
                link: {
                    title: 'Ver codigo',
                    url: 'https://github.com/ramazzucco/Meat-me',
                    icon: icons.github,
                    page: 'https://meat--me.herokuapp.com/'
                },
                gallery: [
                    {
                        id: 1,
                        url: `${urlbase_meatme}Admin.png`,
                        name: 'Admin'
                    },
                    {
                        id: 2,
                        url: `${urlbase_meatme}Carrito.png`,
                        name: 'Carrito'
                    },
                    {
                        id: 3,
                        url: `${urlbase_meatme}Categoria_vacuno.png`,
                        name: 'Categoria_vacuno'
                    },
                    {
                        id: 4,
                        url: `${urlbase_meatme}Inicio.png`,
                        name: 'Inicio'
                    },
                    {
                        id: 5,
                        url: `${urlbase_meatme}Login.png`,
                        name: 'Login'
                    },
                    {
                        id: 6,
                        url: `${urlbase_meatme}Perfil_de_usuario.png`,
                        name: 'Perfil_de_usuario'
                    },
                    {
                        id: 7,
                        url: `${urlbase_meatme}Registro.png`,
                        name: 'Registro'
                    }
                ],
            },
            otherprojects: {
                title: 'Otros proyectos',
                cards: [
                    {
                        image: {
                            url: futbol5_web,
                            alt: 'fondo cancha futbol5'
                        },
                        link: {
                            title: [
                                'Futbol 5',
                                <br key={1} />,
                                'Sitio web'
                            ],
                            button: {
                                path: '/RSM-developer/portfolio/webfutbol5',
                                title: 'Ir al proyecto'
                            }
                        }
                    },
                    {
                        image: {
                            url: futbol5_app,
                            alt: 'logo futbol5'
                        },
                        link: {
                            title: [
                                'Futbol 5',
                                <br key={2} />,
                                'Aplicacion web'
                            ],
                            button: {
                                path: '/RSM-developer/portfolio/appfutbol5',
                                title: 'Ir al proyecto'
                            }
                        }
                    }
                ]
            }
        },
        futbol5_web: {
            banner: {
                image: banner_futbol5,
                title: 'Sitio web Futbol 5',
            },
            content: {
                image: image_form_futbol5,
                text: [
                    'Sitio web creado con React, en el cual se puede reservar cancha y horario, mediante el siguiente formulario de forma directa sin loguearse.',
                    <br key={1} />,
                    <br key={2} />,
                    'Utiliza una API desarrollada con Node y Express, para obtener los datos, estos pueden ser modificados atravez de la aplicacion que maneja las reservas.'
                ],
                link: {
                    url: 'https://futbol5-app.herokuapp.com/page',
                    title: 'ir al sitio web'
                },
                code: {
                    text: 'El sitio web se encuentra dentro del mismo proyecto que la aplicacion, pero luego sera colocado en un proyecto a parte, y esta desplegado en el servidor gratuito de heroku.',
                    link: {
                        url: 'https://github.com/ramazzucco/Futbol-5_app/tree/app_v2_github/src/components/page',
                        icon: icons.github,
                        title: 'Ver Codigo'
                    }
                },
                gallery: [
                    {
                        id: 1,
                        url: `${urlbase_futbol5_web}home.png`,
                        name: "home",
                    },
                    {
                        id: 2,
                        url: `${urlbase_futbol5_web}instalaciones.png`,
                        name: "instalaciones",
                    },
                    {
                        id: 3,
                        url: `${urlbase_futbol5_web}cumpleaños.png`,
                        name: "cumpleaños",
                    },
                    {
                        id: 4,
                        url: `${urlbase_futbol5_web}formulario.png`,
                        name: "formulario",
                    },
                ]
            },
            otherprojects: {
                title: 'Otros proyectos',
                cards: [
                    {
                        image: {
                            url: meatme,
                            alt: 'banner meat me'
                        },
                        link: {
                            title: [
                                'Meat Me',
                                <br key={1} />,
                                'Sitio web'
                            ],
                            button: {
                                path: '/RSM-developer/portfolio/meatme',
                                title: 'Ir al proyecto'
                            }
                        }
                    },
                    {
                        image: {
                            url: futbol5_app,
                            alt: 'logo futbol5'
                        },
                        link: {
                            title: [
                                'Futbol 5',
                                <br key={2} />,
                                'Aplicacion web'
                            ],
                            button: {
                                path: '/RSM-developer/portfolio/appfutbol5',
                                title: 'Ir al proyecto'
                            }
                        }
                    }
                ]
            }
        },
        futbol5_app: {
            banner: {
                image: fondo_maradona,
                alt: 'maradona',
            },
            text: [
                'Aplicacion web creada con React y la implementacion de hooks.',
                <br key={1} />,
                'Es una aplicacion para administrar reservas y modificar el sitio web, utiliza la misma API que el sitio web "Futbol 5".',
                <br key={2} />,
                'Para el backend se utiliza Node y Express y como base de datos archivos JSON.'
            ],
            link: {
                url: 'https://futbol5-app.herokuapp.com/app',
                title: 'Ir a la aplicacion'
            },
            description: {
                title: 'Funcionalidades',
                list: [
                    'Listar y cancelar reservas del dia.',
                    'CRUD de reservas (historial).',
                    'Buscar reserva por nombre o por fecha.',
                    'Modificar el contenido de los textos en la pagina web.',
                    'Subir y eliminar imagenes de la pagina web.',
                    'Agregar y/o quitar horario y cancha.',
                    'Permite observar los admins que estan conectados.'
                ]
            },
            code: {
                url: 'https://github.com/ramazzucco/Futbol-5_app/tree/app_v2_github/src/components/page',
                icon: icons.github,
                title: 'Ver codigo'
            },
            gallery: {
                title: 'Capturas',
                images: [
                    {
                        id: 1,
                        url: `${urkbase_futbol5_app}home_clean_view.png`,
                        name: "vista limpia de principal",
                    },
                    {
                        id: 2,
                        url: `${urkbase_futbol5_app}home.png`,
                        name: "principal",
                    },
                    {
                        id: 3,
                        url: `${urkbase_futbol5_app}new_reserve.png`,
                        name: "nueva reserva",
                    },
                    {
                        id: 4,
                        url: `${urkbase_futbol5_app}booking_history.png`,
                        name: "historial",
                    },
                    {
                        id: 5,
                        url: `${urkbase_futbol5_app}statistics.png`,
                        name: "estadisticas",
                    },
                    {
                        id: 6,
                        url: `${urkbase_futbol5_app}configpage.png`,
                        name: "configurar pagina web",
                    },
                    {
                        id: 7,
                        url: `${urkbase_futbol5_app}configuration.png`,
                        name: "configuracion",
                    },
                    {
                        id: 8,
                        url: `${urkbase_futbol5_app}admins.png`,
                        name: "administradores",
                    },
                ]
            },
            captions: [
                {
                    class: 'new_reserve_event',
                    image: [{
                        url: new_reserve_event,
                        alt: 'evento de nueva reserva'
                    }],
                    text: [
                        'La aplicacion realiza una peticion cada 5 minutos y cuenta con un boton de refresh para las reservas y el historial.',
                        <br key={1} />,
                        'Las reservas entrantes figuran en rojo como se ve en la imagen y figuran en el titulo de la aplicacion.',
                        <br key={2} />,
                        'Los horarios reservados tienen una animacion que pulsa la palabra reservado hasta que se posa el mouse por encima, esto muestra mediante un tooltip el nombre y el telefono del cliente y desactiva el efecto pulsante y el aviso de nueva reserva en el titulo de la aplicacion.'
                    ]
                },
                {
                    class: 'cancel_reserve',
                    image: [{
                        url: modal_cancel_reserve,
                        alt: 'modal de cancelar reserva'
                    }],
                    text: 'Clickeando en el horario reservado se puede cancelar el mismo.'
                },
                {
                    class: 'clock',
                    image: [
                        {
                            url: clock,
                            alt: 'reloj'
                        },
                        {
                            url: info_clock,
                            alt: 'comandos de reloj'
                        }
                    ],
                    text: [
                        'El reloj comienza automaticamente cuando es la hora reservada, ademas si la pagina es recargada el horario se guarda y cuando termina de cargar comienza de nuevo donde quedo.',
                        <br  key={1} />,
                        'Cuando el reloj esta oculto, al hacer click sobre el icono comienza 1 hora.',
                        <br key={2} />,
                        'Al posar el mouse sobre el reloj abierto aparecen los comandos.'
                    ]
                },
            ],
            otherprojects: {
                title: 'Otros proyectos',
                cards: [
                    {
                        image: {
                            url: meatme,
                            alt: 'banner meat me'
                        },
                        link: {
                            title: [
                                'Meat Me',
                                <br key={1} />,
                                'Sitio web'
                            ],
                            button: {
                                path: '/RSM-developer/portfolio/meatme',
                                title: 'Ir al proyecto'
                            }
                        }
                    },
                    {
                        image: {
                            url: futbol5_web,
                            alt: 'fondo cancha futbol5'
                        },
                        link: {
                            title: [
                                'Futbol 5',
                                <br key={2} />,
                                'Sitio web'
                            ],
                            button: {
                                path: '/RSM-developer/portfolio/webfutbol5',
                                title: 'Ir al proyecto'
                            }
                        }
                    }
                ]
            }
        }
    }
}

const english = {
    header: {
        lenguage: 'English',
        links: [
            {
                title: 'Home',
                link: '#home'
            },
            {
                title: 'About Me',
                link: '#aboutme'
            },
            {
                title: 'Portfolio',
                link: '#portfolio'
            },
            {
                title: 'Contact',
                link: '#contact'
            }
        ]
    },
    section: {
        home: {
            title: 'Developer'
        },
        aboutme: {
            title: 'About me',
            subtitle: 'Hi , I like to tell you something about me.',
            text: [
                'Since I was a kid I always liked soccer, that was my great passion. When I grew up, I didn’t see myself doing anything but playing ball. I always prepared my bag with the stockings, the shades and the booties well polished a day before the game, waiting for that wonderful moment, but the best came after the match, that moment when we got together mates of different ages, different categories of the same club to continue playing against our opponent just for fun and sharing with friends.',
                <br key={1}/>,
                'Time went by and I couldn’t fulfill that dream, when I was a kid my parents worked all day and I didn’t have anyone to take the practices and already being a teenager, the injuries and bad luck denied me that desire as a child, I was left without hope. I didn’t know what I was going to do the rest of my life, so I had to go out looking for new horizons.',
                <br key={2}/>,
                <br key={3}/>,
                'Nowadays, after so much time, having spent at university, doing hundreds of courses of different kinds and going through many different jobs, I can say that I rediscovered the flame, and found it in the programming.',
                <br key={4}/>,
                'That’s why I have the strong conviction that I have the will and desire to face a new problem every day when it comes to programming.',
                <br key={5}/>,
                <br key={6}/>,
                'I would like to be part of a group to which I can contribute my knowledge and motivation and thus be able to grow with others, meeting and overcoming the problems and adversities that arise.',
                <br key={7}/>,
                'As a great footballer once said:',
            ],
            cite: '"Learn to believe in yourself because, as you convince yourself, you will be able to convince others." Carles Puyol.',
            button: 'More about me'
        },
        portfolio: [
            {
                icon: icons.page,
                title: 'Meat Me',
                text: 'Website developed with Node.js and Express.',
                link: '/RSM-developer/portfolio/meatme',
                titlelink: 'Click to read more'
            },
            {
                icon: icons.page,
                title: 'Futbol 5',
                text: 'Website developed in React.',
                link: '/RSM-developer/portfolio/webfutbol5',
                titlelink: 'Click to read more'
            },
            {
                icon: icons.app,
                title: 'Futbol 5',
                text: 'Aplication web developed in React.',
                link: '/RSM-developer/portfolio/appfutbol5',
                titlelink: 'Click to read more'
            }
        ],
        contact: {
            title: 'Contact me',
            subtitle: 'Send me an email',
            socialnetwork: [
                {
                    link: 'https://www.linkedin.com/in/rsmazzuccogiusseppin/',
                    icon: icons.linkedin,
                    attributeslink: {target:'_blank', rel:'noreferrer'}
                },
                {
                    link: 'https://github.com/ramazzucco',
                    icon: icons.github_square,
                    attributeslink: {target:'_blank', rel:'noreferrer'}
                },
                {
                    link: 'https://wa.me/+3415853666',
                    icon: icons.whatsapp,
                    attributeslink: {target:'_blank', rel:'noreferrer'}
                },
                {
                    link: pdf,
                    icon: icons.pdf,
                    attributeslink: {download: true}
                },
            ]
        }
    },
    moreaboutme: {
        certificate: {
            text: [
                'Study at the Digital House high school (2020 – 2021)',
                <br key={1}/>,
                'An institution of international prestige that works together with major national and international companies.',
                <br key={2}/>,
                'Whose mission is to transform people’s lives by training them in digital skills.'
            ],
            link: {
                url: 'https://www.digitalhouse.com',
                title: 'Go to digitalhouse.com'
            },
            diploma: {
                url: DiplomaPDF,
                image: DiplomaPNG
            }
        },
        studies: {
            fullstack: {
                title: 'Tools used in the Fullstack Web course',
                tools: [
                    {
                        class: 'backend',
                        title: 'Backend',
                        icons: [ icons.php, icons.laravel, icons.nodejs, icons.javascript ]
                    },
                    {
                        class: 'frontend',
                        title: 'Frontend',
                        icons: [ icons.javascript, icons.html, icons.css, icons.react ]
                    },
                    {
                        class: 'database',
                        title: 'Database',
                        icons: [ icons.mysql, icons.sequelize ]
                    },
                    {
                        class: 'othertools',
                        title: 'Other tools',
                        icons: [ icons.vsc, icons.git, icons.github ]
                    },
                ]
            },
            other: {
                title: 'Other knowledge acquired',
                icons : [ icons.sass, icons.mongodb, icons.redux, icons.graphql ]
            }
        }
    },
    portfolio: {
        meatme: {
            banner: banner_meatme,
            content: {
                text: [
                    'It is an e-commerce website developed in the fullstack web course of Digital House, carried out in group and under the working methodology “scrum.”',
                    <br key={1} />,
                    'Se ha utilizado Node.js y Express para realizar el backend, con estructura MVC y se utilizo template engine EJS para el frontend.Node. js and Express have been used for the backend, with MVC structure, and EJS template engine was used for the frontend.',
                    <br key={2} />,
                    <br key={3} />,
                    'The site has a system of user login and management of sessions and cookies through cookies-session, also has authorization middlewares to protect the routes. In addition, the basic payment system of Mercado Pago to pay online has been incorporated.',
                    <br key={4} />,
                    <br key={5} />,
                    'It has also created an API that allows to handle the CRUD of products and users.'
                ],
                link: {
                    title: 'See code',
                    url: 'https://github.com/ramazzucco/Meat-me',
                    icon: icons.github
                },
                gallery: [
                    {
                        id: 1,
                        url: `${urlbase_meatme}Admin.png`,
                        name: 'Admin'
                    },
                    {
                        id: 2,
                        url: `${urlbase_meatme}Carrito.png`,
                        name: 'Cart'
                    },
                    {
                        id: 3,
                        url: `${urlbase_meatme}Categoria_vacuno.png`,
                        name: 'Category'
                    },
                    {
                        id: 4,
                        url: `${urlbase_meatme}Inicio.png`,
                        name: 'Init'
                    },
                    {
                        id: 5,
                        url: `${urlbase_meatme}Login.png`,
                        name: 'Login'
                    },
                    {
                        id: 6,
                        url: `${urlbase_meatme}Perfil_de_usuario.png`,
                        name: 'User_profile'
                    },
                    {
                        id: 7,
                        url: `${urlbase_meatme}Registro.png`,
                        name: 'Register'
                    }
                ],
            },
            otherprojects: {
                title: 'Other projects',
                cards: [
                    {
                        image: {
                            url: futbol5_web,
                            alt: 'backgrouund of soccer field futbol5'
                        },
                        link: {
                            title: [
                                'Futbol 5',
                                <br key={1} />,
                                'Web site'
                            ],
                            button: {
                                path: '/RSM-developer/portfolio/webfutbol5',
                                title: 'Go to project'
                            }
                        }
                    },
                    {
                        image: {
                            url: futbol5_app,
                            alt: 'logo futbol5'
                        },
                        link: {
                            title: [
                                'Futbol 5',
                                <br key={2} />,
                                'Web aplication'
                            ],
                            button: {
                                path: '/RSM-developer/portfolio/appfutbol5',
                                title: 'Go to project'
                            }
                        }
                    }
                ]
            }
        },
        futbol5_web: {
            banner: {
                image: banner_futbol5,
                title: 'Website Futbol 5',
            },
            content: {
                image: image_form_futbol5,
                text: [
                    'Website created with React, where you can book the soccer field and time, using the following form directly without logging in.',
                    <br key={1} />,
                    <br key={2} />,
                    'It uses an API developed with Node and Express, to get the data, these can be modified through the application that handles the reservations.'
                ],
                link: {
                    url: 'https://futbol5-app.herokuapp.com/page',
                    title: 'Go to website'
                },
                code: {
                    text: 'The website is inside the same project as the application, but will then be placed in a separate project, and is displayed on the free heroku server.',
                    link: {
                        url: 'https://github.com/ramazzucco/Futbol-5_app/tree/app_v2_github/src/components/page',
                        icon: icons.github,
                        title: 'See code'
                    }
                },
                gallery: [
                    {
                        id: 1,
                        url: `${urlbase_futbol5_web}home.png`,
                        name: "home",
                    },
                    {
                        id: 2,
                        url: `${urlbase_futbol5_web}instalaciones.png`,
                        name: "facilities",
                    },
                    {
                        id: 3,
                        url: `${urlbase_futbol5_web}cumpleaños.png`,
                        name: "birthdays",
                    },
                    {
                        id: 4,
                        url: `${urlbase_futbol5_web}formulario.png`,
                        name: "form",
                    },
                ]
            },
            otherprojects: {
                title: 'Other projects',
                cards: [
                    {
                        image: {
                            url: meatme,
                            alt: 'banner meat me'
                        },
                        link: {
                            title: [
                                'Meat Me',
                                <br key={1} />,
                                'Website'
                            ],
                            button: {
                                path: '/RSM-developer/portfolio/meatme',
                                title: 'Go to project'
                            }
                        }
                    },
                    {
                        image: {
                            url: futbol5_app,
                            alt: 'logo futbol5'
                        },
                        link: {
                            title: [
                                'Futbol 5',
                                <br key={2} />,
                                'Aplication web'
                            ],
                            button: {
                                path: '/RSM-developer/portfolio/appfutbol5',
                                title: 'Go to project'
                            }
                        }
                    }
                ]
            }
        },
        futbol5_app: {
            banner: {
                image: fondo_maradona,
                alt: 'maradona',
            },
            text: [
                'Web application created with React and the implementation of hooks.',
                <br key={1} />,
                'It is an application to manage reservations and modify the website, it uses the same API as the “Futbol 5” website.',
                <br key={2} />,
                'Node and Express are used for the backend and JSON files are used as a database.'
            ],
            link: {
                url: 'https://futbol5-app.herokuapp.com/app',
                title: 'Go to aplicacion'
            },
            description: {
                title: 'Functionalities',
                list: [
                    'List and cancel the day’s bookings',
                    'CRUD of reserves (history).',
                    'Search reservation by name or date.',
                    'Modify the content of the texts on the web page.',
                    'Upload and remove images from the web page.',
                    'Add and/or remove time and court.',
                    'Allows you to observe the admins that are connected.'
                ]
            },
            code: {
                url: 'https://github.com/ramazzucco/Futbol-5_app/tree/app_v2_github/src/components/page',
                icon: icons.github,
                title: 'See code'
            },
            gallery: {
                title: 'Captures',
                images: [
                    {
                        id: 1,
                        url: `${urkbase_futbol5_app}home_clean_view.png`,
                        name: "home_clean_view",
                    },
                    {
                        id: 2,
                        url: `${urkbase_futbol5_app}home.png`,
                        name: "home",
                    },
                    {
                        id: 3,
                        url: `${urkbase_futbol5_app}new_reserve.png`,
                        name: "new_reserve",
                    },
                    {
                        id: 4,
                        url: `${urkbase_futbol5_app}booking_history.png`,
                        name: "booking_history",
                    },
                    {
                        id: 5,
                        url: `${urkbase_futbol5_app}statistics.png`,
                        name: "statistics",
                    },
                    {
                        id: 6,
                        url: `${urkbase_futbol5_app}configpage.png`,
                        name: "configpage",
                    },
                    {
                        id: 7,
                        url: `${urkbase_futbol5_app}configuration.png`,
                        name: "configuration",
                    },
                    {
                        id: 8,
                        url: `${urkbase_futbol5_app}admins.png`,
                        name: "admins",
                    },
                ]
            },
            captions: [
                {
                    class: 'new_reserve_event',
                    image: [{
                        url: new_reserve_event,
                        alt: 'new reserve event'
                    }],
                    text: [
                        'The application makes a request every 5 minutes and has a refresh button for reservations and history.',
                        <br key={1} />,
                        'Incoming reservations are shown in red as seen in the image and are listed in the application title.',
                        <br key={2} />,
                        'The reserved times have an animation that presses the reserved word until the mouse is over it, this shows by means of a tooltip the name and phone of the client and deactivates the button effect and the notice of new reservation in the title of the application.'
                    ]
                },
                {
                    class: 'cancel_reserve',
                    image: [{
                        url: modal_cancel_reserve,
                        alt: 'modal cancel reserve'
                    }],
                    text: 'By clicking on the reserved time you can cancel the same.'
                },
                {
                    class: 'clock',
                    image: [
                        {
                            url: clock,
                            alt: 'clock'
                        },
                        {
                            url: info_clock,
                            alt: 'clock commands'
                        }
                    ],
                    text: [
                        'The clock starts automatically when it is the reserved time, also if the page is reloaded the time is saved and when it finishes loading it starts again where I left off.',
                        <br  key={1} />,
                        'When the clock is hidden, clicking on the icon starts 1 hour.',
                        <br key={2} />,
                        'When you place the mouse on the open clock, the commands appear.'
                    ]
                },
            ],
            otherprojects: {
                title: 'Other projects',
                cards: [
                    {
                        image: {
                            url: meatme,
                            alt: 'banner meat me'
                        },
                        link: {
                            title: [
                                'Meat Me',
                                <br key={1} />,
                                'Website'
                            ],
                            button: {
                                path: '/RSM-developer/portfolio/meatme',
                                title: 'Go to project'
                            }
                        }
                    },
                    {
                        image: {
                            url: futbol5_web,
                            alt: 'background soccer field'
                        },
                        link: {
                            title: [
                                'Futbol 5',
                                <br key={2} />,
                                'Website'
                            ],
                            button: {
                                path: '/RSM-developer/portfolio/webfutbol5',
                                title: 'Go to project'
                            }
                        }
                    }
                ]
            }
        }
    }
}

const getLenguage = (lenguage) => {

    let data;

    switch (lenguage) {
        case 'es':
            data = spanish;
            break;
        case 'en':
            data = english;
            break;
        default:
            data = spanish;
            break;
    }

    return data;
}
export { getLenguage };