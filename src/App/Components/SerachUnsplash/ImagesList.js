import React from "react";

class ImagesList extends  React.Component {
    render(){
       const images = this.props.images.map(({id , description , urls})=>{
            return (
                 <img ref={this.imgref} key={id} src={urls.regular} alt={description} className="img-fluid mb-3"/>
             )
         });

        return (
            <div className="row">
                <div className="card-columns">
                    {images}
                </div>
            </div>
        )
    }
};

export default ImagesList;