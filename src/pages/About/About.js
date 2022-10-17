import { Link } from 'react-router-dom';
import ScrollToTopOnMount from '../../utils/ScrollToTopOnMount';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.about}>
            <ScrollToTopOnMount />
            <h1>
                Sobre o Mini <span>Blog</span>
            </h1>
            <p>
                Este projeto consiste em um Blog feito com React no Front-end e Firebase no Back-end.
            </p>
            <Link className='btn' to='/posts/create'>
                Criar post
            </Link>
        </div>
    );
};

export default About;
