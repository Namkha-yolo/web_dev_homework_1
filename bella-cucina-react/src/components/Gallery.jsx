import { galleryImages } from '../data/menuData';

export default function Gallery() {
  return (
    <section id="gallery" style={{ backgroundColor: '#1a1a1a', padding: '80px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ color: '#b8860b', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', marginBottom: '16px' }}>Gallery</p>
          <h2 style={{ fontSize: '48px', fontFamily: 'Georgia, serif', marginBottom: '16px', color: '#fff' }}>Our Atmosphere</h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: '#b8860b', margin: '0 auto' }}></div>
        </div>

        {/* Image Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px'
        }}>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                overflow: 'hidden',
                height: '250px'
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
