import { Slider } from '~/components/Slider'
import { Button } from '~/components/Button'
import { Board } from '~/components/Board'

export function Game () {
  return <>
    <title>Hlavolam "15" :: Hra</title>

    <meta name="keywords" content="Hraj hru Hlavolam 15. Play 15 Puzzle game." />
    <meta name="description" content="Príklad React 19 aplikácie. React 19 application example" />

    <header className="h-max bg-[url(/images/background.svg)] font-barrio font-bold">
      <h1 className="py-6 tracking-wide text-5xl text-center text-blue-50">Hlavolam "15"</h1>
    </header>

    <main className="w-xl self-center justify-self-center grid place-content-center gap-y-3">
      <form className="flex gap-x-3">
        <Slider />
        <Button />
      </form>

      <Board />
    </main>
  </>
}
