import { Home } from '../Home/Home';
import s from './HomePage.module.css';

function HomePage() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Trending today:</h2>
      <ul>
        <Home />
      </ul>
    </div>
  );
}

export default HomePage;