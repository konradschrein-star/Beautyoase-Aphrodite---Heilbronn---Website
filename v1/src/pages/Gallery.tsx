import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Instagram, Facebook, Camera } from 'lucide-react';

export const Gallery = () => {
  const [filter, setFilter] = useState('Alle');

  const categories = ['Alle', 'Studio', 'Behandlungen', 'Ergebnisse'];

  const images = [
    { src: "/imgi_11_Kosmetikstudio-Heilbronn.jpg", label: "Unser Studio", category: "Studio" },
    { src: "/imgi_24_Wimpernverlaengerung-Heilbronn.jpg", label: "Wimpernverlängerung", category: "Behandlungen" },
    { src: "/imgi_25_Manikuere-Heilbronn.jpg", label: "Maniküre & Shellac", category: "Behandlungen" },
    { src: "/imgi_26_Pedikuere-Heilbronn.jpg", label: "Professionelle Pediküre", category: "Behandlungen" },
    { src: "/imgi_10_Hochzeits-Make-Up-Heilbronn.jpg", label: "Hochzeits-Make-Up", category: "Ergebnisse" },
    { src: "/imgi_173_SLIDE_04.jpg", label: "Wohlfühlatmosphäre", category: "Studio" },
    { src: "/imgi_174_wimpernverlaengerung-in-heilbronn.jpg", label: "Lash Lifting", category: "Behandlungen" },
    { src: "/imgi_175_teaser-massage-heilbronn.jpg", label: "Entspannung pur", category: "Behandlungen" },
    { src: "/imgi_31_Kristina-Eberwein-1.jpg", label: "Kristina Eberwein", category: "Studio" },
    { src: "/imgi_32_Kristina-Eberwein-2.jpg", label: "Inhaberin", category: "Studio" },
    { src: "/imgi_30_Kristina-Eberwein-6.jpg", label: "Expertise", category: "Behandlungen" },
    { src: "/imgi_29_Kristina-Eberwein-5.jpg", label: "Präzision", category: "Behandlungen" },
    { src: "/imgi_28_Kristina-Eberwein-4.jpg", label: "Individuelle Beratung", category: "Behandlungen" },
    { src: "/imgi_27_Kristina-Eberwein-3.jpg", label: "Hygiene", category: "Studio" },
    { src: "/imgi_4_gesichtsbehandlung.png", label: "Gesichtsbehandlung", category: "Behandlungen" },
    { src: "/imgi_2_manikuere.png", label: "Maniküre", category: "Behandlungen" },
    { src: "/imgi_3_teaser-wimpernverlaengerung.png", label: "Wimpern-Teaser", category: "Behandlungen" },
    { src: "/imgi_175_teaser-massage-heilbronn.jpg", label: "Waxing & Sugaring", category: "Behandlungen" }
  ];

  const filteredImages = filter === 'Alle' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <div className="pt-32 pb-24 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-rose-accent font-bold uppercase tracking-[0.3em] text-xs mb-6 block"
          >
            Impressionen
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-serif mb-10 tracking-tighter leading-none">Unsere <br /> <span className="text-rose-accent italic font-normal">Beautyoase</span></h1>
          <p className="text-2xl text-ink/50 max-w-3xl mx-auto font-light leading-relaxed mb-16">
            Einblicke in unser Studio, unsere Behandlungen und die Ergebnisse unserer Arbeit. Erlebe die Atmosphäre purer Entspannung.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-10 py-4 rounded-full text-sm font-black uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-rose-accent text-white shadow-xl scale-105' 
                    : 'bg-white text-ink/40 hover:bg-rose-soft hover:text-rose-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-square rounded-[60px] overflow-hidden shadow-2xl border-4 border-white"
              >
                <img 
                  src={img.src} 
                  alt={img.label} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                  <div className="flex flex-col">
                    <span className="text-rose-accent text-[10px] uppercase tracking-[0.4em] font-black mb-3">{img.category}</span>
                    <span className="text-white text-3xl font-serif italic leading-tight">{img.label}</span>
                  </div>
                </div>
                <div className="absolute top-8 right-8 w-16 h-16 glass rounded-[25px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 shadow-xl">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Social Media CTA */}
        <div className="mt-40 text-center glass p-24 rounded-[80px] border border-white/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <Sparkles className="w-[600px] h-[600px] absolute -top-40 -left-40 text-rose-accent" />
          </div>
          <h2 className="text-5xl md:text-7xl font-serif mb-12 tracking-tighter">Noch mehr Einblicke?</h2>
          <p className="text-2xl text-ink/60 max-w-2xl mx-auto mb-16 font-light">Folge uns auf Social Media für tägliche Updates, Vorher-Nachher Ergebnisse und exklusive Angebote.</p>
          <div className="flex justify-center space-x-12">
            <a href="#" className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-white rounded-[35px] flex items-center justify-center shadow-2xl mb-6 group-hover:bg-rose-accent group-hover:text-white transition-all group-hover:-translate-y-4">
                <Instagram className="w-10 h-10" />
              </div>
              <span className="text-sm uppercase tracking-widest font-black">Instagram</span>
            </a>
            <a href="#" className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-white rounded-[35px] flex items-center justify-center shadow-2xl mb-6 group-hover:bg-rose-accent group-hover:text-white transition-all group-hover:-translate-y-4">
                <Facebook className="w-10 h-10" />
              </div>
              <span className="text-sm uppercase tracking-widest font-black">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
