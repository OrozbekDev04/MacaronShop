import { NavLink } from "react-router-dom";
import cls from "./Header.module.css";
import Bag from "../../assets/svg/Ayana/bag.svg";
import phoneNumber from "../../assets/svg/Ayana/phone.svg";
import { Box, Modal } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';



import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const HeaderTop = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [location, setLocation] = useState('Местоположение');

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    handleClose();
  };

  return (
    <div className={cls.headerBackground}>
      <div className="container" >
        <div className={cls.Top}>
          <div className={cls.one}>
            <NavLink to="/" className={cls.navLink} style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', textDecoration: 'none', color: "black" })}>Гарантия свежести</NavLink>
            <NavLink to="/" className={cls.navLink} style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', textDecoration: 'none', color: "black" })}>Доставка и оплата</NavLink>
            <NavLink to="/" className={cls.navLink} style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', textDecoration: 'none', color: "black" })}>Оптовые поставки</NavLink>
            <NavLink to="/" className={cls.navLink} style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', textDecoration: 'none', color: "black" })}>Контакты</NavLink>
          </div>
          <div className={cls.two}>


            <div>
              <Button onClick={handleOpen} className="flex gap-[3px] items-center text-black font-serif">
                <RoomOutlinedIcon className=" text-black font-normal"/>
              <span className="text-black font-[400] text-[14px] ">{location}</span>
               <ExpandMoreIcon fontSize="small" className="text-black font-normal"/> 
              </Button>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                <Typography id="modal-modal-description" sx={{ mt: 2 ,font:700, fontSize:"35px" }} >
                    Выберите ваш регион:
                  </Typography>
                  {/* <Typography id="modal-modal-description" sx={{ mt: 2 , font:500, fontSize:"18px", padding:"16px 30px", border:"1px dashed #4E9DD3 ", }} onClick={() => handleLocationChange('Санкт-Петербург')}>
                    Санкт-Петербург
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 , font:500, fontSize:"18px", padding:"16px 30px", border:"1px dashed #4E9DD3 ", }} onClick={() => handleLocationChange('Москва')}>
                    Москва
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2, font:500, fontSize:"18px", padding:"16px 30px", border:"1px dashed #4E9DD3 ",  }} onClick={() => handleLocationChange('Казань')}>
                    Казань
                  </Typography> */}

                  {['Санкт-Петербург,Москва,Казань'].map((city,i) => (
                    <Typography 
                    key={i}
                  id="modal-modal-description"
                  sx={{
                    mt:2,
                    color:'#000',
                    fontWeight:500,
                    fontSize:'18px',
                    padding:"18px 30px",
                    border: '1px dashed #4E9DD3',
                    cursor: 'pointer',
                    backgroundColor: location === city ? '#4E9DD3' : 'transparent',
                    '&:hover' : {
                      backgroundColor : location === city ? '#4E9DD3' :  '#f0f0f0',
                    }
                  }}
                  onClick={() => handleLocationChange(city)}

                    >
                      {city}

                    </Typography>
                  ))}
                </Box>
              </Modal>
            </div>


            <a href="tel:0704110383" className={cls.phoneLink}><img src={phoneNumber} alt="phone" /> 0704110383</a>
            <NavLink to="/basket" className={cls.navLink} style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', textDecoration: 'none', color: "black" })}>
              <span className="relative">
                <img src={Bag} alt="" className=" relative " /> <span className="w-[14px] h-[14px] flex items-center justify-center bg-black text-white 
            rounded-lg text-[13px] absolute top-[12px] right-0">4</span>
              </span>
              В корзине (4 товара)</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
