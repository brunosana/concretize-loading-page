import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/logo.png"
        alt="Concretize Logo"
        className={styles.logo}
        width={2648}
        height={902}
        priority
      />
      <div
        className={styles.loadingArea}
      >
        <Image
          src="/bloco_animado_site.gif"
          alt="Bloco Loading"
          className={styles.loadingBlock}
          width={359}
          height={333}
          priority
        />
        <h2>Aguarde...</h2>
      </div>
    </main>
  )
}
