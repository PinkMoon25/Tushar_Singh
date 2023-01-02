import air_report_pic from './img/project-air-report.webp';
import showbizz_pic from './img/project-showbizz.webp';
import resume_builder_pic from './img/project-resume-builder.webp';
import spaceTravellers_pic from './img/project-spacetravellers.webp';
import math_magicians_pic from './img/project-math-magicians.webp';
import bookstore_pic from './img/project-bookstore.webp'

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
    name: 'Resume Ready',
    image: {
      imageSrc: resume_builder_pic,
      imageAlt: 'project image',
    },
    technologies: ['React', 'Chakra UI'],
    description: `A web app to create a well formatted resume in minutes. 
    you can also download your resume in pdf format or print it.`,
    live: 'https://resume-builder-pinkmoon25.vercel.app/',
    Source: 'https://github.com/PinkMoon25/Resume-builder',
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
    name: 'Math Magicians',
    image: {
      imageSrc: math_magicians_pic,
      imageAlt: 'project image',
    },
    technologies: ['Css', 'React'],
    description: `"Math magicians" is a website for all fans of mathematics. 
    It is a Single Page App (SPA) that allows users to: Make simple calculations. 
    Read a random math-related quote`,
    live: 'https://pinkmoon25.github.io/Math-magicians/',
    Source: 'https://github.com/PinkMoon25/Math-magicians',
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
