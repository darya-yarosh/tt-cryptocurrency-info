import Coin from "models/Coin";

import styles from "components/TrendingCoins/TrendingCoins.module.scss";

interface TrendingCoinsProps {
  coinList: Coin[];
}

export default function TrendingCoins({ coinList }: TrendingCoinsProps) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Trending coins</h1>
      <section className={styles.coinList}>
        {coinList.map((coin) => {
          return (
            <div key={coin.id} className={styles.coin}>
              <p className={styles.coin__info}>{coin.rank}</p>
              <p className={styles.coin__info}>{coin.symbol}</p>
              <p className={styles.coin__info}>
                <img
                  src={`${coin.logo}`}
                  alt={`${coin.id} icon`}
                  width={"25px"}
                ></img>
              </p>
              <p className={styles.coin__info}>{coin.name}</p>
              <p className={styles.coin__info}>{coin.priceUsd}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
