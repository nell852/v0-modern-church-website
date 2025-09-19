"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { createBrowserClient } from "@supabase/ssr"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  slug: string
  featured_image?: string
  created_at: string
  published: boolean
}

export function LatestNews() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLatestPosts() {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      )

      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false })
        .limit(3)

      if (error) {
        console.error("Error fetching latest posts:", error)
      } else {
        setPosts(data || [])
      }
      setLoading(false)
    }

    fetchLatestPosts()
  }, [])

  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dernières Actualités</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Restez informés de la vie de notre paroisse et de nos événements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {loading ? (
            // Loading skeleton
            [1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse overflow-hidden">
                <div className="aspect-video bg-muted" />
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="h-4 bg-muted rounded w-16" />
                    <div className="h-3 bg-muted rounded w-20" />
                  </div>
                  <div className="h-6 bg-muted rounded w-3/4" />
                </CardHeader>
                <CardContent>
                  <div className="h-4 bg-muted rounded mb-2" />
                  <div className="h-4 bg-muted rounded w-2/3" />
                </CardContent>
              </Card>
            ))
          ) : posts.length > 0 ? (
            posts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={
                      post.featured_image || "/placeholder.svg?height=300&width=500&query=church+spiritual+reflection"
                    }
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      Actualités
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.created_at).toLocaleDateString("fr-FR")}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button
                    asChild
                    variant="ghost"
                    className="p-0 h-auto font-semibold text-primary hover:text-primary/80"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      Lire la suite
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            // Fallback content when no posts are available
            <div className="col-span-3 text-center py-8">
              <p className="text-muted-foreground">Aucun article disponible pour le moment.</p>
            </div>
          )}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">
              Voir toutes les actualités
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
