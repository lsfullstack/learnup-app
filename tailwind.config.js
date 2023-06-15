/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width:{
        "text_container": "33rem",
      },
      fontSize: {
        heading_1: "2.25rem",
        heading_2: "1.5rem",
        heading_3: "1.25rem",
        paragraph: "1rem",
        enphasis: "1rem",
        footnote: "0.875rem",
        button: "1rem",
        input: "1rem",
      },
      fontWeight: {
        heading_1: "bold",
        heading_2: "bold",
        heading_3: "bold",
        paragraph: "normal",
        enphasis: "bold",
        footnote: "normal",
        button: "bold",
        input: "medium",
      },
      boxShadow: {
        card: "0px 4px 4px rgba(139, 143, 147, 0.25)",
        "card-hover": "2px 4px 4px rgba(23, 21, 21, 0.25);",
      },
      backgroundColor: {
        modal: "rgba(23, 21, 21, 0.5)",
        "add-link": "rgba(0, 104, 255, 0.05)",
      },
      
    },
    colors: {
      brand: {
        1: "#004aad",
        2: "#2771d3",
        3: "#0068ff",
        4: "#e26d00",
        5: "#f08f35",
      },
      grey: {
        1: "#171515",
        2: "#252525",
        3: "#616161",
        4: "#8b8f93",
        5: "#e3e3e3",
        6: "#f1f1f1",
      },
      feedback: {
        success: "#04ba00",
        alert: "#ffe500",
        "error-1": "#f31300",
        "error-2": "#f34638",
      },
      status_review: {
        reviewed: "#6ac68b",
        attention: "#f0d266",
        overdue: "#c66a6a",
      },
      white: "#ffffff",
    },
    keyframes: {
      "fade-in-and-up": {
        "0%": {
          opacity: 0,
          transform: "translateY(10px)",
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0)",
        },
      },
      "fade-in-and-left": {
        "0%": {
          opacity: 0,
          transform: "translateX(-10px)",
        },
        "100%": {
          opacity: 1,
          transform: "translateX(0)",
        },
      },
      "fade-in-and-right": {
        "0%": {
          opacity: 0,
          transform: "translateX(10px)",
        },
        "100%": {
          opacity: 1,
          transform: "translateX(0)",
        },
      },
      "fade-in-and-down": {
        "0%": {
          opacity: 0,
          transform: "translateY(-10px)",
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0)",
        },
      },
    },
    animation: {
      "fade-in-and-up": "fade-in-and-up .5s ease-in-out .4s forwards",
      "fade-in-and-left": "fade-in-and-left .5s ease-in-out forwards",
      "fade-in-and-right": "fade-in-and-right .5s ease-in-out forwards",
      "fade-in-and-down": "fade-in-and-down .5s ease-in-out forwards",
    },
    transitionDelay:{
      5000: "50000ms",
    }

    
  },
  plugins: [],
};
