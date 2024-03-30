import styles from "@/styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGroupArrowsRotate, faPersonCane, faPersonCirclePlus, faPersonWalking, faPhone } from '@fortawesome/free-solid-svg-icons';

export async function getStaticPaths() {
    // Seu código para obter os paths
    return {
        paths: [
            // Lista de paths
        ],
        fallback: false // ou 'blocking' ou true
    };
}

export default function QuemSomos(params) {
    return (<>
        <div className={styles.center}>
            <h1>
                Quem somos
            </h1>
        </div>
        <div className={styles.grid}>
            <div className={styles.description}>
                <p>
                    <code className={styles.description}>Demonstre o compromisso da sua empresa com a visão de excelência do seu ramo em cada interação.</code>
                    <FontAwesomeIcon icon={faGroupArrowsRotate} />
                </p>
            </div>
        </div>
    </>)
}