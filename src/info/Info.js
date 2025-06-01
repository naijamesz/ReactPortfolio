import self from '../img/self.png';
import mock1 from '../img/mock1.png';
import mock2 from '../img/mock2.png';
import mock3 from '../img/mock3.png';
import mock4 from '../img/mock4.png';
import mock5 from '../img/mock5.png';
import mock6 from '../img/mock6.png';
import mock7 from '../img/mock7.png';
import mock8 from '../img/mock8.png';
import mock9 from '../img/mock9.png';
import mock10 from '../img/mock10.png';
import mock11 from '../img/mock11.png';
import mock12 from '../img/mock12.png';
import mock13 from '../img/mock13.png';

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ['#ffbd2e', '#f5564d'];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: 'James ',
  lastName: 'Thanawat',
  //initials: `< JMDEV />`, // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Front-end Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(360deg, ${colors})`, // don't change this either
  baseColor: colors[1],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🌎',
      text: 'Based in Phuket / Thailand.'
    },
    {
      emoji: '☕',
      text: 'Dev and Music Lover.'
    },
    {
      emoji: '📧',
      text: 'james_web.dev@outlook.com'
      // text: 'jamesz_duckveloper@hotmail.com',
    },
    {
      emoji: '🔗',
      // <img
      //   src={FEM}
      //   alt='Frontend Mentor'
      //   style={{ width: '2.125rem', height: '2.125rem', margin: '0 .25rem 0 0.25rem' }}
      // />
      text: (
        <a href='https://www.frontendmentor.io/profile/NaiJamesz'>
          <strong>Frontend Mentor.</strong>
        </a>
      )
    }
  ],
  socials: [
    {
      link: 'https://facebook.com/naijamesz',
      icon: 'fa fa-facebook',
      label: 'facebook'
    },
    {
      link: 'https://instagram.com/naijamesz',
      icon: 'fa fa-instagram',
      label: 'instagram'
    },
    {
      link: 'https://github.com/naijamesz',
      icon: 'fa fa-github',
      label: 'github'
    },
    {
      link: 'https://linkedin.com/in/thanawat-sanguanporn-373107198',
      icon: 'fa fa-linkedin',
      label: 'linkedin'
    },
    {
      link: 'https://twitter.com/nai_jameszix',
      icon: 'fa fa-twitter',
      label: 'twitter'
    }

    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio:
    `Hi!, my name is James or Thanawat Sanguanporn in my full name, I’m a self-taught Frontend developer based in Phuket/Thailand and want to get hire in Web developer career.` +
    `A self-taught web developer with a solid foundation in business administration, proficient in JavaScript/TypeScript for front-end development using React and Next.js. `
    `Experienced in server-side development with Node.js (Express.js, Nest.js, Fastify.js) and Django for backend solutions. Familiar with emerging technologies such as Hono.js and Elysia.js within the Bun.js runtime environment.`
    `Strong understanding of network fundamentals from IT support experience and expertise in Git version control for efficient collaboration. Passionate about software architecture and scalable project structures,`
    `actively seeking opportunities to work in team environments and gain hands-on experience with industry-standard development workflows. Eager to explore real-world project lifecycles, stakeholder collaboration, requirements analysis, database design, and problem-solving methodologies.`
    `"Never stop learning & Never stop practice coding."`,
  skills: {
    proficientWith: [
      'javascript',
      'typescript',
      'react',
      'redux',
      'html5',
      'css3',
      'git',
      'github',
      'tailwindcss',
      'bootstrap',
      'sass',
      'bulma',
      'next',
      'express',
      'mongodb'
    ],

    tools: ['nodejs', 'netlify', 'vscode', 'vercel', 'figma', 'Postman']
  },

  hobbies: [
    {
      label: 'reading',
      emoji: '📖'
    },
    {
      label: 'coding',
      emoji: '💻'
    },
    {
      label: 'listening to music',
      emoji: '🎧'
    },
    {
      label: 'exploring new technologies',
      emoji: '🔭'
    }
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: 'Project 1',
      live: 'https://github-finder-beta-pied-50.vercel.app',
      source: 'https://github.com/naijamesz/github-finder',
      image: mock1
    },
    {
      title: 'Project 2',
      live: 'https://naijamesz-portfolio-port.vercel.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/naijamesz/ReactPortfolio', // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock2
    },
    {
      title: 'Project 3',
      live: 'https://todo-app-frontend-mentor-three.vercel.app/',
      source: 'https://github.com/naijamesz/Todo-app-frontend-mentor',
      image: mock3
    },
    {
      title: 'Project 4',
      live: 'https://cryptobucks-practice.vercel.app',
      source: 'https://github.com/naijamesz/cryptobucks-practice',
      image: mock4
    },
    {
      title: 'Project 5',
      live: 'https://best-seller-book-react.vercel.app',
      source: 'https://github.com/naijamesz/Best-seller-book-react',
      image: mock5
    },
    {
      title: 'Project 6',
      live: 'https://github.com/naijamesz/travel-site',
      source: 'https://travel-site-naijamesz.netlify.app',
      image: mock6
    },
    {
      title: 'Project 7',
      live: 'https://react-tailwind-shoes-shop.vercel.app',
      source: 'https://github.com/naijamesz/react-tailwind-shoes-shop',
      image: mock7
    },
    {
      title: 'Project 8',
      live: 'https://ai-code-translator-six-mu.vercel.app',
      source: 'https://github.com/naijamesz',
      image: mock8
    },
    {
      title: 'Project 9',
      live: 'https://ecommerce-product-page-for-fem.vercel.app',
      source: 'https://github.com/naijamesz/FEM-ecommerce-product-page',
      image: mock9
    },
    {
      title: 'Project 10',
      live: 'https://reading-list-client-crud.vercel.app',
      source: 'https://github.com/naijamesz/reading-list-client-crud',
      image: mock10
    },
    {
      title: 'Project 11',
      live: 'https://fem-testimonial-tailwind-css-nuuu.vercel.app',
      source: 'https://github.com/naijamesz/FEM-testimonial-tailwind-css',
      image: mock11
    },
    {
      title: 'Project 12',
      live: 'https://naijamesz.github.io/analog-clocks/',
      source: 'https://github.com/naijamesz/analog-clocksl',
      image: mock12
    },
    {
      title: 'Project 13',
      live: 'https://github.com/naijamesz/React-BMI-calc-oldproject',
      source: 'https://react-bmi-calc-oldproject.vercel.app',
      image: mock13
    }
  ]
};

/* 3 years experience worked in IT support, CCTV and technical networks. After the Covid-19 crisis. I want to changed my own career to developer skill at that time, and now already eager to learn new things from technology updates and news. And all ready to be part or collaborate of a team and collaborate using Git version control to embrace new technological updates and enhance my development career. I believe that using open source or even contribute it can greatly improve your skills and experience as a web developer, and artificial intelligence is a tool for developers like us. */
