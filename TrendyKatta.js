import React from "react";
import "./Home.css";

export default function TrendyKatta() {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo-menu">
          <div className="menu-icon">☰</div>
          <div className="logo">TRENDY KATTA</div>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search...." />
        </div>
        <div className="profile-icon">👤</div>
      </header>

      <nav className="nav">
        <a href="#">HOME</a>
        <a href="#">OUR PRODUCTS ▾</a>
        <a href="#">CART</a>
        <a href="#">FAQ</a>
        <a href="#">ABOUT US</a>
      </nav>

      <section className="hero">
        <h1>WELCOME TO <span>TRENDY KATTA</span></h1>
        <p className="subtitle">Gifts Made Easy</p>
        <p className="description">
          Discover unique, thoughtful gifts for every occasion. From personalized keepsakes to curated gift boxes, we make it easy to surprise and delight your loved ones. Fast delivery, beautiful packaging, unforgettable moments.
        </p>
        <button className="cta-button">Start searching for your perfect gift →</button>
      </section>

      <section className="new-items">
        <h2>NEW ITEMS</h2>
        <div className="items-grid">
          <div className="item">
            <div className="item-image">ITEM 1</div>
            <p className="item-title">TITLE</p>
          </div>
          <div className="item">
            <div className="item-image">ITEM 2</div>
            <p className="item-title">TITLE</p>
          </div>
          <div className="item">
            <div className="item-image">ITEM 3</div>
            <p className="item-title">TITLE</p>
          </div>
        </div>
      </section>

      <section className="bestsellers">
        <h2>RECENT BESTSELLERS....</h2>
        <div className="carousel">
          <button className="arrow">◀</button>
          <div className="product-card">PRODUCTS</div>
          <button className="arrow">▶</button>
        </div>
      </section>

      <section className="feedbacks">
        <h2>FEEDBACKS</h2>
        <div className="feedback-carousel">
          <button className="arrow">◀</button>
          <div className="feedback-card">
            <p className="username">by @anuva</p>
            <p className="comment">Cutest gift ever. My bestie legit cried 😭✨</p>
          </div>
          <button className="arrow">▶</button>
        </div>
      </section>

      <section className="goodbye-note">
        <p>Thanks for stopping by 💖</p>
        <p>Whether it’s a birthday, a breakup, or just because — we’re here to help you give a little joy, one thoughtful gift at a time. Stay kind, stay cozy, and don’t forget:</p>
        <p className="highlight">The best gifts come from the heart (with a little help from us 😉).</p>
        <p>Love,<br />By Trendy Katta:✨🎁</p>
      </section>

      <footer className="footer">
        <div className="footer-links">
          <a href="#">SUPPORT</a>
          <a href="#">FAQ</a>
          <a href="#">TERMS & CONDITIONS</a>
          <a href="#">ABOUT US</a>
          <a href="#">CONTACTS</a>
        </div>
        <div className="socials">
          <p>OUR SOCIALS :</p>
          <span>📷</span>
        </div>
      </footer>
    </div>
  );
}