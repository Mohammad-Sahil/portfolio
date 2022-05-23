
const DesignC = (props) => {
  return (
    <div>
        <div className="grid">
					<figure className="effect-sadie">
						<img src={props.imgLink1} alt={props.title1}/>
						<figcaption>
							<h2><span>{props.title1}</span></h2>
							{/* <p>{props.para1}</p> */}
							<a href={props.linkA}>View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-sadie">
						<img src={props.imgLink2} alt={props.title2}/>
						<figcaption>
							<h2><span>{props.title2}</span></h2>
							{/* <p>{props.para2}</p> */}
							<a href={props.linkB}>View more</a>
						</figcaption>			
					</figure>
				</div>
    </div>
  )
}

export default DesignC