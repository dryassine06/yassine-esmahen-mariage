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
            ياسين و إسمهان
          </h1>
          <p className="text-xl md:text-2xl">
            تتشرف عائلة علي الدريدي بدعوتكم لحفل زفاف ابنهم ياسين على كريمتنا
            إسمهان
          </p>
          <p className="text-2xl md:text-3xl mt-4">26 ديسمبر 2024</p>
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
          {/* Ceremony */}
          <div className="bg-white p-6 rounded-lg shadow-lg animate-slide-up">
            <div className="relative h-[400px] mb-4">
              <Image
                src="/images/1.jpg"
                alt="مكان العقد"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center">العقد</h3>
            <p className="text-center text-gray-600">
              يوم الاحد 22 ديسمبر 2024  
            </p>
            <div className="text-center mt-4">
              <a
                href="https://maps.app.goo.gl/D4cEoKFQrM9H6tNN9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors duration-300"
              >
                عرض الموقع
              </a>
            </div>
          </div>

          {/* Reception */}
          <div className="bg-white p-6 rounded-lg shadow-lg animate-slide-up">
            <div className="relative h-[400px] mb-4">
              <Image
                src="/images/photo-1464366400600-7168b8af9bc3.jpg"
                alt="مكان الوليمة"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center">الوليمة</h3>
            <p className="text-center text-gray-600">
               العشاء - يوم الاربعاء 25 ديسمبر 2024
            </p>
            <div className="text-center mt-4">
              <a
                href="https://maps.app.goo.gl/D4cEoKFQrM9H6tNN9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors duration-300"
              >
                عرض الموقع
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
