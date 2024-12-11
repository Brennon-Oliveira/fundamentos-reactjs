import { ThumbsUp, Trash } from "@phosphor-icons/react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"

export function Comment(){
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} source="https://github.com/Brennon-Oliveira.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Devon Lane</strong>
              <time title="12 de dezembro de 2024 as 13:22" dateTime="2024-12-07 13:22">Cerca de 2h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
          <ThumbsUp />
          Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}