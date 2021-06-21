import { Injectable } from '@angular/core';

export interface productData {
  pId: number,
  pName: string,
  shortDescription: string,
  fullDescription: string,
  sku: string,
  categories: string,
  manufacturer: string,
  published: boolean,
  pTag: string[],
  pType: string,
  vendor: string,
  allowCustomerReview: boolean,
  price: number,
  taxCategory: string,
  weight: number,
  length: number,
  width: number,
  height: number,
  quantity: number
}

export class Product {
  pId!: number
  pName!: string
  shortDescription!: string
  fullDescription!: string
  sku!: string
  categories!: string
  manufacturer!: string
  published!: boolean
  pTag!: string[]
  pType!: string
  vendor!: string
  allowCustomerReview!: boolean
  price!: number
  taxCategory!: string
  weight!: number
  length!: number
  width!: number
  height!: number
  quantity!: number
}

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  constructor() { }

  getProducts() {
    return this.DATA
  }

  getProductDetail(id: number) {
    return this.DATA[id - 1]
  }

  DATA: productData[] = [
    {
      pId: 1,
      pName: 'Build your own computer',
      shortDescription: "Build it",
      fullDescription: "Fight back against cluttered workspaces with the stylish IBM zBC12 All-in-One desktop PC, featuring powerful computing resources and a stunning 20.1-inch widescreen display with stunning XBRITE-HiColor LCD technology. The black IBM zBC12 has a built-in microphone and MOTION EYE camera with face-tracking technology that allows for easy communication with friends and family. And it has a built-in DVD burner and Sony's Movie Store software so you can create a digital entertainment library for personal viewing at your convenience. Easy to setup and even easier to use, this JS-series All-in-One includes an elegantly designed keyboard and a USB mouse.",
      sku: 'COMP_CUST',
      categories: 'Computers',
      manufacturer: "",
      published: true,
      pTag: ['computer', 'awesome'],
      pType: 'Simple',
      vendor: 'No vendor',
      allowCustomerReview: true,
      price: 1200,
      taxCategory: "Electronics & Software",
      weight: 2,
      length: 2,
      width: 2,
      height: 2,
      quantity: 9999
    },
    {
      pId: 2,
      pName: 'Digital Storm VANQUISH 3 Custom Performance PC',
      shortDescription: "Digital Storm Vanquish 3 Desktop PC",
      fullDescription: "Blow the doors off today’s most demanding games with maximum detail, speed, and power for an immersive gaming experience without breaking the bank. Stay ahead of the competition, VANQUISH 3 is fully equipped to easily handle future upgrades, keeping your system on the cutting edge for years to come. Each system is put through an extensive stress test, ensuring you experience zero bottlenecks and get the maximum performance from your hardware.",
      sku: 'DS_VA3_PC',
      categories: 'Computers',
      manufacturer: "",
      published: true,
      pTag: ['computer', 'cool'],
      pType: 'Simple',
      vendor: 'No vendor',
      allowCustomerReview: true,
      price: 1259,
      taxCategory: "Electronics & Software",
      weight: 7,
      length: 7,
      width: 7,
      height: 7,
      quantity: 3242
    },
    {
      pId: 3,
      pName: 'Lenovo IdeaCentre 600 All-in-One PC',
      shortDescription: "",
      fullDescription: "The A600 features a 21.5in screen, DVD or optional Blu-Ray drive, support for the full beans 1920 x 1080 HD, Dolby Home Cinema certification and an optional hybrid analogue/digital TV tuner. Connectivity is handled by 802.11a/b/g - 802.11n is optional - and an ethernet port. You also get four USB ports, a Firewire slot, a six-in-one card reader and a 1.3- or two-megapixel webcam.",
      sku: 'LE_IC_600',
      categories: 'Computers',
      manufacturer: "",
      published: true,
      pTag: ['computer', 'cool'],
      pType: 'Simple',
      vendor: 'No vendor',
      allowCustomerReview: true,
      price: 500,
      taxCategory: "Electronics & Software",
      weight: 7,
      length: 7,
      width: 7,
      height: 7,
      quantity: 1341
    },
    {
      pId: 4,
      pName: 'Apple MacBook Pro 13-inch',
      shortDescription: "A groundbreaking Retina display. A new force-sensing trackpad. All-flash architecture. Powerful dual-core and quad-core Intel processors. Together, these features take the notebook to a new level of performance. And they will do the same for you in everything you create.",
      fullDescription: "With fifth-generation Intel Core processors, the latest graphics, and faster flash storage, the incredibly advanced MacBook Pro with Retina display moves even further ahead in performance and battery life.* *Compared with the previous generation.Retina display with 2560-by-1600 resolution Fifth-generation dual-core Intel Core i5 processor Intel Iris Graphics Up to 9 hours of battery life1 Faster flash storage 802.11ac Wi-Fi Two Thunderbolt 2 ports for connecting high-performance devices and transferring data at lightning speed Two USB 3 ports (compatible with USB 2 devices) and HDMI FaceTime HD camera Pages, Numbers, Keynote, iPhoto, iMovie, GarageBand included OS X, the world's most advanced desktop operating system",
      sku: 'AP_MBP_13',
      categories: 'Computers',
      manufacturer: "Apple",
      published: true,
      pTag: ['computer', 'awesome', 'compact'],
      pType: 'Simple',
      vendor: 'No vendor',
      allowCustomerReview: true,
      price: 1800,
      taxCategory: "Electronics & Software",
      weight: 3,
      length: 3,
      width: 2,
      height: 2,
      quantity: 2341
    },
    {
      pId: 5,
      pName: 'Asus N551JK-XO076H Laptop',
      shortDescription: "Laptop Asus N551JK Intel Core i7-4710HQ 2.5 GHz, RAM 16GB, HDD 1TB, Video NVidia GTX 850M 4GB, BluRay, 15.6, Full HD, Win 8.1",
      fullDescription: "The ASUS N550JX combines cutting-edge audio and visual technology to deliver an unsurpassed multimedia experience. A full HD wide-view IPS panel is tailor-made for watching movies and the intuitive touchscreen makes for easy, seamless navigation. ASUS has paired the N550JX’s impressive display with SonicMaster Premium, co-developed with Bang & Olufsen ICEpower® audio experts, for true surround sound. A quad-speaker array and external subwoofer combine for distinct vocals and a low bass that you can feel.",
      sku: 'AS_551_LP',
      categories: 'Computers',
      manufacturer: "",
      published: true,
      pTag: ['computer', 'awesome', 'compact'],
      pType: 'Simple',
      vendor: 'No vendor',
      allowCustomerReview: true,
      price: 1500,
      taxCategory: "Electronics & Software",
      weight: 7,
      length: 7,
      width: 7,
      height: 7,
      quantity: 1230
    },
    {
      pId: 6,
      pName: 'Samsung Series 9 NP900X4C Premium Ultrabook',
      shortDescription: "Samsung Series 9 NP900X4C-A06US 15-Inch Ultrabook (1.70 GHz Intel Core i5-3317U Processor, 8GB DDR3, 128GB SSD, Windows 8) Ash Black",
      fullDescription: "Designed with mobility in mind, Samsung's durable, ultra premium, lightweight Series 9 laptop (model NP900X4C-A01US) offers mobile professionals and power users a sophisticated laptop equally suited for work and entertainment. Featuring a minimalist look that is both simple and sophisticated, its polished aluminum uni-body design offers an iconic look and feel that pushes the envelope with an edge just 0.58 inches thin. This Series 9 laptop also includes a brilliant 15-inch SuperBright Plus display with HD+ technology, 128 GB Solid State Drive (SSD), 8 GB of system memory, and up to 10 hours of battery life.",
      sku: 'SM_900_PU',
      categories: 'Computers',
      manufacturer: "",
      published: true,
      pTag: ['computer', 'nice', 'compact'],
      pType: 'Simple',
      vendor: 'No vendor',
      allowCustomerReview: true,
      price: 1590,
      taxCategory: "Electronics & Software",
      weight: 7,
      length: 7,
      width: 7,
      height: 7,
      quantity: 324
    },
    {
      pId: 7,
      pName: 'HP Spectre XT Pro UltraBook',
      shortDescription: "HP Spectre XT Pro UltraBook / Intel Core i5-2467M / 13.3 / 4GB / 128GB / Windows 7 Professional / Laptop",
      fullDescription: "Introducing HP ENVY Spectre XT, the Ultrabook designed for those who want style without sacrificing substance. It's sleek. It's thin. And with Intel. Corer i5 processor and premium materials, it's designed to go anywhere from the bistro to the boardroom, it's unlike anything you've ever seen from HP.",
      sku: 'HP_SPX_UB',
      categories: 'Computers',
      manufacturer: "HP",
      published: true,
      pTag: ['computer', 'nice'],
      pType: 'Simple',
      vendor: 'No vendor',
      allowCustomerReview: true,
      price: 1350,
      taxCategory: "Electronics & Software",
      weight: 7,
      length: 7,
      width: 7,
      height: 7,
      quantity: 5653
    },
    {
      pId: 8,
      pName: 'HP Envy 6-1180ca 15.6-Inch Sleekbook',
      shortDescription: "HP ENVY 6-1202ea Ultrabook Beats Audio, 3rd generation Intel® CoreTM i7-3517U processor, 8GB RAM, 500GB HDD, Microsoft Windows 8, AMD Radeon HD 8750M (2 GB DDR3 dedicated)",
      fullDescription: "The UltrabookTM that's up for anything. Thin and light, the HP ENVY is the large screen UltrabookTM with Beats AudioTM. With a soft-touch base that makes it easy to grab and go, it's a laptop that's up for anything.",
      sku: 'HP_ESB_15',
      categories: 'Computers',
      manufacturer: "HP",
      published: true,
      pTag: ['computer', 'cool', 'compact'],
      pType: 'Simple',
      vendor: 'No vendor',
      allowCustomerReview: true,
      price: 1460,
      taxCategory: "Electronics & Software",
      weight: 7,
      length: 7,
      width: 7,
      height: 7,
      quantity:5323
    },
    {
      pId: 9,
      pName: 'Obey Propaganda Hat',
      shortDescription: "",
      fullDescription: "Printed poplin 5 panel camp hat with debossed leather patch and web closure",
      sku: 'OB_HAT_PR',
      categories: 'Apparel',
      manufacturer: "",
      published: true,
      pTag: ['cool', 'apparel'],
      pType: 'Simple',
      vendor: 'No vendor',
      allowCustomerReview: true,
      price: 30,
      taxCategory: "Apparel",
      weight: 2,
      length: 2,
      width: 2,
      height: 2,
      quantity:200
    },
    {
      pId: 10,
      pName: 'Reversible Horseferry Check Belt',
      shortDescription: "Reversible belt in Horseferry check with smooth leather trim",
      fullDescription: "Reversible belt in Horseferry check with smooth leather trim lining, polished metal buckle",
      sku: 'RH_CHK_BL',
      categories: 'Apparel',
      manufacturer: "",
      published: true,
      pTag: [''],
      pType: 'Simple',
      vendor: 'No vendor',
      allowCustomerReview: true,
      price: 45,
      taxCategory: "Apparel",
      weight: 7,
      length: 7,
      width: 7,
      height: 7,
      quantity:545
    },
    {
      pId: 11,
      pName: 'Night Visions',
      shortDescription: "Night Visions is the debut studio album by American rock band Imagine Dragons.",
      fullDescription: "Original Release Date: September 4, 2012 Release Date: September 4, 2012 Genre - Alternative rock, indie rock, electronic rock Label - Interscope/KIDinaKORNER Copyright: (C) 2011 Interscope Records",
      sku: 'NIGHT_VSN',
      categories: 'Digital downloads',
      manufacturer: "",
      published: true,
      pTag: ['awesome', 'digital'],
      pType: 'Simple',
      vendor: 'No vendor',
      allowCustomerReview: true,
      price: 2.8,
      taxCategory: "Apparel",
      weight: 0,
      length: 0,
      width: 0,
      height: 0,
      quantity:0
    },
    {
      pId: 12,
      pName: '$100 Physical Gift Card',
      shortDescription: "$100 Gift Card. Gift Cards must be redeemed through our site Web site toward the purchase of eligible products.",
      fullDescription: "Gift Cards must be redeemed through our site Web site toward the purchase of eligible products. Purchases are deducted from the GiftCard balance. Any unused balance will be placed in the recipient's GiftCard account when redeemed. If an order exceeds the amount of the GiftCard, the balance must be paid with a credit card or other available payment method.",
      sku: 'PG_CR_100',
      categories: 'Gift Cards',
      manufacturer: "",
      published: true,
      pTag: ['awesome', 'digital'],
      pType: 'Simple',
      vendor: 'No vendor',
      allowCustomerReview: true,
      price: 100,
      taxCategory: "",
      weight: 1,
      length: 1,
      width: 1,
      height: 1,
      quantity:0
    }
  ]
}
