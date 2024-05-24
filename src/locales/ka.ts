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
    phrase:
      "მსოფლიოს საუკეთესო აგრარული დანადგარები უკვე ხელმისაწვდომია შენთვის ნებისმიერ ადგილას. ჩვენ გთავაზობთ ყველაზე კარგ ხარისხს ყველაზე კარგ ფასად",
    subphrase: "ადგილი, სადაც შეგიძლიათ იპოვოთ ყველაფერი რაც გჭირდებათ",
    goToStore: "მაღაზიაში გადასვლა",
    topSelling: "ტოპ გაყიდვადი",
    startPayingPhrase: "გადაიხადე თვიური",
    getStarted: "როგორ დავიწყოთ",
    buy: "ყიდვა",
    stages: {
      first: "იპოვე სასურველი დანადგარი ან აგრარული ხელსაწყო, დაამატე კალათაში ან დაეკონტაქტე გაყიდვების კონსულტანტს",
      second: "გადაიხადეთ ნებისმიერი ბანკის საშუალებით და ისარგებლეთ 5 წლამდე განვადებით",
      third: "მიიღეთ შესყიდული პროდუქცია და ისიამოვნეთ უმაღლესი ხარისხით",
    },
    customOfferTitle: "სპეციალური შეკვეთა გაქვთ?",
    customOfferPhrase: "დაუკავშირდით ჩვენს გაყიდვების გუნდს და მიიღეთ სპეციალური შეთავაზებები!",
    contactUs: "დაუკავშირდით გაყიდვების გუნდს",
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
  store: {
    topSelling: "ყველაზე მეტად გაყიდვადი",
    startPayingPhrase: "გადაიხადე თვიურად",
    buy: "ყიდვა",
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
    rights: "© 2024 Agrocult. ყველა უფლება დაცულია",
    links: {
      trackShipment: "ამანათის ლოკაცია",
      about: "ჩვენს შესახებ",
      contact: "კონტაქტი",
      profile: "პროფილი",
    },
  },
} as const;
