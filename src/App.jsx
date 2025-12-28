import { useState } from "react";

export default function BabyBirthdayRSVP() {
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
    <div className="min-h-screen bg-sage-100 flex items-center justify-center p-4 relative" style={{backgroundImage: 'url(/baby-bg-pattern.png)', backgroundRepeat: 'repeat'}}>
      {/* Baby Photo Background */}
      <img src="/photo/baby.jpg" alt="Baby" className="absolute top-0 left-0 w-full h-96 object-cover opacity-70" />

      <div className="rounded-2xl shadow-xl max-w-md w-full p-6 bg-white/90 backdrop-blur-md relative z-10 -mt-32">
        <h1 className="text-2xl font-bold text-center mb-2 relative z-20">Ray's First Birthday 🎉</h1>
        <p className="text-center text-gray-600 mb-2 relative z-20">We can’t wait to celebrate with you!</p>

        {/* Event Details Section */}
        <div className="mb-4 text-center p-4 bg-pink-50 rounded-lg shadow-inner relative z-20">
          <h2 className="text-lg font-semibold">🎂 Event Details 🎂</h2>
          <p className="text-gray-700 mt-1">📅 Date: March 14, 2025</p>
          <p className="text-gray-700">⏰ Time: 12:00 PM - 3:00 PM EST</p>
          <p className="text-gray-700">📍 Location: Trummer's on Main</p>
          <p className="text-gray-700">🏠 Address: 7134 Main St, Clifton, VA 20124</p>
        </div>

        {/* Attendance Section */}
        <div className="mb-4 relative z-20">
          <label className="block text-sm font-medium mb-1">Will you be attending?</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="attending" value="yes" checked={form.attending === "yes"} onChange={handleChange} /> Yes
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="attending" value="no" checked={form.attending === "no"} onChange={handleChange} /> No
            </label>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 relative z-20">
          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input type="email" name="email" required onChange={handleChange} className="w-full mt-1 rounded-lg border p-2" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Number of Adults</label>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => setForm({ ...form, adults: Math.max(0, Number(form.adults) - 1) })} className="px-3 py-1 rounded-full bg-gray-200 text-lg">−</button>
              <span className="w-8 text-center font-semibold">{form.adults}</span>
              <button type="button" onClick={() => setForm({ ...form, adults: Number(form.adults) + 1 })} className="px-3 py-1 rounded-full bg-gray-200 text-lg">+</button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Number of Kids</label>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => setForm({ ...form, kids: Math.max(0, Number(form.kids) - 1) })} className="px-3 py-1 rounded-full bg-gray-200 text-lg">−</button>
              <span className="w-8 text-center font-semibold">{form.kids}</span>
              <button type="button" onClick={() => setForm({ ...form, kids: Number(form.kids) + 1 })} className="px-3 py-1 rounded-full bg-gray-200 text-lg">+</button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Kids Meals Needed</label>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => setForm({ ...form, kidsMeals: Math.max(0, Number(form.kidsMeals) - 1) })} className="px-3 py-1 rounded-full bg-gray-200 text-lg">−</button>
              <span className="w-8 text-center font-semibold">{form.kidsMeals}</span>
              <button type="button" onClick={() => setForm({ ...form, kidsMeals: Number(form.kidsMeals) + 1 })} className="px-3 py-1 rounded-full bg-gray-200 text-lg">+</button>
            </div>
          </div>

          <button type="submit" className="w-full bg-pink-400 text-white rounded-xl py-2 font-semibold hover:bg-pink-500 transition">Submit RSVP</button>
        </form>

        <p className="text-xs text-center text-gray-400 mt-4 relative z-20">You can personalize this page with baby photos and themed backgrounds!</p>
      </div>
    </div>
  );
}