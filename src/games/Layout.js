import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Layout (props){
  console.log('layoutprops', props);
  return (
    <div>
      <Header {...props}/>
      <main className="mdl-layout__content" style={{ display: 'flex' }}>
        <div className="page-content" style={{ margin: '50px auto', ...props.style }}>
          {props.children}
        </div>
      </main>
      <Footer />
    </div>
  );
  
}




export default Layout;
