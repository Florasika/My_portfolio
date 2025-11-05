"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Heart } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-pink-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-lg sm:text-xl font-semibold tracking-tight text-white">Flora</h1>
          </Link>
          <div className="hidden sm:flex gap-6 items-center">
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
                <button className="sm:hidden text-pink-400 hover:text-pink-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-6 rounded-full bg-pink-500/20 text-pink-300 border-pink-500/30">
              <Sparkles className="w-3 h-3 mr-1" />
              Disponible pour des projets
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight text-white">
              Designer UI/UX & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">Développeuse</span> Front-End
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Je crée de belles expériences numériques centrées sur l&apos;utilisateur qui aident les entreprises à se développer. 
              Spécialisée en design UI/UX, développement WordPress et applications React.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact">
                <Button className="w-full sm:w-auto rounded-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 glow-pink text-base sm:text-lg px-6 sm:px-8 py-3">
                  Démarrer un projet <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="w-full sm:w-auto rounded-full border-pink-500/50 text-pink-400 hover:bg-pink-500/10 text-base sm:text-lg px-6 sm:px-8 py-3">
                  Voir mes réalisations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge variant="secondary" className="mb-4 rounded-full bg-pink-500/20 text-pink-300 border-pink-500/30">
              Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4 text-white">Ce que je fais</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Des solutions numériques complètes adaptées à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-6 sm:p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30 hover:border-pink-500/50 transition-all hover:glow-pink group">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 glow-pink group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">Design UI/UX</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                Création d&apos;interfaces intuitives et visuellement époustouflantes qui captivent vos utilisateurs.
              </p>
              <Link href="/services#uiux">
                <Button variant="link" className="text-pink-400 hover:text-pink-300 p-0">
                  En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </Card>

            <Card className="p-6 sm:p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30 hover:border-pink-500/50 transition-all hover:glow-pink group">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 glow-pink group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">Développement Front-End</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                Applications web performantes avec React, Next.js et les technologies modernes.
              </p>
              <Link href="/services#frontend">
                <Button variant="link" className="text-pink-400 hover:text-pink-300 p-0">
                  En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </Card>

            <Card className="p-6 sm:p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30 hover:border-pink-500/50 transition-all hover:glow-pink group">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 glow-pink group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">WordPress</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                Solutions WordPress personnalisées qui évoluent avec votre entreprise.
              </p>
              <Link href="/services#wordpress">
                <Button variant="link" className="text-pink-400 hover:text-pink-300 p-0">
                  En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 glow-pink">
                Voir tous les services <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Card className="p-16 bg-gradient-to-br from-pink-500/20 to-pink-600/10 border-pink-500/40 glow-pink-strong text-center">
            <h2 className="text-5xl font-bold tracking-tight mb-6 text-white">
              Prête à donner vie à votre projet ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discutons de votre vision et créons ensemble quelque chose d&apos;extraordinaire.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="rounded-full bg-white text-pink-600 hover:bg-gray-100 text-lg px-8">
                  Contactez-moi <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
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
