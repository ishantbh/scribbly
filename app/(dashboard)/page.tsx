export default function Home() {
  return (
    <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
      <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className='aspect-video rounded-xl bg-muted/50' />
        ))}
      </div>
    </div>
  )
}
