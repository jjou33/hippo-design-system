import Image from "next/image"
import styles from "./page.module.css"
import "@hippods/react-components-button/style.css"
import "@hippods/react-components-layout/style.css"
import "@hippods/themes/themes.css"
import { Box, ListItem, List } from "@hippods/react-components-layout"
import { Button } from "@hippods/react-components-button"

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
        <Button size="lg" variant="solid" leftIcon="##" color="blue">
          HELLO
        </Button>
        <List variant="unordered" spacing={3}>
          <ListItem color="orange" fontSize="md">
            1번
          </ListItem>
          <ListItem fontSize="md">2번</ListItem>
          <ListItem fontSize="md">3번</ListItem>
        </List>
        <Box as="button" padding={5} background="green" boxShadow="xl" />
      </div>
    </main>
  )
}
