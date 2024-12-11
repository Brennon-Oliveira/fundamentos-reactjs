import { format, formatDistanceToNow } from "date-fns"
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"
import { ptBR } from "date-fns/locale"
import { useState } from "react"

export function Post({
  author,
  publishedAt = new Date(),
  content
}){
  const [comments, setComments] = useState([
    1,2
  ])
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'de' yyyy 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: "há",
  })

  const handleCreateNewComment = (event)=>{
    event.preventDefault()
    setComments([
      ...comments,comments.length+1
    ])
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar source={author.avatarUrl} />
          <div>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {
          content.map(line => {
            if(line.type === "paragraph"){
              return <p>{line.content}</p>
            }
            if(line.type === "link"){
              return <p><a href="">{line.content}</a></p>
            }
          })
        }
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe seu comentário"
        />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commendList}>
        {comments.map(comment=>{
          return <Comment />
        })}
      </div>
    </article>
  )
}