/* ====== ყოველი რესტორნისთვის მხოლოდ ეს ფაილი იცვლება ====== */
window.SITE = {
  name: "Blue Elephant Cafe",
  logo: "assets/logo.webp",           // TODO: ჩადე ლოგო assets/ საქაღალდეში
  phone: "+995514148888",
  currency: "GEL",

  // TODO: Google Apps Script-ის /exec URL (menu.xlsx-ის Google Sheet-იდან). იხ. Guide ფურცელი menu.xlsx-ში
  sheetUrl: "https://script.google.com/macros/s/AKfycbwdtim-tyVthOTZVX9L0bwK9BS55xRfn_ZOXH0mULqAvCq0FeoHTLjcHEFVTgDSHOOW/exec",

  // ცარიელი = DEMO რეჟიმი (შეკვეთა არსად იგზავნება, მაგრამ ყველაფერი მუშაობს)
  orderEndpoint: "",
  // ცარიელი = Wi-Fi შემოწმება გამორთულია
  allowedIps: [],

  langs: ["ka", "en", "ru"],
  defaultLang: "ka",

  // ცარიელი = სლაიდერი მენიუს ფოტოებიდან ავტომატურად აიღება
  slides: [],

  // ლურჯ-თეთრი თემა. (charcoal = მუქი ლურჯი ჰედერი/ჰერო, parchment = თეთრი ფონი,
  // brass = აქცენტი, wine = ღილაკები, ink = ტექსტი)
  theme: {
    "charcoal": "#0f2a52",
    "charcoal-soft": "#17386b",
    "parchment": "#ffffff",
    "parchment-dim": "#e8f0fb",
    "ink": "#12284a",
    "ink-soft": "#5a6b85",
    "brass": "#2f6fd6",
    "brass-bright": "#8bb8ff",
    "wine": "#1f55c4",
    "wine-bright": "#2f6fe0",
    "line": "rgba(47, 111, 214, 0.35)",
    "line-soft": "rgba(47, 111, 214, 0.2)"
  },

  // Google Maps-ის ბმულები (არასავალდებულო). თუ ცარიელია, ღილაკები არ გამოჩნდება.
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Blue+Elephant+Cafe+8+Nodar+Dumbadze+St+Batumi",
  reviewUrl: "",   // Google Maps -> Share -> "Write a review" ბმული

  // მიმოხილვები (Google Maps). ჩასვი მხოლოდ რეალური შეფასებები.
  rating: { score: 4.4, count: 1152 },
  reviews: [
    { name: "Polina Korchenko · Google", text: "I've been here twice! Tasty. Business lunch …" },
    { name: "Jaboe · Google", text: "Came here for a late late breakfast and were very happy!! We ordered scrambled eggs and the shakshuka, a strawberry matcha latte and a cappuccino with oatmilk. Very sweet waiter and cozy atmosphere. Inside the café looks very stylish. Would come again!" },
    { name: "Sohaib · Google", text: "The food was delicious, the service was friendly, attentive, and contributed positively to the overall visit. The atmosphere was pleasant and adequate for the restaurant’s concept, providing a comfortable setting to enjoy the meal. …" }
  ],

  about: {
    ka: { eyebrow: "ჩვენი ისტორია", title: "კეთილი იყოს თქვენი მობრძანება {name}-ში",
      lede: "გემრიელი საუზმე, კარგი ყავა და მყუდრო ატმოსფერო.",
      story: "{name} არის მყუდრო და სტილური კაფე ბათუმში, ნოდარ დუმბაძის ქუჩაზე. აქ შეგიძლიათ დაიწყოთ დღე კარგი საუზმით, მიირთვათ ბიზნეს-ლანჩი, დალიოთ ყავა და დაამთავროთ დესერტით.",
      address: "ნოდარ დუმბაძის ქუჩა 8, ბათუმი 6010",
      hours: [["ყოველდღე", "21:00-მდე"]] },   // TODO: გაღების დრო და რეალური გრაფიკი
    en: { eyebrow: "Our Story", title: "Welcome to {name}",
      lede: "A great breakfast, good coffee and a cozy atmosphere.",
      story: "{name} is a cozy, stylish café in Batumi on Nodar Dumbadze Street. Start your day with a proper breakfast, stop by for a business lunch, enjoy a coffee and finish with a dessert.",
      address: "8 Nodar Dumbadze St, Batumi 6010, Georgia",
      hours: [["Daily", "Until 21:00"]] },
    ru: { eyebrow: "Наша история", title: "Добро пожаловать в {name}",
      lede: "Вкусный завтрак, хороший кофе и уютная атмосфера.",
      story: "{name} — уютное и стильное кафе в Батуми на улице Нодара Думбадзе. Начните день с хорошего завтрака, загляните на бизнес-ланч, выпейте кофе и завершите десертом.",
      address: "ул. Нодара Думбадзе 8, Батуми 6010, Грузия",
      hours: [["Ежедневно", "До 21:00"]] }
  }
};
