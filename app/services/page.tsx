"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Palette, Code, Layers, CheckCircle2, Users, Target, Rocket } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-pink-500/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-xl font-semibold tracking-tight text-white">Flora NOUDOUKOU</h1>
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/services" className="text-sm text-pink-400 transition-colors">Services</Link>
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
            <Sparkles className="w-3 h-3 mr-1" />
            Mes Services
          </Badge>
          <h1 className="text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
            Des solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">complètes</span> pour votre succès
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Je propose une gamme complète de services en design et développement web pour transformer vos idées en réalité digitale.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section id="uiux" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 glow-pink">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-5xl font-bold tracking-tight mb-6 text-white">Design UI/UX</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Je crée des interfaces utilisateur intuitives et visuellement captivantes qui transforment vos visiteurs en clients fidèles. 
                Mon approche centrée sur l&apos;utilisateur garantit une expérience fluide et mémorable.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Recherche Utilisateur</h4>
                    <p className="text-gray-400">Analyse approfondie de vos utilisateurs cibles pour comprendre leurs besoins et comportements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Wireframing & Prototypage</h4>
                    <p className="text-gray-400">Création de maquettes interactives pour visualiser et tester votre produit avant le développement.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Design Systems</h4>
                    <p className="text-gray-400">Développement de systèmes de design cohérents pour une identité visuelle forte et scalable.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Tests Utilisateurs</h4>
                    <p className="text-gray-400">Validation de vos designs avec de vrais utilisateurs pour optimiser l&apos;expérience.</p>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 glow-pink">
                  Discuter de votre projet <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <Card className="p-12 bg-gradient-to-br from-pink-500/20 to-pink-600/10 border-pink-500/40 glow-pink">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-500/30 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-pink-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Approche Centrée Utilisateur</h4>
                    <p className="text-gray-400 text-sm">Design basé sur les besoins réels</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-500/30 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-pink-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Objectifs Mesurables</h4>
                    <p className="text-gray-400 text-sm">KPIs clairs et suivi des performances</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-500/30 rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-pink-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Livraison Rapide</h4>
                    <p className="text-gray-400 text-sm">Itérations agiles et feedback continu</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Front-End Development */}
          <div id="frontend" className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <Card className="p-12 bg-gradient-to-br from-pink-500/20 to-pink-600/10 border-pink-500/40 glow-pink order-2 md:order-1">
              <h3 className="text-2xl font-bold text-white mb-6">Technologies que j&apos;utilise</h3>
              <div className="grid grid-cols-2 gap-4">
                <Badge variant="outline" className="border-pink-500/50 text-pink-300 py-2 justify-center">React</Badge>
                <Badge variant="outline" className="border-pink-500/50 text-pink-300 py-2 justify-center">Next.js</Badge>
                <Badge variant="outline" className="border-pink-500/50 text-pink-300 py-2 justify-center">TypeScript</Badge>
                <Badge variant="outline" className="border-pink-500/50 text-pink-300 py-2 justify-center">Tailwind CSS</Badge>
                <Badge variant="outline" className="border-pink-500/50 text-pink-300 py-2 justify-center">JavaScript</Badge>
                <Badge variant="outline" className="border-pink-500/50 text-pink-300 py-2 justify-center">HTML5/CSS3</Badge>
                <Badge variant="outline" className="border-pink-500/50 text-pink-300 py-2 justify-center">Git</Badge>
                <Badge variant="outline" className="border-pink-500/50 text-pink-300 py-2 justify-center">Responsive Design</Badge>
              </div>
            </Card>

            <div className="order-1 md:order-2">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 glow-pink">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-5xl font-bold tracking-tight mb-6 text-white">Développement Front-End</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Je transforme vos designs en applications web performantes, réactives et optimisées. 
                Mon code est propre, maintenable et suit les meilleures pratiques de l&apos;industrie.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Applications React/Next.js</h4>
                    <p className="text-gray-400">Développement d&apos;applications web modernes avec les frameworks les plus performants.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Design Responsive</h4>
                    <p className="text-gray-400">Sites parfaitement adaptés à tous les appareils (mobile, tablette, desktop).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Optimisation des Performances</h4>
                    <p className="text-gray-400">Sites ultra-rapides avec des temps de chargement optimisés pour le SEO.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Intégrations API</h4>
                    <p className="text-gray-400">Connexion avec vos services tiers et bases de données.</p>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 glow-pink">
                  Démarrer un projet <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* WordPress Development */}
          <div id="wordpress" className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 glow-pink">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-5xl font-bold tracking-tight mb-6 text-white">Développement WordPress</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Je crée des sites WordPress sur mesure, faciles à gérer et qui évoluent avec votre entreprise. 
                De la simple vitrine au site e-commerce complexe, je maîtrise toutes les facettes de WordPress.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Thèmes Personnalisés</h4>
                    <p className="text-gray-400">Développement de thèmes WordPress uniques adaptés à votre marque.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">E-commerce (WooCommerce)</h4>
                    <p className="text-gray-400">Boutiques en ligne complètes avec gestion des paiements et des stocks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Plugins & Intégrations</h4>
                    <p className="text-gray-400">Installation et configuration de plugins pour étendre les fonctionnalités.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Maintenance & Support</h4>
                    <p className="text-gray-400">Mises à jour régulières, sauvegardes et support technique continu.</p>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 glow-pink">
                  Parlons de votre site <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <Card className="p-12 bg-gradient-to-br from-pink-500/20 to-pink-600/10 border-pink-500/40 glow-pink">
              <h3 className="text-2xl font-bold text-white mb-6">Pourquoi WordPress ?</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-pink-300 mb-2">✨ Facilité de gestion</h4>
                  <p className="text-gray-400">Interface intuitive pour gérer votre contenu sans compétences techniques.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-pink-300 mb-2">🚀 Évolutif</h4>
                  <p className="text-gray-400">Ajoutez facilement de nouvelles fonctionnalités au fur et à mesure de votre croissance.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-pink-300 mb-2">💰 Économique</h4>
                  <p className="text-gray-400">Solution rentable avec un excellent retour sur investissement.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-pink-300 mb-2">🔍 SEO-Friendly</h4>
                  <p className="text-gray-400">Optimisé pour les moteurs de recherche dès le départ.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-pink-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 rounded-full bg-pink-500/20 text-pink-300 border-pink-500/30">
              Mon Processus
            </Badge>
            <h2 className="text-5xl font-bold tracking-tight mb-4 text-white">Comment je travaille</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Une approche structurée pour garantir le succès de votre projet
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 glow-pink text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Découverte</h3>
              <p className="text-gray-400">Comprendre vos objectifs, votre audience et vos besoins spécifiques.</p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 glow-pink text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Conception</h3>
              <p className="text-gray-400">Création de wireframes, maquettes et prototypes interactifs.</p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 glow-pink text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Développement</h3>
              <p className="text-gray-400">Transformation des designs en code propre et performant.</p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 glow-pink text-2xl font-bold text-white">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Lancement</h3>
              <p className="text-gray-400">Tests, optimisation et mise en ligne de votre projet.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Card className="p-16 bg-gradient-to-br from-pink-500/20 to-pink-600/10 border-pink-500/40 glow-pink-strong text-center">
            <h2 className="text-5xl font-bold tracking-tight mb-6 text-white">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contactez-moi dès aujourd&apos;hui pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full bg-white text-pink-600 hover:bg-gray-100 text-lg px-8">
                Contactez-moi maintenant <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
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
              <Link href="/services" className="text-pink-400 transition-colors text-sm">Services</Link>
              <Link href="/portfolio" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">Portfolio</Link>
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
