
const Stacks = [
    {
        id: 1,
        title: "JavaScript",
        category: "GENERAL PROGRAMMING",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
    },
    {
        id: 2,
        title: "TypeScript",
        category: "GENERAL PROGRAMMING",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
    },
    {
        id: 3,
        title: "Dart",
        category: "GENERAL PROGRAMMING",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png"
    },
    {
        id: 4,
        title: "Python",
        category: "GENERAL PROGRAMMING",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png"
    },
    {
        id: 4.5,
        title: "C++",
        category: "GENERAL PROGRAMMING",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
    },
    {
        id: 5,
        title: "React JS",
        category: "FRAMEWORKS & DATABASES",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
    },
    {
        id: 5.6,
        title: "Flutter",
        category: "FRAMEWORKS & DATABASES",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flutter_logo.svg/2048px-Flutter_logo.svg.png"
    },
    {
        id: 5.5,
        title: "React Native",
        category: "FRAMEWORKS & DATABASES",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
    },
    {
        id: 6,
        title: "Express",
        category: "FRAMEWORKS & DATABASES",
        img: "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
    },
    {
        id: 7,
        title: "MongoDB",
        category: "FRAMEWORKS & DATABASES",
        img: "https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png"
    },
    {
        id: 8,
        title: "NodeJS",
        category: "FRAMEWORKS & DATABASES",
        img: "https://ih1.redbubble.net/image.1637717834.1604/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg"
    },
    {
        id: 9,
        title: "Firestore",
        category: "FRAMEWORKS & DATABASES",
        img: "https://logowik.com/content/uploads/images/firestore6915.jpg"
    },
    {
        id: 9.5,
        title: "DynamoDB",
        category: "FRAMEWORKS & DATABASES",
        img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/DynamoDB.png"
    },
    {
        id: 10,
        title: "Redux",
        category: "TOOLS & UTILITIES",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
    },
    {
        id: 10.5,
        title: "Bloc",
        category: "TOOLS & UTILITIES",
        img: "https://plugins.jetbrains.com/files/12129/612258/icon/default.png"
    },
    {
        id: 11,
        title: " REST APIS",
        category: "TOOLS & UTILITIES",
        img: "https://www.iconpacks.net/icons/free-icons-6/free-rest-api-blue-logo-icon-22098-thumb.png"
    },
    {
        id: 12,
        title: "Next.js,",
        category: "TOOLS & UTILITIES",
        img: "https://miro.medium.com/v2/resize:fit:983/1*W0fC854FAMD1EP60bnl2lg.png"
    },
    {
        id: 13,
        title: "Gatsby",
        category: "TOOLS & UTILITIES",
        img: "https://upload.wikimedia.org/wikipedia/en/d/d0/Gatsby_Logo.png"
    },
    {
        id: 14,
        title: "GitHub",
        category: "TOOLS & UTILITIES",
        img: "https://cdn-icons-png.flaticon.com/512/25/25231.png"
    },
    {
        id: 15,
        title: "AWS",
        category: "TOOLS & UTILITIES",
        img: "https://pngset.com/images/cloud-service-management-aws-cloud-logo-symbol-trademark-text-label-transparent-png-2620254.png"
    },
    {
        id: 15.5,
        title: "GCP",
        category: "TOOLS & UTILITIES",
        img: "https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png"
    },
    {
        id: 16,
        title: "Postman",
        category: "TOOLS & UTILITIES",
        img: "https://w7.pngwing.com/pngs/28/245/png-transparent-postman-hd-logo.png"
    },
    {
        id: 17,
        title: "Docker",
        category: "TOOLS & UTILITIES",
        img: "https://thumbs.dreamstime.com/b/astana-kazakhstan-july-docker-icon-logo-vector-symbol-198642048.jpg"
    },
    {
        id: 18,
        title: "Figma",
        category: "TOOLS & UTILITIES",
        img: "https://s3-alpha.figma.com/hub/file/697598809/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png"
    },
    {
        id: 19,
        title: "Adobe XD",
        category: "TOOLS & UTILITIES",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1051px-Adobe_XD_CC_icon.svg.png"
    },
    {
        id: 20,
        title: "Illustrator",
        category: "TOOLS & UTILITIES",
        img: "https://static.vecteezy.com/system/resources/previews/005/488/339/non_2x/adobe-illustrator-logo-free-vector.jpg"
    },
    {
        id: 21,
        title: "Premier Pro",
        category: "TOOLS & UTILITIES",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Adobe_Premiere_Pro_Logo.svg/1200px-Adobe_Premiere_Pro_Logo.svg.png"
    },
    {
        id: 22,
        title: "After Effects",
        category: "TOOLS & UTILITIES",
        img: "https://seeklogo.com/images/A/after-effects-cc-logo-BCC55BAFF7-seeklogo.com.png"
    },

];

export default Stacks;