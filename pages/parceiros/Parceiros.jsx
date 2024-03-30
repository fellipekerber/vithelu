import styles from "@/styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from '@fortawesome/free-solid-svg-icons';

export async function getStaticProps() {
    // Seu código para obter os paths
    return {
        paths: [
            // Lista de paths
        ],
        fallback: false // ou 'blocking' ou true
    };
}

export default function Parceiros(params) {
    return (<>

        <div className={styles.center}>
            <h1>
                Parceiros

            </h1>
        </div>
        <div className={styles.grid}>
            <div className={styles.description}>
                <p>
                    <code className={styles.code}>Texto aqui.</code>
                    <FontAwesomeIcon icon={faComments} />
                </p>
            </div>
        </div>
    </>)
}