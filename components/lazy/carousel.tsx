"use client"
import * as React from "react"

// Lazy load the heavy carousel module only on client

type CarouselModule = typeof import("@/components/ui/carousel")

function useCarouselModule() {
  const [mod, setMod] = React.useState<CarouselModule | null>(null)
  React.useEffect(() => {
    let mounted = true
    import("@/components/ui/carousel").then((m) => {
      if (mounted) setMod(m)
    })
    return () => {
      mounted = false
    }
  }, [])
  return mod
}

export const LazyCarousel: React.FC<any> = (props) => {
  const mod = useCarouselModule()
  if (!mod) return <div className="w-full" aria-busy="true" />
  const C = mod.Carousel as any
  return <C {...props} />
}

export const LazyCarouselContent: React.FC<any> = (props) => {
  const mod = useCarouselModule()
  if (!mod) return null
  const C = mod.CarouselContent as any
  return <C {...props} />
}

export const LazyCarouselItem: React.FC<any> = (props) => {
  const mod = useCarouselModule()
  if (!mod) return null
  const C = mod.CarouselItem as any
  return <C {...props} />
}

export const LazyCarouselPrevious: React.FC<any> = (props) => {
  const mod = useCarouselModule()
  if (!mod) return null
  const C = mod.CarouselPrevious as any
  return <C {...props} />
}

export const LazyCarouselNext: React.FC<any> = (props) => {
  const mod = useCarouselModule()
  if (!mod) return null
  const C = mod.CarouselNext as any
  return <C {...props} />
}
