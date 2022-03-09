import React, {FC} from 'react';
import './Home.css';
import check from '../Assets/images/check.webp' ;

interface HomeProps {
    setCurrentRoute: (menu: string) => void;
}

class Home extends React.Component<HomeProps> {
    render() {
        return (<>
            <div className={"firstViewed"}>
                <img src={require("../Assets/images/home.webp")} alt=""/>
                <div className={"titleContainer"}>
                    <p>
                        <span className={"primaryColorText"}>styling</span> <br/>
                        <span className={"white"}>call</span>
                    </p>
                </div>
            </div>
            <div className={"stylingCall"}>
                <div className={"stylingCallContainer"}>
                    <p className={"stylingCallTitle"}><span className={"white"}>Che cos'è una</span> <span
                        className={"primaryColorText"}>STYLING CALL ?</span></p>
                    <p>
                        E' una <span className={"grassetto"}>video call</span> della durata di un'ora in cui avrai
                        la possibilità di confrontarti direttamente con me, esperta del settore, che saprò darti <span
                        className={"primaryColorText"}>consigli di arredamento adeguati</span> per la tua casa.
                    </p>
                    <p>
                        Durante questi <span className={"grassetto"}> 60 minuti</span> di pura formazione e dialogo
                        potrai mostrarmi in tempo reale la particolare area della tua casa oggetto di analisi.
                    </p>
                    <p>
                        In questo modo ti aiuterò a risolvere le tue perplessità con dritte che ti aiuteranno a <span
                        className={"primaryColorText"}>gestire in piena autonomia gli spazi</span> della tua abitazione.
                    </p>
                    <p>
                        E' un <span className={"grassetto"}>servizio innovativo</span>, che ho deciso di proporre
                        per tutti coloro che volessero provare a comprendere di più il fantastico mondo dell'interior
                        design.
                    </p>
                </div>
            </div>
            <div className={"block1"}>
                <img src={require("../Assets/images/casa.webp")} alt=""/>
            </div>
            <div className={"adattaATe"}>
                <p className={"adattaATeTitle primaryColorText"}>E' adatta a te se... </p>
                <div className={"container"}>
                    <div className={"col1"}>
                        <img src={require("../Assets/images/ambra.webp")}/>
                    </div>
                    <div className={"col2 col2Container"}>
                        <div className={"row"}>
                            <div className={"col1"}>
                                <img src={check} alt=""/>
                            </div>
                            <div className={"col2"}>
                                <p>
                                    non sai come disporre correttamente i macro arredi di casa
                                </p>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"col1"}>
                                <img src={check} alt=""/>
                            </div>
                            <div className={"col2"}>
                                <p>
                                    ti senti sotto pressione quando qualcuno viene a trovarti per paura che la tua casa
                                    non sia all'altezza
                                </p>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"col1"}>
                                <img src={check} alt=""/>
                            </div>
                            <div className={"col2"}>
                                <p>
                                    hai una stanza troppo piccola/grande che non sai come gestire
                                </p>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"col1"}>
                                <img src={check} alt=""/>
                            </div>
                            <div className={"col2"}>
                                <p>
                                    non hai una palette colori e non sai a quale stile appartieni
                                </p>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"col1"}>
                                <img src={check} alt=""/>
                            </div>
                            <div className={"col2"}>
                                <p>
                                    l'indecisione è con te ogni giorno
                                </p>
                            </div>
                        </div>
                        <div className={"btnPrenota"}>
                            <p>Prenota!</p>
                        </div>


                    </div>
                </div>
            </div>
            <div className={"servizio default-block-size"}>
                <div className={"text-container"}>
                    <p className={"title"}>
                        A chi è rivolto il servizio
                    </p>
                    <p className={"text"}>
                        Questo tipo di consulenza si rivolge a <span
                        className={"primaryColorText grassetto"}>chiunque</span> infatti essendo online, non terrò in
                        considerazione la distanza geografica.
                    </p>
                    <p className={"text"}>
                        Il tipo di consulenza offerto riguarda solo le <span
                        className={"primaryColorText grassetto"}>abitazioni</span> private in quanto queste sono la mia
                        specializzazione.
                    </p>
                </div>
            </div>
            <div className={"call default-block-size"}>
                <div className={"text-container "}>
                    <p>
                        PRENOTA LA TUA <br/>
                        CALL CON ME
                    </p>
                    <div className={"btnPrenota"}>
                        <p>Prenota ora!</p>
                    </div>
                </div>
            </div>
            <div className={"prenota default-block-size"}>

            </div>
        </>)
    }
}


export default Home;
