// gitprofile.config.js

const config = {
  github: {
    username: 'sydneyp622', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
   social: {
    linkedin: 'Sydney Porter',
    email: 'sydneyporter622@gmail.com',
  },
  skills: [
    'OS: Windows, Kali Linux',
    'Network Protocols: TC/IP, DHCP, DNS, FTP, SFTP, HTTP, PHP, CSS, API, LAN, WAN',
    'Cloud: AWS, Microsoft Azure',
    'Pen-Testing: Nmap, Metasploit',
    'Programming/Applications: C#, Python, SQL, R, JavaScript, HTML5, Microsoft Power BI, Visual Studio, SAS, Tableau, Mircosoft Excel, Word, PowerPoint, Google Analytics, WordPress',
    'Secuirty frameworks and controls: NIST Risk Management and Cybersecurity Frameworks, CIA triad, OWASP, Secuirty Audit',
    'Project Management: Agile methodology, SDLC, Trello, Microsoft Azure',
    'Business Analyst: Analytics, data modeling, process modeling, data visulization',
  ],
  experiences: [
    {
      company: 'RISE29',
      position: 'Consultant',
      from: 'August 2022',
      to: 'December 2022',
    },
  ],
 
  education: [
    {
      institution: 'East Carolina University',
      degree: 'Management Information Systems',
      from: '2020',
      to: '2023',
    },
   
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Professional Statement and Pitch Video',
      description:
        'Click here to understand my WHY',
      link: 'https://drive.google.com/drive/folders/1duWgX0gB_GkNDZVmEcGTHyXwZpCRxCDI?usp=sharing',
    },
    {
      title: 'Conducting a Security Audit',
      description:
        'This is where I learned step-by-step on how to conduct a security audit',
      link: 'https://drive.google.com/drive/folders/1fK8dqvpIW4JU6Pv8y7-MnCjqz65uri6M?usp=sharing',
    },
    {
      title: 'Use the NIST Cybersecurity Framework to Respond to a Security Incident',
      description:
        'This is where I used the NIST Cybersecurity framework to respond to a security incident',
      link: 'https://drive.google.com/drive/folders/15QzEIpKm6gJgaIfIeDzd4rsNS59fY6aR?usp=sharing',
    },
     {
      title: 'Demonstrating basic linux commands',
      description:
        'This is an activity where I was able to demonstrate the basic linux commands',
      link: 'https://drive.google.com/drive/folders/1X3g3pGsol79V-1f7E4q8Bf3ChBsJKchZ?usp=sharing',
    },
      {
      title: 'Badge and Certficates',
      description:
        'These are all of the badges and certficates I have obtained',
      link: 'https://drive.google.com/drive/folders/1duWgX0gB_GkNDZVmEcGTHyXwZpCRxCDI?usp=sharing',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
