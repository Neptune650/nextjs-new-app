import Image from 'next/image'

export default function Home() {
  return (
    <main class="">
      <div class="text-center py-4 group bg-pink-300 outline outline-[1.5px]">
        <h1 class="my-4 text-4xl inline">Neptune</h1>
        <span class="opacity-0 group-hover:opacity-100 group-active:opacity-100 duration-200">#8080</span>
      </div>
      <div class="bg-black rounded-xl shadow-lg items-center p-8 mx-8 my-60">
        <p class="text-center">Hallo</p>
      </div>
    </main>
  )
}
