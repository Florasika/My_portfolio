"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, GraduationCap, Briefcase, Award, Heart, Coffee, Music, BookOpen, Palette } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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
            <Link href="/about" className="text-sm text-pink-400 transition-colors">À propos</Link>
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
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 rounded-full bg-pink-500/20 text-pink-300 border-pink-500/30">
                <Sparkles className="w-3 h-3 mr-1" />
                À propos de moi
              </Badge>
              <h1 className="text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
                Bonjour, je suis <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">Flora</span>
              </h1>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Designer UI/UX et Développeuse Front-End passionnée par la création d'expériences numériques exceptionnelles.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Basée à Lomé, Togo, je combine créativité et expertise technique pour transformer des idées en produits digitaux qui font la différence. 
                Mon objectif ? Créer des interfaces qui non seulement sont belles, mais qui résolvent de vrais problèmes.
              </p>
              <Link href="/contact">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 glow-pink">
                  Travaillons ensemble <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <Card className="p-12 bg-gradient-to-br from-pink-500/20 to-pink-600/10 border-pink-500/40 glow-pink">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-pink-500/30 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-pink-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Formation</h3>
                  </div>
                  <div className="ml-15 space-y-3">
                    <div>
                      <h4 className="font-semibold text-pink-300">Institut Polytechnique Defitech</h4>
                      <p className="text-gray-400">Baccalauréat • 2022 - 2025</p>
                      <p className="text-gray-500 text-sm mt-1">Formation en développement web et design numérique</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-pink-500/30 rounded-xl flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-pink-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Expérience</h3>
                  </div>
                  <div className="ml-15 space-y-3">
                    <div>
                      <h4 className="font-semibold text-pink-300">Bostonsolux</h4>
                      <p className="text-gray-400">Stagiaire Projet • Mars 2025 - Présent</p>
                      <p className="text-gray-500 text-sm mt-1">Développement de projets web et design d'interfaces</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 rounded-full bg-pink-500/20 text-pink-300 border-pink-500/30">
              Compétences
            </Badge>
            <h2 className="text-5xl font-bold tracking-tight mb-4 text-white">Ce que je maîtrise</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Un ensemble de compétences techniques et créatives pour donner vie à vos projets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center glow-pink">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Design</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">UI/UX Design</span>
                    <span className="text-pink-400">95%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-500 to-pink-600 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Figma</span>
                    <span className="text-pink-400">90%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-500 to-pink-600 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Adobe XD</span>
                    <span className="text-pink-400">85%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-500 to-pink-600 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Canva</span>
                    <span className="text-pink-400">92%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-500 to-pink-600 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Prototypage</span>
                    <span className="text-pink-400">88%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-500 to-pink-600 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center glow-pink">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Développement</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">React</span>
                    <span className="text-pink-400">90%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-500 to-pink-600 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Next.js</span>
                    <span className="text-pink-400">85%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-500 to-pink-600 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">JavaScript</span>
                    <span className="text-pink-400">88%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-500 to-pink-600 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">WordPress</span>
                    <span className="text-pink-400">93%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-500 to-pink-600 rounded-full" style={{width: '93%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Tailwind CSS</span>
                    <span className="text-pink-400">95%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-500 to-pink-600 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-pink-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 rounded-full bg-pink-500/20 text-pink-300 border-pink-500/30">
              Mes Valeurs
            </Badge>
            <h2 className="text-5xl font-bold tracking-tight mb-4 text-white">Ce qui me guide</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Les principes qui définissent ma façon de travailler
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30 hover:border-pink-500/50 transition-all hover:glow-pink text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 glow-pink">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Passion</h3>
              <p className="text-gray-400">
                Je mets tout mon cœur dans chaque projet. Le design et le développement ne sont pas qu'un travail, c'est ma passion.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30 hover:border-pink-500/50 transition-all hover:glow-pink text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 glow-pink">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Excellence</h3>
              <p className="text-gray-400">
                Je vise toujours la perfection dans chaque détail, du design au code, pour livrer des produits de qualité supérieure.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30 hover:border-pink-500/50 transition-all hover:glow-pink text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 glow-pink">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Innovation</h3>
              <p className="text-gray-400">
                Je reste à jour avec les dernières tendances et technologies pour offrir des solutions modernes et innovantes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 rounded-full bg-pink-500/20 text-pink-300 border-pink-500/30">
              En dehors du travail
            </Badge>
            <h2 className="text-5xl font-bold tracking-tight mb-4 text-white">Mes passions</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ce qui m'inspire et me ressource au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30 text-center hover:border-pink-500/50 transition-all">
              <Coffee className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-2">Café & Design</h4>
              <p className="text-gray-400 text-sm">Mes meilleures idées naissent autour d'un bon café</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30 text-center hover:border-pink-500/50 transition-all">
              <Music className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-2">Musique</h4>
              <p className="text-gray-400 text-sm">La musique accompagne toutes mes sessions de création</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30 text-center hover:border-pink-500/50 transition-all">
              <BookOpen className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-2">Apprentissage</h4>
              <p className="text-gray-400 text-sm">Toujours en train d'apprendre de nouvelles technologies</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/30 text-center hover:border-pink-500/50 transition-all">
              <Palette className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-2">Art & Créativité</h4>
              <p className="text-gray-400 text-sm">Exploration de différentes formes d'expression artistique</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Card className="p-16 bg-gradient-to-br from-pink-500/20 to-pink-600/10 border-pink-500/40 glow-pink-strong text-center">
            <h2 className="text-5xl font-bold tracking-tight mb-6 text-white">
              Créons quelque chose d'incroyable ensemble
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Si vous cherchez quelqu'un de passionné, créatif et dévoué pour votre prochain projet, parlons-en !
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="rounded-full bg-white text-pink-600 hover:bg-gray-100 text-lg px-8">
                  Contactez-moi <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="rounded-full border-pink-400 text-pink-400 hover:bg-pink-500/10 text-lg px-8">
                  Voir mon travail
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
              <Link href="/about" className="text-pink-400 transition-colors text-sm">À propos</Link>
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
