// ModalContent.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const ModalContent = ({ title, options }) => {
    return (
        <Box p={2}>
            <Typography variant="h6">{title}</Typography>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
        </Box>
    );
};

export default ModalContent;
