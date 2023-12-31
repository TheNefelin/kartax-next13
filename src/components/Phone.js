import styles from "@/css/Phone.module.css"
import Link from "next/link"

export default function Phone() {
  return (
    <section>
      <div className={styles.phone}>
        <iframe className={styles.content} src="https://kartax-express-production.up.railway.app/kartax/1">
        </iframe>
      </div>
    </section>
  )
}
