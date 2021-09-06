import React from 'react'

const RowCoin = ({coin, index}) => {
    return (
        <>
            <tr >
                <td>{index}</td>
                <td>
                    <img src={coin.image} alt={coin.symbol} style={{width: '7%'}} className='img-fluid me-4' />
                    <span>{coin.name}</span>
                    <span className='ms-3 text-muted text-uppercase' >{coin.symbol}</span>
                    </td>
                <td>{coin.current_price}</td>
                <td>
                    <span className='ms-3'>
                        {coin.price_change_24h}
                    </span>
                    <span className={coin.price_change_percentage_24h>0 ? 'text-success ms-3': 'text-danger ms-3'}>
                        %{coin.price_change_percentage_24h}
                    </span>
                </td>
            </tr>
        </>
    )
}

export default RowCoin
