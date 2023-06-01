/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        heading_1: '2.25rem',
        heading_2: '1.5rem',
        heading_3: '1.25rem',
        paragraph: "1rem",
        enphasis: "1rem",
        footnote: "0.875rem",
        button: "1rem",
        input: "1rem"
      },
      fontWeight: {
        heading_1: 'bold',
        heading_2: 'bold',
        heading_3: 'bold',
        paragraph: "normal",
        enphasis: "bold",
        footnote: "normal",
        button: "bold",
        input: "medium"
      },
    },
    colors: {
      brand: {
        '1': '#004aad',
        '2': '#2771d3',
        '3': '#0068ff',
        '4': '#f2f9ff',
        '5': '#e26d00',
        '6': '#f08f35',
      },
      grey: {
        '1': '#171515',
        '2': '#252525',
        '3': '#616161',
        '4': '#8b8f93',
        '5': '#e3e3e3',
        '6': '#f1f1f1',
      },
      feedback: {
        'success': '#04ba00',
        'alert': '#ffe500',
        'error-1': '#f31300',
        'error-2': '#f34638',
      },
      status_review: {
        'reviewed': '#6ac68b',
        'attention': '#f0d266',
        'overdue': '#c66a6a',
      },
    },

  },
  plugins: [],
}
