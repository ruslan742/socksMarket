import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#f5f5f5',
        padding: '1rem 0',
        textAlign: 'center',
        width: '100%',
        position: 'absolute',
        bottom: 0,
      }}
    >
      <div>
        <p>Адрес магазина: г. Москва, ул. Пушкина, д. 10</p>
        <p>Почта поддержки: support@example.com</p>
      </div>
    </footer>
  );
};

export default Footer;
