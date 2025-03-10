'use client';

export default function Home() {
  const sections = [
    {
      title: "Welcome to Dum's Dog Daycare",
      text: "Providing a safe and fun environment for your furry friends.",
      image: "/doghead.jpg", // what
    },
    {
      title: "Our Services",
      text: "From daycare to grooming, we offer top-notch care for your pets.",
      image: "groupdog.jpg",
    },
    {
      title: "Join Our Community",
      text: "Become a part of a loving and caring pet community today.",
      image: "/doginsnow.jpg",
    },
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <div
          key={index}
          className="h-screen flex flex-col justify-center items-center text-center text-black bg-cover bg-center"
          style={{ backgroundImage: `url(${section.image})` }}
        >
          <div className="bg-white bg-opacity-50 p-8 rounded-md">
            <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
            <p className="text-lg">{section.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
