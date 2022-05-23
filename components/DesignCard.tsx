import Router from 'next/router'

const DesignCard = (props) => {
  return (
    <div>
        
<div className="min-h-screen bg-gray-100 d-flex flex-column justify-content-center align-items-center my-5">
  <div className="grid--container mb-8 h-16 max-w-4xl">
    <div className="grid--image" style={{backgroundImage: `url(${props.cardImg})`}}></div>
    <div className="grid--content p-4 shadow-2xl">
      <h1 className="card--title mb-4 text-4xl font-bold">{props.title}</h1>
      <p className="card--content leading-tight mb-4">{props.para}</p>
      <button onClick={() => Router.push(`${props.figmaLink}`)} className="bg-transparent btn_button py-2 px-4">Visit Figma Design</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default DesignCard