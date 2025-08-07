import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You - Triveda Ayurveda</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #fefcea, #f1da36)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        color: '#333'
      }}>
        <div style={{
          background: '#fff',
          padding: '30px 20px',
          borderRadius: '20px',
          maxWidth: '400px',
          width: '100%',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <Image
            src="/success-check.png"
            alt="Success"
            width={80}
            height={80}
            style={{ marginBottom: '20px' }}
          />
          <h1 style={{ fontSize: '24px', marginBottom: '10px', color: '#2c3e50' }}>
            धन्यवाद! 🙏
          </h1>
          <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
            आपकी जानकारी सफलतापूर्वक भेज दी गई है।<br />
            हमारी टीम अगले 24 घंटों में आपसे संपर्क करेगी।
          </p>

          {/* Optional buttons */}
          <div style={{ marginTop: '25px' }}>
          <Link href="/" legacyBehavior>
            <a style={{
              backgroundColor: '#f1c40f',
              color: '#000',
              padding: '10px 20px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block',
              marginBottom: '10px'
            }}>
              🔙 होम पेज पर लौटें
            </a>
          </Link>
            <br />
            <a href="https://wa.me/9821045611" target="_blank" rel="noopener noreferrer"  style={{
              backgroundColor: '#25D366',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block'
            }}>
              📲 हमें WhatsApp पर जोड़ें
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
