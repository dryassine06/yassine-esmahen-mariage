"use client"
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    eventsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2070"
            alt="صورة العروسين"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-center text-white z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">ياسين و ستيفاني</h1>
          <p className="text-xl md:text-2xl">يتشرفان بدعوتكم لحضور حفل زفافهما</p>
          <p className="text-2xl md:text-3xl mt-4">15 يونيو 2024</p>
          <button 
            onClick={scrollToEvents}
            className="mt-8 px-8 py-3 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors duration-300"
          >
            عرض تفاصيل الحفل
          </button>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-container bg-rose-50">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h2 className="heading-primary">قصتنا</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974"
                alt="قصتنا"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <p className="text-lg leading-relaxed">
                التقينا في أحد أيام الصيف الجميلة، حيث تحولت مصادفة بسيطة إلى حوارات لا تنتهي. 
                كان ذلك اليوم بداية رحلتنا الجميلة معاً. ومع كل المغامرات والضحكات والنمو المشترك، 
                ازداد حبنا قوة وعمقاً.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="events" className="section-container bg-rose-50">
        <h2 className="heading-primary">تفاصيل الحفل</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ceremony */}
          <div className="bg-white p-6 rounded-lg shadow-lg animate-slide-up">
            <div className="relative h-[200px] mb-4">
              <Image
                src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070"
                alt="مكان العقد"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="heading-secondary">حفل العقد</h3>
            <p className="mb-4">2:00 مساءً - 3:30 مساءً</p>
            <p className="mb-4">جامع الزيتونة، المدينة العتيقة، تونس</p>
            <a 
              href="https://maps.google.com/?q=جامع+الزيتونة+تونس" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-primary"
            >
              عرض الموقع
            </a>
          </div>

          {/* Reception */}
          <div className="bg-white p-6 rounded-lg shadow-lg animate-slide-up">
            <div className="relative h-[200px] mb-4">
              <Image
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069"
                alt="مكان الحفل"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="heading-secondary">حفل الزفاف</h3>
            <p className="mb-4">4:00 مساءً - 10:00 مساءً</p>
            <p className="mb-4">قصر المؤتمرات، شارع الحبيب بورقيبة، تونس</p>
            <a 
              href="https://maps.google.com/?q=شارع+الحبيب+بورقيبة+تونس" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-primary"
            >
              عرض الموقع
            </a>
          </div>

          {/* After Party */}
          <div className="bg-white p-6 rounded-lg shadow-lg animate-slide-up">
            <div className="relative h-[200px] mb-4">
              <Image
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069"
                alt="مكان السهرة"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="heading-secondary">السهرة</h3>
            <p className="mb-4">10:00 مساءً - وقت متأخر</p>
            <p className="mb-4">دار المرسى، المرسى، تونس</p>
            <a 
              href="https://maps.google.com/?q=دار+المرسى+تونس" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-primary"
            >
              عرض الموقع
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
