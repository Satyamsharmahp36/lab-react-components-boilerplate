export default function ImgGallery(props){
    // const data = props.data;
    {return(
        props.data.map(image=>{
                return(
                  <div key={image.id} className="column">
                    <img src={image.img} alt=""></img>
                  </div>
                )
              })
    )
            }
  }

