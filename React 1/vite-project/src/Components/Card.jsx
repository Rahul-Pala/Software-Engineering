function Card(props) {
  return (
    <div style={{
      border: "1px solid black",
      padding: "10px",
      margin: "10px",
      color: "blue",
      backgroundColor: "pink"
    }}>
      {props.children}
    </div>
  )
}
export default Card;