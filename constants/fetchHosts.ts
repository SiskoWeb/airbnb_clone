// interface Address {
//   address_code: string;
//   _id: string;
//   address: string;
//   city: string;
//   country: string;
// }

// interface Category {
//   category_code: string;
//   image: string;
//   type_service: string;
//   status: string;
//   added_date: string;
//   _id: string;
//   name: string;
// }

// interface Item {
//   _id: string;
//   nom: string;
//   address: Address;
//   category: Category;
// }

// const data: Item[] | any = [
//   {
//       "_id": "667a8dd64ced042bec9f3d83",
//       "nom": "Luxurious Beachfront Villa",
//       "address": {
//         "address_code": "lxeh1oy7",
//         "_id": "666c09c6773685a888281837",
//         "address": "789 Pitt Street",
//         "city": "Sydney",
//         "country": "Australia"
//       },
//       "category": {
//         "category_code": "lxbnnu52",
//         "image": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1718186133/Categories/mtchfymwap9oim3vjlzg.png",
//         "type_service": "cultural",
//         "status": "active",
//         "added_date": "2024-06-12T09:55:34.358Z",
//         "_id": "66697096601ab6992861d6f1",
//         "name": "Historical homes"
//       },
//       "telephone": "+987654321",
//       "bedrooms": 3,
//       "About": "Indulge in the ultimate luxury with this stunning beachfront villa.",
//       "Rating": 4.9,
//       "baths": 4,
//       "superficie": "300 sqm",
//       "beds": 6,
//       "guests": 8,
//       "etat": "Bon état",
//       "terrasse": true,
//       "garage": true,
//       "image": [
//         {
//           "public_id": "Hosts/yqvxfzmr2dx7odzucryj",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719307731/Hosts/yqvxfzmr2dx7odzucryj.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719307731/Hosts/yqvxfzmr2dx7odzucryj.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/vzpckug7kifjjxakeqsu",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719307731/Hosts/vzpckug7kifjjxakeqsu.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719307731/Hosts/vzpckug7kifjjxakeqsu.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/fve9fuso8atcjadw4ysj",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719307732/Hosts/fve9fuso8atcjadw4ysj.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719307732/Hosts/fve9fuso8atcjadw4ysj.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/yykgmfd0p89yg0jmwmy9",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719307733/Hosts/yykgmfd0p89yg0jmwmy9.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719307733/Hosts/yykgmfd0p89yg0jmwmy9.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/ecabtc36mto4gj8nnvm9",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719307734/Hosts/ecabtc36mto4gj8nnvm9.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719307734/Hosts/ecabtc36mto4gj8nnvm9.jpg",
//           "format": "jpg"
//         }
//       ],
//       "status": "ACTIVE",
//       "valid": true,
//       "price": 1500,
//       "workingTime": "24/7",
//       "statics": {
//         "contRatings": 200,
//         "countSaves": 100,
//         "countOrders": 300,
//         "countComments": 250
//       },
//       "rating": 4.7,
//       "translations": {
//         "fr": {
//           "nom": "Villa de Luxe en Bord de Mer",
//           "About": "Offrez-vous le luxe ultime avec cette superbe villa en bord de mer."
//         },
//         "ar": {
//           "nom": "فيلا فخمة على شاطئ البحر",
//           "About": "استمتع بالرفاهية الفائقة مع هذه الفيلا الساحرة على شاطئ البحر."
//         }
//       },
//       "amenities": [
//         {
//           "amenity_code": "lxbsd1wo",
//           "svg": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"M16 20.33a3.67 3.67 0 1 1 0 7.34 3.67 3.67 0 0 1 0-7.34zm0 2a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34zM16 15a9 9 0 0 1 8.04 4.96l-1.51 1.51a7 7 0 0 0-13.06 0l-1.51-1.51A9 9 0 0 1 16 15zm0-5.33c4.98 0 9.37 2.54 11.94 6.4l-1.45 1.44a12.33 12.33 0 0 0-20.98 0l-1.45-1.45A14.32 14.32 0 0 1 16 9.66zm0-5.34c6.45 0 12.18 3.1 15.76 7.9l-1.43 1.44a17.64 17.64 0 0 0-28.66 0L.24 12.24c3.58-4.8 9.3-7.9 15.76-7.9z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "66698f6ded1e7369e52f9499",
//           "__v": 0,
//           "name": "Wi-Fi"
//         },
//         {
//           "amenity_code": "lxc0foky",
//           "type": "Bathroom",
//           "svg": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"M7.5 2a4.5 4.5 0 0 1 4.47 4H14v2H8V6h1.95A2.5 2.5 0 0 0 5 6.34V16h26v2h-2v5a5 5 0 0 1-3 4.58V30h-2v-2H8v2H6v-2.42a5 5 0 0 1-3-4.34V18H1v-2h2V6.5A4.5 4.5 0 0 1 7.5 2zM27 18H5v5a3 3 0 0 0 2.65 2.98l.17.01L8 26h16a3 3 0 0 0 3-2.82V23z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "6669c464e3169f7c2995f874",
//           "__v": 0,
//           "name": "Bath"
//         },
//         {
//           "amenity_code": "lxc0foz6",
//           "type": "Bathroom",
//           "svg": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"M20 1v2h-3v2h1a2 2 0 0 1 2 1.85V9a4 4 0 0 1 4 3.8V27a4 4 0 0 1-3.8 4H12a4 4 0 0 1-4-3.8V13a4 4 0 0 1 3.8-4h.2V7a2 2 0 0 1 1.85-2H15V3H8V1zm2 21H10v5a2 2 0 0 0 1.85 2H20a2 2 0 0 0 2-1.85V27zm0-6H10v4h12zm-2-5h-8a2 2 0 0 0-2 1.85V14h12v-1a2 2 0 0 0-2-2zm-2-4h-4v2h4z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "6669c465e3169f7c2995f880",
//           "__v": 0,
//           "name": "Conditioner"
//         },
//         {
//           "amenity_code": "lxc0fp5n",
//           "type": "Bathroom",
//           "svg": "\u003Csvg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"m4 2v2h2l.001 2h-1.001c-1.1045695 0-2 .8954305-2 2v16.3846154c0 3.0720253 2.20424471 5.6153846 5 5.6153846h16c2.7957553 0 5-2.5433593 5-5.6153846v-9.3846154h-2l.0006267 2.2441864c-.2957862.1662973-.6415947.2556548-1.0003023.2558136-.3770726-.0001668-.7397707-.0987428-1.0448826-.2813581l-.147435-.0980881-.0698054-.0542225-.0669618-.0575717c-.1674894-.1516722-.3473184-.2870627-.5370123-.4056091-.1267551-.0791722-.2576057-.1507019-.3921007-.2145789l-.2041007-.0899647c-.4828805-.1966888-1.005996-.2986069-1.537908-.2986069-.1521835 0-.3034078.0083174-.453179.0247859l-.2234033.0307902c-.658505.1092272-1.2810008.3778141-1.8035225.7911936l-.1911344.1617761c-.3493432.3161496-.8261929.4912319-1.3293208.4914542-.5021258-.0002223-.9789755-.1753046-1.3283187-.4914542-.7261733-.6571745-1.6832835-1.0085458-2.6712392-1.0085458-.9878365 0-1.9453342.3515135-2.6706493 1.008332-.3497754.3163381-.8267557.4914457-1.3290263.491668-.502832-.0002223-.97980321-.1753492-1.32908476-.4912404-.72578749-.6572461-1.68328523-1.0087596-2.67112174-1.0087596-.34005846 0-.67646247.0416292-1.00105227.1230294l.00093437-8.1230294h4v2h2v-2c0-1.1045695-.8954305-2-2-2h-.999l-.001-2.001 2 .001v-2zm22.0003242 17.4999999c.3396204-.0001501.6755904-.0417799.9997827-.1230407v5.0076562c0 2.0259877-1.3775842 3.6153845-3.0001069 3.6153845h-16c-1.62252271 0-3-1.5893968-3-3.6153845l-.00148637-6.1285018c.29592169-.1666518.64208407-.2561137 1.00160427-.2561137.5026133 0 .97950576.1750753 1.32911493.4916681.72598912.6565871 1.68280283 1.0078952 2.67109137 1.0083319.9877-.0004367 1.9445263-.3517037 2.6710333-1.0087595.3491367-.3161652.8260292-.4912405 1.3286425-.4912405.5028479 0 .9795643.1750107 1.3292324.4914543.725724.6567679 1.6826278 1.008109 2.6713278 1.0085457.987581-.0004368 1.9447946-.351846 2.6704432-1.0085457.3496467-.3164242.826354-.4914543 1.3288787-.4914543.5028479 0 .9795643.1750107 1.3292324.4914543.6698295.6061843 1.5369688.9522395 2.4431705 1.0022354zm-8.0059505-15.50004556-1.999421.00109132c.0017379 1.66765868-.3914074 2.67484348-1.6096005 4.57626989l-.4357339.67326735c-1.1985316 1.8730246-1.7578573 3.1084741-1.9072678 4.7489216l2.013841.0007885c.1565646-1.2622433.6616712-2.2705308 1.7787146-3.9820993l.243287-.37580218c1.405662-2.19695557 1.9189882-3.50550246 1.9161806-5.64243718zm3.0005862.00002214c-.0019426 1.6881104-.3993036 2.69826243-1.6537336 4.66840333l-.3870791.60284703c-1.2033592 1.89238746-1.7606515 3.11545826-1.9109072 4.72843796h2.0148819c.1395749-1.0872185.5479182-1.9947141 1.4095297-3.3786139l.7616667-1.19781229c1.2938583-2.07979737 1.7634695-3.36210955 1.7656416-5.42219097zm5 0c-.0019426 1.6881104-.3993036 2.69826243-1.6537336 4.66840333l-.3870791.60284703c-1.2033592 1.89238746-1.7606515 3.11545826-1.9109072 4.72843796h2.0148819c.1395749-1.0872185.5479182-1.9947141 1.4095297-3.3786139l.7616667-1.19781229c1.2938583-2.07979737 1.7634695-3.36210955 1.7656416-5.42219097z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "6669c465e3169f7c2995f886",
//           "__v": 0,
//           "name": "Hot water"
//         },
//         {
//           "amenity_code": "lxc0fp8t",
//           "type": "Bathroom",
//           "svg": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"M18 1v2h-7v2h1a2 2 0 0 1 2 1.85V9.1a5 5 0 0 1 4 4.67V28a3 3 0 0 1-2.82 3H5a3 3 0 0 1-3-2.82V14a5 5 0 0 1 4-4.9V7a2 2 0 0 1 1.85-2H9V3H6V1h12zm-2 15.06c-1.14.15-2.08.6-3.58 1.55l-.34.23C9.63 19.41 8.29 20 6 20a9 9 0 0 1-2-.22V28a1 1 0 0 0 .88 1H15a1 1 0 0 0 1-.88V16.06zM27 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-14-2H7a3 3 0 0 0-3 2.82v3.89A6.85 6.85 0 0 0 6 18c1.63 0 2.64-.36 4.4-1.46l.64-.4c2.01-1.32 3.28-1.93 4.96-2.09V14a3 3 0 0 0-3-3zm14 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM25 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM12 7H8v2h4V7zm13-3a2 2 0 1 0 0 4 2 2 0 0 0 0-4z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "6669c465e3169f7c2995f889",
//           "__v": 0,
//           "name": "Shower gel"
//         }
//       ],
//       "latitude": 36.778259,
//       "longitude": -119.417931,
//       "Host_code": "lxu7fm9q",
//       "created_at": "2024-06-25T09:28:54.398Z",
//       "__v": 0
//     },
//     {
//       "_id": "667a908d4ced042bec9f3f76",
//       "nom": "Seaside Villa with Stunning Views",
//       "address": {
//         "address_code": "lxeh1owk",
//         "_id": "666c09c5773685a888281835",
//         "address": "123 Oxford Street",
//         "city": "London",
//         "country": "United Kingdom"
//       },
//       "category": {
//         "category_code": "lxbnkdj3",
//         "image": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1718185972/Categories/gizpvnwpkgqz6wwv9syz.png",
//         "type_service": "real_estate",
//         "status": "active",
//         "added_date": "2024-06-12T09:52:52.863Z",
//         "_id": "66696ff4601ab6992861d6c7",
//         "name": "Apartment"
//       },
//       "telephone": "+1122334455",
//       "bedrooms": 4,
//       "About": "Experience luxury in this seaside villa offering breathtaking ocean views.",
//       "Rating": 4.8,
//       "baths": 5,
//       "superficie": "400 sqm",
//       "beds": 8,
//       "guests": 10,
//       "etat": "Bon état",
//       "terrasse": true,
//       "garage": true,
//       "image": [
//         {
//           "public_id": "Hosts/aazropvmbzjn6qgk8gqs",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719308424/Hosts/aazropvmbzjn6qgk8gqs.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719308424/Hosts/aazropvmbzjn6qgk8gqs.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/fhdkhqq2klggybi0uzmy",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719308425/Hosts/fhdkhqq2klggybi0uzmy.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719308425/Hosts/fhdkhqq2klggybi0uzmy.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/f5oamt6yyivilsptad6t",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719308426/Hosts/f5oamt6yyivilsptad6t.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719308426/Hosts/f5oamt6yyivilsptad6t.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/sdd3wt9e60fnwhhtag4k",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719308427/Hosts/sdd3wt9e60fnwhhtag4k.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719308427/Hosts/sdd3wt9e60fnwhhtag4k.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/gra7ml6m82ebsv1zxkrm",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719308427/Hosts/gra7ml6m82ebsv1zxkrm.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719308427/Hosts/gra7ml6m82ebsv1zxkrm.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/jkpd1mhja3elbth2zfox",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719308428/Hosts/jkpd1mhja3elbth2zfox.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719308428/Hosts/jkpd1mhja3elbth2zfox.jpg",
//           "format": "jpg"
//         }
//       ],
//       "status": "ACTIVE",
//       "valid": true,
//       "price": 1800,
//       "workingTime": "24/7",
//       "statics": {
//         "contRatings": 250,
//         "countSaves": 120,
//         "countOrders": 350,
//         "countComments": 300
//       },
//       "rating": 4.7,
//       "translations": {
//         "fr": {
//           "nom": "Villa en Bord de Mer avec Vues Imprenables",
//           "About": "Vivez le luxe dans cette villa en bord de mer offrant des vues spectaculaires sur l'océan."
//         },
//         "ar": {
//           "nom": "فيلا على شاطئ البحر مع مناظر خلابة",
//           "About": "استمتع بالفخامة في هذه الفيلا على شاطئ البحر التي توفر مناظر ساحرة للمحيط."
//         }
//       },
//       "amenities": [
//         {
//           "amenity_code": "lxbsd1wo",
//           "svg": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"M16 20.33a3.67 3.67 0 1 1 0 7.34 3.67 3.67 0 0 1 0-7.34zm0 2a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34zM16 15a9 9 0 0 1 8.04 4.96l-1.51 1.51a7 7 0 0 0-13.06 0l-1.51-1.51A9 9 0 0 1 16 15zm0-5.33c4.98 0 9.37 2.54 11.94 6.4l-1.45 1.44a12.33 12.33 0 0 0-20.98 0l-1.45-1.45A14.32 14.32 0 0 1 16 9.66zm0-5.34c6.45 0 12.18 3.1 15.76 7.9l-1.43 1.44a17.64 17.64 0 0 0-28.66 0L.24 12.24c3.58-4.8 9.3-7.9 15.76-7.9z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "66698f6ded1e7369e52f9499",
//           "__v": 0,
//           "name": "Wi-Fi"
//         },
//         {
//           "amenity_code": "lxc0foky",
//           "type": "Bathroom",
//           "svg": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"M7.5 2a4.5 4.5 0 0 1 4.47 4H14v2H8V6h1.95A2.5 2.5 0 0 0 5 6.34V16h26v2h-2v5a5 5 0 0 1-3 4.58V30h-2v-2H8v2H6v-2.42a5 5 0 0 1-3-4.34V18H1v-2h2V6.5A4.5 4.5 0 0 1 7.5 2zM27 18H5v5a3 3 0 0 0 2.65 2.98l.17.01L8 26h16a3 3 0 0 0 3-2.82V23z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "6669c464e3169f7c2995f874",
//           "__v": 0,
//           "name": "Bath"
//         },
//         {
//           "amenity_code": "lxc0foz6",
//           "type": "Bathroom",
//           "svg": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"M20 1v2h-3v2h1a2 2 0 0 1 2 1.85V9a4 4 0 0 1 4 3.8V27a4 4 0 0 1-3.8 4H12a4 4 0 0 1-4-3.8V13a4 4 0 0 1 3.8-4h.2V7a2 2 0 0 1 1.85-2H15V3H8V1zm2 21H10v5a2 2 0 0 0 1.85 2H20a2 2 0 0 0 2-1.85V27zm0-6H10v4h12zm-2-5h-8a2 2 0 0 0-2 1.85V14h12v-1a2 2 0 0 0-2-2zm-2-4h-4v2h4z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "6669c465e3169f7c2995f880",
//           "__v": 0,
//           "name": "Conditioner"
//         },
//         {
//           "amenity_code": "lxc0fp5n",
//           "type": "Bathroom",
//           "svg": "\u003Csvg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"m4 2v2h2l.001 2h-1.001c-1.1045695 0-2 .8954305-2 2v16.3846154c0 3.0720253 2.20424471 5.6153846 5 5.6153846h16c2.7957553 0 5-2.5433593 5-5.6153846v-9.3846154h-2l.0006267 2.2441864c-.2957862.1662973-.6415947.2556548-1.0003023.2558136-.3770726-.0001668-.7397707-.0987428-1.0448826-.2813581l-.147435-.0980881-.0698054-.0542225-.0669618-.0575717c-.1674894-.1516722-.3473184-.2870627-.5370123-.4056091-.1267551-.0791722-.2576057-.1507019-.3921007-.2145789l-.2041007-.0899647c-.4828805-.1966888-1.005996-.2986069-1.537908-.2986069-.1521835 0-.3034078.0083174-.453179.0247859l-.2234033.0307902c-.658505.1092272-1.2810008.3778141-1.8035225.7911936l-.1911344.1617761c-.3493432.3161496-.8261929.4912319-1.3293208.4914542-.5021258-.0002223-.9789755-.1753046-1.3283187-.4914542-.7261733-.6571745-1.6832835-1.0085458-2.6712392-1.0085458-.9878365 0-1.9453342.3515135-2.6706493 1.008332-.3497754.3163381-.8267557.4914457-1.3290263.491668-.502832-.0002223-.97980321-.1753492-1.32908476-.4912404-.72578749-.6572461-1.68328523-1.0087596-2.67112174-1.0087596-.34005846 0-.67646247.0416292-1.00105227.1230294l.00093437-8.1230294h4v2h2v-2c0-1.1045695-.8954305-2-2-2h-.999l-.001-2.001 2 .001v-2zm22.0003242 17.4999999c.3396204-.0001501.6755904-.0417799.9997827-.1230407v5.0076562c0 2.0259877-1.3775842 3.6153845-3.0001069 3.6153845h-16c-1.62252271 0-3-1.5893968-3-3.6153845l-.00148637-6.1285018c.29592169-.1666518.64208407-.2561137 1.00160427-.2561137.5026133 0 .97950576.1750753 1.32911493.4916681.72598912.6565871 1.68280283 1.0078952 2.67109137 1.0083319.9877-.0004367 1.9445263-.3517037 2.6710333-1.0087595.3491367-.3161652.8260292-.4912405 1.3286425-.4912405.5028479 0 .9795643.1750107 1.3292324.4914543.725724.6567679 1.6826278 1.008109 2.6713278 1.0085457.987581-.0004368 1.9447946-.351846 2.6704432-1.0085457.3496467-.3164242.826354-.4914543 1.3288787-.4914543.5028479 0 .9795643.1750107 1.3292324.4914543.6698295.6061843 1.5369688.9522395 2.4431705 1.0022354zm-8.0059505-15.50004556-1.999421.00109132c.0017379 1.66765868-.3914074 2.67484348-1.6096005 4.57626989l-.4357339.67326735c-1.1985316 1.8730246-1.7578573 3.1084741-1.9072678 4.7489216l2.013841.0007885c.1565646-1.2622433.6616712-2.2705308 1.7787146-3.9820993l.243287-.37580218c1.405662-2.19695557 1.9189882-3.50550246 1.9161806-5.64243718zm3.0005862.00002214c-.0019426 1.6881104-.3993036 2.69826243-1.6537336 4.66840333l-.3870791.60284703c-1.2033592 1.89238746-1.7606515 3.11545826-1.9109072 4.72843796h2.0148819c.1395749-1.0872185.5479182-1.9947141 1.4095297-3.3786139l.7616667-1.19781229c1.2938583-2.07979737 1.7634695-3.36210955 1.7656416-5.42219097zm5 0c-.0019426 1.6881104-.3993036 2.69826243-1.6537336 4.66840333l-.3870791.60284703c-1.2033592 1.89238746-1.7606515 3.11545826-1.9109072 4.72843796h2.0148819c.1395749-1.0872185.5479182-1.9947141 1.4095297-3.3786139l.7616667-1.19781229c1.2938583-2.07979737 1.7634695-3.36210955 1.7656416-5.42219097z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "6669c465e3169f7c2995f886",
//           "__v": 0,
//           "name": "Hot water"
//         },
//         {
//           "amenity_code": "lxc0fp8t",
//           "type": "Bathroom",
//           "svg": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"M18 1v2h-7v2h1a2 2 0 0 1 2 1.85V9.1a5 5 0 0 1 4 4.67V28a3 3 0 0 1-2.82 3H5a3 3 0 0 1-3-2.82V14a5 5 0 0 1 4-4.9V7a2 2 0 0 1 1.85-2H9V3H6V1h12zm-2 15.06c-1.14.15-2.08.6-3.58 1.55l-.34.23C9.63 19.41 8.29 20 6 20a9 9 0 0 1-2-.22V28a1 1 0 0 0 .88 1H15a1 1 0 0 0 1-.88V16.06zM27 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-14-2H7a3 3 0 0 0-3 2.82v3.89A6.85 6.85 0 0 0 6 18c1.63 0 2.64-.36 4.4-1.46l.64-.4c2.01-1.32 3.28-1.93 4.96-2.09V14a3 3 0 0 0-3-3zm14 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM25 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM12 7H8v2h4V7zm13-3a2 2 0 1 0 0 4 2 2 0 0 0 0-4z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "6669c465e3169f7c2995f889",
//           "__v": 0,
//           "name": "Shower gel"
//         }
//       ],
//       "latitude": 51.514494,
//       "longitude": -0.145574,
//       "Host_code": "lxu7uid8",
//       "created_at": "2024-06-25T09:40:29.180Z",
//       "__v": 0
//     },
//     {
//       "_id": "667a98f44ced042bec9f42db",
//       "nom": "Charming Lakeside Cabin",
//       "address": {
//         "address_code": "lxeh1osv",
//         "_id": "666c09c5773685a888281831",
//         "address": "789 Broadway",
//         "city": "New York",
//         "country": "United States"
//       },
//       "category": {
//         "category_code": "lxbn1hcl",
//         "image": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1718185090/Categories/qg989zhtaihjqd83385h.png",
//         "type_service": "real_estate",
//         "status": "active",
//         "added_date": "2024-06-12T09:38:11.349Z",
//         "_id": "66696c83601ab6992861d64b",
//         "name": "Lakeside"
//       },
//       "telephone": "+1122334455",
//       "bedrooms": 2,
//       "About": "Discover serenity in this charming lakeside cabin nestled amidst nature.",
//       "Rating": 4.7,
//       "baths": 2,
//       "superficie": "200 sqm",
//       "beds": 4,
//       "guests": 6,
//       "etat": "Bon état",
//       "terrasse": true,
//       "garage": false,
//       "image": [
//         {
//           "public_id": "Hosts/m8w99wderfpuendr0sjt",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719310578/Hosts/m8w99wderfpuendr0sjt.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719310578/Hosts/m8w99wderfpuendr0sjt.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/axkrovqfnagmgdabodeu",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719310579/Hosts/axkrovqfnagmgdabodeu.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719310579/Hosts/axkrovqfnagmgdabodeu.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/cysxj5mcapxddoliz1q3",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719310580/Hosts/cysxj5mcapxddoliz1q3.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719310580/Hosts/cysxj5mcapxddoliz1q3.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/olh99d7kmokukakeatkq",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719310580/Hosts/olh99d7kmokukakeatkq.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719310580/Hosts/olh99d7kmokukakeatkq.jpg",
//           "format": "jpg"
//         }
//       ],
//       "status": "ACTIVE",
//       "valid": true,
//       "price": 1200,
//       "workingTime": "9:00 AM - 6:00 PM",
//       "statics": {
//         "contRatings": 150,
//         "countSaves": 80,
//         "countOrders": 250,
//         "countComments": 200
//       },
//       "rating": 4.6,
//       "translations": {
//         "fr": {
//           "nom": "Cabane de Charme au Bord du Lac",
//           "About": "Découvrez la sérénité dans cette charmante cabane au bord du lac, nichée au cœur de la nature."
//         },
//         "ar": {
//           "nom": "كوخ ساحر على ضفاف البحيرة",
//           "About": "اكتشف السكينة في هذا الكوخ الساحر على ضفاف البحيرة المنسجم مع الطبيعة."
//         }
//       },
//       "amenities": [
//         {
//           "amenity_code": "lxc0foky",
//           "type": "Bathroom",
//           "svg": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"M7.5 2a4.5 4.5 0 0 1 4.47 4H14v2H8V6h1.95A2.5 2.5 0 0 0 5 6.34V16h26v2h-2v5a5 5 0 0 1-3 4.58V30h-2v-2H8v2H6v-2.42a5 5 0 0 1-3-4.34V18H1v-2h2V6.5A4.5 4.5 0 0 1 7.5 2zM27 18H5v5a3 3 0 0 0 2.65 2.98l.17.01L8 26h16a3 3 0 0 0 3-2.82V23z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "6669c464e3169f7c2995f874",
//           "__v": 0,
//           "name": "Bath"
//         },
//         {
//           "amenity_code": "lxc0foz6",
//           "type": "Bathroom",
//           "svg": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"M20 1v2h-3v2h1a2 2 0 0 1 2 1.85V9a4 4 0 0 1 4 3.8V27a4 4 0 0 1-3.8 4H12a4 4 0 0 1-4-3.8V13a4 4 0 0 1 3.8-4h.2V7a2 2 0 0 1 1.85-2H15V3H8V1zm2 21H10v5a2 2 0 0 0 1.85 2H20a2 2 0 0 0 2-1.85V27zm0-6H10v4h12zm-2-5h-8a2 2 0 0 0-2 1.85V14h12v-1a2 2 0 0 0-2-2zm-2-4h-4v2h4z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "6669c465e3169f7c2995f880",
//           "__v": 0,
//           "name": "Conditioner"
//         },
//         {
//           "amenity_code": "lxc0fp5n",
//           "type": "Bathroom",
//           "svg": "\u003Csvg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"m4 2v2h2l.001 2h-1.001c-1.1045695 0-2 .8954305-2 2v16.3846154c0 3.0720253 2.20424471 5.6153846 5 5.6153846h16c2.7957553 0 5-2.5433593 5-5.6153846v-9.3846154h-2l.0006267 2.2441864c-.2957862.1662973-.6415947.2556548-1.0003023.2558136-.3770726-.0001668-.7397707-.0987428-1.0448826-.2813581l-.147435-.0980881-.0698054-.0542225-.0669618-.0575717c-.1674894-.1516722-.3473184-.2870627-.5370123-.4056091-.1267551-.0791722-.2576057-.1507019-.3921007-.2145789l-.2041007-.0899647c-.4828805-.1966888-1.005996-.2986069-1.537908-.2986069-.1521835 0-.3034078.0083174-.453179.0247859l-.2234033.0307902c-.658505.1092272-1.2810008.3778141-1.8035225.7911936l-.1911344.1617761c-.3493432.3161496-.8261929.4912319-1.3293208.4914542-.5021258-.0002223-.9789755-.1753046-1.3283187-.4914542-.7261733-.6571745-1.6832835-1.0085458-2.6712392-1.0085458-.9878365 0-1.9453342.3515135-2.6706493 1.008332-.3497754.3163381-.8267557.4914457-1.3290263.491668-.502832-.0002223-.97980321-.1753492-1.32908476-.4912404-.72578749-.6572461-1.68328523-1.0087596-2.67112174-1.0087596-.34005846 0-.67646247.0416292-1.00105227.1230294l.00093437-8.1230294h4v2h2v-2c0-1.1045695-.8954305-2-2-2h-.999l-.001-2.001 2 .001v-2zm22.0003242 17.4999999c.3396204-.0001501.6755904-.0417799.9997827-.1230407v5.0076562c0 2.0259877-1.3775842 3.6153845-3.0001069 3.6153845h-16c-1.62252271 0-3-1.5893968-3-3.6153845l-.00148637-6.1285018c.29592169-.1666518.64208407-.2561137 1.00160427-.2561137.5026133 0 .97950576.1750753 1.32911493.4916681.72598912.6565871 1.68280283 1.0078952 2.67109137 1.0083319.9877-.0004367 1.9445263-.3517037 2.6710333-1.0087595.3491367-.3161652.8260292-.4912405 1.3286425-.4912405.5028479 0 .9795643.1750107 1.3292324.4914543.725724.6567679 1.6826278 1.008109 2.6713278 1.0085457.987581-.0004368 1.9447946-.351846 2.6704432-1.0085457.3496467-.3164242.826354-.4914543 1.3288787-.4914543.5028479 0 .9795643.1750107 1.3292324.4914543.6698295.6061843 1.5369688.9522395 2.4431705 1.0022354zm-8.0059505-15.50004556-1.999421.00109132c.0017379 1.66765868-.3914074 2.67484348-1.6096005 4.57626989l-.4357339.67326735c-1.1985316 1.8730246-1.7578573 3.1084741-1.9072678 4.7489216l2.013841.0007885c.1565646-1.2622433.6616712-2.2705308 1.7787146-3.9820993l.243287-.37580218c1.405662-2.19695557 1.9189882-3.50550246 1.9161806-5.64243718zm3.0005862.00002214c-.0019426 1.6881104-.3993036 2.69826243-1.6537336 4.66840333l-.3870791.60284703c-1.2033592 1.89238746-1.7606515 3.11545826-1.9109072 4.72843796h2.0148819c.1395749-1.0872185.5479182-1.9947141 1.4095297-3.3786139l.7616667-1.19781229c1.2938583-2.07979737 1.7634695-3.36210955 1.7656416-5.42219097zm5 0c-.0019426 1.6881104-.3993036 2.69826243-1.6537336 4.66840333l-.3870791.60284703c-1.2033592 1.89238746-1.7606515 3.11545826-1.9109072 4.72843796h2.0148819c.1395749-1.0872185.5479182-1.9947141 1.4095297-3.3786139l.7616667-1.19781229c1.2938583-2.07979737 1.7634695-3.36210955 1.7656416-5.42219097z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "6669c465e3169f7c2995f886",
//           "__v": 0,
//           "name": "Hot water"
//         },
//         {
//           "amenity_code": "lxc0fp8t",
//           "type": "Bathroom",
//           "svg": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"M18 1v2h-7v2h1a2 2 0 0 1 2 1.85V9.1a5 5 0 0 1 4 4.67V28a3 3 0 0 1-2.82 3H5a3 3 0 0 1-3-2.82V14a5 5 0 0 1 4-4.9V7a2 2 0 0 1 1.85-2H9V3H6V1h12zm-2 15.06c-1.14.15-2.08.6-3.58 1.55l-.34.23C9.63 19.41 8.29 20 6 20a9 9 0 0 1-2-.22V28a1 1 0 0 0 .88 1H15a1 1 0 0 0 1-.88V16.06zM27 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-14-2H7a3 3 0 0 0-3 2.82v3.89A6.85 6.85 0 0 0 6 18c1.63 0 2.64-.36 4.4-1.46l.64-.4c2.01-1.32 3.28-1.93 4.96-2.09V14a3 3 0 0 0-3-3zm14 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM25 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM12 7H8v2h4V7zm13-3a2 2 0 1 0 0 4 2 2 0 0 0 0-4z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "6669c465e3169f7c2995f889",
//           "__v": 0,
//           "name": "Shower gel"
//         }
//       ],
//       "latitude": 40.729513,
//       "longitude": -73.993434,
//       "Host_code": "lxu94mpz",
//       "created_at": "2024-06-25T10:16:20.999Z",
//       "__v": 0
//     },
//     {
//       "_id": "667a99364ced042bec9f42e6",
//       "nom": "Mountain View Chalet",
//       "address": {
//         "address_code": "lxeh1p83",
//         "_id": "666c09c6773685a888281843",
//         "address": "890 Abdullah Al Hariri Street",
//         "city": "Beirut",
//         "country": "Lebanon"
//       },
//       "category": {
//         "category_code": "lxbmu04a",
//         "image": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1718184741/Categories/twkrfrsgneuiupsapdvm.png",
//         "type_service": "real_estate",
//         "status": "active",
//         "added_date": "2024-06-12T09:32:22.426Z",
//         "_id": "66696b26601ab6992861d624",
//         "name": "Countryside"
//       },
//       "telephone": "+123456789",
//       "bedrooms": 2,
//       "About": "Experience tranquility in this cozy chalet with stunning mountain views.",
//       "Rating": 4.6,
//       "baths": 2,
//       "superficie": "200 sqm",
//       "beds": 4,
//       "guests": 6,
//       "etat": "Bon état",
//       "terrasse": true,
//       "garage": false,
//       "image": [
//         {
//           "public_id": "Hosts/grilegdbcljts4k7w11i",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719310643/Hosts/grilegdbcljts4k7w11i.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719310643/Hosts/grilegdbcljts4k7w11i.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/hh5ovhh6xgccuufectji",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719310643/Hosts/hh5ovhh6xgccuufectji.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719310643/Hosts/hh5ovhh6xgccuufectji.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/ywz1xpiuwrt5m3skk4zk",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719310644/Hosts/ywz1xpiuwrt5m3skk4zk.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719310644/Hosts/ywz1xpiuwrt5m3skk4zk.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/nrcfa9vvbllkyvbw1cxs",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719310645/Hosts/nrcfa9vvbllkyvbw1cxs.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719310645/Hosts/nrcfa9vvbllkyvbw1cxs.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/qnzpqamntfkizimped8s",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719310646/Hosts/qnzpqamntfkizimped8s.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719310646/Hosts/qnzpqamntfkizimped8s.jpg",
//           "format": "jpg"
//         }
//       ],
//       "status": "ACTIVE",
//       "valid": true,
//       "price": 1200,
//       "workingTime": "9:00 AM - 5:00 PM",
//       "statics": {
//         "contRatings": 150,
//         "countSaves": 80,
//         "countOrders": 250,
//         "countComments": 180
//       },
//       "rating": 4.5,
//       "translations": {
//         "fr": {
//           "nom": "Chalet avec Vue sur la Montagne",
//           "About": "Découvrez la tranquillité dans ce chalet confortable avec une vue imprenable sur la montagne."
//         },
//         "ar": {
//           "nom": "شاليه بإطلالة على الجبال",
//           "About": "استمتع بالهدوء في هذا الشاليه الدافئ مع إطلالات خلابة على الجبال."
//         }
//       },
//       "amenities": [
//         {
//           "amenity_code": "lxbsd1wo",
//           "svg": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"M16 20.33a3.67 3.67 0 1 1 0 7.34 3.67 3.67 0 0 1 0-7.34zm0 2a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34zM16 15a9 9 0 0 1 8.04 4.96l-1.51 1.51a7 7 0 0 0-13.06 0l-1.51-1.51A9 9 0 0 1 16 15zm0-5.33c4.98 0 9.37 2.54 11.94 6.4l-1.45 1.44a12.33 12.33 0 0 0-20.98 0l-1.45-1.45A14.32 14.32 0 0 1 16 9.66zm0-5.34c6.45 0 12.18 3.1 15.76 7.9l-1.43 1.44a17.64 17.64 0 0 0-28.66 0L.24 12.24c3.58-4.8 9.3-7.9 15.76-7.9z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "66698f6ded1e7369e52f9499",
//           "__v": 0,
//           "name": "Wi-Fi"
//         },
//         {
//           "amenity_code": "lxc0foky",
//           "type": "Bathroom",
//           "svg": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"M7.5 2a4.5 4.5 0 0 1 4.47 4H14v2H8V6h1.95A2.5 2.5 0 0 0 5 6.34V16h26v2h-2v5a5 5 0 0 1-3 4.58V30h-2v-2H8v2H6v-2.42a5 5 0 0 1-3-4.34V18H1v-2h2V6.5A4.5 4.5 0 0 1 7.5 2zM27 18H5v5a3 3 0 0 0 2.65 2.98l.17.01L8 26h16a3 3 0 0 0 3-2.82V23z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "6669c464e3169f7c2995f874",
//           "__v": 0,
//           "name": "Bath"
//         },
//         {
//           "amenity_code": "lxc0foz6",
//           "type": "Bathroom",
//           "svg": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"M20 1v2h-3v2h1a2 2 0 0 1 2 1.85V9a4 4 0 0 1 4 3.8V27a4 4 0 0 1-3.8 4H12a4 4 0 0 1-4-3.8V13a4 4 0 0 1 3.8-4h.2V7a2 2 0 0 1 1.85-2H15V3H8V1zm2 21H10v5a2 2 0 0 0 1.85 2H20a2 2 0 0 0 2-1.85V27zm0-6H10v4h12zm-2-5h-8a2 2 0 0 0-2 1.85V14h12v-1a2 2 0 0 0-2-2zm-2-4h-4v2h4z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "6669c465e3169f7c2995f880",
//           "__v": 0,
//           "name": "Conditioner"
//         }
//       ],
//       "latitude": 33.88863,
//       "longitude": 35.49548,
//       "Host_code": "lxu961n9",
//       "created_at": "2024-06-25T10:17:26.997Z",
//       "__v": 0
//     },
//     {
//       "_id": "667bd78a4ced042bec9f5cca",
//       "nom": "Sunny Mountain Retreat",
//       "address": {
//         "address_code": "lxeh1p83",
//         "_id": "666c09c6773685a888281843",
//         "address": "890 Abdullah Al Hariri Street",
//         "city": "Beirut",
//         "country": "Lebanon"
//       },
//       "category": {
//         "category_code": "lxbmu04a",
//         "image": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1718184741/Categories/twkrfrsgneuiupsapdvm.png",
//         "type_service": "real_estate",
//         "status": "active",
//         "added_date": "2024-06-12T09:32:22.426Z",
//         "_id": "66696b26601ab6992861d624",
//         "name": "Countryside"
//       },
//       "telephone": "+123456790",
//       "bedrooms": 3,
//       "About": "Relax and unwind in this bright, spacious chalet with beautiful mountain views.",
//       "Rating": 4.8,
//       "baths": 3,
//       "superficie": "250 sqm",
//       "beds": 5,
//       "guests": 8,
//       "etat": "Bon état",
//       "terrasse": true,
//       "garage": true,
//       "image": [
//         {
//           "public_id": "Hosts/dtnurjmbqs2aall2fefz",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719392138/Hosts/dtnurjmbqs2aall2fefz.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719392138/Hosts/dtnurjmbqs2aall2fefz.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/cujvk1vne3vnonzmddev",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719392138/Hosts/cujvk1vne3vnonzmddev.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719392138/Hosts/cujvk1vne3vnonzmddev.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/cg7zdcduumpekwonf6uk",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719392139/Hosts/cg7zdcduumpekwonf6uk.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719392139/Hosts/cg7zdcduumpekwonf6uk.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/jxvqcjof6pagg4nqjblz",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1719392139/Hosts/jxvqcjof6pagg4nqjblz.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1719392139/Hosts/jxvqcjof6pagg4nqjblz.jpg",
//           "format": "jpg"
//         }
//       ],
//       "status": "ACTIVE",
//       "valid": true,
//       "price": 1500,
//       "workingTime": "9:00 AM - 5:00 PM",
//       "statics": {
//         "contRatings": 200,
//         "countSaves": 120,
//         "countOrders": 300,
//         "countComments": 220
//       },
//       "rating": 4.7,
//       "translations": {
//         "fr": {
//           "nom": "Retraite ensoleillée à la montagne",
//           "About": "Détendez-vous et reposez-vous dans ce chalet lumineux et spacieux avec une belle vue sur la montagne."
//         },
//         "ar": {
//           "nom": "منتجع جبلي مشمس",
//           "About": "استرخِ وتمتع بالراحة في هذا الشاليه الواسع والمشرق مع إطلالات جميلة على الجبال."
//         }
//       },
//       "amenities": [
//         {
//           "amenity_code": "lxbsd1wo",
//           "svg": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"M16 20.33a3.67 3.67 0 1 1 0 7.34 3.67 3.67 0 0 1 0-7.34zm0 2a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34zM16 15a9 9 0 0 1 8.04 4.96l-1.51 1.51a7 7 0 0 0-13.06 0l-1.51-1.51A9 9 0 0 1 16 15zm0-5.33c4.98 0 9.37 2.54 11.94 6.4l-1.45 1.44a12.33 12.33 0 0 0-20.98 0l-1.45-1.45A14.32 14.32 0 0 1 16 9.66zm0-5.34c6.45 0 12.18 3.1 15.76 7.9l-1.43 1.44a17.64 17.64 0 0 0-28.66 0L.24 12.24c3.58-4.8 9.3-7.9 15.76-7.9z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "66698f6ded1e7369e52f9499",
//           "__v": 0,
//           "name": "Wi-Fi"
//         },
//         {
//           "amenity_code": "lxc0foky",
//           "type": "Bathroom",
//           "svg": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"M7.5 2a4.5 4.5 0 0 1 4.47 4H14v2H8V6h1.95A2.5 2.5 0 0 0 5 6.34V16h26v2h-2v5a5 5 0 0 1-3 4.58V30h-2v-2H8v2H6v-2.42a5 5 0 0 1-3-4.34V18H1v-2h2V6.5A4.5 4.5 0 0 1 7.5 2zM27 18H5v5a3 3 0 0 0 2.65 2.98l.17.01L8 26h16a3 3 0 0 0 3-2.82V23z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "6669c464e3169f7c2995f874",
//           "__v": 0,
//           "name": "Bath"
//         },
//         {
//           "amenity_code": "lxc0foz6",
//           "type": "Bathroom",
//           "svg": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"M20 1v2h-3v2h1a2 2 0 0 1 2 1.85V9a4 4 0 0 1 4 3.8V27a4 4 0 0 1-3.8 4H12a4 4 0 0 1-4-3.8V13a4 4 0 0 1 3.8-4h.2V7a2 2 0 0 1 1.85-2H15V3H8V1zm2 21H10v5a2 2 0 0 0 1.85 2H20a2 2 0 0 0 2-1.85V27zm0-6H10v4h12zm-2-5h-8a2 2 0 0 0-2 1.85V14h12v-1a2 2 0 0 0-2-2zm-2-4h-4v2h4z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "6669c465e3169f7c2995f880",
//           "__v": 0,
//           "name": "Conditioner"
//         }
//       ],
//       "latitude": 33.889,
//       "longitude": 35.496,
//       "Host_code": "lxvlop5l",
//       "created_at": "2024-06-26T08:55:38.841Z",
//       "__v": 0
//     },
//     {
//       "_id": "6686bce416caae8542bebc78",
//       "nom": "Entire rental unit in Casablanca, Morocco",
//       "address": {
//         "address_code": "lxeh1p83",
//         "_id": "666c09c6773685a888281843",
//         "address": "890 Abdullah Al Hariri Street",
//         "city": "Beirut",
//         "country": "Lebanon"
//       },
//       "category": {
//         "category_code": "lxbmu0z2",
//         "image": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1718184743/Categories/yllntcrm0x4grj9bg5h4.png",
//         "type_service": "hospitality",
//         "status": "active",
//         "added_date": "2024-06-12T09:32:23.534Z",
//         "_id": "66696b27601ab6992861d627",
//         "name": "Seaside"
//       },
//       "telephone": "+123456790",
//       "bedrooms": 3,
//       "About": "Treat yourself to a dream stay in Casablanca in our very high standard apartment, with breathtaking views of the sea and the great Hassan II mosque. Relax in a cozy, tastefully decorated space, perfect for a business trip or a romantic getaway. We offer you a tailor-made service to make it feel like home. Don't miss this opportunity to have an unforgettable experience!",
//       "Rating": 5,
//       "baths": 3,
//       "superficie": "250 sqm",
//       "beds": 5,
//       "guests": 8,
//       "etat": "Bon état",
//       "terrasse": true,
//       "garage": true,
//       "image": [
//         {
//           "public_id": "Hosts/kcbj0fixf3ektwr8y3sv",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1720106208/Hosts/kcbj0fixf3ektwr8y3sv.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1720106208/Hosts/kcbj0fixf3ektwr8y3sv.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/nqhiu7940tkuiam1abxy",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1720106209/Hosts/nqhiu7940tkuiam1abxy.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1720106209/Hosts/nqhiu7940tkuiam1abxy.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/nhays3ocsa53i1b9iwk1",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1720106210/Hosts/nhays3ocsa53i1b9iwk1.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1720106210/Hosts/nhays3ocsa53i1b9iwk1.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/vd4s9iu2moup1sccetew",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1720106211/Hosts/vd4s9iu2moup1sccetew.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1720106211/Hosts/vd4s9iu2moup1sccetew.jpg",
//           "format": "jpg"
//         }
//       ],
//       "status": "ACTIVE",
//       "valid": true,
//       "price": 140,
//       "workingTime": "9:00 AM - 5:00 PM",
//       "statics": {
//         "contRatings": 200,
//         "countSaves": 120,
//         "countOrders": 300,
//         "countComments": 220
//       },
//       "rating": 4.7,
//       "translations": {
//         "fr": {
//           "nom": "Logement entier : appartement - Casablanca, Maroc",
//           "About": "Offrez-vous un séjour de rêve à Casablanca dans notre Appartement de très haut standing, avec une vue imprenable sur la mer et la grande mosquée Hassan II. Détendez-vous dans un espace cosy et décoré avec goût, parfait pour un voyage d'affaires ou une escapade en amoureux. Nous vous offrons un service sur mesure pour que vous vous sentiez comme chez vous. Ne manquez pas cette opportunité de vivre une expérience inoubliable!"
//         },
//         "ar": {
//           "nom": "وحدة تأجير بالكامل في الدار البيضاء المغرب,",
//           "About": "دلل نفسك بإقامة أحلامك في الدار البيضاء في شقتنا عالية المستوى، مع مناظر خلابة للبحر ومسجد الحسن الثاني الرائع. استرخ في مسكن مريح ومزين بذوق رفيع ومثالي لقضاء رحلة عمل أو لقضاء عطلة رومانسية. نحن نقدم لك خدمة مصممة خصيصًا لجعلها تبدو وكأنها في المنزل. لا تفوت هذه الفرصة للحصول على تجربة لا تنسى!"
//         }
//       },
//       "amenities": [
//         {
//           "amenity_code": "lxc0foky",
//           "type": "Bathroom",
//           "svg": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"M7.5 2a4.5 4.5 0 0 1 4.47 4H14v2H8V6h1.95A2.5 2.5 0 0 0 5 6.34V16h26v2h-2v5a5 5 0 0 1-3 4.58V30h-2v-2H8v2H6v-2.42a5 5 0 0 1-3-4.34V18H1v-2h2V6.5A4.5 4.5 0 0 1 7.5 2zM27 18H5v5a3 3 0 0 0 2.65 2.98l.17.01L8 26h16a3 3 0 0 0 3-2.82V23z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "6669c464e3169f7c2995f874",
//           "__v": 0,
//           "name": "Bath"
//         },
//         {
//           "amenity_code": "lxc0fopj",
//           "type": "Bathroom",
//           "svg": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"M14 27v.2a4 4 0 0 1-3.8 3.8H4v-2h6.15a2 2 0 0 0 1.84-1.84L12 27zM10 1c.54 0 1.07.05 1.58.14l.38.07 17.45 3.65a2 2 0 0 1 1.58 1.79l.01.16v6.38a2 2 0 0 1-1.43 1.91l-.16.04-13.55 2.83 1.76 6.5A2 2 0 0 1 15.87 27l-.18.01h-3.93a2 2 0 0 1-1.88-1.32l-.05-.15-1.88-6.76A9 9 0 0 1 10 1zm5.7 24-1.8-6.62-1.81.38a9 9 0 0 1-1.67.23h-.33L11.76 25zM10 3a7 7 0 1 0 1.32 13.88l.33-.07L29 13.18V6.8L11.54 3.17A7.03 7.03 0 0 0 10 3zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "6669c465e3169f7c2995f877",
//           "__v": 0,
//           "name": "Hair dryer"
//         }
//       ],
//       "latitude": 33.60767,
//       "longitude": -7.62936,
//       "Host_code": "ly7etscd",
//       "created_at": "2024-07-04T15:16:53.056Z",
//       "__v": 0
//     },
//     {
//       "_id": "6686c84316caae8542bebc83",
//       "nom": "Marina - Sea & Mosque View - By AppartAli",
//       "address": {
//         "address_code": "lxeh1p83",
//         "_id": "666c09c6773685a888281843",
//         "address": "890 Abdullah Al Hariri Street",
//         "city": "Beirut",
//         "country": "Lebanon"
//       },
//       "category": {
//         "category_code": "lxbmu0z2",
//         "image": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1718184743/Categories/yllntcrm0x4grj9bg5h4.png",
//         "type_service": "hospitality",
//         "status": "active",
//         "added_date": "2024-06-12T09:32:23.534Z",
//         "_id": "66696b27601ab6992861d627",
//         "name": "Seaside"
//       },
//       "telephone": "+123456790",
//       "bedrooms": 4,
//       "About": "This apartment has been carefully crafted to fit the different colors of Casablanca. Here, you will take advantage of the best sunset view after a long day of exploring the city. It is newly furnished, soaked with sunlight from sunrise to sunset and is located in front of Hassan II Mosque!!",
//       "Rating": 5,
//       "baths": 2,
//       "superficie": "250 sqm",
//       "beds": 4,
//       "guests": 6,
//       "etat": "Bon état",
//       "terrasse": true,
//       "garage": false,
//       "image": [
//         {
//           "public_id": "Hosts/oab8dannazlploycylqm",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1720109119/Hosts/oab8dannazlploycylqm.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1720109119/Hosts/oab8dannazlploycylqm.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/m9bqpeb6mcqrsbfkilds",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1720109119/Hosts/m9bqpeb6mcqrsbfkilds.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1720109119/Hosts/m9bqpeb6mcqrsbfkilds.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/lhtpfjpl4syjsn7sqqrd",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1720109120/Hosts/lhtpfjpl4syjsn7sqqrd.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1720109120/Hosts/lhtpfjpl4syjsn7sqqrd.jpg",
//           "format": "jpg"
//         },
//         {
//           "public_id": "Hosts/kufoq8fwbzsnjigokov4",
//           "url": "http://res.cloudinary.com/dtjqlcv4k/image/upload/v1720109121/Hosts/kufoq8fwbzsnjigokov4.jpg",
//           "secure_url": "https://res.cloudinary.com/dtjqlcv4k/image/upload/v1720109121/Hosts/kufoq8fwbzsnjigokov4.jpg",
//           "format": "jpg"
//         }
//       ],
//       "status": "ACTIVE",
//       "valid": true,
//       "price": 269,
//       "workingTime": "9:00 AM - 6:00 PM",
//       "statics": {
//         "contRatings": 200,
//         "countSaves": 120,
//         "countOrders": 300,
//         "countComments": 220
//       },
//       "rating": 4.7,
//       "translations": {
//         "fr": {
//           "nom": "Marina - Vue sur la mer et la mosquée - Par AppartAli",
//           "About": "Cet appartement a été soigneusement conçu pour s'adapter aux différentes couleurs de Casablanca. Ici, vous profiterez de la meilleure vue sur le coucher du soleil après une longue journée d'exploration de la ville. Il est récemment meublé, baigné de lumière du soleil du lever au coucher du soleil et est situé en face de la mosquée Hassan II ! !"
//         },
//         "ar": {
//           "nom": "مارينا - إطلالة على البحر والمساجد",
//           "About": "تم تصميم هذه الشقة بعناية لتناسب الألوان المختلفة للدار البيضاء. هنا ، ستستفيد من أفضل إطلالة على غروب الشمس بعد يوم طويل من استكشاف المدينة. تم تأثيثها حديثًا ، مغمورة بضوء الشمس من شروق الشمس إلى غروبها وتقع أمام مسجد الحسن الثاني!!"
//         }
//       },
//       "amenities": [
//         {
//           "amenity_code": "lxc0foky",
//           "type": "Bathroom",
//           "svg": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"M7.5 2a4.5 4.5 0 0 1 4.47 4H14v2H8V6h1.95A2.5 2.5 0 0 0 5 6.34V16h26v2h-2v5a5 5 0 0 1-3 4.58V30h-2v-2H8v2H6v-2.42a5 5 0 0 1-3-4.34V18H1v-2h2V6.5A4.5 4.5 0 0 1 7.5 2zM27 18H5v5a3 3 0 0 0 2.65 2.98l.17.01L8 26h16a3 3 0 0 0 3-2.82V23z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "6669c464e3169f7c2995f874",
//           "__v": 0,
//           "name": "Bath"
//         },
//         {
//           "amenity_code": "lxc0fopj",
//           "type": "Bathroom",
//           "svg": "\u003Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" role=\"presentation\" focusable=\"false\" style=\"display: block; height: 24px; width: 24px; fill: currentcolor;\"\u003E\u003Cpath d=\"M14 27v.2a4 4 0 0 1-3.8 3.8H4v-2h6.15a2 2 0 0 0 1.84-1.84L12 27zM10 1c.54 0 1.07.05 1.58.14l.38.07 17.45 3.65a2 2 0 0 1 1.58 1.79l.01.16v6.38a2 2 0 0 1-1.43 1.91l-.16.04-13.55 2.83 1.76 6.5A2 2 0 0 1 15.87 27l-.18.01h-3.93a2 2 0 0 1-1.88-1.32l-.05-.15-1.88-6.76A9 9 0 0 1 10 1zm5.7 24-1.8-6.62-1.81.38a9 9 0 0 1-1.67.23h-.33L11.76 25zM10 3a7 7 0 1 0 1.32 13.88l.33-.07L29 13.18V6.8L11.54 3.17A7.03 7.03 0 0 0 10 3zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z\"\u003E\u003C/path\u003E\u003C/svg\u003E",
//           "_id": "6669c465e3169f7c2995f877",
//           "__v": 0,
//           "name": "Hair dryer"
//         }
//       ],
//       "latitude": 33.6104,
//       "longitude": -7.6256,
//       "Host_code": "ly7gk634",
//       "created_at": "2024-07-04T16:05:23.537Z",
//       "__v": 0
//     }
//   ]



//  export function fetchHosts(categoryCode?: string) {
//     if (!categoryCode) {
//       return data; 
//     }
    
//     return data.filter((item:any) => item.category.category_code === categoryCode);
//   }


