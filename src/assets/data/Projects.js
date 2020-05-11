import img from '../images/coding-background-2-min.jpg';
import pathFindingAlgorithm from '../images/path-finding-algo-react.jpg';
import quasarTodoProject from '../images/QuasarTodoProject.png';
import LendULLC from '../images/LendULLC.png';

export default [
  {
    title: 'Path Finding Algorithm Maze',
    slug: 'path-finding-algorithm-maze-react',
    stack: ['React', 'JavaScript'],
    description:
      'This project was for a tech interview to demonstrate a path finding algorithm with React for a tech interview. Requirements: (1) A map could be any size, you can pre-define it or require user input. Place random obstacles on the map. (2) Place a meeple on lower left, generate the path that will lead this char to the upper right of the map. (3) Animate the meeple walking from start to end. (4) Build your own path algorithm. (5) Use React. (6) Write a few spec tests. (7) Live site with URL. Project was completed in under 8 hours.',
    imageUrl: pathFindingAlgorithm,
    started: 'March 16, 2020',
    status: 'Completed', // completed, started, in-progress
    type: 'Tech Interview Problem',
    sourceUrl: 'https://github.com/corncobb/path-algo-submission',
    liveUrl: '//path-finding-algo-react.camcobb.com/'
  },
  {
    title: 'Cross Platform Todo App',
    slug: 'cross-platform-todo-app',
    stack: ['Quasar', 'Cordova', 'Electron', 'JavaScript', 'Google Firebase'],
    description:
      'This was a cross platform Todo App that that was built off of Quasar framework. The app uses Electron and Cordova to be able to work as Windows, Mac, Android, and IOS apps. The tasks in the app update in realtime between platforms.',
    imageUrl: quasarTodoProject,
    started: 'August 14, 2019',
    status: 'Completed', // completed, started, in-progress
    type: 'Udemy Project',
    sourceUrl: '//github.com/corncobb/quasar-todo-project',
    liveUrl: '//todo-app.camcobb.com/'
  },
  {
    title: 'LendU LLC Portals',
    slug: 'lendu-llc',
    stack: ['Material-UI', 'React', 'GraphQL', 'JavaScript', 'Charts.js'],
    description:
      'LendU LLC was originally for an entrepreneurship competition for the University of Nevada Reno (UNR). The business model was modeled after Tuition.io and Gradifi where employers could offer college loan debt repayment through the vehicle of a benefits package. Employers could choose to offer a "flat" or "match" program to their employees to help them pay off student loans. Essentially, like a 401k except the money goes towards student loan debt. I was in charge of building out the LendU Employer and Employee portals that would show data like retention rates, amount paid, interest rate, employee turnover rate, etc.',
    imageUrl: LendULLC,
    started: 'July 30, 2019',
    status: 'Completed', // completed, started, in-progress
    type: 'Collaboration Project',
    liveUrl: '//employer.mylendu.com'
  },
  {
    title: 'Project 4',
    slug: 'project-4',
    stack: ['C++', 'JavaScript', 'GraphQL'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    imageUrl: img,
    started: 'September 14, 2019',
    status: 'Completed', // completed, started, in-progress
    type: 'hackathon',
    sourceUrl: 'https://www.google.com/',
    liveUrl: 'https://www.google.com/'
  }
];
