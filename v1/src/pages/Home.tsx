import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Phone, 
  Star, 
  MousePointer2, 
  Sparkles, 
  Heart, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { BeautyScene } from '../components/BeautyScene';

export const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 200]);

  const servicesTeaser = [
    {
      title: "Gesichtsbehandlungen",
      desc: "Individuelle Pflege für strahlende Haut und pure Entspannung.",
      icon: <Sparkles className="w-8 h-8" />,
      tag: "Facial Spa",
      color: "bg-rose-soft/30",
      img: "/imgi_4_gesichtsbehandlung.png"
    },
    {
      title: "Wimpernverlängerung",
      desc: "Perfekte Wimpern für einen natürlichen Look und intensiven Blick.",
      icon: <Heart className="w-8 h-8" />,
      tag: "Lashes",
      color: "bg-sage-soft/30",
      img: "/imgi_24_Wimpernverlaengerung-Heilbronn.jpg"
    },
    {
      title: "Maniküre & Shellac",
      desc: "Langlebige Nägel, hygienisch und präzise gearbeitet.",
      icon: <CheckCircle2 className="w-8 h-8" />,
      tag: "Nails",
      color: "bg-rose-soft/30",
      img: "/imgi_25_Manikuere-Heilbronn.jpg"
    }
  ];

  const stats = [
    { label: "Zufriedene Kunden", value: "1.200+" },
    { label: "Jahre Erfahrung", value: "10+" },
    { label: "Sterne Bewertung", value: "5.0" },
    { label: "Behandlungen", value: "25+" }
  ];

  const whyUs = [
    {
      title: "Höchste Hygiene",
      desc: "In unserem Studio setzen wir auf medizinische Standards für deine Sicherheit.",
      icon: <CheckCircle2 className="w-6 h-6" />,
      className: "md:col-span-2 lg:col-span-2"
    },
    {
      title: "Präzision",
      desc: "Jeder Handgriff sitzt perfekt für ein Ergebnis, das begeistert.",
      icon: <MousePointer2 className="w-6 h-6" />,
      className: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "Wohlfühloase",
      desc: "Entspanne in einem Ambiente, das zum Träumen einlädt.",
      icon: <Sparkles className="w-6 h-6" />,
      className: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "Individuelle Beratung",
      desc: "Wir nehmen uns Zeit für dich und deine persönlichen Wünsche.",
      icon: <Heart className="w-6 h-6" />,
      className: "md:col-span-2 lg:col-span-2"
    }
  ];

  const testimonials = [
    {
      name: "Sabine M.",
      text: "Das beste Studio in Heilbronn! Kristina arbeitet so präzise und die Atmosphäre ist einfach traumhaft.",
      rating: 5
    },
    {
      name: "Julia K.",
      text: "Meine Wimpern sehen nach jeder Behandlung perfekt aus. Ich kann die Beautyoase Aphrodite nur jedem empfehlen.",
      rating: 5
    },
    {
      name: "Melanie S.",
      text: "Hygienisch, professionell und super freundlich. Man fühlt sich sofort gut aufgehoben.",
      rating: 5
    }
  ];

  const faqs = [
    {
      q: "Wie kann ich einen Termin buchen?",
      a: "Du kannst deinen Termin ganz bequem über unser Online-Buchungssystem oder telefonisch vereinbaren."
    },
    {
      q: "Welche Produkte werden verwendet?",
      a: "Wir nutzen ausschließlich hochwertige, professionelle Produkte, die auf deinen Hauttyp abgestimmt sind."
    },
    {
      q: "Gibt es Parkmöglichkeiten?",
      a: "Ja, direkt vor dem Studio in der Pfühlstraße stehen kostenfreie Parkplätze für unsere Kunden zur Verfügung."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-off-white">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-rose-soft/20 via-transparent to-sage-soft/20 z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-20 text-center lg:text-left"
            >
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-rose-accent/30 mb-8 shadow-sm"
              >
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">5,0 Sterne Bewertungen</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.95] mb-8 tracking-tighter">
                Beautyoase <br />
                <span className="text-rose-accent italic font-normal">Aphrodite</span>
              </h1>
              
              <p className="text-lg md:text-xl text-ink/60 max-w-xl mb-12 leading-relaxed font-light mx-auto lg:mx-0">
                Dein Facial Spa & Kosmetikstudio in Heilbronn. 
                Erlebe <span className="text-ink font-medium">höchste Hygiene</span> und <span className="text-ink font-medium">perfekte Präzision</span> in einer Atmosphäre purer Entspannung.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="https://termin.beautyoase-aphrodite.coprog.org/" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center space-x-3 group">
                  <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Termin buchen</span>
                </a>
                <a href="tel:017647744444" className="btn-outline flex items-center justify-center space-x-3 group">
                  <Phone className="w-5 h-5 group-hover:shake transition-transform" />
                  <span>Jetzt anrufen</span>
                </a>
              </div>
            </motion.div>

            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[70vh] z-10">
              <BeautyScene />
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-4 right-4 hidden lg:flex items-center space-x-3 text-rose-accent/40"
              >
                <MousePointer2 className="w-4 h-4 animate-bounce" />
                <span className="text-[10px] uppercase font-bold tracking-widest">Interagiere mit der Szene</span>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-30"
        >
          <div className="w-px h-12 bg-ink" />
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-ink text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-7xl font-serif mb-2 text-rose-accent">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-rose-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Unsere Expertise</span>
              <h2 className="text-5xl md:text-7xl mb-4 leading-tight">Premium-Behandlungen</h2>
            </div>
            <Link to="/leistungen" className="btn-outline group">
              <span>Alle Leistungen</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicesTeaser.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="glass p-8 rounded-[40px] h-full flex flex-col border border-white/40 shadow-2xl hover:shadow-rose-accent/10 transition-all duration-500">
                  <div className="aspect-square rounded-3xl overflow-hidden mb-8">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-black text-rose-accent mb-4 block">{service.tag}</span>
                  <h3 className="text-3xl mb-4 font-serif">{service.title}</h3>
                  <p className="text-ink/60 mb-10 leading-relaxed font-light">{service.desc}</p>
                  <Link to="/leistungen" className="mt-auto inline-flex items-center space-x-3 text-sm font-black text-ink group/link">
                    <span>Mehr erfahren</span>
                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Bento Grid */}
      <section className="py-32 bg-off-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-rose-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Warum wir?</span>
            <h2 className="text-5xl md:text-7xl mb-4 leading-tight">Exzellenz in jedem Detail</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass p-12 rounded-[50px] border border-white/40 shadow-xl flex flex-col justify-center ${item.className}`}
              >
                <div className="w-14 h-14 bg-rose-soft rounded-2xl flex items-center justify-center text-rose-accent mb-8">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-serif mb-4">{item.title}</h3>
                <p className="text-xl text-ink/50 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img src="/imgi_31_Kristina-Eberwein-1.jpg" alt="Kristina Eberwein" className="rounded-[60px] shadow-2xl" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-10 -right-10 w-56 h-56 glass rounded-full flex items-center justify-center text-center p-8 shadow-2xl border-4 border-white">
                <div className="flex flex-col items-center">
                  <Star className="w-8 h-8 text-yellow-500 fill-yellow-500 mb-2" />
                  <span className="text-xs font-black uppercase tracking-widest leading-tight">5,0 Sterne <br /> Expertise</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-rose-accent font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Die Inhaberin</span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl mb-10 leading-tight tracking-tighter">Kristina Eberwein</h2>
              <p className="text-2xl text-ink/60 leading-relaxed font-light mb-12">
                „Genau wie ich es mir wünsche“ – das ist mein Versprechen an Sie. Als Inhaberin von Beautyoase Aphrodite lege ich höchsten Wert auf individuelle Beratung und maximale Hygiene.
              </p>
              <Link to="/ueber-mich" className="btn-primary inline-flex items-center space-x-6 py-6 px-10 text-xl">
                <span>Mehr über mich</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <span className="text-rose-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Kundenstimmen</span>
            <h2 className="text-5xl md:text-7xl mb-4 leading-tight">Was unsere Kunden sagen</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-12 rounded-[60px] border border-white/40 shadow-xl relative"
              >
                <div className="flex space-x-1 mb-8">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-2xl font-serif italic mb-10 text-ink/80 leading-relaxed">„{t.text}“</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-rose-soft rounded-full flex items-center justify-center font-bold text-rose-accent">
                    {t.name[0]}
                  </div>
                  <span className="font-black uppercase tracking-widest text-xs">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-rose-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Fragen?</span>
              <h2 className="text-5xl md:text-7xl mb-4 leading-tight">Häufig gestellte Fragen</h2>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-10 rounded-[40px] border border-white/40 shadow-lg"
                >
                  <h3 className="text-2xl font-serif mb-4">{faq.q}</h3>
                  <p className="text-xl text-ink/50 font-light leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-ink text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <img src="/imgi_11_Kosmetikstudio-Heilbronn.jpg" alt="" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-6xl md:text-8xl font-serif mb-12 tracking-tighter leading-none">
            Bereit für dein <br />
            <span className="text-rose-accent italic font-normal">Strahlen?</span>
          </h2>
          <p className="text-2xl text-white/40 max-w-2xl mx-auto mb-16 font-light">
            Buche jetzt deinen exklusiven Termin in der Beautyoase Aphrodite und erlebe Schönheit auf einem neuen Level.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <a href="https://termin.beautyoase-aphrodite.coprog.org/" target="_blank" rel="noopener noreferrer" className="btn-primary py-8 px-16 text-2xl flex items-center justify-center space-x-4">
              <Calendar className="w-8 h-8" />
              <span>Termin buchen</span>
            </a>
            <a href="tel:017647744444" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 py-8 px-16 rounded-full text-2xl transition-all flex items-center justify-center space-x-4">
              <Phone className="w-8 h-8" />
              <span>Jetzt anrufen</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
