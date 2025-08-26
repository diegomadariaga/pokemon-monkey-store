import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Star, Zap } from "lucide-react"
import { pokemonMonkeyCards } from "@/data/cards"

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case "Común":
      return "bg-gray-100 text-gray-800"
    case "Rara":
      return "bg-blue-100 text-blue-800"
    case "Ultra Rara":
      return "bg-purple-100 text-purple-800"
    case "Legendaria":
      return "bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "Eléctrico":
      return "bg-yellow-100 text-yellow-800"
    case "Fuego":
      return "bg-red-100 text-red-800"
    case "Agua":
      return "bg-blue-100 text-blue-800"
    case "Planta":
      return "bg-green-100 text-green-800"
    case "Psíquico":
      return "bg-purple-100 text-purple-800"
    case "Lucha":
      return "bg-orange-100 text-orange-800"
    case "Acero":
      return "bg-gray-100 text-gray-800"
    case "Volador":
      return "bg-cyan-100 text-cyan-800"
    case "Normal":
      return "bg-stone-100 text-stone-800"
    case "Hielo":
      return "bg-sky-100 text-sky-800"
    case "Veneno":
      return "bg-violet-100 text-violet-800"
    case "Tierra":
      return "bg-amber-100 text-amber-800"
    case "Bicho":
      return "bg-lime-100 text-lime-800"
    case "Roca":
      return "bg-stone-100 text-stone-800"
    case "Fantasma":
      return "bg-indigo-100 text-indigo-800"
    case "Dragón":
      return "bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800"
    case "Siniestro":
      return "bg-slate-100 text-slate-800"
    case "Hada":
      return "bg-pink-100 text-pink-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function PokemonMonkeyStore() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🐵</div>
              <h1 className="text-2xl font-bold text-primary">MonkéCards</h1>
            </div>
            <Button variant="outline" size="sm">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Carrito (0)
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">¡Colecciona Cartas Pokemon Mono! 🐒</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descubre nuestra increíble colección de cartas Pokemon con monos y simios únicos. ¡Cada carta es una obra de
            arte coleccionable!
          </p>
          <Button size="lg" className="text-lg px-8 py-3">
            <Zap className="w-5 h-5 mr-2" />
            Explorar Colección
          </Button>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Cartas Disponibles</h3>
            <p className="text-muted-foreground">Encuentra tu carta Pokemon-mono favorita</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pokemonMonkeyCards.map((card) => (
              <Card key={card.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-muted">
                    <img
                      src={card.image || "/placeholder.svg"}
                      alt={card.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className={getRarityColor(card.rarity)}>{card.rarity}</Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{card.name}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="w-4 h-4 mr-1" />
                      {card.hp} HP
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Badge className={getTypeColor(card.type)} variant="secondary">
                      {card.type}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">{card.description}</p>

                  <div className="text-2xl font-bold text-primary">${card.price.toLocaleString("es-CL")} CLP</div>
                </CardContent>

                <CardFooter>
                  <Button className="w-full" size="sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Agregar al Carrito
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="text-2xl">🐵</div>
            <h3 className="text-xl font-bold text-primary">MonkéCards</h3>
          </div>
          <p className="text-muted-foreground">© 2025 MonkéCards. Todas las cartas son únicas y coleccionables.</p>
        </div>
      </footer>
    </div>
  )
}
