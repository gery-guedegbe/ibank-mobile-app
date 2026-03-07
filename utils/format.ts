export const formatCardNumber = (cardNumber: string) => {
  // On récupère les 4 premiers et les 4 derniers chiffres
  const firstFour = cardNumber.slice(0, 4);
  const lastFour = cardNumber.slice(-4);

  // Le design Figma montre : Chiffres (espace) Points (espace) Points (espace) Chiffres
  return {
    firstFour,
    dots: "••••",
    lastFour,
  };
};
