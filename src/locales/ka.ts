export default {
  login: {
    login: "ავტორიზაცია",
    username: "სახელი",
    password: "პაროლი",
    rememberMe: "დამიმახსოვრე",
    forgotPassword: "პაროლი დაგავიწყდათ?",
    createAccount: "შექმენით ახალი ანგარიში",
    loginUsing: "ავტორიზირდით",
    submit: "შესვლა",
  },
  register: {
    register: "რეგისტრაცია",
    username: "სახელი",
    email: "ელ. ფოსტა",
    password: "პაროლი",
    confirmPassword: "დაადასტურეთ პაროლი",
    submit: "შექმნა",
    alreadyHaveAnAccount: "უკვე გაქვთ ანგარიში?",
  },

  searchBar: {
    placeholder: "ძიება...",
  },
  landing: {
    welcome: "იშოპინგე VUENNO-ში",
    phrase: "შენი სწრაფი და მოსახერხებელი დიჯიტალური მაღაზია",
    subphrase: "ადგილი, სადაც შეგიძლიათ იპოვოთ ყველაფერი რაც გჭირდებათ",
    goToStore: "მაღაზიაში გადასვლა",
    topSelling: "ტოპ გაყიდვადი",
    startPayingPhrase: "გადაიხადე თვიური ფასი",
    buy: "ყიდვა",
    stages: {
      first: "დაათვალიერეთ ჩვენი კატალოგი და იპოვეთ თქვენი სასურველი პროდუქტი მარტივად.",
      second: "გადაიხადეთ სხვადასხვა სახის უსწრაფესი და უსაფრთხო გადახდის მეთოდებით.",
      third: "ჩვენთან სწრაფი მიწოდებაა. მიიღეთ თქვენი შეკვეთა დედაქალაქის მასშტაბით 2, ხოლო რეგიონებში 5 სამუშაო დღეში.",
    },
  },
  navigation: {
    home: "მთავარი",
    store: "მაღაზია",
    profile: "პროფილი",
    blogs: "ბლოგები",
    about: "ჩვენს შესახებ",
    contact: "კონტაქტი",
    logout: "გასვლა",
  },
  blogs: {
    seeMore: "მეტის ნახვა",
    goBack: "უკან დაბრუნება",
  },
  profile: {
    title: "პროფილის რედაქტირება",
    username: "სახელი",
    email: "ელ. ფოსტა",
    currentPassword: "ამჯამინდელი პაროლი",
    newPassword: "ახალი პაროლი",
    confirmPassword: "გაიმეორეთ ახალი პაროლი",
    submit: "შენახვა",
  },
  contact: {
    firstPhrase: {
      main: "სასწრაფოა? მიიღეთ დახმარება ლაივ ჩატით!",
      sub: "დააჭირეთ აქ",
    },
    secondPhrase: {
      main: "დაგვიკავშირდით ჩვენს ცხელ ხაზზე და გიპასუხებთ მალე!",
      sub: "+(XXX)-XXX-XXX",
    },
    thirdPhrase: {
      main: "მოგვწერეთ ელექტრონულ ფოსტაზე და მიიღეთ დახმარება!",
    },
    form: {
      title: "დაგვიკავშირდით",
      name: "სახელი",
      email: "ელ. ფოსტა",
      description: "აღწერა",
      topicLabel: "თემა",
      topics: {
        billing: "გადახდის პრობლემა",
        transportation: "ტრანსპორტირების პრობლემა",
        account: "ანგარიშის პრობლემა",
      },
      submit: "გაგზავნა",
    },
  },
  footer: {
    rights: "© 2024 VUENNO. ყველა უფლება დაცულია",
    copyright:
      "მთელი კონტენტი, მათ შორის ტექსტი, გრაფიკა, ლოგოები, სურათები და პროგრამული უზრუნველყოფა, არის VUENNO-ს საკუთრება. ნებისმიერი შინაარსის უნებართვო კოპირება, გავრცელება, მოდიფიკაცია, გადაცემა ან გამოქვეყნება ნებართვის გარეშე მკაცრად აკრძალულია.",
    newsletterSubscribe: "გამოიწერეთ ჩვენი სიახლეები",
    inputPlaceholder: "ელ. ფოსტა",
    links: {
      phrase: "სწრაფი ნავიგაცია",
      home: "მთავარი",
      store: "მაღაზია",
      yourStore: "თქვენი მაღაზია",
      contact: "კონტაქტი",
    },
    socials: {
      phrase: "გამოგვიწერეთ",
      facebook: "Facebook",
      instagram: "Instagram",
      twitter: "Twitter",
      tiktok: "Tiktok",
    },
  },
} as const;
