//dependecias
import React from 'react';
import ReactDOM from 'react-dom/client';
//componentes
import Header from './pages/header/header';
import ArticleApresentation from './pages/main/article';
import { Main } from './pages/article/main';
import ArticleMid from './pages/subArticle/main';
import Footer from './pages/footer/footer';
//styles global
import './index.css';

ReactDOM.createRoot(document.getElementById('header') as HTMLElement).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <ArticleApresentation />
   <Main />
   <ArticleMid />
   <Footer />
  </React.StrictMode>
);
