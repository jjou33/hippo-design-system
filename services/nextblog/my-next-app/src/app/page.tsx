import * as s from "./page.css"
import "@hippods/react-components-layout/style.css"
import "@hippods/themes/themes.css"

export default async function Home() {
  return (
    <main className={s.main}>
      <p className={s.typo}>안녕하세요</p>
    </main>
  )
}
