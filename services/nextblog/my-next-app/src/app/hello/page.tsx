// app/hello/page.js

import { ListItem, List } from "@hippods/react-components-layout"

export default function HelloPage() {
  return (
    <main>
      <h1>Hello World!</h1>
      <p>This is a sample page using Next.js 13 App Router.</p>
      <List variant="unordered" spacing={3}>
        <ListItem color="orange" fontSize="md">
          1번
        </ListItem>
        <ListItem fontSize="md">2번</ListItem>
        <ListItem fontSize="md">3번</ListItem>
      </List>
    </main>
  )
}
