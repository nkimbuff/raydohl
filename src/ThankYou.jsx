export default function ThankYou() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: 'url(/photo/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="rounded-2xl shadow-xl max-w-sm w-full p-6 backdrop-blur-md text-center"
        style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
      >
        <h1 className="text-2xl font-bold mb-2">See You Soon! 🎉</h1>
        <p className="text-gray-900">Thanks for RSVPing. We can't wait to celebrate with you!</p>
      </div>
    </div>
  );
}