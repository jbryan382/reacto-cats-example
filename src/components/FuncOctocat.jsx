export function FuncOctocat(props) {
  return (
    <figure>
      <a href={props.link}>
        <img src={props.image} alt={props.name} />
      </a>
      <div className="triangle" />
      <div className="userphotos">
        <figcaption>{props.number}</figcaption>
        <figcaption>
          the
          <a href={props.link}>{props.name}</a>
          by
        </figcaption>
        {props.author.map(auth => {
          return (
            <a href={auth.link}>
              <img src={auth.image} />
            </a>
          )
        })}
      </div>
    </figure>
  )
}
