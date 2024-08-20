export const createEvent = async (): Promise<string> => {
  try {
    const response = await fetch("http://localhost:5050/record", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: "24 May 2024",
        time: "1:20 pm",
        participants: ["Zaria", "Areej"],
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.toString();
  } catch (err) {
    console.error("A problem occurred with your fetch operation: ", err);
    return "not added";
  }
};
