import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const [currentView, setCurrentView] = useState({
        type: 'exterior',
        image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: 'BMW 5 Series Exterior'
    });

    const [zoomLevel, setZoomLevel] = useState(1);

    const carViews = {
        exterior: {
            image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            alt: 'BMW 5 Series Exterior'
        },
        interior: {
            image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            alt: 'BMW 5 Series Interior'
        }
    };

    const handleViewChange = (viewType) => {
        setCurrentView({
            type: viewType,
            ...carViews[viewType]
        });
        // Update active button
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.toLowerCase() === viewType) {
                btn.classList.add('active');
            }
        });
    };

    const handleTourNavigation = (direction) => {
        const views = Object.keys(carViews);
        const currentIndex = views.indexOf(currentView.type);
        let newIndex;

        if (direction === 'next') {
            newIndex = (currentIndex + 1) % views.length;
        } else {
            newIndex = (currentIndex - 1 + views.length) % views.length;
        }

        handleViewChange(views[newIndex]);
    };

    const handleZoom = (action) => {
        const newZoom = action === 'in' ? zoomLevel + 0.2 : zoomLevel - 0.2;
        if (newZoom >= 0.5 && newZoom <= 2) {
            setZoomLevel(newZoom);
            const tourImg = document.querySelector('.tour-img');
            if (tourImg) {
                tourImg.style.transform = `scale(${newZoom})`;
            }
        }
    };

    const startVirtualTour = () => {
        // Reset zoom
        setZoomLevel(1);
        const tourImg = document.querySelector('.tour-img');
        if (tourImg) {
            tourImg.style.transform = 'scale(1)';
        }
        // Start with exterior view
        handleViewChange('exterior');
    };

    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Premium Car Rental Experience</h1>
                    <p>Discover luxury, comfort, and reliability with DriveEase. Your journey deserves the perfect ride.</p>
                    <div className="hero-buttons">
                        <a href="/cars" className="cta-button primary">Explore Our Fleet</a>
                        <a href="/book" className="cta-button secondary">Book Now</a>
                    </div>
                </div>
            </section>

            <section className="search-section">
                <div className="search-container">
                    <h2>Find Your Perfect Ride</h2>
                    <div className="search-box">
                        <input type="text" placeholder="Search by car name, brand, or type..." />
                        <button className="search-button">Search</button>
                    </div>
                    <div className="filter-options">
                        <select>
                            <option value="">Car Type</option>
                            <option value="sedan">Sedan</option>
                            <option value="suv">SUV</option>
                            <option value="luxury">Luxury</option>
                        </select>
                        <select>
                            <option value="">Price Range</option>
                            <option value="budget">Budget</option>
                            <option value="mid">Mid-Range</option>
                            <option value="premium">Premium</option>
                        </select>
                        <select>
                            <option value="">Transmission</option>
                            <option value="automatic">Automatic</option>
                            <option value="manual">Manual</option>
                        </select>
                    </div>
                </div>
            </section>

            <section className="features">
                <h2>Why Choose DriveEase?</h2>
                <div className="feature-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🚗</div>
                        <h3>Premium Fleet</h3>
                        <p>Choose from our extensive collection of luxury and economy vehicles</p>
                        <ul className="feature-list">
                            <li>Regular maintenance checks</li>
                            <li>Latest model vehicles</li>
                            <li>Wide range of options</li>
                        </ul>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💰</div>
                        <h3>Best Value</h3>
                        <p>Competitive rates with no hidden charges and flexible rental periods</p>
                        <ul className="feature-list">
                            <li>Transparent pricing</li>
                            <li>Flexible rental terms</li>
                            <li>Special member discounts</li>
                        </ul>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🛡️</div>
                        <h3>Fully Insured</h3>
                        <p>Comprehensive coverage for worry-free driving experience</p>
                        <ul className="feature-list">
                            <li>24/7 roadside assistance</li>
                            <li>Full insurance coverage</li>
                            <li>Zero liability options</li>
                        </ul>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">⏰</div>
                        <h3>24/7 Support</h3>
                        <p>Round-the-clock customer assistance and roadside help</p>
                        <ul className="feature-list">
                            <li>Instant chat support</li>
                            <li>Emergency assistance</li>
                            <li>Quick response time</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="special-offers">
                <h2>Special Offers</h2>
                <div className="offers-grid">
                    <div className="offer-card weekend">
                        <div className="offer-content">
                            <h3>Weekend Special</h3>
                            <p>Get 20% off on weekend rentals</p>
                            <div className="offer-details">
                                <span className="discount">20% OFF</span>
                                <span className="validity">Valid till Dec 31, 2024</span>
                            </div>
                            <a href="/cars" className="offer-button">Book Now</a>
                        </div>
                    </div>
                    <div className="offer-card long-term">
                        <div className="offer-content">
                            <h3>Long Term Rental</h3>
                            <p>Special rates for monthly rentals</p>
                            <div className="offer-details">
                                <span className="discount">30% OFF</span>
                                <span className="validity">Minimum 30 days</span>
                            </div>
                            <a href="/cars" className="offer-button">Learn More</a>
                        </div>
                    </div>
                    <div className="offer-card first-time">
                        <div className="offer-content">
                            <h3>First Time User</h3>
                            <p>Special welcome discount</p>
                            <div className="offer-details">
                                <span className="discount">15% OFF</span>
                                <span className="validity">First booking only</span>
                            </div>
                            <a href="/signup" className="offer-button">Sign Up Now</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="popular-cars">
                <h2>Popular Choices</h2>
                <div className="car-grid">
                    <div className="car-card">
                        <div className="car-image sedan"></div>
                        <h3>Sedan</h3>
                        <p>Perfect for business trips and family outings</p>
                        <a href="/cars" className="car-link">View Sedans</a>
                    </div>
                    <div className="car-card">
                        <div className="car-image suv"></div>
                        <h3>SUV</h3>
                        <p>Ideal for adventure and group travel</p>
                        <a href="/cars" className="car-link">View SUVs</a>
                    </div>
                    <div className="car-card">
                        <div className="car-image luxury"></div>
                        <h3>Luxury</h3>
                        <p>Experience premium comfort and style</p>
                        <a href="/cars" className="car-link">View Luxury</a>
                    </div>
                </div>
            </section>

            <section className="availability-section">
                <h2>Availability</h2>
                <div className="availability-grid">
                    <div className="availability-card">
                        <div className="car-image sedan"></div>
                        <div className="availability-info">
                            <h3>Toyota Camry</h3>
                            <div className="availability-status available">
                                <span className="status-dot"></span>
                                Available Now
                            </div>
                            <div className="availability-details">
                                <p>Next available: Today</p>
                                <p>Location: Downtown Branch</p>
                                <div className="price-tag">$45/day</div>
                            </div>
                        </div>
                    </div>
                    <div className="availability-card">
                        <div className="car-image suv"></div>
                        <div className="availability-info">
                            <h3>Honda CR-V</h3>
                            <div className="availability-status limited">
                                <span className="status-dot"></span>
                                Only 2 Left
                            </div>
                            <div className="availability-details">
                                <p>Next available: Tomorrow</p>
                                <p>Location: Airport Branch</p>
                                <div className="price-tag">$55/day</div>
                            </div>
                        </div>
                    </div>
                    <div className="availability-card">
                        <div className="car-image luxury"></div>
                        <div className="availability-info">
                            <h3>Mercedes E-Class</h3>
                            <div className="availability-status low">
                                <span className="status-dot"></span>
                                Last One
                            </div>
                            <div className="availability-details">
                                <p>Next available: In 3 days</p>
                                <p>Location: Premium Branch</p>
                                <div className="price-tag">$95/day</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="virtual-tour">
                <h2>Virtual Car Tour</h2>
                <div className="tour-container">
                    <div className="tour-viewer">
                        <div className="tour-controls">
                            <button className="tour-btn prev" onClick={() => handleTourNavigation('prev')}>←</button>
                            <div className="view-options">
                                <button className="view-btn active" onClick={() => handleViewChange('exterior')}>Exterior</button>
                                <button className="view-btn" onClick={() => handleViewChange('interior')}>Interior</button>
                            </div>
                            <button className="tour-btn next" onClick={() => handleTourNavigation('next')}>→</button>
                        </div>
                        <div className="tour-content">
                            <div className="tour-image">
                                <img
                                    src={currentView.image}
                                    alt={currentView.alt}
                                    className="tour-img"
                                />
                                <div className="zoom-controls">
                                    <button className="zoom-btn" onClick={() => handleZoom('in')}>+</button>
                                    <button className="zoom-btn" onClick={() => handleZoom('out')}>-</button>
                                </div>
                            </div>
                            <div className="tour-info">
                                <h3>360° Virtual Tour</h3>
                                <p>Explore our premium vehicles in detail</p>
                                <div className="tour-features">
                                    <div className="feature">
                                        <span className="feature-icon">🔄</span>
                                        <span>360° View</span>
                                    </div>
                                    <div className="feature">
                                        <span className="feature-icon">🔍</span>
                                        <span>Zoom In/Out</span>
                                    </div>
                                    <div className="feature">
                                        <span className="feature-icon">🎥</span>
                                        <span>Video Tour</span>
                                    </div>
                                </div>
                                <button className="start-tour-btn" onClick={startVirtualTour}>Start Virtual Tour</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <h2>What Our Customers Say</h2>
                <div className="testimonial-grid">
                    <div className="testimonial-card">
                        <div className="rating">★★★★★</div>
                        <p>"Exceptional service and amazing cars. The booking process was smooth and the staff was very helpful."</p>
                        <div className="customer-info">
                            <strong>John Smith</strong>
                            <span>Business Traveler</span>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="rating">★★★★★</div>
                        <p>"Best car rental experience ever! The cars are well-maintained and the prices are reasonable."</p>
                        <div className="customer-info">
                            <strong>Sarah Johnson</strong>
                            <span>Family Vacation</span>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="rating">★★★★★</div>
                        <p>"Professional service and great selection of vehicles. Will definitely use DriveEase again!"</p>
                        <div className="customer-info">
                            <strong>Mike Brown</strong>
                            <span>Weekend Getaway</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-content">
                    <h2>Ready to Start Your Journey?</h2>
                    <p>Book your perfect ride today and experience the DriveEase difference.</p>
                    <a href="/cars" className="cta-button primary">Get Started</a>
                </div>
            </section>
        </div>
    );
};

export default Home; 