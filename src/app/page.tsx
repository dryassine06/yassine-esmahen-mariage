"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const scrollToEvents = () => {
    const eventsSection = document.getElementById("events");
    eventsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/photo-1532712938310-34cb3982ef74.jpg"
            alt="صورة العروسين"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-center text-white z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            سيف الدين و نسرين
          </h1>
          <p className="text-xl md:text-2xl">
            تتشرف عائلة رضا معتوق بدعوتكم لحفل زفاف ابنهم سيف الدين على كريمتنا نسرين
          </p>
          <p className="text-2xl md:text-3xl mt-4">28 جوان 2025</p>
          <button
            onClick={scrollToEvents}
            className="mt-8 px-8 py-3 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors duration-300"
          >
            عرض تفاصيل الحفل
          </button>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="events" className="section-container bg-rose-50">
        <h2 className="heading-primary">تفاصيل الحفل</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* عقد القران والعشاء */}
          <div className="bg-white p-6 rounded-lg shadow-lg animate-slide-up">
            <div className="relative h-[400px] mb-4">
              <Image
                src="/images/1.jpg"
                alt="مكان العقد والعشاء"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center">العقد والعشاء</h3>
            <p className="text-center text-gray-600">
              يوم الخميس 26 جوان 2025<br />
              المكان: منزل العائلة مجاز الباب - حي الصدق
            </p>
          </div>

          {/* حفل زفاف وعشاء */}
          <div className="bg-white p-6 rounded-lg shadow-lg animate-slide-up">
            <div className="relative h-[400px] mb-4">
              <Image
                src="/images/photo-1464366400600-7168b8af9bc3.jpg"
                alt="مكان حفل الزفاف والعشاء"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center">حفل زفاف وعشاء</h3>
            <p className="text-center text-gray-600">
              يوم السبت 28 جوان 2025<br />
              المكان: مرناق - دار ضيافة، مقابل مقهى أهلاً
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
