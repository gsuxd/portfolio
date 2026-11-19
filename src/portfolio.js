const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://gsuxd.github.io/portfolio-xd',
  title: '',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jesus Polanco',
  role: 'Fullstack Engineer',
  description:
    'Desarrollador de software Full-Stack especializado en backend, arquitectura web y aplicaciones móviles.',
  resume: '',
  social: {
    github: 'https://github.com/gsuxd',
    linkedin: 'https://www.linkedin.com/in/gsuxd/',
  },
}

const projects = [
  {
    name: 'Stax Store',
    description:
      'Tienda virtual multicategoría lanzada en julio de 2026 para un único retailer, con autenticación segura y persistencia de datos.',
    stack: ['Next.js', 'Supabase', 'Tailwind CSS', 'Docker Compose', 'Nginx'],
    livePreview: 'https://stax-store-mu.vercel.app/demo',
  },
  {
    name: 'Grupo Empresarial One',
    description:
      'Plataforma piramidal de referidos con tracking de ventas y comisiones mediante WooCommerce y webhooks.',
    stack: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    livePreview: 'https://redes.grupoempresarialone.com',
  },
  {
    name: 'TECHSO',
    description:
      'Landing page para empresa contratista del sector petrolero, con presentación de servicios, trayectoria y experiencia industrial.',
    stack: ['Landing Page'],
    livePreview: 'https://techso.lat',
  },
  {
    name: 'Angells Health',
    description:
      'Adaptación web de la aplicación Angells. Proyecto no publicado.',
    stack: ['Web Adaptation'],
  },
  {
    name: 'Joie Driver',
    description:
      'Aplicación móvil de taxis desarrollada con Flutter y Firebase.',
    stack: ['Flutter', 'Firebase Functions', 'Firestore', 'Messaging'],
  },
  {
    name: 'Angells',
    description:
      'Aplicación móvil de servicios a domicilio desarrollada con Flutter y Firebase.',
    stack: ['Flutter', 'Firebase Functions', 'Firestore', 'Messaging'],
  },
  {
    name: 'H2O Gestión',
    description:
      'Sistema de telemetría hídrica con API Full-Stack y módulo móvil de visión por computadora.',
    stack: ['Express.js', 'PostgreSQL', 'Flutter', 'Computer Vision'],
  },
  {
    name: 'Keebot',
    description:
      'Aplicación móvil de mensajería para 10,000 usuarios con verificación de identidad y pagos recurrentes.',
    stack: ['Express.js', 'Flutter', 'REST APIs'],
    livePreview: 'https://play.google.com/store/apps/details?id=com.keego.keegochat',
  },
  {
    name: 'Aventuras Bonitas',
    description:
      'Plataforma transaccional P2P con conciliación automática y pasarelas de pago.',
    stack: ['Django', 'Redis', 'Docker Compose', 'Nginx'],
  },
  {
    name: 'Tráemelo PF',
    description:
      'Plataforma de delivery multi-vertical con tres aplicaciones Flutter y backend escalado para más de 2,000 usuarios.',
    stack: ['Laravel', 'Flutter', 'Redis', 'MQTT', 'AWS', 'Docker Compose'],
    livePreview: 'https://traemelopf.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Python',
  'PHP',
  'SQL',
  'React',
  'Next.js',
  'React Native',
  'Tailwind CSS',
  'Django',
  'Laravel',
  'Express.js',
  'Node.js',
  'RESTful APIs',
  'WebSockets',
  'MQTT',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Prisma',
  'Supabase',
  'Redis',
  'Docker Compose',
  'Linux',
  'AWS',
  'Nginx',
  'Git',
  'GitHub Actions',
  'CI/CD',
  'Flutter',
  'Dart'
]

const certifications = [
  {
    name: 'Software Engineer',
    entity: 'HackerRank',
    id: 'b87a8e6e7ff6',
    preview: 'https://www.hackerrank.com/certificates/iframe/b87a8e6e7ff6',
  },
  {
    name: 'Frontend Developer (React)',
    entity: 'HackerRank',
    id: '6d3f0e27f765',
    preview: 'https://www.hackerrank.com/certificates/iframe/6d3f0e27f765',
  },
  {
    name: 'Problem Solving (Intermediate)',
    entity: 'HackerRank',
    id: '77b2642087d6',
    preview: 'https://www.hackerrank.com/certificates/iframe/77b2642087d6',
  },
  {
    name: 'REST API (Intermediate)',
    entity: 'HackerRank',
    id: '06c5d87326d9',
    preview: 'https://www.hackerrank.com/certificates/iframe/06c5d87326d9',
  },
  {
    name: 'Back End Development and APIs',
    entity: 'freeCodeCamp',
    id: 'gsuxd-bedv9',
    preview:
      'https://www.freecodecamp.org/certification/gsuxd/back-end-development-and-apis-v9',
  },
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jesusmanuelpolancogarcia51@gmail.com',
  phone: '+584246250126'
}

export { header, about, projects, skills, certifications, contact }
