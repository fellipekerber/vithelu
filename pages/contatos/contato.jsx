import styles from "@/styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export async function getStaticPaths() {
    // Seu código para obter os paths
    return {
        paths: [
            // Lista de paths
        ],
        fallback: false // ou 'blocking' ou true
    };
}

export default function Contatos(params) {
    return (<>
        <div className={styles.center}>
            <h1>
                Contatos
            </h1>
        </div>
        <div className={styles.grid}>
            <div className={styles.description}>
                <p>
                    <code className={styles.code}>Demonstre o compromisso da sua empresa com a visão de excelência do seu ramo em cada interação.</code>
                    <FontAwesomeIcon icon={faPhone} />
                </p>
            </div>
        </div>
    </>)
}