import logo from '../images/logo.png'
import stephenImg from '../images/WhatsApp Image 2026-09-18 at 11.22.15 PM.jpeg'
import adedejiImg from '../images/WhatsApp Image 2026-09-18 at 11.22.16 PM (1).jpeg'
import temitopeImg from '../images/WhatsApp Image 2026-09-18 at 11.22.16 PM.jpeg'
import ajayiImg from '../images/WhatsApp Image 2026-09-18 at 11.22.17 PM (1).jpeg'
import olawoleImg from '../images/WhatsApp Image 2026-09-18 at 11.22.17 PM.jpeg'
import omogoroyeImg from '../images/WhatsApp Image 2026-09-18 at 11.22.18 PM (1).jpeg'
import akinrataImg from '../images/WhatsApp Image 2026-09-18 at 11.22.18 PM.jpeg'
import adeniranImg from '../images/WhatsApp Image 2026-09-18 at 11.22.19 PM.jpeg'

export const site = {
  name: 'TechFinds Consult Limited',
  tagline: 'Co-Working & Tech Innovation Hub',
  logo,
  address: '2nd Floor, Tolu Shopping Plaza, Adjacent Deeper Life Camp, FUTA Northgate, Akure, Ondo State',
  addressShort: 'Tolu Shopping Plaza, FUTA Northgate, Akure',
  hours: 'Mon – Sat, 8:00 AM – 4:00 PM',
  phones: [
    { label: 'WhatsApp line 1', display: '+234 806 822 5519', tel: '+2348068225519' },
    { label: 'WhatsApp line 2', display: '+234 802 096 0058', tel: '+2348020960058' },
  ],
  email: 'Techfinds.consult23@gmail.com',
  // Access key from web3forms.com, tied to the receiving inbox above — safe to expose client-side.
  web3formsKey: '96a2e2ca-127f-4303-be98-a665e402510a',
}

export const nav = [
  { label: 'Overview', href: '#overview' },
  { label: 'About', href: '#about' },
  { label: 'Passes', href: '#passes' },
  { label: 'Memberships', href: '#memberships' },
  { label: 'Academy', href: '#academy' },
  { label: 'Mentors & Faculty', href: '#faculty' },
  { label: 'Research & ICT', href: '#research' },
  { label: 'Location', href: '#reserve' },
]

export const founder = {
  name: 'Stephen Ayanleye',
  badge: 'Founder Spotlight',
  roleTags: ['Founder & Principal Consultant', 'Big Data Analytics (Griffith Univ, Australia)'],
  subtitle: 'Independent Academic Researcher • Data Analytics Expert (SPSS, STATA, Power BI, R)',
  bio: 'Stephen is a First Class Graduate and Best Graduating Student in Agricultural & Resource Economics at FUTA. Certified in Big Data Analytics from Griffith University, Queensland, Australia, he has 7+ years of cross-disciplinary expertise spanning Agric, Tech, and Education across Nigeria and internationally. Previously a Farm Supervisor at University of Benin and external undergraduate project supervisor at IBLT University, Togo, he birthed TechFinds Consult to bridge the gap between IT and empirical research — delivering scalable digital solutions to real-world Nigerian challenges.',
  stats: [
    { label: 'Honours', value: 'First Class (FUTA)' },
    { label: 'Global cert', value: 'Griffith Univ, Aus' },
    { label: 'Track record', value: '7+ Years Industry' },
    { label: 'Core stack', value: 'SPSS, STATA, BI, R' },
  ],
  img: stephenImg,
}

export const faculty = [
  {
    name: 'Adekanbi Adedeji',
    title: 'Lead Video Editor & Media Producer',
    badge: '15+ Years Industry Experience',
    tag: 'Video & Motion',
    bio: 'Graduate of BOUESTI Ikere-Ekiti. Veteran editor behind productions with top industry stars including Femi Adebayo and Kunle Afod. Has mentored 100+ trainees with operating studios in Akure.',
    skill: 'Premiere Pro & CapCut',
    credential: '100+ Trained',
    img: adedejiImg,
  },
  {
    name: 'Ayegbusi Temitope',
    title: 'Research Associate & Data Analyst',
    badge: 'Lecturer & PhD Researcher',
    tag: 'Biostatistics & Data',
    bio: 'RDN, Clinical Dietitian & Lecturer at YABATECH/LUTH College of Nursing. M.Sc (CGPA 4.53/5.0) Univ of Port-Harcourt and peer reviewer for the UK Journal of World Nutrition.',
    skill: 'Public Health Data & SPSS',
    credential: 'YABATECH Faculty',
    img: temitopeImg,
  },
  {
    name: 'Daniel Ajayi',
    title: 'Senior Web Designer & Marketer',
    badge: '5+ Years Web Experience',
    tag: 'Web & Growth',
    bio: 'Adekunle Ajasin University (AAUA) alumnus. Proven track record leading digital production teams and empowering students with hands-on web deployment from scratch to launch.',
    skill: 'CMS & Modern Web Arch',
    credential: 'AAUA Alum',
    img: ajayiImg,
  },
  {
    name: 'Iseoluwa Olawole',
    title: 'Lead Graphic Designer & Photographer',
    badge: 'Visual Brand Specialist',
    tag: 'Graphic Design',
    bio: 'Mechatronics Engineering graduate from FUOYE. Over 5 years of mastery in Adobe Photoshop, Illustrator, and InDesign, creating memorable brand graphics and commercial photography.',
    skill: 'Photoshop, Illustrator, InDesign',
    credential: 'FUOYE Alum',
    img: olawoleImg,
  },
  {
    name: 'Odunayo Omogoroye',
    title: 'Senior Data Analyst & Modeler',
    badge: 'First-Class Honours (FUTA)',
    tag: 'Data Analytics',
    bio: 'Results-driven analyst with expertise across Sahel Consulting, Baobab Microfinance Bank, and FCMB. Proficient in Python, SQL, Tableau, Power BI, and predictive modeling.',
    skill: 'Python, SQL, Tableau & BI',
    credential: 'FUTA Alum',
    img: omogoroyeImg,
  },
  {
    name: 'Ayomide Akinrata',
    title: 'Software Developer & Frontend Engineer',
    badge: 'Cybersecurity Graduate (FUTA)',
    tag: 'Software Dev',
    bio: 'Cybersecurity specialist from FUTA. Frontend engineer at InTech specializing in ReactJS, TypeScript, Python, Node.js, and AWS cloud deployment for security-conscious products.',
    skill: 'React, TypeScript, Python, AWS',
    credential: 'FUTA Alum',
    img: akinrataImg,
  },
  {
    name: 'Simisola Adeniran',
    title: 'UI/UX Designer & Product Strategist',
    badge: '5+ Years Product Design',
    tag: 'UI/UX Design',
    bio: 'Graduate of FUTA currently based in the UK. Extensive product experience at SekiApp, co-founder at Bigbrand, and UX designer at Otherface.tech focusing on human-centered experiences.',
    skill: 'Figma, UX Research & Design',
    credential: 'FUTA Alum • UK',
    img: adeniranImg,
  },
]

export const passes = {
  regular: {
    name: 'Workspace pass',
    note: 'WiFi + daily power + 4h generator backup',
    tag: 'Recommended',
    prices: [
      { period: 'Hourly', amount: 1500 },
      { period: 'Daily', amount: 12000 },
      { period: 'Weekly', amount: 84000 },
      { period: 'Monthly', amount: 336000 },
    ],
    blurb: 'For remote developers, designers, thesis researchers and consultants who cannot afford downtime.',
  },
  bare: {
    name: 'Bare desk only',
    note: 'A quiet seat — no WiFi, no generator',
    tag: 'Economy',
    prices: [
      { period: 'Hourly', amount: 1000 },
      { period: 'Daily', amount: 2000 },
      { period: 'Weekly', amount: 12000 },
      { period: 'Monthly', amount: 48000 },
    ],
    blurb: 'For offline reading, paperwork, study sessions and self-powered devices.',
  },
}

export const memberships = [
  {
    id: 'regular',
    name: 'Regular',
    price: 4000000,
    summary: 'Foundational annual desk for remote professionals.',
    accent: 'slate',
    highlight: 'Installment payments accepted',
    perks: [
      'High-speed dedicated WiFi',
      'Daily power (PHCN + 4h generator backup)',
      'Tech community & peer networking',
      'Tech events & guest workshops',
      'Mentorship & career guidance',
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum',
    price: 8000000,
    summary: 'Full-service tier with daily lunch and two family enrollments.',
    accent: 'indigo',
    featured: true,
    highlight: '2 free academy enrollments included',
    perks: [
      'Free digital skill training for two family members',
      'Daily catered lunch',
      'Premium fiber broadband with prioritised bandwidth',
      'Daily power (PHCN + 4h generator guarantee)',
      'Executive networking, mentorship & priority meeting desk',
    ],
  },
  {
    id: 'gold',
    name: 'Gold',
    price: 6000000,
    summary: 'Balanced tier with lunch and one free skill track.',
    accent: 'amber',
    highlight: '1 free academy enrollment included',
    perks: [
      'Free digital skill training for one family member',
      'Daily lunch',
      'High-speed dedicated WiFi',
      'Daily power (PHCN + 4h generator backup)',
      'Community events, advisory & mentorship',
    ],
  },
]

export const tracks = [
  { name: 'Data Analytics', tools: 'Excel · SQL · Power BI · Tableau', group: 'Data' },
  { name: 'Business Analytics', tools: 'KPI reporting · strategy modeling · market analysis', group: 'Data' },
  { name: 'Web Design & Development', tools: 'Responsive layouts · CMS · landing pages', group: 'Engineering' },
  { name: 'Frontend Development', tools: 'HTML · CSS · JavaScript · React · Tailwind', group: 'Engineering' },
  { name: 'Backend Development', tools: 'Node.js · Python · REST APIs · databases', group: 'Engineering' },
  { name: 'Fullstack Development', tools: 'Database to UI, deployed end-to-end', group: 'Engineering' },
  { name: 'Cybersecurity', tools: 'Threat identification · defensive security · network audit', group: 'Engineering' },
  { name: 'AI & Machine Learning', tools: 'Prompt engineering · Python ML · automation', group: 'Engineering' },
  { name: 'UI/UX & Product Design', tools: 'Figma · wireframing · UX research · user flows', group: 'Design' },
  { name: 'Graphic Design', tools: 'Branding · vector assets · Photoshop · Illustrator', group: 'Design' },
  { name: 'Video Editing & Motion', tools: 'Premiere Pro · CapCut · colour grading', group: 'Design' },
  { name: 'Project Management', tools: 'Agile · Scrum · Jira · sprint execution', group: 'Business' },
  { name: 'Digital Marketing', tools: 'Paid ads · SEO · content · email funnels', group: 'Business' },
  { name: 'Virtual Assistance', tools: 'Executive support · calendars · CRM', group: 'Business' },
]

export const gallery = [
  {
    title: 'Lead instructor workshop',
    caption: 'Project breakdowns, slide walkthroughs and live architecture reviews.',
    tag: 'Interactive lecture',
    span: 'md:col-span-7',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBk5KKL-m9jMLVJgiZmAQx62uo5hinH8EEwJ5za1jJyAqw2jmUlPfIYmWHJy0vVlls9iYmnt9QUCpQJgR8gW5RJ2XKL3dEg8xQsx8lg4aw9x71kvCLwIukEcA_BEun0QyKgvPm6dFptCTyCTO_IJgmDK9peeJwZGA8_dRwAQM0JEIn2mlFvavC5rUBTONYR3VslckzVfICYp-dvqqiwlOkIJkeS9wG7dxrtQzY9cs06XmqfoQUF2g9KD_fERN97kdvD4w',
  },
  {
    title: 'Hands-on code lab',
    caption: 'Frontend interfaces and software design sprints at individual desk stations.',
    tag: 'Frontend track',
    span: 'md:col-span-5',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDivUIRkdoB0ROvUUW9zgqm-XUlTOuicmHotQAXRRmd3BgxIkptC-LajJSTC408BRbZIn12jB9vx5QQiCwHTAVTritWBkHRGuWtpStHFlwTUk4WbM-evet4Rb3miwe-MQcDcrn4pGOtXbirRFxGQufAHUXtUHwKLdLQg2b7HpuPzetdZZCjsymnYWDuc43PGdoiUprp6K57gB87_ADz5cMlallgwMmGOqHtmOhf9rprEm1pBlgXoFySoVc5CJdefh-5YA',
  },
  {
    title: 'Data & analytics practical',
    caption: 'Query drafting, dataset cleaning and analytical problem solving.',
    tag: 'Data track',
    span: 'md:col-span-6',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBINzKtg6_sYIAvvRFS3kVLfbpNbEWQ9kmgbnBEeeR36GedtmqbOZPwA3i0vDsLu5ohyxx0IVGaUPLWY8Oqqs5KWLQBrt402kPML-HTHOp1USXoygDvwjMsqJtbtKnbP1kDTfslHozSHQp4ZdVZIUkSYQfeQ1AVCCHHjl4vVR6NmSiBpKTm_ehkjdfOG79gOnM4YLgoVrOSaRzpF7b9vjeIw9tYK0iOjpH7Y3Y3QjwW2C2BauJHhiYq98yenM_NCyB8gg',
  },
  {
    title: 'Q&A and mentorship hour',
    caption: 'Strategy deep dives, student questions and project feedback.',
    tag: '1-on-1 guidance',
    span: 'md:col-span-6',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuxMhGEizDsFeyBxOs5g8zgMwq8FP6knzMRbgSnDMJQzT89wJh8fekGBJM2aU5i6Rh-6_5cKt2ab0n1mDBjK5_oOPx-M6SIXGxSir3aD3a0NHxhD6kVVwqDVX1JVOFmWUbgg6CfehuufN2SM1L1l7dy8jSL28eqgmcVNsxxezAECrJPI2CPcOyeGA71Urpqe5iNB_Hz48huCRXnlEFvb4cX9eA58mdO26dWpC-d0aonXFHarepwLhTql7El7VwegVGOw',
  },
]

export const testimonials = [
  {
    quote: 'The instructors break complex architectures into bite-sized projects. Live generator power and mentor feedback every morning made learning seamless.',
    name: 'Oluwaseun Adeleke', track: 'Fullstack Web Dev', status: 'Cohort 2024 graduate', initials: 'OA', from: 'from-indigo-500 to-purple-500',
  },
  {
    quote: 'Mentorship was the turning point for my move into data analytics. You build Power BI dashboards and write real SQL from day one.',
    name: 'Tolulope Balogun', track: 'Data Analytics', status: 'Current student', initials: 'TB', from: 'from-blue-500 to-indigo-600',
  },
  {
    quote: 'Step-by-step live debugging gave me real confidence. The UI/UX curriculum tracks modern design-system standards in Figma.',
    name: 'Folake Ibrahim', track: 'UI/UX Product Design', status: 'Cohort 2024 graduate', initials: 'FI', from: 'from-purple-500 to-pink-500',
  },
  {
    quote: 'The hands-on cybersecurity approach is unmatched. Fiber internet and backup power meant zero disruption during network testing labs.',
    name: 'Emmanuel Adeniyi', track: 'Cybersecurity', status: 'Current student', initials: 'EA', from: 'from-slate-700 to-indigo-800',
  },
]

export const chatReviews = [
  {
    title: 'Graphic design class',
    rating: 7,
    quote: 'I love the fact that the class is an interactive class',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9_rjk6KeD_h5kMDtKPbg798_XiHR8Yxh2656uxfT9ay4A5zxK33AKwyIYdb_tAy9wFRLy49qpOj_c05M1sWewmeL569l16bwWoJypuczMbIBS_2GpDIwLaZ-9EQXW0KUduX-Y2dgI1Amx5T-llgZrE-NIQwVWCL7nsl8Hffn93c1P5bQnusvuDtgbEIE_ZVldOHdrbiQ09Znu5EU4CLLdQM1OnQVymuaBvx4ZJ8US01OoW6xHddHzyCjtqGvhubo6Vw',
  },
  {
    title: 'Cybersecurity trainee (Obinna)',
    rating: 8,
    quote: 'It has been going well… he is trying actually',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx0iETH7vTeSpwdli4xTHjJ2hWr7ih0EUfExxB0YIP6fhuXAOGsa6ksXF1woj6xijXMelKvYMD0qn-fbYco_3TQRipUz7ewyJZoKL5rYivJ014dNcByFtdBiquAuxsYiXPcgbvCNB2sD8CrnRwFZkOvnJ9nBAGN023hiUAqVy4O-Nhaq7nGNJwC2ODP-ZlHwOjod882Ow2q6gzdvB0S0dMoPKb1dpvIR4HN9MFy0DWB6hc27MEE9jm42kNtoFmdbAwew',
  },
]

export const services = [
  { icon: 'BarChart3', name: 'Data collection & field research', text: 'Quantitative and qualitative surveying, SPSS/STATA analysis and enumerator supervision.' },
  { icon: 'Printer', name: 'Thesis & documentation desk', text: 'Laser printing, multi-page scanning, spiral binding and thesis format review.' },
  { icon: 'Users', name: 'Meeting & seminar space', text: 'Projector-equipped room for defence practice, team presentations and scrums.' },
  { icon: 'Lightbulb', name: 'Innovation & startup advisory', text: 'Product design, digital marketing campaigns and incorporation guidance.' },
]

export const packageOptions = [
  'Hot desk — ₦1,500/hr',
  'Daily workspace pass — ₦12,000',
  'Weekly workspace pass — ₦84,000',
  'Monthly workspace pass — ₦336,000',
  'Bare desk only — ₦1,000/hr | ₦2,000/day',
  'Platinum annual membership — ₦8,000,000',
  'Gold annual membership — ₦6,000,000',
  'Regular annual membership — ₦4,000,000',
  'Academy course enrollment only',
]

export const naira = (n) => '₦' + n.toLocaleString('en-NG')
