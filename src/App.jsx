import { useState } from "react";
import './index.css';
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    attending: "yes",
    name: "",
    email: "",
    adults: 1,
    kids: 0,
    kidsMeals: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx1djaxr8Qg6I1xHBB5FEJc3f1tt0G7BmClFvlx9B0fFJeqq2_6XpGCIhmBtqnaEzlM/exec",
        {
          method: "POST",
          body: JSON.stringify(form),
        }
      );

      const result = await response.json();
      if (result.status === "success") {
        navigate("/thank-you");
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      alert("Error submitting RSVP: " + error.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative p-4"
      style={{
        backgroundImage: "url(/photo/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Card */}
      <div
        className="relative z-10 rounded-2xl shadow-xl max-w-sm w-full p-5 backdrop-blur-md"
        style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
      >
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-900">
          Ray's First Birthday 🎉
        </h1>
        <p className="text-center text-gray-700 text-sm mt-1">
          레이의 첫 번째 생일에 초대합니다
        </p>

        <p className="text-center text-gray-800 mt-3">
          We can’t wait to celebrate with you!
          <br />
          <span className="text-sm text-gray-600">
            함께 축하해 주시길 기다릴게요
          </span>
        </p>

        {/* Event Details */}
        <div
          className="mt-4 mb-5 p-3 rounded-lg text-center"
          style={{ backgroundColor: "rgba(255,192,203,0.85)" }}
        >
          <h2 className="font-semibold text-gray-900">
            🎂 Event Details
          </h2>
          <p className="text-sm text-gray-700">행사 안내</p>

          <div className="mt-2 text-gray-900 text-sm space-y-1">
            <p>
              📅 March 14, 2026
              <br />
              <span className="text-gray-700">2026년 3월 14일</span>
            </p>
            <p>
              ⏰ 12:00 PM – 3:00 PM (EST)
              <br />
              <span className="text-gray-700">오후 12시 – 3시</span>
            </p>
            <p>
              📍 Trummer's on Main
            </p>
            <p className="text-gray-700">
              7134 Main St, Clifton, VA 20124
            </p>
          </div>
        </div>

        {/* Attendance */}
        <div className="mb-4">
          <label className="block font-medium text-gray-900">
            Will you be attending?
            <br />
            <span className="text-sm text-gray-600">참석하시나요?</span>
          </label>

          <div className="flex gap-4 mt-2">
            <label className="flex items-center gap-2 text-gray-900">
              <input
                type="radio"
                name="attending"
                value="yes"
                checked={form.attending === "yes"}
                onChange={handleChange}
              />
              Yes / 네
            </label>

            <label className="flex items-center gap-2 text-gray-900">
              <input
                type="radio"
                name="attending"
                value="no"
                checked={form.attending === "no"}
                onChange={handleChange}
              />
              No / 아니요
            </label>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-medium text-gray-900">
              Name
              <br />
              <span className="text-sm text-gray-600">이름</span>
            </label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="w-full mt-1 rounded-lg border p-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium text-gray-900">
              Email Address
              <br />
              <span className="text-sm text-gray-600">이메일 주소</span>
            </label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full mt-1 rounded-lg border p-2"
            />
          </div>

          {/* Adults */}
          <Counter
            label="Number of Adults"
            sub="성인 인원"
            value={form.adults}
            onChange={(v) => setForm({ ...form, adults: v })}
          />

          {/* Kids */}
          <Counter
            label="Number of Kids"
            sub="아이 인원"
            value={form.kids}
            onChange={(v) => setForm({ ...form, kids: v })}
          />

          {/* Kids Meals */}
          <Counter
            label="Kids Meals Needed"
            sub="어린이 식사 수"
            value={form.kidsMeals}
            onChange={(v) => setForm({ ...form, kidsMeals: v })}
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-pink-400 text-white rounded-xl py-2 font-semibold hover:bg-pink-500 transition"
          >
            Submit RSVP
            <br />
            <span className="text-sm">참석 여부 제출</span>
          </button>
        </form>
      </div>
    </div>
  );
}

/* Reusable counter component */
function Counter({ label, sub, value, onChange }) {
  return (
    <div>
      <label className="block font-medium text-gray-900">
        {label}
        <br />
        <span className="text-sm text-gray-600">{sub}</span>
      </label>
      <div className="flex items-center gap-3 mt-1">
        <button
          type="button"
          onClick={() => onChange(Math.max(0, value - 1))}
          className="px-3 py-1 rounded-full bg-gray-200 text-lg"
        >
          −
        </button>
        <span className="w-8 text-center font-semibold">{value}</span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="px-3 py-1 rounded-full bg-gray-200 text-lg"
        >
          +
        </button>
      </div>
    </div>
  );
}