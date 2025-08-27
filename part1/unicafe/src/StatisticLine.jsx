const StatisticLine = (props) => {
    return(
        <tr>
            <td>{props.text}</td>
            <td>{props.counter} {props.symbol}</td>
        </tr>
    )
}

export default StatisticLine