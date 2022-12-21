import air_report_pic from './img/airReport.png';
import showbizz_pic from './img/showBizz.png';
import devhome_pic from './img/devHome.png';
import spaceTravellers_pic from './img/spaceTravellers.png';
import math_magicians_pic from './img/mathMagicians.png';
import bookstore_pic from './img/bookstore.png'

const data = [
  {
    name: 'Air-report',
    image: {
      imageSrc: air_report_pic,
      imageAlt: 'project image',
    },
    technologies: ['React', 'Redux', 'JavaScript'],
    description: `A web app to get Air pollution data and weather data for your current 
    location and also for countries all around the world.`,
    live: 'https://pinkmoon25.github.io/Air-report-webapp/',
    Source: 'https://github.com/PinkMoon25/Air-report-webapp',
  },
  {
    name: 'ShowBizz',
    image: {
      imageSrc: showbizz_pic,
      imageAlt: 'project image',
    },
    technologies: ['Css', 'Html', 'JavaScript'],
    description: `ShowBizz is a website that shows you all the latest Tv-shows and Movies, 
    you can browse, like and comment your favourites, you can get the details about a particular show and movie.`,
    live: 'https://pinkmoon25.github.io/ShowBizz/',
    Source: 'https://github.com/PinkMoon25/ShowBizz',
  },
  
  {
    name: 'Math Magicians',
    image: {
      imageSrc: math_magicians_pic,
      imageAlt: 'project image',
    },
    technologies: ['Css', 'JavaScript', 'React'],
    description: `"Math magicians" is a website for all fans of mathematics. 
    It is a Single Page App (SPA) that allows users to: Make simple calculations. 
    Read a random math-related quote`,
    live: 'https://pinkmoon25.github.io/Math-magicians/',
    Source: 'https://github.com/PinkMoon25/Math-magicians',
  },

  {
    name: 'Space travellers hub',
    image: {
      imageSrc: spaceTravellers_pic,
      imageAlt: 'project image',
    },
    technologies: ['React', 'Redux', 'Css'],
    description: `A web application for a company that provides commercial and scientific space travel services. 
    The application will allow users to book rockets and join selected space missions.`,
    live: 'https://famous-klepon-e50d82.netlify.app/',
    Source: 'https://github.com/PinkMoon25/space-travellers-hub',
  },

  {
    name: 'devHome',
    image: {
      imageSrc: devhome_pic,
      imageAlt: 'project image',
    },
    technologies: ['Html', 'JavaScript', 'Css'],
    description: `devHome is an open-source learning platform for things related to Web.
    We work towards sharing information & knowledge to make it availaible to everyone, everywhere.
    All it's gonna take is your time and effort.`,
    live: 'https://pinkmoon25.github.io/Capstone-project-Website/',
    Source: 'https://github.com/PinkMoon25/Capstone-project-Website',
  },

  {
    name: 'Bookstore CMS',
    image: {
      imageSrc: bookstore_pic,
      imageAlt: 'project image',
    },
    technologies: ['React', 'Redux', 'CSS'],
    description: `Bookstore app with CRUD functionality 
    that helps you keep track of the books you read. 
    You can add favourite books, or books you'd like to read, 
    you can create a book collection, 
    you can access your collection anytime anywhere,`,
    live: 'https://pinkmoon25.github.io/bookstore/',
    Source: 'https://github.com/PinkMoon25/bookstore',
  }
];

export default data
