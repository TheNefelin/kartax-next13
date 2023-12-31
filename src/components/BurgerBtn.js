import styles from "@/css/BurgerBtn.module.css"

export default function BurgerBtn({ isClick }) {
  const classA = isClick ? `${styles.burgerBtnClick} ${styles.burgerA}` : styles.burgerA 
  const classB = isClick ? `${styles.burgerBtnClick} ${styles.burgerB}` : styles.burgerB 
  const classC = isClick ? `${styles.burgerBtnClick} ${styles.burgerC}` : styles.burgerC 

  return (
    <div className={styles.burgerBtn}>
      <div className={classA}></div>
      <div className={classB}></div>
      <div className={classC}></div>
    </div>
  )
}
