import styles from "@/styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export async function getStaticProps() {
    return {
        props: {
            titulo: 'Quem somos',
            content: 'Conteúdo',
            msgExtra: 'Demonstre o compromisso da sua empresa com a visão de excelência do seu ramo em cada interação.'
        }
    }
}

export default function Contatos(props) {
    return (<>
        <div className={styles.center}>
            <h1>
                {props.titulo}
            </h1>
        </div>
        <div className={styles.grid}>
            <div className={styles.description}>
                <p>
                    <code className={styles.code}>{props.msgExtra}</code>
                    <FontAwesomeIcon icon={faPhone} />
                </p>
            </div>
        </div>
    </>)
}