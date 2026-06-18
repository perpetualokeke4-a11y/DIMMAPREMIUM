"use client";

export default function HomePage() {
  const drinks = [
    {
      id: 1,
      name: "Classic Tiger Milk(Small bottle 35cl)",
      price: "₦1000",
      image:
        "https://media.istockphoto.com/id/928466276/photo/tiger-nut-milk-tigernut-horchata.jpg?s=612x612&w=0&k=20&c=d90jCfKi3QkSvPGztHJNaYtUfx6itXUy7CHDXSYIy1M=",
    },
    {
      id: 2,
      name: "Classic Tiger Milk(Big bottle 50cl)",
      price: "₦2000",
      image:
        "https://media.istockphoto.com/id/510958514/photo/horchata.jpg?s=612x612&w=0&k=20&c=Q6l1SktkBhKLAsEWaKYILu967ivF0rL32OhY3CqjEsc=",
    },
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
  marginBottom: "5px",
},
    heroSubTitle: {
  fontSize: "2rem",
  fontWeight: "700",
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
          <h1 style={styles.heroTitle}>DIMMAPREMIUM's</h1>
          <h4 style={styles.heroSubTitle}>Tigernut Drinks</h4>

          <p style={styles.heroText}>
            Fresh, creamy and delicious drinks for every occasion.
          </p>

          <button
            style={styles.button}
            onClick={() =>
              orderDrink(
                "Classic Tiger Milk (Small, Large)",
                "₦1000, ₦2000"
              )
            }
          >
            Order Now
          </button>
        </div>
      </section>

      {/* 👇 ADD THIS */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            height: auto !important;
            padding: 60px 15px !important;
          }

          h1 {
            font-size: 2.5rem !important;
          }

          h4 {
            font-size: 1.5rem !important;
          }

          p {
            font-size: 1rem !important;
          }

          button {
            padding: 10px 18px !important;
            font-size: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}