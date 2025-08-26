"use client"
import * as React from "react"
import { Skeleton } from "@/components/ui/skeleton"

type ChartModuleType = typeof import("@/components/ui/chart")

function useChartModule() {
  const [mod, setMod] = React.useState<ChartModuleType | null>(null)
  React.useEffect(() => {
    let mounted = true
    import("@/components/ui/chart").then((m) => {
      if (mounted) setMod(m)
    })
    return () => {
      mounted = false
    }
  }, [])
  return mod
}

const loading = (
  <div className="aspect-video w-full flex items-center justify-center">
    <Skeleton className="w-full h-full" />
  </div>
)

export const LazyChartContainer: React.FC<any> = (props) => {
  const mod = useChartModule()
  if (!mod) return loading
  const C = mod.ChartContainer as any
  return <C {...props} />
}

export const LazyChartTooltip: React.FC<any> = (props) => {
  const mod = useChartModule()
  if (!mod) return null
  const C = mod.ChartTooltip as any
  return <C {...props} />
}

export const LazyChartTooltipContent: React.FC<any> = (props) => {
  const mod = useChartModule()
  if (!mod) return null
  const C = mod.ChartTooltipContent as any
  return <C {...props} />
}

export const LazyChartLegend: React.FC<any> = (props) => {
  const mod = useChartModule()
  if (!mod) return null
  const C = mod.ChartLegend as any
  return <C {...props} />
}

export const LazyChartLegendContent: React.FC<any> = (props) => {
  const mod = useChartModule()
  if (!mod) return null
  const C = mod.ChartLegendContent as any
  return <C {...props} />
}
