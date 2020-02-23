import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// eslint-disable-next-line
var DATA = [
    {
        title: "Binding",
        tags: "Binding Hiding Miding Sliding SAVE",
        content:
            "This is the binding content area where information about binding is shown"
    },
    {
        title: "Constant",
        tags: "Math bath slather calf save",
        content:
            "This is the Constant content area where information about Constant is shown"
    },
    {
        title: "Numbers",
        tags: "Happy birthday sir and maam",
        content:
            "This is the Numbers content area where information about Numbers is shown"
    }
];

var DATA2 =[
    {
        "id": 1,
        "map_link": "",
        "resource_uri": "/en/api/shop/1/",
        "shop_adress": "SG - 21, GROUND FLOOR, GULISTHAN SHOPPING COMPLEX, BANGBANDHU AVENUE, GULISTHAN, DHAKA.",
        "shop_code": "SHOP037",
        "shop_manager": "Shariful Islam",
        "shop_mobile": "01787673835",
        "shop_name": "GULISTAN",
        "slug": ""
    },
    {
        "id": 2,
        "map_link": "",
        "resource_uri": "/en/api/shop/2/",
        "shop_adress": "290, AZAD PLAZA, BAZAR ROAD, LIBRARY POTTI, NARSINGDI.",
        "shop_code": "SHOP070",
        "shop_manager": "Md. Mosharaf Hossain",
        "shop_mobile": "01787673868",
        "shop_name": "NARSINGDI",
        "slug": ""
    },
    {
        "id": 3,
        "map_link": "",
        "resource_uri": "/en/api/shop/3/",
        "shop_adress": "70, B.B. RD UKIL PARA, NARAYANGONJ.",
        "shop_code": "SHOP032",
        "shop_manager": "Aftab Uddin Ahmed",
        "shop_mobile": "01787673830",
        "shop_name": "NARAYANGANJ",
        "slug": ""
    },
    {
        "id": 4,
        "map_link": "",
        "resource_uri": "/en/api/shop/4/",
        "shop_adress": "43, NEW ELEPHANT ROAD, DHAKA.",
        "shop_code": "SHOP009",
        "shop_manager": "Md. Nur Hossain",
        "shop_mobile": "01787673807",
        "shop_name": "43, ELEPHANT ROAD",
        "slug": ""
    },
    {
        "id": 5,
        "map_link": "",
        "resource_uri": "/en/api/shop/5/",
        "shop_adress": "HOUSE - 29/9, BLOCK C, TAJMAHALl RD (RING RD), MOHAMMADPUR.",
        "shop_code": "SHOP081",
        "shop_manager": "Md. Sahab Uddin",
        "shop_mobile": "01313098904",
        "shop_name": "RING ROAD",
        "slug": ""
    },
    {
        "id": 6,
        "map_link": "",
        "resource_uri": "/en/api/shop/6/",
        "shop_adress": "BALAKA BUILDING, NEW MARKET, DHAKA.",
        "shop_code": "SHOP008",
        "shop_manager": "Md. Ibrahim Khalil",
        "shop_mobile": "01787673806",
        "shop_name": "BALAKA",
        "slug": ""
    },
    {
        "id": 7,
        "map_link": "",
        "resource_uri": "/en/api/shop/7/",
        "shop_adress": "84, SHAMIBAGH RD, DOYAGONJ, DHAKA.",
        "shop_code": "SHOP036",
        "shop_manager": "Mahbub Mia",
        "shop_mobile": "01787673834",
        "shop_name": "DOYAGONJ",
        "slug": ""
    },
    {
        "id": 8,
        "map_link": "",
        "resource_uri": "/en/api/shop/8/",
        "shop_adress": "98, NEW ELEPHANT ROAD, DHAKA.",
        "shop_code": "SHOP001",
        "shop_manager": "Emon Khan",
        "shop_mobile": "01787673800",
        "shop_name": "98, ELEPHANT ROAD",
        "slug": ""
    },
    {
        "id": 9,
        "map_link": "",
        "resource_uri": "/en/api/shop/9/",
        "shop_adress": "SHOP NO - 20, 21 & 22, (2ND FLOOR), \nRAPA PLAZA, DHAKA.",
        "shop_code": "SHOP004",
        "shop_manager": "Md. Abu Faysal",
        "shop_mobile": "01787673802",
        "shop_name": "RAPA PLAZA",
        "slug": ""
    },
    {
        "id": 10,
        "map_link": "",
        "resource_uri": "/en/api/shop/10/",
        "shop_adress": "SHOP NO - 354, 3RD FLOOR, DHANMONDI, DHAKA",
        "shop_code": "SHOP005",
        "shop_manager": "Md. Shafi",
        "shop_mobile": "01787673803",
        "shop_name": "SHIMANTO SQUARE",
        "slug": ""
    },
    {
        "id": 11,
        "map_link": "",
        "resource_uri": "/en/api/shop/11/",
        "shop_adress": "SHAHID FARUQE RD, JATRABARI, DHAKA.",
        "shop_code": "SHOP041",
        "shop_manager": "Kazi Jahirul Islam",
        "shop_mobile": "01787673839",
        "shop_name": "JATRABARI",
        "slug": ""
    },
    {
        "id": 12,
        "map_link": "",
        "resource_uri": "/en/api/shop/12/",
        "shop_adress": "RING RD, MOHAMMADPUR, SHYMOLI, DHAKA.",
        "shop_code": "SHOP007",
        "shop_manager": "Md. Perves Mosharof",
        "shop_mobile": "01787673805",
        "shop_name": "SHYAMOLI",
        "slug": ""
    },
    {
        "id": 13,
        "map_link": "",
        "resource_uri": "/en/api/shop/13/",
        "shop_adress": "M.K. TOWER, SHIMULTOLA, SAVAR.",
        "shop_code": "SHOP057",
        "shop_manager": "Md. Al Masum Shekh",
        "shop_mobile": "01787673856",
        "shop_name": "SAVAR - 01",
        "slug": ""
    },
    {
        "id": 14,
        "map_link": "",
        "resource_uri": "/en/api/shop/14/",
        "shop_adress": "36, KEMAL ATATURK AVENUE, BANANI, DHAKA.",
        "shop_code": "SHOP016",
        "shop_manager": "Joynal Abedin Shajol",
        "shop_mobile": "01787673814",
        "shop_name": "BANANI",
        "slug": ""
    },
    {
        "id": 15,
        "map_link": "",
        "resource_uri": "/en/api/shop/15/",
        "shop_adress": "MIDTOWN SHOPPING MALL, 1ST FLOOR, MIRPUR, PALLOBI, DHAKA.",
        "shop_code": "SHOP029",
        "shop_manager": "Md. Rafiqur Rahman",
        "shop_mobile": "01787673827",
        "shop_name": "PALLABI",
        "slug": ""
    },
    {
        "id": 16,
        "map_link": "",
        "resource_uri": "/en/api/shop/16/",
        "shop_adress": "B - 32, SAVAR BAZAR BUS STAND, MADIDPUR, MAINROAD, SAVAR.",
        "shop_code": "SHOP072",
        "shop_manager": "Md. Sohag",
        "shop_mobile": "01787673869",
        "shop_name": "SAVAR - 03",
        "slug": ""
    },
    {
        "id": 17,
        "map_link": "",
        "resource_uri": "/en/api/shop/17/",
        "shop_adress": "60, SHAHID RAFIQUE SHAROK, MANIKGONJ.",
        "shop_code": "SHOP055",
        "shop_manager": "Md. Maynul Islam",
        "shop_mobile": "01787673853",
        "shop_name": "MANIKGANJ",
        "slug": ""
    },
    {
        "id": 18,
        "map_link": "",
        "resource_uri": "/en/api/shop/18/",
        "shop_adress": "ADARSHA SCHOOL, MIRPUR - 10, DHAKA.",
        "shop_code": "SHOP080",
        "shop_manager": "Rubel Nath",
        "shop_mobile": "+8801787673855",
        "shop_name": "MIRPUR - 10",
        "slug": ""
    },
    {
        "id": 19,
        "map_link": "",
        "resource_uri": "/en/api/shop/19/",
        "shop_adress": "13 TEJKUNI PARA, FARMGATE, DHAKA.",
        "shop_code": "SHOP010",
        "shop_manager": "Robin Khan",
        "shop_mobile": "01787673808",
        "shop_name": "FARMGATE - 01",
        "slug": ""
    },
    {
        "id": 20,
        "map_link": "",
        "resource_uri": "/en/api/shop/20/",
        "shop_adress": "MUKTOBANGLA SHOPPING COMPLEX, SHOP NO - 136-139, (1ST FLOOR), MIRPUR-01, DHAKA.",
        "shop_code": "SHOP054",
        "shop_manager": "Md. Miraj Hossain Mazumder",
        "shop_mobile": "01787673852",
        "shop_name": "MUKTO BANGLA",
        "slug": ""
    },
    {
        "id": 21,
        "map_link": "",
        "resource_uri": "/en/api/shop/21/",
        "shop_adress": "EAST SHEWRAPARA, ROKEYA SHORONI, SHEWRAPARA, DHAKA.",
        "shop_code": "SHOP023",
        "shop_manager": "Rafiqur Rahman",
        "shop_mobile": "01787673821",
        "shop_name": "SHEWRAPARA",
        "slug": ""
    },
    {
        "id": 22,
        "map_link": "",
        "resource_uri": "/en/api/shop/22/",
        "shop_adress": "13 TEJKUNI PARA, FARMGATE, DHAKA.",
        "shop_code": "SHOP006",
        "shop_manager": "Shankar Chandra Howlader",
        "shop_mobile": "01787673804",
        "shop_name": "FARMGATE - 02",
        "slug": ""
    },
    {
        "id": 23,
        "map_link": "",
        "resource_uri": "/en/api/shop/23/",
        "shop_adress": "BASHUNDHARA CITY, LEVEL - 6 ",
        "shop_code": "SHOP002",
        "shop_manager": "Md. Abdur Rahman",
        "shop_mobile": "01787673801",
        "shop_name": "BASHUNDHARA CITY - 02",
        "slug": ""
    },
    {
        "id": 24,
        "map_link": "",
        "resource_uri": "/en/api/shop/24/",
        "shop_adress": "B - 29, SAVAR BAZAR BUS STAND, MADIDPUR, MAINROAD, SAVAR.",
        "shop_code": "SHOP069",
        "shop_manager": "Md. Samidul Islam",
        "shop_mobile": "01787673865",
        "shop_name": "SAVAR - 02",
        "slug": ""
    },
    {
        "id": 25,
        "map_link": "",
        "resource_uri": "/en/api/shop/25/",
        "shop_adress": "SHAH ALI, SHOP NO - 72-73, MIRPUR-10, DHAKA.",
        "shop_code": "SHOP024",
        "shop_manager": "Md. Mijanur Rahman",
        "shop_mobile": "01787673822",
        "shop_name": "SHAH ALI PLAZA",
        "slug": ""
    },
    {
        "id": 26,
        "map_link": "",
        "resource_uri": "/en/api/shop/26/",
        "shop_adress": "SHOP NO - 23 & 36, BLOCK - C, LEVEL - 6, BASHUNDHARACITY SHOPPING MALL, DHAKA",
        "shop_code": "SHOP003",
        "shop_manager": "Abu Bashar Kaiyum",
        "shop_mobile": "01787673871",
        "shop_name": "BASHUNDHARA CITY - 01",
        "slug": ""
    },
    {
        "id": 27,
        "map_link": "",
        "resource_uri": "/en/api/shop/27/",
        "shop_adress": "BHI BHI SHOPING COMPLEX, SRIPUR ROAD, MAWNA.",
        "shop_code": "SHOP067",
        "shop_manager": "Achinta Mondal",
        "shop_mobile": "01787673862",
        "shop_name": "MAWNA",
        "slug": ""
    },
    {
        "id": 28,
        "map_link": "",
        "resource_uri": "/en/api/shop/28/",
        "shop_adress": "BAZAR ROAD, GAZIPUR BUS STAND, JOYDEBPUR.",
        "shop_code": "SHOP045",
        "shop_manager": "Moshiur Rahman",
        "shop_mobile": "01787673843",
        "shop_name": "JOYDEBPUR",
        "slug": ""
    },
    {
        "id": 29,
        "map_link": "",
        "resource_uri": "/en/api/shop/29/",
        "shop_adress": "HOLDING:398, CITY PORT, ASHKONA BAZAR ROAD, DOKKIN KHAN, UTTARA, DHAKA.",
        "shop_code": "SHOP020",
        "shop_manager": "Rasel Hossain",
        "shop_mobile": "01787673818",
        "shop_name": "ASHKONA",
        "slug": ""
    },
    {
        "id": 30,
        "map_link": "",
        "resource_uri": "/en/api/shop/30/",
        "shop_adress": "SONARGOAN JONAPATH RD, PLOT - 14, SECTOR - 9, UTTARA, DHAKA.",
        "shop_code": "SHOP014",
        "shop_manager": "MD. Bahar Uddin",
        "shop_mobile": "01787673812",
        "shop_name": "UTTARA - 02",
        "slug": ""
    },
    {
        "id": 31,
        "map_link": "",
        "resource_uri": "/en/api/shop/31/",
        "shop_adress": "GHA - 103, MIDDLE BADDA, DHAKA.",
        "shop_code": "SHOP019",
        "shop_manager": "Ohidul Islam",
        "shop_mobile": "01787673817",
        "shop_name": "BADDA - 02",
        "slug": ""
    },
    {
        "id": 32,
        "map_link": "",
        "resource_uri": "/en/api/shop/32/",
        "shop_adress": "HOUSE - 7-8, GROUND FLOOR,BLOCK - A, MAIN ROAD,BANASREE, RAMPURA, DHAKA.",
        "shop_code": "SHOP015",
        "shop_manager": "Md. Mohi Uddin",
        "shop_mobile": "01787673813",
        "shop_name": "BANASREE",
        "slug": ""
    },
    {
        "id": 33,
        "map_link": "",
        "resource_uri": "/en/api/shop/33/",
        "shop_adress": "ZENNAT CENTRE-2, H # 111/A, SECTOR # 04, ROAD # 07, UTTARA, DHAKA.",
        "shop_code": "SHOP013",
        "shop_manager": "Md. Ibrahim Khalil",
        "shop_mobile": "'01787673811",
        "shop_name": "UTTARA - 01",
        "slug": ""
    },
    {
        "id": 34,
        "map_link": "",
        "resource_uri": "/en/api/shop/34/",
        "shop_adress": "SHARIF MANSION, 1/5 DIT RD, HAZIPARA, RAMPURA, DHAKA.",
        "shop_code": "SHOP012",
        "shop_manager": "Md. Hasibul Hasan",
        "shop_mobile": "01787673810",
        "shop_name": "RAMPURA",
        "slug": ""
    },
    {
        "id": 35,
        "map_link": "",
        "resource_uri": "/en/api/shop/35/",
        "shop_adress": "46/A, RAJMONI SQUARE, VIP ROAD, KAKRAIL, DHAKA.",
        "shop_code": "SHOP018",
        "shop_manager": "Md. Rasel Ahmed",
        "shop_mobile": "01787673816",
        "shop_name": "KAKRAIL",
        "slug": ""
    },
    {
        "id": 36,
        "map_link": "",
        "resource_uri": "/en/api/shop/36/",
        "shop_adress": "PLOT - A 140, A141 PART, BSCIC, INDUSTRIAL PARK, KONABARI, GAZIPUR.",
        "shop_code": "SHOP044",
        "shop_manager": "Amarat Hossain Milon",
        "shop_mobile": "01787673842",
        "shop_name": "KONABARI",
        "slug": ""
    },
    {
        "id": 37,
        "map_link": "",
        "resource_uri": "/en/api/shop/37/",
        "shop_adress": "SHOP NO - 3B/026, 3RD FLOOR, JAMUNA FUTURE PARK, PROGATI SHORANI, DHAKA.",
        "shop_code": "SHOP011",
        "shop_manager": "Shamsuddin Md Muhtasim",
        "shop_mobile": "01787673809",
        "shop_name": "JAMUNA FUTURE PARK",
        "slug": ""
    },
    {
        "id": 38,
        "map_link": "",
        "resource_uri": "/en/api/shop/38/",
        "shop_adress": "GA - 2/C, PROGOTI SHARONI, SHAHJADPUR, BADDA, DHAKA.",
        "shop_code": "SHOP017",
        "shop_manager": "Mr. Kaylesh Chandra Mondol",
        "shop_mobile": "01787673815",
        "shop_name": "BADDA - 01",
        "slug": ""
    },
    {
        "id": 39,
        "map_link": "",
        "resource_uri": "/en/api/shop/39/",
        "shop_adress": "PLOT NO - 39, DHAKA MYMENSINGH RD, AZAMPUR, SECTOR - 3, UTTARA, DHAKA - 1230.",
        "shop_code": "SHOP077",
        "shop_manager": "Md. Abdul Haque",
        "shop_mobile": "+8801787673864",
        "shop_name": "UTTARA - 03",
        "slug": ""
    },
    {
        "id": 40,
        "map_link": "",
        "resource_uri": "/en/api/shop/40/",
        "shop_adress": "1050, AMIN COMPLEX, AIRPORT ROAD, AMBORKHANA, SYLHET.",
        "shop_code": "SHOP051",
        "shop_manager": "Numan Ahmad Juyel",
        "shop_mobile": "01787673849",
        "shop_name": "AMBARKHANA-02",
        "slug": ""
    },
    {
        "id": 41,
        "map_link": "",
        "resource_uri": "/en/api/shop/41/",
        "shop_adress": "71, COLLEGE ROAD, CHAWKBAZAR, CHATTAGRAM.",
        "shop_code": "SHOP033",
        "shop_manager": "Md.Saifuddin",
        "shop_mobile": "01787673831",
        "shop_name": "CHAWKBAZAR",
        "slug": ""
    },
    {
        "id": 42,
        "map_link": "",
        "resource_uri": "/en/api/shop/42/",
        "shop_adress": "CITY CENTRE (5TH FLOOR), ZINDABAZAR, SYLHET.",
        "shop_code": "SHOP042",
        "shop_manager": "Md Nazim uddin",
        "shop_mobile": "01787673840",
        "shop_name": "CITY CENTER",
        "slug": ""
    },
    {
        "id": 43,
        "map_link": "",
        "resource_uri": "/en/api/shop/43/",
        "shop_adress": "113, CENTRAL ROAD, PACHIM BAZAR, MOULVIBAZAR, SYLHET.",
        "shop_code": "SHOP047",
        "shop_manager": "Kobir Ahmed",
        "shop_mobile": "01787673845",
        "shop_name": "MOULVIBAZAR - 02",
        "slug": ""
    },
    {
        "id": 44,
        "map_link": "",
        "resource_uri": "/en/api/shop/44/",
        "shop_adress": "SHOP NO - A1, A2, IDRIS MARKET, MAIN RD. ZINDABAZAR, SYLHET.",
        "shop_code": "SHOP046",
        "shop_manager": "Md. Hafizul Islam",
        "shop_mobile": "01787673844",
        "shop_name": "ZINDABAZAR",
        "slug": ""
    },
    {
        "id": 45,
        "map_link": "",
        "resource_uri": "/en/api/shop/45/",
        "shop_adress": "BIPONI BITAN, NEW MARKET, CHATTAGRAM.",
        "shop_code": "SHOP035",
        "shop_manager": "Pankaj Sarker",
        "shop_mobile": "01787673833",
        "shop_name": "BIPONI BITAN",
        "slug": ""
    },
    {
        "id": 46,
        "map_link": "",
        "resource_uri": "/en/api/shop/46/",
        "shop_adress": "B.BARIA SHOPPING COMPLEX, FARIDUL HUDA ROAD, BRAGHMNBARIA",
        "shop_code": "SHOP040",
        "shop_manager": "Md. Shahidul Islam Mazumder",
        "shop_mobile": "01787673838",
        "shop_name": "BRAHMANBARIA",
        "slug": ""
    },
    {
        "id": 47,
        "map_link": "",
        "resource_uri": "/en/api/shop/47/",
        "shop_adress": "K.K MANSION, CHALLY BONDOR, SOBHANI GHAT, UPOSHOHOR, SYLHET.",
        "shop_code": "SHOP043",
        "shop_manager": "Syed Abul Hasan",
        "shop_mobile": "01787673841",
        "shop_name": "UPASHAHAR",
        "slug": ""
    },
    {
        "id": 48,
        "map_link": "",
        "resource_uri": "/en/api/shop/48/",
        "shop_adress": "CDA AVENUE, O.R NIZAM ROAD, CHATTAGRAM.",
        "shop_code": "SHOP038",
        "shop_manager": "Sohidul Islam",
        "shop_mobile": "01787673836",
        "shop_name": "O.R. NIZAM ROAD",
        "slug": ""
    },
    {
        "id": 49,
        "map_link": "",
        "resource_uri": "/en/api/shop/49/",
        "shop_adress": "GROUND FLOOR, BHAIBPUR, BANGABANDHU SARAK, BHAIRAB.",
        "shop_code": "SHOP052",
        "shop_manager": "Md. Wahiduzzaman  (Jalil)",
        "shop_mobile": "01787673850",
        "shop_name": "BHAIRAB",
        "slug": ""
    },
    {
        "id": 50,
        "map_link": "",
        "resource_uri": "/en/api/shop/50/",
        "shop_adress": "ROYAL PLAZA, SREEMONGOL, SYLHET.",
        "shop_code": "SHOP048",
        "shop_manager": "Md. Saiful Islam",
        "shop_mobile": "01787673846",
        "shop_name": "SREEMANGAL",
        "slug": ""
    },
    {
        "id": 51,
        "map_link": "",
        "resource_uri": "/en/api/shop/51/",
        "shop_adress": "325, SULTAN MANSION,  TRUNK ROAD, FENI.",
        "shop_code": "SHOP068",
        "shop_manager": "Faruk Ahmed",
        "shop_mobile": "01787673863",
        "shop_name": "FENI",
        "slug": ""
    },
    {
        "id": 52,
        "map_link": "",
        "resource_uri": "/en/api/shop/52/",
        "shop_adress": "HOTEL ZILANI, HOLDING NO - 278, MAIN RD, COX'S BAZAR.",
        "shop_code": "SHOP082",
        "shop_manager": "Kawsar Kazi",
        "shop_mobile": "01313098901",
        "shop_name": "COX'S BAZAR - 02",
        "slug": ""
    },
    {
        "id": 53,
        "map_link": "",
        "resource_uri": "/en/api/shop/53/",
        "shop_adress": "KANDIR PAR, COMILLA.",
        "shop_code": "SHOP034",
        "shop_manager": "Md. Fazar Ali",
        "shop_mobile": "01787673832",
        "shop_name": "COMILLA",
        "slug": ""
    },
    {
        "id": 54,
        "map_link": "",
        "resource_uri": "/en/api/shop/54/",
        "shop_adress": "HASHEM TOWER (2ND FLOOR), PANBAZAR SHOROK, PANBAZAR, COX'S BAZAR.",
        "shop_code": "SHOP031",
        "shop_manager": "Golam Faruk",
        "shop_mobile": "01787673829",
        "shop_name": "COX'S BAZAR - 01",
        "slug": ""
    },
    {
        "id": 55,
        "map_link": "",
        "resource_uri": "/en/api/shop/55/",
        "shop_adress": "HALISHAHAR, CHITTAGONJ.",
        "shop_code": "SHOP073",
        "shop_manager": "Md. Mohan Mia",
        "shop_mobile": "01787673870",
        "shop_name": "HALISHAHAR",
        "slug": ""
    },
    {
        "id": 56,
        "map_link": "",
        "resource_uri": "/en/api/shop/56/",
        "shop_adress": "SHOP NO - 324, CHORPARA MOR, MYMENSINGH.",
        "shop_code": "SHOP078",
        "shop_manager": "Md. Hanif",
        "shop_mobile": "01787673874",
        "shop_name": "MYMENSINGH - 02",
        "slug": ""
    },
    {
        "id": 57,
        "map_link": "",
        "resource_uri": "/en/api/shop/57/",
        "shop_adress": "S.S ROAD, SIRAJGONJ.",
        "shop_code": "SHOP030",
        "shop_manager": "Md. Nadir Hossain",
        "shop_mobile": "01787673828",
        "shop_name": "SIRAJGANJ - 01",
        "slug": ""
    },
    {
        "id": 58,
        "map_link": "",
        "resource_uri": "/en/api/shop/58/",
        "shop_adress": "AKUR TAKUR PARA, TANGAIL.",
        "shop_code": "SHOP022",
        "shop_manager": "Md. Perves Mosharof",
        "shop_mobile": "01787673820",
        "shop_name": "TANGAIL",
        "slug": ""
    },
    {
        "id": 59,
        "map_link": "",
        "resource_uri": "/en/api/shop/59/",
        "shop_adress": "HOUSE NO - 309, ROAD - 01, DAWANBARI ROAD, RANGPUR.",
        "shop_code": "SHOP071",
        "shop_manager": "Md. Shariful Islam",
        "shop_mobile": "01787673867",
        "shop_name": "RANGPUR - 02",
        "slug": ""
    },
    {
        "id": 60,
        "map_link": "",
        "resource_uri": "/en/api/shop/60/",
        "shop_adress": "SHOP NO - 504, PALIKA AC MARKET, 46 STATION RD, MYMENSINGH.",
        "shop_code": "SHOP049",
        "shop_manager": "Md. Harun Ar Rashid",
        "shop_mobile": "01787673847",
        "shop_name": "MYMENSINGH - 01",
        "slug": ""
    },
    {
        "id": 61,
        "map_link": "",
        "resource_uri": "/en/api/shop/61/",
        "shop_adress": "2352 (NEW), 363 (OLD), SHAHID ABDUL JABBAR SHAROK, JALESWARITOLA, BOGRA.",
        "shop_code": "SHOP028",
        "shop_manager": "Mohammad Ali",
        "shop_mobile": "01787673826",
        "shop_name": "BOGRA - 01",
        "slug": ""
    },
    {
        "id": 62,
        "map_link": "",
        "resource_uri": "/en/api/shop/62/",
        "shop_adress": "SATHMATHA MORE, BOGRA.",
        "shop_code": "SHOP074",
        "shop_manager": "False",
        "shop_mobile": "+8801787673872",
        "shop_name": "BOGRA - 02",
        "slug": ""
    },
    {
        "id": 63,
        "map_link": "",
        "resource_uri": "/en/api/shop/63/",
        "shop_adress": "425, S S ROAD, SIRAJGANJ.",
        "shop_code": "SHOP083",
        "shop_manager": "Md. Alomgir Hossain",
        "shop_mobile": "01313098906",
        "shop_name": "SIRAJGANJ - 02",
        "slug": ""
    },
    {
        "id": 64,
        "map_link": "",
        "resource_uri": "/en/api/shop/64/",
        "shop_adress": "STAR PLAZA, SOKAL BAZAR, JAMALPUR.",
        "shop_code": "SHOP050",
        "shop_manager": "Md. Imran Hossain",
        "shop_mobile": "01787673848",
        "shop_name": "JAMALPUR - 01",
        "slug": ""
    },
    {
        "id": 65,
        "map_link": "",
        "resource_uri": "/en/api/shop/65/",
        "shop_adress": "AKAND MANSION, SADAR RASTA, BATAR MORE, JOUPURHAT.",
        "shop_code": "SHOP025",
        "shop_manager": "Md. Shafiqul Islam Khan",
        "shop_mobile": "01787673823",
        "shop_name": "JOYPURHAT",
        "slug": ""
    },
    {
        "id": 66,
        "map_link": "",
        "resource_uri": "/en/api/shop/66/",
        "shop_adress": "PAYRA CHATTAR, RANGPUR.",
        "shop_code": "SHOP084",
        "shop_manager": "Mr. Sarafat Aftabi",
        "shop_mobile": "01787673837",
        "shop_name": "RANGPUR - 03",
        "slug": ""
    },
    {
        "id": 67,
        "map_link": "",
        "resource_uri": "/en/api/shop/67/",
        "shop_adress": "GOLDEN TOWER SHOPPING COMPLEX, GROUND FLOOR, JAHAJ COMPANY MOR, RANGPUR.",
        "shop_code": "SHOP026",
        "shop_manager": "Md. Mehedi Hasan",
        "shop_mobile": "01787673824",
        "shop_name": "RANGPUR - 01",
        "slug": ""
    },
    {
        "id": 68,
        "map_link": "",
        "resource_uri": "/en/api/shop/68/",
        "shop_adress": "SHOP NO - 1194, EAST JAME MOSJID RD, JAMALPUR SADAR, JAMALPUR.",
        "shop_code": "SHOP079",
        "shop_manager": "Md. Kazi Rustom",
        "shop_mobile": "01787673873",
        "shop_name": "JAMALPUR - 02",
        "slug": ""
    },
    {
        "id": 69,
        "map_link": "",
        "resource_uri": "/en/api/shop/69/",
        "shop_adress": "GULSHAN TRADE CENTRE, STATION RD, DINAJPUR.",
        "shop_code": "SHOP027",
        "shop_manager": "Md. Abu Hanif",
        "shop_mobile": "01787673825",
        "shop_name": "DINAJPUR",
        "slug": ""
    },
    {
        "id": 70,
        "map_link": "",
        "resource_uri": "/en/api/shop/70/",
        "shop_adress": "HOLDING NO. 24, RAJSHAHI RANI BAZAR (BATAR MORE), RAJSHAHI.",
        "shop_code": "SHOP061",
        "shop_manager": "Md. Jasim Uddin",
        "shop_mobile": "01787673861",
        "shop_name": "RAJSHAHI - 02",
        "slug": ""
    },
    {
        "id": 71,
        "map_link": "",
        "resource_uri": "/en/api/shop/71/",
        "shop_adress": "SULTANABAD, RAJSHAHI NEWMARKET EAST GATE, BOALIA, RAJSHAHI.",
        "shop_code": "SHOP021",
        "shop_manager": "Shamim Osman",
        "shop_mobile": "01787673819",
        "shop_name": "RAJSHAHI - 01",
        "slug": ""
    },
    {
        "id": 72,
        "map_link": "",
        "resource_uri": "/en/api/shop/72/",
        "shop_adress": "237, COLLEGE ROAD, RAJBARI.",
        "shop_code": "SHOP058",
        "shop_manager": "Ashraful Islam",
        "shop_mobile": "01787673858",
        "shop_name": "RAJBARI",
        "slug": ""
    },
    {
        "id": 73,
        "map_link": "",
        "resource_uri": "/en/api/shop/73/",
        "shop_adress": "69, CEMETTRI ROAD, KHULNA.",
        "shop_code": "SHOP053",
        "shop_manager": "Md. Rasel Mridha",
        "shop_mobile": "01787673851",
        "shop_name": "KHULNA",
        "slug": ""
    },
    {
        "id": 74,
        "map_link": "",
        "resource_uri": "/en/api/shop/74/",
        "shop_adress": "99, CHAWKBAZAR, FERI GHAT ROAD, BARISAL.",
        "shop_code": "SHOP056",
        "shop_manager": "Aminul Islam",
        "shop_mobile": "01787673854",
        "shop_name": "BARISAL - 01",
        "slug": ""
    },
    {
        "id": 75,
        "map_link": "",
        "resource_uri": "/en/api/shop/75/",
        "shop_adress": "19KB HEMAYET UDDIN RD, GIRJA MOHOLLA, BIBIPUKURPAR, BARISAL.",
        "shop_code": "SHOP095",
        "shop_manager": "Md. Rasel Howlader",
        "shop_mobile": "01313098905",
        "shop_name": "BARISAL - 02",
        "slug": ""
    },
    {
        "id": 76,
        "map_link": "",
        "resource_uri": "/en/api/shop/76/",
        "shop_adress": "MALIK TOWER, BORO BAZAR, CHUADANGA.",
        "shop_code": "SHOP059",
        "shop_manager": "Modon Kumar Mondol",
        "shop_mobile": "01787673860",
        "shop_name": "CHUADANGA",
        "slug": ""
    }
]
// Render
ReactDOM.render(<App data={DATA2} />, document.getElementById('app'));
// ReactDOM.render(<App />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
