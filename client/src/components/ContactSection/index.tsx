import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery'
import {
  ContactSectionContainer,
  ImageContainer,
  SobreImage,
  TextContainer,
  Title,
  ParagraphContainer,
} from './style';
import { ContactImg } from 'assets'; // Assuming you have this image imported

export default function ContactSection() {
    const isSmallScreen = useMediaQuery('(max-width: 600px)'); // Adjust the maximum width as needed
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here using formData
    console.log('Form data:', formData);
    // You can perform API requests, validation, or any other necessary action here
    // Reset form after submission if needed
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const buttonStyles = {
    color: '#004a8c',
    border: '3px solid #004a8c',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  };

  return (
    <ContactSectionContainer>
      <ImageContainer />
      <SobreImage src={ContactImg} alt='Somos uma comunidade'/>
      <ImageContainer />
      <TextContainer>
          <Title>CONTATO</Title>
          <ParagraphContainer>
            Se interessou pela nossa solução ou quer fazer parte dela? Tem mais alguma dúvida? Não exite em falar conosco!
          </ParagraphContainer>
          <TextField
            id="name"
            label="DIGITE SEU NOME"
            variant="outlined"
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            sx={{
                width: isSmallScreen ? '100%' : '558px', // Change width based on screen size
                height: '40px',
              }}
            InputLabelProps={{
              sx: {
                color: '#004a8c',
                fontWeight: 'bold',
              },
            }}
            InputProps={{
              sx: {
                '& input::placeholder': {
                  color: '#004a8c',
                  fontWeight: 'bold',
                },
                '& fieldset': {
                  borderColor: '#004a8c !important',
                },
              },
            }}
          />
          <TextField
            id="email"
            label="DIGITE SEU E-MAIL"
            variant="outlined"
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            sx={{
                width: isSmallScreen ? '100%' : '558px', // Change width based on screen size
                height: '40px',
              }}
            InputLabelProps={{
              sx: {
                color: '#004a8c',
                fontWeight: 'bold',
              },
            }}
            InputProps={{
              sx: {
                '& input::placeholder': {
                  color: '#004a8c',
                  fontWeight: 'bold',
                },
                '& fieldset': {
                  borderColor: '#004a8c !important',
                },
              },
            }}
          />
          <TextField
            id="phone"
            label="DIGITE SEU TELEFONE"
            variant="outlined"
            margin="normal"
            value={formData.phone}
            onChange={handleChange}
            sx={{
                width: isSmallScreen ? '100%' : '558px', // Change width based on screen size
                height: '40px',
              }}
            InputLabelProps={{
              sx: {
                color: '#004a8c',
                fontWeight: 'bold',
              },
            }}
            InputProps={{
              sx: {
                '& input::placeholder': {
                  color: '#004a8c',
                  fontWeight: 'bold',
                },
                '& fieldset': {
                  borderColor: '#004a8c !important',
                },
              },
            }}
          />
          <TextField
            id="message"
            label="DIGITE SUA MENSAGEM"
            variant="outlined"
            margin="normal"
            multiline
            rows={5}
            value={formData.message}
            onChange={handleChange}
            sx={{
                width: isSmallScreen ? '100%' : '558px', // Change width based on screen size
              }}
            InputLabelProps={{
              sx: {
                color: '#004a8c',
                fontWeight: 'bold',
              },
            }}
            InputProps={{
              sx: {
                '& input::placeholder': {
                  color: '#004a8c',
                  fontWeight: 'bold',
                },
                '& fieldset': {
                  borderColor: '#004a8c !important',
                },
              },
            }}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ width: '193px', height: '40px' }} style={buttonStyles} onSubmit={handleSubmit}>
            SAIBA MAIS
          </Button>
      </TextContainer>
    </ContactSectionContainer>
  );
}
