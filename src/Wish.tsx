
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import './App.css';

import { useNavigate } from "react-router-dom";
import { remove } from './store/ProductSlice';
import { add } from './store/cartSlice';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Wish() {
  const navigate=useNavigate()
    const products=useSelector((state:any)=>state.product)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    console.log("products.......",products)
    const dispatch=useDispatch()

    const handaleRemove=(id:number)=>{
        dispatch(remove(id))

    }
    const handalAdd=(pro:any)=>{
      dispatch(add(pro))
      dispatch(remove(pro.id))
   
  }
 
  return (
    <div>
   
      <div className='productwrapper'>
      {
          products.map((pro:any,indx:number) => (
            <div className="cardCart" key={indx}>
                <img src={pro.image} alt="" />
                <h4>{pro.title}</h4>
                <h5>Price:-{pro.price}</h5>
               
                <button onClick={()=>{handalAdd(pro)}} className='btn'>Add to cart</button>
                <button className='btn' onClick={()=>{handaleRemove(pro.id)}}>Remove</button>
            </div>
        ))}

      </div>
     
     
      {/* <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="spring-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal> */}
    </div>
   
  )
}

export default Wish;