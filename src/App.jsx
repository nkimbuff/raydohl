import { useState } from "react";
import './index.css'; // import the CSS file

export default function App() {
  const [form, setForm] = useState({
    attending: "yes",
    email: "",
    adults: 1,
    kids: 0,
    kidsMeals: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("RSVP submitted! (Hook this up to a backend or Google Form)");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative p-4"
      style={{
        backgroundImage: 'url(/photo/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Card */}
      <div className="rounded-2xl shadow-xl max-w-sm w-full p-4 bg-white/90 backdrop-blur-md relative z-10" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }} >
        <h1 className="text-2xl font-bold text-center mb-2 text-gray-900">Ray's First Birthday 🎉</h1>
        <p className="text-center mb-2 text-gray-900">We can’t wait to celebrate with you!</p>

        {/* Event Details */}
        <div className="mb-4 text-center p-3 bg-pink-50/90 rounded-lg shadow-inner" style={{ backgroundColor: 'rgba(255, 192, 203, 0.9)' }} >
          <h2 className="text-lg font-semibold text-gray-900">🎂 Event Details 🎂</h2>
          <p className="text-gray-900 mt-1">📅 Date: March 14, 2025</p>
          <p className="text-gray-900">⏰ Time: 12:00 PM - 3:00 PM EST</p>
          <p className="text-gray-900">📍 Location: Trummer's on Main</p>
          <p className="text-gray-900">🏠 Address: 7134 Main St, Clifton, VA 20124</p>
        </div>

        {/* Attendance */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-900">Will you be attending?</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-gray-900">
              <input
                type="radio"
                name="attending"
                value="yes"
                checked={form.attending === "yes"}
                onChange={handleChange}
              /> Yes
            </label>
            <label className="flex items-center gap-2 text-gray-900">
              <input
                type="radio"
                name="attending"
                value="no"
                checked={form.attending === "no"}
                onChange={handleChange}
              /> No
            </label>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900">Email Address</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
            />
          </div>

          {/* Adults */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-900">Number of Adults</label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setForm({ ...form, adults: Math.max(0, Number(form.adults) - 1) })}
                className="px-3 py-1 rounded-full bg-gray-200 text-lg"
              >
                −
              </button>
              <span className="w-8 text-center font-semibold text-gray-900">{form.adults}</span>
              <button
                type="button"
                onClick={() => setForm({ ...form, adults: Number(form.adults) + 1 })}
                className="px-3 py-1 rounded-full bg-gray-200 text-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Kids */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-900">Number of Kids</label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setForm({ ...form, kids: Math.max(0, Number(form.kids) - 1) })}
                className="px-3 py-1 rounded-full bg-gray-200 text-lg"
              >
                −
              </button>
              <span className="w-8 text-center font-semibold text-gray-900">{form.kids}</span>
              <button
                type="button"
                onClick={() => setForm({ ...form, kids: Number(form.kids) + 1 })}
                className="px-3 py-1 rounded-full bg-gray-200 text-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Kids Meals */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-900">Kids Meals Needed</label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setForm({ ...form, kidsMeals: Math.max(0, Number(form.kidsMeals) - 1) })}
                className="px-3 py-1 rounded-full bg-gray-200 text-lg"
              >
                −
              </button>
              <span className="w-8 text-center font-semibold text-gray-900">{form.kidsMeals}</span>
              <button
                type="button"
                onClick={() => setForm({ ...form, kidsMeals: Number(form.kidsMeals) + 1 })}
                className="px-3 py-1 rounded-full bg-gray-200 text-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-pink-400 text-white rounded-xl py-2 font-semibold hover:bg-pink-500 transition"
          >
            Submit RSVP
          </button>
        </form>
      </div>
    </div>
  );
}