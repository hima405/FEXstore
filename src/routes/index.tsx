import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-3xl font-bold">FEX Store</h1>
      <p className="text-muted-foreground max-w-md">
        This page is a placeholder. The site content hasn&apos;t been added to this project yet.
      </p>
    </main>
  )
}
