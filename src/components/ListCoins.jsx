import React from 'react'
import RowCoin from './RowCoin'

const titles = ['#','Moneda', 'Precio', 'Cambio Precio']

const ListCoins = ({coins, search}) => {
    const searchCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()) | coin.symbol.toLowerCase().includes(search.toLowerCase()));

    return (
       <table className='table table-dark mt-4 table-hover'>
           <thead>
               <tr>
                   {titles.map((title, index) => (
                       <td key={index}>{title}</td>
                   ))}
               </tr>
           </thead>
           <tbody>
               {searchCoins.map((coin, index)=> (
                   <RowCoin key={index} coin={coin} index={index+1}/>
               ))}

           </tbody>
       </table>
    )
}

export default ListCoins
