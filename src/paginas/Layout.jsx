import React from 'react';
import Footer from "../componentes/Footer"
import Header from "../componentes/Header"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;