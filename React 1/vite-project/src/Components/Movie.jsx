function Movie({ titlee, yearr, synopsiss }) {
  return (
    <li>
      <h2>{titlee}</h2>
      <span>({yearr})</span>
      <p>"{synopsiss}</p>
    </li>
  )
}

export default Movie