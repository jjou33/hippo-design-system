import Image from "next/image"
import styles from "./page.module.css"
import "@hippods/react-components-button/style.css"
import "@hippods/react-components-layout/style.css"
import "@hippods/themes/themes.css"

import ClientButton from "@/components/ClientButton"

export default function Home() {
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
