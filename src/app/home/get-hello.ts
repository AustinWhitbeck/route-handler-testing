export async function getHello() {
  const response = await fetch("/api/hello");
  console.log("response value", response);
  const data = await response.json();
  console.log("data value", data);
}

export async function sendHello() {
  const response = await fetch("/api/hello", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      body: JSON.stringify({
        testKey: "some-test",
      }),
    },
  });
  console.log("response value", response);
  const data = await response.json();
  console.log("data value", data);
}
