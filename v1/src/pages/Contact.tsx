import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Calendar, CheckCircle2, Car, Train, Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-32 pb-24 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-rose-accent font-bold uppercase tracking-[0.3em] text-xs mb-6 block"
          >
            Kontakt & Anfahrt
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-serif mb-10 tracking-tighter leading-none">Buche deinen <br /> <span className="text-rose-accent italic font-normal">Moment</span></h1>
          <p className="text-2xl text-ink/50 max-w-3xl mx-auto font-light leading-relaxed">
            Wir freuen uns darauf, dich in unserer Beautyoase in Heilbronn begrüßen zu dürfen. Dein Weg zu vollkommener Entspannung beginnt hier.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-start mb-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            <div className="grid sm:grid-cols-2 gap-16">
              <div className="space-y-12">
                <div className="flex items-start space-x-8 group">
                  <div className="w-20 h-20 glass rounded-[30px] flex items-center justify-center text-rose-accent shrink-0 group-hover:scale-110 transition-transform shadow-xl">
                    <MapPin className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-[10px] mb-4 text-ink/40">Adresse</h4>
                    <p className="text-2xl font-serif leading-tight">Pfühlstraße 54, <br /> 74076 Heilbronn</p>
                  </div>
                </div>

                <div className="flex items-start space-x-8 group">
                  <div className="w-20 h-20 glass rounded-[30px] flex items-center justify-center text-rose-accent shrink-0 group-hover:scale-110 transition-transform shadow-xl">
                    <Phone className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-[10px] mb-4 text-ink/40">Telefon</h4>
                    <a href="tel:017647744444" className="text-3xl font-serif hover:text-rose-accent transition-colors">0176 47744444</a>
                  </div>
                </div>

                <div className="flex items-start space-x-8 group">
                  <div className="w-20 h-20 glass rounded-[30px] flex items-center justify-center text-rose-accent shrink-0 group-hover:scale-110 transition-transform shadow-xl">
                    <Mail className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-[10px] mb-4 text-ink/40">E-Mail</h4>
                    <a href="mailto:info@beautyoase-aphrodite.de" className="text-2xl font-serif hover:text-rose-accent transition-colors">info@beautyoase-aphrodite.de</a>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <div className="flex items-start space-x-8 group">
                  <div className="w-20 h-20 glass rounded-[30px] flex items-center justify-center text-rose-accent shrink-0 group-hover:scale-110 transition-transform shadow-xl">
                    <Clock className="w-10 h-10" />
                  </div>
                  <div className="w-full">
                    <h4 className="font-black uppercase tracking-widest text-[10px] mb-4 text-ink/40">Öffnungszeiten</h4>
                    <div className="space-y-3 text-xl font-light">
                      <div className="flex justify-between">
                        <span>Mo – Fr:</span>
                        <span className="font-bold">09:00 – 17:00</span>
                      </div>
                      <div className="flex justify-between text-rose-accent italic">
                        <span>Sa & So:</span>
                        <span className="font-black uppercase tracking-widest text-[10px]">Geschlossen</span>
                      </div>
                      <p className="text-xs text-ink/40 mt-4 italic">* Termine nach Vereinbarung</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-16 glass rounded-[80px] border border-white/40 shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-4xl font-serif mb-8">Online Terminbuchung</h3>
                <p className="text-xl text-ink/60 mb-12 font-light leading-relaxed">
                  Wähle deine Wunschbehandlung und deinen Wunschtermin ganz einfach online aus. Wir bestätigen deinen Termin umgehend.
                </p>
                <a 
                  href="https://termin.beautyoase-aphrodite.coprog.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary py-8 px-16 text-2xl flex items-center justify-center space-x-6 group w-full sm:w-auto"
                >
                  <Calendar className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                  <span>Jetzt Termin buchen</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[700px] lg:h-full"
          >
            <div className="absolute inset-0 glass rounded-[80px] overflow-hidden shadow-2xl border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.623456789!2d9.232!3d49.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDA4JzQyLjAiTiA5wrAxMyc1NS4yIkU!5e0!3m2!1sde!2sde!4v1234567890" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Beautyoase Aphrodite Standort"
                className="grayscale hover:grayscale-0 transition-all duration-1000"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Anfahrt Details */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[60px] border border-white/40"
          >
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-16 h-16 bg-rose-soft rounded-2xl flex items-center justify-center text-rose-accent">
                <Car className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif">Anfahrt mit dem Auto</h3>
            </div>
            <p className="text-lg text-ink/60 font-light leading-relaxed mb-6">
              Unser Studio liegt verkehrsgünstig in Heilbronn. Du findest uns in der Pfühlstraße 54.
            </p>
            <div className="flex items-center space-x-3 text-rose-accent">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm font-black uppercase tracking-widest">Kostenlose Parkplätze direkt vor der Tür</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-12 rounded-[60px] border border-white/40"
          >
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-16 h-16 bg-rose-soft rounded-2xl flex items-center justify-center text-rose-accent">
                <Train className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif">Öffentliche Verkehrsmittel</h3>
            </div>
            <p className="text-lg text-ink/60 font-light leading-relaxed mb-6">
              Auch mit den öffentlichen Verkehrsmitteln sind wir bestens erreichbar. Die Haltestelle "Pfühlpark" ist nur wenige Gehminuten entfernt.
            </p>
            <div className="flex items-center space-x-3 text-rose-accent">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm font-black uppercase tracking-widest">S-Bahn Linien S4 & S42</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
