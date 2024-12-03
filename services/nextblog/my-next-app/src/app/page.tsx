import Image from "next/image"
import styles from "./page.module.css"
import "@hippods/react-components-button/style.css"
import "@hippods/react-components-layout/style.css"
import "@hippods/themes/themes.css"

import ClientButton from "@/components/ClientButton"

export default async function Home() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
  //   cache: "no-store", // 서버에서 매번 새 데이터를 가져옵니다.
  // })
  // const post = await res.json()

  return (
    <main>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div id="next">
        <ClientButton />
      </div>
    </main>
  )
}
