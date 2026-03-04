/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "poppins-sans": ["Poppins-Regular"],
        "poppins-thin": ["Poppins-Thin"],
        "poppins-extralight": ["Poppins-Extra-Light"],
        "poppins-light": ["Poppins-Light"],
        "poppins-regular": ["Poppins-Regular"],
        "poppins-medium": ["Poppins-Medium"],
        "poppins-semibold": ["Poppins-Semi-Bold"],
        "poppins-bold": ["Poppins-Bold"],
        "poppins-extrabold": ["Poppins-Extra-Bold"],
        "poppins-black": ["Poppins-Black"],
        "poppins-italic": ["Poppins-Italic"],
        "poppins-bolditalic": ["Poppins-Bold-Italic"],
      },
      fontSize: {
        "title-1": ["24px", { lineHeight: "32px" }],
        "title-2": ["20px", { lineHeight: "28px" }],
        "title-3": ["16px", { lineHeight: "24px" }],

        "body-1": ["16px", { lineHeight: "24px" }],
        "body-2": ["16px", { lineHeight: "24px" }],
        "body-3": ["14px", { lineHeight: "20px" }],

        "caption-1": ["12px", { lineHeight: "16px" }],
        "caption-2": ["14px", { lineHeight: "18px" }],
      },
      colors: {
        primary: { 1: "#3629B7", 2: "#5655B9", 3: "#A8A3D7" },
        neutral: {
          1: "#343434",
          2: "#898989",
          3: "#989898",
          4: "#CACACA",
          5: "#E0E0E0",
          6: "#FFFFFF",
        },
        semantic: {
          1: "#FF4267",
          2: "#0890FE",
          3: "#FFAF2A",
          4: "#52D5BA",
          5: "#FB6B18",
        },
      },
    },
  },
  plugins: [],
};
