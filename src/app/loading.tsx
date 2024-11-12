import SkeletonCard from "@/components/SkeletonCard"

function loading() {
  return (
    <main>
        <div className="grid grid-cols-3 gap-8">
            { Array(9).fill(0).map(() => (
                <SkeletonCard key={crypto.randomUUID()} />
            ))}
        </div>
    </main>
  )
}

export default loading
