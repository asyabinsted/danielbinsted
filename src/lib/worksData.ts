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
    videoSrc: '/videos/works/the-unknown-soldier/the-unknown-soldier.mp4',
    posterSrc: '/images/works/the-unknown-soldier/the-unknown-soldier-placeholder.jpg',
    posterImage: '/images/works/the-unknown-soldier/the-unknown-soldier-poster.jpg',
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
    videoSrc: '/videos/works/the-war-of-raya-sinitsina/the-war-of-raya-sinitsina.mp4',
    posterSrc: '/images/works/the-war-of-raya-sinitsina/the-war-of-raya-sinitsina-cover.jpg',
    posterImage: '/images/works/the-war-of-raya-sinitsina/the-war-of-raya-sinitsina-poster.jpg',
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
    videoSrc: '/videos/works/the-first-lady/the-first-lady.mp4',
    posterSrc: '/images/works/the-first-lady/the-first-lady-placeholder.jpg',
    posterImage: '/images/works/the-first-lady/the-first-lady-poster.jpg',
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
  'empty-spaces': {
    title: 'Empty Spaces',
    metadata: 'Short · Drama',
    role: 'Writer, co-creator',
    videoSrc: '/videos/works/empty-spaces/empty-spaces.mp4',
    posterSrc: '/images/works/empty-spaces/empty-spaces-placeholder.jpg',
    posterImage: '/images/works/empty-spaces/empty-spaces-poster.jpg',
    credits: [
      'Director: Ben Ziv',
      'Writer, co-creator: Daniel Binsted',
    ],
    location: 'Israel',
    year: '2020',
    description: 'Nati, an officer in the IDF (Israel Defense Forces) is heading south with three soldiers in order to perform a very complicated mission.',
    link: 'https://www.imdb.com/title/tt13772656/',
    awards: [
      { src: '/assets/works/empty-spaces/awards/empty-spaces-award-01.svg', alt: 'Award 1' },
    ],
  },
  'mini-dv': {
    title: 'Mini DV',
    metadata: 'Documentary',
    role: 'Cinematographer',
    videoSrc: '/videos/works/mini-dv/mini-dv.mp4',
    posterSrc: '/images/works/mini-dv/mini-dv-placeholder.jpg',
    posterImage: '/images/works/mini-dv/mini-dv-poster.jpg',
    credits: [
      'Director: Shauly Melamed',
      'Cinematographer: Daniel Binsted',
    ],
    location: 'Israel',
    year: '2022',
    description: 'Home videos shot during his childhood send director Shauly Melamed on a downward spiral, inspiring a search for other LGBTQ adults who documented themselves during puberty. Shauly finds many such individuals who, in their youth, exposed their non-conforming identities without understanding the secrets the camera beheld. Tom, transgender, grew up in the Ultra-Orthodox town of Safed and unwittingly documented his journey of self-discovery; Betty, born to Iranian immigrants, obsessively filmed her intimate relationships with girlfriends; Rumia found her roots in drag as her mother came out of the closet; Shauly explored his own homosexuality in the aftermath of his father\'s sudden death. Through watching their childhood films, the four LGBTQ adults are forced to confront the most formative people and experiences from their past.',
    link: 'https://www.youtube.com/watch?v=bH2LkblS_yI',
    awards: [
      { src: '/assets/works/mini-dv/awards/mini-dv-award-01.svg', alt: 'Award 1' },
    ],
  },
  'the-postman-in-underwear': {
    title: 'The Postman in Underwear',
    metadata: 'Short · Comedy · Drama',
    role: 'Director, writer',
    videoSrc: '/videos/works/the-postman-in-underwear/the-postman-in-underwear.mp4',
    posterSrc: '/images/works/the-postman-in-underwear/the-postman-in-underwear-placeholder.jpg',
    posterImage: '/images/works/the-postman-in-underwear/the-postman-in-underwear-poster.jpg',
    credits: [
      'Director, writer: Daniel Binsted',
    ],
    location: 'Israel',
    year: '2016',
    description: 'Two brothers tell the story of an eccentric postman who falls in love for the first time in his life. In an attempt to help him express his love they embark on a journey in which they will experience the difference between fantasy and real love.',
    link: 'https://www.imdb.com/title/tt5144542/',
  },
  'riverside-magic-clips': {
    title: 'Riverside.fm',
    metadata: 'Branded campaign',
    role: 'Director, Producer & Video Editor',
    videoSrc: '/videos/works/riverside-magic-clips/riverside-magic-clips.mp4',
    posterSrc: '/images/works/riverside-magic-clips/riverside-magic-clips-placeholder.jpg',
    credits: [
      'Director, Producer & Video Editor: Daniel Binsted',
    ],
    location: 'Riverside, a platform for recording podcasts and video interviews, facilitates remote recording with studio-quality results.',
    year: '',
    description: 'Branded campaign for Riverside.fm\'s AI-powered video clipping tool.',
    link: 'https://vimeo.com/848132477?share=copy',
    awards: [
      { src: '/assets/works/riverside-magic-clips/logo/riverside-logo.png', alt: 'Riverside.fm Logo' },
    ],
  },
  'riverside-ai-transcriptions': {
    title: 'Riverside.fm',
    metadata: 'Promotional video',
    role: 'Writer, Producer, Director & Video Editor',
    videoSrc: '/videos/works/riverside-ai-transcriptions/riverside-ai-transcriptions.mp4',
    posterSrc: '/images/works/riverside-ai-transcriptions/riverside-ai-transcriptions-placeholder.jpg',
    credits: [
      'Writer, Producer, Director & Video Editor: Daniel Binsted',
    ],
    location: 'Riverside, a platform for recording podcasts and video interviews, facilitates remote recording with studio-quality results.',
    year: '',
    description: 'Promotional video for Riverside.fm\'s AI transcription service.',
    link: 'https://vimeo.com/854431027?share=copy',
    awards: [
      { src: '/assets/works/riverside-magic-clips/logo/riverside-logo.png', alt: 'Riverside.fm Logo' },
    ],
  },
  'fiverr': {
    title: 'Fiverr',
    metadata: 'Branded content',
    role: 'Director, Producer, Writer, Editor & Cinematographer',
    videoSrc: '/videos/works/fiverr/fiverr.mp4',
    posterSrc: '/images/works/fiverr/fiverr-placeholder.jpg',
    credits: [
      'Director, Producer, Writer, Editor & Cinematographer: Daniel Binsted',
    ],
    location: 'Fiverr Empower is a program dedicated to helping people with disabilities build their professional experience and their portfolio of work by giving them opportunities to find work as freelancers through the Fiverr platform.',
    year: '',
    description: 'A short video describing Fiverr\'s unique program, Fiverr Empower, through the story of Danielle Ongo-Levi.',
    link: 'https://vimeo.com/553941607?share=copy',
    awards: [
      { src: '/assets/works/fiverr/logo/fiverr-logo.png', alt: 'Fiverr Logo' },
    ],
  },
  'riverside-masterclass': {
    title: 'Master the Art of Podcasting',
    metadata: 'Educational series',
    role: 'Producer & Video Editor',
    videoSrc: '/videos/works/riverside-masterclass/riverside-masterclass.mp4',
    posterSrc: '/images/works/riverside-masterclass/riverside-masterclass-placeholder.jpg',
    credits: [
      'Producer & Video Editor: Daniel Binsted',
    ],
    location: 'Riverside, a platform for recording podcasts and video interviews, facilitates remote recording with studio-quality results.',
    year: '',
    description: 'Educational series for Riverside.fm\'s podcasting platform.',
    link: 'https://youtu.be/tRJXHA28CT4?si=GJuHZf73k2M7q6_-',
    awards: [
      { src: '/assets/works/riverside-magic-clips/logo/riverside-logo.png', alt: 'Riverside.fm Logo' },
    ],
  },
  'monday': {
    title: 'Monday.com',
    metadata: 'Product video',
    role: 'Cinematographer',
    videoSrc: '/videos/works/monday/monday.mp4',
    posterSrc: '/images/works/monday/monday-placeholder.jpg',
    credits: [
      'Cinematographer: Daniel Binsted',
    ],
    location: 'Monday.com is a cloud-based platform that allows users to create their own applications and project management software.',
    year: '',
    description: 'Product video highlighting Monday.com\'s workflow solutions.',
    link: 'https://youtu.be/cTfyKr2KVV8?si=9fzMMe1X1HMr5dP1',
    awards: [
      { src: '/assets/works/monday/logo/monday-logo.png', alt: 'Monday.com Logo' },
    ],
  },
  'succulent-sessions': {
    title: 'Succulent Sessions',
    metadata: 'Live music video',
    role: 'Cinematographer',
    videoSrc: '/videos/works/succulent-sessions/succulent-sessions.mp4',
    posterSrc: '/images/works/succulent-sessions/succulent-sessions-placeholder.jpg',
    credits: [
      'Cinematographer: Daniel Binsted',
    ],
    location: 'Succulent Sessions is the juiciest live sessions format fresh out of Tel Aviv, Israel.',
    year: '',
    description: 'Live music session featuring various artists.',
    link: 'https://www.youtube.com/@SucculentSessions',
    awards: [
      { src: '/assets/works/succulent-sessions/logo/succulent-sessions-logo.png', alt: 'Succulent Sessions Logo' },
    ],
  },
  'riverside-paid-social-01': {
    title: 'Riverside.fm',
    metadata: 'Paid Social Campaign',
    role: 'Director & Editor',
    videoSrc: '/videos/works/riverside-paid-social-01/riverside-paid-social-01.mp4',
    posterSrc: '/images/works/riverside-paid-social-01/riverside-paid-social-01-placeholder.jpg',
    credits: [
      'Director & Editor: Daniel Binsted',
    ],
    location: 'Riverside, a platform for recording podcasts and video interviews, facilitates remote recording with studio-quality results.',
    year: '',
    description: 'Conceptualized, directed, and edited short-form ads for A/B testing across Meta and YouTube, combining creator collaborations with performance-driven storytelling for podcasting tools.',
    link: 'https://youtu.be/FLDgpkM3HDE?si=o4z37F9e3nxN-272',
    awards: [
      { src: '/assets/works/riverside-magic-clips/logo/riverside-logo.png', alt: 'Riverside.fm Logo' },
    ],
  },
  'riverside-paid-social-02': {
    title: 'Riverside.fm',
    metadata: 'Paid Social Campaign',
    role: 'Director & Editor',
    videoSrc: '/videos/works/riverside-paid-social-02/riverside-paid-social-02.mp4',
    posterSrc: '/images/works/riverside-paid-social-02/riverside-paid-social-02-placeholder.jpg',
    credits: [
      'Director & Editor: Daniel Binsted',
    ],
    location: 'Riverside, a platform for recording podcasts and video interviews, facilitates remote recording with studio-quality results.',
    year: '',
    description: 'Conceptualized, directed, and edited short-form ads for A/B testing across Meta and YouTube, combining creator collaborations with performance-driven storytelling for podcasting tools.',
    link: 'https://youtu.be/hNEjKuurfto?si=iOXa6ZNhPi5Lb9Uw',
    awards: [
      { src: '/assets/works/riverside-magic-clips/logo/riverside-logo.png', alt: 'Riverside.fm Logo' },
    ],
  },
  'mixtiles': {
    title: 'Mixtiles',
    metadata: 'Performance Marketing Campaign',
    role: 'Editor',
    videoSrc: '/videos/works/mixtiles/mixtiles.mp4',
    posterSrc: '/images/works/mixtiles/mixtiles-placeholder.jpg',
    credits: [
      'Editor: Daniel Binsted',
    ],
    location: 'Mixtiles are printed framed pictures that stick to any wall, leave no damage, and can be moved around.',
    year: '',
    description: 'Edited short-form ads for Meta platforms (Facebook & Instagram), combining storytelling, visual rhythm, and emotional triggers to maximize engagement and conversions.',
    link: 'https://www.facebook.com/mixtiles/videos/1232390408298314/?vh=e&mibextid=wwXIfr&rdid=M7pu5BwEjo3O5SHq',
    awards: [
      { src: '/assets/works/mixtiles/logo/mixtiles-logo.png', alt: 'Mixtiles Logo' },
    ],
  },
  'echelonn-ai': {
    title: 'Echelonn AI',
    metadata: 'Brand Awareness Video',
    role: 'Director & Editor',
    videoSrc: '/videos/works/echelonn-ai/echelonn-ai.mp4',
    posterSrc: '/images/works/echelonn-ai/echelonn-ai-placeholder.jpg',
    credits: [
      'Director & Editor: Daniel Binsted',
    ],
    location: 'Echelonn is a Google Ads agency for eCommerce brands, specializing in scaling ad accounts with experienced professionals, and built for fast, profitable growth.',
    year: '2025',
    description: '',
    link: 'https://youtube.com/shorts/kdBfIOdmvuU?feature=share',
    awards: [
      { src: '/assets/works/echelonn-ai/logo/echelonn-logo.png', alt: 'Echelonn Logo' },
    ],
  },
  // Future projects will use their own descriptive slugs
  // Example: 'project-name-slug': { ... }
};
