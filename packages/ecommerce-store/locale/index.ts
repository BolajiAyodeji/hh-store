type Locale = {
  [lang: string]: {
    [key: string]: string | { [key: string]: string } | any;
  };
};

const locale: Locale = {
  "en-us": {
    description:
      "This is your ultimate destination for all things exceptional in the world of online shopping. As your premier multipurpose e-commerce emporium, you can purchase a diverse array of high-quality products meticulously selected to cater to your every need and desire.",
    languageName: "English",
    welcome: "Hey, there",
    addToCart: "Add to cart",
    available: "available",
    notAvailable: "Not available",
    categories: "categories",
    startShopping: "Start shopping",
    learnMore: "Learn more",
    continueShopping: "Continue shopping",
    shoppingBag: "Shopping Bag",
    days: "days",
    freeOver: "free over",
    language: "language",
    languages: {
      "en-us": "english",
      "it-it": "italian",
      "fr-fr": "french"
    },
    method: "method",
    outOfStock: "The requested quantity is not available",
    price: "price",
    selectSize: "Select your size",
    shippingTo: "Shipping to",
    backToAllProducts: "Back to all products",
    reviews: "Reviews",
    total: "Total",
    subTotal: "Subtotal",
    discount: "Discount",
    taxes: "Taxes",
    giftCard: "Gift Card",
    items: "items",
    viewMore: "view more",
    emptyProducts: "No products",
    shipping: "Shipping",
    subscribe: "Subscribe",
    subscribeTitle: "Subscribe to our newsletter",
    subscribeText: "The latest news, products, and discounts, sent to your inbox weekly",
    subscribePlaceholder: "Enter your email address"
  },
  "it-it": {
    description:
      "Questa è la tua destinazione finale per tutte le cose eccezionali nel mondo dello shopping online. Essendo il tuo principale emporio di e-commerce multiuso, puoi acquistare una vasta gamma di prodotti di alta qualità meticolosamente selezionati per soddisfare ogni tua esigenza e desiderio.",
    languageName: "Italiano",
    welcome: "Ehilà",
    addToCart: "Aggiungi al carrello",
    available: "disponibile",
    notAvailable: "non disponibile",
    categories: "categorie",
    startShopping: "Inizia a fare acquisti",
    learnMore: "Saperne di più",
    continueShopping: "Continua lo shopping",
    shoppingBag: "Carrello",
    days: "giorni",
    freeOver: "gratis oltre",
    language: "lingua",
    languages: {
      "en-us": "inglese",
      "it-it": "italiano",
      "fr-fr": "francese"
    },
    method: "metodo",
    outOfStock: "La quantità richiesta non è disponibile",
    price: "prezzo",
    proceedToCheckout: "Vai al checkout",
    selectSize: "Seleziona la tua taglia",
    shippingTo: "Spedizione",
    yourShoppingCart: "Il tuo carrello contiene",
    backToAllProducts: "Torna a tutti i prodotti",
    reviews: "Recensioni",
    total: "Totale",
    subTotal: "Totale parziale",
    discount: "Sconto",
    taxes: "Tasse",
    giftCard: "Gift Card",
    items: "prodotti",
    viewMore: "view more",
    emptyProducts: "Nessun prodotto",
    shipping: "Spedizione",
    subscribe: "Sottoscrivi",
    subscribeTitle: "Iscriviti alla nostra newsletter",
    subscribeText:
      "Le ultime notizie, prodotti e sconti, inviati alla tua casella di posta settimanalmente",
    subscribePlaceholder: "Inserisci il tuo indirizzo email"
  },
  "fr-fr": {
    description:
      "C'est votre destination ultime pour tout ce qui est exceptionnel dans le monde du shopping en ligne. En tant que premier magasin de commerce électronique polyvalent, vous pouvez acheter une gamme diversifiée de produits de haute qualité méticuleusement sélectionnés pour répondre à tous vos besoins et désirs.",
    languageName: "Français",
    welcome: "Salut",
    addToCart: "Ajouter au panier",
    available: "disponible",
    notAvailable: "Pas disponible",
    categories: "catégories",
    startShopping: "Commencer à magasiner",
    learnMore: "Apprendre encore plus",
    continueShopping: "Continuer vos achats",
    shoppingBag: "Sac de courses",
    days: "jours",
    freeOver: "libre sur",
    language: "langue",
    languages: {
      "en-us": "anglais",
      "it-it": "italian",
      "fr-fr": "français"
    },
    method: "méthode",
    outOfStock: "La quantité demandée n'est pas disponible",
    price: "prix",
    proceedToCheckout: "Passer à la caisse",
    selectSize: "Select your size",
    shippingTo: "Sélectionnez votre taille",
    yourShoppingCart: "Votre panier contient",
    backToAllProducts: "Retour à tous les produits",
    reviews: "Commentaires",
    total: "Total",
    subTotal: "Subtotal",
    discount: "Rabais",
    taxes: "Impôts",
    giftCard: "Carte cadeau",
    items: "articles",
    viewMore: "voir plus",
    emptyProducts: "Aucun produit",
    shipping: "Spedizione",
    subscribe: "S'abonner",
    subscribeTitle: "Abonnez-vous à notre newsletter",
    subscribeText:
      "Les dernières nouvelles, produits et réductions, envoyés chaque semaine dans votre boîte de réception",
    subscribePlaceholder: "Entrez votre adresse email"
  }
};

export default locale;
