import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Abhinandan - Enterpreneur & Technical Expert';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom, #ffffff, #f3f4f6)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <h1
            style={{
              fontSize: '60px',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #1e40af, #3b82f6)',
              backgroundClip: 'text',
              color: 'transparent',
              margin: '0',
              textAlign: 'center',
            }}
          >
            Abhinandan
          </h1>
          <h2
            style={{
              fontSize: '32px',
              color: '#4b5563',
              margin: '0',
              textAlign: 'center',
            }}
          >
            Enterpreneur & Technical Expert
          </h2>
          <p
            style={{
              fontSize: '24px',
              color: '#6b7280',
              margin: '0',
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            Specializing in Next.js, FastAPI, Kubernetes, and Cloud Infrastructure
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
