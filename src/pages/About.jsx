import PageHero from '../components/PageHero';
import GoldDivider from '../components/GoldDivider';

const awards = [
  { year: '2024', title: '"Sangeetha Kala Ratnam" — Motibagh Sri Skanda Samaj, Nagpur' },
  { year: '2024', title: '"Best Vocalist" Sub Senior Category — The Music Academy' },
  { year: '2024', title: 'Felicitated by Hon. Minister Nirmala Sitharaman, Kanchipuram' },
  { year: '2023', title: 'Bharat Ratna M.S. Subbulakshmi Endowment Award — Vishaka Music Academy, Visakhapatnam' },
  { year: '2023', title: '"Isai Thendral" — 32nd Anniversary, Deiveega Iyal Isai Mandram' },
  { year: '2022', title: '"Gana Kala Saraswathi" — Perambur Sangeetha Sabha' },
  { year: '2019', title: '"Shanmukha Sangeetha Shironmani" — Sri Shanmukhananda Sabha, Mumbai' },
  { year: '2017', title: 'Prof. Mahalingam Padmanabhan Endowment Award — Narada Gana Sabha, Chennai' },
  { year: '2016', title: 'Dr. M.L. Vasanthakumari Award — Sri Parthasarathy Swami Sabha' },
  { year: '2016', title: 'Honoured by President Pranab Mukherjee — Rashtrapati Bhavan, Delhi' },
  { year: '2015', title: '"Dron(e)Acharya" — Sangeeth Samrat Carnatic Premier League, USA' },
  { year: '2015', title: '"Best Performer – Vocal" — Sri Parthasarathy Swami Sabha, Dec Music Festival' },
  { year: '2014', title: 'Sri Shanmukhananda Bharat Ratna Dr. M.S. Subbulakshmi Fellowship Award — Mumbai' },
  { year: '2013', title: 'D.K. Pattammal Award of Excellence — Karthik Fine Arts' },
  { year: '2013', title: 'Aacharya Choodamani A. Sundaresan\'s Award — Sri Krishna Gana Sabha' },
  { year: '2010–11', title: 'RMKV Award of Excellence — Rasika Fine Arts' },
  { year: '2011', title: '"Sathya Gaana Kokila Sundaram" — Bharathanjali Trust' },
  { year: '2008', title: '"Yuva Kala Bharathi" — Bharat Kalachar' },
  { year: '2007', title: 'Ramakrishna Ayya Pantulu Memorial Award — Vipanchee' },
  { year: '2007', title: '"Young Achiever\'s Award" — Madras North-West Rotary Club' },
  { year: '2002', title: '"Swathi Kiranam" — Malayalee Club\'s Swathi Smrithi' },
  { year: '1997', title: '"Child Prodigy" — Lions Club' },
];

export default function About() {
  return (
    <div className="bg-cream animate-fade-in relative">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay" />
      
      <PageHero 
        title="About" 
        subtitle="Her Story, Her Music, Her Journey" 
      />

      {/* Introduction */}
      <section className="py-24 relative z-10 overflow-hidden">
        {/* Large Musical Icon Overlay (Watermark) */}
        <div className="absolute top-10 right-[-100px] md:right-[-50px] opacity-[0.05] pointer-events-none select-none">
          <svg width="600" height="800" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold">
            <path d="M100 250C120 250 140 230 140 200C140 160 100 140 80 120C60 100 50 80 50 60C50 30 70 10 100 10C130 10 150 30 150 60C150 70 145 80 140 85L140 250C140 270 120 290 100 290C80 290 60 270 60 240C60 210 80 190 100 190" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-gold" />
              <span className="font-body text-gold uppercase tracking-[0.25em] text-xs font-semibold">The Artist</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-charcoal mb-12">Voice & Vision</h2>
            
            <div className="relative mb-8">
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 font-display text-[150px] text-gold/10 leading-none select-none italic">"</span>
              <p className="font-body text-2xl md:text-3xl text-burgundy italic leading-relaxed mb-8 relative z-10 max-w-4xl">
                Known for her silken voice and deep emotive delivery, Vidushi Smt. Vasudha Ravi brings impeccable diction, flawless pronunciation, and remarkable tonal clarity to the stage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 text-left mt-8">
              <p className="font-body text-lg text-charcoal/80 leading-relaxed border-l-2 border-gold/20 pl-6">
                Her stage presence is warm and expressive. Rasikas frequently remark on the visible joy she finds in singing. Her style is chaste, unhurried, and deeply melodic, with raga alapanas that are admired for their purity and depth.
              </p>
              <p className="font-body text-lg text-charcoal/80 leading-relaxed border-l-2 border-gold/20 pl-6">
                A hallmark of her artistry is the capacity to modulate kalas (speed) flawlessly, ensuring every rendition carries maximum emotional impact. Every concert is an offering, reflecting years of rigorous discipline.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Early Life */}
      <section className="py-24 relative z-10 bg-parchment/30 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Right on Desktop, Left on Mobile: Image with Frame */}
            <div className="order-2 lg:order-2 relative">
              <div className="relative group max-w-[400px] mx-auto lg:mr-0 lg:ml-auto">
                <div className="absolute -top-6 -right-6 w-full h-full border border-gold/30 translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 pointer-events-none" />
                <div className="relative z-10 bg-cream p-4 shadow-2xl rotate-2 group-hover:rotate-0 transition-all duration-700">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src="/assets/Img/KAV04020.webp" 
                      alt="Vasudha Ravi Early Journey" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Left Column: Text */}
            <div className="order-1 lg:order-1">
              <div className="mb-6 flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-8 h-[1px] bg-gold" />
                <span className="font-body text-gold uppercase tracking-[0.25em] text-xs font-semibold">Origins</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-10 text-center lg:text-left leading-tight">Early Life & <br/><span className="italic text-burgundy">Musical Awakening</span></h2>
              
              <div className="space-y-8 max-w-xl mx-auto lg:mx-0">
                {[
                  { title: "Lineage", desc: "Musical interest inculcated by paternal grandfather Shri Nagasubramaniam, a disciple of Shri Tiger Varadachar." },
                  { title: "First Notes", desc: "Initial exposure through grandmother who taught Thiruppavai and bhajans from a very young age." },
                  { title: "Guidance", desc: "Father Sri. Ravi shaped her journey, instilling discipline, humility, and absolute commitment to the art." },
                  { title: "Education", desc: "Schooled at PSBB, followed by dual Masters in Music and Human Resources." },
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center font-display text-gold italic group-hover:bg-gold group-hover:text-charcoal transition-colors">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-display text-xl text-charcoal mb-1">{item.title}</h4>
                      <p className="font-body text-charcoal/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Family */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <span className="font-body text-gold uppercase tracking-widest text-sm mb-4 block">Family</span>
          <h2 className="font-display text-4xl text-charcoal mb-8">Personal Life</h2>
          <div className="bg-parchment/50 p-8 border border-gold/10 rounded-sm">
            <p className="font-body text-lg text-charcoal/80 leading-relaxed mb-4">
              Married to <strong>Sri. Vasanth Jayaraman</strong>, an accomplished tabla player who has accompanied many renowned Hindustani musicians.
            </p>
            <p className="font-body text-lg text-charcoal/80 leading-relaxed">
              Their son, <strong>Vaibhav Vasanth</strong>, is a popular young singer known from Super Singer Junior 8 (Vijay TV). He actively performs Namasankeerthanam and leads his school's music team, carrying the legacy forward.
            </p>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Guru Parampara */}
      <section className="py-16 relative z-10 bg-burgundy text-cream text-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <span className="font-body text-gold uppercase tracking-widest text-sm mb-4 block">Lineage</span>
          <h2 className="font-display text-4xl mb-10">Guru Parampara</h2>
          
          <div className="text-lg font-body font-light leading-relaxed space-y-6">
            <p className="text-2xl font-display text-gold italic mb-8">
              "First performance at the tender age of 10."
            </p>
            <p>
              Under the tutelage of <strong>Dr. Manjula Sriram</strong> (Doctorate in Music, retired lecturer from The Music Academy, Chennai) for over 25 years. They share a deep spiritual association that echoes in the music.
            </p>
            <p>
              Further refined her art with guidance from Sangeetha Vidwan Late Shri A. Sundaresan, Professor T.R. Subramaniam, and Shri Chingleput Ranganathan.
            </p>
            <div className="mt-12 py-6 border-y border-gold/30">
              <p className="text-gold font-medium uppercase tracking-widest">Asthana Gayika</p>
              <p className="text-xl mt-2">Tirupathi Tirumala Devasthanam Naadaneerajam since 2014</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative z-10 bg-cream">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <div className="text-center mb-16">
            <span className="font-body text-gold uppercase tracking-widest text-sm mb-4 block">Honours</span>
            <h2 className="font-display text-4xl text-charcoal">Awards & Recognitions</h2>
          </div>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gold/30 md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {awards.map((award, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={index} className="relative flex flex-col md:flex-row items-center justify-between group">
                    {/* Circle marker */}
                    <div className="absolute left-[16px] md:left-1/2 w-3 h-3 rounded-full bg-gold z-10 md:-translate-x-1/2 group-hover:scale-150 transition-transform duration-300" />
                    
                    {/* Content (Desktop Left/Right, Mobile Right) */}
                    <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:ml-auto md:pl-12'}`}>
                      <div className="bg-parchment/60 p-6 shadow-sm border border-transparent group-hover:border-gold/30 transition-colors">
                        <span className="font-display text-2xl text-gold mb-2 block">{award.year}</span>
                        <h4 className="font-body text-lg text-charcoal/90">{award.title}</h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
