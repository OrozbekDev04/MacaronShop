import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import TelegramIcon from '@mui/icons-material/Telegram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';

const actions = [
    { icon: <LocalPhoneIcon/>, name: 'Phone', backgroundColor:'red' },
    { icon: <TelegramIcon />, name: 'Telegram' },
    { icon: <WhatsAppIcon/>, name: 'WhatsApp' },
];

const App = () => {
    const [open, setOpen] = useState(false);
    const [showText, setShowText] = useState(true);
    const [emoji, setEmoji] = useState("😊");

    const handleOpen = () => {
        setOpen(true);
        setEmoji("😁");
    };

    const handleClose = () => {
        setOpen(false);
        setEmoji("😊");
    };

    const toggleText = () => {
        setShowText(!showText);
    };

    return (
            <Box sx={{zIndex: 30,position:'fixed', top: '180px', right: '50px', height: 520, transform: 'translateZ(0px)', flexGrow: 1 }}>
                {showText && !open && (
                    <Paper elevation={3}
                           sx={{
                               position: 'fixed',
                               bottom: 100,
                               right: 40,
                               paddingY: '10px',
                               paddingX:'30px',
                               textAlign: 'center',
                           }}
                    >
                        <div style={{position:"relative"}} className="w-[140px]">
                            <Typography variant="body1">
                                <strong>Есть вопросы?</strong>
                            </Typography>
                            <Typography variant="body2">
                                Напишите, поможем
                            </Typography>
                        </div>
                        <CloseIcon onClick={toggleText}
                                   style={{
                                       background:'#00000063',borderRadius:'50%',
                                       cursor: 'pointer', position:'absolute',
                                       right:'-10px', bottom:'50px'}}/>
                    </Paper>
                )}
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 36, right: 36 }}
                    icon={
                        <div
                            style={{ fontSize: '4rem' }}
                            onClick={open ? handleClose : handleOpen}>
                            {emoji}
                        </div>
                    }
                    open={open}
                    direction="up"
                    onOpen={handleOpen}
                    onClose={handleClose}
                >
                    {actions.map((action, index) => (
                        <SpeedDialAction
                            key={index}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                    ))}
                </SpeedDial>
            </Box>
    );
};

export default App;
