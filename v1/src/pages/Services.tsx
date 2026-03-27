import { motion } from 'motion/react';
import { Sparkles, Heart, Star, CheckCircle2, Calendar } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: "Gesichtsbehandlungen",
      desc: "Tauche ein in eine Welt der Regeneration. Unsere Facials sind mehr als nur Pflege – sie sind ein Ritual für deine Hautgesundheit. Wir analysieren deine Hautbedürfnisse präzise und wählen aus exklusiven Wirkstoffen die perfekte Kombination für dein Strahlen.",
      icon: <Sparkles className="w-8 h-8" />,
      tag: "Facial Spa",
      color: "bg-rose-soft/30",
      img: "/imgi_4_gesichtsbehandlung.png",
      price: "ab 79€",
      duration: "60-90 Min"
    },
    {
      title: "Wimpernverlängerung",
      desc: "Ein Augenaufschlag, der Bände spricht. Ob natürlicher Mascara-Look oder dramatisches Volumen – wir applizieren jede Wimper mit höchster Präzision und Sorgfalt, um deine natürliche Augenform perfekt zu betonen.",
      icon: <Heart className="w-8 h-8" />,
      tag: "Lashes",
      color: "bg-sage-soft/30",
      img: "/imgi_24_Wimpernverlaengerung-Heilbronn.jpg",
      price: "ab 99€",
      duration: "90-120 Min"
    },
    {
      title: "Brauentönung & Lifting",
      desc: "Deine Brauen sind der Rahmen deines Gesichts. Mit modernsten Techniken wie dem Brow Lifting verleihen wir deinen Brauen Fülle, Form und Ausdruckskraft, die wochenlang anhält.",
      icon: <Star className="w-8 h-8" />,
      tag: "Brows",
      color: "bg-rose-soft/30",
      img: "/imgi_174_wimpernverlaengerung-in-heilbronn.jpg",
      price: "ab 45€",
      duration: "45 Min"
    },
    {
      title: "Maniküre & Shellac",
      desc: "Hände sind deine Visitenkarte. Wir verwöhnen deine Nägel mit präziser Formgebung, sanfter Nagelhautpflege und langanhaltendem Shellac-Glanz, der bis zu drei Wochen perfekt bleibt.",
      icon: <CheckCircle2 className="w-8 h-8" />,
      tag: "Nails",
      color: "bg-sage-soft/30",
      img: "/imgi_25_Manikuere-Heilbronn.jpg",
      price: "ab 35€",
      duration: "45-60 Min"
    },
    {
      title: "Pediküre",
      desc: "Gönne deinen Füßen die Aufmerksamkeit, die sie verdienen. Unsere professionelle Pediküre sorgt für seidig glatte Haut und perfekt gepflegte Nägel – ein Gefühl wie auf Wolken.",
      icon: <CheckCircle2 className="w-8 h-8" />,
      tag: "Feet",
      color: "bg-rose-soft/30",
      img: "/imgi_26_Pedikuere-Heilbronn.jpg",
      price: "ab 45€",
      duration: "60 Min"
    },
    {
      title: "Waxing & Sugaring",
      desc: "Erlebe das Gefühl von vollkommener Glätte. Wir entfernen störende Härchen sanft und effektiv, damit du dich in deiner Haut rundum wohl und frei fühlen kannst.",
      icon: <Sparkles className="w-8 h-8" />,
      tag: "Smooth",
      color: "bg-sage-soft/30",
      img: "/imgi_175_teaser-massage-heilbronn.jpg",
      price: "ab 15€",
      duration: "15-45 Min"
    }
  ];

  const journey = [
    { step: "01", title: "Ankunft", desc: "Komm an und lass den Alltag vor der Tür. Wir empfangen dich in entspannter Atmosphäre." },
    { step: "02", title: "Beratung", desc: "Wir besprechen deine Wünsche und analysieren deine individuellen Bedürfnisse." },
    { step: "03", title: "Behandlung", desc: "Genieße deine Auszeit, während wir mit höchster Präzision an deinem Ergebnis arbeiten." },
    { step: "04", title: "Nachsorge", desc: "Wir geben dir Tipps für die Pflege zu Hause, damit dein Strahlen lange anhält." }
  ];

  return (
    <div className="pt-32 pb-24 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-rose-accent font-bold uppercase tracking-[0.3em] text-xs mb-6 block"
          >
            Exklusive Behandlungen
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-serif mb-10 tracking-tighter leading-none">Deine Auszeit <br /> <span className="text-rose-accent italic font-normal">erwartet dich</span></h1>
          <p className="text-2xl text-ink/50 max-w-3xl mx-auto font-light leading-relaxed">
            In der Beautyoase Aphrodite verbinden wir modernste Kosmetik mit dem Luxus vollkommener Entspannung. Jede Behandlung ist ein Unikat, genau wie du.
          </p>
        </div>

        <div className="grid gap-32 mb-40">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row items-center gap-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2 relative group">
                <div className={`absolute inset-0 ${service.color} rounded-[80px] translate-x-10 translate-y-10 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000`} />
                <div className="overflow-hidden rounded-[80px] shadow-2xl">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute top-10 left-10 glass py-3 px-6 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                  {service.tag}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center text-rose-accent mb-10 shadow-xl">
                  {service.icon}
                </div>
                <h2 className="text-6xl font-serif mb-8 tracking-tight">{service.title}</h2>
                <p className="text-2xl text-ink/60 mb-12 leading-relaxed font-light">{service.desc}</p>
                
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div className="p-8 glass rounded-[40px] border border-white/40">
                    <span className="text-[10px] uppercase tracking-widest font-black text-ink/40 mb-2 block">Investition</span>
                    <span className="text-3xl font-serif">{service.price}</span>
                  </div>
                  <div className="p-8 glass rounded-[40px] border border-white/40">
                    <span className="text-[10px] uppercase tracking-widest font-black text-ink/40 mb-2 block">Dauer</span>
                    <span className="text-3xl font-serif">{service.duration}</span>
                  </div>
                </div>

                <a 
                  href="https://termin.beautyoase-aphrodite.coprog.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-8 text-2xl flex items-center justify-center space-x-4 group"
                >
                  <Calendar className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                  <span>Termin online buchen</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Journey Section */}
        <section className="py-32 bg-ink text-white rounded-[80px] overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <img src="/imgi_173_SLIDE_04.jpg" alt="" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
          </div>
          <div className="container mx-auto px-12 relative z-10">
            <div className="text-center mb-24">
              <span className="text-rose-accent font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Dein Erlebnis</span>
              <h2 className="text-5xl md:text-7xl font-serif mb-8 tracking-tighter">Deine Reise bei uns</h2>
              <p className="text-xl text-white/40 max-w-2xl mx-auto font-light">Vom ersten Moment an begleiten wir dich auf dem Weg zu deinem perfekten Strahlen.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-12">
              {journey.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-8xl font-serif text-rose-accent/10 absolute -top-10 -left-6 select-none">{item.step}</div>
                  <h3 className="text-3xl font-serif mb-6 relative z-10">{item.title}</h3>
                  <p className="text-white/40 font-light leading-relaxed relative z-10">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
