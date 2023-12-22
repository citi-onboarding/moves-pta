import { useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import Input  from '../InputComponent/index';
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

type ContactSectionProps = {
  id?: string;
};
export default function ContactSection({ id }: ContactSectionProps) {
    const isSmallScreen = useMediaQuery('(max-width: 600px)'); // Adjust the maximum width as needed
    const isMediumScreen = useMediaQuery('(max-width: 1200px)'); // Adjust the maximum width as needed
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/sendEmail', formData);
      console.log('Email sent:', response.data.message); // Log the response
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle error scenarios
    }
  };

  const buttonStyles = {
    color: '#004a8c',
    border: '3px solid #004a8c',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  };

  const formStylesMediumScreen = {
    width: '100%',
    alignItems: 'center',
  };

  return (
      <ContactSectionContainer id={id}>
        <ImageContainer/>
        <SobreImage src={ContactImg} alt='Somos uma comunidade'/>
        <ImageContainer />
        <TextContainer >
            <Title>CONTATO</Title>
            <ParagraphContainer>
              Se interessou pela nossa solução ou quer fazer parte dela? Tem mais alguma dúvida? Não exite em falar conosco!
            </ParagraphContainer>
            <form onSubmit={handleSubmit} style={isMediumScreen ? { ...formStyles, ...formStylesMediumScreen } : formStyles}>
                <Input id="name" label="DIGITE SEU NOME" value={formData.name} onChange={handleChange} rows={1} isSmallScreen={isSmallScreen} />
                <Input id="email" label="DIGITE SEU E-MAIL" value={formData.email} onChange={handleChange} rows={1} isSmallScreen={isSmallScreen} />
                <Input id="phone" label="DIGITE SEU TELEFONE" value={formData.phone} onChange={handleChange} rows={1} isSmallScreen={isSmallScreen} />
                <Input id="message" label="DIGITE SUA MENSAGEM" value={formData.message} onChange={handleChange} rows={5} isSmallScreen={isSmallScreen} />
                <Button type="submit" variant="contained" color="primary" sx={{ width: '193px', height: '40px' }} style={buttonStyles}>
                  SAIBA MAIS
                </Button>
            </form>
        </TextContainer>
      </ContactSectionContainer>
  );
}
