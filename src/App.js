import Header from './modules/header/components/Header';
import './fonts/stylesheet.css';
import './sass/style.scss';
import Banner from './modules/banner/components/Banner';
import Reputation from './modules/reputation/components/Reputation';
import Services from './modules/services/components/Services';
import Industry from './modules/industry/components/Industry';
import Case from './modules/case/components/Case';

function App() {
    return (
        <>
            <Header />
            <div className="main">
                <Banner />
                <Reputation />
                <Services />
                <Industry />
                <Case />
            </div>
        </>
    );
}

export default App;
