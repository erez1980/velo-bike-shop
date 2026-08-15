import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const categories = [
  { title: 'קסדות', subtitle: 'בטיחות שנראית טוב', emoji: '⛑️' },
  { title: 'תאורה', subtitle: 'להיראות, בכל שעה', emoji: '💡' },
  { title: 'תיקים', subtitle: 'כל מה שצריך איתך', emoji: '🎒' },
  { title: 'טיפוח', subtitle: 'לשמור על האופניים', emoji: '🧰' },
]

const products = [
  { name: 'קסדת Urban Flow', description: 'קלילה, מאווררת, מוכנה לעיר', price: '₪289', tag: 'חדש', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=600&q=80' },
  { name: 'פנס קדמי Beam 400', description: 'עוצמה קטנה עם נוכחות גדולה', price: '₪149', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80' },
  { name: 'תיק Saddle Daytrip', description: 'בדיוק בגודל של יום טוב', price: '₪199', tag: 'אהוב', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80' },
  { name: 'ערכת Ride Ready', description: 'כלי דרך, מדבקות ותיקון מהיר', price: '₪119', image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=600&q=80' },
]

function App() {
  const [cart, setCart] = useState(0)
  const [toast, setToast] = useState('')
  const notify = (message) => { setToast(message); window.setTimeout(() => setToast(''), 2600) }
  const add = () => { setCart((value) => value + 1); notify('נוסף לסל. בחירה טובה!') }
  const subscribe = (event) => { event.preventDefault(); event.currentTarget.reset(); notify('ברוכים הבאים למועדון VELO!') }

  return <>
    <div className="topline" />
    <div className="announcement">משלוח חינם מעל <b>₪250</b> · אוספים מהחנות תוך שעתיים</div>
    <header>
      <a className="logo" href="#top" aria-label="VELO"><i className="wheel" />VE<span>LO</span></a>
      <nav aria-label="ניווט ראשי"><a href="#shop">חנות</a><a href="#collections">קטגוריות</a><a href="#story">הסיפור שלנו</a><a href="#club">מועדון רוכבים</a></nav>
      <div className="actions"><button className="icon-btn" aria-label="חיפוש">⌕</button><button className="cart" onClick={() => notify(cart ? `בסל שלך ${cart} פריטים` : 'הסל שלך עדיין מחכה להרפתקה 🚲')}>סל <small>{cart}</small></button></div>
    </header>
    <section className="hero" id="top">
      <div className="hero-copy"><div className="eyebrow">GEAR FOR THE GOOD RIDE</div><h1>הדרך הכי טובה<br />להתחיל <em>לרכוב.</em></h1><p>ציוד חכם, נוח ויפה שמוציא אותך מהבית ומחזיר אותך עם חיוך.</p><a className="primary" href="#shop">לכל האביזרים ←</a></div>
      <div className="hero-image"><span className="photo-label">העיר היא מסלול ההמראה שלך.</span></div>
    </section>
    <main>
      <section id="collections"><div className="section-head"><h2>מה מחפשים היום?</h2><a href="#shop">לכל הקטגוריות ←</a></div><div className="categories">{categories.map((category) => <a className="category" href="#shop" key={category.title}><strong>{category.title}</strong><span>{category.subtitle}</span><div className="emoji">{category.emoji}</div></a>)}</div></section>
      <section className="feature" id="story"><div className="feature-image" /><div className="feature-copy"><div className="eyebrow light">THE VELO WAY</div><h2>פחות פקקים.<br />יותר חיים.</h2><p>אנחנו מאמינים שרכיבה טובה לא חייבת להיות מסובכת. בוחרים את הדברים הנכונים, עולים על האופניים, ויוצאים לדרך.</p><a className="primary sun" href="#club">להכיר אותנו</a></div></section>
      <section id="shop"><div className="section-head"><h2>בחירות של רוכבים</h2><a href="#shop">לכל המוצרים ←</a></div><div className="products">{products.map((product) => <article className="product" key={product.name}>{product.tag && <div className="tag">{product.tag}</div>}<div className="product-image" style={{ backgroundImage: `url(${product.image})` }} /><h3>{product.name}</h3><p>{product.description}</p><div className="price">{product.price}<button className="add" aria-label={`הוספת ${product.name} לסל`} onClick={add}>+</button></div></article>)}</div></section>
      <section className="newsletter" id="club"><h2>רוכבים איתנו?</h2><p>מבצעים, מסלולים וטיפים קטנים שישפרו לך את הרכיבה.</p><form onSubmit={subscribe}><input required type="email" aria-label="כתובת אימייל" placeholder="האימייל שלך" /><button>מצטרפים</button></form></section>
    </main>
    <footer><div className="logo"><i className="wheel" />VE<span>LO</span></div><div className="footer-links"><a href="#shop">משלוחים והחזרות</a><a href="#club">שירות לקוחות</a><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></div><span>© 2026 VELO</span></footer>
    <div className={`toast ${toast ? 'show' : ''}`} role="status">{toast}</div>
  </>
}

createRoot(document.getElementById('root')).render(<App />)
