import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Heart, Calendar, Users } from "lucide-react"

const categories = [
  { name: "Homélies", count: 12, icon: BookOpen, color: "bg-primary/10 text-primary" },
  { name: "Témoignages", count: 8, icon: Heart, color: "bg-secondary/10 text-secondary" },
  { name: "Événements", count: 15, icon: Calendar, color: "bg-accent/10 text-accent" },
  { name: "Vie paroissiale", count: 6, icon: Users, color: "bg-muted/50 text-muted-foreground" },
]

export function BlogCategories() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Catégories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.name}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${category.color}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{category.name}</span>
                </div>
                <Badge variant="secondary">{category.count}</Badge>
              </div>
            )
          })}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Articles récents</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { title: "Méditation sur l'Avent", date: "15 déc. 2024" },
            { title: "Témoignage de Marie", date: "10 déc. 2024" },
            { title: "Préparation de Noël", date: "5 déc. 2024" },
          ].map((post, index) => (
            <div key={index} className="space-y-2 pb-3 border-b last:border-b-0">
              <h4 className="font-medium text-sm hover:text-primary cursor-pointer transition-colors">{post.title}</h4>
              <p className="text-xs text-muted-foreground">{post.date}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
