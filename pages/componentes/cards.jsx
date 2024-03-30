import styles from "@/styles/Home.module.css";

export default function Cards({titulo, subtitulo}) {
    return (
        <a href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>
              {titulo} <span>-&gt;</span>
            </h2>
            <p>
              {subtitulo}
            </p>
          </a>
    )
}