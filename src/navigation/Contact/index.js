import React, { useContext } from 'react';
import ProfileContext from '../../components/ProfileProvider';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  text-align: left;
`;

const Field = styled.div`
  font-size: 1.2em;
  margin: 0 0 16px 0;
  label {
    font-size: 0.9em;
    display: block;
  }
  input {
    font-size: 1em;
    width: 100%;
    height: 2em;
    border: none;
  }
  textarea {
    border: none;
    font-size: 1em;
    width: 100%;
  }
`;

const Button = styled.button`
  font-size: 1.2em;
  font-weight: bold;
  width: 50%;
  color: #333;
  background: #4bd21f;
  padding: 8px;
  border: none;
`;

const SocialContainer = styled.div`
  margin: 16px 0;
  display: flex;
  justify-content: center;
  a {
    margin: 0 8px;
  }
`;

const SocialIcon = styled.img`
  max-height: 80px;
`;

export default function Contact() {
  const { contact } = useContext(ProfileContext);
  return (
    <Container>
      <p style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '32px', fontStyle: 'italic' }}>Reach me at,</p>
      <SocialContainer>
        <a target="_blank" href={contact.socialMedia.linkedin.url}>
          <SocialIcon src={contact.socialMedia.linkedin.logo} />
        </a>
        <a target="_blank" href={contact.socialMedia.facebook.url}>
          <SocialIcon src={contact.socialMedia.facebook.logo} />
        </a>
        <a target="_blank" href={contact.socialMedia.twitter.url}>
          <SocialIcon src={contact.socialMedia.twitter.logo} />
        </a>
      </SocialContainer>

      <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '72px', fontStyle: 'italic' }}>
        If you live on a different planet,
      </p>

      <Field>
        <label>Name</label>
        <input type="text" />
      </Field>
      <Field>
        <label>Email</label>
        <input type="text" />
      </Field>
      <Field>
        <label>Message</label>
        <textarea rows="3" />
      </Field>
      <div style={{ textAlign: 'center' }}>
        <Button>Work in progress...</Button>
      </div>
    </Container>
  );
}
