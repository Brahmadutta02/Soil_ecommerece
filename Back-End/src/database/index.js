const { Sequelize, DataTypes } = require("sequelize");
const config = require("./config.js");

const db = {
  Op: Sequelize.Op
};

// Create Sequelize.
db.sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.DIALECT
});

// Include models.
db.user = require("./models/user.js")(db.sequelize, DataTypes);
db.product = require("./models/product.js")(db.sequelize, DataTypes);
db.review = require("./models/review.js")(db.sequelize, DataTypes);
db.cart = require("./models/cart.js")(db.sequelize, DataTypes);

// Relate post and user.
db.user.hasMany(db.cart);
db.cart.belongsTo(db.user);
db.cart.belongsToMany(db.product, {through: "product_cart"});
db.product.belongsToMany(db.cart, {through: "product_cart"});
db.user.hasMany(db.review);
db.review.belongsTo(db.user);
db.product.hasMany(db.review);
db.review.belongsTo(db.product);
// Learn more about associations here: https://sequelize.org/master/manual/assocs.html

// Include a sync option with seed data logic included.
db.sync = async () => {
  // Sync schema.
  await db.sequelize.sync();

  // Can sync with force if the schema has become out of date - note that syncing with force is a destructive operation.
  // await db.sequelize.sync({ force: true });
  await seedData();
};

async function seedData() {
  const count = await db.product.count();

  // Only seed data if necessary.
  if(count > 0){
    return;
  }

    const products = [

      {
        
        name: "Carrots",
        price: "$0.40",
        salePrice: "$0.40",
        unit: "each",
        src: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90fGVufDB8fDB8fHww",
        description: "Fresh Carrots",
        special: false

    },
     {
        name: "Lettuce",
        price: "$3.60",
        salePrice: "$3.60",
        unit: "each",
        src: "https://images.unsplash.com/photo-1556781366-336f8353ba7c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGV0dHVjZXxlbnwwfHwwfHx8MA%3D%3D",
        description: "Fresh Lettuce",
        special: false
    
    },
     {
        name: "Cauliflower Whole",
        price: "$4.50",
        salePrice: "$4.50",
        unit: "each",
        src: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F1bGlmbG93ZXJ8ZW58MHx8MHx8fDA%3D",
        description: "Organic Cauliflower",
        special: false

    },
     {
        name: "Kidney Beans",
        price: "$0.75",
        salePrice: "$0.75",
        unit: "per 100g",
        src: "https://images.unsplash.com/flagged/photo-1577226259316-c566059cd6fc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkbmV5JTIwYmVhbnxlbnwwfHwwfHx8MA%3D%3D",
        description: "Protein-Packed Kidney Beans",
        special: false
    },
     {
        name: "Spinach",
        price: "$18",
        salePrice: "$18",
        unit: "per Kg",
        src: "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D",
        description: "Fresh Spinach",
        special: false
    },
     {
        name: "Broccoli",
        price: "$1.60",
        salePrice: "$1.60",
        unit: "each",
        src: "https://images.unsplash.com/photo-1628773822990-202aed1e567e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyb2Njb2xpfGVufDB8fDB8fHww",
        description: "Fresh Broccoli",
        special: false
    },
     {
        name: "Beetroot",
        price: "$1.80",
        salePrice: "$1.80",
        unit: "each",
        src: "https://images.unsplash.com/photo-1533231040102-5ec7a63e6d0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVldHJvb3R8ZW58MHx8MHx8fDA%3D",
        description: "Fresh Beetroot",
        special: false
    },
    {
      name: "Cabbage Whole",
      price: "$10",
      salePrice: "$10",
      unit: "each",
      src: "https://images.unsplash.com/photo-1579584705540-46ebde56da8d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FiYmFnZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Fresh Cabbage",
      special: false
   },
   {
      name: "Green Capsicum",
      price: "$2",
      salePrice: "$2",
      unit: "each",
      src: "https://images.unsplash.com/photo-1663500004095-a7482241694c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fwc2ljdW0lMjBncmVlbnxlbnwwfHwwfHx8MA%3D%3D",
      description: "Fresh Capsicum",
      special: false
    },
    {
      name: "Organic Fertiliser",
      price: "$20",
      salePrice: "$15",
      unit: "per Kg",
      src: "https://media.istockphoto.com/id/172967685/photo/shovel-full-of-compost.jpg?s=1024x1024&w=is&k=20&c=HDQF3Az8lec_v1Jl7SRWCBqOSJfcE9FOq1W6Tlvll88=",
      description: "Boost your soil with our fertiliser",
      special: true

  },
   {
      name: "Fresh Pink Lady Apples",
      price: "$2",
      salePrice: "$1.5",
      unit: "each",
      src: "https://images.unsplash.com/photo-1630563451961-ac2ff27616ab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcGxlfGVufDB8fDB8fHww",
      description: "Delicious pink lady apples",
      special: true
  
  },
   {
      name: "Baby Cucumbers",
      price: "$16",
      salePrice: "$12",
      unit: "per Kg",
      src: "https://images.unsplash.com/photo-1587411768638-ec71f8e33b78?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3VjdW1iZXJ8ZW58MHx8MHx8fDA%3D",
      description: "Fresh Cucumbers",
      special: true

  },
   {
      name: "Gold Kiwifruit",
      price: "$3",
      salePrice: "$2",
      unit: "each",
      src: "https://media.istockphoto.com/id/1083918554/photo/golden-kiwifruit-slice-on-wood.webp?b=1&s=170667a&w=0&k=20&c=3YgUK7QdLRBapB-FlqZpZycuFY73kuo7jaZXvSWKmGk=",
      description: "Delicious Aussie Kiwies",
      special: true
  },
   {
      name: "Navel Oranges",
      price: "$7",
      salePrice: "$5",
      unit: "per Kg",
      src: "https://images.unsplash.com/photo-1661882002589-d93b357a2ffc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF2ZWwlMjBvcmFuZ2VzfGVufDB8fDB8fHww",
      description: "Fresh Oranges",
      special: true
  }

    ]

    for (let product in products) {
        await db.product.create({ name: products[product].name, price: products[product].price, salePrice: products[product].salePrice, unit: products[product].unit, src: products[product].src, description: products[product].description, special: products[product].special});
    }
}

module.exports = db;
