import { motion } from 'motion/react';
import { CheckCircle2, Instagram, Facebook, Phone, Calendar, Sparkles, Star } from 'lucide-react';

export const About = () => {
  const images = [
    "/imgi_31_Kristina-Eberwein-1.jpg",
    "/imgi_32_Kristina-Eberwein-2.jpg",
    "/imgi_30_Kristina-Eberwein-6.jpg",
    "/imgi_29_Kristina-Eberwein-5.jpg",
    "/imgi_28_Kristina-Eberwein-4.jpg",
    "/imgi_27_Kristina-Eberwein-3.jpg"
  ];

  const usps = [
    { label: "Präzise Arbeit", desc: "Jeder Handgriff sitzt – für Ergebnisse, die begeistern." },
    { label: "Höchste Hygiene", desc: "Sicherheit und Sauberkeit haben bei uns oberste Priorität." },
    { label: "Individuelle Beratung", desc: "Wir nehmen uns Zeit für dich und deine Wünsche." },
    { label: "Entspannte Atmosphäre", desc: "Genieße deine Auszeit in unserer Wohlfühloase." }
  ];

  const philosophy = [
    { title: "Qualität", desc: "Wir verwenden nur erstklassige Produkte und modernste Techniken." },
    { title: "Leidenschaft", desc: "Schönheit ist unsere Passion – das spürst du in jeder Behandlung." },
    { title: "Vertrauen", desc: "Ehrlichkeit und Transparenz sind die Basis unserer Kundenbeziehung." }
  ];

  return (
    <div className="pt-32 pb-24 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10 rounded-[80px] overflow-hidden shadow-2xl border-8 border-white"
            >
              <img 
                src="/imgi_31_Kristina-Eberwein-1.jpg" 
                alt="Kristina Eberwein" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-rose-soft/50 rounded-full blur-[120px] -z-10" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-sage-soft/50 rounded-full blur-[120px] -z-10" />
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -right-10 glass p-10 rounded-[50px] shadow-2xl border border-white/40 z-20 max-w-[280px]"
            >
              <div className="flex items-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-sm font-black uppercase tracking-widest leading-tight">Über 1.200 glückliche Kunden in Heilbronn</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-rose-accent font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Die Inhaberin</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-10 tracking-tighter leading-none">Kristina <br /> <span className="text-rose-accent italic font-normal">Eberwein</span></h1>
            <div className="space-y-8 text-2xl text-ink/60 leading-relaxed font-light">
              <p>
                Willkommen in der <span className="text-ink font-bold">Beautyoase Aphrodite</span>. Mein Name ist Kristina Eberwein und ich habe es mir zur Aufgabe gemacht, deine natürliche Schönheit zu unterstreichen.
              </p>
              <p>
                Seit über 10 Jahren schlägt mein Herz für die Kosmetik. In meinem Studio in Heilbronn biete ich dir exklusive Behandlungen in einer Atmosphäre purer Entspannung. Ob Gesichtsbehandlungen, Wimpernverlängerung oder professionelle Maniküre – bei mir stehst du im Mittelpunkt.
              </p>
              <div className="p-10 glass rounded-[50px] border-l-8 border-rose-accent shadow-xl">
                <p className="italic font-serif text-3xl text-ink leading-relaxed">
                  „Genau wie ich es mir wünsche“ – das ist mein Versprechen an Sie.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <section className="py-32 mb-40 bg-ink text-white rounded-[80px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
            <img src="/imgi_173_SLIDE_04.jpg" alt="" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
          </div>
          <div className="container mx-auto px-12 relative z-10">
            <div className="text-center mb-24">
              <span className="text-rose-accent font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Werte & Vision</span>
              <h2 className="text-5xl md:text-7xl font-serif mb-8 tracking-tighter">Unsere Philosophie</h2>
              <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
                Wir glauben daran, dass wahre Schönheit von innen kommt und durch die richtige Pflege zum Strahlen gebracht wird.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {philosophy.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-12 glass border border-white/10 rounded-[60px] text-center"
                >
                  <h3 className="text-3xl font-serif mb-6 text-rose-accent">{item.title}</h3>
                  <p className="text-white/40 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Grid */}
        <div className="text-center mb-20">
          <span className="text-rose-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Einblicke</span>
          <h2 className="text-5xl md:text-7xl font-serif mb-8 tracking-tighter">Das Studio</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-40">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="aspect-square rounded-[60px] overflow-hidden shadow-2xl group"
            >
              <img src={img} alt={`Studio Einblick ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>

        {/* USPs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
          {usps.map((usp, index) => (
            <motion.div
              key={usp.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass p-12 rounded-[60px] border border-white/40 shadow-xl hover:shadow-rose-accent/10 transition-all duration-500"
            >
              <div className="w-20 h-20 bg-rose-soft rounded-3xl flex items-center justify-center text-rose-accent mb-10 shadow-xl">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-serif mb-6">{usp.label}</h3>
              <p className="text-xl text-ink/60 font-light leading-relaxed">{usp.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="glass p-24 rounded-[80px] text-center relative overflow-hidden border border-white/40 shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <Sparkles className="w-[600px] h-[600px] absolute -top-40 -left-40 text-rose-accent" />
            <Sparkles className="w-[600px] h-[600px] absolute -bottom-40 -right-40 text-sage-accent" />
          </div>
          <h2 className="text-6xl md:text-8xl font-serif mb-12 tracking-tighter leading-none">Bereit für deine <br /> <span className="text-rose-accent italic font-normal">Auszeit?</span></h2>
          <p className="text-2xl text-ink/60 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
            Buche jetzt deinen exklusiven Termin online oder ruf uns direkt an. Wir freuen uns darauf, dich in unserer Wohlfühloase begrüßen zu dürfen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <a href="https://termin.beautyoase-aphrodite.coprog.org/" target="_blank" rel="noopener noreferrer" className="btn-primary py-8 px-16 text-2xl flex items-center justify-center space-x-4">
              <Calendar className="w-8 h-8" />
              <span>Termin buchen</span>
            </a>
            <a href="tel:017647744444" className="btn-outline py-8 px-16 text-2xl flex items-center justify-center space-x-4">
              <Phone className="w-8 h-8" />
              <span>Jetzt anrufen</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
