"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, ExternalLink, Code, Palette, Layers, TrendingUp, Users, Award } from "lucide-react";
import Link from "next/link";

export default function PortfolioPage() {
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
            <Link href="/portfolio" className="text-sm text-pink-400 transition-colors">Portfolio</Link>
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
            <Sparkles className="w-3 h-3 mr-1" />
            Mon Portfolio
          </Badge>
          <h1 className="text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
            Projets qui font la <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">différence</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Découvrez une sélection de mes meilleurs projets en design UI/UX et développement web. 
            Chaque projet raconte une histoire unique de créativité et d&apos;innovation.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30 text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">15+</div>
              <p className="text-gray-400">Projets réalisés</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30 text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">12+</div>
              <p className="text-gray-400">Clients satisfaits</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30 text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">3+</div>
              <p className="text-gray-400">Années d&apos;expérience</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30 text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
              <p className="text-gray-400">Satisfaction client</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <Badge variant="secondary" className="mb-4 rounded-full bg-pink-500/20 text-pink-300 border-pink-500/30">
              Projets Vedettes
            </Badge>
            <h2 className="text-5xl font-bold tracking-tight mb-4 text-white">Mes meilleurs travaux</h2>
          </div>

          {/* Project 1 - E-commerce Platform */}
          <div className="mb-20">
            <Card className="overflow-hidden border-pink-500/30 hover:border-pink-500/50 transition-all hover:glow-pink">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center p-12">
                  <div className="text-center">
                    <Palette className="w-24 h-24 text-pink-400 mx-auto mb-4" />
                    <p className="text-gray-400">Aperçu du projet</p>
                  </div>
                </div>
                <div className="p-10 bg-gradient-to-br from-pink-500/10 to-pink-600/5">
                  <div className="flex gap-2 mb-4">
                    <Badge variant="outline" className="border-pink-500/50 text-pink-300">UI/UX Design</Badge>
                    <Badge variant="outline" className="border-pink-500/50 text-pink-300">E-commerce</Badge>
                    <Badge variant="outline" className="border-pink-500/50 text-pink-300">Responsive</Badge>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">Plateforme E-Commerce Moderne</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Refonte complète d&apos;une plateforme e-commerce pour améliorer l&apos;expérience utilisateur et augmenter les conversions. 
                    Le projet incluait une recherche utilisateur approfondie, la création de wireframes, de prototypes interactifs et le design final.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">Résultats</h4>
                        <p className="text-gray-400 text-sm">+45% de taux de conversion, -30% de taux de rebond</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">Impact</h4>
                        <p className="text-gray-400 text-sm">Plus de 10,000 utilisateurs actifs mensuels</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">Technologies</h4>
                        <p className="text-gray-400 text-sm">Figma, Adobe XD, User Testing</p>
                      </div>
                    </div>
                  </div>

                  <Button className="rounded-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 glow-pink">
                    Voir le projet <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Project 2 - SaaS Dashboard */}
          <div className="mb-20">
            <Card className="overflow-hidden border-pink-500/30 hover:border-pink-500/50 transition-all hover:glow-pink">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="order-2 md:order-1 p-10 bg-gradient-to-br from-pink-500/10 to-pink-600/5">
                  <div className="flex gap-2 mb-4">
                    <Badge variant="outline" className="border-pink-500/50 text-pink-300">React</Badge>
                    <Badge variant="outline" className="border-pink-500/50 text-pink-300">Next.js</Badge>
                    <Badge variant="outline" className="border-pink-500/50 text-pink-300">Dashboard</Badge>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">Dashboard SaaS Analytique</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Développement d&apos;un tableau de bord SaaS complet avec visualisation de données en temps réel, 
                    graphiques interactifs et interface utilisateur intuitive. Le projet a été construit avec React et Next.js 
                    pour des performances optimales.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Code className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">Stack Technique</h4>
                        <p className="text-gray-400 text-sm">React, Next.js, TypeScript, Tailwind CSS, Chart.js</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">Performance</h4>
                        <p className="text-gray-400 text-sm">Score Lighthouse: 98/100, Temps de chargement inférieur à 1s</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">Fonctionnalités</h4>
                        <p className="text-gray-400 text-sm">Authentification, API REST, Visualisation temps réel</p>
                      </div>
                    </div>
                  </div>

                  <Button className="rounded-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 glow-pink">
                    Voir le projet <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="order-1 md:order-2 aspect-video md:aspect-auto bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center p-12">
                  <div className="text-center">
                    <Code className="w-24 h-24 text-pink-400 mx-auto mb-4" />
                    <p className="text-gray-400">Aperçu du projet</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Project 3 - Corporate Website */}
          <div className="mb-20">
            <Card className="overflow-hidden border-pink-500/30 hover:border-pink-500/50 transition-all hover:glow-pink">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center p-12">
                  <div className="text-center">
                    <Layers className="w-24 h-24 text-pink-400 mx-auto mb-4" />
                    <p className="text-gray-400">Aperçu du projet</p>
                  </div>
                </div>
                <div className="p-10 bg-gradient-to-br from-pink-500/10 to-pink-600/5">
                  <div className="flex gap-2 mb-4">
                    <Badge variant="outline" className="border-pink-500/50 text-pink-300">WordPress</Badge>
                    <Badge variant="outline" className="border-pink-500/50 text-pink-300">Custom Theme</Badge>
                    <Badge variant="outline" className="border-pink-500/50 text-pink-300">SEO</Badge>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">Site Web d&apos;Entreprise Premium</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Création d&apos;un site web d&apos;entreprise sur mesure avec WordPress. Le projet incluait le développement d&apos;un thème personnalisé, 
                    l&apos;intégration de fonctionnalités avancées, l&apos;optimisation SEO et la formation du client pour la gestion du contenu.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Layers className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">Fonctionnalités</h4>
                        <p className="text-gray-400 text-sm">Blog, Portfolio, Formulaires de contact, Multilingue</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">SEO</h4>
                        <p className="text-gray-400 text-sm">Optimisé pour Google, Score PageSpeed: 95/100</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">Résultat</h4>
                        <p className="text-gray-400 text-sm">+200% de trafic organique en 6 mois</p>
                      </div>
                    </div>
                  </div>

                  <Button className="rounded-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 glow-pink">
                    Voir le projet <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* More Projects Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-pink-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <Badge variant="secondary" className="mb-4 rounded-full bg-pink-500/20 text-pink-300 border-pink-500/30">
              Autres Projets
            </Badge>
            <h2 className="text-5xl font-bold tracking-tight mb-4 text-white">Plus de réalisations</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <Card className="overflow-hidden border-pink-500/30 hover:border-pink-500/50 transition-all hover:glow-pink group">
              <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                <Palette className="w-16 h-16 text-pink-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6 bg-gradient-to-br from-pink-500/10 to-pink-600/5">
                <div className="flex gap-2 mb-3">
                  <Badge variant="outline" className="border-pink-500/50 text-pink-300 text-xs">Mobile App</Badge>
                  <Badge variant="outline" className="border-pink-500/50 text-pink-300 text-xs">UI/UX</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Application Mobile Fitness</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Design d&apos;interface pour une application de fitness avec suivi d&apos;activités et plans d&apos;entraînement personnalisés.
                </p>
                <Button variant="link" className="text-pink-400 hover:text-pink-300 p-0">
                  En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </Card>

            {/* Project Card 2 */}
            <Card className="overflow-hidden border-pink-500/30 hover:border-pink-500/50 transition-all hover:glow-pink group">
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                <Code className="w-16 h-16 text-pink-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6 bg-gradient-to-br from-pink-500/10 to-pink-600/5">
                <div className="flex gap-2 mb-3">
                  <Badge variant="outline" className="border-pink-500/50 text-pink-300 text-xs">Landing Page</Badge>
                  <Badge variant="outline" className="border-pink-500/50 text-pink-300 text-xs">React</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Landing Page SaaS</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Page d&apos;atterrissage moderne pour une startup SaaS avec animations fluides et design responsive.
                </p>
                <Button variant="link" className="text-pink-400 hover:text-pink-300 p-0">
                  En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </Card>

            {/* Project Card 3 */}
            <Card className="overflow-hidden border-pink-500/30 hover:border-pink-500/50 transition-all hover:glow-pink group">
              <div className="aspect-video bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center">
                <Layers className="w-16 h-16 text-pink-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6 bg-gradient-to-br from-pink-500/10 to-pink-600/5">
                <div className="flex gap-2 mb-3">
                  <Badge variant="outline" className="border-pink-500/50 text-pink-300 text-xs">E-commerce</Badge>
                  <Badge variant="outline" className="border-pink-500/50 text-pink-300 text-xs">WooCommerce</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Boutique en Ligne Mode</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Boutique e-commerce complète avec gestion des stocks, paiements sécurisés et interface admin.
                </p>
                <Button variant="link" className="text-pink-400 hover:text-pink-300 p-0">
                  En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </Card>

            {/* Project Card 4 */}
            <Card className="overflow-hidden border-pink-500/30 hover:border-pink-500/50 transition-all hover:glow-pink group">
              <div className="aspect-video bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center">
                <Palette className="w-16 h-16 text-pink-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6 bg-gradient-to-br from-pink-500/10 to-pink-600/5">
                <div className="flex gap-2 mb-3">
                  <Badge variant="outline" className="border-pink-500/50 text-pink-300 text-xs">Branding</Badge>
                  <Badge variant="outline" className="border-pink-500/50 text-pink-300 text-xs">Design</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Identité Visuelle Restaurant</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Création complète d&apos;identité de marque incluant logo, charte graphique et supports marketing.
                </p>
                <Button variant="link" className="text-pink-400 hover:text-pink-300 p-0">
                  En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </Card>

            {/* Project Card 5 */}
            <Card className="overflow-hidden border-pink-500/30 hover:border-pink-500/50 transition-all hover:glow-pink group">
              <div className="aspect-video bg-gradient-to-br from-rose-500/20 to-pink-500/20 flex items-center justify-center">
                <Code className="w-16 h-16 text-pink-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6 bg-gradient-to-br from-pink-500/10 to-pink-600/5">
                <div className="flex gap-2 mb-3">
                  <Badge variant="outline" className="border-pink-500/50 text-pink-300 text-xs">Portfolio</Badge>
                  <Badge variant="outline" className="border-pink-500/50 text-pink-300 text-xs">Next.js</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Portfolio Photographe</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Site portfolio élégant avec galerie d&apos;images optimisée et système de réservation intégré.
                </p>
                <Button variant="link" className="text-pink-400 hover:text-pink-300 p-0">
                  En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </Card>

            {/* Project Card 6 */}
            <Card className="overflow-hidden border-pink-500/30 hover:border-pink-500/50 transition-all hover:glow-pink group">
              <div className="aspect-video bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center">
                <Layers className="w-16 h-16 text-pink-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6 bg-gradient-to-br from-pink-500/10 to-pink-600/5">
                <div className="flex gap-2 mb-3">
                  <Badge variant="outline" className="border-pink-500/50 text-pink-300 text-xs">Blog</Badge>
                  <Badge variant="outline" className="border-pink-500/50 text-pink-300 text-xs">WordPress</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Blog Personnel Lifestyle</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Blog WordPress personnalisé avec design moderne, optimisation SEO et intégration réseaux sociaux.
                </p>
                <Button variant="link" className="text-pink-400 hover:text-pink-300 p-0">
                  En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Card className="p-16 bg-gradient-to-br from-pink-500/20 to-pink-600/10 border-pink-500/40 glow-pink-strong text-center">
            <h2 className="text-5xl font-bold tracking-tight mb-6 text-white">
              Votre projet sera le prochain ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Chaque projet est une opportunité de créer quelque chose d&apos;unique. Parlons de votre vision !
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="rounded-full bg-white text-pink-600 hover:bg-gray-100 text-lg px-8">
                  Démarrer un projet <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full border-pink-400 text-pink-400 hover:bg-pink-500/10 text-lg px-8">
                  Voir mes services
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
              <Link href="/portfolio" className="text-pink-400 transition-colors text-sm">Portfolio</Link>
              <Link href="/about" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">À propos</Link>
              <Link href="/contact" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">Contact</Link>
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
