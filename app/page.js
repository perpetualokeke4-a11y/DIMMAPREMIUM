    "use client";

export default function Page() {
  const drinks = [
    {
      id: 1,
      name: "Classic Tiger Milk(Small bottle 35cl)",
      price: "₦1000",
      image: "https://media.istockphoto.com/id/928466276/photo/tiger-nut-milk-tigernut-horchata.jpg?s=612x612&w=0&k=20&c=d90jCfKi3QkSvPGztHJNaYtUfx6itXUy7CHDXSYIy1M=",
    },
    {
        id: 2,
        name: "Classic Tiger Milk(Big bottle 50cl)",
        price: "₦2000",
        image: "https://media.istockphoto.com/id/510958514/photo/horchata.jpg?s=612x612&w=0&k=20&c=Q6l1SktkBhKLAsEWaKYILu967ivF0rL32OhY3CqjEsc=",
    }
  ];

  const styles = {
   page: {
  fontFamily: "Arial, sans-serif",
  background: "#FFF8E7",
  color: "#4E342E",
  fontWeight: "bold",
},
    

   hero: {
  height: "100vh",
  backgroundImage:
    "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/bg.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "20px",
},


  heroTitle: {
  fontSize: "5rem",
  fontWeight: "900",
  marginBottom: "20px",
},

    heroText: {
      fontSize: "1.3rem",
      marginBottom: "20px",
    },

    button: {
      padding: "12px 25px",
      background: "#f1a708",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    },

    section: {
      padding: "80px 20px",
      textAlign: "center",
    },

    products: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      marginTop: "30px",
    },

    card: {
  background: "white",
  boxShadow: "0 15px 30px rgba(214, 152, 18, 0.15)",
  borderRadius: "25px",
  overflow: "hidden",
  paddingBottom: "20px",
},

    image: {
      width: "100%",
      height: "250px",
      objectFit: "cover",
    },
  };

  const orderDrink = (drinkName, price) => {
    const name = prompt("Enter your name:");
    if (!name) return;

    const address = prompt("Enter your delivery address:");
    if (!address) return;

    const whatsappNumber = "2349056636755";

    const message = `
Tiger Milk Order

Name: ${name}
Address: ${address}

Drink: ${drinkName}
Price: ${price}
`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div>
          <h1 style={styles.heroTitle}>Tigernut Drinks</h1>

          <p style={styles.heroText}>
            Fresh, creamy and delicious drinks for every occasion.
          </p>

          <button
            style={styles.button}
           onClick={() => orderDrink(drinkName, price)}
          >
            Order Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.section}>
        <h2
  style={{
    fontSize: "3rem",
    fontWeight: "900",
    color: "#4E342E",
    marginBottom: "20px",
  }}
>
  About Us
</h2>

<p
  style={{
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#6D4C41",
    maxWidth: "800px",
    margin: "0 auto",
  }}
>
  We make premium Tiger Milk drinks using the finest ingredients and
  flavors.
</p>
      </section>

      {/* Products Section */}
      <section style={styles.section}>
        <h2
  style={{
    fontSize: "3rem",
    fontWeight: "900",
    color: "#4E342E",
    marginBottom: "30px",
  }}
>
  Our Drinks
</h2>
        <div style={styles.products}>
          {drinks.map((drink) => (
            <div key={drink.id} style={styles.card}>
              <img
                src={drink.image}
                alt={drink.name}
                style={styles.image}
              />

             <h3
  style={{
    fontSize: "2.5rem",
    fontWeight: "900",
    color: "#4E342E",
    marginTop: "20px",
    marginBottom: "10px",
  }}
>
  {drink.name}
</h3>

<p
  style={{
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#D2691E",
    marginBottom: "20px",
  }}
>
  {drink.price}
</p>
              <button
                style={styles.button}
                onClick={() => orderDrink(drink.name, drink.price)}
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.section}>
        <h2
  style={{
    fontSize: "3rem",
    fontWeight: "900",
    color: "#4E342E",
  }}
>
  Why Choose Us?
</h2>

       <div
  style={{
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    margin: "15px auto",
    maxWidth: "500px",
    fontSize: "2rem",
    fontWeight: "800",
    color: "#D2691E",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  }}
>
  ✓ Fresh Ingredients
</div>

<div
  style={{
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    margin: "15px auto",
    maxWidth: "500px",
    fontSize: "2rem",
    fontWeight: "800",
    color: "#D2691E",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  }}
>
  ✓ Fast Delivery
</div>

<div
  style={{
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    margin: "15px auto",
    maxWidth: "500px",
    fontSize: "2rem",
    fontWeight: "800",
    color: "#D2691E",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  }}
>
  ✓ Affordable Prices
</div>

<div
  style={{
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    margin: "15px auto",
    maxWidth: "500px",
    fontSize: "2rem",
    fontWeight: "800",
    color: "#D2691E",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  }}
>
  ✓ Premium Taste
</div>
      </section>

      {/* Contact Section */}
      <section style={styles.section}>
        <h2>Contact Us</h2>

        <input
          type="text"
          placeholder="Your Name"
          style={{
            width: "300px",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <br />

        <input
          type="email"
          placeholder="Your Email"
          style={{
            width: "300px",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <br />

        <textarea
          placeholder="Message"
          style={{
            width: "300px",
            height: "120px",
            padding: "10px",
          }}
        />

        <br />
        <br />

        <button style={styles.button}>Send Message</button>
      </section>
    </div>
  );
}