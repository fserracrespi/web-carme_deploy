import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { Header, Hero, CollectionCard, Footer, Lightbox } from './components/Layout';
import { cn } from './lib/utils';

const collections = [
  {
    id: "sensorial",
    title: "Sensorial Structures",
    year: "2025",
    images: [
      "/img1.jpg",
      "/img2.jpg",
      "/img3.jpg",
      "/img4.jpg",
      "/img5.jpg",
      "/img6.jpg",
      "/img7.jpg",
      "/img8.jpg",
      "/img9.jpg",
      "/img10.jpg"
    ]
  },
  {
    id: "ephemeral",
    title: "Ephemeral Skin",
    year: "2024",
    images: [
      "/img11.jpg",
      "/img12.jpg"
    ]
  },
  {
    id: "organic",
    title: "Organic Brutalism",
    year: "2024",
    images: [
      "/img13.jpg",
      "/img14.jpg"
    ]
  }
];

const processes = [
  {
    title: "Draping & Form",
    description: "Exploring the dialogue between fabric and gravity through manual manipulation.",
    image: "/proc1.jpg"
  },
  {
    title: "Textile Research",
    description: "Developing sustainable textures using natural fibers and artisanal dyeing techniques.",
    image: "/proc2.jpg"
  }
];

import { Language, translations } from './i18n';

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [lang, setLang] = React.useState<Language>('es');
  const [view, setView] = React.useState<'home' | 'philosophy' | 'collection'>('home');
  const [activeCollection, setActiveCollection] = React.useState<typeof collections[0] | null>(null);
  const t = translations[lang];

  const renderItalic = (text: string) => {
    return text.split('*').map((part, i) => (
      i % 2 === 1 ? <span key={i} className="font-serif italic">{part}</span> : part
    ));
  };

  const navigateToHome = () => {
    setView('home');
    window.scrollTo(0, 0);
  };

  const navigateToPhilosophy = () => {
    setView('philosophy');
    window.scrollTo(0, 0);
  };

  const navigateToCollection = (col: typeof collections[0]) => {
    setActiveCollection(col);
    setView('collection');
    window.scrollTo(0, 0);
  };

  if (view === 'philosophy') {
    return (
      <div className="min-h-screen bg-brand-beige">
        <Header lang={lang} setLang={setLang} setView={setView} isSubpage={true} />
        <main className="pt-32">
          <section className="py-20 px-6 md:px-12 bg-white text-brand-dark">
            <div className="max-w-3xl mx-auto text-center">
              <button 
                onClick={navigateToHome}
                className="mb-12 text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2 mx-auto"
              >
                <ChevronLeft size={14} /> {lang === 'es' ? 'Volver' : 'Back'}
              </button>
              <div className="space-y-24">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-2xl md:text-3xl mb-8 uppercase tracking-[0.2em] font-light">{(t as any).philosophy.manifesto.title}</h3>
                  <p className="text-brand-muted leading-relaxed font-light text-lg">
                    {(t as any).philosophy.manifesto.content}
                  </p>
                </motion.div>

                <div className="w-full h-[1px] bg-brand-dark/10" />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl md:text-3xl mb-8 uppercase tracking-[0.2em] font-light">{(t as any).philosophy.mission.title}</h3>
                  <p className="text-brand-muted leading-relaxed font-light text-lg">
                    {(t as any).philosophy.mission.content}
                  </p>
                </motion.div>

                <div className="w-full h-[1px] bg-brand-dark/10" />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-2xl md:text-3xl mb-8 uppercase tracking-[0.2em] font-light">{(t as any).philosophy.vision.title}</h3>
                  <p className="text-brand-muted leading-relaxed font-light text-lg">
                    {(t as any).philosophy.vision.content}
                  </p>
                </motion.div>
              </div>

              <div className="mt-32">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src="/editorial1.jpg" 
                    alt="Philosophy Footer" 
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer lang={lang} />
      </div>
    );
  }

  if (view === 'collection' && activeCollection) {
    return (
      <div className="min-h-screen bg-brand-beige">
        <Header lang={lang} setLang={setLang} setView={setView} isSubpage={true} />
        <main className="pt-32">
          <section className="py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              <button 
                onClick={navigateToHome}
                className="mb-12 text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2"
              >
                <ChevronLeft size={14} /> {lang === 'es' ? 'Volver' : 'Back'}
              </button>
              
              <div className="mb-20">
                <span className="text-[10px] uppercase tracking-[0.4em] text-brand-muted mb-4 block">{activeCollection.year}</span>
                <h2 className="text-5xl md:text-8xl font-serif italic mb-8">{activeCollection.title}</h2>
                <p className="text-brand-muted leading-relaxed font-light text-lg max-w-2xl">
                  {(t.collections as any).items[activeCollection.id as any]}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {activeCollection.images.map((img, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={cn(
                      "overflow-hidden cursor-zoom-in",
                      i % 3 === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/5]"
                    )}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${activeCollection.title} ${i}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer lang={lang} />
        <Lightbox 
          isOpen={!!selectedImage} 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-beige">
      <Header lang={lang} setLang={setLang} setView={setView} />
      
      <main id="home">
        <Hero lang={lang} />

        {/* Manifesto Section */}
        <section id="lookboard" className="py-32 px-6 md:px-12 bg-white text-brand-dark">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <div 
                className="lg:col-span-7 aspect-[4/3] relative overflow-hidden group cursor-zoom-in"
                onClick={() => setSelectedImage("/lookboard.jpg")}
              >
                <motion.img
                  initial={{ opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5 }}
                  src="/lookboard.jpg"
                  alt={t.lookboard.tag}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:col-span-5">
                <span className="text-[10px] uppercase tracking-[0.4em] text-brand-muted mb-6 block">{t.lookboard.tag}</span>
                <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
                  {renderItalic(t.lookboard.title)}
                </h2>
                <p className="text-brand-muted leading-relaxed font-light max-w-lg mb-12">
                  {t.lookboard.description}
                </p>
                <button 
                  onClick={navigateToPhilosophy}
                  className="inline-block px-10 py-4 border border-brand-dark/20 text-[10px] uppercase tracking-[0.3em] hover:bg-brand-dark hover:text-brand-beige transition-all duration-500"
                >
                  {t.lookboard.philosophy}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Collections Section */}
        <section id="collections" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-muted mb-4 block">{t.collections.tag}</span>
              <h2 className="text-4xl md:text-6xl leading-tight">
                {renderItalic(t.collections.materiality)}
              </h2>
            </div>
            <div className="hidden md:block">
              <p className="text-brand-muted text-sm uppercase tracking-widest">{t.collections.scroll}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 md:gap-24 lg:gap-40">
            {collections.map((col, i) => (
              <div key={col.title} onClick={() => navigateToCollection(col)} className="px-4 md:px-8">
                <CollectionCard 
                  title={col.title}
                  year={col.year}
                  images={col.images}
                  index={i} 
                />
              </div>
            ))}
          </div>
        </section>

        {/* Macro Details Section - Parallax Effect */}
        <section id="texture" className="relative h-[80vh] overflow-hidden bg-brand-dark">
          <motion.div 
            initial={{ y: "10%" }}
            whileInView={{ y: "-10%" }}
            transition={{ duration: 2, ease: "linear" }}
            className="absolute inset-0 opacity-40"
          >
            <img 
              src="/detail1.jpg" 
              alt={t.macro.tag} 
              className="w-full h-[120%] object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="relative h-full flex items-center justify-center text-center px-6">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[10px] uppercase tracking-[0.6em] text-brand-beige mb-8 block"
              >
                {t.macro.tag}
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-7xl text-brand-beige font-serif italic"
              >
                {t.macro.quote}
              </motion.h2>
            </div>
          </div>
        </section>

        {/* Editorial Grid Section */}
        <section className="py-32 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-4 md:gap-8">
              <div className="col-span-12 md:col-span-7 aspect-[4/5] overflow-hidden">
                <motion.img 
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                  src="/editorial1.jpg" 
                  alt="Editorial 1" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="col-span-12 md:col-span-5 flex flex-col gap-8">
                <div className="aspect-square overflow-hidden">
                  <motion.img 
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    src="/editorial2.jpg" 
                    alt="Editorial 2" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden">
                  <motion.img 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    src="/editorial3.jpg" 
                    alt="Editorial 3" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-muted mb-6 block">{t.about.tag}</span>
              <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
                {renderItalic(t.about.narratives)}
              </h2>
              <div className="space-y-6 text-brand-muted leading-relaxed font-light max-w-lg">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>
              
              <div className="mt-12 flex gap-12">
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-brand-dark font-semibold mb-2">{t.about.education}</span>
                  <span className="text-sm text-brand-muted">{t.about.eduDetail}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-brand-dark font-semibold mb-2">{t.about.focus}</span>
                  <span className="text-sm text-brand-muted">{t.about.focusDetail}</span>
                </div>
              </div>

              <div className="flex justify-center max-w-[280px] md:max-w-[320px]">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="-mt-8 md:-mt-12"
                >
                  <img 
                    src="/firma_negra.png" 
                    alt="Carme Serra Signature" 
                    className="h-48 md:h-64 object-contain -rotate-90 opacity-90" 
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/5] overflow-hidden">
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                src="/about.jpg"
                alt={t.about.tag}
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
      
      <Lightbox 
        isOpen={!!selectedImage} 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </div>
  );
}
