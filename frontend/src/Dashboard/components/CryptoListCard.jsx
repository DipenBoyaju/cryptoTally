import { StarIcon } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { useGetAllCoinInfoQuery } from '../../apis/coinDataApi';

const CryptoListCard = ({ coin }) => {
  const nav = useNavigate();
  const { data: coinInfo } = useGetAllCoinInfoQuery(coin?.id)
  const logo = coinInfo?.data?.data?.[coin.id]?.logo

  return (
    <tr className="cursor-pointer hover:bg-zinc-800" onClick={() => nav(`${coin?.id}`)}>
      <td className='pr-2'>{coin?.cmc_rank}</td>
      <td className=" py-2 flex gap-1 items-center"><img src={logo} alt={coin?.name} className='size-10' />
        <div className="text-sm">
          <p className="text-xs font-semibold">{coin?.symbol}</p>
          {coin?.name}
        </div>
      </td>
      <td>${coin?.quote?.USD.price.toFixed(2)}</td>
      <td>{coin?.quote?.USD.percent_change_1h.toFixed(2)}%</td>
      <td>{coin?.quote?.USD.percent_change_24h.toFixed(2)}%</td>
      <td>{coin?.quote?.USD.percent_change_7d.toFixed(2)}%</td>
      <td>${coin?.quote?.USD.market_cap.toFixed(2)}</td>
      <td>${coin?.quote?.USD.volume_24h.toFixed(2)}</td>
      <td>{coin?.circulating_supply} {coin?.symbol}</td>
      <td><StarIcon color="yellow" size={16} /></td>
    </tr>
  )
}
export default CryptoListCard