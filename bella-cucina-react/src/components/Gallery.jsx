import { galleryImages } from '../data/menuData';

export default function Gallery() {
  return (
    <section id="gallery" style={{ backgroundColor: '#1a1a1a', padding: '80px 20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ color: '#b8860b', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', marginBottom: '16px' }}>Gallery</p>
          <h2 style={{ fontSize: '40px', fontFamily: 'Georgia, serif', marginBottom: '16px', color: '#fff' }}>Our Atmosphere</h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: '#b8860b', margin: '0 auto' }}></div>
        </div>

        {/* Fixed Image Grid - 2 rows of 3 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, 200px)',
          gap: '12px'
        }}>
          {galleryImages.slice(0, 6).map((image, index) => (
            <div
              key={index}
              style={{
                overflow: 'hidden',
                backgroundColor: '#333'
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
