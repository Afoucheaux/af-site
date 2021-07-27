import React, {useState, useEffect} from 'react';
import Header from '../../components/Header/Header';

const DetailView = ({ id }) => {
  return (
    <main>
      <Header />
      <p>{id}</p>
    </main>
  )
}

export default DetailView
