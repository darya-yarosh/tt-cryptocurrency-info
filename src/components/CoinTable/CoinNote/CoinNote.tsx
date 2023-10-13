import { Link } from "react-router-dom";

import Coin from "models/Coin";

import FavoriteButton from "components/FavoriteButton/FavoriteButton";

import { percentToNumber } from "logic/utils/Helper";

import styles from "components/CoinTable/CoinNote/CoinNote.module.scss";

interface CoinNoteProps {
  coin: Coin;
}

export default function CoinNote({ coin }: CoinNoteProps) {
  const changePercent24HrClassName =
    percentToNumber(coin.changePercent24Hr) < 0
      ? styles.negativeText
      : styles.positiveText;

  return (
    <Link to={`cryptocoins/${coin.id}`}>
      <tr className={styles.wrapper}>
        <td>
          <p>{coin.rank}</p>
        </td>
        <td>
          <p>{coin.symbol}</p>
        </td>
        <td>
          <img
            src={`${coin.logo}`}
            alt={`${coin.id} icon`}
            width={"25px"}
          ></img>
        </td>
        <td>
          <p>{coin.name}</p>
        </td>
        <td>
          <p>{coin.priceUsd}</p>
        </td>
        <td>
          <p>{coin.marketCapUsd}</p>
        </td>
        <td className={changePercent24HrClassName}>
          <p>{coin.changePercent24Hr}</p>
        </td>
        <td>
          <FavoriteButton coinId={coin.id} />
        </td>
      </tr>
    </Link>
  );
}
