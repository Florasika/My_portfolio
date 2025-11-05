"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, MapPin, Phone, Clock, Send, MessageSquare, Calendar } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-pink-500/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-xl font-semibold tracking-tight text-white">Flora NOUDOUKOU</h1>
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/services" className="text-sm text-white hover:text-pink-400 transition-colors">Services</Link>
            <Link href="/portfolio" className="text-sm text-white hover:text-pink-400 transition-colors">Portfolio</Link>
            <Link href="/about" className="text-sm text-white hover:text-pink-400 transition-colors">À propos</Link>
            <Link href="/contact">
              <Button size="sm" className="rounded-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 glow-pink">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Badge variant="secondary" className="mb-6 rounded-full bg-pink-500/20 text-pink-300 border-pink-500/30">
            <MessageSquare className="w-3 h-3 mr-1" />
            Contactez-moi
          </Badge>
          <h1 className="text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
            Discutons de votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">projet</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Vous avez un projet en tête ? Une question ? Ou simplement envie de discuter ? 
            Je serais ravie d'échanger avec vous !
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-10 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30">
                <h2 className="text-3xl font-bold text-white mb-6">Envoyez-moi un message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Nom complet</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-pink-500/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-pink-500/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Téléphone (optionnel)</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-pink-500/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50"
                      placeholder="+228 XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Type de projet</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-black/50 border border-pink-500/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50">
                      <option value="">Sélectionnez un type</option>
                      <option value="uiux">Design UI/UX</option>
                      <option value="frontend">Développement Front-End</option>
                      <option value="wordpress">Développement WordPress</option>
                      <option value="full">Projet complet (Design + Développement)</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Budget estimé</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-black/50 border border-pink-500/30 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50">
                      <option value="">Sélectionnez une fourchette</option>
                      <option value="small">Moins de 500€</option>
                      <option value="medium">500€ - 2000€</option>
                      <option value="large">2000€ - 5000€</option>
                      <option value="xlarge">Plus de 5000€</option>
                      <option value="discuss">À discuter</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Parlez-moi de votre projet</label>
                    <textarea 
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-pink-500/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50"
                      placeholder="Décrivez votre projet, vos objectifs, vos délais..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full rounded-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 glow-pink text-lg">
                    Envoyer le message <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30 hover:border-pink-500/50 transition-all hover:glow-pink">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center glow-pink flex-shrink-0">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-400 mb-3">La meilleure façon de me contacter</p>
                    <a href="mailto:noudoukouflora24@gmail.com" className="text-pink-400 hover:text-pink-300 transition-colors">
                      noudoukouflora24@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30 hover:border-pink-500/50 transition-all hover:glow-pink">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center glow-pink flex-shrink-0">
                    <Linkedin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
                    <p className="text-gray-400 mb-3">Connectons-nous professionnellement</p>
                    <a href="https://tg.linkedin.com/in/flora-noudoukou-5a0063263" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
                      Voir mon profil LinkedIn
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30 hover:border-pink-500/50 transition-all hover:glow-pink">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center glow-pink flex-shrink-0">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Localisation</h3>
                    <p className="text-gray-400 mb-3">Basée à</p>
                    <p className="text-pink-400">Lomé, Togo</p>
                    <p className="text-gray-500 text-sm mt-2">Disponible pour des projets à distance</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30 hover:border-pink-500/50 transition-all hover:glow-pink">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center glow-pink flex-shrink-0">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Disponibilité</h3>
                    <p className="text-gray-400 mb-3">Horaires de réponse</p>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-300">Lundi - Vendredi: 9h - 18h</p>
                      <p className="text-gray-300">Samedi: 10h - 14h</p>
                      <p className="text-gray-500">Dimanche: Fermé</p>
                    </div>
                    <p className="text-pink-400 text-sm mt-3">⚡ Réponse sous 24h en moyenne</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-pink-500/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 rounded-full bg-pink-500/20 text-pink-300 border-pink-500/30">
              FAQ
            </Badge>
            <h2 className="text-5xl font-bold tracking-tight mb-4 text-white">Questions fréquentes</h2>
            <p className="text-xl text-gray-400">
              Vous avez des questions ? Voici quelques réponses
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30">
              <h3 className="text-xl font-semibold text-white mb-3">💰 Quels sont vos tarifs ?</h3>
              <p className="text-gray-400">
                Mes tarifs varient selon la complexité et l'envergure du projet. Je propose des devis personnalisés après avoir discuté de vos besoins spécifiques. N'hésitez pas à me contacter pour obtenir une estimation gratuite.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30">
              <h3 className="text-xl font-semibold text-white mb-3">⏱️ Quel est le délai de livraison ?</h3>
              <p className="text-gray-400">
                Le délai dépend de la nature du projet. Un site vitrine simple peut prendre 2-3 semaines, tandis qu'une application web complexe peut nécessiter 2-3 mois. Je fournis toujours un calendrier détaillé avant de commencer.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30">
              <h3 className="text-xl font-semibold text-white mb-3">🔄 Proposez-vous des révisions ?</h3>
              <p className="text-gray-400">
                Oui ! Je propose généralement 2-3 cycles de révisions inclus dans mes projets. Mon objectif est de m'assurer que vous êtes 100% satisfait du résultat final.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30">
              <h3 className="text-xl font-semibold text-white mb-3">🌍 Travaillez-vous à distance ?</h3>
              <p className="text-gray-400">
                Absolument ! Je travaille avec des clients du monde entier. Grâce aux outils de communication modernes, la distance n'est plus un obstacle. Je suis disponible pour des appels vidéo, des réunions en ligne et une communication régulière.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30">
              <h3 className="text-xl font-semibold text-white mb-3">🛠️ Offrez-vous un support après livraison ?</h3>
              <p className="text-gray-400">
                Oui ! Je propose un support post-livraison pour m'assurer que tout fonctionne parfaitement. Je peux également proposer des contrats de maintenance pour les mises à jour et le support continu.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30">
              <h3 className="text-xl font-semibold text-white mb-3">📱 Créez-vous des sites responsive ?</h3>
              <p className="text-gray-400">
                Tous mes projets sont conçus pour être parfaitement responsive et s'adapter à tous les appareils (mobile, tablette, desktop). C'est une priorité absolue dans mon processus de développement.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Card className="p-16 bg-gradient-to-br from-pink-500/20 to-pink-600/10 border-pink-500/40 glow-pink-strong text-center">
            <Calendar className="w-16 h-16 text-pink-400 mx-auto mb-6" />
            <h2 className="text-5xl font-bold tracking-tight mb-6 text-white">
              Prêt à commencer ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Remplissez le formulaire ci-dessus ou envoyez-moi directement un email. 
              Je vous répondrai dans les plus brefs délais !
            </p>
            <div className="flex gap-4 justify-center">
              <a href="mailto:noudoukouflora24@gmail.com">
                <Button size="lg" className="rounded-full bg-white text-pink-600 hover:bg-gray-100 text-lg px-8">
                  <Mail className="w-5 h-5 mr-2" />
                  M'envoyer un email
                </Button>
              </a>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="rounded-full border-pink-400 text-pink-400 hover:bg-pink-500/10 text-lg px-8">
                  Voir mon portfolio
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-pink-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-white">Flora NOUDOUKOU</h3>
              <p className="text-sm text-gray-400">Designer UI/UX & Développeuse Front-End</p>
            </div>
            <div className="flex gap-6">
              <Link href="/services" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">Services</Link>
              <Link href="/portfolio" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">Portfolio</Link>
              <Link href="/about" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">À propos</Link>
              <Link href="/contact" className="text-pink-400 transition-colors text-sm">Contact</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-pink-500/20 text-center text-sm text-gray-500">
            <p>© 2025 Flora NOUDOUKOU. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
