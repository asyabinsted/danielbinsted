// Work data structure - this would typically come from a CMS or database
export interface WorkData {
  title: string;
  metadata: string;
  role: string;
  videoSrc: string;
  posterSrc: string;
  posterImage?: string;
  credits: string[];
  location: string;
  year: string;
  description: string;
  link?: string;
  trailer?: string;
  awards?: Array<{ src: string; alt: string }>;
}

export const works: Record<string, WorkData> = {
  'the-unknown-soldier': {
    title: 'The Unknown Soldier',
    metadata: 'Documentary · Short · Drama',
    role: 'Cinematographer',
    videoSrc: '/videos/works/the-unknown-soldier/unknown-soldier-video.mp4',
    posterSrc: '/images/works/the-unknown-soldier/unknown-soldier-placeholder.jpg',
    posterImage: '/images/works/the-unknown-soldier/unknown-soldier-poster.jpg',
    credits: [
      'Director: Efim Graboy',
      'Cinematographer: Daniel Binsted',
    ],
    location: 'Israel',
    year: '2017',
    description: 'An intimate investigation of World War II soviet veteran, 92-year-old Newsak Weis or as he prefers, just Uncle Nusya. The mission is to discover a real person under the armor of medals and the role model of a hero.',
    link: 'https://vimeo.com/191008310?share=copy',
    awards: [
      { src: '/assets/works/the-unknown-soldier/awards/unknown-soldier-award-01.svg', alt: 'Award 1' },
      { src: '/assets/works/the-unknown-soldier/awards/unknown-soldier-award-02.svg', alt: 'Award 2' },
      { src: '/assets/works/the-unknown-soldier/awards/unknown-soldier-award-03.svg', alt: 'Award 3' },
      { src: '/assets/works/the-unknown-soldier/awards/unknown-soldier-award-04.svg', alt: 'Award 4' },
      { src: '/assets/works/the-unknown-soldier/awards/unknown-soldier-award-05.svg', alt: 'Award 5' },
    ],
  },
  'the-war-of-raya-sinitsina': {
    title: 'The War of Raya Sinitsina',
    metadata: 'Documentary · Biography',
    role: 'Cinematographer',
    videoSrc: '/videos/works/the-war-of-raya-sinitsina/war-of-raya.mp4',
    posterSrc: '/images/works/the-war-of-raya-sinitsina/war-of-raya-cover.jpg',
    posterImage: '/images/works/the-war-of-raya-sinitsina/war-of-raya-poster.jpg',
    credits: [
      'Director: Efim Graboy',
      'Cinematographer: Daniel Binsted',
    ],
    location: 'Israel',
    year: '2020',
    description: 'A young filmmaker meets and follows Raya, a 94-year-old Soviet war heroine who fought in the Siege of Leningrad. As Head of the World War II Disabled Veterans Club in her city, she introduces him to a vanishing generation in Israel. Her own fighting spirit and willpower are still fierce. As Raya faces the loss of her last comrades and her health deteriorates, the two become involved in a spiritual process that awakens the young woman within her; Through her eyes and dreams, they create their own reality in which time and age lose all meaning. Their growing closeness transforms a film about war and loss into a mystical story of love and friendship.',
    link: 'https://vimeo.com/443519842?fl=pl&fe=sh',
    awards: [
      { src: '/assets/works/the-war-of-raya-sinitsina/awards/war-of-raya-award-01.svg', alt: 'Award 1' },
      { src: '/assets/works/the-war-of-raya-sinitsina/awards/war-of-raya-award-02.svg', alt: 'Award 2' },
      { src: '/assets/works/the-war-of-raya-sinitsina/awards/war-of-raya-award-03.svg', alt: 'Award 3' },
      { src: '/assets/works/the-war-of-raya-sinitsina/awards/war-of-raya-award-04.svg', alt: 'Award 4' },
      { src: '/assets/works/the-war-of-raya-sinitsina/awards/war-of-raya-award-05.svg', alt: 'Award 5' },
      { src: '/assets/works/the-war-of-raya-sinitsina/awards/war-of-raya-award-06.svg', alt: 'Award 6' },
      { src: '/assets/works/the-war-of-raya-sinitsina/awards/war-of-raya-award-07.svg', alt: 'Award 7' },
      { src: '/assets/works/the-war-of-raya-sinitsina/awards/war-of-raya-award-08.svg', alt: 'Award 8' },
      { src: '/assets/works/the-war-of-raya-sinitsina/awards/war-of-raya-award-09.svg', alt: 'Award 9' },
    ],
  },
  'the-first-lady': {
    title: 'The First Lady',
    metadata: 'Documentary',
    role: 'Cinematographer',
    videoSrc: '/videos/works/the-first-lady/first-lady.mp4',
    posterSrc: '/images/works/the-first-lady/first-lady-placeholder.jpg',
    posterImage: '/images/works/the-first-lady/first-lady-poster.jpg',
    credits: [
      'Directors: Udi Nir & Sagi Bornstein',
      'Cinematographer: Daniel Binsted',
    ],
    location: 'Israel',
    year: '2025',
    description: 'Fearing for her life, Israeli transgender pioneer Efrat Tilma fled the country as a teenager. Now in her seventies, she must fight for her freedom once again, as the country spirals into political and social regression.',
    link: 'https://www.imdb.com/title/tt31193171/',
    awards: [
      { src: '/assets/works/the-first-lady/awards/first-lady-award-01.svg', alt: 'Award 1' },
      { src: '/assets/works/the-first-lady/awards/first-lady-award-02.svg', alt: 'Award 2' },
      { src: '/assets/works/the-first-lady/awards/first-lady-award-03.svg', alt: 'Award 3' },
      { src: '/assets/works/the-first-lady/awards/first-lady-award-04.svg', alt: 'Award 4' },
    ],
  },
  'julian-edelman': {
    title: '100% Julian Edelman',
    metadata: 'Documentary',
    role: 'Second Unit Cinematographer',
    videoSrc: '/videos/works/julian-edelman/julian-edelman.mp4',
    posterSrc: '/images/works/julian-edelman/julian-edelman-placeholder.jpg',
    posterImage: '/images/works/julian-edelman/julian-edelman-poster.jpg',
    credits: [
      'Director: Kyler Schelling',
      'Second Unit Cinematographer: Daniel Binsted',
    ],
    location: 'USA',
    year: '2019',
    description: 'Narrated by Michael Rapaport and featuring original conversations with stars from Mark Wahlberg to Tom Brady, Snoop Dogg, Michael Strahan and Deion Sanders, the film is a look inside Julian Edelman\'s journey from major injury to Super Bowl MVP in 2019.',
    link: 'https://www.primevideo.com/detail/100-Julian-Edelman/0RV7UNH2YWEGY4ZAIZJFL0WQ7C',
    trailer: 'https://vimeo.com/358828728?share=copy',
    awards: [
      { src: '/assets/works/julian-edelman/logo/julian-edelman-logo.png', alt: '100% Julian Edelman Logo' },
    ],
  },
  'kuya-noy': {
    title: 'Kuya Noy',
    metadata: 'Documentary',
    role: 'Director',
    videoSrc: '/videos/works/kuya-noy/kuya-noy.mp4',
    posterSrc: '/images/works/kuya-noy/kuya-noy-placeholder.jpg',
    posterImage: '/images/works/kuya-noy/kuya-noy-poster.jpg',
    credits: [
      'Director: Daniel Binsted',
    ],
    location: 'Israel · Philippines',
    year: '2019',
    description: 'A story of Noy, a Filipino rock legend who found himself living in the slums of Tel-Aviv, barely scraping by, father to an Israeli daughter who is about to begin her military service. During the late 70\'s, under martial law, Noy founded ASIN, a music band that symbolized liberalism. Now, at the age of 61 and for the first time in many years, he will pick up his old guitar and dare to dream of a new future.',
    link: 'https://vimeo.com/ondemand/kuyanoy',
    awards: [
      { src: '/assets/works/kuya-noy/awards/kuya-noy-award-01.svg', alt: 'Award 1' },
    ],
  },
  // Future projects will use their own descriptive slugs
  // Example: 'project-name-slug': { ... }
};
