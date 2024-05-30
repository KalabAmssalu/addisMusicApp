// Function to convert timestamp to yy, mm, dd format
const FormatDate = (timestamp: number): string => {
    const date = new Date(timestamp);
    // Extract year, month, and day components
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2); // Add leading zero if needed
    const day = ("0" + date.getDate()).slice(-2); // Add leading zero if needed
    return `${year}, ${month}, ${day}`;
  };
  
  export default FormatDate;
  