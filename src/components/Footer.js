import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Подпишись на нашу рассылку, что бы получать лучшие предложения!
                </p>
                <p className="footer-subscription-text">
                    От рассылок можно отписаться в любое время.
                </p>
                <div className="input-areas">
                    <form>
                        <input
                            type="email"
                            name="email"
                            placeholder="Ваш email"
                            className="footer-input"
                        />
                        <Button buttonStyle="btn--outline">Подписка</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>О нас</h2>
                        <Link to='/sign-up'>Как этоработает</Link>
                        <Link to='/'>Рекомендации</Link>
                        <Link to='/'>Карьера</Link>
                        <Link to='/'>Инвесторам</Link>
                        <Link to='/'>Условия использования</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Связаться с нами</h2>
                        <Link to='/'>Контакты</Link>
                        <Link to='/'>Поддержка</Link>
                        <Link to='/'>Направления</Link>
                        <Link to='/'>Спонсорство</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Видео</h2>
                        <Link to='/'>Вступительное видео</Link>
                        <Link to='/'>Представительства</Link>
                        <Link to='/'>Агенство</Link>
                        <Link to='/'>Блог</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Социальные медиа</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            ПТШВ
              <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className='website-rights'>ПТШВ © 2020</small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link
                            className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link
                            className='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer 