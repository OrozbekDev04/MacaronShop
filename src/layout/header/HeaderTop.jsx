import { NavLink } from "react-router-dom";
import cls from "./Header.module.css";
import Bag from "../../assets/svg/Ayana/bag.svg"
import {Box, Modal} from "@mui/material";

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState} from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const HeaderTop = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={cls.headerBackground}>
      <div className={cls.container}>
        <div className={cls.Top}>
          <div className={cls.one}>
            <NavLink to="/" className={cls.navLink} style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', textDecoration: 'none', color: "black" })}>Гарантия свежести</NavLink>
            <NavLink to="/" className={cls.navLink} style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', textDecoration: 'none', color: "black" })}>Доставка и оплата</NavLink>
            <NavLink to="/" className={cls.navLink} style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', textDecoration: 'none', color: "black" })}>Оптовые поставки</NavLink>
            <NavLink to="/" className={cls.navLink} style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', textDecoration: 'none', color: "black" })}>Контакты</NavLink>
          </div>
          <div className={cls.two}>


         <div>
            <Button onClick={handleOpen} className="flex gap-[5px] items-center">Местоположение <select>
            </select></Button>
          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Санкт-Петербург
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Москва
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Казань
              </Typography>
            </Box>
          </Modal>
        </div>


        {/*<select className="bg-[#F7EBE5]">*/}
        {/*      <option value="">Санкт-Петербург</option>*/}
        {/*      <option value="">Москва</option>*/}
        {/*      <option value="">Казань</option>*/}
        {/*    </select>*/}
            <a href="tel:0704110383" className={cls.phoneLink}>0704110383</a>
            <NavLink to="/" className={cls.navLink} style={({ isActive }) => ({ fontWeight: isActive ? '' : 'normal', textDecoration: 'none', color: "black" })}>
              <img src={Bag} alt=""/></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
