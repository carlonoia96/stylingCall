import React, {FC} from 'react';
import styles from './Home.module.scss';
import check from '../Assets/images/check.svg' ;

interface HomeProps {
    setCurrentRoute: (menu: string) => void;
}

class Home extends React.Component<HomeProps> {
    render() {
        return (<>
            <div className={styles.firstViewed}>
                <img src={require("../Assets/images/home.jpg")} alt=""/>
                <div className={styles.titleContainer}>
                    <p>
                        <span className={styles.primaryColorText}>styling</span> <br/>
                        <span className={styles.white}>call</span>
                    </p>
                </div>
            </div>
            <div className={styles.stylingCall}>
                <div className={styles.stylingCallContainer}>
                    <p className={styles.stylingCallTitle}><span className={styles.white}>Che cos'è una</span> <span
                        className={styles.primaryColorText}>STYLING CALL ?</span></p>
                    <p>
                        E' una <span className={styles.grassetto}>video call</span> della durata di un'ora in cui avrai
                        la possibilità di confrontarti direttamente con me, esperta del settore, che saprò darti <span
                        className={styles.primaryColorText}>consigli di arredamento adeguati</span> per la tua casa.
                    </p>
                    <p>
                        Durante questi <span className={styles.grassetto}> 60 minuti</span> di pura formazione e dialogo
                        potrai mostrarmi in tempo reale la particolare area della tua casa oggetto di analisi.
                    </p>
                    <p>
                        In questo modo ti aiuterò a risolvere le tue perplessità con dritte che ti aiuteranno a <span
                        className={styles.primaryColorText}>gestire in piena autonomia gli spazi</span> della tua
                        abitazione.
                    </p>
                    <p>
                        E' un <span className={styles.grassetto}>servizio innovativo</span>, che ho deciso di proporre
                        per tutti coloro che volessero provare a comprendere di più il fantastico mondo dell'interior
                        design.
                    </p>
                </div>
            </div>
            <div className={styles.block1}>
                <img src={require("../Assets/images/casa.png")} alt=""/>
            </div>
            <div className={styles.adattaATe}>
                <p className={`${styles.adattaATeTitle} ${styles.primaryColorText}`}>E' adatta a te se... </p>
                <div className={styles.container}>
                    <div className={styles.col1}>
                        <img src={require("../Assets/images/ambra.png")}/>
                    </div>
                    <div className={`${styles.col2} ${styles.col2Container}`}>
                        <div className={styles.row}>
                            <div className={styles.col1}>
                                <img src={check} alt=""/>
                            </div>
                            <div className={styles.col2}>
                                <p>
                                    non sai come disporre correttamente i macro arredi di casa
                                </p>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.col1}>
                                <img src={check} alt=""/>
                            </div>
                            <div className={styles.col2}>
                                <p>
                                    ti senti sotto pressione quando qualcuno viene a trovarti per paura che la tua casa
                                    non sia all'altezza
                                </p>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.col1}>
                                <img src={check} alt=""/>
                            </div>
                            <div className={styles.col2}>
                                <p>
                                    hai una stanza troppo piccola/grande che non sai come gestire
                                </p>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.col1}>
                                <img src={check} alt=""/>
                            </div>
                            <div className={styles.col2}>
                                <p>
                                    non hai una palette colori e non sai a quale stile appartieni
                                </p>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.col1}>
                                <img src={check} alt=""/>
                            </div>
                            <div className={styles.col2}>
                                <p>
                                    l'indecisione è con te ogni giorno
                                </p>
                            </div>
                        </div>
                        <div className={styles.btnPrenota}>
                            <p>Prenota!</p>
                        </div>


                    </div>
                </div>
            </div>
        </>)
    }
}


export default Home;
