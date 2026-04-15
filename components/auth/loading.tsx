import Image from 'next/image'

export function Loading() {
  return (
    <main className='h-full w-full flex flex-col gap-4 items-center justify-center'>
      <div className='size-20'>
        <Image
          src='/assets/logo.svg'
          alt='Scribbly Logo'
          width={80}
          height={80}
          className='w-full animate-pulse'
        />
      </div>
    </main>
  )
}
