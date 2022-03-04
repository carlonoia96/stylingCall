import React, {FC} from 'react';
import styles from './Home.module.scss';

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
        </>)
    }
}


export default Home;
