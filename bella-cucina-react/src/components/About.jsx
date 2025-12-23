export default function About() {
  return (
    <section id="about" style={{ backgroundColor: '#fff', padding: '80px 20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600"
              alt="Restaurant"
              style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Content */}
          <div>
            <p style={{ color: '#b8860b', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', marginBottom: '16px' }}>Our Story</p>
            <h2 style={{ fontSize: '36px', fontFamily: 'Georgia, serif', marginBottom: '24px', lineHeight: '1.2' }}>
              A Tradition of Italian Excellence
            </h2>
            <div style={{ width: '60px', height: '2px', backgroundColor: '#b8860b', marginBottom: '24px' }}></div>

            <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '16px' }}>
              Welcome to Bella Cucina, where passion meets tradition. Founded in 1985 by the Rossi family, we brought authentic Italian recipes from the hills of Tuscany.
            </p>
            <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '32px' }}>
              For nearly four decades, we&apos;ve been serving the finest Italian cuisine, made with love and the freshest ingredients.
            </p>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '40px' }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '32px', fontWeight: '700', color: '#b8860b', display: 'block', fontFamily: 'Georgia, serif' }}>40</span>
                <span style={{ fontSize: '12px', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>Years</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '32px', fontWeight: '700', color: '#b8860b', display: 'block', fontFamily: 'Georgia, serif' }}>150+</span>
                <span style={{ fontSize: '12px', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>Recipes</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '32px', fontWeight: '700', color: '#b8860b', display: 'block', fontFamily: 'Georgia, serif' }}>50k+</span>
                <span style={{ fontSize: '12px', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>Guests</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
