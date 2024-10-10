import one from "../images/one.jpg"
import two from "../images/two.webp"
import three from "../images/three.jpeg"
function Product(){
    return(
      <div class="product">
  
          <div class="idly">
              <img src={one} alt="cb"></img>
              <h5 class="h5id">Wild Store</h5>
              <p class="p_id1"> 
              “Smell is a word, perfume is literature” </p>
             
          </div>
  
          <div class="idly">
              <img src={two}alt="cb"></img>
              <h5 class="h5id"> fogg</h5>
              <p class="p_id1">  “Smell is a word, perfume is literature”</p>
             
          </div>
  
          <div class="idly">
              <img src={three} alt="cb"></img>
              <h5 class="h5id">Zee</h5>
              <p class="p_id1">  “Smell is a word, perfume is literature”</p>
             
          </div>
  
      </div>
    )
  
   }
  
  
    
 export default Product  