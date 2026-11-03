import { TbDeviceMobile, TbDeviceTablet, TbDeviceLaptop, TbDeviceGamepad2, TbDeviceWatch, TbCode } from 'react-icons/tb'

export const BRAND = 'IFix It'

export const contact = {
  phone: '+971 55 150 6155',
  phoneHref: 'tel:+971551506155',
  support: '+971 55 150 6155',
  email: 'info@ifixit.ca',
  address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
  hours: 'Mon – Sat: 9:00 AM – 8:00 PM',
}

/* ---------------- Navigation ---------------- */
export const nav = [
  { label: 'Home', to: '/' },
  {
    label: 'Pages',
    sub: [
      { label: 'About', to: '/about' },
      { label: 'Team', to: '/team' },
      { label: 'Track Your Repair', to: '/track-your-repair' },
      { label: 'Pricing Plan', to: '/pricing' },
      { label: 'Testimonials', to: '/testimonials' },
      { label: 'FAQs', to: '/faqs' },
      { label: 'Book A Repair', to: '/book-a-repair' },
    ],
  },
  { label: 'Service', sub: [] /* filled from services below */ },
  { label: 'Project', sub: [] },
  { label: 'Blog', sub: [] },
  { label: 'Contact', to: '/contact' },
]

/* ---------------- Services ---------------- */
export const services = [
  {
    slug: 'phone-repair',
    title: 'Phone Repair',
    icon: <TbDeviceMobile />,
    img: '/images/ser-phone.jpg',
    banner: '/images/hero.jpg',
    text: 'Screens, batteries, charging ports and board-level fixes for every smartphone brand.',
    intro:
      'From a cracked screen to a phone that will not power on, our certified technicians repair iPhone, Samsung, Google Pixel, OnePlus, Xiaomi and more — most jobs done while you wait.',
    repairs: [
      { name: 'Screen replacement', price: 49 },
      { name: 'Battery replacement', price: 29 },
      { name: 'Charging port repair', price: 35 },
      { name: 'Camera & lens repair', price: 39 },
      { name: 'Water damage treatment', price: 59 },
      { name: 'Motherboard microsoldering', price: 89 },
    ],
  },
  {
    slug: 'tablet-repair',
    title: 'Tablet Repair',
    icon: <TbDeviceTablet />,
    img: '/images/ser-tablet.jpg',
    banner: '/images/about1.jpg',
    text: 'Cracked glass, unresponsive touch and power issues on iPad, Galaxy Tab and more.',
    intro:
      'Tablets take a beating. We restore iPads, Galaxy Tabs, Surface and Lenovo tablets with precision glass and digitizer replacement, new batteries and port repairs.',
    repairs: [
      { name: 'Glass & digitizer replacement', price: 69 },
      { name: 'LCD replacement', price: 89 },
      { name: 'Battery replacement', price: 49 },
      { name: 'Charging port repair', price: 45 },
      { name: 'Home / power button fix', price: 35 },
      { name: 'Software restore', price: 25 },
    ],
  },
  {
    slug: 'laptop-repair',
    title: 'Laptop Repair',
    icon: <TbDeviceLaptop />,
    img: '/images/ser-laptop.jpg',
    banner: '/images/work4.jpg',
    text: 'Keyboards, hinges, displays, SSD upgrades and liquid-damage recovery.',
    intro:
      'MacBook, Dell, HP, Lenovo or ASUS — we fix laptops at component level, including logic boards, screens, keyboards, hinges and performance upgrades.',
    repairs: [
      { name: 'Screen replacement', price: 99 },
      { name: 'Keyboard replacement', price: 59 },
      { name: 'Battery replacement', price: 69 },
      { name: 'SSD / RAM upgrade', price: 39 },
      { name: 'Hinge repair', price: 49 },
      { name: 'Logic board repair', price: 149 },
    ],
  },
  {
    slug: 'smart-watch',
    title: 'Smart Watch',
    icon: <TbDeviceWatch />,
    img: '/images/ser-watch.jpg',
    banner: '/images/circuit.jpg',
    text: 'Precision screen and battery replacements for Apple Watch, Galaxy & Fitbit.',
    intro:
      'Smart watches need delicate hands. We replace screens, batteries and back glass and re-seal your watch against water and dust.',
    repairs: [
      { name: 'Screen replacement', price: 79 },
      { name: 'Battery replacement', price: 45 },
      { name: 'Back glass / sensor repair', price: 55 },
      { name: 'Crown & button repair', price: 39 },
      { name: 'Water-seal restoration', price: 29 },
      { name: 'Strap & lug repair', price: 19 },
    ],
  },
  {
    slug: 'game-console',
    title: 'Game Console',
    icon: <TbDeviceGamepad2 />,
    img: '/images/ser-console.jpg',
    banner: '/images/benefits.jpg',
    text: 'HDMI ports, overheating, drift-free controllers and disc drive repairs.',
    intro:
      'Get back in the game. We repair PlayStation, Xbox, Nintendo Switch and Steam Deck consoles and controllers — from HDMI ports to overheating and stick drift.',
    repairs: [
      { name: 'HDMI port replacement', price: 69 },
      { name: 'Overheating & thermal paste', price: 45 },
      { name: 'Controller stick drift', price: 29 },
      { name: 'Disc drive repair', price: 59 },
      { name: 'Power supply repair', price: 79 },
      { name: 'Switch screen replacement', price: 89 },
    ],
  },
  {
    slug: 'software-repair',
    title: 'Software Repair',
    icon: <TbCode />,
    img: '/images/ser-software.jpg',
    banner: '/images/software2.jpg',
    text: 'Virus removal, OS reinstall, data recovery and performance tuning.',
    intro:
      'Slow, infected or stuck in a boot loop? We remove malware, reinstall and update operating systems, recover lost data and tune your device for speed.',
    repairs: [
      { name: 'Virus & malware removal', price: 39 },
      { name: 'OS reinstall & update', price: 49 },
      { name: 'Data recovery', price: 79 },
      { name: 'Data transfer & backup', price: 29 },
      { name: 'Boot loop / bricked fix', price: 45 },
      { name: 'Performance tune-up', price: 25 },
    ],
  },
]

export const serviceBenefits = [
  'Free diagnostic before any work begins',
  'Genuine & OEM-grade replacement parts',
  '90-day warranty on every repair',
  'Most repairs completed same day',
  'Your data stays private and safe',
  'Transparent pricing — no hidden fees',
]

/* ---------------- Projects ---------------- */
export const projects = [
  {
    slug: 'iphone-screen-replacement',
    title: 'iPhone Screen Replacement',
    tags: ['Phone Repair', 'Screen Repair'],
    img: '/images/work1.jpg',
    client: 'Sarah Johnson',
    category: 'Phone Repair',
    date: 'Sep 14, 2026',
    duration: '45 Minutes',
    gallery: ['/images/ser-phone.jpg', '/images/hero.jpg', '/images/about1.jpg'],
    challenge:
      'An iPhone 15 Pro dropped face-down on concrete. The OLED panel was shattered, Face ID was intermittent and the frame was slightly bent near the volume buttons.',
    solution:
      'We straightened the frame, transferred the original Face ID flex to preserve security, fitted a genuine OLED panel and re-sealed the device with new adhesive to restore water resistance.',
  },
  {
    slug: 'desktop-pc-build-upgrade',
    title: 'Desktop PC Build & Upgrade',
    tags: ['Computer Repair', 'Upgrade'],
    img: '/images/work2.jpg',
    client: 'Pixel Studio Ltd.',
    category: 'Computer Repair',
    date: 'Aug 02, 2026',
    duration: '2 Days',
    gallery: ['/images/blog1.jpg', '/images/why.jpg', '/images/circuit.jpg'],
    challenge:
      'A design studio’s workstations were struggling with 4K rendering — long export times, thermal throttling and frequent crashes under load.',
    solution:
      'We upgraded GPUs, moved to NVMe storage, doubled RAM and rebuilt the cooling with a new airflow layout. Render times dropped by 58% with stable temperatures.',
  },
  {
    slug: 'macbook-logic-board-repair',
    title: 'MacBook Logic Board Repair',
    tags: ['Mac Repair', 'Microsoldering'],
    img: '/images/work3.jpg',
    client: 'Michael Brown',
    category: 'Laptop Repair',
    date: 'Jul 21, 2026',
    duration: '3 Days',
    gallery: ['/images/blog3.jpg', '/images/ser-laptop.jpg', '/images/contact.jpg'],
    challenge:
      'A MacBook Pro suffered a coffee spill and would not power on. Two other shops recommended a full logic board replacement costing more than the laptop was worth.',
    solution:
      'Under the microscope we found corroded power-rail components. After ultrasonic cleaning and replacing three SMD parts, the MacBook booted with all data intact — at a third of the replacement cost.',
  },
  {
    slug: 'laptop-keyboard-restoration',
    title: 'Laptop Keyboard Restoration',
    tags: ['Laptop', 'Hardware'],
    img: '/images/work4.jpg',
    client: 'Greenfield School',
    category: 'Laptop Repair',
    date: 'Jun 10, 2026',
    duration: '1 Week',
    gallery: ['/images/ser-laptop.jpg', '/images/blog3.jpg', '/images/work3.jpg'],
    challenge:
      'A school fleet of 40 student laptops had missing keys, sticky switches and broken hinges after a year of classroom use.',
    solution:
      'We ran an on-site triage, then replaced keyboards and hinges in batches so no classroom was ever without devices. All 40 units were returned within a week.',
  },
  {
    slug: 'smartphone-board-microsoldering',
    title: 'Smartphone Board Microsoldering',
    tags: ['Phone Repair', 'Microsoldering'],
    img: '/images/ser-phone.jpg',
    client: 'David Lee',
    category: 'Phone Repair',
    date: 'May 05, 2026',
    duration: '2 Days',
    gallery: ['/images/contact.jpg', '/images/hero.jpg', '/images/cta.jpg'],
    challenge:
      'A Samsung Galaxy was stuck with no charging and no display after a faulty third-party charger shorted the charging IC.',
    solution:
      'We traced the short with thermal imaging, replaced the charging IC and a damaged filter, then ran a full battery health and charging cycle test.',
  },
]

/* ---------------- Blog ---------------- */
export const posts = [
  {
    slug: 'benefits-of-professional-device-maintenance',
    cat: 'Computer',
    title: 'Top benefits of professional device maintenance for your business',
    img: '/images/blog1.jpg',
    date: '12 Oct 2026',
    author: 'Daniel Carter',
    read: '6 min read',
    excerpt: 'Regular maintenance keeps your team productive and your hardware budget under control.',
    body: [
      'Every hour a laptop sits broken is an hour of lost productivity. For businesses that rely on their devices, a proactive maintenance plan is one of the simplest ways to protect revenue.',
      'Professional maintenance catches small problems — failing fans, swollen batteries, worn ports — before they become expensive emergencies. It also extends the life of your hardware, so you replace devices on your schedule rather than in a panic.',
      'Security matters too. A maintenance visit includes OS updates, firmware patches and malware scans, closing the gaps attackers love to exploit.',
    ],
    quote: 'A device you maintain is a device that works when your business needs it most.',
    tags: ['Maintenance', 'Business', 'Laptop'],
  },
  {
    slug: 'reliable-device-repair-services',
    cat: 'Battery',
    title: 'Discover Reliable Device Repair Services Quickly and Easily',
    img: '/images/blog2.jpg',
    date: '20 Oct 2026',
    author: 'Emily Carter',
    read: '4 min read',
    excerpt: 'What to look for in a repair shop — and the red flags to avoid.',
    body: [
      'Not all repair shops are equal. The right one gives you a clear quote up front, uses quality parts and stands behind its work with a written warranty.',
      'Ask about the parts being used. Genuine or OEM-grade components cost a little more, but they last longer and keep features like True Tone and fast charging working.',
      'Finally, look for real-time tracking and good communication. You should never have to wonder where your device is or when it will be ready.',
    ],
    quote: 'Transparency is the best sign that a repair shop respects you and your device.',
    tags: ['Battery', 'Tips', 'Phone'],
  },
  {
    slug: 'laptop-vs-desktop-repairs',
    cat: 'Recovery',
    title: 'Laptop vs Desktop Repairs: Key Differences Explained',
    img: '/images/blog3.jpg',
    date: '28 Oct 2026',
    author: 'Michael Turner',
    read: '5 min read',
    excerpt: 'Why fixing a laptop is a different job from fixing a desktop.',
    body: [
      'Desktops are modular: most parts are standard and swappable, which makes repairs and upgrades quick and affordable.',
      'Laptops pack everything into a tight chassis, often with soldered RAM and proprietary parts. Repairs need specialist tools, careful disassembly and sometimes microsoldering.',
      'Data recovery follows the same pattern — desktop drives are easy to remove, while modern laptops may need board-level work to reach soldered storage.',
    ],
    quote: 'The smaller the device, the more skill each repair demands.',
    tags: ['Laptop', 'Desktop', 'Recovery'],
  },
]

/* ---------------- People ---------------- */
export const team = [
  { name: 'Daniel Carter', role: 'Founder & CEO', img: '/images/team1.jpg' },
  { name: 'Emily Carter', role: 'Senior Engineer', img: '/images/team2.jpg' },
  { name: 'Michael Turner', role: 'Mobile Repair Specialist', img: '/images/team3.jpg' },
  { name: 'Emma Wilson', role: 'Lead Technician', img: '/images/team4.jpg' },
]

export const testimonials = [
  { name: 'Annette Black', role: 'CEO & Founder', img: '/images/testi1.jpg', text: 'My laptop stopped working right before a big deadline. The team was professional, finished on time, and saved me a fortune compared with buying a replacement. Highly recommended!' },
  { name: 'Wade Warren', role: 'Project Manager', img: '/images/testi2.jpg', text: 'Cracked screen fixed in under an hour with genuine parts. Real-time tracking meant I always knew the status. Honest pricing and super friendly staff.' },
  { name: 'Emily Carter', role: 'Photographer', img: '/images/team4.jpg', text: 'They recovered every photo from my water-damaged phone when two other shops said it was impossible. I can’t thank the IFix It team enough.' },
  { name: 'Robert Fox', role: 'Software Developer', img: '/images/team1.jpg', text: 'My MacBook logic board was fried. IFix It repaired it at component level for a third of Apple’s quote. Back to coding in three days.' },
  { name: 'Jenny Wilson', role: 'Teacher', img: '/images/team2.jpg', text: 'They fixed 40 school laptops in a week without disrupting a single class. Organised, friendly and fairly priced.' },
  { name: 'Cody Fisher', role: 'Gamer & Streamer', img: '/images/testi2.jpg', text: 'PS5 HDMI port replaced same day and my controller drift is gone. These guys know consoles.' },
]

/* ---------------- FAQs ---------------- */
export const faqs = [
  { cat: 'General', q: 'How long does a typical repair take?', a: 'Most screen and battery repairs are completed in 30–60 minutes. Board-level and data recovery jobs usually take 1–3 business days — we keep you updated in real time.' },
  { cat: 'Pricing', q: 'How much does a screen repair cost?', a: 'Cost depends on your device model. Our pricing is fully transparent and you receive a free estimate before any work begins — no surprises.' },
  { cat: 'Parts', q: 'Do you use genuine replacement parts?', a: 'Yes. We use genuine or OEM-grade parts and back every repair with our 90-day warranty.' },
  { cat: 'Data', q: 'Can you recover data from a damaged device?', a: 'In most cases, yes. Our lab recovers photos, contacts and files from water-damaged, dead or broken devices.' },
  { cat: 'General', q: 'Do I need an appointment?', a: 'Walk-ins are welcome, but booking online guarantees a technician and the right parts are ready when you arrive.' },
  { cat: 'Warranty', q: 'What does the 90-day warranty cover?', a: 'It covers the parts we installed and our workmanship. If the same issue returns within 90 days, we fix it free of charge.' },
  { cat: 'Data', q: 'Will my data be safe during the repair?', a: 'Absolutely. We never access personal data unless you ask us to, and we recommend a backup before any repair — we can do it for you.' },
  { cat: 'Pricing', q: 'Is the diagnostic really free?', a: 'Yes. We diagnose your device for free and you only pay if you approve the repair.' },
]

/* ---------------- Pricing ---------------- */
export const plans = [
  { name: 'Basic', price: 19, features: [true, true, true, false, false] },
  { name: 'Pro', price: 29, features: [true, true, true, true, true], featured: true },
  { name: 'Business', price: 59, features: [true, true, true, true, true] },
]
export const planFeatures = ['Free diagnostic assessment', 'Real-time repair tracking', 'Genuine parts guarantee', 'Priority service queue', '90-day repair warranty']

// Fill nav dropdowns from data so links stay in sync
nav[2].sub = services.map((s) => ({ label: s.title, to: `/services/${s.slug}` }))
nav[3].sub = projects.slice(0, 4).map((p) => ({ label: p.title, to: `/projects/${p.slug}` }))
nav[4].sub = posts.map((p) => ({ label: p.title.length > 34 ? p.title.slice(0, 32) + '…' : p.title, to: `/blog/${p.slug}` }))
